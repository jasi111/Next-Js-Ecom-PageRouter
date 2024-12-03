import React from 'react';
import { ProductService } from '../../services/product-service';
import Link from 'next/link';
import style from './productDetail.module.css';

export async function getServerSideProps(context: any) {
    const { id } = context.query; // Access the dynamic route parameter
    let productsDetail = null;

    if (id) {
        productsDetail = await ProductService.getProductsById(id);
    }

    return {
        props: {
            productsDetail,
            id,
        },
    };
}

export default function ProductDetail({ productsDetail, documentId }: any) {
    console.log('Product ID:', documentId);

    return (
        <div>
            <div>
                <div className="d-flex justify-content-around">
                    <div className="border w-50 p-5">
                        {productsDetail?.image ? (
                         <img src={productsDetail.image} alt='' height={300} width={300} className="object-fit-contain" />
                        ) : (
                            <p>Loading image...</p>
                        )}
                    </div>
                    <div className="w-50 border">
                        <h3 className="mt-5 mb-3 ms-3">{productsDetail?.title}</h3>

                        <p
                            className="p-3 fw-semibold text-capitalize lh-lg"
                            style={{ textAlign: 'justify' }}
                        >
                            {productsDetail?.description}
                        </p>
                        <h4 className="ms-3">Price: ${productsDetail?.price}</h4>

                        <div>
                            <a href="" className="text-nowrap text-decoration-none">
                                {[...Array(5)].map((_, i) => (
                                    <i
                                        key={i}
                                        className="bi bi-star-fill text-warning"
                                        style={{ fontSize: '1.1rem' }}
                                    ></i>
                                ))}
                            </a>
                        </div>

                        <Link
                            className="btn ms-3 bg-green text-light mt-5 px-4 mb-5"
                            href="/cart"
                        >
                            Add to Cart
                        </Link>

                        <Link
                            href="/cart"
                            className="btn bg-green text-light ms-5 mt-5 mb-5 px-4"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
