<?PHP

$shell['title1'] = "jQuery Misc Plugins";
$shell['link1']  = "http://benalman.com/projects/jquery-misc-plugins/";

ob_start();
?>
  <a href="http://benalman.com/projects/jquery-misc-plugins/">Project Home</a>,
  <a href="http://github.com/cowboy/jquery-misc/">Source</a>
<?
$shell['h3'] = ob_get_contents();
ob_end_clean();

$shell['jquery'] = 'jquery-1.4.2.js';
//$shell['jquery'] = 'jquery-1.3.2.js';

$shell['shBrush'] = array( 'JScript' );

?>
