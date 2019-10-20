import React from "react";
import { Table, Empty, Spin, Icon } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function CustomTable({ text, dataSource, columns }) {
	const isLoading = dataSource === undefined;
	const noData = dataSource === [];
	return (
		<>
			<p>{text}</p>
			<Spin indicator={antIcon} spinning={isLoading}>
				{noData ? (
					<Empty />
				) : (
					<Table columns={columns} dataSource={dataSource} />
				)}
			</Spin>
		</>
	);
}

export default CustomTable;
