---

title: Data Structures and Algorithms with Ruby
date: 2020-03-16 20:06 UTC
tags: [ruby, algorithms]
published: true
---
#Practice with Ruby
###2020-03-16
A brief overview of data structures and algorithms written in ruby.
READMORE
##Linked List
```ruby
class Node
  attr_accessor :value, :next
  def initialize(value, next_node)
    @value = value
    @next = next_node
  end
end

class LinkedList
  attr_accessor :head
  def initialize
    @head = nil
  end

  def add(value)
    if @head == nil
      @head = Node.new(value,nil)
    else
      curr = @head
      while(curr.next != nil)
        curr = curr.next
      end
      curr.next =  Node.new(value, nil)
    end
  end

  def remove(value)
    curr = @head
    if curr.value == value
        @head = curr.next
    else
      while(curr.next != nil && curr.next.value != value)
        curr = curr.next
      end
      if curr.next&.value == value
        curr.next = curr.next.next
      end
    end
  end

  def to_s
    return '' if @head == nil
    arr = []
    curr = @head
    arr << curr.value
    while(curr.next != nil)
      curr = curr.next
      arr << curr.value
    end
    arr.to_s
  end
end


def reverse_link_list(list)
  curr = list.head
  prev = nil
  while(curr != nil)
    temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  end
  list.head = prev
  list
end
```

<div style="text-align: center;">
<h3>Output</h3>
</div>
```ruby
l = LinkedList.new
l.add(1)
l.add(2)
l.add(3)
l.add(4)
p l.to_s
#"[1, 2, 3, 4]"
l.remove(2)
p l.to_s
#"[1, 3, 4]"
p reverse_link_list(l).to_s
#"[4, 3, 1]"
```

##Stack
```ruby
class Node
  attr_accessor :value, :next
  def initialize(value, next_node)
    @value = value
    @next = next_node
  end
end

class Stack
  attr_accessor :head

  def initialize
    @head = nil
  end

  def push(value)
    @head = Node.new(value, @head)
  end

  def pop
    value = @head.value
    @head = @head.next
    value
  end

   def to_s
    return '' if @head == nil
    arr = []
    curr = @head
    arr << curr.value
    while(curr.next != nil)
      curr = curr.next
      arr << curr.value
    end
    arr.to_s
  end
end
```

<div style="text-align: center;">
<h3>Output</h3>
</div>
```ruby
stack = Stack.new
stack.push 3
stack.push 5
stack.push 7
p stack.pop
#7
p stack.to_s
#"[5, 3]"
```

#Algorithms with Ruby
##Fibonacci
```ruby
#Recursive
def fib(n)
  if n == 1 || n == 2
    return 1
  else
    return fib(n-1) + fib(n-2)
  end
end

#Non Recursive
def fib(n)
  if n == 1 || n == 2
    return 1
  else
    i = 3
    prev = 1
    prev_prev = 1
    sum = nil   
    while i <=n
      sum = prev + prev_prev
      prev_prev = prev
      prev = sum
      i += 1
    end
    return sum
  end
end

```

<div style="text-align: center;">
<h3>Output</h3>
</div>
```ruby
p fib(1)
p fib(2)
p fib(3)
p fib(4)
p fib(5)
p fib(6)
# 1
# 1
# 2
# 3
# 5
# 8
```

\-dvcv
