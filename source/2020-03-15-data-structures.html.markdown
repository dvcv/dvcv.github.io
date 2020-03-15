---

title: Data Structures with Ruby
date: 2020-03-15 01:29 UTC
tags: [ruby, data structures]
published: false
---
#Data Structures with Ruby
READMORE
##Summary
This is a brief overview of data structures written in ruby.

##Linked List
```ruby
class Node
  attr_accessor :value, :next   
  def initialize(value, next_node)   
    @value = value   
    @next = next_node   
  end   
end
```

```ruby
class LinkedList
  attr_accessor :head

  def add(value)
    if(@head.nil?)
      @head = Node.new(value, nil)
    else
      current = @head
      while(current.next != nil)
        current = current.next
      end
      current.next = Node.new(value, nil)
    end
  end

  def reverse(list)
    return nil if list.nil?
    prev = nil
    curr = list.head

    while(curr != nil)
      temp = curr.next
      curr.next = prev
      prev = curr
      curr = temp
    end
    list.head = prev
    list
  end

  def display(list)
    return nil if list.nil?
    curr = list.head
    arr = []
    while(curr != nil)
      arr.push(curr.value)
      curr = curr.next
    end
    p arr
  end
end
```

###Output
```ruby
list = LinkedList.new()
list.add(1)
list.add(2)
list.add(3)
list.display(list)                #list before reversing [1,2,3]
list.display(list.reverse(list))  #list after reversing  [3,2,1]
```

\-dvcv
