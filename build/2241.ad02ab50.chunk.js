(self.webpackChunkiktva_strapi_api=self.webpackChunkiktva_strapi_api||[]).push([[2241],{26484:(G,l,I)=>{var C=I(27361);function d(D,h){for(var a=-1,n=h.length,g=Array(n),f=D==null;++a<n;)g[a]=f?void 0:C(D,h[a]);return g}G.exports=d},38914:(G,l,I)=>{var C=I(26484),d=I(99021),D=d(C);G.exports=D},36625:(G,l)=>{l=G.exports=c;var I;typeof process=="object"&&{ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}&&{ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}.NODE_DEBUG&&/\bsemver\b/i.test({ADMIN_PATH:"/admin/",NODE_ENV:"production",STRAPI_ADMIN_BACKEND_URL:"",STRAPI_TELEMETRY_DISABLED:void 0}.NODE_DEBUG)?I=function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:I=function(){},l.SEMVER_SPEC_VERSION="2.0.0";var C=256,d=Number.MAX_SAFE_INTEGER||9007199254740991,D=16,h=l.re=[],a=l.src=[],n=l.tokens={},g=0;function f(e){n[e]=g++}f("NUMERICIDENTIFIER"),a[n.NUMERICIDENTIFIER]="0|[1-9]\\d*",f("NUMERICIDENTIFIERLOOSE"),a[n.NUMERICIDENTIFIERLOOSE]="[0-9]+",f("NONNUMERICIDENTIFIER"),a[n.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",f("MAINVERSION"),a[n.MAINVERSION]="("+a[n.NUMERICIDENTIFIER]+")\\.("+a[n.NUMERICIDENTIFIER]+")\\.("+a[n.NUMERICIDENTIFIER]+")",f("MAINVERSIONLOOSE"),a[n.MAINVERSIONLOOSE]="("+a[n.NUMERICIDENTIFIERLOOSE]+")\\.("+a[n.NUMERICIDENTIFIERLOOSE]+")\\.("+a[n.NUMERICIDENTIFIERLOOSE]+")",f("PRERELEASEIDENTIFIER"),a[n.PRERELEASEIDENTIFIER]="(?:"+a[n.NUMERICIDENTIFIER]+"|"+a[n.NONNUMERICIDENTIFIER]+")",f("PRERELEASEIDENTIFIERLOOSE"),a[n.PRERELEASEIDENTIFIERLOOSE]="(?:"+a[n.NUMERICIDENTIFIERLOOSE]+"|"+a[n.NONNUMERICIDENTIFIER]+")",f("PRERELEASE"),a[n.PRERELEASE]="(?:-("+a[n.PRERELEASEIDENTIFIER]+"(?:\\."+a[n.PRERELEASEIDENTIFIER]+")*))",f("PRERELEASELOOSE"),a[n.PRERELEASELOOSE]="(?:-?("+a[n.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+a[n.PRERELEASEIDENTIFIERLOOSE]+")*))",f("BUILDIDENTIFIER"),a[n.BUILDIDENTIFIER]="[0-9A-Za-z-]+",f("BUILD"),a[n.BUILD]="(?:\\+("+a[n.BUILDIDENTIFIER]+"(?:\\."+a[n.BUILDIDENTIFIER]+")*))",f("FULL"),f("FULLPLAIN"),a[n.FULLPLAIN]="v?"+a[n.MAINVERSION]+a[n.PRERELEASE]+"?"+a[n.BUILD]+"?",a[n.FULL]="^"+a[n.FULLPLAIN]+"$",f("LOOSEPLAIN"),a[n.LOOSEPLAIN]="[v=\\s]*"+a[n.MAINVERSIONLOOSE]+a[n.PRERELEASELOOSE]+"?"+a[n.BUILD]+"?",f("LOOSE"),a[n.LOOSE]="^"+a[n.LOOSEPLAIN]+"$",f("GTLT"),a[n.GTLT]="((?:<|>)?=?)",f("XRANGEIDENTIFIERLOOSE"),a[n.XRANGEIDENTIFIERLOOSE]=a[n.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",f("XRANGEIDENTIFIER"),a[n.XRANGEIDENTIFIER]=a[n.NUMERICIDENTIFIER]+"|x|X|\\*",f("XRANGEPLAIN"),a[n.XRANGEPLAIN]="[v=\\s]*("+a[n.XRANGEIDENTIFIER]+")(?:\\.("+a[n.XRANGEIDENTIFIER]+")(?:\\.("+a[n.XRANGEIDENTIFIER]+")(?:"+a[n.PRERELEASE]+")?"+a[n.BUILD]+"?)?)?",f("XRANGEPLAINLOOSE"),a[n.XRANGEPLAINLOOSE]="[v=\\s]*("+a[n.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+a[n.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+a[n.XRANGEIDENTIFIERLOOSE]+")(?:"+a[n.PRERELEASELOOSE]+")?"+a[n.BUILD]+"?)?)?",f("XRANGE"),a[n.XRANGE]="^"+a[n.GTLT]+"\\s*"+a[n.XRANGEPLAIN]+"$",f("XRANGELOOSE"),a[n.XRANGELOOSE]="^"+a[n.GTLT]+"\\s*"+a[n.XRANGEPLAINLOOSE]+"$",f("COERCE"),a[n.COERCE]="(^|[^\\d])(\\d{1,"+D+"})(?:\\.(\\d{1,"+D+"}))?(?:\\.(\\d{1,"+D+"}))?(?:$|[^\\d])",f("COERCERTL"),h[n.COERCERTL]=new RegExp(a[n.COERCE],"g"),f("LONETILDE"),a[n.LONETILDE]="(?:~>?)",f("TILDETRIM"),a[n.TILDETRIM]="(\\s*)"+a[n.LONETILDE]+"\\s+",h[n.TILDETRIM]=new RegExp(a[n.TILDETRIM],"g");var Y="$1~";f("TILDE"),a[n.TILDE]="^"+a[n.LONETILDE]+a[n.XRANGEPLAIN]+"$",f("TILDELOOSE"),a[n.TILDELOOSE]="^"+a[n.LONETILDE]+a[n.XRANGEPLAINLOOSE]+"$",f("LONECARET"),a[n.LONECARET]="(?:\\^)",f("CARETTRIM"),a[n.CARETTRIM]="(\\s*)"+a[n.LONECARET]+"\\s+",h[n.CARETTRIM]=new RegExp(a[n.CARETTRIM],"g");var q="$1^";f("CARET"),a[n.CARET]="^"+a[n.LONECARET]+a[n.XRANGEPLAIN]+"$",f("CARETLOOSE"),a[n.CARETLOOSE]="^"+a[n.LONECARET]+a[n.XRANGEPLAINLOOSE]+"$",f("COMPARATORLOOSE"),a[n.COMPARATORLOOSE]="^"+a[n.GTLT]+"\\s*("+a[n.LOOSEPLAIN]+")$|^$",f("COMPARATOR"),a[n.COMPARATOR]="^"+a[n.GTLT]+"\\s*("+a[n.FULLPLAIN]+")$|^$",f("COMPARATORTRIM"),a[n.COMPARATORTRIM]="(\\s*)"+a[n.GTLT]+"\\s*("+a[n.LOOSEPLAIN]+"|"+a[n.XRANGEPLAIN]+")",h[n.COMPARATORTRIM]=new RegExp(a[n.COMPARATORTRIM],"g");var z="$1$2$3";f("HYPHENRANGE"),a[n.HYPHENRANGE]="^\\s*("+a[n.XRANGEPLAIN]+")\\s+-\\s+("+a[n.XRANGEPLAIN]+")\\s*$",f("HYPHENRANGELOOSE"),a[n.HYPHENRANGELOOSE]="^\\s*("+a[n.XRANGEPLAINLOOSE]+")\\s+-\\s+("+a[n.XRANGEPLAINLOOSE]+")\\s*$",f("STAR"),a[n.STAR]="(<|>)?=?\\s*\\*";for(var P=0;P<g;P++)I(P,a[P]),h[P]||(h[P]=new RegExp(a[P]));l.parse=w;function w(e,r){if((!r||typeof r!="object")&&(r={loose:!!r,includePrerelease:!1}),e instanceof c)return e;if(typeof e!="string"||e.length>C)return null;var t=r.loose?h[n.LOOSE]:h[n.FULL];if(!t.test(e))return null;try{return new c(e,r)}catch{return null}}l.valid=K;function K(e,r){var t=w(e,r);return t?t.version:null}l.clean=Z;function Z(e,r){var t=w(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null}l.SemVer=c;function c(e,r){if((!r||typeof r!="object")&&(r={loose:!!r,includePrerelease:!1}),e instanceof c){if(e.loose===r.loose)return e;e=e.version}else if(typeof e!="string")throw new TypeError("Invalid Version: "+e);if(e.length>C)throw new TypeError("version is longer than "+C+" characters");if(!(this instanceof c))return new c(e,r);I("SemVer",e,r),this.options=r,this.loose=!!r.loose;var t=e.trim().match(r.loose?h[n.LOOSE]:h[n.FULL]);if(!t)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>d||this.major<0)throw new TypeError("Invalid major version");if(this.minor>d||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>d||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(function(i){if(/^[0-9]+$/.test(i)){var s=+i;if(s>=0&&s<d)return s}return i}):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}c.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},c.prototype.toString=function(){return this.version},c.prototype.compare=function(e){return I("SemVer.compare",this.version,this.options,e),e instanceof c||(e=new c(e,this.options)),this.compareMain(e)||this.comparePre(e)},c.prototype.compareMain=function(e){return e instanceof c||(e=new c(e,this.options)),y(this.major,e.major)||y(this.minor,e.minor)||y(this.patch,e.patch)},c.prototype.comparePre=function(e){if(e instanceof c||(e=new c(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],i=e.prerelease[r];if(I("prerelease compare",r,t,i),t===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(t===void 0)return-1;if(t===i)continue;return y(t,i)}while(++r)},c.prototype.compareBuild=function(e){e instanceof c||(e=new c(e,this.options));var r=0;do{var t=this.build[r],i=e.build[r];if(I("prerelease compare",r,t,i),t===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(t===void 0)return-1;if(t===i)continue;return y(t,i)}while(++r)},c.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r),this.inc("pre",r);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":if(this.prerelease.length===0)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)typeof this.prerelease[t]=="number"&&(this.prerelease[t]++,t=-2);t===-1&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},l.inc=J;function J(e,r,t,i){typeof t=="string"&&(i=t,t=void 0);try{return new c(e,t).inc(r,i).version}catch{return null}}l.diff=Q;function Q(e,r){if(M(e,r))return null;var t=w(e),i=w(r),s="";if(t.prerelease.length||i.prerelease.length){s="pre";var E="prerelease"}for(var u in t)if((u==="major"||u==="minor"||u==="patch")&&t[u]!==i[u])return s+u;return E}l.compareIdentifiers=y;var k=/^[0-9]+$/;function y(e,r){var t=k.test(e),i=k.test(r);return t&&i&&(e=+e,r=+r),e===r?0:t&&!i?-1:i&&!t?1:e<r?-1:1}l.rcompareIdentifiers=W;function W(e,r){return y(r,e)}l.major=x;function x(e,r){return new c(e,r).major}l.minor=ee;function ee(e,r){return new c(e,r).minor}l.patch=re;function re(e,r){return new c(e,r).patch}l.compare=S;function S(e,r,t){return new c(e,t).compare(new c(r,t))}l.compareLoose=te;function te(e,r){return S(e,r,!0)}l.compareBuild=ne;function ne(e,r,t){var i=new c(e,t),s=new c(r,t);return i.compare(s)||i.compareBuild(s)}l.rcompare=ie;function ie(e,r,t){return S(r,e,t)}l.sort=ae;function ae(e,r){return e.sort(function(t,i){return l.compareBuild(t,i,r)})}l.rsort=se;function se(e,r){return e.sort(function(t,i){return l.compareBuild(i,t,r)})}l.gt=U;function U(e,r,t){return S(e,r,t)>0}l.lt=X;function X(e,r,t){return S(e,r,t)<0}l.eq=M;function M(e,r,t){return S(e,r,t)===0}l.neq=H;function H(e,r,t){return S(e,r,t)!==0}l.gte=B;function B(e,r,t){return S(e,r,t)>=0}l.lte=V;function V(e,r,t){return S(e,r,t)<=0}l.cmp=_;function _(e,r,t,i){switch(r){case"===":return typeof e=="object"&&(e=e.version),typeof t=="object"&&(t=t.version),e===t;case"!==":return typeof e=="object"&&(e=e.version),typeof t=="object"&&(t=t.version),e!==t;case"":case"=":case"==":return M(e,t,i);case"!=":return H(e,t,i);case">":return U(e,t,i);case">=":return B(e,t,i);case"<":return X(e,t,i);case"<=":return V(e,t,i);default:throw new TypeError("Invalid operator: "+r)}}l.Comparator=A;function A(e,r){if((!r||typeof r!="object")&&(r={loose:!!r,includePrerelease:!1}),e instanceof A){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof A))return new A(e,r);I("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===F?this.value="":this.value=this.operator+this.semver.version,I("comp",this)}var F={};A.prototype.parse=function(e){var r=this.options.loose?h[n.COMPARATORLOOSE]:h[n.COMPARATOR],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1]!==void 0?t[1]:"",this.operator==="="&&(this.operator=""),t[2]?this.semver=new c(t[2],this.options.loose):this.semver=F},A.prototype.toString=function(){return this.value},A.prototype.test=function(e){if(I("Comparator.test",e,this.options.loose),this.semver===F||e===F)return!0;if(typeof e=="string")try{e=new c(e,this.options)}catch{return!1}return _(e,this.operator,this.semver,this.options)},A.prototype.intersects=function(e,r){if(!(e instanceof A))throw new TypeError("a Comparator is required");(!r||typeof r!="object")&&(r={loose:!!r,includePrerelease:!1});var t;if(this.operator==="")return this.value===""?!0:(t=new N(e.value,r),j(this.value,t,r));if(e.operator==="")return e.value===""?!0:(t=new N(this.value,r),j(e.semver,t,r));var i=(this.operator===">="||this.operator===">")&&(e.operator===">="||e.operator===">"),s=(this.operator==="<="||this.operator==="<")&&(e.operator==="<="||e.operator==="<"),E=this.semver.version===e.semver.version,u=(this.operator===">="||this.operator==="<=")&&(e.operator===">="||e.operator==="<="),o=_(this.semver,"<",e.semver,r)&&(this.operator===">="||this.operator===">")&&(e.operator==="<="||e.operator==="<"),R=_(this.semver,">",e.semver,r)&&(this.operator==="<="||this.operator==="<")&&(e.operator===">="||e.operator===">");return i||s||E&&u||o||R},l.Range=N;function N(e,r){if((!r||typeof r!="object")&&(r={loose:!!r,includePrerelease:!1}),e instanceof N)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new N(e.raw,r);if(e instanceof A)return new N(e.value,r);if(!(this instanceof N))return new N(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(t){return this.parseRange(t.trim())},this).filter(function(t){return t.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}N.prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},N.prototype.toString=function(){return this.range},N.prototype.parseRange=function(e){var r=this.options.loose;e=e.trim();var t=r?h[n.HYPHENRANGELOOSE]:h[n.HYPHENRANGE];e=e.replace(t,Ne),I("hyphen replace",e),e=e.replace(h[n.COMPARATORTRIM],z),I("comparator trim",e,h[n.COMPARATORTRIM]),e=e.replace(h[n.TILDETRIM],Y),e=e.replace(h[n.CARETTRIM],q),e=e.split(/\s+/).join(" ");var i=r?h[n.COMPARATORLOOSE]:h[n.COMPARATOR],s=e.split(" ").map(function(E){return ue(E,this.options)},this).join(" ").split(/\s+/);return this.options.loose&&(s=s.filter(function(E){return!!E.match(i)})),s=s.map(function(E){return new A(E,this.options)},this),s},N.prototype.intersects=function(e,r){if(!(e instanceof N))throw new TypeError("a Range is required");return this.set.some(function(t){return b(t,r)&&e.set.some(function(i){return b(i,r)&&t.every(function(s){return i.every(function(E){return s.intersects(E,r)})})})})};function b(e,r){for(var t=!0,i=e.slice(),s=i.pop();t&&i.length;)t=i.every(function(E){return s.intersects(E,r)}),s=i.pop();return t}l.toComparators=Ee;function Ee(e,r){return new N(e,r).set.map(function(t){return t.map(function(i){return i.value}).join(" ").trim().split(" ")})}function ue(e,r){return I("comp",e,r),e=ce(e,r),I("caret",e),e=le(e,r),I("tildes",e),e=Ie(e,r),I("xrange",e),e=oe(e,r),I("stars",e),e}function O(e){return!e||e.toLowerCase()==="x"||e==="*"}function le(e,r){return e.trim().split(/\s+/).map(function(t){return fe(t,r)}).join(" ")}function fe(e,r){var t=r.loose?h[n.TILDELOOSE]:h[n.TILDE];return e.replace(t,function(i,s,E,u,o){I("tilde",e,i,s,E,u,o);var R;return O(s)?R="":O(E)?R=">="+s+".0.0 <"+(+s+1)+".0.0":O(u)?R=">="+s+"."+E+".0 <"+s+"."+(+E+1)+".0":o?(I("replaceTilde pr",o),R=">="+s+"."+E+"."+u+"-"+o+" <"+s+"."+(+E+1)+".0"):R=">="+s+"."+E+"."+u+" <"+s+"."+(+E+1)+".0",I("tilde return",R),R})}function ce(e,r){return e.trim().split(/\s+/).map(function(t){return Re(t,r)}).join(" ")}function Re(e,r){I("caret",e,r);var t=r.loose?h[n.CARETLOOSE]:h[n.CARET];return e.replace(t,function(i,s,E,u,o){I("caret",e,i,s,E,u,o);var R;return O(s)?R="":O(E)?R=">="+s+".0.0 <"+(+s+1)+".0.0":O(u)?s==="0"?R=">="+s+"."+E+".0 <"+s+"."+(+E+1)+".0":R=">="+s+"."+E+".0 <"+(+s+1)+".0.0":o?(I("replaceCaret pr",o),s==="0"?E==="0"?R=">="+s+"."+E+"."+u+"-"+o+" <"+s+"."+E+"."+(+u+1):R=">="+s+"."+E+"."+u+"-"+o+" <"+s+"."+(+E+1)+".0":R=">="+s+"."+E+"."+u+"-"+o+" <"+(+s+1)+".0.0"):(I("no pr"),s==="0"?E==="0"?R=">="+s+"."+E+"."+u+" <"+s+"."+E+"."+(+u+1):R=">="+s+"."+E+"."+u+" <"+s+"."+(+E+1)+".0":R=">="+s+"."+E+"."+u+" <"+(+s+1)+".0.0"),I("caret return",R),R})}function Ie(e,r){return I("replaceXRanges",e,r),e.split(/\s+/).map(function(t){return he(t,r)}).join(" ")}function he(e,r){e=e.trim();var t=r.loose?h[n.XRANGELOOSE]:h[n.XRANGE];return e.replace(t,function(i,s,E,u,o,R){I("xRange",e,i,s,E,u,o,R);var p=O(E),v=p||O(u),T=v||O(o),L=T;return s==="="&&L&&(s=""),R=r.includePrerelease?"-0":"",p?s===">"||s==="<"?i="<0.0.0-0":i="*":s&&L?(v&&(u=0),o=0,s===">"?(s=">=",v?(E=+E+1,u=0,o=0):(u=+u+1,o=0)):s==="<="&&(s="<",v?E=+E+1:u=+u+1),i=s+E+"."+u+"."+o+R):v?i=">="+E+".0.0"+R+" <"+(+E+1)+".0.0"+R:T&&(i=">="+E+"."+u+".0"+R+" <"+E+"."+(+u+1)+".0"+R),I("xRange return",i),i})}function oe(e,r){return I("replaceStars",e,r),e.trim().replace(h[n.STAR],"")}function Ne(e,r,t,i,s,E,u,o,R,p,v,T,L){return O(t)?r="":O(i)?r=">="+t+".0.0":O(s)?r=">="+t+"."+i+".0":r=">="+r,O(R)?o="":O(p)?o="<"+(+R+1)+".0.0":O(v)?o="<"+R+"."+(+p+1)+".0":T?o="<="+R+"."+p+"."+v+"-"+T:o="<="+o,(r+" "+o).trim()}N.prototype.test=function(e){if(!e)return!1;if(typeof e=="string")try{e=new c(e,this.options)}catch{return!1}for(var r=0;r<this.set.length;r++)if(Oe(this.set[r],e,this.options))return!0;return!1};function Oe(e,r,t){for(var i=0;i<e.length;i++)if(!e[i].test(r))return!1;if(r.prerelease.length&&!t.includePrerelease){for(i=0;i<e.length;i++)if(I(e[i].semver),e[i].semver!==F&&e[i].semver.prerelease.length>0){var s=e[i].semver;if(s.major===r.major&&s.minor===r.minor&&s.patch===r.patch)return!0}return!1}return!0}l.satisfies=j;function j(e,r,t){try{r=new N(r,t)}catch{return!1}return r.test(e)}l.maxSatisfying=Le;function Le(e,r,t){var i=null,s=null;try{var E=new N(r,t)}catch{return null}return e.forEach(function(u){E.test(u)&&(!i||s.compare(u)===-1)&&(i=u,s=new c(i,t))}),i}l.minSatisfying=Ae;function Ae(e,r,t){var i=null,s=null;try{var E=new N(r,t)}catch{return null}return e.forEach(function(u){E.test(u)&&(!i||s.compare(u)===1)&&(i=u,s=new c(i,t))}),i}l.minVersion=Te;function Te(e,r){e=new N(e,r);var t=new c("0.0.0");if(e.test(t)||(t=new c("0.0.0-0"),e.test(t)))return t;t=null;for(var i=0;i<e.set.length;++i){var s=e.set[i];s.forEach(function(E){var u=new c(E.semver.version);switch(E.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!t||U(t,u))&&(t=u);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+E.operator)}})}return t&&e.test(t)?t:null}l.validRange=pe;function pe(e,r){try{return new N(e,r).range||"*"}catch{return null}}l.ltr=ve;function ve(e,r,t){return $(e,r,"<",t)}l.gtr=Se;function Se(e,r,t){return $(e,r,">",t)}l.outside=$;function $(e,r,t,i){e=new c(e,i),r=new N(r,i);var s,E,u,o,R;switch(t){case">":s=U,E=V,u=X,o=">",R=">=";break;case"<":s=X,E=B,u=U,o="<",R="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(j(e,r,i))return!1;for(var p=0;p<r.set.length;++p){var v=r.set[p],T=null,L=null;if(v.forEach(function(m){m.semver===F&&(m=new A(">=0.0.0")),T=T||m,L=L||m,s(m.semver,T.semver,i)?T=m:u(m.semver,L.semver,i)&&(L=m)}),T.operator===o||T.operator===R||(!L.operator||L.operator===o)&&E(e,L.semver))return!1;if(L.operator===R&&u(e,L.semver))return!1}return!0}l.prerelease=de;function de(e,r){var t=w(e,r);return t&&t.prerelease.length?t.prerelease:null}l.intersects=De;function De(e,r,t){return e=new N(e,t),r=new N(r,t),e.intersects(r)}l.coerce=me;function me(e,r){if(e instanceof c)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;r=r||{};var t=null;if(!r.rtl)t=e.match(h[n.COERCE]);else{for(var i;(i=h[n.COERCERTL].exec(e))&&(!t||t.index+t[0].length!==e.length);)(!t||i.index+i[0].length!==t.index+t[0].length)&&(t=i),h[n.COERCERTL].lastIndex=i.index+i[1].length+i[2].length;h[n.COERCERTL].lastIndex=-1}return t===null?null:w(t[2]+"."+(t[3]||"0")+"."+(t[4]||"0"),r)}}}]);
