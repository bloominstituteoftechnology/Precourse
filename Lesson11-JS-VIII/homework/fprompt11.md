Recursion means that a function can be invoked within itself.  This type of behavior leads to returns that are identical to the loops that are due to iterations.

An example:

```javascript
function nFactorial(n) {
  if (n === 0) {
    return 1;
  } else
    return n * nFactorial(n-1);
  }
```

Don't worry about the details here - just note that nFactorial() is being invoked within nFactorial (which is itself)

**_Note: Sometimes it is a more elegant, simple solution to do things via recursion as opposed to through iteration but they lead to the same results and have the same requirements of start, stop and how to move in between the start and stop points._**
