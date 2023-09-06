import {getFilteredEvents} from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import {Fragment} from "react";
import ErrorAlert from "../../components/ui/error-alert";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
function FilteredEvents(props){
    const {filteredEvents,numMonth,numYear} = props;
    const date = new Date(numYear, numMonth - 1);

    if (filteredEvents === null){
        return(
        <ErrorAlert>
            <h2>No Event Found</h2>
        </ErrorAlert>
        )
    }

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}
export default FilteredEvents;

export async function getServerSideProps(context){
    const {params} =context;
    const filterData = params.slug;

    if (!filterData) {
        return {
            notFound:true
        }
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return {
            notFound:true
        }
    }
    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return {
            props:{
                filteredEvents:null,
                numMonth:numMonth,
                numYear:numYear
            }
        }
    }

    return{
        props:{
            filteredEvents:filteredEvents,
            numMonth:numMonth,
            numYear:numYear
        }
    }
}