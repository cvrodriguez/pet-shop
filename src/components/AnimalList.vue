<template>
  <div class="columns">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        v-model="filterField"
        placeholder="Filter by firts name"
      />
    </div>
    <table class="table caption-top">
      <caption>
        <h1>Pets List</h1>
      </caption>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Type</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          id="array-with-index"
          v-for="animal in filteredList"
          :key="animal.id"
        >
          <th scope="row">{{ animal.id }}</th>
          <td>{{ animal.name }}</td>
          <td>{{ animal.lastname }}</td>
          <td>{{ animal.type }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="goToAnimal(animal.id)"
            >
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button
      type="button"
      class="btn btn-primary"
      @click="goToAnimalCreate()"
    >
      Create new Animal
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "List",
  props: {
    msg: String,
  },
  data() {
    return {
      
      filterField: "",
    };
  },
  computed: {
    filteredList() {
      return this.animals.filter((animal) => {
        return animal.name
          .toLowerCase()
          .includes(this.filterField.toLowerCase());
      });
    },

    ...mapState(['animals'])
  
  },
  methods: {
    goToAnimal(id) {
      this.$router.push({ name: 'AnimalDetail', params: { id } });
    },
      goToAnimalCreate() {
      this.$router.push({ name: "AnimalCreate"});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.columns {
  margin: 10%;
}
.form-control {
  width: 50%;
  float: right;
}
</style>
