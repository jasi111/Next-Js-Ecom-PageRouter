'use client'; // Mark this component as a Client Component

import React, { useState, useEffect } from 'react';
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

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value); // Update search text state
  };

  return (
    <div>
      {/* Search form */}
      <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={onSearchChange}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      {/* Category navigation */}
      <Link href="#recommended">Go to Recommended Section</Link>
      <h3 className="ProductList">Product List</h3>

      {/* Category buttons that pass the selected category in the URL */}
      <button onClick={() => router.push("/products?category=women's clothing")}>
        Women Category
      </button>
      <button onClick={() => router.push("/products?category=men's clothing")}>
        Men Category
      </button>
      <button onClick={() => router.push('/products?category=electronics')}>
        Electronics Category
      </button>
      <button onClick={() => router.push('/products?category=jewelery')}>
        Jewellery
      </button>
      <button onClick={() => router.push('/products')}>
        All
      </button>

      {/* Display filtered products */}
      <div className="row gx-5 gy-3 mx-5 my-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p: any) => (
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
    </div>
  );
}
  