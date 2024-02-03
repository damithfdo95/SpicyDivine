import { createContext } from "react";

import menFashion from '../asset/Products/cloth/men/cake-1.jpg'
import womenFashion from '../asset/Products/cloth/women/bento-1.jpg'
import kidsFashion from '../asset/Products/cloth/kids/other-1.jpg'

export const FeatureCategoryContext = createContext([
    {
        name: "Cakes",
        image: menFashion,
        url: '/category/men',
        id: 1
    },
    {
        name: "Set Menu",
        image: womenFashion,
        url: '/category/women',
        id: 2
    },
    {
        name: "Sweets",
        image: kidsFashion,
        url: '/category/kids',
        id: 3
    }
])