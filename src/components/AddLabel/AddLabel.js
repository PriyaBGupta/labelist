import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

class AddLabel extends Component{
    state = {
        displayColorPicker: false,
        labelColor: '',
        labelName: ''
    }
    handleColorChange = ({hex}) => {
        this.setState({
            labelColor: hex,
            //displayColorPicker: false
        });
    }
    handleColorPicker = () => {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    }
    handleLabel = (event) => {
        this.setState({labelName: event.target.value});
    }
    render(){
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const swatchSelected = {
            backgroundColor: this.state.labelColor,
            width: '40px',
            height: '40px'
        }
    return(
        <div className="row flex-column px-3">
            <form autoComplete="off">
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter Label" onChange={this.handleLabel}/>
                    </div>
                    <div className="col-auto">
                        <button type="button" style={swatchSelected} onClick={this.handleColorPicker} className="btn shadow">{this.state.labelColor ? '':<i className="fa fa-eyedropper"></i>}</button>
                        { this.state.displayColorPicker ? <div style={ popover }>
                            <div onClick={ this.handleClose }/>
                            <TwitterPicker onChangeComplete={this.handleColorChange} color={this.state.labelColor}/>
                        </div> : null }
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary" onClick={()=>this.props.add(this.state.labelName,this.state.labelColor)}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
}

export default AddLabel;