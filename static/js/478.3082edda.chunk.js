"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[478],{5478:function(a,e,r){r.r(e),r.d(e,{default:function(){return D}});var t=r(1413),n=r(2791),o=r(2677),s=r(5987),i=r(1694),c=r.n(i),d=r(162),l=r(6543),f=r(7472),u=r(184),v=["bsPrefix","className","variant","as"],b=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,o=a.variant,i=a.as,l=void 0===i?"img":i,f=(0,s.Z)(a,v),b=(0,d.vE)(r,"card-img");return(0,u.jsx)(l,(0,t.Z)({ref:e,className:c()(o?"".concat(b,"-").concat(o):b,n)},f))}));b.displayName="CardImg";var x=b,m=r(6040),p=["bsPrefix","className","as"],y=n.forwardRef((function(a,e){var r=a.bsPrefix,o=a.className,i=a.as,l=void 0===i?"div":i,f=(0,s.Z)(a,p),v=(0,d.vE)(r,"card-header"),b=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,u.jsx)(m.Z.Provider,{value:b,children:(0,u.jsx)(l,(0,t.Z)((0,t.Z)({ref:e},f),{},{className:c()(o,v)}))})}));y.displayName="CardHeader";var Z=y,g=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,f.Z)("h5"),N=(0,f.Z)("h6"),j=(0,l.Z)("card-body"),P=(0,l.Z)("card-title",{Component:h}),C=(0,l.Z)("card-subtitle",{Component:N}),S=(0,l.Z)("card-link",{Component:"a"}),k=(0,l.Z)("card-text",{Component:"p"}),T=(0,l.Z)("card-footer"),w=(0,l.Z)("card-img-overlay"),B=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,o=a.bg,i=a.text,l=a.border,f=a.body,v=void 0!==f&&f,b=a.children,x=a.as,m=void 0===x?"div":x,p=(0,s.Z)(a,g),y=(0,d.vE)(r,"card");return(0,u.jsx)(m,(0,t.Z)((0,t.Z)({ref:e},p),{},{className:c()(n,y,o&&"bg-".concat(o),i&&"text-".concat(i),l&&"border-".concat(l)),children:v?(0,u.jsx)(j,{children:b}):b}))}));B.displayName="Card";var R=Object.assign(B,{Img:x,Title:P,Subtitle:C,Body:j,Link:S,Text:k,Header:Z,Footer:T,ImgOverlay:w}),E=r(3360),z=["bsPrefix","bg","pill","text","className","as"],F=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.bg,o=void 0===n?"primary":n,i=a.pill,l=void 0!==i&&i,f=a.text,v=a.className,b=a.as,x=void 0===b?"span":b,m=(0,s.Z)(a,z),p=(0,d.vE)(r,"badge");return(0,u.jsx)(x,(0,t.Z)((0,t.Z)({ref:e},m),{},{className:c()(v,p,l&&"rounded-pill",f&&"text-".concat(f),o&&"bg-".concat(o))}))}));F.displayName="Badge";var I=F,V=r(6444),H=r(7111),_={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},D=function(a){var e,r,s=(0,n.useContext)(V.Ni),i=a.project;return(0,u.jsx)(o.Z,{children:(0,u.jsxs)(R,{style:(0,t.Z)((0,t.Z)({},_.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[(0,u.jsx)(R.Img,{variant:"top",src:null===i||void 0===i?void 0:i.image}),(0,u.jsxs)(R.Body,{children:[(0,u.jsx)(R.Title,{style:_.cardTitleStyle,children:i.title}),(0,u.jsx)(R.Text,{style:_.cardTextStyle,children:(r=i.bodyText,(0,u.jsx)(H.D,{children:r}))})]}),(0,u.jsx)(R.Body,{children:null===i||void 0===i||null===(e=i.links)||void 0===e?void 0:e.map((function(a){return(0,u.jsx)(E.Z,{style:_.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(a.href,"_blank")},children:a.text},a.href)}))}),i.tags&&(0,u.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:i.tags.map((function(a){return(0,u.jsx)(I,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:_.badgeStyle,children:a},a)}))})]})})}},3360:function(a,e,r){var t=r(1413),n=r(9439),o=r(5987),s=r(1694),i=r.n(s),c=r(2791),d=r(5341),l=r(162),f=r(184),u=["as","bsPrefix","variant","size","active","disabled","className"],v=c.forwardRef((function(a,e){var r=a.as,s=a.bsPrefix,c=a.variant,v=void 0===c?"primary":c,b=a.size,x=a.active,m=void 0!==x&&x,p=a.disabled,y=void 0!==p&&p,Z=a.className,g=(0,o.Z)(a,u),h=(0,l.vE)(s,"btn"),N=(0,d.FT)((0,t.Z)({tagName:r,disabled:y},g)),j=(0,n.Z)(N,2),P=j[0],C=j[1].tagName;return(0,f.jsx)(C,(0,t.Z)((0,t.Z)((0,t.Z)({},P),g),{},{ref:e,disabled:y,className:i()(Z,h,m&&"active",v&&"".concat(h,"-").concat(v),b&&"".concat(h,"-").concat(b),g.href&&y&&"disabled")}))}));v.displayName="Button",e.Z=v},2677:function(a,e,r){var t=r(9439),n=r(1413),o=r(5987),s=r(1694),i=r.n(s),c=r(2791),d=r(162),l=r(184),f=["as","bsPrefix","className"],u=["className"];var v=c.forwardRef((function(a,e){var r=function(a){var e=a.as,r=a.bsPrefix,t=a.className,s=(0,o.Z)(a,f);r=(0,d.vE)(r,"col");var c=(0,d.pi)(),l=(0,d.zG)(),u=[],v=[];return c.forEach((function(a){var e,t,n,o=s[a];delete s[a],"object"===typeof o&&null!=o?(e=o.span,t=o.offset,n=o.order):e=o;var i=a!==l?"-".concat(a):"";e&&u.push(!0===e?"".concat(r).concat(i):"".concat(r).concat(i,"-").concat(e)),null!=n&&v.push("order".concat(i,"-").concat(n)),null!=t&&v.push("offset".concat(i,"-").concat(t))})),[(0,n.Z)((0,n.Z)({},s),{},{className:i().apply(void 0,[t].concat(u,v))}),{as:e,bsPrefix:r,spans:u}]}(a),s=(0,t.Z)(r,2),c=s[0],v=c.className,b=(0,o.Z)(c,u),x=s[1],m=x.as,p=void 0===m?"div":m,y=x.bsPrefix,Z=x.spans;return(0,l.jsx)(p,(0,n.Z)((0,n.Z)({},b),{},{ref:e,className:i()(v,!Z.length&&y)}))}));v.displayName="Col",e.Z=v}}]);
//# sourceMappingURL=478.3082edda.chunk.js.map