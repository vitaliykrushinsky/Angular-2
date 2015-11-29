import {Component, View, bootstrap} from 'angular2/angular2';


/*
Example 2 One Component in another
*/
@Component({
	selector: 'sub-comp'
})
@View({
	template: '<h3><em>Level: {{ skill }}</em></h3>'
})
class SubComponent {
	skill: number;
	
	constructor() {
		this.skill = 1;
	}
}


@Component({
	selector: 'ts-comp'
})
@View({
	directives: [SubComponent],
	template: `
	<h2>I am learning {{ framework }}</h2>
	<sub-comp></sub-comp
	`
})
class mainComponent {
	framework: string;
	
	constructor() {
		this.framework = "Angular 2";
	}
}
bootstrap(mainComponent);







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