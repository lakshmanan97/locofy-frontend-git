import styles from "./GroupComponent.module.css";
import { useNavigate } from 'react-router-dom';

import { useEffect,useState } from "react";
import axios from "axios";
const GroupComponent = ({data}) => {


  const [stateList,setStateList]=useState([])
  useEffect(() => {
   

    fetchData();


  
  }, []); // Empty dependency array means this effect runs once after the initial render
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getStateByCountryCode/${data.countryCode}`);

      setStateList(response.data.data)

     // Assuming the response contains JSON data
    } catch (error) {
      alert(
        JSON.stringify(error)
      )
    }
  };
  const navigate = useNavigate();

  const navigateToAnotherScreen = (item) => {
    navigate('/input',{state:{id:item._id,component:"state",state:"edit",stateName:item.stateName,stateCode:item.stateCode}});
  };

  const handleRoute=(item)=>{
    navigate('/districtlist',{state:{id:item._id,stateName:item.stateName,stateCode:item.stateCode}});
  }

  const handleDeleteRequest = async (item) => {
    try {
      const response = await axios.delete(`http://localhost:8080/deleteState/${item._id}`);
      alert(`${item._id} was deleted `)
      fetchData()
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const instances =  stateList.map((item,index)=>(
    <div  key ={index} className={styles.rectangleParent} >
    <div className={styles.frameChild} />
    <div className={styles.tamilnadu}>
      <div className={styles.tamilNadu} onClick={()=>handleRoute(item)}>{item.stateName}</div>
    </div>
    <div className={styles.stateCodeContainer}>
      <span>{`State code - `}</span>
      <span className={styles.tn}>{item.stateCode}</span>
    </div>
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.materialSymbolseditOutlineWrapper}>
          <img
            className={styles.materialSymbolseditOutlineIcon}
            loading="lazy"
            alt=""
            src="/materialsymbolseditoutlinesharp.svg"
            onClick={()=>navigateToAnotherScreen(item)}
          />
        </div>
        <div className={styles.frameItem} />
        <button onClick={()=>handleDeleteRequest(item)}>Delete</button>
      </div>
    </div>
  </div>
    ));
  return (
    <div className={styles.flexrow}>{instances}</div>
  );
};

export default GroupComponent;
