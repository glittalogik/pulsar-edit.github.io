import{_ as a,o as n,c as s,a as t,b as e,d as r,e as i,f as l,r as h}from"./app.69304be2.js";const d={},u={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.113.0",target:"_blank",rel:"noopener noreferrer"},c=t("p",null,[e("Welcome to our first release of 2024! This is our 13th main release; let's just hope we aren't cursed by the number. This month we are enabling a feature by default that has been in the works for a long time and is a major step in moving Pulsar to current versions of Electron. We also have a significant update to our "),t("code",null,"symbols-view"),e(" package and a number of bug fixes as per usual.")],-1),p=t("code",null,"Use Modern Tree-Sitter Implementation",-1),m={href:"https://tree-sitter.github.io/tree-sitter/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://pulsar-edit.dev/blog/20230601-Daeraxa-JuneUpdate.html#tree-sitter-updates-are-live",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/savetheclocktower",target:"_blank",rel:"noopener noreferrer"},g={href:"https://pulsar-edit.dev/tag/tree-sitter/",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"Use Legacy Tree-sitter Implementation",-1),_={href:"https://pulsar-edit.dev/community.html",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"symbols-view",-1),y=t("code",null,"symbols-view",-1),k=t("code",null,"symbol-provider-tree-sitter",-1),x={href:"https://github.com/pulsar-edit/pulsar/pull/829",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/claytonrcarter",target:"_blank",rel:"noopener noreferrer"},P=t("p",null,[e("On to some bug fixes. We had an issue reported about the "),t("code",null,"github"),e(" package that showed a problem with the rendering of the diff view display. This seems to have been due to a code path in our TextEditor component that would sometimes try to perform measurements on things that weren't necessarily visible. The fix here, simple as it seems, was to defer those measurements until we could be sure the editor was visible.")],-1),I=t("p",null,[e("Next, we have a fix to the "),t("code",null,"find-and-replace"),e(" package caused by an odd interaction between the package and the "),t("code",null,"Preserve Case During Replace"),e(" option, causing an error to appear when using empty strings as input (as an empty string cannot be capitalized).")],-1),E=t("code",null,"UI",-1),j={href:"https://github.com/pulsar-edit/pulsar/pull/850",target:"_blank",rel:"noopener noreferrer"},A=l('<p>And that is all we have for you right now. We hope you enjoy this new release and here is to another 12 months of Pulsar!</p><p>Until next time, happy coding, and see you amongst the stars!</p><ul><li>The Pulsar team</li></ul><hr><ul><li>Enabled Modern Tree-sitter Grammars by default</li><li>Added a modern Tree-sitter grammar for PHP.</li><li>Fix a measurement issue that was causing visual glitches in the <code>github</code> package&#39;s diff views.</li><li>Enabled the core <code>symbols-view</code> package to accept symbols from a number of sources, including Tree-sitter grammars and IDE packages.</li><li>Switch default to false for converting ASCII emoticons to emoji when rendering Markdown.</li><li>Fix certain find-and-replace scenarios when the &quot;Preserve Case During Replace&quot; setting is enabled.</li><li>Fix an issue in <code>symbols-view</code> when returning from visiting a symbol declaration.</li></ul><h3 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h3>',6),D={href:"https://github.com/pulsar-edit/pulsar/pull/852",target:"_blank",rel:"noopener noreferrer"},F=t("code",null,"useExperimentalModernTreeSitter",-1),M={href:"https://github.com/pulsar-edit/pulsar/pull/855",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/pulsar-edit/pulsar/pull/854",target:"_blank",rel:"noopener noreferrer"},W=t("code",null,"symbols-view",-1),N={href:"https://github.com/pulsar-edit/pulsar/pull/829",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/pulsar-edit/pulsar/pull/850",target:"_blank",rel:"noopener noreferrer"},C=t("h3",{id:"find-and-replace",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#find-and-replace","aria-hidden":"true"},"#"),e(" find-and-replace")],-1),H=t("code",null,"capitalize",-1),U={href:"https://github.com/pulsar-edit/pulsar/pull/849",target:"_blank",rel:"noopener noreferrer"},q=t("h3",{id:"symbols-view",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#symbols-view","aria-hidden":"true"},"#"),e(" symbols-view")],-1),B={href:"https://github.com/pulsar-edit/pulsar/pull/864",target:"_blank",rel:"noopener noreferrer"};function J(L,z){const o=h("ExternalLinkIcon");return n(),s("div",null,[t("p",null,[e("Pulsar "),t("a",u,[e("1.113.0"),r(o)]),e(" is available now!")]),i(" more "),c,t("p",null,[e("First up is something we have been mentioning in the last few community update blog posts and otherwise hinting about for a while. Back in Pulsar 1.106.0, released in July last year, we added a new setting called "),p,e(" that would enable a brand new implementation of "),t("a",m,[e("Tree-sitter"),r(o)]),e(" within Pulsar. If you want to know more about the history of this change, then have a look at our detailed "),t("a",f,[e("blog post"),r(o)]),e(" on the topic as well as "),t("a",b,[e("@savetheclocktower"),r(o)]),e("'s fantastic "),t("a",g,[e("blog post series"),r(o)]),e(". A huge thank you to everyone who contributed to this feature by testing it out and submitting bug reports and pull requests, these contributions have led to this moment where we can finally activate it by default. The reason we have done this is in order to eventually move to modern versions of Electron, for which the old tree-sitter implementation is simply not compatible. We have had this as an option while we worked out the most egregious kinks in the system, but we are in a position where we feel it is strong enough to enable by default. If you encounter any significant issues with the new system, there is a new option "),w,e(" that will revert to the old system. It would be great if any problems with the new system could be brought to our attention via any of our "),t("a",_,[e("social channels"),r(o)]),e(" so we can look to fix any issues that have yet to be encountered by us.")]),t("p",null,[e("We have a rather significant update to our "),v,e(' package. This package is used to display symbols within Pulsar (e.g. function definitions) and allows you to navigate your code via those symbols. This package has had a rather major overhaul and now follows the standard "provider/consumer" model as many other Pulsar packages do. In particular, this allows for packages to provide symbols to '),y,e(", such as Tree-sitter grammars, via the new "),k,e(" package. The upshot of this, combined with the new Tree-sitter implementation, is that there will be a much richer and more accurate display of symbols in your project. More information can be found in the "),t("a",x,[e("pull request"),r(o)]),e(" for this change.")]),t("p",null,[e("A new Tree-sitter PHP grammar has been added to Pulsar as part of ongoing Tree-sitter grammar upgrades and improvements, which includes some contributions from community member "),t("a",T,[e("@claytonrcarter"),r(o)]),e(" who had a parser for PHPDoc allowing us to highlight documentation comments in PHP in a similar vein to JSDoc injection JS/TS files.")]),P,I,t("p",null,[e("And last, we have a change to the default behavior of rendering emojis in Markdown as part of the new "),E,e(" API. This issue was discovered due to an unwelcome (but admittedly rather apt) \u{1F621} emoji in the middle of an error message popup. While "),t("a",j,[e("the error"),r(o)]),e(" was rather hilarious, we did decide that it needed to be banished by default for the sake of one of our team members' sanity (and to reduce unnecessary obfuscation of errors, of course).")]),A,t("ul",null,[t("li",null,[e("Fixed: Tree-sitter fixes for December (including a PHP grammar!) "),t("a",D,[e("@savetheclocktower"),r(o)])]),t("li",null,[e("Added: Make "),F,e(" the default... "),t("a",M,[e("@savetheclocktower"),r(o)])]),t("li",null,[e("Fixed: Ensure editor is visible before measuring block decorations "),t("a",S,[e("@savetheclocktower"),r(o)])]),t("li",null,[e("Added: Overhaul "),W,e(),t("a",N,[e("@savetheclocktower"),r(o)])]),t("li",null,[e("Added: Default to no emoji when rendering Markdown "),t("a",V,[e("@savetheclocktower"),r(o)])])]),C,t("ul",null,[t("li",null,[e("Fixed: [find-and-replace] Fix "),H,e(" utility "),t("a",U,[e("@savetheclocktower"),r(o)])])]),q,t("ul",null,[t("li",null,[e("Fixed: [symbols-view] Fix issue with returning from a declaration "),t("a",B,[e("@savetheclocktower"),r(o)])])])])}const R=a(d,[["render",J],["__file","20240115-Daeraxa-v1.113.0.html.vue"]]);export{R as default};
