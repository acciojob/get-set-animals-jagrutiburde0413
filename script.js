//complete this code
class Animal {
	constructor(species){
		this._species=species
		get makesound(species){
			return this._species
		}
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}
let Animal1=new animal("species")
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
