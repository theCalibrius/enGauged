import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
// import { MessageComponent } from "./messages/message.component";
// import { MessageListComponent } from "./messages/message-list.component";
// import { MessageInputComponent } from "./messages/message-input.component";
// import { MessagesComponent } from "./messages/messages.component";
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
// import { AuthenticationPageComponent } from "./auth/authenticationPage.component";

import { ProfileComponent } from './profile/profile.component';
import { PageNameDirective } from './header.directive';
import { TrackerComponent } from './tracker/tracker.component';
import { CategorySelectorComponent } from './categorySelector/categorySelector.component';
import { ContentComponent } from './content/content.component';
import { ContentPageContentComponent } from './content/contentPageContent.component';
import { CategoryFilterPipe } from './categorySelector/filter-by-category.pipe';
import { CategoryNameDirective } from './categorySelector/categoryName.directive';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesPageContentComponent  } from './activities/activitiesPageContent.component';
import { QuestionContentComponent} from './questions/questionContent.component';
import { QuestionsComponent} from './questions/questions.component';

import { TrackerVisualizationComponent} from './tracker/trackerVisualization.component';
import { TrackerVisualizationGoodComponent} from './tracker/trackerVisualizationGood.component';
import { TrackerVisualizationBadComponent} from './tracker/trackerVisualizationBad.component';
import { TrackerVisualizationNeutralComponent} from './tracker/trackerVisualizationNeutral.component';

import { InsightsComponent} from './tracker/insights.component';
import { NotificationsComponent} from './tracker/notifications.component';
import { RelationshipManagerComponent} from './profile/relationshipManager.component';
import { AccountManagerComponent} from './profile/accountManager.component';
import { BioManagerComponent} from './profile/bioManager.component';
import { PreferencesManagerComponent} from './profile/preferencesManager.component';
import { RelationshipService} from './relationships/relationship.service';


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
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