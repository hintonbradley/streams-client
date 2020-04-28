import React from 'react';
import ProcedureDetail from './ProcedureDetail';

const Forms = () => {
    return (<div className="main-page">

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Install Redux-Forms'},
            {type:'text', text:'$ npm i --s redux-form'}
        ]} />
        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Redux Form Flow'},
            {type:'text', text:'1. There should be an input element somewhere in the DOM. The element should be assigned a value and a onChange handler by the app (React). We don\'t have information stored in the DOM but rather by React, so we always know what the values are.'},
            {type:'text', text:'2. The Redux Store holds all our state for our application (the component gets the initial value from this Store).'},
            {type:'text', text:'MapStateToProps is used to get the data from the store into the component as props.'},
            {type:'text', text:'Any time there\'s a change to the value, the handler calls an Action Creator which then creates an Action that gets passed to the Reducer to change the State of our app.'},
            {type:'text', text:'Note that everyting between the handler to the Redux Store and then back to sending props to the component will be handled by the redux-form library.'},
            {type:'image', src:'reduxFormFlow', classes:'img-sm', description: 'Form flow with Redux'}
        ]} />
        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Redux-form documentation'},
            {type:'text', text:'Go to redux-form.com to read the documentation.'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Adding Redux-form to Reducer'},
            {type:'text', text:'1. Import redux-form reducer.'},
            {type:'text', text:'2. When you import the reducer, in order to give it a non-generic name, use the as keyword to give it an alternate name to be used in your file.'},
            {type:'text', text:'3. In order to add a key value pair to your Redux Store, you need to name the key data from your forms as "form" and the value as "formReducer".'},
            {type:'image', src:'reduxFormReducer', classes:'img-sm', description: 'Form flow with Redux'}
        ]} />
        
        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Adding Redux-form to Reducer'},
            {type:'text', text:'1. Refactor component as a class-based component as we will need to add helper methods to better organize the code.'},
            {type:'text', text:'2. Import two properties from Redux-Form (Field and reduxForm). Note that "Field" is capitalized as it is a component we will eventually render on the screen. On the other hand "reduxForm" is a function.'},
            {type:'text', text:'3. Hook up the "reduxForm" function to the component in the export statement. Note that reduxForm will return a function and then we need to call that function using "StreamCreate" as an agrument.'},
            {type:'text', text:'4. We need to pass in "form: \'streamCreate\'".as an object for configuration. Note that currently we are simply naming our form - this is how it will be names in our Redux Store (i.e. state.form.streamCreate).'},
            {type:'text', text:'5. Change the return statement into a multi-line statement and add in the Field components. We currently only need on property and that\'s the name property to keep track of different fields.'},
            {type:'image', src:'streamCreateAddReduxForm', classes:'img-sm', description: 'Form flow with Redux'},
            {type:'text', classes: "last danger", text:'Checkpoint: Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined.'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Adding Redux-form to Reducer'},
            {type:'image', src:'newRenderInputFormProps', classes:'img-md', description: 'In the create new component we create a renderInput method'},
            {type:'text', text:'1. Add a helper method (renderInput) and pass in "formProps" as an argument. "formProps" is a set of properties that the Field component passes in everty time a function is called for it\'s "component" property.'},
            {type:'text', text:'2. Console.log the formProps.  In the console we can view all the properties and methods associated with formProps (from redux-forms). In order to make each input a controlled element we add the onChange and value properties to the input element.'},
            {type:'image', src:'formPropsConsole', classes:'img-md', description: 'What is formProps in console'},
            {type:'text', text:'3. Assign each Field component a name property. This will assign the name property to each input element makes sure each one is unique within the form. Additionally, this component is how React knows what type of element to render (text input, text area, radio, etc.)'},
            {type:'text', text:'4. At this point, if we look into Redux State using Redux DevTools, we can see under the "form" property that we named as "streamCreate" in the export statement, we have a values key with our two inputs and the values of each. Note that since we are using the "onChange" method, this is updating every time there is a keypress.'},
            {type:'image', src:'valuesReduxStore', classes:'img-md', description: 'The values in the Redux STore'},
            {type:'text', classes: "last success", text:'Checkpoint: OK'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Short cut for assigning formProps'},
            {type:'image', src:'formPropsShortCut', classes:'img-md', description: 'Short cut for formProps'},
            {type:'text', text:'1. Instead of assigning each value to each property of the same name...'},
            {type:'text', text:'2. ...instead, we take the value of each property in the formProps.input object and assign it as the value of each input element being returned with the same prperty name. (Bascially, shorthand for the code above that is now commented out.)'},
            {type:'text', text:'3. An additional short cut is to destructure formProps even more by simply using "input"'},
            {type:'image', src:'destructureFormProps', classes:'img-md', description: 'Destructuring formProps'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Adding props to redux-form'},
            {type:'image', src:'reduxFormProps', classes:'img-md', description: 'adding props to redux-form'},
            {type:'text', text:'1. Add props to each Field component. Each time a property is passed into the Field component that it doesn\'t recognize, it takes the prop and just passes it through to the component\'s method.'},
            {type:'text', text:'2. Since a property was added on to the Field component, we can now access it via the parameters of the renderInput method. (i.e. destructurizing it by simply calling it "label" for a parameter name.'},
            {type:'text', text:'3. Add a wrapper in the return statement so we can add multiple siblings to the input element.'},
            {type:'text', text:'4. Since we\'ve deconstructed this as a prop, we can now reference it in our return statement.'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Submitting Redux Forms'},
            {type:'image', src:'submittingReduxForm', classes:'img-md', description: 'How to submit a redux form'},
            {type:'text', text:'1. First, add a button to submit your form.'},
            {type:'text', text:'2. Since redux-form already has a form submit method, we call that in our onSubmit prop on the form element. The handleSubmit method is a submit handler that does some work behind the scenes (event, preventDefault, etc.), which after it completes, then calls whatever callback is listed as the argument. (i.e. this.onSubmit)'},
            {type:'text', text:'3. Redux-form then passes the values of the form into the callback so they are updated in your Redux Store AND you can reference them accordingly.'}
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Validating Redux Forms'},
            {type:'image', src:'validationFlow', classes:'img-md', description: 'the flow of validating forms'},
            {type:'text', text:'1. Redux-form will run validation on the form each time a user interacts with it including, onChange, keypress, blur, focus, etc.'},
            {type:'text', text:'2. Validate will run with all current valus of the form.'},
            {type:'text', text:'3. Error messages that are added to the object will be displayed to the user in order to fix errors on form.'}
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Creating a validation function'},
            {type:'image', src:'creatingValidationMethod', classes:'img-md', description: 'Creating validation function'},
            {type:'text', text:'1. This function is NOT defined inside the class. Be sure it is outside our component class.'},
            {type:'text', text:'2. We need to call this function with formValues so the function can get the values of all our imputs.'},
            {type:'text', text:'3. We need to define the object that will be returned after all the validation has occurred.'},
            {type:'text', text:'4. For each value, we need to create validation. If the value isn\'t valid then we need to create an error message for that particular field. Note that the key is the same name as the Field where the value came from.'},
            {type:'text', text:'5. Once all the validation checks are complete, we return the object. If all fields are valid, an empty object will be returned. Otherwise, error messages will be displayed and form will not be submitted.'},
        ]} />

        <ProcedureDetail card="dark" obj={[
            {type:'header', text:'Adding validate function'},
            {type:'image', src:'addingValidateFunction', classes:'img-md', description: 'Adding validation function'},
            {type:'text', text:'1. Be sure that the value on the validation key in your export statement is referencing your validation function.'},
            {type:'image', src:'showErrors', classes:'img-md', description: 'Showing errors'},
            {type:'text', text:'2. Add "meta" as an argument and in the meta object, reference error for each Field to show the error if there is one.'},
        ]} />

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Adding validation after focus'},
            {type:'image', src:'validatePostTouched', classes:'img-md', description: 'Adding error messages after touched'},
            {type:'text', text:'1. We\'re going to reference a helper method to render out the errors for each Field. Note - be sure to pass "meta" as an argument.'},
            {type:'text', text:'2. Change the renderInput into an arrow function so we can correclty reference "this" when calling our helper function.'},
            {type:'text', text:'3. Create a createError helper function while destructuring out the properties you need to reference from meta (meta passed as a paramenter).'},
            {type:'text', text:'4. Use the deconstructed properties to validate values.'},
           
        ]} />

    </div>)
}

export default Forms;

