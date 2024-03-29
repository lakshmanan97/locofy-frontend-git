import { Button } from "@mui/material";
import styles from "./state.module.css";
import { useNavigate } from 'react-router-dom';

const FrameComponent = ({data}) => {
  const navigate = useNavigate();
  const handleRoute=()=>{
   
      navigate('/input',{state:{component:"state",state:"add",countryCode:data.countryCode}});
  
  }

  
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapParent}>
        <img
          className={styles.wrapIcon}
          loading="lazy"
          alt=""
          src={data.countryUrl}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.indiaParent}>
            <h2 className={styles.india}>{data.countryName}</h2>
            <div className={styles.countryCode}>
              <div className={styles.countryCodeContainer}>
                <span>{`country code - `}</span>
                <span className={styles.span}>{data.countryCode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.statesViewParent}>
          <h1 className={styles.statesView}>States view</h1>
          <button
            className={styles.stateCodeTF}
            startIcon={<img width="24px" height="24px" src="/plus.svg" />}
            disableElevation={true}
            variant="text"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              borderRadius: "0px 0px 0px 0px",
              width: 112,
              height: 55,
            }}

            onClick={()=>handleRoute()}
          >{`ADD  `}</button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
