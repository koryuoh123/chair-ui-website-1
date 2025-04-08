import{D as h}from"./Demo-ClPsxvin.js";import{d as c,f as C,r as n,c as b,o as _,b as i,a,w as t,e as s,_ as p,t as U}from"./index-BCd5dvhn.js";import"./prism-tomorrow-CPERbB_t.js";const T={class:"demo-block"},g={class:"demolist"},u=c({__name:"basicDemo",setup(k){const r=C("User");return(d,e)=>{const o=n("chair-tab-item"),m=n("chair-tabs");return _(),b("div",T,[i("div",g,[a(m,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),class:"demo-tabs"},{default:t(()=>[a(o,{name:"User"},{default:t(()=>e[1]||(e[1]=[s("User")])),_:1}),a(o,{name:"Config"},{default:t(()=>e[2]||(e[2]=[s("Config")])),_:1}),a(o,{name:"Role"},{default:t(()=>e[3]||(e[3]=[s("Role")])),_:1}),a(o,{name:"Task"},{default:t(()=>e[4]||(e[4]=[s("Task")])),_:1})]),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(u);u.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-tabs v-model="tabModel1" class="demo-tabs">\r
                <chair-tab-item name="User">User</chair-tab-item>\r
                <chair-tab-item name="Config">Config</chair-tab-item>\r
                <chair-tab-item name="Role">Role</chair-tab-item>\r
                <chair-tab-item name="Task">Task</chair-tab-item>\r
            </chair-tabs>\r
        </div>\r
    </div>\r
</template>`;u.__sourceCodeTitle="## 基础用法<br/><br/><p>基础的、简洁的标签页。</p><p>Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 <code>value</code> 属性来指定当前选中的标签页。</p>";const R=p(u,[["__scopeId","data-v-5aa98bbd"]]),V={class:"demo-block"},y={class:"demolist"},f=c({__name:"cardDemo",setup(k){const r=C("User");return(d,e)=>{const o=n("chair-tab-item"),m=n("chair-tabs");return _(),b("div",V,[i("div",y,[a(m,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),class:"demo-tabs",type:"card"},{default:t(()=>[a(o,{name:"User"},{default:t(()=>e[1]||(e[1]=[s("User")])),_:1}),a(o,{name:"Config"},{default:t(()=>e[2]||(e[2]=[s("Config")])),_:1}),a(o,{name:"Role"},{default:t(()=>e[3]||(e[3]=[s("Role")])),_:1}),a(o,{name:"Task"},{default:t(()=>e[4]||(e[4]=[s("Task")])),_:1})]),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(f);f.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-tabs v-model="tabModel1" class="demo-tabs" type="card">\r
                <chair-tab-item name="User">User</chair-tab-item>\r
                <chair-tab-item name="Config">Config</chair-tab-item>\r
                <chair-tab-item name="Role">Role</chair-tab-item>\r
                <chair-tab-item name="Task">Task</chair-tab-item>\r
            </chair-tabs>\r
        </div>\r
    </div>\r
</template>`;f.__sourceCodeTitle="## 卡片风格的标签<br/><br/><p>你可以设置具有卡片风格的标签。</p><p>只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。</p>";const D=p(f,[["__scopeId","data-v-9aaf794c"]]),x={class:"demo-block"},M={class:"demolist"},v=c({__name:"cardBorderDemo",setup(k){const r=C("User");return(d,e)=>{const o=n("chair-tab-item"),m=n("chair-tabs");return _(),b("div",x,[i("div",M,[a(m,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),class:"demo-tabs",type:"border-card"},{default:t(()=>[a(o,{name:"User"},{default:t(()=>e[1]||(e[1]=[s("User")])),_:1}),a(o,{name:"Config"},{default:t(()=>e[2]||(e[2]=[s("Config")])),_:1}),a(o,{name:"Role"},{default:t(()=>e[3]||(e[3]=[s("Role")])),_:1})]),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(v);v.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-tabs v-model="tabModel1" class="demo-tabs" type="border-card">\r
                <chair-tab-item name="User">User</chair-tab-item>\r
                <chair-tab-item name="Config">Config</chair-tab-item>\r
                <chair-tab-item name="Role">Role</chair-tab-item>\r
\r
            </chair-tabs>\r
        </div>\r
    </div>\r
</template>`;v.__sourceCodeTitle="## 带有边框的卡片风格<br/><br/><p>你还可以设置标签页为带有边框的卡片</p><p>将 <code>type</code> 设置为 <code>border-card</code> </p>";const $=p(v,[["__scopeId","data-v-e08c41fb"]]),w={class:"markdown-body demo-wrapper"},B=c({__name:"TabsDemo",setup(k){return(r,d)=>{const e=n("Markdown");return _(),b("div",w,[a(e,null,{default:t(()=>d[0]||(d[0]=[s(U(`# Tabs 标签页
<p>分隔内容上有关联但属于不同类别的数据集合。</p>`))])),_:1}),i("div",null,[a(h,{component:R})]),i("div",null,[a(h,{component:D})]),i("div",null,[a(h,{component:$})])])}}}),S=p(B,[["__scopeId","data-v-b6945af4"]]);export{S as default};
