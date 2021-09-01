import Service from "@/services";
import { Button, Form, Input, message, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "./index.less";
import { getUserInfoThunk } from "@/redux/reducers/user";
import { RootState } from "@/redux";

interface EditFormProps {
  onCancel: () => void;
}

interface EditFormData {
  nickName: string;
  gender: string;
  industry: string;
  address: string;
}

const EditForm: React.FC<EditFormProps> = (props: EditFormProps) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.user);
  const onSubmit = (val: EditFormData) => {
    Service({ url: "reviseUserInfo", data: val }).then(() => {
      message.success("已修改");
      dispatch(getUserInfoThunk());
      props.onCancel();
    });
  };
  return (
    <div className="userInfo-edit-form">
      <Form name="userInfoForm" labelAlign="left" labelCol={{ span: 2 }} onFinish={onSubmit} initialValues={userInfo}>
        <Form.Item label="用户名" name="nickName" rules={[{ required: true, message: "请输入用户名!" }]}>
          <Input placeholder="请输入用户名称" />
        </Form.Item>
        <Form.Item label="性别" name="gender" rules={[{ required: true, message: "请选择性别!" }]}>
          <Radio.Group>
            <Radio value="1">男</Radio>
            <Radio value="2">女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="行业" name="industry" rules={[{ required: true, message: "请输入行业!" }]}>
          <Input placeholder="请输入行业名称" />
        </Form.Item>
        <Form.Item label="居住地" name="address" rules={[{ required: true, message: "请输入居住地!" }]}>
          <Input placeholder="请输入居住地" />
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
            确认修改
          </Button>
          <Button onClick={props.onCancel}>取消</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditForm;
