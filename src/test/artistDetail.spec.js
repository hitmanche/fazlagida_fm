import { render, screen } from "./test-util";
import ArtistDetail from "../components/partial/artistDetail";

test("Outputs to be given when installing and after installing the ArtistDetail component", async () => {
  Object.defineProperty(window, "location", {
    writable: true,
    value: {
      search: "?name=Tarkan",
    },
  });

  render(<ArtistDetail />);

  // While the component is being loaded, we need to see the "loading" text that we need to see first.
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  // After installing the component, we need to see the text "Top Albums", which is in the first place in the loaded data.
  expect(await screen.findByText(/Top Albums/i)).toBeInTheDocument();
});

test("Outputs that should be given when installing and after installing ArtistDetail component incorrectly", async () => {
  Object.defineProperty(window, "location", {
    writable: true,
    value: {
      search: "?name=DJHAFGWAJ",
    },
  });

  render(<ArtistDetail />);

  // While the component is being loaded, we need to see the "loading" text that we need to see first.
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  // After installing the component, we need to see the text "Top Albums", which is in the first place in the loaded data.
  expect(await screen.findByText(/Artist Name not found/i)).toBeInTheDocument();
});
