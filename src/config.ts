import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://lenhare.dev/", // replace this with your deployed domain
  author: "Renan Lenhare",
  profile: "https://lenhare.dev/",
  desc: "Soluções Inovadoras & Insights Pessoais.",
  title: "lenhare.dev",
  ogImage: "renan.jpg",
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
    active: true,
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
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/user/RenanLenhare",
    linkTitle: `${SITE.title} no YouTube`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/187046479725199361",
    linkTitle: `${SITE.title} no Discord`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/rlenhare/",
    linkTitle: `${SITE.title} no Reddit`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/renansioso/",
    linkTitle: `${SITE.title} na Steam`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/lenhare",
    linkTitle: `${SITE.title} no Telegram`,
    active: true,
  },
];
