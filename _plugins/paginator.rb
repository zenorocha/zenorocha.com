# Patches Jekyll's built-in pagination to work with files *other* than the base index.html.
# Expects the following to be specified in your _config.yml:
#
# paginate_base: "blog" # Puts all pagination folders in the "blog" dir, e.g. "/blog/page2"
# paginate_index: "blog/index.html" # Paginates using the specified file

module Jekyll

  class Page

    # Added for easier access to a page's path relative to the src directory.
    # e.g. "/my-jekyll-site/src/blog/index.html" -> "blog/index.html"
    def base_relative_path
      File.join(@dir, @name).gsub(/^\//, "")
    end

    # Added for convenience - implies that perhaps the page.dir method
    # is wonky or has content overwritten at some point, but no time to investigate
    # right now
    def base_relative_dir
      @dir.gsub(/^\//,"")
    end
  end

  class Pagination < Generator

    # Patched to send "page" rather than "page.name" to the enabler query
    def generate(site)
      site.pages.dup.each do |page|
        paginate(site, page) if Pager.pagination_enabled?(site.config, page) # PATCHED HERE
      end
    end

    # Patched to write pagination output directories into the paginate_base OR root
    def paginate(site, page)
      all_posts = site.site_payload['site']['posts']
      pages = Pager.calculate_pages(all_posts, site.config['paginate'].to_i)
      (1..pages).each do |num_page|
        pager = Pager.new(site.config, num_page, all_posts, pages)
        if num_page > 1
          newpage = Page.new(site, site.source, page.base_relative_dir, page.name)
          newpage.pager = pager
          newpage.dir = File.join(page.base_relative_dir, "page#{num_page}") # PATCHED HERE
          site.pages << newpage
        else
          page.pager = pager
        end
      end
    end
  end

  class Pager

    # Patched to support default case (index only) and sites with paginate_index configured.
    def self.pagination_enabled?(config, page)
      return false if config['paginate'].nil?
      if config['paginate_index'].nil?
        # Default operation
        return page.name == 'index.html'
      else
        return page.base_relative_path == config['paginate_index']
      end
    end

  end

end