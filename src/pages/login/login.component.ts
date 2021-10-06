import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 


    constructor(private loadingCtrl: LoadingController){}

    ngOnInit(){
        this.presentLoading();
    }

    async presentLoading() {
        const loading = await this.loadingCtrl.create({
          message: 'Espere un momento...',
          duration: 2000
        });
        await loading.present();

      }


}