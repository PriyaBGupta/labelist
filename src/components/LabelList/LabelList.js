import React from 'react';
import Label from './Label/Label';

const LabelList = ({edit, labelList}) => {
    return(
          <div className="list-group">
            {labelList.map(label => {
                return (
                  <Label {...label} key={label.id} edit={edit}/>
                )
            })} 
          </div>
    );
}

export default LabelList;