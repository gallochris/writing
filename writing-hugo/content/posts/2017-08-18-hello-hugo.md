+++
title = "Hello Hugo"
slug = "hello-hugo"
date = "2017-08-18"
type = "post"
+++ 

* * * 

## Switching from Jekyll to Hugo

*This is the transcription from the video above explaining why and how I switched from Jekyll to Hugo to generate my website.*

Hey hey! Today I want to walk through why I chose to switch my personal website to being built in [Jekyll](https://jekyllrb.com/) to now using another static site generator called [Hugo](https://gohugo.io/). 

I want to walk through why I made this switch, some details about how I made this switch, and if it was worth it.  

This is my personal website, it's [hotdogsandeggs.com](https://hotdogsandeggs.com/). I have a couple subdomains as well. I've also built some side projects and all I've used in the past is [Jekyll](https://jekyllrb.com/). 

[Jekyll](https://jekyllrb.com/)](https://jekyllrb.com/) is a static site generator built in the programming language Ruby. It's pretty straightforward to use. A big reason why I chose to use [Jekyll](https://jekyllrb.com/) in the first place was it had free hosting with [GitHub Pages](https://pages.github.com/). That was a big selling point for me. I host most of my projects on GitHub Pages, so that integration was a big reason why I chose to use [Jekyll](https://jekyllrb.com/). 

I'm in pretty deep with [Jekyll](https://jekyllrb.com/), so why would I choose to switch? A big reason why is **curiosity**. [Hugo](https://gohugo.io/) is another static site generator built in the programming language [Go](https://golang.org/).

I have some teammates at [Highrise](https://highrisehq.com/) that built some things for the product using Go. They had positive things to say, and they also mentioned how [Hugo](https://gohugo.io/) was really, really fast. That's probably the one thing you'll always hear about [Hugo](https://gohugo.io/). 

So I was really curious about giving this a shot. I wanted to learn more and see if I could convert a site that was on [Jekyll](https://jekyllrb.com/) to [Hugo](https://gohugo.io/) easily. 

I'm going to walk you through this on a side project on mine. It's a subdomain, [people.hotdogsandeggs.com](https://people.hotdogsandeggs.com/). 

First, this project is whenever I hear an interesting interview/talk/podcast, every once in awhile I transcribe it. It's a pretty weird habit, however, it helps me retain information and learn new things. I would much rather listen to something and type it up rather than read 40 pages on a subject.  

I've done about 50 transcriptions. Here is one I did from [Merlin Mann](https://people.hotdogsandeggs.com/merlinn-mann/). It's pretty long, a talk he gave at a conference. I type of things from the talk that I find interesting and can take away from. It's my internal notes, but I just publish them. 

Again, done about 50 of these. I want to show you how I made the switch from [Jekyll](https://jekyllrb.com/) to [Hugo](https://gohugo.io/) with this particular project because I found [Hugo](https://gohugo.io/) to be a little easier to put this site together. And then main reason why was because of these categories. I have four categories, philosophy, for example. 

So, to get started with [Hugo](https://gohugo.io/), you have to install it on your machine. The [Hugo](https://gohugo.io/) site and docs are really well done. If you're familiar with [Jekyll](https://jekyllrb.com/), you'll have a big advantage because installing [Hugo](https://gohugo.io/) is similar. You can install it quickly and create a new site fast. 

A big selling point or differentiator with [Hugo](https://gohugo.io/) is that [Hugo](https://gohugo.io/) has a lot of themes that are easy to access. Where [Jekyll](https://jekyllrb.com/) has themes, but I think they're somewhat harder to install. 

There are tons of [themes with Hugo](https://gohugo.io/themes/). I think it's really important when you're trying to learn something new to start with a finished product example. I think it's a great way to learn to see it done the right way. The themes are a really good way to do that. 

The flip side to that is if you start with a complex theme, you find you really don't need half of what's there. So it's kind of a catch-22. 

The theme I started with was the [Blank theme](https://themes.gohugo.io/blank/). It was perfect for me to see the structure of a [Hugo](https://gohugo.io/) site versus a [Jekyll](https://jekyllrb.com/) site.  

The [Hugo docs](https://gohugo.io/documentation/) will also help you along the way. There is also the [discussion forums](https://discourse.gohugo.io/) that are really handy as well. 

I'll show you both sites locally on my machine. The structure is similar. Both have a config file. There is a layouts folder in both. Posts exist in [Jekyll](https://jekyllrb.com/) in the `_posts` folder. In [Hugo](https://gohugo.io/), posts exist in the `content` folder and there is a `posts` folder there. 

So one thing I did have to do with this transition that was tedious was I had to reformat the [front matter](https://gohugo.io/content-management/front-matter/). It was somewhat tedious, but everything else was pretty straightforward. 

A big advantage with [Hugo](https://gohugo.io/), this is my index page. It's really bare bones. In [Jekyll](https://jekyllrb.com/) my index page is in HTML. A big advantage in [Hugo](https://gohugo.io/) was the layouts folder. You can do a lot with it, and it was probably the toughest thing to grasp for me. But it's super powerful. 

It's how I created categories pages, and the index layout. I can just have a markdown file, use a layout, and create a page super fast. 

There are some similarities. [Partials](https://gohugo.io/templates/partials/#readout) in [Hugo](https://gohugo.io/) are very similar to the [includes folder](https://jekyllrb.com/docs/includes/) in [Jekyll](https://jekyllrb.com/). This is where you would put things like a footer, or something that is going to be used over and over again. 

[Shortcodes](https://gohugo.io/content-management/shortcodes/#readout) are a useful perk of [Hugo](https://gohugo.io/). There are a lot of built in ones. Think if you need to create a Twitter post, there is a shortcode for that. You can create custom short codes, which I did with a highlight on the home page.   

The big advantage of this switch. First, I'll serve both of these sites locally on my machine. I want to illustrate how much faster [Hugo](https://gohugo.io/) is on my machine. 

[Jekyll](https://jekyllrb.com/) is not super slow, but [Hugo](https://gohugo.io/) is *just faster*. Bottom line, it's faster. 75 ms to over 1 second. It's just faster. 

On [Jekyll](https://jekyllrb.com/), I have these categories and I'm using a JavaScript solution. There is a different page for the business category, design, music, and philosophy. So there are four pages. 

In [Hugo](https://gohugo.io/), I don't have any of those pages. I'm using the front matter and a layout in the default folder, the list template. It calls on the categories and generates the page. All these are built using the list template. 

It took me quite awhile to figure this out. A really good resource that I'll share is [bookdown.org](https://bookdown.org/yihui/blogdown/templates.html). They walk through how to build these minimal examples. This is the exact template info or code that I needed. 

I would highly recommend this site. It walks through building a site using R, the programming statistics language. They also mention another [Hugo](https://gohugo.io/) theme too, [X-min](https://themes.gohugo.io/[Hugo](https://gohugo.io/)-xmin/). 

Here are the two sites. Both similar, structure is different and I found [Hugo](https://gohugo.io/) to be easier for it. 

One big pitfall was hosting on GitHub. When you're ready to publish with [Hugo](https://gohugo.io/), you run a command and everything gets put out in the public folder. With [Jekyll](https://jekyllrb.com/), you can upload what you have to GitHub Pages and it's just going to work. 

But with [Hugo](https://gohugo.io/), you really need to [upload the public folder](https://gohugo.io/hosting-and-deployment/hosting-on-github/). I made that mistake and found out the public folder is what you really need. So that's a little bit of a drawback with [Hugo](https://gohugo.io/), not a huge one though. 

If you go to GitHub, in the people repo, you can see it's hosted through the GitHub Pages branch. In the [Hugo source branch](https://github.com/gallochris/people/tree/hugo_source), you can see what I've used to generate the site. 

So was it worth it to make this switch? For me, 100% yes. I learned something new. I was pleased with myself to make this transition, and plus, I just have a better understanding of how things work. I'm really pleased with how it turned it out with my [home page](https://hotdogsandeggs.com/), the [blog](https://blog.hotdogsandeggs.com/), and [this project](https://people.hotdogsandeggs.com/).  

It was tough. Static site generators there are a lot of them. If you want to go with Ruby, probably go with [Jekyll](https://jekyllrb.com/). If you're familiar with Go, [Hugo](https://gohugo.io/) is a good option. There is [Middleman](https://middlemanapp.com/) out there. When it comes to static site generators out there, you have a lot of tools. It's not really about the tool, it's your personal preference. 

I'm kind of anti-Wordpress. I don't want to use a clunky solution. I want to learn a bit more technically. For me, with [Hugo](https://gohugo.io/), I felt like I wasn't repeating myself as much as I was with [Jekyll](https://jekyllrb.com/). 

That being said, switching is a pain in the ass. There are no bones about. There are pros and cons to everything, so figure out what you want. 

I thought I'd end this on a useful piece of advice from [Gordon](https://twitter.com/gshotwell). If you want to learn to code, that's not a really good goal. Because there is always going to be more to learn. Focus on [improving your understanding](https://twitter.com/gshotwell/status/897800169839898625) in manageable ways a bit every day. 

I think that kind of advice is critical for anything. I wouldn't go out and try to master [Hugo](https://gohugo.io/). It's about what [Hugo](https://gohugo.io/) can enable me to do, which is put together a personal site quickly and be proud of how it looks. 

I've just scratched the surface with [Hugo](https://gohugo.io/). I have another site, [dadgumboxscores.com](https://dadgumboxscores.com/) that I really want to try [Hugo](https://gohugo.io/) on because I think the speed benefit can help. There is a ton of information here. 

And I haven't really explored [data files](https://gohugo.io/templates/data-templates/#the-data-folder) with [Hugo](https://gohugo.io/). [Jekyll](https://jekyllrb.com/) has it, and I know there it's there with [Hugo](https://gohugo.io/). I'm going to give that a shot soon, and there is always more to learn. 

I hope this gives you a glimpse on how it was to switch and maybe it changes your perspective on creating a static site and what generator to use. 

Thanks! 

