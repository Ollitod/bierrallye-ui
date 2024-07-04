import{a as l,p as f,s as y,x as U}from"./chunk-XRKOCIBS.js";import{Bc as g,F as R,H as F,Z as S,a as b,b as I,ea as p,f as s,g as c,h as v,i as j,ka as n,o as P,qb as u,u as x,x as w,y as k}from"./chunk-ODBFWMRA.js";var $=(()=>{let t=class t{constructor(){this.onMessage=new P,this.initialize()}initialize(){this.channel=new BroadcastChannel("qr-login"),this.channel.onmessage=e=>this.onMessage.next(e.data)}ngOnDestroy(){this.channel?.close()}publish(e){this.channel?.postMessage(e)}receiverInitialized(){this.publish({type:"notifyReady"})}messagesOfType(e){return this.onMessage.pipe(F(o=>o.type===e))}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var D=(()=>{var t,r;let e=class e{constructor(){c(this,t,n(f));c(this,r,n(l))}getEvaluations(){return s(this,r).get(s(this,t)+"evaluation")}getWinners(){return s(this,r).get(s(this,t)+"evaluation/winners")}};t=new WeakMap,r=new WeakMap,e.\u0275fac=function(h){return new(h||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var T=(()=>{var t,r;let e=class e{constructor(){c(this,t,n(f));c(this,r,n(l))}getStations(){return s(this,r).get(s(this,t)+"penalty/stations")}getTeams(a){return s(this,r).get(s(this,t)+"penalty/teams/station/"+a)}createPenalty(a){return s(this,r).post(s(this,t)+"penalty",a)}getPenalties(a){return s(this,r).get(s(this,t)+"penalty/list/"+a)}delete(a){return s(this,r).delete(s(this,t)+"penalty/"+a,{responseType:"text"})}hasPrivileges(a){return s(this,r).get(`${s(this,t)}penalty/${a}/checkPrivileges`)}};t=new WeakMap,r=new WeakMap,e.\u0275fac=function(h){return new(h||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var _=(()=>{var t,r;let e=class e{constructor(){c(this,t,n(f));c(this,r,n(l))}create(a){return s(this,r).post(s(this,t)+"completion/team",a,{responseType:"text"})}get(a){return s(this,r).get(`${s(this,t)}track/team/${a}`)}};t=new WeakMap,r=new WeakMap,e.\u0275fac=function(h){return new(h||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var nt=(()=>{var t,r,e;let o=class o{constructor(){c(this,t,n(f)+"track/checkIn");c(this,r,n(l));c(this,e,n(y))}checkIn(h){return h!==s(this,t)?x(()=>"QR-Code nicht g\xFCltig!"):s(this,r).post(s(this,t),s(this,e).user.value?.uuid)}};t=new WeakMap,r=new WeakMap,e=new WeakMap,o.\u0275fac=function(d){return new(d||o)},o.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();var dt=(()=>{var t,r,e;let o=class o{constructor(){c(this,t,n(f)+"track/checkOut");c(this,r,n(l));c(this,e,n(y))}checkOut(h){return s(this,r).post(s(this,t),h)}validatedCheckOut(h){return h!==s(this,t)?x(()=>"QR-Code nicht g\xFCltig!"):this.checkOut(s(this,e).user.value?.uuid)}};t=new WeakMap,r=new WeakMap,e=new WeakMap,o.\u0275fac=function(d){return new(d||o)},o.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"});let i=o;return i})();var C=(()=>{var t,r;let e=class e{constructor(){c(this,t,n(f));c(this,r,n(l))}getRegistrations(){return s(this,r).get(s(this,t)+"completion/registrations")}};t=new WeakMap,r=new WeakMap,e.\u0275fac=function(h){return new(h||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var H=(()=>{var t;let r=class r{constructor(){c(this,t,void 0);v(this,t,n(f)),this.http=n(l)}getRaceStats(){return this.http.get(`${s(this,t)}racestats`)}};t=new WeakMap,r.\u0275fac=function(a){return new(a||r)},r.\u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var Ot=(()=>{let t=class t{constructor(){this.onboardingService=n(C),this.registrations=u([]),this.filterOnboarded=u(!1),this.filteredRegistrations=g(()=>this.filterOnboarded()?this.registrations().filter(e=>!e.hasTeam):this.registrations())}loadRegistrations(){this.onboardingService.getRegistrations().subscribe(e=>{this.registrations.set(e)})}setHasTeam(e){this.registrations.update(o=>o.map(a=>a.uuid===e?I(b({},a),{hasTeam:!0}):a))}toggleFilterOnboarded(){this.filterOnboarded.set(!this.filterOnboarded())}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Dt=(()=>{let t=class t{constructor(){this.raceStatsService=n(H),this.refreshingRaceStats$=R(0,1e4).pipe(S(()=>this.raceStatsService.getRaceStats()))}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Gt=(()=>{let t=class t{constructor(){this.penaltyService=n(T),this.toastr=n(U),this.stations=u([]),this.teams=u([]),this.filteredTeams=g(()=>this.teams().filter(e=>!this.recordedPenalties().some(o=>o.teamBoxId===e.boxId))),this.boxIds=g(()=>this.filteredTeams().map(e=>e.boxId).sort((e,o)=>e-o)),this.recordedPenalties=u([]),this.showCreatePenalty=u(!1)}loadStations(){this.penaltyService.getStations().subscribe(e=>this.stations.set(e))}loadTeams(e){this.penaltyService.getTeams(e).pipe(k(o=>o.sort((a,h)=>a.registration.participant1.fullName.localeCompare(h.registration.participant2.fullName)))).subscribe(o=>this.teams.set(o))}loadPenalties(e){this.penaltyService.getPenalties(e).subscribe(o=>this.recordedPenalties.set(o))}createPenalty(e,o){this.penaltyService.createPenalty(e).subscribe({next:a=>{this.recordedPenalties.set([...this.recordedPenalties(),a]),this.toastr.success(`Die ${o} wurden erfolgreich erfasst!`,"Erfolgreich")},error:a=>{this.toastr.error(a.error,"Fehler")}})}deletePenalty(e,o,a){this.penaltyService.delete(o).subscribe({next:()=>{this.toastr.success(`Die ${a} wurden erfolgreich gel\xF6scht!`,"Erfolgreich"),this.recordedPenalties.update(h=>h.filter(d=>d.id!==o)),this.loadTeams(e)},error:h=>{this.toastr.error(h.error,"Fehler")}})}hasPrivileges(e){return j(this,null,function*(){return yield w(this.penaltyService.hasPrivileges(e))})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{D as a,_ as b,nt as c,dt as d,C as e,$ as f,Ot as g,Dt as h,Gt as i};
