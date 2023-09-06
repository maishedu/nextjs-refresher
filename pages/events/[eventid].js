import {getEventById,getParams} from "../../helpers/api-util";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";


function EventDetail(props){
    const event = props.selectedEvent;
    console.log(event);
    if (!event){
        return <p>No Event Found</p>
    }else {
        return (
            <Fragment>
                <EventSummary title={event.title}/>
                <EventLogistics
                    date={event.date}
                    address={event.location}
                image={event.image} imageAlt={event.title}
                />
                <EventContent><p>{event.description}</p></EventContent>
            </Fragment>
        )
    }
}
export default EventDetail

export async function getStaticProps(context){
    const eventId = context.params.eventid;
    const eventDetail = await getEventById(eventId);
    if (eventDetail === null){
        return {
           notFound:true
        }
    }
    return {
        props:{
            selectedEvent:eventDetail
        },
        revalidate:10
    }
}
export async function getStaticPaths(){
    const params = await getParams();
    return {
        paths: params,
        fallback:'blocking'
    };
}

