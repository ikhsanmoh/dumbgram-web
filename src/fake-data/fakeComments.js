import Photos from '../assets/Assets'

const fakeComments = [
  [
    {
      id: 1,
      comment: "Keep it up!",
      user: {
        id: 2,
        fullName: "Messi",
        username: "messi10",
        image: Photos[2]
      }
    },
    {
      id: 5,
      comment: "Noice.",
      user: {
        id: 1,
        fullName: "Ronaldo",
        username: "ranaldo7",
        image: Photos[0]
      }
    },
    {
      id: 7,
      comment: "Who am I?",
      user: {
        id: 1,
        fullName: "Ronaldo",
        username: "ranaldo7",
        image: Photos[0]
      }
    }
  ],
  [
    {
      id: 2,
      comment: "Lets gooo!",
      user: {
        id: 3,
        fullName: "Neymar",
        username: "neymar11",
        image: Photos[9]
      }
    },
    {
      id: 3,
      comment: "Kill it!",
      user: {
        id: 4,
        fullName: "Fabregas",
        username: "fabregas4",
        image: Photos[8]
      }
    },
    {
      id: 6,
      comment: "Who am I?",
      user: {
        id: 1,
        fullName: "Ronaldo",
        username: "ranaldo7",
        image: Photos[0]
      }
    }
  ]
]

export default fakeComments