export type Project = {
  slug: string;
  title: string;
  descriptor?: string;
  image: string;
  logo: string;
};

const PROJECT_FILES = [
  "Priemnaya_company.png",
  "Sunc_merch.png",
  "Merch_ncfu.png",
  "Etno_merch.png",
  "Business_merch.png",
  "Calendar.png",
  "Navigation.png",
  "Nota_bene.png",
  "Cyber_class.png",
  "Jelly_fish.png",
] as const;

export const toSlug = (file: string) =>
  file.replace(/\.[^.]+$/, "").toLowerCase();

const titlesMap: Record<string, string> = {
  Priemnaya_company: "Приёмная кампания СКФУ",
  Sunc_merch: "Мерч СУНЦ",
  Merch_ncfu: "Мерч СКФУ",
  Etno_merch: "Этно мерч",
  Business_merch: "Бизнес мерч",
  Calendar: "Календарь СКФУ 2024",
  Navigation: "Брендирование СКФУ",
  Nota_bene: "Журнальная вёрстка",
  Cyber_class: "Оформление киберкласса",
  Jelly_fish: "Jelly Fish",
};

const prettify = (slug: string) =>
  slug
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

export const allProjects: readonly Project[] = PROJECT_FILES.map((file) => {
  const slug = toSlug(file);
  const base = file.replace(/\.[^.]+$/, "");
  const title = titlesMap[base] ?? prettify(slug);

  return {
    slug,
    title,
    descriptor: undefined,
    image: `/images/projects/${file}`,
    logo: "/svg/Logo-full_black.svg",
  } as const;
});

export const projectSlugs = allProjects.map((p) => p.slug);

export const findProjectBySlug = (slug: string) =>
  allProjects.find((p) => p.slug === slug);
