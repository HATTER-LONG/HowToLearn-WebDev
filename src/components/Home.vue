<script setup>
import { ref, onMounted, watch } from "vue"
import { usePageStore } from "@/stores/pageStore"
import { Check, Delete, Edit, Message, Search, Star } from "@element-plus/icons-vue"
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
  <div class="body">
    <div class="calculator">
      <el-input-number type="number" v-model="num1" placeholder="输入第一个数" />
      <el-text type="primary">+</el-text>
      <el-input-number type="number" v-model="num2" placeholder="输入第二个数" />
      <el-button @click="calculate">计算加法</el-button>
    </div>
    <div class="result-container"><el-text class="result" id="result"></el-text></div>
  </div>
</template>

<style scoped>
.calculator {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.el-input-number {
  width: 200px;
  margin: 0 10px; /* 左右各增加10px的间隔 */
}
.el-text {
  font-size: 30px;
  align-items: center;
}
.result-container {
  width: 100%;
  margin-top: 10px; /* 增加一些上间距 */
}
.result {
  display: block;
  width: 100%;
  text-align: center; /* 居中显示结果 */
}
</style>
