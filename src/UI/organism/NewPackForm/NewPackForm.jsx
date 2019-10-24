import React from "react";
import { Form, Row, Col, Divider, message } from "antd";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import { createPack } from "../../../APIs/packs";
import NewBoltonFormItem from "../../molecules/NewBoltonFormItem/NewBoltonFormItem";
import { convertToPack, formBasicItems } from "./newPackFormHelper";
import FormInput from "../../molecules/FormInput/FormInput";

function NewPackForm({
	form: { getFieldDecorator, validateFields },
	onResult,
	packs
}) {
	const onSubmit = () =>
		new Promise((resolve, reject) => {
			validateFields((err, values) => {
				if (!err) {
					try {
						createPack(convertToPack(values))
							.then(resolve)
							.catch(reject);
					} catch (e) {
						message.error(e.message);
						reject(e);
					}
				} else {
					reject();
				}
			});
		});
	return (
		<Form>
			{formBasicItems(packs).map(input => (
				<FormInput
					key={input.key}
					input={input}
					getFieldDecorator={getFieldDecorator}
				/>
			))}
			<Divider />
			<NewBoltonFormItem getFieldDecorator={getFieldDecorator} />
			<Divider />
			<Form.Item>
				<Row type="flex" justify="end">
					<Col span={4}>
						<LinkButton
							text="Crear Pack"
							type="primary"
							onClick={onSubmit}
							afterClick={onResult}
						/>
					</Col>
					<Col span={4} />
				</Row>
			</Form.Item>
		</Form>
	);
}

export default Form.create({ name: "new_pack" })(NewPackForm);
