# Making An Animated Timer With CSS & JavaScript
With my time at General Assembly rapidly coming to an end, more and more is expected of us. Recently, an entire day was dedicated to us teaching ourselves either the beginnings of another language or skill not covered by GA's curriculum.

I chose to create a JavaScript Timer with CSS animations.

## Why did I choose this subject?
I have an idea for my capstone project that would be greatly enhanced visually by CSS Animation that would be triggered via JavaScript.

## What problem does it solve? / Why does one use it?
It doesn't so much solve a problem but has the potential to make an existing project more aesthetically pleasing to the user.

However, being visually pleasing makes user interface easier to understand and navigate as well as easier to sell to potential buys or users.

## What are the alternatives?
Either little to know styling or a static webpage where the only animation is the JavaScript timer, which can look fairly unappealing or boring.


# Teaching Myself

## Step One - Making the timer.
Luckily the internet--in its vast wealth of information--there were many examples of JavaScript timers. I used one from https://www.w3schools.com/howto/howto_js_countdown.asp and modified to my specifications (counting down from 1 minute).

_**Note**: I first had it restart at 1 minute after the timer reached 0 in order to make sure the animation worked more than once in a page load._

## Step Two - Add basic CSS styling.
Determine what a static version of my countdown timer will look like and define any necessary classes.

## Step Three - Learn About Animation.
**Animation vs. Transition**

A **transition** is applied to an element and specifies a change that happens gradually over a period of time.

An **animation** just run and do their thing regardless of anything else happening via the user or the rest of the website.

At this point I realized that the title of this whole project (_Making An Animated Timer With CSS & JavaScript_) is a lie. What I am actually making is a _Transitional Timer_ with CSS & JavaScript.

## Step Four - Add animation independent of JS
I was able to add a div that would shrink over the course of a designated time in the CSS code.

```
.visual-timer {
    border-top: 50px solid #004D00;
    margin: 5% auto;
    width: 50%;
}

.anim {
    /* Animation code */
    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 60s; /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 60s;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
    from {width: 50%;}
    to {width: 1%;}
}

/* Standard syntax */
@keyframes example {
    from {width: 50%;}
    to {width: 1%;}
}
```

## Step Five - connect the start of the animation with the start of JS function
I realized that the easiest way to initiate the animation


What is your opinion on the technology after having built something with it?
What are the biggest conceptual hurdles (if any) you encountered when researching this?
What resources do you recommend for interested students?
What article or forum was most helpful to you in learning this?
What are 3 interview questions one might be asked about this technology?