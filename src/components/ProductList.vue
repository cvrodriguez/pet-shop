<template >
  <div class=" columns">
    <table class="table caption-top">
        <caption>
        <h1>Poducts List</h1>
      </caption>
      <thead class="table-light">
        <th scope="col">CODIGO</th>
        <th scope="col">NOMBRE</th>
        <th scope="col">PRICE</th>
        <th scope="col">SIZE</th>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.code">
        
          <td> {{product.code}}</td>
          <td> {{product.name}}</td>
          <td> {{product.price}}</td>
          <td> {{product.size}}</td>
          <td> </td>
       </tr>
       </tbody>
    </table>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  computed:{
    ...mapState(["products"])
  }
  
}
</script>
<style scoped>
.columns {
  margin: 10%;
}
.form-control {
  width: 50%;
  float: right;
}
.btn-primary{
 
  margin-inline: 10%;
  
}
</style>
