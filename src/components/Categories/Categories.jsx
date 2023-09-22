import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../../../data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="text-center max-w-7xl mx-auto my-16">
      <h2 className="text-5xl font-extrabold">Job Category List</h2>
      <p className="py-4 max-w-5xl mx-auto text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex flex-wrap justify-between gap-6 my-10">
        {Categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
