package sort

func Bubble(list []int) []int {
	for i := len(list) - 1; i > 1; i-- {
		for j := 0; j < i; j++ {
			if list[j] > list[j+1] {
				swap(list, j, j+1)
			}
		}
	}

	return list
}
