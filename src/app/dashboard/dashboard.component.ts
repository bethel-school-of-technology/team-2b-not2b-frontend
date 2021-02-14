import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { User } from "../components/models/user";
import { UserService } from "../components/services/user.service";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  
})
export class DashboardComponent {

  currentNinja: User = new User();

  displayTanjiroContent: boolean = false;
  displayNezukoContent: boolean = false;
  displayKamadoContent: boolean = false;
  tanjiroPath: number = this.currentNinja.pathChoice;
  nezukoPath: number = this.currentNinja.pathChoice;
  kamadoPath: number = this.currentNinja.pathChoice;


  // currentNinjaDataSource = new MatTableDataSource(this.currentNinja);
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
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        table: { cols: 4, rows: 1 },
        miniCard: { cols: 2, rows: 1 },
        chart: { cols: 2, rows: 2 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private ninjaUserService: UserService, private myRouter: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem("ninjaToken")) {
      window.alert("You are not logged in");
      this.myRouter.navigate(["/login-page"]);
    } else {
      this.ninjaUserService.getNinjaInfo().subscribe((ninjaResponseObject) => {
        console.log(ninjaResponseObject);
        this.currentNinja = ninjaResponseObject.user;
        
      });
      if(this.currentNinja.pathChoice === 1){
        this.displayTanjiroContent = true;
        console.log(this.currentNinja.pathChoice);
      } else if(this.currentNinja.pathChoice === 2){
        this.displayNezukoContent = true;
        console.log(this.nezukoPath);
      } else {
        this.displayKamadoContent = true;
        console.log(this.kamadoPath);
      }
    }
    }
    

  // checkPathChoice(currentNinja: number) {
  //   console.log(this.currentNinja);
  // }

}
