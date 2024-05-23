import Image from "next/image";
import styles from './Home.styles.module.css';

export const metadata = {
  title: "SeoulStyle Home",
  description: "Home",
};

export default function Home() {
  return (
    <>
      <div className={styles.containerOut}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <Image src='/NavbarIm.jpg' width={214} height={305} alt="logo" />
            <Image src='/NavbarIm.jpg' width={214} height={305} alt="logo" />
            <div className={styles.container2}>
              <Image src='/NavbarIm.jpg' width={420} height={148} alt="logo" />
              <Image src='/NavbarIm.jpg' width={420} height={148} alt="logo" />
            </div>
          </div>
          <div className={styles.subContainer}>
            <Image className={styles.imageRange} src='/NavbarIm.jpg' width={200} height={148} alt="logo" />
            <Image className={styles.imageRange} src='/NavbarIm.jpg' width={200} height={148} alt="logo" />
            <Image className={styles.imageRange} src='/NavbarIm.jpg' width={200} height={148} alt="logo" />
          </div>
        </div>
      </div>
    </>

  );
}
