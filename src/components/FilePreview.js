import React from "react";

const FilePreview = ({ fileUrl }) => {
  return (
    <div>
      <img src={fileUrl} alt="File Preview" />
    </div>
  );
};

export default FilePreview;
