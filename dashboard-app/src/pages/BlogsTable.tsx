import { useEffect, useState } from "react";
import Table from "../components/Table";
import ToolBar from "../components/ToolBar";
import { BlogObject } from "../types/blog";

const BlogsTable: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogObject[]>([]);
  const [filterText, setFilterText] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setBlogs(json))
        .catch((error) => console.error("Error fetching data:", error));
    }, 1000);
  }, []);

  return (
    <>
      <ToolBar filterText={filterText} onFilterTextChange={setFilterText} />
      <Table blogs={blogs} filterText={filterText} />
    </>
  );
};

export default BlogsTable;
