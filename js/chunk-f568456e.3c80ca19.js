(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f568456e"],{"118f":function(t,e,a){t.exports=a.p+"img/analysis_.f465ae05.svg"},3661:function(t,e,a){"use strict";var i=a("c1a1"),s=a.n(i);s.a},"4eaf":function(t,e,a){"use strict";var i=a("8504"),s=a.n(i);s.a},"55e3":function(t,e,a){"use strict";var i=a("f5c8"),s=a.n(i);s.a},"615b":function(t,e,a){},6324:function(t,e,a){t.exports=a.p+"img/Screenshot_20200706_115320.c1e5324c.png"},"6ece":function(t,e,a){},7129:function(t,e,a){"use strict";var i=a("8c73"),s=a.n(i);s.a},8504:function(t,e,a){},"8c73":function(t,e,a){},"8eab":function(t,e,a){"use strict";var i=a("d1f6"),s=a.n(i);s.a},b350:function(t,e,a){t.exports=a.p+"img/photo_2020-07-07_15-41-51.049b143b.jpg"},b5b6:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 fill-height",attrs:{fluid:""}},[a("Intro"),a("Sobre"),a("Sobre1"),a("Sobre2"),a("Services"),a("Sobre3"),a("Footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"pa-0",staticStyle:{background:"blue"},attrs:{fluid:"",id:"hero"}},[i("v-row",{staticClass:"fill-height",attrs:{justify:"center","align-content":"space-between","no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-card",{attrs:{height:"80px",color:"transparent",flat:""}})],1),i("v-col",{staticClass:"text-left pa-0",attrs:{lg:"4",sm:"12"}},[i("v-card",{attrs:{flat:"",color:"transparent",dark:"","max-width":"510"}},[i("v-card-title",[i("h1",{staticClass:"display-3 font-weight-regular mb-4"},[t._v(" Чеклисты ")])]),i("v-card-text",[i("h4",{staticClass:"display-2 white--text"},[t._v("гибкая система контроля процессов, сотрудников и задач")])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{large:"",outlined:"",rounded:"",block:""},on:{click:function(e){return t.$vuetify.goTo("#sobre")}}},[t._v("Подробнее ")])],1)],1)],1),i("v-col",{staticClass:"text-left",attrs:{lg:"5",sm:"12"}},[i("v-img",{staticClass:"mx-auto my-12",attrs:{alt:"Header Image",contain:"",src:a("f351"),"max-width":"280"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-sparkline",{attrs:{value:t.value,smooth:t.radius||!1,padding:t.padding,"line-width":t.lineWidth,"stroke-linecap":t.lineCap,color:"white",fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}})],1)],1)],1)},n=[],o={name:"Intro",data:function(){return{showLabels:!1,lineWidth:2,labelSize:7,radius:16,padding:0,lineCap:"round",gradient:"#000000",value:[423,446,675,510,590,610,760],gradientDirection:"bottom",fill:!0,type:"trend",autoLineWidth:!1}}},l=o,c=(a("7129"),a("2877")),u=a("6544"),h=a.n(u),d=a("8336"),f=(a("0481"),a("4069"),a("a9e3"),a("5530")),m=(a("615b"),a("10d2")),p=a("2b0e"),g=(a("c7cd"),a("ade3")),v=(a("6ece"),a("0789")),b=a("a9ad"),y=a("fe6c"),x=a("a452"),_=a("7560"),C=a("80d2"),w=a("58df"),V=Object(w["a"])(b["a"],Object(y["b"])(["absolute","fixed","top","bottom"]),x["a"],_["a"]),S=V.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(C["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(C["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(g["a"])(t,this.isReversed?"right":"left",Object(C["f"])(this.normalizedValue,"%")),Object(g["a"])(t,"width",Object(C["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(f["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?v["b"]:v["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(C["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(C["k"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(g["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),a=e.width;this.internalValue=t.offsetX/a*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(C["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),j=S,k=p["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(j,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),B=a("1c87"),$=Object(w["a"])(k,B["a"],m["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({"v-card":!0},B["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},m["a"].options.computed.classes.call(this))},styles:function(){var t=Object(f["a"])({},m["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=k.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}}),O=Object(C["g"])("v-card__actions"),L=(Object(C["g"])("v-card__subtitle"),Object(C["g"])("v-card__text")),E=Object(C["g"])("v-card__title"),z=a("62ad"),D=a("a523"),N=a("adda"),W=a("0fd9"),I=a("2fa4"),M=(a("99af"),a("cb29"),a("caad"),a("d81d"),a("fb6a"),a("d3b7"),a("25f0"),a("53ca")),P=a("2909");function T(t,e){var a=e.minX,i=e.maxX,s=e.minY,r=e.maxY,n=t.length,o=Math.max.apply(Math,Object(P["a"])(t)),l=Math.min.apply(Math,Object(P["a"])(t)),c=(i-a)/(n-1),u=(r-s)/(o-l||1);return t.map((function(t,e){return{x:a+e*c,y:r-(t-l)*u+1e-5*+(e===n-1)-1e-5*+(0===e),value:t}}))}function R(t,e){var a=e.minX,i=e.maxX,s=e.minY,r=e.maxY,n=t.length,o=Math.max.apply(Math,Object(P["a"])(t)),l=Math.min.apply(Math,Object(P["a"])(t));l>0&&(l=0),o<0&&(o=0);var c=i/n,u=(r-s)/(o-l||1),h=r-Math.abs(l*u);return t.map((function(t,e){var i=Math.abs(u*t);return{x:a+e*c,y:h-i+ +(t<0)*i,height:i,value:t}}))}a("a15b");function H(t){return parseInt(t,10)}function Y(t,e,a){return H(t.x+a.x)===H(2*e.x)&&H(t.y+a.y)===H(2*e.y)}function F(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function X(t,e,a){var i={x:t.x-e.x,y:t.y-e.y},s=Math.sqrt(i.x*i.x+i.y*i.y),r={x:i.x/s,y:i.y/s};return{x:e.x+r.x*a,y:e.y+r.y*a}}function q(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,s=t.shift(),r=t[t.length-1];return(a?"M".concat(s.x," ").concat(i-s.x+2," L").concat(s.x," ").concat(s.y):"M".concat(s.x," ").concat(s.y))+t.map((function(a,i){var r=t[i+1],n=t[i-1]||s,o=r&&Y(r,a,n);if(!r||o)return"L".concat(a.x," ").concat(a.y);var l=Math.min(F(n,a),F(r,a)),c=l/2<e,u=c?l/2:e,h=X(n,a,u),d=X(r,a,u);return"L".concat(h.x," ").concat(h.y,"S").concat(a.x," ").concat(a.y," ").concat(d.x," ").concat(d.y)})).join("")+(a?"L".concat(r.x," ").concat(i-s.x+2," Z"):"")}var A=Object(w["a"])(b["a"]).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,a=e.length,i=0;t.length<a;i++){var s=e[i],r=this.labels[i];r||(r="object"===Object(M["a"])(s)?s.value:s),t.push({x:s.x,value:String(r)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"===typeof t?t:t.value}))},_values:function(){return"trend"===this.type?T(this.normalizedValues,this.boundary):R(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var e=t.$refs.path,a=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=a+" "+a,e.style.strokeDashoffset=Math.abs(a-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.strokeDashoffset="0"),t.lastLength=a}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,a=this.gradient.slice();a.length||a.push("");var i=Math.max(a.length-1,1),s=a.reverse().map((function(e,a){return t.$createElement("stop",{attrs:{offset:a/i,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,x1:+("left"===e),y1:+("top"===e),x2:+("right"===e),y2:+("bottom"===e)}},s)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=T(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:q(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,a=this.parsedLabels.map((function(a,i){return e.$createElement("text",{attrs:{x:a.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(a,i)])}));return this.genG(a)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=R(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,a,i){var s=this,r="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(i,"-clip")}},t.map((function(t){return s.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:a,height:t.height,rx:r,ry:r}},[s.autoDraw?s.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(s.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:Object(f["a"])(Object(f["a"])({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),G=Object(c["a"])(l,r,n,!1,null,"0687645c",null),J=G.exports;h()(G,{VBtn:d["a"],VCard:$,VCardActions:O,VCardText:L,VCardTitle:E,VCol:z["a"],VContainer:D["a"],VImg:N["a"],VRow:W["a"],VSpacer:I["a"],VSparkline:A});var Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"my-12",attrs:{fluid:"",id:"sobre"}},[i("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"},attrs:{justify:"center",align:"center","no-gutters":""}},[i("v-col",{staticClass:"d-none d-md-flex justify-center",attrs:{cols:"12",md:"4"}},[i("v-img",{attrs:{src:a("ed88"),"max-width":"400px"}})],1),i("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"10",md:"8"}},[i("h1",{staticClass:"display-2 font-weight-light my-12"},[t._v("О системе")]),i("p",{staticClass:"body-1 text-justify mx-auto",staticStyle:{"max-width":"600px"}},[t._v(" Вы можете заполнять чек-листы как со стационарного ПК так и с мобильного телефона, у вас есть 7 типов вопросов с атрибутами ожидаемых ответов, обязательных и необязательных. Администратор создает вопрос, пользователи заполняют. ")]),i("v-btn",{staticClass:"ma-6",attrs:{rounded:"",outlined:"",color:"blue"},on:{click:function(e){return t.$vuetify.goTo("#contatos")}}},[t._v("Связаться с нами")])],1)],1)],1)},K=[],Q={name:"Sobre"},U=Q,tt=(a("3661"),Object(c["a"])(U,Z,K,!1,null,"4c9963e3",null)),et=tt.exports;h()(tt,{VBtn:d["a"],VCol:z["a"],VContainer:D["a"],VImg:N["a"],VRow:W["a"]});var at=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mb-12",attrs:{fluid:"",id:"sobre"}},[i("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"},attrs:{justify:"center",align:"center","no-gutters":""}},[i("v-col",{staticClass:"text-center",attrs:{lg:"12",sm:"10",md:"8"}},[i("h1",{staticClass:"display-2 font-weight-light my-12"},[t._v("Система отчетов на основе")]),i("p",{staticClass:"body-1 text-justify mx-auto",staticStyle:{"max-width":"600px"}},[t._v(" 1. Ожидаемых ответов за период (например в качестве отчета по инцедентам) ")]),i("p",{staticClass:"body-1 text-justify mx-auto",staticStyle:{"max-width":"600px"}},[t._v(" 2. Выгрузка в Excel ответов за период ")])]),i("v-col",{staticClass:"justify-center mt-6",attrs:{lg:"12"}},[i("v-card",[i("v-img",{attrs:{src:a("b350"),"max-width":"1200px"}})],1)],1)],1)],1)},it=[],st={name:"Sobre"},rt=st,nt=(a("55e3"),Object(c["a"])(rt,at,it,!1,null,"7351bb2b",null)),ot=nt.exports;h()(nt,{VCard:$,VCol:z["a"],VContainer:D["a"],VImg:N["a"],VRow:W["a"]});var lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mb-12",attrs:{fluid:""}},[i("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"},attrs:{justify:"center",align:"center","no-gutters":""}},[i("v-col",{staticClass:"justify-center",attrs:{cols:"12",sm:"2",md:"4"}},[i("v-card",[i("v-img",{attrs:{src:a("6324"),"max-width":"400px"}})],1)],1),i("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"10",md:"8"}},[i("h1",{staticClass:"display-2 font-weight-light my-12"},[t._v("Дополнительные инструменты контроля")]),i("p",{staticClass:"body-1 text-justify mx-auto",staticStyle:{"max-width":"600px"}},[t._v(" 1. Отправка на email отчетов по заданным параметрам в режиме онлайн ")]),i("p",{staticClass:"body-1 text-justify mx-auto",staticStyle:{"max-width":"600px"}},[t._v(" 2. Отображение на карте в качестве дополнительного контроля ")])])],1)],1)},ct=[],ut={name:"Sobre"},ht=ut,dt=(a("4eaf"),Object(c["a"])(ht,lt,ct,!1,null,"fff66faa",null)),ft=dt.exports;h()(dt,{VCard:$,VCol:z["a"],VContainer:D["a"],VImg:N["a"],VRow:W["a"]});var mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mb-12 pb-12",attrs:{fluid:"",id:"contatos"}},[i("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"},attrs:{justify:"center",align:"center","no-gutters":""}},[i("v-col",{staticClass:"d-none d-md-flex justify-center",attrs:{cols:"12",md:"4"}},[i("v-img",{attrs:{src:a("118f"),"max-width":"400px"}})],1),i("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"10",md:"8"}},[i("v-card",{attrs:{flat:""}},[i("v-card-title",[i("h1",{staticClass:"display-2 font-weight-light my-12 mx-auto"},[t._v("Воспользоваться")])])],1),i("v-card-text",{staticClass:"pa-0 ma-0"},[i("v-list",{staticClass:"mx-auto",attrs:{rounded:"","max-width":"600px"}},[i("v-list-item-group",{staticClass:"text-start",attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.items,(function(e,a){return i("v-list-item",{key:a},[i("v-list-item-content",[e.email?i("v-list-item-title",[t._v(" "+t._s(e.text)+" "),i("a",{attrs:{href:"mailto:glushkov_gv@landfinance.ru"}},[t._v("glushkov_gv@landfinance.ru")])]):i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1)],1)],1)},pt=[],gt={name:"Sobre",data:function(){return{item:0,items:[{text:"1. Свяжитесь с нами по email - ",icon:"mdi-clock",email:!0},{text:"2. Мы обговорим задачу и создадим чек-лист",icon:"mdi-account",email:!1},{text:"3. Заведем ваших пользователей для работы в системе",icon:"mdi-flag",email:!1},{text:"4. Совместно запустим и проконтролируем первые этапы работы",icon:"mdi-flag",email:!1}]}}},vt=gt,bt=(a("8eab"),a("8860")),yt=a("da13"),xt=a("5d23"),_t=a("1baa"),Ct=Object(c["a"])(vt,mt,pt,!1,null,"245f4a32",null),wt=Ct.exports;h()(Ct,{VCard:$,VCardText:L,VCardTitle:E,VCol:z["a"],VContainer:D["a"],VImg:N["a"],VList:bt["a"],VListItem:yt["a"],VListItemContent:xt["a"],VListItemGroup:_t["a"],VListItemTitle:xt["c"],VRow:W["a"]});var Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 my-12",attrs:{fluid:"",id:"servicos"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("div",{staticClass:"text-center"},[a("h1",{staticClass:"display-2 font-weight-light my-12"},[t._v("Типы вопросов")])])]),a("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"1200px"},attrs:{justify:"center",align:"center"}},t._l(t.servicos,(function(e,i){var s=e[0],r=e[1];return a("v-col",{key:i,staticClass:"text-center",attrs:{cols:"",md:"",sm:"12"}},[a("v-card",{attrs:{color:"transparent",flat:""}},[a("v-icon",{staticClass:"ma-6",attrs:{size:"50",color:"black"}},[t._v(t._s(s))]),a("v-card-text",[a("h1",{staticClass:"font-weight-light"},[t._v(t._s(r))])])],1)],1)})),1)],1)},St=[],jt={name:"Sobre",data:function(){return{servicos:[["fa-dot-circle-o","Да/Нет"],["fa-check-square","Один из многих"],["fa-font","Текст"],["fa-sort-numeric-asc","Цифра"],["fa-picture-o","Фотография"],["fa-address-card-o","Адрес"],["fa-phone-square","Номер телефона"]]}}},kt=jt,Bt=a("132d"),$t=Object(c["a"])(kt,Vt,St,!1,null,null,null),Ot=$t.exports;h()($t,{VCard:$,VCardText:L,VCol:z["a"],VContainer:D["a"],VIcon:Bt["a"],VRow:W["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:"",dark:"",color:"white",app:"",inset:"",absolute:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"py-1 white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v('ООО "УК "ЛЭНД ФИНАНС"')])])],1)],1)],1)],1)},Et=[],zt={},Dt=zt,Nt=(a("b5b6"),a("8dd9")),Wt=a("3a66"),It=a("d10f"),Mt=Object(w["a"])(Nt["a"],Object(Wt["a"])("footer",["height","inset"]),It["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(f["a"])(Object(f["a"])({},Nt["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(f["a"])(Object(f["a"])({},Nt["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(C["f"])(t),left:Object(C["f"])(this.computedLeft),right:Object(C["f"])(this.computedRight),bottom:Object(C["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),Pt=Object(c["a"])(Dt,Lt,Et,!1,null,null,null),Tt=Pt.exports;h()(Pt,{VCard:$,VCardText:L,VCol:z["a"],VFooter:Mt,VRow:W["a"]});var Rt={name:"Home",components:{Intro:J,Sobre:et,Sobre1:ot,Sobre2:ft,Sobre3:wt,Services:Ot,Footer:Tt}},Ht=Rt,Yt=Object(c["a"])(Ht,i,s,!1,null,null,null);e["default"]=Yt.exports;h()(Yt,{VContainer:D["a"]})},c1a1:function(t,e,a){},d1f6:function(t,e,a){},ed88:function(t,e,a){t.exports=a.p+"img/profile_analysis_.3b9d480a.svg"},f351:function(t,e,a){t.exports=a.p+"img/mockupe2r.3e0b64e1.png"},f5c8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-f568456e.3c80ca19.js.map