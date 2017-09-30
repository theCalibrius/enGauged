import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Feed</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/auth']">Login/Logout</a></li>
                </ul>
            </nav>
        </header>
    `
})

// The routerLinkActive directive above highlights whichever link is active right now.  If we're on the messages page, the messages link is highlighted.

export class HeaderComponent {

}