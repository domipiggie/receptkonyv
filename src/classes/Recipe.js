export default class Recipe {
    id; name; prepTime; difficulty; description; img;

    constructor(recipeObj) {
        this.id = recipeObj.id;
        this.name = recipeObj.name;
        this.prepTime = recipeObj.prepTime;
        this.difficulty = recipeObj.difficulty;
        this.description = recipeObj.description;
        this.img = recipeObj.img;
    }
    constructor(id, name, prepTime, difficulty, description, img) {
        this.id = id;
        this.name = name;
        this.prepTime = prepTime;
        this.difficulty = difficulty;
        this.description = description;
        this.img = img;
    }
}