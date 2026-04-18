# Jianglan Wei's Research Portfolio

This is the source code for my personal research portfolio: [jianglanwei.com](https://jianglanwei.com). 

My site is built on [Jon Barron](https://jonbarron.info)'s template, but has been re-engineered in the following ways:

- Since many of my video demos are 2:1 widescreen, side-by-side text can become too cramped on smaller screens. I implemented a responsive stack where videos and text collapse into a vertical layout on mobile but stay side-by-side on desktop. Thanks to this adaptive layout, my page also support multiple images/videos per project entry.

- Videos only play when they enter the client's active viewport. This significantly reduces CPU and memory overhead, especially when hosting dozens of demo videos on a single page.

- All fonts are hosted directly on this domain and are preloaded to the user's browser. This minimizes the "Flash of Unstyled Text" effect (i.e., the page not displaying the text correctly because fonts aren't loaded yet).

- I opted for a more spacious design and fine-tuned the width ratios to improve readability and overall aesthetics (in my personal opinion).

- I added a custom "404 not found" page. Most web service providers (including Cloudflare and GitHub Pages) automatically redirect requests for non-existent paths to the [404.html](https://jianglanwei.com/404.html) file in the root directory, if it exists.