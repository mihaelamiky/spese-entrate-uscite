import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-entrata',
  templateUrl: './componente-entrata.component.html',
  styleUrls: ['./componente-entrata.component.css']
})
export class ComponenteEntrataComponent {

  entrate = [
    { id: 1, testo: "Vendita prodotti", prezzo: 100.50 },
    { id: 2, testo: "Prestazioni di servizi", prezzo: 25.75 },
    { id: 3, testo: "Affitto immobili", prezzo: 500.00 },
    { id: 4, testo: "Interessi sui depositi bancari", prezzo: 12.40 },
    { id: 5, testo: "Commissioni bancarie", prezzo: 7.80 },
    { id: 6, testo: "Dividendi", prezzo: 30.25 },
    { id: 7, testo: "Ricavi pubblicitari", prezzo: 150.00 },
    { id: 8, testo: "Ricavi da sponsorizzazioni", prezzo: 200.00 },
    { id: 9, testo: "Quote associative", prezzo: 50.00 },
    { id: 10, testo: "Ricavi da vendita online", prezzo: 80.00 },
    { id: 11, testo: "Affitti di attrezzature", prezzo: 300.00 },
    { id: 12, testo: "Ricavi da consulenze", prezzo: 150.00 },
    { id: 13, testo: "Ricavi da investimenti", prezzo: 50.00 },
    { id: 14, testo: "Ricavi da affiliazioni", prezzo: 120.00 },
    { id: 15, testo: "Ricavi da royalties", prezzo: 90.00 },
    { id: 16, testo: "Guadagni da franchising", prezzo: 300.00 },
    { id: 17, testo: "Rimborsi spese", prezzo: 20.00 },
    { id: 18, testo: "Proventi da borsa", prezzo: 75.50 },
    { id: 19, testo: "Incassi da eventi organizzati", prezzo: 500.00 },
    { id: 20, testo: "Vendita di asset", prezzo: 1000.00 }
  ];

  newEntrata = { id: 0, testo: '', prezzo: 0 };

  addNewEntrata() {
    this.newEntrata.id = this.entrate.length + 1;
    this.entrate.push(this.newEntrata);
    this.newEntrata = { id: 0, testo: '', prezzo: 0 }; // Resetta il nuovo oggetto entrata
  }

  removeEntrata(index: number) {
    this.entrate.splice(index, 1);
  }
}