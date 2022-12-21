import{c as Y,a1 as q,h as G,a as T,E as v,r as K,i as A,ar as j,C as Q,at as X,b as H,k as Z,I as x,l as h,au as ee,ad as oe,av as te,aw as ne,ax as le,ay as se,az as re,R as ae,ag as ie,ah as de,n as F,S as pe,Y as u,q as t,w as n,as as z,U as i,v as me,p as S,W as _,T as ue,aA as ce}from"./main-e8471a53.js";import{S as fe}from"./SdAceEditor-5fffd838.js";import{u as he}from"./SdFormBuilder-df667533.js";const L=function(e,o="vue"){return o==="html"?`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://unpkg.com/element-plus@2.2.27/dist/index.css">
        <link rel="stylesheet" href="https://unpkg.com/sdform-render@latest/dist/sdform-render.style.css">

        <script src="https://unpkg.com/vue@3.2.45/dist/vue.global.prod.js"><\/script>
        <script src="https://unpkg.com/element-plus@2.2.27/dist/index.full.min.js"><\/script>
        <script src="https://unpkg.com/@element-plus/icons-vue@2.0.10/dist/index.iife.min.js"><\/script>
        <script src="https://unpkg.com/sdform-render@latest/dist/sdform-render.umd.js"><\/script>
    </head>
    <body>

    <div id="app">
        <sd-form-render :form-render="formRender" :form-data="formData" :option-model="optionModel" ref="sdFormRef"></sd-form-render>
        
        <el-row>
            <el-col :span="24" style="text-align: right;">
                <el-button type="primary" @click="onSubmit">Submit</el-button>
                <el-button @click="sdFormRef.resetForm()">Cancel</el-button>
            </el-col>
        </el-row>
    </div>
    
    <script>
        const { createApp, reactive, ref } = Vue
        const App = {
            setup() {
                const sdFormRef = ref(null)
                const formData = reactive({})
                const optionModel = reactive({})
                const formRender = reactive(${e})

                const onSubmit = () => {
                    sdFormRef.value.getFormData().then((formData) => {
                        //body onSubmit
                        alert(JSON.stringify(formData, null, 2)) //test show data
                    }).catch((error) => {
                        sdFormRef.value.alert(error, 'error');
                    });
                }

                return {
                    sdFormRef,
                    formRender,
                    formData,
                    optionModel,
                    onSubmit
                }
            }
        }

        const app = createApp(App);
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }

        app.use(ElementPlus)
        app.use(SdFormRender)
        app.mount('#app')
    <\/script>

    </body>
</html>`:`<template>
    <div>
        <sd-form-render :form-render="formRender" :form-data="formData" :option-model="optionModel" ref="sdFormRef"></sd-form-render>
        <el-row>
            <el-col :span="24" style="text-align: right;">
                <el-button type="primary" @click="onSubmit">Submit</el-button>
                <el-button @click="sdFormRef.resetForm()">Cancel</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive } from 'vue'

    const sdFormRef = ref(null)
    const formData = reactive({})
    const optionModel = reactive({})
    const formRender = reactive(${e})

    const onSubmit = () => {
        sdFormRef.value.getFormData().then((formData) => {
            //body onSubmit
            sdFormRef.value.alert( JSON.stringify(formData), 'success') //test show data
        }).catch((error) => {
            sdFormRef.value.alert(error, 'error');
        });
    }
<\/script>`},ge=Y({name:"ToolbarWidget",components:{SdAceEditor:fe,SvgIcon:q},mounted(){let e=this.$props.tbMaxWidth,o=this.$props.tbMinWidth,w=window.innerWidth-300-300-320-80;this.options.toolbarWidth=w>=e?e:w<=o?o:w,G(()=>{this.$nextTick(()=>{let y=window.innerWidth-300-300-320-80;this.options.toolbarWidth=y>=e?e:y<=o?o:y})})},props:{tbMaxWidth:{type:Number,default:420},tbMinWidth:{type:Number,default:300}},computed:{formRender(){return{fields:T(this.builderState.fields),formConfig:T(this.builderState.formConfig)}}},methods:{showNodeTreeDrawer(){this.refreshNodeTree(),this.options.showNodeTreeDrawerFlag=!0,this.$nextTick(()=>{this.builderState.selectedId&&this.nodeTree.setCurrentKey(this.builderState.selectedId)})},testOnAppendButtonClick(e){},testOnButtonClick(e){},handleFormChange(e,o,w,y){},getFormData(){this.preForm.getFormData().then(e=>{this.options.formDataJson=JSON.stringify(e,null,"  "),this.options.formDataRawJson=JSON.stringify(e),this.options.showFormDataDialogFlag=!0}).catch(e=>{v.error(e)})},resetForm(){this.preForm.resetForm()},setFormDisabled(){this.preForm.disableForm()},setFormEnabled(){this.preForm.enableForm()},exportCode(){const e=JSON.stringify(this.formRender);this.options.vueCode=L(e),this.options.htmlCode=L(e,"html"),this.options.showExportCodeDialogFlag=!0}},watch:{"builderState.fields":{deep:!0,handler(e){}}},setup(){const e=he(),o=K({toolbarWidth:0,showNodeTreeDrawerFlag:!1,showPreviewDialogFlag:!1,showImportJsonDialogFlag:!1,showExportJsonDialogFlag:!1,showExportCodeDialogFlag:!1,showFormDataDialogFlag:!1,nodeTreeData:[],testFormData:{},testOptionData:{},formDataJson:"",formDataRawJson:"",importTemplate:"",jsonContent:"",jsonRawContent:"",vueCode:"",htmlCode:"",activeCodeTab:"html"}),w=A(null),y=j(()=>!e.undoEnabled()),$=j(()=>!e.redoEnabled());function U(){e.undoHistoryStep()}function C(){e.redoHistoryStep()}const a=j(()=>e.getLayoutType());function E(l){e.changeLayoutType(l)}function c(){o.nodeTreeData.length=0,e.fields.forEach(l=>{g(l,o.nodeTreeData)})}function g(l,m){let d={id:l.id,label:l.options.label||l.component};m.push(d),l.category!==void 0&&(d.children=[],l.component==="grid"?l.cols.map(r=>{let p={id:r.id,label:r.options.name||l.component,children:[]};d.children.push(p),r.fields.map(f=>{g(f,p.children)})}):l.component==="table"?l.rows.map(r=>{let p={id:r.id,label:"table-row",selectable:!1,children:[]};d.children.push(p),r.cols.map(f=>{if(f.merged)return;let s=p.children,k={id:f.id,label:"table-cell",children:[]};s.push(k),f.fields.map(O=>{g(O,k.children)})})}):l.component==="tab"?l.tabs.map(r=>{let p={id:r.id,label:r.options.name||l.component,selectable:!1,children:[]};d.children.push(p),r.fields.map(f=>{g(f,p.children)})}):l.component==="sub-form"?l.fields.map(r=>{g(r,d.children)}):l.category==="container"&&l.fields.map(r=>{g(r,d.children)}))}function J(l,m,d){if(l.selectable!==void 0&&!l.selectable)v.info("Current node cannot be selected");else{const r=l.id,p=V(r);p&&e.setSelected(p)}}function V(l){let m=null;return X(e.fields,d=>{d.id===l&&(m=d)}),m}function N(l){return H[l]===void 0?!0:!!H[l]}function B(){e.clearDesigner()}function R(){o.showPreviewDialogFlag=!0}const D=A(null),I=Q();function b(){let l=T(e.fields),m=T(e.formConfig);o.jsonContent=JSON.stringify({fields:l,formConfig:m},null,"  "),o.jsonRawContent=JSON.stringify({fields:l,formConfig:m}),o.showExportJsonDialogFlag=!0}function M(){o.importTemplate=JSON.stringify(e.getImportTemplate(),null,"  "),o.showImportJsonDialogFlag=!0}function W(){try{let l=JSON.parse(o.formDataJson);if(!l)throw new Error("Invalid Json Format");D.value.setFormData(l),o.showFormDataDialogFlag=!1}catch(l){v.error(l+"")}}function P(){try{let l=JSON.parse(o.importTemplate);if(!l||!l.formConfig)throw new Error("Invalid Json Format");let m=l.formConfig.jsonVersion;if(!m||m!==3)throw new Error("Json Version Mismatch");e.loadFormJson(l),o.showImportJsonDialogFlag=!1,v.success("importJsonSuccess"),e.emitHistoryChange(),e.emitEvent("form-json-imported",[])}catch(l){v.error(l+"")}}return{builderState:e,undoDisabled:y,redoDisabled:$,undoHistory:U,redoHistory:C,layoutType:a,changeLayoutType:E,refreshNodeTree:c,onNodeTreeClick:J,showToolButton:N,clearFormWidget:B,previewForm:R,exportJson:b,importJson:M,doJsonImport:P,setFormData:W,appState:I,nodeTree:w,preForm:D,options:o}}});const we={class:"toolbar-container"},ye={class:"left-toolbar"},Ce=["id"],be={class:"dialog-footer"},ve={class:"dialog-footer"},Fe={class:"dialog-footer"},De={class:"dialog-footer"},ke={class:"dialog-footer"};function Te(e,o,w,y,$,U){const C=q,a=x,E=h("Monitor"),c=ee,g=h("Cellphone"),J=h("Iphone"),V=oe,N=te,B=ne,R=h("Menu"),D=h("arrow-down"),I=h("Edit"),b=le,M=h("UploadFilled"),W=h("Delete"),P=se,l=re,m=ce,d=ae,r=h("SdAceEditor"),p=ie,f=de;return F(),pe(ue,null,[u("div",we,[u("div",ye,[t(a,{link:"",disabled:e.undoDisabled,title:"Undo",onClick:e.undoHistory},{default:n(()=>[t(C,{"icon-name":"undo"})]),_:1},8,["disabled","onClick"]),t(a,{link:"",disabled:e.redoDisabled,title:"Redo",onClick:e.redoHistory},{default:n(()=>[t(C,{"icon-name":"redo"})]),_:1},8,["disabled","onClick"]),t(V,{class:"ml-4"},{default:n(()=>[t(a,{type:e.layoutType==="PC"?"info":"",onClick:o[0]||(o[0]=s=>e.changeLayoutType("PC"))},{default:n(()=>[t(c,{size:20},{default:n(()=>[t(E)]),_:1})]),_:1},8,["type"]),t(a,{type:e.layoutType==="Pad"?"info":"",onClick:o[1]||(o[1]=s=>e.changeLayoutType("Pad"))},{default:n(()=>[t(c,{size:20},{default:n(()=>[t(g,{style:{transform:"rotate(-90deg)"}})]),_:1})]),_:1},8,["type"]),t(a,{type:e.layoutType==="Phone"?"info":"",onClick:o[2]||(o[2]=s=>e.changeLayoutType("Phone"))},{default:n(()=>[t(c,{size:20},{default:n(()=>[t(J)]),_:1})]),_:1},8,["type"])]),_:1}),t(a,{class:"ml-4",title:"Tree View",onClick:e.showNodeTreeDrawer},{default:n(()=>[t(C,{"icon-name":"node-tree"})]),_:1},8,["onClick"])]),t(B,{direction:"ltr",modelValue:e.options.showNodeTreeDrawerFlag,"onUpdate:modelValue":o[3]||(o[3]=s=>e.options.showNodeTreeDrawerFlag=s),modal:!0,size:300,"destroy-on-close":!0,class:"node-tree-drawer"},{header:n(({close:s,titleId:k,titleClass:O})=>[u("span",{id:k,class:z(O)},[t(C,{"icon-name":"node-tree"}),i(" Tree View")],10,Ce)]),default:n(()=>[t(N,{ref:"nodeTree",data:e.options.nodeTreeData,"node-key":"id","default-expand-all":"","highlight-current":"",class:"node-tree",onNodeClick:e.onNodeTreeClick},null,8,["data","onNodeClick"])]),_:1},8,["modelValue"]),u("div",{class:"right-toolbar",style:me({width:e.options.toolbarWidth+"px"})},[t(a,{class:"text-3.7",icon:"View",onClick:e.previewForm},{default:n(()=>[i("Preview")]),_:1},8,["onClick"]),t(l,null,{dropdown:n(()=>[t(P,null,{default:n(()=>[e.showToolButton("importModelBtn")?(F(),S(b,{key:0,onClick:e.importJson},{default:n(()=>[t(c,{class:"text-4"},{default:n(()=>[t(I)]),_:1}),i(" Import Model")]),_:1},8,["onClick"])):_("",!0),e.showToolButton("exportModelBtn")?(F(),S(b,{key:1,onClick:e.exportJson},{default:n(()=>[t(c,{class:"text-4"},{default:n(()=>[t(M)]),_:1}),i(" Export Model")]),_:1},8,["onClick"])):_("",!0),e.showToolButton("exportCodeBtn")?(F(),S(b,{key:2,onClick:e.exportCode},{default:n(()=>[t(C,{"icon-name":"addon-code",class:"mr-1"}),i(" Code")]),_:1},8,["onClick"])):_("",!0),e.showToolButton("clearBuilderBtn")?(F(),S(b,{key:3,onClick:e.clearFormWidget},{default:n(()=>[t(c,{class:"text-4"},{default:n(()=>[t(W)]),_:1}),i(" Clear")]),_:1},8,["onClick"])):_("",!0)]),_:1})]),default:n(()=>[t(a,{class:"text-3.7"},{default:n(()=>[t(c,null,{default:n(()=>[t(R)]),_:1}),i(),t(c,{class:"el-icon--right"},{default:n(()=>[t(D)]),_:1})]),_:1})]),_:1})],4)]),t(d,{title:"Preview",modelValue:e.options.showPreviewDialogFlag,"onUpdate:modelValue":o[5]||(o[5]=s=>e.options.showPreviewDialogFlag=s),draggable:"",width:"75%","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0,"append-to-body":!0,class:"dialog-form-render",center:e.layoutType!=="PC",fullscreen:e.layoutType==="Phone"||e.layoutType==="Pad"},{footer:n(()=>[u("div",be,[t(a,{type:"primary",onClick:e.getFormData},{default:n(()=>[i("View Data")]),_:1},8,["onClick"]),t(a,{type:"info",onClick:e.resetForm},{default:n(()=>[i("Reset")]),_:1},8,["onClick"]),t(a,{type:"warning",onClick:e.setFormDisabled},{default:n(()=>[i("Disable")]),_:1},8,["onClick"]),t(a,{type:"success",onClick:e.setFormEnabled},{default:n(()=>[i("Enable")]),_:1},8,["onClick"]),t(a,{onClick:o[4]||(o[4]=s=>e.options.showPreviewDialogFlag=!1)},{default:n(()=>[i("Close")]),_:1})])]),default:n(()=>[u("div",null,[u("div",{class:z(["form-render-wrapper",[e.layoutType==="Phone"?"phone-layout":e.layoutType==="Pad"?"pad-layout":""]])},[t(m,{ref:"preForm","form-render":e.formRender,"form-data":e.options.testFormData,"preview-state":!0,"option-Model":e.options.testOptionData,onAppendButtonClick:e.testOnAppendButtonClick,onButtonClick:e.testOnButtonClick,onFormChange:e.handleFormChange},null,8,["form-render","form-data","option-Model","onAppendButtonClick","onButtonClick","onFormChange"])],2)])]),_:1},8,["modelValue","center","fullscreen"]),t(d,{title:"Data Model",modelValue:e.options.showFormDataDialogFlag,"onUpdate:modelValue":o[8]||(o[8]=s=>e.options.showFormDataDialogFlag=s),draggable:"",width:"60%","show-close":!0,class:"dialog-code-editor","close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0,"append-to-body":!0},{footer:n(()=>[u("div",ve,[t(a,{type:"primary",onClick:e.setFormData},{default:n(()=>[i("Set Data")]),_:1},8,["onClick"]),t(a,{onClick:o[7]||(o[7]=s=>e.options.showFormDataDialogFlag=!1)},{default:n(()=>[i("Close")]),_:1})])]),default:n(()=>[t(r,{value:e.options.formDataJson,"onUpdate:value":o[6]||(o[6]=s=>e.options.formDataJson=s),"min-lines":25,"max-lines":25,theme:e.appState.isDark?"tomorrow_night_eighties":"sqlserver",lang:"json"},null,8,["value","theme"])]),_:1},8,["modelValue"]),t(d,{title:"Import",modelValue:e.options.showImportJsonDialogFlag,"onUpdate:modelValue":o[11]||(o[11]=s=>e.options.showImportJsonDialogFlag=s),"show-close":!0,class:"dialog-code-editor","append-to-body":!0,draggable:"",width:"60%","close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0},{footer:n(()=>[u("div",Fe,[t(a,{type:"primary",onClick:e.doJsonImport},{default:n(()=>[i("Import")]),_:1},8,["onClick"]),t(a,{onClick:o[10]||(o[10]=s=>e.options.showImportJsonDialogFlag=!1)},{default:n(()=>[i("Close")]),_:1})])]),default:n(()=>[t(r,{value:e.options.importTemplate,"onUpdate:value":o[9]||(o[9]=s=>e.options.importTemplate=s),"min-lines":25,"max-lines":25,theme:e.appState.isDark?"tomorrow_night_eighties":"sqlserver",lang:"json"},null,8,["value","theme"])]),_:1},8,["modelValue"]),t(d,{title:"Export",modelValue:e.options.showExportJsonDialogFlag,"onUpdate:modelValue":o[14]||(o[14]=s=>e.options.showExportJsonDialogFlag=s),"show-close":!0,class:"dialog-code-editor","append-to-body":"",draggable:"",width:"60%","close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0},{footer:n(()=>[u("div",De,[t(a,{onClick:o[13]||(o[13]=s=>e.options.showExportJsonDialogFlag=!1)},{default:n(()=>[i("Close")]),_:1})])]),default:n(()=>[t(r,{value:e.options.jsonContent,"onUpdate:value":o[12]||(o[12]=s=>e.options.jsonContent=s),"min-lines":25,"max-lines":25,theme:e.appState.isDark?"tomorrow_night_eighties":"sqlserver",lang:"json",readonly:!0},null,8,["value","theme"])]),_:1},8,["modelValue"]),t(d,{title:"Export Code",modelValue:e.options.showExportCodeDialogFlag,"onUpdate:modelValue":o[19]||(o[19]=s=>e.options.showExportCodeDialogFlag=s),"show-close":!0,class:"dialog-code-editor","append-to-body":"",draggable:"",width:"60%","close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0},{footer:n(()=>[u("div",ke,[t(a,{onClick:o[18]||(o[18]=s=>e.options.showExportCodeDialogFlag=!1)},{default:n(()=>[i("Close")]),_:1})])]),default:n(()=>[t(f,{type:"border-card",class:"no-box-shadow no-padding",modelValue:e.options.activeCodeTab,"onUpdate:modelValue":o[17]||(o[17]=s=>e.options.activeCodeTab=s)},{default:n(()=>[t(p,{label:"HTML",name:"html"},{default:n(()=>[t(r,{value:e.options.htmlCode,"onUpdate:value":o[15]||(o[15]=s=>e.options.htmlCode=s),"min-lines":25,"max-lines":25,theme:e.appState.isDark?"tomorrow_night_eighties":"sqlserver",lang:"html",readonly:!0},null,8,["value","theme"])]),_:1}),t(p,{label:"Vue",name:"vue"},{default:n(()=>[t(r,{value:e.options.vueCode,"onUpdate:value":o[16]||(o[16]=s=>e.options.vueCode=s),"min-lines":25,"max-lines":25,theme:e.appState.isDark?"tomorrow_night_eighties":"sqlserver",lang:"html",readonly:!0},null,8,["value","theme"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)}const Je=Z(ge,[["render",Te],["__scopeId","data-v-c7e8b811"]]);export{Je as default};
