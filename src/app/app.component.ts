import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers = [
    {
      name: 'testsrv',
      capacity: 10,
      id: this.generateUniqueId()
    },
    {
      name: 'liveserver',
      capacity: 100,
      id: this.generateUniqueId()
    }
  ];

  constructor(private serverService: ServerService) { }

  onSaveServer() {
    this.serverService.postServers(this.servers).subscribe(
      (val) => console.log(val),
      (err) => console.log(err)
    );
  }

  generateUniqueId() {
    return Math.round(Math.random() * 10000);
  }

  onAddServer(servername) {
    this.servers.push({
      name: servername,
      capacity: 200,
      id: this.generateUniqueId()
    });
  }

}
