```javascript
// Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne( { _id: 1 }, { $inc: { counter: '1' } } );
```