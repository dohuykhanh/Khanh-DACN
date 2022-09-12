import React, { useState } from 'react';
import styles from "./chinhnhanh.module.css";

import DieuHuong from "../../components/DieuHuong/Dieuhuong"
// import {isToggled} from'../../features/ChiNhanh/ChiNhanh'
const TungChiNhanh = () => {
  const [isToggledd, setisToggledd] =useState(false);
  
  var isToggled = localStorage.getItem("Kiemtra")
  const Hovernut = ()=>{
    setisToggledd(true);
  }
  const TatHovernut = ()=>{
    setisToggledd(false);
  }
  return (
    <div>
      <button className="fs" onClick={() => Hovernut()}>mở</button>
      <button className="fx" onClick={() => TatHovernut()}>tắt</button>
      <section>
      {isToggledd && <DieuHuong/>}
      </section>
      
      {/* <a>Code Chuc nang</a> */}
    </div>
  );
}

export default TungChiNhanh;
