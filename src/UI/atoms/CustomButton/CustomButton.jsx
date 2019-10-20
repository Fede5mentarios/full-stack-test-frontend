import React from "react";
import { Button } from "antd";

function CustomButton({ text, onClick }) {
  return <Button type="primary" onClick={onClick}>{text}</Button>;
}

export default CustomButton;
