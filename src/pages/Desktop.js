import FrameComponent from "../components/FrameComponent";
import CountryView from "../components/CountryView";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <FrameComponent />
      <section className={styles.desktop1Inner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-5@2x.png"
        />
      </section>
      <CountryView />
    </div>
  );
};

export default Desktop;
