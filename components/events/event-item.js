import Button from "../ui/button";
import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
function EventItem({item}){
    const {title,image,date,location,id} = item;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:"numeric"
    })
    const exploreLink = `/events/${id}`;
    const formattedAddress = location.replace(', ','\n');
    return(
        <li key={id} className={classes.item}>
            <img src={'/'+image} alt={title}/>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>
                            <AddressIcon/>
                            {formattedAddress}
                        </address>
                    </div>
                </div>

                <div className={classes.actions}>
                  <Button link={exploreLink}>
                      <span>Explore Event</span>
                      <span className={classes.icon}><ArrowRightIcon/></span>
                  </Button>
                </div>
            </div>
        </li>
    )
}
export default EventItem