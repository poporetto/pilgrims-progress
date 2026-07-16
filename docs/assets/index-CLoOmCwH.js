var Mc=Object.defineProperty;var wc=(i,t,e)=>t in i?Mc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var P=(i,t,e)=>wc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="166",bc=0,ul=1,Sc=2,Ch=1,Rh=2,Fn=3,di=0,Je=1,ln=2,ai=0,Ms=1,fl=2,pl=3,ml=4,Tc=5,ki=100,Ec=101,Ac=102,Cc=103,Rc=104,Pc=200,Ic=201,Lc=202,Dc=203,aa=204,la=205,kc=206,Uc=207,Nc=208,Fc=209,Oc=210,zc=211,Bc=212,Hc=213,Gc=214,Vc=0,Wc=1,Xc=2,Kr=3,Yc=4,qc=5,Kc=6,jc=7,Ga=0,Zc=1,$c=2,li=0,Jc=1,Qc=2,td=3,ed=4,nd=5,id=6,sd=7,Ph=300,Ts=301,Es=302,ha=303,ca=304,oo=306,da=1e3,Ni=1001,ua=1002,hn=1003,rd=1004,cr=1005,gn=1006,bo=1007,Fi=1008,Xn=1009,Ih=1010,Lh=1011,er=1012,Va=1013,Oi=1014,Gn=1015,rr=1016,Wa=1017,Xa=1018,As=1020,Dh=35902,kh=1021,Uh=1022,vn=1023,Nh=1024,Fh=1025,ws=1026,Cs=1027,Oh=1028,Ya=1029,zh=1030,qa=1031,Ka=1033,Hr=33776,Gr=33777,Vr=33778,Wr=33779,fa=35840,pa=35841,ma=35842,ga=35843,_a=36196,xa=37492,va=37496,ya=37808,Ma=37809,wa=37810,ba=37811,Sa=37812,Ta=37813,Ea=37814,Aa=37815,Ca=37816,Ra=37817,Pa=37818,Ia=37819,La=37820,Da=37821,Xr=36492,ka=36494,Ua=36495,Bh=36283,Na=36284,Fa=36285,Oa=36286,od=3200,ad=3201,Hh=0,ld=1,oi="",Sn="srgb",fi="srgb-linear",ja="display-p3",ao="display-p3-linear",jr="linear",fe="srgb",Zr="rec709",$r="p3",Xi=7680,gl=519,hd=512,cd=513,dd=514,Gh=515,ud=516,fd=517,pd=518,md=519,za=35044,_l="300 es",Vn=2e3,Jr=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const $s=Math.PI/180,nr=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Za(i,t){return(i%t+t)%t}function gd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _d(i,t,e){return i!==t?(e-i)/(t-i):0}function Js(i,t,e){return(1-e)*i+e*t}function xd(i,t,e,n){return Js(i,t,1-Math.exp(-e*n))}function vd(i,t=1){return t-Math.abs(Za(i,t*2)-t)}function yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function bd(i,t){return i+Math.random()*(t-i)}function Sd(i){return i*(.5-Math.random())}function Td(i){i!==void 0&&(xl=i);let t=xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ed(i){return i*$s}function Ad(i){return i*nr}function Cd(i){return(i&i-1)===0&&i!==0}function Rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Id(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*c,l*u,l*p,a*h);break;case"YZY":i.set(l*p,a*c,l*u,a*h);break;case"ZXZ":i.set(l*u,l*p,a*c,a*h);break;case"XZX":i.set(a*c,l*_,l*f,a*h);break;case"YXY":i.set(l*f,a*c,l*_,a*h);break;case"ZYZ":i.set(l*_,l*f,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:$s,RAD2DEG:nr,generateUUID:Wn,clamp:Ne,euclideanModulo:Za,mapLinear:gd,inverseLerp:_d,lerp:Js,damp:xd,pingpong:vd,smoothstep:yd,smootherstep:Md,randInt:wd,randFloat:bd,randFloatSpread:Sd,seededRandom:Td,degToRad:Ed,radToDeg:Ad,isPowerOfTwo:Cd,ceilPowerOfTwo:Rd,floorPowerOfTwo:Pd,setQuaternionFromProperEuler:Id,normalize:ae,denormalize:_n};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,l,h){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],p=n[2],f=n[5],_=n[8],x=s[0],m=s[3],d=s[6],E=s[1],y=s[4],b=s[7],k=s[2],A=s[5],I=s[8];return r[0]=o*x+a*E+l*k,r[3]=o*m+a*y+l*A,r[6]=o*d+a*b+l*I,r[1]=h*x+c*E+u*k,r[4]=h*m+c*y+u*A,r[7]=h*d+c*b+u*I,r[2]=p*x+f*E+_*k,r[5]=p*m+f*y+_*A,r[8]=p*d+f*b+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,p=a*l-c*r,f=h*r-o*l,_=e*u+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*h-c*n)*x,t[2]=(a*n-s*o)*x,t[3]=p*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const So=new jt;function Vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ld(){const i=Qr("canvas");return i.style.display="block",i}const vl={};function $a(i){i in vl||(vl[i]=!0,console.warn(i))}function Dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const yl=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ml=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dr={[fi]:{transfer:jr,primaries:Zr,toReference:i=>i,fromReference:i=>i},[Sn]:{transfer:fe,primaries:Zr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ao]:{transfer:jr,primaries:$r,toReference:i=>i.applyMatrix3(Ml),fromReference:i=>i.applyMatrix3(yl)},[ja]:{transfer:fe,primaries:$r,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ml),fromReference:i=>i.applyMatrix3(yl).convertLinearToSRGB()}},kd=new Set([fi,ao]),le={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=dr[t].toReference,s=dr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return dr[i].primaries},getTransfer:function(i){return i===oi?jr:dr[i].transfer}};function bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function To(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class Ud{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=Qr("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bs(e[n]/255)*255):e[n]=bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nd=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eo(s[o].image)):r.push(Eo(s[o]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fd=0;class Ye extends Is{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Ni,s=Ni,r=gn,o=Fi,a=vn,l=Xn,h=Ye.DEFAULT_ANISOTROPY,c=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Wn(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Ph;Ye.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],c=l[4],u=l[8],p=l[1],f=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(c-p)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+p)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,b=(f+1)/2,k=(d+1)/2,A=(c+p)/4,I=(u+x)/4,H=(_+m)/4;return y>b&&y>k?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=I/n):b>k?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=H/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=I/r,s=H/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(p-c)*(p-c));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(u-x)/E,this.z=(p-c)/E,this.w=Math.acos((h+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends Is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xh extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zd extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],u=n[s+3];const p=r[o+0],f=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=x;return}if(u!==x||l!==p||h!==f||c!==_){let m=1-a;const d=l*p+h*f+c*_+u*x,E=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const k=Math.sqrt(y),A=Math.atan2(k,d*E);m=Math.sin(m*A)/k,a=Math.sin(a*A)/k}const b=a*E;if(l=l*m+p*b,h=h*m+f*b,c=c*m+_*b,u=u*m+x*b,m===1-a){const k=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=k,h*=k,c*=k,u*=k}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],u=r[o],p=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+c*u+l*f-h*p,t[e+1]=l*_+c*p+h*u-a*f,t[e+2]=h*_+c*f+a*p-l*u,t[e+3]=c*_-a*u-l*p-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),u=a(r/2),p=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=p*c*u+h*f*_,this._y=h*f*u-p*c*_,this._z=h*c*_+p*f*u,this._w=h*c*u-p*f*_;break;case"YXZ":this._x=p*c*u+h*f*_,this._y=h*f*u-p*c*_,this._z=h*c*_-p*f*u,this._w=h*c*u+p*f*_;break;case"ZXY":this._x=p*c*u-h*f*_,this._y=h*f*u+p*c*_,this._z=h*c*_+p*f*u,this._w=h*c*u-p*f*_;break;case"ZYX":this._x=p*c*u-h*f*_,this._y=h*f*u+p*c*_,this._z=h*c*_-p*f*u,this._w=h*c*u+p*f*_;break;case"YZX":this._x=p*c*u+h*f*_,this._y=h*f*u+p*c*_,this._z=h*c*_-p*f*u,this._w=h*c*u-p*f*_;break;case"XZY":this._x=p*c*u-h*f*_,this._y=h*f*u-p*c*_,this._z=h*c*_+p*f*u,this._w=h*c*u+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],p=n+a+u;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,p=Math.sin(e*c)/h;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new C,wl=new or;class ar{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),fr.subVectors(this.max,ks),qi.subVectors(t.a,ks),Ki.subVectors(t.b,ks),ji.subVectors(t.c,ks),jn.subVectors(Ki,qi),Zn.subVectors(ji,Ki),xi.subVectors(qi,ji);let e=[0,-jn.z,jn.y,0,-Zn.z,Zn.y,0,-xi.z,xi.y,jn.z,0,-jn.x,Zn.z,0,-Zn.x,xi.z,0,-xi.x,-jn.y,jn.x,0,-Zn.y,Zn.x,0,-xi.y,xi.x,0];return!Co(e,qi,Ki,ji,fr)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,qi,Ki,ji,fr))?!1:(pr.crossVectors(jn,Zn),e=[pr.x,pr.y,pr.z],Co(e,qi,Ki,ji,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new C,new C,new C,new C,new C,new C,new C,new C],un=new C,ur=new ar,qi=new C,Ki=new C,ji=new C,jn=new C,Zn=new C,xi=new C,ks=new C,fr=new C,pr=new C,vi=new C;function Co(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),h=e.dot(vi),c=n.dot(vi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const Bd=new ar,Us=new C,Ro=new C;class Ja{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Ro)),this.expandByPoint(Us.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new C,Po=new C,mr=new C,$n=new C,Io=new C,gr=new C,Lo=new C;class Hd{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Po);const r=t.distanceTo(e)*.5,o=-this.direction.dot(mr),a=$n.dot(this.direction),l=-$n.dot(mr),h=$n.lengthSq(),c=Math.abs(1-o*o);let u,p,f,_;if(c>0)if(u=o*l-a,p=o*a-l,_=r*c,u>=0)if(p>=-_)if(p<=_){const x=1/c;u*=x,p*=x,f=u*(u+o*p+2*a)+p*(o*u+p+2*l)+h}else p=r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*l)+h;else p=-r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*l)+h;else p<=-_?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+p*(p+2*l)+h):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+h):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+p*(p+2*l)+h);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Po).addScaledVector(mr,p),f}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),c>=0?(r=(t.min.y-p.y)*c,o=(t.max.y-p.y)*c):(r=(t.max.y-p.y)*c,o=(t.min.y-p.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){Io.subVectors(e,t),gr.subVectors(n,t),Lo.crossVectors(Io,gr);let o=this.direction.dot(Lo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);const l=a*this.direction.dot(gr.crossVectors($n,gr));if(l<0)return null;const h=a*this.direction.dot(Io.cross($n));if(h<0||l+h>o)return null;const c=-a*$n.dot(Lo);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,o,a,l,h,c,u,p,f,_,x,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,u,p,f,_,x,m)}set(t,e,n,s,r,o,a,l,h,c,u,p,f,_,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=h,d[6]=c,d[10]=u,d[14]=p,d[3]=f,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=o*c,f=o*u,_=a*c,x=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+_*h,e[5]=p-x*h,e[9]=-a*l,e[2]=x-p*h,e[6]=_+f*h,e[10]=o*l}else if(t.order==="YXZ"){const p=l*c,f=l*u,_=h*c,x=h*u;e[0]=p+x*a,e[4]=_*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-_,e[6]=x+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*c,f=l*u,_=h*c,x=h*u;e[0]=p-x*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*c,e[9]=x-p*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*c,f=o*u,_=a*c,x=a*u;e[0]=l*c,e[4]=_*h-f,e[8]=p*h+x,e[1]=l*u,e[5]=x*h+p,e[9]=f*h-_,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,f=o*h,_=a*l,x=a*h;e[0]=l*c,e[4]=x-p*u,e[8]=_*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+_,e[10]=p-x*u}else if(t.order==="XZY"){const p=o*l,f=o*h,_=a*l,x=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=p*u+x,e[5]=o*c,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*c,e[10]=x*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Vd)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Jn.crossVectors(n,en),Jn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Jn.crossVectors(n,en)),Jn.normalize(),_r.crossVectors(en,Jn),s[0]=Jn.x,s[4]=_r.x,s[8]=en.x,s[1]=Jn.y,s[5]=_r.y,s[9]=en.y,s[2]=Jn.z,s[6]=_r.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],p=n[9],f=n[13],_=n[2],x=n[6],m=n[10],d=n[14],E=n[3],y=n[7],b=n[11],k=n[15],A=s[0],I=s[4],H=s[8],T=s[12],M=s[1],D=s[5],q=s[9],N=s[13],G=s[2],Y=s[6],K=s[10],Q=s[14],Z=s[3],at=s[7],dt=s[11],Mt=s[15];return r[0]=o*A+a*M+l*G+h*Z,r[4]=o*I+a*D+l*Y+h*at,r[8]=o*H+a*q+l*K+h*dt,r[12]=o*T+a*N+l*Q+h*Mt,r[1]=c*A+u*M+p*G+f*Z,r[5]=c*I+u*D+p*Y+f*at,r[9]=c*H+u*q+p*K+f*dt,r[13]=c*T+u*N+p*Q+f*Mt,r[2]=_*A+x*M+m*G+d*Z,r[6]=_*I+x*D+m*Y+d*at,r[10]=_*H+x*q+m*K+d*dt,r[14]=_*T+x*N+m*Q+d*Mt,r[3]=E*A+y*M+b*G+k*Z,r[7]=E*I+y*D+b*Y+k*at,r[11]=E*H+y*q+b*K+k*dt,r[15]=E*T+y*N+b*Q+k*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],p=t[10],f=t[14],_=t[3],x=t[7],m=t[11],d=t[15];return _*(+r*l*u-s*h*u-r*a*p+n*h*p+s*a*f-n*l*f)+x*(+e*l*f-e*h*p+r*o*p-s*o*f+s*h*c-r*l*c)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+d*(-s*a*c-e*l*u+e*a*p+s*o*u-n*o*p+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],p=t[10],f=t[11],_=t[12],x=t[13],m=t[14],d=t[15],E=u*m*h-x*p*h+x*l*f-a*m*f-u*l*d+a*p*d,y=_*p*h-c*m*h-_*l*f+o*m*f+c*l*d-o*p*d,b=c*x*h-_*u*h+_*a*f-o*x*f-c*a*d+o*u*d,k=_*u*l-c*x*l-_*a*p+o*x*p+c*a*m-o*u*m,A=e*E+n*y+s*b+r*k;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/A;return t[0]=E*I,t[1]=(x*p*r-u*m*r-x*s*f+n*m*f+u*s*d-n*p*d)*I,t[2]=(a*m*r-x*l*r+x*s*h-n*m*h-a*s*d+n*l*d)*I,t[3]=(u*l*r-a*p*r-u*s*h+n*p*h+a*s*f-n*l*f)*I,t[4]=y*I,t[5]=(c*m*r-_*p*r+_*s*f-e*m*f-c*s*d+e*p*d)*I,t[6]=(_*l*r-o*m*r-_*s*h+e*m*h+o*s*d-e*l*d)*I,t[7]=(o*p*r-c*l*r+c*s*h-e*p*h-o*s*f+e*l*f)*I,t[8]=b*I,t[9]=(_*u*r-c*x*r-_*n*f+e*x*f+c*n*d-e*u*d)*I,t[10]=(o*x*r-_*a*r+_*n*h-e*x*h-o*n*d+e*a*d)*I,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*I,t[12]=k*I,t[13]=(c*x*s-_*u*s+_*n*p-e*x*p-c*n*m+e*u*m)*I,t[14]=(_*a*s-o*x*s-_*n*l+e*x*l+o*n*m-e*a*m)*I,t[15]=(o*u*s-c*a*s+c*n*l-e*u*l-o*n*p+e*a*p)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,p=r*h,f=r*c,_=r*u,x=o*c,m=o*u,d=a*u,E=l*h,y=l*c,b=l*u,k=n.x,A=n.y,I=n.z;return s[0]=(1-(x+d))*k,s[1]=(f+b)*k,s[2]=(_-y)*k,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(p+d))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(_+y)*I,s[9]=(m-E)*I,s[10]=(1-(p+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const h=1/r,c=1/o,u=1/a;return fn.elements[0]*=h,fn.elements[1]*=h,fn.elements[2]*=h,fn.elements[4]*=c,fn.elements[5]*=c,fn.elements[6]*=c,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){const l=this.elements,h=2*r/(e-t),c=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let f,_;if(a===Vn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Jr)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){const l=this.elements,h=1/(e-t),c=1/(n-s),u=1/(o-r),p=(e+t)*h,f=(n+s)*c;let _,x;if(a===Vn)_=(o+r)*u,x=-2*u;else if(a===Jr)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new C,fn=new ye,Gd=new C(0,0,0),Vd=new C(1,1,1),Jn=new C,_r=new C,en=new C,bl=new ye,Sl=new or;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wd=0;const Tl=new C,$i=new or,Dn=new ye,xr=new C,Ns=new C,Xd=new C,Yd=new or,El=new C(1,0,0),Al=new C(0,1,0),Cl=new C(0,0,1),Rl={type:"added"},qd={type:"removed"},Ji={type:"childadded",child:null},Do={type:"childremoved",child:null};class De extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new C,e=new An,n=new or,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new jt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(Al,t)}rotateZ(t){return this.rotateOnAxis(Cl,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(Al,t)}translateZ(t){return this.translateOnAxis(Cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ns,xr,this.up):Dn.lookAt(xr,Ns,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Dn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rl),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),Do.child=t,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rl),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),p=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new C(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new C,kn=new C,ko=new C,Un=new C,Qi=new C,ts=new C,Pl=new C,Uo=new C,No=new C,Fo=new C;class xn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),kn.subVectors(n,e),ko.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(kn),l=pn.dot(ko),h=kn.dot(kn),c=kn.dot(ko),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,f=(h*l-a*c)*p,_=(o*c-a*l)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),kn.subVectors(t,e),pn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),pn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),ts.subVectors(r,n),Uo.subVectors(t,n);const l=Qi.dot(Uo),h=ts.dot(Uo);if(l<=0&&h<=0)return e.copy(n);No.subVectors(t,s);const c=Qi.dot(No),u=ts.dot(No);if(c>=0&&u<=c)return e.copy(s);const p=l*u-c*h;if(p<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(Qi,o);Fo.subVectors(t,r);const f=Qi.dot(Fo),_=ts.dot(Fo);if(_>=0&&f<=_)return e.copy(r);const x=f*h-l*_;if(x<=0&&h>=0&&_<=0)return a=h/(h-_),e.copy(n).addScaledVector(ts,a);const m=c*_-f*u;if(m<=0&&u-c>=0&&f-_>=0)return Pl.subVectors(r,s),a=(u-c)/(u-c+(f-_)),e.copy(s).addScaledVector(Pl,a);const d=1/(m+x+p);return o=x*d,a=p*d,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Za(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oo(o,r,t+1/3),this.g=Oo(o,r,t),this.b=Oo(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return le.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ne(ze.r*255,0,255))*65536+Math.round(Ne(ze.g*255,0,255))*256+Math.round(Ne(ze.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Sn){le.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(vr);const n=Js(Qn.h,vr.h,e),s=Js(Qn.s,vr.s,e),r=Js(Qn.l,vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Nt;Nt.NAMES=qh;let Kd=0;class Ls extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ms,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Pt extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new C,yr=new Wt;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return $a("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}}class Kh extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jh extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Be extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jd=0;const an=new ye,zo=new De,es=new C,nn=new ar,Fs=new ar,Le=new C;class wn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?jh:Kh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(nn.min,Fs.min),nn.expandByPoint(Le),Le.addVectors(nn.max,Fs.max),nn.expandByPoint(Le)):(nn.expandByPoint(Fs.min),nn.expandByPoint(Fs.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Le.fromBufferAttribute(a,h),l&&(es.fromBufferAttribute(t,h),Le.add(es)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<n.count;H++)a[H]=new C,l[H]=new C;const h=new C,c=new C,u=new C,p=new Wt,f=new Wt,_=new Wt,x=new C,m=new C;function d(H,T,M){h.fromBufferAttribute(n,H),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),p.fromBufferAttribute(r,H),f.fromBufferAttribute(r,T),_.fromBufferAttribute(r,M),c.sub(h),u.sub(h),f.sub(p),_.sub(p);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-_.x).multiplyScalar(D),a[H].add(x),a[T].add(x),a[M].add(x),l[H].add(m),l[T].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let H=0,T=E.length;H<T;++H){const M=E[H],D=M.start,q=M.count;for(let N=D,G=D+q;N<G;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new C,b=new C,k=new C,A=new C;function I(H){k.fromBufferAttribute(s,H),A.copy(k);const T=a[H];y.copy(T),y.sub(k.multiplyScalar(k.dot(T))).normalize(),b.crossVectors(A,T);const D=b.dot(l[H])<0?-1:1;o.setXYZW(H,y.x,y.y,y.z,D)}for(let H=0,T=E.length;H<T;++H){const M=E[H],D=M.start,q=M.count;for(let N=D,G=D+q;N<G;N+=3)I(t.getX(N+0)),I(t.getX(N+1)),I(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,h=new C,c=new C,u=new C;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(c),l.add(c),h.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(p+0,c.x,c.y,c.z),n.setXYZ(p+1,c.x,c.y,c.z),n.setXYZ(p+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,p=new h.constructor(l.length*c);let f=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*c;for(let d=0;d<c;d++)p[_++]=h[f++]}return new yn(p,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const p=h[c],f=t(p,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,p=h.length;u<p;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let p=0,f=u.length;p<f;p++)c.push(u[p].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new ye,yi=new Hd,Mr=new Ja,Ll=new C,ns=new C,is=new C,ss=new C,Bo=new C,wr=new C,br=new Wt,Sr=new Wt,Tr=new Wt,Dl=new C,kl=new C,Ul=new C,Er=new C,Ar=new C;class ot extends De{constructor(t=new wn,e=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(Bo.fromBufferAttribute(u,t),o?wr.addScaledVector(Bo,c):wr.addScaledVector(Bo.sub(e),c))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Mr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Mr,Ll)===null||yi.origin.distanceToSquared(Ll)>(t.far-t.near)**2))&&(Il.copy(r).invert(),yi.copy(t.ray).applyMatrix4(Il),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],d=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=E,k=y;b<k;b+=3){const A=a.getX(b),I=a.getX(b+1),H=a.getX(b+2);s=Cr(this,d,t,n,h,c,u,A,I,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=_,d=x;m<d;m+=3){const E=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);s=Cr(this,o,t,n,h,c,u,E,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=p.length;_<x;_++){const m=p[_],d=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=E,k=y;b<k;b+=3){const A=b,I=b+1,H=b+2;s=Cr(this,d,t,n,h,c,u,A,I,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,d=x;m<d;m+=3){const E=m,y=m+1,b=m+2;s=Cr(this,o,t,n,h,c,u,E,y,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zd(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===di,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ar);return h<e.near||h>e.far?null:{distance:h,point:Ar.clone(),object:i}}function Cr(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,ns),i.getVertexPosition(l,is),i.getVertexPosition(h,ss);const c=Zd(i,t,e,n,ns,is,ss,Er);if(c){s&&(br.fromBufferAttribute(s,a),Sr.fromBufferAttribute(s,l),Tr.fromBufferAttribute(s,h),c.uv=xn.getInterpolation(Er,ns,is,ss,br,Sr,Tr,new Wt)),r&&(br.fromBufferAttribute(r,a),Sr.fromBufferAttribute(r,l),Tr.fromBufferAttribute(r,h),c.uv1=xn.getInterpolation(Er,ns,is,ss,br,Sr,Tr,new Wt)),o&&(Dl.fromBufferAttribute(o,a),kl.fromBufferAttribute(o,l),Ul.fromBufferAttribute(o,h),c.normal=xn.getInterpolation(Er,ns,is,ss,Dl,kl,Ul,new C),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:l,c:h,normal:new C,materialIndex:0};xn.getNormal(ns,is,ss,u.normal),c.face=u}return c}class Et extends wn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(u,2));function _(x,m,d,E,y,b,k,A,I,H,T){const M=b/I,D=k/H,q=b/2,N=k/2,G=A/2,Y=I+1,K=H+1;let Q=0,Z=0;const at=new C;for(let dt=0;dt<K;dt++){const Mt=dt*D-N;for(let Xt=0;Xt<Y;Xt++){const ee=Xt*M-q;at[x]=ee*E,at[m]=Mt*y,at[d]=G,h.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[d]=A>0?1:-1,c.push(at.x,at.y,at.z),u.push(Xt/I),u.push(1-dt/H),Q+=1}}for(let dt=0;dt<H;dt++)for(let Mt=0;Mt<I;Mt++){const Xt=p+Mt+Y*dt,ee=p+Mt+Y*(dt+1),$=p+(Mt+1)+Y*(dt+1),it=p+(Mt+1)+Y*dt;l.push(Xt,ee,it),l.push(ee,$,it),Z+=6}a.addGroup(f,Z,T),f+=Z,p+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=Rs(i[e]);for(const s in n)t[s]=n[s]}return t}function $d(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Jd={clone:Rs,merge:Ge};var Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $h extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new C,Nl=new Wt,Fl=new Wt;class Ze extends $h{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Nl,Fl),e.subVectors(Fl,Nl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,os=1;class eu extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(rs,os,t,e);s.layers=this.layers,this.add(s);const r=new Ze(rs,os,t,e);r.layers=this.layers,this.add(r);const o=new Ze(rs,os,t,e);o.layers=this.layers,this.add(o);const a=new Ze(rs,os,t,e);a.layers=this.layers,this.add(a);const l=new Ze(rs,os,t,e);l.layers=this.layers,this.add(l);const h=new Ze(rs,os,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Jh extends Ye{constructor(t,e,n,s,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nu extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Et(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ai});r.uniforms.tEquirect.value=e;const o=new ot(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=gn),new eu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ho=new C,iu=new C,su=new jt;class Ci{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ho.subVectors(n,e).cross(iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||su.getNormalMatrix(t),s=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Ja,Rr=new C;class Qa{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],u=s[6],p=s[7],f=s[8],_=s[9],x=s[10],m=s[11],d=s[12],E=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-r,p-h,m-f,b-d).normalize(),n[1].setComponents(l+r,p+h,m+f,b+d).normalize(),n[2].setComponents(l+o,p+c,m+_,b+E).normalize(),n[3].setComponents(l-o,p-c,m-_,b-E).normalize(),n[4].setComponents(l-a,p-u,m-x,b-y).normalize(),e===Vn)n[5].setComponents(l+a,p+u,m+x,b+y).normalize();else if(e===Jr)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ru(i){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,u=h.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){const c=l.array,u=l._updateRange,p=l.updateRanges;if(i.bindBuffer(h,a),u.count===-1&&p.length===0&&i.bufferSubData(h,0,c),p.length!==0){for(let f=0,_=p.length;f<_;f++){const x=p[f];i.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}class lo extends wn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,u=t/a,p=e/l,f=[],_=[],x=[],m=[];for(let d=0;d<c;d++){const E=d*p-o;for(let y=0;y<h;y++){const b=y*u-r;_.push(b,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const y=E+h*d,b=E+h*(d+1),k=E+1+h*(d+1),A=E+1+h*d;f.push(y,b,A),f.push(b,k,A)}this.setIndex(f),this.setAttribute("position",new Be(_,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.width,t.height,t.widthSegments,t.heightSegments)}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
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
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uu=`#ifdef USE_AOMAP
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
#endif`,fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu=`#ifdef USE_BATCHING
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
#endif`,mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vu=`#ifdef USE_IRIDESCENCE
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
#endif`,yu=`#ifdef USE_BUMPMAP
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
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ru=`#define PI 3.141592653589793
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
} // validated`,Pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iu=`vec3 transformedNormal = objectNormal;
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
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fu=`
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
}`,Ou=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qu=`#ifdef USE_GRADIENTMAP
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
}`,Ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
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
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
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
#endif`,rf=`struct PhysicalMaterial {
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
}`,of=`
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`#ifdef USE_MORPHTARGETS
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
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
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
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xf=`float getShadowMask() {
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
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
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
}`,vp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Mp=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,Tp=`#define MATCAP
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
}`,Ep=`#define NORMAL
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
}`,Ap=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Rp=`#define PHONG
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
}`,Pp=`#define STANDARD
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
}`,Ip=`#define STANDARD
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
}`,Lp=`#define TOON
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
}`,Dp=`#define TOON
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
}`,kp=`uniform float size;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Fp=`uniform vec3 color;
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
}`,Op=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:ou,alphahash_pars_fragment:au,alphamap_fragment:lu,alphamap_pars_fragment:hu,alphatest_fragment:cu,alphatest_pars_fragment:du,aomap_fragment:uu,aomap_pars_fragment:fu,batching_pars_vertex:pu,batching_vertex:mu,begin_vertex:gu,beginnormal_vertex:_u,bsdfs:xu,iridescence_fragment:vu,bumpmap_pars_fragment:yu,clipping_planes_fragment:Mu,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:bu,clipping_planes_vertex:Su,color_fragment:Tu,color_pars_fragment:Eu,color_pars_vertex:Au,color_vertex:Cu,common:Ru,cube_uv_reflection_fragment:Pu,defaultnormal_vertex:Iu,displacementmap_pars_vertex:Lu,displacementmap_vertex:Du,emissivemap_fragment:ku,emissivemap_pars_fragment:Uu,colorspace_fragment:Nu,colorspace_pars_fragment:Fu,envmap_fragment:Ou,envmap_common_pars_fragment:zu,envmap_pars_fragment:Bu,envmap_pars_vertex:Hu,envmap_physical_pars_fragment:Ju,envmap_vertex:Gu,fog_vertex:Vu,fog_pars_vertex:Wu,fog_fragment:Xu,fog_pars_fragment:Yu,gradientmap_pars_fragment:qu,lightmap_pars_fragment:Ku,lights_lambert_fragment:ju,lights_lambert_pars_fragment:Zu,lights_pars_begin:$u,lights_toon_fragment:Qu,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:rf,lights_fragment_begin:of,lights_fragment_maps:af,lights_fragment_end:lf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:df,logdepthbuf_vertex:uf,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:xf,morphinstance_vertex:vf,morphcolor_vertex:yf,morphnormal_vertex:Mf,morphtarget_pars_vertex:wf,morphtarget_vertex:bf,normal_fragment_begin:Sf,normal_fragment_maps:Tf,normal_pars_fragment:Ef,normal_pars_vertex:Af,normal_vertex:Cf,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Df,opaque_fragment:kf,packing:Uf,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:zf,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:Yf,skinning_pars_vertex:qf,skinning_vertex:Kf,skinnormal_vertex:jf,specularmap_fragment:Zf,specularmap_pars_fragment:$f,tonemapping_fragment:Jf,tonemapping_pars_fragment:Qf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:op,background_frag:ap,backgroundCube_vert:lp,backgroundCube_frag:hp,cube_vert:cp,cube_frag:dp,depth_vert:up,depth_frag:fp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:vp,meshbasic_vert:yp,meshbasic_frag:Mp,meshlambert_vert:wp,meshlambert_frag:bp,meshmatcap_vert:Sp,meshmatcap_frag:Tp,meshnormal_vert:Ep,meshnormal_frag:Ap,meshphong_vert:Cp,meshphong_frag:Rp,meshphysical_vert:Pp,meshphysical_frag:Ip,meshtoon_vert:Lp,meshtoon_frag:Dp,points_vert:kp,points_frag:Up,shadow_vert:Np,shadow_frag:Fp,sprite_vert:Op,sprite_frag:zp},ut={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ge([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ge([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ge([ut.points,ut.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ge([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ge([ut.common,ut.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ge([ut.sprite,ut.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ge([ut.common,ut.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ge([ut.lights,ut.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Tn.physical={uniforms:Ge([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Pr={r:0,b:0,g:0},wi=new An,Bp=new ye;function Hp(i,t,e,n,s,r,o){const a=new Nt(0);let l=r===!0?0:1,h,c,u=null,p=0,f=null;function _(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function x(E){let y=!1;const b=_(E);b===null?d(a,l):b&&b.isColor&&(d(b,1),y=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===oo)?(c===void 0&&(c=new ot(new Et(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Rs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(k,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),wi.copy(y.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(wi)),c.material.toneMapped=le.getTransfer(b.colorSpace)!==fe,(u!==b||p!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new ot(new lo(2,2),new ui({name:"BackgroundMaterial",uniforms:Rs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=le.getTransfer(b.colorSpace)!==fe,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,p=b.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function d(E,y){E.getRGB(Pr,Zh(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:x,addToRenderList:m}}function Gp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(M,D,q,N,G){let Y=!1;const K=u(N,q,D);r!==K&&(r=K,h(r.object)),Y=f(M,N,q,G),Y&&_(M,N,q,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,b(M,D,q,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function h(M){return i.bindVertexArray(M)}function c(M){return i.deleteVertexArray(M)}function u(M,D,q){const N=q.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let Y=G[D.id];Y===void 0&&(Y={},G[D.id]=Y);let K=Y[N];return K===void 0&&(K=p(l()),Y[N]=K),K}function p(M){const D=[],q=[],N=[];for(let G=0;G<e;G++)D[G]=0,q[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:q,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,D,q,N){const G=r.attributes,Y=D.attributes;let K=0;const Q=q.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const dt=G[Z];let Mt=Y[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;K++}return r.attributesNum!==K||r.index!==N}function _(M,D,q,N){const G={},Y=D.attributes;let K=0;const Q=q.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let dt=Y[Z];dt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),G[Z]=Mt,K++}r.attributes=G,r.attributesNum=K,r.index=N}function x(){const M=r.newAttributes;for(let D=0,q=M.length;D<q;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){const q=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;q[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),G[M]!==D&&(i.vertexAttribDivisor(M,D),G[M]=D)}function E(){const M=r.newAttributes,D=r.enabledAttributes;for(let q=0,N=D.length;q<N;q++)D[q]!==M[q]&&(i.disableVertexAttribArray(q),D[q]=0)}function y(M,D,q,N,G,Y,K){K===!0?i.vertexAttribIPointer(M,D,q,G,Y):i.vertexAttribPointer(M,D,q,N,G,Y)}function b(M,D,q,N){x();const G=N.attributes,Y=q.getAttributes(),K=D.defaultAttributeValues;for(const Q in Y){const Z=Y[Q];if(Z.location>=0){let at=G[Q];if(at===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){const dt=at.normalized,Mt=at.itemSize,Xt=t.get(at);if(Xt===void 0)continue;const ee=Xt.buffer,$=Xt.type,it=Xt.bytesPerElement,wt=$===i.INT||$===i.UNSIGNED_INT||at.gpuType===Va;if(at.isInterleavedBufferAttribute){const ft=at.data,Gt=ft.stride,Yt=at.offset;if(ft.isInstancedInterleavedBuffer){for(let $t=0;$t<Z.locationSize;$t++)d(Z.location+$t,ft.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let $t=0;$t<Z.locationSize;$t++)m(Z.location+$t);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let $t=0;$t<Z.locationSize;$t++)y(Z.location+$t,Mt/Z.locationSize,$,dt,Gt*it,(Yt+Mt/Z.locationSize*$t)*it,wt)}else{if(at.isInstancedBufferAttribute){for(let ft=0;ft<Z.locationSize;ft++)d(Z.location+ft,at.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ft=0;ft<Z.locationSize;ft++)m(Z.location+ft);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ft=0;ft<Z.locationSize;ft++)y(Z.location+ft,Mt/Z.locationSize,$,dt,Mt*it,Mt/Z.locationSize*ft*it,wt)}}else if(K!==void 0){const dt=K[Q];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(Z.location,dt);break;case 3:i.vertexAttrib3fv(Z.location,dt);break;case 4:i.vertexAttrib4fv(Z.location,dt);break;default:i.vertexAttrib1fv(Z.location,dt)}}}}E()}function k(){H();for(const M in n){const D=n[M];for(const q in D){const N=D[q];for(const G in N)c(N[G].object),delete N[G];delete D[q]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const q in D){const N=D[q];for(const G in N)c(N[G].object),delete N[G];delete D[q]}delete n[M.id]}function I(M){for(const D in n){const q=n[D];if(q[M.id]===void 0)continue;const N=q[M.id];for(const G in N)c(N[G].object),delete N[G];delete q[M.id]}}function H(){T(),o=!0,r!==s&&(r=s,h(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:T,dispose:k,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Vp(i,t,e){let n;function s(h){n=h}function r(h,c){i.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(i.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let _=0;_<u;_++)f+=c[_];e.update(f,n,1)}function l(h,c,u,p){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<h.length;_++)o(h[_],c[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,p,0,u);let _=0;for(let x=0;x<u;x++)_+=c[x];for(let x=0;x<p.length;x++)e.update(_,n,p[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gn&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:d,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:b,maxSamples:k}}function Xp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ci,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=c(u,p,0)},this.setState=function(u,p,f){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?c(null):h();else{const E=r?0:n,y=E*4;let b=d.clippingState||null;l.value=b,b=c(_,p,y,f);for(let k=0;k!==y;++k)b[k]=e[k];d.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,p,f,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=f+x*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,b=f;y!==x;++y,b+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Yp(i){let t=new WeakMap;function e(o,a){return a===ha?o.mapping=Ts:a===ca&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ha||a===ca)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new nu(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class tc extends $h{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _s=4,Ol=[.125,.215,.35,.446,.526,.582],Ui=20,Go=new tc,zl=new Nt;let Vo=null,Wo=0,Xo=0,Yo=!1;const Ri=(1+Math.sqrt(5))/2,as=1/Ri,Bl=[new C(-Ri,as,0),new C(Ri,as,0),new C(-as,0,Ri),new C(as,0,Ri),new C(0,Ri,-as),new C(0,Ri,as),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Wo,Xo),this._renderer.xr.enabled=Yo,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:rr,format:vn,colorSpace:fi,depthBuffer:!1},s=Gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=Kp(r,t,e)}return s}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s){const a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,p=c.toneMapping;c.getClearColor(zl),c.toneMapping=li,c.autoClear=!1;const f=new Pt({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),_=new ot(new Et,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(zl),x=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(h[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,h[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,h[d]));const y=this._cubeSize;Ir(s,E*y,d>2?y:0,y,y),c.setRenderTarget(s),x&&c.render(_,a),c.render(t,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=p,c.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ts||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bl[(s-r-1)%Bl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new ot(this._lodPlanes[s],h),p=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),x=r/_,m=isFinite(r)?1+Math.floor(c*x):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const d=[];let E=0;for(let I=0;I<Ui;++I){const H=I/x,T=Math.exp(-H*H/2);d.push(T),I===0?E+=T:I<m&&(E+=2*T)}for(let I=0;I<d.length;I++)d[I]=d[I]/E;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=_,p.mipInt.value=y-n;const b=this._sizeLods[s],k=3*b*(s>y-_s?s-y+_s:0),A=4*(this._cubeSize-b);Ir(e,k,A,3*b,2*b),l.setRenderTarget(e),l.render(u,Go)}}function qp(i){const t=[],e=[],n=[];let s=i;const r=i-_s+1+Ol.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-_s?l=Ol[o-i+_s-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,p=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,_=6,x=3,m=2,d=1,E=new Float32Array(x*_*f),y=new Float32Array(m*_*f),b=new Float32Array(d*_*f);for(let A=0;A<f;A++){const I=A%3*2/3-1,H=A>2?0:-1,T=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];E.set(T,x*_*A),y.set(p,m*_*A);const M=[A,A,A,A,A,A];b.set(M,d*_*A)}const k=new wn;k.setAttribute("position",new yn(E,x)),k.setAttribute("uv",new yn(y,m)),k.setAttribute("faceIndex",new yn(b,d)),t.push(k),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gl(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Kp(i,t,e){const n=new Float32Array(Ui),s=new C(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Vl(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Wl(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function jp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===ha||l===ca,c=l===Ts||l===Es;if(h||c){let u=t.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Hl(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new Hl(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&$a("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $p(i,t,e,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const x=p.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}p.removeEventListener("dispose",o),delete s[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const x=f[_];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function h(u){const p=[],f=u.index,_=u.attributes.position;let x=0;if(f!==null){const E=f.array;x=f.version;for(let y=0,b=E.length;y<b;y+=3){const k=E[y+0],A=E[y+1],I=E[y+2];p.push(k,A,A,I,I,k)}}else if(_!==void 0){const E=_.array;x=_.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const k=y+0,A=y+1,I=y+2;p.push(k,A,A,I,I,k)}}else return;const m=new(Vh(p)?jh:Kh)(p,1);m.version=x;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function c(u){const p=r.get(u);if(p){const f=u.index;f!==null&&p.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function Jp(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function h(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,p*o,_),e.update(f,n,_))}function c(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,_);let m=0;for(let d=0;d<_;d++)m+=f[d];e.update(m,n,1)}function u(p,f,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)h(p[d]/o,f[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,x,0,_);let d=0;for(let E=0;E<_;E++)d+=f[E];for(let E=0;E<x.length;E++)e.update(d,n,x[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Qp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function t0(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let M=function(){H.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let k=a.attributes.position.count*b,A=1;k>t.maxTextureSize&&(A=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*A*4*u),H=new Xh(I,k,A,u);H.type=Gn,H.needsUpdate=!0;const T=b*4;for(let D=0;D<u;D++){const q=d[D],N=E[D],G=y[D],Y=k*A*4*D;for(let K=0;K<q.count;K++){const Q=K*T;_===!0&&(s.fromBufferAttribute(q,K),I[Y+Q+0]=s.x,I[Y+Q+1]=s.y,I[Y+Q+2]=s.z,I[Y+Q+3]=0),x===!0&&(s.fromBufferAttribute(N,K),I[Y+Q+4]=s.x,I[Y+Q+5]=s.y,I[Y+Q+6]=s.z,I[Y+Q+7]=0),m===!0&&(s.fromBufferAttribute(G,K),I[Y+Q+8]=s.x,I[Y+Q+9]=s.y,I[Y+Q+10]=s.z,I[Y+Q+11]=G.itemSize===4?s.w:1)}}p={count:u,texture:H,size:new Wt(k,A)},n.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<h.length;m++)_+=h[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function e0(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class ec extends Ye{constructor(t,e,n,s,r,o,a,l,h,c=ws){if(c!==ws&&c!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ws&&(n=Oi),n===void 0&&c===Cs&&(n=As),super(null,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nc=new Ye,Xl=new ec(1,1),ic=new Xh,sc=new zd,rc=new Jh,Yl=[],ql=[],Kl=new Float32Array(16),jl=new Float32Array(9),Zl=new Float32Array(4);function Ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Yl[s];if(r===void 0&&(r=new Float32Array(s),Yl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ho(i,t){let e=ql[t];e===void 0&&(e=new Int32Array(t),ql[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),Ie(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;jl.set(n),i.uniformMatrix3fv(this.addr,!1,jl),Ie(e,n)}}function l0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),Ie(e,n)}}function h0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xl.compareFunction=Gh,r=Xl):r=nc,e.setTexture2D(t||r,s)}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sc,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rc,s)}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ic,s)}function M0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return l0;case 5124:case 35670:return h0;case 35667:case 35671:return c0;case 35668:case 35672:return d0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return y0}}function w0(i,t){i.uniform1fv(this.addr,t)}function b0(i,t){const e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function S0(i,t){const e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){const e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function E0(i,t){const e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A0(i,t){const e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C0(i,t){const e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R0(i,t){i.uniform1iv(this.addr,t)}function P0(i,t){i.uniform2iv(this.addr,t)}function I0(i,t){i.uniform3iv(this.addr,t)}function L0(i,t){i.uniform4iv(this.addr,t)}function D0(i,t){i.uniform1uiv(this.addr,t)}function k0(i,t){i.uniform2uiv(this.addr,t)}function U0(i,t){i.uniform3uiv(this.addr,t)}function N0(i,t){i.uniform4uiv(this.addr,t)}function F0(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nc,r[o])}function O0(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sc,r[o])}function z0(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rc,r[o])}function B0(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ic,r[o])}function H0(i){switch(i){case 5126:return w0;case 35664:return b0;case 35665:return S0;case 35666:return T0;case 35674:return E0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return I0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return k0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return B0}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M0(e.type)}}class V0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H0(e.type)}}class W0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function $l(i,t){i.seq.push(t),i.map[t.id]=t}function X0(i,t,e){const n=i.name,s=n.length;for(qo.lastIndex=0;;){const r=qo.exec(n),o=qo.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){$l(e,h===void 0?new G0(a,i,t):new V0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new W0(a),$l(e,u)),e=u}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);X0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Jl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Y0=37297;let q0=0;function K0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function j0(i){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i);let n;switch(t===e?n="":t===$r&&e===Zr?n="LinearDisplayP3ToLinearSRGB":t===Zr&&e===$r&&(n="LinearSRGBToLinearDisplayP3"),i){case fi:case ao:return[n,"LinearTransferOETF"];case Sn:case ja:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ql(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+K0(i.getShaderSource(t),o)}else return s}function Z0(i,t){const e=j0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $0(i,t){let e;switch(t){case Jc:e="Linear";break;case Qc:e="Reinhard";break;case td:e="OptimizedCineon";break;case ed:e="ACESFilmic";break;case id:e="AgX";break;case sd:e="Neutral";break;case nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function Q0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ks(i){return i!==""}function th(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(em,im)}const nm=new Map;function im(i,t){let e=Kt[t];if(e===void 0){const n=nm.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(sm,rm)}function rm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function om(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function am(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case Es:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ga:t="ENVMAP_BLENDING_MULTIPLY";break;case Zc:t="ENVMAP_BLENDING_MIX";break;case $c:t="ENVMAP_BLENDING_ADD";break}return t}function cm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=om(e),h=am(e),c=lm(e),u=hm(e),p=cm(e),f=J0(e),_=Q0(r),x=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),d.length>0&&(d+=`
`)):(m=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),d=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Kt.tonemapping_pars_fragment:"",e.toneMapping!==li?$0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Z0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Ba(o),o=th(o,e),o=eh(o,e),a=Ba(a),a=th(a,e),a=eh(a,e),o=nh(o),a=nh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=E+m+o,b=E+d+a,k=Jl(s,s.VERTEX_SHADER,y),A=Jl(s,s.FRAGMENT_SHADER,b);s.attachShader(x,k),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(D){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(k).trim(),G=s.getShaderInfoLog(A).trim();let Y=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,k,A);else{const Q=Ql(s,k,"vertex"),Z=Ql(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+Q+`
`+Z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(N===""||G==="")&&(K=!1);K&&(D.diagnostics={runnable:Y,programLog:q,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(k),s.deleteShader(A),H=new Yr(s,x),T=tm(s,x)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Y0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=k,this.fragmentShader=A,this}let um=0;class fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pm(t),e.set(t,n)),n}}class pm{constructor(t){this.id=um++,this.code=t,this.usedTimes=0}}function mm(i,t,e,n,s,r,o){const a=new Yh,l=new fm,h=new Set,c=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return h.add(T),T===0?"uv":`uv${T}`}function m(T,M,D,q,N){const G=q.fog,Y=N.geometry,K=T.isMeshStandardMaterial?q.environment:null,Q=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),Z=Q&&Q.mapping===oo?Q.image.height:null,at=_[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Xt=0;Y.morphAttributes.position!==void 0&&(Xt=1),Y.morphAttributes.normal!==void 0&&(Xt=2),Y.morphAttributes.color!==void 0&&(Xt=3);let ee,$,it,wt;if(at){const ie=Tn[at];ee=ie.vertexShader,$=ie.fragmentShader}else ee=T.vertexShader,$=T.fragmentShader,l.update(T),it=l.getVertexShaderID(T),wt=l.getFragmentShaderID(T);const ft=i.getRenderTarget(),Gt=N.isInstancedMesh===!0,Yt=N.isBatchedMesh===!0,$t=!!T.map,ge=!!T.matcap,L=!!Q,_e=!!T.aoMap,te=!!T.lightMap,ne=!!T.bumpMap,At=!!T.normalMap,Me=!!T.displacementMap,zt=!!T.emissiveMap,Bt=!!T.metalnessMap,R=!!T.roughnessMap,v=T.anisotropy>0,U=T.clearcoat>0,z=T.dispersion>0,W=T.iridescence>0,j=T.sheen>0,vt=T.transmission>0,rt=v&&!!T.anisotropyMap,pt=U&&!!T.clearcoatMap,Ot=U&&!!T.clearcoatNormalMap,nt=U&&!!T.clearcoatRoughnessMap,mt=W&&!!T.iridescenceMap,qt=W&&!!T.iridescenceThicknessMap,Rt=j&&!!T.sheenColorMap,gt=j&&!!T.sheenRoughnessMap,Dt=!!T.specularMap,Vt=!!T.specularColorMap,de=!!T.specularIntensityMap,F=vt&&!!T.transmissionMap,st=vt&&!!T.thicknessMap,J=!!T.gradientMap,tt=!!T.alphaMap,ht=T.alphaTest>0,kt=!!T.alphaHash,Qt=!!T.extensions;let Ae=li;T.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const ke={shaderID:at,shaderType:T.type,shaderName:T.name,vertexShader:ee,fragmentShader:$,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:wt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&N._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&N.instanceColor!==null,instancingMorph:Gt&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:fi,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:ge,envMap:L,envMapMode:L&&Q.mapping,envMapCubeUVHeight:Z,aoMap:_e,lightMap:te,bumpMap:ne,normalMap:At,displacementMap:p&&Me,emissiveMap:zt,normalMapObjectSpace:At&&T.normalMapType===ld,normalMapTangentSpace:At&&T.normalMapType===Hh,metalnessMap:Bt,roughnessMap:R,anisotropy:v,anisotropyMap:rt,clearcoat:U,clearcoatMap:pt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:nt,dispersion:z,iridescence:W,iridescenceMap:mt,iridescenceThicknessMap:qt,sheen:j,sheenColorMap:Rt,sheenRoughnessMap:gt,specularMap:Dt,specularColorMap:Vt,specularIntensityMap:de,transmission:vt,transmissionMap:F,thicknessMap:st,gradientMap:J,opaque:T.transparent===!1&&T.blending===Ms&&T.alphaToCoverage===!1,alphaMap:tt,alphaTest:ht,alphaHash:kt,combine:T.combine,mapUv:$t&&x(T.map.channel),aoMapUv:_e&&x(T.aoMap.channel),lightMapUv:te&&x(T.lightMap.channel),bumpMapUv:ne&&x(T.bumpMap.channel),normalMapUv:At&&x(T.normalMap.channel),displacementMapUv:Me&&x(T.displacementMap.channel),emissiveMapUv:zt&&x(T.emissiveMap.channel),metalnessMapUv:Bt&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:rt&&x(T.anisotropyMap.channel),clearcoatMapUv:pt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(T.sheenRoughnessMap.channel),specularMapUv:Dt&&x(T.specularMap.channel),specularColorMapUv:Vt&&x(T.specularColorMap.channel),specularIntensityMapUv:de&&x(T.specularIntensityMap.channel),transmissionMapUv:F&&x(T.transmissionMap.channel),thicknessMapUv:st&&x(T.thicknessMap.channel),alphaMapUv:tt&&x(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(At||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&($t||tt),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&le.getTransfer(T.map.colorSpace)===fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ln,flipSided:T.side===Je,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Qt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&T.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ke.vertexUv1s=h.has(1),ke.vertexUv2s=h.has(2),ke.vertexUv3s=h.has(3),h.clear(),ke}function d(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(E(M,T),y(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function E(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),T.push(a.mask)}function b(T){const M=_[T.type];let D;if(M){const q=Tn[M];D=Jd.clone(q.uniforms)}else D=T.uniforms;return D}function k(T,M){let D;for(let q=0,N=c.length;q<N;q++){const G=c[q];if(G.cacheKey===M){D=G,++D.usedTimes;break}}return D===void 0&&(D=new dm(i,M,T,r),c.push(D)),D}function A(T){if(--T.usedTimes===0){const M=c.indexOf(T);c[M]=c[c.length-1],c.pop(),T.destroy()}}function I(T){l.remove(T)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:k,releaseProgram:A,releaseShaderCache:I,programs:c,dispose:H}}function gm(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function _m(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,f,_,x,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,p,f,_,x,m){const d=o(u,p,f,_,x,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function l(u,p,f,_,x,m){const d=o(u,p,f,_,x,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function h(u,p){e.length>1&&e.sort(u||_m),n.length>1&&n.sort(p||sh),s.length>1&&s.sort(p||sh)}function c(){for(let u=t,p=i.length;u<p;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function xm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new rh,i.set(n,[o])):s>=r.length?(o=new rh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Nt};break;case"SpotLight":e={position:new C,direction:new C,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Mm=0;function wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bm(i){const t=new vm,e=ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);const s=new C,r=new ye,o=new ye;function a(h){let c=0,u=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,_=0,x=0,m=0,d=0,E=0,y=0,b=0,k=0,A=0,I=0;h.sort(wm);for(let T=0,M=h.length;T<M;T++){const D=h[T],q=D.color,N=D.intensity,G=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=q.r*N,u+=q.g*N,p+=q.b*N;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],N);I++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,Z=e.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=D.shadow.matrix,E++}n.directional[f]=K,f++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(q).multiplyScalar(N),K.distance=G,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[x]=K;const Q=D.shadow;if(D.map&&(n.spotLightMap[k]=D.map,k++,Q.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=Q.matrix,D.castShadow){const Z=e.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=Y,b++}x++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(q).multiplyScalar(N),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=K,m++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const Q=D.shadow,Z=e.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=D.shadow.matrix,y++}n.point[_]=K,_++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(N),K.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[d]=K,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=p;const H=n.hash;(H.directionalLength!==f||H.pointLength!==_||H.spotLength!==x||H.rectAreaLength!==m||H.hemiLength!==d||H.numDirectionalShadows!==E||H.numPointShadows!==y||H.numSpotShadows!==b||H.numSpotMaps!==k||H.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+k-A,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,H.directionalLength=f,H.pointLength=_,H.spotLength=x,H.rectAreaLength=m,H.hemiLength=d,H.numDirectionalShadows=E,H.numPointShadows=y,H.numSpotShadows=b,H.numSpotMaps=k,H.numLightProbes=I,n.version=Mm++)}function l(h,c){let u=0,p=0,f=0,_=0,x=0;const m=c.matrixWorldInverse;for(let d=0,E=h.length;d<E;d++){const y=h[d];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(y.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function oh(i){const t=new bm(i),e=[],n=[];function s(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Sm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new oh(i),t.set(s,[a])):r>=o.length?(a=new oh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Tm extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Em extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cm=`uniform sampler2D shadow_pass;
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
}`;function Rm(i,t,e){let n=new Qa;const s=new Wt,r=new Wt,o=new me,a=new Tm({depthPacking:ad}),l=new Em,h={},c=e.maxTextureSize,u={[di]:Je,[Je]:di,[ln]:ln},p=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Am,fragmentShader:Cm}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new wn;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ot(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let d=this.type;this.render=function(A,I,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),q=i.state;q.setBlending(ai),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const N=d!==Fn&&this.type===Fn,G=d===Fn&&this.type!==Fn;for(let Y=0,K=A.length;Y<K;Y++){const Q=A[Y],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const at=Z.getFrameExtents();if(s.multiply(at),r.copy(Z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/at.x),s.x=r.x*at.x,Z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/at.y),s.y=r.y*at.y,Z.mapSize.y=r.y)),Z.map===null||N===!0||G===!0){const Mt=this.type!==Fn?{minFilter:hn,magFilter:hn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new zi(s.x,s.y,Mt),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const dt=Z.getViewportCount();for(let Mt=0;Mt<dt;Mt++){const Xt=Z.getViewport(Mt);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),q.viewport(o),Z.updateMatrices(Q,Mt),n=Z.getFrustum(),b(I,H,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===Fn&&E(Z,H),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,D)};function E(A,I){const H=t.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zi(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,H,p,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,H,f,x,null)}function y(A,I,H,T){let M=null;const D=H.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=H.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const q=M.uuid,N=I.uuid;let G=h[q];G===void 0&&(G={},h[q]=G);let Y=G[N];Y===void 0&&(Y=M.clone(),G[N]=Y,I.addEventListener("dispose",k)),M=Y}if(M.visible=I.visible,M.wireframe=I.wireframe,T===Fn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,H.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=H}return M}function b(A,I,H,T,M){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld);const N=t.update(A),G=A.material;if(Array.isArray(G)){const Y=N.groups;for(let K=0,Q=Y.length;K<Q;K++){const Z=Y[K],at=G[Z.materialIndex];if(at&&at.visible){const dt=y(A,at,T,M);A.onBeforeShadow(i,A,I,H,N,dt,Z),i.renderBufferDirect(H,null,N,dt,A,Z),A.onAfterShadow(i,A,I,H,N,dt,Z)}}}else if(G.visible){const Y=y(A,G,T,M);A.onBeforeShadow(i,A,I,H,N,Y,null),i.renderBufferDirect(H,null,N,Y,A,null),A.onAfterShadow(i,A,I,H,N,Y,null)}}const q=A.children;for(let N=0,G=q.length;N<G;N++)b(q[N],I,H,T,M)}function k(A){A.target.removeEventListener("dispose",k);for(const H in h){const T=h[H],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function Pm(i){function t(){let F=!1;const st=new me;let J=null;const tt=new me(0,0,0,0);return{setMask:function(ht){J!==ht&&!F&&(i.colorMask(ht,ht,ht,ht),J=ht)},setLocked:function(ht){F=ht},setClear:function(ht,kt,Qt,Ae,ke){ke===!0&&(ht*=Ae,kt*=Ae,Qt*=Ae),st.set(ht,kt,Qt,Ae),tt.equals(st)===!1&&(i.clearColor(ht,kt,Qt,Ae),tt.copy(st))},reset:function(){F=!1,J=null,tt.set(-1,0,0,0)}}}function e(){let F=!1,st=null,J=null,tt=null;return{setTest:function(ht){ht?wt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(ht){st!==ht&&!F&&(i.depthMask(ht),st=ht)},setFunc:function(ht){if(J!==ht){switch(ht){case Vc:i.depthFunc(i.NEVER);break;case Wc:i.depthFunc(i.ALWAYS);break;case Xc:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case Yc:i.depthFunc(i.EQUAL);break;case qc:i.depthFunc(i.GEQUAL);break;case Kc:i.depthFunc(i.GREATER);break;case jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ht}},setLocked:function(ht){F=ht},setClear:function(ht){tt!==ht&&(i.clearDepth(ht),tt=ht)},reset:function(){F=!1,st=null,J=null,tt=null}}}function n(){let F=!1,st=null,J=null,tt=null,ht=null,kt=null,Qt=null,Ae=null,ke=null;return{setTest:function(ie){F||(ie?wt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(ie){st!==ie&&!F&&(i.stencilMask(ie),st=ie)},setFunc:function(ie,Pn,bn){(J!==ie||tt!==Pn||ht!==bn)&&(i.stencilFunc(ie,Pn,bn),J=ie,tt=Pn,ht=bn)},setOp:function(ie,Pn,bn){(kt!==ie||Qt!==Pn||Ae!==bn)&&(i.stencilOp(ie,Pn,bn),kt=ie,Qt=Pn,Ae=bn)},setLocked:function(ie){F=ie},setClear:function(ie){ke!==ie&&(i.clearStencil(ie),ke=ie)},reset:function(){F=!1,st=null,J=null,tt=null,ht=null,kt=null,Qt=null,Ae=null,ke=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let h={},c={},u=new WeakMap,p=[],f=null,_=!1,x=null,m=null,d=null,E=null,y=null,b=null,k=null,A=new Nt(0,0,0),I=0,H=!1,T=null,M=null,D=null,q=null,N=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=K>=2);let Z=null,at={};const dt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Xt=new me().fromArray(dt),ee=new me().fromArray(Mt);function $(F,st,J,tt){const ht=new Uint8Array(4),kt=i.createTexture();i.bindTexture(F,kt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<J;Qt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return kt}const it={};it[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),wt(i.DEPTH_TEST),r.setFunc(Kr),ne(!1),At(ul),wt(i.CULL_FACE),_e(ai);function wt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ft(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Gt(F,st){return c[F]!==st?(i.bindFramebuffer(F,st),c[F]=st,F===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=st),F===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Yt(F,st){let J=p,tt=!1;if(F){J=u.get(st),J===void 0&&(J=[],u.set(st,J));const ht=F.textures;if(J.length!==ht.length||J[0]!==i.COLOR_ATTACHMENT0){for(let kt=0,Qt=ht.length;kt<Qt;kt++)J[kt]=i.COLOR_ATTACHMENT0+kt;J.length=ht.length,tt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,tt=!0);tt&&i.drawBuffers(J)}function $t(F){return f!==F?(i.useProgram(F),f=F,!0):!1}const ge={[ki]:i.FUNC_ADD,[Ec]:i.FUNC_SUBTRACT,[Ac]:i.FUNC_REVERSE_SUBTRACT};ge[Cc]=i.MIN,ge[Rc]=i.MAX;const L={[Pc]:i.ZERO,[Ic]:i.ONE,[Lc]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[Oc]:i.SRC_ALPHA_SATURATE,[Nc]:i.DST_COLOR,[kc]:i.DST_ALPHA,[Dc]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[Fc]:i.ONE_MINUS_DST_COLOR,[Uc]:i.ONE_MINUS_DST_ALPHA,[zc]:i.CONSTANT_COLOR,[Bc]:i.ONE_MINUS_CONSTANT_COLOR,[Hc]:i.CONSTANT_ALPHA,[Gc]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(F,st,J,tt,ht,kt,Qt,Ae,ke,ie){if(F===ai){_===!0&&(ft(i.BLEND),_=!1);return}if(_===!1&&(wt(i.BLEND),_=!0),F!==Tc){if(F!==x||ie!==H){if((m!==ki||y!==ki)&&(i.blendEquation(i.FUNC_ADD),m=ki,y=ki),ie)switch(F){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}d=null,E=null,b=null,k=null,A.set(0,0,0),I=0,x=F,H=ie}return}ht=ht||st,kt=kt||J,Qt=Qt||tt,(st!==m||ht!==y)&&(i.blendEquationSeparate(ge[st],ge[ht]),m=st,y=ht),(J!==d||tt!==E||kt!==b||Qt!==k)&&(i.blendFuncSeparate(L[J],L[tt],L[kt],L[Qt]),d=J,E=tt,b=kt,k=Qt),(Ae.equals(A)===!1||ke!==I)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ke),A.copy(Ae),I=ke),x=F,H=!1}function te(F,st){F.side===ln?ft(i.CULL_FACE):wt(i.CULL_FACE);let J=F.side===Je;st&&(J=!J),ne(J),F.blending===Ms&&F.transparent===!1?_e(ai):_e(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?wt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){T!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),T=F)}function At(F){F!==bc?(wt(i.CULL_FACE),F!==M&&(F===ul?i.cullFace(i.BACK):F===Sc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),M=F}function Me(F){F!==D&&(Y&&i.lineWidth(F),D=F)}function zt(F,st,J){F?(wt(i.POLYGON_OFFSET_FILL),(q!==st||N!==J)&&(i.polygonOffset(st,J),q=st,N=J)):ft(i.POLYGON_OFFSET_FILL)}function Bt(F){F?wt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+G-1),Z!==F&&(i.activeTexture(F),Z=F)}function v(F,st,J){J===void 0&&(Z===null?J=i.TEXTURE0+G-1:J=Z);let tt=at[J];tt===void 0&&(tt={type:void 0,texture:void 0},at[J]=tt),(tt.type!==F||tt.texture!==st)&&(Z!==J&&(i.activeTexture(J),Z=J),i.bindTexture(F,st||it[F]),tt.type=F,tt.texture=st)}function U(){const F=at[Z];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(F){Xt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Xt.copy(F))}function gt(F){ee.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Dt(F,st){let J=l.get(st);J===void 0&&(J=new WeakMap,l.set(st,J));let tt=J.get(F);tt===void 0&&(tt=i.getUniformBlockIndex(st,F.name),J.set(F,tt))}function Vt(F,st){const tt=l.get(st).get(F);a.get(st)!==tt&&(i.uniformBlockBinding(st,tt,F.__bindingPointIndex),a.set(st,tt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,at={},c={},u=new WeakMap,p=[],f=null,_=!1,x=null,m=null,d=null,E=null,y=null,b=null,k=null,A=new Nt(0,0,0),I=0,H=!1,T=null,M=null,D=null,q=null,N=null,Xt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:wt,disable:ft,bindFramebuffer:Gt,drawBuffers:Yt,useProgram:$t,setBlending:_e,setMaterial:te,setFlipSided:ne,setCullFace:At,setLineWidth:Me,setPolygonOffset:zt,setScissorTest:Bt,activeTexture:R,bindTexture:v,unbindTexture:U,compressedTexImage2D:z,compressedTexImage3D:W,texImage2D:mt,texImage3D:qt,updateUBOMapping:Dt,uniformBlockBinding:Vt,texStorage2D:Ot,texStorage3D:nt,texSubImage2D:j,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:pt,scissor:Rt,viewport:gt,reset:de}}function ah(i,t,e,n){const s=Im(n);switch(e){case kh:return i*t;case Nh:return i*t;case Fh:return i*t*2;case Oh:return i*t/s.components*s.byteLength;case Ya:return i*t/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case qa:return i*t*2/s.components*s.byteLength;case Uh:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Ka:return i*t*4/s.components*s.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(i,8)*Math.max(t,8)/2;case _a:case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xr:case ka:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bh:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Im(i){switch(i){case Xn:case Ih:return{byteLength:1,components:1};case er:case Lh:case rr:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Oi:case Va:case Gn:return{byteLength:4,components:1};case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Lm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Wt,c=new WeakMap;let u;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return f?new OffscreenCanvas(R,v):Qr("canvas")}function x(R,v,U){let z=1;const W=Bt(R);if((W.width>U||W.height>U)&&(z=U/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(z*W.width),vt=Math.floor(z*W.height);u===void 0&&(u=_(j,vt));const rt=v?_(j,vt):u;return rt.width=j,rt.height=vt,rt.getContext("2d").drawImage(R,0,0,j,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+j+"x"+vt+")."),rt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==hn&&R.minFilter!==gn}function d(R){i.generateMipmap(R)}function E(R,v,U,z,W=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=v;if(v===i.RED&&(U===i.FLOAT&&(j=i.R32F),U===i.HALF_FLOAT&&(j=i.R16F),U===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.R8UI),U===i.UNSIGNED_SHORT&&(j=i.R16UI),U===i.UNSIGNED_INT&&(j=i.R32UI),U===i.BYTE&&(j=i.R8I),U===i.SHORT&&(j=i.R16I),U===i.INT&&(j=i.R32I)),v===i.RG&&(U===i.FLOAT&&(j=i.RG32F),U===i.HALF_FLOAT&&(j=i.RG16F),U===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RG8UI),U===i.UNSIGNED_SHORT&&(j=i.RG16UI),U===i.UNSIGNED_INT&&(j=i.RG32UI),U===i.BYTE&&(j=i.RG8I),U===i.SHORT&&(j=i.RG16I),U===i.INT&&(j=i.RG32I)),v===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),v===i.RGBA){const vt=W?jr:le.getTransfer(z);U===i.FLOAT&&(j=i.RGBA32F),U===i.HALF_FLOAT&&(j=i.RGBA16F),U===i.UNSIGNED_BYTE&&(j=vt===fe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(R,v){let U;return R?v===null||v===Oi||v===As?U=i.DEPTH24_STENCIL8:v===Gn?U=i.DEPTH32F_STENCIL8:v===er&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Oi||v===As?U=i.DEPTH_COMPONENT24:v===Gn?U=i.DEPTH_COMPONENT32F:v===er&&(U=i.DEPTH_COMPONENT16),U}function b(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function k(R){const v=R.target;v.removeEventListener("dispose",k),I(v),v.isVideoTexture&&c.delete(v)}function A(R){const v=R.target;v.removeEventListener("dispose",A),T(v)}function I(R){const v=n.get(R);if(v.__webglInit===void 0)return;const U=R.source,z=p.get(U);if(z){const W=z[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&H(R),Object.keys(z).length===0&&p.delete(U)}n.remove(R)}function H(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const U=R.source,z=p.get(U);delete z[v.__cacheKey],o.memory.textures--}function T(R){const v=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let W=0;W<v.__webglFramebuffer[z].length;W++)i.deleteFramebuffer(v.__webglFramebuffer[z][W]);else i.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)i.deleteFramebuffer(v.__webglFramebuffer[z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=R.textures;for(let z=0,W=U.length;z<W;z++){const j=n.get(U[z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(U[z])}n.remove(R)}let M=0;function D(){M=0}function q(){const R=M;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),M+=1,R}function N(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function G(R,v){const U=n.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){const z=R.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(U,R,v);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function Y(R,v){const U=n.get(R);if(R.version>0&&U.__version!==R.version){ee(U,R,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function K(R,v){const U=n.get(R);if(R.version>0&&U.__version!==R.version){ee(U,R,v);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function Q(R,v){const U=n.get(R);if(R.version>0&&U.__version!==R.version){$(U,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const Z={[da]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},at={[hn]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},dt={[hd]:i.NEVER,[md]:i.ALWAYS,[cd]:i.LESS,[Gh]:i.LEQUAL,[dd]:i.EQUAL,[pd]:i.GEQUAL,[ud]:i.GREATER,[fd]:i.NOTEQUAL};function Mt(R,v){if(v.type===Gn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===bo||v.magFilter===cr||v.magFilter===Fi||v.minFilter===gn||v.minFilter===bo||v.minFilter===cr||v.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Z[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,dt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==cr&&v.minFilter!==Fi||v.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Xt(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",k));const z=v.source;let W=p.get(z);W===void 0&&(W={},p.set(z,W));const j=N(v);if(j!==R.__cacheKey){W[j]===void 0&&(W[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),W[j].usedTimes++;const vt=W[R.__cacheKey];vt!==void 0&&(W[R.__cacheKey].usedTimes--,vt.usedTimes===0&&H(v)),R.__cacheKey=j,R.__webglTexture=W[j].texture}return U}function ee(R,v,U){let z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=i.TEXTURE_3D);const W=Xt(R,v),j=v.source;e.bindTexture(z,R.__webglTexture,i.TEXTURE0+U);const vt=n.get(j);if(j.version!==vt.__version||W===!0){e.activeTexture(i.TEXTURE0+U);const rt=le.getPrimaries(le.workingColorSpace),pt=v.colorSpace===oi?null:le.getPrimaries(v.colorSpace),Ot=v.colorSpace===oi||rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let nt=x(v.image,!1,s.maxTextureSize);nt=zt(v,nt);const mt=r.convert(v.format,v.colorSpace),qt=r.convert(v.type);let Rt=E(v.internalFormat,mt,qt,v.colorSpace,v.isVideoTexture);Mt(z,v);let gt;const Dt=v.mipmaps,Vt=v.isVideoTexture!==!0,de=vt.__version===void 0||W===!0,F=j.dataReady,st=b(v,nt);if(v.isDepthTexture)Rt=y(v.format===Cs,v.type),de&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Rt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,nt.width,nt.height,0,mt,qt,null));else if(v.isDataTexture)if(Dt.length>0){Vt&&de&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Dt[0].width,Dt[0].height);for(let J=0,tt=Dt.length;J<tt;J++)gt=Dt[J],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,gt.width,gt.height,mt,qt,gt.data):e.texImage2D(i.TEXTURE_2D,J,Rt,gt.width,gt.height,0,mt,qt,gt.data);v.generateMipmaps=!1}else Vt?(de&&e.texStorage2D(i.TEXTURE_2D,st,Rt,nt.width,nt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,qt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,nt.width,nt.height,0,mt,qt,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Dt[0].width,Dt[0].height,nt.depth);for(let J=0,tt=Dt.length;J<tt;J++)if(gt=Dt[J],v.format!==vn)if(mt!==null)if(Vt){if(F)if(v.layerUpdates.size>0){const ht=ah(gt.width,gt.height,v.format,v.type);for(const kt of v.layerUpdates){const Qt=gt.data.subarray(kt*ht/gt.data.BYTES_PER_ELEMENT,(kt+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,kt,gt.width,gt.height,1,mt,Qt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Rt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,gt.width,gt.height,nt.depth,mt,qt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Rt,gt.width,gt.height,nt.depth,0,mt,qt,gt.data)}else{Vt&&de&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Dt[0].width,Dt[0].height);for(let J=0,tt=Dt.length;J<tt;J++)gt=Dt[J],v.format!==vn?mt!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Rt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?F&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,gt.width,gt.height,mt,qt,gt.data):e.texImage2D(i.TEXTURE_2D,J,Rt,gt.width,gt.height,0,mt,qt,gt.data)}else if(v.isDataArrayTexture)if(Vt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,nt.width,nt.height,nt.depth),F)if(v.layerUpdates.size>0){const J=ah(nt.width,nt.height,v.format,v.type);for(const tt of v.layerUpdates){const ht=nt.data.subarray(tt*J/nt.data.BYTES_PER_ELEMENT,(tt+1)*J/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,nt.width,nt.height,1,mt,qt,ht)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,qt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,nt.width,nt.height,nt.depth,0,mt,qt,nt.data);else if(v.isData3DTexture)Vt?(de&&e.texStorage3D(i.TEXTURE_3D,st,Rt,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,qt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,nt.width,nt.height,nt.depth,0,mt,qt,nt.data);else if(v.isFramebufferTexture){if(de)if(Vt)e.texStorage2D(i.TEXTURE_2D,st,Rt,nt.width,nt.height);else{let J=nt.width,tt=nt.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Rt,J,tt,0,mt,qt,null),J>>=1,tt>>=1}}else if(Dt.length>0){if(Vt&&de){const J=Bt(Dt[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,J.width,J.height)}for(let J=0,tt=Dt.length;J<tt;J++)gt=Dt[J],Vt?F&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,mt,qt,gt):e.texImage2D(i.TEXTURE_2D,J,Rt,mt,qt,gt);v.generateMipmaps=!1}else if(Vt){if(de){const J=Bt(nt);e.texStorage2D(i.TEXTURE_2D,st,Rt,J.width,J.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,qt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,mt,qt,nt);m(v)&&d(z),vt.__version=j.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function $(R,v,U){if(v.image.length!==6)return;const z=Xt(R,v),W=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+U);const j=n.get(W);if(W.version!==j.__version||z===!0){e.activeTexture(i.TEXTURE0+U);const vt=le.getPrimaries(le.workingColorSpace),rt=v.colorSpace===oi?null:le.getPrimaries(v.colorSpace),pt=v.colorSpace===oi||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Ot=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let tt=0;tt<6;tt++)!Ot&&!nt?mt[tt]=x(v.image[tt],!0,s.maxCubemapSize):mt[tt]=nt?v.image[tt].image:v.image[tt],mt[tt]=zt(v,mt[tt]);const qt=mt[0],Rt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),Dt=E(v.internalFormat,Rt,gt,v.colorSpace),Vt=v.isVideoTexture!==!0,de=j.__version===void 0||z===!0,F=W.dataReady;let st=b(v,qt);Mt(i.TEXTURE_CUBE_MAP,v);let J;if(Ot){Vt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Dt,qt.width,qt.height);for(let tt=0;tt<6;tt++){J=mt[tt].mipmaps;for(let ht=0;ht<J.length;ht++){const kt=J[ht];v.format!==vn?Rt!==null?Vt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,0,0,kt.width,kt.height,Rt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,Dt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,0,0,kt.width,kt.height,Rt,gt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,Dt,kt.width,kt.height,0,Rt,gt,kt.data)}}}else{if(J=v.mipmaps,Vt&&de){J.length>0&&st++;const tt=Bt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Dt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(nt){Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,mt[tt].width,mt[tt].height,Rt,gt,mt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Dt,mt[tt].width,mt[tt].height,0,Rt,gt,mt[tt].data);for(let ht=0;ht<J.length;ht++){const Qt=J[ht].image[tt].image;Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,0,0,Qt.width,Qt.height,Rt,gt,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,Dt,Qt.width,Qt.height,0,Rt,gt,Qt.data)}}else{Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Rt,gt,mt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Dt,Rt,gt,mt[tt]);for(let ht=0;ht<J.length;ht++){const kt=J[ht];Vt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,0,0,Rt,gt,kt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,Dt,Rt,gt,kt.image[tt])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),j.__version=W.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function it(R,v,U,z,W,j){const vt=r.convert(U.format,U.colorSpace),rt=r.convert(U.type),pt=E(U.internalFormat,vt,rt,U.colorSpace);if(!n.get(v).__hasExternalTextures){const nt=Math.max(1,v.width>>j),mt=Math.max(1,v.height>>j);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,j,pt,nt,mt,v.depth,0,vt,rt,null):e.texImage2D(W,j,pt,nt,mt,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,W,n.get(U).__webglTexture,0,ne(v)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,W,n.get(U).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(R,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const z=v.depthTexture,W=z&&z.isDepthTexture?z.type:null,j=y(v.stencilBuffer,W),vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=ne(v);At(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,j,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,R)}else{const z=v.textures;for(let W=0;W<z.length;W++){const j=z[W],vt=r.convert(j.format,j.colorSpace),rt=r.convert(j.type),pt=E(j.internalFormat,vt,rt,j.colorSpace),Ot=ne(v);U&&At(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,pt,v.width,v.height):At(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,pt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const z=n.get(v.depthTexture).__webglTexture,W=ne(v);if(v.depthTexture.format===ws)At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(v.depthTexture.format===Cs)At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Gt(R){const v=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ft(v.__webglFramebuffer,R)}else if(U){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]=i.createRenderbuffer(),wt(v.__webglDepthbuffer[z],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),wt(v.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(R,v,U){const z=n.get(R);v!==void 0&&it(z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Gt(R)}function $t(R){const v=R.texture,U=n.get(R),z=n.get(v);R.addEventListener("dispose",A);const W=R.textures,j=R.isWebGLCubeRenderTarget===!0,vt=W.length>1;if(vt||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=v.version,o.memory.textures++),j){U.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[rt]=[];for(let pt=0;pt<v.mipmaps.length;pt++)U.__webglFramebuffer[rt][pt]=i.createFramebuffer()}else U.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)U.__webglFramebuffer[rt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,pt=W.length;rt<pt;rt++){const Ot=n.get(W[rt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&At(R)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let rt=0;rt<W.length;rt++){const pt=W[rt];U.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[rt]);const Ot=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),mt=E(pt.internalFormat,Ot,nt,pt.colorSpace,R.isXRRenderTarget===!0),qt=ne(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,U.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),wt(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)it(U.__webglFramebuffer[rt][pt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,pt);else it(U.__webglFramebuffer[rt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,pt=W.length;rt<pt;rt++){const Ot=W[rt],nt=n.get(Ot);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Mt(i.TEXTURE_2D,Ot),it(U.__webglFramebuffer,R,Ot,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Ot)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,z.__webglTexture),Mt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)it(U.__webglFramebuffer[pt],R,v,i.COLOR_ATTACHMENT0,rt,pt);else it(U.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,rt,0);m(v)&&d(rt),e.unbindTexture()}R.depthBuffer&&Gt(R)}function ge(R){const v=R.textures;for(let U=0,z=v.length;U<z;U++){const W=v[U];if(m(W)){const j=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(W).__webglTexture;e.bindTexture(j,vt),d(j),e.unbindTexture()}}}const L=[],_e=[];function te(R){if(R.samples>0){if(At(R)===!1){const v=R.textures,U=R.width,z=R.height;let W=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(R),rt=v.length>1;if(rt)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[pt]);const Ot=n.get(v[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,U,z,0,0,U,z,W,i.NEAREST),l===!0&&(L.length=0,_e.length=0,L.push(i.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(j),_e.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[pt]);const Ot=n.get(v[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ne(R){return Math.min(s.maxSamples,R.samples)}function At(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(R){const v=o.render.frame;c.get(R)!==v&&(c.set(R,v),R.update())}function zt(R,v){const U=R.colorSpace,z=R.format,W=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==fi&&U!==oi&&(le.getTransfer(U)===fe?(z!==vn||W!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=Yt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=At}function Dm(i,t){function e(n,s=oi){let r;const o=le.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.BYTE;if(n===Lh)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===kh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===vn)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Fh)return i.LUMINANCE_ALPHA;if(n===ws)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===Oh)return i.RED;if(n===Ya)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Vr||n===Wr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===xa||n===va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===xa)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Ma||n===wa||n===ba||n===Sa||n===Ta||n===Ea||n===Aa||n===Ca||n===Ra||n===Pa||n===Ia||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===ka||n===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===Na||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class km extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ct extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Um={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(h,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],p=c.position.distanceTo(u.position),f=.02,_=.005;h.inputState.pinching&&p>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
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

}`;class Om{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ui({vertexShader:Nm,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zm extends Is{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,p=null,f=null,_=null;const x=new Om,m=e.getContextAttributes();let d=null,E=null;const y=[],b=[],k=new Wt;let A=null;const I=new Ze;I.layers.enable(1),I.viewport=new me;const H=new Ze;H.layers.enable(2),H.viewport=new me;const T=[I,H],M=new km;M.layers.enable(1),M.layers.enable(2);let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=y[$];return it===void 0&&(it=new Ko,y[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=y[$];return it===void 0&&(it=new Ko,y[$]=it),it.getGripSpace()},this.getHand=function($){let it=y[$];return it===void 0&&(it=new Ko,y[$]=it),it.getHandSpace()};function N($){const it=b.indexOf($.inputSource);if(it===-1)return;const wt=y[it];wt!==void 0&&(wt.update($.inputSource,$.frame,h||o),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<y.length;$++){const it=b[$];it!==null&&(b[$]=null,y[$].disconnect(it))}D=null,q=null,x.reset(),t.setRenderTarget(d),f=null,p=null,u=null,s=null,E=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new zi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,wt=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Cs:ws,wt=m.stencil?As:Oi);const Gt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Gt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),E=new zi(p.textureWidth,p.textureHeight,{format:vn,type:Xn,depthTexture:new ec(p.textureWidth,p.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y($){for(let it=0;it<$.removed.length;it++){const wt=$.removed[it],ft=b.indexOf(wt);ft>=0&&(b[ft]=null,y[ft].disconnect(wt))}for(let it=0;it<$.added.length;it++){const wt=$.added[it];let ft=b.indexOf(wt);if(ft===-1){for(let Yt=0;Yt<y.length;Yt++)if(Yt>=b.length){b.push(wt),ft=Yt;break}else if(b[Yt]===null){b[Yt]=wt,ft=Yt;break}if(ft===-1)break}const Gt=y[ft];Gt&&Gt.connect(wt)}}const K=new C,Q=new C;function Z($,it,wt){K.setFromMatrixPosition(it.matrixWorld),Q.setFromMatrixPosition(wt.matrixWorld);const ft=K.distanceTo(Q),Gt=it.projectionMatrix.elements,Yt=wt.projectionMatrix.elements,$t=Gt[14]/(Gt[10]-1),ge=Gt[14]/(Gt[10]+1),L=(Gt[9]+1)/Gt[5],_e=(Gt[9]-1)/Gt[5],te=(Gt[8]-1)/Gt[0],ne=(Yt[8]+1)/Yt[0],At=$t*te,Me=$t*ne,zt=ft/(-te+ne),Bt=zt*-te;it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=$t+zt,v=ge+zt,U=At-Bt,z=Me+(ft-Bt),W=L*ge/v*R,j=_e*ge/v*R;$.projectionMatrix.makePerspective(U,z,W,j,R,v),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function at($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;x.texture!==null&&($.near=x.depthNear,$.far=x.depthFar),M.near=H.near=I.near=$.near,M.far=H.far=I.far=$.far,(D!==M.near||q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,q=M.far,I.near=D,I.far=q,H.near=D,H.far=q,I.updateProjectionMatrix(),H.updateProjectionMatrix(),$.updateProjectionMatrix());const it=$.parent,wt=M.cameras;at(M,it);for(let ft=0;ft<wt.length;ft++)at(wt[ft],it);wt.length===2?Z(M,I,H):M.projectionMatrix.copy(I.projectionMatrix),dt($,M,it)};function dt($,it,wt){wt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Mt=null;function Xt($,it){if(c=it.getViewerPose(h||o),_=it,c!==null){const wt=c.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ft=!1;wt.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let Yt=0;Yt<wt.length;Yt++){const $t=wt[Yt];let ge=null;if(f!==null)ge=f.getViewport($t);else{const _e=u.getViewSubImage(p,$t);ge=_e.viewport,Yt===0&&(t.setRenderTargetTextures(E,_e.colorTexture,p.ignoreDepthValues?void 0:_e.depthStencilTexture),t.setRenderTarget(E))}let L=T[Yt];L===void 0&&(L=new Ze,L.layers.enable(Yt),L.viewport=new me,T[Yt]=L),L.matrix.fromArray($t.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray($t.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ge.x,ge.y,ge.width,ge.height),Yt===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(L)}const Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Yt=u.getDepthInformation(wt[0]);Yt&&Yt.isValid&&Yt.texture&&x.init(t,Yt,s.renderState)}}for(let wt=0;wt<y.length;wt++){const ft=b[wt],Gt=y[wt];ft!==null&&Gt!==void 0&&Gt.update(ft,it,h||o)}Mt&&Mt($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),_=null}const ee=new Qh;ee.setAnimationLoop(Xt),this.setAnimationLoop=function($){Mt=$},this.dispose=function(){}}}const bi=new An,Bm=new ye;function Hm(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,y):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Je&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Je&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),y=E.envMap,b=E.envMapRotation;y&&(m.envMap.value=y,bi.copy(b),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Je&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const b=y.program;n.uniformBlockBinding(E,b)}function h(E,y){let b=s[E.id];b===void 0&&(_(E),b=c(E),s[E.id]=b,E.addEventListener("dispose",m));const k=y.program;n.updateUBOMapping(E,k);const A=t.render.frame;r[E.id]!==A&&(p(E),r[E.id]=A)}function c(E){const y=u();E.__bindingPointIndex=y;const b=i.createBuffer(),k=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,k,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const y=s[E.id],b=E.uniforms,k=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,I=b.length;A<I;A++){const H=Array.isArray(b[A])?b[A]:[b[A]];for(let T=0,M=H.length;T<M;T++){const D=H[T];if(f(D,A,T,k)===!0){const q=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let Y=0;Y<N.length;Y++){const K=N[Y],Q=x(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,q+G,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,y,b,k){const A=E.value,I=y+"_"+b;if(k[I]===void 0)return typeof A=="number"||typeof A=="boolean"?k[I]=A:k[I]=A.clone(),!0;{const H=k[I];if(typeof A=="number"||typeof A=="boolean"){if(H!==A)return k[I]=A,!0}else if(H.equals(A)===!1)return H.copy(A),!0}return!1}function _(E){const y=E.uniforms;let b=0;const k=16;for(let I=0,H=y.length;I<H;I++){const T=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,D=T.length;M<D;M++){const q=T[M],N=Array.isArray(q.value)?q.value:[q.value];for(let G=0,Y=N.length;G<Y;G++){const K=N[G],Q=x(K),Z=b%k;Z!==0&&k-Z<Q.boundary&&(b+=k-Z),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=Q.storage}}}const A=b%k;return A>0&&(b+=k-A),E.__size=b,E.__cache={},this}function x(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:h,dispose:d}}class Vm{constructor(t={}){const{canvas:e=Ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const f=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=li,this.toneMappingExposure=1;const y=this;let b=!1,k=0,A=0,I=null,H=-1,T=null;const M=new me,D=new me;let q=null;const N=new Nt(0);let G=0,Y=e.width,K=e.height,Q=1,Z=null,at=null;const dt=new me(0,0,Y,K),Mt=new me(0,0,Y,K);let Xt=!1;const ee=new Qa;let $=!1,it=!1;const wt=new ye,ft=new C,Gt=new me,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function ge(){return I===null?Q:1}let L=n;function _e(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ha}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),L===null){const O="webgl2";if(L=_e(O,w),L===null)throw _e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let te,ne,At,Me,zt,Bt,R,v,U,z,W,j,vt,rt,pt,Ot,nt,mt,qt,Rt,gt,Dt,Vt,de;function F(){te=new Zp(L),te.init(),Dt=new Dm(L,te),ne=new Wp(L,te,t,Dt),At=new Pm(L),Me=new Qp(L),zt=new gm,Bt=new Lm(L,te,At,zt,ne,Dt,Me),R=new Yp(y),v=new jp(y),U=new ru(L),Vt=new Gp(L,U),z=new $p(L,U,Me,Vt),W=new e0(L,z,U,Me),qt=new t0(L,ne,Bt),Ot=new Xp(zt),j=new mm(y,R,v,te,ne,Vt,Ot),vt=new Hm(y,zt),rt=new xm,pt=new Sm(te),mt=new Hp(y,R,v,At,W,p,l),nt=new Rm(y,W,ne),de=new Gm(L,Me,ne,At),Rt=new Vp(L,te,Me),gt=new Jp(L,te,Me),Me.programs=j.programs,y.capabilities=ne,y.extensions=te,y.properties=zt,y.renderLists=rt,y.shadowMap=nt,y.state=At,y.info=Me}F();const st=new zm(y,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(Y,K,!1))},this.getSize=function(w){return w.set(Y,K)},this.setSize=function(w,O,V=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,K=O,e.width=Math.floor(w*Q),e.height=Math.floor(O*Q),V===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Y*Q,K*Q).floor()},this.setDrawingBufferSize=function(w,O,V){Y=w,K=O,Q=V,e.width=Math.floor(w*V),e.height=Math.floor(O*V),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(dt)},this.setViewport=function(w,O,V,X){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,O,V,X),At.viewport(M.copy(dt).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(Mt)},this.setScissor=function(w,O,V,X){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,O,V,X),At.scissor(D.copy(Mt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){At.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(w=!0,O=!0,V=!0){let X=0;if(w){let B=!1;if(I!==null){const lt=I.texture.format;B=lt===Ka||lt===qa||lt===Ya}if(B){const lt=I.texture.type,_t=lt===Xn||lt===Oi||lt===er||lt===As||lt===Wa||lt===Xa,St=mt.getClearColor(),Tt=mt.getClearAlpha(),Ut=St.r,Ft=St.g,It=St.b;_t?(f[0]=Ut,f[1]=Ft,f[2]=It,f[3]=Tt,L.clearBufferuiv(L.COLOR,0,f)):(_[0]=Ut,_[1]=Ft,_[2]=It,_[3]=Tt,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}O&&(X|=L.DEPTH_BUFFER_BIT),V&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),rt.dispose(),pt.dispose(),zt.dispose(),R.dispose(),v.dispose(),W.dispose(),Vt.dispose(),de.dispose(),j.dispose(),st.dispose(),st.removeEventListener("sessionstart",bn),st.removeEventListener("sessionend",rl),_i.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=Me.autoReset,O=nt.enabled,V=nt.autoUpdate,X=nt.needsUpdate,B=nt.type;F(),Me.autoReset=w,nt.enabled=O,nt.autoUpdate=V,nt.needsUpdate=X,nt.type=B}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kt(w){const O=w.target;O.removeEventListener("dispose",kt),Qt(O)}function Qt(w){Ae(w),zt.remove(w)}function Ae(w){const O=zt.get(w).programs;O!==void 0&&(O.forEach(function(V){j.releaseProgram(V)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,V,X,B,lt){O===null&&(O=Yt);const _t=B.isMesh&&B.matrixWorld.determinant()<0,St=_c(w,O,V,X,B);At.setMaterial(X,_t);let Tt=V.index,Ut=1;if(X.wireframe===!0){if(Tt=z.getWireframeAttribute(V),Tt===void 0)return;Ut=2}const Ft=V.drawRange,It=V.attributes.position;let se=Ft.start*Ut,Se=(Ft.start+Ft.count)*Ut;lt!==null&&(se=Math.max(se,lt.start*Ut),Se=Math.min(Se,(lt.start+lt.count)*Ut)),Tt!==null?(se=Math.max(se,0),Se=Math.min(Se,Tt.count)):It!=null&&(se=Math.max(se,0),Se=Math.min(Se,It.count));const Te=Se-se;if(Te<0||Te===1/0)return;Vt.setup(B,X,St,V,Tt);let Qe,re=Rt;if(Tt!==null&&(Qe=U.get(Tt),re=gt,re.setIndex(Qe)),B.isMesh)X.wireframe===!0?(At.setLineWidth(X.wireframeLinewidth*ge()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(B.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),At.setLineWidth(Ct*ge()),B.isLineSegments?re.setMode(L.LINES):B.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else B.isPoints?re.setMode(L.POINTS):B.isSprite&&re.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)re.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ct=B._multiDrawStarts,Ue=B._multiDrawCounts,oe=B._multiDrawCount,dn=Tt?U.get(Tt).bytesPerElement:1,Wi=zt.get(X).currentProgram.getUniforms();for(let tn=0;tn<oe;tn++)Wi.setValue(L,"_gl_DrawID",tn),re.render(Ct[tn]/dn,Ue[tn])}else if(B.isInstancedMesh)re.renderInstances(se,Te,B.count);else if(V.isInstancedBufferGeometry){const Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ue=Math.min(V.instanceCount,Ct);re.renderInstances(se,Te,Ue)}else re.render(se,Te)};function ke(w,O,V){w.transparent===!0&&w.side===ln&&w.forceSinglePass===!1?(w.side=Je,w.needsUpdate=!0,hr(w,O,V),w.side=di,w.needsUpdate=!0,hr(w,O,V),w.side=ln):hr(w,O,V)}this.compile=function(w,O,V=null){V===null&&(V=w),m=pt.get(V),m.init(O),E.push(m),V.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),w!==V&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const X=new Set;return w.traverse(function(B){const lt=B.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){const St=lt[_t];ke(St,V,B),X.add(St)}else ke(lt,V,B),X.add(lt)}),E.pop(),m=null,X},this.compileAsync=function(w,O,V=null){const X=this.compile(w,O,V);return new Promise(B=>{function lt(){if(X.forEach(function(_t){zt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){B(w);return}setTimeout(lt,10)}te.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ie=null;function Pn(w){ie&&ie(w)}function bn(){_i.stop()}function rl(){_i.start()}const _i=new Qh;_i.setAnimationLoop(Pn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){ie=w,st.setAnimationLoop(w),w===null?_i.stop():_i.start()},st.addEventListener("sessionstart",bn),st.addEventListener("sessionend",rl),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(O),O=st.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,I),m=pt.get(w,E.length),m.init(O),E.push(m),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(wt),it=this.localClippingEnabled,$=Ot.init(this.clippingPlanes,it),x=rt.get(w,d.length),x.init(),d.push(x),st.enabled===!0&&st.isPresenting===!0){const lt=y.xr.getDepthSensingMesh();lt!==null&&vo(lt,O,-1/0,y.sortObjects)}vo(w,O,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(Z,at),$t=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,$t&&mt.addToRenderList(x,w),this.info.render.frame++,$===!0&&Ot.beginShadows();const V=m.state.shadowsArray;nt.render(V,w,O),$===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,B=x.transmissive;if(m.setupLights(),O.isArrayCamera){const lt=O.cameras;if(B.length>0)for(let _t=0,St=lt.length;_t<St;_t++){const Tt=lt[_t];al(X,B,w,Tt)}$t&&mt.render(w);for(let _t=0,St=lt.length;_t<St;_t++){const Tt=lt[_t];ol(x,w,Tt,Tt.viewport)}}else B.length>0&&al(X,B,w,O),$t&&mt.render(w),ol(x,w,O);I!==null&&(Bt.updateMultisampleRenderTarget(I),Bt.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(y,w,O),Vt.resetDefaultState(),H=-1,T=null,E.pop(),E.length>0?(m=E[E.length-1],$===!0&&Ot.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function vo(w,O,V,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){X&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(wt);const _t=W.update(w),St=w.material;St.visible&&x.push(w,_t,St,V,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const _t=W.update(w),St=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Gt.copy(_t.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(wt)),Array.isArray(St)){const Tt=_t.groups;for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++){const It=Tt[Ut],se=St[It.materialIndex];se&&se.visible&&x.push(w,_t,se,V,Gt.z,It)}}else St.visible&&x.push(w,_t,St,V,Gt.z,null)}}const lt=w.children;for(let _t=0,St=lt.length;_t<St;_t++)vo(lt[_t],O,V,X)}function ol(w,O,V,X){const B=w.opaque,lt=w.transmissive,_t=w.transparent;m.setupLightsView(V),$===!0&&Ot.setGlobalState(y.clippingPlanes,V),X&&At.viewport(M.copy(X)),B.length>0&&lr(B,O,V),lt.length>0&&lr(lt,O,V),_t.length>0&&lr(_t,O,V),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function al(w,O,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new zi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?rr:Xn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const lt=m.state.transmissionRenderTarget[X.id],_t=X.viewport||M;lt.setSize(_t.z,_t.w);const St=y.getRenderTarget();y.setRenderTarget(lt),y.getClearColor(N),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),$t?mt.render(V):y.clear();const Tt=y.toneMapping;y.toneMapping=li;const Ut=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),$===!0&&Ot.setGlobalState(y.clippingPlanes,X),lr(w,V,X),Bt.updateMultisampleRenderTarget(lt),Bt.updateRenderTargetMipmap(lt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let It=0,se=O.length;It<se;It++){const Se=O[It],Te=Se.object,Qe=Se.geometry,re=Se.material,Ct=Se.group;if(re.side===ln&&Te.layers.test(X.layers)){const Ue=re.side;re.side=Je,re.needsUpdate=!0,ll(Te,V,X,Qe,re,Ct),re.side=Ue,re.needsUpdate=!0,Ft=!0}}Ft===!0&&(Bt.updateMultisampleRenderTarget(lt),Bt.updateRenderTargetMipmap(lt))}y.setRenderTarget(St),y.setClearColor(N,G),Ut!==void 0&&(X.viewport=Ut),y.toneMapping=Tt}function lr(w,O,V){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,lt=w.length;B<lt;B++){const _t=w[B],St=_t.object,Tt=_t.geometry,Ut=X===null?_t.material:X,Ft=_t.group;St.layers.test(V.layers)&&ll(St,O,V,Tt,Ut,Ft)}}function ll(w,O,V,X,B,lt){w.onBeforeRender(y,O,V,X,B,lt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.transparent===!0&&B.side===ln&&B.forceSinglePass===!1?(B.side=Je,B.needsUpdate=!0,y.renderBufferDirect(V,O,X,B,w,lt),B.side=di,B.needsUpdate=!0,y.renderBufferDirect(V,O,X,B,w,lt),B.side=ln):y.renderBufferDirect(V,O,X,B,w,lt),w.onAfterRender(y,O,V,X,B,lt)}function hr(w,O,V){O.isScene!==!0&&(O=Yt);const X=zt.get(w),B=m.state.lights,lt=m.state.shadowsArray,_t=B.state.version,St=j.getParameters(w,B.state,lt,O,V),Tt=j.getProgramCacheKey(St);let Ut=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?v:R).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",kt),Ut=new Map,X.programs=Ut);let Ft=Ut.get(Tt);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===_t)return cl(w,St),Ft}else St.uniforms=j.getUniforms(w),w.onBeforeCompile(St,y),Ft=j.acquireProgram(St,Tt),Ut.set(Tt,Ft),X.uniforms=St.uniforms;const It=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=Ot.uniform),cl(w,St),X.needsLights=vc(w),X.lightsStateVersion=_t,X.needsLights&&(It.ambientLightColor.value=B.state.ambient,It.lightProbe.value=B.state.probe,It.directionalLights.value=B.state.directional,It.directionalLightShadows.value=B.state.directionalShadow,It.spotLights.value=B.state.spot,It.spotLightShadows.value=B.state.spotShadow,It.rectAreaLights.value=B.state.rectArea,It.ltc_1.value=B.state.rectAreaLTC1,It.ltc_2.value=B.state.rectAreaLTC2,It.pointLights.value=B.state.point,It.pointLightShadows.value=B.state.pointShadow,It.hemisphereLights.value=B.state.hemi,It.directionalShadowMap.value=B.state.directionalShadowMap,It.directionalShadowMatrix.value=B.state.directionalShadowMatrix,It.spotShadowMap.value=B.state.spotShadowMap,It.spotLightMatrix.value=B.state.spotLightMatrix,It.spotLightMap.value=B.state.spotLightMap,It.pointShadowMap.value=B.state.pointShadowMap,It.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function hl(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Yr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function cl(w,O){const V=zt.get(w);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function _c(w,O,V,X,B){O.isScene!==!0&&(O=Yt),Bt.resetTextureUnits();const lt=O.fog,_t=X.isMeshStandardMaterial?O.environment:null,St=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fi,Tt=(X.isMeshStandardMaterial?v:R).get(X.envMap||_t),Ut=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,Se=!!V.morphAttributes.color;let Te=li;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Te=y.toneMapping);const Qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=Qe!==void 0?Qe.length:0,Ct=zt.get(X),Ue=m.state.lights;if($===!0&&(it===!0||w!==T)){const on=w===T&&X.id===H;Ot.setState(X,w,on)}let oe=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ue.state.version||Ct.outputColorSpace!==St||B.isBatchedMesh&&Ct.batching===!1||!B.isBatchedMesh&&Ct.batching===!0||B.isBatchedMesh&&Ct.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ct.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ct.instancing===!1||!B.isInstancedMesh&&Ct.instancing===!0||B.isSkinnedMesh&&Ct.skinning===!1||!B.isSkinnedMesh&&Ct.skinning===!0||B.isInstancedMesh&&Ct.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ct.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ct.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ct.instancingMorph===!1&&B.morphTexture!==null||Ct.envMap!==Tt||X.fog===!0&&Ct.fog!==lt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Ot.numPlanes||Ct.numIntersection!==Ot.numIntersection)||Ct.vertexAlphas!==Ut||Ct.vertexTangents!==Ft||Ct.morphTargets!==It||Ct.morphNormals!==se||Ct.morphColors!==Se||Ct.toneMapping!==Te||Ct.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Ct.__version=X.version);let dn=Ct.currentProgram;oe===!0&&(dn=hr(X,O,B));let Wi=!1,tn=!1,yo=!1;const Ce=dn.getUniforms(),Kn=Ct.uniforms;if(At.useProgram(dn.program)&&(Wi=!0,tn=!0,yo=!0),X.id!==H&&(H=X.id,tn=!0),Wi||T!==w){Ce.setValue(L,"projectionMatrix",w.projectionMatrix),Ce.setValue(L,"viewMatrix",w.matrixWorldInverse);const on=Ce.map.cameraPosition;on!==void 0&&on.setValue(L,ft.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&Ce.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ce.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,tn=!0,yo=!0)}if(B.isSkinnedMesh){Ce.setOptional(L,B,"bindMatrix"),Ce.setOptional(L,B,"bindMatrixInverse");const on=B.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ce.setValue(L,"boneTexture",on.boneTexture,Bt))}B.isBatchedMesh&&(Ce.setOptional(L,B,"batchingTexture"),Ce.setValue(L,"batchingTexture",B._matricesTexture,Bt),Ce.setOptional(L,B,"batchingIdTexture"),Ce.setValue(L,"batchingIdTexture",B._indirectTexture,Bt),Ce.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Ce.setValue(L,"batchingColorTexture",B._colorsTexture,Bt));const Mo=V.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0)&&qt.update(B,V,dn),(tn||Ct.receiveShadow!==B.receiveShadow)&&(Ct.receiveShadow=B.receiveShadow,Ce.setValue(L,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Kn.envMap.value=Tt,Kn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Kn.envMapIntensity.value=O.environmentIntensity),tn&&(Ce.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&xc(Kn,yo),lt&&X.fog===!0&&vt.refreshFogUniforms(Kn,lt),vt.refreshMaterialUniforms(Kn,X,Q,K,m.state.transmissionRenderTarget[w.id]),Yr.upload(L,hl(Ct),Kn,Bt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Yr.upload(L,hl(Ct),Kn,Bt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ce.setValue(L,"center",B.center),Ce.setValue(L,"modelViewMatrix",B.modelViewMatrix),Ce.setValue(L,"normalMatrix",B.normalMatrix),Ce.setValue(L,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const on=X.uniformsGroups;for(let wo=0,yc=on.length;wo<yc;wo++){const dl=on[wo];de.update(dl,dn),de.bind(dl,dn)}}return dn}function xc(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function vc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,O,V){zt.get(w.texture).__webglTexture=O,zt.get(w.depthTexture).__webglTexture=V;const X=zt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const V=zt.get(w);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,V=0){I=w,k=O,A=V;let X=!0,B=null,lt=!1,_t=!1;if(w){const Tt=zt.get(w);Tt.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(L.FRAMEBUFFER,null),X=!1):Tt.__webglFramebuffer===void 0?Bt.setupRenderTarget(w):Tt.__hasExternalTextures&&Bt.rebindTextures(w,zt.get(w.texture).__webglTexture,zt.get(w.depthTexture).__webglTexture);const Ut=w.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(_t=!0);const Ft=zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?B=Ft[O][V]:B=Ft[O],lt=!0):w.samples>0&&Bt.useMultisampledRTT(w)===!1?B=zt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?B=Ft[V]:B=Ft,M.copy(w.viewport),D.copy(w.scissor),q=w.scissorTest}else M.copy(dt).multiplyScalar(Q).floor(),D.copy(Mt).multiplyScalar(Q).floor(),q=Xt;if(At.bindFramebuffer(L.FRAMEBUFFER,B)&&X&&At.drawBuffers(w,B),At.viewport(M),At.scissor(D),At.setScissorTest(q),lt){const Tt=zt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,V)}else if(_t){const Tt=zt.get(w.texture),Ut=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.__webglTexture,V||0,Ut)}H=-1},this.readRenderTargetPixels=function(w,O,V,X,B,lt,_t){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){At.bindFramebuffer(L.FRAMEBUFFER,St);try{const Tt=w.texture,Ut=Tt.format,Ft=Tt.type;if(!ne.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&V>=0&&V<=w.height-B&&L.readPixels(O,V,X,B,Dt.convert(Ut),Dt.convert(Ft),lt)}finally{const Tt=I!==null?zt.get(I).__webglFramebuffer:null;At.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,O,V,X,B,lt,_t){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){At.bindFramebuffer(L.FRAMEBUFFER,St);try{const Tt=w.texture,Ut=Tt.format,Ft=Tt.type;if(!ne.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-X&&V>=0&&V<=w.height-B){const It=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.bufferData(L.PIXEL_PACK_BUFFER,lt.byteLength,L.STREAM_READ),L.readPixels(O,V,X,B,Dt.convert(Ut),Dt.convert(Ft),0),L.flush();const se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Dd(L,se,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,It),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,lt)}finally{L.deleteBuffer(It),L.deleteSync(se)}return lt}}finally{const Tt=I!==null?zt.get(I).__webglFramebuffer:null;At.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.copyFramebufferToTexture=function(w,O=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-V),B=Math.floor(w.image.width*X),lt=Math.floor(w.image.height*X),_t=O!==null?O.x:0,St=O!==null?O.y:0;Bt.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,_t,St,B,lt),At.unbindTexture()},this.copyTextureToTexture=function(w,O,V=null,X=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],O=arguments[2],B=arguments[3]||0,V=null);let lt,_t,St,Tt,Ut,Ft;V!==null?(lt=V.max.x-V.min.x,_t=V.max.y-V.min.y,St=V.min.x,Tt=V.min.y):(lt=w.image.width,_t=w.image.height,St=0,Tt=0),X!==null?(Ut=X.x,Ft=X.y):(Ut=0,Ft=0);const It=Dt.convert(O.format),se=Dt.convert(O.type);Bt.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Se=L.getParameter(L.UNPACK_ROW_LENGTH),Te=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qe=L.getParameter(L.UNPACK_SKIP_PIXELS),re=L.getParameter(L.UNPACK_SKIP_ROWS),Ct=L.getParameter(L.UNPACK_SKIP_IMAGES),Ue=w.isCompressedTexture?w.mipmaps[B]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,Tt),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,Ut,Ft,lt,_t,It,se,Ue.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,Ut,Ft,Ue.width,Ue.height,It,Ue.data):L.texSubImage2D(L.TEXTURE_2D,B,Ut,Ft,lt,_t,It,se,Ue),L.pixelStorei(L.UNPACK_ROW_LENGTH,Se),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct),B===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(w,O,V=null,X=null,B=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,w=arguments[2],O=arguments[3],B=arguments[4]||0);let lt,_t,St,Tt,Ut,Ft,It,se,Se;const Te=w.isCompressedTexture?w.mipmaps[B]:w.image;V!==null?(lt=V.max.x-V.min.x,_t=V.max.y-V.min.y,St=V.max.z-V.min.z,Tt=V.min.x,Ut=V.min.y,Ft=V.min.z):(lt=Te.width,_t=Te.height,St=Te.depth,Tt=0,Ut=0,Ft=0),X!==null?(It=X.x,se=X.y,Se=X.z):(It=0,se=0,Se=0);const Qe=Dt.convert(O.format),re=Dt.convert(O.type);let Ct;if(O.isData3DTexture)Bt.setTexture3D(O,0),Ct=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Bt.setTexture2DArray(O,0),Ct=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Ue=L.getParameter(L.UNPACK_ROW_LENGTH),oe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=L.getParameter(L.UNPACK_SKIP_PIXELS),Wi=L.getParameter(L.UNPACK_SKIP_ROWS),tn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Te.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ct,B,It,se,Se,lt,_t,St,Qe,re,Te.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,B,It,se,Se,lt,_t,St,Qe,Te.data):L.texSubImage3D(Ct,B,It,se,Se,lt,_t,St,Qe,re,Te),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tn),B===0&&O.generateMipmaps&&L.generateMipmap(Ct),At.unbindTexture()},this.initRenderTarget=function(w){zt.get(w).__webglFramebuffer===void 0&&Bt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Bt.setTextureCube(w,0):w.isData3DTexture?Bt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Bt.setTexture2DArray(w,0):Bt.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){k=0,A=0,I=null,At.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ja?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===ao?"display-p3":"srgb"}}class Cn{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new Cn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pi extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return $a("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new C;class to{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new yn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new to(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oc extends Ls{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ls;const Os=new C,hs=new C,cs=new C,ds=new Wt,zs=new Wt,ac=new ye,Lr=new C,Bs=new C,Dr=new C,lh=new Wt,jo=new Wt,hh=new Wt;class Xm extends De{constructor(t=new oc){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new wn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wm(e,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new to(n,3,0,!1)),ls.setAttribute("uv",new to(n,2,3,!1))}this.geometry=ls,this.material=t,this.center=new Wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),ac.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-cs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;kr(Lr.set(-.5,-.5,0),cs,o,hs,s,r),kr(Bs.set(.5,-.5,0),cs,o,hs,s,r),kr(Dr.set(.5,.5,0),cs,o,hs,s,r),lh.set(0,0),jo.set(1,0),hh.set(1,1);let a=t.ray.intersectTriangle(Lr,Bs,Dr,!1,Os);if(a===null&&(kr(Bs.set(-.5,.5,0),cs,o,hs,s,r),jo.set(0,1),a=t.ray.intersectTriangle(Lr,Dr,Bs,!1,Os),a===null))return;const l=t.ray.origin.distanceTo(Os);l<t.near||l>t.far||e.push({distance:l,point:Os.clone(),uv:xn.getInterpolation(Os,Lr,Bs,Dr,lh,jo,hh,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function kr(i,t,e,n,s,r){ds.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(zs.x=r*ds.x-s*ds.y,zs.y=s*ds.x+r*ds.y):zs.copy(ds),i.copy(t),i.x+=zs.x,i.y+=zs.y,i.applyMatrix4(ac)}class Ym extends Ye{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const c=n[s],p=n[s+1]-c,f=(o-c)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Wt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,l=new ye;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new C)}r[0]=new C,o[0]=new C;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),p<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function el(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let p=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;p*=c,f*=c,s(o,a,p,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ur=new C,Zo=new el,$o=new el,Jo=new el;class ch extends qm{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(Ur.subVectors(s[0],s[1]).add(s[0]),h=Ur);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(c),f);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Zo.initNonuniformCatmullRom(h.x,u.x,p.x,c.x,_,x,m),$o.initNonuniformCatmullRom(h.y,u.y,p.y,c.y,_,x,m),Jo.initNonuniformCatmullRom(h.z,u.z,p.z,c.z,_,x,m)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(h.x,u.x,p.x,c.x,this.tension),$o.initCatmullRom(h.y,u.y,p.y,c.y,this.tension),Jo.initCatmullRom(h.z,u.z,p.z,c.z,this.tension));return n.set(Zo.calc(l),$o.calc(l),Jo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class cn extends wn{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],p=[],f=[];let _=0;const x=[],m=n/2;let d=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(p,3)),this.setAttribute("uv",new Be(f,2));function E(){const b=new C,k=new C;let A=0;const I=(e-t)/n;for(let H=0;H<=r;H++){const T=[],M=H/r,D=M*(e-t)+t;for(let q=0;q<=s;q++){const N=q/s,G=N*l+a,Y=Math.sin(G),K=Math.cos(G);k.x=D*Y,k.y=-M*n+m,k.z=D*K,u.push(k.x,k.y,k.z),b.set(Y,I,K).normalize(),p.push(b.x,b.y,b.z),f.push(N,1-M),T.push(_++)}x.push(T)}for(let H=0;H<s;H++)for(let T=0;T<r;T++){const M=x[T][H],D=x[T+1][H],q=x[T+1][H+1],N=x[T][H+1];c.push(M,D,N),c.push(D,q,N),A+=6}h.addGroup(d,A,0),d+=A}function y(b){const k=_,A=new Wt,I=new C;let H=0;const T=b===!0?t:e,M=b===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,m*M,0),p.push(0,M,0),f.push(.5,.5),_++;const D=_;for(let q=0;q<=s;q++){const G=q/s*l+a,Y=Math.cos(G),K=Math.sin(G);I.x=T*K,I.y=m*M,I.z=T*Y,u.push(I.x,I.y,I.z),p.push(0,M,0),A.x=Y*.5+.5,A.y=K*.5*M+.5,f.push(A.x,A.y),_++}for(let q=0;q<s;q++){const N=k+q,G=D+q;b===!0?c.push(G,G+1,N):c.push(G+1,G,N),H+=3}h.addGroup(d,H,b===!0?1:2),d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $e extends wn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new C,p=new C,f=[],_=[],x=[],m=[];for(let d=0;d<=n;d++){const E=[],y=d/n;let b=0;d===0&&o===0?b=.5/e:d===n&&l===Math.PI&&(b=-.5/e);for(let k=0;k<=e;k++){const A=k/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),m.push(A+b,1-y),E.push(h++)}c.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const y=c[d][E+1],b=c[d][E],k=c[d+1][E],A=c[d+1][E+1];(d!==0||o>0)&&f.push(y,b,A),(d!==n-1||l<Math.PI)&&f.push(b,k,A)}this.setIndex(f),this.setAttribute("position",new Be(_,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class co extends wn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new C,u=new C,p=new C;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const x=_/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),p.subVectors(u,c).normalize(),l.push(p.x,p.y,p.z),h.push(_/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const x=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,d=(s+1)*(f-1)+_,E=(s+1)*f+_;o.push(x,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yn extends Ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nl extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mi extends nl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qo=new ye,dh=new C,uh=new C;class lc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uh),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fh=new ye,Hs=new C,ta=new C;class Km extends lc{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hs),ta.copy(n.position),ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ta),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh)}}class Bi extends nl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Km}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jm extends lc{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gi extends nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new jm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ph(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);const S={sky:13625599,fog:14479103,sun:16773849,grass:11069091,grassLight:12447414,grassDark:9427340,path:15653300,wood:13214334,woodDark:11109987,wallCream:16774112,wallPink:16770028,wallMint:14480872,wallLilac:15721722,roofPink:16038084,roofMint:10476744,roofLilac:13351152,roofPeach:16766629,roofBlue:11131120,bearBrown:12159583,bearHoney:14265980,bearCocoa:9398860,bearCream:15917769,snout:16181199,nose:5982783,burden:10129286,burdenStrap:7629410,dressRose:16238804,dressSky:12574965,dressLeaf:13102274,robeWhite:16645622,robeGold:16770728,leaf:10476698,leafPink:16371160,trunk:11569768,flowerYellow:16769162,flowerPink:16757702,flowerBlue:11455487,water:11131120,stone:14209996,light:16774857},mh=new Map;function $m(i,t,e){const n=`${i},${t},${e}`;let s=mh.get(n);return s||(s=new Et(i,t,e),mh.set(n,s)),s}const gh=new Map;function Ee(i){let t=gh.get(i);return t||(t=new Yn({color:i}),gh.set(i,t)),t}function g(i,t,e,n,s=0,r=0,o=0){const a=new ot($m(i,t,e),Ee(n));return a.position.set(s,r,o),a.castShadow=!0,a.receiveShadow=!0,a}const Jm={bear:S.bearBrown,pig:16103104,frog:10803580,rabbit:15985369,cat:13156276,lion:14264416,owl:9074788,mouse:12102300},Qm={bear:S.bearCream,pig:16438490,frog:14085824,rabbit:16644334,cat:15591389,lion:15785147,owl:15261129,mouse:15985891},us=11565370;function Jt(i={}){const t=i.species??"bear",e=i.fur??Jm[t],n=Qm[t],s=i.scale??1,r=new ct,o=b=>{const k=new ct;return k.position.set(.2*b,.55,0),k.add(g(.3,.55,.34,e,0,-.28,0)),k.add(g(.32,.14,.38,n,0,-.5,.02)),r.add(k),k},a=o(-1),l=o(1),h=new ct;h.position.y=.55,r.add(h);const c=i.plump?1.02:.92,u=i.plump?.68:.6,p=i.plump?.78:.6,f=i.plump?.17:.1;h.add(g(c,.78,u,e,0,.4,0)),h.add(g(p,.5,f,n,0,.38,.28)),h.add(g(.52,.44,.46,e,0,1,0)),t==="bear"?h.add(g(.2,.2,.2,e,0,.25,-.34)):t==="pig"?(h.add(g(.12,.12,.16,15703980,.08,.3,-.36)),h.add(g(.12,.12,.12,15703980,.16,.4,-.4))):t==="rabbit"?h.add(g(.24,.24,.2,16777215,0,.28,-.36)):t==="cat"?(h.add(g(.14,.14,.5,e,.2,.3,-.5)),h.add(g(.14,.3,.14,e,.2,.5,-.72))):t==="lion"?(h.add(g(.14,.14,.55,e,.2,.28,-.52)),h.add(g(.22,.22,.22,us,.2,.28,-.84))):t==="mouse"&&h.add(g(.08,.08,.6,14263212,.1,.22,-.5));const _=b=>{const k=new ct;return k.position.set(.55*b,.68,0),k.add(g(.26,.55,.3,e,0,-.22,0)),k.add(g(.28,.14,.32,n,0,-.46,0)),h.add(k),k},x=_(-1),m=_(1),d=new ct;if(d.position.y=1.16,h.add(d),d.add(g(.95,.82,.8,e,0,.4,0)),t==="bear")d.add(g(.24,.24,.16,e,-.36,.9,0)),d.add(g(.24,.24,.16,e,.36,.9,0)),d.add(g(.14,.14,.1,n,-.36,.9,.05)),d.add(g(.14,.14,.1,n,.36,.9,.05)),d.add(g(.4,.3,.18,S.snout,0,.26,.46)),d.add(g(.16,.12,.08,S.nose,0,.34,.56));else if(t==="pig"){const b=g(.26,.26,.14,15703980,-.34,.9,0);b.rotation.z=.5,d.add(b);const k=g(.26,.26,.14,15703980,.34,.9,0);k.rotation.z=-.5,d.add(k),d.add(g(.42,.3,.16,15703980,0,.3,.46)),d.add(g(.07,.12,.04,13070206,-.1,.3,.55)),d.add(g(.07,.12,.04,13070206,.1,.3,.55))}else if(t==="frog"){for(const b of[-1,1])d.add(g(.28,.26,.28,e,.26*b,.94,.16)),d.add(g(.18,.18,.08,16777215,.26*b,.96,.32)),d.add(g(.09,.12,.04,S.nose,.26*b,.96,.37));d.add(g(.5,.06,.05,6192458,0,.2,.41))}else if(t==="rabbit"){for(const b of[-1,1])d.add(g(.2,.7,.14,e,.24*b,1.1,0)),d.add(g(.1,.5,.06,16238804,.24*b,1.1,.06));d.add(g(.3,.22,.14,16777215,0,.26,.44)),d.add(g(.12,.1,.06,15043227,0,.36,.52))}else if(t==="cat"){for(const b of[-1,1]){const k=g(.24,.28,.14,e,.32*b,.92,0);k.rotation.z=-.4*b,d.add(k),d.add(g(.12,.14,.08,16238804,.32*b,.9,.05))}d.add(g(.3,.2,.14,16777215,0,.24,.44)),d.add(g(.1,.08,.06,15043227,0,.32,.52))}else if(t==="lion")d.add(g(1.3,1.2,.34,us,0,.4,-.44)),d.add(g(1.24,.3,.62,us,0,.97,-.12)),d.add(g(.3,1.06,.62,us,-.62,.38,-.12)),d.add(g(.3,1.06,.62,us,.62,.38,-.12)),d.add(g(.9,.26,.6,us,0,-.15,-.1)),d.add(g(.24,.24,.18,e,-.42,1.06,.02)),d.add(g(.24,.24,.18,e,.42,1.06,.02)),d.add(g(.44,.32,.2,S.snout,0,.26,.47)),d.add(g(.16,.12,.08,S.nose,0,.35,.58));else if(t==="owl"){const b=g(.14,.3,.1,e,-.28,1.02,-.04);b.rotation.z=.2,d.add(b);const k=g(.14,.3,.1,e,.28,1.02,-.04);k.rotation.z=-.2,d.add(k),d.add(g(.36,.36,.08,n,-.24,.5,.42)),d.add(g(.36,.36,.08,n,.24,.5,.42)),d.add(g(.16,.16,.16,15245882,0,.32,.5))}else t==="mouse"&&(d.add(g(.3,.3,.1,e,-.32,.98,.02)),d.add(g(.3,.3,.1,e,.32,.98,.02)),d.add(g(.16,.16,.06,14263212,-.32,.98,.07)),d.add(g(.16,.16,.06,14263212,.32,.98,.07)),d.add(g(.26,.2,.16,15985891,0,.24,.44)),d.add(g(.1,.08,.06,14263212,0,.3,.53)),d.add(g(.28,.02,.02,16777215,-.05,.28,.55)),d.add(g(.28,.02,.02,16777215,.05,.28,.55)));t!=="frog"&&(d.add(g(.1,.14,.05,S.nose,-.24,.5,.41)),d.add(g(.1,.14,.05,S.nose,.24,.5,.41))),d.add(g(.12,.08,.04,16233149,-.36,.32,.41)),d.add(g(.12,.08,.04,16233149,.36,.32,.41));const E=i.outfit??"none",y=i.outfitColor??S.dressRose;if(E==="shirt"?(h.add(g(i.plump?1.12:.98,i.plump?.54:.52,i.plump?.8:.7,y,0,i.plump?.53:.52,0)),x.add(g(.32,.28,.36,y,0,-.1,0)),m.add(g(.32,.28,.36,y,0,-.1,0))):E==="dress"?(h.add(g(1,.5,.68,y,0,.12,0)),h.add(g(.96,.4,.7,y,0,.52,0)),h.add(g(.5,.16,.06,16777215,0,.68,.34)),x.add(g(.32,.24,.36,y,0,-.08,0)),m.add(g(.32,.24,.36,y,0,-.08,0))):E==="apron"?(h.add(g(.98,.5,.7,16446435,0,.5,0)),x.add(g(.32,.26,.36,16446435,0,-.1,0)),m.add(g(.32,.26,.36,16446435,0,-.1,0)),h.add(g(.62,.6,.08,y,0,.32,.32)),h.add(g(.3,.14,.06,y,0,.68,.34))):E==="overalls"?(h.add(g(.96,.44,.64,y,0,.2,0)),h.add(g(.44,.4,.08,y,0,.56,.3)),h.add(g(.12,.4,.06,y,-.22,.72,.3)),h.add(g(.12,.4,.06,y,.22,.72,.3))):E==="robe"&&(h.add(g(1.02,.9,.7,y,0,.36,0)),h.add(g(.3,.1,.06,S.robeGold,0,.66,.34)),x.add(g(.34,.4,.38,y,0,-.14,0)),m.add(g(.34,.4,.38,y,0,-.14,0)),d.add(g(.9,.5,.2,y,0,.5,-.45))),i.sling){const b=i.plump?.42:.34,k=g(.14,1.05,.05,9072466,0,.42,b);k.rotation.z=.72,h.add(k);const A=g(.14,1.05,.05,9072466,0,.42,i.plump?-.41:-.33);A.rotation.z=-.72,h.add(A),h.add(g(.24,.12,.7,9072466,-.34,.82,0)),h.add(g(.46,.36,.22,11108958,.5,.02,.1)),h.add(g(.46,.14,.24,9072466,.5,.16,.1)),h.add(g(.1,.1,.06,S.robeGold,.5,.06,.23))}if(i.burden){h.add(g(.88,.62,.54,S.burden,0,.45,-.56)),h.add(g(.7,.5,.46,8880506,0,.96,-.54)),h.add(g(.5,.36,.36,S.burdenStrap,0,1.28,-.52));const b=i.plump?.42:.31;h.add(g(.1,.6,.08,S.burdenStrap,-.3,.45,b)),h.add(g(.1,.6,.08,S.burdenStrap,.3,.45,b))}return r.scale.setScalar(s),{root:r,body:h,head:d,armL:x,armR:m,legL:a,legR:l}}function Lt(i,t,e){const n=e?Math.sin(t*9)*.7:0,s=Math.sin(t*2)*.02;i.legL.rotation.x=n,i.legR.rotation.x=-n,i.armL.rotation.x=-n*.8,i.armR.rotation.x=n*.8,i.body.position.y=.55+(e?Math.abs(Math.sin(t*9))*.06:s),i.head.rotation.z=e?Math.sin(t*4.5)*.04:Math.sin(t*1.5)*.03}const sn={east:60,west:-46,north:-34,south:34,gateHalfWidth:1.9};function tg(i,t,e=5,n=4.4,s=2.6){const r=new ct;r.add(g(e,s,n,i,0,s/2,0));const o=S.woodDark;r.add(g(.22,s,.22,o,-e/2+.11,s/2,n/2+.02)),r.add(g(.22,s,.22,o,e/2-.11,s/2,n/2+.02)),r.add(g(e,.22,.22,o,0,s-.11,n/2+.02));const a=4;for(let l=0;l<a;l++){const h=e+.6-l*(e+.6)/a;r.add(g(h,.5,n+.6,t,0,s+.25+l*.5,0))}r.add(g(.55,2.2,.55,S.stone,e/2-.8,s+1.6,-.8)),r.add(g(.7,.25,.7,12893877,e/2-.8,s+2.75,-.8)),r.add(g(.9,1.5,.16,S.woodDark,0,.75,n/2+.06)),r.add(g(.12,.12,.1,S.roofPeach,.28,.75,n/2+.16));for(const l of[-e/2+1.1,e/2-1.1])r.add(g(.8,.8,.12,S.roofBlue,l,1.5,n/2+.06)),r.add(g(.9,.14,.14,S.woodDark,l,1.06,n/2+.08));return r}function eg(i=!1){const t=new ct,e=i?S.leafPink:S.leaf;return t.add(g(.5,1.6,.5,S.trunk,0,.8,0)),t.add(g(1.9,1.3,1.9,e,0,2.2,0)),t.add(g(1.3,.9,1.3,e,0,3.2,0)),t.add(g(.7,.6,.7,e,0,3.9,0)),t}function ng(){const i=new ct;i.add(g(.18,2.4,.18,S.woodDark,0,1.2,0));const t=g(.4,.4,.4,S.light,0,2.5,0);return t.material=new Yn({color:S.light,emissive:16773296,emissiveIntensity:.6}),i.add(t),i.add(g(.5,.12,.5,S.woodDark,0,2.75,0)),i}function ig(){const i=new ct;return i.add(g(1.6,.8,1.6,S.stone,0,.4,0)),i.add(g(1.2,.1,1.2,S.water,0,.82,0)),i.add(g(.14,1.5,.14,S.woodDark,-.7,1.2,0)),i.add(g(.14,1.5,.14,S.woodDark,.7,1.2,0)),i.add(g(1.8,.35,1.1,S.roofPink,0,2.05,0)),i}function _h(i){const t=new ct;t.add(g(2.6,.9,1.2,S.wood,0,.45,0)),t.add(g(2.8,.14,1.4,S.woodDark,0,.95,0)),t.add(g(.4,.3,.4,S.flowerYellow,-.8,1.15,.1)),t.add(g(.35,.35,.35,16757702,-.1,1.2,-.2)),t.add(g(.45,.25,.3,11455487,.7,1.14,.15)),t.add(g(.14,2.2,.14,S.woodDark,-1.25,1.1,.62)),t.add(g(.14,2.2,.14,S.woodDark,1.25,1.1,.62)),t.add(g(.14,2.2,.14,S.woodDark,-1.25,1.1,-.62)),t.add(g(.14,2.2,.14,S.woodDark,1.25,1.1,-.62));for(let e=0;e<5;e++){const n=e%2===0?i:16775407;t.add(g(.58,.16,1.7,n,-1.16+e*.58,2.28,0))}return t}function sg(){const i=new ct;return i.add(g(.7,.9,.7,S.wood,0,.45,0)),i.add(g(.76,.12,.76,S.woodDark,0,.25,0)),i.add(g(.76,.12,.76,S.woodDark,0,.7,0)),i.add(g(.6,.06,.6,S.water,0,.93,0)),i}function rg(){const i=new ct;return i.add(g(.8,.8,.8,S.wood,0,.4,0)),i.add(g(.7,.7,.7,S.woodDark,.75,.35,.15)),i.add(g(.6,.6,.6,S.wood,.3,1.1,.05)),i}function og(){const i=new ct;return i.add(g(1.4,.9,1,15785374,0,.45,0)),i.add(g(1.44,.14,1.04,14270584,0,.45,0)),i}function ag(){const i=new ct;return i.add(g(.14,2,.14,S.woodDark,-2.2,1,0)),i.add(g(.14,2,.14,S.woodDark,2.2,1,0)),i.add(g(4.4,.05,.05,16775407,0,1.9,0)),i.add(g(.7,.8,.06,S.dressSky,-1.2,1.5,0)),i.add(g(.6,.7,.06,S.dressRose,.1,1.55,0)),i.add(g(.5,.6,.06,S.dressLeaf,1.3,1.6,0)),i}function lg(i){const t=new ct,e=new ct;return e.position.set(0,.42,.16),t.add(g(.32,.28,.42,i,0,.32,-.04)),t.add(g(.16,.1,.16,i,0,.2,-.3)),e.add(g(.2,.2,.2,i,0,0,0)),e.add(g(.1,.06,.12,16757575,0,-.02,.14)),e.add(g(.12,.12,.04,14701674,0,.12,.02)),t.add(e),t.add(g(.05,.16,.05,15247694,-.08,.08,-.02)),t.add(g(.05,.16,.05,15247694,.08,.08,-.02)),{root:t,head:e}}function hg(){const i=new ct;i.add(g(1.15,.75,.65,16446440,0,.68,0)),i.add(g(.36,.1,.4,4865331,-.2,1.04,.05)),i.add(g(.3,.1,.3,4865331,.3,.68,-.15));const t=new ct;t.position.set(.68,.78,0),t.add(g(.36,.34,.32,16446440,0,0,0)),t.add(g(.14,.1,.1,16238804,.2,-.08,0)),t.add(g(.06,.14,.05,15261646,.05,.18,-.14)),t.add(g(.06,.14,.05,15261646,.05,.18,.14)),i.add(t);for(const[n,s]of[[-.4,-.22],[-.4,.22],[.32,-.22],[.32,.22]])i.add(g(.18,.55,.18,15261646,n,.28,s));const e=g(.06,.4,.06,16446440,-.62,.75,0);return e.rotation.x=.3,i.add(e),{root:i,tail:e}}function cg(){const i=new ct;i.add(g(.5,.9,.5,9082784,0,.45,0)),i.add(g(.6,.14,.6,7305858,0,.94,0));const t=new ct;return t.position.set(0,.85,-.2),t.add(g(.5,.1,.1,7305858,0,0,-.2)),i.add(t),i.add(g(.14,.4,.14,9082784,.32,.5,.2)),i.add(g(1.3,.35,.7,S.stone,.55,.18,.55)),i.add(g(1.1,.1,.5,S.water,.55,.35,.55)),i}function dg(){const i=new ct;return i.add(g(.6,.24,.6,13215845,0,.12,0)),i.add(g(.46,.12,.46,14465918,0,.24,0)),i}function ea(i,t,e){return g(.16,.2,.16,i,t,.34,e)}function fs(i){const t=new ct,e=Math.max(2,Math.round(i/1.2));for(let n=0;n<e;n++)t.add(g(.14,.8,.14,S.wood,-i/2+n*i/(e-1),.4,0));return t.add(g(i,.12,.1,S.wood,0,.62,0)),t.add(g(i,.12,.1,S.wood,0,.32,0)),t}function ug(i){const t=new ct,e=[],n=fg(7),s=new ot(new Et(220,1,220),Ee(S.grass));s.position.y=-.5,s.receiveShadow=!0,t.add(s);for(let v=0;v<160;v++){const U=(n()-.5)*180,z=(n()-.5)*160;if(Math.abs(U)<30&&Math.abs(z)<26)continue;const W=n()>.5?S.grassLight:S.grassDark,j=g(1+n()*2,.12,1+n()*2,W,U,.06,z);j.castShadow=!1,t.add(j)}const r=(v,U,z,W)=>{const j=g(z,.14,W,S.path,v,.07,U);j.castShadow=!1,t.add(j)};r(0,0,16,16),r(33.5,0,51,5),r(63,0,8,4),r(-16,0,16,4.5),r(0,-14,4.5,14),r(0,13,4.5,12);const o=[[-10,-12,.35,S.wallCream,S.roofPink],[10,-13,-.3,S.wallPink,S.roofMint],[-14,10,.5,S.wallMint,S.roofLilac],[12,11,-.6,S.wallLilac,S.roofPeach],[-26,-2,1.35,S.wallCream,S.roofBlue],[22,-8,-1.1,S.wallPink,S.roofPink]],a=[];for(const[v,U,z,W,j]of o){const vt=tg(W,j);vt.position.set(v,0,U),vt.rotation.y=z,t.add(vt),e.push({x:v,z:U,r:3.6});const rt=5/2-.8,pt=-.8;a.push(new C(v+rt*Math.cos(z)+pt*Math.sin(z),2.6+3.1,U-rt*Math.sin(z)+pt*Math.cos(z)))}const l=ig();l.position.set(0,0,0),t.add(l),e.push({x:0,z:0,r:1.6});const h=[{id:"well",name:"the Well",x:0,z:0,r:2.4}],c=cg();c.position.set(-5,0,-3.5),t.add(c),e.push({x:-5,z:-3.5,r:.9}),h.push({id:"pump",name:"the Water Pump",x:-5,z:-3.5,r:2.2});const u=[];[[21.2,19.4,15985369],[22.4,18.6,12159583]].forEach(([v,U,z],W)=>{const{root:j,head:vt}=lg(z);j.position.set(v,0,U),j.rotation.y=W*1.4,t.add(j),e.push({x:v,z:U,r:.35}),u.push({root:j,head:vt,phase:W*2.4})});const f=dg();f.position.set(23.4,0,19.8),t.add(f),f.add(ea(16775407,-.12,.05)),f.add(ea(15985369,.1,-.05)),f.add(ea(16774112,.02,.15)),e.push({x:23.4,z:19.8,r:.5}),h.push({id:"chickens",name:"the Chickens",x:21.8,z:19,r:2.4}),h.push({id:"nest",name:"the Nest",x:23.4,z:19.8,r:1.8});const _=fs(4.4);_.position.set(28,0,20.5),t.add(_);const x=fs(4.4);x.position.set(28,0,24.5),t.add(x);const m=fs(4.4);m.position.set(25.8,0,22.5),m.rotation.y=Math.PI/2,t.add(m);const d=fs(4.4);d.position.set(30.2,0,22.5),d.rotation.y=Math.PI/2,t.add(d);const E=hg();E.root.position.set(28,0,22.5),E.root.rotation.y=-.6,t.add(E.root),e.push({x:28,z:22.5,r:1.3}),h.push({id:"cow",name:"the Cow",x:28,z:22.5,r:2.6});const y=[[-18,-18,!0],[18,-19,!1],[-20,17,!1],[20,18,!0],[-32,-12,!1],[-34,8,!0],[30,14,!1],[8,-22,!0],[-8,22,!1],[36,-14,!0],[44,10,!1],[52,-8,!0]];for(const[v,U,z]of y){const W=eg(z);W.position.set(v,0,U),W.rotation.y=n()*Math.PI,t.add(W),e.push({x:v,z:U,r:.9})}for(const[v,U]of[[14,3.4],[26,-3.4],[38,3.4],[-14,3.4]]){const z=ng();z.position.set(v,0,U),t.add(z),e.push({x:v,z:U,r:.4})}const b=_h(S.roofPink);b.position.set(-4,0,8.5),b.rotation.y=Math.PI,t.add(b),e.push({x:-4,z:8.5,r:1.8});const k=_h(S.roofBlue);k.position.set(6,0,-8),k.rotation.y=.2,t.add(k),e.push({x:6,z:-8,r:1.8});const A=sg();A.position.set(8.2,0,9),t.add(A),e.push({x:8.2,z:9,r:.6});const I=rg();I.position.set(-13,0,13),I.rotation.y=.4,t.add(I),e.push({x:-13,z:13,r:1.1});for(const[v,U]of[[16,18.5],[19.5,17]]){const z=og();z.position.set(v,0,U),z.rotation.y=n()*Math.PI,t.add(z),e.push({x:v,z:U,r:.9})}const H=ag();H.position.set(-6,0,-10.5),H.rotation.y=.35,t.add(H);const T=fs(7);T.position.set(-10,0,-8.2),t.add(T);const M=fs(6);M.position.set(-15.4,0,-12),M.rotation.y=Math.PI/2,t.add(M);const D=[S.flowerYellow,S.flowerPink,S.flowerBlue];for(let v=0;v<70;v++){const U=(n()-.5)*120,z=(n()-.5)*90,W=g(.22,.22,.22,D[v%3],U,.2,z);W.castShadow=!1,t.add(W),t.add(g(.08,.2,.08,S.leaf,U,.06,z))}const q=16249834,N=15722972,G=14670024,Y=2.8,K=1.2,Q=(v,U,z,W,j)=>{const vt=z-v,rt=W-U,pt=Math.hypot(vt,rt),Ot=Math.round(pt/6),nt=Math.abs(vt)>Math.abs(rt);for(let mt=0;mt<Ot;mt++){const qt=v+vt*(mt+.5)/Ot,Rt=U+rt*(mt+.5)/Ot,gt=pt/Ot,Dt=nt?gt:K,Vt=nt?K:gt,de=g(Dt,Y,Vt,mt%2===0?q:N,qt,Y/2,Rt);t.add(de),t.add(g(nt?Dt:K+.06,.09,nt?K+.06:Vt,G,qt,1,Rt)),t.add(g(nt?Dt:K+.06,.09,nt?K+.06:Vt,G,qt,1.9,Rt)),t.add(g(Dt+.2,.28,Vt+.2,G,qt,Y+.14,Rt));const F=Math.floor(gt/1.9);for(let st=0;st<F;st++){const J=-gt/2+(st+.5)*(gt/F);t.add(g(nt?.85:K+.1,.55,nt?K+.1:.85,q,qt+(nt?J:0),Y+.55,Rt+(nt?0:J)))}}},Z=(v,U,z=!1)=>{const W=z?2.4:2,j=z?5.2:4.2;t.add(g(W,j,W,q,v,j/2,U)),t.add(g(W+.5,.35,W+.5,G,v,j+.18,U));for(const[vt,rt]of[[-1,-1],[-1,1],[1,-1],[1,1]])t.add(g(.55,.55,.55,q,v+vt*W/2.6,j+.6,U+rt*W/2.6));t.add(g(W-.4,.6,W-.4,S.roofPink,v,j+.75,U)),e.push({x:v,z:U,r:W*.75})},at=sn.east,dt=sn.west,Mt=sn.north,Xt=sn.south;Q(dt,Mt,at,Mt),Q(dt,Xt,at,Xt),Q(dt,Mt,dt,Xt),Q(at,Mt,at,-4.8),Q(at,4.8,at,Xt),Z(dt,Mt),Z(at,Mt),Z(dt,Xt),Z(at,Xt),Z(at,-3.6,!0),Z(at,3.6,!0),t.add(g(.9,1.1,5.4,q,at,4.3,0)),t.add(g(1.1,.3,5.8,G,at,4.95,0)),t.add(g(.7,.5,4.6,S.roofPink,at,5.3,0));const ee={open:!1},$=v=>{const U=new ct;U.position.set(at,0,2.35*v);const z=g(.35,3.4,2.3,S.woodDark,0,1.7,-1.15*v);return U.add(z),U.add(g(.4,.16,2.3,9072466,0,.9,-1.15*v)),U.add(g(.4,.16,2.3,9072466,0,2.4,-1.15*v)),U.add(g(.12,.3,.3,S.robeGold,.2,1.7,-2*v)),t.add(U),U},it=$(-1),wt=$(1);for(const[v,U]of[[-30,-20],[18,24],[-24,18]])t.add(g(1.4,.8,1.2,S.stone,v,.4,U)),t.add(g(.8,.5,.8,12893877,v+1.1,.25,U+.4)),t.add(g(.5,.3,.5,S.grassDark,v+.4,.85,U-.3));const ft=new ct,Gt=new Pt({color:16767306,transparent:!0,opacity:.8,fog:!1}),Yt=new ot(new Et(2.6,40,2.6),Gt);Yt.position.y=20,ft.add(Yt);const $t=new ot(new Et(1.3,44,1.3),new Pt({color:16776160,transparent:!0,opacity:.95,fog:!1}));$t.position.y=22,ft.add($t);const ge=new Pt({color:16771194,fog:!1}),L=new ot(new Et(3.4,3.4,3.4),ge);L.position.y=42,L.rotation.set(Math.PI/4,0,Math.PI/4),ft.add(L);const _e=new ot(new Et(5,5,5),new Pt({color:16774072,transparent:!0,opacity:.5,fog:!1}));_e.position.y=42,_e.rotation.set(0,Math.PI/4,Math.PI/4),ft.add(_e);const te=new Bi(16771194,3.5,40);te.position.y=4,ft.add(te),ft.position.set(64.5,0,0),ft.visible=!1,t.add(ft);const ne=[];for(const v of a)for(let U=0;U<3;U++){const z=new ot(new Et(.5,.5,.5),new Yn({color:16118508,transparent:!0,opacity:.7}));z.castShadow=!1,t.add(z),ne.push({mesh:z,base:v,phase:U/3,speed:.14+n()*.05})}const At=[],Me=[16766629,16038084,11455487,13351152,16774072,12447414];[[-18,4],[5,12],[-10,-4],[16,8],[-24,10],[30,-6]].forEach(([v,U],z)=>{const W=new ct,j=Me[z%Me.length],vt=new ot(new Et(.3,.05,.24),new Yn({color:j}));vt.position.x=-.16;const rt=vt.clone();rt.position.x=.16;const pt=new ot(new Et(.08,.08,.26),Ee(S.nose));W.add(vt,rt,pt),t.add(W),At.push({g:W,wingL:vt,wingR:rt,cx:v,cz:U,r:1.5+n()*2,ph:n()*6.28,sp:.5+n()*.5})});const Bt=[];for(let v=0;v<3;v++){const U=new ct,z=new ot(new Et(.3,.22,.5),Ee(16775407)),W=new ot(new Et(.5,.06,.3),Ee(14209996));W.position.x=-.35;const j=W.clone();j.position.x=.35,U.add(z,W,j),t.add(U),Bt.push({g:U,wingL:W,wingR:j,r:12+v*7,h:9+v*2.5,ph:v*2.1,sp:.12+v*.03})}const R=v=>{const U=ee.open?1.85:0;it.rotation.y+=(-U-it.rotation.y)*.04,wt.rotation.y+=(U-wt.rotation.y)*.04;for(const z of ne){const W=(v*z.speed+z.phase)%1;z.mesh.position.set(z.base.x+Math.sin((W+z.phase)*9)*.3,z.base.y+W*3.2,z.base.z+Math.cos((W+z.phase)*7)*.2);const j=.5+W*.9;z.mesh.scale.setScalar(j),z.mesh.material.opacity=.65*(1-W)}for(const z of At){const W=v*z.sp+z.ph;z.g.position.set(z.cx+Math.cos(W)*z.r,1.2+Math.sin(v*1.7+z.ph)*.5,z.cz+Math.sin(W*1.3)*z.r),z.g.rotation.y=-W*1.15+Math.PI/2;const j=Math.sin(v*16+z.ph)*.9;z.wingL.rotation.z=j,z.wingR.rotation.z=-j}for(const z of Bt){const W=v*z.sp+z.ph;z.g.position.set(Math.cos(W)*z.r,z.h+Math.sin(v*.9+z.ph),Math.sin(W)*z.r),z.g.rotation.y=-W-Math.PI/2;const j=Math.sin(v*7+z.ph)*.6;z.wingL.rotation.z=j,z.wingR.rotation.z=-j}for(const z of u){const W=(v*.6+z.phase)%4;z.head.rotation.x=W<.5?Math.sin(W*Math.PI/.5)*.7:0}E.tail.rotation.z=Math.sin(v*1.1)*.25};return i.add(t),{group:t,colliders:e,interactables:h,lightBeam:ft,gate:ee,update:R}}function fg(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const pg=[{id:"christiana",name:"Christiana",species:"bear",fur:S.bearHoney,scale:.95,outfit:"dress",outfitColor:S.dressRose,x:-8.5,z:-7,facing:Math.PI,getLines:i=>{const t=i.eggsCollected>=3?[{speaker:"Christiana",text:"Oh — fresh eggs! Bless you, dear, breakfast will be lovely this morning. 🥚"}]:[];return i.talkedToEvangelist?[{speaker:"Christiana",text:"You really mean to go, then… toward that light in the east?"},{speaker:"Christiana",text:"Then go safely, my dear Christian. The cubs and I will keep the hearth warm."},{speaker:"Christiana",text:"Perhaps one day… we will follow you. 💗"}]:[...t,{speaker:"Christiana",text:"Christian, dear, you have been sighing all week over that heavy burden on your back."},{speaker:"Christiana",text:"You keep saying our city will not stand… it frightens the cubs, you know."},{speaker:"Christiana",text:"If you truly must find answers, they say a wise bear called Evangelist walks the east road."}]},onFinish:i=>{i.talkedToFamily=!0}},{id:"cub1",name:"Elsie (cub)",species:"bear",fur:S.bearBrown,scale:.55,outfit:"dress",outfitColor:12098272,x:-11,z:-6,facing:Math.PI*.8,wanderRadius:2,getLines:i=>i.talkedToEvangelist?[{speaker:"Elsie",text:"Papa, is that sparkly light for YOU? It looks like a star that fell down!"},{speaker:"Elsie",text:"Bring me back a piece of it, okay? Promise!"}]:[{speaker:"Elsie",text:"Papa! Why do you always carry that big lumpy backpack?"},{speaker:"Elsie",text:"It looks SO heavy. I tried to lift it once and fell right over. Plop!"}]},{id:"cub2",name:"Anna (cub)",species:"bear",fur:S.bearHoney,scale:.5,outfit:"dress",outfitColor:S.dressLeaf,x:-7,z:-5,facing:-Math.PI*.7,wanderRadius:2,getLines:i=>i.talkedToEvangelist?[{speaker:"Anna",text:"*sniff* …You are going away, Papa?"},{speaker:"Anna",text:"Mama says brave bears follow their hearts. So… be the bravest one ever."}]:[{speaker:"Anna",text:"Papa, I found a honey-flower by the well! Want to smell it?"},{speaker:"Anna",text:"It smells like… like honey! Hee hee."}]},{id:"obstinate",name:"Obstinate",species:"pig",scale:1.05,outfit:"shirt",outfitColor:10336417,x:4,z:4.5,facing:-Math.PI/3,getLines:i=>i.chaseDone?[{speaker:"Obstinate",text:"Oh. So you've come crawling back, have you? …No? Just VISITING? Hmph."},{speaker:"Obstinate",text:"Moonbeams and fairy-gold. Mark my words, Christian — no good ever came of leaving a perfectly fine city."}]:[{speaker:"Obstinate",text:"Hmph. Still going on about the city falling down, Christian?"},{speaker:"Obstinate",text:"This is the finest city anyone could want! Acorns in the market, mud by the river…"},{speaker:"Obstinate",text:"Leave if you like — but no sensible creature will go with you. Hmph!"}]},{id:"pliable",name:"Pliable",species:"rabbit",scale:.95,outfit:"shirt",outfitColor:16766629,x:7,z:1,facing:Math.PI,wanderRadius:3,getLines:i=>i.pliableLeft?[{speaker:"Pliable",text:"Ah— Christian! You made it out of that dreadful bog, then. *ahem* …You're not cross with me, are you?"},{speaker:"Pliable",text:"The mud, you see. It was in my EARS. A gentle-rabbit has his limits! …But do write when you reach that golden city."}]:i.pliableFollowing?[{speaker:"Pliable",text:"Lead on, Christian! Crowns of gold, here we come — hop hop!"}]:i.talkedToEvangelist?[{speaker:"Pliable",text:"A shining light?! And a Wicket Gate?! Ooooh, tell me EVERYTHING."},{speaker:"Christian",text:"Evangelist says beyond the gate lies the way to the Celestial City — where no city ever crumbles."},{speaker:"Pliable",text:"Golden streets… crowns… no crumbling… It sounds marvellous. And far. And possibly muddy. Oh, I can't decide!"}]:[{speaker:"Pliable",text:"Oh, hello Christian! Don't mind old Obstinate — he grumbles at clouds, too."},{speaker:"Pliable",text:"A Celestial City, all gold and light? If it's real, I'd love to see it… I think."}]},{id:"baker",name:"Mrs. Bramble",species:"bear",fur:S.bearBrown,scale:.98,outfit:"apron",outfitColor:15980966,x:-3,z:11,facing:0,getLines:i=>i.talkedToEvangelist?[{speaker:"Mrs. Bramble",text:"Leaving us, are you? Well, I never held with any of it, but I'll miss your face at my counter."},{speaker:"Christian",text:"Thank you for all the buns, Mrs. Bramble. I won't forget your kindness."},{speaker:"Mrs. Bramble",text:"Oh, hush now, off with you before I get flour in my eyes. Go on!"}]:[{speaker:"Mrs. Bramble",text:"Fresh honey-buns! Oh — Christian, dear, you look pale as flour."},{speaker:"Christian",text:"I'm well enough, Mrs. Bramble. Just… this burden. It won't let me rest."},{speaker:"Mrs. Bramble",text:"Here, imagine I gave you a bun. On the house. You'll need your strength, whatever it is you're up to."}]},{id:"farmer",name:"Old Hamlet",species:"pig",fur:15247282,scale:1,outfit:"overalls",outfitColor:9418968,x:17,z:16,facing:-Math.PI/2,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Old Hamlet",text:"A light in the east, eh? My old snout smells a change in the wind…"},{speaker:"Christian",text:"I hope it's a change for the better, Old Hamlet. I mean to follow it."},{speaker:"Old Hamlet",text:"Take care on the road, lad. Mind the bog past the fields — it swallows boots whole."}]:[{speaker:"Old Hamlet",text:"Mornin', Christian. Fine day for turnips. Not so fine for carryin' great sacks about, I'd say."},{speaker:"Christian",text:"It isn't turnips, Old Hamlet. I wish it were something I could just set down in a field."},{speaker:"Old Hamlet",text:"You look like a pig who's seen the butcher's calendar. Whatever's weighing you, don't carry it alone."}]},{id:"frogkid",name:"Puddle",species:"frog",scale:.55,outfit:"shirt",outfitColor:16238804,x:2.5,z:-3,facing:Math.PI,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Puddle",text:"Ribbit! Are you really going away, Mister Christian? All the way past the fields?"},{speaker:"Christian",text:"All the way to a Celestial City, Puddle. I hope you'll come visit someday."},{speaker:"Puddle",text:"A CELESTIAL city?! Do the puddles there go on forever?! …I'll practice my jumping, just in case!"}]:[{speaker:"Puddle",text:"Ribbit! Mister Christian! I can jump higher than the well! Wanna see?"},{speaker:"Christian",text:"Ha! Go on then, Puddle — show me your best jump."},{speaker:"Puddle",text:"…Okay, maybe not HIGHER. But definitely louder. RIBBIT!"}]},{id:"florist",name:"Clover",species:"rabbit",fur:15325123,scale:.92,outfit:"dress",outfitColor:13102274,x:-18,z:4,facing:Math.PI/2,wanderRadius:3,getLines:i=>i.talkedToEvangelist?[{speaker:"Clover",text:"Everyone's whispering about you, Christian. A light beyond the fields, imagine!"},{speaker:"Christian",text:"It's true, Clover. I mean to follow it, however far it leads."},{speaker:"Clover",text:"Here — a daisy for your buttonhole. Flowers make every road shorter."}]:[{speaker:"Clover",text:"Good day, Christian! My daisies came up lovely this spring, haven't they?"},{speaker:"Christian",text:"They're lovely, Clover. I only wish I could enjoy them without this weight on my back."},{speaker:"Clover",text:"Though… the soil's been trembling lately. The flowers feel it too, I think."}]},{id:"cat",name:"Mr. Whiskers",species:"cat",scale:.96,outfit:"shirt",outfitColor:13351152,x:10,z:-6,facing:Math.PI*.75,getLines:i=>i.talkedToEvangelist?[{speaker:"Mr. Whiskers",text:"Mrrrow. So you're actually leaving. I suppose someone has to stop worrying about the city collapsing."},{speaker:"Christian",text:"Will you miss me, Mr. Whiskers?"},{speaker:"Mr. Whiskers",text:"…Don't make it strange. Go on, then. Mind the sunbeams on your way out."}]:[{speaker:"Mr. Whiskers",text:"Mrrrow. You're blocking my sunbeam, Christian."},{speaker:"Christian",text:"Sorry, Mr. Whiskers. I have rather a lot on my mind — and on my back."},{speaker:"Mr. Whiskers",text:"A city falling down? As long as it doesn't fall before my nap, I really can't be bothered."}]},{id:"evangelist",name:"Evangelist",species:"bear",fur:11049612,scale:1.15,outfit:"robe",outfitColor:S.robeWhite,x:42,z:0,facing:-Math.PI/2,getLines:i=>i.talkedToEvangelist?[{speaker:"Evangelist",text:"Do you see the shining light, Christian? Keep it ever before your eyes."},{speaker:"Evangelist",text:"Walk straight toward it, and you shall find the Wicket Gate. Knock, and it will be opened."}]:[{speaker:"Evangelist",text:"Peace to you, burdened friend. I am called Evangelist. Why do you sigh so?"},{speaker:"Christian",text:"This burden on my back grows heavier each day… and I fear our city will not stand. But I do not know where to go!"},{speaker:"Evangelist",text:"Then hear me. Beyond the fields lies a Wicket Gate, the beginning of the true way."},{speaker:"Christian",text:"A gate? I look and look, but I cannot see any gate…"},{speaker:"Evangelist",text:"Do you see, far off, yonder shining light?"},{speaker:"Christian",text:"…I… yes! I think I see it!"},{speaker:"Evangelist",text:"Keep that light in your eye and go straight toward it. There you will find the Gate. Now run, Christian — run and do not look back!"}],onFinish:i=>{i.talkedToEvangelist=!0}}];function mg(i){return pg.map(t=>{const e=Jt({species:t.species,fur:t.fur,scale:t.scale,outfit:t.outfit,outfitColor:t.outfitColor});return e.root.position.set(t.x,0,t.z),e.root.rotation.y=t.facing,i.add(e.root),{id:t.id,name:t.name,parts:e,position:new C(t.x,0,t.z),facing:t.facing,getLines:t.getLines,onFinish:t.onFinish,wanderRadius:t.wanderRadius}})}const xh={village:{bpm:76,chords:[[130.81,164.81,196,246.94],[110,130.81,164.81,196],[87.31,130.81,174.61,220],[98,146.83,196,220]],scale:[523.25,587.33,659.25,783.99,880,1046.5]},map:{bpm:92,chords:[[130.81,164.81,196,261.63],[98,123.47,146.83,196],[110,130.81,164.81,220],[87.31,110,174.61,220]],scale:[392,440,523.25,587.33,659.25,783.99]},slough:{bpm:58,chords:[[110,123.47,164.81,220],[87.31,130.81,174.61,220],[110,130.81,164.81,220],[82.41,123.47,164.81,207.65]],scale:[220,246.94,261.63,329.63,392,440]},sinai:{bpm:66,chords:[[110,164.81,220,261.63],[82.41,123.47,164.81,196],[87.31,130.81,174.61,220],[82.41,123.47,164.81,207.65]],scale:[329.63,349.23,392,440,493.88,523.25]},gate:{bpm:62,chords:[[130.81,196,261.63,329.63],[87.31,174.61,220,261.63],[110,164.81,220,261.63],[98,146.83,246.94,293.66]],scale:[392,440,523.25,587.33,659.25,783.99]},cross:{bpm:88,chords:[[130.81,196,261.63,329.63],[87.31,174.61,220,261.63],[98,146.83,246.94,293.66],[130.81,196,261.63,392]],scale:[523.25,587.33,659.25,783.99,880,1046.5]},interpreter:{bpm:68,chords:[[87.31,130.81,164.81,246.94],[73.42,110,146.83,220],[98,146.83,174.61,233.08],[130.81,164.81,196,261.63]],scale:[349.23,392,440,493.88,523.25,587.33]}};class gg{constructor(){P(this,"ctx",null);P(this,"master",null);P(this,"timer",null);P(this,"nextBarTime",0);P(this,"bar",0);P(this,"style","village");P(this,"noiseBuf",null);P(this,"volume",.5);P(this,"enabled",!0)}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?this.volume:0,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate*.25;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuf.getChannelData(0);for(let n=0;n<t;n++)e[n]=Math.random()*2-1;this.nextBarTime=this.ctx.currentTime+.1,this.timer=window.setInterval(()=>this.schedule(),200)}toggle(){return this.enabled=!this.enabled,this.ctx&&this.master&&this.master.gain.linearRampToValueAtTime(this.enabled?this.volume:0,this.ctx.currentTime+.2),this.enabled}setStyle(t){if(t===this.style)return;if(!this.ctx||!this.master){this.style=t;return}const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(1e-4,e+1.4),window.setTimeout(()=>{if(this.style=t,this.bar=0,this.ctx&&this.master){this.nextBarTime=this.ctx.currentTime+.15;const n=this.ctx.currentTime;this.master.gain.cancelScheduledValues(n),this.master.gain.setValueAtTime(1e-4,n),this.master.gain.linearRampToValueAtTime(this.enabled?this.volume:0,n+2)}},1500)}blip(){if(!this.ctx||!this.master||!this.enabled)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(660,t),e.frequency.exponentialRampToValueAtTime(880,t+.07),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n).connect(this.master),e.start(t),e.stop(t+.15)}splash(){if(!this.ctx||!this.master||!this.enabled||!this.noiseBuf)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(700,t),n.frequency.exponentialRampToValueAtTime(150,t+.25);const s=this.ctx.createGain();s.gain.setValueAtTime(.25,t),s.gain.exponentialRampToValueAtTime(.001,t+.3),e.connect(n).connect(s).connect(this.master),e.start(t)}rumble(){if(!this.ctx||!this.master||!this.enabled||!this.noiseBuf)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuf;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(60,t+.8);const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.4,t+.08),s.gain.exponentialRampToValueAtTime(.001,t+1),e.connect(n).connect(s).connect(this.master),e.start(t);const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(55,t),r.frequency.exponentialRampToValueAtTime(38,t+.9),o.gain.setValueAtTime(.12,t),o.gain.exponentialRampToValueAtTime(.001,t+1),r.connect(o).connect(this.master),r.start(t),r.stop(t+1.1)}barLen(){return 60/xh[this.style].bpm*4}schedule(){if(this.ctx)for(;this.nextBarTime<this.ctx.currentTime+this.barLen()*1.2;)this.scheduleBar(this.nextBarTime,this.bar),this.nextBarTime+=this.barLen(),this.bar++}pluck(t,e,n,s=.9){const r=this.ctx,o=r.createOscillator(),a=r.createGain();o.type="sine",o.frequency.value=e,a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(.001,t+s),o.connect(a).connect(this.master),o.start(t),o.stop(t+s+.1);const l=r.createOscillator(),h=r.createGain();l.type="sine",l.frequency.value=e*2,h.gain.setValueAtTime(n*.22,t),h.gain.exponentialRampToValueAtTime(.001,t+s*.55),l.connect(h).connect(this.master),l.start(t),l.stop(t+s)}pad(t,e,n,s,r="triangle"){const o=this.ctx;for(const a of e){const l=o.createOscillator(),h=o.createGain();l.type=r,l.frequency.value=a,l.detune.value=(Math.random()-.5)*6,h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(s,t+n*.3),h.gain.linearRampToValueAtTime(1e-4,t+n*1.05),l.connect(h).connect(this.master),l.start(t),l.stop(t+n*1.1)}}bass(t,e,n=.11,s=.5){const r=this.ctx,o=r.createOscillator(),a=r.createGain();o.type="sine",o.frequency.value=e,a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(.001,t+s),o.connect(a).connect(this.master),o.start(t),o.stop(t+s+.05)}shaker(t,e){if(!this.noiseBuf)return;const n=this.ctx,s=n.createBufferSource();s.buffer=this.noiseBuf;const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=5e3;const o=n.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.08),s.connect(r).connect(o).connect(this.master),s.start(t),s.stop(t+.1)}scheduleBar(t,e){const n=xh[this.style],s=n.chords[e%n.chords.length],r=this.barLen(),o=r/8;if(this.style==="village"){this.pad(t,s,r,.045);for(let a=0;a<8;a++)a!==0&&Math.random()>.45||this.pluck(t+a*o,n.scale[Math.floor(Math.random()*n.scale.length)],.09);this.bass(t,s[0]/2),this.bass(t+r/2,s[0]/2)}else if(this.style==="map"){this.pad(t,s,r,.035);const a=[0,1,2,3,2,3,1,2];for(let l=0;l<8;l++){if(l===5&&e%2===0)continue;const h=s[a[l]]*2;this.pluck(t+l*o,h,.075,.5)}e%2===1&&this.pluck(t+o*6,n.scale[e/2%n.scale.length|0]*2,.05,.8);for(const l of[1,3,5,7])this.shaker(t+l*o,.02);this.bass(t,s[0]/2,.12,.4),this.bass(t+r*.5,s[1]/2,.09,.4),this.bass(t+r*.75,s[0]/2,.07,.3)}else if(this.style==="slough"){this.pad(t,s,r,.05,"sine");for(let a=0;a<8;a++)Math.random()>.22||this.pluck(t+a*o,n.scale[Math.floor(Math.random()*n.scale.length)],.06,1.4);if(this.bass(t,s[0]/2,.12,.9),Math.random()<.5){const a=this.ctx,l=t+Math.random()*r,h=a.createOscillator(),c=a.createGain();h.type="sine",h.frequency.setValueAtTime(900+Math.random()*300,l),h.frequency.exponentialRampToValueAtTime(240,l+.18),c.gain.setValueAtTime(.05,l),c.gain.exponentialRampToValueAtTime(.001,l+.22),h.connect(c).connect(this.master),h.start(l),h.stop(l+.25)}}else{this.pad(t,s,r,.05,"sine");for(let a=0;a<8;a++)a%2!==0||Math.random()>.6||this.pluck(t+a*o,n.scale[Math.floor(Math.random()*n.scale.length)],.07,1.1);this.bass(t,s[0]/2,.1,.7)}}}const Pi=new C(-14.5,0,0),Ii=new C(-3.5,0,0),js=new C(3.5,0,0),Li=new C(11,0,7),On=new C(17.5,0,-1),zn=new C(25.5,0,2.5),ni=new C(33.5,0,-1),ii=new C(41.5,0,1.5),_g=[{c:Pi,r:4.2},{c:Ii,r:4.2},{c:js,r:1.9},{c:Li,r:4.2},{c:On,r:4},{c:zn,r:4},{c:ni,r:4},{c:ii,r:4}];class xg{constructor(t){P(this,"scene",new pi);P(this,"camera");P(this,"progress",.02);P(this,"branchP",0);P(this,"road","main");P(this,"sloughDone",!1);P(this,"moralityDone",!1);P(this,"wicketDone",!1);P(this,"crossDone",!1);P(this,"highwayDone",!1);P(this,"hillDone",!1);P(this,"justDiverted",!1);P(this,"cityT",.02);P(this,"sloughT",.35);P(this,"forkT",.6);P(this,"beyondT",.85);P(this,"crossT",.88);P(this,"highwayT",.93);P(this,"hillT",.97);P(this,"mainCurve");P(this,"branchCurve");P(this,"branchSpeed",1);P(this,"christian");P(this,"followers",[]);P(this,"clouds",[]);P(this,"islands",[]);P(this,"sparkles",[]);P(this,"mist",[]);P(this,"sinaiGlow",null);P(this,"sunHalos",[]);P(this,"crossGlow",null);P(this,"birds",[]);P(this,"birdTimer",4);P(this,"christianHasBurden",!0);P(this,"moving",!1);P(this,"facing",1);P(this,"built",!1);P(this,"camPan",0);this.camera=new Ze(45,t,.1,200),this.resize(t),this.mainCurve=new ch([new C(Pi.x+2,.62,.7),new C(-10,.62,-1.2),new C(-6.5,.62,1),new C(Ii.x,.62,0),new C(0,.62,-1),new C(js.x,.62,0),new C(7,.62,-2.6),new C(11,.62,-4.2),new C(14.5,.62,-3.2),new C(On.x-1.5,.62,-1.3),new C(20.5,.62,.4),new C(23,.62,1.6),new C(zn.x-1,.62,zn.z-.3),new C(28.6,.62,1.6),new C(31,.62,.1),new C(ni.x-.6,.62,ni.z),new C(36.8,.62,0),new C(ii.x-.8,.62,ii.z-.2)]),this.cityT=this.tForPoint(Pi),this.sloughT=this.tForPoint(Ii),this.forkT=this.tForPoint(js),this.beyondT=this.tForPoint(On),this.crossT=this.tForPoint(zn),this.highwayT=this.tForPoint(ni),this.hillT=this.tForPoint(ii);const e=this.mainCurve.getPointAt(this.forkT);this.branchCurve=new ch([e.clone(),new C(5.8,.62,3),new C(8,.62,5),new C(Li.x-2,.62,Li.z-.6)]),this.branchSpeed=this.mainCurve.getLength()/Math.max(this.branchCurve.getLength(),1),this.christian=this.makeMapChristian()}makeMapChristian(){return this.christianHasBurden=!this.crossDone,Jt({species:"bear",fur:S.bearBrown,outfit:"shirt",outfitColor:this.crossDone?S.robeWhite:9418968,sling:!0,burden:!this.crossDone,scale:.5})}tForPoint(t){let e=0,n=1/0;for(let s=0;s<=300;s++){const r=s/300,o=this.mainCurve.getPointAt(r),a=Math.hypot(o.x-t.x,o.z-t.z);a<n&&(n=a,e=r)}return e}label(t,e,n,s,r="#5b4a3f"){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.font='bold 52px "Trebuchet MS", sans-serif',a.textAlign="center",a.textBaseline="middle";const l=a.measureText(t).width+70;a.fillStyle="rgba(255, 248, 239, 0.92)",a.strokeStyle="rgba(244, 184, 196, 1)",a.lineWidth=8,a.beginPath(),a.roundRect((512-l)/2,18,l,92,46),a.fill(),a.stroke(),a.fillStyle=r,a.fillText(t,256,66);const h=new Ym(o),c=new Xm(new oc({map:h,transparent:!0}));c.scale.set(6.4,1.6,1),c.position.set(e,s,n),this.scene.add(c)}island(t,e,n,s){const r=new ct,o=14,a=(h,c,u,p)=>{const f=new ot(new cn(h,h,c,o),Ee(u));f.position.y=p,f.castShadow=!0,f.receiveShadow=!0,r.add(f)};a(n+.3,.5,s,.3),a(n,.9,14206106,-.25),a(Math.max(n-.8,.8),1,12162938,-1.1),a(Math.max(n-1.7,.6),1,10846815,-2),a(Math.max(n-2.6,.4),.8,9662799,-2.8);const l=Math.max(5,Math.round(n*1.6));for(let h=0;h<l;h++){const c=h/l*Math.PI*2+.4;r.add(g(.45,.3,.45,S.grassDark,Math.cos(c)*(n+.2),.14,Math.sin(c)*(n+.2)))}return r.position.set(t,0,e),this.scene.add(r),this.islands.push(r),r}miniTree(t,e,n=!1){const s=new ct;return s.add(g(.16,.5,.16,S.trunk,0,.25,0)),s.add(g(.6,.45,.6,n?S.leafPink:S.leaf,0,.7,0)),s.add(g(.35,.3,.35,n?S.leafPink:S.leaf,0,1,0)),s.position.set(t,.55,e),s}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Nt(13888767),t.fog=new Cn(13888767,36,100),t.add(new mi(15923711,13493490,1.3));const e=new gi(S.sun,1.7);e.position.set(-8,14,10),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=18,e.shadow.camera.bottom=-18,t.add(e);const n=new ot(new $e(1.15,24,18),new Pt({color:16769357}));n.position.set(14,11,-14),t.add(n);for(const[N,G]of[[1.55,.4],[2.1,.18]]){const Y=new ot(new $e(N,24,18),new Pt({color:16774072,transparent:!0,opacity:G,depthWrite:!1}));Y.position.copy(n.position),t.add(Y),this.sunHalos.push(Y)}const s=new ot(new Et(240,1,160),Ee(S.water));s.position.y=-1.6,s.receiveShadow=!0,t.add(s);for(let N=0;N<40;N++){const G=new ot(new Et(.5+Math.random()*.9,.06,.16),new Pt({color:15004668,transparent:!0,opacity:.8}));G.position.set((Math.random()-.5)*60,-1.02,(Math.random()-.5)*34),G.castShadow=!1,t.add(G),this.sparkles.push(G)}const r=this.island(Pi.x,Pi.z,4.6,S.grass),o=new ct,a=(N,G,Y)=>{o.add(g(.85,.65,.75,S.wallCream,N,.9,G)),o.add(g(1,.35,.9,Y,N,1.4,G)),o.add(g(.18,.5,.06,S.woodDark,N,.8,G+.4))};a(-1,-.5,S.roofPink),a(.25,-1.15,S.roofMint),a(.65,.45,S.roofLilac),a(-.45,.95,S.roofPeach);const l=[[-2,0,.28,3.7],[2,-1.1,.28,1.6],[2,1.1,.28,1.6],[0,-1.9,4.2,.28],[0,1.9,4.2,.28]];for(const[N,G,Y,K]of l)o.add(g(Y,.6,K,16249834,N,.85,G)),o.add(g(Y+.08,.12,K+.08,14670024,N,1.16,G));o.position.set(-.9,0,-.3),r.add(o),r.add(this.miniTree(-3,2.1,!0)),r.add(this.miniTree(3,-2.2)),r.add(this.miniTree(2.6,2.3,!0));for(let N=0;N<8;N++){const G=Math.random()*Math.PI*2,Y=1.5+Math.random()*2.4,K=g(.14,.14,.14,[S.flowerYellow,S.flowerPink,S.flowerBlue][N%3],Math.cos(G)*Y,.62,Math.sin(G)*Y);K.castShadow=!1,r.add(K)}this.label("City of Destruction",Pi.x,Pi.z,4.4);const h=this.island(Ii.x,Ii.z,4.4,10405775),c=new ct;c.add(g(4,.18,3,9073493,0,.62,0)),c.add(g(3,.2,2.1,7297602,0,.68,.1)),c.add(g(.55,.14,.55,9073493,-1.8,.66,1.3)),c.add(g(.45,.12,.45,7297602,2,.66,-1.2)),c.add(g(.16,.16,.16,10982002,.4,.84,.3)),c.add(g(.12,.12,.12,10982002,-.6,.82,-.4));for(const[N,G]of[[-2.1,-1],[1.8,1.2],[2.3,.2],[-1.5,1.5],[.2,-1.5]])c.add(g(.1,.85,.1,8101983,N,1,G)),c.add(g(.16,.28,.16,13215845,N,1.48,G));c.position.set(.2,0,.1),h.add(c);const u=new ct;u.add(g(.18,1,.18,10129286,0,.5,0)),u.add(g(.7,.14,.14,10129286,.2,.95,0)),u.add(g(.14,.5,.14,10129286,.55,1.2,0)),u.position.set(-2.9,.55,-2),h.add(u),this.label("Slough of Despond",Ii.x,Ii.z,4.4);const p=this.island(js.x,js.z,1.9,S.grass),f=new ct;f.add(g(.14,1.7,.14,S.woodDark,0,.85,0));const _=g(1.2,.32,.1,S.wood,.5,1.45,0);f.add(_);const x=g(.1,.32,1.2,S.wood,0,1.05,.5);f.add(x),f.position.set(-.3,.55,-.5),p.add(f),p.add(this.miniTree(.9,.8,!0));const m=this.island(Li.x,Li.z,4.4,11458976),d=(N,G,Y)=>{m.add(g(.9,.7,.8,16447212,N,.95,G)),m.add(g(1.05,.35,.95,Y,N,1.5,G)),m.add(g(.16,.45,.06,S.woodDark,N,.82,G+.42))};d(-1.6,1.2,10336472),d(-.2,1.5,1211e4),d(1.2,1.2,10336472);for(const[N,G]of[[-2.4,.2],[-.9,.35],[.6,.35],[2,.2]])m.add(g(.9,.3,.3,8826237,N,.72,G));const E=new ct;E.add(g(2.6,1.4,1.8,9276822,0,.7,0)),E.add(g(1.9,1.2,1.4,8224136,.1,1.7,-.1)),E.add(g(1.2,1,1,9276822,-.1,2.6,0)),E.add(g(.7,.7,.7,7303034,.05,3.3,0));const y=new ot(new Et(.5,.9,.12),new Pt({color:16751181,transparent:!0,opacity:.9}));y.position.set(.2,1.6,.66),E.add(y),this.sinaiGlow=y,E.position.set(.3,.55,-1.8),m.add(E),this.label("Morality",Li.x,Li.z,4.6);const b=this.island(On.x,On.z,4.2,10405800);b.add(this.miniTree(-2.4,1.6)),b.add(this.miniTree(2.5,-1.4,!0)),b.add(g(.2,1.3,.2,S.woodDark,1,1.2,.2)),b.add(g(.2,1.3,.2,S.woodDark,2,1.2,.2)),b.add(g(1.3,.2,.2,S.woodDark,1.5,1.9,.2));const k=new ot(new Et(.9,1.1,.1),new Pt({color:16774072,transparent:!0,opacity:.7}));k.position.set(1.5,1.15,.15),b.add(k);for(let N=0;N<7;N++){const G=new ot(new Et(2.2+Math.random()*1.6,1+Math.random()*.8,1.6),new Yn({color:15922936,transparent:!0,opacity:.55}));G.position.set(On.x-3+Math.random()*6,1+Math.random()*1.4,On.z-2+Math.random()*4),G.castShadow=!1,t.add(G),this.mist.push(G)}this.label("Wicket Gate",On.x,On.z,4.4);const A=this.island(zn.x,zn.z,4.2,S.grassLight);A.add(g(4.6,.7,4,S.grass,0,.85,-.4)),A.add(g(3.2,.7,2.8,10411671,0,1.5,-.4)),A.add(g(2,.6,1.8,S.grassLight,0,2.1,-.4)),A.add(g(.22,1.5,.22,S.woodDark,0,3.1,-.4)),A.add(g(.95,.22,.22,S.woodDark,0,3.45,-.4));const I=new ot(new $e(1,18,14),new Pt({color:16774072,transparent:!0,opacity:.35,depthWrite:!1}));I.position.set(0,3.3,-.4),A.add(I),this.crossGlow=I,A.add(g(1.1,.8,.9,12170412,1.9,.9,.9)),A.add(g(.5,.5,.1,4867136,1.9,.85,1.36));const H=new ot(new cn(.34,.34,.16,12),Ee(11051674));H.rotation.x=Math.PI/2,H.rotation.z=Math.PI/2,H.position.set(2.7,.9,1.3),A.add(H),A.add(this.miniTree(-2.6,1.8,!0)),this.label("The Cross",zn.x,zn.z,5.4);const T=this.island(ni.x,ni.z,4,9418115);for(let N=0;N<4;N++)T.add(g(.9,.4,.25,12169378,-1.6+N*1.1,.78,-1.3));for(const[N,G,Y]of[[-.8,1.2,14660974],[.2,1.5,10129274],[1.2,1.2,15126464]])T.add(g(.55,.28,.32,Y,N,.72,G));T.add(g(.12,1.5,.12,6183509,2.4,1.3,-.4));const M=new ot(new $e(.22,12,10),new Pt({color:16771488}));M.position.set(2.4,2.1,-.4),T.add(M),T.add(this.miniTree(-2.6,-1.6)),this.label("King's Highway",ni.x,ni.z,4.4);const D=this.island(ii.x,ii.z,4,S.grass);D.add(g(4.4,1.2,3.6,10411671,0,1.1,-.5)),D.add(g(3,1.2,2.6,S.grass,0,2.2,-.5)),D.add(g(1.8,1.1,1.6,10411671,0,3.3,-.5));for(let N=0;N<4;N++)D.add(g(.4,.08,.5,S.path,-.6+N%2*1.2,.6+N*.9,1.35-N*.55));D.add(g(.7,.3,.5,8101983,1,2.1,.4)),D.add(g(.08,.5,.08,S.woodDark,.8,1.75,.5)),D.add(g(.08,.5,.08,S.woodDark,1.25,1.75,.5)),D.add(g(.5,.08,1.6,14272936,-2.4,.62,.8)),D.add(g(.5,.08,1.6,14272936,2.4,.62,.8)),D.add(this.miniTree(-2.8,-1.8,!0)),this.label("Hill Difficulty",ii.x,ii.z,5.4),this.buildRoad(this.mainCurve,72),this.buildRoad(this.branchCurve,26);const q=new Yn({color:16777215,emissive:7829367});for(let N=0;N<6;N++){const G=new ct,Y=(K,Q,Z,at)=>{const dt=new ot(new $e(K,14,10),q);dt.position.set(Q,Z,at),dt.castShadow=!1,G.add(dt)};Y(.85,0,0,0),Y(.65,.95,.12,.1),Y(.6,-.9,.08,-.1),Y(.5,.35,.45,.12),Y(.45,-.4,.4,-.05),G.position.set((Math.random()-.5)*42,5.5+Math.random()*3,-6-Math.random()*5),this.clouds.push(G),t.add(G)}for(let N=0;N<3;N++){const G=new ct,Y=g(.22,.12,.3,4867136,0,0,0);Y.castShadow=!1,G.add(Y);const K=at=>{const dt=new ot(new Et(.6,.05,.22),Ee(5985358));return dt.geometry.translate(.3,0,0),dt.position.set(.08*at,.04,0),dt.scale.x=at,dt.castShadow=!1,G.add(dt),dt},Q=K(-1),Z=K(1);G.visible=!1,t.add(G),this.birds.push({g:G,wingL:Q,wingR:Z,speed:0,active:!1})}this.scene.add(this.christian.root),this.placeOn(this.mainCurve,this.christian.root,this.progress)}nearLand(t,e){for(const n of _g)if(Math.hypot(t-n.c.x,e-n.c.z)<n.r)return!0;return!1}buildRoad(t,e){for(let n=0;n<=e;n++){const s=n/e,r=t.getPointAt(s),o=t.getTangentAt(s);if(this.nearLand(r.x,r.z)){const a=g(.5,.1,.6,S.path,r.x,r.y-.02,r.z);a.rotation.y=Math.atan2(o.x,o.z)+Math.PI/2,a.castShadow=!1,this.scene.add(a)}else{const a=g(.5,.14,1.1,S.wood,r.x,.5,r.z);if(a.rotation.y=Math.atan2(o.x,o.z)+Math.PI/2,a.castShadow=!1,this.scene.add(a),n%4===0){const l=-o.z,h=o.x;for(const c of[-1,1])this.scene.add(g(.14,2,.14,S.woodDark,r.x+l*.62*c,-.4,r.z+h*.62*c)),this.scene.add(g(.1,.5,.1,S.woodDark,r.x+l*.58*c,.85,r.z+h*.58*c))}}}}start(t){this.build(),this.christianHasBurden!==!this.crossDone&&(this.scene.remove(this.christian.root),this.christian=this.makeMapChristian(),this.scene.add(this.christian.root),this.placeOn(this.mainCurve,this.christian.root,this.progress));for(const e of this.followers)this.scene.remove(e.root);this.followers=t.map(e=>{const n=Jt(e==="pliable"?{species:"rabbit",outfit:"shirt",outfitColor:16766629,scale:.44}:{scale:.44});return this.scene.add(n.root),n})}resize(t){this.camera.aspect=t;const e=Zt.clamp(48/t-1,24,58);this.camera.position.set(5+this.camPan,e*.78,e+2.2),this.camera.lookAt(5+this.camPan,.4,1.4),this.camera.updateProjectionMatrix()}spot(){return this.road==="branch"?this.branchP>.86?"morality":"road":this.progress<this.cityT+.05?"city":Math.abs(this.progress-this.sloughT)<.05?"slough":Math.abs(this.progress-this.forkT)<.04?"fork":this.progress>this.hillT-.025?"hill":Math.abs(this.progress-this.highwayT)<.025?"highway":Math.abs(this.progress-this.crossT)<.025?"cross":Math.abs(this.progress-this.beyondT)<.04?"beyond":"road"}placeOn(t,e,n){const s=t.getPointAt(Zt.clamp(n,0,1));e.position.set(s.x,this.nearLand(s.x,s.z)?s.y:.57,s.z)}update(t,e,n,s){if(!this.built)return;const r=t*.075;if(this.moving=!1,this.road==="main"){if(Math.abs(n)>.15){this.moving=!0;const c=this.highwayDone?this.hillT+.02:this.crossDone?this.highwayT+.02:this.wicketDone?this.crossT+.02:this.moralityDone?this.beyondT+.02:this.sloughDone?this.forkT:this.sloughT+.05;this.progress=Zt.clamp(this.progress+n*r,.02,c),this.facing=n>0?1:-1,!this.moralityDone&&this.sloughDone&&n>0&&this.progress>=this.forkT-1e-5&&(this.road="branch",this.branchP=0,this.justDiverted=!0)}this.moralityDone&&s>.35&&Math.abs(this.progress-this.forkT)<.05&&(this.road="branch",this.branchP=.02,this.moving=!0,this.facing=1)}else Math.abs(n)>.15&&(this.moving=!0,this.branchP=Zt.clamp(this.branchP+n*r*this.branchSpeed,0,.96),this.facing=n>0?1:-1,this.branchP<=0&&n<0&&(this.road="main",this.progress=this.forkT));const o=this.road==="main"?this.mainCurve:this.branchCurve,a=this.road==="main"?this.progress:this.branchP;this.placeOn(o,this.christian.root,a);const l=Math.max(0,this.christian.root.position.x-zn.x);this.camPan+=(l-this.camPan)*Math.min(t*3,1),this.camera.position.x=5+this.camPan,this.camera.lookAt(5+this.camPan,.4,1.4);const h=o.getTangentAt(Zt.clamp(a,0,1));this.christian.root.rotation.y=Math.atan2(h.x*this.facing,h.z*this.facing),Lt(this.christian,e,this.moving),this.followers.forEach((c,u)=>{const p=a-.045*(u+1)*this.facing;this.placeOn(o,c.root,p);const f=o.getTangentAt(Zt.clamp(p,0,1));c.root.rotation.y=Math.atan2(f.x*this.facing,f.z*this.facing),Lt(c,e+.4*(u+1),this.moving)});for(let c=0;c<this.clouds.length;c++){const u=this.clouds[c];u.position.x+=t*(.2+c*.06),u.position.x>30&&(u.position.x=-30)}if(this.birdTimer-=t,this.birdTimer<=0){this.birdTimer=6+Math.random()*8;const c=this.birds.find(u=>!u.active);c&&(c.active=!0,c.speed=2.6+Math.random()*1.8,c.g.position.set(-30,6.5+Math.random()*3.5,-9+Math.random()*9),c.g.rotation.y=Math.PI/2,c.g.visible=!0)}for(const c of this.birds){if(!c.active)continue;c.g.position.x+=c.speed*t,c.g.position.y+=Math.sin(e*2+c.g.position.x)*t*.3;const u=Math.sin(e*13+c.g.position.z)*.65;c.wingL.rotation.z=-u,c.wingR.rotation.z=u,c.g.position.x>30&&(c.active=!1,c.g.visible=!1)}for(let c=0;c<this.sunHalos.length;c++){const u=1+Math.sin(e*1.4+c)*.06;this.sunHalos[c].scale.setScalar(u)}this.crossGlow&&(this.crossGlow.material.opacity=.22+.18*Math.abs(Math.sin(e*1.1)));for(let c=0;c<this.islands.length;c++)this.islands[c].position.y=Math.sin(e*.6+c*2.1)*.04;for(let c=0;c<this.sparkles.length;c++){const u=this.sparkles[c];u.material.opacity=.35+.45*Math.abs(Math.sin(e*1.3+c*1.7))}for(let c=0;c<this.mist.length;c++){const u=this.mist[c];u.position.x+=Math.sin(e*.4+c)*t*.15,u.material.opacity=.45+.15*Math.sin(e*.5+c*1.3)}this.sinaiGlow&&(this.sinaiGlow.material.opacity=.5+.45*Math.abs(Math.sin(e*2.2)))}}const Nr=40,Gs=3.5,Fr=12.5,Or=10;class vg{constructor(t){P(this,"scene",new pi);P(this,"phase","walk");P(this,"cb");P(this,"christian");P(this,"pliable",null);P(this,"pliableStage","follow");P(this,"revisit",!1);P(this,"help");P(this,"steps",[[-6.5,1],[-3.4,-.8],[-.2,1.1],[3,-.9],[6.2,.9],[9.4,-1],[12.6,.6]]);P(this,"sink",0);P(this,"stuckT",0);P(this,"struggle",0);P(this,"wisps",[]);P(this,"bubbles",[]);P(this,"splashes",[]);P(this,"splashTimer",0);P(this,"rescueT",0);P(this,"helpTalkCount",0);P(this,"built",!1);P(this,"lightBeam",null);this.cb=t,this.christian=Jt({species:"bear",fur:S.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.help=Jt({species:"bear",fur:9411210,outfit:"robe",outfitColor:13102274,scale:1.2})}inBog(t,e){const n=(t-Gs)/Fr,s=e/Or;return n*n+s*s<1}nearStep(t,e){for(const[n,s]of this.steps)if(Math.hypot(t-n,e-s)<1.35)return!0;return!1}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Nt(12175828),t.fog=new Cn(12175828,30,80),t.add(new mi(14148844,11057312,.85));const e=new gi(15919826,1.1);e.position.set(-25,40,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-45,e.shadow.camera.right=45,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,t.add(e);const n=new ot(new Et(140,1,90),Ee(9681290));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let _=0;_<70;_++){const x=-45+Math.random()*90,m=-35+Math.random()*70;if(this.inBog(x,m))continue;const d=g(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?8826237:10798746,x,.04+Math.random()*.03,m);d.castShadow=!1,t.add(d)}for(const[_,x]of[[-22,16],[22,10]]){const m=g(x,.12,3.6,14272936,_,.06,0);m.castShadow=!1,t.add(m)}const s=[9073493,8152908,7297602];for(let _=0;_<3;_++){const x=Fr-_*1.6,m=Or-_*1.3;for(let d=0;d<14;d++){const E=d/14*Math.PI*2,y=Gs+Math.cos(E)*x*(.55+.35*Math.random()),b=Math.sin(E)*m*(.55+.35*Math.random()),k=g(3+Math.random()*3,.1+_*.03,2.5+Math.random()*2.5,s[_],y,.1+_*.03+Math.random()*.02,b);k.castShadow=!1,t.add(k)}}const r=g(Fr*1.85,.14,Or*1.7,8152908,Gs,.1,0);r.castShadow=!1,t.add(r);for(let _=0;_<10;_++){const x=g(.22,.22,.22,10982002,Gs-9+Math.random()*18,.28,-6+Math.random()*12);x.castShadow=!1,t.add(x),this.bubbles.push({mesh:x,phase:Math.random()*6.28})}for(const[_,x]of this.steps)t.add(g(1.5,.28,1.5,14209996,_,.16,x)),t.add(g(1.7,.1,1.7,12893877,_,.04,x));for(let _=0;_<26;_++){const x=_/26*Math.PI*2,m=Gs+Math.cos(x)*(Fr+1.5+Math.random()*2),d=Math.sin(x)*(Or+1.2+Math.random()*2);t.add(g(.14,1.3+Math.random()*.7,.14,8101983,m,.8,d)),_%2===0&&t.add(g(.22,.45,.22,13215845,m,1.75,d))}for(const[_,x,m]of[[-12,-10,.4],[16,9,1.2],[-8,11,2.2],[20,-9,.9]]){const d=new ct;d.add(g(.45,2.6,.45,10129286,0,1.3,0)),d.add(g(1.6,.3,.3,10129286,.5,2.3,0)),d.add(g(.3,1.1,.3,10129286,1.2,2.9,0)),d.add(g(1.1,.25,.25,9076598,-.6,1.7,.1)),d.position.set(_,0,x),d.rotation.y=m,t.add(d)}for(let _=0;_<9;_++){const x=new ot(new Et(4+Math.random()*4,.8,2.5+Math.random()*2),new Yn({color:15265520,transparent:!0,opacity:.35}));x.position.set(-20+Math.random()*45,.9+Math.random()*.8,-12+Math.random()*24),x.castShadow=!1,t.add(x),this.wisps.push(x)}for(let _=0;_<14;_++){const x=new Pt({color:9073493,transparent:!0,opacity:0}),m=new ot(new Et(.2,.2,.2),x);m.visible=!1,t.add(m),this.splashes.push({mesh:m,m:x,life:1,vx:0,vz:0})}const o=new ct;o.add(g(.16,1.6,.16,S.woodDark,0,.8,0)),o.add(g(1.6,.8,.12,S.wood,0,1.5,0)),o.add(g(1.2,.1,.14,9072466,0,1.62,0)),o.add(g(1.2,.1,.14,9072466,0,1.38,0)),o.position.set(-11,0,4),o.rotation.y=-.5,t.add(o),this.help.root.position.set(24,0,0),this.help.root.visible=!1,this.help.armR.add(g(.14,2.2,.14,S.woodDark,.1,-.6,.2)),t.add(this.help.root);for(let _=0;_<8;_++){const x=21+_*2.6;t.add(g(2.1,.12,3,S.path,x,.13,Math.sin(_*.5)*.5))}for(const[_,x,m]of[[26,-5,!0],[30,5,!1],[34,-6,!1],[37,6,!0]]){const d=new ct;d.add(g(.5,1.6,.5,S.trunk,0,.8,0)),d.add(g(1.9,1.3,1.9,m?S.leafPink:S.leaf,0,2.2,0)),d.add(g(1.2,.9,1.2,m?S.leafPink:S.leaf,0,3.1,0)),d.position.set(_,0,x),t.add(d)}const a=new ct,l=new Pt({color:16767306,transparent:!0,opacity:.8,fog:!1}),h=new ot(new Et(2.6,40,2.6),l);h.position.y=20,a.add(h);const c=new ot(new Et(1.3,44,1.3),new Pt({color:16776160,transparent:!0,opacity:.95,fog:!1}));c.position.y=22,a.add(c);const u=new Pt({color:16771194,fog:!1}),p=new ot(new Et(3.4,3.4,3.4),u);p.position.y=42,p.rotation.set(Math.PI/4,0,Math.PI/4),a.add(p);const f=new Bi(16771194,3.5,40);f.position.y=4,a.add(f),a.position.set(Nr,0,0),a.visible=!1,t.add(a),this.lightBeam=a}enter(t,e=!1){return this.build(),this.revisit=e,this.phase="walk",this.sink=0,this.struggle=0,this.pliable&&(this.scene.remove(this.pliable.root),this.pliable=null),this.pliableStage="follow",this.christian.root.position.set(-24,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),e?(this.help.root.visible=!0,this.help.root.position.set(18.4,0,2.2),this.help.root.rotation.y=-Math.PI/2,this.help.armR.rotation.x=0,this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("🌫 The old mire — cross east toward the light, or turn back west to the road"),{christian:this.christian,pliable:null}):(this.lightBeam&&(this.lightBeam.visible=!1),t&&(this.pliable=Jt({species:"rabbit",outfit:"shirt",outfitColor:16766629,scale:.95}),this.pliable.root.position.set(-26,0,-1.4),this.scene.add(this.pliable.root),this.cb.playScript([{speaker:"Pliable",text:"So tell me MORE about this Celestial City! Do the crowns come in rabbit sizes? Is there clover?"},{speaker:"Christian",text:"Ha! The book says there is no night there, and no tears… Careful, friend — the ground past those reeds looks soft."},{speaker:"Pliable",text:"Soft, schmoft! With GLORY ahead, who has time to look down? Hop hop — race you to the far side!"}])),this.cb.setObjective("🌫 Cross the marsh to the east"),{christian:this.christian,pliable:this.pliable})}spawnSplash(t,e){const n=this.splashes.find(s=>s.life>=1);n&&(n.life=0,n.vx=(Math.random()-.5)*1.2,n.vz=(Math.random()-.5)*1.2,n.mesh.position.set(t,.2,e),n.mesh.visible=!0)}nearHelp(){return!this.help.root.visible||!(this.revisit||this.phase==="freeroam"||this.phase==="done")?!1:this.christian.root.position.distanceTo(this.help.root.position)<3.2}talkToHelp(){if(!this.nearHelp())return;const t=this.christian.root.position,e=this.help.root.position;this.help.root.rotation.y=Math.atan2(t.x-e.x,t.z-e.z),this.christian.root.rotation.y=Math.atan2(e.x-t.x,e.z-t.z);const n=[[{speaker:"Christian",text:"Help — thank you again. I do not think I could ever have climbed out alone."},{speaker:"Help",text:"No pilgrim ever does, friend. That is rather the point of me."},{speaker:"Help",text:"Now go on toward the light — and if the road ever sinks beneath you again, remember: look for the Steps before you look for the bottom."}],[{speaker:"Christian",text:"Do you truly stay out here, by this dreadful bog, all year round?"},{speaker:"Help",text:"Someone must. Every day another traveller comes running from the City with fear at his heels, and fear never watches its feet."},{speaker:"Christian",text:"Then I am glad it is you who waits for them. Farewell, Help!"}]];this.cb.playScript(n[this.helpTalkCount%n.length]),this.helpTalkCount++}moveFactor(){const t=this.christian.root.position;return this.phase==="fallingIn"||this.phase==="struggling"||this.phase==="stuck"||this.phase==="rescue"||this.phase==="epilogue"?0:this.inBog(t.x,t.z)?this.nearStep(t.x,t.z)?.72:.34:1}afterMove(t){const e=this.christian.root.position,n=this.revisit||this.phase==="rescue"||this.phase==="epilogue"||this.phase==="freeroam"||this.phase==="done";if(e.x=Zt.clamp(e.x,-28,n?Nr+4:14.6),e.z=Zt.clamp(e.z,-16,16),this.revisit){(e.x>Nr-2||e.x<-27)&&this.cb.onExit(),t&&this.inBog(e.x,e.z)&&(this.splashTimer-=.016,this.splashTimer<=0&&(this.splashTimer=.18,this.spawnSplash(e.x,e.z)));return}if(this.phase==="freeroam"&&e.x>Nr-3&&(this.phase="done",this.cb.onComplete()),this.phase==="walk"&&this.inBog(e.x+1.2,e.z)){this.phase="fallingIn",this.cb.splashSound();for(let r=0;r<6;r++)this.spawnSplash(e.x+Math.random(),e.z+(Math.random()-.5));if(this.pliable){const r=this.pliable.root.position;r.y=-.35,this.pliable.root.rotation.y=Math.PI/2;for(let o=0;o<4;o++)this.spawnSplash(r.x+Math.random(),r.z+(Math.random()-.5))}const s=this.pliable?[{speaker:"Christian",text:"Wh—whoa! The ground — it is swallowing us! Hold fast, Pliable!"},{speaker:"Pliable",text:"GLUB—! Mud! In my EARS! In my WHISKERS! Christian, I am DISSOLVING!"},{speaker:"Pliable",text:"Is THIS the glorious happiness you spoke of?! Golden streets, you said! CROWNS, you said!"},{speaker:"Christian",text:"Courage, friend! If we press on together, the far bank cannot be—"},{speaker:"Pliable",text:"FORWARD?! Into MORE of it?! Not for every crown in every city! Out of my way!"}]:[{speaker:"Christian",text:"Wh—whoa! The ground… it is swallowing me! This must be the mire the villagers whispered of…"}];this.cb.playScript(s,()=>{this.pliable?(this.pliableStage="clamber",this.cb.setObjective("😨 Pliable flounders back toward the bank nearest home…")):(this.phase="crossing",this.cb.setObjective("🪨 Keep moving or the mire pulls you under — rest on the solid Steps!"))})}this.phase==="crossing"&&e.x>14.2&&(this.phase="struggling",this.stuckT=0,this.cb.splashSound(),this.cb.setObjective("😰 The bank is right there — but the mire holds him fast…")),t&&this.phase==="crossing"&&this.inBog(e.x,e.z)&&(this.splashTimer-=.016,this.splashTimer<=0&&(this.splashTimer=.18,this.spawnSplash(e.x,e.z)))}update(t,e,n){if(!this.built)return;const s=this.christian.root.position;let r=0;const o=this.inBog(s.x,s.z),a=this.nearStep(s.x,s.z);if(o&&this.phase!=="done"&&(r=a?.16:.5,this.phase==="stuck"&&(r=.62),this.phase==="struggling"&&(r=.62+Math.sin(e*5)*.08)),this.phase==="crossing"&&!this.revisit&&o&&!a?this.struggle=n?Math.max(0,this.struggle-t*.6):Math.min(.85,this.struggle+t*.32):this.struggle=Math.max(0,this.struggle-t*1.6),r+=this.struggle,(this.phase==="rescue"||this.phase==="epilogue")&&(r=this.rescueT>1?0:.62),this.sink+=(r-this.sink)*Math.min(t*3,1),this.christian.root.position.y=-this.sink,this.phase==="crossing"&&!this.revisit&&this.sink>1.05&&(this.struggle=0,this.sink=.2,this.christian.root.position.set(-8.5,0,Zt.clamp(s.z,-6,6)*.4),this.christian.root.rotation.y=Math.PI/2,this.cb.splashSound(),this.cb.playScript([{speaker:"Christian",text:"*GLUB—!* The mire closes over his ears. Sputtering mud, he claws his way back to the western bank."},{speaker:"Christian",text:"It pulls hardest when I stand still… Keep moving, and catch your breath on the solid Steps!"}])),Lt(this.christian,e,n&&this.phase!=="stuck"&&this.phase!=="rescue"&&this.phase!=="epilogue"),this.phase==="struggling"){this.stuckT+=t;const l=Math.min(1,this.stuckT/.5);this.christian.armL.rotation.x=Math.sin(e*11)*1.3*l,this.christian.armR.rotation.x=-Math.sin(e*11+1.4)*1.3*l,this.christian.root.rotation.z=Math.sin(e*7)*.1*l,this.christian.root.rotation.y=Math.PI/2+Math.sin(e*3.2)*.45*l,Math.random()<t*10&&this.spawnSplash(s.x+(Math.random()-.5)*1.2,s.z+(Math.random()-.5)*1.2),this.stuckT>3.2&&(this.phase="stuck",this.christian.root.rotation.z=0,this.christian.root.rotation.y=Math.PI/2,this.christian.armL.rotation.x=0,this.christian.armR.rotation.x=0,this.cb.playScript([{speaker:"Christian",text:"*pant* … The bank is right there — but I cannot climb it. This burden on my back drags me down and down…"},{speaker:"Christian",text:"Is this how the journey ends? Stuck in the mire, within sight of the way out…?"}],()=>{this.phase="rescue",this.rescueT=0,this.help.root.visible=!0,this.cb.setObjective("🤝 Someone is coming…")}))}if(this.pliable){const l=this.pliable.root.position;if(this.pliableStage==="clamber")l.x-=t*3,l.y=this.inBog(l.x,l.z)?-.42+Math.sin(e*11)*.06:0,this.pliable.root.rotation.y=-Math.PI/2,Lt(this.pliable,e*1.7,!0),this.inBog(l.x,l.z)&&Math.random()<t*7&&this.spawnSplash(l.x,l.z),l.x<-9.5&&(this.pliableStage="farewell",l.y=0,this.cb.playScript([{speaker:"Pliable",text:"*scrambles out, dripping* Blegh! Pfah! Mud in my ears, mud in my whiskers, mud in places a gentle-rabbit shan't MENTION!"},{speaker:"Pliable",text:"If this bog is the FIRST step of your glorious journey, Christian, you may keep all the rest of it!"},{speaker:"Christian",text:"Pliable, wait! The crowns, the city — it is all still true! One mire does not un-make it!"},{speaker:"Pliable",text:"Then you may have my share of the crowns AND my share of the mud. I am going HOME. Farewell — and good luck to your poor back!"},{speaker:"Christian",text:"…And there he goes, hopping for home. *sigh* Then I cross alone. There must be solid footing somewhere beneath this mire…"}],()=>{this.pliableStage="flee",this.phase="crossing",this.cb.setObjective("🪨 Keep moving or the mire pulls you under — rest on the solid Steps!")}));else if(this.pliableStage==="farewell")l.y=Math.abs(Math.sin(e*6))*.16,this.pliable.root.rotation.y=Math.PI/2,Lt(this.pliable,e*2,!1);else if(this.pliableStage==="flee")l.x-=t*9,l.y=0,this.pliable.root.rotation.y=-Math.PI/2,Lt(this.pliable,e*1.5,!0),l.x<-30&&(this.scene.remove(this.pliable.root),this.pliable=null);else if(this.phase==="walk"){const h=s.x+1.9,c=s.z-1.2,u=h-l.x,p=c-l.z,f=Math.hypot(u,p);if(f>.15){const _=Math.min(t*6.4,f);l.x+=u/f*_,l.z+=p/f*_,this.pliable.root.rotation.y=Math.atan2(u,p),Lt(this.pliable,e+.4,!0)}else Lt(this.pliable,e+.4,!1)}else this.pliable.root.position.y=-.35,Lt(this.pliable,e+.4,!1)}if(this.phase==="rescue"){this.rescueT+=t;const l=this.help.root.position;this.rescueT<=1.6?(l.x=Zt.lerp(24,17.6,Math.min(this.rescueT/1.6,1)),this.help.root.rotation.y=-Math.PI/2,Lt(this.help,e,!0)):this.rescueT<1.7?(Lt(this.help,e,!1),this.help.armR.rotation.x=-1.2):(this.phase="epilogue",this.cb.playScript([{speaker:"???",text:"Ho there, friend in the mire! What do you there?"},{speaker:"Christian",text:"I fell in as I fled the City of Destruction — and this burden sinks me. I cannot reach the bank!"},{speaker:"Help",text:"I am called Help. But tell me — why did you not look for the Steps? Good solid stones lie through the very midst of this slough."},{speaker:"Christian",text:"Fear chased me in so fast, I never thought to look down…"},{speaker:"Help",text:"So it goes with every pilgrim. Here — give me your paw!"},{speaker:"Help",text:"*HEAVE!*"}],()=>{this.rescueT=2,this.christian.root.position.set(16.5,0,-.5),this.christian.root.rotation.y=Math.PI/2,this.help.armR.rotation.x=0,this.sink=0,this.cb.splashSound(),this.cb.playScript([{speaker:"Christian",text:"*gasp* … Solid ground. Thank you, Help. I had nearly given up hope."},{speaker:"Help",text:"This is the Slough of Despond, friend. When a pilgrim first wakes to how lost he is, all his fears and doubts and discouragements come running — and they settle here, in this low place."},{speaker:"Help",text:"The King's labourers have worked this patch these sixteen hundred years, yet it swallows every cartload of good ground. It cannot be mended — only crossed, by the Steps."},{speaker:"Christian",text:"And Pliable… he struggled out on the side nearest home."},{speaker:"Help",text:"Aye. Many turn back at the first mire. But you came through, burden and all. Go on, Christian — the true Gate is not far now."}],()=>{this.phase="freeroam",this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("✨ Follow the light out of the Slough")})}))}if(this.lightBeam&&this.lightBeam.visible){const l=1+Math.sin(e*2.4)*.12;this.lightBeam.scale.set(l,1,l)}for(let l=0;l<this.wisps.length;l++){const h=this.wisps[l];h.position.x+=t*.3,h.position.x>30&&(h.position.x=-25),h.material.opacity=.25+.12*Math.sin(e*.6+l)}for(const l of this.bubbles){const h=(e*.5+l.phase)%2;l.mesh.visible=h<1,l.mesh.position.y=.2+h*.25,l.mesh.scale.setScalar(.5+h*.9)}for(const l of this.splashes)l.life>=1||(l.life=Math.min(1,l.life+t*2.4),l.mesh.position.x+=l.vx*t,l.mesh.position.z+=l.vz*t,l.mesh.position.y+=t*(.8-l.life),l.m.opacity=.75*(1-l.life),l.life>=1&&(l.mesh.visible=!1))}}const vh=-7,yg=6.5;class Mg{constructor(t){P(this,"scene",new pi);P(this,"phase","walk");P(this,"cb");P(this,"christian");P(this,"wiseman");P(this,"evangelist");P(this,"revisit",!1);P(this,"built",!1);P(this,"mountain",null);P(this,"fireSeams",[]);P(this,"fireLight",null);P(this,"sparks",[]);P(this,"quake",0);P(this,"rumbleTimer",0);P(this,"evangelistT",0);P(this,"wwLeaving",!1);this.cb=t,this.christian=Jt({species:"bear",fur:S.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0}),this.wiseman=Jt({species:"bear",fur:S.bearCocoa,outfit:"shirt",outfitColor:13351152,scale:1.1}),this.wiseman.head.add(g(.8,.1,.8,4867136,0,.88,0)),this.wiseman.head.add(g(.55,.55,.55,4867136,0,1.2,0)),this.wiseman.head.add(g(.58,.12,.58,9067098,0,1,0)),this.evangelist=Jt({species:"bear",fur:11049612,outfit:"robe",outfitColor:S.robeWhite,scale:1.15})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Nt(13950948),t.fog=new Cn(13950948,34,90),t.add(new mi(14740719,11519140,.85));const e=new gi(16116952,1.15);e.position.set(-24,38,20),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-45,e.shadow.camera.right=45,e.shadow.camera.top=40,e.shadow.camera.bottom=-40,t.add(e);const n=new ot(new Et(140,1,90),Ee(10273934));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let u=0;u<60;u++){const p=-45+Math.random()*90,f=-35+Math.random()*70,_=p>4,x=g(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,_?Math.random()>.5?11778442:10923396:Math.random()>.5?9222784:11195548,p,.05,f);x.castShadow=!1,t.add(x)}for(let u=0;u<22;u++){const p=-30+u*2.6,f=g(2.8,.12,3.4,15260088,p,.06,Math.sin(u*.4)*.8);f.castShadow=!1,t.add(f)}for(const[u,p,f]of[[-24,-8,!0],[-19,9,!1],[-13,-10,!1],[-8,8,!0],[-2,-9,!1]]){const _=new ct;_.add(g(.5,1.6,.5,S.trunk,0,.8,0)),_.add(g(1.9,1.3,1.9,f?S.leafPink:S.leaf,0,2.2,0)),_.add(g(1.2,.9,1.2,f?S.leafPink:S.leaf,0,3.1,0)),_.position.set(u,0,p),t.add(_)}for(const[u,p]of[[8,6],[11,-7],[16,8],[19,-6],[9,-10]])t.add(g(1.2+Math.random(),.8,1.1,10132132,u,.4,p)),t.add(g(.7,.5,.7,9276822,u+.8,.25,p+.5));const s=new ct,r=(u,p,f,_,x,m,d)=>s.add(g(u,p,f,_,x,m,d));r(16,4.5,10,9276822,0,2.25,-6),r(13,3.5,8,8224136,.5,6.2,-5.5),r(10,3,7,9276822,0,9.2,-5),r(6.5,2.6,5,7303034,.5,11.8,-4.5),r(3.4,2,3,8224136,0,13.6,-4),r(11,2.6,6,8224136,.5,8,-.5),r(8,2.2,5.5,7303034,1,6,1.6),r(5.5,1.8,4,6447726,1.2,4.6,3.2),r(2.2,1.2,1.8,10132132,-5.5,4.9,-2),r(1.8,1,1.4,10132132,6,5.2,-1.5);const o=()=>new Pt({color:16747069,transparent:!0,opacity:.9});for(const[u,p,f,_,x]of[[-2.5,3,4.9,.7,1.6],[1.8,2.2,5.25,.5,1.1],[3.4,5.2,3.7,.6,1.4],[-1,6.8,2.6,.8,1.2]]){const m=new ot(new Et(_,x,.14),o());m.position.set(u,p,f),s.add(m),this.fireSeams.push(m)}this.fireLight=new Bi(16742973,1.4,26),this.fireLight.position.set(1,5,4.5),s.add(this.fireLight),s.position.set(14,0,-2),t.add(s),this.mountain=s;for(let u=0;u<12;u++){const p=new Pt({color:16757596,transparent:!0,opacity:0}),f=new ot(new Et(.16,.16,.16),p);f.visible=!1,t.add(f),this.sparks.push({mesh:f,m:p,life:1,vx:0,vz:0})}const a=new ct;a.add(g(14,1.2,10,11458976,0,.6,0));const l=(u,p,f)=>{a.add(g(2.2,1.6,1.9,16447212,u,2,p)),a.add(g(2.5,.7,2.2,f,u,3.15,p)),a.add(g(.4,1,.12,S.woodDark,u,1.7,p+1))};l(-3.5,.5,10336472),l(0,1.2,1211e4),l(3.5,.5,10336472);for(let u=0;u<6;u++)a.add(g(1.4,.5,.5,8826237,-5+u*2.1,1.45,3.2));a.position.set(30,0,-4),t.add(a);const h=Jt({species:"bear",fur:9405816,outfit:"robe",outfitColor:10336472,scale:1.05});h.root.position.set(26.5,1.2,-.5),h.root.rotation.y=-Math.PI/2,t.add(h.root);const c=Jt({species:"bear",fur:S.bearHoney,outfit:"shirt",outfitColor:16447212,scale:.7});c.root.position.set(27.5,1.2,1),c.root.rotation.y=-Math.PI/2,t.add(c.root),this.wiseman.root.position.set(vh,0,-2.4),this.wiseman.root.rotation.y=-Math.PI/2,t.add(this.wiseman.root),this.evangelist.root.position.set(-20,0,-3),this.evangelist.root.visible=!1,t.add(this.evangelist.root)}enter(t){return this.build(),this.revisit=t,this.quake=0,this.wwLeaving=!1,this.christian.root.position.set(t?-24:-27,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),t?(this.phase="done",this.wiseman.root.visible=!1,this.evangelist.root.visible=!1,this.cb.setObjective("⛰ Mount Sinai still smoulders — the west road leads back")):(this.phase="walk",this.wiseman.root.visible=!0,this.evangelist.root.visible=!1,this.cb.setObjective("🎩 A well-dressed gentleman waits along the pleasant path…")),{christian:this.christian}}moveFactor(){return this.phase==="quaking"||this.phase==="evangelist"||this.phase==="rebuke"?0:1}afterMove(){const t=this.christian.root.position;t.z=Zt.clamp(t.z,-14,14);const e=this.phase==="return"?8.5:this.revisit?9.5:20;if(t.x=Zt.clamp(t.x,-28,e),this.revisit){t.x<-26.5&&this.cb.onExit();return}if(this.phase==="walk"&&t.x>vh-3){this.phase="diverted",this.cb.playScript([{speaker:"Worldly Wiseman",text:"Hello there! Good day, good day! Christian of the City of Destruction, unless I miss my guess — the bear with the famous burden!"},{speaker:"Christian",text:"Famous or not, sir, it is heavy. I'm headed for the Wicket Gate — they say I can be rid of it there."},{speaker:"Worldly Wiseman",text:"The Wicket Gate! Dear me. Mud, mountains, lions and worse lie on THAT road. You've already had a taste of the Slough, haven't you?"},{speaker:"Christian",text:"…I'm still drying out, if I'm honest."},{speaker:"Worldly Wiseman",text:"Then listen to a practical bear! In the nearby village of MORALITY lives my good friend Mr. Legality — a master at easing burdens exactly like yours. And if he's busy, his fine son Civility will look after you."},{speaker:"Worldly Wiseman",text:"A short, SAFE stroll — no mud, no nonsense. You could get a house there, send for your wife and cubs, and live respectably ever after!"},{speaker:"Christian",text:"No mud… a house for my family… Sir, that sounds very sensible indeed. Which way did you say?"},{speaker:"Worldly Wiseman",text:"Straight on, past that tall hill. First door on the left! Do give Mr. Legality my regards."}],()=>{this.cb.setObjective("🏘 Follow the pleasant path east, toward the village of Morality")});return}if(this.phase==="diverted"&&t.x>yg){this.phase="quaking",this.quake=1,this.cb.rumbleSound(),this.cb.playScript([{speaker:"Christian",text:"The hill… it hangs right OVER the road! And — fire! Fire is flashing from its sides!"},{speaker:"Christian",text:"It groans like thunder above me. One more step and it will surely fall… and this burden feels heavier than it has ever been. What have I done?"}],()=>{this.phase="evangelist",this.evangelistT=0,this.evangelist.root.visible=!0,this.evangelist.root.position.set(t.x-14,0,-2.5),this.cb.setObjective("👣 Someone hurries up the road behind you…")});return}this.phase==="return"&&t.x<-26.5&&(this.phase="done",this.cb.onComplete())}spawnSpark(){if(!this.mountain)return;const t=this.sparks.find(e=>e.life>=1);t&&(t.life=0,t.vx=(Math.random()-.5)*1.2,t.vz=(Math.random()-.5)*1.2,t.mesh.position.set(this.mountain.position.x+(Math.random()-.5)*8,5.5+Math.random()*3,this.mountain.position.z+3+Math.random()*2.5),t.mesh.visible=!0)}update(t,e,n){if(!this.built)return;if(Lt(this.christian,e,n&&this.moveFactor()>0),this.wiseman.root.visible&&(this.wwLeaving?(this.wiseman.root.position.x+=t*6,this.wiseman.root.rotation.y=Math.PI/2,Lt(this.wiseman,e,!0),this.wiseman.root.position.x>24&&(this.wiseman.root.visible=!1)):Lt(this.wiseman,e+1.3,!1)),this.phase==="evangelist"){this.evangelistT+=t;const o=this.evangelist.root.position,a=this.christian.root.position,l=a.x-2.6-o.x,h=a.z-.6-o.z,c=Math.hypot(l,h);c>.3?(o.x+=l/c*t*6.5,o.z+=h/c*t*6.5,this.evangelist.root.rotation.y=Math.atan2(l,h),Lt(this.evangelist,e,!0)):this.evangelistT>.6&&(this.phase="rebuke",this.christian.root.rotation.y=-Math.PI/2,this.cb.playScript([{speaker:"Evangelist",text:"Christian. What are you doing HERE?"},{speaker:"Christian",text:"E-Evangelist! A… a gentleman told me about a quicker way. A Mr. Legality, in the village of Morality, who could lift my burden without the mud and the mountains…"},{speaker:"Evangelist",text:"Listen carefully, dear bear. That gentleman is Mr. WORLDLY WISEMAN, and he loves only the wisdom of this world. He turns every pilgrim he can away from the true road."},{speaker:"Evangelist",text:"Mr. Legality cannot loosen a single strap of your burden — no creature has ever been set free at his door. And Civility, for all his polish, is a smiling fraud like his father."},{speaker:"Evangelist",text:"And THIS mountain is the reason. It is Sinai — the Law itself. It thunders, it flashes, it shows your burden for what it is… but it cannot LIFT it. Trust in your own good deeds, and it will hang over you for the rest of your life."},{speaker:"Christian",text:"Then I've been a fool twice over — once into the mud, and once onto this path. Is there any hope left for me?"},{speaker:"Evangelist",text:"There is. The way you left is exactly where you left it. Go back to the true road, Christian — on to the Wicket Gate — and don't leave it again."},{speaker:"Christian",text:"I'll go back at once. Thank you, Evangelist… again."}],()=>{this.phase="return",this.wwLeaving=!0,this.cb.setObjective("↩ Return west, back to the true way")}))}else this.evangelist.root.visible&&Lt(this.evangelist,e+.8,!1);const s=this.phase;this.quake=Math.max(0,this.quake-t*.25);const r=s==="quaking"||s==="evangelist"?1:.35;if(this.mountain){const o=this.quake*.09;this.mountain.position.x=14+(Math.random()-.5)*o,this.mountain.position.z=-2+(Math.random()-.5)*o}for(let o=0;o<this.fireSeams.length;o++){const a=.35+.65*Math.abs(Math.sin(e*(2.6+o*.7)+o*2));this.fireSeams[o].material.opacity=a*r+.15}if(this.fireLight&&(this.fireLight.intensity=(.8+Math.abs(Math.sin(e*3.1))*1.6)*r),this.rumbleTimer-=t,this.rumbleTimer<=0){this.rumbleTimer=r>=1?1.6+Math.random():6+Math.random()*5,this.cb.rumbleSound(),this.quake=Math.max(this.quake,r>=1?1:.4);for(let o=0;o<(r>=1?5:2);o++)this.spawnSpark()}for(const o of this.sparks)o.life>=1||(o.life=Math.min(1,o.life+t*.9),o.mesh.position.x+=o.vx*t,o.mesh.position.z+=o.vz*t,o.mesh.position.y-=t*3.2,o.m.opacity=.9*(1-o.life),(o.mesh.position.y<.1||o.life>=1)&&(o.life=1,o.mesh.visible=!1))}}const xe=10,na=new C(4,0,-15),zr=100,si=40,wg=new C(si,0,-4.3),Xe=150,ue=[Xe+10,Xe+24,Xe+38,Xe+52,Xe+66,Xe+80],Nn=Xe+92,qe=5.5,bg=qe*2,ia=2.2,yh=ue[4]-4,Sg=[{speaker:"",text:"A little way past the Gate, off the King's Highway, stands a cottage of warm timber with smoke curling from its chimney — the House of the Interpreter."},{speaker:"Interpreter",text:"(an owl in a scholar's robe, blinking down from the doorway) Christian! Goodwill sent word you'd be coming. Come in, come in — I have things to show you that will help you greatly on your journey."},{speaker:"Christian",text:"Gladly, sir. I have long wished for someone who could make plain the things I only half understand."}],Tg=[{speaker:"",text:"The first room is thick with dust — years of it, settled over every beam and floorboard."},{speaker:"Interpreter",text:"Sweep it, if you please."},{speaker:"",text:"A servant sweeps hard. The dust billows up in choking clouds until neither pilgrim can draw breath."},{speaker:"Christian",text:"*coughing* Enough! Stop, I beg you!"}],Eg=[{speaker:"Interpreter",text:"Now — bring water, and sprinkle the floor before you sweep."},{speaker:"",text:"The second servant scatters water first. This time the broom leaves the room clean and sweet."},{speaker:"Interpreter",text:"The dust is sin, hidden deep in the heart of a man. The broom is the Law — it stirs sin up and shows it plainly, but has no power to take it away."},{speaker:"Interpreter",text:"The water is the Gospel. Grace alone settles the dust of sin and truly cleanses the heart."},{speaker:"Christian",text:"Then the Law can only show me my filth — never wash me of it. I begin to see why I could not rest at Sinai."}],Si=[[{speaker:"",text:"In the next room sit two small boys, side by side, though nothing else about them is alike."},{speaker:"Interpreter",text:"This one is named Passion. That one, Patience."},{speaker:"",text:"Passion scowls and demands his whole inheritance at once. It is heaped into his lap — and within minutes he has torn, spilled, and squandered every bit, and sits now in rags among the ruins, sulking."},{speaker:"",text:"Patience asks for nothing, and waits quietly, empty-handed."},{speaker:"Christian",text:"Poor foolish thing. Will he never have any more?"},{speaker:"Interpreter",text:"Not until the appointed time — and by then, Patience will have come into lasting riches, while Passion has nothing left at all."},{speaker:"Interpreter",text:"So it is with the children of this world, who must have their good things now, and the children of the world to come, who can wait for theirs — for theirs will never rust or fade away."},{speaker:"Christian",text:"Better to wait for treasure that lasts, than seize a joy that crumbles in the hand."}],[{speaker:"",text:"Against a wall a fire burns, and a man stands before it, endlessly emptying pails of water on the flames."},{speaker:"Christian",text:"Strange — the more he pours, the higher it burns! Why does it not go out?"},{speaker:"Interpreter",text:"Come round to the other side, and see."},{speaker:"",text:"Behind the wall, unseen from the front, another hand pours oil into the fire — secretly, steadily, without ceasing."},{speaker:"Interpreter",text:"The man with the water is the Devil, forever working to put out the work of grace in the heart. The one with the oil is Christ — He keeps alive what His own hand has begun, even when His people cannot see Him doing it."},{speaker:"Christian",text:"Then when I feel my faith failing under some trial, it may be only that I cannot see the hand still feeding it, behind the wall."},{speaker:"Interpreter",text:"Just so, Christian. Just so."}],[{speaker:"",text:"A crowd of fearful people stands well back from a splendid palace, its gate thick with armed guards."},{speaker:"",text:"None of them dares approach — until one man of bold courage walks up and puts his name down to enter."},{speaker:"",text:"He takes up his helmet, shield, and sword, and fights through the guards, taking many hard blows, until at last he pushes through the doorway and enters."},{speaker:"",text:"A great shout of welcome rises from within."},{speaker:"Interpreter",text:"Christian, you must push through difficulties to enter the kingdom of heaven. Write down your name, take up your weapons, and push in — whatever it costs you."},{speaker:"Christian",text:"Then this road was never meant to be walked without a fight. I had hoped otherwise — but I would rather be wounded at that gate than turn away from it."}],[{speaker:"",text:"In a dim corner, a man sits caged behind bars of black iron, his head bowed low."},{speaker:"Christian",text:"Friend, what brought you here?"},{speaker:"",text:"(the caged man, hollow-voiced) I was once a strong believer, respected in my own eyes and the eyes of others. I stopped watching myself, and hardness followed hardness, sin upon sin, until I could no longer repent, though I wanted to."},{speaker:"",text:"Now I am locked in this cage I made for myself, and I cannot get out."},{speaker:"Interpreter",text:"Let his suffering be a warning to you. Treat sin as harmless, drift away little by little, and you may wake one day to find the door already shut — from the inside."},{speaker:"Christian",text:"*shivering* A dreadful sight. God keep me watchful, and never so careless with sin as he was."}],[{speaker:"",text:"A man sits bolt upright in his bed, trembling, sweat on his brow, staring as though he still saw the vision that woke him."},{speaker:"",text:"(the man, shaking) I dreamed the heavens grew black as pitch, and the trumpet sounded, and the clouds parted, and I stood before the great white throne, unready, without a plea to offer."},{speaker:"Interpreter",text:"Don't let it remain just a dream, Christian. That day comes for every soul alike. Live each one as a man who must give account — and you won't be caught unready when the trumpet truly sounds."},{speaker:"Christian",text:"I will remember this room longest of all, sir. It has put a solemn weight on me — a good weight, I think, unlike the one on my back."}]],Ag=[{speaker:"Christian",text:"Sir, I thank you with all my heart. I came in confused, and I go out instructed — the dust and the Law, the fire and the oil, the cage, the dream — I will carry every one of them with me."},{speaker:"Interpreter",text:"Go then, Christian, and the Lord be with you upon the King's Highway. Always remember what you've seen here, and let it strengthen and comfort you for the rest of your journey."},{speaker:"",text:"The Interpreter walks him to the door, and the bright road outside — and the far light — waits beyond it."}];class Cg{constructor(t){P(this,"scene",new pi);P(this,"phase","approach");P(this,"cb");P(this,"christian");P(this,"goodwill");P(this,"revisit",!1);P(this,"built",!1);P(this,"mutterIndex",0);P(this,"doorL",null);P(this,"doorR",null);P(this,"doorOpen",!1);P(this,"castleGlows",[]);P(this,"arrows",[]);P(this,"volleyT",0);P(this,"arrowTimer",0);P(this,"lightBeam",null);P(this,"hasPassedGate",!1);P(this,"peekBlocked",!1);P(this,"peekVolley",0);P(this,"peekArrowTimer",0);P(this,"goodwillNear",!1);P(this,"interpreter");P(this,"houseGreeted",!1);P(this,"houseCalledOut",!1);P(this,"stationIndex",0);P(this,"dust",[]);P(this,"dustBurst",0);P(this,"dustBurstTarget",0);P(this,"sprinkle",[]);P(this,"sprinkleT",0);P(this,"sprinkleTimer",0);P(this,"fireMotes",[]);P(this,"devilArm",null);P(this,"christArm",null);P(this,"waterDrops",[]);P(this,"oilDrops",[]);P(this,"dropTimer",0);P(this,"cottageDoor",null);P(this,"houseDoorOpen",!1);P(this,"exitDoor",null);P(this,"exitDoorOpen",!1);P(this,"interpreterTarget",null);P(this,"interpreterFaceOnArrive",0);P(this,"interpreterIdleTalked",!1);P(this,"interpreterExitTalked",!1);P(this,"footDust",[]);P(this,"footDustTimer",0);P(this,"sweeper",null);P(this,"sweeperArm",null);P(this,"waterer",null);P(this,"watererArm",null);P(this,"toyBall",null);P(this,"passionArm",null);P(this,"dreamer",null);P(this,"sweatDrops",[]);P(this,"partitionXs",[]);P(this,"houseColliders",[]);P(this,"npcTalks",[]);P(this,"knight",null);P(this,"knightArm",null);P(this,"knightShieldArm",null);P(this,"knightState","idle");P(this,"knightT",0);P(this,"guards",[]);P(this,"guardBaseX",[]);P(this,"guardStagger",[]);P(this,"knightDoorPos",new C);P(this,"fireGlow",null);P(this,"embers",[]);this.cb=t,this.christian=Jt({species:"bear",fur:S.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0,plump:!0}),this.goodwill=Jt({species:"lion",outfit:"robe",outfitColor:S.robeWhite,scale:1.3}),this.interpreter=Jt({species:"owl",outfit:"robe",outfitColor:S.robeGold,scale:1.05})}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Nt(13163752),t.fog=new Cn(13163752,36,95),t.add(new mi(14872306,11716774,.9));const e=new gi(16248536,1.2);e.position.set(-22,38,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-70,e.shadow.camera.right=70,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e);const n=new ot(new Et(210,1,90),Ee(10340243));n.position.set(10,-.5,0),n.receiveShadow=!0,t.add(n);for(let m=0;m<90;m++){const d=-70+Math.random()*185,E=-35+Math.random()*70,y=g(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?9222784:11195548,d,.05,E);y.castShadow=!1,t.add(y)}for(let m=0;m<30;m++){const d=-62+m*2.5,E=g(2.5,.12,3.2,S.path,d,.06,0);E.castShadow=!1,t.add(E)}for(const m of[-52,-36,-20,-4]){const d=new ct;d.add(g(.16,2.2,.16,S.woodDark,0,1.1,0));const E=g(.34,.34,.34,S.light,0,2.35,0);E.material=new Yn({color:S.light,emissive:16773296,emissiveIntensity:.55}),d.add(E),d.position.set(m,0,2.6),t.add(d)}for(const[m,d,E]of[[-56,-7,!1],[-48,8,!0],[-38,-9,!1],[-27,7,!1],[-16,-8,!0],[-8,9,!1]]){const y=new ct;y.add(g(.5,1.6,.5,S.trunk,0,.8,0)),y.add(g(1.9,1.3,1.9,E?S.leafPink:S.leaf,0,2.2,0)),y.add(g(1.2,.9,1.2,E?S.leafPink:S.leaf,0,3.1,0)),y.position.set(m,0,d),t.add(y)}const s=15920351,r=14472386;for(const m of[-1,1]){for(let d=0;d<7;d++){const E=m*(3.4+d*4.4);t.add(g(1.3,3,4.4,d%2===0?s:15327954,xe,1.5,E)),t.add(g(1.4,.28,4.6,r,xe,3.1,E))}t.add(g(1.7,4.2,1.7,s,xe,2.1,m*2.2)),t.add(g(2,.4,2,r,xe,4.3,m*2.2)),t.add(g(1.2,.6,1.2,S.roofPink,xe,4.7,m*2.2))}t.add(g(.9,.9,4.2,s,xe,4.4,0)),t.add(g(1,.3,4.6,r,xe,5,0));const o=m=>{const d=new ct;d.position.set(xe,0,1.35*m);const E=g(.3,3.2,1.35,S.woodDark,0,1.6,-.675*m);return d.add(E),d.add(g(.34,.14,1.35,9072466,0,.9,-.675*m)),d.add(g(.34,.14,1.35,9072466,0,2.3,-.675*m)),this.scene.add(d),d};this.doorL=o(-1),this.doorR=o(1);const a=new ct;a.add(g(.14,1.5,.14,S.woodDark,0,.75,0)),a.add(g(1.5,.7,.1,S.wallCream,0,1.4,0)),a.position.set(xe-1.6,0,3.6),a.rotation.y=-.4,t.add(a);const l=new ct,h=5919844,c=4801618;l.add(g(7,3,5.5,7235704,0,1.5,0)),l.add(g(5.5,3.4,4.2,h,0,4.4,0)),l.add(g(1.6,5.4,1.6,c,-2.6,4.8,-1.4)),l.add(g(1.6,6.2,1.6,c,2.4,5.2,1.2)),l.add(g(1.3,4.8,1.3,h,2.6,4.5,-1.8));for(let m=0;m<5;m++)l.add(g(.7,.7,.7,c,-2+m*1.05,6.4,0));l.add(g(.1,2.4,.1,c,0,8,0)),l.add(g(.9,.6,.06,9058890,.5,8.6,0));for(const[m,d,E]of[[-2.6,5.6,-.5],[2.4,6.4,1.2],[0,5,2.15],[-1.4,4.2,2.15]]){const y=new ot(new Et(.5,.7,.12),new Pt({color:16735309,transparent:!0,opacity:.85}));y.position.set(m,d,E),l.add(y),this.castleGlows.push(y)}l.position.copy(na),t.add(l);for(const[m,d]of[[-1,-9],[8,-10],[1,-20],[9,-18]])t.add(g(.3,1.3,.3,9274488,m,.65,d)),t.add(g(.9,.24,.24,9274488,m+.3,1.3,d));for(let m=0;m<10;m++){const d=new ct;d.add(g(.09,.09,1.1,4867136,0,0,0)),d.add(g(.16,.16,.22,9058890,0,0,.6)),d.add(g(.2,.05,.3,14209996,0,0,-.55)),d.visible=!1,t.add(d),this.arrows.push({g:d,t:1,active:!1,from:new C,to:new C})}for(let m=0;m<38;m++){const d=xe+2+m*2.5,E=g(2.5,.12,2.6,15655876,d,.06,0);E.castShadow=!1,t.add(E);const y=Math.abs(d-si)<3.5;m%1===0&&(t.add(g(2.5,.9,.8,8367732,d,.45,2.1)),y||t.add(g(2.5,.9,.8,8367732,d,.45,-2.1))),m%3===1&&!y&&(t.add(g(.5,.4,.5,S.grassDark,d,1.05,2.1)),t.add(g(.5,.4,.5,S.grassDark,d,1.05,-2.1)))}for(let m=0;m<34;m++){const d=g(.18,.18,.18,[S.flowerYellow,S.flowerPink,S.flowerBlue][m%3],xe+3+Math.random()*84,.98,Math.random()>.5?2.1:-2.1);d.castShadow=!1,t.add(d)}const u=new ct,p=new ot(new Et(2.6,40,2.6),new Pt({color:16767306,transparent:!0,opacity:.8,fog:!1}));p.position.y=20,u.add(p);const f=new ot(new Et(1.3,44,1.3),new Pt({color:16776160,transparent:!0,opacity:.95,fog:!1}));f.position.y=22,u.add(f);const _=new ot(new Et(3.4,3.4,3.4),new Pt({color:16771194,fog:!1}));_.position.y=42,_.rotation.set(Math.PI/4,0,Math.PI/4),u.add(_);const x=new Bi(16771194,3.5,40);x.position.y=4,u.add(x),u.position.set(zr+2,0,0),u.visible=!1,t.add(u),this.lightBeam=u,this.goodwill.root.position.set(xe+2.2,0,-1.6),this.goodwill.root.rotation.y=-Math.PI/2,this.goodwill.root.visible=!1,t.add(this.goodwill.root),t.add(this.interpreter.root),this.buildCottage(),this.buildHouseInterior()}buildCottage(){const t=this.scene,e=si,n=-6.5,s=new ct;s.add(g(4.2,2.6,3.6,S.wallCream,0,1.3,0)),s.add(g(4.6,1.5,4,S.roofPeach,0,3.35,0)),s.add(g(.5,.9,.5,S.woodDark,1.5,3.6,.2)),s.add(g(.9,.16,.3,9072466,0,1.66,1.9)),s.add(g(.7,.7,.1,S.wallMint,-1.4,1.6,1.81)),s.add(g(.7,.7,.1,S.wallMint,1.4,1.6,1.81)),s.position.set(e,0,n),t.add(s);const r=new ct;r.position.set(e-.45,0,n+1.81),r.add(g(.9,1.7,.14,S.woodDark,.45,.85,0)),t.add(r),this.cottageDoor=r;for(let a=0;a<4;a++)t.add(g(1.4,.1,1.2,S.path,e,.05,-2.6-a*1.1));const o=new ct;o.add(g(.12,1.2,.12,S.woodDark,0,.6,0)),o.add(g(1.6,.6,.1,S.wallCream,0,1.1,0)),o.position.set(e-2.3,0,-3.2),o.rotation.y=-.5,t.add(o),this.interpreter.root.position.set(e,0,n+3.2),this.interpreter.root.rotation.y=0,this.interpreter.root.visible=!0}buildHouseInterior(){const t=this.scene,e=Xe+46;t.add(g(96,.2,bg,S.wood,e,-.1,0)),t.add(g(96,3.1,.3,S.wallCream,e,1.55,-qe)),t.add(g(96,3.1,.3,S.wallCream,e,1.55,qe));for(let l=0;l<10;l++){const h=Xe+4+l*9.5;let c=l%2===0?-qe+.4:qe-.4;Math.abs(h-yh)<1.8&&(c=qe-.4);const u=new ct;u.add(g(.14,2.1,.14,S.woodDark,0,1.05,0));const p=g(.32,.32,.32,S.light,0,2.15,0);p.material=new Yn({color:S.light,emissive:16773296,emissiveIntensity:.5}),u.add(p),u.position.set(h,0,c),t.add(u)}const n=[S.wallPink,S.wallMint,S.wallLilac],s=qe-ia;this.partitionXs=[Xe+3,...ue.slice(1).map((l,h)=>(ue[h]+l)/2),Nn-6],this.partitionXs.forEach((l,h)=>{const c=n[h%n.length];t.add(g(.14,2.2,s,c,l,1.1,-7.7/2)),t.add(g(.14,2.2,s,c,l,1.1,(ia+qe)/2))});{const l=ue[0];t.add(g(3.2,.05,3,13351306,l,.03,-3.2)),t.add(g(.4,.3,.4,S.stone,l+.9,.15,-3.4));const h=Jt({species:"mouse",outfit:"overalls",outfitColor:9072466,scale:.52});h.root.position.set(l-.9,0,-2.7),h.root.rotation.y=.5;const c=new ct;c.add(g(.07,.85,.07,S.woodDark,0,-.35,.1)),c.add(g(.24,.18,.1,13215845,0,-.8,.16)),h.armR.add(c),t.add(h.root),this.sweeper=h,this.sweeperArm=h.armR,this.houseColliders.push({x:l-.9,z:-2.7,r:.4}),this.npcTalks.push({parts:h,talked:!1,radius:1.1,lines:[{speaker:"",text:"(the little sweeper, between coughs) It never comes truly clean this way, sir — the harder I sweep, the worse it gets!"}]});const u=Jt({species:"mouse",outfit:"shirt",outfitColor:9418968,scale:.52});u.root.position.set(l+1,0,-3.6),u.root.rotation.y=-.6;const p=g(.2,.22,.18,4867136,0,-.45,.14);u.armR.add(p),t.add(u.root),this.waterer=u,this.watererArm=u.armR,this.houseColliders.push({x:l+1,z:-3.6,r:.4}),this.npcTalks.push({parts:u,talked:!1,radius:1.1,lines:[{speaker:"",text:"(the little waterer, pail in hand) A splash of water first, and the dust lies down like a lamb. Sweeping alone never once managed it."}]});for(let f=0;f<22;f++){const _=new Pt({color:14273187,transparent:!0,opacity:0}),x=new ot(new Et(.18,.18,.18),_),m=l+(Math.random()-.5)*2.8,d=-3.2+(Math.random()-.5)*2.4;x.position.set(m,.3,d),t.add(x),this.dust.push({mesh:x,mat:_,life:Math.random(),baseX:m,baseZ:d})}for(let f=0;f<16;f++){const _=new Pt({color:11458800,transparent:!0,opacity:0}),x=new ot(new Et(.07,.16,.07),_);x.visible=!1,t.add(x),this.sprinkle.push({mesh:x,mat:_,active:!1,vy:0})}}{const l=ue[1],h=Jt({species:"bear",outfit:"shirt",outfitColor:15237962,scale:.68});h.root.position.set(l-1.3,0,1.6),h.root.rotation.y=.5;const c=new ct;c.add(g(.14,.22,.1,16766629,0,0,0)),c.add(g(.13,.13,.1,16238804,0,.17,0)),c.position.set(0,-.28,.2),h.armR.add(c),t.add(h.root),this.passionArm=h.armR,this.houseColliders.push({x:l-1.3,z:1.6,r:.45}),this.npcTalks.push({parts:h,talked:!1,radius:1.2,lines:[{speaker:"Passion",text:"Mine! All of it, NOW! Why should I wait for anything, when I can have it all today?"}]});for(const[_,x,m]of[[-2.2,.5,16769162],[-1.8,1.6,16757702]])t.add(g(.22,.22,.22,m,l+_,.11,x));const u=new ct;u.add(g(.5,.2,.3,16747069,0,.15,0)),u.add(g(.3,.14,.26,16761692,0,.3,0));for(const _ of[-.18,.18])for(const x of[-.13,.13])u.add(g(.1,.1,.1,2894384,_,.06,x));u.position.set(l-2.5,0,1),u.rotation.y=.6,t.add(u);const p=new ot(new $e(.16,10,8),Ee(16739201));p.position.set(l-1.6,.16,2.2),p.castShadow=!0,t.add(p),this.toyBall=p;for(const[_,x,m,d]of[[-2,2.3,11455487,16774857],[-1,.6,S.dressLeaf,16769162]])t.add(g(.3,.3,.3,m,l+_,.16,x)),t.add(g(.32,.06,.06,d,l+_,.24,x)),t.add(g(.06,.06,.32,d,l+_,.24,x));const f=Jt({species:"bear",outfit:"overalls",outfitColor:S.dressLeaf,scale:.68});f.root.position.set(l+1.6,0,1.8),f.root.rotation.y=-.5,t.add(f.root),this.houseColliders.push({x:l+1.6,z:1.8,r:.45}),this.npcTalks.push({parts:f,talked:!1,radius:1.2,lines:[{speaker:"Patience",text:"I'd rather wait and have something that lasts, than grab at what falls apart in my hands."}]})}{const l=ue[2],h=-1.8;t.add(g(.4,1.5,1.8,S.stone,l,2.05,h)),t.add(g(.9,.14,.9,4866104,l,.08,h));for(let f=0;f<14;f++){const _=[16747069,16761692,16735293,16769162][f%4],x=new Pt({color:_}),m=.3+Math.random()*.55,d=new ot(new Et(.18+Math.random()*.14,m,.18+Math.random()*.14),x);d.position.set(l+(Math.random()-.5)*.8,m/2+.1,h+(Math.random()-.5)*.6),t.add(d),this.fireMotes.push(d)}const c=new Bi(16753479,1.8,6);c.position.set(l,.6,h),t.add(c),this.fireGlow=c;for(let f=0;f<10;f++){const _=new Pt({color:16764794,transparent:!0,opacity:0}),x=new ot(new Et(.06,.06,.06),_),m=l+(Math.random()-.5)*.7,d=h+(Math.random()-.5)*.5;x.position.set(m,.3,d),t.add(x),this.embers.push({mesh:x,mat:_,life:Math.random(),baseX:m,baseZ:d})}const u=Jt({species:"cat",outfit:"none",fur:5919844,scale:.9});u.root.position.set(l-1.8,0,h+.3),u.root.rotation.y=Math.PI/2,u.armR.add(g(.26,.34,.22,4867136,0,-.5,.16)),t.add(u.root),this.devilArm=u.armR,this.houseColliders.push({x:l-1.8,z:h+.3,r:.45}),this.npcTalks.push({parts:u,talked:!1,radius:1.2,lines:[{speaker:"",text:"(the dark figure pours, unblinking) Pour and pour... this fire will never go out, no matter what I do to smother it."}]});const p=Jt({species:"lion",outfit:"robe",outfitColor:S.robeWhite,scale:.85});p.root.position.set(l+1.8,0,h+.3),p.root.rotation.y=-Math.PI/2,p.armR.add(g(.22,.3,.2,S.robeGold,0,-.5,.16)),t.add(p.root),this.christArm=p.armR,this.houseColliders.push({x:l+1.8,z:h+.3,r:.45}),this.npcTalks.push({parts:p,talked:!1,radius:1.2,lines:[{speaker:"",text:"(a quiet voice, warm and steady) Have no fear, Christian. My grace feeds this flame, and it will never run dry."}]});for(let f=0;f<10;f++){const _=new Pt({color:5941480,transparent:!0,opacity:0}),x=new ot(new Et(.08,.16,.08),_);x.visible=!1,t.add(x),this.waterDrops.push({mesh:x,mat:_,active:!1})}for(let f=0;f<10;f++){const _=new Pt({color:16769357,transparent:!0,opacity:0}),x=new ot(new Et(.08,.16,.08),_);x.visible=!1,t.add(x),this.oilDrops.push({mesh:x,mat:_,active:!1})}}{const l=ue[3];t.add(g(2.6,2.8,.3,S.roofLilac,l,1.4,4.2)),t.add(g(2.8,.3,.4,S.robeGold,l,2.85,4.2)),t.add(g(.9,1.7,.3,16774857,l,.85,4.05)),this.knightDoorPos.set(l,0,3.85),this.guardBaseX=[];for(const u of[-1.1,1.1]){const p=Jt({species:"pig",outfit:"overalls",outfitColor:5919844,scale:.9});p.root.position.set(l+u,0,3),p.root.rotation.y=Math.PI;const f=new ct;f.add(g(.06,1.2,.06,S.woodDark,0,.3,0)),f.add(g(.12,.24,.12,13093327,0,.95,0)),p.armR.add(f),t.add(p.root),this.guards.push(p),this.guardStagger.push(0),this.guardBaseX.push(l+u),this.houseColliders.push({x:l+u,z:3,r:.45})}const h=Jt({species:"bear",outfit:"shirt",outfitColor:9080730,scale:.95});h.root.position.set(l,0,1.2),h.head.add(g(.7,.22,.68,13093327,0,.74,0)),h.head.add(g(.46,.14,.1,13093327,0,.52,.42)),h.armL.add(g(.36,.5,.1,9080730,0,-.3,.2)),h.armL.add(g(.18,.24,.11,S.robeGold,0,-.3,.24));const c=new ct;c.add(g(.08,.7,.08,14209996,0,-.15,0)),c.add(g(.22,.1,.08,9072466,0,-.46,0)),h.armR.add(c),t.add(h.root),this.knight=h,this.knightArm=h.armR,this.knightShieldArm=h.armL,this.houseColliders.push({x:l,z:1.2,r:.45}),this.npcTalks.push({parts:h,talked:!1,radius:1.3,lines:[{speaker:"",text:"(the armored man, resolute) Set down your name, friend, and take up your sword. This road is not for the faint of heart."}]})}{const l=yh,h=1.1,c=.95,u=2.1,p=-4.35;t.add(g(h*2,.05,c*2,3814976,l,.03,p));const f=2894384;for(const x of[-1.1,-.55,0,.55,1.1])t.add(g(.06,u,.06,f,l+x,u/2,p-c)),t.add(g(.06,u,.06,f,l+x,u/2,p+c));for(const x of[-.63,0,.63])t.add(g(.06,u,.06,f,l-h,u/2,p+x)),t.add(g(.06,u,.06,f,l+h,u/2,p+x));t.add(g(h*2+.1,.06,.06,f,l,u,p-c)),t.add(g(h*2+.1,.06,.06,f,l,u,p+c)),t.add(g(.06,.06,c*2+.1,f,l-h,u,p)),t.add(g(.06,.06,c*2+.1,f,l+h,u,p));const _=Jt({species:"bear",outfit:"none",fur:9406590,scale:.9});_.root.position.set(l,0,p),_.root.rotation.x=.2,_.head.add(g(.16,.14,.05,2894384,-.24,.5,.44)),_.head.add(g(.16,.14,.05,2894384,.24,.5,.44)),_.head.add(g(.2,.04,.04,2894384,0,.5,.44)),t.add(_.root),this.houseColliders.push({x:l,z:p,r:Math.max(h,c)+.1}),this.npcTalks.push({parts:_,talked:!1,radius:1.6,lines:[{speaker:"",text:"(the caged man, barely lifting his head) Don't linger here on my account, friend. Just... don't let your heart go hard the way mine did."}]})}{const l=ue[5],h=3;t.add(g(1.1,.3,2.2,S.woodDark,l,.3,h)),t.add(g(1,.2,2,15659775,l,.5,h)),t.add(g(.5,.18,.4,16774888,l,.6,h-.95)),this.houseColliders.push({x:l,z:h,r:1.15});const c=Jt({species:"rabbit",outfit:"none",scale:.85});c.root.position.set(l,.6,h-.3),c.legL.rotation.x=-1.3,c.legR.rotation.x=-1.3,t.add(c.root),this.dreamer=c;const u=[[-.26,.5],[.28,.55]];for(const[_,x]of u){const m=new Pt({color:7324656,transparent:!0,opacity:0}),d=new ot(new Et(.07,.1,.07),m);d.position.set(_,x,.42),c.head.add(d),this.sweatDrops.push({mesh:d,mat:m,baseY:x})}this.npcTalks.push({parts:c,talked:!1,radius:1.5,lines:[{speaker:"",text:"(the man, still shaking) Don't wake me yet... no, wait — don't let it be real..."}]});const p=new Pt({color:16645622,transparent:!0,opacity:.5}),f=new ot(new Et(.9,1.8,.5),p);f.position.set(l,1.2,qe-.6),t.add(f)}const r=1;t.add(g(.3,3,qe-r,S.wallCream,Nn,1.5,(qe+r)/2)),t.add(g(.3,3,qe-r,S.wallCream,Nn,1.5,-6.5/2)),t.add(g(.3,.4,r*2+.3,S.wallCream,Nn,3.2,0));const o=new ct;o.position.set(Nn,0,-r);const a=g(.14,1.9,r*1.85,S.woodDark,0,.95,r*.925);o.add(a),t.add(o),this.exitDoor=o;for(let l=0;l<16;l++){const h=new Pt({color:16777215,transparent:!0,opacity:0}),c=new ot(new Et(.22,.22,.22),h);c.visible=!1,c.castShadow=!1,t.add(c),this.footDust.push({mesh:c,mat:h,life:1,vx:0,vz:0})}}enter(t){this.build(),this.revisit=t,this.mutterIndex=0,this.volleyT=0,this.houseGreeted=t,this.houseCalledOut=!1,this.interpreterIdleTalked=!1,this.interpreterExitTalked=!1;for(const e of this.npcTalks)e.talked=!1;this.dustBurst=0,this.dustBurstTarget=0,this.sprinkleT=0,this.knightState="idle",this.knightT=0,this.knight&&(this.knight.root.visible=!0,this.knight.root.position.set(ue[3],0,1.2),this.knight.root.rotation.set(0,0,0));for(let e=0;e<this.guards.length;e++)this.guardStagger[e]=0;this.stationIndex=ue.length,this.houseDoorOpen=!1,this.exitDoorOpen=!1,this.interpreterTarget=null;for(const e of this.arrows)e.active=!1,e.g.visible=!1;return this.hasPassedGate=!1,this.peekBlocked=!1,this.peekVolley=0,this.goodwillNear=!1,this.christian.root.position.set(-60,0,0),this.christian.root.rotation.y=Math.PI/2,this.scene.add(this.christian.root),this.interpreter.root.position.set(si,0,-6.5+3.2),this.interpreter.root.rotation.y=0,t?(this.phase="done",this.doorOpen=!0,this.goodwill.root.visible=!0,this.goodwill.root.position.set(xe+2.2,0,-1.6),this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("🚪 The Gate stands open — the narrow way runs east")):(this.phase="approach",this.doorOpen=!1,this.goodwill.root.visible=!1,this.lightBeam&&(this.lightBeam.visible=!1),this.cb.setObjective("🚶 A long, straight road — the Wicket Gate lies far to the east")),{christian:this.christian}}debugSkip(t){var e,n,s,r;this.build(),this.revisit=!1,this.doorOpen=!0,this.goodwill.root.visible=!0,this.goodwill.root.position.set(xe+3.6,0,-1.7),this.lightBeam&&(this.lightBeam.visible=!0),this.phase="freeroam",this.houseGreeted=t==="house",this.stationIndex=t==="house"?0:ue.length,this.interpreterTarget=null,this.interpreterIdleTalked=!1,this.interpreterExitTalked=!1;for(const o of this.npcTalks)o.talked=!1;this.knightState="idle",this.knightT=0,this.knight&&(this.knight.root.visible=!0,this.knight.root.position.set(ue[3],0,1.2),this.knight.root.rotation.set(0,0,0));for(let o=0;o<this.guards.length;o++)this.guardStagger[o]=0;this.hasPassedGate=t!=="house",this.peekBlocked=!1,this.peekVolley=0,this.goodwillNear=!1,t==="house"?(this.christian.root.position.set(Xe,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(Xe+1.5,0,-1.8),this.interpreter.root.rotation.y=-Math.PI/2,this.phase="house",(n=(e=this.cb).setMusic)==null||n.call(e,"interpreter"),this.cb.setObjective("🏚 The House of the Interpreter — walk on to see what he shows you")):(this.christian.root.position.set(xe+4,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(si,0,-6.5+3.2),this.interpreter.root.rotation.y=0,(r=(s=this.cb).setMusic)==null||r.call(s,"gate"),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light"))}moveFactor(){return this.phase==="knock"||this.phase==="volley"||this.phase==="houseGreet"?0:1}resolvePeopleCollision(t){for(const n of[this.interpreter,this.goodwill]){if(!n.root.visible)continue;const s=t.x-n.root.position.x,r=t.z-n.root.position.z,o=Math.hypot(s,r);o<.8&&o>1e-4&&(t.x=n.root.position.x+s/o*.8,t.z=n.root.position.z+r/o*.8)}}resolvePartitions(t){const n=ia/2-.3;if(!(Math.abs(t.z)<n))for(const s of this.partitionXs)t.x>s-.18&&t.x<s+.18&&(t.x=t.x<s?s-.18:s+.18)}resolveHouseColliders(t){for(const e of this.houseColliders){const n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s);r<e.r&&r>1e-4&&(t.x=e.x+n/r*e.r,t.z=e.z+s/r*e.r)}}afterMove(){const t=this.christian.root.position;if(this.resolvePeopleCollision(t),(this.phase==="house"||this.phase==="houseExit")&&(this.resolvePartitions(t),this.resolveHouseColliders(t)),this.phase==="house"||this.phase==="houseExit"){if(t.z=Zt.clamp(t.z,-qe+.8,qe-.8),t.x=Zt.clamp(t.x,Xe-2,Nn+3),this.phase==="house"){if(!this.interpreterIdleTalked&&this.stationIndex===0&&t.distanceTo(this.interpreter.root.position)<1.4){this.interpreterIdleTalked=!0,this.cb.playScript([{speaker:"Interpreter",text:"Take your time, Christian. Walk on when you're ready, and I'll show you all that's here to see."}]);return}for(const e of this.npcTalks)if(!e.talked&&t.distanceTo(e.parts.root.position)<e.radius){e.talked=!0,this.cb.playScript(e.lines);return}if(this.stationIndex<ue.length&&t.x>ue[this.stationIndex]-2){const e=this.stationIndex;this.stationIndex++;const n=t.z>=0?-1.6:1.6;e===0?(this.interpreterTarget=new C(ue[0]-2,0,-2),this.interpreterFaceOnArrive=Math.PI/2,this.christian.root.rotation.y=Math.PI):e===1?(this.interpreterTarget=new C(ue[1]+2,0,-1.8),this.interpreterFaceOnArrive=0):e===2?(this.interpreterTarget=new C(ue[2]-1.8,0,-3),this.interpreterFaceOnArrive=0):e===3?(this.interpreterTarget=new C(ue[3]-2.5,0,n),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI):e===4?(this.interpreterTarget=new C(ue[4]-1,0,n),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI,this.christian.root.rotation.y=Math.PI):(this.interpreterTarget=new C(ue[e]-1,0,n),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI),e===0?(this.dustBurstTarget=1,this.cb.playScript(Tg,()=>{this.dustBurstTarget=0,this.sprinkleT=1.6,this.cb.playScript(Eg)})):e===3?this.cb.playScript([Si[2][0],Si[2][1]],()=>{this.knightState="fighting",this.knightT=0,this.cb.playScript([Si[2][2],Si[2][3]],()=>{this.knightState="entering",this.knightT=0,this.cb.playScript([Si[2][4],Si[2][5]])})}):this.cb.playScript(Si[e-1]);return}if(this.stationIndex>=ue.length&&t.x>Nn-4){this.phase="houseExit";const e=t.z>=0?-1.6:1.6;this.interpreterTarget=new C(Nn-2,0,e),this.interpreterFaceOnArrive=t.z>=0?0:Math.PI,this.exitDoorOpen=!0,this.cb.playScript(Ag,()=>{this.cb.setObjective("🚪 Walk out through the door, back to the King's Highway")})}return}if(t.x>Nn+1.5){const e=()=>{var n,s;this.christian.root.position.set(si,0,-2.2),this.christian.root.rotation.y=0,this.exitDoorOpen=!1,this.houseDoorOpen=!1,this.phase="freeroam",(s=(n=this.cb).setMusic)==null||s.call(n,"gate"),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light")};this.cb.fade?this.cb.fade(e):e()}!this.interpreterExitTalked&&t.distanceTo(this.interpreter.root.position)<1.8&&(this.interpreterExitTalked=!0,this.cb.playScript([{speaker:"Interpreter",text:"Still here, Christian? The road is waiting — but it's good to pause and look back sometimes."},{speaker:"Interpreter",text:"Everything you've seen today will make more sense the further you walk. Now go — grace will carry you to the end."}]));return}if(t.z=Zt.clamp(t.z,-14,14),t.x>xe-1.5&&(this.phase==="approach"||this.phase==="knock")&&(t.x=Math.min(t.x,xe-1.5)),t.x>xe+1){const e=Math.abs(t.x-si)<4;t.z=Zt.clamp(t.z,e?-6.5:-1.6,1.6)}if(t.x=Zt.clamp(t.x,-62,zr+3),this.hasPassedGate&&!this.revisit&&this.phase==="freeroam"&&t.x<xe-1.2?(t.x=xe-1.2,this.peekBlocked||(this.peekBlocked=!0,this.peekVolley=5,this.peekArrowTimer=0,this.cb.rumbleSound(),this.cb.playScript([{speaker:"Goodwill",text:"Careful! Beelzebub's archers never sleep — stay behind the wall, Christian!"}]))):t.x>xe+.5&&(this.peekBlocked=!1),this.goodwill.root.visible&&(this.phase==="freeroam"||this.phase==="done")&&t.distanceTo(this.goodwill.root.position)<2.2?this.goodwillNear||(this.goodwillNear=!0,this.cb.playScript([{speaker:"Goodwill",text:"Still here, are you? The Highway lies straight ahead, Christian — I told you true."},{speaker:"Goodwill",text:"Keep that shining light before your eyes. It has never yet led a pilgrim wrong."}])):this.goodwillNear=!1,this.revisit){(t.x<-58||t.x>zr-2)&&this.cb.onExit();return}if(this.phase==="freeroam"&&!this.houseGreeted&&t.distanceTo(wg)<2.4){this.houseGreeted=!0,this.phase="houseGreet",this.houseDoorOpen=!0,this.christian.root.rotation.y=Math.PI,this.interpreter.root.rotation.y=0,this.cb.playScript(Sg,()=>{const e=()=>{var n,s;this.phase="house",this.stationIndex=0,this.christian.root.position.set(Xe,0,0),this.christian.root.rotation.y=Math.PI/2,this.interpreter.root.position.set(Xe+1.5,0,-1.8),this.interpreter.root.rotation.y=-Math.PI/2,(s=(n=this.cb).setMusic)==null||s.call(n,"interpreter"),this.cb.setObjective("🏚 The House of the Interpreter — walk on to see what he shows you")};this.cb.fade?this.cb.fade(e):e()});return}if(this.phase==="freeroam"&&!this.houseGreeted&&!this.houseCalledOut&&t.x>si+5&&(this.houseCalledOut=!0,this.cb.playScript([{speaker:"Interpreter",text:"Christian! Christian — over here! Won't you stop a moment at an old owl's door?"}])),this.phase==="approach"){const e=[[-45,[{speaker:"Christian",text:"*mutter* …Left my home. Lost my friend in a bog. Nearly crushed beneath a burning mountain. And still this burden sits like a millstone…"},{speaker:"Christian",text:"Is this truly the way? There is no one even to ask."}]],[-30,[{speaker:"Christian",text:"…What a fool I was, to listen to Worldly Wiseman. Smooth words, smooth road — and it led me straight under Sinai."},{speaker:"Christian",text:"Evangelist forgave me. But will the Gate? What if they ask where I have been… and shut it in my face?"}]],[-15,[{speaker:"Christian",text:"So far… and so straight. Not one turning. As if the road itself were telling me: no more byways, old bear."},{speaker:"Christian",text:'*sigh* Help said it. Evangelist said it. "Knock, and it will be opened." Keep walking, Christian. Just keep walking.'}]]];if(this.mutterIndex<e.length&&t.x>e[this.mutterIndex][0]){const n=e[this.mutterIndex][1];this.mutterIndex++,this.cb.playScript(n);return}if(t.x>xe-3.2&&Math.abs(t.z)<4){this.phase="knock",this.christian.root.rotation.y=Math.PI/2,this.cb.playScript([{speaker:"",text:'The gate is shut. Above it, an old inscription reads: "Knock, and it will be opened to you."'},{speaker:"Christian",text:"*knock… knock…* May I enter here? Will he within open even to a broken sinner like me?"},{speaker:"???",text:"(a deep, warm voice, like far-off thunder that means no harm) Who knocks?"},{speaker:"Christian",text:"A poor burdened sinner, come from the City of Destruction. I am bound for the Celestial City — they told me the way lies through this Gate."},{speaker:"Goodwill",text:"Then I gladly open it. We turn no one away who knocks — no one."}],()=>{this.doorOpen=!0,this.goodwill.root.visible=!0,this.cb.blipSound(),this.cb.playScript([{speaker:"",text:"The doors swing open — and there stands a LION, golden-maned and robed in white, filling the gateway like sunrise."},{speaker:"Goodwill",text:"I am Goodwill, keeper of this Gate. But don't stand in the open, friend—"},{speaker:"Goodwill",text:"That castle over there belongs to BEELZEBUB, and his archers shoot at every pilgrim who dares my doorstep. QUICKLY — give me your paw!"}],()=>{this.phase="volley",this.volleyT=0,this.arrowTimer=0,this.cb.rumbleSound(),this.cb.setObjective("🏹 Arrows from the dark castle…!")})});return}}}fireArrow(){const t=this.arrows.find(n=>!n.active);if(!t)return;const e=this.christian.root.position;t.active=!0,t.t=0,t.from.set(na.x-1,7.5,na.z+2),t.to.set(e.x-2.5+Math.random()*5,.1,e.z+1.5+Math.random()*3.5),t.g.visible=!0}update(t,e,n){if(!this.built)return;if(Lt(this.christian,e,n&&this.moveFactor()>0),this.goodwill.root.visible&&Lt(this.goodwill,e+.7,!1),n&&(this.footDustTimer-=t,this.footDustTimer<=0)){this.footDustTimer=.13;const r=this.christian.root.position,o=this.footDust.find(a=>a.life>=1);o&&(o.life=0,o.vx=(Math.random()-.5)*.8,o.vz=(Math.random()-.5)*.8,o.mesh.position.set(r.x+(Math.random()-.5)*.5,.12,r.z+(Math.random()-.5)*.5),o.mesh.visible=!0)}for(const r of this.footDust){if(r.life>=1)continue;r.life=Math.min(1,r.life+t*2.2),r.mesh.position.x+=r.vx*t,r.mesh.position.z+=r.vz*t,r.mesh.position.y+=t*.9;const o=.6+r.life*1.6;r.mesh.scale.setScalar(o),r.mat.opacity=.55*(1-r.life),r.life>=1&&(r.mesh.visible=!1)}if(this.interpreterTarget){const r=this.interpreter.root.position,o=this.interpreterTarget.x-r.x,a=Math.abs(o)<.3,c=(!(this.phase==="house"||this.phase==="houseExit")||a?this.interpreterTarget.z:0)-r.z,u=Math.hypot(o,c);if(u>.12){const p=Math.min(9*t,u);r.x+=o/u*p,r.z+=c/u*p,this.interpreter.root.rotation.y=Math.atan2(o,c),Lt(this.interpreter,e+1.1,!0)}else a?(r.set(this.interpreterTarget.x,0,this.interpreterTarget.z),this.interpreter.root.rotation.y=this.interpreterFaceOnArrive,this.interpreterTarget=null,Lt(this.interpreter,e+1.1,!1)):Lt(this.interpreter,e+1.1,!1)}else Lt(this.interpreter,e+1.1,!1);this.dustBurst+=(this.dustBurstTarget-this.dustBurst)*Math.min(t*1.6,1);for(const r of this.dust)this.dustBurst>.02&&(r.life+=t*(.4+this.dustBurst*1.6),r.life>=1&&(r.life-=1,r.mesh.position.set(r.baseX,.3,r.baseZ)),r.mesh.position.y+=t*(.4+this.dustBurst*.6)),r.mat.opacity=this.dustBurst*.55*Math.sin(r.life*Math.PI);if(this.sprinkleT>0&&(this.sprinkleT-=t,this.sprinkleTimer-=t,this.sprinkleTimer<=0)){this.sprinkleTimer=.03;const r=this.sprinkle.find(o=>!o.active);if(r){const o=ue[0]+(Math.random()-.5)*2.8,a=-3.2+(Math.random()-.5)*2.4;r.active=!0,r.vy=3.5+Math.random(),r.mesh.position.set(o,1.8+Math.random()*.4,a),r.mesh.visible=!0,r.mat.opacity=.85}}for(const r of this.sprinkle)r.active&&(r.mesh.position.y-=r.vy*t,r.mesh.position.y<=.05&&(r.active=!1,r.mesh.visible=!1));for(let r=0;r<this.fireMotes.length;r++){const o=this.fireMotes[r],a=.8+.35*Math.abs(Math.sin(e*6.5+r*1.9));o.scale.set(1,a,1)}this.fireGlow&&(this.fireGlow.intensity=1.5+Math.abs(Math.sin(e*5))*.8);for(const r of this.embers)r.life+=t*.6,r.life>=1&&(r.life-=1,r.mesh.position.set(r.baseX,.3,r.baseZ)),r.mesh.position.y+=t*.7,r.mesh.position.x+=Math.sin(e*3+r.baseZ)*t*.15,r.mat.opacity=.8*(1-r.life);if(this.devilArm&&(this.devilArm.rotation.x=-.9+Math.sin(e*2.2)*.5),this.christArm&&(this.christArm.rotation.x=-.9+Math.sin(e*1.8+1)*.5),this.dropTimer-=t,this.dropTimer<=0){this.dropTimer=.12;const r=this.waterDrops.find(a=>!a.active);r&&(r.active=!0,r.mesh.position.set(ue[2]-1.2+(Math.random()-.5)*.3,.85,-1.7),r.mesh.visible=!0,r.mat.opacity=.85);const o=this.oilDrops.find(a=>!a.active);o&&(o.active=!0,o.mesh.position.set(ue[2]+1.2+(Math.random()-.5)*.3,.85,-1.7),o.mesh.visible=!0,o.mat.opacity=.9)}for(const r of this.waterDrops)r.active&&(r.mesh.position.y-=t*2.2,r.mesh.position.y<=.08&&(r.active=!1,r.mesh.visible=!1));for(const r of this.oilDrops)r.active&&(r.mesh.position.y-=t*2.2,r.mesh.position.y<=.08&&(r.active=!1,r.mesh.visible=!1));if(this.sweeper&&this.sweeperArm){const r=this.dustBurst>.1;this.sweeperArm.rotation.z=r?Math.sin(e*11)*.9:0,this.sweeper.root.position.x=ue[0]-.9+(r?Math.sin(e*3)*.3:0),Lt(this.sweeper,e*4,r)}if(this.waterer&&this.watererArm){const r=this.sprinkleT>0;this.watererArm.rotation.x=r?-1.1+Math.sin(e*5)*.4:-.1,Lt(this.waterer,e*3,!1)}this.toyBall&&(this.toyBall.position.y=.16+Math.abs(Math.sin(e*2.6))*.18),this.passionArm&&(this.passionArm.rotation.x=-.3+Math.sin(e*2.4)*.3),this.dreamer&&(this.dreamer.root.rotation.z=Math.sin(e*19)*.05,this.dreamer.root.rotation.x=Math.sin(e*23)*.04,this.dreamer.head.rotation.y=Math.sin(e*14)*.06);for(let r=0;r<this.sweatDrops.length;r++){const o=this.sweatDrops[r],a=(e*.9+r*.5)%1;o.mesh.position.y=o.baseY-a*.45,o.mat.opacity=.85*(1-a)}if(this.knightState==="fighting")this.knightT+=t,this.knightArm&&(this.knightArm.rotation.x=-.3+Math.sin(this.knightT*11)*1.1),this.knightShieldArm&&(this.knightShieldArm.rotation.z=.2+Math.sin(this.knightT*7+1)*.15),this.knight&&(this.knight.root.rotation.z=Math.sin(this.knightT*8)*.06,Lt(this.knight,e,!1)),this.guards.forEach((r,o)=>{this.guardStagger[o]=Math.max(0,this.guardStagger[o]-t*2.5),Math.random()<t*1.8&&(this.guardStagger[o]=1);const a=this.guardStagger[o];r.root.position.x=this.guardBaseX[o]+Math.sin(this.knightT*22+o)*.08*a,r.root.rotation.z=Math.sin(this.knightT*16+o)*.35*a,Lt(r,e+o,!1)}),this.knightT>2.6&&(this.knightT=.5);else if(this.knightState==="entering"&&this.knight){this.knightT+=t;const r=this.knight.root.position,o=this.knightDoorPos.x-r.x,a=this.knightDoorPos.z-r.z,l=Math.hypot(o,a);if(l>.15){const h=Math.min(3*t,l);r.x+=o/l*h,r.z+=a/l*h,this.knight.root.rotation.y=Math.atan2(o,a),Lt(this.knight,e,!0)}else this.knightState="done",this.knight.root.visible=!1}else this.knight&&this.knight.root.visible&&Lt(this.knight,e+2,!1);const s=this.doorOpen?1.7:0;if(this.doorL&&this.doorR&&(this.doorL.rotation.y+=(-s-this.doorL.rotation.y)*.06,this.doorR.rotation.y+=(s-this.doorR.rotation.y)*.06),this.cottageDoor){const r=this.houseDoorOpen?-2.1:0;this.cottageDoor.rotation.y+=(r-this.cottageDoor.rotation.y)*.08}if(this.exitDoor){const r=this.exitDoorOpen?-2.1:0;this.exitDoor.rotation.y+=(r-this.exitDoor.rotation.y)*.08}for(let r=0;r<this.castleGlows.length;r++)this.castleGlows[r].material.opacity=.5+.4*Math.abs(Math.sin(e*1.7+r*1.9));this.peekVolley>0&&(this.peekArrowTimer-=t,this.peekArrowTimer<=0&&(this.peekArrowTimer=.15,this.fireArrow(),this.peekVolley--)),this.phase==="volley"&&(this.volleyT+=t,this.arrowTimer-=t,this.arrowTimer<=0&&this.volleyT<2&&(this.arrowTimer=.22,this.fireArrow()),this.volleyT>2.4&&(this.phase="inside",this.christian.root.position.set(xe+2.4,0,1.3),this.christian.root.rotation.y=Math.PI,this.goodwill.root.position.set(xe+3.6,0,-1.7),this.goodwill.root.rotation.y=0,this.cb.setObjective("🚪 Safe behind the Gate"),this.cb.blipSound(),this.cb.playScript([{speaker:"",text:"A great paw closes over Christian's, and the world blurs — then the Gate booms shut behind them. The arrows thud harmlessly against the far side."},{speaker:"Goodwill",text:"There. Behind this wall no arrow of his has ever reached. Be welcome, Christian — you are safe now."},{speaker:"Christian",text:"*catching his breath* You… you know my name?"},{speaker:"Goodwill",text:"I know every pilgrim who knocks, little bear. I have been expecting you a long while. Now tell me — why do you come alone, and so late?"},{speaker:"Christian",text:"I fell in the Slough of Despond, and my neighbour turned home. Then a smooth-tongued gentleman turned me aside to Mount Sinai, and I was nearly crushed. I am ashamed of it all, sir."},{speaker:"Goodwill",text:"And yet you are HERE — muddy, singed, and standing at my Gate. That is the whole of what matters. This door was hung for the bruised and the muddy, or it was hung for no one."},{speaker:"Christian",text:"Then… may I ask one thing more? This burden on my back. I have carried it so long. Can it be taken off here?"},{speaker:"Goodwill",text:"Not here, dear pilgrim. Be patient a little longer. Ahead lies the place of deliverance — there it will loosen of itself, and fall from your back, and roll away where no one will ever find it."},{speaker:"Goodwill",text:"Look east. That is the King's Highway — straight and narrow, built by the King and His Son. Keep to it; turn neither left nor right, and you cannot lose your way."},{speaker:"Christian",text:"Straight and narrow. I will keep to it, Goodwill — I promise. My heart feels lighter already… though my back, I confess, does not."},{speaker:"Goodwill",text:"*a low, warm laugh, like summer thunder* It will, Christian. Sooner than you think. Now go — and grace go with you."}],()=>{this.phase="freeroam",this.hasPassedGate=!0,this.lightBeam&&(this.lightBeam.visible=!0),this.cb.setObjective("✨ Walk the straight and narrow way, toward the light")})));for(const r of this.arrows){if(!r.active)continue;if(r.t+=t*1.4,r.t>=1){r.t>1.8?(r.active=!1,r.g.visible=!1):(r.g.position.set(r.to.x,.35,r.to.z),r.g.rotation.set(1.15,0,0));continue}const o=Zt.lerp(r.from.x,r.to.x,r.t),a=Zt.lerp(r.from.z,r.to.z,r.t),l=Zt.lerp(r.from.y,r.to.y,r.t)+Math.sin(r.t*Math.PI)*4,h=Math.min(r.t+.05,1),c=Zt.lerp(r.from.x,r.to.x,h),u=Zt.lerp(r.from.z,r.to.z,h),p=Zt.lerp(r.from.y,r.to.y,h)+Math.sin(h*Math.PI)*4;r.g.position.set(o,l,a),r.g.lookAt(c,p,u)}if(this.lightBeam&&this.lightBeam.visible){const r=1+Math.sin(e*2.4)*.12;this.lightBeam.scale.set(r,1,r)}this.phase==="freeroam"&&this.christian.root.position.x>zr-2&&(this.phase="done",this.cb.onComplete())}}const Mh=-32,Vs=11,Rg=7,Pg=-1.2,ps=new C(5.2,0,-2.8),Ws=36;class Ig{constructor(t){P(this,"scene",new pi);P(this,"phase","approach");P(this,"cb");P(this,"christian");P(this,"oldClothes");P(this,"newClothes");P(this,"burdenOnBack");P(this,"seal");P(this,"scroll");P(this,"angels",[]);P(this,"angelTargets",[]);P(this,"burdenProp");P(this,"rollT",0);P(this,"rollFrom",new C);P(this,"descendT",0);P(this,"angelBob",[0,0,0]);P(this,"lightBeam",null);P(this,"lightHalo",null);P(this,"crossGlow",null);P(this,"sparkles",[]);P(this,"notes",[]);P(this,"noteTimer",0);P(this,"footDust",[]);P(this,"footDustTimer",0);P(this,"revisit",!1);P(this,"built",!1);this.cb=t,this.christian=Jt({species:"bear",fur:S.bearBrown,outfit:"none",sling:!0,plump:!0});const e=this.christian.body;this.oldClothes=new ct,this.oldClothes.add(g(1.12,.54,.8,9418968,0,.53,0)),e.add(this.oldClothes);const n=g(.32,.28,.36,9418968,0,-.1,0),s=g(.32,.28,.36,9418968,0,-.1,0);this.christian.armL.add(n),this.christian.armR.add(s),this.oldClothes.userData.sleeves=[n,s],this.newClothes=new ct,this.newClothes.add(g(1.14,.56,.82,S.robeWhite,0,.53,0)),this.newClothes.add(g(1.18,.14,.86,S.robeGold,0,.3,0)),this.newClothes.add(g(.34,.12,.06,S.robeGold,0,.68,.44)),e.add(this.newClothes);const r=g(.34,.3,.38,S.robeWhite,0,-.1,0),o=g(.34,.3,.38,S.robeWhite,0,-.1,0);this.christian.armL.add(r),this.christian.armR.add(o),this.newClothes.userData.sleeves=[r,o],this.burdenOnBack=new ct,this.burdenOnBack.add(g(.88,.62,.54,S.burden,0,.45,-.56)),this.burdenOnBack.add(g(.7,.5,.46,8880506,0,.96,-.54)),this.burdenOnBack.add(g(.5,.36,.36,S.burdenStrap,0,1.28,-.52)),this.burdenOnBack.add(g(.1,.6,.08,S.burdenStrap,-.3,.45,.31)),this.burdenOnBack.add(g(.1,.6,.08,S.burdenStrap,.3,.45,.31)),e.add(this.burdenOnBack),this.seal=g(.1,.1,.04,S.robeGold,0,.62,.42),this.seal.castShadow=!1,this.christian.head.add(this.seal),this.scroll=new ct;const a=new ot(new cn(.09,.09,.5,8),Ee(16643811));a.rotation.z=Math.PI/2,this.scroll.add(a),this.scroll.add(g(.1,.2,.2,13194079,0,0,0)),this.scroll.position.set(0,-.5,.2),this.christian.armR.add(this.scroll),this.burdenProp=new ct,this.burdenProp.add(g(.88,.62,.54,S.burden,0,0,0)),this.burdenProp.add(g(.7,.5,.46,8880506,0,.5,.02)),this.burdenProp.add(g(.5,.36,.36,S.burdenStrap,0,.84,.04)),this.burdenProp.visible=!1}groundY(t,e){const n=Math.hypot(t,e);if(n>=Vs)return 0;const s=1-(n/Vs)**2;return Rg*s*s*(3-2*s)}dressOld(){this.oldClothes.visible=!0;for(const t of this.oldClothes.userData.sleeves)t.visible=!0;this.newClothes.visible=!1;for(const t of this.newClothes.userData.sleeves)t.visible=!1;this.seal.visible=!1,this.scroll.visible=!1}dressNew(t){this.oldClothes.visible=!1;for(const e of this.oldClothes.userData.sleeves)e.visible=!1;this.newClothes.visible=!0;for(const e of this.newClothes.userData.sleeves)e.visible=!0;this.seal.visible=t,this.scroll.visible=t}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Nt(14086143),t.fog=new Cn(14086143,40,100),t.add(new mi(15792383,12903096,1.05));const e=new gi(S.sun,1.5);e.position.set(-24,40,22),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e);const n=new ot(new Et(150,1,90),Ee(S.grass));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let f=0;f<55;f++){const _=-50+Math.random()*100,x=-35+Math.random()*70;if(Math.hypot(_,x)<Vs+1)continue;const m=g(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?S.grassLight:S.grassDark,_,.05,x);m.castShadow=!1,t.add(m)}const s=[10411671,S.grass,11069091],r=9;for(let f=0;f<r;f++){const _=Vs*(1-f/r)+.5,x=Math.max(this.groundY(Vs*(1-(f+.7)/r),0),.5),m=new ot(new cn(_,_+.7,x,24),Ee(s[f%3]));m.position.set(0,x/2,0),m.receiveShadow=!0,m.castShadow=!0,t.add(m)}for(let f=0;f<14;f++){const _=Math.random()*Math.PI*2,x=3+Math.random()*7,m=Math.cos(_)*x,d=Math.sin(_)*x,E=g(.16,.16,.16,[S.flowerYellow,S.flowerPink,S.flowerBlue][f%3],m,this.groundY(m,d)+.1,d);E.castShadow=!1,t.add(E)}for(let f=0;f<=24;f++){const _=-34+f*2.9,x=(Math.random()-.5)*.9,m=g(.85+Math.random()*.55,.14,1.6+Math.random()*.7,S.path,_,this.groundY(_,x)+.06,x);m.castShadow=!1,t.add(m)}const o=new ct;o.add(g(.55,4.6,.55,S.woodDark,0,2.3,0)),o.add(g(2.7,.55,.55,S.woodDark,0,3.5,0));const a=new ot(new $e(2.6,20,16),new Pt({color:16774072,transparent:!0,opacity:.22,depthWrite:!1}));a.position.y=3.2,o.add(a),this.crossGlow=a;const l=new Bi(16773312,1.2,20);l.position.y=3.5,o.add(l),o.position.set(0,this.groundY(0,-2.2),-2.2),t.add(o);const h=new ct;h.add(g(2.6,2,2.2,12170412,0,1,0)),h.add(g(2.9,.5,2.5,11051674,0,2.2,0)),h.add(g(.2,1.2,1,3024931,-1.25,.7,0));const c=new ot(new cn(.9,.9,.4,14),Ee(11051674));c.rotation.x=Math.PI/2,c.rotation.z=Math.PI/2,c.position.set(-1.2,.9,1.7),h.add(c),h.position.set(ps.x,this.groundY(ps.x,ps.z),ps.z),t.add(h);for(const[f,_,x]of[[-26,-7,!0],[-20,8,!1],[-14,-9,!0],[16,7,!1],[22,-8,!0],[28,6,!1]]){const m=new ct;m.add(g(.5,1.6,.5,S.trunk,0,.8,0)),m.add(g(1.9,1.3,1.9,x?S.leafPink:S.leaf,0,2.2,0)),m.add(g(1.2,.9,1.2,x?S.leafPink:S.leaf,0,3.1,0)),m.position.set(f,0,_),t.add(m)}const u=new ot(new cn(1.4,2,14,18,1,!0),new Pt({color:S.light,transparent:!0,opacity:.5,side:ln,depthWrite:!1}));u.position.set(Ws+1.5,7,0),t.add(u),this.lightBeam=u;const p=new ot(new $e(2.4,18,14),new Pt({color:16775645,transparent:!0,opacity:.4,depthWrite:!1}));p.position.set(Ws+1.5,1.6,0),t.add(p),this.lightHalo=p;for(let f=0;f<3;f++){const _=Jt({species:"bear",fur:15917769,outfit:"robe",outfitColor:S.robeWhite,scale:1.05}),x=new ot(new co(.32,.06,8,18),new Pt({color:S.robeGold}));x.rotation.x=Math.PI/2,x.position.y=1.15,_.head.add(x),_.root.visible=!1,t.add(_.root),this.angels.push(_)}for(let f=0;f<26;f++){const _=new Pt({color:16773304,transparent:!0,opacity:0}),x=new ot(new Et(.16,.16,.16),_);x.visible=!1,t.add(x),this.sparkles.push({mesh:x,m:_,life:1,vx:0,vy:0,vz:0})}for(let f=0;f<8;f++){const _=new Pt({color:16777215,transparent:!0,opacity:0}),x=new ot(new Et(.2,.28,.06),_);x.visible=!1,t.add(x),this.notes.push({mesh:x,m:_,life:1})}for(let f=0;f<16;f++){const _=new Pt({color:16777215,transparent:!0,opacity:0}),x=new ot(new Et(.22,.22,.22),_);x.visible=!1,x.castShadow=!1,t.add(x),this.footDust.push({mesh:x,mat:_,life:1,vx:0,vz:0})}t.add(this.burdenProp),t.add(this.christian.root)}enter(t){var e,n,s,r;this.build(),this.revisit=t,this.rollT=0,this.descendT=0,this.burdenProp.visible=!1;for(const o of this.angels)o.root.visible=!1;return this.christian.root.position.set(t?-28:-30,0,0),this.christian.root.rotation.y=Math.PI/2,t?(this.phase="done",this.dressNew(!0),(n=(e=this.cb).setMusic)==null||n.call(e,"cross"),this.cb.setObjective("✝ The Cross stands quiet on the hill — the light in the east leads on")):(this.phase="approach",this.dressOld(),this.burdenOnBack.visible=!0,(r=(s=this.cb).setMusic)==null||r.call(s,"gate"),this.cb.setObjective("⛰ A green hill rises ahead — something stands at the top…")),{christian:this.christian}}moveFactor(){return this.phase==="wonder"||this.phase==="rolling"||this.phase==="rejoice"||this.phase==="descend"||this.phase==="angels"?0:1}afterMove(){const t=this.christian.root.position;if(t.z=Zt.clamp(t.z,-10,10),t.x=Zt.clamp(t.x,Mh-1,Ws+2),t.y=this.groundY(t.x,t.z),this.revisit||this.phase==="done"){(t.x<Mh||t.x>Ws)&&this.cb.onExit();return}if(this.phase==="approach"&&t.x>Pg){this.phase="wonder",this.christian.root.rotation.y=Math.PI,this.cb.playScript([{speaker:"",text:"At the top of the hill stands a Cross — and a little below, on the slope, an open tomb."},{speaker:"Christian",text:"The Cross… so this is the place Evangelist spoke of."},{speaker:"Christian",text:"Wait — something is moving. The straps… they're loosening on their own—!"}],()=>{this.phase="rolling",this.rollT=0,this.burdenOnBack.visible=!1,this.rollFrom.set(t.x-.4,t.y+.9,t.z),this.burdenProp.position.copy(this.rollFrom),this.burdenProp.rotation.set(0,0,0),this.burdenProp.visible=!0});return}this.phase==="joy"&&t.x>Ws&&(this.phase="done",this.cb.onComplete())}burstSparkles(t,e,n=1){let s=0;for(const r of this.sparkles){if(s>=e)break;r.life<1||(s++,r.life=0,r.vx=(Math.random()-.5)*2.4*n,r.vy=1.2+Math.random()*2,r.vz=(Math.random()-.5)*2.4*n,r.mesh.position.copy(t),r.mesh.visible=!0)}}runAngelSequence(){this.phase="angels";const t=this.christian.root.position;this.cb.playScript([{speaker:"",text:"Three Shining Ones stand before him, bright as morning."},{speaker:"First Shining One",text:"Peace be with you, Christian. Your sins are forgiven."}],()=>{this.burstSparkles(new C(t.x,t.y+1.2,t.z),14,1.2),this.cb.blipSound(),this.dressNew(!1),this.cb.playScript([{speaker:"Second Shining One",text:"I take from you these worn, travel-stained clothes… and dress you in garments new and shining."},{speaker:"",text:"His old rags are gone. Christian stands in spotless white, a golden sash about his waist."}],()=>{this.burstSparkles(new C(t.x,t.y+1.8,t.z),8,.6),this.cb.blipSound(),this.seal.visible=!0,this.scroll.visible=!0,this.cb.playScript([{speaker:"Third Shining One",text:"And I set this mark upon your forehead, and place in your paw a sealed scroll."},{speaker:"Third Shining One",text:"Read it as you travel, to comfort you on the way — and hand it in at the gate of the Celestial City. It is the King's own promise that you belong to Him."},{speaker:"Christian",text:"Forgiven… clothed… and sealed. I came up this hill bent double, and I will go down it singing!"}],()=>{var e,n;this.phase="joy";for(const s of this.angels)s.root.visible=!1;this.burstSparkles(new C(t.x,t.y+2.5,t.z),10,2),(n=(e=this.cb).setMusic)==null||n.call(e,"cross"),this.cb.setObjective("🎵 Walk on east, down the hill and into the light, singing!")})})})}update(t,e,n){if(this.built){if(Lt(this.christian,e,n&&this.moveFactor()>0),this.phase==="rolling"){this.rollT+=t;const r=Math.min(1,this.rollT/2.6),o=r*r*(3-2*r),a=Zt.lerp(this.rollFrom.x,ps.x-1.2,o),l=Zt.lerp(this.rollFrom.z,ps.z,o);this.burdenProp.position.set(a,this.groundY(a,l)+.45,l),this.burdenProp.rotation.z-=t*(2+r*8),r>=1&&(this.burdenProp.visible=!1,this.burstSparkles(this.burdenProp.position.clone().add(new C(0,.8,0)),12,1.4),this.cb.blipSound(),this.phase="rejoice",this.cb.playScript([{speaker:"",text:"The burden tumbles down the hill, rolls in at the mouth of the tomb — and is never seen again."},{speaker:"Christian",text:"It's gone… it's truly gone! All this way I carried it, and here it fell off by itself!"},{speaker:"Christian",text:"Not by anything I have done — He has borne my guilt for me. He has given me rest by His sorrow, and life by His death."}],()=>{this.phase="descend",this.descendT=0;const h=this.christian.root.position;this.angelTargets=[new C(h.x-2.2,0,h.z+1.6),new C(h.x,0,h.z+2.8),new C(h.x+2.2,0,h.z+1.6)],this.angels.forEach((c,u)=>{const p=this.angelTargets[u];c.root.position.set(p.x,this.groundY(p.x,p.z)+9,p.z),c.root.rotation.y=0,c.root.visible=!0}),this.cb.setObjective("✨ Light gathers on the hilltop…")}))}if(this.phase==="descend"){this.descendT+=t;let s=!0;this.angels.forEach((r,o)=>{const a=this.angelTargets[o],l=this.groundY(a.x,a.z),h=o*.35,c=Math.min(1,Math.max(0,(this.descendT-h)/2)),u=1-(1-c)**3;r.root.position.y=l+9*(1-u),c<1&&(s=!1),Math.random()<.06&&this.burstSparkles(r.root.position.clone().add(new C(0,1.5,0)),1,.5)}),s&&this.descendT>2.9&&this.runAngelSequence()}for(let s=0;s<this.angels.length;s++){const r=this.angels[s];if(r.root.visible){if(this.phase==="angels"){const o=this.angelTargets[s];r.root.position.y=this.groundY(o.x,o.z)+.15+Math.sin(e*1.8+s*2.1)*.08}Lt(r,e+s*1.3,!1)}}if(this.crossGlow&&(this.crossGlow.material.opacity=.16+.12*Math.abs(Math.sin(e*1.2))),this.lightBeam){const s=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(s,1,s)}this.lightHalo&&(this.lightHalo.material.opacity=.3+.2*Math.abs(Math.sin(e*1.7)));for(const s of this.sparkles)s.life>=1||(s.life=Math.min(1,s.life+t*1.1),s.mesh.position.x+=s.vx*t,s.mesh.position.y+=s.vy*t,s.mesh.position.z+=s.vz*t,s.vy-=t*1.4,s.m.opacity=.9*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if((this.phase==="joy"||this.revisit&&this.phase==="done")&&n&&(this.noteTimer-=t,this.noteTimer<=0)){this.noteTimer=.55;const s=this.notes.find(r=>r.life>=1);if(s){const r=this.christian.root.position;s.life=0,s.mesh.position.set(r.x+(Math.random()-.5)*.8,r.y+2.2,r.z+(Math.random()-.5)*.8),s.mesh.visible=!0}}for(const s of this.notes)s.life>=1||(s.life=Math.min(1,s.life+t*.8),s.mesh.position.y+=t*1.1,s.mesh.rotation.y+=t*3,s.m.opacity=.85*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if(n&&this.moveFactor()>0&&(this.footDustTimer-=t,this.footDustTimer<=0)){this.footDustTimer=.13;const s=this.christian.root.position,r=this.footDust.find(o=>o.life>=1);r&&(r.life=0,r.vx=(Math.random()-.5)*.8,r.vz=(Math.random()-.5)*.8,r.mesh.position.set(s.x+(Math.random()-.5)*.5,s.y+.12,s.z+(Math.random()-.5)*.5),r.mesh.visible=!0)}for(const s of this.footDust){if(s.life>=1)continue;s.life=Math.min(1,s.life+t*2.2),s.mesh.position.x+=s.vx*t,s.mesh.position.z+=s.vz*t,s.mesh.position.y+=t*.9;const r=.6+s.life*1.6;s.mesh.scale.setScalar(r),s.mat.opacity=.55*(1-s.life),s.life>=1&&(s.mesh.visible=!1)}}}}const wh=-32,Xs=44,Br=-14,Lg=0,Dg=26,Ys=10;class kg{constructor(t){P(this,"scene",new pi);P(this,"phase","walk");P(this,"cb");P(this,"christian");P(this,"sleepers",[]);P(this,"formalist");P(this,"hypocrisy");P(this,"climbT",-1);P(this,"nightP",0);P(this,"hemi",null);P(this,"sunLight",null);P(this,"stars",[]);P(this,"starMat",null);P(this,"moon",null);P(this,"moonMat",null);P(this,"fireflies",[]);P(this,"zzz",[]);P(this,"zzzTimer",0);P(this,"lightBeam",null);P(this,"lightHalo",null);P(this,"revisit",!1);P(this,"built",!1);this.cb=t,this.christian=Jt({species:"bear",fur:S.bearBrown,outfit:"shirt",outfitColor:S.robeWhite,sling:!0,plump:!0}),this.christian.body.add(g(1.18,.14,.86,S.robeGold,0,.3,0));const e=g(.1,.1,.04,S.robeGold,0,.62,.42);e.castShadow=!1,this.christian.head.add(e);const n=Jt({species:"bear",fur:14660974,outfit:"shirt",outfitColor:11060386});for(const l of[-1,1]){const h=g(.2,.44,.14,13212498,.42*l,.7,.06);h.rotation.z=.35*l,n.head.add(h)}const s=Jt({species:"bear",fur:10129274,outfit:"shirt",outfitColor:12102286});for(const l of[-1,1]){const h=g(.16,.3,.05,6182472,.24*l,.52,.42);h.rotation.z=-.5*l,s.head.add(h)}const r=Jt({species:"cat",fur:15126464,outfit:"dress",outfitColor:14198968});this.sleepers=[n,s,r];const o=(l,h,c)=>{l.body.add(g(.4,.42,.06,16447212,0,.5,.36)),l.body.add(g(.2,.1,.07,c,0,.7,.37)),l.body.add(g(.06,.1,.07,3025448,0,.7,.38)),l.body.add(g(.5,.34,.1,h,0,.12,-.32))},a=(l,h,c)=>{l.body.add(g(.18,.18,.62,h,.2,.28,-.62)),l.body.add(g(.18,.6,.18,h,.2,.62,-.95)),l.body.add(g(.22,.24,.22,c,.2,1.02,-.95))};this.formalist=Jt({species:"cat",fur:4143930,outfit:"shirt",outfitColor:3817290}),o(this.formalist,3817290,13194079),a(this.formalist,4143930,16447212),this.hypocrisy=Jt({species:"cat",fur:14253898,outfit:"shirt",outfitColor:6965858}),o(this.hypocrisy,6965858,3825546),a(this.hypocrisy,14253898,16447212),this.hypocrisy.head.add(g(.2,.16,.14,14253898,0,.22,.5))}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Nt(16767400),t.fog=new Cn(16767400,40,100),this.hemi=new mi(16773336,12892312,1),t.add(this.hemi);const e=new gi(16761466,1.3);e.position.set(-30,22,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=45,e.shadow.camera.bottom=-45,t.add(e),this.sunLight=e;const n=new ot(new Et(150,1,90),Ee(9681797));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let a=0;a<50;a++){const l=-50+Math.random()*100,h=-35+Math.random()*70,c=g(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?8826237:10798746,l,.04+Math.random()*.03,h);c.castShadow=!1,t.add(c)}for(let a=0;a<=26;a++){const l=-34+a*3,h=(Math.random()-.5)*.9,c=g(.9+Math.random()*.6,.14,1.7+Math.random()*.7,S.path,l,.07,h);c.castShadow=!1,t.add(c)}for(const[a,l,h]of[[-28,7,!0],[-22,-8,!1],[-6,8,!1],[18,8,!0],[30,-8,!1],[36,7,!0]]){const c=new ct;c.add(g(.5,1.6,.5,S.trunk,0,.8,0)),c.add(g(1.9,1.3,1.9,h?S.leafPink:S.leaf,0,2.2,0)),c.add(g(1.2,.9,1.2,h?S.leafPink:S.leaf,0,3.1,0)),c.position.set(a,0,l),t.add(c)}const s=[[Br-2.4,4.2,.4],[Br,5.6,-.3],[Br+2.4,4.4,.2]];this.sleepers.forEach((a,l)=>{const[h,c,u]=s[l];a.root.position.set(h,.42,c),a.root.rotation.z=Math.PI/2,a.root.rotation.y=u,t.add(a.root);const p=g(.16,.7,.16,6183509,h+1.2,.3,c+.8);t.add(p);for(let f=0;f<3;f++){const _=new ot(new co(.13,.045,6,10),Ee(7236196));_.position.set(h+.35+f*.32,.12,c+.55+f*.1),_.rotation.set(Math.PI/2,0,f*.7),t.add(_)}});for(let a=Lg;a<=Dg;a+=2)t.add(g(2.1,1.7,.8,12169378,a,.85,-3.6)),t.add(g(2.25,.25,.95,10721932,a,1.8,-3.6));this.formalist.root.position.set(Ys-1.2,0,-6),this.formalist.root.visible=!1,t.add(this.formalist.root),this.hypocrisy.root.position.set(Ys+1.2,0,-6),this.hypocrisy.root.visible=!1,t.add(this.hypocrisy.root),this.starMat=new Pt({color:16775392,transparent:!0,opacity:0,fog:!1});for(let a=0;a<40;a++){const l=new ot(new Et(.18,.18,.18),this.starMat);l.position.set(-55+Math.random()*110,16+Math.random()*18,-38-Math.random()*8),l.castShadow=!1,t.add(l),this.stars.push(l)}this.moonMat=new Pt({color:16118496,transparent:!0,opacity:0,fog:!1}),this.moon=new ot(new $e(1.6,20,16),this.moonMat),this.moon.position.set(26,26,-40),t.add(this.moon);for(let a=0;a<10;a++){const l=new Pt({color:14217888,transparent:!0,opacity:0}),h=new ot(new Et(.12,.12,.12),l);h.position.set(-25+Math.random()*60,.8+Math.random()*1.4,-8+Math.random()*16),h.castShadow=!1,t.add(h),this.fireflies.push({mesh:h,m:l,ph:Math.random()*6.28})}for(let a=0;a<6;a++){const l=new Pt({color:16777215,transparent:!0,opacity:0}),h=new ot(new Et(.22,.26,.06),l);h.visible=!1,t.add(h),this.zzz.push({mesh:h,m:l,life:1})}const r=new ot(new cn(1.4,2,14,18,1,!0),new Pt({color:S.light,transparent:!0,opacity:.5,side:ln,depthWrite:!1,fog:!1}));r.position.set(Xs+1.5,7,0),t.add(r),this.lightBeam=r;const o=new ot(new $e(2.4,18,14),new Pt({color:16775645,transparent:!0,opacity:.4,depthWrite:!1,fog:!1}));o.position.set(Xs+1.5,1.6,0),t.add(o),this.lightHalo=o,t.add(this.christian.root)}applyNight(){const t=this.nightP,e=new Nt(16767400),n=new Nt(10127016),s=new Nt(3095135),r=t<.5?e.lerp(n,t*2):n.lerp(s,(t-.5)*2);this.scene.background.copy(r),this.scene.fog.color.copy(r),this.hemi&&(this.hemi.intensity=1-t*.62),this.sunLight&&(this.sunLight.intensity=1.3-t*1.1),this.starMat&&(this.starMat.opacity=Math.max(0,t-.45)/.55),this.moonMat&&(this.moonMat.opacity=Math.max(0,t-.4)/.6)}enter(t){var e,n;return this.build(),this.revisit=t,this.nightP=0,this.climbT=-1,this.formalist.root.visible=!1,this.hypocrisy.root.visible=!1,this.christian.root.position.set(t?-28:-30,0,0),this.christian.root.rotation.y=Math.PI/2,(n=(e=this.cb).setMusic)==null||n.call(e,"cross"),t?(this.phase="done",this.cb.setObjective("🛣 The King's Highway lies quiet — the light in the east leads on")):(this.phase="walk",this.cb.setObjective("🛣 Follow the King's Highway east through the golden afternoon")),this.applyNight(),{christian:this.christian}}moveFactor(){return this.phase==="sleepers"||this.phase==="climb"||this.phase==="debate"?0:1}afterMove(){const t=this.christian.root.position;if(t.z=Zt.clamp(t.z,-2.6,10),t.x=Zt.clamp(t.x,wh-1,Xs+2),this.nightP=Math.max(this.nightP,Zt.clamp((t.x+30)/66,0,1)),this.revisit||this.phase==="done"){(t.x<wh||t.x>Xs)&&this.cb.onExit();return}if(this.phase==="walk"&&t.x>Br-4.5){this.phase="sleepers",this.christian.root.rotation.y=Math.PI*.75,this.cb.playScript([{speaker:"",text:"A little way off the road, three figures lie fast asleep in the grass — and about their ankles, iron chains."},{speaker:"Christian",text:"Hey! Friends! Wake up! You are like sailors asleep at the top of a mast — the deep sea is right under you!"},{speaker:"Christian",text:"There are chains on your legs! If you sleep on here, the prowler of this road will take you. Get up — I'll help you out of your irons!"},{speaker:"Simple",text:"*one eye opens* Mmh? …I see no danger. *tail thumps twice, then stops*"},{speaker:"Sloth",text:"Yes… danger… terrible… just a little more sleep first…"},{speaker:"Presumption",text:"Every tub must stand on its own bottom, dear. I shall be perfectly fine. Do mind your own knitting."},{speaker:"",text:"And with that, all three roll over and sleep on."},{speaker:"Christian",text:"Asleep, in chains, and not one of them troubled by it… I cannot wake anyone who is determined to sleep. God keep them — I must go on."}],()=>{this.phase="walk2",this.cb.setObjective("🌇 Walk on east — the sun is sinking behind you")});return}if(this.phase==="walk2"&&t.x>Ys-5){this.phase="climb",this.climbT=0,this.formalist.root.visible=!0,this.hypocrisy.root.visible=!0,this.cb.blipSound(),this.cb.setObjective("👀 Someone is coming over the wall…");return}this.phase==="joined"&&t.x>Xs&&(this.phase="done",this.cb.onComplete())}runDebate(){this.phase="debate",this.christian.root.rotation.y=-Math.PI*.25,this.cb.playScript([{speaker:"",text:"Two travellers come scrambling over the wall and drop onto the road, dusting themselves off as though nothing could be more ordinary."},{speaker:"Christian",text:"Whoa—! Where did you two come from? And why over the WALL?"},{speaker:"Formalist",text:"From the land of Vain-Glory, just beyond. We're bound for Mount Zion — same road as you, by the look of that seal on your brow."},{speaker:"Christian",text:"But why didn't you come in through the Gate, back at the head of the way? The King has commanded that everyone enter there."},{speaker:"Hypocrisy",text:"The Gate! *laughs* All the world knows the Gate is MILES out of the way. Our people have taken this shortcut for a thousand years."},{speaker:"Formalist",text:"More than a thousand! A custom that old is as good as law — any fair judge would tell you so."},{speaker:"Christian",text:"The King will judge by His OWN law, not by your customs. Climbing the wall is rebellion against Him — however many years your people have practised it."},{speaker:"Hypocrisy",text:"Tsk. Look at us — we're ON the road now, same as you. Wall or Gate, what difference does it make?"},{speaker:"Christian",text:"I walk by the rule of the Master; you walk by your own fancies. I came in by the Gate — I carry His scroll, and His seal. What will you two show at the end of the road?"},{speaker:"Formalist",text:"We'll take our chances, friend. Come — the light is going. Let's all walk together while it lasts."},{speaker:"",text:"Christian shakes his head — but the road is wide enough for three. They walk on together as the sun slips away."}],()=>{this.phase="joined",this.cb.setObjective("🌙 Walk on east into the night — the light at the road's end still shines")})}update(t,e,n){if(this.built){Lt(this.christian,e,n&&this.moveFactor()>0),this.applyNight();for(let s=0;s<this.sleepers.length;s++){const r=this.sleepers[s];r.body.position.y=.55+Math.sin(e*1.1+s*2.2)*.03}if(this.zzzTimer-=t,this.zzzTimer<=0){this.zzzTimer=.9;const s=this.zzz.find(r=>r.life>=1);if(s){const r=this.sleepers[Math.floor(Math.random()*3)];s.life=0,s.mesh.position.copy(r.root.position).add(new C(.3,.9,0)),s.mesh.visible=!0}}for(const s of this.zzz)s.life>=1||(s.life=Math.min(1,s.life+t*.55),s.mesh.position.y+=t*.7,s.mesh.position.x+=t*.25,s.mesh.rotation.z=Math.sin(s.life*6)*.3,s.m.opacity=.8*(1-s.life),s.life>=1&&(s.mesh.visible=!1));if(this.phase==="climb"){this.climbT+=t;const s=[[this.formalist,0,Ys-1.2],[this.hypocrisy,.7,Ys+1.2]];let r=!0;for(const[o,a,l]of s){const h=Zt.clamp((this.climbT-a)/1.6,0,1);h<1&&(r=!1),o.root.position.x=l,o.root.position.z=Zt.lerp(-6,-1.6,h),o.root.position.y=Math.sin(h*Math.PI)*2.3,o.root.rotation.y=0,Lt(o,e*1.6,h>0&&h<1)}r&&this.climbT>2.6&&this.runDebate()}if(this.phase==="joined"||this.phase==="done"&&!this.revisit){const s=this.christian.root.position,r=[[this.formalist,-1.9,-1.5],[this.hypocrisy,-3.2,1.3]];for(const[o,a,l]of r){if(!o.root.visible)continue;const h=o.root.position,c=s.x+a-h.x,u=s.z+l-h.z,p=Math.hypot(c,u);if(p>.2){const f=Math.min(6.6,p*2.5)*t;h.x+=c/p*f,h.z+=u/p*f,o.root.rotation.y=Math.atan2(c,u),Lt(o,e+h.x,!0)}else Lt(o,e+h.x,!1);h.y=0}}else this.phase==="debate"&&(Lt(this.formalist,e,!1),Lt(this.hypocrisy,e+1.1,!1));for(const s of this.fireflies){const r=Math.max(0,this.nightP-.55)/.45;s.m.opacity=r*(.4+.6*Math.abs(Math.sin(e*1.7+s.ph))),s.mesh.position.y+=Math.sin(e*.9+s.ph)*t*.4,s.mesh.position.x+=Math.cos(e*.6+s.ph)*t*.3}if(this.lightBeam){const s=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(s,1,s),this.lightBeam.material.opacity=.4+this.nightP*.35}this.lightHalo&&(this.lightHalo.material.opacity=.3+.2*Math.abs(Math.sin(e*1.7))+this.nightP*.2)}}}const bh=-30,qs=40,ms=-14,ei=-8,Ti=14,gs=9,Ei=new C(3,0,-2.2),Sh=14.5;class Ug{constructor(t){P(this,"scene",new pi);P(this,"phase","walk");P(this,"cb");P(this,"christian");P(this,"pawScroll");P(this,"formalist");P(this,"hypocrisy");P(this,"deserters",!1);P(this,"timorous");P(this,"mistrust");P(this,"fleeT",0);P(this,"sleepT",0);P(this,"duskP",0);P(this,"duskTarget",0);P(this,"hemi",null);P(this,"sunLight",null);P(this,"scrollProp",null);P(this,"scrollGlow",null);P(this,"zzz",[]);P(this,"zzzTimer",0);P(this,"dust",[]);P(this,"lightBeam",null);P(this,"lightHalo",null);P(this,"revisit",!1);P(this,"built",!1);this.cb=t,this.christian=Jt({species:"bear",fur:S.bearBrown,outfit:"shirt",outfitColor:S.robeWhite,sling:!0,plump:!0}),this.christian.body.add(g(1.18,.14,.86,S.robeGold,0,.3,0));const e=g(.1,.1,.04,S.robeGold,0,.62,.42);e.castShadow=!1,this.christian.head.add(e),this.pawScroll=new ct;const n=new ot(new cn(.09,.09,.5,8),Ee(16643811));n.rotation.z=Math.PI/2,this.pawScroll.add(n),this.pawScroll.add(g(.1,.2,.2,13194079,0,0,0)),this.pawScroll.position.set(0,-.5,.2),this.christian.armR.add(this.pawScroll);const s=(o,a,l)=>{o.body.add(g(.4,.42,.06,16447212,0,.5,.36)),o.body.add(g(.2,.1,.07,l,0,.7,.37)),o.body.add(g(.06,.1,.07,3025448,0,.7,.38)),o.body.add(g(.5,.34,.1,a,0,.12,-.32))},r=(o,a,l)=>{o.body.add(g(.18,.18,.62,a,.2,.28,-.62)),o.body.add(g(.18,.6,.18,a,.2,.62,-.95)),o.body.add(g(.22,.24,.22,l,.2,1.02,-.95))};this.formalist=Jt({species:"cat",fur:4143930,outfit:"shirt",outfitColor:3817290}),s(this.formalist,3817290,13194079),r(this.formalist,4143930,16447212),this.hypocrisy=Jt({species:"cat",fur:14253898,outfit:"shirt",outfitColor:6965858}),s(this.hypocrisy,6965858,3825546),r(this.hypocrisy,14253898,16447212),this.hypocrisy.head.add(g(.2,.16,.14,14253898,0,.22,.5)),this.timorous=Jt({species:"rabbit",fur:10122318,outfit:"shirt",outfitColor:12892314}),this.mistrust=Jt({species:"bear",fur:12884586,outfit:"shirt",outfitColor:9086136});for(const o of[-1,1])this.mistrust.head.add(g(.1,.5,.1,9072466,.3*o,1.15,-.05)),this.mistrust.head.add(g(.28,.09,.09,9072466,.3*o,1.3,-.05));this.mistrust.head.add(g(.3,.16,.1,15985369,0,.12,.42))}groundY(t){const e=Zt.clamp((t-ei)/(Ti-ei),0,1);return gs*e*e*(3-2*e)}build(){if(this.built)return;this.built=!0;const t=this.scene;t.background=new Nt(14086143),t.fog=new Cn(14086143,40,110),this.hemi=new mi(15792383,12903096,1.05),t.add(this.hemi);const e=new gi(S.sun,1.5);e.position.set(-24,40,22),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-50,e.shadow.camera.right=55,e.shadow.camera.top=50,e.shadow.camera.bottom=-45,t.add(e),this.sunLight=e;const n=new ot(new Et(160,1,90),Ee(S.grass));n.position.y=-.5,n.receiveShadow=!0,t.add(n);for(let y=0;y<45;y++){const b=-50+Math.random()*100,k=-35+Math.random()*70;if(b>ei-1&&b<Ti+34)continue;const A=g(.9+Math.random()*1.6,.1,.9+Math.random()*1.6,Math.random()>.5?S.grassLight:S.grassDark,b,.04+Math.random()*.03,k);A.castShadow=!1,t.add(A)}const s=[10411671,S.grass,11069091],r=8;for(let y=0;y<r;y++){const b=ei+y*(Ti-ei)/r,k=ei+(y+1)*(Ti-ei)/r,A=Math.max(this.groundY((b+k)/2+1),.4),I=g(k-b+.6,A,26,s[y%3],(b+k)/2,A/2,0);I.receiveShadow=!0,t.add(I)}const o=g(34,gs,26,S.grass,Ti+17,gs/2,0);o.receiveShadow=!0,t.add(o);const a=g(34.4,.14,26.4,10411671,Ti+17,gs+.02,0);a.castShadow=!1,t.add(a);for(let y=0;y<=24;y++){const b=-28+y*2.9,k=(Math.random()-.5)*.8,A=g(.9+Math.random()*.5,.14,1.7+Math.random()*.6,S.path,b,this.groundY(b)+.07,k);A.castShadow=!1,t.add(A)}t.add(g(.18,1.5,.18,S.woodDark,ms+2.5,.75,-1.6));const l=g(.4,.4,.1,S.robeGold,ms+2.5,1.6,-1.6);l.castShadow=!1,t.add(l);for(const y of[-1,1]){for(let I=0;I<9;I++){const H=ms+1+I*2.2,T=y*(1.5+I*1.35),M=g(1.6,.12,1.6,14272936,H,.06,T);M.castShadow=!1,t.add(M)}const b=ms+1+9*2.2,k=y*(1.5+9*1.35);t.add(g(2.2,1.6,1.8,7303034,b+.5,.8,k)),t.add(g(1.4,1,1.2,6447726,b-1.2,.5,k+y*1.2));const A=new ct;A.add(g(.4,2.4,.4,10129286,0,1.2,0)),A.add(g(1.4,.26,.26,10129286,.4,2.1,0)),A.position.set(b-.5,0,k-y*1.5),t.add(A)}const h=new ct;h.add(g(.16,2,.16,S.woodDark,0,1,0)),h.add(g(1.3,.34,.1,S.wood,.55,1.8,0));const c=g(.1,.34,1.3,S.wood,0,1.45,-.55);h.add(c);const u=g(.1,.34,1.3,S.wood,0,1.1,.55);h.add(u),h.position.set(ms,0,-.2),t.add(h);const p=new ct;for(const[y,b]of[[-1.1,-.9],[1.1,-.9],[-1.1,.9],[1.1,.9]])p.add(g(.22,2,.22,S.woodDark,y,1,b));p.add(g(3,.3,2.6,8101983,0,2.15,0)),p.add(g(2.4,.24,2,9420655,0,2.4,0)),p.add(g(1.8,.18,.8,S.wood,0,.62,-.3)),p.add(g(.2,.55,.2,S.woodDark,-.7,.28,-.3)),p.add(g(.2,.55,.2,S.woodDark,.7,.28,-.3));for(let y=0;y<5;y++){const b=g(.14,.14,.14,[S.flowerYellow,S.flowerPink,S.flowerBlue][y%3],-1.4+y*.7,.08,1.3);b.castShadow=!1,p.add(b)}p.position.set(Ei.x,this.groundY(Ei.x),Ei.z),t.add(p);const f=new ct,_=new ot(new cn(.11,.11,.6,8),Ee(16643811));_.rotation.z=Math.PI/2,f.add(_),f.add(g(.12,.24,.24,13194079,0,0,0));const x=new ot(new $e(.8,14,12),new Pt({color:16774072,transparent:!0,opacity:.4,depthWrite:!1}));f.add(x),this.scrollGlow=x;const m=new Bi(16771194,1.4,8);m.position.y=.5,f.add(m),f.position.set(Ei.x+.2,this.groundY(Ei.x)+.35,Ei.z+.9),f.visible=!1,t.add(f),this.scrollProp=f;for(const[y,b,k]of[[-26,7,!0],[-20,-8,!1],[-11,8,!1],[20,8,!0],[27,-8,!1],[33,7,!0]]){const A=new ct;A.add(g(.5,1.6,.5,S.trunk,0,.8,0)),A.add(g(1.9,1.3,1.9,k?S.leafPink:S.leaf,0,2.2,0)),A.add(g(1.2,.9,1.2,k?S.leafPink:S.leaf,0,3.1,0)),A.position.set(y,this.groundY(y),b),t.add(A)}this.timorous.root.visible=!1,this.mistrust.root.visible=!1,t.add(this.timorous.root),t.add(this.mistrust.root),t.add(this.formalist.root),t.add(this.hypocrisy.root);for(let y=0;y<5;y++){const b=new Pt({color:16777215,transparent:!0,opacity:0}),k=new ot(new Et(.22,.26,.06),b);k.visible=!1,t.add(k),this.zzz.push({mesh:k,m:b,life:1})}for(let y=0;y<14;y++){const b=new Pt({color:14272936,transparent:!0,opacity:0}),k=new ot(new Et(.26,.26,.26),b);k.visible=!1,k.castShadow=!1,t.add(k),this.dust.push({mesh:k,m:b,life:1,vx:0,vz:0})}const d=new ot(new cn(1.4,2,14,18,1,!0),new Pt({color:S.light,transparent:!0,opacity:.5,side:ln,depthWrite:!1,fog:!1}));d.position.set(qs+1.5,gs+7,0),t.add(d),this.lightBeam=d;const E=new ot(new $e(2.4,18,14),new Pt({color:16775645,transparent:!0,opacity:.4,depthWrite:!1,fog:!1}));E.position.set(qs+1.5,gs+1.6,0),t.add(E),this.lightHalo=E,t.add(this.christian.root)}applyDusk(t){this.duskP+=(this.duskTarget-this.duskP)*Math.min(t*.5,1);const e=new Nt(14086143),n=new Nt(16103818),s=e.clone().lerp(n,this.duskP);this.scene.background.copy(s),this.scene.fog.color.copy(s),this.hemi&&(this.hemi.intensity=1.05-this.duskP*.35),this.sunLight&&(this.sunLight.intensity=1.5-this.duskP*.75,this.sunLight.color.set(this.duskP>.5?16756848:16773836))}enter(t){var e,n;return this.build(),this.revisit=t,this.duskP=0,this.duskTarget=0,this.fleeT=0,this.timorous.root.visible=!1,this.mistrust.root.visible=!1,this.scrollProp&&(this.scrollProp.visible=!1),this.pawScroll.visible=!0,this.christian.root.position.set(t?-27:-29,0,0),this.christian.root.rotation.y=Math.PI/2,(n=(e=this.cb).setMusic)==null||n.call(e,"gate"),t?(this.phase="done",this.deserters=!1,this.formalist.root.visible=!1,this.hypocrisy.root.visible=!1,this.cb.setObjective("⛰ The Hill Difficulty stands quiet — the light beyond the summit leads on")):(this.phase="walk",this.deserters=!1,this.formalist.root.visible=!0,this.formalist.root.position.set(-31,0,-1.5),this.hypocrisy.root.visible=!0,this.hypocrisy.root.position.set(-32,0,1.3),this.cb.setObjective("⛰ A steep hill rises ahead — walk on with your two companions")),{christian:this.christian}}moveFactor(){if(this.phase==="fork"||this.phase==="arbor"||this.phase==="sleeping"||this.phase==="panic"||this.phase==="warning")return 0;const t=this.christian.root.position;return t.x>ei&&t.x<Ti&&this.phase!=="retrace"?.62:1}nearScroll(){return this.phase!=="retrace"||!this.scrollProp?!1:this.christian.root.position.distanceTo(this.scrollProp.position)<2.4}tryPickScroll(){this.nearScroll()&&(this.scrollProp.visible=!1,this.pawScroll.visible=!0,this.cb.blipSound(),this.cb.playScript([{speaker:"Christian",text:"There — half under the bench, exactly where I slept. My scroll!"},{speaker:"Christian",text:"Thank God, who turned my eyes back to the place I lost it. I'll carry it in my paw from here on — and do my sleeping at night."}],()=>{this.phase="climb3",this.cb.setObjective("⛰ Climb the hill again — carefully, this time")}))}afterMove(){const t=this.christian.root.position;t.z=Zt.clamp(t.z,-7,7);const e=this.phase==="retrace"?Sh+1.5:qs+2;if(t.x=Zt.clamp(t.x,bh-1,e),t.y=this.groundY(t.x),this.revisit||this.phase==="done"){(t.x<bh||t.x>qs)&&this.cb.onExit();return}if(this.phase==="walk"&&t.x>ms-3.5){this.phase="fork",this.formalist.root.position.set(t.x-1.2,0,t.z-2),this.formalist.root.rotation.y=Math.PI/2,this.hypocrisy.root.position.set(t.x-1.4,0,t.z+2),this.hypocrisy.root.rotation.y=Math.PI/2,this.cb.playScript([{speaker:"",text:"At the foot of the hill the road divides in three: a steep path straight up, marked with the King's golden sign — and two easy paths curving round the bottom, one to the left, one to the right."},{speaker:"Formalist",text:'Straight UP? In this coat? Gentlemen take the level road. The left way — "Danger", is it? — merely a name. It must wind round and meet you on the far side.'},{speaker:"Hypocrisy",text:'And I shall take the right. "Destruction" — such an unfair reputation for so smooth a path. See you at the top, friend. The sensible way is always around.'},{speaker:"Christian",text:"Friends, wait! The King marked the STEEP way. The easy paths go exactly where their names say — nowhere else!"},{speaker:"",text:"But they are already walking. Formalist turns into the way called Danger, and Hypocrisy into the way called Destruction — and neither of them is ever seen again."},{speaker:"Christian",text:'…So I climb alone. "The hill, though high, I covet to ascend; the difficulty will not me offend."'}],()=>{this.phase="climb",this.deserters=!0,this.fleeT=0,this.cb.setObjective("⛰ Take the steep path — straight up the Hill Difficulty")});return}if(this.phase==="climb"&&Math.abs(t.x-Ei.x)<2){this.phase="arbor",this.christian.root.rotation.y=0,this.cb.playScript([{speaker:"",text:"Halfway up the slope stands a pleasant arbor, built by the Lord of the hill for weary pilgrims to catch their breath."},{speaker:"Christian",text:"*puff* … A bench, in the shade, with flowers… Surely the Lord of the hill won't mind if I sit for just a moment."},{speaker:"Christian",text:"Just… one… moment…"}],()=>{this.phase="sleeping",this.sleepT=0,this.duskTarget=1,this.pawScroll.visible=!1,this.cb.setObjective("💤 …")});return}if(this.phase==="climb2"&&t.x>Sh){this.phase="panic",this.cb.playScript([{speaker:"Christian",text:"The top! Made it at last — and before full dark, too. Now, a look at my scroll to put some heart in me for the road ahead…"},{speaker:"Christian",text:"…It's not here. Not in my paw — not in the sling — *pats himself all over* — it's GONE."},{speaker:"Christian",text:"*to himself* Fool. FOOL, Christian. You slept when you should only have rested — and the King's own scroll slid from your paw while you snored in His arbor."},{speaker:"Christian",text:"That scroll is my assurance — my welcome at the Celestial City's gate. I cannot go one step forward without it. Back down, then… every hard-won step of it."}],()=>{this.phase="retrace",this.scrollProp.visible=!0,this.cb.setObjective("⬇ Retrace the path down — something glows near the arbor…")});return}if(this.phase==="climb3"&&t.x>8.5){this.phase="warning",this.timorous.root.visible=!0,this.timorous.root.position.set(t.x+5,this.groundY(t.x+5),t.z-1.2),this.timorous.root.rotation.y=-Math.PI/2,this.mistrust.root.visible=!0,this.mistrust.root.position.set(t.x+6.2,this.groundY(t.x+6.2),t.z+1),this.mistrust.root.rotation.y=-Math.PI/2,this.cb.playScript([{speaker:"",text:"Two travellers come pelting down the hill as though wolves were at their heels."},{speaker:"Christian",text:"Whoa — friends! You're running the wrong way! What happened?"},{speaker:"Timorous",text:"T-t-turn back! We were bound for Zion, same as you — but the farther we went, the MORE danger we saw!"},{speaker:"Mistrust",text:"Just ahead, in the very path, lie two LIONS! Asleep or awake we did not stay to find out — but whoever goes on will be torn to pieces!"},{speaker:"Timorous",text:"Turn back, turn back while you still have legs to carry you!"}],()=>{this.phase="fleeing",this.fleeT=0});return}this.phase==="onward"&&t.x>qs&&(this.phase="done",this.cb.onComplete())}spawnDust(t,e,n){const s=this.dust.find(r=>r.life>=1);s&&(s.life=0,s.vx=(Math.random()-.5)*1.4,s.vz=(Math.random()-.5)*1.4,s.mesh.position.set(t,e+.2,n),s.mesh.visible=!0)}update(t,e,n){if(!this.built)return;const s=this.christian.root.position;if(this.applyDusk(t),Lt(this.christian,e,n&&this.moveFactor()>0),this.phase==="walk"){const r=[[this.formalist,-1.9,-1.6],[this.hypocrisy,-3.2,1.4]];for(const[o,a,l]of r){const h=o.root.position,c=s.x+a-h.x,u=s.z+l-h.z,p=Math.hypot(c,u);if(p>.2){const f=Math.min(6.6,p*2.5)*t;h.x+=c/p*f,h.z+=u/p*f,o.root.rotation.y=Math.atan2(c,u),Lt(o,e+h.x,!0)}else Lt(o,e+h.x,!1)}}else if(this.deserters){this.fleeT+=t;const r=[[this.formalist,-1],[this.hypocrisy,1]];for(const[o,a]of r){const l=o.root.position;l.x+=t*3.4,l.z+=a*t*2.2,o.root.rotation.y=Math.atan2(3.4,a*2.2),Lt(o,e*1.3+a,!0),Math.abs(l.z)>13&&(o.root.visible=!1)}!this.formalist.root.visible&&!this.hypocrisy.root.visible&&(this.deserters=!1)}if(this.phase==="sleeping"){if(this.sleepT+=t,this.christian.root.rotation.z=-Math.PI/2*Math.min(1,this.sleepT/.6),this.christian.root.position.y=this.groundY(s.x)+.35*Math.min(1,this.sleepT/.6),this.zzzTimer-=t,this.zzzTimer<=0){this.zzzTimer=.8;const r=this.zzz.find(o=>o.life>=1);r&&(r.life=0,r.mesh.position.set(s.x+.3,s.y+1,s.z),r.mesh.visible=!0)}this.sleepT>4.2&&(this.christian.root.rotation.z=0,this.christian.root.position.y=this.groundY(s.x),this.phase="climb2",this.cb.playScript([{speaker:"Christian",text:"*snrk—* Wha—? The light… why is the light all orange?"},{speaker:"",text:"The sun is already sliding toward the hills. What was meant to be a moment's rest has swallowed the whole afternoon."},{speaker:"Christian",text:"The SUNSET?! I slept the day away on the King's own bench! Up, up — I must reach the top before dark!"}],()=>{this.cb.setObjective("🌇 Hurry — climb to the summit before night falls")}))}for(const r of this.zzz)r.life>=1||(r.life=Math.min(1,r.life+t*.55),r.mesh.position.y+=t*.7,r.mesh.position.x+=t*.25,r.mesh.rotation.z=Math.sin(r.life*6)*.3,r.m.opacity=.8*(1-r.life),r.life>=1&&(r.mesh.visible=!1));if(this.phase==="fleeing"){this.fleeT+=t;for(const r of[this.timorous,this.mistrust]){if(!r.root.visible)continue;const o=r.root.position;o.x-=t*10,o.y=this.groundY(o.x),r.root.rotation.y=-Math.PI/2,Lt(r,e*1.9,!0),Math.random()<t*14&&this.spawnDust(o.x+.5,o.y,o.z),o.x<-24&&(r.root.visible=!1)}this.fleeT>1.4&&!this.timorous.root.visible&&!this.mistrust.root.visible&&(this.phase="onward",this.cb.playScript([{speaker:"Christian",text:"Lions… *swallows* Two of them. Right in the path. Perhaps I too should turn ba—"},{speaker:"Christian",text:"No. NO. Behind me lies the City of Destruction — to go back is certain death. Ahead there may be lions… but beyond the lions is LIFE."},{speaker:"Christian",text:"If I return, I perish. If I press on, I may yet reach the Celestial City. Then forward — fear or no fear!"}],()=>{this.cb.setObjective("✨ Press on along the ridge, to the light at the road's end")}))}for(const r of this.dust)r.life>=1||(r.life=Math.min(1,r.life+t*1.6),r.mesh.position.x+=r.vx*t,r.mesh.position.z+=r.vz*t,r.mesh.position.y+=t*.8,r.mesh.scale.setScalar(.6+r.life*1.5),r.m.opacity=.6*(1-r.life),r.life>=1&&(r.mesh.visible=!1));if(this.scrollProp&&this.scrollProp.visible&&(this.scrollProp.rotation.y+=t*1.2,this.scrollGlow&&(this.scrollGlow.material.opacity=.25+.25*Math.abs(Math.sin(e*2.4)))),this.lightBeam){const r=1+Math.sin(e*2.2)*.1;this.lightBeam.scale.set(r,1,r)}this.lightHalo&&(this.lightHalo.material.opacity=.3+.2*Math.abs(Math.sin(e*1.7)))}}const Ng=document.getElementById("app"),je=new Vm({antialias:!0});je.setPixelRatio(Math.min(window.devicePixelRatio,2));je.setSize(window.innerWidth,window.innerHeight);je.shadowMap.enabled=!0;je.shadowMap.type=Rh;Ng.appendChild(je.domElement);const Rn=new pi;Rn.background=new Nt(S.sky);Rn.fog=new Cn(S.fog,55,130);const we=new Ze(50,window.innerWidth/window.innerHeight,.1,300);Rn.add(new mi(14676223,13232320,.9));const qn=new gi(S.sun,1.6);qn.position.set(-30,45,25);qn.castShadow=!0;qn.shadow.mapSize.set(2048,2048);qn.shadow.camera.left=-60;qn.shadow.camera.right=60;qn.shadow.camera.top=60;qn.shadow.camera.bottom=-60;qn.shadow.camera.far=150;Rn.add(qn);const En=ug(Rn),hi=mg(Rn),ce=Jt({species:"bear",fur:S.bearBrown,outfit:"shirt",outfitColor:9418968,sling:!0,burden:!0,plump:!0});ce.root.position.set(-6,0,-4);Rn.add(ce.root);const bt={talkedToEvangelist:!1,talkedToFamily:!1,chaseDone:!1,eggsCollected:0,pliableFollowing:!1,pliableLeft:!1,chapterComplete:!1,sloughComplete:!1,moralityDone:!1,wicketDone:!1,interpreterDone:!1,crossDone:!1,highwayDone:!1,hillDone:!1},be=new gg,yt=new xg(window.innerWidth/window.innerHeight);let ve="village";const et={objective:document.getElementById("objective"),prompt:document.getElementById("prompt"),promptWho:document.querySelector("#prompt .who"),promptKey:document.querySelector("#prompt .key"),dialogue:document.getElementById("dialogue"),dialogueName:document.querySelector("#dialogue .name"),dialogueText:document.querySelector("#dialogue .text"),musicBtn:document.getElementById("music-btn"),talkBtn:document.getElementById("talk-btn"),joystick:document.getElementById("joystick"),stick:document.querySelector("#joystick .stick"),titleScreen:document.getElementById("title-screen"),startBtn:document.getElementById("start-btn"),ending:document.getElementById("ending"),restartBtn:document.getElementById("restart-btn"),debugBtn:document.getElementById("debug-btn"),debugPanel:document.getElementById("debug-panel"),fade:document.getElementById("fade")};function Fg(i,t=420){et.fade.classList.add("show"),window.setTimeout(()=>{i(),requestAnimationFrame(()=>et.fade.classList.remove("show"))},t)}const Ke=window.matchMedia("(pointer: coarse)").matches;Ke&&(document.body.classList.add("touch"),et.promptKey.style.display="none");let Hi=!1;et.startBtn.addEventListener("click",()=>{Hi=!0,be.start(),et.titleScreen.classList.add("hidden"),setTimeout(()=>et.titleScreen.style.display="none",900)});et.musicBtn.addEventListener("click",()=>{be.start(),et.musicBtn.textContent=be.toggle()?"🎵":"🔇"});et.restartBtn.addEventListener("click",()=>window.location.reload());let Zs=null,We=!1,ci=!1;function Vi(i,t,e,n){We=!0,document.getElementById("ending-title").textContent=i,document.getElementById("ending-sub").textContent=t,document.getElementById("ending-body").textContent=e,Zs=n,et.ending.style.display="flex",et.ending.classList.add("hidden"),requestAnimationFrame(()=>requestAnimationFrame(()=>et.ending.classList.remove("hidden")))}const Og=document.getElementById("continue-btn");Og.addEventListener("click",()=>{be.blip(),We=!1,et.ending.classList.add("hidden"),setTimeout(()=>et.ending.style.display="none",900),pe=!1,Gi=null,sr=null,et.dialogue.style.display="none",et.talkBtn.style.display="none",Zs==null||Zs(),Zs=null});function Fe(){ve="map",be.setStyle("map"),et.promptKey.style.display="none",rn(bt.hillDone?"🗺 Over the Hill Difficulty — Chapter VIII, the Palace Beautiful, coming soon…":bt.highwayDone?"🗺 A steep mountain looms past the night road — the Hill Difficulty!":bt.crossDone?"🗺 The burden is gone! On along the King's Highway, into the evening…":bt.wicketDone?"🗺 Past the Gate a green hill rises — on to the place of deliverance!":bt.moralityDone?"🗺 The long road east lies open — on toward the Wicket Gate!":bt.sloughComplete?"🗺 East to the crossroad — a smooth byway and a barred road":"🗺 The road east — onward to the Slough of Despond")}const Bn=new vg({playScript:Mn,setObjective:rn,splashSound:()=>be.splash(),onExit:()=>Fe(),onComplete:()=>{if(bt.sloughComplete=!0,bt.pliableFollowing&&(bt.pliableLeft=!0),bt.pliableLeft){const i=hi.findIndex(t=>t.id==="pliable");i!==-1&&(Rn.remove(hi[i].parts.root),hi.splice(i,1),mc.splice(i,1))}Vi("🌊 Chapter II Complete","Through the Slough of Despond","Pliable turned back at the first hardship — but Christian, with Help's strong paw, came through the mire, burden and all. The road runs on…",()=>{yt.sloughDone=!0,yt.start([]),yt.progress=yt.sloughT,Fe()})}});let eo=null;const xs=new Mg({playScript:Mn,setObjective:rn,onExit:()=>Fe(),rumbleSound:()=>be.rumble(),onComplete:()=>{bt.moralityDone=!0,Vi("⛰ Chapter III Complete","Mr. Worldly Wiseman and Mount Sinai","The smooth byway led only beneath the burning mountain of the Law. Evangelist unmasked the flatterer, and Christian turned back to the true way — the long road east lies open at last…",()=>{yt.moralityDone=!0,yt.road="main",yt.progress=yt.forkT,yt.start([]),Fe()})}});let no=null;function uo(i){ve="morality",be.setStyle("sinai"),et.prompt.style.display="none",et.talkBtn.style.display="none",no=xs.enter(i),Ht.copy(no.christian.root.position)}const mn=new Cg({playScript:Mn,setObjective:rn,onExit:()=>Fe(),rumbleSound:()=>be.rumble(),blipSound:()=>be.blip(),setMusic:i=>be.setStyle(i),fade:i=>Fg(()=>{i(),Ps&&Ht.copy(Ps.christian.root.position)}),onComplete:()=>{bt.wicketDone=!0,bt.interpreterDone=!0,Vi("🚪 Chapter IV Complete","The Wicket Gate and the House of the Interpreter","Goodwill the great lion drew Christian through the Gate, out of the reach of Beelzebub's arrows, and set his feet on the King's Highway. There, in a cottage by the road, the Interpreter — a wise old owl — showed him six sights to carry in his heart: the dust and the water, Passion and Patience, the fire and the hidden oil, the armed man at the palace gate, the caged professor, and the dream of judgment. Somewhere ahead now lies the place of deliverance, where the burden falls of itself…",()=>{yt.sloughDone=!0,yt.moralityDone=!0,yt.wicketDone=!0,yt.start([]),yt.road="main",yt.progress=yt.beyondT,Fe()})}});let Ps=null;const vs=new Ig({playScript:Mn,setObjective:rn,onExit:()=>Fe(),blipSound:()=>be.blip(),setMusic:i=>be.setStyle(i),onComplete:()=>{bt.crossDone=!0,Vi("✝ Chapter V Complete","The Cross and the Empty Tomb","At the top of the hill the burden loosened of itself, rolled down into the open tomb, and was never seen again. Three Shining Ones met Christian there: his sins forgiven, his rags exchanged for shining garments, a seal on his forehead and a sealed scroll in his paw — the King's own promise. Not by the hard journey, nor by any good deed, but by grace alone he goes on now, singing, toward the Celestial City…",()=>{yt.sloughDone=!0,yt.moralityDone=!0,yt.wicketDone=!0,yt.crossDone=!0,yt.start([]),yt.road="main",yt.progress=yt.crossT,Fe()})}});let io=null;const ys=new kg({playScript:Mn,setObjective:rn,onExit:()=>Fe(),blipSound:()=>be.blip(),setMusic:i=>be.setStyle(i),onComplete:()=>{bt.highwayDone=!0,Vi("🌙 Chapter VI Complete","The King's Highway","Beside the road three sleepers — Simple, Sloth and Presumption — waved away every warning and slept on in their chains; no one can be woken who is determined to sleep. Then Formalist and Hypocrisy came over the wall, trusting custom instead of the King's command, and fell in alongside. As the sun set, the three walked on together toward the light — but only one of them carries the King's scroll and seal…",()=>{yt.sloughDone=!0,yt.moralityDone=!0,yt.wicketDone=!0,yt.crossDone=!0,yt.highwayDone=!0,yt.start([]),yt.road="main",yt.progress=yt.highwayT,Fe()})}});let so=null;const Hn=new Ug({playScript:Mn,setObjective:rn,onExit:()=>Fe(),blipSound:()=>be.blip(),setMusic:i=>be.setStyle(i),onComplete:()=>{bt.hillDone=!0,Vi("⛰ Chapter VII Complete","The Hill of Difficulty","At the hill's foot Formalist and Hypocrisy took the easy ways called Danger and Destruction, and were never seen again. Christian took the steep path — dozed too long in the Lord's arbor, lost the scroll of his assurance, and humbly climbed the hill twice to win it back. Even the news of lions ahead could not turn him: behind lies certain ruin, ahead — whatever comes — lies life. He presses on toward the Celestial City…",()=>{yt.sloughDone=!0,yt.moralityDone=!0,yt.wicketDone=!0,yt.crossDone=!0,yt.highwayDone=!0,yt.hillDone=!0,yt.start([]),yt.road="main",yt.progress=yt.hillT,Fe()})}});let ro=null;function fo(i){ve="hill",et.prompt.style.display="none",et.talkBtn.style.display="none",ro=Hn.enter(i),Ht.copy(ro.christian.root.position)}function po(i){ve="highway",et.prompt.style.display="none",et.talkBtn.style.display="none",so=ys.enter(i),Ht.copy(so.christian.root.position)}function mo(i){ve="cross",et.prompt.style.display="none",et.talkBtn.style.display="none",io=vs.enter(i),Ht.copy(io.christian.root.position)}function Ss(i){ve="wicket",be.setStyle("gate"),et.prompt.style.display="none",et.talkBtn.style.display="none",Ps=mn.enter(i),Ht.copy(Ps.christian.root.position)}function go(i){ve="slough",be.setStyle("slough"),et.prompt.style.display="none",et.talkBtn.style.display="none",eo=Bn.enter(!i&&bt.pliableFollowing&&!bt.pliableLeft,i),Ht.copy(eo.christian.root.position)}function hc(){ve="village",be.setStyle("village"),ce.root.position.set(sn.east-5,0,0),ce.root.rotation.y=-Math.PI/2,Ht.copy(ce.root.position),et.prompt.style.display="none",et.promptKey.style.display=Ke?"none":"inline-block",Ke&&(et.talkBtn.style.display="none"),rn("🏘 Home for a visit — the shining light in the east leads back to the road")}function rn(i){et.objective.textContent=i}let _o=[],ir=0,pe=!1,Gi=null,sr=null;function Mn(i,t){Gi=null,_o=i,ir=0,pe=!0,sr=t??null,et.dialogue.style.display="block",et.prompt.style.display="none",Ke&&(et.talkBtn.style.display="block"),il()}function cc(i){Gi=i,_o=i.getLines(bt),ir=0,pe=!0,et.dialogue.style.display="block",et.prompt.style.display="none",et.talkBtn.style.display="none",il();const t=ce.root.position.x-i.parts.root.position.x,e=ce.root.position.z-i.parts.root.position.z;i.parts.root.rotation.y=Math.atan2(t,e)}function il(){const i=_o[ir];et.dialogueName.textContent=i.speaker,et.dialogueText.textContent=i.text,et.dialogue.classList.toggle("christian",i.speaker==="Christian"),et.dialogue.classList.toggle("narration",i.speaker==="")}function xo(){var n;if(be.blip(),ir++,ir<_o.length){il();return}pe=!1,et.dialogue.style.display="none";const i=Gi;Gi=null;const t=sr;if(sr=null,t){t();return}if(!i)return;const e=bt.talkedToEvangelist;(n=i.onFinish)==null||n.call(i,bt),!e&&bt.talkedToEvangelist&&zg()}et.dialogue.addEventListener("click",xo);function zg(){En.lightBeam.visible=!0,En.gate.open=!0,rn("✨ Follow the shining light through the Wicket Gate!")}const xt=new Set;window.addEventListener("keydown",i=>{i.repeat||(xt.add(i.code),(i.code==="KeyE"||i.code==="Space"||i.code==="Enter"||i.key==="e"||i.key==="E"||i.key===" "||i.key==="Enter")&&(pe?xo():ve==="map"?dc():ve==="village"?pc():ve==="slough"?Bn.talkToHelp():ve==="hill"&&Hn.tryPickScroll()))});function dc(){const i=yt.spot();i==="slough"?go(bt.sloughComplete):i==="city"?hc():i==="morality"?uo(bt.moralityDone):i==="beyond"?Ss(bt.wicketDone):i==="cross"?mo(bt.crossDone):i==="highway"?po(bt.highwayDone):i==="hill"&&fo(bt.hillDone)}window.addEventListener("keyup",i=>xt.delete(i.code));window.addEventListener("blur",()=>xt.clear());document.addEventListener("visibilitychange",()=>{document.hidden&&xt.clear()});window.addEventListener("keydown",i=>{i.code!=="Digit9"&&i.code!=="Digit8"||pe||We||(Object.assign(bt,{talkedToEvangelist:!0,talkedToFamily:!0,chaseDone:!0,pliableFollowing:!0,chapterComplete:!0,sloughComplete:!0,pliableLeft:!0}),bt.moralityDone=i.code==="Digit8",Hi||(Hi=!0,be.start(),et.titleScreen.classList.add("hidden"),setTimeout(()=>et.titleScreen.style.display="none",400)),yt.sloughDone=!0,yt.moralityDone=bt.moralityDone,yt.start([]),yt.road="main",yt.progress=bt.moralityDone?yt.forkT:yt.sloughT,Fe())});function Bg(){Hi||(Hi=!0,be.start(),et.titleScreen.classList.add("hidden"),setTimeout(()=>et.titleScreen.style.display="none",400))}et.debugBtn.addEventListener("click",()=>{et.debugPanel.classList.toggle("open")});et.debugPanel.addEventListener("click",i=>{const t=i.target.closest("button[data-jump]");if(!t)return;const e=t.dataset.jump;et.debugPanel.classList.remove("open"),Bg(),pe=!1,Gi=null,sr=null,We=!1,ci=!1,et.dialogue.style.display="none",et.ending.style.display="none",(e==="morality"||e==="wicket-approach"||e==="wicket-highway"||e==="interpreter"||e==="cross"||e==="highway"||e==="hill")&&(yt.sloughDone=!0),(e==="wicket-approach"||e==="wicket-highway"||e==="interpreter"||e==="cross"||e==="highway"||e==="hill")&&(yt.moralityDone=!0),(e==="cross"||e==="highway"||e==="hill")&&(yt.wicketDone=!0),(e==="highway"||e==="hill")&&(yt.crossDone=!0,bt.crossDone=!0),e==="hill"&&(yt.highwayDone=!0,bt.highwayDone=!0),e==="village"?hc():e==="slough"?go(!1):e==="morality"?uo(!1):e==="wicket-approach"?Ss(!1):e==="wicket-highway"?(Ss(!1),mn.debugSkip("highway")):e==="interpreter"?(Ss(!1),mn.debugSkip("house")):e==="cross"?mo(!1):e==="highway"?po(!1):e==="hill"?fo(!1):e==="map"&&(yt.start([]),yt.road="main",Fe())});const he={active:!1,id:-1,x:0,y:0};et.joystick.addEventListener("pointerdown",i=>{he.active=!0,he.id=i.pointerId,et.joystick.setPointerCapture(i.pointerId),fc(i)});et.joystick.addEventListener("pointermove",i=>{he.active&&i.pointerId===he.id&&fc(i)});const uc=i=>{i.pointerId===he.id&&(he.active=!1,he.x=0,he.y=0,et.stick.style.transform="translate(-50%, -50%)")};et.joystick.addEventListener("pointerup",uc);et.joystick.addEventListener("pointercancel",uc);function fc(i){const t=et.joystick.getBoundingClientRect(),e=t.left+t.width/2,n=t.top+t.height/2;let s=(i.clientX-e)/(t.width/2),r=(i.clientY-n)/(t.height/2);const o=Math.hypot(s,r);o>1&&(s/=o,r/=o),he.x=s,he.y=r,et.stick.style.transform=`translate(calc(-50% + ${s*33}px), calc(-50% + ${r*33}px))`}et.talkBtn.addEventListener("click",()=>{pe?xo():ve==="map"?dc():ve==="village"?pc():ve==="slough"?Bn.talkToHelp():ve==="hill"&&Hn.tryPickScroll()});const Hg=3.2;let ri=null,Qs=null;function Gg(){let i=null,t=Hg;for(const e of hi){const n=e.parts.root.position.distanceTo(ce.root.position);n<t&&(i=e,t=n)}return i}function Vg(){let i=null,t=1/0;for(const e of En.interactables){const n=Math.hypot(e.x-ce.root.position.x,e.z-ce.root.position.z);n<e.r&&n<t&&(i=e,t=n)}return i}function pc(){pe||(ri?cc(ri):Qs&&jg(Qs))}const Th={};function Wg(i,t){const e=Th[i]??0;return Th[i]=(e+1)%t.length,t[e]}const Xg=[[{speaker:"",text:"The village well. He leans over and sees his own tired reflection looking back."}],[{speaker:"",text:"The water is cool and still. For a moment, the weight on his back feels almost bearable."}],[{speaker:"",text:"Someone has tied a faded ribbon to the crossbeam. He wonders what they wished for."}]],Yg=[[{speaker:"",text:"He works the handle. Cold water gushes into the trough below."}],[{speaker:"",text:"Splash! A few droplets catch the morning light like tiny stars."}]],qg=[[{speaker:"Chickens",text:"Bawk! Bawk-bawk!"},{speaker:"Christian",text:"Easy now, ladies. I only came to say good morning."}],[{speaker:"Chickens",text:"*peck peck peck*"}]],Kg=[[{speaker:"Cow",text:"Mooooo."},{speaker:"",text:"Old Hamlet's cow, watching him with those big brown eyes again."}],[{speaker:"Cow",text:"Mooo-oo."},{speaker:"Christian",text:"I don't suppose you'd care to carry this burden a while?"}]];function jg(i){if(i.id==="nest"){if(bt.eggsCollected<3){bt.eggsCollected++;const n=bt.eggsCollected;Mn([{speaker:"",text:n<3?`He gently takes an egg, still warm. (${n}/3 collected)`:"He takes the last egg — the little basket is full. Time to bring these home to Christiana."}])}else Mn([{speaker:"",text:"The nest is empty for now. Perhaps the hens will lay more tomorrow."}]);return}const e={well:Xg,pump:Yg,chickens:qg,cow:Kg}[i.id];e&&Mn(Wg(i.id,e))}const Ve=7,Ai=new C(0,13,13),Zg=new C(0,7.5,7.5),Ht=new C;let sa=!1;const sl=[];for(let i=0;i<16;i++){const t=new Pt({color:16777215,transparent:!0,opacity:0}),e=new ot(new Et(.22,.22,.22),t);e.visible=!1,e.castShadow=!1,Rn.add(e),sl.push({mesh:e,mat:t,life:1,vx:0,vz:0})}let ra=0;function $g(i,t){const e=sl.find(n=>n.life>=1);e&&(e.life=0,e.vx=(Math.random()-.5)*.8,e.vz=(Math.random()-.5)*.8,e.mesh.position.set(i,.12,t),e.mesh.visible=!0)}function Jg(i){for(const t of sl){if(t.life>=1)continue;t.life=Math.min(1,t.life+i*2.2),t.mesh.position.x+=t.vx*i,t.mesh.position.z+=t.vz*i,t.mesh.position.y+=i*.9;const e=.6+t.life*1.6;t.mesh.scale.setScalar(e),t.mat.opacity=.55*(1-t.life),t.life>=1&&(t.mesh.visible=!1)}}function Qg(i){for(const o of En.colliders){const a=i.x-o.x,l=i.z-o.z,h=Math.hypot(a,l),c=o.r+.6;h<c&&h>1e-4&&(i.x=o.x+a/h*c,i.z=o.z+l/h*c)}for(const o of hi){const a=i.x-o.parts.root.position.x,l=i.z-o.parts.root.position.z,h=Math.hypot(a,l);h<1.1&&h>1e-4&&(i.x=o.parts.root.position.x+a/h*1.1,i.z=o.parts.root.position.z+l/h*1.1)}const e=sn.west+1.4,n=sn.east-1.2,s=sn.south-1.4;Math.abs(i.z)<sn.gateHalfWidth&&i.x>n-2&&En.gate.open?(i.z=Zt.clamp(i.z,-1.9,sn.gateHalfWidth),i.x=Math.min(i.x,sn.east+8)):(i.x=Zt.clamp(i.x,e,n),i.z=Zt.clamp(i.z,-s,s))}let qr=!1,oa=!1;const tr={obstinate:!1,pliable:!1},t_=[{speaker:"Obstinate",text:"CHRISTIAN! Stop right there, you great woolly fool! Come back at once!"},{speaker:"Christian",text:"I cannot, neighbours. This city will not stand — I go to seek a country that cannot crumble. You have seen the light yonder; come with me!"},{speaker:"Obstinate",text:"What?! Leave our friends, our comforts, our whole city — for a dream out of that book of yours?"},{speaker:"Christian",text:"What I seek is worth more than all we would leave behind. Come and see for yourselves!"},{speaker:"Obstinate",text:"Pah! I'll not be dragged on any fool's errand. Pliable — take his other arm. We are hauling him home."},{speaker:"Pliable",text:"Weeeell… actually, Obstinate… golden crowns? Streets of light? A city that never crumbles? …My paws are tingling."},{speaker:"Pliable",text:"I'm going WITH him! Think of it — glory, adventure, and no more of your grumbling!"},{speaker:"Obstinate",text:"You TOO?! Of all the—! FINE! Go drown in a bog together, the pair of you! I am going home like a SENSIBLE creature. HMPH!"},{speaker:"Pliable",text:"Don't mind him. Lead the way, friend Christian — hop hop!"}];function e_(){ci=!0,qr=!0,tr.obstinate=!1,tr.pliable=!1,ce.root.rotation.y=-Math.PI/2,rn("❗ Someone is shouting after you…")}let Eh=0;function n_(i,t){let e=0,n=0;(xt.has("KeyW")||xt.has("ArrowUp"))&&(n-=1),(xt.has("KeyS")||xt.has("ArrowDown"))&&(n+=1),(xt.has("KeyA")||xt.has("ArrowLeft"))&&(e-=1),(xt.has("KeyD")||xt.has("ArrowRight"))&&(e+=1),e+=he.x,n+=he.y;const s=Math.hypot(e,n);if(sa=s>.15&&!pe&&Hi&&!We&&!ci,sa){e/=Math.max(s,1),n/=Math.max(s,1);const r=ce.root.position;r.x+=e*Ve*i,r.z+=n*Ve*i,Qg(r),ce.root.rotation.y=Di(ce.root.rotation.y,Math.atan2(e,n),12*i),!bt.talkedToEvangelist&&r.x>sn.east-4&&Math.abs(r.z)<5&&t-Eh>4&&(Eh=t,rn("🚪 The gate is shut fast… Evangelist on the east road may know the way.")),ra-=i,ra<=0&&(ra=.13,$g(r.x+(Math.random()-.5)*.5,r.z+(Math.random()-.5)*.5))}Lt(ce,t,sa),bt.talkedToEvangelist&&!bt.chaseDone&&!ci&&ce.root.position.x>sn.east-8&&Math.abs(ce.root.position.z)<4.5&&e_(),bt.talkedToEvangelist&&!ci&&ce.root.position.distanceTo(En.lightBeam.position)<3.4&&(bt.chapterComplete?We||Fe():(bt.chapterComplete=!0,Vi("✨ Chapter I Complete","Christian leaves the City of Destruction","Obstinate turned back in disgust, but Pliable hops eagerly alongside. Through the Wicket Gate and into the wide world — the first step on the long road to the Celestial City…",()=>{yt.start(bt.pliableFollowing&&!bt.pliableLeft?["pliable"]:[]),Fe()})))}function Di(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*Math.min(e,1)}const mc=hi.map(i=>({home:i.position.clone(),target:i.position.clone(),wait:Math.random()*4,moving:!1}));function i_(i,t){hi.forEach((e,n)=>{const s=mc[n],r=pe&&Gi===e;if(qr&&(e.id==="obstinate"||e.id==="pliable")){const a=e.parts.root.position,l=ce.root.position.x-(e.id==="pliable"?1.3:2.6),h=ce.root.position.z-(e.id==="pliable"?2.3:1.1),c=l-a.x,u=h-a.z,p=Math.hypot(c,u);if(p>.25){const f=Math.min(13.5*i,p);a.x+=c/p*f,a.z+=u/p*f,e.parts.root.rotation.y=Math.atan2(c,u),Lt(e.parts,t*1.4+n,!0)}else{tr[e.id]=!0;const f=ce.root.position.x-a.x,_=ce.root.position.z-a.z;e.parts.root.rotation.y=Math.atan2(f,_),Lt(e.parts,t+n,!1)}return}if(e.id==="obstinate"&&oa){const a=e.parts.root.position,l=e.position.x-a.x,h=e.position.z-a.z,c=Math.hypot(l,h);c>.25?(a.x+=l/c*3.6*i,a.z+=h/c*3.6*i,e.parts.root.rotation.y=Math.atan2(l,h),Lt(e.parts,t+n,!0)):(oa=!1,e.parts.root.rotation.y=e.facing,Lt(e.parts,t+n,!1));return}if(e.id==="pliable"&&bt.pliableFollowing&&!bt.pliableLeft&&!r){const a=e.parts.root.position,l=ce.root.position.x-a.x,h=ce.root.position.z-a.z,c=Math.hypot(l,h);if(c>2.1){const u=Math.min(Ve*.92,c*2.5)*i;a.x+=l/c*u,a.z+=h/c*u,e.parts.root.rotation.y=Math.atan2(l,h),Lt(e.parts,t+.4,!0)}else Lt(e.parts,t+.4,!1);return}if(!e.wanderRadius||r||ci){Lt(e.parts,t+n*1.7,!1);return}const o=e.parts.root.position;if(s.moving){const a=s.target.x-o.x,l=s.target.z-o.z,h=Math.hypot(a,l);if(h<.15)s.moving=!1,s.wait=2+Math.random()*5;else{const c=1.6*i;o.x+=a/h*c,o.z+=l/h*c,e.parts.root.rotation.y=Math.atan2(a,l)}}else if(s.wait-=i,s.wait<=0){const a=Math.random()*Math.PI*2,l=Math.random()*e.wanderRadius;s.target.set(s.home.x+Math.cos(a)*l,0,s.home.z+Math.sin(a)*l),s.moving=!0}Lt(e.parts,t+n*1.7,s.moving)}),qr&&tr.obstinate&&tr.pliable&&!pe&&(qr=!1,Mn(t_,()=>{bt.chaseDone=!0,bt.pliableFollowing=!0,oa=!0,ci=!1,rn("✨ On to the shining light — Pliable comes too!")}))}const Ah=new Zm;function gc(){requestAnimationFrame(gc);const i=Math.min(Ah.getDelta(),.05),t=Ah.elapsedTime;if(ve==="map"){let e=0,n=0;(xt.has("KeyD")||xt.has("ArrowRight"))&&(e+=1),(xt.has("KeyA")||xt.has("ArrowLeft"))&&(e-=1),(xt.has("KeyS")||xt.has("ArrowDown"))&&(n+=1),(xt.has("KeyW")||xt.has("ArrowUp"))&&(n-=1),e+=he.x,n+=he.y,yt.update(i,t,Zt.clamp(e,-1,1),Zt.clamp(n,-1,1)),yt.justDiverted&&(yt.justDiverted=!1,rn("🎩 The east road is barred — a smooth byway curves aside toward Morality…"));const s=yt.spot();if(s==="slough"&&!bt.sloughComplete){go(!1);return}if(s==="morality"&&!bt.moralityDone){uo(!1);return}if(s==="beyond"&&!bt.wicketDone){Ss(!1);return}if(s==="cross"&&!bt.crossDone){mo(!1);return}if(s==="highway"&&!bt.highwayDone){po(!1);return}if(s==="hill"&&!bt.hillDone){fo(!1);return}et.prompt.style.display=s==="road"?"none":"block",et.promptKey.style.display="none",Ke&&(et.talkBtn.style.display="none"),s==="city"?et.promptWho.textContent="🏘 Visit the City of Destruction":s==="slough"?et.promptWho.textContent=bt.sloughComplete?"🌊 Revisit the Slough of Despond":"Enter the Slough of Despond":s==="morality"?et.promptWho.textContent=bt.moralityDone?"⛰ Revisit the foot of Mount Sinai":"Enter the pleasant village of Morality":s==="fork"?et.promptWho.textContent=bt.moralityDone?"🪧 A crossroad — east: the true way · press S for the byway":"🪧 A crossroad — the east road is barred…":s==="beyond"?et.promptWho.textContent=bt.wicketDone?"🚪 Revisit the Wicket Gate":"🚪 Knock at the Wicket Gate":s==="cross"?et.promptWho.textContent=bt.crossDone?"✝ Revisit the hill of the Cross":"✝ Climb the hill to the Cross":s==="highway"?et.promptWho.textContent=bt.highwayDone?"🌙 Walk the King's Highway again":"🌙 Set out along the King's Highway":s==="hill"&&(et.promptWho.textContent=bt.hillDone?"⛰ Climb the Hill Difficulty again":"⛰ Face the Hill Difficulty"),(s==="city"||s==="slough"||s==="morality"||s==="beyond"||s==="cross"||s==="highway"||s==="hill")&&(et.promptKey.style.display=Ke?"none":"inline-block",Ke&&(et.talkBtn.textContent="Enter",et.talkBtn.style.display="block")),je.render(yt.scene,yt.camera);return}if(ve==="slough"&&eo){const e=eo.christian;let n=0,s=0;(xt.has("KeyW")||xt.has("ArrowUp"))&&(s-=1),(xt.has("KeyS")||xt.has("ArrowDown"))&&(s+=1),(xt.has("KeyA")||xt.has("ArrowLeft"))&&(n-=1),(xt.has("KeyD")||xt.has("ArrowRight"))&&(n+=1),n+=he.x,s+=he.y;const r=Math.hypot(n,s),o=Bn.moveFactor(),a=r>.15&&!pe&&!We&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*Ve*o*i,e.root.position.z+=s*Ve*o*i,e.root.rotation.y=Di(e.root.rotation.y,Math.atan2(n,s),12*i)),Bn.afterMove(a),Bn.update(i,t,a);const l=Bn.nearHelp()&&!pe&&!We;et.prompt.style.display=l?"block":"none",l?(et.promptKey.style.display=Ke?"none":"inline-block",et.promptWho.textContent="Talk to Help",Ke&&(et.talkBtn.textContent="Talk",et.talkBtn.style.display="block")):Ke&&!pe&&(et.talkBtn.style.display="none"),Ht.lerp(e.root.position,Math.min(4*i,1)),we.position.copy(Ht).add(Ai),we.lookAt(Ht.x,Ht.y+1.4,Ht.z),je.render(Bn.scene,we);return}if(ve==="morality"&&no){const e=no.christian;let n=0,s=0;(xt.has("KeyW")||xt.has("ArrowUp"))&&(s-=1),(xt.has("KeyS")||xt.has("ArrowDown"))&&(s+=1),(xt.has("KeyA")||xt.has("ArrowLeft"))&&(n-=1),(xt.has("KeyD")||xt.has("ArrowRight"))&&(n+=1),n+=he.x,s+=he.y;const r=Math.hypot(n,s),o=xs.moveFactor(),a=r>.15&&!pe&&!We&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*Ve*o*i,e.root.position.z+=s*Ve*o*i,e.root.rotation.y=Di(e.root.rotation.y,Math.atan2(n,s),12*i)),xs.afterMove(),xs.update(i,t,a),Ht.lerp(e.root.position,Math.min(4*i,1)),we.position.copy(Ht).add(Ai),we.lookAt(Ht.x,Ht.y+1.4,Ht.z),je.render(xs.scene,we);return}if(ve==="wicket"&&Ps){const e=Ps.christian;let n=0,s=0;(xt.has("KeyW")||xt.has("ArrowUp"))&&(s-=1),(xt.has("KeyS")||xt.has("ArrowDown"))&&(s+=1),(xt.has("KeyA")||xt.has("ArrowLeft"))&&(n-=1),(xt.has("KeyD")||xt.has("ArrowRight"))&&(n+=1),n+=he.x,s+=he.y;const r=Math.hypot(n,s),o=mn.moveFactor(),a=r>.15&&!pe&&!We&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*Ve*o*i,e.root.position.z+=s*Ve*o*i,e.root.rotation.y=Di(e.root.rotation.y,Math.atan2(n,s),12*i)),mn.afterMove(),mn.update(i,t,a);const l=mn.phase==="house"||mn.phase==="houseGreet"||mn.phase==="houseExit";Ht.lerp(e.root.position,Math.min(4*i,1)),we.position.copy(Ht).add(l?Zg:Ai),we.lookAt(Ht.x,Ht.y+1.4,Ht.z),je.render(mn.scene,we);return}if(ve==="cross"&&io){const e=io.christian;let n=0,s=0;(xt.has("KeyW")||xt.has("ArrowUp"))&&(s-=1),(xt.has("KeyS")||xt.has("ArrowDown"))&&(s+=1),(xt.has("KeyA")||xt.has("ArrowLeft"))&&(n-=1),(xt.has("KeyD")||xt.has("ArrowRight"))&&(n+=1),n+=he.x,s+=he.y;const r=Math.hypot(n,s),o=vs.moveFactor(),a=r>.15&&!pe&&!We&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*Ve*o*i,e.root.position.z+=s*Ve*o*i,e.root.rotation.y=Di(e.root.rotation.y,Math.atan2(n,s),12*i)),vs.afterMove(),vs.update(i,t,a),Ht.lerp(e.root.position,Math.min(4*i,1)),we.position.copy(Ht).add(Ai),we.lookAt(Ht.x,Ht.y+1.4,Ht.z),je.render(vs.scene,we);return}if(ve==="highway"&&so){const e=so.christian;let n=0,s=0;(xt.has("KeyW")||xt.has("ArrowUp"))&&(s-=1),(xt.has("KeyS")||xt.has("ArrowDown"))&&(s+=1),(xt.has("KeyA")||xt.has("ArrowLeft"))&&(n-=1),(xt.has("KeyD")||xt.has("ArrowRight"))&&(n+=1),n+=he.x,s+=he.y;const r=Math.hypot(n,s),o=ys.moveFactor(),a=r>.15&&!pe&&!We&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*Ve*o*i,e.root.position.z+=s*Ve*o*i,e.root.rotation.y=Di(e.root.rotation.y,Math.atan2(n,s),12*i)),ys.afterMove(),ys.update(i,t,a),Ht.lerp(e.root.position,Math.min(4*i,1)),we.position.copy(Ht).add(Ai),we.lookAt(Ht.x,Ht.y+1.4,Ht.z),je.render(ys.scene,we);return}if(ve==="hill"&&ro){const e=ro.christian;let n=0,s=0;(xt.has("KeyW")||xt.has("ArrowUp"))&&(s-=1),(xt.has("KeyS")||xt.has("ArrowDown"))&&(s+=1),(xt.has("KeyA")||xt.has("ArrowLeft"))&&(n-=1),(xt.has("KeyD")||xt.has("ArrowRight"))&&(n+=1),n+=he.x,s+=he.y;const r=Math.hypot(n,s),o=Hn.moveFactor(),a=r>.15&&!pe&&!We&&o>0;a&&(n/=Math.max(r,1),s/=Math.max(r,1),e.root.position.x+=n*Ve*o*i,e.root.position.z+=s*Ve*o*i,e.root.rotation.y=Di(e.root.rotation.y,Math.atan2(n,s),12*i)),Hn.afterMove(),Hn.update(i,t,a);const l=Hn.nearScroll()&&!pe&&!We;et.prompt.style.display=l?"block":"none",l?(et.promptKey.style.display=Ke?"none":"inline-block",et.promptWho.textContent="Pick up the scroll",Ke&&(et.talkBtn.textContent="Take",et.talkBtn.style.display="block")):Ke&&!pe&&(et.talkBtn.style.display="none"),Ht.lerp(e.root.position,Math.min(4*i,1)),we.position.copy(Ht).add(Ai),we.lookAt(Ht.x,Ht.y+1.4,Ht.z),je.render(Hn.scene,we);return}if(Hi&&(n_(i,t),i_(i,t),ri=pe?null:Gg(),Qs=pe||ri?null:Vg(),(ri||Qs)&&!We&&!ci?(et.prompt.style.display="block",et.promptWho.textContent=ri?`Talk to ${ri.name}`:`Look at ${Qs.name}`,Ke&&(et.talkBtn.textContent=ri?"Talk":"Look",et.talkBtn.style.display="block")):(et.prompt.style.display="none",pe||(et.talkBtn.style.display="none"))),En.update(t),Jg(i),En.lightBeam.visible){const e=1+Math.sin(t*2.4)*.12;En.lightBeam.scale.set(e,1,e)}Ht.lerp(ce.root.position,Math.min(4*i,1)),we.position.copy(Ht).add(Ai),we.lookAt(Ht.x,Ht.y+1.4,Ht.z),je.render(Rn,we)}window.addEventListener("resize",()=>{we.aspect=window.innerWidth/window.innerHeight,we.updateProjectionMatrix(),yt.resize(window.innerWidth/window.innerHeight),je.setSize(window.innerWidth,window.innerHeight)});gc();window.__game={christian:ce,npcs:hi,quest:bt,world:En,openDialogue:cc,advanceDialogue:xo,camTarget:Ht,worldMap:yt,slough:Bn,enterSlough:go,morality:xs,enterMorality:uo,wicket:mn,enterWicket:Ss,cross:vs,enterCross:mo,highway:ys,enterHighway:po,hill:Hn,enterHill:fo,playScript:Mn,goToMap:Fe,get mode(){return ve}};
