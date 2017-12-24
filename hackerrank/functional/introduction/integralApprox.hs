import Text.Printf (printf)

len :: Double
len = 0.001

eval :: [Double] -> [Double] -> Double -> Double
eval a b l = sum $ zipWith (*) a $ map (l**) b

integral :: (Double -> Double) -> Int -> Int -> [Int] -> [Int] -> Double
integral fn l r a b = sum integrals
  where
    ln = fromIntegral l
    rn = fromIntegral r
    an = map fromIntegral a
    bn = map fromIntegral b
    ys = init [ln, ln + len.. rn]
    integrals = map (fn . (eval an bn)) ys

area = integral (len *)
volume = integral (\r -> pi * r ** 2 * len)

-- This function should return a list [area, volume].
solve :: Int -> Int -> [Int] -> [Int] -> [Double]
solve l r a b = [area l r a b, volume l r a b]

--Input/Output.
main :: IO ()
main = getContents >>= mapM_ (printf "%.1f\n"). (\[a, b, [l, r]] -> solve l r a b). map (map read. words). lines
