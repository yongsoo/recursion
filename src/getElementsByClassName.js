// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var collection = [];
  var currentNodes = document.body.childNodes;

  var forEach = Array.prototype.forEach;

  function check(nodes) {
	  forEach.call(nodes, function(nodeChild) {
	  	if (nodeChild.classList.contains(className)) {
	  		collection.push(nodeChild);
	  	}

	  	if (nodeChild.hasChildNodes()) {
	  		check(nodeChild.childNodes);
	  	}
	  });  	
  }

  check(currentNodes);
  
  return collection;

};
