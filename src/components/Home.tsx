
import React from 'react'
import ProductCard from '../components/prodcut-card/ProductCard'
import { ProductService } from '../services/product-service'
import Image from 'next/image'


export default async  function Home() {
var products = await ProductService.getProducts();

  return (
    <div className='d-flex justify-content-center align-items-center'>    {/* Product content */}
    <div className="col-12 col-md-8 col-lg-10 mt-2">
        {/* Display filtered products */}
        <div className="row gx-5 gy-3 mx-5 my-3">
            {products.length > 0 ? (
                products.map((p: any) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-4" key={p.id}>
                        <div className="card">
                            <ProductCard product={p} />
                        </div>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>

        <h1 id="recommended">Recommended Section</h1>
    </div></div>
  )
}
