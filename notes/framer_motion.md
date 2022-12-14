# Animate
-   Most animations will be performed with the `animate` prop.

# Transition

-   By default, Motion will cerate an appropriate animatio for a snappy transition based on the types of avlue being animated. But you can define different types of animatio by passing a default transition to teh `transition` prop.
    `   <motion.div
    animate={{ x:100 }}
    transition={{ ease: "easeOut", duration: 2 }}
    >
...
  `

# Enter Animation

-   When a `motion` component is first created, it'll automatically animate to the values in `animate` if they're different from those defined in `style` or `initial`. You can set the `initial` prop to `false` to **disable enter animations.**

# Exit Animation

-   In React, when a component is removed from the tree _what does it mean??_, it's removed instantly. Framer Motion provides `AnimatePresence component` to **keep components in the DOM while they perform an exit animation.**

    ```
    <AnimatePresence>
    {isVisible && (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    />

    )}
    </AnimatePresence>

    ```

# AnimatePresence
`AnimatePresence` allows components to animate out when they're removed from the React tree. 

It's required to enable exit animations becaue React lacks a lifecycle method that: 
1. Notifies components when they're going to be unmounted and 
2. Allows them to defer that unmounting until after an operation is complete (for instance an animation)

## Usage 
`AnimatePresence` works by detecting when **direct children** are removed from the React tree. In other terms, the Item that `AnimatePresence` should be applied for must stand directly after the AnimatePresence Item
