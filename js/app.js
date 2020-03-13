console.log("tamagotchi");

class Tamagotchi {
  constructor(name) {
  	this.hungry = 1
  	
  	this.bored = 1

  	this.sleepy = 1

  	this.age = 0

  	this.name = name
      
  }

}

const game = {
  
  tamNames: "",
  intervalID: null, 
  timeElapsed: 0,
  age: 0,
  alive: true,
  pet: null,

  printValues: function() { // to update each item
    const nameH = $("#hunger-line")
    nameH.text(`Hunger: ${this.pet.hungry}`)
    const nameS = $("#sleepy-line")
    nameS.text(`Sleep: ${this.pet.sleepy}`)
    const nameP = $("#play-line")
    nameP.text(`Play: ${this.pet.bored}`)
    const nameA = $("#age-line")
    nameA.text(`Age: ${this.pet.age}`)

  },

  addName: function(str) {
    const tam = new Tamagotchi(str)
    this.tamNames = str
    this.pet = tam
  },

  feed: function() {
  	if(this.hungry > 1) {
  		this.hungry ++
      // $('#feed-button').text(this.hungry)
  		console.log("feed me!");
  	} else {
  		console.log("just ate");
  	}
    this.printValues()

  },

  sleep: function() {
    if(this.sleepy > 1) {
      console.log("im tired! going to sleep");
      this.sleepy ++
      // $('#sleep-button').text(this.sleepy)
    } else {
      console.log("just woke up, ready for the day!");
    }
    this.printValues()
  },

  getOlder: function() {
    this.age ++
    console.log("just got 1 year older");
 
    this.printValues()
  },

  play: function() {
    if(this.bored > 1) {
      console.log("i wanna play!");
      this.bored++
      // $('#play-button').text(this.bored)
    } else {
      console.log("k i'll wait to play later");
    }
    this.printValues()
  },

  startTimer: function() {
    this.printTime()
    this.intervalID = setInterval(() => {
      this.timeElapsed++
      this.printTime()
    }, 1000) 

  },

  stopTimer: function() {
    clearInterval(this.intervalID)
  },

  printTime: function() {
    const seconds = this.timeElapsed
    let mm = Math.floor(seconds/60)
    let ss = seconds - (mm * 60)

    if(ss < 10) {
      ss = "0" + ss 
    }
    const timeLine = $("#time-line")
    // timeLine.
    console.log(`${mm}:${ss}`); 
    // working BUT called again when name is inputted and goes farther
    // need to append this in the "time:" part
  },

  start: function() {
    console.log("show input for name with button? start timer?");
    console.log(this.pet);
    this.addName()
    if(this.pet !== null) {
      this.printValues()
    } else {
      console.log("pet not initiated yet");
    }
  }

 }

// game.start()

const itemTextInput = document.querySelector('#item-adding-form')

$('form').on('submit', (e) => {
  e.preventDefault()
  const nameFromForm = $("#item-adding-input").val()
  const nameT = $("#name-line")
  nameT.text(`Name: ${nameFromForm}`)

  game.start()
  game.startTimer()
  game.printValues()

})

$('#feed-button').on('click', () => {               
  game.feed()
  console.log("feed");
})

$('#sleep-button').on('click', () => {              
  game.sleep()
  console.log("sleep");
})

$('#play-button').on('click', () => {
  game.play()
  console.log("play");
})














