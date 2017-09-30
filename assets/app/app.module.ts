import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { AuthenticationPageComponent } from "./auth/authenticationPage.component";

import { ProfileComponent } from './profile.component';
import { PageNameDirective } from './header.directive';
import { TrackerComponent } from './tracker.component';
import { CategorySelectorComponent } from './categorySelector.component';
import { ContentComponent } from './content.component';
import { ContentPageContentComponent } from './contentPageContent.component';
import { CategoryFilterPipe } from './filter-by-category.pipe';
import { CategoryNameDirective } from './categoryName.directive';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesPageContentComponent  } from './activitiesPageContent.component';
import { QuestionContentComponent} from './questionContent.component';
import { QuestionsComponent} from './questions.component';

import { TrackerVisualizationComponent} from './trackerVisualization.component';
import { TrackerVisualizationGoodComponent} from './trackerVisualizationGood.component';
import { TrackerVisualizationBadComponent} from './trackerVisualizationBad.component';
import { TrackerVisualizationNeutralComponent} from './trackerVisualizationNeutral.component';

import { InsightsComponent} from './insights.component';
import { NotificationsComponent} from './notifications.component';
import { RelationshipManagerComponent} from './relationshipManager.component';
import { AccountManagerComponent} from './accountManager.component';
import { BioManagerComponent} from './bioManager.component';
import { PreferencesManagerComponent} from './preferencesManager.component';
import { RelationshipService} from './relationships/relationship.service';


@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        AuthenticationPageComponent,
        ProfileComponent,
        PageNameDirective,
        TrackerComponent,
        CategorySelectorComponent,
        ContentComponent,
        ContentPageContentComponent,
        CategoryFilterPipe,
        CategoryNameDirective,
        ActivitiesComponent,
        ActivitiesPageContentComponent,
        QuestionContentComponent,
        QuestionsComponent,
        TrackerVisualizationComponent,
        TrackerVisualizationGoodComponent,
        TrackerVisualizationBadComponent,
        TrackerVisualizationNeutralComponent,
        InsightsComponent,
        NotificationsComponent,
        RelationshipManagerComponent,
        AccountManagerComponent,
        BioManagerComponent,
        PreferencesManagerComponent


    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule



    ],
    providers: [AuthService, ErrorService, RelationshipService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}