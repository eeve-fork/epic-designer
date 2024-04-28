import{_ as e,o as t,c as i,a as r}from"./app.c1700df1.js";const m=JSON.parse('{"title":"\u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6700\u65B0\u7248\u672C","slug":"\u6700\u65B0\u7248\u672C","link":"#\u6700\u65B0\u7248\u672C","children":[]},{"level":2,"title":"\u7279\u6027","slug":"\u7279\u6027","link":"#\u7279\u6027","children":[]},{"level":2,"title":"\u6280\u672F\u6808","slug":"\u6280\u672F\u6808","link":"#\u6280\u672F\u6808","children":[]},{"level":2,"title":"\u6D4F\u89C8\u5668\u652F\u6301","slug":"\u6D4F\u89C8\u5668\u652F\u6301","link":"#\u6D4F\u89C8\u5668\u652F\u6301","children":[]}],"relativePath":"guide/start/index.md"}'),a={name:"guide/start/index.md"},s=r('<h1 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">EpicDesigner \u8BBE\u8BA1\u5668</p><p><code>EpicDesigner</code>\u662F\u4E00\u4E2A\u529F\u80FD\u5F3A\u5927\u3001\u5F00\u7BB1\u5373\u7528\u7684\u62D6\u62FD\u5F0F\u4F4E\u4EE3\u7801\u8BBE\u8BA1\u5668\u3002\u5B83\u57FA\u4E8E Vue3 \u5F00\u53D1\uFF0C\u517C\u5BB9\u591A\u5957 UI \u7EC4\u4EF6\u5E93\uFF0C\u9664\u4E86\u57FA\u7840\u7684\u9875\u9762\u8BBE\u8BA1\u529F\u80FD\uFF0CEDesigner \u8FD8\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u6269\u5C55\u529F\u80FD\uFF0C\u53EF\u4EE5\u8BA9\u5F00\u53D1\u8005\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u81EA\u7531\u6269\u5C55\u548C\u5B9A\u5236\u7EC4\u4EF6\u3002\u6B64\u5916\uFF0CEDesigner \u4F7F\u7528 JSON \u914D\u7F6E\u6765\u751F\u6210\u9875\u9762\uFF0C\u53EF\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u751F\u6210\u9875\u9762\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u5B83\u63D0\u4F9B\u4E86\u4E24\u4E2A\u91CD\u8981\u7EC4\u4EF6\uFF1A<code>EDesigner </code> \u8BBE\u8BA1\u5668\u548C <code>EBuilder </code> \u751F\u6210\u5668\u3002</p></div><h4 id="edesigner-\u8BBE\u8BA1\u5668" tabindex="-1">EDesigner \u8BBE\u8BA1\u5668 <a class="header-anchor" href="#edesigner-\u8BBE\u8BA1\u5668" aria-hidden="true">#</a></h4><p><code>EDesigner </code> \u662F\u4E00\u4E2A\u53EF\u89C6\u5316\u8BBE\u8BA1\u5668\u7EC4\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u62D6\u62FD\u7EC4\u4EF6\u7684\u65B9\u5F0F\u5FEB\u901F\u751F\u6210 JSON \u914D\u7F6E\u3002\u5B83\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u7EC4\u4EF6\u5E93\u548C\u914D\u7F6E\u9879\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u9700\u8981\u9009\u62E9\u5408\u9002\u7684\u7EC4\u4EF6\u5E76\u914D\u7F6E\u76F8\u5E94\u7684\u5C5E\u6027\u3001\u4E8B\u4EF6\u548C\u52A8\u4F5C\u3002\u8BBE\u8BA1\u5668\u8FD8\u63D0\u4F9B\u4E86\u5B9E\u65F6\u9884\u89C8\u529F\u80FD\uFF0C\u7528\u6237\u53EF\u4EE5\u968F\u65F6\u67E5\u770B\u6240\u8BBE\u8BA1\u9875\u9762\u7684\u6548\u679C\u3002\u6700\u7EC8\uFF0C\u7528\u6237\u53EF\u4EE5\u5C06 JSON \u914D\u7F6E\u5BFC\u51FA\uFF0C\u7528\u4E8E\u9875\u9762\u7684\u751F\u6210\u548C\u4FEE\u6539\u3002</p><h4 id="ebuilder-\u751F\u6210\u5668" tabindex="-1">EBuilder \u751F\u6210\u5668 <a class="header-anchor" href="#ebuilder-\u751F\u6210\u5668" aria-hidden="true">#</a></h4><p><code>EBuilder </code> \u662F\u4E00\u4E2A\u9875\u9762\u6784\u5EFA\u7EC4\u4EF6\uFF0C\u5B83\u53EF\u4EE5\u5C06\u8BBE\u8BA1\u5668\u751F\u6210\u7684 JSON \u914D\u7F6E\u6784\u5EFA\u6210\u9875\u9762\uFF0C\u5B8C\u6210\u7EC4\u4EF6\u7684\u6E32\u67D3\u3001\u4E8B\u4EF6\u7ED1\u5B9A\u548C\u6570\u636E\u56DE\u663E\u7B49\u64CD\u4F5C\u3002</p><h2 id="\u6700\u65B0\u7248\u672C" tabindex="-1">\u6700\u65B0\u7248\u672C <a class="header-anchor" href="#\u6700\u65B0\u7248\u672C" aria-hidden="true">#</a></h2><p><a href="https://www.npmjs.com/package/epic-designer" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/epic-designer.svg?style=flat-square" alt=""></a></p><p>\u{1F4E6}github\u4ED3\u5E93\uFF1A<a href="https://github.com/Kchengz/epic-designer" target="_blank" rel="noreferrer">https://github.com/Kchengz/epic-designer</a></p><p>\u{1F4E6}gitee\u4ED3\u5E93\uFF1A<a href="https://gitee.com/kcz66/epic-designer" target="_blank" rel="noreferrer">https://gitee.com/kcz66/epic-designer</a></p><p>\u{1F4D6}\u6587\u6863\u5730\u5740\uFF1A<a href="https://kcz66.gitee.io/epic-designer/" target="_blank" rel="noreferrer">https://kcz66.gitee.io/epic-designer/</a></p><p>\u{1F48E}\u9879\u76EE\u9884\u89C8\u5730\u5740\uFF1A</p><ul><li>ElementPlus\uFF1A<a href="https://epic.kcz66.com/element-plus/basic?maximize=1" target="_blank" rel="noreferrer">https://epic.kcz66.com/element-plus/basic</a></li><li>AntDesignVue\uFF1A<a href="https://epic.kcz66.com/ant-designe-vue/basic?maximize=1" target="_blank" rel="noreferrer">https://epic.kcz66.com/ant-designe-vue/basic</a></li><li>NaiveUi\uFF1A<a href="https://epic.kcz66.com/naive-ui/basic?maximize=1" target="_blank" rel="noreferrer">https://epic.kcz66.com/naive-ui/basic</a></li></ul><h2 id="\u7279\u6027" tabindex="-1">\u7279\u6027 <a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a></h2><ul><li>\u53EF\u89C6\u5316\u914D\u7F6E\u9875\u9762</li><li>\u63D0\u4F9B\u9884\u89C8\u3001\u4FDD\u5B58\u3001\u751F\u6210 json\u3001\u751F\u6210\u53EF\u6267\u884C\u4EE3\u7801\u7B49\u64CD\u4F5C</li><li>\u652F\u6301\u8868\u5355\u9A8C\u8BC1</li><li>\u9762\u677F\u81EA\u5B9A\u4E49</li><li>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6269\u5C55</li><li>\u7EC4\u4EF6\u5C5E\u6027\u81EA\u5B9A\u4E49\u914D\u7F6E</li><li>\u7EC4\u4EF6\u6837\u5F0F\u914D\u7F6E</li><li>\u7EC4\u4EF6\u4E8B\u4EF6\u52A8\u4F5C\u914D\u7F6E</li><li>\u5E03\u5C40\u5D4C\u5957\u4F7F\u7528\u53CA\u5E03\u5C40\u7EC4\u4EF6\u6269\u5C55</li></ul><h2 id="\u6280\u672F\u6808" tabindex="-1">\u6280\u672F\u6808 <a class="header-anchor" href="#\u6280\u672F\u6808" aria-hidden="true">#</a></h2><table><thead><tr><th>\u56FE\u6807</th><th>\u540D\u79F0</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td><a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=vue" alt=""></a></td><td>Vue</td><td>3.2.x</td></tr><tr><td><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=ts" alt=""></a></td><td>Typescript</td><td>5.0.x</td></tr><tr><td><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=vite" alt=""></a></td><td>Vite</td><td>3.2.x</td></tr></tbody></table><p>\u66F4\u591A\u8BF7\u67E5\u770B <strong>package.json</strong></p><h2 id="\u6D4F\u89C8\u5668\u652F\u6301" tabindex="-1">\u6D4F\u89C8\u5668\u652F\u6301 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u652F\u6301" aria-hidden="true">#</a></h2><p>\u5F00\u53D1\u548C\u6D4B\u8BD5\u5E73\u53F0\u5747\u5728 Google \u548C\u6700\u65B0\u7248 EDGE \u4E0A\u5B8C\u6210\uFF0C\u5176\u5B83\u6D4F\u89C8\u5668\u8BF7\u81EA\u884C\u6D4B\u8BD5\u3002\u5982\u679C\u5B58\u5728\u517C\u5BB9\u95EE\u9898\u53EF\u5728 gitee \u6216 github \u63D0\u4EA4 Issue\u3002</p>',20),l=[s];function n(c,d,h,o,p,g){return t(),i("div",null,l)}const _=e(a,[["render",n]]);export{m as __pageData,_ as default};
