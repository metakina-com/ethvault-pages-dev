"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12039],{81604:function(e,t,a){a.d(t,{M1:function(){return s}});var n=a(94293);let r=[{type:"address",name:"owner"},{type:"address",name:"spender"}],i=[{type:"uint256"}];async function s(e){return(0,n.readContract)({contract:e.contract,method:["0xdd62ed3e",r,i],params:[e.owner,e.spender]})}},12039:function(e,t,a){a.r(t),a.d(t,{connectSmartWallet:function(){return e_},disconnectSmartWallet:function(){return eS},isSmartWallet:function(){return eN},personalAccountToSmartAccountMap:function(){return ek}});var n=a(63121),r=a(92525),i=a(85738),s=a(47275),o=a(81604),c=a(74153),l=a(73256),d=a(38992),u=a(83286),p=a(2050),m=a(24053),y=a(77808),f=a(45581),v=a(44898),h=a(14433),g=a(73596),G=a(30206),w=a(81106);let b=w.r;var A=a(95305),L=a(92155),x=a(28201),O=a(67705);let P="/docs/contract/decodeEventLog";var C=a(55139),D=a(51273);class I extends D.G{constructor(e){super('Filter type "'.concat(e,'" is not supported.'),{name:"FilterTypeNotSupportedError"})}}var V=a(8580),M=a(21230),T=a(9226);let E="/docs/contract/encodeEventTopics";function U(e){let{param:t,value:a}=e;if("string"===t.type||"bytes"===t.type)return(0,G.w)((0,g.O0)(a));if("tuple"===t.type||t.type.match(/^(.*)\[(\d+)?\]$/))throw new I(t.type);return(0,V.E)([t],[a])}function N(e){let t;let{signature:a}=e;return{abiEvent:t=a&&"object"==typeof a&&"type"in a&&"event"===a.type?a:(0,C.s)(a),hash:(0,w.r)(t),topics:function(e){let{abi:t,eventName:a,args:n}=e,r=t[0];if(a){let e=function(e){let t;let{abi:a,args:n=[],name:r}=e,i=(0,M.v)(r,{strict:!1}),s=a.filter(e=>i?"function"===e.type?(0,T.C)(e)===r:"event"===e.type&&b(e)===r:"name"in e&&e.name===r);if(0!==s.length){if(1===s.length)return s[0];for(let e of s)if("inputs"in e){if(!n||0===n.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===n.length&&n.every((t,a)=>{let n="inputs"in e&&e.inputs[a];return!!n&&function e(t,a){let n=typeof t,r=a.type;switch(r){case"address":return(0,h.U)(t,{strict:!1});case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:if("tuple"===r&&"components"in a)return Object.values(a.components).every((a,n)=>e(Object.values(t)[n],a));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r))return"number"===n||"bigint"===n;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r))return"string"===n||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r))return Array.isArray(t)&&t.every(t=>e(t,{...a,type:r.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,n)})){if(t&&"inputs"in t&&t.inputs){let a=function e(t,a,n){for(let r in t){let i=t[r],s=a[r];if("tuple"===i.type&&"tuple"===s.type&&"components"in i&&"components"in s)return e(i.components,s.components,n[r]);let o=[i.type,s.type];if(o.includes("address")&&o.includes("bytes20")||(o.includes("address")&&o.includes("string")||o.includes("address")&&o.includes("bytes"))&&(0,h.U)(n[r],{strict:!1}))return o}}(e.inputs,t.inputs,n);if(a)throw new f.S4({abiItem:e,type:a[0]},{abiItem:t,type:a[1]})}t=e}}return t||s[0]}}({abi:t,name:a});if(!e)throw new f.mv(a,{docsPath:E});r=e}if("event"!==r.type)throw new f.mv(void 0,{docsPath:E});let i=b((0,O.t)(r)),s=[];if(n&&"inputs"in r){var o,c,l;let e=null===(o=r.inputs)||void 0===o?void 0:o.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(n)?n:Object.values(n).length>0&&null!==(c=null==e?void 0:e.map(e=>n[e.name]))&&void 0!==c?c:[];t.length>0&&(s=null!==(l=null==e?void 0:e.map((e,a)=>Array.isArray(t[a])?t[a].map((n,r)=>U({param:e,value:t[a][r]})):t[a]?U({param:e,value:t[a]}):null))&&void 0!==l?l:[])}return[i,...s]}({abi:[t],args:e.filters})}}var k=a(14520),B=a(23565),_=a(49859),S=a(36062),H=a(1793);let j=()=>{let e=BigInt(Math.floor(4294967296*Math.random())),t=BigInt(Math.floor(4294967296*Math.random())),a=BigInt(Math.floor(4294967296*Math.random())),n=BigInt(Math.floor(4294967296*Math.random())),r=BigInt(Math.floor(4294967296*Math.random())),i=BigInt(Math.floor(4294967296*Math.random()));return e<<BigInt(160)|t<<BigInt(128)|a<<BigInt(96)|n<<BigInt(64)|r<<BigInt(32)|i};function z(e){return Object.fromEntries(Object.entries(e).map(e=>{let[t,a]=e;return[t,null==a||(0,H.v)(a)?a:(0,k.NC)(a)]}))}async function F(e){var t;return X({...e,operation:"eth_sendUserOperation",params:[z(e.userOp),null!==(t=e.options.entrypointAddress)&&void 0!==t?t:S.Ex]})}async function R(e){var t;let a=await X({...e,operation:"eth_estimateUserOperationGas",params:[z(e.userOp),null!==(t=e.options.entrypointAddress)&&void 0!==t?t:S.Ex]});return{preVerificationGas:(0,k.y_)(a.preVerificationGas),verificationGas:(0,k.y_)(a.verificationGas),verificationGasLimit:(0,k.y_)(a.verificationGasLimit),callGasLimit:(0,k.y_)(a.callGasLimit)+S.X_,paymasterVerificationGasLimit:void 0!==a.paymasterVerificationGasLimit?(0,k.y_)(a.paymasterVerificationGasLimit):void 0,paymasterPostOpGasLimit:void 0!==a.paymasterPostOpGasLimit?(0,k.y_)(a.paymasterPostOpGasLimit):void 0}}async function $(e){let t=await X({...e,operation:"thirdweb_getUserOperationGasPrice",params:[]});return{maxPriorityFeePerGas:(0,k.y_)(t.maxPriorityFeePerGas),maxFeePerGas:(0,k.y_)(t.maxFeePerGas)}}async function W(e){let t=await q(e);if(t){if(!1===t.success){var a,n;let e=null===(n=function(e){let{logs:t,events:a,strict:n}=e;return function(e){let{abi:t,args:a,logs:n,strict:r=!0}=e,i=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})();return n.map(e=>{try{let n=t.find(t=>"event"===t.type&&e.topics[0]===b(t));if(!n)return null;let s=function(e){let{abi:t,data:a,strict:n,topics:r}=e,i=null==n||n,[s,...o]=r;if(!s)throw new f.FM({docsPath:P});let c=1===t.length?t[0]:t.find(e=>"event"===e.type&&s===b((0,O.t)(e)));if(!(c&&"name"in c)||"event"!==c.type)throw new f.lC(s,{docsPath:P});let{name:l,inputs:d}=c,u=null==d?void 0:d.some(e=>!("name"in e&&e.name)),p=u?[]:{},m=d.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<m.length;e++){let t=m[e],a=o[e];if(!a)throw new f.Gy({abiItem:c,param:t});p[u?e:t.name||e]=function(e){let{param:t,value:a}=e;return"string"===t.type||"bytes"===t.type||"tuple"===t.type||t.type.match(/^(.*)\[(\d+)?\]$/)?a:((0,x.r)([t],a)||[])[0]}({param:t,value:a})}let y=d.filter(e=>!("indexed"in e&&e.indexed));if(y.length>0){if(a&&"0x"!==a)try{let e=(0,x.r)(y,a);if(e){if(u)p=[...p,...e];else for(let t=0;t<y.length;t++)p[y[t].name]=e[t]}}catch(e){if(i){if(e instanceof f.xB||e instanceof L.lQ)throw new f.SM({abiItem:c,data:a,params:y,size:(0,A.d)(a)});throw e}}else if(i)throw new f.SM({abiItem:c,data:"0x",params:y,size:0})}return{eventName:l,args:Object.values(p).length>0?p:void 0}}({...e,abi:[n],strict:r});if(i&&!i.includes(s.eventName)||!function(e){let{args:t,inputs:a,matchArgs:n}=e;if(!n)return!0;if(!t)return!1;function r(e,t,a){try{if("address"===e.type)return function(e,t){if(!(0,h.U)(e,{strict:!1}))throw new v.b({address:e});if(!(0,h.U)(t,{strict:!1}))throw new v.b({address:t});return e.toLowerCase()===t.toLowerCase()}(t,a);if("string"===e.type||"bytes"===e.type)return(0,G.w)((0,g.O0)(t))===a;return t===a}catch(e){return!1}}return Array.isArray(t)&&Array.isArray(n)?n.every((e,n)=>{if(null===e)return!0;let i=a[n];return!!i&&(Array.isArray(e)?e:[e]).some(e=>r(i,e,t[n]))}):!("object"!=typeof t||Array.isArray(t)||"object"!=typeof n||Array.isArray(n))&&Object.entries(n).every(e=>{let[n,i]=e;if(null===i)return!0;let s=a.find(e=>e.name===n);return!!s&&(Array.isArray(i)?i:[i]).some(e=>r(s,e,t[n]))})}({args:s.args,inputs:n.inputs,matchArgs:a}))return null;return{...s,...e}}catch(i){let t,a;if(i instanceof f.lC)return null;if(i instanceof f.SM||i instanceof f.Gy){var n;if(r)return null;t=i.abiItem.name,a=null===(n=i.abiItem.inputs)||void 0===n?void 0:n.some(e=>!("name"in e&&e.name))}return{...e,args:a?[]:{},eventName:t}}}).filter(Boolean)}({logs:t,abi:a.map(e=>e.abiEvent),strict:n})}({events:[function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return N({signature:"event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",filters:e})}(),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return N({signature:"event PostOpRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",filters:e})}()],logs:t.logs})[0])||void 0===n?void 0:null===(a=n.args)||void 0===a?void 0:a.revertReason;if(!e)throw Error("UserOp failed at txHash: ".concat(t.receipt.transactionHash));let r=(0,y.p)({data:e});throw Error("UserOp failed with reason: '".concat(r.args.join(","),"' at txHash: ").concat(t.receipt.transactionHash))}return t.receipt}}async function q(e){let t=await X({options:e,operation:"eth_getUserOperationReceipt",params:[e.userOpHash]});if(t)return function(e){let{receipt:t}=e,a={...t,transactionHash:t.transactionHash,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs,to:t.to?t.to:null,transactionIndex:t.transactionIndex,status:t.status,type:t.type};return t.blobGasPrice&&(a.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(a.blobGasUsed=BigInt(t.blobGasUsed)),{...e,receipt:a,userOpHash:e.userOpHash,actualGasCost:BigInt(e.actualGasCost),actualGasUsed:BigInt(e.actualGasUsed),nonce:BigInt(e.nonce)}}(t)}async function J(e){let t=await X({options:e.options,operation:"zk_paymasterData",params:[e.transaction]});return{paymaster:t.paymaster,paymasterInput:t.paymasterInput}}async function K(e){return{transactionHash:(await X({options:e.options,operation:"zk_broadcastTransaction",params:[{...e.transaction,signedTransaction:e.signedTransaction}]})).transactionHash}}async function X(e){var t;let{options:a,operation:n,params:r}=e;S.eM&&console.debug(">>> sending ".concat(n," with payload:"),r);let i=(0,S.bI)(a.entrypointAddress||S.Ex),s=null!==(t=a.bundlerUrl)&&void 0!==t?t:(0,S.Rg)(a.chain,"v0.6"===i?"v1":"v2"),o=(0,B.NX)(a.client),c=await o(s,{method:"POST",headers:{"Content-Type":"application/json"},body:(0,_.P)({jsonrpc:"2.0",id:1,method:n,params:r})}),l=await c.json();if(!c.ok||l.error){let e=l.error||c.statusText;"object"==typeof e&&(e=JSON.stringify(e));let t=l.code||"UNKNOWN";throw Error("".concat(n," error: ").concat(e,"\nStatus: ").concat(c.status,"\nCode: ").concat(t))}return S.eM&&console.debug("<<< ".concat(n," result:"),l),l.result}var Q=a(14698),Y=a(94293);async function Z(e){let{factoryContract:t,predictAddressOverride:a,adminAddress:n,accountSalt:r,accountAddress:i}=e;if(a)return a(t);if(i)return i;if(!n)throw Error("Account address is required to predict the smart wallet address.");let s=(0,k.$G)(null!=r?r:"");return(0,Y.readContract)({contract:t,method:"function getAddress(address, bytes) returns (address)",params:[n,s]})}function ee(e){let{adminAddress:t,factoryContract:a,createAccountOverride:n,accountSalt:r}=e;return n?n(a):(0,Q.A)({contract:a,method:"function createAccount(address, bytes) returns (address)",params:[t,(0,k.$G)(null!=r?r:"")]})}function et(e){let{accountContract:t,transaction:a,executeOverride:n}=e;return n?n(t,a):(0,Q.A)({contract:t,method:"function execute(address, uint256, bytes)",params:[a.to||"",a.value||0n,a.data||"0x"]})}var ea=a(3556);let en=[{type:"address",name:"sender"},{type:"uint192",name:"key"}],er=[{type:"uint256",name:"nonce"}];async function ei(e){return(0,Y.readContract)({contract:e.contract,method:["0x35567e1a",en,er],params:[e.sender,e.key]})}let es=[{type:"tuple",name:"userOp",components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes",name:"initCode"},{type:"bytes",name:"callData"},{type:"uint256",name:"callGasLimit"},{type:"uint256",name:"verificationGasLimit"},{type:"uint256",name:"preVerificationGas"},{type:"uint256",name:"maxFeePerGas"},{type:"uint256",name:"maxPriorityFeePerGas"},{type:"bytes",name:"paymasterAndData"},{type:"bytes",name:"signature"}]}],eo=[{type:"bytes32"}];async function ec(e){return(0,Y.readContract)({contract:e.contract,method:["0xa6193531",es,eo],params:[e.userOp]})}let el=[{type:"tuple",name:"userOp",components:[{type:"address",name:"sender"},{type:"uint256",name:"nonce"},{type:"bytes",name:"initCode"},{type:"bytes",name:"callData"},{type:"bytes32",name:"accountGasLimits"},{type:"uint256",name:"preVerificationGas"},{type:"bytes32",name:"gasFees"},{type:"bytes",name:"paymasterAndData"},{type:"bytes",name:"signature"}]}],ed=[{type:"bytes32"}];async function eu(e){return(0,Y.readContract)({contract:e.contract,method:["0x22cdde4c",el,ed],params:[e.userOp]})}var ep=a(89609),em=a(80695),ey=a(88267),ef=a(47456),ev=a(94646),eh=a(89507),eg=a(15578);let eG=e=>({sender:e.sender,nonce:e.nonce,initCode:e.factory?(0,ea.zo)([e.factory,e.factoryData||"0x"]):"0x",callData:e.callData,accountGasLimits:(0,ea.zo)([(0,eh.vk)((0,eg.NC)(e.verificationGasLimit),{size:16}),(0,eh.vk)((0,eg.NC)(e.callGasLimit),{size:16})]),preVerificationGas:e.preVerificationGas,gasFees:(0,ea.zo)([(0,eh.vk)((0,eg.NC)(e.maxPriorityFeePerGas),{size:16}),(0,eh.vk)((0,eg.NC)(e.maxFeePerGas),{size:16})]),paymasterAndData:e.paymaster?(0,ea.zo)([e.paymaster,(0,eh.vk)((0,eg.NC)(e.paymasterVerificationGasLimit||BigInt(0)),{size:16}),(0,eh.vk)((0,eg.NC)(e.paymasterPostOpGasLimit||BigInt(0)),{size:16}),e.paymasterData||"0x"]):"0x",signature:e.signature});async function ew(e){var t;let{userOp:a,paymasterOverride:n,client:r,chain:i,entrypointAddress:s}=e;if(n)return n(a);let o=null!=s?s:S.Ex,c=(0,S.bI)(o),l=(0,S.Rg)(i,"v0.6"===c?"v1":"v2"),d=(0,B.NX)(r),u=await d(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"pm_sponsorUserOperation",params:[z(a),o]})}),p=await u.json();if(!u.ok){let e=p.error||u.statusText,t=p.code||"UNKNOWN";throw Error("Paymaster error: ".concat(e,"\nStatus: ").concat(u.status,"\nCode: ").concat(t))}if(S.eM&&console.debug("Paymaster result:",p),p.result)return"string"==typeof p.result?{paymasterAndData:p.result}:{paymasterAndData:p.result.paymasterAndData,verificationGasLimit:p.result.verificationGasLimit?(0,k.y_)(p.result.verificationGasLimit):void 0,preVerificationGas:p.result.preVerificationGas?(0,k.y_)(p.result.preVerificationGas):void 0,callGasLimit:p.result.callGasLimit?(0,k.y_)(p.result.callGasLimit):void 0,paymaster:p.result.paymaster,paymasterData:p.result.paymasterData,paymasterVerificationGasLimit:p.result.paymasterVerificationGasLimit?(0,k.y_)(p.result.paymasterVerificationGasLimit):void 0,paymasterPostOpGasLimit:p.result.paymasterPostOpGasLimit?(0,k.y_)(p.result.paymasterPostOpGasLimit):void 0};let m=(null===(t=p.error)||void 0===t?void 0:t.message)||p.error||u.statusText||"unknown error";throw Error("Paymaster error from ".concat(l,": ").concat(m))}let eb=new Set,eA=e=>"".concat(e.chain.id,":").concat(e.address),eL=e=>{eb.add(eA(e))},ex=e=>{eb.delete(eA(e))},eO=e=>eb.has(eA(e));async function eP(e){let t=e.timeoutMs||12e4,a=e.intervalMs||1e3,n=Date.now()+t;for(;Date.now()<n;){let t=await W(e);if(t)return t;await new Promise(e=>setTimeout(e,a))}throw Error("Timeout waiting for userOp to be mined")}async function eC(e){var t;let{transaction:a,accountContract:n,factoryContract:r,adminAddress:i,overrides:s,sponsorGas:o}=e,c=a.chain,l=a.client,d={client:l,chain:c,entrypointAddress:null==s?void 0:s.entrypointAddress},u=(0,S.bI)((null===(t=e.overrides)||void 0===t?void 0:t.entrypointAddress)||S.Ex),[p,m,y,f]=await Promise.all([(0,ey.isContractDeployed)(n),(0,em.encode)(a),eD({executeTx:a,bundlerOptions:d,chain:c,client:l}),eE({accountContract:n,chain:c,client:l,entrypointAddress:null==s?void 0:s.entrypointAddress,getNonceOverride:null==s?void 0:s.getAccountNonce})]),{maxFeePerGas:v,maxPriorityFeePerGas:h}=y;return"v0.7"===u?eI({bundlerOptions:d,factoryContract:r,accountContract:n,adminAddress:i,sponsorGas:o,overrides:s,isDeployed:p,nonce:f,callData:m,maxFeePerGas:v,maxPriorityFeePerGas:h}):eV({bundlerOptions:d,factoryContract:r,accountContract:n,adminAddress:i,sponsorGas:o,overrides:s,isDeployed:p,nonce:f,callData:m,maxFeePerGas:v,maxPriorityFeePerGas:h})}async function eD(e){var t,a,n;let{executeTx:r,bundlerOptions:i,chain:s,client:o}=e,{maxFeePerGas:c,maxPriorityFeePerGas:l}=r,d=(0,S.bI)(i.entrypointAddress||S.Ex),u=null!==(t=null==i?void 0:i.bundlerUrl)&&void 0!==t?t:(0,S.Rg)(s,"v0.6"===d?"v1":"v2");if((0,B.Rm)(u)){let e=await $({options:i});c=e.maxFeePerGas,l=e.maxPriorityFeePerGas}else{let[e,t]=await Promise.all([(0,ev.q)(c),(0,ev.q)(l)]);if(e&&t)c=e,l=t;else{let r=await (0,ep.E)(o,s);l=null!==(a=null!=t?t:r.maxPriorityFeePerGas)&&void 0!==a?a:0n,c=null!==(n=null!=e?e:r.maxFeePerGas)&&void 0!==n?n:0n}}return{maxFeePerGas:c,maxPriorityFeePerGas:l}}async function eI(e){let t,a;let{bundlerOptions:n,isDeployed:r,factoryContract:i,accountContract:s,adminAddress:o,sponsorGas:c,overrides:l,nonce:d,callData:u,maxFeePerGas:p,maxPriorityFeePerGas:m}=e,{chain:y,client:f}=n;r||eO(s)?(a="0x",await eU(s)):(t=i.address,a=await (0,em.encode)(ee({factoryContract:i,adminAddress:o,accountSalt:null==l?void 0:l.accountSalt,createAccountOverride:null==l?void 0:l.createAccount})),eL(s));let v={sender:s.address,nonce:d,callData:u,maxFeePerGas:p,maxPriorityFeePerGas:m,callGasLimit:0n,verificationGasLimit:0n,preVerificationGas:0n,factory:t,factoryData:a,paymaster:void 0,paymasterData:"0x",paymasterVerificationGasLimit:0n,paymasterPostOpGasLimit:0n,signature:S.Ld};if(c){let e=await ew({userOp:v,chain:y,client:f,entrypointAddress:null==l?void 0:l.entrypointAddress,paymasterOverride:null==l?void 0:l.paymaster});if(e.paymaster&&e.paymasterData&&(v.paymaster=e.paymaster,v.paymasterData=e.paymasterData),e.callGasLimit&&e.verificationGasLimit&&e.preVerificationGas&&e.paymasterPostOpGasLimit&&e.paymasterVerificationGasLimit)v.callGasLimit=e.callGasLimit,v.verificationGasLimit=e.verificationGasLimit,v.preVerificationGas=e.preVerificationGas,v.paymasterPostOpGasLimit=e.paymasterPostOpGasLimit,v.paymasterVerificationGasLimit=e.paymasterVerificationGasLimit;else{let t=await R({userOp:v,options:n});v.callGasLimit=t.callGasLimit,v.verificationGasLimit=t.verificationGasLimit,v.preVerificationGas=t.preVerificationGas,v.paymasterPostOpGasLimit=e.paymasterPostOpGasLimit||0n,v.paymasterVerificationGasLimit=e.paymasterVerificationGasLimit||0n;let a=await ew({userOp:v,chain:y,client:f,entrypointAddress:null==l?void 0:l.entrypointAddress,paymasterOverride:null==l?void 0:l.paymaster});a.paymaster&&a.paymasterData&&(v.paymaster=a.paymaster,v.paymasterData=a.paymasterData)}}else{let e=await R({userOp:v,options:n});v.callGasLimit=e.callGasLimit,v.verificationGasLimit=e.verificationGasLimit,v.preVerificationGas=e.preVerificationGas,v.paymasterPostOpGasLimit=e.paymasterPostOpGasLimit||0n,v.paymasterVerificationGasLimit=e.paymasterVerificationGasLimit||0n}return{...v,signature:"0x"}}async function eV(e){let t;let{bundlerOptions:a,isDeployed:n,factoryContract:r,accountContract:i,adminAddress:s,sponsorGas:o,overrides:c,nonce:l,callData:d,maxFeePerGas:u,maxPriorityFeePerGas:p}=e,{chain:m,client:y}=a;n||eO(i)?(t="0x",await eU(i)):(t=await eT({factoryContract:r,adminAddress:s,accountSalt:null==c?void 0:c.accountSalt,createAccountOverride:null==c?void 0:c.createAccount}),eL(i));let f={sender:i.address,nonce:l,initCode:t,callData:d,maxFeePerGas:u,maxPriorityFeePerGas:p,callGasLimit:0n,verificationGasLimit:0n,preVerificationGas:0n,paymasterAndData:"0x",signature:S.Ld};if(o){let e=await ew({userOp:f,chain:m,client:y,entrypointAddress:null==c?void 0:c.entrypointAddress,paymasterOverride:null==c?void 0:c.paymaster}),t="paymasterAndData"in e?e.paymasterAndData:"0x";if(t&&"0x"!==t&&(f.paymasterAndData=t),e.callGasLimit&&e.verificationGasLimit&&e.preVerificationGas)f.callGasLimit=e.callGasLimit,f.verificationGasLimit=e.verificationGasLimit,f.preVerificationGas=e.preVerificationGas;else{let e=await R({userOp:f,options:a});if(f.callGasLimit=e.callGasLimit,f.verificationGasLimit=e.verificationGasLimit,f.preVerificationGas=e.preVerificationGas,t&&"0x"!==t){let e=await ew({userOp:f,chain:m,client:y,entrypointAddress:null==c?void 0:c.entrypointAddress,paymasterOverride:null==c?void 0:c.paymaster}),t="paymasterAndData"in e?e.paymasterAndData:"0x";t&&"0x"!==t&&(f.paymasterAndData=t)}}}else{let e=await R({userOp:f,options:a});f.callGasLimit=e.callGasLimit,f.verificationGasLimit=e.verificationGasLimit,f.preVerificationGas=e.preVerificationGas}return{...f,signature:"0x"}}async function eM(e){let t;let{userOp:a,chain:n,entrypointAddress:r,adminAccount:i}=e;if("v0.7"===(0,S.bI)(r||S.Ex)){let i=eG(a);t=await eu({contract:(0,s.getContract)({address:r||S.JK,chain:n,client:e.client}),userOp:i})}else t=await ec({contract:(0,s.getContract)({address:r||S.Ex,chain:n,client:e.client}),userOp:a});if(i.signMessage){let e=await i.signMessage({message:{raw:(0,ef.nr)(t)}});return{...a,signature:e}}throw Error("signMessage not implemented in signingAccount")}async function eT(e){let{factoryContract:t,adminAddress:a,accountSalt:n,createAccountOverride:r}=e,i=ee({factoryContract:t,adminAddress:a,accountSalt:n,createAccountOverride:r});return(0,ea.zo)([t.address,await (0,em.encode)(i)])}async function eE(e){let{accountContract:t,chain:a,client:n,entrypointAddress:r,getNonceOverride:i}=e;return i?i(t):ei({contract:(0,s.getContract)({address:r||S.Ex,chain:a,client:n}),key:j(),sender:t.address})}async function eU(e){let t=Date.now();for(;eO(e);){if(Date.now()-t>6e4)throw Error("Account deployment is taking too long (over 1 minute). Please try again.");await new Promise(e=>setTimeout(e,500))}}function eN(e){return"smart"===e.id}let ek=new WeakMap,eB=new WeakMap;async function e_(e,t,a){var n,r,o,c,l;let{personalAccount:u,client:p,chain:y}=t;if(!u)throw Error("Personal wallet does not have an account");let f=null!==(l=a.factoryAddress)&&void 0!==l?l:(0,S.yc)(null===(n=a.overrides)||void 0===n?void 0:n.entrypointAddress),v=null!=y?y:a.chain,h="gasless"in a?a.gasless:a.sponsorGas;if(324===v.id||300===v.id||302===v.id||11124===v.id)return[function(e){let{creationOptions:t,connectionOptions:a,chain:n}=e,r={address:a.personalAccount.address,async sendTransaction(s){var o,c,l,u,p,m;let y={data:s.data,to:null!==(l=s.to)&&void 0!==l?l:void 0,value:null!==(u=s.value)&&void 0!==u?u:0n,chain:(0,i.XY)(s.chainId),client:a.client},f=await (0,d.z)({account:r,transaction:y});if(e.sponsorGas){let e=await J({options:{client:a.client,chain:n,bundlerUrl:null===(p=t.overrides)||void 0===p?void 0:p.bundlerUrl,entrypointAddress:null===(m=t.overrides)||void 0===m?void 0:m.entrypointAddress},transaction:f});f={...f,...e}}let v=await (0,d.P)({account:r,chainId:n.id,eip712Transaction:f});return{transactionHash:(await K({options:{client:a.client,chain:n,bundlerUrl:null===(o=t.overrides)||void 0===o?void 0:o.bundlerUrl,entrypointAddress:null===(c=t.overrides)||void 0===c?void 0:c.entrypointAddress},transaction:f,signedTransaction:v})).transactionHash,client:a.client,chain:n}},async signMessage(e){let{message:t}=e;return a.personalAccount.signMessage({message:t})},async signTypedData(e){let t=(0,m.t)(e);return a.personalAccount.signTypedData(t)},async onTransactionRequested(e){var t,n;return null===(t=(n=a.personalAccount).onTransactionRequested)||void 0===t?void 0:t.call(n,e)}};return r}({creationOptions:a,connectionOptions:t,chain:v,sponsorGas:h}),v];let g=(0,s.getContract)({client:p,address:f,chain:v}),G=await Z({factoryContract:g,adminAddress:u.address,predictAddressOverride:null===(r=a.overrides)||void 0===r?void 0:r.predictAddress,accountSalt:null===(o=a.overrides)||void 0===o?void 0:o.accountSalt,accountAddress:null===(c=a.overrides)||void 0===c?void 0:c.accountAddress}).then(e=>e).catch(e=>{throw Error("Failed to get account address with factory contract ".concat(g.address," on chain ID ").concat(v.id,": ").concat((null==e?void 0:e.message)||"unknown error"),{cause:e})}),w=(0,s.getContract)({client:p,address:G,chain:v}),b=await eH({...a,chain:v,sponsorGas:h,personalAccount:u,accountContract:w,factoryContract:g,client:p});return ek.set(u,e),eB.set(e,u),[b,v]}async function eS(e){let t=eB.get(e);t&&(ek.delete(t),eB.delete(e))}async function eH(e){let{accountContract:t}=e,r={address:(0,u.Kn)(t.address),async sendTransaction(a){var n,r,i;let s;let o=null===(n=e.overrides)||void 0===n?void 0:n.erc20Paymaster;if(o){await ej({accountContract:t,erc20Paymaster:o,options:e});let a=async()=>({paymasterAndData:(0,p.concatHex)([o.address,null==o?void 0:o.token]),paymaster:o.address,paymasterData:"0x"});s=(null===(i=e.overrides)||void 0===i?void 0:i.paymaster)||a}return eF({executeTx:et({accountContract:t,transaction:a,executeOverride:null===(r=e.overrides)||void 0===r?void 0:r.execute}),options:{...e,overrides:{...e.overrides,paymaster:s}}})},async sendBatchTransaction(a){var n;return eF({executeTx:function(e){let{accountContract:t,transactions:a,executeBatchOverride:n}=e;return n?n(t,a):(0,Q.A)({contract:t,method:"function executeBatch(address[], uint256[], bytes[])",params:[a.map(e=>e.to||""),a.map(e=>e.value||0n),a.map(e=>e.data||"0x")]})}({accountContract:t,transactions:a,executeBatchOverride:null===(n=e.overrides)||void 0===n?void 0:n.executeBatch}),options:e})},async signMessage(n){let i,{message:s}=n,[{isContractDeployed:o},{readContract:c},{encodeAbiParameters:l},{hashMessage:d},{checkContractWalletSignature:u}]=await Promise.all([Promise.resolve().then(a.bind(a,88267)),Promise.resolve().then(a.bind(a,94293)),Promise.resolve().then(a.bind(a,97686)),a.e(49045).then(a.bind(a,49045)),a.e(45941).then(a.bind(a,45941))]);await o(t)||await ez({options:e,account:r,accountContract:t});let p=d(s),m=!1;try{await c({contract:t,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[p]}),m=!0}catch(e){}if(m){let a=l([{type:"bytes32"}],[p]);i=await e.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:e.chain.id,verifyingContract:t.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:a}})}else i=await e.personalAccount.signMessage({message:s});if(await u({contract:t,message:s,signature:i}))return i;throw Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},async signTypedData(i){var s,o,c;let l;let d=(0,m.t)(i),[{isContractDeployed:u},{readContract:p},{encodeAbiParameters:y},{checkContractWalletSignedTypedData:f}]=await Promise.all([Promise.resolve().then(a.bind(a,88267)),Promise.resolve().then(a.bind(a,94293)),Promise.resolve().then(a.bind(a,97686)),a.e(91348).then(a.bind(a,91348))]);if((null===(o=d.domain)||void 0===o?void 0:null===(s=o.verifyingContract)||void 0===s?void 0:s.toLowerCase())===(null===(c=t.address)||void 0===c?void 0:c.toLowerCase()))return e.personalAccount.signTypedData(d);await u(t)||await ez({options:e,account:r,accountContract:t});let v=(0,n.Jv)(d),h=!1;try{await p({contract:t,method:"function getMessageHash(bytes32 _hash) public view returns (bytes32)",params:[v]}),h=!0}catch(e){}if(h){let a=y([{type:"bytes32"}],[v]);l=await e.personalAccount.signTypedData({domain:{name:"Account",version:"1",chainId:e.chain.id,verifyingContract:t.address},primaryType:"AccountMessage",types:{AccountMessage:[{name:"message",type:"bytes"}]},message:{message:a}})}else l=await e.personalAccount.signTypedData(d);if(await f({contract:t,data:d,signature:l}))return l;throw Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.")},async onTransactionRequested(t){var a,n;return null===(a=(n=e.personalAccount).onTransactionRequested)||void 0===a?void 0:a.call(n,t)}};return r}async function ej(e){var t;let{accountContract:a,erc20Paymaster:n,options:i}=e,d=n.token,u=(0,s.getContract)({address:d,chain:a.chain,client:a.client});if(await (0,o.M1)({contract:u,owner:a.address,spender:n.address})>0n)return;let p=(0,c.d)({contract:u,spender:n.address,amountWei:r.$H-1n}),m=await (0,l.n)({transaction:p,from:a.address}),y=et({accountContract:a,transaction:m,executeOverride:null===(t=i.overrides)||void 0===t?void 0:t.execute});await eF({executeTx:y,options:{...i,overrides:{...i.overrides,erc20Paymaster:void 0}}})}async function ez(e){let{options:t,account:n,accountContract:r}=e,[{sendTransaction:i},{prepareTransaction:s}]=await Promise.all([Promise.resolve().then(a.bind(a,71551)),Promise.resolve().then(a.bind(a,26554))]),o=s({client:t.client,chain:t.chain,to:r.address,value:0n,gas:50000n});return await i({transaction:o,account:n})}async function eF(e){var t,a,n;let{executeTx:r,options:i}=e,s=await eC({transaction:r,factoryContract:i.factoryContract,accountContract:i.accountContract,adminAddress:i.personalAccount.address,sponsorGas:i.sponsorGas,overrides:i.overrides}),o=await eM({client:i.client,chain:i.chain,adminAccount:i.personalAccount,entrypointAddress:null===(t=i.overrides)||void 0===t?void 0:t.entrypointAddress,userOp:s}),c={chain:i.chain,client:i.client,bundlerUrl:null===(a=i.overrides)||void 0===a?void 0:a.bundlerUrl,entrypointAddress:null===(n=i.overrides)||void 0===n?void 0:n.entrypointAddress},l=await F({options:c,userOp:o}),d=await eP({...i,userOpHash:l});return ex(i.accountContract),{client:i.client,chain:i.chain,transactionHash:d.transactionHash}}},63121:function(e,t,a){a.d(t,{Jv:function(){return c}});var n=a(8580),r=a(3556),i=a(15578),s=a(30206),o=a(89995);function c(e){let{domain:t={},message:a,primaryType:n}=e,i={EIP712Domain:(0,o.cj)({domain:t}),...e.types};(0,o.iC)({domain:t,message:a,primaryType:n,types:i});let c=["0x1901"];return t&&c.push(function(e){let{domain:t,types:a}=e;return l({data:t,primaryType:"EIP712Domain",types:a})}({domain:t,types:i})),"EIP712Domain"!==n&&c.push(l({data:a,primaryType:n,types:i})),(0,s.w)((0,r.zo)(c))}function l(e){let{data:t,primaryType:a,types:r}=e,o=function e(t){let{data:a,primaryType:r,types:o}=t,c=[{type:"bytes32"}],l=[function(e){let{primaryType:t,types:a}=e,n=(0,i.NC)(function(e){let{primaryType:t,types:a}=e,n="",r=function e(t){let{primaryType:a,types:n}=t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,i=a.match(/^\w*/u),s=null==i?void 0:i[0];if(r.has(s)||void 0===n[s])return r;for(let t of(r.add(s),n[s]))e({primaryType:t.type,types:n},r);return r}({primaryType:t,types:a});for(let e of(r.delete(t),[t,...Array.from(r).sort()]))n+="".concat(e,"(").concat(a[e].map(e=>{let{name:t,type:a}=e;return"".concat(a," ").concat(t)}).join(","),")");return n}({primaryType:t,types:a}));return(0,s.w)(n)}({primaryType:r,types:o})];for(let t of o[r]){let[r,d]=function t(a){let{types:r,name:o,type:c,value:l}=a;if(void 0!==r[c])return[{type:"bytes32"},(0,s.w)(e({data:l,primaryType:c,types:r}))];if("bytes"===c){let e=l.length%2?"0":"";return l="0x".concat(e+l.slice(2)),[{type:"bytes32"},(0,s.w)(l)]}if("string"===c)return[{type:"bytes32"},(0,s.w)((0,i.NC)(l))];if(c.lastIndexOf("]")===c.length-1){let e=c.slice(0,c.lastIndexOf("[")),a=l.map(a=>t({name:o,type:e,types:r,value:a}));return[{type:"bytes32"},(0,s.w)((0,n.E)(a.map(e=>{let[t]=e;return t}),a.map(e=>{let[,t]=e;return t})))]}return[{type:c},l]}({types:o,name:t.name,type:t.type,value:a[t.name]});c.push(r),l.push(d)}return(0,n.E)(c,l)}({data:t,primaryType:a,types:r});return(0,s.w)(o)}}}]);