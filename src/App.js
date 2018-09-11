import React, { Component } from 'react'
import Modal from './Components/Modal'
import './App.css'
import './Components/Modal.css'

class App extends Component {
    constructor(){
        super()
        this.state={
            modal: [],
            modalIsOpen: true
        }

        this.openModal=this.openModal.bind(this)
        this.closeModal=this.closeModal.bind(this)
        this.addModal=this.addModal.bind(this)
    }

    openModal(){
        this.setState({modalIsOpen: true})
    }

    closeModal(){
        this.setState({modalIsOpen: false})
    }

    addModal(){
        this.setState(prevState => ({
            modal: prevState.modal.concat('modal')
        }))
    }


    render() {
        console.log(`Modal : ${this.state.modal}, Length : ${this.state.modal.length}`)

        const listModal = this.state.modal.map((item,index) => {
            return (<Modal key={item+index} onClose={index}/>)
        })
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Modal : {this.state.modalIsOpen}
                </p>
                <button onClick={this.addModal}>Add Modal</button>
                {listModal}
            </div>
        )
    }
}

export default App
