import React from "react";
import { Button } from "antd";
import CustomTable from "../../molecules/CustomTable/CustomTable";

const packTableColums = [
	{
		title: "Id",
		dataIndex: "id",
		key: "id"
	},
	{
		title: "Nombre",
		dataIndex: "name",
		key: "name"
	},
	{
		title: "Costo",
		dataIndex: "cost",
		key: "cost"
	},
	{
		title: "Acción",
		dataIndex: "canBeDeleted",
		key: "canBeDeleted",
		render: canBeDeleted =>
			canBeDeleted ? <Button type="link">Eliminar</Button> : <p></p>
	}
];

const convertPacksDTOInTableRow = pack =>
	Object.assign({}, pack, {
		canBeDeleted: pack.purchases.length === 0
	});

function PacksTable({ text, packs }) {
	const rows = packs && packs.map(convertPacksDTOInTableRow);
	return (
		<CustomTable text={text} dataSource={rows} columns={packTableColums} />
	);
}

export default PacksTable;
