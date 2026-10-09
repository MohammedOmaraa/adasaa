export default function CardPost({ data }) {
  const {
    id,
    title,
    image,
    category,
    author: { name },
  } = data;
  
  return (
    <>
      <div className="border border-gray-200 rounded-3xl">
        <div className="card-photo relative">
          <img src={image} className="" alt="" />
          <div className=" absolute top-7 right-7 bg-amber-600 text-white">
            {category}
          </div>
        </div>
        <div className="card-info">
          <h4>{id}</h4>
          <p>{title}</p>
          <p>author : {name}</p>
        </div>
      </div>
    </>
  );
}
