import {getFeaturedEvents} from "../data/dummy-data";
import EventList from "../components/events/event-list";

function StartingPage(props) {
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <EventList items={featuredEvents}/>

        </div>
    );
}

export default StartingPage;