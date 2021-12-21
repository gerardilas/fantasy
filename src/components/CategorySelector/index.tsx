import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { genders } from "../../data/products";

const CategorySelector = () => {
    const { category } = useParams();
    return (
        <div className={"fixed"}>
            <p className={"bold font-20"}>Categorias</p>
            <div className={"padding-updown-10px"}>
                <div>
                    {Object.values(genders).map((gender) => {
                        const { title, categories } = gender;
                        return (
                            <div>
                                <p className={"font-15 bold"}>{title}</p>
                                {Object.values(categories).map((cat) => {
                                    const lower = cat.title.toLowerCase()
                                    return <Link to={lower} className={`${category === lower ? "contrast-txt-bg" : "main-bg"}  margin-updown-5px round flex center-vertical padding-side-20px`}>{cat.title}</Link>;
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CategorySelector;
