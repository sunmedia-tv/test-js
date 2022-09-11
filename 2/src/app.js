let xhttp = new XMLHttpRequest();
import EventManagerFactory from './EventManagerFactory';

let onReadyStateChange = function (onSuccess) {
    return function () {
        const { readyState, status } = this;

        if (readyState === 4 && status === 200) {
            let response = JSON.parse(xhttp.responseText);
            onSuccess(response);
        }
    }
};

const onSuccess = function ({ events, types }) {
    const eventManager = EventManagerFactory.create(events, types);
    eventManager.run();
};

xhttp.onreadystatechange = onReadyStateChange(onSuccess);
xhttp.open("GET", "https://gist.githubusercontent.com/sunmedia-tv/60036547f107d748386d46f7afb498c0/raw/3b6722589df7cbbff02fd827beca3c05de3d41a6/test.json", true);
xhttp.send();
