import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {json} from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

import { Outlet, Link } from "@remix-run/react";
import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

type LoaderData = {jokelistItem:Array<{id:String,name:String}>};

export const loader:LoaderFunction =async () => {
  const data :LoaderData = {
    jokelistItem:await db.joke.findMany(
      {
        take:5,
        select:{id:true,name:true},
        orderBy:{createdAt:"desc"}

      }),
  };
  return json(data);
};

export default function Jokes() {
  console.log("some thins");
  const data = useLoaderData<LoaderData>();
  console.log(data);
  return (
    <div className="jokes-layout">
  <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link
              to="/"
              title="Remix Jokes"
              aria-label="Remix Jokes"
            >
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
        </div>
      </header>  <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            
            <Link to=".">Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>

            {data.jokelistItem.map((joke) => (
                <li key={joke.id}>
                  <Link to={joke.id}>{joke.name}</Link>
                </li>
            ))}
                
              <li>
                <Link to="some-joke-id">Hippo</Link>
              </li>
          
             
             
            </ul>
            <Link to="create" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
  </div>
  )
}
