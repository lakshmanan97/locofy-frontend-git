import { Button } from "@mui/material";
import styles from "./District.module.css";
import { useNavigate } from 'react-router-dom';
const DistrictComponent = ({data}) => {
  const navigate = useNavigate();
  const handleRoute=()=>{
  navigate('/input',{state:{component:"district",state:"add",stateCode:data.stateCode}});
}

  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapParent}>
        {/* <img
          className={styles.wrapIcon}
          loading="lazy"
          alt=""
          src="/wrap.svg"
        /> */}
        <div className={styles.frameWrapper}>
          <div className={styles.indiaParent}>
            <h2 className={styles.india}>{data.stateName}</h2>
            <div className={styles.countryCode}>
              <div className={styles.countryCodeContainer}>
                <span>{`State Code - `}</span>
                <span className={styles.span}>{data.stateCode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.statesViewParent}>
          <h1 className={styles.statesView}>District</h1>
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

export default DistrictComponent;
