import axios from 'axios';
import RenderFashion from './RenderFashion';

import { Route, useNavigate } from 'react-router-dom';

export default function Categries({ categories }) {
  const navigate = useNavigate();
  function handleCategoryClick(e){
    if(e.target.innerHTML == 'Fashion'){
        navigate('/category/fashion');
    }
  }
  return (
    <div className="flex justify-evenly border border-solid border-red-900">
      {categories.map((oneCate, index) => {
        return (
          <div key={index} onClick={handleCategoryClick} className="text-center cursor-pointer" >
              <img src={oneCate.url} alt="image" />
              <h3>{oneCate.catName}</h3>
          </div>
        );
      })}
    </div>
  );
}
