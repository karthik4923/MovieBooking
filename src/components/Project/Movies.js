import action from '../../assets/images/action.jpg'
import drama from '../../assets/images/Drama.jpg'
import scifi from '../../assets/images/scifi.jpg'
import mystery from '../../assets/images/Mystery.jpg'
import horror from '../../assets/images/Horror.jpg'
import adventure from '../../assets/images/Adventure.jpg'
import comedy from '../../assets/images/comedy.jpg'
import f1 from '../../assets/images/f1.jpg'
import alien from '../../assets/images/alien.jpg'
import superman from '../../assets/images/superman.jpg'
import jurassic from '../../assets/images/jurasic.jpg'
import action1 from '../../assets/images/action1.jpg'
import action2 from '../../assets/images/action2.jpg'
import adventure1 from '../../assets/images/adventure1.jpg'
import adventure2 from '../../assets/images/adventure2.jpg'
import comedy1 from '../../assets/images/comedy1.jpg'
import comedy2 from '../../assets/images/comedy2.jpg'
import drama1 from '../../assets/images/drama1.jpg'
import drama2 from '../../assets/images/drama2.jpg'
import horror1 from '../../assets/images/horror1.jpg'
import horror2 from '../../assets/images/horror2.jpg'
import mystery1 from '../../assets/images/mystery1.jpg'
import mystery2 from '../../assets/images/mystery2.jpg'
import scifi1 from '../../assets/images/scifi1.jpg'
import scifi2 from '../../assets/images/scifi2.jpg'
import scici3 from '../../assets/images/scifi3.jpg'

const premdata = [
  {
    name: 'F1',
    rent: 300,
    buy: 800,
    image: f1,
    duration: '2h 35m',
    genere: 'Action, Drama, Sports',
    certified: 'UA16+',
    releasedate: '27 Jun, 2025',
    desc: `In the high-octane world of Formula 1 racing, where every millisecond counts, a young and ambitious driver rises from obscurity to challenge the sport’s reigning champions. Battling fierce competition, personal struggles, and the relentless pressure of the global spotlight, he must navigate the dangerous tracks, shifting team loyalties, and his own doubts to chase the ultimate prize: the World Championship.\n

Through heart-stopping races, rivalries fueled by adrenaline and pride, and moments of triumph and tragedy, this is a story about passion, perseverance, and the relentless pursuit of speed.`,
  },
  {
    name: 'Superman',
    rent: 200,
    buy: 500,
    image: superman,
    duration: '2h 10m',
    genere: 'Action, Adventure, Fantasy, Sci-Fi',
    certified: 'UA13+',
    releasedate: '11 Jul, 2025',
    desc: 'A powerful superhero saves the world from threats with courage and compassion.',
  },
  {
    name: 'Alien: Earth',
    rent: 100,
    buy: 300,
    image: alien,
    duration: '2h 35m',
    genere: 'Action, Horror',
    certified: 'A',
    releasedate: '1 Aug, 2025',
    desc: 'A thrilling sci-fi adventure where humans encounter mysterious extraterrestrial beings.',
  },
  {
    name: 'Jurassic World: Rebirth',
    rent: 250,
    buy: 800,
    image: jurassic,
    duration: '2h 15m',
    genere: 'Action, Sci-fi, Adventure',
    certified: 'UA16+',
    releasedate: '27 Jun, 2025',
    desc: 'Dinosaurs roam the earth again in this exciting prehistoric adventure.',
  },
]

const generedata = [
  { id:1, name: 'Action', image: action },
  { id:2, name: 'Adventure', image: adventure },
  { id:3, name: 'Comedy', image: comedy },
  { id:4, name: 'Drama', image: drama },
  { id:5, name: 'Horror', image: horror },
  { id:6, name: 'Sci-Fi', image: scifi },
  { id:7, name: 'Mystery', image: mystery },
]
const moviedata = {
  1: [ // Action
    { image: action1, name: 'Terminator' },
    { image: action2, name: 'Avengers' },
  ],
  2: [ // Adventure
    { image: adventure1, name: 'Jumanji' },
    { image: adventure2, name: 'Journey to the center of the earth' },
  ],
  3: [ // Comedy
    { image: comedy1, name: 'MAD' },
    { image: comedy2, name: 'Little Hearts' },
  ],
  4: [ // Drama
    { image: drama1, name: 'The Sinners Redemption' },
    { image: drama2, name: 'Love Story' },
  ],
  5: [ // Horror
    { image: horror1, name: 'The Conjuring' },
    { image: horror2, name: 'Anaabella' },
  ],
  6: [ // Sci-Fi
    { image: scifi1, name: 'Avatar 2' },
    { image: scifi2, name: 'Transformers : Rise of the beast' },
    { image: scici3, name: 'Tron : Arise' },
  ],
  7: [ // Mystery
    { image: mystery1, name: 'Kinves Out' },
    { image: mystery2, name: 'Sherloc Holmes' },
  ]
}

export {generedata, premdata,moviedata}
