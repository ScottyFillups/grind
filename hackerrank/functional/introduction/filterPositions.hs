f :: [Int] -> [Int]
f lst = map snd (filter (\x -> even . fst $ x ) (zip [1..] lst))
-- A more concise way: f = map snd . filter (odd . fst) . zip [0..]

-- This part deals with the Input and Output and can be used as it is. Do not modify it.
main = do
   inputdata <- getContents
   mapM_ (putStrLn. show). f. map read. lines $ inputdata
