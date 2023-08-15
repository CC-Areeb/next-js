import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Chart({ options, series, type, height }) {
    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type={type}
                height={height}
            />
        </>
    )
}
