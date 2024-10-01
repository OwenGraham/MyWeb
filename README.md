# Owen Graham's ASP.NET Website

## Overview

This is an ASP.NET Core web app made by Owen Graham, to learn the basics of web development. It conttains a home page, a gallery of images, and embedded soundcloud players with songs I produced.

> Please note the site is a work in progress.

## Contents

- [User Guide](#user-guide)
  - [Prerequisites](#prerequisites)
- [Pages](#pages)

## User Guide

### Prerequisites

- [Dotnet SDK 8](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

Follow the steps below to run the web app:

1. Clone the git repository

> `git clone https://github.com/OwenGraham/MyWeb.git`

2. Open a terminal and navigate to the reposiory root
3. Run the following command to run the app:

> `dotnet run`

4. Open the page by going to the URL printed in the terminal in a browser. For example if the output contains

```
info: Microsoft.Hosting.Lifetime[14]
Now listening on: http://localhost:5253
```

Open http://localhost:5253 in your browser.

## Pages

### Home Page

![Screenshot of homepage](readme-assets/home-page-screenshot.png)

The home page of the website includes a parallax background. The background is a black and white image that remains static relative to the viewport when the user scrolls down the page, until they scroll past a horizontal bar after which the image is revealed in colour.

![Gif of parallax on home page](readme-assets/home-page-gif.gif)

### Gallery Page

![Screenshot of gallery page](readme-assets/gallery-3-columns.png)

The gallery page is a collection of photographs I like displayed in a grid.

The user can change how large the images are by selecting the number of columns the grid has.

| ![alt text](readme-assets/gallery-3-columns.png) | ![alt text](readme-assets/gallery-2-columns.png) | ![alt text](readme-assets/gallery-1-column.png) |
| ------------------------------------------------ | ------------------------------------------------ | ----------------------------------------------- |

The page contains several other JavaScript animations to make it more interactive and engaging:

- Images fade in on page load

![Gif of images in gallery fading in on page load](readme-assets/gallery-load-gif.gif)

- When mouse hovers over an image, all other images go slightly transparent:

![Gif of other images going transparent when hovering an image on gallery page](readme-assets/gallery-hover-image-gif.gif)

Clicking an image opens an enlarged version of it with buttons to click through the images. The gallery page is made slightly transparent behind the enlarged image and controls:

![Gif of selecting image from gallery to enlarge and clicking through them](enlarge-gallery-image-gif.gif)
