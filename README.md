# uri-join

This module is a function for joining paths, where the first might have a protocol. Think `path.join` that can handle something like joining `s3://bucket-name` and `folder-name`.

```javascript
var uriJoin = require("uri-join");
```

Example:

```javascript
uriJoin("/local/file", "path")         // '/local/file/path'
uriJoin("s3://remote/file", "path")    // 's3://remote/file/path'
```
