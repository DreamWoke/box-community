import { PoweroffOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Image } from "antd";
import { logoutThunk } from "@/redux/reducers/login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import Cus from "@/image/customer.png";

interface AvatarProps {
  avatar: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar }: AvatarProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutThunk());
  };

  return (
    <Dropdown
      arrow
      placement="bottomLeft"
      overlayStyle={{ position: "fixed" }}
      overlayClassName="avatar-dropdown"
      overlay={
        <Menu>
          <Menu.Item icon={<UserOutlined />} key="main" onClick={() => history.push("/personal")}>
            个人资料
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />} key="settings">
            设置
          </Menu.Item>
          <Menu.Item icon={<PoweroffOutlined />} key="logout" onClick={logout}>
            退出
          </Menu.Item>
        </Menu>
      }
      trigger={["click"]}
    >
      <Image width={30} preview={false} src={avatar || Cus} />
    </Dropdown>
  );
};

export default Avatar;
