import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import { Link } from 'react-router-dom'


class Input extends React.Component{
    render(){
        return(
            <div className="Input">
                <input id={this.props.name} autocomplete="false" required type={this.props.type} placeholder={this.props.placeholder} />
                <label for={this.props.name}>{this.props.title}</label>
            </div>
        );
    }
}

class Login  extends React.Component{

    render() {

        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }
        return (
            <div className="login">
                <form onSubmit={this.props.onSubmit} className="ModalForm">
                    <Input id="name" type="text" title="Ime"/>
                    <Input id="email" type="email" title="E-mail" />
                    <Input id="password" type="password" title="Password"  />
                    <button>POTVRDI <i className="fa"></i></button>

                    <p onClick={handleClick}>Zaboravili ste šifru?!</p>
                </form>
            </div>
        );
    }
}

export default Login