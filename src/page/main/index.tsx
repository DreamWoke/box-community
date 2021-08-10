import React from "react";
import ArticleList from "@/page/main/container/ArticleList";
import { Col, Row } from "antd";
import "./index.scss";
import Sidebar from "./container/Sidebar";

const MainPage: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Row>
          <Col span={8} offset={6}>
            <ArticleList />
          </Col>
          <Col span={4}>
            <Sidebar />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainPage;
