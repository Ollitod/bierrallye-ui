import{a as H}from"./chunk-QN6HLKIP.js";import{b as j,d as p,f as T,g as U,h as A,j as f,k as P,m as V,n as x,p as B,q as G,r as _,u as q,v as O,w as Y,x as z}from"./chunk-MMVLIF47.js";import{$ as L,T as w,V as C,W as D,Y as N}from"./chunk-WYVY5D5B.js";import{g as R,i as b,m,n as I,p as k,q as E}from"./chunk-TRFRMNEX.js";import"./chunk-RGNDWIHZ.js";import"./chunk-3LHPAC3H.js";import{$b as s,Fa as M,Fb as n,Gb as o,Hb as d,Qb as y,X as g,bb as l,cb as r,ec as F,na as S,wb as u}from"./chunk-ZD2QRE7W.js";var he=(()=>{let i=class i{constructor(e,t,a,h,J,K,Q){this.authService=e,this.toastr=t,this.router=a,this.tokenService=h,this.userService=J,this.route=K,this.destroyRef=Q,this.loginForm=new A({username:new f("",{validators:[p.required]}),password:new f("",{validators:[p.required]})}),this.route.queryParams.subscribe(v=>{this.loginForm.controls.username.patchValue(v.username),this.loginForm.controls.password.patchValue(v.uuid)})}authenticate(){this.authService.authenticate(this.loginForm.getRawValue()).pipe(H(this.destroyRef),g(e=>(this.tokenService.storeToken(e.token),this.userService.loginUser(),this.userService.user))).subscribe({next:e=>{if(e?.role){let t=this.getRouteByRole(e?.role);this.router.navigate([t]),this.toastr.success("Login erfolgreich","Erfolgreich")}},error:()=>{this.toastr.error("Username/Passwort falsch","Fehler")}})}getRouteByRole(e){switch(e){case m.ADMIN:return"/racing/onboarding";case m.USER:return"/racing/race";case m.EMPLOYEE:return"/racing/penalty";default:return"/"}}};i.\u0275fac=function(t){return new(t||i)(r(E),r(L),r(b),r(I),r(k),r(R),r(M))},i.\u0275cmp=S({type:i,selectors:[["app-login"]],standalone:!0,features:[F],decls:13,vars:2,consts:[["appearance","outlined"],[3,"formGroup"],["formControlName","username","id","username","matInput",""],["type","password","formControlName","password","id","password","matInput",""],["mat-flat-button","","type","submit",3,"click","disabled"]],template:function(t,a){t&1&&(n(0,"mat-card",0)(1,"mat-card-content")(2,"form",1)(3,"mat-form-field")(4,"mat-label"),s(5,"Username"),o(),d(6,"input",2),o(),n(7,"mat-form-field")(8,"mat-label"),s(9,"Passwort"),o(),d(10,"input",3),o(),n(11,"button",4),y("click",function(){return a.authenticate()}),s(12," Login "),o()()()()),t&2&&(l(2),u("formGroup",a.loginForm),l(9),u("disabled",!a.loginForm.valid))},dependencies:[B,P,j,T,U,C,w,O,q,_,z,Y,G,V,x,D,N],styles:["[_nghost-%COMP%]{--mdc-outlined-card-container-color: var(--app-secondary)}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]});let c=i;return c})();export{he as LoginComponent};