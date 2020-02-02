import React from 'react';
import Label from './Label/Label';

const LabelList = ({edit, labelList}) => {
    return(
          <div className="list-group">
            {labelList.map(label => {
                return (
                  <Label {...label} key={label.labelName} edit={edit}/>
                )
            })} 
          </div>
    );
}

export default LabelList;