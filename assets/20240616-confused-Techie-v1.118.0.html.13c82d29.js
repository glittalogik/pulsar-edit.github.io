import{_ as a,o as n,c as s,a as t,b as e,d as r,e as i,f as l,r as d}from"./app.69304be2.js";const c={},h={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.118.0",target:"_blank",rel:"noopener noreferrer"},u=l('<h2 id="hot-dog-it-s-another-pulsar-release" tabindex="-1"><a class="header-anchor" href="#hot-dog-it-s-another-pulsar-release" aria-hidden="true">#</a> Hot dog, it&#39;s another Pulsar release!</h2><p>Get your grills ready, Pulsar v1.118.0 is cooking with gas! This release brings lots of love to syntax highlighting, along with a zesty sprinkling of features and fixes.</p><p>We&#39;ve got Tree-sitter fixes and improvements, including improved documentation around Tree-sitter&#39;s usage, an updated PHP parser, fixed syntax quoting on Clojure, as well as enhanced Clojure highlighting support for metadata and &quot;def&quot; elements, as well as improved injection points for Clojure. EDN files are back to being detected as Clojure, but will highlight correctly as EDN. Tasty!</p><p>Within the Pulsar application the new setting <code>core.allowWindowTransparency</code> lets users set the background of the editor to support transparency, although transparent CSS styles must be set by a theme or user stylesheet for Pulsar to actually be transparent. The <code>textChanged</code> property is now accurate when characters are deleted.</p><p>The Tree-sitter syntax highlighting system now has a new test for queries <code>ancestorTypeNearerThan</code> which helps matching the <em>first</em> type as an ancestor, as well as supporting a second <code>buffer</code> argument in the <code>content</code> field of <code>addInjectionPoint</code> for easier customization.</p><p>Finally, for our community package developers, they will be glad to hear that first time publication issues have been resolved with a rewrite of the <code>ppm publish</code> command, improving the workflow, and ensuring things work properly with the updated backend. Please feel free to share what you&#39;ve been cooking by publishing your packages!</p><p>As always, thanks a ton to all of our users and supporters for sticking with the Pulsar project, and until next time, happy coding, and see you amongst the stars!</p><p>- The Pulsar Team</p><hr><ul><li>Various tree-sitter grammar improvements <ul><li>Docs fixes</li><li>A parser update for PHP</li><li>Miscellaneous grammar fixes and improvements</li></ul></li><li>Added a preference <code>core.allowWindowTransparency</code> so that themes and user stylesheets can make editor windows&#39; backgrounds transparent.</li><li>Added a new modern tree sitter &quot;test&quot; for highlight query - <code>ancestorTypeNearerThan</code> that matches if it finds the <em>first</em> type as an ancestor, but <em>doesn&#39;t match</em> if any &quot;other&quot; ancestors are found before</li><li>Syntax quoting and unquoting in Clojure now highlights correctly, and also highlights full qualified keywords differently than generated ones</li><li><code>content</code> field of addInjectionPoint for modern-tree-sitter now supports a second <code>buffer</code> argument, for better customization if one wants to</li><li>EDN is back to being detected as Clojure (for compatibility) but highlights as EDN</li><li>Fixed syntax quoting on Clojure grammar (newer tree-sitter), fixed some injection points on Clojure. Added support for highligting metadata, and added better support for &quot;def&quot; elements (for example - doesn&#39;t scope <code>default</code> or <code>definition</code> as a <code>def</code>, but highlights <code>p/defresolver</code>)</li><li>Fixed <code>textChanged</code> property to be accurate when deleting characters</li><li>Fixed <code>ppm publish</code> for publishing brand new packages</li></ul><h3 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h3>',11),p={href:"https://github.com/pulsar-edit/pulsar/pull/1010",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/pulsar-edit/pulsar/pull/982",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/pulsar-edit/pulsar/pull/729",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"onDidChangeCursorPosition",-1),b={href:"https://github.com/pulsar-edit/pulsar/pull/810",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/pulsar-edit/pulsar/pull/1014",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/pulsar-edit/pulsar/pull/1011",target:"_blank",rel:"noopener noreferrer"};function w(k,x){const o=d("ExternalLinkIcon");return n(),s("div",null,[t("p",null,[e("Pulsar "),t("a",h,[e("1.118.0"),r(o)]),e(" is available now!")]),i(" more "),u,t("ul",null,[t("li",null,[e("Fixed: Tree-sitter rolling fixes, 1.118 edition "),t("a",p,[e("@savetheclocktower"),r(o)])]),t("li",null,[e("Added: src: Allow windows to be transparent, behind a pref (off by default) "),t("a",f,[e("@DeeDeeG"),r(o)])]),t("li",null,[e("Added: Another batch of Clojure enhancements "),t("a",g,[e("@mauricioszabo"),r(o)])]),t("li",null,[e("Fixed: Fix "),m,e(" callback event property on deleting characters "),t("a",b,[e("@mauricioszabo"),r(o)])]),t("li",null,[e("Bumped: Update ppm to commit 3542dee00f4622f7458f2f65f05e5 "),t("a",y,[e("@DeeDeeG"),r(o)])]),t("li",null,[e("Updated: Cirrus: Update Rolling upload token "),t("a",_,[e("@DeeDeeG"),r(o)])])])])}const T=a(c,[["render",w],["__file","20240616-confused-Techie-v1.118.0.html.vue"]]);export{T as default};
