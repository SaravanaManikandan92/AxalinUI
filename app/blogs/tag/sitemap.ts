import { MetadataRoute } from "next";

export interface TagDto {
  tag: string;
  tagDisplayName: string;
}

// This will revalidate the sitemap url every hour in production
export const revalidate = 3600;

export default async function sitemap_blog(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(
    `https://mw-cms-api.hefanex.com/api/public/tags/all?domain=axalingroup.com`,
    {
      headers: {
        "X-API-KEY": process.env.CMS_API_KEY || "",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const data = (await res.json()) as TagDto[];

  return data.length
    ? data?.map((tag) => ({
        url: `https://axalingroup.com/blogs/tag/${tag.tag}`,
        changeFrequency: "weekly",
      }))
    : [];
}
