import { PoweroffOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Image } from "antd";
import React from "react";
import Vat from "@/image/vat.jpg";
const Avatar: React.FC = () => {
  return (
    <Dropdown
      arrow
      placement="bottomCenter"
      overlayStyle={{ position: "fixed" }}
      overlayClassName="avatar-dropdown"
      overlay={
        <Menu>
          <Menu.Item icon={<UserOutlined />} key="main">
            我的主页
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />} key="settings">
            设置
          </Menu.Item>
          <Menu.Item icon={<PoweroffOutlined />} key="logout">
            退出
          </Menu.Item>
        </Menu>
      }
      trigger={["click"]}
    >
      <Image width={30} preview={false} src={Vat} />
    </Dropdown>
  );
};

export default Avatar;
