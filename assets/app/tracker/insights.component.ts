import { Component, Input } from '@angular/core';
import { RelationshipService } from '../relationships/relationship.service';

@Component({
  selector: 'relationship-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['../views.styles.css']
})

export class InsightsComponent {
  	// @Input() insightArray: any[];
    // @Input() insightsArray : string[];
	pageName = 'tracker';

    get relationships() {
    return this.relationshipService.relationships;
 }

 constructor(public relationshipService: RelationshipService) { }

 }



