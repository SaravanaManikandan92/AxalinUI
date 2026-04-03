import ErrorHandler from "@/components/error-handler/ErrorHandler";
import { PublicBlogPostDto } from "@/types/custom";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/legacy/image";
import Link from "next/link";

type Props = {
  params?: Promise<any>;
  searchParams?: Promise<any>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const { slug } = await params;

  const res = await fetch(`https://axalingroup.com/api/blogs/${slug}`);
  const data = (await res.json()) as PublicBlogPostDto;
  return {
    title: `${data.title}`,
    description: data.shortDescription,
    alternates: {
      canonical: `/blogs/${data.slug}`,
    },
    openGraph: {
      title: `${data.title}`,
      description: data.shortDescription,
      url: `/blogs/${data.slug}`,
      images: data.featureImageUrl,
      type: "article",
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
}

export default async function Post({ params }: Props) {
  const { slug } = await params;

  const res = await fetch(
    // We have to provide base url because in server side rendering "/api/blogs/${params.slug}" will fail
    `https://axalingroup.com/api/blogs/${slug}`,
    { next: { revalidate: 86400 } } // This will make sure to refresh the cache daily
  );
  const errorCode = res.ok ? false : 404;

  const data = (await res.json()) as PublicBlogPostDto;

  if (errorCode && typeof errorCode === "number") {
    return <ErrorHandler errorCode={errorCode} />;
  }
  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    image: data.featureImageUrl,
    datePublished: data.createdDate,
    publisher: {
      "@type": "Organization",
      name: "Axalin",
      logo: {
        "@type": "ImageObject",
        url: "https://axalingroup.com/assets/logo_brand.svg",
      },
    },
    description: data.shortDescription,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://axalingroup.com/blogs/${data.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <article>
        <div className="py-16 mx-auto max-w-4xl px-6 pb-16 lg:px-8">
          <div className="flex flex-col items-center pb-16">
            <Link
              href={`/blogs/category/${data.category.category}`}
              className="text-sm font-semibold leading-7 text-[#08549c] hover:text-[#086ac1]"
            >
              {data.category.categoryDisplayName.toUpperCase()}
            </Link>
            <h1 className="mt-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              {data.title}
            </h1>

            <div className="mt-4 flex items-center gap-x-4 text-sm text-gray-900">
              <div className="text-sm">
                {data.writtenBy || "By Axalin Team"}
              </div>
              |
              <time dateTime={data.createdDate}>
                {format(new Date(data.createdDate), "MMMM dd, yyyy")}
              </time>
            </div>

            <div className="relative mt-8 aspect-[16/9] w-full">
              <Image
                className="rounded-md object-cover"
                src={data.featureImageUrl}
                alt={data.title}
                priority={true}
                layout="fill"
              />
            </div>
          </div>
          <div
            className="prose mx-auto max-w-3xl lg:prose-base"
            dangerouslySetInnerHTML={{ __html: data.editorHtmlContent }}
          />
          <div className="mt-16 flex flex-wrap gap-5 text-xs">
            {data.tags.map((tag, idx) => (
              <Link
                key={tag.tag}
                href={`/blogs/tag/${tag.tag}`}
                className="relative w-fit rounded-md bg-[#08549c] hover:bg-[#086ac1] px-3 py-1.5 font-medium text-white"
              >
                {tag.tagDisplayName}
              </Link>
            ))}
          </div>
          <div className="mt-16">
            <hr className="my-8 border-t border-gray-200" />
            <div className="flex flex-col items-start justify-start gap-5 sm:flex-row sm:gap-10 md:px-4">
              <div className="rounded-full bg-gray-300">
                <div className="relative m-5 h-9 w-9 bg-cover bg-no-repeat">
                  <Image
                    src="/assets/logo_brand.svg"
                    alt="Axalin Logo"
                    layout="fill"
                  />
                </div>
              </div>
              <div>
                <div className="mb-3 whitespace-nowrap text-base font-semibold">
                  Axalin Team
                </div>
                <div className="text-sm">
                  Our leadership team brings over five decades of successful
                  implementations and strategic guidance in IT service delivery.
                  This ensures every solution we design is backed by mature
                  process and proven, real-world results.
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
