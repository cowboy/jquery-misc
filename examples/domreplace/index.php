<?PHP

include "../index.php";

$shell['title3'] = "domReplace";

$shell['h2'] = 'Replace text recursively through the DOM';

$shell['link1']  = "http://benalman.com/projects/jquery-domreplace-plugin/";

ob_start();
?>
  <a href="http://benalman.com/projects/jquery-domreplace-plugin/">Project Home</a>,
  <a href="http://benalman.com/code/projects/jquery-misc/docs/files/jquery-ba-domreplace-js.html">Documentation</a>,
  <a href="http://github.com/cowboy/jquery-misc">Source</a>
<?
$shell['h3'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// SCRIPT
// ========================================================================== //

ob_start();
?>
$(function(){
  
  $('.link1').click(function(){
    // Replace all 'text' words with 'TEXT'
    
    $('#test').domReplace( /\btext\b/gi, 'TEXT' );
  });
  
  $('.link2').click(function(){
    // Replace all 'this' words with 'THIS', but only up to 2 levels deep.
    
    function filter( parent, child, depth ) {
      return depth < 2;
    };
    
    $('#test').domReplace( /\bthis\b/gi, 'THIS', filter );
  });
  
  $('.link3').click(function(){
    // Wrap all 'text' words with <span style="color:red"/>
    
    function replace_func(a){
      return '<span style="color:red">' + a + '<\/span>';
    };
    
    $('#test').domReplace( /\btext\b/gi, replace_func, true );
  });
  
  $('.link4').click(function(){
    // Wrap all non-whitespace-only text nodes that have no siblings with '[]'
    
    function filter( parent, child, depth ) {
      return parent.childNodes.length === 1;
    };
    
    $('#test').domReplace( /^(.*\S+.*)$/gi, '[$1]', filter );
  });
  
  $('.link5').click(function(){
    // Wrap all <b> tags' child text nodes with '**'
    
    function filter( parent, child, depth ) {
      return /^b$/i.test( parent.tagName );
    };
    
    $('#test').domReplace( /^(.*)$/gi, '*$1*', filter );
  });
  
  // Keep all the nav links from navigating.
  $('#nav a').click(function(e){
    e.preventDefault();
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
<script type="text/javascript" src="../../jquery.ba-domreplace.js"></script>
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

</style>
<?
$shell['html_head'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// HTML BODY
// ========================================================================== //

ob_start();
?>
<?= $shell['donate']; ?>

<p>
  <a href="http://benalman.com/projects/jquery-domreplace-plugin/">jQuery domReplace</a> will replace text recursively through the DOM, starting at a specific element. In the case where text is converted to or wrapped in HTML tags, the resultant text can be optionally rendered as full HTML. Only text content will be modified, leaving all tags and attributes untouched.
</p>
<p>
  Also, not only is domReplace fully jQuery chainable, but under the hood, it's just a standard JavaScript method
  that doesn't require jQuery in any way. <strong>jQuery is totally optional!</strong> So just keep that in mind, in case you
  want to use domReplace in a non-jQuery environment, and look at <a href="http://benalman.com/code/projects/jquery-misc/docs/files/jquery-ba-domreplace-js.html#jQuery_is_actually_optional">the documentation</a> if you have any questions.
</p>

<h3>Click these links:</h3>

<ol id="nav">
  <li><a href="#" class="link1">Replace all 'text' words with 'TEXT'</a></li>
  <li><a href="#" class="link2">Replace all 'this' words with 'THIS', but only up to 2 levels deep.</a></li>
  <li><a href="#" class="link3">Wrap all 'text' words with &lt;span style="color:red"/&gt;</a></li>
  <li><a href="#" class="link4">Wrap all non-whitespace-only text nodes that have no siblings with '[]'</a></li>
  <li><a href="#" class="link5">Wrap all &lt;b&gt; tags' child text nodes with '**'</a></li>
</ol>

<h3>To modify this HTML:</h3>

<div id="test">
  <!-- this is a comment -->
  <p>This is some text that contains <a href="#">a link with <i>italic text</i> and <b>bold text</b></a> as well as a <span class="test">span with a class of "test"</span>.</p>
  <ol>
    <li>this listitem is just text</li>
    <li>but this one has <a href="#">a link with <i>italic text</i> and <b>bold text</b></a> and some more text</li>
    <li>
      and this listitem has some text and an unordered list
      <ul>
        <li>this listitem is just text</li>
        <li>but this one has <a href="#">a link with <i>italic text</i> and <b>bold text</b></a> and some more text</li>
      </ul>
      followed by some more text
    </li>
  </ol>
</div>



<h3>The code</h3>

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
