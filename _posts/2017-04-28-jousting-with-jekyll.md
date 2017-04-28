---
layout: post
title: Jousting with Jekyll
preview: It was him realizing what would make someone happy
permalink: /jousting-with-jekyll/
---

# Jousting with Jekyll

One responsibility of the support team here at [Highrise](https://highrisehq.com/) is to maintain our Extras page.

What’s the [Extras page](https://highrisehq.com/extras/)?

It’s a list of all the 3rd party products that integrate with Highrise. Almost
all were built by the 3rd party using the [Highrise API](https://github.com/basecamp/highrise-api).

This page is important for current and future customers because people use more
than one product to get their work done. And these integrations can often save
people tons of time.

But it became an absolute pain to manage for us.

Why?

There are a whopping 63 different listings on the Extras page right now. Requests to add new listings, update current listings, and remove old listings started to add up.

The Highrise marketing site is maintained using the static-site generator [Jekyll](https://jekyllrb.com/). It gives our team control over our content, it works fast, and it’s not a feature heavy dynamic CMS like Wordpress.

Jekyll is simple. And powerful . . . if you know how to use that power.

The Extras page was just a giant HTML page in Jekyll. All listings were written in HTML, and if you needed to update a listing, you had to edit the repetitive
HTML file and find exactly what line needed to be updated.

This led to manual errors. Typos in HTML. Incorrect links. A lot of wasted time to make tiny changes.

Enter [Jekyll data files](https://jekyllrb.com/docs/datafiles/).

Data files give a middle finger to repetition. You can set custom options and load custom data to make your life much easier.

### Here is a short video of why we made this change with an example:
<br>

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/mfurfld6bh?videoFoam=true" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>


<br>
### How to use data files in Jekyll
<br>
First, create a folder in your repo titled `_data` and save it. This is where you’re going to store your files.

Files can be in `.yml, .yaml, .json, or .csv` format. We’re using `.yml` in our example.

Now, create a file you want to store in the `_data` folder. We’ve created the `highrises.yml` file.

Here is an example of one of our data files in format:

<pre>
    - name: Highrise iPhone App
      link: https://highrisehq.com/apps/ios
      image: extras/img_iphone_app.png
      description: Collaborate on contacts, notes, and tasks all from your iPhone.
    - name: Android
      link: https://highrisehq.com/apps/android
      image: extras/img_android_app.png
      description: Collaborate on contacts, notes, and tasks all from your Android.
      </pre>

The data can now be accessed using in our HTML. The filename `highrises.yml` determines the
variable name.

This information can now be used in your templates or HTML files.

For example:

<script src="https://gist.github.com/gallochris/a583994674eee7426896040e98de74d2.js"></script>

Using  in our file, Jekyll will insert the information from the data file.

![Jekyll Example](https://cdn-images-1.medium.com/max/800/1*7u5mIbo41YC9u_zwvBjSew.png)

Data files have saved us lots of time here at Highrise. Other examples of where
you might use them:

* accessing different authors’ bios of your blog
* posting store hours for your brick-and-mortar shop
* ordering any list of products you’re selling

If you’re interested in learning Jekyll, we recommend checking out the [tutorials here](http://jekyllrb.com/tutorials/home/) and the [community here](https://talk.jekyllrb.com/).

*This post was orginally published on Basecamp's [Signal v Noise](https://m.signalvnoise.com/jousting-with-jekyll-20687ceea042).*
