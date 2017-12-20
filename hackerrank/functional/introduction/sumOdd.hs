f arr = foldl (+) 0 (filter odd arr)
-- Alternatively, f = sum . filter odd
-- Where . is function composition, ie sum (filter odd arr)

main = do
   inputdata <- getContents
   putStrLn $ show $ f $ map (read :: String -> Int) $ lines inputdata
