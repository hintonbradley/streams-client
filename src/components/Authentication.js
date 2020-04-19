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
            {type:'text', text:'Add code.'},
            
        ]} />

    </div>)
}

export default Auth;