<template>
  <div>
    <table class="tftable">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>hello</td>
          <td>hello</td>
          <td>hello</td>
          <td>hello</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

const TransportModes = reactive([]);

const getAllTransportMode = async () => {
  try {
    const response = await fetch('url');
    const data = await JSON.parse(response);
    TransportModes = data;
  } catch (err) {
    console.log(err.message);
  }
};

onMounted(() => {
  getAllTransportMode();
});
</script>

<style scoped>
.tftable {
  font-size: 14px;
  color: #333333;
  width: 100%;
  border-width: 1px;
  border-color: #9810fa;
  border-collapse: collapse;
}
.tftable th {
  font-size: 18px;
  background-color: #9810fa;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #9810fa;
  text-align: left;
}
.tftable tr {
  background-color: #ffffff;
}
.tftable td {
  font-size: 14px;
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #9810fa;
}
.tftable tr:hover {
  background-color: #e0ffff;
}
</style>
