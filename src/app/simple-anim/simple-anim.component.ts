import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-anim',
  templateUrl: './simple-anim.component.html',
  styleUrls: ['./simple-anim.component.scss']
})
export class SimpleAnimComponent {

  public isActive = false;
  public faCoffee = faCoffee;

  public clickMe(): void {
    this.isActive = !this.isActive;
  }

  public markdownCSSHover =
    `
    \`\`\`css
    .primary-button \{
      margin: 8px;
      height: 40px;
      width: 200px;
      border-radius: 12px;
      border-width: 0;
      background-color: $primary-color;
      color: white;
      font-size: medium;
      cursor: pointer;
      transition: all 0.15s;
      transition-timing-function: ease-in-out;
      
      span::after \{
          content: '\\21E8';
          opacity: 0;        
      \}
      
      &:hover \{
          background-color: #c8e2b3;
          color: rgb(96, 96, 96);
          height: 50px;
          width: 220px;
  
          span::after \{
              content: '\\21E8';
              opacity: 1;        
          \}
      \}
    \}
    \`\`\`
    `;

  public markdownCSSClick =
    `
    \`\`\`css
    .secondary-button \{
      margin: 8px;
      height: 40px;
      width: 200px;
      border-radius: 12px;
      border-width: 0;
      background-color: $primary-color;
      color: white;
      font-size: medium;
      cursor: pointer;
      transition: all 0.2s;
      transition-timing-function: ease-out;
  
      &.active \{
         background-color: rgb(208, 230, 230);
         color: rgb(90, 90, 90);
         box-shadow: 0px 4px 10px -4px rgb(98, 98, 98);
          height: 60px;
      \}
    \}
    \`\`\`
    `;

  public markdownCSSImage =
    `
    \`\`\`css
    .rotate \{
      animation: rotation 1s linear infinite;
    \}
    
    @keyframes rotation \{
      from \{
        transform: rotate(0deg);
      \}
      to \{
        transform: rotate(359deg);
      \}
    \}
    \`\`\`
    `;
}
