# http://blog.darkrefraction.com/2012/jekyll-excerpt-plugin.html

module JekyllPlugin

  class Excerpt < Liquid::Block
    def render(context)
      # Get the current post's post object
      id = context["page"]["id"]
      posts = context.registers[:site].posts
      post = posts [posts.index {|post| post.id == id}]

      # Put the block contents into the post's excerpt_tag field,
      # and also return those contents
      post.data["excerpt_tag"] = super
    end
  end

end

Liquid::Template.register_tag('excerpt', JekyllPlugin::Excerpt)