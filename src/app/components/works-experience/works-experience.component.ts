import {Component, Input} from '@angular/core';
import {WorkType} from "../../types/work.type";

@Component({
  selector: 'app-works-experience',
  standalone: true,
  imports: [],
  templateUrl: './works-experience.component.html',
  styleUrl: './works-experience.component.css'
})
export class WorksExperienceComponent {
  @Input({required: true}) workExperience!: WorkType;

}

