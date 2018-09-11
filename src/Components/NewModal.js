import React, { Component } from 'react'
import './NewModal.css'

class NewModal extends Component{
    constructor(){
        super()
        this.onOverlayClick=this.onOverlayClick.bind(this)
        this.onDialogClick=this.onDialogClick.bind(this)
        this.listenKeyboard=this.listenKeyboard.bind(this)
    }

    listenKeyboard(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose()
        }
    }
  
    componentDidMount() {
        if (this.props.onClose) {
            window.addEventListener('keydown', this.listenKeyboard.bind(this), true)
        }
    }
  
    componentWillUnmount() {
        if (this.props.onClose) {
            window.removeEventListener('keydown', this.listenKeyboard.bind(this), true)
        }
    }
  
    onOverlayClick() {
        this.props.onClose()
    }
  
    onDialogClick(event) {
        event.stopPropagation()
    }

    render(){
        return (
            <div>
                <div className="modal-overlay-div"  />
                <div className="modal-content-div"  onClick={this.onOverlayClick}>
                    <div className="modal-dialog-div"  onClick={this.onDialogClick}>
                        Hello, i'm the new modal!
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
export default NewModal