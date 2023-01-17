import { async } from "@firebase/util";
import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setCategoriesMap] = useState({});


    /*
    trigger only one time to upload the data to firebase database and deleted
    
        useEffect(() => {
            addColltectionAndDocuments('categories', SHOP_DATA);
        }, [])
    
        */

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();

            setCategoriesMap(categoryMap)
        }

        getCategoriesMap();

    }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}