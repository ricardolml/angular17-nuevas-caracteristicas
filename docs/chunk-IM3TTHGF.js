import{a as C}from"./chunk-MPHSMQNS.js";import{f as S,j as h}from"./chunk-PMGS6UTQ.js";import{a as y}from"./chunk-D342BPFO.js";import{$a as d,Pb as x,T as l,Va as a,_a as u,ab as n,bb as s,cb as m,fa as p,kb as c,nb as f,pb as v,qb as _,va as i}from"./chunk-RY4YHBAX.js";var F=(e,t)=>t.id,T=e=>["/dashboard/user",e];function k(e,t){if(e&1&&(n(0,"li",1),m(1,"img",2),n(2,"a",3),c(3),s()()),e&2){let r=t.$implicit;i(),a("srcset",r.avatar)("alt",r.first_name),i(),a("routerLink",_(5,T,r.id)),i(),f(" ",r.first_name," ",r.last_name," ")}}function L(e,t){e&1&&(n(0,"h2"),c(1,"Espere por favor..."),s())}var j=(()=>{let t=class t{constructor(){this.userServices=p(C)}ngOnInit(){console.log(this.userServices.users())}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=l({type:t,selectors:[["ng-component"]],standalone:!0,features:[v],decls:5,vars:1,consts:[["title","Listado de usuarios"],[1,"flex","items-center","my-2","cursor-pointer"],[1,"rounded","w-14",3,"srcset","alt"],[1,"mx-5","hover:underline",3,"routerLink"],["class","flex items-center my-2 cursor-pointer"]],template:function(o,E){o&1&&(m(0,"app-title",0),n(1,"ul"),u(2,k,4,7,"li",4,F,!1,L,2,0,"h2"),s()),o&2&&(i(2),d(E.userServices.users()))},dependencies:[x,h,S,y]});let e=t;return e})();export{j as default};