import {useState, useContext} from 'react'
import ProductOptions from '../components/ProductOptions'
import {formatter} from '../utils/helpers'
import { CartContext } from '../context/shopContext'

export default function ProductForm({product}) {
  const {addToCart} = useContext(CartContext)
  const allVariantsOptions = product.variants.edges?.map(variant => {
    const allOptions = {}

    variant.node.selectedOptions.map(item => {allOptions[item.name] = item.value})
    return{
      id: variant.node.id,
      title: variant.node.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantQuantity: 1
    }
  })

  const defaultValues = {}
  product.options.map(item => {
    defaultValues[item.name]=item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantsOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name,value){
    setSelectedOptions(prevState=>{
      return {...prevState, [name]:value}
    })
    const selection = {
      ...selectedOptions,
      [name]: value
    }
    allVariantsOptions.map(item => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }

  return (
    <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3">
        <h2 className="text-4xl font-bold">{product.title}</h2>
        <span className="pb-6">{formatter.format(product.variants.edges[0].node.priceV2.amount)}</span>
        {
          product.options.map(({name,values})=>(
            <ProductOptions
              key={`key-${name}`}
              name={name}
              values={values}
              selectedOptions={selectedOptions}
              setOptions={setOptions}
            />
          ))
        }
        <button 
          onClick={()=>{addToCart(selectedVariant)}
          }>Add To Cart</button>
    </div>
  )
}
