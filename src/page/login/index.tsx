import React from "react";
import { RootState } from "@/redux";
import { Modal, Form, Input, Button, Checkbox, message } from "antd";
import loginSlice from "@/redux/reducers/login";
import { useSelector, useDispatch } from "react-redux";
import Service from "@/services";
import "./index.less";
import Cookies from "js-cookie";

const LoginModal: React.FC = () => {
  const dispatch = useDispatch();
  const { loginModalVisible } = useSelector<RootState, RootState["login"]>((state) => state.login);
  const handleCancel = () => {
    dispatch(loginSlice.actions.updateState({ loginModalVisible: false }));
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const { name, password } = values;
    Service({ url: "login", data: { name, password } }).then(({ data }) => {
      message.success("登录成功");
      // update redux loginInfo
      dispatch(loginSlice.actions.updateState({ token: data.token, loginModalVisible: false }));
      // save cookie
      Cookies.set("token", data.token);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        title={<div style={{ textAlign: "center" }}>注册/登录</div>}
        centered={true}
        width={400}
        footer={null}
        maskClosable={false}
        visible={loginModalVisible}
        onCancel={handleCancel}
      >
        <Form
          className="login-form"
          name="loginForm"
          labelAlign="left"
          labelCol={{ span: 6, offset: 2 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="用户名" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="密码" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
