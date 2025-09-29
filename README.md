# GitHub Pages Blog (Jekyll + Minimal Mistakes)

快速启动说明：

1. 新建仓库：命名为 `<your-github-username>.github.io`。
2. 把本模板所有文件推送到 `main` 分支根目录。
3. 仓库 Settings → Pages：
   - Build and deployment → Source: **Deploy from a branch**
   - Branch: **main** / **/** (root)
4. 访问 `https://<your-github-username>.github.io`。

## 定制
- 编辑 `_config.yml`：填写你的名字、社交链接、评论（可选 Giscus）。
- 替换头像 `assets/images/avatar.jpg` 和头图 `assets/images/cover.jpg`。
- 修改菜单 `_data/navigation.yml`。
- 新增文章：在 `_posts/` 里按 `YYYY-MM-DD-title.md` 新建 Markdown 文件。

## 进阶
- 自定义域名：在仓库根目录添加 `CNAME` 文件（内容为你的域名）。
- 统计与 SEO：可接入 Plausible/GA4（在 `_includes/head/custom.html` 注入脚本）。
- Mermaid/MathJax：已启用 `mermaid: true`，MathJax 可在需要页面加 `use_math: true`。
