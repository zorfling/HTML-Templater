<?php
$gridList = array();
for($i = 1; $i <= 24; $i++) {
	$gridList[$i] = $i;
}
?>


<?= $this->form->create(null, array('url' => '/template/generate')); ?>
	<div class="form-row">
		<div class="form-label">
			<?= $this->form->label('grid', 'Grid'); ?>
		</div>
		<div class="form-field">
			<?= $this->form->select('grid', array('12' => '12', '16' => '16', '24' => '24')) ?>
		</div>
	</div>

	<div class="form-row">
		<div class="form-label">
			<?= $this->form->label('leftGrid', 'Left Column'); ?>
		</div>
		<div class="form-field">
			<?= $this->form->select('leftGrid', array('0' => 'None') + $gridList); ?>
		</div>
	</div>

	<div class="form-row">
		<div class="form-label">
			<?= $this->form->label('primaryGrid', 'Primary'); ?>
		</div>
		<div class="form-field">
			<?= $this->form->select('primaryGrid', array('0' => 'None') + $gridList); ?>
		</div>
	</div>

	<div class="form-row">
		<div class="form-label">
			<?= $this->form->label('rightGrid', 'Right Column'); ?>
		</div>
		<div class="form-field">
			<?= $this->form->select('rightGrid', array('0' => 'None') + $gridList); ?>
		</div>
	</div>

	<div class="form-row">
		<div class="form-label">

		</div>
		<div class="form-field">
			<?= $this->form->submit('Generate'); ?>
		</div>
	</div>


<?= $this->endForm(); ?>