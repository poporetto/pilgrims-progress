var Qc=Object.defineProperty;var td=(n,t,e)=>t in n?Qc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var T=(n,t,e)=>td(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="166",ed=0,Gl=1,id=2,ac=1,rc=2,qi=3,Tn=0,ei=1,Ve=2,wn=0,Ds=1,Vl=2,Wl=3,Xl=4,nd=5,Xn=100,sd=101,od=102,ad=103,rd=104,ld=200,hd=201,cd=202,dd=203,Nr=204,Fr=205,ud=206,fd=207,pd=208,md=209,gd=210,yd=211,xd=212,_d=213,vd=214,wd=0,Md=1,bd=2,ma=3,Sd=4,Td=5,Ed=6,Ad=7,yl=0,Cd=1,Rd=2,Mn=0,Pd=1,Id=2,Ld=3,Dd=4,kd=5,Ud=6,Nd=7,lc=300,Fs=301,Os=302,Or=303,zr=304,Ca=306,Br=1e3,qn=1001,Hr=1002,fi=1003,Fd=1004,Ao=1005,_i=1006,Ya=1007,Kn=1008,nn=1009,hc=1010,cc=1011,xo=1012,xl=1013,jn=1014,Qi=1015,Mo=1016,_l=1017,vl=1018,zs=1020,dc=35902,uc=1021,fc=1022,Mi=1023,pc=1024,mc=1025,ks=1026,Bs=1027,gc=1028,wl=1029,yc=1030,Ml=1031,bl=1033,la=33776,ha=33777,ca=33778,da=33779,Gr=35840,Vr=35841,Wr=35842,Xr=35843,Yr=36196,qr=37492,Kr=37496,jr=37808,$r=37809,Zr=37810,Jr=37811,Qr=37812,tl=37813,el=37814,il=37815,nl=37816,sl=37817,ol=37818,al=37819,rl=37820,ll=37821,ua=36492,hl=36494,cl=36495,xc=36283,dl=36284,ul=36285,fl=36286,Od=3200,zd=3201,_c=0,Bd=1,vn="",Ii="srgb",An="srgb-linear",Sl="display-p3",Ra="display-p3-linear",ga="linear",xe="srgb",ya="rec709",xa="p3",ts=7680,Yl=519,Hd=512,Gd=513,Vd=514,vc=515,Wd=516,Xd=517,Yd=518,qd=519,pl=35044,ql="300 es",tn=2e3,_a=2001;class Xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const po=Math.PI/180,_o=180/Math.PI;function en(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function Tl(n,t){return(n%t+t)%t}function Kd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function jd(n,t,e){return n!==t?(e-n)/(t-n):0}function mo(n,t,e){return(1-e)*n+e*t}function $d(n,t,e,i){return mo(n,t,1-Math.exp(-e*i))}function Zd(n,t=1){return t-Math.abs(Tl(n,t*2)-t)}function Jd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Qd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function tu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function eu(n,t){return n+Math.random()*(t-n)}function iu(n){return n*(.5-Math.random())}function nu(n){n!==void 0&&(Kl=n);let t=Kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function su(n){return n*po}function ou(n){return n*_o}function au(n){return(n&n-1)===0&&n!==0}function ru(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hu(n,t,e,i,s){const o=Math.cos,a=Math.sin,r=o(e/2),l=a(e/2),h=o((t+i)/2),c=a((t+i)/2),u=o((t-i)/2),d=a((t-i)/2),m=o((i-t)/2),y=a((i-t)/2);switch(s){case"XYX":n.set(r*c,l*u,l*d,r*h);break;case"YZY":n.set(l*d,r*c,l*u,r*h);break;case"ZXZ":n.set(l*u,l*d,r*c,r*h);break;case"XZX":n.set(r*c,l*y,l*m,r*h);break;case"YXY":n.set(l*m,r*c,l*y,r*h);break;case"ZYZ":n.set(l*y,l*m,r*c,r*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pt={DEG2RAD:po,RAD2DEG:_o,generateUUID:en,clamp:Ge,euclideanModulo:Tl,mapLinear:Kd,inverseLerp:jd,lerp:mo,damp:$d,pingpong:Zd,smoothstep:Jd,smootherstep:Qd,randInt:tu,randFloat:eu,randFloatSpread:iu,seededRandom:nu,degToRad:su,radToDeg:ou,isPowerOfTwo:au,ceilPowerOfTwo:ru,floorPowerOfTwo:lu,setQuaternionFromProperEuler:hu,normalize:fe,denormalize:vi};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*i-a*s+t.x,this.y=o*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,o,a,r,l,h){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,a,r,l,h)}set(t,e,i,s,o,a,r,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=r,c[3]=e,c[4]=o,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,a=i[0],r=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],m=i[5],y=i[8],x=s[0],g=s[3],f=s[6],E=s[1],w=s[4],v=s[7],L=s[2],R=s[5],I=s[8];return o[0]=a*x+r*E+l*L,o[3]=a*g+r*w+l*R,o[6]=a*f+r*v+l*I,o[1]=h*x+c*E+u*L,o[4]=h*g+c*w+u*R,o[7]=h*f+c*v+u*I,o[2]=d*x+m*E+y*L,o[5]=d*g+m*w+y*R,o[8]=d*f+m*v+y*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*r*h-i*o*c+i*r*l+s*o*h-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],h=t[7],c=t[8],u=c*a-r*h,d=r*l-c*o,m=h*o-a*l,y=e*u+i*d+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return t[0]=u*x,t[1]=(s*h-c*i)*x,t[2]=(r*i-s*a)*x,t[3]=d*x,t[4]=(c*e-s*l)*x,t[5]=(s*o-r*e)*x,t[6]=m*x,t[7]=(i*l-h*e)*x,t[8]=(a*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,a,r){const l=Math.cos(o),h=Math.sin(o);return this.set(i*l,i*h,-i*(l*a+h*r)+a+t,-s*h,s*l,-s*(-h*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Zt;function wc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cu(){const n=va("canvas");return n.style.display="block",n}const jl={};function El(n){n in jl||(jl[n]=!0,console.warn(n))}function du(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}const $l=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zl=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[An]:{transfer:ga,primaries:ya,toReference:n=>n,fromReference:n=>n},[Ii]:{transfer:xe,primaries:ya,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ra]:{transfer:ga,primaries:xa,toReference:n=>n.applyMatrix3(Zl),fromReference:n=>n.applyMatrix3($l)},[Sl]:{transfer:xe,primaries:xa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zl),fromReference:n=>n.applyMatrix3($l).convertLinearToSRGB()}},uu=new Set([An,Ra]),pe={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!uu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Co[t].toReference,s=Co[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Co[n].primaries},getTransfer:function(n){return n===vn?ga:Co[n].transfer}};function Us(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ka(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let es;class fu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=va("canvas")),es.width=t.width,es.height=t.height;const i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=va("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=Us(o[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Us(e[i]/255)*255):e[i]=Us(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pu=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=en(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,r=s.length;a<r;a++)s[a].isDataTexture?o.push(ja(s[a].image)):o.push(ja(s[a]))}else o=ja(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class Je extends Xs{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,i=qn,s=qn,o=_i,a=Kn,r=Mi,l=nn,h=Je.DEFAULT_ANISOTROPY,c=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=en(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=lc;Je.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],m=l[5],y=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-x)<.01&&Math.abs(y-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+x)<.1&&Math.abs(y+g)<.1&&Math.abs(h+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(h+1)/2,v=(m+1)/2,L=(f+1)/2,R=(c+d)/4,I=(u+x)/4,z=(y+g)/4;return w>v&&w>L?w<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(w),s=R/i,o=I/i):v>L?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=R/s,o=z/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=I/o,s=z/o),this.set(i,s,o,e),this}let E=Math.sqrt((g-y)*(g-y)+(u-x)*(u-x)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(g-y)/E,this.y=(u-x)/E,this.z=(d-c)/E,this.w=Math.acos((h+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gu extends Xs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends gu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class bc extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fi,this.minFilter=fi,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yu extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fi,this.minFilter=fi,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,a,r){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3];const d=o[a+0],m=o[a+1],y=o[a+2],x=o[a+3];if(r===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(r===1){t[e+0]=d,t[e+1]=m,t[e+2]=y,t[e+3]=x;return}if(u!==x||l!==d||h!==m||c!==y){let g=1-r;const f=l*d+h*m+c*y+u*x,E=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const L=Math.sqrt(w),R=Math.atan2(L,f*E);g=Math.sin(g*R)/L,r=Math.sin(r*R)/L}const v=r*E;if(l=l*g+d*v,h=h*g+m*v,c=c*g+y*v,u=u*g+x*v,g===1-r){const L=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=L,h*=L,c*=L,u*=L}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,a){const r=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=o[a],d=o[a+1],m=o[a+2],y=o[a+3];return t[e]=r*y+c*u+l*m-h*d,t[e+1]=l*y+c*d+h*u-r*m,t[e+2]=h*y+c*m+r*d-l*u,t[e+3]=c*y-r*u-l*d-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,h=r(i/2),c=r(s/2),u=r(o/2),d=l(i/2),m=l(s/2),y=l(o/2);switch(a){case"XYZ":this._x=d*c*u+h*m*y,this._y=h*m*u-d*c*y,this._z=h*c*y+d*m*u,this._w=h*c*u-d*m*y;break;case"YXZ":this._x=d*c*u+h*m*y,this._y=h*m*u-d*c*y,this._z=h*c*y-d*m*u,this._w=h*c*u+d*m*y;break;case"ZXY":this._x=d*c*u-h*m*y,this._y=h*m*u+d*c*y,this._z=h*c*y+d*m*u,this._w=h*c*u-d*m*y;break;case"ZYX":this._x=d*c*u-h*m*y,this._y=h*m*u+d*c*y,this._z=h*c*y-d*m*u,this._w=h*c*u+d*m*y;break;case"YZX":this._x=d*c*u+h*m*y,this._y=h*m*u+d*c*y,this._z=h*c*y-d*m*u,this._w=h*c*u-d*m*y;break;case"XZY":this._x=d*c*u-h*m*y,this._y=h*m*u-d*c*y,this._z=h*c*y+d*m*u,this._w=h*c*u+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],a=e[1],r=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=i+r+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-h)*m,this._z=(a-s)*m}else if(i>r&&i>u){const m=2*Math.sqrt(1+i-r-u);this._w=(c-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(o+h)/m}else if(r>u){const m=2*Math.sqrt(1+r-i-u);this._w=(o-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+u-i-r);this._w=(a-s)/m,this._x=(o+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,a=t._w,r=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+a*r+s*h-o*l,this._y=s*c+a*l+o*r-i*h,this._z=o*c+a*h+i*l-s*r,this._w=a*c-i*r-s*l-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,a=this._w;let r=a*t._w+i*t._x+s*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=i,this._y=s,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*o+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,r),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,a=t.y,r=t.z,l=t.w,h=2*(a*s-r*i),c=2*(r*e-o*s),u=2*(o*i-a*e);return this.x=e+l*h+a*u-r*c,this.y=i+l*c+r*h-o*u,this.z=s+l*u+o*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=s*l-o*r,this.y=o*a-i*l,this.z=i*r-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new C,Jl=new bo;class So{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,mi):mi.fromBufferAttribute(o,a),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Po.subVectors(this.max,js),is.subVectors(t.a,js),ns.subVectors(t.b,js),ss.subVectors(t.c,js),an.subVectors(ns,is),rn.subVectors(ss,ns),Rn.subVectors(is,ss);let e=[0,-an.z,an.y,0,-rn.z,rn.y,0,-Rn.z,Rn.y,an.z,0,-an.x,rn.z,0,-rn.x,Rn.z,0,-Rn.x,-an.y,an.x,0,-rn.y,rn.x,0,-Rn.y,Rn.x,0];return!Za(e,is,ns,ss,Po)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,is,ns,ss,Po))?!1:(Io.crossVectors(an,rn),e=[Io.x,Io.y,Io.z],Za(e,is,ns,ss,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bi=[new C,new C,new C,new C,new C,new C,new C,new C],mi=new C,Ro=new So,is=new C,ns=new C,ss=new C,an=new C,rn=new C,Rn=new C,js=new C,Po=new C,Io=new C,Pn=new C;function Za(n,t,e,i,s){for(let o=0,a=n.length-3;o<=a;o+=3){Pn.fromArray(n,o);const r=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),l=t.dot(Pn),h=e.dot(Pn),c=i.dot(Pn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>r)return!1}return!0}const xu=new So,$s=new C,Ja=new C;class Al{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):xu.setFromPoints(t).getCenter(i);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(Ja)),this.expandByPoint($s.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new C,Qa=new C,Lo=new C,ln=new C,tr=new C,Do=new C,er=new C;class _u{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Qa.copy(t).add(e).multiplyScalar(.5),Lo.copy(e).sub(t).normalize(),ln.copy(this.origin).sub(Qa);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Lo),r=ln.dot(this.direction),l=-ln.dot(Lo),h=ln.lengthSq(),c=Math.abs(1-a*a);let u,d,m,y;if(c>0)if(u=a*l-r,d=a*r-l,y=o*c,u>=0)if(d>=-y)if(d<=y){const x=1/c;u*=x,d*=x,m=u*(u+a*d+2*r)+d*(a*u+d+2*l)+h}else d=o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+h;else d=-o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+h;else d<=-y?(u=Math.max(0,-(-a*o+r)),d=u>0?-o:Math.min(Math.max(-o,-l),o),m=-u*u+d*(d+2*l)+h):d<=y?(u=0,d=Math.min(Math.max(-o,-l),o),m=d*(d+2*l)+h):(u=Math.max(0,-(a*o+r)),d=u>0?o:Math.min(Math.max(-o,-l),o),m=-u*u+d*(d+2*l)+h);else d=a>0?-o:o,u=Math.max(0,-(a*d+r)),m=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qa).addScaledVector(Lo,d),m}intersectSphere(t,e){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,a,r,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),c>=0?(o=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(o=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),i>a||o>s||((o>i||isNaN(i))&&(i=o),(a<s||isNaN(s))&&(s=a),u>=0?(r=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(r=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||r>s)||((r>i||i!==i)&&(i=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,s,o){tr.subVectors(e,t),Do.subVectors(i,t),er.crossVectors(tr,Do);let a=this.direction.dot(er),r;if(a>0){if(s)return null;r=1}else if(a<0)r=-1,a=-a;else return null;ln.subVectors(this.origin,t);const l=r*this.direction.dot(Do.crossVectors(ln,Do));if(l<0)return null;const h=r*this.direction.dot(tr.cross(ln));if(h<0||l+h>a)return null;const c=-r*ln.dot(er);return c<0?null:this.at(c/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,i,s,o,a,r,l,h,c,u,d,m,y,x,g){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,a,r,l,h,c,u,d,m,y,x,g)}set(t,e,i,s,o,a,r,l,h,c,u,d,m,y,x,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=o,f[5]=a,f[9]=r,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=m,f[7]=y,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),o=1/os.setFromMatrixColumn(t,1).length(),a=1/os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=a*c,m=a*u,y=r*c,x=r*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=m+y*h,e[5]=d-x*h,e[9]=-r*l,e[2]=x-d*h,e[6]=y+m*h,e[10]=a*l}else if(t.order==="YXZ"){const d=l*c,m=l*u,y=h*c,x=h*u;e[0]=d+x*r,e[4]=y*r-m,e[8]=a*h,e[1]=a*u,e[5]=a*c,e[9]=-r,e[2]=m*r-y,e[6]=x+d*r,e[10]=a*l}else if(t.order==="ZXY"){const d=l*c,m=l*u,y=h*c,x=h*u;e[0]=d-x*r,e[4]=-a*u,e[8]=y+m*r,e[1]=m+y*r,e[5]=a*c,e[9]=x-d*r,e[2]=-a*h,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const d=a*c,m=a*u,y=r*c,x=r*u;e[0]=l*c,e[4]=y*h-m,e[8]=d*h+x,e[1]=l*u,e[5]=x*h+d,e[9]=m*h-y,e[2]=-h,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*h,y=r*l,x=r*h;e[0]=l*c,e[4]=x-d*u,e[8]=y*u+m,e[1]=u,e[5]=a*c,e[9]=-r*c,e[2]=-h*c,e[6]=m*u+y,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,m=a*h,y=r*l,x=r*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+x,e[5]=a*c,e[9]=m*u-y,e[2]=y*u-m,e[6]=r*c,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vu,t,wu)}lookAt(t,e,i){const s=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),hn.crossVectors(i,oi),hn.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),hn.crossVectors(i,oi)),hn.normalize(),ko.crossVectors(oi,hn),s[0]=hn.x,s[4]=ko.x,s[8]=oi.x,s[1]=hn.y,s[5]=ko.y,s[9]=oi.y,s[2]=hn.z,s[6]=ko.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,a=i[0],r=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],m=i[13],y=i[2],x=i[6],g=i[10],f=i[14],E=i[3],w=i[7],v=i[11],L=i[15],R=s[0],I=s[4],z=s[8],A=s[12],b=s[1],k=s[5],G=s[9],W=s[13],$=s[2],J=s[6],q=s[10],nt=s[14],K=s[3],j=s[7],it=s[11],ct=s[15];return o[0]=a*R+r*b+l*$+h*K,o[4]=a*I+r*k+l*J+h*j,o[8]=a*z+r*G+l*q+h*it,o[12]=a*A+r*W+l*nt+h*ct,o[1]=c*R+u*b+d*$+m*K,o[5]=c*I+u*k+d*J+m*j,o[9]=c*z+u*G+d*q+m*it,o[13]=c*A+u*W+d*nt+m*ct,o[2]=y*R+x*b+g*$+f*K,o[6]=y*I+x*k+g*J+f*j,o[10]=y*z+x*G+g*q+f*it,o[14]=y*A+x*W+g*nt+f*ct,o[3]=E*R+w*b+v*$+L*K,o[7]=E*I+w*k+v*J+L*j,o[11]=E*z+w*G+v*q+L*it,o[15]=E*A+w*W+v*nt+L*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],a=t[1],r=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],m=t[14],y=t[3],x=t[7],g=t[11],f=t[15];return y*(+o*l*u-s*h*u-o*r*d+i*h*d+s*r*m-i*l*m)+x*(+e*l*m-e*h*d+o*a*d-s*a*m+s*h*c-o*l*c)+g*(+e*h*u-e*r*m-o*a*u+i*a*m+o*r*c-i*h*c)+f*(-s*r*c-e*l*u+e*r*d+s*a*u-i*a*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],r=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],m=t[11],y=t[12],x=t[13],g=t[14],f=t[15],E=u*g*h-x*d*h+x*l*m-r*g*m-u*l*f+r*d*f,w=y*d*h-c*g*h-y*l*m+a*g*m+c*l*f-a*d*f,v=c*x*h-y*u*h+y*r*m-a*x*m-c*r*f+a*u*f,L=y*u*l-c*x*l-y*r*d+a*x*d+c*r*g-a*u*g,R=e*E+i*w+s*v+o*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=E*I,t[1]=(x*d*o-u*g*o-x*s*m+i*g*m+u*s*f-i*d*f)*I,t[2]=(r*g*o-x*l*o+x*s*h-i*g*h-r*s*f+i*l*f)*I,t[3]=(u*l*o-r*d*o-u*s*h+i*d*h+r*s*m-i*l*m)*I,t[4]=w*I,t[5]=(c*g*o-y*d*o+y*s*m-e*g*m-c*s*f+e*d*f)*I,t[6]=(y*l*o-a*g*o-y*s*h+e*g*h+a*s*f-e*l*f)*I,t[7]=(a*d*o-c*l*o+c*s*h-e*d*h-a*s*m+e*l*m)*I,t[8]=v*I,t[9]=(y*u*o-c*x*o-y*i*m+e*x*m+c*i*f-e*u*f)*I,t[10]=(a*x*o-y*r*o+y*i*h-e*x*h-a*i*f+e*r*f)*I,t[11]=(c*r*o-a*u*o-c*i*h+e*u*h+a*i*m-e*r*m)*I,t[12]=L*I,t[13]=(c*x*s-y*u*s+y*i*d-e*x*d-c*i*g+e*u*g)*I,t[14]=(y*r*s-a*x*s-y*i*l+e*x*l+a*i*g-e*r*g)*I,t[15]=(a*u*s-c*r*s+c*i*l-e*u*l-a*i*d+e*r*d)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,a=t.x,r=t.y,l=t.z,h=o*a,c=o*r;return this.set(h*a+i,h*r-s*l,h*l+s*r,0,h*r+s*l,c*r+i,c*l-s*a,0,h*l-s*r,c*l+s*a,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,a){return this.set(1,i,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,h=o+o,c=a+a,u=r+r,d=o*h,m=o*c,y=o*u,x=a*c,g=a*u,f=r*u,E=l*h,w=l*c,v=l*u,L=i.x,R=i.y,I=i.z;return s[0]=(1-(x+f))*L,s[1]=(m+v)*L,s[2]=(y-w)*L,s[3]=0,s[4]=(m-v)*R,s[5]=(1-(d+f))*R,s[6]=(g+E)*R,s[7]=0,s[8]=(y+w)*I,s[9]=(g-E)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=os.set(s[0],s[1],s[2]).length();const a=os.set(s[4],s[5],s[6]).length(),r=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],gi.copy(this);const h=1/o,c=1/a,u=1/r;return gi.elements[0]*=h,gi.elements[1]*=h,gi.elements[2]*=h,gi.elements[4]*=c,gi.elements[5]*=c,gi.elements[6]*=c,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,e.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=r,this}makePerspective(t,e,i,s,o,a,r=tn){const l=this.elements,h=2*o/(e-t),c=2*o/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let m,y;if(r===tn)m=-(a+o)/(a-o),y=-2*a*o/(a-o);else if(r===_a)m=-a/(a-o),y=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,a,r=tn){const l=this.elements,h=1/(e-t),c=1/(i-s),u=1/(a-o),d=(e+t)*h,m=(i+s)*c;let y,x;if(r===tn)y=(a+o)*u,x=-2*u;else if(r===_a)y=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const os=new C,gi=new be,vu=new C(0,0,0),wu=new C(1,1,1),hn=new C,ko=new C,oi=new C,Ql=new be,th=new bo;class ki{constructor(t=0,e=0,i=0,s=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],a=s[4],r=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return th.setFromEuler(this),this.setFromQuaternion(th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mu=0;const eh=new C,as=new bo,Gi=new be,Uo=new C,Zs=new C,bu=new C,Su=new bo,ih=new C(1,0,0),nh=new C(0,1,0),sh=new C(0,0,1),oh={type:"added"},Tu={type:"removed"},rs={type:"childadded",child:null},ir={type:"childremoved",child:null};class Fe extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new C,e=new ki,i=new bo,s=new C(1,1,1);function o(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Zt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(sh,t)}translateOnAxis(t,e){return eh.copy(t).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Uo.copy(t):Uo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Zs,Uo,this.up):Gi.lookAt(Uo,Zs,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Gi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tu),ir.child=t,this.dispatchEvent(ir),ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,h=this.material.length;l<h;l++)r.push(o(t.materials,this.material[l]));s.material=r}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),y=a(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(r){const l=[];for(const h in r){const c=r[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new C(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new C,Vi=new C,nr=new C,Wi=new C,ls=new C,hs=new C,ah=new C,sr=new C,or=new C,ar=new C;class wi{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yi.subVectors(t,e),s.cross(yi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){yi.subVectors(s,e),Vi.subVectors(i,e),nr.subVectors(t,e);const a=yi.dot(yi),r=yi.dot(Vi),l=yi.dot(nr),h=Vi.dot(Vi),c=Vi.dot(nr),u=a*h-r*r;if(u===0)return o.set(0,0,0),null;const d=1/u,m=(h*l-r*c)*d,y=(a*c-r*l)*d;return o.set(1-m-y,y,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,i,s,o,a,r,l){return this.getBarycoord(t,e,i,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(r,Wi.z),l)}static isFrontFacing(t,e,i,s){return yi.subVectors(i,e),Vi.subVectors(t,e),yi.cross(Vi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),yi.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return wi.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let a,r;ls.subVectors(s,i),hs.subVectors(o,i),sr.subVectors(t,i);const l=ls.dot(sr),h=hs.dot(sr);if(l<=0&&h<=0)return e.copy(i);or.subVectors(t,s);const c=ls.dot(or),u=hs.dot(or);if(c>=0&&u<=c)return e.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(ls,a);ar.subVectors(t,o);const m=ls.dot(ar),y=hs.dot(ar);if(y>=0&&m<=y)return e.copy(o);const x=m*h-l*y;if(x<=0&&h>=0&&y<=0)return r=h/(h-y),e.copy(i).addScaledVector(hs,r);const g=c*y-m*u;if(g<=0&&u-c>=0&&m-y>=0)return ah.subVectors(o,s),r=(u-c)/(u-c+(m-y)),e.copy(s).addScaledVector(ah,r);const f=1/(g+x+d);return a=x*f,r=d*f,e.copy(i).addScaledVector(ls,a).addScaledVector(hs,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},No={h:0,s:0,l:0};function rr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Dt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=Tl(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,a=2*i-o;this.r=rr(a,o,t+1/3),this.g=rr(a,o,t),this.b=rr(a,o,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ii){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],r=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ii){const i=Tc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=Ka(t.r),this.g=Ka(t.g),this.b=Ka(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ii){return pe.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ge(Ye.r*255,0,255))*65536+Math.round(Ge(Ye.g*255,0,255))*256+Math.round(Ge(Ye.b*255,0,255))}getHexString(t=Ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ye.copy(this),e);const i=Ye.r,s=Ye.g,o=Ye.b,a=Math.max(i,s,o),r=Math.min(i,s,o);let l,h;const c=(r+a)/2;if(r===a)l=0,h=0;else{const u=a-r;switch(h=c<=.5?u/(a+r):u/(2-a-r),a){case i:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-i)/u+2;break;case o:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Ii){pe.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,i=Ye.g,s=Ye.b;return t!==Ii?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(cn),this.setHSL(cn.h+t,cn.s+e,cn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(No);const i=mo(cn.h,No.h,e),s=mo(cn.s,No.s,e),o=mo(cn.l,No.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Dt;Dt.NAMES=Tc;let Eu=0;class Ys extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=en(),this.name="",this.type="Material",this.blending=Ds,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nr&&(i.blendSrc=this.blendSrc),this.blendDst!==Fr&&(i.blendDst=this.blendDst),this.blendEquation!==Xn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Mt extends Ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new C,Fo=new qt;class bi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return El("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),o=fe(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pl&&(t.usage=this.usage),t}}class Ec extends bi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ac extends bi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class qe extends bi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Au=0;const di=new be,lr=new Fe,cs=new C,ai=new So,Js=new So,Ne=new C;class Ti extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wc(t)?Ac:Ec)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Zt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,i){return di.makeTranslation(t,e,i),this.applyMatrix4(di),this}scale(t,e,i){return di.makeScale(t,e,i),this.applyMatrix4(di),this}lookAt(t){return lr.lookAt(t),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];ai.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Js.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(ai.min,Js.min),ai.expandByPoint(Ne),Ne.addVectors(ai.max,Js.max),ai.expandByPoint(Ne)):(ai.expandByPoint(Js.min),ai.expandByPoint(Js.max))}ai.getCenter(i);let s=0;for(let o=0,a=t.count;o<a;o++)Ne.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let h=0,c=r.count;h<c;h++)Ne.fromBufferAttribute(r,h),l&&(cs.fromBufferAttribute(t,h),Ne.add(cs)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let z=0;z<i.count;z++)r[z]=new C,l[z]=new C;const h=new C,c=new C,u=new C,d=new qt,m=new qt,y=new qt,x=new C,g=new C;function f(z,A,b){h.fromBufferAttribute(i,z),c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,b),d.fromBufferAttribute(o,z),m.fromBufferAttribute(o,A),y.fromBufferAttribute(o,b),c.sub(h),u.sub(h),m.sub(d),y.sub(d);const k=1/(m.x*y.y-y.x*m.y);isFinite(k)&&(x.copy(c).multiplyScalar(y.y).addScaledVector(u,-m.y).multiplyScalar(k),g.copy(u).multiplyScalar(m.x).addScaledVector(c,-y.x).multiplyScalar(k),r[z].add(x),r[A].add(x),r[b].add(x),l[z].add(g),l[A].add(g),l[b].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let z=0,A=E.length;z<A;++z){const b=E[z],k=b.start,G=b.count;for(let W=k,$=k+G;W<$;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const w=new C,v=new C,L=new C,R=new C;function I(z){L.fromBufferAttribute(s,z),R.copy(L);const A=r[z];w.copy(A),w.sub(L.multiplyScalar(L.dot(A))).normalize(),v.crossVectors(R,A);const k=v.dot(l[z])<0?-1:1;a.setXYZW(z,w.x,w.y,w.z,k)}for(let z=0,A=E.length;z<A;++z){const b=E[z],k=b.start,G=b.count;for(let W=k,$=k+G;W<$;W+=3)I(t.getX(W+0)),I(t.getX(W+1)),I(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new C,o=new C,a=new C,r=new C,l=new C,h=new C,c=new C,u=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){const y=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),c.subVectors(a,o),u.subVectors(s,o),c.cross(u),r.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,g),r.add(c),l.add(c),h.add(c),i.setXYZ(y,r.x,r.y,r.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,o),u.subVectors(s,o),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(r,l){const h=r.array,c=r.itemSize,u=r.normalized,d=new h.constructor(l.length*c);let m=0,y=0;for(let x=0,g=l.length;x<g;x++){r.isInterleavedBufferAttribute?m=l[x]*r.data.stride+r.offset:m=l[x]*c;for(let f=0;f<c;f++)d[y++]=h[m++]}return new bi(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ti,i=this.index.array,s=this.attributes;for(const r in s){const l=s[r],h=t(l,i);e.setAttribute(r,h)}const o=this.morphAttributes;for(const r in o){const l=[],h=o[r];for(let c=0,u=h.length;c<u;c++){const d=h[c],m=t(d,i);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const h=a[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const m=h[u];c.push(m.toJSON(t.data))}c.length>0&&(s[l]=c,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const o=t.morphAttributes;for(const h in o){const c=[],u=o[h];for(let d=0,m=u.length;d<m;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new be,In=new _u,Oo=new Al,lh=new C,ds=new C,us=new C,fs=new C,hr=new C,zo=new C,Bo=new qt,Ho=new qt,Go=new qt,hh=new C,ch=new C,dh=new C,Vo=new C,Wo=new C;class Q extends Fe{constructor(t=new Ti,e=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const r=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(o&&r){zo.set(0,0,0);for(let l=0,h=o.length;l<h;l++){const c=r[l],u=o[l];c!==0&&(hr.fromBufferAttribute(u,t),a?zo.addScaledVector(hr,c):zo.addScaledVector(hr.sub(e),c))}e.add(zo)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(o),In.copy(t.ray).recast(t.near),!(Oo.containsPoint(In.origin)===!1&&(In.intersectSphere(Oo,lh)===null||In.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(rh.copy(o).invert(),In.copy(t.ray).applyMatrix4(rh),!(i.boundingBox!==null&&In.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,i){let s;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,h=o.attributes.uv,c=o.attributes.uv1,u=o.attributes.normal,d=o.groups,m=o.drawRange;if(r!==null)if(Array.isArray(a))for(let y=0,x=d.length;y<x;y++){const g=d[y],f=a[g.materialIndex],E=Math.max(g.start,m.start),w=Math.min(r.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,L=w;v<L;v+=3){const R=r.getX(v),I=r.getX(v+1),z=r.getX(v+2);s=Xo(this,f,t,i,h,c,u,R,I,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const y=Math.max(0,m.start),x=Math.min(r.count,m.start+m.count);for(let g=y,f=x;g<f;g+=3){const E=r.getX(g),w=r.getX(g+1),v=r.getX(g+2);s=Xo(this,a,t,i,h,c,u,E,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,x=d.length;y<x;y++){const g=d[y],f=a[g.materialIndex],E=Math.max(g.start,m.start),w=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,L=w;v<L;v+=3){const R=v,I=v+1,z=v+2;s=Xo(this,f,t,i,h,c,u,R,I,z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const y=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=y,f=x;g<f;g+=3){const E=g,w=g+1,v=g+2;s=Xo(this,a,t,i,h,c,u,E,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Cu(n,t,e,i,s,o,a,r){let l;if(t.side===ei?l=i.intersectTriangle(a,o,s,!0,r):l=i.intersectTriangle(s,o,a,t.side===Tn,r),l===null)return null;Wo.copy(r),Wo.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Wo);return h<e.near||h>e.far?null:{distance:h,point:Wo.clone(),object:n}}function Xo(n,t,e,i,s,o,a,r,l,h){n.getVertexPosition(r,ds),n.getVertexPosition(l,us),n.getVertexPosition(h,fs);const c=Cu(n,t,e,i,ds,us,fs,Vo);if(c){s&&(Bo.fromBufferAttribute(s,r),Ho.fromBufferAttribute(s,l),Go.fromBufferAttribute(s,h),c.uv=wi.getInterpolation(Vo,ds,us,fs,Bo,Ho,Go,new qt)),o&&(Bo.fromBufferAttribute(o,r),Ho.fromBufferAttribute(o,l),Go.fromBufferAttribute(o,h),c.uv1=wi.getInterpolation(Vo,ds,us,fs,Bo,Ho,Go,new qt)),a&&(hh.fromBufferAttribute(a,r),ch.fromBufferAttribute(a,l),dh.fromBufferAttribute(a,h),c.normal=wi.getInterpolation(Vo,ds,us,fs,hh,ch,dh,new C),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:r,b:l,c:h,normal:new C,materialIndex:0};wi.getNormal(ds,us,fs,u.normal),c.face=u}return c}class _t extends Ti{constructor(t=1,e=1,i=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:a};const r=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,m=0;y("z","y","x",-1,-1,i,e,t,a,o,0),y("z","y","x",1,-1,i,e,-t,a,o,1),y("x","z","y",1,1,t,i,e,s,a,2),y("x","z","y",1,-1,t,i,-e,s,a,3),y("x","y","z",1,-1,t,e,i,s,o,4),y("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(u,2));function y(x,g,f,E,w,v,L,R,I,z,A){const b=v/I,k=L/z,G=v/2,W=L/2,$=R/2,J=I+1,q=z+1;let nt=0,K=0;const j=new C;for(let it=0;it<q;it++){const ct=it*k-W;for(let kt=0;kt<J;kt++){const Qt=kt*b-G;j[x]=Qt*E,j[g]=ct*w,j[f]=$,h.push(j.x,j.y,j.z),j[x]=0,j[g]=0,j[f]=R>0?1:-1,c.push(j.x,j.y,j.z),u.push(kt/I),u.push(1-it/z),nt+=1}}for(let it=0;it<z;it++)for(let ct=0;ct<I;ct++){const kt=d+ct+J*it,Qt=d+ct+J*(it+1),Z=d+(ct+1)+J*(it+1),lt=d+(ct+1)+J*it;l.push(kt,Qt,lt),l.push(Qt,Z,lt),K+=6}r.addGroup(m,K,A),m+=K,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Hs(n[e]);for(const s in i)t[s]=i[s]}return t}function Ru(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Cc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Pu={clone:Hs,merge:$e};var Iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=Ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Rc extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new C,uh=new qt,fh=new qt;class ti extends Rc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,uh,fh),e.subVectors(fh,uh)}setViewOffset(t,e,i,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(po*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;o+=a.offsetX*s/l,e-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class Du extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ti(ps,ms,t,e);s.layers=this.layers,this.add(s);const o=new ti(ps,ms,t,e);o.layers=this.layers,this.add(o);const a=new ti(ps,ms,t,e);a.layers=this.layers,this.add(a);const r=new ti(ps,ms,t,e);r.layers=this.layers,this.add(r);const l=new ti(ps,ms,t,e);l.layers=this.layers,this.add(l);const h=new ti(ps,ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,a,r,l]=e;for(const h of e)this.remove(h);if(t===tn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,r),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(u,d,m),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Pc extends Je{constructor(t,e,i,s,o,a,r,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Fs,super(t,e,i,s,o,a,r,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ku extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Pc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_i}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _t(5,5,5),o=new En({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:wn});o.uniforms.tEquirect.value=e;const a=new Q(s,o),r=e.minFilter;return e.minFilter===Kn&&(e.minFilter=_i),new Du(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(o)}}const cr=new C,Uu=new C,Nu=new Zt;class Bn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=cr.subVectors(i,e).cross(Uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(cr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Nu.getNormalMatrix(t),s=this.coplanarPoint(cr).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Al,Yo=new C;class Cl{constructor(t=new Bn,e=new Bn,i=new Bn,s=new Bn,o=new Bn,a=new Bn){this.planes=[t,e,i,s,o,a]}set(t,e,i,s,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(s),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=tn){const i=this.planes,s=t.elements,o=s[0],a=s[1],r=s[2],l=s[3],h=s[4],c=s[5],u=s[6],d=s[7],m=s[8],y=s[9],x=s[10],g=s[11],f=s[12],E=s[13],w=s[14],v=s[15];if(i[0].setComponents(l-o,d-h,g-m,v-f).normalize(),i[1].setComponents(l+o,d+h,g+m,v+f).normalize(),i[2].setComponents(l+a,d+c,g+y,v+E).normalize(),i[3].setComponents(l-a,d-c,g-y,v-E).normalize(),i[4].setComponents(l-r,d-u,g-x,v-w).normalize(),e===tn)i[5].setComponents(l+r,d+u,g+x,v+w).normalize();else if(e===_a)i[5].setComponents(r,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yo.x=s.normal.x>0?t.max.x:t.min.x,Yo.y=s.normal.y>0?t.max.y:t.min.y,Yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let n=null,t=!1,e=null,i=null;function s(o,a){e(o,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Fu(n){const t=new WeakMap;function e(r,l){const h=r.array,c=r.usage,u=h.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,h,c),r.onUploadCallback();let m;if(h instanceof Float32Array)m=n.FLOAT;else if(h instanceof Uint16Array)r.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=n.SHORT;else if(h instanceof Uint32Array)m=n.UNSIGNED_INT;else if(h instanceof Int32Array)m=n.INT;else if(h instanceof Int8Array)m=n.BYTE;else if(h instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,h){const c=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(h,r),u.count===-1&&d.length===0&&n.bufferSubData(h,0,c),d.length!==0){for(let m=0,y=d.length;m<y;m++){const x=d[m];n.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(n.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isGLBufferAttribute){const c=t.get(r);(!c||c.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}r.isInterleavedBufferAttribute&&(r=r.data);const h=t.get(r);if(h===void 0)t.set(r,e(r,l));else if(h.version<r.version){if(h.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,r,l),h.version=r.version}}return{get:s,remove:o,update:a}}class Pa extends Ti{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,a=e/2,r=Math.floor(i),l=Math.floor(s),h=r+1,c=l+1,u=t/r,d=e/l,m=[],y=[],x=[],g=[];for(let f=0;f<c;f++){const E=f*d-a;for(let w=0;w<h;w++){const v=w*u-o;y.push(v,-E,0),x.push(0,0,1),g.push(w/r),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<r;E++){const w=E+h*f,v=E+h*(f+1),L=E+1+h*(f+1),R=E+1+h*f;m.push(w,v,R),m.push(v,L,R)}this.setIndex(m),this.setAttribute("position",new qe(y,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zu=`#ifdef USE_ALPHAHASH
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
#endif`,Bu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wu=`#ifdef USE_AOMAP
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
#endif`,Xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
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
#endif`,qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ju=`#ifdef USE_BUMPMAP
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lf=`#define PI 3.141592653589793
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`
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
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pf=`uniform bool receiveShadow;
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
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
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
#endif`,Ff=`struct PhysicalMaterial {
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
}`,Of=`
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kf=`#if defined( USE_POINTS_UV )
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
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
}`,Yp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`uniform float scale;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,i0=`#define MATCAP
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
}`,n0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,o0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,c0=`#define TOON
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
}`,d0=`#define TOON
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
}`,u0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,g0=`uniform float rotation;
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
}`,y0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Ou,alphahash_pars_fragment:zu,alphamap_fragment:Bu,alphamap_pars_fragment:Hu,alphatest_fragment:Gu,alphatest_pars_fragment:Vu,aomap_fragment:Wu,aomap_pars_fragment:Xu,batching_pars_vertex:Yu,batching_vertex:qu,begin_vertex:Ku,beginnormal_vertex:ju,bsdfs:$u,iridescence_fragment:Zu,bumpmap_pars_fragment:Ju,clipping_planes_fragment:Qu,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:ef,clipping_planes_vertex:nf,color_fragment:sf,color_pars_fragment:of,color_pars_vertex:af,color_vertex:rf,common:lf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:cf,displacementmap_pars_vertex:df,displacementmap_vertex:uf,emissivemap_fragment:ff,emissivemap_pars_fragment:pf,colorspace_fragment:mf,colorspace_pars_fragment:gf,envmap_fragment:yf,envmap_common_pars_fragment:xf,envmap_pars_fragment:_f,envmap_pars_vertex:vf,envmap_physical_pars_fragment:If,envmap_vertex:wf,fog_vertex:Mf,fog_pars_vertex:bf,fog_fragment:Sf,fog_pars_fragment:Tf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:Af,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:Rf,lights_pars_begin:Pf,lights_toon_fragment:Lf,lights_toon_pars_fragment:Df,lights_phong_fragment:kf,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Of,lights_fragment_maps:zf,lights_fragment_end:Bf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:Gf,logdepthbuf_pars_vertex:Vf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:Yf,map_particle_fragment:qf,map_particle_pars_fragment:Kf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:$f,morphinstance_vertex:Zf,morphcolor_vertex:Jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:tp,morphtarget_vertex:ep,normal_fragment_begin:ip,normal_fragment_maps:np,normal_pars_fragment:sp,normal_pars_vertex:op,normal_vertex:ap,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:dp,opaque_fragment:up,packing:fp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:yp,roughnessmap_fragment:xp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:wp,shadowmap_vertex:Mp,shadowmask_pars_fragment:bp,skinbase_vertex:Sp,skinning_pars_vertex:Tp,skinning_vertex:Ep,skinnormal_vertex:Ap,specularmap_fragment:Cp,specularmap_pars_fragment:Rp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Ip,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:kp,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:zp,backgroundCube_vert:Bp,backgroundCube_frag:Hp,cube_vert:Gp,cube_frag:Vp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:Yp,distanceRGBA_frag:qp,equirect_vert:Kp,equirect_frag:jp,linedashed_vert:$p,linedashed_frag:Zp,meshbasic_vert:Jp,meshbasic_frag:Qp,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:i0,meshmatcap_frag:n0,meshnormal_vert:s0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:r0,meshphysical_vert:l0,meshphysical_frag:h0,meshtoon_vert:c0,meshtoon_frag:d0,points_vert:u0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:y0},yt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Li={basic:{uniforms:$e([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:$e([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:$e([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:$e([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:$e([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:$e([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:$e([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:$e([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:$e([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:$e([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:$e([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:$e([yt.common,yt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:$e([yt.lights,yt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Li.physical={uniforms:$e([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const qo={r:0,b:0,g:0},Dn=new ki,x0=new be;function _0(n,t,e,i,s,o,a){const r=new Dt(0);let l=o===!0?0:1,h,c,u=null,d=0,m=null;function y(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?e:t).get(w)),w}function x(E){let w=!1;const v=y(E);v===null?f(r,l):v&&v.isColor&&(f(v,1),w=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,w){const v=y(w);v&&(v.isCubeTexture||v.mapping===Ca)?(c===void 0&&(c=new Q(new _t(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Hs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Dn.copy(w.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(x0.makeRotationFromEuler(Dn)),c.material.toneMapped=pe.getTransfer(v.colorSpace)!==xe,(u!==v||d!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Q(new Pa(2,2),new En({name:"BackgroundMaterial",uniforms:Hs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=pe.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,m=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function f(E,w){E.getRGB(qo,Cc(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,w,a)}return{getClearColor:function(){return r},setClearColor:function(E,w=1){r.set(E),l=w,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(r,l)},render:x,addToRenderList:g}}function v0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,a=!1;function r(b,k,G,W,$){let J=!1;const q=u(W,G,k);o!==q&&(o=q,h(o.object)),J=m(b,W,G,$),J&&y(b,W,G,$),$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(b,k,G,W),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return n.createVertexArray()}function h(b){return n.bindVertexArray(b)}function c(b){return n.deleteVertexArray(b)}function u(b,k,G){const W=G.wireframe===!0;let $=i[b.id];$===void 0&&($={},i[b.id]=$);let J=$[k.id];J===void 0&&(J={},$[k.id]=J);let q=J[W];return q===void 0&&(q=d(l()),J[W]=q),q}function d(b){const k=[],G=[],W=[];for(let $=0;$<e;$++)k[$]=0,G[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:W,object:b,attributes:{},index:null}}function m(b,k,G,W){const $=o.attributes,J=k.attributes;let q=0;const nt=G.getAttributes();for(const K in nt)if(nt[K].location>=0){const it=$[K];let ct=J[K];if(ct===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor)),it===void 0||it.attribute!==ct||ct&&it.data!==ct.data)return!0;q++}return o.attributesNum!==q||o.index!==W}function y(b,k,G,W){const $={},J=k.attributes;let q=0;const nt=G.getAttributes();for(const K in nt)if(nt[K].location>=0){let it=J[K];it===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(it=b.instanceColor));const ct={};ct.attribute=it,it&&it.data&&(ct.data=it.data),$[K]=ct,q++}o.attributes=$,o.attributesNum=q,o.index=W}function x(){const b=o.newAttributes;for(let k=0,G=b.length;k<G;k++)b[k]=0}function g(b){f(b,0)}function f(b,k){const G=o.newAttributes,W=o.enabledAttributes,$=o.attributeDivisors;G[b]=1,W[b]===0&&(n.enableVertexAttribArray(b),W[b]=1),$[b]!==k&&(n.vertexAttribDivisor(b,k),$[b]=k)}function E(){const b=o.newAttributes,k=o.enabledAttributes;for(let G=0,W=k.length;G<W;G++)k[G]!==b[G]&&(n.disableVertexAttribArray(G),k[G]=0)}function w(b,k,G,W,$,J,q){q===!0?n.vertexAttribIPointer(b,k,G,$,J):n.vertexAttribPointer(b,k,G,W,$,J)}function v(b,k,G,W){x();const $=W.attributes,J=G.getAttributes(),q=k.defaultAttributeValues;for(const nt in J){const K=J[nt];if(K.location>=0){let j=$[nt];if(j===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){const it=j.normalized,ct=j.itemSize,kt=t.get(j);if(kt===void 0)continue;const Qt=kt.buffer,Z=kt.type,lt=kt.bytesPerElement,gt=Z===n.INT||Z===n.UNSIGNED_INT||j.gpuType===xl;if(j.isInterleavedBufferAttribute){const xt=j.data,Xt=xt.stride,Kt=j.offset;if(xt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<K.locationSize;Jt++)f(K.location+Jt,xt.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Jt=0;Jt<K.locationSize;Jt++)g(K.location+Jt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let Jt=0;Jt<K.locationSize;Jt++)w(K.location+Jt,ct/K.locationSize,Z,it,Xt*lt,(Kt+ct/K.locationSize*Jt)*lt,gt)}else{if(j.isInstancedBufferAttribute){for(let xt=0;xt<K.locationSize;xt++)f(K.location+xt,j.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xt=0;xt<K.locationSize;xt++)g(K.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Qt);for(let xt=0;xt<K.locationSize;xt++)w(K.location+xt,ct/K.locationSize,Z,it,ct*lt,ct/K.locationSize*xt*lt,gt)}}else if(q!==void 0){const it=q[nt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(K.location,it);break;case 3:n.vertexAttrib3fv(K.location,it);break;case 4:n.vertexAttrib4fv(K.location,it);break;default:n.vertexAttrib1fv(K.location,it)}}}}E()}function L(){z();for(const b in i){const k=i[b];for(const G in k){const W=k[G];for(const $ in W)c(W[$].object),delete W[$];delete k[G]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const G in k){const W=k[G];for(const $ in W)c(W[$].object),delete W[$];delete k[G]}delete i[b.id]}function I(b){for(const k in i){const G=i[k];if(G[b.id]===void 0)continue;const W=G[b.id];for(const $ in W)c(W[$].object),delete W[$];delete G[b.id]}}function z(){A(),a=!0,o!==s&&(o=s,h(o.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:z,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:E}}function w0(n,t,e){let i;function s(h){i=h}function o(h,c){n.drawArrays(i,h,c),e.update(c,i,1)}function a(h,c,u){u!==0&&(n.drawArraysInstanced(i,h,c,u),e.update(c,i,u))}function r(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let m=0;for(let y=0;y<u;y++)m+=c[y];e.update(m,i,1)}function l(h,c,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<h.length;y++)a(h[y],c[y],d[y]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let y=0;for(let x=0;x<u;x++)y+=c[x];for(let x=0;x<d.length;x++)e.update(y,i,d[x])}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function M0(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Mi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(R){const I=R===Mo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==nn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qi&&!I)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=m>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:h,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:v,maxSamples:L}}function b0(n){const t=this;let e=null,i=0,s=!1,o=!1;const a=new Bn,r=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,m){const y=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,f=n.get(u);if(!s||y===null||y.length===0||o&&!g)o?c(null):h();else{const E=o?0:i,w=E*4;let v=f.clippingState||null;l.value=v,v=c(y,d,w,m);for(let L=0;L!==w;++L)v[L]=e[L];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,m,y){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,y!==!0||g===null){const f=m+x*4,E=d.matrixWorldInverse;r.getNormalMatrix(E),(g===null||g.length<f)&&(g=new Float32Array(f));for(let w=0,v=m;w!==x;++w,v+=4)a.copy(u[w]).applyMatrix4(E,r),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function S0(n){let t=new WeakMap;function e(a,r){return r===Or?a.mapping=Fs:r===zr&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){const r=a.mapping;if(r===Or||r===zr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new ku(l.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const r=a.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Lc extends Rc{constructor(t=-1,e=1,i=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,a=i+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,r-=c*this.view.offsetY,l=r-c*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const As=4,ph=[.125,.215,.35,.446,.526,.582],Yn=20,dr=new Lc,mh=new Dt;let ur=null,fr=0,pr=0,mr=!1;const Hn=(1+Math.sqrt(5))/2,gs=1/Hn,gh=[new C(-Hn,gs,0),new C(Hn,gs,0),new C(-gs,0,Hn),new C(gs,0,Hn),new C(0,Hn,-gs),new C(0,Hn,gs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ur=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ur,fr,pr),this._renderer.xr.enabled=mr,t.scissorTest=!1,Ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ur=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Mo,format:Mi,colorSpace:An,depthBuffer:!1},s=xh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T0(o)),this._blurMaterial=E0(o,t,e)}return s}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,i,s){const r=new ti(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(mh),c.toneMapping=Mn,c.autoClear=!1;const m=new Mt({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),y=new Q(new _t,m);let x=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(mh),x=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(r.up.set(0,l[f],0),r.lookAt(h[f],0,0)):E===1?(r.up.set(0,0,l[f]),r.lookAt(0,h[f],0)):(r.up.set(0,l[f],0),r.lookAt(0,0,h[f]));const w=this._cubeSize;Ko(s,E*w,f>2?w:0,w,w),c.setRenderTarget(s),x&&c.render(y,r),c.render(t,r)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Fs||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new Q(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Ko(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,dr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=gh[(s-o-1)%gh.length];this._blur(t,o-1,o,a,r)}e.autoClear=i}_blur(t,e,i,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",o),this._halfBlur(a,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,a,r){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Q(this._lodPlanes[s],h),d=h.uniforms,m=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Yn-1),x=o/y,g=isFinite(o)?1+Math.floor(c*x):Yn;g>Yn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yn}`);const f=[];let E=0;for(let I=0;I<Yn;++I){const z=I/x,A=Math.exp(-z*z/2);f.push(A),I===0?E+=A:I<g&&(E+=2*A)}for(let I=0;I<f.length;I++)f[I]=f[I]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:w}=this;d.dTheta.value=y,d.mipInt.value=w-i;const v=this._sizeLods[s],L=3*v*(s>w-As?s-w+As:0),R=4*(this._cubeSize-v);Ko(e,L,R,3*v,2*v),l.setRenderTarget(e),l.render(u,dr)}}function T0(n){const t=[],e=[],i=[];let s=n;const o=n-As+1+ph.length;for(let a=0;a<o;a++){const r=Math.pow(2,s);e.push(r);let l=1/r;a>n-As?l=ph[a-n+As-1]:a===0&&(l=0),i.push(l);const h=1/(r-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,y=6,x=3,g=2,f=1,E=new Float32Array(x*y*m),w=new Float32Array(g*y*m),v=new Float32Array(f*y*m);for(let R=0;R<m;R++){const I=R%3*2/3-1,z=R>2?0:-1,A=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];E.set(A,x*y*R),w.set(d,g*y*R);const b=[R,R,R,R,R,R];v.set(b,f*y*R)}const L=new Ti;L.setAttribute("position",new bi(E,x)),L.setAttribute("uv",new bi(w,g)),L.setAttribute("faceIndex",new bi(v,f)),t.push(L),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function xh(n,t,e){const i=new $n(n,t,e);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ko(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function E0(n,t,e){const i=new Float32Array(Yn),s=new C(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function _h(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function vh(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function A0(n){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const l=r.mapping,h=l===Or||l===zr,c=l===Fs||l===Os;if(h||c){let u=t.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return e===null&&(e=new yh(n)),u=h?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const m=r.image;return h&&m&&m.height>0||c&&m&&s(m)?(e===null&&(e=new yh(n)),u=h?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function s(r){let l=0;const h=6;for(let c=0;c<h;c++)r[c]!==void 0&&l++;return l===h}function o(r){const l=r.target;l.removeEventListener("dispose",o);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function C0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&El("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function R0(n,t,e,i){const s={},o=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const y in d.attributes)t.remove(d.attributes[y]);for(const y in d.morphAttributes){const x=d.morphAttributes[y];for(let g=0,f=x.length;g<f;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];const m=o.get(d);m&&(t.remove(m),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function r(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const y in d)t.update(d[y],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const y in m){const x=m[y];for(let g=0,f=x.length;g<f;g++)t.update(x[g],n.ARRAY_BUFFER)}}function h(u){const d=[],m=u.index,y=u.attributes.position;let x=0;if(m!==null){const E=m.array;x=m.version;for(let w=0,v=E.length;w<v;w+=3){const L=E[w+0],R=E[w+1],I=E[w+2];d.push(L,R,R,I,I,L)}}else if(y!==void 0){const E=y.array;x=y.version;for(let w=0,v=E.length/3-1;w<v;w+=3){const L=w+0,R=w+1,I=w+2;d.push(L,R,R,I,I,L)}}else return;const g=new(wc(d)?Ac:Ec)(d,1);g.version=x;const f=o.get(u);f&&t.remove(f),o.set(u,g)}function c(u){const d=o.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&h(u)}else h(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:c}}function P0(n,t,e){let i;function s(d){i=d}let o,a;function r(d){o=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,o,d*a),e.update(m,i,1)}function h(d,m,y){y!==0&&(n.drawElementsInstanced(i,m,o,d*a,y),e.update(m,i,y))}function c(d,m,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,d,0,y);let g=0;for(let f=0;f<y;f++)g+=m[f];e.update(g,i,1)}function u(d,m,y,x){if(y===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)h(d[f]/a,m[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,o,d,0,x,0,y);let f=0;for(let E=0;E<y;E++)f+=m[E];for(let E=0;E<x.length;E++)e.update(f,i,x[E])}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function I0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,r){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=r*(o/3);break;case n.LINES:e.lines+=r*(o/2);break;case n.LINE_STRIP:e.lines+=r*(o-1);break;case n.LINE_LOOP:e.lines+=r*o;break;case n.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function L0(n,t,e){const i=new WeakMap,s=new _e;function o(a,r,l){const h=a.morphTargetInfluences,c=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=c!==void 0?c.length:0;let d=i.get(r);if(d===void 0||d.count!==u){let b=function(){z.dispose(),i.delete(r),r.removeEventListener("dispose",b)};var m=b;d!==void 0&&d.texture.dispose();const y=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,g=r.morphAttributes.color!==void 0,f=r.morphAttributes.position||[],E=r.morphAttributes.normal||[],w=r.morphAttributes.color||[];let v=0;y===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let L=r.attributes.position.count*v,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const I=new Float32Array(L*R*4*u),z=new bc(I,L,R,u);z.type=Qi,z.needsUpdate=!0;const A=v*4;for(let k=0;k<u;k++){const G=f[k],W=E[k],$=w[k],J=L*R*4*k;for(let q=0;q<G.count;q++){const nt=q*A;y===!0&&(s.fromBufferAttribute(G,q),I[J+nt+0]=s.x,I[J+nt+1]=s.y,I[J+nt+2]=s.z,I[J+nt+3]=0),x===!0&&(s.fromBufferAttribute(W,q),I[J+nt+4]=s.x,I[J+nt+5]=s.y,I[J+nt+6]=s.z,I[J+nt+7]=0),g===!0&&(s.fromBufferAttribute($,q),I[J+nt+8]=s.x,I[J+nt+9]=s.y,I[J+nt+10]=s.z,I[J+nt+11]=$.itemSize===4?s.w:1)}}d={count:u,texture:z,size:new qt(L,R)},i.set(r,d),r.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let y=0;for(let g=0;g<h.length;g++)y+=h[g];const x=r.morphTargetsRelative?1:1-y;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function D0(n,t,e,i){let s=new WeakMap;function o(l){const h=i.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function r(l){const h=l.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class Dc extends Je{constructor(t,e,i,s,o,a,r,l,h,c=ks){if(c!==ks&&c!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ks&&(i=jn),i===void 0&&c===Bs&&(i=zs),super(null,s,o,a,r,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:fi,this.minFilter=l!==void 0?l:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kc=new Je,wh=new Dc(1,1),Uc=new bc,Nc=new yu,Fc=new Pc,Mh=[],bh=[],Sh=new Float32Array(16),Th=new Float32Array(9),Eh=new Float32Array(4);function qs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Mh[s];if(o===void 0&&(o=new Float32Array(s),Mh[s]=o),t!==0){i.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,n[a].toArray(o,r)}return o}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ia(n,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function k0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function U0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function N0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function F0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function O0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,i))return;Eh.set(i),n.uniformMatrix2fv(this.addr,!1,Eh),Ue(e,i)}}function z0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,i))return;Th.set(i),n.uniformMatrix3fv(this.addr,!1,Th),Ue(e,i)}}function B0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,i))return;Sh.set(i),n.uniformMatrix4fv(this.addr,!1,Sh),Ue(e,i)}}function H0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function G0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function X0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function j0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(wh.compareFunction=vc,o=wh):o=kc,e.setTexture2D(t||o,s)}function $0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Nc,s)}function Z0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Fc,s)}function J0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Uc,s)}function Q0(n){switch(n){case 5126:return k0;case 35664:return U0;case 35665:return N0;case 35666:return F0;case 35674:return O0;case 35675:return z0;case 35676:return B0;case 5124:case 35670:return H0;case 35667:case 35671:return G0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return Y0;case 36295:return q0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}function tm(n,t){n.uniform1fv(this.addr,t)}function em(n,t){const e=qs(t,this.size,2);n.uniform2fv(this.addr,e)}function im(n,t){const e=qs(t,this.size,3);n.uniform3fv(this.addr,e)}function nm(n,t){const e=qs(t,this.size,4);n.uniform4fv(this.addr,e)}function sm(n,t){const e=qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function om(n,t){const e=qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function am(n,t){const e=qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function rm(n,t){n.uniform1iv(this.addr,t)}function lm(n,t){n.uniform2iv(this.addr,t)}function hm(n,t){n.uniform3iv(this.addr,t)}function cm(n,t){n.uniform4iv(this.addr,t)}function dm(n,t){n.uniform1uiv(this.addr,t)}function um(n,t){n.uniform2uiv(this.addr,t)}function fm(n,t){n.uniform3uiv(this.addr,t)}function pm(n,t){n.uniform4uiv(this.addr,t)}function mm(n,t,e){const i=this.cache,s=t.length,o=Ia(e,s);ke(i,o)||(n.uniform1iv(this.addr,o),Ue(i,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||kc,o[a])}function gm(n,t,e){const i=this.cache,s=t.length,o=Ia(e,s);ke(i,o)||(n.uniform1iv(this.addr,o),Ue(i,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nc,o[a])}function ym(n,t,e){const i=this.cache,s=t.length,o=Ia(e,s);ke(i,o)||(n.uniform1iv(this.addr,o),Ue(i,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fc,o[a])}function xm(n,t,e){const i=this.cache,s=t.length,o=Ia(e,s);ke(i,o)||(n.uniform1iv(this.addr,o),Ue(i,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uc,o[a])}function _m(n){switch(n){case 5126:return tm;case 35664:return em;case 35665:return im;case 35666:return nm;case 35674:return sm;case 35675:return om;case 35676:return am;case 5124:case 35670:return rm;case 35667:case 35671:return lm;case 35668:case 35672:return hm;case 35669:case 35673:return cm;case 5125:return dm;case 36294:return um;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return xm}}class vm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Q0(e.type)}}class wm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const r=s[o];r.setValue(t,e[r.id],i)}}}const gr=/(\w+)(\])?(\[|\.)?/g;function Ah(n,t){n.seq.push(t),n.map[t.id]=t}function bm(n,t,e){const i=n.name,s=i.length;for(gr.lastIndex=0;;){const o=gr.exec(i),a=gr.lastIndex;let r=o[1];const l=o[2]==="]",h=o[3];if(l&&(r=r|0),h===void 0||h==="["&&a+2===s){Ah(e,h===void 0?new vm(r,n,t):new wm(r,n,t));break}else{let u=e.map[r];u===void 0&&(u=new Mm(r),Ah(e,u)),e=u}}}class fa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);bm(o,a,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Ch(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Sm=37297;let Tm=0;function Em(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const r=a+1;i.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return i.join(`
`)}function Am(n){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(n);let i;switch(t===e?i="":t===xa&&e===ya?i="LinearDisplayP3ToLinearSRGB":t===ya&&e===xa&&(i="LinearSRGBToLinearDisplayP3"),n){case An:case Ra:return[i,"LinearTransferOETF"];case Ii:case Sl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Em(n.getShaderSource(t),a)}else return s}function Cm(n,t){const e=Am(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rm(n,t){let e;switch(t){case Pd:e="Linear";break;case Id:e="Reinhard";break;case Ld:e="OptimizedCineon";break;case Dd:e="ACESFilmic";break;case Ud:e="AgX";break;case Nd:e="Neutral";break;case kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Pm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function Im(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Lm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),a=o.name;let r=1;o.type===n.FLOAT_MAT2&&(r=2),o.type===n.FLOAT_MAT3&&(r=3),o.type===n.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:n.getAttribLocation(t,a),locationSize:r}}return e}function co(n){return n!==""}function Ph(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(n){return n.replace(Dm,Um)}const km=new Map;function Um(n,t){let e=$t[t];if(e===void 0){const i=km.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ml(e)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(n){return n.replace(Nm,Fm)}function Fm(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Dh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Om(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function zm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Os:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function Hm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yl:t="ENVMAP_BLENDING_MULTIPLY";break;case Cd:t="ENVMAP_BLENDING_MIX";break;case Rd:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Vm(n,t,e,i){const s=n.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=Om(e),h=zm(e),c=Bm(e),u=Hm(e),d=Gm(e),m=Pm(e),y=Im(o),x=s.createProgram();let g,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(co).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(co).join(`
`),f.length>0&&(f+=`
`)):(g=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),f=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Mn?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(co).join(`
`)),a=ml(a),a=Ph(a,e),a=Ih(a,e),r=ml(r),r=Ph(r,e),r=Ih(r,e),a=Lh(a),r=Lh(r),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=E+g+a,v=E+f+r,L=Ch(s,s.VERTEX_SHADER,w),R=Ch(s,s.FRAGMENT_SHADER,v);s.attachShader(x,L),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(k){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(L).trim(),$=s.getShaderInfoLog(R).trim();let J=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,R);else{const nt=Rh(s,L,"vertex"),K=Rh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+nt+`
`+K)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||$==="")&&(q=!1);q&&(k.diagnostics={runnable:J,programLog:G,vertexShader:{log:W,prefix:g},fragmentShader:{log:$,prefix:f}})}s.deleteShader(L),s.deleteShader(R),z=new fa(s,x),A=Lm(s,x)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Sm)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=R,this}let Wm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ym(t),e.set(t,i)),i}}class Ym{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}}function qm(n,t,e,i,s,o,a){const r=new Sc,l=new Xm,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return h.add(A),A===0?"uv":`uv${A}`}function g(A,b,k,G,W){const $=G.fog,J=W.geometry,q=A.isMeshStandardMaterial?G.environment:null,nt=(A.isMeshStandardMaterial?e:t).get(A.envMap||q),K=nt&&nt.mapping===Ca?nt.image.height:null,j=y[A.type];A.precision!==null&&(m=s.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const it=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ct=it!==void 0?it.length:0;let kt=0;J.morphAttributes.position!==void 0&&(kt=1),J.morphAttributes.normal!==void 0&&(kt=2),J.morphAttributes.color!==void 0&&(kt=3);let Qt,Z,lt,gt;if(j){const re=Li[j];Qt=re.vertexShader,Z=re.fragmentShader}else Qt=A.vertexShader,Z=A.fragmentShader,l.update(A),lt=l.getVertexShaderID(A),gt=l.getFragmentShaderID(A);const xt=n.getRenderTarget(),Xt=W.isInstancedMesh===!0,Kt=W.isBatchedMesh===!0,Jt=!!A.map,ve=!!A.matcap,D=!!nt,we=!!A.aoMap,ie=!!A.lightMap,ae=!!A.bumpMap,It=!!A.normalMap,Se=!!A.displacementMap,Vt=!!A.emissiveMap,Wt=!!A.metalnessMap,P=!!A.roughnessMap,_=A.anisotropy>0,U=A.clearcoat>0,O=A.dispersion>0,V=A.iridescence>0,Y=A.sheen>0,Tt=A.transmission>0,ut=_&&!!A.anisotropyMap,vt=U&&!!A.clearcoatMap,Gt=U&&!!A.clearcoatNormalMap,rt=U&&!!A.clearcoatRoughnessMap,wt=V&&!!A.iridescenceMap,jt=V&&!!A.iridescenceThicknessMap,Ut=Y&&!!A.sheenColorMap,bt=Y&&!!A.sheenRoughnessMap,Ot=!!A.specularMap,Yt=!!A.specularColorMap,ge=!!A.specularIntensityMap,N=Tt&&!!A.transmissionMap,dt=Tt&&!!A.thicknessMap,tt=!!A.gradientMap,st=!!A.alphaMap,mt=A.alphaTest>0,zt=!!A.alphaHash,te=!!A.extensions;let Re=Mn;A.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Re=n.toneMapping);const Oe={shaderID:j,shaderType:A.type,shaderName:A.name,vertexShader:Qt,fragmentShader:Z,defines:A.defines,customVertexShaderID:lt,customFragmentShaderID:gt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Kt,batchingColor:Kt&&W._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&W.instanceColor!==null,instancingMorph:Xt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:xt===null?n.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:An,alphaToCoverage:!!A.alphaToCoverage,map:Jt,matcap:ve,envMap:D,envMapMode:D&&nt.mapping,envMapCubeUVHeight:K,aoMap:we,lightMap:ie,bumpMap:ae,normalMap:It,displacementMap:d&&Se,emissiveMap:Vt,normalMapObjectSpace:It&&A.normalMapType===Bd,normalMapTangentSpace:It&&A.normalMapType===_c,metalnessMap:Wt,roughnessMap:P,anisotropy:_,anisotropyMap:ut,clearcoat:U,clearcoatMap:vt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:rt,dispersion:O,iridescence:V,iridescenceMap:wt,iridescenceThicknessMap:jt,sheen:Y,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:Ot,specularColorMap:Yt,specularIntensityMap:ge,transmission:Tt,transmissionMap:N,thicknessMap:dt,gradientMap:tt,opaque:A.transparent===!1&&A.blending===Ds&&A.alphaToCoverage===!1,alphaMap:st,alphaTest:mt,alphaHash:zt,combine:A.combine,mapUv:Jt&&x(A.map.channel),aoMapUv:we&&x(A.aoMap.channel),lightMapUv:ie&&x(A.lightMap.channel),bumpMapUv:ae&&x(A.bumpMap.channel),normalMapUv:It&&x(A.normalMap.channel),displacementMapUv:Se&&x(A.displacementMap.channel),emissiveMapUv:Vt&&x(A.emissiveMap.channel),metalnessMapUv:Wt&&x(A.metalnessMap.channel),roughnessMapUv:P&&x(A.roughnessMap.channel),anisotropyMapUv:ut&&x(A.anisotropyMap.channel),clearcoatMapUv:vt&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(A.sheenRoughnessMap.channel),specularMapUv:Ot&&x(A.specularMap.channel),specularColorMapUv:Yt&&x(A.specularColorMap.channel),specularIntensityMapUv:ge&&x(A.specularIntensityMap.channel),transmissionMapUv:N&&x(A.transmissionMap.channel),thicknessMapUv:dt&&x(A.thicknessMap.channel),alphaMapUv:st&&x(A.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(It||_),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(Jt||st),fog:!!$,useFog:A.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:kt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:Jt&&A.map.isVideoTexture===!0&&pe.getTransfer(A.map.colorSpace)===xe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ve,flipSided:A.side===ei,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:te&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&A.extensions.multiDraw===!0||Kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Oe.vertexUv1s=h.has(1),Oe.vertexUv2s=h.has(2),Oe.vertexUv3s=h.has(3),h.clear(),Oe}function f(A){const b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)b.push(k),b.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(E(b,A),w(b,A),b.push(n.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function E(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function w(A,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),A.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.doubleSided&&r.enable(10),b.flipSided&&r.enable(11),b.useDepthPacking&&r.enable(12),b.dithering&&r.enable(13),b.transmission&&r.enable(14),b.sheen&&r.enable(15),b.opaque&&r.enable(16),b.pointsUvs&&r.enable(17),b.decodeVideoTexture&&r.enable(18),b.alphaToCoverage&&r.enable(19),A.push(r.mask)}function v(A){const b=y[A.type];let k;if(b){const G=Li[b];k=Pu.clone(G.uniforms)}else k=A.uniforms;return k}function L(A,b){let k;for(let G=0,W=c.length;G<W;G++){const $=c[G];if($.cacheKey===b){k=$,++k.usedTimes;break}}return k===void 0&&(k=new Vm(n,b,A,o),c.push(k)),k}function R(A){if(--A.usedTimes===0){const b=c.indexOf(A);c[b]=c[c.length-1],c.pop(),A.destroy()}}function I(A){l.remove(A)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:R,releaseShaderCache:I,programs:c,dispose:z}}function Km(){let n=new WeakMap;function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function e(o){n.delete(o)}function i(o,a,r){n.get(o)[a]=r}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function jm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function kh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uh(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,m,y,x,g){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:y,renderOrder:u.renderOrder,z:x,group:g},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=y,f.renderOrder=u.renderOrder,f.z=x,f.group=g),t++,f}function r(u,d,m,y,x,g){const f=a(u,d,m,y,x,g);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,d,m,y,x,g){const f=a(u,d,m,y,x,g);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function h(u,d){e.length>1&&e.sort(u||jm),i.length>1&&i.sort(d||kh),s.length>1&&s.sort(d||kh)}function c(){for(let u=t,d=n.length;u<d;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:r,unshift:l,finish:c,sort:h}}function $m(){let n=new WeakMap;function t(i,s){const o=n.get(i);let a;return o===void 0?(a=new Uh,n.set(i,[a])):s>=o.length?(a=new Uh,o.push(a)):a=o[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Zm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Dt};break;case"SpotLight":e={position:new C,direction:new C,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Jm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Qm=0;function tg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function eg(n){const t=new Zm,e=Jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,o=new be,a=new be;function r(h){let c=0,u=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,y=0,x=0,g=0,f=0,E=0,w=0,v=0,L=0,R=0,I=0;h.sort(tg);for(let A=0,b=h.length;A<b;A++){const k=h[A],G=k.color,W=k.intensity,$=k.distance,J=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)c+=G.r*W,u+=G.g*W,d+=G.b*W;else if(k.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(k.sh.coefficients[q],W);I++}else if(k.isDirectionalLight){const q=t.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const nt=k.shadow,K=e.get(k);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=k.shadow.matrix,E++}i.directional[m]=q,m++}else if(k.isSpotLight){const q=t.get(k);q.position.setFromMatrixPosition(k.matrixWorld),q.color.copy(G).multiplyScalar(W),q.distance=$,q.coneCos=Math.cos(k.angle),q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),q.decay=k.decay,i.spot[x]=q;const nt=k.shadow;if(k.map&&(i.spotLightMap[L]=k.map,L++,nt.updateMatrices(k),k.castShadow&&R++),i.spotLightMatrix[x]=nt.matrix,k.castShadow){const K=e.get(k);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=J,v++}x++}else if(k.isRectAreaLight){const q=t.get(k);q.color.copy(G).multiplyScalar(W),q.halfWidth.set(k.width*.5,0,0),q.halfHeight.set(0,k.height*.5,0),i.rectArea[g]=q,g++}else if(k.isPointLight){const q=t.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity),q.distance=k.distance,q.decay=k.decay,k.castShadow){const nt=k.shadow,K=e.get(k);K.shadowIntensity=nt.intensity,K.shadowBias=nt.bias,K.shadowNormalBias=nt.normalBias,K.shadowRadius=nt.radius,K.shadowMapSize=nt.mapSize,K.shadowCameraNear=nt.camera.near,K.shadowCameraFar=nt.camera.far,i.pointShadow[y]=K,i.pointShadowMap[y]=J,i.pointShadowMatrix[y]=k.shadow.matrix,w++}i.point[y]=q,y++}else if(k.isHemisphereLight){const q=t.get(k);q.skyColor.copy(k.color).multiplyScalar(W),q.groundColor.copy(k.groundColor).multiplyScalar(W),i.hemi[f]=q,f++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const z=i.hash;(z.directionalLength!==m||z.pointLength!==y||z.spotLength!==x||z.rectAreaLength!==g||z.hemiLength!==f||z.numDirectionalShadows!==E||z.numPointShadows!==w||z.numSpotShadows!==v||z.numSpotMaps!==L||z.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=g,i.point.length=y,i.hemi.length=f,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=v+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,z.directionalLength=m,z.pointLength=y,z.spotLength=x,z.rectAreaLength=g,z.hemiLength=f,z.numDirectionalShadows=E,z.numPointShadows=w,z.numSpotShadows=v,z.numSpotMaps=L,z.numLightProbes=I,i.version=Qm++)}function l(h,c){let u=0,d=0,m=0,y=0,x=0;const g=c.matrixWorldInverse;for(let f=0,E=h.length;f<E;f++){const w=h[f];if(w.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(w.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(w.isRectAreaLight){const v=i.rectArea[y];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),a.identity(),o.copy(w.matrixWorld),o.premultiply(g),a.extractRotation(o),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:r,setupView:l,state:i}}function Nh(n){const t=new eg(n),e=[],i=[];function s(c){h.camera=c,e.length=0,i.length=0}function o(c){e.push(c)}function a(c){i.push(c)}function r(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function ig(n){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let r;return a===void 0?(r=new Nh(n),t.set(s,[r])):o>=a.length?(r=new Nh(n),a.push(r)):r=a[o],r}function i(){t=new WeakMap}return{get:e,dispose:i}}class ng extends Ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sg extends Ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function rg(n,t,e){let i=new Cl;const s=new qt,o=new qt,a=new _e,r=new ng({depthPacking:zd}),l=new sg,h={},c=e.maxTextureSize,u={[Tn]:ei,[ei]:Tn,[Ve]:Ve},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:og,fragmentShader:ag}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new Ti;y.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Q(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(R,I,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const A=n.getRenderTarget(),b=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),G=n.state;G.setBlending(wn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const W=f!==qi&&this.type===qi,$=f===qi&&this.type!==qi;for(let J=0,q=R.length;J<q;J++){const nt=R[J],K=nt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const j=K.getFrameExtents();if(s.multiply(j),o.copy(K.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/j.x),s.x=o.x*j.x,K.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/j.y),s.y=o.y*j.y,K.mapSize.y=o.y)),K.map===null||W===!0||$===!0){const ct=this.type!==qi?{minFilter:fi,magFilter:fi}:{};K.map!==null&&K.map.dispose(),K.map=new $n(s.x,s.y,ct),K.map.texture.name=nt.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const it=K.getViewportCount();for(let ct=0;ct<it;ct++){const kt=K.getViewport(ct);a.set(o.x*kt.x,o.y*kt.y,o.x*kt.z,o.y*kt.w),G.viewport(a),K.updateMatrices(nt,ct),i=K.getFrustum(),v(I,z,K.camera,nt,this.type)}K.isPointLightShadow!==!0&&this.type===qi&&E(K,z),K.needsUpdate=!1}f=this.type,g.needsUpdate=!1,n.setRenderTarget(A,b,k)};function E(R,I){const z=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new $n(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,z,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,z,m,x,null)}function w(R,I,z,A){let b=null;const k=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)b=k;else if(b=z.isPointLight===!0?l:r,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const G=b.uuid,W=I.uuid;let $=h[G];$===void 0&&($={},h[G]=$);let J=$[W];J===void 0&&(J=b.clone(),$[W]=J,I.addEventListener("dispose",L)),b=J}if(b.visible=I.visible,b.wireframe=I.wireframe,A===qi?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=n.properties.get(b);G.light=z}return b}function v(R,I,z,A,b){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===qi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const W=t.update(R),$=R.material;if(Array.isArray($)){const J=W.groups;for(let q=0,nt=J.length;q<nt;q++){const K=J[q],j=$[K.materialIndex];if(j&&j.visible){const it=w(R,j,A,b);R.onBeforeShadow(n,R,I,z,W,it,K),n.renderBufferDirect(z,null,W,it,R,K),R.onAfterShadow(n,R,I,z,W,it,K)}}}else if($.visible){const J=w(R,$,A,b);R.onBeforeShadow(n,R,I,z,W,J,null),n.renderBufferDirect(z,null,W,J,R,null),R.onAfterShadow(n,R,I,z,W,J,null)}}const G=R.children;for(let W=0,$=G.length;W<$;W++)v(G[W],I,z,A,b)}function L(R){R.target.removeEventListener("dispose",L);for(const z in h){const A=h[z],b=R.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function lg(n){function t(){let N=!1;const dt=new _e;let tt=null;const st=new _e(0,0,0,0);return{setMask:function(mt){tt!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),tt=mt)},setLocked:function(mt){N=mt},setClear:function(mt,zt,te,Re,Oe){Oe===!0&&(mt*=Re,zt*=Re,te*=Re),dt.set(mt,zt,te,Re),st.equals(dt)===!1&&(n.clearColor(mt,zt,te,Re),st.copy(dt))},reset:function(){N=!1,tt=null,st.set(-1,0,0,0)}}}function e(){let N=!1,dt=null,tt=null,st=null;return{setTest:function(mt){mt?gt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(mt){dt!==mt&&!N&&(n.depthMask(mt),dt=mt)},setFunc:function(mt){if(tt!==mt){switch(mt){case wd:n.depthFunc(n.NEVER);break;case Md:n.depthFunc(n.ALWAYS);break;case bd:n.depthFunc(n.LESS);break;case ma:n.depthFunc(n.LEQUAL);break;case Sd:n.depthFunc(n.EQUAL);break;case Td:n.depthFunc(n.GEQUAL);break;case Ed:n.depthFunc(n.GREATER);break;case Ad:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=mt}},setLocked:function(mt){N=mt},setClear:function(mt){st!==mt&&(n.clearDepth(mt),st=mt)},reset:function(){N=!1,dt=null,tt=null,st=null}}}function i(){let N=!1,dt=null,tt=null,st=null,mt=null,zt=null,te=null,Re=null,Oe=null;return{setTest:function(re){N||(re?gt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(re){dt!==re&&!N&&(n.stencilMask(re),dt=re)},setFunc:function(re,zi,Ci){(tt!==re||st!==zi||mt!==Ci)&&(n.stencilFunc(re,zi,Ci),tt=re,st=zi,mt=Ci)},setOp:function(re,zi,Ci){(zt!==re||te!==zi||Re!==Ci)&&(n.stencilOp(re,zi,Ci),zt=re,te=zi,Re=Ci)},setLocked:function(re){N=re},setClear:function(re){Oe!==re&&(n.clearStencil(re),Oe=re)},reset:function(){N=!1,dt=null,tt=null,st=null,mt=null,zt=null,te=null,Re=null,Oe=null}}}const s=new t,o=new e,a=new i,r=new WeakMap,l=new WeakMap;let h={},c={},u=new WeakMap,d=[],m=null,y=!1,x=null,g=null,f=null,E=null,w=null,v=null,L=null,R=new Dt(0,0,0),I=0,z=!1,A=null,b=null,k=null,G=null,W=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(nt)[1]),J=q>=1):nt.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),J=q>=2);let K=null,j={};const it=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),kt=new _e().fromArray(it),Qt=new _e().fromArray(ct);function Z(N,dt,tt,st){const mt=new Uint8Array(4),zt=n.createTexture();n.bindTexture(N,zt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<tt;te++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,st,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(dt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return zt}const lt={};lt[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(n.DEPTH_TEST),o.setFunc(ma),ae(!1),It(Gl),gt(n.CULL_FACE),we(wn);function gt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function xt(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Xt(N,dt){return c[N]!==dt?(n.bindFramebuffer(N,dt),c[N]=dt,N===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=dt),N===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Kt(N,dt){let tt=d,st=!1;if(N){tt=u.get(dt),tt===void 0&&(tt=[],u.set(dt,tt));const mt=N.textures;if(tt.length!==mt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let zt=0,te=mt.length;zt<te;zt++)tt[zt]=n.COLOR_ATTACHMENT0+zt;tt.length=mt.length,st=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,st=!0);st&&n.drawBuffers(tt)}function Jt(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const ve={[Xn]:n.FUNC_ADD,[sd]:n.FUNC_SUBTRACT,[od]:n.FUNC_REVERSE_SUBTRACT};ve[ad]=n.MIN,ve[rd]=n.MAX;const D={[ld]:n.ZERO,[hd]:n.ONE,[cd]:n.SRC_COLOR,[Nr]:n.SRC_ALPHA,[gd]:n.SRC_ALPHA_SATURATE,[pd]:n.DST_COLOR,[ud]:n.DST_ALPHA,[dd]:n.ONE_MINUS_SRC_COLOR,[Fr]:n.ONE_MINUS_SRC_ALPHA,[md]:n.ONE_MINUS_DST_COLOR,[fd]:n.ONE_MINUS_DST_ALPHA,[yd]:n.CONSTANT_COLOR,[xd]:n.ONE_MINUS_CONSTANT_COLOR,[_d]:n.CONSTANT_ALPHA,[vd]:n.ONE_MINUS_CONSTANT_ALPHA};function we(N,dt,tt,st,mt,zt,te,Re,Oe,re){if(N===wn){y===!0&&(xt(n.BLEND),y=!1);return}if(y===!1&&(gt(n.BLEND),y=!0),N!==nd){if(N!==x||re!==z){if((g!==Xn||w!==Xn)&&(n.blendEquation(n.FUNC_ADD),g=Xn,w=Xn),re)switch(N){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}f=null,E=null,v=null,L=null,R.set(0,0,0),I=0,x=N,z=re}return}mt=mt||dt,zt=zt||tt,te=te||st,(dt!==g||mt!==w)&&(n.blendEquationSeparate(ve[dt],ve[mt]),g=dt,w=mt),(tt!==f||st!==E||zt!==v||te!==L)&&(n.blendFuncSeparate(D[tt],D[st],D[zt],D[te]),f=tt,E=st,v=zt,L=te),(Re.equals(R)===!1||Oe!==I)&&(n.blendColor(Re.r,Re.g,Re.b,Oe),R.copy(Re),I=Oe),x=N,z=!1}function ie(N,dt){N.side===Ve?xt(n.CULL_FACE):gt(n.CULL_FACE);let tt=N.side===ei;dt&&(tt=!tt),ae(tt),N.blending===Ds&&N.transparent===!1?we(wn):we(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const st=N.stencilWrite;a.setTest(st),st&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(N){A!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),A=N)}function It(N){N!==ed?(gt(n.CULL_FACE),N!==b&&(N===Gl?n.cullFace(n.BACK):N===id?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),b=N}function Se(N){N!==k&&(J&&n.lineWidth(N),k=N)}function Vt(N,dt,tt){N?(gt(n.POLYGON_OFFSET_FILL),(G!==dt||W!==tt)&&(n.polygonOffset(dt,tt),G=dt,W=tt)):xt(n.POLYGON_OFFSET_FILL)}function Wt(N){N?gt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function P(N){N===void 0&&(N=n.TEXTURE0+$-1),K!==N&&(n.activeTexture(N),K=N)}function _(N,dt,tt){tt===void 0&&(K===null?tt=n.TEXTURE0+$-1:tt=K);let st=j[tt];st===void 0&&(st={type:void 0,texture:void 0},j[tt]=st),(st.type!==N||st.texture!==dt)&&(K!==tt&&(n.activeTexture(tt),K=tt),n.bindTexture(N,dt||lt[N]),st.type=N,st.texture=dt)}function U(){const N=j[K];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function jt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){kt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),kt.copy(N))}function bt(N){Qt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Qt.copy(N))}function Ot(N,dt){let tt=l.get(dt);tt===void 0&&(tt=new WeakMap,l.set(dt,tt));let st=tt.get(N);st===void 0&&(st=n.getUniformBlockIndex(dt,N.name),tt.set(N,st))}function Yt(N,dt){const st=l.get(dt).get(N);r.get(dt)!==st&&(n.uniformBlockBinding(dt,st,N.__bindingPointIndex),r.set(dt,st))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,j={},c={},u=new WeakMap,d=[],m=null,y=!1,x=null,g=null,f=null,E=null,w=null,v=null,L=null,R=new Dt(0,0,0),I=0,z=!1,A=null,b=null,k=null,G=null,W=null,kt.set(0,0,n.canvas.width,n.canvas.height),Qt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:gt,disable:xt,bindFramebuffer:Xt,drawBuffers:Kt,useProgram:Jt,setBlending:we,setMaterial:ie,setFlipSided:ae,setCullFace:It,setLineWidth:Se,setPolygonOffset:Vt,setScissorTest:Wt,activeTexture:P,bindTexture:_,unbindTexture:U,compressedTexImage2D:O,compressedTexImage3D:V,texImage2D:wt,texImage3D:jt,updateUBOMapping:Ot,uniformBlockBinding:Yt,texStorage2D:Gt,texStorage3D:rt,texSubImage2D:Y,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Ut,viewport:bt,reset:ge}}function Fh(n,t,e,i){const s=hg(i);switch(e){case uc:return n*t;case pc:return n*t;case mc:return n*t*2;case gc:return n*t/s.components*s.byteLength;case wl:return n*t/s.components*s.byteLength;case yc:return n*t*2/s.components*s.byteLength;case Ml:return n*t*2/s.components*s.byteLength;case fc:return n*t*3/s.components*s.byteLength;case Mi:return n*t*4/s.components*s.byteLength;case bl:return n*t*4/s.components*s.byteLength;case la:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ca:case da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vr:case Xr:return Math.max(n,16)*Math.max(t,8)/4;case Gr:case Wr:return Math.max(n,8)*Math.max(t,8)/2;case Yr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ua:case hl:case cl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xc:case dl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ul:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(n){switch(n){case nn:case hc:return{byteLength:1,components:1};case xo:case cc:case Mo:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case jn:case xl:case Qi:return{byteLength:4,components:1};case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function cg(n,t,e,i,s,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,c=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,_){return m?new OffscreenCanvas(P,_):va("canvas")}function x(P,_,U){let O=1;const V=Wt(P);if((V.width>U||V.height>U)&&(O=U/Math.max(V.width,V.height)),O<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Y=Math.floor(O*V.width),Tt=Math.floor(O*V.height);u===void 0&&(u=y(Y,Tt));const ut=_?y(Y,Tt):u;return ut.width=Y,ut.height=Tt,ut.getContext("2d").drawImage(P,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+Y+"x"+Tt+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==fi&&P.minFilter!==_i}function f(P){n.generateMipmap(P)}function E(P,_,U,O,V=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=_;if(_===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),_===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),_===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const Tt=V?ga:pe.getTransfer(O);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=Tt===xe?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(P,_){let U;return P?_===null||_===jn||_===zs?U=n.DEPTH24_STENCIL8:_===Qi?U=n.DEPTH32F_STENCIL8:_===xo&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===jn||_===zs?U=n.DEPTH_COMPONENT24:_===Qi?U=n.DEPTH_COMPONENT32F:_===xo&&(U=n.DEPTH_COMPONENT16),U}function v(P,_){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==fi&&P.minFilter!==_i?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function L(P){const _=P.target;_.removeEventListener("dispose",L),I(_),_.isVideoTexture&&c.delete(_)}function R(P){const _=P.target;_.removeEventListener("dispose",R),A(_)}function I(P){const _=i.get(P);if(_.__webglInit===void 0)return;const U=P.source,O=d.get(U);if(O){const V=O[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&z(P),Object.keys(O).length===0&&d.delete(U)}i.remove(P)}function z(P){const _=i.get(P);n.deleteTexture(_.__webglTexture);const U=P.source,O=d.get(U);delete O[_.__cacheKey],a.memory.textures--}function A(P){const _=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let V=0;V<_.__webglFramebuffer[O].length;V++)n.deleteFramebuffer(_.__webglFramebuffer[O][V]);else n.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)n.deleteFramebuffer(_.__webglFramebuffer[O]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=P.textures;for(let O=0,V=U.length;O<V;O++){const Y=i.get(U[O]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(U[O])}i.remove(P)}let b=0;function k(){b=0}function G(){const P=b;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),b+=1,P}function W(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function $(P,_){const U=i.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const O=P.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(U,P,_);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function J(P,_){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Qt(U,P,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function q(P,_){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Qt(U,P,_);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function nt(P,_){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Z(U,P,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const K={[Br]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[Hr]:n.MIRRORED_REPEAT},j={[fi]:n.NEAREST,[Fd]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[_i]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},it={[Hd]:n.NEVER,[qd]:n.ALWAYS,[Gd]:n.LESS,[vc]:n.LEQUAL,[Vd]:n.EQUAL,[Yd]:n.GEQUAL,[Wd]:n.GREATER,[Xd]:n.NOTEQUAL};function ct(P,_){if(_.type===Qi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===_i||_.magFilter===Ya||_.magFilter===Ao||_.magFilter===Kn||_.minFilter===_i||_.minFilter===Ya||_.minFilter===Ao||_.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,K[_.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,K[_.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,K[_.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,j[_.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,j[_.minFilter]),_.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,it[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fi||_.minFilter!==Ao&&_.minFilter!==Kn||_.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function kt(P,_){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",L));const O=_.source;let V=d.get(O);V===void 0&&(V={},d.set(O,V));const Y=W(_);if(Y!==P.__cacheKey){V[Y]===void 0&&(V[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),V[Y].usedTimes++;const Tt=V[P.__cacheKey];Tt!==void 0&&(V[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&z(_)),P.__cacheKey=Y,P.__webglTexture=V[Y].texture}return U}function Qt(P,_,U){let O=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=n.TEXTURE_3D);const V=kt(P,_),Y=_.source;e.bindTexture(O,P.__webglTexture,n.TEXTURE0+U);const Tt=i.get(Y);if(Y.version!==Tt.__version||V===!0){e.activeTexture(n.TEXTURE0+U);const ut=pe.getPrimaries(pe.workingColorSpace),vt=_.colorSpace===vn?null:pe.getPrimaries(_.colorSpace),Gt=_.colorSpace===vn||ut===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let rt=x(_.image,!1,s.maxTextureSize);rt=Vt(_,rt);const wt=o.convert(_.format,_.colorSpace),jt=o.convert(_.type);let Ut=E(_.internalFormat,wt,jt,_.colorSpace,_.isVideoTexture);ct(O,_);let bt;const Ot=_.mipmaps,Yt=_.isVideoTexture!==!0,ge=Tt.__version===void 0||V===!0,N=Y.dataReady,dt=v(_,rt);if(_.isDepthTexture)Ut=w(_.format===Bs,_.type),ge&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Ut,rt.width,rt.height,0,wt,jt,null));else if(_.isDataTexture)if(Ot.length>0){Yt&&ge&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,Ot[0].width,Ot[0].height);for(let tt=0,st=Ot.length;tt<st;tt++)bt=Ot[tt],Yt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,wt,jt,bt.data):e.texImage2D(n.TEXTURE_2D,tt,Ut,bt.width,bt.height,0,wt,jt,bt.data);_.generateMipmaps=!1}else Yt?(ge&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,rt.width,rt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,wt,jt,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,rt.width,rt.height,0,wt,jt,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Yt&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ut,Ot[0].width,Ot[0].height,rt.depth);for(let tt=0,st=Ot.length;tt<st;tt++)if(bt=Ot[tt],_.format!==Mi)if(wt!==null)if(Yt){if(N)if(_.layerUpdates.size>0){const mt=Fh(bt.width,bt.height,_.format,_.type);for(const zt of _.layerUpdates){const te=bt.data.subarray(zt*mt/bt.data.BYTES_PER_ELEMENT,(zt+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,zt,bt.width,bt.height,1,wt,te,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,bt.width,bt.height,rt.depth,wt,bt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Ut,bt.width,bt.height,rt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,bt.width,bt.height,rt.depth,wt,jt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Ut,bt.width,bt.height,rt.depth,0,wt,jt,bt.data)}else{Yt&&ge&&e.texStorage2D(n.TEXTURE_2D,dt,Ut,Ot[0].width,Ot[0].height);for(let tt=0,st=Ot.length;tt<st;tt++)bt=Ot[tt],_.format!==Mi?wt!==null?Yt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,bt.width,bt.height,wt,jt,bt.data):e.texImage2D(n.TEXTURE_2D,tt,Ut,bt.width,bt.height,0,wt,jt,bt.data)}else if(_.isDataArrayTexture)if(Yt){if(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ut,rt.width,rt.height,rt.depth),N)if(_.layerUpdates.size>0){const tt=Fh(rt.width,rt.height,_.format,_.type);for(const st of _.layerUpdates){const mt=rt.data.subarray(st*tt/rt.data.BYTES_PER_ELEMENT,(st+1)*tt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,st,rt.width,rt.height,1,wt,jt,mt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,wt,jt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,wt,jt,rt.data);else if(_.isData3DTexture)Yt?(ge&&e.texStorage3D(n.TEXTURE_3D,dt,Ut,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,wt,jt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,wt,jt,rt.data);else if(_.isFramebufferTexture){if(ge)if(Yt)e.texStorage2D(n.TEXTURE_2D,dt,Ut,rt.width,rt.height);else{let tt=rt.width,st=rt.height;for(let mt=0;mt<dt;mt++)e.texImage2D(n.TEXTURE_2D,mt,Ut,tt,st,0,wt,jt,null),tt>>=1,st>>=1}}else if(Ot.length>0){if(Yt&&ge){const tt=Wt(Ot[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ut,tt.width,tt.height)}for(let tt=0,st=Ot.length;tt<st;tt++)bt=Ot[tt],Yt?N&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,wt,jt,bt):e.texImage2D(n.TEXTURE_2D,tt,Ut,wt,jt,bt);_.generateMipmaps=!1}else if(Yt){if(ge){const tt=Wt(rt);e.texStorage2D(n.TEXTURE_2D,dt,Ut,tt.width,tt.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,jt,rt)}else e.texImage2D(n.TEXTURE_2D,0,Ut,wt,jt,rt);g(_)&&f(O),Tt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function Z(P,_,U){if(_.image.length!==6)return;const O=kt(P,_),V=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+U);const Y=i.get(V);if(V.version!==Y.__version||O===!0){e.activeTexture(n.TEXTURE0+U);const Tt=pe.getPrimaries(pe.workingColorSpace),ut=_.colorSpace===vn?null:pe.getPrimaries(_.colorSpace),vt=_.colorSpace===vn||Tt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Gt=_.isCompressedTexture||_.image[0].isCompressedTexture,rt=_.image[0]&&_.image[0].isDataTexture,wt=[];for(let st=0;st<6;st++)!Gt&&!rt?wt[st]=x(_.image[st],!0,s.maxCubemapSize):wt[st]=rt?_.image[st].image:_.image[st],wt[st]=Vt(_,wt[st]);const jt=wt[0],Ut=o.convert(_.format,_.colorSpace),bt=o.convert(_.type),Ot=E(_.internalFormat,Ut,bt,_.colorSpace),Yt=_.isVideoTexture!==!0,ge=Y.__version===void 0||O===!0,N=V.dataReady;let dt=v(_,jt);ct(n.TEXTURE_CUBE_MAP,_);let tt;if(Gt){Yt&&ge&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Ot,jt.width,jt.height);for(let st=0;st<6;st++){tt=wt[st].mipmaps;for(let mt=0;mt<tt.length;mt++){const zt=tt[mt];_.format!==Mi?Ut!==null?Yt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt,0,0,zt.width,zt.height,Ut,zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt,Ot,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt,0,0,zt.width,zt.height,Ut,bt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt,Ot,zt.width,zt.height,0,Ut,bt,zt.data)}}}else{if(tt=_.mipmaps,Yt&&ge){tt.length>0&&dt++;const st=Wt(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Ot,st.width,st.height)}for(let st=0;st<6;st++)if(rt){Yt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,wt[st].width,wt[st].height,Ut,bt,wt[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,wt[st].width,wt[st].height,0,Ut,bt,wt[st].data);for(let mt=0;mt<tt.length;mt++){const te=tt[mt].image[st].image;Yt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt+1,0,0,te.width,te.height,Ut,bt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt+1,Ot,te.width,te.height,0,Ut,bt,te.data)}}else{Yt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,bt,wt[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ot,Ut,bt,wt[st]);for(let mt=0;mt<tt.length;mt++){const zt=tt[mt];Yt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt+1,0,0,Ut,bt,zt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt+1,Ot,Ut,bt,zt.image[st])}}}g(_)&&f(n.TEXTURE_CUBE_MAP),Y.__version=V.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function lt(P,_,U,O,V,Y){const Tt=o.convert(U.format,U.colorSpace),ut=o.convert(U.type),vt=E(U.internalFormat,Tt,ut,U.colorSpace);if(!i.get(_).__hasExternalTextures){const rt=Math.max(1,_.width>>Y),wt=Math.max(1,_.height>>Y);V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?e.texImage3D(V,Y,vt,rt,wt,_.depth,0,Tt,ut,null):e.texImage2D(V,Y,vt,rt,wt,0,Tt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),It(_)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,V,i.get(U).__webglTexture,0,ae(_)):(V===n.TEXTURE_2D||V>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,V,i.get(U).__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(P,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,P),_.depthBuffer){const O=_.depthTexture,V=O&&O.isDepthTexture?O.type:null,Y=w(_.stencilBuffer,V),Tt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=ae(_);It(_)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Y,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,P)}else{const O=_.textures;for(let V=0;V<O.length;V++){const Y=O[V],Tt=o.convert(Y.format,Y.colorSpace),ut=o.convert(Y.type),vt=E(Y.internalFormat,Tt,ut,Y.colorSpace),Gt=ae(_);U&&It(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,vt,_.width,_.height):It(_)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt,vt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,vt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(P,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const O=i.get(_.depthTexture).__webglTexture,V=ae(_);if(_.depthTexture.format===ks)It(_)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(_.depthTexture.format===Bs)It(_)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Xt(P){const _=i.get(P),U=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");xt(_.__webglFramebuffer,P)}else if(U){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]=n.createRenderbuffer(),gt(_.__webglDepthbuffer[O],P,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),gt(_.__webglDepthbuffer,P,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(P,_,U){const O=i.get(P);_!==void 0&&lt(O.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Xt(P)}function Jt(P){const _=P.texture,U=i.get(P),O=i.get(_);P.addEventListener("dispose",R);const V=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Tt=V.length>1;if(Tt||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=_.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ut]=[];for(let vt=0;vt<_.mipmaps.length;vt++)U.__webglFramebuffer[ut][vt]=n.createFramebuffer()}else U.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ut=0;ut<_.mipmaps.length;ut++)U.__webglFramebuffer[ut]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ut=0,vt=V.length;ut<vt;ut++){const Gt=i.get(V[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&It(P)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ut=0;ut<V.length;ut++){const vt=V[ut];U.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ut]);const Gt=o.convert(vt.format,vt.colorSpace),rt=o.convert(vt.type),wt=E(vt.internalFormat,Gt,rt,vt.colorSpace,P.isXRRenderTarget===!0),jt=ae(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,wt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,U.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(U.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),ct(n.TEXTURE_CUBE_MAP,_);for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)lt(U.__webglFramebuffer[ut][vt],P,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else lt(U.__webglFramebuffer[ut],P,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ut=0,vt=V.length;ut<vt;ut++){const Gt=V[ut],rt=i.get(Gt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),ct(n.TEXTURE_2D,Gt),lt(U.__webglFramebuffer,P,Gt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),g(Gt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,O.__webglTexture),ct(ut,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)lt(U.__webglFramebuffer[vt],P,_,n.COLOR_ATTACHMENT0,ut,vt);else lt(U.__webglFramebuffer,P,_,n.COLOR_ATTACHMENT0,ut,0);g(_)&&f(ut),e.unbindTexture()}P.depthBuffer&&Xt(P)}function ve(P){const _=P.textures;for(let U=0,O=_.length;U<O;U++){const V=_[U];if(g(V)){const Y=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Tt=i.get(V).__webglTexture;e.bindTexture(Y,Tt),f(Y),e.unbindTexture()}}}const D=[],we=[];function ie(P){if(P.samples>0){if(It(P)===!1){const _=P.textures,U=P.width,O=P.height;let V=n.COLOR_BUFFER_BIT;const Y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(P),ut=_.length>1;if(ut)for(let vt=0;vt<_.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let vt=0;vt<_.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(V|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(V|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const Gt=i.get(_[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,U,O,0,0,U,O,V,n.NEAREST),l===!0&&(D.length=0,we.length=0,D.push(n.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(Y),we.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,we)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<_.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const Gt=i.get(_[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const _=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ae(P){return Math.min(s.maxSamples,P.samples)}function It(P){const _=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Se(P){const _=a.render.frame;c.get(P)!==_&&(c.set(P,_),P.update())}function Vt(P,_){const U=P.colorSpace,O=P.format,V=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||U!==An&&U!==vn&&(pe.getTransfer(U)===xe?(O!==Mi||V!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=q,this.setTextureCube=nt,this.rebindTextures=Kt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=It}function dg(n,t){function e(i,s=vn){let o;const a=pe.getTransfer(s);if(i===nn)return n.UNSIGNED_BYTE;if(i===_l)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hc)return n.BYTE;if(i===cc)return n.SHORT;if(i===xo)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===jn)return n.UNSIGNED_INT;if(i===Qi)return n.FLOAT;if(i===Mo)return n.HALF_FLOAT;if(i===uc)return n.ALPHA;if(i===fc)return n.RGB;if(i===Mi)return n.RGBA;if(i===pc)return n.LUMINANCE;if(i===mc)return n.LUMINANCE_ALPHA;if(i===ks)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===gc)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===yc)return n.RG;if(i===Ml)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===la||i===ha||i===ca||i===da)if(a===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===la)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===la)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gr||i===Vr||i===Wr||i===Xr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Gr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yr||i===qr||i===Kr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Yr||i===qr)return a===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Kr)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jr||i===$r||i===Zr||i===Jr||i===Qr||i===tl||i===el||i===il||i===nl||i===sl||i===ol||i===al||i===rl||i===ll)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===jr)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$r)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zr)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jr)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qr)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===el)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rl)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return a===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ua||i===hl||i===cl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ua)return a===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===dl||i===ul||i===fl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===ua)return o.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ul)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class ug extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class at extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fg={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,a=null;const r=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),f=this._getHandJoint(h,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),m=.02,y=.005;h.inputState.pinching&&d>m+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=m-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new at;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`;class gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Je,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new En({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends Xs{constructor(t,e){super();const i=this;let s=null,o=1,a=null,r="local-floor",l=1,h=null,c=null,u=null,d=null,m=null,y=null;const x=new gg,g=e.getContextAttributes();let f=null,E=null;const w=[],v=[],L=new qt;let R=null;const I=new ti;I.layers.enable(1),I.viewport=new _e;const z=new ti;z.layers.enable(2),z.viewport=new _e;const A=[I,z],b=new ug;b.layers.enable(1),b.layers.enable(2);let k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=w[Z];return lt===void 0&&(lt=new yr,w[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=w[Z];return lt===void 0&&(lt=new yr,w[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=w[Z];return lt===void 0&&(lt=new yr,w[Z]=lt),lt.getHandSpace()};function W(Z){const lt=v.indexOf(Z.inputSource);if(lt===-1)return;const gt=w[lt];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,h||a),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<w.length;Z++){const lt=v[Z];lt!==null&&(v[Z]=null,w[Z].disconnect(lt))}k=null,G=null,x.reset(),t.setRenderTarget(f),m=null,d=null,u=null,s=null,E=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const lt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new $n(m.framebufferWidth,m.framebufferHeight,{format:Mi,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let lt=null,gt=null,xt=null;g.depth&&(xt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=g.stencil?Bs:ks,gt=g.stencil?zs:jn);const Xt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new $n(d.textureWidth,d.textureHeight,{format:Mi,type:nn,depthTexture:new Dc(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(r),Qt.setContext(s),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(Z){for(let lt=0;lt<Z.removed.length;lt++){const gt=Z.removed[lt],xt=v.indexOf(gt);xt>=0&&(v[xt]=null,w[xt].disconnect(gt))}for(let lt=0;lt<Z.added.length;lt++){const gt=Z.added[lt];let xt=v.indexOf(gt);if(xt===-1){for(let Kt=0;Kt<w.length;Kt++)if(Kt>=v.length){v.push(gt),xt=Kt;break}else if(v[Kt]===null){v[Kt]=gt,xt=Kt;break}if(xt===-1)break}const Xt=w[xt];Xt&&Xt.connect(gt)}}const q=new C,nt=new C;function K(Z,lt,gt){q.setFromMatrixPosition(lt.matrixWorld),nt.setFromMatrixPosition(gt.matrixWorld);const xt=q.distanceTo(nt),Xt=lt.projectionMatrix.elements,Kt=gt.projectionMatrix.elements,Jt=Xt[14]/(Xt[10]-1),ve=Xt[14]/(Xt[10]+1),D=(Xt[9]+1)/Xt[5],we=(Xt[9]-1)/Xt[5],ie=(Xt[8]-1)/Xt[0],ae=(Kt[8]+1)/Kt[0],It=Jt*ie,Se=Jt*ae,Vt=xt/(-ie+ae),Wt=Vt*-ie;lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Wt),Z.translateZ(Vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const P=Jt+Vt,_=ve+Vt,U=It-Wt,O=Se+(xt-Wt),V=D*ve/_*P,Y=we*ve/_*P;Z.projectionMatrix.makePerspective(U,O,V,Y,P,_),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function j(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;x.texture!==null&&(Z.near=x.depthNear,Z.far=x.depthFar),b.near=z.near=I.near=Z.near,b.far=z.far=I.far=Z.far,(k!==b.near||G!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),k=b.near,G=b.far,I.near=k,I.far=G,z.near=k,z.far=G,I.updateProjectionMatrix(),z.updateProjectionMatrix(),Z.updateProjectionMatrix());const lt=Z.parent,gt=b.cameras;j(b,lt);for(let xt=0;xt<gt.length;xt++)j(gt[xt],lt);gt.length===2?K(b,I,z):b.projectionMatrix.copy(I.projectionMatrix),it(Z,b,lt)};function it(Z,lt,gt){gt===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_o*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ct=null;function kt(Z,lt){if(c=lt.getViewerPose(h||a),y=lt,c!==null){const gt=c.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let xt=!1;gt.length!==b.cameras.length&&(b.cameras.length=0,xt=!0);for(let Kt=0;Kt<gt.length;Kt++){const Jt=gt[Kt];let ve=null;if(m!==null)ve=m.getViewport(Jt);else{const we=u.getViewSubImage(d,Jt);ve=we.viewport,Kt===0&&(t.setRenderTargetTextures(E,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(E))}let D=A[Kt];D===void 0&&(D=new ti,D.layers.enable(Kt),D.viewport=new _e,A[Kt]=D),D.matrix.fromArray(Jt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Jt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ve.x,ve.y,ve.width,ve.height),Kt===0&&(b.matrix.copy(D.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xt===!0&&b.cameras.push(D)}const Xt=s.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")){const Kt=u.getDepthInformation(gt[0]);Kt&&Kt.isValid&&Kt.texture&&x.init(t,Kt,s.renderState)}}for(let gt=0;gt<w.length;gt++){const xt=v[gt],Xt=w[gt];xt!==null&&Xt!==void 0&&Xt.update(xt,lt,h||a)}ct&&ct(Z,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),y=null}const Qt=new Ic;Qt.setAnimationLoop(kt),this.setAnimationLoop=function(Z){ct=Z},this.dispose=function(){}}}const kn=new ki,xg=new be;function _g(n,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Cc(n)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,E,w,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(g,f):f.isMeshToonMaterial?(o(g,f),u(g,f)):f.isMeshPhongMaterial?(o(g,f),c(g,f)):f.isMeshStandardMaterial?(o(g,f),d(g,f),f.isMeshPhysicalMaterial&&m(g,f,v)):f.isMeshMatcapMaterial?(o(g,f),y(g,f)):f.isMeshDepthMaterial?o(g,f):f.isMeshDistanceMaterial?(o(g,f),x(g,f)):f.isMeshNormalMaterial?o(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&r(g,f)):f.isPointsMaterial?l(g,f,E,w):f.isSpriteMaterial?h(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===ei&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===ei&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const E=t.get(f),w=E.envMap,v=E.envMapRotation;w&&(g.envMap.value=w,kn.copy(v),kn.x*=-1,kn.y*=-1,kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),g.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(kn)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function r(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,E,w){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*E,g.scale.value=w*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,E){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ei&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const E=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vg(n,t,e,i){let s={},o={},a=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const v=w.program;i.uniformBlockBinding(E,v)}function h(E,w){let v=s[E.id];v===void 0&&(y(E),v=c(E),s[E.id]=v,E.addEventListener("dispose",g));const L=w.program;i.updateUBOMapping(E,L);const R=t.render.frame;o[E.id]!==R&&(d(E),o[E.id]=R)}function c(E){const w=u();E.__bindingPointIndex=w;const v=n.createBuffer(),L=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,v),v}function u(){for(let E=0;E<r;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const w=s[E.id],v=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let R=0,I=v.length;R<I;R++){const z=Array.isArray(v[R])?v[R]:[v[R]];for(let A=0,b=z.length;A<b;A++){const k=z[A];if(m(k,R,A,L)===!0){const G=k.__offset,W=Array.isArray(k.value)?k.value:[k.value];let $=0;for(let J=0;J<W.length;J++){const q=W[J],nt=x(q);typeof q=="number"||typeof q=="boolean"?(k.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,G+$,k.__data)):q.isMatrix3?(k.__data[0]=q.elements[0],k.__data[1]=q.elements[1],k.__data[2]=q.elements[2],k.__data[3]=0,k.__data[4]=q.elements[3],k.__data[5]=q.elements[4],k.__data[6]=q.elements[5],k.__data[7]=0,k.__data[8]=q.elements[6],k.__data[9]=q.elements[7],k.__data[10]=q.elements[8],k.__data[11]=0):(q.toArray(k.__data,$),$+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,w,v,L){const R=E.value,I=w+"_"+v;if(L[I]===void 0)return typeof R=="number"||typeof R=="boolean"?L[I]=R:L[I]=R.clone(),!0;{const z=L[I];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return L[I]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function y(E){const w=E.uniforms;let v=0;const L=16;for(let I=0,z=w.length;I<z;I++){const A=Array.isArray(w[I])?w[I]:[w[I]];for(let b=0,k=A.length;b<k;b++){const G=A[b],W=Array.isArray(G.value)?G.value:[G.value];for(let $=0,J=W.length;$<J;$++){const q=W[$],nt=x(q),K=v%L;K!==0&&L-K<nt.boundary&&(v+=L-K),G.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=nt.storage}}}const R=v%L;return R>0&&(v+=L-R),E.__size=v,E.__cache={},this}function x(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function g(E){const w=E.target;w.removeEventListener("dispose",g);const v=a.indexOf(w.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},o={}}return{bind:l,update:h,dispose:f}}class wg{constructor(t={}){const{canvas:e=cu(),context:i=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),y=new Int32Array(4);let x=null,g=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ii,this.toneMapping=Mn,this.toneMappingExposure=1;const w=this;let v=!1,L=0,R=0,I=null,z=-1,A=null;const b=new _e,k=new _e;let G=null;const W=new Dt(0);let $=0,J=e.width,q=e.height,nt=1,K=null,j=null;const it=new _e(0,0,J,q),ct=new _e(0,0,J,q);let kt=!1;const Qt=new Cl;let Z=!1,lt=!1;const gt=new be,xt=new C,Xt=new _e,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function ve(){return I===null?nt:1}let D=i;function we(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",mt,!1),D===null){const F="webgl2";if(D=we(F,S),D===null)throw we(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ie,ae,It,Se,Vt,Wt,P,_,U,O,V,Y,Tt,ut,vt,Gt,rt,wt,jt,Ut,bt,Ot,Yt,ge;function N(){ie=new C0(D),ie.init(),Ot=new dg(D,ie),ae=new M0(D,ie,t,Ot),It=new lg(D),Se=new I0(D),Vt=new Km,Wt=new cg(D,ie,It,Vt,ae,Ot,Se),P=new S0(w),_=new A0(w),U=new Fu(D),Yt=new v0(D,U),O=new R0(D,U,Se,Yt),V=new D0(D,O,U,Se),jt=new L0(D,ae,Wt),Gt=new b0(Vt),Y=new qm(w,P,_,ie,ae,Yt,Gt),Tt=new _g(w,Vt),ut=new $m,vt=new ig(ie),wt=new _0(w,P,_,It,V,d,l),rt=new rg(w,V,ae),ge=new vg(D,Se,ae,It),Ut=new w0(D,ie,Se),bt=new P0(D,ie,Se),Se.programs=Y.programs,w.capabilities=ae,w.extensions=ie,w.properties=Vt,w.renderLists=ut,w.shadowMap=rt,w.state=It,w.info=Se}N();const dt=new yg(w,D);this.xr=dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize(J,q,!1))},this.getSize=function(S){return S.set(J,q)},this.setSize=function(S,F,H=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,q=F,e.width=Math.floor(S*nt),e.height=Math.floor(F*nt),H===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(J*nt,q*nt).floor()},this.setDrawingBufferSize=function(S,F,H){J=S,q=F,nt=H,e.width=Math.floor(S*H),e.height=Math.floor(F*H),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(it)},this.setViewport=function(S,F,H,X){S.isVector4?it.set(S.x,S.y,S.z,S.w):it.set(S,F,H,X),It.viewport(b.copy(it).multiplyScalar(nt).round())},this.getScissor=function(S){return S.copy(ct)},this.setScissor=function(S,F,H,X){S.isVector4?ct.set(S.x,S.y,S.z,S.w):ct.set(S,F,H,X),It.scissor(k.copy(ct).multiplyScalar(nt).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(S){It.setScissorTest(kt=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(S=!0,F=!0,H=!0){let X=0;if(S){let B=!1;if(I!==null){const ft=I.texture.format;B=ft===bl||ft===Ml||ft===wl}if(B){const ft=I.texture.type,St=ft===nn||ft===jn||ft===xo||ft===zs||ft===_l||ft===vl,At=wt.getClearColor(),Rt=wt.getClearAlpha(),Bt=At.r,Ht=At.g,Nt=At.b;St?(m[0]=Bt,m[1]=Ht,m[2]=Nt,m[3]=Rt,D.clearBufferuiv(D.COLOR,0,m)):(y[0]=Bt,y[1]=Ht,y[2]=Nt,y[3]=Rt,D.clearBufferiv(D.COLOR,0,y))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),H&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),ut.dispose(),vt.dispose(),Vt.dispose(),P.dispose(),_.dispose(),V.dispose(),Yt.dispose(),ge.dispose(),Y.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Ci),dt.removeEventListener("sessionend",Ul),Cn.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const S=Se.autoReset,F=rt.enabled,H=rt.autoUpdate,X=rt.needsUpdate,B=rt.type;N(),Se.autoReset=S,rt.enabled=F,rt.autoUpdate=H,rt.needsUpdate=X,rt.type=B}function mt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function zt(S){const F=S.target;F.removeEventListener("dispose",zt),te(F)}function te(S){Re(S),Vt.remove(S)}function Re(S){const F=Vt.get(S).programs;F!==void 0&&(F.forEach(function(H){Y.releaseProgram(H)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,H,X,B,ft){F===null&&(F=Kt);const St=B.isMesh&&B.matrixWorld.determinant()<0,At=jc(S,F,H,X,B);It.setMaterial(X,St);let Rt=H.index,Bt=1;if(X.wireframe===!0){if(Rt=O.getWireframeAttribute(H),Rt===void 0)return;Bt=2}const Ht=H.drawRange,Nt=H.attributes.position;let le=Ht.start*Bt,Ee=(Ht.start+Ht.count)*Bt;ft!==null&&(le=Math.max(le,ft.start*Bt),Ee=Math.min(Ee,(ft.start+ft.count)*Bt)),Rt!==null?(le=Math.max(le,0),Ee=Math.min(Ee,Rt.count)):Nt!=null&&(le=Math.max(le,0),Ee=Math.min(Ee,Nt.count));const Ae=Ee-le;if(Ae<0||Ae===1/0)return;Yt.setup(B,X,At,H,Rt);let ni,he=Ut;if(Rt!==null&&(ni=U.get(Rt),he=bt,he.setIndex(ni)),B.isMesh)X.wireframe===!0?(It.setLineWidth(X.wireframeLinewidth*ve()),he.setMode(D.LINES)):he.setMode(D.TRIANGLES);else if(B.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),It.setLineWidth(Lt*ve()),B.isLineSegments?he.setMode(D.LINES):B.isLineLoop?he.setMode(D.LINE_LOOP):he.setMode(D.LINE_STRIP)}else B.isPoints?he.setMode(D.POINTS):B.isSprite&&he.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)he.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))he.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Lt=B._multiDrawStarts,ze=B._multiDrawCounts,ce=B._multiDrawCount,pi=Rt?U.get(Rt).bytesPerElement:1,Qn=Vt.get(X).currentProgram.getUniforms();for(let si=0;si<ce;si++)Qn.setValue(D,"_gl_DrawID",si),he.render(Lt[si]/pi,ze[si])}else if(B.isInstancedMesh)he.renderInstances(le,Ae,B.count);else if(H.isInstancedBufferGeometry){const Lt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ze=Math.min(H.instanceCount,Lt);he.renderInstances(le,Ae,ze)}else he.render(le,Ae)};function Oe(S,F,H){S.transparent===!0&&S.side===Ve&&S.forceSinglePass===!1?(S.side=ei,S.needsUpdate=!0,Eo(S,F,H),S.side=Tn,S.needsUpdate=!0,Eo(S,F,H),S.side=Ve):Eo(S,F,H)}this.compile=function(S,F,H=null){H===null&&(H=S),g=vt.get(H),g.init(F),E.push(g),H.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),S!==H&&S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const X=new Set;return S.traverse(function(B){const ft=B.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const At=ft[St];Oe(At,H,B),X.add(At)}else Oe(ft,H,B),X.add(ft)}),E.pop(),g=null,X},this.compileAsync=function(S,F,H=null){const X=this.compile(S,F,H);return new Promise(B=>{function ft(){if(X.forEach(function(St){Vt.get(St).currentProgram.isReady()&&X.delete(St)}),X.size===0){B(S);return}setTimeout(ft,10)}ie.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let re=null;function zi(S){re&&re(S)}function Ci(){Cn.stop()}function Ul(){Cn.start()}const Cn=new Ic;Cn.setAnimationLoop(zi),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(S){re=S,dt.setAnimationLoop(S),S===null?Cn.stop():Cn.start()},dt.addEventListener("sessionstart",Ci),dt.addEventListener("sessionend",Ul),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(F),F=dt.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,F,I),g=vt.get(S,E.length),g.init(F),E.push(g),gt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Qt.setFromProjectionMatrix(gt),lt=this.localClippingEnabled,Z=Gt.init(this.clippingPlanes,lt),x=ut.get(S,f.length),x.init(),f.push(x),dt.enabled===!0&&dt.isPresenting===!0){const ft=w.xr.getDepthSensingMesh();ft!==null&&Ga(ft,F,-1/0,w.sortObjects)}Ga(S,F,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(K,j),Jt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Jt&&wt.addToRenderList(x,S),this.info.render.frame++,Z===!0&&Gt.beginShadows();const H=g.state.shadowsArray;rt.render(H,S,F),Z===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,B=x.transmissive;if(g.setupLights(),F.isArrayCamera){const ft=F.cameras;if(B.length>0)for(let St=0,At=ft.length;St<At;St++){const Rt=ft[St];Fl(X,B,S,Rt)}Jt&&wt.render(S);for(let St=0,At=ft.length;St<At;St++){const Rt=ft[St];Nl(x,S,Rt,Rt.viewport)}}else B.length>0&&Fl(X,B,S,F),Jt&&wt.render(S),Nl(x,S,F);I!==null&&(Wt.updateMultisampleRenderTarget(I),Wt.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(w,S,F),Yt.resetDefaultState(),z=-1,A=null,E.pop(),E.length>0?(g=E[E.length-1],Z===!0&&Gt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Ga(S,F,H,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Qt.intersectsSprite(S)){X&&Xt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);const St=V.update(S),At=S.material;At.visible&&x.push(S,St,At,H,Xt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Qt.intersectsObject(S))){const St=V.update(S),At=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Xt.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Xt.copy(St.boundingSphere.center)),Xt.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(At)){const Rt=St.groups;for(let Bt=0,Ht=Rt.length;Bt<Ht;Bt++){const Nt=Rt[Bt],le=At[Nt.materialIndex];le&&le.visible&&x.push(S,St,le,H,Xt.z,Nt)}}else At.visible&&x.push(S,St,At,H,Xt.z,null)}}const ft=S.children;for(let St=0,At=ft.length;St<At;St++)Ga(ft[St],F,H,X)}function Nl(S,F,H,X){const B=S.opaque,ft=S.transmissive,St=S.transparent;g.setupLightsView(H),Z===!0&&Gt.setGlobalState(w.clippingPlanes,H),X&&It.viewport(b.copy(X)),B.length>0&&To(B,F,H),ft.length>0&&To(ft,F,H),St.length>0&&To(St,F,H),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Fl(S,F,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new $n(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Mo:nn,minFilter:Kn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ft=g.state.transmissionRenderTarget[X.id],St=X.viewport||b;ft.setSize(St.z,St.w);const At=w.getRenderTarget();w.setRenderTarget(ft),w.getClearColor(W),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),Jt?wt.render(H):w.clear();const Rt=w.toneMapping;w.toneMapping=Mn;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),Z===!0&&Gt.setGlobalState(w.clippingPlanes,X),To(S,H,X),Wt.updateMultisampleRenderTarget(ft),Wt.updateRenderTargetMipmap(ft),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Nt=0,le=F.length;Nt<le;Nt++){const Ee=F[Nt],Ae=Ee.object,ni=Ee.geometry,he=Ee.material,Lt=Ee.group;if(he.side===Ve&&Ae.layers.test(X.layers)){const ze=he.side;he.side=ei,he.needsUpdate=!0,Ol(Ae,H,X,ni,he,Lt),he.side=ze,he.needsUpdate=!0,Ht=!0}}Ht===!0&&(Wt.updateMultisampleRenderTarget(ft),Wt.updateRenderTargetMipmap(ft))}w.setRenderTarget(At),w.setClearColor(W,$),Bt!==void 0&&(X.viewport=Bt),w.toneMapping=Rt}function To(S,F,H){const X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ft=S.length;B<ft;B++){const St=S[B],At=St.object,Rt=St.geometry,Bt=X===null?St.material:X,Ht=St.group;At.layers.test(H.layers)&&Ol(At,F,H,Rt,Bt,Ht)}}function Ol(S,F,H,X,B,ft){S.onBeforeRender(w,F,H,X,B,ft),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.transparent===!0&&B.side===Ve&&B.forceSinglePass===!1?(B.side=ei,B.needsUpdate=!0,w.renderBufferDirect(H,F,X,B,S,ft),B.side=Tn,B.needsUpdate=!0,w.renderBufferDirect(H,F,X,B,S,ft),B.side=Ve):w.renderBufferDirect(H,F,X,B,S,ft),S.onAfterRender(w,F,H,X,B,ft)}function Eo(S,F,H){F.isScene!==!0&&(F=Kt);const X=Vt.get(S),B=g.state.lights,ft=g.state.shadowsArray,St=B.state.version,At=Y.getParameters(S,B.state,ft,F,H),Rt=Y.getProgramCacheKey(At);let Bt=X.programs;X.environment=S.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(S.isMeshStandardMaterial?_:P).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",zt),Bt=new Map,X.programs=Bt);let Ht=Bt.get(Rt);if(Ht!==void 0){if(X.currentProgram===Ht&&X.lightsStateVersion===St)return Bl(S,At),Ht}else At.uniforms=Y.getUniforms(S),S.onBeforeCompile(At,w),Ht=Y.acquireProgram(At,Rt),Bt.set(Rt,Ht),X.uniforms=At.uniforms;const Nt=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=Gt.uniform),Bl(S,At),X.needsLights=Zc(S),X.lightsStateVersion=St,X.needsLights&&(Nt.ambientLightColor.value=B.state.ambient,Nt.lightProbe.value=B.state.probe,Nt.directionalLights.value=B.state.directional,Nt.directionalLightShadows.value=B.state.directionalShadow,Nt.spotLights.value=B.state.spot,Nt.spotLightShadows.value=B.state.spotShadow,Nt.rectAreaLights.value=B.state.rectArea,Nt.ltc_1.value=B.state.rectAreaLTC1,Nt.ltc_2.value=B.state.rectAreaLTC2,Nt.pointLights.value=B.state.point,Nt.pointLightShadows.value=B.state.pointShadow,Nt.hemisphereLights.value=B.state.hemi,Nt.directionalShadowMap.value=B.state.directionalShadowMap,Nt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Nt.spotShadowMap.value=B.state.spotShadowMap,Nt.spotLightMatrix.value=B.state.spotLightMatrix,Nt.spotLightMap.value=B.state.spotLightMap,Nt.pointShadowMap.value=B.state.pointShadowMap,Nt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ht,X.uniformsList=null,Ht}function zl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=fa.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Bl(S,F){const H=Vt.get(S);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function jc(S,F,H,X,B){F.isScene!==!0&&(F=Kt),Wt.resetTextureUnits();const ft=F.fog,St=X.isMeshStandardMaterial?F.environment:null,At=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:An,Rt=(X.isMeshStandardMaterial?_:P).get(X.envMap||St),Bt=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,Ee=!!H.morphAttributes.color;let Ae=Mn;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ae=w.toneMapping);const ni=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=ni!==void 0?ni.length:0,Lt=Vt.get(X),ze=g.state.lights;if(Z===!0&&(lt===!0||S!==A)){const ci=S===A&&X.id===z;Gt.setState(X,S,ci)}let ce=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ze.state.version||Lt.outputColorSpace!==At||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==Rt||X.fog===!0&&Lt.fog!==ft||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Gt.numPlanes||Lt.numIntersection!==Gt.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==Ht||Lt.morphTargets!==Nt||Lt.morphNormals!==le||Lt.morphColors!==Ee||Lt.toneMapping!==Ae||Lt.morphTargetsCount!==he)&&(ce=!0):(ce=!0,Lt.__version=X.version);let pi=Lt.currentProgram;ce===!0&&(pi=Eo(X,F,B));let Qn=!1,si=!1,Va=!1;const Pe=pi.getUniforms(),on=Lt.uniforms;if(It.useProgram(pi.program)&&(Qn=!0,si=!0,Va=!0),X.id!==z&&(z=X.id,si=!0),Qn||A!==S){Pe.setValue(D,"projectionMatrix",S.projectionMatrix),Pe.setValue(D,"viewMatrix",S.matrixWorldInverse);const ci=Pe.map.cameraPosition;ci!==void 0&&ci.setValue(D,xt.setFromMatrixPosition(S.matrixWorld)),ae.logarithmicDepthBuffer&&Pe.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Pe.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),A!==S&&(A=S,si=!0,Va=!0)}if(B.isSkinnedMesh){Pe.setOptional(D,B,"bindMatrix"),Pe.setOptional(D,B,"bindMatrixInverse");const ci=B.skeleton;ci&&(ci.boneTexture===null&&ci.computeBoneTexture(),Pe.setValue(D,"boneTexture",ci.boneTexture,Wt))}B.isBatchedMesh&&(Pe.setOptional(D,B,"batchingTexture"),Pe.setValue(D,"batchingTexture",B._matricesTexture,Wt),Pe.setOptional(D,B,"batchingIdTexture"),Pe.setValue(D,"batchingIdTexture",B._indirectTexture,Wt),Pe.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Pe.setValue(D,"batchingColorTexture",B._colorsTexture,Wt));const Wa=H.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0)&&jt.update(B,H,pi),(si||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,Pe.setValue(D,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(on.envMap.value=Rt,on.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(on.envMapIntensity.value=F.environmentIntensity),si&&(Pe.setValue(D,"toneMappingExposure",w.toneMappingExposure),Lt.needsLights&&$c(on,Va),ft&&X.fog===!0&&Tt.refreshFogUniforms(on,ft),Tt.refreshMaterialUniforms(on,X,nt,q,g.state.transmissionRenderTarget[S.id]),fa.upload(D,zl(Lt),on,Wt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(fa.upload(D,zl(Lt),on,Wt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Pe.setValue(D,"center",B.center),Pe.setValue(D,"modelViewMatrix",B.modelViewMatrix),Pe.setValue(D,"normalMatrix",B.normalMatrix),Pe.setValue(D,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ci=X.uniformsGroups;for(let Xa=0,Jc=ci.length;Xa<Jc;Xa++){const Hl=ci[Xa];ge.update(Hl,pi),ge.bind(Hl,pi)}}return pi}function $c(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Zc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,F,H){Vt.get(S.texture).__webglTexture=F,Vt.get(S.depthTexture).__webglTexture=H;const X=Vt.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const H=Vt.get(S);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,H=0){I=S,L=F,R=H;let X=!0,B=null,ft=!1,St=!1;if(S){const Rt=Vt.get(S);Rt.__useDefaultFramebuffer!==void 0?(It.bindFramebuffer(D.FRAMEBUFFER,null),X=!1):Rt.__webglFramebuffer===void 0?Wt.setupRenderTarget(S):Rt.__hasExternalTextures&&Wt.rebindTextures(S,Vt.get(S.texture).__webglTexture,Vt.get(S.depthTexture).__webglTexture);const Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(St=!0);const Ht=Vt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?B=Ht[F][H]:B=Ht[F],ft=!0):S.samples>0&&Wt.useMultisampledRTT(S)===!1?B=Vt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ht)?B=Ht[H]:B=Ht,b.copy(S.viewport),k.copy(S.scissor),G=S.scissorTest}else b.copy(it).multiplyScalar(nt).floor(),k.copy(ct).multiplyScalar(nt).floor(),G=kt;if(It.bindFramebuffer(D.FRAMEBUFFER,B)&&X&&It.drawBuffers(S,B),It.viewport(b),It.scissor(k),It.setScissorTest(G),ft){const Rt=Vt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Rt.__webglTexture,H)}else if(St){const Rt=Vt.get(S.texture),Bt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,H||0,Bt)}z=-1},this.readRenderTargetPixels=function(S,F,H,X,B,ft,St){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){It.bindFramebuffer(D.FRAMEBUFFER,At);try{const Rt=S.texture,Bt=Rt.format,Ht=Rt.type;if(!ae.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&H>=0&&H<=S.height-B&&D.readPixels(F,H,X,B,Ot.convert(Bt),Ot.convert(Ht),ft)}finally{const Rt=I!==null?Vt.get(I).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,F,H,X,B,ft,St){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Vt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){It.bindFramebuffer(D.FRAMEBUFFER,At);try{const Rt=S.texture,Bt=Rt.format,Ht=Rt.type;if(!ae.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-X&&H>=0&&H<=S.height-B){const Nt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(F,H,X,B,Ot.convert(Bt),Ot.convert(Ht),0),D.flush();const le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await du(D,le,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Nt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft)}finally{D.deleteBuffer(Nt),D.deleteSync(le)}return ft}}finally{const Rt=I!==null?Vt.get(I).__webglFramebuffer:null;It.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(S,F=null,H=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const X=Math.pow(2,-H),B=Math.floor(S.image.width*X),ft=Math.floor(S.image.height*X),St=F!==null?F.x:0,At=F!==null?F.y:0;Wt.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,St,At,B,ft),It.unbindTexture()},this.copyTextureToTexture=function(S,F,H=null,X=null,B=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],F=arguments[2],B=arguments[3]||0,H=null);let ft,St,At,Rt,Bt,Ht;H!==null?(ft=H.max.x-H.min.x,St=H.max.y-H.min.y,At=H.min.x,Rt=H.min.y):(ft=S.image.width,St=S.image.height,At=0,Rt=0),X!==null?(Bt=X.x,Ht=X.y):(Bt=0,Ht=0);const Nt=Ot.convert(F.format),le=Ot.convert(F.type);Wt.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Ee=D.getParameter(D.UNPACK_ROW_LENGTH),Ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ni=D.getParameter(D.UNPACK_SKIP_PIXELS),he=D.getParameter(D.UNPACK_SKIP_ROWS),Lt=D.getParameter(D.UNPACK_SKIP_IMAGES),ze=S.isCompressedTexture?S.mipmaps[B]:S.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ze.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ze.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,Rt),S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Bt,Ht,ft,St,Nt,le,ze.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Bt,Ht,ze.width,ze.height,Nt,ze.data):D.texSubImage2D(D.TEXTURE_2D,B,Bt,Ht,ft,St,Nt,le,ze),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ni),D.pixelStorei(D.UNPACK_SKIP_ROWS,he),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Lt),B===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(S,F,H=null,X=null,B=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,X=arguments[1]||null,S=arguments[2],F=arguments[3],B=arguments[4]||0);let ft,St,At,Rt,Bt,Ht,Nt,le,Ee;const Ae=S.isCompressedTexture?S.mipmaps[B]:S.image;H!==null?(ft=H.max.x-H.min.x,St=H.max.y-H.min.y,At=H.max.z-H.min.z,Rt=H.min.x,Bt=H.min.y,Ht=H.min.z):(ft=Ae.width,St=Ae.height,At=Ae.depth,Rt=0,Bt=0,Ht=0),X!==null?(Nt=X.x,le=X.y,Ee=X.z):(Nt=0,le=0,Ee=0);const ni=Ot.convert(F.format),he=Ot.convert(F.type);let Lt;if(F.isData3DTexture)Wt.setTexture3D(F,0),Lt=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Wt.setTexture2DArray(F,0),Lt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ze=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pi=D.getParameter(D.UNPACK_SKIP_PIXELS),Qn=D.getParameter(D.UNPACK_SKIP_ROWS),si=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht),S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Lt,B,Nt,le,Ee,ft,St,At,ni,he,Ae.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,B,Nt,le,Ee,ft,St,At,ni,Ae.data):D.texSubImage3D(Lt,B,Nt,le,Ee,ft,St,At,ni,he,Ae),D.pixelStorei(D.UNPACK_ROW_LENGTH,ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,si),B===0&&F.generateMipmaps&&D.generateMipmap(Lt),It.unbindTexture()},this.initRenderTarget=function(S){Vt.get(S).__webglFramebuffer===void 0&&Wt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),It.unbindTexture()},this.resetState=function(){L=0,R=0,I=null,It.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sl?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===Ra?"display-p3":"srgb"}}class hi{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=i}clone(){return new hi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ei extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return El("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new C;class wa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=vi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),o=fe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new bi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Oc extends Ys{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ys;const Qs=new C,xs=new C,_s=new C,vs=new qt,to=new qt,zc=new be,jo=new C,eo=new C,$o=new C,Oh=new qt,xr=new qt,zh=new qt;class bg extends Fe{constructor(t=new Oc){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Ti;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Mg(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new wa(i,3,0,!1)),ys.setAttribute("uv",new wa(i,2,3,!1))}this.geometry=ys,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),zc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-_s.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const a=this.center;Zo(jo.set(-.5,-.5,0),_s,a,xs,s,o),Zo(eo.set(.5,-.5,0),_s,a,xs,s,o),Zo($o.set(.5,.5,0),_s,a,xs,s,o),Oh.set(0,0),xr.set(1,0),zh.set(1,1);let r=t.ray.intersectTriangle(jo,eo,$o,!1,Qs);if(r===null&&(Zo(eo.set(-.5,.5,0),_s,a,xs,s,o),xr.set(0,1),r=t.ray.intersectTriangle(jo,$o,eo,!1,Qs),r===null))return;const l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:wi.getInterpolation(Qs,jo,eo,$o,Oh,xr,zh,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Zo(n,t,e,i,s,o){vs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(to.x=o*vs.x-s*vs.y,to.y=s*vs.x+o*vs.y):to.copy(vs),n.copy(t),n.x+=to.x,n.y+=to.y,n.applyMatrix4(zc)}class Sg extends Je{constructor(t,e,i,s,o,a,r,l,h){super(t,e,i,s,o,a,r,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let a;e?a=e:a=t*i[o-1];let r=0,l=o-1,h;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),h=i[s]-a,h<0)r=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(o-1);const c=i[s],d=i[s+1]-c,m=(a-c)/d;return(s+m)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),r=this.getPoint(o),l=e||(a.isVector2?new qt:new C);return l.copy(r).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,s=[],o=[],a=[],r=new C,l=new be;for(let m=0;m<=t;m++){const y=m/t;s[m]=this.getTangentAt(y,new C)}o[0]=new C,a[0]=new C;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),r.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],r),a[0].crossVectors(s[0],o[0]);for(let m=1;m<=t;m++){if(o[m]=o[m-1].clone(),a[m]=a[m-1].clone(),r.crossVectors(s[m-1],s[m]),r.length()>Number.EPSILON){r.normalize();const y=Math.acos(Ge(s[m-1].dot(s[m]),-1,1));o[m].applyMatrix4(l.makeRotationAxis(r,y))}a[m].crossVectors(s[m],o[m])}if(e===!0){let m=Math.acos(Ge(o[0].dot(o[t]),-1,1));m/=t,s[0].dot(r.crossVectors(o[0],o[t]))>0&&(m=-m);for(let y=1;y<=t;y++)o[y].applyMatrix4(l.makeRotationAxis(s[y],m*y)),a[y].crossVectors(s[y],o[y])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Pl(){let n=0,t=0,e=0,i=0;function s(o,a,r,l){n=o,t=r,e=-3*o+3*a-2*r-l,i=2*o-2*a+r+l}return{initCatmullRom:function(o,a,r,l,h){s(a,r,h*(r-o),h*(l-a))},initNonuniformCatmullRom:function(o,a,r,l,h,c,u){let d=(a-o)/h-(r-o)/(h+c)+(r-a)/c,m=(r-a)/c-(l-a)/(c+u)+(l-r)/u;d*=c,m*=c,s(a,r,d,m)},calc:function(o){const a=o*o,r=a*o;return n+t*o+e*a+i*r}}}const Jo=new C,_r=new Pl,vr=new Pl,wr=new Pl;class Bh extends Tg{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){const i=e,s=this.points,o=s.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),l=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:l===0&&r===o-1&&(r=o-2,l=1);let h,c;this.closed||r>0?h=s[(r-1)%o]:(Jo.subVectors(s[0],s[1]).add(s[0]),h=Jo);const u=s[r%o],d=s[(r+1)%o];if(this.closed||r+2<o?c=s[(r+2)%o]:(Jo.subVectors(s[o-1],s[o-2]).add(s[o-1]),c=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(c),m);x<1e-4&&(x=1),y<1e-4&&(y=x),g<1e-4&&(g=x),_r.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,y,x,g),vr.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,y,x,g),wr.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,y,x,g)}else this.curveType==="catmullrom"&&(_r.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),vr.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),wr.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return i.set(_r.calc(l),vr.calc(l),wr.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class De extends Ti{constructor(t=1,e=1,i=1,s=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const h=this;s=Math.floor(s),o=Math.floor(o);const c=[],u=[],d=[],m=[];let y=0;const x=[],g=i/2;let f=0;E(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(m,2));function E(){const v=new C,L=new C;let R=0;const I=(e-t)/i;for(let z=0;z<=o;z++){const A=[],b=z/o,k=b*(e-t)+t;for(let G=0;G<=s;G++){const W=G/s,$=W*l+r,J=Math.sin($),q=Math.cos($);L.x=k*J,L.y=-b*i+g,L.z=k*q,u.push(L.x,L.y,L.z),v.set(J,I,q).normalize(),d.push(v.x,v.y,v.z),m.push(W,1-b),A.push(y++)}x.push(A)}for(let z=0;z<s;z++)for(let A=0;A<o;A++){const b=x[A][z],k=x[A+1][z],G=x[A+1][z+1],W=x[A][z+1];c.push(b,k,W),c.push(k,G,W),R+=6}h.addGroup(f,R,0),f+=R}function w(v){const L=y,R=new qt,I=new C;let z=0;const A=v===!0?t:e,b=v===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,g*b,0),d.push(0,b,0),m.push(.5,.5),y++;const k=y;for(let G=0;G<=s;G++){const $=G/s*l+r,J=Math.cos($),q=Math.sin($);I.x=A*q,I.y=g*b,I.z=A*J,u.push(I.x,I.y,I.z),d.push(0,b,0),R.x=J*.5+.5,R.y=q*.5*b+.5,m.push(R.x,R.y),y++}for(let G=0;G<s;G++){const W=L+G,$=k+G;v===!0?c.push($,$+1,W):c.push($+1,$,W),z+=3}h.addGroup(f,z,v===!0?1:2),f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class We extends Ti{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+r,Math.PI);let h=0;const c=[],u=new C,d=new C,m=[],y=[],x=[],g=[];for(let f=0;f<=i;f++){const E=[],w=f/i;let v=0;f===0&&a===0?v=.5/e:f===i&&l===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const R=L/e;u.x=-t*Math.cos(s+R*o)*Math.sin(a+w*r),u.y=t*Math.cos(a+w*r),u.z=t*Math.sin(s+R*o)*Math.sin(a+w*r),y.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(R+v,1-w),E.push(h++)}c.push(E)}for(let f=0;f<i;f++)for(let E=0;E<e;E++){const w=c[f][E+1],v=c[f][E],L=c[f+1][E],R=c[f+1][E+1];(f!==0||a>0)&&m.push(w,v,R),(f!==i-1||l<Math.PI)&&m.push(v,L,R)}this.setIndex(m),this.setAttribute("position",new qe(y,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ks extends Ti{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const a=[],r=[],l=[],h=[],c=new C,u=new C,d=new C;for(let m=0;m<=i;m++)for(let y=0;y<=s;y++){const x=y/s*o,g=m/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),r.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(y/s),h.push(m/i)}for(let m=1;m<=i;m++)for(let y=1;y<=s;y++){const x=(s+1)*m+y-1,g=(s+1)*(m-1)+y-1,f=(s+1)*(m-1)+y,E=(s+1)*m+y;a.push(x,g,E),a.push(g,f,E)}this.setIndex(a),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ui extends Ys{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Il extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ai extends Il{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mr=new be,Hh=new C,Gh=new C;class Bc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gh),e.updateMatrixWorld(),Mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vh=new be,io=new C,br=new C;class Eg extends Bc{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),io.setFromMatrixPosition(t.matrixWorld),i.position.copy(io),br.copy(i.position),br.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(br),i.updateMatrixWorld(),s.makeTranslation(-io.x,-io.y,-io.z),Vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}}class Si extends Il{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Eg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ag extends Bc{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ni extends Il{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const M={sky:13625599,fog:14479103,sun:16773849,grass:11069091,grassLight:12447414,grassDark:9427340,path:15653300,wood:13214334,woodDark:11109987,wallCream:16774112,wallPink:16770028,wallMint:14480872,wallLilac:15721722,roofPink:16038084,roofMint:10476744,roofLilac:13351152,roofPeach:16766629,roofBlue:11131120,bearBrown:12159583,bearHoney:14265980,bearCocoa:9398860,bearCream:15917769,snout:16181199,nose:5982783,burden:10129286,burdenStrap:7629410,dressRose:16238804,dressSky:12574965,dressLeaf:13102274,robeWhite:16645622,robeGold:16770728,leaf:10476698,leafPink:16371160,trunk:11569768,flowerYellow:16769162,flowerPink:16757702,flowerBlue:11455487,water:11131120,stone:14209996,light:16774857},Xh=new Map;function Rg(n,t,e){const i=`${n},${t},${e}`;let s=Xh.get(i);return s||(s=new _t(n,t,e),Xh.set(i,s)),s}const Yh=new Map;function ue(n){let t=Yh.get(n);return t||(t=new Ui({color:n}),Yh.set(n,t)),t}function p(n,t,e,i,s=0,o=0,a=0){const r=new Q(Rg(n,t,e),ue(i));return r.position.set(s,o,a),r.castShadow=!0,r.receiveShadow=!0,r}const Pg={bear:M.bearBrown,pig:16103104,frog:10803580,rabbit:15985369,cat:13156276,lion:14264416,owl:9074788,mouse:12102300,sheep:15986660},Ig={bear:M.bearCream,pig:16438490,frog:14085824,rabbit:16644334,cat:15591389,lion:15785147,owl:15261129,mouse:15985891,sheep:16447471},ws=11565370;function Ft(n={}){const t=n.species??"bear",e=n.fur??Pg[t],i=Ig[t],s=n.scale??1,o=new at,a=v=>{const L=new at;return L.position.set(.2*v,.55,0),L.add(p(.3,.55,.34,e,0,-.28,0)),L.add(p(.32,.14,.38,i,0,-.5,.02)),o.add(L),L},r=a(-1),l=a(1),h=new at;h.position.y=.55,o.add(h);const c=n.plump?1.02:.92,u=n.plump?.68:.6,d=n.plump?.78:.6,m=n.plump?.17:.1;h.add(p(c,.78,u,e,0,.4,0)),h.add(p(d,.5,m,i,0,.38,.28)),h.add(p(.52,.44,.46,e,0,1,0)),t==="bear"?h.add(p(.2,.2,.2,e,0,.25,-.34)):t==="pig"?(h.add(p(.12,.12,.16,15703980,.08,.3,-.36)),h.add(p(.12,.12,.12,15703980,.16,.4,-.4))):t==="rabbit"?h.add(p(.24,.24,.2,16777215,0,.28,-.36)):t==="cat"?(h.add(p(.14,.14,.5,e,.2,.3,-.5)),h.add(p(.14,.3,.14,e,.2,.5,-.72))):t==="lion"?(h.add(p(.14,.14,.55,e,.2,.28,-.52)),h.add(p(.22,.22,.22,ws,.2,.28,-.84))):t==="mouse"?h.add(p(.08,.08,.6,14263212,.1,.22,-.5)):t==="sheep"&&(h.add(p(c+.12,.34,u+.12,16777215,0,.66,0)),h.add(p(.22,.22,.18,16777215,0,.3,-(u/2+.06))));const y=v=>{const L=new at;return L.position.set(.55*v,.68,0),L.add(p(.26,.55,.3,e,0,-.22,0)),L.add(p(.28,.14,.32,i,0,-.46,0)),h.add(L),L},x=y(-1),g=y(1),f=new at;if(f.position.y=1.16,h.add(f),f.add(p(.95,.82,.8,e,0,.4,0)),t==="bear")f.add(p(.24,.24,.16,e,-.36,.9,0)),f.add(p(.24,.24,.16,e,.36,.9,0)),f.add(p(.14,.14,.1,i,-.36,.9,.05)),f.add(p(.14,.14,.1,i,.36,.9,.05)),f.add(p(.4,.3,.18,M.snout,0,.26,.46)),f.add(p(.16,.12,.08,M.nose,0,.34,.56));else if(t==="pig"){const v=p(.26,.26,.14,15703980,-.34,.9,0);v.rotation.z=.5,f.add(v);const L=p(.26,.26,.14,15703980,.34,.9,0);L.rotation.z=-.5,f.add(L),f.add(p(.42,.3,.16,15703980,0,.3,.46)),f.add(p(.07,.12,.04,13070206,-.1,.3,.55)),f.add(p(.07,.12,.04,13070206,.1,.3,.55))}else if(t==="frog"){for(const v of[-1,1])f.add(p(.28,.26,.28,e,.26*v,.94,.16)),f.add(p(.18,.18,.08,16777215,.26*v,.96,.32)),f.add(p(.09,.12,.04,M.nose,.26*v,.96,.37));f.add(p(.5,.06,.05,6192458,0,.2,.41))}else if(t==="rabbit"){for(const v of[-1,1])f.add(p(.2,.7,.14,e,.24*v,1.1,0)),f.add(p(.1,.5,.06,16238804,.24*v,1.1,.06));f.add(p(.3,.22,.14,16777215,0,.26,.44)),f.add(p(.12,.1,.06,15043227,0,.36,.52))}else if(t==="cat"){for(const v of[-1,1]){const L=p(.24,.28,.14,e,.32*v,.92,0);L.rotation.z=-.4*v,f.add(L),f.add(p(.12,.14,.08,16238804,.32*v,.9,.05))}f.add(p(.3,.2,.14,16777215,0,.24,.44)),f.add(p(.1,.08,.06,15043227,0,.32,.52))}else if(t==="lion")f.add(p(1.3,1.2,.34,ws,0,.4,-.44)),f.add(p(1.24,.3,.62,ws,0,.97,-.12)),f.add(p(.3,1.06,.62,ws,-.62,.38,-.12)),f.add(p(.3,1.06,.62,ws,.62,.38,-.12)),f.add(p(.9,.26,.6,ws,0,-.15,-.1)),f.add(p(.24,.24,.18,e,-.42,1.06,.02)),f.add(p(.24,.24,.18,e,.42,1.06,.02)),f.add(p(.44,.32,.2,M.snout,0,.26,.47)),f.add(p(.16,.12,.08,M.nose,0,.35,.58));else if(t==="owl"){const v=p(.14,.3,.1,e,-.28,1.02,-.04);v.rotation.z=.2,f.add(v);const L=p(.14,.3,.1,e,.28,1.02,-.04);L.rotation.z=-.2,f.add(L),f.add(p(.36,.36,.08,i,-.24,.5,.42)),f.add(p(.36,.36,.08,i,.24,.5,.42)),f.add(p(.16,.16,.16,15245882,0,.32,.5))}else if(t==="sheep"){f.add(p(1.04,.34,.9,16777215,0,.9,-.02)),f.add(p(.8,.28,.7,16777215,0,1.12,-.04)),f.add(p(.4,.22,.4,16777215,.12,1.3,0));for(const v of[-1,1]){const L=p(.36,.18,.14,e,.56*v,.62,.02);L.rotation.z=-.25*v,f.add(L)}f.add(p(.36,.26,.16,16447471,0,.24,.45)),f.add(p(.13,.1,.07,14721964,0,.32,.54))}else t==="mouse"&&(f.add(p(.3,.3,.1,e,-.32,.98,.02)),f.add(p(.3,.3,.1,e,.32,.98,.02)),f.add(p(.16,.16,.06,14263212,-.32,.98,.07)),f.add(p(.16,.16,.06,14263212,.32,.98,.07)),f.add(p(.26,.2,.16,15985891,0,.24,.44)),f.add(p(.1,.08,.06,14263212,0,.3,.53)),f.add(p(.28,.02,.02,16777215,-.05,.28,.55)),f.add(p(.28,.02,.02,16777215,.05,.28,.55)));t!=="frog"&&(f.add(p(.1,.14,.05,M.nose,-.24,.5,.41)),f.add(p(.1,.14,.05,M.nose,.24,.5,.41))),f.add(p(.12,.08,.04,16233149,-.36,.32,.41)),f.add(p(.12,.08,.04,16233149,.36,.32,.41));const E=n.outfit??"none",w=n.outfitColor??M.dressRose;if(E==="shirt"?(h.add(p(n.plump?1.12:.98,n.plump?.54:.52,n.plump?.8:.7,w,0,n.plump?.53:.52,0)),x.add(p(.32,.28,.36,w,0,-.1,0)),g.add(p(.32,.28,.36,w,0,-.1,0))):E==="dress"?(h.add(p(1,.5,.68,w,0,.12,0)),h.add(p(.96,.4,.7,w,0,.52,0)),h.add(p(.5,.16,.06,16777215,0,.68,.34)),x.add(p(.32,.24,.36,w,0,-.08,0)),g.add(p(.32,.24,.36,w,0,-.08,0))):E==="apron"?(h.add(p(.98,.5,.7,16446435,0,.5,0)),x.add(p(.32,.26,.36,16446435,0,-.1,0)),g.add(p(.32,.26,.36,16446435,0,-.1,0)),h.add(p(.62,.6,.08,w,0,.32,.32)),h.add(p(.3,.14,.06,w,0,.68,.34))):E==="overalls"?(h.add(p(.96,.44,.64,w,0,.2,0)),h.add(p(.44,.4,.08,w,0,.56,.3)),h.add(p(.12,.4,.06,w,-.22,.72,.3)),h.add(p(.12,.4,.06,w,.22,.72,.3))):E==="robe"&&(h.add(p(1.02,.9,.7,w,0,.36,0)),h.add(p(.3,.1,.06,M.robeGold,0,.66,.34)),x.add(p(.34,.4,.38,w,0,-.14,0)),g.add(p(.34,.4,.38,w,0,-.14,0)),f.add(p(.9,.5,.2,w,0,.5,-.45))),n.sling){const v=n.plump?.42:.34,L=p(.14,1.05,.05,9072466,0,.42,v);L.rotation.z=.72,h.add(L);const R=p(.14,1.05,.05,9072466,0,.42,n.plump?-.41:-.33);R.rotation.z=-.72,h.add(R),h.add(p(.24,.12,.7,9072466,-.34,.82,0)),h.add(p(.46,.36,.22,11108958,.5,.02,.1)),h.add(p(.46,.14,.24,9072466,.5,.16,.1)),h.add(p(.1,.1,.06,M.robeGold,.5,.06,.23))}if(n.burden){h.add(p(.88,.62,.54,M.burden,0,.45,-.56)),h.add(p(.7,.5,.46,8880506,0,.96,-.54)),h.add(p(.5,.36,.36,M.burdenStrap,0,1.28,-.52));const v=n.plump?.42:.31;h.add(p(.1,.6,.08,M.burdenStrap,-.3,.45,v)),h.add(p(.1,.6,.08,M.burdenStrap,.3,.45,v))}return o.scale.setScalar(s),{root:o,body:h,head:f,armL:x,armR:g,legL:r,legR:l}}function Ct(n,t,e){const i=e?Math.sin(t*9)*.7:0,s=Math.sin(t*2)*.02;n.legL.rotation.x=i,n.legR.rotation.x=-i,n.armL.rotation.x=-i*.8,n.armR.rotation.x=i*.8,n.body.position.y=.55+(e?Math.abs(Math.sin(t*9))*.06:s),n.head.rotation.z=e?Math.sin(t*4.5)*.04:Math.sin(t*1.5)*.03}const li={east:60,west:-46,north:-34,south:34,gateHalfWidth:1.9};function Lg(n,t,e=5,i=4.4,s=2.6){const o=new at;o.add(p(e,s,i,n,0,s/2,0));const a=M.woodDark;o.add(p(.22,s,.22,a,-e/2+.11,s/2,i/2+.02)),o.add(p(.22,s,.22,a,e/2-.11,s/2,i/2+.02)),o.add(p(e,.22,.22,a,0,s-.11,i/2+.02));const r=4;for(let l=0;l<r;l++){const h=e+.6-l*(e+.6)/r;o.add(p(h,.5,i+.6,t,0,s+.25+l*.5,0))}o.add(p(.55,2.2,.55,M.stone,e/2-.8,s+1.6,-.8)),o.add(p(.7,.25,.7,12893877,e/2-.8,s+2.75,-.8)),o.add(p(.9,1.5,.16,M.woodDark,0,.75,i/2+.06)),o.add(p(.12,.12,.1,M.roofPeach,.28,.75,i/2+.16));for(const l of[-e/2+1.1,e/2-1.1])o.add(p(.8,.8,.12,M.roofBlue,l,1.5,i/2+.06)),o.add(p(.9,.14,.14,M.woodDark,l,1.06,i/2+.08));return o}function Dg(n=!1){const t=new at,e=n?M.leafPink:M.leaf;return t.add(p(.5,1.6,.5,M.trunk,0,.8,0)),t.add(p(1.9,1.3,1.9,e,0,2.2,0)),t.add(p(1.3,.9,1.3,e,0,3.2,0)),t.add(p(.7,.6,.7,e,0,3.9,0)),t}function kg(){const n=new at;n.add(p(.18,2.4,.18,M.woodDark,0,1.2,0));const t=p(.4,.4,.4,M.light,0,2.5,0);return t.material=new Ui({color:M.light,emissive:16773296,emissiveIntensity:.6}),n.add(t),n.add(p(.5,.12,.5,M.woodDark,0,2.75,0)),n}function Ug(){const n=new at;return n.add(p(1.6,.8,1.6,M.stone,0,.4,0)),n.add(p(1.2,.1,1.2,M.water,0,.82,0)),n.add(p(.14,1.5,.14,M.woodDark,-.7,1.2,0)),n.add(p(.14,1.5,.14,M.woodDark,.7,1.2,0)),n.add(p(1.8,.35,1.1,M.roofPink,0,2.05,0)),n}function qh(n){const t=new at;t.add(p(2.6,.9,1.2,M.wood,0,.45,0)),t.add(p(2.8,.14,1.4,M.woodDark,0,.95,0)),t.add(p(.4,.3,.4,M.flowerYellow,-.8,1.15,.1)),t.add(p(.35,.35,.35,16757702,-.1,1.2,-.2)),t.add(p(.45,.25,.3,11455487,.7,1.14,.15)),t.add(p(.14,2.2,.14,M.woodDark,-1.25,1.1,.62)),t.add(p(.14,2.2,.14,M.woodDark,1.25,1.1,.62)),t.add(p(.14,2.2,.14,M.woodDark,-1.25,1.1,-.62)),t.add(p(.14,2.2,.14,M.woodDark,1.25,1.1,-.62));for(let e=0;e<5;e++){const i=e%2===0?n:16775407;t.add(p(.58,.16,1.7,i,-1.16+e*.58,2.28,0))}return t}function Ng(){const n=new at;return n.add(p(.7,.9,.7,M.wood,0,.45,0)),n.add(p(.76,.12,.76,M.woodDark,0,.25,0)),n.add(p(.76,.12,.76,M.woodDark,0,.7,0)),n.add(p(.6,.06,.6,M.water,0,.93,0)),n}function Fg(){const n=new at;return n.add(p(.8,.8,.8,M.wood,0,.4,0)),n.add(p(.7,.7,.7,M.woodDark,.75,.35,.15)),n.add(p(.6,.6,.6,M.wood,.3,1.1,.05)),n}function Og(){const n=new at;return n.add(p(1.4,.9,1,15785374,0,.45,0)),n.add(p(1.44,.14,1.04,14270584,0,.45,0)),n}function zg(){const n=new at;return n.add(p(.14,2,.14,M.woodDark,-2.2,1,0)),n.add(p(.14,2,.14,M.woodDark,2.2,1,0)),n.add(p(4.4,.05,.05,16775407,0,1.9,0)),n.add(p(.7,.8,.06,M.dressSky,-1.2,1.5,0)),n.add(p(.6,.7,.06,M.dressRose,.1,1.55,0)),n.add(p(.5,.6,.06,M.dressLeaf,1.3,1.6,0)),n}function Bg(n){const t=new at,e=new at;return e.position.set(0,.42,.16),t.add(p(.32,.28,.42,n,0,.32,-.04)),t.add(p(.16,.1,.16,n,0,.2,-.3)),e.add(p(.2,.2,.2,n,0,0,0)),e.add(p(.1,.06,.12,16757575,0,-.02,.14)),e.add(p(.12,.12,.04,14701674,0,.12,.02)),t.add(e),t.add(p(.05,.16,.05,15247694,-.08,.08,-.02)),t.add(p(.05,.16,.05,15247694,.08,.08,-.02)),{root:t,head:e}}function Hg(){const n=new at;n.add(p(1.15,.75,.65,16446440,0,.68,0)),n.add(p(.36,.1,.4,4865331,-.2,1.04,.05)),n.add(p(.3,.1,.3,4865331,.3,.68,-.15));const t=new at;t.position.set(.68,.78,0),t.add(p(.36,.34,.32,16446440,0,0,0)),t.add(p(.14,.1,.1,16238804,.2,-.08,0)),t.add(p(.06,.14,.05,15261646,.05,.18,-.14)),t.add(p(.06,.14,.05,15261646,.05,.18,.14)),n.add(t);for(const[i,s]of[[-.4,-.22],[-.4,.22],[.32,-.22],[.32,.22]])n.add(p(.18,.55,.18,15261646,i,.28,s));const e=p(.06,.4,.06,16446440,-.62,.75,0);return e.rotation.x=.3,n.add(e),{root:n,tail:e}}function Gg(){const n=new at;n.add(p(.5,.9,.5,9082784,0,.45,0)),n.add(p(.6,.14,.6,7305858,0,.94,0));const t=new at;return t.position.set(0,.85,-.2),t.add(p(.5,.1,.1,7305858,0,0,-.2)),n.add(t),n.add(p(.14,.4,.14,9082784,.32,.5,.2)),n.add(p(1.3,.35,.7,M.stone,.55,.18,.55)),n.add(p(1.1,.1,.5,M.water,.55,.35,.55)),n}function Vg(){const n=new at;return n.add(p(.6,.24,.6,13215845,0,.12,0)),n.add(p(.46,.12,.46,14465918,0,.24,0)),n}function Sr(n,t,e){return p(.16,.2,.16,n,t,.34,e)}function Ms(n){const t=new at,e=Math.max(2,Math.round(n/1.2));for(let i=0;i<e;i++)t.add(p(.14,.8,.14,M.wood,-n/2+i*n/(e-1),.4,0));return t.add(p(n,.12,.1,M.wood,0,.62,0)),t.add(p(n,.12,.1,M.wood,0,.32,0)),t}function Wg(n){const t=new at,e=[],i=Xg(7),s=new Q(new _t(220,1,220),ue(M.grass));s.position.y=-.5,s.receiveShadow=!0,t.add(s);for(let _=0;_<160;_++){const U=(i()-.5)*180,O=(i()-.5)*160;if(Math.abs(U)<30&&Math.abs(O)<26)continue;const V=i()>.5?M.grassLight:M.grassDark,Y=p(1+i()*2,.12,1+i()*2,V,U,.06,O);Y.castShadow=!1,t.add(Y)}const o=(_,U,O,V)=>{const Y=p(O,.14,V,M.path,_,.07,U);Y.castShadow=!1,t.add(Y)};o(0,0,16,16),o(33.5,0,51,5),o(63,0,8,4),o(-16,0,16,4.5),o(0,-14,4.5,14),o(0,13,4.5,12);const a=[[-10,-12,.35,M.wallCream,M.roofPink],[10,-13,-.3,M.wallPink,M.roofMint],[-14,10,.5,M.wallMint,M.roofLilac],[12,11,-.6,M.wallLilac,M.roofPeach],[-26,-2,1.35,M.wallCream,M.roofBlue],[22,-8,-1.1,M.wallPink,M.roofPink]],r=[];for(const[_,U,O,V,Y]of a){const Tt=Lg(V,Y);Tt.position.set(_,0,U),Tt.rotation.y=O,t.add(Tt),e.push({x:_,z:U,r:3.6});const ut=5/2-.8,vt=-.8;r.push(new C(_+ut*Math.cos(O)+vt*Math.sin(O),2.6+3.1,U-ut*Math.sin(O)+vt*Math.cos(O)))}const l=Ug();l.position.set(0,0,0),t.add(l),e.push({x:0,z:0,r:1.6});const h=[{id:"well",name:"the Well",x:0,z:0,r:2.4}],c=Gg();c.position.set(-5,0,-3.5),t.add(c),e.push({x:-5,z:-3.5,r:.9}),h.push({id:"pump",name:"the Water Pump",x:-5,z:-3.5,r:2.2});const u=[];[[21.2,19.4,15985369],[22.4,18.6,12159583]].forEach(([_,U,O],V)=>{const{root:Y,head:Tt}=Bg(O);Y.position.set(_,0,U),Y.rotation.y=V*1.4,t.add(Y),e.push({x:_,z:U,r:.35}),u.push({root:Y,head:Tt,phase:V*2.4})});const m=Vg();m.position.set(23.4,0,19.8),t.add(m),m.add(Sr(16775407,-.12,.05)),m.add(Sr(15985369,.1,-.05)),m.add(Sr(16774112,.02,.15)),e.push({x:23.4,z:19.8,r:.5}),h.push({id:"chickens",name:"the Chickens",x:21.8,z:19,r:2.4}),h.push({id:"nest",name:"the Nest",x:23.4,z:19.8,r:1.8});const y=Ms(4.4);y.position.set(28,0,20.5),t.add(y);const x=Ms(4.4);x.position.set(28,0,24.5),t.add(x);const g=Ms(4.4);g.position.set(25.8,0,22.5),g.rotation.y=Math.PI/2,t.add(g);const f=Ms(4.4);f.position.set(30.2,0,22.5),f.rotation.y=Math.PI/2,t.add(f);const E=Hg();E.root.position.set(28,0,22.5),E.root.rotation.y=-.6,t.add(E.root),e.push({x:28,z:22.5,r:1.3}),h.push({id:"cow",name:"the Cow",x:28,z:22.5,r:2.6});const w=[[-18,-18,!0],[18,-19,!1],[-20,17,!1],[20,18,!0],[-32,-12,!1],[-34,8,!0],[30,14,!1],[8,-22,!0],[-8,22,!1],[36,-14,!0],[44,10,!1],[52,-8,!0]];for(const[_,U,O]of w){const V=Dg(O);V.position.set(_,0,U),V.rotation.y=i()*Math.PI,t.add(V),e.push({x:_,z:U,r:.9})}for(const[_,U]of[[14,3.4],[26,-3.4],[38,3.4],[-14,3.4]]){const O=kg();O.position.set(_,0,U),t.add(O),e.push({x:_,z:U,r:.4})}const v=qh(M.roofPink);v.position.set(-4,0,8.5),v.rotation.y=Math.PI,t.add(v),e.push({x:-4,z:8.5,r:1.8});const L=qh(M.roofBlue);L.position.set(6,0,-8),L.rotation.y=.2,t.add(L),e.push({x:6,z:-8,r:1.8});const R=Ng();R.position.set(8.2,0,9),t.add(R),e.push({x:8.2,z:9,r:.6});const I=Fg();I.position.set(-13,0,13),I.rotation.y=.4,t.add(I),e.push({x:-13,z:13,r:1.1});for(const[_,U]of[[16,18.5],[19.5,17]]){const O=Og();O.position.set(_,0,U),O.rotation.y=i()*Math.PI,t.add(O),e.push({x:_,z:U,r:.9})}const z=zg();z.position.set(-6,0,-10.5),z.rotation.y=.35,t.add(z);const A=Ms(7);A.position.set(-10,0,-8.2),t.add(A);const b=Ms(6);b.position.set(-15.4,0,-12),b.rotation.y=Math.PI/2,t.add(b);const k=[M.flowerYellow,M.flowerPink,M.flowerBlue];for(let _=0;_<70;_++){const U=(i()-.5)*120,O=(i()-.5)*90,V=p(.22,.22,.22,k[_%3],U,.2,O);V.castShadow=!1,t.add(V),t.add(p(.08,.2,.08,M.leaf,U,.06,O))}const G=16249834,W=15722972,$=14670024,J=2.8,q=1.2,nt=(_,U,O,V,Y)=>{const Tt=O-_,ut=V-U,vt=Math.hypot(Tt,ut),Gt=Math.round(vt/6),rt=Math.abs(Tt)>Math.abs(ut);for(let wt=0;wt<Gt;wt++){const jt=_+Tt*(wt+.5)/Gt,Ut=U+ut*(wt+.5)/Gt,bt=vt/Gt,Ot=rt?bt:q,Yt=rt?q:bt,ge=p(Ot,J,Yt,wt%2===0?G:W,jt,J/2,Ut);t.add(ge),t.add(p(rt?Ot:q+.06,.09,rt?q+.06:Yt,$,jt,1,Ut)),t.add(p(rt?Ot:q+.06,.09,rt?q+.06:Yt,$,jt,1.9,Ut)),t.add(p(Ot+.2,.28,Yt+.2,$,jt,J+.14,Ut));const N=Math.floor(bt/1.9);for(let dt=0;dt<N;dt++){const tt=-bt/2+(dt+.5)*(bt/N);t.add(p(rt?.85:q+.1,.55,rt?q+.1:.85,G,jt+(rt?tt:0),J+.55,Ut+(rt?0:tt)))}}},K=(_,U,O=!1)=>{const V=O?2.4:2,Y=O?5.2:4.2;t.add(p(V,Y,V,G,_,Y/2,U)),t.add(p(V+.5,.35,V+.5,$,_,Y+.18,U));for(const[Tt,ut]of[[-1,-1],[-1,1],[1,-1],[1,1]])t.add(p(.55,.55,.55,G,_+Tt*V/2.6,Y+.6,U+ut*V/2.6));t.add(p(V-.4,.6,V-.4,M.roofPink,_,Y+.75,U)),e.push({x:_,z:U,r:V*.75})},j=li.east,it=li.west,ct=li.north,kt=li.south;nt(it,ct,j,ct),nt(it,kt,j,kt),nt(it,ct,it,kt),nt(j,ct,j,-4.8),nt(j,4.8,j,kt),K(it,ct),K(j,ct),K(it,kt),K(j,kt),K(j,-3.6,!0),K(j,3.6,!0),t.add(p(.9,1.1,5.4,G,j,4.3,0)),t.add(p(1.1,.3,5.8,$,j,4.95,0)),t.add(p(.7,.5,4.6,M.roofPink,j,5.3,0));const Qt={open:!1},Z=_=>{const U=new at;U.position.set(j,0,2.35*_);const O=p(.35,3.4,2.3,M.woodDark,0,1.7,-1.15*_);return U.add(O),U.add(p(.4,.16,2.3,9072466,0,.9,-1.15*_)),U.add(p(.4,.16,2.3,9072466,0,2.4,-1.15*_)),U.add(p(.12,.3,.3,M.robeGold,.2,1.7,-2*_)),t.add(U),U},lt=Z(-1),gt=Z(1);for(const[_,U]of[[-30,-20],[18,24],[-24,18]])t.add(p(1.4,.8,1.2,M.stone,_,.4,U)),t.add(p(.8,.5,.8,12893877,_+1.1,.25,U+.4)),t.add(p(.5,.3,.5,M.grassDark,_+.4,.85,U-.3));const xt=new at,Xt=new Mt({color:16767306,transparent:!0,opacity:.8,fog:!1}),Kt=new Q(new _t(2.6,40,2.6),Xt);Kt.position.y=20,xt.add(Kt);const Jt=new Q(new _t(1.3,44,1.3),new Mt({color:16776160,transparent:!0,opacity:.95,fog:!1}));Jt.position.y=22,xt.add(Jt);const ve=new Mt({color:16771194,fog:!1}),D=new Q(new _t(3.4,3.4,3.4),ve);D.position.y=42,D.rotation.set(Math.PI/4,0,Math.PI/4),xt.add(D);const we=new Q(new _t(5,5,5),new Mt({color:16774072,transparent:!0,opacity:.5,fog:!1}));we.position.y=42,we.rotation.set(0,Math.PI/4,Math.PI/4),xt.add(we);const ie=new Si(16771194,3.5,40);ie.position.y=4,xt.add(ie),xt.position.set(64.5,0,0),xt.visible=!1,t.add(xt);const ae=[];for(const _ of r)for(let U=0;U<3;U++){const O=new Q(new _t(.5,.5,.5),new Ui({color:16118508,transparent:!0,opacity:.7}));O.castShadow=!1,t.add(O),ae.push({mesh:O,base:_,phase:U/3,speed:.14+i()*.05})}const It=[],Se=[16766629,16038084,11455487,13351152,16774072,12447414];[[-18,4],[5,12],[-10,-4],[16,8],[-24,10],[30,-6]].forEach(([_,U],O)=>{const V=new at,Y=Se[O%Se.length],Tt=new Q(new _t(.3,.05,.24),new Ui({color:Y}));Tt.position.x=-.16;const ut=Tt.clone();ut.position.x=.16;const vt=new Q(new _t(.08,.08,.26),ue(M.nose));V.add(Tt,ut,vt),t.add(V),It.push({g:V,wingL:Tt,wingR:ut,cx:_,cz:U,r:1.5+i()*2,ph:i()*6.28,sp:.5+i()*.5})});const Wt=[];for(let _=0;_<3;_++){const U=new at,O=new Q(new _t(.3,.22,.5),ue(16775407)),V=new Q(new _t(.5,.06,.3),ue(14209996));V.position.x=-.35;const Y=V.clone();Y.position.x=.35,U.add(O,V,Y),t.add(U),Wt.push({g:U,wingL:V,wingR:Y,r:12+_*7,h:9+_*2.5,ph:_*2.1,sp:.12+_*.03})}const P=_=>{const U=Qt.open?1.85:0;lt.rotation.y+=(-U-lt.rotation.y)*.04,gt.rotation.y+=(U-gt.rotation.y)*.04;for(const O of ae){const V=(_*O.speed+O.phase)%1;O.mesh.position.set(O.base.x+Math.sin((V+O.phase)*9)*.3,O.base.y+V*3.2,O.base.z+Math.cos((V+O.phase)*7)*.2);const Y=.5+V*.9;O.mesh.scale.setScalar(Y),O.mesh.material.opacity=.65*(1-V)}for(const O of It){const V=_*O.sp+O.ph;O.g.position.set(O.cx+Math.cos(V)*O.r,1.2+Math.sin(_*1.7+O.ph)*.5,O.cz+Math.sin(V*1.3)*O.r),O.g.rotation.y=-V*1.15+Math.PI/2;const Y=Math.sin(_*16+O.ph)*.9;O.wingL.rotation.z=Y,O.wingR.rotation.z=-Y}for(const O of Wt){const V=_*O.sp+O.ph;O.g.position.set(Math.cos(V)*O.r,O.h+Math.sin(_*.9+O.ph),Math.sin(V)*O.r),O.g.rotation.y=-V-Math.PI/2;const Y=Math.sin(_*7+O.ph)*.6;O.wingL.rotation.z=Y,O.wingR.rotation.z=-Y}for(const O of u){const V=(_*.6+O.phase)%4;O.head.rotation.x=V<.5?Math.sin(V*Math.PI/.5)*.7:0}E.tail.rotation.z=Math.sin(_*1.1)*.25};return n.add(t),{group:t,colliders:e,interactables:h,lightBeam:xt,gate:Qt,update:P}}function Xg(n){let t=n;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Yg=[{id:"christiana",name:"Christiana",species:"bear",fur:M.bearHoney,scale:.95,outfit:"dress",outfitColor:M.dressRose,x:-8.5,z:-7,facing:Math.PI,getLines:n=>{const t=n.eggsCollected>=3?[{speaker:"Christiana",text:"Oh — fresh eggs! Bless you, dear, breakfast will be lovely this morning. 🥚"}]:[];return n.talkedToEvangelist?[{speaker:"Christiana",text:"You really mean to go, then… toward that light in the east?"},{speaker:"Christiana",text:"Then go safely, my dear Christian. The cubs and I will keep the hearth warm."},{speaker:"Christiana",text:"Perhaps one day… we will follow you. 💗"}]:[...t,{speaker:"Christiana",text:"Christian, dear, you have been sighing all week over that heavy burden on your back."},{speaker:"Christiana",text:"You keep saying our city will not stand… it frightens the cubs, you know."},{speaker:"Christiana",text:"If you truly must find answers, they say a wise bear called Evangelist walks the east road."}]},onFinish:n=>{n.talkedToFamily=!0}},{id:"cub1",name:"Elsie (cub)",species:"bear",fur:M.bearBrown,scale:.55,outfit:"dress",outfitColor:12098272,x:-11,z:-6,facing:Math.PI*.8,wanderRadius:2,getLines:n=>n.talkedToEvangelist?[{speaker:"Elsie",text:"Papa, is that sparkly light for YOU? It looks like a star that fell down!"},{speaker:"Elsie",text:"Bring me back a piece of it, okay? Promise!"}]:[{speaker:"Elsie",text:"Papa! Why do you always carry that big lumpy backpack?"},{speaker:"Elsie",text:"It looks SO heavy. I tried to lift it once and fell right over. Plop!"}]},{id:"cub2",name:"Anna (cub)",species:"bear",fur:M.bearHoney,scale:.5,outfit:"dress",outfitColor:M.dressLeaf,x:-7,z:-5,facing:-Math.PI*.7,wanderRadius:2,getLines:n=>n.talkedToEvangelist?[{speaker:"Anna",text:"*sniff* …You are going away, Papa?"},{speaker:"Anna",text:"Mama says brave bears follow their hearts. So… be the bravest one ever."}]:[{speaker:"Anna",text:"Papa, I found a honey-flower by the well! Want to smell it?"},{speaker:"Anna",text:"It smells like… like honey! Hee hee."}]},{id:"obstinate",name:"Obstinate",species:"pig",scale:1.05,outfit:"shirt",outfitColor:10336417,x:4,z:4.5,facing:-Math.PI/3,getLines:n=>n.chaseDone?[{speaker:"Obstinate",text:"Oh. So you've come crawling back, have you? …No? Just VISITING? Hmph."},{speaker:"Obstinate",text:"Moonbeams and fairy-gold. Mark my words, Christian — no good ever came of leaving a perfectly fine city."}]:[{speaker:"Obstinate",text:"Hmph. Still going on about the city falling down, Christian?"},{speaker:"Obstinate",text:"This is the finest city anyone could want! Acorns in the market, mud by the river…"},{speaker:"Obstinate",text:"Leave if you like — but no sensible creature will go with you. Hmph!"}]},{id:"pliable",name:"Pliable",species:"rabbit",scale:.95,outfit:"shirt",outfitColor:16766629,x:7,z:1,facing:Math.PI,wanderRadius:3,getLines:n=>n.pliableLeft?[{speaker:"Pliable",text:"Ah— Christian! You made it out of that dreadful bog, then. *ahem* …You're not cross with me, are you?"},{speaker:"Pliable",text:"The mud, you see. It was in my EARS. A gentle-rabbit has his limits! …But do write when you reach that golden city."}]:n.pliableFollowing?[{speaker:"Pliable",text:"Lead on, Christian! Crowns of gold, here we come — hop hop!"}]:n.talkedToEvangelist?[{speaker:"Pliable",text:"A shining light?! And a Wicket Gate?! Ooooh, tell me EVERYTHING."},{speaker:"Christian",text:"Evangelist says beyond the gate lies the way to the Celestial City — where no city ever crumbles."},{speaker:"Pliable",text:"Golden streets… crowns… no crumbling… It sounds marvellous. And far. And possibly muddy. Oh, I can't decide!"}]:[{speaker:"Pliable",text:"Oh, hello Christian! Don't mind old Obstinate — he grumbles at clouds, too."},{speaker:"Pliable",text:"A Celestial City, all gold and light? If it's real, I'd love to see it… I think."}]},{id:"baker",name:"Mrs. Bramble",species:"bear",fur:M.bearBrown,scale:.98,outfit:"apron",outfitColor:15980966,x:-3,z:11,facing:0,getLines:n=>n.talkedToEvangelist?[{speaker:"Mrs. Bramble",text:"Leaving us, are you? Well, I never held with any of it, but I'll miss your face at my counter."},{speaker:"Christian",text:"Thank you for all the buns, Mrs. Bramble. I won't forget your kindness."},{speaker:"Mrs. Bramble",text:"Oh, hush now, off with you before I get flour in my eyes. Go on!"}]:[{speaker:"Mrs. Bramble",text:"Fresh honey-buns! Oh — Christian, dear, you look pale as flour."},{speaker:"Christian",text:"I'm well enough, Mrs. Bramble. Just… this burden. It won't let me rest."},{speaker:"Mrs. Bramble",text:"Here, imagine I gave you a bun. On the house. You'll need your strength, whatever it is you're up to."}]},{id:"farmer",name:"Old Hamlet",species:"pig",fur:15247282,scale:1,outfit:"overalls",outfitColor:9418968,x:17,z:16,facing:-Math.PI/2,wanderRadius:3,getLines:n=>n.talkedToEvangelist?[{speaker:"Old Hamlet",text:"A light in the east, eh? My old snout smells a change in the wind…"},{speaker:"Christian",text:"I hope it's a change for the better, Old Hamlet. I mean to follow it."},{speaker:"Old Hamlet",text:"Take care on the road, lad. Mind the bog past the fields — it swallows boots whole."}]:[{speaker:"Old Hamlet",text:"Mornin', Christian. Fine day for turnips. Not so fine for carryin' great sacks about, I'd say."},{speaker:"Christian",text:"It isn't turnips, Old Hamlet. I wish it were something I could just set down in a field."},{speaker:"Old Hamlet",text:"You look like a pig who's seen the butcher's calendar. Whatever's weighing you, don't carry it alone."}]},{id:"frogkid",name:"Puddle",species:"frog",scale:.55,outfit:"shirt",outfitColor:16238804,x:2.5,z:-3,facing:Math.PI,wanderRadius:3,getLines:n=>n.talkedToEvangelist?[{speaker:"Puddle",text:"Ribbit! Are you really going away, Mister Christian? All the way past the fields?"},{speaker:"Christian",text:"All the way to a Celestial City, Puddle. I hope you'll come visit someday."},{speaker:"Puddle",text:"A CELESTIAL city?! Do the puddles there go on forever?! …I'll practice my jumping, just in case!"}]:[{speaker:"Puddle",text:"Ribbit! Mister Christian! I can jump higher than the well! Wanna see?"},{speaker:"Christian",text:"Ha! Go on then, Puddle — show me your best jump."},{speaker:"Puddle",text:"…Okay, maybe not HIGHER. But definitely louder. RIBBIT!"}]},{id:"florist",name:"Clover",species:"rabbit",fur:15325123,scale:.92,outfit:"dress",outfitColor:13102274,x:-18,z:4,facing:Math.PI/2,wanderRadius:3,getLines:n=>n.talkedToEvangelist?[{speaker:"Clover",text:"Everyone's whispering about you, Christian. A light beyond the fields, imagine!"},{speaker:"Christian",text:"It's true, Clover. I mean to follow it, however far it leads."},{speaker:"Clover",text:"Here — a daisy for your buttonhole. Flowers make every road shorter."}]:[{speaker:"Clover",text:"Good day, Christian! My daisies came up lovely this spring, haven't they?"},{speaker:"Christian",text:"They're lovely, Clover. I only wish I could enjoy them without this weight on my back."},{speaker:"Clover",text:"Though… the soil's been trembling lately. The flowers feel it too, I think."}]},{id:"cat",name:"Mr. Whiskers",species:"cat",scale:.96,outfit:"shirt",outfitColor:13351152,x:10,z:-6,facing:Math.PI*.75,getLines:n=>n.talkedToEvangelist?[{speaker:"Mr. Whiskers",text:"Mrrrow. So you're actually leaving. I suppose someone has to stop worrying about the city collapsing."},{speaker:"Christian",text:"Will you miss me, Mr. Whiskers?"},{speaker:"Mr. Whiskers",text:"…Don't make it strange. Go on, then. Mind the sunbeams on your way out."}]:[{speaker:"Mr. Whiskers",text:"Mrrrow. You're blocking my sunbeam, Christian."},{speaker:"Christian",text:"Sorry, Mr. Whiskers. I have rather a lot on my mind — and on my back."},{speaker:"Mr. Whiskers",text:"A city falling down? As long as it doesn't fall before my nap, I really can't be bothered."}]},{id:"faithful",name:"Faithful",species:"sheep",scale:.98,outfit:"shirt",outfitColor:11060386,x:18,z:13,facing:-Math.PI*.6,wanderRadius:2.5,getLines:n=>n.talkedToEvangelist?[{speaker:"Faithful",text:"So it's true — you're really going. Toward that light in the east."},{speaker:"Faithful",text:"I've felt it too, Christian. The dreams, the dread… this city will not stand. I haven't the courage to leave today, but…"},{speaker:"Faithful",text:"Go on ahead, friend. I have a feeling our roads will meet again — somewhere past the dark places. Baa. Look for a sheep on the horizon."}]:[{speaker:"Faithful",text:"Baa… oh, Christian. You look how I feel — like the whole sky is about to come down."},{speaker:"Faithful",text:"I've been reading the same book you have. And I've started having the same dreams. Fire, and trumpets, and this city gone to ash…"},{speaker:"Faithful",text:"If ever you find the way out of here, don't forget the rest of us. Some of us might just follow."}]},{id:"evangelist",name:"Evangelist",species:"bear",fur:11049612,scale:1.15,outfit:"robe",outfitColor:M.robeWhite,x:42,z:0,facing:-Math.PI/2,getLines:n=>n.talkedToEvangelist?[{speaker:"Evangelist",text:"Do you see the shining light, Christian? Keep it ever before your eyes."},{speaker:"Evangelist",text:"Walk straight toward it, and you shall find the Wicket Gate. Knock, and it will be opened."}]:[{speaker:"Evangelist",text:"Peace to you, burdened friend. I am called Evangelist. Why do you sigh so?"},{speaker:"Christian",text:"This burden on my back grows heavier each day… and I fear our city will not stand. But I do not know where to go!"},{speaker:"Evangelist",text:"Then hear me. Beyond the fields lies a Wicket Gate, the beginning of the true way."},{speaker:"Christian",text:"A gate? I look and look, but I cannot see any gate…"},{speaker:"Evangelist",text:"Do you see, far off, yonder shining light?"},{speaker:"Christian",text:"…I… yes! I think I see it!"},{speaker:"Evangelist",text:"Keep that light in your eye and go straight toward it. There you will find the Gate. Now run, Christian — run and do not look back!"}],onFinish:n=>{n.talkedToEvangelist=!0}}];function qg(n){return Yg.map(t=>{const e=Ft({species:t.species,fur:t.fur,scale:t.scale,outfit:t.outfit,outfitColor:t.outfitColor});return e.root.position.set(t.x,0,t.z),e.root.rotation.y=t.facing,n.add(e.root),{id:t.id,name:t.name,parts:e,position:new C(t.x,0,t.z),facing:t.facing,getLines:t.getLines,onFinish:t.onFinish,wanderRadius:t.wanderRadius}})}const Kh={village:{bpm:76,chords:[[130.81,164.81,196,246.94],[110,130.81,164.81,196],[87.31,130.81,174.61,220],[98,146.83,196,220]],scale:[523.25,587.33,659.25,783.99,880,1046.5]},map:{bpm:92,chords:[[130.81,164.81,196,261.63],[98,123.47,146.83,196],[110,130.81,164.81,220],[87.31,110,174.61,220]],scale:[392,440,523.25,587.33,659.25,783.99]},slough:{bpm:58,chords:[[110,123.47,164.81,220],[87.31,130.81,174.61,220],[110,130.81,164.81,220],[82.41,123.47,164.81,207.65]],scale:[220,246.94,261.63,329.63,392,440]},sinai:{bpm:66,chords:[[110,164.81,220,261.63],[82.41,123.47,164.81,196],[87.31,130.81,174.61,220],[82.41,123.47,164.81,207.65]],scale:[329.63,349.23,392,440,493.88,523.25]},gate:{bpm:62,chords:[[130.81,196,261.63,329.63],[87.31,174.61,220,261.63],[110,164.81,220,261.63],[98,146.83,246.94,293.66]],scale:[392,440,523.25,587.33,659.25,783.99]},cross:{bpm:88,chords:[[130.81,196,261.63,329.63],[87.31,174.61,220,261.63],[98,146.83,246.94,293.66],[130.81,196,261.63,392]],scale:[523.25,587.33,659.25,783.99,880,1046.5]},interpreter:{bpm:68,chords:[[87.31,130.81,164.81,246.94],[73.42,110,146.83,220],[98,146.83,174.61,233.08],[130.81,164.81,196,261.63]],scale:[349.23,392,440,493.88,523.25,587.33]}};class Kg{constructor(){T(this,"ctx",null);T(this,"master",null);T(this,"timer",null);T(this,"nextBarTime",0);T(this,"bar",0);T(this,"style","village");T(this,"noiseBuf",null);T(this,"volume",.5);T(this,"enabled",!0)}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?this.volume:0,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*.25;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let i=0;i<t;i++)e[i]=Math.random()*2-1;this.nextBarTime=this.ctx.currentTime+.1,this.timer=window.setInterval(()=>this.schedule(),200)}toggle(){return this.enabled=!this.enabled,this.ctx&&this.master&&this.master.gain.linearRampToValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime+.2),this.enabled}setStyle(t){if(t===this.style)return;if(!this.ctx||!this.master){this.style=t;return}const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(1e-4,e+1.4),window.setTimeout(()=>{if(this.style=t,this.bar=0,this.ctx&&this.master){this.nextBarTime=this.ctx.currentTime+.15;const i=this.ctx.currentTime;this.master.gain.cancelScheduledValues(i),this.master.gain.setValueAtTime(1e-4,i),this.master.gain.linearRampToValueAtTime(this.enabled?this.volume:0,i+2)}},1500)}blip(){if(!this.ctx||!this.master||!this.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(660,t),e.frequency.exponentialRampToValueAtTime(880,t+.07),i.gain.setValueAtTime(.12,t),i.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(i).connect(this.master),e.start(t),e.stop(t+.15)}splash(){if(!this.ctx||!this.master||!this.enabled||!this.noiseBuf)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(700,t),i.frequency.exponentialRampToValueAtTime(150,t+.25);const s=this.ctx.createGain();s.gain.setValueAtTime(.25,t),s.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(i).connect(s).connect(this.master),e.start(t)}rumble(){if(!this.ctx||!this.master||!this.enabled||!this.noiseBuf)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(60,t+.8);const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.4,t+.08),s.gain.exponentialRampToValueAtTime(.001,t+1),e.connect(i).connect(s).connect(this.master),e.start(t);const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(55,t),o.frequency.exponentialRampToValueAtTime(38,t+.9),a.gain.setValueAtTime(.12,t),a.gain.exponentialRampToValueAtTime(.001,t+1),o.connect(a).connect(this.master),o.start(t),o.stop(t+1.1)}barLen(){return 60/Kh[this.style].bpm*4}schedule(){if(this.ctx)for(;this.nextBarTime<this.ctx.currentTime+this.barLen()*1.2;)this.scheduleBar(this.nextBarTime,this.bar),this.nextBarTime+=this.barLen(),this.bar++}pluck(t,e,i,s=.9){const o=this.ctx,a=o.createOscillator(),r=o.createGain();a.type="sine",a.frequency.value=e,r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(.001,t+s),a.connect(r).connect(this.master),a.start(t),a.stop(t+s+.1);const l=o.createOscillator(),h=o.createGain();l.type="sine",l.frequency.value=e*2,h.gain.setValueAtTime(i*.22,t),h.gain.exponentialRampToValueAtTime(.001,t+s*.55),l.connect(h).connect(this.master),l.start(t),l.stop(t+s)}pad(t,e,i,s,o="triangle"){const a=this.ctx;for(const r of e){const l=a.createOscillator(),h=a.createGain();l.type=o,l.frequency.value=r,l.detune.value=(Math.random()-.5)*6,h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(s,t+i*.3),h.gain.linearRampToValueAtTime(1e-4,t+i*1.05),l.connect(h).connect(this.master),l.start(t),l.stop(t+i*1.1)}}bass(t,e,i=.11,s=.5){const o=this.ctx,a=o.createOscillator(),r=o.createGain();a.type="sine",a.frequency.value=e,r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(.001,t+s),a.connect(r).connect(this.master),a.start(t),a.stop(t+s+.05)}shaker(t,e){if(!this.noiseBuf)return;const i=this.ctx,s=i.createBufferSource();s.buffer=this.noiseBuf;const o=i.createBiquadFilter();o.type="highpass",o.frequency.value=5e3;const a=i.createGain();a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.08),s.connect(o).connect(a).connect(this.master),s.start(t),s.stop(t+.1)}scheduleBar(t,e){const i=Kh[this.style],s=i.chords[e%i.chords.length],o=this.barLen(),a=o/8;if(this.style==="village"){this.pad(t,s,o,.045);for(let r=0;r<8;r++)r!==0&&Math.random()>.45||this.pluck(t+r*a,i.scale[Math.floor(Math.random()*i.scale.length)],.09);this.bass(t,s[0]/2),this.bass(t+o/2,s[0]/2)}else if(this.style==="map"){this.pad(t,s,o,.035);const r=[0,1,2,3,2,3,1,2];for(let l=0;l<8;l++){if(l===5&&e%2===0)continue;const h=s[r[l]]*2;this.pluck(t+l*a,h,.075,.5)}e%2===1&&this.pluck(t+a*6,i.scale[e/2%i.scale.length|0]*2,.05,.8);for(const l of[1,3,5,7])this.shaker(t+l*a,.02);this.bass(t,s[0]/2,.12,.4),this.bass(t+o*.5,s[1]/2,.09,.4),this.bass(t+o*.75,s[0]/2,.07,.3)}else if(this.style==="slough"){this.pad(t,s,o,.05,"sine");for(let r=0;r<8;r++)Math.random()>.22||this.pluck(t+r*a,i.scale[Math.floor(Math.random()*i.scale.length)],.06,1.4);if(this.bass(t,s[0]/2,.12,.9),Math.random()<.5){const r=this.ctx,l=t+Math.random()*o,h=r.createOscillator(),c=r.createGain();h.type="sine",h.frequency.setValueAtTime(900+Math.random()*300,l),h.frequency.exponentialRampToValueAtTime(240,l+.18),c.gain.setValueAtTime(.05,l),c.gain.exponentialRampToValueAtTime(.001,l+.22),h.connect(c).connect(this.master),h.start(l),h.stop(l+.25)}}else{this.pad(t,s,o,.05,"sine");for(let r=0;r<8;r++)r%2!==0||Math.random()>.6||this.pluck(t+r*a,i.scale[Math.floor(Math.random()*i.scale.length)],.07,1.1);this.bass(t,s[0]/2,.1,.7)}}}const Gn=new C(-14.5,0,0),Vn=new C(-3.5,0,0),uo=new C(3.5,0,0),Wn=new C(11,0,7),Ki=new C(17.5,0,-1),ji=new C(25.5,0,2.5),fn=new C(33.5,0,-1),pn=new C(41.5,0,1.5),mn=new C(49.5,0,-1),gn=new C(57.5,0,1.5),yn=new C(65.5,0,-.5),jg=[{c:Gn,r:4.2},{c:Vn,r:4.2},{c:uo,r:1.9},{c:Wn,r:4.2},{c:Ki,r:4},{c:ji,r:4},{c:fn,r:4},{c:pn,r:4},{c:mn,r:4},{c:gn,r:4},{c:yn,r:4}];class $g{constructor(t){T(this,"scene",new Ei);T(this,"camera");T(this,"progress",.02);T(this,"branchP",0);T(this,"road","main");T(this,"sloughDone",!1);T(this,"moralityDone",!1);T(this,"wicketDone",!1);T(this,"crossDone",!1);T(this,"highwayDone",!1);T(this,"hillDone",!1);T(this,"palaceDone",!1);T(this,"valleyDone",!1);T(this,"shadowDone",!1);T(this,"justDiverted",!1);T(this,"cityT",.02);T(this,"sloughT",.35);T(this,"forkT",.6);T(this,"beyondT",.72);T(this,"crossT",.78);T(this,"highwayT",.83);T(this,"hillT",.88);T(this,"palaceT",.92);T(this,"valleyT",.96);T(this,"shadowT",.99);T(this,"mainCurve");T(this,"branchCurve");T(this,"branchSpeed",1);T(this,"christian");T(this,"followers",[]);T(this,"clouds",[]);T(this,"islands",[]);T(this,"sparkles",[]);T(this,"mist",[]);T(this,"sinaiGlow",null);T(this,"sunHalos",[]);T(this,"crossGlow",null);T(this,"birds",[]);T(this,"birdTimer",4);T(this,"christianHasBurden",!0);T(this,"moving",!1);T(this,"facing",1);T(this,"built",!1);T(this,"camPan",0);this.camera=new ti(45,t,.1,200),this.resize(t),this.mainCurve=new Bh([new C(Gn.x+2,.62,.7),new C(-10,.62,-1.2),new C(-6.5,.62,1),new C(Vn.x,.62,0),new C(0,.62,-1),new C(uo.x,.62,0),new C(7,.62,-2.6),new C(11,.62,-4.2),new C(14.5,.62,-3.2),new C(Ki.x-1.5,.62,-1.3),new C(20.5,.62,.4),new C(23,.62,1.6),new C(ji.x-1,.62,ji.z-.3),new C(28.6,.62,1.6),new C(31,.62,.1),new C(fn.x-.6,.62,fn.z),new C(36.8,.62,0),new C(pn.x-.8,.62,pn.z-.2),new C(45.4,.62,.4),new C(mn.x-.6,.62,mn.z),new C(53.4,.62,.2),new C(gn.x-.6,.62,gn.z-.2),new C(61.4,.62,.6),new C(yn.x-.6,.62,yn.z)]),this.cityT=this.tForPoint(Gn),this.sloughT=this.tForPoint(Vn),this.forkT=this.tForPoint(uo),this.beyondT=this.tForPoint(Ki),this.crossT=this.tForPoint(ji),this.highwayT=this.tForPoint(fn),this.hillT=this.tForPoint(pn),this.palaceT=this.tForPoint(mn),this.valleyT=this.tForPoint(gn),this.shadowT=this.tForPoint(yn);const e=this.mainCurve.getPointAt(this.forkT);this.branchCurve=new Bh([e.clone(),new C(5.8,.62,3),new C(8,.62,5),new C(Wn.x-2,.62,Wn.z-.6)]),this.branchSpeed=this.mainCurve.getLength()/Math.max(this.branchCurve.getLength(),1),this.christian=this.makeMapChristian()}makeMapChristian(){return this.christianHasBurden=!this.crossDone,Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:this.crossDone?M.robeWhite:9418968,sling:!0,burden:!this.crossDone,scale:.5})}tForPoint(t){let e=0,i=1/0;for(let s=0;s<=300;s++){const o=s/300,a=this.mainCurve.getPointAt(o),r=Math.hypot(a.x-t.x,a.z-t.z);r<i&&(i=r,e=o)}return e}label(t,e,i,s,o="#5b4a3f"){const a=document.createElement("canvas");a.width=512,a.height=128;const r=a.getContext("2d");r.font='bold 52px "Trebuchet MS", sans-serif',r.textAlign="center",r.textBaseline="middle";const l=r.measureText(t).width+70;r.fillStyle="rgba(255, 248, 239, 0.92)",r.strokeStyle="rgba(244, 184, 196, 1)",r.lineWidth=8,r.beginPath(),r.roundRect((512-l)/2,18,l,92,46),r.fill(),r.stroke(),r.fillStyle=o,r.fillText(t,256,66);const h=new Sg(a),c=new bg(new Oc({map:h,transparent:!0}));c.scale.set(6.4,1.6,1),c.position.set(e,s,i),this.scene.add(c)}island(t,e,i,s){const o=new at,a=14,r=(h,c,u,d)=>{const m=new Q(new De(h,h,c,a),ue(u));m.position.y=d,m.castShadow=!0,m.receiveShadow=!0,o.add(m)};r(i+.3,.5,s,.3),r(i,.9,14206106,-.25),r(Math.max(i-.8,.8),1,12162938,-1.1),r(Math.max(i-1.7,.6),1,10846815,-2),r(Math.max(i-2.6,.4),.8,9662799,-2.8);const l=Math.max(5,Math.round(i*1.6));for(let h=0;h<l;h++){const c=h/l*Math.PI*2+.4;o.add(p(.45,.3,.45,M.grassDark,Math.cos(c)*(i+.2),.14,Math.sin(c)*(i+.2)))}return o.position.set(t,0,e),this.scene.add(o),this.islands.push(o),o}miniTree(t,e,i=!1){const s=new at;return s.add(p(.16,.5,.16,M.trunk,0,.25,0)),s.add(p(.6,.45,.6,i?M.leafPink:M.leaf,0,.7,0)),s.add(p(.35,.3,.35,i?M.leafPink:M.leaf,0,1,0)),s.position.set(t,.55,e),s}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(13888767),t.fog=new hi(13888767,36,100),t.add(new Ai(15923711,13493490,1.3));const e=new Ni(M.sun,1.7);e.position.set(-8,14,10),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=18,e.shadow.camera.bottom=-18,t.add(e);const i=new Q(new We(1.15,24,18),new Mt({color:16769357}));i.position.set(14,11,-14),t.add(i);for(const[j,it]of[[1.55,.4],[2.1,.18]]){const ct=new Q(new We(j,24,18),new Mt({color:16774072,transparent:!0,opacity:it,depthWrite:!1}));ct.position.copy(i.position),t.add(ct),this.sunHalos.push(ct)}const s=new Q(new _t(240,1,160),ue(M.water));s.position.y=-1.6,s.receiveShadow=!0,t.add(s);for(let j=0;j<40;j++){const it=new Q(new _t(.5+Math.random()*.9,.06,.16),new Mt({color:15004668,transparent:!0,opacity:.8}));it.position.set((Math.random()-.5)*60,-1.02,(Math.random()-.5)*34),it.castShadow=!1,t.add(it),this.sparkles.push(it)}const o=this.island(Gn.x,Gn.z,4.6,M.grass),a=new at,r=(j,it,ct)=>{a.add(p(.85,.65,.75,M.wallCream,j,.9,it)),a.add(p(1,.35,.9,ct,j,1.4,it)),a.add(p(.18,.5,.06,M.woodDark,j,.8,it+.4))};r(-1,-.5,M.roofPink),r(.25,-1.15,M.roofMint),r(.65,.45,M.roofLilac),r(-.45,.95,M.roofPeach);const l=[[-2,0,.28,3.7],[2,-1.1,.28,1.6],[2,1.1,.28,1.6],[0,-1.9,4.2,.28],[0,1.9,4.2,.28]];for(const[j,it,ct,kt]of l)a.add(p(ct,.6,kt,16249834,j,.85,it)),a.add(p(ct+.08,.12,kt+.08,14670024,j,1.16,it));a.position.set(-.9,0,-.3),o.add(a),o.add(this.miniTree(-3,2.1,!0)),o.add(this.miniTree(3,-2.2)),o.add(this.miniTree(2.6,2.3,!0));for(let j=0;j<8;j++){const it=Math.random()*Math.PI*2,ct=1.5+Math.random()*2.4,kt=p(.14,.14,.14,[M.flowerYellow,M.flowerPink,M.flowerBlue][j%3],Math.cos(it)*ct,.62,Math.sin(it)*ct);kt.castShadow=!1,o.add(kt)}this.label("City of Destruction",Gn.x,Gn.z,4.4);const h=this.island(Vn.x,Vn.z,4.4,10405775),c=new at;c.add(p(4,.18,3,9073493,0,.62,0)),c.add(p(3,.2,2.1,7297602,0,.68,.1)),c.add(p(.55,.14,.55,9073493,-1.8,.66,1.3)),c.add(p(.45,.12,.45,7297602,2,.66,-1.2)),c.add(p(.16,.16,.16,10982002,.4,.84,.3)),c.add(p(.12,.12,.12,10982002,-.6,.82,-.4));for(const[j,it]of[[-2.1,-1],[1.8,1.2],[2.3,.2],[-1.5,1.5],[.2,-1.5]])c.add(p(.1,.85,.1,8101983,j,1,it)),c.add(p(.16,.28,.16,13215845,j,1.48,it));c.position.set(.2,0,.1),h.add(c);const u=new at;u.add(p(.18,1,.18,10129286,0,.5,0)),u.add(p(.7,.14,.14,10129286,.2,.95,0)),u.add(p(.14,.5,.14,10129286,.55,1.2,0)),u.position.set(-2.9,.55,-2),h.add(u),this.label("Slough of Despond",Vn.x,Vn.z,4.4);const d=this.island(uo.x,uo.z,1.9,M.grass),m=new at;m.add(p(.14,1.7,.14,M.woodDark,0,.85,0));const y=p(1.2,.32,.1,M.wood,.5,1.45,0);m.add(y);const x=p(.1,.32,1.2,M.wood,0,1.05,.5);m.add(x),m.position.set(-.3,.55,-.5),d.add(m),d.add(this.miniTree(.9,.8,!0));const g=this.island(Wn.x,Wn.z,4.4,11458976),f=(j,it,ct)=>{g.add(p(.9,.7,.8,16447212,j,.95,it)),g.add(p(1.05,.35,.95,ct,j,1.5,it)),g.add(p(.16,.45,.06,M.woodDark,j,.82,it+.42))};f(-1.6,1.2,10336472),f(-.2,1.5,1211e4),f(1.2,1.2,10336472);for(const[j,it]of[[-2.4,.2],[-.9,.35],[.6,.35],[2,.2]])g.add(p(.9,.3,.3,8826237,j,.72,it));const E=new at;E.add(p(2.6,1.4,1.8,9276822,0,.7,0)),E.add(p(1.9,1.2,1.4,8224136,.1,1.7,-.1)),E.add(p(1.2,1,1,9276822,-.1,2.6,0)),E.add(p(.7,.7,.7,7303034,.05,3.3,0));const w=new Q(new _t(.5,.9,.12),new Mt({color:16751181,transparent:!0,opacity:.9}));w.position.set(.2,1.6,.66),E.add(w),this.sinaiGlow=w,E.position.set(.3,.55,-1.8),g.add(E),this.label("Morality",Wn.x,Wn.z,4.6);const v=this.island(Ki.x,Ki.z,4.2,10405800);v.add(this.miniTree(-2.4,1.6)),v.add(this.miniTree(2.5,-1.4,!0)),v.add(p(.2,1.3,.2,M.woodDark,1,1.2,.2)),v.add(p(.2,1.3,.2,M.woodDark,2,1.2,.2)),v.add(p(1.3,.2,.2,M.woodDark,1.5,1.9,.2));const L=new Q(new _t(.9,1.1,.1),new Mt({color:16774072,transparent:!0,opacity:.7}));L.position.set(1.5,1.15,.15),v.add(L);for(let j=0;j<7;j++){const it=new Q(new _t(2.2+Math.random()*1.6,1+Math.random()*.8,1.6),new Ui({color:15922936,transparent:!0,opacity:.55}));it.position.set(Ki.x-3+Math.random()*6,1+Math.random()*1.4,Ki.z-2+Math.random()*4),it.castShadow=!1,t.add(it),this.mist.push(it)}this.label("Wicket Gate",Ki.x,Ki.z,4.4);const R=this.island(ji.x,ji.z,4.2,M.grassLight);R.add(p(4.6,.7,4,M.grass,0,.85,-.4)),R.add(p(3.2,.7,2.8,10411671,0,1.5,-.4)),R.add(p(2,.6,1.8,M.grassLight,0,2.1,-.4)),R.add(p(.22,1.5,.22,M.woodDark,0,3.1,-.4)),R.add(p(.95,.22,.22,M.woodDark,0,3.45,-.4));const I=new Q(new We(1,18,14),new Mt({color:16774072,transparent:!0,opacity:.35,depthWrite:!1}));I.position.set(0,3.3,-.4),R.add(I),this.crossGlow=I,R.add(p(1.1,.8,.9,12170412,1.9,.9,.9)),R.add(p(.5,.5,.1,4867136,1.9,.85,1.36));const z=new Q(new De(.34,.34,.16,12),ue(11051674));z.rotation.x=Math.PI/2,z.rotation.z=Math.PI/2,z.position.set(2.7,.9,1.3),R.add(z),R.add(this.miniTree(-2.6,1.8,!0)),this.label("The Cross",ji.x,ji.z,5.4);const A=this.island(fn.x,fn.z,4,9418115);for(let j=0;j<4;j++)A.add(p(.9,.4,.25,12169378,-1.6+j*1.1,.78,-1.3));for(const[j,it,ct]of[[-.8,1.2,14660974],[.2,1.5,10129274],[1.2,1.2,15126464]])A.add(p(.55,.28,.32,ct,j,.72,it));A.add(p(.12,1.5,.12,6183509,2.4,1.3,-.4));const b=new Q(new We(.22,12,10),new Mt({color:16771488}));b.position.set(2.4,2.1,-.4),A.add(b),A.add(this.miniTree(-2.6,-1.6)),this.label("King's Highway",fn.x,fn.z,4.4);const k=this.island(pn.x,pn.z,4,M.grass);k.add(p(4.4,1.2,3.6,10411671,0,1.1,-.5)),k.add(p(3,1.2,2.6,M.grass,0,2.2,-.5)),k.add(p(1.8,1.1,1.6,10411671,0,3.3,-.5));for(let j=0;j<4;j++)k.add(p(.4,.08,.5,M.path,-.6+j%2*1.2,.6+j*.9,1.35-j*.55));k.add(p(.7,.3,.5,8101983,1,2.1,.4)),k.add(p(.08,.5,.08,M.woodDark,.8,1.75,.5)),k.add(p(.08,.5,.08,M.woodDark,1.25,1.75,.5)),k.add(p(.5,.08,1.6,14272936,-2.4,.62,.8)),k.add(p(.5,.08,1.6,14272936,2.4,.62,.8)),k.add(this.miniTree(-2.8,-1.8,!0)),this.label("Hill Difficulty",pn.x,pn.z,5.4);const G=this.island(mn.x,mn.z,4,M.grass);G.add(p(2.6,1.4,1.8,16447730,0,1.25,-.6)),G.add(p(2.9,.3,2,15262418,0,2.1,-.6));for(const j of[-1.5,1.5])G.add(p(.7,2,.7,16447730,j,1.55,-.6)),G.add(p(.6,.5,.6,M.roofPink,j,2.8,-.6));const W=new Q(new _t(.4,.5,.08),new Mt({color:16771488}));W.position.set(0,1.4,.35),G.add(W),G.add(p(.5,.35,.3,14264416,-.6,.72,1.4)),G.add(p(.5,.35,.3,14264416,.6,.72,1.4)),this.label("Palace Beautiful",mn.x,mn.z,4.6);const $=this.island(gn.x,gn.z,4,9087098);$.add(p(1.6,1.6,2.4,7636319,-1.9,1.1,-.4)),$.add(p(1.6,1.6,2.4,7636319,1.9,1.1,-.4)),$.add(p(2.2,.1,1.4,12101768,0,.62,0)),$.add(p(1,.06,1,4867136,.3,.6,.9));const J=new Q(new _t(.18,.18,.1),new Mt({color:16730685}));J.position.set(-1.9,2.1,.85),$.add(J),this.label("Valley of Humiliation",gn.x,gn.z,4.4);const q=this.island(yn.x,yn.z,4,3818072);q.add(p(2,1.2,1.6,2304056,-1.6,1.15,-.8)),q.add(p(2,1.2,1.6,2304056,1.6,1.15,-.8));const nt=new Q(new _t(3.4,.08,.5),new Mt({color:16772804}));nt.position.set(0,.62,.4),q.add(nt),this.label("Shadow of Death",yn.x,yn.z,4.4),this.buildRoad(this.mainCurve,72),this.buildRoad(this.branchCurve,26);const K=new Ui({color:16777215,emissive:7829367});for(let j=0;j<6;j++){const it=new at,ct=(kt,Qt,Z,lt)=>{const gt=new Q(new We(kt,14,10),K);gt.position.set(Qt,Z,lt),gt.castShadow=!1,it.add(gt)};ct(.85,0,0,0),ct(.65,.95,.12,.1),ct(.6,-.9,.08,-.1),ct(.5,.35,.45,.12),ct(.45,-.4,.4,-.05),it.position.set((Math.random()-.5)*42,5.5+Math.random()*3,-6-Math.random()*5),this.clouds.push(it),t.add(it)}for(let j=0;j<3;j++){const it=new at,ct=p(.22,.12,.3,4867136,0,0,0);ct.castShadow=!1,it.add(ct);const kt=lt=>{const gt=new Q(new _t(.6,.05,.22),ue(5985358));return gt.geometry.translate(.3,0,0),gt.position.set(.08*lt,.04,0),gt.scale.x=lt,gt.castShadow=!1,it.add(gt),gt},Qt=kt(-1),Z=kt(1);it.visible=!1,t.add(it),this.birds.push({g:it,wingL:Qt,wingR:Z,speed:0,active:!1})}this.scene.add(this.christian.root),this.placeOn(this.mainCurve,this.christian.root,this.progress)}nearLand(t,e){for(const i of jg)if(Math.hypot(t-i.c.x,e-i.c.z)<i.r)return!0;return!1}buildRoad(t,e){for(let i=0;i<=e;i++){const s=i/e,o=t.getPointAt(s),a=t.getTangentAt(s);if(this.nearLand(o.x,o.z)){const r=p(.5,.1,.6,M.path,o.x,o.y-.02,o.z);r.rotation.y=Math.atan2(a.x,a.z)+Math.PI/2,r.castShadow=!1,this.scene.add(r)}else{const r=p(.5,.14,1.1,M.wood,o.x,.5,o.z);if(r.rotation.y=Math.atan2(a.x,a.z)+Math.PI/2,r.castShadow=!1,this.scene.add(r),i%4===0){const l=-a.z,h=a.x;for(const c of[-1,1])this.scene.add(p(.14,2,.14,M.woodDark,o.x+l*.62*c,-.4,o.z+h*.62*c)),this.scene.add(p(.1,.5,.1,M.woodDark,o.x+l*.58*c,.85,o.z+h*.58*c))}}}}start(t){this.build(),this.christianHasBurden!==!this.crossDone&&(this.scene.remove(this.christian.root),this.christian=this.makeMapChristian(),this.scene.add(this.christian.root),this.placeOn(this.mainCurve,this.christian.root,this.progress));for(const e of this.followers)this.scene.remove(e.root);this.followers=t.map(e=>{const i=Ft(e==="pliable"?{species:"rabbit",outfit:"shirt",outfitColor:16766629,scale:.44}:{scale:.44});return this.scene.add(i.root),i})}resize(t){this.camera.aspect=t;const e=Pt.clamp(48/t-1,24,58);this.camera.position.set(5+this.camPan,e*.78,e+2.2),this.camera.lookAt(5+this.camPan,.4,1.4),this.camera.updateProjectionMatrix()}spot(){return this.road==="branch"?this.branchP>.86?"morality":"road":this.progress<this.cityT+.03?"city":Math.abs(this.progress-this.sloughT)<.03?"slough":Math.abs(this.progress-this.forkT)<.025?"fork":this.progress>this.shadowT-.015?"shadow":Math.abs(this.progress-this.valleyT)<.015?"valley":Math.abs(this.progress-this.palaceT)<.015?"palace":Math.abs(this.progress-this.hillT)<.015?"hill":Math.abs(this.progress-this.highwayT)<.02?"highway":Math.abs(this.progress-this.crossT)<.02?"cross":Math.abs(this.progress-this.beyondT)<.02?"beyond":"road"}placeOn(t,e,i){const s=t.getPointAt(Pt.clamp(i,0,1));e.position.set(s.x,this.nearLand(s.x,s.z)?s.y:.57,s.z)}update(t,e,i,s){if(!this.built)return;const o=t*.075;if(this.moving=!1,this.road==="main"){if(Math.abs(i)>.15){this.moving=!0;const c=this.valleyDone?this.shadowT+.01:this.palaceDone?this.valleyT+.01:this.hillDone?this.palaceT+.01:this.highwayDone?this.hillT+.01:this.crossDone?this.highwayT+.01:this.wicketDone?this.crossT+.02:this.moralityDone?this.beyondT+.02:this.sloughDone?this.forkT:this.sloughT+.05;this.progress=Pt.clamp(this.progress+i*o,.02,c),this.facing=i>0?1:-1,!this.moralityDone&&this.sloughDone&&i>0&&this.progress>=this.forkT-1e-5&&(this.road="branch",this.branchP=0,this.justDiverted=!0)}this.moralityDone&&s>.35&&Math.abs(this.progress-this.forkT)<.05&&(this.road="branch",this.branchP=.02,this.moving=!0,this.facing=1)}else Math.abs(i)>.15&&(this.moving=!0,this.branchP=Pt.clamp(this.branchP+i*o*this.branchSpeed,0,.96),this.facing=i>0?1:-1,this.branchP<=0&&i<0&&(this.road="main",this.progress=this.forkT));const a=this.road==="main"?this.mainCurve:this.branchCurve,r=this.road==="main"?this.progress:this.branchP;this.placeOn(a,this.christian.root,r);const l=Math.max(0,this.christian.root.position.x-ji.x);this.camPan+=(l-this.camPan)*Math.min(t*3,1),this.camera.position.x=5+this.camPan,this.camera.lookAt(5+this.camPan,.4,1.4);const h=a.getTangentAt(Pt.clamp(r,0,1));this.christian.root.rotation.y=Math.atan2(h.x*this.facing,h.z*this.facing),Ct(this.christian,e,this.moving),this.followers.forEach((c,u)=>{const d=r-.045*(u+1)*this.facing;this.placeOn(a,c.root,d);const m=a.getTangentAt(Pt.clamp(d,0,1));c.root.rotation.y=Math.atan2(m.x*this.facing,m.z*this.facing),Ct(c,e+.4*(u+1),this.moving)});for(let c=0;c<this.clouds.length;c++){const u=this.clouds[c];u.position.x+=t*(.2+c*.06),u.position.x>30&&(u.position.x=-30)}if(this.birdTimer-=t,this.birdTimer<=0){this.birdTimer=6+Math.random()*8;const c=this.birds.find(u=>!u.active);c&&(c.active=!0,c.speed=2.6+Math.random()*1.8,c.g.position.set(-30,6.5+Math.random()*3.5,-9+Math.random()*9),c.g.rotation.y=Math.PI/2,c.g.visible=!0)}for(const c of this.birds){if(!c.active)continue;c.g.position.x+=c.speed*t,c.g.position.y+=Math.sin(e*2+c.g.position.x)*t*.3;const u=Math.sin(e*13+c.g.position.z)*.65;c.wingL.rotation.z=-u,c.wingR.rotation.z=u,c.g.position.x>30&&(c.active=!1,c.g.visible=!1)}for(let c=0;c<this.sunHalos.length;c++){const u=1+Math.sin(e*1.4+c)*.06;this.sunHalos[c].scale.setScalar(u)}this.crossGlow&&(this.crossGlow.material.opacity=.22+.18*Math.abs(Math.sin(e*1.1)));for(let c=0;c<this.islands.length;c++)this.islands[c].position.y=Math.sin(e*.6+c*2.1)*.04;for(let c=0;c<this.sparkles.length;c++){const u=this.sparkles[c];u.material.opacity=.35+.45*Math.abs(Math.sin(e*1.3+c*1.7))}for(let c=0;c<this.mist.length;c++){const u=this.mist[c];u.position.x+=Math.sin(e*.4+c)*t*.15,u.material.opacity=.45+.15*Math.sin(e*.5+c*1.3)}this.sinaiGlow&&(this.sinaiGlow.material.opacity=.5+.45*Math.abs(Math.sin(e*2.2)))}}const Qo=40,no=3.5,ta=12.5,ea=10;class Zg{constructor(t){T(this,"scene",new Ei);T(this,"phase","walk");T(this,"cb");T(this,"christian");T(this,"pliable",null);T(this,"pliableStage","follow");T(this,"revisit",!1);T(this,"help");T(this,"steps",[[-6.5,1],[-3.4,-.8],[-.2,1.1],[3,-.9],[6.2,.9],[9.4,-1],[12.6,.6]]);T(this,"sink",0);T(this,"stuckT",0);T(this,"struggle",0);T(this,"wisps",[]);T(this,"bubbles",[]);T(this,"splashes",[]);T(this,"splashTimer",0);T(this,"rescueT",0);T(this,"helpTalkCount",0);T(this,"built",!1);T(this,"lightBeam",null);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.help=Ft({species:"bear",fur:9411210,outfit:"robe",outfitColor:13102274,scale:1.2})}inBog(t,e){const i=(t-no)/ta,s=e/ea;return i*i+s*s<1}nearStep(t,e){for(const[i,s]of this.steps)if(Math.hypot(t-i,e-s)<1.35)return!0;return!1}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(12175828),t.fog=new hi(12175828,30,80),t.add(new Ai(14148844,11057312,.85));const e=new Ni(15919826,1.1);e.position.set(-25,40,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-45,e.shadow.camera.right=45,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,t.add(e);const i=new Q(new _t(140,1,90),ue(9681290));i.position.y=-.5,i.receiveShadow=!0,t.add(i);for(let y=0;y<70;y++){const x=-45+Math.random()*90,g=-35+Math.random()*70;if(this.inBog(x,g))continue;const f=p(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?8826237:10798746,x,.04+Math.random()*.03,g);f.castShadow=!1,t.add(f)}for(const[y,x]of[[-22,16],[22,10]]){const g=p(x,.12,3.6,14272936,y,.06,0);g.castShadow=!1,t.add(g)}const s=[9073493,8152908,7297602];for(let y=0;y<3;y++){const x=ta-y*1.6,g=ea-y*1.3;for(let f=0;f<14;f++){const E=f/14*Math.PI*2,w=no+Math.cos(E)*x*(.55+.35*Math.random()),v=Math.sin(E)*g*(.55+.35*Math.random()),L=p(3+Math.random()*3,.1+y*.03,2.5+Math.random()*2.5,s[y],w,.1+y*.03+Math.random()*.02,v);L.castShadow=!1,t.add(L)}}const o=p(ta*1.85,.14,ea*1.7,8152908,no,.1,0);o.castShadow=!1,t.add(o);for(let y=0;y<10;y++){const x=p(.22,.22,.22,10982002,no-9+Math.random()*18,.28,-6+Math.random()*12);x.castShadow=!1,t.add(x),this.bubbles.push({mesh:x,phase:Math.random()*6.28})}for(const[y,x]of this.steps)t.add(p(1.5,.28,1.5,14209996,y,.16,x)),t.add(p(1.7,.1,1.7,12893877,y,.04,x));for(let y=0;y<26;y++){const x=y/26*Math.PI*2,g=no+Math.cos(x)*(ta+1.5+Math.random()*2),f=Math.sin(x)*(ea+1.2+Math.random()*2);t.add(p(.14,1.3+Math.random()*.7,.14,8101983,g,.8,f)),y%2===0&&t.add(p(.22,.45,.22,13215845,g,1.75,f))}for(const[y,x,g]of[[-12,-10,.4],[16,9,1.2],[-8,11,2.2],[20,-9,.9]]){const f=new at;f.add(p(.45,2.6,.45,10129286,0,1.3,0)),f.add(p(1.6,.3,.3,10129286,.5,2.3,0)),f.add(p(.3,1.1,.3,10129286,1.2,2.9,0)),f.add(p(1.1,.25,.25,9076598,-.6,1.7,.1)),f.position.set(y,0,x),f.rotation.y=g,t.add(f)}for(let y=0;y<9;y++){const x=new Q(new _t(4+Math.random()*4,.8,2.5+Math.random()*2),new Ui({color:15265520,transparent:!0,opacity:.35}));x.position.set(-20+Math.random()*45,.9+Math.random()*.8,-12+Math.random()*24),x.castShadow=!1,t.add(x),this.wisps.push(x)}for(let y=0;y<14;y++){const x=new Mt({color:9073493,transparent:!0,opacity:0}),g=new Q(new _t(.2,.2,.2),x);g.visible=!1,t.add(g),this.splashes.push({mesh:g,m:x,life:1,vx:0,vz:0})}const a=new at;a.add(p(.16,1.6,.16,M.woodDark,0,.8,0)),a.add(p(1.6,.8,.12,M.wood,0,1.5,0)),a.add(p(1.2,.1,.14,9072466,0,1.62,0)),a.add(p(1.2,.1,.14,9072466,0,1.38,0)),a.position.set(-11,0,4),a.rotation.y=-.5,t.add(a),this.help.root.position.set(24,0,0),this.help.root.visible=!1,this.help.armR.add(p(.14,2.2,.14,M.woodDark,.1,-.6,.2)),t.add(this.help.root);for(let y=0;y<8;y++){const x=21+y*2.6;t.add(p(2.1,.12,3,M.path,x,.13,Math.sin(y*.5)*.5))}for(const[y,x,g]of[[26,-5,!0],[30,5,!1],[34,-6,!1],[37,6,!0]]){const f=new at;f.add(p(.5,1.6,.5,M.trunk,0,.8,0)),f.add(p(1.9,1.3,1.9,g?M.leafPink:M.leaf,0,2.2,0)),f.add(p(1.2,.9,1.2,g?M.leafPink:M.leaf,0,3.1,0)),f.position.set(y,0,x),t.add(f)}const r=new at,l=new Mt({color:16767306,transparent:!0,opacity:.8,fog:!1}),h=new Q(new _t(2.6,40,2.6),l);h.position.y=20,r.add(h);const c=new Q(new _t(1.3,44,1.3),new Mt({color:16776160,transparent:!0,opacity:.95,fog:!1}));c.position.y=22,r.add(c);const u=new Mt({color:16771194,fog:!1}),d=new Q(new _t(3.4,3.4,3.4),u);d.position.y=42,d.rotation.set(Math.PI/4,0,Math.PI/4),r.add(d);const m=new Si(16771194,3.5,40);m.position.y=4,r.add(m),r.position.set(Qo,0,0),r.visible=!1,t.add(r),this.lightBeam=r}enter(t,e=!1){return this.build(),this.revisit=e,this.phase="walk",this.sink=0,this.struggle=0,this.pliable&&(this.scene.remove(this.pliable.root),this.pliable=null),this.pliableStage="follow",this.christian.root.position.set(-24,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),e?(this.help.root.visible=!0,this.help.root.position.set(18.4,0,2.2),this.help.root.rotation.y=-Math.PI/2,this.help.armR.rotation.x=0,this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("🌫 The old mire — cross east toward the light, or turn back west to the road"),{christian:this.christian,pliable:null}):(this.lightBeam&&(this.lightBeam.visible=!1),t&&(this.pliable=Ft({species:"rabbit",outfit:"shirt",outfitColor:16766629,scale:.95}),this.pliable.root.position.set(-26,0,-1.4),this.scene.add(this.pliable.root),this.cb.playScript([{speaker:"Pliable",text:"So tell me MORE about this Celestial City! Do the crowns come in rabbit sizes? Is there clover?"},{speaker:"Christian",text:"Ha! The book says there is no night there, and no tears… Careful, friend — the ground past those reeds looks soft."},{speaker:"Pliable",text:"Soft, schmoft! With GLORY ahead, who has time to look down? Hop hop — race you to the far side!"}])),this.cb.setObjective("🌫 Cross the marsh to the east"),{christian:this.christian,pliable:this.pliable})}spawnSplash(t,e){const i=this.splashes.find(s=>s.life>=1);i&&(i.life=0,i.vx=(Math.random()-.5)*1.2,i.vz=(Math.random()-.5)*1.2,i.mesh.position.set(t,.2,e),i.mesh.visible=!0)}nearHelp(){return!this.help.root.visible||!(this.revisit||this.phase==="freeroam"||this.phase==="done")?!1:this.christian.root.position.distanceTo(this.help.root.position)<3.2}talkToHelp(){if(!this.nearHelp())return;const t=this.christian.root.position,e=this.help.root.position;this.help.root.rotation.y=Math.atan2(t.x-e.x,t.z-e.z),this.christian.root.rotation.y=Math.atan2(e.x-t.x,e.z-t.z);const i=[[{speaker:"Christian",text:"Help — thank you again. I do not think I could ever have climbed out alone."},{speaker:"Help",text:"No pilgrim ever does, friend. That is rather the point of me."},{speaker:"Help",text:"Now go on toward the light — and if the road ever sinks beneath you again, remember: look for the Steps before you look for the bottom."}],[{speaker:"Christian",text:"Do you truly stay out here, by this dreadful bog, all year round?"},{speaker:"Help",text:"Someone must. Every day another traveller comes running from the City with fear at his heels, and fear never watches its feet."},{speaker:"Christian",text:"Then I am glad it is you who waits for them. Farewell, Help!"}]];this.cb.playScript(i[this.helpTalkCount%i.length]),this.helpTalkCount++}moveFactor(){const t=this.christian.root.position;return this.phase==="fallingIn"||this.phase==="struggling"||this.phase==="stuck"||this.phase==="rescue"||this.phase==="epilogue"?0:this.inBog(t.x,t.z)?this.nearStep(t.x,t.z)?.72:.34:1}afterMove(t){const e=this.christian.root.position,i=this.revisit||this.phase==="rescue"||this.phase==="epilogue"||this.phase==="freeroam"||this.phase==="done";if(e.x=Pt.clamp(e.x,-28,i?Qo+4:14.6),e.z=Pt.clamp(e.z,-16,16),this.revisit){(e.x>Qo-2||e.x<-27)&&this.cb.onExit(),t&&this.inBog(e.x,e.z)&&(this.splashTimer-=.016,this.splashTimer<=0&&(this.splashTimer=.18,this.spawnSplash(e.x,e.z)));return}if(this.phase==="freeroam"&&e.x>Qo-3&&(this.phase="done",this.cb.onComplete()),this.phase==="walk"&&this.inBog(e.x+1.2,e.z)){this.phase="fallingIn",this.cb.splashSound();for(let o=0;o<6;o++)this.spawnSplash(e.x+Math.random(),e.z+(Math.random()-.5));if(this.pliable){const o=this.pliable.root.position;o.y=-.35,this.pliable.root.rotation.y=Math.PI/2;for(let a=0;a<4;a++)this.spawnSplash(o.x+Math.random(),o.z+(Math.random()-.5))}const s=this.pliable?[{speaker:"Christian",text:"Wh—whoa! The ground — it is swallowing us! Hold fast, Pliable!"},{speaker:"Pliable",text:"GLUB—! Mud! In my EARS! In my WHISKERS! Christian, I am DISSOLVING!"},{speaker:"Pliable",text:"Is THIS the glorious happiness you spoke of?! Golden streets, you said! CROWNS, you said!"},{speaker:"Christian",text:"Courage, friend! If we press on together, the far bank cannot be—"},{speaker:"Pliable",text:"FORWARD?! Into MORE of it?! Not for every crown in every city! Out of my way!"}]:[{speaker:"Christian",text:"Wh—whoa! The ground… it is swallowing me! This must be the mire the villagers whispered of…"}];this.cb.playScript(s,()=>{this.pliable?(this.pliableStage="clamber",this.cb.setObjective("😨 Pliable flounders back toward the bank nearest home…")):(this.phase="crossing",this.cb.setObjective("🪨 Keep moving or the mire pulls you under — rest on the solid Steps!"))})}this.phase==="crossing"&&e.x>14.2&&(this.phase="struggling",this.stuckT=0,this.cb.splashSound(),this.cb.setObjective("😰 The bank is right there — but the mire holds him fast…")),t&&this.phase==="crossing"&&this.inBog(e.x,e.z)&&(this.splashTimer-=.016,this.splashTimer<=0&&(this.splashTimer=.18,this.spawnSplash(e.x,e.z)))}update(t,e,i){if(!this.built)return;const s=this.christian.root.position;let o=0;const a=this.inBog(s.x,s.z),r=this.nearStep(s.x,s.z);if(a&&this.phase!=="done"&&(o=r?.16:.5,this.phase==="stuck"&&(o=.62),this.phase==="struggling"&&(o=.62+Math.sin(e*5)*.08)),this.phase==="crossing"&&!this.revisit&&a&&!r?this.struggle=i?Math.max(0,this.struggle-t*.6):Math.min(.85,this.struggle+t*.32):this.struggle=Math.max(0,this.struggle-t*1.6),o+=this.struggle,(this.phase==="rescue"||this.phase==="epilogue")&&(o=this.rescueT>1?0:.62),this.sink+=(o-this.sink)*Math.min(t*3,1),this.christian.root.position.y=-this.sink,this.phase==="crossing"&&!this.revisit&&this.sink>1.05&&(this.struggle=0,this.sink=.2,this.christian.root.position.set(-8.5,0,Pt.clamp(s.z,-6,6)*.4),this.christian.root.rotation.y=Math.PI/2,this.cb.splashSound(),this.cb.playScript([{speaker:"Christian",text:"*GLUB—!* The mire closes over his ears. Sputtering mud, he claws his way back to the western bank."},{speaker:"Christian",text:"It pulls hardest when I stand still… Keep moving, and catch your breath on the solid Steps!"}])),Ct(this.christian,e,i&&this.phase!=="stuck"&&this.phase!=="rescue"&&this.phase!=="epilogue"),this.phase==="struggling"){this.stuckT+=t;const l=Math.min(1,this.stuckT/.5);this.christian.armL.rotation.x=Math.sin(e*11)*1.3*l,this.christian.armR.rotation.x=-Math.sin(e*11+1.4)*1.3*l,this.christian.root.rotation.z=Math.sin(e*7)*.1*l,this.christian.root.rotation.y=Math.PI/2+Math.sin(e*3.2)*.45*l,Math.random()<t*10&&this.spawnSplash(s.x+(Math.random()-.5)*1.2,s.z+(Math.random()-.5)*1.2),this.stuckT>3.2&&(this.phase="stuck",this.christian.root.rotation.z=0,this.christian.root.rotation.y=Math.PI/2,this.christian.armL.rotation.x=0,this.christian.armR.rotation.x=0,this.cb.playScript([{speaker:"Christian",text:"*pant* … The bank is right there — but I cannot climb it. This burden on my back drags me down and down…"},{speaker:"Christian",text:"Is this how the journey ends? Stuck in the mire, within sight of the way out…?"}],()=>{this.phase="rescue",this.rescueT=0,this.help.root.visible=!0,this.cb.setObjective("🤝 Someone is coming…")}))}if(this.pliable){const l=this.pliable.root.position;if(this.pliableStage==="clamber")l.x-=t*3,l.y=this.inBog(l.x,l.z)?-.42+Math.sin(e*11)*.06:0,this.pliable.root.rotation.y=-Math.PI/2,Ct(this.pliable,e*1.7,!0),this.inBog(l.x,l.z)&&Math.random()<t*7&&this.spawnSplash(l.x,l.z),l.x<-9.5&&(this.pliableStage="farewell",l.y=0,this.cb.playScript([{speaker:"Pliable",text:"*scrambles out, dripping* Blegh! Pfah! Mud in my ears, mud in my whiskers, mud in places a gentle-rabbit shan't MENTION!"},{speaker:"Pliable",text:"If this bog is the FIRST step of your glorious journey, Christian, you may keep all the rest of it!"},{speaker:"Christian",text:"Pliable, wait! The crowns, the city — it is all still true! One mire does not un-make it!"},{speaker:"Pliable",text:"Then you may have my share of the crowns AND my share of the mud. I am going HOME. Farewell — and good luck to your poor back!"},{speaker:"Christian",text:"…And there he goes, hopping for home. *sigh* Then I cross alone. There must be solid footing somewhere beneath this mire…"}],()=>{this.pliableStage="flee",this.phase="crossing",this.cb.setObjective("🪨 Keep moving or the mire pulls you under — rest on the solid Steps!")}));else if(this.pliableStage==="farewell")l.y=Math.abs(Math.sin(e*6))*.16,this.pliable.root.rotation.y=Math.PI/2,Ct(this.pliable,e*2,!1);else if(this.pliableStage==="flee")l.x-=t*9,l.y=0,this.pliable.root.rotation.y=-Math.PI/2,Ct(this.pliable,e*1.5,!0),l.x<-30&&(this.scene.remove(this.pliable.root),this.pliable=null);else if(this.phase==="walk"){const h=s.x+1.9,c=s.z-1.2,u=h-l.x,d=c-l.z,m=Math.hypot(u,d);if(m>.15){const y=Math.min(t*6.4,m);l.x+=u/m*y,l.z+=d/m*y,this.pliable.root.rotation.y=Math.atan2(u,d),Ct(this.pliable,e+.4,!0)}else Ct(this.pliable,e+.4,!1)}else this.pliable.root.position.y=-.35,Ct(this.pliable,e+.4,!1)}if(this.phase==="rescue"){this.rescueT+=t;const l=this.help.root.position;this.rescueT<=1.6?(l.x=Pt.lerp(24,17.6,Math.min(this.rescueT/1.6,1)),this.help.root.rotation.y=-Math.PI/2,Ct(this.help,e,!0)):this.rescueT<1.7?(Ct(this.help,e,!1),this.help.armR.rotation.x=-1.2):(this.phase="epilogue",this.cb.playScript([{speaker:"???",text:"Ho there, friend in the mire! What do you there?"},{speaker:"Christian",text:"I fell in as I fled the City of Destruction — and this burden sinks me. I cannot reach the bank!"},{speaker:"Help",text:"I am called Help. But tell me — why did you not look for the Steps? Good solid stones lie through the very midst of this slough."},{speaker:"Christian",text:"Fear chased me in so fast, I never thought to look down…"},{speaker:"Help",text:"So it goes with every pilgrim. Here — give me your paw!"},{speaker:"Help",text:"*HEAVE!*"}],()=>{this.rescueT=2,this.christian.root.position.set(16.5,0,-.5),this.christian.root.rotation.y=Math.PI/2,this.help.armR.rotation.x=0,this.sink=0,this.cb.splashSound(),this.cb.playScript([{speaker:"Christian",text:"*gasp* … Solid ground. Thank you, Help. I had nearly given up hope."},{speaker:"Help",text:"This is the Slough of Despond, friend. When a pilgrim first wakes to how lost he is, all his fears and doubts and discouragements come running — and they settle here, in this low place."},{speaker:"Help",text:"The King's labourers have worked this patch these sixteen hundred years, yet it swallows every cartload of good ground. It cannot be mended — only crossed, by the Steps."},{speaker:"Christian",text:"And Pliable… he struggled out on the side nearest home."},{speaker:"Help",text:"Aye. Many turn back at the first mire. But you came through, burden and all. Go on, Christian — the true Gate is not far now."}],()=>{this.phase="freeroam",this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("✨ Follow the light out of the Slough")})}))}if(this.lightBeam&&this.lightBeam.visible){const l=1+Math.sin(e*2.4)*.12;this.lightBeam.scale.set(l,1,l)}for(let l=0;l<this.wisps.length;l++){const h=this.wisps[l];h.position.x+=t*.3,h.position.x>30&&(h.position.x=-25),h.material.opacity=.25+.12*Math.sin(e*.6+l)}for(const l of this.bubbles){const h=(e*.5+l.phase)%2;l.mesh.visible=h<1,l.mesh.position.y=.2+h*.25,l.mesh.scale.setScalar(.5+h*.9)}for(const l of this.splashes)l.life>=1||(l.life=Math.min(1,l.life+t*2.4),l.mesh.position.x+=l.vx*t,l.mesh.position.z+=l.vz*t,l.mesh.position.y+=t*(.8-l.life),l.m.opacity=.75*(1-l.life),l.life>=1&&(l.mesh.visible=!1))}}const jh=-7,Jg=6.5;class Qg{constructor(t){T(this,"scene",new Ei);T(this,"phase","walk");T(this,"cb");T(this,"christian");T(this,"wiseman");T(this,"evangelist");T(this,"revisit",!1);T(this,"built",!1);T(this,"mountain",null);T(this,"fireSeams",[]);T(this,"fireLight",null);T(this,"sparks",[]);T(this,"quake",0);T(this,"rumbleTimer",0);T(this,"evangelistT",0);T(this,"wwLeaving",!1);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.wiseman=Ft({species:"bear",fur:M.bearCocoa,outfit:"shirt",outfitColor:13351152,scale:1.1}),this.wiseman.head.add(p(.8,.1,.8,4867136,0,.88,0)),this.wiseman.head.add(p(.55,.55,.55,4867136,0,1.2,0)),this.wiseman.head.add(p(.58,.12,.58,9067098,0,1,0)),this.evangelist=Ft({species:"bear",fur:11049612,outfit:"robe",outfitColor:M.robeWhite,scale:1.15})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(13950948),t.fog=new hi(13950948,34,90),t.add(new Ai(14740719,11519140,.85));const e=new Ni(16116952,1.15);e.position.set(-24,38,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-45,e.shadow.camera.right=45,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,t.add(e);const i=new Q(new _t(140,1,90),ue(10273934));i.position.y=-.5,i.receiveShadow=!0,t.add(i);for(let u=0;u<60;u++){const d=-45+Math.random()*90,m=-35+Math.random()*70,y=d>4,x=p(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,y?Math.random()>.5?11778442:10923396:Math.random()>.5?9222784:11195548,d,.05,m);x.castShadow=!1,t.add(x)}for(let u=0;u<22;u++){const d=-30+u*2.6,m=p(2.8,.12,3.4,15260088,d,.06,Math.sin(u*.4)*.8);m.castShadow=!1,t.add(m)}for(const[u,d,m]of[[-24,-8,!0],[-19,9,!1],[-13,-10,!1],[-8,8,!0],[-2,-9,!1]]){const y=new at;y.add(p(.5,1.6,.5,M.trunk,0,.8,0)),y.add(p(1.9,1.3,1.9,m?M.leafPink:M.leaf,0,2.2,0)),y.add(p(1.2,.9,1.2,m?M.leafPink:M.leaf,0,3.1,0)),y.position.set(u,0,d),t.add(y)}for(const[u,d]of[[8,6],[11,-7],[16,8],[19,-6],[9,-10]])t.add(p(1.2+Math.random(),.8,1.1,10132132,u,.4,d)),t.add(p(.7,.5,.7,9276822,u+.8,.25,d+.5));const s=new at,o=(u,d,m,y,x,g,f)=>s.add(p(u,d,m,y,x,g,f));o(16,4.5,10,9276822,0,2.25,-6),o(13,3.5,8,8224136,.5,6.2,-5.5),o(10,3,7,9276822,0,9.2,-5),o(6.5,2.6,5,7303034,.5,11.8,-4.5),o(3.4,2,3,8224136,0,13.6,-4),o(11,2.6,6,8224136,.5,8,-.5),o(8,2.2,5.5,7303034,1,6,1.6),o(5.5,1.8,4,6447726,1.2,4.6,3.2),o(2.2,1.2,1.8,10132132,-5.5,4.9,-2),o(1.8,1,1.4,10132132,6,5.2,-1.5);const a=()=>new Mt({color:16747069,transparent:!0,opacity:.9});for(const[u,d,m,y,x]of[[-2.5,3,4.9,.7,1.6],[1.8,2.2,5.25,.5,1.1],[3.4,5.2,3.7,.6,1.4],[-1,6.8,2.6,.8,1.2]]){const g=new Q(new _t(y,x,.14),a());g.position.set(u,d,m),s.add(g),this.fireSeams.push(g)}this.fireLight=new Si(16742973,1.4,26),this.fireLight.position.set(1,5,4.5),s.add(this.fireLight),s.position.set(14,0,-2),t.add(s),this.mountain=s;for(let u=0;u<12;u++){const d=new Mt({color:16757596,transparent:!0,opacity:0}),m=new Q(new _t(.16,.16,.16),d);m.visible=!1,t.add(m),this.sparks.push({mesh:m,m:d,life:1,vx:0,vz:0})}const r=new at;r.add(p(14,1.2,10,11458976,0,.6,0));const l=(u,d,m)=>{r.add(p(2.2,1.6,1.9,16447212,u,2,d)),r.add(p(2.5,.7,2.2,m,u,3.15,d)),r.add(p(.4,1,.12,M.woodDark,u,1.7,d+1))};l(-3.5,.5,10336472),l(0,1.2,1211e4),l(3.5,.5,10336472);for(let u=0;u<6;u++)r.add(p(1.4,.5,.5,8826237,-5+u*2.1,1.45,3.2));r.position.set(30,0,-4),t.add(r);const h=Ft({species:"bear",fur:9405816,outfit:"robe",outfitColor:10336472,scale:1.05});h.root.position.set(26.5,1.2,-.5),h.root.rotation.y=-Math.PI/2,t.add(h.root);const c=Ft({species:"bear",fur:M.bearHoney,outfit:"shirt",outfitColor:16447212,scale:.7});c.root.position.set(27.5,1.2,1),c.root.rotation.y=-Math.PI/2,t.add(c.root),this.wiseman.root.position.set(jh,0,-2.4),this.wiseman.root.rotation.y=-Math.PI/2,t.add(this.wiseman.root),this.evangelist.root.position.set(-20,0,-3),this.evangelist.root.visible=!1,t.add(this.evangelist.root)}enter(t){return this.build(),this.revisit=t,this.quake=0,this.wwLeaving=!1,this.christian.root.position.set(t?-24:-27,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),t?(this.phase="done",this.wiseman.root.visible=!1,this.evangelist.root.visible=!1,this.cb.setObjective("⛰ Mount Sinai still smoulders — the west road leads back")):(this.phase="walk",this.wiseman.root.visible=!0,this.evangelist.root.visible=!1,this.cb.setObjective("🎩 A well-dressed gentleman waits along the pleasant path…")),{christian:this.christian}}moveFactor(){return this.phase==="quaking"||this.phase==="evangelist"||this.phase==="rebuke"?0:1}afterMove(){const t=this.christian.root.position;t.z=Pt.clamp(t.z,-14,14);const e=this.phase==="return"?8.5:this.revisit?9.5:20;if(t.x=Pt.clamp(t.x,-28,e),this.revisit){t.x<-26.5&&this.cb.onExit();return}if(this.phase==="walk"&&t.x>jh-3){this.phase="diverted",this.cb.playScript([{speaker:"Worldly Wiseman",text:"Hello there! Good day, good day! Christian of the City of Destruction, unless I miss my guess — the bear with the famous burden!"},{speaker:"Christian",text:"Famous or not, sir, it is heavy. I'm headed for the Wicket Gate — they say I can be rid of it there."},{speaker:"Worldly Wiseman",text:"The Wicket Gate! Dear me. Mud, mountains, lions and worse lie on THAT road. You've already had a taste of the Slough, haven't you?"},{speaker:"Christian",text:"…I'm still drying out, if I'm honest."},{speaker:"Worldly Wiseman",text:"Then listen to a practical bear! In the nearby village of MORALITY lives my good friend Mr. Legality — a master at easing burdens exactly like yours. And if he's busy, his fine son Civility will look after you."},{speaker:"Worldly Wiseman",text:"A short, SAFE stroll — no mud, no nonsense. You could get a house there, send for your wife and cubs, and live respectably ever after!"},{speaker:"Christian",text:"No mud… a house for my family… Sir, that sounds very sensible indeed. Which way did you say?"},{speaker:"Worldly Wiseman",text:"Straight on, past that tall hill. First door on the left! Do give Mr. Legality my regards."}],()=>{this.cb.setObjective("🏘 Follow the pleasant path east, toward the village of Morality")});return}if(this.phase==="diverted"&&t.x>Jg){this.phase="quaking",this.quake=1,this.cb.rumbleSound(),this.cb.playScript([{speaker:"Christian",text:"The hill… it hangs right OVER the road! And — fire! Fire is flashing from its sides!"},{speaker:"Christian",text:"It groans like thunder above me. One more step and it will surely fall… and this burden feels heavier than it has ever been. What have I done?"}],()=>{this.phase="evangelist",this.evangelistT=0,this.evangelist.root.visible=!0,this.evangelist.root.position.set(t.x-14,0,-2.5),this.cb.setObjective("👣 Someone hurries up the road behind you…")});return}this.phase==="return"&&t.x<-26.5&&(this.phase="done",this.cb.onComplete())}spawnSpark(){if(!this.mountain)return;const t=this.sparks.find(e=>e.life>=1);t&&(t.life=0,t.vx=(Math.random()-.5)*1.2,t.vz=(Math.random()-.5)*1.2,t.mesh.position.set(this.mountain.position.x+(Math.random()-.5)*8,5.5+Math.random()*3,this.mountain.position.z+3+Math.random()*2.5),t.mesh.visible=!0)}update(t,e,i){if(!this.built)return;if(Ct(this.christian,e,i&&this.moveFactor()>0),this.wiseman.root.visible&&(this.wwLeaving?(this.wiseman.root.position.x+=t*6,this.wiseman.root.rotation.y=Math.PI/2,Ct(this.wiseman,e,!0),this.wiseman.root.position.x>24&&(this.wiseman.root.visible=!1)):Ct(this.wiseman,e+1.3,!1)),this.phase==="evangelist"){this.evangelistT+=t;const a=this.evangelist.root.position,r=this.christian.root.position,l=r.x-2.6-a.x,h=r.z-.6-a.z,c=Math.hypot(l,h);c>.3?(a.x+=l/c*t*6.5,a.z+=h/c*t*6.5,this.evangelist.root.rotation.y=Math.atan2(l,h),Ct(this.evangelist,e,!0)):this.evangelistT>.6&&(this.phase="rebuke",this.christian.root.rotation.y=-Math.PI/2,this.cb.playScript([{speaker:"Evangelist",text:"Christian. What are you doing HERE?"},{speaker:"Christian",text:"E-Evangelist! A… a gentleman told me about a quicker way. A Mr. Legality, in the village of Morality, who could lift my burden without the mud and the mountains…"},{speaker:"Evangelist",text:"Listen carefully, dear bear. That gentleman is Mr. WORLDLY WISEMAN, and he loves only the wisdom of this world. He turns every pilgrim he can away from the true road."},{speaker:"Evangelist",text:"Mr. Legality cannot loosen a single strap of your burden — no creature has ever been set free at his door. And Civility, for all his polish, is a smiling fraud like his father."},{speaker:"Evangelist",text:"And THIS mountain is the reason. It is Sinai — the Law itself. It thunders, it flashes, it shows your burden for what it is… but it cannot LIFT it. Trust in your own good deeds, and it will hang over you for the rest of your life."},{speaker:"Christian",text:"Then I've been a fool twice over — once into the mud, and once onto this path. Is there any hope left for me?"},{speaker:"Evangelist",text:"There is. The way you left is exactly where you left it. Go back to the true road, Christian — on to the Wicket Gate — and don't leave it again."},{speaker:"Christian",text:"I'll go back at once. Thank you, Evangelist… again."}],()=>{this.phase="return",this.wwLeaving=!0,this.cb.setObjective("↩ Return west, back to the true way")}))}else this.evangelist.root.visible&&Ct(this.evangelist,e+.8,!1);const s=this.phase;this.quake=Math.max(0,this.quake-t*.25);const o=s==="quaking"||s==="evangelist"?1:.35;if(this.mountain){const a=this.quake*.09;this.mountain.position.x=14+(Math.random()-.5)*a,this.mountain.position.z=-2+(Math.random()-.5)*a}for(let a=0;a<this.fireSeams.length;a++){const r=.35+.65*Math.abs(Math.sin(e*(2.6+a*.7)+a*2));this.fireSeams[a].material.opacity=r*o+.15}if(this.fireLight&&(this.fireLight.intensity=(.8+Math.abs(Math.sin(e*3.1))*1.6)*o),this.rumbleTimer-=t,this.rumbleTimer<=0){this.rumbleTimer=o>=1?1.6+Math.random():6+Math.random()*5,this.cb.rumbleSound(),this.quake=Math.max(this.quake,o>=1?1:.4);for(let a=0;a<(o>=1?5:2);a++)this.spawnSpark()}for(const a of this.sparks)a.life>=1||(a.life=Math.min(1,a.life+t*.9),a.mesh.position.x+=a.vx*t,a.mesh.position.z+=a.vz*t,a.mesh.position.y-=t*3.2,a.m.opacity=.9*(1-a.life),(a.mesh.position.y<.1||a.life>=1)&&(a.life=1,a.mesh.visible=!1))}}const Me=10,Tr=new C(4,0,-15),ia=100,xn=40,t1=new C(xn,0,-4.3),Ze=150,ye=[Ze+10,Ze+24,Ze+38,Ze+52,Ze+66,Ze+80],Xi=Ze+92,Qe=5.5,e1=Qe*2,Er=2.2,$h=ye[4]-4,i1=[{speaker:"",text:"A little way past the Gate, off the King's Highway, stands a cottage of warm timber with smoke curling from its chimney — the House of the Interpreter."},{speaker:"Interpreter",text:"(an owl in a scholar's robe, blinking down from the doorway) Christian! Goodwill sent word you'd be coming. Come in, come in — I have things to show you that will help you greatly on your journey."},{speaker:"Christian",text:"Gladly, sir. I have long wished for someone who could make plain the things I only half understand."}],n1=[{speaker:"",text:"The first room is thick with dust — years of it, settled over every beam and floorboard."},{speaker:"Interpreter",text:"Sweep it, if you please."},{speaker:"",text:"A servant sweeps hard. The dust billows up in choking clouds until neither pilgrim can draw breath."},{speaker:"Christian",text:"*coughing* Enough! Stop, I beg you!"}],s1=[{speaker:"Interpreter",text:"Now — bring water, and sprinkle the floor before you sweep."},{speaker:"",text:"The second servant scatters water first. This time the broom leaves the room clean and sweet."},{speaker:"Interpreter",text:"The dust is sin, hidden deep in the heart of a man. The broom is the Law — it stirs sin up and shows it plainly, but has no power to take it away."},{speaker:"Interpreter",text:"The water is the Gospel. Grace alone settles the dust of sin and truly cleanses the heart."},{speaker:"Christian",text:"Then the Law can only show me my filth — never wash me of it. I begin to see why I could not rest at Sinai."}],Un=[[{speaker:"",text:"In the next room sit two small boys, side by side, though nothing else about them is alike."},{speaker:"Interpreter",text:"This one is named Passion. That one, Patience."},{speaker:"",text:"Passion scowls and demands his whole inheritance at once. It is heaped into his lap — and within minutes he has torn, spilled, and squandered every bit, and sits now in rags among the ruins, sulking."},{speaker:"",text:"Patience asks for nothing, and waits quietly, empty-handed."},{speaker:"Christian",text:"Poor foolish thing. Will he never have any more?"},{speaker:"Interpreter",text:"Not until the appointed time — and by then, Patience will have come into lasting riches, while Passion has nothing left at all."},{speaker:"Interpreter",text:"So it is with the children of this world, who must have their good things now, and the children of the world to come, who can wait for theirs — for theirs will never rust or fade away."},{speaker:"Christian",text:"Better to wait for treasure that lasts, than seize a joy that crumbles in the hand."}],[{speaker:"",text:"Against a wall a fire burns, and a man stands before it, endlessly emptying pails of water on the flames."},{speaker:"Christian",text:"Strange — the more he pours, the higher it burns! Why does it not go out?"},{speaker:"Interpreter",text:"Come round to the other side, and see."},{speaker:"",text:"Behind the wall, unseen from the front, another hand pours oil into the fire — secretly, steadily, without ceasing."},{speaker:"Interpreter",text:"The man with the water is the Devil, forever working to put out the work of grace in the heart. The one with the oil is Christ — He keeps alive what His own hand has begun, even when His people cannot see Him doing it."},{speaker:"Christian",text:"Then when I feel my faith failing under some trial, it may be only that I cannot see the hand still feeding it, behind the wall."},{speaker:"Interpreter",text:"Just so, Christian. Just so."}],[{speaker:"",text:"A crowd of fearful people stands well back from a splendid palace, its gate thick with armed guards."},{speaker:"",text:"None of them dares approach — until one man of bold courage walks up and puts his name down to enter."},{speaker:"",text:"He takes up his helmet, shield, and sword, and fights through the guards, taking many hard blows, until at last he pushes through the doorway and enters."},{speaker:"",text:"A great shout of welcome rises from within."},{speaker:"Interpreter",text:"Christian, you must push through difficulties to enter the kingdom of heaven. Write down your name, take up your weapons, and push in — whatever it costs you."},{speaker:"Christian",text:"Then this road was never meant to be walked without a fight. I had hoped otherwise — but I would rather be wounded at that gate than turn away from it."}],[{speaker:"",text:"In a dim corner, a man sits caged behind bars of black iron, his head bowed low."},{speaker:"Christian",text:"Friend, what brought you here?"},{speaker:"",text:"(the caged man, hollow-voiced) I was once a strong believer, respected in my own eyes and the eyes of others. I stopped watching myself, and hardness followed hardness, sin upon sin, until I could no longer repent, though I wanted to."},{speaker:"",text:"Now I am locked in this cage I made for myself, and I cannot get out."},{speaker:"Interpreter",text:"Let his suffering be a warning to you. Treat sin as harmless, drift away little by little, and you may wake one day to find the door already shut — from the inside."},{speaker:"Christian",text:"*shivering* A dreadful sight. God keep me watchful, and never so careless with sin as he was."}],[{speaker:"",text:"A man sits bolt upright in his bed, trembling, sweat on his brow, staring as though he still saw the vision that woke him."},{speaker:"",text:"(the man, shaking) I dreamed the heavens grew black as pitch, and the trumpet sounded, and the clouds parted, and I stood before the great white throne, unready, without a plea to offer."},{speaker:"Interpreter",text:"Don't let it remain just a dream, Christian. That day comes for every soul alike. Live each one as a man who must give account — and you won't be caught unready when the trumpet truly sounds."},{speaker:"Christian",text:"I will remember this room longest of all, sir. It has put a solemn weight on me — a good weight, I think, unlike the one on my back."}]],o1=[{speaker:"Christian",text:"Sir, I thank you with all my heart. I came in confused, and I go out instructed — the dust and the Law, the fire and the oil, the cage, the dream — I will carry every one of them with me."},{speaker:"Interpreter",text:"Go then, Christian, and the Lord be with you upon the King's Highway. Always remember what you've seen here, and let it strengthen and comfort you for the rest of your journey."},{speaker:"",text:"The Interpreter walks him to the door, and the bright road outside — and the far light — waits beyond it."}];class a1{constructor(t){T(this,"scene",new Ei);T(this,"phase","approach");T(this,"cb");T(this,"christian");T(this,"goodwill");T(this,"revisit",!1);T(this,"built",!1);T(this,"mutterIndex",0);T(this,"doorL",null);T(this,"doorR",null);T(this,"doorOpen",!1);T(this,"castleGlows",[]);T(this,"arrows",[]);T(this,"volleyT",0);T(this,"arrowTimer",0);T(this,"lightBeam",null);T(this,"hasPassedGate",!1);T(this,"peekBlocked",!1);T(this,"peekVolley",0);T(this,"peekArrowTimer",0);T(this,"goodwillNear",!1);T(this,"interpreter");T(this,"houseGreeted",!1);T(this,"houseCalledOut",!1);T(this,"stationIndex",0);T(this,"dust",[]);T(this,"dustBurst",0);T(this,"dustBurstTarget",0);T(this,"sprinkle",[]);T(this,"sprinkleT",0);T(this,"sprinkleTimer",0);T(this,"fireMotes",[]);T(this,"devilArm",null);T(this,"christArm",null);T(this,"waterDrops",[]);T(this,"oilDrops",[]);T(this,"dropTimer",0);T(this,"cottageDoor",null);T(this,"houseDoorOpen",!1);T(this,"exitDoor",null);T(this,"exitDoorOpen",!1);T(this,"interpreterTarget",null);T(this,"interpreterFaceOnArrive",0);T(this,"interpreterIdleTalked",!1);T(this,"interpreterExitTalked",!1);T(this,"footDust",[]);T(this,"footDustTimer",0);T(this,"sweeper",null);T(this,"sweeperArm",null);T(this,"waterer",null);T(this,"watererArm",null);T(this,"toyBall",null);T(this,"passionArm",null);T(this,"dreamer",null);T(this,"sweatDrops",[]);T(this,"partitionXs",[]);T(this,"houseColliders",[]);T(this,"npcTalks",[]);T(this,"knight",null);T(this,"knightArm",null);T(this,"knightShieldArm",null);T(this,"knightState","idle");T(this,"knightT",0);T(this,"guards",[]);T(this,"guardBaseX",[]);T(this,"guardStagger",[]);T(this,"knightDoorPos",new C);T(this,"fireGlow",null);T(this,"embers",[]);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0,plump:!0}),this.goodwill=Ft({species:"lion",outfit:"robe",outfitColor:M.robeWhite,scale:1.3}),this.interpreter=Ft({species:"owl",outfit:"robe",outfitColor:M.robeGold,scale:1.05})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(13163752),t.fog=new hi(13163752,36,95),t.add(new Ai(14872306,11716774,.9));const e=new Ni(16248536,1.2);e.position.set(-22,38,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-70,e.shadow.camera.right=70,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e);const i=new Q(new _t(210,1,90),ue(10340243));i.position.set(10,-.5,0),i.receiveShadow=!0,t.add(i);for(let g=0;g<90;g++){const f=-70+Math.random()*185,E=-35+Math.random()*70,w=p(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?9222784:11195548,f,.05,E);w.castShadow=!1,t.add(w)}for(let g=0;g<30;g++){const f=-62+g*2.5,E=p(2.5,.12,3.2,M.path,f,.06,0);E.castShadow=!1,t.add(E)}for(const g of[-52,-36,-20,-4]){const f=new at;f.add(p(.16,2.2,.16,M.woodDark,0,1.1,0));const E=p(.34,.34,.34,M.light,0,2.35,0);E.material=new Ui({color:M.light,emissive:16773296,emissiveIntensity:.55}),f.add(E),f.position.set(g,0,2.6),t.add(f)}for(const[g,f,E]of[[-56,-7,!1],[-48,8,!0],[-38,-9,!1],[-27,7,!1],[-16,-8,!0],[-8,9,!1]]){const w=new at;w.add(p(.5,1.6,.5,M.trunk,0,.8,0)),w.add(p(1.9,1.3,1.9,E?M.leafPink:M.leaf,0,2.2,0)),w.add(p(1.2,.9,1.2,E?M.leafPink:M.leaf,0,3.1,0)),w.position.set(g,0,f),t.add(w)}const s=15920351,o=14472386;for(const g of[-1,1]){for(let f=0;f<7;f++){const E=g*(3.4+f*4.4);t.add(p(1.3,3,4.4,f%2===0?s:15327954,Me,1.5,E)),t.add(p(1.4,.28,4.6,o,Me,3.1,E))}t.add(p(1.7,4.2,1.7,s,Me,2.1,g*2.2)),t.add(p(2,.4,2,o,Me,4.3,g*2.2)),t.add(p(1.2,.6,1.2,M.roofPink,Me,4.7,g*2.2))}t.add(p(.9,.9,4.2,s,Me,4.4,0)),t.add(p(1,.3,4.6,o,Me,5,0));const a=g=>{const f=new at;f.position.set(Me,0,1.35*g);const E=p(.3,3.2,1.35,M.woodDark,0,1.6,-.675*g);return f.add(E),f.add(p(.34,.14,1.35,9072466,0,.9,-.675*g)),f.add(p(.34,.14,1.35,9072466,0,2.3,-.675*g)),this.scene.add(f),f};this.doorL=a(-1),this.doorR=a(1);const r=new at;r.add(p(.14,1.5,.14,M.woodDark,0,.75,0)),r.add(p(1.5,.7,.1,M.wallCream,0,1.4,0)),r.position.set(Me-1.6,0,3.6),r.rotation.y=-.4,t.add(r);const l=new at,h=5919844,c=4801618;l.add(p(7,3,5.5,7235704,0,1.5,0)),l.add(p(5.5,3.4,4.2,h,0,4.4,0)),l.add(p(1.6,5.4,1.6,c,-2.6,4.8,-1.4)),l.add(p(1.6,6.2,1.6,c,2.4,5.2,1.2)),l.add(p(1.3,4.8,1.3,h,2.6,4.5,-1.8));for(let g=0;g<5;g++)l.add(p(.7,.7,.7,c,-2+g*1.05,6.4,0));l.add(p(.1,2.4,.1,c,0,8,0)),l.add(p(.9,.6,.06,9058890,.5,8.6,0));for(const[g,f,E]of[[-2.6,5.6,-.5],[2.4,6.4,1.2],[0,5,2.15],[-1.4,4.2,2.15]]){const w=new Q(new _t(.5,.7,.12),new Mt({color:16735309,transparent:!0,opacity:.85}));w.position.set(g,f,E),l.add(w),this.castleGlows.push(w)}l.position.copy(Tr),t.add(l);for(const[g,f]of[[-1,-9],[8,-10],[1,-20],[9,-18]])t.add(p(.3,1.3,.3,9274488,g,.65,f)),t.add(p(.9,.24,.24,9274488,g+.3,1.3,f));for(let g=0;g<10;g++){const f=new at;f.add(p(.09,.09,1.1,4867136,0,0,0)),f.add(p(.16,.16,.22,9058890,0,0,.6)),f.add(p(.2,.05,.3,14209996,0,0,-.55)),f.visible=!1,t.add(f),this.arrows.push({g:f,t:1,active:!1,from:new C,to:new C})}for(let g=0;g<38;g++){const f=Me+2+g*2.5,E=p(2.5,.12,2.6,15655876,f,.06,0);E.castShadow=!1,t.add(E);const w=Math.abs(f-xn)<3.5;g%1===0&&(t.add(p(2.5,.9,.8,8367732,f,.45,2.1)),w||t.add(p(2.5,.9,.8,8367732,f,.45,-2.1))),g%3===1&&!w&&(t.add(p(.5,.4,.5,M.grassDark,f,1.05,2.1)),t.add(p(.5,.4,.5,M.grassDark,f,1.05,-2.1)))}for(let g=0;g<34;g++){const f=p(.18,.18,.18,[M.flowerYellow,M.flowerPink,M.flowerBlue][g%3],Me+3+Math.random()*84,.98,Math.random()>.5?2.1:-2.1);f.castShadow=!1,t.add(f)}const u=new at,d=new Q(new _t(2.6,40,2.6),new Mt({color:16767306,transparent:!0,opacity:.8,fog:!1}));d.position.y=20,u.add(d);const m=new Q(new _t(1.3,44,1.3),new Mt({color:16776160,transparent:!0,opacity:.95,fog:!1}));m.position.y=22,u.add(m);const y=new Q(new _t(3.4,3.4,3.4),new Mt({color:16771194,fog:!1}));y.position.y=42,y.rotation.set(Math.PI/4,0,Math.PI/4),u.add(y);const x=new Si(16771194,3.5,40);x.position.y=4,u.add(x),u.position.set(ia+2,0,0),u.visible=!1,t.add(u),this.lightBeam=u,this.goodwill.root.position.set(Me+2.2,0,-1.6),this.goodwill.root.rotation.y=-Math.PI/2,this.goodwill.root.visible=!1,t.add(this.goodwill.root),t.add(this.interpreter.root),this.buildCottage(),this.buildHouseInterior()}buildCottage(){const t=this.scene,e=xn,i=-6.5,s=new at;s.add(p(4.2,2.6,3.6,M.wallCream,0,1.3,0)),s.add(p(4.6,1.5,4,M.roofPeach,0,3.35,0)),s.add(p(.5,.9,.5,M.woodDark,1.5,3.6,.2)),s.add(p(.9,.16,.3,9072466,0,1.66,1.9)),s.add(p(.7,.7,.1,M.wallMint,-1.4,1.6,1.81)),s.add(p(.7,.7,.1,M.wallMint,1.4,1.6,1.81)),s.position.set(e,0,i),t.add(s);const o=new at;o.position.set(e-.45,0,i+1.81),o.add(p(.9,1.7,.14,M.woodDark,.45,.85,0)),t.add(o),this.cottageDoor=o;for(let r=0;r<4;r++)t.add(p(1.4,.1,1.2,M.path,e,.05,-2.6-r*1.1));const a=new at;a.add(p(.12,1.2,.12,M.woodDark,0,.6,0)),a.add(p(1.6,.6,.1,M.wallCream,0,1.1,0)),a.position.set(e-2.3,0,-3.2),a.rotation.y=-.5,t.add(a),this.interpreter.root.position.set(e,0,i+3.2),this.interpreter.root.rotation.y=0,this.interpreter.root.visible=!0}buildHouseInterior(){const t=this.scene,e=Ze+46;t.add(p(96,.2,e1,M.wood,e,-.1,0)),t.add(p(96,3.1,.3,M.wallCream,e,1.55,-Qe)),t.add(p(96,3.1,.3,M.wallCream,e,1.55,Qe));for(let l=0;l<10;l++){const h=Ze+4+l*9.5;let c=l%2===0?-Qe+.4:Qe-.4;Math.abs(h-$h)<1.8&&(c=Qe-.4);const u=new at;u.add(p(.14,2.1,.14,M.woodDark,0,1.05,0));const d=p(.32,.32,.32,M.light,0,2.15,0);d.material=new Ui({color:M.light,emissive:16773296,emissiveIntensity:.5}),u.add(d),u.position.set(h,0,c),t.add(u)}const i=[M.wallPink,M.wallMint,M.wallLilac],s=Qe-Er;this.partitionXs=[Ze+3,...ye.slice(1).map((l,h)=>(ye[h]+l)/2),Xi-6],this.partitionXs.forEach((l,h)=>{const c=i[h%i.length];t.add(p(.14,2.2,s,c,l,1.1,-7.7/2)),t.add(p(.14,2.2,s,c,l,1.1,(Er+Qe)/2))});{const l=ye[0];t.add(p(3.2,.05,3,13351306,l,.03,-3.2)),t.add(p(.4,.3,.4,M.stone,l+.9,.15,-3.4));const h=Ft({species:"mouse",outfit:"overalls",outfitColor:9072466,scale:.52});h.root.position.set(l-.9,0,-2.7),h.root.rotation.y=.5;const c=new at;c.add(p(.07,.85,.07,M.woodDark,0,-.35,.1)),c.add(p(.24,.18,.1,13215845,0,-.8,.16)),h.armR.add(c),t.add(h.root),this.sweeper=h,this.sweeperArm=h.armR,this.houseColliders.push({x:l-.9,z:-2.7,r:.4}),this.npcTalks.push({parts:h,talked:!1,radius:1.1,lines:[{speaker:"",text:"(the little sweeper, between coughs) It never comes truly clean this way, sir — the harder I sweep, the worse it gets!"}]});const u=Ft({species:"mouse",outfit:"shirt",outfitColor:9418968,scale:.52});u.root.position.set(l+1,0,-3.6),u.root.rotation.y=-.6;const d=p(.2,.22,.18,4867136,0,-.45,.14);u.armR.add(d),t.add(u.root),this.waterer=u,this.watererArm=u.armR,this.houseColliders.push({x:l+1,z:-3.6,r:.4}),this.npcTalks.push({parts:u,talked:!1,radius:1.1,lines:[{speaker:"",text:"(the little waterer, pail in hand) A splash of water first, and the dust lies down like a lamb. Sweeping alone never once managed it."}]});for(let m=0;m<22;m++){const y=new Mt({color:14273187,transparent:!0,opacity:0}),x=new Q(new _t(.18,.18,.18),y),g=l+(Math.random()-.5)*2.8,f=-3.2+(Math.random()-.5)*2.4;x.position.set(g,.3,f),t.add(x),this.dust.push({mesh:x,mat:y,life:Math.random(),baseX:g,baseZ:f})}for(let m=0;m<16;m++){const y=new Mt({color:11458800,transparent:!0,opacity:0}),x=new Q(new _t(.07,.16,.07),y);x.visible=!1,t.add(x),this.sprinkle.push({mesh:x,mat:y,active:!1,vy:0})}}{const l=ye[1],h=Ft({species:"bear",outfit:"shirt",outfitColor:15237962,scale:.68});h.root.position.set(l-1.3,0,1.6),h.root.rotation.y=.5;const c=new at;c.add(p(.14,.22,.1,16766629,0,0,0)),c.add(p(.13,.13,.1,16238804,0,.17,0)),c.position.set(0,-.28,.2),h.armR.add(c),t.add(h.root),this.passionArm=h.armR,this.houseColliders.push({x:l-1.3,z:1.6,r:.45}),this.npcTalks.push({parts:h,talked:!1,radius:1.2,lines:[{speaker:"Passion",text:"Mine! All of it, NOW! Why should I wait for anything, when I can have it all today?"}]});for(const[y,x,g]of[[-2.2,.5,16769162],[-1.8,1.6,16757702]])t.add(p(.22,.22,.22,g,l+y,.11,x));const u=new at;u.add(p(.5,.2,.3,16747069,0,.15,0)),u.add(p(.3,.14,.26,16761692,0,.3,0));for(const y of[-.18,.18])for(const x of[-.13,.13])u.add(p(.1,.1,.1,2894384,y,.06,x));u.position.set(l-2.5,0,1),u.rotation.y=.6,t.add(u);const d=new Q(new We(.16,10,8),ue(16739201));d.position.set(l-1.6,.16,2.2),d.castShadow=!0,t.add(d),this.toyBall=d;for(const[y,x,g,f]of[[-2,2.3,11455487,16774857],[-1,.6,M.dressLeaf,16769162]])t.add(p(.3,.3,.3,g,l+y,.16,x)),t.add(p(.32,.06,.06,f,l+y,.24,x)),t.add(p(.06,.06,.32,f,l+y,.24,x));const m=Ft({species:"bear",outfit:"overalls",outfitColor:M.dressLeaf,scale:.68});m.root.position.set(l+1.6,0,1.8),m.root.rotation.y=-.5,t.add(m.root),this.houseColliders.push({x:l+1.6,z:1.8,r:.45}),this.npcTalks.push({parts:m,talked:!1,radius:1.2,lines:[{speaker:"Patience",text:"I'd rather wait and have something that lasts, than grab at what falls apart in my hands."}]})}{const l=ye[2],h=-1.8;t.add(p(.4,1.5,1.8,M.stone,l,2.05,h)),t.add(p(.9,.14,.9,4866104,l,.08,h));for(let m=0;m<14;m++){const y=[16747069,16761692,16735293,16769162][m%4],x=new Mt({color:y}),g=.3+Math.random()*.55,f=new Q(new _t(.18+Math.random()*.14,g,.18+Math.random()*.14),x);f.position.set(l+(Math.random()-.5)*.8,g/2+.1,h+(Math.random()-.5)*.6),t.add(f),this.fireMotes.push(f)}const c=new Si(16753479,1.8,6);c.position.set(l,.6,h),t.add(c),this.fireGlow=c;for(let m=0;m<10;m++){const y=new Mt({color:16764794,transparent:!0,opacity:0}),x=new Q(new _t(.06,.06,.06),y),g=l+(Math.random()-.5)*.7,f=h+(Math.random()-.5)*.5;x.position.set(g,.3,f),t.add(x),this.embers.push({mesh:x,mat:y,life:Math.random(),baseX:g,baseZ:f})}const u=Ft({species:"cat",outfit:"none",fur:5919844,scale:.9});u.root.position.set(l-1.8,0,h+.3),u.root.rotation.y=Math.PI/2,u.armR.add(p(.26,.34,.22,4867136,0,-.5,.16)),t.add(u.root),this.devilArm=u.armR,this.houseColliders.push({x:l-1.8,z:h+.3,r:.45}),this.npcTalks.push({parts:u,talked:!1,radius:1.2,lines:[{speaker:"",text:"(the dark figure pours, unblinking) Pour and pour... this fire will never go out, no matter what I do to smother it."}]});const d=Ft({species:"lion",outfit:"robe",outfitColor:M.robeWhite,scale:.85});d.root.position.set(l+1.8,0,h+.3),d.root.rotation.y=-Math.PI/2,d.armR.add(p(.22,.3,.2,M.robeGold,0,-.5,.16)),t.add(d.root),this.christArm=d.armR,this.houseColliders.push({x:l+1.8,z:h+.3,r:.45}),this.npcTalks.push({parts:d,talked:!1,radius:1.2,lines:[{speaker:"",text:"(a quiet voice, warm and steady) Have no fear, Christian. My grace feeds this flame, and it will never run dry."}]});for(let m=0;m<10;m++){const y=new Mt({color:5941480,transparent:!0,opacity:0}),x=new Q(new _t(.08,.16,.08),y);x.visible=!1,t.add(x),this.waterDrops.push({mesh:x,mat:y,active:!1})}for(let m=0;m<10;m++){const y=new Mt({color:16769357,transparent:!0,opacity:0}),x=new Q(new _t(.08,.16,.08),y);x.visible=!1,t.add(x),this.oilDrops.push({mesh:x,mat:y,active:!1})}}{const l=ye[3];t.add(p(2.6,2.8,.3,M.roofLilac,l,1.4,4.2)),t.add(p(2.8,.3,.4,M.robeGold,l,2.85,4.2)),t.add(p(.9,1.7,.3,16774857,l,.85,4.05)),this.knightDoorPos.set(l,0,3.85),this.guardBaseX=[];for(const u of[-1.1,1.1]){const d=Ft({species:"pig",outfit:"overalls",outfitColor:5919844,scale:.9});d.root.position.set(l+u,0,3),d.root.rotation.y=Math.PI;const m=new at;m.add(p(.06,1.2,.06,M.woodDark,0,.3,0)),m.add(p(.12,.24,.12,13093327,0,.95,0)),d.armR.add(m),t.add(d.root),this.guards.push(d),this.guardStagger.push(0),this.guardBaseX.push(l+u),this.houseColliders.push({x:l+u,z:3,r:.45})}const h=Ft({species:"bear",outfit:"shirt",outfitColor:9080730,scale:.95});h.root.position.set(l,0,1.2),h.head.add(p(.7,.22,.68,13093327,0,.74,0)),h.head.add(p(.46,.14,.1,13093327,0,.52,.42)),h.armL.add(p(.36,.5,.1,9080730,0,-.3,.2)),h.armL.add(p(.18,.24,.11,M.robeGold,0,-.3,.24));const c=new at;c.add(p(.08,.7,.08,14209996,0,-.15,0)),c.add(p(.22,.1,.08,9072466,0,-.46,0)),h.armR.add(c),t.add(h.root),this.knight=h,this.knightArm=h.armR,this.knightShieldArm=h.armL,this.houseColliders.push({x:l,z:1.2,r:.45}),this.npcTalks.push({parts:h,talked:!1,radius:1.3,lines:[{speaker:"",text:"(the armored man, resolute) Set down your name, friend, and take up your sword. This road is not for the faint of heart."}]})}{const l=$h,h=1.1,c=.95,u=2.1,d=-4.35;t.add(p(h*2,.05,c*2,3814976,l,.03,d));const m=2894384;for(const x of[-1.1,-.55,0,.55,1.1])t.add(p(.06,u,.06,m,l+x,u/2,d-c)),t.add(p(.06,u,.06,m,l+x,u/2,d+c));for(const x of[-.63,0,.63])t.add(p(.06,u,.06,m,l-h,u/2,d+x)),t.add(p(.06,u,.06,m,l+h,u/2,d+x));t.add(p(h*2+.1,.06,.06,m,l,u,d-c)),t.add(p(h*2+.1,.06,.06,m,l,u,d+c)),t.add(p(.06,.06,c*2+.1,m,l-h,u,d)),t.add(p(.06,.06,c*2+.1,m,l+h,u,d));const y=Ft({species:"bear",outfit:"none",fur:9406590,scale:.9});y.root.position.set(l,0,d),y.root.rotation.x=.2,y.head.add(p(.16,.14,.05,2894384,-.24,.5,.44)),y.head.add(p(.16,.14,.05,2894384,.24,.5,.44)),y.head.add(p(.2,.04,.04,2894384,0,.5,.44)),t.add(y.root),this.houseColliders.push({x:l,z:d,r:Math.max(h,c)+.1}),this.npcTalks.push({parts:y,talked:!1,radius:1.6,lines:[{speaker:"",text:"(the caged man, barely lifting his head) Don't linger here on my account, friend. Just... don't let your heart go hard the way mine did."}]})}{const l=ye[5],h=3;t.add(p(1.1,.3,2.2,M.woodDark,l,.3,h)),t.add(p(1,.2,2,15659775,l,.5,h)),t.add(p(.5,.18,.4,16774888,l,.6,h-.95)),this.houseColliders.push({x:l,z:h,r:1.15});const c=Ft({species:"rabbit",outfit:"none",scale:.85});c.root.position.set(l,.6,h-.3),c.legL.rotation.x=-1.3,c.legR.rotation.x=-1.3,t.add(c.root),this.dreamer=c;const u=[[-.26,.5],[.28,.55]];for(const[y,x]of u){const g=new Mt({color:7324656,transparent:!0,opacity:0}),f=new Q(new _t(.07,.1,.07),g);f.position.set(y,x,.42),c.head.add(f),this.sweatDrops.push({mesh:f,mat:g,baseY:x})}this.npcTalks.push({parts:c,talked:!1,radius:1.5,lines:[{speaker:"",text:"(the man, still shaking) Don't wake me yet... no, wait — don't let it be real..."}]});const d=new Mt({color:16645622,transparent:!0,opacity:.5}),m=new Q(new _t(.9,1.8,.5),d);m.position.set(l,1.2,Qe-.6),t.add(m)}const o=1;t.add(p(.3,3,Qe-o,M.wallCream,Xi,1.5,(Qe+o)/2)),t.add(p(.3,3,Qe-o,M.wallCream,Xi,1.5,-6.5/2)),t.add(p(.3,.4,o*2+.3,M.wallCream,Xi,3.2,0));const a=new at;a.position.set(Xi,0,-o);const r=p(.14,1.9,o*1.85,M.woodDark,0,.95,o*.925);a.add(r),t.add(a),this.exitDoor=a;for(let l=0;l<16;l++){const h=new Mt({color:16777215,transparent:!0,opacity:0}),c=new Q(new _t(.22,.22,.22),h);c.visible=!1,c.castShadow=!1,t.add(c),this.footDust.push({mesh:c,mat:h,life:1,vx:0,vz:0})}}enter(t){this.build(),this.revisit=t,this.mutterIndex=0,this.volleyT=0,this.houseGreeted=t,this.houseCalledOut=!1,this.interpreterIdleTalked=!1,this.interpreterExitTalked=!1;for(const e of this.npcTalks)e.talked=!1;this.dustBurst=0,this.dustBurstTarget=0,this.sprinkleT=0,this.knightState="idle",this.knightT=0,this.knight&&(this.knight.root.visible=!0,this.knight.root.position.set(ye[3],0,1.2),this.knight.root.rotation.set(0,0,0));for(let e=0;e<this.guards.length;e++)this.guardStagger[e]=0;this.stationIndex=ye.length,this.houseDoorOpen=!1,this.exitDoorOpen=!1,this.interpreterTarget=null;for(const e of this.arrows)e.active=!1,e.g.visible=!1;return this.hasPassedGate=!1,this.peekBlocked=!1,this.peekVolley=0,this.goodwillNear=!1,this.christian.root.position.set(-60,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),this.interpreter.root.position.set(xn,0,-6.5+3.2),this.interpreter.root.rotation.y=0,t?(this.phase="done",this.doorOpen=!0,this.goodwill.root.visible=!0,this.goodwill.root.position.set(Me+2.2,0,-1.6),this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("🚪 The Gate stands open — the narrow way runs east")):(this.phase="approach",this.doorOpen=!1,this.goodwill.root.visible=!1,this.lightBeam&&(this.lightBeam.visible=!1),this.cb.setObjective("🚶 A long, straight road — the Wicket Gate lies far to the east")),{christian:this.christian}}debugSkip(t){var e,i,s,o;this.build(),this.revisit=!1,this.doorOpen=!0,this.goodwill.root.visible=!0,this.goodwill.root.position.set(Me+3.6,0,-1.7),this.lightBeam&&(this.lightBeam.visible=!0),this.phase="freeroam",this.houseGreeted=t==="house",this.stationIndex=t==="house"?0:ye.length,this.interpreterTarget=null,this.interpreterIdleTalked=!1,this.interpreterExitTalked=!1;for(const a of this.npcTalks)a.talked=!1;this.knightState="idle",this.knightT=0,this.knight&&(this.knight.root.visible=!0,this.knight.root.position.set(ye[3],0,1.2),this.knight.root.rotation.set(0,0,0));for(let a=0;a<this.guards.length;a++)this.guardStagger[a]=0;this.hasPassedGate=t!=="house",this.peekBlocked=!1,this.peekVolley=0,this.goodwillNear=!1,t==="house"?(this.christian.root.position.set(Ze,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(Ze+1.5,0,-1.8),this.interpreter.root.rotation.y=-Math.PI/2,this.phase="house",(i=(e=this.cb).setMusic)==null||i.call(e,"interpreter"),this.cb.setObjective("🏚 The House of the Interpreter — walk on to see what he shows you")):(this.christian.root.position.set(Me+4,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(xn,0,-6.5+3.2),this.interpreter.root.rotation.y=0,(o=(s=this.cb).setMusic)==null||o.call(s,"gate"),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light"))}moveFactor(){return this.phase==="knock"||this.phase==="volley"||this.phase==="houseGreet"?0:1}resolvePeopleCollision(t){for(const i of[this.interpreter,this.goodwill]){if(!i.root.visible)continue;const s=t.x-i.root.position.x,o=t.z-i.root.position.z,a=Math.hypot(s,o);a<.8&&a>1e-4&&(t.x=i.root.position.x+s/a*.8,t.z=i.root.position.z+o/a*.8)}}resolvePartitions(t){const i=Er/2-.3;if(!(Math.abs(t.z)<i))for(const s of this.partitionXs)t.x>s-.18&&t.x<s+.18&&(t.x=t.x<s?s-.18:s+.18)}resolveHouseColliders(t){for(const e of this.houseColliders){const i=t.x-e.x,s=t.z-e.z,o=Math.hypot(i,s);o<e.r&&o>1e-4&&(t.x=e.x+i/o*e.r,t.z=e.z+s/o*e.r)}}afterMove(){const t=this.christian.root.position;if(this.resolvePeopleCollision(t),(this.phase==="house"||this.phase==="houseExit")&&(this.resolvePartitions(t),this.resolveHouseColliders(t)),this.phase==="house"||this.phase==="houseExit"){if(t.z=Pt.clamp(t.z,-Qe+.8,Qe-.8),t.x=Pt.clamp(t.x,Ze-2,Xi+3),this.phase==="house"){if(!this.interpreterIdleTalked&&this.stationIndex===0&&t.distanceTo(this.interpreter.root.position)<1.4){this.interpreterIdleTalked=!0,this.cb.playScript([{speaker:"Interpreter",text:"Take your time, Christian. Walk on when you're ready, and I'll show you all that's here to see."}]);return}for(const e of this.npcTalks)if(!e.talked&&t.distanceTo(e.parts.root.position)<e.radius){e.talked=!0,this.cb.playScript(e.lines);return}if(this.stationIndex<ye.length&&t.x>ye[this.stationIndex]-2){const e=this.stationIndex;this.stationIndex++;const i=t.z>=0?-1.6:1.6;e===0?(this.interpreterTarget=new C(ye[0]-2,0,-2),this.interpreterFaceOnArrive=Math.PI/2,this.christian.root.rotation.y=Math.PI):e===1?(this.interpreterTarget=new C(ye[1]+2,0,-1.8),this.interpreterFaceOnArrive=0):e===2?(this.interpreterTarget=new C(ye[2]-1.8,0,-3),this.interpreterFaceOnArrive=0):e===3?(this.interpreterTarget=new C(ye[3]-2.5,0,i),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI):e===4?(this.interpreterTarget=new C(ye[4]-1,0,i),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI,this.christian.root.rotation.y=Math.PI):(this.interpreterTarget=new C(ye[e]-1,0,i),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI),e===0?(this.dustBurstTarget=1,this.cb.playScript(n1,()=>{this.dustBurstTarget=0,this.sprinkleT=1.6,this.cb.playScript(s1)})):e===3?this.cb.playScript([Un[2][0],Un[2][1]],()=>{this.knightState="fighting",this.knightT=0,this.cb.playScript([Un[2][2],Un[2][3]],()=>{this.knightState="entering",this.knightT=0,this.cb.playScript([Un[2][4],Un[2][5]])})}):this.cb.playScript(Un[e-1]);return}if(this.stationIndex>=ye.length&&t.x>Xi-4){this.phase="houseExit";const e=t.z>=0?-1.6:1.6;this.interpreterTarget=new C(Xi-2,0,e),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI,this.exitDoorOpen=!0,this.cb.playScript(o1,()=>{this.cb.setObjective("🚪 Walk out through the door, back to the King's Highway")})}return}if(t.x>Xi+1.5){const e=()=>{var i,s;this.christian.root.position.set(xn,0,-2.2),this.christian.root.rotation.y=0,this.exitDoorOpen=!1,this.houseDoorOpen=!1,this.phase="freeroam",(s=(i=this.cb).setMusic)==null||s.call(i,"gate"),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light")};this.cb.fade?this.cb.fade(e):e()}!this.interpreterExitTalked&&t.distanceTo(this.interpreter.root.position)<1.8&&(this.interpreterExitTalked=!0,this.cb.playScript([{speaker:"Interpreter",text:"Still here, Christian? The road is waiting — but it's good to pause and look back sometimes."},{speaker:"Interpreter",text:"Everything you've seen today will make more sense the further you walk. Now go — grace will carry you to the end."}]));return}if(t.z=Pt.clamp(t.z,-14,14),t.x>Me-1.5&&(this.phase==="approach"||this.phase==="knock")&&(t.x=Math.min(t.x,Me-1.5)),t.x>Me+1){const e=Math.abs(t.x-xn)<4;t.z=Pt.clamp(t.z,e?-6.5:-1.6,1.6)}if(t.x=Pt.clamp(t.x,-62,ia+3),this.hasPassedGate&&!this.revisit&&this.phase==="freeroam"&&t.x<Me-1.2?(t.x=Me-1.2,this.peekBlocked||(this.peekBlocked=!0,this.peekVolley=5,this.peekArrowTimer=0,this.cb.rumbleSound(),this.cb.playScript([{speaker:"Goodwill",text:"Careful! Beelzebub's archers never sleep — stay behind the wall, Christian!"}]))):t.x>Me+.5&&(this.peekBlocked=!1),this.goodwill.root.visible&&(this.phase==="freeroam"||this.phase==="done")&&t.distanceTo(this.goodwill.root.position)<2.2?this.goodwillNear||(this.goodwillNear=!0,this.cb.playScript([{speaker:"Goodwill",text:"Still here, are you? The Highway lies straight ahead, Christian — I told you true."},{speaker:"Goodwill",text:"Keep that shining light before your eyes. It has never yet led a pilgrim wrong."}])):this.goodwillNear=!1,this.revisit){(t.x<-58||t.x>ia-2)&&this.cb.onExit();return}if(this.phase==="freeroam"&&!this.houseGreeted&&t.distanceTo(t1)<2.4){this.houseGreeted=!0,this.phase="houseGreet",this.houseDoorOpen=!0,this.christian.root.rotation.y=Math.PI,this.interpreter.root.rotation.y=0,this.cb.playScript(i1,()=>{const e=()=>{var i,s;this.phase="house",this.stationIndex=0,this.christian.root.position.set(Ze,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(Ze+1.5,0,-1.8),this.interpreter.root.rotation.y=-Math.PI/2,(s=(i=this.cb).setMusic)==null||s.call(i,"interpreter"),this.cb.setObjective("🏚 The House of the Interpreter — walk on to see what he shows you")};this.cb.fade?this.cb.fade(e):e()});return}if(this.phase==="freeroam"&&!this.houseGreeted&&!this.houseCalledOut&&t.x>xn+5&&(this.houseCalledOut=!0,this.cb.playScript([{speaker:"Interpreter",text:"Christian! Christian — over here! Won't you stop a moment at an old owl's door?"}])),this.phase==="approach"){const e=[[-45,[{speaker:"Christian",text:"*mutter* …Left my home. Lost my friend in a bog. Nearly crushed beneath a burning mountain. And still this burden sits like a millstone…"},{speaker:"Christian",text:"Is this truly the way? There is no one even to ask."}]],[-30,[{speaker:"Christian",text:"…What a fool I was, to listen to Worldly Wiseman. Smooth words, smooth road — and it led me straight under Sinai."},{speaker:"Christian",text:"Evangelist forgave me. But will the Gate? What if they ask where I have been… and shut it in my face?"}]],[-15,[{speaker:"Christian",text:"So far… and so straight. Not one turning. As if the road itself were telling me: no more byways, old bear."},{speaker:"Christian",text:'*sigh* Help said it. Evangelist said it. "Knock, and it will be opened." Keep walking, Christian. Just keep walking.'}]]];if(this.mutterIndex<e.length&&t.x>e[this.mutterIndex][0]){const i=e[this.mutterIndex][1];this.mutterIndex++,this.cb.playScript(i);return}if(t.x>Me-3.2&&Math.abs(t.z)<4){this.phase="knock",this.christian.root.rotation.y=Math.PI/2,this.cb.playScript([{speaker:"",text:'The gate is shut. Above it, an old inscription reads: "Knock, and it will be opened to you."'},{speaker:"Christian",text:"*knock… knock…* May I enter here? Will he within open even to a broken sinner like me?"},{speaker:"???",text:"(a deep, warm voice, like far-off thunder that means no harm) Who knocks?"},{speaker:"Christian",text:"A poor burdened sinner, come from the City of Destruction. I am bound for the Celestial City — they told me the way lies through this Gate."},{speaker:"Goodwill",text:"Then I gladly open it. We turn no one away who knocks — no one."}],()=>{this.doorOpen=!0,this.goodwill.root.visible=!0,this.cb.blipSound(),this.cb.playScript([{speaker:"",text:"The doors swing open — and there stands a LION, golden-maned and robed in white, filling the gateway like sunrise."},{speaker:"Goodwill",text:"I am Goodwill, keeper of this Gate. But don't stand in the open, friend—"},{speaker:"Goodwill",text:"That castle over there belongs to BEELZEBUB, and his archers shoot at every pilgrim who dares my doorstep. QUICKLY — give me your paw!"}],()=>{this.phase="volley",this.volleyT=0,this.arrowTimer=0,this.cb.rumbleSound(),this.cb.setObjective("🏹 Arrows from the dark castle…!")})});return}}}fireArrow(){const t=this.arrows.find(i=>!i.active);if(!t)return;const e=this.christian.root.position;t.active=!0,t.t=0,t.from.set(Tr.x-1,7.5,Tr.z+2),t.to.set(e.x-2.5+Math.random()*5,.1,e.z+1.5+Math.random()*3.5),t.g.visible=!0}update(t,e,i){if(!this.built)return;if(Ct(this.christian,e,i&&this.moveFactor()>0),this.goodwill.root.visible&&Ct(this.goodwill,e+.7,!1),i&&(this.footDustTimer-=t,this.footDustTimer<=0)){this.footDustTimer=.13;const o=this.christian.root.position,a=this.footDust.find(r=>r.life>=1);a&&(a.life=0,a.vx=(Math.random()-.5)*.8,a.vz=(Math.random()-.5)*.8,a.mesh.position.set(o.x+(Math.random()-.5)*.5,.12,o.z+(Math.random()-.5)*.5),a.mesh.visible=!0)}for(const o of this.footDust){if(o.life>=1)continue;o.life=Math.min(1,o.life+t*2.2),o.mesh.position.x+=o.vx*t,o.mesh.position.z+=o.vz*t,o.mesh.position.y+=t*.9;const a=.6+o.life*1.6;o.mesh.scale.setScalar(a),o.mat.opacity=.55*(1-o.life),o.life>=1&&(o.mesh.visible=!1)}if(this.interpreterTarget){const o=this.interpreter.root.position,a=this.interpreterTarget.x-o.x,r=Math.abs(a)<.3,c=(!(this.phase==="house"||this.phase==="houseExit")||r?this.interpreterTarget.z:0)-o.z,u=Math.hypot(a,c);if(u>.12){const d=Math.min(9*t,u);o.x+=a/u*d,o.z+=c/u*d,this.interpreter.root.rotation.y=Math.atan2(a,c),Ct(this.interpreter,e+1.1,!0)}else r?(o.set(this.interpreterTarget.x,0,this.interpreterTarget.z),this.interpreter.root.rotation.y=this.interpreterFaceOnArrive,this.interpreterTarget=null,Ct(this.interpreter,e+1.1,!1)):Ct(this.interpreter,e+1.1,!1)}else Ct(this.interpreter,e+1.1,!1);this.dustBurst+=(this.dustBurstTarget-this.dustBurst)*Math.min(t*1.6,1);for(const o of this.dust)this.dustBurst>.02&&(o.life+=t*(.4+this.dustBurst*1.6),o.life>=1&&(o.life-=1,o.mesh.position.set(o.baseX,.3,o.baseZ)),o.mesh.position.y+=t*(.4+this.dustBurst*.6)),o.mat.opacity=this.dustBurst*.55*Math.sin(o.life*Math.PI);if(this.sprinkleT>0&&(this.sprinkleT-=t,this.sprinkleTimer-=t,this.sprinkleTimer<=0)){this.sprinkleTimer=.03;const o=this.sprinkle.find(a=>!a.active);if(o){const a=ye[0]+(Math.random()-.5)*2.8,r=-3.2+(Math.random()-.5)*2.4;o.active=!0,o.vy=3.5+Math.random(),o.mesh.position.set(a,1.8+Math.random()*.4,r),o.mesh.visible=!0,o.mat.opacity=.85}}for(const o of this.sprinkle)o.active&&(o.mesh.position.y-=o.vy*t,o.mesh.position.y<=.05&&(o.active=!1,o.mesh.visible=!1));for(let o=0;o<this.fireMotes.length;o++){const a=this.fireMotes[o],r=.8+.35*Math.abs(Math.sin(e*6.5+o*1.9));a.scale.set(1,r,1)}this.fireGlow&&(this.fireGlow.intensity=1.5+Math.abs(Math.sin(e*5))*.8);for(const o of this.embers)o.life+=t*.6,o.life>=1&&(o.life-=1,o.mesh.position.set(o.baseX,.3,o.baseZ)),o.mesh.position.y+=t*.7,o.mesh.position.x+=Math.sin(e*3+o.baseZ)*t*.15,o.mat.opacity=.8*(1-o.life);if(this.devilArm&&(this.devilArm.rotation.x=-.9+Math.sin(e*2.2)*.5),this.christArm&&(this.christArm.rotation.x=-.9+Math.sin(e*1.8+1)*.5),this.dropTimer-=t,this.dropTimer<=0){this.dropTimer=.12;const o=this.waterDrops.find(r=>!r.active);o&&(o.active=!0,o.mesh.position.set(ye[2]-1.2+(Math.random()-.5)*.3,.85,-1.7),o.mesh.visible=!0,o.mat.opacity=.85);const a=this.oilDrops.find(r=>!r.active);a&&(a.active=!0,a.mesh.position.set(ye[2]+1.2+(Math.random()-.5)*.3,.85,-1.7),a.mesh.visible=!0,a.mat.opacity=.9)}for(const o of this.waterDrops)o.active&&(o.mesh.position.y-=t*2.2,o.mesh.position.y<=.08&&(o.active=!1,o.mesh.visible=!1));for(const o of this.oilDrops)o.active&&(o.mesh.position.y-=t*2.2,o.mesh.position.y<=.08&&(o.active=!1,o.mesh.visible=!1));if(this.sweeper&&this.sweeperArm){const o=this.dustBurst>.1;this.sweeperArm.rotation.z=o?Math.sin(e*11)*.9:0,this.sweeper.root.position.x=ye[0]-.9+(o?Math.sin(e*3)*.3:0),Ct(this.sweeper,e*4,o)}if(this.waterer&&this.watererArm){const o=this.sprinkleT>0;this.watererArm.rotation.x=o?-1.1+Math.sin(e*5)*.4:-.1,Ct(this.waterer,e*3,!1)}this.toyBall&&(this.toyBall.position.y=.16+Math.abs(Math.sin(e*2.6))*.18),this.passionArm&&(this.passionArm.rotation.x=-.3+Math.sin(e*2.4)*.3),this.dreamer&&(this.dreamer.root.rotation.z=Math.sin(e*19)*.05,this.dreamer.root.rotation.x=Math.sin(e*23)*.04,this.dreamer.head.rotation.y=Math.sin(e*14)*.06);for(let o=0;o<this.sweatDrops.length;o++){const a=this.sweatDrops[o],r=(e*.9+o*.5)%1;a.mesh.position.y=a.baseY-r*.45,a.mat.opacity=.85*(1-r)}if(this.knightState==="fighting")this.knightT+=t,this.knightArm&&(this.knightArm.rotation.x=-.3+Math.sin(this.knightT*11)*1.1),this.knightShieldArm&&(this.knightShieldArm.rotation.z=.2+Math.sin(this.knightT*7+1)*.15),this.knight&&(this.knight.root.rotation.z=Math.sin(this.knightT*8)*.06,Ct(this.knight,e,!1)),this.guards.forEach((o,a)=>{this.guardStagger[a]=Math.max(0,this.guardStagger[a]-t*2.5),Math.random()<t*1.8&&(this.guardStagger[a]=1);const r=this.guardStagger[a];o.root.position.x=this.guardBaseX[a]+Math.sin(this.knightT*22+a)*.08*r,o.root.rotation.z=Math.sin(this.knightT*16+a)*.35*r,Ct(o,e+a,!1)}),this.knightT>2.6&&(this.knightT=.5);else if(this.knightState==="entering"&&this.knight){this.knightT+=t;const o=this.knight.root.position,a=this.knightDoorPos.x-o.x,r=this.knightDoorPos.z-o.z,l=Math.hypot(a,r);if(l>.15){const h=Math.min(3*t,l);o.x+=a/l*h,o.z+=r/l*h,this.knight.root.rotation.y=Math.atan2(a,r),Ct(this.knight,e,!0)}else this.knightState="done",this.knight.root.visible=!1}else this.knight&&this.knight.root.visible&&Ct(this.knight,e+2,!1);const s=this.doorOpen?1.7:0;if(this.doorL&&this.doorR&&(this.doorL.rotation.y+=(-s-this.doorL.rotation.y)*.06,this.doorR.rotation.y+=(s-this.doorR.rotation.y)*.06),this.cottageDoor){const o=this.houseDoorOpen?-2.1:0;this.cottageDoor.rotation.y+=(o-this.cottageDoor.rotation.y)*.08}if(this.exitDoor){const o=this.exitDoorOpen?-2.1:0;this.exitDoor.rotation.y+=(o-this.exitDoor.rotation.y)*.08}for(let o=0;o<this.castleGlows.length;o++)this.castleGlows[o].material.opacity=.5+.4*Math.abs(Math.sin(e*1.7+o*1.9));this.peekVolley>0&&(this.peekArrowTimer-=t,this.peekArrowTimer<=0&&(this.peekArrowTimer=.15,this.fireArrow(),this.peekVolley--)),this.phase==="volley"&&(this.volleyT+=t,this.arrowTimer-=t,this.arrowTimer<=0&&this.volleyT<2&&(this.arrowTimer=.22,this.fireArrow()),this.volleyT>2.4&&(this.phase="inside",this.christian.root.position.set(Me+2.4,0,1.3),this.christian.root.rotation.y=Math.PI,this.goodwill.root.position.set(Me+3.6,0,-1.7),this.goodwill.root.rotation.y=0,this.cb.setObjective("🚪 Safe behind the Gate"),this.cb.blipSound(),this.cb.playScript([{speaker:"",text:"A great paw closes over Christian's, and the world blurs — then the Gate booms shut behind them. The arrows thud harmlessly against the far side."},{speaker:"Goodwill",text:"There. Behind this wall no arrow of his has ever reached. Be welcome, Christian — you are safe now."},{speaker:"Christian",text:"*catching his breath* You… you know my name?"},{speaker:"Goodwill",text:"I know every pilgrim who knocks, little bear. I have been expecting you a long while. Now tell me — why do you come alone, and so late?"},{speaker:"Christian",text:"I fell in the Slough of Despond, and my neighbour turned home. Then a smooth-tongued gentleman turned me aside to Mount Sinai, and I was nearly crushed. I am ashamed of it all, sir."},{speaker:"Goodwill",text:"And yet you are HERE — muddy, singed, and standing at my Gate. That is the whole of what matters. This door was hung for the bruised and the muddy, or it was hung for no one."},{speaker:"Christian",text:"Then… may I ask one thing more? This burden on my back. I have carried it so long. Can it be taken off here?"},{speaker:"Goodwill",text:"Not here, dear pilgrim. Be patient a little longer. Ahead lies the place of deliverance — there it will loosen of itself, and fall from your back, and roll away where no one will ever find it."},{speaker:"Goodwill",text:"Look east. That is the King's Highway — straight and narrow, built by the King and His Son. Keep to it; turn neither left nor right, and you cannot lose your way."},{speaker:"Christian",text:"Straight and narrow. I will keep to it, Goodwill — I promise. My heart feels lighter already… though my back, I confess, does not."},{speaker:"Goodwill",text:"*a low, warm laugh, like summer thunder* It will, Christian. Sooner than you think. Now go — and grace go with you."}],()=>{this.phase="freeroam",this.hasPassedGate=!0,this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light")})));for(const o of this.arrows){if(!o.active)continue;if(o.t+=t*1.4,o.t>=1){o.t>1.8?(o.active=!1,o.g.visible=!1):(o.g.position.set(o.to.x,.35,o.to.z),o.g.rotation.set(1.15,0,0));continue}const a=Pt.lerp(o.from.x,o.to.x,o.t),r=Pt.lerp(o.from.z,o.to.z,o.t),l=Pt.lerp(o.from.y,o.to.y,o.t)+Math.sin(o.t*Math.PI)*4,h=Math.min(o.t+.05,1),c=Pt.lerp(o.from.x,o.to.x,h),u=Pt.lerp(o.from.z,o.to.z,h),d=Pt.lerp(o.from.y,o.to.y,h)+Math.sin(h*Math.PI)*4;o.g.position.set(a,l,r),o.g.lookAt(c,d,u)}if(this.lightBeam&&this.lightBeam.visible){const o=1+Math.sin(e*2.4)*.12;this.lightBeam.scale.set(o,1,o)}this.phase==="freeroam"&&this.christian.root.position.x>ia-2&&(this.phase="done",this.cb.onComplete())}}const Zh=-32,so=11,r1=7,l1=-1.2,bs=new C(5.2,0,-2.8),oo=36;class h1{constructor(t){T(this,"scene",new Ei);T(this,"phase","approach");T(this,"cb");T(this,"christian");T(this,"oldClothes");T(this,"newClothes");T(this,"burdenOnBack");T(this,"seal");T(this,"scroll");T(this,"angels",[]);T(this,"angelTargets",[]);T(this,"burdenProp");T(this,"rollT",0);T(this,"rollFrom",new C);T(this,"descendT",0);T(this,"angelBob",[0,0,0]);T(this,"lightBeam",null);T(this,"lightHalo",null);T(this,"crossGlow",null);T(this,"sparkles",[]);T(this,"notes",[]);T(this,"noteTimer",0);T(this,"footDust",[]);T(this,"footDustTimer",0);T(this,"revisit",!1);T(this,"built",!1);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"none",sling:!0,plump:!0});const e=this.christian.body;this.oldClothes=new at,this.oldClothes.add(p(1.12,.54,.8,9418968,0,.53,0)),e.add(this.oldClothes);const i=p(.32,.28,.36,9418968,0,-.1,0),s=p(.32,.28,.36,9418968,0,-.1,0);this.christian.armL.add(i),this.christian.armR.add(s),this.oldClothes.userData.sleeves=[i,s],this.newClothes=new at,this.newClothes.add(p(1.14,.56,.82,M.robeWhite,0,.53,0)),this.newClothes.add(p(1.18,.14,.86,M.robeGold,0,.3,0)),this.newClothes.add(p(.34,.12,.06,M.robeGold,0,.68,.44)),e.add(this.newClothes);const o=p(.34,.3,.38,M.robeWhite,0,-.1,0),a=p(.34,.3,.38,M.robeWhite,0,-.1,0);this.christian.armL.add(o),this.christian.armR.add(a),this.newClothes.userData.sleeves=[o,a],this.burdenOnBack=new at,this.burdenOnBack.add(p(.88,.62,.54,M.burden,0,.45,-.56)),this.burdenOnBack.add(p(.7,.5,.46,8880506,0,.96,-.54)),this.burdenOnBack.add(p(.5,.36,.36,M.burdenStrap,0,1.28,-.52)),this.burdenOnBack.add(p(.1,.6,.08,M.burdenStrap,-.3,.45,.31)),this.burdenOnBack.add(p(.1,.6,.08,M.burdenStrap,.3,.45,.31)),e.add(this.burdenOnBack),this.seal=p(.1,.1,.04,M.robeGold,0,.62,.42),this.seal.castShadow=!1,this.christian.head.add(this.seal),this.scroll=new at;const r=new Q(new De(.09,.09,.5,8),ue(16643811));r.rotation.z=Math.PI/2,this.scroll.add(r),this.scroll.add(p(.1,.2,.2,13194079,0,0,0)),this.scroll.position.set(0,-.5,.2),this.christian.armR.add(this.scroll),this.burdenProp=new at,this.burdenProp.add(p(.88,.62,.54,M.burden,0,0,0)),this.burdenProp.add(p(.7,.5,.46,8880506,0,.5,.02)),this.burdenProp.add(p(.5,.36,.36,M.burdenStrap,0,.84,.04)),this.burdenProp.visible=!1}groundY(t,e){const i=Math.hypot(t,e);if(i>=so)return 0;const s=1-(i/so)**2;return r1*s*s*(3-2*s)}dressOld(){this.oldClothes.visible=!0;for(const t of this.oldClothes.userData.sleeves)t.visible=!0;this.newClothes.visible=!1;for(const t of this.newClothes.userData.sleeves)t.visible=!1;this.seal.visible=!1,this.scroll.visible=!1}dressNew(t){this.oldClothes.visible=!1;for(const e of this.oldClothes.userData.sleeves)e.visible=!1;this.newClothes.visible=!0;for(const e of this.newClothes.userData.sleeves)e.visible=!0;this.seal.visible=t,this.scroll.visible=t}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(14086143),t.fog=new hi(14086143,40,100),t.add(new Ai(15792383,12903096,1.05));const e=new Ni(M.sun,1.5);e.position.set(-24,40,22),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e);const i=new Q(new _t(150,1,90),ue(M.grass));i.position.y=-.5,i.receiveShadow=!0,t.add(i);for(let m=0;m<55;m++){const y=-50+Math.random()*100,x=-35+Math.random()*70;if(Math.hypot(y,x)<so+1)continue;const g=p(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?M.grassLight:M.grassDark,y,.05,x);g.castShadow=!1,t.add(g)}const s=[10411671,M.grass,11069091],o=9;for(let m=0;m<o;m++){const y=so*(1-m/o)+.5,x=Math.max(this.groundY(so*(1-(m+.7)/o),0),.5),g=new Q(new De(y,y+.7,x,24),ue(s[m%3]));g.position.set(0,x/2,0),g.receiveShadow=!0,g.castShadow=!0,t.add(g)}for(let m=0;m<14;m++){const y=Math.random()*Math.PI*2,x=3+Math.random()*7,g=Math.cos(y)*x,f=Math.sin(y)*x,E=p(.16,.16,.16,[M.flowerYellow,M.flowerPink,M.flowerBlue][m%3],g,this.groundY(g,f)+.1,f);E.castShadow=!1,t.add(E)}for(let m=0;m<=24;m++){const y=-34+m*2.9,x=(Math.random()-.5)*.9,g=p(.85+Math.random()*.55,.14,1.6+Math.random()*.7,M.path,y,this.groundY(y,x)+.06,x);g.castShadow=!1,t.add(g)}const a=new at;a.add(p(.55,4.6,.55,M.woodDark,0,2.3,0)),a.add(p(2.7,.55,.55,M.woodDark,0,3.5,0));const r=new Q(new We(2.6,20,16),new Mt({color:16774072,transparent:!0,opacity:.22,depthWrite:!1}));r.position.y=3.2,a.add(r),this.crossGlow=r;const l=new Si(16773312,1.2,20);l.position.y=3.5,a.add(l),a.position.set(0,this.groundY(0,-2.2),-2.2),t.add(a);const h=new at;h.add(p(2.6,2,2.2,12170412,0,1,0)),h.add(p(2.9,.5,2.5,11051674,0,2.2,0)),h.add(p(.2,1.2,1,3024931,-1.25,.7,0));const c=new Q(new De(.9,.9,.4,14),ue(11051674));c.rotation.x=Math.PI/2,c.rotation.z=Math.PI/2,c.position.set(-1.2,.9,1.7),h.add(c),h.position.set(bs.x,this.groundY(bs.x,bs.z),bs.z),t.add(h);for(const[m,y,x]of[[-26,-7,!0],[-20,8,!1],[-14,-9,!0],[16,7,!1],[22,-8,!0],[28,6,!1]]){const g=new at;g.add(p(.5,1.6,.5,M.trunk,0,.8,0)),g.add(p(1.9,1.3,1.9,x?M.leafPink:M.leaf,0,2.2,0)),g.add(p(1.2,.9,1.2,x?M.leafPink:M.leaf,0,3.1,0)),g.position.set(m,0,y),t.add(g)}const u=new Q(new De(1.4,2,14,18,1,!0),new Mt({color:M.light,transparent:!0,opacity:.5,side:Ve,depthWrite:!1}));u.position.set(oo+1.5,7,0),t.add(u),this.lightBeam=u;const d=new Q(new We(2.4,18,14),new Mt({color:16775645,transparent:!0,opacity:.4,depthWrite:!1}));d.position.set(oo+1.5,1.6,0),t.add(d),this.lightHalo=d;for(let m=0;m<3;m++){const y=Ft({species:"bear",fur:15917769,outfit:"robe",outfitColor:M.robeWhite,scale:1.05}),x=new Q(new Ks(.32,.06,8,18),new Mt({color:M.robeGold}));x.rotation.x=Math.PI/2,x.position.y=1.15,y.head.add(x),y.root.visible=!1,t.add(y.root),this.angels.push(y)}for(let m=0;m<26;m++){const y=new Mt({color:16773304,transparent:!0,opacity:0}),x=new Q(new _t(.16,.16,.16),y);x.visible=!1,t.add(x),this.sparkles.push({mesh:x,m:y,life:1,vx:0,vy:0,vz:0})}for(let m=0;m<8;m++){const y=new Mt({color:16777215,transparent:!0,opacity:0}),x=new Q(new _t(.2,.28,.06),y);x.visible=!1,t.add(x),this.notes.push({mesh:x,m:y,life:1})}for(let m=0;m<16;m++){const y=new Mt({color:16777215,transparent:!0,opacity:0}),x=new Q(new _t(.22,.22,.22),y);x.visible=!1,x.castShadow=!1,t.add(x),this.footDust.push({mesh:x,mat:y,life:1,vx:0,vz:0})}t.add(this.burdenProp),t.add(this.christian.root)}enter(t){var e,i,s,o;this.build(),this.revisit=t,this.rollT=0,this.descendT=0,this.burdenProp.visible=!1;for(const a of this.angels)a.root.visible=!1;return this.christian.root.position.set(t?-28:-30,0,0),this.christian.root.rotation.y=Math.PI/2,t?(this.phase="done",this.dressNew(!0),(i=(e=this.cb).setMusic)==null||i.call(e,"cross"),this.cb.setObjective("✝ The Cross stands quiet on the hill — the light in the east leads on")):(this.phase="approach",this.dressOld(),this.burdenOnBack.visible=!0,(o=(s=this.cb).setMusic)==null||o.call(s,"gate"),this.cb.setObjective("⛰ A green hill rises ahead — something stands at the top…")),{christian:this.christian}}moveFactor(){return this.phase==="wonder"||this.phase==="rolling"||this.phase==="rejoice"||this.phase==="descend"||this.phase==="angels"?0:1}afterMove(){const t=this.christian.root.position;if(t.z=Pt.clamp(t.z,-10,10),t.x=Pt.clamp(t.x,Zh-1,oo+2),t.y=this.groundY(t.x,t.z),this.revisit||this.phase==="done"){(t.x<Zh||t.x>oo)&&this.cb.onExit();return}if(this.phase==="approach"&&t.x>l1){this.phase="wonder",this.christian.root.rotation.y=Math.PI,this.cb.playScript([{speaker:"",text:"At the top of the hill stands a Cross — and a little below, on the slope, an open tomb."},{speaker:"Christian",text:"The Cross… so this is the place Evangelist spoke of."},{speaker:"Christian",text:"Wait — something is moving. The straps… they're loosening on their own—!"}],()=>{this.phase="rolling",this.rollT=0,this.burdenOnBack.visible=!1,this.rollFrom.set(t.x-.4,t.y+.9,t.z),this.burdenProp.position.copy(this.rollFrom),this.burdenProp.rotation.set(0,0,0),this.burdenProp.visible=!0});return}this.phase==="joy"&&t.x>oo&&(this.phase="done",this.cb.onComplete())}burstSparkles(t,e,i=1){let s=0;for(const o of this.sparkles){if(s>=e)break;o.life<1||(s++,o.life=0,o.vx=(Math.random()-.5)*2.4*i,o.vy=1.2+Math.random()*2,o.vz=(Math.random()-.5)*2.4*i,o.mesh.position.copy(t),o.mesh.visible=!0)}}runAngelSequence(){this.phase="angels";const t=this.christian.root.position;this.cb.playScript([{speaker:"",text:"Three Shining Ones stand before him, bright as morning."},{speaker:"First Shining One",text:"Peace be with you, Christian. Your sins are forgiven."}],()=>{this.burstSparkles(new C(t.x,t.y+1.2,t.z),14,1.2),this.cb.blipSound(),this.dressNew(!1),this.cb.playScript([{speaker:"Second Shining One",text:"I take from you these worn, travel-stained clothes… and dress you in garments new and shining."},{speaker:"",text:"His old rags are gone. Christian stands in spotless white, a golden sash about his waist."}],()=>{this.burstSparkles(new C(t.x,t.y+1.8,t.z),8,.6),this.cb.blipSound(),this.seal.visible=!0,this.scroll.visible=!0,this.cb.playScript([{speaker:"Third Shining One",text:"And I set this mark upon your forehead, and place in your paw a sealed scroll."},{speaker:"Third Shining One",text:"Read it as you travel, to comfort you on the way — and hand it in at the gate of the Celestial City. It is the King's own promise that you belong to Him."},{speaker:"Christian",text:"Forgiven… clothed… and sealed. I came up this hill bent double, and I will go down it singing!"}],()=>{var e,i;this.phase="joy";for(const s of this.angels)s.root.visible=!1;this.burstSparkles(new C(t.x,t.y+2.5,t.z),10,2),(i=(e=this.cb).setMusic)==null||i.call(e,"cross"),this.cb.setObjective("🎵 Walk on east, down the hill and into the light, singing!")})})})}update(t,e,i){if(this.built){if(Ct(this.christian,e,i&&this.moveFactor()>0),this.phase==="rolling"){this.rollT+=t;const o=Math.min(1,this.rollT/2.6),a=o*o*(3-2*o),r=Pt.lerp(this.rollFrom.x,bs.x-1.2,a),l=Pt.lerp(this.rollFrom.z,bs.z,a);this.burdenProp.position.set(r,this.groundY(r,l)+.45,l),this.burdenProp.rotation.z-=t*(2+o*8),o>=1&&(this.burdenProp.visible=!1,this.burstSparkles(this.burdenProp.position.clone().add(new C(0,.8,0)),12,1.4),this.cb.blipSound(),this.phase="rejoice",this.cb.playScript([{speaker:"",text:"The burden tumbles down the hill, rolls in at the mouth of the tomb — and is never seen again."},{speaker:"Christian",text:"It's gone… it's truly gone! All this way I carried it, and here it fell off by itself!"},{speaker:"Christian",text:"Not by anything I have done — He has borne my guilt for me. He has given me rest by His sorrow, and life by His death."}],()=>{this.phase="descend",this.descendT=0;const h=this.christian.root.position;this.angelTargets=[new C(h.x-2.2,0,h.z+1.6),new C(h.x,0,h.z+2.8),new C(h.x+2.2,0,h.z+1.6)],this.angels.forEach((c,u)=>{const d=this.angelTargets[u];c.root.position.set(d.x,this.groundY(d.x,d.z)+9,d.z),c.root.rotation.y=0,c.root.visible=!0}),this.cb.setObjective("✨ Light gathers on the hilltop…")}))}if(this.phase==="descend"){this.descendT+=t;let s=!0;this.angels.forEach((o,a)=>{const r=this.angelTargets[a],l=this.groundY(r.x,r.z),h=a*.35,c=Math.min(1,Math.max(0,(this.descendT-h)/2)),u=1-(1-c)**3;o.root.position.y=l+9*(1-u),c<1&&(s=!1),Math.random()<.06&&this.burstSparkles(o.root.position.clone().add(new C(0,1.5,0)),1,.5)}),s&&this.descendT>2.9&&this.runAngelSequence()}for(let s=0;s<this.angels.length;s++){const o=this.angels[s];if(o.root.visible){if(this.phase==="angels"){const a=this.angelTargets[s];o.root.position.y=this.groundY(a.x,a.z)+.15+Math.sin(e*1.8+s*2.1)*.08}Ct(o,e+s*1.3,!1)}}if(this.crossGlow&&(this.crossGlow.material.opacity=.16+.12*Math.abs(Math.sin(e*1.2))),this.lightBeam){const s=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(s,1,s)}this.lightHalo&&(this.lightHalo.material.opacity=.3+.2*Math.abs(Math.sin(e*1.7)));for(const s of this.sparkles)s.life>=1||(s.life=Math.min(1,s.life+t*1.1),s.mesh.position.x+=s.vx*t,s.mesh.position.y+=s.vy*t,s.mesh.position.z+=s.vz*t,s.vy-=t*1.4,s.m.opacity=.9*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if((this.phase==="joy"||this.revisit&&this.phase==="done")&&i&&(this.noteTimer-=t,this.noteTimer<=0)){this.noteTimer=.55;const s=this.notes.find(o=>o.life>=1);if(s){const o=this.christian.root.position;s.life=0,s.mesh.position.set(o.x+(Math.random()-.5)*.8,o.y+2.2,o.z+(Math.random()-.5)*.8),s.mesh.visible=!0}}for(const s of this.notes)s.life>=1||(s.life=Math.min(1,s.life+t*.8),s.mesh.position.y+=t*1.1,s.mesh.rotation.y+=t*3,s.m.opacity=.85*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if(i&&this.moveFactor()>0&&(this.footDustTimer-=t,this.footDustTimer<=0)){this.footDustTimer=.13;const s=this.christian.root.position,o=this.footDust.find(a=>a.life>=1);o&&(o.life=0,o.vx=(Math.random()-.5)*.8,o.vz=(Math.random()-.5)*.8,o.mesh.position.set(s.x+(Math.random()-.5)*.5,s.y+.12,s.z+(Math.random()-.5)*.5),o.mesh.visible=!0)}for(const s of this.footDust){if(s.life>=1)continue;s.life=Math.min(1,s.life+t*2.2),s.mesh.position.x+=s.vx*t,s.mesh.position.z+=s.vz*t,s.mesh.position.y+=t*.9;const o=.6+s.life*1.6;s.mesh.scale.setScalar(o),s.mat.opacity=.55*(1-s.life),s.life>=1&&(s.mesh.visible=!1)}}}}const Jh=-32,ao=44,na=-14,c1=0,d1=26,ro=10;class u1{constructor(t){T(this,"scene",new Ei);T(this,"phase","walk");T(this,"cb");T(this,"christian");T(this,"sleepers",[]);T(this,"formalist");T(this,"hypocrisy");T(this,"climbT",-1);T(this,"nightP",0);T(this,"hemi",null);T(this,"sunLight",null);T(this,"stars",[]);T(this,"starMat",null);T(this,"moon",null);T(this,"moonMat",null);T(this,"fireflies",[]);T(this,"zzz",[]);T(this,"zzzTimer",0);T(this,"lightBeam",null);T(this,"lightHalo",null);T(this,"revisit",!1);T(this,"built",!1);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:M.robeWhite,sling:!0,plump:!0}),this.christian.body.add(p(1.18,.14,.86,M.robeGold,0,.3,0));const e=p(.1,.1,.04,M.robeGold,0,.62,.42);e.castShadow=!1,this.christian.head.add(e);const i=Ft({species:"bear",fur:14660974,outfit:"shirt",outfitColor:11060386});for(const l of[-1,1]){const h=p(.2,.44,.14,13212498,.42*l,.7,.06);h.rotation.z=.35*l,i.head.add(h)}const s=Ft({species:"bear",fur:10129274,outfit:"shirt",outfitColor:12102286});for(const l of[-1,1]){const h=p(.16,.3,.05,6182472,.24*l,.52,.42);h.rotation.z=-.5*l,s.head.add(h)}const o=Ft({species:"cat",fur:15126464,outfit:"dress",outfitColor:14198968});this.sleepers=[i,s,o];const a=(l,h,c)=>{l.body.add(p(.4,.42,.06,16447212,0,.5,.36)),l.body.add(p(.2,.1,.07,c,0,.7,.37)),l.body.add(p(.06,.1,.07,3025448,0,.7,.38)),l.body.add(p(.5,.34,.1,h,0,.12,-.32))},r=(l,h,c)=>{l.body.add(p(.18,.18,.62,h,.2,.28,-.62)),l.body.add(p(.18,.6,.18,h,.2,.62,-.95)),l.body.add(p(.22,.24,.22,c,.2,1.02,-.95))};this.formalist=Ft({species:"cat",fur:4143930,outfit:"shirt",outfitColor:3817290}),a(this.formalist,3817290,13194079),r(this.formalist,4143930,16447212),this.hypocrisy=Ft({species:"cat",fur:14253898,outfit:"shirt",outfitColor:6965858}),a(this.hypocrisy,6965858,3825546),r(this.hypocrisy,14253898,16447212),this.hypocrisy.head.add(p(.2,.16,.14,14253898,0,.22,.5))}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(16767400),t.fog=new hi(16767400,40,100),this.hemi=new Ai(16773336,12892312,1),t.add(this.hemi);const e=new Ni(16761466,1.3);e.position.set(-30,22,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e),this.sunLight=e;const i=new Q(new _t(150,1,90),ue(9681797));i.position.y=-.5,i.receiveShadow=!0,t.add(i);for(let r=0;r<50;r++){const l=-50+Math.random()*100,h=-35+Math.random()*70,c=p(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?8826237:10798746,l,.04+Math.random()*.03,h);c.castShadow=!1,t.add(c)}for(let r=0;r<=26;r++){const l=-34+r*3,h=(Math.random()-.5)*.9,c=p(.9+Math.random()*.6,.14,1.7+Math.random()*.7,M.path,l,.07,h);c.castShadow=!1,t.add(c)}for(const[r,l,h]of[[-28,7,!0],[-22,-8,!1],[-6,8,!1],[18,8,!0],[30,-8,!1],[36,7,!0]]){const c=new at;c.add(p(.5,1.6,.5,M.trunk,0,.8,0)),c.add(p(1.9,1.3,1.9,h?M.leafPink:M.leaf,0,2.2,0)),c.add(p(1.2,.9,1.2,h?M.leafPink:M.leaf,0,3.1,0)),c.position.set(r,0,l),t.add(c)}const s=[[na-2.4,4.2,.4],[na,5.6,-.3],[na+2.4,4.4,.2]];this.sleepers.forEach((r,l)=>{const[h,c,u]=s[l];r.root.position.set(h,.42,c),r.root.rotation.z=Math.PI/2,r.root.rotation.y=u,t.add(r.root);const d=p(.16,.7,.16,6183509,h+1.2,.3,c+.8);t.add(d);for(let m=0;m<3;m++){const y=new Q(new Ks(.13,.045,6,10),ue(7236196));y.position.set(h+.35+m*.32,.12,c+.55+m*.1),y.rotation.set(Math.PI/2,0,m*.7),t.add(y)}});for(let r=c1;r<=d1;r+=2)t.add(p(2.1,1.7,.8,12169378,r,.85,-3.6)),t.add(p(2.25,.25,.95,10721932,r,1.8,-3.6));this.formalist.root.position.set(ro-1.2,0,-6),this.formalist.root.visible=!1,t.add(this.formalist.root),this.hypocrisy.root.position.set(ro+1.2,0,-6),this.hypocrisy.root.visible=!1,t.add(this.hypocrisy.root),this.starMat=new Mt({color:16775392,transparent:!0,opacity:0,fog:!1});for(let r=0;r<40;r++){const l=new Q(new _t(.18,.18,.18),this.starMat);l.position.set(-55+Math.random()*110,16+Math.random()*18,-38-Math.random()*8),l.castShadow=!1,t.add(l),this.stars.push(l)}this.moonMat=new Mt({color:16118496,transparent:!0,opacity:0,fog:!1}),this.moon=new Q(new We(1.6,20,16),this.moonMat),this.moon.position.set(26,26,-40),t.add(this.moon);for(let r=0;r<10;r++){const l=new Mt({color:14217888,transparent:!0,opacity:0}),h=new Q(new _t(.12,.12,.12),l);h.position.set(-25+Math.random()*60,.8+Math.random()*1.4,-8+Math.random()*16),h.castShadow=!1,t.add(h),this.fireflies.push({mesh:h,m:l,ph:Math.random()*6.28})}for(let r=0;r<6;r++){const l=new Mt({color:16777215,transparent:!0,opacity:0}),h=new Q(new _t(.22,.26,.06),l);h.visible=!1,t.add(h),this.zzz.push({mesh:h,m:l,life:1})}const o=new Q(new De(1.4,2,14,18,1,!0),new Mt({color:M.light,transparent:!0,opacity:.5,side:Ve,depthWrite:!1,fog:!1}));o.position.set(ao+1.5,7,0),t.add(o),this.lightBeam=o;const a=new Q(new We(2.4,18,14),new Mt({color:16775645,transparent:!0,opacity:.4,depthWrite:!1,fog:!1}));a.position.set(ao+1.5,1.6,0),t.add(a),this.lightHalo=a,t.add(this.christian.root)}applyNight(){const t=this.nightP,e=new Dt(16767400),i=new Dt(10127016),s=new Dt(3095135),o=t<.5?e.lerp(i,t*2):i.lerp(s,(t-.5)*2);this.scene.background.copy(o),this.scene.fog.color.copy(o),this.hemi&&(this.hemi.intensity=1-t*.62),this.sunLight&&(this.sunLight.intensity=1.3-t*1.1),this.starMat&&(this.starMat.opacity=Math.max(0,t-.45)/.55),this.moonMat&&(this.moonMat.opacity=Math.max(0,t-.4)/.6)}enter(t){var e,i;return this.build(),this.revisit=t,this.nightP=0,this.climbT=-1,this.formalist.root.visible=!1,this.hypocrisy.root.visible=!1,this.christian.root.position.set(t?-28:-30,0,0),this.christian.root.rotation.y=Math.PI/2,(i=(e=this.cb).setMusic)==null||i.call(e,"cross"),t?(this.phase="done",this.cb.setObjective("🛣 The King's Highway lies quiet — the light in the east leads on")):(this.phase="walk",this.cb.setObjective("🛣 Follow the King's Highway east through the golden afternoon")),this.applyNight(),{christian:this.christian}}moveFactor(){return this.phase==="sleepers"||this.phase==="climb"||this.phase==="debate"?0:1}afterMove(){const t=this.christian.root.position;if(t.z=Pt.clamp(t.z,-2.6,10),t.x=Pt.clamp(t.x,Jh-1,ao+2),this.nightP=Math.max(this.nightP,Pt.clamp((t.x+30)/66,0,1)),this.revisit||this.phase==="done"){(t.x<Jh||t.x>ao)&&this.cb.onExit();return}if(this.phase==="walk"&&t.x>na-4.5){this.phase="sleepers",this.christian.root.rotation.y=Math.PI*.75,this.cb.playScript([{speaker:"",text:"A little way off the road, three figures lie fast asleep in the grass — and about their ankles, iron chains."},{speaker:"Christian",text:"Hey! Friends! Wake up! You are like sailors asleep at the top of a mast — the deep sea is right under you!"},{speaker:"Christian",text:"There are chains on your legs! If you sleep on here, the prowler of this road will take you. Get up — I'll help you out of your irons!"},{speaker:"Simple",text:"*one eye opens* Mmh? …I see no danger. *tail thumps twice, then stops*"},{speaker:"Sloth",text:"Yes… danger… terrible… just a little more sleep first…"},{speaker:"Presumption",text:"Every tub must stand on its own bottom, dear. I shall be perfectly fine. Do mind your own knitting."},{speaker:"",text:"And with that, all three roll over and sleep on."},{speaker:"Christian",text:"Asleep, in chains, and not one of them troubled by it… I cannot wake anyone who is determined to sleep. God keep them — I must go on."}],()=>{this.phase="walk2",this.cb.setObjective("🌇 Walk on east — the sun is sinking behind you")});return}if(this.phase==="walk2"&&t.x>ro-5){this.phase="climb",this.climbT=0,this.formalist.root.visible=!0,this.hypocrisy.root.visible=!0,this.cb.blipSound(),this.cb.setObjective("👀 Someone is coming over the wall…");return}this.phase==="joined"&&t.x>ao&&(this.phase="done",this.cb.onComplete())}runDebate(){this.phase="debate",this.christian.root.rotation.y=-Math.PI*.25,this.cb.playScript([{speaker:"",text:"Two travellers come scrambling over the wall and drop onto the road, dusting themselves off as though nothing could be more ordinary."},{speaker:"Christian",text:"Whoa—! Where did you two come from? And why over the WALL?"},{speaker:"Formalist",text:"From the land of Vain-Glory, just beyond. We're bound for Mount Zion — same road as you, by the look of that seal on your brow."},{speaker:"Christian",text:"But why didn't you come in through the Gate, back at the head of the way? The King has commanded that everyone enter there."},{speaker:"Hypocrisy",text:"The Gate! *laughs* All the world knows the Gate is MILES out of the way. Our people have taken this shortcut for a thousand years."},{speaker:"Formalist",text:"More than a thousand! A custom that old is as good as law — any fair judge would tell you so."},{speaker:"Christian",text:"The King will judge by His OWN law, not by your customs. Climbing the wall is rebellion against Him — however many years your people have practised it."},{speaker:"Hypocrisy",text:"Tsk. Look at us — we're ON the road now, same as you. Wall or Gate, what difference does it make?"},{speaker:"Christian",text:"I walk by the rule of the Master; you walk by your own fancies. I came in by the Gate — I carry His scroll, and His seal. What will you two show at the end of the road?"},{speaker:"Formalist",text:"We'll take our chances, friend. Come — the light is going. Let's all walk together while it lasts."},{speaker:"",text:"Christian shakes his head — but the road is wide enough for three. They walk on together as the sun slips away."}],()=>{this.phase="joined",this.cb.setObjective("🌙 Walk on east into the night — the light at the road's end still shines")})}update(t,e,i){if(this.built){Ct(this.christian,e,i&&this.moveFactor()>0),this.applyNight();for(let s=0;s<this.sleepers.length;s++){const o=this.sleepers[s];o.body.position.y=.55+Math.sin(e*1.1+s*2.2)*.03}if(this.zzzTimer-=t,this.zzzTimer<=0){this.zzzTimer=.9;const s=this.zzz.find(o=>o.life>=1);if(s){const o=this.sleepers[Math.floor(Math.random()*3)];s.life=0,s.mesh.position.copy(o.root.position).add(new C(.3,.9,0)),s.mesh.visible=!0}}for(const s of this.zzz)s.life>=1||(s.life=Math.min(1,s.life+t*.55),s.mesh.position.y+=t*.7,s.mesh.position.x+=t*.25,s.mesh.rotation.z=Math.sin(s.life*6)*.3,s.m.opacity=.8*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if(this.phase==="climb"){this.climbT+=t;const s=[[this.formalist,0,ro-1.2],[this.hypocrisy,.7,ro+1.2]];let o=!0;for(const[a,r,l]of s){const h=Pt.clamp((this.climbT-r)/1.6,0,1);h<1&&(o=!1),a.root.position.x=l,a.root.position.z=Pt.lerp(-6,-1.6,h),a.root.position.y=Math.sin(h*Math.PI)*2.3,a.root.rotation.y=0,Ct(a,e*1.6,h>0&&h<1)}o&&this.climbT>2.6&&this.runDebate()}if(this.phase==="joined"||this.phase==="done"&&!this.revisit){const s=this.christian.root.position,o=[[this.formalist,-1.9,-1.5],[this.hypocrisy,-3.2,1.3]];for(const[a,r,l]of o){if(!a.root.visible)continue;const h=a.root.position,c=s.x+r-h.x,u=s.z+l-h.z,d=Math.hypot(c,u);if(d>.2){const m=Math.min(6.6,d*2.5)*t;h.x+=c/d*m,h.z+=u/d*m,a.root.rotation.y=Math.atan2(c,u),Ct(a,e+h.x,!0)}else Ct(a,e+h.x,!1);h.y=0}}else this.phase==="debate"&&(Ct(this.formalist,e,!1),Ct(this.hypocrisy,e+1.1,!1));for(const s of this.fireflies){const o=Math.max(0,this.nightP-.55)/.45;s.m.opacity=o*(.4+.6*Math.abs(Math.sin(e*1.7+s.ph))),s.mesh.position.y+=Math.sin(e*.9+s.ph)*t*.4,s.mesh.position.x+=Math.cos(e*.6+s.ph)*t*.3}if(this.lightBeam){const s=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(s,1,s),this.lightBeam.material.opacity=.4+this.nightP*.35}this.lightHalo&&(this.lightHalo.material.opacity=.3+.2*Math.abs(Math.sin(e*1.7))+this.nightP*.2)}}}const Qh=-30,lo=40,Ss=-14,un=-8,Nn=14,Ts=9,Fn=new C(3,0,-2.2),tc=14.5;class f1{constructor(t){T(this,"scene",new Ei);T(this,"phase","walk");T(this,"cb");T(this,"christian");T(this,"pawScroll");T(this,"formalist");T(this,"hypocrisy");T(this,"deserters",!1);T(this,"timorous");T(this,"mistrust");T(this,"fleeT",0);T(this,"sleepT",0);T(this,"duskP",0);T(this,"duskTarget",0);T(this,"hemi",null);T(this,"sunLight",null);T(this,"scrollProp",null);T(this,"scrollGlow",null);T(this,"zzz",[]);T(this,"zzzTimer",0);T(this,"dust",[]);T(this,"lightBeam",null);T(this,"lightHalo",null);T(this,"revisit",!1);T(this,"built",!1);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:M.robeWhite,sling:!0,plump:!0}),this.christian.body.add(p(1.18,.14,.86,M.robeGold,0,.3,0));const e=p(.1,.1,.04,M.robeGold,0,.62,.42);e.castShadow=!1,this.christian.head.add(e),this.pawScroll=new at;const i=new Q(new De(.09,.09,.5,8),ue(16643811));i.rotation.z=Math.PI/2,this.pawScroll.add(i),this.pawScroll.add(p(.1,.2,.2,13194079,0,0,0)),this.pawScroll.position.set(0,-.5,.2),this.christian.armR.add(this.pawScroll);const s=(a,r,l)=>{a.body.add(p(.4,.42,.06,16447212,0,.5,.36)),a.body.add(p(.2,.1,.07,l,0,.7,.37)),a.body.add(p(.06,.1,.07,3025448,0,.7,.38)),a.body.add(p(.5,.34,.1,r,0,.12,-.32))},o=(a,r,l)=>{a.body.add(p(.18,.18,.62,r,.2,.28,-.62)),a.body.add(p(.18,.6,.18,r,.2,.62,-.95)),a.body.add(p(.22,.24,.22,l,.2,1.02,-.95))};this.formalist=Ft({species:"cat",fur:4143930,outfit:"shirt",outfitColor:3817290}),s(this.formalist,3817290,13194079),o(this.formalist,4143930,16447212),this.hypocrisy=Ft({species:"cat",fur:14253898,outfit:"shirt",outfitColor:6965858}),s(this.hypocrisy,6965858,3825546),o(this.hypocrisy,14253898,16447212),this.hypocrisy.head.add(p(.2,.16,.14,14253898,0,.22,.5)),this.timorous=Ft({species:"rabbit",fur:10122318,outfit:"shirt",outfitColor:12892314}),this.mistrust=Ft({species:"bear",fur:12884586,outfit:"shirt",outfitColor:9086136});for(const a of[-1,1])this.mistrust.head.add(p(.1,.5,.1,9072466,.3*a,1.15,-.05)),this.mistrust.head.add(p(.28,.09,.09,9072466,.3*a,1.3,-.05));this.mistrust.head.add(p(.3,.16,.1,15985369,0,.12,.42))}groundY(t){const e=Pt.clamp((t-un)/(Nn-un),0,1);return Ts*e*e*(3-2*e)}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(14086143),t.fog=new hi(14086143,40,110),this.hemi=new Ai(15792383,12903096,1.05),t.add(this.hemi);const e=new Ni(M.sun,1.5);e.position.set(-24,40,22),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-50,e.shadow.camera.right=55,e.shadow.camera.top=50,e.shadow.camera.bottom=-45,t.add(e),this.sunLight=e;const i=new Q(new _t(160,1,90),ue(M.grass));i.position.y=-.5,i.receiveShadow=!0,t.add(i);for(let w=0;w<45;w++){const v=-50+Math.random()*100,L=-35+Math.random()*70;if(v>un-1&&v<Nn+34)continue;const R=p(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?M.grassLight:M.grassDark,v,.04+Math.random()*.03,L);R.castShadow=!1,t.add(R)}const s=[10411671,M.grass,11069091],o=8;for(let w=0;w<o;w++){const v=un+w*(Nn-un)/o,L=un+(w+1)*(Nn-un)/o,R=Math.max(this.groundY((v+L)/2+1),.4),I=p(L-v+.6,R,26,s[w%3],(v+L)/2,R/2,0);I.receiveShadow=!0,t.add(I)}const a=p(34,Ts,26,M.grass,Nn+17,Ts/2,0);a.receiveShadow=!0,t.add(a);const r=p(34.4,.14,26.4,10411671,Nn+17,Ts+.02,0);r.castShadow=!1,t.add(r);for(let w=0;w<=24;w++){const v=-28+w*2.9,L=(Math.random()-.5)*.8,R=p(.9+Math.random()*.5,.14,1.7+Math.random()*.6,M.path,v,this.groundY(v)+.07,L);R.castShadow=!1,t.add(R)}t.add(p(.18,1.5,.18,M.woodDark,Ss+2.5,.75,-1.6));const l=p(.4,.4,.1,M.robeGold,Ss+2.5,1.6,-1.6);l.castShadow=!1,t.add(l);for(const w of[-1,1]){for(let I=0;I<9;I++){const z=Ss+1+I*2.2,A=w*(1.5+I*1.35),b=p(1.6,.12,1.6,14272936,z,.06,A);b.castShadow=!1,t.add(b)}const v=Ss+1+9*2.2,L=w*(1.5+9*1.35);t.add(p(2.2,1.6,1.8,7303034,v+.5,.8,L)),t.add(p(1.4,1,1.2,6447726,v-1.2,.5,L+w*1.2));const R=new at;R.add(p(.4,2.4,.4,10129286,0,1.2,0)),R.add(p(1.4,.26,.26,10129286,.4,2.1,0)),R.position.set(v-.5,0,L-w*1.5),t.add(R)}const h=new at;h.add(p(.16,2,.16,M.woodDark,0,1,0)),h.add(p(1.3,.34,.1,M.wood,.55,1.8,0));const c=p(.1,.34,1.3,M.wood,0,1.45,-.55);h.add(c);const u=p(.1,.34,1.3,M.wood,0,1.1,.55);h.add(u),h.position.set(Ss,0,-.2),t.add(h);const d=new at;for(const[w,v]of[[-1.1,-.9],[1.1,-.9],[-1.1,.9],[1.1,.9]])d.add(p(.22,2,.22,M.woodDark,w,1,v));d.add(p(3,.3,2.6,8101983,0,2.15,0)),d.add(p(2.4,.24,2,9420655,0,2.4,0)),d.add(p(1.8,.18,.8,M.wood,0,.62,-.3)),d.add(p(.2,.55,.2,M.woodDark,-.7,.28,-.3)),d.add(p(.2,.55,.2,M.woodDark,.7,.28,-.3));for(let w=0;w<5;w++){const v=p(.14,.14,.14,[M.flowerYellow,M.flowerPink,M.flowerBlue][w%3],-1.4+w*.7,.08,1.3);v.castShadow=!1,d.add(v)}d.position.set(Fn.x,this.groundY(Fn.x),Fn.z),t.add(d);const m=new at,y=new Q(new De(.11,.11,.6,8),ue(16643811));y.rotation.z=Math.PI/2,m.add(y),m.add(p(.12,.24,.24,13194079,0,0,0));const x=new Q(new We(.8,14,12),new Mt({color:16774072,transparent:!0,opacity:.4,depthWrite:!1}));m.add(x),this.scrollGlow=x;const g=new Si(16771194,1.4,8);g.position.y=.5,m.add(g),m.position.set(Fn.x+.2,this.groundY(Fn.x)+.35,Fn.z+.9),m.visible=!1,t.add(m),this.scrollProp=m;for(const[w,v,L]of[[-26,7,!0],[-20,-8,!1],[-11,8,!1],[20,8,!0],[27,-8,!1],[33,7,!0]]){const R=new at;R.add(p(.5,1.6,.5,M.trunk,0,.8,0)),R.add(p(1.9,1.3,1.9,L?M.leafPink:M.leaf,0,2.2,0)),R.add(p(1.2,.9,1.2,L?M.leafPink:M.leaf,0,3.1,0)),R.position.set(w,this.groundY(w),v),t.add(R)}this.timorous.root.visible=!1,this.mistrust.root.visible=!1,t.add(this.timorous.root),t.add(this.mistrust.root),t.add(this.formalist.root),t.add(this.hypocrisy.root);for(let w=0;w<5;w++){const v=new Mt({color:16777215,transparent:!0,opacity:0}),L=new Q(new _t(.22,.26,.06),v);L.visible=!1,t.add(L),this.zzz.push({mesh:L,m:v,life:1})}for(let w=0;w<14;w++){const v=new Mt({color:14272936,transparent:!0,opacity:0}),L=new Q(new _t(.26,.26,.26),v);L.visible=!1,L.castShadow=!1,t.add(L),this.dust.push({mesh:L,m:v,life:1,vx:0,vz:0})}const f=new Q(new De(1.4,2,14,18,1,!0),new Mt({color:M.light,transparent:!0,opacity:.5,side:Ve,depthWrite:!1,fog:!1}));f.position.set(lo+1.5,Ts+7,0),t.add(f),this.lightBeam=f;const E=new Q(new We(2.4,18,14),new Mt({color:16775645,transparent:!0,opacity:.4,depthWrite:!1,fog:!1}));E.position.set(lo+1.5,Ts+1.6,0),t.add(E),this.lightHalo=E,t.add(this.christian.root)}applyDusk(t){this.duskP+=(this.duskTarget-this.duskP)*Math.min(t*.5,1);const e=new Dt(14086143),i=new Dt(16103818),s=e.clone().lerp(i,this.duskP);this.scene.background.copy(s),this.scene.fog.color.copy(s),this.hemi&&(this.hemi.intensity=1.05-this.duskP*.35),this.sunLight&&(this.sunLight.intensity=1.5-this.duskP*.75,this.sunLight.color.set(this.duskP>.5?16756848:16773836))}enter(t){var e,i;return this.build(),this.revisit=t,this.duskP=0,this.duskTarget=0,this.fleeT=0,this.timorous.root.visible=!1,this.mistrust.root.visible=!1,this.scrollProp&&(this.scrollProp.visible=!1),this.pawScroll.visible=!0,this.christian.root.position.set(t?-27:-29,0,0),this.christian.root.rotation.y=Math.PI/2,(i=(e=this.cb).setMusic)==null||i.call(e,"gate"),t?(this.phase="done",this.deserters=!1,this.formalist.root.visible=!1,this.hypocrisy.root.visible=!1,this.cb.setObjective("⛰ The Hill Difficulty stands quiet — the light beyond the summit leads on")):(this.phase="walk",this.deserters=!1,this.formalist.root.visible=!0,this.formalist.root.position.set(-31,0,-1.5),this.hypocrisy.root.visible=!0,this.hypocrisy.root.position.set(-32,0,1.3),this.cb.setObjective("⛰ A steep hill rises ahead — walk on with your two companions")),{christian:this.christian}}moveFactor(){if(this.phase==="fork"||this.phase==="arbor"||this.phase==="sleeping"||this.phase==="panic"||this.phase==="warning")return 0;const t=this.christian.root.position;return t.x>un&&t.x<Nn&&this.phase!=="retrace"?.62:1}nearScroll(){return this.phase!=="retrace"||!this.scrollProp?!1:this.christian.root.position.distanceTo(this.scrollProp.position)<2.4}tryPickScroll(){this.nearScroll()&&(this.scrollProp.visible=!1,this.pawScroll.visible=!0,this.cb.blipSound(),this.cb.playScript([{speaker:"Christian",text:"There — half under the bench, exactly where I slept. My scroll!"},{speaker:"Christian",text:"Thank God, who turned my eyes back to the place I lost it. I'll carry it in my paw from here on — and do my sleeping at night."}],()=>{this.phase="climb3",this.cb.setObjective("⛰ Climb the hill again — carefully, this time")}))}afterMove(){const t=this.christian.root.position;t.z=Pt.clamp(t.z,-7,7);const e=this.phase==="retrace"?tc+1.5:lo+2;if(t.x=Pt.clamp(t.x,Qh-1,e),t.y=this.groundY(t.x),this.revisit||this.phase==="done"){(t.x<Qh||t.x>lo)&&this.cb.onExit();return}if(this.phase==="walk"&&t.x>Ss-3.5){this.phase="fork",this.formalist.root.position.set(t.x-1.2,0,t.z-2),this.formalist.root.rotation.y=Math.PI/2,this.hypocrisy.root.position.set(t.x-1.4,0,t.z+2),this.hypocrisy.root.rotation.y=Math.PI/2,this.cb.playScript([{speaker:"",text:"At the foot of the hill the road divides in three: a steep path straight up, marked with the King's golden sign — and two easy paths curving round the bottom, one to the left, one to the right."},{speaker:"Formalist",text:'Straight UP? In this coat? Gentlemen take the level road. The left way — "Danger", is it? — merely a name. It must wind round and meet you on the far side.'},{speaker:"Hypocrisy",text:'And I shall take the right. "Destruction" — such an unfair reputation for so smooth a path. See you at the top, friend. The sensible way is always around.'},{speaker:"Christian",text:"Friends, wait! The King marked the STEEP way. The easy paths go exactly where their names say — nowhere else!"},{speaker:"",text:"But they are already walking. Formalist turns into the way called Danger, and Hypocrisy into the way called Destruction — and neither of them is ever seen again."},{speaker:"Christian",text:'…So I climb alone. "The hill, though high, I covet to ascend; the difficulty will not me offend."'}],()=>{this.phase="climb",this.deserters=!0,this.fleeT=0,this.cb.setObjective("⛰ Take the steep path — straight up the Hill Difficulty")});return}if(this.phase==="climb"&&Math.abs(t.x-Fn.x)<2){this.phase="arbor",this.christian.root.rotation.y=0,this.cb.playScript([{speaker:"",text:"Halfway up the slope stands a pleasant arbor, built by the Lord of the hill for weary pilgrims to catch their breath."},{speaker:"Christian",text:"*puff* … A bench, in the shade, with flowers… Surely the Lord of the hill won't mind if I sit for just a moment."},{speaker:"Christian",text:"Just… one… moment…"}],()=>{this.phase="sleeping",this.sleepT=0,this.duskTarget=1,this.pawScroll.visible=!1,this.cb.setObjective("💤 …")});return}if(this.phase==="climb2"&&t.x>tc){this.phase="panic",this.cb.playScript([{speaker:"Christian",text:"The top! Made it at last — and before full dark, too. Now, a look at my scroll to put some heart in me for the road ahead…"},{speaker:"Christian",text:"…It's not here. Not in my paw — not in the sling — *pats himself all over* — it's GONE."},{speaker:"Christian",text:"*to himself* Fool. FOOL, Christian. You slept when you should only have rested — and the King's own scroll slid from your paw while you snored in His arbor."},{speaker:"Christian",text:"That scroll is my assurance — my welcome at the Celestial City's gate. I cannot go one step forward without it. Back down, then… every hard-won step of it."}],()=>{this.phase="retrace",this.scrollProp.visible=!0,this.cb.setObjective("⬇ Retrace the path down — something glows near the arbor…")});return}if(this.phase==="climb3"&&t.x>8.5){this.phase="warning",this.timorous.root.visible=!0,this.timorous.root.position.set(t.x+5,this.groundY(t.x+5),t.z-1.2),this.timorous.root.rotation.y=-Math.PI/2,this.mistrust.root.visible=!0,this.mistrust.root.position.set(t.x+6.2,this.groundY(t.x+6.2),t.z+1),this.mistrust.root.rotation.y=-Math.PI/2,this.cb.playScript([{speaker:"",text:"Two travellers come pelting down the hill as though wolves were at their heels."},{speaker:"Christian",text:"Whoa — friends! You're running the wrong way! What happened?"},{speaker:"Timorous",text:"T-t-turn back! We were bound for Zion, same as you — but the farther we went, the MORE danger we saw!"},{speaker:"Mistrust",text:"Just ahead, in the very path, lie two LIONS! Asleep or awake we did not stay to find out — but whoever goes on will be torn to pieces!"},{speaker:"Timorous",text:"Turn back, turn back while you still have legs to carry you!"}],()=>{this.phase="fleeing",this.fleeT=0});return}this.phase==="onward"&&t.x>lo&&(this.phase="done",this.cb.onComplete())}spawnDust(t,e,i){const s=this.dust.find(o=>o.life>=1);s&&(s.life=0,s.vx=(Math.random()-.5)*1.4,s.vz=(Math.random()-.5)*1.4,s.mesh.position.set(t,e+.2,i),s.mesh.visible=!0)}update(t,e,i){if(!this.built)return;const s=this.christian.root.position;if(this.applyDusk(t),Ct(this.christian,e,i&&this.moveFactor()>0),this.phase==="walk"){const o=[[this.formalist,-1.9,-1.6],[this.hypocrisy,-3.2,1.4]];for(const[a,r,l]of o){const h=a.root.position,c=s.x+r-h.x,u=s.z+l-h.z,d=Math.hypot(c,u);if(d>.2){const m=Math.min(6.6,d*2.5)*t;h.x+=c/d*m,h.z+=u/d*m,a.root.rotation.y=Math.atan2(c,u),Ct(a,e+h.x,!0)}else Ct(a,e+h.x,!1)}}else if(this.deserters){this.fleeT+=t;const o=[[this.formalist,-1],[this.hypocrisy,1]];for(const[a,r]of o){const l=a.root.position;l.x+=t*3.4,l.z+=r*t*2.2,a.root.rotation.y=Math.atan2(3.4,r*2.2),Ct(a,e*1.3+r,!0),Math.abs(l.z)>13&&(a.root.visible=!1)}!this.formalist.root.visible&&!this.hypocrisy.root.visible&&(this.deserters=!1)}if(this.phase==="sleeping"){if(this.sleepT+=t,this.christian.root.rotation.z=-Math.PI/2*Math.min(1,this.sleepT/.6),this.christian.root.position.y=this.groundY(s.x)+.35*Math.min(1,this.sleepT/.6),this.zzzTimer-=t,this.zzzTimer<=0){this.zzzTimer=.8;const o=this.zzz.find(a=>a.life>=1);o&&(o.life=0,o.mesh.position.set(s.x+.3,s.y+1,s.z),o.mesh.visible=!0)}this.sleepT>4.2&&(this.christian.root.rotation.z=0,this.christian.root.position.y=this.groundY(s.x),this.phase="climb2",this.cb.playScript([{speaker:"Christian",text:"*snrk—* Wha—? The light… why is the light all orange?"},{speaker:"",text:"The sun is already sliding toward the hills. What was meant to be a moment's rest has swallowed the whole afternoon."},{speaker:"Christian",text:"The SUNSET?! I slept the day away on the King's own bench! Up, up — I must reach the top before dark!"}],()=>{this.cb.setObjective("🌇 Hurry — climb to the summit before night falls")}))}for(const o of this.zzz)o.life>=1||(o.life=Math.min(1,o.life+t*.55),o.mesh.position.y+=t*.7,o.mesh.position.x+=t*.25,o.mesh.rotation.z=Math.sin(o.life*6)*.3,o.m.opacity=.8*(1-o.life),o.life>=1&&(o.mesh.visible=!1));if(this.phase==="fleeing"){this.fleeT+=t;for(const o of[this.timorous,this.mistrust]){if(!o.root.visible)continue;const a=o.root.position;a.x-=t*10,a.y=this.groundY(a.x),o.root.rotation.y=-Math.PI/2,Ct(o,e*1.9,!0),Math.random()<t*14&&this.spawnDust(a.x+.5,a.y,a.z),a.x<-24&&(o.root.visible=!1)}this.fleeT>1.4&&!this.timorous.root.visible&&!this.mistrust.root.visible&&(this.phase="onward",this.cb.playScript([{speaker:"Christian",text:"Lions… *swallows* Two of them. Right in the path. Perhaps I too should turn ba—"},{speaker:"Christian",text:"No. NO. Behind me lies the City of Destruction — to go back is certain death. Ahead there may be lions… but beyond the lions is LIFE."},{speaker:"Christian",text:"If I return, I perish. If I press on, I may yet reach the Celestial City. Then forward — fear or no fear!"}],()=>{this.cb.setObjective("✨ Press on along the ridge, to the light at the road's end")}))}for(const o of this.dust)o.life>=1||(o.life=Math.min(1,o.life+t*1.6),o.mesh.position.x+=o.vx*t,o.mesh.position.z+=o.vz*t,o.mesh.position.y+=t*.8,o.mesh.scale.setScalar(.6+o.life*1.5),o.m.opacity=.6*(1-o.life),o.life>=1&&(o.mesh.visible=!1));if(this.scrollProp&&this.scrollProp.visible&&(this.scrollProp.rotation.y+=t*1.2,this.scrollGlow&&(this.scrollGlow.material.opacity=.25+.25*Math.abs(Math.sin(e*2.4)))),this.lightBeam){const o=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(o,1,o)}this.lightHalo&&(this.lightHalo.material.opacity=.3+.2*Math.abs(Math.sin(e*1.7)))}}const Ar=-30,ho=42,On=-6,Es=5,p1=1.25,ec=7,sa=26,ri=new C(100,0,0),Yi=new C(170,12,0);class m1{constructor(t){T(this,"scene",new Ei);T(this,"phase","approach");T(this,"cb");T(this,"christian");T(this,"armorPieces");T(this,"watchful");T(this,"women",[]);T(this,"womenHome",[]);T(this,"armorStep",-1);T(this,"armorWalkT",0);T(this,"lions",[]);T(this,"biteCooldown",0);T(this,"bitten",!1);T(this,"sparkles",[]);T(this,"cityGlow",null);T(this,"lightBeam",null);T(this,"lightHalo",null);T(this,"revisit",!1);T(this,"built",!1);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:M.robeWhite,sling:!0,plump:!0}),this.christian.body.add(p(1.18,.14,.86,M.robeGold,0,.3,0));const e=p(.1,.1,.04,M.robeGold,0,.62,.42);e.castShadow=!1,this.christian.head.add(e);const i=new at,s=new Q(new De(.09,.09,.5,8),ue(16643811));s.rotation.z=Math.PI/2,i.add(s),i.add(p(.1,.2,.2,13194079,0,0,0)),i.position.set(0,-.5,.2),this.christian.armL.add(i);const o=13620957,a=new at;a.add(p(1.02,.4,.86,o,0,.92,0)),a.add(p(.2,.24,.9,M.robeGold,0,1.16,0)),this.christian.head.add(a);const r=p(1.16,.62,.88,o,0,.42,0);this.christian.body.add(r);const l=new at;l.add(p(.12,.8,.62,o,0,0,0)),l.add(p(.14,.42,.12,M.robeGold,0,0,0)),l.add(p(.14,.12,.4,M.robeGold,0,.1,0)),l.position.set(-.24,-.3,0),this.christian.armL.add(l);const h=new at;h.add(p(.09,.95,.16,15265266,0,.55,0)),h.add(p(.3,.1,.2,M.robeGold,0,.04,0)),h.add(p(.1,.24,.12,9072466,0,-.12,0)),h.position.set(.16,-.5,.14),this.christian.armR.add(h),this.armorPieces={helmet:a,breastplate:r,shield:l,sword:h},this.setArmorVisible(!1),this.watchful=Ft({species:"owl",fur:9074788,outfit:"robe",outfitColor:3820138,scale:1.1});const c=[[14264504,9067114],[11060441,3825546],[15917769,11569722],[13230776,5929546]];for(const[u]of c){const d=Ft({species:"bear",fur:M.bearHoney,outfit:"dress",outfitColor:u,scale:1.02});this.women.push(d)}}setArmorVisible(t){this.armorPieces.helmet.visible=t,this.armorPieces.breastplate.visible=t,this.armorPieces.shield.visible=t,this.armorPieces.sword.visible=t}makeLion(t){const e=new at,i=14264416,s=11565370;e.add(p(2,1.05,1.05,i,0,1,0));for(const[l,h]of[[-.7,-.32],[-.7,.32],[.7,-.32],[.7,.32]])e.add(p(.34,.72,.34,i,l,.36,h)),e.add(p(.38,.16,.4,12883024,l,.08,h));e.add(p(.16,.16,.9,i,-1.15,1.2,0)),e.add(p(.26,.26,.26,s,-1.15,1.28,-.55));const o=new at;o.add(p(.95,.85,.85,i,0,0,0)),o.add(p(1.35,1.25,.5,s,0,0,-.4)),o.add(p(1.15,.35,.8,s,0,.62,-.1)),o.add(p(1.15,.35,.8,s,0,-.62,-.1)),o.add(p(.35,1,.8,s,-.68,0,-.1)),o.add(p(.35,1,.8,s,.68,0,-.1)),o.add(p(.5,.36,.24,15255704,0,-.16,.5)),o.add(p(.18,.12,.08,4863016,0,0,.6));for(const l of[-.14,.02,.16])o.add(p(.09,.16,.06,16777215,l,-.32,.56));o.add(p(.12,.14,.06,13186367,-.22,.14,.46)),o.add(p(.12,.14,.06,13186367,.22,.14,.46)),o.position.set(1.25,1.15,0),o.rotation.y=0,e.add(o);const a=p(.24,1.4,.24,6183509,-2.6,.7,0);e.add(a);for(let l=0;l<4;l++){const h=new Q(new Ks(.14,.05,6,10),ue(7236196));h.position.set(-2.2+l*.42,.32,.06*(l%2)),h.rotation.set(Math.PI/2,0,l*.6),e.add(h)}const r=new C((On+Es)/2+(t<0?-2.4:2.4),0,3.4*t);return e.position.copy(r),e.rotation.y=t<0?Math.PI:0,this.scene.add(e),{root:e,head:o,home:r,lunge:0}}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(9078456),t.fog=new hi(9078456,40,110),t.add(new Ai(12104920,9079450,.75));const e=new Ni(14206192,.9);e.position.set(-30,30,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-55,e.shadow.camera.right=55,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,t.add(e);const i=new Q(new _t(160,1,90),ue(8364660));i.position.y=-.5,i.receiveShadow=!0,t.add(i);for(let v=0;v<40;v++){const L=-45+Math.random()*85,R=-35+Math.random()*70,I=p(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?7641450:9220737,L,.04+Math.random()*.03,R);I.castShadow=!1,t.add(I)}for(let v=0;v<=24;v++){const L=-29+v*3;if(L>On-1&&L<Es+2)continue;const R=p(.9+Math.random()*.5,.14,1.7+Math.random()*.6,M.path,L,.07,(Math.random()-.5)*.7);R.castShadow=!1,t.add(R)}const s=p(Es-On+3,.16,2.2,14997172,(On+Es)/2+.5,.08,0);s.castShadow=!1,t.add(s),this.lions.push(this.makeLion(-1)),this.lions.push(this.makeLion(1));const o=new at,a=16447730,r=15262418;o.add(p(14,7,10,a,8,3.5,0)),o.add(p(14.6,.6,10.6,r,8,7.3,0)),o.add(p(12,2.4,8,a,8,8.8,0)),o.add(p(12.6,.5,8.6,M.roofPink,8,10.2,0));for(const[v,L]of[[2,-5.5],[2,5.5],[14,-5.5],[14,5.5]])o.add(p(2.6,9.5,2.6,a,v,4.75,L)),o.add(p(3,.5,3,r,v,9.7,L)),o.add(p(2.2,1.6,2.2,M.roofPink,v,10.7,L));o.add(p(3.4,4.6,.8,r,8,2.3,5.2)),o.add(p(2.4,3.6,.9,4867136,8,1.8,5.35));for(const[v,L,R]of[[5,4,5.1],[8,4.6,5.1],[11,4,5.1],[5,4,-5.1],[8,4.6,-5.1],[11,4,-5.1]]){const I=new Q(new _t(1,1.4,.12),new Mt({color:16771488}));I.position.set(v,L,R),o.add(I)}o.add(p(2.6,3.8,.8,r,13.5,1.9,5.2)),o.add(p(1.8,3,.9,4867136,13.5,1.5,5.35)),o.position.set(0,0,-7.5),t.add(o);const l=new Si(16771520,1.6,30);l.position.set(8,6,-2),t.add(l),this.watchful.root.position.set(ec-5.2,0,-2.2),this.watchful.root.rotation.y=-Math.PI/2,t.add(this.watchful.root);for(let v=0;v<=6;v++){const L=sa+1+v*2.6,R=p(.9+Math.random()*.5,.14,1.7+Math.random()*.6,M.path,L,.07,(Math.random()-.5)*.7);R.castShadow=!1,t.add(R)}const h=new at;h.add(p(26,.6,20,15261129,8,-.3,0)),h.add(p(26,7,.8,15919832,8,3.5,-10)),h.add(p(26,7,.8,15919832,8,3.5,10)),h.add(p(.8,7,20,15919832,-5,3.5,0)),h.add(p(.8,7,20,15919832,21,3.5,0));for(let v=0;v<4;v++)h.add(p(.7,6,.7,14668988,-1+v*6,3,-6)),h.add(p(.7,6,.7,14668988,-1+v*6,3,6));h.add(p(20,.06,3.4,13205642,8,.04,0)),h.add(p(2.4,1.1,1.2,M.woodDark,3,.55,-7.6)),h.add(p(1,.16,.7,16643811,3,1.18,-7.6)),h.add(p(.9,.5,.14,16643811,3.7,1.4,-7.9)),h.add(p(3,1,1.4,M.woodDark,12,.5,-7.5)),h.add(p(.5,.5,.5,M.robeGold,11.2,1.25,-7.5)),h.add(p(.16,.8,.16,9072466,12.2,1.4,-7.5)),h.add(p(.6,.14,.6,13620957,13.1,1.1,-7.5));const c=new Q(new We(1.4,14,12),new Mt({color:16774072,transparent:!0,opacity:.18,depthWrite:!1}));c.position.set(12,1.6,-7.5),h.add(c);for(let v=0;v<5;v++)h.add(p(2,.3+v*.3,1,14668988,17.5,(.3+v*.3)/2,4.2-v*1));h.position.copy(ri),t.add(h);const u=new Si(16772813,1.5,36);u.position.set(ri.x+8,5,0),t.add(u);const d=new at;d.add(p(16,.8,12,15919832,0,-.4,0));for(let v=0;v<7;v++)d.add(p(.6,.9,.6,15262418,-7+v*2.4,.45,-5.6)),d.add(p(.6,.9,.6,15262418,-7+v*2.4,.45,5.6));d.add(p(16,.3,.6,15262418,0,.95,-5.6)),d.add(p(16,.3,.6,15262418,0,.95,5.6));const m=new at;m.add(p(.2,1.2,.2,M.woodDark,0,.6,0));const y=new Q(new De(.18,.24,1.5,10),ue(11569722));y.rotation.z=-Math.PI/3,y.position.set(.4,1.5,0),m.add(y),m.position.set(4,0,0),d.add(m),d.position.copy(Yi),t.add(d);const x=new at,g=new Mt({color:16774084,transparent:!0,opacity:.85,fog:!1});for(const[v,L,R,I]of[[0,2.2,1.6,4.4],[2,1.6,1.2,3.2],[-2,1.4,1.3,2.8],[3.6,1,.9,2],[-3.6,.9,1,1.8]]){const z=new Q(new _t(R,I,1),g);z.position.set(v,L,0),x.add(z)}const f=new Q(new We(6,18,14),new Mt({color:16775645,transparent:!0,opacity:.3,depthWrite:!1,fog:!1}));f.position.y=2,x.add(f),this.cityGlow=f,x.position.set(Yi.x+46,Yi.y+6,-4),t.add(x),this.womenHome=[new C(ri.x+5,.1,2.6),new C(ri.x+7.5,.1,3.4),new C(ri.x+10,.1,3.4),new C(ri.x+12.5,.1,2.6)],this.women.forEach((v,L)=>{v.root.position.copy(this.womenHome[L]),v.root.rotation.y=Math.PI,t.add(v.root)});for(let v=0;v<20;v++){const L=new Mt({color:16773304,transparent:!0,opacity:0}),R=new Q(new _t(.16,.16,.16),L);R.visible=!1,t.add(R),this.sparkles.push({mesh:R,m:L,life:1,vx:0,vy:0,vz:0})}const E=new Q(new De(1.4,2,14,18,1,!0),new Mt({color:M.light,transparent:!0,opacity:.6,side:Ve,depthWrite:!1,fog:!1}));E.position.set(ho+1.5,7,0),t.add(E),this.lightBeam=E;const w=new Q(new We(2.4,18,14),new Mt({color:16775645,transparent:!0,opacity:.45,depthWrite:!1,fog:!1}));w.position.set(ho+1.5,1.6,0),t.add(w),this.lightHalo=w,t.add(this.christian.root)}enter(t){var e,i;return this.build(),this.revisit=t,this.biteCooldown=0,this.bitten=!1,this.armorStep=-1,this.christian.root.rotation.y=Math.PI/2,(i=(e=this.cb).setMusic)==null||i.call(e,"gate"),t?(this.phase="done",this.setArmorVisible(!0),this.christian.root.position.set(-27,0,0),this.cb.setObjective("🏰 Palace Beautiful glows in the dusk — the lions still guard the way")):(this.phase="approach",this.setArmorVisible(!1),this.christian.root.position.set(-28,0,0),this.cb.setObjective("🏰 A white palace glows ahead in the failing light…")),{christian:this.christian}}moveFactor(){return this.phase==="terror"||this.phase==="welcome"||this.phase==="testimony"||this.phase==="roof"||this.phase==="armor"||this.phase==="farewell"?0:1}afterMove(){var i,s,o,a;const t=this.christian.root.position;if(t.x>60?t.x<140?(t.x=Pt.clamp(t.x,ri.x-4,ri.x+16.5),t.z=Pt.clamp(t.z,-8.6,8.6),t.y=.1):(t.x=Pt.clamp(t.x,Yi.x-7,Yi.x+7),t.z=Pt.clamp(t.z,-5,5),t.y=Yi.y):(t.z=Pt.clamp(t.z,-9,9),t.x=Pt.clamp(t.x,Ar-1,ho+2),t.y=0,t.x>-1&&t.x<22&&(t.z=Math.max(t.z,-1.9))),this.revisit||this.phase==="done"){this.lionLogic(t),(t.x<Ar||t.x>ho)&&this.cb.onExit();return}if(this.phase==="approach"&&t.x>On-4){this.phase="terror",this.cb.rumbleSound(),this.cb.playScript([{speaker:"",text:"Two enormous lions rise from the shadows beside the road, and their roar rolls down the valley like thunder."},{speaker:"Christian",text:"L-LIONS! Loose on the road! It's the end of me — I should never have— perhaps I can still run back—"},{speaker:"Watchful",text:"*calling from the gate* HOLD, pilgrim! Do not fear the lions — they are CHAINED!"},{speaker:"Watchful",text:"They are set there to test faith where it is, and to find out those that have none. Keep to the MIDDLE of the path, and no harm shall come to you!"},{speaker:"Christian",text:"The middle of the path… right between them?! …Very well. The porter has no reason to lie. Middle of the path, Christian. MIDDLE of the path."}],()=>{this.phase="gauntlet",this.cb.setObjective("🦁 Walk the MIDDLE of the narrow path — stray aside and the lions can reach you!")});return}if(this.phase==="gauntlet"){this.lionLogic(t),t.x>ec-1&&(this.phase="welcome",this.christian.root.rotation.y=Math.PI/2,this.cb.playScript([{speaker:"Watchful",text:"Well walked, pilgrim! Many turn back at the first roar — you kept the path. I am Watchful, porter of Palace Beautiful."},{speaker:"Christian",text:"*knees still knocking* They were… very loud. And very near. My name is Christian, bound from the City of Destruction to Mount Zion."},{speaker:"Watchful",text:"Then this house was built by the Lord of the hill for just such as you. Come in — the ladies of the house will want to hear your tale. The night is falling, and the table is set."}],()=>{var r,l;(l=(r=this.cb).fade)==null||l.call(r,()=>{var h,c;this.christian.root.position.set(ri.x-2,.1,0),this.christian.root.rotation.y=Math.PI/2,(c=(h=this.cb).setMusic)==null||c.call(h,"interpreter")}),this.phase="testimony",window.setTimeout(()=>this.runTestimony(),700)}));return}if(this.phase==="records"&&t.distanceTo(new C(ri.x+3,.1,-6.4))<2.2){this.phase="treasures",this.cb.playScript([{speaker:"Prudence",text:"These are the records of the King's house — the deeds of His servants of old."},{speaker:"Prudence",text:"Here: pilgrims who subdued kingdoms, stopped the mouths of lions, and out of weakness were made strong. Not one of them was braver than you, Christian — they only trusted the same King."},{speaker:"Christian",text:"Stopped the mouths of lions… *smiles* I begin to see why the road came past those two."}],()=>{this.cb.setObjective("✨ Now to the treasure table, where the relics are kept")});return}if(this.phase==="treasures"&&t.distanceTo(new C(ri.x+12,.1,-6.4))<2.4){this.phase="stairs",this.cb.playScript([{speaker:"Piety",text:"And these are treasures of the household: the rod that budded, the sling of the shepherd boy, the jaw-tooth of the lion Samson slew."},{speaker:"Piety",text:"Every one a reminder that the King has been faithful in every age — and He does not change."},{speaker:"Christian",text:"So many hands held these before mine ever gripped a walking stick… I am in a very long line of pilgrims, aren't I?"}],()=>{this.cb.setObjective("🔭 Climb the stair at the end of the hall, up to the roof")});return}if(this.phase==="stairs"&&t.distanceTo(new C(ri.x+17.5,.1,2))<2.4){this.phase="roof",(s=(i=this.cb).fade)==null||s.call(i,()=>{this.christian.root.position.set(Yi.x-2,Yi.y,0),this.christian.root.rotation.y=Math.PI/2}),window.setTimeout(()=>{this.cb.playScript([{speaker:"Charity",text:"One more thing before you sleep, Christian. Come — look through the glass, away east, past the valleys and the river."},{speaker:"",text:"Far, far off — beyond more country than the eye should be able to cross — something shines: gates like pearl, and streets that glimmer like gold seen through morning mist."},{speaker:"Christian",text:"…Is that…?"},{speaker:"Charity",text:"The Celestial City. The end of your road, pilgrim. Every step you have taken — mire, mountain and lion — has been one step nearer THAT."},{speaker:"Christian",text:"Then it's real. It's REAL, and I have seen it with my own eyes… Oh, let morning come quickly — I have such a long way still to walk!"}],()=>{this.phase="roofdown",this.cb.setObjective("⬇ Take the stair back down to the hall")})},700);return}if(this.phase==="roofdown"&&t.x<Yi.x-5.5){this.phase="armor",(a=(o=this.cb).fade)==null||a.call(o,()=>{this.christian.root.position.set(ri.x+8,.1,-1),this.christian.root.rotation.y=Math.PI,this.women.forEach((r,l)=>{r.root.position.copy(this.womenHome[l]),r.root.rotation.y=Math.PI})}),window.setTimeout(()=>{this.cb.playScript([{speaker:"Discretion",text:"It is morning, Christian — and before you go, the house has one gift more. No pilgrim leaves Palace Beautiful unarmed."}],()=>{this.armorStep=0,this.armorWalkT=0,this.cb.setObjective("🛡 The armory of the Lord of the hill…")})},700);return}this.phase==="walkout"&&t.x>ho&&(this.phase="done",this.cb.onComplete())}lionLogic(t){if(t.x<On||t.x>Es||this.biteCooldown>0||Math.abs(t.z)<=p1)return;this.biteCooldown=1.2,this.cb.rumbleSound(),this.cb.blipSound();const e=t.z<0?this.lions[0]:this.lions[1];e.lunge=1,this.burst(t.x,1.2,t.z,8),t.x=Math.max(Ar+2,t.x-3.5),t.z=0,!this.bitten&&!this.revisit&&this.phase==="gauntlet"&&(this.bitten=!0,this.cb.playScript([{speaker:"Christian",text:"YOW! Teeth! Very large teeth! …The chain stopped it a whisker short. The MIDDLE, Christian — Watchful said the MIDDLE!"}]))}burst(t,e,i,s){let o=0;for(const a of this.sparkles){if(o>=s)break;a.life<1||(o++,a.life=0,a.vx=(Math.random()-.5)*2.4,a.vy=1.2+Math.random()*1.6,a.vz=(Math.random()-.5)*2.4,a.mesh.position.set(t,e,i),a.mesh.visible=!0)}}runTestimony(){this.cb.playScript([{speaker:"",text:"Within, the hall is warm with lamplight. Four women of the house — Discretion, Prudence, Piety and Charity — welcome Christian to the table."},{speaker:"Discretion",text:"Welcome, pilgrim of the King. Rest your paws and tell us everything — how does a bear of the City of Destruction come to be so far along the way?"},{speaker:"Christian",text:"It began with a book, and a burden I could not put down. I fled my city when Evangelist showed me the far light — and fell straight into the Slough of Despond, where Help pulled me out."},{speaker:"Christian",text:"A smooth-talking gentleman nearly turned me aside to Morality — Evangelist set me right. Goodwill drew me through the Wicket Gate, and the Interpreter showed me his six sights."},{speaker:"Christian",text:"And then… the Cross. My burden loosed itself from my shoulders there and rolled into the empty tomb, and I never saw it again. Not for anything I did — it simply… fell away."},{speaker:"Piety",text:"*eyes shining* Grace, freely given. There is no sweeter story in all the King's country, and we never tire of it."},{speaker:"Christian",text:"Since then: three sleepers who would not wake, two travellers over the wall, the Hill Difficulty — where I slept when I should have watched, and nearly lost my scroll for good."},{speaker:"Charity",text:"And still you are here — which tells us more about your King than about your legs, dear pilgrim. You shall stay some days with us, and go on strengthened."},{speaker:"",text:"And so he does. For several days Christian rests at Palace Beautiful, and is comforted, and eats at their table, and sleeps in a chamber called Peace whose window opens toward the sunrise."}],()=>{this.phase="records",this.cb.setObjective("📖 Walk with Prudence to the reading desk, where the King's records are kept")})}armorSequence(t,e){if(this.armorStep<0||this.armorStep>3)return;const i=this.women[this.armorStep],s=this.christian.root.position.clone().add(new C(0,0,2.4)),o=i.root.position,a=s.x-o.x,r=s.z-o.z,l=Math.hypot(a,r);if(l>.25){const u=Math.min(3.4,l*2.5)*t;o.x+=a/l*u,o.z+=r/l*u,i.root.rotation.y=Math.atan2(a,r),Ct(i,e,!0);return}if(i.root.rotation.y=0,Ct(i,e,!1),this.armorWalkT+=t,this.armorWalkT<.4)return;this.armorWalkT=-999;const h=this.armorStep,c=[{line:[{speaker:"Discretion",text:"The helmet of salvation — let no blow to the mind unseat what the King has settled."}],give:()=>{this.armorPieces.helmet.visible=!0}},{line:[{speaker:"Prudence",text:"The breastplate of righteousness — not your own, pilgrim; His. Wear it over your heart."}],give:()=>{this.armorPieces.breastplate.visible=!0}},{line:[{speaker:"Piety",text:"The shield of faith — above all, take this. It quenches every fiery dart of the wicked one."}],give:()=>{this.armorPieces.shield.visible=!0}},{line:[{speaker:"Charity",text:"And the sword of the Spirit, which is the Word of God. It has never lost a battle, and it never will."}],give:()=>{this.armorPieces.sword.visible=!0}}];this.cb.playScript(c[h].line,()=>{c[h].give(),this.cb.blipSound();const u=this.christian.root.position;this.burst(u.x,u.y+1.4,u.z,8);const d=this.womenHome[h];i.root.position.copy(d),i.root.rotation.y=Math.PI,this.armorStep=h+1,this.armorWalkT=0,this.armorStep>3&&this.runFarewell()})}runFarewell(){this.cb.playScript([{speaker:"",text:"Christian stands arrayed head to paw in the whole armor of God, the morning light bright on the steel."},{speaker:"Christian",text:"I hardly know myself. …Thank you. All of you. For the table, and the tales, and the glimpse from the roof — and for this."},{speaker:"Discretion",text:"Then come — we will walk you to the east gate ourselves. The road runs downhill from here, into the Valley of Humiliation, and you shall not begin it unblessed."}],()=>{var t,e;(e=(t=this.cb).fade)==null||e.call(t,()=>{var i,s;this.christian.root.position.set(sa+1.5,0,0),this.christian.root.rotation.y=Math.PI/2,this.watchful.root.position.set(sa-.5,0,-2.6),this.watchful.root.rotation.y=Math.PI/2,this.women.forEach((o,a)=>{o.root.position.set(sa-1.2+a%2*1.6,0,2.2+Math.floor(a/2)*1.6),o.root.rotation.y=Math.PI/2}),(s=(i=this.cb).setMusic)==null||s.call(i,"cross")}),this.phase="farewell",window.setTimeout(()=>{this.cb.playScript([{speaker:"",text:"The whole household walks him out to the east gate, where the morning lies gold on the road."},{speaker:"Charity",text:"Go in the strength of the King, Christian. May the road rise gently, and the armor sit light."},{speaker:"Piety",text:"We will pray for you every day you are on it. Watch, and keep your sword close."},{speaker:"Christian",text:"Farewell, Palace Beautiful! If ever I reach the City… it will be partly because a light was left on in your windows."}],()=>{this.phase="walkout",this.cb.setObjective("✨ Walk on east, down toward the light")})},700)})}update(t,e,i){if(!this.built)return;Ct(this.christian,e,i&&this.moveFactor()>0),this.biteCooldown=Math.max(0,this.biteCooldown-t);const s=this.christian.root.position;for(let o=0;o<this.lions.length;o++){const a=this.lions[o];s.x>On-3&&s.x<Es+3&&s.x<60?(a.head.rotation.x=Math.sin(e*(6+o))*.12,a.root.position.y=Math.abs(Math.sin(e*(5+o)))*.1):(a.head.rotation.x=Math.sin(e*1.2+o)*.05,a.root.position.y=0),a.lunge=Math.max(0,a.lunge-t*2.2);const l=o===0?-1:1;a.root.position.z=a.home.z-l*a.lunge*1.6}for(let o=0;o<this.women.length;o++)this.phase==="armor"&&o===this.armorStep||Ct(this.women[o],e+o*1.4,!1);Ct(this.watchful,e+2.2,!1),this.phase==="armor"&&this.armorSequence(t,e);for(const o of this.sparkles)o.life>=1||(o.life=Math.min(1,o.life+t*1.1),o.mesh.position.x+=o.vx*t,o.mesh.position.y+=o.vy*t,o.mesh.position.z+=o.vz*t,o.vy-=t*1.4,o.m.opacity=.9*(1-o.life),o.life>=1&&(o.mesh.visible=!1));if(this.cityGlow&&(this.cityGlow.material.opacity=.22+.14*Math.abs(Math.sin(e*1.3))),this.lightBeam){const o=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(o,1,o)}this.lightHalo&&(this.lightHalo.material.opacity=.35+.2*Math.abs(Math.sin(e*1.7)))}}const ic=-32,oa=38,zn=-28,Cr=-6,Rr=8,aa=8,g1=-24,y1=-15;class x1{constructor(t){T(this,"scene",new Ei);T(this,"phase","descend");T(this,"cb");T(this,"christian");T(this,"sword");T(this,"spiritSword",!1);T(this,"swordGlow");T(this,"groundSword");T(this,"apollyon");T(this,"apWings",[]);T(this,"apJaw",null);T(this,"apHome",new C(aa,0,0));T(this,"chp",100);T(this,"ahp",100);T(this,"turn","busy");T(this,"animT",0);T(this,"animKind",null);T(this,"dartThrown",!1);T(this,"knockT",0);T(this,"dart");T(this,"swingArc");T(this,"mutters",0);T(this,"smoke",[]);T(this,"smokeTimer",0);T(this,"sparkles",[]);T(this,"healBeam",null);T(this,"healProps",null);T(this,"lightBeam",null);T(this,"fleeT",0);T(this,"revisit",!1);T(this,"built",!1);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:M.robeWhite,sling:!0,plump:!0}),this.christian.body.add(p(1.18,.14,.86,M.robeGold,0,.3,0));const e=13620957,i=new at;i.add(p(1.02,.4,.86,e,0,.92,0)),i.add(p(.2,.24,.9,M.robeGold,0,1.16,0)),this.christian.head.add(i),this.christian.body.add(p(1.16,.62,.88,e,0,.42,0));const s=new at;s.add(p(.12,.8,.62,e,0,0,0)),s.add(p(.14,.42,.12,M.robeGold,0,0,0)),s.add(p(.14,.12,.4,M.robeGold,0,.1,0)),s.position.set(-.24,-.3,0),this.christian.armL.add(s),this.sword=new at,this.sword.add(p(.09,.95,.16,15265266,0,.55,0)),this.sword.add(p(.3,.1,.2,M.robeGold,0,.04,0)),this.sword.add(p(.1,.24,.12,9072466,0,-.12,0)),this.swordGlow=new Q(new _t(.3,1.2,.4),new Mt({color:8042751,transparent:!0,opacity:0,depthWrite:!1})),this.swordGlow.position.y=.55,this.sword.add(this.swordGlow),this.sword.position.set(.16,-.5,.14),this.christian.armR.add(this.sword),this.groundSword=new at,this.groundSword.add(p(.09,.95,.16,15265266,0,0,0)),this.groundSword.add(p(.3,.1,.2,M.robeGold,0,-.5,0)),this.groundSword.rotation.z=Math.PI/2.3,this.groundSword.visible=!1,this.dart=new Q(new _t(.7,.22,.22),new Mt({color:16747069})),this.dart.visible=!1,this.swingArc=new Q(new Ks(1.3,.14,6,14,Math.PI*.9),new Mt({color:14212836,transparent:!0,opacity:0,depthWrite:!1,side:Ve})),this.swingArc.visible=!1;const o=new at,a=5929562,r=4678471,l=3813936;for(const[d,m]of[[-.9,-.8],[-.9,.8],[.9,-.8],[.9,.8]])o.add(p(.9,1,.9,7035464,d,.5,m)),o.add(p(1,.3,1.05,5851450,d,.15,m));for(let d=0;d<5;d++)o.add(p(2.8-d*.18,.62,2.2-d*.14,d%2===0?a:r,0,1.3+d*.6,0));const h=new Q(new _t(1.5,1.1,.3),new Mt({color:16742973}));h.position.set(0,1.9,1.05),o.add(h),o.add(p(1.7,1.3,.2,l,0,1.9,.98));const c=new at;c.add(p(1.5,1.1,1.3,r,0,0,0)),c.add(p(1,.5,.7,9071434,0,-.25,.85));const u=p(.95,.28,.65,7031346,0,-.62,.85);c.add(u),this.apJaw=u;for(const d of[-.3,-.1,.1,.3])c.add(p(.1,.22,.08,16777215,d,-.42,1.16));c.add(p(.16,.2,.08,16730685,-.4,.25,.68)),c.add(p(.16,.2,.08,16730685,.4,.25,.68)),c.add(p(.24,.5,.24,a,-.55,.75,-.2)),c.add(p(.24,.5,.24,a,.55,.75,-.2)),c.position.set(0,4.4,.4),o.add(c);for(const d of[-1,1]){const m=new Q(new _t(.16,1.8,3.2),ue(4143930));m.geometry.translate(0,.9,-1.2),m.position.set(1.5*d,3.2,-.6),m.rotation.z=.5*d,o.add(m);const y=new Q(new _t(.14,1,1.6),ue(3025448));y.geometry.translate(0,.5,-.7),y.position.set(2.2*d,4.3,-2.2),y.rotation.z=.8*d,o.add(y),this.apWings.push(m,y)}o.add(p(.9,.7,2.2,a,0,1.2,-2.2)),o.add(p(.6,.5,1.4,r,0,1.1,-3.6)),o.visible=!1,this.apollyon=o}groundY(t){const e=Pt.clamp((t-zn)/(Cr-zn),0,1);return Rr*(1-e*e*(3-2*e))}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(12882298),t.fog=new hi(12882298,34,95),t.add(new Ai(14202010,6969938,.8));const e=new Ni(16751196,1);e.position.set(-28,18,16),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-55,e.shadow.camera.right=55,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,t.add(e);const i=new Q(new _t(160,1,90),ue(8030826));i.position.y=-.5,i.receiveShadow=!0,t.add(i);const s=7;for(let c=0;c<s;c++){const u=zn+c*(Cr-zn)/s,d=zn+(c+1)*(Cr-zn)/s,m=Math.max(this.groundY((u+d)/2-1),.4),y=p(d-u+.6,m,26,c%2===0?7636319:6847061,(u+d)/2,m/2,0);y.receiveShadow=!0,t.add(y)}const o=p(8,Rr,26,7636319,zn-4,Rr/2,0);o.receiveShadow=!0,t.add(o);for(const[c,u]of[[-2,-8],[4,8],[12,-8],[18,7],[26,-7],[-10,8]])t.add(p(1.6+Math.random(),1.1,1.4,6185560,c,.55,u)),t.add(p(.9,.6,.8,5396040,c+1,.3,u+.6));for(const[c,u]of[[-6,-9],[9,9],[22,-9],[30,8]]){const d=new at;d.add(p(.42,2.6,.42,6971222,0,1.3,0)),d.add(p(1.5,.28,.28,6971222,.45,2.2,0)),d.add(p(.28,1,.28,5918792,1.1,2.8,0)),d.position.set(c,this.groundY(c),u),t.add(d)}for(let c=0;c<=22;c++){const u=-30+c*3.1,d=p(.9+Math.random()*.5,.14,1.7+Math.random()*.6,12101768,u,this.groundY(u)+.07,(Math.random()-.5)*.7);d.castShadow=!1,t.add(d)}this.apollyon.position.copy(this.apHome),t.add(this.apollyon),t.add(this.groundSword),t.add(this.dart),t.add(this.swingArc);for(let c=0;c<12;c++){const u=new Mt({color:4867136,transparent:!0,opacity:0}),d=new Q(new _t(.4,.4,.4),u);d.visible=!1,d.castShadow=!1,t.add(d),this.smoke.push({mesh:d,m:u,life:1})}for(let c=0;c<22;c++){const u=new Mt({color:16773304,transparent:!0,opacity:0}),d=new Q(new _t(.16,.16,.16),u);d.visible=!1,t.add(d),this.sparkles.push({mesh:d,m:u,life:1,vx:0,vy:0,vz:0})}const a=new Q(new De(1.2,1.7,22,16,1,!0),new Mt({color:16774864,transparent:!0,opacity:0,side:Ve,depthWrite:!1,fog:!1}));a.position.set(aa-4,11,0),t.add(a),this.healBeam=a;const r=new at;r.add(p(.5,.1,.5,8373375,-.6,.3,0)),r.add(p(.4,.25,.4,14267242,.2,.35,.3));const l=new Q(new De(.14,.1,.3,8),ue(9058890));l.position.set(.5,.4,-.3),r.add(l),r.add(p(.9,.24,.9,15261129,0,.12,0)),r.position.set(aa-4,0,0),r.visible=!1,t.add(r),this.healProps=r;const h=new Q(new De(1.4,2,14,18,1,!0),new Mt({color:M.light,transparent:!0,opacity:.55,side:Ve,depthWrite:!1,fog:!1}));h.position.set(oa+1.5,7,0),t.add(h),this.lightBeam=h,t.add(this.christian.root)}enter(t){var e,i;return this.build(),this.revisit=t,this.chp=100,this.ahp=100,this.turn="busy",this.animKind=null,this.dartThrown=!1,this.spiritSword=!1,this.mutters=0,this.fleeT=0,this.knockT=0,this.sword.visible=!0,this.sword.scale.setScalar(1),this.swordGlow.material.opacity=0,this.groundSword.visible=!1,this.apollyon.visible=!t,this.apollyon.position.copy(this.apHome),this.apollyon.rotation.set(0,0,0),this.healBeam&&(this.healBeam.material.opacity=0),this.healProps&&(this.healProps.visible=!1),this.cb.battleUI(!1),this.christian.root.position.set(t?-28:-30,0,0),this.christian.root.position.y=this.groundY(this.christian.root.position.x),this.christian.root.rotation.y=Math.PI/2,(i=(e=this.cb).setMusic)==null||i.call(e,"sinai"),t?(this.phase="done",this.cb.setObjective("🌄 The Valley of Humiliation lies quiet — the scorch-marks remain")):(this.phase="descend",this.cb.setObjective("🌄 Walk down into the Valley of Humiliation")),{christian:this.christian}}moveFactor(){return this.phase==="confront"||this.phase==="battle"||this.phase==="anim"||this.phase==="fallen"||this.phase==="defeated"||this.phase==="healing"?0:1}canAttack(){return this.phase==="battle"&&this.turn==="player"}tryAttack(){this.canAttack()&&(this.turn="busy",this.phase="anim",this.animKind="swing",this.animT=0,this.cb.blipSound())}afterMove(){const t=this.christian.root.position;if(t.z=Pt.clamp(t.z,-7,7),t.x=Pt.clamp(t.x,ic-1,oa+2),t.y=this.groundY(t.x),this.revisit||this.phase==="done"){(t.x<ic||t.x>oa)&&this.cb.onExit();return}if(this.phase==="descend"){if(this.mutters===0&&t.x>g1){this.mutters=1,this.cb.playScript([{speaker:"Christian",text:"*to himself* Down, and down, and down… They named this the Valley of Humiliation. Well — I have been made low before."},{speaker:"Christian",text:"Low in the Slough, until Help took my paw. Low at the Gate, until Goodwill drew me through. He has never once left me at the bottom."}]);return}if(this.mutters===1&&t.x>y1){this.mutters=2,this.cb.playScript([{speaker:"Christian",text:"*to himself* Low under Sinai, until Evangelist found me. Low on my knees at the Cross — and THAT was the lightest I have ever been."},{speaker:"Christian",text:"And fed and armored at the Palace, only yesterday. Walking humbly is no misery at all, when you remember Who walks with you… It is almost peaceful down h—"}]);return}t.x>aa-7&&(this.phase="confront",this.cb.rumbleSound(),this.runConfrontation());return}this.phase==="freeroam"&&t.x>oa&&(this.phase="done",this.cb.onComplete())}runConfrontation(){this.cb.playScript([{speaker:"",text:"The peace shatters. Over the valley floor comes a monster the height of three houses — scaled like a fish, winged like a dragon, footed like a bear, and out of his lion's mouth roll fire and smoke."},{speaker:"Apollyon",text:"WHENCE come you, little pilgrim? And WHITHER are you bound?"},{speaker:"Christian",text:"I come from the City of Destruction, which is the place of all evil — and I am going to the City of Zion."},{speaker:"Apollyon",text:"Then you are MINE. I am the prince of that city — all who are born there are my subjects. Yet I am not angry. Turn back, serve me again, and what my country yields I will give you: riches. Honour. EASE."},{speaker:"Christian",text:"I have entered the service of another King. His wages, His servants, His country — I cannot go back on it."},{speaker:"Apollyon",text:"*a smile full of teeth* Serve HIM? YOU? You nearly drowned in the Slough. You took Worldly Wiseman's byway. You SLEPT on the hill and lost His scroll. You trembled at two chained lions. Shall I go on?"},{speaker:"Christian",text:"…All this is true. And you have left out more that you do not know. But the Prince I serve is merciful, and ready to forgive."},{speaker:"Christian",text:"I got these failings in YOUR country, Apollyon — they are the reason I left it. My Prince has pardoned every one."},{speaker:"Apollyon",text:"Then hear me plainly, worm: I am an ENEMY to this Prince. I hate His person, His laws, and His people. Here I SWEAR IT — you go no further. HERE YOU DIE."}],()=>{this.phase="battle",this.turn="player",this.cb.battleUI(!0),this.cb.setHP(this.chp,this.ahp),this.cb.setObjective("⚔ BATTLE! Press E to swing your sword!")})}playerHit(){const t=this.spiritSword?20+Math.floor(Math.random()*9):8+Math.floor(Math.random()*6);if(this.ahp=Math.max(0,this.ahp-t),this.cb.setHP(this.chp,this.ahp),this.burst(this.apollyon.position.x-1,3,this.apollyon.position.z,this.spiritSword?10:5,this.spiritSword?8042751:14212836),this.ahp<=0){this.beginDefeat();return}this.phase="anim",this.animKind=!this.dartThrown&&this.ahp<50?"dart":"claw",this.animT=-.5}enemyHit(){const t=10+Math.floor(Math.random()*6);this.chp=Math.max(this.dartThrown?12:20,this.chp-t),this.cb.setHP(this.chp,this.ahp),this.cb.rumbleSound(),this.burst(this.christian.root.position.x,1.2,this.christian.root.position.z,5,16747069),Math.random()<.5&&(this.knockT=1),this.phase="battle",this.turn="player"}dartHit(){this.chp=8,this.cb.setHP(this.chp,this.ahp),this.cb.rumbleSound();const t=this.christian.root.position;this.burst(t.x,1.4,t.z,12,16747069),this.sword.visible=!1,this.groundSword.position.set(t.x-2.2,this.groundY(t.x-2.2)+.5,t.z+1.4),this.groundSword.visible=!0,this.knockT=99,this.phase="fallen",this.cb.playScript([{speaker:"Apollyon",text:"*towering over him* NOW I have you. Prepare yourself to die — for all your fine Prince, HERE will I spill your soul!"},{speaker:"",text:"Christian's paw, groping in the dust… closes on the hilt of his sword."},{speaker:"Christian",text:'"REJOICE NOT AGAINST ME, O MINE ENEMY — WHEN I FALL… I SHALL ARISE!"'}],()=>{this.knockT=0,this.christian.root.rotation.z=0,this.chp=50,this.spiritSword=!0,this.sword.visible=!0,this.sword.scale.setScalar(1.45),this.swordGlow.material.opacity=.55,this.groundSword.visible=!1,this.cb.setHP(this.chp,this.ahp),this.cb.blipSound();const e=this.christian.root.position;this.burst(e.x,1.5,e.z,14,8042751),this.phase="battle",this.turn="player",this.cb.setObjective("⚔ The Sword of the Spirit blazes — press E and drive him back!")})}beginDefeat(){this.phase="defeated",this.fleeT=0,this.cb.battleUI(!1),this.cb.playScript([{speaker:"",text:"The blue blade bites deep. Apollyon staggers back — and for the first time, something like FEAR crosses the monster's face."},{speaker:"Apollyon",text:"This… is not… FINISHED, pilgrim…!"},{speaker:"",text:"He spreads his dragon wings with a crack like thunder, and flees away over the black ridges — and Christian sees him no more."},{speaker:"Christian",text:'*leaning on the sword, gasping* "In all these things… we are more than conquerors… through Him that loved us."'}],()=>{this.phase="healing",this.cb.setObjective("🍃 Light falls from heaven onto the road…"),window.setTimeout(()=>this.runHealing(),1400)})}runHealing(){this.healProps&&(this.healProps.visible=!0),this.cb.playScript([{speaker:"",text:"Then a hand appears, with leaves from the Tree of Life — and bread, and wine, set out on a white cloth in the light."},{speaker:"Christian",text:"*pressing the leaves to his wounds* …The stinging is gone. All of it, gone. Thank You — for the sword, and the fall, and the getting up again."},{speaker:"",text:"He eats, and is refreshed, and his hurts close over. Of all his scars, only the story remains."}],()=>{var t,e;this.chp=100,this.phase="freeroam",(e=(t=this.cb).setMusic)==null||e.call(t,"cross"),this.cb.setObjective("✨ On east, out of the valley, toward the light")})}burst(t,e,i,s,o){let a=0;for(const r of this.sparkles){if(a>=s)break;r.life<1||(a++,r.life=0,r.m.color.set(o),r.vx=(Math.random()-.5)*3,r.vy=1.2+Math.random()*2,r.vz=(Math.random()-.5)*3,r.mesh.position.set(t,e,i),r.mesh.visible=!0)}}update(t,e,i){if(!this.built)return;const s=this.christian.root.position;if(Ct(this.christian,e,i&&this.moveFactor()>0),this.knockT>0&&this.knockT<90?(this.knockT=Math.max(0,this.knockT-t),this.christian.root.rotation.z=-(Math.PI/2)*Pt.clamp(this.knockT/.5,0,1)):this.knockT>=90&&(this.christian.root.rotation.z=-Math.PI/2),this.phase==="anim"&&this.animKind){if(this.animT+=t,this.animKind==="swing"){const o=Pt.clamp(this.animT/.45,0,1);this.christian.armR.rotation.x=-2.2*Math.sin(o*Math.PI),this.swingArc.visible=o>.1&&o<.9,this.swingArc.position.set(s.x+1.4,1.4,s.z),this.swingArc.rotation.set(Math.PI/2-.4,0,-o*2.4),this.swingArc.material.opacity=.7*Math.sin(o*Math.PI),this.swingArc.material.color.set(this.spiritSword?8042751:14212836),this.christian.root.position.x=s.x+Math.sin(o*Math.PI)*t*6,this.animT>=.5&&(this.swingArc.visible=!1,this.christian.armR.rotation.x=0,this.animKind=null,this.playerHit())}else if(this.animKind==="claw"){if(this.animT>=0){const o=Pt.clamp(this.animT/.5,0,1);this.apollyon.position.x=this.apHome.x-Math.sin(o*Math.PI)*2.6,this.apJaw&&(this.apJaw.position.y=-.62-Math.sin(o*Math.PI)*.2),this.animT>=.55&&(this.apollyon.position.x=this.apHome.x,this.animKind=null,this.enemyHit())}}else if(this.animKind==="dart"&&(this.animT<0||(this.animT===0||!this.dart.visible)&&(this.dartThrown||(this.dartThrown=!0,this.dart.visible=!0,this.dart.position.set(this.apollyon.position.x-1,2.2,this.apollyon.position.z))),this.dart.visible)){const o=Pt.clamp(this.animT/.6,0,1);this.dart.position.x=Pt.lerp(this.apollyon.position.x-1,s.x,o),this.dart.position.y=2.2-o*1.2,this.dart.rotation.z=-.4,o>=1&&(this.dart.visible=!1,this.animKind=null,this.dartHit())}}if(this.apollyon.visible){const o=this.phase==="defeated"?Math.sin(e*14)*.5:Math.sin(e*2.2)*.16;for(let a=0;a<this.apWings.length;a++){const r=a<2?-1:1;this.apWings[a].rotation.z=(a%2===0?.5:.8)*r+o*r}if(this.apJaw&&this.phase!=="anim"&&(this.apJaw.position.y=-.62-Math.abs(Math.sin(e*1.8))*.08),this.smokeTimer-=t,this.smokeTimer<=0&&this.phase!=="descend"){this.smokeTimer=.35;const a=this.smoke.find(r=>r.life>=1);a&&(a.life=0,a.mesh.position.set(this.apollyon.position.x+(Math.random()-.5)*1.2,2.4,this.apollyon.position.z+1.1),a.mesh.visible=!0)}this.phase==="defeated"&&(this.fleeT+=t,this.apollyon.position.y+=t*(2+this.fleeT*2),this.apollyon.position.x+=t*(3+this.fleeT*3),this.apollyon.rotation.z=Math.min(.4,this.fleeT*.2),this.apollyon.position.y>30&&(this.apollyon.visible=!1))}for(const o of this.smoke)o.life>=1||(o.life=Math.min(1,o.life+t*.6),o.mesh.position.y+=t*1.6,o.mesh.position.x+=t*.4,o.mesh.scale.setScalar(.7+o.life*1.8),o.m.opacity=.5*(1-o.life),o.life>=1&&(o.mesh.visible=!1));for(const o of this.sparkles)o.life>=1||(o.life=Math.min(1,o.life+t*1.2),o.mesh.position.x+=o.vx*t,o.mesh.position.y+=o.vy*t,o.mesh.position.z+=o.vz*t,o.vy-=t*1.6,o.m.opacity=.9*(1-o.life),o.life>=1&&(o.mesh.visible=!1));if(this.healBeam){const o=this.healBeam.material,a=this.phase==="healing"?.5:0;o.opacity+=(a-o.opacity)*Math.min(t*2,1)}if(this.lightBeam){const o=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(o,1,o)}this.spiritSword&&(this.swordGlow.material.opacity=.4+.2*Math.abs(Math.sin(e*3)))}}const Pr=-30,ra=34,_1=1.1,Ir=-10,v1=-1,w1=10,Lr=20,ui=new C(200,0,0);class M1{constructor(t){T(this,"scene",new Ei);T(this,"phase","enter");T(this,"cb");T(this,"christian");T(this,"faithful");T(this,"faithfulJoined",!1);T(this,"lamp");T(this,"hemi",null);T(this,"groundMat",null);T(this,"dawnP",0);T(this,"sink",0);T(this,"sinkWarned",!1);T(this,"ditchWarned",!1);T(this,"noiseTimer",3);T(this,"storyFigures",[]);T(this,"splashes",[]);T(this,"lightBeam",null);T(this,"revisit",!1);T(this,"built",!1);this.cb=t,this.christian=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:M.robeWhite,sling:!0,plump:!0}),this.christian.body.add(p(1.18,.14,.86,M.robeGold,0,.3,0));const e=13620957,i=new at;i.add(p(1.02,.4,.86,e,0,.92,0)),i.add(p(.2,.24,.9,M.robeGold,0,1.16,0)),this.christian.head.add(i),this.christian.body.add(p(1.16,.62,.88,e,0,.42,0));const s=new at;s.add(p(.09,.95,.16,15265266,0,.55,0)),s.add(p(.3,.1,.2,M.robeGold,0,.04,0)),s.position.set(.16,-.5,.14),this.christian.armR.add(s),this.lamp=new Si(16772804,22,13),this.faithful=Ft({species:"sheep",fur:15986660,outfit:"shirt",outfitColor:11060386})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Dt(922918),t.fog=new hi(922918,5,20),this.hemi=new Ai(2765904,1317420,.35),t.add(this.hemi),this.groundMat=new Ui({color:2896450});const e=new Q(new _t(140,1,90),this.groundMat);e.position.y=-.5,e.receiveShadow=!0,t.add(e);for(let d=0;d<=62;d++){const m=-30+d*1.05,y=p(.9,.14,1.6,9080994,m,.07,0);y.castShadow=!1,t.add(y)}for(let d=0;d<20;d++){const m=-29+d*3.1;t.add(p(3.4,.06,3.6,329487,m,.03,-3.4)),t.add(p(3.6,.4,.5,1712178,m,.2,-1.7))}for(let d=0;d<20;d++){const m=-29+d*3.1,y=p(3.4,.12,4,3815984,m,.06,3.6);y.castShadow=!1,t.add(y),d%3===0&&t.add(p(.3,.2,.3,4868668,m,.2,3+Math.random()*1.5))}for(const[d,m]of[[-22,-2.4],[-14,2.3],[-8,-2.5],[-2,2.5],[4,-2.3]])t.add(p(.7,.35,.7,4143930,d,.18,m)),t.add(p(.12,.6,.12,4867136,d-.25,.5,m)),t.add(p(.12,.6,.12,4867136,d+.25,.5,m));for(const[d,m]of[[-18,2.6],[-5,-2.6],[7,2.4]])t.add(p(.8,.18,.24,12104872,d,.1,m)),t.add(p(.42,.32,.36,12104872,d+.6,.16,m+.1));const i=new at;i.add(p(2.2,1.3,1.6,2304056,0,.65,0)),i.add(p(1.1,.9,1,1843504,1.2,.7,0)),i.add(p(.2,.3,.1,3818072,1.6,.9,-.3)),i.add(p(.2,.3,.1,3818072,1.6,.9,.3)),i.position.set(-1,0,-3.4),t.add(i),this.faithful.root.position.set(Lr,0,-.4),this.faithful.root.rotation.y=Math.PI/2,t.add(this.faithful.root);const s=new at;s.add(p(30,.6,16,14207924,10,-.3,0)),s.add(p(30,6,.8,15129798,10,3,-8)),s.add(p(30,6,.8,15129798,10,3,8)),s.add(p(.8,6,16,15129798,-5,3,0)),s.add(p(.8,6,16,15129798,25,3,0));for(let d=0;d<4;d++){const m=d*7;s.add(p(5.4,.1,4.2,13221286,m,.06,-5.4)),s.add(p(.5,4.4,.5,13615787,m-2.6,2.2,-6.8)),s.add(p(.5,4.4,.5,13615787,m+2.6,2.2,-6.8))}s.position.copy(ui),t.add(s);const o=new Si(16772813,1.5,40);o.position.set(ui.x+10,5,0),t.add(o);const a=Ft({species:"cat",fur:15126464,outfit:"dress",outfitColor:14253962});a.root.position.set(ui.x+0,.1,-5.2);const r=Ft({species:"bear",fur:10129274,outfit:"shirt",outfitColor:9075290,scale:1.05});r.root.position.set(ui.x+6.2,.1,-5.4);const l=Ft({species:"bear",fur:11049612,outfit:"robe",outfitColor:6974074,scale:1.1});l.root.position.set(ui.x+8.2,.1,-5),l.armR.add(p(.14,1.6,.14,M.woodDark,.1,-.4,.2)),l.armR.rotation.x=-2.2;const h=Ft({species:"mouse",fur:12102300,outfit:"shirt",outfitColor:5921386});h.root.position.set(ui.x+14,.1,-5.2);const c=Ft({species:"pig",fur:16103104,outfit:"shirt",outfitColor:6965858,scale:1.15});c.root.position.set(ui.x+21,.1,-5.2),this.storyFigures=[a,r,l,h,c];for(const d of this.storyFigures)d.root.rotation.y=Math.PI,this.scene.add(d.root);for(let d=0;d<10;d++){const m=new Mt({color:4868668,transparent:!0,opacity:0}),y=new Q(new _t(.2,.2,.2),m);y.visible=!1,t.add(y),this.splashes.push({mesh:y,m,life:1,vx:0,vz:0})}const u=new Q(new De(1.4,2,14,18,1,!0),new Mt({color:M.light,transparent:!0,opacity:.55,side:Ve,depthWrite:!1,fog:!1}));u.position.set(ra+1.5,7,0),t.add(u),this.lightBeam=u,t.add(this.lamp),t.add(this.christian.root)}applyDawn(t){const i=this.phase==="enter"||this.phase==="dark"||this.phase==="whisper"||this.phase==="psalm"?0:1;this.dawnP+=(i-this.dawnP)*Math.min(t*.6,1);const s=new Dt(922918),o=new Dt(13624562),a=s.clone().lerp(o,this.dawnP);this.scene.background.copy(a);const r=this.scene.fog;r.color.copy(a),r.near=5+this.dawnP*30,r.far=20+this.dawnP*70,this.hemi&&(this.hemi.intensity=.35+this.dawnP*.75,this.hemi.color.set(this.dawnP>.5?14674418:2765904)),this.groundMat&&this.groundMat.color.set(2896450).lerp(new Dt(8361074),this.dawnP);const l=this.christian.root.position,h=l.x<60?Pt.clamp(1-(l.x-Ir)/(v1-Ir),.45,1):1;this.lamp.intensity=22*h*(1-this.dawnP),this.lamp.position.set(l.x,2.4,l.z+2.6)}enter(t){var e,i;return this.build(),this.revisit=t,this.sink=0,this.sinkWarned=!1,this.ditchWarned=!1,this.faithfulJoined=!1,this.dawnP=t?1:0,this.faithful.root.visible=!t,this.christian.root.position.set(t?-27:-29,0,0),this.christian.root.rotation.y=Math.PI/2,(i=(e=this.cb).setMusic)==null||i.call(e,"slough"),t?(this.phase="done",this.cb.setObjective("🌫 The Valley of the Shadow, by daylight — every pit plainly seen")):(this.phase="enter",this.cb.setObjective("🌑 The valley mouth swallows the road — keep to the path, whatever comes")),{christian:this.christian}}moveFactor(){return this.phase==="whisper"||this.phase==="psalm"||this.phase==="lookback"||this.phase==="meet"?0:this.sink>.2?.4:1}afterMove(t){const e=this.christian.root.position;if(e.x>100){e.x=Pt.clamp(e.x,ui.x-4,ui.x+24),e.z=Pt.clamp(e.z,-6.6,6.6),e.y=.1,this.storyTriggers(e);return}e.z=Pt.clamp(e.z,-4.4,4.4),e.x=Pt.clamp(e.x,Pr-1,ra+2);const s=Math.abs(e.z)>_1,o=this.dawnP>.6;if(s&&e.z<0&&e.x<12&&!o?e.z<-1.8&&(this.cb.rumbleSound(),e.z=0,e.x=Math.max(Pr+1,e.x-1.5),this.ditchWarned||(this.ditchWarned=!0,this.cb.playScript([{speaker:"Christian",text:"*scrabbling back from the crumbling edge* The ground ENDS there — that's not shadow, that's a PIT with no bottom to it! Path. Stay on the path."}]))):s&&e.z>0&&e.x<12&&!o?(this.sink=Math.min(1.3,this.sink+t*.7),Math.random()<t*6&&this.spawnSplash(e.x,e.z),this.sink>=1.25&&(this.cb.splashSound(),this.sink=0,e.z=0,this.sinkWarned||(this.sinkWarned=!0,this.cb.playScript([{speaker:"Christian",text:"*hauling himself out, dripping* The mire — it had my knees, then my belt, all in a moment! One narrow path, Christian. ONE. Walk it."}])))):this.sink=Math.max(0,this.sink-t*2),e.y=-this.sink*.55,this.revisit||this.phase==="done"){(e.x<Pr||e.x>ra)&&this.cb.onExit();return}if(this.phase==="enter"&&e.x>-26){this.phase="dark",this.cb.playScript([{speaker:"",text:"The dark closes like water over his head. A path one stride wide; on the left a ditch with no bottom, on the right a mire with no mercy — and his little light reaches barely past his own paws."},{speaker:"Christian",text:'"Yea, though I walk through the valley of the shadow of death…" Keep saying it, Christian. Keep walking.'}],()=>{this.cb.setObjective("🌑 One stride wide — ditch on the left, mire on the right. Walk the line.")});return}if(this.phase==="dark"&&e.x>Ir){this.phase="whisper",this.cb.playScript([{speaker:"",text:"The dark is full of sounds now — roars with no beast, chains with no prisoner, feet with no walker. And then, close against his ear, a whisper: soft, familiar, and utterly vile."},{speaker:"Christian",text:"…What… WHAT did I just—? That thought was never mine! I would never— *shudders* …would I?"},{speaker:"",text:"So the enemy works in the dark: he whispers his own filth, and lets the pilgrim believe it came from his own heart."},{speaker:"Christian",text:"I cannot fight what I cannot see. But I can still do the one thing the dark cannot stop — Lord, HELP me. Hold me on this path."}],()=>{this.phase="psalm",window.setTimeout(()=>this.runPsalm(),400)});return}if(this.phase==="dawnbreak"&&e.x>w1){this.phase="lookback",this.christian.root.rotation.y=-Math.PI/2,this.cb.playScript([{speaker:"",text:"And then — morning. Grey, then silver, then gold. For the first time, Christian sees the valley he has walked through."},{speaker:"Christian",text:"…Snares. Pits. A trap not two paces from where I stumbled. And — is that thing SLEEPING?! I walked past THAT?"},{speaker:"Christian",text:"I never saw any of it. Not one danger of the hundred… and not one of them touched me. You had me by the paw the whole night long, didn't You."}],()=>{this.phase="meet",window.setTimeout(()=>this.runMeeting(),400)});return}this.phase==="walkfinal"&&e.x>ra&&(this.phase="done",this.cb.onComplete())}runPsalm(){this.cb.playScript([{speaker:"",text:"Then — a voice. Not behind, not beside: AHEAD, somewhere on the same path, steady as a heartbeat in the dark."},{speaker:"???",text:'"…though I walk through the valley of the shadow of death, I will fear no evil — for THOU art with me…"'},{speaker:"Christian",text:"Another pilgrim! Here, in this same night, on this same path — and unafraid enough to pray out loud!"},{speaker:"Christian",text:"Then God is here too — and I am not alone in the dark after all. Walk on, friend ahead. I'm coming."}],()=>{this.phase="dawnbreak",this.cb.setObjective("🌒 Follow the voice east — the dark cannot last forever")})}runMeeting(){this.cb.playScript([{speaker:"",text:"And there, at the valley's end, stands the owner of the voice: a white sheep with a traveller's pack, squinting back up the path."},{speaker:"Faithful",text:"Baa—! CHRISTIAN?! Of the City of Destruction? Neighbour, it's ME — Faithful! I told you our roads would meet past the dark places!"},{speaker:"Christian",text:"FAITHFUL! *nearly knocks him over* Yours was the voice in the valley! Your psalm walked me through that whole terrible night!"},{speaker:"Faithful",text:"And someone's footsteps behind me kept MY wool from turning grey, so we're even. Come, walk with me — and I'll tell you everything that's happened since you left home."}],()=>{var t,e;(e=(t=this.cb).fade)==null||e.call(t,()=>{var i,s;this.christian.root.position.set(ui.x-2.5,.1,-1),this.christian.root.rotation.y=Math.PI/2,this.faithful.root.position.set(ui.x-2.5,.1,1.5),this.faithful.root.rotation.y=Math.PI/2,(s=(i=this.cb).setMusic)==null||s.call(i,"interpreter")}),this.phase="story1",window.setTimeout(()=>{this.cb.playScript([{speaker:"",text:"As Faithful talks, the road seems to fall away, and his story rises around them like rooms of a house — four memories, four doors."}],()=>{this.cb.setObjective("🚪 Walk to the first alcove — the lady called Wanton")})},700)})}storyTriggers(t){const e=i=>Math.hypot(t.x-(ui.x+i),t.z- -4.2)<2.6;if(this.phase==="story1"&&e(0)){this.phase="story2",this.cb.playScript([{speaker:"Faithful",text:"First, near the very start, a lady called WANTON. All smiles and soft words — promising every pleasure a young sheep could dream of, if only I'd step off the road a while."},{speaker:"Christian",text:"And you—?"},{speaker:"Faithful",text:"Shut my eyes, remembered whose I am, and WALKED. Some arguments, Christian, you don't win by debating. You win them with your legs."}],()=>this.cb.setObjective("🚪 The second alcove — the old man and the rod"));return}if(this.phase==="story2"&&e(7)){this.phase="story3",this.cb.playScript([{speaker:"Faithful",text:"Then at the foot of the hill, an old man: ADAM THE FIRST, of the town of Deceit. Offered me his whole estate and his three daughters for wages — the Lust of the Flesh, the Lust of the Eyes, and the Pride of Life."},{speaker:"Faithful",text:"I'll be honest — I half wanted it. And the moment I half-turned, one came behind me swift as wind: MOSES. He knocked me flat, and beat me, and would have made an end of me."},{speaker:"Christian",text:"Moses?! But why?"},{speaker:"Faithful",text:"Because that is all the Law can do, friend — it shows no mercy, because it HAS none to show. I'd be lying there still, if One had not come by with holes in His paws and bidden him stop."}],()=>this.cb.setObjective("🚪 The third alcove — sour Discontent"));return}if(this.phase==="story3"&&e(14)){this.phase="story4",this.cb.playScript([{speaker:"Faithful",text:'In the Valley of Humiliation I met DISCONTENT. "Why suffer?" says he. "The valley is beneath you. Your friends back home would blush to see you in it."'},{speaker:"Faithful",text:"I told him: before honour is humility. The friends he spoke of never loved me — and the ones ahead never leave. He had no answer to that."}],()=>this.cb.setObjective("🚪 The last alcove — the one called Shame"));return}if(this.phase==="story4"&&e(21)){this.phase="return",this.cb.playScript([{speaker:"Faithful",text:"And last — the worst of the lot, though he has the friendliest face. SHAME. He never threatens, Christian. He only… smirks."},{speaker:"Faithful",text:'"Religion is unmanly," says he. "The clever people laugh at it. A tender conscience will embarrass you at every party in town."'},{speaker:"Christian",text:"That one has whispered at my ear too. He's harder to outrun than any lion."},{speaker:"Faithful",text:`Aye — because he waits INSIDE. I fell to him a hundred times before I saw it plain: the world's laughter is over in a breath. The King's "well done" is forever. Choose whose approval you'll live on, and Shame starves.`},{speaker:"",text:"The rooms of memory fade like morning mist — and the two pilgrims stand again on the valley road, in the broad light of day."}],()=>{var i,s;(s=(i=this.cb).fade)==null||s.call(i,()=>{var o,a;this.dawnP=1,this.christian.root.position.set(Lr+1,0,0),this.christian.root.rotation.y=Math.PI/2,this.faithful.root.position.set(Lr-1.5,0,1.2),this.faithful.root.rotation.y=Math.PI/2,this.faithfulJoined=!0,(a=(o=this.cb).setMusic)==null||a.call(o,"cross")}),this.phase="walkfinal",window.setTimeout(()=>{this.cb.setObjective("🐑 Walk on east together, into the light")},700)});return}}spawnSplash(t,e){const i=this.splashes.find(s=>s.life>=1);i&&(i.life=0,i.vx=(Math.random()-.5)*1.2,i.vz=(Math.random()-.5)*1.2,i.mesh.position.set(t,.2,e),i.mesh.visible=!0)}update(t,e,i){if(this.built){if(this.applyDawn(t),Ct(this.christian,e,i&&this.moveFactor()>0),this.dawnP<.4&&this.christian.root.position.x<60&&(this.phase==="dark"||this.phase==="dawnbreak"||this.phase==="enter")&&(this.noiseTimer-=t,this.noiseTimer<=0&&(this.noiseTimer=2.5+Math.random()*4,Math.random()<.6?this.cb.rumbleSound():this.cb.blipSound())),this.faithful.root.visible)if(this.faithfulJoined){const s=this.christian.root.position,o=this.faithful.root.position,a=s.x-2-o.x,r=s.z+1.2-o.z,l=Math.hypot(a,r);if(l>.25){const h=Math.min(6.6,l*2.5)*t;o.x+=a/l*h,o.z+=r/l*h,this.faithful.root.rotation.y=Math.atan2(a,r),Ct(this.faithful,e+.6,!0)}else Ct(this.faithful,e+.6,!1)}else Ct(this.faithful,e+.6,!1);for(let s=0;s<this.storyFigures.length;s++)Ct(this.storyFigures[s],e*.5+s*1.7,!1);for(const s of this.splashes)s.life>=1||(s.life=Math.min(1,s.life+t*2.4),s.mesh.position.x+=s.vx*t,s.mesh.position.z+=s.vz*t,s.mesh.position.y+=t*(.8-s.life),s.m.opacity=.75*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if(this.lightBeam){const s=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(s,1,s),this.lightBeam.material.opacity=.2+this.dawnP*.4}}}}const b1=document.getElementById("app"),He=new wg({antialias:!0});He.setPixelRatio(Math.min(window.devicePixelRatio,2));He.setSize(window.innerWidth,window.innerHeight);He.shadowMap.enabled=!0;He.shadowMap.type=rc;b1.appendChild(He.domElement);const Fi=new Ei;Fi.background=new Dt(M.sky);Fi.fog=new hi(M.fog,55,130);const ne=new ti(50,window.innerWidth/window.innerHeight,.1,300);Fi.add(new Ai(14676223,13232320,.9));const sn=new Ni(M.sun,1.6);sn.position.set(-30,45,25);sn.castShadow=!0;sn.shadow.mapSize.set(2048,2048);sn.shadow.camera.left=-60;sn.shadow.camera.right=60;sn.shadow.camera.top=60;sn.shadow.camera.bottom=-60;sn.shadow.camera.far=150;Fi.add(sn);const Di=Wg(Fi),bn=qg(Fi),me=Ft({species:"bear",fur:M.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0,plump:!0});me.root.position.set(-6,0,-4);Fi.add(me.root);const pt={talkedToEvangelist:!1,talkedToFamily:!1,chaseDone:!1,eggsCollected:0,pliableFollowing:!1,pliableLeft:!1,chapterComplete:!1,sloughComplete:!1,moralityDone:!1,wicketDone:!1,interpreterDone:!1,crossDone:!1,highwayDone:!1,hillDone:!1,palaceDone:!1,valleyDone:!1,shadowDone:!1},ee=new Kg,ot=new $g(window.innerWidth/window.innerHeight);let oe="village";const et={objective:document.getElementById("objective"),prompt:document.getElementById("prompt"),promptWho:document.querySelector("#prompt .who"),promptKey:document.querySelector("#prompt .key"),dialogue:document.getElementById("dialogue"),dialogueName:document.querySelector("#dialogue .name"),dialogueText:document.querySelector("#dialogue .text"),musicBtn:document.getElementById("music-btn"),talkBtn:document.getElementById("talk-btn"),joystick:document.getElementById("joystick"),stick:document.querySelector("#joystick .stick"),titleScreen:document.getElementById("title-screen"),startBtn:document.getElementById("start-btn"),ending:document.getElementById("ending"),restartBtn:document.getElementById("restart-btn"),debugBtn:document.getElementById("debug-btn"),debugPanel:document.getElementById("debug-panel"),fade:document.getElementById("fade")};function Ll(n,t=420){et.fade.classList.add("show"),window.setTimeout(()=>{n(),requestAnimationFrame(()=>et.fade.classList.remove("show"))},t)}const Be=window.matchMedia("(pointer: coarse)").matches;Be&&(document.body.classList.add("touch"),et.promptKey.style.display="none");let Zn=!1;et.startBtn.addEventListener("click",()=>{Zn=!0,ee.start(),et.titleScreen.classList.add("hidden"),setTimeout(()=>et.titleScreen.style.display="none",900)});et.musicBtn.addEventListener("click",()=>{ee.start(),et.musicBtn.textContent=ee.toggle()?"🎵":"🔇"});et.restartBtn.addEventListener("click",()=>window.location.reload());let fo=null,Le=!1,Sn=!1;function Oi(n,t,e,i){Le=!0,document.getElementById("ending-title").textContent=n,document.getElementById("ending-sub").textContent=t,document.getElementById("ending-body").textContent=e,fo=i,et.ending.style.display="flex",et.ending.classList.add("hidden"),requestAnimationFrame(()=>requestAnimationFrame(()=>et.ending.classList.remove("hidden")))}const S1=document.getElementById("continue-btn");S1.addEventListener("click",()=>{ee.blip(),Le=!1,et.ending.classList.add("hidden"),setTimeout(()=>et.ending.style.display="none",900),de=!1,Jn=null,wo=null,et.dialogue.style.display="none",et.talkBtn.style.display="none",fo==null||fo(),fo=null});function Te(){oe="map",ee.setStyle("map"),et.promptKey.style.display="none",Ke(pt.shadowDone?"🗺 Through the Shadow with Faithful — Chapter XI, Vanity Fair, coming soon…":pt.valleyDone?"🗺 Apollyon is fled — but a darker valley waits: the Shadow of Death…":pt.palaceDone?"🗺 Armed head to paw — down into the Valley of Humiliation":pt.hillDone?"🗺 Over the Hill Difficulty — a white palace glows in the dusk ahead!":pt.highwayDone?"🗺 A steep mountain looms past the night road — the Hill Difficulty!":pt.crossDone?"🗺 The burden is gone! On along the King's Highway, into the evening…":pt.wicketDone?"🗺 Past the Gate a green hill rises — on to the place of deliverance!":pt.moralityDone?"🗺 The long road east lies open — on toward the Wicket Gate!":pt.sloughComplete?"🗺 East to the crossroad — a smooth byway and a barred road":"🗺 The road east — onward to the Slough of Despond")}const $i=new Zg({playScript:ii,setObjective:Ke,splashSound:()=>ee.splash(),onExit:()=>Te(),onComplete:()=>{if(pt.sloughComplete=!0,pt.pliableFollowing&&(pt.pliableLeft=!0),pt.pliableLeft){const n=bn.findIndex(t=>t.id==="pliable");n!==-1&&(Fi.remove(bn[n].parts.root),bn.splice(n,1),qc.splice(n,1))}Oi("🌊 Chapter II Complete","Through the Slough of Despond","Pliable turned back at the first hardship — but Christian, with Help's strong paw, came through the mire, burden and all. The road runs on…",()=>{ot.sloughDone=!0,ot.start([]),ot.progress=ot.sloughT,Te()})}});let Ma=null;const Cs=new Qg({playScript:ii,setObjective:Ke,onExit:()=>Te(),rumbleSound:()=>ee.rumble(),onComplete:()=>{pt.moralityDone=!0,Oi("⛰ Chapter III Complete","Mr. Worldly Wiseman and Mount Sinai","The smooth byway led only beneath the burning mountain of the Law. Evangelist unmasked the flatterer, and Christian turned back to the true way — the long road east lies open at last…",()=>{ot.moralityDone=!0,ot.road="main",ot.progress=ot.forkT,ot.start([]),Te()})}});let ba=null;function La(n){oe="morality",ee.setStyle("sinai"),et.prompt.style.display="none",et.talkBtn.style.display="none",ba=Cs.enter(n),Et.copy(ba.christian.root.position)}const xi=new a1({playScript:ii,setObjective:Ke,onExit:()=>Te(),rumbleSound:()=>ee.rumble(),blipSound:()=>ee.blip(),setMusic:n=>ee.setStyle(n),fade:n=>Ll(()=>{n(),Gs&&Et.copy(Gs.christian.root.position)}),onComplete:()=>{pt.wicketDone=!0,pt.interpreterDone=!0,Oi("🚪 Chapter IV Complete","The Wicket Gate and the House of the Interpreter","Goodwill the great lion drew Christian through the Gate, out of the reach of Beelzebub's arrows, and set his feet on the King's Highway. There, in a cottage by the road, the Interpreter — a wise old owl — showed him six sights to carry in his heart: the dust and the water, Passion and Patience, the fire and the hidden oil, the armed man at the palace gate, the caged professor, and the dream of judgment. Somewhere ahead now lies the place of deliverance, where the burden falls of itself…",()=>{ot.sloughDone=!0,ot.moralityDone=!0,ot.wicketDone=!0,ot.start([]),ot.road="main",ot.progress=ot.beyondT,Te()})}});let Gs=null;const Rs=new h1({playScript:ii,setObjective:Ke,onExit:()=>Te(),blipSound:()=>ee.blip(),setMusic:n=>ee.setStyle(n),onComplete:()=>{pt.crossDone=!0,Oi("✝ Chapter V Complete","The Cross and the Empty Tomb","At the top of the hill the burden loosened of itself, rolled down into the open tomb, and was never seen again. Three Shining Ones met Christian there: his sins forgiven, his rags exchanged for shining garments, a seal on his forehead and a sealed scroll in his paw — the King's own promise. Not by the hard journey, nor by any good deed, but by grace alone he goes on now, singing, toward the Celestial City…",()=>{ot.sloughDone=!0,ot.moralityDone=!0,ot.wicketDone=!0,ot.crossDone=!0,ot.start([]),ot.road="main",ot.progress=ot.crossT,Te()})}});let Sa=null;const Ps=new u1({playScript:ii,setObjective:Ke,onExit:()=>Te(),blipSound:()=>ee.blip(),setMusic:n=>ee.setStyle(n),onComplete:()=>{pt.highwayDone=!0,Oi("🌙 Chapter VI Complete","The King's Highway","Beside the road three sleepers — Simple, Sloth and Presumption — waved away every warning and slept on in their chains; no one can be woken who is determined to sleep. Then Formalist and Hypocrisy came over the wall, trusting custom instead of the King's command, and fell in alongside. As the sun set, the three walked on together toward the light — but only one of them carries the King's scroll and seal…",()=>{ot.sloughDone=!0,ot.moralityDone=!0,ot.wicketDone=!0,ot.crossDone=!0,ot.highwayDone=!0,ot.start([]),ot.road="main",ot.progress=ot.highwayT,Te()})}});let Ta=null;const Zi=new f1({playScript:ii,setObjective:Ke,onExit:()=>Te(),blipSound:()=>ee.blip(),setMusic:n=>ee.setStyle(n),onComplete:()=>{pt.hillDone=!0,Oi("⛰ Chapter VII Complete","The Hill of Difficulty","At the hill's foot Formalist and Hypocrisy took the easy ways called Danger and Destruction, and were never seen again. Christian took the steep path — dozed too long in the Lord's arbor, lost the scroll of his assurance, and humbly climbed the hill twice to win it back. Even the news of lions ahead could not turn him: behind lies certain ruin, ahead — whatever comes — lies life. He presses on toward the Celestial City…",()=>{ot.sloughDone=!0,ot.moralityDone=!0,ot.wicketDone=!0,ot.crossDone=!0,ot.highwayDone=!0,ot.hillDone=!0,ot.start([]),ot.road="main",ot.progress=ot.hillT,Te()})}});let Ea=null;function Da(n){oe="hill",et.prompt.style.display="none",et.talkBtn.style.display="none",Ea=Zi.enter(n),Et.copy(Ea.christian.root.position)}const Is=new m1({playScript:ii,setObjective:Ke,onExit:()=>Te(),rumbleSound:()=>ee.rumble(),blipSound:()=>ee.blip(),setMusic:n=>ee.setStyle(n),fade:n=>Ll(()=>{n(),Vs&&Et.copy(Vs.christian.root.position)}),onComplete:()=>{pt.palaceDone=!0,Oi("🏰 Chapter VIII Complete","Palace Beautiful","Between the roaring lions — chained, though he could not see it — Christian kept the middle of the path and reached Palace Beautiful. There Discretion, Prudence, Piety and Charity heard his whole story, showed him the records and treasures of the King, and from the rooftop he glimpsed — far, far off — the shining Celestial City itself. Armed at their hands with the whole Armor of God, he goes down now into the Valley of Humiliation…",()=>{ot.sloughDone=!0,ot.moralityDone=!0,ot.wicketDone=!0,ot.crossDone=!0,ot.highwayDone=!0,ot.hillDone=!0,ot.palaceDone=!0,ot.start([]),ot.road="main",ot.progress=ot.palaceT,Te()})}});let Vs=null;function ka(n){oe="palace",et.prompt.style.display="none",et.talkBtn.style.display="none",Vs=Is.enter(n),Et.copy(Vs.christian.root.position)}const T1=document.getElementById("battle-ui"),E1=document.querySelector("#battle-ui .brow.chr .bfill"),A1=document.querySelector("#battle-ui .brow.apo .bfill"),Ji=new x1({playScript:ii,setObjective:Ke,onExit:()=>Te(),rumbleSound:()=>ee.rumble(),blipSound:()=>ee.blip(),setMusic:n=>ee.setStyle(n),battleUI:n=>T1.classList.toggle("show",n),setHP:(n,t)=>{E1.style.width=`${Math.max(0,n)}%`,A1.style.width=`${Math.max(0,t)}%`},onComplete:()=>{pt.valleyDone=!0,Oi("⚔ Chapter IX Complete","The Valley of Humiliation",'Apollyon barred the whole breadth of the way — and neither his offers nor his accusations could move a pilgrim who answered only: "My Prince is merciful, and ready to forgive." The battle was long; Christian fell, and his sword flew from his paw — but "when I fall, I shall ARISE." With the Sword of the Spirit blazing he drove the Destroyer into the sky, was healed with leaves from the Tree of Life, and walks on: more than conqueror…',()=>{ot.sloughDone=!0,ot.moralityDone=!0,ot.wicketDone=!0,ot.crossDone=!0,ot.highwayDone=!0,ot.hillDone=!0,ot.palaceDone=!0,ot.valleyDone=!0,ot.start([]),ot.road="main",ot.progress=ot.valleyT,Te()})}});let Aa=null;function Ua(n){oe="valley",et.prompt.style.display="none",et.talkBtn.style.display="none",Aa=Ji.enter(n),Et.copy(Aa.christian.root.position)}const Ls=new M1({playScript:ii,setObjective:Ke,onExit:()=>Te(),rumbleSound:()=>ee.rumble(),blipSound:()=>ee.blip(),splashSound:()=>ee.splash(),setMusic:n=>ee.setStyle(n),fade:n=>Ll(()=>{n(),Ws&&Et.copy(Ws.christian.root.position)}),onComplete:()=>{pt.shadowDone=!0,Oi("🐑 Chapter X Complete","The Valley of the Shadow of Death","Through a night with no bottom to its darkness — a stride-wide path between the ditch and the mire, noises with no owners, whispers that wore his own voice — Christian walked by prayer instead of sight. Dawn showed him every pit and snare he had been carried past, and at the valley's end stood the voice that had prayed him through it: FAITHFUL, his own neighbour from the City of Destruction. Two pilgrims now, walking east together…",()=>{ot.sloughDone=!0,ot.moralityDone=!0,ot.wicketDone=!0,ot.crossDone=!0,ot.highwayDone=!0,ot.hillDone=!0,ot.palaceDone=!0,ot.valleyDone=!0,ot.shadowDone=!0,ot.start([]),ot.road="main",ot.progress=ot.shadowT,Te()})}});let Ws=null;function Na(n){oe="shadow",et.prompt.style.display="none",et.talkBtn.style.display="none",Ws=Ls.enter(n),Et.copy(Ws.christian.root.position)}function Fa(n){oe="highway",et.prompt.style.display="none",et.talkBtn.style.display="none",Ta=Ps.enter(n),Et.copy(Ta.christian.root.position)}function Oa(n){oe="cross",et.prompt.style.display="none",et.talkBtn.style.display="none",Sa=Rs.enter(n),Et.copy(Sa.christian.root.position)}function Ns(n){oe="wicket",ee.setStyle("gate"),et.prompt.style.display="none",et.talkBtn.style.display="none",Gs=xi.enter(n),Et.copy(Gs.christian.root.position)}function za(n){oe="slough",ee.setStyle("slough"),et.prompt.style.display="none",et.talkBtn.style.display="none",Ma=$i.enter(!n&&pt.pliableFollowing&&!pt.pliableLeft,n),Et.copy(Ma.christian.root.position)}function Hc(){oe="village",ee.setStyle("village"),me.root.position.set(li.east-5,0,0),me.root.rotation.y=-Math.PI/2,Et.copy(me.root.position),et.prompt.style.display="none",et.promptKey.style.display=Be?"none":"inline-block",Be&&(et.talkBtn.style.display="none"),Ke("🏘 Home for a visit — the shining light in the east leads back to the road")}function Ke(n){et.objective.textContent=n}let Ba=[],vo=0,de=!1,Jn=null,wo=null;function ii(n,t){Jn=null,Ba=n,vo=0,de=!0,wo=t??null,et.dialogue.style.display="block",et.prompt.style.display="none",Be&&(et.talkBtn.style.display="block"),Dl()}function Gc(n){Jn=n,Ba=n.getLines(pt),vo=0,de=!0,et.dialogue.style.display="block",et.prompt.style.display="none",et.talkBtn.style.display="none",Dl();const t=me.root.position.x-n.parts.root.position.x,e=me.root.position.z-n.parts.root.position.z;n.parts.root.rotation.y=Math.atan2(t,e)}function Dl(){const n=Ba[vo];et.dialogueName.textContent=n.speaker,et.dialogueText.textContent=n.text,et.dialogue.classList.toggle("christian",n.speaker==="Christian"),et.dialogue.classList.toggle("narration",n.speaker==="")}function Ha(){var i;if(ee.blip(),vo++,vo<Ba.length){Dl();return}de=!1,et.dialogue.style.display="none";const n=Jn;Jn=null;const t=wo;if(wo=null,t){t();return}if(!n)return;const e=pt.talkedToEvangelist;(i=n.onFinish)==null||i.call(n,pt),!e&&pt.talkedToEvangelist&&C1()}et.dialogue.addEventListener("click",Ha);function C1(){Di.lightBeam.visible=!0,Di.gate.open=!0,Ke("✨ Follow the shining light through the Wicket Gate!")}const ht=new Set;window.addEventListener("keydown",n=>{n.repeat||(ht.add(n.code),(n.code==="KeyE"||n.code==="Space"||n.code==="Enter"||n.key==="e"||n.key==="E"||n.key===" "||n.key==="Enter")&&(de?Ha():oe==="map"?Vc():oe==="village"?Yc():oe==="slough"?$i.talkToHelp():oe==="hill"?Zi.tryPickScroll():oe==="valley"&&Ji.tryAttack()))});function Vc(){const n=ot.spot();n==="slough"?za(pt.sloughComplete):n==="city"?Hc():n==="morality"?La(pt.moralityDone):n==="beyond"?Ns(pt.wicketDone):n==="cross"?Oa(pt.crossDone):n==="highway"?Fa(pt.highwayDone):n==="hill"?Da(pt.hillDone):n==="palace"?ka(pt.palaceDone):n==="valley"?Ua(pt.valleyDone):n==="shadow"&&Na(pt.shadowDone)}window.addEventListener("keyup",n=>ht.delete(n.code));window.addEventListener("blur",()=>ht.clear());document.addEventListener("visibilitychange",()=>{document.hidden&&ht.clear()});window.addEventListener("keydown",n=>{n.code!=="Digit9"&&n.code!=="Digit8"||de||Le||(Object.assign(pt,{talkedToEvangelist:!0,talkedToFamily:!0,chaseDone:!0,pliableFollowing:!0,chapterComplete:!0,sloughComplete:!0,pliableLeft:!0}),pt.moralityDone=n.code==="Digit8",Zn||(Zn=!0,ee.start(),et.titleScreen.classList.add("hidden"),setTimeout(()=>et.titleScreen.style.display="none",400)),ot.sloughDone=!0,ot.moralityDone=pt.moralityDone,ot.start([]),ot.road="main",ot.progress=pt.moralityDone?ot.forkT:ot.sloughT,Te())});function R1(){Zn||(Zn=!0,ee.start(),et.titleScreen.classList.add("hidden"),setTimeout(()=>et.titleScreen.style.display="none",400))}et.debugBtn.addEventListener("click",()=>{et.debugPanel.classList.toggle("open")});et.debugPanel.addEventListener("click",n=>{const t=n.target.closest("button[data-jump]");if(!t)return;const e=t.dataset.jump;et.debugPanel.classList.remove("open"),R1(),de=!1,Jn=null,wo=null,Le=!1,Sn=!1,et.dialogue.style.display="none",et.ending.style.display="none";const s=["village","slough","morality","wicket-approach","cross","highway","hill","palace","valley","shadow"].indexOf(e==="wicket-highway"||e==="interpreter"?"wicket-approach":e==="map"?"village":e);s>=2&&(ot.sloughDone=!0),s>=3&&(ot.moralityDone=!0),s>=4&&(ot.wicketDone=!0),s>=5&&(ot.crossDone=!0,pt.crossDone=!0),s>=6&&(ot.highwayDone=!0,pt.highwayDone=!0),s>=7&&(ot.hillDone=!0,pt.hillDone=!0),s>=8&&(ot.palaceDone=!0,pt.palaceDone=!0),s>=9&&(ot.valleyDone=!0,pt.valleyDone=!0),e==="village"?Hc():e==="slough"?za(!1):e==="morality"?La(!1):e==="wicket-approach"?Ns(!1):e==="wicket-highway"?(Ns(!1),xi.debugSkip("highway")):e==="interpreter"?(Ns(!1),xi.debugSkip("house")):e==="cross"?Oa(!1):e==="highway"?Fa(!1):e==="hill"?Da(!1):e==="palace"?ka(!1):e==="valley"?Ua(!1):e==="shadow"?Na(!1):e==="map"&&(ot.start([]),ot.road="main",Te())});const se={active:!1,id:-1,x:0,y:0};et.joystick.addEventListener("pointerdown",n=>{se.active=!0,se.id=n.pointerId,et.joystick.setPointerCapture(n.pointerId),Xc(n)});et.joystick.addEventListener("pointermove",n=>{se.active&&n.pointerId===se.id&&Xc(n)});const Wc=n=>{n.pointerId===se.id&&(se.active=!1,se.x=0,se.y=0,et.stick.style.transform="translate(-50%, -50%)")};et.joystick.addEventListener("pointerup",Wc);et.joystick.addEventListener("pointercancel",Wc);function Xc(n){const t=et.joystick.getBoundingClientRect(),e=t.left+t.width/2,i=t.top+t.height/2;let s=(n.clientX-e)/(t.width/2),o=(n.clientY-i)/(t.height/2);const a=Math.hypot(s,o);a>1&&(s/=a,o/=a),se.x=s,se.y=o,et.stick.style.transform=`translate(calc(-50% + ${s*33}px), calc(-50% + ${o*33}px))`}et.talkBtn.addEventListener("click",()=>{de?Ha():oe==="map"?Vc():oe==="village"?Yc():oe==="slough"?$i.talkToHelp():oe==="hill"?Zi.tryPickScroll():oe==="valley"&&Ji.tryAttack()});const P1=3.2;let _n=null,go=null;function I1(){let n=null,t=P1;for(const e of bn){const i=e.parts.root.position.distanceTo(me.root.position);i<t&&(n=e,t=i)}return n}function L1(){let n=null,t=1/0;for(const e of Di.interactables){const i=Math.hypot(e.x-me.root.position.x,e.z-me.root.position.z);i<e.r&&i<t&&(n=e,t=i)}return n}function Yc(){de||(_n?Gc(_n):go&&O1(go))}const nc={};function D1(n,t){const e=nc[n]??0;return nc[n]=(e+1)%t.length,t[e]}const k1=[[{speaker:"",text:"The village well. He leans over and sees his own tired reflection looking back."}],[{speaker:"",text:"The water is cool and still. For a moment, the weight on his back feels almost bearable."}],[{speaker:"",text:"Someone has tied a faded ribbon to the crossbeam. He wonders what they wished for."}]],U1=[[{speaker:"",text:"He works the handle. Cold water gushes into the trough below."}],[{speaker:"",text:"Splash! A few droplets catch the morning light like tiny stars."}]],N1=[[{speaker:"Chickens",text:"Bawk! Bawk-bawk!"},{speaker:"Christian",text:"Easy now, ladies. I only came to say good morning."}],[{speaker:"Chickens",text:"*peck peck peck*"}]],F1=[[{speaker:"Cow",text:"Mooooo."},{speaker:"",text:"Old Hamlet's cow, watching him with those big brown eyes again."}],[{speaker:"Cow",text:"Mooo-oo."},{speaker:"Christian",text:"I don't suppose you'd care to carry this burden a while?"}]];function O1(n){if(n.id==="nest"){if(pt.eggsCollected<3){pt.eggsCollected++;const i=pt.eggsCollected;ii([{speaker:"",text:i<3?`He gently takes an egg, still warm. (${i}/3 collected)`:"He takes the last egg — the little basket is full. Time to bring these home to Christiana."}])}else ii([{speaker:"",text:"The nest is empty for now. Perhaps the hens will lay more tomorrow."}]);return}const e={well:k1,pump:U1,chickens:N1,cow:F1}[n.id];e&&ii(D1(n.id,e))}const Ce=7,Ri=new C(0,13,13),z1=new C(0,7.5,7.5),Et=new C;let Dr=!1;const kl=[];for(let n=0;n<16;n++){const t=new Mt({color:16777215,transparent:!0,opacity:0}),e=new Q(new _t(.22,.22,.22),t);e.visible=!1,e.castShadow=!1,Fi.add(e),kl.push({mesh:e,mat:t,life:1,vx:0,vz:0})}let kr=0;function B1(n,t){const e=kl.find(i=>i.life>=1);e&&(e.life=0,e.vx=(Math.random()-.5)*.8,e.vz=(Math.random()-.5)*.8,e.mesh.position.set(n,.12,t),e.mesh.visible=!0)}function H1(n){for(const t of kl){if(t.life>=1)continue;t.life=Math.min(1,t.life+n*2.2),t.mesh.position.x+=t.vx*n,t.mesh.position.z+=t.vz*n,t.mesh.position.y+=n*.9;const e=.6+t.life*1.6;t.mesh.scale.setScalar(e),t.mat.opacity=.55*(1-t.life),t.life>=1&&(t.mesh.visible=!1)}}function G1(n){for(const a of Di.colliders){const r=n.x-a.x,l=n.z-a.z,h=Math.hypot(r,l),c=a.r+.6;h<c&&h>1e-4&&(n.x=a.x+r/h*c,n.z=a.z+l/h*c)}for(const a of bn){const r=n.x-a.parts.root.position.x,l=n.z-a.parts.root.position.z,h=Math.hypot(r,l);h<1.1&&h>1e-4&&(n.x=a.parts.root.position.x+r/h*1.1,n.z=a.parts.root.position.z+l/h*1.1)}const e=li.west+1.4,i=li.east-1.2,s=li.south-1.4;Math.abs(n.z)<li.gateHalfWidth&&n.x>i-2&&Di.gate.open?(n.z=Pt.clamp(n.z,-1.9,li.gateHalfWidth),n.x=Math.min(n.x,li.east+8)):(n.x=Pt.clamp(n.x,e,i),n.z=Pt.clamp(n.z,-s,s))}let pa=!1,Ur=!1;const yo={obstinate:!1,pliable:!1},V1=[{speaker:"Obstinate",text:"CHRISTIAN! Stop right there, you great woolly fool! Come back at once!"},{speaker:"Christian",text:"I cannot, neighbours. This city will not stand — I go to seek a country that cannot crumble. You have seen the light yonder; come with me!"},{speaker:"Obstinate",text:"What?! Leave our friends, our comforts, our whole city — for a dream out of that book of yours?"},{speaker:"Christian",text:"What I seek is worth more than all we would leave behind. Come and see for yourselves!"},{speaker:"Obstinate",text:"Pah! I'll not be dragged on any fool's errand. Pliable — take his other arm. We are hauling him home."},{speaker:"Pliable",text:"Weeeell… actually, Obstinate… golden crowns? Streets of light? A city that never crumbles? …My paws are tingling."},{speaker:"Pliable",text:"I'm going WITH him! Think of it — glory, adventure, and no more of your grumbling!"},{speaker:"Obstinate",text:"You TOO?! Of all the—! FINE! Go drown in a bog together, the pair of you! I am going home like a SENSIBLE creature. HMPH!"},{speaker:"Pliable",text:"Don't mind him. Lead the way, friend Christian — hop hop!"}];function W1(){Sn=!0,pa=!0,yo.obstinate=!1,yo.pliable=!1,me.root.rotation.y=-Math.PI/2,Ke("❗ Someone is shouting after you…")}let sc=0;function X1(n,t){let e=0,i=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(i-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(i+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(e-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(e+=1),e+=se.x,i+=se.y;const s=Math.hypot(e,i);if(Dr=s>.15&&!de&&Zn&&!Le&&!Sn,Dr){e/=Math.max(s,1),i/=Math.max(s,1);const o=me.root.position;o.x+=e*Ce*n,o.z+=i*Ce*n,G1(o),me.root.rotation.y=Pi(me.root.rotation.y,Math.atan2(e,i),12*n),!pt.talkedToEvangelist&&o.x>li.east-4&&Math.abs(o.z)<5&&t-sc>4&&(sc=t,Ke("🚪 The gate is shut fast… Evangelist on the east road may know the way.")),kr-=n,kr<=0&&(kr=.13,B1(o.x+(Math.random()-.5)*.5,o.z+(Math.random()-.5)*.5))}Ct(me,t,Dr),pt.talkedToEvangelist&&!pt.chaseDone&&!Sn&&me.root.position.x>li.east-8&&Math.abs(me.root.position.z)<4.5&&W1(),pt.talkedToEvangelist&&!Sn&&me.root.position.distanceTo(Di.lightBeam.position)<3.4&&(pt.chapterComplete?Le||Te():(pt.chapterComplete=!0,Oi("✨ Chapter I Complete","Christian leaves the City of Destruction","Obstinate turned back in disgust, but Pliable hops eagerly alongside. Through the Wicket Gate and into the wide world — the first step on the long road to the Celestial City…",()=>{ot.start(pt.pliableFollowing&&!pt.pliableLeft?["pliable"]:[]),Te()})))}function Pi(n,t,e){let i=t-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return n+i*Math.min(e,1)}const qc=bn.map(n=>({home:n.position.clone(),target:n.position.clone(),wait:Math.random()*4,moving:!1}));function Y1(n,t){bn.forEach((e,i)=>{const s=qc[i],o=de&&Jn===e;if(pa&&(e.id==="obstinate"||e.id==="pliable")){const r=e.parts.root.position,l=me.root.position.x-(e.id==="pliable"?1.3:2.6),h=me.root.position.z-(e.id==="pliable"?2.3:1.1),c=l-r.x,u=h-r.z,d=Math.hypot(c,u);if(d>.25){const m=Math.min(13.5*n,d);r.x+=c/d*m,r.z+=u/d*m,e.parts.root.rotation.y=Math.atan2(c,u),Ct(e.parts,t*1.4+i,!0)}else{yo[e.id]=!0;const m=me.root.position.x-r.x,y=me.root.position.z-r.z;e.parts.root.rotation.y=Math.atan2(m,y),Ct(e.parts,t+i,!1)}return}if(e.id==="obstinate"&&Ur){const r=e.parts.root.position,l=e.position.x-r.x,h=e.position.z-r.z,c=Math.hypot(l,h);c>.25?(r.x+=l/c*3.6*n,r.z+=h/c*3.6*n,e.parts.root.rotation.y=Math.atan2(l,h),Ct(e.parts,t+i,!0)):(Ur=!1,e.parts.root.rotation.y=e.facing,Ct(e.parts,t+i,!1));return}if(e.id==="pliable"&&pt.pliableFollowing&&!pt.pliableLeft&&!o){const r=e.parts.root.position,l=me.root.position.x-r.x,h=me.root.position.z-r.z,c=Math.hypot(l,h);if(c>2.1){const u=Math.min(Ce*.92,c*2.5)*n;r.x+=l/c*u,r.z+=h/c*u,e.parts.root.rotation.y=Math.atan2(l,h),Ct(e.parts,t+.4,!0)}else Ct(e.parts,t+.4,!1);return}if(!e.wanderRadius||o||Sn){Ct(e.parts,t+i*1.7,!1);return}const a=e.parts.root.position;if(s.moving){const r=s.target.x-a.x,l=s.target.z-a.z,h=Math.hypot(r,l);if(h<.15)s.moving=!1,s.wait=2+Math.random()*5;else{const c=1.6*n;a.x+=r/h*c,a.z+=l/h*c,e.parts.root.rotation.y=Math.atan2(r,l)}}else if(s.wait-=n,s.wait<=0){const r=Math.random()*Math.PI*2,l=Math.random()*e.wanderRadius;s.target.set(s.home.x+Math.cos(r)*l,0,s.home.z+Math.sin(r)*l),s.moving=!0}Ct(e.parts,t+i*1.7,s.moving)}),pa&&yo.obstinate&&yo.pliable&&!de&&(pa=!1,ii(V1,()=>{pt.chaseDone=!0,pt.pliableFollowing=!0,Ur=!0,Sn=!1,Ke("✨ On to the shining light — Pliable comes too!")}))}const oc=new Cg;function Kc(){requestAnimationFrame(Kc);const n=Math.min(oc.getDelta(),.05),t=oc.elapsedTime;if(oe==="map"){let e=0,i=0;(ht.has("KeyD")||ht.has("ArrowRight"))&&(e+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(e-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(i+=1),(ht.has("KeyW")||ht.has("ArrowUp"))&&(i-=1),e+=se.x,i+=se.y,ot.update(n,t,Pt.clamp(e,-1,1),Pt.clamp(i,-1,1)),ot.justDiverted&&(ot.justDiverted=!1,Ke("🎩 The east road is barred — a smooth byway curves aside toward Morality…"));const s=ot.spot();if(s==="slough"&&!pt.sloughComplete){za(!1);return}if(s==="morality"&&!pt.moralityDone){La(!1);return}if(s==="beyond"&&!pt.wicketDone){Ns(!1);return}if(s==="cross"&&!pt.crossDone){Oa(!1);return}if(s==="highway"&&!pt.highwayDone){Fa(!1);return}if(s==="hill"&&!pt.hillDone){Da(!1);return}if(s==="palace"&&!pt.palaceDone){ka(!1);return}if(s==="valley"&&!pt.valleyDone){Ua(!1);return}if(s==="shadow"&&!pt.shadowDone){Na(!1);return}et.prompt.style.display=s==="road"?"none":"block",et.promptKey.style.display="none",Be&&(et.talkBtn.style.display="none"),s==="city"?et.promptWho.textContent="🏘 Visit the City of Destruction":s==="slough"?et.promptWho.textContent=pt.sloughComplete?"🌊 Revisit the Slough of Despond":"Enter the Slough of Despond":s==="morality"?et.promptWho.textContent=pt.moralityDone?"⛰ Revisit the foot of Mount Sinai":"Enter the pleasant village of Morality":s==="fork"?et.promptWho.textContent=pt.moralityDone?"🪧 A crossroad — east: the true way · press S for the byway":"🪧 A crossroad — the east road is barred…":s==="beyond"?et.promptWho.textContent=pt.wicketDone?"🚪 Revisit the Wicket Gate":"🚪 Knock at the Wicket Gate":s==="cross"?et.promptWho.textContent=pt.crossDone?"✝ Revisit the hill of the Cross":"✝ Climb the hill to the Cross":s==="highway"?et.promptWho.textContent=pt.highwayDone?"🌙 Walk the King's Highway again":"🌙 Set out along the King's Highway":s==="hill"?et.promptWho.textContent=pt.hillDone?"⛰ Climb the Hill Difficulty again":"⛰ Face the Hill Difficulty":s==="palace"?et.promptWho.textContent=pt.palaceDone?"🏰 Call again at Palace Beautiful":"🏰 Approach Palace Beautiful":s==="valley"?et.promptWho.textContent=pt.valleyDone?"🌄 Revisit the Valley of Humiliation":"🌄 Descend into the Valley of Humiliation":s==="shadow"&&(et.promptWho.textContent=pt.shadowDone?"🌑 Walk the Shadow valley again":"🌑 Enter the Valley of the Shadow of Death"),s!=="road"&&s!=="fork"&&(et.promptKey.style.display=Be?"none":"inline-block",Be&&(et.talkBtn.textContent="Enter",et.talkBtn.style.display="block")),He.render(ot.scene,ot.camera);return}if(oe==="slough"&&Ma){const e=Ma.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=$i.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),$i.afterMove(r),$i.update(n,t,r);const l=$i.nearHelp()&&!de&&!Le;et.prompt.style.display=l?"block":"none",l?(et.promptKey.style.display=Be?"none":"inline-block",et.promptWho.textContent="Talk to Help",Be&&(et.talkBtn.textContent="Talk",et.talkBtn.style.display="block")):Be&&!de&&(et.talkBtn.style.display="none"),Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render($i.scene,ne);return}if(oe==="morality"&&ba){const e=ba.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=Cs.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),Cs.afterMove(),Cs.update(n,t,r),Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(Cs.scene,ne);return}if(oe==="wicket"&&Gs){const e=Gs.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=xi.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),xi.afterMove(),xi.update(n,t,r);const l=xi.phase==="house"||xi.phase==="houseGreet"||xi.phase==="houseExit";Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(l?z1:Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(xi.scene,ne);return}if(oe==="cross"&&Sa){const e=Sa.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=Rs.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),Rs.afterMove(),Rs.update(n,t,r),Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(Rs.scene,ne);return}if(oe==="highway"&&Ta){const e=Ta.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=Ps.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),Ps.afterMove(),Ps.update(n,t,r),Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(Ps.scene,ne);return}if(oe==="hill"&&Ea){const e=Ea.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=Zi.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),Zi.afterMove(),Zi.update(n,t,r);const l=Zi.nearScroll()&&!de&&!Le;et.prompt.style.display=l?"block":"none",l?(et.promptKey.style.display=Be?"none":"inline-block",et.promptWho.textContent="Pick up the scroll",Be&&(et.talkBtn.textContent="Take",et.talkBtn.style.display="block")):Be&&!de&&(et.talkBtn.style.display="none"),Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(Zi.scene,ne);return}if(oe==="palace"&&Vs){const e=Vs.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=Is.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),Is.afterMove(),Is.update(n,t,r),Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(Is.scene,ne);return}if(oe==="valley"&&Aa){const e=Aa.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=Ji.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),Ji.afterMove(),Ji.update(n,t,r);const l=Ji.canAttack()&&!de&&!Le;et.prompt.style.display=l?"block":"none",l?(et.promptKey.style.display=Be?"none":"inline-block",et.promptWho.textContent="Swing the sword!",Be&&(et.talkBtn.textContent="⚔",et.talkBtn.style.display="block")):Be&&!de&&(et.talkBtn.style.display="none"),Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(Ji.scene,ne);return}if(oe==="shadow"&&Ws){const e=Ws.christian;let i=0,s=0;(ht.has("KeyW")||ht.has("ArrowUp"))&&(s-=1),(ht.has("KeyS")||ht.has("ArrowDown"))&&(s+=1),(ht.has("KeyA")||ht.has("ArrowLeft"))&&(i-=1),(ht.has("KeyD")||ht.has("ArrowRight"))&&(i+=1),i+=se.x,s+=se.y;const o=Math.hypot(i,s),a=Ls.moveFactor(),r=o>.15&&!de&&!Le&&a>0;r&&(i/=Math.max(o,1),s/=Math.max(o,1),e.root.position.x+=i*Ce*a*n,e.root.position.z+=s*Ce*a*n,e.root.rotation.y=Pi(e.root.rotation.y,Math.atan2(i,s),12*n)),Ls.afterMove(n),Ls.update(n,t,r),Et.lerp(e.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(Ls.scene,ne);return}if(Zn&&(X1(n,t),Y1(n,t),_n=de?null:I1(),go=de||_n?null:L1(),(_n||go)&&!Le&&!Sn?(et.prompt.style.display="block",et.promptWho.textContent=_n?`Talk to ${_n.name}`:`Look at ${go.name}`,Be&&(et.talkBtn.textContent=_n?"Talk":"Look",et.talkBtn.style.display="block")):(et.prompt.style.display="none",de||(et.talkBtn.style.display="none"))),Di.update(t),H1(n),Di.lightBeam.visible){const e=1+Math.sin(t*2.4)*.12;Di.lightBeam.scale.set(e,1,e)}Et.lerp(me.root.position,Math.min(4*n,1)),ne.position.copy(Et).add(Ri),ne.lookAt(Et.x,Et.y+1.4,Et.z),He.render(Fi,ne)}window.addEventListener("resize",()=>{ne.aspect=window.innerWidth/window.innerHeight,ne.updateProjectionMatrix(),ot.resize(window.innerWidth/window.innerHeight),He.setSize(window.innerWidth,window.innerHeight)});Kc();window.__game={christian:me,npcs:bn,quest:pt,world:Di,openDialogue:Gc,advanceDialogue:Ha,camTarget:Et,worldMap:ot,slough:$i,enterSlough:za,morality:Cs,enterMorality:La,wicket:xi,enterWicket:Ns,cross:Rs,enterCross:Oa,highway:Ps,enterHighway:Fa,hill:Zi,enterHill:Da,palace:Is,enterPalace:ka,valley:Ji,enterValley:Ua,shadow:Ls,enterShadow:Na,playScript:ii,goToMap:Te,get mode(){return oe}};
