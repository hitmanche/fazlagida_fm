import lastfmReducer, {
  fetchTopArtists,
  decrement,
  incrementByAmount,
} from "../redux/slice/lastfmSlice";

describe("lastfm reducer", () => {
  const initialState = {
    topArtists: {
      data: [],
      loading: false,
      message: "",
    },
    artistDetailList: {
      data: {},
      loading: false,
      message: "",
    },
  };
  it("should handle initial state", () => {
    expect(lastfmReducer(undefined, { type: "unknown" })).toEqual({
      topArtists: {
        data: [],
        loading: false,
        message: "",
      },
      artistDetailList: {
        data: {},
        loading: false,
        message: "",
      },
    });
  });

  it("should handle fetchTopArtists", async () => {
    const actual = lastfmReducer(initialState, await fetchTopArtists(1));
    console.log(actual);
    expect(actual.topArtists.data.length).toEqual(50);
  });
});
