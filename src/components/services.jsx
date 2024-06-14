import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Memberships</h2>
          <p>
          We offer memberships tailored to fit your fitness needs and goals. Choose the tier that suits you best and unlock a world of opportunities to transform your body and mind.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <p>{d.text2}</p>
                    
                  </div>
                  
                </div>
                
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
