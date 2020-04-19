import React from 'react';
import './GoogleAuth.css';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    componentDidMount () {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: '265314924670-4r3dcgoh379ll0b49ggkhkkvou0us8v4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignIn = () => {
        console.log('this is ', this)
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton () {
        if(this.state.isSignedIn == null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className='ui red google button'>
                    <i className="google icon">Sign Out</i>
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn} className='ui blue google button'>
                    <i className="google icon">Sign In with Google</i>
                </button>
            )
        }
    }

    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;