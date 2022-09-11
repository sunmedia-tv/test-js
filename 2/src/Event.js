export default class Event{

    constructor(second, type, message) {
        this.second = second;
        this.type = type;
        this.message = message;
    }
    
      //* Ejecutamos el evento en el tiempo indicado
      execute() {
        const { second , type, message } = this;

        console.log(`At second ${second}: {type: "${type}", message: "${message}"}`);
      }
};