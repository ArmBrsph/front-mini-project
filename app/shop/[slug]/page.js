import styles from "./product.styles.module.css"
import Image from "next/image"
import { Button, ButtonGroup } from "@nextui-org/button";

export async function getDetailProduct(id) {
    const url = `${process.env.API_URL}/shop/getDetailProduct?id=${id}`
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error('cannot fetch Product')
    }
    const data = await res.json()
    return data
}
export default async function ShopPage({ params }) {
    const data1 = await getDetailProduct(params.slug)
    const item = data1[0]
    return (
        <div className={styles.container}>
            <div className={styles.Image}>
                <Image src={"/" + item.product_image} width={400} height={450} alt={item.product_name} />
            </div>
            <div className={styles.desciption}>
                <h1 className={styles.detail}>{item.product_name}</h1>
                <h3 className={styles.detail}>Desciption</h3>
                <p className={styles.detail}> {item.description}</p>
                <div className={styles.priceDetail}>
                    <h4>{item.price} Baht</h4>
                    <Button>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}