import React, { useState } from "react";
import { Divider, Row, Col } from "antd";
import PacksTable from "../../organism/PacksTable/PacksTable";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Title from "../../atoms/Title/Title";
import { getPacks } from "../../../APIs/packs";

function Packs() {
	const [packs, setPacks] = useState(undefined);

	if (packs === undefined)
		getPacks()
			.then(setPacks)
			.catch(err => {
				console.log(err);
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
					<Col span={6}>
						<CustomButton text="Nuevo Pack" onClick={() => {}} />
					</Col>
					<Col span={6}>
						<CustomButton text="Ver historial Compras" onClick={() => {}} />
					</Col>
				</Row>
			</div>
			<Divider />
			<PacksTable text="Packs Actuales" packs={packs} />
		</div>
	);
}

export default Packs;
