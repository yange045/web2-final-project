---
title: Web Accessibility
description: Notes on web accessibility and what I learned about making websites more accessible.
author: Eliy Yang
published: 2026-02-25
---

# Web Accessibility

Web accessibility is basically making sure your website can be used by everyone, including people with disabilities like people who are blind or deaf or have trouble using a mouse.

## Why It Matters

Not everyone uses the internet the same way. Some people use screen readers instead of looking at the screen. If your website isn't built with accessibility in mind those users are going to have a hard time using it. It's also just good practice to make sure your site works for as many people as possible.

## WCAG Guidelines

WCAG stands for Web Content Accessibility Guidelines. These are basically a set of rules to follow to make your site accessible. The main ideas are:

- **Perceivable** - Users need to be able to see or hear your content. Like adding alt text to images.
- **Operable** - Users should be able to navigate using just a keyboard, not just a mouse.
- **Understandable** - Your content and forms should be easy to understand.
- **Robust** - Your site should work with assistive technologies like screen readers.

## Semantic HTML

Using the right HTML elements is a big part of accessibility. For example using `<button>` for buttons instead of a `<div>` makes it work with keyboards automatically. Elements like `<header>`, `<nav>`, `<main>`, and `<footer>` help screen readers understand the layout of the page.

## ARIA Attributes

ARIA attributes are extra attributes you can add to HTML elements to make them more accessible. Some ones I used in my project:

- `aria-label` - Adds a label to something that doesn't have visible text.
- `aria-required` - Tells screen readers a field is required.
- `aria-invalid` - Tells screen readers a field has an error.
- `aria-expanded` - Used for things like dropdown menus to say if they are open or closed.

## Forms

Forms need to be accessible too. Some things to keep in mind:

- Use `<label>` tags and connect them to inputs with `for` and `id`.
- Mark required fields so users know what they have to fill out.
- Show error messages that actually explain what went wrong.

## Keyboard Navigation

Your whole site should work using just the tab key. Users should be able to tab through links and form fields and there should always be a visible outline so they know where they are on the page.
