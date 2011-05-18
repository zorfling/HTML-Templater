<?= $this->form->create(''); ?>
<?= $this->form->label('Grid?', 'Grid', array('class'=>'form-label')); ?>
<?= $this->form->select('grid', array('12', '16', '24')) ?>




<form action="/template/generate/" method="post">
	<div class="form-row">
		<div class="form-label">
			<label for="grid">Which Grid?</label>
		</div>
		<div class="form-field">
			<select id="grid" name="grid">
				<option value="12">12</option>
				<option value="16">16</option>
				<option value="24">24</option>
			</select>
		</div>
	</div>

	<div class="form-row">
		<div class="form-label">
			<label for="leftGrid">Left Column</label>
		</div>
		<div class="form-field">
			<select id="leftGrid" name="leftGrid">
				<option value="0">None</option>
				<?php for($i = 1; $i <= 24; $i++) { ?>
				<option value="<?= $i; ?>"><?= $i; ?></option>
				<?php } ?>
			</select>
		</div>
	</div>

	<div class="form-row">
		<div class="form-label">
			<label for="primaryGrid">Primary</label>
		</div>
		<div class="form-field">
			<select id="primaryGrid" name="primaryGrid">
				<option value="0">None</option>
				<?php for($i = 1; $i <= 24; $i++) { ?>
				<option value="<?= $i; ?>"><?= $i; ?></option>
				<?php } ?>
			</select>
		</div>
	</div>

	<div class="form-row">
		<div class="form-label">
			<label for="rightGrid">Right Column</label>
		</div>
		<div class="form-field">
			<select id="rightGrid" name="rightGrid">
				<option value="0">None</option>
				<?php for($i = 1; $i <= 24; $i++) { ?>
				<option value="<?= $i; ?>"><?= $i; ?></option>
				<?php } ?>
			</select>
		</div>
	</div>

	<div class="form-row">
		<div class="form-label">

		</div>
		<div class="form-field">
			<input type="submit" />
		</div>
	</div>


</form>