import Link from "next/link"
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <Link href="/">INFONEXT</Link>
                <Link href="/">INFONEXT</Link>
                <Link href="/">INFONEXT</Link>
                <div className="logo">
                    <Image src='/facebook.png' width={40} height={40} alt="logo" />
                </div>
                <div className="logo">
                    <Image src='/social.png' width={40} height={40} alt="logo" />
                </div>
            </div>
        </footer>
    )
}