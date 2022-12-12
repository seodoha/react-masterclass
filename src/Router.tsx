import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import Coins from "./screens/Coins";
import Coin from "./screens/Coin";
import Chart from "./screens/Chart";
import Price from "./screens/Price";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Coins />,
                errorElement: <ErrorComponent />,
            },
            {
                path: ":coinId",
                element: <Coin />,
                children: [
                    {
                        path: "chart",
                        element: <Chart />,
                    },
                    {
                        path: "price",
                        element: <Price />,
                    },
                ],
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;
