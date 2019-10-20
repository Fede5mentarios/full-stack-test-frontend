import React from "react";
import CustomTable from "../../molecules/CustomTable/CustomTable";
import LinkButton from "../../atoms/LinkButton/LinkButton";

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
		dataIndex: "action",
		key: "action"
	}
];

function PacksTable({ text, packs, onDelete, afterDelete }) {
	const renderAction = ({ purchases, id }) =>
		purchases.length === 0 ? (
			<LinkButton text="Eliminar" onClick={() => onDelete(id)} afterClick={afterDelete}/>
		) : (
			<p></p>
		);

	const convertPacksDTOInTableRow = pack =>
		Object.assign({}, pack, {
			action: renderAction(pack)
		});

	const rows = packs && packs.map(convertPacksDTOInTableRow);
	return (
		<CustomTable text={text} dataSource={rows} columns={packTableColums} />
	);
}

export default PacksTable;
