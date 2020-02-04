import React from 'react';

const LabelCard = ({label,showEdit}) => {
    return(
        <div className="row">
        <div className="col">
          <span className="badge text-white" style={{backgroundColor: label.labelColor}}>{label.labelName}</span>
        </div>
        <div className="col-auto">
          <button type="button" className="btn shadow-sm" onClick={showEdit}><i className="fa fa-pencil"></i></button>
        </div>
      </div>
    )
}
export default LabelCard;