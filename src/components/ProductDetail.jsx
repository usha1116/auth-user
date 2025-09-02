    import { useParams } from "react-router-dom";
    import { useState, useEffect } from "react";
    import axios from "axios";

    export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => setProduct(res.data));
    }, [id]);

    if (!product) return <p className="p-6">Loading...</p>;

    return (
        <div className="p-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="mt-2">{product.description}</p>
        <p className="mt-2 font-bold">${product.price}</p>
        <img src={product.thumbnail} alt={product.title} className="mt-4 w-64" />
        </div>
    );
    }