(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11980],{35883:function(){},46601:function(){},89214:function(){},22307:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var a=n(3827),i=n(64090),l=n(47013),s=n(20703),c=n(44600),o=n.n(c),d=n(61996),m=n.n(d),A=n(22665),r=n(80588),u=n(77171),h=n(59127),_=n(38302),p=n(28683),g=n(4779),y=n(28928),C=n(78319);n(81604);var x=n(47822),M=n(87741);let f="1283d713ed4b644af8c26898225cd1ca";if(!f)throw Error("No client ID provided");let w=(0,M.P)({clientId:f});var j=n(3726),k=n.n(j),v=n(47275);n(14698),n(46188);var N=n(66403),E=n(37432),R=n(71007),b=n(21427);let B=E.T,T=b.F,D=R.u,I=[(0,y.E)("io.metamask"),(0,y.E)("pro.tokenpocket"),(0,y.E)("im.token"),(0,y.E)("com.binance"),(0,y.E)("com.coinbase.wallet"),(0,y.a)()];(0,v.getContract)({client:w,address:N.c.USDTaddress,chain:x.e,abi:B}),(0,v.getContract)({client:w,address:N.c.ZSDaddress,abi:D,chain:x.e}),(0,v.getContract)({client:w,address:N.c.ZSDPROJECTAddress,chain:x.e,abi:T});var Q=()=>{let[e,t]=(0,i.useState)(!1),[n]=A.Z.useForm();(0,l.M)();let s=async()=>{try{I.forEach(e=>{e.disconnect&&e.disconnect(e)}),r.ZP.error("未填写邀请码，钱包已登出"),t(!1)}catch(e){r.ZP.error("登出钱包失败，请重试。")}};return(0,a.jsxs)("div",{children:[(0,a.jsx)(C.ConnectButton,{theme:"dark",client:w,wallets:I,connectModal:{size:"compact"},chain:x.e}),(0,a.jsx)(u.Z,{title:"",open:e,onOk:()=>{t(!1)},onCancel:s,destroyOnClose:!0,width:"90%",style:{margin:"auto",top:"20%"},footer:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(h.ZP,{onClick:s,className:k().Cancelstyle,children:"取消"}),(0,a.jsx)(h.ZP,{className:k().verifystyle,htmlType:"submit",children:"确认"})]}),children:(0,a.jsx)(A.Z,{form:n,name:"friendRechargeForm",children:(0,a.jsxs)(_.Z,{children:[(0,a.jsx)("div",{className:k().Topmodel,children:"邀请人地址"}),(0,a.jsx)(p.Z,{span:24,children:(0,a.jsx)(A.Z.Item,{name:"Invitelink",children:(0,a.jsx)(g.Z,{className:k().inputstyle,placeholder:"请填写/粘帖邀请链地址"})})})]})})})]})},S={src:"/_next/static/media/logo.ee83181c.jpg",height:1024,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAghU//8QAHRAAAQMFAQAAAAAAAAAAAAAAAQIDBAAFERMhI//aAAgBAQABPwAOwk2tTOyKHSnvoMk1/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AI//2Q==",blurWidth:8,blurHeight:8},Z=e=>{let{onToggleRightMenu:t}=e;return(0,a.jsxs)("div",{className:m().pagetop,children:[(0,a.jsx)(s.default,{className:m().m1,src:S,alt:"coin",width:50,height:50}),(0,a.jsx)(Q,{}),(0,a.jsx)(s.default,{className:m().m2,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/selectorSwitch.png",alt:"selectorSwitch",width:50,height:50}),(0,a.jsx)(s.default,{onClick:t,className:m().m3,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/menu.png",alt:"menu",width:50,height:50})]})},P=n(47907),W=n(60809),L=n.n(W);let J=()=>"clipboard"in navigator,V=async e=>{try{if(J()){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),r.ZP.success("复制成功")}else{let t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")?r.ZP.success("复制成功"):r.ZP.error("复制失败，请稍后重试")}catch(e){r.ZP.error("复制失败，请稍后重试")}finally{document.body.removeChild(t)}}}catch(n){let t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),r.ZP.error("复制失败，请稍后重试")}};var F=()=>{let e=(0,P.useRouter)();return(0,a.jsxs)("div",{className:L().rightMenu,"data-id":"RightMenu",children:[(0,a.jsxs)("div",{"data-id":"RightMenu",className:L().row,onClick:()=>e.push("/HomeLess"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:L().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/HomePage.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:L().text,children:"首页"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:L().row,onClick:()=>e.push("/Machine"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:L().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/MiningMachine.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:L().text,children:"矿机"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:L().row,onClick:()=>e.push("/Flash"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:L().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/flash.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:L().text,children:"提款"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:L().row,onClick:()=>e.push("/Community"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:L().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/community.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:L().text,children:"联系我们"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:L().row,onClick:()=>e.push("/Personal"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:L().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Individualcenter.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:L().text,children:"个人中心"})]})]})},H=n(18286),U={src:"/_next/static/media/beijing.d082cf54.png",height:2007,width:2250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAjElEQVR42g3I2xLBMBAA0L0mlZpeDGPwYPz/11FTqSS7nMeDzMcUz4Aowl5XhzXXAiQEDgDbPJZty4YKRDGkoMqHcajf6pZQJpYOGwumaR5JVYH5lVfVuEtDay5x/1wEY7yEKOZiJVv1lE5I/snbv5qZd4Eqova9Mi3vImb8uN8IkVmDem0MehVi0eUHk6g65lpHmfgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7};let O=[{link:"/Machine",url:"../../images/MININGMACHINE.png",name:"矿机",en:"MINING MACHINE"},{link:"/Personal",url:"../../images/PERSONALCENTER.png",name:"个人中心",en:"PERSONAL CENTER"},{link:"/Community",url:"../../images/ContactUs.png",name:"联系我们",en:"Contact Us"},{link:"/HomeLess",url:"../../images/homepage.png",name:"首 页",en:"home page"},{link:"/Flash",url:"../../images/WithdrawMoney.png",name:"取 款",en:"withdraw money"}];var q=()=>{let e=(0,P.useRouter)(),t=(0,l.M)(),n=t=>{e.push(t.link)},c=()=>{V("https://m.zsdcoin.com?ref=".concat(t?t.address:""))},{isRightMenuVisible:d,toggleRightMenu:m,hideRightMenu:A}=(0,i.useContext)(H.MenuContext),r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=e=>{r.current&&"RightMenu"!==e.target.dataset.id&&A()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[A]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:o().pageMenu,children:[d&&(0,a.jsx)(F,{}),(0,a.jsx)(Z,{onToggleRightMenu:m}),(0,a.jsx)("div",{className:o().videoBackground,id:"nav",children:(0,a.jsx)(s.default,{className:o().imageGif,src:U,alt:""})}),(0,a.jsx)("div",{className:o().top,ref:r,children:O.map((e,t)=>"/InCode"===e.link?(0,a.jsxs)("div",{className:"".concat(o()["menyBtn"+t]," ").concat(o().menyBtn),onClick:c,children:[(0,a.jsx)(s.default,{className:"".concat(o()["img"+t]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:o()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:o()["menyBtn-e"],children:e.en})]},t):(0,a.jsxs)("div",{className:"".concat(o()["menyBtn"+t]," ").concat(o().menyBtn),onClick:()=>n(e),children:[(0,a.jsx)(s.default,{className:"".concat(o()["img"+t]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:o()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:o()["menyBtn-e"],children:e.en})]},t))})]})})}},3726:function(e){e.exports={Content:"CallWallet_Content__VZGXB",inputstyle:"CallWallet_inputstyle__LHCrR",buttonstyle:"CallWallet_buttonstyle__SyHTQ",buttonHelpFriendstyle:"CallWallet_buttonHelpFriendstyle__ODMLq",ContentText:"CallWallet_ContentText__IDVTv",ContentInstructions:"CallWallet_ContentInstructions__ENJFV",Contentlabel:"CallWallet_Contentlabel__qhJjI",labelContainer:"CallWallet_labelContainer__C9S6y",labelLeft:"CallWallet_labelLeft__Wxi2I",labelRight:"CallWallet_labelRight__GI3Yg",CalculatedValue:"CallWallet_CalculatedValue__wVHD9",Ustyle:"CallWallet_Ustyle__mvYTw",Topmodel:"CallWallet_Topmodel__KVhWO",Cancelstyle:"CallWallet_Cancelstyle__KKA_f",verifystyle:"CallWallet_verifystyle__TpKJE"}},60809:function(e){e.exports={rightMenu:"RightMenu_rightMenu__4Vdi0",row:"RightMenu_row__vVKio",img:"RightMenu_img__LvhXL",text:"RightMenu_text__kgeAO","video-background":"RightMenu_video-background__VO7sD",content:"RightMenu_content__zza7R"}},44600:function(e){e.exports={pageMenu:"TopMenu_pageMenu__tgFwW",top:"TopMenu_top__CE9fR",menyBtn0:"TopMenu_menyBtn0__OU6ht",menyBtn1:"TopMenu_menyBtn1__wpmzY",menyBtn2:"TopMenu_menyBtn2__9YB4v",menyBtn3:"TopMenu_menyBtn3__42O5W",menyBtn4:"TopMenu_menyBtn4__jMDkX",menyBtn5:"TopMenu_menyBtn5__YwPul",menyBtn:"TopMenu_menyBtn__5Rl_B","menyBtn-n":"TopMenu_menyBtn-n___3oET","menyBtn-e":"TopMenu_menyBtn-e__o7RuC",img0:"TopMenu_img0__EwxhJ",img1:"TopMenu_img1__U8byq",img2:"TopMenu_img2__Ixg5G",img3:"TopMenu_img3__sypae",img4:"TopMenu_img4__IL4yF",img5:"TopMenu_img5__ZAun1","video-background":"TopMenu_video-background__40Bxp",content:"TopMenu_content__s8Xj1",imageGif:"TopMenu_imageGif__f0WuQ"}},61996:function(e){e.exports={pagetop:"Top_pagetop__5k2y2",m1:"Top_m1__eJ96o",m2:"Top_m2__Leibv",m3:"Top_m3__8JExu",ljqb:"Top_ljqb__ktoyc","css-bedeeg":"Top_css-bedeeg__caJQv",deep:"Top_deep__7n1oN"}}}]);