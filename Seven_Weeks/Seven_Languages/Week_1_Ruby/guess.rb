num = rand(10) + 1

puts "Guess a number between 1 and 10"

guessed = false

while not guessed
    number = gets.to_i
    if num == number
        guessed = true
    else
        puts "Try again"
    end
end

puts "Congratulations"