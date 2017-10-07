import { Component, Input } from '@angular/core';
import { CategoryFilterPipe } from '../categorySelector/filter-by-category.pipe';

@Component({
  selector: 'content-page-content',
  templateUrl: './contentPageContent.component.html',
  styleUrls: ['../views.styles.css']
})

export class ContentPageContentComponent {

  @Input() categoryName: string;


  public contentList = [{
    	thumbnail: 'http://i.huffpost.com/gen/2096496/images/o-HAPPY-COUPLE-facebook.jpg',
    	snippet: 'If you think your marriage is unsalvageable, think again.',
    	category: 'recommended',
        title: 'How To Save Your Marriage',
    	link: 'http://www.yourtango.com/experts/dr-susan-heitler-creator-of-power-of-two-marriage/how-save-your-marriage'
    },
    {
    	thumbnail: 'https://maryinvancity.files.wordpress.com/2016/02/oc_hero_huntingtoncouple_mansfield_1280x642_sized.jpg?w=878',
        snippet: 'Sometimes breakups happen, even when they’re not what either of you really want. If you want to give your love a second chance, this is how to do it',
        category: 'recommended',
        title: 'How to Make Up Not Break Up',
        link: 'http://www.lovepanky.com/flirting-flings/dating-game/breakup-to-makeup-second-chance'
    },
    {
    	thumbnail: 'http://static1.businessinsider.com/image/568ff202e6183e1d008b7ef7-1190-625/one-couple-quit-their-jobs-to-build-a-new-life-traveling-the-us-in-a-98-square-foot-tiny-home.jpg',
        snippet: "It doesn't matter if you've been with your SO for five months or five years — it's always possible to get to know your partner better",
        category: 'recommended',
        title: 'Knowing Your Partner Better',
        link: 'https://www.bustle.com/articles/184978-11-ways-to-get-to-know-your-partner-better-no-matter-what'
    },
    {
    	thumbnail: 'https://www.fastacash.com/wp-content/uploads/bigstock-Man-on-smart-phone-young-bus-619672671.png',
        snippet: 'Your love language profile will explain your primary love language, what it means, and how you can use it to connect to others.',
        category: 'basics',
        title: 'The Five Different Love Languages',
        link: 'http://www.5lovelanguages.com/'
    },
    {
    	thumbnail: 'https://tempholdingspot.files.wordpress.com/2015/01/bliss21.jpg',
        snippet: 'Compassionate communication shows a genuine desire to understand, and get to know, the other person. ',
        category: 'communication',
        title: 'How To Communicate Compassionately',
        link: 'https://www.coachingpositiveperformance.com/8-tips-master-compassionate-communication/'
    }];

}