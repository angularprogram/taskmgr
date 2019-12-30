import { Component, OnInit, Inject } from '@angular/core';
import { NewTaskComponent } from './../new-task/new-task.component';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss']
})
export class CopyTaskComponent implements OnInit {

  lists: any[];

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<NewTaskComponent>
  ) { }

  ngOnInit() {
    this.lists = this.data.lists;
  }

}
