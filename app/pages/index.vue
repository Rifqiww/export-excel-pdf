<script setup lang="ts">
import { useDataStore } from "~/stores/useDataStores";

const store = useDataStore();
const { $xlsx, $html2pdf } = useNuxtApp();

const exportExcel = () => {
  const ws = $xlsx.utils.json_to_sheet(store.heroes);
  const wb = $xlsx.utils.book_new();
  $xlsx.utils.book_append_sheet(wb, ws, "Heroes");
  $xlsx.writeFile(wb, "heroes_list.xlsx");
};

const exportPdf = async () => {
  if (import.meta.client && $html2pdf) {
    const element = document.getElementById("export-content");
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: "guild_roster.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1.5, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    try {
      await $html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF Export Error:", error);
    }
  }
};
</script>

<template>
  <div class="bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
      <UserForm />
      <div class="flex gap-4 mb-4">
        <Button
          label="Export Excel"
          icon="pi pi-file-excel"
          severity="success"
          @click="exportExcel"
        />
        <Button
          label="Export PDF"
          icon="pi pi-file-pdf"
          severity="danger"
          @click="exportPdf"
        />
      </div>

      <div
        id="export-content"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8"
      >
        <div>
          <UserTable />
        </div>
        <div
          class="p-8 bg-white rounded-lg border border-gray-200"
          style="page-break-inside: avoid"
        >
          <h2 class="text-lg font-semibold mb-4 text-gray-700">
            Guild Statistics
          </h2>
          <UserChart />
        </div>
      </div>
    </div>
  </div>
</template>
