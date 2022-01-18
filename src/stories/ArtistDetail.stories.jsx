import React from "react";
import ArtistDetail from "../components/partial/artistDetail";
import { withQuery } from "@storybook/addon-queryparams";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "FazlaGıda/ArtistDetail",
  component: ArtistDetail,
  decorators: [
    (CardDetailTemplate) => (
      <MemoryRouter>
        <CardDetailTemplate />
      </MemoryRouter>
    ),
    withQuery,
  ],
};

const Template = (args) => <ArtistDetail {...args} />;

export const Tarkan = Template.bind({});
Tarkan.parameters = {
  query: {
    name: "Tarkan",
  },
};

export const BritneySpears = Template.bind({});
BritneySpears.parameters = {
  query: {
    name: "Britney Spears",
  },
};
