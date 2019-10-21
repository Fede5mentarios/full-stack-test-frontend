import React from "react";
import { Button } from "antd";

class LinkButton extends React.Component {
	state = { loading: false };

	onButtonClicked = (onClick, afterClick) => {
		return () =>
			this.setState({ loading: true }, () =>
				onClick()
				.then(result =>
					this.setState({ loading: false }, () => afterClick(result))
				).catch(() =>
					this.setState({ loading: false })	
				)				
			);
	};

	render() {
		const { loading } = this.state;
		const { text, onClick, afterClick, type = "link" } = this.props;
		return (
			<Button
				type={type}
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
