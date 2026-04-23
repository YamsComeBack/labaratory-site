import type { JSX } from "react";
import { BusinessMerchProject } from "./_content/business_merch/Index";
import { CalendarProject } from "./_content/calendar/Index";
import { CyberClassProject } from "./_content/cyber_class/Index";
import { EtnoMerchProject } from "./_content/etno_merch/Index";
import { JellyFishProject } from "./_content/jelly_fish/Index";
import { MerchNcfuProject } from "./_content/merch_ncfu/Index";
import { NavigationProject } from "./_content/navigation/Index";
import { NotaBeneProject } from "./_content/nota_bene/Index";
import { PriemnayaCompanyProject } from "./_content/priemnaya_company/Index";
import { SuncMerchProject } from "./_content/sunc_merch/Index";

export type ProjectItem = {
  size: "large" | "small";
  img: string;
  title: string;
  descriptor: string;
  slug: string;
  Component: () => JSX.Element;
};

export const projectsData: readonly ProjectItem[] = [
  {
    size: "large",
    img: "Priemnaya_company.png",
    title: "Приёмная кампания СКФУ",
    descriptor: "Университет в медиа-трендах – на одной волне с абитуриентами",
    slug: "Priemnaya_company",
    Component: PriemnayaCompanyProject,
  },
  {
    size: "small",
    img: "Sunc_merch.png",
    title: "Мерч СУНЦ",
    descriptor: "Умная одежда для целеустремлённых школьников",
    slug: "Sunc_merch",
    Component: SuncMerchProject,
  },
  {
    size: "small",
    img: "Business_merch.png",
    title: "Бизнес\nмерч",
    descriptor: "Мерч, в котором стремишься к успеху",
    slug: "Business_merch",
    Component: BusinessMerchProject,
  },
  {
    size: "large",
    img: "Calendar.png",
    title: "Календарь\nСКФУ\n2024",
    descriptor: "Три календаря — три взгляда на жизнь университета",
    slug: "Calendar",
    Component: CalendarProject,
  },
  {
    size: "small",
    img: "Nota_bene.png",
    title: "Журнальная вёрстка",
    descriptor: "Правила типографики на страницах журналов",
    slug: "Nota_bene",
    Component: NotaBeneProject,
  },
  {
    size: "small",
    img: "Etno_merch.png",
    title: "Этномерч",
    descriptor: "Синтез культурных традиций и современной моды",
    slug: "Etno_merch",
    Component:EtnoMerchProject,
  },
  {
    size: "large",
    img: "Navigation.png",
    title: "Брендиро\u00ADвание СКФУ",
    descriptor: "Удобство и коммуникация в современном университете",
    slug: "Navigation",
    Component: NavigationProject,
  },
  {
    size: "small",
    img: "Cyber_class.png",
    title: "Оформление киберкласса",
    descriptor: "Нейросети в интерьере будущего",
    slug: "Cyber_class",
    Component: CyberClassProject,
  },
  {
    size: "small",
    img: "Jelly_fish.png",
    title: "Jelly Fish",
    descriptor: "Остроумная упаковка для студенческого стартапа",
    slug: "Jelly_fish",
    Component: JellyFishProject,
  },
  {
    size: "large",
    img: "Merch_ncfu.png",
    title: "Одеждомагазин",
    descriptor: "Стиль и ирония в университетском мерче",
    slug: "Merch_ncfu",
    Component: MerchNcfuProject,
  },
] as const;

export const projectSlugs = projectsData.map((p) => p.slug);
export const getProjectBySlug = (slug: string) =>
  projectsData.find((p) => p.slug === slug) ?? null;