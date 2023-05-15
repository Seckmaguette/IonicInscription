import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private readonly USER_KEY = 'user';
  constructor() { }

  login(email: string, password: string): boolean {
  
    // Vérifier les informations d'identification (exemple)
        if (email === email && password === password) {
        
    // Stocker l'utilisateur connecté dans localStorage
    localStorage.setItem(this.USER_KEY, JSON.stringify({ email: email }));
    return true;
        }
    
        return false;
      }
    
    logout(): void {
    // Supprimer l'utilisateur de localStorage lors de la déconnexion
        
       
    localStorage.removeItem(this.USER_KEY);
      }
      isAuthenticated(): boolean {
        
        // Vérifier si l'utilisateur est authentifié en vérifiant la présence de l'utilisateur dans localStorage
            return localStorage.getItem(this.USER_KEY) !== null;
          }
    

      }
    
     
    

