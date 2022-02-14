export interface ICategory {
    title: string;
}

export interface IProduct {
    id: string;
    title: string;
    image: string;
    description: string;
    price: number;
    images?: string[]
    category: string,
}

export interface IGender { title: string; categories: { [index: string]: ICategory } }

export const genders: { [index: string]: IGender } = {
    women: {
        title: "Mujer",
        categories: {
            bolsos: {
                title: "Bolsos",
            },
            carteras: {
                title: "Carteras",
            },
        },
    }
};