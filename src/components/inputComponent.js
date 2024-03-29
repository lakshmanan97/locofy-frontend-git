import styles from "./input.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.wrapperCircleParent}>
        <div className={styles.wrapperCircle}>
          <img className={styles.circleIcon} alt="" src="/circle.svg" />
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img
           style={{height:30,width:30}}
            loading="lazy"
            alt=""
            src="https://i.pinimg.com/736x/cd/76/96/cd76965e427b0205b9d5928a1ec1bf2d.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
