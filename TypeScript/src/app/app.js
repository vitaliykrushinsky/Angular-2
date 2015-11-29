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
/*
Example 2 One Component in another
*/
var SubComponent = (function () {
    function SubComponent() {
        this.skill = 1;
    }
    SubComponent = __decorate([
        angular2_1.Component({
            selector: 'sub-comp'
        }),
        angular2_1.View({
            template: '<h3><em>Level: {{ skill }}</em></h3>'
        }), 
        __metadata('design:paramtypes', [])
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
            template: "\n\t<h2>I am learning {{ framework }}</h2>\n\t<sub-comp></sub-comp\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], mainComponent);
    return mainComponent;
})();
angular2_1.bootstrap(mainComponent);
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