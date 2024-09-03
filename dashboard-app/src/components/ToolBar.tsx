import { Box } from "@mui/material";
import SearchBar from "./SearchBar";

interface IToolBarProps {
  filterText: string;
  onFilterTextChange: React.Dispatch<React.SetStateAction<string>>;
}

const ToolBar: React.FC<IToolBarProps> = ({
  filterText,
  onFilterTextChange,
}) => {
  return (
    <Box
      my={3}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap={6}
    >
      <h1>Dashboard App</h1>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
      />
    </Box>
  );
};

export default ToolBar;
