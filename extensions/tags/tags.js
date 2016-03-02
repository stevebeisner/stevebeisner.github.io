"use strict";

function dblog( label, obj) {
  console.log( "%s: %s", label, JSON.stringify(obj));
}

var tags = (function () {

  var exports = {};


  // Return list of posts that are tagged with any tag in tagsList
  function taggedAny(posts, tagsList) {
    //dblog('tagsList', tagsList);

    var any = [];
    for(var pg of posts) {
      //dbug('pg', pg);
      var pg_has_any = false;
      for(var tg of tagsList) {
        if( pg.tags.indexOf( tg) >= 0) {
          pg_has_any = true;
          break;
        }
      }
      if( pg_has_any) {
        any.push( pg);
      }
    }
    //var cmp = function (pg1, pg2) {
    //    # REVERSE date order
    //    if( pg1.page_id > pg2.page_id) return -1;
    //    if( pg1.page_id < pg2.page_id) return 1;
    //    return 0;
    //};
    //any = any.sort( cmp);
    return any;
  }
  exports.taggedAny = taggedAny


  // Return list of posts that are tagged with all tags in tagsList
  function taggedAll(posts, tagsList) {
    //dblog('tagsList', tagsList);

    var all = [];
    for(var pg of posts) {
      //dbug('pg', pg);
      var pg_has_all = true;
      for(var tg of tagsList) {
        if( pg.tags.indexOf( tg) == -1) {
          pg_has_all = false;
          break;
        }
      }
      if( pg_has_all) {
        all.push( pg);
      }
    }
    return all;
  }
  exports.taggedAll = taggedAll


  return exports;
})();

