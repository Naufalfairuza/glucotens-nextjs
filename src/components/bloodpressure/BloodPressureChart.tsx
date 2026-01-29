import { Chart, registerables } from 'chart.js'
import { useEffect, useRef } from 'react'
import { BloodPressureRecord } from '../../pages/TekananDarah'

Chart.register(...registerables)

interface Props {
  records: BloodPressureRecord[]
}

export default function BloodPressureChart({ records }: Props) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy previous chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    // Prepare data for chart
    const labels = records.length > 0 
      ? records.map(r => {
          const [year, month, day] = r.date.split('-')
          const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
          return dateObj.toLocaleDateString('id-ID', { 
            day: '2-digit', 
            month: 'short' 
          })
        })
      : ['', '', '', '', '', '']

    const systolicData = records.length > 0
      ? records.map(r => r.systolic)
      : [0, 0, 0, 0, 0, 0]

    const diastolicData = records.length > 0
      ? records.map(r => r.diastolic)
      : [0, 0, 0, 0, 0, 0]

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Systolic (mmHg)',
            backgroundColor: '#6610f2',
            borderWidth: 1,
            data: systolicData,
            borderRadius: 8,
          },
          {
            label: 'Diastolic (mmHg)',
            backgroundColor: '#E6681A',
            borderWidth: 1,
            data: diastolicData,
            borderRadius: 8,
          }
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Tekanan Darah (mmHg)',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
          x: {
            title: {
              display: true,
              text: 'Tanggal',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [records])

  return (
    <div style={{ width: '70%', marginLeft: '15%' }} className="my-5">
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  )
}
