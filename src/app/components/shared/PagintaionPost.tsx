"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FeatureBlog from "../blog/FeatureBlog";
import CardWithIcon from "./CardWithIcon";
import { PostTypes } from "@/app/types/PostTypes";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

interface PaginationProps {
  allPosts: PostTypes[];
  postsPerPage: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  allPosts,
  postsPerPage,
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    router.push(`?page=${newPage}`, { scroll: false });
  };

  return (
    <div className="container w-full mx-auto pb-22">
      {currentPosts.length > 0 && (
        <FeatureBlog slug={currentPosts[0].slug} post={currentPosts[0]} />
      )}

      <div className="grid gap-6 md:grid-cols-3 mt-12 justify-items-center">
        {currentPosts.slice(1).map((post) => (
          <div className="w-full px-8 mix-w-[388px]" key={post.slug}>
            <CardWithIcon
              slug={post.slug}
              iconSrc={post.iconSrc}
              iconAlt={post.iconAlt}
              iconBgColor={post.iconBgColor}
              iconLabel={post.iconLabel}
              textColor={post.textColor}
              title={post.title}
              bgImg={post.bgImg}
              description={post.description}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center pt-22">
        <Pagination>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={
              currentPage === 1 ? "opacity-50 pointer-events-none" : ""
            }
          />
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    href={`?page=${page}`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
          </PaginationContent>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={
              currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
            }
          />
        </Pagination>
      </div>
    </div>
  );
};

export default PaginationComponent;
