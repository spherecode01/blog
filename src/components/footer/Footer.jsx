import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>CodaSphere</div>
      <div className={styles.text}>CodaSphere creative thoughts © All rights reserved. </div>
    </div>
  )
}

export default Footer