import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal/modal.component';

class App extends Component {
    state = { showModal: false, value: '' };

    handleShowMessageClick = () => this.setState({ showModal: true });
    handleCloseModal = () => this.setState({ showModal: false });
    handleInputChange = e => this.setState({ value: e.currentTarget.value });

    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h4 className="app-title"> React Portals</h4>
                </header>
                <main className="app-main">
                    <div className="app-card">
                        <h1>Window to the Portal!</h1>
                        <button onClick={this.handleShowMessageClick}>Show Secret Modal</button>
                        {this.state.showModal ? (
                            <Modal
                                onClose={this.handleCloseModal}
                                onInputChange={this.handleInputChange}
                            >
                                This is the secret modal message!
                            </Modal>
                        ) : null}
                        <div className="card-body">{this.state.value}</div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
