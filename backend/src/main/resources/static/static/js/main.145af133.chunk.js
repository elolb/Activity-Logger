(this.webpackJsonpactivity_tracker=this.webpackJsonpactivity_tracker||[]).push([[0],{41:function(t,e,i){},42:function(t,e,i){"use strict";i.r(e);var n=i(17),c=i.n(n),a=i(6),r=i(8),o=i(3),s=i(2),u=i.n(s),v="/api/logs",d=function(){return u.a.get(v).then((function(t){return t.data}))},f=function(t){return u.a.get("".concat(v,"/now")).then((function(t){return t.data}))},l=function(t){return u.a.post(v,t).then((function(t){return t.data}))},j=function(t,e){return u.a.put("".concat(v,"/").concat(t),e).then((function(t){return t.data}))},b="/api/activities",h=function(){return u.a.get(b).then((function(t){return t.data}))},y=function(t){return u.a.post(b,t).then((function(t){return t.data}))},O=function(t){return u.a.delete("".concat(b,"/").concat(t)).then((function(t){return t.data}))},m=i(0),p=function(t){var e=t.history,i=t.filter,n=t.setHistory,c=function(t,i){var c=t.date+864e5*i;f().then((function(i){var a=i;console.log(a),c<=a&&(console.log(t.id),t.date=c,j(t.id,t),n(e.map((function(e){return t.id===e.id?Object(r.a)(Object(r.a)({},e),{},{date:t.date}):e}))))}))};if(e){var a=e.concat();return a.reverse(),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("table",{id:"history",children:Object(m.jsx)("tbody",{children:a.filter((function(t){return-1!==t.activityName.toUpperCase().search(i.toUpperCase())})).map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{className:"history-date",children:[Object(m.jsxs)("div",{className:"group-arrow",children:[Object(m.jsx)("button",{className:"icon-button-up",onClick:function(){return c(t,1)},children:"\u25b2"}),Object(m.jsx)("button",{className:"icon-button-down",onClick:function(){return c(t,-1)},children:"\u25bc"})]}),Object(m.jsx)("div",{className:"history-date-text",children:new Date(t.date).toDateString()})]}),Object(m.jsx)("td",{className:"history-activity",children:t.activityName})]},t.id)}))})})})}},x=function(t){var e=t.newActivity,i=t.activities,n=t.setActivities;return Object(m.jsx)("button",{className:"new-activity",onClick:function(){return function(){if(e&&0===i.filter((function(t){return t.activityName.toUpperCase()===e.toUpperCase})).length){var t={activityName:e};y(t).then((function(e){t.id=e.id,n(i.concat(t))}))}}()},children:"+New Activity"})},g=function(t){var e=t.activityToRemove,i=t.activities,n=t.setActivities;return Object(m.jsx)("button",{className:"remove-activity",onClick:function(){return function(){if(e){var t=i.filter((function(t){return e.toUpperCase()===t.activityName.toUpperCase()}));t[0]&&O(t[0].id).then((function(){n(i.filter((function(e){return t[0].activityName!==e.activityName})))}))}}()},children:"-Remove Activity"})},N=function(t){var e=t.activities,i=(t.setActivities,t.filter,t.history),n=t.setHistory;return Object(m.jsx)("div",{className:"activity-buttons",children:e.map((function(t){return Object(m.jsx)("button",{onClick:function(){return function(t){var e={activityName:t};l(e).then((function(t){e.date=t.date,e.id=t.id,console.log(e.id),n(i.concat(e))}))}(t.activityName)},children:t.activityName},t.id)}))})},C=function(){var t=Object(o.useState)(""),e=Object(a.a)(t,2),i=e[0],n=e[1],c=Object(o.useState)([]),r=Object(a.a)(c,2),s=r[0],u=r[1],v=Object(o.useState)([]),f=Object(a.a)(v,2),l=f[0],j=f[1];return Object(o.useEffect)((function(){d().then((function(t){u(t)}))}),[]),Object(o.useEffect)((function(){h().then((function(t){console.log(t.length),t.length>0&&j(t)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Activity Logger"}),Object(m.jsxs)("div",{className:"filter",children:["1. Enter activity name to search existing logs, or to add/remove an activity type. ",Object(m.jsx)("br",{}),"2. Press the activity's button to create a new log. ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:"filter-bar",onChange:function(t){return n(t.target.value)}}),Object(m.jsxs)("div",{className:"edit-activities",children:[Object(m.jsx)(x,{newActivity:i,activities:l,setActivities:j}),Object(m.jsx)(g,{activityToRemove:i,activities:l,setActivities:j})]}),Object(m.jsx)(N,{activities:l,setActivities:j,filter:i,history:s,setHistory:u}),Object(m.jsx)(p,{history:s,filter:i,setHistory:u})]})]})};i(41);c.a.render(Object(m.jsx)(C,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.145af133.chunk.js.map