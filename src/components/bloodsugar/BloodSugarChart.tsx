import { Chart, registerables } from 'chart.js'
import { useEffect, useRef } from 'react'
import { BloodSugarRecord } from '../../pages/GulaDarah'

Chart.register(...registerables)

interface Props {
  records: BloodSugarRecord[]
}

export default function BloodSugarChart({ records }: Props) {
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

    // Prepare data for chart - FIX: gunakan date dari input user
    const labels = records.length > 0 
      ? records.map(r => {
          // Parse date dari input (format: YYYY-MM-DD)
          const [year, month, day] = r.date.split('-')
          const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
          return dateObj.toLocaleDateString('id-ID', { 
            day: '2-digit', 
            month: 'short' 
          })
        })
      : ['', '', '', '', '', '']

    const data = records.length > 0
      ? records.map(r => r.value)
      : [0, 0, 0, 0, 0, 0]

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Gula Darah (mg/dl)',
          backgroundColor: '#6610f2',
          borderWidth: 1,
          data: data,
          borderRadius: 8,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Kadar Gula Darah (mg/dl)',
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
      <canvas ref={chartRef} width="300" height="200"></canvas>
    </div>
  )
}
