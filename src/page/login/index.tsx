import React from "react";
import { RootState } from "@/redux";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import loginSlice from "@/redux/reducers/login";
import { useSelector, useDispatch } from "react-redux";
import Service from "@/services";
import "./index.less";

const LoginModal: React.FC = () => {
  const dispatch = useDispatch();
  const { loginModalVisible } = useSelector<RootState, RootState["login"]>((state) => state.login);
  const handleCancel = () => {
    dispatch(loginSlice.actions.updateState({ loginModalVisible: false }));
    Service({ url: "login", data: "" }).then((res) => {
      console.log(res);
    });
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Modal
        title={<div style={{ textAlign: "center" }}>登录</div>}
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
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="密码" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" labelAlign="right">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
