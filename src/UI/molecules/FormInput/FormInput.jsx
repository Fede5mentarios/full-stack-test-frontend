import React from "react";
import { Form, Input } from "antd";

const FormInput = ({
	input: { title, key, rules = [], type },
	getFieldDecorator
}) => (
	<Form.Item label={title} key={key}>
		{getFieldDecorator(key, {
			rules: [{ required: true, message: "Campo obligatorio" }, ...rules]
		})(<Input type={type} />)}
	</Form.Item>
);

export default FormInput;
