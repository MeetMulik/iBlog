import React from "react";
import Link from "next/link";
import { TCategory } from '@/types/index';


const getCategories = async (): Promise<TCategory[] | null> => {
    try {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {

            const categories = await response.json();
            console.log(categories);
            return categories;

        }
    } catch (error) {
        console.log(error);
    }
    return null;
};

const CategoriesList = async () => {
    const categories = await getCategories();
    return (
        <div className="flex gap-2 text-sm flex-wrap">
            {categories &&
                categories.map((category: TCategory) => (
                    <Link className="px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer" key={category.id} href={`/categories/${category.catName}`}>
                        {category.catName}
                    </Link>
                ))}
        </div>
    );
};

export default CategoriesList;
