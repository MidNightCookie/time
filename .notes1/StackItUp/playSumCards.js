'use strict';
//-----------===================            PLAYING CARDSS



var normalPlayingCards = [
    //-----------     HEARTS
    {
        value: "Ace",
        suit: 'Hearts',
        image: '/img/playingCards/AH.png'
    },
    {
        value: "One",
        suit: 'Hearts',
        image: '/img/playingCards/1H.png'
    },
    {
        value: "Two",
        suit: 'Hearts',
        image: '/img/playingCards/2H.png'
    },
    {
        value: "Three",
        suit: 'Hearts',
        image: '/img/playingCards/3H.png'
    },
    {
        value: "Four",
        suit: 'Hearts',
        image: '/img/playingCards/4H.png'
    },
    {
        value: "Five",
        suit: 'Hearts',
        image: '/img/playingCards/5H.png'
    },
    {
        value: "Six",
        suit: 'Hearts',
        image: '/img/playingCards/6H.png'
    },
    {
        value: "Seven",
        suit: 'Hearts',
        image: '/img/playingCards/7H.png'
    },
    {
        value: "Eight",
        suit: 'Hearts',
        image: '/img/playingCards/8H.png'
    },
    {
        value: "Nine",
        suit: 'Hearts',
        image: '/img/playingCards/9H.png'
    },
    {
        value: "Ten",
        suit: 'Hearts',
        image: '/img/playingCards/10H.png'
    },
    {
        value: "Jack",
        suit: 'Hearts',
        image: '/img/playingCards/JH.png'
    },
    {
        value: "Queen",
        suit: 'Hearts',
        image: '/img/playingCards/QH.png'
    },
    {
        value: "King",
        suit: 'Hearts',
        image: '/img/playingCards/KH.png'
    },


//------------          SPADES
    {
        value: "Ace",
        suit: 'Spades',
        image: '/img/playingCards/AS.png'
    },
    {
        value: "One",
        suit: 'Spades',
        image: '/img/playingCards/1S.png'
    },
    {
        value: "Two",
        suit: 'Spades',
        image: '/img/playingCards/2S.png'
    },
    {
        value: "Three",
        suit: 'Spades',
        image: '/img/playingCards/3S.png'
    },
    {
        value: "Four",
        suit: 'Spades',
        image: '/img/playingCards/4S.png'
    },
    {
        value: "Five",
        suit: 'Spades',
        image: '/img/playingCards/5S.png'
    },
    {
        value: "Six",
        suit: 'Spades',
        image: '/img/playingCards/6S.png'
    },
    {
        value: "Seven",
        suit: 'Spades',
        image: '/img/playingCards/7S.png'
    },
    {
        value: "Eight",
        suit: 'Spades',
        image: '/img/playingCards/8S.png'
    },
    {
        value: "Nine",
        suit: 'Spades',
        image: '/img/playingCards/9S.png'
    },
    {
        value: "Ten",
        suit: 'Spades',
        image: '/img/playingCards/10S.png'
    },
    {
        value: "Jack",
        suit: 'Spades',
        image: '/img/playingCards/JS.png'
    },
    {
        value: "Queen",
        suit: 'Spades',
        image: '/img/playingCards/QS.png'
    },
    {
        value: "King",
        suit: 'Spades',
        image: '/img/playingCards/KS.png'
    },

    //------------          CLUBS

    {
        value: "Ace",
        suit: 'Clubs',
        image: '/img/playingCards/AC.png'
    },
    {
        value: "One",
        suit: 'Clubs',
        image: '/img/playingCards/1C.png'
    },
    {
        value: "Two",
        suit: 'Clubs',
        image: '/img/playingCards/2C.png'
    },
    {
        value: "Three",
        suit: 'Clubs',
        image: '/img/playingCards/3C.png'
    },
    {
        value: "Four",
        suit: 'Clubs',
        image: '/img/playingCards/4C.png'
    },
    {
        value: "Five",
        suit: 'Clubs',
        image: '/img/playingCards/5C.png'
    },
    {
        value: "Six",
        suit: 'Clubs',
        image: '/img/playingCards/6C.png'
    },
    {
        value: "Seven",
        suit: 'Clubs',
        image: '/img/playingCards/7C.png'
    },
    {
        value: "Eight",
        suit: 'Clubs',
        image: '/img/playingCards/8C.png'
    },
    {
        value: "Nine",
        suit: 'Clubs',
        image: '/img/playingCards/9C.png'
    },
    {
        value: "Ten",
        suit: 'Clubs',
        image: '/img/playingCards/10C.png'
    },
    {
        value: "Jack",
        suit: 'Clubs',
        image: '/img/playingCards/JC.png'
    },
    {
        value: "Queen",
        suit: 'Clubs',
        image: '/img/playingCards/QC.png'
    },
    {
        value: "King",
        suit: 'Clubs',
        image: '/img/playingCards/KC.png'
    },

    //------------          DIMONDS

    {
        value: "Ace",
        suit: 'Dimonds',
        image: '/img/playingCards/AD.png'
    },
    {
        value: "One",
        suit: 'Dimonds',
        image: '/img/playingCards/1D.png'
    },
    {
        value: "Two",
        suit: 'Dimonds',
        image: '/img/playingCards/2D.png'
    },
    {
        value: "Three",
        suit: 'Dimonds',
        image: '/img/playingCards/3D.png'
    },
    {
        value: "Four",
        suit: 'Dimonds',
        image: '/img/playingCards/4D.png'
    },
    {
        value: "Five",
        suit: 'Dimonds',
        image: '/img/playingCards/5D.png'
    },
    {
        value: "Six",
        suit: 'Dimonds',
        image: '/img/playingCards/6D.png'
    },
    {
        value: "Seven",
        suit: 'Dimonds',
        image: '/img/playingCards/7D.png'
    },
    {
        value: "Eight",
        suit: 'Dimonds',
        image: '/img/playingCards/8D.png'
    },
    {
        value: "Nine",
        suit: 'Dimonds',
        image: '/img/playingCards/9D.png'
    },
    {
        value: "Ten",
        suit: 'Dimonds',
        image: '/img/playingCards/10D.png'
    },
    {
        value: "Jack",
        suit: 'Dimonds',
        image: '/img/playingCards/JD.png'
    },
    {
        value: "Queen",
        suit: 'Dimonds',
        image: '/img/playingCards/QD.png'
    },
    {
        value: "King",
        suit: 'Dimonds',
        image: '/img/playingCards/KD.png'
    }

];

// ar deck = function () {
//     var shuffle = normalPlayingCards[Math.floor(Math.random() * 52)];
//     return shuffle();
// };
// console.log(deck());v

//----------=============       SHUFFLE

var shuffled = normalPlayingCards.sort(function() {
    return 0.5 - Math.random()
});


//----------=============       DEAL

var playerOne = [];
var playerTwo = [];

var i;
for (i = 0; i <= normalPlayingCards.length; i = i + 2) {
    if (normalPlayingCards[i] !== undefined) {
        playerOne.push(normalPlayingCards[i]);
        playerTwo.push(normalPlayingCards[i + 1]);
    }
}
console.log(playerOne, playerTwo);

////=======================------------      DEMO
// if a(player) > b(player)
    // then a(player) === true
// else if a(player + card) < b(player + card)
    // then b(player) === true
// else if a(player + card)  b(player + card)
//--------------



    // Replace the Game's HTML.
    // Just like used the background function in the first example (above), here we're overwriting the HTML that's in the Game object.
    // Everytime this runs, everthing that is in the game div is erased, and replaced with whatever string we pass.
    // In this case, we're passing in our two time-based strings we just created.




//demo  --------------------------------------


////------------ DEMO  ENDING



/////===============================      SCORING

//     var teamOne = document.getElementsByClassName('team1');
//     var teamTwo = document.getElementsByClassName('team2');
//     var teamThree = document.getElementsByClassName('team3');

/// ------------------             BUTTONS FOR SCORING            -----------------------

// for( var i = 0; i < teamOne.length; i++) {
//     console.log(teamOne[i]);
//     teamOne[i].addEventListener('click', function () {
//         team1++;
//     })
// }
//
// for( var i = 0; i < teamTwo.length; i++) {
//     console.log(teamTwo[i]);
//     teamTwo[i].addEventListener('click', function () {
//         team2++;
//     })
// }
//
// for(var i = 0; i < teamThree.length; i++) {
//     document.write(teamThree[i]);
//     teamThree[i].addEventListener('click', function () {
//         team3++;
//     })
// }






//-------------------           PRINTING THE SCORES ON THE PAGE

// Question1
//     team1.score++;
//     team2.score++;
//     team3.score++;

// document.write('<br><h3>Team 1 score  </h3> ' + team1.score);
// document.write('<hrr><h3>Team 2 score  </h3> ' + team2.score);
// document.write('<br><h3>Team 3 score  </h3> ' + team3.score);



////-----------                  TODO!!!
// 2. Make a script that plays the "WAR" game w/ 2 players. Keep track of their scores. Answer, who won?
//
//     3. Make a two player blackjack game.
//
// - model 2 players
// - each player has a hand
// - prompt the user to hit/stay?
//     - if hit, then deal a new card..
// - did they go bust?
//     - the first draft, make the computer always "stay"
// - then, start progressing into new rules for the computer player
// - always stay if over 16
// - figure out how to show if the ace is worth 1 or 11...
//
//
// // Whenever you start a game
// 1. shuffle the deck once
// 2. deal player 1 a card, then deal player 2..
// 3. then deal player 1 a second card, player 2 a second card.
// 4. ask player 1 if they want to hit/stay
// 5. apply logic to whether if the computer player #2 hits/stays
// 6. check to see if both players have stayed.
// 7. compare the hand values of each player
//     ...

// TODO FOR MYSELF
/// add a function for winner at a certain score
// add score streak
// random questions flash and give bonous points
// diffferent questions
// add pentalities for time
// take in 'string' questing and fill in the classes
// take in text input for scoring