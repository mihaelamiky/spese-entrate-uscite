import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-uscita',
  templateUrl: './componente-uscita.component.html',
  styleUrls: ['./componente-uscita.component.css']
})
export class ComponenteUscitaComponent {

  uscite = [
    { id: 1, testo: "Acquisto di materie prime", prezzo: 300.50 },
    { id: 2, testo: "Pagamento affitto locale", prezzo: 1000.00 },
    { id: 3, testo: "Spese per forniture ufficio", prezzo: 150.25 },
    { id: 4, testo: "Pagamento utenze", prezzo: 250.00 },
    { id: 5, testo: "Affitto mezzi di trasporto", prezzo: 200.75 },
    { id: 6, testo: "Rimborso spese dipendenti", prezzo: 500.00 },
    { id: 7, testo: "Tasse", prezzo: 800.00 },
    { id: 8, testo: "Manutenzione attrezzature", prezzo: 120.00 },
    { id: 9, testo: "Spese pubblicitarie", prezzo: 350.00 },
    { id: 10, testo: "Pagamento prestito", prezzo: 400.00 },
    { id: 11, testo: "Assicurazione", prezzo: 180.00 },
    { id: 12, testo: "Spese legali", prezzo: 300.00 },
    { id: 13, testo: "Contributi previdenziali", prezzo: 400.00 },
    { id: 14, testo: "Riparazioni", prezzo: 250.00 },
    { id: 15, testo: "Viaggi di lavoro", prezzo: 700.00 },
    { id: 16, testo: "Spese di rappresentanza", prezzo: 600.00 },
    { id: 17, testo: "Investimenti", prezzo: 1000.00 },
    { id: 18, testo: "Debiti e interessi", prezzo: 150.00 },
    { id: 19, testo: "Ammortamento beni", prezzo: 400.00 },
    { id: 20, testo: "Spese varie", prezzo: 300.00 }
];

  newUscita = { id: 0, testo: '', prezzo:0  };

  addNewUscita() {
    this.newUscita.id = this.uscite.length + 1;
    this.uscite.push(this.newUscita);
    this.newUscita = { id: 0, testo: '', prezzo: 0 }; 
  }

  removeUscita(index: number) {
    this.uscite.splice(index, 1);
  }
}

