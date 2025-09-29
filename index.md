---
layout: splash
permalink: /
title: Hi, I'm Your Name
header:
  overlay_color: "#000"
  overlay_filter: 0.5
  overlay_image: /assets/images/cover.jpg
excerpt: >
  DBA & Cloud Engineer. PostgreSQL internals, high availability, and cloud cost optimization.
intro: 
  - excerpt: >
      我在这里写数据库内核、云原生运维、性能调优和工程实践。<br>
      I write about DB internals, Cloud, and performance.
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
    btn_label: "去阅读"
    btn_class: "btn--primary"
  - image_path: /assets/images/projects.png
    alt: "Projects"
    title: "精选项目"
    excerpt: "开源工具、基准测试、Chaos 实验与可观测性"
    url: "/projects/"
    btn_label: "查看项目"
    btn_class: "btn--primary"
---

{% include feature_row %}
