import { format } from "date-fns";
import Link from "next/link";
import {
  PublicBlogPostDto,
  ResponseWithPaginationPublicBlogPostDto,
} from "../../types/custom";
import { Metadata } from "next";
import Image from "next/legacy/image";
import Pagination from "@/components/pagination/Pagination";

export const metadata: Metadata = {
  title: "Axalin Blogs | Stay updated with latest tips and news",
  description:
    "Explore the latest articles and tips. Stay informed and empowered with Axalin's valuable blog content.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Axalin Blogs | Stay updated with latest tips and news",
    description:
      "Explore the latest articles and tips. Stay informed and empowered with Axalin's valuable blog content.",
    url: "/blogs",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Blogs | Axalin",
      },
    ],
  },
};

export default async function Blogs({ searchParams }: any) {
  let pageNumber;
  const { page } = await searchParams;
  pageNumber = Number(page) || 1;

  const res = await fetch(
    // We have to provide base url because in server side rendering "/api/blogs/${params.slug}" will fail
    `https://axalingroup.com/api/blogs?page=${
      pageNumber - 1
    }&numberOfEntries=9`,
    {
      cache: "no-store",
    }
  );
  const data = (await res.json()) as ResponseWithPaginationPublicBlogPostDto;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://axalingroup.com/blogs",
    name: "Blogs by Axalin",
    description:
      "Stop IT bottlenecks. Axalin delivers strategic Digital Transformation, 24/7 Managed Services, and Expert Staffing to cut costs, reduce risk, and secure competitive advantage for mid-tier and Enterprise companies.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="bg-white pb-12 lg:pb-28 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* TODO: Fetch the latest article from the blog */}
          {pageNumber === 1 && data.entries && (
            <article
              key={data.entries[0].slug}
              className="relative isolate mx-auto mb-24 hidden max-w-2xl flex-col gap-6 lg:flex lg:max-w-none lg:flex-row lg:gap-16"
            >
              <Link
                href={`/blogs/${data.entries[0].slug}`}
                className="relative aspect-[16/9] object-cover transition duration-300 hover:opacity-75 sm:aspect-[2/1] lg:aspect-[3/2] lg:w-1/2 lg:shrink-0"
              >
                <Image
                  src={data.entries[0].featureImageUrl}
                  alt={data.entries[0].title}
                  priority={true}
                  className="absolute inset-0 h-full w-full rounded-md bg-gray-50 object-cover"
                  layout="fill"
                />
                <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-gray-900/10" />
              </Link>
              <div className="flex max-w-xl flex-col justify-center">
                <div className="flex text-xs">
                  <Link
                    href={`/blogs/category/${data.entries[0].category.category}`}
                    className="relative rounded-md px-3 py-1.5 font-medium text-white bg-[#08549c] hover:bg-[#086ac1]
"
                  >
                    {data.entries[0].category.categoryDisplayName}
                  </Link>
                </div>
                <div className="group relative">
                  <h1 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-gray-600 lg:text-4xl">
                    <Link href={`/blogs/${data.entries[0].slug}`}>
                      <span className="absolute inset-0" />
                      {data.entries[0].title}
                    </Link>
                  </h1>
                  <div className="mt-4 flex items-center gap-x-4 text-sm text-gray-600">
                    <div className="text-sm">
                      {data.entries[0].writtenBy || "By Axalin Team"}
                    </div>
                    |
                    <time dateTime={data.entries[0].createdDate}>
                      {format(
                        new Date(data.entries[0].createdDate),
                        "MMMM dd, yyyy"
                      )}
                    </time>
                  </div>
                </div>
              </div>
            </article>
          )}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data?.entries?.map((post: PublicBlogPostDto, idx) => (
              <article key={post.slug} className="flex flex-col items-start">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="relative aspect-[16/9] w-full transition duration-300 hover:opacity-75 sm:aspect-[2/1] lg:aspect-[3/2]"
                >
                  <Image
                    src={post.featureImageUrl}
                    alt={post.title}
                    priority={true}
                    className="w-full rounded-md bg-gray-100 object-cover"
                    layout="fill"
                  />
                  <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-gray-900/10" />
                </Link>
                <div className="max-w-xl">
                  <div className="mt-6 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.createdDate} className="text-gray-600">
                      {format(new Date(post.createdDate), "MMMM dd, yyyy")}
                    </time>
                    <Link
                      href={`/blogs/category/${post.category.category}`}
                      className="relative rounded-md bg-[#08549c] hover:bg-[#086ac1] px-3 py-1.5 font-medium text-white"
                    >
                      {post.category.categoryDisplayName}
                    </Link>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blogs/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.shortDescription}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Pagination
            totalPage={data.totalPages ?? 0}
            page={data.currentPage ? data.currentPage + 1 : 1}
            // Sibling count depends on page number series as {< 1 ...  5 6 7 ... 10 >}
            // In the above case count of siblings will be no. of pages we want to display both side of middle value
            numberOPageSiblings={1} // Increase this value to increase range of no. of pages to display
          />
        </div>
      </div>
    </>
  );
}
