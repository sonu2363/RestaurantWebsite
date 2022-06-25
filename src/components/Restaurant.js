import React, { useState } from 'react';
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList=[
    ...new Set(
        Menu.map((curElem)=>{
           return curElem.category;

        })
    ),
    'All',
];
console.log(uniqueList);

const Restaurant = () => {
    const [MenuData,setMenuData]=useState(Menu);
    const [MenuList,setMenuList]=useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
          setMenuData(Menu);
          return;
        }
    
        const updatedList = Menu.filter((curElem) => {
          return curElem.category === category;
        });
    
        setMenuData(updatedList);
      };
  return (
   <>
   <Navbar filterItem={filterItem} menuList={MenuList} />
   <MenuCard menuData={MenuData}/>
   </>
  )
}

export default Restaurant