<script setup lang="ts">
import { ref } from "vue";
import { useDataStore } from "~/stores/useDataStores";

const store = useDataStore();

const newUser = ref({
  name: "",
  weapon: "",
  role: "",
});

const addUser = () => {
  if (newUser.value.name && newUser.value.weapon) {
    store.addUser({ ...newUser.value });
    newUser.value.name = "";
    newUser.value.weapon = "";
    newUser.value.role = "Fighter";
  } else {
    alert("Please fill in Hero Name and Weapon");
  }
};
</script>

<template>
  <div class="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
    <h2 class="text-lg font-semibold mb-4 text-gray-700">Recruit New Hero</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <InputText
        v-model="newUser.name"
        placeholder="Hero Name"
        class="w-full"
      />
      <InputText v-model="newUser.weapon" placeholder="Weapon" class="w-full" />
      <Select
        v-model="newUser.role"
        :options="['King', 'Slayer', 'Magister', 'Fighter', 'Queen']"
        placeholder="Select Class"
        class="w-full"
      />
    </div>
    <Button label="Recruit Hero" @click="addUser" class="mt-4" />
  </div>
</template>
