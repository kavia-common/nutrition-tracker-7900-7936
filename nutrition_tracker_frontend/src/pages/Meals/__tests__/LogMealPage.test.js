import { render, screen, fireEvent, waitFor } from '../../../utils/test-utils';
import LogMealPage from '../LogMealPage';
import { mealService } from '../../../services/mealService';

// Mock the meal service
jest.mock('../../../services/mealService');

describe('LogMealPage', () => {
  beforeEach(() => {
    mealService.createMeal.mockReset();
  });

  it('renders log meal form', () => {
    render(<LogMealPage />);
    
    expect(screen.getByText('Log a Meal')).toBeInTheDocument();
    expect(screen.getByLabelText(/meal name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/meal type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/calories/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/protein/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/carbohydrates/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fat/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<LogMealPage />);
    
    const submitButton = screen.getByText('Log Meal');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Meal name is required')).toBeInTheDocument();
      expect(screen.getByText('Please select a meal type')).toBeInTheDocument();
      expect(screen.getByText('Calories are required')).toBeInTheDocument();
      expect(screen.getByText('Protein content is required')).toBeInTheDocument();
      expect(screen.getByText('Carbohydrates content is required')).toBeInTheDocument();
      expect(screen.getByText('Fat content is required')).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const mockMeal = {
      name: 'Test Meal',
      type: 'Breakfast',
      calories: '500',
      protein: '30',
      carbs: '50',
      fat: '20',
    };

    mealService.createMeal.mockResolvedValueOnce(mockMeal);

    render(<LogMealPage />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/meal name/i), {
      target: { value: mockMeal.name },
    });
    fireEvent.change(screen.getByLabelText(/meal type/i), {
      target: { value: mockMeal.type },
    });
    fireEvent.change(screen.getByLabelText(/calories/i), {
      target: { value: mockMeal.calories },
    });
    fireEvent.change(screen.getByLabelText(/protein/i), {
      target: { value: mockMeal.protein },
    });
    fireEvent.change(screen.getByLabelText(/carbohydrates/i), {
      target: { value: mockMeal.carbs },
    });
    fireEvent.change(screen.getByLabelText(/fat/i), {
      target: { value: mockMeal.fat },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Log Meal'));

    await waitFor(() => {
      expect(mealService.createMeal).toHaveBeenCalledWith(mockMeal);
    });
  });
});
