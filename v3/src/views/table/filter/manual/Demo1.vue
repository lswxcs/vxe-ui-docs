<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="filterNameEvent">筛选 Name</vxe-button>
        <vxe-button @click="filterAgeEvent">筛选 Age</vxe-button>
        <vxe-button @click="clearFilterEvent1">清除 Age 的筛选条件</vxe-button>
        <vxe-button @click="clearFilterEvent2()">清除所有的筛选条件</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      ref="tableRef"
      height="200"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :filters="nameOptions" :filter-method="filterNameMethod"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex" :filter-multiple="false" :filters="sexOptions"></vxe-column>
      <vxe-column field="age" title="Age" :filters="ageOptions" :filter-method="filterAgeMethod" :filter-recover-method="filterAgeRecoverMethod">
        <template #filter="{ column }">
          <vxe-input v-for="(option, index) in column.filters" :key="index" v-model="option.data" @change="changeOptionEvent(option)"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = []

    const nameOptions: VxeColumnPropTypes.Filters = [
      { label: '包含 6', value: '6' },
      { label: '包含 4', value: '4' }
    ]

    const sexOptions: VxeColumnPropTypes.Filters = [
      { label: 'Man', value: 'Man' },
      { label: 'Women', value: 'Women' }
    ]

    const ageOptions: VxeColumnPropTypes.Filters = [
      { data: '' }
    ]

    return {
      tableData,
      loading: false,
      nameOptions,
      sexOptions,
      ageOptions
    }
  },
  methods: {
    findList () {
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          this.tableData = [
            { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
            { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
            { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
            { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' },
            { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 30, address: 'Guangzhou' },
            { id: 10009, name: 'Test9', role: 'Test', sex: 'Women', age: 28, address: 'test abc' },
            { id: 100010, name: 'Test10', role: 'Test', sex: 'Man', age: 24, address: 'Shanghai' }
          ]
          this.loading = false
          resolve(this.tableData)
        }, 300)
      })
    },
    filterNameMethod ({ value, row }) {
      return XEUtils.toValueString(row.name).toLowerCase().indexOf(value) > -1
    },
    filterAgeMethod ({ option, row }) {
      return row.age === Number(option.data)
    },
    filterAgeRecoverMethod ({ option }) {
      // 如果是自定义筛选模板，当为点击确认时，该选项将被恢复为默认值
      option.data = ''
    },
    filterNameEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const column = $table.getColumnByField('name')
        if (column) {
          // 修改第二个选项为勾选状态
          const option = column.filters[1]
          option.checked = true
          // 如果是直接修复筛选条件，则需要手动调用 updateData 处理表格数据
          $table.updateData()
        }
      }
    },
    filterAgeEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const column = $table.getColumnByField('age')
        if (column) {
          // 修改第一个选项为勾选状态
          const option = column.filters[0]
          option.data = '32'
          option.checked = true
          // 如果是直接修复筛选条件，则需要手动调用 updateData 处理表格数据
          $table.updateData()
        }
      }
    },
    changeOptionEvent (option: any) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.updateFilterOptionStatus(option, !!option.data)
      }
    },
    clearFilterEvent1 () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.clearFilter($table.getColumnByField('age'))
      }
    },
    clearFilterEvent2 () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.clearFilter()
      }
    }
  },
  created () {
    this.findList()
  }
})
</script>
