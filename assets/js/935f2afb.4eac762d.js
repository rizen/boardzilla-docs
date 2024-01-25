"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Creating a game","href":"/introduction/creating-a-game","docId":"introduction/creating-a-game","unlisted":false},{"type":"link","label":"Development","href":"/introduction/development","docId":"introduction/development","unlisted":false},{"type":"link","label":"Devtools","href":"/introduction/devtools","docId":"introduction/devtools","unlisted":false}],"href":"/"},{"type":"category","label":"Building a game","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Core concepts","href":"/game/core-concepts","docId":"game/core-concepts","unlisted":false},{"type":"link","label":"Creating a game","href":"/game/creating-a-game","docId":"game/creating-a-game","unlisted":false},{"type":"link","label":"Board Structure","href":"/game/board","docId":"game/board","unlisted":false},{"type":"link","label":"Players","href":"/game/players","docId":"game/players","unlisted":false},{"type":"link","label":"Actions","href":"/game/actions","docId":"game/actions","unlisted":false},{"type":"link","label":"Flow","href":"/game/flow","docId":"game/flow","unlisted":false}],"href":"/category/building-a-game"},{"type":"category","label":"Customizing the UI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Core concepts","href":"/ui/core-concepts","docId":"ui/core-concepts","unlisted":false},{"type":"link","label":"Customizing the UI","href":"/ui/customizing-ui","docId":"ui/customizing-ui","unlisted":false},{"type":"link","label":"Layout","href":"/ui/layout","docId":"ui/layout","unlisted":false},{"type":"link","label":"Layout sandbox","href":"/ui/layout-sandbox","docId":"ui/layout-sandbox","unlisted":false},{"type":"link","label":"Appearance","href":"/ui/appearance","docId":"ui/appearance","unlisted":false},{"type":"link","label":"Game Settings","href":"/ui/game-settings","docId":"ui/game-settings","unlisted":false},{"type":"link","label":"CSS","href":"/ui/css","docId":"ui/css","unlisted":false}],"href":"/category/customizing-the-ui"},{"type":"link","label":"Publishing","href":"/publishing/publish","docId":"publishing/publish","unlisted":false},{"type":"link","label":"Examples","href":"/examples/examples","docId":"examples/examples","unlisted":false},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Classes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Action","href":"/api/classes/Action","docId":"api/classes/Action","unlisted":false},{"type":"link","label":"Board","href":"/api/classes/Board","docId":"api/classes/Board","unlisted":false},{"type":"link","label":"Die","href":"/api/classes/Die","docId":"api/classes/Die","unlisted":false},{"type":"link","label":"ElementCollection","href":"/api/classes/ElementCollection","docId":"api/classes/ElementCollection","unlisted":false},{"type":"link","label":"Game","href":"/api/classes/Game","docId":"api/classes/Game","unlisted":false},{"type":"link","label":"GameElement","href":"/api/classes/GameElement","docId":"api/classes/GameElement","unlisted":false},{"type":"link","label":"Piece","href":"/api/classes/Piece","docId":"api/classes/Piece","unlisted":false},{"type":"link","label":"Player","href":"/api/classes/Player","docId":"api/classes/Player","unlisted":false},{"type":"link","label":"PlayerCollection","href":"/api/classes/PlayerCollection","docId":"api/classes/PlayerCollection","unlisted":false},{"type":"link","label":"Space","href":"/api/classes/Space","docId":"api/classes/Space","unlisted":false}]},{"type":"link","label":"Table of Contents","href":"/api/modules","docId":"api/modules","unlisted":false}],"href":"/api/"}]},"docs":{"api/classes/Action":{"id":"api/classes/Action","title":"Class: Action<P, A>","description":"Actions represent discreet moves players can make. These contain the choices","sidebar":"tutorialSidebar"},"api/classes/Board":{"id":"api/classes/Board","title":"Class: Board<P, B>","description":"Base class for the board. Represents the current state of the game and","sidebar":"tutorialSidebar"},"api/classes/Die":{"id":"api/classes/Die","title":"Class: Die<P, B>","description":"Specialized piece for represnting 6-sided dice","sidebar":"tutorialSidebar"},"api/classes/ElementCollection":{"id":"api/classes/ElementCollection","title":"Class: ElementCollection<T>","description":"Operations that return groups of GameElement\'s return","sidebar":"tutorialSidebar"},"api/classes/Game":{"id":"api/classes/Game","title":"Class: Game<P, B>","description":"Core class for Boardzilla. Each game will create a single instance of this","sidebar":"tutorialSidebar"},"api/classes/GameElement":{"id":"api/classes/GameElement","title":"Class: GameElement<P, B>","description":"Abstract base class for all Board elements. Do not subclass this","sidebar":"tutorialSidebar"},"api/classes/Piece":{"id":"api/classes/Piece","title":"Class: Piece<P, B>","description":"Pieces are game elements that can move during play","sidebar":"tutorialSidebar"},"api/classes/Player":{"id":"api/classes/Player","title":"Class: Player<P, B>","description":"Base player class. Each game must declare a single player class that extends","sidebar":"tutorialSidebar"},"api/classes/PlayerCollection":{"id":"api/classes/PlayerCollection","title":"Class: PlayerCollection<P>","description":"An Array-like collection of the game\'s players, mainly used in Game#players. The array is automatically created when the game begins and","sidebar":"tutorialSidebar"},"api/classes/Space":{"id":"api/classes/Space","title":"Class: Space<P, B>","description":"Spaces are areas of the board. The spaces of your board are declared during","sidebar":"tutorialSidebar"},"api/index":{"id":"api/index","title":"@boardzilla/core","description":"","sidebar":"tutorialSidebar"},"api/modules":{"id":"api/modules","title":"@boardzilla/core","description":"Classes","sidebar":"tutorialSidebar"},"examples/examples":{"id":"examples/examples","title":"Examples","description":"Want to see some examples? Check out this list of example games to get inspired.","sidebar":"tutorialSidebar"},"game/actions":{"id":"game/actions","title":"Actions","description":"Actions are the building blocks of your game as it relates to its players. A","sidebar":"tutorialSidebar"},"game/board":{"id":"game/board","title":"Board Structure","description":"The board is a singleton class that is declared as the first step of creating a","sidebar":"tutorialSidebar"},"game/core-concepts":{"id":"game/core-concepts","title":"Core concepts","description":"These are some of the basic core concepts of Boardzilla that will be refered to","sidebar":"tutorialSidebar"},"game/creating-a-game":{"id":"game/creating-a-game","title":"Creating a game","description":"After creating a new Boardzilla game, writing a game in","sidebar":"tutorialSidebar"},"game/flow":{"id":"game/flow","title":"Flow","description":"The Flow of your game is how the game runs from beginning to end. This describes","sidebar":"tutorialSidebar"},"game/players":{"id":"game/players","title":"Players","description":"The Player is a core class that represents a user","sidebar":"tutorialSidebar"},"introduction/creating-a-game":{"id":"introduction/creating-a-game","title":"Creating a game","description":"To create a new Boardzilla game, simply run the following:","sidebar":"tutorialSidebar"},"introduction/development":{"id":"introduction/development","title":"Development","description":"Once you\'ve launched your new game, there are a few things you should know about the tooling before you begin.","sidebar":"tutorialSidebar"},"introduction/devtools":{"id":"introduction/devtools","title":"Devtools","description":"Within the Devtools, you now have access to your game. Any changes you make to your game will be automatically reloaded, and the console you launched it from will contain any additionally diagnostic information. However, for the most part, all information you need to develop you game will be in the web browser.","sidebar":"tutorialSidebar"},"introduction/intro":{"id":"introduction/intro","title":"Welcome!","description":"\ud83d\udc4b This is Boardzilla, a framework to make writing a digital board game easy. Boardzilla takes care of","sidebar":"tutorialSidebar"},"publishing/publish":{"id":"publishing/publish","title":"Publishing","description":"To submit a game to Boardzilla.io, you can now use the submit command in your package.json. This command will package your game, upload your assets and create an unpublished game on Boardzilla.io. If you haven\'t already done so, you\'ll be prompted to create an account and login.","sidebar":"tutorialSidebar"},"ui/appearance":{"id":"ui/appearance","title":"Appearance","description":"Defining the layout for your game elements is only one part of the","sidebar":"tutorialSidebar"},"ui/core-concepts":{"id":"ui/core-concepts","title":"Core concepts","description":"These are some of the basic core concepts of Boardzilla that will be refered to","sidebar":"tutorialSidebar"},"ui/css":{"id":"ui/css","title":"CSS","description":"Boardzilla can be entirely customized through standard CSS. By default many","sidebar":"tutorialSidebar"},"ui/customizing-ui":{"id":"ui/customizing-ui","title":"Customizing the UI","description":"Boardzilla renders and animates the board on the player\'s browser according to","sidebar":"tutorialSidebar"},"ui/game-settings":{"id":"ui/game-settings","title":"Game Settings","description":"If you have specific settings for your game that can be set on a per-game basis,","sidebar":"tutorialSidebar"},"ui/layout":{"id":"ui/layout","title":"Layout","description":"Customizing the game UI probably requires declaring several layouts. Each layout","sidebar":"tutorialSidebar"},"ui/layout-sandbox":{"id":"ui/layout-sandbox","title":"Layout sandbox","description":"The best way to explain Boardzilla\'s layout engine is to experiement. This","sidebar":"tutorialSidebar"}}}')}}]);