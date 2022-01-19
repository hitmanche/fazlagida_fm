import { render, screen } from "./test-util";
import TopArtists from "../components/partial/topArtists";

test("Test for before and after installing TopArtists component", async () => {
  render(<TopArtists />);

  // While the component is being loaded, we need to see the "loading" text that we need to see first.
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  // After installing the component, we need to see the text "The Weeknd", which is in the first place in the loaded data.
  expect(await screen.findByText(/The Weeknd/i)).toBeInTheDocument();
});
