import React from 'react';
import LabelCard from './LabelCard/LabelCard';

const LabelList = ({ edit, labelList }) => {
	return (
		<div className="list-group">
			{labelList.map(label => {
				return (
					<LabelCard {...label} key={label.id} edit={edit} />
				)
			})}
		</div>
	);
}

export default LabelList;