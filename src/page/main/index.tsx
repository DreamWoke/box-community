import React from "react";
import Title from "@/components/Title";
import ArticleList from "@/page/main/container/ArticleList";
import { Col, Row } from "antd";
import "./index.scss";

const MainPage: React.FC = () => {
  return (
    <Row justify="center">
      <Title />
      <Col span={24}>
        <Row>
          <Col span={8} offset={6}>
            <ArticleList />
          </Col>
          <Col span={5}>侧栏</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainPage;
