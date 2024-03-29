import styles from "./district1.module.css";

const FrameComponent1 = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/group-1.svg"
      />
      <nav className={styles.homeAboutContactWrapper}>
        <nav className={styles.homeAboutContact}>
          <div className={styles.home}>Home</div>
          <div className={styles.about}>About</div>
          <div className={styles.contact}>Contact</div>
        </nav>
      </nav>
    </header>
  );
};

export default FrameComponent1;
