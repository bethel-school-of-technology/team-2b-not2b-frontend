import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { User } from "../components/models/user";
import { UserService } from "../components/services/user.service";
import { Router } from "@angular/router";
// import { ProgressBarComponent } from './progress-bar.component';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html", 
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

  displayTanjiroContent: boolean = false;
  displayNezukoContent: boolean = false;
  displayKamadoContent: boolean = false;

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

  constructor(private breakpointObserver: BreakpointObserver, private ninjaUserService: UserService, private myRouter: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem("ninjaToken")) {
      window.alert("You are not logged in");
      this.myRouter.navigate(["/login-page"]);
    } 
    else {
      this.ninjaUserService.getNinjaInfo().subscribe((ninjaResponseObject) => {
        console.log(ninjaResponseObject);
        this.currentNinja = ninjaResponseObject.user;
        // console.log(this.currentNinja);

        if(this.currentNinja.pathChoice === 1){
          this.displayTanjiroContent = true;
          this.displayNezukoContent = false;
          this.displayKamadoContent = false;
          // console.log(this.currentNinja.pathChoice);
        } else if(this.currentNinja.pathChoice === 2){
          this.displayTanjiroContent = false;
          this.displayNezukoContent = true;
          this.displayKamadoContent = false;
          // console.log(this.nezukoPath);
        } else if(this.currentNinja.pathChoice === 3){
          this.displayTanjiroContent = false;
          this.displayNezukoContent = false;
          this.displayKamadoContent = true;
          // console.log("this.kamadoPath");
        }
      });
      
    }

    }

  }

