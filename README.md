# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./screenshot.jpeg)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/expenseschartcomponent-9rC2FlEcWe)
- Live Site URL: [Live site](https://expenses-chart-component-two-orcin.vercel.app/)

## My process

### Built with

- JSX
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [vite](https://vitejs.dev/) - Build tool

### What I learned

```js
//to use local data from json file to dynamically populate content
import data from "../assets/data.json";
{
  data.map((data, i) => (
    <WeekDays key={i} day={data.day} barAmount={data.amount} />
  ));
}

//ternary operator to conditinally change css style rules
visibility: isHovering ? 'visible' : 'hidden'
opacity: isHovering ? '70%' : '100%'

//calculating bar height based on the data obtained from data.json
height: (Math.round(barAmount) * 3) + 'px',
```

## Author

- Frontend Mentor - [@DagimTizazu](https://www.frontendmentor.io/profile/DagimTizazu)
- Email address - dagimtizazu4444@gmail.com
- Telegram - @dag400
