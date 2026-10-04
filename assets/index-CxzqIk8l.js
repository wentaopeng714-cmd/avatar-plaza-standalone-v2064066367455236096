(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const fl="181",jh=0,ql=1,Qh=2,fu=1,pu=2,ti=3,Li=0,sn=1,On=2,oi=0,Ps=1,$l=2,Zl=3,Kl=4,tf=5,Zi=100,ef=101,nf=102,sf=103,rf=104,of=200,af=201,cf=202,lf=203,rc=204,oc=205,df=206,uf=207,hf=208,ff=209,pf=210,mf=211,xf=212,gf=213,_f=214,ac=0,cc=1,lc=2,Ns=3,dc=4,uc=5,hc=6,fc=7,mu=0,vf=1,Mf=2,Ci=0,yf=1,bf=2,Ef=3,xu=4,Sf=5,Tf=6,Af=7,gu=300,Os=301,Bs=302,pc=303,mc=304,ia=306,ko=1e3,ii=1001,xc=1002,mn=1003,wf=1004,Yr=1005,Tn=1006,ga=1007,Ji=1008,Vn=1009,_u=1010,vu=1011,yr=1012,pl=1013,Qi=1014,si=1015,qs=1016,ml=1017,xl=1018,br=1020,Mu=35902,yu=35899,bu=1021,Eu=1022,Fn=1023,Er=1026,Sr=1027,Su=1028,gl=1029,_l=1030,vl=1031,Ml=1033,Ao=33776,wo=33777,Co=33778,Ro=33779,gc=35840,_c=35841,vc=35842,Mc=35843,yc=36196,bc=37492,Ec=37496,Sc=37808,Tc=37809,Ac=37810,wc=37811,Cc=37812,Rc=37813,Pc=37814,Dc=37815,Lc=37816,Fc=37817,Ic=37818,Uc=37819,Nc=37820,Oc=37821,Bc=36492,zc=36494,kc=36495,Gc=36283,Vc=36284,Hc=36285,Wc=36286,Cf=3200,Rf=3201,Tu=0,Pf=1,Si="",fn="srgb",zs="srgb-linear",Go="linear",ue="srgb",os=7680,Jl=519,Df=512,Lf=513,Ff=514,Au=515,If=516,Uf=517,Nf=518,Of=519,Xc=35044,jl="300 es",Gn=2e3,Vo=2001;function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){const i=Ho("canvas");return i.style.display="block",i}const Ql={};function Wo(...i){const t="THREE."+i.shift();console.log(t,...i)}function qt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Ce(...i){const t="THREE."+i.shift();console.error(t,...i)}function Tr(...i){const t=i.join(" ");t in Ql||(Ql[t]=!0,qt(...i))}function zf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_a=Math.PI/180,Yc=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function kf(i,t){return(i%t+t)%t}function va(i,t,e){return(1-e)*i+e*t}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],p=r[o+1],x=r[o+2],v=r[o+3];if(a<=0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a>=1){t[e+0]=h,t[e+1]=p,t[e+2]=x,t[e+3]=v;return}if(d!==v||c!==h||l!==p||u!==x){let m=c*h+l*p+u*x+d*v;m<0&&(h=-h,p=-p,x=-x,v=-v,m=-m);let f=1-a;if(m<.9995){const A=Math.acos(m),g=Math.sin(A);f=Math.sin(f*A)/g,a=Math.sin(a*A)/g,c=c*f+h*a,l=l*f+p*a,u=u*f+x*a,d=d*f+v*a}else{c=c*f+h*a,l=l*f+p*a,u=u*f+x*a,d=d*f+v*a;const A=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=A,l*=A,u*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+u*d+c*p-l*h,t[e+1]=c*x+u*h+l*d-a*p,t[e+2]=l*x+u*p+a*h-c*d,t[e+3]=u*x-a*d-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d+h*p*x;break;case"YZX":this._x=h*u*d+l*p*x,this._y=l*p*d+h*u*x,this._z=l*u*x-h*p*d,this._w=l*u*d-h*p*x;break;case"XZY":this._x=h*u*d-l*p*x,this._y=l*p*d-h*u*x,this._z=l*u*x+h*p*d,this._w=l*u*d+h*p*x;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new I,td=new Nr;class Zt{constructor(t,e,n,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],x=n[8],v=s[0],m=s[3],f=s[6],A=s[1],g=s[4],b=s[7],C=s[2],S=s[5],T=s[8];return r[0]=o*v+a*A+c*C,r[3]=o*m+a*g+c*S,r[6]=o*f+a*b+c*T,r[1]=l*v+u*A+d*C,r[4]=l*m+u*g+d*S,r[7]=l*f+u*b+d*T,r[2]=h*v+p*A+x*C,r[5]=h*m+p*g+x*S,r[8]=h*f+p*b+x*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,p=l*r-o*c,x=e*d+n*h+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=d*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Zt,ed=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){const i={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zs]:{primaries:t,whitePoint:n,transfer:Go,toXYZ:ed,fromXYZ:nd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:ed,fromXYZ:nd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const ae=Gf();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let as;class Vf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=Ho("canvas")),as.width=t.width,as.height=t.height;const s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ho("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ba(s[o].image)):r.push(ba(s[o]))}else r=ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let Wf=0;const Ea=new I;class Ze extends $s{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ii,s=ii,r=Tn,o=Ji,a=Fn,c=Vn,l=Ze.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ai(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ko:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ko:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=gu;Ze.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],x=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,b=(p+1)/2,C=(f+1)/2,S=(u+h)/4,T=(d+v)/4,P=(x+m)/4;return g>b&&g>C?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=S/n,r=T/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=P/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(d-v)/A,this.z=(h-u)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xf extends $s{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ze(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new yl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cu extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yf extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),$r.subVectors(this.max,js),cs.subVectors(t.a,js),ls.subVectors(t.b,js),ds.subVectors(t.c,js),mi.subVectors(ls,cs),xi.subVectors(ds,ls),ki.subVectors(cs,ds);let e=[0,-mi.z,mi.y,0,-xi.z,xi.y,0,-ki.z,ki.y,mi.z,0,-mi.x,xi.z,0,-xi.x,ki.z,0,-ki.x,-mi.y,mi.x,0,-xi.y,xi.x,0,-ki.y,ki.x,0];return!Sa(e,cs,ls,ds,$r)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,cs,ls,ds,$r))?!1:(Zr.crossVectors(mi,xi),e=[Zr.x,Zr.y,Zr.z],Sa(e,cs,ls,ds,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new I,new I,new I,new I,new I,new I,new I,new I],Pn=new I,qr=new Or,cs=new I,ls=new I,ds=new I,mi=new I,xi=new I,ki=new I,js=new I,$r=new I,Zr=new I,Gi=new I;function Sa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);const a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const qf=new Or,Qs=new I,Ta=new I;class sa{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Ta)),this.expandByPoint(Qs.copy(t.center).sub(Ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zn=new I,Aa=new I,Kr=new I,gi=new I,wa=new I,Jr=new I,Ca=new I;class bl{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Aa.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(Aa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Kr),a=gi.dot(this.direction),c=-gi.dot(Kr),l=gi.lengthSq(),u=Math.abs(1-o*o);let d,h,p,x;if(u>0)if(d=o*c-a,h=o*a-c,x=r*u,d>=0)if(h>=-x)if(h<=x){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;else h<=-x?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l):h<=x?(d=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Aa).addScaledVector(Kr,h),p}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){wa.subVectors(e,t),Jr.subVectors(n,t),Ca.crossVectors(wa,Jr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,t);const c=a*this.direction.dot(Jr.crossVectors(gi,Jr));if(c<0)return null;const l=a*this.direction.dot(wa.cross(gi));if(l<0||c+l>o)return null;const u=-a*gi.dot(Ca);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,o,a,c,l,u,d,h,p,x,v,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,p,x,v,m)}set(t,e,n,s,r,o,a,c,l,u,d,h,p,x,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,p=o*d,x=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+x*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=x+p*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,p=c*d,x=l*u,v=l*d;e[0]=h+v*a,e[4]=x*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-x,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,p=c*d,x=l*u,v=l*d;e[0]=h-v*a,e[4]=-o*d,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,p=o*d,x=a*u,v=a*d;e[0]=c*u,e[4]=x*l-p,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=p*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,p=o*l,x=a*c,v=a*l;e[0]=c*u,e[4]=v-h*d,e[8]=x*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+x,e[10]=h-v*d}else if(t.order==="XZY"){const h=o*c,p=o*l,x=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=o*u,e[9]=p*d-x,e[2]=x*d-p,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Zf)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),_i.crossVectors(n,un),_i.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),_i.crossVectors(n,un)),_i.normalize(),jr.crossVectors(un,_i),s[0]=_i.x,s[4]=jr.x,s[8]=un.x,s[1]=_i.y,s[5]=jr.y,s[9]=un.y,s[2]=_i.z,s[6]=jr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],x=n[2],v=n[6],m=n[10],f=n[14],A=n[3],g=n[7],b=n[11],C=n[15],S=s[0],T=s[4],P=s[8],_=s[12],M=s[1],F=s[5],O=s[9],z=s[13],W=s[2],X=s[6],$=s[10],tt=s[14],H=s[3],rt=s[7],lt=s[11],Ut=s[15];return r[0]=o*S+a*M+c*W+l*H,r[4]=o*T+a*F+c*X+l*rt,r[8]=o*P+a*O+c*$+l*lt,r[12]=o*_+a*z+c*tt+l*Ut,r[1]=u*S+d*M+h*W+p*H,r[5]=u*T+d*F+h*X+p*rt,r[9]=u*P+d*O+h*$+p*lt,r[13]=u*_+d*z+h*tt+p*Ut,r[2]=x*S+v*M+m*W+f*H,r[6]=x*T+v*F+m*X+f*rt,r[10]=x*P+v*O+m*$+f*lt,r[14]=x*_+v*z+m*tt+f*Ut,r[3]=A*S+g*M+b*W+C*H,r[7]=A*T+g*F+b*X+C*rt,r[11]=A*P+g*O+b*$+C*lt,r[15]=A*_+g*z+b*tt+C*Ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],p=t[14],x=t[3],v=t[7],m=t[11],f=t[15];return x*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*p-n*c*p)+v*(+e*c*p-e*l*h+r*o*h-s*o*p+s*l*u-r*c*u)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-e*c*d+e*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],v=t[13],m=t[14],f=t[15],A=d*m*l-v*h*l+v*c*p-a*m*p-d*c*f+a*h*f,g=x*h*l-u*m*l-x*c*p+o*m*p+u*c*f-o*h*f,b=u*v*l-x*d*l+x*a*p-o*v*p-u*a*f+o*d*f,C=x*d*c-u*v*c-x*a*h+o*v*h+u*a*m-o*d*m,S=e*A+n*g+s*b+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=A*T,t[1]=(v*h*r-d*m*r-v*s*p+n*m*p+d*s*f-n*h*f)*T,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*f+n*c*f)*T,t[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*p-n*c*p)*T,t[4]=g*T,t[5]=(u*m*r-x*h*r+x*s*p-e*m*p-u*s*f+e*h*f)*T,t[6]=(x*c*r-o*m*r-x*s*l+e*m*l+o*s*f-e*c*f)*T,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*p+e*c*p)*T,t[8]=b*T,t[9]=(x*d*r-u*v*r-x*n*p+e*v*p+u*n*f-e*d*f)*T,t[10]=(o*v*r-x*a*r+x*n*l-e*v*l-o*n*f+e*a*f)*T,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*p-e*a*p)*T,t[12]=C*T,t[13]=(u*v*s-x*d*s+x*n*h-e*v*h-u*n*m+e*d*m)*T,t[14]=(x*a*s-o*v*s-x*n*c+e*v*c+o*n*m-e*a*m)*T,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*h+e*a*h)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,p=r*u,x=r*d,v=o*u,m=o*d,f=a*d,A=c*l,g=c*u,b=c*d,C=n.x,S=n.y,T=n.z;return s[0]=(1-(v+f))*C,s[1]=(p+b)*C,s[2]=(x-g)*C,s[3]=0,s[4]=(p-b)*S,s[5]=(1-(h+f))*S,s[6]=(m+A)*S,s[7]=0,s[8]=(x+g)*T,s[9]=(m-A)*T,s[10]=(1-(h+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=us.set(s[0],s[1],s[2]).length();const o=us.set(s[4],s[5],s[6]).length(),a=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const l=1/r,u=1/o,d=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Gn,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let x,v;if(c)x=r/(o-r),v=o*r/(o-r);else if(a===Gn)x=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Vo)x=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Gn,c=!1){const l=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,v;if(c)x=1/(o-r),v=o/(o-r);else if(a===Gn)x=-2/(o-r),v=-(o+r)/(o-r);else if(a===Vo)x=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const us=new I,Dn=new ve,$f=new I(0,0,0),Zf=new I(1,1,1),_i=new I,jr=new I,un=new I,id=new ve,sd=new Nr;class Hn{constructor(t=0,e=0,n=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(id,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sd.setFromEuler(this),this.setFromQuaternion(sd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kf=0;const rd=new I,hs=new Nr,Kn=new ve,Qr=new I,tr=new I,Jf=new I,jf=new Nr,od=new I(1,0,0),ad=new I(0,1,0),cd=new I(0,0,1),ld={type:"added"},Qf={type:"removed"},fs={type:"childadded",child:null},Ra={type:"childremoved",child:null};class ke extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new I,e=new Hn,n=new Nr,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Zt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(od,t)}rotateY(t){return this.rotateOnAxis(ad,t)}rotateZ(t){return this.rotateOnAxis(cd,t)}translateOnAxis(t,e){return rd.copy(t).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(od,t)}translateY(t){return this.translateOnAxis(ad,t)}translateZ(t){return this.translateOnAxis(cd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(tr,Qr,this.up):Kn.lookAt(Qr,tr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Kn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ld),fs.child=t,this.dispatchEvent(fs),fs.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ld),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,Jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ke.DEFAULT_UP=new I(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new I,Jn=new I,Pa=new I,jn=new I,ps=new I,ms=new I,dd=new I,Da=new I,La=new I,Fa=new I,Ia=new pe,Ua=new pe,Na=new pe;class Sn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),Jn.subVectors(n,e),Pa.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(Jn),c=Ln.dot(Pa),l=Jn.dot(Jn),u=Jn.dot(Pa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(l*c-a*u)*h,x=(o*u-a*c)*h;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(Ua,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),Jn.subVectors(t,e),Ln.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Ln.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ps.subVectors(s,n),ms.subVectors(r,n),Da.subVectors(t,n);const c=ps.dot(Da),l=ms.dot(Da);if(c<=0&&l<=0)return e.copy(n);La.subVectors(t,s);const u=ps.dot(La),d=ms.dot(La);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ps,o);Fa.subVectors(t,r);const p=ps.dot(Fa),x=ms.dot(Fa);if(x>=0&&p<=x)return e.copy(r);const v=p*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(ms,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return dd.subVectors(r,s),a=(d-u)/(d-u+(p-x)),e.copy(s).addScaledVector(dd,a);const f=1/(m+v+h);return o=v*f,a=h*f,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},to={h:0,s:0,l:0};function Oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=kf(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oa(o,r,t+1/3),this.g=Oa(o,r,t),this.b=Oa(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=Ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return ae.workingToColorSpace($e.copy(this),t),Math.round(Qt($e.r*255,0,255))*65536+Math.round(Qt($e.g*255,0,255))*256+Math.round(Qt($e.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=fn){ae.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(to);const n=va(vi.h,to.h,e),s=va(vi.s,to.s,e),r=va(vi.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Ft;Ft.NAMES=Ru;let t0=0;class ns extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Ps,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rc,this.blendDst=oc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rc&&(n.blendSrc=this.blendSrc),this.blendDst!==oc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Br extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new I,eo=new gt;let e0=0;class wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xc&&(t.usage=this.usage),t}}class Pu extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Du extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let n0=0;const vn=new ve,Ba=new ke,xs=new I,hn=new Or,er=new Or,He=new I;class Ke extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?Du:Pu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(hn.min,er.min),hn.expandByPoint(He),He.addVectors(hn.max,er.max),hn.expandByPoint(He)):(hn.expandByPoint(er.min),hn.expandByPoint(er.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)He.fromBufferAttribute(a,l),c&&(xs.fromBufferAttribute(t,l),He.add(xs)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,u=new I,d=new I,h=new gt,p=new gt,x=new gt,v=new I,m=new I;function f(P,_,M){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,_),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,P),p.fromBufferAttribute(r,_),x.fromBufferAttribute(r,M),u.sub(l),d.sub(l),p.sub(h),x.sub(h);const F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(F),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(F),a[P].add(v),a[_].add(v),a[M].add(v),c[P].add(m),c[_].add(m),c[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let P=0,_=A.length;P<_;++P){const M=A[P],F=M.start,O=M.count;for(let z=F,W=F+O;z<W;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const g=new I,b=new I,C=new I,S=new I;function T(P){C.fromBufferAttribute(s,P),S.copy(C);const _=a[P];g.copy(_),g.sub(C.multiplyScalar(C.dot(_))).normalize(),b.crossVectors(S,_);const F=b.dot(c[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,F)}for(let P=0,_=A.length;P<_;++P){const M=A[P],F=M.start,O=M.count;for(let z=F,W=F+O;z<W;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(t)for(let h=0,p=t.count;h<p;h+=3){const x=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let p=0,x=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let f=0;f<u;f++)h[x++]=l[p++]}return new wn(h,u,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=t(h,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new ve,Vi=new bl,no=new sa,hd=new I,io=new I,so=new I,ro=new I,za=new I,oo=new I,fd=new I,ao=new I;class xn extends ke{constructor(t=new Ke,e=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(za.fromBufferAttribute(d,t),o?oo.addScaledVector(za,u):oo.addScaledVector(za.sub(e),u))}e.add(oo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(no.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(no,hd)===null||Vi.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(ud.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(ud),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const m=h[x],f=o[m.materialIndex],A=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,C=g;b<C;b+=3){const S=a.getX(b),T=a.getX(b+1),P=a.getX(b+2);s=co(this,f,t,n,l,u,d,S,T,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){const A=a.getX(m),g=a.getX(m+1),b=a.getX(m+2);s=co(this,o,t,n,l,u,d,A,g,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const m=h[x],f=o[m.materialIndex],A=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,C=g;b<C;b+=3){const S=b,T=b+1,P=b+2;s=co(this,f,t,n,l,u,d,S,T,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){const A=m,g=m+1,b=m+2;s=co(this,o,t,n,l,u,d,A,g,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function i0(i,t,e,n,s,r,o,a){let c;if(t.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Li,a),c===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ao);return l<e.near||l>e.far?null:{distance:l,point:ao.clone(),object:i}}function co(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,io),i.getVertexPosition(c,so),i.getVertexPosition(l,ro);const u=i0(i,t,e,n,io,so,ro,fd);if(u){const d=new I;Sn.getBarycoord(fd,io,so,ro,d),s&&(u.uv=Sn.getInterpolatedAttribute(s,a,c,l,d,new gt)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,a,c,l,d,new gt)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,c,l,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new I,materialIndex:0};Sn.getNormal(io,so,ro,h.normal),u.face=h,u.barycoord=d}return u}class ui extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(d,2));function x(v,m,f,A,g,b,C,S,T,P,_){const M=b/T,F=C/P,O=b/2,z=C/2,W=S/2,X=T+1,$=P+1;let tt=0,H=0;const rt=new I;for(let lt=0;lt<$;lt++){const Ut=lt*F-z;for(let re=0;re<X;re++){const ce=re*M-O;rt[v]=ce*A,rt[m]=Ut*g,rt[f]=W,l.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[f]=S>0?1:-1,u.push(rt.x,rt.y,rt.z),d.push(re/T),d.push(1-lt/P),tt+=1}}for(let lt=0;lt<P;lt++)for(let Ut=0;Ut<T;Ut++){const re=h+Ut+X*lt,ce=h+Ut+X*(lt+1),xe=h+(Ut+1)+X*(lt+1),ge=h+(Ut+1)+X*lt;c.push(re,ce,ge),c.push(ce,xe,ge),H+=6}a.addGroup(p,H,_),p+=H,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function s0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const r0={clone:ks,merge:Qe};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=s0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fu extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new I,pd=new gt,md=new gt;class pn extends Fu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,pd,md),e.subVectors(md,pd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_a*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,_s=1;class c0 extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(gs,_s,t,e);s.layers=this.layers,this.add(s);const r=new pn(gs,_s,t,e);r.layers=this.layers,this.add(r);const o=new pn(gs,_s,t,e);o.layers=this.layers,this.add(o);const a=new pn(gs,_s,t,e);a.layers=this.layers,this.add(a);const c=new pn(gs,_s,t,e);c.layers=this.layers,this.add(c);const l=new pn(gs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Iu extends Ze{constructor(t=[],e=Os,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class l0 extends ts{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Iu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ui(5,5,5),r=new hi({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:oi});r.uniforms.tEquirect.value=e;const o=new xn(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Tn),new c0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class wt extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d0={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;l.inputState.pinching&&h>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new Sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uu extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class u0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xc,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new I;class Xo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nu extends ns{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const nr=new I,Ms=new I,ys=new I,bs=new gt,ir=new gt,Ou=new ve,lo=new I,sr=new I,uo=new I,xd=new gt,Ga=new gt,gd=new gt;class h0 extends ke{constructor(t=new Nu){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new u0(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Xo(n,3,0,!1)),vs.setAttribute("uv",new Xo(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new gt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Ou.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-ys.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ho(lo.set(-.5,-.5,0),ys,o,Ms,s,r),ho(sr.set(.5,-.5,0),ys,o,Ms,s,r),ho(uo.set(.5,.5,0),ys,o,Ms,s,r),xd.set(0,0),Ga.set(1,0),gd.set(1,1);let a=t.ray.intersectTriangle(lo,sr,uo,!1,nr);if(a===null&&(ho(sr.set(-.5,.5,0),ys,o,Ms,s,r),Ga.set(0,1),a=t.ray.intersectTriangle(lo,uo,sr,!1,nr),a===null))return;const c=t.ray.origin.distanceTo(nr);c<t.near||c>t.far||e.push({distance:c,point:nr.clone(),uv:Sn.getInterpolation(nr,lo,sr,uo,xd,Ga,gd,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ho(i,t,e,n,s,r){bs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*bs.x-s*bs.y,ir.y=s*bs.x+r*bs.y):ir.copy(bs),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(Ou)}class f0 extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=mn,u=mn,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Va=new I,p0=new I,m0=new Zt;class qi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Va.subVectors(n,e).cross(p0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||m0.getNormalMatrix(t),s=this.coplanarPoint(Va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new sa,x0=new gt(.5,.5),fo=new I;class Tl{constructor(t=new qi,e=new qi,n=new qi,s=new qi,r=new qi,o=new qi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],p=r[7],x=r[8],v=r[9],m=r[10],f=r[11],A=r[12],g=r[13],b=r[14],C=r[15];if(s[0].setComponents(l-o,p-u,f-x,C-A).normalize(),s[1].setComponents(l+o,p+u,f+x,C+A).normalize(),s[2].setComponents(l+a,p+d,f+v,C+g).normalize(),s[3].setComponents(l-a,p-d,f-v,C-g).normalize(),n)s[4].setComponents(c,h,m,b).normalize(),s[5].setComponents(l-c,p-h,f-m,C-b).normalize();else if(s[4].setComponents(l-c,p-h,f-m,C-b).normalize(),e===Gn)s[5].setComponents(l+c,p+h,f+m,C+b).normalize();else if(e===Vo)s[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);const e=x0.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fo.x=s.normal.x>0?t.max.x:t.min.x,fo.y=s.normal.y>0?t.max.y:t.min.y,fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bu extends ns{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _d=new ve,qc=new bl,po=new sa,mo=new I;class g0 extends ke{constructor(t=new Ke,e=new Bu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;_d.copy(s).invert(),qc.copy(t.ray).applyMatrix4(_d);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=h,v=p;x<v;x++){const m=l.getX(x);mo.fromBufferAttribute(d,m),vd(mo,m,c,s,t,e,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=h,v=p;x<v;x++)mo.fromBufferAttribute(d,x),vd(mo,x,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vd(i,t,e,n,s,r,o){const a=qc.distanceSqToPoint(i);if(a<e){const c=new I;qc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Al extends Ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zu extends Ze{constructor(t,e,n=Qi,s,r,o,a=mn,c=mn,l,u=Er,d=1){if(u!==Er&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ku extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ar extends Ke{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,p=2*d+h,x=n*2+r,v=s+1,m=new I,f=new I;for(let A=0;A<=x;A++){let g=0,b=0,C=0,S=0;if(A<=n){const _=A/n,M=_*Math.PI/2;b=-u-t*Math.cos(M),C=t*Math.sin(M),S=-t*Math.cos(M),g=_*d}else if(A<=n+r){const _=(A-n)/r;b=-u+_*e,C=t,S=0,g=d+_*h}else{const _=(A-n-r)/n,M=_*Math.PI/2;b=u+t*Math.sin(M),C=t*Math.cos(M),S=t*Math.sin(M),g=d+h+_*d}const T=Math.max(0,Math.min(1,g/p));let P=0;A===0?P=.5/s:A===x&&(P=-.5/s);for(let _=0;_<=s;_++){const M=_/s,F=M*Math.PI*2,O=Math.sin(F),z=Math.cos(F);f.x=-C*z,f.y=b,f.z=C*O,a.push(f.x,f.y,f.z),m.set(-C*z,S,C*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+P,T)}if(A>0){const _=(A-1)*v;for(let M=0;M<s;M++){const F=_+M,O=_+M+1,z=A*v+M,W=A*v+M+1;o.push(F,O,z),o.push(O,W,z)}}}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class en extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let x=0;const v=[],m=n/2;let f=0;A(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(p,2));function A(){const b=new I,C=new I;let S=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const _=[],M=P/r,F=M*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,W=z*c+a,X=Math.sin(W),$=Math.cos(W);C.x=F*X,C.y=-M*n+m,C.z=F*$,d.push(C.x,C.y,C.z),b.set(X,T,$).normalize(),h.push(b.x,b.y,b.z),p.push(z,1-M),_.push(x++)}v.push(_)}for(let P=0;P<s;P++)for(let _=0;_<r;_++){const M=v[_][P],F=v[_+1][P],O=v[_+1][P+1],z=v[_][P+1];(t>0||_!==0)&&(u.push(M,F,z),S+=3),(e>0||_!==r-1)&&(u.push(F,O,z),S+=3)}l.addGroup(f,S,0),f+=S}function g(b){const C=x,S=new gt,T=new I;let P=0;const _=b===!0?t:e,M=b===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),x++;const F=x;for(let O=0;O<=s;O++){const W=O/s*c+a,X=Math.cos(W),$=Math.sin(W);T.x=_*$,T.y=m*M,T.z=_*X,d.push(T.x,T.y,T.z),h.push(0,M,0),S.x=X*.5+.5,S.y=$*.5*M+.5,p.push(S.x,S.y),x++}for(let O=0;O<s;O++){const z=C+O,W=F+O;b===!0?u.push(W,W+1,z):u.push(W+1,W,z),P+=3}l.addGroup(f,P,b===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wl extends en{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new wl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new gt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,c=new ve;for(let p=0;p<=t;p++){const x=p/t;s[p]=this.getTangentAt(x,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Qt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,x))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Qt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],p*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*d+this.aX,l=h*d+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _0 extends Cl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const xo=new I,Ha=new Rl,Wa=new Rl,Xa=new Rl;class v0 extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),l=xo);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),Ha.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,x,v,m),Wa.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,x,v,m),Xa.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,x,v,m)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Wa.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Xa.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Ha.calc(c),Wa.calc(c),Xa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Md(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function M0(i,t){const e=1-i;return e*e*t}function y0(i,t){return 2*(1-i)*i*t}function b0(i,t){return i*i*t}function hr(i,t,e,n){return M0(i,t)+y0(i,e)+b0(i,n)}function E0(i,t){const e=1-i;return e*e*e*t}function S0(i,t){const e=1-i;return 3*e*e*i*t}function T0(i,t){return 3*(1-i)*i*i*t}function A0(i,t){return i*i*i*t}function fr(i,t,e,n,s){return E0(i,t)+S0(i,e)+T0(i,n)+A0(i,s)}class Gu extends Xn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w0 extends Xn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,s.x,r.x,o.x,a.x),fr(t,s.y,r.y,o.y,a.y),fr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vu extends Xn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends Xn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends Xn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R0 extends Xn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y),hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Md(a,c.x,l.x,u.x,d.x),Md(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var yd=Object.freeze({__proto__:null,ArcCurve:_0,CatmullRomCurve3:v0,CubicBezierCurve:Gu,CubicBezierCurve3:w0,EllipseCurve:Cl,LineCurve:Vu,LineCurve3:C0,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:R0,SplineCurve:Wu});class P0 extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yd[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new yd[s.type]().fromJSON(s))}return this}}class bd extends P0{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vu(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Hu(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Gu(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Cl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xu extends bd{constructor(t){super(t),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new bd().fromJSON(s))}return this}}function D0(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Yu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=N0(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,d=c;for(let h=e;h<s;h+=e){const p=i[h],x=i[h+1];p<a&&(a=p),x<c&&(c=x),p>u&&(u=p),x>d&&(d=x)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return wr(r,o,e,a,c,l,0),o}function Yu(i,t,e,n,s){let r;if(s===q0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Ed(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Ed(o/n|0,i[o],i[o+1],r);return r&&Gs(r,r.next)&&(Rr(r),r=r.next),r}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Gs(e,e.next)||Re(e.prev,e,e.next)===0)){if(Rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&G0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?F0(i,n,s,r):L0(i)){t.push(c.i,i.i,l.i),Rr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=I0(es(i),t),wr(i,t,e,n,s,r,2)):o===2&&U0(i,t,e,n,s,r):wr(es(i),t,e,n,s,r,1);break}}}function L0(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),p=Math.max(a,c,l);let x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=h&&x.y>=d&&x.y<=p&&lr(s,a,r,c,o,l,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function F0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Re(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,p=Math.min(a,c,l),x=Math.min(u,d,h),v=Math.max(a,c,l),m=Math.max(u,d,h),f=$c(p,x,t,e,n),A=$c(v,m,t,e,n);let g=i.prevZ,b=i.nextZ;for(;g&&g.z>=f&&b&&b.z<=A;){if(g.x>=p&&g.x<=v&&g.y>=x&&g.y<=m&&g!==s&&g!==o&&lr(a,u,c,d,l,h,g.x,g.y)&&Re(g.prev,g,g.next)>=0||(g=g.prevZ,b.x>=p&&b.x<=v&&b.y>=x&&b.y<=m&&b!==s&&b!==o&&lr(a,u,c,d,l,h,b.x,b.y)&&Re(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;g&&g.z>=f;){if(g.x>=p&&g.x<=v&&g.y>=x&&g.y<=m&&g!==s&&g!==o&&lr(a,u,c,d,l,h,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;b&&b.z<=A;){if(b.x>=p&&b.x<=v&&b.y>=x&&b.y<=m&&b!==s&&b!==o&&lr(a,u,c,d,l,h,b.x,b.y)&&Re(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function I0(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Gs(n,s)&&$u(n,e,e.next,s)&&Cr(n,s)&&Cr(s,n)&&(t.push(n.i,e.i,s.i),Rr(e),Rr(e.next),e=i=s),e=e.next}while(e!==i);return es(e)}function U0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W0(o,a)){let c=Zu(o,a);o=es(o,o.next),c=es(c,c.next),wr(o,t,e,n,s,r,0),wr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function N0(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Yu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(H0(l))}s.sort(O0);for(let r=0;r<s.length;r++)e=B0(s[r],e);return e}function O0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function B0(i,t){const e=z0(i,t);if(!e)return t;const n=Zu(e,i);return es(n,n.next),es(e,e.next)}function z0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Gs(i,e))return e;do{if(Gs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&qu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Cr(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&k0(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function k0(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function G0(i,t,e,n){let s=i;do s.z===0&&(s.z=$c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,V0(s)}function V0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function $c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function H0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function lr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&qu(i,t,e,n,s,r,o,a)}function W0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!X0(i,t)&&(Cr(i,t)&&Cr(t,i)&&Y0(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Gs(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Gs(i,t){return i.x===t.x&&i.y===t.y}function $u(i,t,e,n){const s=_o(Re(i,t,e)),r=_o(Re(i,t,n)),o=_o(Re(e,n,i)),a=_o(Re(e,n,t));return!!(s!==r&&o!==a||s===0&&go(i,e,t)||r===0&&go(i,n,t)||o===0&&go(e,i,n)||a===0&&go(e,t,n))}function go(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _o(i){return i>0?1:i<0?-1:0}function X0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Cr(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function Y0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zu(i,t){const e=Zc(i.i,i.x,i.y),n=Zc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ed(i,t,e,n){const s=Zc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function q0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class $0{static triangulate(t,e,n=2){return D0(t,e,n)}}class pr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return pr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sd(t),Td(n,t);let o=t.length;e.forEach(Sd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Td(n,e[c]);const a=$0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Sd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Td(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ra extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,p=[],x=[],v=[],m=[];for(let f=0;f<u;f++){const A=f*h-o;for(let g=0;g<l;g++){const b=g*d-r;x.push(b,-A,0),v.push(0,0,1),m.push(g/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<a;A++){const g=A+l*f,b=A+l*(f+1),C=A+1+l*(f+1),S=A+1+l*f;p.push(g,b,S),p.push(b,C,S)}this.setIndex(p),this.setAttribute("position",new Fe(x,3)),this.setAttribute("normal",new Fe(v,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pl extends Ke{constructor(t=new Xu([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(o,2));function l(u){const d=s.length/3,h=u.extractPoints(e);let p=h.shape;const x=h.holes;pr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=x.length;m<f;m++){const A=x[m];pr.isClockWise(A)===!0&&(x[m]=A.reverse())}const v=pr.triangulateShape(p,x);for(let m=0,f=x.length;m<f;m++){const A=x[m];p=p.concat(A)}for(let m=0,f=p.length;m<f;m++){const A=p[m];s.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let m=0,f=v.length;m<f;m++){const A=v[m],g=A[0]+d,b=A[1]+d,C=A[2]+d;n.push(g,b,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Z0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Pl(n,t.curveSegments)}}function Z0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class se extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new I,h=new I,p=[],x=[],v=[],m=[];for(let f=0;f<=n;f++){const A=[],g=f/n;let b=0;f===0&&o===0?b=.5/e:f===n&&c===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){const S=C/e;d.x=-t*Math.cos(s+S*r)*Math.sin(o+g*a),d.y=t*Math.cos(o+g*a),d.z=t*Math.sin(s+S*r)*Math.sin(o+g*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(S+b,1-g),A.push(l++)}u.push(A)}for(let f=0;f<n;f++)for(let A=0;A<e;A++){const g=u[f][A+1],b=u[f][A],C=u[f+1][A],S=u[f+1][A+1];(f!==0||o>0)&&p.push(g,b,S),(f!==n-1||c<Math.PI)&&p.push(b,C,S)}this.setIndex(p),this.setAttribute("position",new Fe(x,3)),this.setAttribute("normal",new Fe(v,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ye extends Ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new I,d=new I,h=new I;for(let p=0;p<=n;p++)for(let x=0;x<=s;x++){const v=x/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(x/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=s;x++){const v=(s+1)*p+x-1,m=(s+1)*(p-1)+x-1,f=(s+1)*(p-1)+x,A=(s+1)*p+x;o.push(v,m,A),o.push(m,f,A)}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ku extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class K0 extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class J0 extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class oa extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class j0 extends oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ya=new ve,Ad=new I,wd=new I;class Ju{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ad.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ad),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cd=new ve,rr=new I,qa=new I;class Q0 extends Ju{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),qa.copy(n.position),qa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qa),n.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),Cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,n.coordinateSystem,n.reversedDepth)}}class ju extends oa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Q0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qu extends Fu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tp extends Ju{constructor(){super(new Qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new tp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ep extends oa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class np extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Rd=new ve;class ip{constructor(t,e,n=0,s=1/0){this.ray=new bl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rd),this}intersectObject(t,e=!0,n=[]){return Kc(t,this,n,e),n.sort(Pd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Kc(t[s],this,n,e);return n.sort(Pd),n}}function Pd(i,t){return i.distance-t.distance}function Kc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Kc(r[o],t,e,!0)}}function Dd(i,t,e,n){const s=sp(n);switch(e){case bu:return i*t;case Su:return i*t/s.components*s.byteLength;case gl:return i*t/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case Eu:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case Ao:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:case Mc:return Math.max(i,16)*Math.max(t,8)/4;case gc:case vc:return Math.max(i,8)*Math.max(t,8)/2;case yc:case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bc:case zc:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gc:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hc:case Wc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sp(i){switch(i){case Vn:case _u:return{byteLength:1,components:1};case yr:case vu:case qs:return{byteLength:2,components:1};case ml:case xl:return{byteLength:2,components:4};case Qi:case pl:case si:return{byteLength:4,components:1};case Mu:case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);function th(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rp(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],v=d[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const v=d[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
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
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
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
#endif`,jp=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,rm=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ox=`uniform sampler2D t2D;
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`#include <common>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fx=`#define DISTANCE
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
}`,px=`#define DISTANCE
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`uniform float scale;
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,Mx=`uniform vec3 diffuse;
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
}`,yx=`#define LAMBERT
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
}`,bx=`#define LAMBERT
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
}`,Ex=`#define MATCAP
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
}`,Sx=`#define MATCAP
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
}`,Tx=`#define NORMAL
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
}`,Ax=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Cx=`#define PHONG
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
}`,Rx=`#define STANDARD
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
}`,Px=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,Lx=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Nx=`uniform vec3 color;
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
}`,Ox=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Bx=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:cp,alphamap_pars_fragment:lp,alphatest_fragment:dp,alphatest_pars_fragment:up,aomap_fragment:hp,aomap_pars_fragment:fp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:xp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Sp,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:wp,color_vertex:Cp,common:Rp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Fp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:jp,envmap_vertex:Vp,fog_vertex:Hp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:Yp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:$p,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Kp,lights_pars_begin:Jp,lights_toon_fragment:Qp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:om,lights_fragment_end:am,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:um,map_fragment:hm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:ym,morphtarget_vertex:bm,normal_fragment_begin:Em,normal_fragment_maps:Sm,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:wm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Lm,opaque_fragment:Fm,packing:Im,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:Ym,skinning_vertex:qm,skinnormal_vertex:$m,specularmap_fragment:Zm,specularmap_pars_fragment:Km,tonemapping_fragment:Jm,tonemapping_pars_fragment:jm,transmission_fragment:Qm,transmission_pars_fragment:tx,uv_pars_fragment:ex,uv_pars_vertex:nx,uv_vertex:ix,worldpos_vertex:sx,background_vert:rx,background_frag:ox,backgroundCube_vert:ax,backgroundCube_frag:cx,cube_vert:lx,cube_frag:dx,depth_vert:ux,depth_frag:hx,distanceRGBA_vert:fx,distanceRGBA_frag:px,equirect_vert:mx,equirect_frag:xx,linedashed_vert:gx,linedashed_frag:_x,meshbasic_vert:vx,meshbasic_frag:Mx,meshlambert_vert:yx,meshlambert_frag:bx,meshmatcap_vert:Ex,meshmatcap_frag:Sx,meshnormal_vert:Tx,meshnormal_frag:Ax,meshphong_vert:wx,meshphong_frag:Cx,meshphysical_vert:Rx,meshphysical_frag:Px,meshtoon_vert:Dx,meshtoon_frag:Lx,points_vert:Fx,points_frag:Ix,shadow_vert:Ux,shadow_frag:Nx,sprite_vert:Ox,sprite_frag:Bx},ut={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Nn={basic:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Qe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Qe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Qe([ut.points,ut.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Qe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Qe([ut.common,ut.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Qe([ut.sprite,ut.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Qe([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Qe([ut.lights,ut.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Nn.physical={uniforms:Qe([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const vo={r:0,b:0,g:0},Wi=new Hn,zx=new ve;function kx(i,t,e,n,s,r,o){const a=new Ft(0);let c=r===!0?0:1,l,u,d=null,h=0,p=null;function x(g){let b=g.isScene===!0?g.background:null;return b&&b.isTexture&&(b=(g.backgroundBlurriness>0?e:t).get(b)),b}function v(g){let b=!1;const C=x(g);C===null?f(a,c):C&&C.isColor&&(f(C,1),b=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(g,b){const C=x(b);C&&(C.isCubeTexture||C.mapping===ia)?(u===void 0&&(u=new xn(new ui(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ks(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Wi.copy(b.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zx.makeRotationFromEuler(Wi)),u.material.toneMapped=ae.getTransfer(C.colorSpace)!==ue,(d!==C||h!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=C,h=C.version,p=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new xn(new ra(2,2),new hi({name:"BackgroundMaterial",uniforms:ks(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ae.getTransfer(C.colorSpace)!==ue,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||h!==C.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=C,h=C.version,p=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function f(g,b){g.getRGB(vo,Lu(i)),n.buffers.color.setClear(vo.r,vo.g,vo.b,b,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,b=1){a.set(g),c=b,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,f(a,c)},render:v,addToRenderList:m,dispose:A}}function Gx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,F,O,z,W){let X=!1;const $=d(z,O,F);r!==$&&(r=$,l(r.object)),X=p(M,z,O,W),X&&x(M,z,O,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(M,F,O,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,F,O){const z=O.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let X=W[F.id];X===void 0&&(X={},W[F.id]=X);let $=X[z];return $===void 0&&($=h(c()),X[z]=$),$}function h(M){const F=[],O=[],z=[];for(let W=0;W<e;W++)F[W]=0,O[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,F,O,z){const W=r.attributes,X=F.attributes;let $=0;const tt=O.getAttributes();for(const H in tt)if(tt[H].location>=0){const lt=W[H];let Ut=X[H];if(Ut===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Ut=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Ut=M.instanceColor)),lt===void 0||lt.attribute!==Ut||Ut&&lt.data!==Ut.data)return!0;$++}return r.attributesNum!==$||r.index!==z}function x(M,F,O,z){const W={},X=F.attributes;let $=0;const tt=O.getAttributes();for(const H in tt)if(tt[H].location>=0){let lt=X[H];lt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));const Ut={};Ut.attribute=lt,lt&&lt.data&&(Ut.data=lt.data),W[H]=Ut,$++}r.attributes=W,r.attributesNum=$,r.index=z}function v(){const M=r.newAttributes;for(let F=0,O=M.length;F<O;F++)M[F]=0}function m(M){f(M,0)}function f(M,F){const O=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;O[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),W[M]!==F&&(i.vertexAttribDivisor(M,F),W[M]=F)}function A(){const M=r.newAttributes,F=r.enabledAttributes;for(let O=0,z=F.length;O<z;O++)F[O]!==M[O]&&(i.disableVertexAttribArray(O),F[O]=0)}function g(M,F,O,z,W,X,$){$===!0?i.vertexAttribIPointer(M,F,O,W,X):i.vertexAttribPointer(M,F,O,z,W,X)}function b(M,F,O,z){v();const W=z.attributes,X=O.getAttributes(),$=F.defaultAttributeValues;for(const tt in X){const H=X[tt];if(H.location>=0){let rt=W[tt];if(rt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const lt=rt.normalized,Ut=rt.itemSize,re=t.get(rt);if(re===void 0)continue;const ce=re.buffer,xe=re.type,ge=re.bytesPerElement,q=xe===i.INT||xe===i.UNSIGNED_INT||rt.gpuType===pl;if(rt.isInterleavedBufferAttribute){const J=rt.data,vt=J.stride,$t=rt.offset;if(J.isInstancedInterleavedBuffer){for(let Ct=0;Ct<H.locationSize;Ct++)f(H.location+Ct,J.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)m(H.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Ct=0;Ct<H.locationSize;Ct++)g(H.location+Ct,Ut/H.locationSize,xe,lt,vt*ge,($t+Ut/H.locationSize*Ct)*ge,q)}else{if(rt.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)f(H.location+J,rt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let J=0;J<H.locationSize;J++)g(H.location+J,Ut/H.locationSize,xe,lt,Ut*ge,Ut/H.locationSize*J*ge,q)}}else if($!==void 0){const lt=$[tt];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(H.location,lt);break;case 3:i.vertexAttrib3fv(H.location,lt);break;case 4:i.vertexAttrib4fv(H.location,lt);break;default:i.vertexAttrib1fv(H.location,lt)}}}}A()}function C(){P();for(const M in n){const F=n[M];for(const O in F){const z=F[O];for(const W in z)u(z[W].object),delete z[W];delete F[O]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;const F=n[M.id];for(const O in F){const z=F[O];for(const W in z)u(z[W].object),delete z[W];delete F[O]}delete n[M.id]}function T(M){for(const F in n){const O=n[F];if(O[M.id]===void 0)continue;const z=O[M.id];for(const W in z)u(z[W].object),delete z[W];delete O[M.id]}}function P(){_(),o=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Vx(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];e.update(p,n,1)}function c(l,u,d,h){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let x=0;for(let v=0;v<d;v++)x+=u[v]*h[v];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Hx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==si&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(qt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:C,maxSamples:S}}function Wx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new qi,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||x===null||x.length===0||r&&!m)r?u(null):l();else{const A=r?0:n,g=A*4;let b=f.clippingState||null;c.value=b,b=u(x,h,g,p);for(let C=0;C!==g;++C)b[C]=e[C];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,x){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,x!==!0||m===null){const f=p+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,b=p;g!==v;++g,b+=4)o.copy(d[g]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Xx(i){let t=new WeakMap;function e(o,a){return a===pc?o.mapping=Os:a===mc&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===pc||a===mc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new l0(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ti=4,Ld=[.125,.215,.35,.446,.526,.582],Ki=20,Yx=256,or=new Qu,Fd=new Ft;let $a=null,Za=0,Ka=0,Ja=!1;const qx=new I;class Id{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=qx}=r;$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Za,Ka),this._renderer.xr.enabled=Ja,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Os||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:qs,format:Fn,colorSpace:zs,depthBuffer:!1},s=Ud(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$x(r)),this._blurMaterial=Kx(r,t,e),this._ggxMaterial=Zx(r,t,e)}return s}_compileMaterial(t){const e=new xn(new Ke,t);this._renderer.compile(e,or)}_sceneToCubeUV(t,e,n,s,r){const c=new pn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Fd),d.toneMapping=Ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new ui,new Br({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let f=!1;const A=t.background;A?A.isColor&&(m.color.copy(A),t.background=null,f=!0):(m.color.copy(Fd),f=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(c.up.set(0,l[g],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[g],r.y,r.z)):b===1?(c.up.set(0,0,l[g]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[g],r.z)):(c.up.set(0,l[g],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[g]));const C=this._cubeSize;Es(s,b*C,g>2?C:0,C,C),d.setRenderTarget(s),f&&d.render(v,c),d.render(t,c)}d.toneMapping=p,d.autoClear=h,t.background=A}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Os||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Es(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=.05+l*.95,p=d*h,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Ti?n-x+Ti:0),f=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=x-e,Es(r,m,f,3*v,2*v),s.setRenderTarget(r),s.render(a,or),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,Es(t,m,f,3*v,2*v),s.setRenderTarget(t),s.render(a,or)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),v=r/x,m=isFinite(r)?1+Math.floor(u*v):Ki;m>Ki&&qt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const f=[];let A=0;for(let T=0;T<Ki;++T){const P=T/v,_=Math.exp(-P*P/2);f.push(_),T===0?A+=_:T<m&&(A+=2*_)}for(let T=0;T<f.length;T++)f[T]=f[T]/A;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-n;const b=this._sizeLods[s],C=3*b*(s>g-Ti?s-g+Ti:0),S=4*(this._cubeSize-b);Es(e,C,S,3*b,2*b),c.setRenderTarget(e),c.render(d,or)}}function $x(i){const t=[],e=[],n=[];let s=i;const r=i-Ti+1+Ld.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ti?c=Ld[o-i+Ti-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,v=3,m=2,f=1,A=new Float32Array(v*x*p),g=new Float32Array(m*x*p),b=new Float32Array(f*x*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,P=S>2?0:-1,_=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];A.set(_,v*x*S),g.set(h,m*x*S);const M=[S,S,S,S,S,S];b.set(M,f*x*S)}const C=new Ke;C.setAttribute("position",new wn(A,v)),C.setAttribute("uv",new wn(g,m)),C.setAttribute("faceIndex",new wn(b,f)),n.push(new xn(C,null)),s>Ti&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ud(i,t,e){const n=new ts(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zx(i,t,e){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Kx(i,t,e){const n=new Float32Array(Ki),s=new I(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:aa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Nd(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Od(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function aa(){return`

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
	`}function Jx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===pc||c===mc,u=c===Os||c===Bs;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Id(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Id(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Tr("WebGLRenderer: "+n+" extension not supported."),s}}}function Qx(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,x=d.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let g=0,b=A.length;g<b;g+=3){const C=A[g+0],S=A[g+1],T=A[g+2];h.push(C,S,S,T,T,C)}}else if(x!==void 0){const A=x.array;v=x.version;for(let g=0,b=A.length/3-1;g<b;g+=3){const C=g+0,S=g+1,T=g+2;h.push(C,S,S,T,T,C)}}else return;const m=new(wu(h)?Du:Pu)(h,1);m.version=v;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function tg(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,p){i.drawElements(n,p,r,h*o),e.update(p,n,1)}function l(h,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,h*o,x),e.update(p,n,x))}function u(h,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];e.update(m,n,1)}function d(h,p,x,v){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)l(h[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,v,0,x);let f=0;for(let A=0;A<x;A++)f+=p[A]*v[A];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function eg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ce("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let b=0;x===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let C=a.attributes.position.count*b,S=1;C>t.maxTextureSize&&(S=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*S*4*d),P=new Cu(T,C,S,d);P.type=si,P.needsUpdate=!0;const _=b*4;for(let F=0;F<d;F++){const O=f[F],z=A[F],W=g[F],X=C*S*4*F;for(let $=0;$<O.count;$++){const tt=$*_;x===!0&&(s.fromBufferAttribute(O,$),T[X+tt+0]=s.x,T[X+tt+1]=s.y,T[X+tt+2]=s.z,T[X+tt+3]=0),v===!0&&(s.fromBufferAttribute(z,$),T[X+tt+4]=s.x,T[X+tt+5]=s.y,T[X+tt+6]=s.z,T[X+tt+7]=0),m===!0&&(s.fromBufferAttribute(W,$),T[X+tt+8]=s.x,T[X+tt+9]=s.y,T[X+tt+10]=s.z,T[X+tt+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new gt(C,S)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const v=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ig(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const eh=new Ze,Bd=new zu(1,1),nh=new Cu,ih=new Yf,sh=new Iu,zd=[],kd=[],Gd=new Float32Array(16),Vd=new Float32Array(9),Hd=new Float32Array(4);function Zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zd[s];if(r===void 0&&(r=new Float32Array(s),zd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ca(i,t){let e=kd[t];e===void 0&&(e=new Int32Array(t),kd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;Hd.set(n),i.uniformMatrix2fv(this.addr,!1,Hd),Ve(e,n)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;Vd.set(n),i.uniformMatrix3fv(this.addr,!1,Vd),Ve(e,n)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),Ve(e,n)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bd.compareFunction=Au,r=Bd):r=eh,e.setTexture2D(t||r,s)}function Mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ih,s)}function yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sh,s)}function bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nh,s)}function Eg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return cg;case 35675:return lg;case 35676:return dg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return xg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return bg}}function Sg(i,t){i.uniform1fv(this.addr,t)}function Tg(i,t){const e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ag(i,t){const e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function wg(i,t){const e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function Cg(i,t){const e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rg(i,t){const e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){const e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dg(i,t){i.uniform1iv(this.addr,t)}function Lg(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Ig(i,t){i.uniform4iv(this.addr,t)}function Ug(i,t){i.uniform1uiv(this.addr,t)}function Ng(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||eh,r[o])}function kg(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ih,r[o])}function Gg(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sh,r[o])}function Vg(i,t,e){const n=this.cache,s=t.length,r=ca(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nh,r[o])}function Hg(i){switch(i){case 5126:return Sg;case 35664:return Tg;case 35665:return Ag;case 35666:return wg;case 35674:return Cg;case 35675:return Rg;case 35676:return Pg;case 5124:case 35670:return Dg;case 35667:case 35671:return Lg;case 35668:case 35672:return Fg;case 35669:case 35673:return Ig;case 5125:return Ug;case 36294:return Ng;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hg(e.type)}}class Yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Wd(i,t){i.seq.push(t),i.map[t.id]=t}function qg(i,t,e){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),o=ja.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wd(e,l===void 0?new Wg(a,i,t):new Xg(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Yg(a),Wd(e,d)),e=d}}}class Po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $g=37297;let Zg=0;function Kg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Yd=new Zt;function Jg(i){ae._getMatrix(Yd,ae.workingColorSpace,i);const t=`mat3( ${Yd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Go:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Kg(i.getShaderSource(t),a)}else return r}function jg(i,t){const e=Jg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qg(i,t){let e;switch(t){case yf:e="Linear";break;case bf:e="Reinhard";break;case Ef:e="Cineon";break;case xu:e="ACESFilmic";break;case Tf:e="AgX";break;case Af:e="Neutral";break;case Sf:e="Custom";break;default:qt("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mo=new I;function t_(){ae.getLuminanceCoefficients(Mo);const i=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function n_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function dr(i){return i!==""}function $d(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(s_,o_)}const r_=new Map;function o_(i,t){let e=Kt[t];if(e===void 0){const n=r_.get(t);if(n!==void 0)e=Kt[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(i){return i.replace(a_,c_)}function c_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function l_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function d_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Bs:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Bs&&(t="ENVMAP_MODE_REFRACTION"),t}function h_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mu:t="ENVMAP_BLENDING_MULTIPLY";break;case vf:t="ENVMAP_BLENDING_MIX";break;case Mf:t="ENVMAP_BLENDING_ADD";break}return t}function f_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function p_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=l_(e),l=d_(e),u=u_(e),d=h_(e),h=f_(e),p=e_(e),x=n_(r),v=s.createProgram();let m,f,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(dr).join(`
`),f.length>0&&(f+=`
`)):(m=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),f=[Jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=Jc(o),o=$d(o,e),o=Zd(o,e),a=Jc(a),a=$d(a,e),a=Zd(a,e),o=Kd(o),a=Kd(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=A+m+o,b=A+f+a,C=Xd(s,s.VERTEX_SHADER,g),S=Xd(s,s.FRAGMENT_SHADER,b);s.attachShader(v,C),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(F){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(S)||"",X=O.trim(),$=z.trim(),tt=W.trim();let H=!0,rt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,S);else{const lt=qd(s,C,"vertex"),Ut=qd(s,S,"fragment");Ce("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+lt+`
`+Ut)}else X!==""?qt("WebGLProgram: Program Info Log:",X):($===""||tt==="")&&(rt=!1);rt&&(F.diagnostics={runnable:H,programLog:X,vertexShader:{log:$,prefix:m},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(C),s.deleteShader(S),P=new Po(s,v),_=i_(s,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,$g)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=S,this}let m_=0;class x_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g_(t),e.set(t,n)),n}}class g_{constructor(t){this.id=m_++,this.code=t,this.usedTimes=0}}function __(i,t,e,n,s,r,o){const a=new El,c=new x_,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,F,O,z){const W=O.fog,X=z.geometry,$=_.isMeshStandardMaterial?O.environment:null,tt=(_.isMeshStandardMaterial?e:t).get(_.envMap||$),H=tt&&tt.mapping===ia?tt.image.height:null,rt=x[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ut=lt!==void 0?lt.length:0;let re=0;X.morphAttributes.position!==void 0&&(re=1),X.morphAttributes.normal!==void 0&&(re=2),X.morphAttributes.color!==void 0&&(re=3);let ce,xe,ge,q;if(rt){const le=Nn[rt];ce=le.vertexShader,xe=le.fragmentShader}else ce=_.vertexShader,xe=_.fragmentShader,c.update(_),ge=c.getVertexShaderID(_),q=c.getFragmentShaderID(_);const J=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),$t=z.isInstancedMesh===!0,Ct=z.isBatchedMesh===!0,te=!!_.map,We=!!_.matcap,jt=!!tt,Ee=!!_.aoMap,D=!!_.lightMap,ee=!!_.bumpMap,ne=!!_.normalMap,_e=!!_.displacementMap,bt=!!_.emissiveMap,Te=!!_.metalnessMap,Dt=!!_.roughnessMap,Yt=_.anisotropy>0,w=_.clearcoat>0,y=_.dispersion>0,B=_.iridescence>0,Y=_.sheen>0,K=_.transmission>0,V=Yt&&!!_.anisotropyMap,Tt=w&&!!_.clearcoatMap,ht=w&&!!_.clearcoatNormalMap,Nt=w&&!!_.clearcoatRoughnessMap,St=B&&!!_.iridescenceMap,j=B&&!!_.iridescenceThicknessMap,st=Y&&!!_.sheenColorMap,kt=Y&&!!_.sheenRoughnessMap,Bt=!!_.specularMap,mt=!!_.specularColorMap,Wt=!!_.specularIntensityMap,L=K&&!!_.transmissionMap,ft=K&&!!_.thicknessMap,ot=!!_.gradientMap,at=!!_.alphaMap,et=_.alphaTest>0,Z=!!_.alphaHash,Mt=!!_.extensions;let Xt=Ci;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const ye={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:ce,fragmentShader:xe,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&z._colorsTexture!==null,instancing:$t,instancingColor:$t&&z.instanceColor!==null,instancingMorph:$t&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:zs,alphaToCoverage:!!_.alphaToCoverage,map:te,matcap:We,envMap:jt,envMapMode:jt&&tt.mapping,envMapCubeUVHeight:H,aoMap:Ee,lightMap:D,bumpMap:ee,normalMap:ne,displacementMap:h&&_e,emissiveMap:bt,normalMapObjectSpace:ne&&_.normalMapType===Pf,normalMapTangentSpace:ne&&_.normalMapType===Tu,metalnessMap:Te,roughnessMap:Dt,anisotropy:Yt,anisotropyMap:V,clearcoat:w,clearcoatMap:Tt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Nt,dispersion:y,iridescence:B,iridescenceMap:St,iridescenceThicknessMap:j,sheen:Y,sheenColorMap:st,sheenRoughnessMap:kt,specularMap:Bt,specularColorMap:mt,specularIntensityMap:Wt,transmission:K,transmissionMap:L,thicknessMap:ft,gradientMap:ot,opaque:_.transparent===!1&&_.blending===Ps&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:et,alphaHash:Z,combine:_.combine,mapUv:te&&v(_.map.channel),aoMapUv:Ee&&v(_.aoMap.channel),lightMapUv:D&&v(_.lightMap.channel),bumpMapUv:ee&&v(_.bumpMap.channel),normalMapUv:ne&&v(_.normalMap.channel),displacementMapUv:_e&&v(_.displacementMap.channel),emissiveMapUv:bt&&v(_.emissiveMap.channel),metalnessMapUv:Te&&v(_.metalnessMap.channel),roughnessMapUv:Dt&&v(_.roughnessMap.channel),anisotropyMapUv:V&&v(_.anisotropyMap.channel),clearcoatMapUv:Tt&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:st&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(_.sheenRoughnessMap.channel),specularMapUv:Bt&&v(_.specularMap.channel),specularColorMapUv:mt&&v(_.specularColorMap.channel),specularIntensityMapUv:Wt&&v(_.specularIntensityMap.channel),transmissionMapUv:L&&v(_.transmissionMap.channel),thicknessMapUv:ft&&v(_.thicknessMap.channel),alphaMapUv:at&&v(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ne||Yt),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(te||at),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:te&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===ue,decodeVideoTextureEmissive:bt&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===On,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Mt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&_.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function f(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(A(M,_),g(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function A(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),_.push(a.mask)}function b(_){const M=x[_.type];let F;if(M){const O=Nn[M];F=r0.clone(O.uniforms)}else F=_.uniforms;return F}function C(_,M){let F;for(let O=0,z=u.length;O<z;O++){const W=u[O];if(W.cacheKey===M){F=W,++F.usedTimes;break}}return F===void 0&&(F=new p_(i,M,_,r),u.push(F)),F}function S(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function T(_){c.remove(_)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:C,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:P}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function M_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,p,x,v,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:v,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function a(d,h,p,x,v,m){const f=o(d,h,p,x,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(d,h,p,x,v,m){const f=o(d,h,p,x,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(d,h){e.length>1&&e.sort(d||M_),n.length>1&&n.sort(h||jd),s.length>1&&s.sort(h||jd)}function u(){for(let d=t,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function y_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qd,i.set(n,[o])):s>=r.length?(o=new Qd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function b_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ft};break;case"SpotLight":e={position:new I,direction:new I,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function E_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let S_=0;function T_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function A_(i){const t=new b_,e=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new ve,o=new ve;function a(l){let u=0,d=0,h=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,x=0,v=0,m=0,f=0,A=0,g=0,b=0,C=0,S=0,T=0;l.sort(T_);for(let _=0,M=l.length;_<M;_++){const F=l[_],O=F.color,z=F.intensity,W=F.distance,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=O.r*z,d+=O.g*z,h+=O.b*z;else if(F.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(F.sh.coefficients[$],z);T++}else if(F.isDirectionalLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const tt=F.shadow,H=e.get(F);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=F.shadow.matrix,A++}n.directional[p]=$,p++}else if(F.isSpotLight){const $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(O).multiplyScalar(z),$.distance=W,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,n.spot[v]=$;const tt=F.shadow;if(F.map&&(n.spotLightMap[C]=F.map,C++,tt.updateMatrices(F),F.castShadow&&S++),n.spotLightMatrix[v]=tt.matrix,F.castShadow){const H=e.get(F);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=X,b++}v++}else if(F.isRectAreaLight){const $=t.get(F);$.color.copy(O).multiplyScalar(z),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=$,m++}else if(F.isPointLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){const tt=F.shadow,H=e.get(F);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=F.shadow.matrix,g++}n.point[x]=$,x++}else if(F.isHemisphereLight){const $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(z),$.groundColor.copy(F.groundColor).multiplyScalar(z),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==p||P.pointLength!==x||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==A||P.numPointShadows!==g||P.numSpotShadows!==b||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=b+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,P.directionalLength=p,P.pointLength=x,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=A,P.numPointShadows=g,P.numSpotShadows=b,P.numSpotMaps=C,P.numLightProbes=T,n.version=S_++)}function c(l,u){let d=0,h=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){const g=l[f];if(g.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(g.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(g.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(g.width*.5,0,0),b.halfHeight.set(0,g.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function tu(i){const t=new A_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function w_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new tu(i),t.set(s,[a])):r>=o.length?(a=new tu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`;function P_(i,t,e){let n=new Tl;const s=new gt,r=new gt,o=new pe,a=new K0({depthPacking:Rf}),c=new J0,l={},u=e.maxTextureSize,d={[Li]:sn,[sn]:Li,[On]:On},h=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:C_,fragmentShader:R_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ke;x.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let f=this.type;this.render=function(S,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const _=i.getRenderTarget(),M=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(oi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==ti&&this.type===ti,W=f===ti&&this.type!==ti;for(let X=0,$=S.length;X<$;X++){const tt=S[X],H=tt.shadow;if(H===void 0){qt("WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||z===!0||W===!0){const Ut=this.type!==ti?{minFilter:mn,magFilter:mn}:{};H.map!==null&&H.map.dispose(),H.map=new ts(s.x,s.y,Ut),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const lt=H.getViewportCount();for(let Ut=0;Ut<lt;Ut++){const re=H.getViewport(Ut);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),O.viewport(o),H.updateMatrices(tt,Ut),n=H.getFrustum(),b(T,P,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===ti&&A(H,P),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(_,M,F)};function A(S,T){const P=t.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ts(s.x,s.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,P,h,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,P,p,v,null)}function g(S,T,P,_){let M=null;const F=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)M=F;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=M.uuid,z=T.uuid;let W=l[O];W===void 0&&(W={},l[O]=W);let X=W[z];X===void 0&&(X=M.clone(),W[z]=X,T.addEventListener("dispose",C)),M=X}if(M.visible=T.visible,M.wireframe=T.wireframe,_===ti?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=P}return M}function b(S,T,P,_,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===ti)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const z=t.update(S),W=S.material;if(Array.isArray(W)){const X=z.groups;for(let $=0,tt=X.length;$<tt;$++){const H=X[$],rt=W[H.materialIndex];if(rt&&rt.visible){const lt=g(S,rt,_,M);S.onBeforeShadow(i,S,T,P,z,lt,H),i.renderBufferDirect(P,null,z,lt,S,H),S.onAfterShadow(i,S,T,P,z,lt,H)}}}else if(W.visible){const X=g(S,W,_,M);S.onBeforeShadow(i,S,T,P,z,X,null),i.renderBufferDirect(P,null,z,X,S,null),S.onAfterShadow(i,S,T,P,z,X,null)}}const O=S.children;for(let z=0,W=O.length;z<W;z++)b(O[z],T,P,_,M)}function C(S){S.target.removeEventListener("dispose",C);for(const P in l){const _=l[P],M=S.target.uuid;M in _&&(_[M].dispose(),delete _[M])}}}const D_={[ac]:cc,[lc]:hc,[dc]:fc,[Ns]:uc,[cc]:ac,[hc]:lc,[fc]:dc,[uc]:Ns};function L_(i,t){function e(){let L=!1;const ft=new pe;let ot=null;const at=new pe(0,0,0,0);return{setMask:function(et){ot!==et&&!L&&(i.colorMask(et,et,et,et),ot=et)},setLocked:function(et){L=et},setClear:function(et,Z,Mt,Xt,ye){ye===!0&&(et*=Xt,Z*=Xt,Mt*=Xt),ft.set(et,Z,Mt,Xt),at.equals(ft)===!1&&(i.clearColor(et,Z,Mt,Xt),at.copy(ft))},reset:function(){L=!1,ot=null,at.set(-1,0,0,0)}}}function n(){let L=!1,ft=!1,ot=null,at=null,et=null;return{setReversed:function(Z){if(ft!==Z){const Mt=t.get("EXT_clip_control");Z?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),ft=Z;const Xt=et;et=null,this.setClear(Xt)}},getReversed:function(){return ft},setTest:function(Z){Z?J(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(Z){ot!==Z&&!L&&(i.depthMask(Z),ot=Z)},setFunc:function(Z){if(ft&&(Z=D_[Z]),at!==Z){switch(Z){case ac:i.depthFunc(i.NEVER);break;case cc:i.depthFunc(i.ALWAYS);break;case lc:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case dc:i.depthFunc(i.EQUAL);break;case uc:i.depthFunc(i.GEQUAL);break;case hc:i.depthFunc(i.GREATER);break;case fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=Z}},setLocked:function(Z){L=Z},setClear:function(Z){et!==Z&&(ft&&(Z=1-Z),i.clearDepth(Z),et=Z)},reset:function(){L=!1,ot=null,at=null,et=null,ft=!1}}}function s(){let L=!1,ft=null,ot=null,at=null,et=null,Z=null,Mt=null,Xt=null,ye=null;return{setTest:function(le){L||(le?J(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(le){ft!==le&&!L&&(i.stencilMask(le),ft=le)},setFunc:function(le,Un,Rn){(ot!==le||at!==Un||et!==Rn)&&(i.stencilFunc(le,Un,Rn),ot=le,at=Un,et=Rn)},setOp:function(le,Un,Rn){(Z!==le||Mt!==Un||Xt!==Rn)&&(i.stencilOp(le,Un,Rn),Z=le,Mt=Un,Xt=Rn)},setLocked:function(le){L=le},setClear:function(le){ye!==le&&(i.clearStencil(le),ye=le)},reset:function(){L=!1,ft=null,ot=null,at=null,et=null,Z=null,Mt=null,Xt=null,ye=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],x=null,v=!1,m=null,f=null,A=null,g=null,b=null,C=null,S=null,T=new Ft(0,0,0),P=0,_=!1,M=null,F=null,O=null,z=null,W=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,tt=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=tt>=2);let rt=null,lt={};const Ut=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ce=new pe().fromArray(Ut),xe=new pe().fromArray(re);function ge(L,ft,ot,at){const et=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<ot;Mt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(ft+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Z}const q={};q[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Ns),ee(!1),ne(ql),J(i.CULL_FACE),Ee(oi);function J(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function vt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function $t(L,ft){return d[L]!==ft?(i.bindFramebuffer(L,ft),d[L]=ft,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ct(L,ft){let ot=p,at=!1;if(L){ot=h.get(ft),ot===void 0&&(ot=[],h.set(ft,ot));const et=L.textures;if(ot.length!==et.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Mt=et.length;Z<Mt;Z++)ot[Z]=i.COLOR_ATTACHMENT0+Z;ot.length=et.length,at=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,at=!0);at&&i.drawBuffers(ot)}function te(L){return x!==L?(i.useProgram(L),x=L,!0):!1}const We={[Zi]:i.FUNC_ADD,[ef]:i.FUNC_SUBTRACT,[nf]:i.FUNC_REVERSE_SUBTRACT};We[sf]=i.MIN,We[rf]=i.MAX;const jt={[of]:i.ZERO,[af]:i.ONE,[cf]:i.SRC_COLOR,[rc]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[hf]:i.DST_COLOR,[df]:i.DST_ALPHA,[lf]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[uf]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[gf]:i.CONSTANT_ALPHA,[_f]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(L,ft,ot,at,et,Z,Mt,Xt,ye,le){if(L===oi){v===!0&&(vt(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),L!==tf){if(L!==m||le!==_){if((f!==Zi||b!==Zi)&&(i.blendEquation(i.FUNC_ADD),f=Zi,b=Zi),le)switch(L){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",L);break}else switch(L){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",L);break}A=null,g=null,C=null,S=null,T.set(0,0,0),P=0,m=L,_=le}return}et=et||ft,Z=Z||ot,Mt=Mt||at,(ft!==f||et!==b)&&(i.blendEquationSeparate(We[ft],We[et]),f=ft,b=et),(ot!==A||at!==g||Z!==C||Mt!==S)&&(i.blendFuncSeparate(jt[ot],jt[at],jt[Z],jt[Mt]),A=ot,g=at,C=Z,S=Mt),(Xt.equals(T)===!1||ye!==P)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ye),T.copy(Xt),P=ye),m=L,_=!1}function D(L,ft){L.side===On?vt(i.CULL_FACE):J(i.CULL_FACE);let ot=L.side===sn;ft&&(ot=!ot),ee(ot),L.blending===Ps&&L.transparent===!1?Ee(oi):Ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const at=L.stencilWrite;a.setTest(at),at&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),bt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function ne(L){L!==jh?(J(i.CULL_FACE),L!==F&&(L===ql?i.cullFace(i.BACK):L===Qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),F=L}function _e(L){L!==O&&($&&i.lineWidth(L),O=L)}function bt(L,ft,ot){L?(J(i.POLYGON_OFFSET_FILL),(z!==ft||W!==ot)&&(i.polygonOffset(ft,ot),z=ft,W=ot)):vt(i.POLYGON_OFFSET_FILL)}function Te(L){L?J(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Dt(L){L===void 0&&(L=i.TEXTURE0+X-1),rt!==L&&(i.activeTexture(L),rt=L)}function Yt(L,ft,ot){ot===void 0&&(rt===null?ot=i.TEXTURE0+X-1:ot=rt);let at=lt[ot];at===void 0&&(at={type:void 0,texture:void 0},lt[ot]=at),(at.type!==L||at.texture!==ft)&&(rt!==ot&&(i.activeTexture(ot),rt=ot),i.bindTexture(L,ft||q[L]),at.type=L,at.texture=ft)}function w(){const L=lt[rt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ht(){try{i.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Nt(){try{i.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function St(){try{i.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function j(){try{i.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function st(L){ce.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function kt(L){xe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function Bt(L,ft){let ot=l.get(ft);ot===void 0&&(ot=new WeakMap,l.set(ft,ot));let at=ot.get(L);at===void 0&&(at=i.getUniformBlockIndex(ft,L.name),ot.set(L,at))}function mt(L,ft){const at=l.get(ft).get(L);c.get(ft)!==at&&(i.uniformBlockBinding(ft,at,L.__bindingPointIndex),c.set(ft,at))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},rt=null,lt={},d={},h=new WeakMap,p=[],x=null,v=!1,m=null,f=null,A=null,g=null,b=null,C=null,S=null,T=new Ft(0,0,0),P=0,_=!1,M=null,F=null,O=null,z=null,W=null,ce.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:vt,bindFramebuffer:$t,drawBuffers:Ct,useProgram:te,setBlending:Ee,setMaterial:D,setFlipSided:ee,setCullFace:ne,setLineWidth:_e,setPolygonOffset:bt,setScissorTest:Te,activeTexture:Dt,bindTexture:Yt,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:St,texImage3D:j,updateUBOMapping:Bt,uniformBlockBinding:mt,texStorage2D:ht,texStorage3D:Nt,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:Tt,scissor:st,viewport:kt,reset:Wt}}function F_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,y){return p?new OffscreenCanvas(w,y):Ho("canvas")}function v(w,y,B){let Y=1;const K=Yt(w);if((K.width>B||K.height>B)&&(Y=B/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(Y*K.width),Tt=Math.floor(Y*K.height);d===void 0&&(d=x(V,Tt));const ht=y?x(V,Tt):d;return ht.width=V,ht.height=Tt,ht.getContext("2d").drawImage(w,0,0,V,Tt),qt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+Tt+")."),ht}else return"data"in w&&qt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(w,y,B,Y,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=y;if(y===i.RED&&(B===i.FLOAT&&(V=i.R32F),B===i.HALF_FLOAT&&(V=i.R16F),B===i.UNSIGNED_BYTE&&(V=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(V=i.R8UI),B===i.UNSIGNED_SHORT&&(V=i.R16UI),B===i.UNSIGNED_INT&&(V=i.R32UI),B===i.BYTE&&(V=i.R8I),B===i.SHORT&&(V=i.R16I),B===i.INT&&(V=i.R32I)),y===i.RG&&(B===i.FLOAT&&(V=i.RG32F),B===i.HALF_FLOAT&&(V=i.RG16F),B===i.UNSIGNED_BYTE&&(V=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(V=i.RG8UI),B===i.UNSIGNED_SHORT&&(V=i.RG16UI),B===i.UNSIGNED_INT&&(V=i.RG32UI),B===i.BYTE&&(V=i.RG8I),B===i.SHORT&&(V=i.RG16I),B===i.INT&&(V=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(V=i.RGB8UI),B===i.UNSIGNED_SHORT&&(V=i.RGB16UI),B===i.UNSIGNED_INT&&(V=i.RGB32UI),B===i.BYTE&&(V=i.RGB8I),B===i.SHORT&&(V=i.RGB16I),B===i.INT&&(V=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),B===i.UNSIGNED_INT&&(V=i.RGBA32UI),B===i.BYTE&&(V=i.RGBA8I),B===i.SHORT&&(V=i.RGBA16I),B===i.INT&&(V=i.RGBA32I)),y===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),y===i.RGBA){const Tt=K?Go:ae.getTransfer(Y);B===i.FLOAT&&(V=i.RGBA32F),B===i.HALF_FLOAT&&(V=i.RGBA16F),B===i.UNSIGNED_BYTE&&(V=Tt===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function b(w,y){let B;return w?y===null||y===Qi||y===br?B=i.DEPTH24_STENCIL8:y===si?B=i.DEPTH32F_STENCIL8:y===yr&&(B=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Qi||y===br?B=i.DEPTH_COMPONENT24:y===si?B=i.DEPTH_COMPONENT32F:y===yr&&(B=i.DEPTH_COMPONENT16),B}function C(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==mn&&w.minFilter!==Tn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function S(w){const y=w.target;y.removeEventListener("dispose",S),P(y),y.isVideoTexture&&u.delete(y)}function T(w){const y=w.target;y.removeEventListener("dispose",T),M(y)}function P(w){const y=n.get(w);if(y.__webglInit===void 0)return;const B=w.source,Y=h.get(B);if(Y){const K=Y[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(w),Object.keys(Y).length===0&&h.delete(B)}n.remove(w)}function _(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const B=w.source,Y=h.get(B);delete Y[y.__cacheKey],o.memory.textures--}function M(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let K=0;K<y.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=w.textures;for(let Y=0,K=B.length;Y<K;Y++){const V=n.get(B[Y]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(w)}let F=0;function O(){F=0}function z(){const w=F;return w>=s.maxTextures&&qt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function W(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function X(w,y){const B=n.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const Y=w.image;if(Y===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,w,y);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function $(w,y){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){q(B,w,y);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function tt(w,y){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){q(B,w,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function H(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){J(B,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const rt={[ko]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[xc]:i.MIRRORED_REPEAT},lt={[mn]:i.NEAREST,[wf]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},Ut={[Df]:i.NEVER,[Of]:i.ALWAYS,[Lf]:i.LESS,[Au]:i.LEQUAL,[Ff]:i.EQUAL,[Nf]:i.GEQUAL,[If]:i.GREATER,[Uf]:i.NOTEQUAL};function re(w,y){if(y.type===si&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Tn||y.magFilter===ga||y.magFilter===Yr||y.magFilter===Ji||y.minFilter===Tn||y.minFilter===ga||y.minFilter===Yr||y.minFilter===Ji)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,rt[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,rt[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,rt[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,lt[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ut[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mn||y.minFilter!==Yr&&y.minFilter!==Ji||y.type===si&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ce(w,y){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",S));const Y=y.source;let K=h.get(Y);K===void 0&&(K={},h.set(Y,K));const V=W(y);if(V!==w.__cacheKey){K[V]===void 0&&(K[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[V].usedTimes++;const Tt=K[w.__cacheKey];Tt!==void 0&&(K[w.__cacheKey].usedTimes--,Tt.usedTimes===0&&_(y)),w.__cacheKey=V,w.__webglTexture=K[V].texture}return B}function xe(w,y,B){return Math.floor(Math.floor(w/B)/y)}function ge(w,y,B,Y){const V=w.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,B,Y,y.data);else{V.sort((j,st)=>j.start-st.start);let Tt=0;for(let j=1;j<V.length;j++){const st=V[Tt],kt=V[j],Bt=st.start+st.count,mt=xe(kt.start,y.width,4),Wt=xe(st.start,y.width,4);kt.start<=Bt+1&&mt===Wt&&xe(kt.start+kt.count-1,y.width,4)===mt?st.count=Math.max(st.count,kt.start+kt.count-st.start):(++Tt,V[Tt]=kt)}V.length=Tt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),Nt=i.getParameter(i.UNPACK_SKIP_PIXELS),St=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let j=0,st=V.length;j<st;j++){const kt=V[j],Bt=Math.floor(kt.start/4),mt=Math.ceil(kt.count/4),Wt=Bt%y.width,L=Math.floor(Bt/y.width),ft=mt,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Wt,L,ft,ot,B,Y,y.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function q(w,y,B){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);const K=ce(w,y),V=y.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+B);const Tt=n.get(V);if(V.version!==Tt.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const ht=ae.getPrimaries(ae.workingColorSpace),Nt=y.colorSpace===Si?null:ae.getPrimaries(y.colorSpace),St=y.colorSpace===Si||ht===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let j=v(y.image,!1,s.maxTextureSize);j=Dt(y,j);const st=r.convert(y.format,y.colorSpace),kt=r.convert(y.type);let Bt=g(y.internalFormat,st,kt,y.colorSpace,y.isVideoTexture);re(Y,y);let mt;const Wt=y.mipmaps,L=y.isVideoTexture!==!0,ft=Tt.__version===void 0||K===!0,ot=V.dataReady,at=C(y,j);if(y.isDepthTexture)Bt=b(y.format===Sr,y.type),ft&&(L?e.texStorage2D(i.TEXTURE_2D,1,Bt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Bt,j.width,j.height,0,st,kt,null));else if(y.isDataTexture)if(Wt.length>0){L&&ft&&e.texStorage2D(i.TEXTURE_2D,at,Bt,Wt[0].width,Wt[0].height);for(let et=0,Z=Wt.length;et<Z;et++)mt=Wt[et],L?ot&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,mt.width,mt.height,st,kt,mt.data):e.texImage2D(i.TEXTURE_2D,et,Bt,mt.width,mt.height,0,st,kt,mt.data);y.generateMipmaps=!1}else L?(ft&&e.texStorage2D(i.TEXTURE_2D,at,Bt,j.width,j.height),ot&&ge(y,j,st,kt)):e.texImage2D(i.TEXTURE_2D,0,Bt,j.width,j.height,0,st,kt,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Bt,Wt[0].width,Wt[0].height,j.depth);for(let et=0,Z=Wt.length;et<Z;et++)if(mt=Wt[et],y.format!==Fn)if(st!==null)if(L){if(ot)if(y.layerUpdates.size>0){const Mt=Dd(mt.width,mt.height,y.format,y.type);for(const Xt of y.layerUpdates){const ye=mt.data.subarray(Xt*Mt/mt.data.BYTES_PER_ELEMENT,(Xt+1)*Mt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Xt,mt.width,mt.height,1,st,ye)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,mt.width,mt.height,j.depth,st,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Bt,mt.width,mt.height,j.depth,0,mt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,mt.width,mt.height,j.depth,st,kt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Bt,mt.width,mt.height,j.depth,0,st,kt,mt.data)}else{L&&ft&&e.texStorage2D(i.TEXTURE_2D,at,Bt,Wt[0].width,Wt[0].height);for(let et=0,Z=Wt.length;et<Z;et++)mt=Wt[et],y.format!==Fn?st!==null?L?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,mt.width,mt.height,st,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Bt,mt.width,mt.height,0,mt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ot&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,mt.width,mt.height,st,kt,mt.data):e.texImage2D(i.TEXTURE_2D,et,Bt,mt.width,mt.height,0,st,kt,mt.data)}else if(y.isDataArrayTexture)if(L){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Bt,j.width,j.height,j.depth),ot)if(y.layerUpdates.size>0){const et=Dd(j.width,j.height,y.format,y.type);for(const Z of y.layerUpdates){const Mt=j.data.subarray(Z*et/j.data.BYTES_PER_ELEMENT,(Z+1)*et/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,st,kt,Mt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,st,kt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,j.width,j.height,j.depth,0,st,kt,j.data);else if(y.isData3DTexture)L?(ft&&e.texStorage3D(i.TEXTURE_3D,at,Bt,j.width,j.height,j.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,st,kt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,j.width,j.height,j.depth,0,st,kt,j.data);else if(y.isFramebufferTexture){if(ft)if(L)e.texStorage2D(i.TEXTURE_2D,at,Bt,j.width,j.height);else{let et=j.width,Z=j.height;for(let Mt=0;Mt<at;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Bt,et,Z,0,st,kt,null),et>>=1,Z>>=1}}else if(Wt.length>0){if(L&&ft){const et=Yt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,at,Bt,et.width,et.height)}for(let et=0,Z=Wt.length;et<Z;et++)mt=Wt[et],L?ot&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,st,kt,mt):e.texImage2D(i.TEXTURE_2D,et,Bt,st,kt,mt);y.generateMipmaps=!1}else if(L){if(ft){const et=Yt(j);e.texStorage2D(i.TEXTURE_2D,at,Bt,et.width,et.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st,kt,j)}else e.texImage2D(i.TEXTURE_2D,0,Bt,st,kt,j);m(y)&&f(Y),Tt.__version=V.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function J(w,y,B){if(y.image.length!==6)return;const Y=ce(w,y),K=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const V=n.get(K);if(K.version!==V.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);const Tt=ae.getPrimaries(ae.workingColorSpace),ht=y.colorSpace===Si?null:ae.getPrimaries(y.colorSpace),Nt=y.colorSpace===Si||Tt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const St=y.isCompressedTexture||y.image[0].isCompressedTexture,j=y.image[0]&&y.image[0].isDataTexture,st=[];for(let Z=0;Z<6;Z++)!St&&!j?st[Z]=v(y.image[Z],!0,s.maxCubemapSize):st[Z]=j?y.image[Z].image:y.image[Z],st[Z]=Dt(y,st[Z]);const kt=st[0],Bt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Wt=g(y.internalFormat,Bt,mt,y.colorSpace),L=y.isVideoTexture!==!0,ft=V.__version===void 0||Y===!0,ot=K.dataReady;let at=C(y,kt);re(i.TEXTURE_CUBE_MAP,y);let et;if(St){L&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Wt,kt.width,kt.height);for(let Z=0;Z<6;Z++){et=st[Z].mipmaps;for(let Mt=0;Mt<et.length;Mt++){const Xt=et[Mt];y.format!==Fn?Bt!==null?L?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,0,0,Xt.width,Xt.height,Bt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,Wt,Xt.width,Xt.height,0,Xt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,0,0,Xt.width,Xt.height,Bt,mt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt,Wt,Xt.width,Xt.height,0,Bt,mt,Xt.data)}}}else{if(et=y.mipmaps,L&&ft){et.length>0&&at++;const Z=Yt(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){L?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,st[Z].width,st[Z].height,Bt,mt,st[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,st[Z].width,st[Z].height,0,Bt,mt,st[Z].data);for(let Mt=0;Mt<et.length;Mt++){const ye=et[Mt].image[Z].image;L?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,0,0,ye.width,ye.height,Bt,mt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,Wt,ye.width,ye.height,0,Bt,mt,ye.data)}}else{L?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Bt,mt,st[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Bt,mt,st[Z]);for(let Mt=0;Mt<et.length;Mt++){const Xt=et[Mt];L?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,0,0,Bt,mt,Xt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Mt+1,Wt,Bt,mt,Xt.image[Z])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),V.__version=K.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function vt(w,y,B,Y,K,V){const Tt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),Nt=g(B.internalFormat,Tt,ht,B.colorSpace),St=n.get(y),j=n.get(B);if(j.__renderTarget=y,!St.__hasExternalTextures){const st=Math.max(1,y.width>>V),kt=Math.max(1,y.height>>V);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,V,Nt,st,kt,y.depth,0,Tt,ht,null):e.texImage2D(K,V,Nt,st,kt,0,Tt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,j.__webglTexture,0,_e(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,j.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(w,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const Y=y.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,V=b(y.stencilBuffer,K),Tt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_e(y);bt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,V,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,V,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,V,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,w)}else{const Y=y.textures;for(let K=0;K<Y.length;K++){const V=Y[K],Tt=r.convert(V.format,V.colorSpace),ht=r.convert(V.type),Nt=g(V.internalFormat,Tt,ht,V.colorSpace),St=_e(y);B&&bt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Nt,y.width,y.height):bt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,Nt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const K=Y.__webglTexture,V=_e(y);if(y.depthTexture.format===Er)bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(y.depthTexture.format===Sr)bt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function te(w){const y=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=Y}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?Ct(y.__webglFramebuffer[0],w):Ct(y.__webglFramebuffer,w)}else if(B){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),$t(y.__webglDepthbuffer[Y],w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),$t(y.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function We(w,y,B){const Y=n.get(w);y!==void 0&&vt(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&te(w)}function jt(w){const y=w.texture,B=n.get(w),Y=n.get(y);w.addEventListener("dispose",T);const K=w.textures,V=w.isWebGLCubeRenderTarget===!0,Tt=K.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++),V){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let Nt=0;Nt<y.mipmaps.length;Nt++)B.__webglFramebuffer[ht][Nt]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<y.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ht=0,Nt=K.length;ht<Nt;ht++){const St=n.get(K[ht]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&bt(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<K.length;ht++){const Nt=K[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const St=r.convert(Nt.format,Nt.colorSpace),j=r.convert(Nt.type),st=g(Nt.internalFormat,St,j,Nt.colorSpace,w.isXRRenderTarget===!0),kt=_e(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,st,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),re(i.TEXTURE_CUBE_MAP,y);for(let ht=0;ht<6;ht++)if(y.mipmaps&&y.mipmaps.length>0)for(let Nt=0;Nt<y.mipmaps.length;Nt++)vt(B.__webglFramebuffer[ht][Nt],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Nt);else vt(B.__webglFramebuffer[ht],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ht=0,Nt=K.length;ht<Nt;ht++){const St=K[ht],j=n.get(St);let st=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,j.__webglTexture),re(st,St),vt(B.__webglFramebuffer,w,St,i.COLOR_ATTACHMENT0+ht,st,0),m(St)&&f(st)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Y.__webglTexture),re(ht,y),y.mipmaps&&y.mipmaps.length>0)for(let Nt=0;Nt<y.mipmaps.length;Nt++)vt(B.__webglFramebuffer[Nt],w,y,i.COLOR_ATTACHMENT0,ht,Nt);else vt(B.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ht,0);m(y)&&f(ht),e.unbindTexture()}w.depthBuffer&&te(w)}function Ee(w){const y=w.textures;for(let B=0,Y=y.length;B<Y;B++){const K=y[B];if(m(K)){const V=A(w),Tt=n.get(K).__webglTexture;e.bindTexture(V,Tt),f(V),e.unbindTexture()}}}const D=[],ee=[];function ne(w){if(w.samples>0){if(bt(w)===!1){const y=w.textures,B=w.width,Y=w.height;let K=i.COLOR_BUFFER_BIT;const V=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(w),ht=y.length>1;if(ht)for(let St=0;St<y.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const Nt=w.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let St=0;St<y.length;St++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);const j=n.get(y[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,K,i.NEAREST),c===!0&&(D.length=0,ee.length=0,D.push(i.COLOR_ATTACHMENT0+St),w.depthBuffer&&w.resolveDepthBuffer===!1&&(D.push(V),ee.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let St=0;St<y.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);const j=n.get(y[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function _e(w){return Math.min(s.maxSamples,w.samples)}function bt(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Te(w){const y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Dt(w,y){const B=w.colorSpace,Y=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==zs&&B!==Si&&(ae.getTransfer(B)===ue?(Y!==Fn||K!==Vn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",B)),y}function Yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=H,this.rebindTextures=We,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=bt}function I_(i,t){function e(n,s=Si){let r;const o=ae.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_u)return i.BYTE;if(n===vu)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===Qi)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===Eu)return i.RGB;if(n===Fn)return i.RGBA;if(n===Er)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===Su)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===_l)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===Ao||n===wo||n===Co||n===Ro)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===_c||n===vc||n===Mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===bc||n===Ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===bc)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ec)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sc||n===Tc||n===Ac||n===wc||n===Cc||n===Rc||n===Pc||n===Dc||n===Lc||n===Fc||n===Ic||n===Uc||n===Nc||n===Oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bc||n===zc||n===kc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bc)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gc||n===Vc||n===Hc||n===Wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
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

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ku(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new hi({vertexShader:U_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xn(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends $s{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",m=new O_,f={},A=e.getContextAttributes();let g=null,b=null;const C=[],S=[],T=new gt;let P=null;const _=new pn;_.viewport=new pe;const M=new pn;M.viewport=new pe;const F=[_,M],O=new np;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=C[q];return J===void 0&&(J=new ka,C[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=C[q];return J===void 0&&(J=new ka,C[q]=J),J.getGripSpace()},this.getHand=function(q){let J=C[q];return J===void 0&&(J=new ka,C[q]=J),J.getHandSpace()};function X(q){const J=S.indexOf(q.inputSource);if(J===-1)return;const vt=C[J];vt!==void 0&&(vt.update(q.inputSource,q.frame,l||o),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",tt);for(let q=0;q<C.length;q++){const J=S[q];J!==null&&(S[q]=null,C[q].disconnect(J))}z=null,W=null,m.reset();for(const q in f)delete f[q];t.setRenderTarget(g),p=null,h=null,d=null,s=null,b=null,ge.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",tt),A.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,$t=null,Ct=null;A.depth&&(Ct=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=A.stencil?Sr:Er,$t=A.stencil?br:Qi);const te={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(te),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new ts(h.textureWidth,h.textureHeight,{format:Fn,type:Vn,depthTexture:new zu(h.textureWidth,h.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const vt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ts(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(q){for(let J=0;J<q.removed.length;J++){const vt=q.removed[J],$t=S.indexOf(vt);$t>=0&&(S[$t]=null,C[$t].disconnect(vt))}for(let J=0;J<q.added.length;J++){const vt=q.added[J];let $t=S.indexOf(vt);if($t===-1){for(let te=0;te<C.length;te++)if(te>=S.length){S.push(vt),$t=te;break}else if(S[te]===null){S[te]=vt,$t=te;break}if($t===-1)break}const Ct=C[$t];Ct&&Ct.connect(vt)}}const H=new I,rt=new I;function lt(q,J,vt){H.setFromMatrixPosition(J.matrixWorld),rt.setFromMatrixPosition(vt.matrixWorld);const $t=H.distanceTo(rt),Ct=J.projectionMatrix.elements,te=vt.projectionMatrix.elements,We=Ct[14]/(Ct[10]-1),jt=Ct[14]/(Ct[10]+1),Ee=(Ct[9]+1)/Ct[5],D=(Ct[9]-1)/Ct[5],ee=(Ct[8]-1)/Ct[0],ne=(te[8]+1)/te[0],_e=We*ee,bt=We*ne,Te=$t/(-ee+ne),Dt=Te*-ee;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Yt=We+Te,w=jt+Te,y=_e-Dt,B=bt+($t-Dt),Y=Ee*jt/w*Yt,K=D*jt/w*Yt;q.projectionMatrix.makePerspective(y,B,Y,K,Yt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ut(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,vt=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),O.near=M.near=_.near=J,O.far=M.far=_.far=vt,(z!==O.near||W!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,W=O.far),O.layers.mask=q.layers.mask|6,_.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const $t=q.parent,Ct=O.cameras;Ut(O,$t);for(let te=0;te<Ct.length;te++)Ut(Ct[te],$t);Ct.length===2?lt(O,_,M):O.projectionMatrix.copy(_.projectionMatrix),re(q,O,$t)};function re(q,J,vt){vt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return f[q]};let ce=null;function xe(q,J){if(u=J.getViewerPose(l||o),x=J,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let $t=!1;vt.length!==O.cameras.length&&(O.cameras.length=0,$t=!0);for(let jt=0;jt<vt.length;jt++){const Ee=vt[jt];let D=null;if(p!==null)D=p.getViewport(Ee);else{const ne=d.getViewSubImage(h,Ee);D=ne.viewport,jt===0&&(t.setRenderTargetTextures(b,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(b))}let ee=F[jt];ee===void 0&&(ee=new pn,ee.layers.enable(jt),ee.viewport=new pe,F[jt]=ee),ee.matrix.fromArray(Ee.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ee.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(D.x,D.y,D.width,D.height),jt===0&&(O.matrix.copy(ee.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),$t===!0&&O.cameras.push(ee)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const jt=d.getDepthInformation(vt[0]);jt&&jt.isValid&&jt.texture&&m.init(jt,s.renderState)}if(Ct&&Ct.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let jt=0;jt<vt.length;jt++){const Ee=vt[jt].camera;if(Ee){let D=f[Ee];D||(D=new ku,f[Ee]=D);const ee=d.getCameraImage(Ee);D.sourceTexture=ee}}}}for(let vt=0;vt<C.length;vt++){const $t=S[vt],Ct=C[vt];$t!==null&&Ct!==void 0&&Ct.update($t,J,l||o)}ce&&ce(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const ge=new th;ge.setAnimationLoop(xe),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}}const Xi=new Hn,z_=new ve;function k_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Lu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,g,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,A,g):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=t.get(f),g=A.envMap,b=A.envMapRotation;g&&(m.envMap.value=g,Xi.copy(b),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(Xi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=g*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const A=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,g){const b=g.program;n.uniformBlockBinding(A,b)}function l(A,g){let b=s[A.id];b===void 0&&(x(A),b=u(A),s[A.id]=b,A.addEventListener("dispose",m));const C=g.program;n.updateUBOMapping(A,C);const S=t.render.frame;r[A.id]!==S&&(h(A),r[A.id]=S)}function u(A){const g=d();A.__bindingPointIndex=g;const b=i.createBuffer(),C=A.__size,S=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,b),b}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const g=s[A.id],b=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let S=0,T=b.length;S<T;S++){const P=Array.isArray(b[S])?b[S]:[b[S]];for(let _=0,M=P.length;_<M;_++){const F=P[_];if(p(F,S,_,C)===!0){const O=F.__offset,z=Array.isArray(F.value)?F.value:[F.value];let W=0;for(let X=0;X<z.length;X++){const $=z[X],tt=v($);typeof $=="number"||typeof $=="boolean"?(F.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,O+W,F.__data)):$.isMatrix3?(F.__data[0]=$.elements[0],F.__data[1]=$.elements[1],F.__data[2]=$.elements[2],F.__data[3]=0,F.__data[4]=$.elements[3],F.__data[5]=$.elements[4],F.__data[6]=$.elements[5],F.__data[7]=0,F.__data[8]=$.elements[6],F.__data[9]=$.elements[7],F.__data[10]=$.elements[8],F.__data[11]=0):($.toArray(F.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,g,b,C){const S=A.value,T=g+"_"+b;if(C[T]===void 0)return typeof S=="number"||typeof S=="boolean"?C[T]=S:C[T]=S.clone(),!0;{const P=C[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[T]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function x(A){const g=A.uniforms;let b=0;const C=16;for(let T=0,P=g.length;T<P;T++){const _=Array.isArray(g[T])?g[T]:[g[T]];for(let M=0,F=_.length;M<F;M++){const O=_[M],z=Array.isArray(O.value)?O.value:[O.value];for(let W=0,X=z.length;W<X;W++){const $=z[W],tt=v($),H=b%C,rt=H%tt.boundary,lt=H+rt;b+=rt,lt!==0&&C-lt<tt.storage&&(b+=C-lt),O.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=tt.storage}}}const S=b%C;return S>0&&(b+=C-S),A.__size=b,A.__cache={},this}function v(A){const g={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(g.boundary=4,g.storage=4):A.isVector2?(g.boundary=8,g.storage=8):A.isVector3||A.isColor?(g.boundary=16,g.storage=12):A.isVector4?(g.boundary=16,g.storage=16):A.isMatrix3?(g.boundary=48,g.storage=48):A.isMatrix4?(g.boundary=64,g.storage=64):A.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qt("WebGLRenderer: Unsupported uniform value type.",A),g}function m(A){const g=A.target;g.removeEventListener("dispose",m);const b=o.indexOf(g.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function f(){for(const A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}const V_=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Qn=null;function H_(){return Qn===null&&(Qn=new f0(V_,32,32,_l,qs),Qn.minFilter=Tn,Qn.magFilter=Tn,Qn.wrapS=ii,Qn.wrapT=ii,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class W_{constructor(t={}){const{canvas:e=Bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=new Set([Ml,vl,gl]),v=new Set([Vn,Qi,yr,br,ml,xl]),m=new Uint32Array(4),f=new Int32Array(4);let A=null,g=null;const b=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=fn;let P=0,_=0,M=null,F=-1,O=null;const z=new pe,W=new pe;let X=null;const $=new Ft(0);let tt=0,H=e.width,rt=e.height,lt=1,Ut=null,re=null;const ce=new pe(0,0,H,rt),xe=new pe(0,0,H,rt);let ge=!1;const q=new Tl;let J=!1,vt=!1;const $t=new ve,Ct=new I,te=new pe,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Ee(){return M===null?lt:1}let D=n;function ee(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),D===null){const U="webgl2";if(D=ee(U,E),D===null)throw ee(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let ne,_e,bt,Te,Dt,Yt,w,y,B,Y,K,V,Tt,ht,Nt,St,j,st,kt,Bt,mt,Wt,L,ft;function ot(){ne=new jx(D),ne.init(),Wt=new I_(D,ne),_e=new Hx(D,ne,t,Wt),bt=new L_(D,ne),_e.reversedDepthBuffer&&h&&bt.buffers.depth.setReversed(!0),Te=new eg(D),Dt=new v_,Yt=new F_(D,ne,bt,Dt,_e,Wt,Te),w=new Xx(S),y=new Jx(S),B=new rp(D),L=new Gx(D,B),Y=new Qx(D,B,Te,L),K=new ig(D,Y,B,Te),kt=new ng(D,_e,Yt),St=new Wx(Dt),V=new __(S,w,y,ne,_e,L,St),Tt=new k_(S,Dt),ht=new y_,Nt=new w_(ne),st=new kx(S,w,y,bt,K,p,c),j=new P_(S,K,_e),ft=new G_(D,Te,_e,bt),Bt=new Vx(D,ne,Te),mt=new tg(D,ne,Te),Te.programs=V.programs,S.capabilities=_e,S.extensions=ne,S.properties=Dt,S.renderLists=ht,S.shadowMap=j,S.state=bt,S.info=Te}ot();const at=new B_(S,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(E){E!==void 0&&(lt=E,this.setSize(H,rt,!1))},this.getSize=function(E){return E.set(H,rt)},this.setSize=function(E,U,k=!0){if(at.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,rt=U,e.width=Math.floor(E*lt),e.height=Math.floor(U*lt),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(H*lt,rt*lt).floor()},this.setDrawingBufferSize=function(E,U,k){H=E,rt=U,lt=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(ce)},this.setViewport=function(E,U,k,G){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,U,k,G),bt.viewport(z.copy(ce).multiplyScalar(lt).round())},this.getScissor=function(E){return E.copy(xe)},this.setScissor=function(E,U,k,G){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,U,k,G),bt.scissor(W.copy(xe).multiplyScalar(lt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(E){bt.setScissorTest(ge=E)},this.setOpaqueSort=function(E){Ut=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,k=!0){let G=0;if(E){let N=!1;if(M!==null){const it=M.texture.format;N=x.has(it)}if(N){const it=M.texture.type,pt=v.has(it),yt=st.getClearColor(),_t=st.getClearAlpha(),zt=yt.r,Gt=yt.g,Rt=yt.b;pt?(m[0]=zt,m[1]=Gt,m[2]=Rt,m[3]=_t,D.clearBufferuiv(D.COLOR,0,m)):(f[0]=zt,f[1]=Gt,f[2]=Rt,f[3]=_t,D.clearBufferiv(D.COLOR,0,f))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT),k&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),st.dispose(),ht.dispose(),Nt.dispose(),Dt.dispose(),w.dispose(),y.dispose(),K.dispose(),L.dispose(),ft.dispose(),V.dispose(),at.dispose(),at.removeEventListener("sessionstart",kl),at.removeEventListener("sessionend",Gl),Bi.stop()};function et(E){E.preventDefault(),Wo("WebGLRenderer: Context Lost."),T=!0}function Z(){Wo("WebGLRenderer: Context Restored."),T=!1;const E=Te.autoReset,U=j.enabled,k=j.autoUpdate,G=j.needsUpdate,N=j.type;ot(),Te.autoReset=E,j.enabled=U,j.autoUpdate=k,j.needsUpdate=G,j.type=N}function Mt(E){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const U=E.target;U.removeEventListener("dispose",Xt),ye(U)}function ye(E){le(E),Dt.remove(E)}function le(E){const U=Dt.get(E).programs;U!==void 0&&(U.forEach(function(k){V.releaseProgram(k)}),E.isShaderMaterial&&V.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,G,N,it){U===null&&(U=We);const pt=N.isMesh&&N.matrixWorld.determinant()<0,yt=Yh(E,U,k,G,N);bt.setMaterial(G,pt);let _t=k.index,zt=1;if(G.wireframe===!0){if(_t=Y.getWireframeAttribute(k),_t===void 0)return;zt=2}const Gt=k.drawRange,Rt=k.attributes.position;let ie=Gt.start*zt,de=(Gt.start+Gt.count)*zt;it!==null&&(ie=Math.max(ie,it.start*zt),de=Math.min(de,(it.start+it.count)*zt)),_t!==null?(ie=Math.max(ie,0),de=Math.min(de,_t.count)):Rt!=null&&(ie=Math.max(ie,0),de=Math.min(de,Rt.count));const Pe=de-ie;if(Pe<0||Pe===1/0)return;L.setup(N,G,yt,k,_t);let De,me=Bt;if(_t!==null&&(De=B.get(_t),me=mt,me.setIndex(De)),N.isMesh)G.wireframe===!0?(bt.setLineWidth(G.wireframeLinewidth*Ee()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(N.isLine){let Ot=G.linewidth;Ot===void 0&&(Ot=1),bt.setLineWidth(Ot*Ee()),N.isLineSegments?me.setMode(D.LINES):N.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else N.isPoints?me.setMode(D.POINTS):N.isSprite&&me.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Tr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))me.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ot=N._multiDrawStarts,Ae=N._multiDrawCounts,oe=N._multiDrawCount,ln=_t?B.get(_t).bytesPerElement:1,rs=Dt.get(G).currentProgram.getUniforms();for(let dn=0;dn<oe;dn++)rs.setValue(D,"_gl_DrawID",dn),me.render(Ot[dn]/ln,Ae[dn])}else if(N.isInstancedMesh)me.renderInstances(ie,Pe,N.count);else if(k.isInstancedBufferGeometry){const Ot=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ae=Math.min(k.instanceCount,Ot);me.renderInstances(ie,Pe,Ae)}else me.render(ie,Pe)};function Un(E,U,k){E.transparent===!0&&E.side===On&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Xr(E,U,k),E.side=Li,E.needsUpdate=!0,Xr(E,U,k),E.side=On):Xr(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),g=Nt.get(k),g.init(U),C.push(g),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();const G=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){const yt=it[pt];Un(yt,k,N),G.add(yt)}else Un(it,k,N),G.add(it)}),g=C.pop(),G},this.compileAsync=function(E,U,k=null){const G=this.compile(E,U,k);return new Promise(N=>{function it(){if(G.forEach(function(pt){Dt.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){N(E);return}setTimeout(it,10)}ne.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Rn=null;function Xh(E){Rn&&Rn(E)}function kl(){Bi.stop()}function Gl(){Bi.start()}const Bi=new th;Bi.setAnimationLoop(Xh),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){Rn=E,at.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},at.addEventListener("sessionstart",kl),at.addEventListener("sessionend",Gl),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,U,M),g=Nt.get(E,C.length),g.init(U),C.push(g),$t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix($t,Gn,U.reversedDepth),vt=this.localClippingEnabled,J=St.init(this.clippingPlanes,vt),A=ht.get(E,b.length),A.init(),b.push(A),at.enabled===!0&&at.isPresenting===!0){const it=S.xr.getDepthSensingMesh();it!==null&&ma(it,U,-1/0,S.sortObjects)}ma(E,U,0,S.sortObjects),A.finish(),S.sortObjects===!0&&A.sort(Ut,re),jt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,jt&&st.addToRenderList(A,E),this.info.render.frame++,J===!0&&St.beginShadows();const k=g.state.shadowsArray;j.render(k,E,U),J===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=A.opaque,N=A.transmissive;if(g.setupLights(),U.isArrayCamera){const it=U.cameras;if(N.length>0)for(let pt=0,yt=it.length;pt<yt;pt++){const _t=it[pt];Hl(G,N,E,_t)}jt&&st.render(E);for(let pt=0,yt=it.length;pt<yt;pt++){const _t=it[pt];Vl(A,E,_t,_t.viewport)}}else N.length>0&&Hl(G,N,E,U),jt&&st.render(E),Vl(A,E,U);M!==null&&_===0&&(Yt.updateMultisampleRenderTarget(M),Yt.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(S,E,U),L.resetDefaultState(),F=-1,O=null,C.pop(),C.length>0?(g=C[C.length-1],J===!0&&St.setGlobalState(S.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?A=b[b.length-1]:A=null};function ma(E,U,k,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){G&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4($t);const pt=K.update(E),yt=E.material;yt.visible&&A.push(E,pt,yt,k,te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const pt=K.update(E),yt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),te.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),te.copy(pt.boundingSphere.center)),te.applyMatrix4(E.matrixWorld).applyMatrix4($t)),Array.isArray(yt)){const _t=pt.groups;for(let zt=0,Gt=_t.length;zt<Gt;zt++){const Rt=_t[zt],ie=yt[Rt.materialIndex];ie&&ie.visible&&A.push(E,pt,ie,k,te.z,Rt)}}else yt.visible&&A.push(E,pt,yt,k,te.z,null)}}const it=E.children;for(let pt=0,yt=it.length;pt<yt;pt++)ma(it[pt],U,k,G)}function Vl(E,U,k,G){const{opaque:N,transmissive:it,transparent:pt}=E;g.setupLightsView(k),J===!0&&St.setGlobalState(S.clippingPlanes,k),G&&bt.viewport(z.copy(G)),N.length>0&&Wr(N,U,k),it.length>0&&Wr(it,U,k),pt.length>0&&Wr(pt,U,k),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Hl(E,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new ts(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?qs:Vn,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const it=g.state.transmissionRenderTarget[G.id],pt=G.viewport||z;it.setSize(pt.z*S.transmissionResolutionScale,pt.w*S.transmissionResolutionScale);const yt=S.getRenderTarget(),_t=S.getActiveCubeFace(),zt=S.getActiveMipmapLevel();S.setRenderTarget(it),S.getClearColor($),tt=S.getClearAlpha(),tt<1&&S.setClearColor(16777215,.5),S.clear(),jt&&st.render(k);const Gt=S.toneMapping;S.toneMapping=Ci;const Rt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),J===!0&&St.setGlobalState(S.clippingPlanes,G),Wr(E,k,G),Yt.updateMultisampleRenderTarget(it),Yt.updateRenderTargetMipmap(it),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let de=0,Pe=U.length;de<Pe;de++){const De=U[de],{object:me,geometry:Ot,material:Ae,group:oe}=De;if(Ae.side===On&&me.layers.test(G.layers)){const ln=Ae.side;Ae.side=sn,Ae.needsUpdate=!0,Wl(me,k,G,Ot,Ae,oe),Ae.side=ln,Ae.needsUpdate=!0,ie=!0}}ie===!0&&(Yt.updateMultisampleRenderTarget(it),Yt.updateRenderTargetMipmap(it))}S.setRenderTarget(yt,_t,zt),S.setClearColor($,tt),Rt!==void 0&&(G.viewport=Rt),S.toneMapping=Gt}function Wr(E,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=E.length;N<it;N++){const pt=E[N],{object:yt,geometry:_t,group:zt}=pt;let Gt=pt.material;Gt.allowOverride===!0&&G!==null&&(Gt=G),yt.layers.test(k.layers)&&Wl(yt,U,k,_t,Gt,zt)}}function Wl(E,U,k,G,N,it){E.onBeforeRender(S,U,k,G,N,it),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(S,U,k,G,E,it),N.transparent===!0&&N.side===On&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,S.renderBufferDirect(k,U,G,N,E,it),N.side=Li,N.needsUpdate=!0,S.renderBufferDirect(k,U,G,N,E,it),N.side=On):S.renderBufferDirect(k,U,G,N,E,it),E.onAfterRender(S,U,k,G,N,it)}function Xr(E,U,k){U.isScene!==!0&&(U=We);const G=Dt.get(E),N=g.state.lights,it=g.state.shadowsArray,pt=N.state.version,yt=V.getParameters(E,N.state,it,U,k),_t=V.getProgramCacheKey(yt);let zt=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?y:w).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",Xt),zt=new Map,G.programs=zt);let Gt=zt.get(_t);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===pt)return Yl(E,yt),Gt}else yt.uniforms=V.getUniforms(E),E.onBeforeCompile(yt,S),Gt=V.acquireProgram(yt,_t),zt.set(_t,Gt),G.uniforms=yt.uniforms;const Rt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=St.uniform),Yl(E,yt),G.needsLights=$h(E),G.lightsStateVersion=pt,G.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function Xl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Po.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Yl(E,U){const k=Dt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Yh(E,U,k,G,N){U.isScene!==!0&&(U=We),Yt.resetTextureUnits();const it=U.fog,pt=G.isMeshStandardMaterial?U.environment:null,yt=M===null?S.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:zs,_t=(G.isMeshStandardMaterial?y:w).get(G.envMap||pt),zt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Gt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!k.morphAttributes.position,ie=!!k.morphAttributes.normal,de=!!k.morphAttributes.color;let Pe=Ci;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Pe=S.toneMapping);const De=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=De!==void 0?De.length:0,Ot=Dt.get(G),Ae=g.state.lights;if(J===!0&&(vt===!0||E!==O)){const Je=E===O&&G.id===F;St.setState(G,E,Je)}let oe=!1;G.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ae.state.version||Ot.outputColorSpace!==yt||N.isBatchedMesh&&Ot.batching===!1||!N.isBatchedMesh&&Ot.batching===!0||N.isBatchedMesh&&Ot.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ot.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ot.instancing===!1||!N.isInstancedMesh&&Ot.instancing===!0||N.isSkinnedMesh&&Ot.skinning===!1||!N.isSkinnedMesh&&Ot.skinning===!0||N.isInstancedMesh&&Ot.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ot.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ot.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ot.instancingMorph===!1&&N.morphTexture!==null||Ot.envMap!==_t||G.fog===!0&&Ot.fog!==it||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==St.numPlanes||Ot.numIntersection!==St.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==Gt||Ot.morphTargets!==Rt||Ot.morphNormals!==ie||Ot.morphColors!==de||Ot.toneMapping!==Pe||Ot.morphTargetsCount!==me)&&(oe=!0):(oe=!0,Ot.__version=G.version);let ln=Ot.currentProgram;oe===!0&&(ln=Xr(G,U,N));let rs=!1,dn=!1,Js=!1;const we=ln.getUniforms(),on=Ot.uniforms;if(bt.useProgram(ln.program)&&(rs=!0,dn=!0,Js=!0),G.id!==F&&(F=G.id,dn=!0),rs||O!==E){bt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),we.setValue(D,"projectionMatrix",E.projectionMatrix),we.setValue(D,"viewMatrix",E.matrixWorldInverse);const an=we.map.cameraPosition;an!==void 0&&an.setValue(D,Ct.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&we.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,dn=!0,Js=!0)}if(N.isSkinnedMesh){we.setOptional(D,N,"bindMatrix"),we.setOptional(D,N,"bindMatrixInverse");const Je=N.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),we.setValue(D,"boneTexture",Je.boneTexture,Yt))}N.isBatchedMesh&&(we.setOptional(D,N,"batchingTexture"),we.setValue(D,"batchingTexture",N._matricesTexture,Yt),we.setOptional(D,N,"batchingIdTexture"),we.setValue(D,"batchingIdTexture",N._indirectTexture,Yt),we.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&we.setValue(D,"batchingColorTexture",N._colorsTexture,Yt));const _n=k.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&kt.update(N,k,ln),(dn||Ot.receiveShadow!==N.receiveShadow)&&(Ot.receiveShadow=N.receiveShadow,we.setValue(D,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(on.envMap.value=_t,on.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(on.envMapIntensity.value=U.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=H_()),dn&&(we.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ot.needsLights&&qh(on,Js),it&&G.fog===!0&&Tt.refreshFogUniforms(on,it),Tt.refreshMaterialUniforms(on,G,lt,rt,g.state.transmissionRenderTarget[E.id]),Po.upload(D,Xl(Ot),on,Yt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Po.upload(D,Xl(Ot),on,Yt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&we.setValue(D,"center",N.center),we.setValue(D,"modelViewMatrix",N.modelViewMatrix),we.setValue(D,"normalMatrix",N.normalMatrix),we.setValue(D,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Je=G.uniformsGroups;for(let an=0,xa=Je.length;an<xa;an++){const zi=Je[an];ft.update(zi,ln),ft.bind(zi,ln)}}return ln}function qh(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function $h(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,U,k){const G=Dt.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Dt.get(E.texture).__webglTexture=U,Dt.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const k=Dt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Zh=D.createFramebuffer();this.setRenderTarget=function(E,U=0,k=0){M=E,P=U,_=k;let G=!0,N=null,it=!1,pt=!1;if(E){const _t=Dt.get(E);if(_t.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(_t.__webglFramebuffer===void 0)Yt.setupRenderTarget(E);else if(_t.__hasExternalTextures)Yt.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Rt=E.depthTexture;if(_t.__boundDepthTexture!==Rt){if(Rt!==null&&Dt.has(Rt)&&(E.width!==Rt.image.width||E.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(E)}}const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(pt=!0);const Gt=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?N=Gt[U][k]:N=Gt[U],it=!0):E.samples>0&&Yt.useMultisampledRTT(E)===!1?N=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[k]:N=Gt,z.copy(E.viewport),W.copy(E.scissor),X=E.scissorTest}else z.copy(ce).multiplyScalar(lt).floor(),W.copy(xe).multiplyScalar(lt).floor(),X=ge;if(k!==0&&(N=Zh),bt.bindFramebuffer(D.FRAMEBUFFER,N)&&G&&bt.drawBuffers(E,N),bt.viewport(z),bt.scissor(W),bt.setScissorTest(X),it){const _t=Dt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,k)}else if(pt){const _t=U;for(let zt=0;zt<E.textures.length;zt++){const Gt=Dt.get(E.textures[zt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,Gt.__webglTexture,k,_t)}}else if(E!==null&&k!==0){const _t=Dt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,k)}F=-1},this.readRenderTargetPixels=function(E,U,k,G,N,it,pt,yt=0){if(!(E&&E.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){bt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const zt=E.textures[yt],Gt=zt.format,Rt=zt.type;if(!_e.textureFormatReadable(Gt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Rt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&k>=0&&k<=E.height-N&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),D.readPixels(U,k,G,N,Wt.convert(Gt),Wt.convert(Rt),it))}finally{const zt=M!==null?Dt.get(M).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,G,N,it,pt,yt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t)if(U>=0&&U<=E.width-G&&k>=0&&k<=E.height-N){bt.bindFramebuffer(D.FRAMEBUFFER,_t);const zt=E.textures[yt],Gt=zt.format,Rt=zt.type;if(!_e.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ie),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),D.readPixels(U,k,G,N,Wt.convert(Gt),Wt.convert(Rt),0);const de=M!==null?Dt.get(M).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,de);const Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await zf(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(ie),D.deleteSync(Pe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,k=0){const G=Math.pow(2,-k),N=Math.floor(E.image.width*G),it=Math.floor(E.image.height*G),pt=U!==null?U.x:0,yt=U!==null?U.y:0;Yt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,pt,yt,N,it),bt.unbindTexture()};const Kh=D.createFramebuffer(),Jh=D.createFramebuffer();this.copyTextureToTexture=function(E,U,k=null,G=null,N=0,it=null){it===null&&(N!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=N,N=0):it=0);let pt,yt,_t,zt,Gt,Rt,ie,de,Pe;const De=E.isCompressedTexture?E.mipmaps[it]:E.image;if(k!==null)pt=k.max.x-k.min.x,yt=k.max.y-k.min.y,_t=k.isBox3?k.max.z-k.min.z:1,zt=k.min.x,Gt=k.min.y,Rt=k.isBox3?k.min.z:0;else{const _n=Math.pow(2,-N);pt=Math.floor(De.width*_n),yt=Math.floor(De.height*_n),E.isDataArrayTexture?_t=De.depth:E.isData3DTexture?_t=Math.floor(De.depth*_n):_t=1,zt=0,Gt=0,Rt=0}G!==null?(ie=G.x,de=G.y,Pe=G.z):(ie=0,de=0,Pe=0);const me=Wt.convert(U.format),Ot=Wt.convert(U.type);let Ae;U.isData3DTexture?(Yt.setTexture3D(U,0),Ae=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Yt.setTexture2DArray(U,0),Ae=D.TEXTURE_2D_ARRAY):(Yt.setTexture2D(U,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=D.getParameter(D.UNPACK_ROW_LENGTH),ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),rs=D.getParameter(D.UNPACK_SKIP_PIXELS),dn=D.getParameter(D.UNPACK_SKIP_ROWS),Js=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,De.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,De.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);const we=E.isDataArrayTexture||E.isData3DTexture,on=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const _n=Dt.get(E),Je=Dt.get(U),an=Dt.get(_n.__renderTarget),xa=Dt.get(Je.__renderTarget);bt.bindFramebuffer(D.READ_FRAMEBUFFER,an.__webglFramebuffer),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let zi=0;zi<_t;zi++)we&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.get(E).__webglTexture,N,Rt+zi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.get(U).__webglTexture,it,Pe+zi)),D.blitFramebuffer(zt,Gt,pt,yt,ie,de,pt,yt,D.DEPTH_BUFFER_BIT,D.NEAREST);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||Dt.has(E)){const _n=Dt.get(E),Je=Dt.get(U);bt.bindFramebuffer(D.READ_FRAMEBUFFER,Kh),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Jh);for(let an=0;an<_t;an++)we?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,N,Rt+an):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,N),on?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Je.__webglTexture,it,Pe+an):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Je.__webglTexture,it),N!==0?D.blitFramebuffer(zt,Gt,pt,yt,ie,de,pt,yt,D.COLOR_BUFFER_BIT,D.NEAREST):on?D.copyTexSubImage3D(Ae,it,ie,de,Pe+an,zt,Gt,pt,yt):D.copyTexSubImage2D(Ae,it,ie,de,zt,Gt,pt,yt);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else on?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ae,it,ie,de,Pe,pt,yt,_t,me,Ot,De.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,it,ie,de,Pe,pt,yt,_t,me,De.data):D.texSubImage3D(Ae,it,ie,de,Pe,pt,yt,_t,me,Ot,De):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,ie,de,pt,yt,me,Ot,De.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,ie,de,De.width,De.height,me,De.data):D.texSubImage2D(D.TEXTURE_2D,it,ie,de,pt,yt,me,Ot,De);D.pixelStorei(D.UNPACK_ROW_LENGTH,oe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,rs),D.pixelStorei(D.UNPACK_SKIP_ROWS,dn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Js),it===0&&U.generateMipmaps&&D.generateMipmap(Ae),bt.unbindTexture()},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&Yt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Yt.setTextureCube(E,0):E.isData3DTexture?Yt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Yt.setTexture2DArray(E,0):Yt.setTexture2D(E,0),bt.unbindTexture()},this.resetState=function(){P=0,_=0,M=null,bt.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const rn=(()=>{let i=window.innerWidth,t=window.innerHeight;const e=[],n=()=>{i=window.innerWidth,t=window.innerHeight,e.forEach(s=>s(i,t))};return window.addEventListener("resize",n),{get w(){return i},get h(){return t},subscribe:s=>e.push(s)}})(),Ni=document.getElementById("game-canvas"),pi=new W_({canvas:Ni,antialias:!0,alpha:!1});pi.setPixelRatio(Math.min(window.devicePixelRatio,2));pi.shadowMap.enabled=!0;pi.shadowMap.type=pu;pi.toneMapping=xu;pi.toneMappingExposure=1.12;pi.outputColorSpace=fn;rn.subscribe((i,t)=>pi.setSize(i,t,!1));pi.setSize(rn.w,rn.h,!1);const nt=new Uu;nt.fog=new Sl(14216959,.01);(function(){const t=document.createElement("canvas");t.width=2,t.height=256;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#6EC8F0"),n.addColorStop(.5,"#A0DCF8"),n.addColorStop(.82,"#CCF0FF"),n.addColorStop(1,"#FFE8CC"),e.fillStyle=n,e.fillRect(0,0,2,256);const s=new Al(t);nt.add(new xn(new se(72,20,12),new Br({map:s,side:sn,depthWrite:!1}))),nt.background=new Ft(10542328)})();const An=new pn(44,rn.w/rn.h,.1,120);rn.subscribe((i,t)=>{An.aspect=i/t,An.updateProjectionMatrix()});nt.add(new j0(16775392,12642472,.72));const Xe=new Dl(16771232,1.85);Xe.position.set(8,16,9);Xe.castShadow=!0;Xe.shadow.mapSize.set(2048,2048);Xe.shadow.camera.near=1;Xe.shadow.camera.far=65;Xe.shadow.camera.left=-44;Xe.shadow.camera.right=44;Xe.shadow.camera.top=44;Xe.shadow.camera.bottom=-44;Xe.shadow.bias=-.001;nt.add(Xe);const rh=new Dl(13162751,.42);rh.position.set(-7,9,-6);nt.add(rh);const Ll=new ju(11198719,.38,6);Ll.position.set(0,.7,0);nt.add(Ll);const R={grassEdge:5155445,grassDark:3838048,soilSide:12619872,soilTop:10514504,stoneBeige:13943968,stoneMid:13154448,stoneDark:12101752,water:7522536,woodWarm:13933146,woodDark:10512432,roofRed:15231064,roofMint:7522456,roofLavend:13142248,roofYellow:15779904,wallCream:16774368,wallPink:16768734,wallMint:14614510,treeGreen:7522424,treeMid:5417048,treeDark:3838021,treeTrunk:11565128,flowerPink:16745130,flowerYellow:16767040,flowerPurple:12611824,flowerWhite:16773375,lampPost:8947832,lampGlow:16772744,fenceWood:13937264,benchSeat:13148256,mailboxRed:15224912,signWood:13148240,mushCap:15229024,mushStem:16772812,cloudWhite:16777215,rockGray:12300448};function xt(i,t={}){return new Ku({color:i,roughness:.86,metalness:0,...t})}let Qa=null;function X_(){if(Qa)return Qa;const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");t.fillStyle="#7DCE9A",t.fillRect(0,0,256,256);for(let s=0;s<38;s++)t.fillStyle=Math.random()>.5?"rgba(80,180,80,0.1)":"rgba(130,220,110,0.1)",t.beginPath(),t.ellipse(Math.random()*256,Math.random()*256,18+Math.random()*22,10+Math.random()*15,Math.random()*Math.PI,0,Math.PI*2),t.fill();const e=["rgba(255,120,160,0.75)","rgba(255,218,50,0.75)","rgba(190,100,240,0.65)","rgba(255,140,80,0.55)"];for(let s=0;s<55;s++)t.fillStyle=e[Math.floor(Math.random()*4)],t.beginPath(),t.arc(Math.random()*256,Math.random()*256,1.2+Math.random()*1.6,0,Math.PI*2),t.fill();const n=new Al(i);return n.wrapS=n.wrapT=ko,n.repeat.set(9,9),Qa=n,n}function At(i,t){const e=new xn(i,t);return e.castShadow=!0,e.receiveShadow=!0,e}function ct(i,t,e,n,s){return At(new ui(i,t,e),xt(n,s))}function It(i,t,e,n,s,r){return At(new en(i,t,e,n),xt(s,r))}function dt(i,t,e,n){return At(new se(i,t,t),xt(e,n))}function Vs(i,t,e,n){return At(new wl(i,t,e),xt(n))}function Ht(i,t,e){return At(new Ar(i,t,6,12),xt(e))}function Y_(){const i=X_(),t=new Ku({color:8244890,map:i,roughness:.9,metalness:0}),e=xt(R.grassEdge),n=xt(R.soilTop),s=At(new en(24,25.5,.65,64),[e,t,n]);s.position.y=-.32,nt.add(s);const r=At(new Ye(24.1,.22,7,64),xt(R.grassDark));r.rotation.x=Math.PI/2,r.position.y=.02,nt.add(r);const o=At(new en(25.5,26.2,.45,56),xt(R.soilSide));o.position.y=-.87,nt.add(o)}function q_(){const i=[R.stoneBeige,R.stoneMid,R.stoneDark,13680794];function t(n,s){const r=.26+Math.random()*.16,o=At(new en(r,r*.9,.09,11),xt(i[Math.floor(Math.random()*4)]));o.position.set(n+(Math.random()-.5)*.2,.045,s+(Math.random()-.5)*.2),o.rotation.y=Math.random()*Math.PI,nt.add(o)}for(let n=0;n<22;n++){const s=n/22*Math.PI*2,r=2.62+(Math.random()-.5)*.18;t(Math.cos(s)*r,Math.sin(s)*r)}function e(n,s,r,o,a,c,l){for(let u=0;u<=l;u++){const d=u/l,h=1-d;t(h*h*n+2*h*d*r+d*d*a,h*h*s+2*h*d*o+d*d*c)}}e(0,0,-9,4,-17,3,22);for(let n=0;n<14;n++){const s=n/14*Math.PI*2;t(-17+Math.cos(s)*4.2,3+Math.sin(s)*4.2)}e(0,0,9,4,17,3,22);for(let n=0;n<14;n++){const s=n/14*Math.PI*2;t(17+Math.cos(s)*4.2,3+Math.sin(s)*4.2)}e(0,0,0,-9,0,-18,26);for(let n=0;n<14;n++){const s=n/14*Math.PI*2;t(Math.cos(s)*4.5,-18+Math.sin(s)*4.5)}}let jc=null;function $_(){const i=new wt,t=It(1.58,1.68,.2,32,R.stoneBeige);t.position.y=.1,i.add(t);const e=At(new Ye(1.58,.09,6,32),xt(R.stoneMid));e.rotation.x=Math.PI/2,e.position.y=.2,i.add(e);const n=It(1.45,.88,.4,32,R.stoneBeige);n.position.y=.5,i.add(n);const s=At(new en(1.38,1.38,.06,26),xt(R.water,{transparent:!0,opacity:.78,roughness:.08}));s.position.y=.53,s.userData.isWater=!0,jc=s,i.add(s);const r=It(.13,.17,.82,12,R.stoneMid);r.position.y=.96,i.add(r);const o=It(.88,.56,.26,24,R.stoneBeige);o.position.y=1.5,i.add(o);const a=At(new Ye(.84,.07,5,20),xt(R.stoneMid));a.rotation.x=Math.PI/2,a.position.y=1.52,i.add(a);const c=At(new en(.82,.82,.05,18),xt(R.water,{transparent:!0,opacity:.72,roughness:.08}));c.position.y=1.53,i.add(c);const l=dt(.19,12,R.water);return l.material.roughness=.14,l.position.y=1.82,i.add(l),nt.add(i),i}function Oi(i,t,e,n,s){const r=new wt,o=2.2,a=1.72,c=1.95,l=ct(o,a,c,s);l.position.y=a/2,r.add(l);const u=.12;[[-o/2+u,c/2-u],[o/2-u,c/2-u],[-o/2+u,-c/2+u],[o/2-u,-c/2+u]].forEach(([b,C])=>{const S=Ht(u,a-u*2,s);S.position.set(b,a/2,C),r.add(S)});const d=ct(o+.02,.12,c+.02,n);d.material.roughness=.72,d.position.y=a*.56,r.add(d);const h=Math.max(o,c)*.82,p=At(new se(h,22,14,0,Math.PI*2,0,Math.PI*.52),xt(n));p.position.y=a,r.add(p);const x=At(new Ye(h,.09,5,22),xt(n));x.rotation.x=Math.PI/2,x.position.y=a+.01,r.add(x);const v=ct(.55,.75,.07,R.woodWarm);v.position.set(0,.375,c/2+.01),r.add(v);const m=Ht(.24,.3,R.woodDark);m.position.set(0,.54,c/2+.04),r.add(m);const f=ct(.7,.1,.28,R.stoneBeige);f.position.set(0,.05,c/2+.18),r.add(f),[[-.68,.95],[.68,.95]].forEach(([b,C])=>{const S=ct(.46,.38,.08,s);S.position.set(b,C,c/2+.02),r.add(S);const T=ct(.34,.26,.06,R.water);T.material.transparent=!0,T.material.opacity=.72,T.material.roughness=.08,T.position.set(b,C,c/2+.05),r.add(T);const P=ct(.03,.26,.07,s);P.position.set(b,C,c/2+.06),r.add(P);const _=ct(.48,.1,.15,R.woodWarm);_.position.set(b,C-.22,c/2+.1),r.add(_),[R.flowerPink,R.flowerYellow,R.flowerPurple].forEach((M,F)=>{const O=dt(.06,5,M);O.position.set(b+(F-1)*.12,C-.1,c/2+.17),r.add(O)})});const A=It(.11,.14,.55,8,R.stoneMid);A.position.set(.7,a+.58,-.55),r.add(A);const g=dt(.13,7,R.cloudWhite);return g.material.transparent=!0,g.material.opacity=.6,g.position.set(.7,a+.95,-.55),r.add(g),r.position.set(i,0,t),r.rotation.y=e,nt.add(r),r}function Z_(i,t){const e=new wt,n=2,s=1.55,r=1.8,o=16752768,a=R.wallCream,c=ct(n,s,r,a);c.position.y=s/2,e.add(c);const l=.11;[[-n/2+l,r/2-l],[n/2-l,r/2-l],[-n/2+l,-r/2+l],[n/2-l,-r/2+l]].forEach(([S,T])=>{const P=Ht(l,s-l*2,a);P.position.set(S,s/2,T),e.add(P)});const u=ct(n+.02,.1,r+.02,o);u.position.y=s*.56,e.add(u);const d=Math.max(n,r)*.82,h=At(new se(d,22,14,0,Math.PI*2,0,Math.PI*.52),xt(o));h.position.y=s,e.add(h);const p=At(new Ye(d,.09,5,22),xt(o));p.rotation.x=Math.PI/2,p.position.y=s+.01,e.add(p);const x=It(.1,.12,.5,8,R.stoneMid);x.position.set(.6,s+.52,-.5),e.add(x);const v=dt(.12,7,R.cloudWhite);v.material.transparent=!0,v.material.opacity=.55,v.position.set(.6,s+.88,-.5),e.add(v);const m=ct(.5,.7,.07,R.woodWarm);m.position.set(0,.35,r/2+.01),e.add(m);const f=Ht(.22,.28,R.woodDark);f.position.set(0,.5,r/2+.04),e.add(f);const A=dt(.055,6,16740464);A.material.emissive=new Ft(16728128),A.material.emissiveIntensity=.5,A.position.set(-.065,.82,r/2+.06),e.add(A);const g=dt(.055,6,16740464);g.material.emissive=new Ft(16728128),g.material.emissiveIntensity=.5,g.position.set(.065,.82,r/2+.06),e.add(g);const b=dt(.052,6,16740464);b.material.emissive=new Ft(16728128),b.material.emissiveIntensity=.5,b.position.set(0,.76,r/2+.06),e.add(b);const C=ct(.65,.1,.26,R.stoneBeige);return C.position.set(0,.05,r/2+.17),e.add(C),[[-.62,.88],[.62,.88]].forEach(([S,T])=>{const P=ct(.42,.34,.08,a);P.position.set(S,T,r/2+.02),e.add(P);const _=ct(.3,.24,.06,16771232);_.material.transparent=!0,_.material.opacity=.8,_.material.roughness=.04,_.material.emissive=new Ft(16768384),_.material.emissiveIntensity=.2,_.position.set(S,T,r/2+.05),e.add(_);const M=ct(.028,.24,.07,a);M.position.set(S,T,r/2+.06),e.add(M);const F=ct(.44,.09,.14,R.woodWarm);F.position.set(S,T-.2,r/2+.09),e.add(F),[R.flowerPink,R.flowerYellow,R.flowerPurple].forEach((O,z)=>{const W=dt(.056,5,O);W.position.set(S+(z-1)*.11,T-.08,r/2+.15),e.add(W)})}),[-.52,.52].forEach((S,T)=>{const P=It(.09,.11,.16,8,13399876);P.position.set(S,.08,r/2+.12),e.add(P);const _=It(.085,.085,.04,8,8015920);_.position.set(S,.17,r/2+.12),e.add(_);const M=dt(.085,6,T===0?R.flowerPink:R.flowerYellow);M.position.set(S,.26,r/2+.12),e.add(M)}),e.position.set(i,0,t),e.rotation.y=Math.PI,nt.add(e),e}let Ue=!1,Ls=!1,yn=null,mr=null;const K_=[[-2,-1.6,.88],[2.1,-2.1,.68],[1.8,.3,.58],[-1.8,1.5,.4],[2,1.4,.55]];function J_(){if(yn)return;yn=new Uu,yn.background=new Ft(16773344),yn.add(new ep(16771280,1.35));const i=new Dl(16772812,.55);i.position.set(3,6,4),yn.add(i),mr=new ju(16768392,1,5.5),mr.position.set(-2.1,1.6,-2.1),yn.add(mr);const t=yn;function e(g){return t.add(g),g}function n(g,b){return new xn(g,b)}function s(g,b,C,S,T){return n(new ui(g,b,C),xt(S,T))}function r(g,b,C,S,T){return n(new en(g,b,C,S),xt(T))}function o(g,b,C,S){return n(new se(g,b,b),xt(C,S))}const a=13934698,c=16773336,l=16767672,u=5.4,d=2.8,h=s(u,.12,u,a);h.position.y=-.06,e(h);for(let g=-2;g<=2;g++){const b=s(u,.015,.04,12619872);b.position.set(0,.005,g*.9+.45),e(b)}const p=s(u,d,.18,c);p.position.set(0,d/2,-2.7),e(p);const x=s(.18,d,u,c);x.position.set(-2.7,d/2,0),e(x);const v=s(.18,d,u,c);v.position.set(2.7,d/2,0),e(v);const m=s(.3,d,.18,l);m.position.set(-1.35,d/2,2.7),e(m);const f=s(.3,d,.18,l);f.position.set(1.35,d/2,2.7),e(f);const A=s(u-2*.3-.5,.35,.18,l);A.position.set(0,d-.175,2.7),e(A),[[-2.61,0,0,u],[2.61,0,0,u],[0,0,-2.61,u],[0,0,2.61,u]].forEach(([g,b,C,S])=>{const T=s(g===0?S:.08,.1,C===0?.08:S,15255704);T.position.set(g,.05,C),e(T)});{const g=new wt,b=s(1.5,.32,.9,13144280);b.position.y=.16,g.add(b);const C=s(1.5,.6,.12,13144280);C.position.set(0,.46,-.39),g.add(C);const S=n(new Ar(.18,1.1,6,8),xt(14196976));S.rotation.z=Math.PI/2,S.position.set(0,.82,-.39),g.add(S);const T=s(1.3,.18,.8,16764125);T.position.set(0,.41,.02),g.add(T);const P=n(new Ar(.12,.4,4,8),xt(16773368));P.rotation.z=Math.PI/2,P.position.set(0,.56,-.22),g.add(P);const _=s(1.3,.12,.35,15248076);_.position.set(0,.56,.22),g.add(_),[[-.62,-.27],[.62,-.27],[-.62,.4],[.62,.4]].forEach(([M,F])=>{const O=r(.055,.055,.18,6,11038912);O.position.set(M,.09,F),g.add(O)}),g.position.set(-2,0,-1.6),e(g)}{const g=n(new en(1.05,1.05,.025,36),xt(15241376));g.position.set(0,.013,-.5),e(g);const b=n(new en(.65,.65,.03,36),xt(15772347));b.position.set(0,.015,-.5),e(b);const C=n(new en(.18,.18,.032,20),xt(16764125));C.position.set(0,.016,-.5),e(C)}{const g=new wt,b=s(.9,1.75,.52,12615752);b.position.y=.875,g.add(b),[-.22,.22].forEach(S=>{const T=s(.4,1.62,.04,13934688);T.position.set(S,.875,.28),g.add(T);const P=o(.038,6,16768392);P.position.set(S*.45,.875,.31),g.add(P)}),[[-.36,.16],[.36,.16],[-.36,-.16],[.36,-.16]].forEach(([S,T])=>{const P=s(.1,.1,.1,9067560);P.position.set(S,.05,T),g.add(P)});const C=s(.96,.12,.58,11034672);C.position.set(0,1.81,0),g.add(C),g.position.set(2.1,0,-2.1),e(g)}{const g=new wt,b=s(.72,.07,.54,13936752);b.position.y=.68,g.add(b),[[-.28,-.2],[.28,-.2],[-.28,.2],[.28,.2]].forEach(([P,_])=>{const M=r(.038,.038,.68,6,11829328);M.position.set(P,.34,_),g.add(M)});const C=r(.065,.055,.12,10,15229024);C.position.set(.1,.745,0),g.add(C);const S=n(new Ye(.048,.016,5,10),xt(15229024));S.rotation.y=Math.PI/2,S.position.set(.155,.745,0),g.add(S);const T=s(.44,.07,.36,8439968);T.position.set(-.62,.38,0),g.add(T),[[-.73,-.13],[-.51,-.13],[-.73,.13],[-.51,.13]].forEach(([P,_])=>{const M=r(.028,.028,.38,5,6334592);M.position.set(P,.19,_),g.add(M)}),g.position.set(1.8,0,.3),e(g)}{const g=new wt,b=r(.14,.1,.22,10,15235152);b.position.y=.11,g.add(b);const C=r(.12,.12,.04,10,8015920);C.position.y=.23,g.add(C);for(let S=0;S<5;S++){const T=S/5*Math.PI*2,P=r(.018,.018,.28+S%2*.08,5,5285952);P.position.set(Math.cos(T)*.06,.37+S%2*.04,Math.sin(T)*.06),g.add(P);const _=o(.08+S%3*.02,6,7391344);_.scale.set(1.3,.8,1),_.position.set(Math.cos(T)*.14,.56+S%2*.08,Math.sin(T)*.14),g.add(_)}g.position.set(-1.8,0,1.5),e(g)}{const g=new wt,b=s(.7,.38,.48,13144124);b.position.y=.19,g.add(b);const C=s(.72,.13,.5,13934672);C.position.set(0,.445,0),g.add(C);const S=s(.08,.1,.06,16768392);S.position.set(0,.36,.26),g.add(S),[[-.32,-.2],[.32,-.2],[-.32,.2],[.32,.2]].forEach(([T,P])=>{const _=s(.06,.06,.06,13672512);_.position.set(T,.38,P),g.add(_)}),g.position.set(2,0,1.4),e(g)}{const g=new wt,b=r(.04,.04,.8,6,9461824);b.position.y=.4,g.add(b);const C=s(.18,.06,.18,9461824);C.position.y=.03,g.add(C);const S=r(.18,.1,.24,10,16769136);S.position.y=.92,g.add(S);const T=o(.065,8,16777096,{emissive:new Ft(16772676),emissiveIntensity:1.5,transparent:!0,opacity:.9});T.position.y=.84,g.add(T),g.position.set(-2.1,0,-2.1),e(g)}{const g=new wt,b=s(.78,.64,.1,R.wallCream);b.position.set(0,1.5,-2.64),g.add(b);const C=n(new ui(.62,.5,.06),xt(11589872,{transparent:!0,opacity:.65,roughness:.04}));C.position.set(0,1.5,-2.63),g.add(C);const S=s(.62,.025,.07,R.wallCream);S.position.set(0,1.5,-2.62),g.add(S);const T=s(.025,.5,.07,R.wallCream);T.position.set(0,1.5,-2.62),g.add(T),[-.46,.46].forEach((P,_)=>{const M=s(.18,.62,.05,_===0?16755404:16764040);M.material.transparent=!0,M.material.opacity=.85,M.position.set(P,1.5,-2.59),g.add(M)}),e(g)}{const g=s(.9,1.65,.06,13936752);g.material.transparent=!0,g.material.opacity=.3,g.position.set(0,.825,2.68),yn.add(g);const b=n(new Ye(.55,.04,6,28),xt(8969727,{transparent:!0,opacity:.6}));b.rotation.x=-Math.PI/2,b.position.set(0,.01,2.2),yn.add(b)}}const oh=()=>document.getElementById("scene-fade");function ah(i){oh().classList.add("active"),setTimeout(i,360)}function ch(){const i=oh();setTimeout(()=>i.classList.remove("active"),60)}function j_(){Ls||Ue||(Ls=!0,ah(()=>{J_(),nt.remove(Et),yn.add(Et),Et.position.set(0,0,1.8),Et.rotation.y=Math.PI,bn.x=0,bn.z=1.8,Ue=!0,document.getElementById("guide-panel")?.classList.add("hidden"),document.getElementById("guide-go-here")&&(document.getElementById("guide-go-here").style.display="none"),ch(),setTimeout(()=>{Ls=!1},400),Jt("HOME SWEET HOME 🏠")}))}function Q_(){Ls||!Ue||(Ls=!0,document.getElementById("outfit-panel")?.classList.remove("open"),ah(()=>{yn.remove(Et),nt.add(Et),Et.position.set(0,0,10.8),Et.rotation.y=0,bn.x=0,bn.z=10.8,Ue=!1,is&&document.getElementById("guide-panel")?.classList.remove("hidden"),ch(),setTimeout(()=>{Ls=!1},400)}))}function tv(){const i=Et.position.x,t=Et.position.z;return Math.hypot(i,t-2.5)<1.6?"EXIT":Math.hypot(i- -2,t- -1.6)<1.3?"REST":Math.hypot(i-2.1,t- -2.1)<1.3?"OUTFIT":null}function ev(){const i=document.getElementById("outfit-panel");i&&i.classList.add("open")}(function(){const t=document.getElementById("outfit-panel"),e=document.getElementById("outfit-random-btn"),n=document.getElementById("outfit-default-btn"),s=document.getElementById("outfit-close-btn");e&&e.addEventListener("pointerup",r=>{r.stopPropagation();const o=ph(),a=document.getElementById("avatar-input");a&&(a.value=o),$o(qo(o)),t?.classList.remove("open"),Jt("NEW OUTFIT! ✨")}),n&&n.addEventListener("pointerup",r=>{r.stopPropagation();const o=document.getElementById("avatar-input");o&&(o.value=""),$o(qo("")),t?.classList.remove("open"),Jt("DEFAULT LOOK")}),s&&s.addEventListener("pointerup",r=>{r.stopPropagation(),t?.classList.remove("open")})})();function Me(i,t,e=1,n=R.treeGreen,s=R.treeMid){const r=new wt,o=e,a=Ht(.1*o,.55*o,R.treeTrunk);a.position.y=.42*o,r.add(a);const c=It(.18*o,.24*o,.16*o,8,R.treeTrunk);c.position.y=.08*o,r.add(c),[[.68*o,.98*o,n],[.55*o,1.4*o,s],[.4*o,1.74*o,n],[.26*o,2*o,s]].forEach(([l,u,d])=>{const h=At(new se(l,14,10),xt(d));h.castShadow=!0,h.position.y=u,r.add(h)});for(let l=0;l<5;l++){const u=l/5*Math.PI*2+Math.random(),d=dt(.07*o,5,Math.random()>.5?R.flowerPink:R.flowerYellow);d.position.set(Math.cos(u)*.44*o,(1.1+Math.random()*.5)*o,Math.sin(u)*.44*o),r.add(d)}return r.position.set(i,0,t),nt.add(r),r}function Fi(i,t,e=1){const n=new wt;[[0,0,.42],[.28,0,.32],[-.25,0,.3],[.1,.18,.28]].forEach(([s,r,o])=>{const a=dt(o*e,9,Math.random()>.5?R.treeGreen:R.treeMid);a.position.set(s*e,(o*.5+r)*e,0),n.add(a)}),n.position.set(i,0,t),nt.add(n)}function Qc(i,t,e){const n=new wt;for(let o=0;o<2;o++){const a=ct(1.95,.38,.88,R.woodWarm);a.position.y=o*.38+.19,n.add(a)}[-.75,.75].forEach(o=>{const a=Ht(.06,1.12,R.woodDark);a.position.set(o,1.12,-.15),n.add(a)});const s=ct(2.18,.09,1.05,R.flowerPink);s.position.set(0,1.72,-.1),n.add(s);for(let o=-3;o<=3;o++){const a=ct(.1,.1,1.05,R.cloudWhite);a.position.set(o*.3,1.73,-.1),n.add(a)}for(let o=-4;o<=4;o++){const a=dt(.09,6,R.flowerPink);a.position.set(o*.24,1.69,-.1+.52),n.add(a)}const r=[R.flowerPink,R.flowerYellow,R.flowerPurple,R.flowerWhite,R.flowerPink];for(let o=-2;o<=2;o++){const a=It(.1,.09,.18,8,R.woodWarm);a.position.set(o*.38,.88,.02),n.add(a);const c=It(.018,.018,.2,4,R.treeGreen);c.position.set(o*.38,.97,.02),n.add(c);const l=dt(.13,7,r[o+2]);l.material.roughness=.15,l.position.set(o*.38,1.14,.02),n.add(l)}n.position.set(i,0,t),n.rotation.y=e,nt.add(n)}function gn(i,t){const e=new wt,n=It(.18,.22,.22,8,R.lampPost);n.position.y=.11,e.add(n);const s=Ht(.055,1.82,R.lampPost);s.position.y=1.2,e.add(s);const r=ct(.38,.07,.07,R.lampPost);r.position.set(.2,2.2,0),e.add(r);const o=dt(.17,9,R.lampGlow);o.material.roughness=.1,o.material.emissive=new Ft(16772676),o.material.emissiveIntensity=.42,o.position.set(.37,2.24,0),e.add(o);const a=Vs(.2,.18,7,R.lampPost);a.position.set(.37,2.45,0),e.add(a),e.position.set(i,0,t),nt.add(e)}function zr(i,t,e){const n=new wt;[0,.14].forEach(s=>{const r=ct(1.08,.09,.19,R.benchSeat);r.position.set(s-.07,.48,0),n.add(r)}),[0,.1].forEach(s=>{const r=ct(1.08,.08,.14,R.benchSeat);r.position.set(s-.05,.78,-.2),r.rotation.x=-.18,n.add(r)}),[-.44,0,.44].forEach(s=>{const r=Ht(.055,.36,R.woodDark);r.position.set(s,.22,0),n.add(r);const o=ct(.1,.07,.38,R.woodDark);o.position.set(s,.07,0),n.add(o)}),n.position.set(i,0,t),n.rotation.y=e,nt.add(n)}function la(i,t){const e=new wt,n=Ht(.055,.74,R.woodDark);n.position.y=.51,e.add(n);const s=ct(.36,.28,.28,R.mailboxRed);s.position.y=.98,e.add(s);const r=At(new se(.2,10,8,0,Math.PI*2,0,Math.PI/2),xt(R.mailboxRed));r.position.y=1.12,e.add(r);const o=It(.02,.02,.3,4,R.woodDark);o.position.set(.19,1.1,.08),e.add(o);const a=ct(.15,.11,.02,R.flowerYellow);a.position.set(.28,1.22,.08),e.add(a),e.position.set(i,0,t),nt.add(e)}function Fl(i,t,e){const n=new wt;[-.28,.28].forEach(c=>{const l=Ht(.055,.78,R.woodDark);l.position.set(c,.55,0),n.add(l)});const s=ct(.84,.56,.08,R.woodDark);s.position.y=.9,n.add(s);const r=ct(.72,.44,.1,R.signWood);r.position.y=.9,n.add(r);const o=ct(.58,.32,.12,R.cloudWhite);o.position.y=.9,n.add(o);const a=ct(.88,.1,.08,R.flowerPink);a.position.y=1.2,n.add(a),n.position.set(i,0,t),n.rotation.y=e,nt.add(n)}function Hs(i,t){const e=new wt,n=It(.58,.62,.15,14,R.stoneBeige);n.position.y=.075,e.add(n);const s=It(.52,.52,.12,12,9068608);s.position.y=.135,e.add(s);const r=[R.flowerPink,R.flowerYellow,R.flowerPurple,R.flowerWhite,R.flowerPink,R.flowerYellow];for(let a=0;a<6;a++){const c=a/6*Math.PI*2+Math.random()*.4,l=a===0?0:.3+Math.random()*.12,u=.22+Math.random()*.1,d=Ht(.02,u,R.treeGreen);d.position.set(Math.cos(c)*l,.2+u/2,Math.sin(c)*l),e.add(d);const h=dt(.1+Math.random()*.03,7,r[a%6]);if(h.position.set(Math.cos(c)*l,.2+u+.08,Math.sin(c)*l),e.add(h),Math.random()>.45)for(let p=0;p<4;p++){const x=p/4*Math.PI*2,v=dt(.04,4,r[(a+1)%6]);v.position.set(Math.cos(c)*l+Math.cos(x)*.08,.2+u+.07,Math.sin(c)*l+Math.sin(x)*.08),e.add(v)}}const o=dt(.2,8,R.treeGreen);o.position.set(-.38,.28,.3),e.add(o),e.position.set(i,0,t),nt.add(e)}function fi(i,t,e=R.flowerPink){const n=new wt,s=It(.22,.26,.38,10,R.woodWarm);s.position.y=.19,n.add(s);const r=It(.21,.21,.05,10,9068608);r.position.y=.42,n.add(r);const o=Ht(.025,.36,R.treeGreen);o.position.y=.66,n.add(o);const a=dt(.18,8,e);a.material.roughness=.15,a.position.y=.9,n.add(a);for(let c=0;c<4;c++){const l=c/4*Math.PI*2,u=It(.08,.08,.04,6,e);u.rotation.x=Math.PI/2,u.position.set(Math.cos(l)*.15,.9,Math.sin(l)*.15),n.add(u)}n.position.set(i,0,t),nt.add(n)}function Ai(i,t,e,n,s,r){const o=[];for(let a=0;a<=r;a++){const c=n+a/r*(s-n);o.push([i+Math.cos(c)*e,t+Math.sin(c)*e])}o.forEach((a,c)=>{const l=Ht(.062,.44,R.fenceWood);if(l.position.set(a[0],.28,a[1]),nt.add(l),c<o.length-1){const u=o[c+1],d=(a[0]+u[0])/2,h=(a[1]+u[1])/2,p=Math.sqrt((u[0]-a[0])**2+(u[1]-a[1])**2),x=Math.atan2(u[0]-a[0],u[1]-a[1]);[.2,.44].forEach(v=>{const m=ct(.07,.07,p,R.fenceWood);m.rotation.y=x,m.position.set(d,v,h),nt.add(m)})}})}const Pr=[{step:1,label:"STEP 1/7 — FARM",ring:{x:-17,z:3,r:4.2},text:`Go to the farm and plant
your first crop.`,trigger:"plant"},{step:1,label:"STEP 1/7 — FARM",ring:{x:-17,z:3,r:4.2},text:"GOOD! Now water it.",trigger:"water"},{step:1,label:"STEP 1/7 — FARM",ring:{x:-17,z:3,r:4.2},text:`Wait for it to grow,
then harvest.`,trigger:"harvest"},{step:2,label:"STEP 2/7 — POND",ring:{x:17,z:3,r:4.2},text:`Go to the pond and
catch a fish.`,trigger:"fish"},{step:3,label:"STEP 3/7 — MARKET",ring:{x:0,z:-18,r:3.5},text:`Sell your crops or fish
for coins.`,trigger:"sell"},{step:4,label:"STEP 4/7 — MARKET",ring:{x:0,z:-18,r:3.5},text:`Buy food when your
energy is low.`,trigger:"food"},{step:5,label:"STEP 5/7 — VILLAGER",ring:{x:0,z:3,r:5.5},text:`Talk to a villager for
a small request.`,trigger:"talk"},{step:6,label:"STEP 6/7 — UPGRADE",ring:{x:-4.5,z:-5.5,r:2.2},text:`Use coins to upgrade
the town.`,trigger:"upgrade"},{step:7,label:"STEP 7/7 — GOALS",ring:{x:5,z:-4.5,r:2.2},text:`Complete daily goals
to progress to next day.`,trigger:"button"}],nv=["GOOD! Now water it.","WAIT FOR IT TO GROW.","NICE! YOU GOT YOUR FIRST CROP.","GREAT CATCH!","YOU EARNED COINS.","ENERGY RESTORED.","HELP VILLAGERS TO RAISE TOWN MOOD.","YOUR TOWN IS GROWING!","YOU ARE READY. ENJOY YOUR VILLAGE!"];let is=!1,li=0,Le=null,Ri=0;const iv=4.5,tl=7,eu=2.8,nu=1.8,sv=["TAP PLANT","TAP WATER","TAP HARVEST","TAP FISH","TAP SELL","TAP BUY FOOD","TAP TALK","TAP UPGRADE","TAP GOALS"];let Yo=[],Do=!1,Lo=!1;function rv(){const i=new Xu;i.moveTo(-.11,0),i.lineTo(-.11,.26),i.lineTo(-.26,.26),i.lineTo(0,.56),i.lineTo(.26,.26),i.lineTo(.11,.26),i.lineTo(.11,0),i.closePath();const t=new Pl(i);t.rotateX(Math.PI/2);const e=new Br({color:16771136,transparent:!0,opacity:0,depthWrite:!1,side:On}),n=new xn(t,e),s=new wt;return s.add(n),s.position.y=.12,s.visible=!1,nt.add(s),{group:s,mesh:n}}function ov(){for(;Yo.length<tl;)Yo.push(rv())}function xr(){for(const i of Yo)i.group.visible=!1}function As(i,t,e){const n=document.getElementById("guide-go-here");if(!n)return;if(!e){n.style.display="none";return}const s=new I(i,2.2,t);if(s.project(An),s.z>1){n.style.display="none";return}n.style.display="block",n.style.left=(s.x*.5+.5)*rn.w+"px",n.style.top=(-s.y*.5+.5)*rn.h+"px"}function av(i){if(!is||li>=Pr.length||Ri>0){xr(),As(0,0,!1);return}const t=Pr[li];if(!t){xr(),As(0,0,!1);return}ov();const e=Et.position.x,n=Et.position.z,s=t.ring.x,r=t.ring.z,o=s-e,a=r-n,c=Math.sqrt(o*o+a*a);Do=c<iv;const l=document.getElementById("guide-step-text");if(Do)xr(),As(s,r,!1),!Lo&&l&&(l.textContent=sv[li]||"");else{As(s,r,!0),Lo&&l&&(l.textContent=t.text);const u=o/c,d=a/c,h=Math.atan2(u,d),p=Math.min(Math.max(0,Math.floor((c-nu)/eu)+1),tl);for(let x=0;x<tl;x++){const v=Yo[x];if(x>=p){v.group.visible=!1;continue}const m=nu+x*eu;v.group.position.set(e+u*m,.08,n+d*m),v.group.rotation.y=h,v.group.visible=!0;const f=(i*.002+x*.3)%1,A=Math.abs(Math.sin(f*Math.PI));v.mesh.material.opacity=.55+.45*A;const g=.9+.18*A;v.group.scale.setScalar(g)}}Lo=Do}function lh(i,t,e){if(Le&&(nt.remove(Le),Le.geometry.dispose(),Le.material.dispose(),Le=null),!is)return;const n=new Ye(e,.2,10,52),s=new Br({color:16763972,transparent:!0,opacity:.78,depthWrite:!1});Le=new xn(n,s),Le.rotation.x=-Math.PI/2,Le.position.set(i,.04,t),nt.add(Le)}function dh(i){const t=Pr[i];if(!t)return;Do=!1,Lo=!1,document.getElementById("guide-step-label").textContent=t.label,document.getElementById("guide-step-text").textContent=t.text;const e=document.getElementById("guide-got-it-btn");e&&(e.className=t.trigger==="button"?"visible":""),lh(t.ring.x,t.ring.z,t.ring.r),document.getElementById("guide-panel").classList.remove("hidden")}function cv(i,t){document.getElementById("guide-step-text").textContent=i;const e=document.getElementById("guide-got-it-btn");e&&(e.className=""),setTimeout(t,1800)}function lv(){if(li++,li>=Pr.length){document.getElementById("guide-step-label").textContent="GUIDE COMPLETE",document.getElementById("guide-step-text").textContent=`YOU ARE READY.
ENJOY YOUR VILLAGE!`;const i=document.getElementById("guide-got-it-btn");i&&(i.className=""),lh(0,0,0),setTimeout(uv,3200);return}dh(li)}function Yn(i){if(!is||Ri>0)return;const t=Pr[li];if(!t||t.trigger!==i)return;const e=nv[li];Ri=1.8,cv(e,()=>{Ri=0,lv()})}function dv(){is=!0,li=0,Ri=0,document.getElementById("guide-welcome").classList.add("hidden"),dh(0)}function iu(){is=!1,xr(),As(0,0,!1),Le&&(nt.remove(Le),Le.geometry.dispose(),Le.material.dispose(),Le=null),document.getElementById("guide-panel").classList.add("hidden"),document.getElementById("guide-welcome").classList.add("hidden")}function uv(){is=!1,xr(),As(0,0,!1),Le&&(nt.remove(Le),Le.geometry.dispose(),Le.material.dispose(),Le=null);const i=document.getElementById("guide-panel");i&&i.classList.add("hidden")}function hv(){const i=document.getElementById("guide-welcome");i&&i.classList.remove("hidden")}(function(){const t=document.getElementById("guide-start-btn"),e=document.getElementById("guide-skip-welcome-btn"),n=document.getElementById("guide-skip-btn"),s=document.getElementById("guide-got-it-btn");t&&t.addEventListener("pointerup",r=>{r.stopPropagation(),dv()}),e&&e.addEventListener("pointerup",r=>{r.stopPropagation(),iu()}),n&&n.addEventListener("pointerup",r=>{r.stopPropagation(),iu()}),s&&s.addEventListener("pointerup",r=>{r.stopPropagation(),Yn("button")})})();function Ii(i,t){const e=new wt,n=It(.07,.09,.24,8,R.mushStem);n.position.y=.12,e.add(n);const s=At(new se(.2,10,8,0,Math.PI*2,0,Math.PI*.62),xt(R.mushCap));s.position.y=.28,e.add(s);for(let r=0;r<3;r++){const o=r/3*Math.PI*2,a=dt(.04,4,R.cloudWhite);a.position.set(Math.cos(o)*.09,.32,Math.sin(o)*.09),e.add(a)}e.position.set(i,0,t),nt.add(e)}function Ws(i,t,e=1){const n=e,s=dt(.14*n,6,R.rockGray);s.scale.set(1,.65,.9),s.position.set(i,.09*n,t),s.rotation.y=Math.random()*Math.PI,nt.add(s)}function fv(){const i=[[-7.5,2],[7.2,-1.5],[-3,-7],[5.5,-6.5],[-8,-3],[6.5,6],[-7,6.5],[3,7.5],[7.8,4],[-5,7],[1.5,-8],[-6.5,.5],[8,-5],[-4.5,6.8],[5,7.8],[-2,5],[-6,3.5],[4,6.5]],t=[R.flowerPink,R.flowerYellow,R.flowerPurple,R.flowerWhite];i.forEach(([e,n],s)=>{if(Math.sqrt(e*e+n*n)>8.5)return;const r=Ht(.018,.18,R.treeGreen);r.position.set(e,.14,n),nt.add(r);const o=dt(.09,6,t[s%4]);o.position.set(e,.32,n),nt.add(o)})}const uh=[],Fo=[];function qn(i,t,e,n){const s=new wt;return[[0,0,0,1],[.88,.14,0,.82],[-.82,.04,0,.76],[.36,.46,0,.64],[-.32,.32,0,.6],[.58,-.1,0,.58]].forEach(([r,o,a,c])=>{const l=At(new se(c*n,10,8),xt(R.cloudWhite));l.castShadow=!1,l.position.set(r*n,o*n,a*n),s.add(l),Fo.push(l)}),s.position.set(i,t,e),nt.add(s),uh.push({group:s,speed:.0022+Math.random()*.003}),s}function da(i,t,e,n){const s=document.createElement("canvas");s.width=256,s.height=72;const r=s.getContext("2d");r.fillStyle="rgba(255,248,228,0.93)",r.beginPath(),r.roundRect(6,6,244,60,14),r.fill(),r.strokeStyle="rgba(180,140,60,0.45)",r.lineWidth=2,r.beginPath(),r.roundRect(6,6,244,60,14),r.stroke(),r.fillStyle="#6A3820",r.font="bold 30px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,37);const o=new h0(new Nu({map:new Al(s),transparent:!0,depthTest:!1}));o.scale.set(3.8,1.08,1),o.position.set(t,e,n),nt.add(o)}function ws(i,t,e=0){const n=new wt,s=ct(2.9,.26,1.5,R.woodWarm);s.position.y=.13,n.add(s);const r=ct(2.5,.22,1.1,8015920);r.position.y=.24,n.add(r);const o=[6864960,8439872,5287984];for(let a=0;a<3;a++)for(let c=0;c<2;c++){const l=-.8+a*.8,u=-.22+c*.44,d=It(.02,.02,.22,4,o[a%3]);d.position.set(l,.36,u),n.add(d);const h=dt(.09,5,o[a%3]);h.scale.set(1.4,.72,1.4),h.position.set(l,.51,u),n.add(h)}n.position.set(i,0,t),n.rotation.y=e,nt.add(n)}function pv(i,t){const e=new wt,n=It(.055,.065,1.7,6,R.woodDark);n.position.y=.85,e.add(n);const s=ct(1.4,.075,.075,R.woodDark);s.position.y=1.4,e.add(s);const r=ct(.52,.5,.13,16746560);r.position.y=1.1,e.add(r);const o=ct(.3,.38,.13,5279976);o.position.y=.56,e.add(o);const a=dt(.19,8,16768392);a.position.y=1.64,e.add(a);const c=It(.26,.28,.055,8,R.woodWarm);c.position.y=1.79,e.add(c);const l=It(.15,.16,.22,8,R.woodWarm);l.position.y=1.87,e.add(l),[-.07,.07].forEach(d=>{const h=dt(.026,4,2236962);h.position.set(d,1.66,.16),e.add(h)});const u=At(new Ye(.055,.017,4,8,Math.PI),xt(13386820));u.rotation.z=Math.PI,u.position.set(0,1.57,.18),e.add(u),e.position.set(i,0,t),nt.add(e)}function mv(i,t){const e=new wt,n=It(.22,.26,.4,10,8956620);n.position.y=.2,e.add(n);const s=At(new Ye(.19,.04,5,9,Math.PI),xt(6719658));s.rotation.z=Math.PI/2,s.position.set(.22,.36,0),e.add(s);const r=It(.04,.06,.34,6,8956620);r.rotation.z=-.6,r.position.set(-.24,.33,0),e.add(r);const o=dt(.068,6,6719658);o.position.set(-.38,.19,0),e.add(o),e.position.set(i,0,t),nt.add(e)}function xv(i,t){const e=new wt,n=ct(.72,.38,.48,R.woodDark);n.position.y=.19,e.add(n);const s=ct(.74,.05,.5,R.woodWarm);s.position.y=.39,e.add(s);for(let r=0;r<3;r++){const o=dt(.055,5,[R.flowerYellow,8965184,R.flowerPink][r]);o.position.set(-.2+r*.2,.47,0),e.add(o)}e.position.set(i,0,t),nt.add(e)}function gv(i,t){ws(i-3.2,t-.8,0),ws(i-3.2,t+1.5,0),ws(i+.2,t-.8,.2),ws(i+.2,t+1.5,-.1),pv(i-1.2,t+.3),mv(i+2.2,t+.5),xv(i+2.8,t-1),Ai(i,t,5.5,.2,1.1,5),Ai(i,t,5.5,1.8,2.9,5),Ai(i,t,5.5,3.5,4.5,5),Ai(i,t,5.5,5.2,6.3,5),Hs(i+3.5,t+2.2),Hs(i-4.2,t+2.8),Ii(i+3.8,t-2),Ii(i-4.8,t-1.5),Me(i+4.8,t-3,.82,R.treeGreen,R.treeMid),Me(i-5.2,t+3.5,.78,R.treeMid,R.treeDark)}function _v(i,t){const e=new wt,n=At(new en(4.2,4.6,.22,32),xt(3707056));n.position.y=-.11,e.add(n);const s=At(new en(4,4,.07,32),xt(R.water,{transparent:!0,opacity:.82,roughness:.05}));s.position.y=.04,s.userData.isWater=!0,e.add(s);for(let r=0;r<16;r++){const o=r/16*Math.PI*2,a=dt(.2+Math.random()*.12,6,R.rockGray);a.scale.set(1,.54,.88),a.position.set(Math.cos(o)*(4.5+Math.random()*.3),.05,Math.sin(o)*(4.5+Math.random()*.3)),a.rotation.y=Math.random()*Math.PI,e.add(a)}[[1.2,.8],[-1,-1.2],[.3,-2],[-2.2,.6]].forEach(([r,o])=>{const a=It(.28,.28,.045,8,5290048);a.position.set(r,.06,o),e.add(a);const c=dt(.1,6,16772863);c.material.roughness=.15,c.position.set(r,.15,o),e.add(c)}),[[-.5,1.5],[1.5,-.8],[-1.8,-.5]].forEach(([r,o])=>{const a=It(.22,.22,.03,8,2117792);a.material.transparent=!0,a.material.opacity=.28,a.scale.set(1,1,2.2),a.position.set(r,-.02,o),e.add(a)}),e.position.set(i,0,t),nt.add(e)}function hh(i,t,e){const n=new wt;for(let a=0;a<6;a++){const c=ct(.45,.065,1.9,R.woodWarm);c.position.set(-1.2+a*.48,.04,0),n.add(c)}[-.95,.95].forEach(a=>[-.8,.8].forEach(c=>{const l=It(.065,.065,.3,6,R.woodDark);l.position.set(a,0,c),n.add(l)}));const s=Ht(.042,.65,R.woodDark);s.position.set(.9,.44,-.78),n.add(s);const r=ct(.54,.24,.065,R.signWood);r.position.set(.9,.84,-.78),n.add(r);const o=ct(.56,.076,.065,R.flowerPink);o.position.set(.9,.99,-.78),n.add(o),n.position.set(i,0,t),n.rotation.y=e,nt.add(n)}function vv(i,t){const e=new wt;for(let n=0;n<3;n++){const s=.55+Math.random()*.25,r=(Math.random()-.5)*.32,o=(Math.random()-.5)*.32,a=Ht(.026,s,6332480);a.position.set(r,s*.5,o),e.add(a);const c=At(new se(.062,5,4),xt(9068592));c.position.set(r,s+.05,o),e.add(c)}e.position.set(i,0,t),nt.add(e)}function Mv(i,t){_v(i,t),hh(i+2.5,t-1,-.4),[[i-4.2,t+1],[i+1.5,t+3.8],[i-2,t-3.8],[i+3.5,t+2.5],[i-3.8,t-2.2]].forEach(([e,n])=>vv(e,n)),Ws(i-4.8,t+2,1),Ws(i+4.2,t-2.5,.9),Fi(i+5.2,t+1.5,.8),Fi(i-5,t-1.8,.85),Me(i+5.5,t-3.5,.88,R.treeMid,R.treeGreen),Me(i-5.8,t+3.2,.8,R.treeGreen,R.treeDark),zr(i+3.2,t+3,-.5)}function yo(i,t,e){const n=new wt,s=ct(.78,.38,.58,R.woodWarm);s.position.y=.19,n.add(s),[-.2,.2].forEach(r=>{const o=ct(.04,.4,.6,R.woodDark);o.position.set(r,.2,0),n.add(o)});for(let r=0;r<5;r++){const o=dt(.1+Math.random()*.04,5,e);o.position.set((Math.random()-.5)*.4,.46+Math.random()*.08,(Math.random()-.5)*.28),n.add(o)}n.position.set(i,0,t),nt.add(n)}function yv(i,t){Qc(i,t+1,Math.PI),Qc(i+4,t+.5,Math.PI+.3),yo(i-2,t-1.5,R.flowerYellow),yo(i-3.5,t-1,R.flowerPink),yo(i-.5,t-2,15224880),yo(i+1.5,t-1.8,5279976),Fl(i+2.8,t-2.5,-.3),la(i-4.2,t+1.8),gn(i+3.5,t+2.2),Hs(i-4,t-2.8),Hs(i+3,t-2),fi(i-3,t+3,R.flowerPink),fi(i+2,t+3.5,R.flowerYellow),Me(i-6,t-1,.85,R.treeGreen,R.treeMid),Me(i+5.5,t+2.5,.8,R.treeMid,R.treeDark),zr(i-2.5,t+3.8,.2)}const Et=new wt;nt.add(Et);let Q={};const Io={skinColor:16764320,hairColor:4859904,clothesColor:16751182,pantsColor:5279976,shoeColor:2763306,hatColor:null,glassesColor:null,backpackColor:null,earType:"none",hairStyle:"short",eyeStyle:"normal",propType:"none",accessory:"none",label:"DEFAULT AVATAR"};let Uo={...Io};function fh(i){for(;Et.children.length;)Et.remove(Et.children[0]);Q={};const{skinColor:t,hairColor:e,clothesColor:n,pantsColor:s,shoeColor:r,hatColor:o,earType:a,hairStyle:c,eyeStyle:l,backpackColor:u}=i,d=T=>(T.castShadow=!0,Et.add(T),T),h=d(It(.22,.22,.012,14,0));h.material.transparent=!0,h.material.opacity=.16,h.position.y=.003,Q.shadow=h,[-.1,.1].forEach(T=>{const P=d(At(new se(.096,10,8),xt(r)));P.scale.set(1.18,.42,1.44),P.position.set(T,.042,.048)}),[-.098,.098].forEach(T=>{d(Ht(.085,.12,s)).position.set(T,.17,0)});const p=d(Ht(.25,.22,n));if(p.scale.set(1,1,.92),p.position.y=.5,Q.body=p,d(dt(.025,5,16777215)).position.set(0,.48,.24),d(dt(.025,5,16777215)).position.set(0,.6,.24),[-.315,.315].forEach((T,P)=>{const _=d(Ht(.09,.1,n));_.position.set(T,.62,0),_.rotation.z=P===0?.42:-.42,P===0?Q.armL=_:Q.armR=_}),[[-.372,.492],[.372,.492]].forEach(([T,P],_)=>{const M=d(dt(.086,8,t));M.scale.set(1,.9,.92),M.position.set(T,P,.03),M.userData.baseY=P,_===0?Q.handL=M:Q.handR=M}),u!==null){d(Ht(.14,.24,u)).position.set(0,.56,-.23);const T=d(ct(.18,.13,.06,u));T.material.color.multiplyScalar(.84),T.position.set(0,.47,-.3),[-.075,.075].forEach(P=>{const _=d(Ht(.021,.34,16777215));_.material.transparent=!0,_.material.opacity=.45,_.position.set(P,.56,-.11),_.rotation.x=.24})}const x=.98,v=d(At(new se(.38,22,16),xt(t)));v.scale.set(1,.98,.96),v.position.y=x,Q.head=v,Q.HC=x;const m=l==="surprised"?x+.07:x+.05,f=.355,A=.335;[-.172,.172].forEach(T=>{const P=d(At(new se(.068,7,6),xt(16748688)));P.material.transparent=!0,P.material.opacity=.3,P.scale.set(1.28,.68,.36),P.position.set(T,x-.04,A)}),[-.125,.125].forEach((T,P)=>{const _=d(At(new se(.048,9,8),xt(1576970)));_.scale.set(.92,1,.62),_.position.set(T,m,f),l==="surprised"&&_.scale.set(1.12,1.24,.62),_.userData.baseScaleY=l==="surprised"?1.24:1,P===0?Q.eyeL=_:Q.eyeR=_,d(dt(.016,5,16777215)).position.set(T+.018,m+.017,f+.01),l==="sleepy"&&d(ct(.108,.036,.018,t)).position.set(T,m+.01,f+.011)}),[-.125,.125].forEach((T,P)=>{const _=d(ct(.072,.016,.015,4859904));_.position.set(T,x+.16,A+.008),_.rotation.z=P===0?.13:-.13}),d(dt(.018,5,t)).position.set(0,x,A+.013);const g=d(At(new Ye(.032,.012,5,10,Math.PI),xt(13382468)));g.rotation.z=Math.PI,g.position.set(0,x-.093,A);const b=.4;if(c==="bun"){const T=d(At(new se(b,16,10),xt(e)));T.scale.set(1.05,.52,1.02),T.position.y=x+.06,d(dt(.15,9,e)).position.set(0,x+.49,-.06),d(dt(.058,5,16755370)).position.set(0,x+.41,-.07)}else if(c==="long"){const T=d(At(new se(b,16,10),xt(e)));T.scale.set(1.05,.5,1.02),T.position.y=x+.06,[-.2,.2].forEach(P=>{d(Ht(.082,.44,e)).position.set(P,x-.22,-.04)}),d(Ht(.09,.3,e)).position.set(0,x-.21,-.17)}else if(c!=="none"){const T=d(At(new se(b,16,10),xt(e)));T.scale.set(1.05,.5,.98),T.position.y=x+.06,[-.24,.24].forEach(_=>{const M=d(dt(.13,8,e));M.scale.set(.7,.58,.76),M.position.set(_,x+.06,.05)});const P=d(At(new se(.088,8,6),xt(e)));P.scale.set(.52,.46,.78),P.position.set(0,x+.28,.22)}const C=x+.3;if(a==="bunny"?[-.165,.165].forEach(T=>{d(Ht(.075,.38,16772846)).position.set(T,C,0),d(Ht(.04,.3,16758984)).position.set(T,C,.018)}):a==="cat"?[-.21,.21].forEach(T=>{d(Vs(.092,.21,4,e)).position.set(T,C-.03,0),d(Vs(.05,.13,4,16758984)).position.set(T,C-.03,.028)}):a==="bear"?[-.25,.25].forEach(T=>{d(dt(.11,8,e)).position.set(T,C-.06,-.018),d(dt(.06,6,16758944)).position.set(T,C-.06,.055)}):a==="frog"&&[-.22,.22].forEach(T=>{d(dt(.098,8,6865008)).position.set(T,C-.04,.085),d(dt(.052,6,1118481)).position.set(T,C-.04,.155)}),o!==null){d(It(.41,.44,.08,14,o)).position.y=x+.3,d(Ht(.26,.24,o)).position.y=x+.48;const T=d(It(.27,.27,.058,12,16777215));T.material.transparent=!0,T.material.opacity=.55,T.position.y=x+.38}if(i.glassesColor!==null){const T=i.glassesColor;[-.125,.125].forEach(P=>{const _=d(At(new Ye(.076,.011,5,12),xt(T)));_.rotation.x=Math.PI/2,_.position.set(P,m,f+.02)}),d(ct(.07,.01,.01,T)).position.set(0,m,f+.02),[-.215,.215].forEach(P=>{const _=d(ct(.09,.009,.009,T));_.position.set(P,m,f-.032),_.rotation.y=P>0?-.36:.36})}const S=i.propType||"none";if(S==="antenna"){const T=o||n;[-.13,.13].forEach(P=>{d(It(.018,.018,.32,5,T)).position.set(P,x+.58,0);const M=d(dt(.048,6,T));M.position.set(P,x+.78,0),M.material.emissive=new Ft(T),M.material.emissiveIntensity=.22})}if(S==="tail"){const T=d(Ht(.075,.16,e));T.position.set(0,.38,-.28),T.rotation.x=-.55,d(dt(.095,7,a==="bunny"?16777215:e)).position.set(0,.26,-.38)}if(S==="star"){const T=d(dt(.062,5,16764992));T.position.set(.32,.7,.12),T.material.emissive=new Ft(16764992),T.material.emissiveIntensity=.35;const P=d(dt(.04,5,16755370));P.position.set(.44,.84,.08),P.material.emissive=new Ft(16755370),P.material.emissiveIntensity=.25}}function su(i,t){const e=(i>>16&255)*t|0,n=(i>>8&255)*t|0,s=(i&255)*t|0;return e<<16|n<<8|s}function qo(i){const t=i.toLowerCase(),e={...Io,label:i.toUpperCase()},n={pink:16744624,red:16728128,orange:16746560,yellow:16764992,green:5294160,blue:5279976,purple:10506472,brown:9131312,white:16777215,black:2236962,cyan:4247784,teal:3186848,mint:8448192,coral:16740448,lavender:12615935,gold:16764992,silver:12632256,navy:2113696,magenta:16728256};(t.includes("bunny")||t.includes("rabbit"))&&Object.assign(e,{earType:"bunny",hairStyle:"bun",hairColor:16772846,clothesColor:16756940,pantsColor:16767208,shoeColor:15241384,propType:"tail"}),(t.includes("cat")||t.includes("kitty"))&&Object.assign(e,{earType:"cat",hairColor:15247480,clothesColor:15778024,pantsColor:13142224,shoeColor:9064552,propType:"tail"}),t.includes("bear")&&Object.assign(e,{earType:"bear",hairColor:9131312,clothesColor:13144160,pantsColor:9131312,shoeColor:5910544}),t.includes("frog")&&Object.assign(e,{earType:"frog",skinColor:9490576,hairColor:5288016,clothesColor:6336608,pantsColor:3833920,shoeColor:2777136,hatColor:6336608}),t.includes("robot")&&Object.assign(e,{skinColor:11061468,hairStyle:"none",eyeStyle:"surprised",clothesColor:5279976,pantsColor:3698888,shoeColor:2646200,hatColor:8425632,glassesColor:6328480,propType:"antenna"}),t.includes("alien")&&Object.assign(e,{skinColor:9496736,hairStyle:"none",earType:"none",clothesColor:12615935,pantsColor:9457872,shoeColor:7356608,hatColor:null,propType:"antenna",eyeStyle:"surprised",backpackColor:10510591}),t.includes("ghost")&&Object.assign(e,{skinColor:15658751,hairStyle:"none",clothesColor:14540287,pantsColor:13421823,shoeColor:12303342,eyeStyle:"sleepy"}),t.includes("witch")&&Object.assign(e,{hairStyle:"long",hairColor:1703984,clothesColor:5900928,pantsColor:3801184,shoeColor:1703984,hatColor:2755136,glassesColor:6344800}),(t.includes("knight")||t.includes("armor"))&&Object.assign(e,{hairStyle:"none",clothesColor:12634320,pantsColor:8425632,shoeColor:6320256,hatColor:10528944}),t.includes("mermaid")&&Object.assign(e,{hairStyle:"long",hairColor:4247744,skinColor:16771288,clothesColor:3190952,pantsColor:2134176,shoeColor:2128010}),t.includes("panda")&&Object.assign(e,{earType:"bear",hairColor:2236962,skinColor:16772846,clothesColor:2236962,pantsColor:4473924,shoeColor:1118481}),t.includes("pirate")&&Object.assign(e,{hairStyle:"long",hairColor:3807744,clothesColor:13377568,pantsColor:1710688,shoeColor:3811328,hatColor:2236962}),t.includes("ninja")&&Object.assign(e,{hairStyle:"none",clothesColor:1710634,pantsColor:1118498,shoeColor:657941,hatColor:1710634}),(t.includes("fairy")||t.includes("elf"))&&Object.assign(e,{earType:"cat",hairStyle:"long",hairColor:16768384,skinColor:16772812,clothesColor:8448128,pantsColor:5292112,shoeColor:3182656,hatColor:8448128}),t.includes("dragon")&&Object.assign(e,{earType:"cat",hairColor:15220800,clothesColor:14704672,pantsColor:12599312,shoeColor:10498048,hatColor:15220800}),(t.includes("princess")||t.includes("queen"))&&Object.assign(e,{hairStyle:"long",hairColor:16768384,skinColor:16771288,clothesColor:16744624,pantsColor:16732304,shoeColor:15216752,hatColor:16764992,glassesColor:null,backpackColor:null}),(t.includes("chef")||t.includes("cook")||t.includes("baker"))&&Object.assign(e,{clothesColor:16777200,pantsColor:8947848,shoeColor:2236962,hatColor:16777215,hairColor:2236962}),(t.includes("wizard")||t.includes("mage"))&&Object.assign(e,{hairStyle:"long",hairColor:8421631,clothesColor:4210880,pantsColor:2109600,shoeColor:1056896,hatColor:4210880,glassesColor:8441984,propType:"star"}),(t.includes("bird")||t.includes("feather"))&&Object.assign(e,{hairColor:6342888,clothesColor:6342888,pantsColor:4890320,shoeColor:3172504,hatColor:6342888}),(t.includes("sleepy")||t.includes("tired")||t.includes("drowsy"))&&(e.eyeStyle="sleepy",e.backpackColor===null&&(e.backpackColor=10529023),e.propType="star"),(t.includes("long hair")||t.includes("pigtail")||t.includes("twin"))&&(e.hairStyle="long"),(t.includes("bun")||t.includes("topknot")||t.includes("ponytail"))&&(e.hairStyle="bun"),t.includes("short hair")&&(e.hairStyle="short"),(t.includes("blonde")||t.includes("blond"))&&(e.hairColor=16768352),(t.includes("redhead")||t.includes("red hair")||t.includes("ginger"))&&(e.hairColor=16732208),(t.includes("white hair")||t.includes("silver hair"))&&(e.hairColor=15658751),t.includes("black hair")&&(e.hairColor=2236962),t.includes("blue hair")&&(e.hairColor=5279976),t.includes("green hair")&&(e.hairColor=5294160),t.includes("pink hair")&&(e.hairColor=16744624),(t.includes("purple hair")||t.includes("violet hair"))&&(e.hairColor=10506472);for(const[r,o]of Object.entries(n))if(t.includes(r)){e.clothesColor=o,e.pantsColor===Io.pantsColor&&(e.pantsColor=su(o,.72)),e.shoeColor===Io.shoeColor&&(e.shoeColor=su(o,.5));break}if(t.includes("hat")||t.includes("cap")||t.includes("beanie")||t.includes("helmet")){const r={pink:16744624,red:16728128,blue:5279976,green:5294160,yellow:16764992,orange:16746560,purple:10506472,teal:3186848,cyan:4247784};e.hatColor=e.clothesColor;for(const[o,a]of Object.entries(r))if(t.includes(o)){e.hatColor=a;break}}if((t.includes("glass")||t.includes("spec")||t.includes("goggle")||t.includes("nerd"))&&(e.glassesColor=3355443,t.includes("pink")&&(e.glassesColor=16744624),(t.includes("gold")||t.includes("golden"))&&(e.glassesColor=16764992),t.includes("blue")&&(e.glassesColor=5279976),t.includes("green")&&(e.glassesColor=6344800)),t.includes("backpack")||t.includes("bag")||t.includes("pack")||t.includes("satchel")){e.backpackColor=e.clothesColor;for(const[r,o]of Object.entries(n))if(t.includes(r+" bag")||t.includes(r+" back")||t.includes(r+" pack")){e.backpackColor=o;break}}if((t.includes("dark skin")||t.includes("brown skin"))&&(e.skinColor=10514512),(t.includes("light skin")||t.includes("pale"))&&(e.skinColor=16771280),["jeans","pants","short","skirt","trouser"].some(r=>t.includes(r))){for(const[r,o]of Object.entries(n))if(t.includes(r+" jean")||t.includes(r+" pant")||t.includes(r+" short")||t.includes(r+" skirt")){e.pantsColor=o;break}}return e}const ru=["pink bunny hoodie","blue robot boy","green frog hat","sleepy alien girl","orange cat sweater","yellow bear backpack","purple witch hat glasses","red panda bun hair","teal mermaid long hair","white ghost pale","gold knight helmet","cyan bird feather cap","lavender bunny bun hair","mint robot silver hair"];function ph(){return ru[Math.floor(Math.random()*ru.length)]}const No=[];function bv(){for(let t=0;t<18;t++){const e=dt(.05+Math.random()*.06,4,[16764992,16744624,10541311][t%3]),n=t/18*Math.PI*2,s=.5+Math.random()*.3;e.position.copy(Et.position),e.position.y+=1.3,No.push({mesh:e,vx:Math.cos(n)*s*.06,vy:.052+Math.random()*.03,vz:Math.sin(n)*s*.06,life:1}),nt.add(e)}}function Ev(i){for(let t=No.length-1;t>=0;t--){const e=No[t];e.life-=i*1.2,e.mesh.position.x+=e.vx,e.mesh.position.y+=e.vy,e.mesh.position.z+=e.vz,e.vy-=i*.05,e.mesh.material.opacity=Math.max(0,e.life),e.mesh.material.transparent=!0,e.life<=0&&(nt.remove(e.mesh),No.splice(t,1))}}let Fs=null;function $o(i){Fs={phase:"glow",timer:0,newAppearance:i}}function Sv(i){if(!Fs)return;const t=Fs;if(t.timer+=i,t.phase==="glow"){const e=Math.min(t.timer/.3,1),n=1+Math.sin(e*Math.PI)*.15;Et.scale.setScalar(n);const s=1+Math.sin(e*Math.PI)*.5;Et.children.forEach(r=>{r.material&&r.material.emissive&&r.material.emissive.setRGB(s*.3,s*.3,0)}),t.timer>=.3&&(bv(),Uo=t.newAppearance,fh(Uo),document.getElementById("avatar-name-badge").textContent=Uo.label||"CUSTOM AVATAR",t.phase="spin",t.timer=0)}else if(t.phase==="spin"){const e=Math.min(t.timer/1,1);Et.rotation.y=e*Math.PI*2,Et.scale.setScalar(1+Math.sin(e*Math.PI)*.08),t.timer>=1&&(Et.rotation.y=0,Et.scale.setScalar(1),Fs=null)}}let Mn=0,yi=!1,ou=!1,Ss=0,tc=2+Math.random()*2,Yi=0,Zo=0;const Tv=9,Av=7.2,bn=new I(0,0,3);function Il(i=0){if(i>0){const n=Math.min(1,i*7);bn.x+=(Et.position.x-bn.x)*n,bn.z+=(Et.position.z-bn.z)*n}const t=Ue?4:Tv,e=Ue?3.4:Av;An.position.x=bn.x+Math.sin(Zo)*t,An.position.z=bn.z+Math.cos(Zo)*t,An.position.y=e,An.lookAt(bn.x,.85,bn.z)}const ec=28,fe={active:!1,dx:0,dy:0,pid:-1,cx:0,cy:0},Is=document.getElementById("joy-wrap"),mh=document.getElementById("joy-knob"),zn=document.getElementById("action-btn");let el=0,bo=null;Is.addEventListener("pointerdown",i=>{if(i.preventDefault(),i.stopPropagation(),fe.active)return;const t=Is.getBoundingClientRect();fe.pid=i.pointerId,fe.active=!0,fe.cx=t.left+t.width/2,fe.cy=t.top+t.height/2,Is.setPointerCapture(i.pointerId)});Is.addEventListener("pointermove",i=>{if(i.pointerId!==fe.pid)return;i.preventDefault();const t=i.clientX-fe.cx,e=i.clientY-fe.cy,n=Math.sqrt(t*t+e*e),s=Math.min(n,ec),r=Math.atan2(e,t),o=Math.cos(r)*s,a=Math.sin(r)*s;mh.style.transform=`translate(${o}px,${a}px)`,fe.dx=o/ec,fe.dy=a/ec});function xh(i){i.pointerId===fe.pid&&(fe.active=!1,fe.dx=0,fe.dy=0,fe.pid=-1,mh.style.transform="translate(0,0)")}Is.addEventListener("pointerup",xh);Is.addEventListener("pointercancel",xh);zn.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation()});zn.addEventListener("pointerup",i=>{if(i.preventDefault(),i.stopPropagation(),!Vt)return;MM(),el=performance.now()+700,zn.textContent="ACTION!",bo&&clearTimeout(bo);const t=Vt;bo=setTimeout(()=>{bo=null,(Vt===t||!Vt)&&(zn.textContent=t||"")},700)});zn.addEventListener("pointercancel",i=>i.stopPropagation());let ua=!1,nl=0;Ni.addEventListener("pointerdown",i=>{i.preventDefault(),i.clientX>rn.w*.5&&(ua=!0,nl=i.clientX)});Ni.addEventListener("pointermove",i=>{ua&&(Zo-=(i.clientX-nl)*.007,nl=i.clientX,Il())});Ni.addEventListener("pointerup",()=>{ua=!1});Ni.addEventListener("pointercancel",()=>{ua=!1});Y_();q_();$_().scale.setScalar(.4);Oi(-7,8.5,.4,R.roofRed,R.wallCream);Oi(7,8,-.5,R.roofLavend,R.wallPink);Oi(-8,-6,2.9,R.roofMint,R.wallMint);Oi(8,-5.5,-2,R.roofYellow,R.wallCream);Z_(0,12);la(-.7,13.3);fi(.85,10.8,R.flowerPink);fi(-.85,10.8,R.flowerYellow);da("YOUR HOME",0,3.5,12);Fl(-4.5,4,.6);Fl(4.5,-4,-.8);la(-3.6,-3.6);la(4,3.4);zr(-5.2,.5,.4);zr(5.2,-.5,-.4);zr(.5,-5.2,Math.PI/2);gn(5.2,0);gn(-5.2,0);gn(0,5.2);gn(0,-5.2);for(let i=0;i<6;i++){const t=i/6*Math.PI*2+Math.PI/6;Hs(Math.cos(t)*5.5,Math.sin(t)*5.5)}Qc(6.5,6.2,-Math.PI/4);Me(-6.2,1.2,1.05,R.treeGreen,R.treeMid);Me(5.8,.8,1,R.treeMid,R.treeDark);Me(-1.2,7.2,1.12,R.treeGreen,R.treeMid);Me(2.8,-6.5,.92,R.treeDark,R.treeGreen);gv(-17,3);Oi(-14,10,1.5,R.roofRed,R.wallCream);gn(-11.5,.5);gn(-11.5,5.8);Mv(17,3);Oi(14,10.5,-1.5,R.roofMint,R.wallMint);gn(11.5,.5);gn(11.5,5.8);yv(0,-18);Oi(-7,-13,.3,R.roofLavend,R.wallPink);Oi(7.5,-13.5,-.4,R.roofYellow,R.wallCream);gn(0,-11.5);gn(4.5,-11.5);gn(-4.5,-11.5);da("FARM",-17,4.2,3);da("FISH",17,4.2,3);da("MARKET",0,4.2,-18);Me(-5.5,4,.9,R.treeGreen,R.treeMid);Me(-9.5,3.5,.85,R.treeMid,R.treeDark);Me(-13.5,3.2,.82,R.treeGreen,R.treeMid);Fi(-7,5.5,.9);Fi(-11,1.5,.85);Me(5.5,4,.9,R.treeMid,R.treeGreen);Me(9.5,3.5,.85,R.treeGreen,R.treeDark);Me(13.5,3.2,.82,R.treeMid,R.treeGreen);Fi(7,5.5,.9);Fi(11,1.5,.85);Me(-2.5,-7.5,.88,R.treeGreen,R.treeMid);Me(2.5,-7.5,.84,R.treeDark,R.treeGreen);Me(-2.5,-12.5,.8,R.treeGreen,R.treeMid);Me(2.5,-12.5,.78,R.treeMid,R.treeDark);Fi(-3.8,-9.5,.85);Fi(3.8,-9.5,.82);Ii(-2.8,-6.5);Ii(6.5,2.5);Ii(-7,3.5);Ii(12,8);Ii(-12.5,7.5);Ii(.5,-14);Ws(-7.2,1,1.1);Ws(7.5,-2,.95);Ws(10,10,1);Ws(-10.5,9.5,.9);fi(-7.5,7.8,R.flowerPink);fi(7.5,7.3,R.flowerYellow);fi(-8.5,-5.3,R.flowerPurple);fi(8.5,-4.8,R.flowerPink);Me(-20,12,.92,R.treeGreen,R.treeMid);Me(21,10,.88,R.treeMid,R.treeDark);Me(8,20,.85,R.treeGreen,R.treeMid);Me(-10,19,.8,R.treeDark,R.treeGreen);Me(18,-14,.78,R.treeGreen,R.treeMid);Me(-18,-13,.76,R.treeMid,R.treeGreen);Ai(0,0,22.5,.6,1.2,4);Ai(0,0,22.5,2,2.6,4);Ai(0,0,22.5,3.8,4.4,4);Ai(0,0,22.5,5.4,6,4);fv();const wv=[[-15,5],[-18,1],[-14,-1],[-19,6],[15,5],[18,1],[14,-1],[19,6],[2,-16],[-2,-15],[3,-20],[-3,-20],[0,-15]],Cv=[R.flowerPink,R.flowerYellow,R.flowerPurple,R.flowerWhite];wv.forEach(([i,t],e)=>{const n=Ht(.018,.18,R.treeGreen);n.position.set(i,.14,t),nt.add(n);const s=dt(.09,6,Cv[e%4]);s.position.set(i,.32,t),nt.add(s)});qn(-9,11,-5,1.1);qn(7,12,5,.88);qn(-4,13,9,1.3);qn(11,10,-9,.72);qn(-13,12,2,.95);qn(5,14,-13,.65);qn(-20,13,8,1);qn(20,12,-6,.85);qn(0,14,-20,.92);qn(-15,11,-15,.78);const Wn={carrot:{name:"CARROT",icon:"🥕",color:16738336,sproutColor:16746560,value:2,growTime:8},tomato:{name:"TOMATO",icon:"🍅",color:16719904,sproutColor:16736352,value:3,growTime:10},cabbage:{name:"CABBAGE",icon:"🥬",color:4243504,sproutColor:8441952,value:4,growTime:12},strawberry:{name:"STRAWBERRY",icon:"🍓",color:16715872,sproutColor:16736416,value:5,growTime:15},pumpkin:{name:"CORN",icon:"🌽",color:16763936,sproutColor:16769120,value:8,growTime:20}},Xs=[{key:"smallFish",name:"SMALL FISH",icon:"🐟",value:3,weight:45},{key:"roundFish",name:"ROUND FISH",icon:"🐡",value:4,weight:30},{key:"blueFish",name:"BLUE FISH",icon:"🐠",value:5,weight:15},{key:"goldFish",name:"GOLD FISH",icon:"🌟",value:8,weight:8},{key:"rareKoi",name:"RARE KOI",icon:"🎏",value:15,weight:2}],Ko=[{key:"bread",name:"BREAD",icon:"🍞",cost:5,restore:25},{key:"soup",name:"SOUP",icon:"🍜",cost:8,restore:45},{key:"cookie",name:"COOKIE",icon:"🍪",cost:3,restore:15}],Ul=new Audio("./sounds/bgm.mp3");Ul.loop=!0;Ul.volume=.28;const Rv=["harvest","coin","water","fish","talk","upgrade"],il={};Rv.forEach(i=>{il[i]=new Audio(`./sounds/${i}.mp3`),il[i].volume=.65});let au=!1;function gh(){au||(au=!0,Ul.play().catch(()=>{}))}let ar=null;function Pv(){return ar||(ar=new(window.AudioContext||window.webkitAudioContext)),ar.state==="suspended"&&ar.resume(),ar}function kr(i){try{const t=Pv(),e=t.currentTime,n=t.createGain();n.connect(t.destination);const s=t.createOscillator();switch(s.connect(n),i){case"meow":s.type="sine",s.frequency.setValueAtTime(680,e),s.frequency.exponentialRampToValueAtTime(280,e+.28),n.gain.setValueAtTime(.28,e),n.gain.exponentialRampToValueAtTime(.001,e+.32),s.start(e),s.stop(e+.32);break;case"bark":s.type="sawtooth",s.frequency.setValueAtTime(220,e),s.frequency.exponentialRampToValueAtTime(110,e+.12),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.14),s.start(e),s.stop(e+.15);break;case"quack":s.type="square",s.frequency.setValueAtTime(380,e),s.frequency.setValueAtTime(520,e+.07),s.frequency.setValueAtTime(380,e+.14),n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.001,e+.22),s.start(e),s.stop(e+.22);break;case"boing":s.type="sine",s.frequency.setValueAtTime(180,e),s.frequency.exponentialRampToValueAtTime(780,e+.22),n.gain.setValueAtTime(.28,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),s.start(e),s.stop(e+.28);break;case"pop":s.type="sine",s.frequency.setValueAtTime(900,e),s.frequency.exponentialRampToValueAtTime(350,e+.08),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.1),s.start(e),s.stop(e+.1);break}}catch{}}document.addEventListener("pointerdown",gh,{once:!0});function Cn(i,t=.65){const e=il[i];e&&(e.currentTime=0,e.volume=Math.min(1,t),e.play().catch(()=>{}),gh())}const Lt={carrot:0,tomato:0,pumpkin:0,cabbage:0,strawberry:0,smallFish:0,goldFish:0,roundFish:0,blueFish:0,rareKoi:0,bread:0,soup:0,cookie:0,coins:0};let Ys=100;const _h=100,Dv=20,Lv=document.getElementById("energy-hud"),Fv=document.getElementById("energy-val");function vh(){Fv.textContent=Math.ceil(Ys),Lv.classList.toggle("tired",Ys<=Dv)}function ha(i){const t=Vr==="CLOUDY"?Math.max(1,Math.floor(i*.7)):i;Ys=Math.max(0,Ys-t),vh()}function fa(i){Ys=Math.min(_h,Ys+i),vh()}function Iv(){Ue?Ui(-2,-1.6):Ui(0,12),fa(_h),Ie={type:"rest",t:0,done:!1,blinked:!1},Cn("harvest",.5),Jt("RESTED! ⚡ ENERGY FULL"),Ue||(Se(0,12,16772744,10),Se(0,12,16755370,6))}function nn(){document.getElementById("inv-coins").textContent=Lt.coins;const i=document.getElementById("bag-coins-val");i&&(i.textContent=Lt.coins)}function Pi(){const i=document.getElementById("bag-crops-list"),t=document.getElementById("bag-fish-list"),e=document.getElementById("bag-food-list");i&&(i.innerHTML=Object.entries(Wn).map(([n,s])=>`<div class="bag-item"><span>${s.icon}</span><span>${s.name}</span><span class="bag-qty">×${Lt[n]}</span></div>`).join("")),t&&(t.innerHTML=Xs.map(n=>`<div class="bag-item"><span>${n.icon}</span><span>${n.name}</span><span class="bag-qty">×${Lt[n.key]}</span></div>`).join("")),e&&(e.innerHTML=Ko.map(n=>{const s=Lt[n.key]||0;return`<div class="bag-food-item" style="grid-column:1/-1">
        <span>${n.icon}</span><span>${n.name} ×${s}</span>
        <button class="bag-eat-btn" data-food="${n.key}" ${s<=0?"disabled":""}>EAT +${n.restore}⚡</button>
      </div>`}).join(""),e.querySelectorAll(".bag-eat-btn").forEach(n=>{n.addEventListener("pointerup",s=>{s.stopPropagation(),Wv(n.dataset.food)})})),nn()}const sl=document.getElementById("zone-msg");let Oo=0;function Cs(i){sl.textContent=i,sl.classList.add("visible"),Oo=1.5}let nc=null;function Jt(i){const t=document.getElementById("notif-toast");t.textContent=i,t.classList.add("visible"),nc&&clearTimeout(nc),nc=setTimeout(()=>t.classList.remove("visible"),2200)}function Mh(){Pi(),document.getElementById("bag-panel").classList.add("open")}function Uv(){document.getElementById("bag-panel").classList.remove("open")}document.getElementById("bag-btn").addEventListener("pointerup",i=>{i.stopPropagation(),Mh()});document.getElementById("bag-close").addEventListener("pointerup",i=>{i.stopPropagation(),Uv()});const gr=new Set;let yh="crops";function bh(i){if(gr.has(i))return;gr.add(i),Lt.coins+=5,nn(),Jt("NEW DISCOVERY! +5🪙"),Cs("NEW DISCOVERY!");const t=document.getElementById("book-panel");t&&t.classList.contains("open")&&Nl()}function Nl(){const i=document.getElementById("book-grid"),t=document.getElementById("book-count");if(!i)return;const e=Object.keys(Wn),n=Xs.map(o=>o.key),s=e.length+n.length;t&&(t.textContent=`${gr.size}/${s}`);let r="";if(yh==="crops")for(const o of e){const a=Wn[o];gr.has(o)?r+=`<div class="book-card discovered">
          <div class="book-card-icon">${a.icon}</div>
          <div class="book-card-name">${a.name}</div>
          <div class="book-card-value">${a.value}🪙</div>
        </div>`:r+=`<div class="book-card undiscovered">
          <div class="book-card-icon">${a.icon}</div>
          <div class="book-card-name">???</div>
          <div class="book-card-value">?🪙</div>
        </div>`}else for(const o of Xs)gr.has(o.key)?r+=`<div class="book-card discovered">
          <div class="book-card-icon">${o.icon}</div>
          <div class="book-card-name">${o.name}</div>
          <div class="book-card-value">${o.value}🪙</div>
        </div>`:r+=`<div class="book-card undiscovered">
          <div class="book-card-icon">${o.icon}</div>
          <div class="book-card-name">???</div>
          <div class="book-card-value">?🪙</div>
        </div>`;i.innerHTML=r}function Eh(){Nl(),document.getElementById("book-panel").classList.add("open")}function Nv(){document.getElementById("book-panel").classList.remove("open")}document.getElementById("book-btn").addEventListener("pointerup",i=>{i.stopPropagation(),Eh()});document.getElementById("book-close").addEventListener("pointerup",i=>{i.stopPropagation(),Nv()});function Sh(){Ol(),document.querySelectorAll(".market-tab").forEach(e=>e.classList.remove("active"));const i=document.querySelector('.market-tab[data-tab="hire"]');i&&i.classList.add("active"),document.getElementById("market-items").style.display="none",document.getElementById("market-food").style.display="none";const t=document.getElementById("market-hire");t&&(t.style.display=""),Bl(),document.getElementById("mp-coins").textContent=Lt.coins,Dr.classList.add("open")}(function(){const t=document.getElementById("menu-btn"),e=document.getElementById("menu-panel");if(!t||!e)return;function n(){e.classList.remove("open")}function s(){e.classList.contains("open")?n():e.classList.add("open")}t.addEventListener("pointerup",o=>{o.stopPropagation(),s()}),document.addEventListener("pointerup",o=>{!e.contains(o.target)&&o.target!==t&&n()}),[["menu-item-bag",()=>Mh()],["menu-item-book",()=>Eh()],["menu-item-goals",()=>Ph()],["menu-item-upgrades",()=>Lh()],["menu-item-helpers",()=>Sh()]].forEach(([o,a])=>{const c=document.getElementById(o);c&&c.addEventListener("pointerup",l=>{l.stopPropagation(),n(),a()})})})();document.querySelectorAll(".book-tab").forEach(i=>{i.addEventListener("pointerup",t=>{t.stopPropagation(),yh=i.dataset.tab,document.querySelectorAll(".book-tab").forEach(e=>e.classList.remove("active")),i.classList.add("active"),Nl()})});const Eo=-17,So=3,Ks=[{x:Eo-3.2,z:So-.8,state:"EMPTY",crop:null,indicator:null,readyTimer:0},{x:Eo-3.2,z:So+1.5,state:"EMPTY",crop:null,indicator:null,readyTimer:0},{x:Eo+.2,z:So-.8,state:"EMPTY",crop:null,indicator:null,readyTimer:0},{x:Eo+.2,z:So+1.5,state:"EMPTY",crop:null,indicator:null,readyTimer:0}];function Gr(i){if(i.indicator&&(nt.remove(i.indicator),i.indicator=null),i.state==="EMPTY")return;const t=new wt,e=i.crop?Wn[i.crop]:null;if(i.state==="SEEDED"){const n=At(new se(.07,6,5),xt(9131312));n.position.y=.42,t.add(n)}else if(i.state==="WATERED"){const n=It(.018,.018,.18,5,5283872);n.position.y=.44,t.add(n);const s=At(new se(.1,7,6),xt(e?.sproutColor||6342768));s.position.y=.58,t.add(s)}else if(i.state==="READY"){const n=It(.022,.022,.24,5,5283872);n.position.y=.47,t.add(n);const s=At(new se(.14,8,7),xt(e?.color||16764992));s.material.emissive=new Ft(e?.color||16764992),s.material.emissiveIntensity=.3,s.position.y=.72,t.add(s),t.userData.glowBall=s}t.position.set(i.x,0,i.z),nt.add(t),i.indicator=t}function Us(i){const t=Et.position.x,e=Et.position.z;let n=null,s=1/0;for(const r of Ks){if(r.state!==i)continue;const o=Math.hypot(t-r.x,e-r.z);o<3.8&&o<s&&(s=o,n=r)}return n}function Ov(){document.getElementById("crop-panel").classList.add("open")}function rl(){document.getElementById("crop-panel").classList.remove("open")}document.querySelectorAll(".crop-close").forEach(i=>i.addEventListener("pointerup",t=>{t.stopPropagation(),rl()}));document.querySelectorAll(".crop-btn").forEach(i=>{i.addEventListener("pointerup",t=>{t.stopPropagation();const e=i.dataset.crop;if(!e)return;const n=Us("EMPTY");if(!n){rl();return}n.state="SEEDED",n.crop=e,Gr(n),Ui(n.x,n.z),Ie={type:"plant",t:0,done:!1},ha(3),Cn("water",.45),Jt(`PLANTED ${Wn[e].name}`),setTimeout(()=>Se(n.x,n.z,9131312,7),200),setTimeout(()=>Se(n.x,n.z,6067254,4),400),rl(),Yn("plant")})});function Bv(){const i=Us("SEEDED");i&&(i.state="WATERED",i.readyTimer=Wn[i.crop]?.growTime||10,Gr(i),Ui(i.x,i.z),Ie={type:"water",t:0,done:!1},ha(3),Cn("water",.55),setTimeout(()=>Se(i.x,i.z,5607679,8),180),setTimeout(()=>Se(i.x,i.z,8965375,5),360),Yn("water"))}function zv(){const i=Us("READY");if(!i)return;const t=Wn[i.crop];Lt[i.crop]++,Pi(),bh(i.crop),Jt(`+1 ${t.name}`),ei("harvestCount"),Ui(i.x,i.z),Ie={type:"harvest",t:0,done:!1},ha(2),Cn("harvest"),setTimeout(()=>{Se(i.x,i.z,t.color,10),Se(i.x,i.z,16777215,4)},150),i.state="EMPTY",i.crop=null,i.readyTimer=0,Gr(i),Yn("harvest")}const Bo=[];function Se(i,t,e,n=4){for(let s=0;s<n;s++){const r=dt(.048+Math.random()*.032,4,e);r.material.transparent=!0,r.material.opacity=1,r.position.set(i+(Math.random()-.5)*.5,.4,t+(Math.random()-.5)*.5),nt.add(r);const o=Math.random()*Math.PI*2;Bo.push({mesh:r,vx:Math.cos(o)*.045,vy:.065+Math.random()*.04,vz:Math.sin(o)*.045,life:1})}}function kv(i){for(let t=Bo.length-1;t>=0;t--){const e=Bo[t];e.life-=i*1.6,e.mesh.position.x+=e.vx,e.mesh.position.y+=e.vy,e.mesh.position.z+=e.vz,e.vy-=i*.32,e.mesh.material.opacity=Math.max(0,e.life),e.life<=0&&(nt.remove(e.mesh),Bo.splice(t,1))}}let Be=null,Di=null;function Gv(){if(Di)return;const i=new wt,t=At(new se(.08,7,6),xt(16719904));t.position.y=.05,i.add(t);const e=At(new se(.08,7,6),xt(16777215));e.position.y=-.05,i.add(e),i.position.set(19.2,.12,2),nt.add(i),Di=i}function ol(){Di&&(nt.remove(Di),Di=null)}function Th(){const i=Xs.map(n=>Vr==="CLOUDY"&&n.key==="rareKoi"?{...n,weight:n.weight+5}:n),t=i.reduce((n,s)=>n+s.weight,0);let e=Math.random()*t;for(const n of i)if(e-=n.weight,e<=0)return n;return i[0]}function Vv(){if(Be)return;const i=Vr==="RAINY"?.65:1,t=(dl?1.5:2)*i,e=(dl?1.5:2)*i;Be={phase:"waiting",elapsed:0,duration:t+Math.random()*e,biteTimer:0},Gv(),Ui(17,3),ha(5),Ie={type:"fishing",t:0,done:!1}}function Hv(){if(Be?.phase!=="ready")return;const i=Th();Lt[i.key]++,Pi(),bh(i.key),Be=null,ol(),document.getElementById("fish-card-icon").textContent=i.icon,document.getElementById("fish-card-name").textContent=i.name,document.getElementById("fish-card-value").textContent=`VALUE: ${i.value} COINS`;const t=document.getElementById("fish-card");t.classList.add("visible"),setTimeout(()=>t.classList.remove("visible"),3e3),Jt(`CAUGHT ${i.name}!`),ei("catchCount"),Cn("fish"),Se(19.2,2,8969727,10),Se(19.2,2,16777215,5),Yn("fish"),Ie={type:"pull",t:0,done:!1}}const Dr=document.getElementById("market-panel");function Ol(){const i=document.getElementById("market-items"),t=[...Object.entries(Wn).map(([e,n])=>({key:e,name:n.name,icon:n.icon,value:n.value})),...Xs.map(e=>({key:e.key,name:e.name,icon:e.icon,value:e.value}))];i.innerHTML=t.map(e=>`
    <div class="market-row">
      <div class="market-icon">${e.icon}</div>
      <div class="market-name">${e.name}</div>
      <div class="market-qty" id="mp-${e.key}">${Lt[e.key]||0}</div>
      <div class="market-price">+${e.value}🪙</div>
      <button class="market-sell" data-item="${e.key}" data-price="${e.value}" data-name="${e.name}" ${(Lt[e.key]||0)<=0?"disabled":""}>SELL</button>
    </div>`).join(""),i.querySelectorAll(".market-sell").forEach(e=>{e.addEventListener("pointerup",n=>{n.stopPropagation();const s=e.dataset.item,r=+e.dataset.price,o=e.dataset.name;if((Lt[s]||0)<=0)return;const a=Nh?1:0;Lt[s]--,Lt.coins+=r+a,Qo++,ei("sellCount"),Cn("coin"),document.getElementById(`mp-${s}`).textContent=Lt[s],document.getElementById("mp-coins").textContent=Lt.coins,e.disabled=Lt[s]<=0,nn(),Jt(`SOLD ${o} +${r+a}🪙${a?" (+1 BONUS)":""}`),Yn("sell")})})}function Ah(){const i=document.getElementById("market-food");i.innerHTML=Ko.map(t=>`
    <div class="food-buy-row">
      <div class="food-buy-icon">${t.icon}</div>
      <div class="food-buy-name">${t.name}<br><span class="food-buy-info">+${t.restore}⚡</span></div>
      <div class="food-buy-cost">${t.cost}🪙</div>
      <button class="food-buy-btn" data-food="${t.key}" data-cost="${t.cost}" data-restore="${t.restore}" data-name="${t.name}" ${Lt.coins<t.cost?"disabled":""}>BUY</button>
    </div>`).join(""),i.querySelectorAll(".food-buy-btn").forEach(t=>{t.addEventListener("pointerup",e=>{e.stopPropagation();const n=+t.dataset.cost,s=t.dataset.food;t.dataset.name;const r=+t.dataset.restore;if(Lt.coins<n)return;Lt.coins-=n,Lt[s]++,fa(r),document.getElementById("mp-coins").textContent=Lt.coins,nn();const o=Ko.find(a=>a.key===s);Jt(`${o?o.icon:""} YUM! +${r}⚡`),Ah(),Yn("food")})})}document.querySelectorAll(".market-tab").forEach(i=>{i.addEventListener("pointerup",t=>{t.stopPropagation(),document.querySelectorAll(".market-tab").forEach(c=>c.classList.remove("active")),i.classList.add("active");const e=i.dataset.tab,n=document.getElementById("market-items"),s=document.getElementById("market-food"),r=document.getElementById("market-hire"),o=c=>{c&&(c.classList.remove("active"),c.style.display="none")},a=c=>{c&&(c.classList.add("active"),c.style.display="")};o(n),o(s),o(r),e==="sell"?(a(n),Ol()):e==="food"?(a(s),Ah()):e==="hire"&&(a(r),Bl())})});function Wv(i){const t=Ko.find(e=>e.key===i);!t||(Lt[i]||0)<=0||(Lt[i]--,fa(t.restore),Pi(),Jt(`${t.icon} YUM! +${t.restore}⚡`),Ie={type:"harvest",t:0,done:!1},Yn("food"))}function Xv(){Ol(),document.querySelectorAll(".market-tab").forEach(n=>n.classList.remove("active")),document.querySelector('.market-tab[data-tab="sell"]').classList.add("active");const i=document.getElementById("market-items"),t=document.getElementById("market-food"),e=document.getElementById("market-hire");i.style.display="",t.style.display="none",e&&(e.style.display="none"),document.getElementById("mp-coins").textContent=Lt.coins,Dr.classList.add("open"),Ui(0,-18),Ie={type:"sell",t:0,done:!1}}function wh(){Dr.classList.remove("open")}document.getElementById("market-close").addEventListener("pointerup",i=>{i.stopPropagation(),wh()});Dr.addEventListener("pointerup",i=>{i.target===Dr&&wh()});const Yv=[{id:"harvest",label:"Harvest crops",target:3,track:"harvestCount",icon:"🌾"},{id:"fish",label:"Catch fish",target:2,track:"catchCount",icon:"🐟"},{id:"sell",label:"Sell items",target:5,track:"sellCount",icon:"🛒"},{id:"talk",label:"Talk to villagers",target:2,track:"talkCount",icon:"💬"},{id:"request",label:"Complete NPC requests",target:1,track:"requestCount",icon:"⭐"},{id:"upgrade",label:"Buy a town upgrade",target:1,track:"upgradeCount",icon:"🏡"}];let _r=1,Lr=[],Vr="SUNNY",kn=null;const al=180,cr=document.getElementById("weather-hud");function qv(i){i==="SUNNY"?(nt.fog.color.setHex(14216959),nt.fog.density=.01,Xe.color.setHex(16771232),Xe.intensity=1.85,nt.background.setHex(10542328),Fo.forEach(t=>t.material.color.setHex(16316664))):i==="RAINY"?(nt.fog.color.setHex(11585752),nt.fog.density=.016,Xe.color.setHex(12110040),Xe.intensity=.8,nt.background.setHex(8956096),Fo.forEach(t=>t.material.color.setHex(11057352))):i==="CLOUDY"&&(nt.fog.color.setHex(13160668),nt.fog.density=.013,Xe.color.setHex(13687008),Xe.intensity=1.1,nt.background.setHex(10005183),Fo.forEach(t=>t.material.color.setHex(12634320)))}function $v(){if(kn)return;const i=new Ke,t=new Float32Array(al*3);for(let n=0;n<al;n++)t[n*3]=(Math.random()-.5)*44,t[n*3+1]=Math.random()*12,t[n*3+2]=(Math.random()-.5)*44;i.setAttribute("position",new wn(t,3));const e=new Bu({color:8956620,size:.07,transparent:!0,opacity:.55,depthWrite:!1});kn=new g0(i,e),nt.add(kn)}function Zv(){kn&&(nt.remove(kn),kn.geometry.dispose(),kn.material.dispose(),kn=null)}function Kv(i){if(!kn)return;const t=kn.geometry.attributes.position;for(let e=0;e<al;e++)t.array[e*3+1]-=i*10,t.array[e*3+1]<-1&&(t.array[e*3]=(Math.random()-.5)*44,t.array[e*3+1]=9+Math.random()*4,t.array[e*3+2]=(Math.random()-.5)*44);t.needsUpdate=!0}function Jv(){for(const i of ss){if(i.umbrella)continue;const t=new wt,e=At(new se(.26,8,6,0,Math.PI*2,0,Math.PI*.5),xt(i.def.color));e.position.y=0;const n=It(.014,.014,.35,5,9131312);n.position.y=-.17,t.add(e),t.add(n),t.position.set(0,1.1,0),i.mesh.add(t),i.umbrella=t}}function jv(){for(const i of ss)i.umbrella&&(i.mesh.remove(i.umbrella),i.umbrella=null)}function Ch(i){if(Vr=i,cr){const t={SUNNY:"☀️",RAINY:"🌧️",CLOUDY:"☁️"};cr.textContent=`${t[i]} ${i}`,cr.className="",i==="RAINY"&&cr.classList.add("rainy"),i==="CLOUDY"&&cr.classList.add("cloudy")}qv(i),i==="RAINY"?($v(),Jv()):(Zv(),jv())}function Qv(){const i=Math.random(),t=i<.4?"SUNNY":i<.7?"RAINY":"CLOUDY";Ch(t),Jt(`${{SUNNY:"☀️",RAINY:"🌧️",CLOUDY:"☁️"}[t]} ${t} TODAY!`)}let Fr=!1;const cl=new Set,vr={harvestCount:0,catchCount:0,sellCount:0,talkCount:0,requestCount:0,upgradeCount:0};function Rh(){Lr=[...Yv].sort(()=>Math.random()-.5).slice(0,3).map(t=>({...t,progress:0,done:!1})),Fr=!1,cl.clear();for(const t of Object.keys(vr))vr[t]=0}function ei(i){vr[i]=(vr[i]||0)+1;let t=!1;for(const n of Lr)n.done||n.track!==i||(n.progress=Math.min(n.target,vr[i]),n.progress>=n.target&&(n.done=!0,t=!0,Lt.coins+=10,nn(),ri(5),Jt(`${n.icon} GOAL DONE! +10🪙 +5 MOOD`)));t&&Lr.every(n=>n.done)&&!Fr&&(Fr=!0,setTimeout(tM,600));const e=document.getElementById("goals-panel");e&&e.classList.contains("open")&&pa()}function tM(){Lt.coins+=30,nn(),ri(15),Cn("harvest",.8),setTimeout(()=>Cn("coin",.7),350),Jt("🌟 DAY COMPLETE! +30🪙 +15 MOOD!"),Cs("DAY COMPLETE!"),Mr=3;const i=document.getElementById("goals-panel");i&&i.classList.contains("open")&&pa()}function eM(){_r++;const i=document.getElementById("day-val"),t=document.getElementById("goals-day-val");i&&(i.textContent=_r),t&&(t.textContent=_r),Rh(),pa(),Se(0,0,8969727,8),Qv()}function pa(){const i=document.getElementById("goals-list");if(!i)return;let t="";for(const e of Lr){const n=e.done?" goal-done":"",s=e.done?"✓":"◯",r=e.done?"DONE +10🪙":`${e.progress}/${e.target}`;t+=`<div class="goal-row${n}">
      <div class="goal-check">${s}</div>
      <div class="goal-text">${e.icon} ${e.label}</div>
      <div class="goal-prog">${r}</div>
    </div>`}if(Fr&&(t+=`<div class="goals-complete-banner">
      <div class="goals-complete-title">🌟 DAY COMPLETE!</div>
      <div class="goals-complete-sub">All goals done! +30🪙 +15 MOOD collected</div>
      <button id="next-day-btn">☀️ START DAY ${_r+1}</button>
    </div>`),i.innerHTML=t,Fr){const e=document.getElementById("next-day-btn");e&&e.addEventListener("pointerup",n=>{n.stopPropagation(),eM()})}}function Ph(){const i=document.getElementById("goals-day-val");i&&(i.textContent=_r),pa(),document.getElementById("goals-panel").classList.add("open")}function nM(){document.getElementById("goals-panel").classList.remove("open")}document.getElementById("goals-close").addEventListener("pointerup",i=>{i.stopPropagation(),nM()});function iM(i,t){const e=new wt,n=Ht(.06,.8,R.woodDark);n.position.set(0,.57,0),e.add(n);const s=ct(.82,.52,.09,R.woodDark);s.position.y=.98,e.add(s);const r=ct(.68,.4,.11,R.signWood);r.position.y=.98,e.add(r);const o=ct(.52,.26,.13,16775400);o.position.y=.98,e.add(o);const a=ct(.86,.09,.09,6343792);a.position.y=1.26,e.add(a);const c=dt(.12,8,6348144);c.material.emissive=new Ft(4508757),c.material.emissiveIntensity=.55,c.position.y=1.44,e.add(c);for(let u=0;u<4;u++){const d=u/4*Math.PI*2,h=.15,p=dt(.032,4,8449664);p.position.set(Math.cos(d)*h,1.44,Math.sin(d)*h),e.add(p)}const l=ct(.72,.08,.24,R.stoneBeige);l.position.y=.04,e.add(l),e.position.set(i,0,t),nt.add(e)}function sM(i,t){const e=new wt;[-.3,.3].forEach(l=>{const u=Ht(.058,.86,R.woodDark);u.position.set(l,.6,0),e.add(u)});const n=ct(.9,.58,.09,R.woodDark);n.position.y=1,e.add(n);const s=ct(.74,.44,.11,R.signWood);s.position.y=1,e.add(s);const r=ct(.58,.3,.13,15661567);r.position.y=1,e.add(r);const o=ct(.94,.1,.09,4505816);o.position.y=1.32,e.add(o);const a=dt(.13,8,4513262);a.material.emissive=new Ft(4513262),a.material.emissiveIntensity=.55,a.position.y=1.5,e.add(a);for(let l=0;l<6;l++){const u=l/6*Math.PI*2,d=.17,h=dt(.036,4,8974079);h.position.set(Math.cos(u)*d,1.5,Math.sin(u)*d),e.add(h)}const c=ct(.82,.09,.26,R.stoneBeige);c.position.y=.045,e.add(c),e.position.set(i,0,t),nt.add(e)}function rM(i,t){const e=new wt;[-.32,.32].forEach(l=>{const u=Ht(.062,.92,R.woodDark);u.position.set(l,.64,0),e.add(u)});const n=ct(.96,.62,.09,R.woodDark);n.position.y=1.04,e.add(n);const s=ct(.8,.48,.11,R.signWood);s.position.y=1.04,e.add(s);const r=ct(.64,.34,.13,16775400);r.position.y=1.04,e.add(r);const o=ct(1,.11,.09,16763972);o.position.y=1.37,e.add(o);const a=dt(.14,8,16768324);a.material.emissive=new Ft(16768324),a.material.emissiveIntensity=.5,a.position.y=1.56,e.add(a);for(let l=0;l<5;l++){const u=l/5*Math.PI*2,d=.18,h=dt(.042,4,16772710);h.position.set(Math.cos(u)*d,1.56,Math.sin(u)*d),e.add(h)}const c=ct(.88,.1,.28,R.stoneBeige);c.position.y=.05,e.add(c),e.position.set(i,0,t),nt.add(e)}function oM(i,t){const e=new wt,n=ct(1.8,.08,.82,R.woodWarm);n.position.y=.72,e.add(n),[[-.72,.28],[.72,.28],[-.72,-.28],[.72,-.28]].forEach(([l,u])=>{const d=It(.055,.055,.72,6,R.woodDark);d.position.set(l,.36,u),e.add(d)}),[-.6,.6].forEach(l=>{const u=ct(1.68,.07,.3,R.benchSeat);u.position.set(0,.46,l),e.add(u),[-.62,.62].forEach(d=>{const h=It(.04,.04,.46,5,R.woodDark);h.position.set(d,.23,l),e.add(h)})});const s=It(.04,.04,1.35,6,R.woodDark);s.position.set(0,1.4,0),e.add(s);const r=Vs(.72,.38,10,16746632);r.position.set(0,2.01,0),e.add(r);const o=At(new Ye(.7,.06,5,12),xt(R.flowerPink));o.rotation.x=Math.PI/2,o.position.set(0,1.85,0),e.add(o);const a=It(.07,.07,.16,8,16772812);a.position.set(.4,.8,.05),e.add(a);const c=It(.18,.18,.03,10,R.cloudWhite);c.position.set(-.35,.775,-.04),e.add(c),e.position.set(i,0,t),nt.add(e)}function aM(i,t){const e=new wt;[-.38,.38].forEach(l=>{const u=Ht(.055,1.2,R.woodDark);u.position.set(l,.82,0),e.add(u)});const n=ct(1.1,.64,.09,R.woodDark);n.position.y=1.44,e.add(n);const s=ct(.92,.5,.11,R.signWood);s.position.y=1.44,e.add(s);const r=ct(.76,.36,.13,16775400);r.position.y=1.44,e.add(r);const o=ct(1.12,.12,.09,R.flowerPink);o.position.y=1.78,e.add(o),[-.18,0,.18].forEach(l=>{const u=dt(.076,6,16768320);u.material.emissive=new Ft(16768320),u.material.emissiveIntensity=.3,u.position.set(l,1.44,.1),e.add(u)});const a=It(.018,.018,.38,4,R.woodDark);a.position.set(.56,1.96,0),e.add(a);const c=ct(.24,.16,.04,R.flowerYellow);c.position.set(.68,2.09,0),e.add(c),e.position.set(i,0,t),nt.add(e)}function cM(i){ll.add(i),ei("upgradeCount"),Cn("upgrade"),Yn("upgrade");const t=Uh.find(s=>s.id===i),e=-17,n=3;i==="flowers"?([[4,2],[-4,2],[4,-3.5],[-4,-3.5]].forEach(([s,r])=>Hs(s,r)),[[4.8,4.2],[-4.8,4]].forEach(([s,r])=>fi(s,r,R.flowerPurple)),Se(0,0,16746751,12)):i==="lamps"?([[-6.5,2.5],[6.5,2.5],[-3,-8],[3,-8]].forEach(([s,r])=>gn(s,r)),Se(0,0,16772676,10)):i==="picnic"?(oM(6,-4),Se(6,-4,16763972,10)):i==="farm2"?(ws(e-3.2,n+4.5,0),ws(e+.2,n+4.5,0),Ks.push({x:e-3.2,z:n+4.5,state:"EMPTY",crop:null,indicator:null,readyTimer:0},{x:e+.2,z:n+4.5,state:"EMPTY",crop:null,indicator:null,readyTimer:0}),Se(e,n,8978244,10)):i==="dock2"?(hh(14.5,4.5,.6),dl=!0,Se(17,3,4513279,10)):i==="sign"&&(aM(-2.5,-13),Nh=!0,Se(0,-18,16768320,10)),Lt.coins-=t.cost,nn(),ri(t.mood),Jt(`${t.icon} ${t.name} ADDED! +${t.mood} MOOD`),document.getElementById("upgrade-coins-disp").textContent=`🪙 ${Lt.coins}`,Dh()}const Jo=document.getElementById("upgrade-panel");function Dh(){const i=document.getElementById("upgrade-list");i&&(i.innerHTML=Uh.map(t=>{const e=ll.has(t.id),n=Lt.coins>=t.cost;return`<div class="upgrade-row">
      <div class="upgrade-icon">${t.icon}</div>
      <div class="upgrade-info">
        <div class="upgrade-name">${t.name}</div>
        <div class="upgrade-desc">${t.desc} +${t.mood}🏡</div>
      </div>
      <div class="upgrade-cost">${e?"":t.cost+"🪙"}</div>
      <button class="upgrade-btn" data-id="${t.id}" ${e||!n?"disabled":""}>${e?"DONE":"BUY"}</button>
    </div>`}).join(""),i.querySelectorAll(".upgrade-btn").forEach(t=>{t.addEventListener("pointerup",e=>{e.stopPropagation(),ll.has(t.dataset.id)||cM(t.dataset.id)})}))}function Lh(){document.getElementById("upgrade-coins-disp").textContent=`🪙 ${Lt.coins}`,Dh(),Jo.classList.add("open")}function Fh(){Jo.classList.remove("open")}document.getElementById("upgrade-close").addEventListener("pointerup",i=>{i.stopPropagation(),Fh()});Jo.addEventListener("pointerup",i=>{i.target===Jo&&Fh()});const Ih=[{key:"farm",label:"FARM HELPER",icon:"🌱",cost:30,desc:"Waters crops automatically",color:8317050,homeX:-17,homeZ:3},{key:"fishing",label:"FISHING HELPER",icon:"🎣",cost:40,desc:"Catches fish every 30 seconds",color:8048360,homeX:17,homeZ:3},{key:"market",label:"MARKET HELPER",icon:"🛒",cost:25,desc:"Sells items every 20 seconds",color:15781984,homeX:0,homeZ:-18}],jo=[];function lM(i){const t=new wt;[-.08,.08].forEach(c=>{const l=At(new se(.07,8,6),xt(3355443));l.scale.set(1.1,.45,1.3),l.position.set(c,.04,.04),t.add(l)}),[-.07,.07].forEach(c=>{const l=Ht(.065,.1,5275856);l.position.set(c,.14,0),t.add(l)});const e=Ht(.18,.16,i);e.scale.set(1,1,.92),e.position.y=.37,t.add(e),[-.22,.22].forEach((c,l)=>{const u=Ht(.065,.07,i);u.position.set(c,.45,0),u.rotation.z=l===0?.4:-.4,t.add(u)});const n=At(new se(.27,16,12),xt(16764320));n.scale.set(1,.98,.96),n.position.y=.72,t.add(n),[-.09,.09].forEach(c=>{const l=At(new se(.036,7,6),xt(1576970));l.scale.set(.9,1,.6),l.position.set(c,.77,.25),t.add(l)});const s=At(new Ye(.024,.009,4,8,Math.PI),xt(13382468));s.rotation.z=Math.PI,s.position.set(0,.67,.26),t.add(s);const r=It(.3,.32,.06,10,i);r.position.y=.88,t.add(r);const o=Ht(.18,.17,i);o.position.y=1.01,t.add(o);const a=At(new se(.06,6,5),xt(i));return a.material.emissive=new Ft(i),a.material.emissiveIntensity=.4,a.position.y=1.32,t.add(a),t.userData.badge=a,t}function Bl(){const i=document.getElementById("market-hire");i&&(i.innerHTML=Ih.map(t=>{const e=jo.some(n=>n.type===t.key);return`<div class="hire-row">
      <div class="hire-icon">${t.icon}</div>
      <div class="hire-info">
        <div class="hire-name">${t.label}</div>
        <div class="hire-desc">${t.desc}</div>
      </div>
      <div class="hire-cost">${t.cost}🪙</div>
      <button class="hire-btn" data-npc="${t.key}" ${e||Lt.coins<t.cost?"disabled":""}>${e?"HIRED":"HIRE"}</button>
    </div>`}).join(""),i.querySelectorAll(".hire-btn").forEach(t=>{t.addEventListener("pointerup",e=>{e.stopPropagation(),dM(t.dataset.npc)})}))}function dM(i){const t=Ih.find(n=>n.key===i);if(!t||Lt.coins<t.cost||jo.some(n=>n.type===i))return;Lt.coins-=t.cost,nn();const e=lM(t.color);e.position.set(t.homeX+(Math.random()-.5)*2,0,t.homeZ+(Math.random()-.5)*2),nt.add(e),jo.push({type:i,mesh:e,x:t.homeX,z:t.homeZ,homeX:t.homeX,homeZ:t.homeZ,targetX:t.homeX,targetZ:t.homeZ,wanderTimer:1+Math.random()*2,actionTimer:i==="market"?20:i==="fishing"?30:15,idleT:0}),Jt(`${t.icon} ${t.label} HIRED!`),Bl(),ri(5)}function uM(i){performance.now();for(const t of jo){if(t.idleT+=i,t.wanderTimer-=i,t.actionTimer-=i,t.wanderTimer<=0){t.wanderTimer=2.5+Math.random()*3.5;const a=Math.random()*Math.PI*2,c=1.5+Math.random()*2.5;t.targetX=t.homeX+Math.cos(a)*c,t.targetZ=t.homeZ+Math.sin(a)*c}const e=t.targetX-t.x,n=t.targetZ-t.z,s=Math.hypot(e,n),r=s>.15;if(r){const a=1.2*i;t.x+=e/s*a,t.z+=n/s*a,t.mesh.rotation.y=Math.atan2(e,n)}const o=r?Math.abs(Math.sin(t.idleT*6))*.05:Math.abs(Math.sin(t.idleT*1.4))*.012;if(t.mesh.position.set(t.x,o,t.z),t.mesh.userData.badge&&(t.mesh.userData.badge.position.y=1.32+Math.sin(t.idleT*2)*.04),t.actionTimer<=0){if(t.type==="farm"){t.actionTimer=15;const a=Ks.find(c=>c.state==="SEEDED");a&&(a.state="WATERED",a.readyTimer=Wn[a.crop]?.growTime||10,Gr(a),Se(a.x,a.z,5607679,5),Jt("🌱 HELPER WATERED CROP"))}else if(t.type==="fishing"){t.actionTimer=30;const a=Th();Lt[a.key]++,Pi(),Se(17,3,8969727,6),Jt(`🎣 HELPER CAUGHT ${a.name}!`)}else if(t.type==="market"){t.actionTimer=20;const c=[...Object.entries(Wn).map(([l,u])=>({key:l,value:u.value})),...Xs.map(l=>({key:l.key,value:l.value}))].find(l=>(Lt[l.key]||0)>0);c&&(Lt[c.key]--,Lt.coins+=c.value,nn(),Se(0,-18,16764992,5),Jt(`🛒 HELPER SOLD +${c.value}🪙`))}}}}const Uh=[{id:"flowers",name:"FLOWER BEDS",cost:20,mood:5,icon:"🌸",desc:"Flowers bloom around plaza"},{id:"lamps",name:"STREET LAMPS",cost:35,mood:8,icon:"🏮",desc:"Warm lamps light the paths"},{id:"picnic",name:"PICNIC TABLE",cost:45,mood:10,icon:"🪑",desc:"Cozy sitting area for all"},{id:"farm2",name:"BIGGER FARM",cost:60,mood:12,icon:"🌱",desc:"2 extra farm plots added"},{id:"dock2",name:"FISHING DOCK",cost:70,mood:12,icon:"🎣",desc:"Better dock, fish bite faster"},{id:"sign",name:"MARKET SIGN",cost:50,mood:10,icon:"🛍",desc:"+1 coin bonus on every sale"}],ll=new Set;let dl=!1,Nh=!1,Ts=0,Qo=0,zo=null,Mr=0;function cu(i,t,e){const n=new I(i,t,e);return n.project(An),{sx:(n.x*.5+.5)*rn.w,sy:(-n.y*.5+.5)*rn.h,behind:n.z>1}}function hM(){const i=document.getElementById("mood-val");i&&(i.textContent=Ts)}function ri(i){const t=Ts;Ts=Math.min(Ts+i,100),hM(),Math.floor(Ts/10)>Math.floor(t/10)&&(Mr=2,Jt(`🏡 TOWN MOOD ${Ts}!`))}const fM=[{id:"maya",name:"MAYA",role:"Farmer",bodyCol:8965188,hatCol:5614114,homeX:-17,homeZ:4,wanderR:3.5,phrase:"NEED MORE CARROTS?",req:{type:"carrot",count:2,desc:"BRING 2 CARROTS!"}},{id:"finn",name:"FINN",role:"Fisher",bodyCol:4491485,hatCol:2254489,homeX:17,homeZ:4,wanderR:3,phrase:"BIG FISH TODAY!",req:{type:"fish",count:1,desc:"CATCH A FISH!"}},{id:"pip",name:"PIP",role:"Seller",bodyCol:16746564,hatCol:14505250,homeX:0,homeZ:-16,wanderR:2.5,phrase:"SELL SOMETHING?",req:{type:"sell",count:3,desc:"SELL 3 ITEMS!"}},{id:"lulu",name:"LULU",role:"Cook",bodyCol:16737962,hatCol:13382536,homeX:3,homeZ:-11,wanderR:4.5,phrase:"I LOVE SOUP!",req:{type:"bread",count:1,desc:"BUY 1 BREAD!"}},{id:"bobi",name:"BOBI",role:"Builder",bodyCol:16759620,hatCol:14518272,homeX:-6,homeZ:7,wanderR:3.5,phrase:"TOWN LOOKS GOOD!",req:null},{id:"nina",name:"NINA",role:"Visitor",bodyCol:12290286,hatCol:8930508,homeX:1,homeZ:5,wanderR:4,phrase:"NICE OUTFIT!",req:null}],ss=[];function pM(i){const t=new wt,e=i.bodyCol,n=i.hatCol;[-.07,.07].forEach(d=>{const h=At(new se(.065,8,6),xt(3355443));h.scale.set(1.1,.45,1.3),h.position.set(d,.038,.035),t.add(h)}),[-.065,.065].forEach(d=>{const h=Ht(.06,.09,16764320);h.position.set(d,.13,0),t.add(h)});const s=Ht(.17,.15,e);s.scale.set(1,1,.92),s.position.y=.35,t.add(s);const r=Ht(.058,.065,e);r.position.set(-.21,.43,0),r.rotation.z=.42,t.add(r);const o=Ht(.058,.065,e);o.position.set(.21,.43,0),o.rotation.z=-.42,t.add(o),t.userData.armL=r,t.userData.armR=o;const a=At(new se(.26,16,12),xt(16764320));a.scale.set(1,.98,.96),a.position.y=.7,t.add(a),t.userData.head=a,[-.085,.085].forEach(d=>{const h=At(new se(.033,7,6),xt(1576970));h.scale.set(.9,1,.6),h.position.set(d,.75,.245),t.add(h)});const c=At(new Ye(.022,.008,4,8,Math.PI),xt(13382468));c.rotation.z=Math.PI,c.position.set(0,.655,.254),t.add(c);const l=It(.28,.3,.055,10,n);l.position.y=.865,t.add(l);const u=Ht(.17,.16,n);if(u.position.y=.985,t.add(u),i.id==="maya"){const d=At(new se(.07,6,5),xt(4508842));d.scale.set(1.2,.8,.9),d.position.set(.28,.52,.12),t.add(d)}else if(i.id==="finn"){const d=It(.008,.008,.36,4,10510384);d.position.set(.26,.72,0),d.rotation.z=-.5,t.add(d)}else if(i.id==="pip"){const d=At(new ui(.08,.09,.07),xt(15636804));d.position.set(-.26,.42,.06),t.add(d)}else if(i.id==="lulu"){const d=It(.09,.07,.04,8,13395524);d.position.set(.22,.52,.1),t.add(d)}else if(i.id==="bobi"){const d=It(.05,.05,.11,6,8947848);d.position.set(.28,.55,0),d.rotation.z=-.9,t.add(d);const h=It(.02,.02,.14,5,11171652);h.position.set(.24,.48,0),h.rotation.z=-.3,t.add(h)}else if(i.id==="nina"){const d=At(new se(.05,6,5),xt(16746700));d.position.set(-.22,.52,.08),t.add(d)}return t}function mM(){const i=document.getElementById("app");for(const t of fM){const e=pM(t),n=t.homeX+(Math.random()-.5)*1.5,s=t.homeZ+(Math.random()-.5)*1.5;e.position.set(n,0,s),nt.add(e);const r=document.createElement("div");r.className="npc-nametag",r.textContent=t.name,i.appendChild(r);const o=document.createElement("div");o.className="npc-bubble",i.appendChild(o);let a=null;t.req&&(a={type:t.req.type,count:t.req.count,desc:t.req.desc,cooldown:0,soldAt:t.req.type==="sell"?Qo:0}),ss.push({def:t,mesh:e,x:n,z:s,homeX:t.homeX,homeZ:t.homeZ,targetX:t.homeX,targetZ:t.homeZ,wanderTimer:Math.random()*3,idleT:Math.random()*Math.PI*2,waving:!1,waveTimer:0,bubbleTimer:0,bubbleText:"",requestState:a,nameEl:r,bubbleEl:o})}}function xM(i){const t=Et.position.x,e=Et.position.z;for(const n of ss){n.idleT+=i,n.wanderTimer-=i,n.requestState&&(n.requestState.cooldown=Math.max(0,n.requestState.cooldown-i));const s=Math.hypot(t-n.x,e-n.z);if(n.wanderTimer<=0)if(n.wanderTimer=2+Math.random()*3.5,n.def.id==="nina"&&Math.random()<.3)n.targetX=n.x,n.targetZ=n.z,n.wanderTimer=3+Math.random()*2;else{const h=Math.random()*Math.PI*2,p=1+Math.random()*n.def.wanderR;n.targetX=n.homeX+Math.cos(h)*p,n.targetZ=n.homeZ+Math.sin(h)*p}const r=n.targetX-n.x,o=n.targetZ-n.z,a=Math.hypot(r,o),c=!n.waving&&a>.2;if(c){const h=1*i,p=n.x+r/a*h,x=n.z+o/a*h;let v=!1;for(const[m,f,A]of Bh)if(Math.hypot(p-m,x-f)<A+.32){v=!0;break}v?(n.targetX=n.homeX,n.targetZ=n.homeZ):(n.x=p,n.z=x),n.mesh.rotation.y=Math.atan2(r/a,o/a)}const l=c?Math.abs(Math.sin(n.idleT*5.5))*.045:Math.abs(Math.sin(n.idleT*1.3))*.01;if(n.mesh.position.set(n.x,l,n.z),s<2.5&&!n.waving){n.waving=!0,n.waveTimer=1.8,n.bubbleText=n.def.phrase,n.bubbleTimer=2.5;const h=t-n.x,p=e-n.z;n.mesh.rotation.y=Math.atan2(h,p)}if(n.waving?(n.waveTimer-=i,n.waveTimer<=0&&(n.waving=!1),n.mesh.userData.armR&&(n.mesh.userData.armR.rotation.x=-Math.PI*.5+Math.sin(n.idleT*7)*.4)):n.mesh.userData.armR&&(n.mesh.userData.armR.rotation.x+=(0-n.mesh.userData.armR.rotation.x)*Math.min(1,i*4)),Mr>0){const h=-Math.PI*.5+Math.sin(n.idleT*10)*.35;n.mesh.userData.armL&&(n.mesh.userData.armL.rotation.x=h),n.mesh.userData.armR&&(n.mesh.userData.armR.rotation.x=h)}else n.mesh.userData.armL&&(n.mesh.userData.armL.rotation.x+=(0-n.mesh.userData.armL.rotation.x)*Math.min(1,i*3));n.bubbleTimer>0&&(n.bubbleTimer-=i,n.bubbleEl.textContent=n.bubbleText,n.bubbleEl.classList.add("visible"),n.bubbleTimer<=0&&n.bubbleEl.classList.remove("visible"));const u=cu(n.x,1.55,n.z),d=cu(n.x,2.05,n.z);u.behind?(n.nameEl.style.display="none",n.bubbleEl.style.display="none"):(n.nameEl.style.display="",n.nameEl.style.left=u.sx+"px",n.nameEl.style.top=u.sy-2+"px",n.bubbleEl.style.display="",n.bubbleEl.style.left=d.sx+"px",n.bubbleEl.style.top=d.sy-30+"px")}Mr>0&&(Mr-=i)}function gM(){const i=zo;if(!i)return;if(Ui(i.x,i.z),i.mesh.rotation.y=Math.atan2(Et.position.x-i.x,Et.position.z-i.z),Ie={type:"talk",t:0,done:!1,blinked:!1},Cn("talk",.7),cl.has(i.def.id)||(cl.add(i.def.id),ei("talkCount")),Yn("talk"),!i.requestState||i.requestState.cooldown>0){i.bubbleText=i.def.phrase,i.bubbleTimer=3,i.bubbleEl.classList.add("visible");return}const t=i.requestState;if(t.type==="carrot")Lt.carrot>=t.count?(Lt.carrot-=t.count,Pi(),Lt.coins+=10,nn(),ri(5),t.cooldown=60,ei("requestCount"),Cn("coin"),i.bubbleText="THANKS! +10🪙",i.bubbleTimer=3,i.bubbleEl.classList.add("visible"),Jt("+10 COINS FROM MAYA!"),Se(i.x,i.z,16764992,7)):(i.bubbleText=t.desc,i.bubbleTimer=2.5,i.bubbleEl.classList.add("visible"));else if(t.type==="fish"){const e=["smallFish","roundFish","blueFish","goldFish","rareKoi"].find(n=>Lt[n]>0);e?(Lt[e]--,Pi(),Lt.coins+=10,nn(),ri(5),t.cooldown=60,ei("requestCount"),i.bubbleText="NICE CATCH! +10🪙",i.bubbleTimer=3,i.bubbleEl.classList.add("visible"),Jt("+10 COINS FROM FINN!"),Se(i.x,i.z,16764992,7)):(i.bubbleText=t.desc,i.bubbleTimer=2.5,i.bubbleEl.classList.add("visible"))}else if(t.type==="sell"){const e=Qo-t.soldAt;e>=t.count?(Lt.coins+=10,nn(),ri(5),t.cooldown=60,t.soldAt=Qo,ei("requestCount"),i.bubbleText="GREAT TRADER! +10🪙",i.bubbleTimer=3,i.bubbleEl.classList.add("visible"),Jt("+10 COINS FROM PIP!"),Se(i.x,i.z,16764992,7)):(i.bubbleText=`SELL ${t.count-e} MORE!`,i.bubbleTimer=2.5,i.bubbleEl.classList.add("visible"))}else t.type==="bread"&&(Lt.bread>=t.count?(Lt.bread-=t.count,Pi(),Lt.coins+=10,nn(),ri(5),t.cooldown=60,ei("requestCount"),i.bubbleText="DELICIOUS! +10🪙",i.bubbleTimer=3,i.bubbleEl.classList.add("visible"),Jt("+10 COINS FROM LULU!"),Se(i.x,i.z,16764992,7)):(i.bubbleText=t.desc,i.bubbleTimer=2.5,i.bubbleEl.classList.add("visible")))}let Vt=null,lu=null;function _M(){if(Ue)return tv();const i=Et.position.x,t=Et.position.z;if(Us("READY"))return"HARVEST";if(Us("SEEDED"))return"WATER";if(Us("EMPTY"))return"PLANT";if(Math.hypot(i-17,t-3)<6.5)return Be?.phase==="ready"?"PULL":Be?null:"FISH";if(Math.hypot(i,t+18)<6.5)return"SELL";if(Math.hypot(i+4.5,t+5.5)<2.5)return"UPGRADE";if(Math.hypot(i-5,t+4.5)<2.5)return"GOALS";if(Math.hypot(i+4.5,t+16.5)<2.5)return"HIRE";if(Math.hypot(i,t-12)<2.5)return"ENTER";zo=null;let r=1/0;for(const o of ss){const a=Math.hypot(i-o.x,t-o.z);a<2.8&&a<r&&(r=a,zo=o)}return zo?"TALK":!di.caught&&Math.hypot(i-di.x,t-di.z)<1.8?"CATCH":Math.hypot(i-1.5,t-13)<2?"RING":ze.phase==="idle"&&Math.hypot(i,t+17)<3.5?"PLAY":ze.phase==="pick"&&Math.hypot(i,t+17)<3.5?"PICK":!Pt.playing&&Math.hypot(i+4.5,t-5.5)<3.2?"MOLES":null}function vM(i,t){for(const e of Ks)if(Math.hypot(i-e.x,t-e.z)<3.8)return"FARM";return Math.hypot(i-17,t-3)<6.5?"POND":Math.hypot(i,t+18)<6.5?"MARKET":null}function MM(){if(Vt==="ENTER"){j_();return}if(Vt==="EXIT"){Q_();return}if(Vt==="OUTFIT"){ev();return}Vt==="PLANT"?Ov():Vt==="WATER"?Bv():Vt==="HARVEST"?zv():Vt==="FISH"?Vv():Vt==="PULL"?Hv():Vt==="SELL"?Xv():Vt==="UPGRADE"?Lh():Vt==="GOALS"?Ph():Vt==="HIRE"?Sh():Vt==="REST"?Iv():Vt==="TALK"?gM():Vt==="CATCH"?EM():Vt==="RING"?AM():Vt==="PLAY"?CM():Vt==="PICK"?DM():Vt==="WHACK"?tapMole():Vt==="MOLES"&&LM()}fh(Uo);Et.position.set(0,0,3);mM();rM(-4.5,-5.5);sM(5,-4.5);iM(-4.5,-16.5);Rh();Ch("SUNNY");const Oh=document.getElementById("generate-btn"),yM=document.getElementById("random-btn"),ta=document.getElementById("avatar-input");Oh.addEventListener("click",()=>{const i=ta.value.trim();i&&$o(qo(i))});yM.addEventListener("click",()=>{const i=ph();ta.value=i,$o(qo(i))});ta.addEventListener("keydown",i=>{i.key==="Enter"&&(Oh.click(),ta.blur())});(function(){const i=document.getElementById("avatar-help-btn"),t=document.getElementById("avatar-help-popup"),e=document.getElementById("avatar-help-ok");if(!i||!t)return;function n(s){s.stopPropagation(),t.classList.toggle("open")}i.addEventListener("pointerup",n),e.addEventListener("pointerup",s=>{s.stopPropagation(),t.classList.remove("open")}),document.addEventListener("pointerup",()=>{t.classList.remove("open")}),t.addEventListener("pointerup",s=>s.stopPropagation())})();window.addEventListener("message",i=>{const t=i.data;!t||t.type});const bi=(i,t,e)=>i+(t-i)*e;let Ie=null;function Ui(i,t){const e=i-Et.position.x,n=t-Et.position.z;(Math.abs(e)>.01||Math.abs(n)>.01)&&(Et.rotation.y=Math.atan2(e,n))}const du=.32,Bh=[[0,12,1.9],[0,0,1.6],[-7,8.5,1.9],[7,8,1.9],[-8,-6,1.9],[8,-5.5,1.9],[-14,10,1.9],[14,10.5,1.9],[-7,-13,1.9],[7.5,-13.5,1.9],[-6.2,1.2,.75],[5.8,.8,.75],[-1.2,7.2,.75],[2.8,-6.5,.75],[-5.5,4,.72],[-9.5,3.5,.7],[-13.5,3.2,.68],[5.5,4,.72],[9.5,3.5,.7],[13.5,3.2,.68],[-2.5,-7.5,.7],[2.5,-7.5,.68],[-2.5,-12.5,.66],[2.5,-12.5,.64],[-20,12,.7],[21,10,.68],[8,20,.66],[-10,19,.64],[18,-14,.62],[-18,-13,.62],[17,3,3.4],[0,-19,2.2],[6.5,6.2,1],[-4.5,-5.5,.7],[5,-4.5,.7],[-4.5,-16.5,.7]];let uu=performance.now();function zh(){requestAnimationFrame(zh);const i=performance.now(),t=Math.min((i-uu)/1e3,.05);if(uu=i,uh.forEach(s=>{s.group.position.x+=s.speed,s.group.position.x>22&&(s.group.position.x=-22)}),Ll.intensity=.32+Math.sin(i*.002)*.06,jc&&(jc.position.y=.53+Math.sin(i*.0026)*.02),Le){const s=.96+.08*Math.sin(i*.0028);Le.scale.setScalar(s),Le.material.opacity=.55+.28*Math.sin(i*.0022)}Ri>0&&(Ri=Math.max(0,Ri-t)),Ue||av(i);for(const s of Ks)s.state==="WATERED"&&s.readyTimer>0&&(s.readyTimer-=t*(Vr==="RAINY"?1.4:1),s.readyTimer<=0&&(s.state="READY",s.readyTimer=0,Gr(s),Cs("READY!"))),s.state==="READY"&&s.indicator?.userData.glowBall&&(s.indicator.userData.glowBall.material.emissiveIntensity=.2+Math.sin(i*.004)*.28);Be?.phase==="waiting"&&(Be.elapsed+=t,Be.elapsed>=Be.duration&&(Be.phase="ready",Be.biteTimer=0,Cs("BITE!"))),Be?.phase==="ready"&&(Be.biteTimer=(Be.biteTimer||0)+t,Be.biteTimer>6&&(Be=null,ol(),Cs("FISH ESCAPED"),Jt("FISH ESCAPED!"))),Di&&(Be?.phase==="waiting"?Di.position.y=.12+Math.sin(i*.0028)*.04:Be?.phase==="ready"?Di.position.y=-.01:ol()),Ue||kv(t),Ue||Kv(t),Ue||uM(t),Ue||xM(t),Oo>0&&(Oo-=t,Oo<=0&&sl.classList.remove("visible"));{const s=Math.sqrt(fe.dx*fe.dx+fe.dy*fe.dy);yi=fe.active&&s>.06}if(!Fs){Mn+=t;const s=Mn*5.8;ou&&!yi&&(Ss=1,Ie=null),ou=yi,yi&&(Ie=null),Ss>0&&(Ss=Math.max(0,Ss-t*3));let r=yi?Math.abs(Math.sin(s))*.072:Math.abs(Math.sin(Mn*1.4))*.016;if(Ss>0&&(r+=Math.sin(Ss*Math.PI)*.13),Et.position.y=r,Q.armL){const o=1-Math.exp(-t*9),a=1-Math.exp(-t*4);if(yi){const c=Math.sin(s),l=1-Math.abs(c);Q.armL.rotation.x=bi(Q.armL.rotation.x,c*.62,o),Q.armR.rotation.x=bi(Q.armR.rotation.x,-c*.62,o),Q.armL.rotation.z=bi(Q.armL.rotation.z,.42+Math.max(0,c)*.1,o),Q.armR.rotation.z=bi(Q.armR.rotation.z,-.42-Math.max(0,-c)*.1,o),Q.handL&&(Q.handL.position.y=Q.handL.userData.baseY+c*.06),Q.handR&&(Q.handR.position.y=Q.handR.userData.baseY-c*.06),Q.body.scale.y=1+l*-.05+(1-l)*.06,Q.head.rotation.x=bi(Q.head.rotation.x,-c*.05,o),Q.head.rotation.z=bi(Q.head.rotation.z,c*.032,o),Q.head.rotation.y=bi(Q.head.rotation.y,0,o),Q.head.position.y=bi(Q.head.position.y,Q.HC-l*.014,o),Q.shadow&&Q.shadow.scale.setScalar(1-Math.abs(c)*.24)}else if(Ie){Ie.t+=t;const c=Ie.t;!Ie.blinked&&c>.12&&(Ie.blinked=!0,Yi=.18);const l=Math.max(0,Math.sin(Math.min(c/.36,1)*Math.PI))*.13;Et.position.y=Math.abs(Math.sin(Mn*1.4))*.016+l,Q.shadow&&Q.shadow.scale.setScalar(Math.max(.55,1-l*5)),Q.armL.rotation.x+=(0-Q.armL.rotation.x)*a,Q.armR.rotation.x+=(0-Q.armR.rotation.x)*a,Q.armL.rotation.z+=(.42-Q.armL.rotation.z)*a,Q.armR.rotation.z+=(-.42-Q.armR.rotation.z)*a,Q.head.rotation.x+=(0-Q.head.rotation.x)*a,Q.head.position.y+=(Q.HC-Q.head.position.y)*a,Q.handL&&(Q.handL.position.y+=(Q.handL.userData.baseY-Q.handL.position.y)*a),Q.handR&&(Q.handR.position.y+=(Q.handR.userData.baseY-Q.handR.position.y)*a),Q.body.scale.y=1+Math.sin(Mn*1.4)*.028,Q.head.rotation.z=Math.sin(Mn*.55)*.034,Q.head.rotation.y=Math.sin(Mn*.38)*.038;const u=Ie.type==="fishing"?9999:Ie.type==="rest"?1.2:.7;!Ie.done&&c>=u&&(Ie.done=!0,Ie=null)}else Q.armL.rotation.x+=(0-Q.armL.rotation.x)*a,Q.armR.rotation.x+=(0-Q.armR.rotation.x)*a,Q.armL.rotation.z+=(.42-Q.armL.rotation.z)*a,Q.armR.rotation.z+=(-.42-Q.armR.rotation.z)*a,Q.head.rotation.x+=(0-Q.head.rotation.x)*a,Q.head.position.y+=(Q.HC-Q.head.position.y)*a,Q.handL&&(Q.handL.position.y+=(Q.handL.userData.baseY-Q.handL.position.y)*a),Q.handR&&(Q.handR.position.y+=(Q.handR.userData.baseY-Q.handR.position.y)*a),Q.body.scale.y=1+Math.sin(Mn*1.4)*.03,Q.head.rotation.z=Math.sin(Mn*.55)*.038,Q.head.rotation.y=Math.sin(Mn*.38)*.04,Q.armL.rotation.x+=Math.sin(Mn*1.2)*.08,Q.armR.rotation.x+=-Math.sin(Mn*1)*.08,Q.shadow&&Q.shadow.scale.setScalar(1);if(tc-=t,tc<=0&&(Yi=.18,tc=2.5+Math.random()*3.5),Yi>0&&(Yi=Math.max(0,Yi-t)),Q.eyeL){const c=Yi>0?Yi/.18:0,l=Math.sin(c*Math.PI),u=(Q.eyeL.userData.baseScaleY||1)*(1-l*.92);Q.eyeL.scale.y=u,Q.eyeR.scale.y=u}}}const e=Math.sqrt(fe.dx*fe.dx+fe.dy*fe.dy);if(yi&&!Fs){const s=Zo,r=fe.dx*Math.cos(s)+fe.dy*Math.sin(s),o=-fe.dx*Math.sin(s)+fe.dy*Math.cos(s),a=Math.sqrt(r*r+o*o)||1,c=4.5*t*Math.min(e,1),l=Et.position.x+r/a*c,u=Et.position.z+o/a*c;if(Ue){let d=l,h=u;for(const[p,x,v]of K_){const m=d-p,f=h-x,A=Math.hypot(m,f),g=du+v;if(A<g&&A>.001){const b=g/A;d=p+m*b,h=x+f*b}}Et.position.x=Math.max(-2.35,Math.min(2.35,d)),Et.position.z=Math.max(-2.55,Math.min(2.55,h))}else{let d=l,h=u;for(const[p,x,v]of Bh){const m=d-p,f=h-x,A=Math.hypot(m,f),g=du+v;if(A<g&&A>.001){const b=g/A;d=p+m*b,h=x+f*b}}Math.sqrt(d*d+h*h)<23&&(Et.position.x=d,Et.position.z=h)}Et.rotation.y=Math.atan2(r/a,o/a)}Vt=yi?null:_M();const n=vM(Et.position.x,Et.position.z);if(n!==lu&&(lu=n,n&&Cs(n)),Vt&&performance.now()>el){zn.style.display="flex",zn.textContent=Vt;const s=Vt==="PLANT"||Vt==="WATER"||Vt==="HARVEST"?"farm":Vt==="FISH"||Vt==="PULL"?"pond":Vt==="SELL"?"market":Vt==="UPGRADE"?"upgrade":Vt==="GOALS"?"goals":Vt==="HIRE"?"market":Vt==="REST"||Vt==="ENTER"||Vt==="EXIT"?"home":Vt==="OUTFIT"||Vt==="TALK"?"npc":Vt==="CATCH"||Vt==="RING"?"farm":Vt==="PLAY"||Vt==="PICK"?"market":Vt==="MOLES"?"farm":"";zn.className!==`zone-${s}`&&(zn.className=`zone-${s}`)}else!Vt&&performance.now()>el&&(zn.style.display="none");Sv(t),Ev(t),Il(t),Ue&&mr&&(mr.intensity=.85+.18*Math.sin(i*.0019)),Ue||NM(t,i),pi.render(Ue?yn:nt,An)}function In(i,t,e,n=8){for(let s=0;s<n;s++){const r=dt(.07+Math.random()*.06,4,e);r.position.set(i,.4,t),nt.add(r);const o=Math.random()*Math.PI*2,a=1.5+Math.random()*2,c=Math.cos(o)*a,l=2+Math.random()*2,u=Math.sin(o)*a;let d=0;const h=setInterval(()=>{d+=.03,r.position.x+=c*.03,r.position.y+=l*.03-.04*d,r.position.z+=u*.03,r.material.opacity=Math.max(0,1-d),r.material.transparent=!0,d>=1&&(nt.remove(r),r.geometry.dispose(),r.material.dispose(),clearInterval(h))},30)}}function Hr(i,t,e,n){const s=document.createElement("div");s.textContent=n,s.style.cssText="position:fixed;pointer-events:none;font-size:16px;font-weight:900;color:#fff;text-shadow:0 0 6px rgba(0,0,0,0.6);z-index:40;transform:translate(-50%,-50%);white-space:nowrap;",document.body.appendChild(s);const r=performance.now();(function o(){const a=(performance.now()-r)/1e3;if(a>1.1){s.remove();return}const c=new I(i,t+a*1.5,e);if(c.project(An),c.z>1){s.remove();return}s.style.left=(c.x*.5+.5)*rn.w+"px",s.style.top=(-c.y*.5+.5)*rn.h+"px",s.style.opacity=Math.max(0,1-a),requestAnimationFrame(o)})()}const Ir=(()=>{const i=new wt,t=dt(.22,8,16772744);t.position.y=.28,i.add(t);const e=dt(.14,8,16772744);e.position.set(0,.52,.14),i.add(e);const n=Vs(.04,.1,4,16746496);n.rotation.x=Math.PI/2,n.position.set(0,.52,.27),i.add(n);const s=dt(.06,6,16729156);return s.position.set(0,.66,.12),i.add(s),[-.07,.07].forEach(r=>{const o=dt(.035,5,2236962);o.position.set(r,.54,.22),i.add(o)}),[-.08,.08].forEach(r=>{const o=Ht(.025,.1,16752704);o.position.set(r,.05,0),i.add(o)}),[-1,1].forEach(r=>{const o=ct(.06,.12,.2,16768358);o.rotation.z=r*.4,o.position.set(r*.24,.3,0),i.add(o)}),i.position.set(-20,-20,-20),nt.add(i),i})(),di={x:-18,z:6,tx:-18,tz:6,speed:1.4,wanderTimer:0,caught:!1,caughtTimer:0,bobT:0};function bM(i,t){const e=di;if(e.caught){e.caughtTimer-=i,e.caughtTimer<=0&&(e.caught=!1);return}if(e.wanderTimer-=i,e.wanderTimer<=0){const o=Math.random()*Math.PI*2,a=1+Math.random()*3.5;e.tx=-17+Math.cos(o)*a,e.tz=3+Math.sin(o)*a,e.wanderTimer=2+Math.random()*3}const n=e.tx-e.x,s=e.tz-e.z,r=Math.hypot(n,s);r>.1&&(e.x+=n/r*e.speed*i,e.z+=s/r*e.speed*i),e.bobT+=i*5,Ir.position.set(e.x,Math.sin(e.bobT)*.04,e.z),r>.1&&(Ir.rotation.y=Math.atan2(n,s))}function EM(){const i=di;i.caught=!0,i.caughtTimer=4,Lt.coins+=3,nn(),In(i.x,i.z,16777215,10),Jt("🐔 NICE CATCH! +3🪙");const t=Ir;let e=0;const n=setInterval(()=>{e+=.05,t.position.y=Math.sin(e*Math.PI)*.6,e>=1&&(t.position.y=0,clearInterval(n))},30)}const wi=[[16,.01,5],[18.5,.01,2],[15.5,.01,-.5]],kh=[],Ur=(()=>{const i=new wt,t=dt(.18,8,4500036);t.position.y=.18,i.add(t);const e=dt(.065,6,8978312);e.position.set(-.1,.3,.08),i.add(e);const n=dt(.065,6,8978312);return n.position.set(.1,.3,.08),i.add(n),[-.09,.09].forEach(s=>{const r=dt(.038,5,2236962);r.position.set(s,.3,.12),i.add(r)}),i.position.set(wi[0][0],.25,wi[0][2]),nt.add(i),i})();wi.forEach(([i,t,e])=>{const n=It(.55,.55,.04,12,2263074);n.position.set(i,t,e),nt.add(n),kh.push(n)});const be={padIdx:0,jumpCount:0,jumping:!1,jumpT:0,fromPos:new I,toPos:new I,rewarded:!1};function Gh(){if(be.jumping)return;let i=(be.padIdx+1+Math.floor(Math.random()*(wi.length-1)))%wi.length;const t=wi[be.padIdx],e=wi[i];be.fromPos.set(t[0],.25,t[2]),be.toPos.set(e[0],.25,e[2]),be.padIdx=i,be.jumping=!0,be.jumpT=0,be.jumpCount++,In(e[0],e[2],11202303,6),be.jumpCount>=3&&!be.rewarded&&(be.rewarded=!0,setTimeout(()=>{Lt.smallFish=(Lt.smallFish||0)+1,Jt("🐸 3 JUMPS! +1 FISH"),be.jumpCount=0,be.rewarded=!1},600))}function SM(i){if(be.jumping){be.jumpT=Math.min(1,be.jumpT+i*2.2);const n=be.jumpT;Ur.position.lerpVectors(be.fromPos,be.toPos,n),Ur.position.y=.25+Math.sin(n*Math.PI)*1,n>=1&&(be.jumping=!1)}const t=Et.position.x,e=Et.position.z;wi.forEach(([n,,s],r)=>{!be.jumping&&r!==be.padIdx&&Math.hypot(t-n,e-s)<1&&Gh()}),kh.forEach((n,s)=>{n.material.color.setHex(s===be.padIdx?3394611:2263074)})}const TM=(()=>{const i=new wt,t=ct(.06,.06,.5,12298888);t.position.set(0,2.7,-.25),t.rotation.z=0,i.add(t);const e=It(.12,.08,.22,8,16768392,{metalness:.4,roughness:.4});e.position.set(0,2.42,-.25),i.add(e);const n=dt(.05,6,13408512);n.position.set(0,2.25,-.25),i.add(n);const s=It(.012,.012,.18,4,12303291);return s.position.set(0,2.33,-.25),i.add(s),i.position.set(1.5,0,13),nt.add(i),i})(),cn={taps:0,swingT:0,swingAmp:0,tapTimer:0};function AM(){cn.taps++,cn.swingAmp=.18,cn.tapTimer=4,Cn("harvest",.3),In(1.5,13,16772744,4),cn.taps>=5?(cn.taps=0,fa(10),Jt("🔔 CHIME! +10⚡"),In(1.5,13,16777130,12)):Jt(`🔔 RING (${cn.taps}/5)`)}function wM(i){cn.tapTimer-=i,cn.tapTimer<=0&&(cn.taps=0),cn.swingT+=i*8,cn.swingAmp=Math.max(0,cn.swingAmp-i*.6),TM.rotation.z=Math.sin(cn.swingT)*cn.swingAmp}const ur=[[-2,-17],[0,-17],[2,-17]],En=[];let ji=0;const ea=[];ur.forEach(([i,t],e)=>{const n=new wt,s=ct(.55,.42,.55,e===0?16750916:e===1?4500223:16733610);s.position.y=.21,n.add(s);const r=ct(.6,.07,.6,e===0?16742178:e===1?2263261:14496665);r.position.y=.455,n.add(r),n.position.set(i,0,t),nt.add(n),En.push(n);const o=dt(.1,8,16768256);o.position.set(i,.7,t),o.visible=!1,nt.add(o),ea.push(o)});const ze={phase:"idle",timer:0,shuffleStep:0,maxSteps:6};function CM(){ze.phase==="idle"&&(ji=Math.floor(Math.random()*3),En.forEach(i=>i.position.y=0),ea.forEach(i=>i.visible=!1),ze.phase="shuffle",ze.timer=0,ze.shuffleStep=0,ze.maxSteps=6+Math.floor(Math.random()*4),Jt("👀 WATCH THE BOX!"))}function RM(i){ze.phase==="pick"&&(ze.phase="result",ea.forEach((t,e)=>{t.visible=e===ji}),i===ji?(Lt.coins+=5,nn(),Jt("✨ CORRECT! +5🪙"),In(ur[i][0],ur[i][1],16768256,10)):(Jt("💥 WRONG BOX!"),In(ur[i][0],ur[i][1],16737860,5)),setTimeout(()=>{En.forEach(t=>t.position.y=0),ea.forEach(t=>t.visible=!1),ze.phase="idle"},1800))}function PM(i){if(ze.phase==="shuffle"&&(ze.timer+=i,ze.timer>.28)){ze.timer=0,ze.shuffleStep++;const t=Math.floor(Math.random()*3);let e=(t+1+Math.floor(Math.random()*2))%3;[En[t].position.x,En[e].position.x]=[En[e].position.x,En[t].position.x],[En[t].position.z,En[e].position.z]=[En[e].position.z,En[t].position.z],ji===t?ji=e:ji===e&&(ji=t),ze.shuffleStep>=ze.maxSteps&&(ze.phase="pick",Jt("👇 PICK A BOX!"))}}function DM(){if(ze.phase!=="pick")return;const i=Et.position.x,t=Et.position.z;let e=-1,n=999;En.forEach((s,r)=>{const o=Math.hypot(i-s.position.x,t-s.position.z);o<n&&(n=o,e=r)}),e>=0&&RM(e)}const na=[[-4,4],[-5.5,6],[-3,7]],Rs=[];na.forEach(([i,t])=>{const e=It(.3,.28,.08,12,5913104);e.position.set(i,-.02,t),nt.add(e);const n=new wt,s=Ht(.14,.1,9134144);s.position.y=.22,n.add(s);const r=dt(.12,8,10514512);r.position.y=.4,n.add(r);const o=dt(.045,6,16746632);o.position.set(0,.42,.11),n.add(o),[-.07,.07].forEach(a=>{const c=dt(.028,5,2236962);c.position.set(a,.44,.09),n.add(c)}),n.position.set(i,-.6,t),nt.add(n),Rs.push(n)});const Pt={active:-1,popTimer:0,waitTimer:2,popY:-.6,popPhase:"idle",playing:!1,gameTimer:0,hitCount:0};function LM(){Pt.playing||(Pt.playing=!0,Pt.gameTimer=8,Pt.hitCount=0,Pt.popPhase="wait",Pt.waitTimer=.4,Pt.active=-1,Jt("🐾 TAP THE MOLES! (0/3)"))}function FM(){if(!Pt.playing||Pt.active<0||Pt.popPhase!=="up")return;const i=na[Pt.active][0],t=na[Pt.active][1];kr("pop"),In(i,t,16768392,6),Hr(i,.8,t,"⭐ HIT!"),Pt.popPhase="hit",Pt.popTimer=.25,Pt.hitCount++,Pt.hitCount>=3?(Pt.playing=!1,ri(5),Jt("🎉 NICE! +5 MOOD"),ss.forEach(e=>{e.group&&(e.group.scale.y=1.2,setTimeout(()=>e.group&&(e.group.scale.y=1),700))})):Jt(`🐾 TAP THE MOLES! (${Pt.hitCount}/3)`)}function IM(i){if(!Pt.playing){Rs.forEach(t=>{t.position.y>-.58&&(t.position.y=-.6)}),Pt.active=-1;return}if(Pt.gameTimer-=i,Pt.gameTimer<=0){Pt.playing=!1,Pt.hitCount<3&&Jt("😅 TRY AGAIN!"),Rs.forEach(t=>{t.position.y=-.6}),Pt.active=-1,Pt.popPhase="idle";return}if(Pt.popPhase==="wait")Pt.waitTimer-=i,Pt.waitTimer<=0&&(Pt.active=Math.floor(Math.random()*na.length),Pt.popPhase="up",Pt.popTimer=1.4);else if(Pt.popPhase==="up"||Pt.popPhase==="hit"){Pt.popTimer-=i;const t=Pt.popPhase==="up"?.12:-.6;Pt.popY+=(t-Pt.popY)*i*12,Pt.active>=0&&(Rs[Pt.active].position.y=Pt.popY),Pt.popTimer<=0&&(Pt.active>=0&&(Rs[Pt.active].position.y=-.6),Pt.active=-1,Pt.popPhase="wait",Pt.waitTimer=.5+Math.random()*.8,Pt.popY=-.6)}}const ni=(()=>{const i=new wt,t=Ht(.16,.18,15649952);t.rotation.z=Math.PI/2,t.position.set(0,.17,0),i.add(t);const e=dt(.16,8,15649952);e.position.set(.28,.26,0),i.add(e),[-.07,.07].forEach(r=>{const o=Vs(.05,.1,4,15649952);o.position.set(.32,.42,r),i.add(o)}),[-.06,.06].forEach(r=>{const o=ct(.07,.015,.01,3355443);o.position.set(.34,.28,r),i.add(o)});const n=dt(.025,5,16751001);n.position.set(.45,.24,0),i.add(n);const s=Ht(.045,.28,15649952);return s.rotation.z=-.7,s.position.set(-.3,.1,0),i.add(s),i.position.set(-3.5,0,4.5),i.rotation.y=.8,nt.add(i),i})(),ul=3,hl=3,Oe=(()=>{const i=new wt,t=Ht(.14,.2,13404228);t.rotation.z=Math.PI/2,t.position.set(0,.32,0),i.add(t);const e=dt(.15,8,13404228);e.position.set(.26,.38,0),i.add(e);const n=ct(.13,.09,.12,12285747);n.position.set(.39,.33,0),i.add(n),[-.08,.08].forEach(o=>{const a=ct(.06,.11,.07,11167266);a.position.set(.28,.47,o),a.rotation.z=.25*Math.sign(o),i.add(a)}),[-.07,.07].forEach(o=>{const a=dt(.025,5,2236962);a.position.set(.41,.38,o),i.add(a)});const s=dt(.036,5,2236962);s.position.set(.46,.35,0),i.add(s),[.12,-.12].forEach(o=>{[.08,-.08].forEach(a=>{const c=It(.036,.036,.18,6,13404228);c.position.set(o,.09,a),i.add(c)})});const r=Ht(.032,.17,13404228);return r.rotation.z=.9,r.position.set(-.25,.32,0),r.userData.isTail=!0,i.add(r),i.position.set(ul,0,hl),i.rotation.y=2,nt.add(i),i})(),hu=Oe.children.find(i=>i.userData.isTail),tn={following:!1,followTimer:0,bobT:0,wagT:0,returning:!1},zl=[[17,2],[19,4],[15,5]].map(([i,t])=>{const e=new wt,n=dt(.2,8,16772744);n.scale.y=.65,n.position.y=.18,e.add(n);const s=dt(.12,8,5614165);s.position.set(.18,.3,0),e.add(s);const r=ct(.12,.06,.08,16750848);return r.position.set(.3,.26,0),e.add(r),e.position.set(i,0,t),nt.add(e),{group:e,x:i,z:t,angle:Math.random()*Math.PI*2,speed:.5+Math.random()*.4}}),Vh=[[-6,2],[5,5],[-3,-5],[7,1]].map(([i,t],e)=>{const n=new wt,s=[16746700,16755268,8956671,16737962][e%4];return[-1,1].forEach(r=>{const o=ct(.18,.01,.14,s);o.position.set(r*.12,0,0),o.rotation.y=r*.3,n.add(o)}),n.position.set(i,1,t),nt.add(n),{group:n,bx:i,bz:t,phase:Math.random()*Math.PI*2}});function UM(i,t){if(ni.position.y=Math.sin(t*7e-4)*.025,tn.wagT+=i*7,hu&&(hu.rotation.z=.9+Math.sin(tn.wagT)*(tn.following?.8:.3)),tn.following){tn.followTimer-=i,tn.bobT+=i*8;const e=Et.position.x,n=Et.position.z,s=e-Oe.position.x,r=n-Oe.position.z,o=Math.hypot(s,r);o>.9&&(Oe.position.x+=s/o*2.6*i,Oe.position.z+=r/o*2.6*i,Oe.rotation.y=Math.atan2(s,r)),Oe.position.y=Math.abs(Math.sin(tn.bobT))*.08,tn.followTimer<=0&&(tn.following=!1,tn.returning=!0,Oe.position.y=0)}if(tn.returning){const e=ul-Oe.position.x,n=hl-Oe.position.z,s=Math.hypot(e,n);s>.25?(Oe.position.x+=e/s*1.8*i,Oe.position.z+=n/s*1.8*i,Oe.rotation.y=Math.atan2(e,n)):(Oe.position.x=ul,Oe.position.z=hl,tn.returning=!1)}zl.forEach(e=>{e.angle+=i*e.speed;const n=1+Math.sin(e.angle*.3)*.8,s=17+Math.cos(e.angle)*n*1.4,r=3+Math.sin(e.angle)*n,o=s-e.group.position.x,a=r-e.group.position.z;e.group.position.x=s,e.group.position.z=r,e.group.position.y=.02+Math.sin(t*.002+e.angle)*.03,Math.hypot(o,a)>1e-4&&(e.group.rotation.y=Math.atan2(o,a)-Math.PI/2)}),Vh.forEach(e=>{e.phase+=i*1.6,e.group.position.x=e.bx+Math.sin(e.phase)*.8,e.group.position.z=e.bz+Math.cos(e.phase*.7)*.6,e.group.position.y=.8+Math.sin(e.phase*1.3)*.25,e.group.rotation.y=e.phase,e.group.children.forEach((n,s)=>{n.rotation.z=(s===0?1:-1)*Math.sin(e.phase*6)*.5})})}function NM(i,t){bM(i),SM(i),wM(i),PM(i),IM(i),UM(i,t),$M()}function $i(i){const t=[];return i.traverse(e=>{e.isMesh&&t.push(e)}),t}let To=null;function OM(){return To||(To=[{meshes:$i(ni),kind:"cat",react:BM},{meshes:$i(Oe),kind:"dog",react:zM},{meshes:$i(Ir),kind:"chicken",react:kM},{meshes:$i(Ur),kind:"frog",react:VM},...zl.map(i=>({meshes:$i(i.group),kind:"duck",react:()=>GM(i)})),...Vh.map(i=>({meshes:$i(i.group),kind:"butterfly",react:()=>HM(i)}))],To)}function BM(){kr("meow"),Hr(ni.position.x,1,ni.position.z,"🐱 MEOW"),In(ni.position.x,ni.position.z,16746683,5);const i=ni.scale;i.set(1.15,.8,1.15),setTimeout(()=>i.set(.9,1.3,.9),140),setTimeout(()=>i.set(1,1,1),340)}function zM(){kr("bark"),Hr(Oe.position.x,1,Oe.position.z,"🐕 WOOF!"),tn.following=!0,tn.followTimer=5,tn.returning=!1}function kM(){Jt("🐔 BAWK!"),In(di.x,di.z,16777215,5);const i=Ir;let t=0;const e=setInterval(()=>{t+=.07,i.position.y=Math.abs(Math.sin(t*Math.PI))*.45,t>=1&&(i.position.y=0,clearInterval(e))},30)}function GM(i){kr("quack"),Hr(i.group.position.x,.7,i.group.position.z,"🦆 QUACK!"),In(i.group.position.x,i.group.position.z,11202303,5),i.speed=2.2,setTimeout(()=>{i.speed=.5+Math.random()*.4},2500)}function VM(){be.jumping||(kr("boing"),Hr(Ur.position.x,.9,Ur.position.z,"🐸 HOP!"),Gh())}function HM(i){Jt("🦋 FLUTTER!"),In(i.group.position.x,i.group.position.z,16746700,6),i.phase+=Math.PI}const ic=new ip;let Hh=0,Wh=0;function WM(i,t){if(Ue)return;const e=Ni.getBoundingClientRect(),n=(i-e.left)/e.width*2-1,s=-((t-e.top)/e.height)*2+1;if(ic.setFromCamera({x:n,y:s},An),Pt.playing&&Pt.active>=0&&Pt.popPhase==="up"){const l=$i(Rs[Pt.active]);if(ic.intersectObjects(l,!1).length){FM();return}}const r=OM(),o=r.flatMap(l=>l.meshes);if(!o.length)return;const a=ic.intersectObjects(o,!1);if(!a.length)return;const c=a[0].object;for(const l of r)if(l.meshes.includes(c)){l.react();return}}Ni.addEventListener("pointerdown",i=>{Hh=i.clientX,Wh=i.clientY},{capture:!0});Ni.addEventListener("pointerup",i=>{Math.hypot(i.clientX-Hh,i.clientY-Wh)<12&&WM(i.clientX,i.clientY)},{capture:!0});function XM(){if(Ue)return!0;const i=Et.position.x,t=Et.position.z;for(const e of Ks)if(Math.hypot(i-e.x,t-e.z)<3.8)return!0;if(Math.hypot(i-17,t-3)<6.5||Math.hypot(i,t+18)<6.5||Math.hypot(i+4.5,t+5.5)<2.5||Math.hypot(i-5,t+4.5)<2.5||Math.hypot(i+4.5,t+16.5)<2.5||Math.hypot(i,t-12)<2.5)return!0;for(const e of ss)if(Math.hypot(i-e.x,t-e.z)<2.8)return!0;return!1}const Ei=document.getElementById("animal-hint"),YM=[{get pos(){return{x:ni.position.x,y:.7,z:ni.position.z}},emoji:"🐱",r:2.4},{get pos(){return{x:Oe.position.x,y:.7,z:Oe.position.z}},emoji:"🐕",r:2.4},{get pos(){return{x:di.x,y:.7,z:di.z}},emoji:"🐔",r:2.2}];function qM(){return zl.map(i=>({get pos(){return{x:i.group.position.x,y:.5,z:i.group.position.z}},emoji:"🦆",r:2.2}))}let sc=null;function $M(){if(!Ei)return;if(Ue||XM()){Ei.style.display="none";return}sc||(sc=qM());const i=[...YM,...sc],t=Et.position.x,e=Et.position.z;let n=null,s=1/0;for(const l of i){const{x:u,z:d}=l.pos,h=Math.hypot(t-u,e-d);h<l.r&&h<s&&(s=h,n=l)}if(!n){Ei.style.display="none";return}const{x:r,y:o,z:a}=n.pos,c=new I(r,o+.5,a);if(c.project(An),c.z>1){Ei.style.display="none";return}Ei.style.display="block",Ei.style.left=(c.x*.5+.5)*rn.w+"px",Ei.style.top=(-c.y*.5+.5)*rn.h+"px",Ei.textContent=n.emoji}Il();zh();setTimeout(()=>{const i=document.getElementById("loading-screen");i&&(i.classList.add("hidden"),setTimeout(()=>i.remove(),700)),setTimeout(ZM,400)},900);function ZM(){const i=[{icon:"🕹️",title:"MOVE AROUND",desc:"Use the joystick to walk around town."},{icon:"🌱",title:"FARM & FISH",desc:"Grow crops and catch fish to earn coins."},{icon:"🛒",title:"SELL & BUY",desc:"Visit the market to sell items and buy food."},{icon:"⭐",title:"DAILY GOALS",desc:"Complete goals each day to grow the town."}],t=document.getElementById("tutorial-overlay"),e=document.getElementById("tutorial-icon"),n=document.getElementById("tutorial-title"),s=document.getElementById("tutorial-desc"),r=document.getElementById("tutorial-dots"),o=document.getElementById("tutorial-goal-box"),a=document.getElementById("tutorial-goal-text"),c=document.getElementById("tutorial-next");if(!t)return;const l=r?r.querySelectorAll(".t-dot"):[];let u=0;function d(p){const x=i[p];if(e.textContent=x.icon,n.textContent=x.title,s.textContent=x.desc,l.forEach((v,m)=>v.classList.toggle("active",m===p)),o.classList.remove("visible"),p===i.length-1){const v=Lr[0];v&&(a.textContent=`${v.icon} ${v.label.toUpperCase()} (0/${v.target})`,o.classList.add("visible")),c.textContent="LET'S GO!"}else c.textContent="NEXT"}function h(){t.classList.add("hidden"),setTimeout(()=>{t.remove(),hv()},450)}d(0),t.classList.remove("hidden"),c.addEventListener("pointerup",p=>{p.stopPropagation(),u++,u<i.length?d(u):h()})}
