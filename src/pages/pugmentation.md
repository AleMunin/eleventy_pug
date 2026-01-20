---
title: pugmentation
layout: index.pug
---

# Eleventy

Source folder = src

# Pug

You can learn more about [Pug](https://pugjs.org/api/getting-started.html) on its official website. Keep in mind that the npm of pug on this project is not installed directly. We're using the eleventy official plugin.

Content display on pug has a different syntax than the regular Eleventy tutorials:

`!=content`

# Directories

They should look something like that:

```
├── _site
│   └── pages
│       ├── about
│       ├── markdown
│       └── pugmentation
└── src
    ├── css
    ├── _includes
    ├── js
    ├── media
    ├── _mixins
    ├── pages
    ├── pagination
    ├── posts
    └── _sass
```

`_site` is the output to be published. You can change that but I didn't to align with some tutorials if you need to. If you're having some kind of problem with eleventy I recommend just deleting everything inside and it will build everything from scratch.

`src` is how the website is built. Directories or files that have a `_` will not pass through the build.

`_includes` is where templates are stored.

Directories like `pages` or `posts` are just to organize the website. If a *page does not have a permalink, it will follow the structure it is stored in*.

Directories are empty pages by default, but you can create a file with the directory name for an actual page, which can be helpful to add collection loops. I recommend making a layout just for this kind of behavior.


# CDN

The default styling for this template is the basic of [PicoCSS](https://picocss.com/), which is incredibly minimalistic.

You can use whatever you want by just removing it.

If you are undecided of what to use, my recommendations for mor complex stuff are either [BeerCSS](https://www.beercss.com/) or [Bulma](https://bulma.io/), both are great at avoiding any Javascript on their styling. 

# Sass

Unlike Pug, sass is installed individually.

On Eleventy 2, I used [Eleventy-sass](https://github.com/kentaroi/eleventy-sass) which would build continuously while using the `--serve` command for eleventy. It is more integrated, but I don't feel like using the beta features for eleventy 3. Still a very good option if you're into it.

For converting your stuff the command is:

`npx sass --watch src/_sass:src/css`


# Media

This project does not convert .png to .webp when building the site. At least for now.



# Markdown

This project on its own will not convert wikilinks, unfortunately. I do plan to fork it and deal with something Obsidian-specific, though.

If you're stying your website, you might want to do while checking [this page](./../markdown)
