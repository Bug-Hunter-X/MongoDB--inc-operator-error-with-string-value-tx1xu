# MongoDB $inc Operator Error with String Value
This example demonstrates an error that can occur when using MongoDB's `$inc` operator with an incorrect data type.  The `$inc` operator is used to increment a numerical field in a document.  However, if you provide a string value instead of a number, you will likely encounter issues.

## Bug
The following code snippet shows incorrect usage:
```javascript
db.collection('myCollection').updateOne( { _id: 1 }, { $inc: { counter: '1' } } );
```
Passing `'1'` (a string) to `$inc` will not increment the counter correctly.

## Solution
The correct way to use `$inc` is to provide a numerical value:
```javascript
db.collection('myCollection').updateOne( { _id: 1 }, { $inc: { counter: 1 } } );
```
This will properly increment the `counter` field.
