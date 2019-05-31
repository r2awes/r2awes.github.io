import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
	selector: '[appDimensions]',
})
export class DimensionsDirective implements OnInit{

	constructor( private el:ElementRef) {
		
	}

	ngOnInit() {
		var x = this.el.nativeElement.clientX;
		console.log(x);
	}

	

}
