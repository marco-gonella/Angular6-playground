import { Injectable } from "@angular/core";
import { UsersService } from "../services/users.service";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class UsersResolver implements Resolve<any>{

    constructor(private userService: UsersService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
        const userId = route.params["userId"];
        return this.userService.getUserInfo(userId)
    }

}