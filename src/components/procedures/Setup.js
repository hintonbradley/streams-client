import React from 'react';
import ProcedureDetail from './ProcedureDetail';

const Setup = () => {
    return (<div className="main-page">
        
        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Initial index.js file'},
            {type:'text', text:'Create an index.js file in your /src folder (if one isn\'t there already), and add the boilerplate code.'},
            {type:'image', src:'initialIndexFile', classes:'img-md', description: 'initial index file'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'App.js file'},
            {type:'text', text:'Create an App.js file in your /src folder (if one isn\'t there already), and add the boilerplate code.'},
            {type:'image', src:'initialAppJSFile', classes:'img-sm', description: 'initial App.js file file'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Install Router'},
            {type:'text', text:'Follow the instructions in the routing.txt file (in the instructions directory) and install React-Router.'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Stream components setup'},
            {type:'text', text:'In the Components directory, create a new "Streams" directory and add your new components that will handle all your stream pages (edit, delete, view, etc...).'},
            {type:'image', src:'createStreamsComponents', classes:'img-xs', description: 'Creating your stream pages'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Add new component boilerplate'},
            {type:'text', text:'Add boilerplate code to each new component that has been created. Note: StreamCreate is only for the StreamCreate.js file. Change the name of each for each different file.'},
            {type:'image', src:'newStreamsBoilerplate', classes:'img-sm', description: 'new stream component boilerplate'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Adding routes'},
            {type:'text', text:'In the App file, import all your new components and create the new Routes for each.'},
            {type:'image', src:'importNewStreamRoutes', classes:'img-md', description: 'Importing and adding new Stream Routes'},
            {type:'image', src:'createNewStreamRoutes', classes:'img-md', description: 'Importing and adding new Stream Routes'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Create Header Component'},
            {type:'text', text:'Create a new Header component and add boilerplate code to the new component.'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Add Header'},
            {type:'text', text:'In the App file, import the Header component and add it as a sibling to the BrowserRouter.'},
            {type:'text', text:'Note: be sure to add the Header INSIDE the BrowserRouter as we need to add the BrowserRouter Links to that component.'},
            {type:'image', src:'importHeader', classes:'img-sm', description: 'Importing header and adding to JSX'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Add Links to Header'},
            {type:'text', text:'In the Header component, import Links from React-Router and add them to your JSX.'},
            {type:'image', src:'addLinksToHeader', classes:'img-sm', description: 'Adding links to component inside BrowserRouter'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Add Redux/React-Redux'},
            {type:'text', text:'Use npm to install redux and react-redux.'},
            {type:'image', src:'installReactAndRR', classes:'img-md', description: 'Adding links to component inside BrowserRouter'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Setting up Redux Dev Tools'},
            {type:'text', text:'First be sure that Redux Dev Tools is installed. If not, go to https://github.com/zalmoxisus/redux-devtools-extension and install.'},
            {type:'text', text:'In the root index.js file, add applyMiddleware and the compose function to the redux import line.'},
            {type:'image', src:'importApplyMiddlewareAndCompose', classes:'img-md', description: 'Import applyMiddleware and Compose'},
            {type:'text', text:'Then add the following code to declare composeEnhancers, and call it as an argument in the createStore method.'},
            {type:'image', src:'composeEnhancers', classes:'img-md', description: 'compose enhancers'}
        ]} />

    </div>)
}

export default Setup;