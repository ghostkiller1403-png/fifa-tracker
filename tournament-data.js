/*
  FIFA Knockout Tracker — TOURNAMENT DATA

  EDIT THIS FILE ONLY.

  After changing:
    1. Save the file.
    2. Commit changes on GitHub.
    3. GitHub Pages redeploys.
    4. Refresh the public tournament URL.

  PENALTY EXAMPLE:

    score1: 2,
    score2: 2,
    penalties: true,
    penWinner: "Anirban Guha",
    penaltyScore1: 4,
    penaltyScore2: 3,
    winner: "Anirban Guha"

  This means:

    Anirban Guha  2
    Robert Gupta  2

    Penalties: 4-3

    Winner: Anirban Guha
*/


const TOURNAMENT_DATA = {

  /*
   * ==========================================
   * PLAYERS
   * ==========================================
   */

  players: [
    "Anirban Guha",
    "Robert Gupta",
    "Prakul Mishra",
    "RajVardhan",
    "Abhilash Naskar",
    "Hodor",
    "Karanbir Singh Dhoul",
    "Rieshi Rao",
    "Meet Gowsawmi",
    "Adhyan Kumar",
    "Chaitanya",
    "Shubh Wadhwa",
    "Jay Mishra",
    "Kartikay Sharma",
    "Kush Soni",
    "Parimal Mishra",
    "Siddhant Singh",
    "Aryaman Singh",
    "Tushar Singh",
    "Hemant Agrawal",
    "Shubham Kashyap",
    "Varun Rathi",
    "Nima"
  ],


  /*
   * ==========================================
   * BRACKET
   * ==========================================
   */

  bracket: {

    /*
     * ========================================
     * PRELIMINARY ROUND
     * ========================================
     */

    prelim: [

      {
        p1: "Anirban Guha",
        p2: "Robert Gupta",

        score1: 0,
        score2: 0,

        winner: "Anirban Guha",

        penalties: True,
        penWinner: null,

        penaltyScore1: 4,
        penaltyScore2: 3,

        bo3: false,
        games: []
      },

      {
        p1: "Prakul Mishra",
        p2: "RajVardhan",

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },

      {
        p1: "Abhilash Naskar",
        p2: "Hodor",

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },

      {
        p1: "Karanbir Singh Dhoul",
        p2: "Rieshi Rao",

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },

      {
        p1: "Meet Gowsawmi",
        p2: "Adhyan Kumar",

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },

      {
        p1: "Chaitanya",
        p2: "Shubh Wadhwa",

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },

      {
        p1: "Jay Mishra",
        p2: "Kartikay Sharma",

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      }

    ],


    /*
     * ========================================
     * ROUND OF 16
     * ========================================
     */

    r16: [

      {
        p1: "Kush Soni",
        p2: null,

        ref2: {
          round: "prelim",
          idx: 0
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        p1: "Parimal Mishra",
        p2: null,

        ref2: {
          round: "prelim",
          idx: 1
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        p1: "Siddhant Singh",
        p2: null,

        ref2: {
          round: "prelim",
          idx: 2
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        p1: "Aryaman Singh",
        p2: null,

        ref2: {
          round: "prelim",
          idx: 3
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        p1: "Tushar Singh",
        p2: null,

        ref2: {
          round: "prelim",
          idx: 4
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        p1: "Hemant Agrawal",
        p2: null,

        ref2: {
          round: "prelim",
          idx: 5
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        p1: "Shubham Kashyap",
        p2: null,

        ref2: {
          round: "prelim",
          idx: 6
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        p1: "Varun Rathi",
        p2: "Nima",

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      }

    ],


    /*
     * ========================================
     * QUARTER FINALS
     * ========================================
     */

    qf: [

      {
        ref1: {
          round: "r16",
          idx: 0
        },

        ref2: {
          round: "r16",
          idx: 1
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        ref1: {
          round: "r16",
          idx: 2
        },

        ref2: {
          round: "r16",
          idx: 3
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        ref1: {
          round: "r16",
          idx: 4
        },

        ref2: {
          round: "r16",
          idx: 5
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      },


      {
        ref1: {
          round: "r16",
          idx: 6
        },

        ref2: {
          round: "r16",
          idx: 7
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,
        games: []
      }

    ],


    /*
     * ========================================
     * SEMI FINALS
     *
     * Best of 3
     * ========================================
     */

    sf: [

      {
        ref1: {
          round: "qf",
          idx: 0
        },

        ref2: {
          round: "qf",
          idx: 1
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        bo3: true,

        games: []
      },


      {
        ref1: {
          round: "qf",
          idx: 2
        },

        ref2: {
          round: "qf",
          idx: 3
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        bo3: true,

        games: []
      }

    ],


    /*
     * ========================================
     * FINAL
     *
     * Best of 3
     * ========================================
     */

    final: [

      {
        ref1: {
          round: "sf",
          idx: 0
        },

        ref2: {
          round: "sf",
          idx: 1
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        bo3: true,

        games: []
      }

    ],


    /*
     * ========================================
     * THIRD PLACE
     * ========================================
     */

    third: [

      {
        ref1: {
          round: "sf",
          idx: 0,
          loser: true
        },

        ref2: {
          round: "sf",
          idx: 1,
          loser: true
        },

        score1: null,
        score2: null,

        winner: null,

        penalties: false,
        penWinner: null,

        penaltyScore1: null,
        penaltyScore2: null,

        bo3: false,

        games: []
      }

    ]

  }

};
