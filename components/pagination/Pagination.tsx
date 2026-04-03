import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface Props {
  totalPage: number;
  page: number;
  numberOPageSiblings: number;
  tag?: string;
  category?: string;
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

// There will 4 cases of pagination numbering
// Case 1:- There will no ... if totalPages are less than 6
// Case 2:- Display ... on right side of numbers array (before last page) in case current page lies b/w range of first 5 pages
// Case 3:- Display ... on left side of numbers array (after first page) in case current page lies b/w range of last 5 pages
// Case 3:- Display ... on both sides of numbers array (after first page and before last page) in case current page lies b/w mid range 3 middle number pages

const Pagination = ({ totalPage, page, numberOPageSiblings, tag, category }: Props) => {
  const paginationPageRange = (totalPage: number, page: number, numberOPageSiblings: number) => {
    // Below condition will handle case if totalPages are less than 6 and In this case we simply display page numbers from (1 to totalPages)
    if (5 + numberOPageSiblings >= totalPage) {
      return Array.from({ length: totalPage }, (_, index) => index + 1);
    }

    // For Dots in left side
    // This value will be the index of current page if(page is > 2) else below condition will be false and we don't display dots on lef side
    let leftSiblingIndex = Math.max(page - numberOPageSiblings, 1); // if leftSiblingIndex is > 2 then page no. will be > 3 an this will be true and we display ... on left side
    // if leftSiblingIndex is > 2 then page no. will be > 3 an this will be true and we display ... on left side
    let showLeftDots = leftSiblingIndex > 2;

    // For Dots in right side
    let rightSiblingIndex = Math.min(page + numberOPageSiblings, totalPage);
    let showRightDots = rightSiblingIndex < totalPage - 2;

    if (!showLeftDots && showRightDots) {
      // This block will excute when we want to display `...` on right side (before last page)
      // Note:- (We can increase no. of pages to dislay by increasing numberOPageSiblings variable)
      let leftItemsCount = 3 + 2 * numberOPageSiblings; // No. of page will be 5 if siblings is 1 before right ...
      let pageNumberArrayForLeftSide = Array.from(
        { length: leftItemsCount },
        (_, index) => index + 1
      );
      return [...pageNumberArrayForLeftSide, ' ...', totalPage];
    } else if (showLeftDots && !showRightDots) {
      // This block will excute when we want to display `...` on left side (after first page)
      let rightItemsCount = 3 + 2 * numberOPageSiblings; // No. of page will be 5 if siblings is 1 after right ...

      let pageNumberArrayForRightSide = Array.from(
        { length: totalPage - (totalPage - rightItemsCount + 1) + 1 },
        (_, index) => index + (totalPage - rightItemsCount + 1)
      );
      return [1, '... ', ...pageNumberArrayForRightSide];
    } else {
      // This block will excute when we want to display `...` on both left & right side (right one - before last page and left one- after first page)
      let middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, index) => index + leftSiblingIndex
      );
      return [1, '... ', ...middleRange, ' ...', totalPage];
    }
  };
  let pageNumbers = paginationPageRange(totalPage, page, numberOPageSiblings);

  const getAPIRouteLink = (page: number, tag?: string, category?: string) => {
    if (tag) {
      return `/blogs/tag/${tag}?page=${page}`;
    }
    if (category) {
      return `/blogs/category/${category}?page=${page}`;
    }

    return `?page=${page}`;
  };

  return (
    <nav className="mt-16 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <Link href={getAPIRouteLink(page - 1, tag, category)}>
          <button
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-brand-600 hover:border-brand-700 hover:text-brand-500 disabled:cursor-not-allowed disabled:text-gray-500  disabled:hover:border-gray-300"
            disabled={page === 1}
          >
            <ArrowLeftIcon className="mr-3 h-5 w-5 " aria-hidden="true" />
            Previous
          </button>
        </Link>
      </div>
      {pageNumbers.map((pageNumber) =>
        pageNumber === '... ' || pageNumber === ' ...' ? (
          <span
            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-600"
            key={pageNumber}
          >
            ...
          </span>
        ) : (
          <Link href={getAPIRouteLink(Number(pageNumber), tag, category)} key={pageNumber}>
            <button
              className={classNames(
                pageNumber === page
                  ? 'border-brand-700 text-brand-600 hover:border-brand-700 hover:text-brand-500'
                  : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700',
                'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium'
              )}
            >
              {pageNumber}
            </button>
          </Link>
        )
      )}

      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Link href={getAPIRouteLink(page + 1, tag, category)}>
          <button
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-brand-600 hover:border-brand-700 hover:text-brand-500 disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:border-gray-300"
            disabled={page === totalPage || totalPage === 0}
          >
            Next
            <ArrowRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Pagination;
