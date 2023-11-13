import { HeaderGroup, Table } from "@tanstack/react-table";

import { theme } from "../../theme";

export const tableStyle = {
  minWidth: "870px",
  tableLayout: "fixed",

  th: {
    "&:last-of-type": {
      width: "72px",
    },
  },
};

export const tableHeadStyle = (table: Table<any>) => {
  return {
    th: {
      "&:first-of-type": {
        paddingLeft: "2rem !important",
        width: table
          .getHeaderGroups()
          .find(
            (headerGroup: HeaderGroup<any>) =>
              headerGroup.headers[0].id === "actions",
          )
          ? "64px"
          : "auto",
      },
      background: theme.palette.secondary.header,
      borderY: `1px solid ${theme.palette.secondary.light}`,
    },
  };
};
export const tableRowStyle = {
  transition: "ease-in 0.15s",

  "&:nth-of-type(even)": {
    backgroundColor: "rgba(255, 255, 255, 0.025)",
  },
};
