import * as React from 'react'
import {Outlet, createRootRoute} from '@tanstack/react-router'
import {NuqsAdapter} from "nuqs/adapters/react";
import {Toaster} from "sonner";
import {NotFoundError} from "@/features/Errors/NotFoundError.tsx";

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFoundError,
})

function RootComponent() {
    return (
        <React.Fragment>
            <NuqsAdapter>
                <Outlet/>
                <Toaster
                    position="bottom-right"
                    richColors={true}
                    dir={"ltr"}
                    closeButton={true}
                />
            </NuqsAdapter>
        </React.Fragment>
    )
}
