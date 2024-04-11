import React, { FC, useEffect, useState } from "react";

import { HStack, Skeleton } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "react-feather";

import PaginationButton from "../PaginationButton";
import { PaginationStateProps } from "../TSTable/Pagination/TSPagination";

type PaginationProps = {
  index: (value: number) => void;
  pageable: { page: number; size: number };
  totalPages?: number;
  isLoading?: boolean;
};

export const Pagination: FC<PaginationProps> = ({
  index,
  pageable,
  totalPages,
  isLoading,
}) => {
  const [pagination, setPagination] = useState<PaginationStateProps>({
    pageIndex: pageable.page,
    pageSize: pageable.size,
  });

  const currentPage = pagination.pageIndex + 1;

  const onPageChange = (
    _event: React.MouseEvent<HTMLButtonElement>,
    pi: number,
    ps: number,
  ) => {
    setPagination({
      pageIndex: pi,
      pageSize: ps,
    });
  };

  useEffect(() => {
    index(pagination.pageIndex);
  }, [pagination]);

  if (isLoading || !totalPages) return <Skeleton />;

  const renderPageButtons = () => {
    const pageButtons = [];

    if (totalPages <= 3) {
      const arr = Array.from({ length: totalPages }, (_, i) => i + 1);

      return arr.map((i) => (
        <PaginationButton
          key={i}
          variant="pagination"
          label={`${i}`}
          onClick={(event) => onPageChange(event, i - 1, pagination.pageSize)}
          isActive={currentPage === i}
        />
      ));
    }

    // Render 1
    pageButtons.push(
      <PaginationButton
        key={1}
        variant="pagination"
        label={currentPage <= 2 ? "1" : "..."}
        onClick={(event) => onPageChange(event, 0, pagination.pageSize)}
        isActive={currentPage === 1}
        isDisabled={currentPage > 2}
      />,
    );

    // Render 2
    pageButtons.push(
      <PaginationButton
        key={2}
        variant="pagination"
        label={
          currentPage <= 2
            ? "2"
            : currentPage >= totalPages - 1
            ? `${totalPages - 1}`
            : `${currentPage}`
        }
        onClick={(event) =>
          onPageChange(
            event,
            currentPage === 1
              ? 1
              : currentPage === totalPages
              ? totalPages - 2
              : currentPage - 1,
            pagination.pageSize,
          )
        }
        isActive={currentPage > 1 && currentPage < totalPages}
        isDisabled={currentPage > totalPages}
      />,
    );

    // Render 3
    pageButtons.push(
      <PaginationButton
        key={3}
        variant="pagination"
        label={currentPage >= totalPages - 1 ? `${totalPages}` : "..."}
        onClick={(event) =>
          onPageChange(event, totalPages - 1, pagination.pageSize)
        }
        isActive={currentPage === totalPages}
        isDisabled={currentPage < totalPages - 1}
      />,
    );

    return pageButtons;
  };

  return (
    <HStack>
      <PaginationButton
        variant="paginationControl"
        label=""
        leftIcon={<ChevronLeft />}
        onClick={(event) => {
          const previousPageIndex = currentPage - 2;
          if (previousPageIndex >= 0) {
            onPageChange(event, previousPageIndex, pagination.pageSize);
          }
        }}
        isDisabled={currentPage === 1}
      />
      {renderPageButtons()}
      <PaginationButton
        variant="paginationControl"
        label=""
        leftIcon={<ChevronRight />}
        onClick={(event) =>
          onPageChange(event, currentPage, pagination.pageSize)
        }
        isDisabled={currentPage === totalPages}
      />
    </HStack>
  );
};
