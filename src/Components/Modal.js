import React, { Component } from 'react'
import ReactModal from 'react-modal-resizable-draggable'
// import 'Modal.css'

class Modal extends Component {
    constructor(props){
        super(props)
        this.state={
            condition:true,
            index: this.props.onClose
        }
        this.closeModal=this.closeModal.bind(this)
        this.delete=this.delete.bind(this)
    }

    closeModal(){
        this.setState({condition:false})
    }

    delete(){
        this.props.trigger(this.state.index)
    }
    render(){
        console.log('Index: ', this.state.index)
        
        
        return(
            <ReactModal initWidth={150} initHeight={150} isOpen={this.state.condition} onRequestClose={this.closeModal}  >
                <h3>Modal {this.props.name}</h3>
                <div className="body">
                    <p>This is the modal&apos;s body.</p>
                </div>
                <button onClick={this.delete}>Close</button>
            </ReactModal>
        )
    }
}
export default Modal