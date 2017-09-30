import { Component} from '@angular/core';
import { NgForm } from "@angular/forms";

// import { RelationshipService } from './relationships/relationship.service';
// import { Relationship } from './relationships/relationship.model';

@Component({
  selector: 'relationship-manager',
  templateUrl: './relationshipManager.component.html',
  styleUrls: ['./views.styles.css']
})

export class RelationshipManagerComponent {

    pageName = 'tracker';

    // relationship: Relationship;

    // constructor(private relationshipService: RelationshipService) {}

    // onSubmit(form: NgForm) {
    //     const relationship = new Relationship(form.value.partner, localStorage.getItem('userID'), f );
    //     this.relationshipService.addRelationship(message)
    //         .subscribe(
    //             data => console.log(data),
    //             // error => console.error(error)
    //         );
    //     }
    //     form.resetForm();
    }


    // onSubmit(form: NgForm) {
    //     if (this.relationship) {
    //         // Edit
    //         this.relationship.user1 = form.value.content;  // username or ID of logged in user
    //         this.relationshipService.updateMessage(this.message)
    //             .subscribe(
    //                 result => console.log(result)
    //             );
    //         this.relationship = null;
    //     } else {
    //         // Create
    //         const relationship = new Relationship(form.value.content, 'Max');
    //         this.relationshipService.addRelationship(message)
    //             .subscribe(
    //                 data => console.log(data),
    //                 // error => console.error(error)
    //             );
    //     }
    //     form.resetForm();
    // }

//     onClear(form: NgForm) {
//         this.message = null;
//         form.resetForm();
//     }

//     ngOnInit() {
//         this.relationshipService.messageIsEdit.subscribe(
//             (message: Message) => this.message = message
//         );
//     }
// }


// }




// @Component({
//     selector: 'app-message-input',
//     templateUrl: './message-input.component.html'
// })
// export class MessageInputComponent implements OnInit {
//     message: Message;

//     constructor(private messageService: MessageService) {}

//     onSubmit(form: NgForm) {
//         if (this.message) {
//             // Edit
//             this.message.content = form.value.content;
//             this.messageService.updateMessage(this.message)
//                 .subscribe(
//                     result => console.log(result)
//                 );
//             this.message = null;
//         } else {
//             // Create
//             const message = new Message(form.value.content, 'Max');
//             this.messageService.addMessage(message)
//                 .subscribe(
//                     data => console.log(data),
//                     // error => console.error(error)
//                 );
//         }
//         form.resetForm();
//     }

//     onClear(form: NgForm) {
//         this.message = null;
//         form.resetForm();
//     }

//     ngOnInit() {
//         this.messageService.messageIsEdit.subscribe(
//             (message: Message) => this.message = message
//         );
//     }
// }