import React from "react";

function Footer() {
  return (
    <footer className="py-5 bg-dark footer-color  border-0">
      <div className="container text-center ">
     
       <br/>
        <p className="m-0 text-center fst-normal text-white">
          Copyright ©{" "}
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: " #32CD32",
              fontWeight: "bold",
            }}
          >
           <img className="text-center" src="/video/logo.png" alt="logo" style={{width:"25px"}}/>
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;