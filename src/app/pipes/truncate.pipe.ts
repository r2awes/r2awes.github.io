import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args: any[]): string {
		const v = args[2] != true ? this.shrink( value ) : value;
    const limit = args.length > 0  && args[2] != true ? parseInt(args[0], 10) : 200;
		const trail = args.length > 1  && args[2] != true ? args[1] : '';
    return v.length > limit ? v.substring(0, limit) + trail : v;
   }

	shrink( v:string ):string {
		return v.replace(/ /g, '');
	}
}
