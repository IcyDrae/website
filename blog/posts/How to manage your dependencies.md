# How to manage your dependencies in a production grade project

Saturday August 05 2023 20:00:00 GMT+0100 (Central European Standard Time)

![City Skyline during Dusk.](./cover_images/how-to-manage-your-dependencies.jpg)

## Table of contents

1. What are dependencies & why are they used?
2. Problems you will run into when using dependencies.
3. How to contain those problems in the most graceful way?
4. Summary

## 1. What are dependencies & why are they used?

As developers we use dependencies every day & in every project, and a lot of us may not think too much of them since they silently do their work in the background, but they are a crucial part of our work.

A dependency is simply code that someone else wrote. That code is distributed through official channels on the internet and is meant to help us with a variety of different things. It is meant to simplify processes so we can get to the writing of the business logic as quick as possible and not lose any time writing unnecessary code that is not directly related to what we are doing.

For example:

*if we get a request from a stakeholder to create a web app that shows them the latest customer complaints in one place, then that is the business logic. Writing an HTTP Router library in order to show the pages of the customer data is not part of our job. But we **need** a router.
In that case we use(download) an HTTP Router library as a dependency that helps us get to writing our business logic.*

Every piece of code that we did not write ourselves and we are downloading and using in our project to help us do something, is called a dependency. Every project has dependencies, big or small, significant or not very, used for development processes(bundling, unit testing) or used for helping us write the business logic(currency converter, an HTTP client and so on).

A dependency is created when an author solves a very specific problem but makes the solution available for everyone. There are public and there are private dependencies; this post focuses on public, open source dependencies.

## 2. Problems you will run into when using dependencies.

Most of the time using completely foreign code will introduce some problems. The reason for these problems is that the author of the library tries to solve one problem but they make the library available for everyone. When doing so, everyone uses it for a slightly different/custom problem that they have. Since the library does not solve every single way of the problem, usage issues arise. When this happens, people reach out to the author for support or to submit a solution for their special (sub)problem. The author, trying to be as helpful as possible(albeit being a bit shortsighted) accepts/integrates every solution to every shade of the problem.

When a piece of code does not do one thing, and do it well, issues arise.
When a piece of code does only one thing and we try to use it for a slightly different thing, issues arise.

These problems are:

1. the code does not completely solve our problem, we have to take matters in our own hands,
2. the code (luckily) solves our specific problem but at a later time stops doing so,
3. the code solves our problem but is very buggy and unusable.

These are all different facades of the same problem: **the dependency is not made entirely for our project. It's made for general use.**

## 3. How to contain those problems in the most graceful way?

Notice that you cannot solve but only contain them.

Introduce boundaries to the dependencies. Remember that a dependency is foreign code, it does not belong all over your codebase. Give it a boundary and make it stay there. This can be achieved by either extending it in a wrapper class or in a property that gets passed around everywhere and injected. This way you can solve all three problems as needed by isolating them or by locking a specific version of the dependency. This has the great effect of making the dependency easy to manage in the whole project by having only one reference to it. This solution is one of the characteristics of clean code.

Example (JavaScript):

```js
import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = process.env.VUE_APP_API_HOSTNAME;
instance.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
instance.defaults.withCredentials = true;

export default instance
```

```instance``` gets exported and used everywhere, this is an easy way of controlling foreign code. If it introduces issues, there is only one place to fix it.

A completely wrong & unproductive(short- & long-term) solution to contain these problems is having a **local copy** of the dependency and directly making changes to the dependency code that you are carrying around everywhere. Do not do this, you will only make matters worse and "contribute" to the slow decay of the project and an inevitable rewrite, where you may or may not be part of the team that gets chosen to do so.

## 4. Summary

Dependencies are essential in our daily development workflow, allowing us to leverage existing code for smoother and quicker progress. However, using external libraries can introduce unique challenges. Issues may arise when the library's intended use case slightly differs from our specific needs, leading to incomplete solutions, unexpected changes, and troublesome bugs.

To effectively manage these problems, we must establish clear boundaries for dependencies. Isolating them through wrapper classes or injected properties enables us to address issues promptly and efficiently.

Beware of the temptation to create local copies and modify the code directly. Such actions can result in increased complexity and contribute to project deterioration over time.

By understanding the nature of dependencies and implementing targeted containment strategies, we can maintain cleaner, more robust codebases, ensuring the success and longevity of our projects.

---

Thank you for reading, if you have any comments, remarks or questions on this piece, don't hesitate to contact me through [hey@dev-handbook.net](mailto:hey@dev-handbook.net).
