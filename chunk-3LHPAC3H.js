import{$ as ae,Ga as W,Ha as De,Ma as ge,Ob as m,Pb as h,aa as ce,ca as b,cb as y,da as de,eb as pe,fa as B,ha as L,ia as I,ib as Z,lb as K,ma as le,oa as he,pa as T,qa as Y,rc as me,uc as Fe,wa as fe}from"./chunk-ZD2QRE7W.js";var _e=null;function q(){return _e}function Jt(e){_e??=e}var Ce=class{};var re=new B(""),Ie=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>I(Te),providedIn:"platform"});let e=t;return e})();var Te=(()=>{let t=class t extends Ie{constructor(){super(),this._doc=I(re),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return q().getBaseHref(this._doc)}onPopState(n){let i=q().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=q().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Me(e,t){if(e.length==0)return t;if(t.length==0)return e;let r=0;return e.endsWith("/")&&r++,t.startsWith("/")&&r++,r==2?e+t.substring(1):r==1?e+t:e+"/"+t}function Ee(e){let t=e.match(/#|\?|$/),r=t&&t.index||e.length,n=r-(e[r-1]==="/"?1:0);return e.slice(0,n)+e.slice(r)}function M(e){return e&&e[0]!=="?"?"?"+e:e}var se=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=b({token:t,factory:()=>I(ke),providedIn:"root"});let e=t;return e})(),Pe=new B(""),ke=(()=>{let t=class t extends se{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??I(re).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Me(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+M(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,o){let u=this.prepareExternalUrl(s+M(o));this._platformLocation.pushState(n,i,u)}replaceState(n,i,s,o){let u=this.prepareExternalUrl(s+M(o));this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(L(Ie),L(Pe,8))},t.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ne=(()=>{let t=class t{constructor(n){this._subject=new De,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Ue(Ee(ye(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+M(i))}normalize(n){return t.stripTrailingSlash(xe(this._basePath,ye(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+M(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+M(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};t.normalizeQueryParams=M,t.joinWithSlash=Me,t.stripTrailingSlash=Ee,t.\u0275fac=function(i){return new(i||t)(L(se))},t.\u0275prov=b({token:t,factory:()=>$e(),providedIn:"root"});let e=t;return e})();function $e(){return new Ne(L(se))}function xe(e,t){if(!e||!t.startsWith(e))return t;let r=t.substring(e.length);return r===""||["/",";","?","#"].includes(r[0])?r:t}function ye(e){return e.replace(/\/index.html$/,"")}function Ue(e){if(new RegExp("^(https?:)?//").test(e)){let[,r]=e.split(/\/\/[^\/]+/);return r}return e}var D=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(D||{}),d=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(d||{}),p=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(p||{}),v={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ze(e){return m(e)[h.LocaleId]}function Ve(e,t,r){let n=m(e),i=[n[h.DayPeriodsFormat],n[h.DayPeriodsStandalone]],s=F(i,t);return F(s,r)}function je(e,t,r){let n=m(e),i=[n[h.DaysFormat],n[h.DaysStandalone]],s=F(i,t);return F(s,r)}function Ge(e,t,r){let n=m(e),i=[n[h.MonthsFormat],n[h.MonthsStandalone]],s=F(i,t);return F(s,r)}function He(e,t){let n=m(e)[h.Eras];return F(n,t)}function P(e,t){let r=m(e);return F(r[h.DateFormat],t)}function k(e,t){let r=m(e);return F(r[h.TimeFormat],t)}function N(e,t){let n=m(e)[h.DateTimeFormat];return F(n,t)}function G(e,t){let r=m(e),n=r[h.NumberSymbols][t];if(typeof n>"u"){if(t===v.CurrencyDecimal)return r[h.NumberSymbols][v.Decimal];if(t===v.CurrencyGroup)return r[h.NumberSymbols][v.Group]}return n}function Le(e){if(!e[h.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[h.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Ye(e){let t=m(e);return Le(t),(t[h.ExtraData][2]||[]).map(n=>typeof n=="string"?X(n):[X(n[0]),X(n[1])])}function We(e,t,r){let n=m(e);Le(n);let i=[n[h.ExtraData][0],n[h.ExtraData][1]],s=F(i,t)||[];return F(s,r)||[]}function F(e,t){for(let r=t;r>-1;r--)if(typeof e[r]<"u")return e[r];throw new Error("Locale data API: locale data undefined")}function X(e){let[t,r]=e.split(":");return{hours:+t,minutes:+r}}var Ze=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,$={},Ke=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,A=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(A||{}),c=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(c||{}),a=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(a||{});function qe(e,t,r,n){let i=st(e);t=w(r,t)||t;let o=[],u;for(;t;)if(u=Ke.exec(t),u){o=o.concat(u.slice(1));let E=o.pop();if(!E)break;t=E}else{o.push(t);break}let g=i.getTimezoneOffset();n&&(g=Re(n,g),i=rt(i,n,!0));let S="";return o.forEach(E=>{let _=nt(E);S+=_?_(i,r,g):E==="''"?"'":E.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),S}function j(e,t,r){let n=new Date(0);return n.setFullYear(e,t,r),n.setHours(0,0,0),n}function w(e,t){let r=ze(e);if($[r]??={},$[r][t])return $[r][t];let n="";switch(t){case"shortDate":n=P(e,p.Short);break;case"mediumDate":n=P(e,p.Medium);break;case"longDate":n=P(e,p.Long);break;case"fullDate":n=P(e,p.Full);break;case"shortTime":n=k(e,p.Short);break;case"mediumTime":n=k(e,p.Medium);break;case"longTime":n=k(e,p.Long);break;case"fullTime":n=k(e,p.Full);break;case"short":let i=w(e,"shortTime"),s=w(e,"shortDate");n=x(N(e,p.Short),[i,s]);break;case"medium":let o=w(e,"mediumTime"),u=w(e,"mediumDate");n=x(N(e,p.Medium),[o,u]);break;case"long":let g=w(e,"longTime"),S=w(e,"longDate");n=x(N(e,p.Long),[g,S]);break;case"full":let E=w(e,"fullTime"),_=w(e,"fullDate");n=x(N(e,p.Full),[E,_]);break}return n&&($[r][t]=n),n}function x(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(r,n){return t!=null&&n in t?t[n]:r})),e}function C(e,t,r="-",n,i){let s="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,s=r));let o=String(e);for(;o.length<t;)o="0"+o;return n&&(o=o.slice(o.length-t)),s+o}function Xe(e,t){return C(e,3).substring(0,t)}function f(e,t,r=0,n=!1,i=!1){return function(s,o){let u=Qe(e,s);if((r>0||u>-r)&&(u+=r),e===c.Hours)u===0&&r===-12&&(u=12);else if(e===c.FractionalSeconds)return Xe(u,t);let g=G(o,v.MinusSign);return C(u,t,g,n,i)}}function Qe(e,t){switch(e){case c.FullYear:return t.getFullYear();case c.Month:return t.getMonth();case c.Date:return t.getDate();case c.Hours:return t.getHours();case c.Minutes:return t.getMinutes();case c.Seconds:return t.getSeconds();case c.FractionalSeconds:return t.getMilliseconds();case c.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function l(e,t,r=D.Format,n=!1){return function(i,s){return Je(i,s,e,t,r,n)}}function Je(e,t,r,n,i,s){switch(r){case a.Months:return Ge(t,i,n)[e.getMonth()];case a.Days:return je(t,i,n)[e.getDay()];case a.DayPeriods:let o=e.getHours(),u=e.getMinutes();if(s){let S=Ye(t),E=We(t,i,n),_=S.findIndex(R=>{if(Array.isArray(R)){let[H,O]=R,oe=o>=H.hours&&u>=H.minutes,ue=o<O.hours||o===O.hours&&u<O.minutes;if(H.hours<O.hours){if(oe&&ue)return!0}else if(oe||ue)return!0}else if(R.hours===o&&R.minutes===u)return!0;return!1});if(_!==-1)return E[_]}return Ve(t,i,n)[o<12?0:1];case a.Eras:return He(t,n)[e.getFullYear()<=0?0:1];default:let g=r;throw new Error(`unexpected translation type ${g}`)}}function U(e){return function(t,r,n){let i=-1*n,s=G(r,v.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case A.Short:return(i>=0?"+":"")+C(o,2,s)+C(Math.abs(i%60),2,s);case A.ShortGMT:return"GMT"+(i>=0?"+":"")+C(o,1,s);case A.Long:return"GMT"+(i>=0?"+":"")+C(o,2,s)+":"+C(Math.abs(i%60),2,s);case A.Extended:return n===0?"Z":(i>=0?"+":"")+C(o,2,s)+":"+C(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var et=0,V=4;function tt(e){let t=j(e,et,1).getDay();return j(e,0,1+(t<=V?V:V+7)-t)}function Be(e){let t=e.getDay(),r=t===0?-3:V-t;return j(e.getFullYear(),e.getMonth(),e.getDate()+r)}function Q(e,t=!1){return function(r,n){let i;if(t){let s=new Date(r.getFullYear(),r.getMonth(),1).getDay()-1,o=r.getDate();i=1+Math.floor((o+s)/7)}else{let s=Be(r),o=tt(s.getFullYear()),u=s.getTime()-o.getTime();i=1+Math.round(u/6048e5)}return C(i,e,G(n,v.MinusSign))}}function z(e,t=!1){return function(r,n){let s=Be(r).getFullYear();return C(s,e,G(n,v.MinusSign),t)}}var J={};function nt(e){if(J[e])return J[e];let t;switch(e){case"G":case"GG":case"GGG":t=l(a.Eras,d.Abbreviated);break;case"GGGG":t=l(a.Eras,d.Wide);break;case"GGGGG":t=l(a.Eras,d.Narrow);break;case"y":t=f(c.FullYear,1,0,!1,!0);break;case"yy":t=f(c.FullYear,2,0,!0,!0);break;case"yyy":t=f(c.FullYear,3,0,!1,!0);break;case"yyyy":t=f(c.FullYear,4,0,!1,!0);break;case"Y":t=z(1);break;case"YY":t=z(2,!0);break;case"YYY":t=z(3);break;case"YYYY":t=z(4);break;case"M":case"L":t=f(c.Month,1,1);break;case"MM":case"LL":t=f(c.Month,2,1);break;case"MMM":t=l(a.Months,d.Abbreviated);break;case"MMMM":t=l(a.Months,d.Wide);break;case"MMMMM":t=l(a.Months,d.Narrow);break;case"LLL":t=l(a.Months,d.Abbreviated,D.Standalone);break;case"LLLL":t=l(a.Months,d.Wide,D.Standalone);break;case"LLLLL":t=l(a.Months,d.Narrow,D.Standalone);break;case"w":t=Q(1);break;case"ww":t=Q(2);break;case"W":t=Q(1,!0);break;case"d":t=f(c.Date,1);break;case"dd":t=f(c.Date,2);break;case"c":case"cc":t=f(c.Day,1);break;case"ccc":t=l(a.Days,d.Abbreviated,D.Standalone);break;case"cccc":t=l(a.Days,d.Wide,D.Standalone);break;case"ccccc":t=l(a.Days,d.Narrow,D.Standalone);break;case"cccccc":t=l(a.Days,d.Short,D.Standalone);break;case"E":case"EE":case"EEE":t=l(a.Days,d.Abbreviated);break;case"EEEE":t=l(a.Days,d.Wide);break;case"EEEEE":t=l(a.Days,d.Narrow);break;case"EEEEEE":t=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":t=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":t=l(a.DayPeriods,d.Wide);break;case"aaaaa":t=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":t=l(a.DayPeriods,d.Abbreviated,D.Standalone,!0);break;case"bbbb":t=l(a.DayPeriods,d.Wide,D.Standalone,!0);break;case"bbbbb":t=l(a.DayPeriods,d.Narrow,D.Standalone,!0);break;case"B":case"BB":case"BBB":t=l(a.DayPeriods,d.Abbreviated,D.Format,!0);break;case"BBBB":t=l(a.DayPeriods,d.Wide,D.Format,!0);break;case"BBBBB":t=l(a.DayPeriods,d.Narrow,D.Format,!0);break;case"h":t=f(c.Hours,1,-12);break;case"hh":t=f(c.Hours,2,-12);break;case"H":t=f(c.Hours,1);break;case"HH":t=f(c.Hours,2);break;case"m":t=f(c.Minutes,1);break;case"mm":t=f(c.Minutes,2);break;case"s":t=f(c.Seconds,1);break;case"ss":t=f(c.Seconds,2);break;case"S":t=f(c.FractionalSeconds,1);break;case"SS":t=f(c.FractionalSeconds,2);break;case"SSS":t=f(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=U(A.Short);break;case"ZZZZZ":t=U(A.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=U(A.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=U(A.Long);break;default:return null}return J[e]=t,t}function Re(e,t){e=e.replace(/:/g,"");let r=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(r)?t:r}function it(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function rt(e,t,r){let n=r?-1:1,i=e.getTimezoneOffset(),s=Re(t,i);return it(e,n*(s-i))}function st(e){if(we(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,s=1,o=1]=e.split("-").map(u=>+u);return j(i,s-1,o)}let r=parseFloat(e);if(!isNaN(e-r))return new Date(r);let n;if(n=e.match(Ze))return ot(n)}let t=new Date(e);if(!we(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function ot(e){let t=new Date(0),r=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let o=Number(e[4]||0)-r,u=Number(e[5]||0)-n,g=Number(e[6]||0),S=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(t,o,u,g,S),t}function we(e){return e instanceof Date&&!isNaN(e.valueOf())}function en(e,t){t=encodeURIComponent(t);for(let r of e.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}var ee=/\s+/,Ae=[],tn=(()=>{let t=class t{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=Ae,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(ee):Ae}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(ee):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let s=this.stateMap.get(n);s!==void 0?(s.enabled!==i&&(s.changed=!0,s.enabled=i),s.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],s=n[1];s.changed?(this._toggleClass(i,s.enabled),s.changed=!1):s.touched||(s.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),s.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(ee).forEach(s=>{i?this._renderer.addClass(this._ngEl.nativeElement,s):this._renderer.removeClass(this._ngEl.nativeElement,s)})}};t.\u0275fac=function(i){return new(i||t)(y(W),y(Z))},t.\u0275dir=T({type:t,selectors:[["","ngClass",""]],inputs:{klass:[le.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var nn=(()=>{let t=class t{constructor(n,i){this._viewContainer=n,this._context=new te,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Se("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Se("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};t.\u0275fac=function(i){return new(i||t)(y(K),y(pe))},t.\u0275dir=T({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let e=t;return e})(),te=class{constructor(){this.$implicit=null,this.ngIf=null}};function Se(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${ce(t)}'.`)}var rn=(()=>{let t=class t{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let s=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,s,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,s)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,s):!1,get:(n,i,s)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,s)}})}};t.\u0275fac=function(i){return new(i||t)(y(K))},t.\u0275dir=T({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[fe]});let e=t;return e})();function ut(e,t){return new ae(2100,!1)}var at="mediumDate",ct=new B(""),dt=new B(""),sn=(()=>{let t=class t{constructor(n,i,s){this.locale=n,this.defaultTimezone=i,this.defaultOptions=s}transform(n,i,s,o){if(n==null||n===""||n!==n)return null;try{let u=i??this.defaultOptions?.dateFormat??at,g=s??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return qe(n,u,o||this.locale,g)}catch(u){throw ut(t,u.message)}}};t.\u0275fac=function(i){return new(i||t)(y(me,16),y(ct,24),y(dt,24))},t.\u0275pipe=Y({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();function lt(e,t){return{key:e,value:t}}var on=(()=>{let t=class t{constructor(n){this.differs=n,this.keyValues=[],this.compareFn=be}transform(n,i=be){if(!n||!(n instanceof Map)&&typeof n!="object")return null;this.differ??=this.differs.find(n).create();let s=this.differ.diff(n),o=i!==this.compareFn;return s&&(this.keyValues=[],s.forEachItem(u=>{this.keyValues.push(lt(u.key,u.currentValue))})),(s||o)&&(this.keyValues.sort(i),this.compareFn=i),this.keyValues}};t.\u0275fac=function(i){return new(i||t)(y(Fe,16))},t.\u0275pipe=Y({name:"keyvalue",type:t,pure:!1,standalone:!0});let e=t;return e})();function be(e,t){let r=e.key,n=t.key;if(r===n)return 0;if(r===void 0)return 1;if(n===void 0)return-1;if(r===null)return 1;if(n===null)return-1;if(typeof r=="string"&&typeof n=="string")return r<n?-1:1;if(typeof r=="number"&&typeof n=="number")return r-n;if(typeof r=="boolean"&&typeof n=="boolean")return r<n?-1:1;let i=String(r),s=String(n);return i==s?0:i<s?-1:1}var un=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=he({type:t}),t.\u0275inj=de({});let e=t;return e})(),ht="browser",ft="server";function Dt(e){return e===ht}function an(e){return e===ft}var cn=(()=>{let t=class t{};t.\u0275prov=b({token:t,providedIn:"root",factory:()=>Dt(I(ge))?new ne(I(re),window):new ie});let e=t;return e})(),ne=class{constructor(t,r){this.document=t,this.window=r,this.offset=()=>[0,0]}setOffset(t){Array.isArray(t)?this.offset=()=>t:this.offset=t}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(t){this.window.scrollTo(t[0],t[1])}scrollToAnchor(t){let r=gt(this.document,t);r&&(this.scrollToElement(r),r.focus())}setHistoryScrollRestoration(t){this.window.history.scrollRestoration=t}scrollToElement(t){let r=t.getBoundingClientRect(),n=r.left+this.window.pageXOffset,i=r.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],i-s[1])}};function gt(e,t){let r=e.getElementById(t)||e.getElementsByName(t)[0];if(r)return r;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(t)||s.querySelector(`[name="${t}"]`);if(o)return o}i=n.nextNode()}}return null}var ie=class{setOffset(t){}getScrollPosition(){return[0,0]}scrollToPosition(t){}scrollToAnchor(t){}setHistoryScrollRestoration(t){}},ve=class{};export{q as a,Jt as b,Ce as c,re as d,se as e,Ne as f,en as g,tn as h,nn as i,rn as j,sn as k,on as l,un as m,ht as n,Dt as o,an as p,cn as q,ve as r};