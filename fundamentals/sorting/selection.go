package sort

func Selection(list []int) []int {
	for i := len(list) - 1; i >= 0; i-- {
		max := i

		for j := 0; j < i; j++ {
			if list[j] > list[max] {
				max = j
			}
		}

		swap(list, i, max)
	}

	return list
}
