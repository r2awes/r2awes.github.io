export class Group {
	id:number;
	name:string;

	constructor( id:number, name:string ) {
		this.id = id;
		this.name = name;
	}

	getID() {
		return this.id;
	}

	getName() {
		return this.name;
	}

}

export class Project {

	id:number;
	name:string;
	date:string;
	desc:string;
	link:string;
	images:string[];

	constructor( id:number, name:string, date:string, desc:string, link:string, images:string[] ) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.desc = desc;
		this.link = link;
		this.images = images;
	}

}

export class Social {
	name:string;
	link:string;
	pre:string = '';
	constructor( name:string, link:string, pre?:string ) {
		this.name = name;
		this.link = link;
		this.pre = pre;
	}
}

export class Tab {
	name:string;
	section: string;
	link:string;
	state:boolean = false;

	constructor( name:string, section:string, link:string, state?:boolean ) {
		this.name = name;
		this.section = section;
		this.link = link;
		this.state = state;
	}
	
}

export class Folder {
	static projects:Project[] = [
		new Project( 0, 'Inertia', '2017 Nov', 'A chrome extension that I built to replace my former new tab screen for my browser.', 'https://chrome.google.com/webstore/detail/inertia/jahcoafnlfbpepojimjkmbeigeganfbc', ['https://lh3.googleusercontent.com/E6gY65Uzex3ylCs2CCNumSVWaDpDS7LJnbyH3ZKPbsdVVf-23_e_6Knl2VWHbqOqCnP_8BEOmw=w640-h400-e365'] ),
		new Project( 1, 'Hans', '2016 Aug', 'A prototype design for a news aggregator application that I began to build.', 'https://www.behance.net/gallery/47754323/Hans-News-Aggregator', ['https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ed08c47754323.5883eb563ef80.png'] ),
		new Project( 2, 'LifeWellness Career Coaching', '2017 May', 'A live site that I made for a career coach in Canada.', '', [''] ),
		new Project( 3, 'Digital Influence media', '2018 Jan', 'A live site that I built for a couple friends who do professional photography in Kansas City, Missouri.', 'https://www.godigitalinfluence.com/', [''] ),
		new Project( 4, 'Brown Sugar Softener', '2017 Jun', 'An ecommerce website that I built for a brown sugar softerner vendor in Canada built with WordPress.', 'http://brownsugarsoftener.com/', [''] ),
		new Project( 5, 'Three Sisters Catering', '2016 Mar', 'A simple site that I built for a catering company.', 'http://www.3sisterscateringllc.com/', [''] ),
		new Project( 6, 'US History Timeline', '2018 Feb', 'A personal project that I built to help students with studying for the Advanced Placement US History test built with Angular.', 'https://github.com/r2awes/APUSH-Timeline', [''] ),
		new Project( 7, 'Enly Native App', '2018 Nov', 'A fashion tech app that allows users to see clothing items on their own bodies built with React Native.', 'https://savvy-enly.firebaseapp.com/', ['']),
		new Project( 8, 'rpIeyasu', '2019 Mar', 'A diy digital dashboard that I built for my 2001 MR2.', 'https://github.com/r2awes/rpIeyasu', [] ),
		new Project( 9, 'Jack Black Pearl', '2018 Dec', 'A React website that I built for my SNAME Boat Design competition team', 'https://JackBlackPearl', [''])
		//new Project( 7, 'more coming soon', 201, '', '', [''] ),
	];

	static socials:Social[] = [
		new Social( 'email', 'mailto:r2awes@gmail.com'),
		new Social( 'phone', 'tel:8162131499' ),
		new Social( 'twitter', 'twitter.com' ),
		new Social( 'instagram', 'instagram' ),
		new Social( 'linkedin', 'linkedin' ),
		new Social( 'github', 'github' )
	];

	static tabs:Tab[] = [
		new Tab('home', '/', '', true ),
	];

	static commands = [
		'projects',
		'contact',
		'about'
	];
}

