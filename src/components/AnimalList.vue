<template>
  <div>
    <div class="form-group">
      <label> Nombre</label>
      <input type="text" class="form-control" v-model="filterField"/>
    </div>
    <table class="table caption-top">
      <caption>
        List of users
      </caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Type</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody >
        <tr id="array-with-index" v-for="(animal, index ) in filteredList" :key="animal.name"  >
          <th scope="row" >{{index}}</th>
          <td>{{ animal.name }}</td>
          <td>{{ animal.lastname }}</td>
          <td>{{ animal.type }}</td>
          <td><button type="button" class="btn btn-primary" @click="goToAnimal(animal.id)">Editar</button></td>

        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary">Bootstrap collapse</button>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    msg: String,
  },
  data() {
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
  },
  methods: {

    goToAnimal (id) {
      
      this.$router.push({ name: 'AnimalDetail', params: { id } })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
