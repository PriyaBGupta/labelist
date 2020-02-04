import React, { useState } from 'react';
import EditLabel from './EditLabel/EditLabel';
import Label from '../../../ui/Label/Label'

const LabelCard = ({ labelName, labelColor, id, edit }) => {
	const [labelState, setShowEditLabel] = useState({ showEditLabel: false });
	const showEditLabelHandler = () => {
		setShowEditLabel({ showEditLabel: !labelState.showEditLabel });
	}
	const closeEditHandler = () => {
		setShowEditLabel({ showEditLabel: false});
	}
	return (
		<div className="list-group-item">
			<Label label={{ labelName, labelColor }} showEdit={showEditLabelHandler} />
			{labelState.showEditLabel ? <EditLabel 
			label={{ labelName, labelColor, id }} 
			edit={edit} 
			closeEdit={closeEditHandler}/> : null}
		</div>
	)
}
export default LabelCard;