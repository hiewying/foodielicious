db.locations.save({
picture: 'aTrailBossBurger.jpg',
name: 'TrailBoss Burger',
address: '140 E Exchange Ave, Fort Worth, TX 76164, USA',
rating: 3,
openingTimes: [{
days: 'Monday - Thursday',
opening: '11:00am',
closing: '7:00pm',
closed: false
}, {
 days: 'Friday',
 opening: '11:00am',
 closing: '9:00pm',
closed: false
},{
days: 'Saturday',
opening: '8:30am',
closing: '10:00pm',
closed: false
}, {
days: 'Sunday',
opening: '8:30am',
 closing: '7:00pm',
closed: false
 }]
})

db.locations.save({
    picture: 'aFifteen.jpg',
    name: 'Fifteen',
    address: '15 Westland Pl, Hoxton, London N1 7LP, UK',
    rating: 4,
    openingTimes: [{
    days: 'Monday - Friday',
    opening: '11:00am',
    closing: '7:00pm',
    closed: false
    }, {
    days: 'Saturday',
    opening: '8:30am',
    closing: '10:00pm',
    closed: false
    }, {
    days: 'Sunday',
    closed: true
     }]
})

db.locations.save({
    picture: 'aSushiHouse.jpg',
    name: 'Sushi House',
    address: '2 Chome-5-35 Hashimoto, Shingū, Wakayama Prefecture 647-0052, Japan',
    rating: 5,
    openingTimes: [{
    days: 'Monday - Friday',
    opening: '11:00am',
    closing: '9:00pm',
    closed: false
    }, {
    days: 'Saturday',
    opening: '8:30am',
    closing: '8:00pm',
    closed: false
    }, {
    days: 'Sunday',
    closed: true
     }]
})

db.locations.update({
name: 'TrailBoss Burger'
}, {
$push: {
reviews: {
author: 'Jane White',
_id: ObjectId(),
rating: 4,
timestamp: new Date("Mar 12, 2018"),
reviewText: "I had the chance to go to TrailBoss Burger while I was out traveling, and I am very well pleased with the service I was provided."
}
}
})