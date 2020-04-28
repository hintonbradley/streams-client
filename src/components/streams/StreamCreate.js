
import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError ({error, touched}) {
        if (touched && error){
            return (
                <div className={error?"error-message":"message"}>{error}</div>
            )
        }
    }

    onSubmit (formValues) {
        console.log(formValues)
    }
    
    render () {
        return (
            <div className='main-page'>
                <form className="ptb-20 ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label="Enter title"/>
                    <Field name="description" component={this.renderInput} label="Enter description"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({ 
    form: 'streamCreate',
    validate
})(StreamCreate);




