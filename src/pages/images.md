---
id: images
title: Images
---

You can't just reference an image file in eleventy.

That is why we have the passthrough function for the assets folder.

![this-is-an-img-alt](../../assets/img/example1.png)

[Do not forget the ! before the format, otherwise this will become a link](../../assets/img/example1.png)

This image has been referenced on markdown, you can make a shorter path within the images, so they share the same folder. If you do so, check if you don't need to put the path on a watch target function on eleventy.js

