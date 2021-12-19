import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import MovieList from "./MovieList";

jest.mock("axios");

describe("Movie List component", () => {
  test("fetches movies from an API and displays them", async () => {
    const movies = {
      data: {
        page: 1,
        results: [
          {
            adult: false,
            backdrop_path: "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
            genre_ids: [28, 12, 14, 35],
            id: 436969,
            original_language: "en",
            original_title: "The Suicide Squad",
            overview:
              "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
            popularity: 2889.059,
            poster_path: "/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg",
            release_date: "2021-07-28",
            title: "The Suicide Squad",
            video: false,
            vote_average: 8,
            vote_count: 3322,
          },
          {
            adult: false,
            backdrop_path: "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
            genre_ids: [28, 878, 12],
            id: 588228,
            original_language: "en",
            original_title: "The Tomorrow War",
            overview:
              "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
            popularity: 2325.63,
            poster_path: "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
            release_date: "2021-09-03",
            title: "The Tomorrow War",
            video: false,
            vote_average: 8.1,
            vote_count: 137,
          },
        ],
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(movies));

    render(
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    );

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });
});
