"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/introduction/installation","docId":"introduction/installation"},{"type":"link","label":"Rules","href":"/introduction/rules","docId":"introduction/rules"},{"type":"link","label":"Interface","href":"/introduction/interface","docId":"introduction/interface"},{"type":"link","label":"Writing Hearts","href":"/introduction/writing-hearts","docId":"introduction/writing-hearts"}],"href":"/"},{"type":"category","label":"Game logic","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Define your flow","href":"/game/define-flow","docId":"game/define-flow"},{"type":"link","label":"Deploy your site","href":"/game/actions","docId":"game/actions"},{"type":"link","label":"Defining actions for your game","href":"/game/create-a-document","docId":"game/create-a-document"},{"type":"link","label":"Create a Blog Post","href":"/game/create-a-blog-post","docId":"game/create-a-blog-post"},{"type":"link","label":"Markdown Features","href":"/game/markdown-features","docId":"game/markdown-features"}],"href":"/category/game-logic"},{"type":"category","label":"Interface","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Manage Docs Versions","href":"/interface/manage-docs-versions","docId":"interface/manage-docs-versions"},{"type":"link","label":"Translate your site","href":"/interface/translate-your-site","docId":"interface/translate-your-site"}],"href":"/category/interface"},{"type":"category","label":"Testing and debugging","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Manage Docs Versions","href":"/testing/testing-your-game","docId":"testing/testing-your-game"}],"href":"/category/testing-and-debugging"},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Classes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Action","href":"/api/classes/Action","docId":"api/classes/Action"},{"type":"link","label":"Board","href":"/api/classes/Board","docId":"api/classes/Board"},{"type":"link","label":"ElementCollection","href":"/api/classes/ElementCollection","docId":"api/classes/ElementCollection"},{"type":"link","label":"Flow","href":"/api/classes/Flow","docId":"api/classes/Flow"},{"type":"link","label":"GameElement","href":"/api/classes/GameElement","docId":"api/classes/GameElement"},{"type":"link","label":"Piece","href":"/api/classes/Piece","docId":"api/classes/Piece"},{"type":"link","label":"Player","href":"/api/classes/Player","docId":"api/classes/Player"},{"type":"link","label":"PlayerCollection","href":"/api/classes/PlayerCollection","docId":"api/classes/PlayerCollection"},{"type":"link","label":"Selection","href":"/api/classes/Selection","docId":"api/classes/Selection"},{"type":"link","label":"Space","href":"/api/classes/Space","docId":"api/classes/Space"}]},{"type":"link","label":"Table of Contents","href":"/api/modules","docId":"api/modules"}],"href":"/api/"}]},"docs":{"api/classes/Action":{"id":"api/classes/Action","title":"Class: Action<P, A>","description":"Actions represent discreet moves players can make. The Action object is responsible for:","sidebar":"tutorialSidebar"},"api/classes/Board":{"id":"api/classes/Board","title":"Class: Board<P>","description":"Spaces are areas of the board. The spaces of your board are declared during","sidebar":"tutorialSidebar"},"api/classes/ElementCollection":{"id":"api/classes/ElementCollection","title":"Class: ElementCollection<P, T>","description":"Operations that return groups of | GameElement\'s return","sidebar":"tutorialSidebar"},"api/classes/Flow":{"id":"api/classes/Flow","title":"Class: Flow<P>","description":"Type parameters","sidebar":"tutorialSidebar"},"api/classes/GameElement":{"id":"api/classes/GameElement","title":"Class: GameElement<P>","description":"Abstract base class for all Board elements. Use Space or Piece as the base for subclassing your own elements.","sidebar":"tutorialSidebar"},"api/classes/Piece":{"id":"api/classes/Piece","title":"Class: Piece<P>","description":"Pieces are game elements that move during play","sidebar":"tutorialSidebar"},"api/classes/Player":{"id":"api/classes/Player","title":"Class: Player","description":"Constructors","sidebar":"tutorialSidebar"},"api/classes/PlayerCollection":{"id":"api/classes/PlayerCollection","title":"Class: PlayerCollection<P>","description":"Type parameters","sidebar":"tutorialSidebar"},"api/classes/Selection":{"id":"api/classes/Selection","title":"Class: Selection<P>","description":"Type parameters","sidebar":"tutorialSidebar"},"api/classes/Space":{"id":"api/classes/Space","title":"Class: Space<P>","description":"Spaces are areas of the board. The spaces of your board are declared during","sidebar":"tutorialSidebar"},"api/index":{"id":"api/index","title":"@boardzilla/core","description":"","sidebar":"tutorialSidebar"},"api/modules":{"id":"api/modules","title":"@boardzilla/core","description":"Classes","sidebar":"tutorialSidebar"},"game/actions":{"id":"game/actions","title":"Deploy your site","description":"Docusaurus is a static-site-generator (also called Jamstack).","sidebar":"tutorialSidebar"},"game/create-a-blog-post":{"id":"game/create-a-blog-post","title":"Create a Blog Post","description":"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...","sidebar":"tutorialSidebar"},"game/create-a-document":{"id":"game/create-a-document","title":"Defining actions for your game","description":"...","sidebar":"tutorialSidebar"},"game/define-flow":{"id":"game/define-flow","title":"Define your flow","description":"Some stuff about flow","sidebar":"tutorialSidebar"},"game/markdown-features":{"id":"game/markdown-features","title":"Markdown Features","description":"Docusaurus supports Markdown and a few additional features.","sidebar":"tutorialSidebar"},"interface/manage-docs-versions":{"id":"interface/manage-docs-versions","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","sidebar":"tutorialSidebar"},"interface/translate-your-site":{"id":"interface/translate-your-site","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","sidebar":"tutorialSidebar"},"introduction/installation":{"id":"introduction/installation","title":"Installation","description":"1. Create an empty game template, substituing [game-name] with the name of your game.","sidebar":"tutorialSidebar"},"introduction/interface":{"id":"introduction/interface","title":"Interface","description":"blah blah","sidebar":"tutorialSidebar"},"introduction/intro":{"id":"introduction/intro","title":"Welcome!","description":"Framework for creating web-based boardgames.","sidebar":"tutorialSidebar"},"introduction/rules":{"id":"introduction/rules","title":"Rules","description":"blah blah","sidebar":"tutorialSidebar"},"introduction/writing-hearts":{"id":"introduction/writing-hearts","title":"Writing Hearts","description":"blah blah","sidebar":"tutorialSidebar"},"testing/testing-your-game":{"id":"testing/testing-your-game","title":"Manage Docs Versions","description":"","sidebar":"tutorialSidebar"}}}')}}]);