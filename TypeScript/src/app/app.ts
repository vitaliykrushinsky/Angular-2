import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Service} from './service';
/*
Example 3 Incorporate Service
*/
@Component({
	selector: 'sub-comp'
})
@View({
	directives: [NgFor],
	template: `
	<div *ng-for="#info of myService.info">
	<h3><em>{{ info }}</em></h3>
	</div>
	`
})
class SubComponent {
	
	constructor(public myService: Service) {
		console.log(myService.info)
	}
}


@Component({
	selector: 'ts-comp'
})
@View({
	directives: [SubComponent],
	template: `
	<h2>I am learning</h2>
	<sub-comp></sub-comp
	`
})
class mainComponent {
	framework: string;
	
	constructor() {
		this.framework = "Angular 2";
	}
}
bootstrap(mainComponent, [Service]);





/*
Example 2 One Component in another
*/

// @Component({
// 	selector: 'sub-comp'
// })
// @View({
// 	template: '<h3><em>Level: {{ skill }}</em></h3>'
// })
// class SubComponent {
// 	skill: number;
	
// 	constructor() {
// 		this.skill = 1;
// 	}
// }


// @Component({
// 	selector: 'ts-comp'
// })
// @View({
// 	directives: [SubComponent],
// 	template: `
// 	<h2>I am learning {{ framework }}</h2>
// 	<sub-comp></sub-comp
// 	`
// })
// class mainComponent {
// 	framework: string;
	
// 	constructor() {
// 		this.framework = "Angular 2";
// 	}
// }
// bootstrap(mainComponent);



/*
Example 1
*/
	
// @Component({
// 	selector: 'ts-comp'
// })
// @View({
// 	template: `
// 	<h2>I am learning {{ framework }}</h2>
// 	<h3><em>Level: {{ skill }}</em></h3>
// 	`
// })
// class mainComponent {
// 	framework: string;
// 	skill: number;
	
// 	constructor() {
// 		this.framework = "Angular 2";
// 		this.skill = 1;
// 	}
// }
// bootstrap(mainComponent);