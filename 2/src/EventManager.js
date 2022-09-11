export default class EventManager{

    constructor(events) {
        this.events = events;
    }

    run() {
 
        const { events } = this;
        
        const sortedEvents = events.sort((a, b) => a.second - b.second);

        events.forEach((event) => {
            setTimeout(() => {
                event.execute();
            }, event.second * 1000);
        });
        
    }
};