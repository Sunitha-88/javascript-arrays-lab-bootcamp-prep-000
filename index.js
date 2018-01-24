var kittens=['Milo', 'Otis', 'Garfield'];

function kittensFunction(){
	return kittens;
	}

function destructivelyAppendKitten(name){
	kittens();
	kittens.push('Ralph');
	return kittens;
	}

function destructivelyPrependKitten(name){
	kittens();
	kittens.unshift('Bob');
	return kittens;
	}
function destructivelyRemoveLastKitten(){
	kittens();
	kittens.pop();
	return kittens;
	}

function destructivelyRemoveFirstKitten(){
	kittens();
	kittens.shift();
	return kittens;
	}

function appendKitten(name){
	kittens();
	kittens.push('Broom');
	return kittens;
	}
function prependKitten(name){
	kittens();
	return [name,...kittens];
	}
function removeLastKitten(){
	kittens();
	return slice(0,kittens.length-1);
	}
function removeFirstKitten(){
	kittens();
	return slice(1,kittens.length);
	}
