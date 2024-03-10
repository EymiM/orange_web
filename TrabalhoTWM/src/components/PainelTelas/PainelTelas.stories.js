import { PainelTelas } from ".";

export default {
  title: "Components/PainelTelas",
  component: PainelTelas,
  argTypes: {
    property1: {
      options: ["frame-12", "frame-11", "frame-10"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-12",
    className: {},
    telasClassName: {},
    telas: "/img/telas-2.png",
  },
};
