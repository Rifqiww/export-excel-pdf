<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useDataStore } from "~/stores/useDataStores";

const store = useDataStore();

const chartData = computed(() => {
  const roleCounts: Record<string, number> = {};

  store.heroes.forEach((user) => {
    roleCounts[user.role] = (roleCounts[user.role] || 0) + 1;
  });

  return {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        label: "Heroes per Class",
        data: Object.values(roleCounts),
        backgroundColor: [
          "rgba(249, 115, 22, 0.2)",
          "rgba(6, 182, 212, 0.2)",
          "rgba(107, 114, 128, 0.2)",
          "rgba(139, 92, 246, 0.2)",
        ],
        borderColor: [
          "rgb(249, 115, 22)",
          "rgb(6, 182, 212)",
          "rgb(107, 114, 128)",
          "rgb(139, 92, 246)",
        ],
        borderWidth: 1,
      },
    ],
  };
});

const chartOptions = ref({
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
  maintainAspectRatio: false,
});
</script>

<template>
  <div class="card">
    <Chart type="bar" :data="chartData" :options="chartOptions" class="h-80" />
  </div>
</template>
