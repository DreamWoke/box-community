import { Col, Popover, Row, Menu, Image, Input, Switch } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BellOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Avatar from "./Avatar";
import darkTheme from "@/style/theme_Json/dark.json";
import lightTheme from "@/style/theme_Json/light.json";
import "./index.less";

const { Search } = Input;

const Title: React.FC = () => {
  const history = useHistory();
  const [current, setCurrent] = useState<string>("mail");
  const [theme, setTheme] = useState<string>("");
  const toMain = () => {
    console.log("toMain");
  };
  const onModeSwitch = (mode: boolean) => {
    if (mode) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.less.modifyVars(darkTheme);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      window.less.modifyVars(lightTheme);
    }
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
          <Col span={1} onClick={toMain}>
            <div className="title-row-icon">Box</div>
          </Col>
          <Col span={6} offset={5}>
            <div className="title-row-nav">
              <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail">首页</Menu.Item>
                <Menu.Item key="app2">推荐</Menu.Item>
                <Menu.Item key="app3">分类一</Menu.Item>
                <Menu.Item key="app4">分类二</Menu.Item>
              </Menu>
            </div>
          </Col>
          <Col span={4} offset={2}>
            <div className="title-row-search">
              <Search placeholder="" allowClear enterButton="搜索" size="middle" onSearch={onSearch} />
            </div>
          </Col>
          <Col span={6}>
            <div className="title-row-right">
              <div className="switch-mode">
                <Switch
                  onChange={onModeSwitch}
                  // checkedChildren={<CheckOutlined />}
                  // unCheckedChildren={<CloseOutlined />}
                  defaultChecked={false}
                />
              </div>
              <div className="notifications">
                <BellOutlined />
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
