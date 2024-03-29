import FrameComponent1 from "../components/district1Component";
import FrameComponent from "../components/districtComponent";
import GroupComponent from "../components/districtGroupComponet";
import styles from "./District.module.css";
import {useLocation,useNavigate} from 'react-router-dom';
const District = () => {
  const location=useLocation()
    
  return (
    <div className={styles.desktop2}>
      <FrameComponent1 />
      <section className={styles.desktop2Inner}>
        <div className={styles.frameParent}>
          <FrameComponent  data= {location.state}/>
          <GroupComponent data= {location.state}/>
        </div>
      </section>
    </div>
  );
};

export default District;
