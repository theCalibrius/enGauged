import { Component, OnInit } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

// we do not declare the Messages service in the providers section below because we want all components who use it to share the same instance.
// if we were to put it in the providers section, it would create a new instance for each component who is using it, preventing them from sharing data.

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                   [message]="message"
   a                 *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class MessageListComponent implements OnInit {
    messages: Message[];  // declare message variable to have type "Message[]" so the messages adhere to the format laid out in the Message model imported at top

    constructor(private messageService: MessageService) {} // must inject services into constructor to make them available

    // ngOnInit runs when instance is created and variables are initialized

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}  // this ngOnInit is linking the messages variable in the component above to the messages array in the Messages Service so that they all point to the same data