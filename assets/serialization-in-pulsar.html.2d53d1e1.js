import{_ as n,o as s,c as a,f as e}from"./app.69304be2.js";const t={},i=e(`<h2 id="serialization-in-pulsar" tabindex="-1"><a class="header-anchor" href="#serialization-in-pulsar" aria-hidden="true">#</a> Serialization in Pulsar</h2><p>When a window is refreshed or restored from a previous session, the view and its associated objects are <em>deserialized</em> from a JSON representation that was stored during the window&#39;s previous shutdown. For your own views and objects to be compatible with refreshing, you&#39;ll need to make them play nicely with the serializing and deserializing.</p><h3 id="package-serialization-hook" tabindex="-1"><a class="header-anchor" href="#package-serialization-hook" aria-hidden="true">#</a> Package Serialization Hook</h3><p>Your package&#39;s main module can optionally include a <code>serialize</code> method, which will be called before your package is deactivated. You should return a JSON-serializable object, which will be handed back to you as an object argument to <code>activate</code> next time it is called. In the following example, the package keeps an instance of <code>MyObject</code> in the same state across refreshes.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">activate</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>myObject <span class="token operator">=</span> state
			<span class="token operator">?</span> atom<span class="token punctuation">.</span>deserializers<span class="token punctuation">.</span><span class="token function">deserialize</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
			<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">MyObject</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>myObject<span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="serialization-methods" tabindex="-1"><a class="header-anchor" href="#serialization-methods" aria-hidden="true">#</a> Serialization Methods</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyObject</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">deserializer</span><span class="token operator">:</span> <span class="token string">&quot;MyObject&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="serialize" tabindex="-1"><a class="header-anchor" href="#serialize" aria-hidden="true">#</a> <code>serialize()</code></h4><p>Objects that you want to serialize should implement <code>.serialize()</code>. This method should return a serializable object, and it must contain a key named <code>deserializer</code> whose value is the name of a registered deserializer that can convert the rest of the data to an object. It&#39;s usually just the name of the class itself.</p><h4 id="registering-deserializers" tabindex="-1"><a class="header-anchor" href="#registering-deserializers" aria-hidden="true">#</a> Registering Deserializers</h4><p>The other side of the coin is deserializers, whose job is to convert a state object returned from a previous call to <code>serialize</code> back into a genuine object.</p><h5 id="deserializers-in-package-json" tabindex="-1"><a class="header-anchor" href="#deserializers-in-package-json" aria-hidden="true">#</a> <code>deserializers</code> in <code>package.json</code></h5><p>The preferred way to register deserializers is via your package&#39;s <code>package.json</code> file:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wordcount&quot;</span><span class="token punctuation">,</span>
  ...
  <span class="token property">&quot;deserializers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;MyObject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deserializeMyObject&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, the key (<code>&quot;MyObject&quot;</code>) is the name of the deserializer\u2014the same string used by the <code>deserializer</code> field in the object returned by your <code>serialize()</code> method. The value (<code>&quot;deserializeMyObject&quot;</code>) is the name of a function in your main module that&#39;ll be passed the serialized data and will return a genuine object. For example, your main module might look like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">deserializeMyObject</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you can call the global <code>deserialize</code> method with state returned from <code>serialize</code>, and your class&#39;s <code>deserialize</code> method will be selected automatically.</p><h5 id="atom-deserializers-add-klass" tabindex="-1"><a class="header-anchor" href="#atom-deserializers-add-klass" aria-hidden="true">#</a> atom.deserializers.add(klass)</h5><p>An alternative is to use the <code>atom.deserializers.add</code> method with your class in order to make it available to the deserialization system. Usually this is used in conjunction with a class-level <code>deserialize</code> method:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyObject</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token function">initClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		atom<span class="token punctuation">.</span>deserializers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">static</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyObject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">deserializer</span><span class="token operator">:</span> <span class="token string">&quot;MyObject&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

MyObject<span class="token punctuation">.</span><span class="token function">initClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>While this used to be the standard method of registering a deserializer, the <code>package.json</code> method is now preferred since it allows Pulsar to defer loading and executing your code until it&#39;s actually needed.</p><h3 id="versioning" tabindex="-1"><a class="header-anchor" href="#versioning" aria-hidden="true">#</a> Versioning</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyObject</span> <span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token function">initClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		atom<span class="token punctuation">.</span>deserializers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">this</span><span class="token punctuation">.</span>version <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">static</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// ...</span>
	<span class="token punctuation">}</span>

	<span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>version<span class="token punctuation">,</span>
			<span class="token comment">// ...</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

MyObject<span class="token punctuation">.</span><span class="token function">initClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your serializable class can optionally have a class-level <code>@version</code> property and include a <code>version</code> key in its serialized state. When deserializing, Pulsar will only attempt to call deserialize if the two versions match, and otherwise return undefined.<!--TODO:Evaluate if the following is still true for us: We plan on implementing a migration system in the future, but this at least protects you from improperly deserializing old state.--></p>`,24),o=[i];function p(c,l){return s(),a("div",null,o)}const r=n(t,[["render",p],["__file","serialization-in-pulsar.html.vue"]]);export{r as default};
