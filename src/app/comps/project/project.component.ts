import { Component, OnInit } from '@angular/core';
import { Folder } from '../../classes';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {

	constructor() { }
	
	projects = Folder.projects.sort( (a, b) => {
		let da = new Date( a.date ).getTime();
		let db = new Date( b.date ).getTime();
		
		if( da > db ) return -1;
		if( db > da ) return 1;
		if( da == db ) return 0;
	} );

	ngOnInit() {}

}
