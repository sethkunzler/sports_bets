// NOTE #region Game Code and Meta Data
let bank = 1000

const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]
// #endregion

// TODO Manipulate the DOM using draw functions
// TODO Managing complex data stored in arrays
// TODO Perform various checks and rules using comparisons
// TODO Using array methods such as find, filter, forEach
// TODO Assigning values using a random number using the Math.random() method
// TODO I Need a main with a hero bank section
// TODO I need two columns with teams and their buttons
// TODO I need a total bet display bellow
// TODO I need a good/bad bet display
// TODO I want a buy player function

const bankDisplayElem = document.getElementById('bankDisplay')
const team1LineupElem = document.getElementById('team1Lineup')
const team2LineupElem = document.getElementById('team2Lineup')
const betDisplayElem = document.getElementById('betDisplay')
const resultDisplayElem = document.getElementById('resultDisplay')
const team1 = players.filter(player => player.teamNumber == 1)
const team2 = players.filter(player => player.teamNumber == 2)

function team1bet(betAmount) {}
function team2bet(betAmount) {}
function placeBet() {}

function drawBankDisplay() {
  bankDisplayElem.innerText = bank
}
function newLineup() {
  const randomTeamNumber = Math.ceil(Math.random() * 2)
  console.log(randomTeamNumber)

  drawTeam1Lineup()
  drawTeam2Lineup()
}

function drawTeam1Lineup() {}
function drawTeam2Lineup() {}
function drawBetDisplay() {}
function drawResultDisplay() {}

drawBankDisplay()
newLineup()
drawBetDisplay()
drawResultDisplay()
