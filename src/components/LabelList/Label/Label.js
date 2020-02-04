import React, { useState } from 'react';
import EditLabel from './EditLabel/EditLabel';
import LabelCard from '../../../ui/LabelCard/LabelCard'

const Label = ({ labelName, labelColor, id, edit }) => {
	const [labelState, setShowEditLabel] = useState({ showEditLabel: false });
	const showEditLabelHandler = () => {
		setShowEditLabel({ showEditLabel: !labelState.showEditLabel });
	}
	return (
		<div className="list-group-item">
			<LabelCard label={{ labelName, labelColor }} showEdit={showEditLabelHandler} />
			{labelState.showEditLabel ? <EditLabel label={{ labelName, labelColor, id }} edit={edit}></EditLabel> : null}
		</div>
	)
}
export default Label;