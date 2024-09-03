import { TextField } from "@mui/material";

interface ISearchBarProps {
  filterText: string;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
}

const ALPHABETIC_REGEX = /^[a-zA-Z]+$/;

const SearchBar: React.FC<ISearchBarProps> = ({
  filterText,
  onFilterTextChange,
}) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      label="Search"
      value={filterText}
      onChange={(e) => {
        const value = e.target.value;
        if (value !== "" && !ALPHABETIC_REGEX.test(value)) {
          alert("Please enter only alphabetic characters.");
          return;
        }
        onFilterTextChange(e.target.value);
      }}
    />
  );
};

export default SearchBar;
