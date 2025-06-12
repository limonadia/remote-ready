import { render, screen } from '@testing-library/react'
import JobCard from '../../components/JobCard'
import { Job } from '@/pages'

const mockJob: Job = {
  id: '1',
  title: 'Frontend Developer',
  company: 'Kiwi',
  location: 'Remote',
  type: 'Full-time',
  description: '',
}

test('renders job details correctly', () => {
  render(<JobCard job={mockJob} />)

  expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
  expect(screen.getByText('Kiwi')).toBeInTheDocument()
  expect(screen.getByText('Remote • Full-time')).toBeInTheDocument()
})
