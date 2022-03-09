import Link from 'next/link'
import Image from 'next/image'

 const ProductCard = ({product}) => {
    const {handle, title}=product.node
    const{altText, originalSrc}=product.node.images.edges[0].node
    const price = product.node.priceRange.minVariantPrice.amount
    return (
        <Link
            href={`/products/${handle}`}
        >
            <a class="group">
                <div class="bg-gray-200 rounded-3xl overflow-hidden">
                    <div class="relative group-hover:opacity-75 h-72 w-60">
                        <Image
                            src={originalSrc}
                            alt={altText}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <h3 class="mt-4">{title}</h3>
                <p class="text-sm">${price}</p>
            </a>
        </Link>
    )
}
export default ProductCard