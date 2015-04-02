# Huge Navigation Exercise


## Overview

This exercise will have the candidate build a responsive site navigation driven by an AJAX request.

Technology
------------

| On The Server | On The Client  | Development |
| ------------- | -------------- | ----------- |
| express       | javascript     | Gulp        |
|               | stylus         | livereload  |
|               |                |             |
|               |                |             |
|               |                |             |

Requirements
------------

You need [Node.js](http://nodejs.org/download/) installed and running.

We use [Gulp](http://gulpjs.com/) as our task runner. Get the CLI (command line interface).

```bash
$ npm install gulp -g
```

Installation
------------

```bash
$ git clone https://github.com/juvasquezg/NavExercise.git && cd ./NavExercise
$ npm install
$ gulp
```

Development with livereload
------
```bash
gulp
```

Test
------
```bash
npm test
```

if you get ** -bash: make: commad not found ** please install make in Unix
based systems or **run**
```bash
./node_modules/.bin/mocha  test/
```


Production
------
```bash
npm start
```

Note
------
Default port is 3000, sure that this port is available.

You can put the public directory in a [nginx] or [apache] server.

We use  [npm](https://www.npmjs.org/) as our Dependecy Management.


## Guidelines

Here are the guidelines for this exercise

* No frameworks or libraries (this means jquery).
* Chrome compliance is all that's required, all functions and features available in Chrome are in play.
* Nav must be responsive.
* Code must run after the following command, please ensure your code runs as you expect it to from a fresh checkout with these commands before submission.

```
$ npm i && npm start
```

Nice to haves:

* Adherence to accessibility standards
* Documentation
* Unit and/or E2E tests

At a high level the navigation will have two main states

* <768px: Mobile. Hamburger icon will display in the top-left of the page. Clicking the hamburger will cause a card to slide in and overlay the content from the left. The card will contain nav and sub-nav items defined in the JSONP response
* \>= 768px: Desktop. The nav will display as a horizontal nav. Top level nav items will display sub-nav items when clicked. No hamburger will be shown.

## Version
0.1.0

## Files

* Mockup - Illustrator file describing how the nav should behave
* server.js - node.js server that will host the site and provie the api to construct the nav

## API

* GET /api/nav.json - returns a JSON response representing the items in the nav.

## Get Started

```
git clone git@github.com:hugeinc/NavExercise.git
cd NavExercise
npm install
npm start
```

## Design Specifications

### Typography

* **Primary Navigation** 21/48 HUGE Avant Garde Bold
* **Secondary Navigation** 16/48 Galaxie Copernicus Book
* **Headline (Desktop)** 120/132 HUGE Avant Garde Bold
* **Body Copy (Desktop)** 24/36 Galaxie Copernicus Book
* **Headline (Mobile)** 44/48 HUGE Avant Garde Bold
* **Body Copy (Mobile)** 14/24 Galaxie Copernicus Book
* **Copyright (Mobile)** 12/16 Helvetica Neue Regular

### Color

* **Magenta** #ec008c
* **Light Gray** #eee
* **Translucent Black** rgba(0, 0, 0, 0.5)

### Measurements

Measurements are specified in pixels. Dimensions are fluid unless specified.

### Interactions

#### Desktop

* On hover, Primary Navigation reverses color (white/magenta).
* On click, if item contains a URL, Primary Navigation navigates to a new page.
* On click, if item contains other items, Secondary Navigation appears (see Desktop, Secondary Navigation).
* Menu appears containing Secondary Navigation.
* Translucent mask appears over content, behind menu.
* On hover in, Secondary Navigation changes color (magenta/light gray).
* On click, Secondary navigates to a new page.
* On click outside of menu, menu and mask are hidden.

#### Mobile

* When a user clicks the open navigation icon (“hamburger”), the navigation should “push” from left to right.
* The HUGE logo and navigation toggle slide left to right.
* The open navigation icon should change to the close navigation icon (“x”).
* Translucent mask appears over content, right of navigation.
* The Primary Navigation should include link items and menu items.
* When a user hovers a Primary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Primary Navigation link item, the browser should navigate to a new page.
* When a user clicks a Primary Navigation menu item, the Secondary Navigation should “push” down, the chevron should rotate * 180°.
* When a user hovers a Secondary Navigation item, it should change color (magenta/light gray).
* When a user clicks a Secondary Navigation item, browser should navigate to a new page.
* When a user clicks outside of the navigation, the navigation should close.
* When the navigation closes:
  * the menu should “pull” from right to left
  * the logo and toggle button should “slide” from right to left
  * the close icon should change to the open icon
  * the mask should be hidden
