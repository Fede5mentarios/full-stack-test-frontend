import React from "react";
import CustomTable from "../../molecules/CustomTable/CustomTable";
import moment from "moment";

const packTableColums = [
	{
		title: "Pack",
		dataIndex: "packName",
		key: "packName"
	},
	{
		title: "Costo",
		dataIndex: "packCost",
		key: "packCost"
	},
	{
		title: "Fecha de Compra",
		dataIndex: "date",
		key: "date"
	}
];

function PurchaseTable({ text, purchases, packs }) {
	const convertPacksDTOInTableRow = purchase => {
		const pack = packs.find(it => it.id === purchase.packId);
		return {
			packName: pack.name,
			packCost: pack.cost,
			date: moment(purchase.transactionDate).toLocaleString()
		};
	};

	const rows = purchases && purchases.map(convertPacksDTOInTableRow);
	return (
		<CustomTable text={text} dataSource={rows} columns={packTableColums} />
	);
}

// export default connect(
// 	(state, ownProps) => ({
// 		packs: state.packs,
// 		...ownProps
// 	}),
// 	null
// )(PurchaseTable);
export default PurchaseTable