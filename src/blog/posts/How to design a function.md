# How to design a function

Sun Aug 27 2023 20:00:00 GMT+0100 (Central European Standard Time)

![Black motorcycle.](./cover_images/how-to-design-a-function.jpg)

## Table of contents

1. What is a function?
2. Signature
3. Purpose
4. Stub
5. Examples
6. Code
7. The recipe
8. Conclusion

As developers the majority of our time is spent producing, reading and changing code. That code is separated into functions. As such we need to know how to properly design a function in the way that is most effective to us. The following is a recipe that every developer needs to make a habit of while writing functions.

## 1. What is a function?

A function is a piece of code that does one thing and can be reused, it can take one or more values as input and also return a value as output. A function can be called by *name*. The purpose of a function is to be reused any number of times as needed. It reduces duplication and unnecessity.
A function executes code on demand, it can do anything you want it to.

## 2. Signature

In relation to functions, a signature means what the function takes in and what it returns. The first step to designing a function is knowing what it's signature needs to be.
What will it take in and what will it return?

Being conscious about this means you have a clear image of the data that you are working with; is it numbers, strings of characters, boolean values and so on.

If we need to write a function that multiplies a number by two, then we know that it needs to take a number and also return another number.

**Start by writing a temporary multiline comment for practicality and expressing everything in words.**

## 3. Purpose

The purpose is a description of what the function produces in terms of what it consumes. Putting this into words it would look something like this:

> Produce two times the given number.

This is not the name of the function nor is it *how* the function achieves its purpose. It is solely what it does, expressed in a sentence for us to be aware of it.
If we successfully know the purpose of our function, it will enable us to name that function in a meaningful way. Based on the above *description* we can name our function the following:

> MultiplyByTwo(number)

## 4. Stub

Write the first *dummy* function.

A stub is a function definition that has the correct function name, the correct number of parameters and produces a dummy result of the correct type.
A stub exists for us to test our functions without writing any code and getting stuck multiple times along the way. Stubs are used to *simulate* the behaviour of a function. An example of this is(pseudocode):

```
Product = MultiplyByTwo(15)

if (Product > 40) {
    print "the product multiplied is greater than 40"
}

function MultiplyByTwo(Number factor): Number {
    return 30
}

```

## 5. Examples

Using the above process of stubbing(manually simulating your functions) you can test your logic *multiple times* and *with multiple different values*.

This enables us to know the use case(s) of our code and providing clarity on the business logic of it.
If we do not do this beforehand, then we would need to do it while writing the code, which would make us confused, lead to us missing some of the scenarios and cost us more time overall.

## 6. Code

After having tested our function with multiple examples for multiple scenarios, we now know what the function needs to do to produce the output we need it to.

*It sometimes helps to elaborate examples to show how the expected value could have been produced.*

## 7. The recipe

The recipe reads as follows:

1. Come up with the signature
2. Define the purpose
3. Simulate it
4. Create examples
5. Finally, code it based on all the above

## 8. Conclusion

Preparation is everything; knowing what type of values the function will use, what will it do and being able to figure out its output in advance will enable you to have clarity on *how* it will work. This will allow you to work more efficiently, bug-free and faster.

---

Thank you for reading, if you have any comments, remarks or questions on this piece, don't hesitate to contact me through [hey@dev-handbook.net](mailto:hey@dev-handbook.net).
