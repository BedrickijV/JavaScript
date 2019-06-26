function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
    var self = this;

    this._formatFoodAmount = function () {
        return this._foodAmount + 'гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return this._formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        this._foodAmount = amount;
    }


    this.feed = function () {
        return 'Насыпаем в миску ' + self.dailyNorm() + ' корма.';
    }
}


function Cat(name) {
    Animal.apply(this, arguments);
    var animalFeed = this.feed;

    this.feed = function () {
        console.log(animalFeed() + ' Кот доволен ^_^');
        return this;
    }

    this.stroke = function () {
        console.log('Гладим кота.');
        return this;
    }
}


var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));

console.log(barsik.feed());

console.log(barsik.stroke().feed().stroke().feed());
