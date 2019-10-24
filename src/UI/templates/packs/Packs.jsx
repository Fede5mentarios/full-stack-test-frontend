import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Divider, message, Row, Col } from "antd";
import PacksTable from "../../organism/PacksTable/PacksTable";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Title from "../../atoms/Title/Title";
import { deletePack } from "../../../APIs/packs";
import NewPackModal from "../../organism/NewPackModal/NewPackModal";

function Packs({ fetchPacks, packs }) {
	const [showPurchases, goToPurchases] = useState(false);
	const onDelete = packId =>
		deletePack(packId).catch(err => {
			message.error(err.message);
		});

	return showPurchases ? (
		<Redirect
			to={{
				pathname: "/compras",
				path: "/compras"
			}}
		/>
	) : (
		<div>
			<Title
				text="Pack Prepagos"
				subtitle="Bienvenidos al portal de configuración de packs prepagos"
			/>
			<div>
				<Row type="flex" justify="space-around">
					<Col span={3}>
						<NewPackModal onResult={fetchPacks} packs={packs} />
					</Col>
					<Col span={3}>
						<CustomButton
							text="Ver historial Compras"
							onClick={() => goToPurchases(true)}
						/>
					</Col>
				</Row>
			</div>
			<Divider />
			<PacksTable
				text="Packs Actuales"
				packs={packs}
				onDelete={onDelete}
				afterDelete={fetchPacks}
			/>
			)}
		</div>
	);
}

export default Packs;
