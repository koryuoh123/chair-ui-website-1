import{D as c}from"./Demo-ClPsxvin.js";import{_ as a,r as d,c as s,o as l,b as i,a as o,w as e,e as r,d as g,t as h}from"./index-BCd5dvhn.js";import"./prism-tomorrow-CPERbB_t.js";const m={},v={class:"demo-block"},D={class:"demolist"};function k(u,n){const t=d("chair-button");return l(),s("div",v,[i("div",D,[o(t,{size:"small"},{default:e(()=>n[0]||(n[0]=[r("Small")])),_:1}),o(t,null,{default:e(()=>n[1]||(n[1]=[r("Default")])),_:1}),o(t,{size:"large"},{default:e(()=>n[2]||(n[2]=[r("Large")])),_:1})])])}typeof block0=="function"&&block0(m);m.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <!-- small -->\r
            <chair-button size="small">Small</chair-button>\r
            <!-- default -->\r
            <chair-button>Default</chair-button>\r
            <!-- large -->\r
            <chair-button size="large">Large</chair-button>\r
        </div>\r
    </div>\r
</template>`;m.__sourceCodeTitle="## 调整尺寸<br/><br/><p>使用 <code>size</code> 来定义按钮大小。</p>";const y=a(m,[["render",k]]),b={},$={class:"demo-block"},w={class:"demolist"},C={class:"demolist"};function I(u,n){const t=d("chair-button");return l(),s("div",$,[n[7]||(n[7]=i("p",null,"默认提供的样式",-1)),i("div",w,[o(t,null,{default:e(()=>n[0]||(n[0]=[r("Default")])),_:1}),o(t,{theme:"primary"},{default:e(()=>n[1]||(n[1]=[r("Primary")])),_:1}),o(t,{theme:"success"},{default:e(()=>n[2]||(n[2]=[r("Success")])),_:1}),o(t,{theme:"warning"},{default:e(()=>n[3]||(n[3]=[r("Warning")])),_:1}),o(t,{theme:"danger"},{default:e(()=>n[4]||(n[4]=[r("Danger")])),_:1}),o(t,{theme:"info"},{default:e(()=>n[5]||(n[5]=[r("Info")])),_:1})]),n[8]||(n[8]=i("p",null,"自定义颜色",-1)),i("div",C,[o(t,{color:"#b91bb9"},{default:e(()=>n[6]||(n[6]=[r("Modified Color")])),_:1})])])}typeof block0=="function"&&block0(b);b.__sourceCode=`<template>\r
    <div class="demo-block">\r
\r
        <p>默认提供的样式</p>\r
\r
        <div class="demolist">\r
            <chair-button>Default</chair-button>\r
            <chair-button theme="primary">Primary</chair-button>\r
            <chair-button theme="success">Success</chair-button>\r
            <chair-button theme="warning">Warning</chair-button>\r
            <chair-button theme="danger">Danger</chair-button>\r
            <chair-button theme="info">Info</chair-button>\r
        </div>\r
\r
        <p>自定义颜色</p>\r
\r
        <div class="demolist">\r
            <chair-button color="#b91bb9">Modified Color</chair-button>\r
        </div>\r
    </div>\r
</template>`;b.__sourceCodeTitle=`## 主题<br/><br/><p>使用<code>theme</code> 来定义按钮样式。也可以通过 <code>color</code> 来自定义按钮颜色。\r
</p>`;const S=a(b,[["render",I]]),f={},x={class:"demo-block"},B={class:"demolist"};function z(u,n){const t=d("chair-button");return l(),s("div",x,[i("div",B,[o(t,{disabled:""},{default:e(()=>n[0]||(n[0]=[r("Default")])),_:1}),o(t,{disabled:"",theme:"primary"},{default:e(()=>n[1]||(n[1]=[r("Primary")])),_:1}),o(t,{disabled:"",theme:"success"},{default:e(()=>n[2]||(n[2]=[r("Success")])),_:1}),o(t,{disabled:"",theme:"warning"},{default:e(()=>n[3]||(n[3]=[r("Warning")])),_:1}),o(t,{disabled:"",theme:"danger"},{default:e(()=>n[4]||(n[4]=[r("Danger")])),_:1}),o(t,{disabled:"",theme:"info"},{default:e(()=>n[5]||(n[5]=[r("Info")])),_:1})])])}typeof block0=="function"&&block0(f);f.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
            <chair-button disabled>Default</chair-button>\r
\r
            <chair-button disabled theme="primary">Primary</chair-button>\r
\r
            <chair-button disabled theme="success">Success</chair-button>\r
\r
            <chair-button disabled theme="warning">Warning</chair-button>\r
\r
            <chair-button disabled theme="danger">Danger</chair-button>\r
\r
            <chair-button disabled theme="info">Info</chair-button>\r
        </div>\r
    </div>\r
</template>`;f.__sourceCodeTitle="## 禁用<br/><br/><p>你可以使用<code>disabed</code> 来定义按钮是否被禁用。</p><p>使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>";const P=a(f,[["render",z]]),p={},W={class:"demo-block"},N={class:"demolist"},T={class:"demolist"};function M(u,n){const t=d("chair-button"),_=d("SvgIcon");return l(),s("div",W,[i("div",N,[o(t,{loading:""},{default:e(()=>n[0]||(n[0]=[r("Default")])),_:1}),o(t,{theme:"primary",loading:""},{default:e(()=>n[1]||(n[1]=[r("Primary")])),_:1}),o(t,{theme:"success",loading:""},{default:e(()=>n[2]||(n[2]=[r("Success")])),_:1}),o(t,{theme:"warning",loading:""},{default:e(()=>n[3]||(n[3]=[r("Warning")])),_:1}),o(t,{theme:"danger",loading:""},{default:e(()=>n[4]||(n[4]=[r("Danger")])),_:1}),o(t,{theme:"info",loading:""},{default:e(()=>n[5]||(n[5]=[r("Info")])),_:1})]),n[7]||(n[7]=i("p",null,"你可以通过loading-icon插槽来覆盖loading的图标",-1)),i("div",T,[o(t,{theme:"info",loading:""},{"loading-icon":e(()=>[o(_,{iconName:"loading-icon",style:{width:".8em",height:".8em"}})]),default:e(()=>[n[6]||(n[6]=r(" Info"))]),_:1})])])}typeof block0=="function"&&block0(p);p.__sourceCode=`<template>\r
    <div class="demo-block">\r
        <div class="demolist">\r
\r
            <chair-button loading>Default</chair-button>\r
\r
            <chair-button theme="primary" loading>Primary</chair-button>\r
\r
            <chair-button theme="success" loading>Success</chair-button>\r
\r
            <chair-button theme="warning" loading>Warning</chair-button>\r
\r
            <chair-button theme="danger" loading>Danger</chair-button>\r
\r
            <chair-button theme="info" loading>Info</chair-button>\r
\r
\r
        </div>\r
        <p>你可以通过loading-icon插槽来覆盖loading的图标</p>\r
        <div class="demolist">\r
            <chair-button theme="info" loading>\r
                <template #loading-icon>\r
                    <!-- 替换成需要的元素 -->\r
                    <SvgIcon iconName="loading-icon" style="width: .8em; height: .8em;" />\r
                </template>\r
                Info</chair-button>\r
        </div>\r
    </div>\r
</template>`;p.__sourceCodeTitle="## 加载中<br/><br/><p>使用<code>loading</code> 来定义按钮是否正在加载。</p>";const V=a(p,[["render",M]]),L={class:"markdown-body demo-wrapper"},E=g({__name:"ButtonDemo",setup(u){return(n,t)=>{const _=d("Markdown");return l(),s("div",L,[o(_,null,{default:e(()=>t[0]||(t[0]=[r(h(`# Button 按钮
<p>常用的操作按钮</p>`))])),_:1}),i("div",null,[o(c,{component:y})]),i("div",null,[o(c,{component:S})]),i("div",null,[o(c,{component:P})]),i("div",null,[o(c,{component:V})])])}}}),F=a(E,[["__scopeId","data-v-2dbfc14c"]]);export{F as default};
