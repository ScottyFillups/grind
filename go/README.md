# go

This is my personal notes for the Go programming language. I occasionally make comparisons to C and JavaScript, so one could view this as the "Minimalistic guide to Go for mediocre C programmers, and/or slightly less mediocre JS programmers", but that's a mouthful :^)

### hello, world

```golang
package main

import "fmt"

func main() {
    fmt.Println("hello, world")
}
```

### BIG GOTCHAS (who thought this was a good idea?)

* Where `t` is an instance of `time`, `t.Format("format string")` must use the following date: `Mon Jan 2 15:04:05 2006 MST`

```golang
package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Println(time.Now().Local().Format("Wed Fri 5 15:04:05 2016")) // Bad!
    fmt.Println(time.Now().Local().Format("Jan 2 15:04:05 2006"))     // Okay!
    fmt.Println(time.Now().Local().Format("Wed")) // Bad!
    fmt.Println(time.Now().Local().Format("Mon")) // Yay!
}
```

### fmt.Printf reference

http://golang-examples.tumblr.com/post/86795367134/fmtprintf-format-reference-cheat-sheet

### Tiny Gotchas

* Conditions don't need to be wrapped by parentheses
* `nil` in Go is very similar to `NULL` in C, with some exceptions
* `if` and `for` initializers, conditions, and post statements are all optional
  * Eg. you can omit the condition in a `for` loop to get an infinite loop

```golang
package main

import "fmt"

func main() {
    i := 0
    for {
        fmt.Println(i)
        i += 1
        if i == 10 {
            break
        }
    }
}
```

### Packages

* Go packages are heavily reliant on directory structure
* A package can contain other packages, which are just subdirectories of the root package

```golang
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

```golang
i := 42
p = &i
fmt.Println(*p)   // Dereference p, prints 42
*p = 21           // Set i through p
```

### Testing in Go

* Use the testing package:

```golang
import "testing"
```

* Tests are supposed to be used in conjunction with `go test`
* `go test` will automatically execute functions with the following form:

```golang
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

```golang
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

```golang
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

```golang
letters := []string{"a", "b", "c", "d"}
```

* Slices can also be created with the built-in function `make`. Signature: `func make([]T, len, cap) []T`

```golang
s := make([]byte, 5, 5)
// if cap isn't specified, it equals len, so make([]byte, 5) is equivalent to the above)
```

* Internally, a slice is really just a pointer to an array, with metadata:

![slice structure](https://blog.golang.org/go-slices-usage-and-internals_slice-struct.png)
![slice pointing to array](https://blog.golang.org/go-slices-usage-and-internals_slice-1.png)

* Manipulating a slice:

```golang
s = s[2:4]
```

![manipulating a slice](https://blog.golang.org/go-slices-usage-and-internals_slice-2.png)

### Functions

* Multiple parameters share a type, you can omit the type for all except the last one

```golang
package main

import "fmt"

func add(x, y int) int {
    return x + y
}

func main() {
    fmt.Println(add(1, 2))
}
```

* Functions can have multiple return values

```golang
package main

import (
    "fmt"
    "errors"
)

func divide(x, y int) (int, err) {
    if y == 0 {
        return -1, errors.New("Cannot divide by 0")
    }
    return x / y, nil
} 

func main() {
    fmt.Println(divide(3, 3))
    fmt.Println(divide(3, 0))
}
```

### Structs

* Structs can be 

```golang
package main

import "fmt"

type person struct {
```

### Methods

* Methods in Go are just functions namespaced to a type
* Methods can either have value or pointer "receivers" (structs, or pointers to structs)
* Go automatically handles conversions between values and pointers for method calls
  * Unlike C, no need to decide between `->` or `.`; everything is just `.`

```golang
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

```golang
package main

import "fmt"

func main() {
    defer fmt.Println("world")
    fmt.Println("hello")
    // Outputs "hello\nworld"
}
```

### Closures

### Type conversions

* Type conversions follow the following format: `desiredType(literal)`

```golang
float32(2.343)      // 2.343 of type float32
```

### Backticks

* Backticks in Go is the similar to `<pre>` in HTML
* Special characters do not need to be escaped

```golang
package main

import "fmt"

func main() {
    fmt.Println(`hello
    world`)
}
```

### Readers

* Readers are used when reading a stream of data
  * This is common when dealing with HTTP requests, or large amounts of data, like video
* A reader always has a `Read`() method

```golang
package main

import (
    "fmt"
    "io"
    "strings"
)

func main() {
    r := strings.NewReader("Testing!")

    b := make([]byte, 4)
    for {
        n, err := r.Read(b)
        fmt.Printf("%q\n", b[:n])

        if err == io.EOF {
            break
        }
    }
}
```

### References

* https://blog.golang.org/go-slices-usage-and-internals
