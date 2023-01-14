import CategoriesPreview from '../categories-preview/categories-preview.component';

import Category from '../category/category.component';

import { Route, Routes } from 'react-router-dom';

import './shop.styles.scss'



const Shop = () => {

    return (

        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=':category' element={<Category />}></Route>
        </Routes>

    )

}


export default Shop;