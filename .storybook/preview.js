import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Story />
      </Provider>
    </QueryClientProvider>
  ),
];
