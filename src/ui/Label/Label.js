import React from 'react';

const Label = ({ label, showEdit }) => {
	return (
		<div className="row">
			<div className="col">
				<h5><span className="badge badge-pill text-white" style={{ backgroundColor: label.labelColor }}>{label.labelName}</span></h5>
			</div>
			<div className="col-auto">
				<button type="button" className="btn shadow-sm" onClick={showEdit}><i className="fa fa-pencil"></i></button>
			</div>
		</div>
	)
}
export default Label;