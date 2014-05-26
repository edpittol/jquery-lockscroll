(function($) {

  module('jQuery#lockScroll', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
      this.elem = $('#qunit-fixture div:eq(0)').css({
          "width" : 100,
          "height" : 100,
          "overflow" : "auto"
        });
      this.text = this.elem.text();
    }
  });

  test('is chainable', function() {
    expect(1);
    strictEqual(this.elems.lockScroll(), this.elems, 'should be chainable');
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.lockScroll().text(), this.text + this.text + this.text, 'should be awesome');
  });

  asyncTest('is locked', function() {
    expect(1);

    // the plugin call scrollTop function first, the test is executed in the second pass
    var firstpass = true;

    this.elem
      .on("scroll", function() {
        if(firstpass) {
          firstpass = false;
        } else {
          strictEqual($(this).scrollTop(), 0, 'should be locked');
          start();
        }
      })
      .lockScroll(true)
      .scrollTop(100);
  });

  asyncTest('is unlocked', function() {
    expect(1);

    this.elem
      .on("scroll", function() {
        strictEqual($(this).scrollTop(), 100, 'should be unlocked');
        start();
      })
      // the call lockScroll(false) is always called after a lockScroll(true) call
      .lockScroll(true)
      .lockScroll(false)
      .scrollTop(100);
  });

}(jQuery));
