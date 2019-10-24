import React from "react";
import { Divider, Row, Col, Button } from "antd";
import Title from "../../atoms/Title/Title";

function Root() {
	return (
		<div>
			<Title text="Pack Prepagos" subtitle="Bienvenidos al portal de Packs" />
			<Row type="flex" justify="space-around">
				<Col span={3}>
					<Button type="primary" href="/config">
						Ver Packs
					</Button>
				</Col>
				<Col span={3}>
					<Button type="primary" href="/compras">
						Ver Compras
					</Button>
				</Col>
			</Row>
			<Divider />
		</div>
	);
}

export default Root;
