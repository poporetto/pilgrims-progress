var Nc=Object.defineProperty;var Fc=(i,t,e)=>t in i?Nc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var st=(i,t,e)=>Fc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="166",Oc=0,Po=1,kc=2,Hl=1,Gl=2,Sn=3,Yn=0,ze=1,En=2,Wn=0,qi=1,Lo=2,Io=3,Do=4,Bc=5,li=100,zc=101,Hc=102,Gc=103,Vc=104,Wc=200,Xc=201,qc=202,Yc=203,wa=204,ba=205,Kc=206,jc=207,$c=208,Zc=209,Jc=210,Qc=211,th=212,eh=213,nh=214,ih=0,sh=1,rh=2,_r=3,ah=4,oh=5,lh=6,ch=7,so=0,hh=1,dh=2,Xn=0,uh=1,fh=2,ph=3,mh=4,gh=5,_h=6,vh=7,Vl=300,ji=301,$i=302,Ea=303,Ta=304,Cr=306,Aa=1e3,hi=1001,Ca=1002,Ke=1003,xh=1004,Is=1005,tn=1006,zr=1007,di=1008,Pn=1009,Wl=1010,Xl=1011,xs=1012,ro=1013,fi=1014,Tn=1015,ws=1016,ao=1017,oo=1018,Zi=1020,ql=35902,Yl=1021,Kl=1022,rn=1023,jl=1024,$l=1025,Yi=1026,Ji=1027,Zl=1028,lo=1029,Jl=1030,co=1031,ho=1033,cr=33776,hr=33777,dr=33778,ur=33779,Ra=35840,Pa=35841,La=35842,Ia=35843,Da=36196,Ua=37492,Na=37496,Fa=37808,Oa=37809,ka=37810,Ba=37811,za=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,Ka=37820,ja=37821,fr=36492,$a=36494,Za=36495,Ql=36283,Ja=36284,Qa=36285,to=36286,Mh=3200,yh=3201,tc=0,Sh=1,Gn="",ln="srgb",jn="srgb-linear",uo="display-p3",Rr="display-p3-linear",vr="linear",ce="srgb",xr="rec709",Mr="p3",vi=7680,Uo=519,wh=512,bh=513,Eh=514,ec=515,Th=516,Ah=517,Ch=518,Rh=519,eo=35044,No="300 es",An=2e3,yr=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fo=1234567;const ms=Math.PI/180,Ms=180/Math.PI;function Rn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function fo(i,t){return(i%t+t)%t}function Ph(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Lh(i,t,e){return i!==t?(e-i)/(t-i):0}function gs(i,t,e){return(1-e)*i+e*t}function Ih(i,t,e,n){return gs(i,t,1-Math.exp(-e*n))}function Dh(i,t=1){return t-Math.abs(fo(i,t*2)-t)}function Uh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Nh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Fh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Oh(i,t){return i+Math.random()*(t-i)}function kh(i){return i*(.5-Math.random())}function Bh(i){i!==void 0&&(Fo=i);let t=Fo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zh(i){return i*ms}function Hh(i){return i*Ms}function Gh(i){return(i&i-1)===0&&i!==0}function Vh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),m=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*m,a*c);break;case"YZY":i.set(l*m,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*m,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const re={DEG2RAD:ms,RAD2DEG:Ms,generateUUID:Rn,clamp:Re,euclideanModulo:fo,mapLinear:Ph,inverseLerp:Lh,lerp:gs,damp:Ih,pingpong:Dh,smoothstep:Uh,smootherstep:Nh,randInt:Fh,randFloat:Oh,randFloatSpread:kh,seededRandom:Bh,degToRad:zh,radToDeg:Hh,isPowerOfTwo:Gh,ceilPowerOfTwo:Vh,floorPowerOfTwo:Wh,setQuaternionFromProperEuler:Xh,normalize:ne,denormalize:en};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],m=n[2],p=n[5],g=n[8],v=s[0],u=s[3],d=s[6],b=s[1],w=s[4],T=s[7],B=s[2],R=s[5],E=s[8];return r[0]=o*v+a*b+l*B,r[3]=o*u+a*w+l*R,r[6]=o*d+a*T+l*E,r[1]=c*v+h*b+f*B,r[4]=c*u+h*w+f*R,r[7]=c*d+h*T+f*E,r[2]=m*v+p*b+g*B,r[5]=m*u+p*w+g*R,r[8]=m*d+p*T+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,m=a*l-h*r,p=c*r-o*l,g=e*f+n*m+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=m*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new Gt;function nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qh(){const i=Sr("canvas");return i.style.display="block",i}const Oo={};function po(i){i in Oo||(Oo[i]=!0,console.warn(i))}function Yh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ko=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bo=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ds={[jn]:{transfer:vr,primaries:xr,toReference:i=>i,fromReference:i=>i},[ln]:{transfer:ce,primaries:xr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rr]:{transfer:vr,primaries:Mr,toReference:i=>i.applyMatrix3(Bo),fromReference:i=>i.applyMatrix3(ko)},[uo]:{transfer:ce,primaries:Mr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Bo),fromReference:i=>i.applyMatrix3(ko).convertLinearToSRGB()}},Kh=new Set([jn,Rr]),ie={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ds[t].toReference,s=Ds[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ds[i].primaries},getTransfer:function(i){return i===Gn?vr:Ds[i].transfer}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class jh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=Sr("canvas")),xi.width=t.width,xi.height=t.height;const n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $h=0;class ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vr(s[o].image)):r.push(Vr(s[o]))}else r=Vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;class Fe extends es{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=hi,s=hi,r=tn,o=di,a=rn,l=Pn,c=Fe.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Rn(),this.name="",this.source=new ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Vl;Fe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],m=l[1],p=l[5],g=l[9],v=l[2],u=l[6],d=l[10];if(Math.abs(h-m)<.01&&Math.abs(f-v)<.01&&Math.abs(g-u)<.01){if(Math.abs(h+m)<.1&&Math.abs(f+v)<.1&&Math.abs(g+u)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,T=(p+1)/2,B=(d+1)/2,R=(h+m)/4,E=(f+v)/4,I=(g+u)/4;return w>T&&w>B?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=E/n):T>B?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=R/s,r=I/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=E/r,s=I/r),this.set(n,s,r,e),this}let b=Math.sqrt((u-g)*(u-g)+(f-v)*(f-v)+(m-h)*(m-h));return Math.abs(b)<.001&&(b=1),this.x=(u-g)/b,this.y=(f-v)/b,this.z=(m-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jh extends es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ic(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Jh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sc extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qh extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const m=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=m,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(f!==v||l!==m||c!==p||h!==g){let u=1-a;const d=l*m+c*p+h*g+f*v,b=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const B=Math.sqrt(w),R=Math.atan2(B,d*b);u=Math.sin(u*R)/B,a=Math.sin(a*R)/B}const T=a*b;if(l=l*u+m*T,c=c*u+p*T,h=h*u+g*T,f=f*u+v*T,u===1-a){const B=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=B,c*=B,h*=B,f*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],m=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*p-c*m,t[e+1]=l*g+h*m+c*f-a*p,t[e+2]=c*g+h*p+a*m-l*f,t[e+3]=h*g-a*f-l*m-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),m=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=m*h*f+c*p*g,this._y=c*p*f-m*h*g,this._z=c*h*g+m*p*f,this._w=c*h*f-m*p*g;break;case"YXZ":this._x=m*h*f+c*p*g,this._y=c*p*f-m*h*g,this._z=c*h*g-m*p*f,this._w=c*h*f+m*p*g;break;case"ZXY":this._x=m*h*f-c*p*g,this._y=c*p*f+m*h*g,this._z=c*h*g+m*p*f,this._w=c*h*f-m*p*g;break;case"ZYX":this._x=m*h*f-c*p*g,this._y=c*p*f+m*h*g,this._z=c*h*g-m*p*f,this._w=c*h*f+m*p*g;break;case"YZX":this._x=m*h*f+c*p*g,this._y=c*p*f+m*h*g,this._z=c*h*g-m*p*f,this._w=c*h*f-m*p*g;break;case"XZY":this._x=m*h*f-c*p*g,this._y=c*p*f-m*h*g,this._z=c*h*g+m*p*f,this._w=c*h*f+m*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],m=n+a+f;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,m=Math.sin(e*h)/c;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=s*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new P,zo=new bs;class Es{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ze):Ze.fromBufferAttribute(r,o),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Ns.subVectors(this.max,ss),Mi.subVectors(t.a,ss),yi.subVectors(t.b,ss),Si.subVectors(t.c,ss),Nn.subVectors(yi,Mi),Fn.subVectors(Si,yi),Zn.subVectors(Mi,Si);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Zn.y,Zn.x,0];return!Xr(e,Mi,yi,Si,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,Mi,yi,Si,Ns))?!1:(Fs.crossVectors(Nn,Fn),e=[Fs.x,Fs.y,Fs.z],Xr(e,Mi,yi,Si,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new P,new P,new P,new P,new P,new P,new P,new P],Ze=new P,Us=new Es,Mi=new P,yi=new P,Si=new P,Nn=new P,Fn=new P,Zn=new P,ss=new P,Ns=new P,Fs=new P,Jn=new P;function Xr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const td=new Es,rs=new P,qr=new P;class mo{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):td.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(qr)),this.expandByPoint(rs.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new P,Yr=new P,Os=new P,On=new P,Kr=new P,ks=new P,jr=new P;class ed{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yr.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Yr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Os),a=On.dot(this.direction),l=-On.dot(Os),c=On.lengthSq(),h=Math.abs(1-o*o);let f,m,p,g;if(h>0)if(f=o*l-a,m=o*a-l,g=r*h,f>=0)if(m>=-g)if(m<=g){const v=1/h;f*=v,m*=v,p=f*(f+o*m+2*a)+m*(o*f+m+2*l)+c}else m=r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m=-r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m<=-g?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c):m<=g?(f=0,m=Math.min(Math.max(-r,-l),r),p=m*(m+2*l)+c):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Yr).addScaledVector(Os,m),p}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),h>=0?(r=(t.min.y-m.y)*h,o=(t.max.y-m.y)*h):(r=(t.max.y-m.y)*h,o=(t.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-m.z)*f,l=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,l=(t.min.z-m.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),ks.subVectors(n,t),jr.crossVectors(Kr,ks);let o=this.direction.dot(jr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(ks.crossVectors(On,ks));if(l<0)return null;const c=a*this.direction.dot(Kr.cross(On));if(c<0||l+c>o)return null;const h=-a*On.dot(jr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,r,o,a,l,c,h,f,m,p,g,v,u){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,m,p,g,v,u)}set(t,e,n,s,r,o,a,l,c,h,f,m,p,g,v,u){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=m,d[3]=p,d[7]=g,d[11]=v,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const m=o*h,p=o*f,g=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=m-v*c,e[9]=-a*l,e[2]=v-m*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*h,p=l*f,g=c*h,v=c*f;e[0]=m+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*h,p=l*f,g=c*h,v=c*f;e[0]=m-v*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*h,p=o*f,g=a*h,v=a*f;e[0]=l*h,e[4]=g*c-p,e[8]=m*c+v,e[1]=l*f,e[5]=v*c+m,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-m*f,e[8]=g*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+g,e[10]=m-v*f}else if(t.order==="XZY"){const m=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=m*f+v,e[5]=o*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*h,e[10]=v*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nd,t,id)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),kn.crossVectors(n,Ve),kn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),kn.crossVectors(n,Ve)),kn.normalize(),Bs.crossVectors(Ve,kn),s[0]=kn.x,s[4]=Bs.x,s[8]=Ve.x,s[1]=kn.y,s[5]=Bs.y,s[9]=Ve.y,s[2]=kn.z,s[6]=Bs.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],m=n[9],p=n[13],g=n[2],v=n[6],u=n[10],d=n[14],b=n[3],w=n[7],T=n[11],B=n[15],R=s[0],E=s[4],I=s[8],S=s[12],x=s[1],D=s[5],W=s[9],V=s[13],K=s[2],$=s[6],Y=s[10],Q=s[14],q=s[3],ot=s[7],mt=s[11],_t=s[15];return r[0]=o*R+a*x+l*K+c*q,r[4]=o*E+a*D+l*$+c*ot,r[8]=o*I+a*W+l*Y+c*mt,r[12]=o*S+a*V+l*Q+c*_t,r[1]=h*R+f*x+m*K+p*q,r[5]=h*E+f*D+m*$+p*ot,r[9]=h*I+f*W+m*Y+p*mt,r[13]=h*S+f*V+m*Q+p*_t,r[2]=g*R+v*x+u*K+d*q,r[6]=g*E+v*D+u*$+d*ot,r[10]=g*I+v*W+u*Y+d*mt,r[14]=g*S+v*V+u*Q+d*_t,r[3]=b*R+w*x+T*K+B*q,r[7]=b*E+w*D+T*$+B*ot,r[11]=b*I+w*W+T*Y+B*mt,r[15]=b*S+w*V+T*Q+B*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],m=t[10],p=t[14],g=t[3],v=t[7],u=t[11],d=t[15];return g*(+r*l*f-s*c*f-r*a*m+n*c*m+s*a*p-n*l*p)+v*(+e*l*p-e*c*m+r*o*m-s*o*p+s*c*h-r*l*h)+u*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*f+e*a*m+s*o*f-n*o*m+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],m=t[10],p=t[11],g=t[12],v=t[13],u=t[14],d=t[15],b=f*u*c-v*m*c+v*l*p-a*u*p-f*l*d+a*m*d,w=g*m*c-h*u*c-g*l*p+o*u*p+h*l*d-o*m*d,T=h*v*c-g*f*c+g*a*p-o*v*p-h*a*d+o*f*d,B=g*f*l-h*v*l-g*a*m+o*v*m+h*a*u-o*f*u,R=e*b+n*w+s*T+r*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=b*E,t[1]=(v*m*r-f*u*r-v*s*p+n*u*p+f*s*d-n*m*d)*E,t[2]=(a*u*r-v*l*r+v*s*c-n*u*c-a*s*d+n*l*d)*E,t[3]=(f*l*r-a*m*r-f*s*c+n*m*c+a*s*p-n*l*p)*E,t[4]=w*E,t[5]=(h*u*r-g*m*r+g*s*p-e*u*p-h*s*d+e*m*d)*E,t[6]=(g*l*r-o*u*r-g*s*c+e*u*c+o*s*d-e*l*d)*E,t[7]=(o*m*r-h*l*r+h*s*c-e*m*c-o*s*p+e*l*p)*E,t[8]=T*E,t[9]=(g*f*r-h*v*r-g*n*p+e*v*p+h*n*d-e*f*d)*E,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*d+e*a*d)*E,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*p-e*a*p)*E,t[12]=B*E,t[13]=(h*v*s-g*f*s+g*n*m-e*v*m-h*n*u+e*f*u)*E,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*u-e*a*u)*E,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*m+e*a*m)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,m=r*c,p=r*h,g=r*f,v=o*h,u=o*f,d=a*f,b=l*c,w=l*h,T=l*f,B=n.x,R=n.y,E=n.z;return s[0]=(1-(v+d))*B,s[1]=(p+T)*B,s[2]=(g-w)*B,s[3]=0,s[4]=(p-T)*R,s[5]=(1-(m+d))*R,s[6]=(u+b)*R,s[7]=0,s[8]=(g+w)*E,s[9]=(u-b)*E,s[10]=(1-(m+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const o=wi.set(s[4],s[5],s[6]).length(),a=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const c=1/r,h=1/o,f=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=f,Je.elements[9]*=f,Je.elements[10]*=f,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=An){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s);let p,g;if(a===An)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=An){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),m=(e+t)*c,p=(n+s)*h;let g,v;if(a===An)g=(o+r)*f,v=-2*f;else if(a===yr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new P,Je=new fe,nd=new P(0,0,0),id=new P(1,1,1),kn=new P,Bs=new P,Ve=new P,Ho=new fe,Go=new bs;class fn{constructor(t=0,e=0,n=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],m=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ho,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Go.setFromEuler(this),this.setFromQuaternion(Go,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sd=0;const Vo=new P,bi=new bs,xn=new fe,zs=new P,as=new P,rd=new P,ad=new bs,Wo=new P(1,0,0),Xo=new P(0,1,0),qo=new P(0,0,1),Yo={type:"added"},od={type:"removed"},Ei={type:"childadded",child:null},$r={type:"childremoved",child:null};class Te extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new P,e=new fn,n=new bs,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Gt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Wo,t)}rotateY(t){return this.rotateOnAxis(Xo,t)}rotateZ(t){return this.rotateOnAxis(qo,t)}translateOnAxis(t,e){return Vo.copy(t).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wo,t)}translateY(t){return this.translateOnAxis(Xo,t)}translateZ(t){return this.translateOnAxis(qo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(as,zs,this.up):xn.lookAt(zs,as,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(xn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yo),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(od),$r.child=t,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yo),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),m=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new P(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new P,Mn=new P,Zr=new P,yn=new P,Ti=new P,Ai=new P,Ko=new P,Jr=new P,Qr=new P,ta=new P;class nn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),Mn.subVectors(n,e),Zr.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(Mn),l=Qe.dot(Zr),c=Mn.dot(Mn),h=Mn.dot(Zr),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const m=1/f,p=(c*l-a*h)*m,g=(o*h-a*l)*m;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l)}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),Mn.subVectors(t,e),Qe.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Qe.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ti.subVectors(s,n),Ai.subVectors(r,n),Jr.subVectors(t,n);const l=Ti.dot(Jr),c=Ai.dot(Jr);if(l<=0&&c<=0)return e.copy(n);Qr.subVectors(t,s);const h=Ti.dot(Qr),f=Ai.dot(Qr);if(h>=0&&f<=h)return e.copy(s);const m=l*f-h*c;if(m<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ti,o);ta.subVectors(t,r);const p=Ti.dot(ta),g=Ai.dot(ta);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ai,a);const u=h*g-p*f;if(u<=0&&f-h>=0&&p-g>=0)return Ko.subVectors(r,s),a=(f-h)/(f-h+(p-g)),e.copy(s).addScaledVector(Ko,a);const d=1/(u+v+m);return o=v*d,a=m*d,e.copy(n).addScaledVector(Ti,o).addScaledVector(Ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=fo(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ea(o,r,t+1/3),this.g=ea(o,r,t),this.b=ea(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=ac[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ie.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=ln){ie.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Hs);const n=gs(Bn.h,Hs.h,e),s=gs(Bn.s,Hs.s,e),r=gs(Bn.l,Hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Xt;Xt.NAMES=ac;let ld=0;class ns extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=qi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=ba,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class _e extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new P,Gs=new Ft;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return po("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eo&&(t.usage=this.usage),t}}class oc extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lc extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class dn extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cd=0;const Ye=new fe,na=new Te,Ci=new P,We=new Es,os=new Es,Ee=new P;class Ln extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nc(t)?lc:oc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(We.min,os.min),We.expandByPoint(Ee),Ee.addVectors(We.max,os.max),We.expandByPoint(Ee)):(We.expandByPoint(os.min),We.expandByPoint(os.max))}We.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(t,c),Ee.add(Ci)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;const c=new P,h=new P,f=new P,m=new Ft,p=new Ft,g=new Ft,v=new P,u=new P;function d(I,S,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,x),m.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(c),f.sub(c),p.sub(m),g.sub(m);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),u.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(v),a[S].add(v),a[x].add(v),l[I].add(u),l[S].add(u),l[x].add(u))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,S=b.length;I<S;++I){const x=b[I],D=x.start,W=x.count;for(let V=D,K=D+W;V<K;V+=3)d(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const w=new P,T=new P,B=new P,R=new P;function E(I){B.fromBufferAttribute(s,I),R.copy(B);const S=a[I];w.copy(S),w.sub(B.multiplyScalar(B.dot(S))).normalize(),T.crossVectors(R,S);const D=T.dot(l[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,D)}for(let I=0,S=b.length;I<S;++I){const x=b[I],D=x.start,W=x.count;for(let V=D,K=D+W;V<K;V+=3)E(t.getX(V+0)),E(t.getX(V+1)),E(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,p=n.count;m<p;m++)n.setXYZ(m,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let m=0,p=t.count;m<p;m+=3){const g=t.getX(m+0),v=t.getX(m+1),u=t.getX(m+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,u),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,u),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let m=0,p=e.count;m<p;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,m=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,u=l.length;v<u;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)m[g++]=c[p++]}return new an(m,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ln,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const m=c[h],p=t(m,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,m=c.length;f<m;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let m=0,p=f.length;m<p;m++)h.push(f[m].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new fe,Qn=new ed,Vs=new mo,$o=new P,Ri=new P,Pi=new P,Li=new P,ia=new P,Ws=new P,Xs=new Ft,qs=new Ft,Ys=new Ft,Zo=new P,Jo=new P,Qo=new P,Ks=new P,js=new P;class Ot extends Te{constructor(t=new Ln,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(ia.fromBufferAttribute(f,t),o?Ws.addScaledVector(ia,h):Ws.addScaledVector(ia.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Vs.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Vs,$o)===null||Qn.origin.distanceToSquared($o)>(t.far-t.near)**2))&&(jo.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(jo),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,m=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=m.length;g<v;g++){const u=m[g],d=o[u.materialIndex],b=Math.max(u.start,p.start),w=Math.min(a.count,Math.min(u.start+u.count,p.start+p.count));for(let T=b,B=w;T<B;T+=3){const R=a.getX(T),E=a.getX(T+1),I=a.getX(T+2);s=$s(this,d,t,n,c,h,f,R,E,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let u=g,d=v;u<d;u+=3){const b=a.getX(u),w=a.getX(u+1),T=a.getX(u+2);s=$s(this,o,t,n,c,h,f,b,w,T),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=m.length;g<v;g++){const u=m[g],d=o[u.materialIndex],b=Math.max(u.start,p.start),w=Math.min(l.count,Math.min(u.start+u.count,p.start+p.count));for(let T=b,B=w;T<B;T+=3){const R=T,E=T+1,I=T+2;s=$s(this,d,t,n,c,h,f,R,E,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let u=g,d=v;u<d;u+=3){const b=u,w=u+1,T=u+2;s=$s(this,o,t,n,c,h,f,b,w,T),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function hd(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yn,a),l===null)return null;js.copy(a),js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(js);return c<e.near||c>e.far?null:{distance:c,point:js.clone(),object:i}}function $s(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ri),i.getVertexPosition(l,Pi),i.getVertexPosition(c,Li);const h=hd(i,t,e,n,Ri,Pi,Li,Ks);if(h){s&&(Xs.fromBufferAttribute(s,a),qs.fromBufferAttribute(s,l),Ys.fromBufferAttribute(s,c),h.uv=nn.getInterpolation(Ks,Ri,Pi,Li,Xs,qs,Ys,new Ft)),r&&(Xs.fromBufferAttribute(r,a),qs.fromBufferAttribute(r,l),Ys.fromBufferAttribute(r,c),h.uv1=nn.getInterpolation(Ks,Ri,Pi,Li,Xs,qs,Ys,new Ft)),o&&(Zo.fromBufferAttribute(o,a),Jo.fromBufferAttribute(o,l),Qo.fromBufferAttribute(o,c),h.normal=nn.getInterpolation(Ks,Ri,Pi,Li,Zo,Jo,Qo,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};nn.getNormal(Ri,Pi,Li,f.normal),h.face=f}return h}class qt extends Ln{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let m=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(f,2));function g(v,u,d,b,w,T,B,R,E,I,S){const x=T/E,D=B/I,W=T/2,V=B/2,K=R/2,$=E+1,Y=I+1;let Q=0,q=0;const ot=new P;for(let mt=0;mt<Y;mt++){const _t=mt*D-V;for(let kt=0;kt<$;kt++){const jt=kt*x-W;ot[v]=jt*b,ot[u]=_t*w,ot[d]=K,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[u]=0,ot[d]=R>0?1:-1,h.push(ot.x,ot.y,ot.z),f.push(kt/E),f.push(1-mt/I),Q+=1}}for(let mt=0;mt<I;mt++)for(let _t=0;_t<E;_t++){const kt=m+_t+$*mt,jt=m+_t+$*(mt+1),j=m+(_t+1)+$*(mt+1),et=m+(_t+1)+$*mt;l.push(kt,jt,et),l.push(jt,j,et),q+=6}a.addGroup(p,q,S),p+=q,m+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Qi(i[e]);for(const s in n)t[s]=n[s]}return t}function dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const ud={clone:Qi,merge:Ue};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new P,tl=new Ft,el=new Ft;class Be extends hc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,tl,el),e.subVectors(el,tl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Di=1;class md extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(Ii,Di,t,e);s.layers=this.layers,this.add(s);const r=new Be(Ii,Di,t,e);r.layers=this.layers,this.add(r);const o=new Be(Ii,Di,t,e);o.layers=this.layers,this.add(o);const a=new Be(Ii,Di,t,e);a.layers=this.layers,this.add(a);const l=new Be(Ii,Di,t,e);l.layers=this.layers,this.add(l);const c=new Be(Ii,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,m,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dc extends Fe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gd extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Wn});r.uniforms.tEquirect.value=e;const o=new Ot(s,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=tn),new md(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const sa=new P,_d=new P,vd=new Gt;class ii{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(_d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vd.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new mo,Zs=new P;class go{constructor(t=new ii,e=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],m=s[7],p=s[8],g=s[9],v=s[10],u=s[11],d=s[12],b=s[13],w=s[14],T=s[15];if(n[0].setComponents(l-r,m-c,u-p,T-d).normalize(),n[1].setComponents(l+r,m+c,u+p,T+d).normalize(),n[2].setComponents(l+o,m+h,u+g,T+b).normalize(),n[3].setComponents(l-o,m-h,u-g,T-b).normalize(),n[4].setComponents(l-a,m-f,u-v,T-w).normalize(),e===An)n[5].setComponents(l+a,m+f,u+v,T+w).normalize();else if(e===yr)n[5].setComponents(a,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l._updateRange,m=l.updateRanges;if(i.bindBuffer(c,a),f.count===-1&&m.length===0&&i.bufferSubData(c,0,h),m.length!==0){for(let p=0,g=m.length;p<g;p++){const v=m[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(c,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Pr extends Ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,m=e/l,p=[],g=[],v=[],u=[];for(let d=0;d<h;d++){const b=d*m-o;for(let w=0;w<c;w++){const T=w*f-r;g.push(T,-b,0),v.push(0,0,1),u.push(w/a),u.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const w=b+c*d,T=b+c*(d+1),B=b+1+c*(d+1),R=b+1+c*d;p.push(w,T,R),p.push(T,B,R)}this.setIndex(p),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
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
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vd=`#define PI 3.141592653589793
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
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$d="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`
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
}`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ou=`#ifdef USE_GRADIENTMAP
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
}`,lu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,du=`uniform bool receiveShadow;
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
#endif`,uu=`#ifdef USE_ENVMAP
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
#endif`,fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_u=`PhysicalMaterial material;
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
#endif`,vu=`struct PhysicalMaterial {
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
}`,xu=`
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
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
#endif`,yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ru=`#if defined( USE_POINTS_UV )
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
#endif`,Pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Du=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nu=`#ifdef USE_MORPHTARGETS
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
#endif`,Fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
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
#endif`,Vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ku=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ju=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rf=`float getShadowMask() {
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
}`,af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pf=`#ifdef USE_TRANSMISSION
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
#endif`,mf=`#ifdef USE_TRANSMISSION
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
#endif`,gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`#include <common>
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
}`,Af=`#if DEPTH_PACKING == 3200
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
}`,Cf=`#define DISTANCE
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
}`,Rf=`#define DISTANCE
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`uniform float scale;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Ff=`#define LAMBERT
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
}`,Of=`#define LAMBERT
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
}`,kf=`#define MATCAP
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
}`,Bf=`#define MATCAP
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
}`,zf=`#define NORMAL
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
}`,Hf=`#define NORMAL
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
}`,Gf=`#define PHONG
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
}`,Vf=`#define PHONG
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
}`,Wf=`#define STANDARD
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
}`,Xf=`#define STANDARD
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
}`,qf=`#define TOON
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
}`,Yf=`#define TOON
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
}`,Kf=`uniform float size;
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
}`,jf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Zf=`uniform vec3 color;
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
}`,Jf=`uniform float rotation;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Md,alphahash_pars_fragment:yd,alphamap_fragment:Sd,alphamap_pars_fragment:wd,alphatest_fragment:bd,alphatest_pars_fragment:Ed,aomap_fragment:Td,aomap_pars_fragment:Ad,batching_pars_vertex:Cd,batching_vertex:Rd,begin_vertex:Pd,beginnormal_vertex:Ld,bsdfs:Id,iridescence_fragment:Dd,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:kd,color_fragment:Bd,color_pars_fragment:zd,color_pars_vertex:Hd,color_vertex:Gd,common:Vd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:qd,displacementmap_vertex:Yd,emissivemap_fragment:Kd,emissivemap_pars_fragment:jd,colorspace_fragment:$d,colorspace_pars_fragment:Zd,envmap_fragment:Jd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:tu,envmap_pars_vertex:eu,envmap_physical_pars_fragment:uu,envmap_vertex:nu,fog_vertex:iu,fog_pars_vertex:su,fog_fragment:ru,fog_pars_fragment:au,gradientmap_pars_fragment:ou,lightmap_pars_fragment:lu,lights_lambert_fragment:cu,lights_lambert_pars_fragment:hu,lights_pars_begin:du,lights_toon_fragment:fu,lights_toon_pars_fragment:pu,lights_phong_fragment:mu,lights_phong_pars_fragment:gu,lights_physical_fragment:_u,lights_physical_pars_fragment:vu,lights_fragment_begin:xu,lights_fragment_maps:Mu,lights_fragment_end:yu,logdepthbuf_fragment:Su,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:bu,logdepthbuf_vertex:Eu,map_fragment:Tu,map_pars_fragment:Au,map_particle_fragment:Cu,map_particle_pars_fragment:Ru,metalnessmap_fragment:Pu,metalnessmap_pars_fragment:Lu,morphinstance_vertex:Iu,morphcolor_vertex:Du,morphnormal_vertex:Uu,morphtarget_pars_vertex:Nu,morphtarget_vertex:Fu,normal_fragment_begin:Ou,normal_fragment_maps:ku,normal_pars_fragment:Bu,normal_pars_vertex:zu,normal_vertex:Hu,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:Vu,clearcoat_normal_fragment_maps:Wu,clearcoat_pars_fragment:Xu,iridescence_pars_fragment:qu,opaque_fragment:Yu,packing:Ku,premultiplied_alpha_fragment:ju,project_vertex:$u,dithering_fragment:Zu,dithering_pars_fragment:Ju,roughnessmap_fragment:Qu,roughnessmap_pars_fragment:tf,shadowmap_pars_fragment:ef,shadowmap_pars_vertex:nf,shadowmap_vertex:sf,shadowmask_pars_fragment:rf,skinbase_vertex:af,skinning_pars_vertex:of,skinning_vertex:lf,skinnormal_vertex:cf,specularmap_fragment:hf,specularmap_pars_fragment:df,tonemapping_fragment:uf,tonemapping_pars_fragment:ff,transmission_fragment:pf,transmission_pars_fragment:mf,uv_pars_fragment:gf,uv_pars_vertex:_f,uv_vertex:vf,worldpos_vertex:xf,background_vert:Mf,background_frag:yf,backgroundCube_vert:Sf,backgroundCube_frag:wf,cube_vert:bf,cube_frag:Ef,depth_vert:Tf,depth_frag:Af,distanceRGBA_vert:Cf,distanceRGBA_frag:Rf,equirect_vert:Pf,equirect_frag:Lf,linedashed_vert:If,linedashed_frag:Df,meshbasic_vert:Uf,meshbasic_frag:Nf,meshlambert_vert:Ff,meshlambert_frag:Of,meshmatcap_vert:kf,meshmatcap_frag:Bf,meshnormal_vert:zf,meshnormal_frag:Hf,meshphong_vert:Gf,meshphong_frag:Vf,meshphysical_vert:Wf,meshphysical_frag:Xf,meshtoon_vert:qf,meshtoon_frag:Yf,points_vert:Kf,points_frag:jf,shadow_vert:$f,shadow_frag:Zf,sprite_vert:Jf,sprite_frag:Qf},lt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},cn={basic:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ue([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ue([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ue([lt.points,lt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ue([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ue([lt.common,lt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ue([lt.sprite,lt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ue([lt.common,lt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ue([lt.lights,lt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};cn.physical={uniforms:Ue([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Js={r:0,b:0,g:0},ei=new fn,tp=new fe;function ep(i,t,e,n,s,r,o){const a=new Xt(0);let l=r===!0?0:1,c,h,f=null,m=0,p=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function v(b){let w=!1;const T=g(b);T===null?d(a,l):T&&T.isColor&&(d(T,1),w=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(b,w){const T=g(w);T&&(T.isCubeTexture||T.mapping===Cr)?(h===void 0&&(h=new Ot(new qt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Qi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(w.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tp.makeRotationFromEuler(ei)),h.material.toneMapped=ie.getTransfer(T.colorSpace)!==ce,(f!==T||m!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=T,m=T.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ot(new Pr(2,2),new Kn({name:"BackgroundMaterial",uniforms:Qi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ie.getTransfer(T.colorSpace)!==ce,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||m!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,m=T.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,w){b.getRGB(Js,cc(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:v,addToRenderList:u}}function np(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let r=s,o=!1;function a(x,D,W,V,K){let $=!1;const Y=f(V,W,D);r!==Y&&(r=Y,c(r.object)),$=p(x,V,W,K),$&&g(x,V,W,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,T(x,D,W,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,D,W){const V=W.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let $=K[D.id];$===void 0&&($={},K[D.id]=$);let Y=$[V];return Y===void 0&&(Y=m(l()),$[V]=Y),Y}function m(x){const D=[],W=[],V=[];for(let K=0;K<e;K++)D[K]=0,W[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,D,W,V){const K=r.attributes,$=D.attributes;let Y=0;const Q=W.getAttributes();for(const q in Q)if(Q[q].location>=0){const mt=K[q];let _t=$[q];if(_t===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),mt===void 0||mt.attribute!==_t||_t&&mt.data!==_t.data)return!0;Y++}return r.attributesNum!==Y||r.index!==V}function g(x,D,W,V){const K={},$=D.attributes;let Y=0;const Q=W.getAttributes();for(const q in Q)if(Q[q].location>=0){let mt=$[q];mt===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor));const _t={};_t.attribute=mt,mt&&mt.data&&(_t.data=mt.data),K[q]=_t,Y++}r.attributes=K,r.attributesNum=Y,r.index=V}function v(){const x=r.newAttributes;for(let D=0,W=x.length;D<W;D++)x[D]=0}function u(x){d(x,0)}function d(x,D){const W=r.newAttributes,V=r.enabledAttributes,K=r.attributeDivisors;W[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),K[x]!==D&&(i.vertexAttribDivisor(x,D),K[x]=D)}function b(){const x=r.newAttributes,D=r.enabledAttributes;for(let W=0,V=D.length;W<V;W++)D[W]!==x[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function w(x,D,W,V,K,$,Y){Y===!0?i.vertexAttribIPointer(x,D,W,K,$):i.vertexAttribPointer(x,D,W,V,K,$)}function T(x,D,W,V){v();const K=V.attributes,$=W.getAttributes(),Y=D.defaultAttributeValues;for(const Q in $){const q=$[Q];if(q.location>=0){let ot=K[Q];if(ot===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor)),ot!==void 0){const mt=ot.normalized,_t=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const jt=kt.buffer,j=kt.type,et=kt.bytesPerElement,vt=j===i.INT||j===i.UNSIGNED_INT||ot.gpuType===ro;if(ot.isInterleavedBufferAttribute){const ct=ot.data,Ut=ct.stride,Bt=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)d(q.location+Wt,ct.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)u(q.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Wt=0;Wt<q.locationSize;Wt++)w(q.location+Wt,_t/q.locationSize,j,mt,Ut*et,(Bt+_t/q.locationSize*Wt)*et,vt)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<q.locationSize;ct++)d(q.location+ct,ot.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<q.locationSize;ct++)u(q.location+ct);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let ct=0;ct<q.locationSize;ct++)w(q.location+ct,_t/q.locationSize,j,mt,_t*et,_t/q.locationSize*ct*et,vt)}}else if(Y!==void 0){const mt=Y[Q];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(q.location,mt);break;case 3:i.vertexAttrib3fv(q.location,mt);break;case 4:i.vertexAttrib4fv(q.location,mt);break;default:i.vertexAttrib1fv(q.location,mt)}}}}b()}function B(){I();for(const x in n){const D=n[x];for(const W in D){const V=D[W];for(const K in V)h(V[K].object),delete V[K];delete D[W]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const W in D){const V=D[W];for(const K in V)h(V[K].object),delete V[K];delete D[W]}delete n[x.id]}function E(x){for(const D in n){const W=n[D];if(W[x.id]===void 0)continue;const V=W[x.id];for(const K in V)h(V[K].object),delete V[K];delete W[x.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:u,disableUnusedAttributes:b}}function ip(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function l(c,h,f,m){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],m[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,m,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];for(let v=0;v<m.length;v++)e.update(g,n,m[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const E=R===ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!E)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:d,maxVaryings:b,maxFragmentUniforms:w,vertexTextures:T,maxSamples:B}}function rp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ii,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const p=f.length!==0||m||n!==0||s;return s=m,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){e=h(f,m,0)},this.setState=function(f,m,p){const g=f.clippingPlanes,v=f.clipIntersection,u=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!u)r?h(null):c();else{const b=r?0:n,w=b*4;let T=d.clippingState||null;l.value=T,T=h(g,m,w,p);for(let B=0;B!==w;++B)T[B]=e[B];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,m,p,g){const v=f!==null?f.length:0;let u=null;if(v!==0){if(u=l.value,g!==!0||u===null){const d=p+v*4,b=m.matrixWorldInverse;a.getNormalMatrix(b),(u===null||u.length<d)&&(u=new Float32Array(d));for(let w=0,T=p;w!==v;++w,T+=4)o.copy(f[w]).applyMatrix4(b,a),o.normal.toArray(u,T),u[T+3]=o.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,u}}function ap(i){let t=new WeakMap;function e(o,a){return a===Ea?o.mapping=ji:a===Ta&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===Ta)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class fc extends hc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,nl=[.125,.215,.35,.446,.526,.582],ci=20,ra=new fc,il=new Xt;let aa=null,oa=0,la=0,ca=!1;const si=(1+Math.sqrt(5))/2,Ui=1/si,sl=[new P(-si,Ui,0),new P(si,Ui,0),new P(-Ui,0,si),new P(Ui,0,si),new P(0,si,-Ui),new P(0,si,Ui),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,oa,la),this._renderer.xr.enabled=ca,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ws,format:rn,colorSpace:jn,depthBuffer:!1},s=al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(r)),this._blurMaterial=lp(r,t,e)}return s}_compileMaterial(t){const e=new Ot(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s){const a=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(il),h.toneMapping=Xn,h.autoClear=!1;const p=new _e({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Ot(new qt,p);let v=!1;const u=t.background;u?u.isColor&&(p.color.copy(u),t.background=null,v=!0):(p.color.copy(il),v=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const w=this._cubeSize;Qs(s,b*w,d>2?w:0,w,w),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ji||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sl[(s-r-1)%sl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ot(this._lodPlanes[s],c),m=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ci-1),v=r/g,u=isFinite(r)?1+Math.floor(h*v):ci;u>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${ci}`);const d=[];let b=0;for(let E=0;E<ci;++E){const I=E/v,S=Math.exp(-I*I/2);d.push(S),E===0?b+=S:E<u&&(b+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/b;m.envMap.value=t.texture,m.samples.value=u,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:w}=this;m.dTheta.value=g,m.mipInt.value=w-n;const T=this._sizeLods[s],B=3*T*(s>w-Gi?s-w+Gi:0),R=4*(this._cubeSize-T);Qs(e,B,R,3*T,2*T),l.setRenderTarget(e),l.render(f,ra)}}function op(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gi?l=nl[o-i+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,m=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,u=2,d=1,b=new Float32Array(v*g*p),w=new Float32Array(u*g*p),T=new Float32Array(d*g*p);for(let R=0;R<p;R++){const E=R%3*2/3-1,I=R>2?0:-1,S=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];b.set(S,v*g*R),w.set(m,u*g*R);const x=[R,R,R,R,R,R];T.set(x,d*g*R)}const B=new Ln;B.setAttribute("position",new an(b,v)),B.setAttribute("uv",new an(w,u)),B.setAttribute("faceIndex",new an(T,d)),t.push(B),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function al(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lp(i,t,e){const n=new Float32Array(ci),s=new P(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ol(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ll(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function _o(){return`

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
	`}function cp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===Ta,h=l===ji||l===$i;if(c||h){let f=t.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new rl(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new rl(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dp(i,t,e,n){const s={},r=new WeakMap;function o(f){const m=f.target;m.index!==null&&t.remove(m.index);for(const g in m.attributes)t.remove(m.attributes[g]);for(const g in m.morphAttributes){const v=m.morphAttributes[g];for(let u=0,d=v.length;u<d;u++)t.remove(v[u])}m.removeEventListener("dispose",o),delete s[m.id];const p=r.get(m);p&&(t.remove(p),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(f){const m=f.attributes;for(const g in m)t.update(m[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let u=0,d=v.length;u<d;u++)t.update(v[u],i.ARRAY_BUFFER)}}function c(f){const m=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let w=0,T=b.length;w<T;w+=3){const B=b[w+0],R=b[w+1],E=b[w+2];m.push(B,R,R,E,E,B)}}else if(g!==void 0){const b=g.array;v=g.version;for(let w=0,T=b.length/3-1;w<T;w+=3){const B=w+0,R=w+1,E=w+2;m.push(B,R,R,E,E,B)}}else return;const u=new(nc(m)?lc:oc)(m,1);u.version=v;const d=r.get(f);d&&t.remove(d),r.set(f,u)}function h(f){const m=r.get(f);if(m){const p=f.index;p!==null&&m.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function up(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,p){i.drawElements(n,p,r,m*o),e.update(p,n,1)}function c(m,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,m*o,g),e.update(p,n,g))}function h(m,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,m,0,g);let u=0;for(let d=0;d<g;d++)u+=p[d];e.update(u,n,1)}function f(m,p,g,v){if(g===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<m.length;d++)c(m[d]/o,p[d],v[d]);else{u.multiDrawElementsInstancedWEBGL(n,p,0,r,m,0,v,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b];for(let b=0;b<v.length;b++)e.update(d,n,v[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function fp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function pp(i,t,e){const n=new WeakMap,s=new he;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let m=n.get(a);if(m===void 0||m.count!==f){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;m!==void 0&&m.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,u=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),v===!0&&(T=2),u===!0&&(T=3);let B=a.attributes.position.count*T,R=1;B>t.maxTextureSize&&(R=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const E=new Float32Array(B*R*4*f),I=new sc(E,B,R,f);I.type=Tn,I.needsUpdate=!0;const S=T*4;for(let D=0;D<f;D++){const W=d[D],V=b[D],K=w[D],$=B*R*4*D;for(let Y=0;Y<W.count;Y++){const Q=Y*S;g===!0&&(s.fromBufferAttribute(W,Y),E[$+Q+0]=s.x,E[$+Q+1]=s.y,E[$+Q+2]=s.z,E[$+Q+3]=0),v===!0&&(s.fromBufferAttribute(V,Y),E[$+Q+4]=s.x,E[$+Q+5]=s.y,E[$+Q+6]=s.z,E[$+Q+7]=0),u===!0&&(s.fromBufferAttribute(K,Y),E[$+Q+8]=s.x,E[$+Q+9]=s.y,E[$+Q+10]=s.z,E[$+Q+11]=K.itemSize===4?s.w:1)}}m={count:f,texture:I,size:new Ft(B,R)},n.set(a,m),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let u=0;u<c.length;u++)g+=c[u];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function mp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class pc extends Fe{constructor(t,e,n,s,r,o,a,l,c,h=Yi){if(h!==Yi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=fi),n===void 0&&h===Ji&&(n=Zi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mc=new Fe,cl=new pc(1,1),gc=new sc,_c=new Qh,vc=new dc,hl=[],dl=[],ul=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function is(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hl[s];if(r===void 0&&(r=new Float32Array(s),hl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lr(i,t){let e=dl[t];e===void 0&&(e=new Int32Array(t),dl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;pl.set(n),i.uniformMatrix2fv(this.addr,!1,pl),be(e,n)}}function yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),be(e,n)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;ul.set(n),i.uniformMatrix4fv(this.addr,!1,ul),be(e,n)}}function wp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Lp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=ec,r=cl):r=mc,e.setTexture2D(t||r,s)}function Ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_c,s)}function Dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vc,s)}function Up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gc,s)}function Np(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return xp;case 35674:return Mp;case 35675:return yp;case 35676:return Sp;case 5124:case 35670:return wp;case 35667:case 35671:return bp;case 35668:case 35672:return Ep;case 35669:case 35673:return Tp;case 5125:return Ap;case 36294:return Cp;case 36295:return Rp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Up}}function Fp(i,t){i.uniform1fv(this.addr,t)}function Op(i,t){const e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function kp(i,t){const e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function Bp(i,t){const e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function zp(i,t){const e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hp(i,t){const e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gp(i,t){const e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vp(i,t){i.uniform1iv(this.addr,t)}function Wp(i,t){i.uniform2iv(this.addr,t)}function Xp(i,t){i.uniform3iv(this.addr,t)}function qp(i,t){i.uniform4iv(this.addr,t)}function Yp(i,t){i.uniform1uiv(this.addr,t)}function Kp(i,t){i.uniform2uiv(this.addr,t)}function jp(i,t){i.uniform3uiv(this.addr,t)}function $p(i,t){i.uniform4uiv(this.addr,t)}function Zp(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||mc,r[o])}function Jp(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_c,r[o])}function Qp(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vc,r[o])}function tm(i,t,e){const n=this.cache,s=t.length,r=Lr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gc,r[o])}function em(i){switch(i){case 5126:return Fp;case 35664:return Op;case 35665:return kp;case 35666:return Bp;case 35674:return zp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return Vp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return Kp;case 36295:return jp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return tm}}class nm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Np(e.type)}}class im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=em(e.type)}}class sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function ml(i,t){i.seq.push(t),i.map[t.id]=t}function rm(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),o=ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ml(e,c===void 0?new nm(a,i,t):new im(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new sm(a),ml(e,f)),e=f}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);rm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function gl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const am=37297;let om=0;function lm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function cm(i){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(i);let n;switch(t===e?n="":t===Mr&&e===xr?n="LinearDisplayP3ToLinearSRGB":t===xr&&e===Mr&&(n="LinearSRGBToLinearDisplayP3"),i){case jn:case Rr:return[n,"LinearTransferOETF"];case ln:case uo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _l(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lm(i.getShaderSource(t),o)}else return s}function hm(i,t){const e=cm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function dm(i,t){let e;switch(t){case uh:e="Linear";break;case fh:e="Reinhard";break;case ph:e="OptimizedCineon";break;case mh:e="ACESFilmic";break;case _h:e="AgX";break;case vh:e="Neutral";break;case gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function fm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fs(i){return i!==""}function vl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(i){return i.replace(mm,_m)}const gm=new Map;function _m(i,t){let e=Ht[t];if(e===void 0){const n=gm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return no(e)}const vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(i){return i.replace(vm,xm)}function xm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Mm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function ym(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case $i:t="ENVMAP_TYPE_CUBE";break;case Cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function wm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case so:t="ENVMAP_BLENDING_MULTIPLY";break;case hh:t="ENVMAP_BLENDING_MIX";break;case dh:t="ENVMAP_BLENDING_ADD";break}return t}function bm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Em(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Mm(e),c=ym(e),h=Sm(e),f=wm(e),m=bm(e),p=um(e),g=fm(r),v=s.createProgram();let u,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),u.length>0&&(u+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),d.length>0&&(d+=`
`)):(u=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),d=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Xn?dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,hm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=no(o),o=vl(o,e),o=xl(o,e),a=no(a),a=vl(a,e),a=xl(a,e),o=Ml(o),a=Ml(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,u=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,d=["#define varying in",e.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=b+u+o,T=b+d+a,B=gl(s,s.VERTEX_SHADER,w),R=gl(s,s.FRAGMENT_SHADER,T);s.attachShader(v,B),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(D){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(B).trim(),K=s.getShaderInfoLog(R).trim();let $=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,B,R);else{const Q=_l(s,B,"vertex"),q=_l(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+Q+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||K==="")&&(Y=!1);Y&&(D.diagnostics={runnable:$,programLog:W,vertexShader:{log:V,prefix:u},fragmentShader:{log:K,prefix:d}})}s.deleteShader(B),s.deleteShader(R),I=new pr(s,v),S=pm(s,v)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,am)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=om++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=R,this}let Tm=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Cm(t),e.set(t,n)),n}}class Cm{constructor(t){this.id=Tm++,this.code=t,this.usedTimes=0}}function Rm(i,t,e,n,s,r,o){const a=new rc,l=new Am,c=new Set,h=[],f=s.logarithmicDepthBuffer,m=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,x,D,W,V){const K=W.fog,$=V.geometry,Y=S.isMeshStandardMaterial?W.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),q=Q&&Q.mapping===Cr?Q.image.height:null,ot=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=mt!==void 0?mt.length:0;let kt=0;$.morphAttributes.position!==void 0&&(kt=1),$.morphAttributes.normal!==void 0&&(kt=2),$.morphAttributes.color!==void 0&&(kt=3);let jt,j,et,vt;if(ot){const Zt=cn[ot];jt=Zt.vertexShader,j=Zt.fragmentShader}else jt=S.vertexShader,j=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);const ct=i.getRenderTarget(),Ut=V.isInstancedMesh===!0,Bt=V.isBatchedMesh===!0,Wt=!!S.map,de=!!S.matcap,C=!!Q,ue=!!S.aoMap,Kt=!!S.lightMap,$t=!!S.bumpMap,yt=!!S.normalMap,pe=!!S.displacementMap,Lt=!!S.emissiveMap,It=!!S.metalnessMap,A=!!S.roughnessMap,_=S.anisotropy>0,L=S.clearcoat>0,F=S.dispersion>0,H=S.iridescence>0,X=S.sheen>0,pt=S.transmission>0,it=_&&!!S.anisotropyMap,ht=L&&!!S.clearcoatMap,Pt=L&&!!S.clearcoatNormalMap,tt=L&&!!S.clearcoatRoughnessMap,dt=H&&!!S.iridescenceMap,zt=H&&!!S.iridescenceThicknessMap,bt=X&&!!S.sheenColorMap,ut=X&&!!S.sheenRoughnessMap,Tt=!!S.specularMap,Nt=!!S.specularColorMap,oe=!!S.specularIntensityMap,U=pt&&!!S.transmissionMap,nt=pt&&!!S.thicknessMap,Z=!!S.gradientMap,J=!!S.alphaMap,at=S.alphaTest>0,At=!!S.alphaHash,Yt=!!S.extensions;let ve=Xn;S.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ve=i.toneMapping);const Ae={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:j,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&V._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&V.instanceColor!==null,instancingMorph:Ut&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:jn,alphaToCoverage:!!S.alphaToCoverage,map:Wt,matcap:de,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:q,aoMap:ue,lightMap:Kt,bumpMap:$t,normalMap:yt,displacementMap:m&&pe,emissiveMap:Lt,normalMapObjectSpace:yt&&S.normalMapType===Sh,normalMapTangentSpace:yt&&S.normalMapType===tc,metalnessMap:It,roughnessMap:A,anisotropy:_,anisotropyMap:it,clearcoat:L,clearcoatMap:ht,clearcoatNormalMap:Pt,clearcoatRoughnessMap:tt,dispersion:F,iridescence:H,iridescenceMap:dt,iridescenceThicknessMap:zt,sheen:X,sheenColorMap:bt,sheenRoughnessMap:ut,specularMap:Tt,specularColorMap:Nt,specularIntensityMap:oe,transmission:pt,transmissionMap:U,thicknessMap:nt,gradientMap:Z,opaque:S.transparent===!1&&S.blending===qi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:at,alphaHash:At,combine:S.combine,mapUv:Wt&&v(S.map.channel),aoMapUv:ue&&v(S.aoMap.channel),lightMapUv:Kt&&v(S.lightMap.channel),bumpMapUv:$t&&v(S.bumpMap.channel),normalMapUv:yt&&v(S.normalMap.channel),displacementMapUv:pe&&v(S.displacementMap.channel),emissiveMapUv:Lt&&v(S.emissiveMap.channel),metalnessMapUv:It&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:it&&v(S.anisotropyMap.channel),clearcoatMapUv:ht&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(S.sheenRoughnessMap.channel),specularMapUv:Tt&&v(S.specularMap.channel),specularColorMapUv:Nt&&v(S.specularColorMap.channel),specularIntensityMapUv:oe&&v(S.specularIntensityMap.channel),transmissionMapUv:U&&v(S.transmissionMap.channel),thicknessMapUv:nt&&v(S.thicknessMap.channel),alphaMapUv:J&&v(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(yt||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(Wt||J),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:kt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:Wt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function d(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)x.push(D),x.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(x,S),w(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function w(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),S.push(a.mask)}function T(S){const x=g[S.type];let D;if(x){const W=cn[x];D=ud.clone(W.uniforms)}else D=S.uniforms;return D}function B(S,x){let D;for(let W=0,V=h.length;W<V;W++){const K=h[W];if(K.cacheKey===x){D=K,++D.usedTimes;break}}return D===void 0&&(D=new Em(i,x,S,r),h.push(D)),D}function R(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function I(){l.dispose()}return{getParameters:u,getProgramCacheKey:d,getUniforms:T,acquireProgram:B,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:I}}function Pm(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Lm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,m,p,g,v,u){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:m,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:u},i[t]=d):(d.id=f.id,d.object=f,d.geometry=m,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=u),t++,d}function a(f,m,p,g,v,u){const d=o(f,m,p,g,v,u);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,m,p,g,v,u){const d=o(f,m,p,g,v,u);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,m){e.length>1&&e.sort(f||Lm),n.length>1&&n.sort(m||Sl),s.length>1&&s.sort(m||Sl)}function h(){for(let f=t,m=i.length;f<m;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Im(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new wl,i.set(n,[o])):s>=r.length?(o=new wl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Xt};break;case"SpotLight":e={position:new P,direction:new P,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Um(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Nm=0;function Fm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Om(i){const t=new Dm,e=Um(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new fe,o=new fe;function a(c){let h=0,f=0,m=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,u=0,d=0,b=0,w=0,T=0,B=0,R=0,E=0;c.sort(Fm);for(let S=0,x=c.length;S<x;S++){const D=c[S],W=D.color,V=D.intensity,K=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=W.r*V,f+=W.g*V,m+=W.b*V;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],V);E++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,q=e.get(D);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=Y,p++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(W).multiplyScalar(V),Y.distance=K,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[v]=Y;const Q=D.shadow;if(D.map&&(n.spotLightMap[B]=D.map,B++,Q.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[v]=Q.matrix,D.castShadow){const q=e.get(D);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=$,T++}v++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(W).multiplyScalar(V),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[u]=Y,u++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Q=D.shadow,q=e.get(D);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=D.shadow.matrix,w++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(V),Y.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[d]=Y,d++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=m;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==u||I.hemiLength!==d||I.numDirectionalShadows!==b||I.numPointShadows!==w||I.numSpotShadows!==T||I.numSpotMaps!==B||I.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=u,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+B-R,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=u,I.hemiLength=d,I.numDirectionalShadows=b,I.numPointShadows=w,I.numSpotShadows=T,I.numSpotMaps=B,I.numLightProbes=E,n.version=Nm++)}function l(c,h){let f=0,m=0,p=0,g=0,v=0;const u=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const w=c[d];if(w.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),f++}else if(w.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(u),p++}else if(w.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(u),o.identity(),r.copy(w.matrixWorld),r.premultiply(u),o.extractRotation(r),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){const T=n.hemi[v];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(u),v++}}}return{setup:a,setupView:l,state:n}}function bl(i){const t=new Om(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function km(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bl(i),t.set(s,[a])):r>=o.length?(a=new bl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Bm extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zm extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gm=`uniform sampler2D shadow_pass;
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
}`;function Vm(i,t,e){let n=new go;const s=new Ft,r=new Ft,o=new he,a=new Bm({depthPacking:yh}),l=new zm,c={},h=e.maxTextureSize,f={[Yn]:ze,[ze]:Yn,[En]:En},m=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Hm,fragmentShader:Gm}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(g,m),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let d=this.type;this.render=function(R,E,I){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Wn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=d!==Sn&&this.type===Sn,K=d===Sn&&this.type!==Sn;for(let $=0,Y=R.length;$<Y;$++){const Q=R[$],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ot=q.getFrameExtents();if(s.multiply(ot),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,q.mapSize.y=r.y)),q.map===null||V===!0||K===!0){const _t=this.type!==Sn?{minFilter:Ke,magFilter:Ke}:{};q.map!==null&&q.map.dispose(),q.map=new pi(s.x,s.y,_t),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const mt=q.getViewportCount();for(let _t=0;_t<mt;_t++){const kt=q.getViewport(_t);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),W.viewport(o),q.updateMatrices(Q,_t),n=q.getFrustum(),T(E,I,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Sn&&b(q,I),q.needsUpdate=!1}d=this.type,u.needsUpdate=!1,i.setRenderTarget(S,x,D)};function b(R,E){const I=t.update(v);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pi(s.x,s.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(E,null,I,m,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(E,null,I,p,v,null)}function w(R,E,I,S){let x=null;const D=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)x=D;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const W=x.uuid,V=E.uuid;let K=c[W];K===void 0&&(K={},c[W]=K);let $=K[V];$===void 0&&($=x.clone(),K[V]=$,E.addEventListener("dispose",B)),x=$}if(x.visible=E.visible,x.wireframe=E.wireframe,S===Sn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=i.properties.get(x);W.light=I}return x}function T(R,E,I,S,x){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Sn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const V=t.update(R),K=R.material;if(Array.isArray(K)){const $=V.groups;for(let Y=0,Q=$.length;Y<Q;Y++){const q=$[Y],ot=K[q.materialIndex];if(ot&&ot.visible){const mt=w(R,ot,S,x);R.onBeforeShadow(i,R,E,I,V,mt,q),i.renderBufferDirect(I,null,V,mt,R,q),R.onAfterShadow(i,R,E,I,V,mt,q)}}}else if(K.visible){const $=w(R,K,S,x);R.onBeforeShadow(i,R,E,I,V,$,null),i.renderBufferDirect(I,null,V,$,R,null),R.onAfterShadow(i,R,E,I,V,$,null)}}const W=R.children;for(let V=0,K=W.length;V<K;V++)T(W[V],E,I,S,x)}function B(R){R.target.removeEventListener("dispose",B);for(const I in c){const S=c[I],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function Wm(i){function t(){let U=!1;const nt=new he;let Z=null;const J=new he(0,0,0,0);return{setMask:function(at){Z!==at&&!U&&(i.colorMask(at,at,at,at),Z=at)},setLocked:function(at){U=at},setClear:function(at,At,Yt,ve,Ae){Ae===!0&&(at*=ve,At*=ve,Yt*=ve),nt.set(at,At,Yt,ve),J.equals(nt)===!1&&(i.clearColor(at,At,Yt,ve),J.copy(nt))},reset:function(){U=!1,Z=null,J.set(-1,0,0,0)}}}function e(){let U=!1,nt=null,Z=null,J=null;return{setTest:function(at){at?vt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(at){nt!==at&&!U&&(i.depthMask(at),nt=at)},setFunc:function(at){if(Z!==at){switch(at){case ih:i.depthFunc(i.NEVER);break;case sh:i.depthFunc(i.ALWAYS);break;case rh:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case ah:i.depthFunc(i.EQUAL);break;case oh:i.depthFunc(i.GEQUAL);break;case lh:i.depthFunc(i.GREATER);break;case ch:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=at}},setLocked:function(at){U=at},setClear:function(at){J!==at&&(i.clearDepth(at),J=at)},reset:function(){U=!1,nt=null,Z=null,J=null}}}function n(){let U=!1,nt=null,Z=null,J=null,at=null,At=null,Yt=null,ve=null,Ae=null;return{setTest:function(Zt){U||(Zt?vt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Zt){nt!==Zt&&!U&&(i.stencilMask(Zt),nt=Zt)},setFunc:function(Zt,gn,on){(Z!==Zt||J!==gn||at!==on)&&(i.stencilFunc(Zt,gn,on),Z=Zt,J=gn,at=on)},setOp:function(Zt,gn,on){(At!==Zt||Yt!==gn||ve!==on)&&(i.stencilOp(Zt,gn,on),At=Zt,Yt=gn,ve=on)},setLocked:function(Zt){U=Zt},setClear:function(Zt){Ae!==Zt&&(i.clearStencil(Zt),Ae=Zt)},reset:function(){U=!1,nt=null,Z=null,J=null,at=null,At=null,Yt=null,ve=null,Ae=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,m=[],p=null,g=!1,v=null,u=null,d=null,b=null,w=null,T=null,B=null,R=new Xt(0,0,0),E=0,I=!1,S=null,x=null,D=null,W=null,V=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=Y>=2);let q=null,ot={};const mt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),kt=new he().fromArray(mt),jt=new he().fromArray(_t);function j(U,nt,Z,J){const at=new Uint8Array(4),At=i.createTexture();i.bindTexture(U,At),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<Z;Yt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(nt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return At}const et={};et[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),r.setFunc(_r),$t(!1),yt(Po),vt(i.CULL_FACE),ue(Wn);function vt(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function ct(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function Ut(U,nt){return h[U]!==nt?(i.bindFramebuffer(U,nt),h[U]=nt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=nt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Bt(U,nt){let Z=m,J=!1;if(U){Z=f.get(nt),Z===void 0&&(Z=[],f.set(nt,Z));const at=U.textures;if(Z.length!==at.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let At=0,Yt=at.length;At<Yt;At++)Z[At]=i.COLOR_ATTACHMENT0+At;Z.length=at.length,J=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,J=!0);J&&i.drawBuffers(Z)}function Wt(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const de={[li]:i.FUNC_ADD,[zc]:i.FUNC_SUBTRACT,[Hc]:i.FUNC_REVERSE_SUBTRACT};de[Gc]=i.MIN,de[Vc]=i.MAX;const C={[Wc]:i.ZERO,[Xc]:i.ONE,[qc]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[Jc]:i.SRC_ALPHA_SATURATE,[$c]:i.DST_COLOR,[Kc]:i.DST_ALPHA,[Yc]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[jc]:i.ONE_MINUS_DST_ALPHA,[Qc]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[eh]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(U,nt,Z,J,at,At,Yt,ve,Ae,Zt){if(U===Wn){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(vt(i.BLEND),g=!0),U!==Bc){if(U!==v||Zt!==I){if((u!==li||w!==li)&&(i.blendEquation(i.FUNC_ADD),u=li,w=li),Zt)switch(U){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Do:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,b=null,T=null,B=null,R.set(0,0,0),E=0,v=U,I=Zt}return}at=at||nt,At=At||Z,Yt=Yt||J,(nt!==u||at!==w)&&(i.blendEquationSeparate(de[nt],de[at]),u=nt,w=at),(Z!==d||J!==b||At!==T||Yt!==B)&&(i.blendFuncSeparate(C[Z],C[J],C[At],C[Yt]),d=Z,b=J,T=At,B=Yt),(ve.equals(R)===!1||Ae!==E)&&(i.blendColor(ve.r,ve.g,ve.b,Ae),R.copy(ve),E=Ae),v=U,I=!1}function Kt(U,nt){U.side===En?ct(i.CULL_FACE):vt(i.CULL_FACE);let Z=U.side===ze;nt&&(Z=!Z),$t(Z),U.blending===qi&&U.transparent===!1?ue(Wn):ue(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function yt(U){U!==Oc?(vt(i.CULL_FACE),U!==x&&(U===Po?i.cullFace(i.BACK):U===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),x=U}function pe(U){U!==D&&($&&i.lineWidth(U),D=U)}function Lt(U,nt,Z){U?(vt(i.POLYGON_OFFSET_FILL),(W!==nt||V!==Z)&&(i.polygonOffset(nt,Z),W=nt,V=Z)):ct(i.POLYGON_OFFSET_FILL)}function It(U){U?vt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function A(U){U===void 0&&(U=i.TEXTURE0+K-1),q!==U&&(i.activeTexture(U),q=U)}function _(U,nt,Z){Z===void 0&&(q===null?Z=i.TEXTURE0+K-1:Z=q);let J=ot[Z];J===void 0&&(J={type:void 0,texture:void 0},ot[Z]=J),(J.type!==U||J.texture!==nt)&&(q!==Z&&(i.activeTexture(Z),q=Z),i.bindTexture(U,nt||et[U]),J.type=U,J.texture=nt)}function L(){const U=ot[q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(U){kt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),kt.copy(U))}function ut(U){jt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),jt.copy(U))}function Tt(U,nt){let Z=l.get(nt);Z===void 0&&(Z=new WeakMap,l.set(nt,Z));let J=Z.get(U);J===void 0&&(J=i.getUniformBlockIndex(nt,U.name),Z.set(U,J))}function Nt(U,nt){const J=l.get(nt).get(U);a.get(nt)!==J&&(i.uniformBlockBinding(nt,J,U.__bindingPointIndex),a.set(nt,J))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,ot={},h={},f=new WeakMap,m=[],p=null,g=!1,v=null,u=null,d=null,b=null,w=null,T=null,B=null,R=new Xt(0,0,0),E=0,I=!1,S=null,x=null,D=null,W=null,V=null,kt.set(0,0,i.canvas.width,i.canvas.height),jt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:vt,disable:ct,bindFramebuffer:Ut,drawBuffers:Bt,useProgram:Wt,setBlending:ue,setMaterial:Kt,setFlipSided:$t,setCullFace:yt,setLineWidth:pe,setPolygonOffset:Lt,setScissorTest:It,activeTexture:A,bindTexture:_,unbindTexture:L,compressedTexImage2D:F,compressedTexImage3D:H,texImage2D:dt,texImage3D:zt,updateUBOMapping:Tt,uniformBlockBinding:Nt,texStorage2D:Pt,texStorage3D:tt,texSubImage2D:X,texSubImage3D:pt,compressedTexSubImage2D:it,compressedTexSubImage3D:ht,scissor:bt,viewport:ut,reset:oe}}function El(i,t,e,n){const s=Xm(n);switch(e){case Yl:return i*t;case jl:return i*t;case $l:return i*t*2;case Zl:return i*t/s.components*s.byteLength;case lo:return i*t/s.components*s.byteLength;case Jl:return i*t*2/s.components*s.byteLength;case co:return i*t*2/s.components*s.byteLength;case Kl:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case ho:return i*t*4/s.components*s.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Ia:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case La:return Math.max(i,8)*Math.max(t,8)/2;case Da:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case $a:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ql:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xm(i){switch(i){case Pn:case Wl:return{byteLength:1,components:1};case xs:case Xl:case ws:return{byteLength:2,components:1};case ao:case oo:return{byteLength:2,components:4};case fi:case ro:case Tn:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap;let f;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):Sr("canvas")}function v(A,_,L){let F=1;const H=It(A);if((H.width>L||H.height>L)&&(F=L/Math.max(H.width,H.height)),F<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(F*H.width),pt=Math.floor(F*H.height);f===void 0&&(f=g(X,pt));const it=_?g(X,pt):f;return it.width=X,it.height=pt,it.getContext("2d").drawImage(A,0,0,X,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+X+"x"+pt+")."),it}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),A;return A}function u(A){return A.generateMipmaps&&A.minFilter!==Ke&&A.minFilter!==tn}function d(A){i.generateMipmap(A)}function b(A,_,L,F,H=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=_;if(_===i.RED&&(L===i.FLOAT&&(X=i.R32F),L===i.HALF_FLOAT&&(X=i.R16F),L===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(X=i.R8UI),L===i.UNSIGNED_SHORT&&(X=i.R16UI),L===i.UNSIGNED_INT&&(X=i.R32UI),L===i.BYTE&&(X=i.R8I),L===i.SHORT&&(X=i.R16I),L===i.INT&&(X=i.R32I)),_===i.RG&&(L===i.FLOAT&&(X=i.RG32F),L===i.HALF_FLOAT&&(X=i.RG16F),L===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(X=i.RG8UI),L===i.UNSIGNED_SHORT&&(X=i.RG16UI),L===i.UNSIGNED_INT&&(X=i.RG32UI),L===i.BYTE&&(X=i.RG8I),L===i.SHORT&&(X=i.RG16I),L===i.INT&&(X=i.RG32I)),_===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),_===i.RGBA){const pt=H?vr:ie.getTransfer(F);L===i.FLOAT&&(X=i.RGBA32F),L===i.HALF_FLOAT&&(X=i.RGBA16F),L===i.UNSIGNED_BYTE&&(X=pt===ce?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function w(A,_){let L;return A?_===null||_===fi||_===Zi?L=i.DEPTH24_STENCIL8:_===Tn?L=i.DEPTH32F_STENCIL8:_===xs&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===Zi?L=i.DEPTH_COMPONENT24:_===Tn?L=i.DEPTH_COMPONENT32F:_===xs&&(L=i.DEPTH_COMPONENT16),L}function T(A,_){return u(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function B(A){const _=A.target;_.removeEventListener("dispose",B),E(_),_.isVideoTexture&&h.delete(_)}function R(A){const _=A.target;_.removeEventListener("dispose",R),S(_)}function E(A){const _=n.get(A);if(_.__webglInit===void 0)return;const L=A.source,F=m.get(L);if(F){const H=F[_.__cacheKey];H.usedTimes--,H.usedTimes===0&&I(A),Object.keys(F).length===0&&m.delete(L)}n.remove(A)}function I(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const L=A.source,F=m.get(L);delete F[_.__cacheKey],o.memory.textures--}function S(A){const _=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(_.__webglFramebuffer[F]))for(let H=0;H<_.__webglFramebuffer[F].length;H++)i.deleteFramebuffer(_.__webglFramebuffer[F][H]);else i.deleteFramebuffer(_.__webglFramebuffer[F]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[F])}else{if(Array.isArray(_.__webglFramebuffer))for(let F=0;F<_.__webglFramebuffer.length;F++)i.deleteFramebuffer(_.__webglFramebuffer[F]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let F=0;F<_.__webglColorRenderbuffer.length;F++)_.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[F]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=A.textures;for(let F=0,H=L.length;F<H;F++){const X=n.get(L[F]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(L[F])}n.remove(A)}let x=0;function D(){x=0}function W(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function V(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function K(A,_){const L=n.get(A);if(A.isVideoTexture&&pe(A),A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){const F=A.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{jt(L,A,_);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function $(A,_){const L=n.get(A);if(A.version>0&&L.__version!==A.version){jt(L,A,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function Y(A,_){const L=n.get(A);if(A.version>0&&L.__version!==A.version){jt(L,A,_);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function Q(A,_){const L=n.get(A);if(A.version>0&&L.__version!==A.version){j(L,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}const q={[Aa]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},ot={[Ke]:i.NEAREST,[xh]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},mt={[wh]:i.NEVER,[Rh]:i.ALWAYS,[bh]:i.LESS,[ec]:i.LEQUAL,[Eh]:i.EQUAL,[Ch]:i.GEQUAL,[Th]:i.GREATER,[Ah]:i.NOTEQUAL};function _t(A,_){if(_.type===Tn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===zr||_.magFilter===Is||_.magFilter===di||_.minFilter===tn||_.minFilter===zr||_.minFilter===Is||_.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,q[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ot[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ot[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ke||_.minFilter!==Is&&_.minFilter!==di||_.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function kt(A,_){let L=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",B));const F=_.source;let H=m.get(F);H===void 0&&(H={},m.set(F,H));const X=V(_);if(X!==A.__cacheKey){H[X]===void 0&&(H[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),H[X].usedTimes++;const pt=H[A.__cacheKey];pt!==void 0&&(H[A.__cacheKey].usedTimes--,pt.usedTimes===0&&I(_)),A.__cacheKey=X,A.__webglTexture=H[X].texture}return L}function jt(A,_,L){let F=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(F=i.TEXTURE_3D);const H=kt(A,_),X=_.source;e.bindTexture(F,A.__webglTexture,i.TEXTURE0+L);const pt=n.get(X);if(X.version!==pt.__version||H===!0){e.activeTexture(i.TEXTURE0+L);const it=ie.getPrimaries(ie.workingColorSpace),ht=_.colorSpace===Gn?null:ie.getPrimaries(_.colorSpace),Pt=_.colorSpace===Gn||it===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let tt=v(_.image,!1,s.maxTextureSize);tt=Lt(_,tt);const dt=r.convert(_.format,_.colorSpace),zt=r.convert(_.type);let bt=b(_.internalFormat,dt,zt,_.colorSpace,_.isVideoTexture);_t(F,_);let ut;const Tt=_.mipmaps,Nt=_.isVideoTexture!==!0,oe=pt.__version===void 0||H===!0,U=X.dataReady,nt=T(_,tt);if(_.isDepthTexture)bt=w(_.format===Ji,_.type),oe&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,bt,tt.width,tt.height,0,dt,zt,null));else if(_.isDataTexture)if(Tt.length>0){Nt&&oe&&e.texStorage2D(i.TEXTURE_2D,nt,bt,Tt[0].width,Tt[0].height);for(let Z=0,J=Tt.length;Z<J;Z++)ut=Tt[Z],Nt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ut.width,ut.height,dt,zt,ut.data):e.texImage2D(i.TEXTURE_2D,Z,bt,ut.width,ut.height,0,dt,zt,ut.data);_.generateMipmaps=!1}else Nt?(oe&&e.texStorage2D(i.TEXTURE_2D,nt,bt,tt.width,tt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,dt,zt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,bt,tt.width,tt.height,0,dt,zt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,bt,Tt[0].width,Tt[0].height,tt.depth);for(let Z=0,J=Tt.length;Z<J;Z++)if(ut=Tt[Z],_.format!==rn)if(dt!==null)if(Nt){if(U)if(_.layerUpdates.size>0){const at=El(ut.width,ut.height,_.format,_.type);for(const At of _.layerUpdates){const Yt=ut.data.subarray(At*at/ut.data.BYTES_PER_ELEMENT,(At+1)*at/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,At,ut.width,ut.height,1,dt,Yt,0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ut.width,ut.height,tt.depth,dt,ut.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,bt,ut.width,ut.height,tt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ut.width,ut.height,tt.depth,dt,zt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,bt,ut.width,ut.height,tt.depth,0,dt,zt,ut.data)}else{Nt&&oe&&e.texStorage2D(i.TEXTURE_2D,nt,bt,Tt[0].width,Tt[0].height);for(let Z=0,J=Tt.length;Z<J;Z++)ut=Tt[Z],_.format!==rn?dt!==null?Nt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ut.width,ut.height,dt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,bt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ut.width,ut.height,dt,zt,ut.data):e.texImage2D(i.TEXTURE_2D,Z,bt,ut.width,ut.height,0,dt,zt,ut.data)}else if(_.isDataArrayTexture)if(Nt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,nt,bt,tt.width,tt.height,tt.depth),U)if(_.layerUpdates.size>0){const Z=El(tt.width,tt.height,_.format,_.type);for(const J of _.layerUpdates){const at=tt.data.subarray(J*Z/tt.data.BYTES_PER_ELEMENT,(J+1)*Z/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,dt,zt,at)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,zt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,dt,zt,tt.data);else if(_.isData3DTexture)Nt?(oe&&e.texStorage3D(i.TEXTURE_3D,nt,bt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,zt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,dt,zt,tt.data);else if(_.isFramebufferTexture){if(oe)if(Nt)e.texStorage2D(i.TEXTURE_2D,nt,bt,tt.width,tt.height);else{let Z=tt.width,J=tt.height;for(let at=0;at<nt;at++)e.texImage2D(i.TEXTURE_2D,at,bt,Z,J,0,dt,zt,null),Z>>=1,J>>=1}}else if(Tt.length>0){if(Nt&&oe){const Z=It(Tt[0]);e.texStorage2D(i.TEXTURE_2D,nt,bt,Z.width,Z.height)}for(let Z=0,J=Tt.length;Z<J;Z++)ut=Tt[Z],Nt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,dt,zt,ut):e.texImage2D(i.TEXTURE_2D,Z,bt,dt,zt,ut);_.generateMipmaps=!1}else if(Nt){if(oe){const Z=It(tt);e.texStorage2D(i.TEXTURE_2D,nt,bt,Z.width,Z.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,zt,tt)}else e.texImage2D(i.TEXTURE_2D,0,bt,dt,zt,tt);u(_)&&d(F),pt.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function j(A,_,L){if(_.image.length!==6)return;const F=kt(A,_),H=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+L);const X=n.get(H);if(H.version!==X.__version||F===!0){e.activeTexture(i.TEXTURE0+L);const pt=ie.getPrimaries(ie.workingColorSpace),it=_.colorSpace===Gn?null:ie.getPrimaries(_.colorSpace),ht=_.colorSpace===Gn||pt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Pt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let J=0;J<6;J++)!Pt&&!tt?dt[J]=v(_.image[J],!0,s.maxCubemapSize):dt[J]=tt?_.image[J].image:_.image[J],dt[J]=Lt(_,dt[J]);const zt=dt[0],bt=r.convert(_.format,_.colorSpace),ut=r.convert(_.type),Tt=b(_.internalFormat,bt,ut,_.colorSpace),Nt=_.isVideoTexture!==!0,oe=X.__version===void 0||F===!0,U=H.dataReady;let nt=T(_,zt);_t(i.TEXTURE_CUBE_MAP,_);let Z;if(Pt){Nt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Tt,zt.width,zt.height);for(let J=0;J<6;J++){Z=dt[J].mipmaps;for(let at=0;at<Z.length;at++){const At=Z[at];_.format!==rn?bt!==null?Nt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,At.width,At.height,bt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Tt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,0,0,At.width,At.height,bt,ut,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at,Tt,At.width,At.height,0,bt,ut,At.data)}}}else{if(Z=_.mipmaps,Nt&&oe){Z.length>0&&nt++;const J=It(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Tt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,dt[J].width,dt[J].height,bt,ut,dt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Tt,dt[J].width,dt[J].height,0,bt,ut,dt[J].data);for(let at=0;at<Z.length;at++){const Yt=Z[at].image[J].image;Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,Yt.width,Yt.height,bt,ut,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Tt,Yt.width,Yt.height,0,bt,ut,Yt.data)}}else{Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,bt,ut,dt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Tt,bt,ut,dt[J]);for(let at=0;at<Z.length;at++){const At=Z[at];Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,0,0,bt,ut,At.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,at+1,Tt,bt,ut,At.image[J])}}}u(_)&&d(i.TEXTURE_CUBE_MAP),X.__version=H.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function et(A,_,L,F,H,X){const pt=r.convert(L.format,L.colorSpace),it=r.convert(L.type),ht=b(L.internalFormat,pt,it,L.colorSpace);if(!n.get(_).__hasExternalTextures){const tt=Math.max(1,_.width>>X),dt=Math.max(1,_.height>>X);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?e.texImage3D(H,X,ht,tt,dt,_.depth,0,pt,it,null):e.texImage2D(H,X,ht,tt,dt,0,pt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,H,n.get(L).__webglTexture,0,$t(_)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,H,n.get(L).__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(A,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const F=_.depthTexture,H=F&&F.isDepthTexture?F.type:null,X=w(_.stencilBuffer,H),pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=$t(_);yt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,X,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,A)}else{const F=_.textures;for(let H=0;H<F.length;H++){const X=F[H],pt=r.convert(X.format,X.colorSpace),it=r.convert(X.type),ht=b(X.internalFormat,pt,it,X.colorSpace),Pt=$t(_);L&&yt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,ht,_.width,_.height):yt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const F=n.get(_.depthTexture).__webglTexture,H=$t(_);if(_.depthTexture.format===Yi)yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(_.depthTexture.format===Ji)yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ut(A){const _=n.get(A),L=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");ct(_.__webglFramebuffer,A)}else if(L){_.__webglDepthbuffer=[];for(let F=0;F<6;F++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[F]),_.__webglDepthbuffer[F]=i.createRenderbuffer(),vt(_.__webglDepthbuffer[F],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),vt(_.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(A,_,L){const F=n.get(A);_!==void 0&&et(F.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Ut(A)}function Wt(A){const _=A.texture,L=n.get(A),F=n.get(_);A.addEventListener("dispose",R);const H=A.textures,X=A.isWebGLCubeRenderTarget===!0,pt=H.length>1;if(pt||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=_.version,o.memory.textures++),X){L.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[it]=[];for(let ht=0;ht<_.mipmaps.length;ht++)L.__webglFramebuffer[it][ht]=i.createFramebuffer()}else L.__webglFramebuffer[it]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)L.__webglFramebuffer[it]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(pt)for(let it=0,ht=H.length;it<ht;it++){const Pt=n.get(H[it]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&yt(A)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let it=0;it<H.length;it++){const ht=H[it];L.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[it]);const Pt=r.convert(ht.format,ht.colorSpace),tt=r.convert(ht.type),dt=b(ht.internalFormat,Pt,tt,ht.colorSpace,A.isXRRenderTarget===!0),zt=$t(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,L.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(L.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),_t(i.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)et(L.__webglFramebuffer[it][ht],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ht);else et(L.__webglFramebuffer[it],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);u(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let it=0,ht=H.length;it<ht;it++){const Pt=H[it],tt=n.get(Pt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),_t(i.TEXTURE_2D,Pt),et(L.__webglFramebuffer,A,Pt,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,0),u(Pt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,F.__webglTexture),_t(it,_),_.mipmaps&&_.mipmaps.length>0)for(let ht=0;ht<_.mipmaps.length;ht++)et(L.__webglFramebuffer[ht],A,_,i.COLOR_ATTACHMENT0,it,ht);else et(L.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,it,0);u(_)&&d(it),e.unbindTexture()}A.depthBuffer&&Ut(A)}function de(A){const _=A.textures;for(let L=0,F=_.length;L<F;L++){const H=_[L];if(u(H)){const X=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pt=n.get(H).__webglTexture;e.bindTexture(X,pt),d(X),e.unbindTexture()}}}const C=[],ue=[];function Kt(A){if(A.samples>0){if(yt(A)===!1){const _=A.textures,L=A.width,F=A.height;let H=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(A),it=_.length>1;if(it)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);const Pt=n.get(_[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,L,F,0,0,L,F,H,i.NEAREST),l===!0&&(C.length=0,ue.length=0,C.push(i.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(C.push(X),ue.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);const Pt=n.get(_[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function $t(A){return Math.min(s.maxSamples,A.samples)}function yt(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pe(A){const _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Lt(A,_){const L=A.colorSpace,F=A.format,H=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||L!==jn&&L!==Gn&&(ie.getTransfer(L)===ce?(F!==rn||H!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=Bt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=et,this.useMultisampledRTT=yt}function Ym(i,t){function e(n,s=Gn){let r;const o=ie.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===ws)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===rn)return i.RGBA;if(n===jl)return i.LUMINANCE;if(n===$l)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===lo)return i.RED_INTEGER;if(n===Jl)return i.RG;if(n===co)return i.RG_INTEGER;if(n===ho)return i.RGBA_INTEGER;if(n===cr||n===hr||n===dr||n===ur)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Pa||n===La||n===Ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===Ua)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===ka||n===Ba||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===$a||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===Ja||n===Qa||n===to)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Km extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const u=e.getJointPose(v,n),d=this._getHandJoint(c,v);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&m>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zm=`
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

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:$m,fragmentShader:Zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new Pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qm extends es{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,m=null,p=null,g=null;const v=new Jm,u=e.getContextAttributes();let d=null,b=null;const w=[],T=[],B=new Ft;let R=null;const E=new Be;E.layers.enable(1),E.viewport=new he;const I=new Be;I.layers.enable(2),I.viewport=new he;const S=[E,I],x=new Km;x.layers.enable(1),x.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=w[j];return et===void 0&&(et=new da,w[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=w[j];return et===void 0&&(et=new da,w[j]=et),et.getGripSpace()},this.getHand=function(j){let et=w[j];return et===void 0&&(et=new da,w[j]=et),et.getHandSpace()};function V(j){const et=T.indexOf(j.inputSource);if(et===-1)return;const vt=w[et];vt!==void 0&&(vt.update(j.inputSource,j.frame,c||o),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",$);for(let j=0;j<w.length;j++){const et=T[j];et!==null&&(T[j]=null,w[j].disconnect(et))}D=null,W=null,v.reset(),t.setRenderTarget(d),p=null,m=null,f=null,s=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",K),s.addEventListener("inputsourceschange",$),u.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const et={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new pi(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil})}else{let et=null,vt=null,ct=null;u.depth&&(ct=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=u.stencil?Ji:Yi,vt=u.stencil?Zi:fi);const Ut={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};f=new XRWebGLBinding(s,e),m=f.createProjectionLayer(Ut),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),b=new pi(m.textureWidth,m.textureHeight,{format:rn,type:Pn,depthTexture:new pc(m.textureWidth,m.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(j){for(let et=0;et<j.removed.length;et++){const vt=j.removed[et],ct=T.indexOf(vt);ct>=0&&(T[ct]=null,w[ct].disconnect(vt))}for(let et=0;et<j.added.length;et++){const vt=j.added[et];let ct=T.indexOf(vt);if(ct===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=T.length){T.push(vt),ct=Bt;break}else if(T[Bt]===null){T[Bt]=vt,ct=Bt;break}if(ct===-1)break}const Ut=w[ct];Ut&&Ut.connect(vt)}}const Y=new P,Q=new P;function q(j,et,vt){Y.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const ct=Y.distanceTo(Q),Ut=et.projectionMatrix.elements,Bt=vt.projectionMatrix.elements,Wt=Ut[14]/(Ut[10]-1),de=Ut[14]/(Ut[10]+1),C=(Ut[9]+1)/Ut[5],ue=(Ut[9]-1)/Ut[5],Kt=(Ut[8]-1)/Ut[0],$t=(Bt[8]+1)/Bt[0],yt=Wt*Kt,pe=Wt*$t,Lt=ct/(-Kt+$t),It=Lt*-Kt;et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(It),j.translateZ(Lt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=Wt+Lt,_=de+Lt,L=yt-It,F=pe+(ct-It),H=C*de/_*A,X=ue*de/_*A;j.projectionMatrix.makePerspective(L,F,H,X,A,_),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ot(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;v.texture!==null&&(j.near=v.depthNear,j.far=v.depthFar),x.near=I.near=E.near=j.near,x.far=I.far=E.far=j.far,(D!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,W=x.far,E.near=D,E.far=W,I.near=D,I.far=W,E.updateProjectionMatrix(),I.updateProjectionMatrix(),j.updateProjectionMatrix());const et=j.parent,vt=x.cameras;ot(x,et);for(let ct=0;ct<vt.length;ct++)ot(vt[ct],et);vt.length===2?q(x,E,I):x.projectionMatrix.copy(E.projectionMatrix),mt(j,x,et)};function mt(j,et,vt){vt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ms*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(j){l=j,m!==null&&(m.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let _t=null;function kt(j,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let ct=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,ct=!0);for(let Bt=0;Bt<vt.length;Bt++){const Wt=vt[Bt];let de=null;if(p!==null)de=p.getViewport(Wt);else{const ue=f.getViewSubImage(m,Wt);de=ue.viewport,Bt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,m.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(b))}let C=S[Bt];C===void 0&&(C=new Be,C.layers.enable(Bt),C.viewport=new he,S[Bt]=C),C.matrix.fromArray(Wt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Wt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(de.x,de.y,de.width,de.height),Bt===0&&(x.matrix.copy(C.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ct===!0&&x.cameras.push(C)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Bt=f.getDepthInformation(vt[0]);Bt&&Bt.isValid&&Bt.texture&&v.init(t,Bt,s.renderState)}}for(let vt=0;vt<w.length;vt++){const ct=T[vt],Ut=w[vt];ct!==null&&Ut!==void 0&&Ut.update(ct,et,c||o)}_t&&_t(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const jt=new uc;jt.setAnimationLoop(kt),this.setAnimationLoop=function(j){_t=j},this.dispose=function(){}}}const ni=new fn,t0=new fe;function e0(i,t){function e(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function n(u,d){d.color.getRGB(u.fogColor.value,cc(i)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function s(u,d,b,w,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(u,d):d.isMeshToonMaterial?(r(u,d),f(u,d)):d.isMeshPhongMaterial?(r(u,d),h(u,d)):d.isMeshStandardMaterial?(r(u,d),m(u,d),d.isMeshPhysicalMaterial&&p(u,d,T)):d.isMeshMatcapMaterial?(r(u,d),g(u,d)):d.isMeshDepthMaterial?r(u,d):d.isMeshDistanceMaterial?(r(u,d),v(u,d)):d.isMeshNormalMaterial?r(u,d):d.isLineBasicMaterial?(o(u,d),d.isLineDashedMaterial&&a(u,d)):d.isPointsMaterial?l(u,d,b,w):d.isSpriteMaterial?c(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,e(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,e(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===ze&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,e(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===ze&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,e(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,e(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const b=t.get(d),w=b.envMap,T=b.envMapRotation;w&&(u.envMap.value=w,ni.copy(T),ni.x*=-1,ni.y*=-1,ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),u.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(ni)),u.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap&&(u.lightMap.value=d.lightMap,u.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,u.lightMapTransform)),d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,u.aoMapTransform))}function o(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,e(d.map,u.mapTransform))}function a(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function l(u,d,b,w){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*b,u.scale.value=w*.5,d.map&&(u.map.value=d.map,e(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function c(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,e(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,e(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function h(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function f(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function m(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,u.roughnessMapTransform)),d.envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function p(u,d,b){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&u.clearcoatNormalScale.value.negate())),d.dispersion>0&&(u.dispersion.value=d.dispersion),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=b.texture,u.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,d){d.matcap&&(u.matcap.value=d.matcap)}function v(u,d){const b=t.get(d).light;u.referencePosition.value.setFromMatrixPosition(b.matrixWorld),u.nearDistance.value=b.shadow.camera.near,u.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const T=w.program;n.uniformBlockBinding(b,T)}function c(b,w){let T=s[b.id];T===void 0&&(g(b),T=h(b),s[b.id]=T,b.addEventListener("dispose",u));const B=w.program;n.updateUBOMapping(b,B);const R=t.render.frame;r[b.id]!==R&&(m(b),r[b.id]=R)}function h(b){const w=f();b.__bindingPointIndex=w;const T=i.createBuffer(),B=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,B,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const w=s[b.id],T=b.uniforms,B=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,E=T.length;R<E;R++){const I=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,x=I.length;S<x;S++){const D=I[S];if(p(D,R,S,B)===!0){const W=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let $=0;$<V.length;$++){const Y=V[$],Q=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,W+K,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,K),K+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,w,T,B){const R=b.value,E=w+"_"+T;if(B[E]===void 0)return typeof R=="number"||typeof R=="boolean"?B[E]=R:B[E]=R.clone(),!0;{const I=B[E];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return B[E]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(b){const w=b.uniforms;let T=0;const B=16;for(let E=0,I=w.length;E<I;E++){const S=Array.isArray(w[E])?w[E]:[w[E]];for(let x=0,D=S.length;x<D;x++){const W=S[x],V=Array.isArray(W.value)?W.value:[W.value];for(let K=0,$=V.length;K<$;K++){const Y=V[K],Q=v(Y),q=T%B;q!==0&&B-q<Q.boundary&&(T+=B-q),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=Q.storage}}}const R=T%B;return R>0&&(T+=B-R),b.__size=T,b.__cache={},this}function v(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function u(b){const w=b.target;w.removeEventListener("dispose",u);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class i0{constructor(t={}){const{canvas:e=qh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,u=null;const d=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Xn,this.toneMappingExposure=1;const w=this;let T=!1,B=0,R=0,E=null,I=-1,S=null;const x=new he,D=new he;let W=null;const V=new Xt(0);let K=0,$=e.width,Y=e.height,Q=1,q=null,ot=null;const mt=new he(0,0,$,Y),_t=new he(0,0,$,Y);let kt=!1;const jt=new go;let j=!1,et=!1;const vt=new fe,ct=new P,Ut=new he,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function de(){return E===null?Q:1}let C=n;function ue(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",at,!1),C===null){const N="webgl2";if(C=ue(N,M),C===null)throw ue(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Kt,$t,yt,pe,Lt,It,A,_,L,F,H,X,pt,it,ht,Pt,tt,dt,zt,bt,ut,Tt,Nt,oe;function U(){Kt=new hp(C),Kt.init(),Tt=new Ym(C,Kt),$t=new sp(C,Kt,t,Tt),yt=new Wm(C),pe=new fp(C),Lt=new Pm,It=new qm(C,Kt,yt,Lt,$t,Tt,pe),A=new ap(w),_=new cp(w),L=new xd(C),Nt=new np(C,L),F=new dp(C,L,pe,Nt),H=new mp(C,F,L,pe),zt=new pp(C,$t,It),Pt=new rp(Lt),X=new Rm(w,A,_,Kt,$t,Nt,Pt),pt=new e0(w,Lt),it=new Im,ht=new km(Kt),dt=new ep(w,A,_,yt,H,m,l),tt=new Vm(w,H,$t),oe=new n0(C,pe,$t,yt),bt=new ip(C,Kt,pe),ut=new up(C,Kt,pe),pe.programs=X.programs,w.capabilities=$t,w.extensions=Kt,w.properties=Lt,w.renderLists=it,w.shadowMap=tt,w.state=yt,w.info=pe}U();const nt=new Qm(w,C);this.xr=nt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Kt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Kt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize($,Y,!1))},this.getSize=function(M){return M.set($,Y)},this.setSize=function(M,N,z=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,Y=N,e.width=Math.floor(M*Q),e.height=Math.floor(N*Q),z===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set($*Q,Y*Q).floor()},this.setDrawingBufferSize=function(M,N,z){$=M,Y=N,Q=z,e.width=Math.floor(M*z),e.height=Math.floor(N*z),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(mt)},this.setViewport=function(M,N,z,G){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,N,z,G),yt.viewport(x.copy(mt).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(_t)},this.setScissor=function(M,N,z,G){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,N,z,G),yt.scissor(D.copy(_t).multiplyScalar(Q).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(M){yt.setScissorTest(kt=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){ot=M},this.getClearColor=function(M){return M.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(M=!0,N=!0,z=!0){let G=0;if(M){let k=!1;if(E!==null){const rt=E.texture.format;k=rt===ho||rt===co||rt===lo}if(k){const rt=E.texture.type,ft=rt===Pn||rt===fi||rt===xs||rt===Zi||rt===ao||rt===oo,xt=dt.getClearColor(),Mt=dt.getClearAlpha(),Ct=xt.r,Rt=xt.g,Et=xt.b;ft?(p[0]=Ct,p[1]=Rt,p[2]=Et,p[3]=Mt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Ct,g[1]=Rt,g[2]=Et,g[3]=Mt,C.clearBufferiv(C.COLOR,0,g))}else G|=C.COLOR_BUFFER_BIT}N&&(G|=C.DEPTH_BUFFER_BIT),z&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",at,!1),it.dispose(),ht.dispose(),Lt.dispose(),A.dispose(),_.dispose(),H.dispose(),Nt.dispose(),oe.dispose(),X.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",on),nt.removeEventListener("sessionend",wo),$n.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=pe.autoReset,N=tt.enabled,z=tt.autoUpdate,G=tt.needsUpdate,k=tt.type;U(),pe.autoReset=M,tt.enabled=N,tt.autoUpdate=z,tt.needsUpdate=G,tt.type=k}function at(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function At(M){const N=M.target;N.removeEventListener("dispose",At),Yt(N)}function Yt(M){ve(M),Lt.remove(M)}function ve(M){const N=Lt.get(M).programs;N!==void 0&&(N.forEach(function(z){X.releaseProgram(z)}),M.isShaderMaterial&&X.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,z,G,k,rt){N===null&&(N=Bt);const ft=k.isMesh&&k.matrixWorld.determinant()<0,xt=Lc(M,N,z,G,k);yt.setMaterial(G,ft);let Mt=z.index,Ct=1;if(G.wireframe===!0){if(Mt=F.getWireframeAttribute(z),Mt===void 0)return;Ct=2}const Rt=z.drawRange,Et=z.attributes.position;let Jt=Rt.start*Ct,me=(Rt.start+Rt.count)*Ct;rt!==null&&(Jt=Math.max(Jt,rt.start*Ct),me=Math.min(me,(rt.start+rt.count)*Ct)),Mt!==null?(Jt=Math.max(Jt,0),me=Math.min(me,Mt.count)):Et!=null&&(Jt=Math.max(Jt,0),me=Math.min(me,Et.count));const ge=me-Jt;if(ge<0||ge===1/0)return;Nt.setup(k,G,xt,z,Mt);let He,Qt=bt;if(Mt!==null&&(He=L.get(Mt),Qt=ut,Qt.setIndex(He)),k.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*de()),Qt.setMode(C.LINES)):Qt.setMode(C.TRIANGLES);else if(k.isLine){let St=G.linewidth;St===void 0&&(St=1),yt.setLineWidth(St*de()),k.isLineSegments?Qt.setMode(C.LINES):k.isLineLoop?Qt.setMode(C.LINE_LOOP):Qt.setMode(C.LINE_STRIP)}else k.isPoints?Qt.setMode(C.POINTS):k.isSprite&&Qt.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Qt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const St=k._multiDrawStarts,Ce=k._multiDrawCounts,te=k._multiDrawCount,$e=Mt?L.get(Mt).bytesPerElement:1,_i=Lt.get(G).currentProgram.getUniforms();for(let Ge=0;Ge<te;Ge++)_i.setValue(C,"_gl_DrawID",Ge),Qt.render(St[Ge]/$e,Ce[Ge])}else if(k.isInstancedMesh)Qt.renderInstances(Jt,ge,k.count);else if(z.isInstancedBufferGeometry){const St=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ce=Math.min(z.instanceCount,St);Qt.renderInstances(Jt,ge,Ce)}else Qt.render(Jt,ge)};function Ae(M,N,z){M.transparent===!0&&M.side===En&&M.forceSinglePass===!1?(M.side=ze,M.needsUpdate=!0,Ls(M,N,z),M.side=Yn,M.needsUpdate=!0,Ls(M,N,z),M.side=En):Ls(M,N,z)}this.compile=function(M,N,z=null){z===null&&(z=M),u=ht.get(z),u.init(N),b.push(u),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),M!==z&&M.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const G=new Set;return M.traverse(function(k){const rt=k.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const xt=rt[ft];Ae(xt,z,k),G.add(xt)}else Ae(rt,z,k),G.add(rt)}),b.pop(),u=null,G},this.compileAsync=function(M,N,z=null){const G=this.compile(M,N,z);return new Promise(k=>{function rt(){if(G.forEach(function(ft){Lt.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){k(M);return}setTimeout(rt,10)}Kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Zt=null;function gn(M){Zt&&Zt(M)}function on(){$n.stop()}function wo(){$n.start()}const $n=new uc;$n.setAnimationLoop(gn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(M){Zt=M,nt.setAnimationLoop(M),M===null?$n.stop():$n.start()},nt.addEventListener("sessionstart",on),nt.addEventListener("sessionend",wo),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,N,E),u=ht.get(M,b.length),u.init(N),b.push(u),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),jt.setFromProjectionMatrix(vt),et=this.localClippingEnabled,j=Pt.init(this.clippingPlanes,et),v=it.get(M,d.length),v.init(),d.push(v),nt.enabled===!0&&nt.isPresenting===!0){const rt=w.xr.getDepthSensingMesh();rt!==null&&Fr(rt,N,-1/0,w.sortObjects)}Fr(M,N,0,w.sortObjects),v.finish(),w.sortObjects===!0&&v.sort(q,ot),Wt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Wt&&dt.addToRenderList(v,M),this.info.render.frame++,j===!0&&Pt.beginShadows();const z=u.state.shadowsArray;tt.render(z,M,N),j===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,k=v.transmissive;if(u.setupLights(),N.isArrayCamera){const rt=N.cameras;if(k.length>0)for(let ft=0,xt=rt.length;ft<xt;ft++){const Mt=rt[ft];Eo(G,k,M,Mt)}Wt&&dt.render(M);for(let ft=0,xt=rt.length;ft<xt;ft++){const Mt=rt[ft];bo(v,M,Mt,Mt.viewport)}}else k.length>0&&Eo(G,k,M,N),Wt&&dt.render(M),bo(v,M,N);E!==null&&(It.updateMultisampleRenderTarget(E),It.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(w,M,N),Nt.resetDefaultState(),I=-1,S=null,b.pop(),b.length>0?(u=b[b.length-1],j===!0&&Pt.setGlobalState(w.clippingPlanes,u.state.camera)):u=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Fr(M,N,z,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||jt.intersectsSprite(M)){G&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(vt);const ft=H.update(M),xt=M.material;xt.visible&&v.push(M,ft,xt,z,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||jt.intersectsObject(M))){const ft=H.update(M),xt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ut.copy(ft.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(vt)),Array.isArray(xt)){const Mt=ft.groups;for(let Ct=0,Rt=Mt.length;Ct<Rt;Ct++){const Et=Mt[Ct],Jt=xt[Et.materialIndex];Jt&&Jt.visible&&v.push(M,ft,Jt,z,Ut.z,Et)}}else xt.visible&&v.push(M,ft,xt,z,Ut.z,null)}}const rt=M.children;for(let ft=0,xt=rt.length;ft<xt;ft++)Fr(rt[ft],N,z,G)}function bo(M,N,z,G){const k=M.opaque,rt=M.transmissive,ft=M.transparent;u.setupLightsView(z),j===!0&&Pt.setGlobalState(w.clippingPlanes,z),G&&yt.viewport(x.copy(G)),k.length>0&&Ps(k,N,z),rt.length>0&&Ps(rt,N,z),ft.length>0&&Ps(ft,N,z),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Eo(M,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new pi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?ws:Pn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const rt=u.state.transmissionRenderTarget[G.id],ft=G.viewport||x;rt.setSize(ft.z,ft.w);const xt=w.getRenderTarget();w.setRenderTarget(rt),w.getClearColor(V),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),Wt?dt.render(z):w.clear();const Mt=w.toneMapping;w.toneMapping=Xn;const Ct=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),j===!0&&Pt.setGlobalState(w.clippingPlanes,G),Ps(M,z,G),It.updateMultisampleRenderTarget(rt),It.updateRenderTargetMipmap(rt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Et=0,Jt=N.length;Et<Jt;Et++){const me=N[Et],ge=me.object,He=me.geometry,Qt=me.material,St=me.group;if(Qt.side===En&&ge.layers.test(G.layers)){const Ce=Qt.side;Qt.side=ze,Qt.needsUpdate=!0,To(ge,z,G,He,Qt,St),Qt.side=Ce,Qt.needsUpdate=!0,Rt=!0}}Rt===!0&&(It.updateMultisampleRenderTarget(rt),It.updateRenderTargetMipmap(rt))}w.setRenderTarget(xt),w.setClearColor(V,K),Ct!==void 0&&(G.viewport=Ct),w.toneMapping=Mt}function Ps(M,N,z){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,rt=M.length;k<rt;k++){const ft=M[k],xt=ft.object,Mt=ft.geometry,Ct=G===null?ft.material:G,Rt=ft.group;xt.layers.test(z.layers)&&To(xt,N,z,Mt,Ct,Rt)}}function To(M,N,z,G,k,rt){M.onBeforeRender(w,N,z,G,k,rt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.transparent===!0&&k.side===En&&k.forceSinglePass===!1?(k.side=ze,k.needsUpdate=!0,w.renderBufferDirect(z,N,G,k,M,rt),k.side=Yn,k.needsUpdate=!0,w.renderBufferDirect(z,N,G,k,M,rt),k.side=En):w.renderBufferDirect(z,N,G,k,M,rt),M.onAfterRender(w,N,z,G,k,rt)}function Ls(M,N,z){N.isScene!==!0&&(N=Bt);const G=Lt.get(M),k=u.state.lights,rt=u.state.shadowsArray,ft=k.state.version,xt=X.getParameters(M,k.state,rt,N,z),Mt=X.getProgramCacheKey(xt);let Ct=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?_:A).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ct===void 0&&(M.addEventListener("dispose",At),Ct=new Map,G.programs=Ct);let Rt=Ct.get(Mt);if(Rt!==void 0){if(G.currentProgram===Rt&&G.lightsStateVersion===ft)return Co(M,xt),Rt}else xt.uniforms=X.getUniforms(M),M.onBeforeCompile(xt,w),Rt=X.acquireProgram(xt,Mt),Ct.set(Mt,Rt),G.uniforms=xt.uniforms;const Et=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=Pt.uniform),Co(M,xt),G.needsLights=Dc(M),G.lightsStateVersion=ft,G.needsLights&&(Et.ambientLightColor.value=k.state.ambient,Et.lightProbe.value=k.state.probe,Et.directionalLights.value=k.state.directional,Et.directionalLightShadows.value=k.state.directionalShadow,Et.spotLights.value=k.state.spot,Et.spotLightShadows.value=k.state.spotShadow,Et.rectAreaLights.value=k.state.rectArea,Et.ltc_1.value=k.state.rectAreaLTC1,Et.ltc_2.value=k.state.rectAreaLTC2,Et.pointLights.value=k.state.point,Et.pointLightShadows.value=k.state.pointShadow,Et.hemisphereLights.value=k.state.hemi,Et.directionalShadowMap.value=k.state.directionalShadowMap,Et.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Et.spotShadowMap.value=k.state.spotShadowMap,Et.spotLightMatrix.value=k.state.spotLightMatrix,Et.spotLightMap.value=k.state.spotLightMap,Et.pointShadowMap.value=k.state.pointShadowMap,Et.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Rt,G.uniformsList=null,Rt}function Ao(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=pr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Co(M,N){const z=Lt.get(M);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Lc(M,N,z,G,k){N.isScene!==!0&&(N=Bt),It.resetTextureUnits();const rt=N.fog,ft=G.isMeshStandardMaterial?N.environment:null,xt=E===null?w.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:jn,Mt=(G.isMeshStandardMaterial?_:A).get(G.envMap||ft),Ct=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Rt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!z.morphAttributes.position,Jt=!!z.morphAttributes.normal,me=!!z.morphAttributes.color;let ge=Xn;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ge=w.toneMapping);const He=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=He!==void 0?He.length:0,St=Lt.get(G),Ce=u.state.lights;if(j===!0&&(et===!0||M!==S)){const qe=M===S&&G.id===I;Pt.setState(G,M,qe)}let te=!1;G.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Ce.state.version||St.outputColorSpace!==xt||k.isBatchedMesh&&St.batching===!1||!k.isBatchedMesh&&St.batching===!0||k.isBatchedMesh&&St.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&St.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&St.instancing===!1||!k.isInstancedMesh&&St.instancing===!0||k.isSkinnedMesh&&St.skinning===!1||!k.isSkinnedMesh&&St.skinning===!0||k.isInstancedMesh&&St.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&St.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&St.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&St.instancingMorph===!1&&k.morphTexture!==null||St.envMap!==Mt||G.fog===!0&&St.fog!==rt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Pt.numPlanes||St.numIntersection!==Pt.numIntersection)||St.vertexAlphas!==Ct||St.vertexTangents!==Rt||St.morphTargets!==Et||St.morphNormals!==Jt||St.morphColors!==me||St.toneMapping!==ge||St.morphTargetsCount!==Qt)&&(te=!0):(te=!0,St.__version=G.version);let $e=St.currentProgram;te===!0&&($e=Ls(G,N,k));let _i=!1,Ge=!1,Or=!1;const xe=$e.getUniforms(),Un=St.uniforms;if(yt.useProgram($e.program)&&(_i=!0,Ge=!0,Or=!0),G.id!==I&&(I=G.id,Ge=!0),_i||S!==M){xe.setValue(C,"projectionMatrix",M.projectionMatrix),xe.setValue(C,"viewMatrix",M.matrixWorldInverse);const qe=xe.map.cameraPosition;qe!==void 0&&qe.setValue(C,ct.setFromMatrixPosition(M.matrixWorld)),$t.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ge=!0,Or=!0)}if(k.isSkinnedMesh){xe.setOptional(C,k,"bindMatrix"),xe.setOptional(C,k,"bindMatrixInverse");const qe=k.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),xe.setValue(C,"boneTexture",qe.boneTexture,It))}k.isBatchedMesh&&(xe.setOptional(C,k,"batchingTexture"),xe.setValue(C,"batchingTexture",k._matricesTexture,It),xe.setOptional(C,k,"batchingIdTexture"),xe.setValue(C,"batchingIdTexture",k._indirectTexture,It),xe.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",k._colorsTexture,It));const kr=z.morphAttributes;if((kr.position!==void 0||kr.normal!==void 0||kr.color!==void 0)&&zt.update(k,z,$e),(Ge||St.receiveShadow!==k.receiveShadow)&&(St.receiveShadow=k.receiveShadow,xe.setValue(C,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Un.envMap.value=Mt,Un.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Un.envMapIntensity.value=N.environmentIntensity),Ge&&(xe.setValue(C,"toneMappingExposure",w.toneMappingExposure),St.needsLights&&Ic(Un,Or),rt&&G.fog===!0&&pt.refreshFogUniforms(Un,rt),pt.refreshMaterialUniforms(Un,G,Q,Y,u.state.transmissionRenderTarget[M.id]),pr.upload(C,Ao(St),Un,It)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(pr.upload(C,Ao(St),Un,It),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(C,"center",k.center),xe.setValue(C,"modelViewMatrix",k.modelViewMatrix),xe.setValue(C,"normalMatrix",k.normalMatrix),xe.setValue(C,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qe=G.uniformsGroups;for(let Br=0,Uc=qe.length;Br<Uc;Br++){const Ro=qe[Br];oe.update(Ro,$e),oe.bind(Ro,$e)}}return $e}function Ic(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Dc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,N,z){Lt.get(M.texture).__webglTexture=N,Lt.get(M.depthTexture).__webglTexture=z;const G=Lt.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const z=Lt.get(M);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,z=0){E=M,B=N,R=z;let G=!0,k=null,rt=!1,ft=!1;if(M){const Mt=Lt.get(M);Mt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(C.FRAMEBUFFER,null),G=!1):Mt.__webglFramebuffer===void 0?It.setupRenderTarget(M):Mt.__hasExternalTextures&&It.rebindTextures(M,Lt.get(M.texture).__webglTexture,Lt.get(M.depthTexture).__webglTexture);const Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ft=!0);const Rt=Lt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?k=Rt[N][z]:k=Rt[N],rt=!0):M.samples>0&&It.useMultisampledRTT(M)===!1?k=Lt.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?k=Rt[z]:k=Rt,x.copy(M.viewport),D.copy(M.scissor),W=M.scissorTest}else x.copy(mt).multiplyScalar(Q).floor(),D.copy(_t).multiplyScalar(Q).floor(),W=kt;if(yt.bindFramebuffer(C.FRAMEBUFFER,k)&&G&&yt.drawBuffers(M,k),yt.viewport(x),yt.scissor(D),yt.setScissorTest(W),rt){const Mt=Lt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,z)}else if(ft){const Mt=Lt.get(M.texture),Ct=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mt.__webglTexture,z||0,Ct)}I=-1},this.readRenderTargetPixels=function(M,N,z,G,k,rt,ft){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Lt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){yt.bindFramebuffer(C.FRAMEBUFFER,xt);try{const Mt=M.texture,Ct=Mt.format,Rt=Mt.type;if(!$t.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&z>=0&&z<=M.height-k&&C.readPixels(N,z,G,k,Tt.convert(Ct),Tt.convert(Rt),rt)}finally{const Mt=E!==null?Lt.get(E).__webglFramebuffer:null;yt.bindFramebuffer(C.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(M,N,z,G,k,rt,ft){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Lt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){yt.bindFramebuffer(C.FRAMEBUFFER,xt);try{const Mt=M.texture,Ct=Mt.format,Rt=Mt.type;if(!$t.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-G&&z>=0&&z<=M.height-k){const Et=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Et),C.bufferData(C.PIXEL_PACK_BUFFER,rt.byteLength,C.STREAM_READ),C.readPixels(N,z,G,k,Tt.convert(Ct),Tt.convert(Rt),0),C.flush();const Jt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Yh(C,Jt,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Et),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,rt)}finally{C.deleteBuffer(Et),C.deleteSync(Jt)}return rt}}finally{const Mt=E!==null?Lt.get(E).__webglFramebuffer:null;yt.bindFramebuffer(C.FRAMEBUFFER,Mt)}}},this.copyFramebufferToTexture=function(M,N=null,z=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-z),k=Math.floor(M.image.width*G),rt=Math.floor(M.image.height*G),ft=N!==null?N.x:0,xt=N!==null?N.y:0;It.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,ft,xt,k,rt),yt.unbindTexture()},this.copyTextureToTexture=function(M,N,z=null,G=null,k=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],N=arguments[2],k=arguments[3]||0,z=null);let rt,ft,xt,Mt,Ct,Rt;z!==null?(rt=z.max.x-z.min.x,ft=z.max.y-z.min.y,xt=z.min.x,Mt=z.min.y):(rt=M.image.width,ft=M.image.height,xt=0,Mt=0),G!==null?(Ct=G.x,Rt=G.y):(Ct=0,Rt=0);const Et=Tt.convert(N.format),Jt=Tt.convert(N.type);It.setTexture2D(N,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const me=C.getParameter(C.UNPACK_ROW_LENGTH),ge=C.getParameter(C.UNPACK_IMAGE_HEIGHT),He=C.getParameter(C.UNPACK_SKIP_PIXELS),Qt=C.getParameter(C.UNPACK_SKIP_ROWS),St=C.getParameter(C.UNPACK_SKIP_IMAGES),Ce=M.isCompressedTexture?M.mipmaps[k]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Mt),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,k,Ct,Rt,rt,ft,Et,Jt,Ce.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,k,Ct,Rt,Ce.width,Ce.height,Et,Ce.data):C.texSubImage2D(C.TEXTURE_2D,k,Ct,Rt,rt,ft,Et,Jt,Ce),C.pixelStorei(C.UNPACK_ROW_LENGTH,me),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge),C.pixelStorei(C.UNPACK_SKIP_PIXELS,He),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,St),k===0&&N.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(M,N,z=null,G=null,k=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,M=arguments[2],N=arguments[3],k=arguments[4]||0);let rt,ft,xt,Mt,Ct,Rt,Et,Jt,me;const ge=M.isCompressedTexture?M.mipmaps[k]:M.image;z!==null?(rt=z.max.x-z.min.x,ft=z.max.y-z.min.y,xt=z.max.z-z.min.z,Mt=z.min.x,Ct=z.min.y,Rt=z.min.z):(rt=ge.width,ft=ge.height,xt=ge.depth,Mt=0,Ct=0,Rt=0),G!==null?(Et=G.x,Jt=G.y,me=G.z):(Et=0,Jt=0,me=0);const He=Tt.convert(N.format),Qt=Tt.convert(N.type);let St;if(N.isData3DTexture)It.setTexture3D(N,0),St=C.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)It.setTexture2DArray(N,0),St=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const Ce=C.getParameter(C.UNPACK_ROW_LENGTH),te=C.getParameter(C.UNPACK_IMAGE_HEIGHT),$e=C.getParameter(C.UNPACK_SKIP_PIXELS),_i=C.getParameter(C.UNPACK_SKIP_ROWS),Ge=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ge.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ge.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Mt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ct),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Rt),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(St,k,Et,Jt,me,rt,ft,xt,He,Qt,ge.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(St,k,Et,Jt,me,rt,ft,xt,He,ge.data):C.texSubImage3D(St,k,Et,Jt,me,rt,ft,xt,He,Qt,ge),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ce),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,te),C.pixelStorei(C.UNPACK_SKIP_PIXELS,$e),C.pixelStorei(C.UNPACK_SKIP_ROWS,_i),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ge),k===0&&N.generateMipmaps&&C.generateMipmap(St),yt.unbindTexture()},this.initRenderTarget=function(M){Lt.get(M).__webglFramebuffer===void 0&&It.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?It.setTextureCube(M,0):M.isData3DTexture?It.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?It.setTexture2DArray(M,0):It.setTexture2D(M,0),yt.unbindTexture()},this.resetState=function(){B=0,R=0,E=null,yt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===uo?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Rr?"display-p3":"srgb"}}class gi{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new gi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ts extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class s0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return po("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new P;class wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=en(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),s=ne(s,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xc extends ns{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ni;const ls=new P,Fi=new P,Oi=new P,ki=new Ft,cs=new Ft,Mc=new fe,tr=new P,hs=new P,er=new P,Tl=new Ft,ua=new Ft,Al=new Ft;class r0 extends Te{constructor(t=new xc){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new Ln;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new s0(e,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new wr(n,3,0,!1)),Ni.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=Ni,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Mc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;nr(tr.set(-.5,-.5,0),Oi,o,Fi,s,r),nr(hs.set(.5,-.5,0),Oi,o,Fi,s,r),nr(er.set(.5,.5,0),Oi,o,Fi,s,r),Tl.set(0,0),ua.set(1,0),Al.set(1,1);let a=t.ray.intersectTriangle(tr,hs,er,!1,ls);if(a===null&&(nr(hs.set(-.5,.5,0),Oi,o,Fi,s,r),ua.set(0,1),a=t.ray.intersectTriangle(tr,er,hs,!1,ls),a===null))return;const l=t.ray.origin.distanceTo(ls);l<t.near||l>t.far||e.push({distance:l,point:ls.clone(),uv:nn.getInterpolation(ls,tr,hs,er,Tl,ua,Al,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nr(i,t,e,n,s,r){ki.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(cs.x=r*ki.x-s*ki.y,cs.y=s*ki.x+r*ki.y):cs.copy(ki),i.copy(t),i.x+=cs.x,i.y+=cs.y,i.applyMatrix4(Mc)}class a0 extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class o0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],m=n[s+1]-h,p=(o-h)/m;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ft:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,l=new fe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Re(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function vo(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let m=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;m*=h,p*=h,s(o,a,m,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ir=new P,fa=new vo,pa=new vo,ma=new vo;class Cl extends o0{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),c=ir);const f=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(m),p),u=Math.pow(m.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),u<1e-4&&(u=v),fa.initNonuniformCatmullRom(c.x,f.x,m.x,h.x,g,v,u),pa.initNonuniformCatmullRom(c.y,f.y,m.y,h.y,g,v,u),ma.initNonuniformCatmullRom(c.z,f.z,m.z,h.z,g,v,u)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(c.x,f.x,m.x,h.x,this.tension),pa.initCatmullRom(c.y,f.y,m.y,h.y,this.tension),ma.initCatmullRom(c.z,f.z,m.z,h.z,this.tension));return n.set(fa.calc(l),pa.calc(l),ma.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class xo extends Ln{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],m=[],p=[];let g=0;const v=[],u=n/2;let d=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new dn(f,3)),this.setAttribute("normal",new dn(m,3)),this.setAttribute("uv",new dn(p,2));function b(){const T=new P,B=new P;let R=0;const E=(e-t)/n;for(let I=0;I<=r;I++){const S=[],x=I/r,D=x*(e-t)+t;for(let W=0;W<=s;W++){const V=W/s,K=V*l+a,$=Math.sin(K),Y=Math.cos(K);B.x=D*$,B.y=-x*n+u,B.z=D*Y,f.push(B.x,B.y,B.z),T.set($,E,Y).normalize(),m.push(T.x,T.y,T.z),p.push(V,1-x),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const x=v[S][I],D=v[S+1][I],W=v[S+1][I+1],V=v[S][I+1];h.push(x,D,V),h.push(D,W,V),R+=6}c.addGroup(d,R,0),d+=R}function w(T){const B=g,R=new Ft,E=new P;let I=0;const S=T===!0?t:e,x=T===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,u*x,0),m.push(0,x,0),p.push(.5,.5),g++;const D=g;for(let W=0;W<=s;W++){const K=W/s*l+a,$=Math.cos(K),Y=Math.sin(K);E.x=S*Y,E.y=u*x,E.z=S*$,f.push(E.x,E.y,E.z),m.push(0,x,0),R.x=$*.5+.5,R.y=Y*.5*x+.5,p.push(R.x,R.y),g++}for(let W=0;W<s;W++){const V=B+W,K=D+W;T===!0?h.push(K,K+1,V):h.push(K+1,K,V),I+=3}c.addGroup(d,I,T===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mi extends ns{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mo extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class As extends Mo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ga=new fe,Rl=new P,Pl=new P;class yc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Pl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pl),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ll=new fe,ds=new P,_a=new P;class l0 extends yc{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(ds),_a.copy(n.position),_a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_a),n.updateMatrixWorld(),s.makeTranslation(-ds.x,-ds.y,-ds.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll)}}class Ir extends Mo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new l0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class c0 extends yc{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cs extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new c0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class h0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Il(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Il();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Il(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);const O={sky:13625599,fog:14479103,sun:16773849,grass:11069091,grassLight:12447414,grassDark:9427340,path:15653300,wood:13214334,woodDark:11109987,wallCream:16774112,wallPink:16770028,wallMint:14480872,wallLilac:15721722,roofPink:16038084,roofMint:10476744,roofLilac:13351152,roofPeach:16766629,roofBlue:11131120,bearBrown:12159583,bearHoney:14265980,bearCocoa:9398860,bearCream:15917769,snout:16181199,nose:5982783,burden:10129286,burdenStrap:7629410,dressRose:16238804,dressSky:12574965,dressLeaf:13102274,robeWhite:16645622,robeGold:16770728,leaf:10476698,leafPink:16371160,trunk:11569768,flowerYellow:16769162,flowerPink:16757702,flowerBlue:11455487,water:11131120,stone:14209996,light:16774857},Dl=new Map;function d0(i,t,e){const n=`${i},${t},${e}`;let s=Dl.get(n);return s||(s=new qt(i,t,e),Dl.set(n,s)),s}const Ul=new Map;function hn(i){let t=Ul.get(i);return t||(t=new mi({color:i}),Ul.set(i,t)),t}function y(i,t,e,n,s=0,r=0,o=0){const a=new Ot(d0(i,t,e),hn(n));return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,a}const u0={bear:O.bearBrown,pig:16103104,frog:10803580,rabbit:15985369,cat:13156276,lion:14264416},f0={bear:O.bearCream,pig:16438490,frog:14085824,rabbit:16644334,cat:15591389,lion:15785147},Bi=11565370;function Ne(i={}){const t=i.species??"bear",e=i.fur??u0[t],n=f0[t],s=i.scale??1,r=new wt,o=u=>{const d=new wt;return d.position.set(.2*u,.55,0),d.add(y(.3,.55,.34,e,0,-.28,0)),d.add(y(.32,.14,.38,n,0,-.5,.02)),r.add(d),d},a=o(-1),l=o(1),c=new wt;c.position.y=.55,r.add(c),c.add(y(.92,.78,.6,e,0,.4,0)),c.add(y(.6,.5,.1,n,0,.38,.28)),t==="bear"?c.add(y(.2,.2,.2,e,0,.25,-.34)):t==="pig"?(c.add(y(.12,.12,.16,15703980,.08,.3,-.36)),c.add(y(.12,.12,.12,15703980,.16,.4,-.4))):t==="rabbit"?c.add(y(.24,.24,.2,16777215,0,.28,-.36)):t==="cat"?(c.add(y(.14,.14,.5,e,.2,.3,-.5)),c.add(y(.14,.3,.14,e,.2,.5,-.72))):t==="lion"&&(c.add(y(.14,.14,.55,e,.2,.28,-.52)),c.add(y(.22,.22,.22,Bi,.2,.28,-.84)));const h=u=>{const d=new wt;return d.position.set(.55*u,.68,0),d.add(y(.26,.55,.3,e,0,-.22,0)),d.add(y(.28,.14,.32,n,0,-.46,0)),c.add(d),d},f=h(-1),m=h(1),p=new wt;if(p.position.y=1.16,c.add(p),p.add(y(.95,.82,.8,e,0,.4,0)),t==="bear")p.add(y(.24,.24,.16,e,-.36,.9,0)),p.add(y(.24,.24,.16,e,.36,.9,0)),p.add(y(.14,.14,.1,n,-.36,.9,.05)),p.add(y(.14,.14,.1,n,.36,.9,.05)),p.add(y(.4,.3,.18,O.snout,0,.26,.46)),p.add(y(.16,.12,.08,O.nose,0,.34,.56));else if(t==="pig"){const u=y(.26,.26,.14,15703980,-.34,.9,0);u.rotation.z=.5,p.add(u);const d=y(.26,.26,.14,15703980,.34,.9,0);d.rotation.z=-.5,p.add(d),p.add(y(.42,.3,.16,15703980,0,.3,.46)),p.add(y(.07,.12,.04,13070206,-.1,.3,.55)),p.add(y(.07,.12,.04,13070206,.1,.3,.55))}else if(t==="frog"){for(const u of[-1,1])p.add(y(.28,.26,.28,e,.26*u,.94,.16)),p.add(y(.18,.18,.08,16777215,.26*u,.96,.32)),p.add(y(.09,.12,.04,O.nose,.26*u,.96,.37));p.add(y(.5,.06,.05,6192458,0,.2,.41))}else if(t==="rabbit"){for(const u of[-1,1])p.add(y(.2,.7,.14,e,.24*u,1.1,0)),p.add(y(.1,.5,.06,16238804,.24*u,1.1,.06));p.add(y(.3,.22,.14,16777215,0,.26,.44)),p.add(y(.12,.1,.06,15043227,0,.36,.52))}else if(t==="cat"){for(const u of[-1,1]){const d=y(.24,.28,.14,e,.32*u,.92,0);d.rotation.z=-.4*u,p.add(d),p.add(y(.12,.14,.08,16238804,.32*u,.9,.05))}p.add(y(.3,.2,.14,16777215,0,.24,.44)),p.add(y(.1,.08,.06,15043227,0,.32,.52))}else t==="lion"&&(p.add(y(1.3,1.2,.34,Bi,0,.4,-.44)),p.add(y(1.24,.3,.62,Bi,0,.97,-.12)),p.add(y(.3,1.06,.62,Bi,-.62,.38,-.12)),p.add(y(.3,1.06,.62,Bi,.62,.38,-.12)),p.add(y(.9,.26,.6,Bi,0,-.15,-.1)),p.add(y(.24,.24,.18,e,-.42,1.06,.02)),p.add(y(.24,.24,.18,e,.42,1.06,.02)),p.add(y(.44,.32,.2,O.snout,0,.26,.47)),p.add(y(.16,.12,.08,O.nose,0,.35,.58)));t!=="frog"&&(p.add(y(.1,.14,.05,O.nose,-.24,.5,.41)),p.add(y(.1,.14,.05,O.nose,.24,.5,.41))),p.add(y(.12,.08,.04,16233149,-.36,.32,.41)),p.add(y(.12,.08,.04,16233149,.36,.32,.41));const g=i.outfit??"none",v=i.outfitColor??O.dressRose;if(g==="shirt"?(c.add(y(.98,.52,.7,v,0,.52,0)),f.add(y(.32,.28,.36,v,0,-.1,0)),m.add(y(.32,.28,.36,v,0,-.1,0))):g==="dress"?(c.add(y(1,.5,.68,v,0,.12,0)),c.add(y(.96,.4,.7,v,0,.52,0)),c.add(y(.5,.16,.06,16777215,0,.68,.34)),f.add(y(.32,.24,.36,v,0,-.08,0)),m.add(y(.32,.24,.36,v,0,-.08,0))):g==="apron"?(c.add(y(.98,.5,.7,16446435,0,.5,0)),f.add(y(.32,.26,.36,16446435,0,-.1,0)),m.add(y(.32,.26,.36,16446435,0,-.1,0)),c.add(y(.62,.6,.08,v,0,.32,.32)),c.add(y(.3,.14,.06,v,0,.68,.34))):g==="overalls"?(c.add(y(.96,.44,.64,v,0,.2,0)),c.add(y(.44,.4,.08,v,0,.56,.3)),c.add(y(.12,.4,.06,v,-.22,.72,.3)),c.add(y(.12,.4,.06,v,.22,.72,.3))):g==="robe"&&(c.add(y(1.02,.9,.7,v,0,.36,0)),c.add(y(.3,.1,.06,O.robeGold,0,.66,.34)),f.add(y(.34,.4,.38,v,0,-.14,0)),m.add(y(.34,.4,.38,v,0,-.14,0)),p.add(y(.9,.5,.2,v,0,.5,-.45))),i.sling){const u=y(.14,1.05,.05,9072466,0,.42,.34);u.rotation.z=.72,c.add(u);const d=y(.14,1.05,.05,9072466,0,.42,-.33);d.rotation.z=-.72,c.add(d),c.add(y(.24,.12,.7,9072466,-.34,.82,0)),c.add(y(.46,.36,.22,11108958,.5,.02,.1)),c.add(y(.46,.14,.24,9072466,.5,.16,.1)),c.add(y(.1,.1,.06,O.robeGold,.5,.06,.23))}return i.burden&&(c.add(y(.7,.5,.42,O.burden,0,.45,-.52)),c.add(y(.56,.4,.36,8880506,0,.9,-.5)),c.add(y(.4,.3,.3,O.burdenStrap,0,1.22,-.48)),c.add(y(.1,.6,.08,O.burdenStrap,-.3,.45,.31)),c.add(y(.1,.6,.08,O.burdenStrap,.3,.45,.31))),r.scale.setScalar(s),{root:r,body:c,head:p,armL:f,armR:m,legL:a,legR:l}}function se(i,t,e){const n=e?Math.sin(t*9)*.7:0,s=Math.sin(t*2)*.02;i.legL.rotation.x=n,i.legR.rotation.x=-n,i.armL.rotation.x=-n*.8,i.armR.rotation.x=n*.8,i.body.position.y=.55+(e?Math.abs(Math.sin(t*9))*.06:s),i.head.rotation.z=e?Math.sin(t*4.5)*.04:Math.sin(t*1.5)*.03}const Xe={east:60,west:-46,north:-34,south:34,gateHalfWidth:1.9};function p0(i,t,e=5,n=4.4,s=2.6){const r=new wt;r.add(y(e,s,n,i,0,s/2,0));const o=O.woodDark;r.add(y(.22,s,.22,o,-e/2+.11,s/2,n/2+.02)),r.add(y(.22,s,.22,o,e/2-.11,s/2,n/2+.02)),r.add(y(e,.22,.22,o,0,s-.11,n/2+.02));const a=4;for(let l=0;l<a;l++){const c=e+.6-l*(e+.6)/a;r.add(y(c,.5,n+.6,t,0,s+.25+l*.5,0))}r.add(y(.55,2.2,.55,O.stone,e/2-.8,s+1.6,-.8)),r.add(y(.7,.25,.7,12893877,e/2-.8,s+2.75,-.8)),r.add(y(.9,1.5,.16,O.woodDark,0,.75,n/2+.06)),r.add(y(.12,.12,.1,O.roofPeach,.28,.75,n/2+.16));for(const l of[-e/2+1.1,e/2-1.1])r.add(y(.8,.8,.12,O.roofBlue,l,1.5,n/2+.06)),r.add(y(.9,.14,.14,O.woodDark,l,1.06,n/2+.08));return r}function m0(i=!1){const t=new wt,e=i?O.leafPink:O.leaf;return t.add(y(.5,1.6,.5,O.trunk,0,.8,0)),t.add(y(1.9,1.3,1.9,e,0,2.2,0)),t.add(y(1.3,.9,1.3,e,0,3.2,0)),t.add(y(.7,.6,.7,e,0,3.9,0)),t}function g0(){const i=new wt;i.add(y(.18,2.4,.18,O.woodDark,0,1.2,0));const t=y(.4,.4,.4,O.light,0,2.5,0);return t.material=new mi({color:O.light,emissive:16773296,emissiveIntensity:.6}),i.add(t),i.add(y(.5,.12,.5,O.woodDark,0,2.75,0)),i}function _0(){const i=new wt;return i.add(y(1.6,.8,1.6,O.stone,0,.4,0)),i.add(y(1.2,.1,1.2,O.water,0,.82,0)),i.add(y(.14,1.5,.14,O.woodDark,-.7,1.2,0)),i.add(y(.14,1.5,.14,O.woodDark,.7,1.2,0)),i.add(y(1.8,.35,1.1,O.roofPink,0,2.05,0)),i}function Nl(i){const t=new wt;t.add(y(2.6,.9,1.2,O.wood,0,.45,0)),t.add(y(2.8,.14,1.4,O.woodDark,0,.95,0)),t.add(y(.4,.3,.4,O.flowerYellow,-.8,1.15,.1)),t.add(y(.35,.35,.35,16757702,-.1,1.2,-.2)),t.add(y(.45,.25,.3,11455487,.7,1.14,.15)),t.add(y(.14,2.2,.14,O.woodDark,-1.25,1.1,.62)),t.add(y(.14,2.2,.14,O.woodDark,1.25,1.1,.62)),t.add(y(.14,2.2,.14,O.woodDark,-1.25,1.1,-.62)),t.add(y(.14,2.2,.14,O.woodDark,1.25,1.1,-.62));for(let e=0;e<5;e++){const n=e%2===0?i:16775407;t.add(y(.58,.16,1.7,n,-1.16+e*.58,2.28,0))}return t}function v0(){const i=new wt;return i.add(y(.7,.9,.7,O.wood,0,.45,0)),i.add(y(.76,.12,.76,O.woodDark,0,.25,0)),i.add(y(.76,.12,.76,O.woodDark,0,.7,0)),i.add(y(.6,.06,.6,O.water,0,.93,0)),i}function x0(){const i=new wt;return i.add(y(.8,.8,.8,O.wood,0,.4,0)),i.add(y(.7,.7,.7,O.woodDark,.75,.35,.15)),i.add(y(.6,.6,.6,O.wood,.3,1.1,.05)),i}function M0(){const i=new wt;return i.add(y(1.4,.9,1,15785374,0,.45,0)),i.add(y(1.44,.14,1.04,14270584,0,.45,0)),i}function y0(){const i=new wt;return i.add(y(.14,2,.14,O.woodDark,-2.2,1,0)),i.add(y(.14,2,.14,O.woodDark,2.2,1,0)),i.add(y(4.4,.05,.05,16775407,0,1.9,0)),i.add(y(.7,.8,.06,O.dressSky,-1.2,1.5,0)),i.add(y(.6,.7,.06,O.dressRose,.1,1.55,0)),i.add(y(.5,.6,.06,O.dressLeaf,1.3,1.6,0)),i}function S0(i){const t=new wt,e=new wt;return e.position.set(0,.42,.16),t.add(y(.32,.28,.42,i,0,.32,-.04)),t.add(y(.16,.1,.16,i,0,.2,-.3)),e.add(y(.2,.2,.2,i,0,0,0)),e.add(y(.1,.06,.12,16757575,0,-.02,.14)),e.add(y(.12,.12,.04,14701674,0,.12,.02)),t.add(e),t.add(y(.05,.16,.05,15247694,-.08,.08,-.02)),t.add(y(.05,.16,.05,15247694,.08,.08,-.02)),{root:t,head:e}}function w0(){const i=new wt;i.add(y(1.15,.75,.65,16446440,0,.68,0)),i.add(y(.36,.1,.4,4865331,-.2,1.04,.05)),i.add(y(.3,.1,.3,4865331,.3,.68,-.15));const t=new wt;t.position.set(.68,.78,0),t.add(y(.36,.34,.32,16446440,0,0,0)),t.add(y(.14,.1,.1,16238804,.2,-.08,0)),t.add(y(.06,.14,.05,15261646,.05,.18,-.14)),t.add(y(.06,.14,.05,15261646,.05,.18,.14)),i.add(t);for(const[n,s]of[[-.4,-.22],[-.4,.22],[.32,-.22],[.32,.22]])i.add(y(.18,.55,.18,15261646,n,.28,s));const e=y(.06,.4,.06,16446440,-.62,.75,0);return e.rotation.x=.3,i.add(e),{root:i,tail:e}}function b0(){const i=new wt;i.add(y(.5,.9,.5,9082784,0,.45,0)),i.add(y(.6,.14,.6,7305858,0,.94,0));const t=new wt;return t.position.set(0,.85,-.2),t.add(y(.5,.1,.1,7305858,0,0,-.2)),i.add(t),i.add(y(.14,.4,.14,9082784,.32,.5,.2)),i.add(y(1.3,.35,.7,O.stone,.55,.18,.55)),i.add(y(1.1,.1,.5,O.water,.55,.35,.55)),i}function E0(){const i=new wt;return i.add(y(.6,.24,.6,13215845,0,.12,0)),i.add(y(.46,.12,.46,14465918,0,.24,0)),i}function va(i,t,e){return y(.16,.2,.16,i,t,.34,e)}function zi(i){const t=new wt,e=Math.max(2,Math.round(i/1.2));for(let n=0;n<e;n++)t.add(y(.14,.8,.14,O.wood,-i/2+n*i/(e-1),.4,0));return t.add(y(i,.12,.1,O.wood,0,.62,0)),t.add(y(i,.12,.1,O.wood,0,.32,0)),t}function T0(i){const t=new wt,e=[],n=A0(7),s=new Ot(new qt(220,1,220),hn(O.grass));s.position.y=-.5,s.receiveShadow=!0,t.add(s);for(let _=0;_<160;_++){const L=(n()-.5)*180,F=(n()-.5)*160;if(Math.abs(L)<30&&Math.abs(F)<26)continue;const H=n()>.5?O.grassLight:O.grassDark,X=y(1+n()*2,.12,1+n()*2,H,L,.06,F);X.castShadow=!1,t.add(X)}const r=(_,L,F,H)=>{const X=y(F,.14,H,O.path,_,.07,L);X.castShadow=!1,t.add(X)};r(0,0,16,16),r(33.5,0,51,5),r(63,0,8,4),r(-16,0,16,4.5),r(0,-14,4.5,14),r(0,13,4.5,12);const o=[[-10,-12,.35,O.wallCream,O.roofPink],[10,-13,-.3,O.wallPink,O.roofMint],[-14,10,.5,O.wallMint,O.roofLilac],[12,11,-.6,O.wallLilac,O.roofPeach],[-26,-2,1.35,O.wallCream,O.roofBlue],[22,-8,-1.1,O.wallPink,O.roofPink]],a=[];for(const[_,L,F,H,X]of o){const pt=p0(H,X);pt.position.set(_,0,L),pt.rotation.y=F,t.add(pt),e.push({x:_,z:L,r:3.6});const it=5/2-.8,ht=-.8;a.push(new P(_+it*Math.cos(F)+ht*Math.sin(F),2.6+3.1,L-it*Math.sin(F)+ht*Math.cos(F)))}const l=_0();l.position.set(0,0,0),t.add(l),e.push({x:0,z:0,r:1.6});const c=[{id:"well",name:"the Well",x:0,z:0,r:2.4}],h=b0();h.position.set(-5,0,-3.5),t.add(h),e.push({x:-5,z:-3.5,r:.9}),c.push({id:"pump",name:"the Water Pump",x:-5,z:-3.5,r:2.2});const f=[];[[21.2,19.4,15985369],[22.4,18.6,12159583]].forEach(([_,L,F],H)=>{const{root:X,head:pt}=S0(F);X.position.set(_,0,L),X.rotation.y=H*1.4,t.add(X),e.push({x:_,z:L,r:.35}),f.push({root:X,head:pt,phase:H*2.4})});const p=E0();p.position.set(23.4,0,19.8),t.add(p),p.add(va(16775407,-.12,.05)),p.add(va(15985369,.1,-.05)),p.add(va(16774112,.02,.15)),e.push({x:23.4,z:19.8,r:.5}),c.push({id:"chickens",name:"the Chickens",x:21.8,z:19,r:2.4}),c.push({id:"nest",name:"the Nest",x:23.4,z:19.8,r:1.8});const g=zi(4.4);g.position.set(28,0,20.5),t.add(g);const v=zi(4.4);v.position.set(28,0,24.5),t.add(v);const u=zi(4.4);u.position.set(25.8,0,22.5),u.rotation.y=Math.PI/2,t.add(u);const d=zi(4.4);d.position.set(30.2,0,22.5),d.rotation.y=Math.PI/2,t.add(d);const b=w0();b.root.position.set(28,0,22.5),b.root.rotation.y=-.6,t.add(b.root),e.push({x:28,z:22.5,r:1.3}),c.push({id:"cow",name:"the Cow",x:28,z:22.5,r:2.6});const w=[[-18,-18,!0],[18,-19,!1],[-20,17,!1],[20,18,!0],[-32,-12,!1],[-34,8,!0],[30,14,!1],[8,-22,!0],[-8,22,!1],[36,-14,!0],[44,10,!1],[52,-8,!0]];for(const[_,L,F]of w){const H=m0(F);H.position.set(_,0,L),H.rotation.y=n()*Math.PI,t.add(H),e.push({x:_,z:L,r:.9})}for(const[_,L]of[[14,3.4],[26,-3.4],[38,3.4],[-14,3.4]]){const F=g0();F.position.set(_,0,L),t.add(F),e.push({x:_,z:L,r:.4})}const T=Nl(O.roofPink);T.position.set(-4,0,8.5),T.rotation.y=Math.PI,t.add(T),e.push({x:-4,z:8.5,r:1.8});const B=Nl(O.roofBlue);B.position.set(6,0,-8),B.rotation.y=.2,t.add(B),e.push({x:6,z:-8,r:1.8});const R=v0();R.position.set(8.2,0,9),t.add(R),e.push({x:8.2,z:9,r:.6});const E=x0();E.position.set(-13,0,13),E.rotation.y=.4,t.add(E),e.push({x:-13,z:13,r:1.1});for(const[_,L]of[[16,18.5],[19.5,17]]){const F=M0();F.position.set(_,0,L),F.rotation.y=n()*Math.PI,t.add(F),e.push({x:_,z:L,r:.9})}const I=y0();I.position.set(-6,0,-10.5),I.rotation.y=.35,t.add(I);const S=zi(7);S.position.set(-10,0,-8.2),t.add(S);const x=zi(6);x.position.set(-15.4,0,-12),x.rotation.y=Math.PI/2,t.add(x);const D=[O.flowerYellow,O.flowerPink,O.flowerBlue];for(let _=0;_<70;_++){const L=(n()-.5)*120,F=(n()-.5)*90,H=y(.22,.22,.22,D[_%3],L,.2,F);H.castShadow=!1,t.add(H),t.add(y(.08,.2,.08,O.leaf,L,.06,F))}const W=16249834,V=15722972,K=14670024,$=2.8,Y=1.2,Q=(_,L,F,H,X)=>{const pt=F-_,it=H-L,ht=Math.hypot(pt,it),Pt=Math.round(ht/6),tt=Math.abs(pt)>Math.abs(it);for(let dt=0;dt<Pt;dt++){const zt=_+pt*(dt+.5)/Pt,bt=L+it*(dt+.5)/Pt;if(X&&X(zt,bt))continue;const ut=ht/Pt,Tt=tt?ut:Y,Nt=tt?Y:ut,oe=y(Tt,$,Nt,dt%2===0?W:V,zt,$/2,bt);t.add(oe),t.add(y(tt?Tt:Y+.06,.09,tt?Y+.06:Nt,K,zt,1,bt)),t.add(y(tt?Tt:Y+.06,.09,tt?Y+.06:Nt,K,zt,1.9,bt)),t.add(y(Tt+.2,.28,Nt+.2,K,zt,$+.14,bt));const U=Math.floor(ut/1.9);for(let nt=0;nt<U;nt++){const Z=-ut/2+(nt+.5)*(ut/U);t.add(y(tt?.85:Y+.1,.55,tt?Y+.1:.85,W,zt+(tt?Z:0),$+.55,bt+(tt?0:Z)))}}},q=(_,L,F=!1)=>{const H=F?2.4:2,X=F?5.2:4.2;t.add(y(H,X,H,W,_,X/2,L)),t.add(y(H+.5,.35,H+.5,K,_,X+.18,L));for(const[pt,it]of[[-1,-1],[-1,1],[1,-1],[1,1]])t.add(y(.55,.55,.55,W,_+pt*H/2.6,X+.6,L+it*H/2.6));t.add(y(H-.4,.6,H-.4,O.roofPink,_,X+.75,L)),e.push({x:_,z:L,r:H*.75})},ot=Xe.east,mt=Xe.west,_t=Xe.north,kt=Xe.south;Q(mt,_t,ot,_t),Q(mt,kt,ot,kt),Q(mt,_t,mt,kt),Q(ot,_t,ot,kt,(_,L)=>Math.abs(L)<4.4),q(mt,_t),q(ot,_t),q(mt,kt),q(ot,kt),q(ot,-3.6,!0),q(ot,3.6,!0),t.add(y(.9,1.1,5.4,W,ot,4.3,0)),t.add(y(1.1,.3,5.8,K,ot,4.95,0)),t.add(y(.7,.5,4.6,O.roofPink,ot,5.3,0));const jt={open:!1},j=_=>{const L=new wt;L.position.set(ot,0,2.35*_);const F=y(.35,3.4,2.3,O.woodDark,0,1.7,-1.15*_);return L.add(F),L.add(y(.4,.16,2.3,9072466,0,.9,-1.15*_)),L.add(y(.4,.16,2.3,9072466,0,2.4,-1.15*_)),L.add(y(.12,.3,.3,O.robeGold,.2,1.7,-2*_)),t.add(L),L},et=j(-1),vt=j(1);for(const[_,L]of[[-30,-20],[18,24],[-24,18]])t.add(y(1.4,.8,1.2,O.stone,_,.4,L)),t.add(y(.8,.5,.8,12893877,_+1.1,.25,L+.4)),t.add(y(.5,.3,.5,O.grassDark,_+.4,.85,L-.3));const ct=new wt,Ut=new _e({color:16767306,transparent:!0,opacity:.8,fog:!1}),Bt=new Ot(new qt(2.6,40,2.6),Ut);Bt.position.y=20,ct.add(Bt);const Wt=new Ot(new qt(1.3,44,1.3),new _e({color:16776160,transparent:!0,opacity:.95,fog:!1}));Wt.position.y=22,ct.add(Wt);const de=new _e({color:16771194,fog:!1}),C=new Ot(new qt(3.4,3.4,3.4),de);C.position.y=42,C.rotation.set(Math.PI/4,0,Math.PI/4),ct.add(C);const ue=new Ot(new qt(5,5,5),new _e({color:16774072,transparent:!0,opacity:.5,fog:!1}));ue.position.y=42,ue.rotation.set(0,Math.PI/4,Math.PI/4),ct.add(ue);const Kt=new Ir(16771194,3.5,40);Kt.position.y=4,ct.add(Kt),ct.position.set(64.5,0,0),ct.visible=!1,t.add(ct);const $t=[];for(const _ of a)for(let L=0;L<3;L++){const F=new Ot(new qt(.5,.5,.5),new mi({color:16118508,transparent:!0,opacity:.7}));F.castShadow=!1,t.add(F),$t.push({mesh:F,base:_,phase:L/3,speed:.14+n()*.05})}const yt=[],pe=[16766629,16038084,11455487,13351152,16774072,12447414];[[-18,4],[5,12],[-10,-4],[16,8],[-24,10],[30,-6]].forEach(([_,L],F)=>{const H=new wt,X=pe[F%pe.length],pt=new Ot(new qt(.3,.05,.24),new mi({color:X}));pt.position.x=-.16;const it=pt.clone();it.position.x=.16;const ht=new Ot(new qt(.08,.08,.26),hn(O.nose));H.add(pt,it,ht),t.add(H),yt.push({g:H,wingL:pt,wingR:it,cx:_,cz:L,r:1.5+n()*2,ph:n()*6.28,sp:.5+n()*.5})});const It=[];for(let _=0;_<3;_++){const L=new wt,F=new Ot(new qt(.3,.22,.5),hn(16775407)),H=new Ot(new qt(.5,.06,.3),hn(14209996));H.position.x=-.35;const X=H.clone();X.position.x=.35,L.add(F,H,X),t.add(L),It.push({g:L,wingL:H,wingR:X,r:12+_*7,h:9+_*2.5,ph:_*2.1,sp:.12+_*.03})}const A=_=>{const L=jt.open?1.85:0;et.rotation.y+=(-L-et.rotation.y)*.04,vt.rotation.y+=(L-vt.rotation.y)*.04;for(const F of $t){const H=(_*F.speed+F.phase)%1;F.mesh.position.set(F.base.x+Math.sin((H+F.phase)*9)*.3,F.base.y+H*3.2,F.base.z+Math.cos((H+F.phase)*7)*.2);const X=.5+H*.9;F.mesh.scale.setScalar(X),F.mesh.material.opacity=.65*(1-H)}for(const F of yt){const H=_*F.sp+F.ph;F.g.position.set(F.cx+Math.cos(H)*F.r,1.2+Math.sin(_*1.7+F.ph)*.5,F.cz+Math.sin(H*1.3)*F.r),F.g.rotation.y=-H*1.15+Math.PI/2;const X=Math.sin(_*16+F.ph)*.9;F.wingL.rotation.z=X,F.wingR.rotation.z=-X}for(const F of It){const H=_*F.sp+F.ph;F.g.position.set(Math.cos(H)*F.r,F.h+Math.sin(_*.9+F.ph),Math.sin(H)*F.r),F.g.rotation.y=-H-Math.PI/2;const X=Math.sin(_*7+F.ph)*.6;F.wingL.rotation.z=X,F.wingR.rotation.z=-X}for(const F of f){const H=(_*.6+F.phase)%4;F.head.rotation.x=H<.5?Math.sin(H*Math.PI/.5)*.7:0}b.tail.rotation.z=Math.sin(_*1.1)*.25};return i.add(t),{group:t,colliders:e,interactables:c,lightBeam:ct,gate:jt,update:A}}function A0(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const C0=[{id:"christiana",name:"Christiana",species:"bear",fur:O.bearHoney,scale:.95,outfit:"dress",outfitColor:O.dressRose,x:-8.5,z:-7,facing:Math.PI,getLines:i=>{const t=i.eggsCollected>=3?[{speaker:"Christiana",text:"Oh — fresh eggs! Bless you, dear, breakfast will be lovely this morning. 🥚"}]:[];return i.talkedToEvangelist?[{speaker:"Christiana",text:"You really mean to go, then… toward that light in the east?"},{speaker:"Christiana",text:"Then go safely, my dear Christian. The cubs and I will keep the hearth warm."},{speaker:"Christiana",text:"Perhaps one day… we will follow you. 💗"}]:[...t,{speaker:"Christiana",text:"Christian, dear, you have been sighing all week over that heavy burden on your back."},{speaker:"Christiana",text:"You keep saying our city will not stand… it frightens the cubs, you know."},{speaker:"Christiana",text:"If you truly must find answers, they say a wise bear called Evangelist walks the east road."}]},onFinish:i=>{i.talkedToFamily=!0}},{id:"cub1",name:"Matthew (cub)",species:"bear",fur:O.bearBrown,scale:.55,outfit:"shirt",outfitColor:11455487,x:-11,z:-6,facing:Math.PI*.8,wanderRadius:2,getLines:i=>i.talkedToEvangelist?[{speaker:"Matthew",text:"Papa, is that sparkly light for YOU? It looks like a star that fell down!"},{speaker:"Matthew",text:"Bring me back a piece of it, okay? Promise!"}]:[{speaker:"Matthew",text:"Papa! Why do you always carry that big lumpy backpack?"},{speaker:"Matthew",text:"It looks SO heavy. I tried to lift it once and fell right over. Plop!"}]},{id:"cub2",name:"Samuel (cub)",species:"bear",fur:O.bearHoney,scale:.5,outfit:"overalls",outfitColor:10476744,x:-7,z:-5,facing:-Math.PI*.7,wanderRadius:2,getLines:i=>i.talkedToEvangelist?[{speaker:"Samuel",text:"*sniff* …You are going away, Papa?"},{speaker:"Samuel",text:"Mama says brave bears follow their hearts. So… be the bravest one ever."}]:[{speaker:"Samuel",text:"Papa, I found a honey-flower by the well! Want to smell it?"},{speaker:"Samuel",text:"It smells like… like honey! Hee hee."}]},{id:"obstinate",name:"Obstinate",species:"pig",scale:1.05,outfit:"shirt",outfitColor:10336417,x:4,z:4.5,facing:-Math.PI/3,getLines:i=>i.chaseDone?[{speaker:"Obstinate",text:"Oh. So you've come crawling back, have you? …No? Just VISITING? Hmph."},{speaker:"Obstinate",text:"Moonbeams and fairy-gold. Mark my words, Christian — no good ever came of leaving a perfectly fine city."}]:[{speaker:"Obstinate",text:"Hmph. Still going on about the city falling down, Christian?"},{speaker:"Obstinate",text:"This is the finest city anyone could want! Acorns in the market, mud by the river…"},{speaker:"Obstinate",text:"Leave if you like — but no sensible creature will go with you. Hmph!"}]},{id:"pliable",name:"Pliable",species:"rabbit",scale:.95,outfit:"shirt",outfitColor:16766629,x:7,z:1,facing:Math.PI,wanderRadius:3,getLines:i=>i.pliableLeft?[{speaker:"Pliable",text:"Ah— Christian! You made it out of that dreadful bog, then. *ahem* …You're not cross with me, are you?"},{speaker:"Pliable",text:"The mud, you see. It was in my EARS. A gentle-rabbit has his limits! …But do write when you reach that golden city."}]:i.pliableFollowing?[{speaker:"Pliable",text:"Lead on, Christian! Crowns of gold, here we come — hop hop!"}]:i.talkedToEvangelist?[{speaker:"Pliable",text:"A shining light?! And a Wicket Gate?! Ooooh, tell me EVERYTHING."},{speaker:"Christian",text:"Evangelist says beyond the gate lies the way to the Celestial City — where no city ever crumbles."},{speaker:"Pliable",text:"Golden streets… crowns… no crumbling… It sounds marvellous. And far. And possibly muddy. Oh, I can't decide!"}]:[{speaker:"Pliable",text:"Oh, hello Christian! Don't mind old Obstinate — he grumbles at clouds, too."},{speaker:"Pliable",text:"A Celestial City, all gold and light? If it's real, I'd love to see it… I think."}]},{id:"baker",name:"Mrs. Bramble",species:"bear",fur:O.bearBrown,scale:.98,outfit:"apron",outfitColor:15980966,x:-3,z:11,facing:0,getLines:i=>i.talkedToEvangelist?[{speaker:"Mrs. Bramble",text:"Leaving us, are you? Well, I never held with any of it, but I'll miss your face at my counter."},{speaker:"Christian",text:"Thank you for all the buns, Mrs. Bramble. I won't forget your kindness."},{speaker:"Mrs. Bramble",text:"Oh, hush now, off with you before I get flour in my eyes. Go on!"}]:[{speaker:"Mrs. Bramble",text:"Fresh honey-buns! Oh — Christian, dear, you look pale as flour."},{speaker:"Christian",text:"I'm well enough, Mrs. Bramble. Just… this burden. It won't let me rest."},{speaker:"Mrs. Bramble",text:"Here, imagine I gave you a bun. On the house. You'll need your strength, whatever it is you're up to."}]},{id:"farmer",name:"Old Hamlet",species:"pig",fur:15247282,scale:1,outfit:"overalls",outfitColor:9418968,x:17,z:16,facing:-Math.PI/2,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Old Hamlet",text:"A light in the east, eh? My old snout smells a change in the wind…"},{speaker:"Christian",text:"I hope it's a change for the better, Old Hamlet. I mean to follow it."},{speaker:"Old Hamlet",text:"Take care on the road, lad. Mind the bog past the fields — it swallows boots whole."}]:[{speaker:"Old Hamlet",text:"Mornin', Christian. Fine day for turnips. Not so fine for carryin' great sacks about, I'd say."},{speaker:"Christian",text:"It isn't turnips, Old Hamlet. I wish it were something I could just set down in a field."},{speaker:"Old Hamlet",text:"You look like a pig who's seen the butcher's calendar. Whatever's weighing you, don't carry it alone."}]},{id:"frogkid",name:"Puddle",species:"frog",scale:.55,outfit:"shirt",outfitColor:16238804,x:2.5,z:-3,facing:Math.PI,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Puddle",text:"Ribbit! Are you really going away, Mister Christian? All the way past the fields?"},{speaker:"Christian",text:"All the way to a Celestial City, Puddle. I hope you'll come visit someday."},{speaker:"Puddle",text:"A CELESTIAL city?! Do the puddles there go on forever?! …I'll practice my jumping, just in case!"}]:[{speaker:"Puddle",text:"Ribbit! Mister Christian! I can jump higher than the well! Wanna see?"},{speaker:"Christian",text:"Ha! Go on then, Puddle — show me your best jump."},{speaker:"Puddle",text:"…Okay, maybe not HIGHER. But definitely louder. RIBBIT!"}]},{id:"florist",name:"Clover",species:"rabbit",fur:15325123,scale:.92,outfit:"dress",outfitColor:13102274,x:-18,z:4,facing:Math.PI/2,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Clover",text:"Everyone's whispering about you, Christian. A light beyond the fields, imagine!"},{speaker:"Christian",text:"It's true, Clover. I mean to follow it, however far it leads."},{speaker:"Clover",text:"Here — a daisy for your buttonhole. Flowers make every road shorter."}]:[{speaker:"Clover",text:"Good day, Christian! My daisies came up lovely this spring, haven't they?"},{speaker:"Christian",text:"They're lovely, Clover. I only wish I could enjoy them without this weight on my back."},{speaker:"Clover",text:"Though… the soil's been trembling lately. The flowers feel it too, I think."}]},{id:"cat",name:"Mr. Whiskers",species:"cat",scale:.96,outfit:"shirt",outfitColor:13351152,x:10,z:-6,facing:Math.PI*.75,getLines:i=>i.talkedToEvangelist?[{speaker:"Mr. Whiskers",text:"Mrrrow. So you're actually leaving. I suppose someone has to stop worrying about the city collapsing."},{speaker:"Christian",text:"Will you miss me, Mr. Whiskers?"},{speaker:"Mr. Whiskers",text:"…Don't make it strange. Go on, then. Mind the sunbeams on your way out."}]:[{speaker:"Mr. Whiskers",text:"Mrrrow. You're blocking my sunbeam, Christian."},{speaker:"Christian",text:"Sorry, Mr. Whiskers. I have rather a lot on my mind — and on my back."},{speaker:"Mr. Whiskers",text:"A city falling down? As long as it doesn't fall before my nap, I really can't be bothered."}]},{id:"evangelist",name:"Evangelist",species:"bear",fur:11049612,scale:1.15,outfit:"robe",outfitColor:O.robeWhite,x:42,z:0,facing:-Math.PI/2,getLines:i=>i.talkedToEvangelist?[{speaker:"Evangelist",text:"Do you see the shining light, Christian? Keep it ever before your eyes."},{speaker:"Evangelist",text:"Walk straight toward it, and you shall find the Wicket Gate. Knock, and it will be opened."}]:[{speaker:"Evangelist",text:"Peace to you, burdened friend. I am called Evangelist. Why do you sigh so?"},{speaker:"Christian",text:"This burden on my back grows heavier each day… and I fear our city will not stand. But I do not know where to go!"},{speaker:"Evangelist",text:"Then hear me. Beyond the fields lies a Wicket Gate, the beginning of the true way."},{speaker:"Christian",text:"A gate? I look and look, but I cannot see any gate…"},{speaker:"Evangelist",text:"Do you see, far off, yonder shining light?"},{speaker:"Christian",text:"…I… yes! I think I see it!"},{speaker:"Evangelist",text:"Keep that light in your eye and go straight toward it. There you will find the Gate. Now run, Christian — run and do not look back!"}],onFinish:i=>{i.talkedToEvangelist=!0}}];function R0(i){return C0.map(t=>{const e=Ne({species:t.species,fur:t.fur,scale:t.scale,outfit:t.outfit,outfitColor:t.outfitColor});return e.root.position.set(t.x,0,t.z),e.root.rotation.y=t.facing,i.add(e.root),{id:t.id,name:t.name,parts:e,position:new P(t.x,0,t.z),facing:t.facing,getLines:t.getLines,onFinish:t.onFinish,wanderRadius:t.wanderRadius}})}const Fl={village:{bpm:76,chords:[[130.81,164.81,196,246.94],[110,130.81,164.81,196],[87.31,130.81,174.61,220],[98,146.83,196,220]],scale:[523.25,587.33,659.25,783.99,880,1046.5]},map:{bpm:92,chords:[[130.81,164.81,196,261.63],[98,123.47,146.83,196],[110,130.81,164.81,220],[87.31,110,174.61,220]],scale:[392,440,523.25,587.33,659.25,783.99]},slough:{bpm:58,chords:[[110,123.47,164.81,220],[87.31,130.81,174.61,220],[110,130.81,164.81,220],[82.41,123.47,164.81,207.65]],scale:[220,246.94,261.63,329.63,392,440]},sinai:{bpm:66,chords:[[110,164.81,220,261.63],[82.41,123.47,164.81,196],[87.31,130.81,174.61,220],[82.41,123.47,164.81,207.65]],scale:[329.63,349.23,392,440,493.88,523.25]},gate:{bpm:62,chords:[[130.81,196,261.63,329.63],[87.31,174.61,220,261.63],[110,164.81,220,261.63],[98,146.83,246.94,293.66]],scale:[392,440,523.25,587.33,659.25,783.99]}};class P0{constructor(){st(this,"ctx",null);st(this,"master",null);st(this,"timer",null);st(this,"nextBarTime",0);st(this,"bar",0);st(this,"style","village");st(this,"noiseBuf",null);st(this,"volume",.5);st(this,"enabled",!0)}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?this.volume:0,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*.25;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;this.nextBarTime=this.ctx.currentTime+.1,this.timer=window.setInterval(()=>this.schedule(),200)}toggle(){return this.enabled=!this.enabled,this.ctx&&this.master&&this.master.gain.linearRampToValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime+.2),this.enabled}setStyle(t){if(t===this.style)return;if(!this.ctx||!this.master){this.style=t;return}const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(1e-4,e+1.4),window.setTimeout(()=>{if(this.style=t,this.bar=0,this.ctx&&this.master){this.nextBarTime=this.ctx.currentTime+.15;const n=this.ctx.currentTime;this.master.gain.cancelScheduledValues(n),this.master.gain.setValueAtTime(1e-4,n),this.master.gain.linearRampToValueAtTime(this.enabled?this.volume:0,n+2)}},1500)}blip(){if(!this.ctx||!this.master||!this.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(660,t),e.frequency.exponentialRampToValueAtTime(880,t+.07),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n).connect(this.master),e.start(t),e.stop(t+.15)}splash(){if(!this.ctx||!this.master||!this.enabled||!this.noiseBuf)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(700,t),n.frequency.exponentialRampToValueAtTime(150,t+.25);const s=this.ctx.createGain();s.gain.setValueAtTime(.25,t),s.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(n).connect(s).connect(this.master),e.start(t)}rumble(){if(!this.ctx||!this.master||!this.enabled||!this.noiseBuf)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(60,t+.8);const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.4,t+.08),s.gain.exponentialRampToValueAtTime(.001,t+1),e.connect(n).connect(s).connect(this.master),e.start(t);const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(55,t),r.frequency.exponentialRampToValueAtTime(38,t+.9),o.gain.setValueAtTime(.12,t),o.gain.exponentialRampToValueAtTime(.001,t+1),r.connect(o).connect(this.master),r.start(t),r.stop(t+1.1)}barLen(){return 60/Fl[this.style].bpm*4}schedule(){if(this.ctx)for(;this.nextBarTime<this.ctx.currentTime+this.barLen()*1.2;)this.scheduleBar(this.nextBarTime,this.bar),this.nextBarTime+=this.barLen(),this.bar++}pluck(t,e,n,s=.9){const r=this.ctx,o=r.createOscillator(),a=r.createGain();o.type="sine",o.frequency.value=e,a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(.001,t+s),o.connect(a).connect(this.master),o.start(t),o.stop(t+s+.1);const l=r.createOscillator(),c=r.createGain();l.type="sine",l.frequency.value=e*2,c.gain.setValueAtTime(n*.22,t),c.gain.exponentialRampToValueAtTime(.001,t+s*.55),l.connect(c).connect(this.master),l.start(t),l.stop(t+s)}pad(t,e,n,s,r="triangle"){const o=this.ctx;for(const a of e){const l=o.createOscillator(),c=o.createGain();l.type=r,l.frequency.value=a,l.detune.value=(Math.random()-.5)*6,c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(s,t+n*.3),c.gain.linearRampToValueAtTime(1e-4,t+n*1.05),l.connect(c).connect(this.master),l.start(t),l.stop(t+n*1.1)}}bass(t,e,n=.11,s=.5){const r=this.ctx,o=r.createOscillator(),a=r.createGain();o.type="sine",o.frequency.value=e,a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(.001,t+s),o.connect(a).connect(this.master),o.start(t),o.stop(t+s+.05)}shaker(t,e){if(!this.noiseBuf)return;const n=this.ctx,s=n.createBufferSource();s.buffer=this.noiseBuf;const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=5e3;const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.08),s.connect(r).connect(o).connect(this.master),s.start(t),s.stop(t+.1)}scheduleBar(t,e){const n=Fl[this.style],s=n.chords[e%n.chords.length],r=this.barLen(),o=r/8;if(this.style==="village"){this.pad(t,s,r,.045);for(let a=0;a<8;a++)a!==0&&Math.random()>.45||this.pluck(t+a*o,n.scale[Math.floor(Math.random()*n.scale.length)],.09);this.bass(t,s[0]/2),this.bass(t+r/2,s[0]/2)}else if(this.style==="map"){this.pad(t,s,r,.035);const a=[0,1,2,3,2,3,1,2];for(let l=0;l<8;l++){if(l===5&&e%2===0)continue;const c=s[a[l]]*2;this.pluck(t+l*o,c,.075,.5)}e%2===1&&this.pluck(t+o*6,n.scale[e/2%n.scale.length|0]*2,.05,.8);for(const l of[1,3,5,7])this.shaker(t+l*o,.02);this.bass(t,s[0]/2,.12,.4),this.bass(t+r*.5,s[1]/2,.09,.4),this.bass(t+r*.75,s[0]/2,.07,.3)}else if(this.style==="slough"){this.pad(t,s,r,.05,"sine");for(let a=0;a<8;a++)Math.random()>.22||this.pluck(t+a*o,n.scale[Math.floor(Math.random()*n.scale.length)],.06,1.4);if(this.bass(t,s[0]/2,.12,.9),Math.random()<.5){const a=this.ctx,l=t+Math.random()*r,c=a.createOscillator(),h=a.createGain();c.type="sine",c.frequency.setValueAtTime(900+Math.random()*300,l),c.frequency.exponentialRampToValueAtTime(240,l+.18),h.gain.setValueAtTime(.05,l),h.gain.exponentialRampToValueAtTime(.001,l+.22),c.connect(h).connect(this.master),c.start(l),c.stop(l+.25)}}else{this.pad(t,s,r,.05,"sine");for(let a=0;a<8;a++)a%2!==0||Math.random()>.6||this.pluck(t+a*o,n.scale[Math.floor(Math.random()*n.scale.length)],.07,1.1);this.bass(t,s[0]/2,.1,.7)}}}const ri=new P(-14.5,0,0),ai=new P(-3.5,0,0),Hi=new P(3.5,0,0),oi=new P(11,0,7),wn=new P(17.5,0,-1),L0=[{c:ri,r:4.2},{c:ai,r:4.2},{c:Hi,r:1.9},{c:oi,r:4.2},{c:wn,r:4}];class I0{constructor(t){st(this,"scene",new Ts);st(this,"camera");st(this,"progress",.02);st(this,"branchP",0);st(this,"road","main");st(this,"sloughDone",!1);st(this,"moralityDone",!1);st(this,"justDiverted",!1);st(this,"cityT",.02);st(this,"sloughT",.35);st(this,"forkT",.6);st(this,"beyondT",.97);st(this,"mainCurve");st(this,"branchCurve");st(this,"branchSpeed",1);st(this,"christian");st(this,"followers",[]);st(this,"clouds",[]);st(this,"islands",[]);st(this,"sparkles",[]);st(this,"mist",[]);st(this,"sinaiGlow",null);st(this,"moving",!1);st(this,"facing",1);st(this,"built",!1);this.camera=new Be(45,t,.1,200),this.resize(t),this.mainCurve=new Cl([new P(ri.x+2,.62,.7),new P(-10,.62,-1.2),new P(-6.5,.62,1),new P(ai.x,.62,0),new P(0,.62,-1),new P(Hi.x,.62,0),new P(7,.62,-2.6),new P(11,.62,-4.2),new P(14.5,.62,-3.2),new P(wn.x-1.5,.62,-1.3)]),this.branchCurve=new Cl([new P(Hi.x+.6,.62,.8),new P(5.8,.62,3),new P(8,.62,5),new P(oi.x-2,.62,oi.z-.6)]),this.cityT=this.tForPoint(ri),this.sloughT=this.tForPoint(ai),this.forkT=this.tForPoint(Hi),this.beyondT=this.tForPoint(wn),this.branchSpeed=this.mainCurve.getLength()/Math.max(this.branchCurve.getLength(),1),this.christian=Ne({species:"bear",fur:O.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0,scale:.5})}tForPoint(t){let e=0,n=1/0;for(let s=0;s<=300;s++){const r=s/300,o=this.mainCurve.getPointAt(r),a=Math.hypot(o.x-t.x,o.z-t.z);a<n&&(n=a,e=r)}return e}label(t,e,n,s,r="#5b4a3f"){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.font='bold 52px "Trebuchet MS", sans-serif',a.textAlign="center",a.textBaseline="middle";const l=a.measureText(t).width+70;a.fillStyle="rgba(255, 248, 239, 0.92)",a.strokeStyle="rgba(244, 184, 196, 1)",a.lineWidth=8,a.beginPath(),a.roundRect((512-l)/2,18,l,92,46),a.fill(),a.stroke(),a.fillStyle=r,a.fillText(t,256,66);const c=new a0(o),h=new r0(new xc({map:c,transparent:!0}));h.scale.set(6.4,1.6,1),h.position.set(e,s,n),this.scene.add(h)}island(t,e,n,s){const r=new wt,o=14,a=(c,h,f,m)=>{const p=new Ot(new xo(c,c,h,o),hn(f));p.position.y=m,p.castShadow=!0,p.receiveShadow=!0,r.add(p)};a(n+.3,.5,s,.3),a(n,.9,14206106,-.25),a(Math.max(n-.8,.8),1,12162938,-1.1),a(Math.max(n-1.7,.6),1,10846815,-2),a(Math.max(n-2.6,.4),.8,9662799,-2.8);const l=Math.max(5,Math.round(n*1.6));for(let c=0;c<l;c++){const h=c/l*Math.PI*2+.4;r.add(y(.45,.3,.45,O.grassDark,Math.cos(h)*(n+.2),.14,Math.sin(h)*(n+.2)))}return r.position.set(t,0,e),this.scene.add(r),this.islands.push(r),r}miniTree(t,e,n=!1){const s=new wt;return s.add(y(.16,.5,.16,O.trunk,0,.25,0)),s.add(y(.6,.45,.6,n?O.leafPink:O.leaf,0,.7,0)),s.add(y(.35,.3,.35,n?O.leafPink:O.leaf,0,1,0)),s.position.set(t,.55,e),s}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Xt(12574965),t.fog=new gi(12574965,34,95),t.add(new As(15267071,12376554,1));const e=new Cs(O.sun,1.4);e.position.set(-8,14,10),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.left=-24,e.shadow.camera.right=24,e.shadow.camera.top=16,e.shadow.camera.bottom=-16,t.add(e);const n=y(1.6,1.6,.3,16771194,14,10.5,-14);n.castShadow=!1,t.add(n);const s=new Ot(new qt(2.4,2.4,.2),new _e({color:16774072,transparent:!0,opacity:.5}));s.position.set(14,10.5,-14.2),t.add(s);const r=new Ot(new qt(240,1,160),hn(O.water));r.position.y=-1.6,r.receiveShadow=!0,t.add(r);for(let E=0;E<40;E++){const I=new Ot(new qt(.5+Math.random()*.9,.06,.16),new _e({color:15004668,transparent:!0,opacity:.8}));I.position.set((Math.random()-.5)*60,-1.02,(Math.random()-.5)*34),I.castShadow=!1,t.add(I),this.sparkles.push(I)}const o=this.island(ri.x,ri.z,4.6,O.grass),a=new wt,l=(E,I,S)=>{a.add(y(.85,.65,.75,O.wallCream,E,.9,I)),a.add(y(1,.35,.9,S,E,1.4,I)),a.add(y(.18,.5,.06,O.woodDark,E,.8,I+.4))};l(-1,-.5,O.roofPink),l(.25,-1.15,O.roofMint),l(.65,.45,O.roofLilac),l(-.45,.95,O.roofPeach);const c=[[-2,0,.28,3.7],[2,-1.1,.28,1.6],[2,1.1,.28,1.6],[0,-1.9,4.2,.28],[0,1.9,4.2,.28]];for(const[E,I,S,x]of c)a.add(y(S,.6,x,16249834,E,.85,I)),a.add(y(S+.08,.12,x+.08,14670024,E,1.16,I));a.position.set(-.9,0,-.3),o.add(a),o.add(this.miniTree(-3,2.1,!0)),o.add(this.miniTree(3,-2.2)),o.add(this.miniTree(2.6,2.3,!0));for(let E=0;E<8;E++){const I=Math.random()*Math.PI*2,S=1.5+Math.random()*2.4,x=y(.14,.14,.14,[O.flowerYellow,O.flowerPink,O.flowerBlue][E%3],Math.cos(I)*S,.62,Math.sin(I)*S);x.castShadow=!1,o.add(x)}this.label("City of Destruction",ri.x,ri.z,4.4);const h=this.island(ai.x,ai.z,4.4,10405775),f=new wt;f.add(y(4,.18,3,9073493,0,.62,0)),f.add(y(3,.2,2.1,7297602,0,.68,.1)),f.add(y(.55,.14,.55,9073493,-1.8,.66,1.3)),f.add(y(.45,.12,.45,7297602,2,.66,-1.2)),f.add(y(.16,.16,.16,10982002,.4,.84,.3)),f.add(y(.12,.12,.12,10982002,-.6,.82,-.4));for(const[E,I]of[[-2.1,-1],[1.8,1.2],[2.3,.2],[-1.5,1.5],[.2,-1.5]])f.add(y(.1,.85,.1,8101983,E,1,I)),f.add(y(.16,.28,.16,13215845,E,1.48,I));f.position.set(.2,0,.1),h.add(f);const m=new wt;m.add(y(.18,1,.18,10129286,0,.5,0)),m.add(y(.7,.14,.14,10129286,.2,.95,0)),m.add(y(.14,.5,.14,10129286,.55,1.2,0)),m.position.set(-2.9,.55,-2),h.add(m),this.label("Slough of Despond",ai.x,ai.z,4.4);const p=this.island(Hi.x,Hi.z,1.9,O.grass),g=new wt;g.add(y(.14,1.7,.14,O.woodDark,0,.85,0));const v=y(1.2,.32,.1,O.wood,.5,1.45,0);g.add(v);const u=y(.1,.32,1.2,O.wood,0,1.05,.5);g.add(u),g.position.set(-.3,.55,-.5),p.add(g),p.add(this.miniTree(.9,.8,!0));const d=this.island(oi.x,oi.z,4.4,11458976),b=(E,I,S)=>{d.add(y(.9,.7,.8,16447212,E,.95,I)),d.add(y(1.05,.35,.95,S,E,1.5,I)),d.add(y(.16,.45,.06,O.woodDark,E,.82,I+.42))};b(-1.6,1.2,10336472),b(-.2,1.5,1211e4),b(1.2,1.2,10336472);for(const[E,I]of[[-2.4,.2],[-.9,.35],[.6,.35],[2,.2]])d.add(y(.9,.3,.3,8826237,E,.72,I));const w=new wt;w.add(y(2.6,1.4,1.8,9276822,0,.7,0)),w.add(y(1.9,1.2,1.4,8224136,.1,1.7,-.1)),w.add(y(1.2,1,1,9276822,-.1,2.6,0)),w.add(y(.7,.7,.7,7303034,.05,3.3,0));const T=new Ot(new qt(.5,.9,.12),new _e({color:16751181,transparent:!0,opacity:.9}));T.position.set(.2,1.6,.66),w.add(T),this.sinaiGlow=T,w.position.set(.3,.55,-1.8),d.add(w),this.label("Morality",oi.x,oi.z,4.6);const B=this.island(wn.x,wn.z,4.2,10405800);B.add(this.miniTree(-2.4,1.6)),B.add(this.miniTree(2.5,-1.4,!0)),B.add(y(.2,1.3,.2,O.woodDark,1,1.2,.2)),B.add(y(.2,1.3,.2,O.woodDark,2,1.2,.2)),B.add(y(1.3,.2,.2,O.woodDark,1.5,1.9,.2));const R=new Ot(new qt(.9,1.1,.1),new _e({color:16774072,transparent:!0,opacity:.7}));R.position.set(1.5,1.15,.15),B.add(R);for(let E=0;E<7;E++){const I=new Ot(new qt(2.2+Math.random()*1.6,1+Math.random()*.8,1.6),new mi({color:15922936,transparent:!0,opacity:.55}));I.position.set(wn.x-3+Math.random()*6,1+Math.random()*1.4,wn.z-2+Math.random()*4),I.castShadow=!1,t.add(I),this.mist.push(I)}this.label("Wicket Gate",wn.x,wn.z,4.4),this.buildRoad(this.mainCurve,72),this.buildRoad(this.branchCurve,26);for(let E=0;E<6;E++){const I=new wt;I.add(y(1.8,.55,1,16777215,0,0,0)),I.add(y(1.1,.5,.8,16777215,1,.25,.1)),I.add(y(.9,.45,.7,16777215,-.9,.18,-.1)),I.add(y(.6,.35,.5,16777215,.2,.42,.15)),I.position.set((Math.random()-.5)*36,5.5+Math.random()*3,-6-Math.random()*5),I.traverse(S=>{S.isMesh&&(S.castShadow=!1)}),this.clouds.push(I),t.add(I)}this.scene.add(this.christian.root),this.placeOn(this.mainCurve,this.christian.root,this.progress)}nearLand(t,e){for(const n of L0)if(Math.hypot(t-n.c.x,e-n.c.z)<n.r)return!0;return!1}buildRoad(t,e){for(let n=0;n<=e;n++){const s=n/e,r=t.getPointAt(s),o=t.getTangentAt(s);if(this.nearLand(r.x,r.z)){const a=y(.5,.1,.6,O.path,r.x,r.y-.02,r.z);a.rotation.y=Math.atan2(o.x,o.z)+Math.PI/2,a.castShadow=!1,this.scene.add(a)}else{const a=y(.5,.14,1.1,O.wood,r.x,.5,r.z);if(a.rotation.y=Math.atan2(o.x,o.z)+Math.PI/2,a.castShadow=!1,this.scene.add(a),n%4===0){const l=-o.z,c=o.x;for(const h of[-1,1])this.scene.add(y(.14,2,.14,O.woodDark,r.x+l*.62*h,-.4,r.z+c*.62*h)),this.scene.add(y(.1,.5,.1,O.woodDark,r.x+l*.58*h,.85,r.z+c*.58*h))}}}}start(t){this.build();for(const e of this.followers)this.scene.remove(e.root);this.followers=t.map(e=>{const n=Ne(e==="pliable"?{species:"rabbit",outfit:"shirt",outfitColor:16766629,scale:.44}:{scale:.44});return this.scene.add(n.root),n})}resize(t){this.camera.aspect=t;const e=re.clamp(40/t-1,20,46);this.camera.position.set(1.2,e*.78,e+2.2),this.camera.lookAt(1.2,.4,1.4),this.camera.updateProjectionMatrix()}spot(){return this.road==="branch"?this.branchP>.86?"morality":"road":this.progress<this.cityT+.05?"city":Math.abs(this.progress-this.sloughT)<.05?"slough":Math.abs(this.progress-this.forkT)<.04?"fork":this.progress>this.beyondT-.04?"beyond":"road"}placeOn(t,e,n){const s=t.getPointAt(re.clamp(n,0,1));e.position.set(s.x,this.nearLand(s.x,s.z)?s.y:.57,s.z)}update(t,e,n,s){if(!this.built)return;const r=t*.075;if(this.moving=!1,this.road==="main"){if(Math.abs(n)>.15){this.moving=!0;const c=this.moralityDone?this.beyondT+.02:this.sloughDone?this.forkT:this.sloughT+.05;this.progress=re.clamp(this.progress+n*r,.02,c),this.facing=n>0?1:-1,!this.moralityDone&&this.sloughDone&&n>0&&this.progress>=this.forkT-1e-5&&(this.road="branch",this.branchP=.02,this.justDiverted=!0)}this.moralityDone&&s>.35&&Math.abs(this.progress-this.forkT)<.05&&(this.road="branch",this.branchP=.03,this.moving=!0,this.facing=1)}else Math.abs(n)>.15&&(this.moving=!0,this.branchP=re.clamp(this.branchP+n*r*this.branchSpeed,0,.96),this.facing=n>0?1:-1,this.branchP<=0&&n<0&&(this.road="main",this.progress=this.forkT));const o=this.road==="main"?this.mainCurve:this.branchCurve,a=this.road==="main"?this.progress:this.branchP;this.placeOn(o,this.christian.root,a);const l=o.getTangentAt(re.clamp(a,0,1));this.christian.root.rotation.y=Math.atan2(l.x*this.facing,l.z*this.facing),se(this.christian,e,this.moving),this.followers.forEach((c,h)=>{const f=a-.045*(h+1)*this.facing;this.placeOn(o,c.root,f);const m=o.getTangentAt(re.clamp(f,0,1));c.root.rotation.y=Math.atan2(m.x*this.facing,m.z*this.facing),se(c,e+.4*(h+1),this.moving)});for(let c=0;c<this.clouds.length;c++){const h=this.clouds[c];h.position.x+=t*(.2+c*.06),h.position.x>24&&(h.position.x=-24)}for(let c=0;c<this.islands.length;c++)this.islands[c].position.y=Math.sin(e*.6+c*2.1)*.04;for(let c=0;c<this.sparkles.length;c++){const h=this.sparkles[c];h.material.opacity=.35+.45*Math.abs(Math.sin(e*1.3+c*1.7))}for(let c=0;c<this.mist.length;c++){const h=this.mist[c];h.position.x+=Math.sin(e*.4+c)*t*.15,h.material.opacity=.45+.15*Math.sin(e*.5+c*1.3)}this.sinaiGlow&&(this.sinaiGlow.material.opacity=.5+.45*Math.abs(Math.sin(e*2.2)))}}const sr=40,us=5,rr=11.5,ar=8;class D0{constructor(t){st(this,"scene",new Ts);st(this,"phase","walk");st(this,"cb");st(this,"christian");st(this,"pliable",null);st(this,"pliableStage","follow");st(this,"revisit",!1);st(this,"help");st(this,"steps",[[-3.5,1],[-1,-.6],[1.5,1.1],[4,-.9],[6.5,.9],[9,-1],[11.5,.7],[13.5,-.5]]);st(this,"sink",0);st(this,"struggle",0);st(this,"wisps",[]);st(this,"bubbles",[]);st(this,"splashes",[]);st(this,"splashTimer",0);st(this,"rescueT",0);st(this,"built",!1);st(this,"lightBeam",null);this.cb=t,this.christian=Ne({species:"bear",fur:O.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.help=Ne({species:"bear",fur:9411210,outfit:"robe",outfitColor:13102274,scale:1.2})}inBog(t,e){const n=(t-us)/rr,s=e/ar;return n*n+s*s<1}nearStep(t,e){for(const[n,s]of this.steps)if(Math.hypot(t-n,e-s)<1.35)return!0;return!1}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Xt(12175828),t.fog=new gi(12175828,30,80),t.add(new As(14148844,11057312,.85));const e=new Cs(15919826,1.1);e.position.set(-25,40,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-45,e.shadow.camera.right=45,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,t.add(e);const n=new Ot(new qt(140,1,90),hn(9681290));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let g=0;g<70;g++){const v=-45+Math.random()*90,u=-35+Math.random()*70;if(this.inBog(v,u))continue;const d=y(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?8826237:10798746,v,.05,u);d.castShadow=!1,t.add(d)}for(const[g,v]of[[-22,16],[22,10]]){const u=y(v,.12,3.6,14272936,g,.06,0);u.castShadow=!1,t.add(u)}const s=[9073493,8152908,7297602];for(let g=0;g<3;g++){const v=rr-g*1.6,u=ar-g*1.3;for(let d=0;d<14;d++){const b=d/14*Math.PI*2,w=us+Math.cos(b)*v*(.55+.35*Math.random()),T=Math.sin(b)*u*(.55+.35*Math.random()),B=y(3+Math.random()*3,.1+g*.03,2.5+Math.random()*2.5,s[g],w,.1+g*.03,T);B.castShadow=!1,t.add(B)}}const r=y(rr*1.7,.14,ar*1.7,8152908,us,.1,0);r.castShadow=!1,t.add(r);for(let g=0;g<10;g++){const v=y(.22,.22,.22,10982002,us-9+Math.random()*18,.28,-6+Math.random()*12);v.castShadow=!1,t.add(v),this.bubbles.push({mesh:v,phase:Math.random()*6.28})}for(const[g,v]of this.steps)t.add(y(1.5,.28,1.5,14209996,g,.16,v)),t.add(y(1.7,.1,1.7,12893877,g,.04,v));for(let g=0;g<26;g++){const v=g/26*Math.PI*2,u=us+Math.cos(v)*(rr+1.5+Math.random()*2),d=Math.sin(v)*(ar+1.2+Math.random()*2);t.add(y(.14,1.3+Math.random()*.7,.14,8101983,u,.8,d)),g%2===0&&t.add(y(.22,.45,.22,13215845,u,1.75,d))}for(const[g,v,u]of[[-12,-10,.4],[16,9,1.2],[-8,11,2.2],[20,-9,.9]]){const d=new wt;d.add(y(.45,2.6,.45,10129286,0,1.3,0)),d.add(y(1.6,.3,.3,10129286,.5,2.3,0)),d.add(y(.3,1.1,.3,10129286,1.2,2.9,0)),d.add(y(1.1,.25,.25,9076598,-.6,1.7,.1)),d.position.set(g,0,v),d.rotation.y=u,t.add(d)}for(let g=0;g<9;g++){const v=new Ot(new qt(4+Math.random()*4,.8,2.5+Math.random()*2),new mi({color:15265520,transparent:!0,opacity:.35}));v.position.set(-20+Math.random()*45,.9+Math.random()*.8,-12+Math.random()*24),v.castShadow=!1,t.add(v),this.wisps.push(v)}for(let g=0;g<14;g++){const v=new _e({color:9073493,transparent:!0,opacity:0}),u=new Ot(new qt(.2,.2,.2),v);u.visible=!1,t.add(u),this.splashes.push({mesh:u,m:v,life:1,vx:0,vz:0})}const o=new wt;o.add(y(.16,1.6,.16,O.woodDark,0,.8,0)),o.add(y(1.6,.8,.12,O.wood,0,1.5,0)),o.add(y(1.2,.1,.14,9072466,0,1.62,0)),o.add(y(1.2,.1,.14,9072466,0,1.38,0)),o.position.set(-11,0,4),o.rotation.y=-.5,t.add(o),this.help.root.position.set(24,0,0),this.help.root.visible=!1,this.help.armR.add(y(.14,2.2,.14,O.woodDark,.1,-.6,.2)),t.add(this.help.root);for(let g=0;g<12;g++){const v=20+g*1.8;t.add(y(2.6,.12,3.2,O.path,v,.06,Math.sin(g*.5)*.5))}for(const[g,v,u]of[[26,-5,!0],[30,5,!1],[34,-6,!1],[37,6,!0]]){const d=new wt;d.add(y(.5,1.6,.5,O.trunk,0,.8,0)),d.add(y(1.9,1.3,1.9,u?O.leafPink:O.leaf,0,2.2,0)),d.add(y(1.2,.9,1.2,u?O.leafPink:O.leaf,0,3.1,0)),d.position.set(g,0,v),t.add(d)}const a=new wt,l=new _e({color:16767306,transparent:!0,opacity:.8,fog:!1}),c=new Ot(new qt(2.6,40,2.6),l);c.position.y=20,a.add(c);const h=new Ot(new qt(1.3,44,1.3),new _e({color:16776160,transparent:!0,opacity:.95,fog:!1}));h.position.y=22,a.add(h);const f=new _e({color:16771194,fog:!1}),m=new Ot(new qt(3.4,3.4,3.4),f);m.position.y=42,m.rotation.set(Math.PI/4,0,Math.PI/4),a.add(m);const p=new Ir(16771194,3.5,40);p.position.y=4,a.add(p),a.position.set(sr,0,0),a.visible=!1,t.add(a),this.lightBeam=a}enter(t,e=!1){return this.build(),this.revisit=e,this.phase="walk",this.sink=0,this.struggle=0,this.pliable&&(this.scene.remove(this.pliable.root),this.pliable=null),this.pliableStage="follow",this.christian.root.position.set(-24,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),e?(this.help.root.visible=!0,this.help.root.position.set(18.4,0,2.2),this.help.root.rotation.y=-Math.PI/2,this.help.armR.rotation.x=0,this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("🌫 The old mire — cross east toward the light, or turn back west to the road"),{christian:this.christian,pliable:null}):(this.lightBeam&&(this.lightBeam.visible=!1),t&&(this.pliable=Ne({species:"rabbit",outfit:"shirt",outfitColor:16766629,scale:.95}),this.pliable.root.position.set(-26,0,-1.4),this.scene.add(this.pliable.root),this.cb.playScript([{speaker:"Pliable",text:"So tell me MORE about this Celestial City! Do the crowns come in rabbit sizes? Is there clover?"},{speaker:"Christian",text:"Ha! The book says there is no night there, and no tears… Careful, friend — the ground past those reeds looks soft."},{speaker:"Pliable",text:"Soft, schmoft! With GLORY ahead, who has time to look down? Hop hop — race you to the far side!"}])),this.cb.setObjective("🌫 Cross the marsh to the east"),{christian:this.christian,pliable:this.pliable})}spawnSplash(t,e){const n=this.splashes.find(s=>s.life>=1);n&&(n.life=0,n.vx=(Math.random()-.5)*1.2,n.vz=(Math.random()-.5)*1.2,n.mesh.position.set(t,.2,e),n.mesh.visible=!0)}moveFactor(){const t=this.christian.root.position;return this.phase==="fallingIn"||this.phase==="stuck"||this.phase==="rescue"||this.phase==="epilogue"?0:this.inBog(t.x,t.z)?this.nearStep(t.x,t.z)?.72:.34:1}afterMove(t){const e=this.christian.root.position,n=this.revisit||this.phase==="rescue"||this.phase==="epilogue"||this.phase==="freeroam"||this.phase==="done";if(e.x=re.clamp(e.x,-28,n?sr+4:15.6),e.z=re.clamp(e.z,-16,16),this.revisit){(e.x>sr-2||e.x<-27)&&this.cb.onExit(),t&&this.inBog(e.x,e.z)&&(this.splashTimer-=.016,this.splashTimer<=0&&(this.splashTimer=.18,this.spawnSplash(e.x,e.z)));return}if(this.phase==="freeroam"&&e.x>sr-3&&(this.phase="done",this.cb.onComplete()),this.phase==="walk"&&this.inBog(e.x+1.2,e.z)){this.phase="fallingIn",this.cb.splashSound();for(let r=0;r<6;r++)this.spawnSplash(e.x+Math.random(),e.z+(Math.random()-.5));if(this.pliable){this.pliable.root.position.set(e.x+1.9,-.35,e.z-1.2),this.pliable.root.rotation.y=Math.PI/2;for(let r=0;r<4;r++)this.spawnSplash(e.x+1.9+Math.random(),e.z-1.2+(Math.random()-.5))}const s=this.pliable?[{speaker:"Christian",text:"Wh—whoa! The ground — it is swallowing us! Hold fast, Pliable!"},{speaker:"Pliable",text:"GLUB—! Mud! In my EARS! In my WHISKERS! Christian, I am DISSOLVING!"},{speaker:"Pliable",text:"Is THIS the glorious happiness you spoke of?! Golden streets, you said! CROWNS, you said!"},{speaker:"Christian",text:"Courage, friend! If we press on together, the far bank cannot be—"},{speaker:"Pliable",text:"FORWARD?! Into MORE of it?! Not for every crown in every city! Out of my way!"}]:[{speaker:"Christian",text:"Wh—whoa! The ground… it is swallowing me! This must be the mire the villagers whispered of…"}];this.cb.playScript(s,()=>{this.pliable?(this.pliableStage="clamber",this.cb.setObjective("😨 Pliable flounders back toward the bank nearest home…")):(this.phase="crossing",this.cb.setObjective("🪨 Keep moving or the mire pulls you under — rest on the solid Steps!"))})}this.phase==="crossing"&&e.x>15.2&&(this.phase="stuck",this.cb.playScript([{speaker:"Christian",text:"*pant* … The bank is right there — but I cannot climb it. This burden on my back drags me down and down…"},{speaker:"Christian",text:"Is this how the journey ends? Stuck in the mire, within sight of the way out…?"}],()=>{this.phase="rescue",this.rescueT=0,this.help.root.visible=!0,this.cb.setObjective("🤝 Someone is coming…")})),t&&this.phase==="crossing"&&this.inBog(e.x,e.z)&&(this.splashTimer-=.016,this.splashTimer<=0&&(this.splashTimer=.18,this.spawnSplash(e.x,e.z)))}update(t,e,n){if(!this.built)return;const s=this.christian.root.position;let r=0;const o=this.inBog(s.x,s.z),a=this.nearStep(s.x,s.z);if(o&&this.phase!=="done"&&(r=a?.16:.5,this.phase==="stuck"&&(r=.62)),this.phase==="crossing"&&!this.revisit&&o&&!a?this.struggle=n?Math.max(0,this.struggle-t*.6):Math.min(.85,this.struggle+t*.32):this.struggle=Math.max(0,this.struggle-t*1.6),r+=this.struggle,(this.phase==="rescue"||this.phase==="epilogue")&&(r=this.rescueT>1?0:.62),this.sink+=(r-this.sink)*Math.min(t*3,1),this.christian.root.position.y=-this.sink,this.phase==="crossing"&&!this.revisit&&this.sink>1.05&&(this.struggle=0,this.sink=.2,this.christian.root.position.set(-8.5,0,re.clamp(s.z,-6,6)*.4),this.christian.root.rotation.y=Math.PI/2,this.cb.splashSound(),this.cb.playScript([{speaker:"Christian",text:"*GLUB—!* The mire closes over his ears. Sputtering mud, he claws his way back to the western bank."},{speaker:"Christian",text:"It pulls hardest when I stand still… Keep moving, and catch your breath on the solid Steps!"}])),se(this.christian,e,n&&this.phase!=="stuck"&&this.phase!=="rescue"&&this.phase!=="epilogue"),this.pliable){const l=this.pliable.root.position;if(this.pliableStage==="clamber")l.x-=t*3,l.y=this.inBog(l.x,l.z)?-.42+Math.sin(e*11)*.06:0,this.pliable.root.rotation.y=-Math.PI/2,se(this.pliable,e*1.7,!0),this.inBog(l.x,l.z)&&Math.random()<t*7&&this.spawnSplash(l.x,l.z),l.x<-9.5&&(this.pliableStage="farewell",l.y=0,this.cb.playScript([{speaker:"Pliable",text:"*scrambles out, dripping* Blegh! Pfah! Mud in my ears, mud in my whiskers, mud in places a gentle-rabbit shan't MENTION!"},{speaker:"Pliable",text:"If this bog is the FIRST step of your glorious journey, Christian, you may keep all the rest of it!"},{speaker:"Christian",text:"Pliable, wait! The crowns, the city — it is all still true! One mire does not un-make it!"},{speaker:"Pliable",text:"Then you may have my share of the crowns AND my share of the mud. I am going HOME. Farewell — and good luck to your poor back!"},{speaker:"Christian",text:"…And there he goes, hopping for home. *sigh* Then I cross alone. There must be solid footing somewhere beneath this mire…"}],()=>{this.pliableStage="flee",this.phase="crossing",this.cb.setObjective("🪨 Keep moving or the mire pulls you under — rest on the solid Steps!")}));else if(this.pliableStage==="farewell")l.y=Math.abs(Math.sin(e*6))*.16,this.pliable.root.rotation.y=Math.PI/2,se(this.pliable,e*2,!1);else if(this.pliableStage==="flee")l.x-=t*9,l.y=0,this.pliable.root.rotation.y=-Math.PI/2,se(this.pliable,e*1.5,!0),l.x<-30&&(this.scene.remove(this.pliable.root),this.pliable=null);else if(this.phase==="walk"){const c=s.x-l.x,h=s.z-l.z,f=Math.hypot(c,h);f>2.1?(l.x+=c/f*t*6.4,l.z+=h/f*t*6.4,this.pliable.root.rotation.y=Math.atan2(c,h),se(this.pliable,e+.4,!0)):se(this.pliable,e+.4,!1)}else this.pliable.root.position.y=-.35,se(this.pliable,e+.4,!1)}if(this.phase==="rescue"){this.rescueT+=t;const l=this.help.root.position;this.rescueT<=1.6?(l.x=re.lerp(24,17.6,Math.min(this.rescueT/1.6,1)),this.help.root.rotation.y=-Math.PI/2,se(this.help,e,!0)):this.rescueT<1.7?(se(this.help,e,!1),this.help.armR.rotation.x=-1.2):(this.phase="epilogue",this.cb.playScript([{speaker:"???",text:"Ho there, friend in the mire! What do you there?"},{speaker:"Christian",text:"I fell in as I fled the City of Destruction — and this burden sinks me. I cannot reach the bank!"},{speaker:"Help",text:"I am called Help. But tell me — why did you not look for the Steps? Good solid stones lie through the very midst of this slough."},{speaker:"Christian",text:"Fear chased me in so fast, I never thought to look down…"},{speaker:"Help",text:"So it goes with every pilgrim. Here — give me your paw!"},{speaker:"Help",text:"*HEAVE!*"}],()=>{this.rescueT=2,this.christian.root.position.set(16.5,0,-.5),this.christian.root.rotation.y=Math.PI/2,this.help.armR.rotation.x=0,this.sink=0,this.cb.splashSound(),this.cb.playScript([{speaker:"Christian",text:"*gasp* … Solid ground. Thank you, Help. I had nearly given up hope."},{speaker:"Help",text:"This is the Slough of Despond, friend. When a pilgrim first wakes to how lost he is, all his fears and doubts and discouragements come running — and they settle here, in this low place."},{speaker:"Help",text:"The King's labourers have worked this patch these sixteen hundred years, yet it swallows every cartload of good ground. It cannot be mended — only crossed, by the Steps."},{speaker:"Christian",text:"And Pliable… he struggled out on the side nearest home."},{speaker:"Help",text:"Aye. Many turn back at the first mire. But you came through, burden and all. Go on, Christian — the true Gate is not far now."}],()=>{this.phase="freeroam",this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("✨ Follow the light out of the Slough")})}))}if(this.lightBeam&&this.lightBeam.visible){const l=1+Math.sin(e*2.4)*.12;this.lightBeam.scale.set(l,1,l)}for(let l=0;l<this.wisps.length;l++){const c=this.wisps[l];c.position.x+=t*.3,c.position.x>30&&(c.position.x=-25),c.material.opacity=.25+.12*Math.sin(e*.6+l)}for(const l of this.bubbles){const c=(e*.5+l.phase)%2;l.mesh.visible=c<1,l.mesh.position.y=.2+c*.25,l.mesh.scale.setScalar(.5+c*.9)}for(const l of this.splashes)l.life>=1||(l.life=Math.min(1,l.life+t*2.4),l.mesh.position.x+=l.vx*t,l.mesh.position.z+=l.vz*t,l.mesh.position.y+=t*(.8-l.life),l.m.opacity=.75*(1-l.life),l.life>=1&&(l.mesh.visible=!1))}}const Ol=-7,U0=6.5;class N0{constructor(t){st(this,"scene",new Ts);st(this,"phase","walk");st(this,"cb");st(this,"christian");st(this,"wiseman");st(this,"evangelist");st(this,"revisit",!1);st(this,"built",!1);st(this,"mountain",null);st(this,"fireSeams",[]);st(this,"fireLight",null);st(this,"sparks",[]);st(this,"quake",0);st(this,"rumbleTimer",0);st(this,"evangelistT",0);st(this,"wwLeaving",!1);this.cb=t,this.christian=Ne({species:"bear",fur:O.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.wiseman=Ne({species:"bear",fur:O.bearCocoa,outfit:"shirt",outfitColor:13351152,scale:1.1}),this.wiseman.head.add(y(.8,.1,.8,4867136,0,.88,0)),this.wiseman.head.add(y(.55,.55,.55,4867136,0,1.2,0)),this.wiseman.head.add(y(.58,.12,.58,9067098,0,1,0)),this.evangelist=Ne({species:"bear",fur:11049612,outfit:"robe",outfitColor:O.robeWhite,scale:1.15})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Xt(13950948),t.fog=new gi(13950948,34,90),t.add(new As(14740719,11519140,.85));const e=new Cs(16116952,1.15);e.position.set(-24,38,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-45,e.shadow.camera.right=45,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,t.add(e);const n=new Ot(new qt(140,1,90),hn(10273934));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let f=0;f<60;f++){const m=-45+Math.random()*90,p=-35+Math.random()*70,g=m>4,v=y(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,g?Math.random()>.5?11778442:10923396:Math.random()>.5?9222784:11195548,m,.05,p);v.castShadow=!1,t.add(v)}for(let f=0;f<22;f++){const m=-30+f*2.6,p=y(2.8,.12,3.4,15260088,m,.06,Math.sin(f*.4)*.8);p.castShadow=!1,t.add(p)}for(const[f,m,p]of[[-24,-8,!0],[-19,9,!1],[-13,-10,!1],[-8,8,!0],[-2,-9,!1]]){const g=new wt;g.add(y(.5,1.6,.5,O.trunk,0,.8,0)),g.add(y(1.9,1.3,1.9,p?O.leafPink:O.leaf,0,2.2,0)),g.add(y(1.2,.9,1.2,p?O.leafPink:O.leaf,0,3.1,0)),g.position.set(f,0,m),t.add(g)}for(const[f,m]of[[8,6],[11,-7],[16,8],[19,-6],[9,-10]])t.add(y(1.2+Math.random(),.8,1.1,10132132,f,.4,m)),t.add(y(.7,.5,.7,9276822,f+.8,.25,m+.5));const s=new wt,r=(f,m,p,g,v,u,d)=>s.add(y(f,m,p,g,v,u,d));r(16,4.5,10,9276822,0,2.25,-6),r(13,3.5,8,8224136,.5,6.2,-5.5),r(10,3,7,9276822,0,9.2,-5),r(6.5,2.6,5,7303034,.5,11.8,-4.5),r(3.4,2,3,8224136,0,13.6,-4),r(11,2.6,6,8224136,.5,8,-.5),r(8,2.2,5.5,7303034,1,6,1.6),r(5.5,1.8,4,6447726,1.2,4.6,3.2),r(2.2,1.2,1.8,10132132,-5.5,4.9,-2),r(1.8,1,1.4,10132132,6,5.2,-1.5);const o=()=>new _e({color:16747069,transparent:!0,opacity:.9});for(const[f,m,p,g,v]of[[-2.5,3,4.9,.7,1.6],[1.8,2.2,5.25,.5,1.1],[3.4,5.2,3.7,.6,1.4],[-1,6.8,2.6,.8,1.2]]){const u=new Ot(new qt(g,v,.14),o());u.position.set(f,m,p),s.add(u),this.fireSeams.push(u)}this.fireLight=new Ir(16742973,1.4,26),this.fireLight.position.set(1,5,4.5),s.add(this.fireLight),s.position.set(14,0,-2),t.add(s),this.mountain=s;for(let f=0;f<12;f++){const m=new _e({color:16757596,transparent:!0,opacity:0}),p=new Ot(new qt(.16,.16,.16),m);p.visible=!1,t.add(p),this.sparks.push({mesh:p,m,life:1,vx:0,vz:0})}const a=new wt;a.add(y(14,1.2,10,11458976,0,.6,0));const l=(f,m,p)=>{a.add(y(2.2,1.6,1.9,16447212,f,2,m)),a.add(y(2.5,.7,2.2,p,f,3.15,m)),a.add(y(.4,1,.12,O.woodDark,f,1.7,m+1))};l(-3.5,.5,10336472),l(0,1.2,1211e4),l(3.5,.5,10336472);for(let f=0;f<6;f++)a.add(y(1.4,.5,.5,8826237,-5+f*2.1,1.45,3.2));a.position.set(30,0,-4),t.add(a);const c=Ne({species:"bear",fur:9405816,outfit:"robe",outfitColor:10336472,scale:1.05});c.root.position.set(26.5,1.2,-.5),c.root.rotation.y=-Math.PI/2,t.add(c.root);const h=Ne({species:"bear",fur:O.bearHoney,outfit:"shirt",outfitColor:16447212,scale:.7});h.root.position.set(27.5,1.2,1),h.root.rotation.y=-Math.PI/2,t.add(h.root),this.wiseman.root.position.set(Ol,0,-2.4),this.wiseman.root.rotation.y=-Math.PI/2,t.add(this.wiseman.root),this.evangelist.root.position.set(-20,0,-3),this.evangelist.root.visible=!1,t.add(this.evangelist.root)}enter(t){return this.build(),this.revisit=t,this.quake=0,this.wwLeaving=!1,this.christian.root.position.set(t?-24:-27,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),t?(this.phase="done",this.wiseman.root.visible=!1,this.evangelist.root.visible=!1,this.cb.setObjective("⛰ Mount Sinai still smoulders — the west road leads back")):(this.phase="walk",this.wiseman.root.visible=!0,this.evangelist.root.visible=!1,this.cb.setObjective("🎩 A well-dressed gentleman waits along the pleasant path…")),{christian:this.christian}}moveFactor(){return this.phase==="quaking"||this.phase==="evangelist"||this.phase==="rebuke"?0:1}afterMove(){const t=this.christian.root.position;t.z=re.clamp(t.z,-14,14);const e=this.phase==="return"?8.5:this.revisit?9.5:20;if(t.x=re.clamp(t.x,-28,e),this.revisit){t.x<-26.5&&this.cb.onExit();return}if(this.phase==="walk"&&t.x>Ol-3){this.phase="diverted",this.cb.playScript([{speaker:"Worldly Wiseman",text:"Ho there! Good day, good day! Christian of the City of Destruction, unless I miss my guess — the bear with the famous burden!"},{speaker:"Christian",text:"Famous or not, sir, it is heavy. I am bound for the Wicket Gate, where I am told I shall be rid of it."},{speaker:"Worldly Wiseman",text:"The Wicket Gate! Dear me. Mire, mountains, lions and worse lie on THAT road. You have tasted the Slough already, have you not?"},{speaker:"Christian",text:"…I am still drying out, if I am honest."},{speaker:"Worldly Wiseman",text:"Then hear a practical bear! In yonder village of MORALITY lives my good friend Mr. Legality — a master at easing burdens exactly like yours. And if he is busy, his fine son Civility will see to you."},{speaker:"Worldly Wiseman",text:"A short, SAFE stroll — no mire, no nonsense. You could take a house there, send for your wife and cubs, and live respectably ever after!"},{speaker:"Christian",text:"No mire… a house for my family… Sir, that sounds very sensible indeed. Which way did you say?"},{speaker:"Worldly Wiseman",text:"Straight on, past that tall hill. First door on the left! Do give Mr. Legality my regards."}],()=>{this.cb.setObjective("🏘 Follow the pleasant path east, toward the village of Morality")});return}if(this.phase==="diverted"&&t.x>U0){this.phase="quaking",this.quake=1,this.cb.rumbleSound(),this.cb.playScript([{speaker:"Christian",text:"The hill… it HANGS over the very road! And — fire! It flashes fire from its sides!"},{speaker:"Christian",text:"It groans like thunder above me. One step more and it will surely fall… and this burden feels heavier than it has ever been. What have I done?"}],()=>{this.phase="evangelist",this.evangelistT=0,this.evangelist.root.visible=!0,this.evangelist.root.position.set(t.x-14,0,-2.5),this.cb.setObjective("👣 Someone hurries up the road behind you…")});return}this.phase==="return"&&t.x<-26.5&&(this.phase="done",this.cb.onComplete())}spawnSpark(){if(!this.mountain)return;const t=this.sparks.find(e=>e.life>=1);t&&(t.life=0,t.vx=(Math.random()-.5)*1.2,t.vz=(Math.random()-.5)*1.2,t.mesh.position.set(this.mountain.position.x+(Math.random()-.5)*8,5.5+Math.random()*3,this.mountain.position.z+3+Math.random()*2.5),t.mesh.visible=!0)}update(t,e,n){if(!this.built)return;if(se(this.christian,e,n&&this.moveFactor()>0),this.wiseman.root.visible&&(this.wwLeaving?(this.wiseman.root.position.x+=t*6,this.wiseman.root.rotation.y=Math.PI/2,se(this.wiseman,e,!0),this.wiseman.root.position.x>24&&(this.wiseman.root.visible=!1)):se(this.wiseman,e+1.3,!1)),this.phase==="evangelist"){this.evangelistT+=t;const o=this.evangelist.root.position,a=this.christian.root.position,l=a.x-2.6-o.x,c=a.z-.6-o.z,h=Math.hypot(l,c);h>.3?(o.x+=l/h*t*6.5,o.z+=c/h*t*6.5,this.evangelist.root.rotation.y=Math.atan2(l,c),se(this.evangelist,e,!0)):this.evangelistT>.6&&(this.phase="rebuke",this.christian.root.rotation.y=-Math.PI/2,this.cb.playScript([{speaker:"Evangelist",text:"Christian. What are you doing HERE?"},{speaker:"Christian",text:"E-Evangelist! A… a gentleman told me of a quicker way. A Mr. Legality, in the village of Morality, who could lift my burden without the mire and the mountains…"},{speaker:"Evangelist",text:"Listen carefully, dear bear. That gentleman is Mr. WORLDLY WISEMAN, and he loves only the doctrine of this world. He turns every pilgrim he can from the true road."},{speaker:"Evangelist",text:"Mr. Legality cannot loosen one strap of your burden — no creature was ever freed at his door. And Civility, for all his polish, is a smiling fraud like his father."},{speaker:"Evangelist",text:"And THIS mountain is the reason. It is Sinai — the Law itself. It thunders, it flashes, it shows your burden for what it is… but it cannot LIFT it. Trust in your own good deeds, and it will hang over you all your days."},{speaker:"Christian",text:"Then I have been a fool twice over — once into the mire, and once onto this path. Is there any hope left for me?"},{speaker:"Evangelist",text:"There is. The way you left is exactly where you left it. Return to the true road, Christian — on to the Wicket Gate — and turn aside from it no more."},{speaker:"Christian",text:"I will return at once. Thank you, Evangelist… again."}],()=>{this.phase="return",this.wwLeaving=!0,this.cb.setObjective("↩ Return west, back to the true way")}))}else this.evangelist.root.visible&&se(this.evangelist,e+.8,!1);const s=this.phase;this.quake=Math.max(0,this.quake-t*.25);const r=s==="quaking"||s==="evangelist"?1:.35;if(this.mountain){const o=this.quake*.09;this.mountain.position.x=14+(Math.random()-.5)*o,this.mountain.position.z=-2+(Math.random()-.5)*o}for(let o=0;o<this.fireSeams.length;o++){const a=.35+.65*Math.abs(Math.sin(e*(2.6+o*.7)+o*2));this.fireSeams[o].material.opacity=a*r+.15}if(this.fireLight&&(this.fireLight.intensity=(.8+Math.abs(Math.sin(e*3.1))*1.6)*r),this.rumbleTimer-=t,this.rumbleTimer<=0){this.rumbleTimer=r>=1?1.6+Math.random():6+Math.random()*5,this.cb.rumbleSound(),this.quake=Math.max(this.quake,r>=1?1:.4);for(let o=0;o<(r>=1?5:2);o++)this.spawnSpark()}for(const o of this.sparks)o.life>=1||(o.life=Math.min(1,o.life+t*.9),o.mesh.position.x+=o.vx*t,o.mesh.position.z+=o.vz*t,o.mesh.position.y-=t*3.2,o.m.opacity=.9*(1-o.life),(o.mesh.position.y<.1||o.life>=1)&&(o.life=1,o.mesh.visible=!1))}}const Se=10,xa=new P(17,0,-15),or=50;class F0{constructor(t){st(this,"scene",new Ts);st(this,"phase","approach");st(this,"cb");st(this,"christian");st(this,"goodwill");st(this,"revisit",!1);st(this,"built",!1);st(this,"mutterIndex",0);st(this,"doorL",null);st(this,"doorR",null);st(this,"doorOpen",!1);st(this,"castleGlows",[]);st(this,"arrows",[]);st(this,"volleyT",0);st(this,"arrowTimer",0);st(this,"lightBeam",null);this.cb=t,this.christian=Ne({species:"bear",fur:O.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.goodwill=Ne({species:"lion",outfit:"robe",outfitColor:O.robeWhite,scale:1.3})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Xt(13163752),t.fog=new gi(13163752,36,95),t.add(new As(14872306,11716774,.9));const e=new Cs(16248536,1.2);e.position.set(-22,38,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-70,e.shadow.camera.right=70,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e);const n=new Ot(new qt(180,1,90),hn(10340243));n.position.set(-5,-.5,0),n.receiveShadow=!0,t.add(n);for(let u=0;u<70;u++){const d=-70+Math.random()*130,b=-35+Math.random()*70,w=y(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?9222784:11195548,d,.05,b);w.castShadow=!1,t.add(w)}for(let u=0;u<30;u++){const d=-62+u*2.5,b=y(2.5,.12,3.2,O.path,d,.06,0);b.castShadow=!1,t.add(b)}for(const u of[-52,-36,-20,-4]){const d=new wt;d.add(y(.16,2.2,.16,O.woodDark,0,1.1,0));const b=y(.34,.34,.34,O.light,0,2.35,0);b.material=new mi({color:O.light,emissive:16773296,emissiveIntensity:.55}),d.add(b),d.position.set(u,0,2.6),t.add(d)}for(const[u,d,b]of[[-56,-7,!1],[-48,8,!0],[-38,-9,!1],[-27,7,!1],[-16,-8,!0],[-8,9,!1]]){const w=new wt;w.add(y(.5,1.6,.5,O.trunk,0,.8,0)),w.add(y(1.9,1.3,1.9,b?O.leafPink:O.leaf,0,2.2,0)),w.add(y(1.2,.9,1.2,b?O.leafPink:O.leaf,0,3.1,0)),w.position.set(u,0,d),t.add(w)}const s=15920351,r=14472386;for(const u of[-1,1]){for(let d=0;d<7;d++){const b=u*(3.4+d*4.4);t.add(y(1.3,3,4.4,d%2===0?s:15327954,Se,1.5,b)),t.add(y(1.4,.28,4.6,r,Se,3.1,b))}t.add(y(1.7,4.2,1.7,s,Se,2.1,u*2.2)),t.add(y(2,.4,2,r,Se,4.3,u*2.2)),t.add(y(1.2,.6,1.2,O.roofPink,Se,4.7,u*2.2))}t.add(y(.9,.9,4.2,s,Se,4.4,0)),t.add(y(1,.3,4.6,r,Se,5,0));const o=u=>{const d=new wt;d.position.set(Se,0,1.35*u);const b=y(.3,3.2,1.35,O.woodDark,0,1.6,-.675*u);return d.add(b),d.add(y(.34,.14,1.35,9072466,0,.9,-.675*u)),d.add(y(.34,.14,1.35,9072466,0,2.3,-.675*u)),this.scene.add(d),d};this.doorL=o(-1),this.doorR=o(1);const a=new wt;a.add(y(.14,1.5,.14,O.woodDark,0,.75,0)),a.add(y(1.5,.7,.1,O.wallCream,0,1.4,0)),a.position.set(Se-1.6,0,3.6),a.rotation.y=-.4,t.add(a);const l=new wt,c=5919844,h=4801618;l.add(y(7,3,5.5,7235704,0,1.5,0)),l.add(y(5.5,3.4,4.2,c,0,4.4,0)),l.add(y(1.6,5.4,1.6,h,-2.6,4.8,-1.4)),l.add(y(1.6,6.2,1.6,h,2.4,5.2,1.2)),l.add(y(1.3,4.8,1.3,c,2.6,4.5,-1.8));for(let u=0;u<5;u++)l.add(y(.7,.7,.7,h,-2+u*1.05,6.4,0));l.add(y(.1,2.4,.1,h,0,8,0)),l.add(y(.9,.6,.06,9058890,.5,8.6,0));for(const[u,d,b]of[[-2.6,5.6,-.5],[2.4,6.4,1.2],[0,5,2.15],[-1.4,4.2,2.15]]){const w=new Ot(new qt(.5,.7,.12),new _e({color:16735309,transparent:!0,opacity:.85}));w.position.set(u,d,b),l.add(w),this.castleGlows.push(w)}l.position.copy(xa),t.add(l);for(const[u,d]of[[12,-9],[21,-10],[14,-20],[22,-18]])t.add(y(.3,1.3,.3,9274488,u,.65,d)),t.add(y(.9,.24,.24,9274488,u+.3,1.3,d));for(let u=0;u<10;u++){const d=new wt;d.add(y(.09,.09,1.1,4867136,0,0,0)),d.add(y(.16,.16,.22,9058890,0,0,.6)),d.add(y(.2,.05,.3,14209996,0,0,-.55)),d.visible=!1,t.add(d),this.arrows.push({g:d,t:1,active:!1,from:new P,to:new P})}for(let u=0;u<16;u++){const d=Se+2+u*2.5,b=y(2.5,.12,2.6,15655876,d,.06,0);b.castShadow=!1,t.add(b),u%1===0&&(t.add(y(2.5,.9,.8,8367732,d,.45,2.1)),t.add(y(2.5,.9,.8,8367732,d,.45,-2.1))),u%3===1&&(t.add(y(.5,.4,.5,O.grassDark,d,1.05,2.1)),t.add(y(.5,.4,.5,O.grassDark,d,1.05,-2.1)))}for(let u=0;u<14;u++){const d=y(.18,.18,.18,[O.flowerYellow,O.flowerPink,O.flowerBlue][u%3],Se+3+Math.random()*34,.98,Math.random()>.5?2.1:-2.1);d.castShadow=!1,t.add(d)}const f=new wt,m=new Ot(new qt(2.6,40,2.6),new _e({color:16767306,transparent:!0,opacity:.8,fog:!1}));m.position.y=20,f.add(m);const p=new Ot(new qt(1.3,44,1.3),new _e({color:16776160,transparent:!0,opacity:.95,fog:!1}));p.position.y=22,f.add(p);const g=new Ot(new qt(3.4,3.4,3.4),new _e({color:16771194,fog:!1}));g.position.y=42,g.rotation.set(Math.PI/4,0,Math.PI/4),f.add(g);const v=new Ir(16771194,3.5,40);v.position.y=4,f.add(v),f.position.set(or+2,0,0),f.visible=!1,t.add(f),this.lightBeam=f,this.goodwill.root.position.set(Se+2.2,0,-1.6),this.goodwill.root.rotation.y=-Math.PI/2,this.goodwill.root.visible=!1,t.add(this.goodwill.root)}enter(t){this.build(),this.revisit=t,this.mutterIndex=0,this.volleyT=0;for(const e of this.arrows)e.active=!1,e.g.visible=!1;return this.christian.root.position.set(-60,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),t?(this.phase="done",this.doorOpen=!0,this.goodwill.root.visible=!0,this.goodwill.root.position.set(Se+2.2,0,-1.6),this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("⛩ The Gate stands open — the narrow way runs east")):(this.phase="approach",this.doorOpen=!1,this.goodwill.root.visible=!1,this.lightBeam&&(this.lightBeam.visible=!1),this.cb.setObjective("🚶 A long, straight road — the Wicket Gate lies far to the east")),{christian:this.christian}}moveFactor(){return this.phase==="knock"||this.phase==="volley"?0:1}afterMove(){const t=this.christian.root.position;if(t.z=re.clamp(t.z,-14,14),t.x>Se-1.5&&(this.phase==="approach"||this.phase==="knock")&&(t.x=Math.min(t.x,Se-1.5)),t.x>Se+1&&(t.z=re.clamp(t.z,-1.6,1.6)),t.x=re.clamp(t.x,-62,or+3),this.revisit){(t.x<-58||t.x>or-2)&&this.cb.onExit();return}if(this.phase==="approach"){const e=[[-45,[{speaker:"Christian",text:"*mutter* …Left my home. Lost my friend in a bog. Nearly crushed beneath a burning mountain. And still this burden sits like a millstone…"},{speaker:"Christian",text:"Is this truly the way? There is no one even to ask."}]],[-30,[{speaker:"Christian",text:"…What a fool I was, to listen to Worldly Wiseman. Smooth words, smooth road — and it led me straight under Sinai."},{speaker:"Christian",text:"Evangelist forgave me. But will the Gate? What if they ask where I have been… and shut it in my face?"}]],[-15,[{speaker:"Christian",text:"So far… and so straight. Not one turning. As if the road itself were telling me: no more byways, old bear."},{speaker:"Christian",text:'*sigh* Help said it. Evangelist said it. "Knock, and it shall be opened." Keep walking, Christian. Just keep walking.'}]]];if(this.mutterIndex<e.length&&t.x>e[this.mutterIndex][0]){const n=e[this.mutterIndex][1];this.mutterIndex++,this.cb.playScript(n);return}if(t.x>Se-3.2&&Math.abs(t.z)<4){this.phase="knock",this.christian.root.rotation.y=Math.PI/2,this.cb.playScript([{speaker:"",text:'The gate is shut. Above it, an old inscription reads: "Knock, and it shall be opened unto you."'},{speaker:"Christian",text:"*knock… knock…* May I enter here? Will he within open to sorry me, though I have been an undeserving rebel?"},{speaker:"???",text:"(a deep, warm voice, like far-off thunder that means no harm) Who knocks?"},{speaker:"Christian",text:"A poor burdened sinner, come from the City of Destruction. I am bound for the Celestial City — they told me the way lies through this Gate."},{speaker:"Goodwill",text:"Then willingly do I open. We turn none away who knock — none."}],()=>{this.doorOpen=!0,this.goodwill.root.visible=!0,this.cb.blipSound(),this.cb.playScript([{speaker:"",text:"The doors swing open — and there stands a LION, golden-maned and robed in white, filling the gateway like sunrise."},{speaker:"Goodwill",text:"I am Goodwill, keeper of this Gate. But stand not in the open, friend—"},{speaker:"Goodwill",text:"Yonder castle belongs to BEELZEBUB, and his archers shoot at every pilgrim who dares my doorstep. QUICKLY — give me your paw!"}],()=>{this.phase="volley",this.volleyT=0,this.arrowTimer=0,this.cb.rumbleSound(),this.cb.setObjective("🏹 Arrows from the dark castle…!")})});return}}}fireArrow(){const t=this.arrows.find(n=>!n.active);if(!t)return;const e=this.christian.root.position;t.active=!0,t.t=0,t.from.set(xa.x-1,7.5,xa.z+2),t.to.set(e.x-2.5+Math.random()*5,.1,e.z+1.5+Math.random()*3.5),t.g.visible=!0}update(t,e,n){if(!this.built)return;se(this.christian,e,n&&this.moveFactor()>0),this.goodwill.root.visible&&se(this.goodwill,e+.7,!1);const s=this.doorOpen?1.7:0;this.doorL&&this.doorR&&(this.doorL.rotation.y+=(-s-this.doorL.rotation.y)*.06,this.doorR.rotation.y+=(s-this.doorR.rotation.y)*.06);for(let r=0;r<this.castleGlows.length;r++)this.castleGlows[r].material.opacity=.5+.4*Math.abs(Math.sin(e*1.7+r*1.9));this.phase==="volley"&&(this.volleyT+=t,this.arrowTimer-=t,this.arrowTimer<=0&&this.volleyT<2&&(this.arrowTimer=.22,this.fireArrow()),this.volleyT>2.4&&(this.phase="inside",this.christian.root.position.set(Se+2.4,0,1.3),this.christian.root.rotation.y=Math.PI,this.goodwill.root.position.set(Se+3.6,0,-1.7),this.goodwill.root.rotation.y=0,this.cb.setObjective("⛩ Safe behind the Gate"),this.cb.blipSound(),this.cb.playScript([{speaker:"",text:"A great paw closes over Christian's, and the world blurs — then the Gate booms shut behind them. The arrows thud harmlessly against the far side."},{speaker:"Goodwill",text:"There. Behind this wall no arrow of his has ever reached. Be welcome, Christian — you are safe now."},{speaker:"Christian",text:"*catching his breath* You… you know my name?"},{speaker:"Goodwill",text:"I know every pilgrim who knocks, little bear. I have been expecting you a long while. Now tell me — why do you come alone, and so late?"},{speaker:"Christian",text:"I fell in the Slough of Despond, and my neighbour turned home. Then a smooth-tongued gentleman turned me aside to Mount Sinai, and I was nearly crushed. I am ashamed of it all, sir."},{speaker:"Goodwill",text:"And yet you are HERE — muddy, singed, and standing at my Gate. That is the whole of what matters. This door was hung for the bruised and the muddy, or it was hung for no one."},{speaker:"Christian",text:"Then… may I ask one thing more? This burden on my back. I have carried it so long. Can it be taken off here?"},{speaker:"Goodwill",text:"Not here, dear pilgrim. Be content to bear it a little longer. Ahead lies the place of deliverance — there it will loosen of itself, and fall from your back, and roll away where none shall ever find it."},{speaker:"Goodwill",text:"Look east. That is the King's Highway — straight and narrow, cast up by the King and His Son. Keep to it; turn neither left nor right, and you cannot lose your way."},{speaker:"Christian",text:"Straight and narrow. I will keep to it, Goodwill — I promise. My heart feels lighter already… though my back, I confess, does not."},{speaker:"Goodwill",text:"*a low, warm laugh, like summer thunder* It will, Christian. Sooner than you think. Now go — and grace go with you."}],()=>{this.phase="freeroam",this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light")})));for(const r of this.arrows){if(!r.active)continue;if(r.t+=t*1.4,r.t>=1){r.t>1.8?(r.active=!1,r.g.visible=!1):(r.g.position.set(r.to.x,.35,r.to.z),r.g.rotation.set(1.15,0,0));continue}const o=re.lerp(r.from.x,r.to.x,r.t),a=re.lerp(r.from.z,r.to.z,r.t),l=re.lerp(r.from.y,r.to.y,r.t)+Math.sin(r.t*Math.PI)*4,c=Math.min(r.t+.05,1),h=re.lerp(r.from.x,r.to.x,c),f=re.lerp(r.from.z,r.to.z,c),m=re.lerp(r.from.y,r.to.y,c)+Math.sin(c*Math.PI)*4;r.g.position.set(o,l,a),r.g.lookAt(h,m,f)}if(this.lightBeam&&this.lightBeam.visible){const r=1+Math.sin(e*2.4)*.12;this.lightBeam.scale.set(r,1,r)}this.phase==="freeroam"&&this.christian.root.position.x>or-2&&(this.phase="done",this.cb.onComplete())}}const O0=document.getElementById("app"),sn=new i0({antialias:!0});sn.setPixelRatio(Math.min(window.devicePixelRatio,2));sn.setSize(window.innerWidth,window.innerHeight);sn.shadowMap.enabled=!0;sn.shadowMap.type=Gl;O0.appendChild(sn.domElement);const In=new Ts;In.background=new Xt(O.sky);In.fog=new gi(O.fog,55,130);const ke=new Be(50,window.innerWidth/window.innerHeight,.1,300);In.add(new As(14676223,13232320,.9));const Dn=new Cs(O.sun,1.6);Dn.position.set(-30,45,25);Dn.castShadow=!0;Dn.shadow.mapSize.set(2048,2048);Dn.shadow.camera.left=-60;Dn.shadow.camera.right=60;Dn.shadow.camera.top=60;Dn.shadow.camera.bottom=-60;Dn.shadow.camera.far=150;In.add(Dn);const un=T0(In),Rs=R0(In),ae=Ne({species:"bear",fur:O.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0});ae.root.position.set(-6,0,-4);In.add(ae.root);const Vt={talkedToEvangelist:!1,talkedToFamily:!1,chaseDone:!1,eggsCollected:0,pliableFollowing:!1,pliableLeft:!1,chapterComplete:!1,sloughComplete:!1,moralityDone:!1,wicketDone:!1},Oe=new P0,ee=new I0(window.innerWidth/window.innerHeight);let je="village";const gt={objective:document.getElementById("objective"),prompt:document.getElementById("prompt"),promptWho:document.querySelector("#prompt .who"),promptKey:document.querySelector("#prompt .key"),dialogue:document.getElementById("dialogue"),dialogueName:document.querySelector("#dialogue .name"),dialogueText:document.querySelector("#dialogue .text"),musicBtn:document.getElementById("music-btn"),talkBtn:document.getElementById("talk-btn"),joystick:document.getElementById("joystick"),stick:document.querySelector("#joystick .stick"),titleScreen:document.getElementById("title-screen"),startBtn:document.getElementById("start-btn"),ending:document.getElementById("ending"),restartBtn:document.getElementById("restart-btn")},Vn=window.matchMedia("(pointer: coarse)").matches;Vn&&(document.body.classList.add("touch"),gt.promptKey.style.display="none");let ys=!1;gt.startBtn.addEventListener("click",()=>{ys=!0,Oe.start(),gt.titleScreen.classList.add("hidden"),setTimeout(()=>gt.titleScreen.style.display="none",900)});gt.musicBtn.addEventListener("click",()=>{Oe.start(),gt.musicBtn.textContent=Oe.toggle()?"🎵":"🔇"});gt.restartBtn.addEventListener("click",()=>window.location.reload());let ps=null,Cn=!1,ui=!1;function Dr(i,t,e,n){Cn=!0,document.getElementById("ending-title").textContent=i,document.getElementById("ending-sub").textContent=t,document.getElementById("ending-body").textContent=e,ps=n,gt.ending.style.display="flex",gt.ending.classList.add("hidden"),requestAnimationFrame(()=>requestAnimationFrame(()=>gt.ending.classList.remove("hidden")))}const k0=document.getElementById("continue-btn");k0.addEventListener("click",()=>{Oe.blip(),Cn=!1,gt.ending.classList.add("hidden"),setTimeout(()=>gt.ending.style.display="none",900),Pe=!1,ts=null,Ar=null,gt.dialogue.style.display="none",gt.talkBtn.style.display="none",ps==null||ps(),ps=null});function pn(){je="map",Oe.setStyle("map"),gt.promptKey.style.display="none",mn(Vt.wicketDone?"🗺 The place of deliverance lies ahead — Chapter V, coming soon…":Vt.moralityDone?"🗺 The long road east lies open — on toward the Wicket Gate!":Vt.sloughComplete?"🗺 East to the crossroad — a smooth byway and a barred road":"🗺 The road east — onward to the Slough of Despond")}const Vi=new D0({playScript:qn,setObjective:mn,splashSound:()=>Oe.splash(),onExit:()=>pn(),onComplete:()=>{Vt.sloughComplete=!0,Vt.pliableFollowing&&(Vt.pliableLeft=!0),Dr("🌊 Chapter II Complete","Through the Slough of Despond","Pliable turned back at the first hardship — but Christian, with Help's strong paw, came through the mire, burden and all. The road runs on…",()=>{ee.sloughDone=!0,ee.start([]),ee.progress=ee.sloughT,pn()})}});let br=null;const Wi=new N0({playScript:qn,setObjective:mn,onExit:()=>pn(),rumbleSound:()=>Oe.rumble(),onComplete:()=>{Vt.moralityDone=!0,Dr("⛰ Chapter III Complete","Mr. Worldly Wiseman and Mount Sinai","The smooth byway led only beneath the burning mountain of the Law. Evangelist unmasked the flatterer, and Christian turned back to the true way — the long road east lies open at last…",()=>{ee.moralityDone=!0,ee.road="main",ee.progress=ee.forkT,ee.start([]),pn()})}});let Er=null;function Sc(i){je="morality",Oe.setStyle("sinai"),gt.prompt.style.display="none",gt.talkBtn.style.display="none",Er=Wi.enter(i),le.copy(Er.christian.root.position)}const Xi=new F0({playScript:qn,setObjective:mn,onExit:()=>pn(),rumbleSound:()=>Oe.rumble(),blipSound:()=>Oe.blip(),onComplete:()=>{Vt.wicketDone=!0,Dr("⛩ Chapter IV Complete","Through the Wicket Gate","Goodwill the great lion drew Christian through the Gate, out of the reach of Beelzebub's arrows, and set his feet on the straight and narrow King's Highway. Somewhere ahead lies the place of deliverance, where the burden falls of itself…",()=>{ee.start([]),ee.road="main",ee.progress=ee.beyondT,pn()})}});let Tr=null;function wc(i){je="wicket",Oe.setStyle("gate"),gt.prompt.style.display="none",gt.talkBtn.style.display="none",Tr=Xi.enter(i),le.copy(Tr.christian.root.position)}function bc(i){je="slough",Oe.setStyle("slough"),gt.prompt.style.display="none",gt.talkBtn.style.display="none",br=Vi.enter(!i&&Vt.pliableFollowing&&!Vt.pliableLeft,i),le.copy(br.christian.root.position)}function B0(){je="village",Oe.setStyle("village"),ae.root.position.set(Xe.east-5,0,0),ae.root.rotation.y=-Math.PI/2,le.copy(ae.root.position),gt.prompt.style.display="none",gt.promptKey.style.display=Vn?"none":"inline-block",Vn&&(gt.talkBtn.style.display="none"),mn("🏘 Home for a visit — the shining light in the east leads back to the road")}function mn(i){gt.objective.textContent=i}let Ur=[],Ss=0,Pe=!1,ts=null,Ar=null;function qn(i,t){ts=null,Ur=i,Ss=0,Pe=!0,Ar=t??null,gt.dialogue.style.display="block",gt.prompt.style.display="none",Vn&&(gt.talkBtn.style.display="block"),yo()}function Ec(i){ts=i,Ur=i.getLines(Vt),Ss=0,Pe=!0,gt.dialogue.style.display="block",gt.prompt.style.display="none",gt.talkBtn.style.display="none",yo();const t=ae.root.position.x-i.parts.root.position.x,e=ae.root.position.z-i.parts.root.position.z;i.parts.root.rotation.y=Math.atan2(t,e)}function yo(){const i=Ur[Ss];gt.dialogueName.textContent=i.speaker,gt.dialogueText.textContent=i.text,gt.dialogue.classList.toggle("christian",i.speaker==="Christian"),gt.dialogue.classList.toggle("narration",i.speaker==="")}function Nr(){var n;if(Oe.blip(),Ss++,Ss<Ur.length){yo();return}Pe=!1,gt.dialogue.style.display="none";const i=ts;ts=null;const t=Ar;if(Ar=null,t){t();return}if(!i)return;const e=Vt.talkedToEvangelist;(n=i.onFinish)==null||n.call(i,Vt),!e&&Vt.talkedToEvangelist&&z0()}gt.dialogue.addEventListener("click",Nr);function z0(){un.lightBeam.visible=!0,un.gate.open=!0,mn("✨ Follow the shining light through the Wicket Gate!")}const Dt=new Set;window.addEventListener("keydown",i=>{i.repeat||(Dt.add(i.code),(i.code==="KeyE"||i.code==="Space"||i.code==="Enter"||i.key==="e"||i.key==="E"||i.key===" "||i.key==="Enter")&&(Pe?Nr():je==="map"?Tc():Rc()))});function Tc(){const i=ee.spot();i==="slough"?bc(Vt.sloughComplete):i==="city"?B0():i==="morality"?Sc(Vt.moralityDone):i==="beyond"&&wc(Vt.wicketDone)}window.addEventListener("keyup",i=>Dt.delete(i.code));window.addEventListener("blur",()=>Dt.clear());document.addEventListener("visibilitychange",()=>{document.hidden&&Dt.clear()});window.addEventListener("keydown",i=>{i.code!=="Digit9"&&i.code!=="Digit8"||Pe||Cn||(Object.assign(Vt,{talkedToEvangelist:!0,talkedToFamily:!0,chaseDone:!0,pliableFollowing:!0,chapterComplete:!0,sloughComplete:!0,pliableLeft:!0}),Vt.moralityDone=i.code==="Digit8",ys||(ys=!0,Oe.start(),gt.titleScreen.classList.add("hidden"),setTimeout(()=>gt.titleScreen.style.display="none",400)),ee.sloughDone=!0,ee.moralityDone=Vt.moralityDone,ee.start([]),ee.road="main",ee.progress=Vt.moralityDone?ee.forkT:ee.sloughT,pn())});const ye={active:!1,id:-1,x:0,y:0};gt.joystick.addEventListener("pointerdown",i=>{ye.active=!0,ye.id=i.pointerId,gt.joystick.setPointerCapture(i.pointerId),Cc(i)});gt.joystick.addEventListener("pointermove",i=>{ye.active&&i.pointerId===ye.id&&Cc(i)});const Ac=i=>{i.pointerId===ye.id&&(ye.active=!1,ye.x=0,ye.y=0,gt.stick.style.transform="translate(-50%, -50%)")};gt.joystick.addEventListener("pointerup",Ac);gt.joystick.addEventListener("pointercancel",Ac);function Cc(i){const t=gt.joystick.getBoundingClientRect(),e=t.left+t.width/2,n=t.top+t.height/2;let s=(i.clientX-e)/(t.width/2),r=(i.clientY-n)/(t.height/2);const o=Math.hypot(s,r);o>1&&(s/=o,r/=o),ye.x=s,ye.y=r,gt.stick.style.transform=`translate(calc(-50% + ${s*33}px), calc(-50% + ${r*33}px))`}gt.talkBtn.addEventListener("click",()=>{Pe?Nr():je==="map"?Tc():Rc()});const H0=3.2;let Hn=null,_s=null;function G0(){let i=null,t=H0;for(const e of Rs){const n=e.parts.root.position.distanceTo(ae.root.position);n<t&&(i=e,t=n)}return i}function V0(){let i=null,t=1/0;for(const e of un.interactables){const n=Math.hypot(e.x-ae.root.position.x,e.z-ae.root.position.z);n<e.r&&n<t&&(i=e,t=n)}return i}function Rc(){Pe||(Hn?Ec(Hn):_s&&j0(_s))}const kl={};function W0(i,t){const e=kl[i]??0;return kl[i]=(e+1)%t.length,t[e]}const X0=[[{speaker:"",text:"The village well. He leans over and sees his own tired reflection looking back."}],[{speaker:"",text:"The water is cool and still. For a moment, the weight on his back feels almost bearable."}],[{speaker:"",text:"Someone has tied a faded ribbon to the crossbeam. He wonders what they wished for."}]],q0=[[{speaker:"",text:"He works the handle. Cold water gushes into the trough below."}],[{speaker:"",text:"Splash! A few droplets catch the morning light like tiny stars."}]],Y0=[[{speaker:"Chickens",text:"Bawk! Bawk-bawk!"},{speaker:"Christian",text:"Easy now, ladies. I only came to say good morning."}],[{speaker:"Chickens",text:"*peck peck peck*"}]],K0=[[{speaker:"Cow",text:"Mooooo."},{speaker:"",text:"Old Hamlet's cow, watching him with those big brown eyes again."}],[{speaker:"Cow",text:"Mooo-oo."},{speaker:"Christian",text:"I don't suppose you'd care to carry this burden a while?"}]];function j0(i){if(i.id==="nest"){if(Vt.eggsCollected<3){Vt.eggsCollected++;const n=Vt.eggsCollected;qn([{speaker:"",text:n<3?`He gently takes an egg, still warm. (${n}/3 collected)`:"He takes the last egg — the little basket is full. Time to bring these home to Christiana."}])}else qn([{speaker:"",text:"The nest is empty for now. Perhaps the hens will lay more tomorrow."}]);return}const e={well:X0,pump:q0,chickens:Y0,cow:K0}[i.id];e&&qn(W0(i.id,e))}const bn=7,lr=new P(0,13,13),le=new P;let Ma=!1;const So=[];for(let i=0;i<16;i++){const t=new _e({color:16777215,transparent:!0,opacity:0}),e=new Ot(new qt(.22,.22,.22),t);e.visible=!1,e.castShadow=!1,In.add(e),So.push({mesh:e,mat:t,life:1,vx:0,vz:0})}let ya=0;function $0(i,t){const e=So.find(n=>n.life>=1);e&&(e.life=0,e.vx=(Math.random()-.5)*.8,e.vz=(Math.random()-.5)*.8,e.mesh.position.set(i,.12,t),e.mesh.visible=!0)}function Z0(i){for(const t of So){if(t.life>=1)continue;t.life=Math.min(1,t.life+i*2.2),t.mesh.position.x+=t.vx*i,t.mesh.position.z+=t.vz*i,t.mesh.position.y+=i*.9;const e=.6+t.life*1.6;t.mesh.scale.setScalar(e),t.mat.opacity=.55*(1-t.life),t.life>=1&&(t.mesh.visible=!1)}}function J0(i){for(const o of un.colliders){const a=i.x-o.x,l=i.z-o.z,c=Math.hypot(a,l),h=o.r+.6;c<h&&c>1e-4&&(i.x=o.x+a/c*h,i.z=o.z+l/c*h)}for(const o of Rs){const a=i.x-o.parts.root.position.x,l=i.z-o.parts.root.position.z,c=Math.hypot(a,l);c<1.1&&c>1e-4&&(i.x=o.parts.root.position.x+a/c*1.1,i.z=o.parts.root.position.z+l/c*1.1)}const e=Xe.west+1.4,n=Xe.east-1.2,s=Xe.south-1.4;Math.abs(i.z)<Xe.gateHalfWidth&&i.x>n-2&&un.gate.open?(i.z=re.clamp(i.z,-1.9,Xe.gateHalfWidth),i.x=Math.min(i.x,Xe.east+8)):(i.x=re.clamp(i.x,e,n),i.z=re.clamp(i.z,-s,s))}let mr=!1,Sa=!1;const vs={obstinate:!1,pliable:!1},Q0=[{speaker:"Obstinate",text:"CHRISTIAN! Stop right there, you great woolly fool! Come back at once!"},{speaker:"Christian",text:"I cannot, neighbours. This city will not stand — I go to seek a country that cannot crumble. You have seen the light yonder; come with me!"},{speaker:"Obstinate",text:"What?! Leave our friends, our comforts, our whole city — for a dream out of that book of yours?"},{speaker:"Christian",text:"What I seek is worth more than all we would leave behind. Come and see for yourselves!"},{speaker:"Obstinate",text:"Pah! I'll not be dragged on any fool's errand. Pliable — take his other arm. We are hauling him home."},{speaker:"Pliable",text:"Weeeell… actually, Obstinate… golden crowns? Streets of light? A city that never crumbles? …My paws are tingling."},{speaker:"Pliable",text:"I'm going WITH him! Think of it — glory, adventure, and no more of your grumbling!"},{speaker:"Obstinate",text:"You TOO?! Of all the—! FINE! Go drown in a bog together, the pair of you! I am going home like a SENSIBLE creature. HMPH!"},{speaker:"Pliable",text:"Don't mind him. Lead the way, friend Christian — hop hop!"}];function tg(){ui=!0,mr=!0,vs.obstinate=!1,vs.pliable=!1,ae.root.rotation.y=-Math.PI/2,mn("❗ Someone is shouting after you…")}let Bl=0;function eg(i,t){let e=0,n=0;(Dt.has("KeyW")||Dt.has("ArrowUp"))&&(n-=1),(Dt.has("KeyS")||Dt.has("ArrowDown"))&&(n+=1),(Dt.has("KeyA")||Dt.has("ArrowLeft"))&&(e-=1),(Dt.has("KeyD")||Dt.has("ArrowRight"))&&(e+=1),e+=ye.x,n+=ye.y;const s=Math.hypot(e,n);if(Ma=s>.15&&!Pe&&ys&&!Cn&&!ui,Ma){e/=Math.max(s,1),n/=Math.max(s,1);const r=ae.root.position;r.x+=e*bn*i,r.z+=n*bn*i,J0(r),ae.root.rotation.y=gr(ae.root.rotation.y,Math.atan2(e,n),12*i),!Vt.talkedToEvangelist&&r.x>Xe.east-4&&Math.abs(r.z)<5&&t-Bl>4&&(Bl=t,mn("🚪 The gate is shut fast… Evangelist on the east road may know the way.")),ya-=i,ya<=0&&(ya=.13,$0(r.x+(Math.random()-.5)*.5,r.z+(Math.random()-.5)*.5))}se(ae,t,Ma),Vt.talkedToEvangelist&&!Vt.chaseDone&&!ui&&ae.root.position.x>Xe.east-8&&Math.abs(ae.root.position.z)<4.5&&tg(),Vt.talkedToEvangelist&&!ui&&ae.root.position.distanceTo(un.lightBeam.position)<3.4&&(Vt.chapterComplete?Cn||pn():(Vt.chapterComplete=!0,Dr("✨ Chapter I Complete","Christian leaves the City of Destruction","Obstinate turned back in disgust, but Pliable hops eagerly alongside. Through the Wicket Gate and into the wide world — the first step on the long road to the Celestial City…",()=>{ee.start(Vt.pliableFollowing&&!Vt.pliableLeft?["pliable"]:[]),pn()})))}function gr(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*Math.min(e,1)}const ng=Rs.map(i=>({home:i.position.clone(),target:i.position.clone(),wait:Math.random()*4,moving:!1}));function ig(i,t){Rs.forEach((e,n)=>{const s=ng[n],r=Pe&&ts===e;if(mr&&(e.id==="obstinate"||e.id==="pliable")){const a=e.parts.root.position,l=ae.root.position.x-(e.id==="pliable"?1.3:2.6),c=ae.root.position.z-(e.id==="pliable"?2.3:1.1),h=l-a.x,f=c-a.z,m=Math.hypot(h,f);if(m>.25){const p=Math.min(10.5*i,m);a.x+=h/m*p,a.z+=f/m*p,e.parts.root.rotation.y=Math.atan2(h,f),se(e.parts,t*1.4+n,!0)}else{vs[e.id]=!0;const p=ae.root.position.x-a.x,g=ae.root.position.z-a.z;e.parts.root.rotation.y=Math.atan2(p,g),se(e.parts,t+n,!1)}return}if(e.id==="obstinate"&&Sa){const a=e.parts.root.position,l=e.position.x-a.x,c=e.position.z-a.z,h=Math.hypot(l,c);h>.25?(a.x+=l/h*3.6*i,a.z+=c/h*3.6*i,e.parts.root.rotation.y=Math.atan2(l,c),se(e.parts,t+n,!0)):(Sa=!1,e.parts.root.rotation.y=e.facing,se(e.parts,t+n,!1));return}if(e.id==="pliable"&&Vt.pliableFollowing&&!r){const a=e.parts.root.position,l=ae.root.position.x-a.x,c=ae.root.position.z-a.z,h=Math.hypot(l,c);if(h>2.1){const f=Math.min(bn*.92,h*2.5)*i;a.x+=l/h*f,a.z+=c/h*f,e.parts.root.rotation.y=Math.atan2(l,c),se(e.parts,t+.4,!0)}else se(e.parts,t+.4,!1);return}if(!e.wanderRadius||r||ui){se(e.parts,t+n*1.7,!1);return}const o=e.parts.root.position;if(s.moving){const a=s.target.x-o.x,l=s.target.z-o.z,c=Math.hypot(a,l);if(c<.15)s.moving=!1,s.wait=2+Math.random()*5;else{const h=1.6*i;o.x+=a/c*h,o.z+=l/c*h,e.parts.root.rotation.y=Math.atan2(a,l)}}else if(s.wait-=i,s.wait<=0){const a=Math.random()*Math.PI*2,l=Math.random()*e.wanderRadius;s.target.set(s.home.x+Math.cos(a)*l,0,s.home.z+Math.sin(a)*l),s.moving=!0}se(e.parts,t+n*1.7,s.moving)}),mr&&vs.obstinate&&vs.pliable&&!Pe&&(mr=!1,qn(Q0,()=>{Vt.chaseDone=!0,Vt.pliableFollowing=!0,Sa=!0,ui=!1,mn("✨ On to the shining light — Pliable comes too!")}))}const zl=new h0;function Pc(){requestAnimationFrame(Pc);const i=Math.min(zl.getDelta(),.05),t=zl.elapsedTime;if(je==="map"){let e=0,n=0;(Dt.has("KeyD")||Dt.has("ArrowRight"))&&(e+=1),(Dt.has("KeyA")||Dt.has("ArrowLeft"))&&(e-=1),(Dt.has("KeyS")||Dt.has("ArrowDown"))&&(n+=1),(Dt.has("KeyW")||Dt.has("ArrowUp"))&&(n-=1),e+=ye.x,n+=ye.y,ee.update(i,t,re.clamp(e,-1,1),re.clamp(n,-1,1)),ee.justDiverted&&(ee.justDiverted=!1,mn("🎩 The east road is barred — a smooth byway curves aside toward Morality…"));const s=ee.spot();gt.prompt.style.display=s==="road"?"none":"block",gt.promptKey.style.display="none",Vn&&(gt.talkBtn.style.display="none"),s==="city"?gt.promptWho.textContent="🏘 Visit the City of Destruction":s==="slough"?gt.promptWho.textContent=Vt.sloughComplete?"🌊 Revisit the Slough of Despond":"Enter the Slough of Despond":s==="morality"?gt.promptWho.textContent=Vt.moralityDone?"⛰ Revisit the foot of Mount Sinai":"Enter the pleasant village of Morality":s==="fork"?gt.promptWho.textContent=Vt.moralityDone?"🪧 A crossroad — east: the true way · press S for the byway":"🪧 A crossroad — the east road is barred…":s==="beyond"&&(gt.promptWho.textContent=Vt.wicketDone?"⛩ Revisit the Wicket Gate":"⛩ Knock at the Wicket Gate"),(s==="city"||s==="slough"||s==="morality"||s==="beyond")&&(gt.promptKey.style.display=Vn?"none":"inline-block",Vn&&(gt.talkBtn.textContent="Enter",gt.talkBtn.style.display="block")),sn.render(ee.scene,ee.camera);return}if(je==="slough"&&br){const e=br.christian;let n=0,s=0;(Dt.has("KeyW")||Dt.has("ArrowUp"))&&(s-=1),(Dt.has("KeyS")||Dt.has("ArrowDown"))&&(s+=1),(Dt.has("KeyA")||Dt.has("ArrowLeft"))&&(n-=1),(Dt.has("KeyD")||Dt.has("ArrowRight"))&&(n+=1),n+=ye.x,s+=ye.y;const r=Math.hypot(n,s),o=Vi.moveFactor(),a=r>.15&&!Pe&&!Cn&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*bn*o*i,e.root.position.z+=s*bn*o*i,e.root.rotation.y=gr(e.root.rotation.y,Math.atan2(n,s),12*i)),Vi.afterMove(a),Vi.update(i,t,a),le.lerp(e.root.position,Math.min(4*i,1)),ke.position.copy(le).add(lr),ke.lookAt(le.x,le.y+1.4,le.z),sn.render(Vi.scene,ke);return}if(je==="morality"&&Er){const e=Er.christian;let n=0,s=0;(Dt.has("KeyW")||Dt.has("ArrowUp"))&&(s-=1),(Dt.has("KeyS")||Dt.has("ArrowDown"))&&(s+=1),(Dt.has("KeyA")||Dt.has("ArrowLeft"))&&(n-=1),(Dt.has("KeyD")||Dt.has("ArrowRight"))&&(n+=1),n+=ye.x,s+=ye.y;const r=Math.hypot(n,s),o=Wi.moveFactor(),a=r>.15&&!Pe&&!Cn&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*bn*o*i,e.root.position.z+=s*bn*o*i,e.root.rotation.y=gr(e.root.rotation.y,Math.atan2(n,s),12*i)),Wi.afterMove(),Wi.update(i,t,a),le.lerp(e.root.position,Math.min(4*i,1)),ke.position.copy(le).add(lr),ke.lookAt(le.x,le.y+1.4,le.z),sn.render(Wi.scene,ke);return}if(je==="wicket"&&Tr){const e=Tr.christian;let n=0,s=0;(Dt.has("KeyW")||Dt.has("ArrowUp"))&&(s-=1),(Dt.has("KeyS")||Dt.has("ArrowDown"))&&(s+=1),(Dt.has("KeyA")||Dt.has("ArrowLeft"))&&(n-=1),(Dt.has("KeyD")||Dt.has("ArrowRight"))&&(n+=1),n+=ye.x,s+=ye.y;const r=Math.hypot(n,s),o=Xi.moveFactor(),a=r>.15&&!Pe&&!Cn&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*bn*o*i,e.root.position.z+=s*bn*o*i,e.root.rotation.y=gr(e.root.rotation.y,Math.atan2(n,s),12*i)),Xi.afterMove(),Xi.update(i,t,a),le.lerp(e.root.position,Math.min(4*i,1)),ke.position.copy(le).add(lr),ke.lookAt(le.x,le.y+1.4,le.z),sn.render(Xi.scene,ke);return}if(ys&&(eg(i,t),ig(i,t),Hn=Pe?null:G0(),_s=Pe||Hn?null:V0(),(Hn||_s)&&!Cn&&!ui?(gt.prompt.style.display="block",gt.promptWho.textContent=Hn?`Talk to ${Hn.name}`:`Look at ${_s.name}`,Vn&&(gt.talkBtn.textContent=Hn?"Talk":"Look",gt.talkBtn.style.display="block")):(gt.prompt.style.display="none",Pe||(gt.talkBtn.style.display="none"))),un.update(t),Z0(i),un.lightBeam.visible){const e=1+Math.sin(t*2.4)*.12;un.lightBeam.scale.set(e,1,e)}le.lerp(ae.root.position,Math.min(4*i,1)),ke.position.copy(le).add(lr),ke.lookAt(le.x,le.y+1.4,le.z),sn.render(In,ke)}window.addEventListener("resize",()=>{ke.aspect=window.innerWidth/window.innerHeight,ke.updateProjectionMatrix(),ee.resize(window.innerWidth/window.innerHeight),sn.setSize(window.innerWidth,window.innerHeight)});Pc();window.__game={christian:ae,npcs:Rs,quest:Vt,world:un,openDialogue:Ec,advanceDialogue:Nr,camTarget:le,worldMap:ee,slough:Vi,enterSlough:bc,morality:Wi,enterMorality:Sc,wicket:Xi,enterWicket:wc,playScript:qn,goToMap:pn,get mode(){return je}};
