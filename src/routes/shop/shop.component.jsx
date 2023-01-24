import CategoriesPreview from '../categories-preview/categories-preview.component';

import Category from '../category/category.component';

import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';

import { fetchCategoriesAsync } from '../../store/categories/categories.action';
import { useDispatch } from 'react-redux';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchCategoriesAsync());

    }, [])

    return (

        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=':category' element={<Category />}></Route>
        </Routes>

    )

}


export default Shop;