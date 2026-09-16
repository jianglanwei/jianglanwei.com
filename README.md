# Jianglan Wei's Academic Website

This repository contains the source code for my academic website: [jianglanwei.com](https://jianglanwei.com). 

The overall design is inspired by [Guanya Shi](https://gshi.me) and his lab [LeCAR](https://lecar-lab.github.io/). I adapted their design with the following focus:

- Project demos and text descriptions are displayed side-by-side on desktop but will collapse into a vertical layout on mobile. This prevents the text from being cramped on smaller screens.

- Videos play only when they enter the user's active viewport and pause when they leave it, reducing CPU and memory usage on pages containing many demonstration videos.

- All fonts are hosted directly on the domain and preloaded to the user's browser. This prevents the "Flash of Unstyled Text" effect (i.e., the page not displaying the text correctly because fonts aren't loaded yet).

- I opted for a more spacious design and fine-tuned content and media proportions.

- I added a custom ["404 not found" page](https://jianglanwei.com/404.html). Most web service providers (including Cloudflare and GitHub Pages) automatically redirect requests for non-existent paths to the `404.html` file in the root directory, if it exists.

To use my template, you only need to edit the `index.html` file and fill in your information. The page is styled by `assets/css/styles.css`. Fonts are defined in `assets/css/fonts.css` and are installed in the `assets/fonts` folder.