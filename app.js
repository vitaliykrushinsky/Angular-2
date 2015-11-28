var secondComponent = ng.
	Component({
		selector: 'second-comp'
	})
	.View({
		template: '<h1><em>Level: {{ skill }}</em></h1>'
	})
	.Class({
		constructor: function() {
			this.skill = 1
		}
	})

var firstComponent = ng.
	Component({
		selector: 'first-comp'
	})
	.View({
		directives: [secondComponent],
		template: '<h1>I am learning {{ framework }}</h1></br><second-comp></second-comp>'
	})
	.Class({
		constructor: function() {
			this.framework = "Angular2"
		}
	})
	
document.addEventListener('DOMContentLoaded', function() {
	ng.bootstrap(firstComponent);
})