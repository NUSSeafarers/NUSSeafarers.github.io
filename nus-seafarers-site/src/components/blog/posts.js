import badasContent from "../../content/badas-riau-expedition.md";
import experiencingKrakatoa from "../../content/experiencing-krakatoa.md";
import understandingAnambas from "../../content/understanding-anambas.md";
import sailToAnambas from "../../content/sail-to-anambas.md";
import voyageAcrossTheEquator from "../../content/voyage-across-the-equator.md"

const posts = [
  {
    title: "Badas-Riau Expedition",
    slug: "badas-riau-expedition",
    date: "January 2, 2025",
    author: "Lewis",
    link: "",
    thumbnail: "/images/voyages/2025-01-badas-riau/pulau_pinang_seribu.jpg", // Fill properly
    summary:
      "Sailing through the rich waters of Riau, discovering remote island communities and breathtaking coastlines.",
    meta: "Riau Voyage",
    content: badasContent,
  },
  {
    title: "Understanding Anambas",
    slug: "understanding-anambas",
    date: "May, 2023",
    author: "NUS News",
    link: "",
    thumbnail:
      "/images/voyages/2023-05-understanding-anambas/Sylvain-Pulling-Kayak-Island.jpg",
    summary:
      "Revival of NUS Seafarers after a 4-year hiatus, featuring two voyages visiting almost 20 islands each in the gorgeous archipelago.",
    meta: "Anambas Voyage",
    content: understandingAnambas,
  },
  {
    title: "Experiencing Krakatoa",
    slug: "experiencing-krakatoa",
    date: "March 12, 2018",
    author: "Prof Martin Henz and Dr John van Wyhe",
    link: "",
    thumbnail:
      "/images/voyages/2018-02-recess-week-volcano-voyage/experiencing-krakatoa-report/student-at-rakata.jpg", // Fill properly
    summary:
      "Fathoming the enormity of the 1883 Krakatoa eruption amidst volcanic landscapes.",
    meta: "Krakatoa Voyage",
    content: experiencingKrakatoa,
  },
  {
    title: "Sail to Anambas",
    slug: "sail-to-anambas",
    date: "June 1, 2017",
    author: "NUS News",
    link: "",
    thumbnail:
      "/images/voyages/2017-04-sail-to-anambas/climbing-group-photo.jpg", 
    summary:
      "A group of 12 NUS students from various schools and faculties went from strangers to friends when they took off on an unconventional journey, living and working together onboard a ship on an 11-day voyage to the remote Anambas Islands of Indonesia.",
    meta: "Anambas Voyage",
    content: sailToAnambas,
  },
  {
    title: "Voyage Across the Equator",
    slug: "voyage-across-the-equator",
    date: "January 29, 2017",
    author: "NUS News",
    link: "",
    thumbnail:
      "/images/voyages/2017-01-across-the-equator/map-south-china-sea.jpg", 
    summary:
      "Nine NUS students kicked off their new year earlier this month by sailing off on a ship for a week-long voyage across the Equator.",
    meta: "Sebanka Voyage",
    content: voyageAcrossTheEquator,
  },
];

export default posts;
