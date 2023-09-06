export async function getAllEvents(){
    const response = await fetch('https://jsclass-83fa6-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const events = [];

    for (const key in data){
        events.push({
            id:key,
            ...data[key]
        });
    }
    return events
}

export async function getFeaturedEvents(){
    const allEvents = await getAllEvents();
    return allEvents.filter((event)=>event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    const event = allEvents.find((event) => event.id === id);

    if (!event) {
        return null;
    }

    return event;
}

export async function getParams(){
    const events = await getAllEvents();

    const paths =  events.map((event)=>({params:{eventid:event.id}}));

return paths;
}
export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const events = await getAllEvents();

    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}