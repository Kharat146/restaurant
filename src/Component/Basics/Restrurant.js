import React, { useState } from 'react'
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from './MenuCard';

export const Restrurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);

    const filterItem = (category) => {
        const updateListe = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(updateListe);
    }
    return (
        <div>

            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu)}>all</button>
                </div>
            </nav>

            <MenuCard menuData={menuData} />
        </div>
    )
}
