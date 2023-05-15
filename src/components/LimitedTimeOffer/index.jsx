import React, { useState } from "react";
import CustomButton from "../CustomButton";
import "./index.css";

const LimitedTimeOffer = () => {
  const [isLimitedTimeOfferVisible, setisLimitedTimeOfferVisible] =
    useState(true);
  return (
    <>
      {isLimitedTimeOfferVisible && (
        <div className="limited-time-offer-wrapper">
          <div>
            <h2>LIMITED TIME OFFERS!</h2>
            <div>
              <p>For more information</p>
              <CustomButton url={"#"} text={"Click Here"} />
              <h3
                className="LTO-close-btn"
                onClick={() =>
                  setisLimitedTimeOfferVisible(!isLimitedTimeOfferVisible)
                }
              >
                X
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LimitedTimeOffer;
