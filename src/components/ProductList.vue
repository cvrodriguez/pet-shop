<template >
  <div class="columns">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        v-model="filterField"
        placeholder="Filter by name"
      />
    </div>
    <table class="table caption-top">
      <caption>
        <h1>Poducts List</h1>
      </caption>
      <thead class="table-light">
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Size</th>
        <th scope="col">Actions</th>
      </thead>
      <tbody>
        <tr v-for="product in filteredList" :key="product.code">
          <td>{{ product.code }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.size }}</td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-primary"
                @click="goToProductUpdate(product.code)"
              >
                Update
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="productDelete(product.code)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-primary" @click="goToProductCreate()">
      Create new Product
    </button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      filterField: "",
    };
  },
  computed: {
    ...mapState(["products"]),

    filteredList() {
      return this.products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.filterField.toLowerCase());
      });
    },
  },
  methods: {
    ...mapActions(["Product_Delete"]),
    goToProductCreate() {
      this.$router.push({ name: "ProductCreate" });
    },
    goToProductUpdate(code) {
      this.$router.push({ name: "ProductDetail", params: { code } });
    },
    productDelete(code){
     this.Product_Delete(code)
     console.log("eentre al delete de la lista", code)


    }
  },
};
</script>
<style scoped>
.columns {
  margin: 10%;
}
.form-control {
  width: 50%;
  float: right;
}
.btn-primary {
  margin-inline: 10%;
}
</style>
