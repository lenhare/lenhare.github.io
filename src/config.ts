import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://lenhare.dev/", // replace this with your deployed domain
  author: "Renan Lenhare",
  profile: "https://lenhare.dev/",
  desc: "Soluções Inovadoras & Insights Pessoais.",
  title: "lenhare.dev",
  ogImage: "renan.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
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
    linkTitle: `Renan Lenhare no Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/renanlenhare",
    linkTitle: `Renan Lenhare no Instagram`,
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
    linkTitle: `Renan Lenhare no Mastodon`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/lenhare",
    linkTitle: `Renan Lenhare na Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/RenanLenhare",
    linkTitle: `Renan Lenhare no YouTube`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/187046479725199361",
    linkTitle: `Renan Lenhare no Discord`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/rlenhare/",
    linkTitle: `Renan Lenhare no Reddit`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/renansioso/",
    linkTitle: `Renan Lenhare na Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/lenhare",
    linkTitle: `Renan Lenhare no Telegram`,
    active: true,
  },
];
