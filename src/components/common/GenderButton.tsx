interface GenderButtonProps {
  selected: 'male' | 'female' | null
  onSelect: (gender: 'male' | 'female') => void
}

const GenderButton = ({ selected, onSelect }: GenderButtonProps) => {
  return (
    <>
      <button
        className={`btn btnlkpr mb-4 me-3 ${selected === 'male' ? 'active' : ''}`}
        style={{ borderColor: '#E6681A' }}
        onClick={() => onSelect('male')}
      >
        Laki-laki
      </button>
      <button
        className={`btn btnlkpr mb-4 ${selected === 'female' ? 'active' : ''}`}
        style={{ borderColor: '#E6681A' }}
        onClick={() => onSelect('female')}
      >
        Perempuan
      </button>
    </>
  )
}

export default GenderButton
