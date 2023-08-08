import EventItem from "./event-item";
import classes from "./event-list.module.css";
function EventList(props){
    const {items} = props;
    return(
        <ul className={classes.list}>
            {items.map(event=><EventItem item={event} key={event.id}/>)}
        </ul>
    )
}
export default EventList;