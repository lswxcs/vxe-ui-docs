// main.js

import { VxeUI, VxeLink } from 'vxe-pc-ui'

// 创建一个单元格超链接
VxeUI.renderer.add('MyTableCellLink', {
  // 默认显示模板
  renderTableDefault (renderOpts, params) {
    const { row, column } = params
    return <VxeLink href={row.url} status="primary" target="_blank">{row[column.field]}</VxeLink>
  }
})
