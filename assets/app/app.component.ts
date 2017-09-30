import { Component } from '@angular/core';

<<<<<<< HEAD
import { MessageService } from "./messages/message.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService] // when injecting services, they should be listed in the providers section as well as imported at top, but not if you want them to share data, putting them in providers creates a new instance of the service.  In this case, all components using the message service are using the instance created here.
=======
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
>>>>>>> eed64365ace32481de25d923ec9f92f6b561807f
})
export class AppComponent {
}