export const SITE = {
  website: "https://guthhenson.github.io/", // replace this with your deployed domain
  author: "Guth Henson",
  profile: "https://github.com/guthhenson/",
  desc: "This is where I started logging",
  title: "RogerMore肉夹馍",
  ogImage: "/public/astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/guthhenson/guthhenson.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
