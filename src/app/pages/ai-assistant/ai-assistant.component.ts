import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

@Component({
  selector: 'app-ai-assistant',
  standalone:true,
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.css']
})
export class AiAssistantComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  messages: Message[] = [];
  currentMessage: string = '';
  suggestionChips = ['Resumen', 'Nueva tarea', 'Cronograma', 'Carga laboral', 'Riesgos', 'Noticias', 'Sugerencias IA'];

  ngOnInit(): void {
    this.messages = [
      { sender: 'bot', content: 'Hola, ¿en qué puedo asistirte hoy?' },
      { sender: 'user', content: 'Requiero apoyo para estructurar la EDT para el desarrollo del módulo de seguimiento de entregables en nuestro sistema interno de gestión.' },
      { sender: 'bot', content: `<p>Entendido. Para esta solicitud, seguiré los lineamientos del PMI para construir la Estructura de Desglose del Trabajo (EDT). A continuación, te presento una propuesta de desglose para ese módulo:</p>
                                <p><strong>Nivel 1:</strong> Desarrollo del módulo de seguimiento de entregables</p>
                                <ul>
                                    <li><strong>Nivel 2.1:</strong> Análisis de requerimientos</li>
                                    <li><strong>Nivel 2.2:</strong> Diseño de interfaz de usuario</li>
                                    <li><strong>Nivel 2.3:</strong> Desarrollo backend</li>
                                    <li><strong>Nivel 2.4:</strong> Integración con otros módulos del sistema</li>
                                    <li><strong>Nivel 2.5:</strong> Pruebas funcionales y validación</li>
                                    <li><strong>Nivel 2.6:</strong> Documentación técnica</li>
                                    <li><strong>Nivel 2.7:</strong> Capacitación a usuarios internos</li>
                                </ul>
                                <p>¿Quieres que lo exporte en formato PDF, Excel o que genere también la línea base para integrarlo al cronograma del proyecto?</p>` }
    ];
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    if (this.currentMessage.trim()) {
      this.messages.push({ sender: 'user', content: this.currentMessage });
      this.currentMessage = '';
      
      // Simulate bot response
      setTimeout(() => {
        this.messages.push({ sender: 'bot', content: 'Estoy procesando tu solicitud... Dame un momento.' });
      }, 1000);
    }
  }

  useSuggestion(chip: string) {
    this.currentMessage = chip;
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}