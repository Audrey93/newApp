import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import { Link } from 'react-router-dom';

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

class Register  extends React.Component{

    render() {

        return (
            <div className="register">
                <form onSubmit={this.props.onSubmit} className="ModalForm1">
                    <Input id="name" type="text" title="Ime"/>
                    <Input id="surname" type="text" title="Prezime"/>
                    <Input id="email" type="email" title="E-mail" />
                    <Input id="birthday" type="date" title="Datum rođenja"/>
                    <Input id="password" type="password" title="Password"  />
                    <Input id="password2" type="password" title="Potvrdi password"  />
                    <button>POTVRDI <i className="fa"></i></button>
                </form>
            </div>
        );
    }
}

export default Register