Two elements of different types will produce different trees.

The developer can hint at which child elements may be stable across different renders with a key prop.

first，compare the types of the two root elements
- different
  - root elements---componentWillUnmount() 
  - new elements---mount
  - Any components below the root will also get unmounted



controlled&uncontrolled

A controlled input accepts its current value as a prop, as well as a callback to change that value. 
```<input value={someValue} onChange={handleChange} />```