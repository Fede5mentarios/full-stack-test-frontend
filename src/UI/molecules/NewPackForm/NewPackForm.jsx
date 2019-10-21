import React, { useState } from "react";
import { Form, Input, Row, Col, Select, message, Button, Divider } from "antd";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import { createPack } from "../../../APIs/packs";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import { BoltonTypes } from "../../../utils/constants";

const { Option } = Select;

const formBasicItems = [
	{
		title: "Nombre",
		type: "text",
		key: "name",
		// TODO validate unic name
		rules: [{ validator: (rule, value, callback) => callback() }]
	},
	{
		title: "Costo",
		type: "number",
		key: "cost",
		unit: "ARG",
		// TODO validate min 0 and numeric
		rules: [{ validator: (rule, value, callback) => callback() }]
	},
	{
		title: "Vigencia",
		key: "days",
		type: "integer",
		// TODO validate min 0 and int
		rules: [{ validator: (rule, value, callback) => callback() }]
	}
];

const convertToPack = values => {
	console.log(values);
	const boltons = Object.keys(values)
		.filter(it => it.startsWith("bolton-"))
		.map(boltonKey => {
			const key = boltonKey.split("-").pop();
			return {
				amount: values[`bolton-${key}`],
				type: values[`boltonType-${key}`]
			};
		});
	const packDTO = Object.assign({}, values, {
		boltons,
		purchases: []
	});
	console.log(packDTO);
	return packDTO;
};

const createEmptyBolton = boltons => {
	const lastBolton = boltons.pop();
	return { key: `${Number(lastBolton.key) + 1}` };
};

function NewPackForm({
	form: { getFieldDecorator, validateFields },
	onResult
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
		<Form>
			{formBasicItems.map(({ title, key, rules, type }) => (
				<Form.Item label={title} key={key}>
					{getFieldDecorator(key, {
						rules: [{ required: true, message: "Campo obligatorio" }, ...rules]
					})(<Input type={type} />)}
				</Form.Item>
			))}
			<Divider />
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
										<Option value={type}>{type}</Option>
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
