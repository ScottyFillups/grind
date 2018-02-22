package main

import (
    "github.com/stretchr/testify/assert"
    "fmt"
    "github.com/jarcoal/httpmock"
    "testing"
)

func TestFetchStuff(t *testing.T) {
    payload := `{"some_key": "some_value"}`

    httpmock.Activate()
    defer httpmock.DeactivateAndReset()

    httpmock.RegisterResponder(
        "GET",
        "http://www.google.com",
        httpmock.NewStringResponder(200, payload),
    )

    assert.Equal(t, payload, FetchStuff(), fmt.Sprintf("The payloads are equal. Payload: %s", payload))
}
