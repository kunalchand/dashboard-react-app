import { useState } from "react";
import ToolBar from "../components/ToolBar";
import useCustomFetchHook from "../hooks/useCustomFetchHook";
import Table from "./Table";

const BlogsTable: React.FC = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useCustomFetchHook("https://jsonplaceholder.typicode.com/posts");
  const [filterText, setFilterText] = useState<string>("");

  return (
    <>
      <ToolBar filterText={filterText} onFilterTextChange={setFilterText} />
      <Table
        blogs={blogs}
        filterText={filterText}
        isPending={isPending}
        error={error}
      />
    </>
  );
};

export default BlogsTable;
