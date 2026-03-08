import OoliteDigitalBudgetClientPage from '../OoliteDigitalBudgetClientPage';

export const metadata = {
  title: 'Oolite Digital Arts Lab | Budget',
  description: 'Capital spend strategy and budget details for the Oolite Digital Arts Lab. $80k budget breakdown with timeline and KPI framework.',
};

export default function OoliteBudgetPage() {
  // Server component - logs will appear in server console
  console.log('🟡 [OoliteBudgetPage] Server component rendering');
  console.log('🟡 [OoliteBudgetPage] Metadata:', JSON.stringify(metadata, null, 2));
  console.log('🟡 [OoliteBudgetPage] About to render OoliteDigitalBudgetClientPage');
  
  return <OoliteDigitalBudgetClientPage />;
} 