import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-mirror',
  templateUrl: './pipe-mirror.component.html',
  styleUrls: ['./pipe-mirror.component.css'],
})
export class PipeMirrorComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
