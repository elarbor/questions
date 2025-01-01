import{_ as e,c as a,o,a3 as t}from"./chunks/framework.BR_tWRn5.js";const u=JSON.parse('{"title":"如何理解CDN？说说实现原理？","description":"","frontmatter":{},"headers":[],"relativePath":"http/CDN.md","filePath":"http/CDN.md"}'),c={name:"http/CDN.md"},d=t('<h1 id="如何理解cdn-说说实现原理" tabindex="-1">如何理解CDN？说说实现原理？ <a class="header-anchor" href="#如何理解cdn-说说实现原理" aria-label="Permalink to &quot;如何理解CDN？说说实现原理？&quot;">​</a></h1><p><img src="https://static.vue-js.com/437ae0f0-b86b-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><h2 id="一、是什么" tabindex="-1">一、是什么 <a class="header-anchor" href="#一、是什么" aria-label="Permalink to &quot;一、是什么&quot;">​</a></h2><p>CDN (全称 Content Delivery Network)，即内容分发网络</p><p>构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。<code>CDN</code> 的关键技术主要有内容存储和分发技术</p><p>简单来讲，<code>CDN</code>就是根据用户位置分配最近的资源</p><p>于是，用户在上网的时候不用直接访问源站，而是访问离他“最近的”一个 CDN 节点，术语叫<strong>边缘节点</strong>，其实就是缓存了源站内容的代理服务器。如下图：</p><p><img src="https://static.vue-js.com/4f0289f0-b86b-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><h2 id="二、原理分析" tabindex="-1">二、原理分析 <a class="header-anchor" href="#二、原理分析" aria-label="Permalink to &quot;二、原理分析&quot;">​</a></h2><p>在没有应用<code>CDN</code>时，我们使用域名访问某一个站点时的路径为</p><blockquote><p>用户提交域名→浏览器对域名进行解释→<code>DNS</code> 解析得到目的主机的IP地址→根据IP地址访问发出请求→得到请求数据并回复</p></blockquote><p>应用<code>CDN</code>后，<code>DNS</code> 返回的不再是 <code>IP</code> 地址，而是一个<code>CNAME</code>(Canonical Name ) 别名记录，指向<code>CDN</code>的全局负载均衡</p><p><code>CNAME</code>实际上在域名解析的过程中承担了中间人（或者说代理）的角色，这是<code>CDN</code>实现的关键</p><h4 id="负载均衡系统" tabindex="-1">负载均衡系统 <a class="header-anchor" href="#负载均衡系统" aria-label="Permalink to &quot;负载均衡系统&quot;">​</a></h4><p>由于没有返回<code>IP</code>地址，于是本地<code>DNS</code>会向负载均衡系统再发送请求 ，则进入到<code>CDN</code>的全局负载均衡系统进行智能调度：</p><ul><li><p>看用户的 IP 地址，查表得知地理位置，找相对最近的边缘节点</p></li><li><p>看用户所在的运营商网络，找相同网络的边缘节点</p></li><li><p>检查边缘节点的负载情况，找负载较轻的节点</p></li><li><p>其他，比如节点的“健康状况”、服务能力、带宽、响应时间等</p></li></ul><p>结合上面的因素，得到最合适的边缘节点，然后把这个节点返回给用户，用户就能够就近访问<code>CDN</code>的缓存代理</p><p>整体流程如下图：</p><p><img src="https://static.vue-js.com/588d7890-b86b-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><h4 id="缓存代理" tabindex="-1">缓存代理 <a class="header-anchor" href="#缓存代理" aria-label="Permalink to &quot;缓存代理&quot;">​</a></h4><p>缓存系统是 <code>CDN </code>的另一个关键组成部分，缓存系统会有选择地缓存那些最常用的那些资源</p><p>其中有两个衡量<code>CDN</code>服务质量的指标：</p><ul><li>命中率：用户访问的资源恰好在缓存系统里，可以直接返回给用户，命中次数与所有访问次数之比</li><li>回源率：缓存里没有，必须用代理的方式回源站取，回源次数与所有访问次数之比</li></ul><p>缓存系统也可以划分出层次，分成一级缓存节点和二级缓存节点。一级缓存配置高一些，直连源站，二级缓存配置低一些，直连用户</p><p>回源的时候二级缓存只找一级缓存，一级缓存没有才回源站，可以有效地减少真正的回源</p><p>现在的商业 <code>CDN</code>命中率都在 90% 以上，相当于把源站的服务能力放大了 10 倍以上</p><h2 id="三、总结" tabindex="-1">三、总结 <a class="header-anchor" href="#三、总结" aria-label="Permalink to &quot;三、总结&quot;">​</a></h2><p><code>CDN</code> 目的是为了改善互联网的服务质量，通俗一点说其实就是提高访问速度</p><p><code>CDN</code> 构建了全国、全球级别的专网，让用户就近访问专网里的边缘节点，降低了传输延迟，实现了网站加速</p><p>通过<code>CDN</code>的负载均衡系统，智能调度边缘节点提供服务，相当于<code>CDN</code>服务的大脑，而缓存系统相当于<code>CDN</code>的心脏，缓存命中直接返回给用户，否则回源</p><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/%E5%85%A7%E5%AE%B9%E5%82%B3%E9%81%9E%E7%B6%B2%E8%B7%AF" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/內容傳遞網路</a></li><li><a href="https://juejin.cn/post/6844903890706661389#heading-5" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903890706661389#heading-5</a></li><li><a href="https://blog.csdn.net/lxx309707872/article/details/109078783" target="_blank" rel="noreferrer">https://blog.csdn.net/lxx309707872/article/details/109078783</a></li></ul>',32),i=[d];function l(r,p,n,s,h,N){return o(),a("div",null,i)}const C=e(c,[["render",l]]);export{u as __pageData,C as default};