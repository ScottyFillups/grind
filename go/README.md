# go

This is my personal notes for the Go programming language. I occasionally make comparisons to C and JavaScript, so one could view this as the "Minimalistic guide to Go for mediocre C programmers, and/or slightly less mediocre JS programmers", but that's a mouthful :^)

### hello, world

```go
package main

import "fmt"

func main() {
  fmt.Println("hello, world")
}
```

### Packages

* Go packages are heavily reliant on directory structure
* A package can contain other packages, which are just subdirectories of the root package

```go
package main

import (
  "fmt"
  "math/rand"
)

func main() {
  fmt.Println("My favourite number is", rand.Intn(10))
}
```

* By convention, the package name is the same as the last element of the import path
* `import "math/rand"` will just import `rand`, not `math`
* Exported functions and types begin with a capital letter

### Workspace

This section only concerns Go applications, as opposed to simple scripts. Go applications typically have three subdirectories at its root (the "Workspace"):

* src - The source code
* pkg - The Go package objects
* bin - Any compiled binaries

The `$GOPATH` environment variable should contain all locations of Go workspaces.

#### Key things to note

* Everything is a package
* The `main` package acts as an entrance point

### Pointers in Go

* Default value is `nil`
* Essentially C pointers, but no pointer arithmetic allowed

```
i := 42
p = &i
fmt.Println(*p)   // Dereference p, prints 42
*p = 21           // Set i through p
```

### Testing in Go

* Use the testing package:

```go
import "testing"
```

* Tests are supposed to be used in conjunction with `go test`
* `go test` will automatically execute functions with the following form:

```go
// This is case sensitive
func TestXxx(*testing.T)
```

### Variadic functions in Go

Variadic functions in Go is very similar to using the spread/rest operator in JavaScript:

```js
// rest parameter
function sum (...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0)
}

const args = [1, 2, 3]

// note sum(...args) is equivalent to sum.apply(null, args)
// ...args is called spread syntax
console.log(sum(2, 3, 4))   // outputs 9
console.log(sum(...args))        // outputs 6
```

```go
package main

import "fmt"

func sum(nums ...int) {
  total := 0
  for _, num := range nums {
    total += num
  }
  return total
}

func main() {
  nums := []int{1, 2, 3}
  fmt.Println(sum(2, 3, 4))
  fmt.Println(sum(nums...))
}
```

A few observations:

* `...` is prefixed to the argument type in Go, not the variable name
* When applying variadic functions, `...` is used as a suffix in Go, not a prefix (spread syntax)

### Arrays and slices

_Side note_: `range` is an operator, _not_ a data structure. It's used to iterate over a variety of data structures, like arrays, slices, maps, etc.

#### Arrays

* Arrays, like C, have a fixed length and element type

```go
var a [4]int
b := [2]string{"Hello", "World"}

// Compiler counting the array elements
c := [...]string{"Testing!", "1", "2", "3"}
```

* Unlike C, Go arrays are initialized to the appropriate "zero value" for the respective type
* Go's arrays are values, _not_ pointers to the first element of the array
  * If you assign or pass around arrays, you _copy_ them!
  * If you want C-like behaviour, you can pass around pointers that point to arrays

#### Slices

* Slices have a fixed element type, but has no specified length

```go
letters := []string{"a", "b", "c", "d"}
```

* Slices can also be created with the built-in function `make`. Signature: `func make([]T, len, cap) []T`

```go
s := make([]byte, 5, 5)
// if cap isn't specified, it equals len, so make([]byte, 5) is equivalent to the above)
```

* Internally, a slice is really just a pointer to an array, with metadata:

![slice structure](https://blog.golang.org/go-slices-usage-and-internals_slice-struct.png)
![slice pointing to array](https://blog.golang.org/go-slices-usage-and-internals_slice-1.png)

* Manipulating a slice:

```go
s = s[2:4]
```

![manipulating a slice](https://blog.golang.org/go-slices-usage-and-internals_slice-2.png)

### Functions

* Multiple parameters share a type, you can omit the type for all except the last one

```go
package main

import "fmt"

func add(x, y int) int {
  return x + y
}

func main() {
  fmt.Println(add(1, 2))
}
```

### Methods

* Methods in Go are just functions namespaced to a type
* Methods can either have value or pointer "receivers" (structs, or pointers to structs)
* Go automatically handles conversions between values and pointers for method calls
  * Unlike C, no need to decide between `->` or `.`; everything is just `.`

```go
package main

import "fmt"

type rect struct {
  width, height int
}

func (r *rect) area() int {
  return r.width * r.height
}

func (r rect) perim() int {
  return 2 * r.width + 2 * r.height
}

func main() {
  r := rect{width: 10, height: 5}
  rp := &r
  fmt.Println(r.area(), r.perim())
  fmt.Println(rp.area(), rp.perim())
}
```

### Defer

* The defer keyword denotes a statement that will run when the surrounding function returns

```go
package main

import "fmt"

func main() {
  defer fmt.Println("world")
  fmt.Println("hello")
  // Outputs "hello\nworld"
}
```

### Closures

### Backticks

* Backticks in Go is the similar to `<pre>` in HTML
* Special characters do not need to be escaped

```go
package main

import "fmt"

func main() {
  fmt.Println(`hello
world`)
}
```


### References

* https://blog.golang.org/go-slices-usage-and-internals
