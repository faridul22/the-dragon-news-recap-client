import { useEffect } from "react";
import { useState } from "react";


const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
            .catch(error => { console.log(error) })
    }, [])

    return (
        <div>
            <h3>This is Left nav</h3>
        </div>
    );
};

export default LeftNav;