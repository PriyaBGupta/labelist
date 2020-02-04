import React,{useState} from 'react';
import EditLabel from './EditLabel/EditLabel';

const Label = ({labelName, labelColor, id, edit}) => {
  const [labelState,setShowEditLabel] = useState({showEditLabel: false});
  const showEditLabelHandler = () => {
    setShowEditLabel({showEditLabel: true});
  }
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col">
          <span className="badge" style={{backgroundColor: labelColor}}>{labelName}</span>
        </div>
        <div className="col-auto">
          <button type="button" className="btn shadow-sm" onClick={showEditLabelHandler}><i className="fa fa-pencil"></i></button>
        </div>
      </div>
      <div className="row">
        {labelState.showEditLabel ? <EditLabel label={{labelName, labelColor, id}} edit={edit}></EditLabel>:null}
      </div>
    </div>
  )
}
export default Label;