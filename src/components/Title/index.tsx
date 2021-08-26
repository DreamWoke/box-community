import { Col, Popover, Row, Menu, Image, Input, Switch, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BellOutlined } from "@ant-design/icons";
import loginSlice, { LoginInitialState } from "@/redux/reducers/login";
import darkTheme from "@/style/theme_Json/dark.json";
import lightTheme from "@/style/theme_Json/light.json";
import { RootState } from "@/redux";
import Service from "@/services";
import Avatar from "./Avatar";
import "./index.less";

const { Search } = Input;

const Title: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token, avatar } = useSelector<RootState, RootState["login"]>((state) => state.login);
  const [current, setCurrent] = useState<string>("mail");
  const toMain = () => {
    history.push("/main");
  };
  const onModeSwitch = (mode: boolean) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.less.modifyVars(mode ? darkTheme : lightTheme);
  };
  const handleClick = (e: { key: React.SetStateAction<string> }) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const onSearch = () => {
    console.log("search");
  };
  const loginShow = () => {
    dispatch(loginSlice.actions.updateState({ loginModalVisible: true }));
  };
  useEffect(() => {
    console.log(token);
    token &&
      Service({ url: "getUserInfo", data: {} }).then(({ data }) => {
        dispatch(loginSlice.actions.updateState({ avatar: data.avatar as LoginInitialState["avatar"] }));
      });
  }, [token]);
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
                {token ? (
                  <Avatar avatar={avatar} />
                ) : (
                  <Button type="primary" onClick={loginShow}>
                    登录
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Title;
