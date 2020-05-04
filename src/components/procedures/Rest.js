import React from 'react';
import ProcedureDetail from './ProcedureDetail';

const Rest = () => {
    return (<div className="main-page">

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'REST'},
            {type:'text', text:'API server description is below. Our React app (on the right) will make a call to the API to get all the available streams. Once a user selects a particular stream, our React app will ask the TRMP Server to show that Stream.'},
            {type:'image', src:'apiServerDescription', classes:'img-md', description: 'API server description'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'App\'s REST Actions'},
            {type:'image', src:'restActions', classes:'img-sm', description: 'REST actions for this app'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'APP Server'},
            {type:'text', text:'We are using JSON Server instead of Express, because it has an extremely strict adherance to RESTful conventions'},
            {type:'image', src:'server', classes:'img-sm', description: 'what we\'re using to create our server'},
            {type:'text', text:'Step 1: In your terminal, go to the project root folder (streams) and create another directory called "server".'},
            {type:'text', text:'Step 2: cd into the "api" directory and run "npm init".'},
            {type:'text', text:'Step 3: In the "api" directory install the json-server module.'},
            {type:'text', text:'Step 4: In the api directory, create a new file called db.json.'},
            {type:'text', text:'Step 5: Inside the db.json file, add in the following code below.'},
            {type:'image', src:'dbJsonFile', classes:'img-xs', description: 'db.json code'},
            {type:'text', text:'Step 6: Go to the package.json file and delete the "test" default script (under "scripts"), and add the following script. This will start up the json server, running on port 3001 (-p) while watching the dj.json file (-w).'},
            {type:'image', src:'startScript', classes:'img-sm', description: 'package.json start script'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Network Request Steps'},
            {type:'text', text:'1. Define an Action Creator'},
            {type:'text', text:'2. Wire up the Action Creator to our component through the Connect helper'},
            {type:'text', text:'3. Call the Action Creator from the onSubmit function.'},
            {type:'text', text:'4. Action Creator will use Axios to make a network request with our API.'},
        ]} />
        
        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Install Axios and Redux-Thunk'},
            {type:'text', text:'In the CLIENT directory, install asios and redux-thunk.'},
            {type:'image', src:'installAxiosReduxThunk', classes:'img-sm', description: 'installing axios and redux-thunk'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Wire up Redux-Thunk'},
            {type:'text', text:'1. In the root index.js file, import redux-thunk.'},
            {type:'text', text:'2. Add in redux-thunk to the applyMiddleware function.'},
            {type:'image', src:'installAxiosReduxThunk', classes:'img-sm', description: 'installing axios and redux-thunk'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Creating axios instance'},
            {type:'text', text:'Create a new directory called "apis" in the /src folder, and add the following code to create an instance.'},
            {type:'image', src:'creatingAxiosInstance', classes:'img-sm', description: 'creating an axios instance'},
            {type:'text', text:'1. In the actions/index.js file, import the newly created streams file.'},
            {type:'text', text:'2. Create another Action Creator to make the API request.'},
            {type:'image', src:'createStreamRestAC', classes:'img-md', description: 'create stream REST action creator'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Hook up Component to Action Creator'},
            {type:'text', text:'Import the connect method and the createStream Action Creator to your component.'},
            {type:'image', src:'connectStreamsCreate', classes:'img-sm', description: 'connecting createStreams component'},
            {type:'text', text:'1. To prevent complicated syntax, we rename the export default as a constant variable.'},
            {type:'text', text:'2. We then use the constant and wrap it in the connect function. Remember to add the "mapStateToProps" function as the first argument (which is null in this case) and also your Action Creators as the second argument.'},
            {type:'image', src:'connectWrapper', classes:'img-sm', description: 'wrapping connect function'},
            {type:'text', text:'Finally, we call the Action Creator in the onSubmit function after all values have been validated.'},
            {type:'image', src:'onSubmitAddValues', classes:'img-sm', description: 'add values to onSubmit to call the Action Creator'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Get response from POST'},
            {type:'text', text:'In order to grab the response from our POST request, we need to add the await keyword to our call.'},
            {type:'image', src:'createStreamAwait', classes:'img-md', description: 'createStream await'},
            {type:'text', text:'Be sure to add a new type in the actions/types.js file.'},
            {type:'image', src:'createStreamType', classes:'img-sm', description: 'types - createStream'},
            {type:'text', text:'In the actions/index.js file, add in the new type and use it to dispatch a new Action.'},
            {type:'image', src:'createStreamInAC', classes:'img-md', description: 'createStream in the action creator'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Creating all Action Creators'},
            {type:'text', text:'In order to create all of our Action Creators at once, we first need to define all types in the types.js file in the Actions folder.'},
            {type:'image', src:'createMultipleTypes', classes:'img-sm', description: 'create multiple types in Actions folder'},
            {type:'text', text:'Be sure to import all your new types to your Action Creator index file.'},
            {type:'image', src:'importAllTypesToAC', classes:'img-sm', description: 'importing all types to action creator'},
            {type:'text', text:'Create all your Action Creators in the index.js file in your actions directory.'},
            {type:'image', src:'addRemainingActionCreators', classes:'img-md', description: 'adding all other Action Creators'},
            {type:'text', text:'Create a new file called "streamReducers" in the reducers directory.'},
            {type:'text', text:'1. Import all the types from the "actions" directory.'},
            {type:'text', text:'2. Set up the normal boilerplate code for your switch statement reducer.'},
            {type:'text', text:'3. Add the key interpolation syntax to add a key value pair to your state.'},
            {type:'image', src:'streamReducersSetUp', classes:'img-md', description: 'Stream reducers Set Up'},
            {type:'text', text:'Add the code for "FETCH_STREAMS" reducer.'},
            {type:'text', text:'1. Create a new object to make a copy of the original state.'},
            {type:'text', text:'2. Create a function to change state array to an object.'},
            {type:'text', text:'3. Take the each element in state and run it through the function.'},
            {type:'text', text:'4. Return the newObj (new state).'},
            {type:'image', src:'fetchStreamsReducer', classes:'img-md', description: 'Fetch streams reducer code'},
        ]} />
        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Combine reducers.'},
            {type:'text', text:'Import the new reducers file into the reducers/index.js file to add to combine reducers export.'},
            {type:'image', src:'streamsAddCombineReducers', classes:'img-sm', description: 'adding streams to combine reducers'},
        ]} />
        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Update StreamList component.'},
            {type:'text', text:'To show a list of all streams, we first need to update the StreamList component.'},
            {type:'text', text:'1. Import the Connect component from redux-react.'},
            {type:'text', text:'2. Import the Action Creator you want to use in the component.'},
            {type:'text', text:'3. Change component to class based component as we are using componentDidMount lifecycle method.'},
            {type:'text', text:'4. Wire up component by wrapping it with the connect component and adding in mapStateToPRops and Action Creators.'},
            {type:'text', text:'5. Create the componentDidMount method and call the Action Creator inside when component mounts.'},
            {type:'image', src:'classStreamList', classes:'img-md', description: 'updating StreamList component'},
        ]} />
        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Show Streams List.'},
            {type:'text', text:'To show a list of all streams, we can update the following.'},
            {type:'text', text:'1. Add a mapStateToProps function in your file and take the object items and add back into an array to be  able to loop through each item.'},
            {type:'text', text:'2. Add the mapStateToProps function to your connect call in the export.'},
            {type:'image', src:'showStreamsList1', classes:'img-md', description: 'adding map state to props'},
            {type:'text', text:'3. Add a renderList method to loop through the newly created props array to return JSX for each stream.'},
            {type:'text', text:'4. Call the new method in the render method to display all streams.'},
            {type:'image', src:'showStreamsList2', classes:'img-md', description: 'updating StreamList component'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Add Edit/Delete Buttons.'},
            {type:'text', text:'To add Edit and Delete buttons we must first authenticate with user ID. In order to do that, we need to add a userId to each stream that is created. So we need to update our "CREATE_STREAM" action creator in our actions directory.'},
            {type:'text', text:'1. We add the getState method to our RESTful call so get the userID from Redux Store.'},
            {type:'text', text:'2. We then destructure out the userId from the auth key in our state.'},
            {type:'text', text:'3. Then we update the formValues to include the userId in a single object.'},
            {type:'image', src:'updateCreateStreamWithAuth', classes:'img-md', description: 'update create stream Action Creator with userID'},
            {type:'text', text:'We then add the currentUserId (from our Redux store state) as props to our component using mapStateToProps.'},
            {type:'image', src:'addCurrentUserID', classes:'img-sm', description: 'adding current user ID to mapStateToProps method'},
            {type:'text', text:'We then add a helper method to check if the current user id is equal to this streams user id. If it is, we render the buttons. Note that currentUserId is now being passed into our component as props through the mapStateToProps method.'},
            {type:'image', src:'addRenderAdmin', classes:'img-md', description: 'add render admin helper method'},
            {type:'text', text:'Then call the renderAdmin method in the JSX where you want it displayed.'},
            {type:'image', src:'callRenderAdmin', classes:'img-md', description: 'calling renderAdmin in JSX'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Creating a Create Stream Link'},
            {type:'text', text:'To create a "Create Stream" link, we need to do the following.'},
            {type:'text', text:'First we need to import Link from "react-router-dom".'},
            {type:'image', src:'importLink', classes:'img-sm', description: 'import Link from "react-router-dom'},
            {type:'text', text:'Then we add the "isSignedIn" method from google auth as a prop to our component.'},
            {type:'image', src:'isSignedInAsProps', classes:'img-sm', description: 'add isSignedIn as prop'},
            {type:'text', text:'Create a renderCreate function to display the new Link.'},
            {type:'image', src:'renderCreateLink', classes:'img-md', description: 'method to render link'},
            {type:'text', text:'We then call renderCreate from inside our render method.'},
            {type:'image', src:'callRenderCreate', classes:'img-md', description: 'calling render create'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Creating our own history object and redirecting user'},
            {type:'text', text:'We create our own history object file to create and maintain a history object to be used throughout the app - for easier access and modify what page the user is looking at.'},
            {type:'text', text:'Inside the /src directory, we need to create a new file called "history.js". Inside it, we need to add the code below:'},
            {type:'image', src:'createHisotryJS', classes:'img-md', description: 'creating a history.js file'},
            {type:'text', text:'Import the new file into the App.js file and add it as a prop to the Browser Router.'},
            {type:'image', src:'importHistoryJS', classes:'img-md', description: 'importing history.js file'},
            {type:'text', text:'Because we are now creating our own history object we need to use a plain Router. So change Browser Router to Router so that now we are in charge of the history object (as opposed to Browser Router).'},
            {type:'image', src:'changeToRouter', classes:'img-md', description: 'change BrowserRouter to Router'},
            {type:'text', text:'Finally, import the history object into the actions/index.js file and add the code below. Note, we use .push in order to redirect the user to a route.'},
            {type:'image', src:'redirectUser', classes:'img-md', description: 'redirecting a user'},
        ]} />

    </div>)
}

export default Rest;

