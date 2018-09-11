import React, { Component } from 'react'
import Modal from './Components/Modal'
import './App.css'
import './Components/Modal.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            modal: [],
            increment:0,
            modalIsOpen: true
        }
        this.addModal=this.addModal.bind(this)
        this.deleteModal=this.deleteModal.bind(this)
    }

    addModal(){
        this.setState(prevState => ({
            increment: prevState.increment + 1,
            modal: prevState.modal.concat(this.state.increment)
        }))
    }

    deleteModal(index){
        console.log('Array : ',this.state.modal.filter(function (item){ 
            return (
                item!==index
            )}
        ) )

        let filteredModal = this.state.modal.filter(function (item) {
            return (
                item!==index
            )
        } )

        this.setState({
            modal: filteredModal
        })
               
    }


    render() {
        console.log(`Modal : ${this.state.modal}, Length : ${this.state.modal.length}`)

        const listModal = this.state.modal.map((item,index) => {
            return (<Modal name={item} key={item+index} onClose={item} trigger={this.deleteModal}/>)
        })
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Click Button To Add Modal
                </p>
                <button onClick={this.addModal}>Add Modal</button>
                {listModal}
            </div>
        )
    }
}

export default App
