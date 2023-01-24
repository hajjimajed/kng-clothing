import { CategoryContainer, CategoryTitle } from './category.styles';

import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';

import ProductCard from '../../components/product-card/product-card.component';

import Spinner from '../../components/spinner/spinner.component';

const Category = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const { category } = useParams();
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {

        setProducts(categoriesMap[category])

    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category}</CategoryTitle>
            {
                isLoading ? (<Spinner></Spinner>) :
                    (
                        <CategoryContainer>
                            {products &&
                                products.map((product) => <ProductCard key={product.id} product={product} />)
                            }
                        </CategoryContainer>
                    )
            }

        </>

    )

}

export default Category;