"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[4280],{8315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(5893),s=n(1151);const a={sidebar_position:5},r="Testing and Debugging",i={id:"introduction/debugging",title:"Testing and Debugging",description:"Boardzilla provides many tools for the all-important task of testing your game",source:"@site/docs/introduction/debugging.md",sourceDirName:"introduction",slug:"/introduction/debugging",permalink:"/introduction/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/introduction/debugging.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/introduction/development"},next:{title:"Building a game",permalink:"/category/building-a-game"}},l={},d=[{value:"Test runner",id:"test-runner",level:2},{value:"Browser developer tools",id:"browser-developer-tools",level:2},{value:"History controls",id:"history-controls",level:2},{value:"God mode",id:"god-mode",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"testing-and-debugging",children:"Testing and Debugging"}),"\n",(0,o.jsx)(t.p,{children:"Boardzilla provides many tools for the all-important task of testing your game\ncode, and troubleshooting issues that might arise. You should be familiar with\nthese tools as you develop so you can constantly check your work."}),"\n",(0,o.jsx)(t.h2,{id:"test-runner",children:"Test runner"}),"\n",(0,o.jsx)(t.p,{children:"Boardzilla includes a test runner class that mocks the playing environment of a\nserver plus a prescribed number of players all sending actions to the game so\nyou can set up automated tests that run through example games and test\nassertions on the game state."}),"\n",(0,o.jsx)(t.p,{children:"The test runner exposes both the player versions of the game and the server\nversion of the game which was complete knowledge of all hidden\ninformation. It's important when testing player moves to use the correct version\nfor the given player."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'import { TestRunner } from "@boardzilla/core";\n\nconst runner = new TestRunner(setup);\n\nconst [player1, player2] = runner.start({ players: 2, settings: {} });\n\n// example move\nplayer1.move("takeCard", { card: player1.game.first(Card) });\n\n// example assertion on server game\nconsole.assert(runner.server.game.someProperty === "some-value");\n\n// example assertion on player actions\nconsole.assert(player1.actions().length === 0);\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can import the test runner and set up tests using the testing library of\nyour choice. The starter game includes an ",(0,o.jsx)(t.a,{href:"https://github.com/boardzilla/boardzilla-starter-game/tree/main/test",children:"example working test\nsuite"}),"\nusing ",(0,o.jsx)(t.code,{children:"vitest"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"browser-developer-tools",children:"Browser developer tools"}),"\n",(0,o.jsxs)(t.p,{children:["Boardzilla outputs some debug info about the current state of the game and the\ncurrent available actions at every step of the game flow into the console. To\nsee all these messages, set the console output levels to include ",(0,o.jsx)(t.code,{children:"Verbose"})," or\n",(0,o.jsx)(t.code,{children:"debug"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["While test playing your game in dev tools, it is often desirable to inspect the\nstate at a given point. Setting up breakpoints using the browser dev tools or by\ninserting ",(0,o.jsx)(t.code,{children:"debugger"})," into your game code is often useful. But even without\nbreakpoints, you can inspect the state of the game at any given point by opening\nthe console tab in your browser developer tools and switching the Javascript\ncontext to ",(0,o.jsx)(t.code,{children:"ui.html"}),". While in this context, you have access to the player's\n",(0,o.jsx)(t.a,{href:"../api/classes/Game",children:(0,o.jsx)(t.code,{children:"game"})})," object, as well as all custom classes registered\nfor your game."]}),"\n",(0,o.jsx)(t.img,{src:"/img/console.png",style:{width:"60%"}}),"\n",(0,o.jsxs)(t.p,{children:["As well, the DOM inspector in the browser developer tools is a useful tool for\nquickly inspecting the state of the game. Since the game structure is output in\na DOM tree that matches the ",(0,o.jsx)(t.a,{href:"../game/board",children:"Board structure"}),", it can be used to\nquickly see if pieces and spaces are where they should be. As well the\nproperties of all elements are output as ",(0,o.jsx)(t.code,{children:"data-"})," attributes on the DOM elements\nso you can further see the state of inidividual game elements. See\n",(0,o.jsx)(t.a,{href:"../ui/css",children:"CSS"})," for full details."]}),"\n",(0,o.jsx)(t.h2,{id:"history-controls",children:"History controls"}),"\n",(0,o.jsx)(t.p,{children:"The history controls in devtools are useful for checking the state at any point\nin the game's move history. You can switch between different points in the game\nusing the 'View' button on each history action. While viewing a different point\nin history, the console object can be used as above to query the game state at\neach step of the game. You can also press 'Revert' to return the game to a\nprevious state and make different actions."}),"\n",(0,o.jsx)(t.p,{children:"As well, the save states in devtools can be used to record and reload various\npoints in your game to test a variety of conditions. The save state controls in\ndevtools can be accessed by pressing 'Shift-S' while focusing the game frame."}),"\n",(0,o.jsx)(t.h2,{id:"god-mode",children:"God mode"}),"\n",(0,o.jsxs)(t.p,{children:["God mode is another method of testing, allowing any game element to be moved or\nmodified in any way. It can be enabled by setting\n",(0,o.jsx)(t.a,{href:"../api/classes/Game#godmode",children:"Game#godMode"})," to true. It is a powerful but\ndangerous tool as it can easily allow you to put the game into an invalid\nstate. Use with caution. It can be easier and safer to modify your game rules\ntemporarily to permit testing a scenario that is outside the game rules, by\ne.g. allowing players to make selections they would not normally be permitted to\nmake."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var o=n(7294);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);