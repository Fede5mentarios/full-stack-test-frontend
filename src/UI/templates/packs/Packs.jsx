import React from "react";
import { Divider, message, Row, Col } from "antd";
import PacksTable from "../../organism/PacksTable/PacksTable";
import Title from "../../atoms/Title/Title";
import { deletePack } from "../../../APIs/packs";
import NewPackModal from "../../organism/NewPackModal/NewPackModal";

function Packs({ fetchPacks, packs }) {
	const onDelete = packId =>
		deletePack(packId).catch(err => {
			message.error(err.message);
		});

	return (
		<>
			<Title
				text="Pack Prepagos"
				subtitle="Bienvenidos al portal de configuración de packs prepagos"
			/>
			<Row justify="center">
				<Col span={8} />
				<Col span={8}>
					<NewPackModal onResult={fetchPacks} packs={packs} />
				</Col>
				<Col span={8} />
			</Row>
			<Divider />
			<PacksTable
				text="Packs Actuales"
				packs={packs}
				onDelete={onDelete}
				afterDelete={fetchPacks}
			/>
			)}
		</>
	);
}

export default Packs;
