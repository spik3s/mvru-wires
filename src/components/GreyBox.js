import React from "react";

const GreyBox = props => {
	return (
		<div
			style={{
				paddingBottom: props.height|| "66%",
				background: props.colour || "grey",
				marginBottom: props.marginBottom || "0"
			}}
		/>
	);
};

export default GreyBox;
