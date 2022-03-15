<template>
  <div class="columns">
    <img class="rounded float-start" :src="filterById.imag" />
    <form>
      <div class="row mb-3">
        <label class="row align-items-start">First name</label>
        <input type="text" class="form-control" v-model="filterById.name" />
      </div>

      <div class="row mb-3">
        <label class="row align-items-start">Last name</label>
        <input type="text" class="form-control" v-model="filterById.lastname" />
      </div>

      <div class="row mb-3">
        <label class="row align-items-start">Email Contact</label>
        <input
          type="email"
          class="form-control"
          v-model="filterById.emailContact"
        />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Date of birth</label>
        <input type="date" class="form-control" v-model="filterById.age" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Type of animal</label>
        <input type="text" class="form-control" v-model="filterById.type" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">RH</label>
        <input type="text" class="form-control" v-model="filterById.rh" />
      </div>
      <button type="button" class="btn btn-primary" @click="UpdateAnimal()">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  
  computed: {
    filterById() {
      const animal = this.animals.find((animal) => {
        return animal.id == this.$route.params.id;
      });
      console.log(animal);
      return {...animal};
    },

    ...mapState(["animals"]),
  },
  methods: {
    ...mapActions(["Update_Animal"]),

    UpdateAnimal() {
      const id = this.filterById.id;
      const animal = this.filterById;
      console.log(animal, "update animal")

      this.Update_Animal({id, animal})
      this.$router.push({ name: "AnimalList" })
      
    },
  },
};
</script>
<style scoped>
.columns {
  margin: 10%;
}

.form-control {
  width: 50%;
}
.row {
  width: 50%;
}
</style>