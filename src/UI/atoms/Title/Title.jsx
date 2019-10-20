import React from "react";

function Title({ text, subtitle }) {
	return (
		<>
			<p>{text}</p>
			{subtitle && <p>{subtitle}</p>}
		</>
	);
}

export default Title;
