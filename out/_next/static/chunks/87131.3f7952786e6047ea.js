"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87131],{87131:function(t,n,e){e.d(n,{getActiveClaimCondition:function(){return p}});var a=e(94293);let i=[{type:"uint256",name:"_tokenId"}],o=[{type:"uint256"}];async function r(t){return(0,a.readContract)({contract:t.contract,method:["0x5ab063e8",i,o],params:[t.tokenId]})}let c=[{type:"uint256",name:"_tokenId"},{type:"uint256",name:"_conditionId"}],u=[{type:"tuple",name:"condition",components:[{type:"uint256",name:"startTimestamp"},{type:"uint256",name:"maxClaimableSupply"},{type:"uint256",name:"supplyClaimed"},{type:"uint256",name:"quantityLimitPerWallet"},{type:"bytes32",name:"merkleRoot"},{type:"uint256",name:"pricePerToken"},{type:"address",name:"currency"},{type:"string",name:"metadata"}]}];async function m(t){return(0,a.readContract)({contract:t.contract,method:["0xd45b28d7",c,u],params:[t.tokenId,t.conditionId]})}async function p(t){try{let n=await r(t);return m({...t,conditionId:n})}catch(t){throw Error("Claim condition not found")}}}}]);