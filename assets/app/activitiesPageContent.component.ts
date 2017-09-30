import { Component, Input } from '@angular/core';
import { CategoryFilterPipe } from './filter-by-category.pipe';

@Component({
  selector: 'activities-page-content-component',
  templateUrl: './activitiesPageContent.component.html',
  styleUrls: ['./views.styles.css']
})

export class ActivitiesPageContentComponent {

  @Input() categoryName: string;


   public contentList = [{
    	thumbnail: 'https://static.pexels.com/photos/248771/pexels-photo-248771.jpeg',
    	snippet: 'The 50 destinations that made our list this year include one of France’s lesser-known wine regions, America’s next big dining spot, and a buzzy Greek island.',
    	category: 'recommended',
        title: '50 Best Places to Travel in 2017',
    	link: 'http://www.travelandleisure.com/trip-ideas/best-places-to-travel-in-2017'
    },
    {
    	thumbnail: 'https://static.pexels.com/photos/356862/pexels-photo-356862.jpeg',
        snippet: 'Your comprehensive guide to the best events and things to do in San Francisco',
        category: 'recommended',
        title: 'Things to Do in San Francisco',
        link: 'https://www.timeout.com/san-francisco/things-to-do'
    },
    {
    	thumbnail: 'http://rbk.h-cdn.co/assets/16/37/980x653/gallery-1474132432-laser-tag.jpg',
        snippet: "You don't need to spend your life's savings to have one fun date night",
        category: 'dates',
        title: '75 Fun, Cheap Date Ideas That Put Dinner and a Movie to Shame',
        link: 'http://www.redbookmag.com/love-sex/relationships/advice/g281/cheap-date-ideas/'
    },
    {
    	thumbnail: 'https://static.pexels.com/photos/258447/pexels-photo-258447.jpeg',
        snippet: 'From urban hikes to affordable grub, we’ve got the best dirt-cheap date ideas for cash-strapped city dwellers',
        category: 'dates',
        title: 'Cheap date ideas in San Francisco',
        link: 'https://www.timeout.com/san-francisco/things-to-do/cheap-date-ideas-in-san-francisco'
    },
     {
        thumbnail: 'https://static.pexels.com/photos/569163/pexels-photo-569163.jpeg',
        snippet: 'It’s that time of year again—pumpkin-spiced drinks, excessive amounts of leaves, and apple cider',
        category: 'recommended',
        title: 'Fall Ideas',
        link: 'https://thoughtcatalog.com/marisa-donnelly/2017/09/56-fun-things-to-do-with-your-girlfriends-this-fall/'
    },
    {
        thumbnail: 'https://static.pexels.com/photos/196666/pexels-photo-196666.jpeg',
        snippet: "Schedule some fun, quality time with your partner.",
        category: 'dates',
        title: 'The Top 100 Date Night Ideas of All Time',
        link: 'http://www.redbookmag.com/love-sex/relationships/advice/g631/100-date-ideas/'
    },
    {
        thumbnail: 'https://static.pexels.com/photos/355952/pexels-photo-355952.jpeg',
        snippet: 'How do you picture your life in five years? In ten? Discuss your similarities and differences when it comes to the future.',
        category: 'conversations',
        title: '50 Conversation Starters for Couples',
        link: 'https://blog.udemy.com/conversation-starters-for-couples/'
    },
    {
    	thumbnail: 'https://tempholdingspot.files.wordpress.com/2015/01/bliss21.jpg',
        snippet: 'These conversation starters for couples will get the both of you talking and hopefully you’ll learn some new things about your partner.',
        category: 'conversations',
        title: 'Conversation starters for couples',
        link: 'https://conversationstartersworld.com/conversation-starters-for-couples/'
    }];

}