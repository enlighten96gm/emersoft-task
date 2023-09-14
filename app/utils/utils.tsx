import { PostType } from "@/lib/data";

export const paginationHelper = (currentPage: number, allPosts: PostType[]) => {
  const postsAmountPerPage = 3;
  const totalPages = Math.ceil(allPosts.length / 3);
  const startIndex = (currentPage - 1) * postsAmountPerPage;
  const endIndex = currentPage * postsAmountPerPage;
  const posts = allPosts.slice(startIndex, endIndex);
  return { posts, currentPage, totalPages };
};
