import{D as _}from"./Demo-ClPsxvin.js";import{_ as o,r as u,c as l,o as s,b as d,a as t,w as e,e as r,d as f,g as b,t as h}from"./index-BCd5dvhn.js";import"./prism-tomorrow-CPERbB_t.js";const m={},k={class:"demo-block"},v={class:"demolist"};function M(c,n){const a=u("chair-menu-item"),i=u("chair-sub-menu"),p=u("chair-menu");return s(),l("div",k,[d("div",v,[t(p,{background:""},{default:e(()=>[t(a,null,{default:e(()=>n[0]||(n[0]=[r(" Meat ")])),_:1}),t(i,null,{title:e(()=>n[1]||(n[1]=[r(" Fruits ")])),default:e(()=>[t(a,null,{default:e(()=>n[2]||(n[2]=[r("apple")])),_:1}),t(a,null,{default:e(()=>n[3]||(n[3]=[r("banana")])),_:1}),t(i,null,{title:e(()=>n[4]||(n[4]=[r(" Fruits ")])),default:e(()=>[t(a,null,{default:e(()=>n[5]||(n[5]=[r("apple")])),_:1}),t(a,null,{default:e(()=>n[6]||(n[6]=[r("banana")])),_:1})]),_:1})]),_:1}),t(i,null,{title:e(()=>n[7]||(n[7]=[r(" Animals ")])),default:e(()=>[t(a,null,{default:e(()=>n[8]||(n[8]=[r("dog")])),_:1}),t(a,null,{default:e(()=>n[9]||(n[9]=[r("cat")])),_:1})]),_:1})]),_:1})])])}typeof block0=="function"&&block0(m);m.__sourceCode=`<template>\r
\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-menu background>\r
                <chair-menu-item>\r
                    Meat\r
                </chair-menu-item>\r
                <chair-sub-menu>\r
                    <template #title>\r
                        Fruits\r
                    </template>\r
                    <chair-menu-item>apple</chair-menu-item>\r
                    <chair-menu-item>banana</chair-menu-item>\r
                    <chair-sub-menu>\r
                        <template #title>\r
                            Fruits\r
                        </template>\r
                        <chair-menu-item>apple</chair-menu-item>\r
                        <chair-menu-item>banana</chair-menu-item>\r
\r
                    </chair-sub-menu>\r
                </chair-sub-menu>\r
                <chair-sub-menu>\r
                    <template #title>\r
                        Animals\r
                    </template>\r
                    <chair-menu-item>dog</chair-menu-item>\r
                    <chair-menu-item>cat</chair-menu-item>\r
                </chair-sub-menu>\r
            </chair-menu>\r
        </div>\r
    </div>\r
</template>`;m.__sourceCodeTitle=" # 基础用法 <p>最小菜单单位是 <code>MenuItem</code> 组件,如果是多级菜单，则可以使用<code>SubMenu</code> 组件嵌套实现</p>";const g=o(m,[["render",M]]),w={class:"markdown-body demo-wrapper"},x=f({__name:"MenuDemo",setup(c){return b(()=>{}),(n,a)=>{const i=u("Markdown");return s(),l("div",w,[t(i,null,{default:e(()=>a[0]||(a[0]=[r(h(`# Menu 菜单
<p>为网站提供导航功能的菜单。</p>`))])),_:1}),d("div",null,[t(_,{component:g})])])}}}),y=o(x,[["__scopeId","data-v-94cf958a"]]);export{y as default};
