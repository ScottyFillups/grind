def quicksort(mylist):
    quicksortHelper(mylist, 0, len(mylist)-1)

def quicksortHelper(mylist, first, last):
    if first < last:
        split = partition(mylist, first, last)
        quicksortHelper(mylist, first, split - 1)
        quicksortHelper(mylist, split + 1, last)

def partition(mylist, first, last):
    pivot = mylist[first]

    leftmark = first + 1
    rightmark = last

    while True:
        while leftmark <= rightmark and mylist[leftmark] <= pivot:
            leftmark += 1
        while rightmark >= leftmark and mylist[rightmark] >= pivot:
            rightmark -= 1
        if rightmark < leftmark:
            break
        else:
            temp = mylist[leftmark]
            mylist[leftmark] = mylist[rightmark]
            mylist[rightmark] = temp

    temp = mylist[first]
    mylist[first] = mylist[rightmark]
    mylist[rightmark] = temp

    return rightmark

somelist = [12,23,234,23,421,365,34,23,645,23,213]
quicksort(somelist)
print(somelist)


