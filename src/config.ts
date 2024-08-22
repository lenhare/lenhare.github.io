import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://lenhare.github.io/", // replace this with your deployed domain
  author: "Renan Lenhare",
  profile: "https://lenhare.dev/",
  desc: "Soluções Inovadoras & Insights Pessoais.",
  title: "lenhare.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "pt-BR", // html lang code. Set this empty and default will be "en"
  langTag: ["pt-BR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/lenhare/lenhare.github.io.git",
    linkTitle: ` ${SITE.title} no Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/renanlenhare",
    linkTitle: `${SITE.title} no Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:renan@lenhare.dev",
    linkTitle: `Envie um email para ${SITE.title}`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://bolha.us/lenhare",
    linkTitle: `${SITE.title} no Mastodon`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/lenhare",
    linkTitle: `${SITE.title} na Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/user/RenanLenhare",
    linkTitle: `${SITE.title} no YouTube`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/lenhare",
    linkTitle: `${SITE.title} no Telegram`,
    active: false,
  },
];
