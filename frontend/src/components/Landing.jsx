import Categries from "./Catergories";
import NavBar from "./navBar/NavBar";

export default function Landing(){
    const categories = [
        {
          url: "https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
          catName: "Grocery",
        },
        {
          url: "https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
          catName: "Mobiles",
        },
        {
          url: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
          catName: "Fashion",
        },
        {
          url: "https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
          catName: "Electronics",
        },
        {
          url: "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
          catName: "Home & Furniture",
        },
        {
          url: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
          catName: "Appliances",
        },
        {
          url: "https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
          catName: "Travel",
        },
        {
          url: "https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
          catName: "Beauty Toys & More",
        },
        {
          url: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
          catName: "Two Wheelers",
        },
      ];
    return <>
        <NavBar/>
        <Categries categories={categories}/>
    </>
}