import Image from 'next/image'
import ProductForm from './ProductForm'

export default function ProductPageContent({product}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start">
      <div className="w-full max-w-md border:">
        <div className="relative h-96 w-full">
          <Image 
            src={product.images.edges[0].node.originalSrc} 
            alt={product.images.edges[0].node.originalSrc}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <ProductForm product={product}/>
    </div>
  )
}
