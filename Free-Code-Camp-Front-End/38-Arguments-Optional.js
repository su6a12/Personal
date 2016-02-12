function add(arg1) {
  if (typeof arguments[0] !== 'number') { 
		return undefined; 
	} 
	if (arguments.length === 2) { 
		if(typeof arguments[1] === 'number') {
			return arguments[0] + arguments[1];
		}
	} 
	else { 
		return function(arg2) {
			if(typeof arg2 === 'number')	{
				return arg1 + arg2;
			}
		};
	}
}

add(2,3);