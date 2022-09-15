import React from "react";

export default function Footer() {

    let fullYear = new Date().getFullYear();
    
  return (
    <nav  className="navbar-dark bg-dark position-absolute bottom-0" id="footer">
        <div className="text-center text-muted" >
            <p style={{ color: "white", paddingTop:"8px"}} >{fullYear}-{fullYear + 1}, All Rights Reserved by "One Brain Cell"</p>
        </div>
    </nav>
  );
}
 