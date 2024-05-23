import Head from "next/head";
import styles from "./About.styles.module.css"
import Image from "next/image"
// async function getData() {
//     const res = await fetch("http://localhost:3000/api/app-test")
//     const data = await res.json()
//     return data
// }
export default async function About() {
    const data = await getData()
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="keywords" content="About Us" />
            </Head>
            <div className={styles.container}>
                <Image src="/S__54992930.jpg" width={200} height={300} alt="ME"/>
                <h1>{data.name} {data.surname}</h1>
                <h2>Grows-it Deverloper</h2>
            </div>
        </>
    )
}