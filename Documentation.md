# Material ui is ui component library for react. It uses a compoents for ui. You can pass a props to these components.

# Installation :

```
Core :
$ npm install @material-ui/core

Icons :
$ npm install @material-ui/icons

```

## go to api at documentation if you want to know all the props of a component

## common props : {variant, color, align(for text), gutterBottom(for padding-bottom)}

## TYPOGRAPHY**\*\*\*\***\*\***\*\*\*\***\*\*\***\*\*\*\***\*\***\*\*\*\***

// \*1 typography let you to select a tag to be shown to browser as it but it behave as you put in variant
// #2 typography by default gives a p tag
// #3 you can pass props to it like : {variant => (here you specify how the tag should act), component => (here you specify how the tag should appear to the browser), color, align => (how to align the text center, left or right), noWrap}

## BOTTOM**\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***

// #1* props : {disabled, variant => (contained), href, disableElevation => (to rmove the shadow from bottom), }
// #2* variant =>
// (*contained => with background and shadow,
// *outlined => without background and shadow but only with border)
// \*if you didnt pass variant it wont take any of above
