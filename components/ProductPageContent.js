import Image from 'next/image'
import ProductForm from './ProductForm'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import RecomendedList from './RecommendedList'

export default function ProductPageContent({product}) {
  const images = []
  product.images.edges.map((image, i)=>{
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image src={image.node.originalSrc} alt={image.node.altText} layout="fill" objectFit="cover"/>
      </SwiperSlide>
    )
  })
  SwiperCore.use([Navigation, Pagination])
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start">
        <div className="w-full max-w-md border:">
          <div className="relative h-96 w-full">
            <Swiper
              style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
              navigation
              pagination={{ clickable: true }}
              className="h-96 rounded-2xl"
              loop="true"
            >
              {images}
            </Swiper>
          </div>
        </div>
        <ProductForm product={product}/>
      </div>
      <p className="pt-16 space-y-0 md:space-x-4">{product.description}</p>
      <RecomendedList 
        current={product.id}
        products={product.collections.edges[0] ? product.collections.edges[0].node.products.edges : []} 
      />
    </div>
  )
}
