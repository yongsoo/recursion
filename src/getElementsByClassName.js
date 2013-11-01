// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var collection = [];
  var currentNodes = document.body.childNodes;

  function check(nodes) {
  	for (var i = 0; i < nodes.length; i++) {
  		var node = nodes[i];

  		if (node.classList && node.classList.contains(className)) {
  			collection.push(node);
  		}

	  	if (node.hasChildNodes()) {
	  		check(node.childNodes);
	  	}
	 }
  }

  check(currentNodes);

  return collection;

};
