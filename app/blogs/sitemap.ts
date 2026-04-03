import { ResponseWithPaginationPublicBlogPostSlugDto } from "@/types/custom";
import { MetadataRoute } from "next";

// This will revalidate the sitemap url every hour in production
export const revalidate = 3600;

export default async function sitemap_blog(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(
    `https://mw-cms-api.hefanex.com/api/public/blogs/slugs?page=0&numberOfEntries=50000&domain=axalingroup.com`,
    {
      headers: {
        "X-API-KEY": process.env.CMS_API_KEY || "",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const data =
    (await res.json()) as ResponseWithPaginationPublicBlogPostSlugDto;

  return data.entries
    ? data.entries?.map((blog) => ({
        url: `https://axalingroup.com/blogs/${blog.slug}`,
        lastModified: new Date(blog.createdDate),
      }))
    : [];
}
