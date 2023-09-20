"use client"

import { ProductFiltersResult } from "../types";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { BreadCrumbs, Button, ProductCardLayout, ProductGridLayout, SectionContainer } from "tp-kit/components"
import ProductFilters from '@/components/product-filters';
import { useMemo, useState } from "react";
import { filterProducts } from "@/utils/filter-products";
const categories = PRODUCTS_CATEGORY_DATA;

export default function ProductList() {
    const [filter, setFilter] = useState<ProductFiltersResult>()

    const categFiltered = useMemo(
        () => filterProducts(categories, filter),
        [categories, filter]
      );

    return (
      <div>
        <BreadCrumbs
            className=""
            items={[
              {
                label: 'Accueil',
                url: '#'
              }
            ]}
        />
        <ProductFilters categories={categories} onChange={(values) => {setFilter(values)}}></ProductFilters>
          {categFiltered.map(category =>
              <SectionContainer>
                <h1>{category.name} ({category.products.length})</h1>
                <ProductGridLayout
                    products={category.products}
                    >
                    {product =>
                        <ProductCardLayout
                            button={<Button variant="ghost" fullWidth="true">Ajouter au panier</Button>}
                            product={product}
                        />
                    }
  
                </ProductGridLayout>
              </SectionContainer>
          )}
      </div>
    )
  }
  