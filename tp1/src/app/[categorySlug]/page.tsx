
import ProductFilters from "@/components/product-filters";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { BreadCrumbs } from "../../../tp-kit/components/breadcrumbs";
import { Button } from "../../../tp-kit/components/button";
import { ProductCardLayout } from "../../../tp-kit/components/products/product-card-layout";
import { ProductGridLayout } from "../../../tp-kit/components/products/product-grid-layout";
import { SectionContainer } from "../../../tp-kit/components/section-container";
const categories = PRODUCTS_CATEGORY_DATA;

type NextPageProps<T = Record<string, string>> = {
  
  params: T,
  
  searchParams: { [key: string]: string | string[] | undefined }
}

// Ce que j'attends comme paramètres
type Props = {
	categorySlug: string,
}

// app/blog/[category]/[post]/page.tsx
export default function BlogPostPage({params} : NextPageProps<Props>) {
	const categ = categories.filter(category => category.slug.toUpperCase() == params.categorySlug.toUpperCase())[0]
	//const blogPost = await getPostWithinCategory(params.category, params.post);

	// Retourne une 404 si non trouvé

	return <>
		<SectionContainer>
			<BreadCrumbs
				className=""
				items={[
				  {
					label: 'Accueil',
					url: '../'
				  },
				  {
					label: categ.name,
					url: '##'
				  }
				]}
			/>

			<h1 className="mb-3 text-xl"><b>{categ.name} ({categ.products.length})</b></h1>
			<ProductGridLayout
				products={categ.products}
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