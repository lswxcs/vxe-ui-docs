<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #default_imgUrl="{ row }">
        <vxe-image :src="row.imgUrl" width="36" height="36"></vxe-image>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  imgUrl: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { field: 'imgUrl', title: '图片', width: 80, slots: { default: 'default_imgUrl' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
    { id: 10002, name: 'Test2', role: 'Test', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
    { id: 10003, name: 'Test3', role: 'PM', imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' }
  ]
})
</script>
