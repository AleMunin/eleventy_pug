---
title:  Markdown
layout: index.pug
date: 2023-05-07
id: post-markdown
public: true
excerpt: this is data for markdown
---

Use this page to help you style your website's content.

# This should be a header beginning content 

This is a paragraph inside the markdown file


*this should be italic*

**this should be bold**

This should be ***bold and italic***

~~this should be risked~~

==this should be highlighted==


> this should be a quote

This paragraph [Has a link](https://www.11ty.dev)

This is a link for a [page in the same collection](../post1)

This is a link for a [page in a parallel collection](../../pages/page_a)

This is a `single section of code` written within a paragraph.


```html
This is a block of code. If you have the right library the html syntax will be highlighted.

Notice that eleventy formats the naming as a class for your convenience
    <article>
        <p> Tags are automatically escaped here </p>
    </article>
```

It should work for most lengths:

```

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣤⡶⠾⠿⠿⠛⠻⠿⠿⠶⢶⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⠿⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠻⢷⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡾⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣶⣄⠀⠀⢀⣠⣶⡶⢶⣦⣄⡀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢷⣤⣿⠏⠀⠀⠀⠈⠙⢿⣦⠀
⠀⠀⠀⠀⠀⣴⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣄⠀⣠⡶⢶⣄⠀⢹⣇
⠀⠀⠀⢀⣾⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⠿⠛⠉⠙⠛⢷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣦⠛⠀⠀⣿⠀⠈⣿
⠀⠀⢠⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⠃⠀⠀⠀⠀⠀⠀⠈⠻⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣧⣀⣼⠟⠀⢸⡟
⠀⢠⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣯⠁⠀⣠⣿⠁
⠀⣼⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠂⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣶⡾⠟⠁⠀
⢠⣿⣄⡀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⡤⢤⣤⣄⠀⠀⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣷⠀⠀⠀⠀
⢸⣿⡭⣷⡀⠀⠀⠀⠀⢀⣶⢟⣭⣴⣶⣶⣬⣝⢷⣄⠀⢿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡆⠀⠀⠀
⢸⣿⣿⢸⡇⠀⠀⠀⠀⣿⢃⣾⣿⣿⣿⣿⣿⣿⣆⢻⡆⠀⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀
⢸⣿⣿⢸⡇⠀⠀⠀⠀⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⢸⡷⠀⠀⠉⠻⣿⣦⣀⡀⠄⠀⠀⣠⣾⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀
⢸⣿⣿⣼⣷⣶⣶⣶⣾⣿⡄⢻⣿⣿⣿⣿⣿⣿⡟⣸⡇⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠃⠀⠀⠀
⢻⣷⣾⣿⣗⠙⣿⠋⠀⠈⠻⣦⣍⣛⣛⣛⣛⣩⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠀⠀⠀⠀
⠸⣷⣿⠳⠿⣸⣿⠀⠀⠀⠀⠈⠻⣿⡛⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀
⠀⣿⡏⠀⣰⣿⢿⡄⠀⠀⠀⠀⠀⠘⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠁⠀⠀⠀⠀
⠀⣿⡇⣂⣿⡘⢘⣿⡄⠀⠀⠀⢀⢠⣜⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⢾⠃⠀⠀⠀⠀⠀⣸⡏⠀⠀⠀⠀⠀
⠀⠹⣿⣿⣿⡟⡛⠛⣿⣦⣀⣀⣈⣻⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠃⠁⠀⠀⠀⠀⠀⠀⣰⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠹⣷⡙⠿⠷⣦⣬⣿⠟⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠁⠀⠀⠀⠀⠀⠀⠀⣰⡿⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠘⠿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣦⡀⠀⠀⠀⠀⠀⣼⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠛⠿⣶⣤⣀⣀⠀⠀⠀⠀⠀⠀⣶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣻⣿⡆⠀⠀⠈⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡙⢻⡿⢷⣶⣶⣤⣄⣿⣇⠀⠀⢠⣶⠀⠀⠀⠀⣀⣀⣀⣤⣶⡾⣿⠋⠹⣷⡀⠀⢠⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠿⠃⠀⠀⠀⠈⠉⠙⣿⡄⠀⣸⡟⠛⠛⠛⠛⠛⠛⠉⠙⠿⠾⠋⠀⠀⢻⣧⠀⣸⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣴⡿⠀⠂⠀⠀⠀⠐⠠⠠⠄⠯⠋⠁⠐⠄⠀⠙⠛⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
```

## Lists

1. Numerical lists don't naturaly break into sublists
2. It is unfortunate.

- You can perform those lists too
- Item 2


## Linebreak:

---

## Table



| This  | is  | a        |
| ----- | --- | -------- |
| table | in  | markdown |


# Header 1
## Header 2
### Header 3 *with italic*
#### Header 4 ~~risked~~
##### Header 5 **bold**
###### [Header 6](https://www.11ty.dev)



# Image

![This is a broken image link, the alt text still shows up](../media/wizarducks.png)

Picture from [wizarducks](https://wizarducks.com/)

![This is an image, this alt text will only be shown when asked](../../media/wizarducks.png)
