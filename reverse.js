const strRepeat = function(char, n) {
    if(n <= 0) {
        return '';
    }
    return char + strRepeat(char, n-1);
};

const helper = function(numSpaces, numStars){
    return strRepeat(' ', numSpaces) + strRepeat('*', numStars);
};

const triangle = function(depth){
    const func = function(depth, initial) {
        if (depth <=0){
            return
        }
        console.log(helper(initial-depth, 2*depth-1));
        func(depth-1, initial);
    };
    func(depth, depth);
};

triangle(6);

// power function
const pow = function(base, exponent){
	if(exponent <= 0){
		return 1;
	}
	return base * pow(base, exponent-1);
};


console.log(pow(2,5));


//string reverse
const reverse = function(str){
	const helper = function(str, index){
		if(index < 0){
			return '';
		}
		return str[index] + helper(str, index-1);
	};

	return helper(str, str.length-1);
};

console.log(reverse('armenia'));

// checkerboard
const row = function(num, bool) {
	if(num <=0){
  	return "";
  }

  if(bool) {
  	return ' ' + row(num-1, !bool);
  }

  return '*' + row(num-1, !bool);

}

const checkerboard = function(num){
	const helper = function(num, notNum, bool){
  		if(num === 0 ){
        return;
      }
      console.log(row(notNum *2, bool));
      helper(num-1, notNum, !bool);
  };
	helper(num, num, false);
};

//checkerboard(6);


const hull = function(num){
	const hullHelper = function (index, initial){
		if(index === 0){
			return;
		}
		console.log(helper(initial-(index+4), 2*(index+4)-1));
		hullHelper(index-1, initial);
	};
	hullHelper(num, num+4);
};

const rightTriangle = function(height, spaces) {
	const triangleHelp = function(index, spaces, height) {
		if(index === height){
			return;
		}
		console.log(helper(spaces, index));
		triangleHelp(index+1, spaces, height);
	};

	triangleHelp(1, spaces+2, height);
};

const flag = function(height){
	const flagHelper = function(index, initial, spaces){
		if(index === 0){
			return;
		}
		console.log(helper(spaces, initial));
		flagHelper(index-1, initial, spaces);
	};

	flagHelper(height, height*3, height+2);
};

const sailBoat = function(height){
	if(height < 10){
		sailBoat(10);
		return;
	}
	const forth = Math.floor(height/6);
	const half = Math.floor(height/1.5);
	flag(forth);
	rightTriangle(half, forth);
	hull(Math.floor(height/4));
};
sailBoat(15);
