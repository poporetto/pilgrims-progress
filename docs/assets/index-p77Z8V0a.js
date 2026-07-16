var eh=Object.defineProperty;var nh=(i,t,e)=>t in i?eh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var O=(i,t,e)=>nh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="166",ih=0,jo=1,sh=2,lc=1,cc=2,Ln=3,ri=0,qe=1,Mn=2,ei=0,as=1,Zo=2,$o=3,Jo=4,rh=5,wi=100,ah=101,oh=102,lh=103,ch=104,hh=200,dh=201,uh=202,fh=203,Ba=204,za=205,ph=206,mh=207,gh=208,_h=209,vh=210,xh=211,yh=212,Mh=213,wh=214,Sh=0,bh=1,Eh=2,kr=3,Th=4,Ah=5,Ch=6,Rh=7,Mo=0,Ph=1,Ih=2,ni=0,Lh=1,Dh=2,Uh=3,kh=4,Nh=5,Fh=6,Oh=7,hc=300,cs=301,hs=302,Ha=303,Ga=304,Xr=306,Va=1e3,bi=1001,Wa=1002,nn=1003,Bh=1004,Js=1005,hn=1006,ea=1007,Ei=1008,Bn=1009,dc=1010,uc=1011,Gs=1012,wo=1013,Ti=1014,Un=1015,qs=1016,So=1017,bo=1018,ds=1020,fc=35902,pc=1021,mc=1022,pn=1023,gc=1024,_c=1025,os=1026,us=1027,vc=1028,Eo=1029,xc=1030,To=1031,Ao=1033,Cr=33776,Rr=33777,Pr=33778,Ir=33779,Xa=35840,qa=35841,Ya=35842,Ka=35843,ja=36196,Za=37492,$a=37496,Ja=37808,Qa=37809,to=37810,eo=37811,no=37812,io=37813,so=37814,ro=37815,ao=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,Lr=36492,fo=36494,po=36495,yc=36283,mo=36284,go=36285,_o=36286,zh=3200,Hh=3201,Mc=0,Gh=1,Jn="",xn="srgb",oi="srgb-linear",Co="display-p3",qr="display-p3-linear",Nr="linear",ue="srgb",Fr="rec709",Or="p3",Ii=7680,Qo=519,Vh=512,Wh=513,Xh=514,wc=515,qh=516,Yh=517,Kh=518,jh=519,vo=35044,tl="300 es",kn=2e3,Br=2001;class gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let el=1234567;const Fs=Math.PI/180,Vs=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Ro(i,t){return(i%t+t)%t}function Zh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $h(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function Jh(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function Qh(i,t=1){return t-Math.abs(Ro(i,t*2)-t)}function td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function id(i,t){return i+Math.random()*(t-i)}function sd(i){return i*(.5-Math.random())}function rd(i){i!==void 0&&(el=i);let t=el+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(i){return i*Fs}function od(i){return i*Vs}function ld(i){return(i&i-1)===0&&i!==0}function cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),m=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*m,o*c);break;case"YZY":i.set(l*m,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*m,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qt={DEG2RAD:Fs,RAD2DEG:Vs,generateUUID:Fn,clamp:Ue,euclideanModulo:Ro,mapLinear:Zh,inverseLerp:$h,lerp:Os,damp:Jh,pingpong:Qh,smoothstep:td,smootherstep:ed,randInt:nd,randFloat:id,randFloatSpread:sd,seededRandom:rd,degToRad:ad,radToDeg:od,isPowerOfTwo:ld,ceilPowerOfTwo:cd,floorPowerOfTwo:hd,setQuaternionFromProperEuler:dd,normalize:ae,denormalize:dn};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],m=n[2],p=n[5],g=n[8],_=s[0],f=s[3],d=s[6],b=s[1],w=s[4],E=s[7],k=s[2],P=s[5],I=s[8];return r[0]=a*_+o*b+l*k,r[3]=a*f+o*w+l*P,r[6]=a*d+o*E+l*I,r[1]=c*_+h*b+u*k,r[4]=c*f+h*w+u*P,r[7]=c*d+h*E+u*I,r[2]=m*_+p*b+g*k,r[5]=m*f+p*w+g*P,r[8]=m*d+p*E+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,m=o*l-h*r,p=c*r-a*l,g=e*u+n*m+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=m*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(na.makeScale(t,e)),this}rotate(t){return this.premultiply(na.makeRotation(-t)),this}translate(t,e){return this.premultiply(na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Xt;function Sc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){const i=zr("canvas");return i.style.display="block",i}const nl={};function Po(i){i in nl||(nl[i]=!0,console.warn(i))}function fd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const il=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sl=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qs={[oi]:{transfer:Nr,primaries:Fr,toReference:i=>i,fromReference:i=>i},[xn]:{transfer:ue,primaries:Fr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qr]:{transfer:Nr,primaries:Or,toReference:i=>i.applyMatrix3(sl),fromReference:i=>i.applyMatrix3(il)},[Co]:{transfer:ue,primaries:Or,toReference:i=>i.convertSRGBToLinear().applyMatrix3(sl),fromReference:i=>i.applyMatrix3(il).convertLinearToSRGB()}},pd=new Set([oi,qr]),oe={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!pd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Qs[t].toReference,s=Qs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Qs[i].primaries},getTransfer:function(i){return i===Jn?Nr:Qs[i].transfer}};function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Li;class md{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=zr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gd=0;class bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sa(s[a].image)):r.push(sa(s[a]))}else r=sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;class Ve extends gs{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=bi,s=bi,r=hn,a=Ei,o=pn,l=Bn,c=Ve.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Fn(),this.name="",this.source=new bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=hc;Ve.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],m=l[1],p=l[5],g=l[9],_=l[2],f=l[6],d=l[10];if(Math.abs(h-m)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+m)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,E=(p+1)/2,k=(d+1)/2,P=(h+m)/4,I=(u+_)/4,z=(g+f)/4;return w>E&&w>k?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=P/n,r=I/n):E>k?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=z/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=I/r,s=z/r),this.set(n,s,r,e),this}let b=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(m-h)*(m-h));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(u-_)/b,this.z=(m-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ec extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xd extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const m=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=m,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==m||c!==p||h!==g){let f=1-o;const d=l*m+c*p+h*g+u*_,b=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const k=Math.sqrt(w),P=Math.atan2(k,d*b);f=Math.sin(f*P)/k,o=Math.sin(o*P)/k}const E=o*b;if(l=l*f+m*E,c=c*f+p*E,h=h*f+g*E,u=u*f+_*E,f===1-o){const k=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=k,c*=k,h*=k,u*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],m=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*m,t[e+1]=l*g+h*m+c*u-o*p,t[e+2]=c*g+h*p+o*m-l*u,t[e+3]=h*g-o*u-l*m-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),m=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=m*h*u+c*p*g,this._y=c*p*u-m*h*g,this._z=c*h*g+m*p*u,this._w=c*h*u-m*p*g;break;case"YXZ":this._x=m*h*u+c*p*g,this._y=c*p*u-m*h*g,this._z=c*h*g-m*p*u,this._w=c*h*u+m*p*g;break;case"ZXY":this._x=m*h*u-c*p*g,this._y=c*p*u+m*h*g,this._z=c*h*g+m*p*u,this._w=c*h*u-m*p*g;break;case"ZYX":this._x=m*h*u-c*p*g,this._y=c*p*u+m*h*g,this._z=c*h*g-m*p*u,this._w=c*h*u+m*p*g;break;case"YZX":this._x=m*h*u+c*p*g,this._y=c*p*u+m*h*g,this._z=c*h*g-m*p*u,this._w=c*h*u-m*p*g;break;case"XZY":this._x=m*h*u-c*p*g,this._y=c*p*u-m*h*g,this._z=c*h*g+m*p*u,this._w=c*h*u+m*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],m=n+o+u;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=a*u+this._w*m,this._x=n*u+this._x*m,this._y=s*u+this._y*m,this._z=r*u+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new R,rl=new Ys;class Ks{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),er.subVectors(this.max,ws),Di.subVectors(t.a,ws),Ui.subVectors(t.b,ws),ki.subVectors(t.c,ws),Vn.subVectors(Ui,Di),Wn.subVectors(ki,Ui),hi.subVectors(Di,ki);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-hi.z,hi.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,hi.z,0,-hi.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-hi.y,hi.x,0];return!aa(e,Di,Ui,ki,er)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Di,Ui,ki,er))?!1:(nr.crossVectors(Vn,Wn),e=[nr.x,nr.y,nr.z],aa(e,Di,Ui,ki,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new R,new R,new R,new R,new R,new R,new R,new R],rn=new R,tr=new Ks,Di=new R,Ui=new R,ki=new R,Vn=new R,Wn=new R,hi=new R,ws=new R,er=new R,nr=new R,di=new R;function aa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yd=new Ks,Ss=new R,oa=new R;class Io{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(oa)),this.expandByPoint(Ss.copy(t.center).sub(oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new R,la=new R,ir=new R,Xn=new R,ca=new R,sr=new R,ha=new R;class Md{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(la);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=Xn.dot(this.direction),l=-Xn.dot(ir),c=Xn.lengthSq(),h=Math.abs(1-a*a);let u,m,p,g;if(h>0)if(u=a*l-o,m=a*o-l,g=r*h,u>=0)if(m>=-g)if(m<=g){const _=1/h;u*=_,m*=_,p=u*(u+a*m+2*o)+m*(a*u+m+2*l)+c}else m=r,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;else m=-r,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;else m<=-g?(u=Math.max(0,-(-a*r+o)),m=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+m*(m+2*l)+c):m<=g?(u=0,m=Math.min(Math.max(-r,-l),r),p=m*(m+2*l)+c):(u=Math.max(0,-(a*r+o)),m=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+m*(m+2*l)+c);else m=a>0?-r:r,u=Math.max(0,-(a*m+o)),p=-u*u+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(la).addScaledVector(ir,m),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,a=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,a=(t.min.y-m.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-m.z)*u,l=(t.max.z-m.z)*u):(o=(t.max.z-m.z)*u,l=(t.min.z-m.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){ca.subVectors(e,t),sr.subVectors(n,t),ha.crossVectors(ca,sr);let a=this.direction.dot(ha),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const l=o*this.direction.dot(sr.crossVectors(Xn,sr));if(l<0)return null;const c=o*this.direction.dot(ca.cross(Xn));if(c<0||l+c>a)return null;const h=-o*Xn.dot(ha);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,a,o,l,c,h,u,m,p,g,_,f){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,m,p,g,_,f)}set(t,e,n,s,r,a,o,l,c,h,u,m,p,g,_,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=m,d[3]=p,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const m=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=m-_*c,e[9]=-o*l,e[2]=_-m*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const m=l*h,p=l*u,g=c*h,_=c*u;e[0]=m+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+m*o,e[10]=a*l}else if(t.order==="ZXY"){const m=l*h,p=l*u,g=c*h,_=c*u;e[0]=m-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-m*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const m=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=m*c+_,e[1]=l*u,e[5]=_*c+m,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const m=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-m*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=m-_*u}else if(t.order==="XZY"){const m=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=m*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Sd)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),qn.crossVectors(n,je),qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),qn.crossVectors(n,je)),qn.normalize(),rr.crossVectors(je,qn),s[0]=qn.x,s[4]=rr.x,s[8]=je.x,s[1]=qn.y,s[5]=rr.y,s[9]=je.y,s[2]=qn.z,s[6]=rr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],m=n[9],p=n[13],g=n[2],_=n[6],f=n[10],d=n[14],b=n[3],w=n[7],E=n[11],k=n[15],P=s[0],I=s[4],z=s[8],S=s[12],y=s[1],A=s[5],H=s[9],G=s[13],j=s[2],Z=s[6],Y=s[10],$=s[14],K=s[3],lt=s[7],vt=s[11],xt=s[15];return r[0]=a*P+o*y+l*j+c*K,r[4]=a*I+o*A+l*Z+c*lt,r[8]=a*z+o*H+l*Y+c*vt,r[12]=a*S+o*G+l*$+c*xt,r[1]=h*P+u*y+m*j+p*K,r[5]=h*I+u*A+m*Z+p*lt,r[9]=h*z+u*H+m*Y+p*vt,r[13]=h*S+u*G+m*$+p*xt,r[2]=g*P+_*y+f*j+d*K,r[6]=g*I+_*A+f*Z+d*lt,r[10]=g*z+_*H+f*Y+d*vt,r[14]=g*S+_*G+f*$+d*xt,r[3]=b*P+w*y+E*j+k*K,r[7]=b*I+w*A+E*Z+k*lt,r[11]=b*z+w*H+E*Y+k*vt,r[15]=b*S+w*G+E*$+k*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],m=t[10],p=t[14],g=t[3],_=t[7],f=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*m+n*c*m+s*o*p-n*l*p)+_*(+e*l*p-e*c*m+r*a*m-s*a*p+s*c*h-r*l*h)+f*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*m+s*a*u-n*a*m+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],m=t[10],p=t[11],g=t[12],_=t[13],f=t[14],d=t[15],b=u*f*c-_*m*c+_*l*p-o*f*p-u*l*d+o*m*d,w=g*m*c-h*f*c-g*l*p+a*f*p+h*l*d-a*m*d,E=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,k=g*u*l-h*_*l-g*o*m+a*_*m+h*o*f-a*u*f,P=e*b+n*w+s*E+r*k;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=b*I,t[1]=(_*m*r-u*f*r-_*s*p+n*f*p+u*s*d-n*m*d)*I,t[2]=(o*f*r-_*l*r+_*s*c-n*f*c-o*s*d+n*l*d)*I,t[3]=(u*l*r-o*m*r-u*s*c+n*m*c+o*s*p-n*l*p)*I,t[4]=w*I,t[5]=(h*f*r-g*m*r+g*s*p-e*f*p-h*s*d+e*m*d)*I,t[6]=(g*l*r-a*f*r-g*s*c+e*f*c+a*s*d-e*l*d)*I,t[7]=(a*m*r-h*l*r+h*s*c-e*m*c-a*s*p+e*l*p)*I,t[8]=E*I,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*I,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*I,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*I,t[12]=k*I,t[13]=(h*_*s-g*u*s+g*n*m-e*_*m-h*n*f+e*u*f)*I,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*f-e*o*f)*I,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*m+e*o*m)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,m=r*c,p=r*h,g=r*u,_=a*h,f=a*u,d=o*u,b=l*c,w=l*h,E=l*u,k=n.x,P=n.y,I=n.z;return s[0]=(1-(_+d))*k,s[1]=(p+E)*k,s[2]=(g-w)*k,s[3]=0,s[4]=(p-E)*P,s[5]=(1-(m+d))*P,s[6]=(f+b)*P,s[7]=0,s[8]=(g+w)*I,s[9]=(f-b)*I,s[10]=(1-(m+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const a=Ni.set(s[4],s[5],s[6]).length(),o=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const c=1/r,h=1/a,u=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=kn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s);let p,g;if(o===kn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Br)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=kn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),m=(e+t)*c,p=(n+s)*h;let g,_;if(o===kn)g=(a+r)*u,_=-2*u;else if(o===Br)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new R,an=new _e,wd=new R(0,0,0),Sd=new R(1,1,1),qn=new R,rr=new R,je=new R,al=new _e,ol=new Ys;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],m=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ol.setFromEuler(this),this.setFromQuaternion(ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bd=0;const ll=new R,Fi=new Ys,Cn=new _e,ar=new R,bs=new R,Ed=new R,Td=new Ys,cl=new R(1,0,0),hl=new R(0,1,0),dl=new R(0,0,1),ul={type:"added"},Ad={type:"removed"},Oi={type:"childadded",child:null},da={type:"childremoved",child:null};class Pe extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new R,e=new Sn,n=new Ys,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Xt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(cl,t)}rotateY(t){return this.rotateOnAxis(hl,t)}rotateZ(t){return this.rotateOnAxis(dl,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cl,t)}translateY(t){return this.translateOnAxis(hl,t)}translateZ(t){return this.translateOnAxis(dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(bs,ar,this.up):Cn.lookAt(ar,bs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ul),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ul),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),m=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),m.length>0&&(n.skeletons=m),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new R(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new R,Rn=new R,ua=new R,Pn=new R,Bi=new R,zi=new R,fl=new R,fa=new R,pa=new R,ma=new R;class un{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Rn.subVectors(n,e),ua.subVectors(t,e);const a=on.dot(on),o=on.dot(Rn),l=on.dot(ua),c=Rn.dot(Rn),h=Rn.dot(ua),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const m=1/u,p=(c*l-o*h)*m,g=(a*h-o*l)*m;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Rn.subVectors(t,e),on.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Bi.subVectors(s,n),zi.subVectors(r,n),fa.subVectors(t,n);const l=Bi.dot(fa),c=zi.dot(fa);if(l<=0&&c<=0)return e.copy(n);pa.subVectors(t,s);const h=Bi.dot(pa),u=zi.dot(pa);if(h>=0&&u<=h)return e.copy(s);const m=l*u-h*c;if(m<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Bi,a);ma.subVectors(t,r);const p=Bi.dot(ma),g=zi.dot(ma);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(zi,o);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return fl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(fl,o);const d=1/(f+_+m);return a=_*d,o=m*d,e.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},or={h:0,s:0,l:0};function ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Ro(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ga(a,r,t+1/3),this.g=ga(a,r,t),this.b=ga(a,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=Ac[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return oe.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Ue(Fe.r*255,0,255))*65536+Math.round(Ue(Fe.g*255,0,255))*256+Math.round(Ue(Fe.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=xn){oe.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(or);const n=Os(Yn.h,or.h,e),s=Os(Yn.s,or.s,e),r=Os(Yn.l,or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new qt;qt.NAMES=Ac;let Cd=0;class _s extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=as,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=za,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Kt extends _s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new R,lr=new zt;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Po("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vo&&(t.usage=this.usage),t}}class Cc extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rc extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Be extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rd=0;const tn=new _e,_a=new Pe,Hi=new R,Ze=new Ks,Es=new Ks,Re=new R;class gn extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sc(t)?Rc:Cc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Ze.min,Es.min),Ze.expandByPoint(Re),Re.addVectors(Ze.max,Es.max),Ze.expandByPoint(Re)):(Ze.expandByPoint(Es.min),Ze.expandByPoint(Es.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Hi.fromBufferAttribute(t,c),Re.add(Hi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new R,l[z]=new R;const c=new R,h=new R,u=new R,m=new zt,p=new zt,g=new zt,_=new R,f=new R;function d(z,S,y){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),m.fromBufferAttribute(r,z),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(m),g.sub(m);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),o[z].add(_),o[S].add(_),o[y].add(_),l[z].add(f),l[S].add(f),l[y].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let z=0,S=b.length;z<S;++z){const y=b[z],A=y.start,H=y.count;for(let G=A,j=A+H;G<j;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const w=new R,E=new R,k=new R,P=new R;function I(z){k.fromBufferAttribute(s,z),P.copy(k);const S=o[z];w.copy(S),w.sub(k.multiplyScalar(k.dot(S))).normalize(),E.crossVectors(P,S);const A=E.dot(l[z])<0?-1:1;a.setXYZW(z,w.x,w.y,w.z,A)}for(let z=0,S=b.length;z<S;++z){const y=b[z],A=y.start,H=y.count;for(let G=A,j=A+H;G<j;G+=3)I(t.getX(G+0)),I(t.getX(G+1)),I(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let m=0,p=t.count;m<p;m+=3){const g=t.getX(m+0),_=t.getX(m+1),f=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,p=e.count;m<p;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),a.fromBufferAttribute(e,m+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,m=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)m[g++]=c[p++]}return new mn(m,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const m=c[h],p=t(m,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,m=c.length;u<m;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let m=0,p=u.length;m<p;m++)h.push(u[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new _e,ui=new Md,cr=new Io,ml=new R,Gi=new R,Vi=new R,Wi=new R,va=new R,hr=new R,dr=new zt,ur=new zt,fr=new zt,gl=new R,_l=new R,vl=new R,pr=new R,mr=new R;class gt extends Pe{constructor(t=new gn,e=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(va.fromBufferAttribute(u,t),a?hr.addScaledVector(va,h):hr.addScaledVector(va.sub(e),h))}e.add(hr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(cr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(cr,ml)===null||ui.origin.distanceToSquared(ml)>(t.far-t.near)**2))&&(pl.copy(r).invert(),ui.copy(t.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,m=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=m.length;g<_;g++){const f=m[g],d=a[f.materialIndex],b=Math.max(f.start,p.start),w=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let E=b,k=w;E<k;E+=3){const P=o.getX(E),I=o.getX(E+1),z=o.getX(E+2);s=gr(this,d,t,n,c,h,u,P,I,z),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let f=g,d=_;f<d;f+=3){const b=o.getX(f),w=o.getX(f+1),E=o.getX(f+2);s=gr(this,a,t,n,c,h,u,b,w,E),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=m.length;g<_;g++){const f=m[g],d=a[f.materialIndex],b=Math.max(f.start,p.start),w=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=b,k=w;E<k;E+=3){const P=E,I=E+1,z=E+2;s=gr(this,d,t,n,c,h,u,P,I,z),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=g,d=_;f<d;f+=3){const b=f,w=f+1,E=f+2;s=gr(this,a,t,n,c,h,u,b,w,E),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Pd(i,t,e,n,s,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ri,o),l===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(mr);return c<e.near||c>e.far?null:{distance:c,point:mr.clone(),object:i}}function gr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Gi),i.getVertexPosition(l,Vi),i.getVertexPosition(c,Wi);const h=Pd(i,t,e,n,Gi,Vi,Wi,pr);if(h){s&&(dr.fromBufferAttribute(s,o),ur.fromBufferAttribute(s,l),fr.fromBufferAttribute(s,c),h.uv=un.getInterpolation(pr,Gi,Vi,Wi,dr,ur,fr,new zt)),r&&(dr.fromBufferAttribute(r,o),ur.fromBufferAttribute(r,l),fr.fromBufferAttribute(r,c),h.uv1=un.getInterpolation(pr,Gi,Vi,Wi,dr,ur,fr,new zt)),a&&(gl.fromBufferAttribute(a,o),_l.fromBufferAttribute(a,l),vl.fromBufferAttribute(a,c),h.normal=un.getInterpolation(pr,Gi,Vi,Wi,gl,_l,vl,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};un.getNormal(Gi,Vi,Wi,u.normal),h.face=u}return h}class Ct extends gn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let m=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function g(_,f,d,b,w,E,k,P,I,z,S){const y=E/I,A=k/z,H=E/2,G=k/2,j=P/2,Z=I+1,Y=z+1;let $=0,K=0;const lt=new R;for(let vt=0;vt<Y;vt++){const xt=vt*A-G;for(let Ht=0;Ht<Z;Ht++){const te=Ht*y-H;lt[_]=te*b,lt[f]=xt*w,lt[d]=j,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[f]=0,lt[d]=P>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Ht/I),u.push(1-vt/z),$+=1}}for(let vt=0;vt<z;vt++)for(let xt=0;xt<I;xt++){const Ht=m+xt+Z*vt,te=m+xt+Z*(vt+1),J=m+(xt+1)+Z*(vt+1),nt=m+(xt+1)+Z*vt;l.push(Ht,te,nt),l.push(te,J,nt),K+=6}o.addGroup(p,K,S),p+=K,m+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=fs(i[e]);for(const s in n)t[s]=n[s]}return t}function Id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Ld={clone:fs,merge:He};var Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends _s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ic extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new R,xl=new zt,yl=new zt;class Xe extends Ic{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,xl,yl),e.subVectors(yl,xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class kd extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xe(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new Xe(Xi,qi,t,e);r.layers=this.layers,this.add(r);const a=new Xe(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new Xe(Xi,qi,t,e);o.layers=this.layers,this.add(o);const l=new Xe(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,m,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lc extends Ve{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nd extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ct(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ei});r.uniforms.tEquirect.value=e;const a=new gt(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=hn),new kd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const xa=new R,Fd=new R,Od=new Xt;class _i{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xa.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Od.getNormalMatrix(t),s=this.coplanarPoint(xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Io,_r=new R;class Lo{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,a=new _i){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],m=s[7],p=s[8],g=s[9],_=s[10],f=s[11],d=s[12],b=s[13],w=s[14],E=s[15];if(n[0].setComponents(l-r,m-c,f-p,E-d).normalize(),n[1].setComponents(l+r,m+c,f+p,E+d).normalize(),n[2].setComponents(l+a,m+h,f+g,E+b).normalize(),n[3].setComponents(l-a,m-h,f-g,E-b).normalize(),n[4].setComponents(l-o,m-u,f-_,E-w).normalize(),e===kn)n[5].setComponents(l+o,m+u,f+_,E+w).normalize();else if(e===Br)n[5].setComponents(o,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_r.x=s.normal.x>0?t.max.x:t.min.x,_r.y=s.normal.y>0?t.max.y:t.min.y,_r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,m=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&m.length===0&&i.bufferSubData(c,0,h),m.length!==0){for(let p=0,g=m.length;p<g;p++){const _=m[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Yr extends gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,m=e/l,p=[],g=[],_=[],f=[];for(let d=0;d<h;d++){const b=d*m-a;for(let w=0;w<c;w++){const E=w*u-r;g.push(E,-b,0),_.push(0,0,1),f.push(w/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const w=b+c*d,E=b+c*(d+1),k=b+1+c*(d+1),P=b+1+c*d;p.push(w,E,P),p.push(E,k,P)}this.setIndex(p),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.widthSegments,t.heightSegments)}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,du=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gu="gl_FragColor = linearToOutputTexel( gl_FragColor );",_u=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Su=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ju=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,df=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,If=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:zd,alphahash_pars_fragment:Hd,alphamap_fragment:Gd,alphamap_pars_fragment:Vd,alphatest_fragment:Wd,alphatest_pars_fragment:Xd,aomap_fragment:qd,aomap_pars_fragment:Yd,batching_pars_vertex:Kd,batching_vertex:jd,begin_vertex:Zd,beginnormal_vertex:$d,bsdfs:Jd,iridescence_fragment:Qd,bumpmap_pars_fragment:tu,clipping_planes_fragment:eu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:iu,clipping_planes_vertex:su,color_fragment:ru,color_pars_fragment:au,color_pars_vertex:ou,color_vertex:lu,common:cu,cube_uv_reflection_fragment:hu,defaultnormal_vertex:du,displacementmap_pars_vertex:uu,displacementmap_vertex:fu,emissivemap_fragment:pu,emissivemap_pars_fragment:mu,colorspace_fragment:gu,colorspace_pars_fragment:_u,envmap_fragment:vu,envmap_common_pars_fragment:xu,envmap_pars_fragment:yu,envmap_pars_vertex:Mu,envmap_physical_pars_fragment:Lu,envmap_vertex:wu,fog_vertex:Su,fog_pars_vertex:bu,fog_fragment:Eu,fog_pars_fragment:Tu,gradientmap_pars_fragment:Au,lightmap_pars_fragment:Cu,lights_lambert_fragment:Ru,lights_lambert_pars_fragment:Pu,lights_pars_begin:Iu,lights_toon_fragment:Du,lights_toon_pars_fragment:Uu,lights_phong_fragment:ku,lights_phong_pars_fragment:Nu,lights_physical_fragment:Fu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Bu,lights_fragment_maps:zu,lights_fragment_end:Hu,logdepthbuf_fragment:Gu,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Xu,map_fragment:qu,map_pars_fragment:Yu,map_particle_fragment:Ku,map_particle_pars_fragment:ju,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:$u,morphinstance_vertex:Ju,morphcolor_vertex:Qu,morphnormal_vertex:tf,morphtarget_pars_vertex:ef,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:af,normal_pars_vertex:of,normal_vertex:lf,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:df,clearcoat_pars_fragment:uf,iridescence_pars_fragment:ff,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:_f,dithering_fragment:vf,dithering_pars_fragment:xf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Sf,shadowmap_vertex:bf,shadowmask_pars_fragment:Ef,skinbase_vertex:Tf,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Rf,specularmap_fragment:Pf,specularmap_pars_fragment:If,tonemapping_fragment:Lf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:kf,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:Of,worldpos_vertex:Bf,background_vert:zf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:Vf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:Yf,distanceRGBA_vert:Kf,distanceRGBA_frag:jf,equirect_vert:Zf,equirect_frag:$f,linedashed_vert:Jf,linedashed_frag:Qf,meshbasic_vert:tp,meshbasic_frag:ep,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:hp,meshphysical_frag:dp,meshtoon_vert:up,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:vp,sprite_frag:xp},ct={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},yn={basic:{uniforms:He([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:He([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:He([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:He([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:He([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:He([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:He([ct.points,ct.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:He([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:He([ct.common,ct.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:He([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:He([ct.sprite,ct.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:He([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:He([ct.lights,ct.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};yn.physical={uniforms:He([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const vr={r:0,b:0,g:0},pi=new Sn,yp=new _e;function Mp(i,t,e,n,s,r,a){const o=new qt(0);let l=r===!0?0:1,c,h,u=null,m=0,p=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function _(b){let w=!1;const E=g(b);E===null?d(o,l):E&&E.isColor&&(d(E,1),w=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(b,w){const E=g(w);E&&(E.isCubeTexture||E.mapping===Xr)?(h===void 0&&(h=new gt(new Ct(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:fs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(w.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yp.makeRotationFromEuler(pi)),h.material.toneMapped=oe.getTransfer(E.colorSpace)!==ue,(u!==E||m!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,m=E.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new gt(new Yr(2,2),new ai({name:"BackgroundMaterial",uniforms:fs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=oe.getTransfer(E.colorSpace)!==ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||m!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,m=E.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,w){b.getRGB(vr,Pc(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),l=w,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:_,addToRenderList:f}}function wp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let r=s,a=!1;function o(y,A,H,G,j){let Z=!1;const Y=u(G,H,A);r!==Y&&(r=Y,c(r.object)),Z=p(y,G,H,j),Z&&g(y,G,H,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(y,A,H,G),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,A,H){const G=H.wireframe===!0;let j=n[y.id];j===void 0&&(j={},n[y.id]=j);let Z=j[A.id];Z===void 0&&(Z={},j[A.id]=Z);let Y=Z[G];return Y===void 0&&(Y=m(l()),Z[G]=Y),Y}function m(y){const A=[],H=[],G=[];for(let j=0;j<e;j++)A[j]=0,H[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:H,attributeDivisors:G,object:y,attributes:{},index:null}}function p(y,A,H,G){const j=r.attributes,Z=A.attributes;let Y=0;const $=H.getAttributes();for(const K in $)if($[K].location>=0){const vt=j[K];let xt=Z[K];if(xt===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),vt===void 0||vt.attribute!==xt||xt&&vt.data!==xt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function g(y,A,H,G){const j={},Z=A.attributes;let Y=0;const $=H.getAttributes();for(const K in $)if($[K].location>=0){let vt=Z[K];vt===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor));const xt={};xt.attribute=vt,vt&&vt.data&&(xt.data=vt.data),j[K]=xt,Y++}r.attributes=j,r.attributesNum=Y,r.index=G}function _(){const y=r.newAttributes;for(let A=0,H=y.length;A<H;A++)y[A]=0}function f(y){d(y,0)}function d(y,A){const H=r.newAttributes,G=r.enabledAttributes,j=r.attributeDivisors;H[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),j[y]!==A&&(i.vertexAttribDivisor(y,A),j[y]=A)}function b(){const y=r.newAttributes,A=r.enabledAttributes;for(let H=0,G=A.length;H<G;H++)A[H]!==y[H]&&(i.disableVertexAttribArray(H),A[H]=0)}function w(y,A,H,G,j,Z,Y){Y===!0?i.vertexAttribIPointer(y,A,H,j,Z):i.vertexAttribPointer(y,A,H,G,j,Z)}function E(y,A,H,G){_();const j=G.attributes,Z=H.getAttributes(),Y=A.defaultAttributeValues;for(const $ in Z){const K=Z[$];if(K.location>=0){let lt=j[$];if(lt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor)),lt!==void 0){const vt=lt.normalized,xt=lt.itemSize,Ht=t.get(lt);if(Ht===void 0)continue;const te=Ht.buffer,J=Ht.type,nt=Ht.bytesPerElement,yt=J===i.INT||J===i.UNSIGNED_INT||lt.gpuType===wo;if(lt.isInterleavedBufferAttribute){const ht=lt.data,Ot=ht.stride,Gt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Yt=0;Yt<K.locationSize;Yt++)d(K.location+Yt,ht.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Yt=0;Yt<K.locationSize;Yt++)f(K.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Yt=0;Yt<K.locationSize;Yt++)w(K.location+Yt,xt/K.locationSize,J,vt,Ot*nt,(Gt+xt/K.locationSize*Yt)*nt,yt)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<K.locationSize;ht++)d(K.location+ht,lt.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<K.locationSize;ht++)f(K.location+ht);i.bindBuffer(i.ARRAY_BUFFER,te);for(let ht=0;ht<K.locationSize;ht++)w(K.location+ht,xt/K.locationSize,J,vt,xt*nt,xt/K.locationSize*ht*nt,yt)}}else if(Y!==void 0){const vt=Y[$];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(K.location,vt);break;case 3:i.vertexAttrib3fv(K.location,vt);break;case 4:i.vertexAttrib4fv(K.location,vt);break;default:i.vertexAttrib1fv(K.location,vt)}}}}b()}function k(){z();for(const y in n){const A=n[y];for(const H in A){const G=A[H];for(const j in G)h(G[j].object),delete G[j];delete A[H]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const H in A){const G=A[H];for(const j in G)h(G[j].object),delete G[j];delete A[H]}delete n[y.id]}function I(y){for(const A in n){const H=n[A];if(H[y.id]===void 0)continue;const G=H[y.id];for(const j in G)h(G[j].object),delete G[j];delete H[y.id]}}function z(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:S,dispose:k,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:f,disableUnusedAttributes:b}}function Sp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,m){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],m[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<m.length;_++)e.update(g,n,m[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==pn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const I=P===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Bn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Un&&!I)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:m,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:d,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:E,maxSamples:k}}function Ep(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new _i,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,m){const p=u.length!==0||m||n!==0||s;return s=m,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,m){e=h(u,m,0)},this.setState=function(u,m,p){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{const b=r?0:n,w=b*4;let E=d.clippingState||null;l.value=E,E=h(g,m,w,p);for(let k=0;k!==w;++k)E[k]=e[k];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,m,p,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=p+_*4,b=m.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<d)&&(f=new Float32Array(d));for(let w=0,E=p;w!==_;++w,E+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Tp(i){let t=new WeakMap;function e(a,o){return o===Ha?a.mapping=cs:o===Ga&&(a.mapping=hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ha||o===Ga)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uc extends Ic{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,Ml=[.125,.215,.35,.446,.526,.582],Si=20,ya=new Uc,wl=new qt;let Ma=null,wa=0,Sa=0,ba=!1;const vi=(1+Math.sqrt(5))/2,Yi=1/vi,Sl=[new R(-vi,Yi,0),new R(vi,Yi,0),new R(-Yi,0,vi),new R(Yi,0,vi),new R(0,vi,-Yi),new R(0,vi,Yi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ma=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,wa,Sa),this._renderer.xr.enabled=ba,t.scissorTest=!1,xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:qs,format:pn,colorSpace:oi,depthBuffer:!1},s=El(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(r)),this._blurMaterial=Cp(r,t,e)}return s}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,s){const o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(wl),h.toneMapping=ni,h.autoClear=!1;const p=new Kt({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new gt(new Ct,p);let _=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,_=!0):(p.color.copy(wl),_=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const w=this._cubeSize;xr(s,b*w,d>2?w:0,w,w),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sl[(s-r-1)%Sl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gt(this._lodPlanes[s],c),m=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),_=r/g,f=isFinite(r)?1+Math.floor(h*_):Si;f>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);const d=[];let b=0;for(let I=0;I<Si;++I){const z=I/_,S=Math.exp(-z*z/2);d.push(S),I===0?b+=S:I<f&&(b+=2*S)}for(let I=0;I<d.length;I++)d[I]=d[I]/b;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=d,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:w}=this;m.dTheta.value=g,m.mipInt.value=w-n;const E=this._sizeLods[s],k=3*E*(s>w-ns?s-w+ns:0),P=4*(this._cubeSize-E);xr(e,k,P,3*E,2*E),l.setRenderTarget(e),l.render(u,ya)}}function Ap(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+Ml.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ns?l=Ml[a-i+ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,m=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,f=2,d=1,b=new Float32Array(_*g*p),w=new Float32Array(f*g*p),E=new Float32Array(d*g*p);for(let P=0;P<p;P++){const I=P%3*2/3-1,z=P>2?0:-1,S=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];b.set(S,_*g*P),w.set(m,f*g*P);const y=[P,P,P,P,P,P];E.set(y,d*g*P)}const k=new gn;k.setAttribute("position",new mn(b,_)),k.setAttribute("uv",new mn(w,f)),k.setAttribute("faceIndex",new mn(E,d)),t.push(k),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function El(i,t,e){const n=new Ai(i,t,e);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cp(i,t,e){const n=new Float32Array(Si),s=new R(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Tl(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Al(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ha||l===Ga,h=l===cs||l===hs;if(c||h){let u=t.get(o);const m=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==m)return e===null&&(e=new bl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new bl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Pp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Po("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ip(i,t,e,n){const s={},r=new WeakMap;function a(u){const m=u.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const _=m.morphAttributes[g];for(let f=0,d=_.length;f<d;f++)t.remove(_[f])}m.removeEventListener("dispose",a),delete s[m.id];const p=r.get(m);p&&(t.remove(p),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(u,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,e.memory.geometries++),m}function l(u){const m=u.attributes;for(const g in m)t.update(m[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let f=0,d=_.length;f<d;f++)t.update(_[f],i.ARRAY_BUFFER)}}function c(u){const m=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let w=0,E=b.length;w<E;w+=3){const k=b[w+0],P=b[w+1],I=b[w+2];m.push(k,P,P,I,I,k)}}else if(g!==void 0){const b=g.array;_=g.version;for(let w=0,E=b.length/3-1;w<E;w+=3){const k=w+0,P=w+1,I=w+2;m.push(k,P,P,I,I,k)}}else return;const f=new(Sc(m)?Rc:Cc)(m,1);f.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,f)}function h(u){const m=r.get(u);if(m){const p=u.index;p!==null&&m.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Lp(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,p){i.drawElements(n,p,r,m*a),e.update(p,n,1)}function c(m,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,m*a,g),e.update(p,n,g))}function h(m,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,m,0,g);let f=0;for(let d=0;d<g;d++)f+=p[d];e.update(f,n,1)}function u(m,p,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<m.length;d++)c(m[d]/a,p[d],_[d]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,m,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b];for(let b=0;b<_.length;b++)e.update(d,n,_[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Dp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Up(i,t,e){const n=new WeakMap,s=new fe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let m=n.get(o);if(m===void 0||m.count!==u){let y=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;m!==void 0&&m.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),f===!0&&(E=3);let k=o.attributes.position.count*E,P=1;k>t.maxTextureSize&&(P=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*P*4*u),z=new Ec(I,k,P,u);z.type=Un,z.needsUpdate=!0;const S=E*4;for(let A=0;A<u;A++){const H=d[A],G=b[A],j=w[A],Z=k*P*4*A;for(let Y=0;Y<H.count;Y++){const $=Y*S;g===!0&&(s.fromBufferAttribute(H,Y),I[Z+$+0]=s.x,I[Z+$+1]=s.y,I[Z+$+2]=s.z,I[Z+$+3]=0),_===!0&&(s.fromBufferAttribute(G,Y),I[Z+$+4]=s.x,I[Z+$+5]=s.y,I[Z+$+6]=s.z,I[Z+$+7]=0),f===!0&&(s.fromBufferAttribute(j,Y),I[Z+$+8]=s.x,I[Z+$+9]=s.y,I[Z+$+10]=s.z,I[Z+$+11]=j.itemSize===4?s.w:1)}}m={count:u,texture:z,size:new zt(k,P)},n.set(o,m),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function kp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class kc extends Ve{constructor(t,e,n,s,r,a,o,l,c,h=os){if(h!==os&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=Ti),n===void 0&&h===us&&(n=ds),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nc=new Ve,Cl=new kc(1,1),Fc=new Ec,Oc=new xd,Bc=new Lc,Rl=[],Pl=[],Il=new Float32Array(16),Ll=new Float32Array(9),Dl=new Float32Array(4);function vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Rl[s];if(r===void 0&&(r=new Float32Array(s),Rl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kr(i,t){let e=Pl[t];e===void 0&&(e=new Int32Array(t),Pl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Np(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Dl.set(n),i.uniformMatrix2fv(this.addr,!1,Dl),Ce(e,n)}}function Hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Ll.set(n),i.uniformMatrix3fv(this.addr,!1,Ll),Ce(e,n)}}function Gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),Ce(e,n)}}function Vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Yp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function $p(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cl.compareFunction=wc,r=Cl):r=Nc,e.setTexture2D(t||r,s)}function Jp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oc,s)}function Qp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bc,s)}function tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fc,s)}function em(i){switch(i){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Vp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return Kp;case 36295:return jp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return tm}}function nm(i,t){i.uniform1fv(this.addr,t)}function im(i,t){const e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function sm(i,t){const e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function rm(i,t){const e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){const e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function om(i,t){const e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){const e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cm(i,t){i.uniform1iv(this.addr,t)}function hm(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function um(i,t){i.uniform4iv(this.addr,t)}function fm(i,t){i.uniform1uiv(this.addr,t)}function pm(i,t){i.uniform2uiv(this.addr,t)}function mm(i,t){i.uniform3uiv(this.addr,t)}function gm(i,t){i.uniform4uiv(this.addr,t)}function _m(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Nc,r[a])}function vm(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Oc,r[a])}function xm(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bc,r[a])}function ym(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fc,r[a])}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return am;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return um;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return ym}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=em(e.type)}}class Sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mm(e.type)}}class bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function Ul(i,t){i.seq.push(t),i.map[t.id]=t}function Em(i,t,e){const n=i.name,s=n.length;for(Ea.lastIndex=0;;){const r=Ea.exec(n),a=Ea.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ul(e,c===void 0?new wm(o,i,t):new Sm(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new bm(o),Ul(e,u)),e=u}}}class Dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Em(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function kl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Tm=37297;let Am=0;function Cm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Rm(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===Or&&e===Fr?n="LinearDisplayP3ToLinearSRGB":t===Fr&&e===Or&&(n="LinearSRGBToLinearDisplayP3"),i){case oi:case qr:return[n,"LinearTransferOETF"];case xn:case Co:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Nl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(t),a)}else return s}function Pm(i,t){const e=Rm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Im(i,t){let e;switch(t){case Lh:e="Linear";break;case Dh:e="Reinhard";break;case Uh:e="OptimizedCineon";break;case kh:e="ACESFilmic";break;case Fh:e="AgX";break;case Oh:e="Neutral";break;case Nh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Dm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Um(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Us(i){return i!==""}function Fl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ol(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(i){return i.replace(km,Fm)}const Nm=new Map;function Fm(i,t){let e=Wt[t];if(e===void 0){const n=Nm.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xo(e)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(i){return i.replace(Om,Bm)}function Bm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Hm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case Xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Vm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mo:t="ENVMAP_BLENDING_MULTIPLY";break;case Ph:t="ENVMAP_BLENDING_MIX";break;case Ih:t="ENVMAP_BLENDING_ADD";break}return t}function Wm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=zm(e),c=Hm(e),h=Gm(e),u=Vm(e),m=Wm(e),p=Lm(e),g=Dm(r),_=s.createProgram();let f,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),d.length>0&&(d+=`
`)):(f=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),d=[zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ni?Im("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Pm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),a=xo(a),a=Fl(a,e),a=Ol(a,e),o=xo(o),o=Fl(o,e),o=Ol(o,e),a=Bl(a),o=Bl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=b+f+a,E=b+d+o,k=kl(s,s.VERTEX_SHADER,w),P=kl(s,s.FRAGMENT_SHADER,E);s.attachShader(_,k),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(A){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(k).trim(),j=s.getShaderInfoLog(P).trim();let Z=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,k,P);else{const $=Nl(s,k,"vertex"),K=Nl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+H+`
`+$+`
`+K)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||j==="")&&(Y=!1);Y&&(A.diagnostics={runnable:Z,programLog:H,vertexShader:{log:G,prefix:f},fragmentShader:{log:j,prefix:d}})}s.deleteShader(k),s.deleteShader(P),z=new Dr(s,_),S=Um(s,_)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Tm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Am++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=P,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Km(t),e.set(t,n)),n}}class Km{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function jm(i,t,e,n,s,r,a){const o=new Tc,l=new Ym,c=new Set,h=[],u=s.logarithmicDepthBuffer,m=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,y,A,H,G){const j=H.fog,Z=G.geometry,Y=S.isMeshStandardMaterial?H.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),K=$&&$.mapping===Xr?$.image.height:null,lt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=vt!==void 0?vt.length:0;let Ht=0;Z.morphAttributes.position!==void 0&&(Ht=1),Z.morphAttributes.normal!==void 0&&(Ht=2),Z.morphAttributes.color!==void 0&&(Ht=3);let te,J,nt,yt;if(lt){const ne=yn[lt];te=ne.vertexShader,J=ne.fragmentShader}else te=S.vertexShader,J=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),yt=l.getFragmentShaderID(S);const ht=i.getRenderTarget(),Ot=G.isInstancedMesh===!0,Gt=G.isBatchedMesh===!0,Yt=!!S.map,pe=!!S.matcap,L=!!$,me=!!S.aoMap,$t=!!S.lightMap,ee=!!S.bumpMap,St=!!S.normalMap,ve=!!S.displacementMap,Nt=!!S.emissiveMap,Ft=!!S.metalnessMap,C=!!S.roughnessMap,x=S.anisotropy>0,D=S.clearcoat>0,F=S.dispersion>0,W=S.iridescence>0,q=S.sheen>0,_t=S.transmission>0,st=x&&!!S.anisotropyMap,dt=D&&!!S.clearcoatMap,kt=D&&!!S.clearcoatNormalMap,et=D&&!!S.clearcoatRoughnessMap,ft=W&&!!S.iridescenceMap,Vt=W&&!!S.iridescenceThicknessMap,Et=q&&!!S.sheenColorMap,pt=q&&!!S.sheenRoughnessMap,Rt=!!S.specularMap,Bt=!!S.specularColorMap,he=!!S.specularIntensityMap,U=_t&&!!S.transmissionMap,it=_t&&!!S.thicknessMap,Q=!!S.gradientMap,tt=!!S.alphaMap,at=S.alphaTest>0,Pt=!!S.alphaHash,Zt=!!S.extensions;let we=ni;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(we=i.toneMapping);const Ie={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:J,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:yt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Gt,batchingColor:Gt&&G._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&G.instanceColor!==null,instancingMorph:Ot&&G.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:oi,alphaToCoverage:!!S.alphaToCoverage,map:Yt,matcap:pe,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:K,aoMap:me,lightMap:$t,bumpMap:ee,normalMap:St,displacementMap:m&&ve,emissiveMap:Nt,normalMapObjectSpace:St&&S.normalMapType===Gh,normalMapTangentSpace:St&&S.normalMapType===Mc,metalnessMap:Ft,roughnessMap:C,anisotropy:x,anisotropyMap:st,clearcoat:D,clearcoatMap:dt,clearcoatNormalMap:kt,clearcoatRoughnessMap:et,dispersion:F,iridescence:W,iridescenceMap:ft,iridescenceThicknessMap:Vt,sheen:q,sheenColorMap:Et,sheenRoughnessMap:pt,specularMap:Rt,specularColorMap:Bt,specularIntensityMap:he,transmission:_t,transmissionMap:U,thicknessMap:it,gradientMap:Q,opaque:S.transparent===!1&&S.blending===as&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:at,alphaHash:Pt,combine:S.combine,mapUv:Yt&&_(S.map.channel),aoMapUv:me&&_(S.aoMap.channel),lightMapUv:$t&&_(S.lightMap.channel),bumpMapUv:ee&&_(S.bumpMap.channel),normalMapUv:St&&_(S.normalMap.channel),displacementMapUv:ve&&_(S.displacementMap.channel),emissiveMapUv:Nt&&_(S.emissiveMap.channel),metalnessMapUv:Ft&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:st&&_(S.anisotropyMap.channel),clearcoatMapUv:dt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Rt&&_(S.specularMap.channel),specularColorMapUv:Bt&&_(S.specularColorMap.channel),specularIntensityMapUv:he&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:tt&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(St||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(Yt||tt),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ht,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:Yt&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===ue,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&S.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)y.push(A),y.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(b(y,S),w(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),S.push(o.mask)}function E(S){const y=g[S.type];let A;if(y){const H=yn[y];A=Ld.clone(H.uniforms)}else A=S.uniforms;return A}function k(S,y){let A;for(let H=0,G=h.length;H<G;H++){const j=h[H];if(j.cacheKey===y){A=j,++A.usedTimes;break}}return A===void 0&&(A=new Xm(i,y,S,r),h.push(A)),A}function P(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function z(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:E,acquireProgram:k,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:z}}function Zm(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function $m(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,m,p,g,_,f){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:m,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},i[t]=d):(d.id=u.id,d.object=u,d.geometry=m,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=f),t++,d}function o(u,m,p,g,_,f){const d=a(u,m,p,g,_,f);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,m,p,g,_,f){const d=a(u,m,p,g,_,f);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,m){e.length>1&&e.sort(u||$m),n.length>1&&n.sort(m||Hl),s.length>1&&s.sort(m||Hl)}function h(){for(let u=t,m=i.length;u<m;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Jm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Gl,i.set(n,[a])):s>=r.length?(a=new Gl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new qt};break;case"SpotLight":e={position:new R,direction:new R,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function t0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let e0=0;function n0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function i0(i){const t=new Qm,e=t0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new _e,a=new _e;function o(c){let h=0,u=0,m=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,f=0,d=0,b=0,w=0,E=0,k=0,P=0,I=0;c.sort(n0);for(let S=0,y=c.length;S<y;S++){const A=c[S],H=A.color,G=A.intensity,j=A.distance,Z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=H.r*G,u+=H.g*G,m+=H.b*G;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(A.sh.coefficients[Y],G);I++}else if(A.isDirectionalLight){const Y=t.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const $=A.shadow,K=e.get(A);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=A.shadow.matrix,b++}n.directional[p]=Y,p++}else if(A.isSpotLight){const Y=t.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(H).multiplyScalar(G),Y.distance=j,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,n.spot[_]=Y;const $=A.shadow;if(A.map&&(n.spotLightMap[k]=A.map,k++,$.updateMatrices(A),A.castShadow&&P++),n.spotLightMatrix[_]=$.matrix,A.castShadow){const K=e.get(A);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=Z,E++}_++}else if(A.isRectAreaLight){const Y=t.get(A);Y.color.copy(H).multiplyScalar(G),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),n.rectArea[f]=Y,f++}else if(A.isPointLight){const Y=t.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){const $=A.shadow,K=e.get(A);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=A.shadow.matrix,w++}n.point[g]=Y,g++}else if(A.isHemisphereLight){const Y=t.get(A);Y.skyColor.copy(A.color).multiplyScalar(G),Y.groundColor.copy(A.groundColor).multiplyScalar(G),n.hemi[d]=Y,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=m;const z=n.hash;(z.directionalLength!==p||z.pointLength!==g||z.spotLength!==_||z.rectAreaLength!==f||z.hemiLength!==d||z.numDirectionalShadows!==b||z.numPointShadows!==w||z.numSpotShadows!==E||z.numSpotMaps!==k||z.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+k-P,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,z.directionalLength=p,z.pointLength=g,z.spotLength=_,z.rectAreaLength=f,z.hemiLength=d,z.numDirectionalShadows=b,z.numPointShadows=w,z.numSpotShadows=E,z.numSpotMaps=k,z.numLightProbes=I,n.version=e0++)}function l(c,h){let u=0,m=0,p=0,g=0,_=0;const f=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const w=c[d];if(w.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(w.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),p++}else if(w.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:n}}function Vl(i){const t=new i0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function s0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Vl(i),t.set(s,[o])):r>=a.length?(o=new Vl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class r0 extends _s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class a0 extends _s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const o0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c0(i,t,e){let n=new Lo;const s=new zt,r=new zt,a=new fe,o=new r0({depthPacking:Hh}),l=new a0,c={},h=e.maxTextureSize,u={[ri]:qe,[qe]:ri,[Mn]:Mn},m=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:o0,fragmentShader:l0}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let d=this.type;this.render=function(P,I,z){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ei),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=d!==Ln&&this.type===Ln,j=d===Ln&&this.type!==Ln;for(let Z=0,Y=P.length;Z<Y;Z++){const $=P[Z],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const lt=K.getFrameExtents();if(s.multiply(lt),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,K.mapSize.y=r.y)),K.map===null||G===!0||j===!0){const xt=this.type!==Ln?{minFilter:nn,magFilter:nn}:{};K.map!==null&&K.map.dispose(),K.map=new Ai(s.x,s.y,xt),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const vt=K.getViewportCount();for(let xt=0;xt<vt;xt++){const Ht=K.getViewport(xt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),H.viewport(a),K.updateMatrices($,xt),n=K.getFrustum(),E(I,z,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===Ln&&b(K,z),K.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(S,y,A)};function b(P,I){const z=t.update(_);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ai(s.x,s.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,z,m,_,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,z,p,_,null)}function w(P,I,z,S){let y=null;const A=z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)y=A;else if(y=z.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const H=y.uuid,G=I.uuid;let j=c[H];j===void 0&&(j={},c[H]=j);let Z=j[G];Z===void 0&&(Z=y.clone(),j[G]=Z,I.addEventListener("dispose",k)),y=Z}if(y.visible=I.visible,y.wireframe=I.wireframe,S===Ln?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:u[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=z}return y}function E(P,I,z,S,y){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Ln)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,P.matrixWorld);const G=t.update(P),j=P.material;if(Array.isArray(j)){const Z=G.groups;for(let Y=0,$=Z.length;Y<$;Y++){const K=Z[Y],lt=j[K.materialIndex];if(lt&&lt.visible){const vt=w(P,lt,S,y);P.onBeforeShadow(i,P,I,z,G,vt,K),i.renderBufferDirect(z,null,G,vt,P,K),P.onAfterShadow(i,P,I,z,G,vt,K)}}}else if(j.visible){const Z=w(P,j,S,y);P.onBeforeShadow(i,P,I,z,G,Z,null),i.renderBufferDirect(z,null,G,Z,P,null),P.onAfterShadow(i,P,I,z,G,Z,null)}}const H=P.children;for(let G=0,j=H.length;G<j;G++)E(H[G],I,z,S,y)}function k(P){P.target.removeEventListener("dispose",k);for(const z in c){const S=c[z],y=P.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function h0(i){function t(){let U=!1;const it=new fe;let Q=null;const tt=new fe(0,0,0,0);return{setMask:function(at){Q!==at&&!U&&(i.colorMask(at,at,at,at),Q=at)},setLocked:function(at){U=at},setClear:function(at,Pt,Zt,we,Ie){Ie===!0&&(at*=we,Pt*=we,Zt*=we),it.set(at,Pt,Zt,we),tt.equals(it)===!1&&(i.clearColor(at,Pt,Zt,we),tt.copy(it))},reset:function(){U=!1,Q=null,tt.set(-1,0,0,0)}}}function e(){let U=!1,it=null,Q=null,tt=null;return{setTest:function(at){at?yt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(at){it!==at&&!U&&(i.depthMask(at),it=at)},setFunc:function(at){if(Q!==at){switch(at){case Sh:i.depthFunc(i.NEVER);break;case bh:i.depthFunc(i.ALWAYS);break;case Eh:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case Th:i.depthFunc(i.EQUAL);break;case Ah:i.depthFunc(i.GEQUAL);break;case Ch:i.depthFunc(i.GREATER);break;case Rh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=at}},setLocked:function(at){U=at},setClear:function(at){tt!==at&&(i.clearDepth(at),tt=at)},reset:function(){U=!1,it=null,Q=null,tt=null}}}function n(){let U=!1,it=null,Q=null,tt=null,at=null,Pt=null,Zt=null,we=null,Ie=null;return{setTest:function(ne){U||(ne?yt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ne){it!==ne&&!U&&(i.stencilMask(ne),it=ne)},setFunc:function(ne,En,vn){(Q!==ne||tt!==En||at!==vn)&&(i.stencilFunc(ne,En,vn),Q=ne,tt=En,at=vn)},setOp:function(ne,En,vn){(Pt!==ne||Zt!==En||we!==vn)&&(i.stencilOp(ne,En,vn),Pt=ne,Zt=En,we=vn)},setLocked:function(ne){U=ne},setClear:function(ne){Ie!==ne&&(i.clearStencil(ne),Ie=ne)},reset:function(){U=!1,it=null,Q=null,tt=null,at=null,Pt=null,Zt=null,we=null,Ie=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,m=[],p=null,g=!1,_=null,f=null,d=null,b=null,w=null,E=null,k=null,P=new qt(0,0,0),I=0,z=!1,S=null,y=null,A=null,H=null,G=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=Y>=2);let K=null,lt={};const vt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Ht=new fe().fromArray(vt),te=new fe().fromArray(xt);function J(U,it,Q,tt){const at=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(U,Pt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<Q;Zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(it+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return Pt}const nt={};nt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),r.setFunc(kr),ee(!1),St(jo),yt(i.CULL_FACE),me(ei);function yt(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function ht(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function Ot(U,it){return h[U]!==it?(i.bindFramebuffer(U,it),h[U]=it,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Gt(U,it){let Q=m,tt=!1;if(U){Q=u.get(it),Q===void 0&&(Q=[],u.set(it,Q));const at=U.textures;if(Q.length!==at.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,Zt=at.length;Pt<Zt;Pt++)Q[Pt]=i.COLOR_ATTACHMENT0+Pt;Q.length=at.length,tt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Q)}function Yt(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const pe={[wi]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};pe[lh]=i.MIN,pe[ch]=i.MAX;const L={[hh]:i.ZERO,[dh]:i.ONE,[uh]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[wh]:i.ONE_MINUS_CONSTANT_ALPHA};function me(U,it,Q,tt,at,Pt,Zt,we,Ie,ne){if(U===ei){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(yt(i.BLEND),g=!0),U!==rh){if(U!==_||ne!==z){if((f!==wi||w!==wi)&&(i.blendEquation(i.FUNC_ADD),f=wi,w=wi),ne)switch(U){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zo:i.blendFunc(i.ONE,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,b=null,E=null,k=null,P.set(0,0,0),I=0,_=U,z=ne}return}at=at||it,Pt=Pt||Q,Zt=Zt||tt,(it!==f||at!==w)&&(i.blendEquationSeparate(pe[it],pe[at]),f=it,w=at),(Q!==d||tt!==b||Pt!==E||Zt!==k)&&(i.blendFuncSeparate(L[Q],L[tt],L[Pt],L[Zt]),d=Q,b=tt,E=Pt,k=Zt),(we.equals(P)===!1||Ie!==I)&&(i.blendColor(we.r,we.g,we.b,Ie),P.copy(we),I=Ie),_=U,z=!1}function $t(U,it){U.side===Mn?ht(i.CULL_FACE):yt(i.CULL_FACE);let Q=U.side===qe;it&&(Q=!Q),ee(Q),U.blending===as&&U.transparent===!1?me(ei):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function St(U){U!==ih?(yt(i.CULL_FACE),U!==y&&(U===jo?i.cullFace(i.BACK):U===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),y=U}function ve(U){U!==A&&(Z&&i.lineWidth(U),A=U)}function Nt(U,it,Q){U?(yt(i.POLYGON_OFFSET_FILL),(H!==it||G!==Q)&&(i.polygonOffset(it,Q),H=it,G=Q)):ht(i.POLYGON_OFFSET_FILL)}function Ft(U){U?yt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function C(U){U===void 0&&(U=i.TEXTURE0+j-1),K!==U&&(i.activeTexture(U),K=U)}function x(U,it,Q){Q===void 0&&(K===null?Q=i.TEXTURE0+j-1:Q=K);let tt=lt[Q];tt===void 0&&(tt={type:void 0,texture:void 0},lt[Q]=tt),(tt.type!==U||tt.texture!==it)&&(K!==Q&&(i.activeTexture(Q),K=Q),i.bindTexture(U,it||nt[U]),tt.type=U,tt.texture=it)}function D(){const U=lt[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(U){Ht.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ht.copy(U))}function pt(U){te.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function Rt(U,it){let Q=l.get(it);Q===void 0&&(Q=new WeakMap,l.set(it,Q));let tt=Q.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(it,U.name),Q.set(U,tt))}function Bt(U,it){const tt=l.get(it).get(U);o.get(it)!==tt&&(i.uniformBlockBinding(it,tt,U.__bindingPointIndex),o.set(it,tt))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,lt={},h={},u=new WeakMap,m=[],p=null,g=!1,_=null,f=null,d=null,b=null,w=null,E=null,k=null,P=new qt(0,0,0),I=0,z=!1,S=null,y=null,A=null,H=null,G=null,Ht.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:yt,disable:ht,bindFramebuffer:Ot,drawBuffers:Gt,useProgram:Yt,setBlending:me,setMaterial:$t,setFlipSided:ee,setCullFace:St,setLineWidth:ve,setPolygonOffset:Nt,setScissorTest:Ft,activeTexture:C,bindTexture:x,unbindTexture:D,compressedTexImage2D:F,compressedTexImage3D:W,texImage2D:ft,texImage3D:Vt,updateUBOMapping:Rt,uniformBlockBinding:Bt,texStorage2D:kt,texStorage3D:et,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:st,compressedTexSubImage3D:dt,scissor:Et,viewport:pt,reset:he}}function Wl(i,t,e,n){const s=d0(n);switch(e){case pc:return i*t;case gc:return i*t;case _c:return i*t*2;case vc:return i*t/s.components*s.byteLength;case Eo:return i*t/s.components*s.byteLength;case xc:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case mc:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case Ao:return i*t*4/s.components*s.byteLength;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case ja:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lr:case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yc:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(i){switch(i){case Bn:case dc:return{byteLength:1,components:1};case Gs:case uc:case qs:return{byteLength:2,components:1};case So:case bo:return{byteLength:2,components:4};case Ti:case wo:case Un:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function u0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap;let u;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return p?new OffscreenCanvas(C,x):zr("canvas")}function _(C,x,D){let F=1;const W=Ft(C);if((W.width>D||W.height>D)&&(F=D/Math.max(W.width,W.height)),F<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(F*W.width),_t=Math.floor(F*W.height);u===void 0&&(u=g(q,_t));const st=x?g(q,_t):u;return st.width=q,st.height=_t,st.getContext("2d").drawImage(C,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+q+"x"+_t+")."),st}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),C;return C}function f(C){return C.generateMipmaps&&C.minFilter!==nn&&C.minFilter!==hn}function d(C){i.generateMipmap(C)}function b(C,x,D,F,W=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=x;if(x===i.RED&&(D===i.FLOAT&&(q=i.R32F),D===i.HALF_FLOAT&&(q=i.R16F),D===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.R8UI),D===i.UNSIGNED_SHORT&&(q=i.R16UI),D===i.UNSIGNED_INT&&(q=i.R32UI),D===i.BYTE&&(q=i.R8I),D===i.SHORT&&(q=i.R16I),D===i.INT&&(q=i.R32I)),x===i.RG&&(D===i.FLOAT&&(q=i.RG32F),D===i.HALF_FLOAT&&(q=i.RG16F),D===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(q=i.RG8UI),D===i.UNSIGNED_SHORT&&(q=i.RG16UI),D===i.UNSIGNED_INT&&(q=i.RG32UI),D===i.BYTE&&(q=i.RG8I),D===i.SHORT&&(q=i.RG16I),D===i.INT&&(q=i.RG32I)),x===i.RGB&&D===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const _t=W?Nr:oe.getTransfer(F);D===i.FLOAT&&(q=i.RGBA32F),D===i.HALF_FLOAT&&(q=i.RGBA16F),D===i.UNSIGNED_BYTE&&(q=_t===ue?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function w(C,x){let D;return C?x===null||x===Ti||x===ds?D=i.DEPTH24_STENCIL8:x===Un?D=i.DEPTH32F_STENCIL8:x===Gs&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===ds?D=i.DEPTH_COMPONENT24:x===Un?D=i.DEPTH_COMPONENT32F:x===Gs&&(D=i.DEPTH_COMPONENT16),D}function E(C,x){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function k(C){const x=C.target;x.removeEventListener("dispose",k),I(x),x.isVideoTexture&&h.delete(x)}function P(C){const x=C.target;x.removeEventListener("dispose",P),S(x)}function I(C){const x=n.get(C);if(x.__webglInit===void 0)return;const D=C.source,F=m.get(D);if(F){const W=F[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&z(C),Object.keys(F).length===0&&m.delete(D)}n.remove(C)}function z(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const D=C.source,F=m.get(D);delete F[x.__cacheKey],a.memory.textures--}function S(C){const x=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(x.__webglFramebuffer[F]))for(let W=0;W<x.__webglFramebuffer[F].length;W++)i.deleteFramebuffer(x.__webglFramebuffer[F][W]);else i.deleteFramebuffer(x.__webglFramebuffer[F]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[F])}else{if(Array.isArray(x.__webglFramebuffer))for(let F=0;F<x.__webglFramebuffer.length;F++)i.deleteFramebuffer(x.__webglFramebuffer[F]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let F=0;F<x.__webglColorRenderbuffer.length;F++)x.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[F]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=C.textures;for(let F=0,W=D.length;F<W;F++){const q=n.get(D[F]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(D[F])}n.remove(C)}let y=0;function A(){y=0}function H(){const C=y;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),y+=1,C}function G(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function j(C,x){const D=n.get(C);if(C.isVideoTexture&&ve(C),C.isRenderTargetTexture===!1&&C.version>0&&D.__version!==C.version){const F=C.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,C,x);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+x)}function Z(C,x){const D=n.get(C);if(C.version>0&&D.__version!==C.version){te(D,C,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+x)}function Y(C,x){const D=n.get(C);if(C.version>0&&D.__version!==C.version){te(D,C,x);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+x)}function $(C,x){const D=n.get(C);if(C.version>0&&D.__version!==C.version){J(D,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+x)}const K={[Va]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},lt={[nn]:i.NEAREST,[Bh]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},vt={[Vh]:i.NEVER,[jh]:i.ALWAYS,[Wh]:i.LESS,[wc]:i.LEQUAL,[Xh]:i.EQUAL,[Kh]:i.GEQUAL,[qh]:i.GREATER,[Yh]:i.NOTEQUAL};function xt(C,x){if(x.type===Un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===ea||x.magFilter===Js||x.magFilter===Ei||x.minFilter===hn||x.minFilter===ea||x.minFilter===Js||x.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,K[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,K[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,K[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===nn||x.minFilter!==Js&&x.minFilter!==Ei||x.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(C,x){let D=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",k));const F=x.source;let W=m.get(F);W===void 0&&(W={},m.set(F,W));const q=G(x);if(q!==C.__cacheKey){W[q]===void 0&&(W[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),W[q].usedTimes++;const _t=W[C.__cacheKey];_t!==void 0&&(W[C.__cacheKey].usedTimes--,_t.usedTimes===0&&z(x)),C.__cacheKey=q,C.__webglTexture=W[q].texture}return D}function te(C,x,D){let F=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(F=i.TEXTURE_3D);const W=Ht(C,x),q=x.source;e.bindTexture(F,C.__webglTexture,i.TEXTURE0+D);const _t=n.get(q);if(q.version!==_t.__version||W===!0){e.activeTexture(i.TEXTURE0+D);const st=oe.getPrimaries(oe.workingColorSpace),dt=x.colorSpace===Jn?null:oe.getPrimaries(x.colorSpace),kt=x.colorSpace===Jn||st===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let et=_(x.image,!1,s.maxTextureSize);et=Nt(x,et);const ft=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type);let Et=b(x.internalFormat,ft,Vt,x.colorSpace,x.isVideoTexture);xt(F,x);let pt;const Rt=x.mipmaps,Bt=x.isVideoTexture!==!0,he=_t.__version===void 0||W===!0,U=q.dataReady,it=E(x,et);if(x.isDepthTexture)Et=w(x.format===us,x.type),he&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Et,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Et,et.width,et.height,0,ft,Vt,null));else if(x.isDataTexture)if(Rt.length>0){Bt&&he&&e.texStorage2D(i.TEXTURE_2D,it,Et,Rt[0].width,Rt[0].height);for(let Q=0,tt=Rt.length;Q<tt;Q++)pt=Rt[Q],Bt?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,ft,Vt,pt.data):e.texImage2D(i.TEXTURE_2D,Q,Et,pt.width,pt.height,0,ft,Vt,pt.data);x.generateMipmaps=!1}else Bt?(he&&e.texStorage2D(i.TEXTURE_2D,it,Et,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,ft,Vt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Et,et.width,et.height,0,ft,Vt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Et,Rt[0].width,Rt[0].height,et.depth);for(let Q=0,tt=Rt.length;Q<tt;Q++)if(pt=Rt[Q],x.format!==pn)if(ft!==null)if(Bt){if(U)if(x.layerUpdates.size>0){const at=Wl(pt.width,pt.height,x.format,x.type);for(const Pt of x.layerUpdates){const Zt=pt.data.subarray(Pt*at/pt.data.BYTES_PER_ELEMENT,(Pt+1)*at/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Pt,pt.width,pt.height,1,ft,Zt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,pt.width,pt.height,et.depth,ft,pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Et,pt.width,pt.height,et.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,pt.width,pt.height,et.depth,ft,Vt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Et,pt.width,pt.height,et.depth,0,ft,Vt,pt.data)}else{Bt&&he&&e.texStorage2D(i.TEXTURE_2D,it,Et,Rt[0].width,Rt[0].height);for(let Q=0,tt=Rt.length;Q<tt;Q++)pt=Rt[Q],x.format!==pn?ft!==null?Bt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,pt.width,pt.height,ft,Vt,pt.data):e.texImage2D(i.TEXTURE_2D,Q,Et,pt.width,pt.height,0,ft,Vt,pt.data)}else if(x.isDataArrayTexture)if(Bt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Et,et.width,et.height,et.depth),U)if(x.layerUpdates.size>0){const Q=Wl(et.width,et.height,x.format,x.type);for(const tt of x.layerUpdates){const at=et.data.subarray(tt*Q/et.data.BYTES_PER_ELEMENT,(tt+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,et.width,et.height,1,ft,Vt,at)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,Vt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,et.width,et.height,et.depth,0,ft,Vt,et.data);else if(x.isData3DTexture)Bt?(he&&e.texStorage3D(i.TEXTURE_3D,it,Et,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,Vt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Et,et.width,et.height,et.depth,0,ft,Vt,et.data);else if(x.isFramebufferTexture){if(he)if(Bt)e.texStorage2D(i.TEXTURE_2D,it,Et,et.width,et.height);else{let Q=et.width,tt=et.height;for(let at=0;at<it;at++)e.texImage2D(i.TEXTURE_2D,at,Et,Q,tt,0,ft,Vt,null),Q>>=1,tt>>=1}}else if(Rt.length>0){if(Bt&&he){const Q=Ft(Rt[0]);e.texStorage2D(i.TEXTURE_2D,it,Et,Q.width,Q.height)}for(let Q=0,tt=Rt.length;Q<tt;Q++)pt=Rt[Q],Bt?U&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ft,Vt,pt):e.texImage2D(i.TEXTURE_2D,Q,Et,ft,Vt,pt);x.generateMipmaps=!1}else if(Bt){if(he){const Q=Ft(et);e.texStorage2D(i.TEXTURE_2D,it,Et,Q.width,Q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Vt,et)}else e.texImage2D(i.TEXTURE_2D,0,Et,ft,Vt,et);f(x)&&d(F),_t.__version=q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function J(C,x,D){if(x.image.length!==6)return;const F=Ht(C,x),W=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+D);const q=n.get(W);if(W.version!==q.__version||F===!0){e.activeTexture(i.TEXTURE0+D);const _t=oe.getPrimaries(oe.workingColorSpace),st=x.colorSpace===Jn?null:oe.getPrimaries(x.colorSpace),dt=x.colorSpace===Jn||_t===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const kt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let tt=0;tt<6;tt++)!kt&&!et?ft[tt]=_(x.image[tt],!0,s.maxCubemapSize):ft[tt]=et?x.image[tt].image:x.image[tt],ft[tt]=Nt(x,ft[tt]);const Vt=ft[0],Et=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Rt=b(x.internalFormat,Et,pt,x.colorSpace),Bt=x.isVideoTexture!==!0,he=q.__version===void 0||F===!0,U=W.dataReady;let it=E(x,Vt);xt(i.TEXTURE_CUBE_MAP,x);let Q;if(kt){Bt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Rt,Vt.width,Vt.height);for(let tt=0;tt<6;tt++){Q=ft[tt].mipmaps;for(let at=0;at<Q.length;at++){const Pt=Q[at];x.format!==pn?Et!==null?Bt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,Pt.width,Pt.height,Et,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Rt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,0,0,Pt.width,Pt.height,Et,pt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at,Rt,Pt.width,Pt.height,0,Et,pt,Pt.data)}}}else{if(Q=x.mipmaps,Bt&&he){Q.length>0&&it++;const tt=Ft(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Rt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(et){Bt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ft[tt].width,ft[tt].height,Et,pt,ft[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Rt,ft[tt].width,ft[tt].height,0,Et,pt,ft[tt].data);for(let at=0;at<Q.length;at++){const Zt=Q[at].image[tt].image;Bt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,Zt.width,Zt.height,Et,pt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Rt,Zt.width,Zt.height,0,Et,pt,Zt.data)}}else{Bt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et,pt,ft[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Rt,Et,pt,ft[tt]);for(let at=0;at<Q.length;at++){const Pt=Q[at];Bt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,0,0,Et,pt,Pt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at+1,Rt,Et,pt,Pt.image[tt])}}}f(x)&&d(i.TEXTURE_CUBE_MAP),q.__version=W.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function nt(C,x,D,F,W,q){const _t=r.convert(D.format,D.colorSpace),st=r.convert(D.type),dt=b(D.internalFormat,_t,st,D.colorSpace);if(!n.get(x).__hasExternalTextures){const et=Math.max(1,x.width>>q),ft=Math.max(1,x.height>>q);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,q,dt,et,ft,x.depth,0,_t,st,null):e.texImage2D(W,q,dt,et,ft,0,_t,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),St(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,W,n.get(D).__webglTexture,0,ee(x)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,W,n.get(D).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,x,D){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const F=x.depthTexture,W=F&&F.isDepthTexture?F.type:null,q=w(x.stencilBuffer,W),_t=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=ee(x);St(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,q,x.width,x.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,C)}else{const F=x.textures;for(let W=0;W<F.length;W++){const q=F[W],_t=r.convert(q.format,q.colorSpace),st=r.convert(q.type),dt=b(q.internalFormat,_t,st,q.colorSpace),kt=ee(x);D&&St(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,dt,x.width,x.height):St(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,dt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,dt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const F=n.get(x.depthTexture).__webglTexture,W=ee(x);if(x.depthTexture.format===os)St(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(x.depthTexture.format===us)St(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ot(C){const x=n.get(C),D=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ht(x.__webglFramebuffer,C)}else if(D){x.__webglDepthbuffer=[];for(let F=0;F<6;F++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[F]),x.__webglDepthbuffer[F]=i.createRenderbuffer(),yt(x.__webglDepthbuffer[F],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),yt(x.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(C,x,D){const F=n.get(C);x!==void 0&&nt(F.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Ot(C)}function Yt(C){const x=C.texture,D=n.get(C),F=n.get(x);C.addEventListener("dispose",P);const W=C.textures,q=C.isWebGLCubeRenderTarget===!0,_t=W.length>1;if(_t||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=x.version,a.memory.textures++),q){D.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[st]=[];for(let dt=0;dt<x.mipmaps.length;dt++)D.__webglFramebuffer[st][dt]=i.createFramebuffer()}else D.__webglFramebuffer[st]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)D.__webglFramebuffer[st]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(_t)for(let st=0,dt=W.length;st<dt;st++){const kt=n.get(W[st]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&St(C)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let st=0;st<W.length;st++){const dt=W[st];D.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[st]);const kt=r.convert(dt.format,dt.colorSpace),et=r.convert(dt.type),ft=b(dt.internalFormat,kt,et,dt.colorSpace,C.isXRRenderTarget===!0),Vt=ee(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ft,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,D.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(D.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),xt(i.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)nt(D.__webglFramebuffer[st][dt],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,dt);else nt(D.__webglFramebuffer[st],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);f(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let st=0,dt=W.length;st<dt;st++){const kt=W[st],et=n.get(kt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),xt(i.TEXTURE_2D,kt),nt(D.__webglFramebuffer,C,kt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),f(kt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,F.__webglTexture),xt(st,x),x.mipmaps&&x.mipmaps.length>0)for(let dt=0;dt<x.mipmaps.length;dt++)nt(D.__webglFramebuffer[dt],C,x,i.COLOR_ATTACHMENT0,st,dt);else nt(D.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,st,0);f(x)&&d(st),e.unbindTexture()}C.depthBuffer&&Ot(C)}function pe(C){const x=C.textures;for(let D=0,F=x.length;D<F;D++){const W=x[D];if(f(W)){const q=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(W).__webglTexture;e.bindTexture(q,_t),d(q),e.unbindTexture()}}}const L=[],me=[];function $t(C){if(C.samples>0){if(St(C)===!1){const x=C.textures,D=C.width,F=C.height;let W=i.COLOR_BUFFER_BIT;const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(C),st=x.length>1;if(st)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const kt=n.get(x[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,D,F,0,0,D,F,W,i.NEAREST),l===!0&&(L.length=0,me.length=0,L.push(i.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(L.push(q),me.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);const kt=n.get(x[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ee(C){return Math.min(s.maxSamples,C.samples)}function St(C){const x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(C){const x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function Nt(C,x){const D=C.colorSpace,F=C.format,W=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||D!==oi&&D!==Jn&&(oe.getTransfer(D)===ue?(F!==pn||W!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function Ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=A,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=Gt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=St}function f0(i,t){function e(n,s=Jn){let r;const a=oe.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===So)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return i.BYTE;if(n===uc)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===wo)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===pn)return i.RGBA;if(n===gc)return i.LUMINANCE;if(n===_c)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===us)return i.DEPTH_STENCIL;if(n===vc)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===xc)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===Cr||n===Rr||n===Pr||n===Ir)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Za||n===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===Za)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===so)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===fo||n===po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===mo||n===go||n===_o)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class p0 extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ut extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m0={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),d=this._getHandJoint(c,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],m=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&m>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const g0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class v0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ve,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ai({vertexShader:g0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new Yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x0 extends gs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,m=null,p=null,g=null;const _=new v0,f=e.getContextAttributes();let d=null,b=null;const w=[],E=[],k=new zt;let P=null;const I=new Xe;I.layers.enable(1),I.viewport=new fe;const z=new Xe;z.layers.enable(2),z.viewport=new fe;const S=[I,z],y=new p0;y.layers.enable(1),y.layers.enable(2);let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=w[J];return nt===void 0&&(nt=new Ta,w[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=w[J];return nt===void 0&&(nt=new Ta,w[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=w[J];return nt===void 0&&(nt=new Ta,w[J]=nt),nt.getHandSpace()};function G(J){const nt=E.indexOf(J.inputSource);if(nt===-1)return;const yt=w[nt];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||a),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<w.length;J++){const nt=E[J];nt!==null&&(E[J]=null,w[J].disconnect(nt))}A=null,H=null,_.reset(),t.setRenderTarget(d),p=null,m=null,u=null,s=null,b=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const nt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ai(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let nt=null,yt=null,ht=null;f.depth&&(ht=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=f.stencil?us:os,yt=f.stencil?ds:Ti);const Ot={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),m=u.createProjectionLayer(Ot),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),b=new Ai(m.textureWidth,m.textureHeight,{format:pn,type:Bn,depthTexture:new kc(m.textureWidth,m.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(J){for(let nt=0;nt<J.removed.length;nt++){const yt=J.removed[nt],ht=E.indexOf(yt);ht>=0&&(E[ht]=null,w[ht].disconnect(yt))}for(let nt=0;nt<J.added.length;nt++){const yt=J.added[nt];let ht=E.indexOf(yt);if(ht===-1){for(let Gt=0;Gt<w.length;Gt++)if(Gt>=E.length){E.push(yt),ht=Gt;break}else if(E[Gt]===null){E[Gt]=yt,ht=Gt;break}if(ht===-1)break}const Ot=w[ht];Ot&&Ot.connect(yt)}}const Y=new R,$=new R;function K(J,nt,yt){Y.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(yt.matrixWorld);const ht=Y.distanceTo($),Ot=nt.projectionMatrix.elements,Gt=yt.projectionMatrix.elements,Yt=Ot[14]/(Ot[10]-1),pe=Ot[14]/(Ot[10]+1),L=(Ot[9]+1)/Ot[5],me=(Ot[9]-1)/Ot[5],$t=(Ot[8]-1)/Ot[0],ee=(Gt[8]+1)/Gt[0],St=Yt*$t,ve=Yt*ee,Nt=ht/(-$t+ee),Ft=Nt*-$t;nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ft),J.translateZ(Nt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const C=Yt+Nt,x=pe+Nt,D=St-Ft,F=ve+(ht-Ft),W=L*pe/x*C,q=me*pe/x*C;J.projectionMatrix.makePerspective(D,F,W,q,C,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function lt(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),y.near=z.near=I.near=J.near,y.far=z.far=I.far=J.far,(A!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,H=y.far,I.near=A,I.far=H,z.near=A,z.far=H,I.updateProjectionMatrix(),z.updateProjectionMatrix(),J.updateProjectionMatrix());const nt=J.parent,yt=y.cameras;lt(y,nt);for(let ht=0;ht<yt.length;ht++)lt(yt[ht],nt);yt.length===2?K(y,I,z):y.projectionMatrix.copy(I.projectionMatrix),vt(J,y,nt)};function vt(J,nt,yt){yt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Vs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(J){l=J,m!==null&&(m.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let xt=null;function Ht(J,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ht=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,ht=!0);for(let Gt=0;Gt<yt.length;Gt++){const Yt=yt[Gt];let pe=null;if(p!==null)pe=p.getViewport(Yt);else{const me=u.getViewSubImage(m,Yt);pe=me.viewport,Gt===0&&(t.setRenderTargetTextures(b,me.colorTexture,m.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let L=S[Gt];L===void 0&&(L=new Xe,L.layers.enable(Gt),L.viewport=new fe,S[Gt]=L),L.matrix.fromArray(Yt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Yt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(pe.x,pe.y,pe.width,pe.height),Gt===0&&(y.matrix.copy(L.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ht===!0&&y.cameras.push(L)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Gt=u.getDepthInformation(yt[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(t,Gt,s.renderState)}}for(let yt=0;yt<w.length;yt++){const ht=E[yt],Ot=w[yt];ht!==null&&Ot!==void 0&&Ot.update(ht,nt,c||a)}xt&&xt(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const te=new Dc;te.setAnimationLoop(Ht),this.setAnimationLoop=function(J){xt=J},this.dispose=function(){}}}const mi=new Sn,y0=new _e;function M0(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Pc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,b,w,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),m(f,d),d.isMeshPhysicalMaterial&&p(f,d,E)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),_(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,b,w):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===qe&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===qe&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const b=t.get(d),w=b.envMap,E=b.envMapRotation;w&&(f.envMap.value=w,mi.copy(E),mi.x*=-1,mi.y*=-1,mi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),f.envMapRotation.value.setFromMatrix4(y0.makeRotationFromEuler(mi)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,b,w){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*b,f.scale.value=w*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function m(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function p(f,d,b){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qe&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const b=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const E=w.program;n.uniformBlockBinding(b,E)}function c(b,w){let E=s[b.id];E===void 0&&(g(b),E=h(b),s[b.id]=E,b.addEventListener("dispose",f));const k=w.program;n.updateUBOMapping(b,k);const P=t.render.frame;r[b.id]!==P&&(m(b),r[b.id]=P)}function h(b){const w=u();b.__bindingPointIndex=w;const E=i.createBuffer(),k=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,k,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const w=s[b.id],E=b.uniforms,k=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,I=E.length;P<I;P++){const z=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,y=z.length;S<y;S++){const A=z[S];if(p(A,P,S,k)===!0){const H=A.__offset,G=Array.isArray(A.value)?A.value:[A.value];let j=0;for(let Z=0;Z<G.length;Z++){const Y=G[Z],$=_(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,H+j,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,j),j+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,w,E,k){const P=b.value,I=w+"_"+E;if(k[I]===void 0)return typeof P=="number"||typeof P=="boolean"?k[I]=P:k[I]=P.clone(),!0;{const z=k[I];if(typeof P=="number"||typeof P=="boolean"){if(z!==P)return k[I]=P,!0}else if(z.equals(P)===!1)return z.copy(P),!0}return!1}function g(b){const w=b.uniforms;let E=0;const k=16;for(let I=0,z=w.length;I<z;I++){const S=Array.isArray(w[I])?w[I]:[w[I]];for(let y=0,A=S.length;y<A;y++){const H=S[y],G=Array.isArray(H.value)?H.value:[H.value];for(let j=0,Z=G.length;j<Z;j++){const Y=G[j],$=_(Y),K=E%k;K!==0&&k-K<$.boundary&&(E+=k-K),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=$.storage}}}const P=E%k;return P>0&&(E+=k-P),b.__size=E,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function f(b){const w=b.target;w.removeEventListener("dispose",f);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class S0{constructor(t={}){const{canvas:e=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const d=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=ni,this.toneMappingExposure=1;const w=this;let E=!1,k=0,P=0,I=null,z=-1,S=null;const y=new fe,A=new fe;let H=null;const G=new qt(0);let j=0,Z=e.width,Y=e.height,$=1,K=null,lt=null;const vt=new fe(0,0,Z,Y),xt=new fe(0,0,Z,Y);let Ht=!1;const te=new Lo;let J=!1,nt=!1;const yt=new _e,ht=new R,Ot=new fe,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function pe(){return I===null?$:1}let L=n;function me(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",at,!1),L===null){const N="webgl2";if(L=me(N,M),L===null)throw me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $t,ee,St,ve,Nt,Ft,C,x,D,F,W,q,_t,st,dt,kt,et,ft,Vt,Et,pt,Rt,Bt,he;function U(){$t=new Pp(L),$t.init(),Rt=new f0(L,$t),ee=new bp(L,$t,t,Rt),St=new h0(L),ve=new Dp(L),Nt=new Zm,Ft=new u0(L,$t,St,Nt,ee,Rt,ve),C=new Tp(w),x=new Rp(w),D=new Bd(L),Bt=new wp(L,D),F=new Ip(L,D,ve,Bt),W=new kp(L,F,D,ve),Vt=new Up(L,ee,Ft),kt=new Ep(Nt),q=new jm(w,C,x,$t,ee,Bt,kt),_t=new M0(w,Nt),st=new Jm,dt=new s0($t),ft=new Mp(w,C,x,St,W,m,l),et=new c0(w,W,ee),he=new w0(L,ve,ee,St),Et=new Sp(L,$t,ve),pt=new Lp(L,$t,ve),ve.programs=q.programs,w.capabilities=ee,w.extensions=$t,w.properties=Nt,w.renderLists=st,w.shadowMap=et,w.state=St,w.info=ve}U();const it=new x0(w,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=$t.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$t.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(Z,Y,!1))},this.getSize=function(M){return M.set(Z,Y)},this.setSize=function(M,N,V=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,Y=N,e.width=Math.floor(M*$),e.height=Math.floor(N*$),V===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Z*$,Y*$).floor()},this.setDrawingBufferSize=function(M,N,V){Z=M,Y=N,$=V,e.width=Math.floor(M*V),e.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(vt)},this.setViewport=function(M,N,V,X){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,N,V,X),St.viewport(y.copy(vt).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(xt)},this.setScissor=function(M,N,V,X){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,N,V,X),St.scissor(A.copy(xt).multiplyScalar($).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(M){St.setScissorTest(Ht=M)},this.setOpaqueSort=function(M){K=M},this.setTransparentSort=function(M){lt=M},this.getClearColor=function(M){return M.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(M=!0,N=!0,V=!0){let X=0;if(M){let B=!1;if(I!==null){const rt=I.texture.format;B=rt===Ao||rt===To||rt===Eo}if(B){const rt=I.texture.type,mt=rt===Bn||rt===Ti||rt===Gs||rt===ds||rt===So||rt===bo,Mt=ft.getClearColor(),wt=ft.getClearAlpha(),It=Mt.r,Dt=Mt.g,At=Mt.b;mt?(p[0]=It,p[1]=Dt,p[2]=At,p[3]=wt,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=It,g[1]=Dt,g[2]=At,g[3]=wt,L.clearBufferiv(L.COLOR,0,g))}else X|=L.COLOR_BUFFER_BIT}N&&(X|=L.DEPTH_BUFFER_BIT),V&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",at,!1),st.dispose(),dt.dispose(),Nt.dispose(),C.dispose(),x.dispose(),W.dispose(),Bt.dispose(),he.dispose(),q.dispose(),it.dispose(),it.removeEventListener("sessionstart",vn),it.removeEventListener("sessionend",Go),ci.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=ve.autoReset,N=et.enabled,V=et.autoUpdate,X=et.needsUpdate,B=et.type;U(),ve.autoReset=M,et.enabled=N,et.autoUpdate=V,et.needsUpdate=X,et.type=B}function at(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pt(M){const N=M.target;N.removeEventListener("dispose",Pt),Zt(N)}function Zt(M){we(M),Nt.remove(M)}function we(M){const N=Nt.get(M).programs;N!==void 0&&(N.forEach(function(V){q.releaseProgram(V)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,X,B,rt){N===null&&(N=Gt);const mt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=$c(M,N,V,X,B);St.setMaterial(X,mt);let wt=V.index,It=1;if(X.wireframe===!0){if(wt=F.getWireframeAttribute(V),wt===void 0)return;It=2}const Dt=V.drawRange,At=V.attributes.position;let ie=Dt.start*It,xe=(Dt.start+Dt.count)*It;rt!==null&&(ie=Math.max(ie,rt.start*It),xe=Math.min(xe,(rt.start+rt.count)*It)),wt!==null?(ie=Math.max(ie,0),xe=Math.min(xe,wt.count)):At!=null&&(ie=Math.max(ie,0),xe=Math.min(xe,At.count));const ye=xe-ie;if(ye<0||ye===1/0)return;Bt.setup(B,X,Mt,V,wt);let Ye,se=Et;if(wt!==null&&(Ye=D.get(wt),se=pt,se.setIndex(Ye)),B.isMesh)X.wireframe===!0?(St.setLineWidth(X.wireframeLinewidth*pe()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(B.isLine){let bt=X.linewidth;bt===void 0&&(bt=1),St.setLineWidth(bt*pe()),B.isLineSegments?se.setMode(L.LINES):B.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else B.isPoints?se.setMode(L.POINTS):B.isSprite&&se.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const bt=B._multiDrawStarts,Le=B._multiDrawCounts,re=B._multiDrawCount,sn=wt?D.get(wt).bytesPerElement:1,Pi=Nt.get(X).currentProgram.getUniforms();for(let Ke=0;Ke<re;Ke++)Pi.setValue(L,"_gl_DrawID",Ke),se.render(bt[Ke]/sn,Le[Ke])}else if(B.isInstancedMesh)se.renderInstances(ie,ye,B.count);else if(V.isInstancedBufferGeometry){const bt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Le=Math.min(V.instanceCount,bt);se.renderInstances(ie,ye,Le)}else se.render(ie,ye)};function Ie(M,N,V){M.transparent===!0&&M.side===Mn&&M.forceSinglePass===!1?(M.side=qe,M.needsUpdate=!0,$s(M,N,V),M.side=ri,M.needsUpdate=!0,$s(M,N,V),M.side=Mn):$s(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),f=dt.get(V),f.init(N),b.push(f),V.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),M!==V&&M.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return M.traverse(function(B){const rt=B.material;if(rt)if(Array.isArray(rt))for(let mt=0;mt<rt.length;mt++){const Mt=rt[mt];Ie(Mt,V,B),X.add(Mt)}else Ie(rt,V,B),X.add(rt)}),b.pop(),f=null,X},this.compileAsync=function(M,N,V=null){const X=this.compile(M,N,V);return new Promise(B=>{function rt(){if(X.forEach(function(mt){Nt.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){B(M);return}setTimeout(rt,10)}$t.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let ne=null;function En(M){ne&&ne(M)}function vn(){ci.stop()}function Go(){ci.start()}const ci=new Dc;ci.setAnimationLoop(En),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(M){ne=M,it.setAnimationLoop(M),M===null?ci.stop():ci.start()},it.addEventListener("sessionstart",vn),it.addEventListener("sessionend",Go),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(N),N=it.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,N,I),f=dt.get(M,b.length),f.init(N),b.push(f),yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(yt),nt=this.localClippingEnabled,J=kt.init(this.clippingPlanes,nt),_=st.get(M,d.length),_.init(),d.push(_),it.enabled===!0&&it.isPresenting===!0){const rt=w.xr.getDepthSensingMesh();rt!==null&&$r(rt,N,-1/0,w.sortObjects)}$r(M,N,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(K,lt),Yt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Yt&&ft.addToRenderList(_,M),this.info.render.frame++,J===!0&&kt.beginShadows();const V=f.state.shadowsArray;et.render(V,M,N),J===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,B=_.transmissive;if(f.setupLights(),N.isArrayCamera){const rt=N.cameras;if(B.length>0)for(let mt=0,Mt=rt.length;mt<Mt;mt++){const wt=rt[mt];Wo(X,B,M,wt)}Yt&&ft.render(M);for(let mt=0,Mt=rt.length;mt<Mt;mt++){const wt=rt[mt];Vo(_,M,wt,wt.viewport)}}else B.length>0&&Wo(X,B,M,N),Yt&&ft.render(M),Vo(_,M,N);I!==null&&(Ft.updateMultisampleRenderTarget(I),Ft.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(w,M,N),Bt.resetDefaultState(),z=-1,S=null,b.pop(),b.length>0?(f=b[b.length-1],J===!0&&kt.setGlobalState(w.clippingPlanes,f.state.camera)):f=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function $r(M,N,V,X){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||te.intersectsSprite(M)){X&&Ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(yt);const mt=W.update(M),Mt=M.material;Mt.visible&&_.push(M,mt,Mt,V,Ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||te.intersectsObject(M))){const mt=W.update(M),Mt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ot.copy(M.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ot.copy(mt.boundingSphere.center)),Ot.applyMatrix4(M.matrixWorld).applyMatrix4(yt)),Array.isArray(Mt)){const wt=mt.groups;for(let It=0,Dt=wt.length;It<Dt;It++){const At=wt[It],ie=Mt[At.materialIndex];ie&&ie.visible&&_.push(M,mt,ie,V,Ot.z,At)}}else Mt.visible&&_.push(M,mt,Mt,V,Ot.z,null)}}const rt=M.children;for(let mt=0,Mt=rt.length;mt<Mt;mt++)$r(rt[mt],N,V,X)}function Vo(M,N,V,X){const B=M.opaque,rt=M.transmissive,mt=M.transparent;f.setupLightsView(V),J===!0&&kt.setGlobalState(w.clippingPlanes,V),X&&St.viewport(y.copy(X)),B.length>0&&Zs(B,N,V),rt.length>0&&Zs(rt,N,V),mt.length>0&&Zs(mt,N,V),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Wo(M,N,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?qs:Bn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const rt=f.state.transmissionRenderTarget[X.id],mt=X.viewport||y;rt.setSize(mt.z,mt.w);const Mt=w.getRenderTarget();w.setRenderTarget(rt),w.getClearColor(G),j=w.getClearAlpha(),j<1&&w.setClearColor(16777215,.5),Yt?ft.render(V):w.clear();const wt=w.toneMapping;w.toneMapping=ni;const It=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),J===!0&&kt.setGlobalState(w.clippingPlanes,X),Zs(M,V,X),Ft.updateMultisampleRenderTarget(rt),Ft.updateRenderTargetMipmap(rt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let At=0,ie=N.length;At<ie;At++){const xe=N[At],ye=xe.object,Ye=xe.geometry,se=xe.material,bt=xe.group;if(se.side===Mn&&ye.layers.test(X.layers)){const Le=se.side;se.side=qe,se.needsUpdate=!0,Xo(ye,V,X,Ye,se,bt),se.side=Le,se.needsUpdate=!0,Dt=!0}}Dt===!0&&(Ft.updateMultisampleRenderTarget(rt),Ft.updateRenderTargetMipmap(rt))}w.setRenderTarget(Mt),w.setClearColor(G,j),It!==void 0&&(X.viewport=It),w.toneMapping=wt}function Zs(M,N,V){const X=N.isScene===!0?N.overrideMaterial:null;for(let B=0,rt=M.length;B<rt;B++){const mt=M[B],Mt=mt.object,wt=mt.geometry,It=X===null?mt.material:X,Dt=mt.group;Mt.layers.test(V.layers)&&Xo(Mt,N,V,wt,It,Dt)}}function Xo(M,N,V,X,B,rt){M.onBeforeRender(w,N,V,X,B,rt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=qe,B.needsUpdate=!0,w.renderBufferDirect(V,N,X,B,M,rt),B.side=ri,B.needsUpdate=!0,w.renderBufferDirect(V,N,X,B,M,rt),B.side=Mn):w.renderBufferDirect(V,N,X,B,M,rt),M.onAfterRender(w,N,V,X,B,rt)}function $s(M,N,V){N.isScene!==!0&&(N=Gt);const X=Nt.get(M),B=f.state.lights,rt=f.state.shadowsArray,mt=B.state.version,Mt=q.getParameters(M,B.state,rt,N,V),wt=q.getProgramCacheKey(Mt);let It=X.programs;X.environment=M.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(M.isMeshStandardMaterial?x:C).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",Pt),It=new Map,X.programs=It);let Dt=It.get(wt);if(Dt!==void 0){if(X.currentProgram===Dt&&X.lightsStateVersion===mt)return Yo(M,Mt),Dt}else Mt.uniforms=q.getUniforms(M),M.onBeforeCompile(Mt,w),Dt=q.acquireProgram(Mt,wt),It.set(wt,Dt),X.uniforms=Mt.uniforms;const At=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=kt.uniform),Yo(M,Mt),X.needsLights=Qc(M),X.lightsStateVersion=mt,X.needsLights&&(At.ambientLightColor.value=B.state.ambient,At.lightProbe.value=B.state.probe,At.directionalLights.value=B.state.directional,At.directionalLightShadows.value=B.state.directionalShadow,At.spotLights.value=B.state.spot,At.spotLightShadows.value=B.state.spotShadow,At.rectAreaLights.value=B.state.rectArea,At.ltc_1.value=B.state.rectAreaLTC1,At.ltc_2.value=B.state.rectAreaLTC2,At.pointLights.value=B.state.point,At.pointLightShadows.value=B.state.pointShadow,At.hemisphereLights.value=B.state.hemi,At.directionalShadowMap.value=B.state.directionalShadowMap,At.directionalShadowMatrix.value=B.state.directionalShadowMatrix,At.spotShadowMap.value=B.state.spotShadowMap,At.spotLightMatrix.value=B.state.spotLightMatrix,At.spotLightMap.value=B.state.spotLightMap,At.pointShadowMap.value=B.state.pointShadowMap,At.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Dt,X.uniformsList=null,Dt}function qo(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Dr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Yo(M,N){const V=Nt.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function $c(M,N,V,X,B){N.isScene!==!0&&(N=Gt),Ft.resetTextureUnits();const rt=N.fog,mt=X.isMeshStandardMaterial?N.environment:null,Mt=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oi,wt=(X.isMeshStandardMaterial?x:C).get(X.envMap||mt),It=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Dt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!V.morphAttributes.position,ie=!!V.morphAttributes.normal,xe=!!V.morphAttributes.color;let ye=ni;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=w.toneMapping);const Ye=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=Ye!==void 0?Ye.length:0,bt=Nt.get(X),Le=f.state.lights;if(J===!0&&(nt===!0||M!==S)){const Qe=M===S&&X.id===z;kt.setState(X,M,Qe)}let re=!1;X.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Le.state.version||bt.outputColorSpace!==Mt||B.isBatchedMesh&&bt.batching===!1||!B.isBatchedMesh&&bt.batching===!0||B.isBatchedMesh&&bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&bt.instancing===!1||!B.isInstancedMesh&&bt.instancing===!0||B.isSkinnedMesh&&bt.skinning===!1||!B.isSkinnedMesh&&bt.skinning===!0||B.isInstancedMesh&&bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&bt.instancingMorph===!1&&B.morphTexture!==null||bt.envMap!==wt||X.fog===!0&&bt.fog!==rt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==kt.numPlanes||bt.numIntersection!==kt.numIntersection)||bt.vertexAlphas!==It||bt.vertexTangents!==Dt||bt.morphTargets!==At||bt.morphNormals!==ie||bt.morphColors!==xe||bt.toneMapping!==ye||bt.morphTargetsCount!==se)&&(re=!0):(re=!0,bt.__version=X.version);let sn=bt.currentProgram;re===!0&&(sn=$s(X,N,B));let Pi=!1,Ke=!1,Jr=!1;const Se=sn.getUniforms(),Gn=bt.uniforms;if(St.useProgram(sn.program)&&(Pi=!0,Ke=!0,Jr=!0),X.id!==z&&(z=X.id,Ke=!0),Pi||S!==M){Se.setValue(L,"projectionMatrix",M.projectionMatrix),Se.setValue(L,"viewMatrix",M.matrixWorldInverse);const Qe=Se.map.cameraPosition;Qe!==void 0&&Qe.setValue(L,ht.setFromMatrixPosition(M.matrixWorld)),ee.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Se.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ke=!0,Jr=!0)}if(B.isSkinnedMesh){Se.setOptional(L,B,"bindMatrix"),Se.setOptional(L,B,"bindMatrixInverse");const Qe=B.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Se.setValue(L,"boneTexture",Qe.boneTexture,Ft))}B.isBatchedMesh&&(Se.setOptional(L,B,"batchingTexture"),Se.setValue(L,"batchingTexture",B._matricesTexture,Ft),Se.setOptional(L,B,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",B._indirectTexture,Ft),Se.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",B._colorsTexture,Ft));const Qr=V.morphAttributes;if((Qr.position!==void 0||Qr.normal!==void 0||Qr.color!==void 0)&&Vt.update(B,V,sn),(Ke||bt.receiveShadow!==B.receiveShadow)&&(bt.receiveShadow=B.receiveShadow,Se.setValue(L,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Gn.envMap.value=wt,Gn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Gn.envMapIntensity.value=N.environmentIntensity),Ke&&(Se.setValue(L,"toneMappingExposure",w.toneMappingExposure),bt.needsLights&&Jc(Gn,Jr),rt&&X.fog===!0&&_t.refreshFogUniforms(Gn,rt),_t.refreshMaterialUniforms(Gn,X,$,Y,f.state.transmissionRenderTarget[M.id]),Dr.upload(L,qo(bt),Gn,Ft)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Dr.upload(L,qo(bt),Gn,Ft),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Se.setValue(L,"center",B.center),Se.setValue(L,"modelViewMatrix",B.modelViewMatrix),Se.setValue(L,"normalMatrix",B.normalMatrix),Se.setValue(L,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Qe=X.uniformsGroups;for(let ta=0,th=Qe.length;ta<th;ta++){const Ko=Qe[ta];he.update(Ko,sn),he.bind(Ko,sn)}}return sn}function Jc(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Qc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,N,V){Nt.get(M.texture).__webglTexture=N,Nt.get(M.depthTexture).__webglTexture=V;const X=Nt.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const V=Nt.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){I=M,k=N,P=V;let X=!0,B=null,rt=!1,mt=!1;if(M){const wt=Nt.get(M);wt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(L.FRAMEBUFFER,null),X=!1):wt.__webglFramebuffer===void 0?Ft.setupRenderTarget(M):wt.__hasExternalTextures&&Ft.rebindTextures(M,Nt.get(M.texture).__webglTexture,Nt.get(M.depthTexture).__webglTexture);const It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(mt=!0);const Dt=Nt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?B=Dt[N][V]:B=Dt[N],rt=!0):M.samples>0&&Ft.useMultisampledRTT(M)===!1?B=Nt.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?B=Dt[V]:B=Dt,y.copy(M.viewport),A.copy(M.scissor),H=M.scissorTest}else y.copy(vt).multiplyScalar($).floor(),A.copy(xt).multiplyScalar($).floor(),H=Ht;if(St.bindFramebuffer(L.FRAMEBUFFER,B)&&X&&St.drawBuffers(M,B),St.viewport(y),St.scissor(A),St.setScissorTest(H),rt){const wt=Nt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,V)}else if(mt){const wt=Nt.get(M.texture),It=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,wt.__webglTexture,V||0,It)}z=-1},this.readRenderTargetPixels=function(M,N,V,X,B,rt,mt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Nt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){St.bindFramebuffer(L.FRAMEBUFFER,Mt);try{const wt=M.texture,It=wt.format,Dt=wt.type;if(!ee.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-X&&V>=0&&V<=M.height-B&&L.readPixels(N,V,X,B,Rt.convert(It),Rt.convert(Dt),rt)}finally{const wt=I!==null?Nt.get(I).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,X,B,rt,mt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Nt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&mt!==void 0&&(Mt=Mt[mt]),Mt){St.bindFramebuffer(L.FRAMEBUFFER,Mt);try{const wt=M.texture,It=wt.format,Dt=wt.type;if(!ee.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-X&&V>=0&&V<=M.height-B){const At=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),L.readPixels(N,V,X,B,Rt.convert(It),Rt.convert(Dt),0),L.flush();const ie=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await fd(L,ie,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,At),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt)}finally{L.deleteBuffer(At),L.deleteSync(ie)}return rt}}finally{const wt=I!==null?Nt.get(I).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(M,N=null,V=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const X=Math.pow(2,-V),B=Math.floor(M.image.width*X),rt=Math.floor(M.image.height*X),mt=N!==null?N.x:0,Mt=N!==null?N.y:0;Ft.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,mt,Mt,B,rt),St.unbindTexture()},this.copyTextureToTexture=function(M,N,V=null,X=null,B=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,M=arguments[1],N=arguments[2],B=arguments[3]||0,V=null);let rt,mt,Mt,wt,It,Dt;V!==null?(rt=V.max.x-V.min.x,mt=V.max.y-V.min.y,Mt=V.min.x,wt=V.min.y):(rt=M.image.width,mt=M.image.height,Mt=0,wt=0),X!==null?(It=X.x,Dt=X.y):(It=0,Dt=0);const At=Rt.convert(N.format),ie=Rt.convert(N.type);Ft.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const xe=L.getParameter(L.UNPACK_ROW_LENGTH),ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ye=L.getParameter(L.UNPACK_SKIP_PIXELS),se=L.getParameter(L.UNPACK_SKIP_ROWS),bt=L.getParameter(L.UNPACK_SKIP_IMAGES),Le=M.isCompressedTexture?M.mipmaps[B]:M.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),L.pixelStorei(L.UNPACK_SKIP_ROWS,wt),M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,It,Dt,rt,mt,At,ie,Le.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,It,Dt,Le.width,Le.height,At,Le.data):L.texSubImage2D(L.TEXTURE_2D,B,It,Dt,rt,mt,At,ie,Le),L.pixelStorei(L.UNPACK_ROW_LENGTH,xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,se),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bt),B===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(M,N,V=null,X=null,B=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,M=arguments[2],N=arguments[3],B=arguments[4]||0);let rt,mt,Mt,wt,It,Dt,At,ie,xe;const ye=M.isCompressedTexture?M.mipmaps[B]:M.image;V!==null?(rt=V.max.x-V.min.x,mt=V.max.y-V.min.y,Mt=V.max.z-V.min.z,wt=V.min.x,It=V.min.y,Dt=V.min.z):(rt=ye.width,mt=ye.height,Mt=ye.depth,wt=0,It=0,Dt=0),X!==null?(At=X.x,ie=X.y,xe=X.z):(At=0,ie=0,xe=0);const Ye=Rt.convert(N.format),se=Rt.convert(N.type);let bt;if(N.isData3DTexture)Ft.setTexture3D(N,0),bt=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Ft.setTexture2DArray(N,0),bt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Le=L.getParameter(L.UNPACK_ROW_LENGTH),re=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=L.getParameter(L.UNPACK_SKIP_PIXELS),Pi=L.getParameter(L.UNPACK_SKIP_ROWS),Ke=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,It),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt),M.isDataTexture||M.isData3DTexture?L.texSubImage3D(bt,B,At,ie,xe,rt,mt,Mt,Ye,se,ye.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,B,At,ie,xe,rt,mt,Mt,Ye,ye.data):L.texSubImage3D(bt,B,At,ie,xe,rt,mt,Mt,Ye,se,ye),L.pixelStorei(L.UNPACK_ROW_LENGTH,Le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ke),B===0&&N.generateMipmaps&&L.generateMipmap(bt),St.unbindTexture()},this.initRenderTarget=function(M){Nt.get(M).__webglFramebuffer===void 0&&Ft.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ft.setTextureCube(M,0):M.isData3DTexture?Ft.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ft.setTexture2DArray(M,0):Ft.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){k=0,P=0,I=null,St.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Co?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===qr?"display-p3":"srgb"}}class li{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new li(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xs extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class b0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Po("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new R;class Hr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zc extends _s{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ki;const Ts=new R,ji=new R,Zi=new R,$i=new zt,As=new zt,Hc=new _e,yr=new R,Cs=new R,Mr=new R,Xl=new zt,Aa=new zt,ql=new zt;class E0 extends Pe{constructor(t=new zc){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new b0(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new Hr(n,3,0,!1)),Ki.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Hc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Zi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;wr(yr.set(-.5,-.5,0),Zi,a,ji,s,r),wr(Cs.set(.5,-.5,0),Zi,a,ji,s,r),wr(Mr.set(.5,.5,0),Zi,a,ji,s,r),Xl.set(0,0),Aa.set(1,0),ql.set(1,1);let o=t.ray.intersectTriangle(yr,Cs,Mr,!1,Ts);if(o===null&&(wr(Cs.set(-.5,.5,0),Zi,a,ji,s,r),Aa.set(0,1),o=t.ray.intersectTriangle(yr,Mr,Cs,!1,Ts),o===null))return;const l=t.ray.origin.distanceTo(Ts);l<t.near||l>t.far||e.push({distance:l,point:Ts.clone(),uv:un.getInterpolation(Ts,yr,Cs,Mr,Xl,Aa,ql,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wr(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(As.x=r*$i.x-s*$i.y,As.y=s*$i.x+r*$i.y):As.copy($i),i.copy(t),i.x+=As.x,i.y+=As.y,i.applyMatrix4(Hc)}class T0 extends Ve{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class A0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],m=n[s+1]-h,p=(a-h)/m;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new zt:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],a=[],o=new R,l=new _e;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),m<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ue(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ue(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Uo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let m=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;m*=h,p*=h,s(a,o,m,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Sr=new R,Ca=new Uo,Ra=new Uo,Pa=new Uo;class Yl extends A0{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sr.subVectors(s[0],s[1]).add(s[0]),c=Sr);const u=s[o%r],m=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(m),p),f=Math.pow(m.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),f<1e-4&&(f=_),Ca.initNonuniformCatmullRom(c.x,u.x,m.x,h.x,g,_,f),Ra.initNonuniformCatmullRom(c.y,u.y,m.y,h.y,g,_,f),Pa.initNonuniformCatmullRom(c.z,u.z,m.z,h.z,g,_,f)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(c.x,u.x,m.x,h.x,this.tension),Ra.initCatmullRom(c.y,u.y,m.y,h.y,this.tension),Pa.initCatmullRom(c.z,u.z,m.z,h.z,this.tension));return n.set(Ca.calc(l),Ra.calc(l),Pa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Qn extends gn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],m=[],p=[];let g=0;const _=[],f=n/2;let d=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(m,3)),this.setAttribute("uv",new Be(p,2));function b(){const E=new R,k=new R;let P=0;const I=(e-t)/n;for(let z=0;z<=r;z++){const S=[],y=z/r,A=y*(e-t)+t;for(let H=0;H<=s;H++){const G=H/s,j=G*l+o,Z=Math.sin(j),Y=Math.cos(j);k.x=A*Z,k.y=-y*n+f,k.z=A*Y,u.push(k.x,k.y,k.z),E.set(Z,I,Y).normalize(),m.push(E.x,E.y,E.z),p.push(G,1-y),S.push(g++)}_.push(S)}for(let z=0;z<s;z++)for(let S=0;S<r;S++){const y=_[S][z],A=_[S+1][z],H=_[S+1][z+1],G=_[S][z+1];h.push(y,A,G),h.push(A,H,G),P+=6}c.addGroup(d,P,0),d+=P}function w(E){const k=g,P=new zt,I=new R;let z=0;const S=E===!0?t:e,y=E===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,f*y,0),m.push(0,y,0),p.push(.5,.5),g++;const A=g;for(let H=0;H<=s;H++){const j=H/s*l+o,Z=Math.cos(j),Y=Math.sin(j);I.x=S*Y,I.y=f*y,I.z=S*Z,u.push(I.x,I.y,I.z),m.push(0,y,0),P.x=Z*.5+.5,P.y=Y*.5*y+.5,p.push(P.x,P.y),g++}for(let H=0;H<s;H++){const G=k+H,j=A+H;E===!0?h.push(j,j+1,G):h.push(j+1,j,G),z+=3}c.addGroup(d,z,E===!0?1:2),d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nn extends gn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,m=new R,p=[],g=[],_=[],f=[];for(let d=0;d<=n;d++){const b=[],w=d/n;let E=0;d===0&&a===0?E=.5/e:d===n&&l===Math.PI&&(E=-.5/e);for(let k=0;k<=e;k++){const P=k/e;u.x=-t*Math.cos(s+P*r)*Math.sin(a+w*o),u.y=t*Math.cos(a+w*o),u.z=t*Math.sin(s+P*r)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),m.copy(u).normalize(),_.push(m.x,m.y,m.z),f.push(P+E,1-w),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const w=h[d][b+1],E=h[d][b],k=h[d+1][b],P=h[d+1][b+1];(d!==0||a>0)&&p.push(w,E,P),(d!==n-1||l<Math.PI)&&p.push(E,k,P)}this.setIndex(p),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(_,3)),this.setAttribute("uv",new Be(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ko extends gn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new R,u=new R,m=new R;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,f=p/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(_),u.y=(t+e*Math.cos(f))*Math.sin(_),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),m.subVectors(u,h).normalize(),l.push(m.x,m.y,m.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,b=(s+1)*p+g;a.push(_,f,b),a.push(f,d,b)}this.setIndex(a),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class zn extends _s{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class No extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ys extends No{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ia=new _e,Kl=new R,jl=new R;class Gc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),Ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zl=new _e,Rs=new R,La=new R;class C0 extends Gc{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rs),La.copy(n.position),La.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(La),n.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl)}}class ps extends No{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new C0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class R0 extends Gc{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ms extends No{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new R0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class P0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$l(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$l();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function $l(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);const T={sky:13625599,fog:14479103,sun:16773849,grass:11069091,grassLight:12447414,grassDark:9427340,path:15653300,wood:13214334,woodDark:11109987,wallCream:16774112,wallPink:16770028,wallMint:14480872,wallLilac:15721722,roofPink:16038084,roofMint:10476744,roofLilac:13351152,roofPeach:16766629,roofBlue:11131120,bearBrown:12159583,bearHoney:14265980,bearCocoa:9398860,bearCream:15917769,snout:16181199,nose:5982783,burden:10129286,burdenStrap:7629410,dressRose:16238804,dressSky:12574965,dressLeaf:13102274,robeWhite:16645622,robeGold:16770728,leaf:10476698,leafPink:16371160,trunk:11569768,flowerYellow:16769162,flowerPink:16757702,flowerBlue:11455487,water:11131120,stone:14209996,light:16774857},Jl=new Map;function I0(i,t,e){const n=`${i},${t},${e}`;let s=Jl.get(n);return s||(s=new Ct(i,t,e),Jl.set(n,s)),s}const Ql=new Map;function ke(i){let t=Ql.get(i);return t||(t=new zn({color:i}),Ql.set(i,t)),t}function v(i,t,e,n,s=0,r=0,a=0){const o=new gt(I0(i,t,e),ke(n));return o.position.set(s,r,a),o.castShadow=!0,o.receiveShadow=!0,o}const L0={bear:T.bearBrown,pig:16103104,frog:10803580,rabbit:15985369,cat:13156276,lion:14264416,owl:9074788,mouse:12102300},D0={bear:T.bearCream,pig:16438490,frog:14085824,rabbit:16644334,cat:15591389,lion:15785147,owl:15261129,mouse:15985891},Ji=11565370;function le(i={}){const t=i.species??"bear",e=i.fur??L0[t],n=D0[t],s=i.scale??1,r=new ut,a=E=>{const k=new ut;return k.position.set(.2*E,.55,0),k.add(v(.3,.55,.34,e,0,-.28,0)),k.add(v(.32,.14,.38,n,0,-.5,.02)),r.add(k),k},o=a(-1),l=a(1),c=new ut;c.position.y=.55,r.add(c);const h=i.plump?1.02:.92,u=i.plump?.68:.6,m=i.plump?.78:.6,p=i.plump?.17:.1;c.add(v(h,.78,u,e,0,.4,0)),c.add(v(m,.5,p,n,0,.38,.28)),t==="bear"?c.add(v(.2,.2,.2,e,0,.25,-.34)):t==="pig"?(c.add(v(.12,.12,.16,15703980,.08,.3,-.36)),c.add(v(.12,.12,.12,15703980,.16,.4,-.4))):t==="rabbit"?c.add(v(.24,.24,.2,16777215,0,.28,-.36)):t==="cat"?(c.add(v(.14,.14,.5,e,.2,.3,-.5)),c.add(v(.14,.3,.14,e,.2,.5,-.72))):t==="lion"?(c.add(v(.14,.14,.55,e,.2,.28,-.52)),c.add(v(.22,.22,.22,Ji,.2,.28,-.84))):t==="mouse"&&c.add(v(.08,.08,.6,14263212,.1,.22,-.5));const g=E=>{const k=new ut;return k.position.set(.55*E,.68,0),k.add(v(.26,.55,.3,e,0,-.22,0)),k.add(v(.28,.14,.32,n,0,-.46,0)),c.add(k),k},_=g(-1),f=g(1),d=new ut;if(d.position.y=1.16,c.add(d),d.add(v(.95,.82,.8,e,0,.4,0)),t==="bear")d.add(v(.24,.24,.16,e,-.36,.9,0)),d.add(v(.24,.24,.16,e,.36,.9,0)),d.add(v(.14,.14,.1,n,-.36,.9,.05)),d.add(v(.14,.14,.1,n,.36,.9,.05)),d.add(v(.4,.3,.18,T.snout,0,.26,.46)),d.add(v(.16,.12,.08,T.nose,0,.34,.56));else if(t==="pig"){const E=v(.26,.26,.14,15703980,-.34,.9,0);E.rotation.z=.5,d.add(E);const k=v(.26,.26,.14,15703980,.34,.9,0);k.rotation.z=-.5,d.add(k),d.add(v(.42,.3,.16,15703980,0,.3,.46)),d.add(v(.07,.12,.04,13070206,-.1,.3,.55)),d.add(v(.07,.12,.04,13070206,.1,.3,.55))}else if(t==="frog"){for(const E of[-1,1])d.add(v(.28,.26,.28,e,.26*E,.94,.16)),d.add(v(.18,.18,.08,16777215,.26*E,.96,.32)),d.add(v(.09,.12,.04,T.nose,.26*E,.96,.37));d.add(v(.5,.06,.05,6192458,0,.2,.41))}else if(t==="rabbit"){for(const E of[-1,1])d.add(v(.2,.7,.14,e,.24*E,1.1,0)),d.add(v(.1,.5,.06,16238804,.24*E,1.1,.06));d.add(v(.3,.22,.14,16777215,0,.26,.44)),d.add(v(.12,.1,.06,15043227,0,.36,.52))}else if(t==="cat"){for(const E of[-1,1]){const k=v(.24,.28,.14,e,.32*E,.92,0);k.rotation.z=-.4*E,d.add(k),d.add(v(.12,.14,.08,16238804,.32*E,.9,.05))}d.add(v(.3,.2,.14,16777215,0,.24,.44)),d.add(v(.1,.08,.06,15043227,0,.32,.52))}else if(t==="lion")d.add(v(1.3,1.2,.34,Ji,0,.4,-.44)),d.add(v(1.24,.3,.62,Ji,0,.97,-.12)),d.add(v(.3,1.06,.62,Ji,-.62,.38,-.12)),d.add(v(.3,1.06,.62,Ji,.62,.38,-.12)),d.add(v(.9,.26,.6,Ji,0,-.15,-.1)),d.add(v(.24,.24,.18,e,-.42,1.06,.02)),d.add(v(.24,.24,.18,e,.42,1.06,.02)),d.add(v(.44,.32,.2,T.snout,0,.26,.47)),d.add(v(.16,.12,.08,T.nose,0,.35,.58));else if(t==="owl"){const E=v(.14,.3,.1,e,-.28,1.02,-.04);E.rotation.z=.2,d.add(E);const k=v(.14,.3,.1,e,.28,1.02,-.04);k.rotation.z=-.2,d.add(k),d.add(v(.36,.36,.08,n,-.24,.5,.42)),d.add(v(.36,.36,.08,n,.24,.5,.42)),d.add(v(.16,.16,.16,15245882,0,.32,.5))}else t==="mouse"&&(d.add(v(.3,.3,.1,e,-.32,.98,.02)),d.add(v(.3,.3,.1,e,.32,.98,.02)),d.add(v(.16,.16,.06,14263212,-.32,.98,.07)),d.add(v(.16,.16,.06,14263212,.32,.98,.07)),d.add(v(.26,.2,.16,15985891,0,.24,.44)),d.add(v(.1,.08,.06,14263212,0,.3,.53)),d.add(v(.28,.02,.02,16777215,-.05,.28,.55)),d.add(v(.28,.02,.02,16777215,.05,.28,.55)));t!=="frog"&&(d.add(v(.1,.14,.05,T.nose,-.24,.5,.41)),d.add(v(.1,.14,.05,T.nose,.24,.5,.41))),d.add(v(.12,.08,.04,16233149,-.36,.32,.41)),d.add(v(.12,.08,.04,16233149,.36,.32,.41));const b=i.outfit??"none",w=i.outfitColor??T.dressRose;if(b==="shirt"?(c.add(v(i.plump?1.12:.98,.52,i.plump?.8:.7,w,0,.52,0)),_.add(v(.32,.28,.36,w,0,-.1,0)),f.add(v(.32,.28,.36,w,0,-.1,0))):b==="dress"?(c.add(v(1,.5,.68,w,0,.12,0)),c.add(v(.96,.4,.7,w,0,.52,0)),c.add(v(.5,.16,.06,16777215,0,.68,.34)),_.add(v(.32,.24,.36,w,0,-.08,0)),f.add(v(.32,.24,.36,w,0,-.08,0))):b==="apron"?(c.add(v(.98,.5,.7,16446435,0,.5,0)),_.add(v(.32,.26,.36,16446435,0,-.1,0)),f.add(v(.32,.26,.36,16446435,0,-.1,0)),c.add(v(.62,.6,.08,w,0,.32,.32)),c.add(v(.3,.14,.06,w,0,.68,.34))):b==="overalls"?(c.add(v(.96,.44,.64,w,0,.2,0)),c.add(v(.44,.4,.08,w,0,.56,.3)),c.add(v(.12,.4,.06,w,-.22,.72,.3)),c.add(v(.12,.4,.06,w,.22,.72,.3))):b==="robe"&&(c.add(v(1.02,.9,.7,w,0,.36,0)),c.add(v(.3,.1,.06,T.robeGold,0,.66,.34)),_.add(v(.34,.4,.38,w,0,-.14,0)),f.add(v(.34,.4,.38,w,0,-.14,0)),d.add(v(.9,.5,.2,w,0,.5,-.45))),i.sling){const E=i.plump?.42:.34,k=v(.14,1.05,.05,9072466,0,.42,E);k.rotation.z=.72,c.add(k);const P=v(.14,1.05,.05,9072466,0,.42,i.plump?-.41:-.33);P.rotation.z=-.72,c.add(P),c.add(v(.24,.12,.7,9072466,-.34,.82,0)),c.add(v(.46,.36,.22,11108958,.5,.02,.1)),c.add(v(.46,.14,.24,9072466,.5,.16,.1)),c.add(v(.1,.1,.06,T.robeGold,.5,.06,.23))}if(i.burden){c.add(v(.88,.62,.54,T.burden,0,.45,-.56)),c.add(v(.7,.5,.46,8880506,0,.96,-.54)),c.add(v(.5,.36,.36,T.burdenStrap,0,1.28,-.52));const E=i.plump?.42:.31;c.add(v(.1,.6,.08,T.burdenStrap,-.3,.45,E)),c.add(v(.1,.6,.08,T.burdenStrap,.3,.45,E))}return r.scale.setScalar(s),{root:r,body:c,head:d,armL:_,armR:f,legL:o,legR:l}}function jt(i,t,e){const n=e?Math.sin(t*9)*.7:0,s=Math.sin(t*2)*.02;i.legL.rotation.x=n,i.legR.rotation.x=-n,i.armL.rotation.x=-n*.8,i.armR.rotation.x=n*.8,i.body.position.y=.55+(e?Math.abs(Math.sin(t*9))*.06:s),i.head.rotation.z=e?Math.sin(t*4.5)*.04:Math.sin(t*1.5)*.03}const $e={east:60,west:-46,north:-34,south:34,gateHalfWidth:1.9};function U0(i,t,e=5,n=4.4,s=2.6){const r=new ut;r.add(v(e,s,n,i,0,s/2,0));const a=T.woodDark;r.add(v(.22,s,.22,a,-e/2+.11,s/2,n/2+.02)),r.add(v(.22,s,.22,a,e/2-.11,s/2,n/2+.02)),r.add(v(e,.22,.22,a,0,s-.11,n/2+.02));const o=4;for(let l=0;l<o;l++){const c=e+.6-l*(e+.6)/o;r.add(v(c,.5,n+.6,t,0,s+.25+l*.5,0))}r.add(v(.55,2.2,.55,T.stone,e/2-.8,s+1.6,-.8)),r.add(v(.7,.25,.7,12893877,e/2-.8,s+2.75,-.8)),r.add(v(.9,1.5,.16,T.woodDark,0,.75,n/2+.06)),r.add(v(.12,.12,.1,T.roofPeach,.28,.75,n/2+.16));for(const l of[-e/2+1.1,e/2-1.1])r.add(v(.8,.8,.12,T.roofBlue,l,1.5,n/2+.06)),r.add(v(.9,.14,.14,T.woodDark,l,1.06,n/2+.08));return r}function k0(i=!1){const t=new ut,e=i?T.leafPink:T.leaf;return t.add(v(.5,1.6,.5,T.trunk,0,.8,0)),t.add(v(1.9,1.3,1.9,e,0,2.2,0)),t.add(v(1.3,.9,1.3,e,0,3.2,0)),t.add(v(.7,.6,.7,e,0,3.9,0)),t}function N0(){const i=new ut;i.add(v(.18,2.4,.18,T.woodDark,0,1.2,0));const t=v(.4,.4,.4,T.light,0,2.5,0);return t.material=new zn({color:T.light,emissive:16773296,emissiveIntensity:.6}),i.add(t),i.add(v(.5,.12,.5,T.woodDark,0,2.75,0)),i}function F0(){const i=new ut;return i.add(v(1.6,.8,1.6,T.stone,0,.4,0)),i.add(v(1.2,.1,1.2,T.water,0,.82,0)),i.add(v(.14,1.5,.14,T.woodDark,-.7,1.2,0)),i.add(v(.14,1.5,.14,T.woodDark,.7,1.2,0)),i.add(v(1.8,.35,1.1,T.roofPink,0,2.05,0)),i}function tc(i){const t=new ut;t.add(v(2.6,.9,1.2,T.wood,0,.45,0)),t.add(v(2.8,.14,1.4,T.woodDark,0,.95,0)),t.add(v(.4,.3,.4,T.flowerYellow,-.8,1.15,.1)),t.add(v(.35,.35,.35,16757702,-.1,1.2,-.2)),t.add(v(.45,.25,.3,11455487,.7,1.14,.15)),t.add(v(.14,2.2,.14,T.woodDark,-1.25,1.1,.62)),t.add(v(.14,2.2,.14,T.woodDark,1.25,1.1,.62)),t.add(v(.14,2.2,.14,T.woodDark,-1.25,1.1,-.62)),t.add(v(.14,2.2,.14,T.woodDark,1.25,1.1,-.62));for(let e=0;e<5;e++){const n=e%2===0?i:16775407;t.add(v(.58,.16,1.7,n,-1.16+e*.58,2.28,0))}return t}function O0(){const i=new ut;return i.add(v(.7,.9,.7,T.wood,0,.45,0)),i.add(v(.76,.12,.76,T.woodDark,0,.25,0)),i.add(v(.76,.12,.76,T.woodDark,0,.7,0)),i.add(v(.6,.06,.6,T.water,0,.93,0)),i}function B0(){const i=new ut;return i.add(v(.8,.8,.8,T.wood,0,.4,0)),i.add(v(.7,.7,.7,T.woodDark,.75,.35,.15)),i.add(v(.6,.6,.6,T.wood,.3,1.1,.05)),i}function z0(){const i=new ut;return i.add(v(1.4,.9,1,15785374,0,.45,0)),i.add(v(1.44,.14,1.04,14270584,0,.45,0)),i}function H0(){const i=new ut;return i.add(v(.14,2,.14,T.woodDark,-2.2,1,0)),i.add(v(.14,2,.14,T.woodDark,2.2,1,0)),i.add(v(4.4,.05,.05,16775407,0,1.9,0)),i.add(v(.7,.8,.06,T.dressSky,-1.2,1.5,0)),i.add(v(.6,.7,.06,T.dressRose,.1,1.55,0)),i.add(v(.5,.6,.06,T.dressLeaf,1.3,1.6,0)),i}function G0(i){const t=new ut,e=new ut;return e.position.set(0,.42,.16),t.add(v(.32,.28,.42,i,0,.32,-.04)),t.add(v(.16,.1,.16,i,0,.2,-.3)),e.add(v(.2,.2,.2,i,0,0,0)),e.add(v(.1,.06,.12,16757575,0,-.02,.14)),e.add(v(.12,.12,.04,14701674,0,.12,.02)),t.add(e),t.add(v(.05,.16,.05,15247694,-.08,.08,-.02)),t.add(v(.05,.16,.05,15247694,.08,.08,-.02)),{root:t,head:e}}function V0(){const i=new ut;i.add(v(1.15,.75,.65,16446440,0,.68,0)),i.add(v(.36,.1,.4,4865331,-.2,1.04,.05)),i.add(v(.3,.1,.3,4865331,.3,.68,-.15));const t=new ut;t.position.set(.68,.78,0),t.add(v(.36,.34,.32,16446440,0,0,0)),t.add(v(.14,.1,.1,16238804,.2,-.08,0)),t.add(v(.06,.14,.05,15261646,.05,.18,-.14)),t.add(v(.06,.14,.05,15261646,.05,.18,.14)),i.add(t);for(const[n,s]of[[-.4,-.22],[-.4,.22],[.32,-.22],[.32,.22]])i.add(v(.18,.55,.18,15261646,n,.28,s));const e=v(.06,.4,.06,16446440,-.62,.75,0);return e.rotation.x=.3,i.add(e),{root:i,tail:e}}function W0(){const i=new ut;i.add(v(.5,.9,.5,9082784,0,.45,0)),i.add(v(.6,.14,.6,7305858,0,.94,0));const t=new ut;return t.position.set(0,.85,-.2),t.add(v(.5,.1,.1,7305858,0,0,-.2)),i.add(t),i.add(v(.14,.4,.14,9082784,.32,.5,.2)),i.add(v(1.3,.35,.7,T.stone,.55,.18,.55)),i.add(v(1.1,.1,.5,T.water,.55,.35,.55)),i}function X0(){const i=new ut;return i.add(v(.6,.24,.6,13215845,0,.12,0)),i.add(v(.46,.12,.46,14465918,0,.24,0)),i}function Da(i,t,e){return v(.16,.2,.16,i,t,.34,e)}function Qi(i){const t=new ut,e=Math.max(2,Math.round(i/1.2));for(let n=0;n<e;n++)t.add(v(.14,.8,.14,T.wood,-i/2+n*i/(e-1),.4,0));return t.add(v(i,.12,.1,T.wood,0,.62,0)),t.add(v(i,.12,.1,T.wood,0,.32,0)),t}function q0(i){const t=new ut,e=[],n=Y0(7),s=new gt(new Ct(220,1,220),ke(T.grass));s.position.y=-.5,s.receiveShadow=!0,t.add(s);for(let x=0;x<160;x++){const D=(n()-.5)*180,F=(n()-.5)*160;if(Math.abs(D)<30&&Math.abs(F)<26)continue;const W=n()>.5?T.grassLight:T.grassDark,q=v(1+n()*2,.12,1+n()*2,W,D,.06,F);q.castShadow=!1,t.add(q)}const r=(x,D,F,W)=>{const q=v(F,.14,W,T.path,x,.07,D);q.castShadow=!1,t.add(q)};r(0,0,16,16),r(33.5,0,51,5),r(63,0,8,4),r(-16,0,16,4.5),r(0,-14,4.5,14),r(0,13,4.5,12);const a=[[-10,-12,.35,T.wallCream,T.roofPink],[10,-13,-.3,T.wallPink,T.roofMint],[-14,10,.5,T.wallMint,T.roofLilac],[12,11,-.6,T.wallLilac,T.roofPeach],[-26,-2,1.35,T.wallCream,T.roofBlue],[22,-8,-1.1,T.wallPink,T.roofPink]],o=[];for(const[x,D,F,W,q]of a){const _t=U0(W,q);_t.position.set(x,0,D),_t.rotation.y=F,t.add(_t),e.push({x,z:D,r:3.6});const st=5/2-.8,dt=-.8;o.push(new R(x+st*Math.cos(F)+dt*Math.sin(F),2.6+3.1,D-st*Math.sin(F)+dt*Math.cos(F)))}const l=F0();l.position.set(0,0,0),t.add(l),e.push({x:0,z:0,r:1.6});const c=[{id:"well",name:"the Well",x:0,z:0,r:2.4}],h=W0();h.position.set(-5,0,-3.5),t.add(h),e.push({x:-5,z:-3.5,r:.9}),c.push({id:"pump",name:"the Water Pump",x:-5,z:-3.5,r:2.2});const u=[];[[21.2,19.4,15985369],[22.4,18.6,12159583]].forEach(([x,D,F],W)=>{const{root:q,head:_t}=G0(F);q.position.set(x,0,D),q.rotation.y=W*1.4,t.add(q),e.push({x,z:D,r:.35}),u.push({root:q,head:_t,phase:W*2.4})});const p=X0();p.position.set(23.4,0,19.8),t.add(p),p.add(Da(16775407,-.12,.05)),p.add(Da(15985369,.1,-.05)),p.add(Da(16774112,.02,.15)),e.push({x:23.4,z:19.8,r:.5}),c.push({id:"chickens",name:"the Chickens",x:21.8,z:19,r:2.4}),c.push({id:"nest",name:"the Nest",x:23.4,z:19.8,r:1.8});const g=Qi(4.4);g.position.set(28,0,20.5),t.add(g);const _=Qi(4.4);_.position.set(28,0,24.5),t.add(_);const f=Qi(4.4);f.position.set(25.8,0,22.5),f.rotation.y=Math.PI/2,t.add(f);const d=Qi(4.4);d.position.set(30.2,0,22.5),d.rotation.y=Math.PI/2,t.add(d);const b=V0();b.root.position.set(28,0,22.5),b.root.rotation.y=-.6,t.add(b.root),e.push({x:28,z:22.5,r:1.3}),c.push({id:"cow",name:"the Cow",x:28,z:22.5,r:2.6});const w=[[-18,-18,!0],[18,-19,!1],[-20,17,!1],[20,18,!0],[-32,-12,!1],[-34,8,!0],[30,14,!1],[8,-22,!0],[-8,22,!1],[36,-14,!0],[44,10,!1],[52,-8,!0]];for(const[x,D,F]of w){const W=k0(F);W.position.set(x,0,D),W.rotation.y=n()*Math.PI,t.add(W),e.push({x,z:D,r:.9})}for(const[x,D]of[[14,3.4],[26,-3.4],[38,3.4],[-14,3.4]]){const F=N0();F.position.set(x,0,D),t.add(F),e.push({x,z:D,r:.4})}const E=tc(T.roofPink);E.position.set(-4,0,8.5),E.rotation.y=Math.PI,t.add(E),e.push({x:-4,z:8.5,r:1.8});const k=tc(T.roofBlue);k.position.set(6,0,-8),k.rotation.y=.2,t.add(k),e.push({x:6,z:-8,r:1.8});const P=O0();P.position.set(8.2,0,9),t.add(P),e.push({x:8.2,z:9,r:.6});const I=B0();I.position.set(-13,0,13),I.rotation.y=.4,t.add(I),e.push({x:-13,z:13,r:1.1});for(const[x,D]of[[16,18.5],[19.5,17]]){const F=z0();F.position.set(x,0,D),F.rotation.y=n()*Math.PI,t.add(F),e.push({x,z:D,r:.9})}const z=H0();z.position.set(-6,0,-10.5),z.rotation.y=.35,t.add(z);const S=Qi(7);S.position.set(-10,0,-8.2),t.add(S);const y=Qi(6);y.position.set(-15.4,0,-12),y.rotation.y=Math.PI/2,t.add(y);const A=[T.flowerYellow,T.flowerPink,T.flowerBlue];for(let x=0;x<70;x++){const D=(n()-.5)*120,F=(n()-.5)*90,W=v(.22,.22,.22,A[x%3],D,.2,F);W.castShadow=!1,t.add(W),t.add(v(.08,.2,.08,T.leaf,D,.06,F))}const H=16249834,G=15722972,j=14670024,Z=2.8,Y=1.2,$=(x,D,F,W,q)=>{const _t=F-x,st=W-D,dt=Math.hypot(_t,st),kt=Math.round(dt/6),et=Math.abs(_t)>Math.abs(st);for(let ft=0;ft<kt;ft++){const Vt=x+_t*(ft+.5)/kt,Et=D+st*(ft+.5)/kt;if(q&&q(Vt,Et))continue;const pt=dt/kt,Rt=et?pt:Y,Bt=et?Y:pt,he=v(Rt,Z,Bt,ft%2===0?H:G,Vt,Z/2,Et);t.add(he),t.add(v(et?Rt:Y+.06,.09,et?Y+.06:Bt,j,Vt,1,Et)),t.add(v(et?Rt:Y+.06,.09,et?Y+.06:Bt,j,Vt,1.9,Et)),t.add(v(Rt+.2,.28,Bt+.2,j,Vt,Z+.14,Et));const U=Math.floor(pt/1.9);for(let it=0;it<U;it++){const Q=-pt/2+(it+.5)*(pt/U);t.add(v(et?.85:Y+.1,.55,et?Y+.1:.85,H,Vt+(et?Q:0),Z+.55,Et+(et?0:Q)))}}},K=(x,D,F=!1)=>{const W=F?2.4:2,q=F?5.2:4.2;t.add(v(W,q,W,H,x,q/2,D)),t.add(v(W+.5,.35,W+.5,j,x,q+.18,D));for(const[_t,st]of[[-1,-1],[-1,1],[1,-1],[1,1]])t.add(v(.55,.55,.55,H,x+_t*W/2.6,q+.6,D+st*W/2.6));t.add(v(W-.4,.6,W-.4,T.roofPink,x,q+.75,D)),e.push({x,z:D,r:W*.75})},lt=$e.east,vt=$e.west,xt=$e.north,Ht=$e.south;$(vt,xt,lt,xt),$(vt,Ht,lt,Ht),$(vt,xt,vt,Ht),$(lt,xt,lt,Ht,(x,D)=>Math.abs(D)<4.4),K(vt,xt),K(lt,xt),K(vt,Ht),K(lt,Ht),K(lt,-3.6,!0),K(lt,3.6,!0),t.add(v(.9,1.1,5.4,H,lt,4.3,0)),t.add(v(1.1,.3,5.8,j,lt,4.95,0)),t.add(v(.7,.5,4.6,T.roofPink,lt,5.3,0));const te={open:!1},J=x=>{const D=new ut;D.position.set(lt,0,2.35*x);const F=v(.35,3.4,2.3,T.woodDark,0,1.7,-1.15*x);return D.add(F),D.add(v(.4,.16,2.3,9072466,0,.9,-1.15*x)),D.add(v(.4,.16,2.3,9072466,0,2.4,-1.15*x)),D.add(v(.12,.3,.3,T.robeGold,.2,1.7,-2*x)),t.add(D),D},nt=J(-1),yt=J(1);for(const[x,D]of[[-30,-20],[18,24],[-24,18]])t.add(v(1.4,.8,1.2,T.stone,x,.4,D)),t.add(v(.8,.5,.8,12893877,x+1.1,.25,D+.4)),t.add(v(.5,.3,.5,T.grassDark,x+.4,.85,D-.3));const ht=new ut,Ot=new Kt({color:16767306,transparent:!0,opacity:.8,fog:!1}),Gt=new gt(new Ct(2.6,40,2.6),Ot);Gt.position.y=20,ht.add(Gt);const Yt=new gt(new Ct(1.3,44,1.3),new Kt({color:16776160,transparent:!0,opacity:.95,fog:!1}));Yt.position.y=22,ht.add(Yt);const pe=new Kt({color:16771194,fog:!1}),L=new gt(new Ct(3.4,3.4,3.4),pe);L.position.y=42,L.rotation.set(Math.PI/4,0,Math.PI/4),ht.add(L);const me=new gt(new Ct(5,5,5),new Kt({color:16774072,transparent:!0,opacity:.5,fog:!1}));me.position.y=42,me.rotation.set(0,Math.PI/4,Math.PI/4),ht.add(me);const $t=new ps(16771194,3.5,40);$t.position.y=4,ht.add($t),ht.position.set(64.5,0,0),ht.visible=!1,t.add(ht);const ee=[];for(const x of o)for(let D=0;D<3;D++){const F=new gt(new Ct(.5,.5,.5),new zn({color:16118508,transparent:!0,opacity:.7}));F.castShadow=!1,t.add(F),ee.push({mesh:F,base:x,phase:D/3,speed:.14+n()*.05})}const St=[],ve=[16766629,16038084,11455487,13351152,16774072,12447414];[[-18,4],[5,12],[-10,-4],[16,8],[-24,10],[30,-6]].forEach(([x,D],F)=>{const W=new ut,q=ve[F%ve.length],_t=new gt(new Ct(.3,.05,.24),new zn({color:q}));_t.position.x=-.16;const st=_t.clone();st.position.x=.16;const dt=new gt(new Ct(.08,.08,.26),ke(T.nose));W.add(_t,st,dt),t.add(W),St.push({g:W,wingL:_t,wingR:st,cx:x,cz:D,r:1.5+n()*2,ph:n()*6.28,sp:.5+n()*.5})});const Ft=[];for(let x=0;x<3;x++){const D=new ut,F=new gt(new Ct(.3,.22,.5),ke(16775407)),W=new gt(new Ct(.5,.06,.3),ke(14209996));W.position.x=-.35;const q=W.clone();q.position.x=.35,D.add(F,W,q),t.add(D),Ft.push({g:D,wingL:W,wingR:q,r:12+x*7,h:9+x*2.5,ph:x*2.1,sp:.12+x*.03})}const C=x=>{const D=te.open?1.85:0;nt.rotation.y+=(-D-nt.rotation.y)*.04,yt.rotation.y+=(D-yt.rotation.y)*.04;for(const F of ee){const W=(x*F.speed+F.phase)%1;F.mesh.position.set(F.base.x+Math.sin((W+F.phase)*9)*.3,F.base.y+W*3.2,F.base.z+Math.cos((W+F.phase)*7)*.2);const q=.5+W*.9;F.mesh.scale.setScalar(q),F.mesh.material.opacity=.65*(1-W)}for(const F of St){const W=x*F.sp+F.ph;F.g.position.set(F.cx+Math.cos(W)*F.r,1.2+Math.sin(x*1.7+F.ph)*.5,F.cz+Math.sin(W*1.3)*F.r),F.g.rotation.y=-W*1.15+Math.PI/2;const q=Math.sin(x*16+F.ph)*.9;F.wingL.rotation.z=q,F.wingR.rotation.z=-q}for(const F of Ft){const W=x*F.sp+F.ph;F.g.position.set(Math.cos(W)*F.r,F.h+Math.sin(x*.9+F.ph),Math.sin(W)*F.r),F.g.rotation.y=-W-Math.PI/2;const q=Math.sin(x*7+F.ph)*.6;F.wingL.rotation.z=q,F.wingR.rotation.z=-q}for(const F of u){const W=(x*.6+F.phase)%4;F.head.rotation.x=W<.5?Math.sin(W*Math.PI/.5)*.7:0}b.tail.rotation.z=Math.sin(x*1.1)*.25};return i.add(t),{group:t,colliders:e,interactables:c,lightBeam:ht,gate:te,update:C}}function Y0(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const K0=[{id:"christiana",name:"Christiana",species:"bear",fur:T.bearHoney,scale:.95,outfit:"dress",outfitColor:T.dressRose,x:-8.5,z:-7,facing:Math.PI,getLines:i=>{const t=i.eggsCollected>=3?[{speaker:"Christiana",text:"Oh — fresh eggs! Bless you, dear, breakfast will be lovely this morning. 🥚"}]:[];return i.talkedToEvangelist?[{speaker:"Christiana",text:"You really mean to go, then… toward that light in the east?"},{speaker:"Christiana",text:"Then go safely, my dear Christian. The cubs and I will keep the hearth warm."},{speaker:"Christiana",text:"Perhaps one day… we will follow you. 💗"}]:[...t,{speaker:"Christiana",text:"Christian, dear, you have been sighing all week over that heavy burden on your back."},{speaker:"Christiana",text:"You keep saying our city will not stand… it frightens the cubs, you know."},{speaker:"Christiana",text:"If you truly must find answers, they say a wise bear called Evangelist walks the east road."}]},onFinish:i=>{i.talkedToFamily=!0}},{id:"cub1",name:"Elsie (cub)",species:"bear",fur:T.bearBrown,scale:.55,outfit:"dress",outfitColor:12098272,x:-11,z:-6,facing:Math.PI*.8,wanderRadius:2,getLines:i=>i.talkedToEvangelist?[{speaker:"Elsie",text:"Papa, is that sparkly light for YOU? It looks like a star that fell down!"},{speaker:"Elsie",text:"Bring me back a piece of it, okay? Promise!"}]:[{speaker:"Elsie",text:"Papa! Why do you always carry that big lumpy backpack?"},{speaker:"Elsie",text:"It looks SO heavy. I tried to lift it once and fell right over. Plop!"}]},{id:"cub2",name:"Anna (cub)",species:"bear",fur:T.bearHoney,scale:.5,outfit:"dress",outfitColor:T.dressLeaf,x:-7,z:-5,facing:-Math.PI*.7,wanderRadius:2,getLines:i=>i.talkedToEvangelist?[{speaker:"Anna",text:"*sniff* …You are going away, Papa?"},{speaker:"Anna",text:"Mama says brave bears follow their hearts. So… be the bravest one ever."}]:[{speaker:"Anna",text:"Papa, I found a honey-flower by the well! Want to smell it?"},{speaker:"Anna",text:"It smells like… like honey! Hee hee."}]},{id:"obstinate",name:"Obstinate",species:"pig",scale:1.05,outfit:"shirt",outfitColor:10336417,x:4,z:4.5,facing:-Math.PI/3,getLines:i=>i.chaseDone?[{speaker:"Obstinate",text:"Oh. So you've come crawling back, have you? …No? Just VISITING? Hmph."},{speaker:"Obstinate",text:"Moonbeams and fairy-gold. Mark my words, Christian — no good ever came of leaving a perfectly fine city."}]:[{speaker:"Obstinate",text:"Hmph. Still going on about the city falling down, Christian?"},{speaker:"Obstinate",text:"This is the finest city anyone could want! Acorns in the market, mud by the river…"},{speaker:"Obstinate",text:"Leave if you like — but no sensible creature will go with you. Hmph!"}]},{id:"pliable",name:"Pliable",species:"rabbit",scale:.95,outfit:"shirt",outfitColor:16766629,x:7,z:1,facing:Math.PI,wanderRadius:3,getLines:i=>i.pliableLeft?[{speaker:"Pliable",text:"Ah— Christian! You made it out of that dreadful bog, then. *ahem* …You're not cross with me, are you?"},{speaker:"Pliable",text:"The mud, you see. It was in my EARS. A gentle-rabbit has his limits! …But do write when you reach that golden city."}]:i.pliableFollowing?[{speaker:"Pliable",text:"Lead on, Christian! Crowns of gold, here we come — hop hop!"}]:i.talkedToEvangelist?[{speaker:"Pliable",text:"A shining light?! And a Wicket Gate?! Ooooh, tell me EVERYTHING."},{speaker:"Christian",text:"Evangelist says beyond the gate lies the way to the Celestial City — where no city ever crumbles."},{speaker:"Pliable",text:"Golden streets… crowns… no crumbling… It sounds marvellous. And far. And possibly muddy. Oh, I can't decide!"}]:[{speaker:"Pliable",text:"Oh, hello Christian! Don't mind old Obstinate — he grumbles at clouds, too."},{speaker:"Pliable",text:"A Celestial City, all gold and light? If it's real, I'd love to see it… I think."}]},{id:"baker",name:"Mrs. Bramble",species:"bear",fur:T.bearBrown,scale:.98,outfit:"apron",outfitColor:15980966,x:-3,z:11,facing:0,getLines:i=>i.talkedToEvangelist?[{speaker:"Mrs. Bramble",text:"Leaving us, are you? Well, I never held with any of it, but I'll miss your face at my counter."},{speaker:"Christian",text:"Thank you for all the buns, Mrs. Bramble. I won't forget your kindness."},{speaker:"Mrs. Bramble",text:"Oh, hush now, off with you before I get flour in my eyes. Go on!"}]:[{speaker:"Mrs. Bramble",text:"Fresh honey-buns! Oh — Christian, dear, you look pale as flour."},{speaker:"Christian",text:"I'm well enough, Mrs. Bramble. Just… this burden. It won't let me rest."},{speaker:"Mrs. Bramble",text:"Here, imagine I gave you a bun. On the house. You'll need your strength, whatever it is you're up to."}]},{id:"farmer",name:"Old Hamlet",species:"pig",fur:15247282,scale:1,outfit:"overalls",outfitColor:9418968,x:17,z:16,facing:-Math.PI/2,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Old Hamlet",text:"A light in the east, eh? My old snout smells a change in the wind…"},{speaker:"Christian",text:"I hope it's a change for the better, Old Hamlet. I mean to follow it."},{speaker:"Old Hamlet",text:"Take care on the road, lad. Mind the bog past the fields — it swallows boots whole."}]:[{speaker:"Old Hamlet",text:"Mornin', Christian. Fine day for turnips. Not so fine for carryin' great sacks about, I'd say."},{speaker:"Christian",text:"It isn't turnips, Old Hamlet. I wish it were something I could just set down in a field."},{speaker:"Old Hamlet",text:"You look like a pig who's seen the butcher's calendar. Whatever's weighing you, don't carry it alone."}]},{id:"frogkid",name:"Puddle",species:"frog",scale:.55,outfit:"shirt",outfitColor:16238804,x:2.5,z:-3,facing:Math.PI,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Puddle",text:"Ribbit! Are you really going away, Mister Christian? All the way past the fields?"},{speaker:"Christian",text:"All the way to a Celestial City, Puddle. I hope you'll come visit someday."},{speaker:"Puddle",text:"A CELESTIAL city?! Do the puddles there go on forever?! …I'll practice my jumping, just in case!"}]:[{speaker:"Puddle",text:"Ribbit! Mister Christian! I can jump higher than the well! Wanna see?"},{speaker:"Christian",text:"Ha! Go on then, Puddle — show me your best jump."},{speaker:"Puddle",text:"…Okay, maybe not HIGHER. But definitely louder. RIBBIT!"}]},{id:"florist",name:"Clover",species:"rabbit",fur:15325123,scale:.92,outfit:"dress",outfitColor:13102274,x:-18,z:4,facing:Math.PI/2,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Clover",text:"Everyone's whispering about you, Christian. A light beyond the fields, imagine!"},{speaker:"Christian",text:"It's true, Clover. I mean to follow it, however far it leads."},{speaker:"Clover",text:"Here — a daisy for your buttonhole. Flowers make every road shorter."}]:[{speaker:"Clover",text:"Good day, Christian! My daisies came up lovely this spring, haven't they?"},{speaker:"Christian",text:"They're lovely, Clover. I only wish I could enjoy them without this weight on my back."},{speaker:"Clover",text:"Though… the soil's been trembling lately. The flowers feel it too, I think."}]},{id:"cat",name:"Mr. Whiskers",species:"cat",scale:.96,outfit:"shirt",outfitColor:13351152,x:10,z:-6,facing:Math.PI*.75,getLines:i=>i.talkedToEvangelist?[{speaker:"Mr. Whiskers",text:"Mrrrow. So you're actually leaving. I suppose someone has to stop worrying about the city collapsing."},{speaker:"Christian",text:"Will you miss me, Mr. Whiskers?"},{speaker:"Mr. Whiskers",text:"…Don't make it strange. Go on, then. Mind the sunbeams on your way out."}]:[{speaker:"Mr. Whiskers",text:"Mrrrow. You're blocking my sunbeam, Christian."},{speaker:"Christian",text:"Sorry, Mr. Whiskers. I have rather a lot on my mind — and on my back."},{speaker:"Mr. Whiskers",text:"A city falling down? As long as it doesn't fall before my nap, I really can't be bothered."}]},{id:"evangelist",name:"Evangelist",species:"bear",fur:11049612,scale:1.15,outfit:"robe",outfitColor:T.robeWhite,x:42,z:0,facing:-Math.PI/2,getLines:i=>i.talkedToEvangelist?[{speaker:"Evangelist",text:"Do you see the shining light, Christian? Keep it ever before your eyes."},{speaker:"Evangelist",text:"Walk straight toward it, and you shall find the Wicket Gate. Knock, and it will be opened."}]:[{speaker:"Evangelist",text:"Peace to you, burdened friend. I am called Evangelist. Why do you sigh so?"},{speaker:"Christian",text:"This burden on my back grows heavier each day… and I fear our city will not stand. But I do not know where to go!"},{speaker:"Evangelist",text:"Then hear me. Beyond the fields lies a Wicket Gate, the beginning of the true way."},{speaker:"Christian",text:"A gate? I look and look, but I cannot see any gate…"},{speaker:"Evangelist",text:"Do you see, far off, yonder shining light?"},{speaker:"Christian",text:"…I… yes! I think I see it!"},{speaker:"Evangelist",text:"Keep that light in your eye and go straight toward it. There you will find the Gate. Now run, Christian — run and do not look back!"}],onFinish:i=>{i.talkedToEvangelist=!0}}];function j0(i){return K0.map(t=>{const e=le({species:t.species,fur:t.fur,scale:t.scale,outfit:t.outfit,outfitColor:t.outfitColor});return e.root.position.set(t.x,0,t.z),e.root.rotation.y=t.facing,i.add(e.root),{id:t.id,name:t.name,parts:e,position:new R(t.x,0,t.z),facing:t.facing,getLines:t.getLines,onFinish:t.onFinish,wanderRadius:t.wanderRadius}})}const ec={village:{bpm:76,chords:[[130.81,164.81,196,246.94],[110,130.81,164.81,196],[87.31,130.81,174.61,220],[98,146.83,196,220]],scale:[523.25,587.33,659.25,783.99,880,1046.5]},map:{bpm:92,chords:[[130.81,164.81,196,261.63],[98,123.47,146.83,196],[110,130.81,164.81,220],[87.31,110,174.61,220]],scale:[392,440,523.25,587.33,659.25,783.99]},slough:{bpm:58,chords:[[110,123.47,164.81,220],[87.31,130.81,174.61,220],[110,130.81,164.81,220],[82.41,123.47,164.81,207.65]],scale:[220,246.94,261.63,329.63,392,440]},sinai:{bpm:66,chords:[[110,164.81,220,261.63],[82.41,123.47,164.81,196],[87.31,130.81,174.61,220],[82.41,123.47,164.81,207.65]],scale:[329.63,349.23,392,440,493.88,523.25]},gate:{bpm:62,chords:[[130.81,196,261.63,329.63],[87.31,174.61,220,261.63],[110,164.81,220,261.63],[98,146.83,246.94,293.66]],scale:[392,440,523.25,587.33,659.25,783.99]},cross:{bpm:88,chords:[[130.81,196,261.63,329.63],[87.31,174.61,220,261.63],[98,146.83,246.94,293.66],[130.81,196,261.63,392]],scale:[523.25,587.33,659.25,783.99,880,1046.5]},interpreter:{bpm:68,chords:[[87.31,130.81,164.81,246.94],[73.42,110,146.83,220],[98,146.83,174.61,233.08],[130.81,164.81,196,261.63]],scale:[349.23,392,440,493.88,523.25,587.33]}};class Z0{constructor(){O(this,"ctx",null);O(this,"master",null);O(this,"timer",null);O(this,"nextBarTime",0);O(this,"bar",0);O(this,"style","village");O(this,"noiseBuf",null);O(this,"volume",.5);O(this,"enabled",!0)}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?this.volume:0,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*.25;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;this.nextBarTime=this.ctx.currentTime+.1,this.timer=window.setInterval(()=>this.schedule(),200)}toggle(){return this.enabled=!this.enabled,this.ctx&&this.master&&this.master.gain.linearRampToValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime+.2),this.enabled}setStyle(t){if(t===this.style)return;if(!this.ctx||!this.master){this.style=t;return}const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(1e-4,e+1.4),window.setTimeout(()=>{if(this.style=t,this.bar=0,this.ctx&&this.master){this.nextBarTime=this.ctx.currentTime+.15;const n=this.ctx.currentTime;this.master.gain.cancelScheduledValues(n),this.master.gain.setValueAtTime(1e-4,n),this.master.gain.linearRampToValueAtTime(this.enabled?this.volume:0,n+2)}},1500)}blip(){if(!this.ctx||!this.master||!this.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(660,t),e.frequency.exponentialRampToValueAtTime(880,t+.07),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n).connect(this.master),e.start(t),e.stop(t+.15)}splash(){if(!this.ctx||!this.master||!this.enabled||!this.noiseBuf)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(700,t),n.frequency.exponentialRampToValueAtTime(150,t+.25);const s=this.ctx.createGain();s.gain.setValueAtTime(.25,t),s.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(n).connect(s).connect(this.master),e.start(t)}rumble(){if(!this.ctx||!this.master||!this.enabled||!this.noiseBuf)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(60,t+.8);const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.4,t+.08),s.gain.exponentialRampToValueAtTime(.001,t+1),e.connect(n).connect(s).connect(this.master),e.start(t);const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(55,t),r.frequency.exponentialRampToValueAtTime(38,t+.9),a.gain.setValueAtTime(.12,t),a.gain.exponentialRampToValueAtTime(.001,t+1),r.connect(a).connect(this.master),r.start(t),r.stop(t+1.1)}barLen(){return 60/ec[this.style].bpm*4}schedule(){if(this.ctx)for(;this.nextBarTime<this.ctx.currentTime+this.barLen()*1.2;)this.scheduleBar(this.nextBarTime,this.bar),this.nextBarTime+=this.barLen(),this.bar++}pluck(t,e,n,s=.9){const r=this.ctx,a=r.createOscillator(),o=r.createGain();a.type="sine",a.frequency.value=e,o.gain.setValueAtTime(n,t),o.gain.exponentialRampToValueAtTime(.001,t+s),a.connect(o).connect(this.master),a.start(t),a.stop(t+s+.1);const l=r.createOscillator(),c=r.createGain();l.type="sine",l.frequency.value=e*2,c.gain.setValueAtTime(n*.22,t),c.gain.exponentialRampToValueAtTime(.001,t+s*.55),l.connect(c).connect(this.master),l.start(t),l.stop(t+s)}pad(t,e,n,s,r="triangle"){const a=this.ctx;for(const o of e){const l=a.createOscillator(),c=a.createGain();l.type=r,l.frequency.value=o,l.detune.value=(Math.random()-.5)*6,c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(s,t+n*.3),c.gain.linearRampToValueAtTime(1e-4,t+n*1.05),l.connect(c).connect(this.master),l.start(t),l.stop(t+n*1.1)}}bass(t,e,n=.11,s=.5){const r=this.ctx,a=r.createOscillator(),o=r.createGain();a.type="sine",a.frequency.value=e,o.gain.setValueAtTime(n,t),o.gain.exponentialRampToValueAtTime(.001,t+s),a.connect(o).connect(this.master),a.start(t),a.stop(t+s+.05)}shaker(t,e){if(!this.noiseBuf)return;const n=this.ctx,s=n.createBufferSource();s.buffer=this.noiseBuf;const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=5e3;const a=n.createGain();a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.08),s.connect(r).connect(a).connect(this.master),s.start(t),s.stop(t+.1)}scheduleBar(t,e){const n=ec[this.style],s=n.chords[e%n.chords.length],r=this.barLen(),a=r/8;if(this.style==="village"){this.pad(t,s,r,.045);for(let o=0;o<8;o++)o!==0&&Math.random()>.45||this.pluck(t+o*a,n.scale[Math.floor(Math.random()*n.scale.length)],.09);this.bass(t,s[0]/2),this.bass(t+r/2,s[0]/2)}else if(this.style==="map"){this.pad(t,s,r,.035);const o=[0,1,2,3,2,3,1,2];for(let l=0;l<8;l++){if(l===5&&e%2===0)continue;const c=s[o[l]]*2;this.pluck(t+l*a,c,.075,.5)}e%2===1&&this.pluck(t+a*6,n.scale[e/2%n.scale.length|0]*2,.05,.8);for(const l of[1,3,5,7])this.shaker(t+l*a,.02);this.bass(t,s[0]/2,.12,.4),this.bass(t+r*.5,s[1]/2,.09,.4),this.bass(t+r*.75,s[0]/2,.07,.3)}else if(this.style==="slough"){this.pad(t,s,r,.05,"sine");for(let o=0;o<8;o++)Math.random()>.22||this.pluck(t+o*a,n.scale[Math.floor(Math.random()*n.scale.length)],.06,1.4);if(this.bass(t,s[0]/2,.12,.9),Math.random()<.5){const o=this.ctx,l=t+Math.random()*r,c=o.createOscillator(),h=o.createGain();c.type="sine",c.frequency.setValueAtTime(900+Math.random()*300,l),c.frequency.exponentialRampToValueAtTime(240,l+.18),h.gain.setValueAtTime(.05,l),h.gain.exponentialRampToValueAtTime(.001,l+.22),c.connect(h).connect(this.master),c.start(l),c.stop(l+.25)}}else{this.pad(t,s,r,.05,"sine");for(let o=0;o<8;o++)o%2!==0||Math.random()>.6||this.pluck(t+o*a,n.scale[Math.floor(Math.random()*n.scale.length)],.07,1.1);this.bass(t,s[0]/2,.1,.7)}}}const xi=new R(-14.5,0,0),yi=new R(-3.5,0,0),es=new R(3.5,0,0),Mi=new R(11,0,7),Dn=new R(17.5,0,-1),jn=new R(25.5,0,2.5),$0=[{c:xi,r:4.2},{c:yi,r:4.2},{c:es,r:1.9},{c:Mi,r:4.2},{c:Dn,r:4},{c:jn,r:4}];class J0{constructor(t){O(this,"scene",new xs);O(this,"camera");O(this,"progress",.02);O(this,"branchP",0);O(this,"road","main");O(this,"sloughDone",!1);O(this,"moralityDone",!1);O(this,"wicketDone",!1);O(this,"crossDone",!1);O(this,"justDiverted",!1);O(this,"cityT",.02);O(this,"sloughT",.35);O(this,"forkT",.6);O(this,"beyondT",.85);O(this,"crossT",.97);O(this,"mainCurve");O(this,"branchCurve");O(this,"branchSpeed",1);O(this,"christian");O(this,"followers",[]);O(this,"clouds",[]);O(this,"islands",[]);O(this,"sparkles",[]);O(this,"mist",[]);O(this,"sinaiGlow",null);O(this,"sunHalos",[]);O(this,"crossGlow",null);O(this,"birds",[]);O(this,"birdTimer",4);O(this,"christianHasBurden",!0);O(this,"moving",!1);O(this,"facing",1);O(this,"built",!1);this.camera=new Xe(45,t,.1,200),this.resize(t),this.mainCurve=new Yl([new R(xi.x+2,.62,.7),new R(-10,.62,-1.2),new R(-6.5,.62,1),new R(yi.x,.62,0),new R(0,.62,-1),new R(es.x,.62,0),new R(7,.62,-2.6),new R(11,.62,-4.2),new R(14.5,.62,-3.2),new R(Dn.x-1.5,.62,-1.3),new R(20.5,.62,.4),new R(23,.62,1.6),new R(jn.x-1,.62,jn.z-.3)]),this.branchCurve=new Yl([new R(es.x+.6,.62,.8),new R(5.8,.62,3),new R(8,.62,5),new R(Mi.x-2,.62,Mi.z-.6)]),this.cityT=this.tForPoint(xi),this.sloughT=this.tForPoint(yi),this.forkT=this.tForPoint(es),this.beyondT=this.tForPoint(Dn),this.crossT=this.tForPoint(jn),this.branchSpeed=this.mainCurve.getLength()/Math.max(this.branchCurve.getLength(),1),this.christian=this.makeMapChristian()}makeMapChristian(){return this.christianHasBurden=!this.crossDone,le({species:"bear",fur:T.bearBrown,outfit:"shirt",outfitColor:this.crossDone?T.robeWhite:9418968,sling:!0,burden:!this.crossDone,scale:.5})}tForPoint(t){let e=0,n=1/0;for(let s=0;s<=300;s++){const r=s/300,a=this.mainCurve.getPointAt(r),o=Math.hypot(a.x-t.x,a.z-t.z);o<n&&(n=o,e=r)}return e}label(t,e,n,s,r="#5b4a3f"){const a=document.createElement("canvas");a.width=512,a.height=128;const o=a.getContext("2d");o.font='bold 52px "Trebuchet MS", sans-serif',o.textAlign="center",o.textBaseline="middle";const l=o.measureText(t).width+70;o.fillStyle="rgba(255, 248, 239, 0.92)",o.strokeStyle="rgba(244, 184, 196, 1)",o.lineWidth=8,o.beginPath(),o.roundRect((512-l)/2,18,l,92,46),o.fill(),o.stroke(),o.fillStyle=r,o.fillText(t,256,66);const c=new T0(a),h=new E0(new zc({map:c,transparent:!0}));h.scale.set(6.4,1.6,1),h.position.set(e,s,n),this.scene.add(h)}island(t,e,n,s){const r=new ut,a=14,o=(c,h,u,m)=>{const p=new gt(new Qn(c,c,h,a),ke(u));p.position.y=m,p.castShadow=!0,p.receiveShadow=!0,r.add(p)};o(n+.3,.5,s,.3),o(n,.9,14206106,-.25),o(Math.max(n-.8,.8),1,12162938,-1.1),o(Math.max(n-1.7,.6),1,10846815,-2),o(Math.max(n-2.6,.4),.8,9662799,-2.8);const l=Math.max(5,Math.round(n*1.6));for(let c=0;c<l;c++){const h=c/l*Math.PI*2+.4;r.add(v(.45,.3,.45,T.grassDark,Math.cos(h)*(n+.2),.14,Math.sin(h)*(n+.2)))}return r.position.set(t,0,e),this.scene.add(r),this.islands.push(r),r}miniTree(t,e,n=!1){const s=new ut;return s.add(v(.16,.5,.16,T.trunk,0,.25,0)),s.add(v(.6,.45,.6,n?T.leafPink:T.leaf,0,.7,0)),s.add(v(.35,.3,.35,n?T.leafPink:T.leaf,0,1,0)),s.position.set(t,.55,e),s}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new qt(13888767),t.fog=new li(13888767,36,100),t.add(new ys(15923711,13493490,1.3));const e=new Ms(T.sun,1.7);e.position.set(-8,14,10),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=18,e.shadow.camera.bottom=-18,t.add(e);const n=new gt(new Nn(1.15,24,18),new Kt({color:16769357}));n.position.set(14,11,-14),t.add(n);for(const[y,A]of[[1.55,.4],[2.1,.18]]){const H=new gt(new Nn(y,24,18),new Kt({color:16774072,transparent:!0,opacity:A,depthWrite:!1}));H.position.copy(n.position),t.add(H),this.sunHalos.push(H)}const s=new gt(new Ct(240,1,160),ke(T.water));s.position.y=-1.6,s.receiveShadow=!0,t.add(s);for(let y=0;y<40;y++){const A=new gt(new Ct(.5+Math.random()*.9,.06,.16),new Kt({color:15004668,transparent:!0,opacity:.8}));A.position.set((Math.random()-.5)*60,-1.02,(Math.random()-.5)*34),A.castShadow=!1,t.add(A),this.sparkles.push(A)}const r=this.island(xi.x,xi.z,4.6,T.grass),a=new ut,o=(y,A,H)=>{a.add(v(.85,.65,.75,T.wallCream,y,.9,A)),a.add(v(1,.35,.9,H,y,1.4,A)),a.add(v(.18,.5,.06,T.woodDark,y,.8,A+.4))};o(-1,-.5,T.roofPink),o(.25,-1.15,T.roofMint),o(.65,.45,T.roofLilac),o(-.45,.95,T.roofPeach);const l=[[-2,0,.28,3.7],[2,-1.1,.28,1.6],[2,1.1,.28,1.6],[0,-1.9,4.2,.28],[0,1.9,4.2,.28]];for(const[y,A,H,G]of l)a.add(v(H,.6,G,16249834,y,.85,A)),a.add(v(H+.08,.12,G+.08,14670024,y,1.16,A));a.position.set(-.9,0,-.3),r.add(a),r.add(this.miniTree(-3,2.1,!0)),r.add(this.miniTree(3,-2.2)),r.add(this.miniTree(2.6,2.3,!0));for(let y=0;y<8;y++){const A=Math.random()*Math.PI*2,H=1.5+Math.random()*2.4,G=v(.14,.14,.14,[T.flowerYellow,T.flowerPink,T.flowerBlue][y%3],Math.cos(A)*H,.62,Math.sin(A)*H);G.castShadow=!1,r.add(G)}this.label("City of Destruction",xi.x,xi.z,4.4);const c=this.island(yi.x,yi.z,4.4,10405775),h=new ut;h.add(v(4,.18,3,9073493,0,.62,0)),h.add(v(3,.2,2.1,7297602,0,.68,.1)),h.add(v(.55,.14,.55,9073493,-1.8,.66,1.3)),h.add(v(.45,.12,.45,7297602,2,.66,-1.2)),h.add(v(.16,.16,.16,10982002,.4,.84,.3)),h.add(v(.12,.12,.12,10982002,-.6,.82,-.4));for(const[y,A]of[[-2.1,-1],[1.8,1.2],[2.3,.2],[-1.5,1.5],[.2,-1.5]])h.add(v(.1,.85,.1,8101983,y,1,A)),h.add(v(.16,.28,.16,13215845,y,1.48,A));h.position.set(.2,0,.1),c.add(h);const u=new ut;u.add(v(.18,1,.18,10129286,0,.5,0)),u.add(v(.7,.14,.14,10129286,.2,.95,0)),u.add(v(.14,.5,.14,10129286,.55,1.2,0)),u.position.set(-2.9,.55,-2),c.add(u),this.label("Slough of Despond",yi.x,yi.z,4.4);const m=this.island(es.x,es.z,1.9,T.grass),p=new ut;p.add(v(.14,1.7,.14,T.woodDark,0,.85,0));const g=v(1.2,.32,.1,T.wood,.5,1.45,0);p.add(g);const _=v(.1,.32,1.2,T.wood,0,1.05,.5);p.add(_),p.position.set(-.3,.55,-.5),m.add(p),m.add(this.miniTree(.9,.8,!0));const f=this.island(Mi.x,Mi.z,4.4,11458976),d=(y,A,H)=>{f.add(v(.9,.7,.8,16447212,y,.95,A)),f.add(v(1.05,.35,.95,H,y,1.5,A)),f.add(v(.16,.45,.06,T.woodDark,y,.82,A+.42))};d(-1.6,1.2,10336472),d(-.2,1.5,1211e4),d(1.2,1.2,10336472);for(const[y,A]of[[-2.4,.2],[-.9,.35],[.6,.35],[2,.2]])f.add(v(.9,.3,.3,8826237,y,.72,A));const b=new ut;b.add(v(2.6,1.4,1.8,9276822,0,.7,0)),b.add(v(1.9,1.2,1.4,8224136,.1,1.7,-.1)),b.add(v(1.2,1,1,9276822,-.1,2.6,0)),b.add(v(.7,.7,.7,7303034,.05,3.3,0));const w=new gt(new Ct(.5,.9,.12),new Kt({color:16751181,transparent:!0,opacity:.9}));w.position.set(.2,1.6,.66),b.add(w),this.sinaiGlow=w,b.position.set(.3,.55,-1.8),f.add(b),this.label("Morality",Mi.x,Mi.z,4.6);const E=this.island(Dn.x,Dn.z,4.2,10405800);E.add(this.miniTree(-2.4,1.6)),E.add(this.miniTree(2.5,-1.4,!0)),E.add(v(.2,1.3,.2,T.woodDark,1,1.2,.2)),E.add(v(.2,1.3,.2,T.woodDark,2,1.2,.2)),E.add(v(1.3,.2,.2,T.woodDark,1.5,1.9,.2));const k=new gt(new Ct(.9,1.1,.1),new Kt({color:16774072,transparent:!0,opacity:.7}));k.position.set(1.5,1.15,.15),E.add(k);for(let y=0;y<7;y++){const A=new gt(new Ct(2.2+Math.random()*1.6,1+Math.random()*.8,1.6),new zn({color:15922936,transparent:!0,opacity:.55}));A.position.set(Dn.x-3+Math.random()*6,1+Math.random()*1.4,Dn.z-2+Math.random()*4),A.castShadow=!1,t.add(A),this.mist.push(A)}this.label("Wicket Gate",Dn.x,Dn.z,4.4);const P=this.island(jn.x,jn.z,4.2,T.grassLight);P.add(v(4.6,.7,4,T.grass,0,.85,-.4)),P.add(v(3.2,.7,2.8,10411671,0,1.5,-.4)),P.add(v(2,.6,1.8,T.grassLight,0,2.1,-.4)),P.add(v(.22,1.5,.22,T.woodDark,0,3.1,-.4)),P.add(v(.95,.22,.22,T.woodDark,0,3.45,-.4));const I=new gt(new Nn(1,18,14),new Kt({color:16774072,transparent:!0,opacity:.35,depthWrite:!1}));I.position.set(0,3.3,-.4),P.add(I),this.crossGlow=I,P.add(v(1.1,.8,.9,12170412,1.9,.9,.9)),P.add(v(.5,.5,.1,4867136,1.9,.85,1.36));const z=new gt(new Qn(.34,.34,.16,12),ke(11051674));z.rotation.x=Math.PI/2,z.rotation.z=Math.PI/2,z.position.set(2.7,.9,1.3),P.add(z),P.add(this.miniTree(-2.6,1.8,!0)),this.label("The Cross",jn.x,jn.z,5.4),this.buildRoad(this.mainCurve,72),this.buildRoad(this.branchCurve,26);const S=new zn({color:16777215,emissive:7829367});for(let y=0;y<6;y++){const A=new ut,H=(G,j,Z,Y)=>{const $=new gt(new Nn(G,14,10),S);$.position.set(j,Z,Y),$.castShadow=!1,A.add($)};H(.85,0,0,0),H(.65,.95,.12,.1),H(.6,-.9,.08,-.1),H(.5,.35,.45,.12),H(.45,-.4,.4,-.05),A.position.set((Math.random()-.5)*42,5.5+Math.random()*3,-6-Math.random()*5),this.clouds.push(A),t.add(A)}for(let y=0;y<3;y++){const A=new ut,H=v(.22,.12,.3,4867136,0,0,0);H.castShadow=!1,A.add(H);const G=Y=>{const $=new gt(new Ct(.6,.05,.22),ke(5985358));return $.geometry.translate(.3,0,0),$.position.set(.08*Y,.04,0),$.scale.x=Y,$.castShadow=!1,A.add($),$},j=G(-1),Z=G(1);A.visible=!1,t.add(A),this.birds.push({g:A,wingL:j,wingR:Z,speed:0,active:!1})}this.scene.add(this.christian.root),this.placeOn(this.mainCurve,this.christian.root,this.progress)}nearLand(t,e){for(const n of $0)if(Math.hypot(t-n.c.x,e-n.c.z)<n.r)return!0;return!1}buildRoad(t,e){for(let n=0;n<=e;n++){const s=n/e,r=t.getPointAt(s),a=t.getTangentAt(s);if(this.nearLand(r.x,r.z)){const o=v(.5,.1,.6,T.path,r.x,r.y-.02,r.z);o.rotation.y=Math.atan2(a.x,a.z)+Math.PI/2,o.castShadow=!1,this.scene.add(o)}else{const o=v(.5,.14,1.1,T.wood,r.x,.5,r.z);if(o.rotation.y=Math.atan2(a.x,a.z)+Math.PI/2,o.castShadow=!1,this.scene.add(o),n%4===0){const l=-a.z,c=a.x;for(const h of[-1,1])this.scene.add(v(.14,2,.14,T.woodDark,r.x+l*.62*h,-.4,r.z+c*.62*h)),this.scene.add(v(.1,.5,.1,T.woodDark,r.x+l*.58*h,.85,r.z+c*.58*h))}}}}start(t){this.build(),this.christianHasBurden!==!this.crossDone&&(this.scene.remove(this.christian.root),this.christian=this.makeMapChristian(),this.scene.add(this.christian.root),this.placeOn(this.mainCurve,this.christian.root,this.progress));for(const e of this.followers)this.scene.remove(e.root);this.followers=t.map(e=>{const n=le(e==="pliable"?{species:"rabbit",outfit:"shirt",outfitColor:16766629,scale:.44}:{scale:.44});return this.scene.add(n.root),n})}resize(t){this.camera.aspect=t;const e=Qt.clamp(48/t-1,24,58);this.camera.position.set(5,e*.78,e+2.2),this.camera.lookAt(5,.4,1.4),this.camera.updateProjectionMatrix()}spot(){return this.road==="branch"?this.branchP>.86?"morality":"road":this.progress<this.cityT+.05?"city":Math.abs(this.progress-this.sloughT)<.05?"slough":Math.abs(this.progress-this.forkT)<.04?"fork":this.progress>this.crossT-.04?"cross":Math.abs(this.progress-this.beyondT)<.04?"beyond":"road"}placeOn(t,e,n){const s=t.getPointAt(Qt.clamp(n,0,1));e.position.set(s.x,this.nearLand(s.x,s.z)?s.y:.57,s.z)}update(t,e,n,s){if(!this.built)return;const r=t*.075;if(this.moving=!1,this.road==="main"){if(Math.abs(n)>.15){this.moving=!0;const c=this.wicketDone?this.crossT+.02:this.moralityDone?this.beyondT+.02:this.sloughDone?this.forkT:this.sloughT+.05;this.progress=Qt.clamp(this.progress+n*r,.02,c),this.facing=n>0?1:-1,!this.moralityDone&&this.sloughDone&&n>0&&this.progress>=this.forkT-1e-5&&(this.road="branch",this.branchP=.02,this.justDiverted=!0)}this.moralityDone&&s>.35&&Math.abs(this.progress-this.forkT)<.05&&(this.road="branch",this.branchP=.03,this.moving=!0,this.facing=1)}else Math.abs(n)>.15&&(this.moving=!0,this.branchP=Qt.clamp(this.branchP+n*r*this.branchSpeed,0,.96),this.facing=n>0?1:-1,this.branchP<=0&&n<0&&(this.road="main",this.progress=this.forkT));const a=this.road==="main"?this.mainCurve:this.branchCurve,o=this.road==="main"?this.progress:this.branchP;this.placeOn(a,this.christian.root,o);const l=a.getTangentAt(Qt.clamp(o,0,1));this.christian.root.rotation.y=Math.atan2(l.x*this.facing,l.z*this.facing),jt(this.christian,e,this.moving),this.followers.forEach((c,h)=>{const u=o-.045*(h+1)*this.facing;this.placeOn(a,c.root,u);const m=a.getTangentAt(Qt.clamp(u,0,1));c.root.rotation.y=Math.atan2(m.x*this.facing,m.z*this.facing),jt(c,e+.4*(h+1),this.moving)});for(let c=0;c<this.clouds.length;c++){const h=this.clouds[c];h.position.x+=t*(.2+c*.06),h.position.x>30&&(h.position.x=-30)}if(this.birdTimer-=t,this.birdTimer<=0){this.birdTimer=6+Math.random()*8;const c=this.birds.find(h=>!h.active);c&&(c.active=!0,c.speed=2.6+Math.random()*1.8,c.g.position.set(-30,6.5+Math.random()*3.5,-9+Math.random()*9),c.g.rotation.y=Math.PI/2,c.g.visible=!0)}for(const c of this.birds){if(!c.active)continue;c.g.position.x+=c.speed*t,c.g.position.y+=Math.sin(e*2+c.g.position.x)*t*.3;const h=Math.sin(e*13+c.g.position.z)*.65;c.wingL.rotation.z=-h,c.wingR.rotation.z=h,c.g.position.x>30&&(c.active=!1,c.g.visible=!1)}for(let c=0;c<this.sunHalos.length;c++){const h=1+Math.sin(e*1.4+c)*.06;this.sunHalos[c].scale.setScalar(h)}this.crossGlow&&(this.crossGlow.material.opacity=.22+.18*Math.abs(Math.sin(e*1.1)));for(let c=0;c<this.islands.length;c++)this.islands[c].position.y=Math.sin(e*.6+c*2.1)*.04;for(let c=0;c<this.sparkles.length;c++){const h=this.sparkles[c];h.material.opacity=.35+.45*Math.abs(Math.sin(e*1.3+c*1.7))}for(let c=0;c<this.mist.length;c++){const h=this.mist[c];h.position.x+=Math.sin(e*.4+c)*t*.15,h.material.opacity=.45+.15*Math.sin(e*.5+c*1.3)}this.sinaiGlow&&(this.sinaiGlow.material.opacity=.5+.45*Math.abs(Math.sin(e*2.2)))}}const br=40,Ps=5,Er=11.5,Tr=8;class Q0{constructor(t){O(this,"scene",new xs);O(this,"phase","walk");O(this,"cb");O(this,"christian");O(this,"pliable",null);O(this,"pliableStage","follow");O(this,"revisit",!1);O(this,"help");O(this,"steps",[[-3.5,1],[-1,-.6],[1.5,1.1],[4,-.9],[6.5,.9],[9,-1],[11.5,.7],[13.5,-.5]]);O(this,"sink",0);O(this,"struggle",0);O(this,"wisps",[]);O(this,"bubbles",[]);O(this,"splashes",[]);O(this,"splashTimer",0);O(this,"rescueT",0);O(this,"built",!1);O(this,"lightBeam",null);this.cb=t,this.christian=le({species:"bear",fur:T.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.help=le({species:"bear",fur:9411210,outfit:"robe",outfitColor:13102274,scale:1.2})}inBog(t,e){const n=(t-Ps)/Er,s=e/Tr;return n*n+s*s<1}nearStep(t,e){for(const[n,s]of this.steps)if(Math.hypot(t-n,e-s)<1.35)return!0;return!1}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new qt(12175828),t.fog=new li(12175828,30,80),t.add(new ys(14148844,11057312,.85));const e=new Ms(15919826,1.1);e.position.set(-25,40,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-45,e.shadow.camera.right=45,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,t.add(e);const n=new gt(new Ct(140,1,90),ke(9681290));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let g=0;g<70;g++){const _=-45+Math.random()*90,f=-35+Math.random()*70;if(this.inBog(_,f))continue;const d=v(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?8826237:10798746,_,.05,f);d.castShadow=!1,t.add(d)}for(const[g,_]of[[-22,16],[22,10]]){const f=v(_,.12,3.6,14272936,g,.06,0);f.castShadow=!1,t.add(f)}const s=[9073493,8152908,7297602];for(let g=0;g<3;g++){const _=Er-g*1.6,f=Tr-g*1.3;for(let d=0;d<14;d++){const b=d/14*Math.PI*2,w=Ps+Math.cos(b)*_*(.55+.35*Math.random()),E=Math.sin(b)*f*(.55+.35*Math.random()),k=v(3+Math.random()*3,.1+g*.03,2.5+Math.random()*2.5,s[g],w,.1+g*.03,E);k.castShadow=!1,t.add(k)}}const r=v(Er*1.7,.14,Tr*1.7,8152908,Ps,.1,0);r.castShadow=!1,t.add(r);for(let g=0;g<10;g++){const _=v(.22,.22,.22,10982002,Ps-9+Math.random()*18,.28,-6+Math.random()*12);_.castShadow=!1,t.add(_),this.bubbles.push({mesh:_,phase:Math.random()*6.28})}for(const[g,_]of this.steps)t.add(v(1.5,.28,1.5,14209996,g,.16,_)),t.add(v(1.7,.1,1.7,12893877,g,.04,_));for(let g=0;g<26;g++){const _=g/26*Math.PI*2,f=Ps+Math.cos(_)*(Er+1.5+Math.random()*2),d=Math.sin(_)*(Tr+1.2+Math.random()*2);t.add(v(.14,1.3+Math.random()*.7,.14,8101983,f,.8,d)),g%2===0&&t.add(v(.22,.45,.22,13215845,f,1.75,d))}for(const[g,_,f]of[[-12,-10,.4],[16,9,1.2],[-8,11,2.2],[20,-9,.9]]){const d=new ut;d.add(v(.45,2.6,.45,10129286,0,1.3,0)),d.add(v(1.6,.3,.3,10129286,.5,2.3,0)),d.add(v(.3,1.1,.3,10129286,1.2,2.9,0)),d.add(v(1.1,.25,.25,9076598,-.6,1.7,.1)),d.position.set(g,0,_),d.rotation.y=f,t.add(d)}for(let g=0;g<9;g++){const _=new gt(new Ct(4+Math.random()*4,.8,2.5+Math.random()*2),new zn({color:15265520,transparent:!0,opacity:.35}));_.position.set(-20+Math.random()*45,.9+Math.random()*.8,-12+Math.random()*24),_.castShadow=!1,t.add(_),this.wisps.push(_)}for(let g=0;g<14;g++){const _=new Kt({color:9073493,transparent:!0,opacity:0}),f=new gt(new Ct(.2,.2,.2),_);f.visible=!1,t.add(f),this.splashes.push({mesh:f,m:_,life:1,vx:0,vz:0})}const a=new ut;a.add(v(.16,1.6,.16,T.woodDark,0,.8,0)),a.add(v(1.6,.8,.12,T.wood,0,1.5,0)),a.add(v(1.2,.1,.14,9072466,0,1.62,0)),a.add(v(1.2,.1,.14,9072466,0,1.38,0)),a.position.set(-11,0,4),a.rotation.y=-.5,t.add(a),this.help.root.position.set(24,0,0),this.help.root.visible=!1,this.help.armR.add(v(.14,2.2,.14,T.woodDark,.1,-.6,.2)),t.add(this.help.root);for(let g=0;g<12;g++){const _=20+g*1.8;t.add(v(2.6,.12,3.2,T.path,_,.06,Math.sin(g*.5)*.5))}for(const[g,_,f]of[[26,-5,!0],[30,5,!1],[34,-6,!1],[37,6,!0]]){const d=new ut;d.add(v(.5,1.6,.5,T.trunk,0,.8,0)),d.add(v(1.9,1.3,1.9,f?T.leafPink:T.leaf,0,2.2,0)),d.add(v(1.2,.9,1.2,f?T.leafPink:T.leaf,0,3.1,0)),d.position.set(g,0,_),t.add(d)}const o=new ut,l=new Kt({color:16767306,transparent:!0,opacity:.8,fog:!1}),c=new gt(new Ct(2.6,40,2.6),l);c.position.y=20,o.add(c);const h=new gt(new Ct(1.3,44,1.3),new Kt({color:16776160,transparent:!0,opacity:.95,fog:!1}));h.position.y=22,o.add(h);const u=new Kt({color:16771194,fog:!1}),m=new gt(new Ct(3.4,3.4,3.4),u);m.position.y=42,m.rotation.set(Math.PI/4,0,Math.PI/4),o.add(m);const p=new ps(16771194,3.5,40);p.position.y=4,o.add(p),o.position.set(br,0,0),o.visible=!1,t.add(o),this.lightBeam=o}enter(t,e=!1){return this.build(),this.revisit=e,this.phase="walk",this.sink=0,this.struggle=0,this.pliable&&(this.scene.remove(this.pliable.root),this.pliable=null),this.pliableStage="follow",this.christian.root.position.set(-24,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),e?(this.help.root.visible=!0,this.help.root.position.set(18.4,0,2.2),this.help.root.rotation.y=-Math.PI/2,this.help.armR.rotation.x=0,this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("🌫 The old mire — cross east toward the light, or turn back west to the road"),{christian:this.christian,pliable:null}):(this.lightBeam&&(this.lightBeam.visible=!1),t&&(this.pliable=le({species:"rabbit",outfit:"shirt",outfitColor:16766629,scale:.95}),this.pliable.root.position.set(-26,0,-1.4),this.scene.add(this.pliable.root),this.cb.playScript([{speaker:"Pliable",text:"So tell me MORE about this Celestial City! Do the crowns come in rabbit sizes? Is there clover?"},{speaker:"Christian",text:"Ha! The book says there is no night there, and no tears… Careful, friend — the ground past those reeds looks soft."},{speaker:"Pliable",text:"Soft, schmoft! With GLORY ahead, who has time to look down? Hop hop — race you to the far side!"}])),this.cb.setObjective("🌫 Cross the marsh to the east"),{christian:this.christian,pliable:this.pliable})}spawnSplash(t,e){const n=this.splashes.find(s=>s.life>=1);n&&(n.life=0,n.vx=(Math.random()-.5)*1.2,n.vz=(Math.random()-.5)*1.2,n.mesh.position.set(t,.2,e),n.mesh.visible=!0)}moveFactor(){const t=this.christian.root.position;return this.phase==="fallingIn"||this.phase==="stuck"||this.phase==="rescue"||this.phase==="epilogue"?0:this.inBog(t.x,t.z)?this.nearStep(t.x,t.z)?.72:.34:1}afterMove(t){const e=this.christian.root.position,n=this.revisit||this.phase==="rescue"||this.phase==="epilogue"||this.phase==="freeroam"||this.phase==="done";if(e.x=Qt.clamp(e.x,-28,n?br+4:15.6),e.z=Qt.clamp(e.z,-16,16),this.revisit){(e.x>br-2||e.x<-27)&&this.cb.onExit(),t&&this.inBog(e.x,e.z)&&(this.splashTimer-=.016,this.splashTimer<=0&&(this.splashTimer=.18,this.spawnSplash(e.x,e.z)));return}if(this.phase==="freeroam"&&e.x>br-3&&(this.phase="done",this.cb.onComplete()),this.phase==="walk"&&this.inBog(e.x+1.2,e.z)){this.phase="fallingIn",this.cb.splashSound();for(let r=0;r<6;r++)this.spawnSplash(e.x+Math.random(),e.z+(Math.random()-.5));if(this.pliable){const r=this.pliable.root.position;r.y=-.35,this.pliable.root.rotation.y=Math.PI/2;for(let a=0;a<4;a++)this.spawnSplash(r.x+Math.random(),r.z+(Math.random()-.5))}const s=this.pliable?[{speaker:"Christian",text:"Wh—whoa! The ground — it is swallowing us! Hold fast, Pliable!"},{speaker:"Pliable",text:"GLUB—! Mud! In my EARS! In my WHISKERS! Christian, I am DISSOLVING!"},{speaker:"Pliable",text:"Is THIS the glorious happiness you spoke of?! Golden streets, you said! CROWNS, you said!"},{speaker:"Christian",text:"Courage, friend! If we press on together, the far bank cannot be—"},{speaker:"Pliable",text:"FORWARD?! Into MORE of it?! Not for every crown in every city! Out of my way!"}]:[{speaker:"Christian",text:"Wh—whoa! The ground… it is swallowing me! This must be the mire the villagers whispered of…"}];this.cb.playScript(s,()=>{this.pliable?(this.pliableStage="clamber",this.cb.setObjective("😨 Pliable flounders back toward the bank nearest home…")):(this.phase="crossing",this.cb.setObjective("🪨 Keep moving or the mire pulls you under — rest on the solid Steps!"))})}this.phase==="crossing"&&e.x>15.2&&(this.phase="stuck",this.cb.playScript([{speaker:"Christian",text:"*pant* … The bank is right there — but I cannot climb it. This burden on my back drags me down and down…"},{speaker:"Christian",text:"Is this how the journey ends? Stuck in the mire, within sight of the way out…?"}],()=>{this.phase="rescue",this.rescueT=0,this.help.root.visible=!0,this.cb.setObjective("🤝 Someone is coming…")})),t&&this.phase==="crossing"&&this.inBog(e.x,e.z)&&(this.splashTimer-=.016,this.splashTimer<=0&&(this.splashTimer=.18,this.spawnSplash(e.x,e.z)))}update(t,e,n){if(!this.built)return;const s=this.christian.root.position;let r=0;const a=this.inBog(s.x,s.z),o=this.nearStep(s.x,s.z);if(a&&this.phase!=="done"&&(r=o?.16:.5,this.phase==="stuck"&&(r=.62)),this.phase==="crossing"&&!this.revisit&&a&&!o?this.struggle=n?Math.max(0,this.struggle-t*.6):Math.min(.85,this.struggle+t*.32):this.struggle=Math.max(0,this.struggle-t*1.6),r+=this.struggle,(this.phase==="rescue"||this.phase==="epilogue")&&(r=this.rescueT>1?0:.62),this.sink+=(r-this.sink)*Math.min(t*3,1),this.christian.root.position.y=-this.sink,this.phase==="crossing"&&!this.revisit&&this.sink>1.05&&(this.struggle=0,this.sink=.2,this.christian.root.position.set(-8.5,0,Qt.clamp(s.z,-6,6)*.4),this.christian.root.rotation.y=Math.PI/2,this.cb.splashSound(),this.cb.playScript([{speaker:"Christian",text:"*GLUB—!* The mire closes over his ears. Sputtering mud, he claws his way back to the western bank."},{speaker:"Christian",text:"It pulls hardest when I stand still… Keep moving, and catch your breath on the solid Steps!"}])),jt(this.christian,e,n&&this.phase!=="stuck"&&this.phase!=="rescue"&&this.phase!=="epilogue"),this.pliable){const l=this.pliable.root.position;if(this.pliableStage==="clamber")l.x-=t*3,l.y=this.inBog(l.x,l.z)?-.42+Math.sin(e*11)*.06:0,this.pliable.root.rotation.y=-Math.PI/2,jt(this.pliable,e*1.7,!0),this.inBog(l.x,l.z)&&Math.random()<t*7&&this.spawnSplash(l.x,l.z),l.x<-9.5&&(this.pliableStage="farewell",l.y=0,this.cb.playScript([{speaker:"Pliable",text:"*scrambles out, dripping* Blegh! Pfah! Mud in my ears, mud in my whiskers, mud in places a gentle-rabbit shan't MENTION!"},{speaker:"Pliable",text:"If this bog is the FIRST step of your glorious journey, Christian, you may keep all the rest of it!"},{speaker:"Christian",text:"Pliable, wait! The crowns, the city — it is all still true! One mire does not un-make it!"},{speaker:"Pliable",text:"Then you may have my share of the crowns AND my share of the mud. I am going HOME. Farewell — and good luck to your poor back!"},{speaker:"Christian",text:"…And there he goes, hopping for home. *sigh* Then I cross alone. There must be solid footing somewhere beneath this mire…"}],()=>{this.pliableStage="flee",this.phase="crossing",this.cb.setObjective("🪨 Keep moving or the mire pulls you under — rest on the solid Steps!")}));else if(this.pliableStage==="farewell")l.y=Math.abs(Math.sin(e*6))*.16,this.pliable.root.rotation.y=Math.PI/2,jt(this.pliable,e*2,!1);else if(this.pliableStage==="flee")l.x-=t*9,l.y=0,this.pliable.root.rotation.y=-Math.PI/2,jt(this.pliable,e*1.5,!0),l.x<-30&&(this.scene.remove(this.pliable.root),this.pliable=null);else if(this.phase==="walk"){const c=s.x+1.9,h=s.z-1.2,u=c-l.x,m=h-l.z,p=Math.hypot(u,m);if(p>.15){const g=Math.min(t*6.4,p);l.x+=u/p*g,l.z+=m/p*g,this.pliable.root.rotation.y=Math.atan2(u,m),jt(this.pliable,e+.4,!0)}else jt(this.pliable,e+.4,!1)}else this.pliable.root.position.y=-.35,jt(this.pliable,e+.4,!1)}if(this.phase==="rescue"){this.rescueT+=t;const l=this.help.root.position;this.rescueT<=1.6?(l.x=Qt.lerp(24,17.6,Math.min(this.rescueT/1.6,1)),this.help.root.rotation.y=-Math.PI/2,jt(this.help,e,!0)):this.rescueT<1.7?(jt(this.help,e,!1),this.help.armR.rotation.x=-1.2):(this.phase="epilogue",this.cb.playScript([{speaker:"???",text:"Ho there, friend in the mire! What do you there?"},{speaker:"Christian",text:"I fell in as I fled the City of Destruction — and this burden sinks me. I cannot reach the bank!"},{speaker:"Help",text:"I am called Help. But tell me — why did you not look for the Steps? Good solid stones lie through the very midst of this slough."},{speaker:"Christian",text:"Fear chased me in so fast, I never thought to look down…"},{speaker:"Help",text:"So it goes with every pilgrim. Here — give me your paw!"},{speaker:"Help",text:"*HEAVE!*"}],()=>{this.rescueT=2,this.christian.root.position.set(16.5,0,-.5),this.christian.root.rotation.y=Math.PI/2,this.help.armR.rotation.x=0,this.sink=0,this.cb.splashSound(),this.cb.playScript([{speaker:"Christian",text:"*gasp* … Solid ground. Thank you, Help. I had nearly given up hope."},{speaker:"Help",text:"This is the Slough of Despond, friend. When a pilgrim first wakes to how lost he is, all his fears and doubts and discouragements come running — and they settle here, in this low place."},{speaker:"Help",text:"The King's labourers have worked this patch these sixteen hundred years, yet it swallows every cartload of good ground. It cannot be mended — only crossed, by the Steps."},{speaker:"Christian",text:"And Pliable… he struggled out on the side nearest home."},{speaker:"Help",text:"Aye. Many turn back at the first mire. But you came through, burden and all. Go on, Christian — the true Gate is not far now."}],()=>{this.phase="freeroam",this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("✨ Follow the light out of the Slough")})}))}if(this.lightBeam&&this.lightBeam.visible){const l=1+Math.sin(e*2.4)*.12;this.lightBeam.scale.set(l,1,l)}for(let l=0;l<this.wisps.length;l++){const c=this.wisps[l];c.position.x+=t*.3,c.position.x>30&&(c.position.x=-25),c.material.opacity=.25+.12*Math.sin(e*.6+l)}for(const l of this.bubbles){const c=(e*.5+l.phase)%2;l.mesh.visible=c<1,l.mesh.position.y=.2+c*.25,l.mesh.scale.setScalar(.5+c*.9)}for(const l of this.splashes)l.life>=1||(l.life=Math.min(1,l.life+t*2.4),l.mesh.position.x+=l.vx*t,l.mesh.position.z+=l.vz*t,l.mesh.position.y+=t*(.8-l.life),l.m.opacity=.75*(1-l.life),l.life>=1&&(l.mesh.visible=!1))}}const nc=-7,tg=6.5;class eg{constructor(t){O(this,"scene",new xs);O(this,"phase","walk");O(this,"cb");O(this,"christian");O(this,"wiseman");O(this,"evangelist");O(this,"revisit",!1);O(this,"built",!1);O(this,"mountain",null);O(this,"fireSeams",[]);O(this,"fireLight",null);O(this,"sparks",[]);O(this,"quake",0);O(this,"rumbleTimer",0);O(this,"evangelistT",0);O(this,"wwLeaving",!1);this.cb=t,this.christian=le({species:"bear",fur:T.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.wiseman=le({species:"bear",fur:T.bearCocoa,outfit:"shirt",outfitColor:13351152,scale:1.1}),this.wiseman.head.add(v(.8,.1,.8,4867136,0,.88,0)),this.wiseman.head.add(v(.55,.55,.55,4867136,0,1.2,0)),this.wiseman.head.add(v(.58,.12,.58,9067098,0,1,0)),this.evangelist=le({species:"bear",fur:11049612,outfit:"robe",outfitColor:T.robeWhite,scale:1.15})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new qt(13950948),t.fog=new li(13950948,34,90),t.add(new ys(14740719,11519140,.85));const e=new Ms(16116952,1.15);e.position.set(-24,38,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-45,e.shadow.camera.right=45,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,t.add(e);const n=new gt(new Ct(140,1,90),ke(10273934));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let u=0;u<60;u++){const m=-45+Math.random()*90,p=-35+Math.random()*70,g=m>4,_=v(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,g?Math.random()>.5?11778442:10923396:Math.random()>.5?9222784:11195548,m,.05,p);_.castShadow=!1,t.add(_)}for(let u=0;u<22;u++){const m=-30+u*2.6,p=v(2.8,.12,3.4,15260088,m,.06,Math.sin(u*.4)*.8);p.castShadow=!1,t.add(p)}for(const[u,m,p]of[[-24,-8,!0],[-19,9,!1],[-13,-10,!1],[-8,8,!0],[-2,-9,!1]]){const g=new ut;g.add(v(.5,1.6,.5,T.trunk,0,.8,0)),g.add(v(1.9,1.3,1.9,p?T.leafPink:T.leaf,0,2.2,0)),g.add(v(1.2,.9,1.2,p?T.leafPink:T.leaf,0,3.1,0)),g.position.set(u,0,m),t.add(g)}for(const[u,m]of[[8,6],[11,-7],[16,8],[19,-6],[9,-10]])t.add(v(1.2+Math.random(),.8,1.1,10132132,u,.4,m)),t.add(v(.7,.5,.7,9276822,u+.8,.25,m+.5));const s=new ut,r=(u,m,p,g,_,f,d)=>s.add(v(u,m,p,g,_,f,d));r(16,4.5,10,9276822,0,2.25,-6),r(13,3.5,8,8224136,.5,6.2,-5.5),r(10,3,7,9276822,0,9.2,-5),r(6.5,2.6,5,7303034,.5,11.8,-4.5),r(3.4,2,3,8224136,0,13.6,-4),r(11,2.6,6,8224136,.5,8,-.5),r(8,2.2,5.5,7303034,1,6,1.6),r(5.5,1.8,4,6447726,1.2,4.6,3.2),r(2.2,1.2,1.8,10132132,-5.5,4.9,-2),r(1.8,1,1.4,10132132,6,5.2,-1.5);const a=()=>new Kt({color:16747069,transparent:!0,opacity:.9});for(const[u,m,p,g,_]of[[-2.5,3,4.9,.7,1.6],[1.8,2.2,5.25,.5,1.1],[3.4,5.2,3.7,.6,1.4],[-1,6.8,2.6,.8,1.2]]){const f=new gt(new Ct(g,_,.14),a());f.position.set(u,m,p),s.add(f),this.fireSeams.push(f)}this.fireLight=new ps(16742973,1.4,26),this.fireLight.position.set(1,5,4.5),s.add(this.fireLight),s.position.set(14,0,-2),t.add(s),this.mountain=s;for(let u=0;u<12;u++){const m=new Kt({color:16757596,transparent:!0,opacity:0}),p=new gt(new Ct(.16,.16,.16),m);p.visible=!1,t.add(p),this.sparks.push({mesh:p,m,life:1,vx:0,vz:0})}const o=new ut;o.add(v(14,1.2,10,11458976,0,.6,0));const l=(u,m,p)=>{o.add(v(2.2,1.6,1.9,16447212,u,2,m)),o.add(v(2.5,.7,2.2,p,u,3.15,m)),o.add(v(.4,1,.12,T.woodDark,u,1.7,m+1))};l(-3.5,.5,10336472),l(0,1.2,1211e4),l(3.5,.5,10336472);for(let u=0;u<6;u++)o.add(v(1.4,.5,.5,8826237,-5+u*2.1,1.45,3.2));o.position.set(30,0,-4),t.add(o);const c=le({species:"bear",fur:9405816,outfit:"robe",outfitColor:10336472,scale:1.05});c.root.position.set(26.5,1.2,-.5),c.root.rotation.y=-Math.PI/2,t.add(c.root);const h=le({species:"bear",fur:T.bearHoney,outfit:"shirt",outfitColor:16447212,scale:.7});h.root.position.set(27.5,1.2,1),h.root.rotation.y=-Math.PI/2,t.add(h.root),this.wiseman.root.position.set(nc,0,-2.4),this.wiseman.root.rotation.y=-Math.PI/2,t.add(this.wiseman.root),this.evangelist.root.position.set(-20,0,-3),this.evangelist.root.visible=!1,t.add(this.evangelist.root)}enter(t){return this.build(),this.revisit=t,this.quake=0,this.wwLeaving=!1,this.christian.root.position.set(t?-24:-27,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),t?(this.phase="done",this.wiseman.root.visible=!1,this.evangelist.root.visible=!1,this.cb.setObjective("⛰ Mount Sinai still smoulders — the west road leads back")):(this.phase="walk",this.wiseman.root.visible=!0,this.evangelist.root.visible=!1,this.cb.setObjective("🎩 A well-dressed gentleman waits along the pleasant path…")),{christian:this.christian}}moveFactor(){return this.phase==="quaking"||this.phase==="evangelist"||this.phase==="rebuke"?0:1}afterMove(){const t=this.christian.root.position;t.z=Qt.clamp(t.z,-14,14);const e=this.phase==="return"?8.5:this.revisit?9.5:20;if(t.x=Qt.clamp(t.x,-28,e),this.revisit){t.x<-26.5&&this.cb.onExit();return}if(this.phase==="walk"&&t.x>nc-3){this.phase="diverted",this.cb.playScript([{speaker:"Worldly Wiseman",text:"Ho there! Good day, good day! Christian of the City of Destruction, unless I miss my guess — the bear with the famous burden!"},{speaker:"Christian",text:"Famous or not, sir, it is heavy. I am bound for the Wicket Gate, where I am told I shall be rid of it."},{speaker:"Worldly Wiseman",text:"The Wicket Gate! Dear me. Mire, mountains, lions and worse lie on THAT road. You have tasted the Slough already, have you not?"},{speaker:"Christian",text:"…I am still drying out, if I am honest."},{speaker:"Worldly Wiseman",text:"Then hear a practical bear! In yonder village of MORALITY lives my good friend Mr. Legality — a master at easing burdens exactly like yours. And if he is busy, his fine son Civility will see to you."},{speaker:"Worldly Wiseman",text:"A short, SAFE stroll — no mire, no nonsense. You could take a house there, send for your wife and cubs, and live respectably ever after!"},{speaker:"Christian",text:"No mire… a house for my family… Sir, that sounds very sensible indeed. Which way did you say?"},{speaker:"Worldly Wiseman",text:"Straight on, past that tall hill. First door on the left! Do give Mr. Legality my regards."}],()=>{this.cb.setObjective("🏘 Follow the pleasant path east, toward the village of Morality")});return}if(this.phase==="diverted"&&t.x>tg){this.phase="quaking",this.quake=1,this.cb.rumbleSound(),this.cb.playScript([{speaker:"Christian",text:"The hill… it HANGS over the very road! And — fire! It flashes fire from its sides!"},{speaker:"Christian",text:"It groans like thunder above me. One step more and it will surely fall… and this burden feels heavier than it has ever been. What have I done?"}],()=>{this.phase="evangelist",this.evangelistT=0,this.evangelist.root.visible=!0,this.evangelist.root.position.set(t.x-14,0,-2.5),this.cb.setObjective("👣 Someone hurries up the road behind you…")});return}this.phase==="return"&&t.x<-26.5&&(this.phase="done",this.cb.onComplete())}spawnSpark(){if(!this.mountain)return;const t=this.sparks.find(e=>e.life>=1);t&&(t.life=0,t.vx=(Math.random()-.5)*1.2,t.vz=(Math.random()-.5)*1.2,t.mesh.position.set(this.mountain.position.x+(Math.random()-.5)*8,5.5+Math.random()*3,this.mountain.position.z+3+Math.random()*2.5),t.mesh.visible=!0)}update(t,e,n){if(!this.built)return;if(jt(this.christian,e,n&&this.moveFactor()>0),this.wiseman.root.visible&&(this.wwLeaving?(this.wiseman.root.position.x+=t*6,this.wiseman.root.rotation.y=Math.PI/2,jt(this.wiseman,e,!0),this.wiseman.root.position.x>24&&(this.wiseman.root.visible=!1)):jt(this.wiseman,e+1.3,!1)),this.phase==="evangelist"){this.evangelistT+=t;const a=this.evangelist.root.position,o=this.christian.root.position,l=o.x-2.6-a.x,c=o.z-.6-a.z,h=Math.hypot(l,c);h>.3?(a.x+=l/h*t*6.5,a.z+=c/h*t*6.5,this.evangelist.root.rotation.y=Math.atan2(l,c),jt(this.evangelist,e,!0)):this.evangelistT>.6&&(this.phase="rebuke",this.christian.root.rotation.y=-Math.PI/2,this.cb.playScript([{speaker:"Evangelist",text:"Christian. What are you doing HERE?"},{speaker:"Christian",text:"E-Evangelist! A… a gentleman told me of a quicker way. A Mr. Legality, in the village of Morality, who could lift my burden without the mire and the mountains…"},{speaker:"Evangelist",text:"Listen carefully, dear bear. That gentleman is Mr. WORLDLY WISEMAN, and he loves only the doctrine of this world. He turns every pilgrim he can from the true road."},{speaker:"Evangelist",text:"Mr. Legality cannot loosen one strap of your burden — no creature was ever freed at his door. And Civility, for all his polish, is a smiling fraud like his father."},{speaker:"Evangelist",text:"And THIS mountain is the reason. It is Sinai — the Law itself. It thunders, it flashes, it shows your burden for what it is… but it cannot LIFT it. Trust in your own good deeds, and it will hang over you all your days."},{speaker:"Christian",text:"Then I have been a fool twice over — once into the mire, and once onto this path. Is there any hope left for me?"},{speaker:"Evangelist",text:"There is. The way you left is exactly where you left it. Return to the true road, Christian — on to the Wicket Gate — and turn aside from it no more."},{speaker:"Christian",text:"I will return at once. Thank you, Evangelist… again."}],()=>{this.phase="return",this.wwLeaving=!0,this.cb.setObjective("↩ Return west, back to the true way")}))}else this.evangelist.root.visible&&jt(this.evangelist,e+.8,!1);const s=this.phase;this.quake=Math.max(0,this.quake-t*.25);const r=s==="quaking"||s==="evangelist"?1:.35;if(this.mountain){const a=this.quake*.09;this.mountain.position.x=14+(Math.random()-.5)*a,this.mountain.position.z=-2+(Math.random()-.5)*a}for(let a=0;a<this.fireSeams.length;a++){const o=.35+.65*Math.abs(Math.sin(e*(2.6+a*.7)+a*2));this.fireSeams[a].material.opacity=o*r+.15}if(this.fireLight&&(this.fireLight.intensity=(.8+Math.abs(Math.sin(e*3.1))*1.6)*r),this.rumbleTimer-=t,this.rumbleTimer<=0){this.rumbleTimer=r>=1?1.6+Math.random():6+Math.random()*5,this.cb.rumbleSound(),this.quake=Math.max(this.quake,r>=1?1:.4);for(let a=0;a<(r>=1?5:2);a++)this.spawnSpark()}for(const a of this.sparks)a.life>=1||(a.life=Math.min(1,a.life+t*.9),a.mesh.position.x+=a.vx*t,a.mesh.position.z+=a.vz*t,a.mesh.position.y-=t*3.2,a.m.opacity=.9*(1-a.life),(a.mesh.position.y<.1||a.life>=1)&&(a.life=1,a.mesh.visible=!1))}}const ge=10,Ua=new R(4,0,-15),Ar=100,Zn=40,ng=new R(Zn,0,-4.3),Ge=150,de=[Ge+10,Ge+24,Ge+38,Ge+52,Ge+66,Ge+80],In=Ge+92,We=5.5,ig=We*2,ka=2.2,ic=de[4]-4,sg=[{speaker:"",text:"A little way past the Gate, off the King's Highway, stands a cottage of warm timber with smoke curling from its chimney — the House of the Interpreter."},{speaker:"Interpreter",text:"(an owl in a scholar's robe, blinking down from the doorway) Christian! Goodwill sent word you'd be coming. Come in, come in — I have things to show you that will help you greatly on your journey."},{speaker:"Christian",text:"Gladly, sir. I have long wished for someone who could make plain the things I only half understand."}],rg=[{speaker:"",text:"The first room is thick with dust — years of it, settled over every beam and floorboard."},{speaker:"Interpreter",text:"Sweep it, if you please."},{speaker:"",text:"A servant sweeps hard. The dust billows up in choking clouds until neither pilgrim can draw breath."},{speaker:"Christian",text:"*coughing* Enough! Stop, I beg you!"}],ag=[{speaker:"Interpreter",text:"Now — bring water, and sprinkle the floor before you sweep."},{speaker:"",text:"The second servant scatters water first. This time the broom leaves the room clean and sweet."},{speaker:"Interpreter",text:"The dust is sin, hidden deep in the heart of a man. The broom is the Law — it stirs sin up and shows it plainly, but has no power to take it away."},{speaker:"Interpreter",text:"The water is the Gospel. Grace alone settles the dust of sin and truly cleanses the heart."},{speaker:"Christian",text:"Then the Law can only show me my filth — never wash me of it. I begin to see why I could not rest at Sinai."}],gi=[[{speaker:"",text:"In the next room sit two small boys, side by side, though nothing else about them is alike."},{speaker:"Interpreter",text:"This one is named Passion. That one, Patience."},{speaker:"",text:"Passion scowls and demands his whole inheritance at once. It is heaped into his lap — and within minutes he has torn, spilled, and squandered every bit, and sits now in rags among the ruins, sulking."},{speaker:"",text:"Patience asks for nothing, and waits quietly, empty-handed."},{speaker:"Christian",text:"Poor foolish thing. Will he never have any more?"},{speaker:"Interpreter",text:"Not until the appointed time — and by then, Patience will have come into lasting riches, while Passion has nothing left at all."},{speaker:"Interpreter",text:"So it is with the children of this world, who must have their good things now, and the children of the world to come, who can wait for theirs — for theirs will never rust or fade away."},{speaker:"Christian",text:"Better to wait for treasure that lasts, than seize a joy that crumbles in the hand."}],[{speaker:"",text:"Against a wall a fire burns, and a man stands before it, endlessly emptying pails of water on the flames."},{speaker:"Christian",text:"Strange — the more he pours, the higher it burns! Why does it not go out?"},{speaker:"Interpreter",text:"Come round to the other side, and see."},{speaker:"",text:"Behind the wall, unseen from the front, another hand pours oil into the fire — secretly, steadily, without ceasing."},{speaker:"Interpreter",text:"The man with the water is the Devil, forever working to put out the work of grace in the heart. The one with the oil is Christ — He keeps alive what His own hand has begun, even when His people cannot see Him doing it."},{speaker:"Christian",text:"Then when I feel my faith failing under some trial, it may be only that I cannot see the hand still feeding it, behind the wall."},{speaker:"Interpreter",text:"Just so, Christian. Just so."}],[{speaker:"",text:"A crowd of fearful people stands well back from a splendid palace, its gate thick with armed guards."},{speaker:"",text:"None of them dares approach — until one man of bold courage walks up and puts his name down to enter."},{speaker:"",text:"He takes up his helmet, shield, and sword, and fights through the guards, taking many hard blows, until at last he pushes through the doorway and enters."},{speaker:"",text:"A great shout of welcome rises from within."},{speaker:"Interpreter",text:"Christian, you must push through difficulties to enter the kingdom of heaven. Write down your name, take up your weapons, and push in — whatever it costs you."},{speaker:"Christian",text:"Then this road was never meant to be walked without a fight. I had hoped otherwise — but I would rather be wounded at that gate than turn away from it."}],[{speaker:"",text:"In a dim corner, a man sits caged behind bars of black iron, his head bowed low."},{speaker:"Christian",text:"Friend, what brought you here?"},{speaker:"",text:"(the caged man, hollow-voiced) I was once a strong believer, respected in my own eyes and the eyes of others. I stopped watching myself, and hardness followed hardness, sin upon sin, until I could no longer repent, though I wanted to."},{speaker:"",text:"Now I am locked in this cage I made for myself, and I cannot get out."},{speaker:"Interpreter",text:"Let his suffering be a warning to you. Treat sin as harmless, drift away little by little, and you may wake one day to find the door already shut — from the inside."},{speaker:"Christian",text:"*shivering* A dreadful sight. God keep me watchful, and never so careless with sin as he was."}],[{speaker:"",text:"A man sits bolt upright in his bed, trembling, sweat on his brow, staring as though he still saw the vision that woke him."},{speaker:"",text:"(the man, shaking) I dreamed the heavens grew black as pitch, and the trumpet sounded, and the clouds parted, and I stood before the great white throne, unready, without a plea to offer."},{speaker:"Interpreter",text:"Don't let it remain just a dream, Christian. That day comes for every soul alike. Live each one as a man who must give account — and you won't be caught unready when the trumpet truly sounds."},{speaker:"Christian",text:"I will remember this room longest of all, sir. It has put a solemn weight on me — a good weight, I think, unlike the one on my back."}]],og=[{speaker:"Christian",text:"Sir, I thank you with all my heart. I came in confused, and I go out instructed — the dust and the Law, the fire and the oil, the cage, the dream — I will carry every one of them with me."},{speaker:"Interpreter",text:"Go then, Christian, and the Lord be with you upon the King's Highway. Always remember what you've seen here, and let it strengthen and comfort you for the rest of your journey."},{speaker:"",text:"The Interpreter walks him to the door, and the bright road outside — and the far light — waits beyond it."}];class lg{constructor(t){O(this,"scene",new xs);O(this,"phase","approach");O(this,"cb");O(this,"christian");O(this,"goodwill");O(this,"revisit",!1);O(this,"built",!1);O(this,"mutterIndex",0);O(this,"doorL",null);O(this,"doorR",null);O(this,"doorOpen",!1);O(this,"castleGlows",[]);O(this,"arrows",[]);O(this,"volleyT",0);O(this,"arrowTimer",0);O(this,"lightBeam",null);O(this,"hasPassedGate",!1);O(this,"peekBlocked",!1);O(this,"peekVolley",0);O(this,"peekArrowTimer",0);O(this,"goodwillNear",!1);O(this,"interpreter");O(this,"houseGreeted",!1);O(this,"houseCalledOut",!1);O(this,"stationIndex",0);O(this,"dust",[]);O(this,"dustBurst",0);O(this,"dustBurstTarget",0);O(this,"sprinkle",[]);O(this,"sprinkleT",0);O(this,"sprinkleTimer",0);O(this,"fireMotes",[]);O(this,"devilArm",null);O(this,"christArm",null);O(this,"waterDrops",[]);O(this,"oilDrops",[]);O(this,"dropTimer",0);O(this,"cottageDoor",null);O(this,"houseDoorOpen",!1);O(this,"exitDoor",null);O(this,"exitDoorOpen",!1);O(this,"interpreterTarget",null);O(this,"interpreterFaceOnArrive",0);O(this,"interpreterIdleTalked",!1);O(this,"interpreterExitTalked",!1);O(this,"footDust",[]);O(this,"footDustTimer",0);O(this,"sweeper",null);O(this,"sweeperArm",null);O(this,"waterer",null);O(this,"watererArm",null);O(this,"toyBall",null);O(this,"passionArm",null);O(this,"dreamer",null);O(this,"sweatDrops",[]);O(this,"partitionXs",[]);O(this,"houseColliders",[]);O(this,"npcTalks",[]);O(this,"knight",null);O(this,"knightArm",null);O(this,"knightShieldArm",null);O(this,"knightState","idle");O(this,"knightT",0);O(this,"guards",[]);O(this,"guardBaseX",[]);O(this,"guardStagger",[]);O(this,"knightDoorPos",new R);O(this,"fireGlow",null);O(this,"embers",[]);this.cb=t,this.christian=le({species:"bear",fur:T.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0,plump:!0}),this.goodwill=le({species:"lion",outfit:"robe",outfitColor:T.robeWhite,scale:1.3}),this.interpreter=le({species:"owl",outfit:"robe",outfitColor:T.robeGold,scale:1.05})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new qt(13163752),t.fog=new li(13163752,36,95),t.add(new ys(14872306,11716774,.9));const e=new Ms(16248536,1.2);e.position.set(-22,38,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-70,e.shadow.camera.right=70,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e);const n=new gt(new Ct(210,1,90),ke(10340243));n.position.set(10,-.5,0),n.receiveShadow=!0,t.add(n);for(let f=0;f<90;f++){const d=-70+Math.random()*185,b=-35+Math.random()*70,w=v(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?9222784:11195548,d,.05,b);w.castShadow=!1,t.add(w)}for(let f=0;f<30;f++){const d=-62+f*2.5,b=v(2.5,.12,3.2,T.path,d,.06,0);b.castShadow=!1,t.add(b)}for(const f of[-52,-36,-20,-4]){const d=new ut;d.add(v(.16,2.2,.16,T.woodDark,0,1.1,0));const b=v(.34,.34,.34,T.light,0,2.35,0);b.material=new zn({color:T.light,emissive:16773296,emissiveIntensity:.55}),d.add(b),d.position.set(f,0,2.6),t.add(d)}for(const[f,d,b]of[[-56,-7,!1],[-48,8,!0],[-38,-9,!1],[-27,7,!1],[-16,-8,!0],[-8,9,!1]]){const w=new ut;w.add(v(.5,1.6,.5,T.trunk,0,.8,0)),w.add(v(1.9,1.3,1.9,b?T.leafPink:T.leaf,0,2.2,0)),w.add(v(1.2,.9,1.2,b?T.leafPink:T.leaf,0,3.1,0)),w.position.set(f,0,d),t.add(w)}const s=15920351,r=14472386;for(const f of[-1,1]){for(let d=0;d<7;d++){const b=f*(3.4+d*4.4);t.add(v(1.3,3,4.4,d%2===0?s:15327954,ge,1.5,b)),t.add(v(1.4,.28,4.6,r,ge,3.1,b))}t.add(v(1.7,4.2,1.7,s,ge,2.1,f*2.2)),t.add(v(2,.4,2,r,ge,4.3,f*2.2)),t.add(v(1.2,.6,1.2,T.roofPink,ge,4.7,f*2.2))}t.add(v(.9,.9,4.2,s,ge,4.4,0)),t.add(v(1,.3,4.6,r,ge,5,0));const a=f=>{const d=new ut;d.position.set(ge,0,1.35*f);const b=v(.3,3.2,1.35,T.woodDark,0,1.6,-.675*f);return d.add(b),d.add(v(.34,.14,1.35,9072466,0,.9,-.675*f)),d.add(v(.34,.14,1.35,9072466,0,2.3,-.675*f)),this.scene.add(d),d};this.doorL=a(-1),this.doorR=a(1);const o=new ut;o.add(v(.14,1.5,.14,T.woodDark,0,.75,0)),o.add(v(1.5,.7,.1,T.wallCream,0,1.4,0)),o.position.set(ge-1.6,0,3.6),o.rotation.y=-.4,t.add(o);const l=new ut,c=5919844,h=4801618;l.add(v(7,3,5.5,7235704,0,1.5,0)),l.add(v(5.5,3.4,4.2,c,0,4.4,0)),l.add(v(1.6,5.4,1.6,h,-2.6,4.8,-1.4)),l.add(v(1.6,6.2,1.6,h,2.4,5.2,1.2)),l.add(v(1.3,4.8,1.3,c,2.6,4.5,-1.8));for(let f=0;f<5;f++)l.add(v(.7,.7,.7,h,-2+f*1.05,6.4,0));l.add(v(.1,2.4,.1,h,0,8,0)),l.add(v(.9,.6,.06,9058890,.5,8.6,0));for(const[f,d,b]of[[-2.6,5.6,-.5],[2.4,6.4,1.2],[0,5,2.15],[-1.4,4.2,2.15]]){const w=new gt(new Ct(.5,.7,.12),new Kt({color:16735309,transparent:!0,opacity:.85}));w.position.set(f,d,b),l.add(w),this.castleGlows.push(w)}l.position.copy(Ua),t.add(l);for(const[f,d]of[[-1,-9],[8,-10],[1,-20],[9,-18]])t.add(v(.3,1.3,.3,9274488,f,.65,d)),t.add(v(.9,.24,.24,9274488,f+.3,1.3,d));for(let f=0;f<10;f++){const d=new ut;d.add(v(.09,.09,1.1,4867136,0,0,0)),d.add(v(.16,.16,.22,9058890,0,0,.6)),d.add(v(.2,.05,.3,14209996,0,0,-.55)),d.visible=!1,t.add(d),this.arrows.push({g:d,t:1,active:!1,from:new R,to:new R})}for(let f=0;f<38;f++){const d=ge+2+f*2.5,b=v(2.5,.12,2.6,15655876,d,.06,0);b.castShadow=!1,t.add(b);const w=Math.abs(d-Zn)<3.5;f%1===0&&(t.add(v(2.5,.9,.8,8367732,d,.45,2.1)),w||t.add(v(2.5,.9,.8,8367732,d,.45,-2.1))),f%3===1&&!w&&(t.add(v(.5,.4,.5,T.grassDark,d,1.05,2.1)),t.add(v(.5,.4,.5,T.grassDark,d,1.05,-2.1)))}for(let f=0;f<34;f++){const d=v(.18,.18,.18,[T.flowerYellow,T.flowerPink,T.flowerBlue][f%3],ge+3+Math.random()*84,.98,Math.random()>.5?2.1:-2.1);d.castShadow=!1,t.add(d)}const u=new ut,m=new gt(new Ct(2.6,40,2.6),new Kt({color:16767306,transparent:!0,opacity:.8,fog:!1}));m.position.y=20,u.add(m);const p=new gt(new Ct(1.3,44,1.3),new Kt({color:16776160,transparent:!0,opacity:.95,fog:!1}));p.position.y=22,u.add(p);const g=new gt(new Ct(3.4,3.4,3.4),new Kt({color:16771194,fog:!1}));g.position.y=42,g.rotation.set(Math.PI/4,0,Math.PI/4),u.add(g);const _=new ps(16771194,3.5,40);_.position.y=4,u.add(_),u.position.set(Ar+2,0,0),u.visible=!1,t.add(u),this.lightBeam=u,this.goodwill.root.position.set(ge+2.2,0,-1.6),this.goodwill.root.rotation.y=-Math.PI/2,this.goodwill.root.visible=!1,t.add(this.goodwill.root),t.add(this.interpreter.root),this.buildCottage(),this.buildHouseInterior()}buildCottage(){const t=this.scene,e=Zn,n=-6.5,s=new ut;s.add(v(4.2,2.6,3.6,T.wallCream,0,1.3,0)),s.add(v(4.6,1.5,4,T.roofPeach,0,3.35,0)),s.add(v(.5,.9,.5,T.woodDark,1.5,3.6,.2)),s.add(v(.9,.16,.3,9072466,0,1.66,1.9)),s.add(v(.7,.7,.1,T.wallMint,-1.4,1.6,1.81)),s.add(v(.7,.7,.1,T.wallMint,1.4,1.6,1.81)),s.position.set(e,0,n),t.add(s);const r=new ut;r.position.set(e-.45,0,n+1.81),r.add(v(.9,1.7,.14,T.woodDark,.45,.85,0)),t.add(r),this.cottageDoor=r;for(let o=0;o<4;o++)t.add(v(1.4,.1,1.2,T.path,e,.05,-2.6-o*1.1));const a=new ut;a.add(v(.12,1.2,.12,T.woodDark,0,.6,0)),a.add(v(1.6,.6,.1,T.wallCream,0,1.1,0)),a.position.set(e-2.3,0,-3.2),a.rotation.y=-.5,t.add(a),this.interpreter.root.position.set(e,0,n+3.2),this.interpreter.root.rotation.y=0,this.interpreter.root.visible=!0}buildHouseInterior(){const t=this.scene,e=Ge+46;t.add(v(96,.2,ig,T.wood,e,-.1,0)),t.add(v(96,3.1,.3,T.wallCream,e,1.55,-We)),t.add(v(96,3.1,.3,T.wallCream,e,1.55,We));for(let l=0;l<10;l++){const c=Ge+4+l*9.5;let h=l%2===0?-We+.4:We-.4;Math.abs(c-ic)<1.8&&(h=We-.4);const u=new ut;u.add(v(.14,2.1,.14,T.woodDark,0,1.05,0));const m=v(.32,.32,.32,T.light,0,2.15,0);m.material=new zn({color:T.light,emissive:16773296,emissiveIntensity:.5}),u.add(m),u.position.set(c,0,h),t.add(u)}const n=[T.wallPink,T.wallMint,T.wallLilac],s=We-ka;this.partitionXs=[Ge+3,...de.slice(1).map((l,c)=>(de[c]+l)/2),In-6],this.partitionXs.forEach((l,c)=>{const h=n[c%n.length];t.add(v(.14,2.2,s,h,l,1.1,-7.7/2)),t.add(v(.14,2.2,s,h,l,1.1,(ka+We)/2))});{const l=de[0];t.add(v(3.2,.05,3,13351306,l,.03,-3.2)),t.add(v(.4,.3,.4,T.stone,l+.9,.15,-3.4));const c=le({species:"mouse",outfit:"overalls",outfitColor:9072466,scale:.52});c.root.position.set(l-.9,0,-2.7),c.root.rotation.y=.5;const h=new ut;h.add(v(.07,.85,.07,T.woodDark,0,-.35,.1)),h.add(v(.24,.18,.1,13215845,0,-.8,.16)),c.armR.add(h),t.add(c.root),this.sweeper=c,this.sweeperArm=c.armR,this.houseColliders.push({x:l-.9,z:-2.7,r:.4}),this.npcTalks.push({parts:c,talked:!1,radius:1.1,lines:[{speaker:"",text:"(the little sweeper, between coughs) It never comes truly clean this way, sir — the harder I sweep, the worse it gets!"}]});const u=le({species:"mouse",outfit:"shirt",outfitColor:9418968,scale:.52});u.root.position.set(l+1,0,-3.6),u.root.rotation.y=-.6;const m=v(.2,.22,.18,4867136,0,-.45,.14);u.armR.add(m),t.add(u.root),this.waterer=u,this.watererArm=u.armR,this.houseColliders.push({x:l+1,z:-3.6,r:.4}),this.npcTalks.push({parts:u,talked:!1,radius:1.1,lines:[{speaker:"",text:"(the little waterer, pail in hand) A splash of water first, and the dust lies down like a lamb. Sweeping alone never once managed it."}]});for(let p=0;p<22;p++){const g=new Kt({color:14273187,transparent:!0,opacity:0}),_=new gt(new Ct(.18,.18,.18),g),f=l+(Math.random()-.5)*2.8,d=-3.2+(Math.random()-.5)*2.4;_.position.set(f,.3,d),t.add(_),this.dust.push({mesh:_,mat:g,life:Math.random(),baseX:f,baseZ:d})}for(let p=0;p<16;p++){const g=new Kt({color:11458800,transparent:!0,opacity:0}),_=new gt(new Ct(.07,.16,.07),g);_.visible=!1,t.add(_),this.sprinkle.push({mesh:_,mat:g,active:!1,vy:0})}}{const l=de[1],c=le({species:"bear",outfit:"shirt",outfitColor:15237962,scale:.68});c.root.position.set(l-1.3,0,1.6),c.root.rotation.y=.5;const h=new ut;h.add(v(.14,.22,.1,16766629,0,0,0)),h.add(v(.13,.13,.1,16238804,0,.17,0)),h.position.set(0,-.28,.2),c.armR.add(h),t.add(c.root),this.passionArm=c.armR,this.houseColliders.push({x:l-1.3,z:1.6,r:.45}),this.npcTalks.push({parts:c,talked:!1,radius:1.2,lines:[{speaker:"Passion",text:"Mine! All of it, NOW! Why should I wait for anything, when I can have it all today?"}]});for(const[g,_,f]of[[-2.2,.5,16769162],[-1.8,1.6,16757702]])t.add(v(.22,.22,.22,f,l+g,.11,_));const u=new ut;u.add(v(.5,.2,.3,16747069,0,.15,0)),u.add(v(.3,.14,.26,16761692,0,.3,0));for(const g of[-.18,.18])for(const _ of[-.13,.13])u.add(v(.1,.1,.1,2894384,g,.06,_));u.position.set(l-2.5,0,1),u.rotation.y=.6,t.add(u);const m=new gt(new Nn(.16,10,8),ke(16739201));m.position.set(l-1.6,.16,2.2),m.castShadow=!0,t.add(m),this.toyBall=m;for(const[g,_,f,d]of[[-2,2.3,11455487,16774857],[-1,.6,T.dressLeaf,16769162]])t.add(v(.3,.3,.3,f,l+g,.16,_)),t.add(v(.32,.06,.06,d,l+g,.24,_)),t.add(v(.06,.06,.32,d,l+g,.24,_));const p=le({species:"bear",outfit:"overalls",outfitColor:T.dressLeaf,scale:.68});p.root.position.set(l+1.6,0,1.8),p.root.rotation.y=-.5,t.add(p.root),this.houseColliders.push({x:l+1.6,z:1.8,r:.45}),this.npcTalks.push({parts:p,talked:!1,radius:1.2,lines:[{speaker:"Patience",text:"I'd rather wait and have something that lasts, than grab at what falls apart in my hands."}]})}{const l=de[2],c=-1.8;t.add(v(.4,1.5,1.8,T.stone,l,2.05,c)),t.add(v(.9,.14,.9,4866104,l,.08,c));for(let p=0;p<14;p++){const g=[16747069,16761692,16735293,16769162][p%4],_=new Kt({color:g}),f=.3+Math.random()*.55,d=new gt(new Ct(.18+Math.random()*.14,f,.18+Math.random()*.14),_);d.position.set(l+(Math.random()-.5)*.8,f/2+.1,c+(Math.random()-.5)*.6),t.add(d),this.fireMotes.push(d)}const h=new ps(16753479,1.8,6);h.position.set(l,.6,c),t.add(h),this.fireGlow=h;for(let p=0;p<10;p++){const g=new Kt({color:16764794,transparent:!0,opacity:0}),_=new gt(new Ct(.06,.06,.06),g),f=l+(Math.random()-.5)*.7,d=c+(Math.random()-.5)*.5;_.position.set(f,.3,d),t.add(_),this.embers.push({mesh:_,mat:g,life:Math.random(),baseX:f,baseZ:d})}const u=le({species:"cat",outfit:"none",fur:5919844,scale:.9});u.root.position.set(l-1.8,0,c+.3),u.root.rotation.y=Math.PI/2,u.armR.add(v(.26,.34,.22,4867136,0,-.5,.16)),t.add(u.root),this.devilArm=u.armR,this.houseColliders.push({x:l-1.8,z:c+.3,r:.45}),this.npcTalks.push({parts:u,talked:!1,radius:1.2,lines:[{speaker:"",text:"(the dark figure pours, unblinking) Pour and pour... this fire will never go out, no matter what I do to smother it."}]});const m=le({species:"lion",outfit:"robe",outfitColor:T.robeWhite,scale:.85});m.root.position.set(l+1.8,0,c+.3),m.root.rotation.y=-Math.PI/2,m.armR.add(v(.22,.3,.2,T.robeGold,0,-.5,.16)),t.add(m.root),this.christArm=m.armR,this.houseColliders.push({x:l+1.8,z:c+.3,r:.45}),this.npcTalks.push({parts:m,talked:!1,radius:1.2,lines:[{speaker:"",text:"(a quiet voice, warm and steady) Have no fear, Christian. My grace feeds this flame, and it will never run dry."}]});for(let p=0;p<10;p++){const g=new Kt({color:5941480,transparent:!0,opacity:0}),_=new gt(new Ct(.08,.16,.08),g);_.visible=!1,t.add(_),this.waterDrops.push({mesh:_,mat:g,active:!1})}for(let p=0;p<10;p++){const g=new Kt({color:16769357,transparent:!0,opacity:0}),_=new gt(new Ct(.08,.16,.08),g);_.visible=!1,t.add(_),this.oilDrops.push({mesh:_,mat:g,active:!1})}}{const l=de[3];t.add(v(2.6,2.8,.3,T.roofLilac,l,1.4,4.2)),t.add(v(2.8,.3,.4,T.robeGold,l,2.85,4.2)),t.add(v(.9,1.7,.3,16774857,l,.85,4.05)),this.knightDoorPos.set(l,0,3.85),this.guardBaseX=[];for(const u of[-1.1,1.1]){const m=le({species:"pig",outfit:"overalls",outfitColor:5919844,scale:.9});m.root.position.set(l+u,0,3),m.root.rotation.y=Math.PI;const p=new ut;p.add(v(.06,1.2,.06,T.woodDark,0,.3,0)),p.add(v(.12,.24,.12,13093327,0,.95,0)),m.armR.add(p),t.add(m.root),this.guards.push(m),this.guardStagger.push(0),this.guardBaseX.push(l+u),this.houseColliders.push({x:l+u,z:3,r:.45})}const c=le({species:"bear",outfit:"shirt",outfitColor:9080730,scale:.95});c.root.position.set(l,0,1.2),c.head.add(v(.7,.22,.68,13093327,0,.74,0)),c.head.add(v(.46,.14,.1,13093327,0,.52,.42)),c.armL.add(v(.36,.5,.1,9080730,0,-.3,.2)),c.armL.add(v(.18,.24,.11,T.robeGold,0,-.3,.24));const h=new ut;h.add(v(.08,.7,.08,14209996,0,-.15,0)),h.add(v(.22,.1,.08,9072466,0,-.46,0)),c.armR.add(h),t.add(c.root),this.knight=c,this.knightArm=c.armR,this.knightShieldArm=c.armL,this.houseColliders.push({x:l,z:1.2,r:.45}),this.npcTalks.push({parts:c,talked:!1,radius:1.3,lines:[{speaker:"",text:"(the armored man, resolute) Set down your name, friend, and take up your sword. This road is not for the faint of heart."}]})}{const l=ic,c=1.1,h=.95,u=2.1,m=-4.35;t.add(v(c*2,.05,h*2,3814976,l,.03,m));const p=2894384;for(const _ of[-1.1,-.55,0,.55,1.1])t.add(v(.06,u,.06,p,l+_,u/2,m-h)),t.add(v(.06,u,.06,p,l+_,u/2,m+h));for(const _ of[-.63,0,.63])t.add(v(.06,u,.06,p,l-c,u/2,m+_)),t.add(v(.06,u,.06,p,l+c,u/2,m+_));t.add(v(c*2+.1,.06,.06,p,l,u,m-h)),t.add(v(c*2+.1,.06,.06,p,l,u,m+h)),t.add(v(.06,.06,h*2+.1,p,l-c,u,m)),t.add(v(.06,.06,h*2+.1,p,l+c,u,m));const g=le({species:"bear",outfit:"none",fur:9406590,scale:.9});g.root.position.set(l,0,m),g.root.rotation.x=.2,g.head.add(v(.16,.14,.05,2894384,-.24,.5,.44)),g.head.add(v(.16,.14,.05,2894384,.24,.5,.44)),g.head.add(v(.2,.04,.04,2894384,0,.5,.44)),t.add(g.root),this.houseColliders.push({x:l,z:m,r:Math.max(c,h)+.1}),this.npcTalks.push({parts:g,talked:!1,radius:1.6,lines:[{speaker:"",text:"(the caged man, barely lifting his head) Don't linger here on my account, friend. Just... don't let your heart go hard the way mine did."}]})}{const l=de[5],c=3;t.add(v(1.1,.3,2.2,T.woodDark,l,.3,c)),t.add(v(1,.2,2,15659775,l,.5,c)),t.add(v(.5,.18,.4,16774888,l,.6,c-.95)),this.houseColliders.push({x:l,z:c,r:1.15});const h=le({species:"rabbit",outfit:"none",scale:.85});h.root.position.set(l,.6,c-.3),h.legL.rotation.x=-1.3,h.legR.rotation.x=-1.3,t.add(h.root),this.dreamer=h;const u=[[-.26,.5],[.28,.55]];for(const[g,_]of u){const f=new Kt({color:7324656,transparent:!0,opacity:0}),d=new gt(new Ct(.07,.1,.07),f);d.position.set(g,_,.42),h.head.add(d),this.sweatDrops.push({mesh:d,mat:f,baseY:_})}this.npcTalks.push({parts:h,talked:!1,radius:1.5,lines:[{speaker:"",text:"(the man, still shaking) Don't wake me yet... no, wait — don't let it be real..."}]});const m=new Kt({color:16645622,transparent:!0,opacity:.5}),p=new gt(new Ct(.9,1.8,.5),m);p.position.set(l,1.2,We-.6),t.add(p)}const r=1;t.add(v(.3,3,We-r,T.wallCream,In,1.5,(We+r)/2)),t.add(v(.3,3,We-r,T.wallCream,In,1.5,-6.5/2)),t.add(v(.3,.4,r*2+.3,T.wallCream,In,3.2,0));const a=new ut;a.position.set(In,0,-r);const o=v(.14,1.9,r*1.85,T.woodDark,0,.95,r*.925);a.add(o),t.add(a),this.exitDoor=a;for(let l=0;l<16;l++){const c=new Kt({color:16777215,transparent:!0,opacity:0}),h=new gt(new Ct(.22,.22,.22),c);h.visible=!1,h.castShadow=!1,t.add(h),this.footDust.push({mesh:h,mat:c,life:1,vx:0,vz:0})}}enter(t){this.build(),this.revisit=t,this.mutterIndex=0,this.volleyT=0,this.houseGreeted=t,this.houseCalledOut=!1,this.interpreterIdleTalked=!1,this.interpreterExitTalked=!1;for(const e of this.npcTalks)e.talked=!1;this.dustBurst=0,this.dustBurstTarget=0,this.sprinkleT=0,this.knightState="idle",this.knightT=0,this.knight&&(this.knight.root.visible=!0,this.knight.root.position.set(de[3],0,1.2),this.knight.root.rotation.set(0,0,0));for(let e=0;e<this.guards.length;e++)this.guardStagger[e]=0;this.stationIndex=de.length,this.houseDoorOpen=!1,this.exitDoorOpen=!1,this.interpreterTarget=null;for(const e of this.arrows)e.active=!1,e.g.visible=!1;return this.hasPassedGate=!1,this.peekBlocked=!1,this.peekVolley=0,this.goodwillNear=!1,this.christian.root.position.set(-60,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),this.interpreter.root.position.set(Zn,0,-6.5+3.2),this.interpreter.root.rotation.y=0,t?(this.phase="done",this.doorOpen=!0,this.goodwill.root.visible=!0,this.goodwill.root.position.set(ge+2.2,0,-1.6),this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("⛩ The Gate stands open — the narrow way runs east")):(this.phase="approach",this.doorOpen=!1,this.goodwill.root.visible=!1,this.lightBeam&&(this.lightBeam.visible=!1),this.cb.setObjective("🚶 A long, straight road — the Wicket Gate lies far to the east")),{christian:this.christian}}debugSkip(t){var e,n,s,r;this.build(),this.revisit=!1,this.doorOpen=!0,this.goodwill.root.visible=!0,this.goodwill.root.position.set(ge+3.6,0,-1.7),this.lightBeam&&(this.lightBeam.visible=!0),this.phase="freeroam",this.houseGreeted=t==="house",this.stationIndex=t==="house"?0:de.length,this.interpreterTarget=null,this.interpreterIdleTalked=!1,this.interpreterExitTalked=!1;for(const a of this.npcTalks)a.talked=!1;this.knightState="idle",this.knightT=0,this.knight&&(this.knight.root.visible=!0,this.knight.root.position.set(de[3],0,1.2),this.knight.root.rotation.set(0,0,0));for(let a=0;a<this.guards.length;a++)this.guardStagger[a]=0;this.hasPassedGate=t!=="house",this.peekBlocked=!1,this.peekVolley=0,this.goodwillNear=!1,t==="house"?(this.christian.root.position.set(Ge,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(Ge+1.5,0,-1.8),this.interpreter.root.rotation.y=-Math.PI/2,this.phase="house",(n=(e=this.cb).setMusic)==null||n.call(e,"interpreter"),this.cb.setObjective("🏚 The House of the Interpreter — walk on to see what he shows you")):(this.christian.root.position.set(ge+4,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(Zn,0,-6.5+3.2),this.interpreter.root.rotation.y=0,(r=(s=this.cb).setMusic)==null||r.call(s,"gate"),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light"))}moveFactor(){return this.phase==="knock"||this.phase==="volley"||this.phase==="houseGreet"?0:1}resolvePeopleCollision(t){for(const n of[this.interpreter,this.goodwill]){if(!n.root.visible)continue;const s=t.x-n.root.position.x,r=t.z-n.root.position.z,a=Math.hypot(s,r);a<.8&&a>1e-4&&(t.x=n.root.position.x+s/a*.8,t.z=n.root.position.z+r/a*.8)}}resolvePartitions(t){const n=ka/2-.3;if(!(Math.abs(t.z)<n))for(const s of this.partitionXs)t.x>s-.18&&t.x<s+.18&&(t.x=t.x<s?s-.18:s+.18)}resolveHouseColliders(t){for(const e of this.houseColliders){const n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s);r<e.r&&r>1e-4&&(t.x=e.x+n/r*e.r,t.z=e.z+s/r*e.r)}}afterMove(){const t=this.christian.root.position;if(this.resolvePeopleCollision(t),(this.phase==="house"||this.phase==="houseExit")&&(this.resolvePartitions(t),this.resolveHouseColliders(t)),this.phase==="house"||this.phase==="houseExit"){if(t.z=Qt.clamp(t.z,-We+.8,We-.8),t.x=Qt.clamp(t.x,Ge-2,In+3),this.phase==="house"){if(!this.interpreterIdleTalked&&this.stationIndex===0&&t.distanceTo(this.interpreter.root.position)<1.4){this.interpreterIdleTalked=!0,this.cb.playScript([{speaker:"Interpreter",text:"Take your time, Christian. Walk on when you're ready, and I'll show you all that's here to see."}]);return}for(const e of this.npcTalks)if(!e.talked&&t.distanceTo(e.parts.root.position)<e.radius){e.talked=!0,this.cb.playScript(e.lines);return}if(this.stationIndex<de.length&&t.x>de[this.stationIndex]-2){const e=this.stationIndex;this.stationIndex++;const n=t.z>=0?-1.6:1.6;e===0?(this.interpreterTarget=new R(de[0]-2,0,-2),this.interpreterFaceOnArrive=Math.PI/2,this.christian.root.rotation.y=Math.PI):e===1?(this.interpreterTarget=new R(de[1]+2,0,-1.8),this.interpreterFaceOnArrive=0):e===2?(this.interpreterTarget=new R(de[2]-1.8,0,-3),this.interpreterFaceOnArrive=0):e===3?(this.interpreterTarget=new R(de[3]-2.5,0,n),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI):e===4?(this.interpreterTarget=new R(de[4]-1,0,n),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI,this.christian.root.rotation.y=Math.PI):(this.interpreterTarget=new R(de[e]-1,0,n),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI),e===0?(this.dustBurstTarget=1,this.cb.playScript(rg,()=>{this.dustBurstTarget=0,this.sprinkleT=1.6,this.cb.playScript(ag)})):e===3?this.cb.playScript([gi[2][0],gi[2][1]],()=>{this.knightState="fighting",this.knightT=0,this.cb.playScript([gi[2][2],gi[2][3]],()=>{this.knightState="entering",this.knightT=0,this.cb.playScript([gi[2][4],gi[2][5]])})}):this.cb.playScript(gi[e-1]);return}if(this.stationIndex>=de.length&&t.x>In-4){this.phase="houseExit";const e=t.z>=0?-1.6:1.6;this.interpreterTarget=new R(In-2,0,e),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI,this.exitDoorOpen=!0,this.cb.playScript(og,()=>{this.cb.setObjective("🚪 Walk out through the door, back to the King's Highway")})}return}if(t.x>In+1.5){const e=()=>{var n,s;this.christian.root.position.set(Zn,0,-2.2),this.christian.root.rotation.y=0,this.exitDoorOpen=!1,this.houseDoorOpen=!1,this.phase="freeroam",(s=(n=this.cb).setMusic)==null||s.call(n,"gate"),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light")};this.cb.fade?this.cb.fade(e):e()}!this.interpreterExitTalked&&t.distanceTo(this.interpreter.root.position)<1.8&&(this.interpreterExitTalked=!0,this.cb.playScript([{speaker:"Interpreter",text:"Still here, Christian? The road is waiting — but it's good to pause and look back sometimes."},{speaker:"Interpreter",text:"Everything you've seen today will make more sense the further you walk. Now go — grace will carry you to the end."}]));return}if(t.z=Qt.clamp(t.z,-14,14),t.x>ge-1.5&&(this.phase==="approach"||this.phase==="knock")&&(t.x=Math.min(t.x,ge-1.5)),t.x>ge+1){const e=Math.abs(t.x-Zn)<4;t.z=Qt.clamp(t.z,e?-6.5:-1.6,1.6)}if(t.x=Qt.clamp(t.x,-62,Ar+3),this.hasPassedGate&&!this.revisit&&this.phase==="freeroam"&&t.x<ge-1.2?(t.x=ge-1.2,this.peekBlocked||(this.peekBlocked=!0,this.peekVolley=5,this.peekArrowTimer=0,this.cb.rumbleSound(),this.cb.playScript([{speaker:"Goodwill",text:"Careful! Beelzebub's archers never sleep — stay behind the wall, Christian!"}]))):t.x>ge+.5&&(this.peekBlocked=!1),this.goodwill.root.visible&&(this.phase==="freeroam"||this.phase==="done")&&t.distanceTo(this.goodwill.root.position)<2.2?this.goodwillNear||(this.goodwillNear=!0,this.cb.playScript([{speaker:"Goodwill",text:"Still here, are you? The Highway lies straight ahead, Christian — I told you true."},{speaker:"Goodwill",text:"Keep that shining light before your eyes. It has never yet led a pilgrim wrong."}])):this.goodwillNear=!1,this.revisit){(t.x<-58||t.x>Ar-2)&&this.cb.onExit();return}if(this.phase==="freeroam"&&!this.houseGreeted&&t.distanceTo(ng)<2.4){this.houseGreeted=!0,this.phase="houseGreet",this.houseDoorOpen=!0,this.christian.root.rotation.y=Math.PI,this.interpreter.root.rotation.y=0,this.cb.playScript(sg,()=>{const e=()=>{var n,s;this.phase="house",this.stationIndex=0,this.christian.root.position.set(Ge,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(Ge+1.5,0,-1.8),this.interpreter.root.rotation.y=-Math.PI/2,(s=(n=this.cb).setMusic)==null||s.call(n,"interpreter"),this.cb.setObjective("🏚 The House of the Interpreter — walk on to see what he shows you")};this.cb.fade?this.cb.fade(e):e()});return}if(this.phase==="freeroam"&&!this.houseGreeted&&!this.houseCalledOut&&t.x>Zn+5&&(this.houseCalledOut=!0,this.cb.playScript([{speaker:"Interpreter",text:"Christian! Christian — over here! Won't you stop a moment at an old owl's door?"}])),this.phase==="approach"){const e=[[-45,[{speaker:"Christian",text:"*mutter* …Left my home. Lost my friend in a bog. Nearly crushed beneath a burning mountain. And still this burden sits like a millstone…"},{speaker:"Christian",text:"Is this truly the way? There is no one even to ask."}]],[-30,[{speaker:"Christian",text:"…What a fool I was, to listen to Worldly Wiseman. Smooth words, smooth road — and it led me straight under Sinai."},{speaker:"Christian",text:"Evangelist forgave me. But will the Gate? What if they ask where I have been… and shut it in my face?"}]],[-15,[{speaker:"Christian",text:"So far… and so straight. Not one turning. As if the road itself were telling me: no more byways, old bear."},{speaker:"Christian",text:'*sigh* Help said it. Evangelist said it. "Knock, and it will be opened." Keep walking, Christian. Just keep walking.'}]]];if(this.mutterIndex<e.length&&t.x>e[this.mutterIndex][0]){const n=e[this.mutterIndex][1];this.mutterIndex++,this.cb.playScript(n);return}if(t.x>ge-3.2&&Math.abs(t.z)<4){this.phase="knock",this.christian.root.rotation.y=Math.PI/2,this.cb.playScript([{speaker:"",text:'The gate is shut. Above it, an old inscription reads: "Knock, and it will be opened to you."'},{speaker:"Christian",text:"*knock… knock…* May I enter here? Will he within open even to a broken sinner like me?"},{speaker:"???",text:"(a deep, warm voice, like far-off thunder that means no harm) Who knocks?"},{speaker:"Christian",text:"A poor burdened sinner, come from the City of Destruction. I am bound for the Celestial City — they told me the way lies through this Gate."},{speaker:"Goodwill",text:"Then I gladly open it. We turn no one away who knocks — no one."}],()=>{this.doorOpen=!0,this.goodwill.root.visible=!0,this.cb.blipSound(),this.cb.playScript([{speaker:"",text:"The doors swing open — and there stands a LION, golden-maned and robed in white, filling the gateway like sunrise."},{speaker:"Goodwill",text:"I am Goodwill, keeper of this Gate. But don't stand in the open, friend—"},{speaker:"Goodwill",text:"That castle over there belongs to BEELZEBUB, and his archers shoot at every pilgrim who dares my doorstep. QUICKLY — give me your paw!"}],()=>{this.phase="volley",this.volleyT=0,this.arrowTimer=0,this.cb.rumbleSound(),this.cb.setObjective("🏹 Arrows from the dark castle…!")})});return}}}fireArrow(){const t=this.arrows.find(n=>!n.active);if(!t)return;const e=this.christian.root.position;t.active=!0,t.t=0,t.from.set(Ua.x-1,7.5,Ua.z+2),t.to.set(e.x-2.5+Math.random()*5,.1,e.z+1.5+Math.random()*3.5),t.g.visible=!0}update(t,e,n){if(!this.built)return;if(jt(this.christian,e,n&&this.moveFactor()>0),this.goodwill.root.visible&&jt(this.goodwill,e+.7,!1),n&&(this.footDustTimer-=t,this.footDustTimer<=0)){this.footDustTimer=.13;const r=this.christian.root.position,a=this.footDust.find(o=>o.life>=1);a&&(a.life=0,a.vx=(Math.random()-.5)*.8,a.vz=(Math.random()-.5)*.8,a.mesh.position.set(r.x+(Math.random()-.5)*.5,.12,r.z+(Math.random()-.5)*.5),a.mesh.visible=!0)}for(const r of this.footDust){if(r.life>=1)continue;r.life=Math.min(1,r.life+t*2.2),r.mesh.position.x+=r.vx*t,r.mesh.position.z+=r.vz*t,r.mesh.position.y+=t*.9;const a=.6+r.life*1.6;r.mesh.scale.setScalar(a),r.mat.opacity=.55*(1-r.life),r.life>=1&&(r.mesh.visible=!1)}if(this.interpreterTarget){const r=this.interpreter.root.position,a=this.interpreterTarget.x-r.x,o=Math.abs(a)<.3,h=(!(this.phase==="house"||this.phase==="houseExit")||o?this.interpreterTarget.z:0)-r.z,u=Math.hypot(a,h);if(u>.12){const m=Math.min(9*t,u);r.x+=a/u*m,r.z+=h/u*m,this.interpreter.root.rotation.y=Math.atan2(a,h),jt(this.interpreter,e+1.1,!0)}else o?(r.set(this.interpreterTarget.x,0,this.interpreterTarget.z),this.interpreter.root.rotation.y=this.interpreterFaceOnArrive,this.interpreterTarget=null,jt(this.interpreter,e+1.1,!1)):jt(this.interpreter,e+1.1,!1)}else jt(this.interpreter,e+1.1,!1);this.dustBurst+=(this.dustBurstTarget-this.dustBurst)*Math.min(t*1.6,1);for(const r of this.dust)this.dustBurst>.02&&(r.life+=t*(.4+this.dustBurst*1.6),r.life>=1&&(r.life-=1,r.mesh.position.set(r.baseX,.3,r.baseZ)),r.mesh.position.y+=t*(.4+this.dustBurst*.6)),r.mat.opacity=this.dustBurst*.55*Math.sin(r.life*Math.PI);if(this.sprinkleT>0&&(this.sprinkleT-=t,this.sprinkleTimer-=t,this.sprinkleTimer<=0)){this.sprinkleTimer=.03;const r=this.sprinkle.find(a=>!a.active);if(r){const a=de[0]+(Math.random()-.5)*2.8,o=-3.2+(Math.random()-.5)*2.4;r.active=!0,r.vy=3.5+Math.random(),r.mesh.position.set(a,1.8+Math.random()*.4,o),r.mesh.visible=!0,r.mat.opacity=.85}}for(const r of this.sprinkle)r.active&&(r.mesh.position.y-=r.vy*t,r.mesh.position.y<=.05&&(r.active=!1,r.mesh.visible=!1));for(let r=0;r<this.fireMotes.length;r++){const a=this.fireMotes[r],o=.8+.35*Math.abs(Math.sin(e*6.5+r*1.9));a.scale.set(1,o,1)}this.fireGlow&&(this.fireGlow.intensity=1.5+Math.abs(Math.sin(e*5))*.8);for(const r of this.embers)r.life+=t*.6,r.life>=1&&(r.life-=1,r.mesh.position.set(r.baseX,.3,r.baseZ)),r.mesh.position.y+=t*.7,r.mesh.position.x+=Math.sin(e*3+r.baseZ)*t*.15,r.mat.opacity=.8*(1-r.life);if(this.devilArm&&(this.devilArm.rotation.x=-.9+Math.sin(e*2.2)*.5),this.christArm&&(this.christArm.rotation.x=-.9+Math.sin(e*1.8+1)*.5),this.dropTimer-=t,this.dropTimer<=0){this.dropTimer=.12;const r=this.waterDrops.find(o=>!o.active);r&&(r.active=!0,r.mesh.position.set(de[2]-1.2+(Math.random()-.5)*.3,.85,-1.7),r.mesh.visible=!0,r.mat.opacity=.85);const a=this.oilDrops.find(o=>!o.active);a&&(a.active=!0,a.mesh.position.set(de[2]+1.2+(Math.random()-.5)*.3,.85,-1.7),a.mesh.visible=!0,a.mat.opacity=.9)}for(const r of this.waterDrops)r.active&&(r.mesh.position.y-=t*2.2,r.mesh.position.y<=.08&&(r.active=!1,r.mesh.visible=!1));for(const r of this.oilDrops)r.active&&(r.mesh.position.y-=t*2.2,r.mesh.position.y<=.08&&(r.active=!1,r.mesh.visible=!1));if(this.sweeper&&this.sweeperArm){const r=this.dustBurst>.1;this.sweeperArm.rotation.z=r?Math.sin(e*11)*.9:0,this.sweeper.root.position.x=de[0]-.9+(r?Math.sin(e*3)*.3:0),jt(this.sweeper,e*4,r)}if(this.waterer&&this.watererArm){const r=this.sprinkleT>0;this.watererArm.rotation.x=r?-1.1+Math.sin(e*5)*.4:-.1,jt(this.waterer,e*3,!1)}this.toyBall&&(this.toyBall.position.y=.16+Math.abs(Math.sin(e*2.6))*.18),this.passionArm&&(this.passionArm.rotation.x=-.3+Math.sin(e*2.4)*.3),this.dreamer&&(this.dreamer.root.rotation.z=Math.sin(e*19)*.05,this.dreamer.root.rotation.x=Math.sin(e*23)*.04,this.dreamer.head.rotation.y=Math.sin(e*14)*.06);for(let r=0;r<this.sweatDrops.length;r++){const a=this.sweatDrops[r],o=(e*.9+r*.5)%1;a.mesh.position.y=a.baseY-o*.45,a.mat.opacity=.85*(1-o)}if(this.knightState==="fighting")this.knightT+=t,this.knightArm&&(this.knightArm.rotation.x=-.3+Math.sin(this.knightT*11)*1.1),this.knightShieldArm&&(this.knightShieldArm.rotation.z=.2+Math.sin(this.knightT*7+1)*.15),this.knight&&(this.knight.root.rotation.z=Math.sin(this.knightT*8)*.06,jt(this.knight,e,!1)),this.guards.forEach((r,a)=>{this.guardStagger[a]=Math.max(0,this.guardStagger[a]-t*2.5),Math.random()<t*1.8&&(this.guardStagger[a]=1);const o=this.guardStagger[a];r.root.position.x=this.guardBaseX[a]+Math.sin(this.knightT*22+a)*.08*o,r.root.rotation.z=Math.sin(this.knightT*16+a)*.35*o,jt(r,e+a,!1)}),this.knightT>2.6&&(this.knightT=.5);else if(this.knightState==="entering"&&this.knight){this.knightT+=t;const r=this.knight.root.position,a=this.knightDoorPos.x-r.x,o=this.knightDoorPos.z-r.z,l=Math.hypot(a,o);if(l>.15){const c=Math.min(3*t,l);r.x+=a/l*c,r.z+=o/l*c,this.knight.root.rotation.y=Math.atan2(a,o),jt(this.knight,e,!0)}else this.knightState="done",this.knight.root.visible=!1}else this.knight&&this.knight.root.visible&&jt(this.knight,e+2,!1);const s=this.doorOpen?1.7:0;if(this.doorL&&this.doorR&&(this.doorL.rotation.y+=(-s-this.doorL.rotation.y)*.06,this.doorR.rotation.y+=(s-this.doorR.rotation.y)*.06),this.cottageDoor){const r=this.houseDoorOpen?-2.1:0;this.cottageDoor.rotation.y+=(r-this.cottageDoor.rotation.y)*.08}if(this.exitDoor){const r=this.exitDoorOpen?-2.1:0;this.exitDoor.rotation.y+=(r-this.exitDoor.rotation.y)*.08}for(let r=0;r<this.castleGlows.length;r++)this.castleGlows[r].material.opacity=.5+.4*Math.abs(Math.sin(e*1.7+r*1.9));this.peekVolley>0&&(this.peekArrowTimer-=t,this.peekArrowTimer<=0&&(this.peekArrowTimer=.15,this.fireArrow(),this.peekVolley--)),this.phase==="volley"&&(this.volleyT+=t,this.arrowTimer-=t,this.arrowTimer<=0&&this.volleyT<2&&(this.arrowTimer=.22,this.fireArrow()),this.volleyT>2.4&&(this.phase="inside",this.christian.root.position.set(ge+2.4,0,1.3),this.christian.root.rotation.y=Math.PI,this.goodwill.root.position.set(ge+3.6,0,-1.7),this.goodwill.root.rotation.y=0,this.cb.setObjective("⛩ Safe behind the Gate"),this.cb.blipSound(),this.cb.playScript([{speaker:"",text:"A great paw closes over Christian's, and the world blurs — then the Gate booms shut behind them. The arrows thud harmlessly against the far side."},{speaker:"Goodwill",text:"There. Behind this wall no arrow of his has ever reached. Be welcome, Christian — you are safe now."},{speaker:"Christian",text:"*catching his breath* You… you know my name?"},{speaker:"Goodwill",text:"I know every pilgrim who knocks, little bear. I have been expecting you a long while. Now tell me — why do you come alone, and so late?"},{speaker:"Christian",text:"I fell in the Slough of Despond, and my neighbour turned home. Then a smooth-tongued gentleman turned me aside to Mount Sinai, and I was nearly crushed. I am ashamed of it all, sir."},{speaker:"Goodwill",text:"And yet you are HERE — muddy, singed, and standing at my Gate. That is the whole of what matters. This door was hung for the bruised and the muddy, or it was hung for no one."},{speaker:"Christian",text:"Then… may I ask one thing more? This burden on my back. I have carried it so long. Can it be taken off here?"},{speaker:"Goodwill",text:"Not here, dear pilgrim. Be patient a little longer. Ahead lies the place of deliverance — there it will loosen of itself, and fall from your back, and roll away where no one will ever find it."},{speaker:"Goodwill",text:"Look east. That is the King's Highway — straight and narrow, built by the King and His Son. Keep to it; turn neither left nor right, and you cannot lose your way."},{speaker:"Christian",text:"Straight and narrow. I will keep to it, Goodwill — I promise. My heart feels lighter already… though my back, I confess, does not."},{speaker:"Goodwill",text:"*a low, warm laugh, like summer thunder* It will, Christian. Sooner than you think. Now go — and grace go with you."}],()=>{this.phase="freeroam",this.hasPassedGate=!0,this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light")})));for(const r of this.arrows){if(!r.active)continue;if(r.t+=t*1.4,r.t>=1){r.t>1.8?(r.active=!1,r.g.visible=!1):(r.g.position.set(r.to.x,.35,r.to.z),r.g.rotation.set(1.15,0,0));continue}const a=Qt.lerp(r.from.x,r.to.x,r.t),o=Qt.lerp(r.from.z,r.to.z,r.t),l=Qt.lerp(r.from.y,r.to.y,r.t)+Math.sin(r.t*Math.PI)*4,c=Math.min(r.t+.05,1),h=Qt.lerp(r.from.x,r.to.x,c),u=Qt.lerp(r.from.z,r.to.z,c),m=Qt.lerp(r.from.y,r.to.y,c)+Math.sin(c*Math.PI)*4;r.g.position.set(a,l,o),r.g.lookAt(h,m,u)}if(this.lightBeam&&this.lightBeam.visible){const r=1+Math.sin(e*2.4)*.12;this.lightBeam.scale.set(r,1,r)}this.phase==="freeroam"&&this.christian.root.position.x>Ar-2&&(this.phase="done",this.cb.onComplete())}}const sc=-32,Is=11,cg=13,hg=-1.2,ts=new R(5.2,0,-2.8),Ls=36;class dg{constructor(t){O(this,"scene",new xs);O(this,"phase","approach");O(this,"cb");O(this,"christian");O(this,"oldClothes");O(this,"newClothes");O(this,"burdenOnBack");O(this,"seal");O(this,"scroll");O(this,"angels",[]);O(this,"angelTargets",[]);O(this,"burdenProp");O(this,"rollT",0);O(this,"rollFrom",new R);O(this,"descendT",0);O(this,"angelBob",[0,0,0]);O(this,"lightBeam",null);O(this,"lightHalo",null);O(this,"crossGlow",null);O(this,"sparkles",[]);O(this,"notes",[]);O(this,"noteTimer",0);O(this,"footDust",[]);O(this,"footDustTimer",0);O(this,"revisit",!1);O(this,"built",!1);this.cb=t,this.christian=le({species:"bear",fur:T.bearBrown,outfit:"none",sling:!0,plump:!0});const e=this.christian.body;this.oldClothes=new ut,this.oldClothes.add(v(1.12,.52,.8,9418968,0,.52,0)),e.add(this.oldClothes);const n=v(.32,.28,.36,9418968,0,-.1,0),s=v(.32,.28,.36,9418968,0,-.1,0);this.christian.armL.add(n),this.christian.armR.add(s),this.oldClothes.userData.sleeves=[n,s],this.newClothes=new ut,this.newClothes.add(v(1.14,.54,.82,T.robeWhite,0,.52,0)),this.newClothes.add(v(1.18,.14,.86,T.robeGold,0,.3,0)),this.newClothes.add(v(.34,.12,.06,T.robeGold,0,.68,.44)),e.add(this.newClothes);const r=v(.34,.3,.38,T.robeWhite,0,-.1,0),a=v(.34,.3,.38,T.robeWhite,0,-.1,0);this.christian.armL.add(r),this.christian.armR.add(a),this.newClothes.userData.sleeves=[r,a],this.burdenOnBack=new ut,this.burdenOnBack.add(v(.88,.62,.54,T.burden,0,.45,-.56)),this.burdenOnBack.add(v(.7,.5,.46,8880506,0,.96,-.54)),this.burdenOnBack.add(v(.5,.36,.36,T.burdenStrap,0,1.28,-.52)),this.burdenOnBack.add(v(.1,.6,.08,T.burdenStrap,-.3,.45,.31)),this.burdenOnBack.add(v(.1,.6,.08,T.burdenStrap,.3,.45,.31)),e.add(this.burdenOnBack),this.seal=v(.16,.16,.05,T.robeGold,0,.62,.42),this.seal.castShadow=!1,this.christian.head.add(this.seal),this.scroll=new ut;const o=new gt(new Qn(.09,.09,.5,8),ke(16643811));o.rotation.z=Math.PI/2,this.scroll.add(o),this.scroll.add(v(.1,.2,.2,13194079,0,0,0)),this.scroll.position.set(0,-.5,.2),this.christian.armR.add(this.scroll),this.burdenProp=new ut,this.burdenProp.add(v(.88,.62,.54,T.burden,0,0,0)),this.burdenProp.add(v(.7,.5,.46,8880506,0,.5,.02)),this.burdenProp.add(v(.5,.36,.36,T.burdenStrap,0,.84,.04)),this.burdenProp.visible=!1}groundY(t,e){const n=Math.hypot(t,e);if(n>=Is)return 0;const s=1-(n/Is)**2;return cg*s*s*(3-2*s)}dressOld(){this.oldClothes.visible=!0;for(const t of this.oldClothes.userData.sleeves)t.visible=!0;this.newClothes.visible=!1;for(const t of this.newClothes.userData.sleeves)t.visible=!1;this.seal.visible=!1,this.scroll.visible=!1}dressNew(t){this.oldClothes.visible=!1;for(const e of this.oldClothes.userData.sleeves)e.visible=!1;this.newClothes.visible=!0;for(const e of this.newClothes.userData.sleeves)e.visible=!0;this.seal.visible=t,this.scroll.visible=t}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new qt(14086143),t.fog=new li(14086143,40,100),t.add(new ys(15792383,12903096,1.05));const e=new Ms(T.sun,1.5);e.position.set(-24,40,22),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e);const n=new gt(new Ct(150,1,90),ke(T.grass));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let p=0;p<55;p++){const g=-50+Math.random()*100,_=-35+Math.random()*70;if(Math.hypot(g,_)<Is+1)continue;const f=v(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?T.grassLight:T.grassDark,g,.05,_);f.castShadow=!1,t.add(f)}const s=[10411671,T.grass,11069091],r=9;for(let p=0;p<r;p++){const g=Is*(1-p/r)+.5,_=Math.max(this.groundY(Is*(1-(p+.7)/r),0),.5),f=new gt(new Qn(g,g+.7,_,24),ke(s[p%3]));f.position.set(0,_/2,0),f.receiveShadow=!0,f.castShadow=!0,t.add(f)}for(let p=0;p<14;p++){const g=Math.random()*Math.PI*2,_=3+Math.random()*7,f=Math.cos(g)*_,d=Math.sin(g)*_,b=v(.16,.16,.16,[T.flowerYellow,T.flowerPink,T.flowerBlue][p%3],f,this.groundY(f,d)+.1,d);b.castShadow=!1,t.add(b)}for(let p=0;p<=54;p++){const g=-34+p*1.3,_=v(1.2,.14,2.6,T.path,g,this.groundY(g,0)+.06,0);_.castShadow=!1,t.add(_)}const a=new ut;a.add(v(.55,4.6,.55,T.woodDark,0,2.3,0)),a.add(v(2.7,.55,.55,T.woodDark,0,3.5,0));const o=new gt(new Nn(2.6,20,16),new Kt({color:16774072,transparent:!0,opacity:.22,depthWrite:!1}));o.position.y=3.2,a.add(o),this.crossGlow=o;const l=new ps(16773312,1.2,20);l.position.y=3.5,a.add(l),a.position.set(0,this.groundY(0,-2.2),-2.2),t.add(a);const c=new ut;c.add(v(2.6,2,2.2,12170412,0,1,0)),c.add(v(2.9,.5,2.5,11051674,0,2.2,0)),c.add(v(.2,1.2,1,3024931,-1.25,.7,0));const h=new gt(new Qn(.9,.9,.4,14),ke(11051674));h.rotation.x=Math.PI/2,h.rotation.z=Math.PI/2,h.position.set(-1.2,.9,1.7),c.add(h),c.position.set(ts.x,this.groundY(ts.x,ts.z),ts.z),t.add(c);for(const[p,g,_]of[[-26,-7,!0],[-20,8,!1],[-14,-9,!0],[16,7,!1],[22,-8,!0],[28,6,!1]]){const f=new ut;f.add(v(.5,1.6,.5,T.trunk,0,.8,0)),f.add(v(1.9,1.3,1.9,_?T.leafPink:T.leaf,0,2.2,0)),f.add(v(1.2,.9,1.2,_?T.leafPink:T.leaf,0,3.1,0)),f.position.set(p,0,g),t.add(f)}const u=new gt(new Qn(1.4,2,14,18,1,!0),new Kt({color:T.light,transparent:!0,opacity:.5,side:Mn,depthWrite:!1}));u.position.set(Ls+1.5,7,0),t.add(u),this.lightBeam=u;const m=new gt(new Nn(2.4,18,14),new Kt({color:16775645,transparent:!0,opacity:.4,depthWrite:!1}));m.position.set(Ls+1.5,1.6,0),t.add(m),this.lightHalo=m;for(let p=0;p<3;p++){const g=le({species:"bear",fur:15917769,outfit:"robe",outfitColor:T.robeWhite,scale:1.05}),_=new gt(new ko(.32,.06,8,18),new Kt({color:T.robeGold}));_.rotation.x=Math.PI/2,_.position.y=1.15,g.head.add(_),g.root.visible=!1,t.add(g.root),this.angels.push(g)}for(let p=0;p<26;p++){const g=new Kt({color:16773304,transparent:!0,opacity:0}),_=new gt(new Ct(.16,.16,.16),g);_.visible=!1,t.add(_),this.sparkles.push({mesh:_,m:g,life:1,vx:0,vy:0,vz:0})}for(let p=0;p<8;p++){const g=new Kt({color:16777215,transparent:!0,opacity:0}),_=new gt(new Ct(.2,.28,.06),g);_.visible=!1,t.add(_),this.notes.push({mesh:_,m:g,life:1})}for(let p=0;p<16;p++){const g=new Kt({color:16777215,transparent:!0,opacity:0}),_=new gt(new Ct(.22,.22,.22),g);_.visible=!1,_.castShadow=!1,t.add(_),this.footDust.push({mesh:_,mat:g,life:1,vx:0,vz:0})}t.add(this.burdenProp),t.add(this.christian.root)}enter(t){var e,n,s,r;this.build(),this.revisit=t,this.rollT=0,this.descendT=0,this.burdenProp.visible=!1;for(const a of this.angels)a.root.visible=!1;return this.christian.root.position.set(t?-28:-30,0,0),this.christian.root.rotation.y=Math.PI/2,t?(this.phase="done",this.dressNew(!0),(n=(e=this.cb).setMusic)==null||n.call(e,"cross"),this.cb.setObjective("✝ The Cross stands quiet on the hill — the light in the east leads on")):(this.phase="approach",this.dressOld(),this.burdenOnBack.visible=!0,(r=(s=this.cb).setMusic)==null||r.call(s,"gate"),this.cb.setObjective("⛰ A green hill rises ahead — something stands at the top…")),{christian:this.christian}}moveFactor(){return this.phase==="wonder"||this.phase==="rolling"||this.phase==="rejoice"||this.phase==="descend"||this.phase==="angels"?0:1}afterMove(){const t=this.christian.root.position;if(t.z=Qt.clamp(t.z,-10,10),t.x=Qt.clamp(t.x,sc-1,Ls+2),t.y=this.groundY(t.x,t.z),this.revisit||this.phase==="done"){(t.x<sc||t.x>Ls)&&this.cb.onExit();return}if(this.phase==="approach"&&t.x>hg){this.phase="wonder",this.christian.root.rotation.y=Math.PI,this.cb.playScript([{speaker:"",text:"At the top of the hill stands a Cross — and a little below, on the slope, an open tomb."},{speaker:"Christian",text:"The Cross… so this is the place Evangelist spoke of."},{speaker:"Christian",text:"Wait — something is moving. The straps… they're loosening on their own—!"}],()=>{this.phase="rolling",this.rollT=0,this.burdenOnBack.visible=!1,this.rollFrom.set(t.x-.4,t.y+.9,t.z),this.burdenProp.position.copy(this.rollFrom),this.burdenProp.rotation.set(0,0,0),this.burdenProp.visible=!0});return}this.phase==="joy"&&t.x>Ls&&(this.phase="done",this.cb.onComplete())}burstSparkles(t,e,n=1){let s=0;for(const r of this.sparkles){if(s>=e)break;r.life<1||(s++,r.life=0,r.vx=(Math.random()-.5)*2.4*n,r.vy=1.2+Math.random()*2,r.vz=(Math.random()-.5)*2.4*n,r.mesh.position.copy(t),r.mesh.visible=!0)}}runAngelSequence(){this.phase="angels";const t=this.christian.root.position;this.cb.playScript([{speaker:"",text:"Three Shining Ones stand before him, bright as morning."},{speaker:"First Shining One",text:"Peace be with you, Christian. Your sins are forgiven."}],()=>{this.burstSparkles(new R(t.x,t.y+1.2,t.z),14,1.2),this.cb.blipSound(),this.dressNew(!1),this.cb.playScript([{speaker:"Second Shining One",text:"I take from you these worn, travel-stained clothes… and dress you in garments new and shining."},{speaker:"",text:"His old rags are gone. Christian stands in spotless white, a golden sash about his waist."}],()=>{this.burstSparkles(new R(t.x,t.y+1.8,t.z),8,.6),this.cb.blipSound(),this.seal.visible=!0,this.scroll.visible=!0,this.cb.playScript([{speaker:"Third Shining One",text:"And I set this mark upon your forehead, and place in your paw a sealed scroll."},{speaker:"Third Shining One",text:"Read it as you travel, to comfort you on the way — and hand it in at the gate of the Celestial City. It is the King's own promise that you belong to Him."},{speaker:"Christian",text:"Forgiven… clothed… and sealed. I came up this hill bent double, and I will go down it singing!"}],()=>{var e,n;this.phase="joy";for(const s of this.angels)s.root.visible=!1;this.burstSparkles(new R(t.x,t.y+2.5,t.z),10,2),(n=(e=this.cb).setMusic)==null||n.call(e,"cross"),this.cb.setObjective("🎵 Walk on east, down the hill and into the light, singing!")})})})}update(t,e,n){if(this.built){if(jt(this.christian,e,n&&this.moveFactor()>0),this.phase==="rolling"){this.rollT+=t;const r=Math.min(1,this.rollT/2.6),a=r*r*(3-2*r),o=Qt.lerp(this.rollFrom.x,ts.x-1.2,a),l=Qt.lerp(this.rollFrom.z,ts.z,a);this.burdenProp.position.set(o,this.groundY(o,l)+.45,l),this.burdenProp.rotation.z-=t*(2+r*8),r>=1&&(this.burdenProp.visible=!1,this.burstSparkles(this.burdenProp.position.clone().add(new R(0,.8,0)),12,1.4),this.cb.blipSound(),this.phase="rejoice",this.cb.playScript([{speaker:"",text:"The burden tumbles down the hill, rolls in at the mouth of the tomb — and is never seen again."},{speaker:"Christian",text:"It's gone… it's truly gone! All this way I carried it, and here it fell off by itself!"},{speaker:"Christian",text:"Not by anything I have done — He has borne my guilt for me. He has given me rest by His sorrow, and life by His death."}],()=>{this.phase="descend",this.descendT=0;const c=this.christian.root.position;this.angelTargets=[new R(c.x-2.2,0,c.z-1.4),new R(c.x,0,c.z-2.4),new R(c.x+2.2,0,c.z-1.4)],this.angels.forEach((h,u)=>{const m=this.angelTargets[u];h.root.position.set(m.x,this.groundY(m.x,m.z)+9,m.z),h.root.rotation.y=0,h.root.visible=!0}),this.cb.setObjective("✨ Light gathers on the hilltop…")}))}if(this.phase==="descend"){this.descendT+=t;let s=!0;this.angels.forEach((r,a)=>{const o=this.angelTargets[a],l=this.groundY(o.x,o.z),c=a*.35,h=Math.min(1,Math.max(0,(this.descendT-c)/2)),u=1-(1-h)**3;r.root.position.y=l+9*(1-u),h<1&&(s=!1),Math.random()<.06&&this.burstSparkles(r.root.position.clone().add(new R(0,1.5,0)),1,.5)}),s&&this.descendT>2.9&&this.runAngelSequence()}for(let s=0;s<this.angels.length;s++){const r=this.angels[s];if(r.root.visible){if(this.phase==="angels"){const a=this.angelTargets[s];r.root.position.y=this.groundY(a.x,a.z)+.15+Math.sin(e*1.8+s*2.1)*.08}jt(r,e+s*1.3,!1)}}if(this.crossGlow&&(this.crossGlow.material.opacity=.16+.12*Math.abs(Math.sin(e*1.2))),this.lightBeam){const s=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(s,1,s)}this.lightHalo&&(this.lightHalo.material.opacity=.3+.2*Math.abs(Math.sin(e*1.7)));for(const s of this.sparkles)s.life>=1||(s.life=Math.min(1,s.life+t*1.1),s.mesh.position.x+=s.vx*t,s.mesh.position.y+=s.vy*t,s.mesh.position.z+=s.vz*t,s.vy-=t*1.4,s.m.opacity=.9*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if((this.phase==="joy"||this.revisit&&this.phase==="done")&&n&&(this.noteTimer-=t,this.noteTimer<=0)){this.noteTimer=.55;const s=this.notes.find(r=>r.life>=1);if(s){const r=this.christian.root.position;s.life=0,s.mesh.position.set(r.x+(Math.random()-.5)*.8,r.y+2.2,r.z+(Math.random()-.5)*.8),s.mesh.visible=!0}}for(const s of this.notes)s.life>=1||(s.life=Math.min(1,s.life+t*.8),s.mesh.position.y+=t*1.1,s.mesh.rotation.y+=t*3,s.m.opacity=.85*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if(n&&this.moveFactor()>0&&(this.footDustTimer-=t,this.footDustTimer<=0)){this.footDustTimer=.13;const s=this.christian.root.position,r=this.footDust.find(a=>a.life>=1);r&&(r.life=0,r.vx=(Math.random()-.5)*.8,r.vz=(Math.random()-.5)*.8,r.mesh.position.set(s.x+(Math.random()-.5)*.5,s.y+.12,s.z+(Math.random()-.5)*.5),r.mesh.visible=!0)}for(const s of this.footDust){if(s.life>=1)continue;s.life=Math.min(1,s.life+t*2.2),s.mesh.position.x+=s.vx*t,s.mesh.position.z+=s.vz*t,s.mesh.position.y+=t*.9;const r=.6+s.life*1.6;s.mesh.scale.setScalar(r),s.mat.opacity=.55*(1-s.life),s.life>=1&&(s.mesh.visible=!1)}}}}const ug=document.getElementById("app"),en=new S0({antialias:!0});en.setPixelRatio(Math.min(window.devicePixelRatio,2));en.setSize(window.innerWidth,window.innerHeight);en.shadowMap.enabled=!0;en.shadowMap.type=cc;ug.appendChild(en.domElement);const bn=new xs;bn.background=new qt(T.sky);bn.fog=new li(T.fog,55,130);const De=new Xe(50,window.innerWidth/window.innerHeight,.1,300);bn.add(new ys(14676223,13232320,.9));const Hn=new Ms(T.sun,1.6);Hn.position.set(-30,45,25);Hn.castShadow=!0;Hn.shadow.mapSize.set(2048,2048);Hn.shadow.camera.left=-60;Hn.shadow.camera.right=60;Hn.shadow.camera.top=60;Hn.shadow.camera.bottom=-60;Hn.shadow.camera.far=150;bn.add(Hn);const wn=q0(bn),ii=j0(bn),ce=le({species:"bear",fur:T.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0,plump:!0});ce.root.position.set(-6,0,-4);bn.add(ce.root);const Lt={talkedToEvangelist:!1,talkedToFamily:!1,chaseDone:!1,eggsCollected:0,pliableFollowing:!1,pliableLeft:!1,chapterComplete:!1,sloughComplete:!1,moralityDone:!1,wicketDone:!1,interpreterDone:!1,crossDone:!1},Te=new Z0,Ut=new J0(window.innerWidth/window.innerHeight);let Oe="village";const ot={objective:document.getElementById("objective"),prompt:document.getElementById("prompt"),promptWho:document.querySelector("#prompt .who"),promptKey:document.querySelector("#prompt .key"),dialogue:document.getElementById("dialogue"),dialogueName:document.querySelector("#dialogue .name"),dialogueText:document.querySelector("#dialogue .text"),musicBtn:document.getElementById("music-btn"),talkBtn:document.getElementById("talk-btn"),joystick:document.getElementById("joystick"),stick:document.querySelector("#joystick .stick"),titleScreen:document.getElementById("title-screen"),startBtn:document.getElementById("start-btn"),ending:document.getElementById("ending"),restartBtn:document.getElementById("restart-btn"),debugBtn:document.getElementById("debug-btn"),debugPanel:document.getElementById("debug-panel"),fade:document.getElementById("fade")};function fg(i,t=420){ot.fade.classList.add("show"),window.setTimeout(()=>{i(),requestAnimationFrame(()=>ot.fade.classList.remove("show"))},t)}const ti=window.matchMedia("(pointer: coarse)").matches;ti&&(document.body.classList.add("touch"),ot.promptKey.style.display="none");let Ci=!1;ot.startBtn.addEventListener("click",()=>{Ci=!0,Te.start(),ot.titleScreen.classList.add("hidden"),setTimeout(()=>ot.titleScreen.style.display="none",900)});ot.musicBtn.addEventListener("click",()=>{Te.start(),ot.musicBtn.textContent=Te.toggle()?"🎵":"🔇"});ot.restartBtn.addEventListener("click",()=>window.location.reload());let ks=null,fn=!1,si=!1;function js(i,t,e,n){fn=!0,document.getElementById("ending-title").textContent=i,document.getElementById("ending-sub").textContent=t,document.getElementById("ending-body").textContent=e,ks=n,ot.ending.style.display="flex",ot.ending.classList.add("hidden"),requestAnimationFrame(()=>requestAnimationFrame(()=>ot.ending.classList.remove("hidden")))}const pg=document.getElementById("continue-btn");pg.addEventListener("click",()=>{Te.blip(),fn=!1,ot.ending.classList.add("hidden"),setTimeout(()=>ot.ending.style.display="none",900),Ee=!1,Ri=null,Xs=null,ot.dialogue.style.display="none",ot.talkBtn.style.display="none",ks==null||ks(),ks=null});function Je(){Oe="map",Te.setStyle("map"),ot.promptKey.style.display="none",_n(Lt.crossDone?"🗺 The burden is gone! Chapter VI — the road to the Celestial City, coming soon…":Lt.wicketDone?"🗺 Past the Gate a green hill rises — on to the place of deliverance!":Lt.moralityDone?"🗺 The long road east lies open — on toward the Wicket Gate!":Lt.sloughComplete?"🗺 East to the crossroad — a smooth byway and a barred road":"🗺 The road east — onward to the Slough of Despond")}const is=new Q0({playScript:On,setObjective:_n,splashSound:()=>Te.splash(),onExit:()=>Je(),onComplete:()=>{if(Lt.sloughComplete=!0,Lt.pliableFollowing&&(Lt.pliableLeft=!0),Lt.pliableLeft){const i=ii.findIndex(t=>t.id==="pliable");i!==-1&&(bn.remove(ii[i].parts.root),ii.splice(i,1),jc.splice(i,1))}js("🌊 Chapter II Complete","Through the Slough of Despond","Pliable turned back at the first hardship — but Christian, with Help's strong paw, came through the mire, burden and all. The road runs on…",()=>{Ut.sloughDone=!0,Ut.start([]),Ut.progress=Ut.sloughT,Je()})}});let Gr=null;const ss=new eg({playScript:On,setObjective:_n,onExit:()=>Je(),rumbleSound:()=>Te.rumble(),onComplete:()=>{Lt.moralityDone=!0,js("⛰ Chapter III Complete","Mr. Worldly Wiseman and Mount Sinai","The smooth byway led only beneath the burning mountain of the Law. Evangelist unmasked the flatterer, and Christian turned back to the true way — the long road east lies open at last…",()=>{Ut.moralityDone=!0,Ut.road="main",Ut.progress=Ut.forkT,Ut.start([]),Je()})}});let Vr=null;function Fo(i){Oe="morality",Te.setStyle("sinai"),ot.prompt.style.display="none",ot.talkBtn.style.display="none",Vr=ss.enter(i),Jt.copy(Vr.christian.root.position)}const cn=new lg({playScript:On,setObjective:_n,onExit:()=>Je(),rumbleSound:()=>Te.rumble(),blipSound:()=>Te.blip(),setMusic:i=>Te.setStyle(i),fade:i=>fg(()=>{i(),ms&&Jt.copy(ms.christian.root.position)}),onComplete:()=>{Lt.wicketDone=!0,Lt.interpreterDone=!0,js("⛩ Chapter IV Complete","The Wicket Gate and the House of the Interpreter","Goodwill the great lion drew Christian through the Gate, out of the reach of Beelzebub's arrows, and set his feet on the King's Highway. There, in a cottage by the road, the Interpreter — a wise old owl — showed him six sights to carry in his heart: the dust and the water, Passion and Patience, the fire and the hidden oil, the armed man at the palace gate, the caged professor, and the dream of judgment. Somewhere ahead now lies the place of deliverance, where the burden falls of itself…",()=>{Ut.sloughDone=!0,Ut.moralityDone=!0,Ut.wicketDone=!0,Ut.start([]),Ut.road="main",Ut.progress=Ut.beyondT,Je()})}});let ms=null;const rs=new dg({playScript:On,setObjective:_n,onExit:()=>Je(),blipSound:()=>Te.blip(),setMusic:i=>Te.setStyle(i),onComplete:()=>{Lt.crossDone=!0,js("✝ Chapter V Complete","The Cross and the Empty Tomb","At the top of the hill the burden loosened of itself, rolled down into the open tomb, and was never seen again. Three Shining Ones met Christian there: his sins forgiven, his rags exchanged for shining garments, a seal on his forehead and a sealed scroll in his paw — the King's own promise. Not by the hard journey, nor by any good deed, but by grace alone he goes on now, singing, toward the Celestial City…",()=>{Ut.sloughDone=!0,Ut.moralityDone=!0,Ut.wicketDone=!0,Ut.crossDone=!0,Ut.start([]),Ut.road="main",Ut.progress=Ut.crossT,Je()})}});let Wr=null;function Oo(i){Oe="cross",ot.prompt.style.display="none",ot.talkBtn.style.display="none",Wr=rs.enter(i),Jt.copy(Wr.christian.root.position)}function Bs(i){Oe="wicket",Te.setStyle("gate"),ot.prompt.style.display="none",ot.talkBtn.style.display="none",ms=cn.enter(i),Jt.copy(ms.christian.root.position)}function Bo(i){Oe="slough",Te.setStyle("slough"),ot.prompt.style.display="none",ot.talkBtn.style.display="none",Gr=is.enter(!i&&Lt.pliableFollowing&&!Lt.pliableLeft,i),Jt.copy(Gr.christian.root.position)}function Vc(){Oe="village",Te.setStyle("village"),ce.root.position.set($e.east-5,0,0),ce.root.rotation.y=-Math.PI/2,Jt.copy(ce.root.position),ot.prompt.style.display="none",ot.promptKey.style.display=ti?"none":"inline-block",ti&&(ot.talkBtn.style.display="none"),_n("🏘 Home for a visit — the shining light in the east leads back to the road")}function _n(i){ot.objective.textContent=i}let jr=[],Ws=0,Ee=!1,Ri=null,Xs=null;function On(i,t){Ri=null,jr=i,Ws=0,Ee=!0,Xs=t??null,ot.dialogue.style.display="block",ot.prompt.style.display="none",ti&&(ot.talkBtn.style.display="block"),zo()}function Wc(i){Ri=i,jr=i.getLines(Lt),Ws=0,Ee=!0,ot.dialogue.style.display="block",ot.prompt.style.display="none",ot.talkBtn.style.display="none",zo();const t=ce.root.position.x-i.parts.root.position.x,e=ce.root.position.z-i.parts.root.position.z;i.parts.root.rotation.y=Math.atan2(t,e)}function zo(){const i=jr[Ws];ot.dialogueName.textContent=i.speaker,ot.dialogueText.textContent=i.text,ot.dialogue.classList.toggle("christian",i.speaker==="Christian"),ot.dialogue.classList.toggle("narration",i.speaker==="")}function Zr(){var n;if(Te.blip(),Ws++,Ws<jr.length){zo();return}Ee=!1,ot.dialogue.style.display="none";const i=Ri;Ri=null;const t=Xs;if(Xs=null,t){t();return}if(!i)return;const e=Lt.talkedToEvangelist;(n=i.onFinish)==null||n.call(i,Lt),!e&&Lt.talkedToEvangelist&&mg()}ot.dialogue.addEventListener("click",Zr);function mg(){wn.lightBeam.visible=!0,wn.gate.open=!0,_n("✨ Follow the shining light through the Wicket Gate!")}const Tt=new Set;window.addEventListener("keydown",i=>{i.repeat||(Tt.add(i.code),(i.code==="KeyE"||i.code==="Space"||i.code==="Enter"||i.key==="e"||i.key==="E"||i.key===" "||i.key==="Enter")&&(Ee?Zr():Oe==="map"?Xc():Oe==="village"&&Kc()))});function Xc(){const i=Ut.spot();i==="slough"?Bo(Lt.sloughComplete):i==="city"?Vc():i==="morality"?Fo(Lt.moralityDone):i==="beyond"?Bs(Lt.wicketDone):i==="cross"&&Oo(Lt.crossDone)}window.addEventListener("keyup",i=>Tt.delete(i.code));window.addEventListener("blur",()=>Tt.clear());document.addEventListener("visibilitychange",()=>{document.hidden&&Tt.clear()});window.addEventListener("keydown",i=>{i.code!=="Digit9"&&i.code!=="Digit8"||Ee||fn||(Object.assign(Lt,{talkedToEvangelist:!0,talkedToFamily:!0,chaseDone:!0,pliableFollowing:!0,chapterComplete:!0,sloughComplete:!0,pliableLeft:!0}),Lt.moralityDone=i.code==="Digit8",Ci||(Ci=!0,Te.start(),ot.titleScreen.classList.add("hidden"),setTimeout(()=>ot.titleScreen.style.display="none",400)),Ut.sloughDone=!0,Ut.moralityDone=Lt.moralityDone,Ut.start([]),Ut.road="main",Ut.progress=Lt.moralityDone?Ut.forkT:Ut.sloughT,Je())});function gg(){Ci||(Ci=!0,Te.start(),ot.titleScreen.classList.add("hidden"),setTimeout(()=>ot.titleScreen.style.display="none",400))}ot.debugBtn.addEventListener("click",()=>{ot.debugPanel.classList.toggle("open")});ot.debugPanel.addEventListener("click",i=>{const t=i.target.closest("button[data-jump]");if(!t)return;const e=t.dataset.jump;ot.debugPanel.classList.remove("open"),gg(),Ee=!1,Ri=null,Xs=null,fn=!1,si=!1,ot.dialogue.style.display="none",ot.ending.style.display="none",(e==="morality"||e==="wicket-approach"||e==="wicket-highway"||e==="interpreter"||e==="cross")&&(Ut.sloughDone=!0),(e==="wicket-approach"||e==="wicket-highway"||e==="interpreter"||e==="cross")&&(Ut.moralityDone=!0),e==="cross"&&(Ut.wicketDone=!0),e==="village"?Vc():e==="slough"?Bo(!1):e==="morality"?Fo(!1):e==="wicket-approach"?Bs(!1):e==="wicket-highway"?(Bs(!1),cn.debugSkip("highway")):e==="interpreter"?(Bs(!1),cn.debugSkip("house")):e==="cross"?Oo(!1):e==="map"&&(Ut.start([]),Ut.road="main",Je())});const Me={active:!1,id:-1,x:0,y:0};ot.joystick.addEventListener("pointerdown",i=>{Me.active=!0,Me.id=i.pointerId,ot.joystick.setPointerCapture(i.pointerId),Yc(i)});ot.joystick.addEventListener("pointermove",i=>{Me.active&&i.pointerId===Me.id&&Yc(i)});const qc=i=>{i.pointerId===Me.id&&(Me.active=!1,Me.x=0,Me.y=0,ot.stick.style.transform="translate(-50%, -50%)")};ot.joystick.addEventListener("pointerup",qc);ot.joystick.addEventListener("pointercancel",qc);function Yc(i){const t=ot.joystick.getBoundingClientRect(),e=t.left+t.width/2,n=t.top+t.height/2;let s=(i.clientX-e)/(t.width/2),r=(i.clientY-n)/(t.height/2);const a=Math.hypot(s,r);a>1&&(s/=a,r/=a),Me.x=s,Me.y=r,ot.stick.style.transform=`translate(calc(-50% + ${s*33}px), calc(-50% + ${r*33}px))`}ot.talkBtn.addEventListener("click",()=>{Ee?Zr():Oe==="map"?Xc():Oe==="village"&&Kc()});const _g=3.2;let $n=null,zs=null;function vg(){let i=null,t=_g;for(const e of ii){const n=e.parts.root.position.distanceTo(ce.root.position);n<t&&(i=e,t=n)}return i}function xg(){let i=null,t=1/0;for(const e of wn.interactables){const n=Math.hypot(e.x-ce.root.position.x,e.z-ce.root.position.z);n<e.r&&n<t&&(i=e,t=n)}return i}function Kc(){Ee||($n?Wc($n):zs&&Eg(zs))}const rc={};function yg(i,t){const e=rc[i]??0;return rc[i]=(e+1)%t.length,t[e]}const Mg=[[{speaker:"",text:"The village well. He leans over and sees his own tired reflection looking back."}],[{speaker:"",text:"The water is cool and still. For a moment, the weight on his back feels almost bearable."}],[{speaker:"",text:"Someone has tied a faded ribbon to the crossbeam. He wonders what they wished for."}]],wg=[[{speaker:"",text:"He works the handle. Cold water gushes into the trough below."}],[{speaker:"",text:"Splash! A few droplets catch the morning light like tiny stars."}]],Sg=[[{speaker:"Chickens",text:"Bawk! Bawk-bawk!"},{speaker:"Christian",text:"Easy now, ladies. I only came to say good morning."}],[{speaker:"Chickens",text:"*peck peck peck*"}]],bg=[[{speaker:"Cow",text:"Mooooo."},{speaker:"",text:"Old Hamlet's cow, watching him with those big brown eyes again."}],[{speaker:"Cow",text:"Mooo-oo."},{speaker:"Christian",text:"I don't suppose you'd care to carry this burden a while?"}]];function Eg(i){if(i.id==="nest"){if(Lt.eggsCollected<3){Lt.eggsCollected++;const n=Lt.eggsCollected;On([{speaker:"",text:n<3?`He gently takes an egg, still warm. (${n}/3 collected)`:"He takes the last egg — the little basket is full. Time to bring these home to Christiana."}])}else On([{speaker:"",text:"The nest is empty for now. Perhaps the hens will lay more tomorrow."}]);return}const e={well:Mg,pump:wg,chickens:Sg,cow:bg}[i.id];e&&On(yg(i.id,e))}const ln=7,Ds=new R(0,13,13),Tg=new R(0,7.5,7.5),Jt=new R;let Na=!1;const Ho=[];for(let i=0;i<16;i++){const t=new Kt({color:16777215,transparent:!0,opacity:0}),e=new gt(new Ct(.22,.22,.22),t);e.visible=!1,e.castShadow=!1,bn.add(e),Ho.push({mesh:e,mat:t,life:1,vx:0,vz:0})}let Fa=0;function Ag(i,t){const e=Ho.find(n=>n.life>=1);e&&(e.life=0,e.vx=(Math.random()-.5)*.8,e.vz=(Math.random()-.5)*.8,e.mesh.position.set(i,.12,t),e.mesh.visible=!0)}function Cg(i){for(const t of Ho){if(t.life>=1)continue;t.life=Math.min(1,t.life+i*2.2),t.mesh.position.x+=t.vx*i,t.mesh.position.z+=t.vz*i,t.mesh.position.y+=i*.9;const e=.6+t.life*1.6;t.mesh.scale.setScalar(e),t.mat.opacity=.55*(1-t.life),t.life>=1&&(t.mesh.visible=!1)}}function Rg(i){for(const a of wn.colliders){const o=i.x-a.x,l=i.z-a.z,c=Math.hypot(o,l),h=a.r+.6;c<h&&c>1e-4&&(i.x=a.x+o/c*h,i.z=a.z+l/c*h)}for(const a of ii){const o=i.x-a.parts.root.position.x,l=i.z-a.parts.root.position.z,c=Math.hypot(o,l);c<1.1&&c>1e-4&&(i.x=a.parts.root.position.x+o/c*1.1,i.z=a.parts.root.position.z+l/c*1.1)}const e=$e.west+1.4,n=$e.east-1.2,s=$e.south-1.4;Math.abs(i.z)<$e.gateHalfWidth&&i.x>n-2&&wn.gate.open?(i.z=Qt.clamp(i.z,-1.9,$e.gateHalfWidth),i.x=Math.min(i.x,$e.east+8)):(i.x=Qt.clamp(i.x,e,n),i.z=Qt.clamp(i.z,-s,s))}let Ur=!1,Oa=!1;const Hs={obstinate:!1,pliable:!1},Pg=[{speaker:"Obstinate",text:"CHRISTIAN! Stop right there, you great woolly fool! Come back at once!"},{speaker:"Christian",text:"I cannot, neighbours. This city will not stand — I go to seek a country that cannot crumble. You have seen the light yonder; come with me!"},{speaker:"Obstinate",text:"What?! Leave our friends, our comforts, our whole city — for a dream out of that book of yours?"},{speaker:"Christian",text:"What I seek is worth more than all we would leave behind. Come and see for yourselves!"},{speaker:"Obstinate",text:"Pah! I'll not be dragged on any fool's errand. Pliable — take his other arm. We are hauling him home."},{speaker:"Pliable",text:"Weeeell… actually, Obstinate… golden crowns? Streets of light? A city that never crumbles? …My paws are tingling."},{speaker:"Pliable",text:"I'm going WITH him! Think of it — glory, adventure, and no more of your grumbling!"},{speaker:"Obstinate",text:"You TOO?! Of all the—! FINE! Go drown in a bog together, the pair of you! I am going home like a SENSIBLE creature. HMPH!"},{speaker:"Pliable",text:"Don't mind him. Lead the way, friend Christian — hop hop!"}];function Ig(){si=!0,Ur=!0,Hs.obstinate=!1,Hs.pliable=!1,ce.root.rotation.y=-Math.PI/2,_n("❗ Someone is shouting after you…")}let ac=0;function Lg(i,t){let e=0,n=0;(Tt.has("KeyW")||Tt.has("ArrowUp"))&&(n-=1),(Tt.has("KeyS")||Tt.has("ArrowDown"))&&(n+=1),(Tt.has("KeyA")||Tt.has("ArrowLeft"))&&(e-=1),(Tt.has("KeyD")||Tt.has("ArrowRight"))&&(e+=1),e+=Me.x,n+=Me.y;const s=Math.hypot(e,n);if(Na=s>.15&&!Ee&&Ci&&!fn&&!si,Na){e/=Math.max(s,1),n/=Math.max(s,1);const r=ce.root.position;r.x+=e*ln*i,r.z+=n*ln*i,Rg(r),ce.root.rotation.y=Ns(ce.root.rotation.y,Math.atan2(e,n),12*i),!Lt.talkedToEvangelist&&r.x>$e.east-4&&Math.abs(r.z)<5&&t-ac>4&&(ac=t,_n("🚪 The gate is shut fast… Evangelist on the east road may know the way.")),Fa-=i,Fa<=0&&(Fa=.13,Ag(r.x+(Math.random()-.5)*.5,r.z+(Math.random()-.5)*.5))}jt(ce,t,Na),Lt.talkedToEvangelist&&!Lt.chaseDone&&!si&&ce.root.position.x>$e.east-8&&Math.abs(ce.root.position.z)<4.5&&Ig(),Lt.talkedToEvangelist&&!si&&ce.root.position.distanceTo(wn.lightBeam.position)<3.4&&(Lt.chapterComplete?fn||Je():(Lt.chapterComplete=!0,js("✨ Chapter I Complete","Christian leaves the City of Destruction","Obstinate turned back in disgust, but Pliable hops eagerly alongside. Through the Wicket Gate and into the wide world — the first step on the long road to the Celestial City…",()=>{Ut.start(Lt.pliableFollowing&&!Lt.pliableLeft?["pliable"]:[]),Je()})))}function Ns(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*Math.min(e,1)}const jc=ii.map(i=>({home:i.position.clone(),target:i.position.clone(),wait:Math.random()*4,moving:!1}));function Dg(i,t){ii.forEach((e,n)=>{const s=jc[n],r=Ee&&Ri===e;if(Ur&&(e.id==="obstinate"||e.id==="pliable")){const o=e.parts.root.position,l=ce.root.position.x-(e.id==="pliable"?1.3:2.6),c=ce.root.position.z-(e.id==="pliable"?2.3:1.1),h=l-o.x,u=c-o.z,m=Math.hypot(h,u);if(m>.25){const p=Math.min(10.5*i,m);o.x+=h/m*p,o.z+=u/m*p,e.parts.root.rotation.y=Math.atan2(h,u),jt(e.parts,t*1.4+n,!0)}else{Hs[e.id]=!0;const p=ce.root.position.x-o.x,g=ce.root.position.z-o.z;e.parts.root.rotation.y=Math.atan2(p,g),jt(e.parts,t+n,!1)}return}if(e.id==="obstinate"&&Oa){const o=e.parts.root.position,l=e.position.x-o.x,c=e.position.z-o.z,h=Math.hypot(l,c);h>.25?(o.x+=l/h*3.6*i,o.z+=c/h*3.6*i,e.parts.root.rotation.y=Math.atan2(l,c),jt(e.parts,t+n,!0)):(Oa=!1,e.parts.root.rotation.y=e.facing,jt(e.parts,t+n,!1));return}if(e.id==="pliable"&&Lt.pliableFollowing&&!Lt.pliableLeft&&!r){const o=e.parts.root.position,l=ce.root.position.x-o.x,c=ce.root.position.z-o.z,h=Math.hypot(l,c);if(h>2.1){const u=Math.min(ln*.92,h*2.5)*i;o.x+=l/h*u,o.z+=c/h*u,e.parts.root.rotation.y=Math.atan2(l,c),jt(e.parts,t+.4,!0)}else jt(e.parts,t+.4,!1);return}if(!e.wanderRadius||r||si){jt(e.parts,t+n*1.7,!1);return}const a=e.parts.root.position;if(s.moving){const o=s.target.x-a.x,l=s.target.z-a.z,c=Math.hypot(o,l);if(c<.15)s.moving=!1,s.wait=2+Math.random()*5;else{const h=1.6*i;a.x+=o/c*h,a.z+=l/c*h,e.parts.root.rotation.y=Math.atan2(o,l)}}else if(s.wait-=i,s.wait<=0){const o=Math.random()*Math.PI*2,l=Math.random()*e.wanderRadius;s.target.set(s.home.x+Math.cos(o)*l,0,s.home.z+Math.sin(o)*l),s.moving=!0}jt(e.parts,t+n*1.7,s.moving)}),Ur&&Hs.obstinate&&Hs.pliable&&!Ee&&(Ur=!1,On(Pg,()=>{Lt.chaseDone=!0,Lt.pliableFollowing=!0,Oa=!0,si=!1,_n("✨ On to the shining light — Pliable comes too!")}))}const oc=new P0;function Zc(){requestAnimationFrame(Zc);const i=Math.min(oc.getDelta(),.05),t=oc.elapsedTime;if(Oe==="map"){let e=0,n=0;(Tt.has("KeyD")||Tt.has("ArrowRight"))&&(e+=1),(Tt.has("KeyA")||Tt.has("ArrowLeft"))&&(e-=1),(Tt.has("KeyS")||Tt.has("ArrowDown"))&&(n+=1),(Tt.has("KeyW")||Tt.has("ArrowUp"))&&(n-=1),e+=Me.x,n+=Me.y,Ut.update(i,t,Qt.clamp(e,-1,1),Qt.clamp(n,-1,1)),Ut.justDiverted&&(Ut.justDiverted=!1,_n("🎩 The east road is barred — a smooth byway curves aside toward Morality…"));const s=Ut.spot();ot.prompt.style.display=s==="road"?"none":"block",ot.promptKey.style.display="none",ti&&(ot.talkBtn.style.display="none"),s==="city"?ot.promptWho.textContent="🏘 Visit the City of Destruction":s==="slough"?ot.promptWho.textContent=Lt.sloughComplete?"🌊 Revisit the Slough of Despond":"Enter the Slough of Despond":s==="morality"?ot.promptWho.textContent=Lt.moralityDone?"⛰ Revisit the foot of Mount Sinai":"Enter the pleasant village of Morality":s==="fork"?ot.promptWho.textContent=Lt.moralityDone?"🪧 A crossroad — east: the true way · press S for the byway":"🪧 A crossroad — the east road is barred…":s==="beyond"?ot.promptWho.textContent=Lt.wicketDone?"⛩ Revisit the Wicket Gate":"⛩ Knock at the Wicket Gate":s==="cross"&&(ot.promptWho.textContent=Lt.crossDone?"✝ Revisit the hill of the Cross":"✝ Climb the hill to the Cross"),(s==="city"||s==="slough"||s==="morality"||s==="beyond"||s==="cross")&&(ot.promptKey.style.display=ti?"none":"inline-block",ti&&(ot.talkBtn.textContent="Enter",ot.talkBtn.style.display="block")),en.render(Ut.scene,Ut.camera);return}if(Oe==="slough"&&Gr){const e=Gr.christian;let n=0,s=0;(Tt.has("KeyW")||Tt.has("ArrowUp"))&&(s-=1),(Tt.has("KeyS")||Tt.has("ArrowDown"))&&(s+=1),(Tt.has("KeyA")||Tt.has("ArrowLeft"))&&(n-=1),(Tt.has("KeyD")||Tt.has("ArrowRight"))&&(n+=1),n+=Me.x,s+=Me.y;const r=Math.hypot(n,s),a=is.moveFactor(),o=r>.15&&!Ee&&!fn&&a>0;o&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*ln*a*i,e.root.position.z+=s*ln*a*i,e.root.rotation.y=Ns(e.root.rotation.y,Math.atan2(n,s),12*i)),is.afterMove(o),is.update(i,t,o),Jt.lerp(e.root.position,Math.min(4*i,1)),De.position.copy(Jt).add(Ds),De.lookAt(Jt.x,Jt.y+1.4,Jt.z),en.render(is.scene,De);return}if(Oe==="morality"&&Vr){const e=Vr.christian;let n=0,s=0;(Tt.has("KeyW")||Tt.has("ArrowUp"))&&(s-=1),(Tt.has("KeyS")||Tt.has("ArrowDown"))&&(s+=1),(Tt.has("KeyA")||Tt.has("ArrowLeft"))&&(n-=1),(Tt.has("KeyD")||Tt.has("ArrowRight"))&&(n+=1),n+=Me.x,s+=Me.y;const r=Math.hypot(n,s),a=ss.moveFactor(),o=r>.15&&!Ee&&!fn&&a>0;o&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*ln*a*i,e.root.position.z+=s*ln*a*i,e.root.rotation.y=Ns(e.root.rotation.y,Math.atan2(n,s),12*i)),ss.afterMove(),ss.update(i,t,o),Jt.lerp(e.root.position,Math.min(4*i,1)),De.position.copy(Jt).add(Ds),De.lookAt(Jt.x,Jt.y+1.4,Jt.z),en.render(ss.scene,De);return}if(Oe==="wicket"&&ms){const e=ms.christian;let n=0,s=0;(Tt.has("KeyW")||Tt.has("ArrowUp"))&&(s-=1),(Tt.has("KeyS")||Tt.has("ArrowDown"))&&(s+=1),(Tt.has("KeyA")||Tt.has("ArrowLeft"))&&(n-=1),(Tt.has("KeyD")||Tt.has("ArrowRight"))&&(n+=1),n+=Me.x,s+=Me.y;const r=Math.hypot(n,s),a=cn.moveFactor(),o=r>.15&&!Ee&&!fn&&a>0;o&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*ln*a*i,e.root.position.z+=s*ln*a*i,e.root.rotation.y=Ns(e.root.rotation.y,Math.atan2(n,s),12*i)),cn.afterMove(),cn.update(i,t,o);const l=cn.phase==="house"||cn.phase==="houseGreet"||cn.phase==="houseExit";Jt.lerp(e.root.position,Math.min(4*i,1)),De.position.copy(Jt).add(l?Tg:Ds),De.lookAt(Jt.x,Jt.y+1.4,Jt.z),en.render(cn.scene,De);return}if(Oe==="cross"&&Wr){const e=Wr.christian;let n=0,s=0;(Tt.has("KeyW")||Tt.has("ArrowUp"))&&(s-=1),(Tt.has("KeyS")||Tt.has("ArrowDown"))&&(s+=1),(Tt.has("KeyA")||Tt.has("ArrowLeft"))&&(n-=1),(Tt.has("KeyD")||Tt.has("ArrowRight"))&&(n+=1),n+=Me.x,s+=Me.y;const r=Math.hypot(n,s),a=rs.moveFactor(),o=r>.15&&!Ee&&!fn&&a>0;o&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*ln*a*i,e.root.position.z+=s*ln*a*i,e.root.rotation.y=Ns(e.root.rotation.y,Math.atan2(n,s),12*i)),rs.afterMove(),rs.update(i,t,o),Jt.lerp(e.root.position,Math.min(4*i,1)),De.position.copy(Jt).add(Ds),De.lookAt(Jt.x,Jt.y+1.4,Jt.z),en.render(rs.scene,De);return}if(Ci&&(Lg(i,t),Dg(i,t),$n=Ee?null:vg(),zs=Ee||$n?null:xg(),($n||zs)&&!fn&&!si?(ot.prompt.style.display="block",ot.promptWho.textContent=$n?`Talk to ${$n.name}`:`Look at ${zs.name}`,ti&&(ot.talkBtn.textContent=$n?"Talk":"Look",ot.talkBtn.style.display="block")):(ot.prompt.style.display="none",Ee||(ot.talkBtn.style.display="none"))),wn.update(t),Cg(i),wn.lightBeam.visible){const e=1+Math.sin(t*2.4)*.12;wn.lightBeam.scale.set(e,1,e)}Jt.lerp(ce.root.position,Math.min(4*i,1)),De.position.copy(Jt).add(Ds),De.lookAt(Jt.x,Jt.y+1.4,Jt.z),en.render(bn,De)}window.addEventListener("resize",()=>{De.aspect=window.innerWidth/window.innerHeight,De.updateProjectionMatrix(),Ut.resize(window.innerWidth/window.innerHeight),en.setSize(window.innerWidth,window.innerHeight)});Zc();window.__game={christian:ce,npcs:ii,quest:Lt,world:wn,openDialogue:Wc,advanceDialogue:Zr,camTarget:Jt,worldMap:Ut,slough:is,enterSlough:Bo,morality:ss,enterMorality:Fo,wicket:cn,enterWicket:Bs,cross:rs,enterCross:Oo,playScript:On,goToMap:Je,get mode(){return Oe}};
