import { Component, OnInit } from '@angular/core';
import { CliComponent } from '../cli/cli.component';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.sass']
})
export class GuideComponent implements OnInit {

  constructor() {

	 }

  ngOnInit() {
  }

	suggestions = [
		'projects',
		'about me',
		'contact info'
	]

	activeSuggestion = this.suggestions[0];

	changeSugg() {
		setInterval( function() {
			let i = 0;
			if( i == (this.suggestions.length - 1)) {
				i = this.suggestion[0];
			}
			this.activeSuggestion = this.suggestions[i]
			i++;
			console.log(this.activeSuggestion);
			
		}, 2000 )
	}

	clicked = CliComponent.clicked();

}
