/*
 *  jQuery Github Repos v0.2.2
 *  A jQuery plugin to display your Github Repositories.
 *  http://git.io/3A1RMg
 *
 *  Zeno Rocha
 *  MIT License
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window is passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = 'githubRepos',
        document = window.document,
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.$container = $(element);
        this.repo = this.$container.attr("data-repo");
        this.cached;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {

      var self = this;
      var cached;

      // Attempt to get cached repo data
      if (window.sessionStorage) {
        cached = sessionStorage.getItem('gh-repos:' + this.repo);
      }

      if (cached != null) {
        self.applyTemplate(JSON.parse(cached));
      }
      else {

        $.ajax({
          url: 'https://api.github.com/repos/' + this.repo,
          dataType: 'jsonp',
          success: function(results){

            // Handle API failures
            if (results.meta.status >= 400 && results.data.message){
                console.warn(results.data.message);
                return;
            }
            else {

              self.applyTemplate(results.data);

              // Cache data
              if (window.sessionStorage) {
                sessionStorage.setItem('gh-repos:' + self.repo, JSON.stringify(results.data));
              }

            }
          }
        });

      }

    };

    Plugin.prototype.applyTemplate = function (repo) {

      var self = this;
      var date = new Date(repo.pushed_at);
      var pushed_at = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

      var $widget = $(' \
        <div class="github-box">  \
            <div class="github-box-header"> \
                <h3> \
                    <a href="' + repo.url.replace('api.','').replace('repos/','') + '">' + repo.name + '</a> \
                </h3> \
                <div class="github-stats"> \
                    <a class="repo-watchers" href="' + repo.url.replace('api.','').replace('repos/','') + '/watchers">' + repo.watchers + '</a> \
                    <a class="repo-forks" href="' + repo.url.replace('api.','').replace('repos/','') + '/forks">' + repo.forks + '</a> \
                </div> \
            </div> \
            <div class="github-box-content"> \
                <p>' + repo.description + ' &mdash; <a href="' + repo.url.replace('api.','').replace('repos/','') + '#readme">Read More</a></p> \
            </div> \
            <div class="github-box-download"> \
                <p class="repo-update">Latest commit to <strong>master</strong> on ' + pushed_at + '</p> \
                <a class="repo-download" href="' + repo.url.replace('api.','').replace('repos/','') + '/zipball/master">Download as zip</a> \
            </div> \
        </div> \
      ');

      self.appendTemplate($widget);

    };

    Plugin.prototype.appendTemplate = function ($widget) {
      var self = this;
      $widget.appendTo(self.$container);
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

}(jQuery, window));