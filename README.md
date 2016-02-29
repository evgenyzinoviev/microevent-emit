# pemit

```
npm install --save pemit
```

Example
---

```js
import Emitter from 'pemit'
class AnyClass extends Emitter {
    // ...
}

let obj = new AnyClass()
obj.bind('event', function(a, b) {
    console.log(a, b)
})
obj.emit('event', 1, 2) // prints 1, 2
```
