This JavaScript code demonstrates the difference between **loose equality (`==`)** and **strict equality (`===`)**.

```javascript
var a = 2;      // Number
var b = "2";    // String

console.log(a == b);
console.log(b == a);

console.log(a === b);
console.log(b === a);
```

### Output

```javascript
true
true
false
false
```

### Why `a == b` is `true`?

`==` performs **implicit type coercion**.

```javascript
2 == "2"
```

JavaScript sees a Number and a String, so it converts the String `"2"` to Number `2`:

```javascript
2 == 2
```

Result:

```javascript
true
```

### Why `a === b` is `false`?

`===` performs **strict comparison**.

It checks:

1. Value
2. Data Type

```javascript
2 === "2"
```

Values are the same (`2`), but types are different:

```javascript
Number !== String
```

Result:

```javascript
false
```

### Comparison Table

| Expression  | Type Conversion   | Result  |
| ----------- | ----------------- | ------- |
| `2 == "2"`  | Yes (`"2"` → `2`) | `true`  |
| `2 === "2"` | No                | `false` |
| `2 != "2"`  | Yes               | `false` |
| `2 !== "2"` | No                | `true`  |

### Interview Rule

* `==` → compares **values after coercion**
* `===` → compares **value + type** (recommended)

```javascript
console.log(0 == false);   // true
console.log("" == false);  // true
console.log(null == undefined); // true

console.log(0 === false);  // false
console.log("" === false); // false
console.log(null === undefined); // false
```

Because of these surprising coercions, modern JavaScript code almost always prefers **`===` and `!==`**.
