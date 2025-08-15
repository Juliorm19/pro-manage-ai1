import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-coding',
  templateUrl: './ai-coding.component.html',
  styleUrls: ['./ai-coding.component.css']
})
export class AiCodingComponent {
  activeTab: 'preview' | 'code' = 'preview';
  
  latexCode: string = `\\documentclass{article}
\\usepackage{pgfgantt}

\\begin{document}
\\begin{ganttchart}[vgrid, hgrid]{1}{12}
    \\gantttitle{Cronograma del Proyecto}{12} \\\\
    \\gantttitlelist{1,...,12}{1} \\\\

    \\ganttgroup{Planificaci\\'on}{1}{4} \\\\
    \\ganttbar{An\\'alisis de Requisitos}{1}{2} \\\\
    \\ganttbar{Dise\\~no del Sistema}{3}{4} \\\\

    \\ganttgroup{Ejecuci\\'on}{5}{10} \\\\
    \\ganttbar{Desarrollo M\\'odulo A}{5}{7} \\\\
    \\ganttbar{Desarrollo M\\'odulo B}{6}{9} \\\\
    \\ganttmilestone{Integraci\\'on}{9} \\\\
    \\ganttbar{Pruebas QA}{9}{10} \\\\

    \\ganttgroup{Cierre}{11}{12} \\\\
    \\ganttbar{Documentaci\\'on Final}{11}{11} \\\\
    \\ganttbar{Despliegue}{12}{12}
\\end{ganttchart}
\\end{document}`;

  setActiveTab(tab: 'preview' | 'code'): void {
    this.activeTab = tab;
  }
}