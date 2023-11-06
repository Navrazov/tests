import { fireEvent, render, screen } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import { renderWithRouter } from "../tests/helpers/RenderWithRouter";

jest.mock("axios");

describe("Test Users", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders learn react link", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });

  test("redirect to user page", async () => {
    axios.get.mockReturnValue(response);
    render(renderWithRouter(<Users />));
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    fireEvent.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
