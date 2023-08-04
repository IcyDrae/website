# Write code, not comments: The art of self-explanatory programming.

Friday August 04 2023 20:00:00 GMT+0100 (Central European Standard Time)

First draft.

![City at night from the top.](./cover_images/write-code-not-comments.jpg)

This is a guide on how **not** to write any comments. You know, that (poor) skill a lot of people tell you to learn early in your career as an engineer because it will help you be more efficient, it will make you a better coder(they didn't see the irony in that statement).

In reality, comments are *very rarely* needed, helpful nor are they a sign of maintainability, structure or thoughtfulness in the code itself. In this post we will explore the reasons why comments in your code *most of the time* are unnecessary. Not having to write them/getting rid of them is actually the preferred way of developing, the productive way.

One thing to keep in mind is that *most of the time* comments are one of two things, either necessary or unnecessary. Their necessity is a hint towards bad quality of the codebase, while healthy, clean code has no need for them.

In this post, we are focusing on comments as one of many characteristics of bad code.

Before we begin, let's clear something out, what are comments?

## 1. Comments: a stranger's best friend

Comments do not get compiled, they exist for the human.

When joining a new codebase what does a developer first do? Get a high level overview of the code, navigating around and reading the method names, method signatures and trying to figure out how everything works.

In the case of bad code with comments, they *appear* to be helpful by being the first thing you look at before reading the method name. What the comment however precisely does, is what the method name should have already been achieving: it provides clarity on the purpose of the method.

This means we are using comments as descriptive/informative where we shouldn't. The purpose of comments **is** descriptive, but only where necessary, respectively they should answer the question/s:

> Why?

or in special cases even

> How?

rather than 'What?' The 'What?' should already have been self-explanatory from the method name, class name, naming convention in the codebase etc.

Can you see now how sometimes comments can be invaluable to a lot of developers, not only new ones in the codebase? Add to this badly named methods and you get an unwelcoming codebase proving difficult to make changes to.

Can you also see, how comments are not always necessary? There are countless examples everywhere of tools/methodologies being used incorrectly and with the wrong intention.

## 2. A necessary evil

As described above, they can become a necessary evil, but that does not justify their existence in those cases, rather it points to other bigger issues.

## 3. Licenses/Preambles

A proper use of comments is adding a license/preamble at the top of each of the code files in order to protect the intellectual property from accidentally being violated.

## Write code

The (justified) absence of comments means the code is self-explanatory; it should answer the 'What?' through how it's named.

Example (C#):

```cs
namespace Authentication
{
  class MultiFactor
  {
    public bool AskForPassword()
    {
      // No Op    
    }

    public bool VerifyUserIdentity()
    {
      // No Op    
    }
  }
}
```

Notice that the method names state precisely what they do. That is one of the characteristics of self-documenting and maintainable code. Class names and method names should answer the 'What?' as in 'What do they do?', as opposed to properties, which should answer the question 'What are they?'(since they are data and cannot act on their own, rather they are acted upon).

## Summary

Avoid writing unnecessary comments by writing clean code instead. Remember that comments do not serve a single purpose to the program, but to you and your fellow developers. They exist for informative/descriptive purposes in specific cases.

It is better to not have to write comments, than to have to.


---

Thank you for reading, if you have any comments, remarks or questions on this piece, don't hesitate to contact me through [hey@dev-handbook.net](mailto:hey@dev-handbook.net).
