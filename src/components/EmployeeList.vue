<template>
  <div class="columns">
    <table class="table caption-top">
      <caption>
        <h1>Employee List</h1>
      </caption>
      <thead class="table-light">
        <th scope="col">Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Mail</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Position</th>
        ...
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
    
          <td>{{ employee.name }}</td>
          <td>{{ employee.lastname }}</td>
          <td>{{ employee.mail }}</td>
          <td>{{ employee.phoneNumber }}</td>
          <td>{{ employee.position }}</td>
        
          ...
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["employees"]),
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