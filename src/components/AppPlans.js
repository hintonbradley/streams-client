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
        <PlanDetail card="light" obj={[
            {type:'header',text:'Component paths'},
            {type:'image', src:'pathComponents', classes:'img-sm', description: 'Each path and it\'s component'},
        ]} />
        <PlanDetail card="dark" obj={[
            {type:'header',text:'User Authentication Example'},
            {type:'image', src:'authLoginExample', classes:'img-md', description: 'user authentication example'},
        ]} />
        <PlanDetail card="light" obj={[
            {type:'header',text:'Why OAuth'},
            {type:'image', src:'whyOauth', classes:'img-sm', description: 'Why use OAuth?'},
        ]} />
        <PlanDetail card="dark" obj={[
            {type:'header',text:'What we\'re accessing with OAuth'},
            {type:'image', src:'googleScopeDefinition', classes:'img-md', description: 'user authentication example'},
        ]} />
        <PlanDetail card="light" obj={[
            {type:'header',text:'OAuth for Servers vs. OAuth for Browsers'},
            {type:'image', src:'oAuthForBrowsers', classes:'img-md', description: 'OAuth for Javascript browsers'},
        ]} />
        <PlanDetail card="dark" obj={[
            {type:'header',text:'oAuth flow'},
            {type:'image', src:'oAuthFlow', classes:'img-md', description: 'OAuth user flowchart'},
        ]} />
        <PlanDetail card="light" obj={[
            {type:'header',text:'Steps to set up OAuth'},
            {type:'image', src:'oAuthSteps', classes:'img-md', description: 'Steps to set up OAuth'},
        ]} />
        <PlanDetail card="dark" obj={[
            {type:'header',text:'Auth Object'},
            {type:'text',text:'Inside the Auth object we have a list of methods we use to log in, log out and validate user/info when they want to access our application. We need to link this up to a React component in order to be able to call each method inside the Auth Object when needed.'},
            {type:'image', src:'authObjectSteps', classes:'img-sm', description: 'Steps with OAuth library'},
            {type:'image', src:'authObject', classes:'img-md', description: 'The Auth Object'},
        ]} />
        <PlanDetail card="light" obj={[
            {type:'header',text:'Add oAuth to Redux'},
            {type:'text',text:'The way we will add oAuth to Redux is below. This is a non-conventional way, but we are doing it this way to keep all oAuth code encapsulated in this one component.'},
            {type:'image', src:'oAuthAddNonConvention', classes:'img-md', description: 'Adding oAuth to Redux in non-conventional way'},
            {type:'text',text:'The more conventional way of adding oAuth to an application with Redux is below. You would normally want the Action Creators to be the component to handle updating data for your application, and not have a separate component manage data updates (as in the above example).'},
            {type:'image', src:'oAuthAddConventional', classes:'img-md', description: 'Adding oAuth to Redux in a conventional way'},
        ]} />

    </div> )
}

export default AppPlans;