import { Directive, Input, OnInit } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TokenService } from '../component/token/token.services';

@Directive({
  selector: '[appShowByClaim]'
})
export class ShowByClaimDirective implements OnInit {
  @Input('appShowByClaim') renderTemplate;
  private claims: string[];
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private tokenService: TokenService) { }

  ngOnInit() {
    this.setClaims();
    const hasPermission = this.hasPermission(this.claims);
    if (hasPermission) {
      if (this.renderTemplate) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    } else {
      if (this.renderTemplate) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
  }

  private hasPermission(expectedRoles: Array<string>): boolean {
    let hasPermission = false;


    const tokens = this.tokenService.getTokens();
    expectedRoles.forEach(role => {
      tokens.forEach(t => {
        const temRole = t.HasRole(role.replace('!', ''));
        const currPerm = this.isNot(role) ? !temRole : temRole;
        hasPermission = hasPermission || currPerm;
      });
    });
    return hasPermission;
  }

  setClaims() {
    this.claims = this.renderTemplate.split('|');

  }

  isNot(claim: string) {
    return claim.indexOf('!') >= 0;
  }
}
