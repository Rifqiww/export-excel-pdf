<script setup lang="ts">
import { useDataStore } from "~/stores/useDataStores";

const store = useDataStore();
</script>

<template>
  <div class="card">
    <DataTable
      id="heroes-table"
      :value="store.heroes"
      tableStyle="min-width: 20rem"
    >
      <Column field="name" header="Hero Name"></Column>
      <Column field="weapon" header="Weapon"></Column>
      <Column field="role" header="Class"></Column>
    </DataTable>
  </div>
</template>
