import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }
  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
}
  ngOnInit() {
  }

}
