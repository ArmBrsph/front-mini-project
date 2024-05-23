'use client'
import Link from "next/link"
import styles from './component.style.module.css';
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [header, setHeader] = useState(false);
    const scrollHeader = () => {
        if (window.scrollY >= 10) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        return () => {
            window.addEventListener('scroll', scrollHeader)
        }
    })
    return (
        <div className={header ? styles.sticky : ""}>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/shop">All Product</Link>
                <Link href="/">About Us</Link>
            </nav>
        </div>

    )
}