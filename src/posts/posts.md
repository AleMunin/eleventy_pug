---
title: Collection page
layout: pagination_post.pug
---

# This is a page for the collection.

Note that the content remains while the pagination will change bellow. The `.md` file shares the name with the directory it is hosted in, so they share a path.

For example, `pages`directory lacks one, and it will result on a broken link if [you try to access it](/pages/)

## Content Removal

If you don't want its content (written in 'posts.pug'), just remove the content block. The file it extends will not crash.

Alternatively, you can create a base that does not asks for the "content" block

## Types of Usage

This kind of page is useful to make paginations, summaries, and anything related to properly hosting the other pages within a collection.

All you need to do is give the same name for the markdown file as the collection.


---

You might also want to preferably use another layout on the template, so you can loop through this collection or overall set them apart.

---

This page WILL show up o the collection loops if not made some kind of exception.
