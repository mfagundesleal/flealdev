import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://fleal.pages.dev/", // replace this with your deployed domain
  author: "Michel Leal",
  desc: "Tutoriais sobre tecnologia, dicas de desenvolvimento web, opiniões e muito conhecimento sobre o mundo dos sistemas de informação.",
  title: "flealdev",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 6,
};

export const LOCALE = ["pt-BR"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/mfagundesleal",
    linkTitle: ` ${SITE.title} no Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fleal96/",
    linkTitle: `${SITE.title} no LinkedIn`,
    active: true,
  },
  {
    name: "E-mail",
    href: "mailto:michel@sisefficere.com.br",
    linkTitle: `${SITE.title} no E-mail`,
    active: true,
  },
];
