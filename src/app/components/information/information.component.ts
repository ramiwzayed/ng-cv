import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {infoType} from "../../types/information.type";

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  @Input({required: true}) informationType!: infoType;
}
