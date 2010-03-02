<?PHP

include "../index.php";

$shell['title3'] = "loadAdScript";

$shell['h2'] = 'Keep ad scripts that use document.write from breaking your stuff!';

// ========================================================================== //
// SCRIPT
// ========================================================================== //

ob_start();
?>
$(function(){
  
  // a.js simply calls document.write a few times. It's not great, but it's not
  // the end of the world.
  $('#a').loadAdScript( 'a.js', function(){
    $(this).show(); // When the ad script has loaded, show the ad.
  });
  
  // b.js calls document.write and loads another external script that also calls
  // document.write. It's starting to get ugly, but that's what third party ad
  // networks are all about!
  $('#b').loadAdScript( 'b.js', function(){
    $(this).show(); // When the ad script has loaded, show the ad.
  });
  
  // c.js calls document.write and loads multiple other external scripts that
  // also call document.write and load other external scripts. Look out, because
  // there's a "web 1.0 document write" party in your page, and everyone's invited!
  $('#c').loadAdScript( 'c.js', function(){
    $(this).show(); // When the ad script has loaded, show the ad.
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
<script type="text/javascript" src="../../shared/jquery.ba-jqmq.js"></script>
<script type="text/javascript" src="../../jquery.ba-loadadscript.js"></script>
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

.ad {
  display: none;
  width: 468px;
  height: 60px;
  border: 1px solid #000;
  margin-bottom: 1em;
}

.ad a {
  color: #aaa;
}

.ad a:hover {
  color: #FF7F00;
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
  With <a href="http://benalman.com/projects/jquery-misc-plugins/#loadadscript">jQuery loadAdScript</a> you can load third party ad network scripts that use <code>document.write</code> into specific containers. The only downside is that the ads will load serially.. but that's necessary to keep them from stepping on each others' toes. And the upside is that your site isn't completely borked!
</p>
<p>
  Requires the <a href="http://benalman.com/projects/jquery-message-queuing-plugin/">jQuery Message Queueing</a> plugin.
</p>

<h3>Sample ads</h3>

<p>
  In this example, the ads are hidden by default, and are only shown when their ad script has finished executing.
</p>

<div id="a" class="ad"></div>
<div id="b" class="ad"></div>
<div id="c" class="ad"></div>

<h3>The code</h3>

<div class="clear"></div>

<pre class="brush:js">
<?= htmlspecialchars( $shell['script'] ); ?>
</pre>

<?
$shell['html_body'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// DRAW SHELL
// ========================================================================== //

draw_shell();

?>
