const menu = {
_courses:{
    appetizers:[],
    mains:[],
    desserts:[]
},
  get appetizers() {
    return this._courses.appetizers; 
},
      set appetizers(appetizerIn) {
		return this._courses.appetizers = appetizerIn;
  },
      get mains() {
        return this._courses.mains;
  },
        set mains(mainIn) {
		return this._courses.mains = mainIn;
  },
    get desserts() {
			return this._courses.desserts;
  },
       set desserts(dessertsIn) {
		return this._courses.desserts = dessertsIn;
  },
    get courses() {
      return {
         appetizers: this._courses.appetizers,
         mains: this._courses.mains,
        desserts: this._courses.desserts
   }
  },
  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomDish = Math.floor(Math.random() * dishes.length);
    return dishes[randomDish];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price+main.price+dessert.price;
    return `The total price of your course is $${totalPrice}, made up of appetizer: ${appetizer.name} $${appetizer.price}, main: ${main.name} $${main.price} and dessert: ${dessert.name} $${dessert.price}.`
  }
};

menu.addDishToCourse('appetizers','Green Salad', 4.75);
menu.addDishToCourse('mains','Roast Turkey', 24.5);
menu.addDishToCourse('desserts', 'Choco Loco', 8.75);
menu.addDishToCourse('appetizers','Pumpkin Soup', 5.5);
menu.addDishToCourse('mains','Bangers and mash', 15.75);
menu.addDishToCourse('desserts','Coco Vanilla dream', 9.5);
menu.addDishToCourse('appetizers','Trippy Tofu', 4.75);
menu.addDishToCourse('mains','Lasagna', 22.5);
menu.addDishToCourse('desserts', 'Cream Brule', 8.75);
menu.addDishToCourse('appetizers','Mountain Momo', 5.5);
menu.addDishToCourse('mains','Potato Green Curry', 15.75);
menu.addDishToCourse('desserts','Berry choc pudding', 9.5);
const meal = menu.generateRandomMeal();
console.log(meal);