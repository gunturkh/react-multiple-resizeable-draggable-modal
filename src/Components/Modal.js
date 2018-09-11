import React, { Component } from 'react'
import ReactModal from 'react-modal-resizable-draggable'
// import 'Modal.css'

class Modal extends Component {
    constructor(){
        super()
        this.state={
            condition:true
        }
        this.closeModal=this.closeModal.bind(this)
    }

    closeModal(){
        this.setState({condition:false})
    }
    render(){
        return(
            <ReactModal initWidth={800} initHeight={400} isOpen={this.state.condition} onRequestClose={this.closeModal}  >
                <h3>My Modal</h3>
                <div className="body">
                    <p>This is the modal&apos;s body.</p>
                </div>
                <button onClick={this.closeModal}>Close</button>
            </ReactModal>
        )
    }
}
export default Modal