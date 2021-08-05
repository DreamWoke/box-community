import { Col, Popover, Row, Menu, Image, Input } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Icon, { BellFilled, BellOutlined, UserOutlined } from "@ant-design/icons";
import Vat from "@/image/vat.jpg";
import Avatar from "./Avatar";
import "./index.scss";

const { Search } = Input;

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
  const onSearch = () => {
    console.log("search");
  };
  return (
    <Col span={24}>
      <div className="title">
        <Row className="title-row">
          <Col span={2} offset={5} onClick={toMain}>
            <div className="title-row-icon">Box</div>
          </Col>
          <Col span={4}>
            <div className="title-row-nav">
              <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail">首页</Menu.Item>
                <Menu.Item key="app2">分类一</Menu.Item>
                <Menu.Item key="app3">分类二</Menu.Item>
              </Menu>
            </div>
          </Col>
          <Col span={4}>
            <div className="title-row-search">
              <Search placeholder="" allowClear enterButton="搜索" size="middle" onSearch={onSearch} />
            </div>
          </Col>
          <Col span={4}>
            <div className="title-row-right">
              <div className="notifications">
                <BellFilled />
              </div>
              <div className="avatar">
                <Avatar />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Title;
