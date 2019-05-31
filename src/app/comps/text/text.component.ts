import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	giphy:boolean = false;
	ptime:boolean = false;
	world:boolean = false;

	coords(e:string) {
		this.pos = $( e ).position();
	}
	pos = {
		top: 0,
		left: 0
	};
}
