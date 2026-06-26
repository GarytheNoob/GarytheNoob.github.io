/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates a Link Card component for friend links.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.url - The URL of the link (required).
 * @param {string} [properties.title] - An optional title (if not provided, will try to fetch from the webpage).
 * @param {string} [properties.description] - An optional description/subtitle (if not provided, will try to fetch from the webpage).
 * @param {string} [properties.icon] - An optional icon URL (if not provided, will use Google's favicon service).
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created Link Card component.
 */
export function LinkCardComponent(properties, children) {
  if (Array.isArray(children) && children.length !== 0)
    return h("div", { class: "hidden" }, [
      'Invalid directive. ("link" directive must be leaf type "::link{url="https://example.com"}")',
    ]);

  if (!properties.url)
    return h(
      "div",
      { class: "hidden" },
      'Invalid URL. ("url" attribute is required)',
    );

  const url = properties.url;
  const cardUuid = `LC${Math.random().toString(36).slice(-6)}`; // Collisions are not important

  // Parse URL to get domain for favicon
  let domain = "";
  try {
    const urlObj = new URL(url);
    domain = urlObj.hostname;
  } catch {
    // Invalid URL, use as is
    domain = url;
  }

  // Use provided icon or Google's favicon service
  const iconUrl =
    properties.icon ||
    `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  // Create elements with initial icon style
  const nIcon = h(`div#${cardUuid}-icon`, {
    class: "lc-icon",
    style: `background-image: url('${iconUrl}'); background-size: cover; background-position: center;`,
  });
  const nTitle = h(
    `div#${cardUuid}-title`,
    { class: "lc-title" },
    properties.title || "Loading...",
  );
  const nDescription = h(
    `div#${cardUuid}-description`,
    { class: "lc-description" },
    properties.description || "Loading...",
  );

  const nUrl = h(`div#${cardUuid}-url`, { class: "lc-url" }, url);

  const nTitleBar = h("div", { class: "lc-titlebar" }, [
    h("div", { class: "lc-titlebar-left" }, [nIcon, nTitle]),
  ]);

  // Script to fetch webpage metadata if title/description not provided
  const fetchScript =
    properties.title && properties.description
      ? ""
      : `
		(async function() {
			const card = document.getElementById('${cardUuid}-card');
			const titleEl = document.getElementById('${cardUuid}-title');
			const descEl = document.getElementById('${cardUuid}-description');
			const iconEl = document.getElementById('${cardUuid}-icon');
			
			// Helper function to fetch with timeout (3 seconds)
			async function fetchWithTimeout(url, timeout = 3000) {
				const controller = new AbortController();
				const timeoutId = setTimeout(() => controller.abort(), timeout);
				try {
					const response = await fetch(url, { 
						signal: controller.signal,
						referrerPolicy: "no-referrer"
					});
					clearTimeout(timeoutId);
					return response;
				} catch (err) {
					clearTimeout(timeoutId);
					throw err;
				}
			}
			
			// Helper function to try multiple CORS proxies
			async function fetchWithProxies(targetUrl) {
				const proxies = [
					'https://api.allorigins.win/get?url=',
					'https://corsproxy.io/?',
					'https://api.codetabs.com/v1/proxy?quest=',
				];
				
				for (const proxy of proxies) {
					try {
						const proxyUrl = proxy + encodeURIComponent(targetUrl);
						const response = await fetchWithTimeout(proxyUrl, 3000);
						
						if (!response.ok) continue;
						
						// Try to parse as JSON first
						let html = null;
						const contentType = response.headers.get('content-type') || '';
						
						if (contentType.includes('application/json')) {
							try {
								const data = await response.json();
								html = data.contents || data.content || data.data || 
								       (typeof data === 'string' ? data : null);
							} catch (e) {
								// Not valid JSON, try as text
								html = await response.text();
							}
						} else {
							// Direct HTML response
							html = await response.text();
						}
						
						if (html && html.trim().length > 0) {
							return html;
						}
					} catch (err) {
						console.warn('[LINK-CARD] Proxy failed:', proxy, err);
						continue;
					}
				}
				return null;
			}
			
			// Helper function to get favicon
			function updateFavicon(doc, baseUrl, defaultDomain) {
				if (!iconEl) return;
				
				const defaultIconUrl = 'https://www.google.com/s2/favicons?domain=' + defaultDomain + '&sz=64';
				let faviconFound = false;
				let attemptsCount = 0;
				const maxAttempts = 10; // Total attempts across all methods
				
				// Try multiple favicon sources
				const faviconSelectors = [
					'link[rel="icon"]',
					'link[rel="shortcut icon"]',
					'link[rel="apple-touch-icon"]',
					'link[rel="apple-touch-icon-precomposed"]',
				];
				
				for (const selector of faviconSelectors) {
					const favicon = doc.querySelector(selector)?.getAttribute('href');
					if (favicon) {
						try {
							const iconUrl = favicon.startsWith('http') 
								? favicon 
								: new URL(favicon, baseUrl).href;
							const img = new Image();
							img.onload = () => {
								if (!faviconFound) {
									iconEl.style.backgroundImage = 'url(' + iconUrl + ')';
									iconEl.style.backgroundColor = 'transparent';
									faviconFound = true;
								}
							};
							img.onerror = () => {
								attemptsCount++;
								if (attemptsCount >= maxAttempts && !faviconFound) {
									// Use default if all attempts failed
									iconEl.style.backgroundImage = 'url(' + defaultIconUrl + ')';
									iconEl.style.backgroundColor = 'transparent';
								}
							};
							img.src = iconUrl;
						} catch (e) {
							attemptsCount++;
							continue;
						}
					}
				}
				
				// Fallback: try common favicon paths
				const commonPaths = [
					'/favicon.ico',
					'/favicon.png',
					'/apple-touch-icon.png',
				];
				
				for (const path of commonPaths) {
					try {
						const iconUrl = new URL(path, baseUrl).href;
						const img = new Image();
						img.onload = () => {
							if (!faviconFound) {
								iconEl.style.backgroundImage = 'url(' + iconUrl + ')';
								iconEl.style.backgroundColor = 'transparent';
								faviconFound = true;
							}
						};
						img.onerror = () => {
							attemptsCount++;
							if (attemptsCount >= maxAttempts && !faviconFound) {
								// Use default if all attempts failed
								iconEl.style.backgroundImage = 'url(' + defaultIconUrl + ')';
								iconEl.style.backgroundColor = 'transparent';
							}
						};
						img.src = iconUrl;
					} catch (e) {
						attemptsCount++;
						continue;
					}
				}
				
				// Final fallback: if no favicon found after a short delay, use default
				setTimeout(() => {
					if (!faviconFound && iconEl) {
						iconEl.style.backgroundImage = 'url(' + defaultIconUrl + ')';
						iconEl.style.backgroundColor = 'transparent';
					}
				}, 1500);
			}
			
			try {
				const html = await fetchWithProxies('${url}');
				
				if (html) {
					const parser = new DOMParser();
					const doc = parser.parseFromString(html, 'text/html');
					
					// Try to get title from multiple sources
					let title = null;
					if (!${properties.title ? "true" : "false"}) {
						title = doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
						        doc.querySelector('meta[name="twitter:title"]')?.getAttribute('content') ||
						        doc.querySelector('title')?.textContent?.trim() ||
						        doc.querySelector('h1')?.textContent?.trim() ||
						        '${domain}';
						
						if (titleEl && title) {
							titleEl.innerText = title;
						}
					}
					
					// Try to get description from multiple sources
					let description = null;
					if (!${properties.description ? "true" : "false"}) {
						description = doc.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
						              doc.querySelector('meta[name="twitter:description"]')?.getAttribute('content') ||
						              doc.querySelector('meta[name="description"]')?.getAttribute('content') ||
						              doc.querySelector('meta[property="og:site_name"]')?.getAttribute('content') ||
						              'No description available';
						
						if (descEl && description) {
							descEl.innerText = description;
						}
					}
					
					// Try to get favicon
					updateFavicon(doc, '${url}', '${domain}');
				} else {
					throw new Error('Failed to fetch HTML from all proxies');
				}
				
				card?.classList.remove("fetch-waiting");
				console.log("[LINK-CARD] Loaded card for ${url} | ${cardUuid}.");
			} catch (err) {
				// Fallback: use domain as title and default description
				${!properties.title ? `if (titleEl) titleEl.innerText = '${domain}';` : ""}
				${!properties.description ? `if (descEl) descEl.innerText = 'No description available';` : ""}
				
				// Use default favicon on error
				if (iconEl) {
					const defaultIconUrl = 'https://www.google.com/s2/favicons?domain=${domain}&sz=64';
					iconEl.style.backgroundImage = 'url(' + defaultIconUrl + ')';
					iconEl.style.backgroundColor = 'transparent';
				}
				
				card?.classList.remove("fetch-waiting");
				card?.classList.add("fetch-error");
				console.warn("[LINK-CARD] (Error) Loading card for ${url} | ${cardUuid}.", err);
			}
		})();
	`;

  const nScript =
    properties.title && properties.description
      ? null
      : h(
          `script#${cardUuid}-script`,
          { type: "text/javascript", defer: true },
          fetchScript,
        );

  // If all info is provided, don't add fetch-waiting class
  const cardClass =
    properties.title && properties.description
      ? "card-link no-styling"
      : "card-link fetch-waiting no-styling";

  return h(
    `a#${cardUuid}-card`,
    {
      class: cardClass,
      href: url,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    [nTitleBar, nDescription, nUrl, nScript].filter(Boolean),
  );
}
