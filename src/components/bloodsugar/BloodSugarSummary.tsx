interface Props {
  average: number
  records?: Array<{ beforeAfter: 'before' | 'after' }>
}

export default function BloodSugarSummary({ average, records = [] }: Props) {
  const getStatus = () => {
    if (average === 0) {
      return { text: 'Belum Ada Data', color: '#666', category: 'none' as const, advice: '' }
    }

    const beforeCount = records.filter(r => r.beforeAfter === 'before').length
    const afterCount = records.filter(r => r.beforeAfter === 'after').length
    const isMostlyFasting = beforeCount >= afterCount

    // 1. Hipoglikemia
    if (average < 70) {
      return {
        text: '🚨 Hipoglikemia (Bahaya!)',
        color: '#dc3545',
        category: 'low' as const,
        advice: 'Segera konsumsi 15g karbohidrat cepat (jus, permen). Ukur ulang setelah 15 menit.'
      }
    }

    // 2. Puasa / sebelum makan
    if (isMostlyFasting || records.length === 0) {
      if (average <= 99) {
        return {
          text: '✅ Normal (Puasa)',
          color: '#28a745',
          category: 'normal' as const,
          advice: 'Pertahankan pola hidup sehat: diet seimbang, olahraga teratur.'
        }
      }
      if (average <= 125) {
        return {
          text: '⚠️ Prediabetes (Puasa)',
          color: '#ffc107',
          category: 'prediabetes' as const,
          advice: 'Turunkan berat badan 5-7%, olahraga 150 menit/minggu, kurangi gula & karbohidrat olahan.'
        }
      }
      return {
        text: '🔴 Diabetes (Konsultasi Dokter)',
        color: '#dc3545',
        category: 'diabetes' as const,
        advice: 'Tes OGTT dan HbA1c segera. Konsultasi dokter untuk penanganan lebih lanjut.'
      }
    }

    // 3. Sesudah makan (2 jam)
    if (average < 180) {
      return {
        text: '✅ Normal (Sesudah Makan)',
        color: '#28a745',
        category: 'normal' as const,
        advice: 'Kadar gula normal setelah makan. Kontrol porsi karbohidrat tetap penting.'
      }
    }
    if (average <= 250) {
      return {
        text: '⚠️ Elevated (Resiko Diabetes)',
        color: '#ffc107',
        category: 'elevated' as const,
        advice: 'Jalan 15 menit setelah makan, batasi makanan tinggi GI (nasi putih, roti, gula).'
      }
    }
    return {
      text: '🔴 Hyperglycemia (Bahaya)',
      color: '#dc3545',
      category: 'high' as const,
      advice: 'Tes lab lengkap dan konsultasi dokter segera. Risiko komplikasi tinggi.'
    }
  }

  const status = getStatus()

  const getRiskScore = () => {
    if (status.category === 'low') return 90
    if (status.category === 'diabetes' || status.category === 'high') return 85
    if (status.category === 'prediabetes' || status.category === 'elevated') return 55
    if (status.category === 'normal') return 10
    return 0
  }

  const overallRisk = getRiskScore()

  // kalau belum ada data, progress = 0
  const progressPercent = average === 0
    ? 0
    : Math.min((average / 300) * 100, 100)

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
              alt="Blood Sugar Monitor"
            />
          </div>

          {/* Content */}
          <div className="col-md-8">
            <h5 className="fw-bold mb-3 text-dark">Rerata Gula Darah Anda</h5>

            {/* Blood Sugar Display */}
            <div className="mb-3">
              <div className="d-flex align-items-baseline gap-2">
                <div className="badge bg-primary rounded-3 px-4 py-3" style={{ fontSize: '32px', fontWeight: 700 }}>
                  {average}
                </div>
                <span className="fs-4 fw-bold text-muted">mg/dL</span>
              </div>
            </div>

            {/* Progress Bar Level */}
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <small className="text-muted">Level</small>
                <small className="text-muted fw-bold">
                  {Math.round(progressPercent)}% dari batas aman
                </small>
              </div>
              <div className="progress rounded-pill" style={{ height: '14px' }}>
                <div
                  className={`progress-bar progress-bar-striped progress-bar-animated ${
                    status.category === 'low'
                      ? 'bg-danger'
                      : status.category === 'diabetes' || status.category === 'high'
                      ? 'bg-danger'
                      : status.category === 'prediabetes' || status.category === 'elevated'
                      ? 'bg-warning'
                      : 'bg-success'
                  }`}
                  role="progressbar"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Risk Indicator */}
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <small className="text-muted">Indikator Risiko</small>
                <small className="text-muted fw-bold">{overallRisk}%</small>
              </div>
              <div className="progress rounded-pill" style={{ height: '10px' }}>
                <div
                  className={`progress-bar ${
                    overallRisk >= 80 ? 'bg-danger' :
                    overallRisk >= 50 ? 'bg-warning' :
                    'bg-success'
                  }`}
                  style={{ width: `${overallRisk}%` }}
                />
              </div>
            </div>

            {/* Status Box */}
            <div
              className={`p-3 rounded-3 mb-3 border-start border-4 ${
                status.category === 'low'
                  ? 'border-danger bg-danger-subtle'
                  : status.category === 'diabetes' || status.category === 'high'
                  ? 'border-danger bg-danger-subtle'
                  : status.category === 'prediabetes' || status.category === 'elevated'
                  ? 'border-warning bg-warning-subtle'
                  : status.category === 'normal'
                  ? 'border-success bg-success-subtle'
                  : 'border-secondary'
              }`}
            >
              <h6 className="mb-0 fw-bold" style={{ color: status.color }}>
                {status.text}
              </h6>
            </div>

            {/* Advice */}
            {status.advice && (
              <div className="alert alert-light border mb-3" style={{ fontSize: '13px' }}>
                <i className="fas fa-lightbulb text-warning me-2"></i>
                <strong>Saran:</strong> {status.advice}
              </div>
            )}

            {/* Reference Guide */}
            <div className="bg-light rounded-3 p-3">
              <small className="text-muted d-block mb-2 fw-bold">
                <i className="fas fa-info-circle me-1"></i> Panduan ADA 2024:
              </small>
              <div className="row g-2" style={{ fontSize: '11px' }}>
                <div className="col-6">
                  <div className="mb-1">
                    <i className="fas fa-clock me-1 text-primary"></i>
                    <strong>Puasa (8 jam):</strong>
                  </div>
                  <span className="badge bg-success rounded-pill w-100 mb-1">
                    Normal: 70-99 mg/dL
                  </span>
                  <span className="badge bg-warning rounded-pill w-100">
                    Prediabetes: 100-125
                  </span>
                </div>
                <div className="col-6">
                  <div className="mb-1">
                    <i className="fas fa-utensils me-1 text-warning"></i>
                    <strong>Sesudah Makan:</strong>
                  </div>
                  <span className="badge bg-success rounded-pill w-100 mb-1">
                    Normal: &lt;180 mg/dL
                  </span>
                  <span className="badge bg-warning rounded-pill w-100">
                    Elevated: 180-250
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
