import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import {Fragment} from "react";
import {getAllEvents} from "../../helpers/api-util";
import {useRouter} from "next/router";
function Events(props) {
    const router = useRouter();
    function onSearch(year,month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }
    return (
        <Fragment>
            <EventSearch onSearch={onSearch}/>
           <EventList items={props.events}/>
        </Fragment>
    );
}

export default Events;

export async function getStaticProps(){
    const events = await getAllEvents();
    return {
        props:{
            events:events
        },
        revalidate:60
    }

}