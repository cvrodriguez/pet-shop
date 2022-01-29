import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
        animals: [
            {
              id: 1,
              name: "Pocha ",
              lastname: "Rodriguez ",
              type: "Cat",
              age: 0,
              rh: "0+",
            },
            {
              id: 2,
              name: "Chiqui ",
              lastname: "Rodriguez ",
              type: "Dot",
              age: 0,
              rh: "0+",
            },
            {
              id: 3,
              name: "Pancho ",
              lastname: "Rodriguez ",
              type: "Hourse",
              age: 0,
              rh: "0+",
            },
            {
              id: 4,
              name: "Negro ",
              lastname: "Rodriguez ",
              type: "Cat",
              age: 0,
              rh: "0+",
            },
            {
              id: 5,
              name: "Pepe ",
              lastname: "Rodriguez ",
              type: "Dot",
              age: 0,
              rh: "0+",
            },
            {
              id: 6,
              name: "Akira ",
              lastname: "Rodriguez ",
              type: "Hourse",
              age: 0,
              rh: "0+",
            },
            {
              id: 7,
              name: "Gatis ",
              lastname: "Rodriguez ",
              type: "Hourse",
              age: 0,
              rh: "0+",
            },
          ],
    }
  }
})