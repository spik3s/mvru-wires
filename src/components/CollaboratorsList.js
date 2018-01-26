import React from "react";

const CollaboratorsList = props => {
	var items = [];
	for (var i = 0; i < (props.count || 8); i++) {
		items.push(
			<div key={"collabList-" + i} className="col-6 text-center mb-3">
				<b className="h5">Collaborator Name {i+1}</b>
			</div>
		);
	}
	return (
		<div className={"container my-5 " + props.className}>
			<div className="row">
				<div className="col-12 mb-4 text-center">
					<h3>{props.title || "Our Collaborators"}</h3>
				</div>
			</div>
			<div className="row">{items}</div>
		</div>
	);
};

export default CollaboratorsList;
