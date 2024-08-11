/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 468:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 468;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 176:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 176;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 828:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var oA=Object.create;var Ti=Object.defineProperty,uA=Object.defineProperties,cA=Object.getOwnPropertyDescriptor,lA=Object.getOwnPropertyDescriptors,fA=Object.getOwnPropertyNames,Op=Object.getOwnPropertySymbols,pA=Object.getPrototypeOf,Rp=Object.prototype.hasOwnProperty,dA=Object.prototype.propertyIsEnumerable;var Pp=(e,t,r)=>t in e?Ti(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,St=(e,t)=>{for(var r in t||(t={}))Rp.call(t,r)&&Pp(e,r,t[r]);if(Op)for(var r of Op(t))dA.call(t,r)&&Pp(e,r,t[r]);return e},Np=(e,t)=>uA(e,lA(t));var l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),hA=(e,t)=>{for(var r in t)Ti(e,r,{get:t[r],enumerable:!0})},Dp=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of fA(t))!Rp.call(e,i)&&i!==r&&Ti(e,i,{get:()=>t[i],enumerable:!(n=cA(t,i))||n.enumerable});return e};var nn=(e,t,r)=>(r=e!=null?oA(pA(e)):{},Dp(t||!e||!e.__esModule?Ti(r,"default",{value:e,enumerable:!0}):r,e)),_A=e=>Dp(Ti({},"__esModule",{value:!0}),e);var _e=l((eM,xp)=>{"use strict";var gA=function(){function e(){}return e.info=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];e.enableDebug&&console.info(e.TAG+t,r)},e.warn=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];e.disableWarnings||console.warn(e.TAG+t,r)},e.enableDebug=!1,e.disableWarnings=!1,e.disableErrors=!1,e.TAG="ApplicationInsights:",e}();xp.exports=gA});var vu=l(Vt=>{"use strict";var an=Vt&&Vt.__assign||function(){return an=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},an.apply(this,arguments)};Object.defineProperty(Vt,"__esModule",{value:!0});Vt.AsyncScopeManager=Vt.OpenTelemetryScopeManagerWrapper=void 0;var gr=Er(),EA=__webpack_require__(467),Mp=function(){function e(){}return e.prototype.active=function(){var t=this,r=gr.CorrelationContextManager.getCurrentContext();return an(an({},r),{getValue:function(n){return t._activeSymbol?n===t._activeSymbol?r:!1:(t._activeSymbol=n,r)},setValue:function(){}})},e.prototype.with=function(t,r){var n=t.parentSpanId,i=t.name,a=e._spanToContext(t,n,i);return gr.CorrelationContextManager.runWithContext(a,r)()},e.prototype.bind=function(t){return typeof t=="function"?gr.CorrelationContextManager.wrapCallback(t):(t instanceof EA.EventEmitter&&gr.CorrelationContextManager.wrapEmitter(t),t)},e.prototype.enable=function(){return gr.CorrelationContextManager.enable(),this},e.prototype.disable=function(){return gr.CorrelationContextManager.disable(),this},e._spanToContext=function(t,r,n){var i=r?"|"+t.spanContext().traceId+"."+r+".":t.spanContext().traceId,a=an(an({},t.spanContext()),{traceFlags:t.spanContext().traceFlags}),s=gr.CorrelationContextManager.spanToContextObject(a,i,n);return s},e}();Vt.OpenTelemetryScopeManagerWrapper=Mp;Vt.AsyncScopeManager=new Mp});var Wp=l((I,Qp)=>{I=Qp.exports=N;var k;typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?k=function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:k=function(){};I.SEMVER_SPEC_VERSION="2.0.0";var Eu=256,Ma=Number.MAX_SAFE_INTEGER||9007199254740991,gu=16,B=I.re=[],_=I.src=[],O=0,sn=O++;_[sn]="0|[1-9]\\d*";var on=O++;_[on]="[0-9]+";var Au=O++;_[Au]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var qp=O++;_[qp]="("+_[sn]+")\\.("+_[sn]+")\\.("+_[sn]+")";var jp=O++;_[jp]="("+_[on]+")\\.("+_[on]+")\\.("+_[on]+")";var mu=O++;_[mu]="(?:"+_[sn]+"|"+_[Au]+")";var yu=O++;_[yu]="(?:"+_[on]+"|"+_[Au]+")";var Su=O++;_[Su]="(?:-("+_[mu]+"(?:\\."+_[mu]+")*))";var Iu=O++;_[Iu]="(?:-?("+_[yu]+"(?:\\."+_[yu]+")*))";var Tu=O++;_[Tu]="[0-9A-Za-z-]+";var Ii=O++;_[Ii]="(?:\\+("+_[Tu]+"(?:\\."+_[Tu]+")*))";var Cu=O++,kp="v?"+_[qp]+_[Su]+"?"+_[Ii]+"?";_[Cu]="^"+kp+"$";var bu="[v=\\s]*"+_[jp]+_[Iu]+"?"+_[Ii]+"?",Ou=O++;_[Ou]="^"+bu+"$";var ln=O++;_[ln]="((?:<|>)?=?)";var La=O++;_[La]=_[on]+"|x|X|\\*";var qa=O++;_[qa]=_[sn]+"|x|X|\\*";var mr=O++;_[mr]="[v=\\s]*("+_[qa]+")(?:\\.("+_[qa]+")(?:\\.("+_[qa]+")(?:"+_[Su]+")?"+_[Ii]+"?)?)?";var cn=O++;_[cn]="[v=\\s]*("+_[La]+")(?:\\.("+_[La]+")(?:\\.("+_[La]+")(?:"+_[Iu]+")?"+_[Ii]+"?)?)?";var Hp=O++;_[Hp]="^"+_[ln]+"\\s*"+_[mr]+"$";var Up=O++;_[Up]="^"+_[ln]+"\\s*"+_[cn]+"$";var Bp=O++;_[Bp]="(?:^|[^\\d])(\\d{1,"+gu+"})(?:\\.(\\d{1,"+gu+"}))?(?:\\.(\\d{1,"+gu+"}))?(?:$|[^\\d])";var Fa=O++;_[Fa]="(?:~>?)";var ja=O++;_[ja]="(\\s*)"+_[Fa]+"\\s+";B[ja]=new RegExp(_[ja],"g");var mA="$1~",Fp=O++;_[Fp]="^"+_[Fa]+_[mr]+"$";var Gp=O++;_[Gp]="^"+_[Fa]+_[cn]+"$";var Ga=O++;_[Ga]="(?:\\^)";var ka=O++;_[ka]="(\\s*)"+_[Ga]+"\\s+";B[ka]=new RegExp(_[ka],"g");var yA="$1^",Vp=O++;_[Vp]="^"+_[Ga]+_[mr]+"$";var $p=O++;_[$p]="^"+_[Ga]+_[cn]+"$";var Pu=O++;_[Pu]="^"+_[ln]+"\\s*("+bu+")$|^$";var Ru=O++;_[Ru]="^"+_[ln]+"\\s*("+kp+")$|^$";var Ai=O++;_[Ai]="(\\s*)"+_[ln]+"\\s*("+bu+"|"+_[mr]+")";B[Ai]=new RegExp(_[Ai],"g");var TA="$1$2$3",zp=O++;_[zp]="^\\s*("+_[mr]+")\\s+-\\s+("+_[mr]+")\\s*$";var Xp=O++;_[Xp]="^\\s*("+_[cn]+")\\s+-\\s+("+_[cn]+")\\s*$";var Kp=O++;_[Kp]="(<|>)?=?\\s*\\*";for($t=0;$t<O;$t++)k($t,_[$t]),B[$t]||(B[$t]=new RegExp(_[$t]));var $t;I.parse=yr;function yr(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof N)return e;if(typeof e!="string"||e.length>Eu)return null;var r=t.loose?B[Ou]:B[Cu];if(!r.test(e))return null;try{return new N(e,t)}catch{return null}}I.valid=AA;function AA(e,t){var r=yr(e,t);return r?r.version:null}I.clean=SA;function SA(e,t){var r=yr(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}I.SemVer=N;function N(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof N){if(e.loose===t.loose)return e;e=e.version}else if(typeof e!="string")throw new TypeError("Invalid Version: "+e);if(e.length>Eu)throw new TypeError("version is longer than "+Eu+" characters");if(!(this instanceof N))return new N(e,t);k("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?B[Ou]:B[Cu]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>Ma||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Ma||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Ma||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(function(n){if(/^[0-9]+$/.test(n)){var i=+n;if(i>=0&&i<Ma)return i}return n}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}N.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version};N.prototype.toString=function(){return this.version};N.prototype.compare=function(e){return k("SemVer.compare",this.version,this.options,e),e instanceof N||(e=new N(e,this.options)),this.compareMain(e)||this.comparePre(e)};N.prototype.compareMain=function(e){return e instanceof N||(e=new N(e,this.options)),un(this.major,e.major)||un(this.minor,e.minor)||un(this.patch,e.patch)};N.prototype.comparePre=function(e){if(e instanceof N||(e=new N(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],n=e.prerelease[t];if(k("prerelease compare",t,r,n),r===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(r===void 0)return-1;if(r===n)continue;return un(r,n)}while(++t)};N.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",t),this.inc("pre",t);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)typeof this.prerelease[r]=="number"&&(this.prerelease[r]++,r=-2);r===-1&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this};I.inc=IA;function IA(e,t,r,n){typeof r=="string"&&(n=r,r=void 0);try{return new N(e,r).inc(t,n).version}catch{return null}}I.diff=CA;function CA(e,t){if(Nu(e,t))return null;var r=yr(e),n=yr(t),i="";if(r.prerelease.length||n.prerelease.length){i="pre";var a="prerelease"}for(var s in r)if((s==="major"||s==="minor"||s==="patch")&&r[s]!==n[s])return i+s;return a}I.compareIdentifiers=un;var Lp=/^[0-9]+$/;function un(e,t){var r=Lp.test(e),n=Lp.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1}I.rcompareIdentifiers=bA;function bA(e,t){return un(t,e)}I.major=OA;function OA(e,t){return new N(e,t).major}I.minor=PA;function PA(e,t){return new N(e,t).minor}I.patch=RA;function RA(e,t){return new N(e,t).patch}I.compare=It;function It(e,t,r){return new N(e,r).compare(new N(t,r))}I.compareLoose=NA;function NA(e,t){return It(e,t,!0)}I.rcompare=DA;function DA(e,t,r){return It(t,e,r)}I.sort=wA;function wA(e,t){return e.sort(function(r,n){return I.compare(r,n,t)})}I.rsort=xA;function xA(e,t){return e.sort(function(r,n){return I.rcompare(r,n,t)})}I.gt=Si;function Si(e,t,r){return It(e,t,r)>0}I.lt=Ha;function Ha(e,t,r){return It(e,t,r)<0}I.eq=Nu;function Nu(e,t,r){return It(e,t,r)===0}I.neq=Yp;function Yp(e,t,r){return It(e,t,r)!==0}I.gte=Du;function Du(e,t,r){return It(e,t,r)>=0}I.lte=wu;function wu(e,t,r){return It(e,t,r)<=0}I.cmp=Ua;function Ua(e,t,r,n){switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return Nu(e,r,n);case"!=":return Yp(e,r,n);case">":return Si(e,r,n);case">=":return Du(e,r,n);case"<":return Ha(e,r,n);case"<=":return wu(e,r,n);default:throw new TypeError("Invalid operator: "+t)}}I.Comparator=Ve;function Ve(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof Ve){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof Ve))return new Ve(e,t);k("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===Ci?this.value="":this.value=this.operator+this.semver.version,k("comp",this)}var Ci={};Ve.prototype.parse=function(e){var t=this.options.loose?B[Pu]:B[Ru],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=r[1],this.operator==="="&&(this.operator=""),r[2]?this.semver=new N(r[2],this.options.loose):this.semver=Ci};Ve.prototype.toString=function(){return this.value};Ve.prototype.test=function(e){return k("Comparator.test",e,this.options.loose),this.semver===Ci?!0:(typeof e=="string"&&(e=new N(e,this.options)),Ua(e,this.operator,this.semver,this.options))};Ve.prototype.intersects=function(e,t){if(!(e instanceof Ve))throw new TypeError("a Comparator is required");(!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1});var r;if(this.operator==="")return r=new W(e.value,t),Ba(this.value,r,t);if(e.operator==="")return r=new W(this.value,t),Ba(e.semver,r,t);var n=(this.operator===">="||this.operator===">")&&(e.operator===">="||e.operator===">"),i=(this.operator==="<="||this.operator==="<")&&(e.operator==="<="||e.operator==="<"),a=this.semver.version===e.semver.version,s=(this.operator===">="||this.operator==="<=")&&(e.operator===">="||e.operator==="<="),o=Ua(this.semver,"<",e.semver,t)&&(this.operator===">="||this.operator===">")&&(e.operator==="<="||e.operator==="<"),u=Ua(this.semver,">",e.semver,t)&&(this.operator==="<="||this.operator==="<")&&(e.operator===">="||e.operator===">");return n||i||a&&s||o||u};I.Range=W;function W(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof W)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new W(e.raw,t);if(e instanceof Ve)return new W(e.value,t);if(!(this instanceof W))return new W(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(r){return this.parseRange(r.trim())},this).filter(function(r){return r.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}W.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range};W.prototype.toString=function(){return this.range};W.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?B[Xp]:B[zp];e=e.replace(r,GA),k("hyphen replace",e),e=e.replace(B[Ai],TA),k("comparator trim",e,B[Ai]),e=e.replace(B[ja],mA),e=e.replace(B[ka],yA),e=e.split(/\s+/).join(" ");var n=t?B[Pu]:B[Ru],i=e.split(" ").map(function(a){return LA(a,this.options)},this).join(" ").split(/\s+/);return this.options.loose&&(i=i.filter(function(a){return!!a.match(n)})),i=i.map(function(a){return new Ve(a,this.options)},this),i};W.prototype.intersects=function(e,t){if(!(e instanceof W))throw new TypeError("a Range is required");return this.set.some(function(r){return r.every(function(n){return e.set.some(function(i){return i.every(function(a){return n.intersects(a,t)})})})})};I.toComparators=MA;function MA(e,t){return new W(e,t).set.map(function(r){return r.map(function(n){return n.value}).join(" ").trim().split(" ")})}function LA(e,t){return k("comp",e,t),e=kA(e,t),k("caret",e),e=qA(e,t),k("tildes",e),e=UA(e,t),k("xrange",e),e=FA(e,t),k("stars",e),e}function Re(e){return!e||e.toLowerCase()==="x"||e==="*"}function qA(e,t){return e.trim().split(/\s+/).map(function(r){return jA(r,t)}).join(" ")}function jA(e,t){var r=t.loose?B[Gp]:B[Fp];return e.replace(r,function(n,i,a,s,o){k("tilde",e,n,i,a,s,o);var u;return Re(i)?u="":Re(a)?u=">="+i+".0.0 <"+(+i+1)+".0.0":Re(s)?u=">="+i+"."+a+".0 <"+i+"."+(+a+1)+".0":o?(k("replaceTilde pr",o),u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+(+a+1)+".0"):u=">="+i+"."+a+"."+s+" <"+i+"."+(+a+1)+".0",k("tilde return",u),u})}function kA(e,t){return e.trim().split(/\s+/).map(function(r){return HA(r,t)}).join(" ")}function HA(e,t){k("caret",e,t);var r=t.loose?B[$p]:B[Vp];return e.replace(r,function(n,i,a,s,o){k("caret",e,n,i,a,s,o);var u;return Re(i)?u="":Re(a)?u=">="+i+".0.0 <"+(+i+1)+".0.0":Re(s)?i==="0"?u=">="+i+"."+a+".0 <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+".0 <"+(+i+1)+".0.0":o?(k("replaceCaret pr",o),i==="0"?a==="0"?u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+a+"."+(+s+1):u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+"."+s+"-"+o+" <"+(+i+1)+".0.0"):(k("no pr"),i==="0"?a==="0"?u=">="+i+"."+a+"."+s+" <"+i+"."+a+"."+(+s+1):u=">="+i+"."+a+"."+s+" <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+"."+s+" <"+(+i+1)+".0.0"),k("caret return",u),u})}function UA(e,t){return k("replaceXRanges",e,t),e.split(/\s+/).map(function(r){return BA(r,t)}).join(" ")}function BA(e,t){e=e.trim();var r=t.loose?B[Up]:B[Hp];return e.replace(r,function(n,i,a,s,o,u){k("xRange",e,n,i,a,s,o,u);var c=Re(a),f=c||Re(s),p=f||Re(o),d=p;return i==="="&&d&&(i=""),c?i===">"||i==="<"?n="<0.0.0":n="*":i&&d?(f&&(s=0),o=0,i===">"?(i=">=",f?(a=+a+1,s=0,o=0):(s=+s+1,o=0)):i==="<="&&(i="<",f?a=+a+1:s=+s+1),n=i+a+"."+s+"."+o):f?n=">="+a+".0.0 <"+(+a+1)+".0.0":p&&(n=">="+a+"."+s+".0 <"+a+"."+(+s+1)+".0"),k("xRange return",n),n})}function FA(e,t){return k("replaceStars",e,t),e.trim().replace(B[Kp],"")}function GA(e,t,r,n,i,a,s,o,u,c,f,p,d){return Re(r)?t="":Re(n)?t=">="+r+".0.0":Re(i)?t=">="+r+"."+n+".0":t=">="+t,Re(u)?o="":Re(c)?o="<"+(+u+1)+".0.0":Re(f)?o="<"+u+"."+(+c+1)+".0":p?o="<="+u+"."+c+"."+f+"-"+p:o="<="+o,(t+" "+o).trim()}W.prototype.test=function(e){if(!e)return!1;typeof e=="string"&&(e=new N(e,this.options));for(var t=0;t<this.set.length;t++)if(VA(this.set[t],e,this.options))return!0;return!1};function VA(e,t,r){for(var n=0;n<e.length;n++)if(!e[n].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(n=0;n<e.length;n++)if(k(e[n].semver),e[n].semver!==Ci&&e[n].semver.prerelease.length>0){var i=e[n].semver;if(i.major===t.major&&i.minor===t.minor&&i.patch===t.patch)return!0}return!1}return!0}I.satisfies=Ba;function Ba(e,t,r){try{t=new W(t,r)}catch{return!1}return t.test(e)}I.maxSatisfying=$A;function $A(e,t,r){var n=null,i=null;try{var a=new W(t,r)}catch{return null}return e.forEach(function(s){a.test(s)&&(!n||i.compare(s)===-1)&&(n=s,i=new N(n,r))}),n}I.minSatisfying=zA;function zA(e,t,r){var n=null,i=null;try{var a=new W(t,r)}catch{return null}return e.forEach(function(s){a.test(s)&&(!n||i.compare(s)===1)&&(n=s,i=new N(n,r))}),n}I.minVersion=XA;function XA(e,t){e=new W(e,t);var r=new N("0.0.0");if(e.test(r)||(r=new N("0.0.0-0"),e.test(r)))return r;r=null;for(var n=0;n<e.set.length;++n){var i=e.set[n];i.forEach(function(a){var s=new N(a.semver.version);switch(a.operator){case">":s.prerelease.length===0?s.patch++:s.prerelease.push(0),s.raw=s.format();case"":case">=":(!r||Si(r,s))&&(r=s);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+a.operator)}})}return r&&e.test(r)?r:null}I.validRange=KA;function KA(e,t){try{return new W(e,t).range||"*"}catch{return null}}I.ltr=YA;function YA(e,t,r){return xu(e,t,"<",r)}I.gtr=QA;function QA(e,t,r){return xu(e,t,">",r)}I.outside=xu;function xu(e,t,r,n){e=new N(e,n),t=new W(t,n);var i,a,s,o,u;switch(r){case">":i=Si,a=wu,s=Ha,o=">",u=">=";break;case"<":i=Ha,a=Du,s=Si,o="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Ba(e,t,n))return!1;for(var c=0;c<t.set.length;++c){var f=t.set[c],p=null,d=null;if(f.forEach(function(h){h.semver===Ci&&(h=new Ve(">=0.0.0")),p=p||h,d=d||h,i(h.semver,p.semver,n)?p=h:s(h.semver,d.semver,n)&&(d=h)}),p.operator===o||p.operator===u||(!d.operator||d.operator===o)&&a(e,d.semver))return!1;if(d.operator===u&&s(e,d.semver))return!1}return!0}I.prerelease=WA;function WA(e,t){var r=yr(e,t);return r&&r.prerelease.length?r.prerelease:null}I.intersects=ZA;function ZA(e,t,r){return e=new W(e,r),t=new W(t,r),e.intersects(t)}I.coerce=JA;function JA(e){if(e instanceof N)return e;if(typeof e!="string")return null;var t=e.match(B[Bp]);return t==null?null:yr(t[1]+"."+(t[2]||"0")+"."+(t[3]||"0"))}});var Mu=l(Va=>{"use strict";Object.defineProperty(Va,"__esModule",{value:!0});Va.makePatchingRequire=void 0;var eS=__webpack_require__(72),tS=Wp(),Jp=__webpack_require__(776),rS=Object.keys(process.binding("natives")),Zp=Jp.prototype.require;function nS(e){var t={};return function(n){var i=Zp.apply(this,arguments);if(e[n]){var a=Jp._resolveFilename(n,this);if(t.hasOwnProperty(a))return t[a];var s=void 0;if(rS.indexOf(n)<0)try{s=Zp.call(this,eS.join(n,"package.json")).version}catch{return i}else s=process.version.substring(1);var o=s.indexOf("-");o>=0&&(s=s.substring(0,o));for(var u=i,c=0,f=e[n];c<f.length;c++){var p=f[c];tS.satisfies(s,p.versionSpecifier)&&(u=p.patch(u,a))}return t[a]=u}return i}}Va.makePatchingRequire=nS});var ed=l((nM,iS)=>{iS.exports={name:"diagnostic-channel",version:"1.0.0",main:"./dist/src/channel.js",types:"./dist/src/channel.d.ts",scripts:{build:"tsc",lint:"tslint -c tslint.json -p tsconfig.json",clean:"rimraf ./dist",test:"mocha ./dist/tests/**/*.js"},homepage:"https://github.com/Microsoft/node-diagnostic-channel",bugs:{url:"https://github.com/Microsoft/node-diagnostic-channel/issues"},repository:{type:"git",url:"https://github.com/Microsoft/node-diagnostic-channel.git"},description:"Provides a context-saving pub/sub channel to connect diagnostic event publishers and subscribers",dependencies:{semver:"^5.3.0"},devDependencies:{"@types/mocha":"^2.2.40","@types/node":"~8.0.0",mocha:"^3.2.0",rimraf:"^2.6.1",tslint:"^5.0.0",typescript:"4.1.2"},files:["dist/src/**/*.d.ts","dist/src/**/*.js","LICENSE","README.md","package.json"],license:"MIT"}});var oe=l(fn=>{"use strict";Object.defineProperty(fn,"__esModule",{value:!0});fn.channel=fn.makePatchingRequire=void 0;var aS=Mu(),sS=Mu();Object.defineProperty(fn,"makePatchingRequire",{enumerable:!0,get:function(){return sS.makePatchingRequire}});var td=function(e){return!0},oS=function(){function e(){this.version=ed().version,this.subscribers={},this.contextPreservationFunction=function(t){return t},this.knownPatches={},this.currentlyPublishing=!1}return e.prototype.shouldPublish=function(t){var r=this.subscribers[t];return r?r.some(function(n){var i=n.filter;return!i||i(!1)}):!1},e.prototype.publish=function(t,r){if(!this.currentlyPublishing){var n=this.subscribers[t];if(n){var i={timestamp:Date.now(),data:r};this.currentlyPublishing=!0,n.forEach(function(a){var s=a.listener,o=a.filter;try{o&&o(!0)&&s(i)}catch{}}),this.currentlyPublishing=!1}}},e.prototype.subscribe=function(t,r,n){n===void 0&&(n=td),this.subscribers[t]||(this.subscribers[t]=[]),this.subscribers[t].push({listener:r,filter:n})},e.prototype.unsubscribe=function(t,r,n){n===void 0&&(n=td);var i=this.subscribers[t];if(i){for(var a=0;a<i.length;++a)if(i[a].listener===r&&i[a].filter===n)return i.splice(a,1),!0}return!1},e.prototype.reset=function(){var t=this;this.subscribers={},this.contextPreservationFunction=function(r){return r},Object.getOwnPropertyNames(this.knownPatches).forEach(function(r){return delete t.knownPatches[r]})},e.prototype.bindToContext=function(t){return this.contextPreservationFunction(t)},e.prototype.addContextPreservation=function(t){var r=this.contextPreservationFunction;this.contextPreservationFunction=function(n){return t(r(n))}},e.prototype.registerMonkeyPatch=function(t,r){this.knownPatches[t]||(this.knownPatches[t]=[]),this.knownPatches[t].push(r)},e.prototype.getPatchesObject=function(){return this.knownPatches},e}();global.diagnosticsSource||(global.diagnosticsSource=new oS,rd=__webpack_require__(776),rd.prototype.require=aS.makePatchingRequire(global.diagnosticsSource.getPatchesObject()));var rd;fn.channel=global.diagnosticsSource});var id=l(nd=>{"use strict";Object.defineProperty(nd,"__esModule",{value:!0})});var ad=l($a=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a._globalThis=void 0;$a._globalThis=typeof globalThis=="object"?globalThis:global});var sd=l(Tr=>{"use strict";var uS=Tr&&Tr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),cS=Tr&&Tr.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&uS(t,e,r)};Object.defineProperty(Tr,"__esModule",{value:!0});cS(ad(),Tr)});var od=l(Ar=>{"use strict";var lS=Ar&&Ar.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),fS=Ar&&Ar.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&lS(t,e,r)};Object.defineProperty(Ar,"__esModule",{value:!0});fS(sd(),Ar)});var Lu=l(za=>{"use strict";Object.defineProperty(za,"__esModule",{value:!0});za.VERSION=void 0;za.VERSION="1.0.3"});var ld=l(pn=>{"use strict";Object.defineProperty(pn,"__esModule",{value:!0});pn.isCompatible=pn._makeCompatibilityCheck=void 0;var pS=Lu(),ud=/^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;function cd(e){var t=new Set([e]),r=new Set,n=e.match(ud);if(!n)return function(){return!1};var i={major:+n[1],minor:+n[2],patch:+n[3],prerelease:n[4]};if(i.prerelease!=null)return function(u){return u===e};function a(o){return r.add(o),!1}function s(o){return t.add(o),!0}return function(u){if(t.has(u))return!0;if(r.has(u))return!1;var c=u.match(ud);if(!c)return a(u);var f={major:+c[1],minor:+c[2],patch:+c[3],prerelease:c[4]};return f.prerelease!=null||i.major!==f.major?a(u):i.major===0?i.minor===f.minor&&i.patch<=f.patch?s(u):a(u):i.minor<=f.minor?s(u):a(u)}}pn._makeCompatibilityCheck=cd;pn.isCompatible=cd(pS.VERSION)});var dn=l(zt=>{"use strict";Object.defineProperty(zt,"__esModule",{value:!0});zt.unregisterGlobal=zt.getGlobal=zt.registerGlobal=void 0;var dS=od(),bi=Lu(),hS=ld(),_S=bi.VERSION.split(".")[0],Oi=Symbol.for("opentelemetry.js.api."+_S),Pi=dS._globalThis;function vS(e,t,r,n){var i;n===void 0&&(n=!1);var a=Pi[Oi]=(i=Pi[Oi])!==null&&i!==void 0?i:{version:bi.VERSION};if(!n&&a[e]){var s=new Error("@opentelemetry/api: Attempted duplicate registration of API: "+e);return r.error(s.stack||s.message),!1}if(a.version!==bi.VERSION){var s=new Error("@opentelemetry/api: All API registration versions must match");return r.error(s.stack||s.message),!1}return a[e]=t,r.debug("@opentelemetry/api: Registered a global for "+e+" v"+bi.VERSION+"."),!0}zt.registerGlobal=vS;function gS(e){var t,r,n=(t=Pi[Oi])===null||t===void 0?void 0:t.version;if(!(!n||!hS.isCompatible(n)))return(r=Pi[Oi])===null||r===void 0?void 0:r[e]}zt.getGlobal=gS;function ES(e,t){t.debug("@opentelemetry/api: Unregistering a global for "+e+" v"+bi.VERSION+".");var r=Pi[Oi];r&&delete r[e]}zt.unregisterGlobal=ES});var fd=l(Xa=>{"use strict";Object.defineProperty(Xa,"__esModule",{value:!0});Xa.DiagComponentLogger=void 0;var mS=dn(),yS=function(){function e(t){this._namespace=t.namespace||"DiagComponentLogger"}return e.prototype.debug=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Ri("debug",this._namespace,t)},e.prototype.error=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Ri("error",this._namespace,t)},e.prototype.info=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Ri("info",this._namespace,t)},e.prototype.warn=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Ri("warn",this._namespace,t)},e.prototype.verbose=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Ri("verbose",this._namespace,t)},e}();Xa.DiagComponentLogger=yS;function Ri(e,t,r){var n=mS.getGlobal("diag");if(!!n)return r.unshift(t),n[e].apply(n,r)}});var Ka=l(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.DiagLogLevel=void 0;var TS;(function(e){e[e.NONE=0]="NONE",e[e.ERROR=30]="ERROR",e[e.WARN=50]="WARN",e[e.INFO=60]="INFO",e[e.DEBUG=70]="DEBUG",e[e.VERBOSE=80]="VERBOSE",e[e.ALL=9999]="ALL"})(TS=Ni.DiagLogLevel||(Ni.DiagLogLevel={}))});var pd=l(Ya=>{"use strict";Object.defineProperty(Ya,"__esModule",{value:!0});Ya.createLogLevelDiagLogger=void 0;var Ct=Ka();function AS(e,t){e<Ct.DiagLogLevel.NONE?e=Ct.DiagLogLevel.NONE:e>Ct.DiagLogLevel.ALL&&(e=Ct.DiagLogLevel.ALL),t=t||{};function r(n,i){var a=t[n];return typeof a=="function"&&e>=i?a.bind(t):function(){}}return{error:r("error",Ct.DiagLogLevel.ERROR),warn:r("warn",Ct.DiagLogLevel.WARN),info:r("info",Ct.DiagLogLevel.INFO),debug:r("debug",Ct.DiagLogLevel.DEBUG),verbose:r("verbose",Ct.DiagLogLevel.VERBOSE)}}Ya.createLogLevelDiagLogger=AS});var hn=l(Wa=>{"use strict";Object.defineProperty(Wa,"__esModule",{value:!0});Wa.DiagAPI=void 0;var SS=fd(),IS=pd(),CS=Ka(),Qa=dn(),bS="diag",OS=function(){function e(){function t(n){return function(){var i=Qa.getGlobal("diag");if(!!i)return i[n].apply(i,arguments)}}var r=this;r.setLogger=function(n,i){var a,s;if(i===void 0&&(i=CS.DiagLogLevel.INFO),n===r){var o=new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");return r.error((a=o.stack)!==null&&a!==void 0?a:o.message),!1}var u=Qa.getGlobal("diag"),c=IS.createLogLevelDiagLogger(i,n);if(u){var f=(s=new Error().stack)!==null&&s!==void 0?s:"<failed to generate stacktrace>";u.warn("Current logger will be overwritten from "+f),c.warn("Current logger will overwrite one already registered from "+f)}return Qa.registerGlobal("diag",c,r,!0)},r.disable=function(){Qa.unregisterGlobal(bS,r)},r.createComponentLogger=function(n){return new SS.DiagComponentLogger(n)},r.verbose=t("verbose"),r.debug=t("debug"),r.info=t("info"),r.warn=t("warn"),r.error=t("error")}return e.instance=function(){return this._instance||(this._instance=new e),this._instance},e}();Wa.DiagAPI=OS});var dd=l(Za=>{"use strict";Object.defineProperty(Za,"__esModule",{value:!0});Za.BaggageImpl=void 0;var PS=function(){function e(t){this._entries=t?new Map(t):new Map}return e.prototype.getEntry=function(t){var r=this._entries.get(t);if(!!r)return Object.assign({},r)},e.prototype.getAllEntries=function(){return Array.from(this._entries.entries()).map(function(t){var r=t[0],n=t[1];return[r,n]})},e.prototype.setEntry=function(t,r){var n=new e(this._entries);return n._entries.set(t,r),n},e.prototype.removeEntry=function(t){var r=new e(this._entries);return r._entries.delete(t),r},e.prototype.removeEntries=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var n=new e(this._entries),i=0,a=t;i<a.length;i++){var s=a[i];n._entries.delete(s)}return n},e.prototype.clear=function(){return new e},e}();Za.BaggageImpl=PS});var hd=l(Ja=>{"use strict";Object.defineProperty(Ja,"__esModule",{value:!0});Ja.baggageEntryMetadataSymbol=void 0;Ja.baggageEntryMetadataSymbol=Symbol("BaggageEntryMetadata")});var qu=l(_n=>{"use strict";Object.defineProperty(_n,"__esModule",{value:!0});_n.baggageEntryMetadataFromString=_n.createBaggage=void 0;var RS=hn(),NS=dd(),DS=hd(),wS=RS.DiagAPI.instance();function xS(e){return e===void 0&&(e={}),new NS.BaggageImpl(new Map(Object.entries(e)))}_n.createBaggage=xS;function MS(e){return typeof e!="string"&&(wS.error("Cannot create baggage metadata from unknown type: "+typeof e),e=""),{__TYPE__:DS.baggageEntryMetadataSymbol,toString:function(){return e}}}_n.baggageEntryMetadataFromString=MS});var vd=l(_d=>{"use strict";Object.defineProperty(_d,"__esModule",{value:!0})});var Ed=l(gd=>{"use strict";Object.defineProperty(gd,"__esModule",{value:!0})});var md=l(es=>{"use strict";Object.defineProperty(es,"__esModule",{value:!0});es.DiagConsoleLogger=void 0;var ju=[{n:"error",c:"error"},{n:"warn",c:"warn"},{n:"info",c:"info"},{n:"debug",c:"debug"},{n:"verbose",c:"trace"}],LS=function(){function e(){function t(n){return function(){var i=arguments;if(console){var a=console[n];if(typeof a!="function"&&(a=console.log),typeof a=="function")return a.apply(console,i)}}}for(var r=0;r<ju.length;r++)this[ju[r].n]=t(ju[r].c)}return e}();es.DiagConsoleLogger=LS});var Td=l(Xt=>{"use strict";var qS=Xt&&Xt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),yd=Xt&&Xt.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&qS(t,e,r)};Object.defineProperty(Xt,"__esModule",{value:!0});yd(md(),Xt);yd(Ka(),Xt)});var ku=l(vn=>{"use strict";Object.defineProperty(vn,"__esModule",{value:!0});vn.defaultTextMapSetter=vn.defaultTextMapGetter=void 0;vn.defaultTextMapGetter={get:function(e,t){if(e!=null)return e[t]},keys:function(e){return e==null?[]:Object.keys(e)}};vn.defaultTextMapSetter={set:function(e,t,r){e!=null&&(e[t]=r)}}});var Sd=l(Ad=>{"use strict";Object.defineProperty(Ad,"__esModule",{value:!0})});var Cd=l(Id=>{"use strict";Object.defineProperty(Id,"__esModule",{value:!0})});var Di=l(gn=>{"use strict";Object.defineProperty(gn,"__esModule",{value:!0});gn.ROOT_CONTEXT=gn.createContextKey=void 0;function jS(e){return Symbol.for(e)}gn.createContextKey=jS;var kS=function(){function e(t){var r=this;r._currentContext=t?new Map(t):new Map,r.getValue=function(n){return r._currentContext.get(n)},r.setValue=function(n,i){var a=new e(r._currentContext);return a._currentContext.set(n,i),a},r.deleteValue=function(n){var i=new e(r._currentContext);return i._currentContext.delete(n),i}}return e}();gn.ROOT_CONTEXT=new kS});var bd=l(En=>{"use strict";var HS=En&&En.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(En,"__esModule",{value:!0});En.NoopContextManager=void 0;var US=Di(),BS=function(){function e(){}return e.prototype.active=function(){return US.ROOT_CONTEXT},e.prototype.with=function(t,r,n){for(var i=[],a=3;a<arguments.length;a++)i[a-3]=arguments[a];return r.call.apply(r,HS([n],i))},e.prototype.bind=function(t,r){return r},e.prototype.enable=function(){return this},e.prototype.disable=function(){return this},e}();En.NoopContextManager=BS});var Bu=l(mn=>{"use strict";var FS=mn&&mn.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(mn,"__esModule",{value:!0});mn.ContextAPI=void 0;var GS=bd(),Hu=dn(),Od=hn(),Uu="context",VS=new GS.NoopContextManager,$S=function(){function e(){}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalContextManager=function(t){return Hu.registerGlobal(Uu,t,Od.DiagAPI.instance())},e.prototype.active=function(){return this._getContextManager().active()},e.prototype.with=function(t,r,n){for(var i,a=[],s=3;s<arguments.length;s++)a[s-3]=arguments[s];return(i=this._getContextManager()).with.apply(i,FS([t,r,n],a))},e.prototype.bind=function(t,r){return this._getContextManager().bind(t,r)},e.prototype._getContextManager=function(){return Hu.getGlobal(Uu)||VS},e.prototype.disable=function(){this._getContextManager().disable(),Hu.unregisterGlobal(Uu,Od.DiagAPI.instance())},e}();mn.ContextAPI=$S});var Fu=l(wi=>{"use strict";Object.defineProperty(wi,"__esModule",{value:!0});wi.TraceFlags=void 0;var zS;(function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"})(zS=wi.TraceFlags||(wi.TraceFlags={}))});var ts=l(ct=>{"use strict";Object.defineProperty(ct,"__esModule",{value:!0});ct.INVALID_SPAN_CONTEXT=ct.INVALID_TRACEID=ct.INVALID_SPANID=void 0;var XS=Fu();ct.INVALID_SPANID="0000000000000000";ct.INVALID_TRACEID="00000000000000000000000000000000";ct.INVALID_SPAN_CONTEXT={traceId:ct.INVALID_TRACEID,spanId:ct.INVALID_SPANID,traceFlags:XS.TraceFlags.NONE}});var ns=l(rs=>{"use strict";Object.defineProperty(rs,"__esModule",{value:!0});rs.NonRecordingSpan=void 0;var KS=ts(),YS=function(){function e(t){t===void 0&&(t=KS.INVALID_SPAN_CONTEXT),this._spanContext=t}return e.prototype.spanContext=function(){return this._spanContext},e.prototype.setAttribute=function(t,r){return this},e.prototype.setAttributes=function(t){return this},e.prototype.addEvent=function(t,r){return this},e.prototype.setStatus=function(t){return this},e.prototype.updateName=function(t){return this},e.prototype.end=function(t){},e.prototype.isRecording=function(){return!1},e.prototype.recordException=function(t,r){},e}();rs.NonRecordingSpan=YS});var Vu=l($e=>{"use strict";Object.defineProperty($e,"__esModule",{value:!0});$e.getSpanContext=$e.setSpanContext=$e.deleteSpan=$e.setSpan=$e.getSpan=void 0;var QS=Di(),WS=ns(),Gu=QS.createContextKey("OpenTelemetry Context Key SPAN");function Pd(e){return e.getValue(Gu)||void 0}$e.getSpan=Pd;function Rd(e,t){return e.setValue(Gu,t)}$e.setSpan=Rd;function ZS(e){return e.deleteValue(Gu)}$e.deleteSpan=ZS;function JS(e,t){return Rd(e,new WS.NonRecordingSpan(t))}$e.setSpanContext=JS;function eI(e){var t;return(t=Pd(e))===null||t===void 0?void 0:t.spanContext()}$e.getSpanContext=eI});var is=l(lt=>{"use strict";Object.defineProperty(lt,"__esModule",{value:!0});lt.wrapSpanContext=lt.isSpanContextValid=lt.isValidSpanId=lt.isValidTraceId=void 0;var Nd=ts(),tI=ns(),rI=/^([0-9a-f]{32})$/i,nI=/^[0-9a-f]{16}$/i;function Dd(e){return rI.test(e)&&e!==Nd.INVALID_TRACEID}lt.isValidTraceId=Dd;function wd(e){return nI.test(e)&&e!==Nd.INVALID_SPANID}lt.isValidSpanId=wd;function iI(e){return Dd(e.traceId)&&wd(e.spanId)}lt.isSpanContextValid=iI;function aI(e){return new tI.NonRecordingSpan(e)}lt.wrapSpanContext=aI});var zu=l(as=>{"use strict";Object.defineProperty(as,"__esModule",{value:!0});as.NoopTracer=void 0;var sI=Bu(),xd=Vu(),$u=ns(),oI=is(),Md=sI.ContextAPI.getInstance(),uI=function(){function e(){}return e.prototype.startSpan=function(t,r,n){var i=Boolean(r==null?void 0:r.root);if(i)return new $u.NonRecordingSpan;var a=n&&xd.getSpanContext(n);return cI(a)&&oI.isSpanContextValid(a)?new $u.NonRecordingSpan(a):new $u.NonRecordingSpan},e.prototype.startActiveSpan=function(t,r,n,i){var a,s,o;if(!(arguments.length<2)){arguments.length===2?o=r:arguments.length===3?(a=r,o=n):(a=r,s=n,o=i);var u=s??Md.active(),c=this.startSpan(t,a,u),f=xd.setSpan(u,c);return Md.with(f,o,void 0,c)}},e}();as.NoopTracer=uI;function cI(e){return typeof e=="object"&&typeof e.spanId=="string"&&typeof e.traceId=="string"&&typeof e.traceFlags=="number"}});var Xu=l(ss=>{"use strict";Object.defineProperty(ss,"__esModule",{value:!0});ss.ProxyTracer=void 0;var lI=zu(),fI=new lI.NoopTracer,pI=function(){function e(t,r,n){this._provider=t,this.name=r,this.version=n}return e.prototype.startSpan=function(t,r,n){return this._getTracer().startSpan(t,r,n)},e.prototype.startActiveSpan=function(t,r,n,i){var a=this._getTracer();return Reflect.apply(a.startActiveSpan,a,arguments)},e.prototype._getTracer=function(){if(this._delegate)return this._delegate;var t=this._provider.getDelegateTracer(this.name,this.version);return t?(this._delegate=t,this._delegate):fI},e}();ss.ProxyTracer=pI});var Ld=l(os=>{"use strict";Object.defineProperty(os,"__esModule",{value:!0});os.NoopTracerProvider=void 0;var dI=zu(),hI=function(){function e(){}return e.prototype.getTracer=function(t,r){return new dI.NoopTracer},e}();os.NoopTracerProvider=hI});var Ku=l(us=>{"use strict";Object.defineProperty(us,"__esModule",{value:!0});us.ProxyTracerProvider=void 0;var _I=Xu(),vI=Ld(),gI=new vI.NoopTracerProvider,EI=function(){function e(){}return e.prototype.getTracer=function(t,r){var n;return(n=this.getDelegateTracer(t,r))!==null&&n!==void 0?n:new _I.ProxyTracer(this,t,r)},e.prototype.getDelegate=function(){var t;return(t=this._delegate)!==null&&t!==void 0?t:gI},e.prototype.setDelegate=function(t){this._delegate=t},e.prototype.getDelegateTracer=function(t,r){var n;return(n=this._delegate)===null||n===void 0?void 0:n.getTracer(t,r)},e}();us.ProxyTracerProvider=EI});var jd=l(qd=>{"use strict";Object.defineProperty(qd,"__esModule",{value:!0})});var kd=l(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.SamplingDecision=void 0;var mI;(function(e){e[e.NOT_RECORD=0]="NOT_RECORD",e[e.RECORD=1]="RECORD",e[e.RECORD_AND_SAMPLED=2]="RECORD_AND_SAMPLED"})(mI=xi.SamplingDecision||(xi.SamplingDecision={}))});var Ud=l(Hd=>{"use strict";Object.defineProperty(Hd,"__esModule",{value:!0})});var Bd=l(Mi=>{"use strict";Object.defineProperty(Mi,"__esModule",{value:!0});Mi.SpanKind=void 0;var yI;(function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"})(yI=Mi.SpanKind||(Mi.SpanKind={}))});var Gd=l(Fd=>{"use strict";Object.defineProperty(Fd,"__esModule",{value:!0})});var $d=l(Vd=>{"use strict";Object.defineProperty(Vd,"__esModule",{value:!0})});var zd=l(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.SpanStatusCode=void 0;var TI;(function(e){e[e.UNSET=0]="UNSET",e[e.OK=1]="OK",e[e.ERROR=2]="ERROR"})(TI=Li.SpanStatusCode||(Li.SpanStatusCode={}))});var Kd=l(Xd=>{"use strict";Object.defineProperty(Xd,"__esModule",{value:!0})});var Qd=l(Yd=>{"use strict";Object.defineProperty(Yd,"__esModule",{value:!0})});var Zd=l(Wd=>{"use strict";Object.defineProperty(Wd,"__esModule",{value:!0})});var eh=l(Jd=>{"use strict";Object.defineProperty(Jd,"__esModule",{value:!0})});var ih=l(cs=>{"use strict";Object.defineProperty(cs,"__esModule",{value:!0});cs.TraceAPI=void 0;var Yu=dn(),th=Ku(),rh=is(),qi=Vu(),nh=hn(),Qu="trace",AI=function(){function e(){this._proxyTracerProvider=new th.ProxyTracerProvider,this.wrapSpanContext=rh.wrapSpanContext,this.isSpanContextValid=rh.isSpanContextValid,this.deleteSpan=qi.deleteSpan,this.getSpan=qi.getSpan,this.getSpanContext=qi.getSpanContext,this.setSpan=qi.setSpan,this.setSpanContext=qi.setSpanContext}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalTracerProvider=function(t){var r=Yu.registerGlobal(Qu,this._proxyTracerProvider,nh.DiagAPI.instance());return r&&this._proxyTracerProvider.setDelegate(t),r},e.prototype.getTracerProvider=function(){return Yu.getGlobal(Qu)||this._proxyTracerProvider},e.prototype.getTracer=function(t,r){return this.getTracerProvider().getTracer(t,r)},e.prototype.disable=function(){Yu.unregisterGlobal(Qu,nh.DiagAPI.instance()),this._proxyTracerProvider=new th.ProxyTracerProvider},e}();cs.TraceAPI=AI});var ah=l(ls=>{"use strict";Object.defineProperty(ls,"__esModule",{value:!0});ls.NoopTextMapPropagator=void 0;var SI=function(){function e(){}return e.prototype.inject=function(t,r){},e.prototype.extract=function(t,r){return t},e.prototype.fields=function(){return[]},e}();ls.NoopTextMapPropagator=SI});var sh=l(Kt=>{"use strict";Object.defineProperty(Kt,"__esModule",{value:!0});Kt.deleteBaggage=Kt.setBaggage=Kt.getBaggage=void 0;var II=Di(),Wu=II.createContextKey("OpenTelemetry Baggage Key");function CI(e){return e.getValue(Wu)||void 0}Kt.getBaggage=CI;function bI(e,t){return e.setValue(Wu,t)}Kt.setBaggage=bI;function OI(e){return e.deleteValue(Wu)}Kt.deleteBaggage=OI});var ch=l(fs=>{"use strict";Object.defineProperty(fs,"__esModule",{value:!0});fs.PropagationAPI=void 0;var Zu=dn(),PI=ah(),oh=ku(),Ju=sh(),RI=qu(),uh=hn(),ec="propagation",NI=new PI.NoopTextMapPropagator,DI=function(){function e(){this.createBaggage=RI.createBaggage,this.getBaggage=Ju.getBaggage,this.setBaggage=Ju.setBaggage,this.deleteBaggage=Ju.deleteBaggage}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalPropagator=function(t){return Zu.registerGlobal(ec,t,uh.DiagAPI.instance())},e.prototype.inject=function(t,r,n){return n===void 0&&(n=oh.defaultTextMapSetter),this._getGlobalPropagator().inject(t,r,n)},e.prototype.extract=function(t,r,n){return n===void 0&&(n=oh.defaultTextMapGetter),this._getGlobalPropagator().extract(t,r,n)},e.prototype.fields=function(){return this._getGlobalPropagator().fields()},e.prototype.disable=function(){Zu.unregisterGlobal(ec,uh.DiagAPI.instance())},e.prototype._getGlobalPropagator=function(){return Zu.getGlobal(ec)||NI},e}();fs.PropagationAPI=DI});var z=l(y=>{"use strict";var wI=y&&y.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),re=y&&y.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&wI(t,e,r)};Object.defineProperty(y,"__esModule",{value:!0});y.diag=y.propagation=y.trace=y.context=y.INVALID_SPAN_CONTEXT=y.INVALID_TRACEID=y.INVALID_SPANID=y.isValidSpanId=y.isValidTraceId=y.isSpanContextValid=y.baggageEntryMetadataFromString=void 0;re(id(),y);var xI=qu();Object.defineProperty(y,"baggageEntryMetadataFromString",{enumerable:!0,get:function(){return xI.baggageEntryMetadataFromString}});re(vd(),y);re(Ed(),y);re(Td(),y);re(ku(),y);re(Sd(),y);re(Cd(),y);re(Xu(),y);re(Ku(),y);re(jd(),y);re(kd(),y);re(Ud(),y);re(Bd(),y);re(Gd(),y);re($d(),y);re(zd(),y);re(Fu(),y);re(Kd(),y);re(Qd(),y);re(Zd(),y);var tc=is();Object.defineProperty(y,"isSpanContextValid",{enumerable:!0,get:function(){return tc.isSpanContextValid}});Object.defineProperty(y,"isValidTraceId",{enumerable:!0,get:function(){return tc.isValidTraceId}});Object.defineProperty(y,"isValidSpanId",{enumerable:!0,get:function(){return tc.isValidSpanId}});var rc=ts();Object.defineProperty(y,"INVALID_SPANID",{enumerable:!0,get:function(){return rc.INVALID_SPANID}});Object.defineProperty(y,"INVALID_TRACEID",{enumerable:!0,get:function(){return rc.INVALID_TRACEID}});Object.defineProperty(y,"INVALID_SPAN_CONTEXT",{enumerable:!0,get:function(){return rc.INVALID_SPAN_CONTEXT}});re(Di(),y);re(eh(),y);var MI=Bu();y.context=MI.ContextAPI.getInstance();var LI=ih();y.trace=LI.TraceAPI.getInstance();var qI=ch();y.propagation=qI.PropagationAPI.getInstance();var jI=hn();y.diag=jI.DiagAPI.instance();y.default={trace:y.trace,context:y.context,propagation:y.propagation,diag:y.diag}});var ps=l(Yt=>{"use strict";Object.defineProperty(Yt,"__esModule",{value:!0});Yt.isTracingSuppressed=Yt.unsuppressTracing=Yt.suppressTracing=void 0;var kI=z(),nc=kI.createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");function HI(e){return e.setValue(nc,!0)}Yt.suppressTracing=HI;function UI(e){return e.deleteValue(nc)}Yt.unsuppressTracing=UI;function BI(e){return e.getValue(nc)===!0}Yt.isTracingSuppressed=BI});var ic=l(Ie=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});Ie.BAGGAGE_MAX_TOTAL_LENGTH=Ie.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS=Ie.BAGGAGE_MAX_NAME_VALUE_PAIRS=Ie.BAGGAGE_HEADER=Ie.BAGGAGE_ITEMS_SEPARATOR=Ie.BAGGAGE_PROPERTIES_SEPARATOR=Ie.BAGGAGE_KEY_PAIR_SEPARATOR=void 0;Ie.BAGGAGE_KEY_PAIR_SEPARATOR="=";Ie.BAGGAGE_PROPERTIES_SEPARATOR=";";Ie.BAGGAGE_ITEMS_SEPARATOR=",";Ie.BAGGAGE_HEADER="baggage";Ie.BAGGAGE_MAX_NAME_VALUE_PAIRS=180;Ie.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS=4096;Ie.BAGGAGE_MAX_TOTAL_LENGTH=8192});var ac=l(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});rt.parseKeyPairsIntoRecord=rt.parsePairKeyValue=rt.getKeyPairs=rt.serializeKeyPairs=void 0;var FI=z(),yn=ic(),GI=e=>e.reduce((t,r)=>{let n=`${t}${t!==""?yn.BAGGAGE_ITEMS_SEPARATOR:""}${r}`;return n.length>yn.BAGGAGE_MAX_TOTAL_LENGTH?t:n},"");rt.serializeKeyPairs=GI;var VI=e=>e.getAllEntries().map(([t,r])=>`${encodeURIComponent(t)}=${encodeURIComponent(r.value)}`);rt.getKeyPairs=VI;var $I=e=>{let t=e.split(yn.BAGGAGE_PROPERTIES_SEPARATOR);if(t.length<=0)return;let r=t.shift();if(!r)return;let n=r.split(yn.BAGGAGE_KEY_PAIR_SEPARATOR);if(n.length!==2)return;let i=decodeURIComponent(n[0].trim()),a=decodeURIComponent(n[1].trim()),s;return t.length>0&&(s=FI.baggageEntryMetadataFromString(t.join(yn.BAGGAGE_PROPERTIES_SEPARATOR))),{key:i,value:a,metadata:s}};rt.parsePairKeyValue=$I;var zI=e=>typeof e!="string"||e.length===0?{}:e.split(yn.BAGGAGE_ITEMS_SEPARATOR).map(t=>rt.parsePairKeyValue(t)).filter(t=>t!==void 0&&t.value.length>0).reduce((t,r)=>(t[r.key]=r.value,t),{});rt.parseKeyPairsIntoRecord=zI});var lh=l(ds=>{"use strict";Object.defineProperty(ds,"__esModule",{value:!0});ds.HttpBaggagePropagator=void 0;var sc=z(),XI=ps(),Tn=ic(),oc=ac(),uc=class{inject(t,r,n){let i=sc.propagation.getBaggage(t);if(!i||XI.isTracingSuppressed(t))return;let a=oc.getKeyPairs(i).filter(o=>o.length<=Tn.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0,Tn.BAGGAGE_MAX_NAME_VALUE_PAIRS),s=oc.serializeKeyPairs(a);s.length>0&&n.set(r,Tn.BAGGAGE_HEADER,s)}extract(t,r,n){let i=n.get(r,Tn.BAGGAGE_HEADER);if(!i)return t;let a={};return i.length===0||(i.split(Tn.BAGGAGE_ITEMS_SEPARATOR).forEach(o=>{let u=oc.parsePairKeyValue(o);if(u){let c={value:u.value};u.metadata&&(c.metadata=u.metadata),a[u.key]=c}}),Object.entries(a).length===0)?t:sc.propagation.setBaggage(t,sc.propagation.createBaggage(a))}fields(){return[Tn.BAGGAGE_HEADER]}};ds.HttpBaggagePropagator=uc});var dh=l(An=>{"use strict";Object.defineProperty(An,"__esModule",{value:!0});An.isAttributeValue=An.sanitizeAttributes=void 0;function KI(e){let t={};if(e==null||typeof e!="object")return t;for(let[r,n]of Object.entries(e))fh(n)&&(Array.isArray(n)?t[r]=n.slice():t[r]=n);return t}An.sanitizeAttributes=KI;function fh(e){return e==null?!0:Array.isArray(e)?YI(e):ph(e)}An.isAttributeValue=fh;function YI(e){let t;for(let r of e)if(r!=null){if(!t){if(ph(r)){t=typeof r;continue}return!1}if(typeof r!==t)return!1}return!0}function ph(e){switch(typeof e){case"number":return!0;case"boolean":return!0;case"string":return!0}return!1}});var cc=l(hs=>{"use strict";Object.defineProperty(hs,"__esModule",{value:!0});hs.loggingErrorHandler=void 0;var QI=z();function WI(){return e=>{QI.diag.error(ZI(e))}}hs.loggingErrorHandler=WI;function ZI(e){return typeof e=="string"?e:JSON.stringify(JI(e))}function JI(e){let t={},r=e;for(;r!==null;)Object.getOwnPropertyNames(r).forEach(n=>{if(t[n])return;let i=r[n];i&&(t[n]=String(i))}),r=Object.getPrototypeOf(r);return t}});var lc=l(Sn=>{"use strict";Object.defineProperty(Sn,"__esModule",{value:!0});Sn.globalErrorHandler=Sn.setGlobalErrorHandler=void 0;var eC=cc(),hh=eC.loggingErrorHandler();function tC(e){hh=e}Sn.setGlobalErrorHandler=tC;var rC=e=>{try{hh(e)}catch{}};Sn.globalErrorHandler=rC});var fc=l(ji=>{"use strict";Object.defineProperty(ji,"__esModule",{value:!0});ji.TracesSamplerValues=void 0;var nC;(function(e){e.AlwaysOff="always_off",e.AlwaysOn="always_on",e.ParentBasedAlwaysOff="parentbased_always_off",e.ParentBasedAlwaysOn="parentbased_always_on",e.ParentBasedTraceIdRatio="parentbased_traceidratio",e.TraceIdRatio="traceidratio"})(nC=ji.TracesSamplerValues||(ji.TracesSamplerValues={}))});var pc=l(Sr=>{"use strict";Object.defineProperty(Sr,"__esModule",{value:!0});Sr.parseEnvironment=Sr.DEFAULT_ENVIRONMENT=void 0;var Qt=z(),iC=fc(),aC=",",sC=["OTEL_BSP_EXPORT_TIMEOUT","OTEL_BSP_MAX_EXPORT_BATCH_SIZE","OTEL_BSP_MAX_QUEUE_SIZE","OTEL_BSP_SCHEDULE_DELAY","OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT","OTEL_SPAN_EVENT_COUNT_LIMIT","OTEL_SPAN_LINK_COUNT_LIMIT"];function oC(e){return sC.indexOf(e)>-1}var uC=["OTEL_NO_PATCH_MODULES","OTEL_PROPAGATORS"];function cC(e){return uC.indexOf(e)>-1}Sr.DEFAULT_ENVIRONMENT={CONTAINER_NAME:"",ECS_CONTAINER_METADATA_URI_V4:"",ECS_CONTAINER_METADATA_URI:"",HOSTNAME:"",KUBERNETES_SERVICE_HOST:"",NAMESPACE:"",OTEL_BSP_EXPORT_TIMEOUT:3e4,OTEL_BSP_MAX_EXPORT_BATCH_SIZE:512,OTEL_BSP_MAX_QUEUE_SIZE:2048,OTEL_BSP_SCHEDULE_DELAY:5e3,OTEL_EXPORTER_JAEGER_AGENT_HOST:"",OTEL_EXPORTER_JAEGER_ENDPOINT:"",OTEL_EXPORTER_JAEGER_PASSWORD:"",OTEL_EXPORTER_JAEGER_USER:"",OTEL_EXPORTER_OTLP_ENDPOINT:"",OTEL_EXPORTER_OTLP_TRACES_ENDPOINT:"",OTEL_EXPORTER_OTLP_METRICS_ENDPOINT:"",OTEL_EXPORTER_OTLP_HEADERS:"",OTEL_EXPORTER_OTLP_TRACES_HEADERS:"",OTEL_EXPORTER_OTLP_METRICS_HEADERS:"",OTEL_EXPORTER_ZIPKIN_ENDPOINT:"http://localhost:9411/api/v2/spans",OTEL_LOG_LEVEL:Qt.DiagLogLevel.INFO,OTEL_NO_PATCH_MODULES:[],OTEL_PROPAGATORS:["tracecontext","baggage"],OTEL_RESOURCE_ATTRIBUTES:"",OTEL_SERVICE_NAME:"",OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT:128,OTEL_SPAN_EVENT_COUNT_LIMIT:128,OTEL_SPAN_LINK_COUNT_LIMIT:128,OTEL_TRACES_EXPORTER:"none",OTEL_TRACES_SAMPLER:iC.TracesSamplerValues.ParentBasedAlwaysOn,OTEL_TRACES_SAMPLER_ARG:""};function lC(e,t,r,n=-1/0,i=1/0){if(typeof r[e]<"u"){let a=Number(r[e]);isNaN(a)||(a<n?t[e]=n:a>i?t[e]=i:t[e]=a)}}function fC(e,t,r,n=aC){let i=r[e];typeof i=="string"&&(t[e]=i.split(n).map(a=>a.trim()))}var pC={ALL:Qt.DiagLogLevel.ALL,VERBOSE:Qt.DiagLogLevel.VERBOSE,DEBUG:Qt.DiagLogLevel.DEBUG,INFO:Qt.DiagLogLevel.INFO,WARN:Qt.DiagLogLevel.WARN,ERROR:Qt.DiagLogLevel.ERROR,NONE:Qt.DiagLogLevel.NONE};function dC(e,t,r){let n=r[e];if(typeof n=="string"){let i=pC[n.toUpperCase()];i!=null&&(t[e]=i)}}function hC(e){let t={};for(let r in Sr.DEFAULT_ENVIRONMENT){let n=r;switch(n){case"OTEL_LOG_LEVEL":dC(n,t,e);break;default:if(oC(n))lC(n,t,e);else if(cC(n))fC(n,t,e);else{let i=e[n];typeof i<"u"&&i!==null&&(t[n]=String(i))}}}return t}Sr.parseEnvironment=hC});var vh=l(_s=>{"use strict";Object.defineProperty(_s,"__esModule",{value:!0});_s.getEnv=void 0;var _C=__webpack_require__(558),_h=pc();function vC(){let e=_h.parseEnvironment(process.env);return Object.assign({HOSTNAME:_C.hostname()},_h.DEFAULT_ENVIRONMENT,e)}_s.getEnv=vC});var gh=l(vs=>{"use strict";Object.defineProperty(vs,"__esModule",{value:!0});vs.hexToBase64=void 0;function gC(e){let t=e.length,r="";for(let n=0;n<t;n+=2){let i=e.substring(n,n+2),a=parseInt(i,16);r+=String.fromCharCode(a)}return Buffer.from(r,"ascii").toString("base64")}vs.hexToBase64=gC});var yh=l(Es=>{"use strict";Object.defineProperty(Es,"__esModule",{value:!0});Es.RandomIdGenerator=void 0;var EC=8,mh=16,dc=class{constructor(){this.generateTraceId=Eh(mh),this.generateSpanId=Eh(EC)}};Es.RandomIdGenerator=dc;var gs=Buffer.allocUnsafe(mh);function Eh(e){return function(){for(let r=0;r<e/4;r++)gs.writeUInt32BE(Math.random()*2**32>>>0,r*4);for(let r=0;r<e&&!(gs[r]>0);r++)r===e-1&&(gs[e-1]=1);return gs.toString("hex",0,e)}}});var Th=l(ms=>{"use strict";Object.defineProperty(ms,"__esModule",{value:!0});ms.otperformance=void 0;var mC=__webpack_require__(848);ms.otperformance=mC.performance});var Ts=l(ys=>{"use strict";Object.defineProperty(ys,"__esModule",{value:!0});ys.VERSION=void 0;ys.VERSION="0.23.0"});var Ah=l(x=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.RpcGrpcStatusCodeValues=x.MessagingOperationValues=x.MessagingDestinationKindValues=x.HttpFlavorValues=x.NetTransportValues=x.FaasInvokedProviderValues=x.FaasDocumentOperationValues=x.FaasTriggerValues=x.DbCassandraConsistencyLevelValues=x.DbSystemValues=x.SemanticAttributes=void 0;x.SemanticAttributes={DB_SYSTEM:"db.system",DB_CONNECTION_STRING:"db.connection_string",DB_USER:"db.user",DB_JDBC_DRIVER_CLASSNAME:"db.jdbc.driver_classname",DB_NAME:"db.name",DB_STATEMENT:"db.statement",DB_OPERATION:"db.operation",DB_MSSQL_INSTANCE_NAME:"db.mssql.instance_name",DB_CASSANDRA_KEYSPACE:"db.cassandra.keyspace",DB_CASSANDRA_PAGE_SIZE:"db.cassandra.page_size",DB_CASSANDRA_CONSISTENCY_LEVEL:"db.cassandra.consistency_level",DB_CASSANDRA_TABLE:"db.cassandra.table",DB_CASSANDRA_IDEMPOTENCE:"db.cassandra.idempotence",DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT:"db.cassandra.speculative_execution_count",DB_CASSANDRA_COORDINATOR_ID:"db.cassandra.coordinator.id",DB_CASSANDRA_COORDINATOR_DC:"db.cassandra.coordinator.dc",DB_HBASE_NAMESPACE:"db.hbase.namespace",DB_REDIS_DATABASE_INDEX:"db.redis.database_index",DB_MONGODB_COLLECTION:"db.mongodb.collection",DB_SQL_TABLE:"db.sql.table",EXCEPTION_TYPE:"exception.type",EXCEPTION_MESSAGE:"exception.message",EXCEPTION_STACKTRACE:"exception.stacktrace",EXCEPTION_ESCAPED:"exception.escaped",FAAS_TRIGGER:"faas.trigger",FAAS_EXECUTION:"faas.execution",FAAS_DOCUMENT_COLLECTION:"faas.document.collection",FAAS_DOCUMENT_OPERATION:"faas.document.operation",FAAS_DOCUMENT_TIME:"faas.document.time",FAAS_DOCUMENT_NAME:"faas.document.name",FAAS_TIME:"faas.time",FAAS_CRON:"faas.cron",FAAS_COLDSTART:"faas.coldstart",FAAS_INVOKED_NAME:"faas.invoked_name",FAAS_INVOKED_PROVIDER:"faas.invoked_provider",FAAS_INVOKED_REGION:"faas.invoked_region",NET_TRANSPORT:"net.transport",NET_PEER_IP:"net.peer.ip",NET_PEER_PORT:"net.peer.port",NET_PEER_NAME:"net.peer.name",NET_HOST_IP:"net.host.ip",NET_HOST_PORT:"net.host.port",NET_HOST_NAME:"net.host.name",PEER_SERVICE:"peer.service",ENDUSER_ID:"enduser.id",ENDUSER_ROLE:"enduser.role",ENDUSER_SCOPE:"enduser.scope",THREAD_ID:"thread.id",THREAD_NAME:"thread.name",CODE_FUNCTION:"code.function",CODE_NAMESPACE:"code.namespace",CODE_FILEPATH:"code.filepath",CODE_LINENO:"code.lineno",HTTP_METHOD:"http.method",HTTP_URL:"http.url",HTTP_TARGET:"http.target",HTTP_HOST:"http.host",HTTP_SCHEME:"http.scheme",HTTP_STATUS_CODE:"http.status_code",HTTP_FLAVOR:"http.flavor",HTTP_USER_AGENT:"http.user_agent",HTTP_REQUEST_CONTENT_LENGTH:"http.request_content_length",HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED:"http.request_content_length_uncompressed",HTTP_RESPONSE_CONTENT_LENGTH:"http.response_content_length",HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED:"http.response_content_length_uncompressed",HTTP_SERVER_NAME:"http.server_name",HTTP_ROUTE:"http.route",HTTP_CLIENT_IP:"http.client_ip",AWS_DYNAMODB_TABLE_NAMES:"aws.dynamodb.table_names",AWS_DYNAMODB_CONSUMED_CAPACITY:"aws.dynamodb.consumed_capacity",AWS_DYNAMODB_ITEM_COLLECTION_METRICS:"aws.dynamodb.item_collection_metrics",AWS_DYNAMODB_PROVISIONED_READ_CAPACITY:"aws.dynamodb.provisioned_read_capacity",AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY:"aws.dynamodb.provisioned_write_capacity",AWS_DYNAMODB_CONSISTENT_READ:"aws.dynamodb.consistent_read",AWS_DYNAMODB_PROJECTION:"aws.dynamodb.projection",AWS_DYNAMODB_LIMIT:"aws.dynamodb.limit",AWS_DYNAMODB_ATTRIBUTES_TO_GET:"aws.dynamodb.attributes_to_get",AWS_DYNAMODB_INDEX_NAME:"aws.dynamodb.index_name",AWS_DYNAMODB_SELECT:"aws.dynamodb.select",AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES:"aws.dynamodb.global_secondary_indexes",AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES:"aws.dynamodb.local_secondary_indexes",AWS_DYNAMODB_EXCLUSIVE_START_TABLE:"aws.dynamodb.exclusive_start_table",AWS_DYNAMODB_TABLE_COUNT:"aws.dynamodb.table_count",AWS_DYNAMODB_SCAN_FORWARD:"aws.dynamodb.scan_forward",AWS_DYNAMODB_SEGMENT:"aws.dynamodb.segment",AWS_DYNAMODB_TOTAL_SEGMENTS:"aws.dynamodb.total_segments",AWS_DYNAMODB_COUNT:"aws.dynamodb.count",AWS_DYNAMODB_SCANNED_COUNT:"aws.dynamodb.scanned_count",AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS:"aws.dynamodb.attribute_definitions",AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES:"aws.dynamodb.global_secondary_index_updates",MESSAGING_SYSTEM:"messaging.system",MESSAGING_DESTINATION:"messaging.destination",MESSAGING_DESTINATION_KIND:"messaging.destination_kind",MESSAGING_TEMP_DESTINATION:"messaging.temp_destination",MESSAGING_PROTOCOL:"messaging.protocol",MESSAGING_PROTOCOL_VERSION:"messaging.protocol_version",MESSAGING_URL:"messaging.url",MESSAGING_MESSAGE_ID:"messaging.message_id",MESSAGING_CONVERSATION_ID:"messaging.conversation_id",MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES:"messaging.message_payload_size_bytes",MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES:"messaging.message_payload_compressed_size_bytes",MESSAGING_OPERATION:"messaging.operation",MESSAGING_RABBITMQ_ROUTING_KEY:"messaging.rabbitmq.routing_key",MESSAGING_KAFKA_MESSAGE_KEY:"messaging.kafka.message_key",MESSAGING_KAFKA_CONSUMER_GROUP:"messaging.kafka.consumer_group",MESSAGING_KAFKA_CLIENT_ID:"messaging.kafka.client_id",MESSAGING_KAFKA_PARTITION:"messaging.kafka.partition",MESSAGING_KAFKA_TOMBSTONE:"messaging.kafka.tombstone",RPC_SYSTEM:"rpc.system",RPC_SERVICE:"rpc.service",RPC_METHOD:"rpc.method",RPC_GRPC_STATUS_CODE:"rpc.grpc.status_code",RPC_JSONRPC_VERSION:"rpc.jsonrpc.version",RPC_JSONRPC_METHOD:"rpc.jsonrpc.method",RPC_JSONRPC_REQUEST_ID:"rpc.jsonrpc.request_id",RPC_JSONRPC_ERROR_CODE:"rpc.jsonrpc.error_code",RPC_JSONRPC_ERROR_MESSAGE:"rpc.jsonrpc.error_message"};var yC;(function(e){e.OTHER_SQL="other_sql",e.MSSQL="mssql",e.MYSQL="mysql",e.ORACLE="oracle",e.DB2="db2",e.POSTGRESQL="postgresql",e.REDSHIFT="redshift",e.HIVE="hive",e.CLOUDSCAPE="cloudscape",e.HSQLDB="hsqldb",e.PROGRESS="progress",e.MAXDB="maxdb",e.HANADB="hanadb",e.INGRES="ingres",e.FIRSTSQL="firstsql",e.EDB="edb",e.CACHE="cache",e.ADABAS="adabas",e.FIREBIRD="firebird",e.DERBY="derby",e.FILEMAKER="filemaker",e.INFORMIX="informix",e.INSTANTDB="instantdb",e.INTERBASE="interbase",e.MARIADB="mariadb",e.NETEZZA="netezza",e.PERVASIVE="pervasive",e.POINTBASE="pointbase",e.SQLITE="sqlite",e.SYBASE="sybase",e.TERADATA="teradata",e.VERTICA="vertica",e.H2="h2",e.COLDFUSION="coldfusion",e.CASSANDRA="cassandra",e.HBASE="hbase",e.MONGODB="mongodb",e.REDIS="redis",e.COUCHBASE="couchbase",e.COUCHDB="couchdb",e.COSMOSDB="cosmosdb",e.DYNAMODB="dynamodb",e.NEO4J="neo4j",e.GEODE="geode",e.ELASTICSEARCH="elasticsearch",e.MEMCACHED="memcached",e.COCKROACHDB="cockroachdb"})(yC=x.DbSystemValues||(x.DbSystemValues={}));var TC;(function(e){e.ALL="all",e.EACH_QUORUM="each_quorum",e.QUORUM="quorum",e.LOCAL_QUORUM="local_quorum",e.ONE="one",e.TWO="two",e.THREE="three",e.LOCAL_ONE="local_one",e.ANY="any",e.SERIAL="serial",e.LOCAL_SERIAL="local_serial"})(TC=x.DbCassandraConsistencyLevelValues||(x.DbCassandraConsistencyLevelValues={}));var AC;(function(e){e.DATASOURCE="datasource",e.HTTP="http",e.PUBSUB="pubsub",e.TIMER="timer",e.OTHER="other"})(AC=x.FaasTriggerValues||(x.FaasTriggerValues={}));var SC;(function(e){e.INSERT="insert",e.EDIT="edit",e.DELETE="delete"})(SC=x.FaasDocumentOperationValues||(x.FaasDocumentOperationValues={}));var IC;(function(e){e.AWS="aws",e.AZURE="azure",e.GCP="gcp"})(IC=x.FaasInvokedProviderValues||(x.FaasInvokedProviderValues={}));var CC;(function(e){e.IP_TCP="ip_tcp",e.IP_UDP="ip_udp",e.IP="ip",e.UNIX="unix",e.PIPE="pipe",e.INPROC="inproc",e.OTHER="other"})(CC=x.NetTransportValues||(x.NetTransportValues={}));var bC;(function(e){e.HTTP_1_0="1.0",e.HTTP_1_1="1.1",e.HTTP_2_0="2.0",e.SPDY="SPDY",e.QUIC="QUIC"})(bC=x.HttpFlavorValues||(x.HttpFlavorValues={}));var OC;(function(e){e.QUEUE="queue",e.TOPIC="topic"})(OC=x.MessagingDestinationKindValues||(x.MessagingDestinationKindValues={}));var PC;(function(e){e.RECEIVE="receive",e.PROCESS="process"})(PC=x.MessagingOperationValues||(x.MessagingOperationValues={}));var RC;(function(e){e[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED"})(RC=x.RpcGrpcStatusCodeValues||(x.RpcGrpcStatusCodeValues={}))});var Sh=l(Ir=>{"use strict";var NC=Ir&&Ir.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),DC=Ir&&Ir.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&NC(t,e,r)};Object.defineProperty(Ir,"__esModule",{value:!0});DC(Ah(),Ir)});var Ih=l(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.TelemetrySdkLanguageValues=ne.OsTypeValues=ne.HostArchValues=ne.AwsEcsLaunchtypeValues=ne.CloudPlatformValues=ne.CloudProviderValues=ne.ResourceAttributes=void 0;ne.ResourceAttributes={CLOUD_PROVIDER:"cloud.provider",CLOUD_ACCOUNT_ID:"cloud.account.id",CLOUD_REGION:"cloud.region",CLOUD_AVAILABILITY_ZONE:"cloud.availability_zone",CLOUD_PLATFORM:"cloud.platform",AWS_ECS_CONTAINER_ARN:"aws.ecs.container.arn",AWS_ECS_CLUSTER_ARN:"aws.ecs.cluster.arn",AWS_ECS_LAUNCHTYPE:"aws.ecs.launchtype",AWS_ECS_TASK_ARN:"aws.ecs.task.arn",AWS_ECS_TASK_FAMILY:"aws.ecs.task.family",AWS_ECS_TASK_REVISION:"aws.ecs.task.revision",AWS_EKS_CLUSTER_ARN:"aws.eks.cluster.arn",AWS_LOG_GROUP_NAMES:"aws.log.group.names",AWS_LOG_GROUP_ARNS:"aws.log.group.arns",AWS_LOG_STREAM_NAMES:"aws.log.stream.names",AWS_LOG_STREAM_ARNS:"aws.log.stream.arns",CONTAINER_NAME:"container.name",CONTAINER_ID:"container.id",CONTAINER_RUNTIME:"container.runtime",CONTAINER_IMAGE_NAME:"container.image.name",CONTAINER_IMAGE_TAG:"container.image.tag",DEPLOYMENT_ENVIRONMENT:"deployment.environment",DEVICE_ID:"device.id",DEVICE_MODEL_IDENTIFIER:"device.model.identifier",DEVICE_MODEL_NAME:"device.model.name",FAAS_NAME:"faas.name",FAAS_ID:"faas.id",FAAS_VERSION:"faas.version",FAAS_INSTANCE:"faas.instance",FAAS_MAX_MEMORY:"faas.max_memory",HOST_ID:"host.id",HOST_NAME:"host.name",HOST_TYPE:"host.type",HOST_ARCH:"host.arch",HOST_IMAGE_NAME:"host.image.name",HOST_IMAGE_ID:"host.image.id",HOST_IMAGE_VERSION:"host.image.version",K8S_CLUSTER_NAME:"k8s.cluster.name",K8S_NODE_NAME:"k8s.node.name",K8S_NODE_UID:"k8s.node.uid",K8S_NAMESPACE_NAME:"k8s.namespace.name",K8S_POD_UID:"k8s.pod.uid",K8S_POD_NAME:"k8s.pod.name",K8S_CONTAINER_NAME:"k8s.container.name",K8S_REPLICASET_UID:"k8s.replicaset.uid",K8S_REPLICASET_NAME:"k8s.replicaset.name",K8S_DEPLOYMENT_UID:"k8s.deployment.uid",K8S_DEPLOYMENT_NAME:"k8s.deployment.name",K8S_STATEFULSET_UID:"k8s.statefulset.uid",K8S_STATEFULSET_NAME:"k8s.statefulset.name",K8S_DAEMONSET_UID:"k8s.daemonset.uid",K8S_DAEMONSET_NAME:"k8s.daemonset.name",K8S_JOB_UID:"k8s.job.uid",K8S_JOB_NAME:"k8s.job.name",K8S_CRONJOB_UID:"k8s.cronjob.uid",K8S_CRONJOB_NAME:"k8s.cronjob.name",OS_TYPE:"os.type",OS_DESCRIPTION:"os.description",OS_NAME:"os.name",OS_VERSION:"os.version",PROCESS_PID:"process.pid",PROCESS_EXECUTABLE_NAME:"process.executable.name",PROCESS_EXECUTABLE_PATH:"process.executable.path",PROCESS_COMMAND:"process.command",PROCESS_COMMAND_LINE:"process.command_line",PROCESS_COMMAND_ARGS:"process.command_args",PROCESS_OWNER:"process.owner",PROCESS_RUNTIME_NAME:"process.runtime.name",PROCESS_RUNTIME_VERSION:"process.runtime.version",PROCESS_RUNTIME_DESCRIPTION:"process.runtime.description",SERVICE_NAME:"service.name",SERVICE_NAMESPACE:"service.namespace",SERVICE_INSTANCE_ID:"service.instance.id",SERVICE_VERSION:"service.version",TELEMETRY_SDK_NAME:"telemetry.sdk.name",TELEMETRY_SDK_LANGUAGE:"telemetry.sdk.language",TELEMETRY_SDK_VERSION:"telemetry.sdk.version",TELEMETRY_AUTO_VERSION:"telemetry.auto.version",WEBENGINE_NAME:"webengine.name",WEBENGINE_VERSION:"webengine.version",WEBENGINE_DESCRIPTION:"webengine.description"};var wC;(function(e){e.AWS="aws",e.AZURE="azure",e.GCP="gcp"})(wC=ne.CloudProviderValues||(ne.CloudProviderValues={}));var xC;(function(e){e.AWS_EC2="aws_ec2",e.AWS_ECS="aws_ecs",e.AWS_EKS="aws_eks",e.AWS_LAMBDA="aws_lambda",e.AWS_ELASTIC_BEANSTALK="aws_elastic_beanstalk",e.AZURE_VM="azure_vm",e.AZURE_CONTAINER_INSTANCES="azure_container_instances",e.AZURE_AKS="azure_aks",e.AZURE_FUNCTIONS="azure_functions",e.AZURE_APP_SERVICE="azure_app_service",e.GCP_COMPUTE_ENGINE="gcp_compute_engine",e.GCP_CLOUD_RUN="gcp_cloud_run",e.GCP_KUBERNETES_ENGINE="gcp_kubernetes_engine",e.GCP_CLOUD_FUNCTIONS="gcp_cloud_functions",e.GCP_APP_ENGINE="gcp_app_engine"})(xC=ne.CloudPlatformValues||(ne.CloudPlatformValues={}));var MC;(function(e){e.EC2="ec2",e.FARGATE="fargate"})(MC=ne.AwsEcsLaunchtypeValues||(ne.AwsEcsLaunchtypeValues={}));var LC;(function(e){e.AMD64="amd64",e.ARM32="arm32",e.ARM64="arm64",e.IA64="ia64",e.PPC32="ppc32",e.PPC64="ppc64",e.X86="x86"})(LC=ne.HostArchValues||(ne.HostArchValues={}));var qC;(function(e){e.WINDOWS="windows",e.LINUX="linux",e.DARWIN="darwin",e.FREEBSD="freebsd",e.NETBSD="netbsd",e.OPENBSD="openbsd",e.DRAGONFLYBSD="dragonflybsd",e.HPUX="hpux",e.AIX="aix",e.SOLARIS="solaris",e.Z_OS="z_os"})(qC=ne.OsTypeValues||(ne.OsTypeValues={}));var jC;(function(e){e.CPP="cpp",e.DOTNET="dotnet",e.ERLANG="erlang",e.GO="go",e.JAVA="java",e.NODEJS="nodejs",e.PHP="php",e.PYTHON="python",e.RUBY="ruby",e.WEBJS="webjs"})(jC=ne.TelemetrySdkLanguageValues||(ne.TelemetrySdkLanguageValues={}))});var Ch=l(Cr=>{"use strict";var kC=Cr&&Cr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),HC=Cr&&Cr.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&kC(t,e,r)};Object.defineProperty(Cr,"__esModule",{value:!0});HC(Ih(),Cr)});var In=l(Wt=>{"use strict";var UC=Wt&&Wt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),bh=Wt&&Wt.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&UC(t,e,r)};Object.defineProperty(Wt,"__esModule",{value:!0});bh(Sh(),Wt);bh(Ch(),Wt)});var Oh=l(As=>{"use strict";Object.defineProperty(As,"__esModule",{value:!0});As.SDK_INFO=void 0;var BC=Ts(),ki=In();As.SDK_INFO={[ki.ResourceAttributes.TELEMETRY_SDK_NAME]:"opentelemetry",[ki.ResourceAttributes.PROCESS_RUNTIME_NAME]:"node",[ki.ResourceAttributes.TELEMETRY_SDK_LANGUAGE]:ki.TelemetrySdkLanguageValues.NODEJS,[ki.ResourceAttributes.TELEMETRY_SDK_VERSION]:BC.VERSION}});var Ph=l(Ss=>{"use strict";Object.defineProperty(Ss,"__esModule",{value:!0});Ss.unrefTimer=void 0;function FC(e){e.unref()}Ss.unrefTimer=FC});var Rh=l(ze=>{"use strict";var GC=ze&&ze.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Cn=ze&&ze.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&GC(t,e,r)};Object.defineProperty(ze,"__esModule",{value:!0});Cn(vh(),ze);Cn(gh(),ze);Cn(yh(),ze);Cn(Th(),ze);Cn(Oh(),ze);Cn(Ph(),ze)});var hc=l(br=>{"use strict";var VC=br&&br.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),$C=br&&br.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&VC(t,e,r)};Object.defineProperty(br,"__esModule",{value:!0});$C(Rh(),br)});var wh=l(le=>{"use strict";Object.defineProperty(le,"__esModule",{value:!0});le.isTimeInput=le.isTimeInputHrTime=le.hrTimeToMicroseconds=le.hrTimeToMilliseconds=le.hrTimeToNanoseconds=le.hrTimeToTimeStamp=le.hrTimeDuration=le.timeInputToHrTime=le.hrTime=void 0;var _c=hc(),vc=9,Hi=Math.pow(10,vc);function Is(e){let t=e/1e3,r=Math.trunc(t),n=Number((t-r).toFixed(vc))*Hi;return[r,n]}function Nh(){let e=_c.otperformance.timeOrigin;if(typeof e!="number"){let t=_c.otperformance;e=t.timing&&t.timing.fetchStart}return e}function Dh(e){let t=Is(Nh()),r=Is(typeof e=="number"?e:_c.otperformance.now()),n=t[0]+r[0],i=t[1]+r[1];return i>Hi&&(i-=Hi,n+=1),[n,i]}le.hrTime=Dh;function zC(e){if(gc(e))return e;if(typeof e=="number")return e<Nh()?Dh(e):Is(e);if(e instanceof Date)return Is(e.getTime());throw TypeError("Invalid input type")}le.timeInputToHrTime=zC;function XC(e,t){let r=t[0]-e[0],n=t[1]-e[1];return n<0&&(r-=1,n+=Hi),[r,n]}le.hrTimeDuration=XC;function KC(e){let t=vc,r=`${"0".repeat(t)}${e[1]}Z`,n=r.substr(r.length-t-1);return new Date(e[0]*1e3).toISOString().replace("000Z",n)}le.hrTimeToTimeStamp=KC;function YC(e){return e[0]*Hi+e[1]}le.hrTimeToNanoseconds=YC;function QC(e){return Math.round(e[0]*1e3+e[1]/1e6)}le.hrTimeToMilliseconds=QC;function WC(e){return Math.round(e[0]*1e6+e[1]/1e3)}le.hrTimeToMicroseconds=WC;function gc(e){return Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"}le.isTimeInputHrTime=gc;function ZC(e){return gc(e)||typeof e=="number"||e instanceof Date}le.isTimeInput=ZC});var Mh=l(xh=>{"use strict";Object.defineProperty(xh,"__esModule",{value:!0})});var Lh=l(Ui=>{"use strict";Object.defineProperty(Ui,"__esModule",{value:!0});Ui.ExportResultCode=void 0;var JC;(function(e){e[e.SUCCESS=0]="SUCCESS",e[e.FAILED=1]="FAILED"})(JC=Ui.ExportResultCode||(Ui.ExportResultCode={}))});var jh=l(Cs=>{"use strict";Object.defineProperty(Cs,"__esModule",{value:!0});Cs.CompositePropagator=void 0;var qh=z(),Ec=class{constructor(t={}){var r;this._propagators=(r=t.propagators)!==null&&r!==void 0?r:[],this._fields=Array.from(new Set(this._propagators.map(n=>typeof n.fields=="function"?n.fields():[]).reduce((n,i)=>n.concat(i),[])))}inject(t,r,n){for(let i of this._propagators)try{i.inject(t,r,n)}catch(a){qh.diag.warn(`Failed to inject with ${i.constructor.name}. Err: ${a.message}`)}}extract(t,r,n){return this._propagators.reduce((i,a)=>{try{return a.extract(i,r,n)}catch(s){qh.diag.warn(`Failed to inject with ${a.constructor.name}. Err: ${s.message}`)}return i},t)}fields(){return this._fields.slice()}};Cs.CompositePropagator=Ec});var kh=l(bn=>{"use strict";Object.defineProperty(bn,"__esModule",{value:!0});bn.validateValue=bn.validateKey=void 0;var mc="[_0-9a-z-*/]",eb=`[a-z]${mc}{0,255}`,tb=`[a-z0-9]${mc}{0,240}@[a-z]${mc}{0,13}`,rb=new RegExp(`^(?:${eb}|${tb})$`),nb=/^[ -~]{0,255}[!-~]$/,ib=/,|=/;function ab(e){return rb.test(e)}bn.validateKey=ab;function sb(e){return nb.test(e)&&!ib.test(e)}bn.validateValue=sb});var yc=l(bs=>{"use strict";Object.defineProperty(bs,"__esModule",{value:!0});bs.TraceState=void 0;var Hh=kh(),Uh=32,ob=512,Bh=",",Fh="=",Bi=class{constructor(t){this._internalState=new Map,t&&this._parse(t)}set(t,r){let n=this._clone();return n._internalState.has(t)&&n._internalState.delete(t),n._internalState.set(t,r),n}unset(t){let r=this._clone();return r._internalState.delete(t),r}get(t){return this._internalState.get(t)}serialize(){return this._keys().reduce((t,r)=>(t.push(r+Fh+this.get(r)),t),[]).join(Bh)}_parse(t){t.length>ob||(this._internalState=t.split(Bh).reverse().reduce((r,n)=>{let i=n.trim(),a=i.indexOf(Fh);if(a!==-1){let s=i.slice(0,a),o=i.slice(a+1,n.length);Hh.validateKey(s)&&Hh.validateValue(o)&&r.set(s,o)}return r},new Map),this._internalState.size>Uh&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,Uh))))}_keys(){return Array.from(this._internalState.keys()).reverse()}_clone(){let t=new Bi;return t._internalState=new Map(this._internalState),t}};bs.TraceState=Bi});var Vh=l(Ce=>{"use strict";Object.defineProperty(Ce,"__esModule",{value:!0});Ce.HttpTraceContextPropagator=Ce.parseTraceParent=Ce.TRACE_STATE_HEADER=Ce.TRACE_PARENT_HEADER=void 0;var Os=z(),ub=ps(),cb=yc();Ce.TRACE_PARENT_HEADER="traceparent";Ce.TRACE_STATE_HEADER="tracestate";var lb="00",fb="(?!ff)[\\da-f]{2}",pb="(?![0]{32})[\\da-f]{32}",db="(?![0]{16})[\\da-f]{16}",hb="[\\da-f]{2}",_b=new RegExp(`^\\s?(${fb})-(${pb})-(${db})-(${hb})(-.*)?\\s?$`);function Gh(e){let t=_b.exec(e);return!t||t[1]==="00"&&t[5]?null:{traceId:t[2],spanId:t[3],traceFlags:parseInt(t[4],16)}}Ce.parseTraceParent=Gh;var Tc=class{inject(t,r,n){let i=Os.trace.getSpanContext(t);if(!i||ub.isTracingSuppressed(t)||!Os.isSpanContextValid(i))return;let a=`${lb}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||Os.TraceFlags.NONE).toString(16)}`;n.set(r,Ce.TRACE_PARENT_HEADER,a),i.traceState&&n.set(r,Ce.TRACE_STATE_HEADER,i.traceState.serialize())}extract(t,r,n){let i=n.get(r,Ce.TRACE_PARENT_HEADER);if(!i)return t;let a=Array.isArray(i)?i[0]:i;if(typeof a!="string")return t;let s=Gh(a);if(!s)return t;s.isRemote=!0;let o=n.get(r,Ce.TRACE_STATE_HEADER);if(o){let u=Array.isArray(o)?o.join(","):o;s.traceState=new cb.TraceState(typeof u=="string"?u:void 0)}return Os.trace.setSpanContext(t,s)}fields(){return[Ce.TRACE_PARENT_HEADER,Ce.TRACE_STATE_HEADER]}};Ce.HttpTraceContextPropagator=Tc});var zh=l($h=>{"use strict";Object.defineProperty($h,"__esModule",{value:!0})});var Xh=l(nt=>{"use strict";Object.defineProperty(nt,"__esModule",{value:!0});nt.getRPCMetadata=nt.deleteRPCMetadata=nt.setRPCMetadata=nt.RPCType=void 0;var vb=z(),Ac=vb.createContextKey("OpenTelemetry SDK Context Key RPC_METADATA"),gb;(function(e){e.HTTP="http"})(gb=nt.RPCType||(nt.RPCType={}));function Eb(e,t){return e.setValue(Ac,t)}nt.setRPCMetadata=Eb;function mb(e){return e.deleteValue(Ac)}nt.deleteRPCMetadata=mb;function yb(e){return e.getValue(Ac)}nt.getRPCMetadata=yb});var Ic=l(Ps=>{"use strict";Object.defineProperty(Ps,"__esModule",{value:!0});Ps.AlwaysOffSampler=void 0;var Tb=z(),Sc=class{shouldSample(){return{decision:Tb.SamplingDecision.NOT_RECORD}}toString(){return"AlwaysOffSampler"}};Ps.AlwaysOffSampler=Sc});var bc=l(Rs=>{"use strict";Object.defineProperty(Rs,"__esModule",{value:!0});Rs.AlwaysOnSampler=void 0;var Ab=z(),Cc=class{shouldSample(){return{decision:Ab.SamplingDecision.RECORD_AND_SAMPLED}}toString(){return"AlwaysOnSampler"}};Rs.AlwaysOnSampler=Cc});var Yh=l(Ds=>{"use strict";Object.defineProperty(Ds,"__esModule",{value:!0});Ds.ParentBasedSampler=void 0;var Ns=z(),Sb=lc(),Kh=Ic(),Oc=bc(),Pc=class{constructor(t){var r,n,i,a;this._root=t.root,this._root||(Sb.globalErrorHandler(new Error("ParentBasedSampler must have a root sampler configured")),this._root=new Oc.AlwaysOnSampler),this._remoteParentSampled=(r=t.remoteParentSampled)!==null&&r!==void 0?r:new Oc.AlwaysOnSampler,this._remoteParentNotSampled=(n=t.remoteParentNotSampled)!==null&&n!==void 0?n:new Kh.AlwaysOffSampler,this._localParentSampled=(i=t.localParentSampled)!==null&&i!==void 0?i:new Oc.AlwaysOnSampler,this._localParentNotSampled=(a=t.localParentNotSampled)!==null&&a!==void 0?a:new Kh.AlwaysOffSampler}shouldSample(t,r,n,i,a,s){let o=Ns.trace.getSpanContext(t);return!o||!Ns.isSpanContextValid(o)?this._root.shouldSample(t,r,n,i,a,s):o.isRemote?o.traceFlags&Ns.TraceFlags.SAMPLED?this._remoteParentSampled.shouldSample(t,r,n,i,a,s):this._remoteParentNotSampled.shouldSample(t,r,n,i,a,s):o.traceFlags&Ns.TraceFlags.SAMPLED?this._localParentSampled.shouldSample(t,r,n,i,a,s):this._localParentNotSampled.shouldSample(t,r,n,i,a,s)}toString(){return`ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`}};Ds.ParentBasedSampler=Pc});var Qh=l(ws=>{"use strict";Object.defineProperty(ws,"__esModule",{value:!0});ws.TraceIdRatioBasedSampler=void 0;var Rc=z(),Nc=class{constructor(t=0){this._ratio=t,this._ratio=this._normalize(t),this._upperBound=Math.floor(this._ratio*4294967295)}shouldSample(t,r){return{decision:Rc.isValidTraceId(r)&&this._accumulate(r)<this._upperBound?Rc.SamplingDecision.RECORD_AND_SAMPLED:Rc.SamplingDecision.NOT_RECORD}}toString(){return`TraceIdRatioBased{${this._ratio}}`}_normalize(t){return typeof t!="number"||isNaN(t)?0:t>=1?1:t<=0?0:t}_accumulate(t){let r=0;for(let n=0;n<t.length/8;n++){let i=n*8,a=parseInt(t.slice(i,i+8),16);r=(r^a)>>>0}return r}};ws.TraceIdRatioBasedSampler=Nc});var Zh=l(On=>{"use strict";Object.defineProperty(On,"__esModule",{value:!0});On.isUrlIgnored=On.urlMatches=void 0;function Wh(e,t){return typeof t=="string"?e===t:t.test(e)}On.urlMatches=Wh;function Ib(e,t){if(!t)return!1;for(let r of t)if(Wh(e,r))return!0;return!1}On.isUrlIgnored=Ib});var Jh=l(xs=>{"use strict";Object.defineProperty(xs,"__esModule",{value:!0});xs.isWrapped=void 0;function Cb(e){return typeof e=="function"&&typeof e.__original=="function"&&typeof e.__unwrap=="function"&&e.__wrapped===!0}xs.isWrapped=Cb});var Xe=l(M=>{"use strict";var bb=M&&M.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Y=M&&M.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&bb(t,e,r)};Object.defineProperty(M,"__esModule",{value:!0});M.baggageUtils=void 0;Y(lh(),M);Y(dh(),M);Y(lc(),M);Y(cc(),M);Y(wh(),M);Y(Mh(),M);Y(Lh(),M);Y(Ts(),M);M.baggageUtils=ac();Y(hc(),M);Y(jh(),M);Y(Vh(),M);Y(zh(),M);Y(Xh(),M);Y(Ic(),M);Y(bc(),M);Y(Yh(),M);Y(Qh(),M);Y(ps(),M);Y(yc(),M);Y(pc(),M);Y(fc(),M);Y(Zh(),M);Y(Jh(),M);Y(Ts(),M)});var e_=l(Ms=>{"use strict";Object.defineProperty(Ms,"__esModule",{value:!0});Ms.ExceptionEventName=void 0;Ms.ExceptionEventName="exception"});var wc=l(Ls=>{"use strict";Object.defineProperty(Ls,"__esModule",{value:!0});Ls.Span=void 0;var Zt=z(),ft=Xe(),Or=In(),Ob=e_(),Dc=class{constructor(t,r,n,i,a,s,o=[],u=ft.hrTime()){this.attributes={},this.links=[],this.events=[],this.status={code:Zt.SpanStatusCode.UNSET},this.endTime=[0,0],this._ended=!1,this._duration=[-1,-1],this.name=n,this._spanContext=i,this.parentSpanId=s,this.kind=a,this.links=o,this.startTime=ft.timeInputToHrTime(u),this.resource=t.resource,this.instrumentationLibrary=t.instrumentationLibrary,this._spanLimits=t.getSpanLimits(),this._spanProcessor=t.getActiveSpanProcessor(),this._spanProcessor.onStart(this,r)}spanContext(){return this._spanContext}setAttribute(t,r){return r==null||this._isSpanEnded()?this:t.length===0?(Zt.diag.warn(`Invalid attribute key: ${t}`),this):ft.isAttributeValue(r)?Object.keys(this.attributes).length>=this._spanLimits.attributeCountLimit&&!Object.prototype.hasOwnProperty.call(this.attributes,t)?this:(this.attributes[t]=r,this):(Zt.diag.warn(`Invalid attribute value set for key: ${t}`),this)}setAttributes(t){for(let[r,n]of Object.entries(t))this.setAttribute(r,n);return this}addEvent(t,r,n){return this._isSpanEnded()?this:(this.events.length>=this._spanLimits.eventCountLimit&&(Zt.diag.warn("Dropping extra events."),this.events.shift()),ft.isTimeInput(r)&&(typeof n>"u"&&(n=r),r=void 0),typeof n>"u"&&(n=ft.hrTime()),this.events.push({name:t,attributes:r,time:ft.timeInputToHrTime(n)}),this)}setStatus(t){return this._isSpanEnded()?this:(this.status=t,this)}updateName(t){return this._isSpanEnded()?this:(this.name=t,this)}end(t=ft.hrTime()){if(this._isSpanEnded()){Zt.diag.error("You can only call end() on a span once.");return}this._ended=!0,this.endTime=ft.timeInputToHrTime(t),this._duration=ft.hrTimeDuration(this.startTime,this.endTime),this._duration[0]<0&&Zt.diag.warn("Inconsistent start and end time, startTime > endTime",this.startTime,this.endTime),this._spanProcessor.onEnd(this)}isRecording(){return this._ended===!1}recordException(t,r=ft.hrTime()){let n={};typeof t=="string"?n[Or.SemanticAttributes.EXCEPTION_MESSAGE]=t:t&&(t.code?n[Or.SemanticAttributes.EXCEPTION_TYPE]=t.code.toString():t.name&&(n[Or.SemanticAttributes.EXCEPTION_TYPE]=t.name),t.message&&(n[Or.SemanticAttributes.EXCEPTION_MESSAGE]=t.message),t.stack&&(n[Or.SemanticAttributes.EXCEPTION_STACKTRACE]=t.stack)),n[Or.SemanticAttributes.EXCEPTION_TYPE]||n[Or.SemanticAttributes.EXCEPTION_MESSAGE]?this.addEvent(Ob.ExceptionEventName,n,r):Zt.diag.warn(`Failed to record an exception ${t}`)}get duration(){return this._duration}get ended(){return this._ended}_isSpanEnded(){return this._ended&&Zt.diag.warn("Can not execute the operation on ended Span {traceId: %s, spanId: %s}",this._spanContext.traceId,this._spanContext.spanId),this._ended}};Ls.Span=Dc});var xc=l(Rn=>{"use strict";Object.defineProperty(Rn,"__esModule",{value:!0});Rn.buildSamplerFromEnv=Rn.DEFAULT_CONFIG=void 0;var qs=z(),ie=Xe(),Pb=ie.getEnv(),Rb=ie.TracesSamplerValues.AlwaysOn;Rn.DEFAULT_CONFIG={sampler:r_(Pb),forceFlushTimeoutMillis:3e4,spanLimits:{attributeCountLimit:ie.getEnv().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,linkCountLimit:ie.getEnv().OTEL_SPAN_LINK_COUNT_LIMIT,eventCountLimit:ie.getEnv().OTEL_SPAN_EVENT_COUNT_LIMIT}};function r_(e=ie.getEnv()){switch(e.OTEL_TRACES_SAMPLER){case ie.TracesSamplerValues.AlwaysOn:return new ie.AlwaysOnSampler;case ie.TracesSamplerValues.AlwaysOff:return new ie.AlwaysOffSampler;case ie.TracesSamplerValues.ParentBasedAlwaysOn:return new ie.ParentBasedSampler({root:new ie.AlwaysOnSampler});case ie.TracesSamplerValues.ParentBasedAlwaysOff:return new ie.ParentBasedSampler({root:new ie.AlwaysOffSampler});case ie.TracesSamplerValues.TraceIdRatio:return new ie.TraceIdRatioBasedSampler(t_(e));case ie.TracesSamplerValues.ParentBasedTraceIdRatio:return new ie.ParentBasedSampler({root:new ie.TraceIdRatioBasedSampler(t_(e))});default:return qs.diag.error(`OTEL_TRACES_SAMPLER value "${e.OTEL_TRACES_SAMPLER} invalid, defaulting to ${Rb}".`),new ie.AlwaysOnSampler}}Rn.buildSamplerFromEnv=r_;var Pn=1;function t_(e){if(e.OTEL_TRACES_SAMPLER_ARG===void 0||e.OTEL_TRACES_SAMPLER_ARG==="")return qs.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${Pn}.`),Pn;let t=Number(e.OTEL_TRACES_SAMPLER_ARG);return isNaN(t)?(qs.diag.error(`OTEL_TRACES_SAMPLER_ARG=${e.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${Pn}.`),Pn):t<0||t>1?(qs.diag.error(`OTEL_TRACES_SAMPLER_ARG=${e.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${Pn}.`),Pn):t}});var n_=l(js=>{"use strict";Object.defineProperty(js,"__esModule",{value:!0});js.mergeConfig=void 0;var Mc=xc();function Nb(e){let t={sampler:Mc.buildSamplerFromEnv()},r=Object.assign({},Mc.DEFAULT_CONFIG,t,e);return r.spanLimits=Object.assign({},Mc.DEFAULT_CONFIG.spanLimits,e.spanLimits||{}),r}js.mergeConfig=Nb});var i_=l(ks=>{"use strict";Object.defineProperty(ks,"__esModule",{value:!0});ks.Tracer=void 0;var ve=z(),Lc=Xe(),Db=wc(),wb=n_(),qc=class{constructor(t,r,n){this._tracerProvider=n;let i=wb.mergeConfig(r);this._sampler=i.sampler,this._spanLimits=i.spanLimits,this._idGenerator=r.idGenerator||new Lc.RandomIdGenerator,this.resource=n.resource,this.instrumentationLibrary=t}startSpan(t,r={},n=ve.context.active()){var i,a;if(Lc.isTracingSuppressed(n))return ve.diag.debug("Instrumentation suppressed, returning Noop Span"),ve.trace.wrapSpanContext(ve.INVALID_SPAN_CONTEXT);let s=xb(r,n),o=this._idGenerator.generateSpanId(),u,c,f;!s||!ve.trace.isSpanContextValid(s)?u=this._idGenerator.generateTraceId():(u=s.traceId,c=s.traceState,f=s.spanId);let p=(i=r.kind)!==null&&i!==void 0?i:ve.SpanKind.INTERNAL,d=(a=r.links)!==null&&a!==void 0?a:[],h=Lc.sanitizeAttributes(r.attributes),E=this._sampler.shouldSample(r.root?ve.trace.setSpanContext(n,ve.INVALID_SPAN_CONTEXT):n,u,t,p,h,d),A=E.decision===ve.SamplingDecision.RECORD_AND_SAMPLED?ve.TraceFlags.SAMPLED:ve.TraceFlags.NONE,j={traceId:u,spanId:o,traceFlags:A,traceState:c};if(E.decision===ve.SamplingDecision.NOT_RECORD)return ve.diag.debug("Recording is off, propagating context in a non-recording span"),ve.trace.wrapSpanContext(j);let se=new Db.Span(this,n,t,j,p,f,d,r.startTime);return se.setAttributes(Object.assign(h,E.attributes)),se}startActiveSpan(t,r,n,i){let a,s,o;if(arguments.length<2)return;arguments.length===2?o=r:arguments.length===3?(a=r,o=n):(a=r,s=n,o=i);let u=s??ve.context.active(),c=this.startSpan(t,a,u),f=ve.trace.setSpan(u,c);return ve.context.with(f,o,void 0,c)}getSpanLimits(){return this._spanLimits}getActiveSpanProcessor(){return this._tracerProvider.getActiveSpanProcessor()}};ks.Tracer=qc;function xb(e,t){if(!e.root)return ve.trace.getSpanContext(t)}});var a_=l(Hs=>{"use strict";Object.defineProperty(Hs,"__esModule",{value:!0});Hs.defaultServiceName=void 0;function Mb(){return`unknown_service:${process.argv0}`}Hs.defaultServiceName=Mb});var o_=l(Us=>{"use strict";Object.defineProperty(Us,"__esModule",{value:!0});Us.detectResources=void 0;var s_=kc(),jc=z(),Lb=__webpack_require__(970),qb=async(e={})=>{let t=Object.assign(e),r=await Promise.all((t.detectors||[]).map(async n=>{try{let i=await n.detect(t);return jc.diag.debug(`${n.constructor.name} found resource.`,i),i}catch(i){return jc.diag.debug(`${n.constructor.name} failed: ${i.message}`),s_.Resource.empty()}}));return jb(r),r.reduce((n,i)=>n.merge(i),s_.Resource.empty())};Us.detectResources=qb;var jb=e=>{e.forEach(t=>{if(Object.keys(t.attributes).length>0){let r=Lb.inspect(t.attributes,{depth:2,breakLength:1/0,sorted:!0,compact:!1});jc.diag.verbose(r)}})}});var u_=l(Bs=>{"use strict";Object.defineProperty(Bs,"__esModule",{value:!0});Bs.envDetector=void 0;var kb=z(),Hb=Xe(),Ub=In(),Bb=Fs(),Hc=class{constructor(){this._MAX_LENGTH=255,this._COMMA_SEPARATOR=",",this._LABEL_KEY_VALUE_SPLITTER="=",this._ERROR_MESSAGE_INVALID_CHARS="should be a ASCII string with a length greater than 0 and not exceed "+this._MAX_LENGTH+" characters.",this._ERROR_MESSAGE_INVALID_VALUE="should be a ASCII string with a length not exceed "+this._MAX_LENGTH+" characters."}async detect(t){let r={},n=Hb.getEnv(),i=n.OTEL_RESOURCE_ATTRIBUTES,a=n.OTEL_SERVICE_NAME;if(i)try{let s=this._parseResourceAttributes(i);Object.assign(r,s)}catch(s){kb.diag.debug(`EnvDetector failed: ${s.message}`)}return a&&(r[Ub.ResourceAttributes.SERVICE_NAME]=a),new Bb.Resource(r)}_parseResourceAttributes(t){if(!t)return{};let r={},n=t.split(this._COMMA_SEPARATOR,-1);for(let i of n){let a=i.split(this._LABEL_KEY_VALUE_SPLITTER,-1);if(a.length!==2)continue;let[s,o]=a;if(s=s.trim(),o=o.trim().split('^"|"$').join(""),!this._isValidAndNotEmpty(s))throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);if(!this._isValid(o))throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);r[s]=o}return r}_isValid(t){return t.length<=this._MAX_LENGTH&&this._isPrintableString(t)}_isPrintableString(t){for(let r=0;r<t.length;r++){let n=t.charAt(r);if(n<=" "||n>="~")return!1}return!0}_isValidAndNotEmpty(t){return t.length>0&&this._isValid(t)}};Bs.envDetector=new Hc});var l_=l(Gs=>{"use strict";Object.defineProperty(Gs,"__esModule",{value:!0});Gs.processDetector=void 0;var Fb=z(),Jt=In(),c_=Fs(),Uc=class{async detect(t){let r={[Jt.ResourceAttributes.PROCESS_PID]:process.pid,[Jt.ResourceAttributes.PROCESS_EXECUTABLE_NAME]:process.title||"",[Jt.ResourceAttributes.PROCESS_COMMAND]:process.argv[1]||"",[Jt.ResourceAttributes.PROCESS_COMMAND_LINE]:process.argv.join(" ")||""};return this._getResourceAttributes(r,t)}_getResourceAttributes(t,r){return t[Jt.ResourceAttributes.PROCESS_EXECUTABLE_NAME]===""||t[Jt.ResourceAttributes.PROCESS_EXECUTABLE_PATH]===""||t[Jt.ResourceAttributes.PROCESS_COMMAND]===""||t[Jt.ResourceAttributes.PROCESS_COMMAND_LINE]===""?(Fb.diag.debug("ProcessDetector failed: Unable to find required process resources. "),c_.Resource.empty()):new c_.Resource(Object.assign({},t))}};Gs.processDetector=new Uc});var p_=l(er=>{"use strict";var Gb=er&&er.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),f_=er&&er.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Gb(t,e,r)};Object.defineProperty(er,"__esModule",{value:!0});f_(u_(),er);f_(l_(),er)});var d_=l(bt=>{"use strict";var Vb=bt&&bt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Bc=bt&&bt.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Vb(t,e,r)};Object.defineProperty(bt,"__esModule",{value:!0});Bc(a_(),bt);Bc(o_(),bt);Bc(p_(),bt)});var Fc=l(Pr=>{"use strict";var $b=Pr&&Pr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),zb=Pr&&Pr.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&$b(t,e,r)};Object.defineProperty(Pr,"__esModule",{value:!0});zb(d_(),Pr)});var kc=l(Vs=>{"use strict";Object.defineProperty(Vs,"__esModule",{value:!0});Vs.Resource=void 0;var Rr=In(),Gc=Xe(),Xb=Fc(),Ot=class{constructor(t){this.attributes=t}static empty(){return Ot.EMPTY}static default(){return new Ot({[Rr.ResourceAttributes.SERVICE_NAME]:Xb.defaultServiceName(),[Rr.ResourceAttributes.TELEMETRY_SDK_LANGUAGE]:Gc.SDK_INFO[Rr.ResourceAttributes.TELEMETRY_SDK_LANGUAGE],[Rr.ResourceAttributes.TELEMETRY_SDK_NAME]:Gc.SDK_INFO[Rr.ResourceAttributes.TELEMETRY_SDK_NAME],[Rr.ResourceAttributes.TELEMETRY_SDK_VERSION]:Gc.SDK_INFO[Rr.ResourceAttributes.TELEMETRY_SDK_VERSION]})}merge(t){if(!t||!Object.keys(t.attributes).length)return this;let r=Object.assign({},this.attributes,t.attributes);return new Ot(r)}};Vs.Resource=Ot;Ot.EMPTY=new Ot({})});var __=l(h_=>{"use strict";Object.defineProperty(h_,"__esModule",{value:!0})});var g_=l(v_=>{"use strict";Object.defineProperty(v_,"__esModule",{value:!0})});var Fs=l(pt=>{"use strict";var Kb=pt&&pt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),$s=pt&&pt.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&Kb(t,e,r)};Object.defineProperty(pt,"__esModule",{value:!0});$s(kc(),pt);$s(Fc(),pt);$s(__(),pt);$s(g_(),pt)});var E_=l(zs=>{"use strict";Object.defineProperty(zs,"__esModule",{value:!0});zs.MultiSpanProcessor=void 0;var Yb=Xe(),Vc=class{constructor(t){this._spanProcessors=t}forceFlush(){let t=[];for(let r of this._spanProcessors)t.push(r.forceFlush());return new Promise(r=>{Promise.all(t).then(()=>{r()}).catch(n=>{Yb.globalErrorHandler(n||new Error("MultiSpanProcessor: forceFlush failed")),r()})})}onStart(t,r){for(let n of this._spanProcessors)n.onStart(t,r)}onEnd(t){for(let r of this._spanProcessors)r.onEnd(t)}shutdown(){let t=[];for(let r of this._spanProcessors)t.push(r.shutdown());return new Promise((r,n)=>{Promise.all(t).then(()=>{r()},n)})}};zs.MultiSpanProcessor=Vc});var zc=l(Xs=>{"use strict";Object.defineProperty(Xs,"__esModule",{value:!0});Xs.NoopSpanProcessor=void 0;var $c=class{onStart(t,r){}onEnd(t){}shutdown(){return Promise.resolve()}forceFlush(){return Promise.resolve()}};Xs.NoopSpanProcessor=$c});var X_=l((Fi,Nn)=>{var Qb=200,P_="__lodash_hash_undefined__",Wb=800,Zb=16,R_=9007199254740991,N_="[object Arguments]",Jb="[object Array]",eO="[object AsyncFunction]",tO="[object Boolean]",rO="[object Date]",nO="[object Error]",D_="[object Function]",iO="[object GeneratorFunction]",aO="[object Map]",sO="[object Number]",oO="[object Null]",w_="[object Object]",uO="[object Proxy]",cO="[object RegExp]",lO="[object Set]",fO="[object String]",pO="[object Undefined]",dO="[object WeakMap]",hO="[object ArrayBuffer]",_O="[object DataView]",vO="[object Float32Array]",gO="[object Float64Array]",EO="[object Int8Array]",mO="[object Int16Array]",yO="[object Int32Array]",TO="[object Uint8Array]",AO="[object Uint8ClampedArray]",SO="[object Uint16Array]",IO="[object Uint32Array]",CO=/[\\^$.*+?()[\]{}|]/g,bO=/^\[object .+?Constructor\]$/,OO=/^(?:0|[1-9]\d*)$/,X={};X[vO]=X[gO]=X[EO]=X[mO]=X[yO]=X[TO]=X[AO]=X[SO]=X[IO]=!0;X[N_]=X[Jb]=X[hO]=X[tO]=X[_O]=X[rO]=X[nO]=X[D_]=X[aO]=X[sO]=X[w_]=X[cO]=X[lO]=X[fO]=X[dO]=!1;var x_=typeof global=="object"&&global&&global.Object===Object&&global,PO=typeof self=="object"&&self&&self.Object===Object&&self,$i=x_||PO||Function("return this")(),M_=typeof Fi=="object"&&Fi&&!Fi.nodeType&&Fi,Gi=M_&&typeof Nn=="object"&&Nn&&!Nn.nodeType&&Nn,L_=Gi&&Gi.exports===M_,Xc=L_&&x_.process,m_=function(){try{var e=Gi&&Gi.require&&Gi.require("util").types;return e||Xc&&Xc.binding&&Xc.binding("util")}catch{}}(),y_=m_&&m_.isTypedArray;function RO(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function NO(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function DO(e){return function(t){return e(t)}}function wO(e,t){return e==null?void 0:e[t]}function xO(e,t){return function(r){return e(t(r))}}var MO=Array.prototype,LO=Function.prototype,Qs=Object.prototype,Kc=$i["__core-js_shared__"],Ws=LO.toString,Pt=Qs.hasOwnProperty,T_=function(){var e=/[^.]+$/.exec(Kc&&Kc.keys&&Kc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),q_=Qs.toString,qO=Ws.call(Object),jO=RegExp("^"+Ws.call(Pt).replace(CO,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ks=L_?$i.Buffer:void 0,A_=$i.Symbol,S_=$i.Uint8Array,I_=Ks?Ks.allocUnsafe:void 0,j_=xO(Object.getPrototypeOf,Object),C_=Object.create,kO=Qs.propertyIsEnumerable,HO=MO.splice,Nr=A_?A_.toStringTag:void 0,Ys=function(){try{var e=el(Object,"defineProperty");return e({},"",{}),e}catch{}}(),UO=Ks?Ks.isBuffer:void 0,b_=Math.max,BO=Date.now,k_=el($i,"Map"),Vi=el(Object,"create"),FO=function(){function e(){}return function(t){if(!wr(t))return{};if(C_)return C_(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function Dr(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function GO(){this.__data__=Vi?Vi(null):{},this.size=0}function VO(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function $O(e){var t=this.__data__;if(Vi){var r=t[e];return r===P_?void 0:r}return Pt.call(t,e)?t[e]:void 0}function zO(e){var t=this.__data__;return Vi?t[e]!==void 0:Pt.call(t,e)}function XO(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Vi&&t===void 0?P_:t,this}Dr.prototype.clear=GO;Dr.prototype.delete=VO;Dr.prototype.get=$O;Dr.prototype.has=zO;Dr.prototype.set=XO;function Rt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function KO(){this.__data__=[],this.size=0}function YO(e){var t=this.__data__,r=Zs(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():HO.call(t,r,1),--this.size,!0}function QO(e){var t=this.__data__,r=Zs(t,e);return r<0?void 0:t[r][1]}function WO(e){return Zs(this.__data__,e)>-1}function ZO(e,t){var r=this.__data__,n=Zs(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}Rt.prototype.clear=KO;Rt.prototype.delete=YO;Rt.prototype.get=QO;Rt.prototype.has=WO;Rt.prototype.set=ZO;function Dn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function JO(){this.size=0,this.__data__={hash:new Dr,map:new(k_||Rt),string:new Dr}}function e0(e){var t=eo(this,e).delete(e);return this.size-=t?1:0,t}function t0(e){return eo(this,e).get(e)}function r0(e){return eo(this,e).has(e)}function n0(e,t){var r=eo(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}Dn.prototype.clear=JO;Dn.prototype.delete=e0;Dn.prototype.get=t0;Dn.prototype.has=r0;Dn.prototype.set=n0;function wn(e){var t=this.__data__=new Rt(e);this.size=t.size}function i0(){this.__data__=new Rt,this.size=0}function a0(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function s0(e){return this.__data__.get(e)}function o0(e){return this.__data__.has(e)}function u0(e,t){var r=this.__data__;if(r instanceof Rt){var n=r.__data__;if(!k_||n.length<Qb-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Dn(n)}return r.set(e,t),this.size=r.size,this}wn.prototype.clear=i0;wn.prototype.delete=a0;wn.prototype.get=s0;wn.prototype.has=o0;wn.prototype.set=u0;function c0(e,t){var r=Zc(e),n=!r&&Wc(e),i=!r&&!n&&F_(e),a=!r&&!n&&!i&&V_(e),s=r||n||i||a,o=s?NO(e.length,String):[],u=o.length;for(var c in e)(t||Pt.call(e,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||U_(c,u)))&&o.push(c);return o}function Yc(e,t,r){(r!==void 0&&!to(e[t],r)||r===void 0&&!(t in e))&&Jc(e,t,r)}function l0(e,t,r){var n=e[t];(!(Pt.call(e,t)&&to(n,r))||r===void 0&&!(t in e))&&Jc(e,t,r)}function Zs(e,t){for(var r=e.length;r--;)if(to(e[r][0],t))return r;return-1}function Jc(e,t,r){t=="__proto__"&&Ys?Ys(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var f0=I0();function Js(e){return e==null?e===void 0?pO:oO:Nr&&Nr in Object(e)?C0(e):D0(e)}function O_(e){return zi(e)&&Js(e)==N_}function p0(e){if(!wr(e)||R0(e))return!1;var t=rl(e)?jO:bO;return t.test(L0(e))}function d0(e){return zi(e)&&G_(e.length)&&!!X[Js(e)]}function h0(e){if(!wr(e))return N0(e);var t=B_(e),r=[];for(var n in e)n=="constructor"&&(t||!Pt.call(e,n))||r.push(n);return r}function H_(e,t,r,n,i){e!==t&&f0(t,function(a,s){if(i||(i=new wn),wr(a))_0(e,t,s,r,H_,n,i);else{var o=n?n(Qc(e,s),a,s+"",e,t,i):void 0;o===void 0&&(o=a),Yc(e,s,o)}},$_)}function _0(e,t,r,n,i,a,s){var o=Qc(e,r),u=Qc(t,r),c=s.get(u);if(c){Yc(e,r,c);return}var f=a?a(o,u,r+"",e,t,s):void 0,p=f===void 0;if(p){var d=Zc(u),h=!d&&F_(u),E=!d&&!h&&V_(u);f=u,d||h||E?Zc(o)?f=o:q0(o)?f=T0(o):h?(p=!1,f=E0(u,!0)):E?(p=!1,f=y0(u,!0)):f=[]:j0(u)||Wc(u)?(f=o,Wc(o)?f=k0(o):(!wr(o)||rl(o))&&(f=b0(u))):p=!1}p&&(s.set(u,f),i(f,u,n,a,s),s.delete(u)),Yc(e,r,f)}function v0(e,t){return x0(w0(e,t,z_),e+"")}var g0=Ys?function(e,t){return Ys(e,"toString",{configurable:!0,enumerable:!1,value:U0(t),writable:!0})}:z_;function E0(e,t){if(t)return e.slice();var r=e.length,n=I_?I_(r):new e.constructor(r);return e.copy(n),n}function m0(e){var t=new e.constructor(e.byteLength);return new S_(t).set(new S_(e)),t}function y0(e,t){var r=t?m0(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function T0(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function A0(e,t,r,n){var i=!r;r||(r={});for(var a=-1,s=t.length;++a<s;){var o=t[a],u=n?n(r[o],e[o],o,r,e):void 0;u===void 0&&(u=e[o]),i?Jc(r,o,u):l0(r,o,u)}return r}function S0(e){return v0(function(t,r){var n=-1,i=r.length,a=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(a=e.length>3&&typeof a=="function"?(i--,a):void 0,s&&O0(r[0],r[1],s)&&(a=i<3?void 0:a,i=1),t=Object(t);++n<i;){var o=r[n];o&&e(t,o,n,a)}return t})}function I0(e){return function(t,r,n){for(var i=-1,a=Object(t),s=n(t),o=s.length;o--;){var u=s[e?o:++i];if(r(a[u],u,a)===!1)break}return t}}function eo(e,t){var r=e.__data__;return P0(t)?r[typeof t=="string"?"string":"hash"]:r.map}function el(e,t){var r=wO(e,t);return p0(r)?r:void 0}function C0(e){var t=Pt.call(e,Nr),r=e[Nr];try{e[Nr]=void 0;var n=!0}catch{}var i=q_.call(e);return n&&(t?e[Nr]=r:delete e[Nr]),i}function b0(e){return typeof e.constructor=="function"&&!B_(e)?FO(j_(e)):{}}function U_(e,t){var r=typeof e;return t=t??R_,!!t&&(r=="number"||r!="symbol"&&OO.test(e))&&e>-1&&e%1==0&&e<t}function O0(e,t,r){if(!wr(r))return!1;var n=typeof t;return(n=="number"?tl(r)&&U_(t,r.length):n=="string"&&t in r)?to(r[t],e):!1}function P0(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function R0(e){return!!T_&&T_ in e}function B_(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Qs;return e===r}function N0(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}function D0(e){return q_.call(e)}function w0(e,t,r){return t=b_(t===void 0?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=b_(n.length-t,0),s=Array(a);++i<a;)s[i]=n[t+i];i=-1;for(var o=Array(t+1);++i<t;)o[i]=n[i];return o[t]=r(s),RO(e,this,o)}}function Qc(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var x0=M0(g0);function M0(e){var t=0,r=0;return function(){var n=BO(),i=Zb-(n-r);if(r=n,i>0){if(++t>=Wb)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function L0(e){if(e!=null){try{return Ws.call(e)}catch{}try{return e+""}catch{}}return""}function to(e,t){return e===t||e!==e&&t!==t}var Wc=O_(function(){return arguments}())?O_:function(e){return zi(e)&&Pt.call(e,"callee")&&!kO.call(e,"callee")},Zc=Array.isArray;function tl(e){return e!=null&&G_(e.length)&&!rl(e)}function q0(e){return zi(e)&&tl(e)}var F_=UO||B0;function rl(e){if(!wr(e))return!1;var t=Js(e);return t==D_||t==iO||t==eO||t==uO}function G_(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=R_}function wr(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function zi(e){return e!=null&&typeof e=="object"}function j0(e){if(!zi(e)||Js(e)!=w_)return!1;var t=j_(e);if(t===null)return!0;var r=Pt.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Ws.call(r)==qO}var V_=y_?DO(y_):d0;function k0(e){return A0(e,$_(e))}function $_(e){return tl(e)?c0(e,!0):h0(e)}var H0=S0(function(e,t,r){H_(e,t,r)});function U0(e){return function(){return e}}function z_(e){return e}function B0(){return!1}Nn.exports=H0});var Y_=l(ro=>{"use strict";Object.defineProperty(ro,"__esModule",{value:!0});ro.BatchSpanProcessorBase=void 0;var K_=z(),Xi=Xe(),nl=class{constructor(t,r){this._exporter=t,this._finishedSpans=[],this._isShutdown=!1,this._shuttingDownPromise=Promise.resolve();let n=Xi.getEnv();this._maxExportBatchSize=typeof(r==null?void 0:r.maxExportBatchSize)=="number"?r.maxExportBatchSize:n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE,this._maxQueueSize=typeof(r==null?void 0:r.maxQueueSize)=="number"?r.maxQueueSize:n.OTEL_BSP_MAX_QUEUE_SIZE,this._scheduledDelayMillis=typeof(r==null?void 0:r.scheduledDelayMillis)=="number"?r.scheduledDelayMillis:n.OTEL_BSP_SCHEDULE_DELAY,this._exportTimeoutMillis=typeof(r==null?void 0:r.exportTimeoutMillis)=="number"?r.exportTimeoutMillis:n.OTEL_BSP_EXPORT_TIMEOUT}forceFlush(){return this._isShutdown?this._shuttingDownPromise:this._flushAll()}onStart(t){}onEnd(t){this._isShutdown||this._addToBuffer(t)}shutdown(){return this._isShutdown?this._shuttingDownPromise:(this._isShutdown=!0,this._shuttingDownPromise=new Promise((t,r)=>{Promise.resolve().then(()=>this.onShutdown()).then(()=>this._flushAll()).then(()=>this._exporter.shutdown()).then(t).catch(n=>{r(n)})}),this._shuttingDownPromise)}_addToBuffer(t){this._finishedSpans.length>=this._maxQueueSize||(this._finishedSpans.push(t),this._maybeStartTimer())}_flushAll(){return new Promise((t,r)=>{let n=[],i=Math.ceil(this._finishedSpans.length/this._maxExportBatchSize);for(let a=0,s=i;a<s;a++)n.push(this._flushOneBatch());Promise.all(n).then(()=>{t()}).catch(r)})}_flushOneBatch(){return this._clearTimer(),this._finishedSpans.length===0?Promise.resolve():new Promise((t,r)=>{let n=setTimeout(()=>{r(new Error("Timeout"))},this._exportTimeoutMillis);K_.context.with(Xi.suppressTracing(K_.context.active()),()=>{this._exporter.export(this._finishedSpans.splice(0,this._maxExportBatchSize),i=>{var a;clearTimeout(n),i.code===Xi.ExportResultCode.SUCCESS?t():r((a=i.error)!==null&&a!==void 0?a:new Error("BatchSpanProcessor: span export failed"))})})})}_maybeStartTimer(){this._timer===void 0&&(this._timer=setTimeout(()=>{this._flushOneBatch().then(()=>{this._finishedSpans.length>0&&(this._clearTimer(),this._maybeStartTimer())}).catch(t=>{Xi.globalErrorHandler(t)})},this._scheduledDelayMillis),Xi.unrefTimer(this._timer))}_clearTimer(){this._timer!==void 0&&(clearTimeout(this._timer),this._timer=void 0)}};ro.BatchSpanProcessorBase=nl});var Q_=l(no=>{"use strict";Object.defineProperty(no,"__esModule",{value:!0});no.BatchSpanProcessor=void 0;var F0=Y_(),il=class extends F0.BatchSpanProcessorBase{onShutdown(){}};no.BatchSpanProcessor=il});var W_=l(xr=>{"use strict";var G0=xr&&xr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),V0=xr&&xr.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&G0(t,e,r)};Object.defineProperty(xr,"__esModule",{value:!0});V0(Q_(),xr)});var al=l(Mr=>{"use strict";var $0=Mr&&Mr.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),z0=Mr&&Mr.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&$0(t,e,r)};Object.defineProperty(Mr,"__esModule",{value:!0});z0(W_(),Mr)});var J_=l(Lr=>{"use strict";Object.defineProperty(Lr,"__esModule",{value:!0});Lr.BasicTracerProvider=Lr.ForceFlushState=void 0;var xn=z(),Ki=Xe(),Z_=Fs(),X0=sl(),K0=xc(),Y0=E_(),Q0=zc(),W0=X_(),Z0=al(),Mn;(function(e){e[e.resolved=0]="resolved",e[e.timeout=1]="timeout",e[e.error=2]="error",e[e.unresolved=3]="unresolved"})(Mn=Lr.ForceFlushState||(Lr.ForceFlushState={}));var tr=class{constructor(t={}){var r;this._registeredSpanProcessors=[],this._tracers=new Map;let n=W0({},K0.DEFAULT_CONFIG,t);this.resource=(r=n.resource)!==null&&r!==void 0?r:Z_.Resource.empty(),this.resource=Z_.Resource.default().merge(this.resource),this._config=Object.assign({},n,{resource:this.resource});let i=this._buildExporterFromEnv();if(i!==void 0){let a=new Z0.BatchSpanProcessor(i);this.activeSpanProcessor=a}else this.activeSpanProcessor=new Q0.NoopSpanProcessor}getTracer(t,r){let n=`${t}@${r||""}`;return this._tracers.has(n)||this._tracers.set(n,new X0.Tracer({name:t,version:r},this._config,this)),this._tracers.get(n)}addSpanProcessor(t){this._registeredSpanProcessors.length===0&&this.activeSpanProcessor.shutdown().catch(r=>xn.diag.error("Error while trying to shutdown current span processor",r)),this._registeredSpanProcessors.push(t),this.activeSpanProcessor=new Y0.MultiSpanProcessor(this._registeredSpanProcessors)}getActiveSpanProcessor(){return this.activeSpanProcessor}register(t={}){xn.trace.setGlobalTracerProvider(this),t.propagator===void 0&&(t.propagator=this._buildPropagatorFromEnv()),t.contextManager&&xn.context.setGlobalContextManager(t.contextManager),t.propagator&&xn.propagation.setGlobalPropagator(t.propagator)}forceFlush(){let t=this._config.forceFlushTimeoutMillis,r=this._registeredSpanProcessors.map(n=>new Promise(i=>{let a,s=setTimeout(()=>{i(new Error(`Span processor did not completed within timeout period of ${t} ms`)),a=Mn.timeout},t);n.forceFlush().then(()=>{clearTimeout(s),a!==Mn.timeout&&(a=Mn.resolved,i(a))}).catch(o=>{clearTimeout(s),a=Mn.error,i(o)})}));return new Promise((n,i)=>{Promise.all(r).then(a=>{let s=a.filter(o=>o!==Mn.resolved);s.length>0?i(s):n()}).catch(a=>i([a]))})}shutdown(){return this.activeSpanProcessor.shutdown()}_getPropagator(t){var r;return(r=tr._registeredPropagators.get(t))===null||r===void 0?void 0:r()}_getSpanExporter(t){var r;return(r=tr._registeredExporters.get(t))===null||r===void 0?void 0:r()}_buildPropagatorFromEnv(){let t=Array.from(new Set(Ki.getEnv().OTEL_PROPAGATORS)),n=t.map(i=>{let a=this._getPropagator(i);return a||xn.diag.warn(`Propagator "${i}" requested through environment variable is unavailable.`),a}).reduce((i,a)=>(a&&i.push(a),i),[]);if(n.length!==0)return t.length===1?n[0]:new Ki.CompositePropagator({propagators:n})}_buildExporterFromEnv(){let t=Ki.getEnv().OTEL_TRACES_EXPORTER;if(t==="none")return;let r=this._getSpanExporter(t);return r||xn.diag.error(`Exporter "${t}" requested through environment variable is unavailable.`),r}};Lr.BasicTracerProvider=tr;tr._registeredPropagators=new Map([["tracecontext",()=>new Ki.HttpTraceContextPropagator],["baggage",()=>new Ki.HttpBaggagePropagator]]);tr._registeredExporters=new Map});var ev=l(io=>{"use strict";Object.defineProperty(io,"__esModule",{value:!0});io.ConsoleSpanExporter=void 0;var ol=Xe(),ul=class{export(t,r){return this._sendSpans(t,r)}shutdown(){return this._sendSpans([]),Promise.resolve()}_exportInfo(t){return{traceId:t.spanContext().traceId,parentId:t.parentSpanId,name:t.name,id:t.spanContext().spanId,kind:t.kind,timestamp:ol.hrTimeToMicroseconds(t.startTime),duration:ol.hrTimeToMicroseconds(t.duration),attributes:t.attributes,status:t.status,events:t.events}}_sendSpans(t,r){for(let n of t)console.log(this._exportInfo(n));if(r)return r({code:ol.ExportResultCode.SUCCESS})}};io.ConsoleSpanExporter=ul});var rv=l(ao=>{"use strict";Object.defineProperty(ao,"__esModule",{value:!0});ao.InMemorySpanExporter=void 0;var tv=Xe(),cl=class{constructor(){this._finishedSpans=[],this._stopped=!1}export(t,r){if(this._stopped)return r({code:tv.ExportResultCode.FAILED,error:new Error("Exporter has been stopped")});this._finishedSpans.push(...t),setTimeout(()=>r({code:tv.ExportResultCode.SUCCESS}),0)}shutdown(){return this._stopped=!0,this._finishedSpans=[],Promise.resolve()}reset(){this._finishedSpans=[]}getFinishedSpans(){return this._finishedSpans}};ao.InMemorySpanExporter=cl});var iv=l(nv=>{"use strict";Object.defineProperty(nv,"__esModule",{value:!0})});var sv=l(so=>{"use strict";Object.defineProperty(so,"__esModule",{value:!0});so.SimpleSpanProcessor=void 0;var av=z(),ll=Xe(),fl=class{constructor(t){this._exporter=t,this._isShutdown=!1,this._shuttingDownPromise=Promise.resolve()}forceFlush(){return Promise.resolve()}onStart(t){}onEnd(t){this._isShutdown||av.context.with(ll.suppressTracing(av.context.active()),()=>{this._exporter.export([t],r=>{var n;r.code!==ll.ExportResultCode.SUCCESS&&ll.globalErrorHandler((n=r.error)!==null&&n!==void 0?n:new Error(`SimpleSpanProcessor: span export failed (status ${r})`))})})}shutdown(){return this._isShutdown?this._shuttingDownPromise:(this._isShutdown=!0,this._shuttingDownPromise=new Promise((t,r)=>{Promise.resolve().then(()=>this._exporter.shutdown()).then(t).catch(n=>{r(n)})}),this._shuttingDownPromise)}};so.SimpleSpanProcessor=fl});var uv=l(ov=>{"use strict";Object.defineProperty(ov,"__esModule",{value:!0})});var lv=l(cv=>{"use strict";Object.defineProperty(cv,"__esModule",{value:!0})});var pv=l(fv=>{"use strict";Object.defineProperty(fv,"__esModule",{value:!0})});var hv=l(dv=>{"use strict";Object.defineProperty(dv,"__esModule",{value:!0})});var sl=l(de=>{"use strict";var J0=de&&de.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),He=de&&de.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&J0(t,e,r)};Object.defineProperty(de,"__esModule",{value:!0});He(i_(),de);He(J_(),de);He(al(),de);He(ev(),de);He(rv(),de);He(iv(),de);He(sv(),de);He(uv(),de);He(zc(),de);He(wc(),de);He(lv(),de);He(pv(),de);He(hv(),de)});var gv=l(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});dt.enable=dt.azureCoreTracing=dt.AzureMonitorSymbol=void 0;var vv=oe();dt.AzureMonitorSymbol="Azure_Monitor_Tracer";var _v=!1,eP=function(e){if(_v)return e;try{var t=sl(),r=z(),n=new t.BasicTracerProvider,i=n.getTracer("applicationinsights tracer"),a=e.setTracer;e.setTracer=function(s){var o=s.startSpan;s.startSpan=function(u,c,f){var p=o.call(this,u,c,f),d=p.end;return p.end=function(){var h=d.apply(this,arguments);return vv.channel.publish("azure-coretracing",p),h},p},s[dt.AzureMonitorSymbol]=!0,a.call(this,s)},r.trace.getSpan(r.context.active()),e.setTracer(i),_v=!0}catch{}return e};dt.azureCoreTracing={versionSpecifier:">= 1.0.0 < 2.0.0",patch:eP};function tP(){vv.channel.registerMonkeyPatch("@azure/core-tracing",dt.azureCoreTracing)}dt.enable=tP});var mv=l(qr=>{"use strict";Object.defineProperty(qr,"__esModule",{value:!0});qr.enable=qr.bunyan=void 0;var Ev=oe(),rP=function(e){var t=e.prototype._emit;return e.prototype._emit=function(r,n){var i=t.apply(this,arguments);if(!n){var a=i;a||(a=t.call(this,r,!0)),Ev.channel.publish("bunyan",{level:r.level,result:a})}return i},e};qr.bunyan={versionSpecifier:">= 1.0.0 < 2.0.0",patch:rP};function nP(){Ev.channel.registerMonkeyPatch("bunyan",qr.bunyan)}qr.enable=nP});var Tv=l(jr=>{"use strict";Object.defineProperty(jr,"__esModule",{value:!0});jr.enable=jr.console=void 0;var pl=oe(),yv=__webpack_require__(378),iP=function(e){var t=new yv.Writable,r=new yv.Writable;t.write=function(c){if(!c)return!0;var f=c.toString();return pl.channel.publish("console",{message:f}),!0},r.write=function(c){if(!c)return!0;var f=c.toString();return pl.channel.publish("console",{message:f,stderr:!0}),!0};for(var n=new e.Console(t,r),i=["log","info","warn","error","dir","time","timeEnd","trace","assert"],a=function(c){var f=e[c];f&&(e[c]=function(){if(n[c])try{n[c].apply(n,arguments)}catch{}return f.apply(e,arguments)})},s=0,o=i;s<o.length;s++){var u=o[s];a(u)}return e};jr.console={versionSpecifier:">= 4.0.0",patch:iP};function aP(){pl.channel.registerMonkeyPatch("console",jr.console),__webpack_require__(632)}jr.enable=aP});var Av=l(kr=>{"use strict";Object.defineProperty(kr,"__esModule",{value:!0});kr.enable=kr.mongoCore=void 0;var dl=oe(),sP=function(e){var t=e.Server.prototype.connect;return e.Server.prototype.connect=function(){var n=t.apply(this,arguments),i=this.s.pool.write;this.s.pool.write=function(){var o=typeof arguments[1]=="function"?1:2;return typeof arguments[o]=="function"&&(arguments[o]=dl.channel.bindToContext(arguments[o])),i.apply(this,arguments)};var a=this.s.pool.logout;return this.s.pool.logout=function(){return typeof arguments[1]=="function"&&(arguments[1]=dl.channel.bindToContext(arguments[1])),a.apply(this,arguments)},n},e};kr.mongoCore={versionSpecifier:">= 2.0.0 < 4.0.0",patch:sP};function oP(){dl.channel.registerMonkeyPatch("mongodb-core",kr.mongoCore)}kr.enable=oP});var Sv=l(Ne=>{"use strict";var Ln=Ne&&Ne.__assign||function(){return Ln=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ln.apply(this,arguments)};Object.defineProperty(Ne,"__esModule",{value:!0});Ne.enable=Ne.mongo330=Ne.mongo3=Ne.mongo2=void 0;var be=oe(),uP=function(e){var t=e.instrument({operationIdGenerator:{next:function(){return be.channel.bindToContext(function(n){return n()})}}}),r={};return t.on("started",function(n){r[n.requestId]||(r[n.requestId]=Ln(Ln({},n),{time:new Date}))}),t.on("succeeded",function(n){var i=r[n.requestId];i&&delete r[n.requestId],typeof n.operationId=="function"?n.operationId(function(){return be.channel.publish("mongodb",{startedData:i,event:n,succeeded:!0})}):be.channel.publish("mongodb",{startedData:i,event:n,succeeded:!0})}),t.on("failed",function(n){var i=r[n.requestId];i&&delete r[n.requestId],typeof n.operationId=="function"?n.operationId(function(){return be.channel.publish("mongodb",{startedData:i,event:n,succeeded:!1})}):be.channel.publish("mongodb",{startedData:i,event:n,succeeded:!1})}),e},cP=function(e){var t=e.instrument(),r={},n={};return t.on("started",function(i){r[i.requestId]||(n[i.requestId]=be.channel.bindToContext(function(a){return a()}),r[i.requestId]=Ln(Ln({},i),{time:new Date}))}),t.on("succeeded",function(i){var a=r[i.requestId];a&&delete r[i.requestId],typeof i=="object"&&typeof n[i.requestId]=="function"&&(n[i.requestId](function(){return be.channel.publish("mongodb",{startedData:a,event:i,succeeded:!0})}),delete n[i.requestId])}),t.on("failed",function(i){var a=r[i.requestId];a&&delete r[i.requestId],typeof i=="object"&&typeof n[i.requestId]=="function"&&(n[i.requestId](function(){return be.channel.publish("mongodb",{startedData:a,event:i,succeeded:!1})}),delete n[i.requestId])}),e},lP=function(e){var t=e.Server.prototype.connect;return e.Server.prototype.connect=function(){var n=t.apply(this,arguments),i=this.s.coreTopology.s.pool.write;this.s.coreTopology.s.pool.write=function(){var o=typeof arguments[1]=="function"?1:2;return typeof arguments[o]=="function"&&(arguments[o]=be.channel.bindToContext(arguments[o])),i.apply(this,arguments)};var a=this.s.coreTopology.s.pool.logout;return this.s.coreTopology.s.pool.logout=function(){return typeof arguments[1]=="function"&&(arguments[1]=be.channel.bindToContext(arguments[1])),a.apply(this,arguments)},n},e},fP=function(e){lP(e);var t=e.instrument(),r={},n={};return t.on("started",function(i){r[i.requestId]||(n[i.requestId]=be.channel.bindToContext(function(a){return a()}),r[i.requestId]=i)}),t.on("succeeded",function(i){var a=r[i.requestId];a&&delete r[i.requestId],typeof i=="object"&&typeof n[i.requestId]=="function"&&(n[i.requestId](function(){return be.channel.publish("mongodb",{startedData:a,event:i,succeeded:!0})}),delete n[i.requestId])}),t.on("failed",function(i){var a=r[i.requestId];a&&delete r[i.requestId],typeof i=="object"&&typeof n[i.requestId]=="function"&&(n[i.requestId](function(){return be.channel.publish("mongodb",{startedData:a,event:i,succeeded:!1})}),delete n[i.requestId])}),e};Ne.mongo2={versionSpecifier:">= 2.0.0 <= 3.0.5",patch:uP};Ne.mongo3={versionSpecifier:"> 3.0.5 < 3.3.0",patch:cP};Ne.mongo330={versionSpecifier:">= 3.3.0 < 4.0.0",patch:fP};function pP(){be.channel.registerMonkeyPatch("mongodb",Ne.mongo2),be.channel.registerMonkeyPatch("mongodb",Ne.mongo3),be.channel.registerMonkeyPatch("mongodb",Ne.mongo330)}Ne.enable=pP});var Cv=l(Hr=>{"use strict";Object.defineProperty(Hr,"__esModule",{value:!0});Hr.enable=Hr.mysql=void 0;var oo=oe(),Iv=__webpack_require__(72),dP=function(e,t){var r=function(u,c){return function(f,p){var d=u[f];d&&(u[f]=function(){for(var E=arguments.length-1,A=arguments.length-1;A>=0;--A)if(typeof arguments[A]=="function"){E=A;break}else if(typeof arguments[A]<"u")break;var j=arguments[E],se={result:null,startTime:null,startDate:null};typeof j=="function"&&(p?(se.startTime=process.hrtime(),se.startDate=new Date,arguments[E]=oo.channel.bindToContext(p(se,j))):arguments[E]=oo.channel.bindToContext(j));var Ae=d.apply(this,arguments);return se.result=Ae,Ae})}},n=function(u,c){return r(u.prototype,c+".prototype")},i=["connect","changeUser","ping","statistics","end"],a=__webpack_require__(468)(Iv.dirname(t)+"/lib/Connection");i.forEach(function(u){return n(a,"Connection")(u)}),r(a,"Connection")("createQuery",function(u,c){return function(f){var p=process.hrtime(u.startTime),d=p[0]*1e3+p[1]/1e6|0;oo.channel.publish("mysql",{query:u.result,callbackArgs:arguments,err:f,duration:d,time:u.startDate}),c.apply(this,arguments)}});var s=["_enqueueCallback"],o=__webpack_require__(176)(Iv.dirname(t)+"/lib/Pool");return s.forEach(function(u){return n(o,"Pool")(u)}),e};Hr.mysql={versionSpecifier:">= 2.0.0 < 3.0.0",patch:dP};function hP(){oo.channel.registerMonkeyPatch("mysql",Hr.mysql)}Hr.enable=hP});var Ov=l(Ur=>{"use strict";Object.defineProperty(Ur,"__esModule",{value:!0});Ur.enable=Ur.postgresPool1=void 0;var bv=oe();function _P(e){var t=e.prototype.connect;return e.prototype.connect=function(n){return n&&(arguments[0]=bv.channel.bindToContext(n)),t.apply(this,arguments)},e}Ur.postgresPool1={versionSpecifier:">= 1.0.0 < 3.0.0",patch:_P};function vP(){bv.channel.registerMonkeyPatch("pg-pool",Ur.postgresPool1)}Ur.enable=vP});var Rv=l(ht=>{"use strict";Object.defineProperty(ht,"__esModule",{value:!0});ht.enable=ht.postgres7=ht.postgres6=void 0;var qn=oe(),Pv=__webpack_require__(467);function gP(e,t){var r=e.Client.prototype.query,n="__diagnosticOriginalFunc";return e.Client.prototype.query=function(a,s,o){var u={query:{},database:{host:this.connectionParameters.host,port:this.connectionParameters.port},result:null,error:null,duration:0,time:new Date},c=process.hrtime(),f;function p(d){d&&d[n]&&(d=d[n]);var h=qn.channel.bindToContext(function(E,A){var j=process.hrtime(c);if(u.result=A&&{rowCount:A.rowCount,command:A.command},u.error=E,u.duration=Math.ceil(j[0]*1e3+j[1]/1e6),qn.channel.publish("postgres",u),E){if(d)return d.apply(this,arguments);f&&f instanceof Pv.EventEmitter&&f.emit("error",E)}else d&&d.apply(this,arguments)});try{return Object.defineProperty(h,n,{value:d}),h}catch{return d}}try{typeof a=="string"?s instanceof Array?(u.query.preparable={text:a,args:s},o=p(o)):(u.query.text=a,o?o=p(o):s=p(s)):(typeof a.name=="string"?u.query.plan=a.name:a.values instanceof Array?u.query.preparable={text:a.text,args:a.values}:u.query.text=a.text,o?o=p(o):s?s=p(s):a.callback=p(a.callback))}catch{return r.apply(this,arguments)}return arguments[0]=a,arguments[1]=s,arguments[2]=o,arguments.length=arguments.length>3?arguments.length:3,f=r.apply(this,arguments),f},e}function EP(e,t){var r=e.Client.prototype.query,n="__diagnosticOriginalFunc";return e.Client.prototype.query=function(a,s,o){var u=this,c=!!o,f={query:{},database:{host:this.connectionParameters.host,port:this.connectionParameters.port},result:null,error:null,duration:0,time:new Date},p=process.hrtime(),d;function h(E){E&&E[n]&&(E=E[n]);var A=qn.channel.bindToContext(function(j,se){var Ae=process.hrtime(p);if(f.result=se&&{rowCount:se.rowCount,command:se.command},f.error=j,f.duration=Math.ceil(Ae[0]*1e3+Ae[1]/1e6),qn.channel.publish("postgres",f),j){if(E)return E.apply(this,arguments);d&&d instanceof Pv.EventEmitter&&d.emit("error",j)}else E&&E.apply(this,arguments)});try{return Object.defineProperty(A,n,{value:E}),A}catch{return E}}try{typeof a=="string"?s instanceof Array?(f.query.preparable={text:a,args:s},c=typeof o=="function",o=c?h(o):o):(f.query.text=a,o?(c=typeof o=="function",o=c?h(o):o):(c=typeof s=="function",s=c?h(s):s)):(typeof a.name=="string"?f.query.plan=a.name:a.values instanceof Array?f.query.preparable={text:a.text,args:a.values}:f.query.text=a.text,o?(c=typeof o=="function",o=h(o)):s?(c=typeof s=="function",s=c?h(s):s):(c=typeof a.callback=="function",a.callback=c?h(a.callback):a.callback))}catch{return r.apply(this,arguments)}return arguments[0]=a,arguments[1]=s,arguments[2]=o,arguments.length=arguments.length>3?arguments.length:3,d=r.apply(this,arguments),c?d:d.then(function(E){return h()(void 0,E),new u._Promise(function(A,j){A(E)})}).catch(function(E){return h()(E,void 0),new u._Promise(function(A,j){j(E)})})},e}ht.postgres6={versionSpecifier:"6.*",patch:gP};ht.postgres7={versionSpecifier:">=7.* <=8.*",patch:EP};function mP(){qn.channel.registerMonkeyPatch("pg",ht.postgres6),qn.channel.registerMonkeyPatch("pg",ht.postgres7)}ht.enable=mP});var Nv=l(Br=>{"use strict";Object.defineProperty(Br,"__esModule",{value:!0});Br.enable=Br.redis=void 0;var hl=oe(),yP=function(e){var t=e.RedisClient.prototype.internal_send_command;return e.RedisClient.prototype.internal_send_command=function(r){if(r){var n=r.callback;if(!n||!n.pubsubBound){var i=this.address,a=process.hrtime(),s=new Date;r.callback=hl.channel.bindToContext(function(o,u){var c=process.hrtime(a),f=c[0]*1e3+c[1]/1e6|0;hl.channel.publish("redis",{duration:f,address:i,commandObj:r,err:o,result:u,time:s}),typeof n=="function"&&n.apply(this,arguments)}),r.callback.pubsubBound=!0}}return t.call(this,r)},e};Br.redis={versionSpecifier:">= 2.0.0 < 4.0.0",patch:yP};function TP(){hl.channel.registerMonkeyPatch("redis",Br.redis)}Br.enable=TP});var Dv=l(Nt=>{"use strict";var uo=Nt&&Nt.__assign||function(){return uo=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},uo.apply(this,arguments)};Object.defineProperty(Nt,"__esModule",{value:!0});Nt.enable=Nt.tedious=void 0;var _l=oe(),AP=function(e){var t=e.Connection.prototype.makeRequest;return e.Connection.prototype.makeRequest=function(){function n(a){var s=process.hrtime(),o={query:{},database:{host:null,port:null},result:null,error:null,duration:0};return _l.channel.bindToContext(function(u,c,f){var p=process.hrtime(s);o=uo(uo({},o),{database:{host:this.connection.config.server,port:this.connection.config.options.port},result:!u&&{rowCount:c,rows:f},query:{text:this.parametersByName.statement.value},error:u,duration:Math.ceil(p[0]*1e3+p[1]/1e6)}),_l.channel.publish("tedious",o),a.call(this,u,c,f)})}var i=arguments[0];arguments[0].callback=n(i.callback),t.apply(this,arguments)},e};Nt.tedious={versionSpecifier:">= 6.0.0 < 9.0.0",patch:AP};function SP(){_l.channel.registerMonkeyPatch("tedious",Nt.tedious)}Nt.enable=SP});var wv=l(Le=>{"use strict";var IP=Le&&Le.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),CP=Le&&Le.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};Object.defineProperty(Le,"__esModule",{value:!0});Le.enable=Le.winston2=Le.winston3=void 0;var co=oe(),bP=function(e){var t=e.Logger.prototype.log,r,n=function(i,a,s){var o;return r===e.config.npm.levels?o="npm":r===e.config.syslog.levels?o="syslog":o="unknown",co.channel.publish("winston",{level:i,message:a,meta:s,levelKind:o}),a};return e.Logger.prototype.log=function(){return r=this.levels,!this.filters||this.filters.length===0?this.filters=[n]:this.filters[this.filters.length-1]!==n&&(this.filters=this.filters.filter(function(a){return a!==n}),this.filters.push(n)),t.apply(this,arguments)},e},OP=function(e){var t=function(s,o){var u;return s.config.npm.levels[o]!=null?u="npm":s.config.syslog.levels[o]!=null?u="syslog":u="unknown",u},r=function(s){IP(o,s);function o(u,c){var f=s.call(this,c)||this;return f.winston=u,f}return o.prototype.log=function(u,c){var f=u.message,p=u.level,d=u.meta,h=CP(u,["message","level","meta"]);p=typeof Symbol.for=="function"?u[Symbol.for("level")]:p,f=u instanceof Error?u:f;var E=t(this.winston,p);d=d||{};for(var A in h)h.hasOwnProperty(A)&&(d[A]=h[A]);co.channel.publish("winston",{message:f,level:p,levelKind:E,meta:d}),c()},o}(e.Transport);function n(){var s=arguments[0].levels||e.config.npm.levels,o;for(var u in s)s.hasOwnProperty(u)&&(o=o===void 0||s[u]>s[o]?u:o);this.add(new r(e,{level:o}))}var i=e.createLogger;e.createLogger=function(){var o=arguments[0].levels||e.config.npm.levels,u;for(var c in o)o.hasOwnProperty(c)&&(u=u===void 0||o[c]>o[u]?c:u);var f=i.apply(this,arguments);f.add(new r(e,{level:u}));var p=f.configure;return f.configure=function(){p.apply(this,arguments),n.apply(this,arguments)},f};var a=e.configure;return e.configure=function(){a.apply(this,arguments),n.apply(this,arguments)},e.add(new r(e)),e};Le.winston3={versionSpecifier:"3.x",patch:OP};Le.winston2={versionSpecifier:"2.x",patch:bP};function PP(){co.channel.registerMonkeyPatch("winston",Le.winston2),co.channel.registerMonkeyPatch("winston",Le.winston3)}Le.enable=PP});var Vv=l($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.enable=$.tedious=$.pgPool=$.pg=$.winston=$.redis=$.mysql=$.mongodb=$.mongodbCore=$.console=$.bunyan=$.azuresdk=void 0;var xv=gv();$.azuresdk=xv;var Mv=mv();$.bunyan=Mv;var Lv=Tv();$.console=Lv;var qv=Av();$.mongodbCore=qv;var jv=Sv();$.mongodb=jv;var kv=Cv();$.mysql=kv;var Hv=Ov();$.pgPool=Hv;var Uv=Rv();$.pg=Uv;var Bv=Nv();$.redis=Bv;var Fv=Dv();$.tedious=Fv;var Gv=wv();$.winston=Gv;function RP(){Mv.enable(),Lv.enable(),qv.enable(),jv.enable(),kv.enable(),Uv.enable(),Hv.enable(),Bv.enable(),Gv.enable(),xv.enable(),Fv.enable()}$.enable=RP});var po=l(rr=>{"use strict";Object.defineProperty(rr,"__esModule",{value:!0});rr.registerContextPreservation=rr.IsInitialized=void 0;var NP=vu(),vl=_e();rr.IsInitialized=!process.env.APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL;var gl="DiagnosticChannel";if(rr.IsInitialized){it=Vv(),$v=process.env.APPLICATION_INSIGHTS_NO_PATCH_MODULES||"",lo=$v.split(","),El={bunyan:it.bunyan,console:it.console,mongodb:it.mongodb,mongodbCore:it.mongodbCore,mysql:it.mysql,redis:it.redis,pg:it.pg,pgPool:it.pgPool,winston:it.winston,azuresdk:it.azuresdk};for(fo in El)lo.indexOf(fo)===-1&&(El[fo].enable(),vl.info(gl,"Subscribed to "+fo+" events"));lo.length>0&&vl.info(gl,"Some modules will not be patched",lo)}else vl.info(gl,"Not subscribing to dependency autocollection because APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL was set");var it,$v,lo,El,fo;function DP(e){if(!!rr.IsInitialized){var t=oe();t.channel.addContextPreservation(e),t.channel.spanContextPropagator=NP.AsyncScopeManager}}rr.registerContextPreservation=DP});var jn=l((Nq,zv)=>{"use strict";zv.exports={requestContextHeader:"request-context",requestContextSourceKey:"appId",requestContextTargetKey:"appId",requestIdHeader:"request-id",parentIdHeader:"x-ms-request-id",rootIdHeader:"x-ms-request-root-id",correlationContextHeader:"correlation-context",traceparentHeader:"traceparent",traceStateHeader:"tracestate"}});var Ue=l((yl,Kv)=>{"use strict";var nr=yl&&yl.__assign||function(){return nr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nr.apply(this,arguments)},wP=__webpack_require__(136),Xv=__webpack_require__(256),ml=__webpack_require__(716),ho=__webpack_require__(116),Yi=_e(),kn=jn(),xP=function(){function e(){}return e.getCookie=function(t,r){var n="";if(t&&t.length&&typeof r=="string")for(var i=t+"=",a=r.split(";"),s=0;s<a.length;s++){var r=a[s];if(r=e.trim(r),r&&r.indexOf(i)===0){n=r.substring(i.length,a[s].length);break}}return n},e.trim=function(t){return typeof t=="string"?t.replace(/^\s+|\s+$/g,""):""},e.int32ArrayToBase64=function(t){var r=function(o,u){return String.fromCharCode(o>>u&255)},n=function(o){return r(o,24)+r(o,16)+r(o,8)+r(o,0)},i=t.map(n).join(""),a=Buffer.from?Buffer.from(i,"binary"):new Buffer(i,"binary"),s=a.toString("base64");return s.substr(0,s.indexOf("="))},e.random32=function(){return 4294967296*Math.random()|0},e.randomu32=function(){return e.random32()+2147483648},e.w3cTraceId=function(){for(var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],r="",n,i=0;i<4;i++)n=e.random32(),r+=t[n&15]+t[n>>4&15]+t[n>>8&15]+t[n>>12&15]+t[n>>16&15]+t[n>>20&15]+t[n>>24&15]+t[n>>28&15];var a=t[8+Math.random()*4|0];return r.substr(0,8)+r.substr(9,4)+"4"+r.substr(13,3)+a+r.substr(16,3)+r.substr(19,12)},e.w3cSpanId=function(){return e.w3cTraceId().substring(16)},e.isValidW3CId=function(t){return t.length===32&&t!=="00000000000000000000000000000000"},e.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"},e.isError=function(t){return t instanceof Error},e.isPrimitive=function(t){var r=typeof t;return r==="string"||r==="number"||r==="boolean"},e.isDate=function(t){return Object.prototype.toString.call(t)==="[object Date]"},e.msToTimeSpan=function(t){(isNaN(t)||t<0)&&(t=0);var r=(t/1e3%60).toFixed(7).replace(/0{0,4}$/,""),n=""+Math.floor(t/(1e3*60))%60,i=""+Math.floor(t/(1e3*60*60))%24,a=Math.floor(t/(1e3*60*60*24));r=r.indexOf(".")<2?"0"+r:r,n=n.length<2?"0"+n:n,i=i.length<2?"0"+i:i;var s=a>0?a+".":"";return s+i+":"+n+":"+r},e.extractError=function(t){var r=t;return{message:t.message,code:r.code||r.id||""}},e.extractObject=function(t){return t instanceof Error?e.extractError(t):typeof t.toJSON=="function"?t.toJSON():t},e.validateStringMap=function(t){if(typeof t!="object"){Yi.info("Invalid properties dropped from payload");return}var r={};for(var n in t){var i="",a=t[n],s=typeof a;if(e.isPrimitive(a))i=a.toString();else if(a===null||s==="undefined")i="";else if(s==="function"){Yi.info("key: "+n+" was function; will not serialize");continue}else{var o=e.isArray(a)?a:e.extractObject(a);try{e.isPrimitive(o)?i=o:i=JSON.stringify(o)}catch(u){i=a.constructor.name.toString()+" (Error: "+u.message+")",Yi.info("key: "+n+", could not be serialized")}}r[n]=i.substring(0,e.MAX_PROPERTY_LENGTH)}return r},e.canIncludeCorrelationHeader=function(t,r){var n=t&&t.config&&t.config.correlationHeaderExcludedDomains;if(!n||n.length==0||!r)return!0;for(var i=0;i<n.length;i++){var a=new RegExp(n[i].replace(/\./g,".").replace(/\*/g,".*"));if(a.test(ml.parse(r).hostname))return!1}return!0},e.getCorrelationContextTarget=function(t,r){var n=t.headers&&t.headers[kn.requestContextHeader];if(n)for(var i=n.split(","),a=0;a<i.length;++a){var s=i[a].split("=");if(s.length==2&&s[0]==r)return s[1]}},e.makeRequest=function(t,r,n,i){r&&r.indexOf("//")===0&&(r="https:"+r);var a=ml.parse(r),s=nr(nr({},n),{host:a.hostname,port:a.port,path:a.pathname}),o=void 0;if(a.protocol==="https:"&&(o=t.proxyHttpsUrl||void 0),a.protocol==="http:"&&(o=t.proxyHttpUrl||void 0),o){o.indexOf("//")===0&&(o="http:"+o);var u=ml.parse(o);u.protocol==="https:"?(Yi.info("Proxies that use HTTPS are not supported"),o=void 0):s=nr(nr({},s),{host:u.hostname,port:u.port||"80",path:r,headers:nr(nr({},s.headers),{Host:a.hostname})})}var c=a.protocol==="https:"&&!o;return c&&t.httpsAgent!==void 0?s.agent=t.httpsAgent:!c&&t.httpAgent!==void 0?s.agent=t.httpAgent:c&&(s.agent=e.tlsRestrictedAgent),c?Xv.request(s,i):wP.request(s,i)},e.safeIncludeCorrelationHeader=function(t,r,n){var i;if(typeof n=="string")i=n;else if(n instanceof Array)i=n.join(",");else if(n&&typeof n.toString=="function")try{i=n.toString()}catch(a){Yi.warn("Outgoing request-context header could not be read. Correlation of requests may be lost.",a,n)}i?e.addCorrelationIdHeaderFromString(t,r,i):r.setHeader(kn.requestContextHeader,kn.requestContextSourceKey+"="+t.config.correlationId)},e.dumpObj=function(t){var r=Object.prototype.toString.call(t),n="";return r==="[object Error]"?n="{ stack: '"+t.stack+"', message: '"+t.message+"', name: '"+t.name+"'":n=JSON.stringify(t),r+n},e.addCorrelationIdHeaderFromString=function(t,r,n){var i=n.split(","),a=kn.requestContextSourceKey+"=",s=i.some(function(o){return o.substring(0,a.length)===a});s||r.setHeader(kn.requestContextHeader,n+","+kn.requestContextSourceKey+"="+t.config.correlationId)},e.MAX_PROPERTY_LENGTH=8192,e.tlsRestrictedAgent=new Xv.Agent({keepAlive:!0,maxSockets:25,secureOptions:ho.SSL_OP_NO_SSLv2|ho.SSL_OP_NO_SSLv3|ho.SSL_OP_NO_TLSv1|ho.SSL_OP_NO_TLSv1_1}),e}();Kv.exports=xP});var Fr=l((Dq,Yv)=>{"use strict";var _o=Ue(),Tl=_e(),MP=function(){function e(){}return e.queryCorrelationId=function(t,r){var n=t.profileQueryEndpoint+"/api/profiles/"+t.instrumentationKey+"/appId";if(e.completedLookups.hasOwnProperty(n)){r(e.completedLookups[n]);return}else if(e.pendingLookups[n]){e.pendingLookups[n].push(r);return}e.pendingLookups[n]=[r];var i=function(){if(!!e.pendingLookups[n]){var a={method:"GET",disableAppInsightsAutoCollection:!0};Tl.info(e.TAG,a);var s=_o.makeRequest(t,n,a,function(o){if(o.statusCode===200){var u="";o.setEncoding("utf-8"),o.on("data",function(c){u+=c}),o.on("end",function(){Tl.info(e.TAG,u);var c=e.correlationIdPrefix+u;e.completedLookups[n]=c,e.pendingLookups[n]&&e.pendingLookups[n].forEach(function(f){return f(c)}),delete e.pendingLookups[n]})}else o.statusCode>=400&&o.statusCode<500?(e.completedLookups[n]=void 0,delete e.pendingLookups[n]):setTimeout(i,t.correlationIdRetryIntervalMs)});s&&(s.on("error",function(o){Tl.warn(e.TAG,o)}),s.end())}};setTimeout(i,0)},e.cancelCorrelationIdQuery=function(t,r){var n=t.profileQueryEndpoint+"/api/profiles/"+t.instrumentationKey+"/appId",i=e.pendingLookups[n];i&&(e.pendingLookups[n]=i.filter(function(a){return a!=r}),e.pendingLookups[n].length==0&&delete e.pendingLookups[n])},e.generateRequestId=function(t){if(t){t=t[0]=="|"?t:"|"+t,t[t.length-1]!=="."&&(t+=".");var r=(e.currentRootId++).toString(16);return e.appendSuffix(t,r,"_")}else return e.generateRootId()},e.getRootId=function(t){var r=t.indexOf(".");r<0&&(r=t.length);var n=t[0]==="|"?1:0;return t.substring(n,r)},e.generateRootId=function(){return"|"+_o.w3cTraceId()+"."},e.appendSuffix=function(t,r,n){if(t.length+r.length<e.requestIdMaxLength)return t+r+n;var i=e.requestIdMaxLength-9;if(t.length>i)for(;i>1;--i){var a=t[i-1];if(a==="."||a==="_")break}if(i<=1)return e.generateRootId();for(r=_o.randomu32().toString(16);r.length<8;)r="0"+r;return t.substring(0,i)+r+"#"},e.TAG="CorrelationIdManager",e.correlationIdPrefix="cid-v1:",e.w3cEnabled=!0,e.pendingLookups={},e.completedLookups={},e.requestIdMaxLength=1024,e.currentRootId=_o.randomu32(),e}();Yv.exports=MP});var Qi=l((wq,Qv)=>{"use strict";var me=Ue(),LP=Fr(),qP=function(){function e(t,r){if(this.traceFlag=e.DEFAULT_TRACE_FLAG,this.version=e.DEFAULT_VERSION,t&&typeof t=="string")if(t.split(",").length>1)this.traceId=me.w3cTraceId(),this.spanId=me.w3cTraceId().substr(0,16);else{var n=t.trim().split("-"),i=n.length;i>=4?(this.version=n[0],this.traceId=n[1],this.spanId=n[2],this.traceFlag=n[3]):(this.traceId=me.w3cTraceId(),this.spanId=me.w3cTraceId().substr(0,16)),this.version.match(/^[0-9a-f]{2}$/g)||(this.version=e.DEFAULT_VERSION,this.traceId=me.w3cTraceId()),this.version==="00"&&i!==4&&(this.traceId=me.w3cTraceId(),this.spanId=me.w3cTraceId().substr(0,16)),this.version==="ff"&&(this.version=e.DEFAULT_VERSION,this.traceId=me.w3cTraceId(),this.spanId=me.w3cTraceId().substr(0,16)),this.version.match(/^0[0-9a-f]$/g)||(this.version=e.DEFAULT_VERSION),this.traceFlag.match(/^[0-9a-f]{2}$/g)||(this.traceFlag=e.DEFAULT_TRACE_FLAG,this.traceId=me.w3cTraceId()),e.isValidTraceId(this.traceId)||(this.traceId=me.w3cTraceId()),e.isValidSpanId(this.spanId)||(this.spanId=me.w3cTraceId().substr(0,16),this.traceId=me.w3cTraceId()),this.parentId=this.getBackCompatRequestId()}else if(r){this.parentId=r.slice();var a=LP.getRootId(r);e.isValidTraceId(a)||(this.legacyRootId=a,a=me.w3cTraceId()),r.indexOf("|")!==-1&&(r=r.substring(1+r.substring(0,r.length-1).lastIndexOf("."),r.length-1)),this.traceId=a,this.spanId=r}else this.traceId=me.w3cTraceId(),this.spanId=me.w3cTraceId().substr(0,16)}return e.isValidTraceId=function(t){return t.match(/^[0-9a-f]{32}$/)&&t!=="00000000000000000000000000000000"},e.isValidSpanId=function(t){return t.match(/^[0-9a-f]{16}$/)&&t!=="0000000000000000"},e.formatOpenTelemetryTraceFlags=function(t){var r="0"+t.toString(16);return r.substring(r.length-2)},e.prototype.getBackCompatRequestId=function(){return"|"+this.traceId+"."+this.spanId+"."},e.prototype.toString=function(){return this.version+"-"+this.traceId+"-"+this.spanId+"-"+this.traceFlag},e.prototype.updateSpanId=function(){this.spanId=me.w3cTraceId().substr(0,16)},e.DEFAULT_TRACE_FLAG="01",e.DEFAULT_VERSION="00",e}();Qv.exports=qP});var Al=l((xq,Wv)=>{"use strict";var jP=function(){function e(t){this.fieldmap=[],t&&(this.fieldmap=this.parseHeader(t))}return e.prototype.toString=function(){var t=this.fieldmap;return!t||t.length==0?null:t.join(", ")},e.validateKeyChars=function(t){var r=t.split("@");if(r.length==2){var n=r[0].trim(),i=r[1].trim(),a=Boolean(n.match(/^[\ ]?[a-z0-9\*\-\_/]{1,241}$/)),s=Boolean(i.match(/^[\ ]?[a-z0-9\*\-\_/]{1,14}$/));return a&&s}else if(r.length==1)return Boolean(t.match(/^[\ ]?[a-z0-9\*\-\_/]{1,256}$/));return!1},e.prototype.parseHeader=function(t){var r=[],n={},i=t.split(",");if(i.length>32)return null;for(var a=0,s=i;a<s.length;a++){var o=s[a],u=o.trim();if(u.length!==0){var c=u.split("=");if(c.length!==2||!e.validateKeyChars(c[0])||n[c[0]])return null;n[c[0]]=!0,r.push(u)}}return r},e.strict=!0,e}();Wv.exports=jP});var Dt=l((Mq,Zv)=>{"use strict";var kP=function(){function e(){}return e}();Zv.exports=kP});var eg=l((Sl,Jv)=>{"use strict";var HP=Sl&&Sl.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),UP=Dt(),BP=function(e){HP(t,e);function t(){var r=e.call(this)||this;return r.ver=2,r.properties={},r.measurements={},r}return t}(UP);Jv.exports=BP});var Il=l((Lq,tg)=>{"use strict";var FP=function(){function e(){}return e}();tg.exports=FP});var ng=l((qq,rg)=>{"use strict";var GP=function(){function e(){this.applicationVersion="ai.application.ver",this.deviceId="ai.device.id",this.deviceLocale="ai.device.locale",this.deviceModel="ai.device.model",this.deviceOEMName="ai.device.oemName",this.deviceOSVersion="ai.device.osVersion",this.deviceType="ai.device.type",this.locationIp="ai.location.ip",this.operationId="ai.operation.id",this.operationName="ai.operation.name",this.operationParentId="ai.operation.parentId",this.operationSyntheticSource="ai.operation.syntheticSource",this.operationCorrelationVector="ai.operation.correlationVector",this.sessionId="ai.session.id",this.sessionIsFirst="ai.session.isFirst",this.userAccountId="ai.user.accountId",this.userId="ai.user.id",this.userAuthUserId="ai.user.authUserId",this.cloudRole="ai.cloud.role",this.cloudRoleInstance="ai.cloud.roleInstance",this.internalSdkVersion="ai.internal.sdkVersion",this.internalAgentVersion="ai.internal.agentVersion",this.internalNodeName="ai.internal.nodeName"}return e}();rg.exports=GP});var ag=l((Cl,ig)=>{"use strict";var VP=Cl&&Cl.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),$P=Il(),zP=function(e){VP(t,e);function t(){return e.call(this)||this}return t}($P);ig.exports=zP});var Ol=l((jq,sg)=>{"use strict";var bl;(function(e){e[e.Measurement=0]="Measurement",e[e.Aggregation=1]="Aggregation"})(bl||(bl={}));sg.exports=bl});var ug=l((kq,og)=>{"use strict";var XP=Ol(),KP=function(){function e(){this.kind=XP.Measurement}return e}();og.exports=KP});var lg=l((Hq,cg)=>{"use strict";var YP=function(){function e(){this.ver=1,this.sampleRate=100,this.tags={}}return e}();cg.exports=YP});var Rl=l((Pl,fg)=>{"use strict";var QP=Pl&&Pl.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),WP=Dt(),ZP=function(e){QP(t,e);function t(){var r=e.call(this)||this;return r.ver=2,r.properties={},r.measurements={},r}return t}(WP);fg.exports=ZP});var dg=l((Nl,pg)=>{"use strict";var JP=Nl&&Nl.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),eR=Dt(),tR=function(e){JP(t,e);function t(){var r=e.call(this)||this;return r.ver=2,r.exceptions=[],r.properties={},r.measurements={},r}return t}(eR);pg.exports=tR});var _g=l((Uq,hg)=>{"use strict";var rR=function(){function e(){this.hasFullStack=!0,this.parsedStack=[]}return e}();hg.exports=rR});var gg=l((Dl,vg)=>{"use strict";var nR=Dl&&Dl.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),iR=Dt(),aR=function(e){nR(t,e);function t(){var r=e.call(this)||this;return r.ver=2,r.properties={},r}return t}(iR);vg.exports=aR});var mg=l((wl,Eg)=>{"use strict";var sR=wl&&wl.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),oR=Dt(),uR=function(e){sR(t,e);function t(){var r=e.call(this)||this;return r.ver=2,r.metrics=[],r.properties={},r}return t}(oR);Eg.exports=uR});var Tg=l((xl,yg)=>{"use strict";var cR=xl&&xl.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),lR=Rl(),fR=function(e){cR(t,e);function t(){var r=e.call(this)||this;return r.ver=2,r.properties={},r.measurements={},r}return t}(lR);yg.exports=fR});var Sg=l((Ml,Ag)=>{"use strict";var pR=Ml&&Ml.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),dR=Dt(),hR=function(e){pR(t,e);function t(){var r=e.call(this)||this;return r.ver=2,r.success=!0,r.properties={},r.measurements={},r}return t}(dR);Ag.exports=hR});var Cg=l((Ll,Ig)=>{"use strict";var _R=Ll&&Ll.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),vR=Dt(),gR=function(e){_R(t,e);function t(){var r=e.call(this)||this;return r.ver=2,r.properties={},r.measurements={},r}return t}(vR);Ig.exports=gR});var Og=l((Bq,bg)=>{"use strict";var ql;(function(e){e[e.Verbose=0]="Verbose",e[e.Information=1]="Information",e[e.Warning=2]="Warning",e[e.Error=3]="Error",e[e.Critical=4]="Critical"})(ql||(ql={}));bg.exports=ql});var Rg=l((Fq,Pg)=>{"use strict";var ER=function(){function e(){}return e}();Pg.exports=ER});var jl=l(fe=>{"use strict";Object.defineProperty(fe,"__esModule",{value:!0});fe.AvailabilityData=eg();fe.Base=Il();fe.ContextTagKeys=ng();fe.Data=ag();fe.DataPoint=ug();fe.DataPointType=Ol();fe.Domain=Dt();fe.Envelope=lg();fe.EventData=Rl();fe.ExceptionData=dg();fe.ExceptionDetails=_g();fe.MessageData=gg();fe.MetricData=mg();fe.PageViewData=Tg();fe.RemoteDependencyData=Sg();fe.RequestData=Cg();fe.SeverityLevel=Og();fe.StackFrame=Rg()});var Ng=l(Hn=>{"use strict";Object.defineProperty(Hn,"__esModule",{value:!0});Hn.domainSupportsProperties=Hn.RemoteDependencyDataConstants=void 0;var Gr=jl(),mR=function(){function e(){}return e.TYPE_HTTP="Http",e.TYPE_AI="Http (tracked component)",e}();Hn.RemoteDependencyDataConstants=mR;function yR(e){return"properties"in e||e instanceof Gr.EventData||e instanceof Gr.ExceptionData||e instanceof Gr.MessageData||e instanceof Gr.MetricData||e instanceof Gr.PageViewData||e instanceof Gr.RemoteDependencyData||e instanceof Gr.RequestData}Hn.domainSupportsProperties=yR});var wg=l(Dg=>{"use strict";Object.defineProperty(Dg,"__esModule",{value:!0})});var Mg=l(xg=>{"use strict";Object.defineProperty(xg,"__esModule",{value:!0})});var qg=l(Lg=>{"use strict";Object.defineProperty(Lg,"__esModule",{value:!0})});var kg=l(jg=>{"use strict";Object.defineProperty(jg,"__esModule",{value:!0})});var Ug=l(Hg=>{"use strict";Object.defineProperty(Hg,"__esModule",{value:!0})});var Fg=l(Bg=>{"use strict";Object.defineProperty(Bg,"__esModule",{value:!0})});var Vg=l(Gg=>{"use strict";Object.defineProperty(Gg,"__esModule",{value:!0})});var zg=l($g=>{"use strict";Object.defineProperty($g,"__esModule",{value:!0})});var Kg=l(Xg=>{"use strict";Object.defineProperty(Xg,"__esModule",{value:!0})});var Qg=l(Yg=>{"use strict";Object.defineProperty(Yg,"__esModule",{value:!0})});var Zg=l(Wg=>{"use strict";Object.defineProperty(Wg,"__esModule",{value:!0})});var eE=l(Jg=>{"use strict";Object.defineProperty(Jg,"__esModule",{value:!0})});var tE=l(at=>{"use strict";Object.defineProperty(at,"__esModule",{value:!0});at.TelemetryType=at.TelemetryTypeString=at.baseTypeToTelemetryType=at.telemetryTypeToBaseType=void 0;function TR(e){switch(e){case ye.Event:return"EventData";case ye.Exception:return"ExceptionData";case ye.Trace:return"MessageData";case ye.Metric:return"MetricData";case ye.Request:return"RequestData";case ye.Dependency:return"RemoteDependencyData";case ye.Availability:return"AvailabilityData";case ye.PageView:return"PageViewData"}}at.telemetryTypeToBaseType=TR;function AR(e){switch(e){case"EventData":return ye.Event;case"ExceptionData":return ye.Exception;case"MessageData":return ye.Trace;case"MetricData":return ye.Metric;case"RequestData":return ye.Request;case"RemoteDependencyData":return ye.Dependency;case"AvailabilityData":return ye.Availability;case"PageViewData":return ye.PageView}}at.baseTypeToTelemetryType=AR;at.TelemetryTypeString={Event:"EventData",Exception:"ExceptionData",Trace:"MessageData",Metric:"MetricData",Request:"RequestData",Dependency:"RemoteDependencyData",Availability:"AvailabilityData",PageView:"PageViewData"};var ye;(function(e){e[e.Event=0]="Event",e[e.Exception=1]="Exception",e[e.Trace=2]="Trace",e[e.Metric=3]="Metric",e[e.Request=4]="Request",e[e.Dependency=5]="Dependency",e[e.Availability=6]="Availability",e[e.PageView=7]="PageView"})(ye=at.TelemetryType||(at.TelemetryType={}))});var rE=l(he=>{"use strict";var SR=he&&he.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Be=he&&he.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&SR(t,e,r)};Object.defineProperty(he,"__esModule",{value:!0});Be(wg(),he);Be(Mg(),he);Be(qg(),he);Be(kg(),he);Be(Ug(),he);Be(Fg(),he);Be(Vg(),he);Be(zg(),he);Be(Kg(),he);Be(Qg(),he);Be(Zg(),he);Be(eE(),he);Be(tE(),he)});var iE=l(nE=>{"use strict";Object.defineProperty(nE,"__esModule",{value:!0})});var sE=l(aE=>{"use strict";Object.defineProperty(aE,"__esModule",{value:!0})});var uE=l(oE=>{"use strict";Object.defineProperty(oE,"__esModule",{value:!0})});var lE=l(cE=>{"use strict";Object.defineProperty(cE,"__esModule",{value:!0})});var pE=l(fE=>{"use strict";Object.defineProperty(fE,"__esModule",{value:!0})});var hE=l(dE=>{"use strict";Object.defineProperty(dE,"__esModule",{value:!0})});var vE=l(_E=>{"use strict";Object.defineProperty(_E,"__esModule",{value:!0})});var EE=l(gE=>{"use strict";Object.defineProperty(gE,"__esModule",{value:!0})});var mE=l(qe=>{"use strict";var IR=qe&&qe.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),ir=qe&&qe.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&IR(t,e,r)};Object.defineProperty(qe,"__esModule",{value:!0});ir(iE(),qe);ir(sE(),qe);ir(uE(),qe);ir(lE(),qe);ir(pE(),qe);ir(hE(),qe);ir(vE(),qe);ir(EE(),qe)});var De=l(_t=>{"use strict";var CR=_t&&_t.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),vo=_t&&_t.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&CR(t,e,r)};Object.defineProperty(_t,"__esModule",{value:!0});vo(Ng(),_t);vo(jl(),_t);vo(rE(),_t);vo(mE(),_t)});var kl=l((_1,yE)=>{"use strict";var bR=function(){function e(){}return e.prototype.getUrl=function(){return this.url},e.prototype.RequestParser=function(){this.startTime=+new Date},e.prototype._setStatus=function(t,r){var n=+new Date;this.duration=n-this.startTime,this.statusCode=t;var i=this.properties||{};if(r){if(typeof r=="string")i.error=r;else if(r instanceof Error)i.error=r.message;else if(typeof r=="object")for(var a in r)i[a]=r[a]&&r[a].toString&&r[a].toString()}this.properties=i},e.prototype._isSuccess=function(){return 0<this.statusCode&&this.statusCode<400},e}();yE.exports=bR});var Bl=l((Ul,AE)=>{"use strict";var OR=Ul&&Ul.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),go=__webpack_require__(716),PR=De(),TE=Ue(),Fe=jn(),RR=kl(),ar=Fr(),NR=Al(),Hl=Qi(),DR=function(e){OR(t,e);function t(r,n){var i=e.call(this)||this;return r&&(i.method=r.method,i.url=i._getAbsoluteUrl(r),i.startTime=+new Date,i.socketRemoteAddress=r.socket&&r.socket.remoteAddress,i.parseHeaders(r,n),r.connection&&(i.connectionRemoteAddress=r.connection.remoteAddress,i.legacySocketRemoteAddress=r.connection.socket&&r.connection.socket.remoteAddress)),i}return t.prototype.onError=function(r,n){this._setStatus(void 0,r),n&&(this.duration=n)},t.prototype.onResponse=function(r,n){this._setStatus(r.statusCode,void 0),n&&(this.duration=n)},t.prototype.getRequestTelemetry=function(r){var n={id:this.requestId,name:this.method+" "+go.parse(this.url).pathname,url:this.url,source:this.sourceCorrelationId,duration:this.duration,resultCode:this.statusCode?this.statusCode.toString():null,success:this._isSuccess(),properties:this.properties};if(r&&r.time?n.time=r.time:this.startTime&&(n.time=new Date(this.startTime)),r){for(var i in r)n[i]||(n[i]=r[i]);if(r.properties)for(var i in r.properties)n.properties[i]=r.properties[i]}return n},t.prototype.getRequestTags=function(r){var n={};for(var i in r)n[i]=r[i];return n[t.keys.locationIp]=r[t.keys.locationIp]||this._getIp(),n[t.keys.sessionId]=r[t.keys.sessionId]||this._getId("ai_session"),n[t.keys.userId]=r[t.keys.userId]||this._getId("ai_user"),n[t.keys.userAuthUserId]=r[t.keys.userAuthUserId]||this._getId("ai_authUser"),n[t.keys.operationName]=this.getOperationName(r),n[t.keys.operationParentId]=this.getOperationParentId(r),n[t.keys.operationId]=this.getOperationId(r),n},t.prototype.getOperationId=function(r){return r[t.keys.operationId]||this.operationId},t.prototype.getOperationParentId=function(r){return r[t.keys.operationParentId]||this.parentId||this.getOperationId(r)},t.prototype.getOperationName=function(r){return r[t.keys.operationName]||this.method+" "+go.parse(this.url).pathname},t.prototype.getRequestId=function(){return this.requestId},t.prototype.getCorrelationContextHeader=function(){return this.correlationContextHeader},t.prototype.getTraceparent=function(){return this.traceparent},t.prototype.getTracestate=function(){return this.tracestate},t.prototype.getLegacyRootId=function(){return this.legacyRootId},t.prototype._getAbsoluteUrl=function(r){if(!r.headers)return r.url;var n=r.connection?r.connection.encrypted:null,i=go.parse(r.url),a=i.pathname,s=i.search,o=n||r.headers["x-forwarded-proto"]=="https"?"https":"http",u=go.format({protocol:o,host:r.headers.host,pathname:a,search:s});return u},t.prototype._getIp=function(){var r=/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/,n=function(a){var s=r.exec(a);if(s)return s[0]},i=n(this.rawHeaders["x-forwarded-for"])||n(this.rawHeaders["x-client-ip"])||n(this.rawHeaders["x-real-ip"])||n(this.connectionRemoteAddress)||n(this.socketRemoteAddress)||n(this.legacySocketRemoteAddress);return!i&&this.connectionRemoteAddress&&this.connectionRemoteAddress.substr&&this.connectionRemoteAddress.substr(0,2)==="::"&&(i="127.0.0.1"),i},t.prototype._getId=function(r){var n=this.rawHeaders&&this.rawHeaders.cookie&&typeof this.rawHeaders.cookie=="string"&&this.rawHeaders.cookie||"",i=t.parseId(TE.getCookie(r,n));return i},t.prototype.setBackCompatFromThisTraceContext=function(){this.operationId=this.traceparent.traceId,this.traceparent.legacyRootId&&(this.legacyRootId=this.traceparent.legacyRootId),this.parentId=this.traceparent.parentId,this.traceparent.updateSpanId(),this.requestId=this.traceparent.getBackCompatRequestId()},t.prototype.parseHeaders=function(r,n){if(this.rawHeaders=r.headers||r.rawHeaders,this.userAgent=r.headers&&r.headers["user-agent"],this.sourceCorrelationId=TE.getCorrelationContextTarget(r,Fe.requestContextSourceKey),r.headers){var i=r.headers[Fe.traceStateHeader]?r.headers[Fe.traceStateHeader].toString():null,a=r.headers[Fe.traceparentHeader]?r.headers[Fe.traceparentHeader].toString():null,s=r.headers[Fe.requestIdHeader]?r.headers[Fe.requestIdHeader].toString():null,o=r.headers[Fe.parentIdHeader]?r.headers[Fe.parentIdHeader].toString():null,u=r.headers[Fe.rootIdHeader]?r.headers[Fe.rootIdHeader].toString():null;this.correlationContextHeader=r.headers[Fe.correlationContextHeader]?r.headers[Fe.correlationContextHeader].toString():null,ar.w3cEnabled&&(a||i)?(this.traceparent=new Hl(a?a.toString():null),this.tracestate=a&&i&&new NR(i?i.toString():null),this.setBackCompatFromThisTraceContext()):s?ar.w3cEnabled?(this.traceparent=new Hl(null,s),this.setBackCompatFromThisTraceContext()):(this.parentId=s,this.requestId=ar.generateRequestId(this.parentId),this.operationId=ar.getRootId(this.requestId)):ar.w3cEnabled?(this.traceparent=new Hl,this.traceparent.parentId=o,this.traceparent.legacyRootId=u||o,this.setBackCompatFromThisTraceContext()):(this.parentId=o,this.requestId=ar.generateRequestId(u||this.parentId),this.correlationContextHeader=null,this.operationId=ar.getRootId(this.requestId)),n&&(this.requestId=n,this.operationId=ar.getRootId(this.requestId))}},t.parseId=function(r){var n=r.split("|");return n.length>0?n[0]:""},t.keys=new PR.ContextTagKeys,t}(RR);AE.exports=DR});var HE=l((C,kE)=>{C=kE.exports=D;var H;typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?H=function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:H=function(){};C.SEMVER_SPEC_VERSION="2.0.0";var Gl=256,Eo=Number.MAX_SAFE_INTEGER||9007199254740991,Fl=16,F=C.re=[],v=C.src=[],P=0,Un=P++;v[Un]="0|[1-9]\\d*";var Bn=P++;v[Bn]="[0-9]+";var Xl=P++;v[Xl]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var IE=P++;v[IE]="("+v[Un]+")\\.("+v[Un]+")\\.("+v[Un]+")";var CE=P++;v[CE]="("+v[Bn]+")\\.("+v[Bn]+")\\.("+v[Bn]+")";var Vl=P++;v[Vl]="(?:"+v[Un]+"|"+v[Xl]+")";var $l=P++;v[$l]="(?:"+v[Bn]+"|"+v[Xl]+")";var Kl=P++;v[Kl]="(?:-("+v[Vl]+"(?:\\."+v[Vl]+")*))";var Yl=P++;v[Yl]="(?:-?("+v[$l]+"(?:\\."+v[$l]+")*))";var zl=P++;v[zl]="[0-9A-Za-z-]+";var Ji=P++;v[Ji]="(?:\\+("+v[zl]+"(?:\\."+v[zl]+")*))";var Ql=P++,bE="v?"+v[IE]+v[Kl]+"?"+v[Ji]+"?";v[Ql]="^"+bE+"$";var Wl="[v=\\s]*"+v[CE]+v[Yl]+"?"+v[Ji]+"?",Zl=P++;v[Zl]="^"+Wl+"$";var Vn=P++;v[Vn]="((?:<|>)?=?)";var mo=P++;v[mo]=v[Bn]+"|x|X|\\*";var yo=P++;v[yo]=v[Un]+"|x|X|\\*";var Vr=P++;v[Vr]="[v=\\s]*("+v[yo]+")(?:\\.("+v[yo]+")(?:\\.("+v[yo]+")(?:"+v[Kl]+")?"+v[Ji]+"?)?)?";var Gn=P++;v[Gn]="[v=\\s]*("+v[mo]+")(?:\\.("+v[mo]+")(?:\\.("+v[mo]+")(?:"+v[Yl]+")?"+v[Ji]+"?)?)?";var OE=P++;v[OE]="^"+v[Vn]+"\\s*"+v[Vr]+"$";var PE=P++;v[PE]="^"+v[Vn]+"\\s*"+v[Gn]+"$";var RE=P++;v[RE]="(?:^|[^\\d])(\\d{1,"+Fl+"})(?:\\.(\\d{1,"+Fl+"}))?(?:\\.(\\d{1,"+Fl+"}))?(?:$|[^\\d])";var bo=P++;v[bo]="(?:~>?)";var To=P++;v[To]="(\\s*)"+v[bo]+"\\s+";F[To]=new RegExp(v[To],"g");var wR="$1~",NE=P++;v[NE]="^"+v[bo]+v[Vr]+"$";var DE=P++;v[DE]="^"+v[bo]+v[Gn]+"$";var Oo=P++;v[Oo]="(?:\\^)";var Ao=P++;v[Ao]="(\\s*)"+v[Oo]+"\\s+";F[Ao]=new RegExp(v[Ao],"g");var xR="$1^",wE=P++;v[wE]="^"+v[Oo]+v[Vr]+"$";var xE=P++;v[xE]="^"+v[Oo]+v[Gn]+"$";var Jl=P++;v[Jl]="^"+v[Vn]+"\\s*("+Wl+")$|^$";var ef=P++;v[ef]="^"+v[Vn]+"\\s*("+bE+")$|^$";var Wi=P++;v[Wi]="(\\s*)"+v[Vn]+"\\s*("+Wl+"|"+v[Vr]+")";F[Wi]=new RegExp(v[Wi],"g");var MR="$1$2$3",ME=P++;v[ME]="^\\s*("+v[Vr]+")\\s+-\\s+("+v[Vr]+")\\s*$";var LE=P++;v[LE]="^\\s*("+v[Gn]+")\\s+-\\s+("+v[Gn]+")\\s*$";var qE=P++;v[qE]="(<|>)?=?\\s*\\*";for(sr=0;sr<P;sr++)H(sr,v[sr]),F[sr]||(F[sr]=new RegExp(v[sr]));var sr;C.parse=$r;function $r(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof D)return e;if(typeof e!="string"||e.length>Gl)return null;var r=t.loose?F[Zl]:F[Ql];if(!r.test(e))return null;try{return new D(e,t)}catch{return null}}C.valid=LR;function LR(e,t){var r=$r(e,t);return r?r.version:null}C.clean=qR;function qR(e,t){var r=$r(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}C.SemVer=D;function D(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof D){if(e.loose===t.loose)return e;e=e.version}else if(typeof e!="string")throw new TypeError("Invalid Version: "+e);if(e.length>Gl)throw new TypeError("version is longer than "+Gl+" characters");if(!(this instanceof D))return new D(e,t);H("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?F[Zl]:F[Ql]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>Eo||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Eo||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Eo||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(function(n){if(/^[0-9]+$/.test(n)){var i=+n;if(i>=0&&i<Eo)return i}return n}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}D.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version};D.prototype.toString=function(){return this.version};D.prototype.compare=function(e){return H("SemVer.compare",this.version,this.options,e),e instanceof D||(e=new D(e,this.options)),this.compareMain(e)||this.comparePre(e)};D.prototype.compareMain=function(e){return e instanceof D||(e=new D(e,this.options)),Fn(this.major,e.major)||Fn(this.minor,e.minor)||Fn(this.patch,e.patch)};D.prototype.comparePre=function(e){if(e instanceof D||(e=new D(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],n=e.prerelease[t];if(H("prerelease compare",t,r,n),r===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(r===void 0)return-1;if(r===n)continue;return Fn(r,n)}while(++t)};D.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",t),this.inc("pre",t);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)typeof this.prerelease[r]=="number"&&(this.prerelease[r]++,r=-2);r===-1&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this};C.inc=jR;function jR(e,t,r,n){typeof r=="string"&&(n=r,r=void 0);try{return new D(e,r).inc(t,n).version}catch{return null}}C.diff=kR;function kR(e,t){if(tf(e,t))return null;var r=$r(e),n=$r(t),i="";if(r.prerelease.length||n.prerelease.length){i="pre";var a="prerelease"}for(var s in r)if((s==="major"||s==="minor"||s==="patch")&&r[s]!==n[s])return i+s;return a}C.compareIdentifiers=Fn;var SE=/^[0-9]+$/;function Fn(e,t){var r=SE.test(e),n=SE.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1}C.rcompareIdentifiers=HR;function HR(e,t){return Fn(t,e)}C.major=UR;function UR(e,t){return new D(e,t).major}C.minor=BR;function BR(e,t){return new D(e,t).minor}C.patch=FR;function FR(e,t){return new D(e,t).patch}C.compare=wt;function wt(e,t,r){return new D(e,r).compare(new D(t,r))}C.compareLoose=GR;function GR(e,t){return wt(e,t,!0)}C.rcompare=VR;function VR(e,t,r){return wt(t,e,r)}C.sort=$R;function $R(e,t){return e.sort(function(r,n){return C.compare(r,n,t)})}C.rsort=zR;function zR(e,t){return e.sort(function(r,n){return C.rcompare(r,n,t)})}C.gt=Zi;function Zi(e,t,r){return wt(e,t,r)>0}C.lt=So;function So(e,t,r){return wt(e,t,r)<0}C.eq=tf;function tf(e,t,r){return wt(e,t,r)===0}C.neq=jE;function jE(e,t,r){return wt(e,t,r)!==0}C.gte=rf;function rf(e,t,r){return wt(e,t,r)>=0}C.lte=nf;function nf(e,t,r){return wt(e,t,r)<=0}C.cmp=Io;function Io(e,t,r,n){switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return tf(e,r,n);case"!=":return jE(e,r,n);case">":return Zi(e,r,n);case">=":return rf(e,r,n);case"<":return So(e,r,n);case"<=":return nf(e,r,n);default:throw new TypeError("Invalid operator: "+t)}}C.Comparator=Ke;function Ke(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof Ke){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof Ke))return new Ke(e,t);H("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===ea?this.value="":this.value=this.operator+this.semver.version,H("comp",this)}var ea={};Ke.prototype.parse=function(e){var t=this.options.loose?F[Jl]:F[ef],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=r[1],this.operator==="="&&(this.operator=""),r[2]?this.semver=new D(r[2],this.options.loose):this.semver=ea};Ke.prototype.toString=function(){return this.value};Ke.prototype.test=function(e){return H("Comparator.test",e,this.options.loose),this.semver===ea?!0:(typeof e=="string"&&(e=new D(e,this.options)),Io(e,this.operator,this.semver,this.options))};Ke.prototype.intersects=function(e,t){if(!(e instanceof Ke))throw new TypeError("a Comparator is required");(!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1});var r;if(this.operator==="")return r=new Z(e.value,t),Co(this.value,r,t);if(e.operator==="")return r=new Z(this.value,t),Co(e.semver,r,t);var n=(this.operator===">="||this.operator===">")&&(e.operator===">="||e.operator===">"),i=(this.operator==="<="||this.operator==="<")&&(e.operator==="<="||e.operator==="<"),a=this.semver.version===e.semver.version,s=(this.operator===">="||this.operator==="<=")&&(e.operator===">="||e.operator==="<="),o=Io(this.semver,"<",e.semver,t)&&(this.operator===">="||this.operator===">")&&(e.operator==="<="||e.operator==="<"),u=Io(this.semver,">",e.semver,t)&&(this.operator==="<="||this.operator==="<")&&(e.operator===">="||e.operator===">");return n||i||a&&s||o||u};C.Range=Z;function Z(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof Z)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new Z(e.raw,t);if(e instanceof Ke)return new Z(e.value,t);if(!(this instanceof Z))return new Z(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(r){return this.parseRange(r.trim())},this).filter(function(r){return r.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}Z.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range};Z.prototype.toString=function(){return this.range};Z.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?F[LE]:F[ME];e=e.replace(r,rN),H("hyphen replace",e),e=e.replace(F[Wi],MR),H("comparator trim",e,F[Wi]),e=e.replace(F[To],wR),e=e.replace(F[Ao],xR),e=e.split(/\s+/).join(" ");var n=t?F[Jl]:F[ef],i=e.split(" ").map(function(a){return KR(a,this.options)},this).join(" ").split(/\s+/);return this.options.loose&&(i=i.filter(function(a){return!!a.match(n)})),i=i.map(function(a){return new Ke(a,this.options)},this),i};Z.prototype.intersects=function(e,t){if(!(e instanceof Z))throw new TypeError("a Range is required");return this.set.some(function(r){return r.every(function(n){return e.set.some(function(i){return i.every(function(a){return n.intersects(a,t)})})})})};C.toComparators=XR;function XR(e,t){return new Z(e,t).set.map(function(r){return r.map(function(n){return n.value}).join(" ").trim().split(" ")})}function KR(e,t){return H("comp",e,t),e=WR(e,t),H("caret",e),e=YR(e,t),H("tildes",e),e=JR(e,t),H("xrange",e),e=tN(e,t),H("stars",e),e}function we(e){return!e||e.toLowerCase()==="x"||e==="*"}function YR(e,t){return e.trim().split(/\s+/).map(function(r){return QR(r,t)}).join(" ")}function QR(e,t){var r=t.loose?F[DE]:F[NE];return e.replace(r,function(n,i,a,s,o){H("tilde",e,n,i,a,s,o);var u;return we(i)?u="":we(a)?u=">="+i+".0.0 <"+(+i+1)+".0.0":we(s)?u=">="+i+"."+a+".0 <"+i+"."+(+a+1)+".0":o?(H("replaceTilde pr",o),u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+(+a+1)+".0"):u=">="+i+"."+a+"."+s+" <"+i+"."+(+a+1)+".0",H("tilde return",u),u})}function WR(e,t){return e.trim().split(/\s+/).map(function(r){return ZR(r,t)}).join(" ")}function ZR(e,t){H("caret",e,t);var r=t.loose?F[xE]:F[wE];return e.replace(r,function(n,i,a,s,o){H("caret",e,n,i,a,s,o);var u;return we(i)?u="":we(a)?u=">="+i+".0.0 <"+(+i+1)+".0.0":we(s)?i==="0"?u=">="+i+"."+a+".0 <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+".0 <"+(+i+1)+".0.0":o?(H("replaceCaret pr",o),i==="0"?a==="0"?u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+a+"."+(+s+1):u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+"."+s+"-"+o+" <"+(+i+1)+".0.0"):(H("no pr"),i==="0"?a==="0"?u=">="+i+"."+a+"."+s+" <"+i+"."+a+"."+(+s+1):u=">="+i+"."+a+"."+s+" <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+"."+s+" <"+(+i+1)+".0.0"),H("caret return",u),u})}function JR(e,t){return H("replaceXRanges",e,t),e.split(/\s+/).map(function(r){return eN(r,t)}).join(" ")}function eN(e,t){e=e.trim();var r=t.loose?F[PE]:F[OE];return e.replace(r,function(n,i,a,s,o,u){H("xRange",e,n,i,a,s,o,u);var c=we(a),f=c||we(s),p=f||we(o),d=p;return i==="="&&d&&(i=""),c?i===">"||i==="<"?n="<0.0.0":n="*":i&&d?(f&&(s=0),o=0,i===">"?(i=">=",f?(a=+a+1,s=0,o=0):(s=+s+1,o=0)):i==="<="&&(i="<",f?a=+a+1:s=+s+1),n=i+a+"."+s+"."+o):f?n=">="+a+".0.0 <"+(+a+1)+".0.0":p&&(n=">="+a+"."+s+".0 <"+a+"."+(+s+1)+".0"),H("xRange return",n),n})}function tN(e,t){return H("replaceStars",e,t),e.trim().replace(F[qE],"")}function rN(e,t,r,n,i,a,s,o,u,c,f,p,d){return we(r)?t="":we(n)?t=">="+r+".0.0":we(i)?t=">="+r+"."+n+".0":t=">="+t,we(u)?o="":we(c)?o="<"+(+u+1)+".0.0":we(f)?o="<"+u+"."+(+c+1)+".0":p?o="<="+u+"."+c+"."+f+"-"+p:o="<="+o,(t+" "+o).trim()}Z.prototype.test=function(e){if(!e)return!1;typeof e=="string"&&(e=new D(e,this.options));for(var t=0;t<this.set.length;t++)if(nN(this.set[t],e,this.options))return!0;return!1};function nN(e,t,r){for(var n=0;n<e.length;n++)if(!e[n].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(n=0;n<e.length;n++)if(H(e[n].semver),e[n].semver!==ea&&e[n].semver.prerelease.length>0){var i=e[n].semver;if(i.major===t.major&&i.minor===t.minor&&i.patch===t.patch)return!0}return!1}return!0}C.satisfies=Co;function Co(e,t,r){try{t=new Z(t,r)}catch{return!1}return t.test(e)}C.maxSatisfying=iN;function iN(e,t,r){var n=null,i=null;try{var a=new Z(t,r)}catch{return null}return e.forEach(function(s){a.test(s)&&(!n||i.compare(s)===-1)&&(n=s,i=new D(n,r))}),n}C.minSatisfying=aN;function aN(e,t,r){var n=null,i=null;try{var a=new Z(t,r)}catch{return null}return e.forEach(function(s){a.test(s)&&(!n||i.compare(s)===1)&&(n=s,i=new D(n,r))}),n}C.minVersion=sN;function sN(e,t){e=new Z(e,t);var r=new D("0.0.0");if(e.test(r)||(r=new D("0.0.0-0"),e.test(r)))return r;r=null;for(var n=0;n<e.set.length;++n){var i=e.set[n];i.forEach(function(a){var s=new D(a.semver.version);switch(a.operator){case">":s.prerelease.length===0?s.patch++:s.prerelease.push(0),s.raw=s.format();case"":case">=":(!r||Zi(r,s))&&(r=s);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+a.operator)}})}return r&&e.test(r)?r:null}C.validRange=oN;function oN(e,t){try{return new Z(e,t).range||"*"}catch{return null}}C.ltr=uN;function uN(e,t,r){return af(e,t,"<",r)}C.gtr=cN;function cN(e,t,r){return af(e,t,">",r)}C.outside=af;function af(e,t,r,n){e=new D(e,n),t=new Z(t,n);var i,a,s,o,u;switch(r){case">":i=Zi,a=nf,s=So,o=">",u=">=";break;case"<":i=So,a=rf,s=Zi,o="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Co(e,t,n))return!1;for(var c=0;c<t.set.length;++c){var f=t.set[c],p=null,d=null;if(f.forEach(function(h){h.semver===ea&&(h=new Ke(">=0.0.0")),p=p||h,d=d||h,i(h.semver,p.semver,n)?p=h:s(h.semver,d.semver,n)&&(d=h)}),p.operator===o||p.operator===u||(!d.operator||d.operator===o)&&a(e,d.semver))return!1;if(d.operator===u&&s(e,d.semver))return!1}return!0}C.prerelease=lN;function lN(e,t){var r=$r(e,t);return r&&r.prerelease.length?r.prerelease:null}C.intersects=fN;function fN(e,t,r){return e=new Z(e,r),t=new Z(t,r),e.intersects(t)}C.coerce=pN;function pN(e){if(e instanceof D)return e;if(typeof e!="string")return null;var t=e.match(F[RE]);return t==null?null:$r(t[1]+"."+(t[2]||"0")+"."+(t[3]||"0"))}});var Po=l((v1,FE)=>{"use strict";function sf(e){return typeof e=="function"}var xe=console.error.bind(console);function ta(e,t,r){var n=!!e[t]&&e.propertyIsEnumerable(t);Object.defineProperty(e,t,{configurable:!0,enumerable:n,writable:!0,value:r})}function ra(e){e&&e.logger&&(sf(e.logger)?xe=e.logger:xe("new logger isn't a function, not replacing"))}function UE(e,t,r){if(!e||!e[t]){xe("no original function "+t+" to wrap");return}if(!r){xe("no wrapper function"),xe(new Error().stack);return}if(!sf(e[t])||!sf(r)){xe("original object and wrapper must be functions");return}var n=e[t],i=r(n,t);return ta(i,"__original",n),ta(i,"__unwrap",function(){e[t]===i&&ta(e,t,n)}),ta(i,"__wrapped",!0),ta(e,t,i),i}function dN(e,t,r){if(e)Array.isArray(e)||(e=[e]);else{xe("must provide one or more modules to patch"),xe(new Error().stack);return}if(!(t&&Array.isArray(t))){xe("must provide one or more functions to wrap on modules");return}e.forEach(function(n){t.forEach(function(i){UE(n,i,r)})})}function BE(e,t){if(!e||!e[t]){xe("no function to unwrap."),xe(new Error().stack);return}if(!e[t].__unwrap)xe("no original to unwrap to -- has "+t+" already been unwrapped?");else return e[t].__unwrap()}function hN(e,t){if(e)Array.isArray(e)||(e=[e]);else{xe("must provide one or more modules to patch"),xe(new Error().stack);return}if(!(t&&Array.isArray(t))){xe("must provide one or more functions to unwrap on modules");return}e.forEach(function(r){t.forEach(function(n){BE(r,n)})})}ra.wrap=UE;ra.massWrap=dN;ra.unwrap=BE;ra.massUnwrap=hN;FE.exports=ra});var Do=l((g1,zE)=>{"use strict";var VE=Po(),$n=VE.wrap,Ro=VE.unwrap,xt="wrap@before";function No(e,t,r){var n=!!e[t]&&e.propertyIsEnumerable(t);Object.defineProperty(e,t,{configurable:!0,enumerable:n,writable:!0,value:r})}function _N(e,t){for(var r=t.length,n=0;n<r;n++){var i=t[n],a=e[xt];if(typeof a=="function")a(i);else if(Array.isArray(a))for(var s=a.length,o=0;o<s;o++)a[o](i)}}function $E(e,t){var r;return r=e._events&&e._events[t],Array.isArray(r)||(r?r=[r]:r=[]),r}function vN(e,t,r){var n=$E(e,t),i=n.filter(function(a){return r.indexOf(a)===-1});i.length>0&&_N(e,i)}function GE(e,t){if(!!e){var r=e;if(typeof e=="function")r=t(e);else if(Array.isArray(e)){r=[];for(var n=0;n<e.length;n++)r[n]=t(e[n])}return r}}zE.exports=function(t,r,n){if(!t||!t.on||!t.addListener||!t.removeListener||!t.emit)throw new Error("can only wrap real EEs");if(!r)throw new Error("must have function to run on listener addition");if(!n)throw new Error("must have function to wrap listeners when emitting");function i(s){return function(u,c){var f=$E(this,u).slice();try{var p=s.call(this,u,c);return vN(this,u,f),p}finally{this.on.__wrapped||$n(this,"on",i),this.addListener.__wrapped||$n(this,"addListener",i)}}}function a(s){return function(u){if(!this._events||!this._events[u])return s.apply(this,arguments);var c=this._events[u];function f(p){return function(){this._events[u]=c;try{return p.apply(this,arguments)}finally{c=this._events[u],this._events[u]=GE(c,n)}}}$n(this,"removeListener",f);try{return this._events[u]=GE(c,n),s.apply(this,arguments)}finally{Ro(this,"removeListener"),this._events[u]=c}}}t[xt]?typeof t[xt]=="function"?No(t,xt,[t[xt],r]):Array.isArray(t[xt])&&t[xt].push(r):No(t,xt,r),t.__wrapped||($n(t,"addListener",i),$n(t,"on",i),$n(t,"emit",a),No(t,"__unwrap",function(){Ro(t,"addListener"),Ro(t,"on"),Ro(t,"emit"),delete t[xt],delete t.__wrapped}),No(t,"__wrapped",!0))}});var QE=l((E1,YE)=>{"use strict";var q=__webpack_require__(970),Mt=__webpack_require__(608),gN=Do(),K=__webpack_require__(914),na="cls@contexts",ia="error@context",J=process.env.DEBUG_CLS_HOOKED,L=-1;YE.exports={getNamespace:XE,createNamespace:EN,destroyNamespace:KE,reset:mN,ERROR_SYMBOL:ia};function Ye(e){this.name=e,this.active=null,this._set=[],this.id=null,this._contexts=new Map,this._indent=0}Ye.prototype.set=function(t,r){if(!this.active)throw new Error("No context available. ns.run() or ns.bind() must be called first.");if(this.active[t]=r,J){let n=" ".repeat(this._indent<0?0:this._indent);Q(n+"CONTEXT-SET KEY:"+t+"="+r+" in ns:"+this.name+" currentUid:"+L+" active:"+q.inspect(this.active,{showHidden:!0,depth:2,colors:!0}))}return r};Ye.prototype.get=function(t){if(!this.active){if(J){let r=K.currentId(),n=K.triggerAsyncId(),i=" ".repeat(this._indent<0?0:this._indent);Q(`${i}CONTEXT-GETTING KEY NO ACTIVE NS: (${this.name}) ${t}=undefined currentUid:${L} asyncHooksCurrentId:${r} triggerId:${n} len:${this._set.length}`)}return}if(J){let r=K.executionAsyncId(),n=K.triggerAsyncId(),i=" ".repeat(this._indent<0?0:this._indent);Q(i+"CONTEXT-GETTING KEY:"+t+"="+this.active[t]+" ("+this.name+") currentUid:"+L+" active:"+q.inspect(this.active,{showHidden:!0,depth:2,colors:!0})),Q(`${i}CONTEXT-GETTING KEY: (${this.name}) ${t}=${this.active[t]} currentUid:${L} asyncHooksCurrentId:${r} triggerId:${n} len:${this._set.length} active:${q.inspect(this.active)}`)}return this.active[t]};Ye.prototype.createContext=function(){let t=Object.create(this.active?this.active:Object.prototype);if(t._ns_name=this.name,t.id=L,J){let r=K.executionAsyncId(),n=K.triggerAsyncId(),i=" ".repeat(this._indent<0?0:this._indent);Q(`${i}CONTEXT-CREATED Context: (${this.name}) currentUid:${L} asyncHooksCurrentId:${r} triggerId:${n} len:${this._set.length} context:${q.inspect(t,{showHidden:!0,depth:2,colors:!0})}`)}return t};Ye.prototype.run=function(t){let r=this.createContext();this.enter(r);try{if(J){let n=K.triggerAsyncId(),i=K.executionAsyncId(),a=" ".repeat(this._indent<0?0:this._indent);Q(`${a}CONTEXT-RUN BEGIN: (${this.name}) currentUid:${L} triggerId:${n} asyncHooksCurrentId:${i} len:${this._set.length} context:${q.inspect(r)}`)}return t(r),r}catch(n){throw n&&(n[ia]=r),n}finally{if(J){let n=K.triggerAsyncId(),i=K.executionAsyncId(),a=" ".repeat(this._indent<0?0:this._indent);Q(`${a}CONTEXT-RUN END: (${this.name}) currentUid:${L} triggerId:${n} asyncHooksCurrentId:${i} len:${this._set.length} ${q.inspect(r)}`)}this.exit(r)}};Ye.prototype.runAndReturn=function(t){let r;return this.run(function(n){r=t(n)}),r};Ye.prototype.runPromise=function(t){let r=this.createContext();this.enter(r);let n=t(r);if(!n||!n.then||!n.catch)throw new Error("fn must return a promise.");return J&&Q("CONTEXT-runPromise BEFORE: ("+this.name+") currentUid:"+L+" len:"+this._set.length+" "+q.inspect(r)),n.then(i=>(J&&Q("CONTEXT-runPromise AFTER then: ("+this.name+") currentUid:"+L+" len:"+this._set.length+" "+q.inspect(r)),this.exit(r),i)).catch(i=>{throw i[ia]=r,J&&Q("CONTEXT-runPromise AFTER catch: ("+this.name+") currentUid:"+L+" len:"+this._set.length+" "+q.inspect(r)),this.exit(r),i})};Ye.prototype.bind=function(t,r){r||(this.active?r=this.active:r=this.createContext());let n=this;return function(){n.enter(r);try{return t.apply(this,arguments)}catch(a){throw a&&(a[ia]=r),a}finally{n.exit(r)}}};Ye.prototype.enter=function(t){if(Mt.ok(t,"context must be provided for entering"),J){let r=K.executionAsyncId(),n=K.triggerAsyncId(),i=" ".repeat(this._indent<0?0:this._indent);Q(`${i}CONTEXT-ENTER: (${this.name}) currentUid:${L} triggerId:${n} asyncHooksCurrentId:${r} len:${this._set.length} ${q.inspect(t)}`)}this._set.push(this.active),this.active=t};Ye.prototype.exit=function(t){if(Mt.ok(t,"context must be provided for exiting"),J){let n=K.executionAsyncId(),i=K.triggerAsyncId(),a=" ".repeat(this._indent<0?0:this._indent);Q(`${a}CONTEXT-EXIT: (${this.name}) currentUid:${L} triggerId:${i} asyncHooksCurrentId:${n} len:${this._set.length} ${q.inspect(t)}`)}if(this.active===t){Mt.ok(this._set.length,"can't remove top context"),this.active=this._set.pop();return}let r=this._set.lastIndexOf(t);r<0?(J&&Q("??ERROR?? context exiting but not entered - ignoring: "+q.inspect(t)),Mt.ok(r>=0,`context not currently entered; can't exit. 
`+q.inspect(this)+`
`+q.inspect(t))):(Mt.ok(r,"can't remove top context"),this._set.splice(r,1))};Ye.prototype.bindEmitter=function(t){Mt.ok(t.on&&t.addListener&&t.emit,"can only bind real EEs");let r=this,n="context@"+this.name;function i(s){!s||(s[na]||(s[na]=Object.create(null)),s[na][n]={namespace:r,context:r.active})}function a(s){if(!(s&&s[na]))return s;let o=s,u=s[na];return Object.keys(u).forEach(function(c){let f=u[c];o=f.namespace.bind(o,f.context)}),o}gN(t,i,a)};Ye.prototype.fromException=function(t){return t[ia]};function XE(e){return process.namespaces[e]}function EN(e){Mt.ok(e,"namespace must be given a name."),J&&Q(`NS-CREATING NAMESPACE (${e})`);let t=new Ye(e);return t.id=L,K.createHook({init(n,i,a,s){if(L=K.executionAsyncId(),t.active){if(t._contexts.set(n,t.active),J){let o=" ".repeat(t._indent<0?0:t._indent);Q(`${o}INIT [${i}] (${e}) asyncId:${n} currentUid:${L} triggerId:${a} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} resource:${s}`)}}else if(L===0){let o=K.triggerAsyncId(),u=t._contexts.get(o);if(u){if(t._contexts.set(n,u),J){let c=" ".repeat(t._indent<0?0:t._indent);Q(`${c}INIT USING CONTEXT FROM TRIGGERID [${i}] (${e}) asyncId:${n} currentUid:${L} triggerId:${o} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} resource:${s}`)}}else if(J){let c=" ".repeat(t._indent<0?0:t._indent);Q(`${c}INIT MISSING CONTEXT [${i}] (${e}) asyncId:${n} currentUid:${L} triggerId:${o} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} resource:${s}`)}}if(J&&i==="PROMISE"){Q(q.inspect(s,{showHidden:!0}));let o=s.parentId,u=" ".repeat(t._indent<0?0:t._indent);Q(`${u}INIT RESOURCE-PROMISE [${i}] (${e}) parentId:${o} asyncId:${n} currentUid:${L} triggerId:${a} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} resource:${s}`)}},before(n){L=K.executionAsyncId();let i;if(i=t._contexts.get(n)||t._contexts.get(L),i){if(J){let a=K.triggerAsyncId(),s=" ".repeat(t._indent<0?0:t._indent);Q(`${s}BEFORE (${e}) asyncId:${n} currentUid:${L} triggerId:${a} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} context:${q.inspect(i)}`),t._indent+=2}t.enter(i)}else if(J){let a=K.triggerAsyncId(),s=" ".repeat(t._indent<0?0:t._indent);Q(`${s}BEFORE MISSING CONTEXT (${e}) asyncId:${n} currentUid:${L} triggerId:${a} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} namespace._contexts:${q.inspect(t._contexts,{showHidden:!0,depth:2,colors:!0})}`),t._indent+=2}},after(n){L=K.executionAsyncId();let i;if(i=t._contexts.get(n)||t._contexts.get(L),i){if(J){let a=K.triggerAsyncId();t._indent-=2;let s=" ".repeat(t._indent<0?0:t._indent);Q(`${s}AFTER (${e}) asyncId:${n} currentUid:${L} triggerId:${a} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} context:${q.inspect(i)}`)}t.exit(i)}else if(J){let a=K.triggerAsyncId();t._indent-=2;let s=" ".repeat(t._indent<0?0:t._indent);Q(`${s}AFTER MISSING CONTEXT (${e}) asyncId:${n} currentUid:${L} triggerId:${a} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} context:${q.inspect(i)}`)}},destroy(n){if(L=K.executionAsyncId(),J){let i=K.triggerAsyncId(),a=" ".repeat(t._indent<0?0:t._indent);Q(`${a}DESTROY (${e}) currentUid:${L} asyncId:${n} triggerId:${i} active:${q.inspect(t.active,{showHidden:!0,depth:2,colors:!0})} context:${q.inspect(t._contexts.get(L))}`)}t._contexts.delete(n)}}).enable(),process.namespaces[e]=t,t}function KE(e){let t=XE(e);Mt.ok(t,`can't delete nonexistent namespace! "`+e+'"'),Mt.ok(t.id,"don't assign to process.namespaces directly! "+q.inspect(t)),process.namespaces[e]=null}function mN(){process.namespaces&&Object.keys(process.namespaces).forEach(function(e){KE(e)}),process.namespaces=Object.create(null)}process.namespaces={};function Q(...e){J&&process._rawDebug(`${q.format(...e)}`)}});var ZE=l((m1,WE)=>{"use strict";function yN(){}WE.exports=function(){let t=this._hooks,r=this._state,n=process.nextTick;process.nextTick=function(){if(!r.enabled)return n.apply(process,arguments);let i=new Array(arguments.length);for(let u=0;u<arguments.length;u++)i[u]=arguments[u];let a=i[0];if(typeof a!="function")throw new TypeError("callback is not a function");let s=new yN,o=--r.counter;return t.init.call(s,o,0,null,null),i[0]=function(){t.pre.call(s,o);let u=!0;try{a.apply(this,arguments),u=!1}finally{u&&process.listenerCount("uncaughtException")>0&&process.once("uncaughtException",function(){t.post.call(s,o,!0),t.destroy.call(null,o)})}t.post.call(s,o,!1),t.destroy.call(null,o)},n.apply(process,i)}}});var em=l((y1,JE)=>{"use strict";function TN(){}JE.exports=function(){let t=this._hooks,r=this._state,n=global.Promise,i=n.prototype.then;n.prototype.then=u;function a(c,f,p,d){return typeof c!="function"?d?s(p):o(p):function(){t.pre.call(f,p);try{return c.apply(this,arguments)}finally{t.post.call(f,p,!1),t.destroy.call(null,p)}}}function s(c){return function(p){return t.destroy.call(null,c),p}}function o(c){return function(p){throw t.destroy.call(null,c),p}}function u(c,f){if(!r.enabled)return i.call(this,c,f);let p=new TN,d=--r.counter;return t.init.call(p,d,0,null,null),i.call(this,a(c,p,d,!0),a(f,p,d,!1))}}});var rm=l((T1,tm)=>{"use strict";var Ge=__webpack_require__(664);function AN(){}function SN(){}function IN(){}var CN=new Map,bN=new Map,ON=new Map,of=null,uf=!1;tm.exports=function(){cf(this._hooks,this._state,"setTimeout","clearTimeout",AN,CN,!0),cf(this._hooks,this._state,"setInterval","clearInterval",SN,bN,!1),cf(this._hooks,this._state,"setImmediate","clearImmediate",IN,ON,!0),global.setTimeout=Ge.setTimeout,global.setInterval=Ge.setInterval,global.setImmediate=Ge.setImmediate,global.clearTimeout=Ge.clearTimeout,global.clearInterval=Ge.clearInterval,global.clearImmediate=Ge.clearImmediate};function cf(e,t,r,n,i,a,s){let o=Ge[r],u=Ge[n];Ge[r]=function(){if(!t.enabled)return o.apply(Ge,arguments);let c=new Array(arguments.length);for(let E=0;E<arguments.length;E++)c[E]=arguments[E];let f=c[0];if(typeof f!="function")throw new TypeError('"callback" argument must be a function');let p=new i,d=--t.counter,h;return e.init.call(p,d,0,null,null),c[0]=function(){of=h,e.pre.call(p,d);let E=!0;try{f.apply(this,arguments),E=!1}finally{E&&process.listenerCount("uncaughtException")>0&&process.once("uncaughtException",function(){e.post.call(p,d,!0),a.delete(h),e.destroy.call(null,d)})}e.post.call(p,d,!1),of=null,(s||uf)&&(uf=!1,a.delete(h),e.destroy.call(null,d))},h=o.apply(Ge,c),a.set(h,d),h},Ge[n]=function(c){if(of===c&&c!==null)uf=!0;else if(a.has(c)){let f=a.get(c);a.delete(c),e.destroy.call(null,f)}u.apply(Ge,arguments)}}});var lf=l((A1,PN)=>{PN.exports={name:"async-hook-jl",description:"Inspect the life of handle objects in node",version:"1.7.6",author:"Andreas Madsen <amwebdk@gmail.com>",main:"./index.js",scripts:{test:"node ./test/runner.js && eslint ."},repository:{type:"git",url:"git://github.com/jeff-lewis/async-hook-jl.git"},keywords:["async","async hooks","inspect","async wrap"],license:"MIT",dependencies:{"stack-chain":"^1.3.7"},devDependencies:{async:"1.5.x","cli-color":"1.1.x",eslint:"^3.4.0",endpoint:"0.4.x"},engines:{node:"^4.7 || >=6.9 || >=7.3"}}});var am=l((S1,im)=>{"use strict";var sa=process.binding("async_wrap"),RN=sa.Providers.TIMERWRAP,nm={nextTick:ZE(),promise:em(),timers:rm()},aa=new Set;function NN(){this.enabled=!1,this.counter=0}function ff(){let e=this.initFns=[],t=this.preFns=[],r=this.postFns=[],n=this.destroyFns=[];this.init=function(i,a,s,o){if(a===RN){aa.add(i);return}for(let u of e)u(i,this,a,s,o)},this.pre=function(i){if(!aa.has(i))for(let a of t)a(i,this)},this.post=function(i,a){if(!aa.has(i))for(let s of r)s(i,this,a)},this.destroy=function(i){if(aa.has(i)){aa.delete(i);return}for(let a of n)a(i)}}ff.prototype.add=function(e){e.init&&this.initFns.push(e.init),e.pre&&this.preFns.push(e.pre),e.post&&this.postFns.push(e.post),e.destroy&&this.destroyFns.push(e.destroy)};function wo(e,t){let r=e.indexOf(t);r!==-1&&e.splice(r,1)}ff.prototype.remove=function(e){e.init&&wo(this.initFns,e.init),e.pre&&wo(this.preFns,e.pre),e.post&&wo(this.postFns,e.post),e.destroy&&wo(this.destroyFns,e.destroy)};function oa(){this._state=new NN,this._hooks=new ff,this.version=lf().version,this.providers=sa.Providers;for(let e of Object.keys(nm))nm[e].call(this);process.env.hasOwnProperty("NODE_ASYNC_HOOK_WARNING")&&console.warn("warning: you are using async-hook-jl which is unstable."),sa.setupHooks({init:this._hooks.init,pre:this._hooks.pre,post:this._hooks.post,destroy:this._hooks.destroy})}im.exports=oa;oa.prototype.addHooks=function(e){this._hooks.add(e)};oa.prototype.removeHooks=function(e){this._hooks.remove(e)};oa.prototype.enable=function(){this._state.enabled=!0,sa.enable()};oa.prototype.disable=function(){this._state.enabled=!1,sa.disable()}});var pf=l((I1,DN)=>{DN.exports={name:"stack-chain",description:"API for combining call site modifiers",version:"1.3.7",author:"Andreas Madsen <amwebdk@gmail.com>",scripts:{test:"tap ./test/simple"},repository:{type:"git",url:"git://github.com/AndreasMadsen/stack-chain.git"},keywords:["stack","chain","trace","call site","concat","format"],devDependencies:{tap:"2.x.x","uglify-js":"2.5.x"},license:"MIT"}});var om=l((C1,sm)=>{function wN(e){try{return Error.prototype.toString.call(e)}catch(t){try{return"<error: "+t+">"}catch{return"<error>"}}}sm.exports=function(t,r){var n=[];n.push(wN(t));for(var i=0;i<r.length;i++){var a=r[i],s;try{s=a.toString()}catch(o){try{s="<error: "+o+">"}catch{s="<error>"}}n.push("    at "+s)}return n.join(`
`)}});var fm=l((b1,lm)=>{var xo=om();function cm(){this.extend=new ua,this.filter=new ua,this.format=new ca,this.version=pf().version}var hf=!1;cm.prototype.callSite=function e(t){t||(t={}),hf=!0;var r={};Error.captureStackTrace(r,e);var n=r.stack;return hf=!1,n=n.slice(t.slice||0),t.extend&&(n=this.extend._modify(r,n)),t.filter&&(n=this.filter._modify(r,n)),n};var or=new cm;function ua(){this._modifiers=[]}ua.prototype._modify=function(e,t){for(var r=0,n=this._modifiers.length;r<n;r++)t=this._modifiers[r](e,t);return t};ua.prototype.attach=function(e){this._modifiers.push(e)};ua.prototype.deattach=function(e){var t=this._modifiers.indexOf(e);return t===-1?!1:(this._modifiers.splice(t,1),!0)};function ca(){this._formater=xo,this._previous=void 0}ca.prototype.replace=function(e){e?this._formater=e:this.restore()};ca.prototype.restore=function(){this._formater=xo,this._previous=void 0};ca.prototype._backup=function(){this._previous=this._formater};ca.prototype._roolback=function(){this._previous===xo?this.replace(void 0):this.replace(this._previous),this._previous=void 0};Error.prepareStackTrace&&or.format.replace(Error.prepareStackTrace);var df=!1;function um(e,t){if(hf)return t;if(df)return xo(e,t);var r=t.concat();r=or.extend._modify(e,r),r=or.filter._modify(e,r),r=r.slice(0,Error.stackTraceLimit),Object.isExtensible(e)&&Object.getOwnPropertyDescriptor(e,"callSite")===void 0&&(e.callSite={original:t,mutated:r}),df=!0;var n=or.format._formater(e,r);return df=!1,n}Object.defineProperty(Error,"prepareStackTrace",{get:function(){return um},set:function(e){e===um?or.format._roolback():(or.format._backup(),or.format.replace(e))}});function xN(){return this.stack,this.callSite}Object.defineProperty(Error.prototype,"callSite",{get:xN,set:function(e){Object.defineProperty(this,"callSite",{value:e,writable:!0,configurable:!0})},configurable:!0});lm.exports=or});var vf=l((O1,_f)=>{if(global._stackChain)if(global._stackChain.version===pf().version)_f.exports=global._stackChain;else throw new Error("Conflicting version of stack-chain found");else _f.exports=global._stackChain=fm()});var pm=l((P1,gf)=>{"use strict";var MN=am();if(global._asyncHook)if(global._asyncHook.version===lf().version)gf.exports=global._asyncHook;else throw new Error("Conflicting version of async-hook-jl found");else vf().filter.attach(function(t,r){return r.filter(function(n){let i=n.getFileName();return!(i&&i.slice(0,__dirname.length)===__dirname)})}),gf.exports=global._asyncHook=new MN});var Em=l((R1,gm)=>{"use strict";var ce=__webpack_require__(970),Lt=__webpack_require__(608),LN=Do(),zn=pm(),la="cls@contexts",fa="error@context",hm=[];for(let e in zn.providers)hm[zn.providers[e]]=e;var ae=process.env.DEBUG_CLS_HOOKED,pe=-1;gm.exports={getNamespace:_m,createNamespace:qN,destroyNamespace:vm,reset:jN,ERROR_SYMBOL:fa};function Qe(e){this.name=e,this.active=null,this._set=[],this.id=null,this._contexts=new Map}Qe.prototype.set=function(t,r){if(!this.active)throw new Error("No context available. ns.run() or ns.bind() must be called first.");return ae&&ue("    SETTING KEY:"+t+"="+r+" in ns:"+this.name+" uid:"+pe+" active:"+ce.inspect(this.active,!0)),this.active[t]=r,r};Qe.prototype.get=function(t){if(!this.active){ae&&ue("    GETTING KEY:"+t+"=undefined "+this.name+" uid:"+pe+" active:"+ce.inspect(this.active,!0));return}return ae&&ue("    GETTING KEY:"+t+"="+this.active[t]+" "+this.name+" uid:"+pe+" active:"+ce.inspect(this.active,!0)),this.active[t]};Qe.prototype.createContext=function(){ae&&ue("   CREATING Context: "+this.name+" uid:"+pe+" len:"+this._set.length+"  active:"+ce.inspect(this.active,!0,2,!0));let t=Object.create(this.active?this.active:Object.prototype);return t._ns_name=this.name,t.id=pe,ae&&ue("   CREATED Context: "+this.name+" uid:"+pe+" len:"+this._set.length+"  context:"+ce.inspect(t,!0,2,!0)),t};Qe.prototype.run=function(t){let r=this.createContext();this.enter(r);try{return ae&&ue(" BEFORE RUN: "+this.name+" uid:"+pe+" len:"+this._set.length+" "+ce.inspect(r)),t(r),r}catch(n){throw n&&(n[fa]=r),n}finally{ae&&ue(" AFTER RUN: "+this.name+" uid:"+pe+" len:"+this._set.length+" "+ce.inspect(r)),this.exit(r)}};Qe.prototype.runAndReturn=function(t){var r;return this.run(function(n){r=t(n)}),r};Qe.prototype.runPromise=function(t){let r=this.createContext();this.enter(r);let n=t(r);if(!n||!n.then||!n.catch)throw new Error("fn must return a promise.");return ae&&ue(" BEFORE runPromise: "+this.name+" uid:"+pe+" len:"+this._set.length+" "+ce.inspect(r)),n.then(i=>(ae&&ue(" AFTER runPromise: "+this.name+" uid:"+pe+" len:"+this._set.length+" "+ce.inspect(r)),this.exit(r),i)).catch(i=>{throw i[fa]=r,ae&&ue(" AFTER runPromise: "+this.name+" uid:"+pe+" len:"+this._set.length+" "+ce.inspect(r)),this.exit(r),i})};Qe.prototype.bind=function(t,r){r||(this.active?r=this.active:r=this.createContext());let n=this;return function(){n.enter(r);try{return t.apply(this,arguments)}catch(a){throw a&&(a[fa]=r),a}finally{n.exit(r)}}};Qe.prototype.enter=function(t){Lt.ok(t,"context must be provided for entering"),ae&&ue("  ENTER "+this.name+" uid:"+pe+" len:"+this._set.length+" context: "+ce.inspect(t)),this._set.push(this.active),this.active=t};Qe.prototype.exit=function(t){if(Lt.ok(t,"context must be provided for exiting"),ae&&ue("  EXIT "+this.name+" uid:"+pe+" len:"+this._set.length+" context: "+ce.inspect(t)),this.active===t){Lt.ok(this._set.length,"can't remove top context"),this.active=this._set.pop();return}let r=this._set.lastIndexOf(t);r<0?(ae&&ue("??ERROR?? context exiting but not entered - ignoring: "+ce.inspect(t)),Lt.ok(r>=0,`context not currently entered; can't exit. 
`+ce.inspect(this)+`
`+ce.inspect(t))):(Lt.ok(r,"can't remove top context"),this._set.splice(r,1))};Qe.prototype.bindEmitter=function(t){Lt.ok(t.on&&t.addListener&&t.emit,"can only bind real EEs");let r=this,n="context@"+this.name;function i(s){!s||(s[la]||(s[la]=Object.create(null)),s[la][n]={namespace:r,context:r.active})}function a(s){if(!(s&&s[la]))return s;let o=s,u=s[la];return Object.keys(u).forEach(function(c){let f=u[c];o=f.namespace.bind(o,f.context)}),o}LN(t,i,a)};Qe.prototype.fromException=function(t){return t[fa]};function _m(e){return process.namespaces[e]}function qN(e){Lt.ok(e,"namespace must be given a name."),ae&&ue("CREATING NAMESPACE "+e);let t=new Qe(e);return t.id=pe,zn.addHooks({init(r,n,i,a,s){pe=r,a?(t._contexts.set(r,t._contexts.get(a)),ae&&ue("PARENTID: "+e+" uid:"+r+" parent:"+a+" provider:"+i)):t._contexts.set(pe,t.active),ae&&ue("INIT "+e+" uid:"+r+" parent:"+a+" provider:"+hm[i]+" active:"+ce.inspect(t.active,!0))},pre(r,n){pe=r;let i=t._contexts.get(r);i?(ae&&ue(" PRE "+e+" uid:"+r+" handle:"+Mo(n)+" context:"+ce.inspect(i)),t.enter(i)):ae&&ue(" PRE MISSING CONTEXT "+e+" uid:"+r+" handle:"+Mo(n))},post(r,n){pe=r;let i=t._contexts.get(r);i?(ae&&ue(" POST "+e+" uid:"+r+" handle:"+Mo(n)+" context:"+ce.inspect(i)),t.exit(i)):ae&&ue(" POST MISSING CONTEXT "+e+" uid:"+r+" handle:"+Mo(n))},destroy(r){pe=r,ae&&ue("DESTROY "+e+" uid:"+r+" context:"+ce.inspect(t._contexts.get(pe))+" active:"+ce.inspect(t.active,!0)),t._contexts.delete(r)}}),process.namespaces[e]=t,t}function vm(e){let t=_m(e);Lt.ok(t,`can't delete nonexistent namespace! "`+e+'"'),Lt.ok(t.id,"don't assign to process.namespaces directly! "+ce.inspect(t)),process.namespaces[e]=null}function jN(){process.namespaces&&Object.keys(process.namespaces).forEach(function(e){vm(e)}),process.namespaces=Object.create(null)}process.namespaces={};zn._state&&!zn._state.enabled&&zn.enable();function ue(e){process.env.DEBUG&&process._rawDebug(e)}function Mo(e){if(!e)return e;if(typeof e=="function")return e.name?e.name:(e.toString().trim().match(/^function\s*([^\s(]+)/)||[])[1];if(e.constructor&&e.constructor.name)return e.constructor.name}if(ae){Ef=vf();for(dm in Ef.filter._modifiers)Ef.filter.deattach(dm)}var Ef,dm});var mm=l((N1,mf)=>{"use strict";var kN=HE();process&&kN.gte(process.versions.node,"8.0.0")?mf.exports=QE():mf.exports=Em()});var qm=l((b,Lm)=>{b=Lm.exports=w;var U;typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?U=function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:U=function(){};b.SEMVER_SPEC_VERSION="2.0.0";var Tf=256,Lo=Number.MAX_SAFE_INTEGER||9007199254740991,yf=16,G=b.re=[],g=b.src=[],R=0,Xn=R++;g[Xn]="0|[1-9]\\d*";var Kn=R++;g[Kn]="[0-9]+";var Cf=R++;g[Cf]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var Tm=R++;g[Tm]="("+g[Xn]+")\\.("+g[Xn]+")\\.("+g[Xn]+")";var Am=R++;g[Am]="("+g[Kn]+")\\.("+g[Kn]+")\\.("+g[Kn]+")";var Af=R++;g[Af]="(?:"+g[Xn]+"|"+g[Cf]+")";var Sf=R++;g[Sf]="(?:"+g[Kn]+"|"+g[Cf]+")";var bf=R++;g[bf]="(?:-("+g[Af]+"(?:\\."+g[Af]+")*))";var Of=R++;g[Of]="(?:-?("+g[Sf]+"(?:\\."+g[Sf]+")*))";var If=R++;g[If]="[0-9A-Za-z-]+";var ha=R++;g[ha]="(?:\\+("+g[If]+"(?:\\."+g[If]+")*))";var Pf=R++,Sm="v?"+g[Tm]+g[bf]+"?"+g[ha]+"?";g[Pf]="^"+Sm+"$";var Rf="[v=\\s]*"+g[Am]+g[Of]+"?"+g[ha]+"?",Nf=R++;g[Nf]="^"+Rf+"$";var Wn=R++;g[Wn]="((?:<|>)?=?)";var qo=R++;g[qo]=g[Kn]+"|x|X|\\*";var jo=R++;g[jo]=g[Xn]+"|x|X|\\*";var zr=R++;g[zr]="[v=\\s]*("+g[jo]+")(?:\\.("+g[jo]+")(?:\\.("+g[jo]+")(?:"+g[bf]+")?"+g[ha]+"?)?)?";var Qn=R++;g[Qn]="[v=\\s]*("+g[qo]+")(?:\\.("+g[qo]+")(?:\\.("+g[qo]+")(?:"+g[Of]+")?"+g[ha]+"?)?)?";var Im=R++;g[Im]="^"+g[Wn]+"\\s*"+g[zr]+"$";var Cm=R++;g[Cm]="^"+g[Wn]+"\\s*"+g[Qn]+"$";var bm=R++;g[bm]="(?:^|[^\\d])(\\d{1,"+yf+"})(?:\\.(\\d{1,"+yf+"}))?(?:\\.(\\d{1,"+yf+"}))?(?:$|[^\\d])";var Go=R++;g[Go]="(?:~>?)";var ko=R++;g[ko]="(\\s*)"+g[Go]+"\\s+";G[ko]=new RegExp(g[ko],"g");var HN="$1~",Om=R++;g[Om]="^"+g[Go]+g[zr]+"$";var Pm=R++;g[Pm]="^"+g[Go]+g[Qn]+"$";var Vo=R++;g[Vo]="(?:\\^)";var Ho=R++;g[Ho]="(\\s*)"+g[Vo]+"\\s+";G[Ho]=new RegExp(g[Ho],"g");var UN="$1^",Rm=R++;g[Rm]="^"+g[Vo]+g[zr]+"$";var Nm=R++;g[Nm]="^"+g[Vo]+g[Qn]+"$";var Df=R++;g[Df]="^"+g[Wn]+"\\s*("+Rf+")$|^$";var wf=R++;g[wf]="^"+g[Wn]+"\\s*("+Sm+")$|^$";var pa=R++;g[pa]="(\\s*)"+g[Wn]+"\\s*("+Rf+"|"+g[zr]+")";G[pa]=new RegExp(g[pa],"g");var BN="$1$2$3",Dm=R++;g[Dm]="^\\s*("+g[zr]+")\\s+-\\s+("+g[zr]+")\\s*$";var wm=R++;g[wm]="^\\s*("+g[Qn]+")\\s+-\\s+("+g[Qn]+")\\s*$";var xm=R++;g[xm]="(<|>)?=?\\s*\\*";for(ur=0;ur<R;ur++)U(ur,g[ur]),G[ur]||(G[ur]=new RegExp(g[ur]));var ur;b.parse=Xr;function Xr(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof w)return e;if(typeof e!="string"||e.length>Tf)return null;var r=t.loose?G[Nf]:G[Pf];if(!r.test(e))return null;try{return new w(e,t)}catch{return null}}b.valid=FN;function FN(e,t){var r=Xr(e,t);return r?r.version:null}b.clean=GN;function GN(e,t){var r=Xr(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}b.SemVer=w;function w(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof w){if(e.loose===t.loose)return e;e=e.version}else if(typeof e!="string")throw new TypeError("Invalid Version: "+e);if(e.length>Tf)throw new TypeError("version is longer than "+Tf+" characters");if(!(this instanceof w))return new w(e,t);U("SemVer",e,t),this.options=t,this.loose=!!t.loose;var r=e.trim().match(t.loose?G[Nf]:G[Pf]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>Lo||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Lo||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Lo||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(function(n){if(/^[0-9]+$/.test(n)){var i=+n;if(i>=0&&i<Lo)return i}return n}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}w.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version};w.prototype.toString=function(){return this.version};w.prototype.compare=function(e){return U("SemVer.compare",this.version,this.options,e),e instanceof w||(e=new w(e,this.options)),this.compareMain(e)||this.comparePre(e)};w.prototype.compareMain=function(e){return e instanceof w||(e=new w(e,this.options)),Yn(this.major,e.major)||Yn(this.minor,e.minor)||Yn(this.patch,e.patch)};w.prototype.comparePre=function(e){if(e instanceof w||(e=new w(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var r=this.prerelease[t],n=e.prerelease[t];if(U("prerelease compare",t,r,n),r===void 0&&n===void 0)return 0;if(n===void 0)return 1;if(r===void 0)return-1;if(r===n)continue;return Yn(r,n)}while(++t)};w.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",t),this.inc("pre",t);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{for(var r=this.prerelease.length;--r>=0;)typeof this.prerelease[r]=="number"&&(this.prerelease[r]++,r=-2);r===-1&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this};b.inc=VN;function VN(e,t,r,n){typeof r=="string"&&(n=r,r=void 0);try{return new w(e,r).inc(t,n).version}catch{return null}}b.diff=$N;function $N(e,t){if(xf(e,t))return null;var r=Xr(e),n=Xr(t),i="";if(r.prerelease.length||n.prerelease.length){i="pre";var a="prerelease"}for(var s in r)if((s==="major"||s==="minor"||s==="patch")&&r[s]!==n[s])return i+s;return a}b.compareIdentifiers=Yn;var ym=/^[0-9]+$/;function Yn(e,t){var r=ym.test(e),n=ym.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1}b.rcompareIdentifiers=zN;function zN(e,t){return Yn(t,e)}b.major=XN;function XN(e,t){return new w(e,t).major}b.minor=KN;function KN(e,t){return new w(e,t).minor}b.patch=YN;function YN(e,t){return new w(e,t).patch}b.compare=qt;function qt(e,t,r){return new w(e,r).compare(new w(t,r))}b.compareLoose=QN;function QN(e,t){return qt(e,t,!0)}b.rcompare=WN;function WN(e,t,r){return qt(t,e,r)}b.sort=ZN;function ZN(e,t){return e.sort(function(r,n){return b.compare(r,n,t)})}b.rsort=JN;function JN(e,t){return e.sort(function(r,n){return b.rcompare(r,n,t)})}b.gt=da;function da(e,t,r){return qt(e,t,r)>0}b.lt=Uo;function Uo(e,t,r){return qt(e,t,r)<0}b.eq=xf;function xf(e,t,r){return qt(e,t,r)===0}b.neq=Mm;function Mm(e,t,r){return qt(e,t,r)!==0}b.gte=Mf;function Mf(e,t,r){return qt(e,t,r)>=0}b.lte=Lf;function Lf(e,t,r){return qt(e,t,r)<=0}b.cmp=Bo;function Bo(e,t,r,n){switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return xf(e,r,n);case"!=":return Mm(e,r,n);case">":return da(e,r,n);case">=":return Mf(e,r,n);case"<":return Uo(e,r,n);case"<=":return Lf(e,r,n);default:throw new TypeError("Invalid operator: "+t)}}b.Comparator=We;function We(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof We){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof We))return new We(e,t);U("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===_a?this.value="":this.value=this.operator+this.semver.version,U("comp",this)}var _a={};We.prototype.parse=function(e){var t=this.options.loose?G[Df]:G[wf],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=r[1],this.operator==="="&&(this.operator=""),r[2]?this.semver=new w(r[2],this.options.loose):this.semver=_a};We.prototype.toString=function(){return this.value};We.prototype.test=function(e){return U("Comparator.test",e,this.options.loose),this.semver===_a?!0:(typeof e=="string"&&(e=new w(e,this.options)),Bo(e,this.operator,this.semver,this.options))};We.prototype.intersects=function(e,t){if(!(e instanceof We))throw new TypeError("a Comparator is required");(!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1});var r;if(this.operator==="")return r=new ee(e.value,t),Fo(this.value,r,t);if(e.operator==="")return r=new ee(this.value,t),Fo(e.semver,r,t);var n=(this.operator===">="||this.operator===">")&&(e.operator===">="||e.operator===">"),i=(this.operator==="<="||this.operator==="<")&&(e.operator==="<="||e.operator==="<"),a=this.semver.version===e.semver.version,s=(this.operator===">="||this.operator==="<=")&&(e.operator===">="||e.operator==="<="),o=Bo(this.semver,"<",e.semver,t)&&(this.operator===">="||this.operator===">")&&(e.operator==="<="||e.operator==="<"),u=Bo(this.semver,">",e.semver,t)&&(this.operator==="<="||this.operator==="<")&&(e.operator===">="||e.operator===">");return n||i||a&&s||o||u};b.Range=ee;function ee(e,t){if((!t||typeof t!="object")&&(t={loose:!!t,includePrerelease:!1}),e instanceof ee)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new ee(e.raw,t);if(e instanceof We)return new ee(e.value,t);if(!(this instanceof ee))return new ee(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(r){return this.parseRange(r.trim())},this).filter(function(r){return r.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}ee.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range};ee.prototype.toString=function(){return this.range};ee.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();var r=t?G[wm]:G[Dm];e=e.replace(r,cD),U("hyphen replace",e),e=e.replace(G[pa],BN),U("comparator trim",e,G[pa]),e=e.replace(G[ko],HN),e=e.replace(G[Ho],UN),e=e.split(/\s+/).join(" ");var n=t?G[Df]:G[wf],i=e.split(" ").map(function(a){return tD(a,this.options)},this).join(" ").split(/\s+/);return this.options.loose&&(i=i.filter(function(a){return!!a.match(n)})),i=i.map(function(a){return new We(a,this.options)},this),i};ee.prototype.intersects=function(e,t){if(!(e instanceof ee))throw new TypeError("a Range is required");return this.set.some(function(r){return r.every(function(n){return e.set.some(function(i){return i.every(function(a){return n.intersects(a,t)})})})})};b.toComparators=eD;function eD(e,t){return new ee(e,t).set.map(function(r){return r.map(function(n){return n.value}).join(" ").trim().split(" ")})}function tD(e,t){return U("comp",e,t),e=iD(e,t),U("caret",e),e=rD(e,t),U("tildes",e),e=sD(e,t),U("xrange",e),e=uD(e,t),U("stars",e),e}function Me(e){return!e||e.toLowerCase()==="x"||e==="*"}function rD(e,t){return e.trim().split(/\s+/).map(function(r){return nD(r,t)}).join(" ")}function nD(e,t){var r=t.loose?G[Pm]:G[Om];return e.replace(r,function(n,i,a,s,o){U("tilde",e,n,i,a,s,o);var u;return Me(i)?u="":Me(a)?u=">="+i+".0.0 <"+(+i+1)+".0.0":Me(s)?u=">="+i+"."+a+".0 <"+i+"."+(+a+1)+".0":o?(U("replaceTilde pr",o),u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+(+a+1)+".0"):u=">="+i+"."+a+"."+s+" <"+i+"."+(+a+1)+".0",U("tilde return",u),u})}function iD(e,t){return e.trim().split(/\s+/).map(function(r){return aD(r,t)}).join(" ")}function aD(e,t){U("caret",e,t);var r=t.loose?G[Nm]:G[Rm];return e.replace(r,function(n,i,a,s,o){U("caret",e,n,i,a,s,o);var u;return Me(i)?u="":Me(a)?u=">="+i+".0.0 <"+(+i+1)+".0.0":Me(s)?i==="0"?u=">="+i+"."+a+".0 <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+".0 <"+(+i+1)+".0.0":o?(U("replaceCaret pr",o),i==="0"?a==="0"?u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+a+"."+(+s+1):u=">="+i+"."+a+"."+s+"-"+o+" <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+"."+s+"-"+o+" <"+(+i+1)+".0.0"):(U("no pr"),i==="0"?a==="0"?u=">="+i+"."+a+"."+s+" <"+i+"."+a+"."+(+s+1):u=">="+i+"."+a+"."+s+" <"+i+"."+(+a+1)+".0":u=">="+i+"."+a+"."+s+" <"+(+i+1)+".0.0"),U("caret return",u),u})}function sD(e,t){return U("replaceXRanges",e,t),e.split(/\s+/).map(function(r){return oD(r,t)}).join(" ")}function oD(e,t){e=e.trim();var r=t.loose?G[Cm]:G[Im];return e.replace(r,function(n,i,a,s,o,u){U("xRange",e,n,i,a,s,o,u);var c=Me(a),f=c||Me(s),p=f||Me(o),d=p;return i==="="&&d&&(i=""),c?i===">"||i==="<"?n="<0.0.0":n="*":i&&d?(f&&(s=0),o=0,i===">"?(i=">=",f?(a=+a+1,s=0,o=0):(s=+s+1,o=0)):i==="<="&&(i="<",f?a=+a+1:s=+s+1),n=i+a+"."+s+"."+o):f?n=">="+a+".0.0 <"+(+a+1)+".0.0":p&&(n=">="+a+"."+s+".0 <"+a+"."+(+s+1)+".0"),U("xRange return",n),n})}function uD(e,t){return U("replaceStars",e,t),e.trim().replace(G[xm],"")}function cD(e,t,r,n,i,a,s,o,u,c,f,p,d){return Me(r)?t="":Me(n)?t=">="+r+".0.0":Me(i)?t=">="+r+"."+n+".0":t=">="+t,Me(u)?o="":Me(c)?o="<"+(+u+1)+".0.0":Me(f)?o="<"+u+"."+(+c+1)+".0":p?o="<="+u+"."+c+"."+f+"-"+p:o="<="+o,(t+" "+o).trim()}ee.prototype.test=function(e){if(!e)return!1;typeof e=="string"&&(e=new w(e,this.options));for(var t=0;t<this.set.length;t++)if(lD(this.set[t],e,this.options))return!0;return!1};function lD(e,t,r){for(var n=0;n<e.length;n++)if(!e[n].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(n=0;n<e.length;n++)if(U(e[n].semver),e[n].semver!==_a&&e[n].semver.prerelease.length>0){var i=e[n].semver;if(i.major===t.major&&i.minor===t.minor&&i.patch===t.patch)return!0}return!1}return!0}b.satisfies=Fo;function Fo(e,t,r){try{t=new ee(t,r)}catch{return!1}return t.test(e)}b.maxSatisfying=fD;function fD(e,t,r){var n=null,i=null;try{var a=new ee(t,r)}catch{return null}return e.forEach(function(s){a.test(s)&&(!n||i.compare(s)===-1)&&(n=s,i=new w(n,r))}),n}b.minSatisfying=pD;function pD(e,t,r){var n=null,i=null;try{var a=new ee(t,r)}catch{return null}return e.forEach(function(s){a.test(s)&&(!n||i.compare(s)===1)&&(n=s,i=new w(n,r))}),n}b.minVersion=dD;function dD(e,t){e=new ee(e,t);var r=new w("0.0.0");if(e.test(r)||(r=new w("0.0.0-0"),e.test(r)))return r;r=null;for(var n=0;n<e.set.length;++n){var i=e.set[n];i.forEach(function(a){var s=new w(a.semver.version);switch(a.operator){case">":s.prerelease.length===0?s.patch++:s.prerelease.push(0),s.raw=s.format();case"":case">=":(!r||da(r,s))&&(r=s);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+a.operator)}})}return r&&e.test(r)?r:null}b.validRange=hD;function hD(e,t){try{return new ee(e,t).range||"*"}catch{return null}}b.ltr=_D;function _D(e,t,r){return qf(e,t,"<",r)}b.gtr=vD;function vD(e,t,r){return qf(e,t,">",r)}b.outside=qf;function qf(e,t,r,n){e=new w(e,n),t=new ee(t,n);var i,a,s,o,u;switch(r){case">":i=da,a=Lf,s=Uo,o=">",u=">=";break;case"<":i=Uo,a=Mf,s=da,o="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Fo(e,t,n))return!1;for(var c=0;c<t.set.length;++c){var f=t.set[c],p=null,d=null;if(f.forEach(function(h){h.semver===_a&&(h=new We(">=0.0.0")),p=p||h,d=d||h,i(h.semver,p.semver,n)?p=h:s(h.semver,d.semver,n)&&(d=h)}),p.operator===o||p.operator===u||(!d.operator||d.operator===o)&&a(e,d.semver))return!1;if(d.operator===u&&s(e,d.semver))return!1}return!0}b.prerelease=gD;function gD(e,t){var r=Xr(e,t);return r&&r.prerelease.length?r.prerelease:null}b.intersects=ED;function ED(e,t,r){return e=new ee(e,r),t=new ee(t,r),e.intersects(t)}b.coerce=mD;function mD(e){if(e instanceof w)return e;if(typeof e!="string")return null;var t=e.match(G[bm]);return t==null?null:Xr(t[1]+"."+(t[2]||"0")+"."+(t[3]||"0"))}});var Hm=l((D1,km)=>{var yD=Po().wrap,kf=1<<0,Hf=1<<1,Uf=1<<2,zo=1<<3,V=[],TD=0,Oe=!1,cr=[],Zn,Bf;function Ff(e,t){var r=e.length,n=t.length,i=[];if(r===0&&n===0)return i;for(var a=0;a<r;a++)i[a]=e[a];if(n===0)return i;for(var s=0;s<n;s++){var o=!0;for(a=0;a<r;a++)if(e[a].uid===t[s].uid){o=!1;break}o&&i.push(t[s])}return i}process._fatalException?($o=!1,Zn=function(t){var r=V.length;if($o||r===0)return!1;var n=!1;$o=!0;for(var i=0;i<r;++i){var a=V[i];if((a.flags&zo)!==0){var s=Jn&&Jn[a.uid];n=a.error(s,t)||n}}return $o=!1,cr.length>0&&(V=cr.pop()),Jn=void 0,n&&!Oe},Bf=function(t,r,n){var i=[];Oe=!0;for(var a=0;a<n;++a){var s=r[a];if(i[s.uid]=s.data,(s.flags&kf)!==0){var o=s.create(s.data);o!==void 0&&(i[s.uid]=o)}}return Oe=!1,function(){Jn=i,cr.push(V),V=Ff(r,V),Oe=!0;for(var u=0;u<n;++u)(r[u].flags&Hf)>0&&r[u].before(this,i[r[u].uid]);Oe=!1;var c=t.apply(this,arguments);for(Oe=!0,u=0;u<n;++u)(r[u].flags&Uf)>0&&r[u].after(this,i[r[u].uid]);return Oe=!1,V=cr.pop(),Jn=void 0,c}},yD(process,"_fatalException",function(e){return function(r){return Zn(r)||e(r)}})):(jf=!1,Zn=function(t){if(jf)throw t;for(var r=!1,n=V.length,i=0;i<n;++i){var a=V[i];(a.flags&zo)!==0&&(r=a.error(null,t)||r)}if(!r&&Oe)throw t},Bf=function(t,r,n){var i=[];Oe=!0;for(var a=0;a<n;++a){var s=r[a];if(i[s.uid]=s.data,(s.flags&kf)!==0){var o=s.create(s.data);o!==void 0&&(i[s.uid]=o)}}return Oe=!1,function(){var u=!1,c=!1;cr.push(V),V=Ff(r,V),Oe=!0;for(var f=0;f<n;++f)(r[f].flags&Hf)>0&&r[f].before(this,i[r[f].uid]);Oe=!1;var p;try{p=t.apply(this,arguments)}catch(d){u=!0;for(var f=0;f<n;++f)if((V[f].flags&zo)!=0)try{c=V[f].error(i[r[f].uid],d)||c}catch(E){throw jf=!0,E}if(!c)throw process.removeListener("uncaughtException",Zn),process._originalNextTick(function(){process.addListener("uncaughtException",Zn)}),d}finally{if(!u||c){for(Oe=!0,f=0;f<n;++f)(r[f].flags&Uf)>0&&r[f].after(this,i[r[f].uid]);Oe=!1}V=cr.pop()}return p}},process.addListener("uncaughtException",Zn));var $o,Jn,jf;function AD(e,t,r){Oe=!0;for(var n=0;n<r;++n){var i=t[n];i.create&&i.create(i.data)}return Oe=!1,function(){cr.push(V),V=Ff(t,V);var a=e.apply(this,arguments);return V=cr.pop(),a}}function SD(e){var t=V.length;if(t===0)return e;for(var r=V.slice(),n=0;n<t;++n)if(r[n].flags>0)return Bf(e,r,t);return AD(e,r,t)}function vt(e,t){typeof e.create=="function"&&(this.create=e.create,this.flags|=kf),typeof e.before=="function"&&(this.before=e.before,this.flags|=Hf),typeof e.after=="function"&&(this.after=e.after,this.flags|=Uf),typeof e.error=="function"&&(this.error=e.error,this.flags|=zo),this.uid=++TD,this.data=t===void 0?null:t}vt.prototype.create=void 0;vt.prototype.before=void 0;vt.prototype.after=void 0;vt.prototype.error=void 0;vt.prototype.data=void 0;vt.prototype.uid=0;vt.prototype.flags=0;function jm(e,t){if(typeof e!="object"||!e)throw new TypeError("callbacks argument must be an object");return e instanceof vt?e:new vt(e,t)}function ID(e,t){var r;e instanceof vt?r=e:r=jm(e,t);for(var n=!1,i=0;i<V.length;i++)if(r===V[i]){n=!0;break}return n||V.push(r),r}function CD(e){for(var t=0;t<V.length;t++)if(e===V[t]){V.splice(t,1);break}}process.createAsyncListener=jm;process.addAsyncListener=ID;process.removeAsyncListener=CD;km.exports=SD});var Bm=l((x1,Um)=>{"use strict";Um.exports=(e,t)=>class extends e{constructor(n){var i,a;super(o);var s=this;try{n.apply(i,a)}catch(u){a[1](u)}return s;function o(u,c){i=this,a=[f,p];function f(d){return t(s,!1),u(d)}function p(d){return t(s,!1),c(d)}}}}});var Km=l(()=>{"use strict";if(process.addAsyncListener)throw new Error("Don't require polyfill unless needed");var $m=Po(),Ko=qm(),je=$m.wrap,lr=$m.massWrap,te=Hm(),bD=__webpack_require__(970),OD=Ko.gte(process.version,"6.0.0"),$f=Ko.gte(process.version,"7.0.0"),PD=Ko.gte(process.version,"8.0.0"),RD=Ko.gte(process.version,"11.0.0"),gt=__webpack_require__(872);$f&&!gt._normalizeArgs?gt._normalizeArgs=function(e){if(e.length===0)return[{},null];var t=e[0],r={};typeof t=="object"&&t!==null?r=t:MD(t)?r.path=t:(r.port=t,e.length>1&&typeof e[1]=="string"&&(r.host=e[1]));var n=e[e.length-1];return typeof n!="function"?[r,null]:[r,n]}:!$f&&!gt._normalizeConnectArgs&&(gt._normalizeConnectArgs=function(e){var t={};function r(i){return(i=Number(i))>=0?i:!1}typeof e[0]=="object"&&e[0]!==null?t=e[0]:typeof e[0]=="string"&&r(e[0])===!1?t.path=e[0]:(t.port=e[0],typeof e[1]=="string"&&(t.host=e[1]));var n=e[e.length-1];return typeof n=="function"?[t,n]:[t]});"_setUpListenHandle"in gt.Server.prototype?je(gt.Server.prototype,"_setUpListenHandle",Fm):je(gt.Server.prototype,"_listen2",Fm);function Fm(e){return function(){this.on("connection",function(t){t._handle&&(t._handle.onread=te(t._handle.onread))});try{return e.apply(this,arguments)}finally{this._handle&&this._handle.onconnection&&(this._handle.onconnection=te(this._handle.onconnection))}}}function zm(e){if(e&&e._handle){var t=e._handle;t._originalOnread||(t._originalOnread=t.onread),t.onread=te(t._originalOnread)}}je(gt.Socket.prototype,"connect",function(e){return function(){var t;PD&&Array.isArray(arguments[0])&&Object.getOwnPropertySymbols(arguments[0]).length>0?t=arguments[0]:t=$f?gt._normalizeArgs(arguments):gt._normalizeConnectArgs(arguments),t[1]&&(t[1]=te(t[1]));var r=e.apply(this,t);return zm(this),r}});var ND=__webpack_require__(136);je(ND.Agent.prototype,"addRequest",function(e){return function(t){var r=t.onSocket;return t.onSocket=te(function(n){return zm(n),r.apply(this,arguments)}),e.apply(this,arguments)}});var Gf=__webpack_require__(368);function Gm(e){Array.isArray(e.stdio)&&e.stdio.forEach(function(t){t&&t._handle&&(t._handle.onread=te(t._handle.onread),je(t._handle,"close",Yo))}),e._handle&&(e._handle.onexit=te(e._handle.onexit))}Gf.ChildProcess?je(Gf.ChildProcess.prototype,"spawn",function(e){return function(){var t=e.apply(this,arguments);return Gm(this),t}}):lr(Gf,["execFile","fork","spawn"],function(e){return function(){var t=e.apply(this,arguments);return Gm(t),t}});process._fatalException||(process._originalNextTick=process.nextTick);var Kf=[];process._nextDomainTick&&Kf.push("_nextDomainTick");process._tickDomainCallback&&Kf.push("_tickDomainCallback");lr(process,Kf,Et);je(process,"nextTick",Yo);var Yf=["setTimeout","setInterval"];global.setImmediate&&Yf.push("setImmediate");var Xm=__webpack_require__(664),DD=global.setTimeout===Xm.setTimeout;lr(Xm,Yf,Yo);DD&&lr(global,Yf,Yo);var zf=__webpack_require__(880);lr(zf,["lookup","resolve","resolve4","resolve6","resolveCname","resolveMx","resolveNs","resolveTxt","resolveSrv","reverse"],Et);zf.resolveNaptr&&je(zf,"resolveNaptr",Et);var Yr=__webpack_require__(58);lr(Yr,["watch","rename","truncate","chown","fchown","chmod","fchmod","stat","lstat","fstat","link","symlink","readlink","realpath","unlink","rmdir","mkdir","readdir","close","open","utimes","futimes","fsync","write","read","readFile","writeFile","appendFile","watchFile","unwatchFile","exists"],Et);Yr.lchown&&je(Yr,"lchown",Et);Yr.lchmod&&je(Yr,"lchmod",Et);Yr.ftruncate&&je(Yr,"ftruncate",Et);var va;try{va=__webpack_require__(592)}catch{}va&&va.Deflate&&va.Deflate.prototype&&(Kr=Object.getPrototypeOf(va.Deflate.prototype),Kr._transform?je(Kr,"_transform",Et):Kr.write&&Kr.flush&&Kr.end&&lr(Kr,["write","flush","end"],Et));var Kr,Xf;try{Xf=__webpack_require__(968)}catch{}Xf&&(Vf=["pbkdf2","randomBytes"],RD||Vf.push("pseudoRandomBytes"),lr(Xf,Vf,Et));var Vf,Xo=!!global.Promise&&Promise.toString()==="function Promise() { [native code] }"&&Promise.toString.toString()==="function toString() { [native code] }";Xo&&(Vm=process.addAsyncListener({create:function(){Xo=!1}}),global.Promise.resolve(!0).then(function(){Xo=!1}),process.removeAsyncListener(Vm));var Vm;Xo&&wD();function wD(){var e=global.Promise;function t(s){if(!(this instanceof t))return e(s);if(typeof s!="function")return new e(s);var o,u,c=new e(f);c.__proto__=t.prototype;try{s.apply(o,u)}catch(p){u[1](p)}return c;function f(p,d){o=this,u=[h,E];function h(A){return n(c,!1),p(A)}function E(A){return n(c,!1),d(A)}}}if(bD.inherits(t,e),je(e.prototype,"then",a),e.prototype.chain&&je(e.prototype,"chain",a),OD)global.Promise=Bm()(e,n);else{var r=["all","race","reject","resolve","accept","defer"];r.forEach(function(s){typeof e[s]=="function"&&(t[s]=e[s])}),global.Promise=t}function n(s,o){(!s.__asl_wrapper||o)&&(s.__asl_wrapper=te(i))}function i(s,o,u,c){var f;try{return f=o.call(s,u),{returnVal:f,error:!1}}catch(p){return{errorVal:p,error:!0}}finally{f instanceof e?c.__asl_wrapper=function(){var d=f.__asl_wrapper||i;return d.apply(this,arguments)}:n(c,!0)}}function a(s){return function(){var u=this,c=s.apply(u,Array.prototype.map.call(arguments,f));return c.__asl_wrapper=function(d,h,E,A){return u.__asl_wrapper?(u.__asl_wrapper(d,function(){},null,c),c.__asl_wrapper(d,h,E,A)):i(d,h,E,A)},c;function f(p){return typeof p!="function"?p:te(function(d){var h=(u.__asl_wrapper||i)(this,p,d,c);if(h.error)throw h.errorVal;return h.returnVal})}}}}function Et(e){var t=function(){var r,n=arguments.length-1;if(typeof arguments[n]=="function"){r=Array(arguments.length);for(var i=0;i<arguments.length-1;i++)r[i]=arguments[i];r[n]=te(arguments[n])}return e.apply(this,r||arguments)};switch(e.length){case 1:return function(r){return arguments.length!==1?t.apply(this,arguments):(typeof r=="function"&&(r=te(r)),e.call(this,r))};case 2:return function(r,n){return arguments.length!==2?t.apply(this,arguments):(typeof n=="function"&&(n=te(n)),e.call(this,r,n))};case 3:return function(r,n,i){return arguments.length!==3?t.apply(this,arguments):(typeof i=="function"&&(i=te(i)),e.call(this,r,n,i))};case 4:return function(r,n,i,a){return arguments.length!==4?t.apply(this,arguments):(typeof a=="function"&&(a=te(a)),e.call(this,r,n,i,a))};case 5:return function(r,n,i,a,s){return arguments.length!==5?t.apply(this,arguments):(typeof s=="function"&&(s=te(s)),e.call(this,r,n,i,a,s))};case 6:return function(r,n,i,a,s,o){return arguments.length!==6?t.apply(this,arguments):(typeof o=="function"&&(o=te(o)),e.call(this,r,n,i,a,s,o))};default:return t}}function Yo(e){var t=function(){var r;if(typeof arguments[0]=="function"){r=Array(arguments.length),r[0]=te(arguments[0]);for(var n=1;n<arguments.length;n++)r[n]=arguments[n]}return e.apply(this,r||arguments)};switch(e.length){case 1:return function(r){return arguments.length!==1?t.apply(this,arguments):(typeof r=="function"&&(r=te(r)),e.call(this,r))};case 2:return function(r,n){return arguments.length!==2?t.apply(this,arguments):(typeof r=="function"&&(r=te(r)),e.call(this,r,n))};case 3:return function(r,n,i){return arguments.length!==3?t.apply(this,arguments):(typeof r=="function"&&(r=te(r)),e.call(this,r,n,i))};case 4:return function(r,n,i,a){return arguments.length!==4?t.apply(this,arguments):(typeof r=="function"&&(r=te(r)),e.call(this,r,n,i,a))};case 5:return function(r,n,i,a,s){return arguments.length!==5?t.apply(this,arguments):(typeof r=="function"&&(r=te(r)),e.call(this,r,n,i,a,s))};case 6:return function(r,n,i,a,s,o){return arguments.length!==6?t.apply(this,arguments):(typeof r=="function"&&(r=te(r)),e.call(this,r,n,i,a,s,o))};default:return t}}function xD(e){return(e=Number(e))>=0?e:!1}function MD(e){return typeof e=="string"&&xD(e)===!1}});var Jm=l((q1,Zm)=>{"use strict";var jt=__webpack_require__(608),LD=Do(),ga="cls@contexts",Qf="error@context";process.addAsyncListener||Km();function st(e){this.name=e,this.active=null,this._set=[],this.id=null}st.prototype.set=function(e,t){if(!this.active)throw new Error("No context available. ns.run() or ns.bind() must be called first.");return this.active[e]=t,t};st.prototype.get=function(e){if(!!this.active)return this.active[e]};st.prototype.createContext=function(){return Object.create(this.active)};st.prototype.run=function(e){var t=this.createContext();this.enter(t);try{return e(t),t}catch(r){throw r&&(r[Qf]=t),r}finally{this.exit(t)}};st.prototype.runAndReturn=function(e){var t;return this.run(function(r){t=e(r)}),t};st.prototype.bind=function(e,t){t||(this.active?t=this.active:t=this.createContext());var r=this;return function(){r.enter(t);try{return e.apply(this,arguments)}catch(n){throw n&&(n[Qf]=t),n}finally{r.exit(t)}}};st.prototype.enter=function(e){jt.ok(e,"context must be provided for entering"),this._set.push(this.active),this.active=e};st.prototype.exit=function(e){if(jt.ok(e,"context must be provided for exiting"),this.active===e){jt.ok(this._set.length,"can't remove top context"),this.active=this._set.pop();return}var t=this._set.lastIndexOf(e);jt.ok(t>=0,"context not currently entered; can't exit"),jt.ok(t,"can't remove top context"),this._set.splice(t,1)};st.prototype.bindEmitter=function(e){jt.ok(e.on&&e.addListener&&e.emit,"can only bind real EEs");var t=this,r="context@"+this.name;function n(a){!a||(a[ga]||(a[ga]=Object.create(null)),a[ga][r]={namespace:t,context:t.active})}function i(a){if(!(a&&a[ga]))return a;var s=a,o=a[ga];return Object.keys(o).forEach(function(u){var c=o[u];s=c.namespace.bind(s,c.context)}),s}LD(e,n,i)};st.prototype.fromException=function(e){return e[Qf]};function Ym(e){return process.namespaces[e]}function qD(e){jt.ok(e,"namespace must be given a name!");var t=new st(e);return t.id=process.addAsyncListener({create:function(){return t.active},before:function(r,n){n&&t.enter(n)},after:function(r,n){n&&t.exit(n)},error:function(r){r&&t.exit(r)}}),process.namespaces[e]=t,t}function Qm(e){var t=Ym(e);jt.ok(t,"can't delete nonexistent namespace!"),jt.ok(t.id,"don't assign to process.namespaces directly!"),process.removeAsyncListener(t.id),process.namespaces[e]=null}function Wm(){process.namespaces&&Object.keys(process.namespaces).forEach(function(e){Qm(e)}),process.namespaces=Object.create(null)}process.namespaces||Wm();Zm.exports={getNamespace:Ym,createNamespace:qD,destroyNamespace:Qm,reset:Wm}});var Er=l(Qo=>{"use strict";Object.defineProperty(Qo,"__esModule",{value:!0});Qo.CorrelationContextManager=void 0;var ty=_e(),jD=po(),ei=Qi(),Wf=Al(),ey=Bl(),kD=function(){function e(){}return e.getCurrentContext=function(){if(!e.enabled)return null;var t=e.session.get(e.CONTEXT_NAME);return t===void 0?null:t},e.generateContextObject=function(t,r,n,i,a,s){return r=r||t,this.enabled?{operation:{name:n,id:t,parentId:r,traceparent:a,tracestate:s},customProperties:new HD(i)}:null},e.spanToContextObject=function(t,r,n){var i=new ei;return i.traceId=t.traceId,i.spanId=t.spanId,i.traceFlag=ei.formatOpenTelemetryTraceFlags(t.traceFlags)||ei.DEFAULT_TRACE_FLAG,i.parentId=r,e.generateContextObject(i.traceId,i.parentId,n,null,i)},e.runWithContext=function(t,r){var n;return e.enabled?e.session.bind(r,(n={},n[e.CONTEXT_NAME]=t,n))():r()},e.wrapEmitter=function(t){e.enabled&&e.session.bindEmitter(t)},e.wrapCallback=function(t,r){var n;return e.enabled?e.session.bind(t,r?(n={},n[e.CONTEXT_NAME]=r,n):void 0):t},e.enable=function(t){if(!this.enabled){if(!this.isNodeVersionCompatible()){this.enabled=!1;return}e.hasEverEnabled||(this.forceClsHooked=t,this.hasEverEnabled=!0,typeof this.cls>"u"&&(e.forceClsHooked===!0||e.forceClsHooked===void 0&&e.shouldUseClsHooked()?this.cls=mm():this.cls=Jm()),e.session=this.cls.createNamespace("AI-CLS-Session"),jD.registerContextPreservation(function(r){return e.session.bind(r)})),this.enabled=!0}},e.startOperation=function(t,r){var n=t&&t.traceContext||null,i=t&&t.traceId?t:null,a=t&&t.headers;if(i){var s=new ei("00-"+i.traceId+"-"+i.spanId+"-01"),o=new Wf(i.traceState?i.traceState.serialize():null),u=e.generateContextObject(i.traceId,"|"+i.traceId+"."+i.spanId+".",typeof r=="string"?r:"",void 0,s,o);return u}if(n){var s=new ei(n.traceparent),o=new Wf(n.tracestate),c=typeof r=="object"?new ey(r):null,u=e.generateContextObject(s.traceId,s.parentId,typeof r=="string"?r:c.getOperationName({}),c&&c.getCorrelationContextHeader()||void 0,s,o);return u}if(a){var s=new ei(a.traceparent?a.traceparent.toString():null),o=new Wf(a.tracestate?a.tracestate.toString():null),c=new ey(t),u=e.generateContextObject(s.traceId,s.parentId,c.getOperationName({}),c.getCorrelationContextHeader(),s,o);return u}return ty.warn("startOperation was called with invalid arguments",arguments),null},e.disable=function(){this.enabled=!1},e.reset=function(){e.hasEverEnabled&&(e.session=null,e.session=this.cls.createNamespace("AI-CLS-Session"))},e.isNodeVersionCompatible=function(){var t=process.versions.node.split(".");return parseInt(t[0])>3||parseInt(t[0])>2&&parseInt(t[1])>2},e.shouldUseClsHooked=function(){var t=process.versions.node.split(".");return parseInt(t[0])>8||parseInt(t[0])>=8&&parseInt(t[1])>=2},e.canUseClsHooked=function(){var t=process.versions.node.split("."),r=parseInt(t[0])>8||parseInt(t[0])>=8&&parseInt(t[1])>=0,n=parseInt(t[0])<8||parseInt(t[0])<=8&&parseInt(t[1])<2,i=parseInt(t[0])>4||parseInt(t[0])>=4&&parseInt(t[1])>=7;return!(r&&n)&&i},e.enabled=!1,e.hasEverEnabled=!1,e.forceClsHooked=void 0,e.CONTEXT_NAME="ApplicationInsights-Context",e}();Qo.CorrelationContextManager=kD;var HD=function(){function e(t){this.props=[],this.addHeaderData(t)}return e.prototype.addHeaderData=function(t){var r=t?t.split(", "):[];this.props=r.map(function(n){var i=n.split("=");return{key:i[0],value:i[1]}}).concat(this.props)},e.prototype.serializeToHeader=function(){return this.props.map(function(t){return t.key+"="+t.value}).join(", ")},e.prototype.getProperty=function(t){for(var r=0;r<this.props.length;++r){var n=this.props[r];if(n.key===t)return n.value}},e.prototype.setProperty=function(t,r){if(e.bannedCharacters.test(t)||e.bannedCharacters.test(r)){ty.warn("Correlation context property keys and values must not contain ',' or '='. setProperty was called with key: "+t+" and value: "+r);return}for(var n=0;n<this.props.length;++n){var i=this.props[n];if(i.key===t){i.value=r;return}}this.props.push({key:t,value:r})},e.bannedCharacters=/[,=]/,e}()});var ny=l(ti=>{"use strict";Object.defineProperty(ti,"__esModule",{value:!0});ti.dispose=ti.enable=void 0;var ry=De(),Zf=oe(),Qr=[],Jf=function(e){var t=e.data.message;Qr.forEach(function(r){t instanceof Error?r.trackException({exception:t}):(t.lastIndexOf(`
`)==t.length-1&&(t=t.substring(0,t.length-1)),r.trackTrace({message:t,severity:e.data.stderr?ry.SeverityLevel.Warning:ry.SeverityLevel.Information}))})};function UD(e,t){e?(Qr.length===0&&Zf.channel.subscribe("console",Jf),Qr.push(t)):(Qr=Qr.filter(function(r){return r!=t}),Qr.length===0&&Zf.channel.unsubscribe("console",Jf))}ti.enable=UD;function BD(){Zf.channel.unsubscribe("console",Jf),Qr=[]}ti.dispose=BD});var iy=l(ni=>{"use strict";Object.defineProperty(ni,"__esModule",{value:!0});ni.dispose=ni.enable=void 0;var ri=De(),ep=oe(),Wr=[],FD={10:ri.SeverityLevel.Verbose,20:ri.SeverityLevel.Verbose,30:ri.SeverityLevel.Information,40:ri.SeverityLevel.Warning,50:ri.SeverityLevel.Error,60:ri.SeverityLevel.Critical},tp=function(e){var t=e.data.result;Wr.forEach(function(r){var n=FD[e.data.level];t instanceof Error?r.trackException({exception:t}):r.trackTrace({message:t,severity:n})})};function GD(e,t){e?(Wr.length===0&&ep.channel.subscribe("bunyan",tp),Wr.push(t)):(Wr=Wr.filter(function(r){return r!=t}),Wr.length===0&&ep.channel.unsubscribe("bunyan",tp))}ni.enable=GD;function VD(){ep.channel.unsubscribe("bunyan",tp),Wr=[]}ni.dispose=VD});var ay=l(ii=>{"use strict";Object.defineProperty(ii,"__esModule",{value:!0});ii.dispose=ii.enable=void 0;var Te=De(),rp=oe(),Zr=[],$D={syslog:function(e){var t={emerg:Te.SeverityLevel.Critical,alert:Te.SeverityLevel.Critical,crit:Te.SeverityLevel.Critical,error:Te.SeverityLevel.Error,warning:Te.SeverityLevel.Warning,notice:Te.SeverityLevel.Information,info:Te.SeverityLevel.Information,debug:Te.SeverityLevel.Verbose};return t[e]===void 0?Te.SeverityLevel.Information:t[e]},npm:function(e){var t={error:Te.SeverityLevel.Error,warn:Te.SeverityLevel.Warning,info:Te.SeverityLevel.Information,verbose:Te.SeverityLevel.Verbose,debug:Te.SeverityLevel.Verbose,silly:Te.SeverityLevel.Verbose};return t[e]===void 0?Te.SeverityLevel.Information:t[e]},unknown:function(e){return Te.SeverityLevel.Information}},np=function(e){var t=e.data.message;Zr.forEach(function(r){if(t instanceof Error)r.trackException({exception:t,properties:e.data.meta});else{var n=$D[e.data.levelKind](e.data.level);r.trackTrace({message:t,severity:n,properties:e.data.meta})}})};function zD(e,t){e?(Zr.length===0&&rp.channel.subscribe("winston",np),Zr.push(t)):(Zr=Zr.filter(function(r){return r!=t}),Zr.length===0&&rp.channel.unsubscribe("winston",np))}ii.enable=zD;function XD(){rp.channel.unsubscribe("winston",np),Zr=[]}ii.dispose=XD});var oy=l((B1,sy)=>{"use strict";var KD=po(),YD=function(){function e(t){if(e.INSTANCE)throw new Error("Console logging adapter tracking should be configured from the applicationInsights object");this._client=t,e.INSTANCE=this}return e.prototype.enable=function(t,r){KD.IsInitialized&&(ny().enable(t&&r,this._client),iy().enable(t,this._client),ay().enable(t,this._client))},e.prototype.isInitialized=function(){return this._isInitialized},e.prototype.dispose=function(){e.INSTANCE=null,this.enable(!1,!1)},e._methodNames=["debug","info","log","warn","error"],e}();sy.exports=YD});var cy=l((F1,uy)=>{"use strict";var QD=function(){function e(t){if(e.INSTANCE)throw new Error("Exception tracking should be configured from the applicationInsights object");e.INSTANCE=this,this._client=t;var r=process.versions.node.split(".");e._canUseUncaughtExceptionMonitor=parseInt(r[0])>13||parseInt(r[0])===13&&parseInt(r[1])>=7}return e.prototype.isInitialized=function(){return this._isInitialized},e.prototype.enable=function(t){var r=this;if(t){this._isInitialized=!0;var n=this;if(!this._exceptionListenerHandle){var i=function(a,s,o){o===void 0&&(o=new Error(e._FALLBACK_ERROR_MESSAGE)),r._client.trackException({exception:o}),r._client.flush({isAppCrashing:!0}),a&&s&&process.listeners(s).length===1&&(console.error(o),process.exit(1))};e._canUseUncaughtExceptionMonitor?(this._exceptionListenerHandle=i.bind(this,!1,void 0),process.on(e.UNCAUGHT_EXCEPTION_MONITOR_HANDLER_NAME,this._exceptionListenerHandle)):(this._exceptionListenerHandle=i.bind(this,!0,e.UNCAUGHT_EXCEPTION_HANDLER_NAME),this._rejectionListenerHandle=i.bind(this,!1,void 0),process.on(e.UNCAUGHT_EXCEPTION_HANDLER_NAME,this._exceptionListenerHandle),process.on(e.UNHANDLED_REJECTION_HANDLER_NAME,this._rejectionListenerHandle))}}else this._exceptionListenerHandle&&(e._canUseUncaughtExceptionMonitor?process.removeListener(e.UNCAUGHT_EXCEPTION_MONITOR_HANDLER_NAME,this._exceptionListenerHandle):(process.removeListener(e.UNCAUGHT_EXCEPTION_HANDLER_NAME,this._exceptionListenerHandle),process.removeListener(e.UNHANDLED_REJECTION_HANDLER_NAME,this._rejectionListenerHandle)),this._exceptionListenerHandle=void 0,this._rejectionListenerHandle=void 0,delete this._exceptionListenerHandle,delete this._rejectionListenerHandle)},e.prototype.dispose=function(){e.INSTANCE=null,this.enable(!1),this._isInitialized=!1},e.INSTANCE=null,e.UNCAUGHT_EXCEPTION_MONITOR_HANDLER_NAME="uncaughtExceptionMonitor",e.UNCAUGHT_EXCEPTION_HANDLER_NAME="uncaughtException",e.UNHANDLED_REJECTION_HANDLER_NAME="unhandledRejection",e._RETHROW_EXIT_MESSAGE="Application Insights Rethrow Exception Handler",e._FALLBACK_ERROR_MESSAGE="A promise was rejected without providing an error. Application Insights generated this error stack for you.",e._canUseUncaughtExceptionMonitor=!1,e}();uy.exports=QD});var kt=l(T=>{"use strict";var ot;Object.defineProperty(T,"__esModule",{value:!0});T.HeartBeatMetricName=T.DependencyTypeName=T.SpanAttribute=T.TelemetryTypeStringToQuickPulseDocumentType=T.TelemetryTypeStringToQuickPulseType=T.QuickPulseType=T.QuickPulseDocumentType=T.PerformanceToQuickPulseCounter=T.MetricId=T.PerformanceCounter=T.QuickPulseCounter=T.DEFAULT_LIVEMETRICS_HOST=T.DEFAULT_LIVEMETRICS_ENDPOINT=T.DEFAULT_BREEZE_ENDPOINT=void 0;T.DEFAULT_BREEZE_ENDPOINT="https://dc.services.visualstudio.com";T.DEFAULT_LIVEMETRICS_ENDPOINT="https://rt.services.visualstudio.com";T.DEFAULT_LIVEMETRICS_HOST="rt.services.visualstudio.com";var Pe;(function(e){e.COMMITTED_BYTES="\\Memory\\Committed Bytes",e.PROCESSOR_TIME="\\Processor(_Total)\\% Processor Time",e.REQUEST_RATE="\\ApplicationInsights\\Requests/Sec",e.REQUEST_FAILURE_RATE="\\ApplicationInsights\\Requests Failed/Sec",e.REQUEST_DURATION="\\ApplicationInsights\\Request Duration",e.DEPENDENCY_RATE="\\ApplicationInsights\\Dependency Calls/Sec",e.DEPENDENCY_FAILURE_RATE="\\ApplicationInsights\\Dependency Calls Failed/Sec",e.DEPENDENCY_DURATION="\\ApplicationInsights\\Dependency Call Duration",e.EXCEPTION_RATE="\\ApplicationInsights\\Exceptions/Sec"})(Pe=T.QuickPulseCounter||(T.QuickPulseCounter={}));var Wo;(function(e){e.PRIVATE_BYTES="\\Process(??APP_WIN32_PROC??)\\Private Bytes",e.AVAILABLE_BYTES="\\Memory\\Available Bytes",e.PROCESSOR_TIME="\\Processor(_Total)\\% Processor Time",e.PROCESS_TIME="\\Process(??APP_WIN32_PROC??)\\% Processor Time",e.REQUEST_RATE="\\ASP.NET Applications(??APP_W3SVC_PROC??)\\Requests/Sec",e.REQUEST_DURATION="\\ASP.NET Applications(??APP_W3SVC_PROC??)\\Request Execution Time"})(Wo=T.PerformanceCounter||(T.PerformanceCounter={}));var WD;(function(e){e.REQUESTS_DURATION="requests/duration",e.DEPENDENCIES_DURATION="dependencies/duration",e.EXCEPTIONS_COUNT="exceptions/count",e.TRACES_COUNT="traces/count"})(WD=T.MetricId||(T.MetricId={}));T.PerformanceToQuickPulseCounter=(ot={},ot[Wo.PROCESSOR_TIME]=Pe.PROCESSOR_TIME,ot[Wo.REQUEST_RATE]=Pe.REQUEST_RATE,ot[Wo.REQUEST_DURATION]=Pe.REQUEST_DURATION,ot[Pe.COMMITTED_BYTES]=Pe.COMMITTED_BYTES,ot[Pe.REQUEST_FAILURE_RATE]=Pe.REQUEST_FAILURE_RATE,ot[Pe.DEPENDENCY_RATE]=Pe.DEPENDENCY_RATE,ot[Pe.DEPENDENCY_FAILURE_RATE]=Pe.DEPENDENCY_FAILURE_RATE,ot[Pe.DEPENDENCY_DURATION]=Pe.DEPENDENCY_DURATION,ot[Pe.EXCEPTION_RATE]=Pe.EXCEPTION_RATE,ot);T.QuickPulseDocumentType={Event:"Event",Exception:"Exception",Trace:"Trace",Metric:"Metric",Request:"Request",Dependency:"RemoteDependency",Availability:"Availability",PageView:"PageView"};T.QuickPulseType={Event:"EventTelemetryDocument",Exception:"ExceptionTelemetryDocument",Trace:"TraceTelemetryDocument",Metric:"MetricTelemetryDocument",Request:"RequestTelemetryDocument",Dependency:"DependencyTelemetryDocument",Availability:"AvailabilityTelemetryDocument",PageView:"PageViewTelemetryDocument"};T.TelemetryTypeStringToQuickPulseType={EventData:T.QuickPulseType.Event,ExceptionData:T.QuickPulseType.Exception,MessageData:T.QuickPulseType.Trace,MetricData:T.QuickPulseType.Metric,RequestData:T.QuickPulseType.Request,RemoteDependencyData:T.QuickPulseType.Dependency,AvailabilityData:T.QuickPulseType.Availability,PageViewData:T.QuickPulseType.PageView};T.TelemetryTypeStringToQuickPulseDocumentType={EventData:T.QuickPulseDocumentType.Event,ExceptionData:T.QuickPulseDocumentType.Exception,MessageData:T.QuickPulseDocumentType.Trace,MetricData:T.QuickPulseDocumentType.Metric,RequestData:T.QuickPulseDocumentType.Request,RemoteDependencyData:T.QuickPulseDocumentType.Dependency,AvailabilityData:T.QuickPulseDocumentType.Availability,PageViewData:T.QuickPulseDocumentType.PageView};T.SpanAttribute={HttpHost:"http.host",HttpMethod:"http.method",HttpPort:"http.port",HttpStatusCode:"http.status_code",HttpUrl:"http.url",HttpUserAgent:"http.user_agent",GrpcMethod:"grpc.method",GrpcService:"rpc.service"};T.DependencyTypeName={Grpc:"GRPC",Http:"HTTP",InProc:"InProc"};T.HeartBeatMetricName="HeartBeat"});var Jo=l((V1,ly)=>{"use strict";var Zo=__webpack_require__(558),Ze=kt(),ZD=function(){function e(t,r,n){r===void 0&&(r=6e4),n===void 0&&(n=!1),this._lastIntervalRequestExecutionTime=0,this._lastIntervalDependencyExecutionTime=0,e.INSTANCE||(e.INSTANCE=this),this._isInitialized=!1,this._client=t,this._collectionInterval=r,this._enableLiveMetricsCounters=n}return e.prototype.enable=function(t,r){var n=this;this._isEnabled=t,this._isEnabled&&!this._isInitialized&&(this._isInitialized=!0),t?this._handle||(this._lastCpus=Zo.cpus(),this._lastRequests={totalRequestCount:e._totalRequestCount,totalFailedRequestCount:e._totalFailedRequestCount,time:+new Date},this._lastDependencies={totalDependencyCount:e._totalDependencyCount,totalFailedDependencyCount:e._totalFailedDependencyCount,time:+new Date},this._lastExceptions={totalExceptionCount:e._totalExceptionCount,time:+new Date},typeof process.cpuUsage=="function"&&(this._lastAppCpuUsage=process.cpuUsage()),this._lastHrtime=process.hrtime(),this._collectionInterval=r||this._collectionInterval,this._handle=setInterval(function(){return n.trackPerformance()},this._collectionInterval),this._handle.unref()):this._handle&&(clearInterval(this._handle),this._handle=void 0)},e.countRequest=function(t,r){var n;if(!!e.isEnabled()){if(typeof t=="string")n=+new Date("1970-01-01T"+t+"Z");else if(typeof t=="number")n=t;else return;e._intervalRequestExecutionTime+=n,r===!1&&e._totalFailedRequestCount++,e._totalRequestCount++}},e.countException=function(){e._totalExceptionCount++},e.countDependency=function(t,r){var n;if(!!e.isEnabled()){if(typeof t=="string")n=+new Date("1970-01-01T"+t+"Z");else if(typeof t=="number")n=t;else return;e._intervalDependencyExecutionTime+=n,r===!1&&e._totalFailedDependencyCount++,e._totalDependencyCount++}},e.prototype.isInitialized=function(){return this._isInitialized},e.isEnabled=function(){return e.INSTANCE&&e.INSTANCE._isEnabled},e.prototype.trackPerformance=function(){this._trackCpu(),this._trackMemory(),this._trackNetwork(),this._trackDependencyRate(),this._trackExceptionRate()},e.prototype._trackCpu=function(){var t=Zo.cpus();if(t&&t.length&&this._lastCpus&&t.length===this._lastCpus.length){for(var r=0,n=0,i=0,a=0,s=0,o=0;!!t&&o<t.length;o++){var u=t[o],c=this._lastCpus[o],f="% cpu("+o+") ",p=u.model,d=u.speed,h=u.times,E=c.times,A=h.user-E.user||0;r+=A;var j=h.sys-E.sys||0;n+=j;var se=h.nice-E.nice||0;i+=se;var Ae=h.idle-E.idle||0;a+=Ae;var At=h.irq-E.irq||0;s+=At}var tn=void 0;if(typeof process.cpuUsage=="function"){var yi=process.cpuUsage(),rn=process.hrtime(),aA=yi.user-this._lastAppCpuUsage.user+(yi.system-this._lastAppCpuUsage.system)||0;if(typeof this._lastHrtime<"u"&&this._lastHrtime.length===2){var sA=(rn[0]-this._lastHrtime[0])*1e6+(rn[1]-this._lastHrtime[1])/1e3||0;tn=100*aA/(sA*t.length)}this._lastAppCpuUsage=yi,this._lastHrtime=rn}var _u=r+n+i+a+s||1;this._client.trackMetric({name:Ze.PerformanceCounter.PROCESSOR_TIME,value:(_u-a)/_u*100}),this._client.trackMetric({name:Ze.PerformanceCounter.PROCESS_TIME,value:tn||r/_u*100})}this._lastCpus=t},e.prototype._trackMemory=function(){var t=Zo.freemem(),r=process.memoryUsage().rss,n=Zo.totalmem()-t;this._client.trackMetric({name:Ze.PerformanceCounter.PRIVATE_BYTES,value:r}),this._client.trackMetric({name:Ze.PerformanceCounter.AVAILABLE_BYTES,value:t}),this._enableLiveMetricsCounters&&this._client.trackMetric({name:Ze.QuickPulseCounter.COMMITTED_BYTES,value:n})},e.prototype._trackNetwork=function(){var t=this._lastRequests,r={totalRequestCount:e._totalRequestCount,totalFailedRequestCount:e._totalFailedRequestCount,time:+new Date},n=r.totalRequestCount-t.totalRequestCount||0,i=r.totalFailedRequestCount-t.totalFailedRequestCount||0,a=r.time-t.time,s=a/1e3,o=(e._intervalRequestExecutionTime-this._lastIntervalRequestExecutionTime)/n||0;if(this._lastIntervalRequestExecutionTime=e._intervalRequestExecutionTime,a>0){var u=n/s,c=i/s;this._client.trackMetric({name:Ze.PerformanceCounter.REQUEST_RATE,value:u}),(!this._enableLiveMetricsCounters||n>0)&&this._client.trackMetric({name:Ze.PerformanceCounter.REQUEST_DURATION,value:o}),this._enableLiveMetricsCounters&&this._client.trackMetric({name:Ze.QuickPulseCounter.REQUEST_FAILURE_RATE,value:c})}this._lastRequests=r},e.prototype._trackDependencyRate=function(){if(this._enableLiveMetricsCounters){var t=this._lastDependencies,r={totalDependencyCount:e._totalDependencyCount,totalFailedDependencyCount:e._totalFailedDependencyCount,time:+new Date},n=r.totalDependencyCount-t.totalDependencyCount||0,i=r.totalFailedDependencyCount-t.totalFailedDependencyCount||0,a=r.time-t.time,s=a/1e3,o=(e._intervalDependencyExecutionTime-this._lastIntervalDependencyExecutionTime)/n||0;if(this._lastIntervalDependencyExecutionTime=e._intervalDependencyExecutionTime,a>0){var u=n/s,c=i/s;this._client.trackMetric({name:Ze.QuickPulseCounter.DEPENDENCY_RATE,value:u}),this._client.trackMetric({name:Ze.QuickPulseCounter.DEPENDENCY_FAILURE_RATE,value:c}),(!this._enableLiveMetricsCounters||n>0)&&this._client.trackMetric({name:Ze.QuickPulseCounter.DEPENDENCY_DURATION,value:o})}this._lastDependencies=r}},e.prototype._trackExceptionRate=function(){if(this._enableLiveMetricsCounters){var t=this._lastExceptions,r={totalExceptionCount:e._totalExceptionCount,time:+new Date},n=r.totalExceptionCount-t.totalExceptionCount||0,i=r.time-t.time,a=i/1e3;if(i>0){var s=n/a;this._client.trackMetric({name:Ze.QuickPulseCounter.EXCEPTION_RATE,value:s})}this._lastExceptions=r}},e.prototype.dispose=function(){e.INSTANCE=null,this.enable(!1),this._isInitialized=!1},e._totalRequestCount=0,e._totalFailedRequestCount=0,e._totalDependencyCount=0,e._totalFailedDependencyCount=0,e._totalExceptionCount=0,e._intervalDependencyExecutionTime=0,e._intervalRequestExecutionTime=0,e}();ly.exports=ZD});var fy=l(eu=>{"use strict";Object.defineProperty(eu,"__esModule",{value:!0});eu.AggregatedMetricCounter=void 0;var JD=function(){function e(t){this.dimensions=t,this.totalCount=0,this.lastTotalCount=0,this.intervalExecutionTime=0,this.lastTime=+new Date,this.lastIntervalExecutionTime=0}return e}();eu.AggregatedMetricCounter=JD});var py=l(tu=>{"use strict";Object.defineProperty(tu,"__esModule",{value:!0});tu.PreaggregatedMetricPropertyNames=void 0;tu.PreaggregatedMetricPropertyNames={cloudRoleInstance:"cloud/roleInstance",cloudRoleName:"cloud/roleName",operationSynthetic:"operation/synthetic",requestSuccess:"Request.Success",requestResultCode:"request/resultCode",dependencyType:"Dependency.Type",dependencyTarget:"dependency/target",dependencySuccess:"Dependency.Success",dependencyResultCode:"dependency/resultCode",traceSeverityLevel:"trace/severityLevel"}});var ap=l((ip,dy)=>{"use strict";var nu=ip&&ip.__assign||function(){return nu=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nu.apply(this,arguments)},ru=kt(),ew=fy(),tw=py(),rw=function(){function e(t,r){r===void 0&&(r=6e4),e.INSTANCE||(e.INSTANCE=this),this._isInitialized=!1,e._dependencyCountersCollection=[],e._requestCountersCollection=[],e._exceptionCountersCollection=[],e._traceCountersCollection=[],this._client=t,this._collectionInterval=r}return e.prototype.enable=function(t,r){var n=this;this._isEnabled=t,this._isEnabled&&!this._isInitialized&&(this._isInitialized=!0),t?this._handle||(this._collectionInterval=r||this._collectionInterval,this._handle=setInterval(function(){return n.trackPreAggregatedMetrics()},this._collectionInterval),this._handle.unref()):this._handle&&(clearInterval(this._handle),this._handle=void 0)},e.countException=function(t){if(!!e.isEnabled()){var r=e._getAggregatedCounter(t,this._exceptionCountersCollection);r.totalCount++}},e.countTrace=function(t){if(!!e.isEnabled()){var r=e._getAggregatedCounter(t,this._traceCountersCollection);r.totalCount++}},e.countRequest=function(t,r){if(!!e.isEnabled()){var n,i=e._getAggregatedCounter(r,this._requestCountersCollection);if(typeof t=="string")n=+new Date("1970-01-01T"+t+"Z");else if(typeof t=="number")n=t;else return;i.intervalExecutionTime+=n,i.totalCount++}},e.countDependency=function(t,r){if(!!e.isEnabled()){var n=e._getAggregatedCounter(r,this._dependencyCountersCollection),i;if(typeof t=="string")i=+new Date("1970-01-01T"+t+"Z");else if(typeof t=="number")i=t;else return;n.intervalExecutionTime+=i,n.totalCount++}},e.prototype.isInitialized=function(){return this._isInitialized},e.isEnabled=function(){return e.INSTANCE&&e.INSTANCE._isEnabled},e.prototype.trackPreAggregatedMetrics=function(){this._trackRequestMetrics(),this._trackDependencyMetrics(),this._trackExceptionMetrics(),this._trackTraceMetrics()},e._getAggregatedCounter=function(t,r){for(var n=!1,i=0;i<r.length;i++){if(t===r[i].dimensions)return r[i];if(Object.keys(t).length===Object.keys(r[i].dimensions).length){for(var a in t)if(t[a]!=r[i].dimensions[a]){n=!0;break}if(!n)return r[i];n=!1}}var s=new ew.AggregatedMetricCounter(t);return r.push(s),s},e.prototype._trackRequestMetrics=function(){for(var t=0;t<e._requestCountersCollection.length;t++){var r=e._requestCountersCollection[t];r.time=+new Date;var n=r.totalCount-r.lastTotalCount||0,i=r.time-r.lastTime,a=(r.intervalExecutionTime-r.lastIntervalExecutionTime)/n||0;r.lastIntervalExecutionTime=r.intervalExecutionTime,i>0&&n>0&&this._trackPreAggregatedMetric({name:"Server response time",dimensions:r.dimensions,value:a,count:n,aggregationInterval:i,metricType:ru.MetricId.REQUESTS_DURATION}),r.lastTotalCount=r.totalCount,r.lastTime=r.time}},e.prototype._trackDependencyMetrics=function(){for(var t=0;t<e._dependencyCountersCollection.length;t++){var r=e._dependencyCountersCollection[t];r.time=+new Date;var n=r.totalCount-r.lastTotalCount||0,i=r.time-r.lastTime,a=(r.intervalExecutionTime-r.lastIntervalExecutionTime)/n||0;r.lastIntervalExecutionTime=r.intervalExecutionTime,i>0&&n>0&&this._trackPreAggregatedMetric({name:"Dependency duration",dimensions:r.dimensions,value:a,count:n,aggregationInterval:i,metricType:ru.MetricId.DEPENDENCIES_DURATION}),r.lastTotalCount=r.totalCount,r.lastTime=r.time}},e.prototype._trackExceptionMetrics=function(){for(var t=0;t<e._exceptionCountersCollection.length;t++){var r=e._exceptionCountersCollection[t],n=r.totalCount-r.lastTotalCount||0,i=r.time-r.lastTime;this._trackPreAggregatedMetric({name:"Exceptions",dimensions:r.dimensions,value:n,count:n,aggregationInterval:i,metricType:ru.MetricId.EXCEPTIONS_COUNT}),r.lastTotalCount=r.totalCount,r.lastTime=r.time}},e.prototype._trackTraceMetrics=function(){for(var t=0;t<e._traceCountersCollection.length;t++){var r=e._traceCountersCollection[t],n=r.totalCount-r.lastTotalCount||0,i=r.time-r.lastTime;this._trackPreAggregatedMetric({name:"Traces",dimensions:r.dimensions,value:n,count:n,aggregationInterval:i,metricType:ru.MetricId.TRACES_COUNT}),r.lastTotalCount=r.totalCount,r.lastTime=r.time}},e.prototype._trackPreAggregatedMetric=function(t){var r={};for(var n in t.dimensions)r[tw.PreaggregatedMetricPropertyNames[n]]=t.dimensions[n];r=nu(nu({},r),{"_MS.MetricId":t.metricType,"_MS.AggregationIntervalMs":String(t.aggregationInterval),"_MS.IsAutocollected":"True"});var i={name:t.name,value:t.value,count:t.count,properties:r,kind:"Aggregation"};this._client.trackMetric(i)},e.prototype.dispose=function(){e.INSTANCE=null,this.enable(!1),this._isInitialized=!1},e}();dy.exports=rw});var Ea=l((X1,gy)=>{"use strict";var Ht=__webpack_require__(558),hy=__webpack_require__(58),_y=__webpack_require__(72),nw=De(),vy=_e(),iw=function(){function e(t){this.keys=new nw.ContextTagKeys,this.tags={},this._loadApplicationContext(t),this._loadDeviceContext(),this._loadInternalContext()}return e.prototype._loadApplicationContext=function(t){if(t=t||_y.resolve(__dirname,"../../../../package.json"),!e.appVersion[t]){e.appVersion[t]="unknown";try{var r=JSON.parse(hy.readFileSync(t,"utf8"));r&&typeof r.version=="string"&&(e.appVersion[t]=r.version)}catch(n){vy.info("unable to read app version: ",n)}}this.tags[this.keys.applicationVersion]=e.appVersion[t]},e.prototype._loadDeviceContext=function(){this.tags[this.keys.deviceId]="",this.tags[this.keys.cloudRoleInstance]=Ht&&Ht.hostname(),this.tags[this.keys.deviceOSVersion]=Ht&&Ht.type()+" "+Ht.release(),this.tags[this.keys.cloudRole]=e.DefaultRoleName,this.tags["ai.device.osArchitecture"]=Ht&&Ht.arch(),this.tags["ai.device.osPlatform"]=Ht&&Ht.platform()},e.prototype._loadInternalContext=function(){var t=_y.resolve(__dirname,"../../package.json");if(!e.sdkVersion){e.sdkVersion="unknown";try{var r=JSON.parse(hy.readFileSync(t,"utf8"));r&&typeof r.version=="string"&&(e.sdkVersion=r.version)}catch(n){vy.info("unable to read app version: ",n)}}this.tags[this.keys.internalSdkVersion]="node:"+e.sdkVersion},e.DefaultRoleName="Web",e.appVersion={},e.sdkVersion=null,e}();gy.exports=iw});var my=l((op,Ey)=>{"use strict";var aw=op&&op.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),ut=__webpack_require__(716),sp=De(),sw=Ue(),ow=jn(),uw=kl(),cw=Fr(),lw=function(e){aw(t,e);function t(r,n){var i=e.call(this)||this;return n&&n.method&&r&&(i.method=n.method,i.url=t._getUrlFromRequestOptions(r,n),i.startTime=+new Date),i}return t.prototype.onError=function(r){this._setStatus(void 0,r)},t.prototype.onResponse=function(r){this._setStatus(r.statusCode,void 0),this.correlationId=sw.getCorrelationContextTarget(r,ow.requestContextTargetKey)},t.prototype.getDependencyTelemetry=function(r,n){var i=ut.parse(this.url);i.search=void 0,i.hash=void 0;var a=this.method.toUpperCase()+" "+i.pathname,s=sp.RemoteDependencyDataConstants.TYPE_HTTP,o=i.hostname;i.port&&(o+=":"+i.port),this.correlationId?(s=sp.RemoteDependencyDataConstants.TYPE_AI,this.correlationId!==cw.correlationIdPrefix&&(o+=" | "+this.correlationId)):s=sp.RemoteDependencyDataConstants.TYPE_HTTP;var u={id:n,name:a,data:this.url,duration:this.duration,success:this._isSuccess(),resultCode:this.statusCode?this.statusCode.toString():null,properties:this.properties||{},dependencyTypeName:s,target:o};if(r&&r.time?u.time=r.time:this.startTime&&(u.time=new Date(this.startTime)),r){for(var c in r)u[c]||(u[c]=r[c]);if(r.properties)for(var c in r.properties)u.properties[c]=r.properties[c]}return u},t._getUrlFromRequestOptions=function(r,n){if(typeof r=="string")if(r.indexOf("http://")===0||r.indexOf("https://")===0)r=ut.parse(r);else{var i=ut.parse(r);i.host==="443"?r=ut.parse("https://"+r):r=ut.parse("http://"+r)}else{if(r&&typeof ut.URL=="function"&&r instanceof ut.URL)return ut.format(r);var a=r;r={},a&&Object.keys(a).forEach(function(u){r[u]=a[u]})}if(r.path){var s=ut.parse(r.path);r.pathname=s.pathname,r.search=s.search}if(r.host&&r.port){var o=ut.parse("http://"+r.host);!o.port&&r.port&&(r.hostname=r.host,delete r.host)}return r.protocol=r.protocol||n.agent&&n.agent.protocol||n.protocol||void 0,r.hostname=r.hostname||"localhost",ut.format(r)},t}(uw);Ey.exports=lw});var yy=l(ai=>{"use strict";var ma=ai&&ai.__assign||function(){return ma=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ma.apply(this,arguments)};Object.defineProperty(ai,"__esModule",{value:!0});ai.spanToTelemetryContract=void 0;var fw=z(),ke=kt();function up(e){var t=ma({},e);return Object.keys(ke.SpanAttribute).forEach(function(r){delete t[r]}),t}function pw(e){var t="|"+e.spanContext().traceId+"."+e.spanContext().spanId+".",r=Math.round(e._duration[0]*1e3+e._duration[1]/1e6),n=e.attributes["peer.address"]?e.attributes["peer.address"].toString():"",i=e.attributes.component?e.attributes.component.toString():"",a=i.toUpperCase()===ke.DependencyTypeName.Http||!!e.attributes[ke.SpanAttribute.HttpUrl],s=i.toLowerCase()===ke.DependencyTypeName.Grpc;if(a){var o=e.attributes[ke.SpanAttribute.HttpMethod]||"GET",u=new URL(e.attributes[ke.SpanAttribute.HttpUrl].toString()),c=e.attributes[ke.SpanAttribute.HttpHost]||u.host,f=e.attributes[ke.SpanAttribute.HttpPort]||u.port||null,p=u.pathname||"/",d=o+" "+p,h=ke.DependencyTypeName.Http,E=f?(c+":"+f).toString():c.toString(),A=u.toString(),j=e.attributes[ke.SpanAttribute.HttpStatusCode]||e.status.code||0,se=j<400;return{id:t,name:d,dependencyTypeName:h,target:E,data:A,success:se,duration:r,url:A,resultCode:String(j),properties:up(e.attributes)}}else if(s){var o=e.attributes[ke.SpanAttribute.GrpcMethod]||"rpc",Ae=e.attributes[ke.SpanAttribute.GrpcService],At=Ae?o+" "+Ae:e.name;return{id:t,duration:r,name:At,target:Ae.toString(),data:Ae.toString()||At,url:Ae.toString()||At,dependencyTypeName:ke.DependencyTypeName.Grpc,resultCode:String(e.status.code||0),success:e.status.code===0,properties:up(e.attributes)}}else{var tn=e.name,yi=e.links&&e.links.map(function(rn){return{operation_Id:rn.context.traceId,id:rn.context.spanId}});return{id:t,duration:r,name:tn,target:n,data:n||tn,url:n||tn,dependencyTypeName:e.kind===fw.SpanKind.INTERNAL?ke.DependencyTypeName.InProc:i||e.name,resultCode:String(e.status.code||0),success:e.status.code===0,properties:ma(ma({},up(e.attributes)),{"_MS.links":yi||void 0})}}}ai.spanToTelemetryContract=pw});var Sy=l(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.enable=fr.subscriber=void 0;var cp=z(),Ty=oe(),Ay=Qi(),dw=yy(),hw=vu(),si=[],_w=function(e){var t=e.data,r=dw.spanToTelemetryContract(t),n=t.spanContext(),i=new Ay;i.traceId=n.traceId,i.spanId=n.spanId,i.traceFlag=Ay.formatOpenTelemetryTraceFlags(n.traceFlags),i.parentId=t.parentSpanId?"|"+n.traceId+"."+t.parentSpanId+".":null,hw.AsyncScopeManager.with(t,function(){si.forEach(function(a){t.kind===cp.SpanKind.SERVER?a.trackRequest(r):(t.kind===cp.SpanKind.CLIENT||t.kind===cp.SpanKind.INTERNAL)&&a.trackDependency(r)})})};fr.subscriber=_w;function vw(e,t){e?(si.length===0&&Ty.channel.subscribe("azure-coretracing",fr.subscriber),si.push(t)):(si=si.filter(function(r){return r!=t}),si.length===0&&Ty.channel.unsubscribe("azure-coretracing",fr.subscriber))}fr.enable=vw});var Cy=l(pr=>{"use strict";Object.defineProperty(pr,"__esModule",{value:!0});pr.enable=pr.subscriber=void 0;var Iy=oe(),oi=[],gw=function(e){e.data.event.commandName!=="ismaster"&&oi.forEach(function(t){var r=e.data.startedData&&e.data.startedData.databaseName||"Unknown database";t.trackDependency({target:r,data:e.data.event.commandName,name:e.data.event.commandName,duration:e.data.event.duration,success:e.data.succeeded,resultCode:e.data.succeeded?"0":"1",time:e.data.startedData.time,dependencyTypeName:"mongodb"})})};pr.subscriber=gw;function Ew(e,t){e?(oi.length===0&&Iy.channel.subscribe("mongodb",pr.subscriber),oi.push(t)):(oi=oi.filter(function(r){return r!=t}),oi.length===0&&Iy.channel.unsubscribe("mongodb",pr.subscriber))}pr.enable=Ew});var Oy=l(dr=>{"use strict";Object.defineProperty(dr,"__esModule",{value:!0});dr.enable=dr.subscriber=void 0;var by=oe(),ui=[],mw=function(e){ui.forEach(function(t){var r=e.data.query||{},n=r.sql||"Unknown query",i=!e.data.err,a=r._connection||{},s=a.config||{},o=s.socketPath?s.socketPath:(s.host||"localhost")+":"+s.port;t.trackDependency({target:o,data:n,name:n,duration:e.data.duration,success:i,resultCode:i?"0":"1",time:e.data.time,dependencyTypeName:"mysql"})})};dr.subscriber=mw;function yw(e,t){e?(ui.length===0&&by.channel.subscribe("mysql",dr.subscriber),ui.push(t)):(ui=ui.filter(function(r){return r!=t}),ui.length===0&&by.channel.unsubscribe("mysql",dr.subscriber))}dr.enable=yw});var Ry=l(hr=>{"use strict";Object.defineProperty(hr,"__esModule",{value:!0});hr.enable=hr.subscriber=void 0;var Py=oe(),ci=[],Tw=function(e){ci.forEach(function(t){e.data.commandObj.command!=="info"&&t.trackDependency({target:e.data.address,name:e.data.commandObj.command,data:e.data.commandObj.command,duration:e.data.duration,success:!e.data.err,resultCode:e.data.err?"1":"0",time:e.data.time,dependencyTypeName:"redis"})})};hr.subscriber=Tw;function Aw(e,t){e?(ci.length===0&&Py.channel.subscribe("redis",hr.subscriber),ci.push(t)):(ci=ci.filter(function(r){return r!=t}),ci.length===0&&Py.channel.unsubscribe("redis",hr.subscriber))}hr.enable=Aw});var Dy=l(_r=>{"use strict";Object.defineProperty(_r,"__esModule",{value:!0});_r.enable=_r.subscriber=void 0;var Ny=oe(),li=[],Sw=function(e){li.forEach(function(t){var r=e.data.query,n=r.preparable&&r.preparable.text||r.plan||r.text||"unknown query",i=!e.data.error,a=e.data.database.host+":"+e.data.database.port;t.trackDependency({target:a,data:n,name:n,duration:e.data.duration,success:i,resultCode:i?"0":"1",time:e.data.time,dependencyTypeName:"postgres"})})};_r.subscriber=Sw;function Iw(e,t){e?(li.length===0&&Ny.channel.subscribe("postgres",_r.subscriber),li.push(t)):(li=li.filter(function(r){return r!=t}),li.length===0&&Ny.channel.unsubscribe("postgres",_r.subscriber))}_r.enable=Iw});var di=l((pp,Ly)=>{"use strict";var iu=pp&&pp.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var a=arguments[t],s=0,o=a.length;s<o;s++,i++)n[i]=a[s];return n},fi=__webpack_require__(136),pi=__webpack_require__(256),lp=_e(),wy=Ue(),vr=jn(),Cw=my(),xy=Er(),My=Fr(),fp=Qi(),bw=po(),Ow=function(){function e(t){if(e.INSTANCE)throw new Error("Client request tracking should be configured from the applicationInsights object");e.INSTANCE=this,this._client=t}return e.prototype.enable=function(t){this._isEnabled=t,this._isEnabled&&!this._isInitialized&&this._initialize(),bw.IsInitialized&&(Sy().enable(!0,this._client),Cy().enable(t,this._client),Oy().enable(t,this._client),Ry().enable(t,this._client),Dy().enable(t,this._client))},e.prototype.isInitialized=function(){return this._isInitialized},e.prototype._initialize=function(){var t=this;this._isInitialized=!0;var r=fi.request,n=pi.request,i=function(a,s){var o=!s[e.disableCollectionRequestOption]&&!a[e.alreadyAutoCollectedFlag];s.headers&&s.headers["user-agent"]&&s.headers["user-agent"].toString().indexOf("azsdk-js")!==-1&&(o=!1),a[e.alreadyAutoCollectedFlag]=!0,a&&s&&o&&(xy.CorrelationContextManager.wrapEmitter(a),e.trackRequest(t._client,{options:s,request:a}))};fi.request=function(a){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];var u=r.call.apply(r,iu([fi,a],s));return i(u,a),u},pi.request=function(a){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];var u=n.call.apply(n,iu([pi,a],s));return i(u,a),u},fi.get=function(a){for(var s,o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];var c=(s=fi.request).call.apply(s,iu([fi,a],o));return c.end(),c},pi.get=function(a){for(var s,o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];var c=(s=pi.request).call.apply(s,iu([pi,a],o));return c.end(),c}},e.trackRequest=function(t,r){if(!r.options||!r.request||!t){lp.info("AutoCollectHttpDependencies.trackRequest was called with invalid parameters: ",!r.options,!r.request,!t);return}var n=new Cw(r.options,r.request),i=xy.CorrelationContextManager.getCurrentContext(),a,s;if(i&&i.operation&&i.operation.traceparent&&fp.isValidTraceId(i.operation.traceparent.traceId))i.operation.traceparent.updateSpanId(),a=i.operation.traceparent.getBackCompatRequestId();else if(My.w3cEnabled){var o=new fp;s=o.toString(),a=o.getBackCompatRequestId()}else a=i&&i.operation&&i.operation.parentId+e.requestNumber+++".";if(wy.canIncludeCorrelationHeader(t,n.getUrl())&&r.request.getHeader&&r.request.setHeader&&t.config&&t.config.correlationId){var u=r.request.getHeader(vr.requestContextHeader);try{wy.safeIncludeCorrelationHeader(t,r.request,u)}catch(p){lp.warn("Request-Context header could not be set. Correlation of requests may be lost",p)}if(i&&i.operation)try{if(r.request.setHeader(vr.requestIdHeader,a),t.config.ignoreLegacyHeaders||(r.request.setHeader(vr.parentIdHeader,i.operation.id),r.request.setHeader(vr.rootIdHeader,a)),s||i.operation.traceparent)r.request.setHeader(vr.traceparentHeader,s||i.operation.traceparent.toString());else if(My.w3cEnabled){var o=new fp().toString();r.request.setHeader(vr.traceparentHeader,o)}if(i.operation.tracestate){var c=i.operation.tracestate.toString();c&&r.request.setHeader(vr.traceStateHeader,c)}var f=i.customProperties.serializeToHeader();f&&r.request.setHeader(vr.correlationContextHeader,f)}catch(p){lp.warn("Correlation headers could not be set. Correlation of requests may be lost.",p)}}r.request.on&&(r.request.on("response",function(p){n.onResponse(p);var d=n.getDependencyTelemetry(r,a);d.contextObjects=d.contextObjects||{},d.contextObjects["http.RequestOptions"]=r.options,d.contextObjects["http.ClientRequest"]=r.request,d.contextObjects["http.ClientResponse"]=p,t.trackDependency(d)}),r.request.on("error",function(p){n.onError(p);var d=n.getDependencyTelemetry(r,a);d.contextObjects=d.contextObjects||{},d.contextObjects["http.RequestOptions"]=r.options,d.contextObjects["http.ClientRequest"]=r.request,d.contextObjects.Error=p,t.trackDependency(d)}),r.request.on("abort",function(){n.onError(new Error);var p=n.getDependencyTelemetry(r,a);p.contextObjects=p.contextObjects||{},p.contextObjects["http.RequestOptions"]=r.options,p.contextObjects["http.ClientRequest"]=r.request,t.trackDependency(p)}))},e.prototype.dispose=function(){e.INSTANCE=null,this.enable(!1),this._isInitialized=!1},e.disableCollectionRequestOption="disableAppInsightsAutoCollection",e.requestNumber=1,e.alreadyAutoCollectedFlag="_appInsightsAutoCollected",e}();Ly.exports=Ow});var ky=l((ej,jy)=>{"use strict";var Pw=__webpack_require__(558),qy=kt(),Rw=Ue(),Nw=Ea(),Dw=di(),ww="http://169.254.169.254/metadata/instance/compute",xw="api-version=2017-12-01",Mw="format=json",Lw="ENETUNREACH",qw=function(){function e(t){this._collectionInterval=9e5,this._vmData={},this._azInst_vmId="",this._azInst_subscriptionId="",this._azInst_osType="",e.INSTANCE||(e.INSTANCE=this),this._isInitialized=!1,this._client=t}return e.prototype.enable=function(t,r){var n=this;this._isEnabled=t,this._isEnabled&&!this._isInitialized&&(this._isInitialized=!0),t?this._handle||(this._handle=setInterval(function(){return n.trackHeartBeat(r,function(){})},this._collectionInterval),this._handle.unref()):this._handle&&(clearInterval(this._handle),this._handle=null)},e.prototype.isInitialized=function(){return this._isInitialized},e.isEnabled=function(){return e.INSTANCE&&e.INSTANCE._isEnabled},e.prototype.trackHeartBeat=function(t,r){var n=this,i=!1,a={},s=Nw.sdkVersion;a.sdk=s,a.osType=Pw.type(),process.env.WEBSITE_SITE_NAME?(a.appSrv_SiteName=process.env.WEBSITE_SITE_NAME||"",a.appSrv_wsStamp=process.env.WEBSITE_HOME_STAMPNAME||"",a.appSrv_wsHost=process.env.WEBSITE_HOSTNAME||""):process.env.FUNCTIONS_WORKER_RUNTIME?a.azfunction_appId=process.env.WEBSITE_HOSTNAME:t&&(this._isVM===void 0?(i=!0,this._getAzureComputeMetadata(t,function(){n._isVM&&Object.keys(n._vmData).length>0&&(a.azInst_vmId=n._vmData.vmId||"",a.azInst_subscriptionId=n._vmData.subscriptionId||"",a.azInst_osType=n._vmData.osType||"",n._azInst_vmId=n._vmData.vmId||"",n._azInst_subscriptionId=n._vmData.subscriptionId||"",n._azInst_osType=n._vmData.osType||""),n._client.trackMetric({name:qy.HeartBeatMetricName,value:0,properties:a}),r()})):this._isVM&&(a.azInst_vmId=this._azInst_vmId,a.azInst_subscriptionId=this._azInst_subscriptionId,a.azInst_osType=this._azInst_osType)),i||(this._client.trackMetric({name:qy.HeartBeatMetricName,value:0,properties:a}),r())},e.prototype.dispose=function(){e.INSTANCE=null,this.enable(!1),this._isInitialized=!1},e.prototype._getAzureComputeMetadata=function(t,r){var n,i=this,a=ww+"?"+xw+"&"+Mw,s=(n={method:"GET"},n[Dw.disableCollectionRequestOption]=!0,n.headers={Metadata:"True"},n),o=Rw.makeRequest(t,a,s,function(u){if(u.statusCode===200){i._isVM=!0;var c="";u.on("data",function(f){c+=f}),u.on("end",function(){i._vmData=i._isJSON(c)?JSON.parse(c):{},r()})}else r()});o&&(o.on("error",function(u){u&&u.message&&u.message.indexOf(Lw)>-1&&(i._isVM=!1),r()}),o.end())},e.prototype._isJSON=function(t){try{return JSON.parse(t)&&!!t}catch{return!1}},e}();jy.exports=qw});var hp=l((tj,Gy)=>{"use strict";var Hy=__webpack_require__(136),Uy=__webpack_require__(256),By=_e(),Fy=Ue(),jw=jn(),dp=Bl(),Ut=Er(),kw=Jo(),Hw=function(){function e(t){if(e.INSTANCE)throw new Error("Server request tracking should be configured from the applicationInsights object");e.INSTANCE=this,this._client=t}return e.prototype.enable=function(t){this._isEnabled=t,(this._isAutoCorrelating||this._isEnabled||kw.isEnabled())&&!this._isInitialized&&(this.useAutoCorrelation(this._isAutoCorrelating),this._initialize())},e.prototype.useAutoCorrelation=function(t,r){t&&!this._isAutoCorrelating?Ut.CorrelationContextManager.enable(r):!t&&this._isAutoCorrelating&&Ut.CorrelationContextManager.disable(),this._isAutoCorrelating=t},e.prototype.isInitialized=function(){return this._isInitialized},e.prototype.isAutoCorrelating=function(){return this._isAutoCorrelating},e.prototype._generateCorrelationContext=function(t){if(!!this._isAutoCorrelating)return Ut.CorrelationContextManager.generateContextObject(t.getOperationId(this._client.context.tags),t.getRequestId(),t.getOperationName(this._client.context.tags),t.getCorrelationContextHeader(),t.getTraceparent(),t.getTracestate())},e.prototype._initialize=function(){var t=this;this._isInitialized=!0;var r=function(s){if(!!s){if(typeof s!="function")throw new Error("onRequest handler must be a function");return function(o,u){Ut.CorrelationContextManager.wrapEmitter(o),Ut.CorrelationContextManager.wrapEmitter(u);var c=o&&!o[e.alreadyAutoCollectedFlag];if(o&&c){var f=new dp(o),p=t._generateCorrelationContext(f);Ut.CorrelationContextManager.runWithContext(p,function(){t._isEnabled&&(o[e.alreadyAutoCollectedFlag]=!0,e.trackRequest(t._client,{request:o,response:u},f)),typeof s=="function"&&s(o,u)})}else typeof s=="function"&&s(o,u)}}},n=function(s){var o=s.addListener.bind(s);s.addListener=function(u,c){switch(u){case"request":case"checkContinue":return o(u,r(c));default:return o(u,c)}},s.on=s.addListener},i=Hy.createServer;Hy.createServer=function(s,o){if(o&&typeof o=="function"){var u=i(s,r(o));return n(u),u}else{var u=i(r(s));return n(u),u}};var a=Uy.createServer;Uy.createServer=function(s,o){var u=a(s,r(o));return n(u),u}},e.trackRequestSync=function(t,r){if(!r.request||!r.response||!t){By.info("AutoCollectHttpRequests.trackRequestSync was called with invalid parameters: ",!r.request,!r.response,!t);return}e.addResponseCorrelationIdHeader(t,r.response);var n=Ut.CorrelationContextManager.getCurrentContext(),i=new dp(r.request,n&&n.operation.parentId);n&&(n.operation.id=i.getOperationId(t.context.tags)||n.operation.id,n.operation.name=i.getOperationName(t.context.tags)||n.operation.name,n.operation.parentId=i.getRequestId()||n.operation.parentId,n.customProperties.addHeaderData(i.getCorrelationContextHeader())),e.endRequest(t,i,r,r.duration,r.error)},e.trackRequest=function(t,r,n){if(!r.request||!r.response||!t){By.info("AutoCollectHttpRequests.trackRequest was called with invalid parameters: ",!r.request,!r.response,!t);return}var i=Ut.CorrelationContextManager.getCurrentContext(),a=n||new dp(r.request,i&&i.operation.parentId);Fy.canIncludeCorrelationHeader(t,a.getUrl())&&e.addResponseCorrelationIdHeader(t,r.response),i&&!n&&(i.operation.id=a.getOperationId(t.context.tags)||i.operation.id,i.operation.name=a.getOperationName(t.context.tags)||i.operation.name,i.operation.parentId=a.getOperationParentId(t.context.tags)||i.operation.parentId,i.customProperties.addHeaderData(a.getCorrelationContextHeader())),r.response.once&&r.response.once("finish",function(){e.endRequest(t,a,r,null,null)}),r.request.on&&r.request.on("error",function(s){e.endRequest(t,a,r,null,s)}),r.request.on&&r.request.on("aborted",function(){var s="The request has been aborted and the network socket has closed.";e.endRequest(t,a,r,null,s)})},e.addResponseCorrelationIdHeader=function(t,r){if(t.config&&t.config.correlationId&&r.getHeader&&r.setHeader&&!r.headersSent){var n=r.getHeader(jw.requestContextHeader);Fy.safeIncludeCorrelationHeader(t,r,n)}},e.endRequest=function(t,r,n,i,a){a?r.onError(a,i):r.onResponse(n.response,i);var s=r.getRequestTelemetry(n);if(s.tagOverrides=r.getRequestTags(t.context.tags),n.tagOverrides)for(var o in n.tagOverrides)s.tagOverrides[o]=n.tagOverrides[o];var u=r.getLegacyRootId();u&&(s.properties.ai_legacyRootId=u),s.contextObjects=s.contextObjects||{},s.contextObjects["http.ServerRequest"]=n.request,s.contextObjects["http.ServerResponse"]=n.response,t.trackRequest(s)},e.prototype.dispose=function(){e.INSTANCE=null,this.enable(!1),this._isInitialized=!1,Ut.CorrelationContextManager.disable(),this._isAutoCorrelating=!1},e.alreadyAutoCollectedFlag="_appInsightsAutoCollected",e}();Gy.exports=Hw});var zy=l((vp,$y)=>{"use strict";var Je=vp&&vp.__assign||function(){return Je=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Je.apply(this,arguments)},_p=__webpack_require__(558),Jr=De(),Vy=kt(),Uw=Ue(),Bw=_e(),Fw=Uw.w3cTraceId(),Gw=function(){function e(){}return e.createQuickPulseEnvelope=function(t,r,n,i){var a=_p&&typeof _p.hostname=="function"&&_p.hostname()||"Unknown",s=i.tags&&i.keys&&i.keys.cloudRoleInstance&&i.tags[i.keys.cloudRoleInstance]||a,o=i.tags&&i.keys&&i.keys.cloudRole&&i.tags[i.keys.cloudRole]||null,u={Documents:r.length>0?r:null,InstrumentationKey:n.instrumentationKey||"",Metrics:t.length>0?t:null,InvariantVersion:1,Timestamp:"/Date("+Date.now()+")/",Version:i.tags[i.keys.internalSdkVersion],StreamId:Fw,MachineName:a,Instance:s,RoleName:o};return u},e.createQuickPulseMetric=function(t){var r;return r={Name:t.name,Value:t.value,Weight:t.count||1},r},e.telemetryEnvelopeToQuickPulseDocument=function(t){switch(t.data.baseType){case Jr.TelemetryTypeString.Event:return e.createQuickPulseEventDocument(t);case Jr.TelemetryTypeString.Exception:return e.createQuickPulseExceptionDocument(t);case Jr.TelemetryTypeString.Trace:return e.createQuickPulseTraceDocument(t);case Jr.TelemetryTypeString.Dependency:return e.createQuickPulseDependencyDocument(t);case Jr.TelemetryTypeString.Request:return e.createQuickPulseRequestDocument(t)}return null},e.createQuickPulseEventDocument=function(t){var r=e.createQuickPulseDocument(t),n=t.data.baseData.name,i=Je(Je({},r),{Name:n});return i},e.createQuickPulseTraceDocument=function(t){var r=e.createQuickPulseDocument(t),n=t.data.baseData.severityLevel||0,i=Je(Je({},r),{Message:t.data.baseData.message,SeverityLevel:Jr.SeverityLevel[n]});return i},e.createQuickPulseExceptionDocument=function(t){var r=e.createQuickPulseDocument(t),n=t.data.baseData.exceptions,i="",a="",s="";n&&n.length>0&&(n[0].parsedStack&&n[0].parsedStack.length>0?n[0].parsedStack.forEach(function(u){i+=u.assembly+`
`}):n[0].stack&&n[0].stack.length>0&&(i=n[0].stack),a=n[0].message,s=n[0].typeName);var o=Je(Je({},r),{Exception:i,ExceptionMessage:a,ExceptionType:s});return o},e.createQuickPulseRequestDocument=function(t){var r=e.createQuickPulseDocument(t),n=t.data.baseData,i=Je(Je({},r),{Name:n.name,Success:n.success,Duration:n.duration,ResponseCode:n.responseCode,OperationName:n.name});return i},e.createQuickPulseDependencyDocument=function(t){var r=e.createQuickPulseDocument(t),n=t.data.baseData,i=Je(Je({},r),{Name:n.name,Target:n.target,Success:n.success,Duration:n.duration,ResultCode:n.resultCode,CommandName:n.data,OperationName:r.OperationId,DependencyTypeName:n.type});return i},e.createQuickPulseDocument=function(t){var r,n,i,a;t.data.baseType?(n=Vy.TelemetryTypeStringToQuickPulseType[t.data.baseType],r=Vy.TelemetryTypeStringToQuickPulseDocumentType[t.data.baseType]):Bw.warn("Document type invalid; not sending live metric document",t.data.baseType),i=t.tags[e.keys.operationId],a=e.aggregateProperties(t);var s={DocumentType:r,__type:n,OperationId:i,Version:"1.0",Properties:a};return s},e.aggregateProperties=function(t){var r=[],n=t.data.baseData.measurements||{};for(var i in n)if(n.hasOwnProperty(i)){var a=n[i],s={key:i,value:a};r.push(s)}var o=t.data.baseData.properties||{};for(var i in o)if(o.hasOwnProperty(i)){var a=o[i],s={key:i,value:a};r.push(s)}return r},e.keys=new Jr.ContextTagKeys,e}();$y.exports=Gw});var Ky=l((rj,Xy)=>{"use strict";var Vw=function(){return(Date.now()+621355968e5)*1e4};Xy.exports={getTransmissionTime:Vw}});var Jy=l((ya,Zy)=>{"use strict";var Yy=ya&&ya.__awaiter||function(e,t,r,n){function i(a){return a instanceof r?a:new r(function(s){s(a)})}return new(r||(r=Promise))(function(a,s){function o(f){try{c(n.next(f))}catch(p){s(p)}}function u(f){try{c(n.throw(f))}catch(p){s(p)}}function c(f){f.done?a(f.value):i(f.value).then(o,u)}c((n=n.apply(e,t||[])).next())})},Qy=ya&&ya.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(c){return function(f){return u([c,f])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(c[0]===6&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(f){c=[6,f],i=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},$w=__webpack_require__(256),zw=di(),Wy=_e(),Xw=Ky(),Kw=Ue(),et={method:"POST",time:"x-ms-qps-transmission-time",pollingIntervalHint:"x-ms-qps-service-polling-interval-hint",endpointRedirect:"x-ms-qps-service-endpoint-redirect",instanceName:"x-ms-qps-instance-name",streamId:"x-ms-qps-stream-id",machineName:"x-ms-qps-machine-name",roleName:"x-ms-qps-role-name",streamid:"x-ms-qps-stream-id",invariantVersion:"x-ms-qps-invariant-version",subscribed:"x-ms-qps-subscribed"},Yw=function(){function e(t){this._config=t,this._consecutiveErrors=0}return e.prototype.ping=function(t,r,n){var i=[{name:et.streamId,value:t.StreamId},{name:et.machineName,value:t.MachineName},{name:et.roleName,value:t.RoleName},{name:et.instanceName,value:t.Instance},{name:et.invariantVersion,value:t.InvariantVersion.toString()}];this._submitData(t,r,n,"ping",i)},e.prototype.post=function(t,r,n){return Yy(this,void 0,void 0,function(){return Qy(this,function(i){switch(i.label){case 0:return[4,this._submitData([t],r,n,"post")];case 1:return i.sent(),[2]}})})},e.prototype._submitData=function(t,r,n,i,a){return Yy(this,void 0,void 0,function(){var s,o,u,c,f,p=this;return Qy(this,function(d){return s=JSON.stringify(t),o=(c={},c[zw.disableCollectionRequestOption]=!0,c.host=r&&r.length>0?r:this._config.quickPulseHost,c.method=et.method,c.path="/QuickPulseService.svc/"+i+"?ikey="+this._config.instrumentationKey,c.headers=(f={Expect:"100-continue"},f[et.time]=Xw.getTransmissionTime(),f["Content-Type"]="application/json",f["Content-Length"]=Buffer.byteLength(s),f),c),a&&a.length>0&&a.forEach(function(h){return o.headers[h.name]=h.value}),this._config.httpsAgent?o.agent=this._config.httpsAgent:o.agent=Kw.tlsRestrictedAgent,u=$w.request(o,function(h){if(h.statusCode==200){var E=h.headers[et.subscribed]==="true",A=h.headers[et.endpointRedirect]?h.headers[et.endpointRedirect].toString():null,j=h.headers[et.pollingIntervalHint]?parseInt(h.headers[et.pollingIntervalHint].toString()):null;p._consecutiveErrors=0,n(E,h,A,j)}else p._onError("StatusCode:"+h.statusCode+" StatusMessage:"+h.statusMessage),n()}),u.on("error",function(h){p._onError(h),n()}),u.write(s),u.end(),[2]})})},e.prototype._onError=function(t){this._consecutiveErrors++;var r="Transient error connecting to the Live Metrics endpoint. This packet will not appear in your Live Metrics Stream. Error:";this._consecutiveErrors%e.MAX_QPS_FAILURES_BEFORE_WARN===0?(r="Live Metrics endpoint could not be reached "+this._consecutiveErrors+" consecutive times. Most recent error:",Wy.warn(e.TAG,r,t)):Wy.info(e.TAG,r,t)},e.TAG="QuickPulseSender",e.MAX_QPS_FAILURES_BEFORE_WARN=25,e}();Zy.exports=Yw});var iT=l((Ta,nT)=>{"use strict";var eT=Ta&&Ta.__awaiter||function(e,t,r,n){function i(a){return a instanceof r?a:new r(function(s){s(a)})}return new(r||(r=Promise))(function(a,s){function o(f){try{c(n.next(f))}catch(p){s(p)}}function u(f){try{c(n.throw(f))}catch(p){s(p)}}function c(f){f.done?a(f.value):i(f.value).then(o,u)}c((n=n.apply(e,t||[])).next())})},tT=Ta&&Ta.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(c){return function(f){return u([c,f])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(c[0]===6&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(f){c=[6,f],i=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},rT=_e(),gp=zy(),Qw=Jy(),Ww=kt(),Zw=Ea(),Jw=function(){function e(t,r){this._isCollectingData=!1,this._lastSuccessTime=Date.now(),this._lastSendSucceeded=!0,this._metrics={},this._documents=[],this._collectors=[],this._redirectedHost=null,this._pollingIntervalHint=-1,this.config=t,this.context=r||new Zw,this._sender=new Qw(this.config),this._isEnabled=!1}return e.prototype.addCollector=function(t){this._collectors.push(t)},e.prototype.trackMetric=function(t){this._addMetric(t)},e.prototype.addDocument=function(t){var r=gp.telemetryEnvelopeToQuickPulseDocument(t);r&&this._documents.push(r)},e.prototype.enable=function(t){t&&!this._isEnabled?(this._isEnabled=!0,this._goQuickPulse()):!t&&this._isEnabled&&(this._isEnabled=!1,clearTimeout(this._handle),this._handle=void 0)},e.prototype.enableCollectors=function(t){this._collectors.forEach(function(r){r.enable(t)})},e.prototype._addMetric=function(t){var r=t.value,n=t.count||1,i=Ww.PerformanceToQuickPulseCounter[t.name];i&&(this._metrics[i]?(this._metrics[i].Value=(this._metrics[i].Value*this._metrics[i].Weight+r*n)/(this._metrics[i].Weight+n),this._metrics[i].Weight+=n):(this._metrics[i]=gp.createQuickPulseMetric(t),this._metrics[i].Name=i,this._metrics[i].Weight=1))},e.prototype._resetQuickPulseBuffer=function(){delete this._metrics,this._metrics={},this._documents.length=0},e.prototype._goQuickPulse=function(){return eT(this,void 0,void 0,function(){var t,r,n,i,a=this;return tT(this,function(s){switch(s.label){case 0:return t=Object.keys(this._metrics).map(function(o){return a._metrics[o]}),r=gp.createQuickPulseEnvelope(t,this._documents.slice(),this.config,this.context),this._resetQuickPulseBuffer(),this._isCollectingData?[4,this._post(r)]:[3,2];case 1:return s.sent(),[3,3];case 2:this._ping(r),s.label=3;case 3:return n=this._pollingIntervalHint>0?this._pollingIntervalHint:e.PING_INTERVAL,i=this._isCollectingData?e.POST_INTERVAL:n,this._isCollectingData&&Date.now()-this._lastSuccessTime>=e.MAX_POST_WAIT_TIME&&!this._lastSendSucceeded?(this._isCollectingData=!1,i=e.FALLBACK_INTERVAL):!this._isCollectingData&&Date.now()-this._lastSuccessTime>=e.MAX_PING_WAIT_TIME&&!this._lastSendSucceeded&&(i=e.FALLBACK_INTERVAL),this._lastSendSucceeded=null,this._handle=setTimeout(this._goQuickPulse.bind(this),i),this._handle.unref(),[2]}})})},e.prototype._ping=function(t){this._sender.ping(t,this._redirectedHost,this._quickPulseDone.bind(this))},e.prototype._post=function(t){return eT(this,void 0,void 0,function(){return tT(this,function(r){switch(r.label){case 0:return[4,this._sender.post(t,this._redirectedHost,this._quickPulseDone.bind(this))];case 1:return r.sent(),[2]}})})},e.prototype._quickPulseDone=function(t,r,n,i){t!=null?(this._isCollectingData!==t&&(rT.info("Live Metrics sending data",t),this.enableCollectors(t)),this._isCollectingData=t,n&&n.length>0&&(this._redirectedHost=n,rT.info("Redirecting endpoint to: ",n)),i&&i>0&&(this._pollingIntervalHint=i),r&&r.statusCode<300&&r.statusCode>=200?(this._lastSuccessTime=Date.now(),this._lastSendSucceeded=!0):this._lastSendSucceeded=!1):this._lastSendSucceeded=!1},e.MAX_POST_WAIT_TIME=2e4,e.MAX_PING_WAIT_TIME=6e4,e.FALLBACK_INTERVAL=6e4,e.PING_INTERVAL=5e3,e.POST_INTERVAL=1e3,e}();nT.exports=Jw});var oT=l((nj,sT)=>{"use strict";var aT=kt(),ex=function(){function e(){}return e.parse=function(t){if(!t)return{};var r=t.split(e._FIELDS_SEPARATOR),n=r.reduce(function(a,s){var o=s.split(e._FIELD_KEY_VALUE_SEPARATOR);if(o.length===2){var u=o[0].toLowerCase(),c=o[1];a[u]=c}return a},{});if(Object.keys(n).length>0){if(n.endpointsuffix){var i=n.location?n.location+".":"";n.ingestionendpoint=n.ingestionendpoint||"https://"+i+"dc."+n.endpointsuffix,n.liveendpoint=n.liveendpoint||"https://"+i+"live."+n.endpointsuffix}n.ingestionendpoint=n.ingestionendpoint||aT.DEFAULT_BREEZE_ENDPOINT,n.liveendpoint=n.liveendpoint||aT.DEFAULT_LIVEMETRICS_ENDPOINT}return n},e._FIELDS_SEPARATOR=";",e._FIELD_KEY_VALUE_SEPARATOR="=",e}();sT.exports=ex});var mp=l((aj,lT)=>{"use strict";var Ep=Fr(),uT=oT(),ij=_e(),cT=kt(),tx=__webpack_require__(716),rx=function(){function e(t){var r=this;this.endpointBase=cT.DEFAULT_BREEZE_ENDPOINT;var n=process.env[e.ENV_connectionString],i=uT.parse(t),a=uT.parse(n),s=!i.instrumentationkey&&Object.keys(i).length>0?null:t;this.instrumentationKey=i.instrumentationkey||s||a.instrumentationkey||e._getInstrumentationKey(),e._validateInstrumentationKey(this.instrumentationKey),this.endpointUrl=(i.ingestionendpoint||a.ingestionendpoint||this.endpointBase)+"/v2.1/track",this.maxBatchSize=250,this.maxBatchIntervalMs=15e3,this.disableAppInsights=!1,this.samplingPercentage=100,this.correlationIdRetryIntervalMs=30*1e3,this.correlationHeaderExcludedDomains=["*.core.windows.net","*.core.chinacloudapi.cn","*.core.cloudapi.de","*.core.usgovcloudapi.net","*.core.microsoft.scloud","*.core.eaglex.ic.gov"],this.setCorrelationId=function(o){return r.correlationId=o},this.proxyHttpUrl=process.env[e.ENV_http_proxy]||void 0,this.proxyHttpsUrl=process.env[e.ENV_https_proxy]||void 0,this.httpAgent=void 0,this.httpsAgent=void 0,this.profileQueryEndpoint=i.ingestionendpoint||a.ingestionendpoint||process.env[e.ENV_profileQueryEndpoint]||this.endpointBase,this._quickPulseHost=i.liveendpoint||a.liveendpoint||process.env[e.ENV_quickPulseHost]||cT.DEFAULT_LIVEMETRICS_HOST,this._quickPulseHost.match(/^https?:\/\//)&&(this._quickPulseHost=tx.parse(this._quickPulseHost).host)}return Object.defineProperty(e.prototype,"profileQueryEndpoint",{get:function(){return this._profileQueryEndpoint},set:function(t){Ep.cancelCorrelationIdQuery(this,this.setCorrelationId),this._profileQueryEndpoint=t,this.correlationId=Ep.correlationIdPrefix,Ep.queryCorrelationId(this,this.setCorrelationId)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quickPulseHost",{get:function(){return this._quickPulseHost},set:function(t){this._quickPulseHost=t},enumerable:!1,configurable:!0}),e._getInstrumentationKey=function(){var t=process.env[e.ENV_iKey]||process.env[e.ENV_azurePrefix+e.ENV_iKey]||process.env[e.legacy_ENV_iKey]||process.env[e.ENV_azurePrefix+e.legacy_ENV_iKey];if(!t||t=="")throw new Error("Instrumentation key not found, pass the key in the config to this method or set the key in the environment variable APPINSIGHTS_INSTRUMENTATIONKEY before starting the server");return t},e._validateInstrumentationKey=function(t){var r="^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",n=new RegExp(r);return n.test(t)},e.ENV_azurePrefix="APPSETTING_",e.ENV_iKey="APPINSIGHTS_INSTRUMENTATIONKEY",e.legacy_ENV_iKey="APPINSIGHTS_INSTRUMENTATION_KEY",e.ENV_profileQueryEndpoint="APPINSIGHTS_PROFILE_QUERY_ENDPOINT",e.ENV_quickPulseHost="APPINSIGHTS_QUICKPULSE_HOST",e.ENV_connectionString="APPLICATIONINSIGHTS_CONNECTION_STRING",e.ENV_nativeMetricsDisablers="APPLICATION_INSIGHTS_DISABLE_EXTENDED_METRIC",e.ENV_nativeMetricsDisableAll="APPLICATION_INSIGHTS_DISABLE_ALL_EXTENDED_METRICS",e.ENV_http_proxy="http_proxy",e.ENV_https_proxy="https_proxy",e}();lT.exports=rx});var pT=l(hi=>{"use strict";var au=hi&&hi.__assign||function(){return au=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},au.apply(this,arguments)};Object.defineProperty(hi,"__esModule",{value:!0});hi.AutoCollectNativePerformance=void 0;var fT=mp(),Aa=Ea(),nx=_e(),ix=function(){function e(t){this._disabledMetrics={},e.INSTANCE&&e.INSTANCE.dispose(),e.INSTANCE=this,this._client=t}return e.isNodeVersionCompatible=function(){var t=process.versions.node.split(".");return parseInt(t[0])>=6},e.prototype.enable=function(t,r,n){var i=this;if(r===void 0&&(r={}),n===void 0&&(n=6e4),!!e.isNodeVersionCompatible()){if(e._metricsAvailable==null&&t&&!this._isInitialized)try{var a=__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'applicationinsights-native-metrics'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));e._emitter=new a,e._metricsAvailable=!0,nx.info("Native metrics module successfully loaded!")}catch{e._metricsAvailable=!1;return}this._isEnabled=t,this._disabledMetrics=r,this._isEnabled&&!this._isInitialized&&(this._isInitialized=!0),this._isEnabled&&e._emitter?(e._emitter.enable(!0,n),this._handle||(this._handle=setInterval(function(){return i._trackNativeMetrics()},n),this._handle.unref())):e._emitter&&(e._emitter.enable(!1),this._handle&&(clearInterval(this._handle),this._handle=void 0))}},e.prototype.dispose=function(){this.enable(!1)},e.parseEnabled=function(t){var r=process.env[fT.ENV_nativeMetricsDisableAll],n=process.env[fT.ENV_nativeMetricsDisablers];if(r)return{isEnabled:!1,disabledMetrics:{}};if(n){var i=n.split(","),a={};if(i.length>0)for(var s=0,o=i;s<o.length;s++){var u=o[s];a[u]=!0}return typeof t=="object"?{isEnabled:!0,disabledMetrics:au(au({},t),a)}:{isEnabled:t,disabledMetrics:a}}return typeof t=="boolean"?{isEnabled:t,disabledMetrics:{}}:{isEnabled:!0,disabledMetrics:t}},e.prototype._trackNativeMetrics=function(){var t=!0;typeof this._isEnabled!="object"&&(t=this._isEnabled),t&&(this._trackGarbageCollection(),this._trackEventLoop(),this._trackHeapUsage())},e.prototype._trackGarbageCollection=function(){var t;if(!this._disabledMetrics.gc){var r=e._emitter.getGCData();for(var n in r){var i=r[n].metrics,a=n+" Garbage Collection Duration",s=Math.sqrt(i.sumSquares/i.count-Math.pow(i.total/i.count,2))||0;this._client.trackMetric({name:a,value:i.total,count:i.count,max:i.max,min:i.min,stdDev:s,tagOverrides:(t={},t[this._client.context.keys.internalSdkVersion]="node-nativeperf:"+Aa.sdkVersion,t)})}}},e.prototype._trackEventLoop=function(){var t;if(!this._disabledMetrics.loop){var r=e._emitter.getLoopData(),n=r.loopUsage;if(n.count!=0){var i="Event Loop CPU Time",a=Math.sqrt(n.sumSquares/n.count-Math.pow(n.total/n.count,2))||0;this._client.trackMetric({name:i,value:n.total,count:n.count,min:n.min,max:n.max,stdDev:a,tagOverrides:(t={},t[this._client.context.keys.internalSdkVersion]="node-nativeperf:"+Aa.sdkVersion,t)})}}},e.prototype._trackHeapUsage=function(){var t,r,n;if(!this._disabledMetrics.heap){var i=process.memoryUsage(),a=i.heapUsed,s=i.heapTotal,o=i.rss;this._client.trackMetric({name:"Memory Usage (Heap)",value:a,count:1,tagOverrides:(t={},t[this._client.context.keys.internalSdkVersion]="node-nativeperf:"+Aa.sdkVersion,t)}),this._client.trackMetric({name:"Memory Total (Heap)",value:s,count:1,tagOverrides:(r={},r[this._client.context.keys.internalSdkVersion]="node-nativeperf:"+Aa.sdkVersion,r)}),this._client.trackMetric({name:"Memory Usage (Non-Heap)",value:o-s,count:1,tagOverrides:(n={},n[this._client.context.keys.internalSdkVersion]="node-nativeperf:"+Aa.sdkVersion,n)})}},e}();hi.AutoCollectNativePerformance=ix});var hT=l((oj,dT)=>{"use strict";var ax=_e(),sx=function(){function e(t,r,n,i){this._buffer=[],this._lastSend=0,this._isDisabled=t,this._getBatchSize=r,this._getBatchIntervalMs=n,this._sender=i}return e.prototype.setUseDiskRetryCaching=function(t,r,n){this._sender.setDiskRetryMode(t,r,n)},e.prototype.send=function(t){var r=this;if(!this._isDisabled()){if(!t){ax.warn("Cannot send null/undefined telemetry");return}if(this._buffer.push(t),this._buffer.length>=this._getBatchSize()){this.triggerSend(!1);return}!this._timeoutHandle&&this._buffer.length>0&&(this._timeoutHandle=setTimeout(function(){r._timeoutHandle=null,r.triggerSend(!1)},this._getBatchIntervalMs()))}},e.prototype.triggerSend=function(t,r){var n=this._buffer.length<1;n||(t?(this._sender.saveOnCrash(this._buffer),typeof r=="function"&&r("data saved on crash")):this._sender.send(this._buffer,r)),this._lastSend=+new Date,this._buffer=[],clearTimeout(this._timeoutHandle),this._timeoutHandle=null,n&&typeof r=="function"&&r("no data to send")},e}();dT.exports=sx});var _T=l(su=>{"use strict";Object.defineProperty(su,"__esModule",{value:!0});su.azureRoleEnvironmentTelemetryProcessor=void 0;function ox(e,t){process.env.WEBSITE_SITE_NAME&&(e.tags[t.keys.cloudRole]=process.env.WEBSITE_SITE_NAME)}su.azureRoleEnvironmentTelemetryProcessor=ox});var ET=l(_i=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.getSamplingHashCode=_i.samplingTelemetryProcessor=void 0;var vT=De();function ux(e,t){var r=e.sampleRate,n=!1;return r==null||r>=100||e.data&&vT.TelemetryType.Metric===vT.baseTypeToTelemetryType(e.data.baseType)?!0:(t.correlationContext&&t.correlationContext.operation?n=gT(t.correlationContext.operation.id)<r:n=Math.random()*100<r,n)}_i.samplingTelemetryProcessor=ux;function gT(e){var t=-2147483648,r=2147483647,n=5381;if(!e)return 0;for(;e.length<8;)e=e+e;for(var i=0;i<e.length;i++)n=((n<<5)+n|0)+e.charCodeAt(i)|0;return n=n<=t?r:Math.abs(n),n/r*100}_i.getSamplingHashCode=gT});var mT=l(ou=>{"use strict";Object.defineProperty(ou,"__esModule",{value:!0});ou.performanceMetricsTelemetryProcessor=void 0;var yp=Jo(),Tp=De();function cx(e,t){switch(t&&t.addDocument(e),e.data.baseType){case Tp.TelemetryTypeString.Exception:yp.countException();break;case Tp.TelemetryTypeString.Request:var r=e.data.baseData;yp.countRequest(r.duration,r.success);break;case Tp.TelemetryTypeString.Dependency:var n=e.data.baseData;yp.countDependency(n.duration,n.success);break}return!0}ou.performanceMetricsTelemetryProcessor=cx});var yT=l(vi=>{"use strict";var mt=vi&&vi.__assign||function(){return mt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mt.apply(this,arguments)};Object.defineProperty(vi,"__esModule",{value:!0});vi.preAggregatedMetricsTelemetryProcessor=void 0;var lx=De(),Sa=ap(),uu=De();function fx(e,t){if(Sa.isEnabled())switch(e.data.baseType){case uu.TelemetryTypeString.Exception:var r=e.data.baseData;r.properties=mt(mt({},r.properties),{"_MS.ProcessedByMetricExtractors":"(Name:'Exceptions', Ver:'1.1')"});var n={cloudRoleInstance:e.tags[t.keys.cloudRoleInstance],cloudRoleName:e.tags[t.keys.cloudRole]};Sa.countException(n);break;case uu.TelemetryTypeString.Trace:var i=e.data.baseData;i.properties=mt(mt({},i.properties),{"_MS.ProcessedByMetricExtractors":"(Name:'Traces', Ver:'1.1')"});var a={cloudRoleInstance:e.tags[t.keys.cloudRoleInstance],cloudRoleName:e.tags[t.keys.cloudRole],traceSeverityLevel:lx.SeverityLevel[i.severity]};Sa.countTrace(a);break;case uu.TelemetryTypeString.Request:var s=e.data.baseData;s.properties=mt(mt({},s.properties),{"_MS.ProcessedByMetricExtractors":"(Name:'Requests', Ver:'1.1')"});var o={cloudRoleInstance:e.tags[t.keys.cloudRoleInstance],cloudRoleName:e.tags[t.keys.cloudRole],operationSynthetic:e.tags[t.keys.operationSyntheticSource],requestSuccess:s.success,requestResultCode:s.responseCode};Sa.countRequest(s.duration,o);break;case uu.TelemetryTypeString.Dependency:var u=e.data.baseData;u.properties=mt(mt({},u.properties),{"_MS.ProcessedByMetricExtractors":"(Name:'Dependencies', Ver:'1.1')"});var c={cloudRoleInstance:e.tags[t.keys.cloudRoleInstance],cloudRoleName:e.tags[t.keys.cloudRole],operationSynthetic:e.tags[t.keys.operationSyntheticSource],dependencySuccess:u.success,dependencyType:u.type,dependencyTarget:u.target,dependencyResultCode:u.resultCode};Sa.countDependency(u.duration,c);break}return!0}vi.preAggregatedMetricsTelemetryProcessor=fx});var TT=l(yt=>{"use strict";var px=yt&&yt.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),cu=yt&&yt.__exportStar||function(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&px(t,e,r)};Object.defineProperty(yt,"__esModule",{value:!0});cu(_T(),yt);cu(ET(),yt);cu(mT(),yt);cu(yT(),yt)});var IT=l((Ia,ST)=>{"use strict";var dx=Ia&&Ia.__awaiter||function(e,t,r,n){function i(a){return a instanceof r?a:new r(function(s){s(a)})}return new(r||(r=Promise))(function(a,s){function o(f){try{c(n.next(f))}catch(p){s(p)}}function u(f){try{c(n.throw(f))}catch(p){s(p)}}function c(f){f.done?a(f.value):i(f.value).then(o,u)}c((n=n.apply(e,t||[])).next())})},hx=Ia&&Ia.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(c){return function(f){return u([c,f])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(c[0]===6&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(f){c=[6,f],i=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},ge=__webpack_require__(58),AT=__webpack_require__(558),Bt=__webpack_require__(72),_x=__webpack_require__(592),gi=__webpack_require__(368),Ee=_e(),vx=di(),lu=Ue(),gx=function(){function e(t,r,n){if(this._redirectedHost=null,this._config=t,this._onSuccess=r,this._onError=n,this._enableDiskRetryMode=!1,this._resendInterval=e.WAIT_BETWEEN_RESEND,this._maxBytesOnDisk=e.MAX_BYTES_ON_DISK,this._numConsecutiveFailures=0,this._numConsecutiveRedirects=0,this._resendTimer=null,this._fileCleanupTimer=null,this._tempDir=Bt.join(AT.tmpdir(),e.TEMPDIR_PREFIX+this._config.instrumentationKey),!e.OS_PROVIDES_FILE_PROTECTION)if(e.USE_ICACLS){try{e.OS_PROVIDES_FILE_PROTECTION=ge.existsSync(e.ICACLS_PATH)}catch{}e.OS_PROVIDES_FILE_PROTECTION||Ee.warn(e.TAG,"Could not find ICACLS in expected location! This is necessary to use disk retry mode on Windows.")}else e.OS_PROVIDES_FILE_PROTECTION=!0}return e.prototype.setDiskRetryMode=function(t,r,n){var i=this;this._enableDiskRetryMode=e.OS_PROVIDES_FILE_PROTECTION&&t,typeof r=="number"&&r>=0&&(this._resendInterval=Math.floor(r)),typeof n=="number"&&n>=0&&(this._maxBytesOnDisk=Math.floor(n)),t&&!e.OS_PROVIDES_FILE_PROTECTION&&(this._enableDiskRetryMode=!1,Ee.warn(e.TAG,"Ignoring request to enable disk retry mode. Sufficient file protection capabilities were not detected.")),this._enableDiskRetryMode?this._fileCleanupTimer||(this._fileCleanupTimer=setTimeout(function(){i._fileCleanupTask()},e.CLEANUP_TIMEOUT),this._fileCleanupTimer.unref()):this._fileCleanupTimer&&clearTimeout(this._fileCleanupTimer)},e.prototype.send=function(t,r){return dx(this,void 0,void 0,function(){var n,i,a,s,o=this;return hx(this,function(u){return t&&(n=this._redirectedHost||this._config.endpointUrl,i={method:"POST",withCredentials:!1,headers:{"Content-Type":"application/x-json-stream"}},a="",t.forEach(function(c){var f=o._stringify(c);typeof f=="string"&&(a+=f+`
`)}),a.length>0&&(a=a.substring(0,a.length-1)),s=Buffer.from?Buffer.from(a):new Buffer(a),_x.gzip(s,function(c,f){var p=f;c?(Ee.warn(c),p=s,i.headers["Content-Length"]=s.length.toString()):(i.headers["Content-Encoding"]="gzip",i.headers["Content-Length"]=f.length.toString()),Ee.info(e.TAG,i),i[vx.disableCollectionRequestOption]=!0;var d=function(E){E.setEncoding("utf-8");var A="";E.on("data",function(j){A+=j}),E.on("end",function(){if(o._numConsecutiveFailures=0,o._enableDiskRetryMode){if(E.statusCode===200)o._resendTimer||(o._resendTimer=setTimeout(function(){o._resendTimer=null,o._sendFirstFileOnDisk()},o._resendInterval),o._resendTimer.unref());else if(o._isRetriable(E.statusCode))try{var j=JSON.parse(A),se=[];j.errors.forEach(function(At){o._isRetriable(At.statusCode)&&se.push(t[At.index])}),se.length>0&&o._storeToDisk(se)}catch{o._storeToDisk(t)}}if(E.statusCode===307||E.statusCode===308)if(o._numConsecutiveRedirects++,o._numConsecutiveRedirects<10){var Ae=E.headers.location?E.headers.location.toString():null;Ae&&(o._redirectedHost=Ae,o.send(t,r))}else typeof r=="function"&&r("Error sending telemetry because of circular redirects.");else o._numConsecutiveRedirects=0,typeof r=="function"&&r(A),Ee.info(e.TAG,A),typeof o._onSuccess=="function"&&o._onSuccess(A)})},h=lu.makeRequest(o._config,n,i,d);h.on("error",function(E){if(o._numConsecutiveFailures++,!o._enableDiskRetryMode||o._numConsecutiveFailures>0&&o._numConsecutiveFailures%e.MAX_CONNECTION_FAILURES_BEFORE_WARN===0){var A="Ingestion endpoint could not be reached. This batch of telemetry items has been lost. Use Disk Retry Caching to enable resending of failed telemetry. Error:";o._enableDiskRetryMode&&(A="Ingestion endpoint could not be reached "+o._numConsecutiveFailures+" consecutive times. There may be resulting telemetry loss. Most recent error:"),Ee.warn(e.TAG,A,lu.dumpObj(E))}else{var A="Transient failure to reach ingestion endpoint. This batch of telemetry items will be retried. Error:";Ee.info(e.TAG,A,lu.dumpObj(E))}o._onErrorHelper(E),typeof r=="function"&&(E&&r(lu.dumpObj(E)),r("Error sending telemetry")),o._enableDiskRetryMode&&o._storeToDisk(t)}),h.write(p),h.end()})),[2]})})},e.prototype.saveOnCrash=function(t){this._enableDiskRetryMode&&this._storeToDiskSync(this._stringify(t))},e.prototype._isRetriable=function(t){return t===206||t===408||t===429||t===439||t===500||t===503},e.prototype._runICACLS=function(t,r){var n=gi.spawn(e.ICACLS_PATH,t,{windowsHide:!0});n.on("error",function(i){return r(i)}),n.on("close",function(i,a){return r(i===0?null:new Error("Setting ACL restrictions did not succeed (ICACLS returned code "+i+")"))})},e.prototype._runICACLSSync=function(t){if(gi.spawnSync){var r=gi.spawnSync(e.ICACLS_PATH,t,{windowsHide:!0});if(r.error)throw r.error;if(r.status!==0)throw new Error("Setting ACL restrictions did not succeed (ICACLS returned code "+r.status+")")}else throw new Error("Could not synchronously call ICACLS under current version of Node.js")},e.prototype._getACLIdentity=function(t){if(e.ACL_IDENTITY)return t(null,e.ACL_IDENTITY);var r=gi.spawn(e.POWERSHELL_PATH,["-Command","[System.Security.Principal.WindowsIdentity]::GetCurrent().Name"],{windowsHide:!0,stdio:["ignore","pipe","pipe"]}),n="";r.stdout.on("data",function(i){return n+=i}),r.on("error",function(i){return t(i,null)}),r.on("close",function(i,a){return e.ACL_IDENTITY=n&&n.trim(),t(i===0?null:new Error("Getting ACL identity did not succeed (PS returned code "+i+")"),e.ACL_IDENTITY)})},e.prototype._getACLIdentitySync=function(){if(e.ACL_IDENTITY)return e.ACL_IDENTITY;if(gi.spawnSync){var t=gi.spawnSync(e.POWERSHELL_PATH,["-Command","[System.Security.Principal.WindowsIdentity]::GetCurrent().Name"],{windowsHide:!0,stdio:["ignore","pipe","pipe"]});if(t.error)throw t.error;if(t.status!==0)throw new Error("Getting ACL identity did not succeed (PS returned code "+t.status+")");return e.ACL_IDENTITY=t.stdout&&t.stdout.toString().trim(),e.ACL_IDENTITY}else throw new Error("Could not synchronously get ACL identity under current version of Node.js")},e.prototype._getACLArguments=function(t,r){return[t,"/grant","*S-1-5-32-544:(OI)(CI)F","/grant",r+":(OI)(CI)F","/inheritance:r"]},e.prototype._applyACLRules=function(t,r){var n=this;if(!e.USE_ICACLS)return r(null);if(e.ACLED_DIRECTORIES[t]===void 0)e.ACLED_DIRECTORIES[t]=!1,this._getACLIdentity(function(i,a){if(i)return e.ACLED_DIRECTORIES[t]=!1,r(i);n._runICACLS(n._getACLArguments(t,a),function(s){return e.ACLED_DIRECTORIES[t]=!s,r(s)})});else return r(e.ACLED_DIRECTORIES[t]?null:new Error("Setting ACL restrictions did not succeed (cached result)"))},e.prototype._applyACLRulesSync=function(t){if(e.USE_ICACLS){if(e.ACLED_DIRECTORIES[t]===void 0){this._runICACLSSync(this._getACLArguments(t,this._getACLIdentitySync())),e.ACLED_DIRECTORIES[t]=!0;return}else if(!e.ACLED_DIRECTORIES[t])throw new Error("Setting ACL restrictions did not succeed (cached result)")}},e.prototype._confirmDirExists=function(t,r){var n=this;ge.lstat(t,function(i,a){i&&i.code==="ENOENT"?ge.mkdir(t,function(s){s&&s.code!=="EEXIST"?r(s):n._applyACLRules(t,r)}):!i&&a.isDirectory()?n._applyACLRules(t,r):r(i||new Error("Path existed but was not a directory"))})},e.prototype._getShallowDirectorySize=function(t,r){ge.readdir(t,function(n,i){if(n)return r(n,-1);var a=null,s=0,o=0;if(i.length===0){r(null,0);return}for(var u=0;u<i.length;u++)ge.stat(Bt.join(t,i[u]),function(c,f){o++,c?a=c:f.isFile()&&(s+=f.size),o===i.length&&(a?r(a,-1):r(a,s))})})},e.prototype._getShallowDirectorySizeSync=function(t){for(var r=ge.readdirSync(t),n=0,i=0;i<r.length;i++)n+=ge.statSync(Bt.join(t,r[i])).size;return n},e.prototype._storeToDisk=function(t){var r=this;Ee.info(e.TAG,"Checking existence of data storage directory: "+this._tempDir),this._confirmDirExists(this._tempDir,function(n){if(n){Ee.warn(e.TAG,"Error while checking/creating directory: "+(n&&n.message)),r._onErrorHelper(n);return}r._getShallowDirectorySize(r._tempDir,function(i,a){if(i||a<0){Ee.warn(e.TAG,"Error while checking directory size: "+(i&&i.message)),r._onErrorHelper(i);return}else if(a>r._maxBytesOnDisk){Ee.warn(e.TAG,"Not saving data due to max size limit being met. Directory size in bytes is: "+a);return}var s=new Date().getTime()+".ai.json",o=Bt.join(r._tempDir,s);Ee.info(e.TAG,"saving data to disk at: "+o),ge.writeFile(o,r._stringify(t),{mode:384},function(u){return r._onErrorHelper(u)})})})},e.prototype._storeToDiskSync=function(t){try{Ee.info(e.TAG,"Checking existence of data storage directory: "+this._tempDir),ge.existsSync(this._tempDir)||ge.mkdirSync(this._tempDir),this._applyACLRulesSync(this._tempDir);var r=this._getShallowDirectorySizeSync(this._tempDir);if(r>this._maxBytesOnDisk){Ee.info(e.TAG,"Not saving data due to max size limit being met. Directory size in bytes is: "+r);return}var n=new Date().getTime()+".ai.json",i=Bt.join(this._tempDir,n);Ee.info(e.TAG,"saving data before crash to disk at: "+i),ge.writeFileSync(i,t,{mode:384})}catch(a){Ee.warn(e.TAG,"Error while saving data to disk: "+(a&&a.message)),this._onErrorHelper(a)}},e.prototype._sendFirstFileOnDisk=function(){var t=this;ge.exists(this._tempDir,function(r){r&&ge.readdir(t._tempDir,function(n,i){if(n)t._onErrorHelper(n);else if(i=i.filter(function(o){return Bt.basename(o).indexOf(".ai.json")>-1}),i.length>0){var a=i[0],s=Bt.join(t._tempDir,a);ge.readFile(s,function(o,u){o?t._onErrorHelper(o):ge.unlink(s,function(c){if(c)t._onErrorHelper(c);else try{var f=JSON.parse(u.toString());t.send(f)}catch(p){Ee.warn("Failed to read persisted file",p)}})})}})})},e.prototype._onErrorHelper=function(t){typeof this._onError=="function"&&this._onError(t)},e.prototype._stringify=function(t){try{return JSON.stringify(t)}catch(r){Ee.warn("Failed to serialize payload",r,t)}},e.prototype._fileCleanupTask=function(){var t=this;ge.exists(this._tempDir,function(r){r&&ge.readdir(t._tempDir,function(n,i){n?t._onErrorHelper(n):(i=i.filter(function(a){return Bt.basename(a).indexOf(".ai.json")>-1}),i.length>0&&i.forEach(function(a){var s=new Date(parseInt(a.split(".ai.json")[0])),o=new Date(+new Date-e.FILE_RETEMPTION_PERIOD)>s;if(o){var u=Bt.join(t._tempDir,a);ge.unlink(u,function(c){c&&t._onErrorHelper(c)})}}))})})},e.TAG="Sender",e.ICACLS_PATH=process.env.systemdrive+"/windows/system32/icacls.exe",e.POWERSHELL_PATH=process.env.systemdrive+"/windows/system32/windowspowershell/v1.0/powershell.exe",e.ACLED_DIRECTORIES={},e.ACL_IDENTITY=null,e.WAIT_BETWEEN_RESEND=60*1e3,e.MAX_BYTES_ON_DISK=50*1024*1024,e.MAX_CONNECTION_FAILURES_BEFORE_WARN=5,e.CLEANUP_TIMEOUT=60*60*1e3,e.FILE_RETEMPTION_PERIOD=7*24*60*60*1e3,e.TEMPDIR_PREFIX="appInsights-node",e.OS_PROVIDES_FILE_PROTECTION=!1,e.USE_ICACLS=AT.type()==="Windows_NT",e}();ST.exports=gx});var OT=l((dj,bT)=>{"use strict";var S=De(),tt=Ue(),Ex=Er(),mx=function(){function e(){}return e.createEnvelope=function(t,r,n,i,a){var s=null;switch(r){case S.TelemetryType.Trace:s=e.createTraceData(t);break;case S.TelemetryType.Dependency:s=e.createDependencyData(t);break;case S.TelemetryType.Event:s=e.createEventData(t);break;case S.TelemetryType.Exception:s=e.createExceptionData(t);break;case S.TelemetryType.Request:s=e.createRequestData(t);break;case S.TelemetryType.Metric:s=e.createMetricData(t);break;case S.TelemetryType.Availability:s=e.createAvailabilityData(t);break;case S.TelemetryType.PageView:s=e.createPageViewData(t);break}if(n&&S.domainSupportsProperties(s.baseData)){if(s&&s.baseData)if(!s.baseData.properties)s.baseData.properties=n;else for(var o in n)s.baseData.properties[o]||(s.baseData.properties[o]=n[o]);s.baseData.properties=tt.validateStringMap(s.baseData.properties)}var u=a&&a.instrumentationKey||"",c=new S.Envelope;return c.data=s,c.iKey=u,c.name="Microsoft.ApplicationInsights."+u.replace(/-/g,"")+"."+s.baseType.substr(0,s.baseType.length-4),c.tags=this.getTags(i,t.tagOverrides),c.time=new Date().toISOString(),c.ver=1,c.sampleRate=a?a.samplingPercentage:100,r===S.TelemetryType.Metric&&(c.sampleRate=100),c},e.createTraceData=function(t){var r=new S.MessageData;r.message=t.message,r.properties=t.properties,isNaN(t.severity)?r.severityLevel=S.SeverityLevel.Information:r.severityLevel=t.severity;var n=new S.Data;return n.baseType=S.telemetryTypeToBaseType(S.TelemetryType.Trace),n.baseData=r,n},e.createDependencyData=function(t){var r=new S.RemoteDependencyData;typeof t.name=="string"&&(r.name=t.name.length>1024?t.name.slice(0,1021)+"...":t.name),r.data=t.data,r.target=t.target,r.duration=tt.msToTimeSpan(t.duration),r.success=t.success,r.type=t.dependencyTypeName,r.properties=t.properties,r.resultCode=t.resultCode?t.resultCode+"":"",t.id?r.id=t.id:r.id=tt.w3cTraceId();var n=new S.Data;return n.baseType=S.telemetryTypeToBaseType(S.TelemetryType.Dependency),n.baseData=r,n},e.createEventData=function(t){var r=new S.EventData;r.name=t.name,r.properties=t.properties,r.measurements=t.measurements;var n=new S.Data;return n.baseType=S.telemetryTypeToBaseType(S.TelemetryType.Event),n.baseData=r,n},e.createExceptionData=function(t){var r=new S.ExceptionData;r.properties=t.properties,isNaN(t.severity)?r.severityLevel=S.SeverityLevel.Error:r.severityLevel=t.severity,r.measurements=t.measurements,r.exceptions=[];var n=t.exception.stack,i=new S.ExceptionDetails;i.message=t.exception.message,i.typeName=t.exception.name,i.parsedStack=this.parseStack(n),i.hasFullStack=tt.isArray(i.parsedStack)&&i.parsedStack.length>0,r.exceptions.push(i);var a=new S.Data;return a.baseType=S.telemetryTypeToBaseType(S.TelemetryType.Exception),a.baseData=r,a},e.createRequestData=function(t){var r=new S.RequestData;t.id?r.id=t.id:r.id=tt.w3cTraceId(),r.name=t.name,r.url=t.url,r.source=t.source,r.duration=tt.msToTimeSpan(t.duration),r.responseCode=t.resultCode?t.resultCode+"":"",r.success=t.success,r.properties=t.properties;var n=new S.Data;return n.baseType=S.telemetryTypeToBaseType(S.TelemetryType.Request),n.baseData=r,n},e.createMetricData=function(t){var r=new S.MetricData;r.metrics=[];var n=new S.DataPoint;n.count=isNaN(t.count)?1:t.count,n.kind=S.DataPointType.Aggregation,n.max=isNaN(t.max)?t.value:t.max,n.min=isNaN(t.min)?t.value:t.min,n.name=t.name,n.stdDev=isNaN(t.stdDev)?0:t.stdDev,n.value=t.value,r.metrics.push(n),r.properties=t.properties;var i=new S.Data;return i.baseType=S.telemetryTypeToBaseType(S.TelemetryType.Metric),i.baseData=r,i},e.createAvailabilityData=function(t){var r=new S.AvailabilityData;t.id?r.id=t.id:r.id=tt.w3cTraceId(),r.name=t.name,r.duration=tt.msToTimeSpan(t.duration),r.success=t.success,r.runLocation=t.runLocation,r.message=t.message,r.measurements=t.measurements,r.properties=t.properties;var n=new S.Data;return n.baseType=S.telemetryTypeToBaseType(S.TelemetryType.Availability),n.baseData=r,n},e.createPageViewData=function(t){var r=new S.PageViewData;r.name=t.name,r.duration=tt.msToTimeSpan(t.duration),r.url=t.url,r.measurements=t.measurements,r.properties=t.properties;var n=new S.Data;return n.baseType=S.telemetryTypeToBaseType(S.TelemetryType.PageView),n.baseData=r,n},e.getTags=function(t,r){var n=Ex.CorrelationContextManager.getCurrentContext(),i={};if(t&&t.tags)for(var a in t.tags)i[a]=t.tags[a];if(r)for(var a in r)i[a]=r[a];return n&&(i[t.keys.operationId]=i[t.keys.operationId]||n.operation.id,i[t.keys.operationName]=i[t.keys.operationName]||n.operation.name,i[t.keys.operationParentId]=i[t.keys.operationParentId]||n.operation.parentId),i},e.parseStack=function(t){var r=void 0;if(typeof t=="string"){var n=t.split(`
`);r=[];for(var i=0,a=0,s=0;s<=n.length;s++){var o=n[s];if(CT.regex.test(o)){var u=new CT(n[s],i++);a+=u.sizeInBytes,r.push(u)}}var c=32*1024;if(a>c)for(var f=0,p=r.length-1,d=0,h=f,E=p;f<p;){var A=r[f].sizeInBytes,j=r[p].sizeInBytes;if(d+=A+j,d>c){var se=E-h+1;r.splice(h,se);break}h=f,E=p,f++,p--}}return r},e}(),CT=function(){function e(t,r){this.sizeInBytes=0,this.level=r,this.method="<no_method>",this.assembly=tt.trim(t);var n=t.match(e.regex);n&&n.length>=5&&(this.method=tt.trim(n[2])||this.method,this.fileName=tt.trim(n[4])||"<no_filename>",this.line=parseInt(n[5])||0),this.sizeInBytes+=this.method.length,this.sizeInBytes+=this.fileName.length,this.sizeInBytes+=this.assembly.length,this.sizeInBytes+=e.baseSize,this.sizeInBytes+=this.level.toString().length,this.sizeInBytes+=this.line.toString().length}return e.regex=/^(\s+at)?(.*?)(\@|\s\(|\s)([^\(\n]+):(\d+):(\d+)(\)?)$/,e.baseSize=58,e}();bT.exports=mx});var DT=l((hj,NT)=>{"use strict";var yx=__webpack_require__(716),Tx=mp(),Ax=Ea(),Ft=De(),Sx=hT(),fu=TT(),PT=Er(),Ix=IT(),Ap=Ue(),RT=_e(),Cx=OT(),bx=function(){function e(t){this._telemetryProcessors=[],this._enableAzureProperties=!1;var r=new Tx(t);this.config=r,this.context=new Ax,this.commonProperties={};var n=new Ix(this.config);this.channel=new Sx(function(){return r.disableAppInsights},function(){return r.maxBatchSize},function(){return r.maxBatchIntervalMs},n)}return e.prototype.trackAvailability=function(t){this.track(t,Ft.TelemetryType.Availability)},e.prototype.trackPageView=function(t){this.track(t,Ft.TelemetryType.PageView)},e.prototype.trackTrace=function(t){this.track(t,Ft.TelemetryType.Trace)},e.prototype.trackMetric=function(t){this.track(t,Ft.TelemetryType.Metric)},e.prototype.trackException=function(t){t&&t.exception&&!Ap.isError(t.exception)&&(t.exception=new Error(t.exception.toString())),this.track(t,Ft.TelemetryType.Exception)},e.prototype.trackEvent=function(t){this.track(t,Ft.TelemetryType.Event)},e.prototype.trackRequest=function(t){this.track(t,Ft.TelemetryType.Request)},e.prototype.trackDependency=function(t){t&&!t.target&&t.data&&(t.target=yx.parse(t.data).host),this.track(t,Ft.TelemetryType.Dependency)},e.prototype.flush=function(t){this.channel.triggerSend(t?!!t.isAppCrashing:!1,t?t.callback:void 0)},e.prototype.track=function(t,r){if(t&&Ft.telemetryTypeToBaseType(r)){var n=Cx.createEnvelope(t,r,this.commonProperties,this.context,this.config);t.time&&(n.time=t.time.toISOString()),this._enableAzureProperties&&fu.azureRoleEnvironmentTelemetryProcessor(n,this.context);var i=this.runTelemetryProcessors(n,t.contextObjects);i=i&&fu.samplingTelemetryProcessor(n,{correlationContext:PT.CorrelationContextManager.getCurrentContext()}),fu.preAggregatedMetricsTelemetryProcessor(n,this.context),i&&(fu.performanceMetricsTelemetryProcessor(n,this.quickPulseClient),this.channel.send(n))}else RT.warn("track() requires telemetry object and telemetryType to be specified.")},e.prototype.setAutoPopulateAzureProperties=function(t){this._enableAzureProperties=t},e.prototype.addTelemetryProcessor=function(t){this._telemetryProcessors.push(t)},e.prototype.clearTelemetryProcessors=function(){this._telemetryProcessors=[]},e.prototype.runTelemetryProcessors=function(t,r){var n=!0,i=this._telemetryProcessors.length;if(i===0)return n;r=r||{},r.correlationContext=PT.CorrelationContextManager.getCurrentContext();for(var a=0;a<i;++a)try{var s=this._telemetryProcessors[a];if(s&&s.apply(null,[t,r])===!1){n=!1;break}}catch(o){n=!0,RT.warn("One of telemetry processors failed, telemetry item will be sent.",o,t)}return n&&(t&&t.tags&&(t.tags=Ap.validateStringMap(t.tags)),t&&t.data&&t.data.baseData&&t.data.baseData.properties&&(t.data.baseData.properties=Ap.validateStringMap(t.data.baseData.properties))),n},e}();NT.exports=bx});var MT=l((Sp,xT)=>{"use strict";var Ox=Sp&&Sp.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Px=DT(),wT=hp(),Rx=di(),pu=_e(),Nx=function(e){Ox(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.trackNodeHttpRequestSync=function(r){r&&r.request&&r.response&&r.duration?wT.trackRequestSync(this,r):pu.warn("trackNodeHttpRequestSync requires NodeHttpRequestTelemetry object with request, response and duration specified.")},t.prototype.trackNodeHttpRequest=function(r){(r.duration||r.error)&&pu.warn("trackNodeHttpRequest will ignore supplied duration and error parameters. These values are collected from the request and response objects."),r&&r.request&&r.response?wT.trackRequest(this,r):pu.warn("trackNodeHttpRequest requires NodeHttpRequestTelemetry object with request and response specified.")},t.prototype.trackNodeHttpDependency=function(r){r&&r.request?Rx.trackRequest(this,r):pu.warn("trackNodeHttpDependency requires NodeHttpDependencyTelemetry object with request specified.")},t}(Px);xT.exports=Nx});var qT=l(LT=>{"use strict";Object.defineProperty(LT,"__esModule",{value:!0})});var nA=l(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.dispose=m.Configuration=m.wrapWithCorrelationContext=m.startOperation=m.getCorrelationContext=m.start=m.setup=m.liveMetricsClient=m.defaultClient=m.DistributedTracingModes=void 0;var Ip=Er(),Dx=oy(),wx=cy(),kT=Jo(),xx=ap(),Mx=ky(),Lx=di(),qx=hp(),HT=Fr(),Ca=_e(),jx=iT(),UT=pT();m.TelemetryClient=MT();m.Contracts=De();m.azureFunctionsTypes=qT();var BT;(function(e){e[e.AI=0]="AI",e[e.AI_AND_W3C=1]="AI_AND_W3C"})(BT=m.DistributedTracingModes||(m.DistributedTracingModes={}));var FT=!0,GT=!1,VT=!0,$T=!0,zT=!0,XT=!1,KT=!0,YT=!0,QT=!0,Cp=!0,WT,du=!1,ZT=!0,JT,eA=void 0,tA=void 0,ba,Oa,Pa,Ra,Na,Ei,en,Da,Tt=!1,jT;function kx(e){return m.defaultClient?Ca.info("The default client is already setup"):(m.defaultClient=new m.TelemetryClient(e),ba=new Dx(m.defaultClient),Oa=new wx(m.defaultClient),Pa=new kT(m.defaultClient),Ra=new xx(m.defaultClient),Na=new Mx(m.defaultClient),en=new qx(m.defaultClient),Da=new Lx(m.defaultClient),Ei||(Ei=new UT.AutoCollectNativePerformance(m.defaultClient))),m.defaultClient&&m.defaultClient.channel&&m.defaultClient.channel.setUseDiskRetryCaching(QT,eA,tA),bp}m.setup=kx;function rA(){return m.defaultClient?(Tt=!0,ba.enable(FT,GT),Oa.enable(VT),Pa.enable($T),Ra.enable(zT),Na.enable(XT,m.defaultClient.config),Ei.enable(ZT,JT),en.useAutoCorrelation(Cp,WT),en.enable(KT),Da.enable(YT),m.liveMetricsClient&&du&&m.liveMetricsClient.enable(du)):Ca.warn("Start cannot be called before setup"),bp}m.start=rA;function Hx(){return Cp?Ip.CorrelationContextManager.getCurrentContext():null}m.getCorrelationContext=Hx;function Ux(e,t){return Ip.CorrelationContextManager.startOperation(e,t)}m.startOperation=Ux;function Bx(e,t){return Ip.CorrelationContextManager.wrapCallback(e,t)}m.wrapWithCorrelationContext=Bx;var bp=function(){function e(){}return e.setDistributedTracingMode=function(t){return HT.w3cEnabled=t===BT.AI_AND_W3C,e},e.setAutoCollectConsole=function(t,r){return r===void 0&&(r=!1),FT=t,GT=r,Tt&&ba.enable(t,r),e},e.setAutoCollectExceptions=function(t){return VT=t,Tt&&Oa.enable(t),e},e.setAutoCollectPerformance=function(t,r){r===void 0&&(r=!0),$T=t;var n=UT.AutoCollectNativePerformance.parseEnabled(r);return ZT=n.isEnabled,JT=n.disabledMetrics,Tt&&(Pa.enable(t),Ei.enable(n.isEnabled,n.disabledMetrics)),e},e.setAutoCollectPreAggregatedMetrics=function(t){return zT=t,Tt&&Ra.enable(t),e},e.setAutoCollectHeartbeat=function(t){return XT=t,Tt&&Na.enable(t,m.defaultClient.config),e},e.setAutoCollectRequests=function(t){return KT=t,Tt&&en.enable(t),e},e.setAutoCollectDependencies=function(t){return YT=t,Tt&&Da.enable(t),e},e.setAutoDependencyCorrelation=function(t,r){return Cp=t,WT=r,Tt&&en.useAutoCorrelation(t,r),e},e.setUseDiskRetryCaching=function(t,r,n){return QT=t,eA=r,tA=n,m.defaultClient&&m.defaultClient.channel&&m.defaultClient.channel.setUseDiskRetryCaching(t,r,n),e},e.setInternalLogging=function(t,r){return t===void 0&&(t=!1),r===void 0&&(r=!0),Ca.enableDebug=t,Ca.disableWarnings=!r,e},e.setSendLiveMetrics=function(t){return t===void 0&&(t=!1),m.defaultClient?(!m.liveMetricsClient&&t?(m.liveMetricsClient=new jx(m.defaultClient.config,null),jT=new kT(m.liveMetricsClient,1e3,!0),m.liveMetricsClient.addCollector(jT),m.defaultClient.quickPulseClient=m.liveMetricsClient):m.liveMetricsClient&&m.liveMetricsClient.enable(t),du=t,e):(Ca.warn("Live metrics client cannot be setup without the default client"),e)},e.start=rA,e}();m.Configuration=bp;function Fx(){HT.w3cEnabled=!0,m.defaultClient=null,Tt=!1,ba&&ba.dispose(),Oa&&Oa.dispose(),Pa&&Pa.dispose(),Ra&&Ra.dispose(),Na&&Na.dispose(),Ei&&Ei.dispose(),en&&en.dispose(),Da&&Da.dispose(),m.liveMetricsClient&&(m.liveMetricsClient.enable(!1),du=!1,m.liveMetricsClient=void 0)}m.dispose=Fx});var zx={};hA(zx,{default:()=>hu});module.exports=_A(zx);var mi=nn(__webpack_require__(558)),Gt=nn(__webpack_require__(304)),iA=nn(__webpack_require__(256));var Se=class{constructor(t){this.vscodeAPI=t}getTelemetryLevel(){let t="telemetry",r="enableTelemetry";try{let n=this.vscodeAPI.env.telemetryConfiguration;return n.isUsageEnabled&&n.isErrorsEnabled&&n.isCrashEnabled?"on":n.isErrorsEnabled&&n.isCrashEnabled?"error":"off"}catch{return this.vscodeAPI.env.isTelemetryEnabled!==void 0?this.vscodeAPI.env.isTelemetryEnabled?"on":"off":this.vscodeAPI.workspace.getConfiguration(t).get(r)?"on":"off"}}static applyReplacements(t,r){for(let n of Object.keys(t))for(let i of r)i.lookup.test(n)&&(i.replacementString!==void 0?t[n]=i.replacementString:delete t[n])}static shouldUseOneDataSystemSDK(t){return t.length===74&&t[32]==="-"&&t[41]==="-"&&t[46]==="-"&&t[51]==="-"&&t[56]==="-"&&t[69]==="-"}static getInstance(t){return Se._instance||(Se._instance=new Se(t)),Se._instance}};var wa=class{constructor(t,r,n,i,a,s){this.extensionId=t;this.extensionVersion=r;this.telemetryAppender=n;this.osShim=i;this.vscodeAPI=a;this.firstParty=!1;this.userOptIn=!1;this.errorOptIn=!1;this.disposables=[];this.firstParty=!!s,this.updateUserOptStatus(),a.env.onDidChangeTelemetryEnabled!==void 0?(this.disposables.push(a.env.onDidChangeTelemetryEnabled(()=>this.updateUserOptStatus())),this.disposables.push(a.workspace.onDidChangeConfiguration(()=>this.updateUserOptStatus()))):this.disposables.push(a.workspace.onDidChangeConfiguration(()=>this.updateUserOptStatus()))}updateUserOptStatus(){let t=Se.getInstance(this.vscodeAPI).getTelemetryLevel();this.userOptIn=t==="on",this.errorOptIn=t==="error"||this.userOptIn,(this.userOptIn||this.errorOptIn)&&this.telemetryAppender.instantiateAppender()}cleanRemoteName(t){if(!t)return"none";let r="other";return["ssh-remote","dev-container","attached-container","wsl","codespaces"].forEach(n=>{t.indexOf(`${n}`)===0&&(r=n)}),r}get extension(){return this._extension===void 0&&(this._extension=this.vscodeAPI.extensions.getExtension(this.extensionId)),this._extension}cloneAndChange(t,r){if(t===null||typeof t!="object"||typeof r!="function")return t;let n={};for(let i in t)n[i]=r(i,t[i]);return n}shouldSendErrorTelemetry(){return this.errorOptIn===!1?!1:this.firstParty?!(this.vscodeAPI.env.remoteName&&this.cleanRemoteName(this.vscodeAPI.env.remoteName)==="other"):!0}getCommonProperties(){let t={};if(t["common.os"]=this.osShim.platform,t["common.nodeArch"]=this.osShim.architecture,t["common.platformversion"]=(this.osShim.release||"").replace(/^(\d+)(\.\d+)?(\.\d+)?(.*)/,"$1$2$3"),t["common.extname"]=this.extensionId,t["common.extversion"]=this.extensionVersion,this.vscodeAPI&&this.vscodeAPI.env){switch(t["common.vscodemachineid"]=this.vscodeAPI.env.machineId,t["common.vscodesessionid"]=this.vscodeAPI.env.sessionId,t["common.vscodeversion"]=this.vscodeAPI.version,t["common.isnewappinstall"]=this.vscodeAPI.env.isNewAppInstall?this.vscodeAPI.env.isNewAppInstall.toString():"false",t["common.product"]=this.vscodeAPI.env.appHost,this.vscodeAPI.env.uiKind){case this.vscodeAPI.UIKind.Web:t["common.uikind"]="web";break;case this.vscodeAPI.UIKind.Desktop:t["common.uikind"]="desktop";break;default:t["common.uikind"]="unknown"}t["common.remotename"]=this.cleanRemoteName(this.vscodeAPI.env.remoteName)}return t}anonymizeFilePaths(t,r){let n;if(t==null)return"";let i=[];this.vscodeAPI.env.appRoot!==""&&i.push(new RegExp(this.vscodeAPI.env.appRoot.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi")),this.extension&&i.push(new RegExp(this.extension.extensionPath.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi"));let a=t;if(r){let s=[];for(let f of i)for(;(n=f.exec(t))&&n;)s.push([n.index,f.lastIndex]);let o=/^[\\/]?(node_modules|node_modules\.asar)[\\/]/,u=/(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-._]+(\\\\|\\|\/))+[\w-._]*/g,c=0;for(a="";(n=u.exec(t))&&n;)n[0]&&!o.test(n[0])&&s.every(([f,p])=>n.index<f||n.index>=p)&&(a+=t.substring(c,n.index)+"<REDACTED: user-file-path>",c=u.lastIndex);c<t.length&&(a+=t.substr(c))}for(let s of i)a=a.replace(s,"");return a}removePropertiesWithPossibleUserInfo(t){if(typeof t!="object")return;let r={};for(let n of Object.keys(t)){let i=t[n];if(!i)continue;let a=/@[a-zA-Z0-9-.]+/,s=/(key|token|sig|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/,o=/xox[pbaors]-[a-zA-Z0-9]+-[a-zA-Z0-9-]+?/;s.test(i.toLowerCase())?r[n]="<REDACTED: secret>":a.test(i)?r[n]="<REDACTED: email>":o.test(i)?r[n]="<REDACTED: token>":r[n]=i}return r}get telemetryLevel(){switch(Se.getInstance(this.vscodeAPI).getTelemetryLevel()){case"on":return"all";case"error":return"error";case"off":return"off"}}internalSendTelemetryEvent(t,r,n,i,a){if((this.userOptIn||a)&&t!==""){if(r=St(St({},r),this.getCommonProperties()),i){let s=this.cloneAndChange(r,(o,u)=>this.anonymizeFilePaths(u,this.firstParty));r=this.removePropertiesWithPossibleUserInfo(s)}r=r??{},n=n??{},t=`${this.extensionId}/${t}`,this.telemetryAppender.logEvent(t,{properties:r,measurements:n})}}sendTelemetryEvent(t,r,n){this.internalSendTelemetryEvent(t,r,n,!0,!1)}sendRawTelemetryEvent(t,r,n){this.internalSendTelemetryEvent(t,r,n,!1,!1)}sendDangerousTelemetryEvent(t,r,n,i=!0){this.telemetryAppender.instantiateAppender(),this.internalSendTelemetryEvent(t,r,n,i,!0)}internalSendTelemetryErrorEvent(t,r,n,i,a){if((this.shouldSendErrorTelemetry()||a)&&t!==""){if(r=St(St({},r),this.getCommonProperties()),i){let s=this.cloneAndChange(r,(o,u)=>this.anonymizeFilePaths(u,this.firstParty));r=this.removePropertiesWithPossibleUserInfo(s)}r=r??{},n=n??{},t=`${this.extensionId}/${t}`,this.telemetryAppender.logEvent(t,{properties:r,measurements:n})}}sendTelemetryErrorEvent(t,r,n){this.internalSendTelemetryErrorEvent(t,r,n,!0,!1)}sendDangerousTelemetryErrorEvent(t,r,n,i=!0){this.telemetryAppender.instantiateAppender(),this.internalSendTelemetryErrorEvent(t,r,n,i,!0)}internalSendTelemetryException(t,r,n,i,a){if((this.shouldSendErrorTelemetry()||a)&&t){if(r=St(St({},r),this.getCommonProperties()),i){let s=this.cloneAndChange(r,(o,u)=>this.anonymizeFilePaths(u,this.firstParty));t.stack&&(t.stack=this.anonymizeFilePaths(t.stack,this.firstParty)),r=this.removePropertiesWithPossibleUserInfo(s)}r=r??{},n=n??{},this.telemetryAppender.logException(t,{properties:r,measurements:n})}}sendTelemetryException(t,r,n){this.internalSendTelemetryException(t,r,n,!0,!1)}sendDangerousTelemetryException(t,r,n,i=!0){this.telemetryAppender.instantiateAppender(),this.internalSendTelemetryException(t,r,n,i,!0)}dispose(){return this.telemetryAppender.flush(),Promise.all(this.disposables.map(t=>t.dispose()))}};var xa=class{constructor(t,r){this._instantiationStatus=0;this._eventQueue=[];this._exceptionQueue=[];this._clientFactory=r,this._key=t}logEvent(t,r){if(!this._telemetryClient){this._instantiationStatus!==2&&this._eventQueue.push({eventName:t,data:r});return}this._telemetryClient.logEvent(t,r)}logException(t,r){if(!this._telemetryClient){this._instantiationStatus!==2&&this._exceptionQueue.push({exception:t,data:r});return}this._telemetryClient.logException(t,r)}async flush(){this._telemetryClient&&(await this._telemetryClient.flush(),this._telemetryClient=void 0)}_flushQueues(){this._eventQueue.forEach(({eventName:t,data:r})=>this.logEvent(t,r)),this._eventQueue=[],this._exceptionQueue.forEach(({exception:t,data:r})=>this.logException(t,r)),this._exceptionQueue=[]}instantiateAppender(){this._instantiationStatus===0&&(this._instantiationStatus=1,this._clientFactory(this._key).then(t=>{this._telemetryClient=t,this._instantiationStatus=2,this._flushQueues()}).catch(t=>{console.error(t),this._instantiationStatus=2}))}};var vA=async(e,t,r)=>{let n=await __webpack_require__.e(/* import() */ 896).then(__webpack_require__.t.bind(__webpack_require__, 896, 23)),i=await Promise.all(/* import() */[__webpack_require__.e(896), __webpack_require__.e(452)]).then(__webpack_require__.t.bind(__webpack_require__, 452, 23)),a=new n.AppInsightsCore,s=new i.PostChannel,o={instrumentationKey:e,endpointUrl:"https://mobile.events.data.microsoft.com/OneCollector/1.0",loggingLevelTelemetry:0,loggingLevelConsole:0,disableCookiesUsage:!0,disableDbgExt:!0,disableInstrumentationKeyValidation:!0,channels:[[s]]};if(r){o.extensionConfig={};let f={alwaysUseXhrOverride:!0,httpXHROverride:r};o.extensionConfig[s.identifier]=f}let c=t.workspace.getConfiguration("telemetry").get("internalTesting");return a.initialize(o,[]),a.addTelemetryInitializer(f=>{!c||(f.ext=f.ext??{},f.ext.utc=f.ext.utc??{},f.ext.utc.flags=8462029)}),a},wp=async(e,t,r)=>{let n=await vA(e,t,r);return{logEvent:(a,s)=>{try{n==null||n.track({name:a,baseData:{name:a,properties:s==null?void 0:s.properties,measurements:s==null?void 0:s.measurements}})}catch(o){throw new Error(`Failed to log event to app insights!
`+o.message)}},logException:(a,s)=>{throw new Error("1DS SDK does not support logging exceptions, please use logEvent for exception tracking")},flush:async()=>{try{n==null||n.unload()}catch(a){throw new Error(`Failed to flush app insights!
`+a.message)}}}};var Gx=async(e,t)=>{let r;try{process.env.APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL="1";let i=await Promise.resolve().then(()=>nn(nA()));i.defaultClient?(r=new i.TelemetryClient(e),r.channel.setUseDiskRetryCaching(!0)):(i.setup(e).setAutoCollectRequests(!1).setAutoCollectPerformance(!1).setAutoCollectExceptions(!1).setAutoCollectDependencies(!1).setAutoDependencyCorrelation(!1).setAutoCollectConsole(!1).setAutoCollectHeartbeat(!1).setUseDiskRetryCaching(!0).start(),r=i.defaultClient),Gt&&Gt.env&&(r.context.tags[r.context.keys.userId]=Gt.env.machineId,r.context.tags[r.context.keys.sessionId]=Gt.env.sessionId,r.context.tags[r.context.keys.cloudRole]=Gt.env.appName,r.context.tags[r.context.keys.cloudRoleInstance]=Gt.env.appName),e&&e.indexOf("AIF-")===0&&(r.config.endpointUrl="https://mobile.events.data.microsoft.com/collect/v1")}catch(i){return Promise.reject(`Failed to initialize app insights!
`+i.message)}return t!=null&&t.length&&Vx(r,t),{logEvent:(i,a)=>{try{r==null||r.trackEvent({name:i,properties:a==null?void 0:a.properties,measurements:a==null?void 0:a.measurements})}catch(s){throw new Error(`Failed to log event to app insights!
`+s.message)}},logException:(i,a)=>{try{r==null||r.trackException({exception:i,properties:a==null?void 0:a.properties,measurements:a==null?void 0:a.measurements})}catch(s){throw new Error(`Failed to log exception to app insights!
`+s.message)}},flush:async()=>{try{r==null||r.flush()}catch(i){throw new Error(`Failed to flush app insights!
`+i.message)}}}};function Vx(e,t){e.addTelemetryProcessor(r=>(Array.isArray(r.tags)?r.tags.forEach(n=>Se.applyReplacements(n,t)):r.tags&&Se.applyReplacements(r.tags,t),r.data.baseData&&Se.applyReplacements(r.data.baseData,t),!0))}function $x(){return{sendPOST:(t,r)=>{let n={method:"POST",headers:Np(St({},t.headers),{"Content-Type":"application/json","Content-Length":Buffer.byteLength(t.data)})};try{let i=iA.request(t.urlString,n,a=>{a.on("data",function(s){r(a.statusCode??200,a.headers,s.toString())}),a.on("error",function(){r(0,{})})});i.write(t.data),i.end()}catch{r(0,{})}}}}var hu=class extends wa{constructor(t,r,n,i,a){let s=u=>Gx(u,a);Se.shouldUseOneDataSystemSDK(n)&&(s=u=>wp(u,Gt,$x()));let o=new xa(n,s);n&&(n.indexOf("AIF-")===0||Se.shouldUseOneDataSystemSDK(n))&&(i=!0),super(t,r,o,{release:mi.release(),platform:mi.platform(),architecture:mi.arch()},Gt,i)}};0&&(0);


/***/ }),

/***/ 184:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setAdditionalCompilerNames = exports.getAdditionalCompilerNames = exports.readCompileCommandsPath = exports.setCompileCommandsPath = exports.getCompileCommandsPath = exports.readConfigurationCachePath = exports.setConfigurationCachePath = exports.getConfigurationCachePath = exports.readAlwaysPostConfigure = exports.readAlwaysPreConfigure = exports.setAlwaysPostConfigure = exports.getAlwaysPostConfigure = exports.setAlwaysPreConfigure = exports.getAlwaysPreConfigure = exports.readPostConfigureArgs = exports.readPostConfigureScript = exports.readPreConfigureArgs = exports.readPreConfigureScript = exports.setPostConfigureArgs = exports.getPostConfigureArgs = exports.setPostConfigureScript = exports.getPostConfigureScript = exports.setPreConfigureArgs = exports.getPreConfigureArgs = exports.setPreConfigureScript = exports.getPreConfigureScript = exports.readExtensionLog = exports.setExtensionLog = exports.getExtensionLog = exports.readExtensionOutputFolder = exports.setExtensionOutputFolder = exports.getExtensionOutputFolder = exports.readLoggingLevel = exports.setLoggingLevel = exports.getLoggingLevel = exports.readBuildLog = exports.setBuildLog = exports.getBuildLog = exports.makeBaseDirectory = exports.setMakeDirectory = exports.getMakeDirectory = exports.setMakefilePath = exports.getMakefilePath = exports.setMakePath = exports.getMakePath = exports.disableAllOptionallyVisibleCommands = exports.isOptionalFeatureEnabled = exports.readCurrentMakefileConfiguration = exports.setCurrentMakefileConfiguration = exports.getCurrentMakefileConfiguration = void 0;
exports.getPhonyOnlyTargets = exports.readConfigureAfterCommand = exports.setConfigureAfterCommand = exports.getConfigureAfterCommand = exports.readConfigureOnEdit = exports.setConfigureOnEdit = exports.getConfigureOnEdit = exports.readConfigureOnOpen = exports.setConfigureOnOpen = exports.getConfigureOnOpen = exports.setCurrentTarget = exports.getCurrentTarget = exports.readMakefileConfigurations = exports.setMakefileConfigurations = exports.getMakefileConfigurations = exports.getPostConfigureArgsForConfiguration = exports.getPreConfigureArgsForConfiguration = exports.getBuildLogForConfiguration = exports.getProblemMatchersForConfiguration = exports.getCommandForConfiguration = exports.getMakefileConfiguration = exports.setConfigurationPostConfigureArgs = exports.getConfigurationPostConfigureArgs = exports.setConfigurationPreConfigureArgs = exports.getConfigurationPreConfigureArgs = exports.setConfigurationBuildLog = exports.getConfigurationBuildLog = exports.setConfigurationProblemMatchers = exports.getConfigurationProblemMatchers = exports.setConfigurationMakefile = exports.getConfigurationMakefile = exports.setConfigurationMakeArgs = exports.getConfigurationMakeArgs = exports.setConfigurationMakeCommand = exports.getConfigurationMakeCommand = exports.readDefaultLaunchConfiguration = exports.getDefaultLaunchConfiguration = exports.setCurrentLaunchConfiguration = exports.getCurrentLaunchConfiguration = exports.stringToLaunchConfiguration = exports.launchConfigurationToString = exports.setLaunchConfigurations = exports.getLaunchConfigurations = exports.readDryrunSwitches = exports.setDryrunSwitches = exports.getDryrunSwitches = exports.readExcludeCompilerNames = exports.setExcludeCompilerNames = exports.getExcludeCompilerNames = exports.readAdditionalCompilerNames = void 0;
exports.setLaunchTargets = exports.getLaunchTargets = exports.setBuildTargets = exports.getBuildTargets = exports.selectLaunchConfiguration = exports.setLaunchConfigurationByName = exports.selectTarget = exports.setTargetByName = exports.setNewConfiguration = exports.prepareConfigurationsQuickPick = exports.setConfigurationByName = exports.initFromSettings = exports.initFromState = exports.readIgnoreDirectoryCommands = exports.setIgnoreDirectoryCommands = exports.getIgnoreDirectoryCommands = exports.readClearOutputBeforeBuild = exports.setClearOutputBeforeBuild = exports.getClearOutputBeforeBuild = exports.readBuildBeforeLaunch = exports.setBuildBeforeLaunch = exports.getBuildBeforeLaunch = exports.readSaveBeforeBuildOrConfigure = exports.setSaveBeforeBuildOrConfigure = exports.getSaveBeforeBuildOrConfigure = exports.readPhonyOnlyTargets = exports.setPhonyOnlyTargets = void 0;
// Configuration support
const extension_1 = __webpack_require__(171);
const logger = __webpack_require__(900);
const make = __webpack_require__(636);
const ui = __webpack_require__(736);
const util = __webpack_require__(168);
const vscode = __webpack_require__(304);
const path = __webpack_require__(72);
const telemetry = __webpack_require__(564);
const nls = __webpack_require__(892);
nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
})((__webpack_require__(72).join)(__dirname, 'src\\configuration.ts'));
const localize = nls.loadMessageBundle((__webpack_require__(72).join)(__dirname, 'src\\configuration.ts'));
let statusBar = ui.getUI();
// Last configuration name picked from the set defined in makefile.configurations setting.
// Saved into the workspace state. Also reflected in the configuration status bar button.
// If no particular current configuration is defined in settings, set to 'Default'.
let currentMakefileConfiguration;
function getCurrentMakefileConfiguration() {
    return currentMakefileConfiguration;
}
exports.getCurrentMakefileConfiguration = getCurrentMakefileConfiguration;
async function setCurrentMakefileConfiguration(configuration) {
    currentMakefileConfiguration = configuration;
    statusBar.setConfiguration(currentMakefileConfiguration);
    await analyzeConfigureParams();
}
exports.setCurrentMakefileConfiguration = setCurrentMakefileConfiguration;
// Read the current configuration from workspace state, update status bar item
function readCurrentMakefileConfiguration() {
    let buildConfiguration = extension_1.extension.getState().buildConfiguration;
    if (!buildConfiguration) {
        logger.message("No current configuration is defined in the workspace state. Assuming 'Default'.");
        currentMakefileConfiguration = "Default";
    }
    else {
        logger.message(`Reading current configuration "${buildConfiguration}" from the workspace state.`);
        currentMakefileConfiguration = buildConfiguration;
    }
    statusBar.setConfiguration(currentMakefileConfiguration);
}
exports.readCurrentMakefileConfiguration = readCurrentMakefileConfiguration;
// To add an optional feature (one that can be enabled/disabled based
// on a property stored in settings.json):
// * define property under makefile.panel.visibility in package.json
// * initialize here the default values
// * if the feature controls the UI via enablement,
// *    make sure enablement is handled in package.json, you are done
// * if not, then add code to check Feature state wherever is needed.
class MakefilePanelVisibilityDescriptions {
    constructor() {
        this.features = [
            {
                propertyName: "debug",
                enablement: "makefile:localDebugFeature",
                default: true,
                value: false,
            },
            {
                propertyName: "run",
                enablement: "makefile:localRunFeature",
                default: true,
                value: false,
            },
        ];
    }
}
let panelVisibility = new MakefilePanelVisibilityDescriptions();
// Set all features to their defaults (enabled or disabled)
function initOptionalFeatures() {
    for (let feature of panelVisibility.features) {
        feature.value = feature.default;
    }
}
function isOptionalFeatureEnabled(propertyName) {
    for (let feature of panelVisibility.features) {
        if (feature.propertyName === propertyName) {
            return feature.value;
        }
    }
    return false;
}
exports.isOptionalFeatureEnabled = isOptionalFeatureEnabled;
// Override default settings for each feature based on workspace current information
async function updateOptionalFeaturesWithWorkspace() {
    // optionalFeatures will be set with default values.
    // override with values from the workspace
    let features = (await util.getExpandedSetting("panel.visibility")) || undefined;
    if (features) {
        if (Object.entries(features).length < panelVisibility.features.length) {
            // At least one feature is missing from the settings, which means we need to use defaults.
            // If we don't refresh defaults here, we won't cover the following scenario:
            //    - default TRUE feature
            //    - which was set to false in the settings, causing knownFeature.value to be false
            //    - just got removed from settings now, meaning it won't be included in the features varibale and the FOR won't loop through it
            //    giving it no opportunity to switch .value back to the default of TRUE.
            initOptionalFeatures();
        }
        for (let propEntry of Object.entries(features)) {
            for (let knownFeature of panelVisibility.features) {
                if (propEntry[0] === knownFeature.propertyName) {
                    knownFeature.value = propEntry[1];
                }
            }
        }
    }
    else {
        initOptionalFeatures(); // no info in workspace, use defaults
    }
}
function disableAllOptionallyVisibleCommands() {
    for (let feature of panelVisibility.features) {
        if (feature.enablement) {
            vscode.commands.executeCommand("setContext", feature.enablement, false);
        }
    }
}
exports.disableAllOptionallyVisibleCommands = disableAllOptionallyVisibleCommands;
function enableOptionallyVisibleCommands() {
    for (let feature of panelVisibility.features) {
        if (feature.enablement) {
            vscode.commands.executeCommand("setContext", feature.enablement, feature.value);
        }
    }
}
async function readFeaturesVisibility() {
    await updateOptionalFeaturesWithWorkspace();
}
let makePath;
function getMakePath() {
    return makePath;
}
exports.getMakePath = getMakePath;
function setMakePath(path) {
    makePath = path;
}
exports.setMakePath = setMakePath;
// Read the path (full or directory only) of the make tool if defined in settings.
// It represents a default to look for if no other path is already included
// in "makefile.configurations.makePath".
async function readMakePath() {
    makePath = await util.getExpandedSetting("makePath");
    if (!makePath) {
        logger.message("No path to the make tool is defined in the settings file.");
    }
}
let makefilePath;
function getMakefilePath() {
    return makefilePath;
}
exports.getMakefilePath = getMakefilePath;
function setMakefilePath(path) {
    makefilePath = path;
}
exports.setMakefilePath = setMakefilePath;
// Read the full path to the makefile if defined in settings.
// It represents a default to look for if no other makefile is already provided
// in makefile.configurations.makefilePath.
// TODO: validate and integrate with "-f [Makefile]" passed in makefile.configurations.makeArgs.
async function readMakefilePath() {
    makefilePath = await util.getExpandedSetting("makefilePath");
    if (!makefilePath) {
        logger.message("No path to the makefile is defined in the settings file.");
    }
    else {
        makefilePath = util.resolvePathToRoot(makefilePath);
    }
}
let makeDirectory;
function getMakeDirectory() {
    return makeDirectory;
}
exports.getMakeDirectory = getMakeDirectory;
function setMakeDirectory(dir) {
    makeDirectory = dir;
}
exports.setMakeDirectory = setMakeDirectory;
// Read the make working directory path if defined in settings.
// It represents a default to look for if no other makeDirectory is already provided
// in makefile.configurations.makeDirectory.
// TODO: validate and integrate with "-C [DIR_PATH]" passed in makefile.configurations.makeArgs.
async function readMakeDirectory() {
    makeDirectory = await util.getExpandedSetting("makeDirectory");
    if (!makeDirectory) {
        logger.message("No folder path to the makefile is defined in the settings file.");
    }
    else {
        makeDirectory = util.resolvePathToRoot(makeDirectory);
    }
}
// Command property accessible from launch.json:
// the folder in which the current "make" invocation operates:
// passed with -C (otherwise it is the workspace folder).
// Note: -f does not change the current working directory. It only points to a makefile somewhere else.
function makeBaseDirectory() {
    // In case more than one -C arguments are given to "make", it will chose the last one.
    // getConfigurationMakeArgs will contain the final command we calculate for the "make" executable.
    // We don't need to know here which -C gets pushed last (global makeDirectory,
    // configuration local makeDirectory or one in makeArgs). Just reverse to easily get the last one.
    const makeArgs = getConfigurationMakeArgs().concat().reverse();
    let prevArg = "";
    for (const arg of makeArgs) {
        if (arg === "-C") {
            return prevArg;
        }
        else if (arg.startsWith("--directory")) {
            const eqIdx = arg.indexOf("=");
            return arg.substring(eqIdx + 1, arg.length);
        }
        // Since we reversed the "make" command line arguments, the path of a -C will be seen before the switch.
        // Remember every previous argument to have it available in case we find the first -C.
        prevArg = arg;
    }
    return util.getWorkspaceRoot();
}
exports.makeBaseDirectory = makeBaseDirectory;
let buildLog;
function getBuildLog() {
    return buildLog;
}
exports.getBuildLog = getBuildLog;
function setBuildLog(path) {
    buildLog = path;
}
exports.setBuildLog = setBuildLog;
// Read from settings the path of the build log that is desired to be parsed
// instead of a dry-run command output.
// Useful for complex, tricky and corner case repos for which make --dry-run
// is not working as the extension expects.
// Example: --dry-run actually running configure commands, instead of only displaying them,
// possibly changing unexpectedly a previous configuration set by the repo developer.
// This scenario may also result in infinite loop, depending on how the makefile
// and the configuring process are written, thus making the extension unusable.
// Defining a build log to be parsed instead of a dry-run output represents a good alternative.
// Also useful for developing unit tests based on real world code,
// that would not clone a whole repo for testing.
// It is recommended to produce the build log with all the following commands,
// so that the extension has the best content to operate on.
//    --always-make (to make sure no target is skipped because it is up to date)
//    --keep-going (to not stumble on the first error)
//    --print-data-base (special verbose printing which this extension is using for parsing the makefile targets)
// If any of the above switches is missing, the extension may have less log to parse from,
// therefore offering less intellisense information for source files,
// identifying less possible binaries to debug or not providing any makefile targets (other than the 'all' default).
async function readBuildLog() {
    buildLog = await util.getExpandedSetting("buildLog");
    if (buildLog) {
        buildLog = util.resolvePathToRoot(buildLog);
        logger.message(`Build log defined at "${buildLog}"`);
        if (!util.checkFileExistsSync(buildLog)) {
            logger.message("Build log not found on disk.");
            return false;
        }
    }
    return true;
}
exports.readBuildLog = readBuildLog;
let loggingLevel;
function getLoggingLevel() {
    return loggingLevel;
}
exports.getLoggingLevel = getLoggingLevel;
function setLoggingLevel(logLevel) {
    loggingLevel = logLevel;
}
exports.setLoggingLevel = setLoggingLevel;
// Read from settings the desired logging level for the Makefile Tools extension.
async function readLoggingLevel() {
    loggingLevel =
        (await util.getExpandedSetting("loggingLevel")) || "Normal";
    logger.message(`Logging level: ${loggingLevel}`);
}
exports.readLoggingLevel = readLoggingLevel;
let extensionOutputFolder;
function getExtensionOutputFolder() {
    return extensionOutputFolder;
}
exports.getExtensionOutputFolder = getExtensionOutputFolder;
function setExtensionOutputFolder(folder) {
    extensionOutputFolder = folder;
}
exports.setExtensionOutputFolder = setExtensionOutputFolder;
// Read from settings the path to a folder where the extension is dropping various output files
// (like extension.log, dry-run.log, targets.log).
// Useful to control where such potentially large files should reside.
async function readExtensionOutputFolder() {
    extensionOutputFolder = await util.getExpandedSetting("extensionOutputFolder");
    if (extensionOutputFolder) {
        extensionOutputFolder = util.resolvePathToRoot(extensionOutputFolder);
    }
    else {
        extensionOutputFolder = extension_1.extension.extensionContext.storagePath;
    }
    // Check one more time because the value can still be undefined if no folder was opened.
    if (extensionOutputFolder) {
        if (!util.checkDirectoryExistsSync(extensionOutputFolder)) {
            if (!util.createDirectorySync(extensionOutputFolder)) {
                extensionOutputFolder = extension_1.extension.extensionContext.storagePath;
                logger.message(`Extension output folder does not exist and could not be created: ${extensionOutputFolder}.`);
                logger.message(`Reverting to '${extensionOutputFolder}' default for extension output folder.`);
                return;
            }
        }
        logger.message(`Dropping various extension output files at ${extensionOutputFolder}`);
    }
}
exports.readExtensionOutputFolder = readExtensionOutputFolder;
let extensionLog;
function getExtensionLog() {
    return extensionLog;
}
exports.getExtensionLog = getExtensionLog;
function setExtensionLog(path) {
    extensionLog = path;
}
exports.setExtensionLog = setExtensionLog;
// Read from settings the path to a log file capturing all the "Makefile Tools" output channel content.
// Useful for very large repos, which would produce with a single command a log larger
// than the "Makefile Tools" output channel capacity.
// Also useful for developing unit tests based on real world code,
// that would not clone a whole repo for testing.
// If an extension log is specified, its content is cleared during activation.
// Any messages that are being logged throughout the lifetime of the extension
// are going to be appended to this file.
async function readExtensionLog() {
    extensionLog = await util.getExpandedSetting("extensionLog");
    if (extensionLog) {
        // If there is a directory defined within the extension log path,
        // honor it and don't append to extensionOutputFolder.
        let parsePath = path.parse(extensionLog);
        if (extensionOutputFolder && !parsePath.dir) {
            extensionLog = path.join(extensionOutputFolder, extensionLog);
        }
        else {
            extensionLog = util.resolvePathToRoot(extensionLog);
        }
        logger.message(`Writing extension log at ${extensionLog}`);
    }
}
exports.readExtensionLog = readExtensionLog;
let preConfigureScript;
function getPreConfigureScript() {
    return preConfigureScript;
}
exports.getPreConfigureScript = getPreConfigureScript;
function setPreConfigureScript(path) {
    preConfigureScript = path;
}
exports.setPreConfigureScript = setPreConfigureScript;
let preConfigureArgs = [];
function getPreConfigureArgs() {
    return preConfigureArgs;
}
exports.getPreConfigureArgs = getPreConfigureArgs;
function setPreConfigureArgs(args) {
    preConfigureArgs = args;
}
exports.setPreConfigureArgs = setPreConfigureArgs;
let postConfigureScript;
function getPostConfigureScript() {
    return postConfigureScript;
}
exports.getPostConfigureScript = getPostConfigureScript;
function setPostConfigureScript(path) {
    postConfigureScript = path;
}
exports.setPostConfigureScript = setPostConfigureScript;
let postConfigureArgs = [];
function getPostConfigureArgs() {
    return postConfigureArgs;
}
exports.getPostConfigureArgs = getPostConfigureArgs;
function setPostConfigureArgs(args) {
    postConfigureArgs = args;
}
exports.setPostConfigureArgs = setPostConfigureArgs;
// Read from settings the path to a script file that needs to have been run at least once
// before a sucessful configure of this project.
async function readPreConfigureScript() {
    preConfigureScript = await util.getExpandedSetting("preConfigureScript");
    if (preConfigureScript) {
        preConfigureScript = util.resolvePathToRoot(preConfigureScript);
        logger.message(`Found pre-configure script defined as ${preConfigureScript}`);
        if (!util.checkFileExistsSync(preConfigureScript)) {
            logger.message("Pre-configure script not found on disk.");
        }
    }
}
exports.readPreConfigureScript = readPreConfigureScript;
async function readPreConfigureArgs() {
    var _a;
    preConfigureArgs =
        (_a = (await util.getExpandedSetting("preConfigureArgs"))) !== null && _a !== void 0 ? _a : [];
    if (preConfigureArgs && preConfigureArgs.length > 0) {
        logger.message(`Pre-configure arguments: '${preConfigureArgs.join("', '")}'`);
    }
}
exports.readPreConfigureArgs = readPreConfigureArgs;
async function readPostConfigureScript() {
    postConfigureScript = await util.getExpandedSetting("postConfigureScript");
    if (postConfigureScript) {
        postConfigureScript = util.resolvePathToRoot(postConfigureScript);
        logger.message(`Found post-configure script defined as ${postConfigureScript}`);
        if (!util.checkFileExistsSync(postConfigureScript)) {
            logger.message("Post-configure script not found on disk");
        }
    }
}
exports.readPostConfigureScript = readPostConfigureScript;
async function readPostConfigureArgs() {
    var _a;
    postConfigureArgs =
        (_a = (await util.getExpandedSetting("postConfigureArgs"))) !== null && _a !== void 0 ? _a : [];
    if (postConfigureArgs && postConfigureArgs.length > 0) {
        logger.message(`Post-configure arguments: '${postConfigureArgs.join("', '")}'`);
    }
}
exports.readPostConfigureArgs = readPostConfigureArgs;
let alwaysPreConfigure;
function getAlwaysPreConfigure() {
    return alwaysPreConfigure;
}
exports.getAlwaysPreConfigure = getAlwaysPreConfigure;
function setAlwaysPreConfigure(path) {
    alwaysPreConfigure = path;
}
exports.setAlwaysPreConfigure = setAlwaysPreConfigure;
let alwaysPostConfigure;
function getAlwaysPostConfigure() {
    return alwaysPostConfigure;
}
exports.getAlwaysPostConfigure = getAlwaysPostConfigure;
function setAlwaysPostConfigure(path) {
    alwaysPostConfigure = path;
}
exports.setAlwaysPostConfigure = setAlwaysPostConfigure;
// Read from settings whether the pre-configure step is supposed to be executed
// always before the configure operation.
async function readAlwaysPreConfigure() {
    alwaysPreConfigure = await util.getExpandedSetting("alwaysPreConfigure");
    logger.message(`Always pre-configure: ${alwaysPreConfigure}`);
}
exports.readAlwaysPreConfigure = readAlwaysPreConfigure;
async function readAlwaysPostConfigure() {
    alwaysPostConfigure = await util.getExpandedSetting("alwaysPostConfigure");
    logger.message(`Always post-configure: ${alwaysPostConfigure}`);
}
exports.readAlwaysPostConfigure = readAlwaysPostConfigure;
let configurationCachePath;
function getConfigurationCachePath() {
    return configurationCachePath;
}
exports.getConfigurationCachePath = getConfigurationCachePath;
function setConfigurationCachePath(path) {
    configurationCachePath = path;
}
exports.setConfigurationCachePath = setConfigurationCachePath;
// Read from settings the path to a cache file containing the output of the last dry-run make command.
// This file is recreated when opening a project, when changing the build configuration or the build target
// and when the settings watcher detects a change of any properties that may impact the dryrun output.
async function readConfigurationCachePath() {
    let oldConfigurationCachePath = configurationCachePath;
    configurationCachePath = await util.getExpandedSetting("configurationCachePath");
    if (!configurationCachePath && extensionOutputFolder) {
        configurationCachePath = path.join(extensionOutputFolder, "configurationCache.log");
    }
    if (configurationCachePath) {
        // If there is a directory defined within the configuration cache path,
        // honor it and don't append to extensionOutputFolder.
        let parsePath = path.parse(configurationCachePath);
        if (extensionOutputFolder && !parsePath.dir) {
            configurationCachePath = path.join(extensionOutputFolder, configurationCachePath);
        }
        else {
            configurationCachePath = util.resolvePathToRoot(configurationCachePath);
        }
        if (oldConfigurationCachePath !== configurationCachePath) {
            logger.message(`Configurations cached at ${configurationCachePath}`);
        }
    }
}
exports.readConfigurationCachePath = readConfigurationCachePath;
let compileCommandsPath;
function getCompileCommandsPath() {
    return compileCommandsPath;
}
exports.getCompileCommandsPath = getCompileCommandsPath;
function setCompileCommandsPath(path) {
    compileCommandsPath = path;
}
exports.setCompileCommandsPath = setCompileCommandsPath;
async function readCompileCommandsPath() {
    compileCommandsPath = await util.getExpandedSetting("compileCommandsPath");
    if (compileCommandsPath) {
        compileCommandsPath = util.resolvePathToRoot(compileCommandsPath);
    }
    logger.message(`compile_commands.json path: ${compileCommandsPath}`);
}
exports.readCompileCommandsPath = readCompileCommandsPath;
let additionalCompilerNames;
function getAdditionalCompilerNames() {
    return additionalCompilerNames;
}
exports.getAdditionalCompilerNames = getAdditionalCompilerNames;
function setAdditionalCompilerNames(compilerNames) {
    additionalCompilerNames = compilerNames;
}
exports.setAdditionalCompilerNames = setAdditionalCompilerNames;
async function readAdditionalCompilerNames() {
    additionalCompilerNames = await util.getExpandedSetting("additionalCompilerNames");
    if (additionalCompilerNames && additionalCompilerNames.length > 0) {
        logger.message(`Additional compiler names: '${additionalCompilerNames === null || additionalCompilerNames === void 0 ? void 0 : additionalCompilerNames.join("', '")}'`);
    }
}
exports.readAdditionalCompilerNames = readAdditionalCompilerNames;
let excludeCompilerNames;
function getExcludeCompilerNames() {
    return excludeCompilerNames;
}
exports.getExcludeCompilerNames = getExcludeCompilerNames;
function setExcludeCompilerNames(compilerNames) {
    excludeCompilerNames = compilerNames;
}
exports.setExcludeCompilerNames = setExcludeCompilerNames;
async function readExcludeCompilerNames() {
    excludeCompilerNames = await util.getExpandedSetting("excludeCompilerNames");
    if (excludeCompilerNames && excludeCompilerNames.length > 0) {
        logger.message(`Exclude compiler names: '${excludeCompilerNames === null || excludeCompilerNames === void 0 ? void 0 : excludeCompilerNames.join("', '")}'`);
    }
}
exports.readExcludeCompilerNames = readExcludeCompilerNames;
let dryrunSwitches;
function getDryrunSwitches() {
    return dryrunSwitches;
}
exports.getDryrunSwitches = getDryrunSwitches;
function setDryrunSwitches(switches) {
    dryrunSwitches = switches;
}
exports.setDryrunSwitches = setDryrunSwitches;
// Read from settings the dry-run switches array. If there is no user definition, the defaults are:
//   --always-make: to not skip over up-to-date targets
//   --keep-going: to not stop at the first error that is encountered
//   --print-data-base: to generate verbose log output that can be parsed to identify all the makefile targets
// Some code bases have various issues with the above make parameters: infrastructure (not build) errors,
// infinite reconfiguration loops, resulting in the extension being unusable.
// To work around this, the setting makefile.dryrunSwitches is providing a way to skip over the problematic make arguments,
// even if this results in not ideal behavior: less information available to be parsed, which leads to incomplete IntelliSense or missing targets.
async function readDryrunSwitches() {
    dryrunSwitches = await util.getExpandedSetting("dryrunSwitches");
    if (dryrunSwitches && dryrunSwitches.length > 0) {
        logger.message(`Dry-run switches: '${dryrunSwitches === null || dryrunSwitches === void 0 ? void 0 : dryrunSwitches.join("', '")}'`);
    }
}
exports.readDryrunSwitches = readDryrunSwitches;
let launchConfigurations = [];
function getLaunchConfigurations() {
    return launchConfigurations;
}
exports.getLaunchConfigurations = getLaunchConfigurations;
function setLaunchConfigurations(configurations) {
    launchConfigurations = configurations;
}
exports.setLaunchConfigurations = setLaunchConfigurations;
// Read launch configurations defined by the user in settings: makefile.launchConfigurations[]
async function readLaunchConfigurations() {
    launchConfigurations =
        (await util.getExpandedSetting("launchConfigurations")) || [];
}
// Helper used to fill the launch configurations quick pick.
// The input object for this method is either read from the settings or it is an object
// constructed by the parser while analyzing the dry-run output (or the build log),
// when the extension is trying to determine if and how (from what folder, with what arguments)
// the makefile is invoking any of the programs that are built by the current target.
// Properties other than cwd, binary path and args could be manually defined by the user
// in settings (after the extension creates a first minimal launch configuration object) and are not relevant
// for the strings being used to populate the quick pick.
// Syntax:
//    [CWD path]>[binaryPath]([binaryArg1,binaryArg2,binaryArg3,...])
function launchConfigurationToString(configuration) {
    let binPath = util.makeRelPath(configuration.binaryPath, configuration.cwd);
    let binArgs = configuration.binaryArgs.join(",");
    return `${configuration.cwd}>${binPath}(${binArgs})`;
}
exports.launchConfigurationToString = launchConfigurationToString;
// Helper used to construct a minimal launch configuration object
// (only cwd, binary path and arguments) from a string that respects
// the syntax of its quick pick.
async function stringToLaunchConfiguration(str) {
    let regexp = /(.*)\>(.*)\((.*)\)/gm;
    let match = regexp.exec(str);
    if (match) {
        let fullPath = await util.makeFullPath(match[2], match[1]);
        let splitArgs = match[3] === "" ? [] : match[3].split(",");
        return {
            cwd: match[1],
            binaryPath: fullPath,
            binaryArgs: splitArgs,
        };
    }
    else {
        return undefined;
    }
}
exports.stringToLaunchConfiguration = stringToLaunchConfiguration;
let currentLaunchConfiguration;
function getCurrentLaunchConfiguration() {
    return currentLaunchConfiguration;
}
exports.getCurrentLaunchConfiguration = getCurrentLaunchConfiguration;
async function setCurrentLaunchConfiguration(configuration) {
    currentLaunchConfiguration = configuration;
    let launchConfigStr = currentLaunchConfiguration
        ? launchConfigurationToString(currentLaunchConfiguration)
        : "";
    statusBar.setLaunchConfiguration(launchConfigStr);
    await extension_1.extension._projectOutlineProvider.updateLaunchTarget(launchConfigStr);
}
exports.setCurrentLaunchConfiguration = setCurrentLaunchConfiguration;
function getLaunchConfiguration(name) {
    return launchConfigurations.find((k) => {
        if (launchConfigurationToString(k) === name) {
            return { ...k, keep: true };
        }
    });
}
// Construct the current launch configuration object:
// Read the identifier from workspace state storage, then find the corresponding object
// in the launch configurations array from settings.
// Also update the status bar item.
async function readCurrentLaunchConfiguration() {
    await readLaunchConfigurations();
    let currentLaunchConfigurationName = extension_1.extension.getState().launchConfiguration;
    if (currentLaunchConfigurationName) {
        currentLaunchConfiguration = getLaunchConfiguration(currentLaunchConfigurationName);
    }
    let launchConfigStr = "No launch configuration set.";
    if (currentLaunchConfiguration) {
        launchConfigStr = launchConfigurationToString(currentLaunchConfiguration);
        logger.message(`Reading current launch configuration "${launchConfigStr}" from the workspace state.`);
    }
    else {
        // A null launch configuration after a non empty launch configuration string name
        // means that the name stored in the project state does not match any of the entries in settings.
        // This typically happens after the user modifies manually "makefile.launchConfigurations"
        // in the .vscode/settings.json, specifically the entry that corresponds to the current launch configuration.
        // Make sure to unset the launch configuration in this scenario.
        if (currentLaunchConfigurationName !== undefined &&
            currentLaunchConfigurationName !== "") {
            logger.message(`Launch configuration "${currentLaunchConfigurationName}" is no longer defined in settings "makefile.launchConfigurations".`);
            await setLaunchConfigurationByName("");
        }
        else {
            logger.message("No current launch configuration is set in the workspace state.");
        }
    }
    statusBar.setLaunchConfiguration(launchConfigStr);
    await extension_1.extension._projectOutlineProvider.updateLaunchTarget(launchConfigStr);
}
let defaultLaunchConfiguration;
function getDefaultLaunchConfiguration() {
    return defaultLaunchConfiguration;
}
exports.getDefaultLaunchConfiguration = getDefaultLaunchConfiguration;
// No setter needed. Currently only the user can define makefile.defaultLaunchConfiguration
async function readDefaultLaunchConfiguration() {
    defaultLaunchConfiguration =
        await util.getExpandedSetting("defaultLaunchConfiguration");
    logger.message(`Default launch configuration: MIMode = ${defaultLaunchConfiguration === null || defaultLaunchConfiguration === void 0 ? void 0 : defaultLaunchConfiguration.MIMode},
                    miDebuggerPath = ${defaultLaunchConfiguration === null || defaultLaunchConfiguration === void 0 ? void 0 : defaultLaunchConfiguration.miDebuggerPath},
                    stopAtEntry = ${defaultLaunchConfiguration === null || defaultLaunchConfiguration === void 0 ? void 0 : defaultLaunchConfiguration.stopAtEntry},
                    symbolSearchPath = ${defaultLaunchConfiguration === null || defaultLaunchConfiguration === void 0 ? void 0 : defaultLaunchConfiguration.symbolSearchPath}`);
}
exports.readDefaultLaunchConfiguration = readDefaultLaunchConfiguration;
// Command name and args are used when building from within the VS Code Makefile Tools Extension,
// when parsing all the targets that exist and when updating the cpptools configuration provider
// for IntelliSense.
let configurationMakeCommand;
function getConfigurationMakeCommand() {
    return configurationMakeCommand;
}
exports.getConfigurationMakeCommand = getConfigurationMakeCommand;
function setConfigurationMakeCommand(name) {
    configurationMakeCommand = name;
}
exports.setConfigurationMakeCommand = setConfigurationMakeCommand;
let configurationMakeArgs = [];
function getConfigurationMakeArgs() {
    return configurationMakeArgs;
}
exports.getConfigurationMakeArgs = getConfigurationMakeArgs;
function setConfigurationMakeArgs(args) {
    configurationMakeArgs = args;
}
exports.setConfigurationMakeArgs = setConfigurationMakeArgs;
// The following (makefile, problem matchers, build log), same as command&args above
// are deduced via a set of rules of defaults and overrides that we calculate only when necessary
// and access the last result otherwise.
let configurationMakefile;
function getConfigurationMakefile() {
    return configurationMakefile;
}
exports.getConfigurationMakefile = getConfigurationMakefile;
function setConfigurationMakefile(makefilePath) {
    configurationMakefile = makefilePath;
}
exports.setConfigurationMakefile = setConfigurationMakefile;
let configurationProblemMatchers = [];
function getConfigurationProblemMatchers() {
    return configurationProblemMatchers;
}
exports.getConfigurationProblemMatchers = getConfigurationProblemMatchers;
function setConfigurationProblemMatchers(problemMatchers) {
    configurationProblemMatchers = problemMatchers;
}
exports.setConfigurationProblemMatchers = setConfigurationProblemMatchers;
let configurationBuildLog;
function getConfigurationBuildLog() {
    return configurationBuildLog;
}
exports.getConfigurationBuildLog = getConfigurationBuildLog;
function setConfigurationBuildLog(name) {
    configurationBuildLog = name;
}
exports.setConfigurationBuildLog = setConfigurationBuildLog;
let configurationPreConfigureArgs = [];
function getConfigurationPreConfigureArgs() {
    return configurationPreConfigureArgs;
}
exports.getConfigurationPreConfigureArgs = getConfigurationPreConfigureArgs;
function setConfigurationPreConfigureArgs(args) {
    configurationPreConfigureArgs = args;
}
exports.setConfigurationPreConfigureArgs = setConfigurationPreConfigureArgs;
let configurationPostConfigureArgs = [];
function getConfigurationPostConfigureArgs() {
    return configurationPostConfigureArgs;
}
exports.getConfigurationPostConfigureArgs = getConfigurationPostConfigureArgs;
function setConfigurationPostConfigureArgs(args) {
    configurationPostConfigureArgs = args;
}
exports.setConfigurationPostConfigureArgs = setConfigurationPostConfigureArgs;
// Analyze the settings of the current makefile configuration and the global workspace settings,
// according to various merging rules and decide what make command and build log
// apply to the current makefile configuration.
async function analyzeConfigureParams() {
    getBuildLogForConfiguration(currentMakefileConfiguration);
    await getCommandForConfiguration(currentMakefileConfiguration);
    getProblemMatchersForConfiguration(currentMakefileConfiguration);
    getPreConfigureArgsForConfiguration(currentMakefileConfiguration);
    getPostConfigureArgsForConfiguration(currentMakefileConfiguration);
}
function getMakefileConfiguration(configuration) {
    return makefileConfigurations.find((k) => {
        if (k.name === configuration) {
            return k;
        }
    });
}
exports.getMakefileConfiguration = getMakefileConfiguration;
// Helper to find in the array of MakefileConfiguration which command/args correspond to a configuration name.
// Higher level settings (like makefile.makePath, makefile.makefilePath or makefile.makeDirectory)
// also have an additional effect on the final command.
async function getCommandForConfiguration(configuration) {
    let makefileConfiguration = getMakefileConfiguration(configuration);
    let makeParsedPathSettings = makePath
        ? path.parse(makePath)
        : undefined;
    let makeParsedPathConfigurations = (makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.makePath)
        ? path.parse(makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.makePath)
        : undefined;
    configurationMakeArgs = [];
    // Name of the make tool can be defined as makePath in makefile.configurations or as makefile.makePath.
    // When none defined, default to "make".
    configurationMakeCommand =
        (makeParsedPathConfigurations === null || makeParsedPathConfigurations === void 0 ? void 0 : makeParsedPathConfigurations.base) ||
            (makeParsedPathSettings === null || makeParsedPathSettings === void 0 ? void 0 : makeParsedPathSettings.base) ||
            "make";
    let configurationMakeCommandExtension = (makeParsedPathConfigurations === null || makeParsedPathConfigurations === void 0 ? void 0 : makeParsedPathConfigurations.ext) || (makeParsedPathSettings === null || makeParsedPathSettings === void 0 ? void 0 : makeParsedPathSettings.ext);
    // Prepend the directory path, if defined in either makefile.configurations or makefile.makePath (first has priority).
    let configurationCommandPath = (makeParsedPathConfigurations === null || makeParsedPathConfigurations === void 0 ? void 0 : makeParsedPathConfigurations.dir) || (makeParsedPathSettings === null || makeParsedPathSettings === void 0 ? void 0 : makeParsedPathSettings.dir) || "";
    configurationMakeCommand = path.join(configurationCommandPath, configurationMakeCommand);
    // Add "make" when only a directory path was specified.
    if (util.checkDirectoryExistsSync(configurationMakeCommand)) {
        configurationMakeCommand = path.join(configurationMakeCommand, "make");
    }
    // Add the ".exe" extension on windows if no extension was specified, otherwise the file search APIs don't find it.
    if (process.platform === "win32" &&
        configurationMakeCommandExtension === "") {
        configurationMakeCommand += ".exe";
    }
    // Add the makefile path via the -f make switch.
    // makefile.configurations.makefilePath overwrites makefile.makefilePath.
    configurationMakefile = (makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.makefilePath)
        ? util.resolvePathToRoot(makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.makefilePath)
        : makefilePath;
    if (configurationMakefile) {
        // check if the makefile path is a directory. If so, try adding `Makefile` or `makefile`
        if (util.checkDirectoryExistsSync(configurationMakefile)) {
            let makeFileTest = path.join(configurationMakefile, "Makefile");
            if (!util.checkFileExistsSync(makeFileTest)) {
                makeFileTest = path.join(configurationMakefile, "makefile");
            }
            // if we found the makefile in the directory, set the `configurationMakefile` to the found file path.
            if (util.checkFileExistsSync(makeFileTest)) {
                configurationMakefile = makeFileTest;
            }
        }
        configurationMakeArgs.push("-f");
        configurationMakeArgs.push(`${configurationMakefile}`);
        // Need to rethink this (GitHub 59).
        // Some repos don't work when we automatically add -C, others don't work when we don't.
        // configurationMakeArgs.push("-C");
        // configurationMakeArgs.push(path.parse(configurationMakefile).dir);
    }
    // Add the working directory path via the -C switch.
    // makefile.configurations.makeDirectory overwrites makefile.makeDirectory.
    let makeDirectoryUsed = (makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.makeDirectory)
        ? util.resolvePathToRoot(makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.makeDirectory)
        : makeDirectory;
    if (makeDirectoryUsed) {
        configurationMakeArgs.push("-C");
        configurationMakeArgs.push(`${makeDirectoryUsed}`);
    }
    // Make sure we append "makefile.configurations[].makeArgs" last, in case the developer wants to overwrite any arguments that the extension
    // deduces from the settings. Additionally, for -f/-C, resolve path to root.
    if (makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.makeArgs) {
        let prevArg = "";
        makefileConfiguration.makeArgs.forEach((arg) => {
            if (prevArg === "-C") {
                configurationMakeArgs.push(util.resolvePathToRoot(arg));
            }
            else if (arg.startsWith("--directory")) {
                const eqIdx = arg.indexOf("=");
                const folderStr = arg.substring(eqIdx + 1, arg.length);
                configurationMakeArgs.push(`--directory=${util.resolvePathToRoot(folderStr)}`);
            }
            else {
                configurationMakeArgs.push(arg);
            }
            prevArg = arg;
        });
    }
    if (configurationMakeCommand) {
        logger.message(`Deduced command '${configurationMakeCommand} ${configurationMakeArgs.join(" ")}' for configuration "${configuration}"`);
    }
    // Check for makefile path on disk: we search first for any makefile specified via the makefilePath setting,
    // then via the makeDirectory setting and then in the root of the workspace. On linux/mac, it often is 'Makefile', so verify that we default to the right filename.
    if (!configurationMakefile) {
        if (makeDirectoryUsed) {
            configurationMakefile = util.resolvePathToRoot(path.join(makeDirectoryUsed, "Makefile"));
            if (!util.checkFileExistsSync(configurationMakefile)) {
                configurationMakefile = util.resolvePathToRoot(path.join(makeDirectoryUsed, "makefile"));
            }
        }
        else {
            configurationMakefile = util.resolvePathToRoot("./Makefile");
            if (!util.checkFileExistsSync(configurationMakefile)) {
                configurationMakefile = util.resolvePathToRoot("./makefile");
            }
        }
    }
    // Validation and warnings about properly defining the makefile and make tool.
    // These are not needed if the current configuration reads from a build log instead of dry-run output.
    let buildLog = getConfigurationBuildLog();
    let buildLogContent = buildLog
        ? util.readFile(buildLog)
        : undefined;
    if (!buildLogContent) {
        if ((!makeParsedPathSettings || makeParsedPathSettings.name === "") &&
            (!makeParsedPathConfigurations ||
                makeParsedPathConfigurations.name === "")) {
            logger.message("Could not find any make tool file name in makefile.configurations.makePath, nor in makefile.makePath. Assuming make.");
        }
        // If configuration command has a path (absolute or relative), check if it exists on disk and error if not.
        // If no path is given to the make tool, search all paths in the environment and error if make is not on the path.
        if (configurationCommandPath !== "") {
            if (!util.checkFileExistsSync(configurationMakeCommand)) {
                logger.message("Make was not found on disk at the location provided via makefile.makePath or makefile.configurations[].makePath.");
                // How often location settings don't work (maybe because not yet expanding variables)?
                const telemetryProperties = {
                    reason: "not found at path given in settings",
                };
                telemetry.logEvent("makeNotFound", telemetryProperties);
            }
        }
        else {
            const makeBaseName = path.parse(configurationMakeCommand).base;
            const makePathInEnv = util.toolPathInEnv(makeBaseName);
            if (!makePathInEnv) {
                logger.message("Make was not given any path in settings and is also not found on the environment path.");
                // Do the users need an environment automatically set by the extension?
                // With a kits feature or expanding on the pre-configure script.
                const telemetryProperties = {
                    reason: "not found in environment path",
                };
                telemetry.logEvent("makeNotFound", telemetryProperties);
            }
        }
        if (!util.checkFileExistsSync(configurationMakefile)) {
            logger.message("The makefile entry point was not found. " +
                "Make sure it exists at the location defined by makefile.makefilePath, makefile.configurations[].makefilePath, " +
                "makefile.makeDirectory, makefile.configurations[].makeDirectory" +
                "or in the root of the workspace.");
            // we may need more advanced ability to process settings
            // insight into different project structures
            const telemetryProperties = {
                reason: (makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.makefilePath) || makefilePath
                    ? "not found at path given in settings"
                    : makeDirectoryUsed
                        ? "not found in -C provided make directory"
                        : "not found in workspace root",
            };
            telemetry.logEvent("makefileNotFound", telemetryProperties);
            await extension_1.extension.setFullFeatureSet(false);
            disableAllOptionallyVisibleCommands();
        }
        else {
            if (vscode.workspace.isTrusted) {
                // full feature set ON only for trusted workspaces
                await extension_1.extension.setFullFeatureSet(true);
                enableOptionallyVisibleCommands();
            }
        }
    }
    else {
        // If we have a build log, then we want Makefile Tools to be fully active and the UI visible,
        // unless the workspace is untrusted.
        if (vscode.workspace.isTrusted) {
            await extension_1.extension.setFullFeatureSet(true);
            enableOptionallyVisibleCommands();
        }
    }
}
exports.getCommandForConfiguration = getCommandForConfiguration;
// Helper to find in the array of MakefileConfiguration which problemMatchers correspond to a configuration name
function getProblemMatchersForConfiguration(configuration) {
    let makefileConfiguration = getMakefileConfiguration(configuration);
    configurationProblemMatchers = (makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.problemMatchers) || [];
}
exports.getProblemMatchersForConfiguration = getProblemMatchersForConfiguration;
// Helper to find in the array of MakefileConfiguration which buildLog correspond to a configuration name
function getBuildLogForConfiguration(configuration) {
    let makefileConfiguration = getMakefileConfiguration(configuration);
    configurationBuildLog = makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.buildLog;
    if (configurationBuildLog) {
        logger.message(`Found build log path setting "${configurationBuildLog}" defined for configuration "${configuration}"`);
        if (!path.isAbsolute(configurationBuildLog)) {
            configurationBuildLog = path.join(util.getWorkspaceRoot(), configurationBuildLog);
            logger.message(`Resolving build log path to "${configurationBuildLog}"`);
        }
        if (!util.checkFileExistsSync(configurationBuildLog)) {
            logger.message("Build log not found. Remove the build log setting or provide a build log file on disk at the given location.");
        }
    }
    else {
        // Default to an eventual build log defined in settings
        // If that one is not found on disk, the setting reader already warned about it.
        configurationBuildLog = buildLog;
    }
}
exports.getBuildLogForConfiguration = getBuildLogForConfiguration;
function getPreConfigureArgsForConfiguration(configuration) {
    let makefileConfiguration = getMakefileConfiguration(configuration);
    const localPreConfigArgs = makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.preConfigureArgs;
    if (localPreConfigArgs) {
        configurationPreConfigureArgs = localPreConfigArgs;
    }
    else {
        configurationPreConfigureArgs = preConfigureArgs;
    }
}
exports.getPreConfigureArgsForConfiguration = getPreConfigureArgsForConfiguration;
function getPostConfigureArgsForConfiguration(configuration) {
    let makefileConfiguration = getMakefileConfiguration(configuration);
    const localPostConfigArgs = makefileConfiguration === null || makefileConfiguration === void 0 ? void 0 : makefileConfiguration.postConfigureArgs;
    if (localPostConfigArgs) {
        configurationPostConfigureArgs = localPostConfigArgs;
    }
    else {
        configurationPostConfigureArgs = postConfigureArgs;
    }
}
exports.getPostConfigureArgsForConfiguration = getPostConfigureArgsForConfiguration;
let makefileConfigurations = [];
function getMakefileConfigurations() {
    return makefileConfigurations;
}
exports.getMakefileConfigurations = getMakefileConfigurations;
function setMakefileConfigurations(configurations) {
    makefileConfigurations = configurations;
}
exports.setMakefileConfigurations = setMakefileConfigurations;
// Read make configurations optionally defined by the user in settings: makefile.configurations.
async function readMakefileConfigurations() {
    // We need to read "makefile.configurations" unexpanded first, because we may write back into these settings
    // in case we indentify "name" missing. We'll expand later, see end of function.
    let workspaceConfiguration = vscode.workspace.getConfiguration("makefile");
    makefileConfigurations =
        workspaceConfiguration.get("configurations") || [];
    let detectedUnnamedConfigurations = false;
    let unnamedConfigurationId = 0;
    // Collect unnamed configurations (probably) defined by the extension earlier,
    // to make sure we avoid duplicates in case any new configuration is in need of a name.
    let unnamedConfigurationNames = makefileConfigurations.map((k) => {
        return k.name;
    });
    unnamedConfigurationNames = unnamedConfigurationNames.filter((item) => item && item.startsWith("Unnamed configuration"));
    makefileConfigurations.forEach((element) => {
        if (!element.name) {
            detectedUnnamedConfigurations = true;
            // Just considering the possibility that there are already unnamed configurations
            // defined with IDs other than the rule we assume (like not consecutive numbers, but not only).
            // This may happen when the user deletes configurations at some point without updating the IDs.
            unnamedConfigurationId++;
            let autoGeneratedName = `Unnamed configuration ${unnamedConfigurationId}`;
            while (unnamedConfigurationNames.includes(autoGeneratedName)) {
                unnamedConfigurationId++;
                autoGeneratedName = `Unnamed configuration ${unnamedConfigurationId}`;
            }
            element.name = autoGeneratedName;
            logger.message(`Defining name ${autoGeneratedName} for unnamed configuration ${element}.`);
        }
    });
    if (detectedUnnamedConfigurations) {
        logger.message("Updating makefile configurations in settings.");
        await workspaceConfiguration.update("configurations", makefileConfigurations);
    }
    // Now read "makefile.configurations" again and expand as needed.
    makefileConfigurations =
        (await util.getExpandedSetting("configurations")) || [];
    // Log the updated list of configuration names
    const makefileConfigurationNames = makefileConfigurations.map((k) => {
        return k.name;
    });
    if (makefileConfigurationNames.length > 0) {
        logger.message("Found the following configurations defined in makefile.configurations setting: " +
            makefileConfigurationNames.join(";"));
    }
    // Verify if the current makefile configuration (check against the expanded values)
    // is still part of the list and unset otherwise.
    // Exception: "Default" which means the user didn't set it and relies on whatever default
    // the current set of makefiles support. "Default" is not going to be part of the list
    // but we shouldn't log about it.
    if (currentMakefileConfiguration !== "Default" &&
        !makefileConfigurationNames.includes(currentMakefileConfiguration)) {
        logger.message(`Current makefile configuration ${currentMakefileConfiguration} is no longer present in the available list.` +
            ` Re-setting the current makefile configuration to default.`);
        await setConfigurationByName("Default");
    }
}
exports.readMakefileConfigurations = readMakefileConfigurations;
// Last target picked from the set of targets that are run by the makefiles
// when building for the current configuration.
// Saved into the settings storage. Also reflected in the configuration status bar button
let currentTarget;
function getCurrentTarget() {
    return currentTarget;
}
exports.getCurrentTarget = getCurrentTarget;
function setCurrentTarget(target) {
    currentTarget = target;
}
exports.setCurrentTarget = setCurrentTarget;
// Read current target from workspace state, update status bar item
function readCurrentTarget() {
    let buildTarget = extension_1.extension.getState().buildTarget;
    if (!buildTarget) {
        logger.message("No target defined in the workspace state. Assuming 'Default'.");
        statusBar.setTarget("Default");
        // If no particular target is defined in settings, use 'Default' for the button
        // but keep the variable empty, to not append it to the make command.
        currentTarget = "";
    }
    else {
        currentTarget = buildTarget;
        logger.message(`Reading current build target "${currentTarget}" from the workspace state.`);
        statusBar.setTarget(currentTarget);
    }
}
let configureOnOpen;
function getConfigureOnOpen() {
    return configureOnOpen;
}
exports.getConfigureOnOpen = getConfigureOnOpen;
function setConfigureOnOpen(configure) {
    configureOnOpen = configure;
}
exports.setConfigureOnOpen = setConfigureOnOpen;
async function readConfigureOnOpen() {
    configureOnOpen = await util.getExpandedSetting("configureOnOpen");
    logger.message(`Configure on open: ${configureOnOpen}`);
}
exports.readConfigureOnOpen = readConfigureOnOpen;
let configureOnEdit;
function getConfigureOnEdit() {
    return configureOnEdit;
}
exports.getConfigureOnEdit = getConfigureOnEdit;
function setConfigureOnEdit(configure) {
    configureOnEdit = configure;
}
exports.setConfigureOnEdit = setConfigureOnEdit;
async function readConfigureOnEdit() {
    configureOnEdit = await util.getExpandedSetting("configureOnEdit");
    logger.message(`Configure on edit: ${configureOnEdit}`);
}
exports.readConfigureOnEdit = readConfigureOnEdit;
let configureAfterCommand;
function getConfigureAfterCommand() {
    return configureAfterCommand;
}
exports.getConfigureAfterCommand = getConfigureAfterCommand;
function setConfigureAfterCommand(configure) {
    configureAfterCommand = configure;
}
exports.setConfigureAfterCommand = setConfigureAfterCommand;
async function readConfigureAfterCommand() {
    configureAfterCommand = await util.getExpandedSetting("configureAfterCommand");
    logger.message(`Configure after command: ${configureAfterCommand}`);
}
exports.readConfigureAfterCommand = readConfigureAfterCommand;
let phonyOnlyTargets;
function getPhonyOnlyTargets() {
    return phonyOnlyTargets;
}
exports.getPhonyOnlyTargets = getPhonyOnlyTargets;
function setPhonyOnlyTargets(phony) {
    phonyOnlyTargets = phony;
}
exports.setPhonyOnlyTargets = setPhonyOnlyTargets;
async function readPhonyOnlyTargets() {
    phonyOnlyTargets = await util.getExpandedSetting("phonyOnlyTargets");
    logger.message(`Only .PHONY targets: ${phonyOnlyTargets}`);
}
exports.readPhonyOnlyTargets = readPhonyOnlyTargets;
let saveBeforeBuildOrConfigure;
function getSaveBeforeBuildOrConfigure() {
    return saveBeforeBuildOrConfigure;
}
exports.getSaveBeforeBuildOrConfigure = getSaveBeforeBuildOrConfigure;
function setSaveBeforeBuildOrConfigure(save) {
    saveBeforeBuildOrConfigure = save;
}
exports.setSaveBeforeBuildOrConfigure = setSaveBeforeBuildOrConfigure;
async function readSaveBeforeBuildOrConfigure() {
    saveBeforeBuildOrConfigure = await util.getExpandedSetting("saveBeforeBuildOrConfigure");
    logger.message(`Save before build or configure: ${saveBeforeBuildOrConfigure}`);
}
exports.readSaveBeforeBuildOrConfigure = readSaveBeforeBuildOrConfigure;
let buildBeforeLaunch;
function getBuildBeforeLaunch() {
    return buildBeforeLaunch;
}
exports.getBuildBeforeLaunch = getBuildBeforeLaunch;
function setBuildBeforeLaunch(build) {
    buildBeforeLaunch = build;
}
exports.setBuildBeforeLaunch = setBuildBeforeLaunch;
async function readBuildBeforeLaunch() {
    buildBeforeLaunch = await util.getExpandedSetting("buildBeforeLaunch");
    logger.message(`Build before launch: ${buildBeforeLaunch}`);
}
exports.readBuildBeforeLaunch = readBuildBeforeLaunch;
let clearOutputBeforeBuild;
function getClearOutputBeforeBuild() {
    return clearOutputBeforeBuild;
}
exports.getClearOutputBeforeBuild = getClearOutputBeforeBuild;
function setClearOutputBeforeBuild(clear) {
    clearOutputBeforeBuild = clear;
}
exports.setClearOutputBeforeBuild = setClearOutputBeforeBuild;
async function readClearOutputBeforeBuild() {
    clearOutputBeforeBuild = await util.getExpandedSetting("clearOutputBeforeBuild");
    logger.message(`Clear output before build: ${clearOutputBeforeBuild}`);
}
exports.readClearOutputBeforeBuild = readClearOutputBeforeBuild;
// This setting is useful for some repos where directory changing commands (cd, push, pop)
// are missing or printed more than once, resulting in associating some IntelliSense information
// with the wrong file or even with a non existent URL.
// When this is set, the current path deduction relies only on --print-directory
// (which prints the messages regarding "Entering direcory" and "Leaving directory"),
// which is not perfect either for all repos.
let ignoreDirectoryCommands;
function getIgnoreDirectoryCommands() {
    return ignoreDirectoryCommands;
}
exports.getIgnoreDirectoryCommands = getIgnoreDirectoryCommands;
function setIgnoreDirectoryCommands(ignore) {
    ignoreDirectoryCommands = ignore;
}
exports.setIgnoreDirectoryCommands = setIgnoreDirectoryCommands;
async function readIgnoreDirectoryCommands() {
    ignoreDirectoryCommands = await util.getExpandedSetting("ignoreDirectoryCommands");
    logger.message(`Ignore directory commands: ${ignoreDirectoryCommands}`);
}
exports.readIgnoreDirectoryCommands = readIgnoreDirectoryCommands;
// Initialization from the state of the workspace.
// The user does not have direct access to this data.
// The extension sets state variables via user actions like:
// set configuration, set build target, set launch target.
// At activation time we read from state, update UI accordingly
// and commands become available to be run in settings via expansion.
// These can also be resetted via the makefile.resetState command.
function initFromState() {
    readCurrentMakefileConfiguration();
    readCurrentTarget();
}
exports.initFromState = initFromState;
// Initialization from settings (or backup default rules).
// This is called at activation time (with activation boolean being passed as true explicitly)
// or after any change in the configuration/build-target workspace state variables, in which case
// we need a refresh of all settings expanding ${configuration} or ${buildTarget}.
async function initFromSettings(activation = false) {
    // Read first anything related to the output folder and the extension log,
    // to be able to document any upcoming reads.
    await readExtensionOutputFolder();
    await readExtensionLog();
    // Delete the extension log file, if exists, even if we lose what we logged earlier
    // about reading the output folder and extension log.
    // The deletion should happen only at activation time (to not allow the log file to grow indefinitely),
    // while reading the settings is done at activation time  and also anytime later,
    // after changing a makefile configuration, a build or a launch target.
    let extensionLog = getExtensionLog();
    if (extensionLog && activation && util.checkFileExistsSync(extensionLog)) {
        util.deleteFileSync(extensionLog);
    }
    await readLoggingLevel();
    await readConfigurationCachePath();
    await readMakePath();
    await readMakefilePath();
    await readMakeDirectory();
    extension_1.extension.updateBuildLogPresent(await readBuildLog());
    await readPreConfigureScript();
    await readPreConfigureArgs();
    await readAlwaysPreConfigure();
    await readPostConfigureScript();
    await readPostConfigureArgs();
    await readAlwaysPostConfigure();
    await readDryrunSwitches();
    await readAdditionalCompilerNames();
    await readExcludeCompilerNames();
    await readMakefileConfigurations();
    await readCurrentLaunchConfiguration();
    await readDefaultLaunchConfiguration();
    await readConfigureOnOpen();
    await readConfigureOnEdit();
    await readConfigureAfterCommand();
    await readPhonyOnlyTargets();
    await readSaveBeforeBuildOrConfigure();
    await readBuildBeforeLaunch();
    await readClearOutputBeforeBuild();
    await readIgnoreDirectoryCommands();
    await readCompileCommandsPath();
    initOptionalFeatures();
    await readFeaturesVisibility();
    await analyzeConfigureParams();
    await extension_1.extension._projectOutlineProvider.update(extension_1.extension.getState().buildConfiguration, extension_1.extension.getState().buildTarget, extension_1.extension.getState().launchConfiguration, getConfigurationMakefile(), getConfigurationMakeCommand(), getConfigurationBuildLog());
    // Listen to the workspace trust change event
    vscode.workspace.onDidGrantWorkspaceTrust(async (e) => {
        await getCommandForConfiguration(currentMakefileConfiguration); // this refreshes fullFeatureSet and enables visible features
    });
    // Verify the dirty state of the IntelliSense config provider and update accordingly.
    // The makefile.configureOnEdit setting can be set to false when this behavior is inconvenient.
    vscode.window.onDidChangeActiveTextEditor(async (e) => {
        let language = "";
        if (e) {
            language = e.document.languageId;
        }
        // It is too annoying to generate a configure on any kind of editor focus change
        // (for example even searching in the logging window generates this event).
        // Since all the operations are guarded by the configureDirty state,
        // the only "operation" left that we need to make sure it's up to date
        // is IntelliSense, so trigger a configure when we switch editor focus
        // into C/C++ source code.
        switch (language) {
            case "c":
            case "cpp":
                // If configureDirty is already set from a previous VSCode session,
                // at workspace load this event (onDidChangeActiveTextEditor) is triggered automatically
                // and if makefile.configureOnOpen is true, there is a race between two configure operations,
                // one of which being unnecessary. If configureOnOpen is false, there is no race
                // but still we don't want to override the behavior desired by the user.
                // Additionally, if anything dirtied the configure state during a (pre)configure or build,
                // skip this clean configure, to avoid annoying "blocked operation" notifications.
                // The configure state remains dirty and a new configure will be triggered eventually:
                // (selecting a new configuration, target or launch, build, editor focus change).
                // Guarding only for not being blocked is not enough. For example,
                // in the first scenario explained above, the race happens when nothing looks blocked
                // here, but leading to a block notification soon.
                if (extension_1.extension.getState().configureDirty && configureOnEdit) {
                    if (extension_1.extension.getCompletedConfigureInSession() &&
                        !make.blockedByOp(make.Operations.configure, false)) {
                        logger.message("Configuring after settings or makefile changes...");
                        await make.configure(make.TriggeredBy.configureAfterEditorFocusChange); // this sets configureDirty back to false if it succeeds
                    }
                }
                break;
            default:
                break;
        }
    });
    // Modifying any makefile should trigger an IntelliSense config provider update,
    // so make the dirty state true.
    // TODO: limit to makefiles relevant to this project, instead of any random makefile anywhere.
    //       We can't listen only to the makefile pointed to by makefile.makefilePath or makefile.makeDirectory,
    //       because that is only the entry point and can refer to other relevant makefiles.
    // TODO: don't trigger an update for any dummy save, verify how the content changed.
    vscode.workspace.onDidSaveTextDocument((e) => {
        if (e.uri.fsPath.toLowerCase().endsWith("makefile")) {
            extension_1.extension.getState().configureDirty = true;
        }
    });
    // Watch for Makefile Tools setting updates that can change the IntelliSense config provider dirty state.
    // More than one setting may be updated on one settings.json save,
    // so make sure to OR the dirty state when it's calculated by a formula (not a simple TRUE value).
    vscode.workspace.onDidChangeConfiguration(async (e) => {
        if (vscode.workspace.workspaceFolders &&
            e.affectsConfiguration("makefile")) {
            // We are interested in updating only some relevant properties.
            // A subset of these should also trigger an IntelliSense config provider update.
            // Avoid unnecessary updates (for example, when settings are modified via the extension quickPick).
            let telemetryProperties = {};
            let updatedSettingsSubkeys = [];
            const keyRoot = "makefile";
            let subKey = "launchConfigurations";
            let updatedLaunchConfigurations = await util.getExpandedSetting(subKey);
            if (!util.areEqual(updatedLaunchConfigurations, launchConfigurations)) {
                // Changing a launch configuration does not impact the make or compiler tools invocations,
                // so no IntelliSense update is needed.
                await readCurrentLaunchConfiguration(); // this gets a refreshed view of all launch configurations
                // and also updates the current one in case it was affected
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "defaultLaunchConfiguration";
            let updatedDefaultLaunchConfiguration = await util.getExpandedSetting(subKey);
            if (!util.areEqual(updatedDefaultLaunchConfiguration, defaultLaunchConfiguration)) {
                // Changing a global debug configuration does not impact the make or compiler tools invocations,
                // so no IntelliSense update is needed.
                await readDefaultLaunchConfiguration();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "loggingLevel";
            let updatedLoggingLevel = await util.getExpandedSetting(subKey);
            if (updatedLoggingLevel !== loggingLevel) {
                await readLoggingLevel();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "buildLog";
            let updatedBuildLog = await util.getExpandedSetting(subKey);
            if (updatedBuildLog) {
                updatedBuildLog = util.resolvePathToRoot(updatedBuildLog);
            }
            if (updatedBuildLog !== buildLog) {
                // Configure is dirty only if the current configuration
                // doesn't have already another build log set
                // (which overrides the global one).
                let currentMakefileConfiguration = makefileConfigurations.find((k) => {
                    if (k.name === getCurrentMakefileConfiguration()) {
                        return k;
                    }
                });
                extension_1.extension.getState().configureDirty =
                    extension_1.extension.getState().configureDirty ||
                        !currentMakefileConfiguration ||
                        !currentMakefileConfiguration.buildLog;
                extension_1.extension.updateBuildLogPresent(await readBuildLog());
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "extensionOutputFolder";
            let updatedExtensionOutputFolder = await util.getExpandedSetting(subKey);
            if (updatedExtensionOutputFolder) {
                updatedExtensionOutputFolder = util.resolvePathToRoot(updatedExtensionOutputFolder);
                if (!util.checkDirectoryExistsSync(updatedExtensionOutputFolder) &&
                    !util.createDirectorySync(updatedExtensionOutputFolder)) {
                    // No logging necessary about not being able to create the directory,
                    // readExtensionOutputFolder called below will complain if it's the case.
                    updatedExtensionOutputFolder = undefined;
                }
            }
            if (updatedExtensionOutputFolder !== extensionOutputFolder) {
                // No IntelliSense update needed.
                await readExtensionOutputFolder();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "extensionLog";
            let updatedExtensionLog = await util.getExpandedSetting(subKey);
            if (updatedExtensionLog) {
                // If there is a directory defined within the extension log path,
                // honor it and don't append to extensionOutputFolder.
                let parsePath = path.parse(updatedExtensionLog);
                if (extensionOutputFolder && !parsePath.dir) {
                    updatedExtensionLog = path.join(extensionOutputFolder, updatedExtensionLog);
                }
                else {
                    updatedExtensionLog = util.resolvePathToRoot(updatedExtensionLog);
                }
            }
            if (updatedExtensionLog !== extensionLog) {
                // No IntelliSense update needed.
                await readExtensionLog();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "preConfigureScript";
            let updatedPreConfigureScript = await util.getExpandedSetting(subKey);
            if (updatedPreConfigureScript) {
                updatedPreConfigureScript = util.resolvePathToRoot(updatedPreConfigureScript);
            }
            if (updatedPreConfigureScript !== preConfigureScript) {
                // No IntelliSense update needed.
                await readPreConfigureScript();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "preConfigureArgs";
            let updatedPreConfigureArgs = await util.getExpandedSetting(subKey);
            if (updatedPreConfigureArgs &&
                !util.areEqual(updatedPreConfigureArgs, preConfigureArgs)) {
                await readPreConfigureArgs();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "postConfigureScript";
            let updatedPostConfigureScript = await util.getExpandedSetting(subKey);
            if (updatedPostConfigureScript) {
                updatedPostConfigureScript = util.resolvePathToRoot(updatedPostConfigureScript);
            }
            if (updatedPostConfigureScript !== postConfigureScript) {
                await readPostConfigureScript();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "postConfigureArgs";
            let updatedPostConfigureArgs = await util.getExpandedSetting(subKey);
            if (updatedPostConfigureArgs &&
                !util.areEqual(updatedPostConfigureArgs, postConfigureArgs)) {
                await readPostConfigureArgs();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "alwaysPreConfigure";
            let updatedAlwaysPreConfigure = await util.getExpandedSetting(subKey);
            if (updatedAlwaysPreConfigure !== alwaysPreConfigure) {
                // No IntelliSense update needed.
                await readAlwaysPreConfigure();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "alwaysPostConfigure";
            let updatedAlwaysPostConfigure = await util.getExpandedSetting(subKey);
            if (updatedAlwaysPostConfigure !== alwaysPostConfigure) {
                await readAlwaysPostConfigure();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "configurationCachePath";
            let oldConfigurationCachePath = configurationCachePath;
            await readConfigurationCachePath();
            if (oldConfigurationCachePath !== configurationCachePath) {
                // A change in makefile.configurationCachePath should trigger an IntelliSense update
                // only if the extension is not currently reading from a build log.
                extension_1.extension.getState().configureDirty =
                    extension_1.extension.getState().configureDirty ||
                        !buildLog ||
                        !util.checkFileExistsSync(buildLog);
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "makePath";
            let updatedMakePath = await util.getExpandedSetting(subKey);
            if (updatedMakePath !== makePath) {
                // Not very likely, but it is safe to consider that a different make tool
                // may produce a different dry-run output with potential impact on IntelliSense,
                // so trigger an update (unless we read from a build log).
                extension_1.extension.getState().configureDirty =
                    extension_1.extension.getState().configureDirty ||
                        !buildLog ||
                        !util.checkFileExistsSync(buildLog);
                await readMakePath();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "makefilePath";
            let updatedMakefilePath = await util.getExpandedSetting(subKey);
            if (updatedMakefilePath) {
                updatedMakefilePath = util.resolvePathToRoot(updatedMakefilePath);
            }
            if (updatedMakefilePath !== makefilePath) {
                // A change in makefile.makefilePath should trigger an IntelliSense update
                // only if the extension is not currently reading from a build log.
                extension_1.extension.getState().configureDirty =
                    extension_1.extension.getState().configureDirty ||
                        !buildLog ||
                        !util.checkFileExistsSync(buildLog);
                await readMakefilePath();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "makeDirectory";
            let updatedMakeDirectory = await util.getExpandedSetting(subKey);
            if (updatedMakeDirectory) {
                updatedMakeDirectory = util.resolvePathToRoot(updatedMakeDirectory);
            }
            if (updatedMakeDirectory !== makeDirectory) {
                // A change in makefile.makeDirectory should trigger an IntelliSense update
                // only if the extension is not currently reading from a build log.
                extension_1.extension.getState().configureDirty =
                    extension_1.extension.getState().configureDirty ||
                        !buildLog ||
                        !util.checkFileExistsSync(buildLog);
                await readMakeDirectory();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "configurations";
            let updatedMakefileConfigurations = await util.getExpandedSetting(subKey);
            if (!util.areEqual(updatedMakefileConfigurations, makefileConfigurations)) {
                // todo: skip over updating the IntelliSense configuration provider if the current makefile configuration
                // is not among the subobjects that suffered modifications.
                extension_1.extension.getState().configureDirty = true;
                await readMakefileConfigurations();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "dryrunSwitches";
            let updatedDryrunSwitches = await util.getExpandedSetting(subKey);
            if (!util.areEqual(updatedDryrunSwitches, dryrunSwitches)) {
                // A change in makefile.dryrunSwitches should trigger an IntelliSense update
                // only if the extension is not currently reading from a build log.
                extension_1.extension.getState().configureDirty =
                    extension_1.extension.getState().configureDirty ||
                        !buildLog ||
                        !util.checkFileExistsSync(buildLog);
                await readDryrunSwitches();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "additionalCompilerNames";
            let updatedAdditionalCompilerNames = await util.getExpandedSetting(subKey);
            if (!util.areEqual(updatedAdditionalCompilerNames, additionalCompilerNames)) {
                await readAdditionalCompilerNames();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "excludeCompilerNames";
            let updatedExcludeCompilerNames = await util.getExpandedSetting(subKey);
            if (!util.areEqual(updatedExcludeCompilerNames, excludeCompilerNames)) {
                await readExcludeCompilerNames();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "configureOnOpen";
            let updatedConfigureOnOpen = await util.getExpandedSetting(subKey);
            if (updatedConfigureOnOpen !== configureOnOpen) {
                await readConfigureOnOpen();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "configureOnEdit";
            let updatedConfigureOnEdit = await util.getExpandedSetting(subKey);
            if (updatedConfigureOnEdit !== configureOnEdit) {
                await readConfigureOnEdit();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "configureAfterCommand";
            let updatedConfigureAfterCommand = await util.getExpandedSetting(subKey);
            if (updatedConfigureAfterCommand !== configureAfterCommand) {
                await readConfigureAfterCommand();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "phonyOnlyTargets";
            let updatedPhonyOnlyTargets = await util.getExpandedSetting(subKey);
            if (updatedPhonyOnlyTargets !== phonyOnlyTargets) {
                await readPhonyOnlyTargets();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "saveBeforeBuildOrConfigure";
            let updatedSaveBeforeBuildOrConfigure = await util.getExpandedSetting(subKey);
            if (updatedSaveBeforeBuildOrConfigure !== saveBeforeBuildOrConfigure) {
                await readSaveBeforeBuildOrConfigure();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "buildBeforeLaunch";
            let updatedBuildBeforeLaunch = await util.getExpandedSetting(subKey);
            if (updatedBuildBeforeLaunch !== buildBeforeLaunch) {
                await readBuildBeforeLaunch();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "clearOutputBeforeBuild";
            let updatedClearOutputBeforeBuild = await util.getExpandedSetting(subKey);
            if (updatedClearOutputBeforeBuild !== clearOutputBeforeBuild) {
                await readClearOutputBeforeBuild();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "ignoreDirectoryCommands";
            let updatedIgnoreDirectoryCommands = await util.getExpandedSetting(subKey);
            if (updatedIgnoreDirectoryCommands !== ignoreDirectoryCommands) {
                await readIgnoreDirectoryCommands();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "compileCommandsPath";
            let updatedCompileCommandsPath = await util.getExpandedSetting(subKey);
            if (updatedCompileCommandsPath) {
                updatedCompileCommandsPath = util.resolvePathToRoot(updatedCompileCommandsPath);
            }
            if (updatedCompileCommandsPath !== compileCommandsPath) {
                await readCompileCommandsPath();
                updatedSettingsSubkeys.push(subKey);
            }
            subKey = "panel.visibility";
            let wasLocalDebugEnabled = isOptionalFeatureEnabled("debug");
            let wasLocalRunningEnabled = isOptionalFeatureEnabled("run");
            await readFeaturesVisibility();
            if (vscode.workspace.isTrusted) {
                enableOptionallyVisibleCommands();
            }
            let isLocalDebugEnabled = isOptionalFeatureEnabled("debug");
            let isLocalRunningEnabled = isOptionalFeatureEnabled("run");
            if (wasLocalDebugEnabled !== isLocalDebugEnabled ||
                wasLocalRunningEnabled !== isLocalRunningEnabled) {
                extension_1.extension._projectOutlineProvider.updateTree();
                updatedSettingsSubkeys.push(subKey);
            }
            // Final updates in some constructs that depend on more than one of the above settings.
            await analyzeConfigureParams();
            await extension_1.extension._projectOutlineProvider.updateMakePathInfo(getConfigurationMakeCommand());
            await extension_1.extension._projectOutlineProvider.updateMakefilePathInfo(getConfigurationMakefile());
            await extension_1.extension._projectOutlineProvider.updateBuildLogPathInfo(getConfigurationBuildLog());
            // Report all the settings changes detected by now.
            // TODO: to avoid unnecessary telemetry processing, evaluate whether the changes done
            // in the object makefile.launchConfigurations and makefile.configurations
            // apply exactly to the current launch configuration, since we don't collect and aggregate
            // information from all the array yet.
            updatedSettingsSubkeys.forEach(async (subKey) => {
                let key = keyRoot + "." + subKey;
                logger.message(`${key} setting changed.`, "Verbose");
                try {
                    // For settings that use "." in their name, make sure we send the right object
                    // to the telemetry function. Currently, the schema for such a setting
                    // is represented differently than the workspace setting value.
                    let settingObj;
                    let workspaceConfiguration = vscode.workspace.getConfiguration(keyRoot);
                    if (subKey.includes(".")) {
                        const subKeys = subKey.split(".");
                        settingObj = workspaceConfiguration;
                        subKeys.forEach((key) => {
                            settingObj = settingObj[key];
                        });
                    }
                    else {
                        settingObj = workspaceConfiguration[subKey];
                    }
                    telemetryProperties = await telemetry.analyzeSettings(settingObj, key, util.thisExtensionPackage().contributes.configuration.properties[key], false, telemetryProperties);
                }
                catch (e) {
                    logger.message(e.message);
                }
            });
            if (telemetryProperties && util.hasProperties(telemetryProperties)) {
                telemetry.logEvent("settingsChanged", telemetryProperties);
            }
        }
    });
}
exports.initFromSettings = initFromSettings;
async function setConfigurationByName(configurationName) {
    extension_1.extension.getState().buildConfiguration = configurationName;
    logger.message(`Setting configuration - ${configurationName}`);
    logger.message("Re-reading settings after configuration change.");
    await setCurrentMakefileConfiguration(configurationName);
    // Refresh settings, they may reference variables or commands reading state configuration var (${configuration}).
    await initFromSettings();
    extension_1.extension._projectOutlineProvider.updateConfiguration(configurationName);
}
exports.setConfigurationByName = setConfigurationByName;
function prepareConfigurationsQuickPick() {
    const items = makefileConfigurations.map((k) => {
        return k.name;
    });
    if (items.length === 0) {
        logger.message("No configurations defined in makefile.configurations setting.");
        items.push("Default");
    }
    return items;
}
exports.prepareConfigurationsQuickPick = prepareConfigurationsQuickPick;
// Fill a drop-down with all the configuration names defined by the user in makefile.configurations setting.
// Triggers a cpptools configuration provider update after selection.
async function setNewConfiguration() {
    // Cannot set a new makefile configuration if the project is currently building or (pre-)configuring.
    if (make.blockedByOp(make.Operations.changeConfiguration)) {
        return;
    }
    const items = prepareConfigurationsQuickPick();
    let options = {};
    options.ignoreFocusOut = true; // so that the logger and the quick pick don't compete over focus
    const chosen = await vscode.window.showQuickPick(items, options);
    if (chosen && chosen !== getCurrentMakefileConfiguration()) {
        let telemetryProperties = {
            state: "makefileConfiguration",
        };
        telemetry.logEvent("stateChanged", telemetryProperties);
        await setConfigurationByName(chosen);
        if (configureAfterCommand) {
            logger.message("Automatically reconfiguring the project after a makefile configuration change.");
            await make.cleanConfigure(make.TriggeredBy.configureAfterConfigurationChange);
        }
        // Refresh telemetry for this new makefile configuration
        // (this will find the corresponding item in the makefile.configurations array
        // and report all the relevant settings of that object).
        // Because of this, the event name is still "settingsChanged", even if
        // we're doing a state change now.
        let keyRoot = "makefile";
        let subKey = "configurations";
        let key = keyRoot + "." + subKey;
        let workspaceConfiguration = vscode.workspace.getConfiguration(keyRoot);
        telemetryProperties = {};
        // We should have at least one item in the configurations array
        // if the extension changes state for launch configuration,
        // but guard just in case.
        let makefileonfigurationSetting = workspaceConfiguration[subKey];
        if (makefileonfigurationSetting) {
            try {
                telemetryProperties = await telemetry.analyzeSettings(makefileonfigurationSetting, key, util.thisExtensionPackage().contributes.configuration.properties[key], true, telemetryProperties);
            }
            catch (e) {
                logger.message(e.message);
            }
            if (telemetryProperties && util.hasProperties(telemetryProperties)) {
                telemetry.logEvent("settingsChanged", telemetryProperties);
            }
        }
    }
}
exports.setNewConfiguration = setNewConfiguration;
async function setTargetByName(targetName) {
    currentTarget = targetName;
    let displayTarget = targetName ? currentTarget : "Default";
    statusBar.setTarget(displayTarget);
    logger.message(`Setting target ${displayTarget}`);
    logger.message("Re-reading settings after target change.");
    // Refresh settings, they may reference variables or commands reading state target var (${buildTarget}).
    extension_1.extension.getState().buildTarget = currentTarget;
    await initFromSettings();
    extension_1.extension._projectOutlineProvider.updateBuildTarget(targetName);
}
exports.setTargetByName = setTargetByName;
// Fill a drop-down with all the target names run by building the makefile for the current configuration
// Triggers a cpptools configuration provider update after selection.
// TODO: change the UI list to multiple selections mode and store an array of current active targets
async function selectTarget() {
    // Cannot select a new target if the project is currently building or (pre-)configuring.
    if (make.blockedByOp(make.Operations.changeBuildTarget)) {
        return;
    }
    // warn about an out of date configure state and configure if makefile.configureAfterCommand allows.
    if (extension_1.extension.getState().configureDirty ||
        // The configure state might not be dirty from the last session but if the project is set to skip
        // configure on open and no configure happened yet we still must warn.
        (configureOnOpen === false && !extension_1.extension.getCompletedConfigureInSession())) {
        logger.message("The project needs a configure to populate the build targets correctly.");
        if (configureAfterCommand) {
            let retc = await make.configure(make.TriggeredBy.configureBeforeTargetChange);
            if (retc !== make.ConfigureBuildReturnCodeTypes.success) {
                logger.message("The build targets list may not be accurate because configure failed.");
            }
        }
    }
    let options = {};
    options.ignoreFocusOut = true; // so that the logger and the quick pick don't compete over focus
    // Ensure "all" is always available as a target to select.
    // There are scenarios when "all" might not be present in the list of available targets,
    // for example when the extension is using a build log or dryrun cache of a previous state
    // when a particular target was selected and a dryrun applied on that is producing a subset of targets,
    // making it impossible to select "all" back again without resetting the Makefile Tools state
    // or switching to a different makefile configuration or implementing an editable target quick pick.
    // Another situation where "all" would inconveniently miss from the quick pick is when the user is
    // providing a build log without the required verbosity for parsing targets (-p or --print-data-base switches).
    // When the extension is not reading from build log or dryrun cache, we have logic to prevent
    // "all" from getting lost: make sure the target is not appended to the make invocation
    // whose output is used to parse the targets (as opposed to parsing for IntelliSense or launch targets
    // when the current target must be appended to the make command).
    if (!buildTargets.includes("all")) {
        buildTargets.push("all");
    }
    const chosen = await vscode.window.showQuickPick(buildTargets, options);
    if (chosen && chosen !== getCurrentTarget()) {
        const telemetryProperties = {
            state: "buildTarget",
        };
        telemetry.logEvent("stateChanged", telemetryProperties);
        await setTargetByName(chosen);
        if (configureAfterCommand) {
            // The set of build targets remains the same even if the current target has changed
            logger.message("Automatically reconfiguring the project after a build target change.");
            await make.cleanConfigure(make.TriggeredBy.configureAfterTargetChange, false);
        }
    }
}
exports.selectTarget = selectTarget;
// The 'name' of a launch configuration is a string following this syntax:
//    [cwd]>[binaryPath](binaryArg1,binaryArg2,...)
// These strings are found by the extension while parsing the output of the dry-run or build log,
// which reflect possible different ways of running the binaries built by the makefile.
// TODO: If we find that these strings are not unique (meaning the makefile may invoke
// the given binary in the exact same way more than once), incorporate also the containing target
// name in the syntax (or, since in theory one can write a makefile target to run the same binary
// in the same way more than once, add some number suffix).
async function setLaunchConfigurationByName(launchConfigurationName) {
    // Find the matching entry in the array of launch configurations
    // or generate a new entry in settings if none are found.
    currentLaunchConfiguration = getLaunchConfiguration(launchConfigurationName);
    if (!currentLaunchConfiguration) {
        currentLaunchConfiguration = await stringToLaunchConfiguration(launchConfigurationName);
        if (currentLaunchConfiguration) {
            // Read again all launch configurations from settings, so that we push this incoming into that array as well
            // because we want to persist the original unexpanded content of launch configurations.
            let workspaceConfiguration = vscode.workspace.getConfiguration("makefile");
            let launchConfigAsInSettings = workspaceConfiguration.get("launchConfigurations") || [];
            launchConfigAsInSettings.push(currentLaunchConfiguration);
            // Push into the processed 'in-memory' launch configurations array as well.
            launchConfigurations.push(currentLaunchConfiguration);
            await workspaceConfiguration.update("launchConfigurations", launchConfigAsInSettings);
            logger.message(`Inserting a new entry for ${launchConfigurationName} in the array of makefile.launchConfigurations. ` +
                "You may define any additional debug properties for it in settings.");
        }
    }
    if (currentLaunchConfiguration) {
        logger.message(`Setting current launch target "${launchConfigurationName}"`);
        extension_1.extension.getState().launchConfiguration = launchConfigurationName;
        statusBar.setLaunchConfiguration(launchConfigurationName);
    }
    else {
        if (launchConfigurationName === "") {
            logger.message("Unsetting the current launch configuration.");
        }
        else {
            logger.message(`A problem occured while analyzing launch configuration name ${launchConfigurationName}. Current launch configuration is unset.`);
        }
        extension_1.extension.getState().launchConfiguration = undefined;
        statusBar.setLaunchConfiguration("No launch configuration set");
    }
    // Refresh settings, they may reference variables or commands reading launch targets commands: ${command:makefile.getLaunchTargetPath} and others...
    logger.message("Re-reading settings after launch target change.");
    await initFromSettings();
    await extension_1.extension._projectOutlineProvider.updateLaunchTarget(launchConfigurationName);
}
exports.setLaunchConfigurationByName = setLaunchConfigurationByName;
// Fill a drop-down with all the launch configurations found for binaries built by the makefile
// under the scope of the current build configuration and target
// Selection updates current launch configuration that will be ready for the next debug/run operation
async function selectLaunchConfiguration() {
    // Cannot select a new launch configuration if the project is currently building or (pre-)configuring.
    if (make.blockedByOp(make.Operations.changeLaunchTarget)) {
        return;
    }
    // warn about an out of date configure state and configure if makefile.configureAfterCommand allows.
    if (extension_1.extension.getState().configureDirty ||
        // The configure state might not be dirty from the last session but if the project is set to skip
        // configure on open and no configure happened yet we still must warn.
        (configureOnOpen === false && !extension_1.extension.getCompletedConfigureInSession())) {
        logger.message("The project needs a configure to populate the launch targets correctly.");
        if (configureAfterCommand) {
            let retc = await make.configure(make.TriggeredBy.configureBeforeLaunchTargetChange);
            if (retc !== make.ConfigureBuildReturnCodeTypes.success) {
                logger.message("The launch targets list may not be accurate because configure failed.");
            }
        }
    }
    // TODO: create a quick pick with description and details for items
    // to better view the long targets commands
    // In the quick pick, include also any makefile.launchConfigurations entries,
    // as long as they exist on disk and without allowing duplicates.
    let launchTargetsNames = [...launchTargets];
    launchConfigurations.forEach((launchConfiguration) => {
        if (util.checkFileExistsSync(launchConfiguration.binaryPath)) {
            launchTargetsNames.push(launchConfigurationToString(launchConfiguration));
        }
    });
    launchTargetsNames = util.sortAndRemoveDuplicates(launchTargetsNames);
    let options = {};
    options.ignoreFocusOut = true; // so that the logger and the quick pick don't compete over focus
    if (launchTargets.length === 0) {
        options.placeHolder = "No launch targets identified";
    }
    const chosen = await vscode.window.showQuickPick(launchTargetsNames, options);
    if (chosen) {
        let currentLaunchConfiguration = getCurrentLaunchConfiguration();
        if (!currentLaunchConfiguration ||
            chosen !== launchConfigurationToString(currentLaunchConfiguration)) {
            let telemetryProperties = {
                state: "launchConfiguration",
            };
            telemetry.logEvent("stateChanged", telemetryProperties);
            await setLaunchConfigurationByName(chosen);
            // Refresh telemetry for this new launch configuration
            // (this will find the corresponding item in the makefile.launchConfigurations array
            // and report all the relevant settings of that object).
            // Because of this, the event name is still "settingsChanged", even if
            // we're doing a state change now.
            let keyRoot = "makefile";
            let subKey = "launchConfigurations";
            let key = keyRoot + "." + subKey;
            let workspaceConfiguration = vscode.workspace.getConfiguration(keyRoot);
            telemetryProperties = {};
            // We should have at least one item in the launchConfigurations array
            // if the extension changes state for launch configuration,
            // but guard just in case.
            let launchConfigurationSetting = workspaceConfiguration[subKey];
            if (launchConfigurationSetting) {
                try {
                    telemetryProperties = await telemetry.analyzeSettings(launchConfigurationSetting, key, util.thisExtensionPackage().contributes.configuration.properties[key], true, telemetryProperties);
                }
                catch (e) {
                    logger.message(e.message);
                }
                if (telemetryProperties && util.hasProperties(telemetryProperties)) {
                    telemetry.logEvent("settingsChanged", telemetryProperties);
                }
            }
        }
    }
}
exports.selectLaunchConfiguration = selectLaunchConfiguration;
// List of targets defined in the makefile project.
// Parsed from the build log, configuration cache or live dry-run output at configure time.
// Currently, this list contains any abstract intermediate target
// (like any object produced by the compiler from a source code file).
// TODO: filter only the relevant targets (binaries, libraries, etc...) from this list.
let buildTargets = [];
function getBuildTargets() {
    return buildTargets;
}
exports.getBuildTargets = getBuildTargets;
function setBuildTargets(targets) {
    buildTargets = targets;
}
exports.setBuildTargets = setBuildTargets;
// List of all the binaries built by the current project and all the ways
// they may be invoked (from what cwd, with what arguments).
// This is parsed from the build log, configuration cache or live dry-run output at configure time.
// This is what populates the 'launch targets' quick pick and is different than the
// launch configurations defined in settings.
// A launch configuration extends a launch target with various debugger settings.
// Each launch configuration entry is written in settings by the extension
// when the user actively selects any launch target from the quick pick.
// Then the user can add any of the provided extra attributes (miMode, miDebuggerPath, etc...)
// under that entry. It is possible that not all launch targets have a launch configuration counterpart,
// but if they do it is only one. Technically, we can imagine one launch target may have
// more than one launch configurations defined in settings (same binary, location and arguments debugged
// with different scenarios)) but this is not yet supported because currently the launch configurations
// are uniquely referenced by a string formed by cwd, binary and args (which form a launch target).
// The quick pick is not populated by the launch configurations list because its entries may be
// out of date and most importantly a subset. We want the quick pick to reflect all the possibilities
// that are found available with the current configuration of the project.
let launchTargets = [];
function getLaunchTargets() {
    return launchTargets;
}
exports.getLaunchTargets = getLaunchTargets;
function setLaunchTargets(targets) {
    launchTargets = targets;
}
exports.setLaunchTargets = setLaunchTargets;


/***/ }),

/***/ 584:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CppConfigurationProvider = void 0;
// Support for integration with CppTools Custom Configuration Provider
const configuration = __webpack_require__(184);
const logger = __webpack_require__(900);
const make = __webpack_require__(636);
const path = __webpack_require__(72);
const util = __webpack_require__(168);
class CppConfigurationProvider {
    constructor() {
        this.name = "Makefile Tools";
        this.extensionId = "ms-vscode.makefile-tools";
        this.workspaceBrowseConfiguration = {
            browsePath: [],
        };
        this.fileIndex = new Map();
    }
    getConfiguration(uri) {
        let norm_path = path.normalize(uri.fsPath);
        if (process.platform === "win32") {
            norm_path = norm_path.toUpperCase();
        }
        // First look in the file index computed during the last configure.
        // If nothing is found and there is a configure running right now,
        // try also the temporary index of the current configure.
        let sourceFileConfiguration = this.fileIndex.get(norm_path);
        if (!sourceFileConfiguration && make.getIsConfiguring()) {
            sourceFileConfiguration = make
                .getDeltaCustomConfigurationProvider()
                .fileIndex.get(norm_path);
            logger.message(`Configuration for file ${norm_path} was not found. Searching in the current configure temporary file index.`);
        }
        if (!sourceFileConfiguration) {
            logger.message(`Configuration for file ${norm_path} was not found. CppTools will set a default configuration.`);
        }
        return sourceFileConfiguration;
    }
    async canProvideConfiguration(uri) {
        return !!this.getConfiguration(uri);
    }
    async provideConfigurations(uris) {
        return util.dropNulls(uris.map((u) => this.getConfiguration(u)));
    }
    // Used when saving all the computed configurations into a cache.
    getCustomConfigurationProvider() {
        let provider = {
            fileIndex: this.fileIndex,
            workspaceBrowse: this.workspaceBrowseConfiguration,
        };
        return provider;
    }
    // Used to reset all the configurations with what was previously cached.
    setCustomConfigurationProvider(provider) {
        this.fileIndex = provider.fileIndex;
        this.workspaceBrowseConfiguration = provider.workspaceBrowse;
    }
    // Used to merge a new set of configurations on top of what was calculated during the previous configure.
    // If this is clean configure, clear all the arrays before the merge.
    mergeCustomConfigurationProvider(provider) {
        var _a;
        if (make.getConfigureIsClean()) {
            this.fileIndex.clear();
            this.workspaceBrowseConfiguration = {
                browsePath: [],
                compilerArgs: [],
                compilerPath: undefined,
                standard: undefined,
                windowsSdkVersion: undefined,
            };
        }
        let map = this.fileIndex;
        provider.fileIndex.forEach(function (value, key) {
            map.set(key, value);
        });
        this.workspaceBrowseConfiguration = {
            browsePath: util.sortAndRemoveDuplicates(this.workspaceBrowseConfiguration.browsePath.concat(provider.workspaceBrowse.browsePath)),
            compilerArgs: (_a = this.workspaceBrowseConfiguration.compilerArgs) === null || _a === void 0 ? void 0 : _a.concat(provider.workspaceBrowse.compilerArgs || []),
            compilerPath: provider.workspaceBrowse.compilerPath,
            standard: provider.workspaceBrowse.standard,
            windowsSdkVersion: provider.workspaceBrowse.windowsSdkVersion,
        };
    }
    async canProvideBrowseConfiguration() {
        return this.workspaceBrowseConfiguration.browsePath.length > 0;
    }
    async canProvideBrowseConfigurationsPerFolder() {
        return false;
    }
    async provideFolderBrowseConfiguration(_uri) {
        if (_uri.fsPath !== util.getWorkspaceRoot()) {
            logger.message("Makefile Tools supports single root for now.");
        }
        return this.workspaceBrowseConfiguration;
    }
    async provideBrowseConfiguration() {
        return this.workspaceBrowseConfiguration;
    }
    setBrowseConfiguration(browseConfiguration) {
        this.workspaceBrowseConfiguration = browseConfiguration;
    }
    dispose() { }
    logConfigurationProviderBrowse() {
        var _a;
        logger.message("Sending Workspace Browse Configuration: -----------------------------------", "Verbose");
        logger.message("    Browse Path: " +
            this.workspaceBrowseConfiguration.browsePath.join(";"), "Verbose");
        logger.message("    Standard: " + this.workspaceBrowseConfiguration.standard, "Verbose");
        logger.message("    Compiler Path: " + this.workspaceBrowseConfiguration.compilerPath, "Verbose");
        logger.message("    Compiler Arguments: " +
            ((_a = this.workspaceBrowseConfiguration.compilerArgs) === null || _a === void 0 ? void 0 : _a.join(";")), "Verbose");
        if (process.platform === "win32" &&
            this.workspaceBrowseConfiguration.windowsSdkVersion) {
            logger.message("    Windows SDK Version: " +
                this.workspaceBrowseConfiguration.windowsSdkVersion, "Verbose");
        }
        logger.message("----------------------------------------------------------------------------", "Verbose");
    }
    logConfigurationProviderItem(filePath, fromCache = false) {
        var _a;
        let uriObj = filePath.uri;
        logger.message("Sending configuration " +
            (fromCache ? "(from cache) " : "") +
            "for file " +
            uriObj.fsPath +
            " -----------------------------------", "Normal");
        logger.message("    Defines: " + filePath.configuration.defines.join(";"), "Verbose");
        logger.message("    Includes: " + filePath.configuration.includePath.join(";"), "Verbose");
        if (filePath.configuration.forcedInclude) {
            logger.message("    Force Includes: " + filePath.configuration.forcedInclude.join(";"), "Verbose");
        }
        logger.message("    Standard: " + filePath.configuration.standard, "Verbose");
        logger.message("    IntelliSense Mode: " + filePath.configuration.intelliSenseMode, "Verbose");
        logger.message("    Compiler Path: " + filePath.configuration.compilerPath, "Verbose");
        logger.message("    Compiler Arguments: " +
            ((_a = filePath.configuration.compilerArgs) === null || _a === void 0 ? void 0 : _a.join(";")), "Verbose");
        if (process.platform === "win32" &&
            filePath.configuration.windowsSdkVersion) {
            logger.message("    Windows SDK Version: " + filePath.configuration.windowsSdkVersion, "Verbose");
        }
        logger.message("---------------------------------------------------------------------------------------------------", "Verbose");
    }
    logConfigurationProviderComplete() {
        if (configuration.getLoggingLevel() !== "Normal") {
            this.logConfigurationProviderBrowse();
            this.fileIndex.forEach((filePath) => {
                // logConfigurationProviderComplete is called (so far) only after loading
                // the configurations from cache, so mark the boolean to be able to distinguish
                // the log entries in case of interleaved output.
                this.logConfigurationProviderItem(filePath, true);
            });
        }
    }
}
exports.CppConfigurationProvider = CppConfigurationProvider;


/***/ }),

/***/ 171:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = exports.MakefileToolsExtension = exports.extension = void 0;
// Makefile Tools extension
const configuration = __webpack_require__(184);
const cpptools = __webpack_require__(584);
const launch = __webpack_require__(492);
const fs_1 = __webpack_require__(58);
const make = __webpack_require__(636);
const path = __webpack_require__(72);
const state = __webpack_require__(696);
const telemetry = __webpack_require__(564);
const tree = __webpack_require__(248);
const ui = __webpack_require__(736);
const util = __webpack_require__(168);
const vscode = __webpack_require__(304);
const cpp = __webpack_require__(64);
const nls = __webpack_require__(892);
nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
})((__webpack_require__(72).join)(__dirname, 'src\\extension.ts'));
const localize = nls.loadMessageBundle((__webpack_require__(72).join)(__dirname, 'src\\extension.ts'));
let statusBar = ui.getUI();
let launcher = launch.getLauncher();
class MakefileToolsExtension {
    getCppConfigurationProvider() {
        return this.cppConfigurationProvider;
    }
    constructor(extensionContext) {
        this.extensionContext = extensionContext;
        this._projectOutlineProvider = new tree.ProjectOutlineProvider();
        this._projectOutlineTreeView = vscode.window.createTreeView("makefile.outline", {
            treeDataProvider: this._projectOutlineProvider,
            showCollapseAll: false,
        });
        this.cppConfigurationProvider = new cpptools.CppConfigurationProvider();
        this.mementoState = new state.StateManager(this.extensionContext);
        this.fullFeatureSet = false;
        // Used for calling cppToolsAPI.notifyReady only once in a VSCode session.
        this.ranNotifyReadyInSession = false;
        // Similar to state.ranConfigureInCodebaseLifetime, but at the scope of a VSCode session
        this.completedConfigureInSession = false;
        this.cummulativeBrowsePath = [];
    }
    updateBuildLogPresent(newValue) {
        vscode.commands.executeCommand("setContext", "makefile.buildLogFilePresent", newValue);
    }
    updateMakefileFilePresent(newValue) {
        vscode.commands.executeCommand("setContext", "makefile.makefileFilePresent", newValue);
    }
    getState() {
        return this.mementoState;
    }
    dispose() {
        this._projectOutlineTreeView.dispose();
        if (this.cppToolsAPI) {
            this.cppToolsAPI.dispose();
        }
    }
    getFullFeatureSet() {
        return this.fullFeatureSet;
    }
    async setFullFeatureSet(newValue) {
        await vscode.commands.executeCommand("setContext", "makefile:fullFeatureSet", newValue);
        this.fullFeatureSet = newValue;
    }
    getRanNotifyReadyInSession() {
        return this.ranNotifyReadyInSession;
    }
    setRanNotifyReadyInSession(ran) {
        this.ranNotifyReadyInSession = ran;
    }
    getCompletedConfigureInSession() {
        return this.completedConfigureInSession;
    }
    setCompletedConfigureInSession(completed) {
        this.completedConfigureInSession = completed;
    }
    // Register this extension as a new provider or request an update
    async registerCppToolsProvider() {
        await this.ensureCppToolsProviderRegistered();
        // Call notifyReady earlier than when the provider is updated,
        // as soon as we know that we are going to actually parse for IntelliSense.
        // This allows CppTools to ask earlier about source files in use
        // and Makefile Tools may return a targeted source file configuration
        // if it was already computed in our internal arrays (make.ts: customConfigProviderItems).
        // If the requested file isn't yet processed, it will get updated when configure is finished.
        // TODO: remember all requests that are coming and send an update as soon as we detect
        // any of them being pushed into make.customConfigProviderItems.
        if (this.cppToolsAPI) {
            if (!this.ranNotifyReadyInSession && this.cppToolsAPI.notifyReady) {
                this.cppToolsAPI.notifyReady(this.cppConfigurationProvider);
                this.setRanNotifyReadyInSession(true);
            }
        }
    }
    // Request a custom config provider update.
    updateCppToolsProvider() {
        this.cppConfigurationProvider.logConfigurationProviderBrowse();
        if (this.cppToolsAPI) {
            this.cppToolsAPI.didChangeCustomConfiguration(this.cppConfigurationProvider);
        }
    }
    ensureCppToolsProviderRegistered() {
        // make sure this extension is registered as provider only once
        if (!this.cppConfigurationProviderRegister) {
            this.cppConfigurationProviderRegister = this.registerCppTools();
        }
        return this.cppConfigurationProviderRegister;
    }
    getCppToolsVersion() {
        var _a;
        return (_a = this.cppToolsAPI) === null || _a === void 0 ? void 0 : _a.getVersion();
    }
    async registerCppTools() {
        if (!this.cppToolsAPI) {
            this.cppToolsAPI = await cpp.getCppToolsApi(cpp.Version.v6);
        }
        if (this.cppToolsAPI) {
            this.cppToolsAPI.registerCustomConfigurationProvider(this.cppConfigurationProvider);
        }
    }
    clearCummulativeBrowsePath() {
        this.cummulativeBrowsePath = [];
    }
    buildCustomConfigurationProvider(customConfigProviderItem) {
        this.compilerFullPath = customConfigProviderItem.compilerFullPath;
        let provider = make.getDeltaCustomConfigurationProvider();
        const configuration = {
            defines: customConfigProviderItem.defines,
            standard: customConfigProviderItem.standard,
            includePath: customConfigProviderItem.includes,
            forcedInclude: customConfigProviderItem.forcedIncludes,
            intelliSenseMode: customConfigProviderItem.intelliSenseMode,
            compilerPath: customConfigProviderItem.compilerFullPath,
            compilerArgs: customConfigProviderItem.compilerArgs,
            windowsSdkVersion: customConfigProviderItem.windowsSDKVersion,
        };
        // cummulativeBrowsePath incorporates all the files and the includes paths
        // of all the compiler invocations of the current configuration
        customConfigProviderItem.files.forEach((filePath) => {
            let uri = vscode.Uri.file(filePath);
            let sourceFileConfigurationItem = {
                uri,
                configuration,
                compileCommand: {
                    command: customConfigProviderItem.line,
                    directory: customConfigProviderItem.currentPath,
                    file: filePath,
                },
            };
            // These are the configurations processed during the current configure.
            // Store them in the 'delta' file index instead of the final one.
            provider.fileIndex.set(path.normalize(process.platform === "win32" ? uri.fsPath.toUpperCase() : uri.fsPath), sourceFileConfigurationItem);
            exports.extension
                .getCppConfigurationProvider()
                .logConfigurationProviderItem(sourceFileConfigurationItem);
            let folder = path.dirname(filePath);
            if (!this.cummulativeBrowsePath.includes(folder)) {
                this.cummulativeBrowsePath.push(folder);
            }
        });
        customConfigProviderItem.includes.forEach((incl) => {
            if (!this.cummulativeBrowsePath.includes(incl)) {
                this.cummulativeBrowsePath.push(incl);
            }
        });
        customConfigProviderItem.forcedIncludes.forEach((fincl) => {
            let folder = path.dirname(fincl);
            if (!this.cummulativeBrowsePath.includes(folder)) {
                this.cummulativeBrowsePath.push(fincl);
            }
        });
        provider.workspaceBrowse = {
            browsePath: this.cummulativeBrowsePath,
            standard: customConfigProviderItem.standard,
            compilerPath: customConfigProviderItem.compilerFullPath,
            compilerArgs: customConfigProviderItem.compilerArgs,
            windowsSdkVersion: customConfigProviderItem.windowsSDKVersion,
        };
        make.setCustomConfigurationProvider(provider);
    }
    getCompilerFullPath() {
        return this.compilerFullPath;
    }
}
exports.MakefileToolsExtension = MakefileToolsExtension;
async function activate(context) {
    if (process.env["MAKEFILE_TOOLS_TESTING"] === "1") {
        await vscode.commands.executeCommand("setContext", "makefile:testing", true);
    }
    else {
        await vscode.commands.executeCommand("setContext", "makefile:testing", false);
    }
    statusBar = ui.getUI();
    exports.extension = new MakefileToolsExtension(context);
    configuration.disableAllOptionallyVisibleCommands();
    await exports.extension.setFullFeatureSet(false);
    telemetry.activate();
    context.subscriptions.push(vscode.commands.registerCommand("makefile.setBuildConfiguration", async () => {
        await configuration.setNewConfiguration();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.getConfiguration", async () => {
        telemetry.logEvent("getConfiguration");
        return configuration.getCurrentMakefileConfiguration();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.setBuildTarget", async () => {
        await configuration.selectTarget();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.getBuildTarget", async () => {
        telemetry.logEvent("getBuildTarget");
        return configuration.getCurrentTarget() || "";
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.buildTarget", async () => {
        await make.buildTarget(make.TriggeredBy.buildTarget, configuration.getCurrentTarget() || "", false);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.buildCleanTarget", async () => {
        await make.buildTarget(make.TriggeredBy.buildCleanTarget, configuration.getCurrentTarget() || "", true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.buildAll", async () => {
        await make.buildTarget(make.TriggeredBy.buildAll, "all", false);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.buildCleanAll", async () => {
        await make.buildTarget(make.TriggeredBy.buildCleanAll, "all", true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.setLaunchConfiguration", async () => {
        await configuration.selectLaunchConfiguration();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.launchDebug", async () => {
        await launcher.debugCurrentTarget();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.launchRun", async () => {
        await launcher.runCurrentTarget();
    }));
    /** Start of commands that shouldn't be exposed in package.json, they are used for command substitution in launch.json and tasks.json.  */
    context.subscriptions.push(vscode.commands.registerCommand("makefile.getLaunchTargetPath", () => {
        telemetry.logEvent("getLaunchTargetPath");
        return launcher.getLaunchTargetPath();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.launchTargetPath", () => {
        telemetry.logEvent("launchTargetPath");
        return launcher.launchTargetPath();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.getLaunchTargetDirectory", () => {
        telemetry.logEvent("getLaunchTargetDirectory");
        return launcher.getLaunchTargetDirectory();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.getLaunchTargetFileName", () => {
        telemetry.logEvent("getLaunchTargetFileName");
        return launcher.getLaunchTargetFileName();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.launchTargetFileName", () => {
        telemetry.logEvent("launchTargetFileName");
        return launcher.launchTargetFileName();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.getLaunchTargetArgs", () => {
        telemetry.logEvent("getLaunchTargetArgs");
        return launcher.getLaunchTargetArgs();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.getLaunchTargetArgsConcat", () => {
        telemetry.logEvent("getLaunchTargetArgsConcat");
        return launcher.getLaunchTargetArgsConcat();
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.makeBaseDirectory", () => {
        telemetry.logEvent("makeBaseDirectory");
        return configuration.makeBaseDirectory();
    }));
    /** End of commands that shouldn't be exposed in package.json, they are used for command substitution in launch.json and tasks.json. */
    context.subscriptions.push(vscode.commands.registerCommand("makefile.configure", async () => {
        await make.configure(make.TriggeredBy.configure);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.cleanConfigure", async () => {
        await make.cleanConfigure(make.TriggeredBy.cleanConfigure);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.preConfigure", async () => {
        await make.preConfigure(make.TriggeredBy.preconfigure);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.postConfigure", async () => {
        await make.postConfigure(make.TriggeredBy.postConfigure);
    }));
    // Reset state - useful for troubleshooting.
    context.subscriptions.push(vscode.commands.registerCommand("makefile.resetState", (reload) => {
        telemetry.logEvent("commandResetState");
        exports.extension.getState().reset(reload);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.configure", () => {
        return vscode.commands.executeCommand("makefile.configure");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.cleanConfigure", () => {
        return vscode.commands.executeCommand("makefile.cleanConfigure");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.preConfigure", () => {
        return vscode.commands.executeCommand("makefile.preConfigure");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.postConfigure", () => {
        return vscode.commands.executeCommand("makefile.postConfigure");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.setLaunchConfiguration", () => {
        return vscode.commands.executeCommand("makefile.setLaunchConfiguration");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.launchDebug", () => {
        return vscode.commands.executeCommand("makefile.launchDebug");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.launchRun", () => {
        return vscode.commands.executeCommand("makefile.launchRun");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.setBuildTarget", () => {
        return vscode.commands.executeCommand("makefile.setBuildTarget");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.buildTarget", () => {
        return vscode.commands.executeCommand("makefile.buildTarget");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.buildCleanTarget", () => {
        return vscode.commands.executeCommand("makefile.buildCleanTarget");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.setBuildConfiguration", () => {
        return vscode.commands.executeCommand("makefile.setBuildConfiguration");
    }));
    // Read from the workspace state before reading from settings,
    // becase the latter may use state info in variable expansion.
    configuration.initFromState();
    await configuration.initFromSettings(true);
    const openSettings = async (setting) => {
        await vscode.commands.executeCommand("workbench.action.openSettings", setting);
        await vscode.commands.executeCommand("workbench.action.openWorkspaceSettings");
    };
    const openFile = async (fileUri) => {
        await vscode.commands.executeCommand("vscode.open", fileUri);
        await vscode.commands.executeCommand("workbench.files.action.showActiveFileInExplorer");
    };
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.openMakefilePathSetting", async () => {
        await openSettings("makefile.makefilePath");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.openMakefileFile", async () => {
        const makefile = configuration.getConfigurationMakefile();
        if (makefile) {
            if (util.checkFileExistsSync(makefile)) {
                await openFile(vscode.Uri.file(makefile));
            }
            else {
                exports.extension.updateMakefileFilePresent(false);
                vscode.window.showErrorMessage(localize(0, null));
            }
        }
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.openMakePathSetting", async () => {
        await openSettings("makefile.makePath");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.openBuildLogSetting", async () => {
        await openSettings("makefile.buildLog");
    }));
    context.subscriptions.push(vscode.commands.registerCommand("makefile.outline.openBuildLogFile", async () => {
        const buildLog = configuration.getBuildLog();
        if (buildLog) {
            if (util.checkFileExistsSync(buildLog)) {
                await openFile(vscode.Uri.file(buildLog));
            }
            else {
                exports.extension.updateBuildLogPresent(false);
                vscode.window.showErrorMessage(localize(1, null));
            }
        }
    }));
    // === Commands only for testing ===
    // commands that are not exposed via package.json and are used only for testing.
    // TODO: In the future, we should refactor such that our tests can use already exposed commands, and/or refactor so
    // that some of our tests that are more unit-like tests can be done with direct dependencies on the code.
    if (process.env["MAKEFILE_TOOLS_TESTING"] === "1") {
        context.subscriptions.push(vscode.commands.registerCommand("makefile.setBuildConfigurationByName", async (name) => {
            await configuration.setConfigurationByName(name);
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.setPreconfigureScriptByPath", async (path) => {
            await configuration.setPreConfigureScript(path);
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.setTargetByName", async (name) => {
            await configuration.setTargetByName(name);
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.setLaunchConfigurationByName", async (name) => {
            await configuration.setLaunchConfigurationByName(name);
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.validateLaunchConfiguration", async () => {
            return await launch
                .getLauncher()
                .validateLaunchConfiguration(make.Operations.debug);
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.getCurrentLaunchConfiguration", async () => {
            return configuration.getCurrentLaunchConfiguration();
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.prepareDebugAndRunCurrentTarget", async (launchConfiguration) => {
            launch.getLauncher().prepareDebugCurrentTarget(launchConfiguration);
            launch.getLauncher().prepareRunCurrentTarget();
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.prepareBuildTarget", async (target) => {
            make.prepareBuildTarget(target);
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.testResetState", async () => {
            await configuration.setCurrentLaunchConfiguration(undefined);
            await configuration.setCurrentMakefileConfiguration("Default");
            configuration.setCurrentTarget(undefined);
            configuration.initFromState();
            await configuration.initFromSettings();
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.getExpandedSettingValue", async (key, value) => {
            await util.getExpandedSettingVal(key, value);
        }));
        context.subscriptions.push(vscode.commands.registerCommand("makefile.expandVariablesInSetting", async (key, value) => {
            return util.expandVariablesInSetting(key, value);
        }));
    }
    // === Commands only for testing ===
    const parseCompilerArgsScript = util.parseCompilerArgsScriptFile();
    // The extension VSIX stripped the executable bit, so we need to set it.
    // 0x755 means rwxr-xr-x (read and execute for everyone, write for owner).
    await fs_1.promises.chmod(parseCompilerArgsScript, 0o755);
    if (configuration.getConfigureOnOpen() && exports.extension.getFullFeatureSet()) {
        // Always clean configure on open
        await make.cleanConfigure(make.TriggeredBy.cleanConfigureOnOpen);
    }
    // Analyze settings for type validation and telemetry
    let workspaceConfiguration = vscode.workspace.getConfiguration("makefile");
    let telemetryProperties = {};
    try {
        telemetryProperties = await telemetry.analyzeSettings(workspaceConfiguration, "makefile", util.thisExtensionPackage().contributes.configuration.properties, true, telemetryProperties);
    }
    catch (e) {
        telemetry.telemetryLogger(e.message);
    }
    if (telemetryProperties && util.hasProperties(telemetryProperties)) {
        telemetry.logEvent("settings", telemetryProperties);
    }
}
exports.activate = activate;
async function deactivate() {
    vscode.window.showInformationMessage(localize(2, null, "'vscode-makefile-tools'"));
    await telemetry.deactivate();
    const items = [exports.extension, launcher, statusBar];
    for (const item of items) {
        if (item) {
            item.dispose();
        }
    }
}
exports.deactivate = deactivate;


/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLauncher = exports.Launcher = exports.LaunchStatuses = void 0;
// Launch support: debug and run in terminal
const configuration = __webpack_require__(184);
const extension = __webpack_require__(171);
const logger = __webpack_require__(900);
const make = __webpack_require__(636);
const path = __webpack_require__(72);
const telemetry = __webpack_require__(564);
const util = __webpack_require__(168);
const vscode = __webpack_require__(304);
const nls = __webpack_require__(892);
nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
})((__webpack_require__(72).join)(__dirname, 'src\\launch.ts'));
const localize = nls.loadMessageBundle((__webpack_require__(72).join)(__dirname, 'src\\launch.ts'));
var LaunchStatuses;
(function (LaunchStatuses) {
    LaunchStatuses["success"] = "success";
    LaunchStatuses["blocked"] = "blocked by (pre)configure or build";
    LaunchStatuses["noLaunchConfigurationSet"] = "no launch configuration set by the user";
    LaunchStatuses["launchTargetsListEmpty"] = "launch targets list empty";
    LaunchStatuses["buildFailed"] = "build failed";
})(LaunchStatuses = exports.LaunchStatuses || (exports.LaunchStatuses = {}));
let launcher;
class Launcher {
    constructor() {
        // Watch for the user closing our terminal
        this.onTerminalClose = vscode.window.onDidCloseTerminal((term) => {
            if (term === this.launchTerminal) {
                this.launchTerminal = undefined;
            }
        });
    }
    // Command property accessible from launch.json:
    // the full path of the target binary currently set for launch
    getLaunchTargetPath() {
        let launchConfiguration = configuration.getCurrentLaunchConfiguration();
        if (launchConfiguration) {
            return launchConfiguration.binaryPath;
        }
        else {
            return "";
        }
    }
    // Command property accessible from launch.json:
    // calls getLaunchTargetPath after triggering a build of the current target,
    // if makefile.buildBeforeLaunch allows it.
    async launchTargetPath() {
        if (configuration.getBuildBeforeLaunch()) {
            await make.buildTarget(make.TriggeredBy.launch, configuration.getCurrentTarget() || "");
        }
        return this.getLaunchTargetPath();
    }
    // Command property accessible from launch.json:
    // the full path from where the target binary is to be launched
    getLaunchTargetDirectory() {
        let launchConfiguration = configuration.getCurrentLaunchConfiguration();
        if (launchConfiguration) {
            return launchConfiguration.cwd;
        }
        else {
            return util.getWorkspaceRoot();
        }
    }
    // Command property accessible from launch.json:
    // the file name of the current target binary, without path or extension.
    getLaunchTargetFileName() {
        let launchConfiguration = configuration.getCurrentLaunchConfiguration();
        if (launchConfiguration) {
            return path.parse(launchConfiguration.binaryPath).name;
        }
        else {
            return "";
        }
    }
    // Command property accessible from launch.json:
    // calls getLaunchTargetFileName after triggering a build of the current target,
    // if makefile.buildBeforeLaunch allows it.
    async launchTargetFileName() {
        if (configuration.getBuildBeforeLaunch()) {
            await make.buildTarget(make.TriggeredBy.launch, configuration.getCurrentTarget() || "");
        }
        return this.getLaunchTargetFileName();
    }
    // Command property accessible from launch.json:
    // the arguments sent to the target binary, returned as array of string
    // This is used by the debug/terminal VS Code APIs.
    getLaunchTargetArgs() {
        let launchConfiguration = configuration.getCurrentLaunchConfiguration();
        if (launchConfiguration) {
            return launchConfiguration.binaryArgs;
        }
        else {
            return [];
        }
    }
    // Command property accessible from launch.json:
    // the arguments sent to the target binary, returned as one simple string
    // This is an alternative to define the arguments in launch.json,
    // since the string array syntax is not working.
    // This is not a perfect solution, it all depends on how the main entry point
    // is parsing its given arguments.
    // Example: for [CWD>tool arg1 arg2 arg3], the tool will receive
    // 2 arguments: tool and "arg1 arg2 arg3"
    // As opposed to the above case when the tool will receive
    // 4 arguments: tool, arg1, arg2, arg3
    // TODO: investigate how we can define string array arguments
    // for the target binary in launch.json
    getLaunchTargetArgsConcat() {
        return this.getLaunchTargetArgs().join(" ");
    }
    // Invoke a VS Code debugging session passing it all the information
    // from the current launch configuration.
    // Debugger (imperfect) guess logic:
    //    - VS for msvc toolset, lldb for clang toolset, gdb for anything else.
    //    - debugger path is assumed to be the same as the compiler path.
    // Exceptions for miMode:
    //    - if the above logic results in a debugger that is missing, try the other one.
    //      This is needed either because the system might not be equipped
    //      with the preffered debugger that corresponds to the toolset in use,
    //      but also because there might be a compiler alias that is not properly identified
    //      (example: "cc" alias that points to clang but is not identified as clang,
    //       therefore requesting a gdb debugger which may be missing
    //       because there is no gcc toolset installed).
    //       TODO: implement proper detection of aliases and their commands.
    // Exceptions for miDebuggerPath:
    //    - for MacOS, point to the lldb-mi debugger that is installed by CppTools
    //    - if CppTools extension is not installed, intentionally do not provide a miDebuggerPath On MAC,
    //      because the debugger knows how to find automatically the right lldb-mi when miMode is lldb and miDebuggerPath is undefined
    //      (this is true for systems older than Catalina).
    // Additionally, cppvsdbg ignores miMode and miDebuggerPath.
    prepareDebugCurrentTarget(currentLaunchConfiguration) {
        let args = this.getLaunchTargetArgs();
        let compilerPath = extension.extension.getCompilerFullPath();
        let parsedObjPath = compilerPath
            ? path.parse(compilerPath)
            : undefined;
        let isClangCompiler = parsedObjPath === null || parsedObjPath === void 0 ? void 0 : parsedObjPath.name.startsWith("clang");
        let isMsvcCompiler = !isClangCompiler && (parsedObjPath === null || parsedObjPath === void 0 ? void 0 : parsedObjPath.name.startsWith("cl"));
        let dbg = isMsvcCompiler ? "cppvsdbg" : "cppdbg";
        // Initial debugger guess
        let guessMiDebuggerPath = !isMsvcCompiler && parsedObjPath ? parsedObjPath.dir : undefined;
        let guessMiMode;
        if (parsedObjPath === null || parsedObjPath === void 0 ? void 0 : parsedObjPath.name.startsWith("clang")) {
            guessMiMode = "lldb";
        }
        else if (!(parsedObjPath === null || parsedObjPath === void 0 ? void 0 : parsedObjPath.name.startsWith("cl"))) {
            guessMiMode = "gdb";
        }
        // If the first chosen debugger is not installed, try the other one.
        if (guessMiDebuggerPath && guessMiMode) {
            // if the guessMiDebuggerPath is already a file, then go with that. Otherwise, append the guessMiMode.
            let debuggerPath = util.checkFileExistsSync(guessMiDebuggerPath)
                ? guessMiDebuggerPath
                : path.join(guessMiDebuggerPath, guessMiMode);
            if (process.platform === "win32") {
                // On mingw a file is not found if the extension is not part of the path
                debuggerPath = debuggerPath + ".exe";
            }
            if (!util.checkFileExistsSync(debuggerPath)) {
                guessMiMode = guessMiMode === "gdb" ? "lldb" : "gdb";
            }
        }
        // Properties defined by makefile.launchConfigurations override makefile.defaultLaunchConfiguration
        // and they both override the guessed values.
        let defaultLaunchConfiguration = configuration.getDefaultLaunchConfiguration();
        let miMode = currentLaunchConfiguration.MIMode ||
            (defaultLaunchConfiguration === null || defaultLaunchConfiguration === void 0 ? void 0 : defaultLaunchConfiguration.MIMode) ||
            guessMiMode;
        let miDebuggerPath = currentLaunchConfiguration.miDebuggerPath ||
            (defaultLaunchConfiguration === null || defaultLaunchConfiguration === void 0 ? void 0 : defaultLaunchConfiguration.miDebuggerPath) ||
            guessMiDebuggerPath;
        // Exception for MAC-lldb, point to the lldb-mi installed by CppTools or set debugger path to undefined
        // (more details in the comment at the beginning of this function).
        if (miMode === "lldb" && process.platform === "darwin") {
            const cpptoolsExtension = vscode.extensions.getExtension("ms-vscode.cpptools");
            miDebuggerPath = cpptoolsExtension
                ? path.join(cpptoolsExtension.extensionPath, "debugAdapters", "lldb-mi", "bin", "lldb-mi")
                : undefined;
        }
        else if (miDebuggerPath && miMode) {
            // if the miDebuggerPath is already a file, rather than a directory, go with it.
            // Otherwise, append the MiMode.
            miDebuggerPath = util.checkFileExistsSync(miDebuggerPath)
                ? miDebuggerPath
                : path.join(miDebuggerPath, miMode);
            if (process.platform === "win32") {
                miDebuggerPath = miDebuggerPath + ".exe";
            }
        }
        let debugConfig = {
            type: dbg,
            name: `Debug My Program`,
            request: "launch",
            cwd: this.getLaunchTargetDirectory(),
            args,
            env: util.mergeEnvironment(process.env),
            program: this.getLaunchTargetPath(),
            MIMode: miMode,
            miDebuggerPath: miDebuggerPath,
            console: "internalConsole",
            internalConsoleOptions: "openOnSessionStart",
            stopAtEntry: currentLaunchConfiguration.stopAtEntry ||
                (defaultLaunchConfiguration === null || defaultLaunchConfiguration === void 0 ? void 0 : defaultLaunchConfiguration.stopAtEntry),
            symbolSearchPath: currentLaunchConfiguration.symbolSearchPath ||
                (defaultLaunchConfiguration === null || defaultLaunchConfiguration === void 0 ? void 0 : defaultLaunchConfiguration.symbolSearchPath),
        };
        logger.message("Created the following debug config:\n   type = " +
            debugConfig.type +
            "\n   cwd = " +
            debugConfig.cwd +
            " (= " +
            this.getLaunchTargetDirectory() +
            ")" +
            "\n   args = " +
            args.join(" ") +
            "\n   program = " +
            debugConfig.program +
            " (= " +
            this.getLaunchTargetPath() +
            ")" +
            "\n   MIMode = " +
            debugConfig.MIMode +
            "\n   miDebuggerPath = " +
            debugConfig.miDebuggerPath +
            "\n   stopAtEntry = " +
            debugConfig.stopAtEntry +
            "\n   symbolSearchPath = " +
            debugConfig.symbolSearchPath);
        return debugConfig;
    }
    async validateLaunchConfiguration(op) {
        // Cannot debug the project if it is currently building or (pre-)configuring.
        if (make.blockedByOp(op)) {
            return LaunchStatuses.blocked;
        }
        if (configuration.getBuildBeforeLaunch()) {
            let currentBuildTarget = configuration.getCurrentTarget() || "";
            logger.message(`Building current target before launch: "${currentBuildTarget}"`);
            let buildSuccess = (await make.buildTarget(make.TriggeredBy.buildTarget, currentBuildTarget, false)) === make.ConfigureBuildReturnCodeTypes.success;
            if (!buildSuccess) {
                logger.message(`Building target "${currentBuildTarget}" failed.`);
                let noButton = localize(0, null);
                let yesButton = localize(1, null);
                const message = localize(2, null);
                const chosen = await vscode.window.showErrorMessage(message, {
                    title: yesButton,
                    isCloseAffordance: false,
                }, {
                    title: noButton,
                    isCloseAffordance: true,
                });
                if (chosen === undefined || chosen.title === noButton) {
                    return LaunchStatuses.buildFailed;
                }
            }
        }
        let currentLaunchConfiguration = configuration.getCurrentLaunchConfiguration();
        if (!currentLaunchConfiguration) {
            // If no launch configuration is set, give the user a chance to select one now from the quick pick
            // (unless we know it's going to be empty).
            if (configuration.getLaunchTargets().length === 0) {
                vscode.window.showErrorMessage(localize(3, null, `'${op}'`));
                return LaunchStatuses.launchTargetsListEmpty;
            }
            else {
                vscode.window.showErrorMessage(localize(4, null, `'${op}'`));
                await configuration.selectLaunchConfiguration();
                // Read again the current launch configuration. If a current launch configuration is stil not set
                // (the user cancelled the quick pick or the parser found zero launch targets) message and fail.
                currentLaunchConfiguration =
                    configuration.getCurrentLaunchConfiguration();
                if (!currentLaunchConfiguration) {
                    vscode.window.showErrorMessage(localize(5, null, `'${op}'`));
                    return LaunchStatuses.noLaunchConfigurationSet;
                }
            }
        }
        return LaunchStatuses.success;
    }
    async debugCurrentTarget() {
        let status = await this.validateLaunchConfiguration(make.Operations.debug);
        let currentLaunchConfiguration;
        if (status === LaunchStatuses.success) {
            currentLaunchConfiguration =
                configuration.getCurrentLaunchConfiguration();
        }
        if (currentLaunchConfiguration) {
            let debugConfig = this.prepareDebugCurrentTarget(currentLaunchConfiguration);
            let startFolder;
            if (vscode.workspace.workspaceFolders) {
                startFolder = vscode.workspace.workspaceFolders[0];
                await vscode.debug.startDebugging(startFolder, debugConfig);
            }
            else {
                await vscode.debug.startDebugging(undefined, debugConfig);
            }
            if (!vscode.debug.activeDebugSession) {
                status = "failed";
            }
        }
        let telemetryProperties = {
            status: status,
        };
        telemetry.logEvent("debug", telemetryProperties);
        return vscode.debug.activeDebugSession;
    }
    // Invoke a VS Code running terminal passing it all the information
    // from the current launch configuration
    prepareRunCurrentTarget() {
        // Add a pair of quotes just in case there is a space in the binary path
        let terminalCommand = '"' + this.getLaunchTargetPath() + '" ';
        terminalCommand += this.getLaunchTargetArgs().join(" ");
        // Log the message for high verbosity only because the output channel will become visible over the terminal,
        // even if the terminal show() is called after the logger show().
        logger.message("Running command '" +
            terminalCommand +
            "' in the terminal from location '" +
            this.getLaunchTargetDirectory() +
            "'", "Debug");
        return terminalCommand;
    }
    async runCurrentTarget() {
        const terminalOptions = {
            name: "Make/Launch",
        };
        // Use cmd.exe on Windows
        if (process.platform === "win32") {
            terminalOptions.shellPath = "C:\\Windows\\System32\\cmd.exe";
        }
        terminalOptions.cwd = this.getLaunchTargetDirectory();
        terminalOptions.env = util.mergeEnvironment(process.env);
        if (!this.launchTerminal) {
            this.launchTerminal = vscode.window.createTerminal(terminalOptions);
        }
        let status = await this.validateLaunchConfiguration(make.Operations.run);
        let currentLaunchConfiguration;
        if (status === LaunchStatuses.success) {
            currentLaunchConfiguration =
                configuration.getCurrentLaunchConfiguration();
            let terminalCommand = this.prepareRunCurrentTarget();
            this.launchTerminal.sendText(terminalCommand);
            let telemetryProperties = {
                status: status,
            };
            telemetry.logEvent("run", telemetryProperties);
            this.launchTerminal.show();
        }
        return this.launchTerminal;
    }
    dispose() {
        if (this.launchTerminal) {
            this.launchTerminal.dispose();
        }
        this.onTerminalClose.dispose();
    }
}
exports.Launcher = Launcher;
function getLauncher() {
    if (launcher === undefined) {
        launcher = new Launcher();
    }
    return launcher;
}
exports.getLauncher = getLauncher;


/***/ }),

/***/ 900:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.messageNoCR = exports.message = exports.clearOutputChannel = exports.showOutputChannel = void 0;
// Logging support
const fs = __webpack_require__(58);
const configuration = __webpack_require__(184);
const vscode = __webpack_require__(304);
let makeOutputChannel;
function getOutputChannel() {
    if (!makeOutputChannel) {
        makeOutputChannel = vscode.window.createOutputChannel("Makefile tools");
    }
    return makeOutputChannel;
}
// TODO: process verbosities with enums instead of strings.
// This is a temporary hack.
function loggingLevelApplies(messageVerbosity) {
    let projectVerbosity = configuration.getLoggingLevel();
    if (messageVerbosity === "Debug") {
        return projectVerbosity === "Debug";
    }
    else if (messageVerbosity === "Verbose") {
        return projectVerbosity === "Verbose" || projectVerbosity === "Debug";
    }
    return true;
}
function showOutputChannel() {
    if (makeOutputChannel) {
        makeOutputChannel.show(true);
    }
}
exports.showOutputChannel = showOutputChannel;
function clearOutputChannel() {
    if (makeOutputChannel) {
        makeOutputChannel.clear();
    }
}
exports.clearOutputChannel = clearOutputChannel;
//TODO: implement more verbosity levels for the output log
function message(message, loggingLevel) {
    // Print the message only if the intended logging level matches the settings
    // or if no loggingLevel restriction is provided.
    if (!loggingLevelApplies(loggingLevel)) {
        return;
    }
    let channel = getOutputChannel();
    channel.appendLine(message);
    let extensionLog = configuration.getExtensionLog();
    if (extensionLog) {
        fs.appendFileSync(extensionLog, message);
        fs.appendFileSync(extensionLog, "\n");
    }
}
exports.message = message;
// This is used for a few scenarios where the message already has end of line incorporated.
// Example: stdout/stderr of a child process read before the stream is closed.
function messageNoCR(message, loggingLevel) {
    // Print the message only if the intended logging level matches the settings
    // or if no loggingLevel restriction is provided.
    if (!loggingLevelApplies(loggingLevel)) {
        return;
    }
    let channel = getOutputChannel();
    channel.append(message);
    let extensionLog = configuration.getExtensionLog();
    if (extensionLog) {
        fs.appendFileSync(extensionLog, message);
    }
}
exports.messageNoCR = messageNoCR;


/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cleanConfigure = exports.doConfigure = exports.loadConfigurationFromCache = exports.preprocessDryRun = exports.configure = exports.runPostConfigureScript = exports.runPreConfigureScript = exports.runPrePostConfigureScript = exports.postConfigure = exports.preConfigure = exports.prePostConfigureHelper = exports.generateParseContent = exports.setParseFile = exports.getParseFile = exports.setParseContent = exports.getParseContent = exports.doBuildTarget = exports.buildTarget = exports.setCurPID = exports.getCurPID = exports.prepareBuildTarget = exports.blockedByOp = exports.setCustomConfigurationProvider = exports.getDeltaCustomConfigurationProvider = exports.TriggeredBy = exports.Operations = exports.ConfigureBuildReturnCodeTypes = exports.setIsPostConfiguring = exports.getIsPostConfiguring = exports.setIsPreConfiguring = exports.getIsPreConfiguring = exports.setConfigureIsClean = exports.getConfigureIsClean = exports.setConfigureIsInBackground = exports.getConfigureIsInBackground = exports.setIsConfiguring = exports.getIsConfiguring = exports.setIsBuilding = exports.getIsBuilding = void 0;
// Support for make operations
const configuration = __webpack_require__(184);
const extension_1 = __webpack_require__(171);
const fs = __webpack_require__(58);
const logger = __webpack_require__(900);
const parser = __webpack_require__(80);
const path = __webpack_require__(72);
const util = __webpack_require__(168);
const telemetry = __webpack_require__(564);
const vscode = __webpack_require__(304);
const uuid_1 = __webpack_require__(384);
const nls = __webpack_require__(892);
nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
})((__webpack_require__(72).join)(__dirname, 'src\\make.ts'));
const localize = nls.loadMessageBundle((__webpack_require__(72).join)(__dirname, 'src\\make.ts'));
const recursiveString = localize(0, null);
let isBuilding = false;
function getIsBuilding() {
    return isBuilding;
}
exports.getIsBuilding = getIsBuilding;
function setIsBuilding(building) {
    isBuilding = building;
}
exports.setIsBuilding = setIsBuilding;
let isConfiguring = false;
function getIsConfiguring() {
    return isConfiguring;
}
exports.getIsConfiguring = getIsConfiguring;
function setIsConfiguring(configuring) {
    isConfiguring = configuring;
}
exports.setIsConfiguring = setIsConfiguring;
let configureIsInBackground = false;
function getConfigureIsInBackground() {
    return configureIsInBackground;
}
exports.getConfigureIsInBackground = getConfigureIsInBackground;
function setConfigureIsInBackground(background) {
    configureIsInBackground = background;
}
exports.setConfigureIsInBackground = setConfigureIsInBackground;
let configureIsClean = false;
function getConfigureIsClean() {
    return configureIsClean;
}
exports.getConfigureIsClean = getConfigureIsClean;
function setConfigureIsClean(clean) {
    configureIsClean = clean;
}
exports.setConfigureIsClean = setConfigureIsClean;
let isPreConfiguring = false;
function getIsPreConfiguring() {
    return isPreConfiguring;
}
exports.getIsPreConfiguring = getIsPreConfiguring;
function setIsPreConfiguring(preConfiguring) {
    isPreConfiguring = preConfiguring;
}
exports.setIsPreConfiguring = setIsPreConfiguring;
let isPostConfiguring = false;
function getIsPostConfiguring() {
    return isPostConfiguring;
}
exports.getIsPostConfiguring = getIsPostConfiguring;
function setIsPostConfiguring(postConfiguring) {
    isPostConfiguring = postConfiguring;
}
exports.setIsPostConfiguring = setIsPostConfiguring;
// Leave positive error codes for make exit values
var ConfigureBuildReturnCodeTypes;
(function (ConfigureBuildReturnCodeTypes) {
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["success"] = 0] = "success";
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["blocked"] = -1] = "blocked";
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["cancelled"] = -2] = "cancelled";
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["notFound"] = -3] = "notFound";
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["outOfDate"] = -4] = "outOfDate";
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["other"] = -5] = "other";
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["saveFailed"] = -6] = "saveFailed";
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["fullFeatureFalse"] = -7] = "fullFeatureFalse";
    ConfigureBuildReturnCodeTypes[ConfigureBuildReturnCodeTypes["untrusted"] = -8] = "untrusted";
})(ConfigureBuildReturnCodeTypes = exports.ConfigureBuildReturnCodeTypes || (exports.ConfigureBuildReturnCodeTypes = {}));
var Operations;
(function (Operations) {
    Operations["preConfigure"] = "pre-configure";
    Operations["postConfigure"] = "post-configure";
    Operations["configure"] = "configure";
    Operations["build"] = "build";
    Operations["changeConfiguration"] = "change makefile configuration";
    Operations["changeBuildTarget"] = "change build target";
    Operations["changeLaunchTarget"] = "change launch target";
    Operations["debug"] = "debug";
    Operations["run"] = "run";
})(Operations = exports.Operations || (exports.Operations = {}));
var TriggeredBy;
(function (TriggeredBy) {
    TriggeredBy["buildTarget"] = "command pallette (buildTarget)";
    TriggeredBy["buildCleanTarget"] = "command pallette (buildCleanTarget)";
    TriggeredBy["buildAll"] = "command pallette (buildAll)";
    TriggeredBy["buildCleanAll"] = "command pallette (buildCleanAll)";
    TriggeredBy["preconfigure"] = "command pallette (preConfigure)";
    TriggeredBy["alwaysPreconfigure"] = "settings (alwaysPreConfigure)";
    TriggeredBy["postConfigure"] = "command pallette (postConfigure)";
    TriggeredBy["alwaysPostConfigure"] = "settings (alwaysPostConfigure)";
    TriggeredBy["configure"] = "command pallette (configure)";
    TriggeredBy["configureOnOpen"] = "settings (configureOnOpen)";
    TriggeredBy["cleanConfigureOnOpen"] = "configure dirty (on open), settings (configureOnOpen)";
    TriggeredBy["cleanConfigure"] = "command pallette (clean configure)";
    TriggeredBy["configureBeforeBuild"] = "configure dirty (before build), settings (configureAfterCommand)";
    TriggeredBy["configureAfterConfigurationChange"] = "settings (configureAfterCommand), command pallette (setBuildConfiguration)";
    TriggeredBy["configureAfterEditorFocusChange"] = "configure dirty (editor focus change), settings (configureOnEdit)";
    TriggeredBy["configureBeforeTargetChange"] = "configure dirty (before target change), settings (configureAfterCommand)";
    TriggeredBy["configureAfterTargetChange"] = "settings (configureAfterCommand), command pallette (setBuildTarget)";
    TriggeredBy["configureBeforeLaunchTargetChange"] = "configureDirty (before launch target change), settings (configureAfterCommand)";
    TriggeredBy["launch"] = "Launch (debug|run)";
    TriggeredBy["tests"] = "Makefile Tools Regression Tests";
})(TriggeredBy = exports.TriggeredBy || (exports.TriggeredBy = {}));
let fileIndex = new Map();
let workspaceBrowseConfiguration = {
    browsePath: [],
};
function getDeltaCustomConfigurationProvider() {
    let provider = {
        fileIndex: fileIndex,
        workspaceBrowse: workspaceBrowseConfiguration,
    };
    return provider;
}
exports.getDeltaCustomConfigurationProvider = getDeltaCustomConfigurationProvider;
function setCustomConfigurationProvider(provider) {
    fileIndex = provider.fileIndex;
    workspaceBrowseConfiguration = provider.workspaceBrowse;
}
exports.setCustomConfigurationProvider = setCustomConfigurationProvider;
// Identifies and logs whether an operation should be prevented from running.
// So far, the only blocking scenarios are if an ongoing configure, pre-configure or build
// is blocking other new similar operations and setter commands (selection of new configurations, targets, etc...)
// Getter commands are not blocked, even if by the time the (pre-)configure or build operations are completed
// they might be out of date.
// For the moment, the status bar buttons don't change when an operation is blocked
// and cancelling is done only via a button in the bottom right popup.
// Clicking the status bar buttons attempts to run the corresponding operation,
// which triggers a popup and returns early if it should be blocked. Same for pallette commands.
// In future we may enable/disable or change text depending on the blocking state.
function blockedByOp(op, showPopup = true) {
    let blocker;
    if (getIsPreConfiguring()) {
        blocker = Operations.preConfigure;
    }
    if (getIsPostConfiguring()) {
        blocker = Operations.postConfigure;
    }
    if (getIsConfiguring()) {
        // A configure in the background shouldn't block anything except another configure
        if (getConfigureIsInBackground() && op !== Operations.configure) {
            vscode.window.showInformationMessage(localize(1, null, op));
        }
        else {
            blocker = Operations.configure;
        }
    }
    if (getIsBuilding()) {
        blocker = Operations.build;
    }
    if (blocker && showPopup) {
        vscode.window.showErrorMessage(localize(2, null, `'${op}'`, blocker));
    }
    return blocker;
}
exports.blockedByOp = blockedByOp;
async function saveAll() {
    if (configuration.getSaveBeforeBuildOrConfigure()) {
        logger.message("Saving opened files before build.");
        let saveSuccess = await vscode.workspace.saveAll();
        if (saveSuccess) {
            return true;
        }
        else {
            logger.message("Saving opened files failed.");
            let yesButton = localize(3, null);
            let noButton = localize(4, null);
            const chosen = await vscode.window.showErrorMessage("Saving opened files failed. Do you want to continue anyway?", {
                title: yesButton,
                isCloseAffordance: false,
            }, {
                title: noButton,
                isCloseAffordance: true,
            });
            return chosen !== undefined && chosen.title === yesButton;
        }
    }
    else {
        return true;
    }
}
function prepareBuildTarget(target) {
    let makeArgs = [];
    // Prepend the target to the arguments given in the configurations json.
    // If a clean build is desired, "clean" should precede the target.
    if (target) {
        makeArgs.push(target);
    }
    makeArgs = makeArgs.concat(configuration.getConfigurationMakeArgs());
    logger.message(`Building target "${target}" with command: '${configuration.getConfigurationMakeCommand()} ${makeArgs.join(" ")}'`);
    return makeArgs;
}
exports.prepareBuildTarget = prepareBuildTarget;
// Build targets allow list for telemetry
function processTargetForTelemetry(target) {
    if (!target || target === "") {
        return "(unset)";
    }
    else if (target === "all" || target === "clean") {
        return target;
    }
    return "..."; // private undisclosed info
}
// PID of the process that may be running currently.
// At any moment, there is either no process or only one process running
// (make for configure, make for build or pre-configure cmd/bash).
// TODO: improve the code regarding curPID and how util.spawnChildProcess is setting it in make.ts unit.
let curPID = -1;
function getCurPID() {
    return curPID;
}
exports.getCurPID = getCurPID;
function setCurPID(pid) {
    curPID = pid;
}
exports.setCurPID = setCurPID;
const makefileBuildTaskName = "Makefile Tools Build Task";
async function buildTarget(triggeredBy, target, clean = false) {
    if (blockedByOp(Operations.build)) {
        return ConfigureBuildReturnCodeTypes.blocked;
    }
    if (!saveAll()) {
        return ConfigureBuildReturnCodeTypes.saveFailed;
    }
    // Same start time for build and an eventual configure.
    let buildStartTime = Date.now();
    // warn about an out of date configure state and configure if makefile.configureAfterCommand allows.
    let configureExitCode; // used for telemetry
    let configureElapsedTime; // used for telemetry
    if (extension_1.extension.getState().configureDirty) {
        logger.message("The project needs to configure in order to build properly the current target.");
        if (configuration.getConfigureAfterCommand()) {
            configureExitCode = await configure(TriggeredBy.configureBeforeBuild);
            if (configureExitCode !== ConfigureBuildReturnCodeTypes.success) {
                logger.message("Attempting to run build after a failed configure.");
            }
            configureElapsedTime = util.elapsedTimeSince(buildStartTime);
        }
    }
    // Prepare a notification popup
    let config = configuration.getCurrentMakefileConfiguration();
    let configAndTarget = config;
    if (target) {
        target = target.trimLeft();
        if (target !== "") {
            configAndTarget += "/" + target;
        }
    }
    configAndTarget = `"${configAndTarget}"`;
    let popupStr = localize(5, null, clean ? "clean " : "", configAndTarget);
    let cancelBuild = false; // when the build was cancelled by the user
    try {
        return await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: popupStr,
            cancellable: true,
        }, async (progress, cancel) => {
            cancel.onCancellationRequested(async () => {
                progress.report({
                    increment: 1,
                    message: localize(6, null),
                });
                logger.message("The user is cancelling the build...");
                cancelBuild = true;
                // Kill the task that is used for building.
                // This will take care of all processes that were spawned.
                let myTask = vscode.tasks.taskExecutions.find((tsk) => {
                    if (tsk.task.name === makefileBuildTaskName) {
                        return tsk;
                    }
                });
                logger.message(`Killing task "${makefileBuildTaskName}".`);
                myTask === null || myTask === void 0 ? void 0 : myTask.terminate();
            });
            setIsBuilding(true);
            // If required by the "makefile.clearOutputBeforeBuild" setting,
            // we need to clear the terminal output when "make"-ing target "clean"
            // (but not when "make"-ing the following intended target, so that we see both together)
            // or when "make"-ing the intended target in case of a not-clean build.
            let clearOutput = configuration.getClearOutputBeforeBuild() || false;
            if (clean) {
                // We don't need to track the return code for 'make "clean"'.
                // We want to proceed with the 'make "target"' step anyway.
                // The relevant return code for telemetry will be the second one.
                // If the clean step fails, doBuildTarget will print an error message in the terminal.
                await doBuildTarget(progress, "clean", clearOutput);
            }
            let retc = await doBuildTarget(progress, target, clearOutput && !clean);
            // We need to know whether this build was cancelled by the user
            // more than the real exit code of the make process in this circumstance.
            if (cancelBuild) {
                retc = ConfigureBuildReturnCodeTypes.cancelled;
            }
            let buildElapsedTime = util.elapsedTimeSince(buildStartTime);
            const telemetryProperties = {
                exitCode: (retc === null || retc === void 0 ? void 0 : retc.toString()) || "undefined",
                target: processTargetForTelemetry(target),
                triggeredBy: triggeredBy,
            };
            const telemetryMeasures = {
                buildTotalElapsedTime: buildElapsedTime,
            };
            // Report if this build ran also a configure and how long it took.
            if (configureExitCode !== undefined) {
                telemetryProperties.configureExitCode = configureExitCode.toString();
            }
            if (configureElapsedTime !== undefined) {
                telemetryMeasures.configureElapsedTime = configureElapsedTime;
            }
            telemetry.logEvent("build", telemetryProperties, telemetryMeasures);
            cancelBuild = false;
            return retc;
        });
    }
    finally {
        setIsBuilding(false);
    }
}
exports.buildTarget = buildTarget;
async function doBuildTarget(progress, target, clearTerminalOutput) {
    let makeArgs = prepareBuildTarget(target);
    try {
        const quotingStlye = vscode.ShellQuoting.Strong;
        const quotingStyleName = "Strong";
        let myTaskCommand = {
            value: configuration.getConfigurationMakeCommand(),
            quoting: quotingStlye,
        };
        let myTaskArgs = makeArgs.map((arg) => {
            return { value: arg, quoting: quotingStlye };
        });
        const cwd = configuration.makeBaseDirectory();
        if (!util.checkDirectoryExistsSync(cwd)) {
            logger.message(`Target "${target}" failed to build because CWD passed in does not exist (${cwd}).`);
            return ConfigureBuildReturnCodeTypes.notFound;
        }
        let myTaskOptions = {
            env: util.mergeEnvironment(process.env),
            cwd,
        };
        let shellExec = new vscode.ShellExecution(myTaskCommand, myTaskArgs, myTaskOptions);
        let myTask = new vscode.Task({ type: "shell", group: "build", label: makefileBuildTaskName }, vscode.TaskScope.Workspace, makefileBuildTaskName, "makefile", shellExec);
        myTask.problemMatchers = configuration.getConfigurationProblemMatchers();
        myTask.presentationOptions.clear = clearTerminalOutput;
        myTask.presentationOptions.showReuseMessage = true;
        logger.message(`Executing task: "${myTask.name}" with quoting style "${quotingStyleName}"\n command name: ${myTaskCommand.value}\n command args ${makeArgs.join()}`, "Debug");
        await vscode.tasks.executeTask(myTask);
        const result = await new Promise((resolve) => {
            let disposable = vscode.tasks.onDidEndTaskProcess((e) => {
                var _a;
                if (e.execution.task.name === makefileBuildTaskName) {
                    disposable.dispose();
                    resolve((_a = e.exitCode) !== null && _a !== void 0 ? _a : ConfigureBuildReturnCodeTypes.other);
                }
            });
        });
        if (result !== ConfigureBuildReturnCodeTypes.success) {
            logger.message(`Target "${target}" failed to build.`);
        }
        else {
            logger.message(`Target "${target}" built successfully.`);
        }
        return result;
    }
    catch (error) {
        // No need for notification popup, since the build result is visible already in the output channel
        logger.message(error);
        return ConfigureBuildReturnCodeTypes.notFound;
    }
}
exports.doBuildTarget = doBuildTarget;
// Content to be parsed by various operations post configure (like finding all build/launch targets).
// Represents the content of the provided makefile.buildLog or a fresh output of make --dry-run
// (which is also written into makefile.configurationCachePath).
let parseContent;
function getParseContent() {
    return parseContent;
}
exports.getParseContent = getParseContent;
function setParseContent(content) {
    parseContent = content;
}
exports.setParseContent = setParseContent;
// The source file of parseContent (build log or configuration dryrun cache).
let parseFile;
function getParseFile() {
    return parseFile;
}
exports.getParseFile = getParseFile;
function setParseFile(file) {
    parseFile = file;
}
exports.setParseFile = setParseFile;
// Targets need to parse a dryrun make invocation that does not include a target name
// (other than default empty "" or the standard "all"), otherwise it would produce
// a subset of all the targets involved in the makefile (only the ones triggered
// by building the current target).
async function generateParseContent(progress, cancel, forTargets = false, recursive = false) {
    if (cancel.isCancellationRequested) {
        return {
            retc: ConfigureBuildReturnCodeTypes.cancelled,
            elapsed: 0,
        };
    }
    let startTime = Date.now();
    // Rules for parse content and file:
    //     1. makefile.buildLog provided by the user in settings
    //     2. configuration cache (the previous dryrun output): makefile.configurationCachePath
    //     3. the make dryrun output if (2) is missing
    // We do not use buildLog for build targets analysis because
    // we can afford to invoke make -pRrq (very quick even on large projects).
    // We make sure to give the regression tests suite a build log that already contains
    // targets information because we want to avoid invoking make for now.
    let buildLog = configuration.getConfigurationBuildLog();
    if (buildLog &&
        (!forTargets || process.env["MAKEFILE_TOOLS_TESTING"] === "1")) {
        parseContent = util.readFile(buildLog);
        if (parseContent) {
            parseFile = buildLog;
            return {
                retc: ConfigureBuildReturnCodeTypes.success,
                elapsed: util.elapsedTimeSince(startTime),
            };
        }
    }
    const dryRunString = localize(7, null);
    const forTargetsString = localize(8, null);
    progress.report({
        increment: 1,
        message: dryRunString +
            (recursive ? ` ${recursiveString}` : "") +
            (forTargets ? ` ${forTargetsString}` : "" + "..."),
    });
    // Continue with the make dryrun invocation
    let makeArgs = [];
    // Prepend the target to the arguments given in the makefile.configurations object,
    // unless we want to parse for the full set of available targets.
    if (forTargets) {
        makeArgs.push("all");
    }
    else {
        let currentTarget = configuration.getCurrentTarget();
        if (currentTarget) {
            makeArgs.push(currentTarget);
        }
    }
    // Include all the make arguments defined in makefile.configurations.makeArgs
    makeArgs = makeArgs.concat(configuration.getConfigurationMakeArgs());
    // If we are analyzing build targets, we need the following switches:
    //  --print-data-base (which generates verbose output where we parse targets from).
    // --no-builtin-variables and --no-builtin-rules (to reduce the size of the
    // output produced by --print-data-base and also to obtain a list of targets
    // that make sense, skipping over implicit targets like objects from sources
    // or binaries from objects and libs).
    // --question (to not execute anything, for us equivalent of dry-run
    // but without printing commands, which contributes again to a smaller output).
    // If we are analyzing compiler/linker commands for IntelliSense and launch targets,
    // we use --dry-run and anything from makefile.dryrunSwitches.
    const dryrunSwitches = configuration.getDryrunSwitches();
    if (forTargets) {
        makeArgs.push("--print-data-base");
        makeArgs.push("--no-builtin-variables");
        makeArgs.push("--no-builtin-rules");
        makeArgs.push("--question");
        logger.messageNoCR("Generating targets information with command: ");
    }
    else {
        makeArgs.push("--dry-run");
        // If this is not a clean configure, remove --always-make from the arguments list.
        // We need to have --always-make in makefile.dryrunSwitches and remove it for not clean configure
        // (as opposed to not having --always-make in makefile.dryrunSwitches and adding it for clean configure)
        // because we want to avoid having 2 dryrun switches settings (one for clean and one for not clean configure)
        // and also because the user needs to be able to remove --always-make from any make --dry-run invocation,
        // if it causes trouble.
        dryrunSwitches === null || dryrunSwitches === void 0 ? void 0 : dryrunSwitches.forEach((sw) => {
            if (getConfigureIsClean() || (sw !== "--always-make" && sw !== "-B")) {
                makeArgs.push(sw);
            }
        });
        logger.messageNoCR(`Generating ${getConfigureIsInBackground() ? "in the background a new " : ""}configuration cache with command: `);
    }
    logger.message(`'${configuration.getConfigurationMakeCommand()} ${makeArgs.join(" ")}'`);
    try {
        let dryrunFile = forTargets ? "./targets.log" : "./dryrun.log";
        let extensionOutputFolder = configuration.getExtensionOutputFolder();
        if (extensionOutputFolder) {
            dryrunFile = path.join(extensionOutputFolder, dryrunFile);
        }
        dryrunFile = util.resolvePathToRoot(dryrunFile);
        logger.message(`Writing the dry-run output: ${dryrunFile}`);
        const lineEnding = process.platform === "win32" && process.env.MSYSTEM === undefined
            ? "\r\n"
            : "\n";
        util.writeFile(dryrunFile, `${configuration.getConfigurationMakeCommand()} ${makeArgs.join(" ")}${lineEnding}`);
        let completeOutput = "";
        let stderrStr = "";
        let heartBeat = Date.now();
        let stdout = (result) => {
            const appendStr = `${result} ${lineEnding}`;
            completeOutput += appendStr;
            fs.appendFileSync(dryrunFile, appendStr);
            progress.report({
                increment: 1,
                message: dryRunString +
                    (recursive ? ` ${recursiveString}` : "") +
                    (forTargets ? ` ${forTargetsString}` : "" + "..."),
            });
            heartBeat = Date.now();
        };
        let stderr = (result) => {
            // We need this lineEnding to see more clearly the output coming from all these compilers and tools.
            // But there is some unpredictability regarding how much these tools fragment their output, on various
            // OSes and systems. To compare easily against a fix baseline, don't use lineEnding while running tests.
            // So far this has been seen for stderr and not for stdout.
            let appendStr = result;
            if (process.env["MAKEFILE_TOOLS_TESTING"] !== "1") {
                appendStr += lineEnding;
            }
            fs.appendFileSync(dryrunFile, appendStr);
            stderrStr += appendStr;
            // Sometimes there is useful information coming via the stderr
            // (one example is even a bug of the make tool, because it reports
            // "Entering directory" on stderr instead of stdout causing various issues).
            completeOutput += appendStr;
        };
        const heartBeatTimeout = 30; // half minute. TODO: make this a setting
        let timeout = setInterval(function () {
            let elapsedHeartBit = util.elapsedTimeSince(heartBeat);
            if (elapsedHeartBit > heartBeatTimeout) {
                vscode.window.showWarningMessage("Dryrun timeout. See Makefile Tools Output Channel for details.");
                logger.message("Dryrun timeout. Verify that the make command works properly " +
                    "in your development terminal (it could wait for stdin).");
                logger.message(`Double check the dryrun output log: ${dryrunFile}`);
                // It's enough to show this warning popup once.
                clearInterval(timeout);
            }
        }, 5 * 1000);
        // The dry-run analysis should operate on english.
        const result = await util.spawnChildProcess(configuration.getConfigurationMakeCommand(), makeArgs, util.getWorkspaceRoot(), true, true, stdout, stderr);
        clearInterval(timeout);
        let elapsedTime = util.elapsedTimeSince(startTime);
        logger.message(`Generating dry-run elapsed time: ${elapsedTime}`);
        parseFile = dryrunFile;
        parseContent = completeOutput;
        // The error codes returned by the targets invocation (make -pRrq) mean something else
        // (for example if targets are out of date). We can ignore the return code for this
        // because it "can't fail". It represents only display of database and no targets are actually run.
        // try syntax error
        if (result.returnCode !== ConfigureBuildReturnCodeTypes.success &&
            !forTargets) {
            logger.message("The make dry-run command failed.");
            logger.message("IntelliSense may work only partially or not at all.");
            logger.message(stderrStr);
            // Report the standard dry-run error & guide only when the configure was not cancelled
            // by the user (which causes retCode to be null).
            // Also don't write the cache if this operation was cancelled
            // because it may be incomplete and affect a future non clean configure.
            if (result.returnCode !== null) {
                util.reportDryRunError(dryrunFile);
            }
        }
        curPID = -1;
        return {
            retc: result.returnCode,
            elapsed: elapsedTime,
        };
    }
    catch (error) {
        logger.message(error);
        return {
            retc: ConfigureBuildReturnCodeTypes.notFound,
            elapsed: util.elapsedTimeSince(startTime),
        };
    }
}
exports.generateParseContent = generateParseContent;
async function prePostConfigureHelper(titles, configureScriptMethod, setConfigureScriptState, logConfigureScriptTelemetry) {
    // No pre/post configure execution in untrusted workspaces.
    // The check is needed also here in addition to disabling all UI and actions because,
    // depending on settings, this can run automatically at project load.
    if (!vscode.workspace.isTrusted) {
        logger.message("No script can run in an untrusted workspace.");
        return ConfigureBuildReturnCodeTypes.untrusted;
    }
    // check for being blocked by operations.
    if (blockedByOp(Operations.preConfigure)) {
        return ConfigureBuildReturnCodeTypes.blocked;
    }
    if (blockedByOp(Operations.postConfigure)) {
        return ConfigureBuildReturnCodeTypes.blocked;
    }
    let configureScriptStartTime = Date.now();
    let cancelConfigureScript = false;
    try {
        return await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: titles.configuringScript,
            cancellable: true,
        }, async (progress, cancel) => {
            cancel.onCancellationRequested(async () => {
                progress.report({
                    increment: 1,
                    message: localize(9, null),
                });
                cancelConfigureScript = true;
                logger.message(`Attempting to kill the console process (PID = ${curPID}) and all its children subprocesses...`);
                await vscode.window.withProgress({
                    location: vscode.ProgressLocation.Notification,
                    title: titles.cancelling,
                    cancellable: false,
                }, async (progress) => {
                    await util.killTree(progress, curPID);
                });
            });
            setConfigureScriptState(true);
            let retc = await configureScriptMethod(progress);
            if (cancelConfigureScript) {
                retc = ConfigureBuildReturnCodeTypes.cancelled;
            }
            let configureScriptElapsedTime = util.elapsedTimeSince(configureScriptStartTime);
            logConfigureScriptTelemetry(configureScriptElapsedTime, retc);
            cancelConfigureScript = false;
            if (retc !== ConfigureBuildReturnCodeTypes.success) {
                logger.showOutputChannel();
            }
            return retc;
        });
    }
    finally {
        setConfigureScriptState(false);
    }
}
exports.prePostConfigureHelper = prePostConfigureHelper;
async function preConfigure(triggeredBy) {
    let scriptFile = configuration.getPreConfigureScript();
    if (!scriptFile) {
        vscode.window.showErrorMessage("Pre-configure failed: no script provided.");
        logger.message("No pre-configure script is set in settings. " +
            "Make sure a pre-configuration script path is defined with makefile.preConfigureScript.");
        return ConfigureBuildReturnCodeTypes.notFound;
    }
    if (!util.checkFileExistsSync(scriptFile)) {
        vscode.window.showErrorMessage("Could not find pre-configure script.");
        logger.message(`Could not find the given pre-configure script "${scriptFile}" on disk. `);
        return ConfigureBuildReturnCodeTypes.notFound;
    }
    // Assert that scriptFile is not undefined at this point since we've checked above.
    return await prePostConfigureHelper({
        configuringScript: localize(10, null, scriptFile),
        cancelling: localize(11, null),
    }, (progress) => runPreConfigureScript(progress, scriptFile), (value) => setIsPreConfiguring(value), (elapsedTime, exitCode) => {
        const telemetryMeasures = {
            preConfigureElapsedTime: elapsedTime,
        };
        const telemetryProperties = {
            exitCode: exitCode.toString(),
            triggeredBy: triggeredBy,
        };
        telemetry.logEvent("preConfigure", telemetryProperties, telemetryMeasures);
    });
}
exports.preConfigure = preConfigure;
async function postConfigure(triggeredBy) {
    let scriptFile = configuration.getPostConfigureScript();
    if (!scriptFile) {
        vscode.window.showErrorMessage("Post-configure failed: no script provided.");
        logger.message("No post-configure script is set in settings. " +
            "Make sure a post-configuration script path is defined with makefile.postConfigureScript.");
        return ConfigureBuildReturnCodeTypes.notFound;
    }
    if (!util.checkFileExistsSync(scriptFile)) {
        vscode.window.showErrorMessage("Could not find post-configure script.");
        logger.message(`Could not find the given post-configure script "${scriptFile}" on disk. `);
        return ConfigureBuildReturnCodeTypes.notFound;
    }
    // Assert that scriptFile is not undefined at this point since we've checked above.
    return await prePostConfigureHelper({
        configuringScript: localize(12, null, scriptFile),
        cancelling: localize(13, null),
    }, (progress) => runPostConfigureScript(progress, scriptFile), (value) => setIsPostConfiguring(value), (elapsedTime, exitCode) => {
        const telemetryMeasures = {
            postConfigureElapsedTime: elapsedTime,
        };
        const telemetryProperties = {
            exitCode: exitCode.toString(),
            triggeredBy: triggeredBy,
        };
        telemetry.logEvent("postConfigure", telemetryProperties, telemetryMeasures);
    });
}
exports.postConfigure = postConfigure;
// Applies to the current process all the environment variables that resulted from the pre-configure step.
// The input 'content' represents the output of a command that lists all the environment variables:
// set on windows or printenv on linux/mac.
async function applyEnvironment(content) {
    let lines = (content === null || content === void 0 ? void 0 : content.split(/\r?\n/)) || [];
    lines.forEach((line) => {
        let eqPos = line.search("=");
        // Sometimes we get a "" line and searching for = returns -1. Skip.
        if (eqPos !== -1) {
            let envVarName = line.substring(0, eqPos);
            let envVarValue = line.substring(eqPos + 1, line.length);
            process.env[envVarName] = envVarValue;
        }
    });
}
async function runPrePostConfigureScript(progress, scriptFile, scriptArgs, loggingMessages) {
    // Create a temporary wrapper for the user pre-configure script so that we collect
    // in another temporary output file the environrment variables that were produced.
    // generate a random guid to attach to the `wrapConfigureScript` to ensure we don't have races for the file.
    // We split at the first dash to avoid having excessively long filenames.
    const shortenedUniqueIdentifier = (0, uuid_1.v4)().split("-")[0];
    let wrapScriptFile = path.join(util.tmpDir(), `wrapConfigureScript-${shortenedUniqueIdentifier}`);
    let wrapScriptOutFile = wrapScriptFile + ".out";
    let wrapScriptContent;
    if (process.platform === "win32") {
        wrapScriptContent = `call "${scriptFile}"`;
        wrapScriptContent +=
            scriptArgs.length > 0
                ? ` ${scriptArgs.join(" ").toString()}\r\n`
                : "\r\n";
        wrapScriptContent += `set > "${wrapScriptOutFile}"`;
        wrapScriptFile += ".bat";
    }
    else {
        wrapScriptContent = `source '${scriptFile}' ${scriptArgs.length > 0 ? scriptArgs.join(" ").toString() : ""}\n`;
        wrapScriptContent += `printenv > '${wrapScriptOutFile}'`;
        wrapScriptFile += ".sh";
    }
    util.writeFile(wrapScriptFile, wrapScriptContent);
    let concreteScriptArgs = [];
    let runCommand;
    if (process.platform === "win32") {
        runCommand = "cmd";
        concreteScriptArgs.push("/c");
        concreteScriptArgs.push(`"${wrapScriptFile}"`);
    }
    else {
        runCommand = "/bin/bash";
        concreteScriptArgs.push("-c");
        concreteScriptArgs.push(`"source '${wrapScriptFile}'"`);
    }
    try {
        let stdout = (result) => {
            progress.report({ increment: 1, message: "..." });
            logger.messageNoCR(result, "Normal");
        };
        let someErr = false;
        let stderr = (result) => {
            someErr = true;
            logger.messageNoCR(result, "Normal");
        };
        // The preconfigure invocation should use the system locale.
        const result = await util.spawnChildProcess(runCommand, concreteScriptArgs, util.getWorkspaceRoot(), false, false, stdout, stderr);
        if (result.returnCode === ConfigureBuildReturnCodeTypes.success) {
            if (someErr) {
                // Depending how the preconfigure scripts (and any inner called sub-scripts) are written,
                // it may happen that the final error code returned by them to be succesful even if
                // previous steps reported errors.
                // Until a better error code analysis, simply warn wih a logger message and turn the successful
                // return code into ConfigureBuildReurnCodeTypes.other, which would let us know in telemetry
                // of this specific situation.
                result.returnCode = ConfigureBuildReturnCodeTypes.other;
                logger.message(loggingMessages.successWithSomeError);
            }
            else {
                logger.message(loggingMessages.success);
            }
        }
        else {
            logger.message(loggingMessages.failure);
        }
        // Apply the environment produced by running the pre-configure script.
        await applyEnvironment(util.readFile(wrapScriptOutFile));
        return result.returnCode;
    }
    catch (error) {
        logger.message(error);
        return ConfigureBuildReturnCodeTypes.notFound;
    }
    finally {
        util.deleteFileSync(wrapScriptFile);
        util.deleteFileSync(wrapScriptOutFile);
    }
}
exports.runPrePostConfigureScript = runPrePostConfigureScript;
async function runPreConfigureScript(progress, scriptFile) {
    logger.message(`Pre-configuring...\nScript: "${configuration.getPreConfigureScript()}"`);
    const currentConfigPreConfigureArgs = configuration.getConfigurationPreConfigureArgs();
    return await runPrePostConfigureScript(progress, scriptFile, currentConfigPreConfigureArgs.length > 0
        ? currentConfigPreConfigureArgs
        : configuration.getPreConfigureArgs(), {
        success: "The pre-configure succeeded.",
        successWithSomeError: "The pre-configure script returned success code " +
            "but somewhere during the preconfigure process there were errors reported. " +
            "Double check the preconfigure output in the Makefile Tools channel.",
        failure: "The pre-configure script failed. This project may not configure successfully.",
    });
}
exports.runPreConfigureScript = runPreConfigureScript;
async function runPostConfigureScript(progress, scriptFile) {
    logger.message(`Post-configuring...\nScript: "${configuration.getPostConfigureScript()}"`);
    const currentConfigPostConfigureArgs = configuration.getConfigurationPostConfigureArgs();
    return await runPrePostConfigureScript(progress, scriptFile, currentConfigPostConfigureArgs.length > 0
        ? currentConfigPostConfigureArgs
        : configuration.getPostConfigureArgs(), {
        success: "The post-configure succeeded.",
        successWithSomeError: "The post-configure script returned success code " +
            "but somewhere during the postconfigure process there were errors reported. " +
            "Double check the postconfigure output in the Makefile Tools channel.",
        failure: "The post-configure script failed. This project may not configure successfully.",
    });
}
exports.runPostConfigureScript = runPostConfigureScript;
function isConfigurationEmpty(configurationCache) {
    if (configurationCache.buildTargets.length === 0 &&
        configurationCache.launchTargets.length === 0 &&
        configurationCache.customConfigurationProvider.workspaceBrowse.browsePath
            .length === 0) {
        return true;
    }
    return false;
}
// What makes a configure succesful or failed.
// This is not called when there was a cancellation, to simplify the logic and rules.
// Here are some considerations:
// 1.   If generate parse content returns a non successful return code,
// which is very frequent in the case of make --dry-run, we can't consider this
// as a configure failure because it is a problem in the developer environment/code base.
// Most of the times we get valuable output to parse regardless of some minor error
// at the end of the process. The user is notified about the dry-run error
// and is given steps to fix that, in case it is a bug in the extension.
// 2.   Preprocessing the build log or the dryrun output, together with all the parsers
// either succeed or are cancelled. For now there is no other failure scenario.
// Since this analyze helper is never called when configure is cancelled,
// it means that the outcome of these 4 subphases does not affect the total return code.
function analyzeConfigureSubphases(stats) {
    var _a, _b, _c;
    // Generate parse content is a critical phase. Either if it reads from a build log
    // or invokes make --dry-run, a not found means there's nothing to parse.
    // Same applies for the phase that computes the build targets, which always invokes make.
    if (((_a = stats.generateParseContent) === null || _a === void 0 ? void 0 : _a.retc) ===
        ConfigureBuildReturnCodeTypes.notFound ||
        ((_b = stats.dryrunTargets) === null || _b === void 0 ? void 0 : _b.retc) === ConfigureBuildReturnCodeTypes.notFound) {
        // But if a configure was successful from cache, return outOfDate and not failure.
        return ((_c = stats.loadFromCache) === null || _c === void 0 ? void 0 : _c.retc) === ConfigureBuildReturnCodeTypes.success
            ? ConfigureBuildReturnCodeTypes.outOfDate
            : ConfigureBuildReturnCodeTypes.notFound;
    }
    // The outcome of a recursive configure invalidates any other previous returns.
    if (stats.recursiveConfigure) {
        return analyzeConfigureSubphases(stats.recursiveConfigure);
    }
    return ConfigureBuildReturnCodeTypes.success;
}
// Process a list of possible undefined status properties and return an array
// easy to log or send to telemetry.
// The caller of "getRelevantConfigStats" sends "stats" of type "ConfigureSubphasesStatus"
// but we need to declare it here as "any" to be able to index by prop (a string) below.
function getRelevantConfigStats(stats) {
    let relevantStats = [];
    let retCodeProps = Object.getOwnPropertyNames(stats);
    retCodeProps.forEach((prop) => {
        if (prop.toString() === "recursiveConfigure") {
            let recursiveRetCodes = getRelevantConfigStats(stats[prop]);
            recursiveRetCodes.forEach((recursiveRetCode) => {
                relevantStats.push({
                    name: prop.toString() + "." + recursiveRetCode.name,
                    status: {
                        retc: recursiveRetCode.status.retc,
                        elapsed: recursiveRetCode.status.elapsed,
                    },
                });
            });
        }
        else {
            relevantStats.push({
                name: prop.toString(),
                status: {
                    retc: stats[prop].retc,
                    elapsed: stats[prop].elapsed,
                },
            });
        }
    });
    return relevantStats;
}
// A non clean configure loads first any pre-existing cache, so that the user
// has IntelliSense and build/launch targets available earlier.
// Then invokes make dry-run (without --always-make which is used for clean configure only)
// or reads from a provided build log and parses new content to be added to the configuration cache.
// The configuration cache content and the CppTools custom IntelliSense provider are not reset.
// This way we can add incrementally to what has been parsed from the previous clean configure.
// There is the downside that any files that are removed from the makefile
// (thus disappearing from the log with commands) will still have IntelliSense loaded
// until the next clean configure.
async function configure(triggeredBy, updateTargets = true) {
    // Before running the --dry-run type of configure for the first time, even in a trusted workspace,
    // notify the user that it is possible some code to be executed even under "--dry-run" mode.
    // Note that this is a state variable and can be reseted via the command resetState, causing the popup to show again
    // even if a successfull --dry-run configure has been run in the past.
    let ranDryRunInCodebaseLifetime = extension_1.extension.getState().ranDryRunInCodebaseLifetime;
    if (!ranDryRunInCodebaseLifetime && !configuration.getBuildLog()) {
        // The window popup message should be concise but more logging can be useful in the output channel.
        logger.message("The Makefile Tools extension process of configuring your project is about to run 'make --dry-run' in order to parse the output for useful information. " +
            "This is needed to calculate accurate IntelliSense and targets information. " +
            "Although in general 'make --dry-run' only lists (without executing) the operations 'make' would do in the current context, " +
            "it is still possible some code to be executed, like $(shell) syntax in the makefile or recursive invocations of the $(MAKE) variable.");
        logger.message("If you don't feel comfortable allowing this configure process and 'make --dry-run' to be invoked by the extension, " +
            "you can chose a recent full, clean, verbose and up-to-date build log as an alternative, via the setting 'makefile.buildLog'. ");
        // Also, show the output channel for that message to be visible.
        logger.showOutputChannel();
        let yesButton = localize(14, null);
        let noButton = localize(15, null);
        const chosen = await vscode.window.showErrorMessage(localize(16, null), {
            title: yesButton,
            isCloseAffordance: false,
        }, {
            title: noButton,
            isCloseAffordance: true,
        });
        // The 'code possibly executed under --dry-run' warning makes sense only for the configure operation.
        // This is when the user may not expect this to happen. Does not apply for a build or debug/launch and even for pre/post configure which,
        // if set by the user, they represent intentional commands.
        // If the user answered yes to continue with the --dry-run (configure), `dryRunApproved` will be true.
        // If the user decided not to continue with the --dry-run (configure), `dryRunApproved` will be false.
        const telemetryProperties = {
            dryRunApproved: (chosen === null || chosen === void 0 ? void 0 : chosen.title) === yesButton ? "true" : "false",
            triggeredBy: triggeredBy,
        };
        telemetry.logEvent("dryRunWarning", telemetryProperties);
        if (chosen === undefined || chosen.title === noButton) {
            return ConfigureBuildReturnCodeTypes.untrusted;
        }
        extension_1.extension.getState().ranDryRunInCodebaseLifetime = true;
    }
    // Mark that this workspace had at least one attempt at configuring (of any kind: --dry-run or buildLog), before any chance of early return,
    // to accurately identify in telemetry whether this project configured successfully out of the box or not.
    let ranConfigureInCodebaseLifetime = extension_1.extension.getState().ranConfigureInCodebaseLifetime;
    extension_1.extension.getState().ranConfigureInCodebaseLifetime = true;
    // If `fullFeatureSet` is false and it wasn't a manual command invocation, return and `other` return value.
    if (!extension_1.extension.getFullFeatureSet() &&
        !triggeredBy.includes("command pallette")) {
        return ConfigureBuildReturnCodeTypes.fullFeatureFalse;
    }
    if (blockedByOp(Operations.configure)) {
        return ConfigureBuildReturnCodeTypes.blocked;
    }
    if (!saveAll()) {
        return ConfigureBuildReturnCodeTypes.saveFailed;
    }
    // No configure execution in untrusted workspaces.
    // The check is needed also here in addition to disabling all UI and actions because,
    // depending on settings, this can run automatically at project load.
    if (!vscode.workspace.isTrusted) {
        logger.message("Cannot configure a project in an untrusted workspace.");
        return ConfigureBuildReturnCodeTypes.untrusted;
    }
    // Same start time for configure and an eventual pre-configure.
    let configureStartTime = Date.now();
    let preConfigureExitCode; // used for telemetry
    let preConfigureElapsedTime; // used for telemetry
    if (configuration.getAlwaysPreConfigure()) {
        preConfigureExitCode = await preConfigure(TriggeredBy.alwaysPreconfigure);
        if (preConfigureExitCode !== ConfigureBuildReturnCodeTypes.success) {
            logger.message("Attempting to run configure after a failed pre-configure.");
        }
        preConfigureElapsedTime = util.elapsedTimeSince(configureStartTime);
    }
    let postConfigureExitCode; // used for telemetry
    let postConfigureElapsedTime; // used for telemetry
    // Identify for telemetry whether this configure will invoke make --dry-run or will read from a build log
    // If a build log is set and it exists, we are sure make --dry-run is not getting invoked.
    let makeDryRun = true;
    let buildLog = configuration.getConfigurationBuildLog();
    if (buildLog && util.checkFileExistsSync(buildLog)) {
        makeDryRun = false;
    }
    // Identify for telemetry whether this configure will read configuration constructs from cache.
    let readCache = false;
    let configurationCachePath = configuration.getConfigurationCachePath();
    if (configurationCachePath &&
        util.checkFileExistsSync(configurationCachePath)) {
        readCache = true;
    }
    let compileCommandsPath = configuration.getCompileCommandsPath();
    // Identify for telemetry whether:
    //   - this configure will need to double the workload, if it needs to analyze the build targets separately.
    //   - this configure will need to reset the build target to the default, which will need a reconfigure.
    let processTargetsSeparately = false;
    let currentBuildTarget = configuration.getCurrentTarget();
    let oldBuildTarget = currentBuildTarget;
    if (!currentBuildTarget || currentBuildTarget === "") {
        currentBuildTarget = "all";
    }
    if (updateTargets && currentBuildTarget !== "all") {
        processTargetsSeparately = true;
    }
    // Start with the success assumption until later analysis.
    let retc = ConfigureBuildReturnCodeTypes.success;
    let subphaseStats = {};
    try {
        subphaseStats = await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: localize(17, null),
            cancellable: true,
        }, (progress, cancel) => {
            cancel.onCancellationRequested(async () => {
                if (curPID !== -1) {
                    logger.message(`Attempting to kill the make process (PID = ${curPID}) and all its children subprocesses...`);
                    await vscode.window.withProgress({
                        location: vscode.ProgressLocation.Notification,
                        title: localize(18, null),
                        cancellable: false,
                    }, async (progress) => {
                        return util.killTree(progress, curPID);
                    });
                }
                else {
                    // The configure process may run make twice (or three times if the build target is reset),
                    // with parsing in between and after. There is also the CppTools IntelliSense custom provider update
                    // awaiting at various points. It is possible that the cancellation may happen when there is no make running.
                    logger.message("curPID is 0, we are in between make invocations.");
                }
                logger.message("Exiting early from the configure process.");
                // We want a successful configure as soon as possible.
                // The dirty state can help with that by triggering a new configure
                // when the next relevant command occurs.
                extension_1.extension.getState().configureDirty = true;
                retc = ConfigureBuildReturnCodeTypes.cancelled;
                setIsConfiguring(false);
                setConfigureIsClean(false);
                setConfigureIsInBackground(false);
            });
            setIsConfiguring(true);
            return doConfigure(progress, cancel, updateTargets);
        });
        // If not cancelled already, analyze all doConfigure subphases
        // to decide how we should look at the final configure outcome.
        // retc is set to cancel in onCancellationRequested
        // and we don't need to look which subphase cancelled.
        if (retc !== ConfigureBuildReturnCodeTypes.cancelled) {
            retc = analyzeConfigureSubphases(subphaseStats);
        }
        if (retc === ConfigureBuildReturnCodeTypes.success) {
            logger.message("Configure succeeded.");
        }
        else {
            logger.message("Configure failed.");
        }
        return retc;
    }
    catch (e) {
        logger.message(`Exception thrown during the configure process: ${e.message}`);
        retc = ConfigureBuildReturnCodeTypes.other;
        return e.errno;
    }
    finally {
        let provider = extension_1.extension
            .getCppConfigurationProvider()
            .getCustomConfigurationProvider();
        let ConfigurationCache = {
            buildTargets: configuration.getBuildTargets(),
            launchTargets: configuration.getLaunchTargets(),
            customConfigurationProvider: {
                workspaceBrowse: provider.workspaceBrowse,
                // trick to serialize a map in a JSON
                fileIndex: Array.from(provider.fileIndex),
            },
        };
        if (!isConfigurationEmpty(ConfigurationCache)) {
            // Rewrite the configuration cache according to the last updates of the internal arrays,
            // but not if the configure was cancelled and not while running regression tests.
            if (configurationCachePath &&
                retc !== ConfigureBuildReturnCodeTypes.cancelled &&
                process.env["MAKEFILE_TOOLS_TESTING"] !== "1") {
                util.writeFile(configurationCachePath, JSON.stringify(ConfigurationCache));
            }
            // Export the compile_commands.json file if the option is enabled.
            if (compileCommandsPath &&
                retc !== ConfigureBuildReturnCodeTypes.cancelled) {
                let compileCommands = ConfigurationCache.customConfigurationProvider.fileIndex.map(([, { compileCommand }]) => compileCommand);
                util.writeFile(compileCommandsPath, JSON.stringify(compileCommands, undefined, 4));
            }
        }
        let newBuildTarget = configuration.getCurrentTarget();
        let configureElapsedTime = util.elapsedTimeSince(configureStartTime);
        const telemetryMeasures = {
            numberBuildTargets: configuration.getBuildTargets().length,
            numberLaunchTargets: configuration.getLaunchTargets().length,
            numberIndexedSourceFiles: provider.fileIndex.size,
            numberMakefileConfigurations: configuration.getMakefileConfigurations().length,
            totalElapsedTime: configureElapsedTime,
        };
        const telemetryProperties = {
            firstTime: (!ranConfigureInCodebaseLifetime).toString(),
            makeDryRun: makeDryRun.toString(),
            readCache: readCache.toString(),
            isClean: getConfigureIsClean().toString(),
            processTargetsSeparately: processTargetsSeparately.toString(),
            resetBuildTarget: (oldBuildTarget !== newBuildTarget).toString(),
            triggeredBy: triggeredBy,
        };
        // Report all relevant exit codes
        telemetryMeasures.exitCode = retc;
        let subphases = getRelevantConfigStats(subphaseStats);
        subphases.forEach((phase) => {
            telemetryMeasures[phase.name + ".exitCode"] = phase.status.retc;
            telemetryMeasures[phase.name + ".elapsed"] = phase.status.elapsed;
        });
        // Report if this configure ran also a pre-configure and how long it took.
        if (preConfigureExitCode !== undefined) {
            telemetryProperties.preConfigureExitCode =
                preConfigureExitCode.toString();
        }
        if (preConfigureElapsedTime !== undefined) {
            telemetryMeasures.preConfigureElapsedTime = preConfigureElapsedTime;
            logger.message(`Preconfigure elapsed time: ${preConfigureElapsedTime}`);
        }
        logger.message(`Configure elapsed time: ${configureElapsedTime}`);
        setIsConfiguring(false);
        setConfigureIsClean(false);
        setConfigureIsInBackground(false);
        // Let's consider that a cancelled configure is not a complete configure,
        // even if, depending when the cancel happened, the cache may have been loaded already.
        // Cancelled configures reach this point too, because of the finally construct.
        if (retc !== ConfigureBuildReturnCodeTypes.cancelled) {
            extension_1.extension.setCompletedConfigureInSession(true);
        }
        if (retc === ConfigureBuildReturnCodeTypes.success) {
            // Same start time for configure and an eventual pre-configure.
            let postConfigureStartTime = Date.now();
            // do any postConfigureScripts
            if (configuration.getAlwaysPostConfigure()) {
                postConfigureExitCode = await postConfigure(TriggeredBy.alwaysPostConfigure);
                if (postConfigureExitCode !== ConfigureBuildReturnCodeTypes.success) {
                    logger.message("Post-configure failed.");
                }
                postConfigureElapsedTime = util.elapsedTimeSince(postConfigureStartTime);
            }
        }
        if (postConfigureExitCode !== undefined) {
            telemetryProperties.postConfigureExitCode =
                postConfigureExitCode.toString();
        }
        if (postConfigureElapsedTime !== undefined) {
            telemetryMeasures.postConfigureElapsedTime = postConfigureElapsedTime;
            logger.message(`Postconfigure elapsed time: ${postConfigureElapsedTime}`);
        }
        telemetryProperties.buildTarget = processTargetForTelemetry(newBuildTarget);
        telemetry.logEvent("configure", telemetryProperties, telemetryMeasures);
        if (retc !== ConfigureBuildReturnCodeTypes.success) {
            logger.showOutputChannel();
        }
    }
}
exports.configure = configure;
async function parseLaunchConfigurations(progress, cancel, dryRunOutput, recursive = false) {
    if (cancel.isCancellationRequested) {
        return {
            retc: ConfigureBuildReturnCodeTypes.cancelled,
            elapsed: 0,
        };
    }
    let startTime = Date.now();
    let launchConfigurations = [];
    let onStatus = (status) => {
        progress.report({
            increment: 1,
            message: `${status}${recursive ? recursiveString : ""}...`,
        });
    };
    let onFoundLaunchConfiguration = (launchConfiguration) => {
        launchConfigurations.push(launchConfiguration);
    };
    let retc = await parser.parseLaunchConfigurations(cancel, dryRunOutput, onStatus, onFoundLaunchConfiguration);
    if (retc === ConfigureBuildReturnCodeTypes.success) {
        let launchConfigurationsStr = [];
        launchConfigurations.forEach((config) => {
            launchConfigurationsStr.push(configuration.launchConfigurationToString(config));
        });
        if (launchConfigurationsStr.length === 0) {
            logger.message(`No${getConfigureIsClean() ? "" : " new"}${getConfigureIsClean() ? "" : " new"} launch configurations have been detected.`);
        }
        else {
            // Sort and remove duplicates that can be created in the following scenarios:
            //    - the same target binary invoked several times with the same arguments and from the same path
            //    - a target binary invoked once with no parameters is still a duplicate
            //      of the entry generated by the linker command which produced the binary
            //    - sometimes the same binary is linked more than once in the same location
            //      (example: instrumentation) but the launch configurations list need only one entry,
            //      corresponding to the final binary, not the intermediate ones.
            launchConfigurationsStr = util.sortAndRemoveDuplicates(launchConfigurationsStr);
            logger.message(`Found the following ${launchConfigurationsStr.length}${getConfigureIsClean() ? "" : " new"} launch targets defined in the makefile: ${launchConfigurationsStr.join(";")}`);
        }
        if (getConfigureIsClean()) {
            // If configure is clean, delete any old launch targets found previously.
            configuration.setLaunchTargets(launchConfigurationsStr);
        }
        else {
            // If we're merging with a previous set of launch targets,
            // remove duplicates because sometimes, depending how the makefiles are set up,
            // a non --always-make dry-run may still log commands for up to date files.
            // These would be found also in the previous list of launch targets.
            configuration.setLaunchTargets(util.sortAndRemoveDuplicates(configuration.getLaunchTargets().concat(launchConfigurationsStr)));
        }
        logger.message(`Complete list of launch targets: ${configuration
            .getLaunchTargets()
            .join(";")}`);
    }
    return {
        retc,
        elapsed: util.elapsedTimeSince(startTime),
    };
}
async function parseTargets(progress, cancel, dryRunOutput, recursive = false) {
    if (cancel.isCancellationRequested) {
        return {
            retc: ConfigureBuildReturnCodeTypes.cancelled,
            elapsed: 0,
        };
    }
    let startTime = Date.now();
    let targets = [];
    let onStatus = (status) => {
        progress.report({
            increment: 1,
            message: `${status}${recursive ? recursiveString : ""}`,
        });
    };
    let onFoundTarget = (target) => {
        targets.push(target);
    };
    let retc = await parser.parseTargets(cancel, dryRunOutput, onStatus, onFoundTarget);
    if (retc === ConfigureBuildReturnCodeTypes.success) {
        if (targets.length === 0) {
            logger.message(`No${getConfigureIsClean() ? "" : " new"} build targets have been detected.`);
        }
        else {
            targets = targets.sort();
            logger.message(`Found the following ${targets.length}${getConfigureIsClean() ? "" : " new"} build targets defined in the makefile: ${targets.join(";")}`);
        }
        if (getConfigureIsClean()) {
            // If configure is clean, delete any old build targets found previously.
            configuration.setBuildTargets(targets);
        }
        else {
            // If we're merging with a previous set of build targets,
            // remove duplicates because sometimes, depending how the makefiles are set up,
            // a non --always-make dry-run may still log commands for up to date files.
            // These would be found also in the previous list of build targets.
            configuration.setBuildTargets(util.sortAndRemoveDuplicates(configuration.getBuildTargets().concat(targets)));
        }
        logger.message(`Complete list of build targets: ${configuration
            .getBuildTargets()
            .join(";")}`);
    }
    return {
        retc,
        elapsed: util.elapsedTimeSince(startTime),
    };
}
async function updateProvider(progress, cancel, dryRunOutput, recursive = false) {
    if (cancel.isCancellationRequested) {
        return {
            retc: ConfigureBuildReturnCodeTypes.cancelled,
            elapsed: 0,
        };
    }
    let startTime = Date.now();
    logger.message(`Updating the CppTools IntelliSense Configuration Provider.${recursive ? "(recursive)" : ""}`);
    let onStatus = (status) => {
        progress.report({
            increment: 1,
            message: `${status}${recursive ? recursiveString : ""} ...`,
        });
    };
    let onFoundCustomConfigProviderItem = (customConfigProviderItem) => {
        // Configurations parsed from dryrun output or build log are saved temporarily in the delta file index
        extension_1.extension.buildCustomConfigurationProvider(customConfigProviderItem);
    };
    // Empty the cummulative browse path before we start a new parse for custom configuration.
    // We can empty even if the configure is not clean, because the new browse paths will be appended
    // to the previous browse paths.
    extension_1.extension.clearCummulativeBrowsePath();
    let retc = await parser.parseCustomConfigProvider(cancel, dryRunOutput, onStatus, onFoundCustomConfigProviderItem);
    if (retc !== ConfigureBuildReturnCodeTypes.cancelled) {
        // If this configure is clean, overwrite the final file index, otherwise merge with it.
        let provider = getDeltaCustomConfigurationProvider();
        extension_1.extension
            .getCppConfigurationProvider()
            .mergeCustomConfigurationProvider(provider);
        // Empty the 'delta' configurations.
        provider.fileIndex.clear();
        provider.workspaceBrowse = {
            browsePath: [],
            compilerArgs: [],
            compilerPath: undefined,
            standard: undefined,
            windowsSdkVersion: undefined,
        };
        setCustomConfigurationProvider(provider);
        extension_1.extension.updateCppToolsProvider();
    }
    return {
        retc,
        elapsed: util.elapsedTimeSince(startTime),
    };
}
async function preprocessDryRun(progress, cancel, dryrunOutput, recursive = false) {
    if (cancel.isCancellationRequested) {
        return {
            retc: ConfigureBuildReturnCodeTypes.cancelled,
            elapsed: 0,
            result: "",
        };
    }
    let onStatus = (status) => {
        progress.report({
            increment: 1,
            message: `${status}${recursive ? recursiveString : ""} ...`,
        });
    };
    return parser.preprocessDryRunOutput(cancel, dryrunOutput, onStatus);
}
exports.preprocessDryRun = preprocessDryRun;
async function loadConfigurationFromCache(progress, cancel) {
    if (cancel.isCancellationRequested) {
        return {
            retc: ConfigureBuildReturnCodeTypes.cancelled,
            elapsed: 0,
        };
    }
    let startTime = Date.now();
    let elapsedTime;
    await util.scheduleAsyncTask(async () => {
        await extension_1.extension.registerCppToolsProvider();
    });
    let cachePath = configuration.getConfigurationCachePath();
    if (cachePath) {
        let content = util.readFile(cachePath);
        if (content) {
            try {
                progress.report({
                    increment: 1,
                    message: localize(19, null),
                });
                logger.message(`Configuring from cache: ${cachePath}`);
                let configurationCache = {
                    buildTargets: [],
                    launchTargets: [],
                    customConfigurationProvider: {
                        workspaceBrowse: {
                            browsePath: [],
                        },
                        fileIndex: [],
                    },
                };
                configurationCache = JSON.parse(content);
                // Trick to get proper URIs after reading from the cache.
                // At the moment of writing into the cache, the URIs have
                // the vscode.Uri.file(string) format.
                // After saving and re-reading, we need the below,
                // otherwise CppTools doesn't get anything.
                await util.scheduleTask(() => {
                    configurationCache.customConfigurationProvider.fileIndex.forEach((i) => {
                        i[1].uri = vscode.Uri.file(i[0]);
                    });
                });
                await util.scheduleTask(() => {
                    configuration.setBuildTargets(configurationCache.buildTargets);
                    configuration.setLaunchTargets(configurationCache.launchTargets);
                });
                await util.scheduleTask(() => {
                    // The configurations saved in the cache are read directly into the final file index.
                    extension_1.extension
                        .getCppConfigurationProvider()
                        .setCustomConfigurationProvider({
                        workspaceBrowse: configurationCache.customConfigurationProvider.workspaceBrowse,
                        // Trick to read a map from json
                        fileIndex: new Map(configurationCache.customConfigurationProvider.fileIndex),
                    });
                });
            }
            catch (e) {
                logger.message("An error occured while parsing the configuration cache.");
                logger.message("Running clean configure instead.");
                setConfigureIsInBackground(false);
                setConfigureIsClean(true);
            }
            elapsedTime = util.elapsedTimeSince(startTime);
            logger.message(`Load configuration from cache elapsed time: ${elapsedTime}`);
            // Log all the files read from cache after elapsed time is calculated.
            // IntelliSense should be available by now for all files.
            // Don't await for this logging step. This may produce some interleaved output
            // but it will still be readable.
            await util.scheduleTask(() => {
                extension_1.extension
                    .getCppConfigurationProvider()
                    .logConfigurationProviderComplete();
            });
        }
        else {
            return {
                retc: ConfigureBuildReturnCodeTypes.notFound,
                elapsed: 0,
            };
        }
    }
    else {
        return {
            retc: ConfigureBuildReturnCodeTypes.notFound,
            elapsed: 0,
        };
    }
    return {
        retc: cancel.isCancellationRequested
            ? ConfigureBuildReturnCodeTypes.cancelled
            : ConfigureBuildReturnCodeTypes.success,
        elapsed: elapsedTime,
    };
}
exports.loadConfigurationFromCache = loadConfigurationFromCache;
// Update IntelliSense and launch targets with information parsed from a user given build log,
// the dryrun cache or make dryrun output if the cache is not present.
// Sometimes the targets do not need an update (for example, when there has been
// a change in the current build target), as requested through the boolean.
// This saves unnecessary parsing which may be signifficant for very big code bases.
async function doConfigure(progress, cancel, updateTargets = true, recursiveDoConfigure = false) {
    let subphaseStats = {};
    // Configure does not start in the background (we have to load a configuration cache first).
    setConfigureIsInBackground(false);
    // If available, load all the configure constructs via json from the cache file.
    // If this doConfigure is in level 1 of recursion, avoid loading the configuration cache again
    // since it's been done at recursion level 0.
    // Also skip if there was at least one completed configure before in this VSCode session,
    // regardless of any other failure error code, because at the end of that last configure,
    // the extension saved this configuration content (that we can skip loading now) into the cache.
    // The loading from cache is cheap, but logging it (for Verbose level) may interfere unnecessarily
    // with the output channel, especially since that logging is not awaited for.
    if (!recursiveDoConfigure && !extension_1.extension.getCompletedConfigureInSession()) {
        subphaseStats.loadFromCache = await loadConfigurationFromCache(progress, cancel);
        if (subphaseStats.loadFromCache.retc ===
            ConfigureBuildReturnCodeTypes.cancelled) {
            return subphaseStats;
        }
        else if (subphaseStats.loadFromCache.retc === ConfigureBuildReturnCodeTypes.success) {
            // In case of success, the following configure steps should not block any other operation
            // and can be performed in the background.
            setConfigureIsInBackground(true);
        }
    }
    else {
        logger.message("Loading configurations from cache is not necessary.", "Verbose");
    }
    // This generates the dryrun output (saving it on disk) or reads an alternative build log.
    // Timings for this sub-phase happen inside.
    subphaseStats.generateParseContent = await generateParseContent(progress, cancel, false, recursiveDoConfigure);
    if (subphaseStats.generateParseContent.retc ===
        ConfigureBuildReturnCodeTypes.cancelled) {
        return subphaseStats;
    }
    // Some initial preprocessing required before any parsing is done.
    logger.message(`Preprocessing: "${parseFile}"`);
    let preprocessedDryrunOutput;
    let preprocessedDryrunOutputResult = await preprocessDryRun(progress, cancel, parseContent || "", recursiveDoConfigure);
    subphaseStats.preprocessParseContent = {
        retc: preprocessedDryrunOutputResult.retc,
        elapsed: preprocessedDryrunOutputResult.retc,
    };
    if (preprocessedDryrunOutputResult.result) {
        preprocessedDryrunOutput = preprocessedDryrunOutputResult.result;
    }
    else {
        return subphaseStats;
    }
    logger.message(`Preprocess elapsed time: ${subphaseStats.preprocessParseContent.elapsed}`);
    // Configure IntelliSense
    // Don't override retc1, since make invocations may fail with errors different than cancel
    // and we still complete the configure process.
    logger.message("Parsing for IntelliSense.");
    subphaseStats.parseIntelliSense = await updateProvider(progress, cancel, preprocessedDryrunOutput, recursiveDoConfigure);
    if (subphaseStats.parseIntelliSense.retc ===
        ConfigureBuildReturnCodeTypes.cancelled) {
        return subphaseStats;
    }
    logger.message(`Parsing for IntelliSense elapsed time: ${subphaseStats.parseIntelliSense.elapsed}`);
    // Configure launch targets as parsed from the makefile
    // (and not as read from settings via makefile.launchConfigurations).
    logger.message(`Parsing for launch targets.`);
    subphaseStats.parseLaunch = await parseLaunchConfigurations(progress, cancel, preprocessedDryrunOutput, recursiveDoConfigure);
    if (subphaseStats.parseLaunch.retc === ConfigureBuildReturnCodeTypes.cancelled) {
        return subphaseStats;
    }
    logger.message(`Parsing for launch targets elapsed time: ${subphaseStats.parseLaunch.elapsed}`);
    // Verify if the current launch configuration is still part of the list and unset otherwise.
    // By this point, configuration.getLaunchTargets() contains a complete list (old and new).
    let currentLaunchConfiguration = configuration.getCurrentLaunchConfiguration();
    let currentLaunchConfigurationStr = currentLaunchConfiguration
        ? configuration.launchConfigurationToString(currentLaunchConfiguration)
        : "";
    if (currentLaunchConfigurationStr !== "" &&
        currentLaunchConfiguration &&
        !configuration
            .getLaunchConfigurations()
            .includes(currentLaunchConfiguration)) {
        logger.message(`Current launch configuration ${currentLaunchConfigurationStr} is no longer present in the available list.`);
        await configuration.setLaunchConfigurationByName("");
    }
    // Configure build targets only if necessary:
    // if the caller considers we need a build target update
    // or if the build target array hasn't been populated by now
    // or if it contains only 'all' which we push automatically.
    let buildTargets = configuration.getBuildTargets();
    if (updateTargets ||
        buildTargets.length === 0 ||
        (buildTargets.length === 1 && buildTargets[0] === "all")) {
        logger.message("Generating parse content for build targets.");
        subphaseStats.dryrunTargets = await generateParseContent(progress, cancel, true, recursiveDoConfigure);
        if (subphaseStats.dryrunTargets.retc ===
            ConfigureBuildReturnCodeTypes.cancelled) {
            return subphaseStats;
        }
        logger.message(`Parsing for build targets from: "${parseFile}"`);
        subphaseStats.parseTargets = await parseTargets(progress, cancel, parseContent || "", recursiveDoConfigure);
        if (subphaseStats.parseTargets.retc ===
            ConfigureBuildReturnCodeTypes.cancelled) {
            return subphaseStats;
        }
        logger.message(`Parsing build targets elapsed time: ${subphaseStats.parseTargets.elapsed}`);
        // Verify if the current build target is still part of the list and unset otherwise.
        // By this point, configuration.getBuildTargets() contains a comlete list (old and new).
        buildTargets = configuration.getBuildTargets();
        let currentBuildTarget = configuration.getCurrentTarget();
        if (currentBuildTarget &&
            currentBuildTarget !== "" &&
            currentBuildTarget !== "all" &&
            !buildTargets.includes(currentBuildTarget)) {
            logger.message(`Current build target ${currentBuildTarget} is no longer present in the available list.` +
                ` Unsetting the current build target.`);
            // Setting a new target by name is not triggering a configure
            // (only its caller setBuildTarget, invoked by its command or status bar button).
            // But we do need to configure again after a build target change,
            // so call doConfigure here and not configure.
            // We don't need to alter yet any dirty or pending states, this being an 'inner' call of configure.
            // We don't need to consider makefile.configureAfterCommand: even if set to false
            // (which would result in changing a build target without a following configure - in the normal scenario)
            // now we need to configure because this build target reset was done under the covers
            // by the extension and as a result of a configure (which can only be triggered by the user
            // if makefile.configureAfterCommand is set to false).
            // Calling doConfigure here will not result in extra telemetry (just extra logging).
            // The recursive call to doConfigure will fall still under the same progress bar and cancel button
            // as the caller and its result will be included into the telemetry information reported by that.
            // There can be only one level of recursivity because once the target is reset to empty,
            // it is impossible to get into the state of having a target that is not found in the available list.
            await configuration.setTargetByName("");
            logger.message("Automatically reconfiguring the project after a build target change.");
            recursiveDoConfigure = true;
            // This one level recursive doConfigure will keep the same clean state as the caller
            // since setConfigureIsClean runs before the caller configure and resets after
            // the eventual recursive configure.
            subphaseStats.recursiveConfigure = await doConfigure(progress, cancel, updateTargets, true);
        }
    }
    // Let the caller collect and log all information regarding the subphases return codes.
    if (!recursiveDoConfigure) {
        logger.message("Configure finished. The status for all the subphases that ran:");
        let subphases = getRelevantConfigStats(subphaseStats);
        subphases.forEach((subphase) => {
            logger.message(`${subphase.name}: return code = ${subphase.status.retc}, ` +
                `elapsed time = ${subphase.status.elapsed}`);
        });
    }
    extension_1.extension.getState().configureDirty = false;
    return subphaseStats;
}
exports.doConfigure = doConfigure;
// A clean configure = a non clean configure + empty the CppTools custom IntelliSense config provider.
// In the case of a dry-run setting (not a build log) it also means adding --always-make to the make invocation.
// Because we want to first read any existing cache and let the remaining heavy processing run in the background,
// we don't delete the cache here. We just mark it to be later deleted by the non clean configure.
async function cleanConfigure(triggeredBy, updateTargets = true) {
    // Even if the core configure process also checks for blocking operations,
    // verify the same here as well, to make sure that we don't delete the caches
    // only to return early from the core configure.
    if (blockedByOp(Operations.configure)) {
        return ConfigureBuildReturnCodeTypes.blocked;
    }
    setConfigureIsClean(true);
    return configure(triggeredBy, updateTargets);
}
exports.cleanConfigure = cleanConfigure;


/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseStandard = exports.parseLaunchConfigurations = exports.parseCustomConfigProvider = exports.preprocessDryRunOutput = exports.parseTargets = void 0;
// TODO: support also the scenario of parsing a build log,
// to overcome some of --dry-run limitations
// (like some exceptions to the 'do not execute' rule
// or dependencies on a real build)
const configuration = __webpack_require__(184);
const cpp = __webpack_require__(64);
const ext = __webpack_require__(171);
const logger = __webpack_require__(900);
const make = __webpack_require__(636);
const path = __webpack_require__(72);
const util = __webpack_require__(168);
// List of compiler tools plus the most common aliases cc and c++
// ++ needs to be escaped for the regular expression in parseLineAsTool.
// Versioning and cross compilers naming variations dont' need to be included in this list,
// they will be considered in the regular expression.
// If one compiler name is a substring of another, include it after in this list.
// todo: any other scenarios of aliases and symlinks
// that would make parseLineAsTool to not match the regular expression,
// therefore wrongly skipping over compilation lines?
const compilers = [
    "ccache",
    "clang\\+\\+",
    "clang-cl",
    "clang-cpp",
    "clang",
    "gcc",
    "gpp",
    "cpp",
    "icc",
    "cc",
    "icl",
    "cl",
    "g\\+\\+",
    "c\\+\\+",
];
const linkers = [
    "ccache",
    "ilink",
    "link",
    "ld",
    "ccld",
    "gcc",
    "clang\\+\\+",
    "clang",
    "cc",
    "g\\+\\+",
    "c\\+\\+",
];
const sourceFileExtensions = ["cpp", "cc", "cxx", "c"];
const chunkSize = 100;
async function parseTargets(cancel, verboseLog, statusCallback, foundTargetCallback) {
    if (cancel.isCancellationRequested) {
        return make.ConfigureBuildReturnCodeTypes.cancelled;
    }
    // Extract the text between "# Files" and "# Finished Make data base" lines
    // There can be more than one matching section.
    let regexpExtract = /(# Files\n*)([\s\S]*?)(\n# Finished Make data base)/gm;
    let result;
    let extractedLog = "";
    let matches = [];
    let match;
    result = await util.scheduleTask(() => regexpExtract.exec(verboseLog));
    while (result) {
        extractedLog = result[2];
        // Skip lines starting with {#,.} or preceeded by "# Not a target" and extract the target.
        // Additionally, if makefile.phonyOnlyTargets is true, include only targets
        // succeeded by "#  Phony target (prerequisite of .PHONY).".
        let regexpTargetStr = "^(?!\\n?[#\\.])(?<!^\\n?# Not a target:\\s*)\\s*(\\S*[^:]):\\s+";
        if (configuration.getPhonyOnlyTargets()) {
            regexpTargetStr +=
                ".*\\s+(?=#  Phony target \\(prerequisite of \\.PHONY\\)\\.)";
        }
        let regexpTarget = RegExp(regexpTargetStr, "mg");
        match = regexpTarget.exec(extractedLog);
        if (match) {
            let done = false;
            let doParsingChunk = () => {
                let chunkIndex = 0;
                while (match && chunkIndex <= chunkSize) {
                    // Make sure we don't insert duplicates.
                    // They can be caused by the makefile syntax of defining variables for a target.
                    // That creates multiple lines with the same target name followed by :,
                    // which is the pattern parsed here.
                    if (!matches.includes(match[1])) {
                        matches.push(match[1]);
                        foundTargetCallback(match[1]);
                    }
                    statusCallback("Parsing build targets...");
                    match = regexpTarget.exec(extractedLog);
                    if (!match) {
                        done = true;
                    }
                    chunkIndex++;
                }
            };
            while (!done) {
                if (cancel.isCancellationRequested) {
                    return make.ConfigureBuildReturnCodeTypes.cancelled;
                }
                await util.scheduleTask(doParsingChunk);
            }
        } // if match
        result = await util.scheduleTask(() => regexpExtract.exec(verboseLog));
    } // while result
    return cancel.isCancellationRequested
        ? make.ConfigureBuildReturnCodeTypes.cancelled
        : make.ConfigureBuildReturnCodeTypes.success;
}
exports.parseTargets = parseTargets;
// Make various preprocessing transformations on the dry-run output
// TODO: "cmd -c", "start cmd", "exit"
async function preprocessDryRunOutput(cancel, dryRunOutputStr, statusCallback) {
    let preprocessedDryRunOutputStr = dryRunOutputStr;
    if (cancel.isCancellationRequested) {
        return {
            retc: make.ConfigureBuildReturnCodeTypes.cancelled,
            elapsed: 0,
        };
    }
    let startTime = Date.now();
    statusCallback("Preprocessing the dry-run output");
    // Array of tasks required to be executed during the preprocess configure phase
    let preprocessTasks = [];
    // Expand {REPO:VSCODE-MAKEFILE-TOOLS} to the full path of the root of the extension
    // This is used for the pre-created dry-run logs consumed by the tests,
    // in order to be able to have source files and includes for the test repro
    // within the test subfolder of the extension repo, while still exercising full paths for parsing
    // and not generating a different output with every new location where Makefile Tools is enlisted.
    // A real user scenario wouldn't need this construct.
    preprocessTasks.push(function () {
        if (process.env["MAKEFILE_TOOLS_TESTING"] === "1") {
            let extensionRootPath = path.resolve(__dirname, "../");
            preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(/{REPO:VSCODE-MAKEFILE-TOOLS}/gm, extensionRootPath);
        }
    });
    // Some compiler/linker commands are split on multiple lines.
    // At the end of every intermediate line is at least a space, then a \ and end of line.
    // Concatenate all these lines to see clearly each command on one line.
    let regexp = /\s+\\$\n/gm;
    preprocessTasks.push(function () {
        preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(regexp, " ");
    });
    // In case we parse a build log (as opposed to a dryrun log) for a project using libtool,
    // capture the compiler commands reported by the libtool output.
    // They may be redundant with the corresponding line from the dryrun (which is present in the build log as well)
    // but in case of $ variables and commands invoked on the fly, the second time all are resolved/expanded
    // and we can actually send good IntelliSense information for a good source code URL.
    // For such a case, look at MONO (git clone https://github.com/mono/mono.git), for source code cordxtra.c
    // Line with the original command, containing a 'test' command to determine on the fly the source code path.
    // This line is present in the dryrun and also in the build log. Can't easily parse the correct source code path.
    // /bin/bash ./libtool  --tag=CC   --mode=compile gcc -DHAVE_CONFIG_H   -I./include -I./include  -DGC_PTHREAD_START_STANDALONE    -fexceptions -Wall -Wextra -Wpedantic -Wno-long-long -g -O2 -fno-strict-aliasing  -MT cord/libcord_la-cordxtra.lo -MD -MP -MF cord/.deps/libcord_la-cordxtra.Tpo -c -o cord/libcord_la-cordxtra.lo `test -f 'cord/cordxtra.c' || echo './'`cord/cordxtra.c
    // Line with the resolved command, from which the extension can parse a valid source code path.
    // This line is present only in the build log, immediately following the above line.
    // libtool: compile:  gcc -DHAVE_CONFIG_H -I./include -I./include -DGC_PTHREAD_START_STANDALONE -fexceptions -Wall -Wextra -Wpedantic -Wno-long-long -g -O2 -fno-strict-aliasing -MT cord/libcord_la-cordxtra.lo -MD -MP -MF cord/.deps/libcord_la-cordxtra.Tpo -c cord/cordxtra.c  -fPIC -DPIC -o cord/.libs/libcord_la-cordxtra.o
    preprocessTasks.push(function () {
        regexp = /libtool: compile:|libtool: link:/gm;
        preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(regexp, "\nLIBTOOL_PATTERN\n");
    });
    // Process some more makefile output weirdness
    // When --mode=compile or --mode=link are present in a line, we can ignore anything that is before
    // and all that is after is a normal complete compiler or link command.
    // Replace these patterns with end of line so that the parser will see only the right half.
    preprocessTasks.push(function () {
        regexp = /--mode=compile|--mode=link/gm;
        preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(regexp, "\nLIBTOOL_PATTERN\n");
    });
    // Remove lines with $() since they come from unexpanded yet variables. The extension can't do anything yet
    // about them anyway and also there will be a correspondent line in the dryrun with these variables expanded.
    // Don't remove lines with $ without paranthesis, there are valid compilation lines that would be ignored otherwise.
    preprocessTasks.push(function () {
        regexp = /.*\$\(.*/gm;
        preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(regexp, "");
    });
    // Extract the link command
    // Keep the /link switch to the cl command because otherwise we will see compiling without /c
    // and we will deduce some other output binary based on its /Fe or /Fo or first source given,
    // instead of the output binary defined via the link operation (which will be parsed on the next line).
    // TODO: address more accurately the overriding scenarios between output files defined via cl.exe
    // and output files defined via cl.exe /link.
    // For example, "cl.exe source.cpp /Fetest.exe /link /debug" still produces test.exe
    // but cl.exe source.cpp /Fetest.exe /link /out:test2.exe produces only test2.exe.
    // For now, ignore any output binary rules of cl while having the /link switch.
    preprocessTasks.push(function () {
        if (process.platform === "win32") {
            preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(/ \/link /g, "/link \n link.exe ");
        }
    });
    // The splitting of multiple commands is better to be done at the end.
    // Oherwise, this scenario interferes with the line ending '\' in some cases
    // (see MAKE repo, ar.c compiler command, for example).
    // Split multiple commands concatenated by '&&'
    preprocessTasks.push(function () {
        preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(/ && /g, "\n");
    });
    // Split multiple commands concatenated by ";"
    preprocessTasks.push(function () {
        preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(/;/g, "\n");
    });
    // Replace multiple "-" sequence because it hangs the regular expression engine.
    // Strings with this pattern do not contain useful information to parse, they are safe to replace
    // in our internal representation of the dryrun or build log.
    // Replace with "- " instead of remove since this pattern does not cause hang or slow processing
    // and so that we have a similar view of the preprocessed text.
    preprocessTasks.push(function () {
        regexp = /------/gm;
        preprocessedDryRunOutputStr = preprocessedDryRunOutputStr.replace(regexp, "- - - - - - ");
    });
    // Loop through all the configure preprocess tasks, checking for cancel.
    for (const func of preprocessTasks) {
        await util.scheduleTask(func);
        if (cancel.isCancellationRequested) {
            return {
                retc: make.ConfigureBuildReturnCodeTypes.cancelled,
                elapsed: util.elapsedTimeSince(startTime),
            };
        }
    }
    return {
        retc: make.ConfigureBuildReturnCodeTypes.success,
        elapsed: util.elapsedTimeSince(startTime),
        result: preprocessedDryRunOutputStr,
    };
    // TODO: Insert preprocessed files content
    // TODO: Wrappers (example: cl.cmd)
}
exports.preprocessDryRunOutput = preprocessDryRunOutput;
// Helper that parses the given line as a tool invocation.
// The full path that is returned is calculated with the following logic:
//     - make a full path out of the one given in the makefile
//       and the current path that is calculated as of now
//     - if the tool is not found at the full path above and if requested,
//       it will be searched in all the paths of the PATH environment variable
//       and the first one found will be returned
// TODO: handle the following corner cases:
//     - quotes only around directory (file name outside quotes)
//     - path containing "toolName(no extension) " in the middle
async function parseLineAsTool(line, toolNames, currentPath, isCompilerOrLinker = true) {
    var _a;
    // To avoid hard-coding (and ever maintaining) in the tools list
    // the various compilers/linkers that can have versions, prefixes or suffixes
    // in their names, include a crafted regex around each tool name.
    // Any number of prefix or suffix text, separated by '-'.
    let versionedToolNames = [];
    const prefixRegex = isCompilerOrLinker ? "(([a-zA-Z0-9-_.]*-)*" : "";
    const suffixRegex = isCompilerOrLinker ? "(-[a-zA-Z0-9-_.]*)*)" : "";
    toolNames.forEach((tool) => {
        var _a;
        // Check if the user defined this tool as to be excluded
        if (!((_a = configuration.getExcludeCompilerNames()) === null || _a === void 0 ? void 0 : _a.includes(tool))) {
            versionedToolNames.push(`${prefixRegex}${tool}${suffixRegex}`);
        }
    });
    // Add any additional tools specified by the user
    // when we are looking at compilers or linkers,
    // not when we parse for binary targets.
    if (isCompilerOrLinker) {
        (_a = configuration.getAdditionalCompilerNames()) === null || _a === void 0 ? void 0 : _a.forEach((compiler) => {
            if (!toolNames.includes(compiler)) {
                versionedToolNames.push(`${prefixRegex}${compiler}${suffixRegex}`);
            }
        });
    }
    // - any spaces/tabs before the tool invocation
    // - with or without path (relative -to the makefile location- or full)
    // - with or without extension (windows only)
    // - with or without quotes
    // - must have at least one space or tab after the tool invocation
    let regexpStr = '^[\\s\\"]*(.*?)(';
    if (process.platform === "win32") {
        regexpStr += versionedToolNames.join("\\.exe|");
        // ensure to append the extension for the last tool in the array since join didn't.
        if (versionedToolNames.length > 0) {
            regexpStr += "\\.exe";
        }
        regexpStr += "|";
    }
    regexpStr += versionedToolNames.join("|") + ')(\\s|\\"\\s)(.*)$';
    let regexp = RegExp(regexpStr, "mg");
    let match = regexp.exec(line);
    if (!match) {
        return undefined;
    }
    let toolPathInMakefile = match[1];
    let toolNameInMakefile = match[2];
    if (process.platform === "win32" && !path.extname(toolNameInMakefile)) {
        toolNameInMakefile += ".exe";
    }
    // Quotes are not needed either for the compiler path or the current path.
    // checkFileExists works just fine without quotes,
    // but makeFullPath gets confused sometimes for some quotes scenarios.
    currentPath = util.removeQuotes(currentPath);
    toolPathInMakefile = toolPathInMakefile.trimLeft();
    toolPathInMakefile = util.removeQuotes(toolPathInMakefile);
    let toolFullPath = await util.makeFullPath(toolPathInMakefile + toolNameInMakefile, currentPath);
    let toolFound = util.checkFileExistsSync(toolFullPath);
    // Reject a regexp match that doesn't have a real path before the tool invocation,
    // like for example link.exe /out:cl.exe being mistakenly parsed as a compiler command.
    // Basically, only spaces and/or tabs and/or a valid path are allowed before the compiler name.
    // There is no other easy way to eliminate that case via the regexp
    // (it must accept a string before the tool).
    // For now, we consider a path as valid if it can be found on disk.
    // TODO: be able to recognize a string as a valid path even if it doesn't exist on disk,
    // in case the project has a setup phase that is copying/installing stuff (like the toolset)
    // and it does not have yet a build in place, therefore a path or file is not yet found on disk,
    // even if it is valid.
    // In other words, we allow the tool to not be found only if the makefile invokes it without any path,
    // which opens the possibility of searching the tool through all the paths in the PATH environment variable.
    // Note: when searching for execution targets in the makefile, if a binary was not previously built,
    // the extension will not detect it for a launch configuration because of this following return.
    if (toolPathInMakefile !== "" && !toolFound) {
        return undefined;
    }
    return {
        // don't use join and neither paths/filenames processed above if we want to keep the exact text in the makefile
        pathInMakefile: match[1] + match[2],
        fullPath: toolFullPath,
        arguments: match[match.length - 1],
        found: toolFound,
    };
}
// Helper to identify anything that looks like a compiler switch in the given command string.
// The result is passed to IntelliSense custom configuration provider as compilerArgs.
// excludeArgs helps with narrowing down the search, when we know for sure that we're not
// interested in some switches. For example, -D, -I, -FI, -include, -std are treated separately.
// Once we identified what looks to be the switches in the given command line, for each region
// between two consecutive switches we let the shell parse it into arguments via a script invocation
// (instead of us using other parser helpers in this module) to be in sync with how CppTools
// expects the compiler arguments to be passed in.
async function parseAnySwitchFromToolArguments(args, excludeArgs) {
    // Identify the non value part of the switch: prefix, switch name
    // and what may separate this from an eventual switch value
    let switches = [];
    let regExpStr = "(^|\\s+)(--|-" +
        // On Win32 allow '/' as switch prefix as well,
        // otherwise it conflicts with path character
        (process.platform === "win32" ? "|\\/" : "") +
        ")([a-zA-Z0-9_]+)";
    let regexp = RegExp(regExpStr, "mg");
    let match1;
    let match2;
    let index1 = -1;
    let index2 = -1;
    // This contains all the compilation command fragments in between two different consecutive switches
    // (except the ones we plan to ignore, specified by excludeArgs).
    // Once this function is done concatenating into compilerArgRegions,
    // we call the compiler args parsing script once for the whole list of regions
    // (as opposed to invoking it for each fragment separately).
    let compilerArgRegions = "";
    // With every loop iteration we need 2 switch matches so that we analyze the text
    // that is between them. If the current match is the last one, then we will analyze
    // everything until the end of line.
    match1 = regexp.exec(args);
    // Even if we don't find any arguments that have a switch syntax,
    // consider the whole command line to parse into arguments
    // (this case is encountered when we call this helper while we parse launch targets).
    if (!match1) {
        compilerArgRegions = args;
    }
    while (match1) {
        // Marks the beginning of the current switch (prefix + name).
        // The exact switch prefix is needed when we call other parser helpers later
        // and also CppTools expects the compiler arguments to be prefixed
        // when received from the custom providers.
        index1 = regexp.lastIndex - match1[0].length;
        // Marks the beginning of the next switch
        match2 = regexp.exec(args);
        if (match2) {
            index2 = regexp.lastIndex - match2[0].length;
        }
        else {
            index2 = args.length;
        }
        // The substring to analyze for the current switch.
        // It doesn't help to look beyond the next switch match.
        let partialArgs = args.substring(index1, index2);
        let swi = match1[3];
        swi = swi.trim();
        // Skip over any switches that we know we don't need
        let exclude = false;
        for (const arg of excludeArgs) {
            if (swi.startsWith(arg)) {
                exclude = true;
                break;
            }
        }
        if (!exclude) {
            compilerArgRegions += partialArgs;
        }
        match1 = match2;
    }
    let parseCompilerArgsScriptFile = util.parseCompilerArgsScriptFile();
    if (process.platform === "win32") {
        // There is a potential problem with the windows version of the script:
        // A fragment like "-sw1,-sw2,-sw3" gets split by comma and a fragment like
        // "-SwDef=Val" is split by equal. Opened GitHub issue
        // https://github.com/microsoft/vscode-makefile-tools/issues/149.
        // These scenarios don't happen on pure windows but can be encountered in classic linux
        // scenarios run under MSYS/MINGW.
        // Until a better fix is implemented for 149, use a temporary marker that we replace from and into.
        compilerArgRegions = compilerArgRegions.replace(/\,/gm, "DONT_USE_COMMA_AS_SEPARATOR");
        compilerArgRegions = compilerArgRegions.replace(/\=/gm, "DONT_USE_EQUAL_AS_SEPARATOR");
    }
    let scriptArgs = [];
    let runCommand;
    if (process.platform === "win32") {
        runCommand = "cmd";
        scriptArgs.push("/c");
        scriptArgs.push(`""${parseCompilerArgsScriptFile}" ${compilerArgRegions}"`);
    }
    else {
        runCommand = "/bin/bash";
        scriptArgs.push("-c");
        scriptArgs.push(`"source '${parseCompilerArgsScriptFile}' ${compilerArgRegions}"`);
    }
    try {
        let stdout = (result) => {
            if (process.platform === "win32") {
                // Restore the commas and equals that were hidden from the script invocation.
                result = result.replace(/DONT_USE_COMMA_AS_SEPARATOR/gm, ",");
                result = result.replace(/DONT_USE_EQUAL_AS_SEPARATOR/gm, "=");
            }
            let results = result.replace(/\r\n/gm, "\n").split("\n");
            // In case of concatenated separators, the shell sees different empty arguments
            // which we can remove (most common is more spaces not being seen as a single space).
            results.forEach((res) => {
                if (res !== "") {
                    switches.push(res.trim());
                }
            });
        };
        let stderr = (result) => {
            logger.message(`Error while running the compiler args parser script '${parseCompilerArgsScriptFile}' ` +
                `for regions ("${compilerArgRegions})": "${result}"`, "Normal");
        };
        // Running the compiler arguments parsing script can use the system locale.
        const result = await util.spawnChildProcess(runCommand, scriptArgs, util.getWorkspaceRoot(), false, false, stdout, stderr);
        if (result.returnCode !== 0) {
            logger.message(`The compiler args parser script '${parseCompilerArgsScriptFile}' failed with error code ${result.returnCode} for regions (${compilerArgRegions})`, "Normal");
        }
    }
    catch (error) {
        logger.message(error);
    }
    return switches;
}
// Helper that parses for a particular switch that can occur one or more times
// in the tool command line (example -I or -D for compiler)
// and returns an array of the values passed via that switch
// todo: refactor common parts in parseMultipleSwitchFromToolArguments and parseSingleSwitchFromToolArguments
// removeSurroundingQuotes: needs to be false when called from parseAnySwitchFromToolArguments,
// and true otherwise. We need to analyze more scenarios before setting in stone a particular algorithm
// regarding the decision to remove or not to remove them.
function parseMultipleSwitchFromToolArguments(args, sw, removeSurroundingQuotes = true) {
    // - '-' or '/' or '--' as switch prefix
    // - before each switch, we allow only for one or more spaces/tabs OR begining of line,
    //   to reject a case where a part of a path looks like a switch with its value
    //    (example: "drive:/dir/Ifolder" taking /Ifolder as include switch).
    // - can be wrapped by a pair of ', before the switch prefix and after the switch value
    //    (example: '-DMY_DEFINE=SOMETHING' or '/I drive/folder/subfolder').
    // - one or none or more spaces/tabs or ':' or '=' between the switch and the value
    //    (examples): -Ipath, -I path, -I    path, -std=gnu89
    // - the value can be wrapped by a pair of ", ' or `, even simmetrical combinations ('"..."')
    //   and should be able to not stop at space when inside the quote characters.
    //    (examples): -D'MY_DEFINE', -D "MY_DEFINE=SOME_VALUE", -I`drive:/folder with space/subfolder`
    // - when the switch value contains a '=', the right half can be also quoted by ', ", ` or '"..."'
    //   and should be able to not stop at space when inside the quote characters.
    //    (example): -DMY_DEFINE='"SOME_VALUE"'
    function anythingBetweenQuotes(fullyQuoted) {
        // The basic pattern for anything between quotes accepts equally single quote, double quote or back tick.
        // One pattern that is accepted is to wrap between escaped quotes and allow inside anything (including non-escaped quotes) except escaped quotes.
        // Another pattern that is accepted is to wrap between non-escaped quotes and allow inside anything (including escaped quotes) except non-escaped quotes.
        // One problem with the "..." pattern is that a simple "\" (or anything ending with \") will not know if the backslash is part of the inside of quote-quote
        // or together with the following quote represents a \" and needs to look forward for another ending quote.
        // If there is another quote somewhere else later in the command line (another -D or a file name wrapped in quotes) everything until that first upcoming quote
        // will be included.
        // Example that doesn't work: -DSLASH_DEFINE="\" -DSOME_OTHER_SWITCH "drive:\folder\file.extension"
        //                            SLASH_DEFINE is equal to '\" -DSOME_OTHER_SWITCH '
        // Example that works: -DGIT_VERSION=" \" 1.2.3 \" "
        //                      GIT_VERSION is equal to ' \" 1.2.3 \" '
        // Unfortunately, we also can't identify this to log in the output channel for later analysis of more makefile switch and quoting user scenarios.
        // Fortunately, we didn't encounter the last scenario, only the first.
        function anythingBetweenQuotesBasicPattern(quoteChar) {
            return ("\\\\\\" +
                quoteChar +
                "((?!\\\\\\" +
                quoteChar +
                ").)*\\\\\\" +
                quoteChar +
                "|" + // \" anything(except \") \"
                "\\" +
                quoteChar +
                "(\\\\\\" +
                quoteChar +
                "|[^\\" +
                quoteChar +
                "])*?[^\\\\\\" +
                quoteChar +
                "]?\\" +
                quoteChar); // " anything (except ") "
        }
        // If the switch is fully quoted with ', like ('-DMY_DEFINE="MyValue"'), don't allow single quotes
        // inside the switch value.
        // One example of what can be broken if we don't do this: gcc '-DDEF1=' '-DDef2=val2'
        // in which case DEF1 would be seen as DEF1=' ' instead of empty =
        let str = anythingBetweenQuotesBasicPattern("`") +
            "|" +
            anythingBetweenQuotesBasicPattern('"') +
            (fullyQuoted ? "" : "|" + anythingBetweenQuotesBasicPattern("'"));
        return str;
    }
    function mainPattern(fullyQuoted) {
        let pattern = 
        // prefix and switch name
        "(" +
            "\\/" +
            sw +
            "(:|=|\\s*)|-" +
            sw +
            "(:|=|\\s*)|--" +
            sw +
            "(:|=|\\s*)" +
            ")" +
            // switch value
            "(" +
            anythingBetweenQuotes(fullyQuoted) +
            "|" +
            // not fully quoted switch value scenarios
            "(" +
            // the left side (or whole value if no '=' is following)
            "(" +
            "[^\\s=]+" + // not quoted switch value component
            ")" +
            "(" +
            "=" + // separator between switch value left side and right side
            "(" +
            anythingBetweenQuotes(fullyQuoted) +
            "|" +
            "[^\\s]+" + // not quoted right side of switch value
            // equal is actually allowed (example gcc switch: -fmacro-prefix-map=./= )
            ")?" + // right side of '=' is optional, meaning we can define as nothing, like: -DMyDefine=
            ")?" + // = is also optional (simple define)
            ")" +
            ")";
        return pattern;
    }
    let regexpStr = "(" +
        "^|\\s+" +
        ")" + // start of line or any amount of space character
        "(" +
        "(" +
        "\\'" +
        mainPattern(true) +
        "\\'" +
        ")" +
        "|" + // switch if fully quoted
        "(" +
        mainPattern(false) +
        ")" + // switch if not fully quoted
        ")";
    let regexp = RegExp(regexpStr, "mg");
    let match;
    let results = [];
    match = regexp.exec(args);
    while (match) {
        let matchIndex = match[2].startsWith("'") && match[2].endsWith("'") ? 8 : 26;
        let result = match[matchIndex];
        if (result) {
            if (removeSurroundingQuotes) {
                result = util.removeSurroundingQuotes(result);
            }
            results.push(result);
        }
        match = regexp.exec(args);
    }
    return results;
}
// Helper that parses for any switch from a set that can occur one or more times
// in the tool command line and returns an array of the values passed via all of the identified switches.
// It is based on parseMultipleSwitchFromToolArguments (extends the regex for more switches
// and also accepts a switch without a following value, like -m32 or -m64 are different from -arch:arm).
// This is useful especially when we need the order of these different switches in the command line:
// for example, when we want to know which switch wins (for cancelling pairs or for overriding switches).
// Parsing the switches separately wouldn't give us the order information.
// Also, we don't have yet a function to parse the whole string of arguments into individual arguments,
// so that we anaylze each switch one by one, thus knowing the order.
// TODO: review the regexp for parseMultipleSwitchFromToolArguments to make sure all new capabilities
// are reflected in the regexp here (especially around quoting scenarios and '=').
// For now it's not critical because parseMultipleSwitchesFromToolArguments is called for target
// architecture switches which don't have such complex scenarios.
function parseMultipleSwitchesFromToolArguments(args, simpleSwitches, valueSwitches) {
    // - '-' or '/' or '--' as switch prefix
    // - before each switch, we allow only for one or more spaces/tabs OR begining of line,
    //   to reject a case where a part of a path looks like a switch with its value
    // - can be wrapped by a pair of ', before the switch prefix and after the switch value
    // - the value can be wrapped by a pair of "
    // - one or none or more spaces/tabs between the switch and the value
    let regexpStr = "(^|\\s+)\\'?(";
    valueSwitches.forEach((sw) => {
        regexpStr +=
            "\\/" + sw + "(:|=|\\s*)|-" + sw + "(:|=|\\s*)|--" + sw + "(:|=|\\s*)";
        // Make sure we don't append '|' after the last extension value
        if (sw !== valueSwitches[valueSwitches.length - 1]) {
            regexpStr += "|";
        }
    });
    regexpStr += ')(\\".*?\\"|[^\\\'\\s]+)';
    regexpStr += "|((\\/|-|--)(" + simpleSwitches.join("|") + "))";
    regexpStr += "\\'?";
    let regexp = RegExp(regexpStr, "mg");
    let match;
    let results = [];
    match = regexp.exec(args);
    while (match) {
        // If the current match is a simple switch, find it at index 15, otherwise at 12.
        // In each scenario, only one will have a value while the other is undefined.
        let result = match[12] || match[15];
        if (result) {
            result = result.trim();
            results.push(result);
        }
        match = regexp.exec(args);
    }
    return results;
}
// Helper that parses for a particular switch that can occur once in the tool command line,
// or if it is allowed to be specified more than once, the latter would override the former.
// The switch is an array of strings (as opposed to a simple string)
// representing all the alternative switches in distinct toolsets (cl, versus gcc, versus clang, etc)
// of the same conceptual argument of the given tool.
// The helper returns the value passed via the given switch
// Examples for compiler: -std:c++17, -Fotest.obj, -Fe test.exe
// Example for linker: -out:test.exe versus -o a.out
// TODO: review the regexp for parseMultipleSwitchFromToolArguments to make sure all new capabilities
// are reflected in the regexp here (especially around quoting scenarios and '=').
// For now it's not critical because parseSingleSwitchFromToolArguments is called for switches
// that have simple value scenarios.
function parseSingleSwitchFromToolArguments(args, sw) {
    // - '-' or '/' or '--' as switch prefix
    // - before the switch, we allow only for one or more spaces/tabs OR begining of line,
    //   to reject a case where a part of a path looks like a switch with its value
    // - can be wrapped by a pair of ', before the switch prefix and after the switch value
    // - the value can be wrapped by a pair of "
    // -  ':' or '=' or one/none/more spaces/tabs between the switch and the value
    let regexpStr = "(^|\\s+)\\'?(\\/|-|--)(" +
        sw.join("|") +
        ")(:|=|\\s*)(\\\".*?\\\"|[^\\'\\s]+)\\'?";
    let regexp = RegExp(regexpStr, "mg");
    let match;
    let results = [];
    match = regexp.exec(args);
    while (match) {
        let result = match[5];
        if (result) {
            result = result.trim();
            results.push(result);
        }
        match = regexp.exec(args);
    }
    return results.pop();
}
// Helper that answers whether a particular switch is passed to the tool.
// When calling this helper, we are not interested in obtaining the
// (or there is no) value passed in via the switch.
// There must be at least one space/tab before the switch,
// so that we don't match a path by mistake.
// Same after the switch, in case the given name is a substring
// of another switch name. Or have the switch be the last in the command line.
// Examples: we call this helper for /c compiler switch or /dll linker switch.
// TODO: detect sets of switches that cancel each other to return a more
// accurate result in case of override (example: /TC and /TP)
function isSwitchPassedInArguments(args, sw) {
    // - '-' or '/' or '--' as switch prefix
    // - one or more spaces/tabs after
    let regexpStr = "((\\s+)|^)(\\/|-|--)(" + sw.join("|") + ")((\\s+)|$)";
    let regexp = RegExp(regexpStr, "mg");
    if (regexp.exec(args)) {
        return true;
    }
    return false;
}
// Helper that parses for files (of given extensions) that are given as arguments to a tool
// TODO: consider non standard extensions (or no extension at all) in the presence of TC/TP.
// Attention to obj, pdb or exe files tied to /Fo, /Fd and /Fe
// TODO: consider also ' besides "
function parseFilesFromToolArguments(args, exts) {
    // no switch prefix and no association yet with a preceding switch
    // one or more spaces/tabs before (or beginning of line) and after (or end of line)
    // with or without quotes surrounding the argument
    //    - if surrounding quotes, don't allow another quote in between
    // (todo: handle the scenario when quotes enclose just the directory path, without the file name)
    let regexpStr = "(";
    exts.forEach((ext) => {
        regexpStr += '\\".[^\\"]*?\\.' + ext + '\\"|';
        regexpStr += "\\S+\\." + ext;
        // Make sure we don't append '|' after the last extension value
        if (ext !== exts[exts.length - 1]) {
            regexpStr += "|";
        }
    });
    regexpStr += ")(\\s+|$)";
    let regexp = RegExp(regexpStr, "mg");
    let match;
    let files = [];
    match = regexp.exec(args);
    while (match) {
        let result = match[1];
        // It is quite common to encounter the following pattern:
        //  `test -f 'sourceFile.c' || echo './'`sourceFile.c
        // or `test -f 'sourceFile.c' || echo '../../../libwally-core/src/'`sourceFile.c
        // Until we implement the correct approach (to query live the test command)
        // we can just ignore it and consider the second option of the OR
        // (by removing the quotes while preserving the relative path).
        // This is a short term workaround.
        let idx = args.lastIndexOf(result);
        let echo = "' || echo ";
        let str = args.substring(idx - echo.length, idx);
        if (str === echo) {
            // not to use util.removeQuotes because that also removes double quotes "
            result = result.replace(/\'/gm, "");
            result = result.replace(/\`/gm, "");
        }
        if (result) {
            result = util.removeSurroundingQuotes(result);
            // Debug message to identify easier the scenarios where source files have inner quotes.
            if (result.includes('"')) {
                logger.message(`File argument that contains quotes: \`${result}\``, "Debug");
            }
            files.push(result);
        }
        match = regexp.exec(args);
    }
    return files;
}
// Helper that identifies system commands (cd, cd -, pushd, popd) and make.exe change directory switch (-C)
// to calculate the effect on the current path, also remembering the transition in the history stack.
// The current path is always the last one into the history.
async function currentPathAfterCommand(line, currentPathHistory) {
    line = line.trimLeft();
    line = line.trimRight();
    let lastCurrentPath = currentPathHistory.length > 0
        ? currentPathHistory[currentPathHistory.length - 1]
        : "";
    let newCurrentPath = "";
    if (line.startsWith("cd -") && !configuration.getIgnoreDirectoryCommands()) {
        // Swap the last two current paths in the history.
        if (lastCurrentPath) {
            currentPathHistory.pop();
        }
        let lastCurrentPath2 = currentPathHistory.length > 0
            ? currentPathHistory.pop() || ""
            : lastCurrentPath;
        logger.message("Analyzing line: " + line, "Verbose");
        logger.message("CD- command: leaving directory " +
            lastCurrentPath +
            " and entering directory " +
            lastCurrentPath2, "Verbose");
        currentPathHistory.push(lastCurrentPath);
        currentPathHistory.push(lastCurrentPath2);
    }
    else if ((line.startsWith("popd") && !configuration.getIgnoreDirectoryCommands()) ||
        line.includes("Leaving directory")) {
        let lastCurrentPath = currentPathHistory.length > 0
            ? currentPathHistory[currentPathHistory.length - 1]
            : "";
        currentPathHistory.pop();
        let lastCurrentPath2 = currentPathHistory.length > 0
            ? currentPathHistory[currentPathHistory.length - 1]
            : "";
        logger.message("Analyzing line: " + line, "Verbose");
        logger.message("POPD command or end of MAKE -C: leaving directory " +
            lastCurrentPath +
            " and entering directory " +
            lastCurrentPath2, "Verbose");
    }
    else if (line.startsWith("cd") &&
        !configuration.getIgnoreDirectoryCommands()) {
        newCurrentPath = await util.makeFullPath(line.slice(3), lastCurrentPath);
        // For "cd-" (which toggles between the last 2 current paths),
        // we must always keep one previous current path in the history.
        // Don't pop if the history has only one path as of now,
        // even if this wasn't a pushd.
        if (currentPathHistory.length > 1) {
            currentPathHistory = [];
            currentPathHistory.push(lastCurrentPath);
        }
        currentPathHistory.push(newCurrentPath);
        logger.message("Analyzing line: " + line, "Verbose");
        logger.message("CD command: entering directory " + newCurrentPath, "Verbose");
    }
    else if (line.startsWith("pushd") &&
        !configuration.getIgnoreDirectoryCommands()) {
        newCurrentPath = await util.makeFullPath(line.slice(6), lastCurrentPath);
        currentPathHistory.push(newCurrentPath);
        logger.message("Analyzing line: " + line, "Verbose");
        logger.message("PUSHD command: entering directory " + newCurrentPath, "Verbose");
    }
    else if (line.includes("Entering directory")) {
        // equivalent to pushd
        // The make switch print-directory wraps the folder in various ways.
        let match = line.match("(.*)(Entering directory ['`\"])(.*)['`\"]");
        if (match) {
            newCurrentPath =
                (await util.makeFullPath(match[3], lastCurrentPath)) || "";
        }
        else {
            newCurrentPath = "Could not parse directory";
        }
        logger.message("Analyzing line: " + line, "Verbose");
        logger.message("MAKE -C: entering directory " + newCurrentPath, "Verbose");
        currentPathHistory.push(newCurrentPath);
    }
    return currentPathHistory;
}
// Parse the output of the make dry-run command in order to provide CppTools
// with information about includes, defines, compiler path....etc...
// as needed by CustomConfigurationProvider. In addition generate a
// CompileCommand entry for every file with a compiler invocation to build
// a compile_commands.json file.
async function parseCustomConfigProvider(cancel, dryRunOutputStr, statusCallback, onFoundCustomConfigProviderItem) {
    if (cancel.isCancellationRequested) {
        return make.ConfigureBuildReturnCodeTypes.cancelled;
    }
    logger.message("Parsing dry-run output for CppTools Custom Configuration Provider.", "Normal");
    // Current path starts with workspace root and can be modified
    // with prompt commands like cd, cd-, pushd/popd or with -C make switch
    let currentPath = util.getWorkspaceRoot();
    let currentPathHistory = [currentPath];
    // Read the dry-run output line by line, searching for compilers and directory changing commands
    // to construct information for the CppTools custom configuration
    let dryRunOutputLines = dryRunOutputStr.split("\n");
    let numberOfLines = dryRunOutputLines.length;
    let index = 0;
    let done = false;
    async function doParsingChunk() {
        let chunkIndex = 0;
        while (index < numberOfLines && chunkIndex <= chunkSize) {
            if (cancel.isCancellationRequested) {
                break;
            }
            let line = dryRunOutputLines[index];
            statusCallback("Parsing for IntelliSense");
            currentPathHistory = await currentPathAfterCommand(line, currentPathHistory);
            currentPath = currentPathHistory[currentPathHistory.length - 1];
            let compilerTool = await parseLineAsTool(line, compilers, currentPath);
            // If ccache wraps the compiler, parse again the remaining command line and we should obtain
            // the real compiler name.
            if (compilerTool &&
                path.parse(compilerTool.pathInMakefile).name.endsWith("ccache")) {
                line = line.replace(`${compilerTool.pathInMakefile}`, "");
                compilerTool = await parseLineAsTool(line, compilers, currentPath);
            }
            if (compilerTool) {
                logger.message("Found compiler command: " + line, "Verbose");
                // Compiler path is either what the makefile provides or found in the PATH environment variable or empty
                let compilerFullPath = compilerTool.fullPath || "";
                if (!compilerTool.found) {
                    let toolBaseName = path.basename(compilerFullPath);
                    compilerFullPath = path.join(util.toolPathInEnv(toolBaseName) || "", toolBaseName);
                }
                // Exclude switches that are being processed separately (I, FI, include, D, std)
                // and switches that don't affect IntelliSense but are causing errors.
                let compilerArgs = [];
                compilerArgs = await parseAnySwitchFromToolArguments(compilerTool.arguments, ["I", "FI", "include", "D", "std", "MF"]);
                // Parse and log the includes, forced includes and the defines
                let includes = parseMultipleSwitchFromToolArguments(compilerTool.arguments, "I");
                includes = await util.makeFullPaths(includes, currentPath);
                let forcedIncludes = parseMultipleSwitchFromToolArguments(compilerTool.arguments, "FI");
                forcedIncludes = forcedIncludes.concat(parseMultipleSwitchFromToolArguments(compilerTool.arguments, "include"));
                forcedIncludes = await util.makeFullPaths(forcedIncludes, currentPath);
                let defines = parseMultipleSwitchFromToolArguments(compilerTool.arguments, "D");
                // Parse the IntelliSense mode
                // how to deal with aliases and symlinks (CC, C++), which can point to any toolsets
                let targetArchitecture = getTargetArchitecture(compilerTool.arguments);
                let intelliSenseMode = getIntelliSenseMode(ext.extension.getCppToolsVersion(), compilerFullPath, targetArchitecture);
                // For windows, parse the sdk version
                let windowsSDKVersion = "";
                if (process.platform === "win32") {
                    windowsSDKVersion = process.env["WindowsSDKVersion"];
                }
                // Parse the source files
                let files = parseFilesFromToolArguments(compilerTool.arguments, sourceFileExtensions);
                files = await util.makeFullPaths(files, currentPath);
                // The language represented by this compilation command
                let language;
                let hasC = files.filter((file) => file.endsWith(".c")).length > 0;
                let hasCpp = files.filter((file) => file.endsWith(".cpp")).length > 0;
                if (hasC && !hasCpp) {
                    language = "c";
                }
                else if (hasCpp && !hasC) {
                    language = "cpp";
                }
                // /TP and /TC (for cl.exe only) overwrite the meaning of the source files extensions
                if (isSwitchPassedInArguments(compilerTool.arguments, ["TP"])) {
                    language = "cpp";
                }
                else if (isSwitchPassedInArguments(compilerTool.arguments, ["TC"])) {
                    language = "c";
                }
                // Parse the C/C++ standard as given in the compiler command line
                let standardStr = parseSingleSwitchFromToolArguments(compilerTool.arguments, ["std"]);
                // If the command is compiling the same extension or uses -TC/-TP, send all the source files in one batch.
                if (language) {
                    // More standard validation and defaults, in the context of the whole command.
                    let standard = parseStandard(ext.extension.getCppToolsVersion(), standardStr, language);
                    if (ext.extension) {
                        onFoundCustomConfigProviderItem({
                            defines,
                            includes,
                            forcedIncludes,
                            standard,
                            intelliSenseMode,
                            compilerFullPath,
                            compilerArgs,
                            files,
                            windowsSDKVersion,
                            currentPath,
                            line,
                        });
                    }
                }
                else {
                    // If the compiler command is mixing c and c++ source files, send a custom configuration for each of the source files separately,
                    // to be able to accurately validate and calculate the standard based on the correct language.
                    files.forEach((file) => {
                        if (file.endsWith(".cpp")) {
                            language = "cpp";
                        }
                        else if (file.endsWith(".c")) {
                            language = "c";
                        }
                        // More standard validation and defaults, in the context of each source file.
                        let standard = parseStandard(ext.extension.getCppToolsVersion(), standardStr, language);
                        if (ext.extension) {
                            onFoundCustomConfigProviderItem({
                                defines,
                                includes,
                                forcedIncludes,
                                standard,
                                intelliSenseMode,
                                compilerFullPath,
                                compilerArgs,
                                files: [file],
                                windowsSDKVersion,
                                currentPath,
                                line,
                            });
                        }
                    });
                }
            } // if (compilerTool) {
            index++;
            if (index === numberOfLines) {
                done = true;
            }
            chunkIndex++;
        } // while loop
    } // doParsingChunk function
    while (!done) {
        if (cancel.isCancellationRequested) {
            break;
        }
        await util.scheduleAsyncTask(doParsingChunk);
    }
    return cancel.isCancellationRequested
        ? make.ConfigureBuildReturnCodeTypes.cancelled
        : make.ConfigureBuildReturnCodeTypes.success;
}
exports.parseCustomConfigProvider = parseCustomConfigProvider;
// Target binaries arguments special handling
function filterTargetBinaryArgs(args) {
    let processedArgs = [];
    for (const arg of args) {
        // Once we encounter a redirection character (pipe, stdout/stderr) remove it,
        // together with all the arguments that are following,
        // since they are not real parameters of the binary tool that is analyzed.
        if (arg === ">" || arg === "1>" || arg === "2>" || arg === "|") {
            break;
        }
        processedArgs.push(arg);
    }
    return processedArgs;
}
// Parse the output of the make dry-run command in order to provide VS Code debugger
// with information about binaries, their execution paths and arguments
async function parseLaunchConfigurations(cancel, dryRunOutputStr, statusCallback, onFoundLaunchConfiguration) {
    if (cancel.isCancellationRequested) {
        return make.ConfigureBuildReturnCodeTypes.cancelled;
    }
    // Current path starts with workspace root and can be modified
    // with prompt commands like cd, cd-, pushd/popd or with -C make switch
    let currentPath = util.getWorkspaceRoot();
    let currentPathHistory = [currentPath];
    // array of full path executables built by this makefile
    let targetBinaries = [];
    // The first pass of reading the dry-run output, line by line
    // searching for compilers, linkers and directory changing commands
    // to construct information for the launch configuration
    let dryRunOutputLines = dryRunOutputStr.split("\n");
    let numberOfLines = dryRunOutputLines.length;
    let index = 0;
    let done = false;
    let doLinkCommandsParsingChunk = async () => {
        let chunkIndex = 0;
        while (index < numberOfLines && chunkIndex <= chunkSize) {
            if (cancel.isCancellationRequested) {
                break;
            }
            let line = dryRunOutputLines[index];
            statusCallback("Parsing for launch targets: inspecting for link commands");
            currentPathHistory = await currentPathAfterCommand(line, currentPathHistory);
            currentPath = currentPathHistory[currentPathHistory.length - 1];
            // A target binary is usually produced by the linker with the /out or /o switch,
            // but there are several scenarios (for win32 Microsoft cl.exe)
            // when the compiler is producing an output binary directly (via the /Fe switch)
            // or indirectly (based on some naming default rules in the absence of /Fe)
            let linkerTargetBinary;
            let compilerTargetBinary;
            if (process.platform === "win32") {
                let compilerTool = await parseLineAsTool(line, compilers, currentPath);
                if (compilerTool) {
                    // If a cl.exe is not performing only an obj compilation, deduce the output executable if possible
                    // Note: no need to worry about the DLL case that this extension doesn't support yet
                    // since a compiler can produce implicitly only an executable.
                    if (path.basename(compilerTool.fullPath).startsWith("cl")) {
                        if (!isSwitchPassedInArguments(compilerTool.arguments, [
                            "c",
                            "P",
                            "E",
                            "EP",
                        ])) {
                            logger.message("Found compiler command:\n" + line, "Verbose");
                            // First read the value of the /Fe switch (for cl.exe)
                            compilerTargetBinary = parseSingleSwitchFromToolArguments(compilerTool.arguments, ["Fe"]);
                            // Then assume first object file base name (defined with /Fo) + exe
                            // The binary is produced in the same folder where the compiling operation takes place,
                            // and not in an eventual different obj path.
                            // Note: /Fo is not allowed on multiple sources compilations so there will be only one if found
                            if (!compilerTargetBinary) {
                                let objFile = parseSingleSwitchFromToolArguments(compilerTool.arguments, [
                                    "Fo",
                                ]);
                                if (objFile) {
                                    let parsedObjPath = path.parse(objFile);
                                    compilerTargetBinary = parsedObjPath.name + ".exe";
                                    logger.message("The compiler command is not producing a target binary explicitly. Assuming " +
                                        compilerTargetBinary +
                                        " from the first object passed in with /Fo", "Verbose");
                                }
                            }
                            else {
                                logger.message("Producing target binary with /Fe: " + compilerTargetBinary, "Verbose");
                            }
                            // Then assume first source file base name + exe.
                            // The binary is produced in the same folder where the compiling operation takes place,
                            // and not in an eventual different source path.
                            if (!compilerTargetBinary) {
                                let srcFiles = parseFilesFromToolArguments(compilerTool.arguments, sourceFileExtensions);
                                if (srcFiles.length >= 1) {
                                    let parsedSourcePath = path.parse(srcFiles[0]);
                                    compilerTargetBinary = parsedSourcePath.name + ".exe";
                                    logger.message("The compiler command is not producing a target binary explicitly. Assuming " +
                                        compilerTargetBinary +
                                        " from the first source file passed in", "Verbose");
                                }
                            }
                        }
                    }
                    if (compilerTargetBinary) {
                        compilerTargetBinary = await util.makeFullPath(compilerTargetBinary, currentPath);
                    }
                }
            }
            let linkerTool = await parseLineAsTool(line, linkers, currentPath);
            if (linkerTool) {
                // TODO: implement launch support for DLLs and LIBs, besides executables.
                if (!isSwitchPassedInArguments(linkerTool.arguments, [
                    "dll",
                    "lib",
                    "shared",
                ])) {
                    // Gcc/Clang tools can also perform linking so don't parse any output binary
                    // if there are switches passed in to cause early stop of compilation: -c, -E, -S
                    // (-o will not point to an executable)
                    // Also, the ld switches -r and -Ur do not produce executables.
                    if (!isSwitchPassedInArguments(linkerTool.arguments, [
                        "c",
                        "E",
                        "S",
                        "r",
                        "Ur",
                    ])) {
                        linkerTargetBinary = parseSingleSwitchFromToolArguments(linkerTool.arguments, ["out", "o"]);
                        logger.message("Found linker command: " + line, "Verbose");
                        if (!linkerTargetBinary) {
                            // For Microsoft link.exe, the default output binary takes the base name
                            // of the first file (obj, lib, etc...) that is passed to the linker.
                            // The binary is produced in the same folder where the linking operation takes place,
                            // and not in an eventual different obj/lib path.
                            if (process.platform === "win32" &&
                                path.basename(linkerTool.fullPath).startsWith("link")) {
                                let files = parseFilesFromToolArguments(linkerTool.arguments, ["obj", "lib"]);
                                if (files.length >= 1) {
                                    let parsedPath = path.parse(files[0]);
                                    let targetBinaryFromFirstObjLib = parsedPath.name + ".exe";
                                    logger.message("The link command is not producing a target binary explicitly. Assuming " +
                                        targetBinaryFromFirstObjLib +
                                        " based on first object passed in", "Verbose");
                                    linkerTargetBinary = targetBinaryFromFirstObjLib;
                                }
                            }
                            else {
                                // The default output binary from a linking operation is usually a.out on linux/mac,
                                // produced in the same folder where the toolset is run.
                                logger.message("The link command is not producing a target binary explicitly. Assuming a.out", "Verbose");
                                linkerTargetBinary = "a.out";
                            }
                        }
                    }
                    if (linkerTargetBinary) {
                        // Until we implement a more robust link target analysis
                        // (like query-ing for the executable attributes),
                        // we can safely assume that a ".la" file produced by libtool
                        // is a library and not an executable binary.
                        if (linkerTargetBinary.endsWith(".la") &&
                            dryRunOutputLines[index - 1] === "LIBTOOL_PATTERN") {
                            linkerTargetBinary = undefined;
                        }
                        else {
                            linkerTargetBinary =
                                util.removeSurroundingQuotes(linkerTargetBinary);
                            logger.message("Producing target binary: " + linkerTargetBinary, "Verbose");
                            linkerTargetBinary = await util.makeFullPath(linkerTargetBinary, currentPath);
                        }
                    }
                }
            }
            // It is not possible to have compilerTargetBinary and linkerTargetBinary both defined,
            // because a dry-run output line cannot be a compilation and an explicit link at the same time.
            // (cl.exe with /link switch is split into two lines - cl.exe and link.exe - during dry-run preprocessing).
            // Also for gcc/clang, -o switch or the default output will be a .o in the presence of -c and an executable otherwise.
            let targetBinary = linkerTargetBinary || compilerTargetBinary;
            // Some "$" (without following open paranthesis) are still left in the preprocessed output,
            // because the configuraion provider parser may lose valid compilation lines otherwise.
            // Additionally, for linker commands, ignore any dollar if present in the target binary name.
            // We need to ignore the $ anywhere else in the linker command line so that we don't lose
            // valid target binaries.
            if (targetBinary && !targetBinary.includes("$")) {
                targetBinaries.push(targetBinary);
                // Include limited launch configuration, when only the binary is known,
                // in which case the execution path is defaulting to binary containing folder.
                // It is more likely that an invocation would succeed from that location
                // as opposed from any other (like the root) because of eventual dependencies
                // that very likely to be built in the same place.
                // and there are no args.
                let launchConfiguration = {
                    binaryPath: targetBinary,
                    cwd: path.parse(targetBinary).dir,
                    binaryArgs: [],
                };
                logger.message("Adding launch configuration:\n" +
                    configuration.launchConfigurationToString(launchConfiguration), "Verbose");
                onFoundLaunchConfiguration(launchConfiguration);
            }
            index++;
            if (index === numberOfLines) {
                done = true;
            }
            chunkIndex++;
        } // while loop
    }; // doLinkCommandsParsingChunk function
    while (!done) {
        if (cancel.isCancellationRequested) {
            return make.ConfigureBuildReturnCodeTypes.cancelled;
        }
        await util.scheduleAsyncTask(doLinkCommandsParsingChunk);
    }
    // If no binaries are found to be built, there is no point in parsing for invoking targets
    if (targetBinaries.length === 0) {
        return cancel.isCancellationRequested
            ? make.ConfigureBuildReturnCodeTypes.cancelled
            : make.ConfigureBuildReturnCodeTypes.success;
    }
    // For each of the built binaries identified in the dry-run pass above,
    // search the makefile for possible targets that are invoking them,
    // to update the launch configuration with their name, full path, execution path and args.
    // If a built binary is not having an execution target defined in the makefile,
    // the launch configuration will be limited to the version having only with their name and path,
    // workspace folder instead of another execution path and zero args.
    // If this is not sufficient, the user can at any time write an execution target
    // in the makefile or write a launch configuration in the settings json.
    // TODO: investigate the scenario when the binary is run relying on path environment variable
    // and attention to on the fly environment changes made by make.
    // Reset the current path since we are going to analyze path transitions again
    // with this second pass through the dry-run output lines,
    // while building the launch custom provider data.
    currentPath = util.getWorkspaceRoot();
    currentPathHistory = [currentPath];
    // Since an executable can be called without its extension,
    // on Windows only and only for extensions 'exe',
    // create a new array with target binaries names
    // to ensure we parse right these binaries invocation right.
    let targetBinariesNames = [];
    targetBinaries.forEach((target) => {
        let parsedPath = path.parse(target);
        if (!targetBinariesNames.includes(parsedPath.name)) {
            if (process.platform === "win32" && parsedPath.ext === "exe") {
                targetBinariesNames.push(util.escapeString(parsedPath.name));
            }
            else {
                targetBinariesNames.push(util.escapeString(parsedPath.base));
            }
        }
    });
    index = 0;
    done = false;
    let doBinaryInvocationsParsingChunk = async () => {
        let chunkIndex = 0;
        while (index < numberOfLines && chunkIndex <= chunkSize) {
            if (cancel.isCancellationRequested) {
                break;
            }
            let line = dryRunOutputLines[index];
            // Some "$" (without following open paranthesis) are still left in the preprocessed output,
            // because the configuraion provider parser may lose valid compilation lines otherwise.
            // But the binary invocations parser should ignore any dollar because the extension can't resolve
            // these anyway, wherever they are (current folder, binary name or arguments).
            if (!line.includes("$")) {
                statusCallback("Parsing for launch targets: inspecting built binary invocations");
                currentPathHistory = await currentPathAfterCommand(line, currentPathHistory);
                currentPath = currentPathHistory[currentPathHistory.length - 1];
                // Currently, the target binary invocation will not be identified if the line does not start with it,
                // because we need to be able to reject matches like "link.exe /out:mybinary.exe".
                // See comment in parseLineAsTool about not understanding well what it is that prepends
                // the target binary tool, unless we treat it as a path and verify its location on disk.
                // Because of this limitation, the extension might not present to the user
                // all the scenarios of arguments defined in the makefile for this target binary.
                // TODO: identify and parse properly all the valid scenarios of invoking a taget binary in a makefile:
                //       - @if (not) exist binary binary arg1 arg2 arg3
                //         (because an "@if exist" is not resolved by the dry-run and appears in the output)
                //       - cmd /c binary arg1 arg2 arg3
                //       - start binary
                let targetBinaryTool = await parseLineAsTool(line, targetBinariesNames, currentPath);
                // If the found target binary invocation does not happen from a location
                // where it was built previously, don't include it as a launch target.
                // We can debug only what was built. Also, it's quite common to run
                // tools from the path during the build and we shouldn't launch those.
                if (targetBinaryTool) {
                    let foundTargetBinary = false;
                    targetBinaries.forEach((target) => {
                        if (target === (targetBinaryTool === null || targetBinaryTool === void 0 ? void 0 : targetBinaryTool.fullPath)) {
                            foundTargetBinary = true;
                        }
                    });
                    if (!foundTargetBinary) {
                        targetBinaryTool = undefined;
                    }
                }
                if (targetBinaryTool) {
                    logger.message("Found binary execution command: " + line, "Verbose");
                    // Include complete launch configuration: binary, execution path and args
                    // are known from parsing the dry-run
                    let splitArgs = targetBinaryTool.arguments
                        ? await parseAnySwitchFromToolArguments(targetBinaryTool.arguments, [])
                        : [];
                    if (splitArgs.length > 0) {
                        splitArgs = filterTargetBinaryArgs(splitArgs);
                    }
                    let launchConfiguration = {
                        binaryPath: targetBinaryTool.fullPath,
                        cwd: currentPath,
                        // TODO: consider optionally quoted arguments
                        binaryArgs: splitArgs,
                    };
                    logger.message("Adding launch configuration:\n" +
                        configuration.launchConfigurationToString(launchConfiguration), "Verbose");
                    onFoundLaunchConfiguration(launchConfiguration);
                }
            }
            index++;
            if (index === numberOfLines) {
                done = true;
            }
            chunkIndex++;
        } // while loop
    }; // doBinaryInvocationsParsingChunk function
    while (!done) {
        if (cancel.isCancellationRequested) {
            break;
        }
        await util.scheduleAsyncTask(doBinaryInvocationsParsingChunk);
    }
    return cancel.isCancellationRequested
        ? make.ConfigureBuildReturnCodeTypes.cancelled
        : make.ConfigureBuildReturnCodeTypes.success;
}
exports.parseLaunchConfigurations = parseLaunchConfigurations;
/**
 * Determine the IntelliSenseMode based on hints from compiler path
 * and target architecture parsed from compiler flags.
 */
function getIntelliSenseMode(cppVersion, compilerPath, targetArch) {
    if (cppVersion && cppVersion >= cpp.Version.v5 && targetArch === undefined) {
        // IntelliSenseMode is optional for CppTools v5+ and is determined by CppTools.
        return undefined;
    }
    const canUseArm = cppVersion !== undefined && cppVersion >= cpp.Version.v4;
    const compilerName = path
        .basename(compilerPath || "")
        .toLocaleLowerCase();
    if (compilerName === "cl.exe") {
        const clArch = path
            .basename(path.dirname(compilerPath))
            .toLocaleLowerCase();
        switch (clArch) {
            case "arm64":
                return canUseArm ? "msvc-arm64" : "msvc-x64";
            case "arm":
                return canUseArm ? "msvc-arm" : "msvc-x86";
            case "x86":
                return "msvc-x86";
            case "x64":
            default:
                return "msvc-x64";
        }
    }
    else if (compilerName.indexOf("armclang") >= 0) {
        switch (targetArch) {
            case "arm64":
                return canUseArm ? "clang-arm64" : "clang-x64";
            case "arm":
            default:
                return canUseArm ? "clang-arm" : "clang-x86";
        }
    }
    else if (compilerName.indexOf("clang") >= 0) {
        switch (targetArch) {
            case "arm64":
                return canUseArm ? "clang-arm64" : "clang-x64";
            case "arm":
                return canUseArm ? "clang-arm" : "clang-x86";
            case "x86":
                return "clang-x86";
            case "x64":
            default:
                return "clang-x64";
        }
    }
    else if (compilerName.indexOf("aarch64") >= 0) {
        // Compiler with 'aarch64' in its name may also have 'arm', so check for
        // aarch64 compilers before checking for ARM specific compilers.
        return canUseArm ? "gcc-arm64" : "gcc-x64";
    }
    else if (compilerName.indexOf("arm") >= 0) {
        return canUseArm ? "gcc-arm" : "gcc-x86";
    }
    else if (compilerName.indexOf("gcc") >= 0 ||
        compilerName.indexOf("g++") >= 0) {
        switch (targetArch) {
            case "x86":
                return "gcc-x86";
            case "x64":
            default:
                return "gcc-x64";
        }
    }
    else {
        // unknown compiler; pick platform defaults.
        if (process.platform === "win32") {
            return "msvc-x64";
        }
        else if (process.platform === "darwin") {
            return "clang-x64";
        }
        else {
            return "gcc-x64";
        }
    }
}
/**
 * Determine the target architecture from the compiler flags present in the given compilation command.
 */
function getTargetArchitecture(compilerArgs) {
    // Go through all the possible target architecture switches.
    // For each switch, apply a set of rules to identify the target arch.
    // The last switch wins.
    let possibleArchs = parseMultipleSwitchesFromToolArguments(compilerArgs, ["m32", "m64"], ["arch", "march", "target"]);
    let targetArch; // this starts as undefined
    possibleArchs.forEach((arch) => {
        if (arch === "m32") {
            targetArch = "x86";
        }
        else if (arch === "m64") {
            targetArch = "x64";
        }
        else if (arch === "i686") {
            targetArch = "x86";
        }
        else if (arch === "amd64" || arch === "x86_64") {
            targetArch = "x64";
        }
        else if (arch === "aarch64" || arch === "armv8-a" || arch === "armv8.") {
            targetArch = "arm64";
        }
        else if (arch === "arm" || arch === "armv8-r" || arch === "armv8-m") {
            targetArch = "arm";
        }
        else {
            // Check if ARM version is 7 or earlier.
            const verStr = arch === null || arch === void 0 ? void 0 : arch.substr(4, 1);
            if (verStr) {
                const verNum = +verStr;
                if (verNum <= 7) {
                    targetArch = "arm";
                }
            }
        }
    });
    return targetArch;
}
function parseStandard(cppVersion, std, language) {
    let canUseGnu = cppVersion !== undefined && cppVersion >= cpp.Version.v4;
    let canUseCxx23 = cppVersion !== undefined && cppVersion >= cpp.Version.v6;
    let standard;
    if (cppVersion && cppVersion >= cpp.Version.v5 && std === undefined) {
        // C/C++ standard is optional for CppTools v5+ and is determined by CppTools.
        return undefined;
    }
    if (!std) {
        // Standard defaults when no std switch is given
        if (language === "c") {
            return "c11";
        }
        else if (language === "cpp") {
            return "c++17";
        }
    }
    else if (language === "cpp") {
        standard = parseCppStandard(std, canUseGnu, canUseCxx23);
        if (!standard) {
            logger.message(`Unknown C++ standard control flag: ${std}`, "Normal");
        }
    }
    else if (language === "c") {
        standard = parseCStandard(std, canUseGnu);
        if (!standard) {
            logger.message(`Unknown C standard control flag: ${std}`, "Normal");
        }
    }
    else if (language === undefined) {
        standard = parseCppStandard(std, canUseGnu, canUseCxx23);
        if (!standard) {
            standard = parseCStandard(std, canUseGnu);
        }
        if (!standard) {
            logger.message(`Unknown standard control flag: ${std}`, "Normal");
        }
    }
    else {
        logger.message("Unknown language", "Normal");
    }
    return standard;
}
exports.parseStandard = parseStandard;
function parseCppStandard(std, canUseGnu, canUseCxx23) {
    const isGnu = canUseGnu && std.startsWith("gnu");
    if (std.endsWith("++23") ||
        std.endsWith("++2b") ||
        std.endsWith("++latest")) {
        if (canUseCxx23) {
            return isGnu ? "gnu++23" : "c++23";
        }
        else {
            return isGnu ? "gnu++20" : "c++20";
        }
    }
    else if (std.endsWith("++2a") || std.endsWith("++20")) {
        return isGnu ? "gnu++20" : "c++20";
    }
    else if (std.endsWith("++17") || std.endsWith("++1z")) {
        return isGnu ? "gnu++17" : "c++17";
    }
    else if (std.endsWith("++14") || std.endsWith("++1y")) {
        return isGnu ? "gnu++14" : "c++14";
    }
    else if (std.endsWith("++11") || std.endsWith("++0x")) {
        return isGnu ? "gnu++11" : "c++11";
    }
    else if (std.endsWith("++03")) {
        return isGnu ? "gnu++03" : "c++03";
    }
    else if (std.endsWith("++98")) {
        return isGnu ? "gnu++98" : "c++98";
    }
    else {
        return undefined;
    }
}
function parseCStandard(std, canUseGnu) {
    // GNU options from: https://gcc.gnu.org/onlinedocs/gcc/C-Dialect-Options.html#C-Dialect-Options
    const isGnu = canUseGnu && std.startsWith("gnu");
    if (/(c|gnu)(90|89|iso9899:(1990|199409))/.test(std)) {
        return isGnu ? "gnu89" : "c89";
    }
    else if (/(c|gnu)(99|9x|iso9899:(1999|199x))/.test(std)) {
        return isGnu ? "gnu99" : "c99";
    }
    else if (/(c|gnu)(11|1x|iso9899:2011)/.test(std)) {
        return isGnu ? "gnu11" : "c11";
    }
    else if (/(c|gnu)(17|18|iso9899:(2017|2018))/.test(std)) {
        if (canUseGnu) {
            // cpptools supports 'c17' in same version it supports GNU std.
            return isGnu ? "gnu17" : "c17";
        }
        else {
            return "c11";
        }
    }
    else {
        return undefined;
    }
}


/***/ }),

/***/ 696:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateManager = void 0;
// state.ts
const vscode = __webpack_require__(304);
// Class for the management of all the workspace state variables
class StateManager {
    constructor(extensionContext) {
        this.extensionContext = extensionContext;
    }
    _get(key) {
        return this.extensionContext.workspaceState.get(key);
    }
    _update(key, value) {
        return this.extensionContext.workspaceState.update(key, value);
    }
    // The project build configuration (one of the entries in the array of makefile.configurations
    // or a default).
    get buildConfiguration() {
        return this._get("buildConfiguration");
    }
    set buildConfiguration(v) {
        this._update("buildConfiguration", v);
    }
    // The project build target (one of the targets defined in the makefile).
    get buildTarget() {
        return this._get("buildTarget");
    }
    set buildTarget(v) {
        this._update("buildTarget", v);
    }
    // The project launch configuration (one of the entries in the array of makefile.launchConfigurations).
    get launchConfiguration() {
        return this._get("launchConfiguration");
    }
    set launchConfiguration(v) {
        this._update("launchConfiguration", v);
    }
    // Whether this project had any configure attempt before
    // (it didn't have to succeed or even complete).
    // Sent as telemetry information and useful to know
    // how many projects are able to configure out of the box.
    get ranConfigureInCodebaseLifetime() {
        return this._get("ranConfigureInCodebaseLifetime") || false;
    }
    set ranConfigureInCodebaseLifetime(v) {
        this._update("ranConfigureInCodebaseLifetime", v);
    }
    // Whether this project had any --dry-run specific configure attempt before
    // (it didn't have to succeed or even complete).
    // This is used in order to notify the user via a Yes(don't show again)/No popup
    // that some makefile code could still execute even in --dry-run mode.
    // Once the user decides 'Yes(don't show again)' the popup is not shown.
    get ranDryRunInCodebaseLifetime() {
        return this._get("ranDryRunInCodebaseLifetime") || false;
    }
    set ranDryRunInCodebaseLifetime(v) {
        this._update("ranDryRunInCodebaseLifetime", v);
    }
    // If the project needs a clean configure as a result
    // of an operation that alters the configure state
    // (makefile configuration change, build target change,
    // settings or makefiles edits)
    get configureDirty() {
        let dirty = this._get("configureDirty");
        if (dirty === undefined) {
            dirty = true;
        }
        return dirty;
    }
    set configureDirty(v) {
        this._update("configureDirty", v);
    }
    // Reset all the variables saved in the workspace state.
    reset(reloadWindow = true) {
        this.buildConfiguration = undefined;
        this.buildTarget = undefined;
        this.launchConfiguration = undefined;
        this.ranConfigureInCodebaseLifetime = false;
        this.ranDryRunInCodebaseLifetime = false;
        this.configureDirty = false;
        if (reloadWindow) {
            vscode.commands.executeCommand("workbench.action.reloadWindow");
        }
    }
}
exports.StateManager = StateManager;


/***/ }),

/***/ 564:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.analyzeSettings = exports.logEvent = exports.telemetryLogger = exports.deactivate = exports.activate = void 0;
// Telemetry.ts
const configuration = __webpack_require__(184);
const logger = __webpack_require__(900);
const util = __webpack_require__(168);
const extension_telemetry_1 = __webpack_require__(828);
const vscode = __webpack_require__(304);
let telemetryReporter;
function activate() {
    try {
        // Don't create the telemetry object (which will result in no information being sent)
        // when running Makefile Tools tests.
        if (process.env["MAKEFILE_TOOLS_TESTING"] !== "1") {
            telemetryReporter = createReporter();
        }
    }
    catch (e) {
        // can't really do much about this
    }
}
exports.activate = activate;
async function deactivate() {
    if (telemetryReporter) {
        await telemetryReporter.dispose();
    }
}
exports.deactivate = deactivate;
function telemetryLogger(str, loggingLevel) {
    if (vscode.env.isTelemetryEnabled) {
        logger.message(str, loggingLevel);
    }
}
exports.telemetryLogger = telemetryLogger;
function logEvent(eventName, properties, measures) {
    // We don't want to log telemetry in testing.
    if (telemetryReporter && process.env["MAKEFILE_TOOLS_TESTING"] !== "1") {
        try {
            telemetryReporter.sendTelemetryEvent(eventName, properties, measures);
        }
        catch (e) {
            telemetryLogger(e.message);
        }
        telemetryLogger(`Sending telemetry: eventName = ${eventName}`, "Debug");
        if (properties) {
            telemetryLogger(`properties: ${Object.getOwnPropertyNames(properties)
                .map((k) => `${k} = "${properties[k]}"`)
                .concat()}`, "Debug");
        }
        if (measures) {
            telemetryLogger(`measures: ${Object.getOwnPropertyNames(measures)
                .map((k) => `${k} = "${measures[k]}"`)
                .concat()}`, "Debug");
        }
    }
}
exports.logEvent = logEvent;
// Allow-lists for various settings.
function filterSetting(value, key, defaultValue) {
    if (key === "makefile.dryrunSwitches") {
        let dryrunSwitches = value;
        let filteredSwitches = dryrunSwitches.map((sw) => {
            switch (sw) {
                case "--dry-run":
                case "-n":
                case "--just-print":
                case "--recon":
                case "--keep-going":
                case "-k":
                case "--always-make":
                case "-B":
                case "--print-data-base":
                case "-p":
                case "--print-directory":
                case "-w":
                    return sw;
                default:
                    return "...";
            }
        });
        return filteredSwitches.join(";");
    }
    // Even if the key represents a setting that shouldn't share its value,
    // we can still record if it is undefined by the user (removed from settings.json)
    // or equal to the default we set in package.json.
    if (!value) {
        return "undefined";
    }
    else if (value === defaultValue) {
        return "default";
    }
    return "...";
}
// Detect which item from the given array setting is relevant for telemetry.
// Return the index in the array or -1 if we don't find a match.
// The telemetry is not yet collecting settings information from all items of an array.
// Until this will be needed, we pick the item in the array that corresponds
// to some current state value.
// Example: don't report telemetry for all launch configurations but only for
// the current launch configuration.
function activeArrayItem(setting, key) {
    if (key === "makefile.configurations") {
        let makefileConfigurations = configuration.getMakefileConfigurations();
        let currentMakefileConfigurationName = configuration.getCurrentMakefileConfiguration();
        if (!currentMakefileConfigurationName) {
            return -1;
        }
        let currentMakefileConfiguration = makefileConfigurations.find((config) => {
            if (config.name === currentMakefileConfigurationName) {
                return config;
            }
        });
        return currentMakefileConfiguration
            ? makefileConfigurations.indexOf(currentMakefileConfiguration)
            : -1;
    }
    if (key === "makefile.launchConfigurations") {
        let launchConfigurations = configuration.getLaunchConfigurations();
        let currentLaunchConfiguration = launchConfigurations.find((config) => {
            if (util.areEqual(config, configuration.getCurrentLaunchConfiguration())) {
                return config;
            }
        });
        return currentLaunchConfiguration
            ? launchConfigurations.indexOf(currentLaunchConfiguration)
            : -1;
    }
    return -1;
}
// Filter the array item indexes from the key since for now, when we analyze an array,
// we pick one item that corresponds to a current state of the project.
// Example: makefile.configurations.0.name ==> makefile.configurations.name
// The extension currently has a settings structure with only one level of objects arrays
// (makefile.configurations and makefile.launchConfigurations).
// Other arrays are of simple type (like make or executable arguments, dryrun switches)
// and don't create a key that would have 2 numerical properties
// (there is no makefile.configurations.1.makeArgs.2.something).
// So, eliminate only one numerical (if exists) before the last dot in this key string.
// We still need the complete key for anything else than the telemetry properties
// (example: validation errors are more clear when an array item is highlighted).
// This helper should be called when a property is ready to be collected for telemetry.
// Calling this earlier would result in different dot patterns.
function filterKey(key) {
    let filteredKey = key;
    let lastDot = key.lastIndexOf(".");
    let beforeLastDot = key.lastIndexOf(".", lastDot - 1);
    if (lastDot !== -1 && beforeLastDot !== -1) {
        let lastProp = key.substring(beforeLastDot + 1, lastDot);
        let numericalProp = Number.parseInt(lastProp);
        if (!Number.isNaN(numericalProp)) {
            filteredKey = filteredKey.replace(`${numericalProp}.`, "");
        }
    }
    return filteredKey;
}
// Analyze recursively all the settings for telemetry and type validation.
// Return all the telemetry properties that have been collected throughout this recursive process.
// If telemetryProperties is null, this function performs only type validation.
// If analyzeSettings gets called before a configure (or after an unsuccesful one), it is possible to have
// inaccurate or incomplete telemetry information for makefile and launch configurations.
// This is not very critical since any of their state changes will update telemetry for them.
async function analyzeSettings(setting, key, propSchema, ignoreDefault, telemetryProperties) {
    // type can be undefined if setting is null,
    // which happens when the user removes that setting.
    let type = setting ? typeof setting : undefined;
    let jsonType = propSchema.type
        ? propSchema.type
        : undefined;
    // Skip anything else if the current setting represents a function.
    if (type === "function") {
        return telemetryProperties;
    }
    // Interested to continue only for properties that are different than their defaults,
    // unless ignoreDefault requests we report those too (useful when the user is changing
    // from a non default value back to default, usually via removing/undefining a setting).
    if (util.areEqual(propSchema.default, setting) && ignoreDefault) {
        return telemetryProperties;
    }
    // The type "array" defined in package.json is seen as object by the workspace setting type.
    // Not all package.json constructs have a type (example: configuration properties list)
    // but the workspace setting type sees them as object.
    if (jsonType !== type &&
        jsonType !== undefined &&
        type !== undefined &&
        (type !== "object" || jsonType !== "array")) {
        telemetryLogger(`Settings versus package.json type mismatch for "${key}".`);
    }
    // Enum values always safe to report.
    // Validate the allowed values against the expanded variable.
    let enumValues = propSchema.enum;
    if (enumValues && enumValues.length > 0) {
        const regexp = /(makefile\.)(.+)/gm;
        const res = regexp.exec(key);
        let expandedSetting = res
            ? await util.getExpandedSetting(res[2])
            : setting;
        if (!enumValues.includes(expandedSetting)) {
            telemetryLogger(`Invalid value "${expandedSetting}" for enum "${key}". Only "${enumValues.join(";")}" values are allowed."`);
            if (telemetryProperties) {
                telemetryProperties[filterKey(key)] = "invalid";
            }
        }
        else if (telemetryProperties) {
            telemetryProperties[filterKey(key)] = expandedSetting;
        }
        return telemetryProperties;
    }
    // When propSchema does not have a type defined (for example at the root scope)
    // use the setting type. We use the setting type second because it sees array as object.
    switch (jsonType || type) {
        // Report numbers and booleans since there is no private information in such types.
        case "boolean": /* falls through */
        case "number":
            if (telemetryProperties) {
                telemetryProperties[filterKey(key)] = setting;
            }
            break;
        // Apply allow-lists for strings.
        case "string":
            if (telemetryProperties) {
                telemetryProperties[filterKey(key)] = filterSetting(setting, key, propSchema.default);
            }
            break;
        case "array":
            // We are interested in logging arrays of basic types
            if (telemetryProperties &&
                propSchema.items.type !== "object" &&
                propSchema.items.type !== "array") {
                telemetryProperties[filterKey(key)] = filterSetting(setting, key, propSchema.default);
                break;
            }
        /* falls through */
        case "object":
            let settingsProps = Object.getOwnPropertyNames(setting);
            let index = -1;
            let active = 0;
            if (jsonType === "array") {
                active = activeArrayItem(setting, key);
            }
            settingsProps.forEach(async (prop) => {
                index++;
                let jsonProps;
                let newPropObj = setting[prop];
                if (jsonType === "array") {
                    jsonProps = propSchema.items.properties || propSchema.items;
                }
                else {
                    // For a setting like "makefile.name1.name2.name3",
                    // when we need to query for its schema we should use the whole name as index
                    // but when we query for the workspace value, we have to use each sub object name:
                    // setting[name1][name2][name3].
                    // Otherwise we will not read anything useful about such a setting and we will also
                    // report a schema mismatch, even if it is written correctly.
                    let newProp = prop;
                    let newFullProp = key === "makefile" ? key + "." : "";
                    while (jsonProps === undefined && newProp !== "") {
                        newFullProp = newFullProp + newProp;
                        if (propSchema.properties) {
                            jsonProps = Object.getOwnPropertyNames(propSchema.properties).includes(newFullProp)
                                ? propSchema.properties[newFullProp]
                                : undefined;
                        }
                        else {
                            jsonProps = Object.getOwnPropertyNames(propSchema).includes(newFullProp)
                                ? propSchema[newFullProp]
                                : undefined;
                        }
                        if (jsonProps === undefined && typeof newPropObj === "object") {
                            newProp = Object.getOwnPropertyNames(newPropObj)[0];
                            newPropObj = newPropObj[newProp];
                            newProp = "." + newProp;
                        }
                        else {
                            newProp = "";
                        }
                    }
                }
                // The user defined a setting property wrong (example miMode instead of MIMode).
                // Exceptions are 'has', 'get', 'update' and 'inspect' for the makefile root.
                // They are functions and we can use this type to make the exclusion..
                if (jsonProps === undefined) {
                    if (typeof setting[prop] !== "function") {
                        telemetryLogger(`Schema mismatch between settings and package.json for property "${key}.${prop}"`);
                    }
                }
                else {
                    // Skip if the analyzed prop is a function or if it's the length of an array.
                    if (type !== "function" /*&& jsonType !== undefined*/ &&
                        (jsonType !== "array" || prop !== "length")) {
                        let newTelemetryProperties = {};
                        newTelemetryProperties = await analyzeSettings(newPropObj, key + "." + prop, jsonProps, ignoreDefault, jsonType !== "array" || index === active
                            ? newTelemetryProperties
                            : null);
                        // If telemetryProperties is null, it means we're not interested in reporting any telemetry for this subtree
                        if (telemetryProperties) {
                            telemetryProperties = util.mergeProperties(telemetryProperties, newTelemetryProperties);
                        }
                    }
                }
            });
            break;
        default:
            break;
    }
    return telemetryProperties;
}
exports.analyzeSettings = analyzeSettings;
function createReporter() {
    const packageInfo = getPackageInfo();
    if (packageInfo && packageInfo.aiKey) {
        return new extension_telemetry_1.default(packageInfo.name, packageInfo.version, packageInfo.aiKey);
    }
    return null;
}
function getPackageInfo() {
    const packageJSON = util.thisExtensionPackage();
    return {
        name: `${packageJSON.publisher}.${packageJSON.name}`,
        version: packageJSON.version,
        aiKey: "AIF-d9b70cd4-b9f9-4d70-929b-a071c400b217",
    };
}


/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectOutlineProvider = exports.BuildLogPathInfoNode = exports.MakePathInfoNode = exports.MakefilePathInfoNode = exports.ConfigurationNode = exports.LaunchTargetNode = exports.BuildTargetNode = void 0;
// Tree.ts
const configuration = __webpack_require__(184);
const path = __webpack_require__(72);
const util = __webpack_require__(168);
const vscode = __webpack_require__(304);
const nls = __webpack_require__(892);
const extension_1 = __webpack_require__(171);
nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
})((__webpack_require__(72).join)(__dirname, 'src\\tree.ts'));
const localize = nls.loadMessageBundle((__webpack_require__(72).join)(__dirname, 'src\\tree.ts'));
class BaseNode {
    constructor(id) {
        this.id = id;
    }
}
class BuildTargetNode extends BaseNode {
    constructor(targetName) {
        super(`buildTarget:${targetName}`);
        this._name = targetName;
    }
    update(targetName) {
        this._name = localize(0, null, `[${targetName}]`);
    }
    getChildren() {
        return [];
    }
    getTreeItem() {
        try {
            const item = new vscode.TreeItem(this._name);
            item.collapsibleState = vscode.TreeItemCollapsibleState.None;
            item.tooltip = localize(1, null);
            item.contextValue = [`nodeType=buildTarget`].join(",");
            return item;
        }
        catch (e) {
            return new vscode.TreeItem(localize(2, null, this._name));
        }
    }
}
exports.BuildTargetNode = BuildTargetNode;
class LaunchTargetNode extends BaseNode {
    // Keep the tree node label as short as possible.
    // The binary path is the most important component of a launch target.
    async getShortLaunchTargetName(completeLaunchTargetName) {
        let launchConfiguration = await configuration.stringToLaunchConfiguration(completeLaunchTargetName);
        let shortName;
        if (!launchConfiguration) {
            shortName = "Unset";
        }
        else {
            if (vscode.workspace.workspaceFolders) {
                // In a complete launch target string, the binary path is relative to cwd.
                // In here, since we don't show cwd, make it relative to current workspace folder.
                shortName = util.makeRelPath(launchConfiguration.binaryPath, vscode.workspace.workspaceFolders[0].uri.fsPath);
            }
            else {
                // Just in case, if for some reason we don't have a workspace folder, return full binary path.
                shortName = launchConfiguration.binaryPath;
            }
        }
        return localize(3, null, `[${shortName}]`);
    }
    constructor(targetName) {
        super(`launchTarget:${targetName}`);
        // Show the complete launch target name as tooltip and the short name as label
        this._name = targetName;
        this._toolTip = targetName;
    }
    async update(targetName) {
        // Show the complete launch target name as tooltip and the short name as label
        this._name = await this.getShortLaunchTargetName(targetName);
        this._toolTip = targetName;
    }
    getChildren() {
        return [];
    }
    getTreeItem() {
        try {
            const item = new vscode.TreeItem(this._name);
            item.collapsibleState = vscode.TreeItemCollapsibleState.None;
            item.tooltip = localize(4, null, this._toolTip);
            // enablement in makefile.outline.setLaunchConfiguration is not
            // disabling this TreeItem
            item.command = {
                command: "makefile.outline.setLaunchConfiguration",
                title: "%makefile-tools.command.makefile.setLaunchConfiguration.title%",
            };
            item.contextValue = [`nodeType=launchTarget`].join(",");
            return item;
        }
        catch (e) {
            return new vscode.TreeItem(localize(5, null, this._name));
        }
    }
}
exports.LaunchTargetNode = LaunchTargetNode;
class ConfigurationNode extends BaseNode {
    constructor(configurationName) {
        super(`configuration:${configurationName}`);
        this._name = configurationName;
    }
    update(configurationName) {
        this._name = localize(6, null, `[${configurationName}]`);
    }
    getChildren() {
        return [];
    }
    getTreeItem() {
        try {
            const item = new vscode.TreeItem(this._name);
            item.collapsibleState = vscode.TreeItemCollapsibleState.None;
            item.tooltip =
                "The makefile configuration currently selected from settings ('makefile.configurations').";
            item.contextValue = [`nodeType=configuration`].join(",");
            return item;
        }
        catch (e) {
            return new vscode.TreeItem(localize(7, null, this._name));
        }
    }
}
exports.ConfigurationNode = ConfigurationNode;
class MakefilePathInfoNode extends BaseNode {
    constructor(pathInSettings, pathDisplayed) {
        super(pathDisplayed);
        this._title = pathDisplayed;
        this._tooltip = pathInSettings;
    }
    update(pathInSettings, pathDisplayed) {
        this._title = localize(8, null, `${pathDisplayed}`);
        this._tooltip = pathInSettings;
    }
    getChildren() {
        return [];
    }
    getTreeItem() {
        try {
            const item = new vscode.TreeItem(this._title);
            item.collapsibleState = vscode.TreeItemCollapsibleState.None;
            item.tooltip = this._tooltip;
            item.contextValue = [`nodeType=makefilePathInfo`].join(",");
            return item;
        }
        catch (e) {
            return new vscode.TreeItem(localize(9, null, this._title));
        }
    }
}
exports.MakefilePathInfoNode = MakefilePathInfoNode;
class MakePathInfoNode extends BaseNode {
    constructor(pathInSettings, pathDisplayed) {
        super(pathDisplayed);
        this._title = pathDisplayed;
        this._tooltip = pathInSettings;
    }
    update(pathInSettings, pathDisplayed) {
        this._title = localize(10, null, `${pathDisplayed}`);
        this._tooltip = pathInSettings;
    }
    getChildren() {
        return [];
    }
    getTreeItem() {
        try {
            const item = new vscode.TreeItem(this._title);
            item.collapsibleState = vscode.TreeItemCollapsibleState.None;
            item.tooltip = this._tooltip;
            item.contextValue = [`nodeType=makePathInfo`].join(",");
            return item;
        }
        catch (e) {
            return new vscode.TreeItem(localize(11, null, this._title));
        }
    }
}
exports.MakePathInfoNode = MakePathInfoNode;
class BuildLogPathInfoNode extends BaseNode {
    constructor(pathInSettings, pathDisplayed) {
        super(pathDisplayed);
        this._title = pathDisplayed;
        this._tooltip = pathInSettings;
    }
    update(pathInSettings, pathDisplayed) {
        this._title = localize(12, null, `${pathDisplayed}`);
        this._tooltip = pathInSettings;
    }
    getChildren() {
        return [];
    }
    getTreeItem() {
        try {
            const item = new vscode.TreeItem(this._title);
            item.collapsibleState = vscode.TreeItemCollapsibleState.None;
            item.tooltip = this._tooltip;
            item.contextValue = [`nodeType=buildLogPathInfo`].join(",");
            return item;
        }
        catch (e) {
            return new vscode.TreeItem(localize(13, null, this._title));
        }
    }
}
exports.BuildLogPathInfoNode = BuildLogPathInfoNode;
class ProjectOutlineProvider {
    constructor() {
        this._changeEvent = new vscode.EventEmitter();
        this._unsetString = localize(14, null);
        this._currentConfigurationItem = new ConfigurationNode(this._unsetString);
        this._currentBuildTargetItem = new BuildTargetNode(this._unsetString);
        this._currentLaunchTargetItem = new LaunchTargetNode(this._unsetString);
        this._currentMakefilePathInfoItem = new MakefilePathInfoNode(this._unsetString, "");
        this._currentMakePathInfoItem = new MakePathInfoNode(this._unsetString, "");
        this._currentBuildLogPathInfoItem = new BuildLogPathInfoNode(this._unsetString, "");
    }
    get onDidChangeTreeData() {
        return this._changeEvent.event;
    }
    async getTreeItem(node) {
        return node.getTreeItem();
    }
    getChildren(node) {
        if (node) {
            return node.getChildren();
        }
        if (configuration.isOptionalFeatureEnabled("debug") ||
            configuration.isOptionalFeatureEnabled("run")) {
            return [
                this._currentConfigurationItem,
                this._currentBuildTargetItem,
                this._currentLaunchTargetItem,
                this._currentMakefilePathInfoItem,
                this._currentMakePathInfoItem,
                this._currentBuildLogPathInfoItem,
            ];
        }
        else {
            return [
                this._currentConfigurationItem,
                this._currentBuildTargetItem,
                this._currentMakefilePathInfoItem,
                this._currentMakePathInfoItem,
                this._currentBuildLogPathInfoItem,
            ];
        }
    }
    pathDisplayed(pathInSettings, kind, searchInPath, makeRelative) {
        if (!pathInSettings) {
            if (kind === "Build Log") {
                extension_1.extension.updateBuildLogPresent(false);
            }
            else if (kind === "Makefile") {
                extension_1.extension.updateMakefileFilePresent(false);
            }
            return `${kind}: [Unset]`;
        }
        const pathInSettingsToTest = process.platform === "win32" &&
            !(pathInSettings === null || pathInSettings === void 0 ? void 0 : pathInSettings.endsWith(".exe")) &&
            kind === "Make"
            ? pathInSettings === null || pathInSettings === void 0 ? void 0 : pathInSettings.concat(".exe")
            : pathInSettings;
        const pathBase = searchInPath && path.parse(pathInSettingsToTest).dir === ""
            ? path.parse(pathInSettingsToTest).base
            : undefined;
        const pathInEnv = pathBase
            ? path.join(util.toolPathInEnv(pathBase) || "", pathBase)
            : undefined;
        const finalPath = pathInEnv || pathInSettingsToTest;
        const checkFileExists = util.checkFileExistsSync(finalPath);
        if (kind === "Build Log") {
            extension_1.extension.updateBuildLogPresent(checkFileExists);
        }
        else if (kind === "Makefile") {
            extension_1.extension.updateMakefileFilePresent(checkFileExists);
        }
        return ((!checkFileExists ? `${kind} (not found)` : `${kind}`) +
            `: [${makeRelative
                ? util.makeRelPath(finalPath, util.getWorkspaceRoot())
                : finalPath}]`);
    }
    async update(configuration, buildTarget, launchTarget, makefilePathInfo, makePathInfo, buildLogInfo) {
        this._currentConfigurationItem.update(configuration || this._unsetString);
        this._currentBuildTargetItem.update(buildTarget || this._unsetString);
        await this._currentLaunchTargetItem.update(launchTarget || this._unsetString);
        this._currentMakefilePathInfoItem.update(makefilePathInfo || this._unsetString, this.pathDisplayed(makefilePathInfo, "Makefile", false, false));
        this._currentMakePathInfoItem.update(makePathInfo || this._unsetString, this.pathDisplayed(makePathInfo, "Make", true, false));
        this._currentBuildLogPathInfoItem.update(buildLogInfo || this._unsetString, this.pathDisplayed(buildLogInfo, "Build Log", false, false));
        this.updateTree();
    }
    updateConfiguration(configuration) {
        this._currentConfigurationItem.update(configuration);
        this.updateTree();
    }
    updateBuildTarget(buildTarget) {
        this._currentBuildTargetItem.update(buildTarget);
        this.updateTree();
    }
    async updateLaunchTarget(launchTarget) {
        await this._currentLaunchTargetItem.update(launchTarget);
        this.updateTree();
    }
    async updateMakefilePathInfo(makefilePathInfo) {
        this._currentMakefilePathInfoItem.update(makefilePathInfo || this._unsetString, this.pathDisplayed(makefilePathInfo, "Makefile", false, true));
        this.updateTree();
    }
    async updateMakePathInfo(makePathInfo) {
        this._currentMakePathInfoItem.update(makePathInfo || this._unsetString, this.pathDisplayed(makePathInfo, "Make", true, false));
        this.updateTree();
    }
    async updateBuildLogPathInfo(buildLogPathInfo) {
        this._currentBuildLogPathInfoItem.update(buildLogPathInfo || this._unsetString, this.pathDisplayed(buildLogPathInfo, "Build Log", false, true));
        this.updateTree();
    }
    updateTree() {
        this._changeEvent.fire(null);
    }
}
exports.ProjectOutlineProvider = ProjectOutlineProvider;


/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUI = exports.UI = void 0;
// Deprecated UI support for buttons and quickpicks.
// Replaced by makefile.outline view in the left side bar.
// To be removed, hidden for now.
const vscode = __webpack_require__(304);
let ui;
class UI {
    setConfiguration(configuration) {
        this.configurationButton.text =
            "$(settings) Build configuration: " + configuration;
    }
    setTarget(target) {
        this.targetButton.text = "$(tag) Target to build: " + target;
    }
    setLaunchConfiguration(launchConfigurationStr) {
        if (launchConfigurationStr) {
            this.launchConfigurationButton.text = "$(rocket) Launch configuration: ";
            this.launchConfigurationButton.text += "[";
            this.launchConfigurationButton.text += launchConfigurationStr;
            this.launchConfigurationButton.text += "]";
        }
        else {
            this.launchConfigurationButton.text = "No launch configuration set";
        }
    }
    constructor() {
        this.configurationButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 4.6);
        this.configurationButton.command = "makefile.setBuildConfiguration";
        this.configurationButton.tooltip =
            "Click to select the workspace make configuration";
        this.configurationButton.hide();
        this.targetButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 4.5);
        this.targetButton.command = "makefile.setBuildTarget";
        this.targetButton.tooltip = "Click to select the target to be run by make";
        this.targetButton.hide();
        this.buildButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 4.4);
        this.buildButton.command = "makefile.buildTarget";
        this.buildButton.tooltip = "Click to build the selected target";
        this.buildButton.text = "$(gear) Build";
        this.buildButton.hide();
        this.launchConfigurationButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 4.3);
        this.launchConfigurationButton.command = "makefile.setLaunchConfiguration";
        this.launchConfigurationButton.tooltip =
            "Click to select the make launch configuration (binary, args and current path)";
        this.launchConfigurationButton.hide();
        this.debugButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 4.2);
        this.debugButton.command = "makefile.launchDebug";
        this.debugButton.tooltip = "Click to debug the selected executable";
        this.debugButton.text = "$(bug) Debug";
        this.debugButton.hide();
        this.runButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 4.1);
        this.runButton.command = "makefile.launchRun";
        this.runButton.tooltip = "Click to launch the selected executable";
        this.runButton.text = "$(terminal) Run";
        this.runButton.hide();
    }
    dispose() {
        this.configurationButton.dispose();
        this.targetButton.dispose();
        this.launchConfigurationButton.dispose();
        this.buildButton.dispose();
        this.debugButton.dispose();
        this.runButton.dispose();
    }
}
exports.UI = UI;
function getUI() {
    if (ui === undefined) {
        ui = new UI();
    }
    return ui;
}
exports.getUI = getUI;


/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.thisExtensionPath = exports.thisExtensionPackage = exports.thisExtension = exports.scheduleAsyncTask = exports.scheduleTask = exports.expandVariablesInSetting = exports.getExpandedSettingVal = exports.getExpandedSetting = exports.booleanify = exports.userHome = exports.resolvePathToRoot = exports.reportDryRunError = exports.sortAndRemoveDuplicates = exports.removeDuplicates = exports.mergeProperties = exports.hasProperties = exports.areEqual = exports.elapsedTimeSince = exports.escapeString = exports.quoteStringIfNeeded = exports.removeSurroundingQuotes = exports.removeQuotes = exports.makeRelPaths = exports.makeRelPath = exports.makeFullPaths = exports.makeFullPath = exports.ensureWindowsPath = exports.cygpath = exports.dropNulls = exports.spawnChildProcess = exports.mergeEnvironment = exports.normalizeEnvironmentVarname = exports.killTree = exports.toolPathInEnv = exports.pathIsCurrentDirectory = exports.looksLikePath = exports.getWorkspaceRoot = exports.parseCompilerArgsScriptFile = exports.tmpDir = exports.writeFile = exports.readFile = exports.deleteFileSync = exports.createDirectorySync = exports.checkDirectoryExistsSync = exports.checkFileExistsSync = void 0;
// Helper APIs used by this extension
const configuration = __webpack_require__(184);
const fs = __webpack_require__(58);
const child_process = __webpack_require__(368);
const logger = __webpack_require__(900);
const make = __webpack_require__(636);
const path = __webpack_require__(72);
const telemetry = __webpack_require__(564);
const vscode = __webpack_require__(304);
const nls = __webpack_require__(892);
const extension_1 = __webpack_require__(171);
nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
})((__webpack_require__(72).join)(__dirname, 'src\\util.ts'));
const localize = nls.loadMessageBundle((__webpack_require__(72).join)(__dirname, 'src\\util.ts'));
function checkFileExistsSync(filePath) {
    try {
        // Often a path is added by the user to the PATH environment variable with surrounding quotes,
        // especially on Windows where they get automatically added after TAB.
        // These quotes become inner (not surrounding) quotes after we append various file names or do oher processing,
        // making file sysem stats fail. Safe to remove here.
        let filePathUnq = filePath;
        filePathUnq = removeQuotes(filePathUnq);
        return fs.statSync(filePathUnq).isFile();
    }
    catch (e) { }
    return false;
}
exports.checkFileExistsSync = checkFileExistsSync;
function checkDirectoryExistsSync(directoryPath) {
    try {
        return fs.statSync(directoryPath).isDirectory();
    }
    catch (e) { }
    return false;
}
exports.checkDirectoryExistsSync = checkDirectoryExistsSync;
function createDirectorySync(directoryPath) {
    try {
        fs.mkdirSync(directoryPath, { recursive: true });
        return true;
    }
    catch { }
    return false;
}
exports.createDirectorySync = createDirectorySync;
function deleteFileSync(filePath) {
    try {
        fs.unlinkSync(filePath);
    }
    catch (e) { }
}
exports.deleteFileSync = deleteFileSync;
function readFile(filePath) {
    try {
        if (checkFileExistsSync(filePath)) {
            return fs.readFileSync(filePath).toString();
        }
    }
    catch (e) { }
    return undefined;
}
exports.readFile = readFile;
function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content);
    }
    catch (e) { }
    return undefined;
}
exports.writeFile = writeFile;
// Get the platform-specific temporary directory
function tmpDir() {
    if (process.platform === "win32") {
        return process.env["TEMP"] || "";
    }
    else {
        const xdg = process.env["XDG_RUNTIME_DIR"];
        if (xdg) {
            if (!fs.existsSync(xdg)) {
                fs.mkdirSync(xdg);
            }
            return xdg;
        }
        return "/tmp";
    }
}
exports.tmpDir = tmpDir;
// Returns the full path to a temporary script generated by the extension
// and used to parse any additional compiler switches that need to be sent to CppTools.
function parseCompilerArgsScriptFile() {
    const extensionPath = extension_1.extension.extensionContext.extensionPath;
    let scriptFile = path.join(extensionPath, "assets", "parseCompilerArgs");
    if (process.platform === "win32") {
        scriptFile += ".bat";
    }
    else {
        scriptFile += ".sh";
    }
    return scriptFile;
}
exports.parseCompilerArgsScriptFile = parseCompilerArgsScriptFile;
function getWorkspaceRoot() {
    return vscode.workspace.workspaceFolders
        ? vscode.workspace.workspaceFolders[0].uri.fsPath
        : "";
}
exports.getWorkspaceRoot = getWorkspaceRoot;
// Evaluate whether a string looks like a path or not,
// without using fs.stat, since dry-run may output tools
// that are not found yet at certain locations,
// without running the prep targets that would copy them there
function looksLikePath(pathStr) {
    // TODO: to be implemented
    return true;
}
exports.looksLikePath = looksLikePath;
// Evaluate whether the tool is invoked from the current directory
function pathIsCurrentDirectory(pathStr) {
    // Ignore any spaces or tabs before the invocation
    pathStr = pathStr.trimLeft();
    if (pathStr === "") {
        return true;
    }
    if (process.platform === "win32" && process.env.MSYSTEM === undefined) {
        if (pathStr === ".\\") {
            return true;
        }
    }
    else {
        if (pathStr === "./") {
            return true;
        }
    }
    return false;
}
exports.pathIsCurrentDirectory = pathIsCurrentDirectory;
// Helper that searches for a tool in all the paths forming the PATH environment variable
// Returns the first one found or undefined if not found.
// TODO: implement a variation of this helper that scans on disk for the tools installed,
// to help when VSCode is not launched from the proper environment
function toolPathInEnv(name) {
    let envPath = process.env["PATH"];
    let envPathSplit = [];
    if (envPath) {
        envPathSplit = envPath.split(path.delimiter);
    }
    // todo: if the compiler is not found in path, scan on disk and point the user to all the options
    // (the concept of kit for cmake extension)
    return envPathSplit.find((p) => {
        const fullPath = path.join(p, path.basename(name));
        if (checkFileExistsSync(fullPath)) {
            return fullPath;
        }
    });
}
exports.toolPathInEnv = toolPathInEnv;
function taskKill(pid) {
    return new Promise((resolve, reject) => {
        child_process.exec(`taskkill /pid ${pid} /T /F`, (error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
}
async function killTree(progress, pid) {
    if (process.platform === "win32") {
        try {
            await taskKill(pid);
        }
        catch (e) {
            logger.message(`Failed to kill process ${pid}: ${e}`);
        }
        return;
    }
    let children = [];
    let stdoutStr = "";
    let stdout = (result) => {
        stdoutStr += result;
    };
    try {
        // pgrep should run on english, regardless of the system setting.
        const result = await spawnChildProcess("pgrep", ["-P", pid.toString()], getWorkspaceRoot(), true, false, stdout);
        if (!!stdoutStr.length) {
            children = stdoutStr
                .split("\n")
                .map((line) => Number.parseInt(line));
            logger.message(`Found children subprocesses: ${stdoutStr}.`);
            for (const other of children) {
                if (other) {
                    await killTree(progress, other);
                }
            }
        }
    }
    catch (e) {
        logger.message(e.message);
        throw e;
    }
    try {
        logger.message(`Killing process PID = ${pid}`);
        progress.report({
            increment: 1,
            message: localize(0, null, pid),
        });
        process.kill(pid, "SIGINT");
    }
    catch (e) {
        if (e.code !== "ESRCH") {
            throw e;
        }
    }
}
exports.killTree = killTree;
function normalizeEnvironmentVarname(varname) {
    return process.platform === "win32" ? varname.toUpperCase() : varname;
}
exports.normalizeEnvironmentVarname = normalizeEnvironmentVarname;
function mergeEnvironment(...env) {
    return env.reduce((acc, vars) => {
        if (process.platform === "win32") {
            // Env vars on windows are case insensitive, so we take the ones from
            // active env and overwrite the ones in our current process env
            const norm_vars = Object.getOwnPropertyNames(vars).reduce((acc2, key) => {
                acc2[normalizeEnvironmentVarname(key)] = vars[key];
                return acc2;
            }, {});
            return { ...acc, ...norm_vars };
        }
        else {
            return { ...acc, ...vars };
        }
    }, {});
}
exports.mergeEnvironment = mergeEnvironment;
// Helper to spawn a child process, hooked to callbacks that are processing stdout/stderr
// forceEnglish is true when the caller relies on parsing english words from the output.
function spawnChildProcess(processName, args, workingDirectory, forceEnglish, ensureQuoted, stdoutCallback, stderrCallback) {
    const localeOverride = {
        LANG: "C",
        LC_ALL: "C",
    };
    // Use english language for this process regardless of the system setting.
    const environment = forceEnglish ? localeOverride : {};
    const finalEnvironment = mergeEnvironment(process.env, environment);
    return new Promise((resolve, reject) => {
        // Honor the "terminal.integrated.automationShell.<platform>" setting.
        // According to documentation (and settings.json schema), the three allowed values for <platform> are "windows", "linux" and "osx".
        // child_process.SpawnOptions accepts a string (which can be read from the above setting) or the boolean true to let VSCode pick a default
        // based on where it is running.
        let shellType;
        let shellPlatform = process.platform === "win32"
            ? "windows"
            : process.platform === "linux"
                ? "linux"
                : "osx";
        let workspaceConfiguration = vscode.workspace.getConfiguration("terminal");
        shellType =
            workspaceConfiguration.get(`integrated.automationProfile.${shellPlatform}`) || // automationShell is deprecated
                workspaceConfiguration.get(`integrated.automationShell.${shellPlatform}`); // and replaced with automationProfile
        // Final quoting decisions for process name and args before being executed.
        let qProcessName = ensureQuoted
            ? quoteStringIfNeeded(processName)
            : processName;
        let qArgs = ensureQuoted
            ? args.map((arg) => {
                return quoteStringIfNeeded(arg);
            })
            : args;
        if (ensureQuoted) {
            logger.message(`Spawning child process with:\n process name: ${qProcessName}\n process args: ${qArgs}\n working directory: ${workingDirectory}\n shell type: ${shellType || "default"}`, "Debug");
        }
        const child = child_process.spawn(qProcessName, qArgs, { cwd: workingDirectory, shell: shellType || true, env: finalEnvironment });
        make.setCurPID(child.pid);
        if (stdoutCallback) {
            child.stdout.on("data", (data) => {
                stdoutCallback(`${data}`);
            });
        }
        if (stderrCallback) {
            child.stderr.on("data", (data) => {
                stderrCallback(`${data}`);
            });
        }
        child.on("close", (returnCode, signal) => {
            resolve({ returnCode, signal });
        });
        child.on("exit", (returnCode) => {
            resolve({ returnCode, signal: "" });
        });
        if (child.pid === undefined) {
            reject(new Error(`Failed to spawn process: ${processName} ${args}`));
        }
    });
}
exports.spawnChildProcess = spawnChildProcess;
// Helper to eliminate empty items in an array
function dropNulls(items) {
    return items.filter((item) => item !== null && item !== undefined);
}
exports.dropNulls = dropNulls;
// Convert a posix path (/home/dir1/dir2/file.ext) into windows path,
// by calling the cygpah which comes installed with MSYS/MinGW environments
// and which is also aware of the drive under which /home/ is placed.
// result: c:\msys64\home\dir1\dir2\file.ext
// Called usually for Windows subsystems: MinGW, CygWin.
async function cygpath(pathStr) {
    let windowsPath = pathStr;
    let stdout = (result) => {
        windowsPath = result.replace(/\n/gm, ""); // remove the end of line
    };
    // Running cygpath can use the system locale.
    await spawnChildProcess("cygpath", [pathStr, "-w"], "", false, false, stdout);
    return windowsPath;
}
exports.cygpath = cygpath;
// Helper that transforms a posix path (used in various non windows environments on a windows system)
// into a windows style path.
async function ensureWindowsPath(path) {
    if (process.platform !== "win32" || !path.startsWith("/")) {
        return path;
    }
    let winPath = path;
    if (process.env.MSYSTEM !== undefined) {
        // When in MSYS/MinGW/CygWin environments, cygpath can help transform into a windows path
        // that we know CppTools will use when querying us.
        winPath = await cygpath(winPath);
    }
    else {
        // Even in a pure windows environment, there are tools that may report posix paths.
        // Instead of searching a cygpath tool somewhere, do the most basic transformations:
        // Mount drives names like "cygdrive" or "mnt" can be ignored.
        const mountDrives = ["cygdrive", "mnt"];
        for (const drv of mountDrives) {
            if (winPath.startsWith(`/${drv}`)) {
                winPath = winPath.substr(drv.length + 1);
                // Exit the loop, because we don't want to remove anything else
                // in case the path happens to follow with a subfolder with the same name
                // as other mountable drives for various systems/environments.
                break;
            }
        }
        // Remove the slash and add the : for the drive.
        winPath = winPath.substr(1);
        const driveEndIndex = winPath.search("/");
        winPath =
            winPath.substring(0, driveEndIndex) + ":" + winPath.substr(driveEndIndex);
        // Replace / with \.
        winPath = winPath.replace(/\//gm, "\\");
    }
    return winPath;
}
exports.ensureWindowsPath = ensureWindowsPath;
// Helper to reinterpret one relative path (to the given current path) printed by make as full path
async function makeFullPath(relPath, curPath) {
    let fullPath = relPath;
    if (!path.isAbsolute(fullPath) && curPath) {
        fullPath = path.join(curPath, relPath);
    }
    // For win32, ensure we have a windows style path.
    fullPath = await ensureWindowsPath(fullPath);
    return fullPath;
}
exports.makeFullPath = makeFullPath;
// Helper to reinterpret the relative paths (to the given current path) printed by make as full paths
async function makeFullPaths(relPaths, curPath) {
    let fullPaths = [];
    for (const p of relPaths) {
        let fullPath = await makeFullPath(p, curPath);
        fullPaths.push(fullPath);
    }
    return fullPaths;
}
exports.makeFullPaths = makeFullPaths;
// Helper to reinterpret one full path as relative to the given current path
function makeRelPath(fullPath, curPath) {
    let relPath = fullPath;
    if (path.isAbsolute(fullPath) && curPath) {
        relPath = path.relative(curPath, fullPath);
    }
    return relPath;
}
exports.makeRelPath = makeRelPath;
// Helper to reinterpret the relative paths (to the given current path) printed by make as full paths
function makeRelPaths(fullPaths, curPath) {
    let relPaths = [];
    fullPaths.forEach((p) => {
        relPaths.push(makeRelPath(p, curPath));
    });
    return fullPaths;
}
exports.makeRelPaths = makeRelPaths;
// Helper to remove any quotes(", ' or `) from a given string
// because many file operations don't work properly with paths
// having quotes in the middle.
const quotesStr = ["'", '"', "`"];
function removeQuotes(str) {
    for (const p in quotesStr) {
        if (str.includes(quotesStr[p])) {
            let regExpStr = `${quotesStr[p]}`;
            let regExp = RegExp(regExpStr, "g");
            str = str.replace(regExp, "");
        }
    }
    return str;
}
exports.removeQuotes = removeQuotes;
// Remove only the quotes (", ' or `) that are surrounding the given string.
function removeSurroundingQuotes(str) {
    let result = str.trim();
    for (const p in quotesStr) {
        if (result.startsWith(quotesStr[p]) && result.endsWith(quotesStr[p])) {
            result = result.substring(1, str.length - 1);
            return result;
        }
    }
    return str;
}
exports.removeSurroundingQuotes = removeSurroundingQuotes;
// Quote given string if it contains space and is not quoted already
function quoteStringIfNeeded(str) {
    // No need to quote if there is no space or ampersand present.
    if (!str.includes(" ") && !str.includes("&")) {
        return str;
    }
    // Return if already quoted.
    for (const q in quotesStr) {
        if (str.startsWith(quotesStr[q]) && str.endsWith(quotesStr[q])) {
            return str;
        }
    }
    // Quote and return.
    return `"${str}"`;
}
exports.quoteStringIfNeeded = quoteStringIfNeeded;
// Used when constructing a regular expression from file names which can contain
// special characters (+, ", ...etc...).
const escapeChars = /[\\\^\$\*\+\?\{\}\(\)\.\!\=\|\[\]\ \/]/; // characters that should be escaped.
function escapeString(str) {
    let escapedString = "";
    for (const char of str) {
        if (char.match(escapeChars)) {
            escapedString += `\\${char}`;
        }
        else {
            escapedString += char;
        }
    }
    return escapedString;
}
exports.escapeString = escapeString;
function elapsedTimeSince(start) {
    // Real elapsed times not useful in testing mode and we want to avoid diffs.
    // We could alternatively disable the messages from being printed.
    return process.env["MAKEFILE_TOOLS_TESTING"] === "1"
        ? 0
        : (Date.now() - start) / 1000;
}
exports.elapsedTimeSince = elapsedTimeSince;
// Helper to evaluate whether two settings (objects or simple types) represent the same content.
// It recursively analyzes any inner subobjects and is also not affected
// by a different order of properties.
function areEqual(setting1, setting2) {
    if (setting1 === null ||
        setting1 === undefined ||
        setting2 === null ||
        setting2 === undefined) {
        return setting1 === setting2;
    }
    // This is simply type
    if (typeof setting1 !== "function" &&
        typeof setting1 !== "object" &&
        typeof setting2 !== "function" &&
        typeof setting2 !== "object") {
        return setting1 === setting2;
    }
    let properties1 = Object.getOwnPropertyNames(setting1);
    let properties2 = Object.getOwnPropertyNames(setting2);
    if (properties1.length !== properties2.length) {
        return false;
    }
    for (let p = 0; p < properties1.length; p++) {
        let property = properties1[p];
        let isEqual;
        if (typeof setting1[property] === "object" &&
            typeof setting2[property] === "object") {
            isEqual = areEqual(setting1[property], setting2[property]);
        }
        else {
            isEqual = setting1[property] === setting2[property];
        }
        if (!isEqual) {
            return false;
        }
    }
    return true;
}
exports.areEqual = areEqual;
// Answers whether the given object has at least one property.
function hasProperties(obj) {
    if (obj === null || obj === undefined) {
        return false;
    }
    let props = Object.getOwnPropertyNames(obj);
    return props && props.length > 0;
}
exports.hasProperties = hasProperties;
// Apply any properties from source to destination, logging for overwrite.
// To make things simpler for the caller, create a valid dst if given null or undefined.
function mergeProperties(dst, src) {
    let props = src ? Object.getOwnPropertyNames(src) : [];
    props.forEach((prop) => {
        if (!dst) {
            dst = {};
        }
        if (dst[prop] !== undefined) {
            logger.message(`Destination object already has property ${prop} set to ${dst[prop]}. Overwriting from source with ${src[prop]}`, "Debug");
        }
        dst[prop] = src[prop];
    });
    return dst;
}
exports.mergeProperties = mergeProperties;
function removeDuplicates(src) {
    let seen = {};
    let result = [];
    src.forEach((item) => {
        if (!seen[item]) {
            seen[item] = true;
            result.push(item);
        }
    });
    return result;
}
exports.removeDuplicates = removeDuplicates;
function sortAndRemoveDuplicates(src) {
    return removeDuplicates(src.sort());
}
exports.sortAndRemoveDuplicates = sortAndRemoveDuplicates;
function reportDryRunError(dryrunOutputFile) {
    logger.message(`You can see the detailed dry-run output at ${dryrunOutputFile}`);
    logger.message("Make sure that the extension is invoking the same make command as in your development prompt environment.");
    logger.message("You may need to define or tweak a custom makefile configuration in settings via 'makefile.configurations' like described here: [link]");
    logger.message("Also make sure your code base does not have any known issues with the dry-run switches used by this extension (makefile.dryrunSwitches).");
    logger.message("If you are not able to fix the dry-run, open a GitHub issue in Makefile Tools repo: " +
        "https://github.com/microsoft/vscode-makefile-tools/issues");
}
exports.reportDryRunError = reportDryRunError;
// Helper to make paths absolute until the extension handles variables expansion.
function resolvePathToRoot(relPath) {
    if (!path.isAbsolute(relPath)) {
        return path.join(getWorkspaceRoot(), relPath);
    }
    return relPath;
}
exports.resolvePathToRoot = resolvePathToRoot;
// Return the string representing the user home location.
// Inspired from CMake Tools. TODO: implement more such paths and refactor into a separate class.
function userHome() {
    if (process.platform === "win32") {
        return path.join(process.env["HOMEDRIVE"] || "C:", process.env["HOMEPATH"] || "Users\\Public");
    }
    else {
        return process.env["HOME"] || process.env["PROFILE"] || "";
    }
}
exports.userHome = userHome;
// Helper to correctly interpret boolean values out of strings.
// Currently used during settings variable expansion.
function booleanify(value) {
    const truthy = ["true", "True", "1"];
    return truthy.includes(value);
}
exports.booleanify = booleanify;
// Read setting from workspace settings and expand according to various supported patterns.
// Do this for the simple types (converting to boolean or numerals when the varexp syntax
// is used on such types of settings) and for arrays or objects, expand recursively
// until we reach the simple types for submembers. This handles any structure.
async function getExpandedSetting(settingId, propSchema) {
    let workspaceConfiguration = vscode.workspace.getConfiguration("makefile");
    let settingVal = workspaceConfiguration.get(settingId);
    if (!propSchema) {
        propSchema = thisExtensionPackage().contributes.configuration.properties;
        propSchema = propSchema.properties
            ? propSchema.properties[`makefile.${settingId}`]
            : propSchema[`makefile.${settingId}`];
    }
    // Read what's at settingId in the workspace settings and for objects and arrays of complex types make sure
    // to copy into a new counterpart that we will modify, because we don't want to persist expanded values in settings.
    let copySettingVal;
    if (propSchema && propSchema.type === "array") {
        // A simple .concat() is not enough. We need to push(Object.assign) on all object entries in the array.
        copySettingVal = [];
        settingVal.forEach((element) => {
            let copyElement = {};
            copyElement =
                typeof element === "object"
                    ? Object.assign(copyElement, element)
                    : element;
            copySettingVal.push(copyElement);
        });
    }
    else if (propSchema && propSchema.type === "object") {
        copySettingVal = {};
        copySettingVal = Object.assign(copySettingVal, settingVal);
    }
    else {
        copySettingVal = settingVal;
    }
    return getExpandedSettingVal(settingId, copySettingVal, propSchema);
}
exports.getExpandedSetting = getExpandedSetting;
// Same as above but read from an object instead of the settings (as if we get<> before calling this).
// Such approach was needed for tests.
async function getExpandedSettingVal(settingId, settingVal, propSchema) {
    // Currently, we have no ${} variables in the default values of our settings.
    // Skip expanding defaults to keep things faster simpler and safer.
    // Change this when needed.
    const typeJson = propSchema ? propSchema.type : undefined;
    if (settingVal !== undefined &&
        ((propSchema && !areEqual(propSchema.default, settingVal)) || !propSchema)) {
        // This OR is for variables not defined in the extension package.json
        // but the user can define any variable in settings.json to reference later
        if (typeof settingVal === "string") {
            const expandedVal = await expandVariablesInSetting(settingId, settingVal);
            let result = expandedVal;
            if (typeJson === "boolean") {
                result = booleanify(expandedVal);
            }
            else if (typeJson === "number" || typeJson === "integer") {
                result = Number(expandedVal);
            }
            return result;
        }
        else if (typeof settingVal === "object") {
            // arrays are also seen as objects:
            // example: array[5] is seen as property object with index array.5
            // and at the next call we'll see the string.
            let properties = Object.getOwnPropertyNames(settingVal);
            for (let p = 0; p < properties.length; p++) {
                let prop = properties[p];
                let childPropSchema;
                if (propSchema) {
                    if (typeJson === "array") {
                        childPropSchema = propSchema.items;
                    }
                    else {
                        childPropSchema = propSchema.properties
                            ? propSchema.properties[`${prop}`]
                            : propSchema[`${prop}`];
                    }
                }
                try {
                    // The settingVal that was given to this function was already a separate copy from its workspace settings counterpart
                    // but if that contained an array anywhere in its structure, if we don't copy here, this expansion will modify
                    // workspace settings which we want to leave untouched.
                    let copySettingValProp = settingVal[prop];
                    if (childPropSchema && childPropSchema.type === "array") {
                        copySettingValProp = [].concat(settingVal[prop]);
                    }
                    let expandedProp = await getExpandedSettingVal(settingId + "." + prop, copySettingValProp, childPropSchema);
                    if (!areEqual(settingVal[prop], expandedProp)) {
                        settingVal[prop] = expandedProp;
                    }
                }
                catch (e) {
                    logger.message(`Exception while expanding string "${settingId}.${prop}": '${e.message}'`);
                }
            }
        }
    }
    return settingVal;
}
exports.getExpandedSettingVal = getExpandedSettingVal;
// Helper for expanding variables in a setting. The following scenarios are currently supported:
// - predefined VSCode variables (more should be supported with the next release):
//       ${workspaceFolder} (which is the same as the deprecated ${workspaceRoot} which we still support),
//       ${workspaceFolderBasename}, ${userHome}
// - special Makefile Tools variables (implement more in future):
//       ${configuration}, ${buildTarget} (these map to the first two UI elements in the "C/C++" left panel)
// - environment variables: ${env:USERNAME}
// - (any extensions) configuration variables: ${config:extension.setting}
// - command variables: ${command:extension.command} (currently, without commands input variables support)
// - allow for escaping a varexp sequence in case the user wants to pass that through as is.
//   The escape character is backslash and in json one backslash is not allowed inside a string, so we'll always get double.
//   When used in paths, we can't know if a \\ is wanted as a path separator or an escape character so we assume
//   it is always an escape character. Whenever this is not the case, the user can switch to forward slashes in the paths.
//   Example: "drive:\\folder1\\folder2_\\${variable}\\folder3" may be wanted as "drive:\\folder1\\folder2_\\value\\folder3"
//   or as "drive:\\folder1\\folder2_${variable}\\folder3". $ does not make much sense to be left in a path
//   but also the analysis of the meaning of a string (especially if not full path) is not simple.
//   Forward slashes are recommended in paths.
//       NOTES:
//       - ${command:makefile.getConfiguration} is the same as ${configuration}
//       - ${command:makefile.getBuildTarget} is the same as ${buildTarget}
//       - we need the above two commands because launch.json and tasks.json
//         don't work with our predefined variables, only with the VSCode predefined variables.
//         Such data is useful to be accessible to launch/tasks jsons too.
//         But settings.json works with our predefined variables, VSCode predefined variables
//         and any commands.
// TODO: Currently, after applying any expansion pattern, if the result is another expansion pattern
// we log an error but in future let's handle the recursivity and complications of expanding anything
// coming via this entrypoint.
async function expandVariablesInSetting(settingId, settingVal) {
    // Do some string preprocessing first, related to escaping.
    // Since we don't want to change the value persisted in settings but we need to lose the separator
    // (so that the final beneficiaries of these settings don't need to handle the separator character)
    // we will keep the varexp pattern in the final value without the escape character.
    // The escape character is only for our regexp here to know to not expand it.
    // Safe to replace \\${ with ESCAPED_VARIABLE_EXPANSION. This will cause the pattern to be skipped
    // by the regular expression below and also we will replace in reverse at the end (without \\).
    const telemetryProperties = { setting: settingId };
    let preprocStr = settingVal.replace(/\\\$\{/gm, "ESCAPED_VARIABLE_EXPANSION");
    if (preprocStr !== settingVal) {
        logger.message(`Detected escaped variable expansion patterns in setting '${settingId}', within value '${settingVal}'.`);
        telemetryProperties.pattern = "escaped";
        telemetry.logEvent("varexp", telemetryProperties);
        settingVal = preprocStr;
    }
    // Try the predefined VSCode variable first. The regexp for ${variable} won't fit the others because of the ":".
    let expandedSetting = settingVal;
    let regexpVSCodeVar = /(\$\{(\w+)\})|(\$\{(\w+):(.+?)\})/gm;
    let result = regexpVSCodeVar.exec(expandedSetting);
    while (result) {
        const telemetryProperties = { setting: settingId };
        let toStr = "";
        if (result[2] === "workspaceFolder" || result[2] === "workspaceRoot") {
            toStr = getWorkspaceRoot();
            telemetryProperties.pattern = result[2];
        }
        else if (result[2] === "workspaceFolderBasename") {
            toStr = path.basename(getWorkspaceRoot());
            telemetryProperties.pattern = result[2];
        }
        else if (result[2] === "userHome") {
            toStr = userHome();
            telemetryProperties.pattern = result[2];
        }
        else if (result[2] === "configuration") {
            toStr = configuration.getCurrentMakefileConfiguration();
            telemetryProperties.pattern = result[2];
        }
        else if (result[2] === "buildTarget") {
            toStr = configuration.getCurrentTarget() || "";
            telemetryProperties.pattern = result[2];
        }
        else if (result[4] === "env" && result[5]) {
            toStr = process.env[result[5]] || "";
            telemetryProperties.pattern = result[4];
        }
        else if (result[4] === "command") {
            telemetryProperties.pattern = result[4];
            telemetryProperties.info = result[5];
            try {
                toStr = await vscode.commands.executeCommand(result[5]);
            }
            catch (e) {
                toStr = "unknown";
                logger.message(`Exception while executing command "${result[5]}": '${e.message}'`);
            }
        }
        else if (result[4] === "config" && result[5]) {
            // Extract the name of the extension we read this setting from (before the dot)
            // and the setting follows the first dot.
            telemetryProperties.pattern = result[4];
            telemetryProperties.info = result[5];
            const regexpCfg = /(\w+)\.(.+)/gm;
            const res = regexpCfg.exec(result[5]);
            if (res && res[1] && res[2]) {
                let workspaceCfg = vscode.workspace.getConfiguration(res[1]);
                toStr = workspaceCfg.get(res[2]);
                // The setting is either undefined or maybe we encountered a case with multiple names separated by dot for a property:
                // makefile.set1.set2.set3.set4... which cannot be seen if given the whole setting ID at once.
                // Example:
                // "makefile.set1.set2.set3": {
                //     "set4.set5": "val"
                //     "something.else": "other"
                // }
                // A get on the root workspace cannot see "makefile.set1.set2.set3.set4.set5", returns undefined.
                // In the above case, one get of "makefile.set1.set2.set3" returns an object, then an access on "set4.set5" gets the final value "val".
                // We don't know at which dot to stop for the first and the subsequent get operations, so starting with the workspace root
                // we query for properties and see how much it matches from the full setting id, then we query again on the left over,
                // until we get the final value.
                // In the above case, the root makefile workspace has a property set1 (not set1.set2.set3), then the object retrieved
                // has a set2 property then set3. That last object has a "set4.set5" property (not set4 then set5).
                if (toStr === null || toStr === undefined) {
                    toStr = getSettingMultipleDots(workspaceCfg, res[2]);
                }
                if (toStr === null || toStr === undefined) {
                    toStr = "unknown";
                }
            }
        }
        else {
            logger.message(`Unrecognized variable format: ${result[0]}`);
            toStr = "unknown";
            telemetryProperties.pattern = "unrecognized";
        }
        telemetry.logEvent("varexp", telemetryProperties);
        // Because we replace at the same time as we evaluate possible consecutive $ patterns
        // we need to start each time the search from the beginning (otherwise the lastIndex gets messed up).
        // It is guaranteed we exit this loop because if we match, we replace with something.
        // That is why we cannot leave the ${} as they are and we replace with "unknown" when they can't resolve.
        // Replacing with empty string was not an option because we want unrecognized patterns to stand out quickly.
        regexpVSCodeVar.lastIndex = 0;
        // Warn if the expanded value contains yet another expansion pattern and leave as is.
        // We will address in future multiple passes.
        if (regexpVSCodeVar.exec(toStr) !== null) {
            logger.message(`"${result[0]}" resolves to "${toStr}" which requires another expansion.` +
                " We will support multiple expansion passes in the future. ");
            expandedSetting = expandedSetting.replace(result[0], "unknown");
        }
        else {
            expandedSetting = expandedSetting.replace(result[0], toStr);
        }
        regexpVSCodeVar.lastIndex = 0;
        result = regexpVSCodeVar.exec(expandedSetting);
    }
    if (expandedSetting !== settingVal) {
        logger.message(`Expanding from '${settingVal}' to '${expandedSetting}' for setting '${settingId}'.`);
    }
    // Reverse the preprocessing done at the beginning, except that we don't keep the escape character.
    preprocStr = expandedSetting.replace(/ESCAPED_VARIABLE_EXPANSION/gm, "${");
    return preprocStr;
}
exports.expandVariablesInSetting = expandVariablesInSetting;
// Function specialized to get properties with multiple dots in their names.
// In case of more possibilities, return last.
// Example: get the value of "makefile.panel.visibility" or a general hypothetic setting like
// "makefile.set1.set2.set3.set4": {
//      "set5.set6": "val1",
//      "set7.set8": "val2"
// }
// getSettingMultipleDots will return "val2" for "makefile.set1.set2.set3.set4.set7.set8"
// and workspaceConfiguration.get<> will not see it as a whole.
function getSettingMultipleDots(scope, settingId) {
    let result;
    if (scope) {
        let rootProps = Object.getOwnPropertyNames(scope);
        rootProps = rootProps.filter((item) => item && (settingId.startsWith(`${item}.`) || settingId === item));
        rootProps.forEach((prop) => {
            if (settingId === prop) {
                result = scope[prop];
            }
            else {
                result = getSettingMultipleDots(scope[prop], settingId.substring(prop.length + 1, settingId.length));
            }
        });
    }
    return result;
}
// Schedule a task to be run at some future time. This allows other pending tasks to
// execute ahead of the scheduled task and provides a form of async behavior for TypeScript.
function scheduleTask(task) {
    return new Promise((resolve, reject) => {
        setImmediate(() => {
            try {
                const result = task();
                resolve(result);
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
exports.scheduleTask = scheduleTask;
// Async version of scheduleTask
async function scheduleAsyncTask(task) {
    return new Promise((resolve, reject) => {
        setImmediate(async () => {
            try {
                const result = await task();
                resolve(result);
            }
            catch (e) {
                reject(e);
            }
        });
    });
}
exports.scheduleAsyncTask = scheduleAsyncTask;
function thisExtension() {
    const ext = vscode.extensions.getExtension("ms-vscode.makefile-tools");
    if (!ext) {
        throw new Error("Our own extension is null.");
    }
    return ext;
}
exports.thisExtension = thisExtension;
function thisExtensionPackage() {
    const pkg = thisExtension().packageJSON;
    return {
        name: pkg.name,
        publisher: pkg.publisher,
        version: pkg.version,
        contributes: pkg.contributes,
    };
}
exports.thisExtensionPackage = thisExtensionPackage;
function thisExtensionPath() {
    return thisExtension().extensionPath;
}
exports.thisExtensionPath = thisExtensionPath;


/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NIL: () => (/* reexport */ nil),
  parse: () => (/* reexport */ esm_node_parse),
  stringify: () => (/* reexport */ esm_node_stringify),
  v1: () => (/* reexport */ esm_node_v1),
  v3: () => (/* reexport */ esm_node_v3),
  v4: () => (/* reexport */ esm_node_v4),
  v5: () => (/* reexport */ esm_node_v5),
  validate: () => (/* reexport */ esm_node_validate),
  version: () => (/* reexport */ esm_node_version)
});

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(968);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/rng.js

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    external_crypto_default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_node_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_node_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_node_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || unsafeStringify(b);
}

/* harmony default export */ const esm_node_v1 = (v1);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/parse.js


function parse(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const esm_node_parse = (parse);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_node_parse(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return unsafeStringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/md5.js


function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('md5').update(bytes).digest();
}

/* harmony default export */ const esm_node_md5 = (md5);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v3.js


const v3 = v35('v3', 0x30, esm_node_md5);
/* harmony default export */ const esm_node_v3 = (v3);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/native.js

/* harmony default export */ const esm_node_native = ({
  randomUUID: (external_crypto_default()).randomUUID
});
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v4.js




function v4(options, buf, offset) {
  if (esm_node_native.randomUUID && !buf && !options) {
    return esm_node_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_node_v4 = (v4);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/sha1.js


function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return external_crypto_default().createHash('sha1').update(bytes).digest();
}

/* harmony default export */ const esm_node_sha1 = (sha1);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v5.js


const v5 = v35('v5', 0x50, esm_node_sha1);
/* harmony default export */ const esm_node_v5 = (v5);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/nil.js
/* harmony default export */ const nil = ('00000000-0000-0000-0000-000000000000');
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/version.js


function version(uuid) {
  if (!esm_node_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

/* harmony default export */ const esm_node_version = (version);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/index.js










/***/ }),

/***/ 64:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 * ------------------------------------------------------------------------------------------ */

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCppToolsApi = exports.Version = void 0;
const vscode = __webpack_require__(304);
/**
 * API version information.
 */
var Version;
(function (Version) {
    Version[Version["v0"] = 0] = "v0";
    Version[Version["v1"] = 1] = "v1";
    Version[Version["v2"] = 2] = "v2";
    Version[Version["v3"] = 3] = "v3";
    Version[Version["v4"] = 4] = "v4";
    Version[Version["v5"] = 5] = "v5";
    Version[Version["v6"] = 6] = "v6";
    Version[Version["latest"] = 6] = "latest";
})(Version = exports.Version || (exports.Version = {}));
/**
 * Check if an object satisfies the contract of the CppToolsExtension interface.
 */
function isCppToolsExtension(extension) {
    return extension && extension.getApi;
}
/**
 * Check if an object satisfies the contract of the first version of the CppToolsApi.
 * (The first release of the API only had two functions)
 */
function isLegacyCppToolsApi(api) {
    return api && api.registerCustomConfigurationProvider && api.didChangeCustomConfiguration;
}
/**
 * Helper function to get the CppToolsApi from the cpptools extension.
 * @param version The desired API version
 * @example
```
    import {CppToolsApi, Version, CustomConfigurationProvider, getCppToolsApi} from 'vscode-cpptools';

    let api: CppToolsApi|undefined = await getCppToolsApi(Version.v1);
    if (api) {
        // Inform cpptools that a custom config provider
        // will be able to service the current workspace.
        api.registerCustomConfigurationProvider(provider);

        // Do any required setup that the provider needs.

        // Notify cpptools that the provider is ready to
        // provide IntelliSense configurations.
        api.notifyReady(provider);
    }
    // Dispose of the 'api' in your extension's
    // deactivate() method, or whenever you want to
    // unregister the provider.
```
 */
function getCppToolsApi(version) {
    return __awaiter(this, void 0, void 0, function* () {
        let cpptools = vscode.extensions.getExtension("ms-vscode.cpptools");
        let extension = undefined;
        let api = undefined;
        if (cpptools) {
            if (!cpptools.isActive) {
                try {
                    // activate may throw if VS Code is shutting down.
                    extension = yield cpptools.activate();
                }
                catch (_a) {
                }
            }
            else {
                extension = cpptools.exports;
            }
            if (isCppToolsExtension(extension)) {
                // ms-vscode.cpptools > 0.17.5
                try {
                    api = extension.getApi(version);
                }
                catch (err) {
                    // Unfortunately, ms-vscode.cpptools [0.17.6, 0.18.1] throws a RangeError if you specify a version greater than v1.
                    // These versions of the extension will not be able to act on the newer interface and v2 is a superset of v1, so we can safely fall back to v1.
                    let e = err;
                    if (e && e.message && e.message.startsWith("Invalid version")) {
                        api = extension.getApi(Version.v1);
                    }
                }
                if (version !== Version.v1) {
                    if (!api.getVersion) {
                        console.warn(`[vscode-cpptools-api] version ${version} requested, but is not available in the current version of the cpptools extension. Using version 1 instead.`);
                    }
                    else if (version !== api.getVersion()) {
                        console.warn(`[vscode-cpptools-api] version ${version} requested, but is not available in the current version of the cpptools extension. Using version ${api.getVersion()} instead.`);
                    }
                }
            }
            else if (isLegacyCppToolsApi(extension)) {
                // ms-vscode.cpptools version 0.17.5
                api = extension;
                if (version !== Version.v0) {
                    console.warn(`[vscode-cpptools-api] version ${version} requested, but is not available in version 0.17.5 of the cpptools extension. Using version 0 instead.`);
                }
            }
            else {
                console.warn('[vscode-cpptools-api] No cpptools API was found.');
            }
        }
        else {
            console.warn('[vscode-cpptools-api] C/C++ extension is not installed');
        }
        return api;
    });
}
exports.getCppToolsApi = getCppToolsApi;


/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = exports.loadMessageBundle = exports.localize = exports.format = exports.setPseudo = exports.isPseudo = exports.isDefined = exports.BundleFormat = exports.MessageFormat = void 0;
var ral_1 = __webpack_require__(795);
var MessageFormat;
(function (MessageFormat) {
    MessageFormat["file"] = "file";
    MessageFormat["bundle"] = "bundle";
    MessageFormat["both"] = "both";
})(MessageFormat = exports.MessageFormat || (exports.MessageFormat = {}));
var BundleFormat;
(function (BundleFormat) {
    // the nls.bundle format
    BundleFormat["standalone"] = "standalone";
    BundleFormat["languagePack"] = "languagePack";
})(BundleFormat = exports.BundleFormat || (exports.BundleFormat = {}));
var LocalizeInfo;
(function (LocalizeInfo) {
    function is(value) {
        var candidate = value;
        return candidate && isDefined(candidate.key) && isDefined(candidate.comment);
    }
    LocalizeInfo.is = is;
})(LocalizeInfo || (LocalizeInfo = {}));
function isDefined(value) {
    return typeof value !== 'undefined';
}
exports.isDefined = isDefined;
exports.isPseudo = false;
function setPseudo(pseudo) {
    exports.isPseudo = pseudo;
}
exports.setPseudo = setPseudo;
function format(message, args) {
    var result;
    if (exports.isPseudo) {
        // FF3B and FF3D is the Unicode zenkaku representation for [ and ]
        message = '\uFF3B' + message.replace(/[aouei]/g, '$&$&') + '\uFF3D';
    }
    if (args.length === 0) {
        result = message;
    }
    else {
        result = message.replace(/\{(\d+)\}/g, function (match, rest) {
            var index = rest[0];
            var arg = args[index];
            var replacement = match;
            if (typeof arg === 'string') {
                replacement = arg;
            }
            else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
                replacement = String(arg);
            }
            return replacement;
        });
    }
    return result;
}
exports.format = format;
function localize(_key, message) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return format(message, args);
}
exports.localize = localize;
function loadMessageBundle(file) {
    return (0, ral_1.default)().loadMessageBundle(file);
}
exports.loadMessageBundle = loadMessageBundle;
function config(opts) {
    return (0, ral_1.default)().config(opts);
}
exports.config = config;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 795:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var _ral;
function RAL() {
    if (_ral === undefined) {
        throw new Error("No runtime abstraction layer installed");
    }
    return _ral;
}
(function (RAL) {
    function install(ral) {
        if (ral === undefined) {
            throw new Error("No runtime abstraction layer provided");
        }
        _ral = ral;
    }
    RAL.install = install;
})(RAL || (RAL = {}));
exports["default"] = RAL;
//# sourceMappingURL=ral.js.map

/***/ }),

/***/ 892:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = exports.loadMessageBundle = exports.BundleFormat = exports.MessageFormat = void 0;
var path = __webpack_require__(72);
var fs = __webpack_require__(58);
var ral_1 = __webpack_require__(795);
var common_1 = __webpack_require__(148);
var common_2 = __webpack_require__(148);
Object.defineProperty(exports, "MessageFormat", ({ enumerable: true, get: function () { return common_2.MessageFormat; } }));
Object.defineProperty(exports, "BundleFormat", ({ enumerable: true, get: function () { return common_2.BundleFormat; } }));
var toString = Object.prototype.toString;
function isNumber(value) {
    return toString.call(value) === '[object Number]';
}
function isString(value) {
    return toString.call(value) === '[object String]';
}
function isBoolean(value) {
    return value === true || value === false;
}
function readJsonFileSync(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
var resolvedBundles;
var options;
function initializeSettings() {
    options = { locale: undefined, language: undefined, languagePackSupport: false, cacheLanguageResolution: true, messageFormat: common_1.MessageFormat.bundle };
    if (isString(process.env.VSCODE_NLS_CONFIG)) {
        try {
            var vscodeOptions_1 = JSON.parse(process.env.VSCODE_NLS_CONFIG);
            var language = void 0;
            if (vscodeOptions_1.availableLanguages) {
                var value = vscodeOptions_1.availableLanguages['*'];
                if (isString(value)) {
                    language = value;
                }
            }
            if (isString(vscodeOptions_1.locale)) {
                options.locale = vscodeOptions_1.locale.toLowerCase();
            }
            if (language === undefined) {
                options.language = options.locale;
            }
            else if (language !== 'en') {
                options.language = language;
            }
            if (isBoolean(vscodeOptions_1._languagePackSupport)) {
                options.languagePackSupport = vscodeOptions_1._languagePackSupport;
            }
            if (isString(vscodeOptions_1._cacheRoot)) {
                options.cacheRoot = vscodeOptions_1._cacheRoot;
            }
            if (isString(vscodeOptions_1._languagePackId)) {
                options.languagePackId = vscodeOptions_1._languagePackId;
            }
            if (isString(vscodeOptions_1._translationsConfigFile)) {
                options.translationsConfigFile = vscodeOptions_1._translationsConfigFile;
                try {
                    options.translationsConfig = readJsonFileSync(options.translationsConfigFile);
                }
                catch (error) {
                    // We can't read the translation config file. Mark the cache as corrupted.
                    if (vscodeOptions_1._corruptedFile) {
                        var dirname = path.dirname(vscodeOptions_1._corruptedFile);
                        fs.exists(dirname, function (exists) {
                            if (exists) {
                                fs.writeFile(vscodeOptions_1._corruptedFile, 'corrupted', 'utf8', function (err) {
                                    console.error(err);
                                });
                            }
                        });
                    }
                }
            }
        }
        catch (_a) {
            // Do nothing.
        }
    }
    (0, common_1.setPseudo)(options.locale === 'pseudo');
    resolvedBundles = Object.create(null);
}
initializeSettings();
function supportsLanguagePack() {
    return options.languagePackSupport === true && options.cacheRoot !== undefined && options.languagePackId !== undefined && options.translationsConfigFile !== undefined
        && options.translationsConfig !== undefined;
}
function createScopedLocalizeFunction(messages) {
    return function (key, message) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (isNumber(key)) {
            if (key >= messages.length) {
                console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: ".concat(new Error('').stack));
                return;
            }
            return (0, common_1.format)(messages[key], args);
        }
        else {
            if (isString(message)) {
                console.warn("Message ".concat(message, " didn't get externalized correctly."));
                return (0, common_1.format)(message, args);
            }
            else {
                console.error("Broken localize call found. Stacktrace is\n: ".concat(new Error('').stack));
            }
        }
    };
}
function resolveLanguage(file) {
    var resolvedLanguage;
    if (options.cacheLanguageResolution && resolvedLanguage) {
        resolvedLanguage = resolvedLanguage;
    }
    else {
        if (common_1.isPseudo || !options.language) {
            resolvedLanguage = '.nls.json';
        }
        else {
            var locale = options.language;
            while (locale) {
                var candidate = '.nls.' + locale + '.json';
                if (fs.existsSync(file + candidate)) {
                    resolvedLanguage = candidate;
                    break;
                }
                else {
                    var index = locale.lastIndexOf('-');
                    if (index > 0) {
                        locale = locale.substring(0, index);
                    }
                    else {
                        resolvedLanguage = '.nls.json';
                        locale = null;
                    }
                }
            }
        }
        if (options.cacheLanguageResolution) {
            resolvedLanguage = resolvedLanguage;
        }
    }
    return file + resolvedLanguage;
}
function findInTheBoxBundle(root) {
    var language = options.language;
    while (language) {
        var candidate = path.join(root, "nls.bundle.".concat(language, ".json"));
        if (fs.existsSync(candidate)) {
            return candidate;
        }
        else {
            var index = language.lastIndexOf('-');
            if (index > 0) {
                language = language.substring(0, index);
            }
            else {
                language = undefined;
            }
        }
    }
    // Test if we can reslove the default bundle.
    if (language === undefined) {
        var candidate = path.join(root, 'nls.bundle.json');
        if (fs.existsSync(candidate)) {
            return candidate;
        }
    }
    return undefined;
}
function mkdir(directory) {
    try {
        fs.mkdirSync(directory);
    }
    catch (err) {
        if (err.code === 'EEXIST') {
            return;
        }
        else if (err.code === 'ENOENT') {
            var parent = path.dirname(directory);
            if (parent !== directory) {
                mkdir(parent);
                fs.mkdirSync(directory);
            }
        }
        else {
            throw err;
        }
    }
}
function createDefaultNlsBundle(folder) {
    var metaData = readJsonFileSync(path.join(folder, 'nls.metadata.json'));
    var result = Object.create(null);
    for (var module_1 in metaData) {
        var entry = metaData[module_1];
        result[module_1] = entry.messages;
    }
    return result;
}
function createNLSBundle(header, metaDataPath) {
    var languagePackLocation = options.translationsConfig[header.id];
    if (!languagePackLocation) {
        return undefined;
    }
    var languagePack = readJsonFileSync(languagePackLocation).contents;
    var metaData = readJsonFileSync(path.join(metaDataPath, 'nls.metadata.json'));
    var result = Object.create(null);
    for (var module_2 in metaData) {
        var entry = metaData[module_2];
        var translations = languagePack["".concat(header.outDir, "/").concat(module_2)];
        if (translations) {
            var resultMessages = [];
            for (var i = 0; i < entry.keys.length; i++) {
                var messageKey = entry.keys[i];
                var key = isString(messageKey) ? messageKey : messageKey.key;
                var translatedMessage = translations[key];
                if (translatedMessage === undefined) {
                    translatedMessage = entry.messages[i];
                }
                resultMessages.push(translatedMessage);
            }
            result[module_2] = resultMessages;
        }
        else {
            result[module_2] = entry.messages;
        }
    }
    return result;
}
function touch(file) {
    var d = new Date();
    fs.utimes(file, d, d, function () {
        // Do nothing. Ignore
    });
}
function cacheBundle(key, bundle) {
    resolvedBundles[key] = bundle;
    return bundle;
}
function loadNlsBundleOrCreateFromI18n(header, bundlePath) {
    var result;
    var bundle = path.join(options.cacheRoot, "".concat(header.id, "-").concat(header.hash, ".json"));
    var useMemoryOnly = false;
    var writeBundle = false;
    try {
        result = JSON.parse(fs.readFileSync(bundle, { encoding: 'utf8', flag: 'r' }));
        touch(bundle);
        return result;
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            writeBundle = true;
        }
        else if (err instanceof SyntaxError) {
            // We have a syntax error. So no valid JSON. Use
            console.log("Syntax error parsing message bundle: ".concat(err.message, "."));
            fs.unlink(bundle, function (err) {
                if (err) {
                    console.error("Deleting corrupted bundle ".concat(bundle, " failed."));
                }
            });
            useMemoryOnly = true;
        }
        else {
            throw err;
        }
    }
    result = createNLSBundle(header, bundlePath);
    if (!result || useMemoryOnly) {
        return result;
    }
    if (writeBundle) {
        try {
            fs.writeFileSync(bundle, JSON.stringify(result), { encoding: 'utf8', flag: 'wx' });
        }
        catch (err) {
            if (err.code === 'EEXIST') {
                return result;
            }
            throw err;
        }
    }
    return result;
}
function loadDefaultNlsBundle(bundlePath) {
    try {
        return createDefaultNlsBundle(bundlePath);
    }
    catch (err) {
        console.log("Generating default bundle from meta data failed.", err);
        return undefined;
    }
}
function loadNlsBundle(header, bundlePath) {
    var result;
    // Core decided to use a language pack. Do the same in the extension
    if (supportsLanguagePack()) {
        try {
            result = loadNlsBundleOrCreateFromI18n(header, bundlePath);
        }
        catch (err) {
            console.log("Load or create bundle failed ", err);
        }
    }
    if (!result) {
        // No language pack found, but core is running in language pack mode
        // Don't try to use old in the box bundles since the might be stale
        // Fall right back to the default bundle.
        if (options.languagePackSupport) {
            return loadDefaultNlsBundle(bundlePath);
        }
        var candidate = findInTheBoxBundle(bundlePath);
        if (candidate) {
            try {
                return readJsonFileSync(candidate);
            }
            catch (err) {
                console.log("Loading in the box message bundle failed.", err);
            }
        }
        result = loadDefaultNlsBundle(bundlePath);
    }
    return result;
}
function tryFindMetaDataHeaderFile(file) {
    var result;
    var dirname = path.dirname(file);
    while (true) {
        result = path.join(dirname, 'nls.metadata.header.json');
        if (fs.existsSync(result)) {
            break;
        }
        var parent = path.dirname(dirname);
        if (parent === dirname) {
            result = undefined;
            break;
        }
        else {
            dirname = parent;
        }
    }
    return result;
}
function loadMessageBundle(file) {
    if (!file) {
        // No file. We are in dev mode. Return the default
        // localize function.
        return common_1.localize;
    }
    // Remove extension since we load json files.
    var ext = path.extname(file);
    if (ext) {
        file = file.substr(0, file.length - ext.length);
    }
    if (options.messageFormat === common_1.MessageFormat.both || options.messageFormat === common_1.MessageFormat.bundle) {
        var headerFile = tryFindMetaDataHeaderFile(file);
        if (headerFile) {
            var bundlePath = path.dirname(headerFile);
            var bundle = resolvedBundles[bundlePath];
            if (bundle === undefined) {
                try {
                    var header = JSON.parse(fs.readFileSync(headerFile, 'utf8'));
                    try {
                        var nlsBundle = loadNlsBundle(header, bundlePath);
                        bundle = cacheBundle(bundlePath, nlsBundle ? { header: header, nlsBundle: nlsBundle } : null);
                    }
                    catch (err) {
                        console.error('Failed to load nls bundle', err);
                        bundle = cacheBundle(bundlePath, null);
                    }
                }
                catch (err) {
                    console.error('Failed to read header file', err);
                    bundle = cacheBundle(bundlePath, null);
                }
            }
            if (bundle) {
                var module_3 = file.substr(bundlePath.length + 1).replace(/\\/g, '/');
                var messages = bundle.nlsBundle[module_3];
                if (messages === undefined) {
                    console.error("Messages for file ".concat(file, " not found. See console for details."));
                    return function () {
                        return 'Messages not found.';
                    };
                }
                return createScopedLocalizeFunction(messages);
            }
        }
    }
    if (options.messageFormat === common_1.MessageFormat.both || options.messageFormat === common_1.MessageFormat.file) {
        // Try to load a single file bundle
        try {
            var json = readJsonFileSync(resolveLanguage(file));
            if (Array.isArray(json)) {
                return createScopedLocalizeFunction(json);
            }
            else {
                if ((0, common_1.isDefined)(json.messages) && (0, common_1.isDefined)(json.keys)) {
                    return createScopedLocalizeFunction(json.messages);
                }
                else {
                    console.error("String bundle '".concat(file, "' uses an unsupported format."));
                    return function () {
                        return 'File bundle has unsupported format. See console for details';
                    };
                }
            }
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                console.error('Failed to load single file bundle', err);
            }
        }
    }
    console.error("Failed to load message bundle for file ".concat(file));
    return function () {
        return 'Failed to load message bundle. See console for details.';
    };
}
exports.loadMessageBundle = loadMessageBundle;
function config(opts) {
    if (opts) {
        if (isString(opts.locale)) {
            options.locale = opts.locale.toLowerCase();
            options.language = options.locale;
            resolvedBundles = Object.create(null);
        }
        if (opts.messageFormat !== undefined) {
            options.messageFormat = opts.messageFormat;
        }
        if (opts.bundleFormat === common_1.BundleFormat.standalone && options.languagePackSupport === true) {
            options.languagePackSupport = false;
        }
    }
    (0, common_1.setPseudo)(options.locale === 'pseudo');
    return loadMessageBundle;
}
exports.config = config;
ral_1.default.install(Object.freeze({
    loadMessageBundle: loadMessageBundle,
    config: config
}));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ ((module) => {

"use strict";
module.exports = require("vscode");

/***/ }),

/***/ 608:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 914:
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 368:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 632:
/***/ ((module) => {

"use strict";
module.exports = require("console");

/***/ }),

/***/ 116:
/***/ ((module) => {

"use strict";
module.exports = require("constants");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 880:
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 467:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 58:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 136:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 256:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 776:
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ 872:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 558:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 848:
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 664:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 716:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 970:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 592:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			590: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(171);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map