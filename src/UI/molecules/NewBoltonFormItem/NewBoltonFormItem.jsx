import React, { useState } from "react";
import { Form, Input, Row, Col, Select, message, Button } from "antd";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { BoltonTypes } from "../../../utils/constants";
import { createEmptyBolton } from "./boltonFormItemHelper";

const { Option } = Select;

function NewBoltonFormItem({ getFieldDecorator }) {
	const [boltons, setBoltons] = useState([{ key: "0" }]);

	const addBolton = () => {
		if (boltons.length < 3) {
			setBoltons([...boltons, createEmptyBolton(boltons)]);
		} else {
			message.warning("No se pueden agregar mas tipos de bonos");
		}
	};

	const removeBolton = toRemove => {
		if (boltons.length > 1) {
			setBoltons(boltons.filter(it => it.key !== toRemove));
		} else {
			message.warning("Debe haber siempre un bono como mínimo");
		}
	};

	return (
		<>
			{boltons.map(({ key }) => (
				<Form.Item label={"bono"} key={`bolton-${key}`}>
					{getFieldDecorator(`bolton-${key}`, {
						rules: [{ required: true, message: "Campo obligatorio" }]
					})(
						<Input
							addonBefore={getFieldDecorator(`boltonType-${key}`, {
								initialValue: "SMS"
							})(
								<Select>
									{Object.keys(BoltonTypes).map(type => (
										<Option key={`boltonType-${key}-${type}`} value={type}>
											{type}
										</Option>
									))}
								</Select>
							)}
							type={"number"}
							addonAfter={
								<Button type="link" onClick={() => removeBolton(key)}>
									Quitar Bono
								</Button>
							}
						/>
					)}
				</Form.Item>
			))}
			<Form.Item>
				<Row type="flex" justify="end">
					<Col span={4}>
						<CustomButton
							text="Agregar Bono"
							type="primary"
							onClick={addBolton}
						/>
					</Col>
					<Col span={4} />
				</Row>
			</Form.Item>
		</>
	);
}

export default NewBoltonFormItem;
