import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
	static found;

  transform(items: any[], searchText: string): any[] {
		if(!items) return [];
		if(searchText == null) {
			return items;
		}
		else {
			searchText = searchText.toLowerCase();
		}

		FilterPipe.found = items.filter( it => {
			return it.toLowerCase().includes(searchText);
		});

		return FilterPipe.found;
   }

	
}
