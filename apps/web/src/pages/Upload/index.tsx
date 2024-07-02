import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Upload } from 'antd';
import React from 'react';

const { Dragger } = Upload;

const BigFileUpload: React.FC = () => {
  const handleRequest: UploadProps['customRequest'] = (e) => {
    console.log('======', e);
    const { file } = e;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log('e', e);
    };
    fileReader.readAsText(file as Blob);
  };

  return (
    <Dragger customRequest={handleRequest}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  );
};

export default BigFileUpload;
