import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  constructor(private http: HttpClient) {}

  generateResponse(prompt: string): Observable<string> {
    return this.http.post<{ text?: string; result?: any }>('/api/gemini', { prompt })
      .pipe(
        map(res => {
          // El backend debe devolver { text: '...' } con la respuesta procesada
          if (res && (res.text || res.result)) {
            return (res.text ?? JSON.stringify(res.result));
          }
          return 'No se recibió respuesta del modelo.';
        })
      );
  }
}