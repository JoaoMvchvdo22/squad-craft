import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  player: any = { name: '', id: 0, style: '' };
  playersList: string[] = [];
  teamsList: any[] = [];
  showteamsList: boolean = false;
  quantity: string = '';

  constructor() { }

  ngOnInit() {
  }

  onPlayerChange(event: any): void {
    if (event) {
      this.player =  {
        name: event.target.value,
        id: Math.floor(Math.random() * 1000),
      };
    }
  }

  onPlayerStyleChange(event: any): void {
    if (event) {
      this.player.style = event.target.value;
    }
  }

  onAddPlayer(): void {
    if (!this.player) {
      return;
    }
    this.playersList.push(this.player);
    this.player = { name: '', id: 0, style: '' };
  }

  createTeams() {
    if (this.playersList.length < Number(this.quantity)) {
      console.error('Não há jogadores suficientes para criar times.');
      return;
    }

    const shuffledPlayers = this.shuffle(this.playersList.slice());
    const playersPerTeam = Number(this.quantity);
    const totalTeams = Math.ceil(this.playersList.length / playersPerTeam);

    this.teamsList = [];

    for (let i = 0; i < totalTeams; i++) {
      const startIndex = i * playersPerTeam;
      const endIndex = Math.min(startIndex + playersPerTeam, this.playersList.length);
      const team = shuffledPlayers.slice(startIndex, endIndex);
      this.teamsList.push(team);
    }

    console.log(this.teamsList);
    this.showteamsList = true;
  }

  shuffle(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  onRemovePlayer(player: any): void {
    this.playersList = this.playersList.filter((p: any) => p.id !== player.id);
  }

  onQuantityChange(event: any): void {
    this.quantity = event.target.value;
  }

}
