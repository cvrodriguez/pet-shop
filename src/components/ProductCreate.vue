<template>
  <div class="columns">
    <form class="form-group">
      <div class="row mb-3">
        <label class="row align-items-start">Name </label>
        <input type="text" class="form-control" v-model="product.name" />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Price </label>
        <input type="text" class="form-control" v-model="product.price"  />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Amount </label>
        <input type="text" class="form-control" v-model="product.unit"  />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Size </label>
        <input type="text" class="form-control" v-model="product.size"  />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Color </label>
        <input type="text" class="form-control" v-model="product.color"  />
      </div>
      <div class="row mb-3">
        <label class="row align-items-start">Kind of Animal </label>
        <input type="text" class="form-control" v-model="product.typeOfAnimal" />
      </div>
      <button type="button" class="btn btn-primary" @click="AddProduct()">
        Save
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            product:{
                code: 0,
                name: "",
                price: 0,
                unit: 0,
                size: 0,
                color: "",
                typeOfAnimal: ""
            }
        }
    },
    methods: {
        ...mapActions(["Add_Product"]),
        AddProduct(){
            console.log("me llamaron")
            const {product} = this
            this.Add_Product(product)
            this.$router.push({name: "ProductList"})
        }
    },

    
}
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