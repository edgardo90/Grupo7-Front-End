import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CollectionService } from '../services/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login';

@Component({
  selector: 'app-agregar-coleccion',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-coleccion.html',
  styleUrl: './agregar-coleccion.css'
})
export class AgregarColeccion {
  loading: boolean = false;


  addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),

  });

  constructor(
    private collectionService: CollectionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) { }




  onSubmit(): void {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return alert("Error: por favor completá todos los campos obligatorios");
    }
    if (this.addForm.valid) {
      this.loading = true
      const jsonData = {
        name: this.addForm.value.name as string,
        type: this.addForm.value.type as string,
      };
      //  return alert("Colección creada correctamente");
      this.collectionService.createCollection(
        jsonData,
        this.loginService.getUserId() as string
      ).subscribe(({
        next: (response) => {
          console.log("pasa por el next")
          console.log(response);
        },
        error: (err) => {
          console.log("pasa por el error")
          return alert(err.error.message)
        },
        complete: () => {
          console.log("se completo con exito");
          this.loading = false;
          alert("Se creó tu colección con exito! !");
          setTimeout(() => {
            this.router.navigate(['/colecciones']);
          }, 400)
        },
      }))

    }
  }



}


