import { FC, useEffect, useState } from "react";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "react-feather";
import { FormProvider } from "react-hook-form";

import { SearchQuery, useSearchForm } from "./hooks/useSearchForm";

export type SearchSubmitHandler = (value: SearchQuery) => void;

type SimpleSearchProps = {
  route: string;
  useCallback?: boolean;
  callback?: (value: string) => void;
};

export const SimpleSearch: FC<SimpleSearchProps> = ({
  route,
  useCallback,
  callback,
}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate({ from: route });

  const form = useSearchForm({ defaultValues: { query } });

  const handleSubmit: SearchSubmitHandler = (value) => {
    if (useCallback && callback) callback(value.query);
    else
      navigate({
        search: (prev) => ({
          ...prev,
          query: value.query,
        }),
      });
  };

  useEffect(() => {
    form.reset({ query });
  }, [query]);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" >
            <Search size="1.125em" color="#7A7A80" />
          </InputLeftElement>
          <Input
            sx={{ width: 250, paddingLeft: "2.25rem" }}
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>
        <input type="submit" hidden />
      </form>
    </FormProvider>
  );
};
