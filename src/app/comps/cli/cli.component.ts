import { Component, OnInit } from '@angular/core';
import { Folder } from '../../classes';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.sass']
})
export class CliComponent implements OnInit {

	router:any;
  constructor( router:Router ) {
		this.router = router;
	}

  ngOnInit() {
	}
	

	consolelog( e ) { console.log( e ); }
	
	terms = Folder.commands;
	searchText: string;
	static click: boolean = false;
	static clicked():boolean {
		CliComponent.click = true;
		return true;
	};

	goto( ) {
		if( FilterPipe.found[0] != null && FilterPipe.found[1] == null) {

			this.router.navigateByUrl( FilterPipe.found[0] );
			
			this.searchText = null;
		}
	}
}
