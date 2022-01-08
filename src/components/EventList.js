import React from 'react';
import Event from './Event'


const EventList = (props) => {
    const { eventList } = props;
    console.log(props)
    return (
        <div class="event-list"> 
            {eventList.map(event => <Event key={event.event_id} event={event}/>)}   
        </div>
    )
}

export default EventList;
