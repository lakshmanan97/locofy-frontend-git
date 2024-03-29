import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/group-1.svg"
      />
      <nav className={styles.materialEditSymbolWrapper}>
        <nav className={styles.materialEditSymbol}>
          <div className={styles.home}>Home</div>
          <div className={styles.about}>About</div>
          <div className={styles.contact}>Contact</div>
        </nav>
      </nav>
    </header>
  );
};

export default FrameComponent;
