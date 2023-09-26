"use client"

import { ProductFiltersResult } from "../types";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { BreadCrumbs, Button, ProductCardLayout, ProductGridLayout, SectionContainer } from "tp-kit/components"
import ProductFilters from '@/components/product-filters';
import { useMemo, useState } from "react";
import { filterProducts } from "@/utils/filter-products";
import Link from "../../node_modules/next/link";
const categories = PRODUCTS_CATEGORY_DATA;

type Props = {
  showFilter : false,
  productSlug: string
}

export default function ProductList({showFilter}: Props) {
    const [filter, setFilter] = useState<ProductFiltersResult>()

    const categFiltered = useMemo(
        () => filterProducts(categories, filter),
        [categories, filter]
      );

    return (
        <SectionContainer>
        <BreadCrumbs
            className=""
            items={[
              {
                label: 'Accueil',
                url: '#'
              }
            ]}
        />

        <div className="flex mx-5">
          <div className="flex-auto mt-10">
            <ProductFilters categories={categories} onChange={(values) => {setFilter(values)}}></ProductFilters>
          </div>
          <div className="flex-auto">
            {categFiltered.map(category =>
              <SectionContainer>
                <Link href={"/" + category.slug} className="mb-3 text-xl">{category.name} ({category.products.length})</Link>
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
          </div>
        </SectionContainer>
    )
  }
  