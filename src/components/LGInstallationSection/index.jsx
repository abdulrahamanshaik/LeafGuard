import React from "react";
import CustomBTN from "../CustomBTN";
import "./index.css";

const LGInstallationSection = () => {
  return (
    <div className="LGIS">
      <h1>LeafGuard Gutters Easy Installation: 3 Simple Steps</h1>
      <div className="LGI-card">
        <div className="imgs">
          <img
            src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/homepage-video-thumbnail/2023-03/homepageinspect-measure-install-latest-2.jpg"
            alt="LGIS"
          />
        </div>
        <div className="LGI-cc">
          <h2>Inspect. Measure. Install.</h2>
          <p className="LGI-cc-p">
            LeafGuard is custom fit by our professional installers to the exact
            specifications of your home. No need to worry about performance, fit
            or unsightly seams. With LeafGuard enjoy clog free gutters
            guaranteed. Get it and Forget it!
          </p>
          <div className="dis">
            <div className="">
              <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-03/check-and-remove-old-gutter.png"
                alt="Leaves"
              />
              <h4>Step1</h4>
              <p>Check and remove old gutter</p>
            </div>
            <div>
              <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-03/fabricate-customized-gutter-onsite.png"
                alt="Leaves"
              />
              <h4>Step2</h4>
              <p>Fabricate customized gutter onsite</p>
            </div>
            <div>
              <img
                src="https://marvel-b1-cdn.bc0a.com/f00000000244723/www.leafguard.com/sites/default/files/2020-03/easy-installation-in-a-day.png"
                alt="Leaves"
              />
              <h4>Step3</h4>
              <p>Easy installation in one day</p>
            </div>
          </div>
          <div className="custom-btn-wrapper">
            <CustomBTN text={"Learn More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LGInstallationSection;
