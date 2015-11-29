var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var service_1 = require('./service');
/*
Example 3 Incorporate Service
*/
var SubComponent = (function () {
    function SubComponent(myService) {
        this.myService = myService;
        console.log(myService.info);
    }
    SubComponent.prototype.onEnter = function (myBox) {
        this.myService.addInfo(myBox);
    };
    SubComponent = __decorate([
        angular2_1.Component({
            selector: 'sub-comp'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "\n\t<input #my-box (keyup.enter)=\"onEnter(myBox.value)\"/>\n\t<div *ng-for=\"#infor of myService.info\">\n\t\t<h3><em>{{ infor }}</em></h3>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [service_1.Service])
    ], SubComponent);
    return SubComponent;
})();
var mainComponent = (function () {
    function mainComponent() {
        this.framework = "Angular 2";
    }
    mainComponent = __decorate([
        angular2_1.Component({
            selector: 'ts-comp'
        }),
        angular2_1.View({
            directives: [SubComponent],
            template: "\n\t<h2>I am learning</h2>\n\t<sub-comp></sub-comp\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], mainComponent);
    return mainComponent;
})();
angular2_1.bootstrap(mainComponent, [service_1.Service]);
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
//# sourceMappingURL=app.js.map