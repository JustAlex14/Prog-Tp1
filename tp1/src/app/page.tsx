
import Image from 'next/image'
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
import ProductFilters from '@/components/product-filters';
import ProductList from '@/components/product-list';
const categories = PRODUCTS_CATEGORY_DATA;


export default function Home() {
  return (
    <main>
      <ProductList></ProductList>
    </main>
  )
}
