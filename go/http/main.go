package main

import (
    "fmt"
    "log"
    "net/http"
    "io/ioutil"
)

func handleErr(err error) {
    if err != nil {
        log.Fatal(err)
    }
}

func FetchStuff() string {
    resp, err := http.Get("http://www.google.com")
    handleErr(err)
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    handleErr(err)

    return string(body)
}

func main() {
    fmt.Println(FetchStuff())
}
