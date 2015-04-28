---
layout: category
title:  Purchasing Guide
---

<!--
TODO:
  The goal of this section is to point people to additional hardware we
  recommend.  Place writeups for hardware in _posts/store.
-->

{% for post in site.categories.store %}
  - <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
{% endfor %}
