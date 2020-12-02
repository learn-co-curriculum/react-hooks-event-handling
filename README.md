# React Events Crash Course

## Overview

In this lesson, we'll cover the event system in React. The event system is
React's way of implementing native HTML events, such as `onclick`, `onkeydown`,
`onmousemove`, etc. Before moving forward with this lesson, you should be
familiar with HTML events. For a refresher, see: [this
documentation][html-events]. 


## Objectives

1. Explain how React events differ from browser events
2. Describe how React standardizes events for compatibility
3. Explain how to use React events in our application
4. Add an event handler to a component


## React's Event System

React makes use of basic HTML events by wrapping them in something called
`SyntheticEvent`s. This wrapper allows React to make sure events are handled the
same way across all browsers (a.k.a. standardization). Some browsers treat
events differently, and by wrapping these events into a consistent API, React
makes our lives easier. It's important to keep in mind that they are the _exact
same events_, just implemented in a consistent way! That means these events also
have methods like `preventDefault()`, `stopPropagation()`, and so on.


## How to add event handlers

Consider the following component:

<a name="tickler-example"></a>

```jsx
function Tickler {

  function tickle() {
    console.log('Teehee!')
  }

  return (
    <button>Tickle me!</button>
  )
}
```

We have a `tickle()` method, but no way to trigger it! This is a perfect time to
add an event handler so that we can see the message 'Teehee!' in our console.
We attach event handlers to an element in React much like basic HTML:

```js
<button onClick={tickle}>Tickle me!</button>
```

In fact, this is exactly how we would do this with basic HTML/JS. The only
difference being `onClick` in React vs. `onclick` in basic HTML.

The handler name is always comprised of `on`, and the event name itself (i.e.
`click`). These are joined together and camel-cased. As you know, the value of
the events are _callbacks_ (either a reference to a function or an inline
function). As a reminder, we pass the _function object itself_ and do not invoke
the function. We are telling React's event system: "Hey! Use this thing later if
the event associated with it is triggered".

Now, when we click the button, we see a message in our console. Awesome!


## Moving Forward

The information above is the bare minimum you need to get started with events in
React. As we move forward, we will dive deeper into events and explore how they
interact with our React applications on a larger scale.

There are a lot of event handlers we can add to an element, for example
`onKeyUp`, `onMouseDown`, `onFocus`, `onSubmit`, and many more. Check out the
[complete list of supported events][react-events] to see what else you can play
around with! If you have time, the React event documentation linked below is an excellent resource for mastering the `SyntheticEvent` wrapper.


## Resources
- [React Synthetic Events](https://reactjs.org/docs/events.html)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Supported Events](https://reactjs.org/docs/events.html#supported-events)


<p class='util--hide'>View <a href='https://learn.co/lessons/react-events-crash-course-readme'>React Events Crash Course</a> on Learn.co and start learning to code for free.</p>

[html-events]: https://www.w3schools.com/js/js_events.asp
[react-events]: https://reactjs.org/docs/events.html#supported-events
