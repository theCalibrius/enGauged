import { Component } from '@angular/core';
import { CategorySelectorComponent } from '../categorySelector/categorySelector.component';

// import { RelationshipService } from './relationships/relationship.service';
// import { Relationship } from './relationships/relationship.model';



@Component({
  selector: 'tracker-component',
  templateUrl: './tracker.component.html',
  styleUrls: ['../views.styles.css']
})

export class TrackerComponent {

	pageName = 'tracker';
	categoryName = 'Joe';


	relationships = [{
		relationshipID: '12345',
		type: 'romantic',
		invitee: {name: 'Heather', photo: 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_115/dariakhoroshavina_2405201721154.jpg'},
		acceptee: {name: 'Joe', photo: 'https://i1.sndcdn.com/avatars-000005629838-0pklj3-t500x500.jpg'},
		insights: [
		'You are into scary flicks but they are not. Best not choose this for your next date. Here are the lastest movies',
		'You have never traveled alone abroad, but the other person has. It might be worth asking them about it. Perhaps you could plan your own solo road trip. Travel always broadens horizons.',
		'Believe it or not, the other person aspires to be adventureous. Keep this in mind going forward, you might like to consider if you need to be more adventureous to keep up with the other person',
		'You are both into classical. Why not boost your relationship with the shared experience of going to a live classical concert. The money spent will pay dividends in sharing this unique glamous experience',
		'You both don\'t enjoy the spices of Indian Curry. Be sure to give this one a miss when out dating.'
		],
		notifications: [
			'Don\'t forget it is their birthday tomorrow',
			'Today is Mother\'s day don\'t forget to send a card'
		],
		answers: {
			question1: {Heather: 0, Joe: 1},
			question2: {Heather: 1, Joe: 1},
			question3: {Heather: 1, Joe: 1},
			question4: {Heather: 1, Joe: 1},
			question5: {Heather: 1, Joe: 1},
			question6: {Heather: 1, Joe: 1},
			question7: {Heather: 1, Joe: 1},
			question8: {Heather: 0, Joe: 1},
			question9: {Heather: 1, Joe: 1},
			question10: {Heather: 1, Joe: 1}
	}},
	{
	relationshipID: '12346',
	type: 'family',
	invitee: {name: 'Heather', photo: 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_115/dariakhoroshavina_2405201721154.jpg'},
	acceptee: {name: 'Mom', photo: 'https://blogs-images.forbes.com/nextavenue/files/2017/02/Deb-no-makeup-smiling-forbes-500x500.jpg'},
	insights: [
	'Neither of you have traveled abroad alone. It might be cool to discuss to what it would be like to do such an adventure. Traveling and shared adventure can be good for relationships',
	'You don\'t like scary movies but they do. Why not bite your tongue and impress them with how strong you can be.',
	'Are you ready to buy a sailboat? Both of you share the dream to get away from it all. Roll with it an build your relationship with every adventure you can find',
	'You are both into classical. Why not boost your relationship with the shared experience of going to a live classical concert. The money spent will pay dividends in sharing this unique glamous experience',
	'You dislike of curry is not shared with this friend. What not surprise them, and give it another try. Perhaps ask them to explain and intruduce you to some of the more delicious curries out there',
	],
	notifications: [
	'It\'s their birthday tomorrow don\'t forget to get a gift tonight',
	'Today you have a meeting with your father at lunch',
	'It\'s going to rain today don\'t forget your umbrella'
	],
	answers: {
		question1: {Heather: 0, Mom: 1},
		question2: {Heather: 1, Mom: 1},
		question3: {Heather: 1, Mom: 1},
		question4: {Heather: 1, Mom: 0},
		question5: {Heather: 1, Mom: 1},
		question6: {Heather: 1, Mom: 0},
		question7: {Heather: 1, Mom: 0},
		question8: {Heather: 1, Mom: 0},
		question9: {Heather: 1, Mom: 1},
		question10: {Heather: 1, Mom: 0}
	}},
	{
	relationshipID: '12347',
	type: 'friendship',
	invitee: {name: 'Heather', photo: 'https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/production/user_115/dariakhoroshavina_2405201721154.jpg'},
	acceptee: {name: 'Sarah', photo: 'https://s7.favim.com/orig/150619/barbara-palvin-barbi-palvin-cara-cute-Favim.com-2832897.jpg'},
	insights: [
	'Yes... Goal! You both like Horror flicks. Check out the latest here.',
	'Sweet! Both of you have traveled solo to other countries. Way to go. This can be a cool topic to talk about. Don\'t forget to listen intively when your partner tells you about their adventure',
	'Are you ready to buy a sailboat? Both of you share the dream to get away from it all. Roll with it an build your relationship with every adventure you can find.',
	'You are both into classical. Why not boost your relationship with the shared experience of going to a live classical concert. The money spent will pay dividends in sharing this unique glamous experience',
	'You are both up for a curry. Right on! Get down to your local Indian and found what each others favourite curries are.'
	],
	notifications: [],
	answers: {
		question1: {Heather: 0, Sarah: 1},
		question2: {Heather: 0, Sarah: 1},
		question3: {Heather: 0, Sarah: 1},
		question4: {Heather: 1, Sarah: 1},
		question5: {Heather: 1, Sarah: 0},
		question6: {Heather: 1, Sarah: 1},
		question7: {Heather: 0, Sarah: 1},
		question8: {Heather: 1, Sarah: 1},
		question9: {Heather: 1, Sarah: 1},
		question10: {Heather: 1, Sarah: 1}
	}}];

	currentRelationship = this.relationships[0];

	 onCategoryChange(category: string) {
	    this.categoryName = category;
	    for (var i=0; i < this.relationships.length; i++) {
	      if (this.relationships[i].acceptee.name === category) {
	      	this.currentRelationship = this.relationships[i];
	      }
	    }
	  }

	isCurrentCategory(testCategory) {
    	 return this.categoryName === testCategory;
   }

    // relationships: Relationship[];  // declare message variable to have type "Message[]" so the messages adhere to the format laid out in the Message model imported at top

    // constructor(private relationshipService: RelationshipService) {} // must inject services into constructor to make them available


	// ngOnInit() {
 //        this.relationshipService.getRelationships()
 //            .subscribe(
 //                (relationships: Relationship[]) => {
 //                    this.relationships = relationships;
 //                }
 //            );
 //    }

}

/*

{
	relationshipID: '12345',
	invitee: 'Heather',
	acceptee: 'Joe',
	answers: {
		question1: {Heather: 0, Joe: 1},
		question2: {Heather: 1, Joe: 1},
		question3: {Heather: 1, Joe: 1},
		question4: {Heather: 1, Joe: 1},
		question5: {Heather: 1, Joe: 1},
		question6: {Heather: 1, Joe: 1},
		question7: {Heather: 1, Joe: 1},
		question8: {Heather: 1, Joe: 1},
		question9: {Heather: 1, Joe: 1},
		question10: {Heather: 1, Joe: 1}
	}
}




*/