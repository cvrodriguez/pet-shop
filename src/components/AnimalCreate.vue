<template>
  <div class="columns">
    <form>
      <div class="row mb-3">
        <label class="row align-items-start">First name</label>
        <input type="text" class="form-control" v-model="animal.name" />
      </div>

      <div class="row mb-3">
        <label class="row align-items-start">Last name</label>
        <input type="text" class="form-control" v-model="animal.lastname" />
      </div>

      <div class="row mb-3">
        <label class="row align-items-start">Email Contact</label>
        <input
          type="email"
          class="form-control"
          v-model="animal.emailContact"
        />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Date of birth</label>
        <input type="date" class="form-control" v-model="animal.age" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Type of animal</label>
        <input type="text" class="form-control" v-model="animal.type" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">RH</label>
        <input type="text" class="form-control" v-model="animal.rh" />
      </div>
      <button type="button" class="btn btn-primary" @click="AddAnimal()">
        Save
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {

      animal: {
     
      },
    };
  },

  methods: {
    ...mapActions(["Add_Animal"]),
    AddAnimal() {
      const { animal } = this;
      // const aninal = this.animal
      this.Add_Animal(animal); 
      this.$router.push({ name: "AnimalList" })
    },
  },

  computed: {
    ...mapState(["animals"]),
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
.row  {
  
  width: 50%;
 
  
}
</style>