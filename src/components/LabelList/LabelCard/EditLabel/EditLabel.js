import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

class EditLabel extends Component {
    state = {
        displayColorPicker: false,
        labelColor: '',
        labelName: '',
        labelColorValid: false,
        labelNameValid: false,
        labelColorTouched: false,
        labelNameTouched: false,
        formValid: false
    }
    checkValidity(value) {
        return value.trim() !== '';
    }
    validateForm() {
        this.setState({ formValid: this.state.labelNameValid && this.state.labelColorValid });
    }
    componentDidMount() {
        this.setState({
            labelColor: this.props.label.labelColor,
            labelName: this.props.label.labelName,
            labelColorValid: true,
            labelNameValid: true
        })
    }
    handleColorChange = ({ hex }) => {
        this.setState({
            labelColor: hex,
            labelColorValid: this.checkValidity(hex),
            labelColorTouched: true,
            displayColorPicker: false,
        }, this.validateForm);

    }
    handleColorPicker = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }
    handleLabel = (event) => {
        const updatedLabel = event.target.value;
        this.setState({
            labelName: updatedLabel,
            labelNameValid: this.checkValidity(updatedLabel),
            labelNameTouched: true
        }, this.validateForm);
    }
    editHandler = () => {
        this.props.edit(this.state.labelName, this.state.labelColor, this.props.label.id);
        this.props.closeEdit();
    }
    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const swatchSelected = {
            backgroundColor: this.state.labelColor,
            width: '40px',
            height: '40px'
        }
        const inputClasses = ['form-control'];
        if (!this.state.labelNameValid && this.state.labelNameTouched) {
            inputClasses.push('is-invalid');
        }
        const buttonClasses = ['btn form-control shadow-sm'];
        if (!this.state.labelColorValid && this.state.labelColorTouched) {
            buttonClasses.push('is-invalid');
        }
        return (
            <div className="row pt-3">
                <form autoComplete="off">
                    <div className="form-row">
                        <div className="form-group has-danger">
                            <div className="col">
                                <input type="text" className={inputClasses.join(' ')} placeholder="Update Label" value={this.state.labelName} onChange={this.handleLabel} />
                                <div className="invalid-feedback">Enter valid label</div>
                            </div>
                        </div>
                        <div className="form-group has-danger">
                            <div className="col-auto">
                                <button type="button" style={swatchSelected} onClick={this.handleColorPicker} className={buttonClasses.join(' ')}>{this.state.labelColor ? '' : <i className="fa fa-eyedropper"></i>}</button>
                                {this.state.displayColorPicker ? <div style={popover}>
                                    <div onClick={this.handleClose} />
                                    <TwitterPicker onChangeComplete={this.handleColorChange} color={this.state.labelColor} />
                                </div> : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-auto">
                                <button type="button" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.editHandler}>Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditLabel;