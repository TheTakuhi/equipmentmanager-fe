import { FC, useEffect, useState } from "react";

import { Box, Input, useTheme } from "@chakra-ui/react";
import { Select, SingleValue } from "chakra-react-select";
import { Search } from "react-feather";
import { FormProvider } from "react-hook-form";

import {
  TableSearchQuery,
  useTableSearchForm,
} from "../../forms/useTableSearchForm/useTableSearchForm";
import { SelectOption } from "../../models/utils/SelectOption";

export type TableSearchSubmitHandler = (values: TableSearchQuery) => void;

interface SearchBarProps {
  options: SelectOption[];
  handleSubmit: TableSearchSubmitHandler;
}

const SearchBar: FC<SearchBarProps> = ({ options, handleSubmit }) => {
  const theme = useTheme();

  const [input, setInput] = useState<SingleValue<SelectOption>>(options[0]);

  const [searchQuery, setSearchQuery] = useState<TableSearchQuery>({
    param: options[0].value,
    value: "",
  });

  const form = useTableSearchForm({
    defaultValues: { param: searchQuery.param, value: searchQuery.value },
  });

  const handleInputChange = (newValue: SingleValue<SelectOption>) => {
    setInput(newValue);
    setSearchQuery({
      param: newValue ? newValue.value : searchQuery.param,
      value: searchQuery.value,
    });
  };

  useEffect(() => {
    form.reset({ param: searchQuery.param, value: searchQuery.value });
  }, [searchQuery]);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Search
            size="1.125em"
            color={theme.palette.text.disabled}
            style={{
              zIndex: 1,
              position: "absolute",
              top: "0.6rem",
              left: "1rem",
            }}
          />
          <Select
            name="searchBy"
            options={options}
            value={input}
            onChange={(newValue: SingleValue<SelectOption>, _) =>
              handleInputChange(newValue)
            }
            useBasicStyles
            variant="sortFilter"
            chakraStyles={{
              control: (provided) => ({
                ...provided,
                h: "auto",
                height: "auto",
                minH: "36px",
                minHeight: "36px",
                bg: theme.palette.secondary.header,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }),
              inputContainer: (provided) => ({
                ...provided,
                minWidth: "120px",
              }),
              input: (provided) => ({
                ...provided,
                marginLeft: "1.7rem",
              }),
              singleValue: (provided) => ({
                ...provided,
                marginLeft: "1.75rem",
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: theme.palette.text.disabled,
              }),
              menuList: (provided) => ({
                ...provided,
                width: "100%",
                padding: "0.5rem 0",
                gap: "0.25rem",
              }),
              option: (provided) => ({
                ...provided,
                fontSize: "0.875em",
                margin: 0,
                padding: "0.3rem 1rem",
                _selected: {
                  background: theme.palette.secondary.light,
                },
              }),
            }}
          />
        </Box>
        <Input
          name="searchValue"
          variant="searchBar"
          placeholder="Search..."
          onChange={(e) =>
            setSearchQuery({ param: searchQuery.param, value: e.target.value })
          }
        />
        <input type="submit" hidden />
      </form>
    </FormProvider>
  );
};

export default SearchBar;
