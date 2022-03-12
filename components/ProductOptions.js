import { Input } from 'postcss'
import React from 'react'

export default function ProductOptions({name, values, selectedOptions, setOptions}) {
  return (
    <div>
        <legend className="inline-flex">{name}</legend>
        <div className="inline-flex items-center flex-warp">
            {
                values.map(value =>{
                    const id = `option-${name}-${value}`
                    const checked = selectedOptions[name] == value

                    return(
                        <label key={id} htmlFor={id}>
                            <input
                                className="sr-only"
                                type="radio"
                                id={id}
                                value={value}
                                checked={checked}
                                onChange={()=>{setOptions(name,value)}}
                            />
                            <div className={`p-2 my-3 text-lg ${checked ? "text-white bg-gray-900" : "text-gray-900 bg-slate-200"}`}>
                                {value}
                            </div>
                        </label>
                    )
                })
            }
        </div>
    </div>
  )
}
