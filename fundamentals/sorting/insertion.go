package sort

func shift_up(list []int, start, end int) {
	for i := start; i < end; i++ {
		list[i+1] = list[i]
	}
}

func Insertion(list []int) []int {
	for i := 1; i < len(list); i++ {
		for j := 0; j < i; j++ {
			if list[j] > list[i] {
				temp := list[i]
				shift_up(list, j, i)
				list[j] = temp
				break
			}
		}
	}

	return list
}
