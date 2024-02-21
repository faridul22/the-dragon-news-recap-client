import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LeftNewsCard from "./LeftNewsCard/LeftNewsCard";



const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://the-news-dregon-recap-server.vercel.app/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                console.log(data)
            })
            .catch(error => { console.log(error) })
    }, [])

    return (
        <div>
            <h4>All Categories</h4>
            <div className="ps-4">
                {
                    categories.map(category => <p
                        key={category.id}
                    ><Link to={`/category/${category.id}`} className="text-black text-decoration-none">{category.name}</Link></p>)
                }
            </div>
            <LeftNewsCard></LeftNewsCard>
        </div>
    );
};

export default LeftNav;