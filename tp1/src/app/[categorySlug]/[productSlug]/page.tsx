
import ProductFilters from "@/components/product-filters";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { BreadCrumbs } from "../../../../tp-kit/components/breadcrumbs";
import { Button } from "../../../../tp-kit/components/button";
import { ProductCardLayout } from "../../../../tp-kit/components/products/product-card-layout";
import { ProductGridLayout } from "../../../../tp-kit/components/products/product-grid-layout";
import { SectionContainer } from "../../../../tp-kit/components/section-container";
import Image from "next/image";
import {ProductRating} from "tp-kit/components/products";
import ProductAttributesTable from "@/components/product-table";

const categories = PRODUCTS_CATEGORY_DATA;

type NextPageProps<T = Record<string, string>> = {
  
  params: T,
  
  searchParams: { [key: string]: string | string[] | undefined }
}

// Ce que j'attends comme paramètres
type Props = {
	categorySlug: string,
	productSlug: string,
}

// app/blog/[category]/[post]/page.tsx
export default function BlogPostPage({params} : NextPageProps<Props>) {
	const categ = categories.filter(category => category.slug.toUpperCase() == params.categorySlug.toUpperCase())[0]
	const product = categ.products.filter(products => products.slug == params.productSlug)[0]
	const productList = categ.products.filter(products => products.slug != params.productSlug)
	//const blogPost = await getPostWithinCategory(params.category, params.post);

	// Retourne une 404 si non trouvé

	return <>
		<SectionContainer>
			<BreadCrumbs
				className=""
				items={[
				  {
					label: 'Accueil',
					url: '../../'
				  },
				  {
					label: categ.name,
					url: '../'
				  },
				  {
					label: product.name,
					url: '#'
				  }
				]}
			/>
			<Image src={product.img} alt="Picture of the product" width={500} height={500} priority />
			<h1>{product.name}</h1>
			<ProductRating value={4}></ProductRating>
			<h2>{product.desc}</h2>
			<h2>{product.price} €</h2>
			<Button>Ajoutez au panier</Button>
			<ProductAttributesTable attributes={[
				{ label: "Intensité", rating: 3 },
				{ label: "Volupté", rating: 2 },
				{ label: "Amertume", rating: 1 },
				{ label: "Onctuosité", rating: 4 },
				{ label: "Instagramabilité", rating: 5 },
			]}></ProductAttributesTable>

			<h1 className="mb-3 text-xl"><b>Vous aimerez aussi</b></h1>
			<ProductGridLayout
				products={productList}
				>
				{product =>
					<ProductCardLayout
						button={<Button variant="ghost" fullWidth="true">Ajouter au panier</Button>}
						product={product}
					/>
				}

			</ProductGridLayout>
		</SectionContainer>
	</>;
}