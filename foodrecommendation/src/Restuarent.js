import React, { useEffect, useState } from 'react'

import "./style.css"
import Menu from"./menuApi.js"
import {Menucard} from "./menucard"
import { fakeFetch } from './menuApi.js'


const Resturant = () => {

 const [menuData, setMenuData]=useState([]);
 const [originalData,setOriginaData]=useState([])

 const getData=async()=>{
  fakeFetch("https://example.com/api/products").then(data=>{
    setMenuData(data.data.Menu)
    setOriginaData(data.data.Menu)
  })
 }

 useEffect=(()=>{
  getData()
 },[])

 const filterItem=(product)=>{
  const updatedList=originalData.filter((element)=>{
   return element.category===product;
    });
    setMenuData(updatedList);
 }

  return (<>
  <nav className="navbar">
    <div className="btn-group">
    <button className="btn-group__item" onClick={
    ()=>getData()}>All</button>
  <button className="btn-group__item" onClick={()=> filterItem("breakfast")}>Breakfast</button>

  <button className="btn-group__item" onClick={()=> filterItem("lunch")}> Lunch</button>

  <button className="btn-group__item"onClick={()=> filterItem("evening")}>Evening</button>

  <button className="btn-group__item"onClick={()=> filterItem("dinner")}>Dinner</button>



    </div>
  </nav>
  <Menucard currentData={menuData} />
</> 
);
};

export default Resturant;