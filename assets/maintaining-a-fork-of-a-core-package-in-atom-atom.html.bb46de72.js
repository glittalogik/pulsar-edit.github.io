import{_ as i,o as r,c as s,a as e,b as t,d as a,f as n,r as c}from"./app.69304be2.js";const d={},m=e("h3",{id:"maintaining-a-fork-of-a-core-package-in-atom-atom",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#maintaining-a-fork-of-a-core-package-in-atom-atom","aria-hidden":"true"},"#"),t(" Maintaining a Fork of a Core Package in atom/atom")],-1),l={href:"https://github.com/atom/atom/blob/master/docs/rfcs/003-consolidate-core-packages.md",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/atom/atom",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/atom/one-light-ui",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/atom/atom/tree/master/packages/one-light-ui",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"packages/one-light-ui",-1),f=e("p",null,"If you forked one of the core packages before it was moved into the atom/atom repository, and you want to continue merging upstream changes into your fork, please follow the steps below.",-1),_=e("h4",{id:"step-by-step-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-by-step-guide","aria-hidden":"true"},"#"),t(" Step-by-step guide")],-1),k={href:"https://github.com/atom/one-light-ui",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"one-light-ui-plus",-1),v=n(`<h5 id="add-atom-atom-as-a-remote" tabindex="-1"><a class="header-anchor" href="#add-atom-atom-as-a-remote" aria-hidden="true">#</a> Add atom/atom as a Remote</h5><p>Navigate to your local clone of your fork:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ cd path/to/your/fork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),y={href:"https://github.com/atom/atom",target:"_blank",rel:"noopener noreferrer"},x=n(`<div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ git remote add upstream https://github.com/atom/atom.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="get-the-latest-changes-for-the-core-package" tabindex="-1"><a class="header-anchor" href="#get-the-latest-changes-for-the-core-package" aria-hidden="true">#</a> Get the Latest Changes for the Core Package</h5><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Tip:</strong> Follow these steps each time you want to merge upstream changes into your fork.</p></div><p>Fetch the latest changes from the atom/atom repository:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ git fetch upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Identify recent changes to the core package. For example, if you&#39;re maintaining a fork of the one-light-ui package, then you&#39;ll want to identify recent changes in the <code>packages/one-light-ui</code> directory:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ git log upstream/master -- packages/one-light-ui
8ac9919a0 Bump up border size (Hugh Baht, 17 minutes ago)
3bf4d226e Remove obsolete build status link in one-light-ui README (Jason Rudolph, 3 days ago)
3edf64ad0 Merge pull request #42 from atom/sm-select-list (simurai, 2 weeks ago)
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Look through the log and identify the commits that you want to merge into your fork.</p><h5 id="merge-upstream-changes-into-your-fork" tabindex="-1"><a class="header-anchor" href="#merge-upstream-changes-into-your-fork" aria-hidden="true">#</a> Merge Upstream Changes into Your Fork</h5>`,9),w={href:"https://git-scm.com/docs/git-format-patch",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"git format-patch",-1),F={href:"https://git-scm.com/docs/git-am",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"git am",-1),I=e("code",null,"8ac9919a0",-1),B=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ git format-patch -1 --stdout 8ac9919a0 | git am -p3
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=e("p",null,"Repeat this step for each commit that you want to merge into your fork.",-1);function N(R,$){const o=c("ExternalLinkIcon");return r(),s("div",null,[m,e("p",null,[t("Originally, each of Atom's core packages resided in a separate repository. In 2018, in an effort to streamline the development of Atom by reducing overhead, the Atom team "),e("a",l,[t("consolidated many core Atom packages"),a(o)]),t(" into the "),e("a",h,[t("atom/atom repository"),a(o)]),t(". For example, the one-light-ui package was originally maintained in the "),e("a",u,[t("atom/one-light-ui"),a(o)]),t(" repository, but it is now maintained in the "),e("a",g,[p,t(" directory in the atom/atom repository"),a(o)]),t(".")]),f,_,e("p",null,[t("For the sake of this guide, let's assume that you forked the "),e("a",k,[t("atom/one-light-ui"),a(o)]),t(" repository, renamed your fork to "),b,t(", and made some customizations.")]),v,e("p",null,[t("Add the "),e("a",y,[t("atom/atom repository"),a(o)]),t(" as a git remote:")]),x,e("p",null,[t("For each commit that you want to bring into your fork, use "),e("a",w,[A,a(o)]),t(" in conjunction with "),e("a",F,[C,a(o)]),t(". For example, to merge commit "),I,t(" into your fork:")]),B,E])}const M=i(d,[["render",N],["__file","maintaining-a-fork-of-a-core-package-in-atom-atom.html.vue"]]);export{M as default};
