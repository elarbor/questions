import{_ as i,c as s,o as a,a3 as t}from"./chunks/framework.BR_tWRn5.js";const g=JSON.parse('{"title":"Vue常用的修饰符有哪些有什么应用场景","description":"","frontmatter":{},"headers":[],"relativePath":"vue2/modifier.md","filePath":"vue2/modifier.md"}'),e={name:"vue2/modifier.md"},l=t(`<h1 id="vue常用的修饰符有哪些有什么应用场景" tabindex="-1">Vue常用的修饰符有哪些有什么应用场景 <a class="header-anchor" href="#vue常用的修饰符有哪些有什么应用场景" aria-label="Permalink to &quot;Vue常用的修饰符有哪些有什么应用场景&quot;">​</a></h1><p><img src="https://static.vue-js.com/8f718e30-42c0-11eb-ab90-d9ae814b240d.png" alt="" loading="lazy"></p><h2 id="一、修饰符是什么" tabindex="-1">一、修饰符是什么 <a class="header-anchor" href="#一、修饰符是什么" aria-label="Permalink to &quot;一、修饰符是什么&quot;">​</a></h2><p>在程序世界里，修饰符是用于限定类型以及类型成员的声明的一种符号</p><p>在<code>Vue</code>中，修饰符处理了许多<code>DOM</code>事件的细节，让我们不再需要花大量的时间去处理这些烦恼的事情，而能有更多的精力专注于程序的逻辑处理</p><p><code>vue</code>中修饰符分为以下五种：</p><ul><li>表单修饰符</li><li>事件修饰符</li><li>鼠标按键修饰符</li><li>键值修饰符</li><li>v-bind修饰符</li></ul><h2 id="二、修饰符的作用" tabindex="-1">二、修饰符的作用 <a class="header-anchor" href="#二、修饰符的作用" aria-label="Permalink to &quot;二、修饰符的作用&quot;">​</a></h2><h3 id="表单修饰符" tabindex="-1">表单修饰符 <a class="header-anchor" href="#表单修饰符" aria-label="Permalink to &quot;表单修饰符&quot;">​</a></h3><p>在我们填写表单的时候用得最多的是<code>input</code>标签，指令用得最多的是<code>v-model</code></p><p>关于表单的修饰符有如下：</p><ul><li>lazy</li><li>trim</li><li>number</li></ul><h4 id="lazy" tabindex="-1">lazy <a class="header-anchor" href="#lazy" aria-label="Permalink to &quot;lazy&quot;">​</a></h4><p>在我们填完信息，光标离开标签的时候，才会将值赋予给<code>value</code>，也就是在<code>change</code>事件之后再进行信息同步</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> v-model.lazy=&quot;value&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;p&gt;{{value}}&lt;/p&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="trim" tabindex="-1">trim <a class="header-anchor" href="#trim" aria-label="Permalink to &quot;trim&quot;">​</a></h4><p>自动过滤用户输入的首空格字符，而中间的空格不会过滤</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> v-model.trim=&quot;value&quot;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="number" tabindex="-1">number <a class="header-anchor" href="#number" aria-label="Permalink to &quot;number&quot;">​</a></h4><p>自动将用户的输入值转为数值类型，但如果这个值无法被<code>parseFloat</code>解析，则会返回原来的值</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> v-model.number=&quot;age&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="事件修饰符" tabindex="-1">事件修饰符 <a class="header-anchor" href="#事件修饰符" aria-label="Permalink to &quot;事件修饰符&quot;">​</a></h3><p>事件修饰符是对事件捕获以及目标进行了处理，有如下修饰符：</p><ul><li>stop</li><li>prevent</li><li>self</li><li>once</li><li>capture</li><li>passive</li><li>native</li></ul><h4 id="stop" tabindex="-1">stop <a class="header-anchor" href="#stop" aria-label="Permalink to &quot;stop&quot;">​</a></h4><p>阻止了事件冒泡，相当于调用了<code>event.stopPropagation</code>方法</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click=&quot;shout(2)&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  &lt;button</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click.stop=&quot;shout(1)&quot;&gt;ok&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//只输出1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="prevent" tabindex="-1">prevent <a class="header-anchor" href="#prevent" aria-label="Permalink to &quot;prevent&quot;">​</a></h4><p>阻止了事件的默认行为，相当于调用了<code>event.preventDefault</code>方法</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> v-on:submit.prevent=&quot;onSubmit&quot;&gt;&lt;/form&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="self" tabindex="-1">self <a class="header-anchor" href="#self" aria-label="Permalink to &quot;self&quot;">​</a></h4><p>只当在 <code>event.target</code> 是当前元素自身时触发处理函数</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> v-on:click.self=&quot;doThat&quot;&gt;...&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 <code>v-on:click.prevent.self</code> 会阻止<strong>所有的点击</strong>，而 <code>v-on:click.self.prevent</code> 只会阻止对元素自身的点击</p></blockquote><h4 id="once" tabindex="-1">once <a class="header-anchor" href="#once" aria-label="Permalink to &quot;once&quot;">​</a></h4><p>绑定了事件以后只能触发一次，第二次就不会触发</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click.once=&quot;shout(1)&quot;&gt;ok&lt;/button&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="capture" tabindex="-1">capture <a class="header-anchor" href="#capture" aria-label="Permalink to &quot;capture&quot;">​</a></h4><p>使事件触发从包含这个元素的顶层开始往下触发</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click.capture=&quot;shout(1)&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    obj1</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;div</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click.capture=&quot;shout(2)&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    obj2</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;div</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click=&quot;shout(3)&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    obj3</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;div</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click=&quot;shout(4)&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    obj4</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出结构: 1 2 4 3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="passive" tabindex="-1">passive <a class="header-anchor" href="#passive" aria-label="Permalink to &quot;passive&quot;">​</a></h4><p>在移动端，当我们在监听元素滚动事件的时候，会一直触发<code>onscroll</code>事件会让我们的网页变卡，因此我们使用这个修饰符的时候，相当于给<code>onscroll</code>事件整了一个<code>.lazy</code>修饰符</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 滚动事件的默认行为</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (即滚动行为) 将会立即触发 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 而不会等待 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`onScroll\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 完成  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 这其中包含 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`event.preventDefault()\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 的情况 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> v-on:scroll.passive=&quot;onScroll&quot;&gt;...&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>不要把 <code>.passive</code> 和 <code>.prevent</code> 一起使用,因为 <code>.prevent</code> 将会被忽略，同时浏览器可能会向你展示一个警告。</p><p><code>passive</code> 会告诉浏览器你不想阻止事件的默认行为</p></blockquote><h4 id="native" tabindex="-1">native <a class="header-anchor" href="#native" aria-label="Permalink to &quot;native&quot;">​</a></h4><p>让组件变成像<code>html</code>内置标签那样监听根元素的原生事件，否则组件上使用 <code>v-on</code> 只会监听自定义事件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">my-component</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> v-on:click.native=&quot;doSomething&quot;&gt;&lt;/my-component&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>使用.native修饰符来操作普通HTML标签是会令事件失效的</p></blockquote><h3 id="鼠标按钮修饰符" tabindex="-1">鼠标按钮修饰符 <a class="header-anchor" href="#鼠标按钮修饰符" aria-label="Permalink to &quot;鼠标按钮修饰符&quot;">​</a></h3><p>鼠标按钮修饰符针对的就是左键、右键、中键点击，有如下：</p><ul><li>left 左键点击</li><li>right 右键点击</li><li>middle 中键点击</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click.left=&quot;shout(1)&quot;&gt;ok&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;button</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click.right=&quot;shout(1)&quot;&gt;ok&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;button</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @click.middle=&quot;shout(1)&quot;&gt;ok&lt;/button&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="键盘修饰符" tabindex="-1">键盘修饰符 <a class="header-anchor" href="#键盘修饰符" aria-label="Permalink to &quot;键盘修饰符&quot;">​</a></h3><p>键盘修饰符是用来修饰键盘事件（<code>onkeyup</code>，<code>onkeydown</code>）的，有如下：</p><p><code>keyCode</code>存在很多，但<code>vue</code>为我们提供了别名，分为以下两种：</p><ul><li>普通键（enter、tab、delete、space、esc、up...）</li><li>系统修饰键（ctrl、alt、meta、shift...）</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只有按键为keyCode的时候才触发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @keyup.keyCode=&quot;shout()&quot;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>还可以通过以下方式自定义一些全局的键盘码别名</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.config.keyCodes.f2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 113</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="v-bind修饰符" tabindex="-1">v-bind修饰符 <a class="header-anchor" href="#v-bind修饰符" aria-label="Permalink to &quot;v-bind修饰符&quot;">​</a></h3><p>v-bind修饰符主要是为属性进行操作，用来分别有如下：</p><ul><li>async</li><li>prop</li><li>camel</li></ul><h4 id="async" tabindex="-1">async <a class="header-anchor" href="#async" aria-label="Permalink to &quot;async&quot;">​</a></h4><p>能对<code>props</code>进行一个双向绑定</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//父组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comp</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :myMessage.sync=&quot;bar&quot;&gt;&lt;/comp&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//子组件</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">this.$emit(&#39;update:myMessage&#39;,params);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>以上这种方法相当于以下的简写</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//父亲组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">comp</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :myMessage=&quot;bar&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> @update:myMessage=&quot;func&quot;&gt;&lt;/comp&gt;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">func(e){</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> this.bar</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> =</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> e;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//子组件js</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">func2(){</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  this.$emit(&#39;update:myMessage&#39;,params);</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>使用<code>async</code>需要注意以下两点：</p><ul><li><p>使用<code>sync</code>的时候，子组件传递的事件名格式必须为<code>update:value</code>，其中<code>value</code>必须与子组件中<code>props</code>中声明的名称完全一致</p></li><li><p>注意带有 <code>.sync</code> 修饰符的 <code>v-bind</code> 不能和表达式一起使用</p></li><li><p>将 <code>v-bind.sync</code> 用在一个字面量的对象上，例如 <code>v-bind.sync=”{ title: doc.title }”</code>，是无法正常工作的</p></li></ul><h4 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h4><p>设置自定义标签属性，避免暴露数据，防止污染HTML结构</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uid&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;title1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :index.prop=&quot;index&quot;&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="camel" tabindex="-1">camel <a class="header-anchor" href="#camel" aria-label="Permalink to &quot;camel&quot;">​</a></h4><p>将命名变为驼峰命名法，如将<code> view-Box</code>属性名转换为 <code>viewBox</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :viewBox=&quot;viewBox&quot;&gt;&lt;/svg&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="三、应用场景" tabindex="-1">三、应用场景 <a class="header-anchor" href="#三、应用场景" aria-label="Permalink to &quot;三、应用场景&quot;">​</a></h2><p>根据每一个修饰符的功能，我们可以得到以下修饰符的应用场景：</p><ul><li>.stop：阻止事件冒泡</li><li>.native：绑定原生事件</li><li>.once：事件只执行一次</li><li>.self ：将事件绑定在自身身上，相当于阻止事件冒泡</li><li>.prevent：阻止默认事件</li><li>.caption：用于事件捕获</li><li>.once：只触发一次</li><li>.keyCode：监听特定键盘按下</li><li>.right：右键</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://segmentfault.com/a/1190000016786254" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000016786254</a></li><li><a href="https://vue3js.cn/docs/zh" target="_blank" rel="noreferrer">https://vue3js.cn/docs/zh</a></li></ul>`,80),n=[l];function p(h,r,d,k,o,c){return a(),s("div",null,n)}const b=i(e,[["render",p]]);export{g as __pageData,b as default};
