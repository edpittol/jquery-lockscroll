/*! jQuery LockScroll - v1.0.0 - 2017-02-23
* https://github.com/edpittol/jquery-lockscroll
* Copyright (c) 2017 Eduardo Pittol; Licensed MIT */
!function(a,b,c,d){a.fn.lockScroll=function(b){return"undefined"==typeof b&&(b=!0),this.each(function(){var c=a(this),d="scroll.lockScroll",e=c.scrollTop();b?c.on(d,function(){c.scrollTop(e)}):c.off(d)}),this},a.lockScroll=function(c){a(b).lockScroll(c)}}(jQuery,window,document);