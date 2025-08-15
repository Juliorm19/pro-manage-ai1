import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Risk {
  description: string;
  probability: string;
  impact: string;
  mitigation: string;
}

@Component({
  selector: 'app-risk-assessment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk-assessment.component.html',
  styleUrls: ['./risk-assessment.component.css']
})
export class RiskAssessmentComponent implements OnInit {
  risks: Risk[] = [];

  ngOnInit(): void {
    this.risks = [
      { description: 'Retraso en la entrega de componentes por parte de un proveedor clave.', probability: 'Media', impact: 'Alto', mitigation: 'Identificar proveedores alternativos y mantener comunicación constante.' },
      { description: 'Cambios inesperados en los requisitos del cliente (scope creep).', probability: 'Alta', impact: 'Alto', mitigation: 'Implementar un proceso formal de control de cambios y comunicar el impacto de cada cambio.' },
      { description: 'Problemas técnicos imprevistos con la nueva tecnología adoptada.', probability: 'Media', impact: 'Medio', mitigation: 'Realizar pruebas de concepto (PoC) tempranas y capacitar al equipo.' },
      { description: 'Baja disponibilidad de personal clave por enfermedad o renuncia.', probability: 'Baja', impact: 'Alto', mitigation: 'Documentar todo el conocimiento crítico y fomentar el trabajo en pares.' }
    ];
  }
}