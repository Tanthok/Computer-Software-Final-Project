angular.module('app').directive(
    'custombike',
    function($timeout) {
	return {
	    restrict: 'E',
	    template: '<script src="d3/d3.min.js" charset="utf-8"></script>
<object id="svgobject" type="image/svg+xml" data="bike2-test.svg">
</object>'
	    replace: false,
	    scope: {
		forkColor: '=',
		frameColor: '=',
		seatColor: '=',
		handleColor: '=',
		frameDecalColor: '='
	    },
	    link: function(scope, element) {
		scope.$watchGroup(['forkColor', 'frameColor', 'seatColor', 'handleColor', 'frameDecalColor'], function(newValues, oldValues, scope){
		    /*
		    var forkColor = newValues[0];
		    var frameColor = newValues[1];
		    var seatColor = newValues[2];
		    var handleColor = newValues[3];
		    var frameDecalColor = newValues[4];
		    */
		    scope.$on('changeForkColor',
			      function(event, data)
			      {
				  var svgElement = d3.select("#forkGroup");
				  svgElement.style("fill", data.color);
				  svgElement.style("stroke", data.color);
			      });

		    scope.$on('changeFrameColor',
			      function(event, data)
			      {
				  var svgElement = d3.select("#frame");
				  svgElement.style("fill", data.color);
				  svgElement.style("stroke", data.color);
			      });
		    scope.$on('changeFrameDecalColor',
			      function(event, data)
			      {
				  var svgElement = d3.select('#frame-decal');
				  svgElement.style('fill', data.color);
			      });

		    scope.$on('changeSeatColor',
			      function(event, data)
			      {
				  var svgElement = d3.select('#seat');
				  svgElement.style('fill', data.color);
			      });

		    scope.$on('changeHandleBarColor',
			      function(event, data)
			      {
				  var svgElement = d3.select('#handle-bar');
				  svgElement.style('stroke', data.color);
			      });
		    
		    
		})
	    );
	});
});
