import CategoriesPreview from '../categories-preview/categories-preview.component';

import Category from '../category/category.component';

import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { setCategories } from '../../store/categories/categories.action';
import { useDispatch } from 'react-redux';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();

    }, [])

    return (

        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=':category' element={<Category />}></Route>
        </Routes>

    )

}


export default Shop;