import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,

} from "@remix-run/react";

import globalStylesUrl from "~/styles/global.css";
import globalLargeStylesUrl from "~/styles/global-large.css";
import globalMediumStylesUrl from "~/styles/global-medium.css";


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix: So great, it's funny!",
  viewport: "width=device-width,initial-scale=1",
});


export const links:LinksFunction = ()=>{
  return [
    {rel:"stylesheet", href:globalStylesUrl},
    {rel:"stylesheet", href:globalLargeStylesUrl},
    {rel:"stylesheet", href:globalMediumStylesUrl},
    
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
