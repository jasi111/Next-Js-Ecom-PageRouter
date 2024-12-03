'use client'

import React, { useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProductService } from '../../services/product-service'
import ProductCard from '../prodcut-card/ProductCard';

export default function FilterProducts() {
    const [products, setProducts] = useState<any[]>([]); // State for all products
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]); // State for filtered products
    const [searchText, setSearchText] = useState(''); // State for search input
    const router = useRouter();
    const searchParams = useSearchParams(); // Hook to access query params
   
    // Fetch products client-side
    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await ProductService.getProducts();

            setProducts(productsData);
            setFilteredProducts(productsData); // Set both products and filteredProducts initially
        };

        fetchProducts();
    }, []);

    // Get category from query parameters and filter products based on it
    useEffect(() => {
        const category = searchParams.get('category'); // Get category from query
        if (category) {
            const filtered = products.filter((p: any) =>
                p.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredProducts(filtered); // Filter products by category
        } else {
            setFilteredProducts(products); // If no category is selected, show all products
        }
    }, [searchParams, products]); // Re-run when query param or products change

    // Filter products whenever search text changes
    useEffect(() => {
        if (searchText) {
            const filtered = products.filter((p: any) =>
                p.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products); // Show all products if search is empty
        }
    }, [searchText, products]);

    const onSearchChange = (event:any) => {
        setSearchText(event.target.value); // Update search text state
    };

    
    
    return (
        <div>
            <>
                {/* Product content */}
                <div className="container-fluid">
                    {" "}
                    {/* Use container-fluid here for full width */}
                    <div className="row">
                        {/* Filter Content */}
                        {/* Filter Button for small screens */}
                        <div className="col-12 d-md-none mt-4">
                            <button
                                className="btn btn-dark w-25 mb-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#filterContent"
                                aria-expanded="false"
                                aria-controls="filterContent"
                            >
                                FILTER
                            </button>
                        </div>
                        <div
                            className="col-12 col-md-4 col-lg-2 p-2 collapse d-md-block"
                            id="filterContent"
                        >
                            <div>
                                <form>
                                    <div className="d-flex position-relative">
                                        <input onChange={onSearchChange}  type="text" className='form-control' placeholder='Search' />
                                        <button type='submit' className='border-0 position-absolute end-0 top-50 me-2 translate-middle-y'><i className='bi-search'></i></button>
                                    </div>
                                </form>
                            </div>
                            <h2 className="fw-semibold fs-5 mt-4">Category</h2>
                            <Link href="/products" className="d-block fw-medium fs-6 mt-3 text-decoration-none text-dark">
                                View All
                            </Link>
                            <Link href="/products?category=men's clothing" className="d-block fw-medium fs-6 mt-3 text-decoration-none text-dark">
                                Men's Clothing
                            </Link>
                            <Link href="/products?category=women's clothing" className="d-block fw-medium fs-6 mt-3 text-decoration-none text-dark">
                                Women's Clothing
                            </Link>
                            <Link href="/products?category=jewelery" className="d-block fw-medium fs-6 mt-3 text-decoration-none text-dark">
                                Jewellery
                            </Link>
                            <Link href="/products?category=electronics" className="d-block fw-medium fs-6 mt-3 text-decoration-none text-dark">
                                Electronics
                            </Link>

                            <h2 className="fw-semibold fs-6 mt-4">Made for Amazon Brands</h2>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckChecked"
                                />
                                <label className="form-check-label " htmlFor="flexCheckChecked">
                                    Made For Amazon
                                </label>
                            </div>
                            <h2 className="fw-semibold fs-6 mt-4">Delivery Day</h2>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckChecked"
                                />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Get It Today
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckChecked"
                                />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Get It by Tomorrow
                                </label>
                            </div>
                            {/* Star rating filter */}
                            <div className="mt-3">
                                <h2 className="fw-semibold fs-6 mt-4">Avg. Customer Review</h2>
                                <div>
                                    <a href="" className="text-nowrap text-decoration-none">
                                        <i
                                            className="text-primary bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        >
                                            <span className="text-dark fs-6 fw-semibold"> &amp; Up</span>
                                        </i>
                                    </a>
                                </div>
                                <div>
                                    <a href="" className="text-nowrap text-decoration-none">
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        >
                                            <span className="text-dark fs-6 fw-semibold"> &amp; Up</span>
                                        </i>
                                    </a>
                                </div>
                                <div>
                                    <a href="" className="text-nowrap text-decoration-none">
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        >
                                            <span className="text-dark fs-6 fw-semibold"> &amp; Up</span>
                                        </i>
                                    </a>
                                </div>
                                <div>
                                    <a href="" className="text-nowrap text-decoration-none">
                                        <i
                                            className="bi bi-star-fill text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        />
                                        <i
                                            className="bi bi-star text-warning"
                                            style={{ fontSize: "1.1rem" }}
                                        >
                                            <span className="text-dark fs-6 fw-semibold"> &amp; Up</span>
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <h2 className="fw-semibold fs-6 mt-4">Pay On Delivery</h2>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckChecked"
                                />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Eligible for Pay On Delivery Eligible for Pay On Delivery
                                </label>
                            </div>
                            <h2 className="fw-semibold fs-6 mt-4">Brand</h2>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckChecked"
                                />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    Ambrane
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckChecked"
                                />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    amazon basics
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input text-dark"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Apple
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input text-dark"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Nokia
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input text-dark"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Redmi
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input text-dark"
                                    type="checkbox"
                                    defaultValue=""
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Samsung
                                </label>
                            </div>
                        </div>
                        {/* Product content */}
                        <div className="col-12 col-md-8 col-lg-10 mt-2">
                            {/* Display filtered products */}
                            <div className="row gx-5 gy-3 mx-5 my-3">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((p: any) => (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-4" key={p.id}>
                                            <div className="card h-100">
                                                <ProductCard product={p} />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No products found.</p>
                                )}
                            </div>

                            <h1 id="recommended">Recommended Section</h1>
                        </div>
                    </div>
                </div>
            </>

        </div >
    )
}
