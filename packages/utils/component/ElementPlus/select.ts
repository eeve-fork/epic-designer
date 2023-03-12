import { ComponentConfigModel } from '../../pluginManager'
export default {
  component: () => import("./src/KSelect"),
  defaultSchema: {
    label: "选择框",
    type: "select",
    icon: "icon-xiala",
    field: "select",
    isInput: true,
    componentProps: {
      options: [
        {
          label: "选项1",
          value: "选项1",
        },
        {
          label: "选项2",
          value: "选项2",
        },
      ],
      placeholder: '请选择'
    },
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        attrIndex: "field",
      },
      {
        label: "文字",
        type: "input",
        attrIndex: "label",
      },
      {
        label: "默认值",
        type: "select",
        attrIndex: "componentProps.defaultValue",
      },
      {
        label: "占位内容",
        type: "input",
        attrIndex: "componentProps.placeholder",
      },
      {
        label: "隐藏",
        type: "input",
        attrIndex: "componentProps.hidden",
      },

    ],
  }
} as ComponentConfigModel;
