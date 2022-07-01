---
layout: ../../layouts/project.astro
title: My Portfolio
client: Self
publishDate: 2020-03-02 00:00:00
img: https://images.unsplash.com/photo-1547234935-80c7145ec969?fit=crop&w=1400&h=700&q=75
description: |
  This will be my first portfolio created in Astro.
tags:
  - Astro.js
  - heroku
---

## [Github](https://github.com/6b6169736569/MyPortfolio)
## [Portfolio](http://portfolio-6b6169736569.herokuapp.com/)

## Getting Started
### Prerequisite
- Installed Node.js

```
%npm init astro -- --template portfolio 

Welcome to Astro! (create-astro v0.12.4)
Lets walk through setting up your new Astro project.

✔ Where would you like to create your new project? … ./my-astro-site
✔ Template copied!
✔ Would you like us to run "npm install?" … yes
✔ Packages installed!
✔ Initialize a new git repository? This can be useful to track changes. … yes
✔ Setup complete.
✔ Ready for liftoff!

 Next steps 

You can now cd into the my-astro-site project directory.
Run npm run dev to start the Astro dev server. CTRL-C to close.
Add frameworks like react and tailwind to your project using astro add

Stuck? Come join us at https://astro.build/chat
Good luck out there, astronaut.


```
```
%cd ./my-astro-site && npm run dev

> @example/portfolio@0.0.1 dev
> astro dev

fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
  🚀  astro  v1.0.0-beta.62 started in 36ms
  
  ┃ Local    http://localhost:3001/
  ┃ Network  use --host to expose
  
  ▶ This is a  beta  prerelease build
    Feedback? https://astro.build/issues
```

## heroku Setup
- Buildpacks
  - heroku/nodejs
  - https://github.com/heroku/heroku-buildpack-static.git

### 
## Other products used
[readme generator](https://github.com/rahuldkjain/github-profile-readme-generator)
