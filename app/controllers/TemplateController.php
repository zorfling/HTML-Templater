<?php

namespace app\controllers;

class TemplateController extends \lithium\action\Controller {

	public function index() {
		$this->render();
	}

	public function generate() {
		$grid 			= $_POST['grid'];
		$leftGrid 		= $_POST['leftGrid'];
		$primaryGrid 	= $_POST['primaryGrid'];
		$rightGrid 		= $_POST['rightGrid'];

		return compact('grid', 'leftGrid', 'primaryGrid', 'rightGrid');
	}
}

?>