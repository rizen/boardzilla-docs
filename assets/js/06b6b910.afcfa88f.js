"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[8260],{1620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(5893),r=a(1151);const i={},o=void 0,s={id:"game/ui",title:"ui",description:"Layout",source:"@site/docs/game/ui.md",sourceDirName:"game",slug:"/game/ui",permalink:"/game/ui",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/game/ui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"players",permalink:"/game/players"},next:{title:"Interface",permalink:"/category/interface"}},l={},d=[{value:"Layout",id:"layout",level:2},{value:"DOM",id:"dom",level:3}];function c(e){const t={h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"layout",children:"Layout"}),"\n",(0,n.jsx)(t.p,{children:"within the board and within each other. If pieces enter a space,\ne.g like cards in a player's hand, the layout you give Boardzilla will tell it\nwhether these should splay out and stack together, whether they should shrink or\noverlap if more are placed into the space than comfortably fit. All this can be\nheavily customized depending on the nature of your game."}),"\n",(0,n.jsx)(t.p,{children:"The layout is essentially an invisible grid where other spaces and pieces are\nplaced. The grid can grow or shrink depending on how many elements are in it and\nwhere they're placed."}),"\n",(0,n.jsx)(t.h3,{id:"dom",children:"DOM"}),"\n",(0,n.jsx)(t.p,{children:"The game is displayed in the players browser using HTML and the data tree of the\nBoard described above is mapped to an actual tree in HTML. If you define a Space\nthat is a player's hand, with Pieces in them that are cards, then the DOM will\nliterally have a DOM element for each card as children of the DOM element\nrepresenting the hand. The class names of these will match the classes you\nprovide. So they're easy to target for CSS."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var n=a(7294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);