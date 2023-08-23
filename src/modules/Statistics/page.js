'use client'

import Chart from '@/components/Chart';
import React from 'react'

export default function MessageStats() {

    const options = {
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

    const series = [{
        name: 'Users',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 200, 220]
    }];

    const articleSeries = [{
        name: 'Articles',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 200, 220]
    }];

    const articleOptions = {
        chart: {
            id: 'my-chart',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            min: 0
        },
        colors: ['#800080']
    };

    return (
        <>
            <div>
                <div className='mb-8'>
                    <h1 className='text-2xl'>User Activity</h1>
                </div>
                <Chart options={options} series={series} type='line' height={300} />

                <div className='mt-8'>
                    <h1 className='text-2xl'>Articles</h1>
                </div>
                <Chart options={articleOptions} series={articleSeries} type='heatmap' height={300} />
            </div>
        </>
    )
}