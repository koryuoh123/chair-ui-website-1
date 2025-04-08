import{D as b}from"./Demo-ClPsxvin.js";import{d as m,f as d,r as s,c as u,o as v,b as n,a as t,w as a,e as r,t as D,_ as S}from"./index-BCd5dvhn.js";import"./prism-tomorrow-CPERbB_t.js";const T={class:"demo-block"},P={class:"demolist"},I={class:"demolist"},w=m({__name:"textDemo",setup(h){const o=d(!1);return(c,e)=>{const i=s("chair-switch");return v(),u("div",T,[n("div",P,[t(i,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),"active-text":"开启","inactive-text":"关闭"},null,8,["modelValue"]),t(i,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),theme:"success","active-text":"是","inactive-text":"否"},null,8,["modelValue"]),t(i,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l),theme:"warning","active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"])]),e[5]||(e[5]=n("p",null,"不展示文字",-1)),n("div",I,[t(i,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value=l),"text-visible":!1},{default:a(()=>e[4]||(e[4]=[r("Default")])),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(w);w.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-switch v-model="checked" active-text="开启" inactive-text="关闭"></chair-switch>\r
\r
            <chair-switch v-model="checked" theme="success" active-text="是" inactive-text="否"></chair-switch>\r
\r
            <chair-switch v-model="checked" theme="warning" active-text="Pay by month"\r
                inactive-text="Pay by year"></chair-switch>\r
        </div>\r
        <p>不展示文字</p>\r
        <div class="demolist">\r
            <chair-switch v-model="checked" :text-visible="false">Default</chair-switch>\r
        </div>\r
    </div>\r
\r
</template>`;w.__sourceCodeTitle="## 文字描述<br/><br/><p>使用 <code>active-text</code> 属性与 <code>inactive-text</code> 属性来设置开关的文字描述。</p><p>你也可以通过 <code>text-visible</code> 属性来控制文字描述是否显示。</p>";const N={class:"demo-block"},z={class:"demolist"},B={class:"demolist"},f=m({__name:"themeDemo",setup(h){const o=d(!1);return(c,e)=>{const i=s("chair-switch");return v(),u("div",N,[e[12]||(e[12]=n("p",null,"默认提供的样式",-1)),n("div",z,[t(i,{theme:"primary",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l)},{default:a(()=>e[6]||(e[6]=[r("Primary")])),_:1},8,["modelValue"]),t(i,{theme:"success",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l)},{default:a(()=>e[7]||(e[7]=[r("Success")])),_:1},8,["modelValue"]),t(i,{theme:"warning",modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l)},{default:a(()=>e[8]||(e[8]=[r("Warning")])),_:1},8,["modelValue"]),t(i,{theme:"danger",modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value=l)},{default:a(()=>e[9]||(e[9]=[r("Danger")])),_:1},8,["modelValue"]),t(i,{theme:"info",modelValue:o.value,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value=l)},{default:a(()=>e[10]||(e[10]=[r("Info")])),_:1},8,["modelValue"])]),e[13]||(e[13]=n("p",null,"自定义颜色",-1)),n("div",B,[t(i,{mainColor:"#b91bb9",subColor:"pink",modelValue:o.value,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value=l)},{default:a(()=>e[11]||(e[11]=[r("Modified Color")])),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(f);f.__sourceCode=`<template>\r
    <div class="demo-block">\r
\r
        <p>默认提供的样式</p>\r
\r
        <div class="demolist">\r
            <chair-switch theme="primary" v-model="checked">Primary</chair-switch>\r
            <chair-switch theme="success" v-model="checked">Success</chair-switch>\r
            <chair-switch theme="warning" v-model="checked">Warning</chair-switch>\r
            <chair-switch theme="danger" v-model="checked">Danger</chair-switch>\r
            <chair-switch theme="info" v-model="checked">Info</chair-switch>\r
        </div>\r
\r
        <p>自定义颜色</p>\r
\r
        <div class="demolist">\r
            <chair-switch mainColor="#b91bb9" subColor="pink" v-model="checked">Modified Color</chair-switch>\r
        </div>\r
    </div>\r
</template>`;f.__sourceCodeTitle=`## 主题<br/><br/><p>使用<code>theme</code> 来定义开关样式。<br/><br/>也可以通过 <code>mainColor</code> 和 <code>subColor</code> 来自定义开关颜色。\r
</p>`;const M={class:"demo-block"},j={class:"demolist"},k=m({__name:"sizeDemo",setup(h){const o=d(!1);return(c,e)=>{const i=s("chair-switch");return v(),u("div",M,[n("div",j,[t(i,{size:"small",modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l)},null,8,["modelValue"]),t(i,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l)},null,8,["modelValue"]),t(i,{size:"large",modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value=l)},null,8,["modelValue"])])])}}});typeof block0=="function"&&block0(k);k.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-switch size="small" v-model="checked"></chair-switch>\r
            <chair-switch v-model="checked"></chair-switch>\r
            <chair-switch size="large" v-model="checked"></chair-switch>\r
        </div>\r
    </div>\r
</template>`;k.__sourceCodeTitle="## 调整尺寸<br/><br/><p>使用 <code>size</code> 来定义开关大小。</p>";const W={class:"demo-block"},E={class:"demolist"},V=m({__name:"iconDemo",setup(h){const o=d(!1);return(c,e)=>{const i=s("SvgIcon"),l=s("chair-switch");return v(),u("div",W,[n("div",E,[t(l,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=p=>o.value=p),"active-text":"显示","inactive-text":"隐藏"},{"active-icon":a(()=>[t(i,{iconName:"visible-icon"})]),"inactive-icon":a(()=>[t(i,{iconName:"invisible-icon"})]),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(V);V.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-switch v-model="checked" active-text="显示" inactive-text="隐藏">\r
                <template #active-icon>\r
                    <SvgIcon iconName="visible-icon" />\r
                </template>\r
                <template #inactive-icon>\r
                    <SvgIcon iconName="invisible-icon" />\r
                </template>\r
            </chair-switch>\r
        </div>\r
    </div>\r
</template>`;V.__sourceCodeTitle="## 自定义图标<br/><br/><p>使用 <code>active-action</code> 和 <code>inactive-action</code> 插槽来添加图标。</p>";const q={class:"demo-block"},A={class:"demolist"},g=m({__name:"disabledDemo",setup(h){const o=d(!0),c=d(!1);return(e,i)=>{const l=s("chair-switch");return v(),u("div",q,[n("div",A,[t(l,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=p=>o.value=p),disabled:""},null,8,["modelValue"]),t(l,{modelValue:c.value,"onUpdate:modelValue":i[1]||(i[1]=p=>c.value=p)},null,8,["modelValue"])])])}}});typeof block0=="function"&&block0(g);g.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-switch v-model="checked" disabled></chair-switch>\r
\r
            <chair-switch v-model="checked2"></chair-switch>\r
\r
        </div>\r
    </div>\r
\r
</template>`;g.__sourceCodeTitle="## 禁用状态<br/><br/><p>设置 <code>disabled</code> 属性，接受一个<code>Boolean</code>，设置 <code>true</code> 即可禁用。</p>";const F={class:"demo-block"},G={class:"demolist"},x=m({__name:"loadingDemo",setup(h){const o=d(!0);return(c,e)=>{const i=s("chair-switch");return v(),u("div",F,[n("div",G,[t(i,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),loading:""},null,8,["modelValue"]),t(i,{modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value=l),"text-visible":!1,loading:"",theme:"warning"},null,8,["modelValue"])])])}}});typeof block0=="function"&&block0(x);x.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-switch v-model="checked" loading></chair-switch>\r
\r
            <chair-switch v-model="checked" :text-visible="false" loading theme="warning"></chair-switch>\r
        </div>\r
\r
    </div>\r
\r
</template>`;x.__sourceCodeTitle="## 加载状态<br/><br/><p>设置 <code>loading</code> 属性，接受一个<code>Boolean</code>，设置 <code>true</code> 即加载中状态。</p>";const H={class:"demo-block"},J={class:"demolist"},y=m({__name:"stopDemo",setup(h){const o=d(!0),c=d(!1),e=()=>new Promise((C,_)=>{c.value=!0,setTimeout(()=>{c.value=!1,_(!1)},1e3)}),i=d(!1),l=d(!1),p=()=>new Promise((C,_)=>{l.value=!0,setTimeout(()=>{l.value=!1,C(!0)},1e3)});return(C,_)=>{const U=s("chair-switch");return v(),u("div",H,[n("div",J,[t(U,{modelValue:o.value,"onUpdate:modelValue":_[0]||(_[0]=$=>o.value=$),loading:c.value,"before-change":e},null,8,["modelValue","loading"]),t(U,{modelValue:i.value,"onUpdate:modelValue":_[1]||(_[1]=$=>i.value=$),loading:l.value,theme:"warning","before-change":p},null,8,["modelValue","loading"])])])}}});typeof block0=="function"&&block0(y);y.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-switch v-model="checked" :loading="loading" :before-change="syncSwitch"></chair-switch>\r
\r
            <chair-switch v-model="checked2" :loading="loading2" theme="warning"\r
                :before-change="syncSwitch2"></chair-switch>\r
        </div>\r
\r
    </div>\r
\r
</template>`;y.__sourceCodeTitle="## 阻止切换<br/><br/><p>设置 <code>beforeChange</code> 属性，若返回 <code>false</code   de> 或者返回 <code>Promise</code> 且被 <code>reject</code>，则停止切换。</p>";const K={class:"markdown-body demo-wrapper"},L=m({__name:"SwitchDemo",setup(h){return(o,c)=>{const e=s("Markdown");return v(),u("div",K,[t(e,null,{default:a(()=>c[0]||(c[0]=[r(D(`# Switch 开关
<p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>`))])),_:1}),n("div",null,[t(b,{component:k})]),n("div",null,[t(b,{component:f})]),n("div",null,[t(b,{component:w})]),n("div",null,[t(b,{component:V})]),n("div",null,[t(b,{component:g})]),n("div",null,[t(b,{component:x})]),n("div",null,[t(b,{component:y})])])}}}),X=S(L,[["__scopeId","data-v-b41aebd3"]]);export{X as default};
