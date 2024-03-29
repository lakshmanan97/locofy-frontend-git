import styles from "./districtGroupComponet.module.css";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";
const GroupComponent = ({data}) => {

  const [districtList,setDistrictList]=useState([])

  const navigate = useNavigate();

  useEffect(() => {
   

    fetchData();


  
  }, []); // Empty dependency array means this effect runs once after the initial render
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getDistrictByStateCode/${data.stateCode}`);

      setDistrictList(response.data.data)

     // Assuming the response contains JSON data
    } catch (error) {
      alert(
        JSON.stringify(error)
      )
    }
  };
  const navigateToAnotherScreen = (item) => {
    navigate('/input',{state:{id:item._id,component:"district",state:"edit",districtName:item.districtName,districtCode:item.districtCode}});
  };
  const handleDeleteRequest = async (item) => {
    try {
      const response = await axios.delete(`http://localhost:8080/deleteDistrict/${item._id}`);
      alert(`${item._id} was deleted `)
      fetchData()
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const instances = districtList.map((item,index)=>(
    <div className={styles.rectangleParent}>
    <div className={styles.frameChild} />
    <div className={styles.tamilnadu}>
      <div className={styles.tamilNadu}>{item.districtName}</div>
    </div>
    <div className={styles.stateCodeContainer}>
      <span>{`District code - `}</span>
      <span className={styles.tn}>{item.districtCode}</span>
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
