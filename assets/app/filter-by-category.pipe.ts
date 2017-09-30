import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryFilter',
    pure: false
})
export class CategoryFilterPipe implements PipeTransform {
    transform(contentList: any[], filter: string): any {
        if (!contentList || !filter || filter === 'All') {
            return contentList;
        }
        console.log(filter);
        // filter items array, items which match and return true will be kept, false will be filtered out
        return contentList.filter(contentItem => contentItem.category === filter.toLowerCase());
    }
}