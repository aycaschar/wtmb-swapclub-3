module.exports = class Person {
  constructor(name, age, city, goods = [], id) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.goods = goods;
    this.id = id;
  }

  displayItems() {
    return this.goods;
  }
  addItem(good) {
    this.goods.push(good);
  }
  becomeAMember(club) {
    this.club = club.name;
    club.members.push(this);
  }
  makeAnOffer(person, x, y) {
    console.log(
      "Hello " + person.name,
      ", my name is " + this.name,
      ". I like to trade your " + x,
      " with my " + y,
      "."
    );
  }
  takeTheDeal(person, x, y) {
    if (person.goods.includes(x) && this.goods.includes(y)) {
      let index1 = person.goods.indexOf(x);
      person.goods.splice(index1, 1);
      this.goods.push(x);

      let index2 = this.goods.indexOf(y);
      this.goods.splice(index2, 1);
      person.goods.push(y);
    }
  }
  participate(event) {
    if (this.age > event.ageLimit) {
      this.event = event.name;
      event.participants.push(this);
    } else {
      console.log(
        `Sorry ${this.name}, you are too young to patricipate this event.`
      );
    }
  }
  static create({ name, age, city, goods, id }) {
    return new Person(name, age, city, goods, id);
  }
};
