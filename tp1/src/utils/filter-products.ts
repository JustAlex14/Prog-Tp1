import { ProductsCategoryData } from "tp-kit/types";
import { ProductFiltersResult } from "../types";

export function filterProducts(
	categories: ProductsCategoryData[], 
	filters?: ProductFiltersResult
) : ProductsCategoryData[] {
    if (!filters)
        return categories

    if (filters.categoriesSlug.length==0) {
        if (!filters.search)
            return categories

        const output = categories.map(category => ({
            ...category,
            products: category.products.filter(products => products.name.toUpperCase().includes(filters?.search.toUpperCase()))}));

        
        return output.filter(category => category.products.length>0)
    }

    if (!filters.search)
        return categories.filter((category) => filters?.categoriesSlug.includes(category.slug))

    const output = categories.filter((category) => filters?.categoriesSlug.includes(category.slug))
        .map(category => ({
            ...category,
            products: category.products.filter(products => products.name.toUpperCase().includes(filters?.search.toUpperCase()))}));

    return output
};