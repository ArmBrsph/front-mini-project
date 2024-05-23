'use client'
import styles from "./shop.styles.module.css"
import Image from "next/image"
import Link from "next/link"
import { Button, ButtonGroup } from "@nextui-org/button";
import { useState, useEffect } from "react";
import { getAllProduct, calculateBill } from "./action";


export default function ALLProduct() {
    const [productState, setProductState] = useState([])
    const [cartState, setCartState] = useState([])
    const [totalBill, setTotalBill] = useState(0)
    const initProduct = async () => {
        try {
            const result = await getAllProduct()
            setProductState(result)
        } catch (error) {
            console.log('error', error);
        }
    }
    useEffect(() => {
        initProduct()
    }, [])

    const handleClick = (item) => {
        setCartState((cartState) => [
            item,
            ...cartState
        ]);
    };
    const handleBuyClick = async (item) => {
        try {
            const total = await calculateBill(item)
            setTotalBill(total)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className={styles.container}>
                {productState.map(item => (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.product_img}>
                            <Image src={"/" + item.product_image} width={300} height={400} alt={item.product_name} />
                        </div>
                        <div className={styles.desciption}>
                            <div className={styles.detail}>
                                <p>{item.product_name}</p>
                                <p>{item.price} Baht</p>
                            </div>
                            <div className={styles.buy}>
                                <Link href={'/shop/' + item.id} className={styles.logo} >
                                    <Image src="/loupe.png" width={30} height={30} alt="see_more" />
                                </Link>
                                <Button onClick={() => handleClick(item)}>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.carts}>
                <div>
                    {cartState.map(item => (
                        <div key={item.id} className={styles.cartsInItem}>
                            <h4>{item.product_name} ----- {item.price} Baht</h4>
                        </div>
                    ))}
                </div>
                <h2>{totalBill}</h2>
                <div>
                    <Button onClick={() => handleBuyClick(cartState)}>
                        Bill
                    </Button>
                </div>

            </div>
        </>
    )
}
