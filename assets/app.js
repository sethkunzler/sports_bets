// NOTE #region Game Code and Meta Data
let bank = 500

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

// TODO Perform various checks and rules using comparisons
// TODO I need a total bet display bellow
// TODO I need a good/bad bet display
// TODO I want a buy player function

// NOTE
// #region elements by ID
const bankDisplayElem = document.getElementById('bankDisplay')
const team1LineupElem = document.getElementById('team1Lineup')
const team2LineupElem = document.getElementById('team2Lineup')
const betDisplayElem = document.getElementById('betDisplay')
const resultDisplayElem = document.getElementById('resultDisplay')
// #endregion

// #region variables 
// #endregion

// #region functions that I haven't used
function team1bet(betAmount) {}
function team2bet(betAmount) {}
function placeBet() {}
// #endregion

function valueChecker() {
  let team1skill = 0
  let team2skill = 0 
  players.forEach(player => {
    if(player.teamNumber == 1) {
      team1skill += player.skill
    } else {
      team2skill += player.skill
    }
  })
  console.log(`T1: ${team1skill} T2:${team2skill}`)
  if(team1skill > team2skill) return(console.log("Team 1 Wins"))
  return(console.log("Team 2 Wins"))
}

function drawBankDisplay() {
  bankDisplayElem.innerText = bank
}
function newLineup() {
  
  players.forEach(player => {
    const randomTeamNumber = Math.ceil(Math.random() * 2)
    player.teamNumber = randomTeamNumber
  })
  drawTeam1Lineup()
  drawTeam2Lineup()
  valueChecker()
}

// function withOutTeamLineup() {
//   const withOutTeam = players.filter(player => !player.teamNumber)
//   console.log(`players with out a team: ${withOutTeam}`)
// }

function drawTeam1Lineup() {
  const team1 = players.filter(player => player.teamNumber == 1)
  console.log("Team 1:", team1)

  let team1emojis = ""
  let team1skill = 0
  team1.forEach(player => {
    team1emojis += player.emoji
    team1skill += player.skill
  })
  console.log(team1emojis)
  console.log("Team 1 skill:", team1skill)
  team1LineupElem.innerText = team1emojis

}
function drawTeam2Lineup() {
  const team2 = players.filter(player => player.teamNumber == 2)
  console.log("Team 2:", team2)

  let team2emojis = ""
  let team2skill = 0
  team2.forEach(player => {
    team2emojis += player.emoji
    team2skill += player.skill
  })
  console.log(team2emojis)
  console.log("Team 2 skill:", team2skill)
  team2LineupElem.innerText = team2emojis
}

// NOTE 
// #region empty functions
function drawBetDisplay() {}
function drawResultDisplay() {}
// #endregion

drawBankDisplay()
newLineup()
drawBetDisplay()
drawResultDisplay()