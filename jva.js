var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {

             
    // nice scroll 
    $("html").niceScroll();

    $('#notice').hide();

    $(".link").click(function() {
        $('#notice').show();
        var counter = 10;
        var id = setInterval(function() {
        counter--;
        if(counter > 0) {
            var msg = 'جارى تجهيز الرابط خلال „ ' + counter + ' ثوانى';
            $('#notice').text(msg);
        } else {
            $('#notice').hide();
            $('#download').show();
            clearInterval(id);
        }
        }, 1000);
    });


});



}
/*
     FILE ARCHIVED ON 22:41:10 Jun 03, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:50:18 Mar 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.545
  exclusion.robots: 0.035
  exclusion.robots.policy: 0.025
  esindex: 0.01
  cdx.remote: 7.438
  LoadShardBlock: 110.906 (3)
  PetaboxLoader3.datanode: 104.994 (4)
  load_resource: 171.917
  PetaboxLoader3.resolve: 114.935
*/
