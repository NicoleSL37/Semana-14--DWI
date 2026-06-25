import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}
  get f() {
    return this.registroForm.controls;
  }

  validarRegistro() {
    this.enviado = true;
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }
    console.log('Registro válido', this.registroForm.value);
  }

  continuarADetalle() {
    this.enviado = true;
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/detalle'], {
      queryParams: this.registroForm.value,
    });
  }
}
