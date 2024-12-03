'use client'
import React, {useContext} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './ProductCard.module.css';
import { CartContext } from '../../context/CartContext'

function ProductCard(props: any) {
    var product = props.product;
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error('CartContext must be used within a CartProvider');
    }

    const { addToCart } = cartContext;
    return (
        <div className="h-100 d-flex flex-column ">
            <Link href={'/products/' + product.id} className="d-flex justify-content-center align-items-center">
                <Image
                    src={product.image}
                    className={`object-fit-contain w-50 mx-auto ${styles['card-img-top']}`}
                    alt="..."
                    width={500}
                    height={500}
                />
            </Link>
            <div className="card-body d-flex flex-column">
                <div>
                <Link href={'/products/' + product.Id} className='fw-semibold text-center text-decoration-none text-dark'>
                      {product.title}
                      </Link>
                </div>
                <h5 className="mt-2 fw-bold">AED {product.price}</h5>


                <Link href=''onClick={() => addToCart(product)} className={`btn text-light mt-auto ${styles['bg-blue']}`}             >
                    Add to Cart
                </Link>
            </div>


        </div>

    );
}

export default ProductCard;
