import{a as n,t as e}from"../chunks/disclose-version.BXFRRndd.js";import{g as p,h as c,a as _,c as g,r as v}from"../chunks/runtime.P04oIHTD.js";import{b as d}from"../chunks/paths.b4xrRCLR.js";function h(s,r,o,a){var t=s.__attributes??(s.__attributes={});c&&(t[r]=s.getAttribute(r),s.nodeName==="LINK")||t[r]!==(t[r]=o)&&(o==null?s.removeAttribute(r):typeof o!="string"&&u(s).includes(r)?s[r]=o:s.setAttribute(r,o))}var f=new Map;function u(s){var r=f.get(s.nodeName);if(r)return r;f.set(s.nodeName,r=[]);for(var o,a=p(s),t=Element.prototype;t!==a;){o=_(a);for(var i in o)o[i].set&&r.push(i);a=p(a)}return r}var N=e("<nav><a>Home</a></nav>");function A(s){var r=N(),o=g(r);h(o,"href",`${d??""}/`),v(r),n(s,r)}export{A as component};