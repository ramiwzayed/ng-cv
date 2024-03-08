import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {SkillComponent} from "./components/skill/skill.component";
import {WorksExperienceComponent} from "./components/works-experience/works-experience.component";
import {InformationComponent} from "./components/information/information.component";
import {WorkType} from "./types/work.type";
import {infoType} from "./types/information.type";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, SkillComponent, WorksExperienceComponent, InformationComponent],
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

  allWorks: WorkType[] = [
    {
      date: "2012-2014",
      title: "tile",
      companyName: "Company Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, placeat."
    },
    {
      date: "2014-2017",
      title: "tile",
      companyName: "Company Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, placeat."
    },
    {
      date: "2017-Present",
      title: "tile",
      companyName: "Company Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, placeat."
    }
  ]

  allInfo: infoType[] = [
    {
      major: "Name of your major",
      university: "Name Of your university",
      date: "2005 - 2009",

    },
    {
      major: "Name of your major",
      university: "Name Of your university",
      date: "2009 - 2011",

    }
  ]
  aboutMeText: string = "Lorem Ipsum dolor sit amet , consectetur adipiscing elit,sed do euusmod empor incididunt ut labore et dolore magna alique";
}

// phone: string,
//   email: string,
//   website: string,
//   address: string
// phone: "enter your phone number",
//   email: "email",
//   website: "website",
//   address: "address"
