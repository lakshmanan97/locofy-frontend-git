import { Button } from "@mui/material";
import styles from "./CountryView.module.css";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";
const CountryView = () => {

  const [countryList,setCountryList]=useState([])
  const navigate = useNavigate();

  const navigateToAnotherScreen = (item) => {
    navigate('/input',{state:{id:item._id,component:"country",state:"edit",countryName:item.countryName,countryCode:item.countryCode,countryUrl:item.countryImageUrl}});
  };

  const addCountry = () => {
    navigate('/input',{state:{component:"country",state:"add"}});
  };
  useEffect(() => {
   

    fetchData();

    // Cleanup function if needed
  
  }, []); // Empty dependency array means this effect runs once after the initial render
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getCountry');

      setCountryList(response.data.data)

     // Assuming the response contains JSON data
    } catch (error) {
      alert(
        JSON.stringify(error)
      )
    }
  };

  const handleDeleteRequest = async (item) => {
    try {
      const response = await axios.delete(`http://localhost:8080/deleteCountry/${item._id}`);
      alert(`${item._id} was deleted `)
      fetchData()
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const handleRoute=(item)=>{
    navigate('/statelist',{state:{id:item._id,countryName:item.countryName,countryCode:item.countryCode,countryUrl:item.countryImageUrl}});
  }
  const instances = countryList.map((item,index)=>(  <div key={index} className={styles.rectangleParent} >
    <div className={styles.frameGroup}>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.circleShapesParent}>
            {/* <div className={styles.circleShapes} /> */}
            <img
              className={styles.circleIcon}
              loading="lazy"
              alt=""
              src={item.countryImageUrl}
              onClick={()=>handleRoute(item)}
            />
          </div>
        </div>
      </div>
      <div className={styles.indiaWrapper}>
        <div className={styles.india}>{item.countryName}</div>
      </div>
      <div className={styles.countryCodeContainer}>
        <span>{`country code - `}</span>
        <span className={styles.span}>{item.countryCode}</span>
      </div>
    </div>
    <div className={styles.frameWrapper1}>
      <div className={styles.frameParent1}>
        <div className={styles.materialSymbolseditOutlineWrapper}>
          <img
            className={styles.materialSymbolseditOutlineIcon}
            loading="lazy"
            alt=""
            src="/materialsymbolseditoutlinesharp.svg"
            onClick={()=>navigateToAnotherScreen(item)}
          />
        </div>
        <div className={styles.frameInner} />
         <button  onClick={()=>handleDeleteRequest(item)}>Delete</button>
      </div>
    </div>
  </div>))
  
        
  return (
    <section className={styles.countryView}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.countryViewParent}>
            <h3 className={styles.countryView1}>Country view</h3>
            <button
              className={styles.frameChild}
              startIcon={<img width="24px" height="24px" src="/plus.svg" />}
              disableElevation={true}
              variant="text"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                borderRadius: "0px 0px 0px 0px",
                width: 112,
                height: 43,
              }}
              onClick={()=>addCountry()}
            >{`ADD  `}</button>
          </div>
        </div>
       <div className={styles.flexrow}>{instances}</div>
      </div>
    </section>
  );
};

export default CountryView;
