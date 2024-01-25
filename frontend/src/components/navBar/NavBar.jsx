import { CgProfile } from "react-icons/cg";
import Flipkart_logo from "./Flipkart_logo.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
// import "./NavBar.css";

export default function NavBar(){
    return <div className="flex justify-around border border-solid border-blue-500 p-2 rounded-md">
        {/* <img src={Flipkart_logo} alt="flipkart-logo" /> */}
        <h1 className="text-2xl font-bold mt-3 underline text-blue-700">Dailykart.com</h1>
        <input type="text" placeholder="Search for products brands and more" className="w-2/5 h-12 border-2 rounded-md p-2"/>
        <button className="flex justify-between items-center w-24 rounded p-3 text-black hover:bg-onHover hover:text-fontColor"><CgProfile className="h-6 w-20"/>Login<IoIosArrowDown/></button>
        <button className="flex justify-evenly items-center w-20 text-black [-3 rounded hover:bg-onHover hover:text-fontColor"><BsCart3 />Cart</button>
        <button className="text-black rounded hover:bg-onHover hover:text-fontColor p-3">Admin Add Products</button>
        <button className="text-black rounded hover:bg-onHover hover:text-fontColor p-3"><BsThreeDotsVertical /></button>
    </div>
}