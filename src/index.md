---
title: The test
layout: base.njk
---


Testiiiiing this

Example of markdown using post:

<ul>
{%- for post in collections.post -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
