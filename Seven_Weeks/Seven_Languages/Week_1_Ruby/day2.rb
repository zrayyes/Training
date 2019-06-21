# No code block
file = File.open("dummy.txt","r")
for line in file
    puts line
end

# With code block
File.open("dummy.txt","r") {|file| file.each {|line| puts line}}


hash = {"prop1": "key1", "prop2": "key2"}
puts hash.flatten()

arr = [["p1","k1"], ["p2", "k2"]]
puts arr.to_h