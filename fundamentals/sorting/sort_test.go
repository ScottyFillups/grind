package sort

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSimple(t *testing.T) {
	list := []int{1, 3, 5, 2, 6, 8, 4}
	sorted := []int{1, 2, 3, 4, 5, 6, 8}

	assert.Equal(t, sorted, Bubble(list))
	assert.Equal(t, sorted, Insertion(list))
  assert.Equal(t, sorted, Selection(list))
}

func TestDuplicate(t *testing.T) {
	list := []int{22, 34, 65, 23, 34, 65, 65}
	sorted := []int{22, 23, 34, 34, 65, 65, 65}

	assert.Equal(t, sorted, Bubble(list))
	assert.Equal(t, sorted, Insertion(list))
  assert.Equal(t, sorted, Selection(list))
}
