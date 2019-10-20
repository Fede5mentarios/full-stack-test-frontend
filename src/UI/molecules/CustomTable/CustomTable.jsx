import React from "react";
import { Table, Empty, Spin, Icon, Row, Col } from "antd";
import Title from "../../atoms/Title/Title";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function CustomTable({ text, dataSource, columns }) {
	const isLoading = !dataSource;
	const noData = dataSource === [];
	return (
		<>
			<Title text={text} />
			<Row type="flex" justify="space-around">
				<Col span={22}>
					<Spin indicator={antIcon} spinning={isLoading}>
						{noData ? (
							<Empty />
						) : (
							isLoading || <Table columns={columns} dataSource={dataSource} />
						)}
					</Spin>
				</Col>
			</Row>
		</>
	);
}

export default CustomTable;
