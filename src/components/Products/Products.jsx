import React from 'react'

const Products = (products) => {

    const style = {
        border: '5px solid green',
        padding: '50px 100px',
        margin: '50px 50px',
        backgroundColor: 'cyan',
        fontSize: '40px'
    }
  return (
    <div style = {style}>
         <h2>Products Name: {products.product.name} </h2>
         <h2>Products Price: {products.product.price}</h2>
         <button onClick={products.alert}> click </button>
         </div>
  )
}

export default Products