class Game {
  teams: Array<Team> = [];
  currentTeam: Team;

  constructor() {
    for (let index = 0; index < 2; index++) {
      this.teams.push(new Team(index));
    }
    this.currentTeam = this.teams[0];
  }
}

class Player {
  player_id: number;
  player_score: number = 0;
  balls: number = 0;
  ballScore: Array<number> = [null, null, null, null, null, null];
  belongsToTeam: Team;

  constructor(player_id: number, team: Team) {
    this.player_id = player_id;
    this.belongsToTeam = team;
  }
  ballHit() {
    let randRun = Math.floor(Math.random() * 7);
    if (randRun == 0) {
      console.log(randRun);
      this.balls++;

      this.player_score = this.player_score + randRun;
      console.log(this.player_score);

      game.currentTeam.team_score = game.currentTeam.team_score + randRun;
      console.log(game.currentTeam.team_score);
      this.belongsToTeam.changePlayer();
      console.log("Player Changed");
    } else if (this.balls == 6) {
      console.log(randRun);

      console.log(this.player_score);

      console.log(game.currentTeam.team_score);
      this.belongsToTeam.changePlayer();
      console.log("Player Changed");
    } else {
      console.log(randRun);
      this.ballScore[this.balls] = randRun;
      this.player_score = this.player_score + randRun;
      game.currentTeam.team_score = game.currentTeam.team_score + randRun;
      console.log(this.player_score);
      this.balls++;
    }
  }
}
let game;
document.getElementById("create-game").addEventListener("click", () => {
  game = new Game();
  document.getElementById("team1-hit").removeAttribute("disabled");
  console.log(game);
});


class Team {
  team_id: number;
  players: Array<Player> = [];
  currentPlayer: Player;
  team_score: number = 0;

  constructor(team_id: number) {
    this.team_id = team_id;

    for (let index = 0; index < 10; index++) {
      this.players.push(new Player(index, this));
    }
    this.currentPlayer = this.players[0];
  }
  changePlayer() {
    this.currentPlayer = this.players[this.currentPlayer.player_id + 1];
  }
}

document.getElementById("team1-hit").addEventListener("click", () => {
  game.currentTeam.currentPlayer.ballHit();
  var bs1 = game.currentTeam.currentPlayer.ballScore;
  document.getElementById(
    "el" + String(game.currentTeam.currentPlayer.player_id + 1)
  ).innerHTML = bs1;

  var ps1 = game.currentTeam.currentPlayer.player_score;
  document.getElementById(
    "tot" + String(game.currentTeam.currentPlayer.player_id + 1)
  ).innerHTML = ps1;

  var ts1 = game.currentTeam.team_score;
  document.getElementById("total1").innerHTML = ts1;

  console.log(game);
});
document.getElementById("team2-hit").addEventListener("click", () => {
  game.currentTeam.currentPlayer.ballHit();
  var bs1 = game.currentTeam.currentPlayer.ballScore;
  document.getElementById(
    "ol" + String(game.currentTeam.currentPlayer.player_id + 1)
  ).innerHTML = bs1;

  var ps1 = game.currentTeam.currentPlayer.player_score;
  document.getElementById(
    "sot" + String(game.currentTeam.currentPlayer.player_id + 1)
  ).innerHTML = ps1;

  var ts1 = game.currentTeam.team_score;
  document.getElementById("total2").innerHTML = ts1;

  console.log(game);
});

document.getElementById("res_btn").addEventListener("click", () => {
  if (game.teams[0].team_score > game.teams[1].team_score) {
    document.getElementById("res").innerHTML = "TEAM 1 WINS";
  } else if (game.teams[0].team_score < game.teams[1].team_score) {
    document.getElementById("res").innerHTML = "TEAM 2 WINS";
  } else {
    document.getElementById("res").innerHTML = "TIE";
  }
});
