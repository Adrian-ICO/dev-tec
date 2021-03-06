<div class="content">
    <div class="container-fluid">
        <div class="row align-items-center" style="height: 65vh">
            <div class="col text-center">
                <h1>Registro</h1>
                <?php echo validation_errors(); ?>
                <?php
                echo form_open('registro/create', array('method' => 'POST'));
                echo "<br>";
                echo form_label('Nombre de usuario');
                echo form_input('username');
                echo "<br>";
                echo form_label('Correo electronico');
                echo form_input(array('type' => 'email', 'name' => 'email'));
                echo "<br>";
                echo form_label('Contraseña');
                echo form_password('password');
                echo "<br>";
                echo form_label('Confirmacion de contraseña');
                echo form_password('password_confirm');
                echo "<br>";
                echo form_submit('submit', 'Enviar Datos');
                echo form_close();
                ?>
                <?= isset($msg) ? $msg : '' ?>
            </div>
        </div>
    </div>
</div>