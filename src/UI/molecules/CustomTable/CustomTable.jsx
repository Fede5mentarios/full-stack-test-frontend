import React from "react";
import { Table, Empty, Spin, Row, Col } from "antd";
import Title from "../../atoms/Title/Title";
import LoadingIcon from "../../atoms/LoadingIcon";

function CustomTable({ text, dataSource, columns }) {
	const isLoading = !dataSource;
	const noData = dataSource === [];
	return (
		<>
			<Title text={text} />
			<Row type="flex" justify="space-around">
				<Col span={22}>
					<Spin indicator={LoadingIcon} spinning={isLoading}>
						{noData ? (
							<Empty />
						) : (
							isLoading || (
								<Table
									loading={isLoading}
									bordered={true}
									columns={columns}
									dataSource={dataSource}
									pagination={false}
								/>
							)
						)}
					</Spin>
				</Col>
			</Row>
		</>
	);
}

export default CustomTable;
