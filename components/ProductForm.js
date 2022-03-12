import {useState, useContext} from 'react'
import ProductOptions from '../components/ProductOptions'
import {formatter} from '../utils/helpers'

export default function ProductForm({product}) {
  console.log(product)
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
      variantPrice: variant.node.priceV2.amount
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
        <button>Add To Card</button>
    </div>
  )
}
