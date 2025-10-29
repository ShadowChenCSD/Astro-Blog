---
title: Markdown书写说明：扩展语法
published: 2025-10-18
description: 介绍撰写Markdown文档的扩展语法规则。
image: "/posts/markdown.png"
tags: [文章撰写, Markdown]
category: 博客
---

# 1. 特别提醒

- 可以使用下列五种方案进行特别提醒：`note` `tip` `important` `warning` `caution`。

```
:::note
笔记：高亮需要关注的信息。
:::

:::tip
提示：心得体会。
:::

:::important
核心：成功的关键举措。
:::

:::warning
警告：存在潜在风险，请立即关注
:::

:::caution
告诫：行为可能会带来负面影响。
:::
```

:::note
笔记：高亮需要关注的信息。
:::

:::tip
提示：心得体会。
:::

:::important
核心：成功的关键举措。
:::

:::warning
警告：存在潜在风险，请立即关注
:::

:::caution
告诫：行为可能会带来负面影响。
:::

- 可以**自定义标题**

```
:::note[自定义标题]
这是一个**自定义标题**的笔记。
:::
```

:::note[自定义标题]
这是一个**自定义标题**的笔记。
:::

# 2. 内容遮盖

- 可以**遮盖**不要立即显示的文本。

```
这个内容:spoiler[不要**立即显示**]。
```

这个内容:spoiler[不要**立即显示**]。

# 3. GitHub仓库卡片

- 可以增加一个动态卡片，链接到Github仓库。

`::github{repo="ShadowChenCSD/shadowchenCSD.github.io"}`

::github{repo="ShadowChenCSD/shadowchenCSD.github.io"}