interface Props {
  average: {
    systolic: number
    diastolic: number
  }
}

export default function BloodPressureSummary({ average }: Props) {
  const getStatus = () => {
    const { systolic, diastolic } = average
    
    if (systolic === 0 && diastolic === 0) {
      return { text: 'Belum Ada Data', color: '#666', category: 'none', advice: '' }
    }
    
    // 1. KRISIS HIPERTENSI (Emergency)
    if (systolic > 180 || diastolic > 120) {
      return { 
        text: '🚨 KRISIS HIPERTENSI', 
        color: '#8b0000', 
        category: 'emergency' as const,
        advice: 'DARURAT MEDIS! Hubungi 119 atau ke IGD segera. Risiko stroke/serangan jantung sangat tinggi.'
      }
    }
    
    // 2. HIPERTENSI TAHAP 2
    if (systolic >= 140 || diastolic >= 90) {
      return { 
        text: '🔴 Hipertensi Tahap 2', 
        color: '#dc3545', 
        category: 'stage2' as const,
        advice: 'Konsultasi dokter untuk obat antihipertensi. Diet DASH (garam <1500mg/hari), olahraga 150 menit/minggu.'
      }
    }
    
    // 3. HIPERTENSI TAHAP 1
    if (systolic >= 130 || diastolic >= 80) {
      return { 
        text: '🟠 Hipertensi Tahap 1', 
        color: '#ff6b35', 
        category: 'stage1' as const,
        advice: 'Ubah gaya hidup: turunkan berat 5-10%, garam <2300mg/hari, hindari alkohol/rokok.'
      }
    }
    
    // 4. ELEVATED
    if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
      return { 
        text: '⚠️ Elevated (Sedikit Tinggi)', 
        color: '#ffc107', 
        category: 'elevated' as const,
        advice: 'Mulai intervensi sekarang! Olahraga aerobik 30 menit/hari, perbanyak buah-sayur.'
      }
    }
    
    // 5. HIPOTENSI
    if (systolic < 90 || diastolic < 60) {
      return { 
        text: '🔵 Hipotensi (Tekanan Rendah)', 
        color: '#17a2b8', 
        category: 'low' as const,
        advice: 'Jika pusing/lemas: tingkatkan garam, minum 2-3L/hari, hindari berdiri tiba-tiba.'
      }
    }
    
    // 6. NORMAL
    if (systolic < 120 && diastolic < 80) {
      return { 
        text: '✅ Tekanan Darah Normal', 
        color: '#28a745', 
        category: 'normal' as const,
        advice: 'Pertahankan pola hidup sehat: diet seimbang, olahraga teratur, tidur 7-9 jam.'
      }
    }
    
    return { text: 'Data Tidak Valid', color: '#666', category: 'invalid' as const, advice: '' }
  }

  const status = getStatus()
  const { systolic, diastolic } = average
  
  const getRiskScore = () => {
    if (status.category === 'emergency') return 100
    if (status.category === 'stage2') return 85
    if (status.category === 'stage1') return 60
    if (status.category === 'elevated') return 35
    if (status.category === 'low') return 25
    if (status.category === 'normal') return 10
    return 0          // untuk 'none' atau 'invalid'
  }
  
  // kalau belum ada data, overallRisk = 0 → bar kosong
  const overallRisk = getRiskScore()

  return (
    <div className="card border-0 shadow-lg mb-4 mx-auto" style={{ maxWidth: '600px' }}>
      <div className="card-body p-4">
        {/* Disclaimer */}
        <div className="alert alert-warning alert-dismissible fade show mb-3" style={{ fontSize: '13px' }}>
          <i className="fas fa-exclamation-triangle me-2"></i>
          Hasil ini hanya referensi. Konsultasi dokter untuk diagnosis resmi.
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        </div>

        <div className="row align-items-center g-3">
          {/* Image */}
          <div className="col-md-4 text-center">
            <img 
              src="/image/imgtekanandarah.png" 
              width="140" 
              className="img-fluid rounded-3" 
              alt="Blood Pressure Monitor" 
            />
          </div>
          
          {/* Content */}
          <div className="col-md-8">
            <h5 className="fw-bold mb-3 text-dark">Rerata Tekanan Darah Anda</h5>
            
            {/* Blood Pressure Display */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="text-center">
                <div className="badge bg-primary rounded-3 px-3 py-2 mb-1" style={{ fontSize: '24px' }}>
                  {systolic}
                </div>
                <small className="d-block text-muted fw-bold">Systolic</small>
              </div>
              <span className="fs-2 fw-bold text-muted">/</span>
              <div className="text-center">
                <div className="badge rounded-3 px-3 py-2 mb-1" style={{ fontSize: '24px', backgroundColor: '#E6681A', color: 'white' }}>
                  {diastolic}
                </div>
                <small className="d-block text-muted fw-bold">Diastolic</small>
              </div>
              <span className="fs-5 text-muted">mmHg</span>
            </div>

            {/* Risk Meter */}
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <small className="text-muted">Indikator Risiko</small>
                <small className="text-muted fw-bold">{overallRisk}%</small>
              </div>
              <div className="progress rounded-pill" style={{ height: '12px' }}>
                <div 
                  className={`progress-bar progress-bar-striped ${
                    status.category === 'emergency' ? 'bg-dark' :
                    status.category === 'stage2' ? 'bg-danger' :
                    status.category === 'stage1' ? 'bg-warning' :
                    status.category === 'elevated' ? 'bg-info' :
                    status.category === 'normal' ? 'bg-success' : 'bg-secondary'
                  }`}
                  role="progressbar"
                  style={{ width: `${overallRisk}%` }}   
                />
              </div>
            </div>

            {/* Status Box */}
            <div className={`p-3 rounded-3 mb-3 border-start border-4 ${
              status.category === 'emergency' ? 'border-dark bg-dark-subtle' :
              status.category === 'stage2' ? 'border-danger bg-danger-subtle' :
              status.category === 'stage1' ? 'border-warning bg-warning-subtle' :
              status.category === 'elevated' ? 'border-info bg-info-subtle' :
              status.category === 'normal' ? 'border-success bg-success-subtle' :
              status.category === 'low' ? 'border-info bg-info-subtle' : 'border-secondary'
            }`}>
              <h6 className="mb-0 fw-bold" style={{ color: status.color }}>
                {status.text}
              </h6>
            </div>

            {/* Advice */}
            {status.advice && (
              <div className="alert alert-light border mb-3" style={{ fontSize: '13px' }}>
                <i className="fas fa-lightbulb text-warning me-2"></i>
                <strong>Rekomendasi:</strong> {status.advice}
              </div>
            )}

            {/* Reference Guide */}
            <div className="bg-light rounded-3 p-3">
              <small className="text-muted d-block mb-2 fw-bold">
                <i className="fas fa-info-circle me-1"></i> Panduan AHA 2023:
              </small>
              <div className="row g-2" style={{ fontSize: '11px' }}>
                <div className="col-6">
                  <span className="badge bg-success rounded-pill w-100">Normal: &lt;120/&lt;80</span>
                </div>
                <div className="col-6">
                  <span className="badge bg-info rounded-pill w-100">Elevated: 120-129/&lt;80</span>
                </div>
                <div className="col-6">
                  <span className="badge bg-warning rounded-pill w-100">Stage 1: 130-139/80-89</span>
                </div>
                <div className="col-6">
                  <span className="badge bg-danger rounded-pill w-100">Stage 2: ≥140/≥90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
