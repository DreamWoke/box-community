import { Col, Row } from "antd";
import React, { useState } from "react";
import { Menu, Avatar } from "antd";
import { useHistory } from "react-router-dom";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import "./index.scss";

const Title: React.FC = () => {
  const history = useHistory();
  const [current, setCurrent] = useState<string>("mail");
  const toMain = () => {
    history.push("/main");
  };
  const handleClick = (e: { key: React.SetStateAction<string> }) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Col span={24}>
      <div className="title">
        <Row className="title-row">
          <Col span={2} offset={4} onClick={toMain}>
            <div className="title-row-icon">Box</div>
          </Col>
          <Col span={8}>
            <div className="title-row-nav">
              <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail">首页</Menu.Item>
                <Menu.Item key="app2">分类一</Menu.Item>
                <Menu.Item key="app3">分类二</Menu.Item>
              </Menu>
            </div>
            <div className="title-row-search"></div>
          </Col>
          <Col span={4}>
            <div className="title-row-right">
              <div className="notifications">
                <BellOutlined />
              </div>
              <div className="">
                <Avatar shape="square" size={30} icon={<UserOutlined />} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Title;
