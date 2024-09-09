import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useCustomFetchHookForOneBlog from "../hooks/useCustomFetchHookForOneBlog";

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useCustomFetchHookForOneBlog(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="25%"
    >
      <Typography variant="h1">Id: {id}</Typography>
      {error && <Typography variant="h6">{error}</Typography>}
      {isPending && <Typography variant="h6">Loading...</Typography>}
      {!error && !isPending && (
        <>
          <Typography variant="h4">User Id: {blog?.userId}</Typography>
          <Typography variant="h5">Title: {blog?.title}</Typography>
          <Typography variant="h6">Body: {blog?.body}</Typography>
        </>
      )}
    </Box>
  );
};

export default BlogDetail;
