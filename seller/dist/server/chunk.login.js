exports.ids=[4],exports.modules={104:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(6),f=a(s),c=n(129),p=a(c),d=n(53),m=(a(d),function(e){function t(){o(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleChange=e.handleChange.bind(e),e.onSubmit=e.onSubmit.bind(e),e}return u(t,e),i(t,[{key:"handleChange",value:function(e){var t=e.target,n=this.props.actions;n.updateUserInfo(r({},t.name,t.value))}},{key:"componentDidMount",value:function(){var e=this.props.actions;e.updateUserInfo({username:"",password:""})}},{key:"onSubmit",value:function(e){var t=this.props.actions;t.submitLogin(),e.preventDefault()}},{key:"render",value:function(){var e=this.props.userInfo,t=e.username,n=e.password;return f.default.createElement("section",{className:p.default.sectionMain},f.default.createElement("h1",{className:p.default.title},"卖家版"),f.default.createElement("form",{className:p.default.form,onSubmit:this.onSubmit},f.default.createElement("div",{className:p.default.field},f.default.createElement("label",{className:p.default.label},f.default.createElement("span",{className:p.default.title},"账号"),f.default.createElement("input",{className:p.default.input,type:"text",name:"username",placeholder:"请输入账号",value:t,onChange:this.handleChange}))),f.default.createElement("div",{className:p.default.field},f.default.createElement("label",{className:p.default.label},f.default.createElement("span",{className:p.default.title},"密码"),f.default.createElement("input",{className:p.default.input,type:"password",name:"password",placeholder:"请输入密码",value:n,onChange:this.handleChange}))),f.default.createElement("input",{className:p.default.submit,type:"submit",value:"登录"})))}}]),t}(s.Component));t.default=m,e.exports=t.default},105:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(6),f=a(s),c=n(104),p=a(c),d=n(128),m=a(d),b=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return u(t,e),i(t,[{key:"render",value:function(){var e=r(this.props,[]);return f.default.createElement("div",{className:m.default.app},f.default.createElement(p.default,e))}}]),t}(s.Component);t.default=b,e.exports=t.default},128:121,129:function(e,t){e.exports={"section-main":"upHDGUPJ",sectionMain:"upHDGUPJ",title:"_1CPVPx2H",title:"_1CPVPx2H",form:"_5NE1lgzt",form:"_5NE1lgzt",field:"_2QQ0Vl2p",field:"_2QQ0Vl2p",label:"_3ncLaQJu",label:"_3ncLaQJu",input:"_7j1wPN67",input:"_7j1wPN67",submit:"kyDsIRX6",submit:"kyDsIRX6"}}};