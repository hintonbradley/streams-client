import React from 'react';
import ProcedureDetail from './ProcedureDetail';

const Auth = () => {
    return (<div className="main-page">

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Create OAuth app'},
            {type:'text', text:'1. Go to https://console.developers.google.com/ and register an app with Google.'},
            {type:'text', text:'2. Once your app has been created and registered click on it to view your new app\'s dashboard.'},
            {type:'text', text:'3. Click on the "Credentials" link, and then click the "OAuth Consent Screen".'},
            {type:'text', text:'4. Enter your application name and click \'Save\'.'},
            {type:'text', text:'5. Click on the "Credentials" link, and then click the "Credientials" submenu.'},
            {type:'text', text:'6. Click "Create credentials" and then select OAuth client ID.'},
            {type:'text', text:'7. For type of app select "Web App".'},
            {type:'text', text:'8. For the Authorized JavaScript origins type in the url where your app is hosted. (if your in development mode, type in http://localhost:3000 or whatever port you\'re on.'},
            {type:'text', text:'9. On the next screen that pops up, copy and paste your client ID somewhere you can get access to it.'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Install Google API library.'},
            {type:'text', text:'In the index.html file, add a script tag with google API library.'},
            {type:'image', src:'scriptGoogleAPILib', classes:'img-sm', description: 'Adding script for Google API library'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Create Google Library Component.'},
            {type:'text', text:'In the components directory, create a new component called GoogleAuth.js.'},
            {type:'image', src:'googleAuthBoilerplate', classes:'img-sm', description: ''},
            {type:'text', text:'Import in the header component.'},
            {type:'image', src:'importGoogleAuthToHeader', classes:'img-sm', description: ''},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Code to initialize library.'},
            {type:'text', text:'Do this in the GoogleAuth component.'},
            {type:'image', src:'initializeGoogleApiLibrary', classes:'img-md', description: ''}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Using gapi library.'},
            {type:'text', text:'Add code.'},
            {type:'image', src:'accessGapi', classes:'img-md', description: ''},
            {type:'text', text:'Add helper method to return JSX depending on whether user is logged in or not.'},
            {type:'image', src:'gapiHelper', classes:'img-sm', description: ''}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Updating component on login/logout'},
            {type:'text', text:'Using the "listen" method on the google api library, we can set a callback to run whenever a change is made (user logs in or logs out) which will update our state. Each time state is updated the componnent will re-render.'},
            {type:'text', text:'1. To wire up the "listen" method, we go tou our GoogleAuth component and set an event listener.'},
            {type:'text', text:'2. We also add the callback method (onAuthChange) to be called whenever authorization changes to update state.'},
            {type:'image', src:'onAuthChangeListener', classes:'img-md', description: 'listening for auth change'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Update content.'},
            {type:'text', text:'Change code of renderAuthButton to code pictured below to substitute button rather than text.'},
            {type:'image', src:'updateGoogleAuthContent', classes:'img-md', description: ''}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Adding Sign in/out to buttons'},
            {type:'text', text:'1. Add your two methods to call the signIn and signOut methods on the google api library to your component.'},
            {type:'text', text:'2. Sync up your signOut method to your button.'},
            {type:'text', text:'3. Sync up your signIn method to your button.'},
            {type:'image', src:'addSignInOutMethods', classes:'img-md', description: 'listening for auth change'}
        ]} />

    </div>)
}

export default Auth;