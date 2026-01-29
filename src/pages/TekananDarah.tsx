import { useEffect, useState } from 'react'
import BloodPressureChart from '../components/bloodpressure/BloodPressureChart'
import BloodPressureForm from '../components/bloodpressure/BloodPressureForm'
import BloodPressureHistory from '../components/bloodpressure/BloodPressureHistory'
import BloodPressureSummary from '../components/bloodpressure/BloodPressureSummary'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

export interface BloodPressureRecord {
  id: string
  systolic: number
  diastolic: number
  date: string
  time: string
  beforeAfter: 'before' | 'after'
  mealTime: 'breakfast' | 'lunch' | 'dinner'
  timestamp: number
}

export default function TekananDarah() {
  const [records, setRecords] = useState<BloodPressureRecord[]>([])

  // Load data dari localStorage saat pertama kali page dibuka
  useEffect(() => {
    const savedRecords = localStorage.getItem('bloodPressureRecords')
    if (savedRecords) {
      try {
        const parsed = JSON.parse(savedRecords)
        setRecords(parsed)
      } catch (error) {
        console.error('Error loading records:', error)
      }
    }
  }, [])

  const handleAddRecord = (record: Omit<BloodPressureRecord, 'id' | 'timestamp'>) => {
    const newRecord: BloodPressureRecord = {
      ...record,
      id: Date.now().toString(),
      timestamp: Date.now(),
    }
    const updatedRecords = [...records, newRecord]
    setRecords(updatedRecords)
    
    // Save to localStorage
    localStorage.setItem('bloodPressureRecords', JSON.stringify(updatedRecords))
  }

  const handleDeleteRecord = (id: string) => {
    const updatedRecords = records.filter(record => record.id !== id)
    setRecords(updatedRecords)
    
    // Update localStorage
    localStorage.setItem('bloodPressureRecords', JSON.stringify(updatedRecords))
  }

  const handleExportCSV = () => {
    if (records.length === 0) {
      alert('Belum ada data untuk di-export!')
      return
    }

    // Prepare CSV content
    const headers = ['Tanggal', 'Waktu', 'Systolic (mmHg)', 'Diastolic (mmHg)', 'Sebelum/Sesudah', 'Waktu Makan']
    const rows = records.map(record => [
      record.date,
      record.time,
      record.systolic,
      record.diastolic,
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
    link.setAttribute('download', `tekanan-darah-${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Calculate average
  const calculateAverage = () => {
    if (records.length === 0) return { systolic: 0, diastolic: 0 }
    const sumSystolic = records.reduce((acc, record) => acc + record.systolic, 0)
    const sumDiastolic = records.reduce((acc, record) => acc + record.diastolic, 0)
    return {
      systolic: Math.round(sumSystolic / records.length),
      diastolic: Math.round(sumDiastolic / records.length)
    }
  }

  const average = calculateAverage()

  return (
    <div>
      <Navbar />
      
      <div className="container mt-5">
        {/* Header */}
        <div className="text-center">
          <h2 className="grafik">
            Grafik <span className="tekanan-darah">Tekanan Darah</span>
          </h2>
        </div>

        {/* Chart Section */}
        <BloodPressureChart records={records} />

        {/* Summary Card */}
        <BloodPressureSummary average={average} />

        {/* Form Section */}
        <BloodPressureForm onSubmit={handleAddRecord} />

        {/* History Section */}
        <BloodPressureHistory 
          records={records} 
          onDelete={handleDeleteRecord}
          onExport={handleExportCSV}
        />
      </div>

      <Footer />
    </div>
  )
}
