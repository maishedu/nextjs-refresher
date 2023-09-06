// import {getFeaturedEvents} from "../data/dummy-data";
import {getFeaturedEvents} from '../helpers/api-util';
import EventList from "../components/events/event-list";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";

function StartingPage(props) {
    return (
        <div>
            <EventList items={props.events}/>

        </div>
    );
}

export default StartingPage;

export async function getStaticProps(){
   const featuredEvents = await getFeaturedEvents();
   return {
        props:{
            events:featuredEvents
        },
       revalidate:100
    }
}