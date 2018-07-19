import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tarefas = [];
  public editaOrdem = false;

  constructor(public navCtrl: NavController,
              private alertController: AlertController,
              private LoadController: LoadingController) {

  }

  reordenaTarefa($event){
    reorderArray(this.tarefas,$event);
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
            this.tarefas.push(dados);
          }
        }
      ]
    });
    novaTarefa.present();
  }

  alertaRemoverTarefa(tarefa){
    let removeTarefa = this.alertController.create({
      title: "Remover Tarefa",
      message: "Gostaria de remover a tarefa?",
      buttons: [
        {
          text:"Cancelar"
        },
        {
          text:"Apagar",
          handler: ()=>{
            let index = this.tarefas.indexOf(tarefa);
            if(index > -1) {
              this.tarefas.splice(index,1);
              this.doSpinning();
            }
          }
        }
      ]
    });
    removeTarefa.present();
  }

  doSpinning() {

    let loader = this.LoadController.create({
      content: "Aguarde...",
      duration:2000
    });

    loader.present();
  }

}
