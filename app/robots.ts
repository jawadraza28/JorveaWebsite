import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/r/"],
    },
    sitemap: "https://jorvea.tech/sitemap.xml",
    host: "https://jorvea.tech",
  };
}
