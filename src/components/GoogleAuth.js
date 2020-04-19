import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    componentDidMount () {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: '265314924670-4r3dcgoh379ll0b49ggkhkkvou0us8v4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
        })
    }

    renderAuthButton () {
        if(this.state.isSignedIn == null) {
            return <div>???</div>
        } else if (this.state.isSignedIn) {
            return <div>User is signed in</div>
        } else {
            return <div>User is not signed in</div>
        }
    }
    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;