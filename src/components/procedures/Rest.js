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

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Setting Routes for Edit, Delete and Stream Show'},
            {type:'text', text:'Instead of passing the stream ID through a function passed down as props, instead we add the stream ID in the path.'},
            {type:'image', src:'componentPaths', classes:'img-md', description: 'changing component paths for edit, delete and show'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Refactoring Edit button to add :id path'},
            {type:'text', text:'In the StreamList component (that lists all our streams), we update the renderList method - changing the Edit and Delete buttons to Links.'},
            {type:'image', src:'refactorEditButton', classes:'img-md', description: 'refactoring stream edit button'},
            {type:'text', text:'In the App.js file, we need to update the edit Route so that it has a path using the stream ID.'},
            {type:'image', src:'updateEditRouteWithId', classes:'img-md', description: 'updating the Edit Route with Id'},
            {type:'text', text:'In the StreamEdit component, pass in props as an argument and console.log props.'},
            {type:'image', src:'passPropsStreamEdit', classes:'img-md', description: 'passing in props in Stream Edit'},
            {type:'text', text:'When you view props in the console, in props.match.params, you can view the route params.'},
            {type:'image', src:'viewRouteParams', classes:'img-md', description: 'view route params'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Components work in isolation'},
            {type:'text', text:'Components that are going to be shown on the screen need to be designed to work by iteself (or by isolation). In other words, every component that React Router is going to show, needs to fetch it\'s own data.'},
            {type:'image', src:'workInIsolation', classes:'img-md', description: 'components need to work in isolation'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Refactor component to work in isolation'},
            {type:'text', text:'Component needs to grab the data of a particular stream (from url parameter). So, we need to do the following:'},
            {type:'text', text:'1. Import fetchStream Action Creator and the connect component from react-redux.'},
            {type:'text', text:'2. We need to refactor this component as a class based component to use lifecycle methods.'},
            {type:'text', text:'3. Add a componentDidMount lifecycle method to call fetchStream (using the url parameter ID - passed through props, as the match key).'},
            {type:'text', text:'4. Add a mapStateToProps function to retrieve the data for the single stream we want to edit.'},
            {type:'text', text:'5. Wrap the component and export it using the mapStateToProps and the fetchStream action creator as arguments.'},
            {type:'image', src:'refactorEditForIsolation', classes:'img-md', description: 'refactor edit component for isolation'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Form Reusability'},
            {type:'text', text:'Plan to create a component to Reuse code for forms.'},
            {type:'image', src:'formReusability', classes:'img-sm', description: 'creating component for reusibility'},
            {type:'text', text:'In the /components/streams directory, create a new component called StreamForm and copy and paste StreamCreate code inside it and change the name to StreamForm and update export statement to below:'},
            {type:'image', src:'exportStreamForm', classes:'img-sm', description: 'export stream form'},
            {type:'text', text:'In the onSubmit method, change the name of the method from props to "onSubmit".'},
            {type:'image', src:'onSubmitStreamForm', classes:'img-sm', description: 'onSubmit stream form'},
            {type:'text', text:'Finally, remove the import files that are not needed.'},
            {type:'image', src:'removeImportStreamForm', classes:'img-sm', description: 'remove imports from stream form'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Refactor StreamCreate to use StreamForm'},
            {type:'text', text:'In order to have StreamCreate now use the StreamForm component, we need to do the following:'},
            {type:'text', text:'1. We first need to remove the import files that are no longer needed, and import files that are.'},
            {type:'text', text:'2. We don\'t need renderError or renderInput methods since those are handled by StreamForm.'},
            {type:'image', src:'refactorStreamCreate1', classes:'img-ms', description: 'refactoring StreamCreate part 1'},
            {type:'text', text:'3. We keep onSubmit since it is a callback in StreamForm.'},
            {type:'text', text:'4. We refactor the render method to wrap the JSX returned from StreamForm.'},
            {type:'image', src:'refactorStreamCreate2', classes:'img-md', description: 'refactoring StreamCreate part 2'},
            {type:'text', text:'5. We don\'t need validate nor formWrapped methods anymore.'},
            {type:'text', text:'6. We update the export file.'},
            {type:'image', src:'refactorStreamCreate3', classes:'img-md', description: 'refactoring StreamCreate part 3'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Refactor StreamEdit to use StreamForm'},
            {type:'text', text:'Note - before we get started. Please look at the difference between PUT and PATCH. If you keep using a put request, you will lose data that isn\'t included in the arguments when calling your Action Creator!'},
            {type:'image', src:'putAndPatch', classes:'img-ms', description: 'put and patch'},
            {type:'text', text:'In order to have StreamEdit now use the StreamForm component, we need to do the following:'},
            {type:'text', text:'1. We first need to import files that are required in this component.'},
            {type:'text', text:'2. We don\'t need renderError or renderInput methods since those are handled by StreamForm. NOTE: PLEASE MAKE SURE onSubmit METHOD IS AN ARROW FUNCTION!'},
            {type:'image', src:'editStreamWithStreamForm1', classes:'img-ms', description: 'refactoring StreamEdit part 1'},
            {type:'text', text:'3. Create a helper method to render JSX depending on if you have initialValues or not. Note that inside the StreamForm component we are including initialValues ONLY for the values we want to change. DO NOT add any values that should not be changed as initialValues (i.e. userIds or stream Ids - these should not be changed in our API!!!)'},
            {type:'image', src:'editStreamWithStreamForm2', classes:'img-md', description: 'refactoring StreamCreate part 2'},
            {type:'text', text:'3. Call the helper method in the render method.'},
            {type:'text', text:'4. Add the editStream in the connect function in the export statement.'},
            {type:'image', src:'editStreamWithStreamForm3', classes:'img-md', description: 'refactoring StreamCreate part 3'},
            {type:'text', text:'5. Then we need to update our onSubmit function to call our Action Creator. NOTE: Be sure the method is an arrow function.'},
            {type:'image', src:'editStreamWithStreamForm4', classes:'img-md', description: 'refactoring StreamCreate part 4'},
            {type:'text', text:'5. Finally, in the Action Creator, we redirect the user to the home page afer we update the API and the Redux Store to view the changes of the stream.'},
            {type:'image', src:'editStreamWithStreamForm5', classes:'img-md', description: 'refactoring StreamCreate part 5'},
        ]} />

    </div>)
}

export default Rest;

