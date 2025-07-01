import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/udaya.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Udayashri Annoju</h4>
          <h6>Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            
            Udayashri built this Zerodha clone project to deepen her understanding of modern web development 
            and trading platforms. This project is a tribute to how technology can simplify investing.
            
          </p>
          <p>
            Passionate about frontend development, focused on building clean, responsive, 
            and user-friendly interfaces.
          </p>
          <p>Coding with a cup of coffee is her zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;