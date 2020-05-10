import React from 'react';
import ProcedureDetail from './ProcedureDetail';

const Portals = () => {
    return (<div className="main-page">

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Portals / Modals'},
            {type:'text', text:'We usually use portals to:'},
            {type:'text', text:'1. Make modal windows'},
            {type:'text', text:'2. Working with third party libraries'},
            {type:'text', text:'3. Render content outside of React'},
            {type:'image', src:'modalBasics', classes:'img-lg', description: 'modal basics'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Portal set up'},
            {type:'text', text:'To create a modal, we first need to create a Modal component in the components directory.'},
            {type:'image', src:'modalBoilerplate', classes:'img-md', description: 'set up modal component'},
            {type:'text', text:'1. Import ReactDOM from react-dom as we will need to access the DOM when adding a modal to the DOM tree.'},
            {type:'text', text:'2. Be sure this modal receives props.'},
            {type:'text', text:'3. Instead of returning JSX, we need to call ReactDOM.createPortal. This function takes two arguments - the first is the JSX you want to return as the modal.'},
            {type:'text', text:'4. The second argument in the ReactDOM.createPortal method is a refernce to where in the DOM you want the portal to be rendered into. This is to be sure that the modal is rendered in the appropriate place we need it to be rendered in the DOM. below -> In the /public/index.html file, add an element to the DOM (sibling to the root) where you want your modal to be shown. We add another element this way as if we add it to the body or the #root, it will overwrite what we already have in that element.'},
            {type:'image', src:'modalInDOM', classes:'img-sm', description: 'modal placement in DOM'},
            {type:'image', src:'indexModalPlacement', classes:'img-sm', description: 'placing modal in dom'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Importing and using Modal'},
            {type:'text', text:'Straighforward to use your modal in another component.'},
            {type:'text', text:'1. Import your modal.'},
            {type:'text', text:'2. Add your modal to your JSX you want it to render.'},
            {type:'image', src:'importModal', classes:'img-sm', description: 'import modal'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Closing Portal'},
            {type:'text', text:'Since we only see the portal when we go to streams/delete, then we can simply reroute to another page to not show the portal:.'},
            {type:'text', text:'1. We first import our history object.'},
            {type:'text', text:'2. Then we add an onclick method so that when a user clicks on the background, the user will be rerouted back to the hompage (or the original page before they were rerouted to the modal).'},
            {type:'image', src:'closePortal1', classes:'img-sm', description: 'closing portal 1'},
            {type:'text', text:'3. To prevent bubbling up (not have a reroute if clicked on the buttons or modal itself), we add a clickEvent handler to the modal itself to simply stopPropogation to prevent the parent click handler from being triggered.'},
            {type:'image', src:'closePortal2', classes:'img-sm', description: 'closing portal 1'},
        ]} />
        
        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Refactoring (reusable) Portal'},
            {type:'text', text:'1. Instead of hardcoding the Modal, we add in props to be referenced each time it\'s used in each component it\'s used in (in this case, the StreamDelete component).'},
            {type:'text', text:'2. For our actions, we create a variable and reference that in our JSX.'},
            {type:'image', src:'reusablePortal', classes:'img-md', description: 'making portal reusable'},
            {type:'text', text:'Then in our Modal component, we reference the props instead.'},
            {type:'image', src:'reusablePortal2', classes:'img-md', description: 'making portal reusable'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'React Fragments'},
            {type:'text', text:'We can include an element wrapper that will wrap our JSX in a parent div in order to render it, but then have that wrapper element disappear and simply only render what is inside to the page.'},
            {type:'text', text:'Instead of wrapping our actions in a div tag, we wrap it in a React.Fragment tag. This will disappear after the buttons are rendered to the page.'},
            {type:'image', src:'reactFragment', classes:'img-md', description: 'react fragment'},
            {type:'text', text:'React Fragments can also be written simply using <>.'},
            {type:'image', src:'reactFragment2', classes:'img-md', description: 'react fragment'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Refactoring Delete button in StreamList component'},
            {type: 'text', text:'In App.js:'},
            {type:'image', src:'updateDeleteRoute', classes:'img-md', description: 'update delete route'},
            {type: 'text', text:'In StreamList Component:'},
            {type:'image', src:'addDeleteLink', classes:'img-md', description: 'add delete link'},
            {type: 'text', text:'Click the Delete button to go to modal page with stream ID'},
            {type:'image', src:'clickOnDelete', classes:'img-md', description: 'click on delete link'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Refactoring StreamDelete component'},
            {type: 'text', text:'Following along with refactor of StreamEdit. Reference that for more info on step by step process.'},
            {type:'image', src:'refactorStreamDelete1', classes:'img-lg', description: 'refactoring StreamDelete'},
            {type: 'text', text:'...then...'},
            {type:'image', src:'refactorStreamDelete2', classes:'img-lg', description: 'refactoring StreamDelete'},
            {type:'image', src:'refactorStreamDelete3', classes:'img-lg', description: 'refactoring StreamDelete'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Wire Delete and Cancel Buttons'},
            {type: 'text', text:'StreamDelete Component'},
            {type:'image', src:'updateDeleteRoute', classes:'img-md', description: 'update delete route'},
            {type: 'text', text:'In StreamList Component:'},
            {type:'image', src:'addDeleteLink', classes:'img-md', description: 'add delete link'},
            {type: 'text', text:'Click the Delete button to go to modal page with stream ID'},
            {type:'image', src:'clickOnDelete', classes:'img-md', description: 'click on delete link'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Wire Delete and Cancel Buttons'},
            {type: 'text', text:'StreamDelete Component'},
            {type:'image', src:'updateDeleteRoute', classes:'img-md', description: 'update delete route'},
            {type: 'text', text:'In StreamList Component:'},
            {type:'image', src:'addDeleteLink', classes:'img-md', description: 'add delete link'},
            {type: 'text', text:'Click the Delete button to go to modal page with stream ID'},
            {type:'image', src:'clickOnDelete', classes:'img-md', description: 'click on delete link'}
        ]} />

    </div>)
}

export default Portals;

