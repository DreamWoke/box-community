import { Row, Col, Button, Descriptions, message } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoThunk } from "@/redux/reducers/user";
import AvatarUpload from "./AvatarUpload";
import EditForm from "./container/EditForm";
import { RootState } from "@/redux";
import { GENDERSTATUS_MAP } from "./constants";
import Service from "@/services";
import "./index.less";

const Edit: React.FC = () => {
  const minHeight = 60;
  const maxHeight = 150;
  const dispatch = useDispatch();
  const [bodyHeight, setBodyHeight] = useState<number>(60);
  const userInfo = useSelector((state: RootState) => state.user);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  return (
    <Row justify="center">
      <Col span={24}>
        <Row>
          <Col span={12} offset={6}>
            <div className="personal">
              <div className="backImg">
                <Button ghost className="backImg-btn">
                  编辑背景图片
                </Button>
              </div>
              <div className="personal-info">
                <AvatarUpload
                  fileImg={userInfo.avatar}
                  fileChange={(e) => {
                    Service({ url: "reviseUserInfo", data: { avatar: e.url, address: "杭州" } }).then(() => {
                      message.success("上传头像成功");
                      dispatch(getUserInfoThunk());
                    });
                  }}
                />
                <div className="personal-material">
                  {
                    <>
                      <div className="personal-material-header">{userInfo.nickName || "-"}</div>
                      <div className="personal-material-body" style={{ height: bodyHeight }}>
                        <Descriptions column={1}>
                          <Descriptions.Item label="用户名">{userInfo.nickName || "-"}</Descriptions.Item>
                          <Descriptions.Item label="性别">{GENDERSTATUS_MAP[userInfo.gender] || "-"}</Descriptions.Item>
                          <Descriptions.Item label="行业">{userInfo.industry || "-"}</Descriptions.Item>
                          <Descriptions.Item label="居住地">{userInfo.address || "-"}</Descriptions.Item>
                        </Descriptions>
                      </div>
                      <div className="personal-material-footer">
                        <div className="personal-material-footer-view">
                          {bodyHeight > minHeight ? (
                            <span onClick={() => setBodyHeight(minHeight)}>
                              收起更多资料
                              <UpOutlined />
                            </span>
                          ) : (
                            <span onClick={() => setBodyHeight(maxHeight)}>
                              查看更多资料
                              <DownOutlined />
                            </span>
                          )}
                        </div>
                        <div className="personal-material-footer-btn">
                          <Button type="primary" ghost onClick={() => setFormVisible(true)}>
                            编辑个人资料
                          </Button>
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
            {formVisible && <EditForm onCancel={() => setFormVisible(false)} />}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Edit;
