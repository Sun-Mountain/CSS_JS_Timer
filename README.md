# Making An Animated Timer With CSS & JavaScript
With my time at General Assembly rapidly coming to an end, there is less direct instruction and more encouraging us to play in the huge sandbox that is web development. Recently, an entire day was dedicated to us teaching ourselves either the beginnings of another language or skill not covered by GA's curriculum.

I chose to create a JavaScript Timer with CSS animations.

## Why did I choose this subject?
I have an idea for my capstone project that would be greatly enhanced visually by CSS Animation ttriggered via JavaScript.

## What problem does it solve? / Why does one use it?
It doesn't so much solve a problem but has the potential to make an existing project more aesthetically pleasing to the user.

<a href="https://dev.to/nzonnenberg/basic-color-theory-for-web-developers-15a0">Being visually pleasing makes user interface easier to understand</a> and navigate as well as easier to sell to potential buys or users.

## What are the alternatives?
I would have little to no styling or a static webpage where the only moving part is the JavaScript timer, which can look fairly unappealing or boring.


# Teaching Myself

## Step One - Making the timer.
Luckily the internet--in its vast wealth of information--has many examples of JavaScript timers. I used one from https://www.w3schools.com/howto/howto_js_countdown.asp and modified it to my specifications (counting down from 1 minute).

_**Note**: I also had it restart at 1 minute after the timer reached 0 in order to make sure the animation worked more than once in a page load._

## Step Two - Add basic CSS styling.
Determine what a static version of my countdown timer will look like and define any necessary classes. (This was easy enough.)

## Step Three - Learn About Animation.
**Animation vs. Transition**

A **transition** is applied to an element and specifies a change that happens gradually over a period of time.

An **animation** just runs in the background regardless of anything else happening via the user or the rest of the website.

At this point I realized that the title of this whole project (_Making An Animated Timer With CSS & JavaScript_) is a lie. What I am actually making is a _Transitional Timer_ with CSS & JavaScript.

## Step Four - Add animation independent of JS
I was able to add a div that would shrink over the course of a designated time in the CSS code.

```css
.visual-timer {
    border-top: 50px solid #004D00;
    margin: 5% auto;
    width: 50%;
}

.width-change {
    /* Animation code */
    -webkit-animation-name: widthChange; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 60s; /* Safari 4.0 - 8.0 */
    animation-name: widthChange;
    animation-duration: 60s;
}

@keyframes widthChange {
    from {width: 600px;}
    to {width: 0px;}
}
```

## Step Five - connect the start of the animation with the start of JS function
By adding  `visualTimer.classList.add("width-change");`  at the beginning of the function I am able to initiate the animation when the timer started to count down. However, it would only work once and then not re-initiate when the timer reset.

This was easily fixed by adding  `visualTimer.classList.remove("width-change");`  when the timer reset, allowing the function to re-initialize the animation when the function looped thru.

## What are the biggest conceptual hurdles (if any) you encountered when researching this?
At this point, I was still not happy with how the animation didn't reflect the timer exactly. It was not consistent so that it was over half way thru its countdown when the timer was at 30 seconds.

But then I found another way to breakdown the animation so that it did not go as quickly.

```css
@keyframes widthChange {
    0%   {width: 600px;}
    25%  {width: 450px;}
    50%  {width: 300px;}
    75%  {width: 150px;}
    100% {width: 0px;}
}
```

This way it hit half way thru the length of the animation when the timer _was_ at 30 seconds. However, the rate at which the width changes still isn't as consistent as I would like.

## What article(s) or forum(s) was most helpful to you in learning this?
https://css-tricks.com/controlling-css-animations-transitions-javascript/
https://www.sitepoint.com/css3-animation-javascript-event-handlers/
https://www.w3schools.com/css/css3_animations.asp
https://www.w3schools.com/howto/howto_js_add_class.asp
https://gomakethings.com/two-ways-to-set-an-elements-css-with-vanilla-javascript/

## For the Future
Aside from a more consistent animation, I would like to have the animation duration change based on the timer. So that if the timer was longer or shorter, the animation would speed up or slow down to match.

Possible solutions I have in mind are to integrate SASS or build the styling in the JavaScript itself and have the duration be variables.