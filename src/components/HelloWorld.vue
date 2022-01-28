<template>
  <div class="hello">
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
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="animal in filteredList" :key="animal.name"  >
          <th scope="row" ></th>
          <td>{{ animal.name }}</td>
          <td>{{ animal.lastname }}</td>
          <td>{{ animal.type }}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary">Bootstrap collapse</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      animals: [
        {
          name: "Pocha ",
          lastname: "Rodriguez ",
          type: "Cat",
          age: 0,
          rh: "0+",
        },
        {
          name: "Chiqui ",
          lastname: "Rodriguez ",
          type: "Dot",
          age: 0,
          rh: "0+",
        },
        {
          name: "Pancho ",
          lastname: "Rodriguez ",
          type: "Hourse",
          age: 0,
          rh: "0+",
        },
        {
          name: "Negro ",
          lastname: "Rodriguez ",
          type: "Cat",
          age: 0,
          rh: "0+",
        },
        {
          name: "Pepe ",
          lastname: "Rodriguez ",
          type: "Dot",
          age: 0,
          rh: "0+",
        },
        {
          name: "Akira ",
          lastname: "Rodriguez ",
          type: "Hourse",
          age: 0,
          rh: "0+",
        },
        {
          name: "Gatis ",
          lastname: "Rodriguez ",
          type: "Hourse",
          age: 0,
          rh: "0+",
        },
      ],
      filterField: ''
    };
  },
   computed: {
    filteredList() {
      return this.animals.filter(animal => {
        return animal.name.toLowerCase().includes(this.filterField.toLowerCase())
      })
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
