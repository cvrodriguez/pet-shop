<template>
  <div class="columns">
    <form>
      <div class="row mb-3">
        <label class="row align-items-start">Name </label>
        <input type="text" class="form-control" v-model="product.name" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Price</label>
        <input type="text" class="form-control" v-model="product.price" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Amount</label>
        <input type="text" class="form-control" v-model="product.unit" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Size</label>
        <input type="text" class="form-control" v-model="product.size" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Color</label>
        <input type="text" class="form-control" v-model="product.color" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Animal</label>
        <input
          type="text"
          class="form-control"
          v-model="product.typeOfAnimal"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="updateProduct()">
        Update
      </button>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      product: {},
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    
    const productoByI = this.products.find((product) => {
      return product.code == this.$route.params.code;
    });
    this.product = {...productoByI} 
  },
  methods: {
    ...mapActions(["Update_Product"]),

    updateProduct() {
     
      const productu = this.product;
      console.log("si entro aqui", productu);
      this.Update_Product({ productu });
      this.$router.push({ name: "ProductList" });
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