import React, { useState } from "react";
import { Drawer } from "antd";

import "./index.css";
import Form from "../Form";

const GetFreeEstimate = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="get-free-estimate-btn" onClick={showDrawer}>
        <p>Get Free</p>
        <p>Estimate</p>
      </div>
      <Drawer
        title="Multi-level drawer"
        width={"34%"}
        open={open}
        onClose={onClose}
        // closable={false}
        zIndex={99999999999999}
        style={{ paddingTop: "40px" }}
      >
        <Form />
      </Drawer>
    </>
  );
};

export default GetFreeEstimate;
