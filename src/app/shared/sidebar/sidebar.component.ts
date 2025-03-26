// sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class SidebarComponent {
  isCollapsed = false;

  // Données des membres de l'équipe
  teamMembers = [
    { id: 1, name: 'John Doe', avatar: 'assets/images/Avatar.png' },
    { id: 2, name: 'Jane Smith', avatar: ' assets/images/img2.png' },
    { id: 3, name: 'Mike Johnson', avatar: ' assets/images/Avatar.png' },
    { id: 4, name: 'Sarah Brown', avatar: ' assets/images/Avatar.png' },
    { id: 5, name: 'Alex Wilson', avatar: ' assets/images/Avatar.png' },
    { id: 6, name: 'Emily Davis', avatar: ' assets/images/Avatar.png' },
    { id: 7, name: 'Chris Miller', avatar: ' assets/images/Avatar.png' }
  ];

  // Visibilité des sections
  sections = {
    menuPrincipal: true,
    organisation: true,
    equipe: true,
    personnel: true
  };

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSection(section: keyof typeof this.sections) {
    this.sections[section] = !this.sections[section];
  }

  // Récupère les membres de l'équipe à afficher et le nombre supplémentaire
  get displayedTeamMembers() {
    return this.teamMembers.slice(0, 3);
  }

  get additionalMembersCount() {
    return Math.max(0, this.teamMembers.length - 3);
  }
}
