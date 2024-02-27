"use strict";(self.webpackChunkhire_latam_test=self.webpackChunkhire_latam_test||[]).push([[592],{7079:(d,l,o)=>{o.d(l,{E:()=>n});var t=function(e){return e.system="system",e.user="user",e}(t||{});const u=e=>{const{city:p,country:r,region:m}=e;return`I need you to give me a summary of the history and other general information about the city of ${p}, ${m} in ${r}`},s=e=>`I need you to generate a comparison between city ${e[0]} and city ${e[1]}, taking into account the population, size, climate, height above sea level,\n    what its economy is based on and other useful data, try to highlight the important points with the <strong> tag and separate the important points with an unordered list (<ul>)\n    Here I will take care of the rest, and finally, give a very detailed summary of their main differences. Please just give me the answer as if it were a search book. Do not make any comments.`;var h=o(553),a=o(9291),i=o(9862);const n={provide:"chatGptUseCaseProvider",useClass:(()=>{class e{constructor(r){this.http=r}getSummaryCity(r){return this.http.post(h.N.CHAT_GPT_API,this.getSummaryPrompt(r))}getCompareCities(r){return this.http.post(h.N.CHAT_GPT_API,this.getComparePrompt(r))}getSummaryPrompt(r){return[{content:u(r),role:t.user}]}getComparePrompt(r){return[{content:s(r),role:t.user}]}static#t=this.\u0275fac=function(m){return new(m||e)(a.LFG(i.eN))};static#e=this.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac})}return e})()}},6207:(d,l,o)=>{o.d(l,{m:()=>a});var t=o(9862),u=o(553),s=o(9291);const a={provide:"geoDbCitiesUseCaseProvider",useClass:(()=>{class i{constructor(n){this.http=n,this.endpoint="v1/geo/cities"}getCities(n,e){const p=(new t.LE).set("countryIds",n).set("minPopulation","100000").set("limit",e);return this.http.get(`${u.N.GEO_DB_CITIES_API}/${this.endpoint}`,{params:p})}getCityDataById(n){return this.http.get(`${u.N.GEO_DB_CITIES_API}/${this.endpoint}/${n}`)}static#t=this.\u0275fac=function(e){return new(e||i)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:i,factory:i.\u0275fac})}return i})()}},1858:(d,l,o)=>{o.d(l,{K:()=>h});var t=o(6814),u=o(3911),s=o(9291);let h=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=s.oAB({type:a});static#n=this.\u0275inj=s.cJS({imports:[t.ez,u.aw]})}return a})()},74:(d,l,o)=>{o.d(l,{G:()=>h});var t=o(9291),u=o(6814);function s(a,i){if(1&a){const c=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(c);const e=t.oxw();return t.KtG(e.goBack())}),t._UZ(1,"i",4),t.qZA()}}let h=(()=>{class a{constructor(c){this.location=c,this.title="",this.showBackButton=!1}goBack(){this.location.back()}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(u.Ye))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-header"]],inputs:{title:"title",showBackButton:"showBackButton"},decls:5,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light","fixed-top","px-3"],[1,"d-inline-flex"],["class","btn btn-light",3,"click",4,"ngIf"],[1,"btn","btn-light",3,"click"],[1,"fas","fa-arrow-left"]],template:function(n,e){1&n&&(t.TgZ(0,"nav",0)(1,"div",1),t.YNc(2,s,2,0,"button",2),t.TgZ(3,"h3"),t._uU(4),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("ngIf",e.showBackButton),t.xp6(2),t.Oqu(e.title))},dependencies:[u.O5],encapsulation:2})}return a})()},5861:(d,l,o)=>{function t(s,h,a,i,c,n,e){try{var p=s[n](e),r=p.value}catch(m){return void a(m)}p.done?h(r):Promise.resolve(r).then(i,c)}function u(s){return function(){var h=this,a=arguments;return new Promise(function(i,c){var n=s.apply(h,a);function e(r){t(n,i,c,e,p,"next",r)}function p(r){t(n,i,c,e,p,"throw",r)}e(void 0)})}}o.d(l,{Z:()=>u})}}]);