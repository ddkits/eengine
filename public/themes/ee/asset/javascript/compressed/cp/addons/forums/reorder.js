/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2016, EllisLab, Inc.
 * @license		https://expressionengine.com/license
 * @link		https://ellislab.com
 * @since		Version 3.0
 * @filesource
 */
!function(e){"use strict";e(document).ready(function(){e("tbody","table").sortable({connectWith:"tbody",axis:"y",handle:"td.reorder-col",cancel:"td.sort-cancel",items:"tr",sort:EE.sortable_sort_helper,forcePlaceholderSize:!0,helper:function(r,t){var o=t.children(),a=t.clone();return a.find("input[type=radio]:enabled").each(function(){e(this).attr("name",20*Math.random())}),a.children().each(function(r){e(this).width(o.eq(r).width())}),a},stop:function(r){e.ajax({url:EE.forums.reorder_url,data:{order:e('input[name="order[]"]').serialize()},type:"POST",dataType:"json",error:function(r,t,o){0==e("body > .banner").size()&&e("body").prepend(EE.alert.reorder_ajax_fail)}})}}),e(".tbl-ctrls").sortable({axis:"y",handle:"th.reorder-col",items:".tbl-wrap",sort:EE.sortable_sort_helper,forcePlaceholderSize:!0,update:function(r,t){e.ajax({url:EE.forums.reorder_url,data:{order:e('input[name="order[]"]').serialize()},type:"POST",dataType:"json",error:function(r,t,o){0==e("body > .banner").size()&&e("body").prepend(EE.alert.reorder_ajax_fail)}})}})})}(jQuery);