<?php
use GObject\ParamSpec as GParamSpec;

if (extension_loaded("gobject")) {

	$php_version = 'PHP Version: '.phpversion();

	GIRepository\load_ns('ValaObject');

	ValaObject\global_method($php_version);

	ValaObject\ValaClass\static_class_method($php_version);

	$ValaClass = new ValaObject\ValaClass;

	$ValaClass->class_method($php_version);

} else {
	print ":-(\n";
}

?>