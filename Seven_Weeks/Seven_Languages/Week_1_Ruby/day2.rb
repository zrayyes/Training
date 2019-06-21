# Read file without code block
file = File.open("dummy.txt","r")
for line in file
    puts line
end

# Read file with code block
File.open("dummy.txt","r") {|file| file.each {|line| puts line}}

# Hash to array
hash = {"prop1": "key1", "prop2": "key2"}
p hash.flatten()

# Array to hash
arr = [["p1","k1"], ["p2", "k2"]]
p arr.to_h

# Array to array slices
(1..16).each_slice(4) { |a| p a }