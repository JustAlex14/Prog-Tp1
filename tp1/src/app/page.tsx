import Image from 'next/image'
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import {ProductCardLayout, ProductGridLayout} from "tp-kit/components/products";
import {BreadCrumbs, Button, SectionContainer} from "tp-kit/components";
const categories = PRODUCTS_CATEGORY_DATA;

export default function Home() {
  return (
    <main>
      <BreadCrumbs
          className=""
          items={[
            {
              label: 'Accueil',
              url: '#'
            }
          ]}
      />
        {categories.map(category =>
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
    </main>
  )
}
