import { type ComponentConfigModel } from '@k-designer/utils/pluginManager'
export default {
  component: () => import('ant-design-vue/lib/radio/Group'),
  defaultSchema: {
    label: '单选框',
    type: 'radio',
    icon: 'icon-danxuan-cuxiantiao',
    field: 'radio',
    input: true,
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '选项1'
        },
        {
          label: '选项2',
          value: '选项2'
        }
      ]
    }
  },
  config: {
    attribute: [
      {
        label: '字段名',
        type: 'input',
        field: 'field'
      },
      {
        label: '默认值',
        type: 'radio',
        field: 'componentProps.defaultValue'
      },
      {
        label: '文字',
        type: 'input',
        field: 'label'
      },
      {
        label: '隐藏',
        type: 'switch',
        field: 'componentProps.hidden'
      },
      {
        label: '禁用',
        type: 'switch',
        field: 'componentProps.disabled'
      },
      {
        label: '表单校验',
        type: 'KRuleEditor',
        layout: 'vertical',
        field: 'rules',
        describe: '校验规则需要配合表单使用'
      }
    ]
  },
  bindModel: 'value'
} as ComponentConfigModel
