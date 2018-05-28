package sort

func partition(list []int, low, high int) int {
	pivot := list[high]

	// The size of the "less than" subarray is  i - low - 1
	// ie. i = low means the size of the "less than" subarray is 1
	i := low - 1

	for j := low; j < high; j++ {
		// if the current elem is less than the pivot, increase
		// "less than" subarray length by 1; then swap out the
		// unknown placeholder with list[j]
		if list[j] <= pivot {
			i++
			swap(list, i, j)
		}
	}

	// Given x > i, list[x] > pivot, so it's safe to swap
	// the pivot with list[i + 1]
	swap(list, i+1, high)

	// return the index of the pivot
	return i
}

func quick_helper(list []int, low, high int) []int {
	if high > low {
		pi := partition(list, low, high)

		quick_helper(list, low, pi-1)
		quick_helper(list, pi+1, high)
	}

	return list
}

func Quick(list []int) []int {
	return quick_helper(list, 0, len(list)-1)
}
