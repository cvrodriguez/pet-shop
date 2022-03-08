
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      animals: [{
        id: 1,
        name: "Pocha ",
        lastname: "Rodriguez ",
        emailContact: "Pocha@pet.com",
        type: "Cat",
        age: 0,
        validated: false,
        rh: "0+",
        imag: "https://static6.depositphotos.com/1000291/651/i/600/depositphotos_6518860-stock-photo-british-shorthair-kitten-cat-isolated.jpg"
      },
      {
        id: 2,
        name: "Chiqui ",
        lastname: "Rodriguez ",
        type: "Dog",
        age: 3,
        rh: "0+",
        imag: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inquisitive-chihuahua-royalty-free-image-120927079-1542376611.jpg?crop=1xw:1xh;center,top&resize=480:*"
      },
      {
        id: 3,
        name: "Pancho ",
        lastname: "Rodriguez ",
        type: "Horse",
        age: 9,
        rh: "0+",
        imag: "https://us.123rf.com/450wm/sanne198/sanne1982002/sanne198200200032/141164447-retrato-de-un-bonito-pony-casta%C3%B1o-delante-de-una-pared-blanca-tiene-heno-en-la-boca-.jpg?ver=6"
      },
      {
        id: 4,
        name: "Negro ",
        lastname: "Rodriguez ",
        type: "Cat",
        age: 0,
        rh: "0+",
        imag: "https://static6.depositphotos.com/1000291/651/i/600/depositphotos_6518860-stock-photo-british-shorthair-kitten-cat-isolated.jpg"
      },
      {
        id: 5,
        name: "Pepe ",
        lastname: "Rodriguez ",
        type: "Dog",
        age: 13,
        rh: "0+",
        imag: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inquisitive-chihuahua-royalty-free-image-120927079-1542376611.jpg?crop=1xw:1xh;center,top&resize=480:*"
      },
      {
        id: 6,
        name: "Akira ",
        lastname: "Rodriguez ",
        type: "Horse",
        age: 9,
        rh: "0+",
        imag: "https://us.123rf.com/450wm/sanne198/sanne1982002/sanne198200200032/141164447-retrato-de-un-bonito-pony-casta%C3%B1o-delante-de-una-pared-blanca-tiene-heno-en-la-boca-.jpg?ver=6"
      },
      {
        id: 7,
        name: "Gatis ",
        lastname: "Rodriguez ",
        type: "Horse",
        age: 16,
        rh: "0+",
        imag: "https://us.123rf.com/450wm/sanne198/sanne1982002/sanne198200200032/141164447-retrato-de-un-bonito-pony-casta%C3%B1o-delante-de-una-pared-blanca-tiene-heno-en-la-boca-.jpg?ver=6"
      }],
      products: [{
        code: "AP-01",
        name: "Collar",
        price: 23.000,
        unit: 5,
        size: "mediano",
        color: "negro"
      },
      {
        code: "AP-02",
        name: "Camisa",
        price: 28.000,
        unit: 15,
        size: "pequeño",
        color: "blanco"
      },
      {code: "AP-02",
      name: "Camisa",
      price: 28.000,
      unit: 15,
      size: "pequeño",
      color: "blanco"
    }]

    }

  },
  mutations: {
    ADD_ANIMAL(state, animal) {
      animal.id = state.animals.length
      state.animals.push(animal)
    },

    UPDATE_ANIMAL(state, animalesP) {
      state.animals = animalesP

    },
    DELETE_ANIMAL(state, index) {
      state.animals.splice(index, 1)
    }
  },
  actions: {

    Add_Animal({ commit }, animal) {
      commit("ADD_ANIMAL", animal)
      console.log(animal)
    },

    Update_Animal({ commit, state }, { animal, id }) {
      const animalesCopy = [...state.animals];
      const i = animalesCopy.findIndex((animal) => {
        if (animal.id == id) {
          return true
        }
      })
      animalesCopy[i] = animal
      commit("UPDATE_ANIMAL", animalesCopy)
    },

    delete_animal({ commit, state }, { id }) {

      const index = state.animals.findIndex((animal) => {
        if (animal.id == id)
          return true
        console.log(index, "se supone soy index")
      })

      commit("DELETE_ANIMAL", index)
    }


  }
})