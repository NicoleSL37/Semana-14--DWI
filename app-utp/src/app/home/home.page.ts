import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  enviado = false;

  registroForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required, Validators.email]],
    tipoApp: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
  get f() { return this.registroForm.controls; }

  validarRegistro() {
    this.enviado = true; // Activa la visualización de errores

    if (this.registroForm.invalid) {
      console.log('Formulario inválido');
      return; // Detiene la ejecución si hay errores
    }

    // Si todo está bien:
    console.log('Formulario enviado:', this.registroForm.value);
    alert('Registro exitoso: ' + this.registroForm.value.nombre);
    
    // Aquí después añadirás la navegación a la página de detalle
  }

}
