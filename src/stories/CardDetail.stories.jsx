import React from "react";
import CardDetail from "../components/partial/cardDetail";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "FazlaGıda/CardDetail",
  component: CardDetail,
  decorators: [
    (CardDetailTemplate) => (
      <MemoryRouter>
        <CardDetailTemplate />
      </MemoryRouter>
    ),
  ],
  argTypes: {},
};

const Template = (args) => <CardDetail {...args} />;

export const CardArtist = Template.bind({});
CardArtist.args = {
  type: "Artist",
  name: "Taylor Swift",
  listeners: 123456,
  playcount: 123456,
  image:
    "https://cdn1.ntv.com.tr/gorsel/NXY-Rop6Q0Sb_rvOygL4-g.jpg?width=1000&mode=crop&scale=both",
};

export const CardAlbum = Template.bind({});
CardAlbum.args = {
  type: "Graduation",
  name: "Born to Die",
  playcount: 57905266,
  image:
    "https://upload.wikimedia.org/wikipedia/tr/3/35/Lana-del-rey-born-to-die.jpg",
};

export const CardTrack = Template.bind({});
CardTrack.args = {
  type: "Stranger",
  name: "Young and Beautiful",
  listeners: 797833,
  playcount: 7684988,
  image:
    "https://resizing.flixster.com/5YJifhOxIXV2NN4OgbXo_j5H7qk=/206x305/v2/https://flxt.tmsimg.com/assets/p10276528_p_v10_aa.jpg",
};
