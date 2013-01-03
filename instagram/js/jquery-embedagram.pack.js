/*
 * embedagram - embed your instagram photos
 *   http://embedagram.com/plugin
 *
 * Copyright (c) 2011 Matthew Hokanson (http://h0ke.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function($){$.fn.extend({embedagram:function(options){var defaults={instagram_id:-999,thumb_width:100,wrap_tag:'li',limit:20,success:function(){return true},};var options=$.extend(defaults,options);return this.each(function(){var o=options;var obj=$(this);var jsonp_url="http://embedagram.com/e/plugin/"+o.instagram_id+"/?callback=?";jsonp_url+="&thumb_width="+o.thumb_width+"&wrap_tag="+o.wrap_tag;jsonp_url+="&limit="+o.limit;$.getJSON(jsonp_url,function(data){obj.html(data.html);o.success.apply(obj)});return obj})}})})(jQuery);
