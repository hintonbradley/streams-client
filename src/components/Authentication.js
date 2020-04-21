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
            {type:'header', text:'Update content'},
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

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Reducers Setup'},
            {type:'text', text:'With Redux and React-Redux installed as dependencies, in the /src folder, create a "reducers" folder and create an index.js file inside with boilerplate code.'},
            {type:'image', src:'setUpReducers', classes:'img-md', description: 'setting up reducers'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Setup Redux Store'},
            {type:'text', text:'In the ./src index.js file, do the following:'},
            {type:'text', text:'1. Import Provider from "react-redux"'},
            {type:'text', text:'2. Import createStore from "redux"'},
            {type:'text', text:'3. Import your new reducers file'},
            {type:'text', text:'4. Create an instance of the store'},
            {type:'text', text:'5. Update the render method with Provider and the Redux store.'},
            {type:'image', src:'updateIndexWStoreReducers', classes:'img-md', description: 'Updating the index.js file with store and reducers'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Action Creators Setup'},
            {type:'text', text:'With Redux and React-Redux installed as dependencies, in the /src folder, create a "actions" folder and create an index.js file inside with boilerplate code (or code to create Action Creators).'},
            {type:'image', src:'setUpActionCreators', classes:'img-md', description: 'setting up action creators'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Hook up Action Creators to GoogleAuth component'},
            {type:'text', text:'In the GoogleAuth component, do the following:'},
            {type:'text', text:'1. In the GoogleAuth component import the action creators'},
            {type:'text', text:'2. Import the connect function (from react-redux).'},
            {type:'text', text:'3. Hook up the connect function and the action creators in teh export default method.'},
            {type:'image', src:'importACinAuth', classes:'img-sm', description: 'adding AC to Auth imports'},
            {type:'image', src:'importACinAuth2', classes:'img-xs', description: 'adding AC to Auth'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Updating GoogleAuth Component for Redux'},
            {type:'text', text:'1. Note that onAuthChange gets automatically called back with a isSignedIn argument'},
            {type:'text', text:'2. If isSignedIn is true, we call the signIn Action Creator'},
            {type:'text', text:'3. If isSignedIn is false, we call the signOut Action Creator'},
            {type:'image', src:'updateOnAuthChange', classes:'img-sm', description: 'adding AC to Auth imports'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Creating SignIn and SignOut Reducers'},
            {type:'text', text:'In the reducers folder, create a new file called authReducer to hold the sign in and sign out reducers'},
            {type:'text', text:'1. Declaring a variable in all caps lets other developers know this is a special variable and should not to be modified in any way.'},
            {type:'text', text:'2. We need state to hold at least a couple different pieces of data, so we need to initialize it as an object.'},
            {type:'text', text:'3. When we initialize state for the first time, we set is as the Initial state variable.'},
            {type:'image', src:'initializingAuthState', classes:'img-sm', description: 'initializing auth state in reducer'},
            {type:'text', text:'4. Add the switch statements for all reducer types, and add code to update each piece of data.'},
            {type:'image', src:'authReducerSwitch', classes:'img-sm', description: 'adding auth reducer switch statment'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Combining Reducers'},
            {type:'text', text:'In the reducers\' index.js file, import the new reducer, and add it to the combineReducers export method.'},
            {type:'image', src:'addAuthReducer', classes:'img-sm', description: 'adding auth reducer'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Updating GoogleAuth Component'},
            {type:'text', text:'Add a mapStateToProps method to the component to bring in state. Note, since we named this object as "auth" in our combineReducers method, we need to access it by using "state.auth". And since it\'s an object, we need to reference the specific value pair by adding ".isSignedIn". '},
            {type:'image', src:'mapStateToPropsAuth', classes:'img-sm', description: 'adding auth reducer'},
            {type:'text', text:'Since we\'re no longer using component level state, we can remove that when we initialize our component. '},
            {type:'image', src:'removeComponentState', classes:'img-sm', description: 'adding auth reducer'},
            {type:'text', text:'Since we are no longer using component level state, we can remove the line to set that state on initialization. However, when the component is initialized we need to dispatch an action to determine if we are signed in or not.'},
            {type:'image', src:'initializeAuth', classes:'img-sm', description: 'initializing Auth'},
            {type:'text', text:'Finally we remove the reference to state and replace it with props since that\'s where we\'re getting it from now.'},
            {type:'image', src:'removeState', classes:'img-sm', description: 'initializing Auth'},
        ]} />

    </div>)
}

export default Auth;