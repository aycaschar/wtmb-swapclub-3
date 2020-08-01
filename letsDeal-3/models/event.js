module.exports = class Event {
  constructor(name, ageLimit, participants = [], id) {
    this.name = name;
    this.ageLimit = ageLimit;
    this.participants = participants;
    this.id = id;
  }
  addEvent(club) {
    this.club = club.name;
    club.events.push(this);
  }
  static create({ name, ageLimit, participans, id }) {
    return new Event(name, ageLimit, participants, id);
  }
};
