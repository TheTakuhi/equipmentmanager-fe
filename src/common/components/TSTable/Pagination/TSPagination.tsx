import { Dispatch, FC, SetStateAction, useEffect } from "react";

import {
  Divider,
  Grid,
  GridItem,
  Select,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "react-feather";

import { Pageable } from "../../../models/utils/Pageable";
import PaginationButton from "../../PaginationButton";

export type PaginationStateProps = {
  pageSize: number;
  pageIndex: number;
};

interface TSPaginationProps {
  pageable?: Pageable<any>;
  paginationProps: PaginationStateProps;
  paginationStateCallback: (state: PaginationStateProps) => void;
  setPaginationProps: Dispatch<SetStateAction<PaginationStateProps>>;
  isLoading: boolean;
  theme: Record<string, any>;
}

const TSPagination: FC<TSPaginationProps> = ({
  pageable,
  paginationStateCallback,
  paginationProps,
  setPaginationProps,
  isLoading,
  theme,
}) => {
  const onPageChange = (
    // @ts-ignore
    event: React.MouseEvent<HTMLButtonElement>,
    pi: number,
    ps: number,
  ) => {
    setPaginationProps({
      pageIndex: pi,
      pageSize: ps,
    });
  };
  const currentPage = paginationProps.pageIndex + 1;
  const totalPages = pageable?.totalPages;

  useEffect(
    () =>
      paginationStateCallback({
        pageSize: paginationProps.pageSize,
        pageIndex: paginationProps.pageIndex,
      }),
    [paginationProps.pageSize, paginationProps.pageIndex],
  );

  if (
    isLoading ||
    (pageable &&
      pageable.totalElements < paginationProps.pageSize &&
      paginationProps.pageIndex !== 0) ||
    totalPages === undefined
  )
    return <Skeleton />;

  const renderPageButtons = () => {
    const pageButtons = [];

    if (totalPages <= 5) {
      const arr = Array.from({ length: totalPages }, (_, index) => index + 1);

      return arr.map((index) => (
        <PaginationButton
          key={index}
          variant="pagination"
          label={`${index}`}
          onClick={(event) =>
            onPageChange(event, index - 1, paginationProps.pageSize)
          }
          isActive={currentPage === index}
        />
      ));
    }

    // Render 1
    pageButtons.push(
      <PaginationButton
        key={1}
        variant="pagination"
        label="1"
        onClick={(event) => onPageChange(event, 0, paginationProps.pageSize)}
        isActive={currentPage === 1}
      />,
    );

    // Render 2
    pageButtons.push(
      <PaginationButton
        key={2}
        variant="pagination"
        label={currentPage <= 3 ? "2" : "..."}
        onClick={(event) => onPageChange(event, 1, paginationProps.pageSize)}
        isActive={currentPage === 2}
        isDisabled={currentPage > 3}
      />,
    );

    // Render 3
    pageButtons.push(
      <PaginationButton
        key={3}
        variant="pagination"
        label={
          currentPage <= 3
            ? "3"
            : currentPage >= totalPages - 2
            ? `${totalPages - 2}`
            : `${currentPage}`
        }
        onClick={(event) =>
          onPageChange(
            event,
            currentPage <= 3
              ? 2
              : currentPage >= totalPages - 2
              ? totalPages - 3
              : currentPage - 1,
            paginationProps.pageSize,
          )
        }
        isActive={currentPage > 2 && currentPage < totalPages - 1}
      />,
    );

    // Render 4
    pageButtons.push(
      <PaginationButton
        key={4}
        variant="pagination"
        label={currentPage >= totalPages - 2 ? `${totalPages - 1}` : "..."}
        onClick={(event) =>
          onPageChange(event, totalPages - 2, paginationProps.pageSize)
        }
        isActive={currentPage === totalPages - 1}
        isDisabled={currentPage < totalPages - 2}
      />,
    );

    // Render 5
    pageButtons.push(
      <PaginationButton
        key={totalPages}
        variant="pagination"
        label={totalPages.toString()}
        onClick={(event) =>
          onPageChange(event, totalPages - 1, paginationProps.pageSize)
        }
        isActive={currentPage === totalPages}
      />,
    );

    return pageButtons;
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <GridItem
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Text
          sx={{
            fontSize: theme.components.Text.sizes.body2.fontSize,
            whiteSpace: "nowrap",
          }}
        >
          Entries per page
        </Text>
        <Select
          variant="paginationSelect"
          value={paginationProps.pageSize}
          onChange={(e) => {
            setPaginationProps({
              pageIndex: paginationProps.pageIndex,
              pageSize: Number(e.target.value),
            });
          }}
        >
          {[15, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
      </GridItem>
      <GridItem
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Text sx={{ fontSize: theme.components.Text.sizes.body2.fontSize }}>
          Showing 1 to {paginationProps.pageSize} of {pageable?.totalElements}{" "}
          entries
        </Text>
        <Divider
          orientation="vertical"
          sx={{ border: "1px solid #FFFFFF", height: "1.688rem" }}
        />
        <PaginationButton
          variant="paginationControl"
          label=""
          leftIcon={<ChevronLeft />}
          onClick={(event) => {
            const previousPageIndex = currentPage - 2;
            if (previousPageIndex >= 0) {
              onPageChange(event, previousPageIndex, paginationProps.pageSize);
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
            onPageChange(event, currentPage, paginationProps.pageSize)
          }
          isDisabled={currentPage === totalPages}
        />
      </GridItem>
    </Grid>
  );
};

export default TSPagination;
