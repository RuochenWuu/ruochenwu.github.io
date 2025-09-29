---
layout: single
title: "精选项目 Projects"
permalink: /projects/
toc: true
toc_sticky: true
---

下面是我做过的一些项目，包含技术要点与仓库链接。

{% include feature_row id="proj_row" %}

{% assign projects = site.data.projects %}

<div class="projects-grid">
  {% for p in projects %}
  <div class="archive__item" style="margin-bottom:1.5rem">
    <h3 class="archive__item-title"><a href="{{ p.link }}" target="_blank" rel="noopener">{{ p.name }}</a></h3>
    <p class="archive__item-excerpt">{{ p.desc }}</p>
    <p><strong>Stack:</strong> {{ p.stack }}</p>
    <p>
      ⭐ <a href="{{ p.link }}/stargazers" target="_blank" rel="noopener">Stars</a> ·
      🐛 <a href="{{ p.link }}/issues" target="_blank" rel="noopener">Issues</a> ·
      📦 <a href="{{ p.link }}" target="_blank" rel="noopener">Repo</a>
    </p>
  </div>
  {% endfor %}
</div>
