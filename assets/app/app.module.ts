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
import { RelationshipsSectionComponent} from './relationshipsSection.component';
import { TrackerVisualizationComponent} from './trackerVisualization.component';
import { InsightsComponent} from './insights.component';
import { NotificationsComponent} from './notifications.component';



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
        RelationshipsSectionComponent,
        TrackerVisualizationComponent,
        InsightsComponent,
        NotificationsComponent
        

    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
        

        
    ],
    providers: [AuthService, ErrorService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {

}