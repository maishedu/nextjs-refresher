import {getAllEvents} from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import {Fragment} from "react";
import {useRouter} from "next/router";
function Events(props) {
    const router = useRouter();
    const events = getAllEvents();
    function onSearch(year,month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return (
        <Fragment>
            <EventSearch onSearch={onSearch}/>
           <EventList items={events}/>
        </Fragment>
    );
}

export default Events;