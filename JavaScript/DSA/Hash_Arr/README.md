# Hash

- Used when Indexing is not needed.

# Map and Set

```sh
"that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup)
```

- This is true for both map and sets.
- Preserve Order (Added order).

- Size

```js
new Map().size;
new Set().size;
// For object
Object.keys(t).length;
```

# Map

- Used if it involves more addition process.
- Easy iterate(Ordered too)

```js
map.forEach((k, v) => {
  console.log(k);
  console.log(v);
});
```

### Why not Objects

- Accident key - object have prototypes

```js
var t = {};
t["toString"] = "tomb";
t.toString();
//Not a function so now we cant event use that function
```

- Only accepts string or symbols not objects

```js
t["1"] = "test"; // this only works
```

# Set

- value should appear only once.
- Faster than Array of same size.
- Mostly used in Mathematics Set Theory -> Venn diag. So have most functions like difference, Intersection, union, isSubsetOf
