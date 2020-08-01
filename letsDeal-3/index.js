// Add base-service.js
//Database operations are asynchronous
//Classes = Person, Club and Event
//Club has members who can swap their goods
//Club can choose a random participant to give a prize.
//Person can add items to trade
//Person can participate events
//Person can make an offer and take the deal to swap items

const Club = require("./models/club");
const Person = require("./models/person");
const Event = require("./models/event.js");
const PersonService = require("./services/person-service");
const CourseService = require("./services/club-service");
const EventService = require("./services/event-service");
const clubService = require("./services/club-service");

async function main() {
  letsDeal = new Club("Let's Deal");
  ayca = new Person("Ayca", 44, "Kusadasi", ["Book", "Dress", "Pen"]);
  deniz = new Person("Deniz", 15, "Kusadasi", ["Ball", "Sun Glasses"]);
  kaya = new Person("Kaya", 10, "Kusadasi", [
    "Guitar",
    "Short",
    "Mario Card Wii Game",
  ]);
  sweapStake = new Event("Win A Suprize Prize", 12);

  ayca.becomeAMember(letsDeal);
  deniz.becomeAMember(letsDeal);
  kaya.becomeAMember(letsDeal);

  sweapStake.addEvent(letsDeal);
  ayca.participate(sweapStake);
  deniz.participate(sweapStake);
  kaya.participate(sweapStake);

  await PersonService.add(ayca);
  await PersonService.add(deniz);
  await PersonService.add(kaya);

  const people = await PersonService.findAll();
  console.log(people[1].name);
  await PersonService.del(0);
  const newPeople = PersonService.findAll();

  ayca.addItem("Mario Wii Game");
  deniz.addItem("NBA20K");
  ayca.makeAnOffer(deniz, "Ball", "Book");
  deniz.takeTheDeal(ayca, "Book", "Ball");
  letsDeal.printMemberNames();
  console.log(letsDeal.chooseAWinner(sweapStake));
}
main();
