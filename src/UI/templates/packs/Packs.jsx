import React, { useState } from "react";
import { Divider, message, Row, Col } from "antd";
import PacksTable from "../../organism/PacksTable/PacksTable";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Title from "../../atoms/Title/Title";
import { getPacks, deletePack } from "../../../APIs/packs";

function Packs() {
	const [packs, setPacks] = useState(undefined);

	const onDelete = packId =>
		deletePack(packId)
			.then(() => getPacks().then(setPacks))
			.catch(err => {
				console.log(err);
				message.error(err);
			});

	if (packs === undefined)
		getPacks()
			.then(setPacks)
			.catch(err => {
				console.log(err);
				message.error(err);
				return setPacks([]);
			});

	return (
		<div>
			<Title
				text="Pack Prepagos"
				subtitle="Bienvenidos al portal de configuración de packs prepagos"
			/>
			<div>
				<Row type="flex" justify="space-around">
					<Col span={3}>
						<CustomButton text="Nuevo Pack" onClick={() => {}} />
					</Col>
					<Col span={3}>
						<CustomButton text="Ver historial Compras" onClick={() => {}} />
					</Col>
				</Row>
			</div>
			<Divider />
			<PacksTable text="Packs Actuales" packs={packs} onDelete={onDelete} />
		</div>
	);
}

export default Packs;
