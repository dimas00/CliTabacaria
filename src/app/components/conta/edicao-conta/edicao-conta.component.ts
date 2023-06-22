import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AlertService } from 'src/app/services/alert.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edicao-conta',
  templateUrl: './edicao-conta.component.html',
  styleUrls: ['./edicao-conta.component.css']
})
export class EdicaoContaComponent implements OnInit {

  usuario!: Usuario;

  constructor(private route: ActivatedRoute, private router: Router, private alertService: AlertService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    const id_usuario = Number(this.route.snapshot.paramMap.get("id_usuario"))
    
    this.usuarioService.getUsuario(id_usuario).subscribe((item) =>{
    this.usuario = item;

  })
  }

}
