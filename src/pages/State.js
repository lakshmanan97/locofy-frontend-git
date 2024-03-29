import FrameComponent1 from "../components/stateComponent1";
import FrameComponent from "../components/stateComponent";
import GroupComponent from "../components/GroupComponent";
import styles from "./State.module.css";
import {useLocation,useNavigate} from 'react-router-dom';
const State = () => {
  const location=useLocation()
    
  return (
    <div className={styles.desktop2}>
      <FrameComponent1 />
      <section className={styles.desktop2Inner}>
        <div className={styles.frameParent}>
          <FrameComponent data= {location.state} />
          <GroupComponent data= {location.state}/>
        </div>
      </section>
    </div>
  );
};

export default State;
