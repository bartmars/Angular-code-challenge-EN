import { Component, OnInit } from '@angular/core'
import { KentekenCheck } from 'rdw-kenteken-check'
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'app-vehicle-license-plate',
    templateUrl: './vehicle-license-plate.component.html',
    styleUrls: ['./vehicle-license-plate.component.css'],
    standalone: false,
})
export class VehicleLicensePlateComponent implements OnInit {
  
  /* 
  JavaScript validatie oplossing
Deze kentekenCheck is gebaseerd op de actuele formats(kentekencombinaties) welke zijn uitgegeven door de RDW(Rijksdienst voor het Wegverkeer) 
en welke zijn te vinden via bijgevoegde link. De open data API vd RDW retourneert geen koppeltekens in het kenteken voor zover bekend, dus 
vandaar deze oplossing. De array van regex patronen correspondeert met de lijst van formats op de site vd RDW in bijgaande link. De functie 
'kentekenCheck' controleert of het ingevoerde kenteken correspondeert met het eerste valide patroon en retourneert vervolgens true en
formatteert het kenteken. Indien false retourneert default 'XX-XX-XX', of een custom string, er worden in de latere series geen klinkers 
gebruikt en geen karakters die de RDW voorschrijft. Kentekens met AA(Koningshuis) en CD(Corps Diplomatique) zijn in deze functie niet meegenomen, 
de letters C en Q mogen niet meer vd overheid ivm interpretatie problemen en zijn wel meegenomen.

Verboden combinaties: GVD, KKK, KVT, LPF, NSB, PKK, PSV, TBS, SS en SD (ook niet in lettercombinaties met 3 letters) Verboden vanaf serie 11: PVV, SGP, VVD, FVD, BBB

De rdw toont momenteel alleen serie 6 t/m 10 op hun website https://www.rdw.nl/particulier/voertuigen/auto/de-kentekenplaat/het-kenteken-op-de-plaat/uitleg-over-de-cijfers-en-letters-op-de-kentekenplaat

Alle series voor personenauto's zijn hier zichtbaar https://nl.m.wikipedia.org/wiki/Nederlands_kenteken
  */
  inputElm = document.getElementsByName('kenteken')

  kenteken: string = ''
  
  handleClick() {
    console.log(this.inputElm)
  }

  verifyLicensePlate() {
    // const kt = new KentekenCheck(inputElm.value)

    // const kt = new KentekenCheck('S007JB');
    // const kt = new KentekenCheck(this.kenteken);
    // alert(kt.formatLicense())
    const inputElm = document.getElementById('myInput') as HTMLInputElement
    let value = inputElm.value

    console.log(value)

  }

  ngOnInit(): void {
  }

}
