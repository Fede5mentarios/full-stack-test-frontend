import React from "react";
import { Divider } from "antd";

import PacksTable from "../../organism/PacksTable/PacksTable";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Title from "../../atoms/Title/Title";

function Packs() {
	return (
		<div>
			<Title
				text="Pack Prepagos"
				subtitle="Bienvenidos al portal de configuración de packs prepagos"
			/>
			<div>
				<CustomButton text="Nuevo Pack" onClick={() => {}} />
				<CustomButton text="Nuevo Pack" onClick={() => {}} />
			</div>
			<Divider />
			<PacksTable text="Packs Actuales" packs={[]} />
		</div>
	);
}

export default Packs;
