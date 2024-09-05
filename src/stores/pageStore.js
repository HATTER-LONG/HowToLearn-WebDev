import { defineStore } from "pinia"

export const usePageStore = defineStore("page", {
  state: () => ({
    currentPage: "Home",
    sidebarCollapsed: false,
    homeInputs: { num1: "", num2: "" },
    page1Inputs: { num1: "", num2: "" },
    page2Inputs: { num1: "", num2: "" }
  }),
  actions: {
    setPage(page) {
      this.currentPage = page
    },
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    },
    setHomeInputs(inputs) {
      this.homeInputs = inputs
    },
    setPage1Inputs(inputs) {
      this.page1Inputs = inputs
    },
    setPage2Inputs(inputs) {
      this.page2Inputs = inputs
    }
  }
})
