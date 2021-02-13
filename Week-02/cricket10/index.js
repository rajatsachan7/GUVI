var Game = /** @class */ (function () {
    function Game() {
        this.teams = [];
        for (var index = 0; index < 2; index++) {
            this.teams.push(new Team(index));
        }
        this.currentTeam = this.teams[0];
    }
    return Game;
}());

var Player = /** @class */ (function () {
    function Player(player_id, team) {
        this.player_score = 0;
        this.balls = 0;
        this.ballScore = [null, null, null, null, null, null];
        this.player_id = player_id;
        this.belongsToTeam = team;
    }
    Player.prototype.ballHit = function () {
        var randRun = Math.floor(Math.random() * 7);
        if (randRun == 0) {
            console.log(randRun);
            this.balls++;
            this.player_score = this.player_score + randRun;
            console.log(this.player_score);
            game.currentTeam.team_score = game.currentTeam.team_score + randRun;
            console.log(game.currentTeam.team_score);
            this.belongsToTeam.changePlayer();
            console.log("Player Changed");
        }
        else if (this.balls == 6) {
            console.log(randRun);
            console.log(this.player_score);
            console.log(game.currentTeam.team_score);
            this.belongsToTeam.changePlayer();
            console.log("Player Changed");
        }
        else {
            console.log(randRun);
            this.ballScore[this.balls] = randRun;
            this.player_score = this.player_score + randRun;
            game.currentTeam.team_score = game.currentTeam.team_score + randRun;
            console.log(this.player_score);
            this.balls++;
        }
    };
    return Player;
}());
var Team = /** @class */ (function () {
    function Team(team_id) {
        this.players = [];
        this.team_score = 0;
        this.team_id = team_id;
        for (var index = 0; index < 10; index++) {
            this.players.push(new Player(index, this));
        }
        this.currentPlayer = this.players[0];
    }
    Team.prototype.changePlayer = function () {
        this.currentPlayer = this.players[this.currentPlayer.player_id + 1];
    };
    return Team;
}());
var game;
document.getElementById("create-game").addEventListener("click", function () {
    game = new Game();
    document.getElementById("team1-hit").removeAttribute("disabled");
    console.log(game);
});
document.getElementById("team1-hit").addEventListener("click", function () {
    game.currentTeam.currentPlayer.ballHit();
    var bs1 = game.currentTeam.currentPlayer.ballScore;
    document.getElementById("el" + String(game.currentTeam.currentPlayer.player_id + 1)).innerHTML = bs1;
    var ps1 = game.currentTeam.currentPlayer.player_score;
    document.getElementById("tot" + String(game.currentTeam.currentPlayer.player_id + 1)).innerHTML = ps1;
    var ts1 = game.currentTeam.team_score;
    document.getElementById("total1").innerHTML = ts1;
    console.log(game);
});
document.getElementById("team2-hit").addEventListener("click", function () {
    game.currentTeam.currentPlayer.ballHit();
    var bs1 = game.currentTeam.currentPlayer.ballScore;
    document.getElementById("ol" + String(game.currentTeam.currentPlayer.player_id + 1)).innerHTML = bs1;
    var ps1 = game.currentTeam.currentPlayer.player_score;
    document.getElementById("sot" + String(game.currentTeam.currentPlayer.player_id + 1)).innerHTML = ps1;
    var ts1 = game.currentTeam.team_score;
    document.getElementById("total2").innerHTML = ts1;
    console.log(game);
});
document.getElementById("res_btn").addEventListener("click", function () {
    if (game.teams[0].team_score > game.teams[1].team_score) {
        document.getElementById("res").innerHTML = "TEAM 1 WINS";
    }
    else if (game.teams[0].team_score < game.teams[1].team_score) {
        document.getElementById("res").innerHTML = "TEAM 2 WINS";
    }
    else {
        document.getElementById("res").innerHTML = "TIE";
    }
});
