'use client' 
import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import Logo from '../../../assets/plogo.png'

import Link from 'next/link'
import Image from 'next/image'
import { CartContext } from '../../context/CartContext'

function Navbar() {

    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error('CartContext must be used within a CartProvider');
    }

    const { items } = cartContext;
    return (
        <>
            <div
                className={`navbar navbar-expand-lg border-body ${styles['nav-bg']}`}
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">
                        {/* <Image
                            src={Logo}
                            alt="logo"
                            className="img-fluid"
                            style={{ width: "150px", height: "100px" }}
                        /> */}
                       <h1>Mojo Store</h1> 
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <form className="nav-link d-flex w-100 " role="search">
                                    <input
                                        className="form-control bg-light text-dark rounded"
                                        style={{ width: "400px" }}
                                        type="search"
                                        placeholder="Search Amazon.ae"
                                        aria-label="Search"
                                    />
                                    <button className="btn bg-light text-dark" type="submit">
                                        <i className="bi-search"></i>
                                    </button>
                                </form>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4 mt-2">
                                <Link
                                    className="nav-link text-light fw-semibold"
                                    href="/"
                                    role="button"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item me-4 mt-2">
                                <Link
                                    href="/products"
                                    className="nav-link text-light fw-semibold"
                                    role="button"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item me-4 mt-2">
                                <Link
                                    className="nav-link text-light fw-semibold"
                                    href="/aboutus"
                                    role="button"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li className="nav-item me-4 mt-2">
                                <Link
                                    href="/contact"
                                    className="nav-link text-light fw-semibold"
                                    role="button"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            {/* <li className="nav-item me-4 mt-4">
                                <Link
                                    href="/contact"
                                    className="nav-link text-light fw-semibold"
                                    role="button"
                                >
                                    Login
                                </Link>
                            </li> */}

                            <li className=" nav-item me-4">
                                <Link href="/cart" className=" mt-2 nav-link text-light">
                                    <i
                                        className="fa-solid fa-cart-shopping"
                                        style={{ fontSize: "25px" }}
                                    ></i>
                                    {items}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
