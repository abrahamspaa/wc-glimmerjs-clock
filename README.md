# wc-glimmerjs-clock

This README outlines the details of collaborating on this Glimmer application.
A short introduction of this app could easily go here.

## How to build 

1. Create glimmerjs app

```
ember new wc-glimmerjs-clock --blueprint @glimmer/blueprint@0.13 --web-component=glimmerjs-clock --yarn
```

2. Change ember-cli version from `2.14.0` to `3.24.0` 
3. Add clock in src/ui/WcGlimmerjsClock/component.ts taken from [clock](https://svelte.dev/repl/clock?version=3.38.2)
4. Add helpers 
```
ember g glimmer-helper divide
ember g glimmer-helper add
ember g glimmer-helper multiple
```
5. Run the code by 
```
ember s
```
