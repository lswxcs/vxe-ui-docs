<template>
  <div>
    <vxe-form
      title-width="120"
      :data="formData">
      <vxe-form-item title="名称" field="name" span="24" :item-render="{}">
        <template #default>
          <el-input v-model="formData.name"></el-input>
        </template>
      </vxe-form-item>
      <vxe-form-item title="评分" field="num" span="24" :item-render="{}">
        <template #default="{ data }">
          <el-rate v-model="data.num"></el-rate>
        </template>
      </vxe-form-item>
      <vxe-form-item align="center" span="24">
        <template #default>
          <el-button native-type="reset">重置</el-button>
          <el-button native-type="submit" type="primary">提交</el-button>
        </template>
      </vxe-form-item>
    </vxe-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface FormDataVO {
  name: string
  num: number
}

export default Vue.extend({
  data () {
    const formData: FormDataVO = {
      name: 'test1',
      num: 4
    }

    return {
      formData
    }
  }
})
</script>
