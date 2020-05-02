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
            {type:'image', src:'createMultipleTypes', classes:'img-md', description: 'create multiple types in Actions folder'},
            {type:'text', text:'Be sure to import all your new types to your Action Creator index file.'},
            {type:'image', src:'importAllTypesToAC', classes:'img-sm', description: 'importing all types to action creator'},
            {type:'text', text:'Write out all the remaining Action Creators in the index.js file. Note that in the editStream AC, you need to add in a payload after the route in order to have the API update the record.'},
            {type:'image', src:'addRemainingActionCreators', classes:'img-md', description: 'adding all other Action Creators'},
        ]} />

    </div>)
}

export default Rest;

