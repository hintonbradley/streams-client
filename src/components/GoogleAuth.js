import React from 'react';
import './GoogleAuth.css';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    // state = {isSignedIn: null};

    componentDidMount () {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: '265314924670-4r3dcgoh379ll0b49ggkhkkvou0us8v4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                // this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());

                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    // Since this is a callback from listen method from the google api library, it gets called automatically with a isSignedIn argument.
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton () {
        // if(this.state.isSignedIn == null) {
        if(this.props.isSignedIn == null) {
            return null;
        // } else if (this.state.isSignedIn) {
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);




