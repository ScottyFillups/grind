rev :: [Int] -> [Int]
rev [] = []
rev l = last l : rev (init l)
