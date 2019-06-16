class Tree
    attr_accessor :children, :node_name

    def initialize(name, children=[])
        @children = children
        @node_name = name
    end

    def visit(&block)
        block.call self
    end

    def visit_all(&block)
        visit &block
        children.each {|c| c.visit &block}
    end
end

my_tree = Tree.new("A", [Tree.new("B"), Tree.new("c")])

puts "First node"
my_tree.visit{|node| puts node.node_name}
puts 

puts "All nodes"
my_tree.visit_all{|node| puts node.node_name}