import{b as Q,ao as ee,a4 as oe,f as H,ar as te,E as R,as as ie,d as S,g as se,z as ne,B as le,at as re,au as ae,av as de,i as Z,q as g,s as k,w as n,S as M,T as z,v as N,ag as I,u as q,x as G,aw as K,ax as X,aq as U,X as fe,P as ue,e as me,r as he,ap as j,A as pe,ay as ce,H as ge,j as w,az as Fe,ab as be,aA as Ce,aB as ye,aC as we,aD as De,aE as ve,R as Me,Y as y,t as i,U as m,y as Se,W as v,$ as ke}from"./index.15e5d51f.js";import{S as Ee}from"./SdAceEditor.a7a7cbe2.js";/* empty css             */import{a as Re,u as Te,b as Y}from"./index.77ae9e43.js";const _e=Q({name:"SdFormRender",components:{...ee},mixins:[oe],props:{formModel:{type:Object,default:()=>Re()},formData:{type:Object,default:()=>({})},optionModel:{type:Object,default:()=>({})},previewState:{type:Boolean,default:!1}},data(){return{formModelRender:this.formModel,formDataModel:{},subFormRefList:{},formId:null,externalComponents:{}}},provide(){return{refList:this.fieldRefList,sfRefList:this.subFormRefList,getFormConfig:()=>this.formModelRender.formConfig,globalOptionModel:this.optionModel,getOptionModel:()=>this.optionModel,globalModel:{formModel:this.formDataModel},previewState:this.previewState}},computed:{formConfig(){return this.formModelRender.formConfig},fields(){return this.formModelRender.fields},labelPosition(){return!!this.formConfig&&!!this.formConfig.labelPosition?this.formConfig.labelPosition:"left"},labelWidth(){return!!this.formConfig&&!!this.formConfig.labelWidth?this.formConfig.labelWidth+"px":"120px"},size(){return!!this.formConfig&&!!this.formConfig.size?this.formConfig.size:"default"},customClass(){return!!this.formConfig&&!!this.formConfig.customClass?this.formConfig.customClass:""}},watch:{},setup(){return{renderFormRef:H()}},beforeCreate(){},created(){this.buildFormModel(this.formModelRender?this.formModelRender.fields:null),this.initFormRender()},mounted(){this.handleOnMounted()},methods:{notify(e,o="info",t="Notification",s=5e3){try{te({title:t,type:o,message:e,duration:s})}catch(r){console.log(r.message)}},alert(e,o="info",t=4e3){try{R({grouping:!0,type:o,message:e,duration:t})}catch(s){console.log(s.message)}},alertBox(e,o,t="info",s="Notification"){try{ie.confirm(e,s,{confirmButtonText:"OK",cancelButtonText:"Cancel",type:t}).then(()=>{if(o)try{o()}catch(r){this.alert(r.message,"error")}}).catch(()=>{})}catch(r){console.log(r.message)}},buildFormModel(e){!!e&&e.length>0&&e.forEach(o=>{this.buildDataModel(o)})},buildDataModel(e){if(e.category==="container")if(e.component==="grid")!!e.cols&&e.cols.length>0&&e.cols.forEach(o=>{this.buildDataModel(o)});else if(e.component==="table")!!e.rows&&e.rows.length>0&&e.rows.forEach(o=>{!!o.cols&&o.cols.length>0&&o.cols.forEach(t=>{this.buildDataModel(t)})});else if(e.component==="tab")!!e.tabs&&e.tabs.length>0&&e.tabs.forEach(o=>{!!o.fields&&o.fields.length>0&&o.fields.forEach(t=>{this.buildDataModel(t)})});else if(e.component==="sub-form"){let o=e.options.name;if(this.formData.hasOwnProperty(o)){let t=this.formData[o];this.formDataModel[o]=S(t)}else{let t={};e.options.showBlankRow?(e.fields.forEach(s=>{s.formItemFlag&&(t[s.options.name]=s.options.defaultValue)}),this.formDataModel[o]=[t]):this.formDataModel[o]=[]}}else e.component==="grid-col"||e.component==="table-cell"?!!e.fields&&e.fields.length>0&&e.fields.forEach(o=>{this.buildDataModel(o)}):!!e.fields&&e.fields.length>0&&e.fields.forEach(o=>{this.buildDataModel(o)});else if(e.formItemFlag)if(!this.formData.hasOwnProperty(e.options.name))this.formDataModel[e.options.name]=e.options.defaultValue;else{let o=this.formData[e.options.name];this.formDataModel[e.options.name]=S(o)}},handleOnMounted(){try{!!this.formConfig&&!!this.formConfig.onFormMounted&&new Function(this.formConfig.onFormMounted).call(this)}catch(e){this.alert(e.message,"error")}},initFormRender(e=!0){this.formId="sdRender"+se(),e&&this.insertCustomStyleAndScriptNode(),this.addFieldChangeEventHandler(),this.addFieldValidateEventHandler(),this.registerFormToRefList(),this.handleOnCreated()},insertCustomStyleAndScriptNode(){!!this.formConfig&&!!this.formConfig.cssCode&&ne(this.formConfig.cssCode,this.previewState?"":this.formId),!!this.formConfig&&!!this.formConfig.functions&&le(this.formConfig.functions,this.previewState?"":this.formId)},addFieldChangeEventHandler(){try{this.off$("fieldChange"),this.on$("fieldChange",(e,o,t,s,r)=>{this.handleFieldDataChange(e,o,t,s,r),this.$emit("formChange",e,o,t,this.formDataModel,s,r)})}catch(e){this.alert(e.message,"error")}},handleFieldDataChange(e,o,t,s,r){try{!!this.formConfig&&!!this.formConfig.onFormDataChange&&new Function("fieldName","newValue","oldValue","formModel","subFormName","subFormRowIndex",this.formConfig.onFormDataChange).call(this,e,o,t,this.formDataModel,s,r)}catch(p){this.alert(p.message,"error")}},addFieldValidateEventHandler(){try{this.off$("fieldValidation"),this.on$("fieldValidation",e=>{this.getNativeForm()&&new Promise((t,s)=>{let r=this.getNativeForm().validateField(e);t(r)}).then(t=>{t!==!0&&console.log(t)}).catch(t=>{console.log(t)})})}catch(e){this.alert(e.message,"error")}},registerFormToRefList(){this.fieldRefList.sd_form_ref=this},handleOnCreated(){try{!!this.formConfig&&!!this.formConfig.onFormCreated&&new Function(this.formConfig.onFormCreated).call(this)}catch(e){this.alert(e.message,"error")}},findWidgetAndSetDisabled(e,o){let t=this.getFieldRef(e);t?t.setDisabled(o):this.findWidgetOfSubFormAndSetDisabled(e,o)},findWidgetOfSubFormAndSetDisabled(e,o){this.findWidgetNameInSubForm(e).forEach(t=>{let s=this.getFieldRef(t);s&&s.setDisabled(o)})},findWidgetAndSetHidden(e,o){let t=this.getFieldRef(e);t?t.setHidden(o):this.findWidgetOfSubFormAndSetHidden(e,o)},findWidgetOfSubFormAndSetHidden(e,o){this.findWidgetNameInSubForm(e).forEach(t=>{let s=this.getFieldRef(t);s&&s.setHidden(o)})},findWidgetNameInSubForm(e){let o=[],t=null,s=(r,p)=>{!!r.options&&r.options.name===e&&(t=p.options.name)};if(re(this.fields,s),t){let r=this.getFieldRef(t);if(r){let p=r.getRowIdData();!!p&&p.length>0&&p.forEach(c=>{o.push(e+"@row"+c)})}}return o},getFormRef(){return this},getNativeForm(){return this.renderFormRef},getFieldRef(e,o=!1){let t=this.fieldRefList[e];return!t&&!!o&&this.alert("Ref Not Found `"+e+"`","error"),t},clearFormDataModel(){for(let e in this.formDataModel)delete this.formDataModel[e]},setFormModel(e){if(e)if(typeof e=="string"||e.constructor===Object){let o=null;if(typeof e=="string"?o=JSON.parse(e):o=e,!o.formConfig||!o.fields){this.alert("Invalid format of form json.","error");return}this.clearFormDataModel(),this.buildFormModel(o.fields),this.formModelRender.formConfig=o.formConfig,this.formModelRender.fields=o.fields,this.insertCustomStyleAndScriptNode(),this.$nextTick(()=>{this.initFormRender(!1),this.handleOnMounted()})}else this.$message.error("Set form json failed.")},reloadOptionData(e){let o=[];!!e&&typeof e=="string"?o=[e]:!!e&&Array.isArray(e)&&(o=[...e]),this.broadcast("FieldWidget","reloadOptionItems",o)},getFormData(e=!0){if(!e)return this.formDataModel;let o=function(){},t=new window.Promise(function(s,r){o=function(p,c){c?r(c):s(p)}});return this.getNativeForm().validate(s=>{s?o(this.formDataModel):o(this.formDataModel,"Validation Failed")}),t},setFormData(e){Object.keys(this.formDataModel).forEach(o=>{!!e&&e.hasOwnProperty(o)&&(this.formDataModel[o]=S(e[o]))}),this.broadcast("ContainerItem","setFormData",this.formDataModel),this.broadcast("FieldWidget","setFormData",this.formDataModel)},getFieldValue(e){let o=this.getFieldRef(e);if(!!o&&!!o.getValue)return o.getValue();if(!o){let t=[];return this.findWidgetNameInSubForm(e).forEach(s=>{let r=this.getFieldRef(s);!!r&&!!r.getValue&&t.push(r.getValue())}),t}},setFieldValue(e,o){let t=this.getFieldRef(e);!!t&&!!t.setValue&&t.setValue(o),t||this.findWidgetNameInSubForm(e).forEach(s=>{let r=this.getFieldRef(s);!!r&&!!r.setValue&&r.setValue(o)})},getSubFormValues(e,o=!0){return this.subFormRefList[e].getSubFormValues(o)},disableForm(){Object.keys(this.fieldRefList).forEach(o=>{let t=this.getFieldRef(o);if(t)if(!!t.field&&t.field.component==="sub-form")t.disableSubForm();else{//!!foundW.setDisabled && foundW.setDisabled(true)
t.setDisabled&&t.setDisabled(!0)}})},enableForm(){Object.keys(this.fieldRefList).forEach(o=>{let t=this.getFieldRef(o);if(t)if(!!t.field&&t.field.component==="sub-form")t.enableSubForm();else{//!!foundW.setDisabled && foundW.setDisabled(false)
t.setDisabled&&t.setDisabled(!1)}})},resetForm(){Object.keys(this.subFormRefList).forEach(t=>{this.subFormRefList[t].resetSubForm&&this.subFormRefList[t].resetSubForm()}),Object.keys(this.fieldRefList).forEach(t=>{let s=this.getFieldRef(t);!!s&&!s.subFormItemFlag&&!!s.resetField&&s.resetField()}),this.$nextTick(()=>{this.clearValidate()})},clearValidate(e=null){this.getNativeForm().clearValidate(e)},validateForm(e){this.getNativeForm().validate(o=>{e(o)})},validateFields(){},disableWidgets(e){e&&(typeof e=="string"?this.findWidgetAndSetDisabled(e,!0):Array.isArray(e)&&e.forEach(o=>{this.findWidgetAndSetDisabled(o,!0)}))},enableWidgets(e){e&&(typeof e=="string"?this.findWidgetAndSetDisabled(e,!1):Array.isArray(e)&&e.forEach(o=>{this.findWidgetAndSetDisabled(o,!1)}))},hideWidgets(e){e&&(typeof e=="string"?this.findWidgetAndSetHidden(e,!0):Array.isArray(e)&&e.forEach(o=>{this.findWidgetAndSetHidden(o,!0)}))},showWidgets(e){e&&(typeof e=="string"?this.findWidgetAndSetHidden(e,!1):Array.isArray(e)&&e.forEach(o=>{this.findWidgetAndSetHidden(o,!1)}))},getFieldInput(){return ae(this.formModelRender.fields)},getContainerFields(){return de(this.formModelRender.fields)},addEC(e,o){this.externalComponents[e]=o},hasEC(e){return this.externalComponents.hasOwnProperty(e)},getEC(e){return this.externalComponents[e]}},beforeUnmount(){}});function We(e,o,t,s,r,p){const c=ue;return g(),k(c,{"label-position":e.labelPosition,size:e.size,class:U([[e.customClass],"render-form"]),"label-width":e.labelWidth,"validate-on-rule-change":!1,model:e.formDataModel,ref:"renderFormRef",onSubmit:o[0]||(o[0]=fe(()=>{},["prevent"]))},{default:n(()=>[(g(!0),M(z,null,N(e.fields,(d,D)=>(g(),M(z,null,[d.category==="container"?(g(),k(I(d.component+"-render"),{field:d,key:d.id?d.id:D,"parent-list":e.fields,"index-of-parent-list":D,"parent-field":null},q({_:2},[N(Object.keys(e.$slots),u=>({name:u,fn:n(C=>[G(e.$slots,u,K(X(C)),void 0,!0)])}))]),1032,["field","parent-list","index-of-parent-list"])):(g(),k(I(d.component),{field:d,"form-model":e.formDataModel,builder:null,"builder-status":!1,key:d.id?d.id:D,"parent-list":e.fields,"index-of-parent-list":D,"parent-field":null},q({_:2},[N(Object.keys(e.$slots),u=>({name:u,fn:n(C=>[G(e.$slots,u,K(X(C)),void 0,!0)])}))]),1032,["field","form-model","parent-list","index-of-parent-list"]))],64))),256))]),_:3},8,["label-position","size","class","label-width","model"])}const Ve=Z(_e,[["render",We],["__scopeId","data-v-89280e86"]]);const Oe=Q({name:"ToolbarWidget",components:{SdAceEditor:Ee},mounted(){let e=this.$props.tbMaxWidth,o=this.$props.tbMinWidth,t=window.innerWidth-300-300-320-80;this.options.toolbarWidth=t>=e?e:t<=o?o:t,me(()=>{this.$nextTick(()=>{let s=window.innerWidth-300-300-320-80;this.options.toolbarWidth=s>=e?e:s<=o?o:s})})},props:{tbMaxWidth:{type:Number,default:420},tbMinWidth:{type:Number,default:300}},computed:{formModel(){return{fields:S(this.builderState.fields),formConfig:S(this.builderState.formConfig)}}},methods:{showNodeTreeDrawer(){this.refreshNodeTree(),this.options.showNodeTreeDrawerFlag=!0,this.$nextTick(()=>{this.builderState.selectedId&&this.nodeTree.setCurrentKey(this.builderState.selectedId)})},testOnAppendButtonClick(e){console.log("test",e)},testOnButtonClick(e){console.log("test",e)},handleFormChange(e,o,t,s){console.log("formModel",s)},getFormData(){this.preForm.getFormData().then(e=>{this.options.formDataJson=JSON.stringify(e,null,"  "),this.options.formDataRawJson=JSON.stringify(e),this.options.showFormDataDialogFlag=!0}).catch(e=>{R.error(e)})},resetForm(){this.preForm.resetForm()},setFormDisabled(){this.preForm.disableForm()},setFormEnabled(){this.preForm.enableForm()}},watch:{"builderState.fields":{deep:!0,handler(e){}}},setup(){const e=Te(),o=he({toolbarWidth:0,showNodeTreeDrawerFlag:!1,showPreviewDialogFlag:!1,showImportJsonDialogFlag:!1,showExportJsonDialogFlag:!1,showExportCodeDialogFlag:!1,showFormDataDialogFlag:!1,nodeTreeData:[],testFormData:{},testOptionData:{},formDataJson:"",formDataRawJson:"",importTemplate:"",jsonContent:"",jsonRawContent:"",vueCode:"",htmlCode:""}),t=H(null),s=j(()=>!e.undoEnabled()),r=j(()=>!e.redoEnabled());function p(){e.undoHistoryStep()}function c(){e.redoHistoryStep()}const d=j(()=>e.getLayoutType());function D(l){e.changeLayoutType(l)}function u(){o.nodeTreeData.length=0,e.fields.forEach(l=>{C(l,o.nodeTreeData)})}function C(l,F){let b={id:l.id,label:l.options.label||l.component};F.push(b),l.category!==void 0&&(b.children=[],l.component==="grid"?l.cols.map(f=>{let h={id:f.id,label:f.options.name||l.component,children:[]};b.children.push(h),f.fields.map(a=>{C(a,h.children)})}):l.component==="table"?l.rows.map(f=>{let h={id:f.id,label:"table-row",selectable:!1,children:[]};b.children.push(h),f.cols.map(a=>{if(a.merged)return;let L=h.children,T={id:a.id,label:"table-cell",children:[]};L.push(T),a.fields.map(x=>{C(x,T.children)})})}):l.component==="tab"?l.tabs.map(f=>{let h={id:f.id,label:f.options.name||l.component,selectable:!1,children:[]};b.children.push(h),f.fields.map(a=>{C(a,h.children)})}):l.component==="sub-form"?l.fields.map(f=>{C(f,b.children)}):l.category==="container"&&l.fields.map(f=>{C(f,b.children)}))}function _(l,F,b){if(l.selectable!==void 0&&!l.selectable)R.info("Current node cannot be selected");else{const f=l.id,h=W(f);h&&e.setSelected(h)}}function W(l){let F=null;return ce(e.fields,b=>{b.id===l&&(F=b)}),F}function V(l){return Y[l]===void 0?!0:!!Y[l]}function O(){e.clearDesigner()}function A(){o.showPreviewDialogFlag=!0}const B=H(null),$=pe();function E(){let l=S(e.fields),F=S(e.formConfig);o.jsonContent=JSON.stringify({fields:l,formConfig:F},null,"  "),o.jsonRawContent=JSON.stringify({fields:l,formConfig:F}),o.showExportJsonDialogFlag=!0}function J(){o.importTemplate=JSON.stringify(e.getImportTemplate(),null,"  "),o.showImportJsonDialogFlag=!0}function P(){try{let l=JSON.parse(o.importTemplate);if(!l||!l.formConfig)throw new Error("Invalid Json Format");let F=l.formConfig.jsonVersion;if(!F||F!==3)throw new Error("Json Version Mismatch");e.loadFormJson(l),o.showImportJsonDialogFlag=!1,R.success("importJsonSuccess"),e.emitHistoryChange(),e.emitEvent("form-json-imported",[])}catch(l){R.error(l+"")}}return{builderState:e,undoDisabled:s,redoDisabled:r,undoHistory:p,redoHistory:c,layoutType:d,changeLayoutType:D,refreshNodeTree:u,onNodeTreeClick:_,showToolButton:V,clearFormWidget:O,previewForm:A,exportJson:E,importJson:J,doJsonImport:P,appState:$,nodeTree:t,preForm:B,options:o}}});const Ae={class:"toolbar-container"},Be={class:"left-toolbar"},$e=["id"],Je={key:0},Pe={class:"dialog-footer"},Le={key:1},Ne={class:"dialog-footer"},je={key:2},He={class:"dialog-footer"},ze={key:3},Ue={class:"dialog-footer"};function Ie(e,o,t,s,r,p){const c=ke,d=ge,D=w("Monitor"),u=Fe,C=w("Cellphone"),_=w("Iphone"),W=be,V=Ce,O=ye,A=w("Menu"),B=w("arrow-down"),$=w("Edit"),E=we,J=w("UploadFilled"),P=w("Delete"),l=De,F=ve,b=Ve,f=Me,h=w("SdAceEditor");return g(),M(z,null,[y("div",Ae,[y("div",Be,[i(d,{link:"",disabled:e.undoDisabled,title:"Undo",onClick:e.undoHistory},{default:n(()=>[i(c,{"icon-name":"undo"})]),_:1},8,["disabled","onClick"]),i(d,{link:"",disabled:e.redoDisabled,title:"Redo",onClick:e.redoHistory},{default:n(()=>[i(c,{"icon-name":"redo"})]),_:1},8,["disabled","onClick"]),i(W,{class:"ml-4"},{default:n(()=>[i(d,{type:e.layoutType==="PC"?"info":"",onClick:o[0]||(o[0]=a=>e.changeLayoutType("PC"))},{default:n(()=>[i(u,{size:20},{default:n(()=>[i(D)]),_:1})]),_:1},8,["type"]),i(d,{type:e.layoutType==="Pad"?"info":"",onClick:o[1]||(o[1]=a=>e.changeLayoutType("Pad"))},{default:n(()=>[i(u,{size:20},{default:n(()=>[i(C,{style:{transform:"rotate(-90deg)"}})]),_:1})]),_:1},8,["type"]),i(d,{type:e.layoutType==="Phone"?"info":"",onClick:o[2]||(o[2]=a=>e.changeLayoutType("Phone"))},{default:n(()=>[i(u,{size:20},{default:n(()=>[i(_)]),_:1})]),_:1},8,["type"])]),_:1}),i(d,{class:"ml-4",title:"Tree View",onClick:e.showNodeTreeDrawer},{default:n(()=>[i(c,{"icon-name":"node-tree"})]),_:1},8,["onClick"])]),i(O,{direction:"ltr",modelValue:e.options.showNodeTreeDrawerFlag,"onUpdate:modelValue":o[3]||(o[3]=a=>e.options.showNodeTreeDrawerFlag=a),modal:!0,size:300,"destroy-on-close":!0,"custom-class":"node-tree-drawer"},{header:n(({close:a,titleId:L,titleClass:T})=>[y("span",{id:L,class:U(T)},[i(c,{"icon-name":"node-tree"}),m(" Tree View")],10,$e)]),default:n(()=>[i(V,{ref:"nodeTree",data:e.options.nodeTreeData,"node-key":"id","default-expand-all":"","highlight-current":"",class:"node-tree","icon-class":"ep-icon-arrow-right",onNodeClick:e.onNodeTreeClick},null,8,["data","onNodeClick"])]),_:1},8,["modelValue"]),y("div",{class:"right-toolbar",style:Se({width:e.options.toolbarWidth+"px"})},[i(d,{class:"text-3.7",icon:"View",onClick:e.previewForm},{default:n(()=>[m("Preview")]),_:1},8,["onClick"]),i(F,null,{dropdown:n(()=>[i(l,null,{default:n(()=>[e.showToolButton("importModelBtn")?(g(),k(E,{key:0,onClick:e.importJson},{default:n(()=>[i(u,{class:"text-4"},{default:n(()=>[i($)]),_:1}),m(" Import Model")]),_:1},8,["onClick"])):v("",!0),e.showToolButton("exportModelBtn")?(g(),k(E,{key:1,onClick:e.exportJson},{default:n(()=>[i(u,{class:"text-4"},{default:n(()=>[i(J)]),_:1}),m(" Export Model")]),_:1},8,["onClick"])):v("",!0),e.showToolButton("exportCodeBtn")?(g(),k(E,{key:2},{default:n(()=>[i(c,{"icon-name":"addon-code",class:"mr-1"}),m(" Code")]),_:1})):v("",!0),e.showToolButton("clearBuilderBtn")?(g(),k(E,{key:3,onClick:e.clearFormWidget},{default:n(()=>[i(u,{class:"text-4"},{default:n(()=>[i(P)]),_:1}),m(" Clear")]),_:1},8,["onClick"])):v("",!0)]),_:1})]),default:n(()=>[i(d,{class:"text-3.7"},{default:n(()=>[i(u,null,{default:n(()=>[i(A)]),_:1}),m(),i(u,{class:"el-icon--right"},{default:n(()=>[i(B)]),_:1})]),_:1})]),_:1})],4)]),e.options.showPreviewDialogFlag?(g(),M("div",Je,[i(f,{title:"Preview",modelValue:e.options.showPreviewDialogFlag,"onUpdate:modelValue":o[5]||(o[5]=a=>e.options.showPreviewDialogFlag=a),draggable:"",width:"75%","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0,"append-to-body":!0,class:"dialog-form-render",center:e.layoutType!=="PC",fullscreen:e.layoutType==="Phone"||e.layoutType==="Pad"},{footer:n(()=>[y("div",Pe,[i(d,{type:"primary",onClick:e.getFormData},{default:n(()=>[m("View Data")]),_:1},8,["onClick"]),i(d,{type:"info",onClick:e.resetForm},{default:n(()=>[m("Reset")]),_:1},8,["onClick"]),i(d,{type:"warning",onClick:e.setFormDisabled},{default:n(()=>[m("Disable")]),_:1},8,["onClick"]),i(d,{type:"success",onClick:e.setFormEnabled},{default:n(()=>[m("Enable")]),_:1},8,["onClick"]),i(d,{onClick:o[4]||(o[4]=a=>e.options.showPreviewDialogFlag=!1)},{default:n(()=>[m("Close")]),_:1})])]),default:n(()=>[y("div",null,[y("div",{class:U(["form-render-wrapper",[e.layoutType==="Phone"?"phone-layout":e.layoutType==="Pad"?"pad-layout":""]])},[i(b,{ref:"preForm","form-model":e.formModel,"form-data":e.options.testFormData,"preview-state":!0,"option-Model":e.options.testOptionData,onAppendButtonClick:e.testOnAppendButtonClick,onButtonClick:e.testOnButtonClick,onFormChange:e.handleFormChange},null,8,["form-model","form-data","option-Model","onAppendButtonClick","onButtonClick","onFormChange"])],2)])]),_:1},8,["modelValue","center","fullscreen"])])):v("",!0),e.options.showFormDataDialogFlag?(g(),M("div",Le,[i(f,{title:"Data Model",modelValue:e.options.showFormDataDialogFlag,"onUpdate:modelValue":o[8]||(o[8]=a=>e.options.showFormDataDialogFlag=a),draggable:"",width:"50%","show-close":!0,class:"dialog-code-editor","close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0,"append-to-body":!0},{footer:n(()=>[y("div",Ne,[i(d,{onClick:o[7]||(o[7]=a=>e.options.showFormDataDialogFlag=!1)},{default:n(()=>[m("Close")]),_:1})])]),default:n(()=>[i(h,{value:e.options.formDataJson,"onUpdate:value":o[6]||(o[6]=a=>e.options.formDataJson=a),"min-lines":20,"max-lines":20,theme:e.appState.isDark?"tomorrow_night_eighties":"sqlserver",lang:"json",readonly:!0},null,8,["value","theme"])]),_:1},8,["modelValue"])])):v("",!0),e.options.showImportJsonDialogFlag?(g(),M("div",je,[i(f,{title:"Import",modelValue:e.options.showImportJsonDialogFlag,"onUpdate:modelValue":o[11]||(o[11]=a=>e.options.showImportJsonDialogFlag=a),"show-close":!0,class:"dialog-code-editor","append-to-body":!0,draggable:"",width:"50%","close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0},{footer:n(()=>[y("div",He,[i(d,{type:"primary",onClick:e.doJsonImport},{default:n(()=>[m("Import")]),_:1},8,["onClick"]),i(d,{onClick:o[10]||(o[10]=a=>e.options.showImportJsonDialogFlag=!1)},{default:n(()=>[m("Close")]),_:1})])]),default:n(()=>[i(h,{value:e.options.importTemplate,"onUpdate:value":o[9]||(o[9]=a=>e.options.importTemplate=a),"min-lines":20,"max-lines":20,theme:e.appState.isDark?"tomorrow_night_eighties":"sqlserver",lang:"json"},null,8,["value","theme"])]),_:1},8,["modelValue"])])):v("",!0),e.options.showExportJsonDialogFlag?(g(),M("div",ze,[i(f,{title:"Export",modelValue:e.options.showExportJsonDialogFlag,"onUpdate:modelValue":o[14]||(o[14]=a=>e.options.showExportJsonDialogFlag=a),"show-close":!0,class:"dialog-code-editor","append-to-body":"",draggable:"",width:"50%","close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0},{footer:n(()=>[y("div",Ue,[i(d,{onClick:o[13]||(o[13]=a=>e.options.showExportJsonDialogFlag=!1)},{default:n(()=>[m("Close")]),_:1})])]),default:n(()=>[i(h,{value:e.options.jsonContent,"onUpdate:value":o[12]||(o[12]=a=>e.options.jsonContent=a),"min-lines":20,"max-lines":20,theme:e.appState.isDark?"tomorrow_night_eighties":"sqlserver",lang:"json",readonly:!0},null,8,["value","theme"])]),_:1},8,["modelValue"])])):v("",!0)],64)}const Ye=Z(Oe,[["render",Ie],["__scopeId","data-v-b6f66464"]]);export{Ye as default};
