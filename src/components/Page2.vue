<script setup>
import { ref, onMounted, watch } from "vue"
import { usePageStore } from "@/stores/pageStore"

const pageStore = usePageStore()
const num1 = ref(pageStore.page2Inputs.num1)
const num2 = ref(pageStore.page2Inputs.num2)

const calculate = () => {
  console.log("calculate")
  const result = parseFloat(num1.value) * parseFloat(num2.value)
  document.getElementById("result").textContent = "结果: " + result
}

watch([num1, num2], ([newNum1, newNum2]) => {
  pageStore.setPage2Inputs({ num1: newNum1, num2: newNum2 })
})

onMounted(() => {
  num1.value = pageStore.page2Inputs.num1
  num2.value = pageStore.page2Inputs.num2
})
</script>
<template>
  <div class="calculator">
    <input type="number" v-model="num1" placeholder="输入第一个数" />
    <input type="number" v-model="num2" placeholder="输入第二个数" />
    <button @click="calculate()">计算乘法</button>
    <div class="result" id="result"></div>
  </div>
</template>
