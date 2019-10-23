import React, { useState } from "react";
import { Divider } from "antd";
import Title from "../../atoms/Title/Title";
import PurchaseForm from "../../organism/PurchaseForm/PurchaseForm";
import PurchaseTable from "../../organism/PurchaseTable/PurchaseTable";

function Purchases({ packs }) {
	const [purchases, setPurchases] = useState(undefined);
	return (
		<div>
			<Title text="Pack Prepagos" subtitle="Consulta de compras" />
			<PurchaseForm onResult={setPurchases} />
			<Divider />
			<PurchaseTable purchases={purchases} packs={packs}/>
		</div>
	);
}

export default Purchases;
