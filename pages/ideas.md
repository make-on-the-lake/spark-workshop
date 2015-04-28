---
layout: category
title:  Ideas
---

<!--
TODO:
  Create some idea write ups.  Place them into _posts/ideas.  These posts can be
  jumping off points for attendees.
-->

{% for post in site.categories.ideas %}
  - <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
{% endfor %}
