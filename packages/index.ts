import KBuilder from "./components/KBuilder/";
import KDesigner from "./components/KDesigner/";
import { App } from "vue";
import { pluginManager, useAntd, useElementPlus } from "./utils/index";
import { initComponent } from "./utils/component/init";
import "./index.less";

// 初始化设计器
initComponent(pluginManager);
const components = [KBuilder, KDesigner];


// 注册全局组件
const KDesignr = {
  install(app: App) {
    components.forEach((comp) => {
      app.component(comp.__name!, comp);
    });
  },
  pluginManager,
  useAntd,
};

export { KBuilder, KDesigner, pluginManager,  useAntd, useElementPlus };
export default KDesignr;
