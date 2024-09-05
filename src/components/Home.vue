<script setup>
import { ref, onMounted, watch } from "vue"
import { usePageStore } from "@/stores/pageStore"

const pageStore = usePageStore()
const num1 = ref(pageStore.homeInputs.num1)
const num2 = ref(pageStore.homeInputs.num2)

const calculate = () => {
  console.log("calculate")
  const result = parseFloat(num1.value) + parseFloat(num2.value)
  document.getElementById("result").textContent = "结果: " + result
}

watch([num1, num2], ([newNum1, newNum2]) => {
  pageStore.setHomeInputs({ num1: newNum1, num2: newNum2 })
})

onMounted(() => {
  num1.value = pageStore.homeInputs.num1
  num2.value = pageStore.homeInputs.num2
})
</script>
<template>
  <div class="calculator">
    <input type="number" v-model="num1" placeholder="输入第一个数" />
    <input type="number" v-model="num2" placeholder="输入第二个数" />
    <button @click="calculate()">计算加法</button>
    <div class="result" id="result"></div>
  </div>
</template>
