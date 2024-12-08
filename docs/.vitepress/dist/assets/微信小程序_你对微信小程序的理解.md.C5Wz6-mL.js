import{_ as e,c as a,o,a3 as i}from"./chunks/framework.BR_tWRn5.js";const m=JSON.parse('{"title":"说说你对微信小程序的理解？优缺点？","description":"","frontmatter":{},"headers":[],"relativePath":"微信小程序/你对微信小程序的理解.md","filePath":"微信小程序/你对微信小程序的理解.md"}'),l={name:"微信小程序/你对微信小程序的理解.md"},c=i('<h1 id="说说你对微信小程序的理解-优缺点" tabindex="-1">说说你对微信小程序的理解？优缺点？ <a class="header-anchor" href="#说说你对微信小程序的理解-优缺点" aria-label="Permalink to &quot;说说你对微信小程序的理解？优缺点？&quot;">​</a></h1><p><img src="https://static.vue-js.com/be367c80-300e-11ec-8e64-91fdec0f05a1.png" alt="" loading="lazy"></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>2017年，微信正式推出了小程序，允许外部开发者在微信内部运行自己的代码，开展业务</p><p>截至目前，小程序已经成为国内前端的一个重要业务，跟 <code>Web</code> 和手机 <code>App</code> 有着同等的重要性</p><p><img src="https://static.vue-js.com/ce751de0-300e-11ec-8e64-91fdec0f05a1.png" alt="" loading="lazy"></p><p>小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用</p><p>也体现了“用完即走”的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无需安装卸载</p><p>注意的是，除了微信小程序，还有百度小程序、微信小程序、支付宝小程序、抖音小程序，都是每个平台自己开发的，都是有针对性平台的应用程序</p><h2 id="二、背景" tabindex="-1">二、背景 <a class="header-anchor" href="#二、背景" aria-label="Permalink to &quot;二、背景&quot;">​</a></h2><p>⼩程序并⾮凭空冒出来的⼀个概念，当微信中的 <code>WebView</code> 逐渐成为移动 <code>Web</code>的⼀个重要⼊⼝时，微信就有相关的 <code>JS-SDK</code></p><p><code>JS-SDK</code> 解决了移动⽹⻚能⼒不⾜的问题，通过暴露微信的接⼝使得 <code>Web</code> 开发者能够拥有更多的能⼒，然⽽在更多的能⼒之外，<code>JS-SDK</code>的模式并没有解决使⽤移动⽹⻚遇到的体验不良的问题</p><p>因此需要设计⼀个⽐较好的系统，使得所有开发者在微信中都能获得⽐较好的体验：</p><ul><li>快速的加载</li><li>更强⼤的能⼒</li><li>原⽣的体验</li><li>易⽤且安全的微信数据开放</li><li>⾼效和简单的开发</li></ul><p>这些是<code>JS-SDK</code>做不到的，需要设计一个全新的小程序系统</p><p>对于小程序的开发，提供一个简单、高效的应用开发框架和丰富的组件及<code>API</code>，帮助开发者开发出具有原生体验的服务</p><p>其中相比<code>H5</code>，小程序与其的区别有如下：</p><ul><li>运⾏环境：⼩程序基于浏览器内核重构的内置解析器</li><li>系统权限：⼩程序能获得更多的系统权限，如⽹络通信状态、数据缓存能⼒等</li><li>渲染机制：⼩程序的逻辑层和渲染层是分开的</li></ul><p>小程序可以视为只能用微信打开和浏览的<code>H5</code>，小程序和网页的技术模型是一样的，用到的 <code>JavaScript</code> 语言和 <code>CSS</code> 样式也是一样的，只是网页的 <code>HTML</code> 标签被稍微修改成了 <code>WXML</code> 标签</p><p>因此可以说，小程序页面本质上就是网页</p><p>其中关于微信小程序的实现原理，我们在后面的文章讲到</p><h2 id="三、优缺点" tabindex="-1">三、优缺点 <a class="header-anchor" href="#三、优缺点" aria-label="Permalink to &quot;三、优缺点&quot;">​</a></h2><p>优点：</p><ul><li>随搜随用，用完即走：使得小程序可以代替许多APP，或是做APP的整体嫁接，或是作为阉割版功能的承载体</li><li>流量大，易接受：小程序借助自身平台更加容易引入更多的流量</li><li>安全</li><li>开发门槛低</li><li>降低兼容性限制</li></ul><p>缺点：</p><ul><li>用户留存：及相关数据显示，小程序的平均次日留存在13%左右，但是双周留存骤降到仅有1%</li><li>体积限制：微信小程序只有2M的大小，这样导致无法开发大型一些的小程序</li><li>受控微信：比起APP，尤其是安卓版的高自由度，小程序要面对很多来自微信的限制，从功能接口，甚至到类别内容，都要接受微信的管控</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/framework/</a></li><li><a href="https://www.zhihu.com/question/263816362" target="_blank" rel="noreferrer">https://www.zhihu.com/question/263816362</a></li></ul>',28),t=[c];function r(d,p,n,s,h,_){return o(),a("div",null,t)}const f=e(l,[["render",r]]);export{m as __pageData,f as default};
