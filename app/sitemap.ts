import { MetadataRoute } from "next";
import { getBaseUrl } from "@/utils/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/?lang=en`,
          es: `${baseUrl}/?lang=es`,
        },
      },
    },
  ];
}
