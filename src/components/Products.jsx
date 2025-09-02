import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`)
      .then((res) => setProducts(res.data.products));
  }, [page]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <Link key={p.id} to={`/products/${p.id}`} className="border p-4 rounded shadow hover:bg-gray-100">
            <h2 className="font-bold">{p.title}</h2>
            <p>${p.price}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
          Prev
        </button>
        <button onClick={() => setPage(page + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
}