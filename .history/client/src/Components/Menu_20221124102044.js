// import "./Menu.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Menu() {

    return (
      <div style={{display:"flex", justifyContent: "center", paddingBottom: 1000}}>
        <p style={{paddingRight: 250, fontSize: 70}}>Menus</p>

        {/* TIME DROPDOWN MENU */}
        <button style={{padding: 10}}>time</button>

        {/* DINING HALL DROPDOWN MENU */}
        <button style={{padding: 10}} >dining hall</button>
      </div>
    );
  }
  
  export default Menu;