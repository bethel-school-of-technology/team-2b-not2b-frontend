import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { User } from "../components/models/user";
import { UserService } from "../components/services/user.service";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { ProgressBarComponent } from './progress-bar.component';



@Component({
  selector: "app-dashboard", "app-progress-bar",
  templateUrl: "./dashboard.component.html", "./progress-bar.component",
  styleUrls: ["./dashboard.component.css"],
})

export class DashboardComponent implements OnInit {
  currentNinja: User = new User();
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "username",
    "email"
  ];

  /** Based on the screen size, switch from standard to one column per row */
  // dashboard.component.js

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 4, rows: 1 },
          chart: { cols: 4, rows: 3 },
          table: { cols: 4, rows: 1 },
        };
      }

      return {
        columns: 4,
        table: { cols: 4, rows: 1 },
        miniCard: { cols: 1, rows: 3 },
        chart: { cols: 3, rows: 3 },
      };
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private ninjaUserService: UserService,
    private myRouter: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem("ninjaToken")) {
      window.alert("You are not logged in");
      this.myRouter.navigate(["/login-page"]);
    } else {
      this.ninjaUserService.getNinjaInfo().subscribe((ninjaResponseObject) => {
        console.log(ninjaResponseObject);
        this.currentNinja = ninjaResponseObject.user;
      });
    }
  }

  
  
}
