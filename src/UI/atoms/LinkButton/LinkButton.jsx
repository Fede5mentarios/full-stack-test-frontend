import React from "react";
import { Button } from "antd";

class LinkButton extends React.Component {
	state = { loading: false };

	onButtonClicked = (onClick, afterClick) => {
		return () =>
			this.setState({ loading: true }, () =>
				onClick().then(() =>
					this.setState({ loading: false }, afterClick)
				)
			);
	};

	render() {
		const { loading } = this.state;
		const { text, onClick, afterClick } = this.props;
		return (
			<Button
				type="link"
				onClick={this.onButtonClicked(onClick, afterClick)}
				disabled={loading}
				loading={loading}
			>
				{text}
			</Button>
		);
	}
}

export default LinkButton;
