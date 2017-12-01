webpackJsonp([35783957827783],{454:function(e,t,a){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function n(e,t,a,i){void 0===i&&(i=0),e&&(e.style.opacity="1",e.style.transitionDuration=i+"ms",e.style.webkitTransitionDuration=i+"ms",e.style.transfrom="translate("+t+"px, "+a+"px)",e.style.webkitTransform="translate("+t+"px, "+a+"px) translateZ(0)")}function r(e){for(var t=arguments,a=Object(e),i=1;i<arguments.length;i++){var n=t[i];if(void 0!==n&&null!==n)for(var r in n)n.hasOwnProperty(r)&&(a[r]=n[r])}return a}var o=i(a(1)),g=i(a(2)),l={wrapper:{width:"100%",height:"100%",overflow:"hidden",position:"relative"},frame:{width:"100%",height:"100%",position:"absolute"}},I=function(e){function t(t){e.call(this,t),this.state={frames:[].concat(t.frames||t.children||[]),current:0},this.mounted=!1,this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.autoSlide=this.autoSlide.bind(this),this.prev=this.prev.bind(this),this.next=this.next.bind(this),!1===t.loop&&t.auto&&console.warn("[re-carousel] Auto-slide only works in loop mode.")}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.prepareAutoSlide();for(var t=1;t<this.state.frames.length;t++)e.refs["f"+t].style.opacity=0},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.clearAutoTimeout()},t.prototype.onTouchStart=function(e){if(!(this.state.total<2)){this.clearAutoTimeout(),this.updateFrameSize(),this.prepareSiblingFrames();var t=e.touches&&e.touches[0]||e,a=t.pageX,i=t.pageY;this.setState({startX:a,startY:i,deltaX:0,deltaY:0}),this.refs.wrapper.addEventListener("touchmove",this.onTouchMove,{passive:!0}),this.refs.wrapper.addEventListener("mousemove",this.onTouchMove,{passive:!0}),this.refs.wrapper.addEventListener("touchend",this.onTouchEnd,!0),this.refs.wrapper.addEventListener("mouseup",this.onTouchEnd,!0)}},t.prototype.onTouchMove=function(e){if(!(e.touches&&e.touches.length>1)){this.clearAutoTimeout();var t=e.touches&&e.touches[0]||e,a=t.pageX,i=t.pageY,n=a-this.state.startX,r=i-this.state.startY;this.setState({deltaX:n,deltaY:r}),this.props.loop||(this.state.current===this.state.frames.length-1&&(n<0&&(n/=3),r<0&&(r/=3)),0===this.state.current&&(n>0&&(n/=3),r>0&&(r/=3))),this.moveFramesBy(n,r)}},t.prototype.onTouchEnd=function(){var e=this,t=this.decideEndPosition();t&&this.transitFramesTowards(t),this.refs.wrapper.removeEventListener("touchmove",this.onTouchMove),this.refs.wrapper.removeEventListener("mousemove",this.onTouchMove),this.refs.wrapper.removeEventListener("touchend",this.onTouchEnd,!0),this.refs.wrapper.removeEventListener("mouseup",this.onTouchEnd,!0),setTimeout(function(){return e.prepareAutoSlide()},this.props.duration)},t.prototype.decideEndPosition=function(){var e=this.state,t=e.deltaX;void 0===t&&(t=0);var a=e.deltaY;void 0===a&&(a=0);var i=e.current,n=e.frames,r=this.props,o=r.axis,g=r.loop,l=r.minMove;switch(o){case"x":if(!1===g){if(0===i&&t>0)return"origin";if(i===n.length-1&&t<0)return"origin"}return Math.abs(t)<l?"origin":t>0?"right":"left";case"y":if(!1===g){if(0===i&&a>0)return"origin";if(i===n.length-1&&a<0)return"origin"}return Math.abs(a)<l?"origin":a>0?"down":"up"}},t.prototype.moveFramesBy=function(e,t){var a=this.state.movingFrames,i=a.prev,r=a.current,o=a.next,g=this.state,l=g.frameWidth,I=g.frameHeight;switch(this.props.axis){case"x":n(r,e,0),e<0?n(o,e+l,0):n(i,e-l,0);break;case"y":n(r,0,t),t<0?n(o,0,t+I):n(i,0,t-I)}},t.prototype.prepareAutoSlide=function(){var e=this;if(!(this.state.frames.length<2)&&(this.clearAutoTimeout(),this.updateFrameSize(function(){e.prepareSiblingFrames()}),this.mounted&&this.props.loop&&this.props.auto)){var t=setTimeout(this.autoSlide,this.props.interval);this.setState({slider:t})}},t.prototype.autoSlide=function(e){var t=this;switch(this.clearAutoTimeout(),e){case"prev":this.transitFramesTowards("x"===this.props.axis?"right":"down");break;case"next":default:this.transitFramesTowards("x"===this.props.axis?"left":"up")}setTimeout(function(){return t.prepareAutoSlide()},this.props.duration)},t.prototype.next=function(){var e=this.state,t=e.current,a=e.frames;return!(!this.props.loop&&t===a.length-1)&&void this.autoSlide("next")},t.prototype.prev=function(){return!(!this.props.loop&&0===this.state.current)&&void this.autoSlide("prev")},t.prototype.clearAutoTimeout=function(){clearTimeout(this.state.slider)},t.prototype.updateFrameSize=function(e){var t=window.getComputedStyle(this.refs.wrapper),a=t.width,i=t.height;this.setState({frameWidth:parseFloat(a.split("px")[0]),frameHeight:parseFloat(i.split("px")[0])},e)},t.prototype.prepareSiblingFrames=function(){var e={current:this.refs["f"+this.getFrameId()],prev:this.refs["f"+this.getFrameId("prev")],next:this.refs["f"+this.getFrameId("next")]};return this.props.loop||(0===this.state.current&&(e.prev=void 0),this.state.current===this.state.frames.length-1&&(e.next=void 0)),this.setState({movingFrames:e}),n(e.current,0,0),"x"===this.props.axis?(n(e.prev,-this.state.frameWidth,0),n(e.next,this.state.frameWidth,0)):(n(e.prev,0,-this.state.frameHeight),n(e.next,0,this.state.frameHeight)),e},t.prototype.getFrameId=function(e){var t=this.state,a=t.frames,i=t.current,n=a.length;switch(e){case"prev":return(i-1+n)%n;case"next":return(i+1)%n;default:return i}},t.prototype.transitFramesTowards=function(e){var t=this.state.movingFrames,a=t.prev,i=t.current,r=t.next,o=this.props,g=o.duration,l=o.axis,I=this.state.current;switch(e){case"up":n(i,0,-this.state.frameHeight,g),n(r,0,0,g),I=this.getFrameId("next");break;case"down":n(i,0,this.state.frameHeight,g),n(a,0,0,g),I=this.getFrameId("prev");break;case"left":n(i,-this.state.frameWidth,0,g),n(r,0,0,g),I=this.getFrameId("next");break;case"right":n(i,this.state.frameWidth,0,g),n(a,0,0,g),I=this.getFrameId("prev");break;default:n(i,0,0,g),"x"===l?(n(a,-this.state.frameWidth,0,g),n(r,this.state.frameWidth,0,g)):"y"===l&&(n(a,0,-this.state.frameHeight,g),n(r,0,this.state.frameHeight,g))}this.setState({current:I})},t.prototype.render=function(){var e=this,t=this.state,a=t.frames,i=t.current,n=this.props,g=n.widgets,I=n.axis,u=n.loop,c=n.auto,s=n.interval;return o.createElement("div",{ref:"wrapper",style:r(l.wrapper,this.props.style),onTouchStart:this.onTouchStart,onMouseDown:this.onTouchStart},a.map(function(e,t){var a=r({zIndex:99-t},l.frame);return o.createElement("div",{ref:"f"+t,key:t,style:a},e)}),g&&[].concat(g).map(function(t,n){return o.createElement(t,{key:n,index:i,total:a.length,prevHandler:e.prev,nextHandler:e.next,axis:I,loop:u,auto:c,interval:s})}),this.props.frames&&this.props.children)},t}(o.Component);I.propTypes={axis:g.oneOf(["x","y"]),auto:g.bool,loop:g.bool,interval:g.number,duration:g.number,widgets:g.arrayOf(g.func),frames:g.arrayOf(g.element),style:g.object,minMove:g.number},I.defaultProps={axis:"x",auto:!1,loop:!1,interval:5e3,duration:300,minMove:42},e.exports=I},575:function(e,t,a){e.exports=a.p+"static/Fathom.6c1dbb72.png"},578:function(e,t,a){e.exports=a.p+"static/charity-01.b95be3d0.png"},579:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9IjE1MDZweCIgdmlld0JveD0iMCAwIDE0MDAgMTUwNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xNzY3LjcxMDE3LDE1MDUuMDU5NzIgTDM2NC4xMDc5NTksMTM0OS4xMzQ3MSBDMjkxLjEzMzU3NywxMzQxLjAwNTkyIDIzMS41NTMyMjYsMTI4Ny4xMDY0OSAyMTYuMTczMTgyLDEyMTUuMzMyOTUgTDMuNDM5MDAxMTEsMjIyLjQxOTQ4MSBDLTE2LjYwNTg2MSwxMjkuMDMwNzQ2IDUzLjQ1ODc4MzYsNDAuNTM3NzYwNyAxNDguOTcyMDksMzguNTUxNzQ5IEwyMDM2LjMyOTc5LDAuMDMyMzU5NzIzOCBDMjEzNC4yOTA5NywtMS45NTM2NTE5NiAyMjA4LjUxMjM5LDg3Ljc4NjM2NDIgMjE4OC4xOTA0MSwxODMuNTc2Nzg4IEwxOTMzLjI0MTkzLDEzODUuNTI5NTMgQzE5MTYuOTg0MzUsMTQ2MS45Njc4OSAxODQ1LjQ0MTc0LDE1MTMuNjk2NTYgMTc2Ny43MTAxNywxNTA1LjA1OTcyIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iMDQt4oCTLVRpbnlNZXJjaC5jb20iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJUaW55TWVyY2gt4oCTLVYyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTEyMjYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJEYXNoYm9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MzguMDAwMDAwLCAxMjI2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkJHIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUGFnZS0xIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkZpbGwtMyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiM2MDc5RjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"},580:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9Ijg5MXB4IiB2aWV3Qm94PSIwIDAgMTQwMCA4OTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTU4OSIgaGVpZ2h0PSI4MTIiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNMTcuMzEzMDYwMiw2NjMuNjgwMTM1IEwxMDguMDg3NjYzLDY1Mi40NzUyNyBMMTQ5LjA2Njc4MSw2MjAuMTMzNjg5IEwyMDcuODc1MzQ3LDYzNy41NDI4ODQgTDMxNy43MjIyNzMsNTQxLjk0ODc4NiBMMTMyMy45MjM2OSw0NTcuNjc0NjkgTDE0MTYuOTc4MzksMzczLjkyODE0NCBMMTUxOC45MDMxMSwzMTkuMjUwNTc0IEMxOTQ5LjYwMTA5LDIyNi44MjgwMzMgMTk2My4zOTk5OCwxNTMuODg5MDg2IDE1NjAuMjk5OCwxMDAuNDMzNzM0IEMxMTU3LjE5OTYyLDQ2Ljk3ODM4MjMgNjE5LjkwNDYxLDUwLjQ5NjIwMTggLTUxLjU4NTIzLDExMC45ODcxOTMgTDE3LjMxMzA2MDIsNjYzLjY4MDEzNSBaIiBpZD0icGF0aC0zIj48L3BhdGg+CiAgICAgICAgPGZpbHRlciB4PSItNC4xJSIgeT0iLTExLjglIiB3aWR0aD0iMTA4LjMlIiBoZWlnaHQ9IjEyNi4zJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTQiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI4IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyNSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4xNTM1NTQ5NjUgICAwIDAgMCAwIDAuMjQwOTg4ODQgICAwIDAgMCAwIDAuNjY0MTY4NzkzICAwIDAgMCAxIDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8cmVjdCBpZD0icGF0aC01IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTg4OSIgaGVpZ2h0PSIzMzgiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNMTc2Ny43MTAxNywxNTA1LjA1OTcyIEwzNjQuMTA3OTU5LDEzNDkuMTM0NzEgQzI5MS4xMzM1NzcsMTM0MS4wMDU5MiAyMzEuNTUzMjI2LDEyODcuMTA2NDkgMjE2LjE3MzE4MiwxMjE1LjMzMjk1IEwzLjQzOTAwMTExLDIyMi40MTk0ODEgQy0xNi42MDU4NjEsMTI5LjAzMDc0NiA1My40NTg3ODM2LDQwLjUzNzc2MDcgMTQ4Ljk3MjA5LDM4LjU1MTc0OSBMMjAzNi4zMjk3OSwwLjAzMjM1OTcyMzggQzIxMzQuMjkwOTcsLTEuOTUzNjUxOTYgMjIwOC41MTIzOSw4Ny43ODYzNjQyIDIxODguMTkwNDEsMTgzLjU3Njc4OCBMMTkzMy4yNDE5MywxMzg1LjUyOTUzIEMxOTE2Ljk4NDM1LDE0NjEuOTY3ODkgMTg0NS40NDE3NCwxNTEzLjY5NjU2IDE3NjcuNzEwMTcsMTUwNS4wNTk3MiIgaWQ9InBhdGgtNyI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IjA0LeKAky1UaW55TWVyY2guY29tIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iVGlueU1lcmNoLeKAky1Ib21lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTI0OTkuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJEYXNoYm9hcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMTUuMDAwMDAwLCAyMzk5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkJHIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iRmlsbC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzUuMDAwMDAwLCAxNzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzYwNzlGMiIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJQYXRoLTgiIG1hc2s9InVybCgjbWFzay0yKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItNCkiIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjNjA3OUYyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC04IiBzdHJva2U9IiMyNzNEQTkiIHN0cm9rZS13aWR0aD0iMTAiIG9wYWNpdHk9IjAuMjAwMDAwMDAzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIG1hc2s9InVybCgjbWFzay0yKSIgcG9pbnRzPSIxNy4zMTMwNjAyIDYzOS42ODAxMzUgMTA3LjU5NTg3OCA1ODIuMjc1MzkyIDE0NS43MzE1ODMgNTk0LjAyNDU4NyAyMDkuNDY2OTQyIDU4Mi4yNzUzOTIgMzI3LjIxODE5OCA2MTAuOTc3NzYzIDEzMTMuMDE1IDM5OC40OTA3OTkgMTQzMy43NDM3OSAzOTguNDkwNzk5IDE1MDIuMTEwODggMjY2Ljc5MDcyOCI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoLTgiIHN0cm9rZT0iIzI3M0RBOSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBtYXNrPSJ1cmwoI21hc2stMikiIHBvaW50cz0iMTcuMzEzMDYwMiA2NjAuNjgwMTM1IDEwOC4wODc2NjMgNjQ5LjQ3NTI3IDE0OS4wNjY3ODEgNjE3LjEzMzY4OSAyMDcuODc1MzQ3IDYzNC41NDI4ODQgMzE3LjcyMjI3MyA1MzguOTQ4Nzg2IDEzMjMuOTIzNjkgNDU0LjY3NDY5IDE0MTYuOTc4MzkgMzcwLjkyODE0NCAxNTE4LjkwMzExIDMxNi4yNTA1NzQiPjwvcG9seWxpbmU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTYiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC01Ij48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hc2siPjwvZz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iUGFnZS0xIiBtYXNrPSJ1cmwoI21hc2stNikiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQzLjAwMDAwMCwgMTAwLjAwMDAwMCkiIGlkPSJGaWxsLTMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stOCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTciPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJNYXNrIiBmaWxsPSIjNjA3OUYyIiB4bGluazpocmVmPSIjcGF0aC03Ij48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},581:function(e,t,a){e.exports=a.p+"static/dashboard.9e68835a.png"},588:function(e,t,a){e.exports=a.p+"static/designer-detail.ca736852.png"},141:function(e,t,a){e.exports=a.p+"static/designer-view.fe627734.png"},142:function(e,t,a){e.exports=a.p+"static/embed-dash.bd1dcb57.png"},589:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwMHB4IiBoZWlnaHQ9Ijg1MHB4IiB2aWV3Qm94PSIwIDAgMTQwMCA4NTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTgxNSIgaGVpZ2h0PSI4NTgiPjwvcmVjdD4KICAgICAgICA8cmVjdCBpZD0icGF0aC0zIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTg4OSIgaGVpZ2h0PSIzMTgiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSIwNC3igJMtVGlueU1lcmNoLmNvbSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlRpbnlNZXJjaC3igJMtSG9tZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC04MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IkJHIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc3LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyLjAwMDAwMCwgMTM4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hc2siPjwvZz4KICAgICAgICAgICAgICAgICAgICA8ZyBtYXNrPSJ1cmwoI21hc2stMikiIGlkPSJGaWxsLTEiIGZpbGw9IiNGMkYyRjciPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzg4LjAwMDAwMCwgLTcxNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzY3LjcxMDE3LDE1MDUuMDU5NzIgTDM2NC4xMDc5NTksMTM0OS4xMzQ3MSBDMjkxLjEzMzU3NywxMzQxLjAwNTkyIDIzMS41NTMyMjYsMTI4Ny4xMDY0OSAyMTYuMTczMTgyLDEyMTUuMzMyOTUgTDMuNDM5MDAxMTEsMjIyLjQxOTQ4MSBDLTE2LjYwNTg2MSwxMjkuMDMwNzQ2IDUzLjQ1ODc4MzYsNDAuNTM3NzYwNyAxNDguOTcyMDksMzguNTUxNzQ5IEwyMDM2LjMyOTc5LDAuMDMyMzU5NzIzOCBDMjEzNC4yOTA5NywtMS45NTM2NTE5NiAyMjA4LjUxMjM5LDg3Ljc4NjM2NDIgMjE4OC4xOTA0MSwxODMuNTc2Nzg4IEwxOTMzLjI0MTkzLDEzODUuNTI5NTMgQzE5MTYuOTg0MzUsMTQ2MS45Njc4OSAxODQ1LjQ0MTc0LDE1MTMuNjk2NTYgMTc2Ny43MTAxNywxNTA1LjA1OTcyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iUGFnZS0xIj4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJNYXNrIj48L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgbWFzaz0idXJsKCNtYXNrLTQpIiBpZD0iRmlsbC0xIiBmaWxsPSIjRjJGMkY3Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0My4wMDAwMDAsIDgwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3NjcuNzEwMTcsMTUwNS4wNTk3MiBMMzY0LjEwNzk1OSwxMzQ5LjEzNDcxIEMyOTEuMTMzNTc3LDEzNDEuMDA1OTIgMjMxLjU1MzIyNiwxMjg3LjEwNjQ5IDIxNi4xNzMxODIsMTIxNS4zMzI5NSBMMy40MzkwMDExMSwyMjIuNDE5NDgxIEMtMTYuNjA1ODYxLDEyOS4wMzA3NDYgNTMuNDU4NzgzNiw0MC41Mzc3NjA3IDE0OC45NzIwOSwzOC41NTE3NDkgTDIwMzYuMzI5NzksMC4wMzIzNTk3MjM4IEMyMTM0LjI5MDk3LC0xLjk1MzY1MTk2IDIyMDguNTEyMzksODcuNzg2MzY0MiAyMTg4LjE5MDQxLDE4My41NzY3ODggTDE5MzMuMjQxOTMsMTM4NS41Mjk1MyBDMTkxNi45ODQzNSwxNDYxLjk2Nzg5IDE4NDUuNDQxNzQsMTUxMy42OTY1NiAxNzY3LjcxMDE3LDE1MDUuMDU5NzIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},590:function(e,t,a){e.exports=a.p+"static/home-store.c185f61d.png"},591:function(e,t,a){e.exports=a.p+"static/home-widget.2b9a9c04.png"},593:function(e,t,a){e.exports=a.p+"static/price.8d61ee14.png"},594:function(e,t,a){e.exports=a.p+"static/product-card.5143a7b6.png"},595:function(e,t,a){e.exports=a.p+"static/product-widget.02ad9154.png"},597:function(e,t,a){e.exports=a.p+"static/whale.958bf7a3.png"},232:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=i(n),o=a(7),g=i(o),l=a(8),I=a(454),u=i(I),c=a(233),s=i(c),d=a(25),C=i(d),A=a(575),p=i(A),m=a(597),h=i(m),M={FrameOneBackground:{Fathom:p.default},FrameOneQuote:"'Cool people saying something cool about how great TinyMerch is. And how because of TinyMerch they are able to take a 360 day vacation to Ibza.'",FrameOneAvatar:{Whale:h.default},FrameOneAuthor:"Matthew Smith | Director",FrameOneLinkCopy:"See the Fathom & Draft Store",FrameOneLinkUrl:"#",FrameTwoBackground:{Fathom:p.default},FrameTwoQuote:"Cool people saying something cool about how great TinyMerch is. And how because of TinyMerch they are able to take a 360 day vacation to Ibza.",FrameTwoAvatar:{Whale:h.default},FrameTwoAuthor:"Matthew Smith | Director",FrameTwoLinkCopy:"See the Fathom & Draft Store",FrameTwoLinkUrl:"#",FrameThreeBackground:{Fathom:p.default},FrameThreeQuote:"'Cool people saying something cool about how great TinyMerch is. And how because of TinyMerch they are able to take a 360 day vacation to Ibza.'",FrameThreeAvatar:{Whale:h.default},FrameThreeAuthor:"Matthew Smith | Director",FrameThreeLinkCopy:"See the Fathom & Draft Store",FrameThreeLinkUrl:"#"},f=g.default.div.withConfig({displayName:"Carousel__CarouselWrapper"})(["display:flex;height:600px;width:100%;margin:50px 0px;@media screen and (max-width:768px){height:500px;margin:25px 0px;}@media screen and (max-width:615px){position:relative;top:-50px;height:250px;margin:10px 0px;}"]),x=g.default.div.withConfig({displayName:"Carousel__CarouselSlide"})(["display:flex;align-items:center;justify-content:center;"]),y=g.default.img.withConfig({displayName:"Carousel__CarouselImg"})(["position:relative;width:70%;max-width:800px;box-shadow:0px 4px 10px ",";border-radius:8px;@media screen and (max-width:768px){width:80%;top:-5%;}@media screen and (max-width:615px){display:none;top:-27%;width:90%;}"],l.TINY_SHADOW),w=g.default.div.withConfig({displayName:"Carousel__CarouselCard"})(["position:absolute;right:15%;top:42%;display:flex;flex-direction:column;padding:25px 15px;width:50%;max-width:450px;background-color:white;box-shadow:0px 4px 8px ",";border-radius:8px;@media screen and (max-width:1400px){right:10%;}@media screen and (max-width:768px){right:5%;top:50%;}@media screen and (max-width:615px){width:100%;left:0%;top:0%;position:relative;justify-content:center;}"],l.TINY_SHADOW),T=g.default.p.withConfig({displayName:"Carousel__Quote"})(["font-size:20px;line-height:28px;margin-bottom:25px;@media screen and (max-width:768px){font-size:17px;line-height:22px;margin-bottom:10px;}"]),D=g.default.p.withConfig({displayName:"Carousel__Author"})(["font-size:15px;color:",";"],l.SECONDARY_TEXT),N=g.default.img.withConfig({displayName:"Carousel__Avatar"})(["border-radius:20px;width:15px;height:15px;margin-right:15px;"]),z=g.default.a.withConfig({displayName:"Carousel__CarouselLink"})(["display:flex;align-items:center;font-size:17px;div{position:relative;top:2px;padding-left:10px;}"]),E=function(e){return r.default.createElement(f,null,r.default.createElement(u.default,{loop:!0,auto:!0,widgets:[s.default]},r.default.createElement(x,{style:{height:"100%"}},r.default.createElement(y,{src:p.default}),r.default.createElement(w,null,r.default.createElement(T,null,M.FrameOneQuote),r.default.createElement("div",{style:{display:"flex",alignItems:"center"}},r.default.createElement(N,{src:h.default}),r.default.createElement(D,null,M.FrameOneAuthor)),r.default.createElement("div",null,r.default.createElement(z,{href:M.FrameOneLinkUrl},M.FrameOneLinkCopy,r.default.createElement(C.default,{name:"forward"}))))),r.default.createElement(x,{style:{height:"100%"}},r.default.createElement(y,{src:p.default}),r.default.createElement(w,null,r.default.createElement(T,null,M.FrameOneQuote),r.default.createElement("div",{style:{display:"flex",alignItems:"center"}},r.default.createElement(N,{src:h.default}),r.default.createElement(D,null,M.FrameOneAuthor)),r.default.createElement("div",null,r.default.createElement(z,{href:M.FrameOneLinkUrl},M.FrameOneLinkCopy,r.default.createElement(C.default,{name:"forward"}))))),r.default.createElement(x,{style:{height:"100%"}},r.default.createElement(y,{src:p.default}),r.default.createElement(w,null,r.default.createElement(T,null,M.FrameOneQuote),r.default.createElement("div",{style:{display:"flex",alignItems:"center"}},r.default.createElement(N,{src:h.default}),r.default.createElement(D,null,M.FrameOneAuthor)),r.default.createElement("div",null,r.default.createElement(z,{href:M.FrameOneLinkUrl},M.FrameOneLinkCopy,r.default.createElement(C.default,{name:"forward"})))))))};t.default=E,e.exports=t.default},233:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e){return g.default.createElement("span",{style:{display:"inline-block",height:"8px",width:"8px",borderRadius:"4px",backgroundColor:"rgba(90, 88, 94, 1)",margin:"7px 5px",opacity:e.selected?"1":"0.3",transitionDuration:"300ms"}})}function r(e){var t={position:"absolute",width:"100%",zIndex:"100",bottom:"0px",textAlign:"center"};return e.total<2?g.default.createElement("div",{style:t}):g.default.createElement("div",{style:t},Array.apply(null,Array(e.total)).map(function(t,a){return g.default.createElement(n,{key:a,selected:e.index===a})}))}t.__esModule=!0,t.default=r;var o=a(1),g=i(o),l=a(2),I=i(l);a(8);r.propTypes={index:I.default.number.isRequired,total:I.default.number.isRequired},e.exports=t.default},235:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.SectionCharityBackground=void 0;var n=a(1),r=(i(n),a(7)),o=i(r),g=a(8);t.SectionCharityBackground=o.default.div.withConfig({displayName:"SectionCharityBackground"})(["position:absolute;top:-50px;width:120%;height:700px;background-color:",";transform:rotate(-1.5deg);@media screen and (max-width:768px){height:800px;top:0px;}@media screen and (max-width:768px){height:650px;top:0px;}"],g.ACTIVE_TEXT)},236:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=(i(n),a(7)),o=i(r),g=(a(8),a(16),o.default.div.withConfig({displayName:"Step"})(["position:relative;z-index:3;width:",";max-width:300px;min-height:300px;top:",";display:flex;flex-direction:column;align-items:center;justify-content:center;margin:15px;padding:25px 25px;border-radius:8px;border 2px solid #D9DADF;h1{margin-bottom:25px;}h3{margin-bottom:20px;}p{margin-bottom:10px;}@media screen and (max-width:980px){max-width:500px;min-height:220px;}@media screen and (max-width:768px){padding:0px 25px;}@media screen and (max-width:615px){padding:0px 10px;}"],function(e){return e.width},function(e){return e.positionTB}));t.default=g,e.exports=t.default},237:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=i(n),o=a(7),g=i(o),l=a(8),I=(a(16),a(236)),u=i(I),c=a(25),s=i(c),d=a(27),C=i(d),A=g.default.div.withConfig({displayName:"Steps__StepsWrapper"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;@media screen and (max-width:980px){margin:0px 0px 50px 0px;}"]),p=g.default.div.withConfig({displayName:"Steps__StepsContainer"})(["display:flex;align-items:center;justify-content:center;text-align:center;h2{font-size:20px margin:25px 0px 0px 0px;}p{font-size:16px;line-height:20px;margin:25px 0px 10px 0px;}em{font-size:14px;line-height:17px;color:",";}a{display:flex;align-self:center;align-items:center;justify-content:center;transition:all 200ms ease;:hover{transform:translateX(3px);}div{padding-left:10px;position:relative;top:2px;}}@media screen and (max-width:980px){flex-direction:column;h2{font-size:18px margin:25px 0px 0px 0px;}p{font-size:15px;line-height:19px;margin:15px 0px 10px 0px;}}"],l.SECONDARY_TEXT),m=g.default.div.withConfig({displayName:"Steps__BigIcon"})(["transform:scale(1.8);margin:0px 0px 25px 0px;@media screen and (max-width:980px){transform:scale(1.6);margin:0px 0px 10px 0px;}"]),h=g.default.div.withConfig({displayName:"Steps__StepsTitle"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;h3{font-weight:400;font-size:28px;margin:10px 0px 25px 0px;}h1{}@media screen and (max-width:768px){text-align:center;}"]),M=function(e){return r.default.createElement(A,null,r.default.createElement(C.default,{bottom:!0,delay:50,duration:400},r.default.createElement(h,null,r.default.createElement("h1",null,"Start selling merch on your existing website today."),r.default.createElement("h3",null,"Also, it's completely free."))),r.default.createElement(p,null,r.default.createElement(C.default,{bottom:!0,delay:100,duration:400},r.default.createElement(u.default,null,r.default.createElement(m,null,r.default.createElement(s.default,{name:"product",color:"#6079F2"})),r.default.createElement("div",null,r.default.createElement("h2",null,"Design a Product."),r.default.createElement("p",null,"Start filling your store with awesome creations. More product options coming soon!"),r.default.createElement("a",{href:"https://my.tinymerch.com"},"Get Started!",r.default.createElement(s.default,{name:"forward",color:"#6079F2"}))))),r.default.createElement(C.default,{bottom:!0,delay:150,duration:400},r.default.createElement(u.default,null,r.default.createElement(m,null,r.default.createElement(s.default,{name:"payment",color:"#6079F2"})),r.default.createElement("div",null,r.default.createElement("h2",null,"Setup up payment."),r.default.createElement("p",null,"We’ll need you to do a quick verification to recieve payouts. We send profits to your bank account monthly."),r.default.createElement("a",{href:"https://my.tinymerch.com"},"Get Started!",r.default.createElement(s.default,{name:"forward",color:"#6079F2"}))))),r.default.createElement(C.default,{bottom:!0,delay:200,duration:400},r.default.createElement(u.default,null,r.default.createElement(m,null,r.default.createElement(s.default,{name:"code",color:"#6079F2"})),r.default.createElement("div",null,r.default.createElement("h2",null,"Add the script to your site."),r.default.createElement("p",null,"Paste your custom script tag anywhere in the body of your website."),r.default.createElement("a",{href:"https://my.tinymerch.com"},"Get Started!",r.default.createElement(s.default,{name:"forward",color:"#6079F2"})))))))};t.default=M,e.exports=t.default},239:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=i(n),o=a(7),g=i(o),l=(a(8),g.default.div.withConfig({displayName:"TinyPrice__TinyPriceContainer"})(["display:flex;align-items:center;margin:0px;h3{padding-right:5px;margin:0px;}h1{font-size:48px;padding-right:10px;margin:0px;}h5{position:relative;top:-10px;margin:0px;}"])),I=function(e){return r.default.createElement(l,null,r.default.createElement("h3",null,"$"),r.default.createElement("h1",null,"0"),r.default.createElement("h5",null,".00"))};t.default=I,e.exports=t.default},250:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=i(n),o=a(24),g=i(o),l=a(13),I=i(l),u=a(7),c=(i(u),a(2)),s=(i(c),a(27)),d=i(s),C=a(237),A=i(C);a(43),a(44),a(21);var p=a(232),m=(i(p),a(33)),h=i(m),M=a(34),f=i(M),x=a(235),y=a(35),w=i(y),T=a(37),D=i(T),N=a(36),z=i(N),E=a(239),j=i(E),S=a(144),v=(i(S),a(38)),b=i(v),L=a(30),k=i(L),O=a(16),Z=(a(8),a(594)),P=(i(Z),a(591)),G=(i(P),a(590)),W=i(G),Y=a(589),B=i(Y),F=a(580),Q=(i(F),a(579)),U=(i(Q),a(141)),H=(i(U),a(588)),R=(i(H),a(595)),J=i(R),X=a(142),V=(i(X),a(581)),_=(i(V),a(593)),K=i(_),q=a(578),$=i(q),ee={sectionOneHeadline:"Start selling merch on your website in 5 minutes.",sectionOneCopy:"TinyMerch is an ecommerce platform for selling branded merch, custom content, or original artwork! We handle everything: orders, inventory, shipping, and payment. You sell your products and get paid!",sectionOnePlaceholder:"Name Your Store",SectionCharityHeadline:"Giving back made simpler",SectionCharityCopy:"TinyMerch is the perfect tool for fundraising or donating to charities. From your Seller's Dashboard you can choose to donate your store's proceeds directly to a charity with a single click.",SectionCharityLink:"https://my.tinymerch.com",SectionCharityCTA:"Learn More About Donations",SectionCharityAddmendment:"Are you a charity interested in being added to our list?",SectionCharityMailToLink:"mailto:team@tinymerch.com",SectionCharityMailToText:"Let us Know!",SectionPricingHeadline:"Pricing Plan",SectionPricingCopy:"Yep, TinyMerch is free. In fact, it's a subscription that pays you. No monthly fee. You sell merch. We send you the profits.",SectionPricingLink:"https://my.tinymerch.com",SectionPricingCTA:"Get Started!",SectionConclusionHeadline:"Let's Sell Together.",SectionConclusionCopy:"Get started selling merch on your site in 5 minutes.",SectionConclusionLink:"https://my.tinymerch.com",SectionConclusionCTA:"Checkout a Store",SectionConclusionLink2:"https://my.tinymerch.com",SectionConclusionCTA2:"Get Started!"},te=(0,b.default)(function(e){var t="phones"===e.screensize,a="thatUglyInBetweenSize"===e.screensize,i=("devWithConsoleOpen"===e.screensize,"widescreenFools"===e.screensize);return r.default.createElement("div",null,r.default.createElement(g.default,{title:"TinyMerch"}),r.default.createElement(h.default,{justify:"center",align:"center"},r.default.createElement(w.default,{justify:"center",color:!0,width:t?"90%":a?"80%":i?"40%":"50%",height:t?"200px":a?"250px":"400px"},r.default.createElement("h1",null,ee.sectionOneHeadline),r.default.createElement("p",null,ee.sectionOneCopy),r.default.createElement("a",{href:"https://my.tinymerch.com"
},r.default.createElement(O.TinyButton,null,"Create a Store")),r.default.createElement("strong",null,"Fast setup • No inventory or shipping • Completely free")),r.default.createElement(D.default,{width:t?"100%":a?"100%":"50%",height:t?"250px":a?"450px":"600px"},r.default.createElement(z.default,{shadow:!0,src:W.default,ImgWidth:t?"350px":a?"500px":i?"700px":"550px",positionTB:t?"0px":a?"0px":i?"90px":"100px",positionLR:t?"13%":a?"20%":"0%"}),r.default.createElement(z.default,{shadow:!0,src:J.default,ImgWidth:t?"100px":a?"200px":i?"250px":"225px",positionTB:t?"10px":a?"-20px":i?"60px":"70px",positionLR:t?"-30%":a?"-50%":i?"-120%":"-140%"}))),r.default.createElement(h.default,{align:"center",justify:"center",height:t?"250px":a?"500px":i?"750px":"700px"},r.default.createElement(A.default,null)),r.default.createElement(h.default,{align:"center",justify:"center",height:t?"650px":a?"750px":"600px"},r.default.createElement(x.SectionCharityBackground,null),r.default.createElement(w.default,{justify:t?"center":a?"flex-start":"center",white:!0,width:t?"90%":a?"80%":i?"40%":"50%",height:"350px"},r.default.createElement(d.default,{bottom:!0,delay:0,duration:200},r.default.createElement("h1",null,ee.SectionCharityHeadline)),r.default.createElement(d.default,{bottom:!0,delay:50,duration:200},r.default.createElement("p",null,ee.SectionCharityCopy)),r.default.createElement(d.default,{bottom:!0,delay:100,duration:200},r.default.createElement(I.default,{to:"/blog/donations"},r.default.createElement(O.TinyButtonWhite,null,ee.SectionCharityCTA))),r.default.createElement(d.default,{bottom:!0,delay:150,duration:200},r.default.createElement("p",null,ee.SectionCharityAddmendment,r.default.createElement("a",{style:{color:"white",fontWeight:"700"},href:ee.SectionCharityMailToLink}," ",ee.SectionCharityMailToText)))),r.default.createElement(D.default,{width:t?"100%":a?"100%":i?"60%":"50%",height:t?"250px":a?"300px":"400px"},r.default.createElement(d.default,{right:!0,big:!0,delay:200,duration:300},r.default.createElement(z.default,{shadow:!0,src:$.default,ImgWidth:t?"320px":a?"400px":i?"650px":"600px",positionTB:t?"50px":"0px",positionLR:t?"0%":a?"0%":i?"20%":"0%"})))),r.default.createElement(h.default,{height:t?"500px":"600px"},r.default.createElement(f.default,{BG:B.default,zindex:"-3",height:t?"600px":a?"600px":i?"950px":"800px",positionTB:t?"-50px":a?"-150px":i?"-150px":"-100px"}),r.default.createElement(w.default,{justify:"center",positionTB:t?"-25px":a?"-100px":"0px",color:!0,height:t?"400px":a?"450px":"550px",width:t?"90%":a?"80%":i?"40%":"50%",align:"center"},r.default.createElement(d.default,{bottom:!0,delay:0,duration:200},r.default.createElement("h1",null,ee.SectionPricingHeadline)),r.default.createElement(d.default,{bottom:!0,delay:50,duration:200},r.default.createElement(j.default,null)),r.default.createElement(d.default,{bottom:!0,delay:100,duration:200},r.default.createElement("p",{style:{textAlign:"center"}},ee.SectionPricingCopy)),r.default.createElement(d.default,{bottom:!0,delay:150,duration:200},r.default.createElement("a",{href:ee.SectionPricingLink},r.default.createElement(O.TinyButton,null,ee.SectionPricingCTA)))),r.default.createElement(D.default,{absolute:!0,width:"0%",height:t?"0px":a?"0px":i?"600px":"500px"},r.default.createElement(d.default,{right:!0,big:!0,delay:200,duration:300},r.default.createElement(z.default,{src:K.default,ImgWidth:t?"500px":a?"550px":i?"800px":"700px",positionTB:t?"0%":a?"-120px":i?"30px":"10px",positionLR:t?"20%":a?"40%":i?"-80%":"-70%"})))),r.default.createElement(h.default,{height:t?"350px":a?"400px":"500px"},r.default.createElement(w.default,{justify:"center",color:!0,width:t?"90%":a?"80%":i?"40%":"50%",height:t?"350px":a?"400px":i?"550px":"500px",align:"center"},r.default.createElement(d.default,{bottom:!0,delay:0,duration:200},r.default.createElement("h1",null,ee.SectionConclusionHeadline)),r.default.createElement(d.default,{bottom:!0,delay:50,duration:200},r.default.createElement("p",{style:{textAlign:"center"}},ee.SectionConclusionCopy)),r.default.createElement(d.default,{bottom:!0,delay:100,duration:200},r.default.createElement("div",{style:{display:"flex",justifyContent:"center",width:"600px"}},r.default.createElement("a",{style:{padding:"0px 10px"},href:ee.SectionConclusionLink2},r.default.createElement(O.TinyButton,null,ee.SectionConclusionCTA2)))),r.default.createElement(d.default,{bottom:!0,delay:125,duration:200},r.default.createElement("strong",null,"Fast setup - No inventory or shipping - Completely free")))))});t.default=function(e){return r.default.createElement(k.default,null,r.default.createElement(te,e))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-a16cf9b0c288cee071c4.js.map