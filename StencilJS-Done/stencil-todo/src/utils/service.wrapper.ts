import { Event, EventEmitter, Method, State } from '@stencil/core';

export class ServiceWrapper {
    @State() serviceURL = 'http://localhost/KAIZEN/stencil-todo/controller/';

    @Event({ eventName: 'Test' }) toSuccessRequest: EventEmitter;
    
    @Method()
    async serviceGet(eventName: string, url: string) {
        debugger;
        console.log(eventName);
        
        var getUrl = this.serviceURL + url;
        var xhr = createCORSRequest('GET', getUrl);
        if (!xhr) {
            alert('CORS not supported');
            return;
        }
    
        // Response handlers.
        xhr.onload = () => {
            this.toSuccessRequest.emit(xhr.responseText);
            return ;
        };
    
        xhr.onerror = () => {
            new Error('Woops, there was an error making the request.');
        };
        xhr.send();
    }
}
export default {
    serviceGet: () => {
        
    }
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}