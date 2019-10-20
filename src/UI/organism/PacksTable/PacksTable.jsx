import React from "react";

import CustomTable from "../../molecules/CustomTable/CustomTable";

const packTableColums = [
	{
		title: "Id",
		dataIndex: "id",
		key: "id"
	},
	{
		title: "Nombre",
		dataIndex: "nombre",
		key: "nombre"
	},
	{
		title: "Costo",
		dataIndex: "costo",
		key: "costo"
	},
	{
		title: "Acción",
		dataIndex: "accion",
		key: "accion"
	}
];

function PacksTable({ text, packs }) {
	return (
		<CustomTable text={text} dataSource={packs} columns={packTableColums} />
	);
}

export default PacksTable;
