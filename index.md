---
layout: splash
permalink: /
title: Hi, I'm Ruochen Wu
header:
  overlay_color: "#f8fafc"
  overlay_filter: 0.65
  overlay_image: /assets/images/cover.jpg
excerpt: |
  <p>Ruochen Wu · DBA &amp; Cloud Engineer · 专注 PostgreSQL 内核、云原生与成本优化。</p>
  <p>I build resilient data platforms and write about database internals, cloud automation, and performance engineering.</p>
intro: 
  - excerpt: |
      <p>我在这里写数据库内核、云原生运维、性能调优和工程实践。</p>
      <p>I share hands-on notes about DB internals, cloud architecture, and performance.</p>
feature_row:
  - image_path: /assets/images/pg.png
    alt: "PostgreSQL"
    title: "PostgreSQL 深入系列"
    excerpt: "WAL/Checkpoint/Autovacuum/索引实现/查询优化器"
    url: "/categories/postgresql/"
    btn_label: "去阅读"
    btn_class: "btn--primary"
  - image_path: /assets/images/cloud.png
    alt: "Cloud"
    title: "云原生与成本优化"
    excerpt: "EKS/Autoscaling/Spot/FinOps/Infra-as-Code"
    url: "/categories/cloud/"
    btn_label: "了解更多"
    btn_class: "btn--outline"
  - image_path: /assets/images/projects.png
    alt: "Projects"
    title: "精选项目"
    excerpt: "开源工具、基准测试、Chaos 实验与可观测性"
    url: "/projects/"
    btn_label: "查看项目"
    btn_class: "btn--outline"
---

{% include feature_row %}
