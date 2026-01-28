interface MealTimeButtonProps {
  selected: 'pagi' | 'siang' | 'malam' | null
  onSelect: (mealTime: 'pagi' | 'siang' | 'malam') => void
}

const MealTimeButton = ({ selected, onSelect }: MealTimeButtonProps) => {
  return (
    <div className="d-flex justify-content-around mt-3">
      <button
        className={`btn py-3 px-3 jadwal-makan ${selected === 'pagi' ? 'info' : ''}`}
        onClick={() => onSelect('pagi')}
      >
        Makan <br />
        Pagi
      </button>

      <button
        className={`btn py-3 px-3 jadwal-makan ${selected === 'siang' ? 'info' : ''}`}
        onClick={() => onSelect('siang')}
      >
        Makan <br />
        Siang
      </button>

      <button
        className={`btn py-3 px-3 jadwal-makan ${selected === 'malam' ? 'info' : ''}`}
        onClick={() => onSelect('malam')}
      >
        Makan <br />
        Malam
      </button>
    </div>
  )
}

export default MealTimeButton
