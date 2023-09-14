"use client";

import useFetch from "@/app/hooks/useFetch";
import { PostType } from "@/lib/data";
import { MouseEvent, useState } from "react";
import Button from "../button";
import Categories from "../categories";
import Loader from "../loader";
import Post from "./post";

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const { data, loading, error } = useFetch(
    "posts",
    currentPage,
    title,
    category
  );

  const handleClickButtons = (e: MouseEvent<HTMLDivElement>) => {
    const { innerText } = e.target as HTMLDivElement;
    if (data && "totalPages" in data) {
      if (innerText === "Next" && currentPage < data.totalPages) {
        setCurrentPage((currentPage) => (currentPage += 1));
      } else if (innerText === "Prev" && currentPage > 1) {
        setCurrentPage((currentPage) => (currentPage -= 1));
      }
    }
  };

  const handleSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterByCategory = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLDivElement;
    setCategory(id);
    setCurrentPage(1);
  };

  if (error) {
    return <div>{error}</div>;
  }

  const renderPosts = () => {
    if (data && "posts" in data) {
      return data.posts.map(({ title, slug, excerpt, imageUrl }: PostType) => {
        return (
          <Post
            title={title}
            slug={slug}
            excerpt={excerpt}
            imageUrl={imageUrl}
          />
        );
      });
    }
  };

  return (
    <div>
      <div>
        <span className="mr-4">Search:</span>
        <input
          className="mt-4 p-3 md:w-[357px] text-gray-900 border border-gray-300 focus:outline-none rounded-lg bg-gray-50 sm:text-md w-[300px]"
          onChange={handleSearchTitle}
          value={title}
        />
      </div>

      <Categories category={category} onClick={handleFilterByCategory} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-6 flex gap-4 justify-center flex-col md:flex-row md:items-center">
            {renderPosts()}
          </div>
          <div className="flex justify-center mt-8 gap-8">
            <Button onClick={handleClickButtons}>Prev</Button>
            <Button onClick={handleClickButtons}>Next</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
