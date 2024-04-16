import styled from "@emotion/styled";
import { Link, LinkComponent } from "@tanstack/react-router";

export const StyledLink = styled(Link)<LinkComponent>(({ theme }) => ({
  transition: "ease-in 0.1s",
  "&:hover": {
    color: theme.palette.primary.light,
    textDecoration: "underline",
  },
}));
