import{g as nt}from"./chunk-HZZCC6VC.js";import"./chunk-TRFRMNEX.js";import"./chunk-3LHPAC3H.js";import{$b as We,Bb as Ue,Fb as Ke,Gb as qe,Ha as Xe,Hb as Pe,Rb as Je,Vb as je,Wb as Oe,Xb as Ee,ac as Ze,bb as Ve,d as ft,e as ct,ec as $e,ia as Fe,ic as et,jc as tt,na as Te,qa as Ye,sc as rt,ub as Qe,wa as Ne,wb as He,zb as Ge}from"./chunk-ZD2QRE7W.js";var it=ft((ze,Re)=>{"use strict";(function(j,J){typeof ze=="object"&&typeof Re=="object"?Re.exports=J():typeof define=="function"&&define.amd?define("kjua",[],J):typeof ze=="object"?ze.kjua=J():j.kjua=J()})(typeof self<"u"?self:ze,function(){return Y={},j.m=J=[function(b,M,z){function R(A){var h,v=Object.assign({},X,A),p=V(v.text,v.ecLevel,v.minVersion,v.quiet);return typeof v.image=="string"&&((h=new Image).src="data:image/png;base64,"+v.image,h.crossOrigin="anonymous",v.image=h),v.render==="svg"?w(p,v):k(p,v,v.render==="image")}var X=z(1),V=z(2),k=z(4).create_canvas_qrcode,w=z(8);b.exports=R;try{jQuery.fn.kjua=function(A){return this.each(function(h,v){return v.appendChild(R(A))})}}catch{}},function(b,M){b.exports={render:"svg",crisp:!0,minVersion:1,ecLevel:"L",size:200,ratio:null,fill:"#333",back:"#fff",text:"",rounded:0,quiet:0,mode:"plain",mSize:30,mPosX:50,mPosY:50,label:"",fontname:"sans",fontcolor:"#333",fontoutline:!0,image:null,imageAsCode:!1,elementId:null}},function(b,M,z){function R(k){return(R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w})(k)}var X=/code length overflow/i,V=z(3);V.stringToBytes=V.stringToBytesFuncs["UTF-8"],b.exports=function(k,w,A,h){var v,p=3<arguments.length&&h!==void 0?h:0,S=function(_,C,m){for(var P=2<arguments.length&&m!==void 0?m:1,D=P=Math.max(1,P);D<=40;D+=1)try{var I=function(){var B=V(D,C);B.addData(_),B.make();var O=B.getModuleCount();return{v:{text:_,level:C,version:D,module_count:O,is_dark:function(E,W){return 0<=E&&E<O&&0<=W&&W<O&&B.isDark(E,W)}}}}();if(R(I)==="object")return I.v}catch(B){if(!(D<40&&X.test(B)))throw new Error(B)}return null}(0<arguments.length&&k!==void 0?k:"",1<arguments.length&&w!==void 0?w:"L",2<arguments.length&&A!==void 0?A:1);return S&&(v=S.is_dark,S.module_count+=2*p,S.is_dark=function(_,C){return v(_-p,C-p)}),S}},function(b,M,z){var R,X,V,k=function(){function w(a,n){function t(s,l){u=function(r){for(var d=new Array(r),g=0;g<r;g+=1){d[g]=new Array(r);for(var x=0;x<r;x+=1)d[g][x]=null}return d}(f=4*i+17),q(0,0),q(f-7,0),q(0,f-7),ee(),N(),xe(s,l),7<=i&&pe(s),o==null&&(o=re(i,e,c)),fe(o,l)}var i=a,e=C[n],u=null,f=0,o=null,c=[],y={},q=function(s,l){for(var r=-1;r<=7;r+=1)if(!(s+r<=-1||f<=s+r))for(var d=-1;d<=7;d+=1)l+d<=-1||f<=l+d||(u[s+r][l+d]=0<=r&&r<=6&&(d==0||d==6)||0<=d&&d<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=d&&d<=4)},N=function(){for(var s=8;s<f-8;s+=1)u[s][6]==null&&(u[s][6]=s%2==0);for(var l=8;l<f-8;l+=1)u[6][l]==null&&(u[6][l]=l%2==0)},ee=function(){for(var s=Q.getPatternPosition(i),l=0;l<s.length;l+=1)for(var r=0;r<s.length;r+=1){var d=s[l],g=s[r];if(u[d][g]==null)for(var x=-2;x<=2;x+=1)for(var T=-2;T<=2;T+=1)u[d+x][g+T]=x==-2||x==2||T==-2||T==2||x==0&&T==0}},pe=function(s){for(var l=Q.getBCHTypeNumber(i),r=0;r<18;r+=1){var d=!s&&(l>>r&1)==1;u[Math.floor(r/3)][r%3+f-8-3]=d}for(r=0;r<18;r+=1)d=!s&&(l>>r&1)==1,u[r%3+f-8-3][Math.floor(r/3)]=d},xe=function(s,l){for(var r=e<<3|l,d=Q.getBCHTypeInfo(r),g=0;g<15;g+=1){var x=!s&&(d>>g&1)==1;g<6?u[g][8]=x:g<8?u[g+1][8]=x:u[f-15+g][8]=x}for(g=0;g<15;g+=1)x=!s&&(d>>g&1)==1,g<8?u[8][f-g-1]=x:g<9?u[8][15-g-1+1]=x:u[8][15-g-1]=x;u[f-8][8]=!s},fe=function(s,l){for(var r=-1,d=f-1,g=7,x=0,T=Q.getMaskFunction(l),$=f-1;0<$;$-=2)for($==6&&--$;;){for(var H,L=0;L<2;L+=1)u[d][$-L]==null&&(H=!1,x<s.length&&(H=(s[x]>>>g&1)==1),T(d,$-L)&&(H=!H),u[d][$-L]=H,--g==-1&&(x+=1,g=7));if((d+=r)<0||f<=d){d-=r,r=-r;break}}},re=function(s,l,r){for(var d=me.getRSBlocks(s,l),g=K(),x=0;x<r.length;x+=1){var T=r[x];g.put(T.getMode(),4),g.put(T.getLength(),Q.getLengthInBits(T.getMode(),s)),T.write(g)}for(var $=0,x=0;x<d.length;x+=1)$+=d[x].dataCount;if(g.getLengthInBits()>8*$)throw"code length overflow. ("+g.getLengthInBits()+">"+8*$+")";for(g.getLengthInBits()+4<=8*$&&g.put(0,4);g.getLengthInBits()%8!=0;)g.putBit(!1);for(;!(g.getLengthInBits()>=8*$||(g.put(236,8),g.getLengthInBits()>=8*$));)g.put(17,8);return function(H,L){for(var ve=0,ge=0,be=0,ne=new Array(L.length),te=new Array(L.length),G=0;G<L.length;G+=1){var Le=L[G].dataCount,Se=L[G].totalCount-Le,ge=Math.max(ge,Le),be=Math.max(be,Se);ne[G]=new Array(Le);for(var F=0;F<ne[G].length;F+=1)ne[G][F]=255&H.getBuffer()[F+ve];ve+=Le;var ye=Q.getErrorCorrectPolynomial(Se),Me=oe(ne[G],ye.getLength()-1).mod(ye);for(te[G]=new Array(ye.getLength()-1),F=0;F<te[G].length;F+=1){var De=F+Me.getLength()-te[G].length;te[G][F]=0<=De?Me.getAt(De):0}}for(var Ie=0,F=0;F<L.length;F+=1)Ie+=L[F].totalCount;for(var Ce=new Array(Ie),de=0,F=0;F<ge;F+=1)for(G=0;G<L.length;G+=1)F<ne[G].length&&(Ce[de]=ne[G][F],de+=1);for(F=0;F<be;F+=1)for(G=0;G<L.length;G+=1)F<te[G].length&&(Ce[de]=te[G][F],de+=1);return Ce}(g,d)};y.addData=function(s,l){var r=null;switch(l=l||"Byte"){case"Numeric":r=ae(s);break;case"Alphanumeric":r=se(s);break;case"Byte":r=ue(s);break;case"Kanji":r=U(s);break;default:throw"mode:"+l}c.push(r),o=null},y.isDark=function(s,l){if(s<0||f<=s||l<0||f<=l)throw s+","+l;return u[s][l]},y.getModuleCount=function(){return f},y.make=function(){if(i<1){for(var s=1;s<40;s++){for(var l=me.getRSBlocks(s,e),r=K(),d=0;d<c.length;d++){var g=c[d];r.put(g.getMode(),4),r.put(g.getLength(),Q.getLengthInBits(g.getMode(),s)),g.write(r)}for(var x=0,d=0;d<l.length;d++)x+=l[d].dataCount;if(r.getLengthInBits()<=8*x)break}i=s}t(!1,function(){for(var T=0,$=0,H=0;H<8;H+=1){t(!0,H);var L=Q.getLostPoint(y);(H==0||L<T)&&(T=L,$=H)}return $}())},y.createTableTag=function(s,l){s=s||2;var r="";r+='<table style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: "+(l=l===void 0?4*s:l)+"px;",r+='">',r+="<tbody>";for(var d=0;d<y.getModuleCount();d+=1){r+="<tr>";for(var g=0;g<y.getModuleCount();g+=1)r+='<td style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: 0px;",r+=" width: "+s+"px;",r+=" height: "+s+"px;",r+=" background-color: ",r+=y.isDark(d,g)?"#000000":"#ffffff",r+=";",r+='"/>';r+="</tr>"}return r+="</tbody>",r+="</table>"},y.createSvgTag=function(s,l,r,d){var g={};typeof arguments[0]=="object"&&(s=(g=arguments[0]).cellSize,l=g.margin,r=g.alt,d=g.title),s=s||2,l=l===void 0?4*s:l,(r=typeof r=="string"?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||"qrcode-description":null,(d=typeof d=="string"?{text:d}:d||{}).text=d.text||null,d.id=d.text?d.id||"qrcode-title":null;var x,T,$,H=y.getModuleCount()*s+2*l,L="",ve="l"+s+",0 0,"+s+" -"+s+",0 0,-"+s+"z ";for(L+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',L+=g.scalable?"":' width="'+H+'px" height="'+H+'px"',L+=' viewBox="0 0 '+H+" "+H+'" ',L+=' preserveAspectRatio="xMinYMin meet"',L+=d.text||r.text?' role="img" aria-labelledby="'+le([d.id,r.id].join(" ").trim())+'"':"",L+=">",L+=d.text?'<title id="'+le(d.id)+'">'+le(d.text)+"</title>":"",L+=r.text?'<description id="'+le(r.id)+'">'+le(r.text)+"</description>":"",L+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',L+='<path d="',T=0;T<y.getModuleCount();T+=1)for($=T*s+l,x=0;x<y.getModuleCount();x+=1)y.isDark(T,x)&&(L+="M"+(x*s+l)+","+$+ve);return L+='" stroke="transparent" fill="black"/>',L+="</svg>"},y.createDataURL=function(s,l){s=s||2,l=l===void 0?4*s:l;var r=y.getModuleCount()*s+2*l,d=l,g=r-l;return _e(r,r,function(x,T){if(d<=x&&x<g&&d<=T&&T<g){var $=Math.floor((x-d)/s),H=Math.floor((T-d)/s);return y.isDark(H,$)?0:1}return 1})},y.createImgTag=function(s,l,r){s=s||2,l=l===void 0?4*s:l;var d=y.getModuleCount()*s+2*l,g="";return g+="<img",g+=' src="',g+=y.createDataURL(s,l),g+='"',g+=' width="',g+=d,g+='"',g+=' height="',g+=d,g+='"',r&&(g+=' alt="',g+=le(r),g+='"'),g+="/>"};var le=function(s){for(var l="",r=0;r<s.length;r+=1){var d=s.charAt(r);switch(d){case"<":l+="&lt;";break;case">":l+="&gt;";break;case"&":l+="&amp;";break;case'"':l+="&quot;";break;default:l+=d}}return l};return y.createASCII=function(s,l){if((s=s||1)<2)return function(ne){ne=ne===void 0?2:ne;for(var te,G,Le,Se,F=+y.getModuleCount()+2*ne,ye=ne,Me=F-ne,De={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},Ie={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},Ce="",de=0;de<F;de+=2){for(G=Math.floor(de-ye),Le=Math.floor(de+1-ye),te=0;te<F;te+=1)Se="\u2588",ye<=te&&te<Me&&ye<=de&&de<Me&&y.isDark(G,Math.floor(te-ye))&&(Se=" "),ye<=te&&te<Me&&ye<=de+1&&de+1<Me&&y.isDark(Le,Math.floor(te-ye))?Se+=" ":Se+="\u2588",Ce+=ne<1&&Me<=de+1?Ie[Se]:De[Se];Ce+=`
`}return F%2&&0<ne?Ce.substring(0,Ce.length-F-1)+Array(1+F).join("\u2580"):Ce.substring(0,Ce.length-1)}(l);--s,l=l===void 0?2*s:l;for(var r,d,g,x=y.getModuleCount()*s+2*l,T=l,$=x-l,H=Array(s+1).join("\u2588\u2588"),L=Array(s+1).join("  "),ve="",ge="",be=0;be<x;be+=1){for(d=Math.floor((be-T)/s),ge="",r=0;r<x;r+=1)g=1,T<=r&&r<$&&T<=be&&be<$&&y.isDark(d,Math.floor((r-T)/s))&&(g=0),ge+=g?H:L;for(d=0;d<s;d+=1)ve+=ge+`
`}return ve.substring(0,ve.length-1)},y.renderTo2dContext=function(s,l){l=l||2;for(var r=y.getModuleCount(),d=0;d<r;d++)for(var g=0;g<r;g++)s.fillStyle=y.isDark(d,g)?"black":"white",s.fillRect(d*l,g*l,l,l)},y}w.stringToBytes=(w.stringToBytesFuncs={default:function(a){for(var n=[],t=0;t<a.length;t+=1){var i=a.charCodeAt(t);n.push(255&i)}return n}}).default,w.createStringToBytes=function(a,n){var t=function(){function e(){var N=u.read();if(N==-1)throw"eof";return N}for(var u=Be(a),f=0,o={};;){var c=u.read();if(c==-1)break;var y=e(),q=e()<<8|e();o[String.fromCharCode(c<<8|y)]=q,f+=1}if(f!=n)throw f+" != "+n;return o}(),i=63;return function(e){for(var u=[],f=0;f<e.length;f+=1){var o,c=e.charCodeAt(f);c<128?u.push(c):typeof(o=t[e.charAt(f)])=="number"?(255&o)==o?u.push(o):(u.push(o>>>8),u.push(255&o)):u.push(i)}return u}};var A,h,v=1,p=2,S=4,_=8,C={L:1,M:0,Q:3,H:2},m=0,P=1,D=2,I=3,B=4,O=5,E=6,W=7,Q=(A=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],(h={}).getBCHTypeInfo=function(a){for(var n=a<<10;0<=Z(n)-Z(1335);)n^=1335<<Z(n)-Z(1335);return 21522^(a<<10|n)},h.getBCHTypeNumber=function(a){for(var n=a<<12;0<=Z(n)-Z(7973);)n^=7973<<Z(n)-Z(7973);return a<<12|n},h.getPatternPosition=function(a){return A[a-1]},h.getMaskFunction=function(a){switch(a){case m:return function(n,t){return(n+t)%2==0};case P:return function(n,t){return n%2==0};case D:return function(n,t){return t%3==0};case I:return function(n,t){return(n+t)%3==0};case B:return function(n,t){return(Math.floor(n/2)+Math.floor(t/3))%2==0};case O:return function(n,t){return n*t%2+n*t%3==0};case E:return function(n,t){return(n*t%2+n*t%3)%2==0};case W:return function(n,t){return(n*t%3+(n+t)%2)%2==0};default:throw"bad maskPattern:"+a}},h.getErrorCorrectPolynomial=function(a){for(var n=oe([1],0),t=0;t<a;t+=1)n=n.multiply(oe([1,ie.gexp(t)],0));return n},h.getLengthInBits=function(a,n){if(1<=n&&n<10)switch(a){case v:return 10;case p:return 9;case S:case _:return 8;default:throw"mode:"+a}else if(n<27)switch(a){case v:return 12;case p:return 11;case S:return 16;case _:return 10;default:throw"mode:"+a}else{if(!(n<41))throw"type:"+n;switch(a){case v:return 14;case p:return 13;case S:return 16;case _:return 12;default:throw"mode:"+a}}},h.getLostPoint=function(a){for(var n=a.getModuleCount(),t=0,i=0;i<n;i+=1)for(var e=0;e<n;e+=1){for(var u=0,f=a.isDark(i,e),o=-1;o<=1;o+=1)if(!(i+o<0||n<=i+o))for(var c=-1;c<=1;c+=1)e+c<0||n<=e+c||o==0&&c==0||f==a.isDark(i+o,e+c)&&(u+=1);5<u&&(t+=3+u-5)}for(i=0;i<n-1;i+=1)for(e=0;e<n-1;e+=1){var y=0;a.isDark(i,e)&&(y+=1),a.isDark(i+1,e)&&(y+=1),a.isDark(i,e+1)&&(y+=1),a.isDark(i+1,e+1)&&(y+=1),y!=0&&y!=4||(t+=3)}for(i=0;i<n;i+=1)for(e=0;e<n-6;e+=1)a.isDark(i,e)&&!a.isDark(i,e+1)&&a.isDark(i,e+2)&&a.isDark(i,e+3)&&a.isDark(i,e+4)&&!a.isDark(i,e+5)&&a.isDark(i,e+6)&&(t+=40);for(e=0;e<n;e+=1)for(i=0;i<n-6;i+=1)a.isDark(i,e)&&!a.isDark(i+1,e)&&a.isDark(i+2,e)&&a.isDark(i+3,e)&&a.isDark(i+4,e)&&!a.isDark(i+5,e)&&a.isDark(i+6,e)&&(t+=40);for(var q=0,e=0;e<n;e+=1)for(i=0;i<n;i+=1)a.isDark(i,e)&&(q+=1);return t+=Math.abs(100*q/n/n-50)/5*10},h);function Z(a){for(var n=0;a!=0;)n+=1,a>>>=1;return n}var ie=function(){for(var a=new Array(256),n=new Array(256),t=0;t<8;t+=1)a[t]=1<<t;for(t=8;t<256;t+=1)a[t]=a[t-4]^a[t-5]^a[t-6]^a[t-8];for(t=0;t<255;t+=1)n[a[t]]=t;var i={glog:function(e){if(e<1)throw"glog("+e+")";return n[e]},gexp:function(e){for(;e<0;)e+=255;for(;256<=e;)e-=255;return a[e]}};return i}();function oe(a,n){if(a.length===void 0)throw a.length+"/"+n;var t=function(){for(var e=0;e<a.length&&a[e]==0;)e+=1;for(var u=new Array(a.length-e+n),f=0;f<a.length-e;f+=1)u[f]=a[f+e];return u}(),i={getAt:function(e){return t[e]},getLength:function(){return t.length},multiply:function(e){for(var u=new Array(i.getLength()+e.getLength()-1),f=0;f<i.getLength();f+=1)for(var o=0;o<e.getLength();o+=1)u[f+o]^=ie.gexp(ie.glog(i.getAt(f))+ie.glog(e.getAt(o)));return oe(u,0)},mod:function(e){if(i.getLength()-e.getLength()<0)return i;for(var u=ie.glog(i.getAt(0))-ie.glog(e.getAt(0)),f=new Array(i.getLength()),o=0;o<i.getLength();o+=1)f[o]=i.getAt(o);for(o=0;o<e.getLength();o+=1)f[o]^=ie.gexp(ie.glog(e.getAt(o))+u);return oe(f,0).mod(e)}};return i}function ke(){var a=[],n={writeByte:function(t){a.push(255&t)},writeShort:function(t){n.writeByte(t),n.writeByte(t>>>8)},writeBytes:function(t,i,e){i=i||0,e=e||t.length;for(var u=0;u<e;u+=1)n.writeByte(t[u+i])},writeString:function(t){for(var i=0;i<t.length;i+=1)n.writeByte(t.charCodeAt(i))},toByteArray:function(){return a},toString:function(){var t="";t+="[";for(var i=0;i<a.length;i+=1)0<i&&(t+=","),t+=a[i];return t+="]"}};return n}function Ae(){function a(o){e+=String.fromCharCode(f(63&o))}var n=0,t=0,i=0,e="",u={},f=function(o){if(!(o<0)){if(o<26)return 65+o;if(o<52)return o-26+97;if(o<62)return o-52+48;if(o==62)return 43;if(o==63)return 47}throw"n:"+o};return u.writeByte=function(o){for(n=n<<8|255&o,t+=8,i+=1;6<=t;)a(n>>>t-6),t-=6},u.flush=function(){if(0<t&&(a(n<<6-t),t=n=0),i%3!=0)for(var o=3-i%3,c=0;c<o;c+=1)e+="="},u.toString=function(){return e},u}function we(a,n){var t=a,i=n,e=new Array(a*n),u={setPixel:function(c,y,q){e[y*t+c]=q},write:function(c){c.writeString("GIF87a"),c.writeShort(t),c.writeShort(i),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(t),c.writeShort(i),c.writeByte(0);var y=f(2);c.writeByte(2);for(var q=0;255<y.length-q;)c.writeByte(255),c.writeBytes(y,q,255),q+=255;c.writeByte(y.length-q),c.writeBytes(y,q,y.length-q),c.writeByte(0),c.writeString(";")}},f=function(c){for(var y=1<<c,q=1+(1<<c),N=c+1,ee=o(),pe=0;pe<y;pe+=1)ee.add(String.fromCharCode(pe));ee.add(String.fromCharCode(y)),ee.add(String.fromCharCode(q));var xe,fe,re,le=ke(),s=(xe=le,re=fe=0,{write:function(g,x){if(g>>>x)throw"length over";for(;8<=fe+x;)xe.writeByte(255&(g<<fe|re)),x-=8-fe,g>>>=8-fe,fe=re=0;re|=g<<fe,fe+=x},flush:function(){0<fe&&xe.writeByte(re)}});s.write(y,N);var l=0,r=String.fromCharCode(e[l]);for(l+=1;l<e.length;){var d=String.fromCharCode(e[l]);l+=1,ee.contains(r+d)?r+=d:(s.write(ee.indexOf(r),N),ee.size()<4095&&(ee.size()==1<<N&&(N+=1),ee.add(r+d)),r=d)}return s.write(ee.indexOf(r),N),s.write(q,N),s.flush(),le.toByteArray()},o=function(){var c={},y=0,q={add:function(N){if(q.contains(N))throw"dup key:"+N;c[N]=y,y+=1},size:function(){return y},indexOf:function(N){return c[N]},contains:function(N){return c[N]!==void 0}};return q};return u}var ce,he,me=(ce=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],(he={}).getRSBlocks=function(a,n){var t=function(ee,pe){switch(pe){case C.L:return ce[4*(ee-1)+0];case C.M:return ce[4*(ee-1)+1];case C.Q:return ce[4*(ee-1)+2];case C.H:return ce[4*(ee-1)+3];default:return}}(a,n);if(t===void 0)throw"bad rs block @ typeNumber:"+a+"/errorCorrectionLevel:"+n;for(var i,e,u=t.length/3,f=[],o=0;o<u;o+=1)for(var c=t[3*o+0],y=t[3*o+1],q=t[3*o+2],N=0;N<c;N+=1)f.push((i=q,e=void 0,(e={}).totalCount=y,e.dataCount=i,e));return f},he),K=function(){var a=[],n=0,t={getBuffer:function(){return a},getAt:function(i){var e=Math.floor(i/8);return(a[e]>>>7-i%8&1)==1},put:function(i,e){for(var u=0;u<e;u+=1)t.putBit((i>>>e-u-1&1)==1)},getLengthInBits:function(){return n},putBit:function(i){var e=Math.floor(n/8);a.length<=e&&a.push(0),i&&(a[e]|=128>>>n%8),n+=1}};return t},ae=function(a){var n=v,t=a,i={getMode:function(){return n},getLength:function(f){return t.length},write:function(f){for(var o=t,c=0;c+2<o.length;)f.put(e(o.substring(c,c+3)),10),c+=3;c<o.length&&(o.length-c==1?f.put(e(o.substring(c,c+1)),4):o.length-c==2&&f.put(e(o.substring(c,c+2)),7))}},e=function(f){for(var o=0,c=0;c<f.length;c+=1)o=10*o+u(f.charAt(c));return o},u=function(f){if("0"<=f&&f<="9")return f.charCodeAt(0)-48;throw"illegal char :"+f};return i},se=function(a){var n=p,t=a,i={getMode:function(){return n},getLength:function(u){return t.length},write:function(u){for(var f=t,o=0;o+1<f.length;)u.put(45*e(f.charAt(o))+e(f.charAt(o+1)),11),o+=2;o<f.length&&u.put(e(f.charAt(o)),6)}},e=function(u){if("0"<=u&&u<="9")return u.charCodeAt(0)-48;if("A"<=u&&u<="Z")return u.charCodeAt(0)-65+10;switch(u){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+u}};return i},ue=function(a){var n=S,t=w.stringToBytes(a),i={getMode:function(){return n},getLength:function(e){return t.length},write:function(e){for(var u=0;u<t.length;u+=1)e.put(t[u],8)}};return i},U=function(a){var n=_,t=w.stringToBytesFuncs.SJIS;if(!t)throw"sjis not supported.";(function(){var u=t("\u53CB");if(u.length!=2||(u[0]<<8|u[1])!=38726)throw"sjis not supported."})();var i=t(a),e={getMode:function(){return n},getLength:function(u){return~~(i.length/2)},write:function(u){for(var f=i,o=0;o+1<f.length;){var c=(255&f[o])<<8|255&f[o+1];if(33088<=c&&c<=40956)c-=33088;else{if(!(57408<=c&&c<=60351))throw"illegal char at "+(o+1)+"/"+c;c-=49472}c=192*(c>>>8&255)+(255&c),u.put(c,13),o+=2}if(o<f.length)throw"illegal char at "+(o+1)}};return e},Be=function(a){var n=a,t=0,i=0,e=0,u={read:function(){for(;e<8;){if(t>=n.length){if(e==0)return-1;throw"unexpected end of file./"+e}var o=n.charAt(t);if(t+=1,o=="=")return e=0,-1;o.match(/^\s$/)||(i=i<<6|f(o.charCodeAt(0)),e+=6)}var c=i>>>e-8&255;return e-=8,c}},f=function(o){if(65<=o&&o<=90)return o-65;if(97<=o&&o<=122)return o-97+26;if(48<=o&&o<=57)return o-48+52;if(o==43)return 62;if(o==47)return 63;throw"c:"+o};return u},_e=function(a,n,t){for(var i=we(a,n),e=0;e<n;e+=1)for(var u=0;u<a;u+=1)i.setPixel(u,e,t(u,e));var f=ke();i.write(f);for(var o=Ae(),c=f.toByteArray(),y=0;y<c.length;y+=1)o.writeByte(c[y]);return o.flush(),"data:image/gif;base64,"+o};return w}();k.stringToBytesFuncs["UTF-8"]=function(w){return function(A){for(var h=[],v=0;v<A.length;v++){var p=A.charCodeAt(v);p<128?h.push(p):p<2048?h.push(192|p>>6,128|63&p):p<55296||57344<=p?h.push(224|p>>12,128|p>>6&63,128|63&p):(v++,p=65536+((1023&p)<<10|1023&A.charCodeAt(v)),h.push(240|p>>18,128|p>>12&63,128|p>>6&63,128|63&p))}return h}(w)},X=[],(V=typeof(R=function(){return k})=="function"?R.apply(M,X):R)===void 0||(b.exports=V)},function(b,M,z){function R(A,h,v,p,S,_){A.is_dark(S,_)&&h.rect(_*p,S*p,p,p)}function X(A,h,v){if(A){var p=0<v.rounded&&v.rounded<=100?k:R,S=A.module_count,_=v.size/S,C=0;v.crisp&&(_=Math.floor(_),C=Math.floor((v.size-_*S)/2)),h.translate(C,C),h.beginPath();for(var m=0;m<S;m+=1)for(var P=0;P<S;P+=1)p(A,h,v,_,m,P);h.fillStyle=v.fill,h.fill(),h.translate(-C,-C)}}var V=z(5),k=z(6),w=z(7);b.exports={create_canvas_qrcode:function(A,h,v){var p,S,_,C,m,P,D,I=h.ratio||V.dpr,B=V.create_canvas(h.size,I),O=B.getContext("2d");return h.imageAsCode&&(p=V.create_canvas(h.size,I).getContext("2d"),X(A,p,h),S=V.calc_image_pos(h),p.globalCompositeOperation="source-in",p.drawImage(h.image,S.x,S.y,S.iw,S.ih),h=Object.assign({},h,{image:p.canvas})),O.scale(I,I),_=A,P=C=O,(D=m=h).back&&(P.fillStyle=D.back,P.fillRect(0,0,D.size,D.size)),X(_,C,m),w(C,m),v?V.canvas_to_img(B,h.elementId):B},draw_modules:X}},function(b,M){function z(h,v){return h.getAttribute(v)}function R(h,v){return Object.keys(v||{}).forEach(function(p){h.setAttribute(p,v[p])}),h}function X(h,v){return R(k.createElement(h),v)}var V=window,k=V.document,w=V.devicePixelRatio||1,A="http://www.w3.org/2000/svg";b.exports={dpr:w,SVG_NS:A,get_attr:z,create_el:X,create_svg_el:function(h,v){return R(k.createElementNS(A,h),v)},create_canvas:function(h,v){var p=X("canvas",{width:h*v,height:h*v});return p.style.width="".concat(h,"px"),p.style.height="".concat(h,"px"),p},canvas_to_img:function(h,v){var p=X("img",{crossOrigin:"anonymous",src:h.toDataURL("image/png"),width:z(h,"width"),height:z(h,"height"),id:v});return p.style.width=h.style.width,p.style.height=h.style.height,p},calc_image_pos:function(h){var v=h.mSize,p=h.mPosX,S=h.mPosY,_=0;h.mode==="labelimage"&&(_=1),Array.isArray(h.mSize)&&(v=h.mSize[_]),Array.isArray(h.mPosX)&&(p=h.mPosX[_]),Array.isArray(h.mPosY)&&(S=h.mPosY[_]);var C=h.size,m=.01*v,P=m*(h.image.naturalWidth||1)/(h.image.naturalHeight||1);return{x:(1-P)*p*.01*C,y:(1-m)*S*.01*C,iw:P*C,ih:m*C}}}},function(b,M){b.exports=function(z,R,X,V,k,w){var A,h,v,p,S,_,C,m,P,D,I,B,O,E,W,Q,Z,ie,oe,ke,Ae=w*V,we=k*V,ce=Ae+V,he=we+V,me=.005*X.rounded*V,K=z.is_dark,ae=k-1,se=k+1,ue=w-1,U=w+1,Be=K(k,w),_e=K(ae,ue),a=K(ae,w),n=K(ae,U),t=K(k,U),i=K(se,U),e=K(se,w),u=K(se,ue),f=K(k,ue),o=(A=R,{m:function(c,y){return A.moveTo(c,y),this},l:function(c,y){return A.lineTo(c,y),this},a:function(){return A.arcTo.apply(A,arguments),this}});Be?(I=o,B=Ae,O=we,E=ce,W=he,Q=me,ie=!a&&!t,oe=!e&&!t,ke=!e&&!f,(Z=!a&&!f)?I.m(B+Q,O):I.m(B,O),ie?I.l(E-Q,O).a(E,O,E,W,Q):I.l(E,O),oe?I.l(E,W-Q).a(E,W,B,W,Q):I.l(E,W),ke?I.l(B+Q,W).a(B,W,B,O,Q):I.l(B,W),Z?I.l(B,O+Q).a(B,O,E,O,Q):I.l(B,O)):(h=o,v=Ae,p=we,S=ce,_=he,C=me,m=a&&t&&n,P=e&&t&&i,D=e&&f&&u,a&&f&&_e&&h.m(v+C,p).l(v,p).l(v,p+C).a(v,p,v+C,p,C),m&&h.m(S-C,p).l(S,p).l(S,p+C).a(S,p,S-C,p,C),P&&h.m(S-C,_).l(S,_).l(S,_-C).a(S,_,S-C,_,C),D&&h.m(v+C,_).l(v,_).l(v,_-C).a(v,_,v+C,_,C))}},function(b,M,z){function R(k,w){var A=w.mSize,h=w.mPosX,v=w.mPosY,p=0;w.mode==="imagelabel"&&(p=1),Array.isArray(w.mSize)&&(A=w.mSize[p]),Array.isArray(w.mPosX)&&(h=w.mPosX[p]),Array.isArray(w.mPosY)&&(v=w.mPosY[p]);var S=w.size,_="bold "+.01*A*S+"px "+w.fontname;k.strokeStyle=w.back,k.lineWidth=.01*A*S*.1,k.fillStyle=w.fontcolor,k.font=_;var C=(1-k.measureText(w.label).width/S)*h*.01*S,m=(1-.01*A)*v*.01*S+.75*A*.01*S;k.strokeText(w.label,C,m),k.fillText(w.label,C,m)}function X(k,w){var A=V(w);w.imageAsCode?k.drawImage(w.image,0,0,w.size,w.size):k.drawImage(w.image,A.x,A.y,A.iw,A.ih)}var V=z(5).calc_image_pos;b.exports=function(k,w){var A=w.mode;A==="label"?R(k,w):A==="image"?X(k,w):A==="labelimage"?(R(k,w),X(k,w)):A==="imagelabel"&&(X(k,w),R(k,w))}},function(b,M,z){function R(C){function m(D){return Math.round(10*D)/10}function P(D){return Math.round(10*D)/10+C.o}return{m:function(D,I){return C.p+="M ".concat(P(D)," ").concat(P(I)," "),this},l:function(D,I){return C.p+="L ".concat(P(D)," ").concat(P(I)," "),this},a:function(D,I,B){return C.p+="A ".concat(m(B)," ").concat(m(B)," 0 0 1 ").concat(P(D)," ").concat(P(I)," "),this}}}function X(C,m){var P=m.mSize,D=m.mPosX,I=m.mPosY,B=0;m.mode==="imagelabel"&&(B=1),Array.isArray(m.mSize)&&(P=m.mSize[B]),Array.isArray(m.mPosX)&&(D=m.mPosX[B]),Array.isArray(m.mPosY)&&(I=m.mPosY[B]);var O=m.size,E="bold "+.01*P*O+"px "+m.fontname,W=z(5),Q=m.ratio||W.dpr,Z=W.create_canvas(O,Q).getContext("2d");Z.strokeStyle=m.back,Z.lineWidth=.01*P*O*.1,Z.fillStyle=m.fontcolor,Z.font=E;var ie=Z.measureText(m.label).width,oe=h("text",{x:(1-ie/O)*D*.01*O,y:(1-.01*P)*I*.01*O+.75*P*.01*O});Object.assign(oe.style,{font:E,fill:m.fontcolor,"paint-order":"stroke",stroke:m.back,"stroke-width":Z.lineWidth}),oe.textContent=m.label,C.appendChild(oe)}function V(C,m){var P,D;D=m.imageAsCode?h("image",{href:m.image,x:0,y:0,width:m.size,height:m.size}):(P=v(m),h("image",{href:m.image,x:P.x,y:P.y,width:P.iw,height:P.ih})),C.appendChild(D)}var k=z(5),w=k.SVG_NS,A=k.get_attr,h=k.create_svg_el,v=k.calc_image_pos,p=k.create_canvas,S=k.dpr,_=z(4).draw_modules;b.exports=function(C,m){var P,D,I,B=m.size,O=m.mode,E=h("svg",{xmlns:w,width:B,height:B,viewBox:"0 0 ".concat(B," ").concat(B)});return E.style.width="".concat(B,"px"),E.style.height="".concat(B,"px"),E.setAttribute("title",m.text),m.elementId&&E.setAttribute("id",m.elementId),m.back&&E.appendChild(h("rect",{x:0,y:0,width:B,height:B,fill:m.back})),E.appendChild(h("path",{d:function(W,Q){if(!W)return"";var Z={p:"",o:0},ie=W.module_count,oe=Q.size/ie;Q.crisp&&(oe=Math.floor(oe),Z.o=Math.floor((Q.size-oe*ie)/2));for(var ke,Ae,we,ce,he,me,K,ae,se,ue,U,Be,_e,a,n,t,i,e,u,f,o,c,y,q,N,ee,pe,xe,fe,re,le,s,l,r,d,g,x,T,$,H,L,ve,ge,be=R(Z),ne=0;ne<ie;ne+=1)for(var te=0;te<ie;te+=1)ke=W,Ae=be,ge=ve=L=H=$=T=x=g=d=r=l=s=le=re=fe=xe=pe=ee=N=q=y=c=o=f=u=e=i=t=n=a=_e=Be=U=ue=se=ae=K=me=void 0,pe=(N=(he=te)*(we=oe))+we,xe=(ee=(ce=ne)*we)+we,fe=.005*Q.rounded*we,re=ke.is_dark,le=ce-1,s=ce+1,l=he-1,r=he+1,d=re(ce,he),g=re(le,l),x=re(le,he),T=re(le,r),$=re(ce,r),H=re(s,r),L=re(s,he),ve=re(s,l),ge=re(ce,l),d?(n=Ae,t=N,i=ee,e=pe,u=xe,f=fe,c=!x&&!$,y=!L&&!$,q=!L&&!ge,(o=!x&&!ge)?n.m(t+f,i):n.m(t,i),c?n.l(e-f,i).a(e,i+f,f):n.l(e,i),y?n.l(e,u-f).a(e-f,u,f):n.l(e,u),q?n.l(t+f,u).a(t,u-f,f):n.l(t,u),o?n.l(t,i+f).a(t+f,i,f):n.l(t,i)):(me=Ae,K=N,ae=ee,se=pe,ue=xe,U=fe,Be=x&&$&&T,_e=L&&$&&H,a=L&&ge&&ve,x&&ge&&g&&me.m(K+U,ae).l(K,ae).l(K,ae+U).a(K+U,ae,U),Be&&me.m(se,ae+U).l(se,ae).l(se-U,ae).a(se,ae+U,U),_e&&me.m(se-U,ue).l(se,ue).l(se,ue-U).a(se-U,ue,U),a&&me.m(K,ue-U).l(K,ue).l(K+U,ue).a(K,ue-U,U));return Z.p}(C,m),fill:m.fill})),m.image&&(m=m.imageAsCode?(P=m.ratio||S,D=p(m.size,P).getContext("2d"),_(C,D,m),I=v(m),D.globalCompositeOperation="source-in",D.drawImage(m.image,I.x,I.y,I.iw,I.ih),Object.assign({},m,{image:D.canvas.toDataURL()})):Object.assign({},m,{image:A(m.image,"src")})),O==="label"?X(E,m):O==="image"?V(E,m):O==="labelimage"?(X(E,m),V(E,m)):O==="imagelabel"&&(V(E,m),X(E,m)),E}}],j.c=Y,j.d=function(b,M,z){j.o(b,M)||Object.defineProperty(b,M,{enumerable:!0,get:z})},j.r=function(b){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},j.t=function(b,M){if(1&M&&(b=j(b)),8&M||4&M&&typeof b=="object"&&b&&b.__esModule)return b;var z=Object.create(null);if(j.r(z),Object.defineProperty(z,"default",{enumerable:!0,value:b}),2&M&&typeof b!="string")for(var R in b)j.d(z,R,(function(X){return b[X]}).bind(null,R));return z},j.n=function(b){var M=b&&b.__esModule?function(){return b.default}:function(){return b};return j.d(M,"a",M),M},j.o=function(b,M){return Object.prototype.hasOwnProperty.call(b,M)},j.p="",j(j.s=0);function j(b){if(Y[b])return Y[b].exports;var M=Y[b]={i:b,l:!1,exports:{}};return J[b].call(M.exports,M,M.exports,j),M.l=!0,M.exports}var J,Y})});var at=ct(it(),1),lt=["elem"],st=(()=>{class j{render="svg";crisp=!0;minVersion=1;ecLevel="L";size=200;ratio=void 0;fill="#333";back="#fff";_text="";set text(Y){String(Y)?this._text=Y:Number(Y)?this._text=Y.toString():this._text=""}rounded=0;quiet=0;mode="plain";mSize=30;mPosX=50;mPosY=50;image=void 0;imageAsCode=!1;label="";fontname="sans-serif";fontcolor="#333";fontoutline=!0;renderAsync=!1;cssClass;elementId;codeFinished=new Xe;div;viewInitialized=!1;constructor(){}ngAfterViewInit(){this.viewInitialized=!0,this.updateView()}ngOnChanges(Y){this.viewInitialized&&this.updateView()}get template(){let Y={render:this.render,crisp:this.crisp,minVersion:this.minVersion,ecLevel:this.ecLevel,size:this.size,ratio:this.ratio,fill:this.fill,back:this.back,text:this._text,rounded:this.rounded,quiet:this.quiet,mode:this.mode,mSize:this.mSize,mPosX:this.mPosX,mPosY:this.mPosY,label:this.label,fontname:this.fontname,fontcolor:this.fontcolor,image:this.image,fontoutline:this.fontoutline,imageAsCode:this.imageAsCode,elementId:this.elementId};return(0,at.default)(Y)}renderCode(){this.div.nativeElement.innerHTML="";let Y=this.template;this.div.nativeElement.appendChild(Y),this.codeFinished.next(Y)}updateView(){if(this.div.nativeElement.style.width=this.size.toString()+"px",this.div.nativeElement.style.height=this.size.toString()+"px",typeof this.image=="string"){let Y=new Image;Y.crossOrigin="anonymous",Y.onload=()=>{this.renderAsync?requestAnimationFrame(()=>this.renderCode()):this.renderCode()},Y.src="data:image/png;base64,"+this.image}else this.renderAsync?requestAnimationFrame(()=>this.renderCode()):this.renderCode()}static \u0275fac=function(b){return new(b||j)};static \u0275cmp=Te({type:j,selectors:[["ngx-kjua"]],viewQuery:function(b,M){if(b&1&&je(lt,7),b&2){let z;Oe(z=Ee())&&(M.div=z.first)}},inputs:{render:"render",crisp:"crisp",minVersion:"minVersion",ecLevel:"ecLevel",size:"size",ratio:"ratio",fill:"fill",back:"back",text:"text",rounded:"rounded",quiet:"quiet",mode:"mode",mSize:"mSize",mPosX:"mPosX",mPosY:"mPosY",image:"image",imageAsCode:"imageAsCode",label:"label",fontname:"fontname",fontcolor:"fontcolor",fontoutline:"fontoutline",renderAsync:"renderAsync",cssClass:"cssClass",elementId:"elementId"},outputs:{codeFinished:"codeFinished"},standalone:!0,features:[Ne,$e],decls:2,vars:2,consts:[["elem",""]],template:function(b,M){b&1&&Pe(0,"div",null,0),b&2&&Ge(M.cssClass)},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return j})();var ut=(()=>{let J=class J{transform(b){return`${b.teamFirstMember} & ${b.teamSecondMember}`}};J.\u0275fac=function(M){return new(M||J)},J.\u0275pipe=Ye({name:"participantNames",type:J,pure:!0,standalone:!0});let j=J;return j})();var gt=["imgBuffer"];function dt(j,J){if(j&1&&(Ke(0,"div",1)(1,"h6"),We(2),et(3,"participantNames"),qe(),Pe(4,"ngx-kjua",3),qe()),j&2){let Y=Je();Ve(2),Ze(tt(3,7,Y.data.payload.team)),Ve(2),He("crisp",!0)("image",Y.image)("mode","image")("size",450)("text",Y.data.payload.encodedUrl)("mSize",30)}}var Lt=(()=>{let J=class J{constructor(){this.qrLoginService=Fe(nt),this.cdr=Fe(rt),this.qrLoginService.messagesOfType("payload").subscribe(b=>{this.data=b,this.cdr.detectChanges()}),this.qrLoginService.receiverInitialized()}ngAfterViewInit(){setTimeout(()=>this.image=this.imageElement?.nativeElement,500)}};J.\u0275fac=function(M){return new(M||J)},J.\u0275cmp=Te({type:J,selectors:[["app-qr-login"]],viewQuery:function(M,z){if(M&1&&je(gt,5),M&2){let R;Oe(R=Ee())&&(z.imageElement=R.first)}},standalone:!0,features:[$e],decls:3,vars:1,consts:[["imgBuffer",""],[1,"qr-code-container"],["id","img-buffer","src","assets/logos/beer-icon-without-background.png"],[3,"crisp","image","mode","size","text","mSize"]],template:function(M,z){M&1&&(Qe(0,dt,5,9,"div",1),Pe(1,"img",2,0)),M&2&&Ue(0,z.data&&z.data.payload&&z.image?0:-1)},dependencies:[st,ut],styles:[".qr-code-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}#img-buffer[_ngcontent-%COMP%]{display:none}"]});let j=J;return j})();export{Lt as QrLoginComponent};