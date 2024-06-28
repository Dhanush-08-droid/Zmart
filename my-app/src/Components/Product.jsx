import React, { useEffect, useState } from 'react';
import Productcard from './Productcard';
import Topbar from './Topbar';
import Searchbar from './Searchbar';
function Product() {
    const [ApiRes, SetApiRes] = useState([]);
    const [list, setList] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [categories, setCategory] = useState('');

    useEffect(() => {
        fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
            .then((res) => res.json())
            .then((json) => {
                SetApiRes(json);
                console.log(json);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    useEffect(() => {
        const categoriesSet = new Set();
        ApiRes.forEach(product => categoriesSet.add(product.category));
        const uniqueCategoriesArray = Array.from(categoriesSet);
        setUniqueCategories(uniqueCategoriesArray);
    }, [ApiRes]);

    useEffect(() => {
        if (categories === "") {
            setList(ApiRes);
        } else {
            const res = ApiRes.filter(obj => obj.category === categories);
            setList(res);
        }
    }, [categories, ApiRes]);

    const handleSearch = (searchTerm) => {
        const filteredList = ApiRes.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setList(filteredList);
    };
    return (
        <>
            <Topbar category={uniqueCategories} setcategory={setCategory} />
            <Searchbar handleSearch={handleSearch} />
            <div className="container">
                {list.map((product) => (
                    <Productcard key={product.id} product={product} categories={categories} />
                ))}
            </div>
        </>
    );
}
export default Product;