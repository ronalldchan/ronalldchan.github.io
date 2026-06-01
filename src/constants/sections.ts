export const SECTIONS = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
};

export type Section = (typeof SECTIONS)[keyof typeof SECTIONS];
