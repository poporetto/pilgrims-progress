var _l=Object.defineProperty;var vl=(i,e,t)=>e in i?_l(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Nt=(i,e,t)=>vl(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vs="166",xl=0,fa=1,Ml=2,Eo=1,yo=2,nn=3,Mn=0,Et=1,rn=2,vn=0,ui=1,pa=2,ma=3,ga=4,Sl=5,Un=100,El=101,yl=102,Tl=103,Al=104,bl=200,wl=201,Rl=202,Cl=203,ls=204,cs=205,Pl=206,Ll=207,Dl=208,Ul=209,Il=210,Nl=211,Fl=212,Ol=213,Bl=214,zl=0,kl=1,Hl=2,mr=3,Gl=4,Vl=5,Wl=6,Xl=7,Ws=0,ql=1,Yl=2,xn=0,Kl=1,$l=2,Zl=3,jl=4,Jl=5,Ql=6,ec=7,To=300,fi=301,pi=302,us=303,hs=304,Tr=306,ds=1e3,Nn=1001,fs=1002,Dt=1003,tc=1004,Hi=1005,zt=1006,Ur=1007,Fn=1008,on=1009,Ao=1010,bo=1011,Di=1012,Xs=1013,Bn=1014,sn=1015,Ii=1016,qs=1017,Ys=1018,mi=1020,wo=35902,Ro=1021,Co=1022,Gt=1023,Po=1024,Lo=1025,hi=1026,gi=1027,Do=1028,Ks=1029,Uo=1030,$s=1031,Zs=1033,cr=33776,ur=33777,hr=33778,dr=33779,ps=35840,ms=35841,gs=35842,_s=35843,vs=36196,xs=37492,Ms=37496,Ss=37808,Es=37809,ys=37810,Ts=37811,As=37812,bs=37813,ws=37814,Rs=37815,Cs=37816,Ps=37817,Ls=37818,Ds=37819,Us=37820,Is=37821,fr=36492,Ns=36494,Fs=36495,Io=36283,Os=36284,Bs=36285,zs=36286,nc=3200,ic=3201,No=0,rc=1,_n="",Xt="srgb",En="srgb-linear",js="display-p3",Ar="display-p3-linear",gr="linear",Ze="srgb",_r="rec709",vr="p3",Vn=7680,_a=519,sc=512,ac=513,oc=514,Fo=515,lc=516,cc=517,uc=518,hc=519,va=35044,xa="300 es",an=2e3,xr=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ma=1234567;const Ri=Math.PI/180,Ui=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Js(i,e){return(i%e+e)%e}function dc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function fc(i,e,t){return i!==e?(t-i)/(e-i):0}function Ci(i,e,t){return(1-t)*i+t*e}function pc(i,e,t,n){return Ci(i,e,1-Math.exp(-t*n))}function mc(i,e=1){return e-Math.abs(Js(i,e*2)-e)}function gc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _c(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xc(i,e){return i+Math.random()*(e-i)}function Mc(i){return i*(.5-Math.random())}function Sc(i){i!==void 0&&(Ma=i);let e=Ma+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ec(i){return i*Ri}function yc(i){return i*Ui}function Tc(i){return(i&i-1)===0&&i!==0}function Ac(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wc(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),p=s((e-n)/2),h=o((e-n)/2),m=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*p,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*p,a*c);break;case"ZXZ":i.set(l*p,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sa={DEG2RAD:Ri,RAD2DEG:Ui,generateUUID:Mi,clamp:Mt,euclideanModulo:Js,mapLinear:dc,inverseLerp:fc,lerp:Ci,damp:pc,pingpong:mc,smoothstep:gc,smootherstep:_c,randInt:vc,randFloat:xc,randFloatSpread:Mc,seededRandom:Sc,degToRad:Ec,radToDeg:yc,isPowerOfTwo:Tc,ceilPowerOfTwo:Ac,floorPowerOfTwo:bc,setQuaternionFromProperEuler:wc,normalize:vt,denormalize:ai};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,r,s,o,a,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],m=n[5],v=n[8],x=r[0],f=r[3],d=r[6],A=r[1],E=r[4],y=r[7],I=r[2],R=r[5],b=r[8];return s[0]=o*x+a*A+l*I,s[3]=o*f+a*E+l*R,s[6]=o*d+a*y+l*b,s[1]=c*x+u*A+p*I,s[4]=c*f+u*E+p*R,s[7]=c*d+u*y+p*b,s[2]=h*x+m*A+v*I,s[5]=h*f+m*E+v*R,s[8]=h*d+m*y+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=u*o-a*c,h=a*l-u*s,m=c*s-o*l,v=t*p+n*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=p*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ir.makeScale(e,t)),this}rotate(e){return this.premultiply(Ir.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ir.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new De;function Oo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rc(){const i=Mr("canvas");return i.style.display="block",i}const Ea={};function Bo(i){i in Ea||(Ea[i]=!0,console.warn(i))}function Cc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ya=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ta=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gi={[En]:{transfer:gr,primaries:_r,toReference:i=>i,fromReference:i=>i},[Xt]:{transfer:Ze,primaries:_r,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ar]:{transfer:gr,primaries:vr,toReference:i=>i.applyMatrix3(Ta),fromReference:i=>i.applyMatrix3(ya)},[js]:{transfer:Ze,primaries:vr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ta),fromReference:i=>i.applyMatrix3(ya).convertLinearToSRGB()}},Pc=new Set([En,Ar]),Ye={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Pc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Gi[e].toReference,r=Gi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Gi[i].primaries},getTransfer:function(i){return i===_n?gr:Gi[i].transfer}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class Lc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Mr("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dc=0;class zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fr(r[o].image)):s.push(Fr(r[o]))}else s=Fr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uc=0;class yt extends xi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Nn,r=Nn,s=zt,o=Fn,a=Gt,l=on,c=yt.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Mi(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==To)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=To;yt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],m=l[5],v=l[9],x=l[2],f=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-x)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+x)<.1&&Math.abs(v+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(m+1)/2,I=(d+1)/2,R=(u+h)/4,b=(p+x)/4,N=(v+f)/4;return E>y&&E>I?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=R/n,s=b/n):y>I?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=R/r,s=N/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=b/s,r=N/s),this.set(n,r,s,t),this}let A=Math.sqrt((f-v)*(f-v)+(p-x)*(p-x)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(f-v)/A,this.y=(p-x)/A,this.z=(h-u)/A,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ic extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new yt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ko extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nc extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],p=n[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(p!==x||l!==h||c!==m||u!==v){let f=1-a;const d=l*h+c*m+u*v+p*x,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const I=Math.sqrt(E),R=Math.atan2(I,d*A);f=Math.sin(f*R)/I,a=Math.sin(a*R)/I}const y=a*A;if(l=l*f+h*y,c=c*f+m*y,u=u*f+v*y,p=p*f+x*y,f===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=I,c*=I,u*=I,p*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],p=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*p+l*m-c*h,e[t+1]=l*v+u*h+c*p-a*m,e[t+2]=c*v+u*m+a*h-l*p,e[t+3]=u*v-a*p-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),p=a(s/2),h=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*p+c*m*v,this._y=c*m*p-h*u*v,this._z=c*u*v+h*m*p,this._w=c*u*p-h*m*v;break;case"YXZ":this._x=h*u*p+c*m*v,this._y=c*m*p-h*u*v,this._z=c*u*v-h*m*p,this._w=c*u*p+h*m*v;break;case"ZXY":this._x=h*u*p-c*m*v,this._y=c*m*p+h*u*v,this._z=c*u*v+h*m*p,this._w=c*u*p-h*m*v;break;case"ZYX":this._x=h*u*p-c*m*v,this._y=c*m*p+h*u*v,this._z=c*u*v-h*m*p,this._w=c*u*p+h*m*v;break;case"YZX":this._x=h*u*p+c*m*v,this._y=c*m*p+h*u*v,this._z=c*u*v-h*m*p,this._w=c*u*p-h*m*v;break;case"XZY":this._x=h*u*p-c*m*v,this._y=c*m*p-h*u*v,this._z=c*u*v+h*m*p,this._w=c*u*p+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=n+a+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),p=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+l*c+o*p-a*u,this.y=n+l*u+a*c-s*p,this.z=r+l*p+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new U,Aa=new Ni;class Fi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ft):Ft.fromBufferAttribute(s,o),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vi.copy(n.boundingBox)),Vi.applyMatrix4(e.matrixWorld),this.union(Vi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Wi.subVectors(this.max,Ei),Xn.subVectors(e.a,Ei),qn.subVectors(e.b,Ei),Yn.subVectors(e.c,Ei),hn.subVectors(qn,Xn),dn.subVectors(Yn,qn),An.subVectors(Xn,Yn);let t=[0,-hn.z,hn.y,0,-dn.z,dn.y,0,-An.z,An.y,hn.z,0,-hn.x,dn.z,0,-dn.x,An.z,0,-An.x,-hn.y,hn.x,0,-dn.y,dn.x,0,-An.y,An.x,0];return!Br(t,Xn,qn,Yn,Wi)||(t=[1,0,0,0,1,0,0,0,1],!Br(t,Xn,qn,Yn,Wi))?!1:(Xi.crossVectors(hn,dn),t=[Xi.x,Xi.y,Xi.z],Br(t,Xn,qn,Yn,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new U,new U,new U,new U,new U,new U,new U,new U],Ft=new U,Vi=new Fi,Xn=new U,qn=new U,Yn=new U,hn=new U,dn=new U,An=new U,Ei=new U,Wi=new U,Xi=new U,bn=new U;function Br(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bn.fromArray(i,s);const a=r.x*Math.abs(bn.x)+r.y*Math.abs(bn.y)+r.z*Math.abs(bn.z),l=e.dot(bn),c=t.dot(bn),u=n.dot(bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fc=new Fi,yi=new U,zr=new U;class Qs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(zr)),this.expandByPoint(yi.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new U,kr=new U,qi=new U,fn=new U,Hr=new U,Yi=new U,Gr=new U;class Oc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){kr.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),fn.copy(this.origin).sub(kr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qi),a=fn.dot(this.direction),l=-fn.dot(qi),c=fn.lengthSq(),u=Math.abs(1-o*o);let p,h,m,v;if(u>0)if(p=o*l-a,h=o*a-l,v=s*u,p>=0)if(h>=-v)if(h<=v){const x=1/u;p*=x,h*=x,m=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;else h<=-v?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=v?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),m=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(kr).addScaledVector(qi,h),m}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),r=Jt.dot(Jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,r,s){Hr.subVectors(t,e),Yi.subVectors(n,e),Gr.crossVectors(Hr,Yi);let o=this.direction.dot(Gr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,e);const l=a*this.direction.dot(Yi.crossVectors(fn,Yi));if(l<0)return null;const c=a*this.direction.dot(Hr.cross(fn));if(c<0||l+c>o)return null;const u=-a*fn.dot(Gr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,r,s,o,a,l,c,u,p,h,m,v,x,f){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,p,h,m,v,x,f)}set(e,t,n,r,s,o,a,l,c,u,p,h,m,v,x,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=p,d[14]=h,d[3]=m,d[7]=v,d[11]=x,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),o=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*p,v=a*u,x=a*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=m+v*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*p,v=c*u,x=c*p;t[0]=h+x*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*p,v=c*u,x=c*p;t[0]=h-x*a,t[4]=-o*p,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*p,v=a*u,x=a*p;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+x,t[1]=l*p,t[5]=x*c+h,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-h*p,t[8]=v*p+m,t[1]=p,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*p+v,t[10]=h-x*p}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+x,t[5]=o*u,t[9]=m*p-v,t[2]=v*p-m,t[6]=a*u,t[10]=x*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bc,e,zc)}lookAt(e,t,n){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),pn.crossVectors(n,bt),pn.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),pn.crossVectors(n,bt)),pn.normalize(),Ki.crossVectors(bt,pn),r[0]=pn.x,r[4]=Ki.x,r[8]=bt.x,r[1]=pn.y,r[5]=Ki.y,r[9]=bt.y,r[2]=pn.z,r[6]=Ki.z,r[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],m=n[13],v=n[2],x=n[6],f=n[10],d=n[14],A=n[3],E=n[7],y=n[11],I=n[15],R=r[0],b=r[4],N=r[8],S=r[12],M=r[1],C=r[5],G=r[9],z=r[13],Y=r[2],q=r[6],V=r[10],K=r[14],k=r[3],ue=r[7],ge=r[11],_e=r[15];return s[0]=o*R+a*M+l*Y+c*k,s[4]=o*b+a*C+l*q+c*ue,s[8]=o*N+a*G+l*V+c*ge,s[12]=o*S+a*z+l*K+c*_e,s[1]=u*R+p*M+h*Y+m*k,s[5]=u*b+p*C+h*q+m*ue,s[9]=u*N+p*G+h*V+m*ge,s[13]=u*S+p*z+h*K+m*_e,s[2]=v*R+x*M+f*Y+d*k,s[6]=v*b+x*C+f*q+d*ue,s[10]=v*N+x*G+f*V+d*ge,s[14]=v*S+x*z+f*K+d*_e,s[3]=A*R+E*M+y*Y+I*k,s[7]=A*b+E*C+y*q+I*ue,s[11]=A*N+E*G+y*V+I*ge,s[15]=A*S+E*z+y*K+I*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],m=e[14],v=e[3],x=e[7],f=e[11],d=e[15];return v*(+s*l*p-r*c*p-s*a*h+n*c*h+r*a*m-n*l*m)+x*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+f*(+t*c*p-t*a*m-s*o*p+n*o*m+s*a*u-n*c*u)+d*(-r*a*u-t*l*p+t*a*h+r*o*p-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],m=e[11],v=e[12],x=e[13],f=e[14],d=e[15],A=p*f*c-x*h*c+x*l*m-a*f*m-p*l*d+a*h*d,E=v*h*c-u*f*c-v*l*m+o*f*m+u*l*d-o*h*d,y=u*x*c-v*p*c+v*a*m-o*x*m-u*a*d+o*p*d,I=v*p*l-u*x*l-v*a*h+o*x*h+u*a*f-o*p*f,R=t*A+n*E+r*y+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=A*b,e[1]=(x*h*s-p*f*s-x*r*m+n*f*m+p*r*d-n*h*d)*b,e[2]=(a*f*s-x*l*s+x*r*c-n*f*c-a*r*d+n*l*d)*b,e[3]=(p*l*s-a*h*s-p*r*c+n*h*c+a*r*m-n*l*m)*b,e[4]=E*b,e[5]=(u*f*s-v*h*s+v*r*m-t*f*m-u*r*d+t*h*d)*b,e[6]=(v*l*s-o*f*s-v*r*c+t*f*c+o*r*d-t*l*d)*b,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*b,e[8]=y*b,e[9]=(v*p*s-u*x*s-v*n*m+t*x*m+u*n*d-t*p*d)*b,e[10]=(o*x*s-v*a*s+v*n*c-t*x*c-o*n*d+t*a*d)*b,e[11]=(u*a*s-o*p*s-u*n*c+t*p*c+o*n*m-t*a*m)*b,e[12]=I*b,e[13]=(u*x*r-v*p*r+v*n*h-t*x*h-u*n*f+t*p*f)*b,e[14]=(v*a*r-o*x*r-v*n*l+t*x*l+o*n*f-t*a*f)*b,e[15]=(o*p*r-u*a*r+u*n*l-t*p*l-o*n*h+t*a*h)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,p=a+a,h=s*c,m=s*u,v=s*p,x=o*u,f=o*p,d=a*p,A=l*c,E=l*u,y=l*p,I=n.x,R=n.y,b=n.z;return r[0]=(1-(x+d))*I,r[1]=(m+y)*I,r[2]=(v-E)*I,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(h+d))*R,r[6]=(f+A)*R,r[7]=0,r[8]=(v+E)*b,r[9]=(f-A)*b,r[10]=(1-(h+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Kn.set(r[0],r[1],r[2]).length();const o=Kn.set(r[4],r[5],r[6]).length(),a=Kn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const c=1/s,u=1/o,p=1/a;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=p,Ot.elements[9]*=p,Ot.elements[10]*=p,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=an){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),p=(t+e)/(t-e),h=(n+r)/(n-r);let m,v;if(a===an)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===xr)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=an){const l=this.elements,c=1/(t-e),u=1/(n-r),p=1/(o-s),h=(t+e)*c,m=(n+r)*u;let v,x;if(a===an)v=(o+s)*p,x=-2*p;else if(a===xr)v=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new U,Ot=new nt,Bc=new U(0,0,0),zc=new U(1,1,1),pn=new U,Ki=new U,bt=new U,ba=new nt,wa=new Ni;class $t{constructor(e=0,t=0,n=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],p=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ba.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ba,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kc=0;const Ra=new U,$n=new Ni,Qt=new nt,$i=new U,Ti=new U,Hc=new U,Gc=new Ni,Ca=new U(1,0,0),Pa=new U(0,1,0),La=new U(0,0,1),Da={type:"added"},Vc={type:"removed"},Zn={type:"childadded",child:null},Vr={type:"childremoved",child:null};class ft extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new U,t=new $t,n=new Ni,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new De}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(Ca,e)}rotateY(e){return this.rotateOnAxis(Pa,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Ra.copy(e).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ca,e)}translateY(e){return this.translateOnAxis(Pa,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Ti,$i,this.up):Qt.lookAt($i,Ti,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(Qt),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Da),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vc),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Da),Zn.child=e,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,Hc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Gc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ft.DEFAULT_UP=new U(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new U,en=new U,Wr=new U,tn=new U,jn=new U,Jn=new U,Ua=new U,Xr=new U,qr=new U,Yr=new U;class Yt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bt.subVectors(r,t),en.subVectors(n,t),Wr.subVectors(e,t);const o=Bt.dot(Bt),a=Bt.dot(en),l=Bt.dot(Wr),c=en.dot(en),u=en.dot(Wr),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,m=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static isFrontFacing(e,t,n,r){return Bt.subVectors(n,t),en.subVectors(e,t),Bt.cross(en).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Bt.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;jn.subVectors(r,n),Jn.subVectors(s,n),Xr.subVectors(e,n);const l=jn.dot(Xr),c=Jn.dot(Xr);if(l<=0&&c<=0)return t.copy(n);qr.subVectors(e,r);const u=jn.dot(qr),p=Jn.dot(qr);if(u>=0&&p<=u)return t.copy(r);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(jn,o);Yr.subVectors(e,s);const m=jn.dot(Yr),v=Jn.dot(Yr);if(v>=0&&m<=v)return t.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Jn,a);const f=u*v-m*p;if(f<=0&&p-u>=0&&m-v>=0)return Ua.subVectors(s,r),a=(p-u)/(p-u+(m-v)),t.copy(r).addScaledVector(Ua,a);const d=1/(f+x+h);return o=x*d,a=h*d,t.copy(n).addScaledVector(jn,o).addScaledVector(Jn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function Kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=Js(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Kr(o,s,e+1/3),this.g=Kr(o,s,e),this.b=Kr(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Go[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ye.fromWorkingColorSpace(mt.copy(this),e),Math.round(Mt(mt.r*255,0,255))*65536+Math.round(Mt(mt.g*255,0,255))*256+Math.round(Mt(mt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,r=mt.g,s=mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=u<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Xt){Ye.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,r=mt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(Zi);const n=Ci(mn.h,Zi.h,t),r=Ci(mn.s,Zi.s,t),s=Ci(mn.l,Zi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new Be;Be.NAMES=Go;let Wc=0;class Oi extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=ui,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ls,this.blendDst=cs,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ls&&(n.blendSrc=this.blendSrc),this.blendDst!==cs&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class li extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new U,ji=new ze;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=va,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),e}}class Vo extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wo extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xc=0;const Pt=new nt,$r=new ft,Qn=new U,wt=new Fi,Ai=new Fi,ut=new U;class kn extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oo(e)?Wo:Vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new On(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ai.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(wt.min,Ai.min),wt.expandByPoint(ut),ut.addVectors(wt.max,Ai.max),wt.expandByPoint(ut)):(wt.expandByPoint(Ai.min),wt.expandByPoint(Ai.max))}wt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ut.fromBufferAttribute(a,c),l&&(Qn.fromBufferAttribute(e,c),ut.add(Qn)),r=Math.max(r,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new U,l[N]=new U;const c=new U,u=new U,p=new U,h=new ze,m=new ze,v=new ze,x=new U,f=new U;function d(N,S,M){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,S),p.fromBufferAttribute(n,M),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,S),v.fromBufferAttribute(s,M),u.sub(c),p.sub(c),m.sub(h),v.sub(h);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(C),f.copy(p).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(C),a[N].add(x),a[S].add(x),a[M].add(x),l[N].add(f),l[S].add(f),l[M].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,S=A.length;N<S;++N){const M=A[N],C=M.start,G=M.count;for(let z=C,Y=C+G;z<Y;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new U,y=new U,I=new U,R=new U;function b(N){I.fromBufferAttribute(r,N),R.copy(I);const S=a[N];E.copy(S),E.sub(I.multiplyScalar(I.dot(S))).normalize(),y.crossVectors(R,S);const C=y.dot(l[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,C)}for(let N=0,S=A.length;N<S;++N){const M=A[N],C=M.start,G=M.count;for(let z=C,Y=C+G;z<Y;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,p=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),p.subVectors(r,s),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,p=a.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let d=0;d<u;d++)h[v++]=c[m++]}return new Kt(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,p=c.length;u<p;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ia=new nt,wn=new Oc,Ji=new Qs,Na=new U,ei=new U,ti=new U,ni=new U,Zr=new U,Qi=new U,er=new ze,tr=new ze,nr=new ze,Fa=new U,Oa=new U,Ba=new U,ir=new U,rr=new U;class St extends ft{constructor(e=new kn,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],p=s[l];u!==0&&(Zr.fromBufferAttribute(p,e),o?Qi.addScaledVector(Zr,u):Qi.addScaledVector(Zr.sub(t),u))}t.add(Qi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(s),wn.copy(e.ray).recast(e.near),!(Ji.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Ji,Na)===null||wn.origin.distanceToSquared(Na)>(e.far-e.near)**2))&&(Ia.copy(s).invert(),wn.copy(e.ray).applyMatrix4(Ia),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const f=h[v],d=o[f.materialIndex],A=Math.max(f.start,m.start),E=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=A,I=E;y<I;y+=3){const R=a.getX(y),b=a.getX(y+1),N=a.getX(y+2);r=sr(this,d,e,n,c,u,p,R,b,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=v,d=x;f<d;f+=3){const A=a.getX(f),E=a.getX(f+1),y=a.getX(f+2);r=sr(this,o,e,n,c,u,p,A,E,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const f=h[v],d=o[f.materialIndex],A=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=A,I=E;y<I;y+=3){const R=y,b=y+1,N=y+2;r=sr(this,d,e,n,c,u,p,R,b,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=v,d=x;f<d;f+=3){const A=f,E=f+1,y=f+2;r=sr(this,o,e,n,c,u,p,A,E,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function qc(i,e,t,n,r,s,o,a){let l;if(e.side===Et?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Mn,a),l===null)return null;rr.copy(a),rr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:i}}function sr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ei),i.getVertexPosition(l,ti),i.getVertexPosition(c,ni);const u=qc(i,e,t,n,ei,ti,ni,ir);if(u){r&&(er.fromBufferAttribute(r,a),tr.fromBufferAttribute(r,l),nr.fromBufferAttribute(r,c),u.uv=Yt.getInterpolation(ir,ei,ti,ni,er,tr,nr,new ze)),s&&(er.fromBufferAttribute(s,a),tr.fromBufferAttribute(s,l),nr.fromBufferAttribute(s,c),u.uv1=Yt.getInterpolation(ir,ei,ti,ni,er,tr,nr,new ze)),o&&(Fa.fromBufferAttribute(o,a),Oa.fromBufferAttribute(o,l),Ba.fromBufferAttribute(o,c),u.normal=Yt.getInterpolation(ir,ei,ti,ni,Fa,Oa,Ba,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new U,materialIndex:0};Yt.getNormal(ei,ti,ni,p.normal),u.face=p}return u}class kt extends kn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],p=[];let h=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(u,3)),this.setAttribute("uv",new On(p,2));function v(x,f,d,A,E,y,I,R,b,N,S){const M=y/b,C=I/N,G=y/2,z=I/2,Y=R/2,q=b+1,V=N+1;let K=0,k=0;const ue=new U;for(let ge=0;ge<V;ge++){const _e=ge*C-z;for(let Fe=0;Fe<q;Fe++){const Ke=Fe*M-G;ue[x]=Ke*A,ue[f]=_e*E,ue[d]=Y,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[f]=0,ue[d]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),p.push(Fe/b),p.push(1-ge/N),K+=1}}for(let ge=0;ge<N;ge++)for(let _e=0;_e<b;_e++){const Fe=h+_e+q*ge,Ke=h+_e+q*(ge+1),H=h+(_e+1)+q*(ge+1),J=h+(_e+1)+q*ge;l.push(Fe,Ke,J),l.push(Ke,H,J),k+=6}a.addGroup(m,k,S),m+=k,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=_i(i[t]);for(const r in n)e[r]=n[r]}return e}function Yc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Kc={clone:_i,merge:xt};var $c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$c,this.fragmentShader=Zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Yc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qo extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new U,za=new ze,ka=new ze;class Rt extends qo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ui*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ri*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(Ri*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gn.x,gn.y).multiplyScalar(-e/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-e/gn.z)}getViewSize(e,t){return this.getViewBounds(e,za,ka),t.subVectors(ka,za)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ri*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ii=-90,ri=1;class jc extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rt(ii,ri,e,t);r.layers=this.layers,this.add(r);const s=new Rt(ii,ri,e,t);s.layers=this.layers,this.add(s);const o=new Rt(ii,ri,e,t);o.layers=this.layers,this.add(o);const a=new Rt(ii,ri,e,t);a.layers=this.layers,this.add(a);const l=new Rt(ii,ri,e,t);l.layers=this.layers,this.add(l);const c=new Rt(ii,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(p,h,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Yo extends yt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jc extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kt(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:vn});s.uniforms.tEquirect.value=t;const o=new St(r,s),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=zt),new jc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const jr=new U,Qc=new U,eu=new De;class Ln{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=jr.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eu.getNormalMatrix(e),r=this.coplanarPoint(jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Qs,ar=new U;class ea{constructor(e=new Ln,t=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],p=r[6],h=r[7],m=r[8],v=r[9],x=r[10],f=r[11],d=r[12],A=r[13],E=r[14],y=r[15];if(n[0].setComponents(l-s,h-c,f-m,y-d).normalize(),n[1].setComponents(l+s,h+c,f+m,y+d).normalize(),n[2].setComponents(l+o,h+u,f+v,y+A).normalize(),n[3].setComponents(l-o,h-u,f-v,y-A).normalize(),n[4].setComponents(l-a,h-p,f-x,y-E).normalize(),t===an)n[5].setComponents(l+a,h+p,f+x,y+E).normalize();else if(t===xr)n[5].setComponents(a,p,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ar.x=r.normal.x>0?e.max.x:e.min.x,ar.y=r.normal.y>0?e.max.y:e.min.y,ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ko(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function tu(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,p=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){const u=l.array,p=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),p.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let m=0,v=h.length;m<v;m++){const x=h[m];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}p.count!==-1&&(i.bufferSubData(c,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class br extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,p=e/a,h=t/l,m=[],v=[],x=[],f=[];for(let d=0;d<u;d++){const A=d*h-o;for(let E=0;E<c;E++){const y=E*p-s;v.push(y,-A,0),x.push(0,0,1),f.push(E/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const E=A+c*d,y=A+c*(d+1),I=A+1+c*(d+1),R=A+1+c*d;m.push(E,y,R),m.push(y,I,R)}this.setIndex(m),this.setAttribute("position",new On(v,3)),this.setAttribute("normal",new On(x,3)),this.setAttribute("uv",new On(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
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
#endif`,ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
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
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uu=`#ifdef USE_BATCHING
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
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mu=`#ifdef USE_IRIDESCENCE
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
#endif`,gu=`#ifdef USE_BUMPMAP
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
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Au=`#define PI 3.141592653589793
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
} // validated`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Du="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uu=`
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
}`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vu=`#ifdef USE_GRADIENTMAP
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
}`,Wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
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
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
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
#endif`,eh=`struct PhysicalMaterial {
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
}`,th=`
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
#endif`,nh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hh=`#if defined( USE_POINTS_UV )
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
#endif`,dh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ph=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_h=`#ifdef USE_MORPHTARGETS
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
#endif`,vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Th=`#ifdef USE_NORMALMAP
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
#endif`,Ah=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ch=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ph=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ih=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kh=`float getShadowMask() {
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
}`,Hh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gh=`#ifdef USE_SKINNING
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
#endif`,Vh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wh=`#ifdef USE_SKINNING
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
#endif`,Xh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$h=`#ifdef USE_TRANSMISSION
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
#endif`,Zh=`#ifdef USE_TRANSMISSION
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
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nd=`uniform sampler2D t2D;
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`#include <common>
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
}`,ld=`#if DEPTH_PACKING == 3200
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
}`,cd=`#define DISTANCE
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
}`,ud=`#define DISTANCE
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#include <common>
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
}`,gd=`uniform vec3 diffuse;
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
}`,_d=`#define LAMBERT
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
}`,vd=`#define LAMBERT
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
}`,xd=`#define MATCAP
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
}`,Md=`#define MATCAP
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
}`,Sd=`#define NORMAL
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
}`,Ed=`#define NORMAL
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
}`,yd=`#define PHONG
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
}`,Td=`#define PHONG
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
}`,Ad=`#define STANDARD
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
}`,bd=`#define STANDARD
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
}`,wd=`#define TOON
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
}`,Rd=`#define TOON
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
}`,Cd=`uniform float size;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Ld=`#include <common>
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
}`,Dd=`uniform vec3 color;
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
}`,Ud=`uniform float rotation;
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
}`,Id=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:nu,alphahash_pars_fragment:iu,alphamap_fragment:ru,alphamap_pars_fragment:su,alphatest_fragment:au,alphatest_pars_fragment:ou,aomap_fragment:lu,aomap_pars_fragment:cu,batching_pars_vertex:uu,batching_vertex:hu,begin_vertex:du,beginnormal_vertex:fu,bsdfs:pu,iridescence_fragment:mu,bumpmap_pars_fragment:gu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:xu,clipping_planes_vertex:Mu,color_fragment:Su,color_pars_fragment:Eu,color_pars_vertex:yu,color_vertex:Tu,common:Au,cube_uv_reflection_fragment:bu,defaultnormal_vertex:wu,displacementmap_pars_vertex:Ru,displacementmap_vertex:Cu,emissivemap_fragment:Pu,emissivemap_pars_fragment:Lu,colorspace_fragment:Du,colorspace_pars_fragment:Uu,envmap_fragment:Iu,envmap_common_pars_fragment:Nu,envmap_pars_fragment:Fu,envmap_pars_vertex:Ou,envmap_physical_pars_fragment:Ku,envmap_vertex:Bu,fog_vertex:zu,fog_pars_vertex:ku,fog_fragment:Hu,fog_pars_fragment:Gu,gradientmap_pars_fragment:Vu,lightmap_pars_fragment:Wu,lights_lambert_fragment:Xu,lights_lambert_pars_fragment:qu,lights_pars_begin:Yu,lights_toon_fragment:$u,lights_toon_pars_fragment:Zu,lights_phong_fragment:ju,lights_phong_pars_fragment:Ju,lights_physical_fragment:Qu,lights_physical_pars_fragment:eh,lights_fragment_begin:th,lights_fragment_maps:nh,lights_fragment_end:ih,logdepthbuf_fragment:rh,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:ah,logdepthbuf_vertex:oh,map_fragment:lh,map_pars_fragment:ch,map_particle_fragment:uh,map_particle_pars_fragment:hh,metalnessmap_fragment:dh,metalnessmap_pars_fragment:fh,morphinstance_vertex:ph,morphcolor_vertex:mh,morphnormal_vertex:gh,morphtarget_pars_vertex:_h,morphtarget_vertex:vh,normal_fragment_begin:xh,normal_fragment_maps:Mh,normal_pars_fragment:Sh,normal_pars_vertex:Eh,normal_vertex:yh,normalmap_pars_fragment:Th,clearcoat_normal_fragment_begin:Ah,clearcoat_normal_fragment_maps:bh,clearcoat_pars_fragment:wh,iridescence_pars_fragment:Rh,opaque_fragment:Ch,packing:Ph,premultiplied_alpha_fragment:Lh,project_vertex:Dh,dithering_fragment:Uh,dithering_pars_fragment:Ih,roughnessmap_fragment:Nh,roughnessmap_pars_fragment:Fh,shadowmap_pars_fragment:Oh,shadowmap_pars_vertex:Bh,shadowmap_vertex:zh,shadowmask_pars_fragment:kh,skinbase_vertex:Hh,skinning_pars_vertex:Gh,skinning_vertex:Vh,skinnormal_vertex:Wh,specularmap_fragment:Xh,specularmap_pars_fragment:qh,tonemapping_fragment:Yh,tonemapping_pars_fragment:Kh,transmission_fragment:$h,transmission_pars_fragment:Zh,uv_pars_fragment:jh,uv_pars_vertex:Jh,uv_vertex:Qh,worldpos_vertex:ed,background_vert:td,background_frag:nd,backgroundCube_vert:id,backgroundCube_frag:rd,cube_vert:sd,cube_frag:ad,depth_vert:od,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:ud,equirect_vert:hd,equirect_frag:dd,linedashed_vert:fd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:gd,meshlambert_vert:_d,meshlambert_frag:vd,meshmatcap_vert:xd,meshmatcap_frag:Md,meshnormal_vert:Sd,meshnormal_frag:Ed,meshphong_vert:yd,meshphong_frag:Td,meshphysical_vert:Ad,meshphysical_frag:bd,meshtoon_vert:wd,meshtoon_frag:Rd,points_vert:Cd,points_frag:Pd,shadow_vert:Ld,shadow_frag:Dd,sprite_vert:Ud,sprite_frag:Id},ie={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},qt={basic:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:xt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:xt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:xt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Be(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:xt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:xt([ie.points,ie.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:xt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:xt([ie.common,ie.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:xt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:xt([ie.sprite,ie.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:xt([ie.common,ie.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:xt([ie.lights,ie.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};qt.physical={uniforms:xt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const or={r:0,b:0,g:0},Cn=new $t,Nd=new nt;function Fd(i,e,t,n,r,s,o){const a=new Be(0);let l=s===!0?0:1,c,u,p=null,h=0,m=null;function v(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function x(A){let E=!1;const y=v(A);y===null?d(a,l):y&&y.isColor&&(d(y,1),E=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(A,E){const y=v(E);y&&(y.isCubeTexture||y.mapping===Tr)?(u===void 0&&(u=new St(new kt(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:_i(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Cn.copy(E.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nd.makeRotationFromEuler(Cn)),u.material.toneMapped=Ye.getTransfer(y.colorSpace)!==Ze,(p!==y||h!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,p=y,h=y.version,m=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new St(new br(2,2),new Sn({name:"BackgroundMaterial",uniforms:_i(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==Ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||h!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,p=y,h=y.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,E){A.getRGB(or,Xo(i)),n.buffers.color.setClear(or.r,or.g,or.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:x,addToRenderList:f}}function Od(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(M,C,G,z,Y){let q=!1;const V=p(z,G,C);s!==V&&(s=V,c(s.object)),q=m(M,z,G,Y),q&&v(M,z,G,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(M,C,G,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function p(M,C,G){const z=G.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let q=Y[C.id];q===void 0&&(q={},Y[C.id]=q);let V=q[z];return V===void 0&&(V=h(l()),q[z]=V),V}function h(M){const C=[],G=[],z=[];for(let Y=0;Y<t;Y++)C[Y]=0,G[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,C,G,z){const Y=s.attributes,q=C.attributes;let V=0;const K=G.getAttributes();for(const k in K)if(K[k].location>=0){const ge=Y[k];let _e=q[k];if(_e===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),ge===void 0||ge.attribute!==_e||_e&&ge.data!==_e.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function v(M,C,G,z){const Y={},q=C.attributes;let V=0;const K=G.getAttributes();for(const k in K)if(K[k].location>=0){let ge=q[k];ge===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const _e={};_e.attribute=ge,ge&&ge.data&&(_e.data=ge.data),Y[k]=_e,V++}s.attributes=Y,s.attributesNum=V,s.index=z}function x(){const M=s.newAttributes;for(let C=0,G=M.length;C<G;C++)M[C]=0}function f(M){d(M,0)}function d(M,C){const G=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;G[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),Y[M]!==C&&(i.vertexAttribDivisor(M,C),Y[M]=C)}function A(){const M=s.newAttributes,C=s.enabledAttributes;for(let G=0,z=C.length;G<z;G++)C[G]!==M[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function E(M,C,G,z,Y,q,V){V===!0?i.vertexAttribIPointer(M,C,G,Y,q):i.vertexAttribPointer(M,C,G,z,Y,q)}function y(M,C,G,z){x();const Y=z.attributes,q=G.getAttributes(),V=C.defaultAttributeValues;for(const K in q){const k=q[K];if(k.location>=0){let ue=Y[K];if(ue===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const ge=ue.normalized,_e=ue.itemSize,Fe=e.get(ue);if(Fe===void 0)continue;const Ke=Fe.buffer,H=Fe.type,J=Fe.bytesPerElement,fe=H===i.INT||H===i.UNSIGNED_INT||ue.gpuType===Xs;if(ue.isInterleavedBufferAttribute){const le=ue.data,Re=le.stride,Ue=ue.offset;if(le.isInstancedInterleavedBuffer){for(let Ne=0;Ne<k.locationSize;Ne++)d(k.location+Ne,le.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<k.locationSize;Ne++)f(k.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Ne=0;Ne<k.locationSize;Ne++)E(k.location+Ne,_e/k.locationSize,H,ge,Re*J,(Ue+_e/k.locationSize*Ne)*J,fe)}else{if(ue.isInstancedBufferAttribute){for(let le=0;le<k.locationSize;le++)d(k.location+le,ue.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let le=0;le<k.locationSize;le++)f(k.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let le=0;le<k.locationSize;le++)E(k.location+le,_e/k.locationSize,H,ge,_e*J,_e/k.locationSize*le*J,fe)}}else if(V!==void 0){const ge=V[K];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(k.location,ge);break;case 3:i.vertexAttrib3fv(k.location,ge);break;case 4:i.vertexAttrib4fv(k.location,ge);break;default:i.vertexAttrib1fv(k.location,ge)}}}}A()}function I(){N();for(const M in n){const C=n[M];for(const G in C){const z=C[G];for(const Y in z)u(z[Y].object),delete z[Y];delete C[G]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const G in C){const z=C[G];for(const Y in z)u(z[Y].object),delete z[Y];delete C[G]}delete n[M.id]}function b(M){for(const C in n){const G=n[C];if(G[M.id]===void 0)continue;const z=G[M.id];for(const Y in z)u(z[Y].object),delete z[Y];delete G[M.id]}}function N(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:f,disableUnusedAttributes:A}}function Bd(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,p){p!==0&&(i.drawArraysInstanced(n,c,u,p),t.update(u,n,p))}function a(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,p);let m=0;for(let v=0;v<p;v++)m+=u[v];t.update(m,n,1)}function l(c,u,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,p);let v=0;for(let x=0;x<p;x++)v+=u[x];for(let x=0;x<h.length;x++)t.update(v,n,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Gt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sn&&!b)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:d,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:y,maxSamples:I}}function kd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ln,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||n!==0||r;return r=h,n=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){t=u(p,h,0)},this.setState=function(p,h,m){const v=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!r||v===null||v.length===0||s&&!f)s?u(null):c();else{const A=s?0:n,E=A*4;let y=d.clippingState||null;l.value=y,y=u(v,h,E,m);for(let I=0;I!==E;++I)y[I]=t[I];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,m,v){const x=p!==null?p.length:0;let f=null;if(x!==0){if(f=l.value,v!==!0||f===null){const d=m+x*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(f===null||f.length<d)&&(f=new Float32Array(d));for(let E=0,y=m;E!==x;++E,y+=4)o.copy(p[E]).applyMatrix4(A,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function Hd(i){let e=new WeakMap;function t(o,a){return a===us?o.mapping=fi:a===hs&&(o.mapping=pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===us||a===hs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $o extends qo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,Ha=[.125,.215,.35,.446,.526,.582],In=20,Jr=new $o,Ga=new Be;let Qr=null,es=0,ts=0,ns=!1;const Dn=(1+Math.sqrt(5))/2,si=1/Dn,Va=[new U(-Dn,si,0),new U(Dn,si,0),new U(-si,0,Dn),new U(si,0,Dn),new U(0,Dn,-si),new U(0,Dn,si),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Qr=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ts=this._renderer.getActiveMipmapLevel(),ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,es,ts),this._renderer.xr.enabled=ns,e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ts=this._renderer.getActiveMipmapLevel(),ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ii,format:Gt,colorSpace:En,depthBuffer:!1},r=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(s)),this._blurMaterial=Vd(s,e,t)}return r}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Jr)}_sceneToCubeUV(e,t,n,r){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(Ga),u.toneMapping=xn,u.autoClear=!1;const m=new li({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),v=new St(new kt,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(Ga),x=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const E=this._cubeSize;lr(r,A*E,d>2?E:0,E,E),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===fi||e.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;lr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Jr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Va[(r-s-1)%Va.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new St(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),x=s/v,f=isFinite(s)?1+Math.floor(u*x):In;f>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${In}`);const d=[];let A=0;for(let b=0;b<In;++b){const N=b/x,S=Math.exp(-N*N/2);d.push(S),b===0?A+=S:b<f&&(A+=2*S)}for(let b=0;b<d.length;b++)d[b]=d[b]/A;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=v,h.mipInt.value=E-n;const y=this._sizeLods[r],I=3*y*(r>E-ci?r-E+ci:0),R=4*(this._cubeSize-y);lr(t,I,R,3*y,2*y),l.setRenderTarget(t),l.render(p,Jr)}}function Gd(i){const e=[],t=[],n=[];let r=i;const s=i-ci+1+Ha.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ci?l=Ha[o-i+ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,v=6,x=3,f=2,d=1,A=new Float32Array(x*v*m),E=new Float32Array(f*v*m),y=new Float32Array(d*v*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,N=R>2?0:-1,S=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];A.set(S,x*v*R),E.set(h,f*v*R);const M=[R,R,R,R,R,R];y.set(M,d*v*R)}const I=new kn;I.setAttribute("position",new Kt(A,x)),I.setAttribute("uv",new Kt(E,f)),I.setAttribute("faceIndex",new Kt(y,d)),e.push(I),r>ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(i,e,t){const n=new zn(i,e,t);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Vd(i,e,t){const n=new Float32Array(In),r=new U(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ta(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function qa(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ya(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}function Wd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===us||l===hs,u=l===fi||l===pi;if(c||u){let p=e.get(a);const h=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Wa(i)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Wa(i)),p=c?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Bo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function qd(i,e,t,n){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let f=0,d=x.length;f<d;f++)e.remove(x[f])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const v in h)e.update(h[v],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const v in m){const x=m[v];for(let f=0,d=x.length;f<d;f++)e.update(x[f],i.ARRAY_BUFFER)}}function c(p){const h=[],m=p.index,v=p.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let E=0,y=A.length;E<y;E+=3){const I=A[E+0],R=A[E+1],b=A[E+2];h.push(I,R,R,b,b,I)}}else if(v!==void 0){const A=v.array;x=v.version;for(let E=0,y=A.length/3-1;E<y;E+=3){const I=E+0,R=E+1,b=E+2;h.push(I,R,R,b,b,I)}}else return;const f=new(Oo(h)?Wo:Vo)(h,1);f.version=x;const d=s.get(p);d&&e.remove(d),s.set(p,f)}function u(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:u}}function Yd(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){i.drawElements(n,m,s,h*o),t.update(m,n,1)}function c(h,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,h*o,v),t.update(m,n,v))}function u(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,v);let f=0;for(let d=0;d<v;d++)f+=m[d];t.update(f,n,1)}function p(h,m,v,x){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h.length;d++)c(h[d]/o,m[d],x[d]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,x,0,v);let d=0;for(let A=0;A<v;A++)d+=m[A];for(let A=0;A<x.length;A++)t.update(d,n,x[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function Kd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $d(i,e,t){const n=new WeakMap,r=new je;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==p){let M=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),f===!0&&(y=3);let I=a.attributes.position.count*y,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const b=new Float32Array(I*R*4*p),N=new ko(b,I,R,p);N.type=sn,N.needsUpdate=!0;const S=y*4;for(let C=0;C<p;C++){const G=d[C],z=A[C],Y=E[C],q=I*R*4*C;for(let V=0;V<G.count;V++){const K=V*S;v===!0&&(r.fromBufferAttribute(G,V),b[q+K+0]=r.x,b[q+K+1]=r.y,b[q+K+2]=r.z,b[q+K+3]=0),x===!0&&(r.fromBufferAttribute(z,V),b[q+K+4]=r.x,b[q+K+5]=r.y,b[q+K+6]=r.z,b[q+K+7]=0),f===!0&&(r.fromBufferAttribute(Y,V),b[q+K+8]=r.x,b[q+K+9]=r.y,b[q+K+10]=r.z,b[q+K+11]=Y.itemSize===4?r.w:1)}}h={count:p,texture:N,size:new ze(I,R)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let f=0;f<c.length;f++)v+=c[f];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Zd(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,p=e.get(l,u);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Zo extends yt{constructor(e,t,n,r,s,o,a,l,c,u=hi){if(u!==hi&&u!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hi&&(n=Bn),n===void 0&&u===gi&&(n=mi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jo=new yt,Ka=new Zo(1,1),Jo=new ko,Qo=new Nc,el=new Yo,$a=[],Za=[],ja=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Si(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$a[r];if(s===void 0&&(s=new Float32Array(r),$a[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wr(i,e){let t=Za[e];t===void 0&&(t=new Int32Array(e),Za[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function tf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Qa.set(n),i.uniformMatrix2fv(this.addr,!1,Qa),ct(t,n)}}function nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Ja.set(n),i.uniformMatrix3fv(this.addr,!1,Ja),ct(t,n)}}function rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;ja.set(n),i.uniformMatrix4fv(this.addr,!1,ja),ct(t,n)}}function sf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function cf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function ff(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ka.compareFunction=Fo,s=Ka):s=jo,t.setTexture2D(e||s,r)}function pf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Qo,r)}function mf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||el,r)}function gf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Jo,r)}function _f(i){switch(i){case 5126:return jd;case 35664:return Jd;case 35665:return Qd;case 35666:return ef;case 35674:return tf;case 35675:return nf;case 35676:return rf;case 5124:case 35670:return sf;case 35667:case 35671:return af;case 35668:case 35672:return of;case 35669:case 35673:return lf;case 5125:return cf;case 36294:return uf;case 36295:return hf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return gf}}function vf(i,e){i.uniform1fv(this.addr,e)}function xf(i,e){const t=Si(e,this.size,2);i.uniform2fv(this.addr,t)}function Mf(i,e){const t=Si(e,this.size,3);i.uniform3fv(this.addr,t)}function Sf(i,e){const t=Si(e,this.size,4);i.uniform4fv(this.addr,t)}function Ef(i,e){const t=Si(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yf(i,e){const t=Si(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tf(i,e){const t=Si(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Af(i,e){i.uniform1iv(this.addr,e)}function bf(i,e){i.uniform2iv(this.addr,e)}function wf(i,e){i.uniform3iv(this.addr,e)}function Rf(i,e){i.uniform4iv(this.addr,e)}function Cf(i,e){i.uniform1uiv(this.addr,e)}function Pf(i,e){i.uniform2uiv(this.addr,e)}function Lf(i,e){i.uniform3uiv(this.addr,e)}function Df(i,e){i.uniform4uiv(this.addr,e)}function Uf(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jo,s[o])}function If(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qo,s[o])}function Nf(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||el,s[o])}function Ff(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jo,s[o])}function Of(i){switch(i){case 5126:return vf;case 35664:return xf;case 35665:return Mf;case 35666:return Sf;case 35674:return Ef;case 35675:return yf;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return bf;case 35668:case 35672:return wf;case 35669:case 35673:return Rf;case 5125:return Cf;case 36294:return Pf;case 36295:return Lf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Ff}}class Bf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_f(t.type)}}class zf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Of(t.type)}}class kf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const is=/(\w+)(\])?(\[|\.)?/g;function eo(i,e){i.seq.push(e),i.map[e.id]=e}function Hf(i,e,t){const n=i.name,r=n.length;for(is.lastIndex=0;;){const s=is.exec(n),o=is.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){eo(t,c===void 0?new Bf(a,i,e):new zf(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new kf(a),eo(t,p)),t=p}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Hf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function to(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gf=37297;let Vf=0;function Wf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Xf(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let n;switch(e===t?n="":e===vr&&t===_r?n="LinearDisplayP3ToLinearSRGB":e===_r&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case Ar:return[n,"LinearTransferOETF"];case Xt:case js:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function no(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Wf(i.getShaderSource(e),o)}else return r}function qf(i,e){const t=Xf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yf(i,e){let t;switch(e){case Kl:t="Linear";break;case $l:t="Reinhard";break;case Zl:t="OptimizedCineon";break;case jl:t="ACESFilmic";break;case Ql:t="AgX";break;case ec:t="Neutral";break;case Jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function $f(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wi(i){return i!==""}function io(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ro(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ks(i){return i.replace(jf,Qf)}const Jf=new Map;function Qf(i,e){let t=Le[e];if(t===void 0){const n=Jf.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ks(t)}const ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(i){return i.replace(ep,tp)}function tp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ao(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function np(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function ip(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:e="ENVMAP_TYPE_CUBE";break;case Tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:e="ENVMAP_MODE_REFRACTION";break}return e}function sp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ws:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Yl:e="ENVMAP_BLENDING_ADD";break}return e}function ap(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function op(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=np(t),c=ip(t),u=rp(t),p=sp(t),h=ap(t),m=Kf(t),v=$f(s),x=r.createProgram();let f,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wi).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wi).join(`
`),d.length>0&&(d+=`
`)):(f=[ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),d=[ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Le.tonemapping_pars_fragment:"",t.toneMapping!==xn?Yf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,qf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),o=ks(o),o=io(o,t),o=ro(o,t),a=ks(a),a=io(a,t),a=ro(a,t),o=so(o),a=so(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=A+f+o,y=A+d+a,I=to(r,r.VERTEX_SHADER,E),R=to(r,r.FRAGMENT_SHADER,y);r.attachShader(x,I),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(C){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(I).trim(),Y=r.getShaderInfoLog(R).trim();let q=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,I,R);else{const K=no(r,I,"vertex"),k=no(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+K+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||Y==="")&&(V=!1);V&&(C.diagnostics={runnable:q,programLog:G,vertexShader:{log:z,prefix:f},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(I),r.deleteShader(R),N=new pr(r,x),S=Zf(r,x)}let N;this.getUniforms=function(){return N===void 0&&b(this),N};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Gf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=R,this}let lp=0;class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new up(e),t.set(e,n)),n}}class up{constructor(e){this.id=lp++,this.code=e,this.usedTimes=0}}function hp(i,e,t,n,r,s,o){const a=new Ho,l=new cp,c=new Set,u=[],p=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,M,C,G,z){const Y=G.fog,q=z.geometry,V=S.isMeshStandardMaterial?G.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),k=K&&K.mapping===Tr?K.image.height:null,ue=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_e=ge!==void 0?ge.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let Ke,H,J,fe;if(ue){const Ge=qt[ue];Ke=Ge.vertexShader,H=Ge.fragmentShader}else Ke=S.vertexShader,H=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const le=i.getRenderTarget(),Re=z.isInstancedMesh===!0,Ue=z.isBatchedMesh===!0,Ne=!!S.map,Qe=!!S.matcap,w=!!K,it=!!S.aoMap,qe=!!S.lightMap,$e=!!S.bumpMap,xe=!!S.normalMap,rt=!!S.displacementMap,be=!!S.emissiveMap,Ce=!!S.metalnessMap,T=!!S.roughnessMap,g=S.anisotropy>0,B=S.clearcoat>0,Z=S.dispersion>0,j=S.iridescence>0,$=S.sheen>0,Me=S.transmission>0,se=g&&!!S.anisotropyMap,ce=B&&!!S.clearcoatMap,Pe=B&&!!S.clearcoatNormalMap,Q=B&&!!S.clearcoatRoughnessMap,oe=j&&!!S.iridescenceMap,Oe=j&&!!S.iridescenceThicknessMap,Ae=$&&!!S.sheenColorMap,he=$&&!!S.sheenRoughnessMap,we=!!S.specularMap,Ie=!!S.specularColorMap,Je=!!S.specularIntensityMap,P=Me&&!!S.transmissionMap,ee=Me&&!!S.thicknessMap,W=!!S.gradientMap,X=!!S.alphaMap,ne=S.alphaTest>0,Ee=!!S.alphaHash,ke=!!S.extensions;let st=xn;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(st=i.toneMapping);const ht={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:H,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&z._colorsTexture!==null,instancing:Re,instancingColor:Re&&z.instanceColor!==null,instancingMorph:Re&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:En,alphaToCoverage:!!S.alphaToCoverage,map:Ne,matcap:Qe,envMap:w,envMapMode:w&&K.mapping,envMapCubeUVHeight:k,aoMap:it,lightMap:qe,bumpMap:$e,normalMap:xe,displacementMap:h&&rt,emissiveMap:be,normalMapObjectSpace:xe&&S.normalMapType===rc,normalMapTangentSpace:xe&&S.normalMapType===No,metalnessMap:Ce,roughnessMap:T,anisotropy:g,anisotropyMap:se,clearcoat:B,clearcoatMap:ce,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:j,iridescenceMap:oe,iridescenceThicknessMap:Oe,sheen:$,sheenColorMap:Ae,sheenRoughnessMap:he,specularMap:we,specularColorMap:Ie,specularIntensityMap:Je,transmission:Me,transmissionMap:P,thicknessMap:ee,gradientMap:W,opaque:S.transparent===!1&&S.blending===ui&&S.alphaToCoverage===!1,alphaMap:X,alphaTest:ne,alphaHash:Ee,combine:S.combine,mapUv:Ne&&x(S.map.channel),aoMapUv:it&&x(S.aoMap.channel),lightMapUv:qe&&x(S.lightMap.channel),bumpMapUv:$e&&x(S.bumpMap.channel),normalMapUv:xe&&x(S.normalMap.channel),displacementMapUv:rt&&x(S.displacementMap.channel),emissiveMapUv:be&&x(S.emissiveMap.channel),metalnessMapUv:Ce&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:se&&x(S.anisotropyMap.channel),clearcoatMapUv:ce&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:he&&x(S.sheenRoughnessMap.channel),specularMapUv:we&&x(S.specularMap.channel),specularColorMapUv:Ie&&x(S.specularColorMap.channel),specularIntensityMapUv:Je&&x(S.specularIntensityMap.channel),transmissionMapUv:P&&x(S.transmissionMap.channel),thicknessMapUv:ee&&x(S.thicknessMap.channel),alphaMapUv:X&&x(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(xe||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Ne||X),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===rn,flipSided:S.side===Et,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),S.push(a.mask)}function y(S){const M=v[S.type];let C;if(M){const G=qt[M];C=Kc.clone(G.uniforms)}else C=S.uniforms;return C}function I(S,M){let C;for(let G=0,z=u.length;G<z;G++){const Y=u[G];if(Y.cacheKey===M){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new op(i,M,S,s),u.push(C)),C}function R(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:y,acquireProgram:I,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:N}}function dp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,h,m,v,x,f){let d=i[e];return d===void 0?(d={id:p.id,object:p,geometry:h,material:m,groupOrder:v,renderOrder:p.renderOrder,z:x,group:f},i[e]=d):(d.id=p.id,d.object=p,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=p.renderOrder,d.z=x,d.group=f),e++,d}function a(p,h,m,v,x,f){const d=o(p,h,m,v,x,f);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(p,h,m,v,x,f){const d=o(p,h,m,v,x,f);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(p,h){t.length>1&&t.sort(p||fp),n.length>1&&n.sort(h||oo),r.length>1&&r.sort(h||oo)}function u(){for(let p=e,h=i.length;p<h;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function pp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new lo,i.set(n,[o])):r>=s.length?(o=new lo,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function gp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _p=0;function vp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xp(i){const e=new mp,t=gp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new nt,o=new nt;function a(c){let u=0,p=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,v=0,x=0,f=0,d=0,A=0,E=0,y=0,I=0,R=0,b=0;c.sort(vp);for(let S=0,M=c.length;S<M;S++){const C=c[S],G=C.color,z=C.intensity,Y=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=G.r*z,p+=G.g*z,h+=G.b*z;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],z);b++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,k=t.get(C);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=V,m++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(G).multiplyScalar(z),V.distance=Y,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[x]=V;const K=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,K.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[x]=K.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=q,y++}x++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(G).multiplyScalar(z),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=V,f++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const K=C.shadow,k=t.get(C);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=C.shadow.matrix,E++}n.point[v]=V,v++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(z),V.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[d]=V,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;const N=n.hash;(N.directionalLength!==m||N.pointLength!==v||N.spotLength!==x||N.rectAreaLength!==f||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==E||N.numSpotShadows!==y||N.numSpotMaps!==I||N.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,N.directionalLength=m,N.pointLength=v,N.spotLength=x,N.rectAreaLength=f,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=E,N.numSpotShadows=y,N.numSpotMaps=I,N.numLightProbes=b,n.version=_p++)}function l(c,u){let p=0,h=0,m=0,v=0,x=0;const f=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const E=c[d];if(E.isDirectionalLight){const y=n.directional[p];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),p++}else if(E.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),m++}else if(E.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),o.identity(),s.copy(E.matrixWorld),s.premultiply(f),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(f),h++}else if(E.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(f),x++}}}return{setup:a,setupView:l,state:n}}function co(i){const e=new xp(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Mp(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new co(i),e.set(r,[a])):s>=o.length?(a=new co(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Sp extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ep extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tp=`uniform sampler2D shadow_pass;
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
}`;function Ap(i,e,t){let n=new ea;const r=new ze,s=new ze,o=new je,a=new Sp({depthPacking:ic}),l=new Ep,c={},u=t.maxTextureSize,p={[Mn]:Et,[Et]:Mn,[rn]:rn},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:yp,fragmentShader:Tp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new St(v,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let d=this.type;this.render=function(R,b,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(vn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=d!==nn&&this.type===nn,Y=d===nn&&this.type!==nn;for(let q=0,V=R.length;q<V;q++){const K=R[q],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ue=k.getFrameExtents();if(r.multiply(ue),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,k.mapSize.y=s.y)),k.map===null||z===!0||Y===!0){const _e=this.type!==nn?{minFilter:Dt,magFilter:Dt}:{};k.map!==null&&k.map.dispose(),k.map=new zn(r.x,r.y,_e),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ge=k.getViewportCount();for(let _e=0;_e<ge;_e++){const Fe=k.getViewport(_e);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),G.viewport(o),k.updateMatrices(K,_e),n=k.getFrustum(),y(b,N,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===nn&&A(k,N),k.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(S,M,C)};function A(R,b){const N=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zn(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,N,h,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,N,m,x,null)}function E(R,b,N,S){let M=null;const C=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=N.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=M.uuid,z=b.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let q=Y[z];q===void 0&&(q=M.clone(),Y[z]=q,b.addEventListener("dispose",I)),M=q}if(M.visible=b.visible,M.wireframe=b.wireframe,S===nn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:p[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=N}return M}function y(R,b,N,S,M){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===nn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const z=e.update(R),Y=R.material;if(Array.isArray(Y)){const q=z.groups;for(let V=0,K=q.length;V<K;V++){const k=q[V],ue=Y[k.materialIndex];if(ue&&ue.visible){const ge=E(R,ue,S,M);R.onBeforeShadow(i,R,b,N,z,ge,k),i.renderBufferDirect(N,null,z,ge,R,k),R.onAfterShadow(i,R,b,N,z,ge,k)}}}else if(Y.visible){const q=E(R,Y,S,M);R.onBeforeShadow(i,R,b,N,z,q,null),i.renderBufferDirect(N,null,z,q,R,null),R.onAfterShadow(i,R,b,N,z,q,null)}}const G=R.children;for(let z=0,Y=G.length;z<Y;z++)y(G[z],b,N,S,M)}function I(R){R.target.removeEventListener("dispose",I);for(const N in c){const S=c[N],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function bp(i){function e(){let P=!1;const ee=new je;let W=null;const X=new je(0,0,0,0);return{setMask:function(ne){W!==ne&&!P&&(i.colorMask(ne,ne,ne,ne),W=ne)},setLocked:function(ne){P=ne},setClear:function(ne,Ee,ke,st,ht){ht===!0&&(ne*=st,Ee*=st,ke*=st),ee.set(ne,Ee,ke,st),X.equals(ee)===!1&&(i.clearColor(ne,Ee,ke,st),X.copy(ee))},reset:function(){P=!1,W=null,X.set(-1,0,0,0)}}}function t(){let P=!1,ee=null,W=null,X=null;return{setTest:function(ne){ne?fe(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(ne){ee!==ne&&!P&&(i.depthMask(ne),ee=ne)},setFunc:function(ne){if(W!==ne){switch(ne){case zl:i.depthFunc(i.NEVER);break;case kl:i.depthFunc(i.ALWAYS);break;case Hl:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=ne}},setLocked:function(ne){P=ne},setClear:function(ne){X!==ne&&(i.clearDepth(ne),X=ne)},reset:function(){P=!1,ee=null,W=null,X=null}}}function n(){let P=!1,ee=null,W=null,X=null,ne=null,Ee=null,ke=null,st=null,ht=null;return{setTest:function(Ge){P||(Ge?fe(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(Ge){ee!==Ge&&!P&&(i.stencilMask(Ge),ee=Ge)},setFunc:function(Ge,Zt,Vt){(W!==Ge||X!==Zt||ne!==Vt)&&(i.stencilFunc(Ge,Zt,Vt),W=Ge,X=Zt,ne=Vt)},setOp:function(Ge,Zt,Vt){(Ee!==Ge||ke!==Zt||st!==Vt)&&(i.stencilOp(Ge,Zt,Vt),Ee=Ge,ke=Zt,st=Vt)},setLocked:function(Ge){P=Ge},setClear:function(Ge){ht!==Ge&&(i.clearStencil(Ge),ht=Ge)},reset:function(){P=!1,ee=null,W=null,X=null,ne=null,Ee=null,ke=null,st=null,ht=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,h=[],m=null,v=!1,x=null,f=null,d=null,A=null,E=null,y=null,I=null,R=new Be(0,0,0),b=0,N=!1,S=null,M=null,C=null,G=null,z=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,V=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=V>=2);let k=null,ue={};const ge=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Fe=new je().fromArray(ge),Ke=new je().fromArray(_e);function H(P,ee,W,X){const ne=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(P,Ee),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<W;ke++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(ee+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Ee}const J={};J[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),s.setFunc(mr),$e(!1),xe(fa),fe(i.CULL_FACE),it(vn);function fe(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function le(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function Re(P,ee){return u[P]!==ee?(i.bindFramebuffer(P,ee),u[P]=ee,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ue(P,ee){let W=h,X=!1;if(P){W=p.get(ee),W===void 0&&(W=[],p.set(ee,W));const ne=P.textures;if(W.length!==ne.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,ke=ne.length;Ee<ke;Ee++)W[Ee]=i.COLOR_ATTACHMENT0+Ee;W.length=ne.length,X=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,X=!0);X&&i.drawBuffers(W)}function Ne(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const Qe={[Un]:i.FUNC_ADD,[El]:i.FUNC_SUBTRACT,[yl]:i.FUNC_REVERSE_SUBTRACT};Qe[Tl]=i.MIN,Qe[Al]=i.MAX;const w={[bl]:i.ZERO,[wl]:i.ONE,[Rl]:i.SRC_COLOR,[ls]:i.SRC_ALPHA,[Il]:i.SRC_ALPHA_SATURATE,[Dl]:i.DST_COLOR,[Pl]:i.DST_ALPHA,[Cl]:i.ONE_MINUS_SRC_COLOR,[cs]:i.ONE_MINUS_SRC_ALPHA,[Ul]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Nl]:i.CONSTANT_COLOR,[Fl]:i.ONE_MINUS_CONSTANT_COLOR,[Ol]:i.CONSTANT_ALPHA,[Bl]:i.ONE_MINUS_CONSTANT_ALPHA};function it(P,ee,W,X,ne,Ee,ke,st,ht,Ge){if(P===vn){v===!0&&(le(i.BLEND),v=!1);return}if(v===!1&&(fe(i.BLEND),v=!0),P!==Sl){if(P!==x||Ge!==N){if((f!==Un||E!==Un)&&(i.blendEquation(i.FUNC_ADD),f=Un,E=Un),Ge)switch(P){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.ONE,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ga:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}d=null,A=null,y=null,I=null,R.set(0,0,0),b=0,x=P,N=Ge}return}ne=ne||ee,Ee=Ee||W,ke=ke||X,(ee!==f||ne!==E)&&(i.blendEquationSeparate(Qe[ee],Qe[ne]),f=ee,E=ne),(W!==d||X!==A||Ee!==y||ke!==I)&&(i.blendFuncSeparate(w[W],w[X],w[Ee],w[ke]),d=W,A=X,y=Ee,I=ke),(st.equals(R)===!1||ht!==b)&&(i.blendColor(st.r,st.g,st.b,ht),R.copy(st),b=ht),x=P,N=!1}function qe(P,ee){P.side===rn?le(i.CULL_FACE):fe(i.CULL_FACE);let W=P.side===Et;ee&&(W=!W),$e(W),P.blending===ui&&P.transparent===!1?it(vn):it(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const X=P.stencilWrite;o.setTest(X),X&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function xe(P){P!==xl?(fe(i.CULL_FACE),P!==M&&(P===fa?i.cullFace(i.BACK):P===Ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),M=P}function rt(P){P!==C&&(q&&i.lineWidth(P),C=P)}function be(P,ee,W){P?(fe(i.POLYGON_OFFSET_FILL),(G!==ee||z!==W)&&(i.polygonOffset(ee,W),G=ee,z=W)):le(i.POLYGON_OFFSET_FILL)}function Ce(P){P?fe(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+Y-1),k!==P&&(i.activeTexture(P),k=P)}function g(P,ee,W){W===void 0&&(k===null?W=i.TEXTURE0+Y-1:W=k);let X=ue[W];X===void 0&&(X={type:void 0,texture:void 0},ue[W]=X),(X.type!==P||X.texture!==ee)&&(k!==W&&(i.activeTexture(W),k=W),i.bindTexture(P,ee||J[P]),X.type=P,X.texture=ee)}function B(){const P=ue[k];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){Fe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Fe.copy(P))}function he(P){Ke.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ke.copy(P))}function we(P,ee){let W=l.get(ee);W===void 0&&(W=new WeakMap,l.set(ee,W));let X=W.get(P);X===void 0&&(X=i.getUniformBlockIndex(ee,P.name),W.set(P,X))}function Ie(P,ee){const X=l.get(ee).get(P);a.get(ee)!==X&&(i.uniformBlockBinding(ee,X,P.__bindingPointIndex),a.set(ee,X))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},k=null,ue={},u={},p=new WeakMap,h=[],m=null,v=!1,x=null,f=null,d=null,A=null,E=null,y=null,I=null,R=new Be(0,0,0),b=0,N=!1,S=null,M=null,C=null,G=null,z=null,Fe.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:le,bindFramebuffer:Re,drawBuffers:Ue,useProgram:Ne,setBlending:it,setMaterial:qe,setFlipSided:$e,setCullFace:xe,setLineWidth:rt,setPolygonOffset:be,setScissorTest:Ce,activeTexture:T,bindTexture:g,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:oe,texImage3D:Oe,updateUBOMapping:we,uniformBlockBinding:Ie,texStorage2D:Pe,texStorage3D:Q,texSubImage2D:$,texSubImage3D:Me,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:Ae,viewport:he,reset:Je}}function uo(i,e,t,n){const r=wp(n);switch(t){case Ro:return i*e;case Po:return i*e;case Lo:return i*e*2;case Do:return i*e/r.components*r.byteLength;case Ks:return i*e/r.components*r.byteLength;case Uo:return i*e*2/r.components*r.byteLength;case $s:return i*e*2/r.components*r.byteLength;case Co:return i*e*3/r.components*r.byteLength;case Gt:return i*e*4/r.components*r.byteLength;case Zs:return i*e*4/r.components*r.byteLength;case cr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ms:case _s:return Math.max(i,16)*Math.max(e,8)/4;case ps:case gs:return Math.max(i,8)*Math.max(e,8)/2;case vs:case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ts:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ws:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Cs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ds:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Us:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Is:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fr:case Ns:case Fs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Io:case Os:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bs:case zs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wp(i){switch(i){case on:case Ao:return{byteLength:1,components:1};case Di:case bo:case Ii:return{byteLength:2,components:1};case qs:case Ys:return{byteLength:2,components:4};case Bn:case Xs:case sn:return{byteLength:4,components:1};case wo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rp(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,g){return m?new OffscreenCanvas(T,g):Mr("canvas")}function x(T,g,B){let Z=1;const j=Ce(T);if((j.width>B||j.height>B)&&(Z=B/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Z*j.width),Me=Math.floor(Z*j.height);p===void 0&&(p=v($,Me));const se=g?v($,Me):p;return se.width=$,se.height=Me,se.getContext("2d").drawImage(T,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Me+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==Dt&&T.minFilter!==zt}function d(T){i.generateMipmap(T)}function A(T,g,B,Z,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=g;if(g===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),g===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),g===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),g===i.RGBA){const Me=j?gr:Ye.getTransfer(Z);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Me===Ze?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function E(T,g){let B;return T?g===null||g===Bn||g===mi?B=i.DEPTH24_STENCIL8:g===sn?B=i.DEPTH32F_STENCIL8:g===Di&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Bn||g===mi?B=i.DEPTH_COMPONENT24:g===sn?B=i.DEPTH_COMPONENT32F:g===Di&&(B=i.DEPTH_COMPONENT16),B}function y(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dt&&T.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function I(T){const g=T.target;g.removeEventListener("dispose",I),b(g),g.isVideoTexture&&u.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),S(g)}function b(T){const g=n.get(T);if(g.__webglInit===void 0)return;const B=T.source,Z=h.get(B);if(Z){const j=Z[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&N(T),Object.keys(Z).length===0&&h.delete(B)}n.remove(T)}function N(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const B=T.source,Z=h.get(B);delete Z[g.__cacheKey],o.memory.textures--}function S(T){const g=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let j=0;j<g.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=T.textures;for(let Z=0,j=B.length;Z<j;Z++){const $=n.get(B[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(T)}let M=0;function C(){M=0}function G(){const T=M;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),M+=1,T}function z(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function Y(T,g){const B=n.get(T);if(T.isVideoTexture&&rt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(B,T,g);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function q(T,g){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Ke(B,T,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function V(T,g){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Ke(B,T,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function K(T,g){const B=n.get(T);if(T.version>0&&B.__version!==T.version){H(B,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const k={[ds]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[fs]:i.MIRRORED_REPEAT},ue={[Dt]:i.NEAREST,[tc]:i.NEAREST_MIPMAP_NEAREST,[Hi]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},ge={[sc]:i.NEVER,[hc]:i.ALWAYS,[ac]:i.LESS,[Fo]:i.LEQUAL,[oc]:i.EQUAL,[uc]:i.GEQUAL,[lc]:i.GREATER,[cc]:i.NOTEQUAL};function _e(T,g){if(g.type===sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===Ur||g.magFilter===Hi||g.magFilter===Fn||g.minFilter===zt||g.minFilter===Ur||g.minFilter===Hi||g.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,k[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,k[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,k[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ue[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ge[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==Hi&&g.minFilter!==Fn||g.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Fe(T,g){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",I));const Z=g.source;let j=h.get(Z);j===void 0&&(j={},h.set(Z,j));const $=z(g);if($!==T.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[$].usedTimes++;const Me=j[T.__cacheKey];Me!==void 0&&(j[T.__cacheKey].usedTimes--,Me.usedTimes===0&&N(g)),T.__cacheKey=$,T.__webglTexture=j[$].texture}return B}function Ke(T,g,B){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);const j=Fe(T,g),$=g.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+B);const Me=n.get($);if($.version!==Me.__version||j===!0){t.activeTexture(i.TEXTURE0+B);const se=Ye.getPrimaries(Ye.workingColorSpace),ce=g.colorSpace===_n?null:Ye.getPrimaries(g.colorSpace),Pe=g.colorSpace===_n||se===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Q=x(g.image,!1,r.maxTextureSize);Q=be(g,Q);const oe=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type);let Ae=A(g.internalFormat,oe,Oe,g.colorSpace,g.isVideoTexture);_e(Z,g);let he;const we=g.mipmaps,Ie=g.isVideoTexture!==!0,Je=Me.__version===void 0||j===!0,P=$.dataReady,ee=y(g,Q);if(g.isDepthTexture)Ae=E(g.format===gi,g.type),Je&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,oe,Oe,null));else if(g.isDataTexture)if(we.length>0){Ie&&Je&&t.texStorage2D(i.TEXTURE_2D,ee,Ae,we[0].width,we[0].height);for(let W=0,X=we.length;W<X;W++)he=we[W],Ie?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,he.width,he.height,oe,Oe,he.data):t.texImage2D(i.TEXTURE_2D,W,Ae,he.width,he.height,0,oe,Oe,he.data);g.generateMipmaps=!1}else Ie?(Je&&t.texStorage2D(i.TEXTURE_2D,ee,Ae,Q.width,Q.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,oe,Oe,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,oe,Oe,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ie&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Ae,we[0].width,we[0].height,Q.depth);for(let W=0,X=we.length;W<X;W++)if(he=we[W],g.format!==Gt)if(oe!==null)if(Ie){if(P)if(g.layerUpdates.size>0){const ne=uo(he.width,he.height,g.format,g.type);for(const Ee of g.layerUpdates){const ke=he.data.subarray(Ee*ne/he.data.BYTES_PER_ELEMENT,(Ee+1)*ne/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Ee,he.width,he.height,1,oe,ke,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,he.width,he.height,Q.depth,oe,he.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ae,he.width,he.height,Q.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,he.width,he.height,Q.depth,oe,Oe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ae,he.width,he.height,Q.depth,0,oe,Oe,he.data)}else{Ie&&Je&&t.texStorage2D(i.TEXTURE_2D,ee,Ae,we[0].width,we[0].height);for(let W=0,X=we.length;W<X;W++)he=we[W],g.format!==Gt?oe!==null?Ie?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,he.width,he.height,oe,he.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ae,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,he.width,he.height,oe,Oe,he.data):t.texImage2D(i.TEXTURE_2D,W,Ae,he.width,he.height,0,oe,Oe,he.data)}else if(g.isDataArrayTexture)if(Ie){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Ae,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const W=uo(Q.width,Q.height,g.format,g.type);for(const X of g.layerUpdates){const ne=Q.data.subarray(X*W/Q.data.BYTES_PER_ELEMENT,(X+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,Q.width,Q.height,1,oe,Oe,ne)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,Oe,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,oe,Oe,Q.data);else if(g.isData3DTexture)Ie?(Je&&t.texStorage3D(i.TEXTURE_3D,ee,Ae,Q.width,Q.height,Q.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,Oe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,oe,Oe,Q.data);else if(g.isFramebufferTexture){if(Je)if(Ie)t.texStorage2D(i.TEXTURE_2D,ee,Ae,Q.width,Q.height);else{let W=Q.width,X=Q.height;for(let ne=0;ne<ee;ne++)t.texImage2D(i.TEXTURE_2D,ne,Ae,W,X,0,oe,Oe,null),W>>=1,X>>=1}}else if(we.length>0){if(Ie&&Je){const W=Ce(we[0]);t.texStorage2D(i.TEXTURE_2D,ee,Ae,W.width,W.height)}for(let W=0,X=we.length;W<X;W++)he=we[W],Ie?P&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,oe,Oe,he):t.texImage2D(i.TEXTURE_2D,W,Ae,oe,Oe,he);g.generateMipmaps=!1}else if(Ie){if(Je){const W=Ce(Q);t.texStorage2D(i.TEXTURE_2D,ee,Ae,W.width,W.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Oe,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ae,oe,Oe,Q);f(g)&&d(Z),Me.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function H(T,g,B){if(g.image.length!==6)return;const Z=Fe(T,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const $=n.get(j);if(j.version!==$.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);const Me=Ye.getPrimaries(Ye.workingColorSpace),se=g.colorSpace===_n?null:Ye.getPrimaries(g.colorSpace),ce=g.colorSpace===_n||Me===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Pe=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,oe=[];for(let X=0;X<6;X++)!Pe&&!Q?oe[X]=x(g.image[X],!0,r.maxCubemapSize):oe[X]=Q?g.image[X].image:g.image[X],oe[X]=be(g,oe[X]);const Oe=oe[0],Ae=s.convert(g.format,g.colorSpace),he=s.convert(g.type),we=A(g.internalFormat,Ae,he,g.colorSpace),Ie=g.isVideoTexture!==!0,Je=$.__version===void 0||Z===!0,P=j.dataReady;let ee=y(g,Oe);_e(i.TEXTURE_CUBE_MAP,g);let W;if(Pe){Ie&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,we,Oe.width,Oe.height);for(let X=0;X<6;X++){W=oe[X].mipmaps;for(let ne=0;ne<W.length;ne++){const Ee=W[ne];g.format!==Gt?Ae!==null?Ie?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne,we,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne,0,0,Ee.width,Ee.height,Ae,he,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne,we,Ee.width,Ee.height,0,Ae,he,Ee.data)}}}else{if(W=g.mipmaps,Ie&&Je){W.length>0&&ee++;const X=Ce(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,we,X.width,X.height)}for(let X=0;X<6;X++)if(Q){Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,oe[X].width,oe[X].height,Ae,he,oe[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,we,oe[X].width,oe[X].height,0,Ae,he,oe[X].data);for(let ne=0;ne<W.length;ne++){const ke=W[ne].image[X].image;Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne+1,0,0,ke.width,ke.height,Ae,he,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne+1,we,ke.width,ke.height,0,Ae,he,ke.data)}}else{Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ae,he,oe[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,we,Ae,he,oe[X]);for(let ne=0;ne<W.length;ne++){const Ee=W[ne];Ie?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne+1,0,0,Ae,he,Ee.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ne+1,we,Ae,he,Ee.image[X])}}}f(g)&&d(i.TEXTURE_CUBE_MAP),$.__version=j.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function J(T,g,B,Z,j,$){const Me=s.convert(B.format,B.colorSpace),se=s.convert(B.type),ce=A(B.internalFormat,Me,se,B.colorSpace);if(!n.get(g).__hasExternalTextures){const Q=Math.max(1,g.width>>$),oe=Math.max(1,g.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,$,ce,Q,oe,g.depth,0,Me,se,null):t.texImage2D(j,$,ce,Q,oe,0,Me,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),xe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,n.get(B).__webglTexture,0,$e(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,n.get(B).__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(T,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const Z=g.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=E(g.stencilBuffer,j),Me=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=$e(g);xe(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,$,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{const Z=g.textures;for(let j=0;j<Z.length;j++){const $=Z[j],Me=s.convert($.format,$.colorSpace),se=s.convert($.type),ce=A($.internalFormat,Me,se,$.colorSpace),Pe=$e(g);B&&xe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ce,g.width,g.height):xe(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ce,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const Z=n.get(g.depthTexture).__webglTexture,j=$e(g);if(g.depthTexture.format===hi)xe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===gi)xe(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Re(T){const g=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");le(g.__webglFramebuffer,T)}else if(B){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]=i.createRenderbuffer(),fe(g.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),fe(g.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(T,g,B){const Z=n.get(T);g!==void 0&&J(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Re(T)}function Ne(T){const g=T.texture,B=n.get(T),Z=n.get(g);T.addEventListener("dispose",R);const j=T.textures,$=T.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let ce=0;ce<g.mipmaps.length;ce++)B.__webglFramebuffer[se][ce]=i.createFramebuffer()}else B.__webglFramebuffer[se]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<g.mipmaps.length;se++)B.__webglFramebuffer[se]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Me)for(let se=0,ce=j.length;se<ce;se++){const Pe=n.get(j[se]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&xe(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const ce=j[se];B.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[se]);const Pe=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),oe=A(ce.internalFormat,Pe,Q,ce.colorSpace,T.isXRRenderTarget===!0),Oe=$e(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,oe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,B.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),_e(i.TEXTURE_CUBE_MAP,g);for(let se=0;se<6;se++)if(g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)J(B.__webglFramebuffer[se][ce],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else J(B.__webglFramebuffer[se],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);f(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let se=0,ce=j.length;se<ce;se++){const Pe=j[se],Q=n.get(Pe);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),_e(i.TEXTURE_2D,Pe),J(B.__webglFramebuffer,T,Pe,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),f(Pe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),_e(se,g),g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)J(B.__webglFramebuffer[ce],T,g,i.COLOR_ATTACHMENT0,se,ce);else J(B.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,se,0);f(g)&&d(se),t.unbindTexture()}T.depthBuffer&&Re(T)}function Qe(T){const g=T.textures;for(let B=0,Z=g.length;B<Z;B++){const j=g[B];if(f(j)){const $=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(j).__webglTexture;t.bindTexture($,Me),d($),t.unbindTexture()}}}const w=[],it=[];function qe(T){if(T.samples>0){if(xe(T)===!1){const g=T.textures,B=T.width,Z=T.height;let j=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),se=g.length>1;if(se)for(let ce=0;ce<g.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ce=0;ce<g.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Pe=n.get(g[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,j,i.NEAREST),l===!0&&(w.length=0,it.length=0,w.push(i.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(w.push($),it.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let ce=0;ce<g.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Pe=n.get(g[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function $e(T){return Math.min(r.maxSamples,T.samples)}function xe(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function rt(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function be(T,g){const B=T.colorSpace,Z=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==En&&B!==_n&&(Ye.getTransfer(B)===Ze?(Z!==Gt||j!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function Ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=C,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Ue,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=J,this.useMultisampledRTT=xe}function Cp(i,e){function t(n,r=_n){let s;const o=Ye.getTransfer(r);if(n===on)return i.UNSIGNED_BYTE;if(n===qs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ys)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ao)return i.BYTE;if(n===bo)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===Xs)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===Ro)return i.ALPHA;if(n===Co)return i.RGB;if(n===Gt)return i.RGBA;if(n===Po)return i.LUMINANCE;if(n===Lo)return i.LUMINANCE_ALPHA;if(n===hi)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Do)return i.RED;if(n===Ks)return i.RED_INTEGER;if(n===Uo)return i.RG;if(n===$s)return i.RG_INTEGER;if(n===Zs)return i.RGBA_INTEGER;if(n===cr||n===ur||n===hr||n===dr)if(o===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ps||n===ms||n===gs||n===_s)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ps)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ms)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_s)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vs||n===xs||n===Ms)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vs||n===xs)return o===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ms)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ss||n===Es||n===ys||n===Ts||n===As||n===bs||n===ws||n===Rs||n===Cs||n===Ps||n===Ls||n===Ds||n===Us||n===Is)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ss)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Es)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ys)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ts)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===As)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bs)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ws)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rs)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cs)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ps)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ls)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ds)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Us)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Is)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===Ns||n===Fs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fr)return o===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ns)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Io||n===Os||n===Bs||n===zs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Os)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Pp extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _t extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lp={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,n),d=this._getHandJoint(c,x);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Dp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Up=`
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

}`;class Ip{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:Dp,fragmentShader:Up,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Np extends xi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,p=null,h=null,m=null,v=null;const x=new Ip,f=t.getContextAttributes();let d=null,A=null;const E=[],y=[],I=new ze;let R=null;const b=new Rt;b.layers.enable(1),b.viewport=new je;const N=new Rt;N.layers.enable(2),N.viewport=new je;const S=[b,N],M=new Pp;M.layers.enable(1),M.layers.enable(2);let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=E[H];return J===void 0&&(J=new rs,E[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=E[H];return J===void 0&&(J=new rs,E[H]=J),J.getGripSpace()},this.getHand=function(H){let J=E[H];return J===void 0&&(J=new rs,E[H]=J),J.getHandSpace()};function z(H){const J=y.indexOf(H.inputSource);if(J===-1)return;const fe=E[J];fe!==void 0&&(fe.update(H.inputSource,H.frame,c||o),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",q);for(let H=0;H<E.length;H++){const J=y[H];J!==null&&(y[H]=null,E[H].disconnect(J))}C=null,G=null,x.reset(),e.setRenderTarget(d),m=null,h=null,p=null,r=null,A=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new zn(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:on,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,fe=null,le=null;f.depth&&(le=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=f.stencil?gi:hi,fe=f.stencil?mi:Bn);const Re={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};p=new XRWebGLBinding(r,t),h=p.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new zn(h.textureWidth,h.textureHeight,{format:Gt,type:on,depthTexture:new Zo(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(H){for(let J=0;J<H.removed.length;J++){const fe=H.removed[J],le=y.indexOf(fe);le>=0&&(y[le]=null,E[le].disconnect(fe))}for(let J=0;J<H.added.length;J++){const fe=H.added[J];let le=y.indexOf(fe);if(le===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=y.length){y.push(fe),le=Ue;break}else if(y[Ue]===null){y[Ue]=fe,le=Ue;break}if(le===-1)break}const Re=E[le];Re&&Re.connect(fe)}}const V=new U,K=new U;function k(H,J,fe){V.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const le=V.distanceTo(K),Re=J.projectionMatrix.elements,Ue=fe.projectionMatrix.elements,Ne=Re[14]/(Re[10]-1),Qe=Re[14]/(Re[10]+1),w=(Re[9]+1)/Re[5],it=(Re[9]-1)/Re[5],qe=(Re[8]-1)/Re[0],$e=(Ue[8]+1)/Ue[0],xe=Ne*qe,rt=Ne*$e,be=le/(-qe+$e),Ce=be*-qe;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ce),H.translateZ(be),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const T=Ne+be,g=Qe+be,B=xe-Ce,Z=rt+(le-Ce),j=w*Qe/g*T,$=it*Qe/g*T;H.projectionMatrix.makePerspective(B,Z,j,$,T,g),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function ue(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.texture!==null&&(H.near=x.depthNear,H.far=x.depthFar),M.near=N.near=b.near=H.near,M.far=N.far=b.far=H.far,(C!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,G=M.far,b.near=C,b.far=G,N.near=C,N.far=G,b.updateProjectionMatrix(),N.updateProjectionMatrix(),H.updateProjectionMatrix());const J=H.parent,fe=M.cameras;ue(M,J);for(let le=0;le<fe.length;le++)ue(fe[le],J);fe.length===2?k(M,b,N):M.projectionMatrix.copy(b.projectionMatrix),ge(H,M,J)};function ge(H,J,fe){fe===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ui*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _e=null;function Fe(H,J){if(u=J.getViewerPose(c||o),v=J,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let le=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let Ue=0;Ue<fe.length;Ue++){const Ne=fe[Ue];let Qe=null;if(m!==null)Qe=m.getViewport(Ne);else{const it=p.getViewSubImage(h,Ne);Qe=it.viewport,Ue===0&&(e.setRenderTargetTextures(A,it.colorTexture,h.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(A))}let w=S[Ue];w===void 0&&(w=new Rt,w.layers.enable(Ue),w.viewport=new je,S[Ue]=w),w.matrix.fromArray(Ne.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ne.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ue===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(w)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ue=p.getDepthInformation(fe[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,r.renderState)}}for(let fe=0;fe<E.length;fe++){const le=y[fe],Re=E[fe];le!==null&&Re!==void 0&&Re.update(le,J,c||o)}_e&&_e(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const Ke=new Ko;Ke.setAnimationLoop(Fe),this.setAnimationLoop=function(H){_e=H},this.dispose=function(){}}}const Pn=new $t,Fp=new nt;function Op(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Xo(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function r(f,d,A,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),p(f,d)):d.isMeshPhongMaterial?(s(f,d),u(f,d)):d.isMeshStandardMaterial?(s(f,d),h(f,d),d.isMeshPhysicalMaterial&&m(f,d,y)):d.isMeshMatcapMaterial?(s(f,d),v(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),x(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,A,E):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Et&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Et&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const A=e.get(d),E=A.envMap,y=A.envMapRotation;E&&(f.envMap.value=E,Pn.copy(y),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),f.envMapRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(Pn)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,A,E){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*A,f.scale.value=E*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function h(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,A){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Et&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,d){d.matcap&&(f.matcap.value=d.matcap)}function x(f,d){const A=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Bp(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const y=E.program;n.uniformBlockBinding(A,y)}function c(A,E){let y=r[A.id];y===void 0&&(v(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",f));const I=E.program;n.updateUBOMapping(A,I);const R=e.render.frame;s[A.id]!==R&&(h(A),s[A.id]=R)}function u(A){const E=p();A.__bindingPointIndex=E;const y=i.createBuffer(),I=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function p(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const E=r[A.id],y=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,b=y.length;R<b;R++){const N=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,M=N.length;S<M;S++){const C=N[S];if(m(C,R,S,I)===!0){const G=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let q=0;q<z.length;q++){const V=z[q],K=x(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,G+Y,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,E,y,I){const R=A.value,b=E+"_"+y;if(I[b]===void 0)return typeof R=="number"||typeof R=="boolean"?I[b]=R:I[b]=R.clone(),!0;{const N=I[b];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return I[b]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function v(A){const E=A.uniforms;let y=0;const I=16;for(let b=0,N=E.length;b<N;b++){const S=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,C=S.length;M<C;M++){const G=S[M],z=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,q=z.length;Y<q;Y++){const V=z[Y],K=x(V),k=y%I;k!==0&&I-k<K.boundary&&(y+=I-k),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=K.storage}}}const R=y%I;return R>0&&(y+=I-R),A.__size=y,A.__cache={},this}function x(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function f(A){const E=A.target;E.removeEventListener("dispose",f);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class zp{constructor(e={}){const{canvas:t=Rc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,f=null;const d=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=xn,this.toneMappingExposure=1;const E=this;let y=!1,I=0,R=0,b=null,N=-1,S=null;const M=new je,C=new je;let G=null;const z=new Be(0);let Y=0,q=t.width,V=t.height,K=1,k=null,ue=null;const ge=new je(0,0,q,V),_e=new je(0,0,q,V);let Fe=!1;const Ke=new ea;let H=!1,J=!1;const fe=new nt,le=new U,Re=new je,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Qe(){return b===null?K:1}let w=n;function it(_,L){return t.getContext(_,L)}try{const _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vs}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",ne,!1),w===null){const L="webgl2";if(w=it(L,_),w===null)throw it(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let qe,$e,xe,rt,be,Ce,T,g,B,Z,j,$,Me,se,ce,Pe,Q,oe,Oe,Ae,he,we,Ie,Je;function P(){qe=new Xd(w),qe.init(),we=new Cp(w,qe),$e=new zd(w,qe,e,we),xe=new bp(w),rt=new Kd(w),be=new dp,Ce=new Rp(w,qe,xe,be,$e,we,rt),T=new Hd(E),g=new Wd(E),B=new tu(w),Ie=new Od(w,B),Z=new qd(w,B,rt,Ie),j=new Zd(w,Z,B,rt),Oe=new $d(w,$e,Ce),Pe=new kd(be),$=new hp(E,T,g,qe,$e,Ie,Pe),Me=new Op(E,be),se=new pp,ce=new Mp(qe),oe=new Fd(E,T,g,xe,j,h,l),Q=new Ap(E,j,$e),Je=new Bp(w,rt,$e,xe),Ae=new Bd(w,qe,rt),he=new Yd(w,qe,rt),rt.programs=$.programs,E.capabilities=$e,E.extensions=qe,E.properties=be,E.renderLists=se,E.shadowMap=Q,E.state=xe,E.info=rt}P();const ee=new Np(E,w);this.xr=ee,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const _=qe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=qe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(_){_!==void 0&&(K=_,this.setSize(q,V,!1))},this.getSize=function(_){return _.set(q,V)},this.setSize=function(_,L,F=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,V=L,t.width=Math.floor(_*K),t.height=Math.floor(L*K),F===!0&&(t.style.width=_+"px",t.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(q*K,V*K).floor()},this.setDrawingBufferSize=function(_,L,F){q=_,V=L,K=F,t.width=Math.floor(_*F),t.height=Math.floor(L*F),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(M)},this.getViewport=function(_){return _.copy(ge)},this.setViewport=function(_,L,F,O){_.isVector4?ge.set(_.x,_.y,_.z,_.w):ge.set(_,L,F,O),xe.viewport(M.copy(ge).multiplyScalar(K).round())},this.getScissor=function(_){return _.copy(_e)},this.setScissor=function(_,L,F,O){_.isVector4?_e.set(_.x,_.y,_.z,_.w):_e.set(_,L,F,O),xe.scissor(C.copy(_e).multiplyScalar(K).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(_){xe.setScissorTest(Fe=_)},this.setOpaqueSort=function(_){k=_},this.setTransparentSort=function(_){ue=_},this.getClearColor=function(_){return _.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(_=!0,L=!0,F=!0){let O=0;if(_){let D=!1;if(b!==null){const te=b.texture.format;D=te===Zs||te===$s||te===Ks}if(D){const te=b.texture.type,ae=te===on||te===Bn||te===Di||te===mi||te===qs||te===Ys,pe=oe.getClearColor(),me=oe.getClearAlpha(),ye=pe.r,Te=pe.g,Se=pe.b;ae?(m[0]=ye,m[1]=Te,m[2]=Se,m[3]=me,w.clearBufferuiv(w.COLOR,0,m)):(v[0]=ye,v[1]=Te,v[2]=Se,v[3]=me,w.clearBufferiv(w.COLOR,0,v))}else O|=w.COLOR_BUFFER_BIT}L&&(O|=w.DEPTH_BUFFER_BIT),F&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),se.dispose(),ce.dispose(),be.dispose(),T.dispose(),g.dispose(),j.dispose(),Ie.dispose(),Je.dispose(),$.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Vt),ee.removeEventListener("sessionend",aa),Tn.stop()};function W(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const _=rt.autoReset,L=Q.enabled,F=Q.autoUpdate,O=Q.needsUpdate,D=Q.type;P(),rt.autoReset=_,Q.enabled=L,Q.autoUpdate=F,Q.needsUpdate=O,Q.type=D}function ne(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ee(_){const L=_.target;L.removeEventListener("dispose",Ee),ke(L)}function ke(_){st(_),be.remove(_)}function st(_){const L=be.get(_).programs;L!==void 0&&(L.forEach(function(F){$.releaseProgram(F)}),_.isShaderMaterial&&$.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,F,O,D,te){L===null&&(L=Ue);const ae=D.isMesh&&D.matrixWorld.determinant()<0,pe=fl(_,L,F,O,D);xe.setMaterial(O,ae);let me=F.index,ye=1;if(O.wireframe===!0){if(me=Z.getWireframeAttribute(F),me===void 0)return;ye=2}const Te=F.drawRange,Se=F.attributes.position;let Ve=Te.start*ye,et=(Te.start+Te.count)*ye;te!==null&&(Ve=Math.max(Ve,te.start*ye),et=Math.min(et,(te.start+te.count)*ye)),me!==null?(Ve=Math.max(Ve,0),et=Math.min(et,me.count)):Se!=null&&(Ve=Math.max(Ve,0),et=Math.min(et,Se.count));const tt=et-Ve;if(tt<0||tt===1/0)return;Ie.setup(D,O,pe,F,me);let Tt,We=Ae;if(me!==null&&(Tt=B.get(me),We=he,We.setIndex(Tt)),D.isMesh)O.wireframe===!0?(xe.setLineWidth(O.wireframeLinewidth*Qe()),We.setMode(w.LINES)):We.setMode(w.TRIANGLES);else if(D.isLine){let ve=O.linewidth;ve===void 0&&(ve=1),xe.setLineWidth(ve*Qe()),D.isLineSegments?We.setMode(w.LINES):D.isLineLoop?We.setMode(w.LINE_LOOP):We.setMode(w.LINE_STRIP)}else D.isPoints?We.setMode(w.POINTS):D.isSprite&&We.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)We.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))We.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const ve=D._multiDrawStarts,dt=D._multiDrawCounts,Xe=D._multiDrawCount,It=me?B.get(me).bytesPerElement:1,Gn=be.get(O).currentProgram.getUniforms();for(let At=0;At<Xe;At++)Gn.setValue(w,"_gl_DrawID",At),We.render(ve[At]/It,dt[At])}else if(D.isInstancedMesh)We.renderInstances(Ve,tt,D.count);else if(F.isInstancedBufferGeometry){const ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,dt=Math.min(F.instanceCount,ve);We.renderInstances(Ve,tt,dt)}else We.render(Ve,tt)};function ht(_,L,F){_.transparent===!0&&_.side===rn&&_.forceSinglePass===!1?(_.side=Et,_.needsUpdate=!0,ki(_,L,F),_.side=Mn,_.needsUpdate=!0,ki(_,L,F),_.side=rn):ki(_,L,F)}this.compile=function(_,L,F=null){F===null&&(F=_),f=ce.get(F),f.init(L),A.push(f),F.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),_!==F&&_.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const O=new Set;return _.traverse(function(D){const te=D.material;if(te)if(Array.isArray(te))for(let ae=0;ae<te.length;ae++){const pe=te[ae];ht(pe,F,D),O.add(pe)}else ht(te,F,D),O.add(te)}),A.pop(),f=null,O},this.compileAsync=function(_,L,F=null){const O=this.compile(_,L,F);return new Promise(D=>{function te(){if(O.forEach(function(ae){be.get(ae).currentProgram.isReady()&&O.delete(ae)}),O.size===0){D(_);return}setTimeout(te,10)}qe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ge=null;function Zt(_){Ge&&Ge(_)}function Vt(){Tn.stop()}function aa(){Tn.start()}const Tn=new Ko;Tn.setAnimationLoop(Zt),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(_){Ge=_,ee.setAnimationLoop(_),_===null?Tn.stop():Tn.start()},ee.addEventListener("sessionstart",Vt),ee.addEventListener("sessionend",aa),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(L),L=ee.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,L,b),f=ce.get(_,A.length),f.init(L),A.push(f),fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ke.setFromProjectionMatrix(fe),J=this.localClippingEnabled,H=Pe.init(this.clippingPlanes,J),x=se.get(_,d.length),x.init(),d.push(x),ee.enabled===!0&&ee.isPresenting===!0){const te=E.xr.getDepthSensingMesh();te!==null&&Cr(te,L,-1/0,E.sortObjects)}Cr(_,L,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(k,ue),Ne=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ne&&oe.addToRenderList(x,_),this.info.render.frame++,H===!0&&Pe.beginShadows();const F=f.state.shadowsArray;Q.render(F,_,L),H===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=x.opaque,D=x.transmissive;if(f.setupLights(),L.isArrayCamera){const te=L.cameras;if(D.length>0)for(let ae=0,pe=te.length;ae<pe;ae++){const me=te[ae];la(O,D,_,me)}Ne&&oe.render(_);for(let ae=0,pe=te.length;ae<pe;ae++){const me=te[ae];oa(x,_,me,me.viewport)}}else D.length>0&&la(O,D,_,L),Ne&&oe.render(_),oa(x,_,L);b!==null&&(Ce.updateMultisampleRenderTarget(b),Ce.updateRenderTargetMipmap(b)),_.isScene===!0&&_.onAfterRender(E,_,L),Ie.resetDefaultState(),N=-1,S=null,A.pop(),A.length>0?(f=A[A.length-1],H===!0&&Pe.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Cr(_,L,F,O){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Ke.intersectsSprite(_)){O&&Re.setFromMatrixPosition(_.matrixWorld).applyMatrix4(fe);const ae=j.update(_),pe=_.material;pe.visible&&x.push(_,ae,pe,F,Re.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Ke.intersectsObject(_))){const ae=j.update(_),pe=_.material;if(O&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Re.copy(_.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Re.copy(ae.boundingSphere.center)),Re.applyMatrix4(_.matrixWorld).applyMatrix4(fe)),Array.isArray(pe)){const me=ae.groups;for(let ye=0,Te=me.length;ye<Te;ye++){const Se=me[ye],Ve=pe[Se.materialIndex];Ve&&Ve.visible&&x.push(_,ae,Ve,F,Re.z,Se)}}else pe.visible&&x.push(_,ae,pe,F,Re.z,null)}}const te=_.children;for(let ae=0,pe=te.length;ae<pe;ae++)Cr(te[ae],L,F,O)}function oa(_,L,F,O){const D=_.opaque,te=_.transmissive,ae=_.transparent;f.setupLightsView(F),H===!0&&Pe.setGlobalState(E.clippingPlanes,F),O&&xe.viewport(M.copy(O)),D.length>0&&zi(D,L,F),te.length>0&&zi(te,L,F),ae.length>0&&zi(ae,L,F),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function la(_,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new zn(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Ii:on,minFilter:Fn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const te=f.state.transmissionRenderTarget[O.id],ae=O.viewport||M;te.setSize(ae.z,ae.w);const pe=E.getRenderTarget();E.setRenderTarget(te),E.getClearColor(z),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),Ne?oe.render(F):E.clear();const me=E.toneMapping;E.toneMapping=xn;const ye=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),H===!0&&Pe.setGlobalState(E.clippingPlanes,O),zi(_,F,O),Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Se=0,Ve=L.length;Se<Ve;Se++){const et=L[Se],tt=et.object,Tt=et.geometry,We=et.material,ve=et.group;if(We.side===rn&&tt.layers.test(O.layers)){const dt=We.side;We.side=Et,We.needsUpdate=!0,ca(tt,F,O,Tt,We,ve),We.side=dt,We.needsUpdate=!0,Te=!0}}Te===!0&&(Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te))}E.setRenderTarget(pe),E.setClearColor(z,Y),ye!==void 0&&(O.viewport=ye),E.toneMapping=me}function zi(_,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let D=0,te=_.length;D<te;D++){const ae=_[D],pe=ae.object,me=ae.geometry,ye=O===null?ae.material:O,Te=ae.group;pe.layers.test(F.layers)&&ca(pe,L,F,me,ye,Te)}}function ca(_,L,F,O,D,te){_.onBeforeRender(E,L,F,O,D,te),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.transparent===!0&&D.side===rn&&D.forceSinglePass===!1?(D.side=Et,D.needsUpdate=!0,E.renderBufferDirect(F,L,O,D,_,te),D.side=Mn,D.needsUpdate=!0,E.renderBufferDirect(F,L,O,D,_,te),D.side=rn):E.renderBufferDirect(F,L,O,D,_,te),_.onAfterRender(E,L,F,O,D,te)}function ki(_,L,F){L.isScene!==!0&&(L=Ue);const O=be.get(_),D=f.state.lights,te=f.state.shadowsArray,ae=D.state.version,pe=$.getParameters(_,D.state,te,L,F),me=$.getProgramCacheKey(pe);let ye=O.programs;O.environment=_.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(_.isMeshStandardMaterial?g:T).get(_.envMap||O.environment),O.envMapRotation=O.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,ye===void 0&&(_.addEventListener("dispose",Ee),ye=new Map,O.programs=ye);let Te=ye.get(me);if(Te!==void 0){if(O.currentProgram===Te&&O.lightsStateVersion===ae)return ha(_,pe),Te}else pe.uniforms=$.getUniforms(_),_.onBeforeCompile(pe,E),Te=$.acquireProgram(pe,me),ye.set(me,Te),O.uniforms=pe.uniforms;const Se=O.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Se.clippingPlanes=Pe.uniform),ha(_,pe),O.needsLights=ml(_),O.lightsStateVersion=ae,O.needsLights&&(Se.ambientLightColor.value=D.state.ambient,Se.lightProbe.value=D.state.probe,Se.directionalLights.value=D.state.directional,Se.directionalLightShadows.value=D.state.directionalShadow,Se.spotLights.value=D.state.spot,Se.spotLightShadows.value=D.state.spotShadow,Se.rectAreaLights.value=D.state.rectArea,Se.ltc_1.value=D.state.rectAreaLTC1,Se.ltc_2.value=D.state.rectAreaLTC2,Se.pointLights.value=D.state.point,Se.pointLightShadows.value=D.state.pointShadow,Se.hemisphereLights.value=D.state.hemi,Se.directionalShadowMap.value=D.state.directionalShadowMap,Se.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Se.spotShadowMap.value=D.state.spotShadowMap,Se.spotLightMatrix.value=D.state.spotLightMatrix,Se.spotLightMap.value=D.state.spotLightMap,Se.pointShadowMap.value=D.state.pointShadowMap,Se.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=Te,O.uniformsList=null,Te}function ua(_){if(_.uniformsList===null){const L=_.currentProgram.getUniforms();_.uniformsList=pr.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function ha(_,L){const F=be.get(_);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function fl(_,L,F,O,D){L.isScene!==!0&&(L=Ue),Ce.resetTextureUnits();const te=L.fog,ae=O.isMeshStandardMaterial?L.environment:null,pe=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:En,me=(O.isMeshStandardMaterial?g:T).get(O.envMap||ae),ye=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Te=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!F.morphAttributes.position,Ve=!!F.morphAttributes.normal,et=!!F.morphAttributes.color;let tt=xn;O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(tt=E.toneMapping);const Tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,We=Tt!==void 0?Tt.length:0,ve=be.get(O),dt=f.state.lights;if(H===!0&&(J===!0||_!==S)){const Ct=_===S&&O.id===N;Pe.setState(O,_,Ct)}let Xe=!1;O.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==dt.state.version||ve.outputColorSpace!==pe||D.isBatchedMesh&&ve.batching===!1||!D.isBatchedMesh&&ve.batching===!0||D.isBatchedMesh&&ve.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&ve.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&ve.instancing===!1||!D.isInstancedMesh&&ve.instancing===!0||D.isSkinnedMesh&&ve.skinning===!1||!D.isSkinnedMesh&&ve.skinning===!0||D.isInstancedMesh&&ve.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&ve.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&ve.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&ve.instancingMorph===!1&&D.morphTexture!==null||ve.envMap!==me||O.fog===!0&&ve.fog!==te||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Pe.numPlanes||ve.numIntersection!==Pe.numIntersection)||ve.vertexAlphas!==ye||ve.vertexTangents!==Te||ve.morphTargets!==Se||ve.morphNormals!==Ve||ve.morphColors!==et||ve.toneMapping!==tt||ve.morphTargetsCount!==We)&&(Xe=!0):(Xe=!0,ve.__version=O.version);let It=ve.currentProgram;Xe===!0&&(It=ki(O,L,D));let Gn=!1,At=!1,Pr=!1;const at=It.getUniforms(),un=ve.uniforms;if(xe.useProgram(It.program)&&(Gn=!0,At=!0,Pr=!0),O.id!==N&&(N=O.id,At=!0),Gn||S!==_){at.setValue(w,"projectionMatrix",_.projectionMatrix),at.setValue(w,"viewMatrix",_.matrixWorldInverse);const Ct=at.map.cameraPosition;Ct!==void 0&&Ct.setValue(w,le.setFromMatrixPosition(_.matrixWorld)),$e.logarithmicDepthBuffer&&at.setValue(w,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&at.setValue(w,"isOrthographic",_.isOrthographicCamera===!0),S!==_&&(S=_,At=!0,Pr=!0)}if(D.isSkinnedMesh){at.setOptional(w,D,"bindMatrix"),at.setOptional(w,D,"bindMatrixInverse");const Ct=D.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),at.setValue(w,"boneTexture",Ct.boneTexture,Ce))}D.isBatchedMesh&&(at.setOptional(w,D,"batchingTexture"),at.setValue(w,"batchingTexture",D._matricesTexture,Ce),at.setOptional(w,D,"batchingIdTexture"),at.setValue(w,"batchingIdTexture",D._indirectTexture,Ce),at.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&at.setValue(w,"batchingColorTexture",D._colorsTexture,Ce));const Lr=F.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&Oe.update(D,F,It),(At||ve.receiveShadow!==D.receiveShadow)&&(ve.receiveShadow=D.receiveShadow,at.setValue(w,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(un.envMap.value=me,un.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(un.envMapIntensity.value=L.environmentIntensity),At&&(at.setValue(w,"toneMappingExposure",E.toneMappingExposure),ve.needsLights&&pl(un,Pr),te&&O.fog===!0&&Me.refreshFogUniforms(un,te),Me.refreshMaterialUniforms(un,O,K,V,f.state.transmissionRenderTarget[_.id]),pr.upload(w,ua(ve),un,Ce)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(pr.upload(w,ua(ve),un,Ce),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&at.setValue(w,"center",D.center),at.setValue(w,"modelViewMatrix",D.modelViewMatrix),at.setValue(w,"normalMatrix",D.normalMatrix),at.setValue(w,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ct=O.uniformsGroups;for(let Dr=0,gl=Ct.length;Dr<gl;Dr++){const da=Ct[Dr];Je.update(da,It),Je.bind(da,It)}}return It}function pl(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function ml(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(_,L,F){be.get(_.texture).__webglTexture=L,be.get(_.depthTexture).__webglTexture=F;const O=be.get(_);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,L){const F=be.get(_);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(_,L=0,F=0){b=_,I=L,R=F;let O=!0,D=null,te=!1,ae=!1;if(_){const me=be.get(_);me.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(w.FRAMEBUFFER,null),O=!1):me.__webglFramebuffer===void 0?Ce.setupRenderTarget(_):me.__hasExternalTextures&&Ce.rebindTextures(_,be.get(_.texture).__webglTexture,be.get(_.depthTexture).__webglTexture);const ye=_.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ae=!0);const Te=be.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?D=Te[L][F]:D=Te[L],te=!0):_.samples>0&&Ce.useMultisampledRTT(_)===!1?D=be.get(_).__webglMultisampledFramebuffer:Array.isArray(Te)?D=Te[F]:D=Te,M.copy(_.viewport),C.copy(_.scissor),G=_.scissorTest}else M.copy(ge).multiplyScalar(K).floor(),C.copy(_e).multiplyScalar(K).floor(),G=Fe;if(xe.bindFramebuffer(w.FRAMEBUFFER,D)&&O&&xe.drawBuffers(_,D),xe.viewport(M),xe.scissor(C),xe.setScissorTest(G),te){const me=be.get(_.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,me.__webglTexture,F)}else if(ae){const me=be.get(_.texture),ye=L||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,me.__webglTexture,F||0,ye)}N=-1},this.readRenderTargetPixels=function(_,L,F,O,D,te,ae){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=be.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){xe.bindFramebuffer(w.FRAMEBUFFER,pe);try{const me=_.texture,ye=me.format,Te=me.type;if(!$e.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-O&&F>=0&&F<=_.height-D&&w.readPixels(L,F,O,D,we.convert(ye),we.convert(Te),te)}finally{const me=b!==null?be.get(b).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(_,L,F,O,D,te,ae){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=be.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){xe.bindFramebuffer(w.FRAMEBUFFER,pe);try{const me=_.texture,ye=me.format,Te=me.type;if(!$e.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=_.width-O&&F>=0&&F<=_.height-D){const Se=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Se),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),w.readPixels(L,F,O,D,we.convert(ye),we.convert(Te),0),w.flush();const Ve=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await Cc(w,Ve,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Se),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te)}finally{w.deleteBuffer(Se),w.deleteSync(Ve)}return te}}finally{const me=b!==null?be.get(b).__webglFramebuffer:null;xe.bindFramebuffer(w.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(_,L=null,F=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,_=arguments[1]);const O=Math.pow(2,-F),D=Math.floor(_.image.width*O),te=Math.floor(_.image.height*O),ae=L!==null?L.x:0,pe=L!==null?L.y:0;Ce.setTexture2D(_,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,ae,pe,D,te),xe.unbindTexture()},this.copyTextureToTexture=function(_,L,F=null,O=null,D=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,_=arguments[1],L=arguments[2],D=arguments[3]||0,F=null);let te,ae,pe,me,ye,Te;F!==null?(te=F.max.x-F.min.x,ae=F.max.y-F.min.y,pe=F.min.x,me=F.min.y):(te=_.image.width,ae=_.image.height,pe=0,me=0),O!==null?(ye=O.x,Te=O.y):(ye=0,Te=0);const Se=we.convert(L.format),Ve=we.convert(L.type);Ce.setTexture2D(L,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const et=w.getParameter(w.UNPACK_ROW_LENGTH),tt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Tt=w.getParameter(w.UNPACK_SKIP_PIXELS),We=w.getParameter(w.UNPACK_SKIP_ROWS),ve=w.getParameter(w.UNPACK_SKIP_IMAGES),dt=_.isCompressedTexture?_.mipmaps[D]:_.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,dt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,dt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,me),_.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,D,ye,Te,te,ae,Se,Ve,dt.data):_.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,D,ye,Te,dt.width,dt.height,Se,dt.data):w.texSubImage2D(w.TEXTURE_2D,D,ye,Te,te,ae,Se,Ve,dt),w.pixelStorei(w.UNPACK_ROW_LENGTH,et),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,tt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tt),w.pixelStorei(w.UNPACK_SKIP_ROWS,We),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ve),D===0&&L.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(_,L,F=null,O=null,D=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,_=arguments[2],L=arguments[3],D=arguments[4]||0);let te,ae,pe,me,ye,Te,Se,Ve,et;const tt=_.isCompressedTexture?_.mipmaps[D]:_.image;F!==null?(te=F.max.x-F.min.x,ae=F.max.y-F.min.y,pe=F.max.z-F.min.z,me=F.min.x,ye=F.min.y,Te=F.min.z):(te=tt.width,ae=tt.height,pe=tt.depth,me=0,ye=0,Te=0),O!==null?(Se=O.x,Ve=O.y,et=O.z):(Se=0,Ve=0,et=0);const Tt=we.convert(L.format),We=we.convert(L.type);let ve;if(L.isData3DTexture)Ce.setTexture3D(L,0),ve=w.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Ce.setTexture2DArray(L,0),ve=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const dt=w.getParameter(w.UNPACK_ROW_LENGTH),Xe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),It=w.getParameter(w.UNPACK_SKIP_PIXELS),Gn=w.getParameter(w.UNPACK_SKIP_ROWS),At=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,tt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,tt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,me),w.pixelStorei(w.UNPACK_SKIP_ROWS,ye),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Te),_.isDataTexture||_.isData3DTexture?w.texSubImage3D(ve,D,Se,Ve,et,te,ae,pe,Tt,We,tt.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(ve,D,Se,Ve,et,te,ae,pe,Tt,tt.data):w.texSubImage3D(ve,D,Se,Ve,et,te,ae,pe,Tt,We,tt),w.pixelStorei(w.UNPACK_ROW_LENGTH,dt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Xe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,It),w.pixelStorei(w.UNPACK_SKIP_ROWS,Gn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,At),D===0&&L.generateMipmaps&&w.generateMipmap(ve),xe.unbindTexture()},this.initRenderTarget=function(_){be.get(_).__webglFramebuffer===void 0&&Ce.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Ce.setTextureCube(_,0):_.isData3DTexture?Ce.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Ce.setTexture2DArray(_,0):Ce.setTexture2D(_,0),xe.unbindTexture()},this.resetState=function(){I=0,R=0,b=null,xe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===js?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Ar?"display-p3":"srgb"}}class na{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new na(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kp extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tl extends Oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Ws,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ia extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hp extends ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ss=new nt,ho=new U,fo=new U;class nl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(ho),fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fo),t.updateMatrixWorld(),ss.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ss),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const po=new nt,bi=new U,as=new U;class Gp extends nl{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(bi),as.copy(n.position),as.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(as),n.updateMatrixWorld(),r.makeTranslation(-bi.x,-bi.y,-bi.z),po.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po)}}class Vp extends ia{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Gp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wp extends nl{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xp extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Wp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mo(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vs);const re={sky:13625599,fog:14479103,sun:16773849,grass:11069091,grassLight:12447414,grassDark:9427340,path:15653300,wood:13214334,woodDark:11109987,wallCream:16774112,wallPink:16770028,wallMint:14480872,wallLilac:15721722,roofPink:16038084,roofMint:10476744,roofLilac:13351152,roofPeach:16766629,roofBlue:11131120,bearBrown:12159583,bearHoney:14265980,bearCocoa:9398860,bearCream:15917769,snout:16181199,nose:5982783,burden:10129286,burdenStrap:7629410,dressRose:16238804,robeWhite:16645622,robeGold:16770728,leaf:10476698,leafPink:16371160,trunk:11569768,flowerYellow:16769162,flowerPink:16757702,flowerBlue:11455487,water:11131120,stone:14209996,light:16774857},go=new Map;function Yp(i,e,t){const n=`${i},${e},${t}`;let r=go.get(n);return r||(r=new kt(i,e,t),go.set(n,r)),r}const _o=new Map;function il(i){let e=_o.get(i);return e||(e=new tl({color:i}),_o.set(i,e)),e}function de(i,e,t,n,r=0,s=0,o=0){const a=new St(Yp(i,e,t),il(n));return a.position.set(r,s,o),a.castShadow=!0,a.receiveShadow=!0,a}function rl(i={}){const e=i.fur??re.bearBrown,t=i.scale??1,n=i.accessory??"none",r=new _t,s=v=>{const x=new _t;return x.position.set(.2*v,.55,0),x.add(de(.3,.55,.34,e,0,-.28,0)),x.add(de(.32,.14,.38,re.bearCream,0,-.5,.02)),r.add(x),x},o=s(-1),a=s(1),l=new _t;l.position.y=.55,r.add(l),l.add(de(.92,.78,.6,e,0,.4,0)),l.add(de(.6,.5,.1,re.bearCream,0,.38,.28)),l.add(de(.2,.2,.2,e,0,.25,-.34));const c=v=>{const x=new _t;return x.position.set(.55*v,.68,0),x.add(de(.26,.55,.3,e,0,-.22,0)),x.add(de(.28,.14,.32,re.bearCream,0,-.46,0)),l.add(x),x},u=c(-1),p=c(1),h=new _t;h.position.y=1.16,l.add(h),h.add(de(.95,.82,.8,e,0,.4,0)),h.add(de(.24,.24,.16,e,-.36,.9,0)),h.add(de(.24,.24,.16,e,.36,.9,0)),h.add(de(.14,.14,.1,re.bearCream,-.36,.9,.05)),h.add(de(.14,.14,.1,re.bearCream,.36,.9,.05)),h.add(de(.4,.3,.18,re.snout,0,.26,.46)),h.add(de(.16,.12,.08,re.nose,0,.34,.56)),h.add(de(.1,.14,.05,re.nose,-.24,.5,.41)),h.add(de(.1,.14,.05,re.nose,.24,.5,.41)),h.add(de(.12,.08,.04,16233149,-.36,.32,.41)),h.add(de(.12,.08,.04,16233149,.36,.32,.41));const m=i.accessoryColor??re.dressRose;return n==="burden"?(l.add(de(.7,.5,.42,re.burden,0,.45,-.52)),l.add(de(.56,.4,.36,8880506,0,.9,-.5)),l.add(de(.4,.3,.3,re.burdenStrap,0,1.22,-.48)),l.add(de(.1,.6,.08,re.burdenStrap,-.3,.45,.31)),l.add(de(.1,.6,.08,re.burdenStrap,.3,.45,.31))):n==="dress"?(l.add(de(1,.5,.68,m,0,.12,0)),l.add(de(.5,.16,.06,16777215,0,.62,.32))):n==="apron"?l.add(de(.6,.55,.06,m,0,.3,.32)):n==="robe"&&(l.add(de(1.02,.86,.66,m,0,.36,0)),l.add(de(.3,.1,.06,re.robeGold,0,.66,.34)),h.add(de(.9,.5,.2,m,0,.5,-.45))),r.scale.setScalar(t),{root:r,body:l,head:h,armL:u,armR:p,legL:o,legR:a}}function Hs(i,e,t){const n=t?Math.sin(e*9)*.7:0,r=Math.sin(e*2)*.02;i.legL.rotation.x=n,i.legR.rotation.x=-n,i.armL.rotation.x=-n*.8,i.armR.rotation.x=n*.8,i.body.position.y=.55+(t?Math.abs(Math.sin(e*9))*.06:r),i.head.rotation.z=t?Math.sin(e*4.5)*.04:Math.sin(e*1.5)*.03}function Kp(i,e,t=5,n=4.4,r=2.6){const s=new _t;s.add(de(t,r,n,i,0,r/2,0));const o=re.woodDark;s.add(de(.22,r,.22,o,-t/2+.11,r/2,n/2+.02)),s.add(de(.22,r,.22,o,t/2-.11,r/2,n/2+.02)),s.add(de(t,.22,.22,o,0,r-.11,n/2+.02));const a=4;for(let l=0;l<a;l++){const c=t+.6-l*(t+.6)/a;s.add(de(c,.5,n+.6,e,0,r+.25+l*.5,0))}s.add(de(.5,.9,.5,re.stone,t/2-.8,r+1.1,-.8)),s.add(de(.9,1.5,.16,re.woodDark,0,.75,n/2+.06)),s.add(de(.12,.12,.1,re.roofPeach,.28,.75,n/2+.16));for(const l of[-t/2+1.1,t/2-1.1])s.add(de(.8,.8,.12,re.roofBlue,l,1.5,n/2+.06)),s.add(de(.9,.14,.14,re.woodDark,l,1.06,n/2+.08));return s}function $p(i=!1){const e=new _t,t=i?re.leafPink:re.leaf;return e.add(de(.5,1.6,.5,re.trunk,0,.8,0)),e.add(de(1.9,1.3,1.9,t,0,2.2,0)),e.add(de(1.3,.9,1.3,t,0,3.2,0)),e.add(de(.7,.6,.7,t,0,3.9,0)),e}function Zp(){const i=new _t;i.add(de(.18,2.4,.18,re.woodDark,0,1.2,0));const e=de(.4,.4,.4,re.light,0,2.5,0);return e.material=new tl({color:re.light,emissive:16773296,emissiveIntensity:.6}),i.add(e),i.add(de(.5,.12,.5,re.woodDark,0,2.75,0)),i}function jp(){const i=new _t;return i.add(de(1.6,.8,1.6,re.stone,0,.4,0)),i.add(de(1.2,.1,1.2,re.water,0,.82,0)),i.add(de(.14,1.5,.14,re.woodDark,-.7,1.2,0)),i.add(de(.14,1.5,.14,re.woodDark,.7,1.2,0)),i.add(de(1.8,.35,1.1,re.roofPink,0,2.05,0)),i}function vo(i){const e=new _t,t=Math.max(2,Math.round(i/1.2));for(let n=0;n<t;n++)e.add(de(.14,.8,.14,re.wood,-i/2+n*i/(t-1),.4,0));return e.add(de(i,.12,.1,re.wood,0,.62,0)),e.add(de(i,.12,.1,re.wood,0,.32,0)),e}function Jp(i){const e=new _t,t=[],n=Qp(7),r=new St(new kt(220,1,220),il(re.grass));r.position.y=-.5,r.receiveShadow=!0,e.add(r);for(let y=0;y<160;y++){const I=(n()-.5)*180,R=(n()-.5)*160;if(Math.abs(I)<30&&Math.abs(R)<26)continue;const b=n()>.5?re.grassLight:re.grassDark,N=de(1+n()*2,.12,1+n()*2,b,I,.06,R);N.castShadow=!1,e.add(N)}const s=(y,I,R,b)=>{const N=de(R,.14,b,re.path,y,.07,I);N.castShadow=!1,e.add(N)};s(0,0,16,16),s(30,0,44,5),s(-16,0,16,4.5),s(0,-14,4.5,14),s(0,13,4.5,12);const o=[[-10,-12,.35,re.wallCream,re.roofPink],[10,-13,-.3,re.wallPink,re.roofMint],[-14,10,.5,re.wallMint,re.roofLilac],[12,11,-.6,re.wallLilac,re.roofPeach],[-26,-2,1.35,re.wallCream,re.roofBlue],[22,-8,-1.1,re.wallPink,re.roofPink]];for(const[y,I,R,b,N]of o){const S=Kp(b,N);S.position.set(y,0,I),S.rotation.y=R,e.add(S),t.push({x:y,z:I,r:3.6})}const a=jp();a.position.set(0,0,0),e.add(a),t.push({x:0,z:0,r:1.6});const l=[[-18,-18,!0],[18,-19,!1],[-20,17,!1],[20,18,!0],[-32,-12,!1],[-34,8,!0],[30,14,!1],[8,-22,!0],[-8,22,!1],[36,-14,!0],[44,10,!1],[52,-8,!0]];for(const[y,I,R]of l){const b=$p(R);b.position.set(y,0,I),b.rotation.y=n()*Math.PI,e.add(b),t.push({x:y,z:I,r:.9})}for(const[y,I]of[[14,3.4],[26,-3.4],[38,3.4],[-14,3.4]]){const R=Zp();R.position.set(y,0,I),e.add(R),t.push({x:y,z:I,r:.4})}const c=vo(7);c.position.set(-10,0,-8.2),e.add(c);const u=vo(6);u.position.set(-15.4,0,-12),u.rotation.y=Math.PI/2,e.add(u);const p=[re.flowerYellow,re.flowerPink,re.flowerBlue];for(let y=0;y<70;y++){const I=(n()-.5)*120,R=(n()-.5)*90,b=de(.22,.22,.22,p[y%3],I,.2,R);b.castShadow=!1,e.add(b),e.add(de(.08,.2,.08,re.leaf,I,.06,R))}for(const[y,I,R]of[[-40,-20,6],[-42,6,8],[-38,20,5],[-6,-30,9],[12,30,7]]){const b=de(R,1.6+n(),1.2,re.stone,y,.8,I);b.rotation.y=n()*.6,e.add(b),t.push({x:y,z:I,r:R/2}),e.add(de(.8,.5,.8,12893877,y+R/2+.8,.25,I+.5))}const h=new _t,m=new li({color:16767306,transparent:!0,opacity:.8,fog:!1}),v=new St(new kt(2.6,40,2.6),m);v.position.y=20,h.add(v);const x=new St(new kt(1.3,44,1.3),new li({color:16776160,transparent:!0,opacity:.95,fog:!1}));x.position.y=22,h.add(x);const f=new li({color:16771194,fog:!1}),d=new St(new kt(3.4,3.4,3.4),f);d.position.y=42,d.rotation.set(Math.PI/4,0,Math.PI/4),h.add(d);const A=new St(new kt(5,5,5),new li({color:16774072,transparent:!0,opacity:.5,fog:!1}));A.position.y=42,A.rotation.set(0,Math.PI/4,Math.PI/4),h.add(A);const E=new Vp(16771194,3.5,40);return E.position.y=4,h.add(E),h.add(de(.3,2.4,.3,re.woodDark,-1.1,1.2,0)),h.add(de(.3,2.4,.3,re.woodDark,1.1,1.2,0)),h.add(de(2.5,.3,.3,re.woodDark,0,2.5,0)),h.position.set(78,0,0),h.visible=!1,e.add(h),i.add(e),{group:e,colliders:t,lightBeam:h}}function Qp(i){let e=i;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const em=[{id:"christiana",name:"Christiana",fur:re.bearHoney,scale:.95,accessory:"dress",accessoryColor:re.dressRose,x:-8.5,z:-7,facing:Math.PI,getLines:i=>i.talkedToEvangelist?[{speaker:"Christiana",text:"You really mean to go, then… toward that light in the east?"},{speaker:"Christiana",text:"Then go safely, my dear Christian. The cubs and I will keep the hearth warm."},{speaker:"Christiana",text:"Perhaps one day… we will follow you. 💗"}]:[{speaker:"Christiana",text:"Christian, dear, you have been sighing all week over that heavy burden on your back."},{speaker:"Christiana",text:"You keep saying our city will not stand… it frightens the cubs, you know."},{speaker:"Christiana",text:"If you truly must find answers, they say a wise bear called Evangelist walks the east road."}],onFinish:i=>{i.talkedToFamily=!0}},{id:"cub1",name:"Matthew (cub)",fur:re.bearBrown,scale:.55,accessory:"none",x:-11,z:-6,facing:Math.PI*.8,wanderRadius:2,getLines:i=>i.talkedToEvangelist?[{speaker:"Matthew",text:"Papa, is that sparkly light for YOU? It looks like a star that fell down!"},{speaker:"Matthew",text:"Bring me back a piece of it, okay? Promise!"}]:[{speaker:"Matthew",text:"Papa! Why do you always carry that big lumpy backpack?"},{speaker:"Matthew",text:"It looks SO heavy. I tried to lift it once and fell right over. Plop!"}]},{id:"cub2",name:"Samuel (cub)",fur:re.bearHoney,scale:.5,accessory:"none",x:-7,z:-5,facing:-Math.PI*.7,wanderRadius:2,getLines:i=>i.talkedToEvangelist?[{speaker:"Samuel",text:"*sniff* …You are going away, Papa?"},{speaker:"Samuel",text:"Mama says brave bears follow their hearts. So… be the bravest one ever."}]:[{speaker:"Samuel",text:"Papa, I found a honey-flower by the well! Want to smell it?"},{speaker:"Samuel",text:"It smells like… like honey! Hee hee."}]},{id:"obstinate",name:"Obstinate",fur:re.bearCocoa,scale:1.05,accessory:"apron",accessoryColor:10336417,x:4,z:4.5,facing:-Math.PI/3,getLines:()=>[{speaker:"Obstinate",text:"Hmph. Still going on about the city falling down, Christian?"},{speaker:"Obstinate",text:"This is the finest city a bear could want! Honey in the market, fish in the river…"},{speaker:"Obstinate",text:"Leave if you like — but no sensible bear will go with you. Hmph!"}]},{id:"pliable",name:"Pliable",fur:re.bearHoney,scale:.95,accessory:"none",x:7,z:1,facing:Math.PI,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Pliable",text:"A shining light, you say?! Ooooh, that DOES sound exciting…"},{speaker:"Pliable",text:"Maybe I will come along! …Unless the road gets muddy. I do hate mud."}]:[{speaker:"Pliable",text:"Oh, hello Christian! Don't mind old Obstinate — he grumbles at clouds, too."},{speaker:"Pliable",text:"A Celestial City, all gold and light? If it's real, I'd love to see it… I think."}]},{id:"baker",name:"Mrs. Bramble",fur:re.bearBrown,scale:.98,accessory:"apron",accessoryColor:15980966,x:-3,z:11,facing:0,getLines:()=>[{speaker:"Mrs. Bramble",text:"Fresh honey-buns! Oh — Christian, dear, you look pale as flour."},{speaker:"Mrs. Bramble",text:"Here, imagine I gave you a bun. On the house. You'll need your strength, whatever it is you're up to."}]},{id:"evangelist",name:"Evangelist",fur:11049612,scale:1.15,accessory:"robe",accessoryColor:re.robeWhite,x:42,z:0,facing:-Math.PI/2,getLines:i=>i.talkedToEvangelist?[{speaker:"Evangelist",text:"Do you see the shining light, Christian? Keep it ever before your eyes."},{speaker:"Evangelist",text:"Walk straight toward it, and you shall find the Wicket Gate. Knock, and it will be opened."}]:[{speaker:"Evangelist",text:"Peace to you, burdened friend. I am called Evangelist. Why do you sigh so?"},{speaker:"Christian",text:"This burden on my back grows heavier each day… and I fear our city will not stand. But I do not know where to go!"},{speaker:"Evangelist",text:"Then hear me. Beyond the fields lies a Wicket Gate, the beginning of the true way."},{speaker:"Christian",text:"A gate? I look and look, but I cannot see any gate…"},{speaker:"Evangelist",text:"Do you see, far off, yonder shining light?"},{speaker:"Christian",text:"…I… yes! I think I see it!"},{speaker:"Evangelist",text:"Keep that light in your eye and go straight toward it. There you will find the Gate. Now run, Christian — run and do not look back!"}],onFinish:i=>{i.talkedToEvangelist=!0}}];function tm(i){return em.map(e=>{const t=rl({fur:e.fur,scale:e.scale,accessory:e.accessory,accessoryColor:e.accessoryColor});return t.root.position.set(e.x,0,e.z),t.root.rotation.y=e.facing,i.add(t.root),{id:e.id,name:e.name,parts:t,position:new U(e.x,0,e.z),facing:e.facing,getLines:e.getLines,onFinish:e.onFinish,wanderRadius:e.wanderRadius}})}const gt=class gt{constructor(){Nt(this,"ctx",null);Nt(this,"master",null);Nt(this,"timer",null);Nt(this,"nextBarTime",0);Nt(this,"bar",0);Nt(this,"enabled",!0)}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.5:0,this.master.connect(this.ctx.destination),this.nextBarTime=this.ctx.currentTime+.1,this.timer=window.setInterval(()=>this.schedule(),200)}toggle(){return this.enabled=!this.enabled,this.ctx&&this.master&&this.master.gain.linearRampToValueAtTime(this.enabled?.5:0,this.ctx.currentTime+.2),this.enabled}blip(){if(!this.ctx||!this.master||!this.enabled)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(660,e),t.frequency.exponentialRampToValueAtTime(880,e+.07),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(n).connect(this.master),t.start(e),t.stop(e+.15)}schedule(){if(this.ctx)for(;this.nextBarTime<this.ctx.currentTime+gt.BAR*1.5;)this.scheduleBar(this.nextBarTime,this.bar),this.nextBarTime+=gt.BAR,this.bar++}scheduleBar(e,t){const n=this.ctx,r=gt.CHORDS[t%gt.CHORDS.length],s=gt.BAR;for(const a of r){const l=n.createOscillator(),c=n.createGain();l.type="triangle",l.frequency.value=a,l.detune.value=(Math.random()-.5)*6,c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.045,e+s*.3),c.gain.linearRampToValueAtTime(1e-4,e+s*1.05),l.connect(c).connect(this.master),l.start(e),l.stop(e+s*1.1)}const o=s/8;for(let a=0;a<8;a++){if(a!==0&&Math.random()>.45)continue;const l=gt.SCALE[Math.floor(Math.random()*gt.SCALE.length)],c=e+a*o,u=n.createOscillator(),p=n.createGain();u.type="sine",u.frequency.value=l,p.gain.setValueAtTime(.09,c),p.gain.exponentialRampToValueAtTime(.001,c+.9),u.connect(p).connect(this.master),u.start(c),u.stop(c+1);const h=n.createOscillator(),m=n.createGain();h.type="sine",h.frequency.value=l*2,m.gain.setValueAtTime(.02,c),m.gain.exponentialRampToValueAtTime(.001,c+.5),h.connect(m).connect(this.master),h.start(c),h.stop(c+.6)}for(const a of[0,2]){const l=e+a*s/4,c=n.createOscillator(),u=n.createGain();c.type="sine",c.frequency.value=gt.CHORDS[t%gt.CHORDS.length][0]/2,u.gain.setValueAtTime(.11,l),u.gain.exponentialRampToValueAtTime(.001,l+.5),c.connect(u).connect(this.master),c.start(l),c.stop(l+.55)}}};Nt(gt,"BPM",76),Nt(gt,"BAR",60/gt.BPM*4),Nt(gt,"CHORDS",[[130.81,164.81,196,246.94],[110,130.81,164.81,196],[87.31,130.81,174.61,220],[98,146.83,196,220]]),Nt(gt,"SCALE",[523.25,587.33,659.25,783.99,880,1046.5]);let Gs=gt;const nm=document.getElementById("app"),Hn=new zp({antialias:!0});Hn.setPixelRatio(Math.min(window.devicePixelRatio,2));Hn.setSize(window.innerWidth,window.innerHeight);Hn.shadowMap.enabled=!0;Hn.shadowMap.type=yo;nm.appendChild(Hn.domElement);const yn=new kp;yn.background=new Be(re.sky);yn.fog=new na(re.fog,55,130);const Pi=new Rt(50,window.innerWidth/window.innerHeight,.1,300);yn.add(new Hp(14676223,13232320,.9));const cn=new Xp(re.sun,1.6);cn.position.set(-30,45,25);cn.castShadow=!0;cn.shadow.mapSize.set(2048,2048);cn.shadow.camera.left=-60;cn.shadow.camera.right=60;cn.shadow.camera.top=60;cn.shadow.camera.bottom=-60;cn.shadow.camera.far=150;yn.add(cn);const vi=Jp(yn),Bi=tm(yn),Lt=rl({fur:re.bearBrown,accessory:"burden"});Lt.root.position.set(-6,0,-4);yn.add(Lt.root);const Ht={talkedToEvangelist:!1,talkedToFamily:!1,chapterComplete:!1},Sr=new Gs,He={objective:document.getElementById("objective"),prompt:document.getElementById("prompt"),promptWho:document.querySelector("#prompt .who"),promptKey:document.querySelector("#prompt .key"),dialogue:document.getElementById("dialogue"),dialogueName:document.querySelector("#dialogue .name"),dialogueText:document.querySelector("#dialogue .text"),musicBtn:document.getElementById("music-btn"),talkBtn:document.getElementById("talk-btn"),joystick:document.getElementById("joystick"),stick:document.querySelector("#joystick .stick"),titleScreen:document.getElementById("title-screen"),startBtn:document.getElementById("start-btn"),ending:document.getElementById("ending"),restartBtn:document.getElementById("restart-btn")},sl=window.matchMedia("(pointer: coarse)").matches;sl&&(document.body.classList.add("touch"),He.promptKey.style.display="none");let ra=!1;He.startBtn.addEventListener("click",()=>{ra=!0,Sr.start(),He.titleScreen.classList.add("hidden"),setTimeout(()=>He.titleScreen.style.display="none",900)});He.musicBtn.addEventListener("click",()=>{Sr.start(),He.musicBtn.textContent=Sr.toggle()?"🎵":"🔇"});He.restartBtn.addEventListener("click",()=>window.location.reload());function al(i){He.objective.textContent=i}let sa=[],Er=0,ln=!1,yr=null;function ol(i){yr=i,sa=i.getLines(Ht),Er=0,ln=!0,He.dialogue.style.display="block",He.prompt.style.display="none",He.talkBtn.style.display="none",ll();const e=Lt.root.position.x-i.parts.root.position.x,t=Lt.root.position.z-i.parts.root.position.z;i.parts.root.rotation.y=Math.atan2(e,t)}function ll(){const i=sa[Er];He.dialogueName.textContent=i.speaker,He.dialogueText.textContent=i.text}function Rr(){var t;if(Sr.blip(),Er++,Er<sa.length){ll();return}ln=!1,He.dialogue.style.display="none";const i=yr;if(yr=null,!i)return;const e=Ht.talkedToEvangelist;(t=i.onFinish)==null||t.call(i,Ht),!e&&Ht.talkedToEvangelist&&im()}He.dialogue.addEventListener("click",Rr);function im(){vi.lightBeam.visible=!0,al("✨ Follow the shining light to the east!")}const Wt=new Set;window.addEventListener("keydown",i=>{i.repeat||(Wt.add(i.code),(i.code==="KeyE"||i.code==="Space"||i.code==="Enter"||i.key==="e"||i.key==="E"||i.key===" "||i.key==="Enter")&&(ln?Rr():hl()))});window.addEventListener("keyup",i=>Wt.delete(i.code));const Ut={active:!1,id:-1,x:0,y:0};He.joystick.addEventListener("pointerdown",i=>{Ut.active=!0,Ut.id=i.pointerId,He.joystick.setPointerCapture(i.pointerId),ul(i)});He.joystick.addEventListener("pointermove",i=>{Ut.active&&i.pointerId===Ut.id&&ul(i)});const cl=i=>{i.pointerId===Ut.id&&(Ut.active=!1,Ut.x=0,Ut.y=0,He.stick.style.transform="translate(-50%, -50%)")};He.joystick.addEventListener("pointerup",cl);He.joystick.addEventListener("pointercancel",cl);function ul(i){const e=He.joystick.getBoundingClientRect(),t=e.left+e.width/2,n=e.top+e.height/2;let r=(i.clientX-t)/(e.width/2),s=(i.clientY-n)/(e.height/2);const o=Math.hypot(r,s);o>1&&(r/=o,s/=o),Ut.x=r,Ut.y=s,He.stick.style.transform=`translate(calc(-50% + ${r*33}px), calc(-50% + ${s*33}px))`}He.talkBtn.addEventListener("click",()=>{ln?Rr():hl()});const rm=3.2;let Li=null;function sm(){let i=null,e=rm;for(const t of Bi){const n=t.parts.root.position.distanceTo(Lt.root.position);n<e&&(i=t,e=n)}return i}function hl(){Li&&!ln&&ol(Li)}const xo=7,am=new U(0,13,13),oi=new U;let os=!1;function om(i){for(const t of vi.colliders){const n=i.x-t.x,r=i.z-t.z,s=Math.hypot(n,r),o=t.r+.6;s<o&&s>1e-4&&(i.x=t.x+n/s*o,i.z=t.z+r/s*o)}for(const t of Bi){const n=i.x-t.parts.root.position.x,r=i.z-t.parts.root.position.z,s=Math.hypot(n,r);s<1.1&&s>1e-4&&(i.x=t.parts.root.position.x+n/s*1.1,i.z=t.parts.root.position.z+r/s*1.1)}i.x=Sa.clamp(i.x,-45,90),i.z=Sa.clamp(i.z,-32,32)}let Mo=0;function lm(i,e){let t=0,n=0;(Wt.has("KeyW")||Wt.has("ArrowUp"))&&(n-=1),(Wt.has("KeyS")||Wt.has("ArrowDown"))&&(n+=1),(Wt.has("KeyA")||Wt.has("ArrowLeft"))&&(t-=1),(Wt.has("KeyD")||Wt.has("ArrowRight"))&&(t+=1),t+=Ut.x,n+=Ut.y;const r=Math.hypot(t,n);if(os=r>.15&&!ln&&ra&&!Ht.chapterComplete,os){t/=Math.max(r,1),n/=Math.max(r,1);const s=Lt.root.position;s.x+=t*xo*i,s.z+=n*xo*i,om(s),Lt.root.rotation.y=cm(Lt.root.rotation.y,Math.atan2(t,n),12*i),!Ht.talkedToEvangelist&&s.x>48&&(s.x=48,e-Mo>4&&(Mo=e,al("🤔 The fields look endless… I should ask Evangelist for direction.")))}Hs(Lt,e,os),Ht.talkedToEvangelist&&!Ht.chapterComplete&&Lt.root.position.distanceTo(vi.lightBeam.position)<4.5&&(Ht.chapterComplete=!0,He.ending.style.display="flex",He.ending.classList.add("hidden"),requestAnimationFrame(()=>requestAnimationFrame(()=>He.ending.classList.remove("hidden"))))}function cm(i,e,t){let n=e-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*Math.min(t,1)}const um=Bi.map(i=>({home:i.position.clone(),target:i.position.clone(),wait:Math.random()*4,moving:!1}));function hm(i,e){Bi.forEach((t,n)=>{const r=um[n],s=ln&&yr===t;if(!t.wanderRadius||s){Hs(t.parts,e+n*1.7,!1);return}const o=t.parts.root.position;if(r.moving){const a=r.target.x-o.x,l=r.target.z-o.z,c=Math.hypot(a,l);if(c<.15)r.moving=!1,r.wait=2+Math.random()*5;else{const u=1.6*i;o.x+=a/c*u,o.z+=l/c*u,t.parts.root.rotation.y=Math.atan2(a,l)}}else if(r.wait-=i,r.wait<=0){const a=Math.random()*Math.PI*2,l=Math.random()*t.wanderRadius;r.target.set(r.home.x+Math.cos(a)*l,0,r.home.z+Math.sin(a)*l),r.moving=!0}Hs(t.parts,e+n*1.7,r.moving)})}const So=new qp;function dl(){requestAnimationFrame(dl);const i=Math.min(So.getDelta(),.05),e=So.elapsedTime;if(ra&&(lm(i,e),hm(i,e),Li=ln?null:sm(),Li&&!Ht.chapterComplete?(He.prompt.style.display="block",He.promptWho.textContent=`Talk to ${Li.name}`,sl&&(He.talkBtn.style.display="block")):(He.prompt.style.display="none",ln||(He.talkBtn.style.display="none"))),vi.lightBeam.visible){const t=1+Math.sin(e*2.4)*.12;vi.lightBeam.scale.set(t,1,t)}oi.lerp(Lt.root.position,Math.min(4*i,1)),Pi.position.copy(oi).add(am),Pi.lookAt(oi.x,oi.y+1.4,oi.z),Hn.render(yn,Pi)}window.addEventListener("resize",()=>{Pi.aspect=window.innerWidth/window.innerHeight,Pi.updateProjectionMatrix(),Hn.setSize(window.innerWidth,window.innerHeight)});dl();window.__game={christian:Lt,npcs:Bi,quest:Ht,world:vi,openDialogue:ol,advanceDialogue:Rr,camTarget:oi};
