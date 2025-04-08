import{d as p,f as m,r as c,c as b,o as f,b as l,a as n,w as t,e as r,_,t as D}from"./index-BCd5dvhn.js";import{D as y}from"./Demo-ClPsxvin.js";import"./prism-tomorrow-CPERbB_t.js";const w={class:"demo-block"},$={class:"demolist"},V={class:"footer"},T={class:"demolist"},x={class:"footer"},h=p({__name:"basicDemo",setup(C){const i=m(!1),s=m(!1),u=()=>{window.alert("beforeClose"),i.value=!1};return(o,e)=>{const a=c("chair-button"),d=c("chair-dialog");return f(),b("div",w,[l("div",$,[l("div",null,[n(a,{onClick:e[0]||(e[0]=v=>i.value=!i.value)},{default:t(()=>e[8]||(e[8]=[r("Click to open the Dialog")])),_:1})]),n(d,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=v=>i.value=v),title:"Tips",width:"50%",top:"40vh","before-close":u},{footer:t(()=>[l("div",V,[n(a,{size:"small",onClick:e[1]||(e[1]=v=>i.value=!1)},{default:t(()=>e[9]||(e[9]=[r("Cencel")])),_:1}),n(a,{size:"small",theme:"primary",onClick:e[2]||(e[2]=v=>i.value=!1)},{default:t(()=>e[10]||(e[10]=[r("Confirm")])),_:1})])]),default:t(()=>[e[11]||(e[11]=l("span",null,"This is a message",-1))]),_:1},8,["modelValue"])]),e[16]||(e[16]=l("p",null,"close-on-click-overlay 设置为false",-1)),l("div",T,[l("div",null,[n(a,{onClick:e[4]||(e[4]=v=>s.value=!s.value),theme:"info"},{default:t(()=>e[12]||(e[12]=[r("Click Overlay")])),_:1})]),n(d,{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=v=>s.value=v),title:"Tips",width:"50%",top:"40vh","close-on-click-overlay":!1},{footer:t(()=>[l("div",x,[n(a,{size:"small",onClick:e[5]||(e[5]=v=>s.value=!1)},{default:t(()=>e[13]||(e[13]=[r("Cencel")])),_:1}),n(a,{size:"small",theme:"primary",onClick:e[6]||(e[6]=v=>s.value=!1)},{default:t(()=>e[14]||(e[14]=[r("Confirm")])),_:1})])]),default:t(()=>[e[15]||(e[15]=l("span",null,"This is a message",-1))]),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(h);h.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <div>\r
                <chair-button @click="visible = !visible">Click to open the Dialog</chair-button>\r
            </div>\r
\r
            <chair-dialog v-model="visible" title="Tips" width="50%" top="40vh" :before-close="beforeClose">\r
                <span>This is a message</span>\r
                <template #footer>\r
                    <div class="footer">\r
                        <chair-button size="small" @click="visible = false">Cencel</chair-button>\r
                        <chair-button size="small" theme="primary" @click="visible = false">Confirm</chair-button>\r
                    </div>\r
                </template>\r
            </chair-dialog>\r
        </div>\r
        <p>close-on-click-overlay 设置为false</p>\r
        <div class="demolist">\r
            <div>\r
                <chair-button @click="visible2 = !visible2" theme="info">Click Overlay</chair-button>\r
            </div>\r
            <chair-dialog v-model="visible2" title="Tips" width="50%" top="40vh" :close-on-click-overlay="false">\r
                <span>This is a message</span>\r
                <template #footer>\r
                    <div class="footer">\r
                        <chair-button size="small" @click="visible2 = false">Cencel</chair-button>\r
                        <chair-button size="small" theme="primary" @click="visible2 = false">Confirm</chair-button>\r
                    </div>\r
                </template>\r
            </chair-dialog>\r
        </div>\r
    </div>\r
</template>`;h.__sourceCodeTitle="## 基础用法<br/><br/><p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p><p>需要设置 <code>model-value / v-model</code> 属性，它接收 <code>Boolean</code>，当为 <code>true</code>  时显示 Dialog。 Dialog 分为两个部分：<code>body</code> 和 <code>footer</code>，<code>footer</code> 需要具名为 <code>footer</code> 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 <code>before-close</code> 的用法。</p> <p>默认是点击对话框外部会关闭，但你也可以通过 <code>close-on-click-overlay</code> 属性来控制。</p>";const z=_(h,[["__scopeId","data-v-073d2b55"]]),I={class:"demo-block"},U={class:"demolist"},B={class:"my-header-class"},g=p({__name:"headerDemo",setup(C){const i=m(!1),s=()=>{i.value=!1};return(u,o)=>{const e=c("chair-button"),a=c("chair-dialog");return f(),b("div",I,[l("div",U,[l("div",null,[n(e,{onClick:o[0]||(o[0]=d=>i.value=!i.value)},{default:t(()=>o[2]||(o[2]=[r("Open Dialog")])),_:1})]),n(a,{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=d=>i.value=d),width:"300px","show-close":!1},{header:t(()=>[l("div",B,[o[4]||(o[4]=l("h1",null,"my header",-1)),n(e,{theme:"info",onClick:s,size:"small"},{default:t(()=>o[3]||(o[3]=[r("X")])),_:1})])]),default:t(()=>[o[5]||(o[5]=l("span",null," This is dialog content.",-1))]),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(g);g.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <div>\r
                <chair-button @click="visible = !visible">Open Dialog</chair-button>\r
            </div>\r
\r
            <chair-dialog v-model="visible" width="300px" :show-close="false">\r
                <span> This is dialog content.</span>\r
                <template #header>\r
                    <div class="my-header-class">\r
                        <h1>my header</h1>\r
                        <chair-button theme="info" @click="handleClose" size="small">X</chair-button>\r
                    </div>\r
\r
                </template>\r
            </chair-dialog>\r
        </div>\r
    </div>\r
</template>`;g.__sourceCodeTitle="## 自定义头部<br/><br/><p> <code>header</code> 可用于自定义显示标题的区域。 为了保持可用性，除了使用此插槽外，使用 title 属性，或使用 titleId 插槽属性来指定哪些元素应该读取为对话框标题。</p>";const O=_(g,[["__scopeId","data-v-f38b8f2a"]]),N={class:"demo-block"},M={class:"demolist"},X={style:{"margin-top":"30px"}},k=p({__name:"nestDemo",setup(C){const i=m(!1),s=m(!1);return(u,o)=>{const e=c("chair-button"),a=c("chair-dialog");return f(),b("div",N,[l("div",M,[l("div",null,[n(e,{onClick:o[0]||(o[0]=d=>i.value=!i.value)},{default:t(()=>o[4]||(o[4]=[r(" dialog")])),_:1})]),n(a,{modelValue:i.value,"onUpdate:modelValue":o[3]||(o[3]=d=>i.value=d),width:"50%",title:"dialog1"},{default:t(()=>[l("div",X,[n(e,{theme:"success",onClick:o[1]||(o[1]=d=>s.value=!s.value)},{default:t(()=>o[5]||(o[5]=[r("open another dialog")])),_:1})]),n(a,{modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=d=>s.value=d),width:"220px","append-to-body":"",title:"dialog2",top:"30vh"},{default:t(()=>o[6]||(o[6]=[l("span",null," This is dialog content2. ",-1)])),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])])}}});typeof block0=="function"&&block0(k);k.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <div>\r
                <chair-button @click="visible = !visible"> dialog</chair-button>\r
            </div>\r
\r
            <chair-dialog v-model="visible" width="50%" title="dialog1">\r
                <div style="margin-top:30px;">\r
                    <chair-button theme="success" @click="visible2 = !visible2">open another dialog</chair-button>\r
                </div>\r
                <chair-dialog v-model="visible2" width="220px" append-to-body title="dialog2" top="30vh">\r
                    <span> This is dialog content2. </span>\r
                </chair-dialog>\r
            </chair-dialog>\r
        </div>\r
    </div>\r
</template>`;k.__sourceCodeTitle="## 嵌套的对话框<br/><br/><p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。</p><p>通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。 如果必须要在一个对话框内展示另一个对话框，可以将内部嵌套的对话框属性 append-to-body 设置为 true，嵌套的对话框将附加到 body 而不是其父节点，这样两个对话框都可以被正确地渲染。</p>";const E=_(k,[["__scopeId","data-v-3bcfdfc9"]]),S={class:"markdown-body demo-wrapper"},j=p({__name:"DialogDemo",setup(C){return(i,s)=>{const u=c("Markdown");return f(),b("div",S,[n(u,null,{default:t(()=>s[0]||(s[0]=[r(D(`# Dialog 对话框
<p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>`))])),_:1}),l("div",null,[n(y,{component:z})]),l("div",null,[n(y,{component:O})]),l("div",null,[n(y,{component:E})])])}}}),G=_(j,[["__scopeId","data-v-9c57f6ca"]]);export{G as default};
