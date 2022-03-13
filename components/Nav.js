import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "../context/shopContext"
import MiniCart from "./MiniCart"

export default function Nav() {
  const {cart,cartOpen,setCartOpen}=useContext(CartContext)
  let cartQuantity = 0
  cart.map(item=>{
    return (cartQuantity += item?.variantQuantity)
  })
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
        <div className="flex items-center justify-between">
            <Link href="/" passHref>
                Shopify+Next.js
            </Link>
            <a 
              className="text-md ml-20"
              onClick={()=>setCartOpen(!cartOpen)}
              >
                Cart ({cartQuantity})
            </a>
            <MiniCart cart={cart}/>
        </div>
    </header>
  )
}
