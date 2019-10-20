import React from "react";
import { Button, Spin } from "antd";
import LoadingIcon from "../LoadingIcon";

class LinkButton extends React.Component {
	state = { loading: false };

	onButtonClicked = onClick => {
		return () => this.setState({ loading: true }, () => onClick());
	};

	render() {
		const { loading } = this.state;
		const { text, onClick } = this.props;
		return (
			<Spin indicator={LoadingIcon} spinning={loading}>
				<Button
					type="link"
					onClick={this.onButtonClicked(onClick)}
					disabled={loading}
					loading={loading}
				>
					{text}
				</Button>
			</Spin>
		);
	}
}

export default LinkButton;
