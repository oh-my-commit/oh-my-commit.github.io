import{_ as i,c as t,a0 as a,o}from"./chunks/framework.D5XSuxOt.js";const m=JSON.parse('{"title":"CSS Management in YetAnotherAutoCommit","description":"","frontmatter":{},"headers":[],"relativePath":"development/best-practice/css-management.md","filePath":"development/best-practice/css-management.md"}'),s={name:"development/best-practice/css-management.md"};function n(l,e,r,c,d,h){return o(),t("div",null,e[0]||(e[0]=[a(`<h1 id="css-management-in-yetanotherautocommit" tabindex="-1">CSS Management in YetAnotherAutoCommit <a class="header-anchor" href="#css-management-in-yetanotherautocommit" aria-label="Permalink to &quot;CSS Management in YetAnotherAutoCommit&quot;">​</a></h1><p><a href="#vscode-theme-integration">VSCode Theme Integration</a></p><h2 id="vscode-theme-integration" tabindex="-1">VSCode Theme Integration <a class="header-anchor" href="#vscode-theme-integration" aria-label="Permalink to &quot;VSCode Theme Integration&quot;">​</a></h2><h3 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h3><p>Our project uses a custom Tailwind CSS plugin to seamlessly integrate VSCode&#39;s theme variables into our application. This integration allows us to:</p><ul><li>Use VSCode&#39;s native theme colors in our UI</li><li>Support dynamic theme changes</li><li>Apply opacity modifiers to theme colors</li><li>Maintain consistent styling with VSCode&#39;s interface</li></ul><h3 id="how-it-works" tabindex="-1">How It Works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How It Works&quot;">​</a></h3><ol><li><p><strong>Variable Transformation</strong></p><ul><li>VSCode provides theme colors as CSS variables in HEX format (e.g., <code>--vscode-editor-background</code>)</li><li>Our plugin transforms these HEX colors into RGB format using CSS <code>color-mix</code></li><li>This enables opacity support through Tailwind&#39;s opacity modifiers</li></ul></li><li><p><strong>Usage Examples</strong></p></li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Background color */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bg-vscode-editor-background</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Text color */</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">text-vscode-editor-foreground</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* With opacity */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bg-vscode-diffEditor-insertedTextBackground/50</span></span></code></pre></div><ol start="3"><li><strong>Supported Variables</strong> The plugin supports various VSCode theme variables, including:</li></ol><ul><li>Editor colors (background, foreground, line highlights)</li><li>Git decoration colors</li><li>Input and sidebar colors</li><li>List and selection colors</li></ul><h3 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h3><ol><li><p><strong>Using Theme Colors</strong></p><ul><li>Always prefer VSCode theme variables over hardcoded colors</li><li>Use semantic color names that match VSCode&#39;s naming convention</li><li>Consider light/dark theme compatibility</li></ul></li><li><p><strong>Opacity Modifiers</strong></p><ul><li>Use opacity modifiers when you need semi-transparent elements</li><li>Format: <code>{property}-{variable-name}/{opacity}</code></li><li>Example: <code>bg-vscode-editor-background/80</code></li></ul></li><li><p><strong>Maintenance</strong></p><ul><li>Keep the variables list updated with VSCode&#39;s theme API</li><li>Document any new variables added to the system</li><li>Test color changes in both light and dark themes</li></ul></li></ol><h3 id="technical-implementation" tabindex="-1">Technical Implementation <a class="header-anchor" href="#technical-implementation" aria-label="Permalink to &quot;Technical Implementation&quot;">​</a></h3><p>The integration is implemented through a Tailwind plugin (<code>vscode-theme.ts</code>) that:</p><ol><li>Defines a list of supported VSCode variables</li><li>Transforms HEX colors to RGB format</li><li>Extends Tailwind&#39;s color palette with these variables</li><li>Enables opacity support through CSS color-mix</li></ol><h3 id="future-improvements" tabindex="-1">Future Improvements <a class="header-anchor" href="#future-improvements" aria-label="Permalink to &quot;Future Improvements&quot;">​</a></h3><ul><li>Add type safety for theme variables</li><li>Implement color validation</li><li>Add support for custom theme variables</li><li>Create a testing suite for theme consistency</li></ul>`,18)]))}const u=i(s,[["render",n]]);export{m as __pageData,u as default};