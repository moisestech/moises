import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { WorkshopNavigation } from '../WorkshopNavigation';
import { usePathname } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('WorkshopNavigation', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/workshop/own-your-digital-presence/day/1/session/1/introduction/participants');
  });

  it('initializes with correct sections open based on current path', () => {
    render(<WorkshopNavigation />);
    
    // Check that Day 1 is open
    const day1Section = screen.getByText('Day 1');
    expect(day1Section).toBeInTheDocument();
    
    // Check that Participants is visible (since it's a child of Day 1)
    const participantsSection = screen.getByText('Participants');
    expect(participantsSection).toBeInTheDocument();
  });

  it('toggles sections correctly', () => {
    render(<WorkshopNavigation />);
    
    // Click on Session 1
    const session1Section = screen.getByText('Session 1');
    fireEvent.click(session1Section);
    
    // Session 1 should now be open
    expect(session1Section.closest('div')).toHaveClass('rotate-90');
    
    // Day 1 should remain open
    const day1Section = screen.getByText('Day 1');
    expect(day1Section.closest('div')).toHaveClass('rotate-90');
  });

  it('closes other day sections when opening a new day', () => {
    render(<WorkshopNavigation />);
    
    // Click on Day 2
    const day2Section = screen.getByText('Day 2');
    fireEvent.click(day2Section);
    
    // Day 1 should be closed
    const day1Section = screen.getByText('Day 1');
    expect(day1Section.closest('div')).not.toHaveClass('rotate-90');
    
    // Day 2 should be open
    expect(day2Section.closest('div')).toHaveClass('rotate-90');
  });

  it('maintains parent sections open when opening a child', () => {
    render(<WorkshopNavigation />);
    
    // Click on Session 1
    const session1Section = screen.getByText('Session 1');
    fireEvent.click(session1Section);
    
    // Day 1 should remain open
    const day1Section = screen.getByText('Day 1');
    expect(day1Section.closest('div')).toHaveClass('rotate-90');
    
    // Session 1 should be open
    expect(session1Section.closest('div')).toHaveClass('rotate-90');
  });

  it('closes child sections when closing a parent', () => {
    render(<WorkshopNavigation />);
    
    // Click on Day 1 to close it
    const day1Section = screen.getByText('Day 1');
    fireEvent.click(day1Section);
    
    // Day 1 should be closed
    expect(day1Section.closest('div')).not.toHaveClass('rotate-90');
    
    // Session 1 should be closed
    const session1Section = screen.getByText('Session 1');
    expect(session1Section.closest('div')).not.toHaveClass('rotate-90');
  });

  it('highlights active path correctly', () => {
    render(<WorkshopNavigation />);
    
    // Participants should be highlighted
    const participantsSection = screen.getByText('Participants');
    expect(participantsSection.closest('a')).toHaveClass('bg-indigo-50');
    
    // Day 1 should be highlighted
    const day1Section = screen.getByText('Day 1');
    expect(day1Section.closest('a')).toHaveClass('bg-indigo-50');
  });

  it('handles collapse correctly', () => {
    render(<WorkshopNavigation />);
    
    // Click collapse button
    const collapseButton = screen.getByRole('button');
    fireEvent.click(collapseButton);
    
    // All sections should be closed
    const day1Section = screen.getByText('Day 1');
    expect(day1Section.closest('div')).not.toHaveClass('rotate-90');
    
    const session1Section = screen.getByText('Session 1');
    expect(session1Section.closest('div')).not.toHaveClass('rotate-90');
  });
}); 