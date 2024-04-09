import { useForm } from "react-hook-form";

export type SearchQuery = { query: string };

export type SearchFormProps = {
  defaultValues?: SearchQuery;
};

export const createDefaultValues = (defs?: SearchQuery): SearchQuery => ({
  query: "",
  ...defs,
});

export function useSearchForm({ defaultValues }: SearchFormProps) {
  return useForm<SearchQuery>({
    defaultValues: createDefaultValues(defaultValues),
  });
}
