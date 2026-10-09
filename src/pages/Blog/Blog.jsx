import { useState } from "react";
import CardPost from "../../components/CardPost/CardPost";
import apiRes from "../../Data/posts.json";
import { Link } from "react-router-dom";

const posts = apiRes.posts;
const categories = apiRes.categories;
export default function Blog() {
  const [category, setcategory] = useState("");

  const filterdPosts =
    category == "" ? posts : posts.filter((p) => p.category == category);

  const [currentPage, setcurrentPage] = useState(3);
  const postPerPage = 6;

  const totalPages = Math.ceil(filterdPosts.length / postPerPage);

  const start = (currentPage - 1) * postPerPage;

  const end = start + postPerPage;

  const paginatedPosts = filterdPosts.slice(start, end);

  return (
    <>
      <ul className="flex justify-center gap-4">
        <li
          className="rounded-2xl p-2 bg-orange-300 my-7 cursor-pointer"
          onClick={() => {
            setcategory("");
            setcurrentPage(1)
          }}
        >
          جميع المقالات
        </li>
        {categories.map((cat) => (
          <li
            className="rounded-2xl p-2 bg-orange-300 my-7 cursor-pointer"
            onClick={() => {
              setcategory(cat.name);
              setcurrentPage(1)
            }}
          >
            {cat.name}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-3 gap-5 px-20">
        {paginatedPosts.map((p) => (
          <Link to={`/blog/${p.slug}`}><CardPost data={p} /></Link>
        ))}
      </div>

      <ul className=" flex justify-center gap-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <li className={`${i+1 == currentPage? 'bg-orange-600' : 'bg-orange-300'} rounded-xl size-9 flex justify-center items-center`} onClick={()=>{setcurrentPage(i+1)}}>
            {i +1}
          </li>
        ))}
       
      </ul>
    </>
  );
}
