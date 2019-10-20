import React from "react";
import { Row } from "antd";

function Title({ text, subtitle }) {
	return (
		<>
			<Row type="flex" justify="center">
				<p>{text}</p>
			</Row>
			{subtitle && (
				<Row type="flex" justify="center">
					<p>{subtitle}</p>
				</Row>
			)}
		</>
	);
}

export default Title;
