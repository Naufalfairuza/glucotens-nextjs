import { useEffect, useState } from 'react'
import BloodSugarChart from '../components/bloodsugar/BloodSugarChart'
import BloodSugarForm from '../components/bloodsugar/BloodSugarForm'
import BloodSugarHistory from '../components/bloodsugar/BloodSugarHistory'
import BloodSugarSummary from '../components/bloodsugar/BloodSugarSummary'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

export interface BloodSugarRecord {
  id: string
  value: number
  date: string
  time: string
  beforeAfter: 'before' | 'after'
  mealTime: 'breakfast' | 'lunch' | 'dinner'
  timestamp: number
}

export default function GulaDarah() {
  const [records, setRecords] = useState<BloodSugarRecord[]>([])

  // Load data dari localStorage saat pertama kali page dibuka
  useEffect(() => {
    const savedRecords = localStorage.getItem('bloodSugarRecords')
    if (savedRecords) {
      try {
        const parsed = JSON.parse(savedRecords)
        setRecords(parsed)
      } catch (error) {
        console.error('Error loading records:', error)
      }
    }
  }, [])

  const handleAddRecord = (record: Omit<BloodSugarRecord, 'id' | 'timestamp'>) => {
    const newRecord: BloodSugarRecord = {
      ...record,
      id: Date.now().toString(),
      timestamp: Date.now(),
    }
    const updatedRecords = [...records, newRecord]
    setRecords(updatedRecords)
    
    // Save to localStorage
    localStorage.setItem('bloodSugarRecords', JSON.stringify(updatedRecords))
  }

  const handleDeleteRecord = (id: string) => {
    const updatedRecords = records.filter(record => record.id !== id)
    setRecords(updatedRecords)
    
    // Update localStorage
    localStorage.setItem('bloodSugarRecords', JSON.stringify(updatedRecords))
  }

  const handleExportCSV = () => {
    if (records.length === 0) {
      alert('Belum ada data untuk di-export!')
      return
    }

    // Prepare CSV content
    const headers = ['Tanggal', 'Waktu', 'Kadar Gula Darah (mg/dl)', 'Sebelum/Sesudah', 'Waktu Makan']
    const rows = records.map(record => [
      record.date,
      record.time,
      record.value,
      record.beforeAfter === 'before' ? 'Sebelum' : 'Sesudah',
      record.mealTime === 'breakfast' ? 'Pagi' : record.mealTime === 'lunch' ? 'Siang' : 'Malam'
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `gula-darah-${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Calculate average
  const calculateAverage = () => {
    if (records.length === 0) return 0
    const sum = records.reduce((acc, record) => acc + record.value, 0)
    return Math.round(sum / records.length)
  }

  const average = calculateAverage()

  return (
    <div>
      <Navbar />
      
      <div className="container mt-5">
        {/* Header */}
        <div className="text-center">
          <h2 className="grafik">
            Grafik <span className="gula-darah">Gula Darah</span>
          </h2>
        </div>

        {/* Chart Section */}
        <BloodSugarChart records={records} />

        {/* Summary Card */}
        <BloodSugarSummary average={average} />

        {/* Form Section */}
        <BloodSugarForm onSubmit={handleAddRecord} />

        {/* History Section */}
        <BloodSugarHistory 
          records={records} 
          onDelete={handleDeleteRecord}
          onExport={handleExportCSV}
        />
      </div>

      <Footer />
    </div>
  )
}
