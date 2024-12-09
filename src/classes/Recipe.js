export default class Recipe {
    id; name; prepTime; difficulty; description; img;

    constructor(id, name, prepTime, difficulty, description, img) {
        if (typeof id === 'object') {
            this.id = id.id;
            this.name = id.name;
            this.prepTime = id.prepTime;
            this.difficulty = id.difficulty;
            this.description = id.description;
            this.img = id.img;
            return
        }

        this.id = id;
        this.name = name;
        this.prepTime = prepTime;
        this.difficulty = difficulty;
        this.description = description;
        this.img = img;
    }
}