const liverpool = {
  _players:[
    {
      firstName:'Sadio',
      lastName:'Mane',
      age: 26
    },
    {
      firstName:'Mo',
      lastName:'Salah',
      age: 26
    },
    {
      firstName:'Roberto',
      lastName:'Firmino',
      age: 27
    }
  ],
  _games:[
    {
      opponent:'Bornmouth',
      teamPoints: 3,
      opponentPoints: 0
    },
    {
      opponent:'Westham',
      teamPoints: 1,
      opponentPoints: 1
    },
    {
      opponent:'Leicester City',
      teamPoints: 1,
      opponentPoints: 1
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    const player = {
      firstName,
      lastName,
      age
    };
    this._players.push(player);
  },
  addGame(opponent,teamPoints,opponentPoints){
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this._games.push(game)
  }
};
liverpool.addPlayer('Steph','Curry',28);
liverpool.addPlayer('Lisa','Leslie',44);
liverpool.addPlayer('Bugs','Bunny',76);
liverpool.addGame('Man U', 3, 0);
liverpool.addGame('Man City', 6, 0);
liverpool.addGame('Chelsea', 2, 0);

console.log(liverpool._players);
console.log(liverpool._games);