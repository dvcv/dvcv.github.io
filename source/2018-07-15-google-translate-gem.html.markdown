---
title: Google Translate Gem
date: 2018-07-15 05:27 UTC
tags: [api, ruby, gem]
---
#Google Translate Gem
READMORE
## Gem

```ruby
  gem 'google-cloud-translate'
```

Like many other rails apps the first thing to do is to include the google translate gem.

## Bundle

```ruby
  bundle
```

Make sure to run bundle in terminal.

## Create Module

```ruby
  touch lib/google_translate.rb
```

Add a new file to your lib folder.

## The Code

```ruby
require "google/cloud/translate"
module GoogleTranslate
      def self.translate_text(text, to = 'en')
            begin
                  translate = Google::Cloud::Translate.new project: PROJECT_ID, key: API_KEY
                  translation = translate.translate text, to: to
                  return translation.text
            rescue Google::Cloud::Error => e
                  puts e.message
            end
            puts "Text was not translated correctly. Returning original text"
            text
      end
end
```

Add the following to your new file. You will need to replace PROJECT\_ID and API\_KEY with your very own authentication.

## The Output

```ruby
    rails c
    [1] pry(main)> GoogleTranslate.translate_text('hola')
    => "Hello"
```

'hola' was correctly translated to 'hello'.

\-dvcv
