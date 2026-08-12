import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://scalatelab.com",
      lastModified: new Date(),
    },
    {
      url: "https://scalatelab.com/aplicar",
      lastModified: new Date(),
    },
    {
      url: "https://scalatelab.com/politica-de-privacidad",
      lastModified: new Date(),
    },
    {
      url: "https://scalatelab.com/politica-de-cookies",
      lastModified: new Date(),
    },
    {
      url: "https://scalatelab.com/aviso-legal",
      lastModified: new Date(),
    },
  ];
}