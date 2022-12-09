import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
    coinId: string;
}

interface IHistorical {
    status: number;
    time_open: number;
    time_close: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
    error?: any;
}

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {
        refetchInterval: 10000,
    });

    return (
        <div>
            {isLoading ? (
                "Loading chart....."
            ) : (
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => price.close) as number[],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 300,
                            width: 300,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        grid: {
                            show: false,
                        },
                        xaxis: {
                            type: "datetime",
                            labels: {
                                show: false,
                            },
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            categories: data?.map((price) => new Date(price.time_close * 1000).toISOString()),
                        },
                        yaxis: {
                            show: false,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#badc58"],
                                stops: [0, 100],
                            },
                        },
                        colors: ["#e056fd"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$ ${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}

export default Chart;
