export interface PublicBlogPostDto {
  title: string;
  slug: string;
  featureImageUrl: string;
  tags: {
    tag: string;
    tagDisplayName: string;
  }[];
  category: {
    category: string;
    categoryDisplayName: string;
  };
  shortDescription: string;
  writtenBy: string;
  editorHtmlContent: string;
  /** Format: date-time */
  createdDate: string;
}
export interface PublicBlogPostSlugDto {
  slug: string;
  /** Format: date-time */
  createdDate: string;
}
export interface ResponseWithPaginationPublicBlogPostDto {
  entries?: PublicBlogPostDto[];
  /** Format: int32 */
  currentPage?: number;
  /** Format: int64 */
  totalEntries?: number;
  /** Format: int32 */
  totalPages?: number;
}
export interface ResponseWithPaginationPublicBlogPostSlugDto {
  entries?: PublicBlogPostSlugDto[];
  /** Format: int32 */
  currentPage?: number;
  /** Format: int64 */
  totalEntries?: number;
  /** Format: int32 */
  totalPages?: number;
}
