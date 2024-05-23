import styles from "./shop.styles.module.css"

export const metadata = {
    title: "SeoulStyle's Product",
    description: "SeoulStyle's Product",
};

export default function ShopLayout({
    children,
}) {
    return (
        <section>
            <div className={styles.head}>
                <h1>SeoulStyle</h1>
                <p>Find your signature style with our diverse range of clothing.</p>
            </div>
            {children}
        </section>
    )
}