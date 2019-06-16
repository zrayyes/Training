hello = "Hello, World"

puts hello

puts hello.index('World')

x = 0
while x < 10
    x = x + 1
    puts "#{x}: My name"
end

hash = {1=>"one",2=>"two"}
puts hash

stuff = {:array => [1,2,3], :string => "Hi, mom!"}
# :symbol - identical symbols are the same physical object
puts stuff[:string]

3.times{puts "Hey there"}

animals = ["Cat", "Dog", "Hamster"]

animals.each{|a| puts a}

class Fixnum
    def many_times
        i = self
        while i>0
            i = i - 1
            yield
        end
    end
end

3.many_times{puts "mangy moose"}

def call_block(&block)
    puts "Me too"
    block.call
end

def pass_block(&block)
    puts "I was here first"
    call_block(&block)
end

pass_block{puts "Hello, block"}

a = [5,3,4,1]
puts a.inject(0) {|sum, i| sum+i}