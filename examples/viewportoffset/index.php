<?PHP

include "../index.php";

$shell['title3'] = "viewportOffset";

$shell['h2'] = 'Is an element "above the fold?"';

// ========================================================================== //
// SCRIPT
// ========================================================================== //

ob_start();
?>
$(function(){
  
  // Test "below-the-fold-ness" on window scroll.
  $(window).scroll(function(){
    
    var elem = $('#sentry');
    
    if ( elem.viewportOffset().top > $(window).height() ) {
      // elem is below the fold.
      $('#status span').css( 'color', '#f00' ).text( 'below' );
    } else {
      // elem is above the fold.
      $('#status span').css( 'color', '#0a0' ).text( 'above' );
    }
  });
  
});
<?
$shell['script'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// HTML HEAD ADDITIONAL
// ========================================================================== //

ob_start();
?>
<script type="text/javascript" src="../../jquery.ba-viewportoffset.js"></script>
<script type="text/javascript" language="javascript">

<?= $shell['script']; ?>

$(function(){
  
  // Syntax highlighter.
  SyntaxHighlighter.highlight();
  
});

</script>
<style type="text/css" title="text/css">

/*
bg: #FDEBDC
bg1: #FFD6AF
bg2: #FFAB59
orange: #FF7F00
brown: #913D00
lt. brown: #C4884F
*/

#page {
  width: 700px;
}

#spacer {
  color: #ccc;
}

#status {
  font-weight: 700;
  padding: 2em 0;
}

#sentry {
  padding: 0.5em;
  border: 1px solid #0a0;
  background: #afa;
}

</style>
<?
$shell['html_head'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// HTML BODY
// ========================================================================== //

ob_start();
?>
<?= $shell['donate'] ?>

<p>
  <a href="http://benalman.com/projects/jquery-misc-plugins/#viewportoffset">jQuery viewportOffset</a> is like the built-in jQuery <code>.offset()</code> method, but calculates left and top from the element’s position relative to the viewport, not the document.
</p>
<p>
  Scroll down to see the demo in action.
</p>

<h3>The code</h3>

<div class="clear"></div>

<pre class="brush:js">
<?= htmlspecialchars( $shell['script'] ); ?>
</pre>

<h3>The example</h3>

<div id="spacer">
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
  <p>This space intentionally left blank. Scroll down!</p>
</div>

<div id="status">Sentry status: sentry <span></span> the fold</div>

<div id="sentry">sentry</div>​


<?
$shell['html_body'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// DRAW SHELL
// ========================================================================== //

draw_shell();

?>
