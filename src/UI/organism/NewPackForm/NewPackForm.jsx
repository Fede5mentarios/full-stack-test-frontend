import React from "react";
import { Form, Input, Row, Col, Divider } from "antd";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import { createPack } from "../../../APIs/packs";
import NewBoltonFormItem from "../../molecules/NewBoltonFormItem/NewBoltonFormItem";
import { convertToPack, formBasicItems } from "./newPackFormHelper";

function NewPackForm({
	form: { getFieldDecorator, validateFields },
	onResult, packs
}) {

	const onSubmit = () =>
		new Promise((resolve, reject) => {
			validateFields((err, values) => {
				if (!err) {
					createPack(convertToPack(values))
						.then(resolve)
						.catch(reject);
				} else {
					reject();
				}
			});
		});

	return (
		<Form>
			{formBasicItems(packs).map(({ title, key, rules, type }) => (
				<Form.Item label={title} key={key}>
					{getFieldDecorator(key, {
						rules: [{ required: true, message: "Campo obligatorio" }, ...rules]
					})(<Input type={type} />)}
				</Form.Item>
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
