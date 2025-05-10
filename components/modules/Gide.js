import Link from "next/link"
import styles from "./Gide.module.css"

function Gide() {
  return (
    <div className={styles.container}>
        <Link href="/menu">Menu</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/">Discount</Link>
    </div>
  )
}

export default Gide