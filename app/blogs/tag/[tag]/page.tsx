import { format } from "date-fns";
import Link from "next/link";

import { Metadata } from "next";
import Image from "next/legacy/image";
import {
  PublicBlogPostDto,
  ResponseWithPaginationPublicBlogPostDto,
} from "@/types/custom";
import Pagination from "@/components/pagination/Pagination";

type Props = {
  params?: Promise<any>;
  searchParams?: Promise<any>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Articles about ${tag} | Axalin Blogs`,
    description: `Explore our informative articles about ${tag}. Stay updated with valuable insights and tips.`,
    alternates: {
      canonical: `/blogs/tag/${tag}`,
    },
    openGraph: {
      title: `Articles about ${tag} | Axalin Blogs`,
      description: `Explore our informative articles about ${tag}. Stay updated with valuable insights and tips.`,
      url: `/blogs/tag/${tag}`,
      images: "https://axalingroup.com/assets/logo_brand.svg",
      type: "website",
    },
    twitter: {
      site: "https://x.com/AxalinGroup",
      images: [
        {
          url: "https://axalingroup.com/assets/logo_brand.svg",
          alt: "Blogs by tags | Axalin",
        },
      ],
    },
  };
}

export default async function Tag({ params, searchParams }: Props) {
  let pageNumber;

  const { tag } = await params;
  const { page } = await searchParams;

  pageNumber = Number(page) || 1;
  const res = await fetch(
    // We have to provide base url because in server side rendering "/api/blogs/${params.slug}" will fail
    `https://axalingroup.com/api/blogs/tag/${tag}?page=${
      pageNumber - 1
    }&numberOfEntries=9`,
    {
      cache: "no-store",
    }
  );

  const data = (await res.json()) as ResponseWithPaginationPublicBlogPostDto;
  return (
    <div className="bg-white pb-24 sm:pb-32 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{`Posts by Tag: ${tag}`}</h1>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data?.entries?.map((post: PublicBlogPostDto, idx) => (
            <article key={post.slug} className="flex flex-col items-start">
              <Link
                href={`/blogs/${post.slug}`}
                className="relative aspect-[16/9] w-full transition duration-300 hover:opacity-75 sm:aspect-[2/1] lg:aspect-[3/2]"
              >
                <Image
                  src={post.featureImageUrl}
                  alt={post.title}
                  layout="fill"
                  priority={true}
                  className="w-full rounded-md bg-gray-100 object-cover"
                />
                <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-gray-900/10" />
              </Link>
              <div className="max-w-xl">
                <div className="mt-6 flex items-center text-xs">
                  <time dateTime={post.createdDate} className="text-gray-600">
                    {format(new Date(post.createdDate), "MMMM dd, yyyy")}
                  </time>
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
          tag={tag}
          // Sibling count depends on page number series as {< 1 ...  5 6 7 ... 10 >}
          // In the above case count of siblings will be no. of pages we want to display both side of middle value
          numberOPageSiblings={1} // Increase this value to increase range of no. of pages to display
        />
      </div>
    </div>
  );
}
