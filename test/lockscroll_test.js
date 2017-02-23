/* globals $, QUnit */
$( function() {
  QUnit.module( 'jQuery#lockScroll', {
    /**
     * Set fixtures element and configure the window to test the plugin without
     * association with an element
     */
    beforeEach: function() {
      this.elems = $( '#qunit-fixture' ).children();
      this.elem = $( '#qunit-fixture div:eq(0)' ).css( {
        'width' : 100,
        'height' : 100,
        'overflow' : 'auto'
      } );
      this.text = this.elem.text();

      $( window, this.elem ).scrollTop( 0 );
      $( document.body ).height( 9999 );
    },

    /**
     * Set window default state after the tests
     */
    afterEach: function() {
      $( document.body ).height( 'auto' );
    }
  });

  /**
   * Test chain jQuery feature
   *
   * @param {string} The test name.
   * @param {Assert} QUnit assert object.
   */
  QUnit.test( 'is chainable', function( assert ) {
    assert.expect( 1 );
    assert.strictEqual( this.elems.lockScroll(), this.elems, 'should be chainable' );
  });

  /**
   * Test chain jQuery elements return
   *
   * @param {string} The test name.
   * @param {Assert} QUnit assert object.
   */
  QUnit.test( 'is awesome', function( assert ) {
    assert.expect( 1 );
    assert.strictEqual( this.elems.lockScroll().text(), this.text + this.text + this.text, 'should be awesome' );
  });

  /**
   * Test the plugin is locking the scroll
   *
   * @param {string} The test name.
   * @param {Assert} QUnit assert object.
   */
  QUnit.test( 'is locked', function( assert ) {
    var done = assert.async();
    assert.expect( 1 );

    this.elem
      .lockScroll( true )
      .one( 'scroll.test', function() {
        assert.strictEqual( $( this ).scrollTop(), 0, 'should be locked' );
        done();
      } )
      .scrollTop( 100 );
  });

  /**
   * Test the plugin is unlocking the scroll
   *
   * @param {string} The test name.
   * @param {Assert} QUnit assert object.
   */
  QUnit.test( 'is unlocked', function( assert ) {
    var done = assert.async();
    assert.expect( 1 );

    this.elem
      .lockScroll( true )
      .lockScroll( false )
      .one( 'scroll', function() {
        assert.strictEqual( $( this ).scrollTop(), 100, 'should be unlocked' );
        done();
      })
      .scrollTop( 100 );
  });

  /**
   * Test the plugin is locking the window when is not associate an element
   *
   * @param {string} The test name.
   * @param {Assert} QUnit assert object.
   */
  QUnit.test( 'window is locked', function( assert ) {
    var done = assert.async();
    assert.expect( 1 );

    $.lockScroll( true );

    $(window)
      .one( 'scroll.test', function() {
        assert.strictEqual( $( this ).scrollTop(), 0, 'should be locked' );
        done();
      })
      .scrollTop( 100 );
  });

  /**
   * Test the plugin is unlocking the window when is not associate an element
   *
   * @param {string} The test name.
   * @param {Assert} QUnit assert object.
   */
  QUnit.test( 'window is unlocked', function( assert ) {
    var done = assert.async();
    assert.expect( 1 );

    $.lockScroll( true );
    $.lockScroll( false );

    $(window)
      .one( 'scroll', function() {
        assert.strictEqual( $( this ).scrollTop(), 100, 'should be unlocked' );
        done();
      } )
      .scrollTop( 100 );
  } );
} );
