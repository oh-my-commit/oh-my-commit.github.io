import{_ as e,c as i,a0 as a,o as l}from"./chunks/framework.P9qPzDnn.js";const g=JSON.parse('{"title":"发布到 Open VSX Registry (OVSX)","description":"","frontmatter":{},"headers":[],"relativePath":"development/publish/publish-ovsx.md","filePath":"development/publish/publish-ovsx.md"}'),t={name:"development/publish/publish-ovsx.md"};function n(o,s,p,h,r,d){return l(),i("div",null,s[0]||(s[0]=[a(`<h1 id="发布到-open-vsx-registry-ovsx" tabindex="-1">发布到 Open VSX Registry (OVSX) <a class="header-anchor" href="#发布到-open-vsx-registry-ovsx" aria-label="Permalink to &quot;发布到 Open VSX Registry (OVSX)&quot;">​</a></h1><p>本指南介绍如何将 Oh My Commit 扩展发布到 Open VSX Registry，这是 Visual Studio Marketplace 的开源替代方案。</p><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to &quot;前置条件&quot;">​</a></h2><ol><li>在 <a href="https://open-vsx.org/" target="_blank" rel="noreferrer">Open VSX Registry</a> 创建账号</li><li>从<a href="https://open-vsx.org/user-settings/tokens" target="_blank" rel="noreferrer">用户设置</a>生成访问令牌</li><li>在项目根目录创建 <code>.env</code> 文件并设置令牌：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OVSX_TOKEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">your-token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h2 id="发布步骤" tabindex="-1">发布步骤 <a class="header-anchor" href="#发布步骤" aria-label="Permalink to &quot;发布步骤&quot;">​</a></h2><ol><li>安装依赖：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><ol start="2"><li>构建并打包扩展：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vscode:package</span></span></code></pre></div><p>这将在 <code>dist</code> 目录下生成 <code>.vsix</code> 文件，如 <code>oh-my-commit-0.9.2.vsix</code></p><ol start="3"><li>发布打包好的扩展到 OVSX：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovsx:publish</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="常见错误" tabindex="-1">常见错误 <a class="header-anchor" href="#常见错误" aria-label="Permalink to &quot;常见错误&quot;">​</a></h3><ol><li><p><strong>认证错误</strong></p><ul><li>确保 <code>.env</code> 文件中的 <code>OVSX_TOKEN</code> 已正确设置</li><li>如果问题持续，尝试重新生成令牌</li></ul></li><li><p><strong>包验证错误</strong></p><ul><li>确保 <code>package.json</code> 中包含所有必需字段： <ul><li><code>name</code></li><li><code>version</code></li><li><code>publisher</code></li><li><code>engines.vscode</code></li></ul></li><li>检查版本号是否唯一</li></ul></li><li><p><strong>构建问题</strong></p><ul><li>运行 <code>pnpm clean</code> 后再运行 <code>pnpm build</code></li><li>检查 <code>dist</code> 目录中是否正确生成了 <code>.vsix</code> 文件</li></ul></li></ol><h2 id="版本管理" tabindex="-1">版本管理 <a class="header-anchor" href="#版本管理" aria-label="Permalink to &quot;版本管理&quot;">​</a></h2><ol><li>更新版本（使用 changeset）：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pkg:update</span></span></code></pre></div><ol start="2"><li>发布新版本：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pkg:publish</span></span></code></pre></div><ol start="3"><li>打包并发布到 OVSX：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vscode:package</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ovsx:publish</span></span></code></pre></div><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to &quot;相关资源&quot;">​</a></h2><ul><li><a href="https://open-vsx.org/" target="_blank" rel="noreferrer">Open VSX Registry</a></li><li><a href="https://github.com/eclipse/openvsx/wiki/Publishing-Extensions" target="_blank" rel="noreferrer">OVSX 发布指南</a></li><li><a href="https://code.visualstudio.com/api/working-with-extensions/publishing-extension" target="_blank" rel="noreferrer">VSCode 扩展发布指南</a></li><li><a href="https://github.com/changesets/changesets" target="_blank" rel="noreferrer">Changesets 文档</a></li></ul>`,25)]))}const k=e(t,[["render",n]]);export{g as __pageData,k as default};
