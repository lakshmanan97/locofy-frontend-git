import { Button } from "@mui/material";
import FrameComponent from "../components/inputComponent";
import styles from "./input.module.css";
import {useLocation,useNavigate} from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";
const Frame = () => {
const navigate=useNavigate()

  const [value,setValue]=useState('')

  const [value1,setValue1]=useState('')

  const [value2,setValue2]=useState('')

  const location=useLocation()

console.log(location)
  useEffect(()=>{
    if(Object.keys(location.state).length>0){

      if(location.state.state==="edit"&&location.state.component==="country"){
        setValue(location.state.countryName)
        setValue1(location.state.countryCode)
        setValue2(location.state.countryUrl)
      }else if(location.state.state==="edit"&&location.state.component==="state"){
        setValue(location.state.stateName)
        setValue1(location.state.stateCode)
      }else if(location.state.state==="edit"&&location.state.component==="district"){
        setValue(location.state.districtName)
        setValue1(location.state.districtCode)
      }

     
    }
  },[])
  
  const hanldeClick= async()=>{

    

    if(location.state.state==="add"&&location.state.component==="country"){

      const postData={
        "countryName":value,
        "countryCode":value1,
        "countryImageUrl":value2
      }

      try {
        const response = await axios.post('http://localhost:8080/addCountry', postData);
        console.log(response)
        alert("country added successfully")
        navigate(-1);
      } catch (error) {
        console.error('Error posting data:', error);
      }
      //addCountry
    }else if(location.state.state==="edit"&&location.state.component==="country"){

      const putData={
        "countryName":value,
        "countryCode":value1,
        "countryImageUrl":value2
      }
      try {
        const response = await axios.put(`http://localhost:8080/updateCountry/${location.state.id}`, putData);
        alert("country update successfully")
        navigate(-1);
      } catch (error) {
        console.error('Error putting data:', error);
      }
    }else if(location.state.state==="add"&&location.state.component==="state"){

      const postData={
        stateName: value,
        countryCode: location.state.countryCode,
        stateCode:value1
      }

      console.log(postData,"===========")
      try {
        const response = await axios.post(`http://localhost:8080/addState`, postData);
        alert("state added successfully")
         navigate(-1);
      } catch (error) {
        console.error('Error putting data:', error);
      }
    }else if(location.state.state==="edit"&&location.state.component==="state"){

      const putData={
        "stateName":value,
        "stateCode":value1
      }

      console.log("putdata",putData)
      try {
        const response = await axios.put(`http://localhost:8080/updateState/${location.state.id}`, putData);
        alert("state update successfully")
        navigate(-1);
      } catch (error) {
        console.error('Error putting data:', error);
      }
    }else if(location.state.state==="add"&&location.state.component==="district"){

      const postData={
        districtName: value,
        stateCode: location.state.stateCode,
        districtCode:value1
      }
      try {
        const response = await axios.post(`http://localhost:8080/addDistrict`, postData);
        alert("District added successfully")
         navigate(-1);
      } catch (error) {
        console.error('Error putting data:', error);
      }
    }else if(location.state.state==="edit"&&location.state.component==="district"){

      const putData={
        "districtName":value,
        "districtCode":value1
      }

      console.log("putdata",putData)
      try {
        const response = await axios.put(`http://localhost:8080/updateDistrict/${location.state.id}`, putData);
        alert("District update successfully")
        navigate(-1);
      } catch (error) {
        console.error('Error putting data:', error);
      }
    }
  }
  return (
    <div className={styles.backgroundParent}>
      <div className={styles.background} />
      <section className={styles.frameParent}>
        <div className={styles.editCountryWrapper}>
          <div className={styles.editCountry}>{location.state.state==="add"&&location.state.component==="country"?"Add Country":location.state.state==="edit"&&location.state.component==="country"?"Edit Country ":location.state.state==="add"&&location.state.component==="state"?"Add State":location.state.state==="edit"&&location.state.component==="state"?"Edit State":location.state.state==="add"&&location.state.component==="district"?"Add District":location.state.state==="edit"&&location.state.component==="district"?"Edit District ":null}</div>
        </div>
        <div className={styles.countryNameParent}>
          <div className={styles.countryName}>{location.state.component==="country"?"Country Name":location.state.component==="state"?"State Name":location.state.component==="district"?"District Name":null}</div>
          <input  className={styles.countryNameParent1} name="age" type="name" value={value} onChange={(e)=>setValue(e.target.value)} />
        </div>
        <div className={styles.countryCodeParent}>
          <div className={styles.countryCode}>{location.state.component==="country"?"Country Code":location.state.component==="state"?"State Code":location.state.component==="district"?"District Code":null}</div>
          <input  className={styles.countryNameParent1} name="age" type="name" value={value1}onChange={(e)=>setValue1(e.target.value)}  />
        </div>
        {location.state.component==="country"&& <div className={styles.countryNameParent}>
          <div className={styles.countryUrl}>Country URL</div>
          <input  className={styles.countryNameParent1} name="age" type="name" value={value2} onChange={(e)=>setValue2(e.target.value)} />
        </div>}
       
      </section>
      <div className={styles.ellipseDiv} />
      <div className={styles.frameWrapper}>
        <Button
          className={styles.frameButton}
          disableElevation={true}
          variant="contained"
          onClick={()=>hanldeClick()}
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "10.2",
            background: "#32327c",
            borderRadius: "5.805714130401611px",
            "&:hover": { background: "#32327c" },
            width: 145.0999999999999,
            height: 29,
          }}
        >
         
          {location.state.state==="add"?"Save":"Update"}
        </Button>
      </div>
    </div>
  );
};

export default Frame;
