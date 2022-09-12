import React from "react";
import styles from "./navbar.module.css";
import images from "../../images/Final_logo.png";
import {useNavigate} from 'react-router-dom';

const header = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  return (
    <div style={{position: 'relative'}} >
      <header>
        <img
          className={styles.imageLogo}
          src={images}
          alt="images"
        />
        <nav 
        // ref={navRef}
        >
          <p onClick={() => {navigate(`/ChiNhanh`)}}>Chi Nhánh</p>
          <p onClick={() => {navigate(`/Kho`)}}> Kho </p>
          <p onClick={() => {navigate(`/ThongKe`)}}> Thống kê</p>
          <p onClick={() => {navigate(`/NhanVien`)}}> Tài khoản</p>
        </nav>
      </header>

      
    </div>
  );
}

export default header;
