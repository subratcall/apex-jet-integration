/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","promise","ojs/ojcomponentcore","ojs/ojpopupcore","ojs/ojanimation","ojs/ojbutton","jqueryui-amd/widgets/draggable","jqueryui-amd/widgets/mouse"],function(a,g){(function(){g.widget("oj.ojResizable",{version:"1.0.0",widgetEventPrefix:"oj",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",containment:!1,ghost:!1,grid:!1,handles:"e,s,se",
helper:!1,resize:null,start:null,stop:null},y6:function(a){return parseInt(a,10)||0},yi:function(a){return!isNaN(parseInt(a,10))},loa:function(a,b){if("hidden"===g(a).css("overflow"))return!1;var d=b&&"left"===b?"scrollLeft":"scrollTop",e=!1;if(0<a[d])return!0;a[d]=1;e=0<a[d];a[d]=0;return e},_create:function(){this._super();var a,b,d,e,f,h=this;a=this.options;b=this.element.mouse.bind(this.element);b();this.yv=b("instance");this.yv._mouseCapture=function(a){return h.PUa(a)};this.yv._mouseStart=function(a){return h.SUa(a)};
this.yv._mouseDrag=function(a){return h.QUa(a)};this.yv._mouseStop=function(a){this.element&&this.element.focus();return h.dL(a)};this.element.addClass("oj-resizable");g.extend(this,{NX:this.element,eU:[],Pr:null});this.handles=a.handles||(g(".oj-resizable-handle",this.element).length?{n$a:".oj-resizable-n",Q9a:".oj-resizable-e",aY:".oj-resizable-s",Fk:".oj-resizable-w",t$a:".oj-resizable-se",x$a:".oj-resizable-sw",o$a:".oj-resizable-ne",q$a:".oj-resizable-nw"}:"e,s,se");if(this.handles.constructor===
String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),a=this.handles.split(","),this.handles={},b=0;b<a.length;b++)d=g.trim(a[b]),f="oj-resizable-"+d,e=g("\x3cdiv class\x3d'oj-resizable-handle "+f+"'\x3e\x3c/div\x3e"),this.handles[d]=".oj-resizable-"+d,this.element.append(e);this.zXa=function(){for(var a in this.handles)this.handles[a].constructor===String&&(this.handles[a]=this.element.children(this.handles[a]).first().show())};this.zXa();this.gSa=g(".oj-resizable-handle",this.element);
this.gSa.mouseover(function(){h.FAa||(this.className&&(e=this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=e&&e[1]?e[1]:"se")});this.yv._mouseInit()},_destroy:function(){this.yv&&this.yv._mouseDestroy();try{this.yv.destroy(),this.yv=null}catch(a){}g(this.NX).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();return this},PUa:function(a){var b,d,e=!1;
for(b in this.handles)if(d=g(this.handles[b])[0],d===a.target||g.contains(d,a.target))e=!0;return!this.options.disabled&&e},SUa:function(a){var b,d,e;e=this.options;b=this.element.position();var f=this.element;this.FAa=!0;/absolute/.test(f.css("position"))?f.css({position:"absolute",top:f.css("top"),left:f.css("left")}):f.is(".oj-draggable")&&f.css({position:"absolute",top:b.top,left:b.left});this.CXa();b=this.y6(this.helper.css("left"));d=this.y6(this.helper.css("top"));e.containment&&(b+=g(e.containment).scrollLeft()||
0,d+=g(e.containment).scrollTop()||0);this.offset=this.helper.offset();this.position={left:b,top:d};this.size={width:f.width(),height:f.height()};this.Gq={width:f.width(),height:f.height()};this.My={left:b,top:d};this.jY={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()};this.E5a={left:a.pageX,top:a.pageY};this.us=this.Gq.width/this.Gq.height||1;e=g(".oj-resizable-"+this.axis).css("cursor");g("body").css("cursor","auto"===e?this.axis+"-resize":e);f.addClass("oj-resizable-resizing");
this.W6("start",a);this.wIa(a);this.zKa(a);return!0},QUa:function(a){var b,d=this.helper,e={},f=this.E5a;b=a.pageX-f.left||0;var f=a.pageY-f.top||0,h=this.nn[this.axis];this.XG={top:this.position.top,left:this.position.left};this.YG={width:this.size.width,height:this.size.height};if(!h)return!1;b=h.apply(this,[a,b,f]);this.b0a(a.shiftKey);a.shiftKey&&(b=this.Z_a(b,a));b=this.VXa(b,a);this.N_a(b);this.W6("resize",a);this.vIa(a,this.ui());this.yKa(a,this.ui());this.position.top!==this.XG.top&&(e.top=
this.position.top+"px");this.position.left!==this.XG.left&&(e.left=this.position.left+"px");this.size.width!==this.YG.width&&(e.width=this.size.width+"px");this.size.height!==this.YG.height&&(e.height=this.size.height+"px");d.css(e);!this.Pr&&this.eU.length&&this.gWa();g.isEmptyObject(e)||this._trigger("resize",a,this.ui());return!1},dL:function(a){this.FAa=!1;g("body").css("cursor","auto");this.element.removeClass("oj-resizable-resizing");this.W6("stop",a);this.xIa(a);this.AKa(a);return!1},b0a:function(a){var b,
d,e,f;f=this.options;f={minWidth:this.yi(f.minWidth)?f.minWidth:0,maxWidth:this.yi(f.maxWidth)?f.maxWidth:Infinity,minHeight:this.yi(f.minHeight)?f.minHeight:0,maxHeight:this.yi(f.maxHeight)?f.maxHeight:Infinity};a&&(a=f.minHeight*this.us,d=f.minWidth/this.us,b=f.maxHeight*this.us,e=f.maxWidth/this.us,a>f.minWidth&&(f.minWidth=a),d>f.minHeight&&(f.minHeight=d),b<f.maxWidth&&(f.maxWidth=b),e<f.maxHeight&&(f.maxHeight=e));this.d0a=f},N_a:function(a){this.offset=this.helper.offset();this.yi(a.left)&&
(this.position.left=a.left);this.yi(a.top)&&(this.position.top=a.top);this.yi(a.height)&&(this.size.height=a.height);this.yi(a.width)&&(this.size.width=a.width)},Z_a:function(a){var b=this.position,d=this.size,e=this.axis;this.yi(a.height)?a.width=a.height*this.us:this.yi(a.width)&&(a.height=a.width/this.us);"sw"===e&&(a.left=b.left+(d.width-a.width),a.top=null);"nw"===e&&(a.top=b.top+(d.height-a.height),a.left=b.left+(d.width-a.width));return a},VXa:function(a){var b=this.d0a,d=this.axis,e=this.yi(a.width)&&
b.maxWidth&&b.maxWidth<a.width,f=this.yi(a.height)&&b.maxHeight&&b.maxHeight<a.height,g=this.yi(a.width)&&b.minWidth&&b.minWidth>a.width,k=this.yi(a.height)&&b.minHeight&&b.minHeight>a.height,l=this.My.left+this.Gq.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(d),d=/nw|ne|n/.test(d);g&&(a.width=b.minWidth);k&&(a.height=b.minHeight);e&&(a.width=b.maxWidth);f&&(a.height=b.maxHeight);g&&n&&(a.left=l-b.minWidth);e&&n&&(a.left=l-b.maxWidth);k&&d&&(a.top=m-b.minHeight);f&&d&&(a.top=m-b.maxHeight);
a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null;return a},gWa:function(){if(this.eU.length){var a,b,d,e,f,g=this.helper||this.element;for(a=0;a<this.eU.length;a++){f=this.eU[a];if(!this.RF)for(this.RF=[],d=[f.css("borderTopWidth"),f.css("borderRightWidth"),f.css("borderBottomWidth"),f.css("borderLeftWidth")],e=[f.css("paddingTop"),f.css("paddingRight"),f.css("paddingBottom"),f.css("paddingLeft")],b=0;b<d.length;b++)this.RF[b]=(parseInt(d[b],10)||0)+(parseInt(e[b],
10)||0);f.css({height:g.height()-this.RF[0]-this.RF[2]||0,width:g.width()-this.RF[1]-this.RF[3]||0})}}},CXa:function(){this.element.offset();this.helper=this.element},nn:{e:function(a,b){return{width:this.Gq.width+b}},w:function(a,b){return{left:this.My.left+b,width:this.Gq.width-b}},n:function(a,b,d){return{top:this.My.top+d,height:this.Gq.height-d}},s:function(a,b,d){return{height:this.Gq.height+d}},se:function(a,b,d){return g.extend(this.nn.s.apply(this,arguments),this.nn.e.apply(this,[a,b,d]))},
sw:function(a,b,d){return g.extend(this.nn.s.apply(this,arguments),this.nn.w.apply(this,[a,b,d]))},ne:function(a,b,d){return g.extend(this.nn.n.apply(this,arguments),this.nn.e.apply(this,[a,b,d]))},nw:function(a,b,d){return g.extend(this.nn.n.apply(this,arguments),this.nn.w.apply(this,[a,b,d]))}},W6:function(a,b){"resize"!==a&&this._trigger(a,b,this.ui())},wIa:function(){function a(b){g(b).each(function(){var a=g(this);a.data("oj-resizable-alsoresize",{width:parseInt(a.width(),10),height:parseInt(a.height(),
10),left:parseInt(a.css("left"),10),top:parseInt(a.css("top"),10)})})}var b=this.options;"object"!==typeof b.alsoResize||b.alsoResize.parentNode?a(b.alsoResize):b.alsoResize.length?(b.alsoResize=b.alsoResize[0],a(b.alsoResize)):g.each(b.alsoResize,function(b){a(b)})},vIa:function(a,b){function d(a,c){g(a).each(function(){var a=g(this),d=g(this).data("oj-resizable-alsoresize"),e={};g.each(c&&c.length?c:a.parents(b.NX[0]).length?["width","height"]:["width","height","top","left"],function(a,b){var c=
(d[b]||0)+(k[b]||0);c&&0<=c&&(e[b]=c||null)});a.css(e)})}var e=this.options,f=this.Gq,h=this.My,k={height:this.size.height-f.height||0,width:this.size.width-f.width||0,top:this.position.top-h.top||0,left:this.position.left-h.left||0};"object"!==typeof e.alsoResize||e.alsoResize.nodeType?d(e.alsoResize,null):g.each(e.alsoResize,function(a,b){d(a,b)})},xIa:function(){g(this).removeData("oj-resizable-alsoresize")},zKa:function(){var a,b,d,e,f,h=this,k=h.element;d=h.options.containment;if(k=d instanceof
g?d.get(0):/parent/.test(d)?k.parent().get(0):d)h.PV=g(k),/document/.test(d)||d===document?(h.QV={left:0,top:0},h.Lva={left:0,top:0},h.Oy={element:g(document),left:0,top:0,width:g(document).width(),height:g(document).height()||document.body.parentNode.scrollHeight}):(a=g(k),b=[],g(["Top","Right","Left","Bottom"]).each(function(d,e){b[d]=h.y6(a.css("padding"+e))}),h.QV=a.offset(),h.Lva=a.position(),h.Mva={height:a.innerHeight()-b[3],width:a.innerWidth()-b[1]},d=h.QV,e=h.Mva.height,f=h.Mva.width,f=
h.loa(k,"left")?k.scrollWidth:f,e=h.loa(k)?k.scrollHeight:e,h.Oy={element:k,left:d.left,top:d.top,width:f,height:e})},yKa:function(a,b){var d,e,f,g;d=this.options;e=this.QV;g=this.position;var k=a.shiftKey;f={top:0,left:0};var l=this.PV,m=!0;l[0]!==document&&/static/.test(l.css("position"))&&(f=e);g.left<(this.Pr?e.left:0)&&(this.size.width+=this.Pr?this.position.left-e.left:this.position.left-f.left,k&&(this.size.height=this.size.width/this.us,m=!1),this.position.left=d.helper?e.left:0);g.top<(this.Pr?
e.top:0)&&(this.size.height+=this.Pr?this.position.top-e.top:this.position.top,k&&(this.size.width=this.size.height*this.us,m=!1),this.position.top=this.Pr?e.top:0);this.offset.left=this.Oy.left+this.position.left;this.offset.top=this.Oy.top+this.position.top;d=Math.abs((this.Pr?this.offset.left-f.left:this.offset.left-e.left)+this.jY.width);e=Math.abs((this.Pr?this.offset.top-f.top:this.offset.top-e.top)+this.jY.height);f=this.PV.get(0)===this.element.parent().get(0);g=/relative|absolute/.test(this.PV.css("position"));
f&&g&&(d-=Math.abs(this.Oy.left));d+this.size.width>=this.Oy.width&&(this.size.width=this.Oy.width-d,k&&(this.size.height=this.size.width/this.us,m=!1));e+this.size.height>=this.Oy.height&&(this.size.height=this.Oy.height-e,k&&(this.size.width=this.size.height*this.us,m=!1));m||(this.position.left=b.XG.left,this.position.top=b.XG.top,this.size.width=b.YG.width,this.size.height=b.YG.height)},AKa:function(){var a=this.options,b=this.QV,d=this.Lva,e=this.PV,f=g(this.helper),h=f.offset(),k=f.outerWidth()-
this.jY.width,f=f.outerHeight()-this.jY.height;this.Pr&&!a.animate&&/relative/.test(e.css("position"))&&g(this).css({left:h.left-d.left-b.left,width:k,height:f});this.Pr&&!a.animate&&/static/.test(e.css("position"))&&g(this).css({left:h.left-d.left-b.left,width:k,height:f})},ui:function(){return{NX:this.NX,element:this.element,helper:this.helper,position:this.position,size:this.size,Gq:this.Gq,My:this.My,YG:this.YG,XG:this.XG}}})})();(function(){a.ib("oj.ojDialog",g.oj.baseComponent,{version:"1.0.0",
widgetEventPrefix:"oj",options:{cancelBehavior:"icon",dragAffordance:"title-bar",initialVisibility:"hide",modality:"modal",position:{my:{horizontal:"center",vertical:"center"},offset:{x:0,y:0},at:{horizontal:"center",vertical:"center"},of:"window",collision:"fit",B$a:function(a){var b=g(this).css(a).offset().top;0>b&&g(this).css("top",a.top-b)}},resizeBehavior:"resizable",role:"dialog",title:null,beforeClose:null,beforeOpen:null,close:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null,
animateStart:null,animateEnd:null},rc:function(){this._super();this.D5a={display:this.element[0].style.display,width:this.element[0].style.width,height:this.element[0].style.height};this.My={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.fba=this.element.attr("title");this.options.title=this.options.title||this.fba;this.element.removeAttr("title");this.element.hide();this.element.uniqueId();this.element.addClass("oj-dialog oj-component");this.element.attr({tabIndex:-1});
this.$()&&this.element[0].hasAttribute.role||this.element.attr("role",this.options.role);this._on(this.element,{keydown:this.dUa.bind(this)});this.jH=!1;if(!this.$())for(var c=this.element.children(),b=0;b<c.length;b++){var d=g(c[b]);d.is(".oj-dialog-header")?(this.jH=!0,this.g9=d,this.wB=c[b]):d.is(".oj-dialog-body")?(this.X1(),this.Ex=g(this.Sj),this.element[0].insertBefore(this.Sj,c[b]),a.Components.nd(this.Sj),this.Sj.appendChild(c[b]),a.Components.nd(c[b]),this.tM=d,this.Hua=c[b]):d.is(".oj-dialog-footer")&&
(this.IF=d,this.Q8=c[b])}this.$()&&this.T6();this.jH?(this.Su=this.wB.querySelector(".oj-dialog-title"),this.wV=g(this.Su),"icon"===this.options.cancelBehavior&&(this.iR(this.wB),null!=this.Su&&(this.vh.parentElement.appendChild(this.Su),a.Components.nd(this.vh))),null!=this.Su&&(this.wV.uniqueId(),this.element.attr({"aria-labelledby":this.wV.attr("id")}))):this.yLa();"title-bar"===this.options.dragAffordance&&g.fn.draggable&&this.NA();this.Ex||(this.X1(),this.Ex=g(this.Sj),g(this.Sj),this.g9?this.element[0].insertBefore(this.Sj,
this.wB):this.uM?this.element[0].insertBefore(this.Sj,this.cq):this.IF?this.element[0].insertBefore(this.Q8,this.Sj):this.element[0].appendChild(this.Sj),a.Components.nd(this.Sj));this.f8(this.element);c=this.options;c.position=a.Na.OV(c.position)},WKa:function(){this.g9||(this.Yw=document.createElement("div"),this.Yw.classList.add("oj-dialog-header"),this.element[0].appendChild(this.Yw),a.Components.nd(this.Yw),this.jH=!0,this.wB=this.Yw,this.g9=g(this.Yw))},SKa:function(){this.IF||(this.Iw=document.createElement("div"),
this.element[0].appendChild(this.Iw),a.Components.nd(this.Iw),this.Q8=this.Iw,this.IF=g(this.Iw))},X1:function(){this.Sj=document.createElement("div");this.Sj.classList.add("oj-dialog-content","oj-dialog-default-content")},KKa:function(){this.tM||(this.X1(),this.element[0].appendChild(this.Sj),a.Components.nd(this.Sj),this.xw=document.createElement("div"),this.Sj.appendChild(this.xw),this.Ex=g(this.Sj),this.Hua=this.xw,this.tM=g(this.xw))},T6:function(){null!=this.Iw&&this.element[0].removeChild(this.Iw);
null!=this.Yw&&this.element[0].removeChild(this.Yw);null!=this.xw&&this.element[0].removeChild(this.xw);var c=a.J.sl(this.element[0]),b;for(b in c)c.hasOwnProperty(b)&&"header"!=b&&"footer"!=b&&"body"!=b&&""!=b&&c[b].parentNode.removeChild(c[b]);c.hasOwnProperty("header")&&this.WKa();(c.hasOwnProperty("body")||c.hasOwnProperty(""))&&this.KKa();c.hasOwnProperty("footer")&&this.SKa();var d=this.xw;for(b in c)if(c.hasOwnProperty(b)){switch(b){case "header":d=this.Yw;break;case "footer":d=this.Iw;break;
case "body":case "":d=this.xw}var e=c[b];if(null!=e)for(var f=0;f<e.length;f++)switch(d.appendChild(e[f]),b){case "footer":d=this.Iw;c[b][f].classList.add("oj-dialog-footer");c[b][f].classList.add("oj-helper-clearfix");break;case "body":case "":d=this.xw,c[b][f].classList.add("oj-dialog-body")}}},lea:function(){"show"===this.options.initialVisibility&&this.open()},_destroy:function(){this._off(this.element,"keydown");a.U.ug(this.element)===a.U.Kd.OPEN&&this.sr();this.Ko("none");this.Iu&&(this.Iu("instance")&&
this.Iu("destroy"),this.Iu=null);this.tR();this.jH&&this.wV.removeUniqueId();this.vBa&&(this.vBa.remove(),this.vBa=null);this.Ex&&(this.tM&&this.tM.insertAfter(this.Ex),this.Ex.remove(),this.tM=this.Ex=null);this.element.removeUniqueId().removeClass("oj-dialog oj-component").css(this.D5a);this.element.stop(!0,!0);this.fba&&this.element.attr("title",this.fba);this.uM&&(this.uM.remove(),this.uM=null);delete this.Xp;this._super()},disable:g.noop,enable:g.noop,close:function(c){if(!this.gx("close",[c])&&
a.U.ug(this.element)===a.U.Kd.OPEN&&(!1!==this._trigger("beforeClose",c)||this.DA)){this.Ko("close");this.vNa=null;this.opener.filter(":focusable").focus().length||g(this.document[0].activeElement).blur();if("modal"===this.options.modality){var b=Array.prototype.forEach;b.call(this.element[0].getElementsByClassName("oj-helper-element-in-dialog-with-accesskey"),function(a){a.classList.remove("oj-helper-element-in-dialog-with-accesskey")});b.call(document.getElementsByClassName("oj-helper-element-with-accesskey"),
function(a){a.setAttribute("accesskey",a.getAttribute("data-ojAccessKey"));a.removeAttribute("data-ojAccessKey");a.classList.remove("oj-helper-element-with-accesskey")})}b={};b[a.fa.Ha.We]=this.element;b[a.fa.Ha.Pv]={closeEvent:c};a.fa.Xa().close(b)}},ZI:function(c){var b=c[a.fa.Ha.We];c=(a.ic.ad("oj-dialog-option-defaults")||{}).animation;if(!this.DA&&c&&c.close){var d=b.attr("style");return a.ca.Li(b[0],"close",c.close,this).then(function(){b.attr("style",d);b.hide()})}b.hide()},Ot:function(c){c=
c[a.fa.Ha.Pv];var b;c&&(b=c.closeEvent);this._trigger("close",b)},isOpen:function(){var c=a.U.ug(this.element);return c===a.U.Kd.xZ||c===a.U.Kd.OPEN||c===a.U.Kd.KY},open:function(c){if(!this.gx("open",[c])&&!1!==this._trigger("beforeOpen",c))if(a.U.ug(this.element)===a.U.Kd.OPEN)this.e3();else{this.Ko("open");this.opener=g(this.document[0].activeElement);"resizable"===this.options.resizeBehavior&&this.$pa();var b="rtl"===this.Wc();c=a.Na.I9(this.options.position);c=a.Na.Eq(c,b);if("modal"===this.options.modality){var b=
Array.prototype.forEach,d=this.element[0].querySelectorAll("[accesskey]");b.call(d,function(a){a.classList.add("oj-helper-element-in-dialog-with-accesskey")});d=document.querySelectorAll("[accesskey]");b.call(d,function(a){a.classList.contains("oj-helper-element-in-dialog-with-accesskey")||(a.classList.add("oj-helper-element-with-accesskey"),a.setAttribute("data-ojAccessKey",a.getAttribute("accesskey")),a.removeAttribute("accesskey"))})}b={};b[a.fa.Ha.We]=this.element;b[a.fa.Ha.PC]=this.opener;b[a.fa.Ha.rt]=
c;b[a.fa.Ha.Pm]=this.options.modality;b[a.fa.Ha.jt]=this.tE();b[a.fa.Ha.Xv]="oj-dialog-layer";b[a.fa.Ha.Wv]=a.fa.Wv.MZ;b[a.fa.Ha.pH]=this.$();a.fa.Xa().open(b)}},$I:function(c){var b=c[a.fa.Ha.We];c=c[a.fa.Ha.rt];b.show();b.position(c);b.parent().addClass("oj-animate-open");if((c=(a.ic.ad("oj-dialog-option-defaults")||{}).animation)&&c.open)return a.ca.Li(b[0],"open",c.open,this)},QI:function(c){c[a.fa.Ha.We].parent().removeClass("oj-animate-open");this._trigger("open");this.e3()},refresh:function(){this._super()},
e3:function(){var c=this.vNa;c&&0<c.length&&a.Q.gy(this.element[0],c[0])||(c||(c=this.element.find("[autofocus]")),c.length||(c=this.Ex.find(":tabbable")),c.length||this.IF&&this.IF.length&&(c=this.IF.find(":tabbable")),c.length||this.CB&&(c=this.CB.filter(":focusable")),c.length||(c=this.element),0<c.length&&(c.eq(0).focus(),this._trigger("focus")))},_keepFocus:function(a){a.preventDefault();a=this.document[0].activeElement;this.element===a||g.contains(this.element,a)||this.e3()},yi:function(a){return!isNaN(parseInt(a,
10))},dUa:function(a){if("none"!==this.options.cancelBehavior&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===g.ui.keyCode.ESCAPE)a.preventDefault(),a.stopImmediatePropagation(),this.close(a);else if(a.keyCode===g.ui.keyCode.TAB){var b=this.element.find(":tabbable"),d=b.filter(":first"),e=b.filter(":last");a.shiftKey?a.shiftKey&&(document.activeElement===d[0]||document.activeElement===this.element[0]?(e.focus(),a.preventDefault()):(d=b.index(document.activeElement),1===d&&b[0]&&(b[0].focus(),a.preventDefault()))):
document.activeElement===e[0]||document.activeElement===this.element[0]?(d.focus(),a.preventDefault()):(d=b.index(document.activeElement),0===d&&b[1]&&(b[1].focus(),a.preventDefault()))}},f8:function(a){var b=this;this._focusable({applyHighlight:!0,setupHandlers:function(d,e){b._on(a,{focus:function(a){d(g(a.currentTarget))},blur:function(a){e(g(a.currentTarget))}})}})},tR:function(){null!=this.vh&&(this.vh.parentElement&&(a.Components.$g(this.vh),this.vh.parentElement.removeChild(this.vh)),this.CB=
null)},iR:function(c){if(this.$()){this.vh=document.createElement("oj-button");this.vh.classList.add("oj-dialog-header-close-wrapper");this.vh.setAttribute("data-oj-binding-provider","none");this.vh.setAttribute("display","icons");this.vh.setAttribute("chroming","half");var b=document.createElement("span");b.textContent=this.T("labelCloseIcon");var d=document.createElement("span");d.className="oj-fwk-icon oj-fwk-icon-cross";d.setAttribute("slot","startIcon");this.vh.appendChild(d);this.vh.appendChild(b);
c.appendChild(this.vh);a.Components.nd(this.vh);this.CB=g(this.vh)}this.$()||(this.CB=g("\x3cbutton\x3e\x3c\button\x3e").addClass("oj-dialog-header-close-wrapper"),this.CB.ojButton({display:"icons",chroming:"half",label:this.T("labelCloseIcon"),icons:{start:"oj-component-icon oj-fwk-icon-cross"}}).attr("tabindex","1").appendTo(c),this.vh=this.CB[0]);this._on(this.CB,{click:function(a){a.preventDefault();a.stopImmediatePropagation();this.close(a)}})},yLa:function(){this.cq=document.createElement("div");
this.cq.classList.add("oj-dialog-header");this.cq.classList.add("oj-helper-clearfix");this.element[0].insertBefore(this.cq,this.element[0].firstChild);a.Components.nd(this.cq);this.uM=g(this.cq);this._on(this.uM,{mousedown:function(a){g(a.target).closest(".oj-dialog-header-close-wrapper");a=g(a.target).parent().parent();var c=!1;a&&(c=a.hasClass("oj-dialog-header-close-wrapper"));c||this.element.focus()}});"icon"===this.options.cancelBehavior&&this.iR(this.cq);var c=document.createElement("div");
c.classList.add("oj-dialog-title");g(c).uniqueId();this.cq.appendChild(c);a.Components.nd(c);this.qB(c);this.element.attr({"aria-labelledby":c.id})},qB:function(a){this.options.title||(a.innerHTML="\x26#160;");a.textContent=this.options.title},NA:function(){function a(b){return{position:b.position,offset:b.offset}}var b=this,d=this.options;this.element.draggable({G9a:!1,handle:".oj-dialog-header",containment:"document",start:function(d,f){g(this).addClass("oj-dialog-dragging");b.qL();b._trigger("dragStart",
d,a(f))},drag:function(d,f){b.qL();b._trigger("drag",d,a(f))},stop:function(e,f){var h=f.offset.left-b.document.scrollLeft(),k=f.offset.top-b.document.scrollTop();d.position={my:{horizontal:"left",vertical:"top"},at:{horizontal:"left",vertical:"top"},offset:{x:0<=h?h:0,y:0<=k?k:0},of:window};g(this).removeClass("oj-dialog-dragging");b.qL();b._trigger("dragStop",e,a(f))}});this.element.addClass("oj-draggable")},$pa:function(){function a(b){return{originalPosition:b.My,originalSize:b.Gq,position:b.position,
size:b.size}}var b=this;this.element.css("position");this.Iu=this.element.ojResizable.bind(this.element);this.Iu({cancel:".oj-dialog-content",containment:"document",handles:"n,e,s,w,se,sw,ne,nw",start:function(d,e){b.NTa=!0;g(this).addClass("oj-dialog-resizing");b._trigger("resizeStart",d,a(e))},resize:function(d,e){b._trigger("resize",d,a(e))},stop:function(d,e){b.NTa=!1;g(this).removeClass("oj-dialog-resizing");b._trigger("resizeStop",d,a(e))}})},N6:function(){var c="rtl"===this.Wc(),b=a.Na.I9(this.options.position),
b=a.Na.Eq(b,c);this.element.position(b);this.qL()},qL:function(){a.fa.Xa().sY(this.element,a.fa.uc.qt)},_setOption:function(c,b,d){if("disabled"!==c)switch(this._super(c,b,d),c){case "dragAffordance":(c=this.element.hasClass("oj-draggable"))&&"none"===b&&(this.element.draggable("destroy"),this.element.removeClass("oj-draggable"));c||"title-bar"!==b||this.NA();break;case "position":c=this.options;c.position=a.Na.OV(b,c.position);this.N6();break;case "resizeBehavior":c=!1;this.Iu&&(c=!0);c&&"resizable"!==
b&&(this.Iu("instance")&&this.Iu("destroy"),this.Iu=null);c||"resizable"!==b||this.$pa();break;case "title":this.jH?this.qB(this.wB.querySelector(".oj-dialog-title")):this.qB(this.cq.querySelector(".oj-dialog-title"));break;case "role":this.element.attr("role",b);break;case "modality":a.U.ug(this.element)===a.U.Kd.OPEN&&(c={},c[a.fa.Ha.We]=this.element,c[a.fa.Ha.Pm]=b,a.fa.Xa().SF(c));break;case "cancelBehavior":"none"===b||"escape"===b?this.tR():"icon"===b&&(this.jH?(this.tR(),this.iR(this.wB),this.Su=
this.wB.querySelector(".oj-dialog-title"),this.wV=g(this.Su),null!=this.Su&&(this.vh.parentElement.appendChild(this.Su),a.Components.nd(this.Su))):(this.tR(),this.iR(this.cq),this.lY=this.cq.querySelector(".oj-dialog-title"),g(this.lY),null!=this.lY&&(this.vh.parentElement.insertBefore(this.vh,this.lY),a.Components.nd(this.lY))))}},getNodeBySubId:function(a){function b(a){for(var b=[],c=/\w|_|-/,d=0;d<a.length;d++){var g=a.substring(d,d+1);c.test(g)?b.push(g):b.push("\\"+g)}return b.join("")}if(null===
a)return this.element?this.element[0]:null;a=a.subId;if(!this.$()||"oj-dialog-footer"!==a&&"oj-dialog-body"!==a)switch(a){case "oj-dialog-header":case "oj-dialog-footer":case "oj-dialog-content":case "oj-resizable-n":case "oj-resizable-e":case "oj-resizable-s":case "oj-resizable-w":case "oj-resizable-se":case "oj-resizable-sw":case "oj-resizable-ne":case "oj-resizable-nw":var d=this.element[0].nodeName+'[id\x3d"'+b(this.element.attr("id"))+'"] \x3e ',d=d+("."+a);a=this.element.parent().find(d);if(!a||
0===a.length)break;return a[0];case "oj-dialog-body":d=this.element[0].nodeName+'[id\x3d"'+b(this.element.attr("id"))+'"] \x3e ';d=d+".oj-dialog-content \x3e "+("."+a);a=this.element.parent().find(d);if(!a||0===a.length)break;return a[0];case "oj-dialog-header-close-wrapper":d=this.element[0].nodeName+'[id\x3d"'+b(this.element.attr("id"))+'"] \x3e ';d+=".oj-dialog-header \x3e ";d+="."+a;a=this.element.parent().find(d);if(!a||0===a.length)break;return a[0]}else{if("oj-dialog-body"===a)return this.Hua.querySelector(".oj-dialog-body");
if("oj-dialog-footer"===a)return this.Q8.querySelector(".oj-dialog-footer")}return null},getSubIdByNode:function(a){if(null!=a){a=g(a);if(a.hasClass("oj-dialog-header"))return{subId:"oj-dialog-header"};if(a.hasClass("oj-dialog-footer"))return{subId:"oj-dialog-footer"};if(a.hasClass("oj-dialog-content"))return{subId:"oj-dialog-content"};if(a.hasClass("oj-dialog-header-close-wrapper"))return{subId:"oj-dialog-header-close-wrapper"};if(a.hasClass("oj-resizable-n"))return{subId:"oj-resizable-n"};if(a.hasClass("oj-resizable-e"))return{subId:"oj-resizable-e"};
if(a.hasClass("oj-resizable-s"))return{subId:"oj-resizable-s"};if(a.hasClass("oj-resizable-w"))return{subId:"oj-resizable-w"};if(a.hasClass("oj-resizable-se"))return{subId:"oj-resizable-se"};if(a.hasClass("oj-resizable-sw"))return{subId:"oj-resizable-sw"};if(a.hasClass("oj-resizable-ne"))return{subId:"oj-resizable-ne"};if(a.hasClass("oj-resizable-nw"))return{subId:"oj-resizable-nw"}}return null},nB:function(){this.element.remove()},tE:function(){if(!this.Xp){var c=this.Xp={};c[a.fa.uc.TC]=this.sr.bind(this);
c[a.fa.uc.UC]=this.nB.bind(this);c[a.fa.uc.qt]=this.qL.bind(this);c[a.fa.uc.hP]=this.$I.bind(this);c[a.fa.uc.fP]=this.QI.bind(this);c[a.fa.uc.gP]=this.ZI.bind(this);c[a.fa.uc.eP]=this.Ot.bind(this)}return this.Xp},sr:function(){this.DA=!0;this.close();delete this.DA},Ko:function(c){var b=this.fq;b&&(b.destroy(),delete this.fq);0>["open","close"].indexOf(c)||(this.fq=new a.Rm(this.element,c,"ojDialog",this.$()))},gx:function(a,b){var d=this.fq;return d?d.laa(this,a,a,b):!1},Ih:function(){a.U.ug(this.element)===
a.U.Kd.OPEN&&this.sr();this._super()}});a.Components.Kq({ojDialog:{resizeBehavior:a.Components.Ff(function(){return(a.ic.ad("oj-dialog-option-defaults")||{}).resizeBehavior}),cancelBehavior:a.Components.Ff(function(){return(a.ic.ad("oj-dialog-option-defaults")||{}).cancelBehavior}),dragAffordance:a.Components.Ff(function(){return(a.ic.ad("oj-dialog-option-defaults")||{}).dragAffordance})}})})();a.J.Ua("oj-dialog","baseComponent",{properties:{cancelBehavior:{type:"string",enumValues:["icon","escape",
"none"]},dragAffordance:{type:"string",enumValues:["title-bar","none"]},initialVisibility:{type:"string",enumValues:["hide","show"]},modality:{type:"string",enumValues:["modal","modeless"]},position:{type:"object",properties:{my:{type:"object|string",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",enumValues:["top","center","bottom"]}}},at:{type:"object|string",properties:{horizontal:{type:"string",enumValues:["start","end","left",
"center","right"]},vertical:{type:"string",enumValues:["top","center","bottom"]}}},offset:{type:"object",properties:{x:{type:"number"},y:{type:"number"}}},of:{type:"string|{x:number, y:number}"},collision:{type:"string",enumValues:["flip","fit","flipfit","none"]}}},resizeBehavior:{type:"string",enumValues:["resizable","none"]}},events:{animateEnd:{},animateStart:{},beforeClose:{},beforeOpen:{},close:{},open:{},focus:{},resize:{},resizeStart:{},resizeStop:{},drag:{},dragStart:{},dragStop:{}},methods:{close:{},
isOpen:{},open:{},refresh:{}},extension:{Ya:"ojDialog"}});a.J.register("oj-dialog",{metadata:a.J.getMetadata("oj-dialog")})});