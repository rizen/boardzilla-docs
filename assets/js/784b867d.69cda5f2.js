"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[4266],{4785:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=o(5893),a=o(1151);const t={sidebar_position:6},s="Flow",l={id:"game/flow",title:"Flow",description:"The Flow of your game is how the game runs from beginning to end. This describes",source:"@site/docs/game/flow.md",sourceDirName:"game",slug:"/game/flow",permalink:"/game/flow",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/game/flow.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Actions",permalink:"/game/actions"},next:{title:"ui",permalink:"/game/ui"}},r={},c=[{value:"Typical flow structure",id:"typical-flow-structure",level:2},{value:"Flow commands",id:"flow-commands",level:2},{value:"Looping flow commands",id:"looping-flow-commands",level:3},{value:"<code>loop</code>",id:"loop",level:4},{value:"<code>whileLoop</code>",id:"whileloop",level:4},{value:"<code>forLoop</code>",id:"forloop",level:4},{value:"<code>forEach</code>",id:"foreach",level:4},{value:"<code>eachPlayer</code>",id:"eachplayer",level:4},{value:"<code>everyPlayer</code>",id:"everyplayer",level:4},{value:"Branching flow commands",id:"branching-flow-commands",level:3},{value:"<code>ifElse</code>",id:"ifelse",level:4},{value:"<code>switchCase</code>",id:"switchcase",level:4},{value:"Player Actions",id:"player-actions",level:3},{value:"<code>playerActions</code>",id:"playeractions",level:4},{value:"Current Flow Position",id:"current-flow-position",level:3},{value:"Loop variables",id:"loop-variables",level:4},{value:"Player action selections",id:"player-action-selections",level:4},{value:"Loop interuption",id:"loop-interuption",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"flow",children:"Flow"}),"\n",(0,i.jsx)(n.p,{children:"The Flow of your game is how the game runs from beginning to end. This describes\nthe phases, rounds and turns of the game, and what actions are avaiable to\nplayers at which point in the Flow. You describe the Flow using the API and\nBoardzilla keeps track of where your players are in the game, even if the game\nsits idle for periods of time."}),"\n",(0,i.jsx)(n.p,{children:"Your Flow definition will contain at minimum some player actions, and usually\nsome loops around them with logic to decide when the game is over."}),"\n",(0,i.jsx)(n.h2,{id:"typical-flow-structure",children:"Typical flow structure"}),"\n",(0,i.jsxs)(n.p,{children:["Flow is defined inside the ",(0,i.jsx)(n.a,{href:"../api/modules#creategame",children:"createGame"})," when you call\n",(0,i.jsx)(n.a,{href:"../api/classes/game#defineflow",children:(0,i.jsx)(n.code,{children:"game.defineFlow"})}),". The arguments to this\nfunction are the steps for your game. There are two basic types of steps:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a function"}),"\n",(0,i.jsx)(n.li,{children:"a flow command"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's look at a simple example from the Boardzilla starter game:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"Sample flow",children:"  game.defineFlow(\n    () => $.pool.shuffle(),\n    loop(\n      eachPlayer({\n        name: 'player',\n        do: playerActions({\n          actions: ['take']\n        }),\n      })\n    )\n  );\n"})}),"\n",(0,i.jsx)(n.p,{children:"This flow contains exactly two items: a function call that shuffles the pool,\nand the main play loop. The first function makes a single change to the board:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"  () => $.pool.shuffle(),\n"})}),"\n",(0,i.jsx)(n.p,{children:"Generally the first function of a flow will set up the board, shuffling decks,\ndealing out opening hands and the like. Later in the flow you can use functions\nas much as you like to make other changes to the board state, including moving\npieces around that are not part of a player action (e.g. dealing out a new hand)\nor just changing state on the board or players (e.g. updating the score)."}),"\n",(0,i.jsx)(n.admonition,{title:"Flow may not create or destroy game elements",type:"warning",children:(0,i.jsxs)(n.p,{children:["One thing you cannot do in the flow is create new elements. All Spaces and\nPieces your game needs must be ",(0,i.jsx)(n.a,{href:"board#creation",children:"created"})," before calling\n",(0,i.jsx)(n.code,{children:"defineFlow"}),". If pieces are only needed later in the game, they can be created\non the ",(0,i.jsx)(n.a,{href:"../api/classes/Board#pile",children:(0,i.jsx)(n.code,{children:"pile"})})," using ",(0,i.jsx)(n.code,{children:"board.pile.create()"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["The next argument in this example calls ",(0,i.jsx)(n.code,{children:"loop"}),". This is a basic flow command\nthat causes a portion of the flow to be repeated until something interupts\nit. In this case, it sets up the basic game loop. Flow commands can set up other\ntypes of loops, have players take turns, create branching logic, and most\nimportantly, prompt players for the actions they can perform."]}),"\n",(0,i.jsxs)(n.p,{children:["In the example above the main loop itself includes other flow commands, namely\n",(0,i.jsx)(n.code,{children:"eachPlayer"})," and ",(0,i.jsx)(n.code,{children:"playerActions"}),". This is an important distinction between the\ntwo types of flow steps, functions and flow commands:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Flow commands can only be included by other flow commands."})})}),"\n",(0,i.jsx)(n.p,{children:"For example, imagine you have a flow function that does some things, setting up\nthe deck, dealing some cards, and then cleaning after the hand:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"Sample flow",children:"  game.defineFlow(\n    () => {\n      // shuffle the deck\n      // deal cards\n\n      // put the cards back in the deck\n    })\n  );\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you now want to insert a flow command in the middle to add a player action,\nyou must break the function into two pieces and insert the flow function between\nthem, e.g.:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"Sample flow with playerAction added",children:"  game.defineFlow(\n    () => {\n      // shuffle the deck\n      // deal cards\n    },\n\n    // highlight-next-line\n    playerAction({ actions: ['playCard'] }),\n\n    () => {\n      // put the cards back in the deck\n    })\n  );\n"})}),"\n",(0,i.jsx)(n.h2,{id:"flow-commands",children:"Flow commands"}),"\n",(0,i.jsxs)(n.p,{children:["All flow commands are available on\n",(0,i.jsx)(n.a,{href:"../api/classes/game#flowcommands",children:(0,i.jsx)(n.code,{children:"game.flowCommands"})}),". It is common to\ndeconstruct all needed commands before defining flow, i.e.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  const {\n    playerActions,\n    eachPlayer,\n    forEach,\n    forLoop,\n  } = game.flowCommands;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Let's look at the\nvarious flow commands. There are 3 main types of flow commands, looping,\nbranching and actions."}),"\n",(0,i.jsx)(n.h3,{id:"looping-flow-commands",children:"Looping flow commands"}),"\n",(0,i.jsx)(n.h4,{id:"loop",children:(0,i.jsx)(n.a,{href:"../api/modules#loop",children:(0,i.jsx)(n.code,{children:"loop"})})}),"\n",(0,i.jsxs)(n.p,{children:["The most basic loop, this creates a loop that continues indefinitely until\nexplicitly interupted. This would be like a C/Javascript ",(0,i.jsx)(n.code,{children:"while(true)"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"whileloop",children:(0,i.jsx)(n.a,{href:"../api/modules#whileloop",children:(0,i.jsx)(n.code,{children:"whileLoop"})})}),"\n",(0,i.jsxs)(n.p,{children:["Like the basic ",(0,i.jsx)(n.code,{children:"loop"}),", except that it accepts a condition and will only start a\nnew iteration of the loop if the condition is true. This is exaclty like the\nC/Javascript ",(0,i.jsx)(n.code,{children:"while(condition)"}),". In particular, note that this loop may never\nexecute even a single iteration if the supplied condition is false to begin\nwith."]}),"\n",(0,i.jsx)(n.h4,{id:"forloop",children:(0,i.jsx)(n.a,{href:"../api/modules#forloop",children:(0,i.jsx)(n.code,{children:"forLoop"})})}),"\n",(0,i.jsxs)(n.p,{children:["This loop sets a value, iterates that value at each loop iteration and continues\nlooping until that value meets some condition. In other words, a standard ",(0,i.jsx)(n.code,{children:"for"}),"\nloop from C/Javascript."]}),"\n",(0,i.jsx)(n.h4,{id:"foreach",children:(0,i.jsx)(n.a,{href:"../api/modules#foreach",children:(0,i.jsx)(n.code,{children:"forEach"})})}),"\n",(0,i.jsxs)(n.p,{children:["This loop accepts a collection, and iterates over the members of that\ncollection. This is like ",(0,i.jsx)(n.code,{children:"for ... of"})," or ",(0,i.jsx)(n.code,{children:"Array#forEach"})," in Javascript."]}),"\n",(0,i.jsx)(n.h4,{id:"eachplayer",children:(0,i.jsx)(n.a,{href:"../api/modules#eachplayer",children:(0,i.jsx)(n.code,{children:"eachPlayer"})})}),"\n",(0,i.jsxs)(n.p,{children:["This is a loop that iterates over each player. This is the same as ",(0,i.jsx)(n.code,{children:"forEach"}),'\nwith the additional behaviour that it sets the the "current" player on each\niteration of the loop.']}),"\n",(0,i.jsx)(n.h4,{id:"everyplayer",children:(0,i.jsx)(n.a,{href:"../api/modules#everyplayer",children:(0,i.jsx)(n.code,{children:"everyPlayer"})})}),"\n",(0,i.jsxs)(n.p,{children:["Strictly speaking, this does not create a loop at all. It looks identical to\n",(0,i.jsx)(n.code,{children:"eachPlayer"}),' above except that instead of taking each iteration for each player\nin turn, it let\'s all players take they turn simultaneously in parallel. This\n"loop" completes when all players have completed the body of the loop, or when\nthe loop is otherwise interrupted.']}),"\n",(0,i.jsx)(n.h3,{id:"branching-flow-commands",children:"Branching flow commands"}),"\n",(0,i.jsx)(n.h4,{id:"ifelse",children:(0,i.jsx)(n.a,{href:"../api/modules#ifelse",children:(0,i.jsx)(n.code,{children:"ifElse"})})}),"\n",(0,i.jsxs)(n.p,{children:["Simply checks a condition and either takes one branch named ",(0,i.jsx)(n.code,{children:"do"})," or an optional\n",(0,i.jsx)(n.code,{children:"else"})," branch, just as an standard ",(0,i.jsx)(n.code,{children:"if...else"})]}),"\n",(0,i.jsx)(n.h4,{id:"switchcase",children:(0,i.jsx)(n.a,{href:"../api/modules#switchcase",children:(0,i.jsx)(n.code,{children:"switchCase"})})}),"\n",(0,i.jsxs)(n.p,{children:["Like ",(0,i.jsx)(n.code,{children:"ifElse"})," except the test expression can be compared with several possible\nvalues and execute different branches depending on the outcome. It may also\nexecute a ",(0,i.jsx)(n.code,{children:"default"})," branch if no other matches apply. This is similar to the\n",(0,i.jsx)(n.code,{children:"switch...case"})," in C/Javascript but without ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Switch_statement#Fallthrough",children:"fall\nthrough"})," behaviour."]}),"\n",(0,i.jsx)(n.h3,{id:"player-actions",children:"Player Actions"}),"\n",(0,i.jsx)(n.h4,{id:"playeractions",children:(0,i.jsx)(n.a,{href:"../api/modules#playeractions",children:(0,i.jsx)(n.code,{children:"playerActions"})})}),"\n",(0,i.jsxs)(n.p,{children:["The sole flow command for prompting player actions. This command accept a list\nof allowed ",(0,i.jsx)(n.a,{href:"actions",children:"actions"})," that were defined in ",(0,i.jsx)(n.code,{children:"defineActions"})," and prompts\nthe current player (or a particular player or players if specified)."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that like all other selections in Boardzilla, this list of actions has\n",(0,i.jsx)(n.a,{href:"actions#tree-shaking-and-skipping",children:"tree-shaking and skipping"})," behaviour. If one\nof the included actions is determined to have possible valid moves, it will not\nbe included in player prompts. If only one of the supplied actions is determined\nto be playable, it will be prompted. If such an action requires no further\nprompts it will be auto-played. Just like action selections this behaviour can\nbe configured for each ",(0,i.jsx)(n.code,{children:"playerActions"})," with a ",(0,i.jsx)(n.code,{children:"skipIf"})," parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["For this reason, it is common to include a wide variety of possible actions in\nthe list of ",(0,i.jsx)(n.code,{children:"playerActions"})," but let each action definition take responsibility\nfor determining whether it is actually playable at the time based on its\nselections and/or ",(0,i.jsx)(n.code,{children:"condition"})," parameter."]}),"\n",(0,i.jsxs)(n.admonition,{title:"flow commands are created once",type:"danger",children:[(0,i.jsxs)(n.p,{children:["Unlike ",(0,i.jsx)(n.a,{href:"actions",children:(0,i.jsx)(n.code,{children:"Actions"})})," that are created for each player ",(0,i.jsx)(n.strong,{children:"at the time"})," of\nbeing played, flow commands are created ",(0,i.jsx)(n.strong,{children:"at the beginning"})," of the game. Be\ncareful with passing expressions directly to Flow commands that rely on game\nstate."]}),(0,i.jsxs)(n.p,{children:['For example if you want to loop through some cards laid out in a board Space\ncalled "field", something like the following is probably ',(0,i.jsx)(n.strong,{children:"not"})," what you want:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:" forEach({\n   name: 'card',\n   // highlight-next-line\n   collection: deck.all(Card), // only evaluated at the start of the game\n   do: playerAction({ actions: ['chooseCard', 'pass'] })\n  })\n"})}),(0,i.jsx)(n.p,{children:"Instead use the functional form, so that the expression will be evaluated each\ntime this loop is entered:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:" forEach({\n   name: 'card',\n   // highlight-next-line\n   collection: () => deck.all(Card),\n   do: playerAction({ actions: ['chooseCard', 'pass'] })\n  })\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"current-flow-position",children:"Current Flow Position"}),"\n",(0,i.jsxs)(n.p,{children:["For many flow commands, it is necessary to know what the current position\nis. For example in a simple ",(0,i.jsx)(n.code,{children:"for i"})," loop, we need to access ",(0,i.jsx)(n.code,{children:"i"})," and have logic\nthat depends on its current value."]}),"\n",(0,i.jsxs)(n.p,{children:["Basically all function parameters in flow commands accept a single argument of\ntype ",(0,i.jsx)(n.a,{href:"../api/modules#flowarguments",children:(0,i.jsx)(n.code,{children:"FlowArguments"})}),' for this purpose. The\nargument is a single object that contains all values "in scope" at this point in\nthe flow. There are two types of values included here:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"loop variables"}),"\n",(0,i.jsx)(n.li,{children:"player action selections"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"loop-variables",children:"Loop variables"}),"\n",(0,i.jsxs)(n.p,{children:["The loop variables included here are from any loops that the flow is currently\ninside of, namely the current iterator value in any ",(0,i.jsx)(n.a,{href:"forloop",children:(0,i.jsx)(n.code,{children:"forLoop"})}),"s, the\ncurrent collection member of any ",(0,i.jsx)(n.a,{href:"foreach",children:(0,i.jsx)(n.code,{children:"forEach"})})," loops, the evaluated test\nexpression in any ",(0,i.jsx)(n.a,{href:"switchcase",children:(0,i.jsx)(n.code,{children:"switchCase"})}),"s."]}),"\n",(0,i.jsxs)(n.p,{children:["The values are included as key value pairs where the key is the ",(0,i.jsx)(n.code,{children:"name"})," parameter\nsupplied for the flow command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"Example of reading loop variables",children:"  forLoop({\n    // highlight-next-line\n    name: 'x', // x is declared here\n    initial: 0,\n    next: x => x + 1,\n    while: x => x < 3,\n    do: forLoop({\n      // highlight-next-line\n      name: 'y', // y is declared here\n      initial: 0,\n      next: y => y + 1,\n      while: y => y < 2,\n      // highlight-start\n      do: ({ x, y }) => {\n        // x is available here as the value of the outer loop\n        // and y will be the value of the inner loop\n      }\n      // highlight-end\n    })\n  })\n"})}),"\n",(0,i.jsx)(n.h4,{id:"player-action-selections",children:"Player action selections"}),"\n",(0,i.jsx)(n.p,{children:'For player action selections, the arguments to the player action are included as\na single object. Again this only applies if the flow command is inside the\nbranch belonging to this player action. The name in this case is the name of the\nactions. For example, here we have defined an action called "takeResource" and\nlater we want to know what choices the player made in the flow.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"example Player action selections",children:"  game.defineActions({\n    ...\n    takeResources: player => action<{amount: number}>({\n      prompt: 'Take resources'\n    }).chooseFrom(\n      'resource', ['Lumber', 'Steel', 'Wheat']\n    ).do(\n      ({ resource, amount }) => player.addResources(resource, amount)\n    )\n    ...\n  });\n\n  game.defineFlow(\n    ...\n    playerActions({ \n      actions: [\n        { \n          name: 'takeResources',\n          do: ({ takeResources }) => {\n            // highlight-start\n            // takeResoures.resource will be the name of the resource, e.g. 'Steel'\n            // takeResoures.amount will be the selection number \"amount\"\n            // highlight-end\n          }\n        }\n      ]\n    })\n  );\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Action vs playerActions",type:"tip",children:[(0,i.jsxs)(n.p,{children:["We can react to a player's action both in the action\n",(0,i.jsx)(n.a,{href:"actions#other-behaviour",children:(0,i.jsx)(n.code,{children:"do"})})," and in the ",(0,i.jsx)(n.code,{children:"do"})," of the playerActions. It can be\nconfusing which we should use for what."]}),(0,i.jsxs)(n.p,{children:["In general the action ",(0,i.jsx)(n.code,{children:"do"})," is the proper place to react to what a player just did. This\nincludes mutating the board, recording state, or triggering follow-up actions."]}),(0,i.jsxs)(n.p,{children:["The playerActions ",(0,i.jsx)(n.code,{children:"do"})," should be used only if the player action changes the flow\nof the game, e.g. ending a phase or somehow interrupting a loop, or triggering\nother rounds of player actions, since flow commands can only be issued inside\nother flow commands."]})]}),"\n",(0,i.jsx)(n.h2,{id:"loop-interuption",children:"Loop interuption"}),"\n",(0,i.jsxs)(n.p,{children:["It is important in a game to able to interrupt loops. In fact if we use the\nbasic ",(0,i.jsx)(n.code,{children:"loop"})," flow command, the loop will continue indefinitely ",(0,i.jsx)(n.strong,{children:"unless"})," we\ninterrupt it. There are 3 basic ",(0,i.jsx)(n.a,{href:"../api/modules#do",children:"loop interruption\nfunctions"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Do.break()"})})}),"\n",(0,i.jsxs)(n.p,{children:["This causes the flow to exit loop and resume after the loop, like the\n",(0,i.jsx)(n.code,{children:"break"})," keyword in C/Javascript."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Do.continue()"})})}),"\n",(0,i.jsxs)(n.p,{children:["This causes the flow to skip the rest of the current loop iteration and restart\nthe loop at the next iteration, like the ",(0,i.jsx)(n.code,{children:"continue"})," keyword in C/Javascript."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Do.repeat()"})})}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.code,{children:"Do.continue"})," except this restarts the loop on ",(0,i.jsx)(n.strong,{children:"the same iteration"}),"\nit's currently on."]}),"\n",(0,i.jsxs)(n.p,{children:["These functions can be called in any loop function or action. Often it is the\nonly thing you want to call after a particular action, in which case you can\npass it as the action ",(0,i.jsx)(n.code,{children:"do"}),", e.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"  loop(playerActions({\n    actions: [\n      'takeOneFromBag',\n      {\n        name: 'done',\n        // break out of the loop when a player selects 'Done'\n        // highlight-next-line\n        do: Do.break\n      }\n    ]\n  }));\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"These are not javascript keywords",type:"danger",children:[(0,i.jsxs)(n.p,{children:["Remember that the flow interuption functions are merely humble Javascript\nfunctions, ",(0,i.jsx)(n.strong,{children:"not keywords"}),", despite being named similarly. They do not break control\nflow all by themselves."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"  loop({\n    name: 'round',\n    do: () => {\n      if (game.isRoundFinished()) Do.break();\n      // otherwise do other stuff\n      // highlight-next-line\n      game.doOtherStuff(); <-- will execute even if Do.break is called\n    }\n  });\n"})}),(0,i.jsxs)(n.p,{children:["Use e.g. ",(0,i.jsx)(n.code,{children:"return"})," or ",(0,i.jsx)(n.code,{children:"else"})," to control what executes, e.g.:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"  loop({\n    name: 'round',\n    do: () => {\n      // highlight-next-line\n      if (game.isRoundFinished()) return Do.break();\n      // otherwise do other stuff\n      game.doOtherStuff();\n    }\n  });\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>s});var i=o(7294);const a={},t=i.createContext(a);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);