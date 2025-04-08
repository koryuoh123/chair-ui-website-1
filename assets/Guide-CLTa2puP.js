import{P as s}from"./prism-tomorrow-CPERbB_t.js";import{d as u,c as d,a,b as n,w as p,r as l,u as c,e as o,t as r,o as m,_}from"./index-BCd5dvhn.js";const f=`import { createApp } from 'vue'
import App from './App.vue'

// 引入样式
import "chair-ui/style.css"

const app = createApp(App)

// 全量引入组件
import chairUi from "chair-ui"
app.use(chairUi)

/*
 *按需引入组件，注意大小写。
 * Button,Switch,Dialog,Tabs,TabItem,Menu,SubMenu,MenuItem
 */ 

// app.use(chairUi, ['Button'])

app.mount('#app')
`,g={class:"markdown-body demo-wrapper"},h={style:{"margin-top":"-40px"}},v=["innerHTML"],w=u({__name:"Guide",setup(M){const i=s.highlight(f,s.languages.javascript,"javascript");return(x,e)=>{const t=l("Markdown");return m(),d("div",g,[a(t,null,{default:p(()=>e[0]||(e[0]=[o(r("# 指南"))])),_:1}),a(t,null,{default:p(()=>e[1]||(e[1]=[o(r(`## 介绍 
<p>Chair UI是一款基于 Vue3 和 TypeScript的UI组件库。</p>
            
<p>该组件库其实是我为了总结自己这几年的技术经验而写的，全程亲手编写，尽量不采用第三方库，包括您现在看到的这个官网也几乎都是我写的。</p>
            <p>此项目旨在交流学习，所以不太建议您在生产环境中使用。</p>`))])),_:1}),a(t,null,{default:p(()=>e[2]||(e[2]=[o(r(`## 安装 
<p>打开终端运行下列命令：</p> <code>npm install chair-ui</code>或者<code>yarn add chair-ui</code>`))])),_:1}),a(t,null,{default:p(()=>e[3]||(e[3]=[o(r(`## 开始使用 
 <p>在vue3中使用本库，在main.ts里注册组件，即可全局使用</p>
            
<p>`))])),_:1}),n("div",h,[n("pre",{class:"language-html",innerHTML:c(i)},null,8,v)])])}}}),b=_(w,[["__scopeId","data-v-00134e6a"]]);export{b as default};
