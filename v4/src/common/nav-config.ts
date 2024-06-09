export interface NavVO {
  title: string
  name?: string
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
  isUnpublished?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  keywords?: string[]
  children?: NavVO[]
}

export const navConfigList: NavVO[] = [
  {
    title: '开发指南',
    isExpand: true,
    children: [
      { title: '全局安装', routerLink: { name: 'StartInstall' } },
      { title: '按需加载', routerLink: { name: 'StartUse' } },
      { title: '全局参数', routerLink: { name: 'StartConfig' } },
      { title: '全局主题', routerLink: { name: 'StartTheme' } },
      { title: '全局图标', routerLink: { name: 'StartIcons' } },
      { title: '全局 z-index', routerLink: { name: 'StartUseZIndex' } },
      { title: '国际化', routerLink: { name: 'StartI18n' } }
    ]
  },
  {
    title: '工具类',
    children: [
      // { title: '函数库' },
      { title: '剪贴板', routerLink: { name: 'ToolClipboard' } }
    ]
  },
  {
    title: '基础组件',
    children: [
      {
        title: 'Icon 图标',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'icon' } } },
          { title: '图标列表', routerLink: { name: 'ComponentIcon' } }
        ]
      },
      {
        title: 'Text 文本',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'text' } } },
          { title: '状态颜色', routerLink: { name: 'ComponentText' } }
        ]
      },
      {
        title: 'Link 链接',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'link' } } },
          { title: '状态颜色', routerLink: { name: 'ComponentLink' } }
        ]
      },
      {
        title: 'Tag 标签',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tag' } } },
          { title: '状态颜色', routerLink: { name: 'ComponentTag' } }
        ]
      },
      {
        title: 'Button 按钮',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'button' } } },
          { title: '状态颜色', routerLink: { name: 'ComponentButton' } }
        ]
      }
    ]
  },
  {
    title: '导航组件',
    children: [
      {
        title: 'Breadcrumb 面包屑',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'breadcrumb' } } },
          { title: '基础', routerLink: { name: 'ComponentBreadcrumb' } }
        ]
      },
      {
        title: 'Menu 菜单',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'menu' } } },
          { title: '基础', routerLink: { name: 'ComponentMenu' } }
        ]
      },
      {
        title: 'Anchor 锚点',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'anchor' } } },
          { title: '自定义容器', routerLink: { name: 'ComponentAnchor' } }
        ]
      },
      {
        title: 'Pager 分页',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pager' } } },
          { title: '尺寸', routerLink: { name: 'ComponentPagerSize' } },
          { title: '对齐方式', routerLink: { name: 'ComponentPagerAlign' } },
          { title: '自定义页大小列表', routerLink: { name: 'ComponentPagerPageSize' } },
          { title: '自定义布局', routerLink: { name: 'ComponentPagerLayout' } },
          { title: '自定义模板', routerLink: { name: 'ComponentPagerTemplate' } }
        ]
      }
    ]
  },
  {
    title: '容器组件',
    children: [
      {
        title: 'Layout 页面布局',
        children: [
          { title: '页面布局', routerLink: { name: 'ComponentLayout' } }
        ]
      },
      {
        title: 'Row 行与列',
        children: [
          { title: '行列排版', routerLink: { name: 'ComponentRow' } }
        ]
      },
      // { title: 'Progress 进度条' },
      {
        title: 'Card 卡片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'card' } } },
          { title: '基础', routerLink: { name: 'ComponentCardBase' } },
          { title: '宽度', routerLink: { name: 'ComponentCardWidth' } },
          { title: '高度', routerLink: { name: 'ComponentCardHeight' } },
          { title: '显示/隐藏边框', routerLink: { name: 'ComponentCardBorder' } },
          { title: '显示/隐藏边距', routerLink: { name: 'ComponentCardPadding' } },
          { title: '边框阴影', routerLink: { name: 'ComponentCardShadow' } },
          { title: '自定义模板', routerLink: { name: 'ComponentCardTemplate' } }
        ]
      },
      {
        title: 'Image 图片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image' } } },
          { title: '设置宽高', routerLink: { name: 'ComponentImageBase' } },
          { title: '懒加载', routerLink: { name: 'ComponentImageLazy' } }
        ]
      },
      {
        title: 'ImagePreview 图片预览',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image-preview' } } },
          { title: '打开预览', routerLink: { name: 'ComponentImagePreview' } }
        ]
      },
      {
        title: 'Tabs 页签',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tabs' } } },
          { title: '基础', routerLink: { name: 'ComponentTabsBase' } },
          { title: '卡片风格', routerLink: { name: 'ComponentTabsCard' } },
          { title: '边框背景的卡片', routerLink: { name: 'ComponentTabsBorderCard' } },
          { title: '设置高度', routerLink: { name: 'ComponentTabsHeight' } },
          { title: '圆角边框背景的卡片', routerLink: { name: 'ComponentTabsRoundCard' } }
        ]
      },
      {
        title: 'Pulldown 下拉容器',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pulldown' } } },
          { title: '基础', routerLink: { name: 'ComponentPulldownBase' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentPulldownTemplate' } },
          { title: '可搜索的下拉框', routerLink: { name: 'ComponentPulldownSelect' } },
          { title: '实现下拉表格', routerLink: { name: 'ComponentPulldownTable' } }
        ]
      },
      // { title: 'Carousel 走马灯' },
      // { title: 'Calendar 日历' },
      // { title: 'Collapse 折叠面板' },
      {
        title: 'List 虚拟列表',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list' } } },
          { title: '实现大量数据列表', routerLink: { name: 'ComponentListBase' } },
          { title: '实现大量数据表格', routerLink: { name: 'ComponentListTable' } }
        ]
      }
    ]
  },
  {
    title: '表单',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form' } } },
      {
        title: '基础表单',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormBasicsBase' } },
          { title: '尺寸', routerLink: { name: 'ComponentFormBasicsSize' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormBasicsVertical' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormBasicsColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormBasicsBold' } },
          { title: '标题宽度', routerLink: { name: 'ComponentFormBasicsWidth' } },
          { title: '对齐方式', routerLink: { name: 'ComponentFormBasicsAlign' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentFormBasicsOverflow' } },
          { title: '文字提示', routerLink: { name: 'ComponentFormBasicsTooltip' } },
          { title: '分行/分列', routerLink: { name: 'ComponentFormBasicsGather' } },
          { title: '自定义布局', routerLink: { name: 'ComponentFormBasicsCustomLayout' } },
          { title: '折叠表单', routerLink: { name: 'ComponentFormBasicsCollapse' } },
          { title: '表单校验', routerLink: { name: 'ComponentFormBasicsValid' } }
        ]
      },
      {
        title: '配置式表单',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormConfigBase' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormConfigVertical' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormConfigColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormConfigBold' } },
          { title: '文字提示', routerLink: { name: 'ComponentFormConfigTooltip' } },
          { title: '分行/分列', routerLink: { name: 'ComponentFormConfigGather' } },
          { title: '折叠表单', routerLink: { name: 'ComponentFormConfigCollapse' } },
          { title: '表单校验', routerLink: { name: 'ComponentFormConfigValid' } }
        ]
      }
      // { title: '校验器（全局）' }
    ]
  },
  {
    title: '数据组件',
    children: [
      {
        title: 'Switch 开关',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'switch' } } },
          { title: '开关', routerLink: { name: 'ComponentSwitch' } }
        ]
      },
      {
        title: 'Radio 单选框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'radio' } } },
          { title: '单选框', routerLink: { name: 'ComponentRadio' } }
        ]
      },
      {
        title: 'Checkbox 复选框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'checkbox' } } },
          { title: '多选框', routerLink: { name: 'ComponentCheckbox' } }
        ]
      },
      {
        title: 'Input 输入框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'input' } } },
          { title: '文本类型', routerLink: { name: 'ComponentInputText' } },
          { title: '搜索类型', routerLink: { name: 'ComponentInputSearch' } },
          { title: '密码类型', routerLink: { name: 'ComponentInputPassword' } },
          { title: '时间类型', routerLink: { name: 'ComponentInputTime' } },
          { title: '日期类型', routerLink: { name: 'ComponentInputDate' } },
          { title: '日期带时间类型', routerLink: { name: 'ComponentInputDatetime' } },
          { title: '周类型', routerLink: { name: 'ComponentInputWeek' } },
          { title: '月度类型', routerLink: { name: 'ComponentInputMonth' } },
          { title: '季度类型', routerLink: { name: 'ComponentInputQuarter' } },
          { title: '年度类型', routerLink: { name: 'ComponentInputYear' } },
          { title: '数值类型', routerLink: { name: 'ComponentInputNumber' } },
          { title: '整数类型', routerLink: { name: 'ComponentInputInteger' } },
          { title: '小数类型', routerLink: { name: 'ComponentInputFloat' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentInputTemplate' } }
        ]
      },
      // { title: 'TextInput 单行文本输入' },
      {
        title: 'Textarea 多行文本输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'textarea' } } },
          { title: '多行输入', routerLink: { name: 'ComponentTextarea' } }
        ]
      },
      {
        title: 'NumberInput 数值输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'number-input' } } },
          { title: '数值输入', routerLink: { name: 'ComponentNumberInput' } }
        ]
      },
      {
        title: 'PasswordInput 密码输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'password-input' } } },
          { title: '密码输入', routerLink: { name: 'ComponentPasswordInput' } }
        ]
      },
      // { title: 'DatePicker 日期选择器' },
      // { title: 'WeekPicker 周选择器' },
      // { title: 'MonthPicker 月选择器' },
      // { title: 'QuarterPicker 季度选择' },
      // { title: 'YearPicker 年选择器' },
      // { title: 'TimePicker 时间选择器' },
      // { title: 'DateTimePicker日期带时间选择器' },
      {
        title: 'Select 下拉框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'select' } } },
          { title: '单选', routerLink: { name: 'ComponentSelect' } }
        ]
      },
      {
        title: 'Tree 树形组件',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree' } } },
          { title: '基础树', routerLink: { name: 'ComponentTreeBase' } },
          { title: '高亮行', routerLink: { name: 'ComponentTreeCurrent' } },
          { title: '单选框', routerLink: { name: 'ComponentTreeRadio' } },
          { title: '复选框', routerLink: { name: 'ComponentTreeCheckbox' } }
        ]
      },
      // { title: 'TreeSelect 树形下拉框' },
      {
        title: 'Upload 上传',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'upload' } } },
          { title: '文件上传', routerLink: { name: 'ComponentUploadFile' } },
          { title: '图片上传', routerLink: { name: 'ComponentUploadImage' } }
        ]
      }
      // { title: 'Transfer 穿梭框' }
    ]
  },
  {
    title: '表格',
    children: [
      { title: '点击查看完整文档', linkUrl: 'https://vxetable.cn/v4.7/' },
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } } },
      {
        title: '静态表格',
        children: [
          {
            title: '基础功能',
            children: [
              { title: '基础', routerLink: { name: 'ComponentTableBaseBasic' } },
              { title: '尺寸', routerLink: { name: 'ComponentTableBaseSize' } },
              { title: '数据类型', routerLink: { name: 'ComponentTableBaseData' } },
              { title: '空数据提示', routerLink: { name: 'ComponentTableBaseEmpty' } },
              { title: '边框', routerLink: { name: 'ComponentTableBaseBorder' } },
              { title: '圆角', routerLink: { name: 'ComponentTableBaseRound' } },
              { title: '对齐方式', routerLink: { name: 'ComponentTableBaseAlign' } },
              { title: '列宽设置', routerLink: { name: 'ComponentTableBaseWidth' } },
              { title: '自动换行', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
              { title: '溢出隐藏', routerLink: { name: 'ComponentTableBaseOverflow' } },
              { title: '文本提示', routerLink: { name: 'ComponentTableBaseTooltip' } },
              { title: '斑马线样式', routerLink: { name: 'ComponentTableBaseStripe' } },
              { title: '单元格样式', routerLink: { name: 'ComponentTableBaseStyle' } },
              { title: '动态样式', routerLink: { name: 'ComponentTableBaseDynamicStyle' } },
              { title: '隐藏表头', routerLink: { name: 'ComponentTableBaseHeader' } },
              { title: '高亮列', routerLink: { name: 'ComponentTableBaseHeaderHighlight' } },
              { title: '拖拽调整列宽', routerLink: { name: 'ComponentTableBaseHeaderResizable' } },
              { title: '表格最小高度', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' } },
              { title: '表格高度', routerLink: { name: 'ComponentTableBaseHeight' } },
              { title: '表格最大高度', routerLink: { name: 'ComponentTableBaseMaxHeight' } },
              { title: '表格响应式高度', routerLink: { name: 'ComponentTableBaseAutoHeight' } },
              { title: '设置行度', routerLink: { name: 'ComponentTableBaseRowHeight' } },
              { title: '冻结列', routerLink: { name: 'ComponentTableBaseFixed' } },
              { title: '冻结表头和列', routerLink: { name: 'ComponentTableBaseFixedFull' } },
              { title: '分组表头', routerLink: { name: 'ComponentTableBaseGroup' } },
              { title: '高亮行与列', routerLink: { name: 'ComponentTableBaseCurrent' } },
              { title: '排序', routerLink: { name: 'ComponentTableBaseSort' } },
              { title: '筛选', routerLink: { name: 'ComponentTableBaseFilter' } },
              { title: '加载中', routerLink: { name: 'ComponentTableBaseLoading' } },
              { title: '格式化内容', routerLink: { name: 'ComponentTableBaseFormat' } },
              { title: '序号', routerLink: { name: 'ComponentTableBaseSeq' } },
              { title: '单选框', routerLink: { name: 'ComponentTableBaseRadio' } },
              { title: '复选框', routerLink: { name: 'ComponentTableBaseSelection' } },
              { title: 'HTML 类型', routerLink: { name: 'ComponentTableBaseHtml' } },
              { title: '完整案例', routerLink: { name: 'ComponentTableBaseFull' } }
            ]
          },
          {
            title: '单元格合并',
            children: [
              { title: '合并行', routerLink: { name: 'ComponentTableMergeRow' } },
              { title: '合并列', routerLink: { name: 'ComponentTableMergeColumn' } },
              { title: '合并行与列', routerLink: { name: 'ComponentTableMergeAll' } }
            ]
          },
          {
            title: '表尾数据',
            children: [
              { title: '标准结构', routerLink: { name: 'ComponentTableFooterFooterData' } },
              { title: '自定义数据方法', routerLink: { name: 'ComponentTableFooterFooterMethod' } }
            ]
          },
          // {
          //   title: '展开行',
          //   children: []
          // },
          // {
          //   title: '右键菜单',
          //   children: []
          // },
          {
            title: '工具栏',
            children: [
              { title: '工具栏布局', routerLink: { name: 'ComponentTableToolbarBasic' } },
              { title: '自定义列', routerLink: { name: 'ComponentTableToolbarCustom' } }
            ]
          },
          {
            title: '自定义列',
            children: [
              { title: '关联工具栏', routerLink: { name: 'ComponentTableCustomToolbar' } },
              { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentTableCustomVisible' } },
              { title: '允许调整列冻结', routerLink: { name: 'ComponentTableCustomFixed' } },
              { title: '允许调整列宽', routerLink: { name: 'ComponentTableCustomResizable' } },
              { title: '允许拖拽列顺序', routerLink: { name: 'ComponentTableCustomSort' } },
              { title: '自定义触发弹出设置', routerLink: { name: 'ComponentTableCustomTemplate' } },
              { title: '自定义弹出位置', routerLink: { name: 'ComponentTableCustomPlacement' } },
              { title: '本地保存列设置', routerLink: { name: 'ComponentTableCustomStorage' } },
              { title: '服务端保存列设置', routerLink: { name: 'ComponentTableCustomEvents' } }
            ]
          }
          // {
          //   title: '数据分页',
          //   children: []
          // },
          // {
          //   title: '树形结构',
          //   children: []
          // },
          // {
          //   title: '可编辑',
          //   children: []
          // },
          // {
          //   title: '导入/导出数据',
          //   children: []
          // },
          // {
          //   title: '打印表格',
          //   children: []
          // },
          // {
          //   title: '虚拟滚动',
          //   children: []
          // }
        ]
      },
      {
        title: '配置式动态表格',
        children: [
          {
            title: '基础功能',
            children: [
              { title: '基础', routerLink: { name: 'ComponentGridBaseBasic' } },
              // { title: '尺寸', routerLink: { name: 'ComponentGridBaseSize' } },
              { title: '数据类型', routerLink: { name: 'ComponentGridBaseData' } },
              { title: '空数据提示', routerLink: { name: 'ComponentGridBaseEmpty' } },
              { title: '边框', routerLink: { name: 'ComponentGridBaseBorder' } },
              { title: '圆角', routerLink: { name: 'ComponentGridBaseRound' } },
              { title: '对齐方式', routerLink: { name: 'ComponentGridBaseAlign' } },
              { title: '列宽设置', routerLink: { name: 'ComponentGridBaseWidth' } },
              { title: '自动换行', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
              // { title: '溢出隐藏', routerLink: { name: 'ComponentGridBaseOverflow' } },
              // { title: '文本提示', routerLink: { name: 'ComponentGridBaseTooltip' } },
              // { title: '斑马线样式', routerLink: { name: 'ComponentGridBaseStripe' } },
              // { title: '单元格样式', routerLink: { name: 'ComponentGridBaseStyle' } },
              { title: '动态样式', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
              // { title: '隐藏表头', routerLink: { name: 'ComponentGridBaseHeader' } },
              // { title: '高亮列', routerLink: { name: 'ComponentGridBaseHeaderHighlight' } },
              // { title: '拖拽调整列宽', routerLink: { name: 'ComponentGridBaseHeaderResizable' } },
              // { title: '表格最小高度', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
              // { title: '表格高度', routerLink: { name: 'ComponentGridBaseHeight' } },
              // { title: '表格最大高度', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
              { title: '表格响应式高度', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
              // { title: '设置行度', routerLink: { name: 'ComponentGridBaseRowHeight' } },
              // { title: '冻结列', routerLink: { name: 'ComponentGridBaseFixed' } },
              // { title: '冻结表头和列', routerLink: { name: 'ComponentGridBaseFixedFull' } },
              // { title: '表尾', routerLink: { name: 'ComponentGridBaseFooter' } },
              // { title: '分组表头', routerLink: { name: 'ComponentGridBaseGroup' } },
              { title: '高亮行与列', routerLink: { name: 'ComponentGridBaseCurrent' } },
              // { title: '排序', routerLink: { name: 'ComponentGridBaseSort' } },
              // { title: '筛选', routerLink: { name: 'ComponentGridBaseFilter' } },
              // { title: '加载中', routerLink: { name: 'ComponentGridBaseLoading' } },
              // { title: '格式化内容', routerLink: { name: 'ComponentGridBaseFormat' } },
              // { title: '序号', routerLink: { name: 'ComponentGridBaseSeq' } },
              // { title: '单选框', routerLink: { name: 'ComponentGridBaseRadio' } },
              // { title: '复选框', routerLink: { name: 'ComponentGridBaseSelection' } },
              // { title: 'HTML 类型', routerLink: { name: 'ComponentGridBaseHtml' } },
              { title: '完整案例', routerLink: { name: 'ComponentGridBaseFull' } }
            ]
          }
        ]
      }
      // { title: '格式化（全局）' },
      // { title: '右键菜单（全局）' },
      // { title: '校验器（全局）' },
      // { title: '指令注册（全局）' },
      // { title: '事件拦截（高级）' }
    ]
  },
  {
    title: '反馈组件',
    children: [
      // { title: 'Loading 加载中' },
      {
        title: 'Tip 小贴士',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tip' } } },
          { title: '基础', routerLink: { name: 'ComponentTip' } }
        ]
      },
      {
        title: 'Alert 警告提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'alert' } } },
          { title: '基础', routerLink: { name: 'ComponentAlert' } }
        ]
      },
      // { title: 'Notification 通知提示框' },
      {
        title: 'Drawer 抽屉',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'drawer' } } },
          { title: '自定义方向', routerLink: { name: 'ComponentDrawer' } }
        ]
      },
      // { title: 'Popover 气泡提示框' },
      {
        title: 'Tooltip 文字提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tooltip' } } },
          { title: '文字提示', routerLink: { name: 'ComponentTooltip' } }
        ]
      }
    ]
  },
  {
    title: '弹窗',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'modal' } } },
      {
        title: '消息框',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalMessageGlobal' } },
          { title: '唯一', routerLink: { name: 'ComponentModalMessageMultiple' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalMessageStatus' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalMessageTemplate' } }
        ]
      },
      {
        title: '通知框',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalNotificationGlobal' } },
          { title: '唯一', routerLink: { name: 'ComponentModalNotificationMultiple' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalNotificationStatus' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalNotificationTemplate' } }
        ]
      },
      {
        title: '提示框',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalAlertGlobal' } },
          { title: '弹出多个', routerLink: { name: 'ComponentModalAlertMultiple' } },
          { title: '禁止拖动', routerLink: { name: 'ComponentModalAlertDraggable' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalAlertEscClosable' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalAlertStatus' } },
          { title: '手动关闭', routerLink: { name: 'ComponentModalAlertManual' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalAlertTemplate' } }
        ]
      },
      {
        title: '确认框',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalConfirmGlobal' } },
          { title: '弹出多个', routerLink: { name: 'ComponentModalConfirmMultiple' } },
          { title: '禁止拖动', routerLink: { name: 'ComponentModalConfirmDraggable' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalConfirmEscClosable' } },
          { title: '手动关闭', routerLink: { name: 'ComponentModalConfirmManual' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalConfirmTemplate' } }
        ]
      },
      {
        title: '窗口模式',
        children: [
          { title: '基础', routerLink: { name: 'ComponentModalModalBase' } },
          { title: '尺寸', routerLink: { name: 'ComponentModalModalSize' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalModalTemplate' } },
          { title: '全局调用', routerLink: { name: 'ComponentModalModalGlobal' } },
          { title: '内边距', routerLink: { name: 'ComponentModalModalPadding' } },
          { title: '遮罩层', routerLink: { name: 'ComponentModalModalMask' } },
          { title: '锁定页面', routerLink: { name: 'ComponentModalModalLockView' } },
          { title: '拖动窗口', routerLink: { name: 'ComponentModalModalDraggable' } },
          { title: '多窗口', routerLink: { name: 'ComponentModalModalMultiple' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalModalEscClosable' } },
          { title: '拦截关闭', routerLink: { name: 'ComponentModalModalBeforeHide' } },
          { title: '操作按钮', routerLink: { name: 'ComponentModalModalButton' } },
          { title: '拖动调整宽高', routerLink: { name: 'ComponentModalModalResize' } },
          { title: '最大化与最小化', routerLink: { name: 'ComponentModalModalZoom' } },
          { title: '记忆功能', routerLink: { name: 'ComponentModalModalRemember' } },
          { title: '嵌入 iframe', routerLink: { name: 'ComponentModalModalIframe' } },
          { title: '完整功能', routerLink: { name: 'ComponentModalModalFull' } }
        ]
      }
    ]
  },
  {
    title: '其他组件',
    children: [
      // { title: 'Watermark 水印' },
      {
        title: 'Print 打印',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'print' } } },
          { title: '常规打印', routerLink: { name: 'ComponentPrintBase' } },
          {
            title: '分页打印',
            children: [
              { title: '基础', routerLink: { name: 'ComponentPrintPageBasics' } },
              { title: '页眉/标题', routerLink: { name: 'ComponentPrintPageHeader' } },
              { title: '页尾/页码', routerLink: { name: 'ComponentPrintPageFooter' } },
              { title: '自定义模板', routerLink: { name: 'ComponentPrintPageTemplate' } }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '可视化',
    children: [
      {
        title: 'FormDesign 表单设计器',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormDesignBase' } },
          { title: '自定义控件分组', routerLink: { name: 'ComponentFormDesignCustomGroup' } },
          { title: '移动端设计器', routerLink: { name: 'ComponentFormDesignMobile' } },
          { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentFormDesignPcAndMobile' } },
          { title: '渲染视图', routerLink: { name: 'ComponentFormDesignRenderView' } }
          // { title: 'API' }
        ]
        // },
        // {
        //   title: 'ListDesign 列表设计器',
        //   children: [
        //     { title: '基础功能', routerLink: { name: 'ComponentListDesignBase' } },
        //     { title: '移动端设计器', routerLink: { name: 'ComponentListDesignMobile' } },
        //     { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentListDesignPcAndMobile' } }

      //   ]
      }
      // { title: 'FlowDesign 流程设计器' },
      // { title: 'PrintDesign 打印设计器' }
    ]
  },
  // {
  //   title: '渲染器（高级用法）',
  //   children: [
  //     { title: '表格-筛选渲染' },
  //     { title: '表格-单元格渲染' },
  //     { title: '表格-可编辑渲染' },
  //     { title: '表格-工具栏渲染' },
  //     { title: '表格-空数据渲染' },
  //     { title: '表单-项渲染' },
  //     { title: '表单设计器-控件渲染' },
  //     { title: '列表设计器-控件渲染' },
  //     { title: '打印设计器-控件渲染' }
  //   ]
  // },
  // {
  //   title: '扩展插件',
  //   children: [
  //     { title: '集成第三方适配器' }
  //   ]
  // },
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
