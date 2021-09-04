import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieHeader from "./MovieHeader";

describe("MovieHeader", () => {
  test("renders MovieHeader component", async () => {
    const movie = {
      backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 35,
          name: "Comedy",
        },
      ],
      imdb_id: "tt6334354",
      overview:
        "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      poster_path: "/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg",
      release_date: "2021-07-28",
      runtime: 132,
      tagline: "They're dying to save the world.",
      title: "The Suicide Squad",
      vote_average: 8,
    };

    render(
      <BrowserRouter>
        <MovieHeader movie={movie} />
      </BrowserRouter>
    );

    expect(await screen.findByText(/The Suicide Squad/)).toBeInTheDocument();
    expect(await screen.findByText(/Action/)).toBeInTheDocument();
    expect(await screen.findByText(/Adventure/)).toBeInTheDocument();
    expect(await screen.findByText(/Fantasy/)).toBeInTheDocument();
    expect(await screen.findByText(/Comedy/)).toBeInTheDocument();
    expect(
      await screen.findByText(
        /Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese./
      )
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/They're dying to save the world./)
    ).toBeInTheDocument();
  });
});
