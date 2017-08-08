def bubblesort(mylist):
    for sub in range(len(mylist)-1,0,-1):
        for i in range(sub):
            if mylist[i] > mylist[i+1]:
                temp = mylist[i]
                mylist[i] = mylist[i+1]
                mylist[i+1] = temp

somelist = [2,2,5,54,3,43,4,6,23,2]
bubblesort(somelist)
print(somelist)

