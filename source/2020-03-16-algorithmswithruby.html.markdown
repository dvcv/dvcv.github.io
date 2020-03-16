---

title: Algorithms with Ruby
date: 2020-03-16 20:06 UTC
tags: [ruby, algorithms]
published: false
---
#Algorithms with Ruby
A brief overview of algorithms written in ruby.
READMORE
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
