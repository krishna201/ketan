import React from "react";
import { Layout } from "antd";
import "./index.scss";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
const { Content } = Layout;

const AppLayout = props => {
  return (
    <Layout className="main-layout">
      <Layout>
        <Header {...props} />
        <Content>{props.children}</Content>
        <Footer className="main-footer" />
      </Layout>
    </Layout>
  );
};
export default AppLayout;
