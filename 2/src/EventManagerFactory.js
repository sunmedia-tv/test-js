import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
  
        let newEvents = [];

        const validEvents = events.filter((event) => types.includes(event.type));

        validEvents.forEach((event) => {
            newEvents.push(new Event(event.second, event.type, event.message));
        });
  
        return new EventManager(newEvents);
    }
}
