import React, { useState } from "react";
import { Upload, Button, Image } from "antd";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";
import { UploadOutlined } from "@ant-design/icons";
import Service from "@/services";
import "./index.less";

interface PicturesWallPropType {
  fileImg: string;
  fileChange: (files: { url: string }) => void;
}

const PicturesWall: React.FC<PicturesWallPropType> = (props: PicturesWallPropType) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const upload = (files: any) => {
    const formData = new FormData();
    formData.append("file", files.file);
    Service({
      url: "upload",
      baseURL: "api",
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    }).then(({ data }) => {
      props.fileChange({ url: data.url });
    });
  };

  return (
    <>
      <div className="avatar-upload" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        <Image src={props.fileImg} preview={false} className="avatar-upload-img" />
        {visible && (
          <Upload listType="text" className="avatar-upload-btn" customRequest={upload}>
            <Button icon={<UploadOutlined />} ghost>
              点击修改头像
            </Button>
          </Upload>
        )}
      </div>
    </>
  );
};

export default PicturesWall;
