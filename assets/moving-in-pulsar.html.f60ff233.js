import{_ as u,a as m}from"./symbol.b88bf5a9.js";import{_ as b}from"./bookmarks.736c4e14.js";import{_ as h,o as g,c as p,d as r,w as o,a as e,b as t,f as d,r as c}from"./app.69304be2.js";const v={},f=e("h2",{id:"moving-in-pulsar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#moving-in-pulsar","aria-hidden":"true"},"#"),t(" Moving in Pulsar")],-1),y=e("p",null,"While it's pretty easy to move around Pulsar by clicking with the mouse or using the arrow keys, there are some keybindings that may help you keep your hands on the keyboard and navigate around a little faster.",-1),k=e("p",null,"Pulsar has support for all the standard Linux cursor movement key combinations. To go up, down, left or right a single character you can use the arrow keys.",-1),_=e("p",null,"In addition to single character movement, there are a number of other movement keybindings:",-1),w=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+Left"),t(" - Move to the beginning of word")]),e("li",null,[e("kbd",null,"Ctrl+Right"),t(" - Move to the end of word")]),e("li",null,[e("kbd",null,"Home"),t(" - Move to the first character of the current line")]),e("li",null,[e("kbd",null,"End"),t(" - Move to the end of the line")]),e("li",null,[e("kbd",null,"Ctrl+Home"),t(" - Move to the top of the file")]),e("li",null,[e("kbd",null,"Ctrl+End"),t(" - Move to the bottom of the file")])],-1),x=e("p",null,[t("Pulsar ships with many of the basic Emacs keybindings for navigating a document. To go up and down a single character, you can use "),e("kbd",null,"Ctrl+P"),t(" and "),e("kbd",null,"Ctrl+N"),t(". To go left and right a single character, you can use "),e("kbd",null,"Ctrl+B"),t(" and "),e("kbd",null,"Ctrl+F"),t(". These are the equivalent of using the arrow keys, though some people prefer not having to move their hands to where the arrow keys are located on their keyboard.")],-1),C=e("p",null,"In addition to single character movement, there are a number of other movement keybindings:",-1),A=e("ul",null,[e("li",null,[e("kbd",null,"Alt+Left"),t(" or "),e("kbd",null,"Alt+B"),t(" - Move to the beginning of word")]),e("li",null,[e("kbd",null,"Alt+Right"),t(" or "),e("kbd",null,"Alt+F"),t(" - Move to the end of word")]),e("li",null,[e("kbd",null,"Cmd+Left"),t(" or "),e("kbd",null,"Ctrl+A"),t(" - Move to the first character of the current line")]),e("li",null,[e("kbd",null,"Cmd+Right"),t(" or "),e("kbd",null,"Ctrl+E"),t(" - Move to the end of the line")]),e("li",null,[e("kbd",null,"Cmd+Up"),t(" - Move to the top of the file")]),e("li",null,[e("kbd",null,"Cmd+Down"),t(" - Move to the bottom of the file")])],-1),M=e("p",null,"Pulsar has support for all the standard Windows cursor movement key combinations. To go up, down, left or right a single character you can use the arrow keys.",-1),T=e("p",null,"In addition to single character movement, there are a number of other movement keybindings:",-1),L=e("ul",null,[e("li",null,[e("kbd",null,"Ctrl+Left"),t(" - Move to the beginning of word")]),e("li",null,[e("kbd",null,"Ctrl+Right"),t(" - Move to the end of word")]),e("li",null,[e("kbd",null,"Home"),t(" - Move to the first character of the current line")]),e("li",null,[e("kbd",null,"End"),t(" - Move to the end of the line")]),e("li",null,[e("kbd",null,"Ctrl+Home"),t(" - Move to the top of the file")]),e("li",null,[e("kbd",null,"Ctrl+End"),t(" - Move to the bottom of the file")])],-1),N=d('<p>You can also move directly to a specific line (and column) number with <kbd>Ctrl+G</kbd>. This will bring up a dialog that asks which line you would like to jump to. You can also use the <code>row:column</code> syntax to jump to a character in that line as well.</p><p><img src="'+u+'" alt="Go directly to a line" title="Go directly to a line"></p><h3 id="additional-movement-and-selection-commands" tabindex="-1"><a class="header-anchor" href="#additional-movement-and-selection-commands" aria-hidden="true">#</a> Additional Movement and Selection Commands</h3><p>Pulsar also has a few movement and selection commands that don&#39;t have keybindings by default. You can access these commands from the <a href="../../getting-started#command-palette">Command Palette</a>, but if you find yourself using commands that don&#39;t have a keybinding often, have no fear! You can easily add an entry to your <code>keymap.cson</code> to create a key combination. You can open <code>keymap.cson</code> file in an editor from the <strong><em>LNX</em></strong>: <em>Edit &gt; Keymap</em> - <strong><em>MAC</em></strong>: <em>Pulsar &gt; Keymap</em> - <strong><em>WIN</em></strong>: <em>File &gt; Keymap</em> menu. For example, the command <code>editor:move-to-beginning-of-screen-line</code> is available in the command palette, but it&#39;s not bound to any key combination. To create a key combination you need to add an entry in your <code>keymap.cson</code> file. For <code>editor:select-to-previous-word-boundary</code>, you can add the following to your <code>keymap.cson</code>:</p>',4),S=e("div",{class:"language-coffee ext-coffee line-numbers-mode"},[e("pre",{class:"language-coffee"},[e("code",null,[e("span",{class:"token string-property property"},"'atom-text-editor'"),e("span",{class:"token operator"},":"),t(`
  `),e("span",{class:"token string-property property"},"'ctrl-shift-e'"),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'editor:select-to-previous-word-boundary'"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-coffee ext-coffee line-numbers-mode"},[e("pre",{class:"language-coffee"},[e("code",null,[e("span",{class:"token string-property property"},"'atom-text-editor'"),e("span",{class:"token operator"},":"),t(`
  `),e("span",{class:"token string-property property"},"'cmd-shift-e'"),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'editor:select-to-previous-word-boundary'"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-coffee ext-coffee line-numbers-mode"},[e("pre",{class:"language-coffee"},[e("code",null,[e("span",{class:"token string-property property"},"'atom-text-editor'"),e("span",{class:"token operator"},":"),t(`
  `),e("span",{class:"token string-property property"},"'ctrl-shift-e'"),e("span",{class:"token operator"},":"),t(),e("span",{class:"token string"},"'editor:select-to-previous-word-boundary'"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=d('<p>This will bind the command <code>editor:select-to-previous-word-boundary</code> to <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+Shift+E</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+Shift+E</kbd>. For more information on customizing your keybindings, see <a href="#customizing-keybindings">Customizing Keybindings</a>.</p><p>Here&#39;s a list of Movement and Selection Commands that do not have a keyboard shortcut by default:</p>',2),P=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`editor:move-to-beginning-of-next-paragraph
editor:move-to-beginning-of-previous-paragraph
editor:move-to-beginning-of-screen-line
editor:move-to-beginning-of-line
editor:move-to-end-of-line
editor:move-to-first-character-of-line
editor:move-to-beginning-of-next-word
editor:move-to-previous-word-boundary
editor:move-to-next-word-boundary
editor:select-to-beginning-of-next-paragraph
editor:select-to-beginning-of-previous-paragraph
editor:select-to-end-of-line
editor:select-to-beginning-of-line
editor:select-to-beginning-of-next-word
editor:select-to-next-word-boundary
editor:select-to-previous-word-boundary
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),F=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`editor:move-to-beginning-of-next-paragraph
editor:move-to-beginning-of-previous-paragraph
editor:move-to-beginning-of-screen-line
editor:move-to-beginning-of-line
editor:move-to-beginning-of-next-word
editor:move-to-previous-word-boundary
editor:move-to-next-word-boundary
editor:select-to-beginning-of-next-paragraph
editor:select-to-beginning-of-previous-paragraph
editor:select-to-beginning-of-line
editor:select-to-beginning-of-next-word
editor:select-to-next-word-boundary
editor:select-to-previous-word-boundary
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),W=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`editor:move-to-beginning-of-next-paragraph
editor:move-to-beginning-of-previous-paragraph
editor:move-to-beginning-of-screen-line
editor:move-to-beginning-of-line
editor:move-to-end-of-line
editor:move-to-first-character-of-line
editor:move-to-beginning-of-next-word
editor:move-to-previous-word-boundary
editor:move-to-next-word-boundary
editor:select-to-beginning-of-next-paragraph
editor:select-to-beginning-of-previous-paragraph
editor:select-to-end-of-line
editor:select-to-beginning-of-line
editor:select-to-beginning-of-next-word
editor:select-to-next-word-boundary
editor:select-to-previous-word-boundary
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),O=d('<h3 id="navigating-by-symbols" tabindex="-1"><a class="header-anchor" href="#navigating-by-symbols" aria-hidden="true">#</a> Navigating by Symbols</h3><p>You can also jump around a little more informatively with the Symbols View. To jump to a symbol such as a method definition, press <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+R</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+R</kbd>. This opens a list of all symbols in the current file, which you can fuzzy filter similarly to <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+T</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd+T</kbd>. You can also search for symbols across your project but it requires a <code>tags</code> file.</p><p><img src="'+m+'" alt="Search by symbol across your project"></p>',3),R=e("code",null,"tags",-1),Y={href:"https://ctags.io/",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"tags",-1),V={href:"https://docs.ctags.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,[t("Once you have your "),e("code",null,"tags"),t(" file generated, you can use it to search for symbols across your project by pressing "),e("kbd",null,"Ctrl+Shift+R"),t(". This also enables you to use "),e("kbd",null,"Alt+Ctrl+Down"),t(" to go to and "),e("kbd",null,"Alt+Ctrl+Up"),t(" to return from the declaration of the symbol under the cursor.")],-1),B=e("p",null,[t("Once you have your "),e("code",null,"tags"),t(" file generated, you can use it to search for symbols across your project by pressing "),e("kbd",null,"Cmd+Shift+R"),t(". This also enables you to use "),e("kbd",null,"Alt+Cmd+Down"),t(" to go to and "),e("kbd",null,"Alt+Cmd+Up"),t(" to return from the declaration of the symbol under the cursor.")],-1),X=e("p",null,[t("Once you have your "),e("code",null,"tags"),t(" file generated, you can use it to search for symbols across your project by pressing "),e("kbd",{class:""},"Ctrl+Shift+R"),t(".")],-1),H=e("code",null,".ctags",-1),D=e("strong",null,[e("em",null,"LNX/MAC")],-1),K=e("code",null,"~/.ctags",-1),U=e("strong",null,[e("em",null,"WIN")],-1),G=e("code",null,"%USERPROFILE%\\.ctags",-1),J={href:"https://github.com/pulsar-edit/symbols-view/blob/master/lib/ctags-config",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/pulsar-edit/symbols-view",target:"_blank",rel:"noopener noreferrer"},Z=d('<h3 id="bookmarks" tabindex="-1"><a class="header-anchor" href="#bookmarks" aria-hidden="true">#</a> Bookmarks</h3><p>Pulsar also has a great way to bookmark specific lines in your project so you can jump back to them quickly.</p><p>If you press <strong><em>LNX/WIN</em></strong>: <kbd>Alt+Ctrl+F2</kbd> - <strong><em>MAC</em></strong> <kbd>Cmd+F2</kbd>, Pulsar will toggle a &quot;bookmark&quot; on the current line. You can set these throughout your project and use them to quickly find and jump to important lines of your project. A small bookmark symbol is added to the line gutter, like on line 22 of the image below.</p><p>If you hit <kbd>F2</kbd>, Pulsar will jump to the next bookmark in the file you currently have focused. If you use <kbd>Shift+F2</kbd> it will cycle backwards through them instead.</p><p>You can also see a list of all your project&#39;s current bookmarks and quickly filter them and jump to any of them by hitting <kbd>Ctrl+F2</kbd>.</p><p><img src="'+b+'" alt="View and filter bookmarks" title="View and filter bookmarks"></p>',6),$={href:"https://github.com/pulsar-edit/bookmarks",target:"_blank",rel:"noopener noreferrer"};function ee(te,oe){const a=c("Tabs"),s=c("ExternalLinkIcon");return g(),p("div",null,[f,y,r(a,{id:"6",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:o(({title:n,value:i,isActive:l})=>[k,_,w]),tab1:o(({title:n,value:i,isActive:l})=>[x,C,A]),tab2:o(({title:n,value:i,isActive:l})=>[M,T,L]),_:1}),N,r(a,{id:"140",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar <!--TODO: Check if these are rebranded in core-->"},{tab0:o(({title:n,value:i,isActive:l})=>[S]),tab1:o(({title:n,value:i,isActive:l})=>[j]),tab2:o(({title:n,value:i,isActive:l})=>[I]),_:1}),E,r(a,{id:"157",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:o(({title:n,value:i,isActive:l})=>[P]),tab1:o(({title:n,value:i,isActive:l})=>[F]),tab2:o(({title:n,value:i,isActive:l})=>[W]),_:1}),O,e("p",null,[t("You can generate a "),R,t(" file by using the "),e("a",Y,[t("ctags utility"),r(s)]),t(". Once it is installed, you can use it to generate a "),q,t(" file by running a command to generate it. See the "),e("a",V,[t("ctags documentation"),r(s)]),t(" for details.")]),r(a,{id:"180",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"using-pulsar"},{tab0:o(({title:n,value:i,isActive:l})=>[z]),tab1:o(({title:n,value:i,isActive:l})=>[B]),tab2:o(({title:n,value:i,isActive:l})=>[X]),_:1}),e("p",null,[t("You can customize how tags are generated by creating your own "),H,t(" file in your home directory, "),D,t(": "),K,t(" - "),U,t(": "),G,t(". An example can be found "),e("a",J,[t("here"),r(s)]),t(".")]),e("p",null,[t("The symbols navigation functionality is implemented in the "),e("a",Q,[t("symbols-view"),r(s)]),t(" package.")]),Z,e("p",null,[t("The bookmarks functionality is implemented in the "),e("a",$,[t("bookmarks"),r(s)]),t(" package.")])])}const re=h(v,[["render",ee],["__file","moving-in-pulsar.html.vue"]]);export{re as default};
