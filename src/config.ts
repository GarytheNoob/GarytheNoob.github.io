import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Gary's Blog",
  subtitle: "Sharing random things",
  lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
  themeColor: {
    hue: 260, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: "assets/images/numazu_firework.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true, // Display the credit text of the banner image
      text: "提供：沼津市", // Credit text to be displayed
      url: "https://www.city.numazu.shizuoka.jp/photolibrary/", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    {
      src: "/favicon/favicon-512x512.png", // Path of the favicon, relative to the /public directory
      sizes: "512x512", // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
    {
      src: "/favicon/favicon-180x180.png", // Path of the favicon, relative to the /public directory
      // theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: "180x180", // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
    {
      src: "/favicon/favicon-192x192.png", // Path of the favicon, relative to the /public directory
      sizes: "192x192", // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
    {
      src: "/favicon/favicon-32x32.png", // Path of the favicon, relative to the /public directory
      sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
    {
      src: "/favicon/favicon-16x16.png", // Path of the favicon, relative to the /public directory
      sizes: "16x16", // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "GitHub",
      url: "https://github.com/GarytheNoob", // Internal links should not include the base path, as it is automatically added
      external: true, // Show an external link icon and will open in a new tab
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.jpeg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "GarytheNoob",
  bio: "二偶吃，偶尔整点有的没的",
  links: [
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/GarytheNoob",
    },
    {
      name: "Twitter",
      icon: "ic:baseline-email", // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: "mailto:garythenoob@outlook.com",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
  // Please select a dark theme, as this blog theme currently only supports dark background color
  theme: "github-dark",
};
