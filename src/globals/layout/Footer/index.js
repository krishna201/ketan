import React, { Component } from "react";

import { Layout } from "antd";
// import moment from "moment";
import "./footer.style.scss";
const { Footer } = Layout;

class MainFooter extends Component {
  render() {
    return (
      <Footer className="globalFooter">
        {/* <span>XXXX © {moment().format("YYYY")} ---- All Rights Reserved</span>
        <div id="footer-tr"></div> */}
      </Footer>
    );
  }
}

export default MainFooter;
