import { Component } from '@angular/core';
import {NavController} from  'ionic-angular';
import { Camera, CameraOptions }from '@ionic-native/camera';


@Component({
  selector: 'itens',
  templateUrl: 'itens.html'
})
export class ItensPage {

	public foto:any;
  public base64Image:string;
  constructor(public navCtrl: NavController, private camera: Camera ){
  		this.conta= {id:'',desc:""};
  		this.list=[];	
   
  } 

  salvar(){	
    
      this.conta.id=(this.list.length+1);
      this.list.push({id:this.conta.id,  descricao:this.conta.desc}); 
       
  
}
  remove(){
    this.list.pop();
  }

  update(id){
    this.conta.id;
    this.list[{id:id,  descricao:this.conta.desc}]; 
    alert(this.list[{id:id,  descricao:this.conta.desc}]);

  }

  ngOnInit(){
    this.fotos=[];
  }

  pegaFoto(){
   const options: CameraOptions = {
  quality: 50,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 this.base64Image = 'data:image/jpeg;base64,' + imageData;
 
 }, (err) => {
 // Handle error
});
  }

}