# Purpose

Currently a test, but hopefully a good template for using 11ty, pug and sass.

For now the goal is to keep the code as visually clean as possible for me to make website themes and not have my ADHD brain want to bash my skull against the monitor.

As such, I also be using .sass files instead of .scss.

Pug is lacking tutorials with 11ty, but it renders automatically without tweaks.

# Run

You can just use `npm start`

# Input and Output

The folder "public" is the output.

The folder "src" is the input.

It is eleventy, you can change to whatever you want on the configuration.

I'll probably stop pushing the output but I felt like this is an easy way for anyone to just wanting to know what the template looks like. So there you go.


# Dependencies

## Eleventy Sass

This is using the plugin [Eleventy-Sass](https://www.npmjs.com/package/eleventy-sass) since I didn't like how VScode plugins were dealing with sass.

This can be installed by running:

```
npm i eleventy-sass
```

The link has a tutorial on how to implement this on eleventy, but the configuration should already be added to the .eleventy.js

## Bulma

The Bulma folder will be for now empty, but if I happen to add there, I'll write here how to remove any dependencies or just branch it.

# Friendly suggestions

This was made using [Dark Reader](https://darkreader.org), available on most browsers.

As someone with sensitive eyes I cannot imagine the world of pain someone might have checking a pure white page (or a pure black, for that matter), in case you have the same problems as me, I suggest installing before accessing localhost:8080

If you haven't already, Eleventy has a [base blog based on njk](https://github.com/11ty/eleventy-base-blog). 


# A special Thanks

The folks on the 11ty official Discord are incredibly patient and useful, I'm extremely grateful. Especially to Aankhen.
11ty rocks was the one that introduced me to this wonderful world.

# Read/watch Recommendation

https://desmondrivet.com/2022/03/23/eleventy-pagination
https://youtu.be/Dppske2A-2U
https://shivjm.blog/colophon/how-i-create-an-article-series-in-eleventy/
https://11ty.rocks

# To Do List

- Introduce metadata filters to pug template
- Introduce RSS feed.
- Quality of life Mixins for navigation
- Maybe set up multi-language, might save it for a fork.
- Add class-slug example https://11ty.rocks/tips/layout-templating/

