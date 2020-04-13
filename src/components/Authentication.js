import React from 'react';
import ProcedureDetail from './ProcedureDetail';

const Auth = () => {
    return (<div className="main-page">

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'Auth'},
            {type:'text', text:'Authentication.'},
            {type:'image', src:'initialIndexFile', classes:'img-md', description: 'initial index file'}
        ]} />

    </div>)
}

export default Auth;