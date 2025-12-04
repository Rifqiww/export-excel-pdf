import { NuxtApp } from "#app";
import * as XLSX from "xlsx";

declare module "#app" {
  interface NuxtApp {
    $xlsx: typeof XLSX;
    $html2pdf: any;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $xlsx: typeof XLSX;
    $html2pdf: any;
  }
}

export {};
