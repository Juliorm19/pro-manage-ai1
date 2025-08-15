import { Component, OnInit } from '@angular/core';

// Datos simulados (en una app real, vendrían de un servicio)
const taskData = [
    { task: 'Diseño de la interfaz de usuario (UI)', assignedTo: 'Ana Torres', status: 'Completada', dueDate: '2025-08-15' },
    { task: 'Desarrollo del backend para autenticación', assignedTo: 'Carlos Ruiz', status: 'En Progreso', dueDate: '2025-08-25' },
    { task: 'Configuración de la base de datos', assignedTo: 'Carlos Ruiz', status: 'En Progreso', dueDate: '2025-08-22' },
    { task: 'Creación de endpoints de la API REST', assignedTo: 'Sofia Vega', status: 'Pendiente', dueDate: '2025-09-01' },
    { task: 'Pruebas de integración de módulos', assignedTo: 'Equipo QA', status: 'Pendiente', dueDate: '2025-09-10' }
];

const riskData = [
    { description: 'Retraso en la entrega de componentes por parte de un proveedor clave.', probability: 'Media', impact: 'Alto', mitigation: 'Identificar proveedores alternativos y mantener comunicación constante.' },
    { description: 'Cambios inesperados en los requisitos del cliente (scope creep).', probability: 'Alta', impact: 'Alto', mitigation: 'Implementar un proceso formal de control de cambios y comunicar el impacto de cada cambio.' },
    { description: 'Problemas técnicos imprevistos con la nueva tecnología adoptada.', probability: 'Media', impact: 'Medio', mitigation: 'Realizar pruebas de concepto (PoC) tempranas y capacitar al equipo.' },
    { description: 'Baja disponibilidad de personal clave por enfermedad o renuncia.', probability: 'Baja', impact: 'Alto', mitigation: 'Documentar todo el conocimiento crítico y fomentar el trabajo en pares.' }
];

@Component({
  selector: 'app-report-writing',
  templateUrl: './report-writing.component.html',
  styleUrls: ['./report-writing.component.css']
})
export class ReportWritingComponent implements OnInit {
  // Propiedades para el resumen de tareas
  totalTasks: number = 0;
  completedTasks: number = 0;
  lastDueDate: string = '';

  // Propiedades para el resumen de riesgos
  totalRisks: number = 0;
  highImpactRisks: number = 0;

  ngOnInit(): void {
    this.generateReportData();
  }

  generateReportData(): void {
    // Cálculo de datos de tareas
    this.totalTasks = taskData.length;
    this.completedTasks = taskData.filter(t => t.status === 'Completada').length;
    this.lastDueDate = taskData.length > 0 ? taskData[taskData.length - 1].dueDate : 'N/A';

    // Cálculo de datos de riesgos
    this.totalRisks = riskData.length;
    this.highImpactRisks = riskData.filter(r => r.impact === 'Alto').length;
  }
}