(this["webpackJsonpkopi-teh-susu"]=this["webpackJsonpkopi-teh-susu"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(6),c=a.n(o),r=(a(12),a(1)),s=a(2),u=a(3),l=a(4),p=(a(13),a(14),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.kopi.name+" coffee - "+this.props.kopi.origin,t={backgroundImage:"url('".concat(this.props.kopi.imageUrl,"')")};return i.a.createElement("div",{className:"kopi"},i.a.createElement("div",{className:"kopi-image",style:t}),i.a.createElement("div",{className:"kopi-title"},e))}}]),a}(i.a.Component)),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleSearch=function(e){n.setState({search:e.target.value,kopis:n.state.allKopis.filter((function(t){return new RegExp(e.target.value,"i").exec(t.name)}))})},n.state={kopis:[],allKopis:[],search:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/novatogatorop/coffee-in-indonesia/master/kopi-indonesia.json").then((function(e){return e.json()})).then((function(t){e.setState({kopis:t,allKopis:t})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"search"},i.a.createElement("input",{type:"text",placeholder:"Search coffee name \u2615\ufe0f...",value:this.state.search,onChange:this.handleSearch})),i.a.createElement("div",{className:"kopis"},this.state.kopis.map((function(e){return i.a.createElement(p,{key:e.name,kopi:e})})))))}}]),a}(i.a.Component);c.a.render(i.a.createElement(m,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.492d8966.chunk.js.map