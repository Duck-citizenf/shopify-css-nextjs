import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'


const Hero = ({best_products}) => {
    best_products.sort(function(a, b){return 0.5 - Math.random()});
    const c1=best_products[1];
    const c2=best_products[2];
    const c3=best_products[3];
    
    return(
      <div>
        <a>
        <div className="w-100 overflow-hidden">
          <div className="relative">
            <div className="bg-gray-200 rounded-3xl overflow-hidden">
              <Swiper
              navigation
              loop="true"
              className="relative group-hover:opacity-75 h-72 w-30"
              >
                  <SwiperSlide>
                  <Link
                    href={`/products/${c1.node.handle}`}
                  >
                    <Image 
                      src={c1.node.images.edges[0].node.originalSrc}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link
                    href={`/products/${c2.node.handle}`}
                  >
                    <Image 
                      src={c2.node.images.edges[0].node.originalSrc}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link
                    href={`/products/${c3.node.handle}`}
                  >
                    <Image 
                      src={c3.node.images.edges[0].node.originalSrc}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Link>
                  </SwiperSlide>             
              </Swiper>
            </div>
          </div>
        </div>
        </a>
      </div>
    )
}

export default Hero

