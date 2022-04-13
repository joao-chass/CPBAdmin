import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  fonte;
  cor;
  textto;
  @Output() public envioData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

   chooseColor(){
    document.execCommand('foreColor', false, this.cor);
  }

   changeFont(){
    document.execCommand('fontName', false, this.fonte);
  }


   checkDiv(){
    var editorText = document.getElementById("editor1").innerHTML;
    if(editorText === ''){
      document.getElementById("editor1").style.border = '5px solid red';
    }
  }

   removeBorder(){
    document.getElementById("editor1").style.border = '1px solid transparent';
  }

  enviar() {

   let x = document.getElementById("editor1").innerHTML;
   if(x) {
     this.envioData.emit(x);
   }

  }
}
