import React from 'react';
import PlanDetail from './PlanDetail';
import './AppPlans.css';

const AppPlans = () => {
    return (<div className="app-plans main-page">
        <PlanDetail card="light" obj={[
            {type:'header',text:'Behind the scene look at how Twitch works'},
            {type:'text',text:'Streamer\'s Computer = client/user'},
            {type:'text',text:'OBS = tool to record video of what\'s happening on your screen.'},
            {type:'text',text:'Server = takes in that video feed and delivers it to a number of other browser\'s of viewers who want to watchth Streamer\'s feed. (Larger server to handle video streams)'},
            {type:'text',text:'Web Server = separate API that can list all streams that are avaiable to view. User will first make this call and when they select a stream, it will trigger the RTMP Server. (this will be a small API server)'},
            {type:'text',text:'Viewer\'s Browser = Our React application.'},
            {type:'image', src:'howTwitchWorks', classes:'img-sm', description: 'how twitch works'}
        ]} />
        <PlanDetail card="dark" obj={[
            {type:'header',text:'Pages of our app'},
            {type:'image', src:'indexPage', classes:'img-sm', description: 'our index page'},
            {type:'image', src:'allStreamsPage', classes:'img-sm', description: 'our all streams page'},
            {type:'image', src:'viewStreamPage', classes:'img-sm', description: 'our view stream page'},
            {type:'image', src:'createStreamPage', classes:'img-sm', description: 'our create stream page'},
            {type:'image', src:'editStreamPage', classes:'img-sm', description: 'our edit stream page'},
            {type:'image', src:'deleteStreamPage', classes:'img-sm', description: 'our delete stream page'}
        ]} />
        <PlanDetail card="light" obj={[
            {type:'header',text:'Streams to Users Relationship'},
            {type:'image', src:'streamsUsersRelation', classes:'img-sm', description: 'streams and users relationship'}
        ]} />
        <PlanDetail card="dark" obj={[
            {type:'header',text:'User Authentication'},
            {type:'image', src:'userAuthentication', classes:'img-sm', description: 'user authentication'},
        ]} />
    </div> )
}

export default AppPlans;