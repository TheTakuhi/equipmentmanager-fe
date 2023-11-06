import { PropsConfigs } from "chakra-dayzed-datepicker/dist/utils/commonTypes";

import { theme } from "../../../theme";

export const propsConfigs: PropsConfigs = {
  inputProps: {
    cursor: "pointer",
    border: "1px solid #313033",
    _hover: {
      border: "1px solid #4B4B4BFF",
    },
    _focusVisible: {
      border: "1px solid #4B4B4BFF",
    },
  },
  dayOfMonthBtnProps: {
    todayBtnProps: {
      border: "1px solid #b02c15",
    },
    defaultBtnProps: {
      m: "0.1875rem 0.125rem",
      fontWeight: "normal",
      fontSize: theme.components.Text.sizes.body1.fontSize,
      _hover: {
        background: theme.palette.primary.dark,
        borderRadius: theme.borderRadius.element,
      },
      color: theme.palette.text.primary,
    },
    selectedBtnProps: {
      background: theme.palette.primary.main,
      borderRadius: theme.borderRadius.element,
    },
  },
  dateNavBtnProps: {
    color: theme.palette.text.primary,
    background: theme.palette.secondary.main,
    px: "1rem",
    _hover: {
      color: theme.palette.primary.main,
    },
  },
  popoverCompProps: {
    popoverContentProps: {
      background: theme.palette.secondary.dark,
      color: theme.palette.text.primary,
      border: "1px solid #313033",
    },
  },
  calendarPanelProps: {
    contentProps: {
      borderWidth: 0,
    },
    bodyProps: {
      pt: "0.75rem",
    },
    dividerProps: {
      display: "none",
    },
    headerProps: {
      sx: {
        ".chakra-heading": {
          px: "1.25rem",
        },
      },
    },
  },
  weekdayLabelProps: {
    fontWeight: "normal",
  },
  dateHeadingProps: {
    fontWeight: "semibold",
  },
};
