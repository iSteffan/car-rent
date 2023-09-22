"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[358],{6358:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var i,t,o,a,l,d,p,s,c,u,x,f,h,g,m=r(9439),b=r(2791),v=r(9434),j=r(6053),Z=r(1113),k=r(5181),P=r(7719),M=r(168),w=r(6444),y=w.ZP.button(i||(i=(0,M.Z)(["\n  margin-top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n\n  color: #3470ff;\n  font-family: 'ManropeMedium';\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  transition: color 250ms linear;\n\n  &:hover,\n  &:focus {\n    color: #0b44cd;\n  }\n"]))),R=r(3329),S=function(n){var e=n.onClick;return(0,R.jsx)(y,{onClick:e,children:"Load more"})},q=r(3101),z=function(){return(0,R.jsx)(q.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"loader",visible:!0})},C=r(1413),I=r(5705),_=(0,w.ZP)(I.Bc)(t||(t=(0,M.Z)(["\n  position: absolute;\n  top: 75px;\n  left: 0;\n  font-size: 12px;\n  color: red;\n"]))),F=w.ZP.div(o||(o=(0,M.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 18px;\n"]))),B=w.ZP.label(a||(a=(0,M.Z)(["\n  margin-bottom: 8px;\n\n  color: #8a8a89;\n  font-size: 14px;\n  line-height: 1.28;\n"]))),N=(0,w.ZP)(I.gN)(l||(l=(0,M.Z)(["\n  padding: 14px 18px;\n\n  font-size: 18px;\n  line-height: 1.11;\n  border: none;\n  border-radius: 14px;\n  background: #f7f7fb;\n\n  &::placeholder {\n    color: #121417;\n  }\n"]))),$=(0,w.ZP)(I.gN)(d||(d=(0,M.Z)(["\n  padding: 14px 24px;\n\n  width: 160px;\n  font-size: 18px;\n  line-height: 1.11;\n  border: none;\n  border-bottom-left-radius: 14px;\n  border-top-left-radius: 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n\n  background: #f7f7fb;\n\n  &::placeholder {\n    color: #121417;\n  }\n"]))),E=(0,w.ZP)(I.gN)(p||(p=(0,M.Z)(["\n  padding: 14px 24px;\n\n  width: 160px;\n  font-size: 18px;\n  line-height: 1.11;\n  border: none;\n  border-bottom-right-radius: 14px;\n  border-top-right-radius: 14px;\n  background: #f7f7fb;\n\n  &::placeholder {\n    color: #121417;\n  }\n"]))),T=(0,w.ZP)(I.l0)(s||(s=(0,M.Z)(["\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n\n  width: 858px;\n"]))),A=w.ZP.div(c||(c=(0,M.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  width: 224px;\n"]))),G=w.ZP.div(u||(u=(0,M.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  width: 125px;\n"]))),L=w.ZP.datalist(x||(x=(0,M.Z)(["\n  width: 224px;\n  height: 272px;\n  border-radius: 14px;\n  border: 1px solid rgba(18, 20, 23, 0.05);\n  background: #fff;\n  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);\n"]))),O=w.ZP.button(f||(f=(0,M.Z)(["\n  padding: 14px 44px;\n\n  height: 48px;\n  color: white;\n  font-family: 'ManropSemiBold';\n  font-size: 14px;\n  line-height: 1.42;\n  border: none;\n  border-radius: 12px;\n  background: #3470ff;\n\n  transition: background 250ms linear;\n\n  &:hover,\n  &:focus {\n    background: #0b44cd;\n  }\n"]))),H=w.ZP.fieldset(h||(h=(0,M.Z)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  border: none;\n"]))),J=w.ZP.div(g||(g=(0,M.Z)(["\n  position: relative;\n  display: flex;\n\n  width: 320px;\n"]))),U=r(6727),V=U.Ry().shape({make:U.Z_().required("Required field!"),rentalPrice:U.Rx().positive("Must be > 0!").required("Required field!"),fromMileage:U.Rx().positive("Must be > 0!").required("Required field!"),toMileage:U.Rx().positive("Must be > 0!").required("Required field!")}),W=function(n){var e=n.onSave,r=n.data,i=n.priceRange;return(0,R.jsx)(I.J9,{initialValues:{make:"",rentalPrice:"",fromMileage:"",toMileage:""},validationSchema:V,onSubmit:function(n,r){e((0,C.Z)({},n)),r.resetForm()},children:(0,R.jsx)(T,{children:(0,R.jsxs)(F,{children:[(0,R.jsxs)(A,{children:[(0,R.jsx)(B,{htmlFor:"make",children:"Car brand"}),(0,R.jsx)(N,{name:"make",id:"make",list:"carBrands",placeholder:"Enter the text"}),(0,R.jsx)(_,{name:"make",component:"div"}),(0,R.jsx)(L,{id:"carBrands",style:{width:"224px",height:"272px"},children:r.map((function(n){return(0,R.jsx)("option",{value:n},n)}))})]}),(0,R.jsxs)(G,{children:[(0,R.jsx)(B,{htmlFor:"rentalPrice",children:"Price/ 1 hour"}),(0,R.jsx)(N,{name:"rentalPrice",id:"rentalPrice",list:"priceRange",placeholder:"To $"}),(0,R.jsx)(_,{name:"rentalPrice",component:"div"}),(0,R.jsx)(L,{id:"priceRange",style:{width:"224px",height:"272px"},children:i.map((function(n){return(0,R.jsx)("option",{value:n},n)}))})]}),(0,R.jsxs)(H,{children:[(0,R.jsx)(B,{htmlFor:"fromMileage toMileage",children:"\u0421ar mileage / km"}),(0,R.jsxs)(J,{children:[(0,R.jsx)($,{name:"fromMileage",id:"fromMileage",placeholder:"From"}),(0,R.jsx)(_,{name:"fromMileage",component:"div",style:{top:"49px"}}),(0,R.jsx)(E,{name:"toMileage",id:"toMileage",placeholder:"To"}),(0,R.jsx)(_,{name:"toMileage",component:"div",style:{top:"49px",left:"160px"}})]})]}),(0,R.jsx)(O,{type:"submit",children:"Search"})]})})})},Y=r(3433),D=function(){var n=(0,v.I0)(),e=(0,b.useState)(2),r=(0,m.Z)(e,2),i=r[0],t=r[1],o=(0,b.useState)(null),a=(0,m.Z)(o,2),l=a[0],d=a[1],p=(0,b.useState)(!1),s=(0,m.Z)(p,2),c=s[0],u=s[1];(0,b.useEffect)((function(){n((0,j.GA)()),n((0,j.rk)())}),[n]);var x=(0,v.v9)(Z.zh),f=(0,v.v9)(Z.xU),h=(0,v.v9)(Z.OG),g=(0,v.v9)(Z.I7),M=function(n){var e=new Set;return n.forEach((function(n){e.add(n.make)})),Array.from(e)}(g),w=function(n){for(var e=n.map((function(n){return parseInt(n.rentalPrice.replace("$",""))})),r=Math.max.apply(Math,(0,Y.Z)(e)),i=[],t=10;t<=r;t+=10)i.push(t.toString());return i}(g),y=l||h;return(0,R.jsxs)(P.W,{children:[(0,R.jsx)(W,{data:M,priceRange:w,onSave:function(n){if(!n)return u(!1),!1;var e=g.filter((function(e){return e.make===n.make})),r=parseInt(n.rentalPrice.replace("$",""),10),i=e.filter((function(n){return parseInt(n.rentalPrice.replace("$",""),10)<=r})).filter((function(e){return e.mileage>=parseInt(n.fromMileage,10)&&e.mileage<=parseInt(n.toMileage,10)})).sort((function(n,e){return n.mileage-e.mileage}));return d(i),u(!0),i}}),f&&(0,R.jsx)("div",{style:{marginTop:"200px"},children:(0,R.jsx)(z,{})}),(0,R.jsx)(P.a,{children:y.map((function(n){return(0,R.jsx)(k._,{item:n},n.id)}))}),!c&&g.length-h.length>0&&(0,R.jsx)(S,{onClick:function(){n((0,j.HY)(i)),t((function(n){return n+1}))}}),x&&(0,R.jsx)("p",{children:"Oops, something wrong is going on..."})]})}}}]);
//# sourceMappingURL=358.c0d7a375.chunk.js.map