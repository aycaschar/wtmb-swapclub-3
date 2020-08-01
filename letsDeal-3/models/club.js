module.exports = class Club {
  constructor(name, members = [], id) {
    this.name = name;
    this.members = members;
    this.events = [];
    this.id = id;
  }
  printMemberNames() {
    console.log(this.members.forEach(printName));
  }
  chooseAWinner(event) {
    let winner =
      event.participants[Math.floor(Math.random() * event.participants.length)];
    return winner;
  }
  static create({ name, members, id }) {
    return new Club(name, members, id);
  }
};
const printName = (person) => console.log(person.name);
