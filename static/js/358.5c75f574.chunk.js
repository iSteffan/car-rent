"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[358],{6358:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var i,t,o,a,l,d,c,s,p,h=r(9439),u=r(2791),x=r(9434),f=r(6053),g=r(1113),m=r(5181),b=r(7719),j=r(168),v=r(6444),Z=v.ZP.button(i||(i=(0,j.Z)(["\n  margin-top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n\n  color: #3470ff;\n  font-family: 'ManropeMedium';\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  transition: color 250ms linear;\n\n  &:hover,\n  &:focus {\n    color: #0b44cd;\n  }\n"]))),k=r(3329),w=function(n){var e=n.onClick;return(0,k.jsx)(Z,{onClick:e,children:"Load more"})},P=r(3101),y=function(){return(0,k.jsx)(P.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"loader",visible:!0})},C=r(1413),S=r(5705),z=v.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n"]))),M=v.ZP.label(o||(o=(0,j.Z)(["\n  margin-bottom: 8px;\n\n  color: #8a8a89;\n  font-size: 14px;\n  line-height: 1.28;\n"]))),_=(0,v.ZP)(S.gN)(a||(a=(0,j.Z)(["\n  padding: 14px 18px;\n  font-size: 18px;\n  line-height: 1.11;\n  border: none;\n  border-radius: 14px;\n  background: #f7f7fb;\n\n  &::placeholder {\n    color: #121417;\n  }\n"]))),R=(0,v.ZP)(S.l0)(l||(l=(0,j.Z)(["\n  margin-bottom: 50px;\n"]))),B=v.ZP.div(d||(d=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 224px;\n"]))),E=v.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 125px;\n"]))),F=v.ZP.datalist(s||(s=(0,j.Z)(["\n  width: 224px;\n  height: 272px;\n  border-radius: 14px;\n  border: 1px solid rgba(18, 20, 23, 0.05);\n  background: #fff;\n  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);\n"]))),I=v.ZP.button(p||(p=(0,j.Z)(["\n  padding: 14px 44px;\n\n  height: 48px;\n  color: white;\n  font-family: 'ManropSemiBold';\n  font-size: 14px;\n  line-height: 1.42;\n  border: none;\n  border-radius: 12px;\n  background: #3470ff;\n\n  transition: background 250ms linear;\n\n  &:hover,\n  &:focus {\n    background: #0b44cd;\n  }\n"]))),A=function(n){var e=n.onSave,r=n.data,i=n.priceRange;return(0,k.jsx)(S.J9,{initialValues:{brand:"",rentPrice:""},onSubmit:function(n,r){e((0,C.Z)({},n)),r.resetForm()},children:(0,k.jsx)(R,{children:(0,k.jsxs)(z,{children:[(0,k.jsxs)(B,{children:[(0,k.jsx)(M,{htmlFor:"brand",children:"Car brand"}),(0,k.jsx)(_,{as:"input",name:"brand",id:"brand",list:"carBrands",placeholder:"Enter the text"}),(0,k.jsx)(F,{id:"carBrands",style:{width:"224px",height:"272px"},children:r.map((function(n){return(0,k.jsx)("option",{value:n},n)}))})]}),(0,k.jsxs)(E,{children:[(0,k.jsx)(M,{htmlFor:"rentPrice",children:"Price/ 1 hour"}),(0,k.jsx)(_,{as:"input",name:"rentPrice",id:"rentPrice",list:"priceRange",placeholder:"To $"}),(0,k.jsx)(F,{id:"priceRange",style:{width:"224px",height:"272px"},children:i.map((function(n){return(0,k.jsx)("option",{value:n},n)}))})]}),(0,k.jsx)(I,{type:"submit",children:"Search"})]})})})},G=r(3433),L=function(){var n=(0,x.I0)(),e=(0,u.useState)(2),r=(0,h.Z)(e,2),i=r[0],t=r[1];(0,u.useEffect)((function(){n((0,f.GA)()),n((0,f.rk)())}),[n]);var o=(0,x.v9)(g.zh),a=(0,x.v9)(g.xU),l=(0,x.v9)(g.OG),d=(0,x.v9)(g.I7);console.log(d);var c=function(n){var e=new Set;return n.forEach((function(n){e.add(n.make)})),Array.from(e)}(d),s=function(n){for(var e=n.map((function(n){return parseInt(n.rentalPrice.replace("$",""))})),r=Math.max.apply(Math,(0,G.Z)(e)),i=[],t=10;t<=r;t+=10)i.push(t.toString());return i}(d);return(0,k.jsxs)(b.W,{children:[a&&(0,k.jsx)("div",{style:{marginTop:"200px"},children:(0,k.jsx)(y,{})}),(0,k.jsx)(A,{data:c,priceRange:s}),(0,k.jsx)(b.a,{children:l.map((function(n){return(0,k.jsx)(m._,{item:n},n.id)}))}),d.length-l.length>0&&(0,k.jsx)(w,{onClick:function(){n((0,f.HY)(i)),t((function(n){return n+1}))}}),o&&(0,k.jsx)("p",{children:"Oops, something wrong is going on..."})]})}}}]);
//# sourceMappingURL=358.5c75f574.chunk.js.map