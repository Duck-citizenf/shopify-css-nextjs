
import { getProductsInCollection, bestSellingData } from '../lib/shopify'
import ProductList from '../components/ProductList'
import Hero from '../components/Hero'

export default function Home({products, best_products}) {
  return (
    <div className="text-3xl">
      <div className="max-w-2xl mx-auto py-16 px-4">
        <Hero best_products={best_products}/>
      </div>
      <ProductList products={products}/>
    </div>
  )
}
export async function getStaticProps() {
  const products = await getProductsInCollection()
  const best_products = await bestSellingData()

  return {
    props: { products, best_products }, // will be passed to the page component as props
  }
}
