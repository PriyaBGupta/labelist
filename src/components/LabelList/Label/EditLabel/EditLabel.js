import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

class EditLabel extends Component{
    state = {
        displayColorPicker:false,
        labelColor: '',
        labelName: ''
    }
    componentDidMount(){
        this.setState({
            labelColor: this.props.label.labelColor,
            labelName: this.props.label.labelName
        })
    }
    handleColorChange = ({hex}) =>{
        console.log(hex,'hex');
        this.setState({
            labelColor: hex,
            //displayColorPicker:false
        });
    }
    handleColorPicker = () =>{
        this.setState({displayColorPicker : !this.state.displayColorPicker})
    }
    handleLabel = (event) =>{
        this.setState({labelName:event.target.value});
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
                        <input type="text" className="form-control" placeholder="Enter Label" value={this.state.labelName} onChange={this.handleLabel}/>
                    </div>
                    <div className="col-auto">
                        <button type="button" style={swatchSelected} onClick={this.handleColorPicker} className="btn shadow">{this.state.labelColor ? '':<i className="fa fa-eyedropper"></i>}</button>
                        { this.state.displayColorPicker ? <div style={ popover }>
                            <div onClick={ this.handleClose }/>
                            <TwitterPicker onChangeComplete={this.handleColorChange} color={ this.state.labelColor }/>
                        </div> : null }
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary" onClick={()=>this.props.edit(this.state.labelName, this.state.labelColor, this.props.label.id)}>Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
}

export default EditLabel;