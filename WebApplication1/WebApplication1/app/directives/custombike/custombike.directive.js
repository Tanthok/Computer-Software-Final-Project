(function()
{
angular.module('app.directives').directive(
    'custombike', CustomBikeDirective);


	/* @ngInject */
    function CustomBikeDirective() {

    	return {
	    restrict: 'AE',
	    templateUrl: 'app/directives/custombike/custom-bike.view.html',
	    replace: false,
	    scope: {
		forkColor: '=',
		frameColor: '=',
		seatColor: '=',
		handleColor: '=',
		frameDecalColor: '='
	    },
	    link: function(scope, element) {
		scope.$watchGroup(['forkColor', 'frameColor', 'seatColor',
			'handleColor', 'frameDecalColor'], function(attr, scope, newValues){
		    /*
		    var forkColor = newValues[0];
		    var frameColor = newValues[1];
		    var seatColor = newValues[2];
		    var handleColor = newValues[3];
		    var frameDecalColor = newValues[4];
		    */
		    console.log(newValues);
		    var svgElement = d3.select('#forkGroup');
		    svgElement.style('fill', newValues.forkColor);
		    svgElement.style('stroke', newValues.forkColor);
		    

		    svgElement = d3.select('#frame');
		    svgElement.style('fill', newValues.frameColor);
		    svgElement.style('stroke', newValues.frameColor);

		    svgElement = d3.select('#frame-decal');
		    svgElement.style('fill', newValues.frameDecalColor);
		    svgElement.style('stroke', newValues.frameDecalColor);

		    svgElement = d3.select('#seat');
		    svgElement.style('fill', newValues.seatColor);
		    svgElement.style('stroke', newValues.seatColor);
			
			svgElement = d3.select('#handle-bar');
		    svgElement.style('stroke', newValues.handleColor);
		    
		}); 
	    }
	}
} 
}
)
();
