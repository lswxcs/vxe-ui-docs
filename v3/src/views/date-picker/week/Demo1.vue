<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="周选择，周天开始" type="week" :start-day="0"></vxe-date-picker>
    <vxe-date-picker v-model="val2" placeholder="周选择，周一开始" type="week" :start-day="1"></vxe-date-picker>
    <vxe-date-picker v-model="val3" placeholder="周选择，周二开始" type="week" :start-day="2"></vxe-date-picker>
    <vxe-date-picker v-model="val4" placeholder="周选择，周三开始" type="week" :start-day="3" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val5" placeholder="周选择，周四开始" type="week" :start-day="4" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val6" placeholder="周选择，周五开始" type="week" :start-day="5" clearable></vxe-date-picker>
    <vxe-date-picker v-model="val7" placeholder="周选择，周六开始" type="week" :start-day="6" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      val5: '',
      val6: '',
      val7: ''
    }
  }
})
</script>
