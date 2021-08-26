import { Row, Col, Button, Descriptions } from "antd";
import Upload from "@/components/Upload";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./index.less";

const Edit: React.FC = () => {
  const minHeight = 60;
  const maxHeight = 180;
  const [bodyHeight, setBodyHeight] = useState<number>(60);
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
              <Upload
                className="avatar-upload"
                files={[]}
                fileChange={(e) => {
                  console.log(e);
                }}
              />
              <div className="personal-material">
                {
                  <>
                    <div className="personal-material-header">用户名</div>
                    <div className="personal-material-body" style={{ height: bodyHeight }}>
                      <Descriptions column={1}>
                        <Descriptions.Item label="用户名">Meng xing</Descriptions.Item>
                        <Descriptions.Item label="行业">1810000000</Descriptions.Item>
                        <Descriptions.Item label="居住地">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="Address">
                          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
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
                        <Button type="primary" ghost>
                          编辑个人资料
                        </Button>
                      </div>
                    </div>
                  </>
                }
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Edit;
