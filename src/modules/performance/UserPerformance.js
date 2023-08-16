'use client'

import Chart from '@/components/Chart'
import React from 'react'

export default function UserPerformance() {

    const lineOptions = {
        chart: {
            id: 'my-chart'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            min: 0
        }
    };

    const lineSeries = [{
        name: 'Profit ($)',
        data: [3000, 4000, 3500, 5000, 4900, 6000, 7000, 9100, 12500, 15000, 20000, 22000]
    }];

    return (
        <>
            <div className='mb-4'>
                <h1>Performance Matrix</h1>
            </div>

            <Chart
                options={lineOptions}
                series={lineSeries}
                type='bar'
                height={300}
            />
        </>
    )
}
