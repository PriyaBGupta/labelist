import React from 'react';

const AddButton = (props) => {
  return (
    <div className="row justify-content-end">
      <div className="col-auto">
        <button type="button" className="btn circular-red-button shadow-sm" onClick={props.click}>
          <i className="fa fa-plus fa-sm"></i>
        </button>
      </div>
    </div>
  )
}

export default AddButton;