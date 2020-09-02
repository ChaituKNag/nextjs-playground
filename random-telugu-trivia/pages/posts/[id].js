import { useRouter } from "next/router";

const Post = () => {
  const { query } = useRouter();

  return <h1>The page id is {query.id}</h1>;
};
export default Post;
