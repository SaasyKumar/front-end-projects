//                                      MAP as HASHTABLE

//  no need for weakmap (only if object as key)
// Average time O(1) for get,set,has,delete

const hash = new Map();

//                SET
// No key should appear more than once
// Key can be string or object or linearGradient

hash.set("a", 1);
hash.set("a", 2);
// >> "a" => 2
hash.set(a, 1);
// 'a' => 2, linearGradient#a => 1

//                 GET
// Should have same input type as set
hash.get("a");
// >> 2
hash.get(a);
// >> undefined

// ----------------------------------------------------------------------------------------

//                                      OBJECTS as HASHTABLE
