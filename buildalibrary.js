class Catalog {
  constructor(mediaItems){
    this._mediaItems = [mediaItems];
  }
  get mediaItems(){
    return this._mediaItems;
  }
  set mediaItems(newMediaItem){
    this._mediaItems =newMediaItem;
  }
  
}

class Media extends Catalog {
  constructor(mediaItems,title) {
    super(mediaItems);
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];    
  }
  get title(){
    return this._title;
  }
  get ratings(){
    return this._ratings;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  getAverageRating(){
    let sumRating = this._ratings.reduce((acc,currval)=>acc+currval,0);
    let arrayLength = this._ratings.length;
    return Math.round(sumRating/arrayLength)
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating(rating){
    if(rating >5){
      console.log('Invalid Input, please enter number between 1 and 5')
    } else {
     this._ratings.push(rating)
    }
  }
}

class Book extends Media {
  constructor(title,author,pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }  
}

class Movie extends Media {
  constructor(title,director,runTime,movieCast){
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  get movieCast(){
    return this._movieCast;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title,artist){
    super(title);
    this._artist = artist;
    this._songs = [];
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
  addSong(song){
    this._songs.push(song)
  }
 
}

/*  shuffle(){
const index = []; 
const songList = this._songs; 
const shuffledSongs = []; 

for (let i= Math.floor(Math.random()* songList.length); index.length<songList.length;
     i=Math.floor(Math.random()*songList.length)) {
  if (!index.includes(i)){
  index.push(i);
  } else {i=Math.floor(Math.random()*songList.length)}
}

const shuffler = (arr,shuf) => {
for (let j = 0; j<songList.length; j++)
  shuffledSongs[j]=arr[shuf[j]]
}

shuffler(songList,index);
return shuffledSongs;
  }
}
*/
const cata1 = new Catalog ('Downloads');
cata1.mediaItems = ('Stream')
console.log(cata1.mediaItems);
const MJ = new CD ('Michael Jackson', 'Thriller')
MJ.addSong('Wannabe startin something')
MJ.addSong('The girl is mine')
MJ.addSong('Thriller')
MJ.addSong('Beat it')
//console.log(MJ.shuffle());
const historyOfEverything = new Book ('A Short History of Nearly Everything','Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Speed','Jan de Bont',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());