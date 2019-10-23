import React from "react";
import { Form, Row, Col } from "antd";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import FormInput from "../../molecules/FormInput/FormInput";
import { getPurchases } from "../../../APIs/purchases";

function PurchaseForm({
	form: { getFieldDecorator, validateFields },
	onResult
}) {
	const onSubmit = () =>
		new Promise((resolve, reject) => {
			validateFields((err, values) => {
				if (!err) {
					getPurchases(values["userId"])
						.then(resolve)
						.catch(reject);
				} else {
					reject();
				}
			});
		});

	return (
		<Form>
			<Row type="flex" justify="space-around">
				<Col span={8}>
					<FormInput
						input={{
							type: "text",
							key: "userId",
							rules: [
								{
									len: 10,
									message: "El número de cliente debe tener 10 caracteres"
								}
							]
						}}
						getFieldDecorator={getFieldDecorator}
					/>
				</Col>
				<Col span={4}>
					<Form.Item>
						<LinkButton
							text="Buscar"
							type="primary"
							onClick={onSubmit}
							afterClick={onResult}
						/>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
}

export default Form.create({ name: "search_purchase" })(PurchaseForm);
