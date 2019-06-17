function Cat(name) {
    this.name = name;
    var foodAmount = 50;

    formatFoodAmount = function () {
        return foodAmount + ' гр.'
    };

    this.feed = function () {
        return 'Насыпаем в миску ' + formatFoodAmount() + ' корма.'
    };

    this.dailyNorm = function (amount) {
        if (!arguments.length) {
            return formatFoodAmount();
        } else if (amount < 50 || amount > 500) {
            return 'Введены некоректные данные';
        } else {
            return foodAmount = amount;
        }
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.feed());

console.log(barsik.dailyNorm());

console.log(barsik.dailyNorm(6));

console.log(barsik.dailyNorm(600));

console.log(barsik.dailyNorm(245));

console.log(barsik.dailyNorm());

console.log(barsik.feed());

