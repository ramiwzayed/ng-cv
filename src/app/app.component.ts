import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {SkillComponent} from "./components/skill/skill.component";

// import {WorkComponent} from "./components/work/work.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, SkillComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  allSkills: string[] = [
    "Adobe photoshop",
    "Microsoft Word",
    "Adobe Illustator",
    "Microsoft PowerPoint",
    "Adobe Indesign",
    "HTML-5/CSS-3"
  ]
}

// export class ComponentApp {
//   work: string[] = [
//     "2012-2014 Job Position Here",
//     "2014-2017 Job Position Here",
//     "2017-Present Job Position Here"
//   ]
// }
