import { useParams } from "react-router-dom";
import apiRes from "../../Data/posts.json";

const posts = apiRes.posts;
export default function PostDetails() {
  const { slug } = useParams();

  const postDetails = posts.find((p) => p.slug == slug);
  return <>
  
  <h2>{postDetails.author.name}</h2>
  <h2>{postDetails.title}</h2>
  <h2>{postDetails.date}</h2>
  </>;
}
