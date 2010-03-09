<?PHP

include "../index.php";

$shell['title3'] = "selectColorize";

$shell['h2'] = 'Basic cross-browser colored select boxes';

// ========================================================================== //
// SCRIPT
// ========================================================================== //

ob_start();
?>
$(function(){
  
  $('a.enable').click(function(){
    // Calling .change() might be necessary to visually update selects in
    // all browsers, if multiple selects are being initialized at the same
    // time.
    $('select').selectColorize().change(); // Initialize.
  });

  $('a.destroy').click(function(){
    $('select').selectColorize( false ); // Destroy.
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
<script type="text/javascript" src="../../jquery.ba-selectcolorize.js"></script>
<script type="text/javascript" language="javascript">

<?= $shell['script']; ?>

$(function(){
  
  // Prevent default click action for example links.
  $('a.example').click(function(e){
    e.preventDefault();
  });
  
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

/* options inherit from the select (but not in webkit) */

select {
  margin-top: 0.3em;
}

select.first,
select.fourth {
    color: #777;
}

select.second {
    background: #777;
}

select.third {
    color: orange;
    background: #ffc;
}
​

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
  By default, select elements in Internet Explorer and Opera show the selected option's color and background color, while Firefox and WebKit browsers do not. <a href="http://benalman.com/projects/jquery-misc-plugins/#selectcolorize">jQuery selectColorize</a> normalizes this behavior cross-browser for basic select box color styling, without having to resort to more "fancy" select box replacements.
</p>
<p>
  <em>Note that inline option color/background styles are necessary in Firefox due to an annoying getComputedStyle bug. Also, due to rendering issues in Firefox and Opera, it's best to set a background color on the select element if any of its options have background colors, otherwise it may have initial rendering issues.</em>
</p>

<p>
  <a href="#" class="enable example">Enable selectColorize</a>, <a href="#" class="destroy example">Destroy selectColorize</a>
</p>

<select class="first">
    <option>------</option>
    <option style="color:#f00;background:#fcc;" selected="selected">Sample red option, fg+bg</option>
    <option style="color:#0a0;background:#cfc;">Sample green option, fg+bg</option>
    <option style="color:#00f;background:#ccf;">Sample blue option, fg+bg</option>
    <option style="color:#f00;">Sample red option, fg</option>
    <option style="color:#0a0;">Sample green option, fg</option>
    <option style="color:#00f;">Sample blue option, fg</option>
    <option style="background:#fcc;">Sample red option, bg</option>
    <option style="background:#cfc;">Sample green option, bg</option>
    <option style="background:#ccf;">Sample blue option, bg</option>
</select>

(select fg color set via CSS, options have fg+bg colors)

<br>

<select class="second">
    <option>------</option>
    <option style="color:#f00;background:#fcc;">Sample red option, fg+bg</option>
    <option style="color:#0a0;background:#cfc;" selected="selected">Sample green option, fg+bg</option>
    <option style="color:#00f;background:#ccf;">Sample blue option, fg+bg</option>
    <option style="color:#f00;">Sample red option, fg</option>
    <option style="color:#0a0;">Sample green option, fg</option>
    <option style="color:#00f;">Sample blue option, fg</option>
    <option style="background:#fcc;">Sample red option, bg</option>
    <option style="background:#cfc;">Sample green option, bg</option>
    <option style="background:#ccf;">Sample blue option, bg</option>
</select>

(select bg color set via CSS, options have fg+bg colors)

<br>

<select class="third">
    <option>------</option>
    <option style="color:#f00;background:#fcc;">Sample red option, fg+bg</option>
    <option style="color:#0a0;background:#cfc;">Sample green option, fg+bg</option>
    <option style="color:#00f;background:#ccf;" selected="selected">Sample blue option, fg+bg</option>
    <option style="color:#f00;">Sample red option, fg</option>
    <option style="color:#0a0;">Sample green option, fg</option>
    <option style="color:#00f;">Sample blue option, fg</option>
    <option style="background:#fcc;">Sample red option, bg</option>
    <option style="background:#cfc;">Sample green option, bg</option>
    <option style="background:#ccf;">Sample blue option, bg</option>
</select>

(select fg and bg colors set via CSS, options have fg+bg colors)

<br>

<select class="fourth">
    <option>------</option>
    <option style="color:#f00;">Sample red option, fg</option>
    <option style="color:#0a0;" selected="selected">Sample green option, fg</option>
    <option style="color:#00f;">Sample blue option, fg</option>
</select>

(select fg color set via CSS, options only have fg colors)



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
