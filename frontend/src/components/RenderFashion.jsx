import { useEffect, useState } from "react";
import axios from 'axios';
import OneProduct from "./OneProduct";

export default function RenderFashion(){
    const [fashionProducts, setFashionProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/category/fashion')
        .then((res) => {
            setFashionProducts(res.data.products);
        })
    },[])
    console.log(fashionProducts)
    return <div className="grid grid-cols-5">
        {fashionProducts.map((one) => {
            return <OneProduct oneProduct={one}/>
        })}
    </div>
}