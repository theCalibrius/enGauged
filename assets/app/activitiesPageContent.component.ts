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
    	thumbnail: 'http://i.huffpost.com/gen/2096496/images/o-HAPPY-COUPLE-facebook.jpg',
    	snippet: 'Lorem ipsum dolor sit amet, mundi errem temporibus sed ea, est ullum eirmod et, per erat expetenda et. ',
    	category: 'recommended',
        title: 'How To Save Your Marriage',
    	link: 'https://lifehacker.com/these-three-questions-tell-you-if-your-relationship-is-1543213637'
    },
    {
    	thumbnail: 'https://maryinvancity.files.wordpress.com/2016/02/oc_hero_huntingtoncouple_mansfield_1280x642_sized.jpg?w=878',
        snippet: 'Lorem ipsum dolor sit amet, mundi errem temporibus sed ea, est ullum eirmod et, per erat expetenda et. ',
        category: 'recommended',
        title: 'How to Make Up Not Break Up',
        link: 'https://lifehacker.com/these-three-questions-tell-you-if-your-relationship-is-1543213637'
    },
    {
    	thumbnail: 'http://static1.businessinsider.com/image/568ff202e6183e1d008b7ef7-1190-625/one-couple-quit-their-jobs-to-build-a-new-life-traveling-the-us-in-a-98-square-foot-tiny-home.jpg',
        snippet: 'Lorem ipsum dolor sit amet, mundi errem temporibus sed ea, est ullum eirmod et, per erat expetenda et. ',
        category: 'dates',
        title: 'Knowing Your Partner Better',
        link: 'https://lifehacker.com/these-three-questions-tell-you-if-your-relationship-is-1543213637'
    },
    {
    	thumbnail: 'https://www.fastacash.com/wp-content/uploads/bigstock-Man-on-smart-phone-young-bus-619672671.png',
        snippet: 'Lorem ipsum dolor sit amet, mundi errem temporibus sed ea, est ullum eirmod et, per erat expetenda et. ',
        category: 'dates',
        title: 'The Five Different Love Languages',
        link: 'https://lifehacker.com/these-three-questions-tell-you-if-your-relationship-is-1543213637'
    },
    {
    	thumbnail: 'https://tempholdingspot.files.wordpress.com/2015/01/bliss21.jpg',
        snippet: 'Lorem ipsum dolor sit amet, mundi errem temporibus sed ea, est ullum eirmod et, per erat expetenda et. ',
        category: 'conversations',
        title: 'How To Communicate Compassionately',
        link: 'https://lifehacker.com/these-three-questions-tell-you-if-your-relationship-is-1543213637'
    }];
  
}