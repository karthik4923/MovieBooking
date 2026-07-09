import chess from '../../assets/images/chess.jpg'
import cycle from '../../assets/images/cycling.jpg'
import standup from '../../assets/images/standup.jpg'
import marthon from '../../assets/images/marathon.jpg'
import singer1 from '../../assets/images/singer1.jpg'
import singer2 from '../../assets/images/singer2.jpg'
import singer3 from '../../assets/images/singer3.jpg'
import standup1 from '../../assets/images/standup1.jpg'
import standup2 from '../../assets/images/standup2.jpg'
import waterpark from '../../assets/images/waterpark.jpg'
import zoo from '../../assets/images/zoo.jpg'
import sport1 from '../../assets/images/sport1.jpg'
import sport2 from '../../assets/images/sport2.jpg'
import sport3 from '../../assets/images/sport3.jpg'
import cricket1 from '../../assets/images/cricket1.jpg'
import cricket2 from '../../assets/images/cricket2.jpg'
import performance1 from '../../assets/images/performance1.jpg'
import performance2 from '../../assets/images/performance2.jpg'
const todaydata = [
  {
    name: 'Kids Chess Game (Online)',
    image: chess,
    desc: 'Participants need to play the game, not just view the competition.',
    maindesc: `This online chess competition encourages kids to develop strategic thinking and problem-solving skills.\n
It's designed to be engaging and educational, with multiple rounds and interactive gameplay.\n
Parents can watch live, but active participation is required to win prizes and trophies.\n`,
    date: 'Sat 20 Sep 2025 - Sun 21 Sep 2025',
    price: 249,
    duration: 1,
    Time: '8:30 PM',
    Agelimit: 5,
    type: 'Education',
    place: 'Online',
    person:'Chess Board',
  },
  {
    name: 'Bharat Cycling Challenge - Get Medal by Courier',
    image: cycle,
    desc: 'Bharat Cycling Challenge Distance Category - 10km/25km/50km/100km.',
    maindesc: `Join the nationwide cycling challenge and race across scenic routes.\n
Choose your distance category and compete for medals delivered directly to your home.\n
Open to all ages and fitness levels; safety measures and GPS tracking provided.\n`,
    date: 'Sat 5 Oct 2025 - Sun 6 Oct 2025',
    price: 435,
    duration: 12,
    Time: 'Anytime',
    Agelimit: 10,
    type: 'Sports',
    place: 'Across India',
    person:'Health Minister',
  },
  {
    name: 'Banker OP in The House',
    image: standup,
    desc: 'A hilarious comedy show featuring the famous Banker OP.',
    maindesc: `Laugh out loud with Banker OP’s new stand-up special.\n
Featuring a mix of observational humor, satire, and interactive segments with the audience.\n
Perfect for a fun night out with friends and family.\n`,
    date: 'Fri 25 Sep 2025',
    price: 349,
    duration: 2,
    Time: '7:00 PM',
    Agelimit: 12,
    type: 'Comedy',
    place: 'City Theater, Hyderbad',
    person:'Sathish'
  },
  {
    name: 'Junior Marathon',
    image: marthon,
    desc: 'A marathon event specially organized for kids and young teens.',
    maindesc: `Encouraging health and fitness among young runners.\n
The marathon covers a safe and scenic route with medical support throughout.\n
Participants receive certificates and medals.\n`,
    date: 'Sun 12 Oct 2025',
    price: 150,
    duration: 3,
    Time: '6:00 AM',
    Agelimit: 8,
    type: 'Sports',
    place: 'City Park, Hyderbad',
    person:'Hyderbad CM',
  }
]
export const musicEvents = [
  {
    name: 'Shreya Ghoshal Live in Hyderabad',
    image: singer1,
    desc: 'Enjoy a mesmerizing evening with Shreya Ghoshal’s melodious voice.',
    maindesc: `Join us for an enchanting concert featuring Shreya Ghoshal singing her hit Telugu songs.\n
Experience soulful melodies and classical tunes at the Hyderabad International Convention Centre.\n
Perfect for all ages and music lovers.\n`,
    date: 'Sat 20 Dec 2025',
    price: 1200,
    duration: 3,
    Time: '7:00 PM',
    Agelimit: 5,
    type: 'Music',
    place: 'Hyderabad International Convention Centre',
    person: 'Shreya Ghoshal',
  },
  {
    name: 'SP Balasubrahmanyam Tribute Night',
    image: singer2,
    desc: 'Celebrate the legendary SPB’s timeless Telugu songs.',
    maindesc: `A tribute concert featuring renowned singers performing classic Telugu hits of SP Balasubrahmanyam.\n
Held at the Ravindra Bharathi auditorium.\n
An evening filled with nostalgia and musical excellence.\n`,
    date: 'Sun 5 Jan 2026',
    price: 999,
    duration: 3,
    Time: '6:30 PM',
    Agelimit: 10,
    type: 'Music',
    place: 'Ravindra Bharathi Auditorium, Hyderabad',
    person: 'Various Artists',
  },
  {
    name: 'Anirudh Live Telugu Hits Concert',
    image: singer3,
    desc: 'A dynamic live concert featuring hit Telugu songs composed and sung by Anirudh.',
    maindesc: `Experience the energy and rhythm of Anirudh’s Telugu music live on stage.\n
               Held in Vijayawada at the Kanaka Durga Auditorium.\n
               Perfect for youth and music fans looking for an electrifying evening.\n`,
    date: 'Fri 10 Feb 2026',
    price: 1200,
    duration: 2,
    Time: '7:00 PM',
    Agelimit: 5,
    type: 'Music',
    place: 'Kanaka Durga Auditorium, Vijayawada',
    person: 'Anirudh',
  },
]
export const standupComedians = [
  {
    name: 'Kenny Sebastian Live Comedy Show',
    image: standup1,
    desc: 'A night full of relatable humor and laughter with Kenny Sebastian.',
    maindesc: `Kenny Sebastian brings his popular stand-up routine live to Bangalore.\n
Topics cover daily life, relationships, and quirky Indian experiences.\n
Perfect for a fun evening with friends and family.\n`,
    date: 'Sun 20 Oct 2025',
    price: 599,
    duration: 2,
    Time: '8:00 PM',
    Agelimit: 15,
    type: 'Comedy',
    place: 'Ranga Shankara, Bangalore',
    person: 'Kenny Sebastian',
  },
  {
    name: 'Aditi Mittal - Comedy Night',
    image: standup2,
    desc: 'Hilarious social commentary by India\'s leading female comedian.',
    maindesc: `Join Aditi Mittal for a powerful and funny show tackling social issues with wit.\n
The event encourages laughter while reflecting on important topics.\n
Great for mature audiences.\n`,
    date: 'Sat 5 Dec 2025',
    price: 550,
    duration: 2,
    Time: '7:30 PM',
    Agelimit: 18,
    type: 'Comedy',
    place: 'NCPA, Mumbai',
    person: 'Aditi Mittal',
  },
]

export const adventureParks = [
  {
    name: 'Wonderla Amusement Park Visit',
    image: waterpark,
    desc: 'Thrilling rides and water slides for the whole family.',
    maindesc: `Spend a day at Wonderla, Bangalore\'s most popular amusement and water park.\n
Enjoy roller coasters, wave pools, and live entertainment shows.\n
Perfect for kids, teens, and adults alike.\n`,
    date: 'Open Daily',
    price: 999,
    duration: 8,
    Time: '10:00 AM - 6:00 PM',
    Agelimit: 5,
    type: 'Adventure',
    place: 'Wonderla, Bangalore',
    person: 'Park Management',
  },
  {
    name: 'Nehru Zoological Park Safari',
    image: zoo,
    desc: 'Explore wildlife with guided safari tours and educational programs.',
    maindesc: `Visit the Nehru Zoological Park in Hyderabad for an immersive wildlife experience.\n
See tigers, elephants, and exotic birds in their naturalistic habitats.\n
Ideal for school trips and nature lovers.\n`,
    date: 'Open Daily',
    price: 150,
    duration: 4,
    Time: '9:00 AM - 5:00 PM',
    Agelimit: 3,
    type: 'Adventure',
    place: 'Nehru Zoological Park, Hyderabad',
    person: 'Zoo Authorities',
  },
]
export const sportsEvents = [
  {
    name: 'National Basketball Championship',
    image: sport1,
    desc: 'Watch India\'s top basketball teams compete for the national title.',
    maindesc: `Exciting basketball matches featuring fast-paced action and skilled players.\n
Held at the Indira Gandhi Indoor Stadium, Delhi.\n
Perfect for sports fans and families.\n`,
    date: 'Fri 10 Oct 2025 - Sun 12 Oct 2025',
    price: 300,
    duration: 4,
    Time: '5:00 PM',
    Agelimit: 10,
    type: 'Sports',
    place: 'Indira Gandhi Indoor Stadium, Hyderabad',
    person: 'Basketball Federation of India',
  },
  {
    name: 'All India Badminton Open',
    image: sport2,
    desc: 'Top-ranked badminton players compete for the prestigious title.',
    maindesc: `Experience thrilling badminton matches with India\'s best shuttlers.\n
Event includes singles and doubles categories.\n
Held at the K. D. Jadhav Indoor Hall, New Delhi.\n`,
    date: 'Mon 20 Nov 2025 - Fri 24 Nov 2025',
    price: 400,
    duration: 5,
    Time: '4:00 PM',
    Agelimit: 12,
    type: 'Sports',
    place: 'K. D. Jadhav Indoor Hall, New Delhi',
    person: 'Badminton Association of India',
  },
  {
    name: 'Hyderabad City Marathon 2025',
    image: sport3,
    desc: 'Join the annual Hyderabad city marathon promoting health and fitness.',
    maindesc: `Run through iconic routes in Hyderabad with thousands of participants.\n
Categories include 5km, 10km, and half-marathon.\n
Medical support and refreshments provided.\n`,
    date: 'Sun 5 Jan 2025',
    price: 250,
    duration: 6,
    Time: '6:00 AM',
    Agelimit: 15,
    type: 'Sports',
    place: 'Hussain Sagar Lake and Necklace Road, Hyderabad',
    person: 'Hyderabad Sports Committee',
  },
]

export const cricketEvents = [
  {
    name: 'IPL Cricket Match - Mumbai Indians vs Chennai Super Kings',
    image: cricket1,
    desc: 'Watch the thrilling IPL match live at Wankhede Stadium.',
    maindesc: `Cheer for your favorite IPL teams in one of the most exciting cricket events of the year.\n
Enjoy food stalls, fan zones, and live music.\n
Get your tickets early to avoid sellouts!\n`,
    date: 'Sun 30 Nov 2025',
    price: 1500,
    duration: 6,
    Time: '3:00 PM',
    Agelimit: 10,
    type: 'Cricket',
    place: 'Wankhede Stadium, Mumbai',
    person: 'BCCI',
  },
  {
    name: 'Domestic Ranji Trophy Match',
    image: cricket2,
    desc: 'Watch domestic teams compete for India\'s premier first-class cricket trophy.',
    maindesc: `Experience top-class cricket with emerging and experienced players.\n
Held at the M. Chinnaswamy Stadium, Bangalore.\n
Great for cricket enthusiasts and families.\n`,
    date: 'Wed 10 Dec 2025 - Sun 14 Dec 2025',
    price: 600,
    duration: 5,
    Time: '10:00 AM',
    Agelimit: 10,
    type: 'Cricket',
    place: 'M. Chinnaswamy Stadium, Bangalore',
    person: 'BCCI',
  },
]
export const performanceArts = [
  {
    name: 'Magic Show by Gopinath',
    image: performance1,
    desc: 'An enchanting magic performance for all ages.',
    maindesc: `Enjoy mind-boggling illusions and tricks by India\'s famous magician Gopinath.\n
The show is interactive and perfect for family outings.\n`,
    date: 'Fri 18 Oct 2025',
    price: 350,
    duration: 2,
    Time: '6:30 PM',
    Agelimit: 5,
    type: 'Performance',
    place: 'Kala Academy, Goa',
    person: 'Gopinath',
  },
  {
    name: 'Circus Extravaganza by Great Indian Circus',
    image: performance2,
    desc: 'A spectacular circus show featuring acrobats, clowns, and animal acts.',
    maindesc: `Experience the thrill of the circus with performances by skilled artists.\n
Includes trapeze, juggling, and animal stunts.\n
Suitable for all age groups.\n`,
    date: 'Sat 10 Jan 2026',
    price: 450,
    duration: 3,
    Time: '5:00 PM',
    Agelimit: 3,
    type: 'Performance',
    place: 'Jawaharlal Nehru Stadium, Delhi',
    person: 'Great Indian Circus',
  },
]

export { todaydata }
