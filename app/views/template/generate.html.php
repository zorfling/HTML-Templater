<textarea rows=25>
<!doctype html>
<html>
	<head>
		<title>Template</title>

		<link rel="stylesheet" type="text/css" href="/css/reset.css" />
		<link rel="stylesheet" type="text/css" href="/css/base.css" />
		<link rel="stylesheet" type="text/css" href="/css/screen.css" />
		<link rel="stylesheet" type="text/css" href="/css/grid/960_<?= $grid; ?>_col.css" />

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
		<script type="text/javascript" src="/js/site.js"></script>

	</head>
	<body>
		<div class="container-<?= $grid ?>">

			<div id="header" class="grid-<?= $grid; ?>">
			</div><!-- /#header -->

			<div id="primary" class="grid-<?= $primaryGrid ?><?= ($leftGrid > 0)?" push-$leftGrid":'';?> alpha">

			</div><!-- /#primary -->
<?php if ($leftGrid > 0 || $rightGrid > 0) { ?>

			<div id="secondary" class="grid-<?= (($leftGrid > 0)?$leftGrid.' pull-'.$primaryGrid.(($rightGrid == 0)?' omega':''):$rightGrid); ?>">

			</div><!-- /#secondary -->
<?php } ?>
<?php if ($leftGrid > 0 && $rightGrid > 0) { ?>

			<div id="tertiary" class="grid-<?= $rightGrid ?> omega">

			</div><!-- /#tertiary -->
<?php } ?>

			<div id="footer" class="grid-<?= $grid; ?>">
			</div><!-- /#footer -->

		</div><!-- /#container -->
	</body>
</html>
</textarea>