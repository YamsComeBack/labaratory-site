import type { JSX } from "react";
import { CalendarProject } from "./_content/calendar/Index";
import { ErnestPrintIdentityProject } from "@/app/projects/_content/ernest/Index";
import { EtnoMerchProject } from "./_content/etno_merch/Index";
import { KavkazLegendsCalendarProject } from "@/app/projects/_content/kavkaz_legends_calendar/Index";
import { KavkazLegendsGameProject } from "@/app/projects/_content/kavkaz_legends_game/Index";
import { MerchNcfuProject } from "./_content/merch_ncfu/Index";
import { NavigationProject } from "./_content/navigation/Index";
import { NapetchatanoFestProject } from "@/app/projects/_content/napetchatano_fest/Index";
import { NotaBeneProject } from "./_content/nota_bene/Index";
import { OtpechatanoShopProject } from "@/app/projects/_content/otpechatano_shop/Index";
import { PriemnayaCompanyProject } from "./_content/priemnaya_company/Index";
import { SkfuPostcardsProject } from "@/app/projects/_content/skfu_postcards/Index";
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
    img: "cover_ttgame.png",
    title: "Настольная игра\n «Легенды Кавказа. Эхо древних гор»",
    descriptor:
      "Игра по мотивам легенд Северного Кавказа.\nПроект-победитель грантового конкурса Росмолодёжи",
    slug: "Kavkaz_legends_game",
    Component: KavkazLegendsGameProject,
  },
  {
    size: "small",
    img: "cover_ttgame_calendar.png",
    title: "Календарь по мотивам игры\n «Легенды Кавказа»",
    descriptor: "Календарь по мотивам нашей настольной игры",
    slug: "Kavkaz_legends_calendar",
    Component: KavkazLegendsCalendarProject,
  },
  {
    size: "small",
    img: "cover_ernest.png",
    title: 'Разработка айдентики\n для «Эрнест печатает»',
    descriptor: "Айдентика и полиграфическая продукция\n для мастерской печати",
    slug: "Ernest_print_identity",
    Component: ErnestPrintIdentityProject,
  },
  {
    size: "large",
    img: "cover_napechatano.png",
    title: 'Арт-фестиваль\n «Напечатано!»',
    descriptor: "Печать, мерч, музыка и многое другое",
    slug: "Napetchatano_fest",
    Component: NapetchatanoFestProject,
  },
  {
    size: "small",
    img: "cover_printstore.png",
    title: 'Онлайн-магазин\n «Отпечатано»',
    descriptor: "Наш магазин крутого мерча",
    slug: "Otpechatano_shop",
    Component: OtpechatanoShopProject,
  },
  {
    size: "small",
    img: "cover_postcards.png",
    title: "Разработка серии\n открыток для СКФУ",
    descriptor:
      "Две серии уникальных открыток\n для Северо-Кавказского федерального университета",
    slug: "Skfu_postcards",
    Component: SkfuPostcardsProject,
  },
  {
    size: "large",
    img: "Priemnaya_company.png",
    title: "Приёмная кампания СКФУ",
    descriptor: "Университет в медиа-трендах – на одной волне\n с абитуриентами",
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
    img: "Nota_bene.png",
    title: "Журнальная вёрстка",
    descriptor: "Правила типографики на страницах журналов",
    slug: "Nota_bene",
    Component: NotaBeneProject,
  },
  {
    size: "large",
    img: "Calendar.png",
    title: "Календарь СКФУ 2024",
    descriptor: "Три календаря — три взгляда на жизнь университета",
    slug: "Calendar",
    Component: CalendarProject,
  },
  {
    size: "small",
    img: "Etno_merch.png",
    title: "Этномерч",
    descriptor: "Синтез культурных традиций и современной моды",
    slug: "Etno_merch",
    Component: EtnoMerchProject,
  },
  {
    size: "small",
    img: "Merch_ncfu.png",
    title: "Одеждомагазин",
    descriptor: "Стиль и ирония в университетском мерче",
    slug: "Merch_ncfu",
    Component: MerchNcfuProject,
  },
  {
    size: "large",
    img: "Navigation.png",
    title: "Брендиро\u00ADвание СКФУ",
    descriptor: "Удобство и коммуникация в современном университете",
    slug: "Navigation",
    Component: NavigationProject,
  },
] as const;

export const projectSlugs = projectsData.map((p) => p.slug);
export const getProjectBySlug = (slug: string) =>
  projectsData.find((p) => p.slug === slug) ?? null;
