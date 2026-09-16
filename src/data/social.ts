// Single source for contact and profile links. No tracking parameters.
export const EMAIL = "yanshengluo@ufl.edu";

export const links = {
  email: `mailto:${EMAIL}`,
  github: "https://github.com/YanshengLuo",
  linkedin: "https://www.linkedin.com/in/yansheng-luo-8395b328a",
  orcid: "https://orcid.org/0009-0007-6127-7774",
  fantasticSea: "https://fantazticsea.github.io/",
  igemDryLab: "https://2025.igem.wiki/uflorida/drylaboverview",
} as const;

export interface SocialLink {
  label: string;
  href: string;
  /** Human-readable form shown next to the label where space allows. */
  display: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Email", href: links.email, display: EMAIL },
  { label: "GitHub", href: links.github, display: "github.com/YanshengLuo" },
  { label: "LinkedIn", href: links.linkedin, display: "linkedin.com/in/yansheng-luo" },
  { label: "ORCID", href: links.orcid, display: "0009-0007-6127-7774" },
];
