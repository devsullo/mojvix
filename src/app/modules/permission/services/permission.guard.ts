import { RouteService } from './../../../shared/services/route.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { IPermissionGuardModel } from '../model/permission-guard.model';
import { PermissionService } from './permission.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private _permissionService: PermissionService,
    private routeService: RouteService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const data = route.data['Permission'] as IPermissionGuardModel;

    if (Array.isArray(data.Only) && Array.isArray(data.Except)) {
      throw "can't use both 'Only' and 'Except' in route data.";
    }

    if (Array.isArray(data.Only)) {
      const hasDefined = this._permissionService.hasOneDefined(data.Only);
      if (hasDefined) {
        return true;
      }
      if (data.RedirectTo && data.RedirectTo !== undefined) {
        this.routeService.navigate({ path: [data.RedirectTo] });
      }
      return false;
    }

    if (Array.isArray(data.Except)) {
      const hasDefined = this._permissionService.hasOneDefined(data.Except);
      if (!hasDefined) {
        return true;
      }
      if (data.RedirectTo && data.RedirectTo !== undefined) {
        this.routeService.navigate({ path: [data.RedirectTo] });
      }
      return false;
    }
  }
}
