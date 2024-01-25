import { FaRupeeSign } from "react-icons/fa";

export default function OneProduct({oneProduct}){
    return <div className="w-56 h-68 p-6 m-1 shadow-xl">
        <img src={oneProduct.image} alt="one product" className="w-48 h-56"/>
        <h2 className="fondt-bold truncate ...">{oneProduct.title}</h2>
        <p className="truncate ...">{oneProduct.description}</p>
        <h2 className="text-bold flex justify-center items-center text-lg p-1 m-1 "><FaRupeeSign className="text-lg"/>{oneProduct.price * 80}</h2>
    </div>
}