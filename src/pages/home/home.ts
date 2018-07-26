import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, reorderArray } from 'ionic-angular';
import { AppService } from '../../providers/app/app';
import {ArquivadasPage} from "../arquivadas/arquivadas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tarefashome = [];
  public editaOrdem = false;

  constructor(public navCtrl: NavController,
              private alertController: AlertController,
              private LoadController: LoadingController,
              private appService: AppService) {
    this.tarefashome = this.appService.getTarefas();
  }

  reordenaTarefa($event){
    reorderArray(this.tarefashome,$event);
  }
  alertaAdicionarTarefa(){
    let novaTarefa = this.alertController.create({
      title: "Nova Tarefa",
      message: "Entre com a nova tarefa",
      inputs: [
        {
          type:"text",
          name: "inputNovaTarefa"
        }
      ],
      buttons: [
        {
          text:"Cancelar"
        },
        {
          text:"Adicionar",
          handler: (inputData)=>{
            let dados;
            dados = inputData.inputNovaTarefa;
            this.appService.addTarefas(dados);
          }
        }
      ]
    });
    novaTarefa.present();
  }

  alertaEditarTarefa(i) {
    let editaTarefas = this.alertController.create({
      title: 'Editar Tarefa',
      message: 'Edite sua tarefa',
      inputs: [
        {
          type: "text",
          name: "inputEditarTarefa",
          value: this.tarefashome[i]
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: (inputData)=> {
            this.appService.editarTarefas(i, inputData.inputEditarTarefa);
            this.appService.doToast("Tarefa editada");
          }
        }
      ]
    });
    editaTarefas.present();
  }

goToArquivadas() {
    this.navCtrl.push(ArquivadasPage);
}

  alertaArquivarTarefa(tarefa,index) {

    let arquivaTarefas = this.alertController.create({
      title: 'Arquivamento',
      message: 'Gostaria de arquivar sua tarefa?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Arquivar',
          handler: (inputData)=> {
            this.appService.arquivaTarefa(tarefa,index);
            this.appService.doToast("Tarefa arquivada");
          }
        }
      ]
    });
    arquivaTarefas.present();
  }
}
