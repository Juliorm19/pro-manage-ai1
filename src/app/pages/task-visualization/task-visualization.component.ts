import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Task {
  task: string;
  assignedTo: string;
  status: 'Completada' | 'En Progreso' | 'Pendiente';
  dueDate: string;
}

@Component({
  selector: 'app-task-visualization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-visualization.component.html',
  styleUrls: ['./task-visualization.component.css']
})
export class TaskVisualizationComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks = [
      { task: 'Diseño de la interfaz de usuario (UI)', assignedTo: 'Ana Torres', status: 'Completada', dueDate: '2025-08-15' },
      { task: 'Desarrollo del backend para autenticación', assignedTo: 'Carlos Ruiz', status: 'En Progreso', dueDate: '2025-08-25' },
      { task: 'Configuración de la base de datos', assignedTo: 'Carlos Ruiz', status: 'En Progreso', dueDate: '2025-08-22' },
      { task: 'Creación de endpoints de la API REST', assignedTo: 'Sofia Vega', status: 'Pendiente', dueDate: '2025-09-01' },
      { task: 'Pruebas de integración de módulos', assignedTo: 'Equipo QA', status: 'Pendiente', dueDate: '2025-09-10' }
    ];
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completada': return 'status-completed';
      case 'En Progreso': return 'status-progress';
      case 'Pendiente': return 'status-pending';
      default: return '';
    }
  }
}