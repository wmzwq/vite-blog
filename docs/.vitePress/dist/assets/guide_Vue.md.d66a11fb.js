import{_ as s,c as n,o as a,a as l}from"./app.9b75227c.js";const p="/assets/nextTick.2cf44ea0.png",u=JSON.parse(`{"title":"Vue","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue.js 中 this.$nextTick()的使用","slug":"vue-js-中-this-nexttick-的使用","link":"#vue-js-中-this-nexttick-的使用","children":[]},{"level":2,"title":"vue+element el-select 选项无法选择的问题","slug":"vue-element-el-select-选项无法选择的问题","link":"#vue-element-el-select-选项无法选择的问题","children":[]},{"level":2,"title":"vue 解决mounted不重加载子组件问题","slug":"vue-解决mounted不重加载子组件问题","link":"#vue-解决mounted不重加载子组件问题","children":[]},{"level":2,"title":"vue 子组件的mounted为什么先执行","slug":"vue-子组件的mounted为什么先执行","link":"#vue-子组件的mounted为什么先执行","children":[]},{"level":2,"title":"vue cli 3.0 项目版本更新后文件存在缓存问题解决方案","slug":"vue-cli-3-0-项目版本更新后文件存在缓存问题解决方案","link":"#vue-cli-3-0-项目版本更新后文件存在缓存问题解决方案","children":[{"level":3,"title":"HTML文件需设置不保存缓存","slug":"html文件需设置不保存缓存","link":"#html文件需设置不保存缓存","children":[]},{"level":3,"title":"配置webpack的打包输出文件名(vue.config.js，默认没有，需要手动添加)","slug":"配置webpack的打包输出文件名-vue-config-js-默认没有-需要手动添加","link":"#配置webpack的打包输出文件名-vue-config-js-默认没有-需要手动添加","children":[]}]},{"level":2,"title":"vue中使用原生WebSocket","slug":"vue中使用原生websocket","link":"#vue中使用原生websocket","children":[]},{"level":2,"title":"使用ElementUI Table报错 'querySelector' of undefined at TableLayout.updateElsHeight","slug":"使用elementui-table报错-queryselector-of-undefined-at-tablelayout-updateelsheight","link":"#使用elementui-table报错-queryselector-of-undefined-at-tablelayout-updateelsheight","children":[]}],"relativePath":"guide/Vue.md","lastUpdated":1675148575000}`),o={name:"guide/Vue.md"},e=l(`<h1 id="vue" tabindex="-1">Vue</h1><h2 id="vue-js-中-this-nexttick-的使用" tabindex="-1">Vue.js 中 this.$nextTick()的使用</h2><p>this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。</p><p>假设我们更改了某个 dom 元素内部的文本，而这时候我们想直接打印出这个被改变后的文本是需要 dom 更新之后才会实现的，也就好比我们将打印输出的代码放在 setTimeout(fn, 0)中；</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">section</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">div ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">1&gt;</span><span style="color:#A6ACCD;">Hello World </span><span style="color:#89DDFF;">~&lt;</span><span style="color:#A6ACCD;">/h</span><span style="color:#89DDFF;">1&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">el-button type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> @click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">点击</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">/el-butto</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/section</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> default </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">console.log(333</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">console.log(this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#FFCB6B;">[&quot;hello&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">his.$nextTick(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">console.log(444</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">console.log(this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#FFCB6B;">[&quot;hello&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">created</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">console.log(111</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">console.log(this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#FFCB6B;">[&quot;hello&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">this.$nextTick(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">console.log(222</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">console.log(this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#FFCB6B;">[&quot;hello&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><img src="`+p+`" alt="Image text"></p><p>可以根据打印的顺序看到，在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作并无作用，而在created()里使用this.$nextTick()可以等待dom生成以后再来获取dom对象</p><p>this.$nextTick()在页面交互，尤其是从后台获取数据后重新生成dom对象之后的操作有很大的优势，这里只是简单的例子，实际应用中更为好用~</p><h2 id="vue-element-el-select-选项无法选择的问题" tabindex="-1">vue+element el-select 选项无法选择的问题</h2><ul><li>第一步：加个@change=&quot;select_status&quot;事件.</li></ul><p><img src="https://img-blog.csdnimg.cn/20190531170153455.png" alt=""></p><ul><li>第二步：在方法中加this.$forceUpdate();//手动强制刷新</li></ul><p><img src="https://img-blog.csdnimg.cn/2019053117044944.png" alt=""></p><h2 id="vue-解决mounted不重加载子组件问题" tabindex="-1">vue 解决mounted不重加载子组件问题</h2><p>有时需要在父组件中重复加载同一个子组件，但会出现子组件不重新加载的问题。 解决方法：在子组件外加一个div框住它</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">div v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visble&amp;&amp;datalist[selected].type=&#39;手机&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PhoneForm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v-show=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visble&amp;&amp;datalist[selected].type=&#39;手机&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">&gt;&lt;</span><span style="color:#C3E88D;">/PhoneFor</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="vue-子组件的mounted为什么先执行" tabindex="-1">vue 子组件的mounted为什么先执行</h2><p>首先，我想先谈一谈vue的生命周期。我个人认为，从一个实例对象被创建到实例对象被销毁的过程就是该对象的生命周期。那么到底这个生命周期分为哪几个部分呢？依次为：beforeCreate -&gt; created -&gt; beforeMount -&gt; mounted -&gt; beforeUpdate -&gt; updated -&gt; beforeDestory -&gt; destoryed。该过程是严格按照先后顺序来执行的，在每一个生命周期阶段内，我们都会相应的做一些事情，具体哪个环节可以执行什么操作这个我准备放到后续的文章中进行分析，今天我们主要来探讨一下，上图中父组件与子组件的执行先后顺序。</p><p>Vue中，专注于组件式开发，我认为一个组件可以是一个小小的功能模块，也可以是某一个完整的页面，至于具体是什么，这就取决你的需求。那么在开发过程中，父子组件的嵌套、父子组件执行的先后顺序肯定是不可避免的。总结归纳之后，得出以下结论：在组件开始生成到结束生成的过程中，如果该组件还包含子组件，则自己开始生成后，要让所有的子组件也开始生成，然后自己就等着，直到所有的子组件生成完毕，自己再结束。所以，“父亲”先开始自己的created，然后“儿子”开始自己的created和mounted，最后“父亲”再执行自己的mounted。</p><h2 id="vue-cli-3-0-项目版本更新后文件存在缓存问题解决方案" tabindex="-1">vue cli 3.0 项目版本更新后文件存在缓存问题解决方案</h2><h3 id="html文件需设置不保存缓存" tabindex="-1">HTML文件需设置不保存缓存</h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">meta http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pragram</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no-cache</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> /</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">meta http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cache-control</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">no-cache, no-store, must-revalidate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> /</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">meta http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">expires</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="配置webpack的打包输出文件名-vue-config-js-默认没有-需要手动添加" tabindex="-1">配置webpack的打包输出文件名(vue.config.js，默认没有，需要手动添加)</h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Timestamp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Date</span><span style="color:#89DDFF;">()</span><span style="color:#C3E88D;">.getTime</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">configureWebpack:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">output:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">filename:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">js/[name</span><span style="color:#C3E88D;">].</span><span style="color:#89DDFF;">\${</span><span style="color:#C3E88D;">Timestamp</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">每次构建打包时给文件名加上时间戳，确保每次版本更新的文件名不一样</span><span style="color:#A6ACCD;">      </span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">chunkFilename:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">js/[name</span><span style="color:#C3E88D;">].</span><span style="color:#89DDFF;">\${</span><span style="color:#C3E88D;">Timestamp</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.js</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">}</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="vue中使用原生websocket" tabindex="-1">vue中使用原生WebSocket</h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">websock:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">reconnectData:null,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">lockReconnect:</span><span style="color:#82AAFF;">false</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">//避免重复连接，因为onerror之后会立即触发</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onclose</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">timeout:10000,</span><span style="color:#A6ACCD;">          </span><span style="color:#C3E88D;">//10s一次心跳检测</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">timeoutObj:null,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">serverTimeoutObj:null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#82AAFF;">created</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">this.initWebSocket</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">methods:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">initWebSocket</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">console.log(&#39;启动中&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wsurl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">你的websockt url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.websock</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WebSocket</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">wsurl</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.websock.onopen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this.websocketonopen</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">//连接成功</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.websock.onmessage</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this.websocketonmessage</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">//广播成功</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.websock.onerror</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this.websocketonerror</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">//连接断开，失败</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.websock.onclose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this.websocketclose</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">//连接关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,             //初始化weosocket</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">websocketonopen</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">console.log(&#39;连接成功&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">this.heatBeat</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,           //连接成功</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">websocketonerror</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">console.log(&#39;连接失败&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">this.reconnect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,          //连接失败</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">websocketclose</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">console.log(&#39;断开连接&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">this.reconnect</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,            //各种问题导致的 连接关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">websocketonmessage(data</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">this.heatBeat</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">//收到消息会刷新心跳检测，如果一直收到消息，就推迟心跳发送</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">msgData</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JSON.parse</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,    //数据接收</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">websocketsend(data</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.websock.send(JSON.stringify(data</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,         //数据发送</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">reconnect</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">this.lockReconnect</span><span style="color:#89DDFF;">){</span><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">//这里很关键，因为连接失败之后之后会相继触发</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">连接关闭，不然会连接上两个</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WebSocket</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.lockReconnect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.reconnectData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">clearTimeout(this.reconnectData</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.reconnectData</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setTimeout</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.initWebSocket();</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">this.lockReconnect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span><span style="color:#F78C6C;">5000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,                 //socket重连</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">heatBeat</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.timeoutObj</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">clearTimeout(this.timeoutObj</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.serverTimeoutObj</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">clearTimeout(this.serverTimeoutObj</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">this.timeoutObj</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setTimeout</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.websocketsend({type:&#39;心跳检测&#39;})   //根据后台要求发送</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">this.serverTimeoutObj</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setTimeout</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.websock.close();       //如果  5秒之后我们没有收到 后台返回的心跳检测数据 断开socket，断开后会启动重连机制</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">, this.timeout)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },                  //心跳检测</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#FFCB6B;">destroyed(</span><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">this.lockReconnect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">this.websock.close</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">                   //离开路由之后断开websocket连接</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">clearTimeout(this.reconnectData</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">//离开清除</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">timeout</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">clearTimeout(this.timeoutObj</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">         </span><span style="color:#FFCB6B;">//离开清除</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">timeout</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">clearTimeout(this.serverTimeoutObj</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">//离开清除</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">timeout</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="使用elementui-table报错-queryselector-of-undefined-at-tablelayout-updateelsheight" tabindex="-1">使用ElementUI Table报错 &#39;querySelector&#39; of undefined at TableLayout.updateElsHeight</h2><p>原因：我使用的ElementUI中的Table组件中的第一个demo1 在那基础上加了height[ 或者max-height ] 和show-header 这两者一起使用导致报错的</p><p>解决方法：不使用show-header属性 用css把头部隐藏起来</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">.el-table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">thead,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">.el-table__header-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">display:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,30),t=[e];function c(r,D,C,y,A,F){return a(),n("div",null,t)}const h=s(o,[["render",c]]);export{u as __pageData,h as default};
