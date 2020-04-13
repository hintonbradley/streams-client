import React from 'react';
import ProcedureDetail from './ProcedureDetail';

const Rest = () => {
    return (<div className="main-page">

        <ProcedureDetail card="light" obj={[
            {type:'header', text:'REST'},
            {type:'text', text:'This is for rest.'},
            {type:'image', src:'initialIndexFile', classes:'img-md', description: 'initial index file'}
        ]} />

    </div>)
}

export default Rest;