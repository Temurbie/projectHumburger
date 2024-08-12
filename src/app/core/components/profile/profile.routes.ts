import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";

export const rout:Routes=[
    {
      path : '', component: ProfileComponent, children:[
        {
            path: '',
            loadComponent: () => import("./history/history.component")
              .then(mod => mod.HistoryComponent)
        },
        {
            path: "history",
            loadComponent : () => import('./history/history.component')
                .then(mod => mod.HistoryComponent)
        }
      ]
    }
]