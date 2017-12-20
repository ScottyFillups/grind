-- Only fill up the blanks for the function named len
-- Do not modify the structure of the template in any other way
len :: [a] -> Int
len lst = succ . fst . last . (zip [0..])
-- Alternatively, use list comprehension: len lst = sum [ 1 | _ <- lst]
